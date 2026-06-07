/**
 * Deterministic correctness engine (Layer 0 of the diagnosis feature).
 *
 * `classify(studentInput, question)` parses both the student input and the
 * stored correct answer into math.js expression trees and decides correctness
 * by dispatching on `question.answerType` — replacing brittle string equality.
 *
 * It is SYNCHRONOUS and reproducible: the only randomness is a seeded PRNG
 * (configurable via `opts.seed`), so identical inputs always yield an identical
 * verdict. The symbolic fallback is math.js `simplify` (in-process) — NOT the
 * async Python `gradeWithSympy`, which cannot be awaited from a sync function.
 *
 * math.js API used (confirmed against mathjs.org docs, v15): `node.compile()`,
 * `compiled.evaluate(scope)`, `mathjsInstance.simplify(str).toString()`. The
 * hardened mathjs instance + the LaTeX→mathjs `normalizeMath`, the safe parser,
 * `freeVars`, `toComparable`, and the seeded `makeRng` are all reused from
 * ./symbolicGrading so this engine shares the same screened namespace.
 */
import { type MathNode } from "mathjs";
import type { Question, ErrorTransform, AnswerType } from "@/lib/types";
import { type SymbolicOracle, getSymbolicOracle } from "./symbolicClient";
import {
  normalizeMath,
  canonicalFor,
  safeParse,
  freeVars,
  toComparable,
  makeRng,
  mathjsInstance,
  REL_TOL,
} from "./symbolicGrading";

export type ExprTree = MathNode;

export interface ClassifyResult {
  correct: boolean;
  /** Student's parsed expression tree (single-expression answer types). */
  parsed?: ExprTree;
  reason?: "unparseable" | "typeMismatch" | "notExactForm" | "precision";
}

/*
 * Tuning + the false-positive justification.
 *
 * Numeric sampling is a *heuristic*, not a proof: two different functions can
 * agree at finitely many points (where their graphs cross). We mitigate this by
 * sampling N=25 points drawn from a wide, non-integer domain — for two genuinely
 * different expressions to agree at all 25 such points is astronomically
 * unlikely, while 25 evaluations stay cheap. A single disagreement at any valid
 * point is conclusive proof of non-equivalence, so we early-exit on it. The
 * tolerance is BOTH relative and absolute: relative so large magnitudes aren't
 * rejected by ordinary float error, absolute so values near zero aren't falsely
 * matched (relative tol collapses to 0 there). When too few points are valid
 * (singularities/domain errors) we defer to the symbolic `simplify` check rather
 * than guess. Acceptable for formative grading; not a theorem prover.
 */
const DEFAULT_SEED = 0x9e3779b9;
const N_SAMPLES = 25;
const MAX_DRAWS = 200;
const ABS_TOL = 1e-9;

type Compiled = ReturnType<MathNode["compile"]>;

function tolEqual(a: number, b: number): boolean {
  return Math.abs(a - b) <= ABS_TOL + REL_TOL * Math.max(Math.abs(a), Math.abs(b));
}

function evalCompiled(fn: Compiled, scope: Record<string, number>): number {
  try {
    return Number(fn.evaluate(scope));
  } catch {
    return NaN;
  }
}

function evalScalar(normalized: string): number {
  const node = safeParse(toComparable(normalized));
  if (!node) return NaN;
  return evalCompiled(node.compile(), {});
}

type Eq = "equivalent" | "different" | "indeterminate";

/** Sampling-based equivalence with a symbolic `simplify` fallback. */
function equivalentNodes(sNode: MathNode, cNode: MathNode, seed: number): Eq {
  const vars = [...new Set([...freeVars(sNode), ...freeVars(cNode)])];
  const sFn = sNode.compile();
  const cFn = cNode.compile();

  if (vars.length === 0) {
    const a = evalCompiled(sFn, {});
    const b = evalCompiled(cFn, {});
    if (!Number.isFinite(a) || !Number.isFinite(b)) return symbolicFallback(sNode, cNode);
    return tolEqual(a, b) ? "equivalent" : "different";
  }

  const rng = makeRng(seed);
  let valid = 0;
  let draws = 0;
  while (valid < N_SAMPLES && draws < MAX_DRAWS) {
    draws++;
    const scope: Record<string, number> = {};
    for (const v of vars) {
      // Wide, non-integer spread that avoids 0 (dodges removable singularities /
      // log(0) / div-by-0) while still probing identities. Same as symbolicGrading.
      scope[v] = (rng() - 0.5) * 7.4 + (rng() < 0.5 ? 0.31 : -0.29);
    }
    const a = evalCompiled(sFn, scope);
    const b = evalCompiled(cFn, scope);
    if (!Number.isFinite(a) || !Number.isFinite(b)) continue; // singularity → resample
    valid++;
    if (!tolEqual(a, b)) return "different"; // one valid disagreement is conclusive
  }
  if (valid < N_SAMPLES) return symbolicFallback(sNode, cNode); // couldn't sample enough
  return "equivalent";
}

function symbolicFallback(sNode: MathNode, cNode: MathNode): Eq {
  try {
    const diff = mathjsInstance
      .simplify(`(${sNode.toString()})-(${cNode.toString()})`)
      .toString()
      .replace(/\s/g, "");
    if (diff === "0" || diff === "-0" || diff === "0.0") return "equivalent";
  } catch {
    /* fall through */
  }
  return "indeterminate"; // can't confirm — caller treats as unparseable, doesn't guess
}

/* ── precision detectors (operate on the raw student string) ─────────────── */

function decimalPlaces(raw: string): number {
  const m = raw.replace(/[^0-9.\-]/g, "").match(/\.(\d+)/);
  return m ? m[1].length : 0;
}

function sigFigs(raw: string): number {
  let s = raw.replace(/[^0-9.eE+\-]/g, "").split(/[eE]/)[0].replace(/[+\-]/g, "");
  if (!/\d/.test(s)) return 0;
  const hasDot = s.includes(".");
  s = s.replace(".", "").replace(/^0+/, "");
  if (s === "") return 1; // the value is zero
  if (!hasDot) s = s.replace(/0+$/, ""); // integer trailing zeros are ambiguous
  return s.length || 1;
}

/* ── comparators ─────────────────────────────────────────────────────────── */

function classifyExpression(rawS: string, rawC: string, seed: number): ClassifyResult {
  const sNode = safeParse(toComparable(normalizeMath(rawS)));
  const cNode = safeParse(toComparable(normalizeMath(rawC)));
  if (!sNode || !cNode) return { correct: false, parsed: sNode ?? undefined, reason: "unparseable" };
  const verdict = equivalentNodes(sNode, cNode, seed);
  if (verdict === "equivalent") return { correct: true, parsed: sNode };
  if (verdict === "different") return { correct: false, parsed: sNode };
  return { correct: false, parsed: sNode, reason: "unparseable" };
}

function classifyNumeric(rawS: string, rawC: string, question: Question): ClassifyResult {
  const sNode = safeParse(toComparable(normalizeMath(rawS)));
  const cNode = safeParse(toComparable(normalizeMath(rawC)));
  if (!sNode) return { correct: false, reason: "unparseable" };
  if (!cNode) return { correct: false, parsed: sNode, reason: "unparseable" };
  const v = evalCompiled(sNode.compile(), {});
  const c = evalCompiled(cNode.compile(), {});
  if (!Number.isFinite(v) || !Number.isFinite(c)) return { correct: false, parsed: sNode, reason: "unparseable" };
  if (!tolEqual(v, c)) return { correct: false, parsed: sNode };

  const meta = question.answerMeta;
  if (meta?.requiredDp != null && decimalPlaces(rawS) !== meta.requiredDp) {
    return { correct: false, parsed: sNode, reason: "precision" };
  }
  if (meta?.requiredSf != null && sigFigs(rawS) !== meta.requiredSf) {
    return { correct: false, parsed: sNode, reason: "precision" };
  }
  return { correct: true, parsed: sNode };
}

function classifyExactValue(rawS: string, rawC: string, seed: number): ClassifyResult {
  const S = normalizeMath(rawS);
  // Form check: a bare decimal/integer is not an acceptable exact form, even if
  // its value is right (e.g. 1.41 for √2). Points Layer 3 at "give exact form".
  if (/^[+-]?\d+(\.\d+)?$/.test(S.replace(/\s/g, ""))) {
    return { correct: false, reason: "notExactForm" };
  }
  const sNode = safeParse(toComparable(S));
  const cNode = safeParse(toComparable(normalizeMath(rawC)));
  if (!sNode || !cNode) return { correct: false, parsed: sNode ?? undefined, reason: "unparseable" };
  const verdict = equivalentNodes(sNode, cNode, seed);
  if (verdict === "equivalent") return { correct: true, parsed: sNode };
  if (verdict === "different") return { correct: false, parsed: sNode };
  return { correct: false, parsed: sNode, reason: "unparseable" };
}

/** Parse "{a, b}", "a, b", "x = a or x = b", "(p ± q)/r" → list of numbers. */
function parseCollection(raw: string): number[] | null {
  let s = raw.trim().replace(/^\\?\{/, "").replace(/\\?\}$/, "").trim();
  s = s.replace(/\\[()[\]]/g, "").replace(/\$/g, ""); // strip math delimiters
  const parts = s.split(/\s*,\s*|\s+or\s+|\\text\{or\}/i).map((p) => p.trim()).filter(Boolean);
  if (parts.length === 0) return null;

  const vals: number[] = [];
  for (let part of parts) {
    const eq = part.split("=");
    if (eq.length === 2 && /^[a-zA-Z][\w]*$/.test(eq[0].trim())) part = eq[1].trim(); // drop "x ="
    const pm = part.match(/^(.*?)(?:±|\\pm)(.*)$/); // expand ± into two roots
    const branches = pm ? [`(${pm[1]})+(${pm[2]})`, `(${pm[1]})-(${pm[2]})`] : [part];
    for (const b of branches) {
      const val = evalScalar(normalizeMath(b));
      if (!Number.isFinite(val)) return null;
      vals.push(val);
    }
  }
  return vals;
}

function classifySet(rawS: string, rawC: string): ClassifyResult {
  const cVals = parseCollection(rawC);
  const sVals = parseCollection(rawS);
  if (!sVals || sVals.length === 0) return { correct: false, reason: "unparseable" };
  if (!cVals) return { correct: false, reason: "unparseable" };
  if (sVals.length !== cVals.length) return { correct: false }; // cardinality must match

  const used = new Array(cVals.length).fill(false);
  for (const sv of sVals) {
    let m = -1;
    for (let i = 0; i < cVals.length; i++) {
      if (!used[i] && tolEqual(sv, cVals[i])) {
        m = i;
        break;
      }
    }
    if (m === -1) return { correct: false };
    used[m] = true;
  }
  return { correct: true };
}

interface Interval {
  lo: number;
  hi: number;
  openLo: boolean;
  openHi: boolean;
}

function parseInterval(raw: string): Interval | null {
  const s = raw.trim().replace(/\\[()]/g, "").replace(/\$/g, "").trim();
  const m = s.match(/^([[(])\s*(.+?)\s*,\s*(.+?)\s*([\])])$/);
  if (!m) return null;
  const lo = evalScalar(normalizeMath(m[2]));
  const hi = evalScalar(normalizeMath(m[3]));
  if (!Number.isFinite(lo) || !Number.isFinite(hi)) return null;
  return { lo, hi, openLo: m[1] === "(", openHi: m[4] === ")" };
}

function classifyInterval(rawS: string, rawC: string): ClassifyResult {
  const s = parseInterval(rawS);
  const c = parseInterval(rawC);
  if (!s) return { correct: false, reason: c ? "typeMismatch" : "unparseable" };
  if (!c) return { correct: false, reason: "unparseable" };
  const correct =
    tolEqual(s.lo, c.lo) && tolEqual(s.hi, c.hi) && s.openLo === c.openLo && s.openHi === c.openHi;
  return { correct };
}

/* ── public entry point ──────────────────────────────────────────────────── */

export function classify(
  studentInput: string,
  question: Question,
  opts: { seed?: number } = {},
): ClassifyResult {
  const seed = opts.seed ?? DEFAULT_SEED;
  try {
    const rawS = studentInput ?? "";
    if (!rawS.trim()) return { correct: false, reason: "unparseable" };
    const rawC = canonicalFor(question.workedSolution);

    switch (question.answerType) {
      case "numeric":
        return classifyNumeric(rawS, rawC, question);
      case "exactValue":
        return classifyExactValue(rawS, rawC, seed);
      case "set":
      case "equationRoots":
        return classifySet(rawS, rawC);
      case "interval":
        return classifyInterval(rawS, rawC);
      case "expression":
      default:
        return classifyExpression(rawS, rawC, seed);
    }
  } catch {
    // Hard requirement: never throw on bad student input.
    return { correct: false, reason: "unparseable" };
  }
}

/* ──────────────────────────────────────────────────────────────────────────
 * Layer 1 — generic misconception diagnosis (diagnoseGeneric)
 *
 * Runs ONLY after Layer 0 (classify) returns correct:false. For each generic
 * ErrorTransform it builds a transformed correct answer T(C) and tests the
 * student answer S ≡ T(C) with the SAME seeded equivalence engine, returning the
 * first match's misconception + hint. No per-question authoring required.
 *
 * Integral-related checks DIFFERENTIATE (math.js `derivative`) rather than
 * integrate: math.js has no symbolic integration, and this function is sync so it
 * cannot await the Python SymPy sidecar. Differentiation is reliable for the
 * "did you differentiate / forget +c / drop a chain factor" misconceptions.
 * ────────────────────────────────────────────────────────────────────────── */

export interface FeedbackMatch {
  /** Set by Layer 1 (generic transform). Absent for Layer-2 per-question rules. */
  transform?: ErrorTransform;
  misconception: string;
  hint: string;
  /** Set by Layer 2: jump the student to this solutionStep index. */
  revealStep?: number;
}

/** Equivalence of two NORMALIZED expression strings via the Phase-2 engine. */
function equivNorm(aNorm: string, bNorm: string, seed: number): boolean {
  const a = safeParse(toComparable(aNorm));
  const b = safeParse(toComparable(bNorm));
  return !!a && !!b && equivalentNodes(a, b, seed) === "equivalent";
}

/** d/dx of a normalized expression w.r.t. its sole free variable. null if it is
 *  not single-variable or math.js cannot differentiate it. */
function derivativeOf(norm: string): string | null {
  const node = safeParse(toComparable(norm));
  if (!node) return null;
  const vars = freeVars(node);
  if (vars.length !== 1) return null;
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (mathjsInstance as any).derivative(node, vars[0]).toString();
  } catch {
    return null;
  }
}

interface TCtx {
  S: string; // normalized student answer
  C: string; // normalized correct answer
  answerType: AnswerType;
  cNode: MathNode | null;
  sVals: number[] | null;
  cVals: number[] | null;
  equiv: (aNorm: string, bNorm: string) => boolean;
  derivOf: (norm: string) => string | null;
}

interface Transform {
  id: ErrorTransform;
  appliesTo: AnswerType[];
  misconception: string;
  hint: string;
  /** Sampling/math.js matcher (always present; the sync runner uses only this). */
  match: (ctx: TCtx) => boolean;
  /** Optional symbolic matcher preferred by the async runner when a sidecar is
   *  enabled. Returns null when the sidecar can't decide → the runner falls back
   *  to `match`. The sync runner ignores this field. */
  symbolic?: (ctx: TCtx, oracle: SymbolicOracle) => Promise<boolean | null>;
}

const ALGEBRAIC: AnswerType[] = ["expression", "exactValue", "numeric"];
const COLLECTION: AnswerType[] = ["set", "equationRoots"];
const ROOT_HINT = "You've found one solution — is there another?";

function unwrapParens(node: MathNode): MathNode {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let n: any = node;
  while (n && n.type === "ParenthesisNode") n = n.content;
  return n;
}

/** If C is `(sum)^2`, return the addends as strings, else null. */
function squareOfSumAddends(cNode: MathNode | null): string[] | null {
  if (!cNode) return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const n: any = unwrapParens(cNode);
  if (!(n.type === "OperatorNode" && n.op === "^")) return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const exp: any = unwrapParens(n.args[1]);
  if (!(exp.type === "ConstantNode" && Number(exp.value) === 2)) return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const base: any = unwrapParens(n.args[0]);
  if (!(base.type === "OperatorNode" && (base.op === "+" || base.op === "-"))) return null;
  return base.args.map((a: MathNode) => a.toString());
}

/** Greedy: the roots in C missing from S, iff S is a strict non-empty submultiset
 *  of C (within tol); otherwise null. */
function strictSubsetMissing(sVals: number[] | null, cVals: number[] | null): number[] | null {
  if (!sVals || !cVals || sVals.length === 0 || sVals.length >= cVals.length) return null;
  const used = new Array(cVals.length).fill(false);
  for (const s of sVals) {
    let m = -1;
    for (let i = 0; i < cVals.length; i++) {
      if (!used[i] && tolEqual(s, cVals[i])) {
        m = i;
        break;
      }
    }
    if (m === -1) return null; // a student value isn't in C → not a subset
    used[m] = true;
  }
  return cVals.filter((_, i) => !used[i]);
}

/** missingChainFactor heuristic: C/S simplifies to a non-constant POLYNOMIAL in
 *  the variable (no leftover division, no transcendental) — i.e. the student
 *  dropped a multiplicative inner-derivative factor. Conservative on purpose; it
 *  cannot recover the actual inner function generically, so it is ordered last
 *  among the algebraic transforms and will miss non-polynomial inner derivatives. */
function chainFactorMatches(S: string, C: string): boolean {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const r = (mathjsInstance as any).simplify(`(${C})/(${S})`).toString();
    const node = safeParse(r);
    if (!node) return false;
    if (freeVars(node).length === 0) return false; // constant ratio → that's scaleBy*, not chain
    if (/\//.test(r)) return false; // leftover division → not a clean factor
    if (/(sin|cos|tan|csc|sec|cot|log|exp|sqrt)/.test(r)) return false; // not polynomial
    return true;
  } catch {
    return false;
  }
}

/** degreesRadiansSwap heuristic: rebuild C with every trig argument θ scaled by
 *  `k`. Only fires for answers that are still unevaluated trig expressions; an
 *  already-evaluated numeric answer carries no angle to rescale. */
function trigArgScaled(cNode: MathNode | null, k: string): string | null {
  if (!cNode) return null;
  const TRIG = new Set(["sin", "cos", "tan", "csc", "sec", "cot"]);
  let changed = false;
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const out = (cNode as any).transform((node: any) => {
      if (node.type === "FunctionNode" && node.fn && TRIG.has(node.fn.name) && node.args.length === 1) {
        changed = true;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (mathjsInstance as any).parse(`${node.fn.name}((${node.args[0].toString()})*(${k}))`);
      }
      return node;
    });
    return changed ? out.toString() : null;
  } catch {
    return null;
  }
}

/* ── the data-driven transform set — the SINGLE extension point ──────────────
 * Adding a misconception is one entry here; nothing else changes. Order matters:
 * the first match wins, so specific transforms precede broad heuristics. */
const TRANSFORMS: Transform[] = [
  {
    id: "negate",
    appliesTo: ALGEBRAIC,
    misconception: "sign-error",
    hint: "Check your signs — the magnitude looks right.",
    match: ({ S, C, equiv }) => equiv(S, `-(${C})`),
  },
  {
    id: "scaleByTwo",
    appliesTo: ALGEBRAIC,
    misconception: "coefficient-error",
    hint: "Re-check a coefficient or constant factor.",
    match: ({ S, C, equiv }) => equiv(S, `2*(${C})`),
  },
  {
    id: "scaleByHalf",
    appliesTo: ALGEBRAIC,
    misconception: "coefficient-error",
    hint: "Re-check a coefficient or constant factor.",
    match: ({ S, C, equiv }) => equiv(S, `(${C})/2`),
  },
  {
    id: "reciprocal",
    appliesTo: ALGEBRAIC,
    misconception: "inverted",
    hint: "Have you inverted something you shouldn't have?",
    match: ({ S, C, equiv }) => equiv(S, `1/(${C})`),
  },
  {
    id: "derivativeInsteadOfIntegral",
    appliesTo: ALGEBRAIC,
    misconception: "differentiated-not-integrated",
    hint: "This question asks you to integrate, not differentiate.",
    match: ({ S, C, equiv, derivOf }) => {
      const d = derivOf(C);
      return !!d && equiv(S, d);
    },
    symbolic: ({ S, C }, oracle) => oracle.equivalent(S, C, "derivative"), // S ≡ d/dx(C)
  },
  {
    id: "integralInsteadOfDerivative",
    appliesTo: ALGEBRAIC,
    misconception: "integrated-not-differentiated",
    hint: "This asks for the derivative — you appear to have integrated.",
    match: ({ S, C, equiv, derivOf }) => {
      const dS = derivOf(S);
      return !!dS && equiv(dS, C);
    },
    symbolic: ({ S, C }, oracle) => oracle.equivalent(C, S, "derivative"), // d/dx(S) ≡ C
  },
  {
    id: "missingConstantOfIntegration",
    appliesTo: ["expression"],
    misconception: "missing-constant",
    hint: "Don't forget the constant of integration.",
    match: ({ S, C, equiv, derivOf }) => {
      const dS = derivOf(S);
      const dC = derivOf(C);
      return !!dS && !!dC && equiv(dS, dC) && !equiv(S, C);
    },
    // S and C are antiderivatives of a common function (equal up to a constant)
    // AND not actually equal. null from either query → sampling fallback.
    symbolic: async ({ S, C }, oracle) => {
      const upToConst = await oracle.equivalent(S, C, "antiderivative");
      if (upToConst === null) return null;
      if (!upToConst) return false;
      const same = await oracle.equivalent(S, C, "simplify");
      if (same === null) return null;
      return !same;
    },
  },
  {
    id: "expandedSquareOfSum",
    appliesTo: ALGEBRAIC,
    misconception: "square-of-sum",
    hint: "(a+b)² is not a²+b² — expand fully.",
    match: ({ S, cNode, equiv }) => {
      const addends = squareOfSumAddends(cNode);
      if (!addends || addends.length < 2) return false;
      return equiv(S, addends.map((a) => `(${a})^2`).join("+"));
    },
  },
  {
    id: "degreesRadiansSwap",
    appliesTo: ALGEBRAIC,
    misconception: "deg-rad-confusion",
    hint: "Check whether the question is in degrees or radians.",
    match: ({ S, cNode, equiv }) => {
      const deg = trigArgScaled(cNode, "pi/180");
      const rad = trigArgScaled(cNode, "180/pi");
      return (!!deg && equiv(S, deg)) || (!!rad && equiv(S, rad));
    },
  },
  {
    id: "missingChainFactor", // heuristic — ordered last among algebraic
    appliesTo: ALGEBRAIC,
    misconception: "chain-rule",
    hint: "Chain rule: differentiate the inside function too.",
    match: ({ S, C }) => chainFactorMatches(S, C),
  },
  {
    id: "droppedNegativeRoot", // more specific than singleRootOnly → precedes it
    appliesTo: COLLECTION,
    misconception: "dropped-root",
    hint: ROOT_HINT,
    match: ({ sVals, cVals }) => {
      const missing = strictSubsetMissing(sVals, cVals);
      if (!missing || !sVals) return false;
      return missing.some((m) => sVals.some((s) => tolEqual(m, -s)));
    },
  },
  {
    id: "singleRootOnly",
    appliesTo: COLLECTION,
    misconception: "incomplete-solution-set",
    hint: ROOT_HINT,
    match: ({ sVals, cVals }) => strictSubsetMissing(sVals, cVals) !== null,
  },
];

/** Every transform id wired into the engine (guards the "extend only the array"
 *  contract in tests). */
export const GENERIC_TRANSFORM_IDS: ErrorTransform[] = TRANSFORMS.map((t) => t.id);

/**
 * Layer 1: recognise a generic misconception behind a WRONG answer. Returns the
 * first matching transform's misconception + hint, or null when none matches
 * (never a false hint, never throws). Call only after Layer 0 returns
 * correct:false. `answerMeta.allowTransforms`/`denyTransforms` restrict the set.
 */
export function diagnoseGeneric(
  studentInput: string,
  question: Question,
  opts: { seed?: number } = {},
): FeedbackMatch | null {
  const seed = opts.seed ?? DEFAULT_SEED;
  try {
    const rawS = studentInput ?? "";
    if (!rawS.trim()) return null;
    const rawC = canonicalFor(question.workedSolution);
    const S = normalizeMath(rawS);
    const C = normalizeMath(rawC);
    const { answerType } = question;

    // Layer 1 is only meaningful for wrong answers. If the student is actually
    // equivalent to C, emit no (false) hint — this also subsumes the "skip a
    // no-op transform where T(C) ≡ C" guard (matching needs S ≡ T(C), and a
    // correct S ≡ C can't single out one transform).
    if (ALGEBRAIC.includes(answerType) && equivNorm(S, C, seed)) return null;

    const ctx: TCtx = {
      S,
      C,
      answerType,
      cNode: safeParse(toComparable(C)),
      sVals: parseCollection(rawS),
      cVals: parseCollection(rawC),
      equiv: (a, b) => equivNorm(a, b, seed),
      derivOf: derivativeOf,
    };

    const allow = question.answerMeta?.allowTransforms;
    const deny = question.answerMeta?.denyTransforms;

    for (const t of TRANSFORMS) {
      if (!t.appliesTo.includes(answerType)) continue;
      if (allow && !allow.includes(t.id)) continue;
      if (deny && deny.includes(t.id)) continue;
      let ok = false;
      try {
        ok = t.match(ctx);
      } catch {
        ok = false; // a misbehaving transform can never crash diagnosis
      }
      if (ok) return { transform: t.id, misconception: t.misconception, hint: t.hint };
    }
    return null;
  } catch {
    return null; // never throw
  }
}

/* ──────────────────────────────────────────────────────────────────────────
 * Async variants — PREFER the optional SymPy sidecar (services/symbolic) for the
 * checks numeric sampling can't do reliably (true antiderivative comparison,
 * robust simplification, exact-form classification), falling back per-call to the
 * sync sampling/math.js path when the sidecar is disabled or can't decide.
 *
 * The sync `classify`/`diagnoseGeneric` above are unchanged (sampling-only); with
 * the flag OFF these async variants behave identically to them.
 * `opts.oracle`: omit → use the env-configured oracle (`getSymbolicOracle()`);
 * pass `null` → force sampling-only; pass a fake → inject for tests.
 * ────────────────────────────────────────────────────────────────────────── */

function resolveOracle(opt: SymbolicOracle | null | undefined): SymbolicOracle | null {
  return opt === undefined ? getSymbolicOracle() : opt;
}

/** Phase 2: like `classify`, but the exactValue FORM gate prefers the sidecar. */
export async function classifyAsync(
  studentInput: string,
  question: Question,
  opts: { seed?: number; oracle?: SymbolicOracle | null } = {},
): Promise<ClassifyResult> {
  const seed = opts.seed ?? DEFAULT_SEED;
  const oracle = resolveOracle(opts.oracle);
  if (oracle && question.answerType === "exactValue" && (studentInput ?? "").trim()) {
    try {
      const form = await oracle.classifyForm(normalizeMath(studentInput));
      if (form?.isBareDecimal) return { correct: false, reason: "notExactForm" };
      // exact form present (or oracle undecided) → defer value/form to the sync engine
    } catch {
      /* fall through to sync */
    }
  }
  return classify(studentInput, question, { seed });
}

/** Phase 1+3: like `diagnoseGeneric`, but each transform with a `symbolic` hook
 *  prefers the sidecar (sampling fallback per-call when it can't decide). */
export async function diagnoseGenericAsync(
  studentInput: string,
  question: Question,
  opts: { seed?: number; oracle?: SymbolicOracle | null } = {},
): Promise<FeedbackMatch | null> {
  const seed = opts.seed ?? DEFAULT_SEED;
  const oracle = resolveOracle(opts.oracle);
  if (!oracle) return diagnoseGeneric(studentInput, question, { seed }); // OFF → sampling-only

  try {
    const rawS = studentInput ?? "";
    if (!rawS.trim()) return null;
    const rawC = canonicalFor(question.workedSolution);
    const S = normalizeMath(rawS);
    const C = normalizeMath(rawC);
    const { answerType } = question;
    if (ALGEBRAIC.includes(answerType) && equivNorm(S, C, seed)) return null;

    const ctx: TCtx = {
      S,
      C,
      answerType,
      cNode: safeParse(toComparable(C)),
      sVals: parseCollection(rawS),
      cVals: parseCollection(rawC),
      equiv: (a, b) => equivNorm(a, b, seed),
      derivOf: derivativeOf,
    };

    const allow = question.answerMeta?.allowTransforms;
    const deny = question.answerMeta?.denyTransforms;

    for (const t of TRANSFORMS) {
      if (!t.appliesTo.includes(answerType)) continue;
      if (allow && !allow.includes(t.id)) continue;
      if (deny && deny.includes(t.id)) continue;
      let ok = false;
      try {
        if (t.symbolic) {
          let r: boolean | null;
          try {
            r = await t.symbolic(ctx, oracle); // sidecar-preferred
          } catch {
            r = null; // sidecar threw → treat as undecided
          }
          ok = r === null ? t.match(ctx) : r; // null → per-call sampling fallback
        } else {
          ok = t.match(ctx);
        }
      } catch {
        ok = false;
      }
      if (ok) return { transform: t.id, misconception: t.misconception, hint: t.hint };
    }
    return null;
  } catch {
    return diagnoseGeneric(studentInput, question, { seed }); // never throw
  }
}

/* ──────────────────────────────────────────────────────────────────────────
 * Layer 2 — per-question feedbackRules (authored distractors)
 *
 * Runs after Layer 1 returns null. Matches the student answer against each
 * rule's `matchAnswer` by mathematical EQUIVALENCE (the Phase-2 engine, not a
 * string compare), so a rule authored as "1/2" still fires for "0.5". Returns
 * the first matching rule's misconception + hint (+ revealStep). Rules without a
 * `matchAnswer` (Layer-1-only authoring) are skipped here.
 * ────────────────────────────────────────────────────────────────────────── */

export function diagnoseSpecific(
  studentInput: string,
  question: Question,
  opts: { seed?: number } = {},
): FeedbackMatch | null {
  const seed = opts.seed ?? DEFAULT_SEED;
  try {
    const rawS = studentInput ?? "";
    if (!rawS.trim() || !question.feedbackRules?.length) return null;
    const S = normalizeMath(rawS);
    for (const rule of question.feedbackRules) {
      if (!rule.matchAnswer) continue;
      if (equivNorm(S, normalizeMath(rule.matchAnswer), seed)) {
        return { misconception: rule.misconception, hint: rule.hint, revealStep: rule.revealStep };
      }
    }
    return null;
  } catch {
    return null; // never throw
  }
}

// NOTE: the full layered entry point is `diagnose`/`diagnoseAttempt` in
// attemptDiagnosis.ts (it returns the unified DiagnosisResult and distinguishes
// the generic-transform vs distractor sources by calling diagnoseGenericAsync
// and diagnoseSpecific directly).
