export const meta = {
  name: 'cm1-generate',
  description: 'Generate + verify + fix all 4 subtopics of Complex Methods topic cm1 (120 questions)',
  phases: [
    { title: 'Generate', detail: '4 subtopics x 30 questions, fully-worked, written to content/complex_methods/' },
    { title: 'Verify', detail: 'independent re-derivation + numeric checks (sympy/mpmath)' },
    { title: 'Fix', detail: 'patch only the flagged questions in place' },
  ],
}

// ---------------------------------------------------------------------------
// Shared context: schema, style, LaTeX conventions, and the seed sheet text.
// ---------------------------------------------------------------------------

const SEED_S1Q1 = `
Cambridge Part IB Complex Methods, Example Sheet 1, Q1 (Cauchy-Riemann equations):
(i) Where, if anywhere, in the complex plane are f(z)=Im(z), f(z)=|z|^2, and
    f(z)=sech z = 1/cosh z differentiable, and where are they analytic?
(ii) Let f(z)=z^5/|z|^4 for z != 0, f(0)=0. Show that the real and imaginary parts
     of f satisfy the Cauchy-Riemann equations at z=0, but that f is not
     differentiable at z=0.
(iii) Given smooth u(x,y), v(x,y), define g(z,zbar) = u(1/2(z+zbar), -1/2 i(z-zbar))
      + i v(1/2(z+zbar), -1/2 i(z-zbar)). Using the chain rule and the CR equations,
      show g is differentiable as a function of z iff dg/d(zbar)=0, and discuss how a
      dependence on zbar gives non-differentiability.`;

const SCHEMA_AND_STYLE = `
You are generating a Wisest question bank as a TypeScript file. Output a file that:

- Begins exactly with:  import { Question } from "@/lib/types";
- Then a /* ... */ header comment naming the topic, ref, and the 6/12/12 split.
- Then:  export const questions: Question[] = [ ... ];

Each Question object has EXACTLY these fields (this is the real project schema):
  id: string            // "<code>-001", "<code>-002", ... zero-padded to 3 digits
  topicRef: string      // the subtopic code, e.g. "cm1a"
  topicTitle: string    // the subtopic title
  difficulty: "Foundation" | "Standard" | "Challenge"
  answerType: "expression" | "exactValue" | "set" | "interval" | "equationRoots" | "numeric"
  questionText: string  // the stem, LaTeX inline-wrapped \\( ... \\)
  marks: number
  examStyle: boolean
  yearCreated: 2026
  tags: string[]        // headline technique + any secondary technique
  workedSolution: {
    steps: Array<{ stepNumber: number; description: string; workingLatex: string; explanation: string }>,
    finalAnswer: string,            // LaTeX inline-wrapped \\( ... \\)
    canonicalAnswer?: string        // clean machine-parseable form; OMIT for proofs / "show that"
  }

ORDER the array: 6 Foundation first, then 12 Standard, then 12 Challenge. Separate the
three bands with banner comments like:  // --------- Foundation (6) ---------

DIFFICULTY MIX (exactly 30 total):
  - 6 Foundation : core technique in isolation, marks: 2, examStyle: false.
  - 12 Standard  : a typical example-sheet question, marks: 3 or 4, examStyle: true.
  - 12 Challenge : synoptic / multi-step / the starred-question flavour, marks: 5+, examStyle: true.

WORKED-SOLUTION STYLE (this is graduate content — fully detailed, NOT terse):
  - Every step is a genuine algebraic move; do not skip. Aim for 4-9 steps on Standard/Challenge.
  - description: short imperative ("Apply the Cauchy-Riemann equations").
  - workingLatex: the maths for that step, raw (NO \\( \\) wrappers — it renders as a display block).
  - explanation: one or two sentences of real reasoning (the "why"), not a restatement.

LATEX CONVENTIONS (match the existing banks — IMPORTANT):
  - This is a TS string literal, so every backslash is DOUBLED: write \\\\frac, \\\\cos, \\\\partial.
    (In the rendered file that becomes \\frac, \\cos, \\partial.)
  - In workingLatex use big \\\\frac (NOT \\\\tfrac). In question stems use \\\\dfrac.
  - Use \\\\cdot for multiplication, ^{-1/2} for fractional/negative exponents.
  - Cauchy-Riemann: \\\\partial u/\\\\partial x etc.; complex conjugate \\\\bar z; Re/Im as \\\\operatorname{Re}, \\\\operatorname{Im}.
  - finalAnswer and questionText use inline \\( ... \\). For "show that" / proof questions,
    finalAnswer states what was established, answerType "expression", and OMIT canonicalAnswer.

MATHEMATICS QUALITY (non-negotiable):
  - Work every problem from scratch. Confirm finalAnswer matches the last workingLatex step.
  - Vary constants/limits/framing from the seed sheet question; never reproduce a sheet question verbatim.
  - Watch equivalence traps: branch of arg, +-2*pi*k phases, sign of square roots, the
    location of poles of sech/cosh (z = i*pi*(n+1/2)), the difference between "CR holds" and
    "differentiable".
  - If a question needs a technique outside Part IB Complex Methods, drop it and pick another.
  - If you cannot fully verify a result, put a // REVIEW: <reason> comment line directly above
    that question object rather than pretending it is checked.

Return NOTHING but the structured summary requested — the FILE itself you write to disk with the Write tool.`;

const SUBTOPICS = [
  {
    code: 'cm1a',
    title: 'Differentiability from first principles & the CR equations',
    scope: 'The complex derivative as a limit; deriving u_x=v_y, u_y=-v_x; where standard functions are/are not differentiable.',
    focus: `Seed from S1Q1(i). Cover: the difference quotient limit and its path-independence; deriving the
CR equations by taking the limit along the real and imaginary axes; testing concrete functions
(polynomials, e^z, Im z, Re z, |z|^2, \\bar z, z\\bar z) for differentiability and stating WHERE they
are differentiable vs analytic (analytic = differentiable on an open neighbourhood). Foundation:
evaluate CR for a given u,v; verify a function IS analytic. Standard: locate the set where a function
is differentiable (e.g. |z|^2 only at 0; z\\bar z only at 0). Challenge: functions differentiable on a
line/curve but nowhere analytic; constructing u given v via CR; verifying f'(z) by both partial forms.`,
  },
  {
    code: 'cm1b',
    title: 'CR in polar form; analyticity of elementary functions',
    scope: 'Polar CR (u_r=v_theta/r, v_r=-u_theta/r); testing analyticity / locating singularities of sech z, |z|^2, Im z and the like.',
    focus: `Seed from S1Q1(i) (the sech z part). Cover: deriving and applying the polar-form CR equations
u_r = (1/r) v_theta, v_r = -(1/r) u_theta; using them on functions naturally in polar form (z^n, log z,
z^{1/2}). Analyticity of the standard transcendental functions e^z, sin z, cos z, sinh z, cosh z,
sech z, tan z: where analytic, and the exact location/type of their singularities (cosh z = 0 at
z = i*pi*(n+1/2), so sech z has simple poles there). Foundation: confirm e^z, sin z entire via CR.
Standard: find all singularities of sech z, tan z, 1/(e^z-1). Challenge: polar-CR proofs (z^n analytic),
analyticity of a branch of log/z^alpha and where it fails.`,
  },
  {
    code: 'cm1c',
    title: 'The Wirtinger d/d(zbar) viewpoint',
    scope: 'd/dz, d/d(zbar) operators; analytic iff dg/d(zbar)=0; how zbar-dependence forces non-analyticity.',
    focus: `Seed from S1Q1(iii). Cover: the Wirtinger operators d/dz = 1/2(d/dx - i d/dy),
d/d(zbar) = 1/2(d/dx + i d/dy); the theorem that f is analytic iff df/d(zbar)=0, equivalently the CR
equations; rewriting functions in z, \\bar z and reading off analyticity by inspection (e.g. z^2 analytic,
|z|^2 = z\\bar z not, \\bar z not). Foundation: compute df/d(zbar) for a given f. Standard: express a real
function via z,\\bar z and decide analyticity; compute df/dz when analytic to get f'. Challenge: the chain-rule
derivation of d/d(zbar) annihilating analytic functions; harmonic = real part via d^2/(dz d(zbar)); building
the most general f with prescribed df/d(zbar).`,
  },
  {
    code: 'cm1d',
    title: 'CR satisfied yet not differentiable',
    scope: 'Pathological points where CR holds but the derivative fails to exist (z^5/|z|^4 type); the directional-limit subtlety.',
    focus: `Seed from S1Q1(ii). Cover: the precise statement that CR at a point is necessary but NOT sufficient
for differentiability — sufficiency needs CR to hold AND the partials to be continuous near the point.
The canonical counterexample f(z)=z^5/|z|^4 (z!=0), f(0)=0: show u_x=v_y, u_y=-v_x hold at 0 (via
difference quotients of u,v along the axes) yet the complex difference quotient f(z)/z has a
direction-dependent limit. Foundation: evaluate the real/imaginary partials of such an f at 0.
Standard: verify CR holds at 0 for a given pathological f. Challenge: exhibit the path-dependent limit
explicitly (e.g. along z=re^{i\\theta}, the limit depends on \\theta); contrast with a function where
continuity of partials restores differentiability.`,
  },
];

const SUMMARY_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['code', 'path', 'count', 'foundation', 'standard', 'challenge', 'reviewFlags', 'notes'],
  properties: {
    code: { type: 'string' },
    path: { type: 'string' },
    count: { type: 'integer' },
    foundation: { type: 'integer' },
    standard: { type: 'integer' },
    challenge: { type: 'integer' },
    reviewFlags: { type: 'array', items: { type: 'string' } },
    notes: { type: 'string' },
  },
};

const VERIFY_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['code', 'checked', 'numericChecks', 'problems'],
  properties: {
    code: { type: 'string' },
    checked: { type: 'integer' },
    numericChecks: { type: 'integer' },
    problems: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['id', 'severity', 'issue', 'fix'],
        properties: {
          id: { type: 'string' },
          severity: { type: 'string', enum: ['critical', 'major', 'minor'] },
          issue: { type: 'string' },
          fix: { type: 'string' },
        },
      },
    },
  },
};

const FIX_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['code', 'applied', 'remaining'],
  properties: {
    code: { type: 'string' },
    applied: { type: 'array', items: { type: 'string' } },
    remaining: { type: 'array', items: { type: 'string' } },
  },
};

// ---------------------------------------------------------------------------
// Pipeline: generate -> verify -> fix, independently per subtopic.
// ---------------------------------------------------------------------------

const results = await pipeline(
  SUBTOPICS,

  // Stage 1: generate + write the file.
  (st) => agent(
    `Generate a 30-question Wisest bank for Complex Methods subtopic ${st.code} — "${st.title}".

SUBTOPIC SCOPE: ${st.scope}

WHAT TO COVER:
${st.focus}

SEED MATERIAL (vary it; do not copy verbatim):
${SEED_S1Q1}

${SCHEMA_AND_STYLE}

Write the finished TypeScript file to: content/complex_methods/${st.code}.ts
Use id prefix "${st.code}-", topicRef "${st.code}", topicTitle "${st.title}".
Then return the structured summary.`,
    { label: `gen:${st.code}`, phase: 'Generate', schema: SUMMARY_SCHEMA }
  ),

  // Stage 2: independent verification.
  (summary, st) => agent(
    `Independently verify the Wisest bank at content/complex_methods/${st.code}.ts (Complex Methods, ${st.code}).

Read the file. For EVERY question:
  1. Re-derive the result from the questionText ALONE (ignore the given solution while deriving).
  2. Check finalAnswer matches your derivation AND matches the last workingLatex step.
  3. Scan each workingLatex transition for algebra/sign/branch errors.
  4. Where the result is numerically checkable, CONFIRM it with a quick script — you have
     python3 with sympy 1.14 and mpmath 1.3. Examples: evaluate a claimed limit/residue,
     check a CR-equation computation symbolically (sympy: diff of u,v), confirm a singularity
     location (cosh evaluated at i*pi*(n+1/2)), sample a difference quotient along several
     directions to confirm a non-differentiability claim. Run these with Bash.

Equivalence, not literal identity: accept equivalent surd/exponential/trig forms, +-2*pi*k in
arguments, branch-of-arg choices, and eigen/segment sign conventions. Only flag genuine errors.

Report ONLY problems (clean questions are not listed). For each: the id, a severity
(critical = wrong answer/result; major = wrong/broken intermediate step; minor = imprecise wording,
missing domain, style), the issue, and a concrete fix (the corrected LaTeX or text). Also report how
many questions you checked and how many you numerically confirmed.`,
    { label: `verify:${st.code}`, phase: 'Verify', schema: VERIFY_SCHEMA }
  ).then((v) => ({ st, summary, verify: v })),

  // Stage 3: fix only the flagged questions (skip if clean).
  async ({ st, summary, verify }) => {
    const actionable = (verify.problems || []).filter((p) => p.severity !== 'minor' || true);
    if (!actionable.length) {
      return { st, summary, verify, fix: { code: st.code, applied: [], remaining: [] } };
    }
    const fix = await agent(
      `Apply these verified corrections to content/complex_methods/${st.code}.ts using the Edit tool.
Edit ONLY the questions listed; leave every other question byte-for-byte unchanged. Preserve the
exact schema, field names, and the TS-string double-backslash LaTeX escaping. After editing, re-read
each changed question and confirm the new finalAnswer matches its last workingLatex step.

Corrections (JSON):
${JSON.stringify(verify.problems, null, 2)}

Return which ids you successfully fixed (applied) and any you could not safely fix (remaining).`,
      { label: `fix:${st.code}`, phase: 'Fix', schema: FIX_SCHEMA }
    );
    return { st, summary, verify, fix };
  }
);

// ---------------------------------------------------------------------------
// Roll-up.
// ---------------------------------------------------------------------------

const clean = results.filter(Boolean);
const report = clean.map((r) => ({
  code: r.st.code,
  path: `content/complex_methods/${r.st.code}.ts`,
  generated: r.summary?.count ?? null,
  bands: r.summary ? `${r.summary.foundation}/${r.summary.standard}/${r.summary.challenge}` : null,
  reviewFlags: r.summary?.reviewFlags ?? [],
  checked: r.verify?.checked ?? null,
  numericChecks: r.verify?.numericChecks ?? null,
  problemsFound: r.verify?.problems?.length ?? 0,
  fixed: r.fix?.applied ?? [],
  remaining: r.fix?.remaining ?? [],
}));

log(`cm1 complete: ${report.reduce((n, r) => n + (r.generated || 0), 0)} questions across ${report.length} subtopics`);

return report;
