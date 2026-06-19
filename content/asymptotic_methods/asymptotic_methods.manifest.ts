// asymptotic_methods.manifest.ts
// -----------------------------------------------------------------------------
// Taxonomy for the Wisest DAMTP "Asymptotic Methods" question-bank module.
//
// Source sheets : ~/Desktop/DAMTP_Example_Sheets/Asymptotic_Methods/
//                 Asymptotic_Methods_Sheet_{1,2,3}.pdf
//                 (Cambridge Part II, Michaelmas 2025, H. Latter)
// Built by      : \do(asymptotic_methods)  — manifest build step
//
// 10 topics x 4 subtopics = 40 subtopics. Per the generator: 30 fully-worked
// questions per subtopic, difficulty weighted toward Standard/Challenge.
//
// SCOPE NOTE: this course is integrals / stationary phase / steepest descent /
// Liouville-Green-WKB / Stokes phenomenon. It does NOT cover matched asymptotics,
// boundary layers, or multiple scales (a separate Perturbation Methods course) —
// so those are deliberately absent here.
//
// sheetRefs use the form "S<sheet>Q<question>[part]", e.g. "S2Q5", "S1Q9c".
// "(seeded: standard)" in scope = sheet coverage is light; seed from standard
// course material of that type rather than a single sheet question.
// -----------------------------------------------------------------------------

// NB: do NOT name this export `module` — that identifier collides with the
// CommonJS/webpack module wrapper and crashes the client bundle at runtime.
export const moduleId = "asymptotic_methods";
export const questionsPerSubtopic = 30;
export const bandSplit = { Foundation: 6, Standard: 12, Challenge: 12 }; // = 30

export type Status = "pending" | "done";

export interface Subtopic {
  code: string;        // e.g. "am1a"
  title: string;
  scope: string;
  sheetRefs: string[];
  status: Status;
}

export interface Topic {
  code: string;        // e.g. "am1"
  title: string;
  subtopics: Subtopic[];
}

export const manifest: Topic[] = [
  // ===== am1 — Asymptotic Sequences & Series ===================================
  {
    code: "am1",
    title: "Asymptotic Sequences & Series",
    subtopics: [
      { code: "am1a", title: "Order notation, gauge functions & asymptotic sequences", scope: "O, o, ∼; gauge/scale functions; testing whether a sequence is asymptotic as x→0 or x→∞.", sheetRefs: ["S1Q3"], status: "pending" },
      { code: "am1b", title: "Algebra of asymptotic expansions: products & reciprocals", scope: "Multiplying expansions (Cauchy product); reciprocal of a series with a0≠0 by recurrence.", sheetRefs: ["S1Q4", "S1Q5"], status: "pending" },
      { code: "am1c", title: "Uniqueness & exponentially small terms", scope: "Coefficients are unique; exp(−1/x) has zero expansion ⇒ a function is not determined by its series.", sheetRefs: ["S1Q6"], status: "pending" },
      { code: "am1d", title: "Differentiation & integration of asymptotic series", scope: "Integrating o(φ); when term-by-term differentiation is valid; counterexamples.", sheetRefs: ["S1Q8", "S1Q9b"], status: "pending" },
    ],
  },

  // ===== am2 — Divergent Series & Optimal Truncation ===========================
  {
    code: "am2",
    title: "Divergent Series & Optimal Truncation",
    subtopics: [
      { code: "am2a", title: "Stieltjes integrals & their asymptotic series", scope: "F(x)=∫ρ(t)/(1+xt)dt; moment coefficients; divergence of the resulting series.", sheetRefs: ["S1Q9a"], status: "pending" },
      { code: "am2b", title: "Optimal truncation: the least term", scope: "Locating the smallest term; truncating one before it; numerical estimate of the sum.", sheetRefs: ["S1Q9c"], status: "pending" },
      { code: "am2c", title: "Optimal error bounds & exponential accuracy", scope: "Error after optimal truncation; Stirling/least-term bound ⇒ o(x^M) accuracy.", sheetRefs: ["S1Q9d"], status: "pending" },
      { code: "am2d", title: "Divergent series & resummation", scope: "Convergent vs asymptotic; Euler's series; Borel-sum viewpoint. (seeded: standard)", sheetRefs: ["S1Q9"], status: "pending" },
    ],
  },

  // ===== am3 — Integration by Parts & Watson's Lemma ===========================
  {
    code: "am3",
    title: "Integration by Parts & Watson's Lemma",
    subtopics: [
      { code: "am3a", title: "Integration by parts for integral asymptotics", scope: "Repeated IBP to generate an expansion; remainder estimate / asymptotic property.", sheetRefs: ["S1Q10a"], status: "pending" },
      { code: "am3b", title: "The exponential integral E₁ (large- and small-x)", scope: "E1(x) large-x by IBP; small-x via d/dx[E1+ln x] and Euler's γ.", sheetRefs: ["S1Q10a", "S1Q10c"], status: "pending" },
      { code: "am3c", title: "Watson's lemma", scope: "∫e^{−xt}f(t)dt from the small-t expansion of f; Γ-function coefficients.", sheetRefs: ["S1Q10b"], status: "pending" },
      { code: "am3d", title: "Substitutions reducing integrals to Watson form", scope: "Changing variables (t=x(1+s) etc.) to expose an exponential kernel.", sheetRefs: ["S1Q11", "S1Q13"], status: "pending" },
    ],
  },

  // ===== am4 — Laplace's Method ================================================
  {
    code: "am4",
    title: "Laplace's Method",
    subtopics: [
      { code: "am4a", title: "Laplace's method: interior maximum", scope: "∫e^{xφ(t)}g(t)dt with an interior max of φ; leading Gaussian term.", sheetRefs: ["S1Q12"], status: "pending" },
      { code: "am4b", title: "Endpoint maxima & half-Gaussian factors", scope: "Maximum at an endpoint; the ½ factor; sub-Gaussian (e.g. linear) endpoints.", sheetRefs: ["S1Q11", "S1Q13"], status: "pending" },
      { code: "am4c", title: "Stirling's formula & Gamma asymptotics", scope: "Γ(x+1)∼√(2πx)(x/e)^x(1+1/12x+…) via Laplace.", sheetRefs: ["S2Q1"], status: "pending" },
      { code: "am4d", title: "Laplace integrals for special functions (Bessel I₀)", scope: "∫e^{x cos θ}dθ ⇒ I0(x) large-x expansion; full subleading series.", sheetRefs: ["S2Q2"], status: "pending" },
    ],
  },

  // ===== am5 — Oscillatory Integrals ===========================================
  {
    code: "am5",
    title: "Oscillatory Integrals",
    subtopics: [
      { code: "am5a", title: "Integration by parts & the Riemann–Lebesgue lemma", scope: "∫f(t)e^{iωt}dt decay; leading endpoint terms by IBP.", sheetRefs: ["S2Q3a"], status: "pending" },
      { code: "am5b", title: "Endpoint & discontinuity contributions", scope: "Jumps in f or its derivatives; matching to the exact transform.", sheetRefs: ["S2Q3a", "S2Q3b"], status: "pending" },
      { code: "am5c", title: "Fourier integrals with smooth amplitude", scope: "Worked transforms (e.g. piecewise-exponential f); comparison with exact I(ω).", sheetRefs: ["S2Q3b"], status: "pending" },
      { code: "am5d", title: "Algebraic phases & fractional-power decay", scope: "∫cos(x t^p)dt, p>1; leading order and the rate of decay in x.", sheetRefs: ["S2Q6a"], status: "pending" },
    ],
  },

  // ===== am6 — Method of Stationary Phase ======================================
  {
    code: "am6",
    title: "Method of Stationary Phase",
    subtopics: [
      { code: "am6a", title: "Stationary phase: isolated interior point", scope: "Leading term from φ'(t0)=0; the e^{±iπ/4} factor; sign of φ''.", sheetRefs: ["S2Q4"], status: "pending" },
      { code: "am6b", title: "Degenerate / cubic phases (Airy-type)", scope: "φ'=φ''=0 (e.g. t−sin t); Γ(4/3), e^{iπ/6} factors; x^{−1/3} scaling.", sheetRefs: ["S2Q5"], status: "pending" },
      { code: "am6c", title: "Endpoint singularities & weighted amplitudes", scope: "(1−2θ/π)^γ weights; competition of endpoint vs stationary contributions.", sheetRefs: ["S2Q6b"], status: "pending" },
      { code: "am6d", title: "Stokes' problem & competing stationary points", scope: "∫f e^{ix(t³−t)}dt; effect of the lower limit (a=−1/√3 vs a=1).", sheetRefs: ["S2Q4"], status: "pending" },
    ],
  },

  // ===== am7 — Method of Steepest Descent I ====================================
  {
    code: "am7",
    title: "Method of Steepest Descent I",
    subtopics: [
      { code: "am7a", title: "Saddle points & paths of steepest descent", scope: "Locating saddles; steepest-descent vs steepest-ascent; choice of root sign.", sheetRefs: ["S2Q7"], status: "pending" },
      { code: "am7b", title: "Leading-order steepest descent", scope: "Deform to the saddle, local Gaussian; e.g. (πθ)^{−1/2}cos(2θ/3−π/4).", sheetRefs: ["S2Q7"], status: "pending" },
      { code: "am7c", title: "Higher-order terms & IBP cross-checks", scope: "Subleading coefficients; verifying steepest-descent results by integration by parts.", sheetRefs: ["S2Q8"], status: "pending" },
      { code: "am7d", title: "Constant-phase paths from several saddles", scope: "Im h=const paths through distinct critical points; combining contributions.", sheetRefs: ["S2Q9"], status: "pending" },
    ],
  },

  // ===== am8 — Method of Steepest Descent II ===================================
  {
    code: "am8",
    title: "Method of Steepest Descent II",
    subtopics: [
      { code: "am8a", title: "Deforming past poles & branch cuts", scope: "Pole/residue and branch-cut contributions picked up on deformation.", sheetRefs: ["S2Q10"], status: "pending" },
      { code: "am8b", title: "Steepest descent for the Hankel function H⁽¹⁾_ν", scope: "Large-order H^{(1)}_ν(ν/cos α); path equation; e^{−iπ/4} factor.", sheetRefs: ["S3Q1"], status: "pending" },
      { code: "am8c", title: "Complex Watson's lemma & general cubic phase", scope: "∫₀¹e^{z t³}dt for complex z; sector-dependent expansions.", sheetRefs: ["S3Q10"], status: "pending" },
      { code: "am8d", title: "The Stokes phenomenon for integrals", scope: "f(z)=∫exp(s²)ds; subdominant exponentials; locating Stokes lines.", sheetRefs: ["S3Q9", "S3Q10b"], status: "pending" },
    ],
  },

  // ===== am9 — Asymptotics of Algebraic & Transcendental Equations =============
  {
    code: "am9",
    title: "Asymptotics of Algebraic & Transcendental Equations",
    subtopics: [
      { code: "am9a", title: "Iterative (fixed-point) asymptotics of roots", scope: "Rearrange to x=…; iterate to generate successive corrections. (seeded: standard)", sheetRefs: [], status: "pending" },
      { code: "am9b", title: "Logarithmic & mixed-power balances", scope: "x+x^{1/2}+2ln x = t+ln t; leading balance then log/algebraic corrections.", sheetRefs: ["S3Q2"], status: "pending" },
      { code: "am9c", title: "Dominant balance & rescaling", scope: "Identifying the dominant balance; systematic correction terms. (seeded: standard)", sheetRefs: ["S3Q2"], status: "pending" },
      { code: "am9d", title: "Singular algebraic equations (small-parameter roots)", scope: "εx^n+…=0: regular roots plus the large/lost root via rescaling. (seeded: standard)", sheetRefs: [], status: "pending" },
    ],
  },

  // ===== am10 — Liouville–Green & WKB ==========================================
  {
    code: "am10",
    title: "Liouville–Green & WKB",
    subtopics: [
      { code: "am10a", title: "The Liouville–Green expansion (S₀, S₁, S₂)", scope: "ε²y''=q(x)y; iterative {Sn}; (S0')²=q, 2S0'S1'+S0''=0, … ; sign of S0.", sheetRefs: ["S3Q3a"], status: "done" },
      { code: "am10b", title: "Airy asymptotics, turning points & connection formulae", scope: "Ai(x)∼Ax^{−1/4}e^{−2/3 x^{3/2}}(1−5/48 x^{−3/2}+…); behaviour near a turning point.", sheetRefs: ["S3Q3b", "S3Q4"], status: "done" },
      { code: "am10c", title: "Normal form & irregular singular points", scope: "Classify z=∞; reduce w to W''=q(z)W; LG leading form vs exact solutions.", sheetRefs: ["S3Q5"], status: "done" },
      { code: "am10d", title: "WKB quantisation & barrier tunnelling", scope: "Bohr–Sommerfeld eigenvalues (Pöschl–Teller, x⁴+x²); transmission ∝ exp(−2∫√(2m(V−E))/ℏ).", sheetRefs: ["S3Q6", "S3Q7", "S3Q8"], status: "done" },
    ],
  },
];

export function allSubtopics(m: Topic[] = manifest): Subtopic[] {
  return m.flatMap((t) => t.subtopics);
}

export function nextPending(m: Topic[] = manifest): Subtopic | null {
  return allSubtopics(m).find((s) => s.status === "pending") ?? null;
}

export function progress(m: Topic[] = manifest): { done: number; total: number } {
  const all = allSubtopics(m);
  return { done: all.filter((s) => s.status === "done").length, total: all.length };
}
