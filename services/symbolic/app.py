#!/usr/bin/env python3
"""
Optional SymPy symbolic-checking microservice for the Wisest diagnosis engine.

Endpoints (JSON in/out):
  POST /equivalent   { a, b, mode }  -> { equivalent: bool }
        mode: "simplify" | "derivative" | "antiderivative"
  POST /classify-form { expr }       -> { isExact, hasSurd, hasFraction, isBareDecimal }
  GET  /health                       -> { ok: true }

Safety: input is untrusted student text. It is parsed with `parse_expr` using a
fixed whitelist of SymPy functions and NO Python builtins (same approach as
scripts/grade_sympy.py), so nothing executes — `__import__('os')`, `exec(...)`,
underscores, quotes, etc. are rejected before parsing. Inputs over MAX_LEN are
refused. Each request runs in a separate worker process with a HARD wall-clock
timeout (the worker is terminated if it overruns), so a pathological expression
cannot hang the service.

Run internally only (bind 127.0.0.1 / private network); never expose publicly.
The Node side calls it over the internal URL and degrades to sampling if it is
unavailable.
"""
from __future__ import annotations

import multiprocessing as mp
import re
import sys
from typing import Any

from fastapi import FastAPI
from fastapi.responses import JSONResponse
from pydantic import BaseModel

MAX_LEN = 256
TIMEOUT_S = 3.0

# A real maths answer only uses digits, letters, whitespace and + - * / ^ ( ) . , = .
# Anything else (underscores, quotes, brackets, keywords) is rejected pre-parse.
SAFE = re.compile(r"^[0-9A-Za-z+\-*/^().,=\s]*$")
BANNED = re.compile(r"import|lambda|exec|eval|__", re.IGNORECASE)

# ── parsing (whitelist only; no builtins) ──────────────────────────────────


def _parser():
    from sympy import (
        Abs, sqrt, root, log, exp, sin, cos, tan, cot, sec, csc,
        asin, acos, atan, sinh, cosh, tanh, pi, E, factorial,
        Integer, Float, Rational, Symbol,
    )
    from sympy.parsing.sympy_parser import (
        parse_expr, standard_transformations, convert_xor,
        implicit_multiplication, implicit_application, function_exponentiation,
    )

    transforms = standard_transformations + (
        convert_xor, implicit_application, function_exponentiation, implicit_multiplication,
    )
    glob = {"__builtins__": {}, "Integer": Integer, "Float": Float,
            "Rational": Rational, "Symbol": Symbol}
    ns = {
        "sqrt": sqrt, "root": root, "nthRoot": (lambda x, n: root(x, n)),
        "log": log, "ln": log, "log10": (lambda x: log(x, 10)),
        "exp": exp, "abs": Abs, "Abs": Abs, "factorial": factorial,
        "sin": sin, "cos": cos, "tan": tan, "cot": cot, "sec": sec, "csc": csc,
        "asin": asin, "acos": acos, "atan": atan,
        "arcsin": asin, "arccos": acos, "arctan": atan,
        "sinh": sinh, "cosh": cosh, "tanh": tanh,
        "pi": pi, "E": E, "e": E,
    }

    def parse(s: str):
        s = (s or "").strip()
        # Drop a trailing arbitrary integration constant ("+ C" / "+ c").
        s = re.sub(r"\s*[+\-]\s*[Cc]\s*$", "", s)
        if not s or len(s) > MAX_LEN or not SAFE.match(s) or BANNED.search(s):
            return None
        one = lambda e: parse_expr(e, transformations=transforms, global_dict=glob,
                                   local_dict=ns, evaluate=True)
        if s.count("=") == 1:
            lhs, rhs = s.split("=")
            return one(lhs) - one(rhs)
        return one(s)

    return parse


def _diff_var(*exprs):
    """Differentiation variable = the single free symbol across the exprs."""
    from sympy import Symbol
    syms = set()
    for e in exprs:
        if e is not None:
            syms |= e.free_symbols
    return next(iter(syms)) if len(syms) == 1 else Symbol("x")

# ── computations (run inside the worker process) ───────────────────────────


def _compute_equivalent(payload: dict) -> dict:
    from sympy import simplify, expand, trigsimp, diff
    parse = _parser()
    a = parse(str(payload.get("a", "")))
    b = parse(str(payload.get("b", "")))
    mode = str(payload.get("mode", "simplify"))
    if a is None or b is None:
        return {"error": "unparseable"}

    if mode == "derivative":
        # a equals d/dx(b)
        diffb = diff(b, _diff_var(b))
        return {"equivalent": bool(simplify(a - diffb) == 0)}
    if mode == "antiderivative":
        # a and b are antiderivatives of a common function ⇒ equal up to a
        # constant ⇒ their derivatives match.
        v = _diff_var(a, b)
        return {"equivalent": bool(simplify(diff(a, v) - diff(b, v)) == 0)}

    # default: "simplify" — accept any mathematically equal form
    if simplify(a - b) == 0 or expand(a - b) == 0 or simplify(trigsimp(a - b)) == 0:
        return {"equivalent": True}
    try:
        if a.equals(b):  # numeric proof at random points
            return {"equivalent": True}
    except Exception:
        pass
    return {"equivalent": False}


def _compute_classify_form(payload: dict) -> dict:
    from sympy import Pow, Rational, Float, pi, E
    parse = _parser()
    expr = parse(str(payload.get("expr", "")))
    if expr is None:
        return {"error": "unparseable"}

    has_surd = any(
        p.is_Pow and p.exp.is_Rational and not p.exp.is_Integer for p in expr.atoms(Pow)
    )
    has_fraction = any(
        a.is_Rational and not a.is_Integer for a in expr.atoms(Rational)
    ) or any(p.is_Pow and p.exp.is_negative for p in expr.atoms(Pow))
    has_const = bool(expr.atoms(pi)) or bool(expr.atoms(E))
    is_bare_decimal = bool(
        getattr(expr, "is_Number", False)
    ) and not has_surd and not has_fraction and not has_const
    return {
        "isExact": not is_bare_decimal,
        "hasSurd": has_surd,
        "hasFraction": has_fraction,
        "isBareDecimal": is_bare_decimal,
    }


_FNS = {"equivalent": _compute_equivalent, "classify": _compute_classify_form}


def _worker(kind: str, payload: dict, q) -> None:
    try:
        q.put(_FNS[kind](payload))
    except Exception as exc:  # never propagate raw tracebacks
        q.put({"error": f"compute-error:{type(exc).__name__}"})


# Use fork on POSIX (fast, no re-import); spawn on Windows.
_CTX = mp.get_context("fork") if sys.platform != "win32" else mp.get_context("spawn")


def run_with_timeout(kind: str, payload: dict, timeout: float = TIMEOUT_S):
    """Run a computation in a worker process with a HARD timeout. Returns the
    result dict, or None if it timed out (worker terminated)."""
    q = _CTX.Queue()
    p = _CTX.Process(target=_worker, args=(kind, payload, q), daemon=True)
    p.start()
    p.join(timeout)
    if p.is_alive():
        p.terminate()
        p.join()
        return None
    try:
        return q.get_nowait()
    except Exception:
        return {"error": "no-result"}

# ── HTTP layer ─────────────────────────────────────────────────────────────

app = FastAPI(title="Wisest symbolic sidecar", docs_url=None, redoc_url=None)


class EquivalentReq(BaseModel):
    a: str
    b: str
    mode: str = "simplify"


class ClassifyReq(BaseModel):
    expr: str


def _too_long(*vals: str) -> bool:
    return any(len(v or "") > MAX_LEN for v in vals)


@app.get("/health")
def health() -> dict:
    return {"ok": True}


@app.post("/equivalent")
def equivalent(req: EquivalentReq):
    if req.mode not in ("simplify", "derivative", "antiderivative"):
        return JSONResponse({"error": "bad-mode"}, status_code=400)
    if _too_long(req.a, req.b):
        return JSONResponse({"error": "too-long"}, status_code=400)
    res = run_with_timeout("equivalent", {"a": req.a, "b": req.b, "mode": req.mode})
    if res is None:
        return JSONResponse({"error": "timeout"}, status_code=504)
    if "error" in res:
        return JSONResponse(res, status_code=400)
    return {"equivalent": bool(res["equivalent"])}


@app.post("/classify-form")
def classify_form(req: ClassifyReq):
    if _too_long(req.expr):
        return JSONResponse({"error": "too-long"}, status_code=400)
    res = run_with_timeout("classify", {"expr": req.expr})
    if res is None:
        return JSONResponse({"error": "timeout"}, status_code=504)
    if "error" in res:
        return JSONResponse(res, status_code=400)
    return res


if __name__ == "__main__":
    import uvicorn

    # Internal only — bind loopback. Front with the internal network in deployment.
    uvicorn.run(app, host="127.0.0.1", port=8765)
