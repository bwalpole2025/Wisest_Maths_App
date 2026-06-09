// manifest-tripos.ts
// -----------------------------------------------------------------------------
// Wisest advanced-undergraduate applied-maths & theoretical-physics curriculum.
// 13 topics, 6 subtopics each, 40 questions per subtopic.
// Loop target: one expanded, checked Question[] bank per subtopic, file <code>.ts.
//
//   year   : 1 ≈ first-year core, 2 ≈ second-year, 3 ≈ final-year / Part II
//   domain : "maths" or "physics" (physics topics need correct governing equations,
//            not just correct algebra — see the runbook caveats)
//   prereqs: subtopic codes to author first
//   status : loop bookkeeping; todo -> done
//
// NOTE ON LEVEL: the year-3 / physics topics sit above the scope guard of the
// existing generator and the reliable range of the checker. Treat every bank these
// produce as DRAFT pending expert review, not as finished content. See runbook.
// -----------------------------------------------------------------------------

export const questionsPerSubtopic = 40;
export const bandSplit = { Foundation: 12, Standard: 18, Challenge: 10 }; // = 40

export type Year = 1 | 2 | 3;
export type Domain = "maths" | "physics";

export interface Subtopic {
  code: string;
  topic: string;
  title: string;
  year: Year;
  domain: Domain;
  scope: string;
  prereqs: string[];
  examples?: string; // path to exemplar questions for this subtopic
  status?: "todo" | "done";
}

export const manifest: Subtopic[] = [
  // ===== Vectors and Matrices ==================================================
  { code: "vm1", topic: "Vectors and Matrices", title: "Vectors in R³: Dot, Cross & Triple Products", year: 1, domain: "maths", scope: "Vector algebra, dot/cross/triple products, lines and planes.", prereqs: [], status: "todo" },
  { code: "vm2", topic: "Vectors and Matrices", title: "Complex Numbers, de Moivre & Roots of Unity", year: 1, domain: "maths", scope: "Polar form, de Moivre, nth roots, roots of unity.", prereqs: [], status: "todo" },
  { code: "vm3", topic: "Vectors and Matrices", title: "Matrices as Linear Maps; Rank, Kernel, Image", year: 1, domain: "maths", scope: "Matrices as maps, rank–nullity, kernel and image.", prereqs: ["vm1"], status: "todo" },
  { code: "vm4", topic: "Vectors and Matrices", title: "Determinants & Matrix Inverses", year: 1, domain: "maths", scope: "Determinants, properties, inverses, linear systems.", prereqs: ["vm3"], status: "todo" },
  { code: "vm5", topic: "Vectors and Matrices", title: "Eigenvalues, Eigenvectors & Diagonalisation", year: 1, domain: "maths", scope: "Characteristic polynomial, eigenvectors, diagonalisation.", prereqs: ["vm4"], status: "todo" },
  { code: "vm6", topic: "Vectors and Matrices", title: "Hermitian, Orthogonal & Unitary Matrices; Quadratic Forms", year: 1, domain: "maths", scope: "Special matrices, spectral theorem, quadratic forms.", prereqs: ["vm5"], status: "todo" },

  // ===== Differential Equations ================================================
  { code: "de1", topic: "Differential Equations", title: "First-Order ODEs", year: 1, domain: "maths", scope: "Separable, linear (integrating factor), exact equations.", prereqs: [], status: "todo" },
  { code: "de2", topic: "Differential Equations", title: "Linear Second-Order ODEs (Constant Coefficients)", year: 1, domain: "maths", scope: "Auxiliary equation, complementary function, particular integral.", prereqs: ["de1"], status: "todo" },
  { code: "de3", topic: "Differential Equations", title: "Forcing, Resonance & Variation of Parameters", year: 1, domain: "maths", scope: "Resonant forcing, Wronskian, variation of parameters.", prereqs: ["de2"], status: "todo" },
  { code: "de4", topic: "Differential Equations", title: "Systems of Linear ODEs & Phase-Plane Analysis", year: 1, domain: "maths", scope: "Matrix ODE systems, eigenvalue method, phase portraits.", prereqs: ["de2", "vm5"], status: "todo" },
  { code: "de5", topic: "Differential Equations", title: "Series Solutions about Ordinary Points", year: 1, domain: "maths", scope: "Power-series solutions, recurrence relations.", prereqs: ["de2"], status: "todo" },
  { code: "de6", topic: "Differential Equations", title: "Introduction to PDEs: Separation of Variables", year: 1, domain: "maths", scope: "Wave/diffusion equations, separation of variables.", prereqs: ["de2"], status: "todo" },

  // ===== Vector Calculus =======================================================
  { code: "vc1", topic: "Vector Calculus", title: "Grad, Div, Curl & the Del Operator", year: 2, domain: "maths", scope: "Scalar/vector fields, gradient, divergence, curl, identities.", prereqs: ["vm1"], status: "todo" },
  { code: "vc2", topic: "Vector Calculus", title: "Line, Surface & Volume Integrals", year: 2, domain: "maths", scope: "Parameterised integrals, work, flux.", prereqs: ["vc1"], status: "todo" },
  { code: "vc3", topic: "Vector Calculus", title: "Green's, Stokes' & Divergence Theorems", year: 2, domain: "maths", scope: "The three integral theorems and their applications.", prereqs: ["vc2"], status: "todo" },
  { code: "vc4", topic: "Vector Calculus", title: "Curvilinear Coordinates", year: 2, domain: "maths", scope: "Cylindrical and spherical coordinates, scale factors.", prereqs: ["vc1"], status: "todo" },
  { code: "vc5", topic: "Vector Calculus", title: "Cartesian Tensors & Suffix Notation", year: 2, domain: "maths", scope: "Index notation, delta and epsilon, tensor identities.", prereqs: ["vc1"], status: "todo" },
  { code: "vc6", topic: "Vector Calculus", title: "Laplace's & Poisson's Equations; Potential Theory", year: 2, domain: "maths", scope: "Harmonic functions, Green's identities, potentials.", prereqs: ["vc3"], status: "todo" },

  // ===== Dynamics and Relativity ===============================================
  { code: "dr1", topic: "Dynamics and Relativity", title: "Newtonian Dynamics of a Particle", year: 1, domain: "physics", scope: "Newton's laws, work–energy, conservative forces.", prereqs: [], status: "todo" },
  { code: "dr2", topic: "Dynamics and Relativity", title: "Central Forces & Orbits", year: 1, domain: "physics", scope: "Angular momentum, orbit equation, Kepler's laws.", prereqs: ["dr1"], status: "todo" },
  { code: "dr3", topic: "Dynamics and Relativity", title: "Systems of Particles: Momentum & Energy", year: 1, domain: "physics", scope: "Centre of mass, collisions, conservation laws.", prereqs: ["dr1"], status: "todo" },
  { code: "dr4", topic: "Dynamics and Relativity", title: "Rotating Frames & Non-Inertial Effects", year: 1, domain: "physics", scope: "Centrifugal and Coriolis forces.", prereqs: ["dr1"], status: "todo" },
  { code: "dr5", topic: "Dynamics and Relativity", title: "Special Relativity: Lorentz Transformations", year: 1, domain: "physics", scope: "Postulates, time dilation, length contraction, Lorentz transform.", prereqs: [], status: "todo" },
  { code: "dr6", topic: "Dynamics and Relativity", title: "Relativistic Dynamics: 4-Vectors & Energy–Momentum", year: 1, domain: "physics", scope: "4-velocity, 4-momentum, E=mc², relativistic collisions.", prereqs: ["dr5"], status: "todo" },

  // ===== Electromagnetism ======================================================
  { code: "em1", topic: "Electromagnetism", title: "Electrostatics: Coulomb, Gauss & Potential", year: 2, domain: "physics", scope: "Coulomb's law, Gauss's law, electric potential.", prereqs: ["vc3"], status: "todo" },
  { code: "em2", topic: "Electromagnetism", title: "Conductors, Capacitance & Electrostatic Energy", year: 2, domain: "physics", scope: "Boundary conditions, capacitance, field energy.", prereqs: ["em1"], status: "todo" },
  { code: "em3", topic: "Electromagnetism", title: "Magnetostatics: Biot–Savart & Ampère", year: 2, domain: "physics", scope: "Biot–Savart law, Ampère's law, vector potential.", prereqs: ["vc3"], status: "todo" },
  { code: "em4", topic: "Electromagnetism", title: "Electromagnetic Induction", year: 2, domain: "physics", scope: "Faraday's law, Lenz's law, inductance.", prereqs: ["em3"], status: "todo" },
  { code: "em5", topic: "Electromagnetism", title: "Maxwell's Equations", year: 2, domain: "physics", scope: "Displacement current, the full Maxwell system.", prereqs: ["em4"], status: "todo" },
  { code: "em6", topic: "Electromagnetism", title: "Electromagnetic Waves in Vacuum", year: 2, domain: "physics", scope: "Wave equation from Maxwell, plane waves, energy flux.", prereqs: ["em5"], status: "todo" },

  // ===== Fluid Dynamics ========================================================
  { code: "fd1", topic: "Fluid Dynamics", title: "Kinematics: Continuity & the Material Derivative", year: 2, domain: "physics", scope: "Velocity fields, material derivative, mass conservation.", prereqs: ["vc1"], status: "todo" },
  { code: "fd2", topic: "Fluid Dynamics", title: "Euler's Equations & Bernoulli's Theorem", year: 2, domain: "physics", scope: "Inviscid momentum equation, Bernoulli along streamlines.", prereqs: ["fd1"], status: "todo" },
  { code: "fd3", topic: "Fluid Dynamics", title: "Vorticity & Circulation", year: 2, domain: "physics", scope: "Vorticity, circulation, Kelvin's theorem.", prereqs: ["fd2"], status: "todo" },
  { code: "fd4", topic: "Fluid Dynamics", title: "2D Potential Flow & the Complex Potential", year: 2, domain: "physics", scope: "Velocity potential, stream function, complex potential.", prereqs: ["fd2"], status: "todo" },
  { code: "fd5", topic: "Fluid Dynamics", title: "Water Waves", year: 2, domain: "physics", scope: "Surface gravity waves, dispersion relation.", prereqs: ["fd4"], status: "todo" },
  { code: "fd6", topic: "Fluid Dynamics", title: "Dimensional Analysis & the Reynolds Number", year: 2, domain: "physics", scope: "Buckingham Pi, non-dimensionalisation, Reynolds number.", prereqs: ["fd1"], status: "todo" },

  // ===== Numerical Analysis ====================================================
  { code: "na1", topic: "Numerical Analysis", title: "Polynomial Interpolation & Error", year: 2, domain: "maths", scope: "Lagrange/Newton interpolation, error term.", prereqs: [], status: "todo" },
  { code: "na2", topic: "Numerical Analysis", title: "Numerical Quadrature", year: 2, domain: "maths", scope: "Newton–Cotes, Gaussian quadrature, error.", prereqs: ["na1"], status: "todo" },
  { code: "na3", topic: "Numerical Analysis", title: "Linear Systems: LU & Conditioning", year: 2, domain: "maths", scope: "LU factorisation, pivoting, condition number.", prereqs: ["vm4"], status: "todo" },
  { code: "na4", topic: "Numerical Analysis", title: "Iterative Methods & Eigenvalues", year: 2, domain: "maths", scope: "Jacobi/Gauss–Seidel, power iteration, convergence.", prereqs: ["na3"], status: "todo" },
  { code: "na5", topic: "Numerical Analysis", title: "Numerical ODEs: Runge–Kutta & Stability", year: 2, domain: "maths", scope: "Euler, RK, multistep methods, absolute stability.", prereqs: ["de1"], status: "todo" },
  { code: "na6", topic: "Numerical Analysis", title: "Least Squares & Orthogonal Polynomials", year: 2, domain: "maths", scope: "Normal equations, QR, orthogonal polynomial families.", prereqs: ["na1"], status: "todo" },

  // ===== Complex Methods =======================================================
  { code: "cm1", topic: "Complex Methods", title: "Analytic Functions & Cauchy–Riemann", year: 2, domain: "maths", scope: "Differentiability, Cauchy–Riemann, harmonic conjugates.", prereqs: ["vm2"], status: "todo" },
  { code: "cm2", topic: "Complex Methods", title: "Contour Integration & Cauchy's Theorem", year: 2, domain: "maths", scope: "Contour integrals, Cauchy's theorem and integral formula.", prereqs: ["cm1"], status: "todo" },
  { code: "cm3", topic: "Complex Methods", title: "Laurent Series & Residues", year: 2, domain: "maths", scope: "Singularities, Laurent expansion, residues.", prereqs: ["cm2"], status: "todo" },
  { code: "cm4", topic: "Complex Methods", title: "Residue Calculus for Real Integrals", year: 2, domain: "maths", scope: "Evaluating real integrals and sums via residues.", prereqs: ["cm3"], status: "todo" },
  { code: "cm5", topic: "Complex Methods", title: "Conformal Mappings", year: 2, domain: "maths", scope: "Möbius and other conformal maps, applications.", prereqs: ["cm1"], status: "todo" },
  { code: "cm6", topic: "Complex Methods", title: "Laplace & Fourier Transforms", year: 2, domain: "maths", scope: "Transforms, inversion, convolution.", prereqs: ["cm4"], status: "todo" },

  // ===== Methods ===============================================================
  { code: "me1", topic: "Methods", title: "Fourier Series & Sturm–Liouville Theory", year: 2, domain: "maths", scope: "Fourier series, eigenfunction expansions, S–L problems.", prereqs: ["de2"], status: "todo" },
  { code: "me2", topic: "Methods", title: "PDEs by Separation of Variables", year: 2, domain: "maths", scope: "Heat, wave and Laplace equations on standard domains.", prereqs: ["me1", "de6"], status: "todo" },
  { code: "me3", topic: "Methods", title: "Green's Functions for ODEs & BVPs", year: 2, domain: "maths", scope: "Green's functions, boundary-value problems.", prereqs: ["me1"], status: "todo" },
  { code: "me4", topic: "Methods", title: "Fourier Transforms & Applications to PDEs", year: 2, domain: "maths", scope: "Transform methods for PDEs on unbounded domains.", prereqs: ["me2"], status: "todo" },
  { code: "me5", topic: "Methods", title: "Special Functions: Legendre & Bessel", year: 2, domain: "maths", scope: "Legendre polynomials, Bessel functions, orthogonality.", prereqs: ["me2", "vc4"], status: "todo" },
  { code: "me6", topic: "Methods", title: "First-Order PDEs & Characteristics", year: 2, domain: "maths", scope: "Method of characteristics, quasilinear PDEs.", prereqs: ["de6"], status: "todo" },

  // ===== Quantum Mechanics =====================================================
  { code: "qm1", topic: "Quantum Mechanics", title: "Wave–Particle Duality & the Schrödinger Equation", year: 2, domain: "physics", scope: "de Broglie, the time-dependent/independent Schrödinger equation.", prereqs: ["de2"], status: "todo" },
  { code: "qm2", topic: "Quantum Mechanics", title: "Square Wells & Bound States", year: 2, domain: "physics", scope: "Infinite/finite wells, quantisation, matching conditions.", prereqs: ["qm1"], status: "todo" },
  { code: "qm3", topic: "Quantum Mechanics", title: "The Quantum Harmonic Oscillator", year: 2, domain: "physics", scope: "Energy levels, Hermite functions, ladder operators.", prereqs: ["qm1"], status: "todo" },
  { code: "qm4", topic: "Quantum Mechanics", title: "Operators, Observables & Commutators", year: 2, domain: "physics", scope: "Hermitian operators, expectation values, uncertainty.", prereqs: ["qm1", "vm6"], status: "todo" },
  { code: "qm5", topic: "Quantum Mechanics", title: "Angular Momentum & the Hydrogen Atom", year: 2, domain: "physics", scope: "Angular-momentum operators, spherical harmonics, hydrogen.", prereqs: ["qm4", "me5"], status: "todo" },
  { code: "qm6", topic: "Quantum Mechanics", title: "Tunnelling & 1D Scattering", year: 2, domain: "physics", scope: "Barrier tunnelling, transmission/reflection coefficients.", prereqs: ["qm2"], status: "todo" },

  // ===== Mathematical Biology ==================================================
  { code: "mb1", topic: "Mathematical Biology", title: "Single-Species Continuous Models", year: 3, domain: "maths", scope: "Logistic growth, harvesting, steady states and stability.", prereqs: ["de1"], status: "todo" },
  { code: "mb2", topic: "Mathematical Biology", title: "Discrete Maps, Stability & Bifurcations", year: 3, domain: "maths", scope: "Discrete models, cobwebbing, period-doubling.", prereqs: ["mb1"], status: "todo" },
  { code: "mb3", topic: "Mathematical Biology", title: "Interacting Populations", year: 3, domain: "maths", scope: "Lotka–Volterra, competition, phase-plane analysis.", prereqs: ["de4", "mb1"], status: "todo" },
  { code: "mb4", topic: "Mathematical Biology", title: "Enzyme Kinetics & Biochemical Dynamics", year: 3, domain: "maths", scope: "Michaelis–Menten, quasi-steady-state, non-dimensionalisation.", prereqs: ["mb1"], status: "todo" },
  { code: "mb5", topic: "Mathematical Biology", title: "Reaction–Diffusion & Travelling Waves", year: 3, domain: "maths", scope: "Fisher–KPP, travelling-wave solutions, wave speed.", prereqs: ["mb3", "me2"], status: "todo" },
  { code: "mb6", topic: "Mathematical Biology", title: "Pattern Formation & Turing Instability", year: 3, domain: "maths", scope: "Diffusion-driven instability, Turing conditions.", prereqs: ["mb5"], status: "todo" },

  // ===== Asymptotic Methods ====================================================
  { code: "am1", topic: "Asymptotic Methods", title: "Asymptotic Sequences & Series", year: 3, domain: "maths", scope: "Order notation, asymptotic expansions, divergent series.", prereqs: ["de2"], status: "todo" },
  { code: "am2", topic: "Asymptotic Methods", title: "Asymptotic Expansion of Integrals; Watson's Lemma", year: 3, domain: "maths", scope: "Laplace's method, Watson's lemma.", prereqs: ["am1", "cm4"], status: "todo" },
  { code: "am3", topic: "Asymptotic Methods", title: "Stationary Phase & Steepest Descent", year: 3, domain: "maths", scope: "Method of stationary phase, saddle points.", prereqs: ["am2"], status: "todo" },
  { code: "am4", topic: "Asymptotic Methods", title: "Regular & Singular Perturbation; Matched Asymptotics", year: 3, domain: "maths", scope: "Boundary layers, inner/outer expansions, matching.", prereqs: ["am1"], status: "todo" },
  { code: "am5", topic: "Asymptotic Methods", title: "The WKB Method", year: 3, domain: "maths", scope: "WKB approximation, turning points, connection formulae.", prereqs: ["am4"], status: "todo" },
  { code: "am6", topic: "Asymptotic Methods", title: "Method of Multiple Scales", year: 3, domain: "maths", scope: "Secular terms, slow/fast variables, weakly nonlinear oscillators.", prereqs: ["am4"], status: "todo" },

  // ===== Fluid Dynamics II =====================================================
  { code: "f21", topic: "Fluid Dynamics II", title: "The Navier–Stokes Equations", year: 3, domain: "physics", scope: "Stress tensor, viscous momentum equation, non-dimensionalisation.", prereqs: ["fd2", "vc5"], status: "todo" },
  { code: "f22", topic: "Fluid Dynamics II", title: "Stokes Flow (Low Reynolds Number)", year: 3, domain: "physics", scope: "Stokes equations, reversibility, drag on a sphere.", prereqs: ["f21"], status: "todo" },
  { code: "f23", topic: "Fluid Dynamics II", title: "Boundary Layers", year: 3, domain: "physics", scope: "Prandtl boundary-layer equations, Blasius solution.", prereqs: ["f21", "am4"], status: "todo" },
  { code: "f24", topic: "Fluid Dynamics II", title: "Vorticity Dynamics & Vortex Motion", year: 3, domain: "physics", scope: "Vorticity equation, vortex stretching, point vortices.", prereqs: ["fd3", "f21"], status: "todo" },
  { code: "f25", topic: "Fluid Dynamics II", title: "Lubrication & Thin-Film Flows", year: 3, domain: "physics", scope: "Lubrication approximation, thin-film equations.", prereqs: ["f21"], status: "todo" },
  { code: "f26", topic: "Fluid Dynamics II", title: "Hydrodynamic Stability", year: 3, domain: "physics", scope: "Linear stability, normal modes, Rayleigh/Orr–Sommerfeld intro.", prereqs: ["f21", "am1"], status: "todo" },
];

export function authoringOrder(items: Subtopic[] = manifest): Subtopic[] {
  const byCode = new Map(items.map((t) => [t.code, t]));
  const seen = new Set<string>();
  const out: Subtopic[] = [];
  const visit = (t: Subtopic) => {
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
