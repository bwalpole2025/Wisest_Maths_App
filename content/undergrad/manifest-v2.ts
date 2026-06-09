// manifest-v2.ts
// -----------------------------------------------------------------------------
// Wisest undergraduate engineering-maths curriculum (v2).
// Eight topics, each divided into subtopics. The loop's target is one verified,
// expanded Question[] bank of `questionsPerSubtopic` per subtopic, file <code>.ts,
// with `code` passed as the generator's topicRef.
//
//   topic  : parent topic (one of the eight)
//   year   : 1 = first-year core, 2 = second-year / later
//   visual : true -> route to wisest-question-generator-with-diagrams
//   prereqs: subtopic codes to author first (authoringOrder ordering)
//   status : loop bookkeeping; advances todo -> done
// -----------------------------------------------------------------------------

export const questionsPerSubtopic = 70;
export const bandSplit = { Foundation: 21, Standard: 31, Challenge: 18 }; // = 70
// Marks by band (inherited from the generator): Foundation 2, Standard 3, Challenge 4+.

export type UgYear = 1 | 2;

export interface UgSubtopic {
  code: string;
  topic: string;
  title: string;
  year: UgYear;
  scope: string;
  prereqs: string[];
  visual?: boolean;
  status?: "todo" | "done";
}

export const manifest: UgSubtopic[] = [
  // ===== Complex Numbers =======================================================
  { code: "cx1", topic: "Complex Numbers", title: "Cartesian Arithmetic & Conjugates", year: 1, scope: "Real/imaginary parts, +, −, ×, ÷, complex conjugate.", prereqs: [], status: "done" },
  { code: "cx2", topic: "Complex Numbers", title: "Modulus, Argument & the Argand Diagram", year: 1, scope: "Modulus, principal argument, plotting.", prereqs: ["cx1"], visual: true, status: "todo" },
  { code: "cx3", topic: "Complex Numbers", title: "Polar & Exponential Form", year: 1, scope: "r(cos+isin), re^{iθ}, multiply/divide in polar form.", prereqs: ["cx2"], status: "todo" },
  { code: "cx4", topic: "Complex Numbers", title: "De Moivre's Theorem & Powers", year: 1, scope: "Powers via de Moivre; multiple-angle identities.", prereqs: ["cx3"], status: "todo" },
  { code: "cx5", topic: "Complex Numbers", title: "Roots & Roots of Unity", year: 1, scope: "nth roots, roots of unity and their geometry.", prereqs: ["cx4"], visual: true, status: "todo" },
  { code: "cx6", topic: "Complex Numbers", title: "Loci & Regions", year: 1, scope: "Circles, bisectors, half-lines, inequalities as regions.", prereqs: ["cx2"], visual: true, status: "todo" },
  { code: "cx7", topic: "Complex Numbers", title: "Complex Exponential, Trig & Hyperbolic Links", year: 2, scope: "e^{iθ} identities; sin/cos/sinh/cosh in exponential form.", prereqs: ["cx3"], status: "todo" },

  // ===== 1D Calculus ===========================================================
  { code: "cl1", topic: "1D Calculus", title: "Limits & Continuity", year: 1, scope: "Limit laws, one-sided limits, continuity.", prereqs: [], status: "todo" },
  { code: "cl2", topic: "1D Calculus", title: "Differentiation Techniques", year: 1, scope: "Inverse-trig, hyperbolic, implicit, parametric differentiation.", prereqs: ["cl1"], status: "todo" },
  { code: "cl3", topic: "1D Calculus", title: "L'Hôpital & Indeterminate Forms", year: 1, scope: "0/0, ∞/∞ and forms reducible to them.", prereqs: ["cl2"], status: "todo" },
  { code: "cl4", topic: "1D Calculus", title: "Taylor & Maclaurin Series", year: 1, scope: "Expansions, remainder, standard series, approximation.", prereqs: ["cl2"], status: "todo" },
  { code: "cl5", topic: "1D Calculus", title: "Integration by Substitution", year: 1, scope: "u-substitution, definite-integral limit changes.", prereqs: ["cl2"], status: "todo" },
  { code: "cl6", topic: "1D Calculus", title: "Integration by Parts", year: 1, scope: "By-parts, repeated application, LIATE.", prereqs: ["cl5"], status: "todo" },
  { code: "cl7", topic: "1D Calculus", title: "Partial Fractions in Integration", year: 1, scope: "Linear, repeated and irreducible-quadratic factors.", prereqs: ["cl5"], status: "todo" },
  { code: "cl8", topic: "1D Calculus", title: "Trig & Hyperbolic Substitution", year: 2, scope: "√(a²±x²), √(x²−a²); complete the square first.", prereqs: ["cl5"], status: "todo" },
  { code: "cl9", topic: "1D Calculus", title: "Reduction Formulae", year: 2, scope: "Deriving and applying reduction formulae.", prereqs: ["cl6"], status: "todo" },
  { code: "cl10", topic: "1D Calculus", title: "Improper Integrals", year: 2, scope: "Infinite limits, singular integrands, convergence.", prereqs: ["cl5"], status: "todo" },
  { code: "cl11", topic: "1D Calculus", title: "Applications: Length, Volume & Surface of Revolution", year: 2, scope: "Arc length, volumes/surfaces of revolution, centroids.", prereqs: ["cl6"], visual: true, status: "todo" },

  // ===== ODEs ==================================================================
  { code: "od1", topic: "ODEs", title: "First-Order Separable", year: 1, scope: "Separation of variables; general/particular solutions.", prereqs: ["cl5"], status: "todo" },
  { code: "od2", topic: "ODEs", title: "First-Order Linear (Integrating Factor)", year: 1, scope: "Integrating-factor method for y'+P(x)y=Q(x).", prereqs: ["od1"], status: "todo" },
  { code: "od3", topic: "ODEs", title: "Exact, Homogeneous & Bernoulli", year: 2, scope: "Exactness test, v=y/x substitution, Bernoulli reduction.", prereqs: ["od2"], status: "todo" },
  { code: "od4", topic: "ODEs", title: "Second-Order Linear Homogeneous (Constant Coeff)", year: 1, scope: "Auxiliary equation; real, repeated and complex roots.", prereqs: ["od2", "cx3"], status: "todo" },
  { code: "od5", topic: "ODEs", title: "Particular Integrals (Undetermined Coefficients)", year: 1, scope: "Polynomial/exp/trig forcing; resonance terms.", prereqs: ["od4"], status: "todo" },
  { code: "od6", topic: "ODEs", title: "Variation of Parameters", year: 2, scope: "Wronskian-based particular solution for general forcing.", prereqs: ["od5"], status: "todo" },
  { code: "od7", topic: "ODEs", title: "Applications: Oscillations, Damping & RLC", year: 2, scope: "SHM, damped/forced oscillations, resonance, series RLC.", prereqs: ["od5"], visual: true, status: "todo" },
  { code: "od8", topic: "ODEs", title: "Systems of Linear ODEs (Eigenvalue Method)", year: 2, scope: "X'=AX via eigenvalues/eigenvectors; phase planes.", prereqs: ["od4", "la9"], visual: true, status: "todo" },
  { code: "od9", topic: "ODEs", title: "Series Solutions & Frobenius", year: 2, scope: "Power-series solutions, indicial equation, Frobenius.", prereqs: ["od4", "cl4"], status: "todo" },

  // ===== PDEs ==================================================================
  { code: "pd1", topic: "PDEs", title: "Introduction & Classification", year: 2, scope: "Order, linearity; classification of 2nd-order PDEs.", prereqs: ["od4"], status: "todo" },
  { code: "pd2", topic: "PDEs", title: "First-Order PDEs & Characteristics", year: 2, scope: "Method of characteristics for first-order linear PDEs.", prereqs: ["pd1"], status: "todo" },
  { code: "pd3", topic: "PDEs", title: "Separation of Variables: Heat Equation", year: 2, scope: "1D heat equation, separation, Fourier-series solution.", prereqs: ["pd1", "it7"], status: "todo" },
  { code: "pd4", topic: "PDEs", title: "Separation of Variables: Wave Equation", year: 2, scope: "1D wave equation, separation, normal modes.", prereqs: ["pd3"], visual: true, status: "todo" },
  { code: "pd5", topic: "PDEs", title: "Separation of Variables: Laplace's Equation", year: 2, scope: "Laplace's equation on a rectangle/disc; BVPs.", prereqs: ["pd3"], status: "todo" },
  { code: "pd6", topic: "PDEs", title: "d'Alembert's Solution of the Wave Equation", year: 2, scope: "Travelling-wave/d'Alembert solution, domain of dependence.", prereqs: ["pd4"], visual: true, status: "todo" },
  { code: "pd7", topic: "PDEs", title: "Fourier-Series Solutions of BVPs", year: 2, scope: "Assembling Fourier-series solutions to boundary-value problems.", prereqs: ["pd3", "it7"], status: "todo" },

  // ===== Vector Methods ========================================================
  { code: "vm1", topic: "Vector Methods", title: "Vector Algebra & Components", year: 1, scope: "Addition, scalar multiplication, components, position vectors.", prereqs: [], status: "todo" },
  { code: "vm2", topic: "Vector Methods", title: "Dot Product, Projections & Angles", year: 1, scope: "Dot product, angle, scalar/vector projection, orthogonality.", prereqs: ["vm1"], status: "todo" },
  { code: "vm3", topic: "Vector Methods", title: "Cross Product & Triple Products", year: 1, scope: "Cross product, areas, scalar/vector triple products.", prereqs: ["vm2"], visual: true, status: "todo" },
  { code: "vm4", topic: "Vector Methods", title: "Lines & Planes in 3D", year: 1, scope: "Line/plane equations, angles, distances, intersections.", prereqs: ["vm3"], visual: true, status: "todo" },
  { code: "vm5", topic: "Vector Methods", title: "Partial Derivatives & the Gradient", year: 2, scope: "Partials, multivariate chain rule, gradient vector.", prereqs: ["cl2"], status: "todo" },
  { code: "vm6", topic: "Vector Methods", title: "Directional Derivatives & Tangent Planes", year: 2, scope: "Directional derivatives, tangent planes, linearisation.", prereqs: ["vm5", "vm2"], visual: true, status: "todo" },
  { code: "vm7", topic: "Vector Methods", title: "Multiple Integrals & Change of Variables", year: 2, scope: "Double/triple integrals, order of integration, Jacobian.", prereqs: ["cl5", "la2"], status: "todo" },
  { code: "vm8", topic: "Vector Methods", title: "Divergence, Gradient & Curl", year: 2, scope: "Vector differential operators and identities.", prereqs: ["vm5", "vm3"], status: "todo" },
  { code: "vm9", topic: "Vector Methods", title: "Line Integrals & Conservative Fields", year: 2, scope: "Scalar/vector line integrals, work, potentials.", prereqs: ["vm8"], visual: true, status: "todo" },
  { code: "vm10", topic: "Vector Methods", title: "Surface Integrals & Flux", year: 2, scope: "Parameterised surfaces, surface integrals, flux.", prereqs: ["vm9", "vm7"], visual: true, status: "todo" },
  { code: "vm11", topic: "Vector Methods", title: "Green's, Stokes' & Divergence Theorems", year: 2, scope: "The three integral theorems and their use.", prereqs: ["vm9", "vm10"], status: "todo" },

  // ===== Linear Algebra ========================================================
  { code: "la1", topic: "Linear Algebra", title: "Matrix Algebra & Special Matrices", year: 1, scope: "+, ×, transpose; identity, symmetric, triangular.", prereqs: [], status: "todo" },
  { code: "la2", topic: "Linear Algebra", title: "Determinants & Properties", year: 1, scope: "2×2/3×3 determinants, cofactor expansion, properties.", prereqs: ["la1"], status: "todo" },
  { code: "la3", topic: "Linear Algebra", title: "Linear Systems & Gaussian Elimination", year: 1, scope: "Row reduction, back-substitution, Cramer's rule.", prereqs: ["la2"], status: "todo" },
  { code: "la4", topic: "Linear Algebra", title: "Matrix Inverse", year: 1, scope: "Inverse via adjugate and row reduction; AX=b.", prereqs: ["la3"], status: "todo" },
  { code: "la5", topic: "Linear Algebra", title: "Rank, Consistency & Solution Sets", year: 2, scope: "Rank, free variables, consistency, parametric solutions.", prereqs: ["la3"], status: "todo" },
  { code: "la6", topic: "Linear Algebra", title: "Vector Spaces, Subspaces & Span", year: 2, scope: "Axioms, subspace tests, span.", prereqs: ["la1"], status: "todo" },
  { code: "la7", topic: "Linear Algebra", title: "Linear Independence, Basis & Dimension", year: 2, scope: "Independence, bases, dimension, coordinates.", prereqs: ["la6"], status: "todo" },
  { code: "la8", topic: "Linear Algebra", title: "Linear Transformations & Their Matrices", year: 2, scope: "Linearity, standard matrix, kernel/image, geometric maps.", prereqs: ["la7"], visual: true, status: "todo" },
  { code: "la9", topic: "Linear Algebra", title: "Eigenvalues & Eigenvectors", year: 2, scope: "Characteristic polynomial, eigenvalues/vectors, eigenspaces.", prereqs: ["la2", "la4"], status: "todo" },
  { code: "la10", topic: "Linear Algebra", title: "Diagonalisation & Matrix Powers", year: 2, scope: "Diagonalisability, PDP^{-1}, A^n, applications.", prereqs: ["la9"], status: "todo" },
  { code: "la11", topic: "Linear Algebra", title: "Orthogonality, Projections & Gram–Schmidt", year: 2, scope: "Inner products, orthonormal sets, projections, Gram–Schmidt.", prereqs: ["la7"], status: "todo" },

  // ===== Probability ===========================================================
  { code: "pr1", topic: "Probability", title: "Combinatorics & Counting", year: 1, scope: "Permutations, combinations, the counting principle.", prereqs: [], status: "todo" },
  { code: "pr2", topic: "Probability", title: "Axioms, Conditional Probability & Independence", year: 1, scope: "Axioms, conditional probability, independence, tree diagrams.", prereqs: ["pr1"], status: "todo" },
  { code: "pr3", topic: "Probability", title: "Bayes' Theorem", year: 1, scope: "Law of total probability, Bayes' theorem.", prereqs: ["pr2"], status: "todo" },
  { code: "pr4", topic: "Probability", title: "Discrete Random Variables & Expectation", year: 1, scope: "PMFs, expectation, variance of discrete variables.", prereqs: ["pr2"], status: "todo" },
  { code: "pr5", topic: "Probability", title: "Discrete Distributions", year: 1, scope: "Binomial, Poisson, geometric distributions.", prereqs: ["pr4"], status: "todo" },
  { code: "pr6", topic: "Probability", title: "Continuous Random Variables", year: 2, scope: "PDFs, CDFs, expectation/variance via integration.", prereqs: ["pr4", "cl5"], status: "todo" },
  { code: "pr7", topic: "Probability", title: "Continuous Distributions", year: 2, scope: "Uniform, exponential, normal; standardising.", prereqs: ["pr6"], status: "todo" },
  { code: "pr8", topic: "Probability", title: "Joint Distributions, Covariance & Correlation", year: 2, scope: "Joint/marginal distributions, covariance, correlation.", prereqs: ["pr6"], status: "todo" },
  { code: "pr9", topic: "Probability", title: "Estimation & the Central Limit Theorem", year: 2, scope: "Sample mean/variance, estimators, CLT.", prereqs: ["pr7"], status: "todo" },
  { code: "pr10", topic: "Probability", title: "Hypothesis Testing & Confidence Intervals", year: 2, scope: "Confidence intervals, test statistics, p-values.", prereqs: ["pr9"], status: "todo" },

  // ===== Integral Transforms ===================================================
  { code: "it1", topic: "Integral Transforms", title: "Laplace Transforms: Definition & Standard Pairs", year: 2, scope: "Definition, linearity, standard transform pairs.", prereqs: ["cl5", "cl10"], status: "todo" },
  { code: "it2", topic: "Integral Transforms", title: "Laplace Transforms: Shifting & Properties", year: 2, scope: "First/second shift theorems, derivatives, scaling.", prereqs: ["it1"], status: "todo" },
  { code: "it3", topic: "Integral Transforms", title: "Inverse Laplace Transforms", year: 2, scope: "Inversion via partial fractions and the shift theorems.", prereqs: ["it2", "cl7"], status: "todo" },
  { code: "it4", topic: "Integral Transforms", title: "Solving IVPs with Laplace Transforms", year: 2, scope: "Transforming ODEs/IVPs and inverting the solution.", prereqs: ["it3", "od5"], status: "todo" },
  { code: "it5", topic: "Integral Transforms", title: "The Convolution Theorem", year: 2, scope: "Convolution and the convolution theorem.", prereqs: ["it3"], status: "todo" },
  { code: "it6", topic: "Integral Transforms", title: "Step & Impulse Inputs", year: 2, scope: "Heaviside step, Dirac delta, piecewise forcing.", prereqs: ["it4"], visual: true, status: "todo" },
  { code: "it7", topic: "Integral Transforms", title: "Fourier Series", year: 2, scope: "Coefficients, even/odd symmetry, half-range expansions.", prereqs: ["cl6"], visual: true, status: "todo" },
  { code: "it8", topic: "Integral Transforms", title: "Fourier Transforms: Definition & Properties", year: 2, scope: "Definition, linearity, shifting, key properties.", prereqs: ["it7", "cl10"], status: "todo" },
  { code: "it9", topic: "Integral Transforms", title: "Applications of Fourier Transforms", year: 2, scope: "Spectra, simple PDE/signal applications.", prereqs: ["it8"], status: "todo" },
];

// Topics in safe authoring order (prerequisites before dependants).
export function authoringOrder(items: UgSubtopic[] = manifest): UgSubtopic[] {
  const byCode = new Map(items.map((t) => [t.code, t]));
  const seen = new Set<string>();
  const out: UgSubtopic[] = [];
  const visit = (t: UgSubtopic) => {
    if (seen.has(t.code)) return;
    seen.add(t.code);
    for (const p of t.prereqs) {
      const dep = byCode.get(p);
      if (dep) visit(dep);
    }
    out.push(t);
  };
  items.forEach(visit);
  return out;
}
