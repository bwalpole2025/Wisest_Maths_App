#!/usr/bin/env python3
"""
SymPy answer grader for the Wisest quiz. Reads ONE JSON object on stdin and
writes ONE JSON object on stdout.

Input:  { "student": "<expr>", "canonical": "<expr>", "strictForm": bool }
        The strings are already pre-normalised on the Node side (Unicode/LaTeX
        -> ASCII maths, mathjs-ish), e.g. "x^2 + 2x + 1", "sqrt(3)", "pi".

Output: { "equivalent": true | false | null, "detail": "<reason>" }
        - true/false  : graded
        - null        : could not auto-grade (parse failure / timeout) -> manual

Safety: the input is untrusted student text. We parse with a fixed whitelist of
SymPy functions and NO Python builtins, so nothing executes. Input is bounded by
the caller (<=512 chars). A wall-clock alarm guarantees we always return fast.
"""
import sys
import json
import re
import signal


def emit(equivalent, detail):
    sys.stdout.write(json.dumps({"equivalent": equivalent, "detail": detail}))


def main():
    try:
        data = json.load(sys.stdin)
    except Exception:
        return emit(None, "bad-input")

    student = str(data.get("student", ""))
    canonical = str(data.get("canonical", ""))
    strict = bool(data.get("strictForm", False))

    try:
        from sympy import (
            simplify, expand, trigsimp, Abs, sqrt, root, log, exp,
            sin, cos, tan, cot, sec, csc, asin, acos, atan,
            sinh, cosh, tanh, pi, E, factorial,
            Integer, Float, Rational, Symbol,
        )
        from sympy.parsing.sympy_parser import (
            parse_expr, standard_transformations, convert_xor,
            implicit_multiplication, implicit_application, function_exponentiation,
        )
    except Exception:
        return emit(None, "sympy-unavailable")

    # Transform "sin x" -> sin(x) and "sin^2 x" -> sin(x)**2, plus implicit
    # products ("2x" -> 2*x). We deliberately OMIT split_symbols, so multi-letter
    # names like "theta" or "sin" are never shredded into single-letter products.
    TRANSFORMS = standard_transformations + (
        convert_xor, implicit_application, function_exponentiation, implicit_multiplication,
    )

    # Restrict the parser's global namespace to just the machinery it needs, so
    # untrusted input can't reach SymPy specials whose names collide with Greek
    # variables (e.g. SymPy's beta/gamma functions vs the letters β/γ). Unknown
    # names become free Symbols via auto_symbol.
    GLOBAL = {
        "__builtins__": {},
        "Integer": Integer, "Float": Float, "Rational": Rational, "Symbol": Symbol,
    }

    # Whitelisted functions/constants the student may use.
    NS = {
        "sqrt": sqrt, "root": root, "nthRoot": (lambda x, n: root(x, n)),
        "log": log, "ln": log, "log10": (lambda x: log(x, 10)),
        "exp": exp, "abs": Abs, "Abs": Abs, "factorial": factorial,
        "sin": sin, "cos": cos, "tan": tan, "cot": cot, "sec": sec, "csc": csc,
        "asin": asin, "acos": acos, "atan": atan,
        "arcsin": asin, "arccos": acos, "arctan": atan,
        "sinh": sinh, "cosh": cosh, "tanh": tanh,
        "pi": pi, "E": E, "e": E,
    }

    # Safety allowlist: a real maths answer only uses digits, letters (variable
    # and function names), whitespace and + - * / ^ ( ) . , = . Anything else
    # (underscores, quotes, brackets, keywords) is rejected before parsing, so
    # injection like __import__('os') never reaches the parser.
    SAFE = re.compile(r"^[0-9A-Za-z+\-*/^().,=\s]*$")
    BANNED = re.compile(r"import|lambda|exec|eval|__", re.IGNORECASE)

    def clean(s):
        s = s.strip()
        # In equivalence mode, drop a trailing arbitrary integration constant
        # ("+ C" / "+ c") so x^3/3 + C matches x^3/3.
        if not strict:
            s = re.sub(r"\s*[+\-]\s*[Cc]\s*$", "", s)
        return s

    def parse_one(expr):
        return parse_expr(
            expr, transformations=TRANSFORMS, global_dict=GLOBAL, local_dict=NS, evaluate=True,
        )

    def parse(s):
        s = clean(s)
        if not s or not SAFE.match(s) or BANNED.search(s):
            return None
        if s.count("=") == 1:               # treat "lhs = rhs" as (lhs - rhs)
            lhs, rhs = s.split("=")
            return parse_one(lhs) - parse_one(rhs)
        return parse_one(s)

    def on_alarm(signum, frame):
        raise TimeoutError()

    try:
        signal.signal(signal.SIGALRM, on_alarm)
        signal.alarm(3)
    except Exception:
        pass

    try:
        a = parse(student)
        b = parse(canonical)
        if a is None or b is None:
            return emit(None, "empty-or-unparseable")

        if strict:
            # Form matters: structural equality. SymPy auto-canonicalises
            # commutative ops (x+y == y+x) but keeps (x+1)^2 distinct from
            # x^2+2x+1 — so an unsimplified equivalent answer is rejected.
            return emit(bool(a == b), "strict-form")

        # Equivalence: accept any mathematically equal form.
        if simplify(a - b) == 0:
            return emit(True, "simplify")
        if expand(a - b) == 0 or simplify(trigsimp(a - b)) == 0:
            return emit(True, "trig-or-expand")
        try:
            if a.equals(b):                 # numeric proof at random points
                return emit(True, "numeric-equals")
        except Exception:
            pass
        return emit(False, "not-equivalent")
    except TimeoutError:
        return emit(None, "timeout")
    except Exception:
        return emit(None, "error")
    finally:
        try:
            signal.alarm(0)
        except Exception:
            pass


if __name__ == "__main__":
    main()
