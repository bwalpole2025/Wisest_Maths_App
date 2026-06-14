// complex_methods.manifest.ts
// -----------------------------------------------------------------------------
// Taxonomy for the Wisest DAMTP "Complex Methods" question-bank module.
//
// Source sheets : ~/Desktop/DAMTP_Example_Sheets/Complex_Methods/
//                 Complex_Methods_Sheet_{1,2,3}.pdf
//                 (Cambridge Part IB, Lent Term 2026, J. E. Santos)
// Built by      : \do(complex_methods)  — manifest build step
//
// 10 topics x 4 subtopics = 40 subtopics. Per the generator: 30 fully-worked
// questions per subtopic, difficulty weighted toward Standard/Challenge.
//
// SCOPE NOTE: this is the Part IB "Complex Methods" course — analytic functions
// and the Cauchy–Riemann equations, harmonic functions, multivalued functions
// and branch cuts, conformal mapping and Laplace's equation, Taylor/Laurent
// series and singularities, Cauchy's theorem and the calculus of residues, and
// the Fourier/Laplace transforms. It is the methods-flavoured companion to the
// pure "Complex Analysis" course: contour techniques and transforms are in
// scope; the heavier function-theory proofs (Riemann mapping theorem, Mittag-
// Leffler, monodromy) are not, and are deliberately absent here.
//
// sheetRefs use the form "S<sheet>Q<question>[part]", e.g. "S2Q8", "S1Q10(ii)".
// "(seeded: standard)" in scope = sheet coverage is light; seed from standard
// course material of that type rather than a single sheet question.
// -----------------------------------------------------------------------------

// NB: do NOT name this export `module` — that identifier collides with the
// CommonJS/webpack module wrapper and crashes the client bundle at runtime.
export const moduleId = "complex_methods";
export const questionsPerSubtopic = 30;
export const bandSplit = { Foundation: 6, Standard: 12, Challenge: 12 }; // = 30

export type Status = "pending" | "done";

export interface Subtopic {
  code: string;        // e.g. "cm1a"
  title: string;
  scope: string;
  sheetRefs: string[];
  status: Status;
}

export interface Topic {
  code: string;        // e.g. "cm1"
  title: string;
  subtopics: Subtopic[];
}

export const manifest: Topic[] = [
  // ===== cm1 — Analyticity & the Cauchy–Riemann Equations ======================
  {
    code: "cm1",
    title: "Analyticity & the Cauchy–Riemann Equations",
    subtopics: [
      { code: "cm1a", title: "Differentiability from first principles & the CR equations", scope: "The complex derivative as a limit; deriving u_x=v_y, u_y=−v_x; where standard functions are/aren't differentiable.", sheetRefs: ["S1Q1(i)"], status: "done" },
      { code: "cm1b", title: "CR in polar form; analyticity of elementary functions", scope: "Polar CR (u_r=v_θ/r, v_r=−u_θ/r); testing analyticity/locating singularities of sech z, |z|², Im z and the like.", sheetRefs: ["S1Q1(i)"], status: "done" },
      { code: "cm1c", title: "The Wirtinger ∂/∂z̄ viewpoint", scope: "∂/∂z, ∂/∂z̄ operators; analytic ⇔ ∂g/∂z̄=0; how z̄-dependence forces non-analyticity.", sheetRefs: ["S1Q1(iii)"], status: "done" },
      { code: "cm1d", title: "CR satisfied yet not differentiable", scope: "Pathological points where CR holds but f′ fails to exist (z⁵/|z|⁴ type); the directional-limit subtlety.", sheetRefs: ["S1Q1(ii)"], status: "done" },
    ],
  },

  // ===== cm2 — Harmonic Functions & Conjugates =================================
  {
    code: "cm2",
    title: "Harmonic Functions & Conjugates",
    subtopics: [
      { code: "cm2a", title: "Verifying harmonicity; harmonic on a domain", scope: "∇²φ=0 by direct differentiation; real/imag parts of analytic functions are harmonic; specifying the domain.", sheetRefs: ["S1Q2", "S1Q4"], status: "pending" },
      { code: "cm2b", title: "Constructing the harmonic conjugate", scope: "Recover v from u by integrating the CR equations; arbitrary additive constant; failure on non-simply-connected domains.", sheetRefs: ["S1Q4"], status: "pending" },
      { code: "cm2c", title: "Recovering f(z) from its real part", scope: "Milne–Thomson / inspection: build f(z) from u(x,y); the f(z)=φ(z,0) shortcut and when it is valid.", sheetRefs: ["S1Q2", "S1Q4"], status: "pending" },
      { code: "cm2d", title: "Orthogonal families & level curves", scope: "φ=const and ψ=const meet orthogonally; ∇φ direction; sketching the conjugate net.", sheetRefs: ["S1Q3", "S1Q4"], status: "pending" },
    ],
  },

  // ===== cm3 — Multivalued Functions, Branch Points & Cuts =====================
  {
    code: "cm3",
    title: "Multivalued Functions, Branch Points & Cuts",
    subtopics: [
      { code: "cm3a", title: "The logarithm & complex powers z^α, z^i", scope: "Principal branch of log z; defining z^i, z^α single-valued on C∖(−∞,0]; evaluating e.g. i^i; the image annulus.", sheetRefs: ["S1Q5"], status: "pending" },
      { code: "cm3b", title: "Locating branch points & choosing cuts", scope: "Finding branch points (including ∞); counting them; admissible cut choices for z^{3/2}, [z(z+1)]^{1/3}.", sheetRefs: ["S1Q6"], status: "pending" },
      { code: "cm3c", title: "Square-root type functions across their cuts", scope: "(z²−1)^{1/2}, (z²+1)^{1/2}: limiting values above/below the cut; continuity of a chosen branch.", sheetRefs: ["S1Q7", "S1Q6"], status: "pending" },
      { code: "cm3d", title: "Riemann surfaces, sheets & parity under continuation", scope: "Sheets of a multivalued function; the Riemann sphere picture; proving even/odd symmetry of a chosen branch.", sheetRefs: ["S1Q7", "S1Q6"], status: "pending" },
    ],
  },

  // ===== cm4 — Conformal Mappings ==============================================
  {
    code: "cm4",
    title: "Conformal Mappings",
    subtopics: [
      { code: "cm4a", title: "Möbius (bilinear) transformations", scope: "Images of circles and lines; fixed points; the three-point map; (z−1)/(z+1), (z−i)/(z+i) on standard regions.", sheetRefs: ["S1Q9", "S1Q8"], status: "pending" },
      { code: "cm4b", title: "Elementary maps: powers, exp, log, sin", scope: "Wedges under z^α, strips under e^z, half-strips under sin z; how each acts on a canonical region.", sheetRefs: ["S1Q11", "S1Q10(i)"], status: "pending" },
      { code: "cm4c", title: "Composite maps onto canonical domains", scope: "Chaining maps to send a given region onto the UHP, unit disc or a strip; one-to-one and onto checks.", sheetRefs: ["S1Q10(ii)", "S1Q10(iii)"], status: "pending" },
      { code: "cm4d", title: "Inversion z↦1/z and the map z/(z−1)²", scope: "Image of a disc under inversion; one-to-one conformal map of |z|<1 onto a slit plane via z/(z−1)².", sheetRefs: ["S1Q8"], status: "pending" },
    ],
  },

  // ===== cm5 — Laplace's Equation & Conformal Methods ==========================
  {
    code: "cm5",
    title: "Laplace's Equation & Conformal Methods",
    subtopics: [
      { code: "cm5a", title: "Harmonic invariance under conformal maps", scope: "φ harmonic ⇒ φ∘f harmonic; transplanting a known UHP solution to a mapped domain.", sheetRefs: ["S1Q11"], status: "pending" },
      { code: "cm5b", title: "Dirichlet problems in the upper half-plane", scope: "Piecewise-constant boundary data via (1/π)Σ arg(z−x_k); the harmonic-measure/arg formula; non-uniqueness.", sheetRefs: ["S1Q12"], status: "pending" },
      { code: "cm5c", title: "Strips, half-strips & wedges by mapping", scope: "Solving Laplace on a half-strip/strip/sector by mapping to the UHP and back; explicit φ(x,y).", sheetRefs: ["S1Q11"], status: "pending" },
      { code: "cm5d", title: "Steady 2D physics: flow, electrostatics, heat", scope: "Complex potential w=φ+iψ; ideal flow past boundaries, electrostatic potentials, steady-state temperature. (seeded: standard)", sheetRefs: ["S1Q11", "S1Q12"], status: "pending" },
    ],
  },

  // ===== cm6 — Taylor & Laurent Series =========================================
  {
    code: "cm6",
    title: "Taylor & Laurent Series",
    subtopics: [
      { code: "cm6a", title: "Taylor series & radius of convergence", scope: "Taylor coefficients; distance to nearest singularity = radius; first non-vanishing coefficients of a quotient.", sheetRefs: ["S2Q1(i)"], status: "pending" },
      { code: "cm6b", title: "Laurent series by partial fractions in annuli", scope: "1/{(z−a)(z−b)} expanded in |z|<|a|, |a|<|z|<|b|, |z|>|b|; choosing the right geometric expansion per ring.", sheetRefs: ["S2Q2"], status: "pending" },
      { code: "cm6c", title: "Laurent series of singular trig/hyperbolic functions", scope: "Leading Laurent terms of 1/sin²z, z coth z etc. about a pole; principal part vs analytic part.", sheetRefs: ["S2Q3"], status: "pending" },
      { code: "cm6d", title: "Composite & nested expansions", scope: "Series of e^{e^z}, log(1+e^z), (cos z)^{1/2}−1 by substitution into standard expansions; convergence range.", sheetRefs: ["S2Q1(ii)", "S2Q1(iii)", "S2Q1(iv)"], status: "pending" },
    ],
  },

  // ===== cm7 — Zeros, Singularities & Residues =================================
  {
    code: "cm7",
    title: "Zeros, Singularities & Residues",
    subtopics: [
      { code: "cm7a", title: "Classifying isolated singularities", scope: "Removable / pole of order N / essential; reading the type from a Laurent expansion or limit; singularities of tan z, exp(tan z), log(1+e^z).", sheetRefs: ["S2Q5"], status: "pending" },
      { code: "cm7b", title: "Orders of zeros & poles of quotients", scope: "Zero of order M over zero of order N; removable when M=N; 1/f has a pole iff f has a zero; the algebra of orders.", sheetRefs: ["S2Q4"], status: "pending" },
      { code: "cm7c", title: "Residues at simple poles", scope: "Res = f(z₀)/g′(z₀) when g has a simple zero; residue of f(z)/(z−z₀); quick residues for the question-5 functions.", sheetRefs: ["S2Q7(i)", "S2Q7(iii)"], status: "pending" },
      { code: "cm7d", title: "Residues at higher-order & essential singularities", scope: "The (N−1)th-derivative formula for poles of order N; residue at an essential point via the Laurent coefficient (e.g. z³e^{1/z}).", sheetRefs: ["S2Q7(ii)", "S2Q8(iv)"], status: "pending" },
    ],
  },

  // ===== cm8 — Cauchy's Theorem & the Residue Theorem ==========================
  {
    code: "cm8",
    title: "Cauchy's Theorem & the Residue Theorem",
    subtopics: [
      { code: "cm8a", title: "Contour integrals & path (in)dependence", scope: "Parametrised ∫f dz; ∫z dz vs ∮z̄ dz; why analytic integrands give path-independence and non-analytic ones don't.", sheetRefs: ["S2Q6"], status: "pending" },
      { code: "cm8b", title: "Cauchy's integral formula & derivatives", scope: "f(z₀)=(1/2πi)∮f/(z−z₀)dz; the n-th derivative formula; evaluating contour integrals by the formula.", sheetRefs: ["S2Q9", "S2Q7(i)"], status: "pending" },
      { code: "cm8c", title: "The residue theorem on closed contours", scope: "∮=2πi·Σ(enclosed residues); deciding which poles a given contour encloses (ellipse, off-centre circle).", sheetRefs: ["S2Q8"], status: "pending" },
      { code: "cm8d", title: "The argument principle & Rouché's theorem", scope: "(1/2πi)∮P′/P dz counts zeros; ∮ around |z|=R for a polynomial ⇒ fundamental theorem of algebra; Rouché counts.", sheetRefs: ["S2Q14"], status: "pending" },
    ],
  },

  // ===== cm9 — The Calculus of Residues (Real Integrals) =======================
  {
    code: "cm9",
    title: "The Calculus of Residues",
    subtopics: [
      { code: "cm9a", title: "Trigonometric integrals via the unit circle", scope: "∫₀^{2π}R(cosθ,sinθ)dθ with z=e^{iθ}; the cos nθ/(1−2a cosθ+a²) family; reading off residues inside |z|=1.", sheetRefs: ["S2Q9"], status: "pending" },
      { code: "cm9b", title: "Rational & oscillatory integrals over ℝ; Jordan's lemma", scope: "Semicircle closure for ∫_{−∞}^{∞}; Jordan's lemma for e^{iax} factors; ∫1/(1+x+x²), ∫cos x/(1+x²)³.", sheetRefs: ["S2Q10", "S2Q13(i)"], status: "pending" },
      { code: "cm9c", title: "Branch-cut & keyhole integrals", scope: "Keyhole for ∫₀^∞ x^{a−1}/(1+x)=π/sin πa; (log z)²/(1+z²) and rectangular contours; why the restrictions are needed.", sheetRefs: ["S2Q11", "S2Q12", "S2Q13(ii)", "S2Q13(iii)"], status: "pending" },
      { code: "cm9d", title: "Summation of series by contour integration", scope: "∮(cot z)/(z²+π²a²) ⇒ Σ1/(n²+a²)=(π/a)coth πa; cosec² for Σ1/(n+a)²; deducing Σ1/n²=π²/6.", sheetRefs: ["S2Q15"], status: "pending" },
    ],
  },

  // ===== cm10 — Fourier & Laplace Transforms ===================================
  {
    code: "cm10",
    title: "Fourier & Laplace Transforms",
    subtopics: [
      { code: "cm10a", title: "Fourier transforms, inversion & convolution", scope: "FT/inverse pairs; the convolution theorem; transforms of e^{−|x|}, top-hat and triangle functions; verifying by contour integration.", sheetRefs: ["S3Q1", "S3Q2", "S3Q3"], status: "pending" },
      { code: "cm10b", title: "Parseval & Green's functions by Fourier methods", scope: "Parseval/Rayleigh identity ⇒ ∫sin²x/x²=π/2; Green's function of the damped oscillator G(t)=e^{−γt}sin(pt)H(t)/p.", sheetRefs: ["S3Q3", "S3Q4"], status: "pending" },
      { code: "cm10c", title: "Laplace transforms: rules, ODEs & integral equations", scope: "Shifting/scaling rules; solving constant-coefficient ODEs and convolution integral equations; the heat equation on a strip.", sheetRefs: ["S3Q5", "S3Q6", "S3Q7", "S3Q8", "S3Q9", "S3Q11"], status: "pending" },
      { code: "cm10d", title: "Bromwich inversion; Gamma & Beta functions", scope: "Bromwich keyhole inversion of s^{−1/2}; L{t^{z−1}}=Γ(z)/s^z; B(z,w)=Γ(z)Γ(w)/Γ(z+w) via convolution; L{J₀}.", sheetRefs: ["S3Q10", "S3Q12", "S3Q13"], status: "pending" },
    ],
  },
];
