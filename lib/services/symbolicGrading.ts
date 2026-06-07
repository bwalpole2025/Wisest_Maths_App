/**
 * Symbolic equivalence grading engine.
 *
 * Goal (per "First Principles" grading): decide whether a student's answer is
 * MATHEMATICALLY equivalent to the canonical solution — not string-equal. So
 *   x^2 + 2x + 1   ≡   (x+1)^2
 *   4/8            ≡   1/2
 *   y + x          ≡   x + y
 *   6π − 9√3       ≡   6*pi - 9*sqrt(3)
 * all grade as correct, while x^2+1 vs (x+1)^2 do not.
 *
 * Strategy (cheap → robust):
 *   1. Normalise both sides from LaTeX-ish prose into mathjs syntax.
 *   2. Reduce equations to a single comparable expression.
 *   3. Try a SYMBOLIC proof: simplify(student − canonical) == 0.
 *   4. Fall back to NUMERIC sampling: evaluate both at many deterministic
 *      random points over their shared free variables and compare within a
 *      tolerance. This is what makes it robust to forms `simplify` can't crack
 *      (nested radicals, trig identities) while staying frictionless.
 *
 * Security: mathjs `evaluate` can be abused (function injection, runaway
 * compute). We use a hardened mathjs instance with the dangerous functions
 * disabled, cap input length, and cap parsed-tree size. Untrusted strings only
 * ever reach this hardened instance.
 */

import { create, all, type MathNode } from "mathjs";

const math = create(all, {});
// Harden against injection: `import` and `createUnit` are the functions that
// can mutate the mathjs namespace / global state, so disable them outright.
// We must NOT disable parse/simplify/evaluate here — this engine calls them
// itself. Instead, untrusted expressions are screened by `assertSafe` below,
// which rejects any expression that references a dangerous function by name
// (so a student answer like `evaluate("import(...)")` never reaches eval).
math.import(
  {
    import: function () {
      throw new Error("disabled");
    },
    createUnit: function () {
      throw new Error("disabled");
    },
  },
  { override: true },
);

/** The hardened mathjs instance (import/createUnit disabled). Reused by the
 *  diagnosis engine so it shares the same screened namespace. */
export { math as mathjsInstance };

const DENY = new Set([
  "import", "createUnit", "evaluate", "parse", "simplify", "derivative",
  "resolve", "help", "chain", "typed", "compile",
]);

/** Throw if a parsed expression references any disallowed function/symbol. */
function assertSafe(node: MathNode): void {
  node.traverse((n: MathNode) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const a = n as any;
    if (a.isFunctionNode && a.fn && DENY.has(a.fn.name)) throw new Error("disallowed call");
    if (a.isSymbolNode && DENY.has(a.name)) throw new Error("disallowed symbol");
  });
}

const MAX_INPUT = 512;
const MAX_NODES = 250;
const SAMPLES = 28;
const MIN_VALID_SAMPLES = 10;
export const REL_TOL = 1e-7;

export type GradeMethod = "symbolic" | "numeric" | "constant" | "manual" | "sympy";

/**
 * Tags marking a question where the ANSWER FORM matters — the student must give
 * the fully simplified / requested form, so an equivalent-but-unsimplified
 * answer should be rejected (graded by structural equality, not equivalence).
 */
export const FORM_SENSITIVE_TAGS = new Set<string>([
  "simplify",
  "simplification",
  "surd form",
  "single fraction",
  "partial fractions",
  "index form",
  "lowest terms",
  "rationalise",
  "rationalising",
  "fully factorise",
  "fully factorize",
  "factorise",
  "factorize",
]);

/** True if any of the question's tags marks it as form-sensitive (see above). */
export function isFormSensitive(tags: string[] | undefined): boolean {
  if (!tags) return false;
  return tags.some((t) => FORM_SENSITIVE_TAGS.has(t.trim().toLowerCase()));
}

export interface EquivalenceResult {
  /** true = equivalent, false = not, null = could not auto-grade (manual). */
  equivalent: boolean | null;
  method: GradeMethod;
  normalizedStudent: string;
  normalizedCanonical: string;
  /** Short human-readable reason, useful for logging/teacher review. */
  detail: string;
}

/* ── LaTeX / prose → mathjs syntax ───────────────────────────────────── */

// Units (with any trailing ²/³ or ^2/^3, e.g. "cm²") stripped so "9.5 cm",
// "2.5 rad", "27π cm²" grade on the value. Deliberately a tight list + a
// negative lookahead so it never eats a variable (e.g. the gradient `m` in
// "m = 2" survives because toComparable takes the RHS; `\mu` is untouched
// because `m` is followed by a letter).
const UNIT =
  /\b(cm|mm|km|m|rad|degrees?|deg)(?![a-z])\s*(?:\^?\s*[23]|[²³])?/gi;

export function normalizeMath(raw: string): string {
  let s = raw.trim();
  if (s.length > MAX_INPUT) s = s.slice(0, MAX_INPUT);

  // 0. Unicode maths glyphs (as inserted by the "Your Working" symbol palette,
  //    components/tutor/MathSymbolField) → ASCII/mathjs. Done before the LaTeX
  //    handling so e.g. "√x" becomes "sqrt(x)". (² ³ ° are intentionally left for
  //    step 8 and the unit strip, which depend on the raw glyphs.)
  s = s
    .replace(/[×·∙]/g, "*")
    .replace(/÷/g, "/")
    .replace(/−/g, "-") // U+2212 minus sign → ASCII hyphen-minus
    .replace(/√\s*\(/g, "sqrt(")
    .replace(/√\s*([0-9]+(?:\.[0-9]+)?|[a-zA-Z])/g, "sqrt($1)")
    .replace(/√/g, " sqrt ")
    .replace(/∛\s*\(([^()]*)\)/g, "nthRoot(($1),3)")
    .replace(/∛\s*([0-9]+(?:\.[0-9]+)?|[a-zA-Z])/g, "nthRoot($1,3)")
    .replace(/π/g, " pi ")
    .replace(/θ/g, " theta ")
    .replace(/≤/g, "<=")
    .replace(/≥/g, ">=")
    .replace(/≠/g, "!=")
    .replace(/[≈≡]/g, "=")
    .replace(/[±∓]/g, "+") // mirrors \pm handling below
    .replace(/∞/g, " Infinity ")
    .replace(/∝/g, " ")
    .replace(/α/g, " alpha ").replace(/β/g, " beta ").replace(/γ/g, " gamma ")
    .replace(/δ/g, " delta ").replace(/ε/g, " epsilon ").replace(/λ/g, " lambda ")
    .replace(/μ/g, " mu ").replace(/ρ/g, " rho ").replace(/σ/g, " sigma ")
    .replace(/φ/g, " phi ").replace(/ω/g, " omega ")
    .replace(/Δ/g, " Delta ").replace(/Σ/g, " Sigma ").replace(/Ω/g, " Omega ");

  // 1. Strip math delimiters: \( \) \[ \] $ $$
  s = s
    .replace(/\\[()[\]]/g, " ")
    .replace(/\${1,2}/g, " ");

  // 1b. Strip units EARLY (before ² is reinterpreted as an exponent), so a
  //     square-unit like "cm²" is removed whole rather than leaving a "^2".
  s = s.replace(UNIT, " ");

  // 2. \text{...} and \mathrm{...} → drop the markup, keep contents as words
  s = s.replace(/\\(?:text|mathrm|operatorname)\s*\{([^{}]*)\}/g, " $1 ");

  // 3. Spacing / decoration commands → space or nothing
  s = s
    .replace(/\\(?:left|right|displaystyle|;|,|!|quad|qquad)/g, " ")
    .replace(/\\,/g, " ");

  // 4. Fractions: \frac{a}{b}, \tfrac, \dfrac → ((a)/(b))   (one level; repeat
  //    to unwrap nesting)
  const fracRe = /\\[tdc]?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g;
  for (let i = 0; i < 6 && fracRe.test(s); i++) {
    s = s.replace(fracRe, "(($1)/($2))");
  }

  // 5. Roots: \sqrt[n]{x} → nthRoot((x),(n)); \sqrt{x} → sqrt((x));
  //    \sqrt 3 / \sqrt x (bare single-token arg, common in this bank) → sqrt(3)
  s = s
    .replace(/\\sqrt\s*\[([^\]]*)\]\s*\{([^{}]*)\}/g, "nthRoot(($2),($1))")
    .replace(/\\sqrt\s*\{([^{}]*)\}/g, "sqrt(($1))")
    .replace(/\\sqrt\s*([0-9]+(?:\.[0-9]+)?|[a-zA-Z])/g, "sqrt($1)");

  // 6. Operators & constants
  s = s
    .replace(/\\cdot|\\times/g, "*")
    .replace(/\\div/g, "/")
    .replace(/\\pm/g, "+") // a "±" answer can't be auto-graded as one expr; pick + (flagged later if it matters)
    .replace(/\\pi/g, " pi ")
    .replace(/\\e\b/g, " e ")
    .replace(/\\infty/g, " Infinity ")
    .replace(/\\theta/g, " theta ")
    .replace(/\\(?:alpha|beta|gamma|lambda|mu|phi|omega)/g, (m) => ` ${m.slice(1)} `);

  // 7. Functions: \ln → log (natural), \log → log10, others drop the backslash.
  s = s
    .replace(/\\ln/g, "log")
    .replace(/\\log/g, "log10")
    .replace(/\\(sin|cos|tan|csc|sec|cot|sinh|cosh|tanh|exp|abs|arcsin|arccos|arctan)\b/g, "$1");

  // 8. Superscripts: a^{...} → a^(...) ; unicode ² ³ → ^2 ^3
  s = s
    .replace(/\^\s*\{([^{}]*)\}/g, "^($1)")
    .replace(/²/g, "^2")
    .replace(/³/g, "^3")
    .replace(/°/g, " "); // degree mark removed (value already numeric)

  // 9. Thousands separators written as 12{,}345 or 12,345 (3-digit groups)
  s = s.replace(/\{,\}/g, "").replace(/(\d),(\d{3})\b/g, "$1$2");

  // 10. arcsin → asin etc. (mathjs spelling)
  s = s.replace(/\barc(sin|cos|tan)\b/g, "a$1");

  // 11. Any leftover LaTeX braces → parentheses; drop stray backslashes.
  s = s.replace(/[{}]/g, " ").replace(/\\/g, " ");

  // 12. Strip any units that surfaced only after fraction/macro expansion.
  s = s.replace(UNIT, " ");

  // 13. Collapse whitespace.
  return s.replace(/\s+/g, " ").trim();
}

/* ── parsing helpers ─────────────────────────────────────────────────── */

function countNodes(node: MathNode): number {
  let n = 0;
  node.traverse(() => {
    n++;
  });
  return n;
}

/** Safe parse with size guard. Returns null on failure / oversize. */
export function safeParse(expr: string): MathNode | null {
  if (!expr) return null;
  try {
    const node = math.parse(expr);
    if (countNodes(node) > MAX_NODES) return null;
    assertSafe(node);
    return node;
  } catch {
    return null;
  }
}

/**
 * Reduce an answer to one comparable expression string.
 *   "θ = 2.5"        → "2.5"            (lhs is a lone variable → take rhs)
 *   "y = (x+1)^2"    → "(x+1)^2"
 *   "x^2 + y^2 = 1"  → "(x^2 + y^2)-(1)" (relational → bring to one side)
 *   "x^2 + 2x + 1"   → unchanged
 */
export function toComparable(normalized: string): string {
  const eqParts = normalized.split("=");
  if (eqParts.length === 2) {
    const lhs = eqParts[0].trim();
    const rhs = eqParts[1].trim();
    if (/^[a-zA-Z][a-zA-Z0-9_]*$/.test(lhs)) return rhs; // value of a named unknown
    return `(${lhs})-(${rhs})`; // implicit-equation: compare to zero
  }
  return normalized; // not an equation (or unparseable >2 parts → let parse fail)
}

const RESERVED = new Set([
  "pi", "e", "i", "tau", "phi", "Infinity", "NaN", "true", "false", "null",
]);

/** Free variables = symbols that aren't constants or mathjs functions. */
export function freeVars(node: MathNode): string[] {
  const found = new Set<string>();
  node.traverse((n: MathNode) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const anyN = n as any;
    if (anyN.isSymbolNode) {
      const name: string = anyN.name;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const known = (math as any)[name];
      if (!RESERVED.has(name) && typeof known !== "function" && typeof known !== "number") {
        found.add(name);
      }
    }
  });
  return [...found];
}

/* ── deterministic sample points ─────────────────────────────────────── */

export function makeRng(seed: number): () => number {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ── public API ──────────────────────────────────────────────────────── */

/**
 * Decide whether `student` is mathematically equivalent to `canonical`.
 * Both may be LaTeX-ish prose; they are normalised before comparison.
 */
export function checkEquivalence(student: string, canonical: string): EquivalenceResult {
  const normalizedStudent = normalizeMath(student);
  const normalizedCanonical = normalizeMath(canonical);

  const base: Omit<EquivalenceResult, "equivalent" | "method" | "detail"> = {
    normalizedStudent,
    normalizedCanonical,
  };

  if (!normalizedStudent) {
    return { ...base, equivalent: false, method: "manual", detail: "Empty answer." };
  }

  const sExpr = toComparable(normalizedStudent);
  const cExpr = toComparable(normalizedCanonical);
  const sNode = safeParse(sExpr);
  const cNode = safeParse(cExpr);

  if (!cNode) {
    // Canonical isn't a single parseable expression (proof / "show that" /
    // multi-part) → cannot auto-grade.
    return { ...base, equivalent: null, method: "manual", detail: "Canonical answer is not a single parseable expression." };
  }
  if (!sNode) {
    return { ...base, equivalent: false, method: "manual", detail: "Student answer could not be parsed as a maths expression." };
  }

  const vars = Array.from(new Set([...freeVars(sNode), ...freeVars(cNode)]));

  // 1. Symbolic proof: simplify(student - canonical) === 0.
  try {
    const diff = math.simplify(`(${sExpr})-(${cExpr})`);
    const txt = diff.toString().replace(/\s/g, "");
    if (txt === "0" || txt === "-0" || txt === "0.0") {
      return { ...base, equivalent: true, method: "symbolic", detail: "Difference simplifies to 0." };
    }
  } catch {
    /* fall through to numeric */
  }

  // 2a. Constant answers (no free variables): evaluate and compare.
  if (vars.length === 0) {
    try {
      const a = Number(sNode.compile().evaluate({}));
      const b = Number(cNode.compile().evaluate({}));
      if (Number.isFinite(a) && Number.isFinite(b)) {
        const eq = Math.abs(a - b) <= REL_TOL * (1 + Math.max(Math.abs(a), Math.abs(b)));
        return {
          ...base,
          equivalent: eq,
          method: "constant",
          detail: eq ? "Numerically equal constants." : `Differ: ${a} vs ${b}.`,
        };
      }
    } catch {
      /* fall through */
    }
    return { ...base, equivalent: false, method: "manual", detail: "Constant answer could not be evaluated." };
  }

  // 2b. Numeric sampling over the shared free variables.
  const sFn = sNode.compile();
  const cFn = cNode.compile();
  const rng = makeRng(0x9e3779b9); // fixed seed → grading is deterministic
  let valid = 0;
  let agree = 0;

  for (let t = 0; t < SAMPLES; t++) {
    const scope: Record<string, number> = {};
    for (const v of vars) {
      // Spread points over a non-integer range that avoids 0 (dodges removable
      // singularities / log(0) / div-by-0 while still probing identities).
      scope[v] = (rng() - 0.5) * 7.4 + (rng() < 0.5 ? 0.31 : -0.29);
    }
    let a: number, b: number;
    try {
      a = Number(sFn.evaluate(scope));
      b = Number(cFn.evaluate(scope));
    } catch {
      continue; // domain error at this point — skip it
    }
    if (!Number.isFinite(a) || !Number.isFinite(b)) continue;
    valid++;
    if (Math.abs(a - b) <= REL_TOL * (1 + Math.max(Math.abs(a), Math.abs(b)))) agree++;
  }

  if (valid < MIN_VALID_SAMPLES) {
    return { ...base, equivalent: null, method: "manual", detail: `Too few valid sample points (${valid}); needs manual grading.` };
  }
  const eq = agree === valid;
  return {
    ...base,
    equivalent: eq,
    method: "numeric",
    detail: eq
      ? `Agreed at all ${valid} sampled points.`
      : `Disagreed at ${valid - agree}/${valid} sampled points.`,
  };
}

/**
 * Resolve the canonical expression for a question: prefer the clean
 * `canonicalAnswer`, else best-effort the LaTeX `finalAnswer`.
 */
export function canonicalFor(ws: { canonicalAnswer?: string; finalAnswer: string }): string {
  return ws.canonicalAnswer ?? ws.finalAnswer;
}
