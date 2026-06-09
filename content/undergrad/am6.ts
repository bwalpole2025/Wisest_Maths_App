import { Question } from "@/lib/types";

/**
 * Topic: Asymptotic Methods — Method of Multiple Scales
 * Ref:   am6  (Advanced undergraduate / Part II applied maths, year 3)
 *
 * 40 questions — 12 Foundation, 18 Standard, 10 Challenge.
 * The two-timing operator (slow time T=εt); failure of naive perturbation and
 * the appearance of secular terms; secular-term removal and the slow-flow
 * (amplitude/phase) equations; the Duffing frequency shift; linear and
 * nonlinear damping; the van der Pol limit cycle and its approach; third-
 * harmonic corrections; and (Challenge) forced near-resonance and parametric
 * (Mathieu) excitation.
 *
 * Convention: ε≪1; y = y₀ + εy₁ + …; slow time T=εt, so
 *   d/dt = ∂_t + ε∂_T,   d²/dt² = ∂_tt + 2ε∂_tT + ε²∂_TT.
 * Leading order y₀ = a(T)cos(t+φ(T)) = A(T)e^{it} + c.c. with A = ½a e^{iφ}.
 *
 * NO exemplar file for this subtopic — authored from the manifest scope.
 * DRAFT (year-3): the core oscillator results (Duffing shift 3a²/8, van der
 * Pol limit cycle a=2, damping decay laws, third harmonic) are textbook; the
 * // REVIEW flags mark forced-resonance / Mathieu / period-correction items
 * whose details a quick independent re-derivation cannot fully pin down.
 * Expert review required before student use.
 */
export const questions: Question[] = [
  // ───────────────────────── Foundation (12) ─────────────────────────

  // ── Cluster A: The two-timing operator & secular terms ──────────────
  {
    id: "am6-001",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "With slow time \\( T=\\varepsilon t \\), express \\( \\dfrac{d}{dt} \\) and \\( \\dfrac{d^{2}}{dt^{2}} \\) in terms of \\( \\partial_t \\) and \\( \\partial_T \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["two-timing", "chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply the chain rule treating t and T=εt as independent.",
          workingLatex: "\\frac{d}{dt}=\\partial_t+\\varepsilon\\,\\partial_T",
          explanation: "Each derivative in t picks up an ε∂_T from the slow dependence.",
        },
        {
          stepNumber: 2,
          description: "Square the operator.",
          workingLatex: "\\frac{d^{2}}{dt^{2}}=\\partial_{tt}+2\\varepsilon\\,\\partial_{tT}+\\varepsilon^{2}\\partial_{TT}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{d}{dt}=\\partial_t+\\varepsilon\\partial_T,\\quad \\dfrac{d^{2}}{dt^{2}}=\\partial_{tt}+2\\varepsilon\\partial_{tT}+\\varepsilon^{2}\\partial_{TT} \\)",
      canonicalAnswer: "d/dt=d_t+eps*d_T; d2/dt2=d_tt+2eps d_tT+eps^2 d_TT",
    },
  },
  {
    id: "am6-002",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "In the equation \\( \\partial_{tt} y_1 + y_1 = F(t) \\), which forcing terms in \\( F \\) produce secular (unbounded) growth in \\( y_1 \\)?",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["secular terms", "resonance"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The homogeneous solutions are e^{±it}; forcing at that frequency resonates.",
          workingLatex: "F\\supset e^{\\pm i t}\\ (\\text{i.e. }\\cos t,\\ \\sin t)\\ \\Rightarrow\\ y_1\\sim t\\,e^{\\pm i t}",
          explanation: "A resonant drive yields a particular solution growing linearly in t.",
        },
      ],
      finalAnswer: "\\( e^{\\pm i t} \\) (equivalently \\( \\cos t,\\ \\sin t \\))",
      canonicalAnswer: "exp(+-I*t) i.e. cos t, sin t",
    },
  },
  {
    id: "am6-003",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "For \\( y''+2\\varepsilon y'+y=0 \\) with \\( y_0=\\cos t \\), find the secular term produced by a naive (single-scale) expansion at \\( O(\\varepsilon) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["secular terms", "naive expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Form the O(ε) equation.",
          workingLatex: "y_1''+y_1=-2y_0'=2\\sin t",
          explanation: "The drive 2 sin t is resonant.",
        },
        {
          stepNumber: 2,
          description: "Resonant particular solution.",
          workingLatex: "y_1=-t\\cos t",
          explanation: "So the naive series carries εy₁=−εt cos t, which is unbounded as t grows.",
        },
      ],
      finalAnswer: "\\( -\\varepsilon t\\cos t \\)",
      canonicalAnswer: "-eps*t*cos(t)",
    },
  },
  {
    id: "am6-004",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "State the leading multiple-scales amplitude law \\( a(T) \\) for the damped oscillator \\( y''+2\\varepsilon y'+y=0 \\), \\( a(0)=a_0 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["linear damping", "amplitude equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Secular removal gives the slow-flow equation.",
          workingLatex: "\\frac{da}{dT}=-a",
          explanation: "From cancelling the e^{it} term in the O(ε) equation.",
        },
        {
          stepNumber: 2,
          description: "Integrate.",
          workingLatex: "a(T)=a_0 e^{-T}=a_0 e^{-\\varepsilon t}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( a(T)=a_0 e^{-\\varepsilon t} \\)",
      canonicalAnswer: "a0*exp(-eps*t)",
    },
  },

  // ── Cluster B: Frequency shifts (Duffing-type) ──────────────────────
  {
    id: "am6-005",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Quote the leading-order frequency \\( \\omega \\) of the Duffing oscillator \\( y''+y+\\varepsilon y^{3}=0 \\) at amplitude \\( a \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Duffing", "frequency shift"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The cubic shifts the frequency at O(ε).",
          workingLatex: "\\omega=1+\\frac{3}{8}\\varepsilon a^{2}",
          explanation: "The nonlinearity stiffens the spring, raising the frequency.",
        },
      ],
      finalAnswer: "\\( \\omega=1+\\dfrac{3}{8}\\varepsilon a^{2} \\)",
      canonicalAnswer: "1+(3/8)*eps*a^2",
    },
  },
  {
    id: "am6-006",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "State the limit-cycle amplitude of the van der Pol oscillator \\( y''+y+\\varepsilon(y^{2}-1)y'=0 \\) at leading order.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["van der Pol", "limit cycle"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The amplitude equation has a stable fixed point.",
          workingLatex: "\\frac{da}{dT}=\\frac{a}{2}\\left(1-\\frac{a^{2}}{4}\\right)=0\\ \\Rightarrow\\ a=2",
          explanation: "a=0 is unstable; a=2 is the attracting limit cycle.",
        },
      ],
      finalAnswer: "\\( a=2 \\)",
      canonicalAnswer: "2",
    },
  },
  {
    id: "am6-007",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Solve the slow-flow equation \\( \\dfrac{dA}{dT}=-A \\) for the complex amplitude \\( A(T) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["slow flow", "amplitude equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Separable first-order linear ODE.",
          workingLatex: "A(T)=A(0)\\,e^{-T}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( A(T)=A(0)e^{-T} \\)",
      canonicalAnswer: "A(0)*exp(-T)",
    },
  },
  {
    id: "am6-008",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find the equilibria of the amplitude equation \\( \\dfrac{da}{dT}=\\dfrac{a}{2}\\left(1-\\dfrac{a^{2}}{4}\\right) \\) for \\( a\\ge 0 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["van der Pol", "fixed points"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the right-hand side to zero.",
          workingLatex: "\\frac{a}{2}\\left(1-\\frac{a^{2}}{4}\\right)=0\\ \\Rightarrow\\ a=0\\ \\text{or}\\ a=2",
          explanation: "",
        },
      ],
      finalAnswer: "\\( a=0 \\) and \\( a=2 \\)",
      canonicalAnswer: "a=0, a=2",
    },
  },

  // ── Cluster C: Slow/fast structure ──────────────────────────────────
  {
    id: "am6-009",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "For \\( y_0=a(T)\\cos(t+\\phi(T)) \\), compute \\( \\partial_t y_0 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["two-timing", "partial derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate in the fast variable only (a,φ depend on T).",
          workingLatex: "\\partial_t y_0=-a(T)\\sin\\!\\left(t+\\phi(T)\\right)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( -a(T)\\sin(t+\\phi(T)) \\)",
      canonicalAnswer: "-a*sin(t+phi)",
    },
  },
  {
    id: "am6-010",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "In \\( y(t)=a(\\varepsilon t)\\cos\\!\\big(t+\\phi(\\varepsilon t)\\big) \\), identify the fast and slow variables.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["slow/fast variables"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read off the two timescales.",
          workingLatex: "\\text{fast: } t;\\qquad \\text{slow: } T=\\varepsilon t",
          explanation: "Oscillation happens on the t-scale; amplitude/phase drift on the T-scale.",
        },
      ],
      finalAnswer: "fast \\( t \\); slow \\( T=\\varepsilon t \\)",
      canonicalAnswer: "fast t; slow T=eps*t",
    },
  },
  {
    id: "am6-011",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Give the leading amplitude law for \\( y''+\\varepsilon y'+y=0 \\), \\( a(0)=a_0 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["linear damping", "amplitude equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Secular removal: the e^{it} coefficient gives 2A'+A=0.",
          workingLatex: "\\frac{da}{dT}=-\\frac{a}{2}",
          explanation: "Half the rate of the 2εy' case.",
        },
        {
          stepNumber: 2,
          description: "Integrate.",
          workingLatex: "a(T)=a_0 e^{-T/2}=a_0 e^{-\\varepsilon t/2}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( a(T)=a_0 e^{-\\varepsilon t/2} \\)",
      canonicalAnswer: "a0*exp(-eps*t/2)",
    },
  },
  {
    id: "am6-012",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Quote the leading frequency of the soft-spring Duffing oscillator \\( y''+y-\\varepsilon y^{3}=0 \\) at amplitude \\( a \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Duffing", "frequency shift"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Flip the sign of the cubic relative to the hard spring.",
          workingLatex: "\\omega=1-\\frac{3}{8}\\varepsilon a^{2}",
          explanation: "A softening nonlinearity lowers the frequency.",
        },
      ],
      finalAnswer: "\\( \\omega=1-\\dfrac{3}{8}\\varepsilon a^{2} \\)",
      canonicalAnswer: "1-(3/8)*eps*a^2",
    },
  },

  // ───────────────────────── Standard (18) ─────────────────────────

  // ── Cluster D: Deriving the slow-flow equations ─────────────────────
  {
    id: "am6-013",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "For the Duffing oscillator \\( y''+y+\\varepsilon y^{3}=0 \\) with \\( y_0=A(T)e^{it}+\\text{c.c.} \\), derive the slow-flow equation for \\( A(T) \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["Duffing", "secular removal", "slow flow"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Collect the O(ε) equation.",
          workingLatex: "\\partial_{tt}y_1+y_1=-2\\,\\partial_{tT}y_0-y_0^{3}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Extract the e^{it} (resonant) coefficient; (A e^{it}+c.c.)³ has e^{it} coefficient 3A²Ā.",
          workingLatex: "\\text{coeff of }e^{it}:\\ -2iA'-3A^{2}\\bar A",
          explanation: "Only the e^{±it} terms are secular.",
        },
        {
          stepNumber: 3,
          description: "Set the resonant coefficient to zero.",
          workingLatex: "2iA'+3A^{2}\\bar A=0\\ \\Rightarrow\\ \\frac{dA}{dT}=\\frac{3i}{2}|A|^{2}A",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{dA}{dT}=\\dfrac{3i}{2}|A|^{2}A \\)",
      canonicalAnswer: "dA/dT=(3*I/2)*abs(A)^2*A",
    },
  },
  {
    id: "am6-014",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Derive the amplitude equation \\( da/dT \\) for the van der Pol oscillator \\( y''+y+\\varepsilon(y^{2}-1)y'=0 \\), with \\( y_0=a(T)\\cos(t+\\phi) \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["van der Pol", "amplitude equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "O(ε) equation with the damping term.",
          workingLatex: "\\partial_{tt}y_1+y_1=-2\\,\\partial_{tT}y_0-(y_0^{2}-1)\\,\\partial_t y_0",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Use (a²cos²−1)(−a sin)=−a sin(a²cos²−1); the sin(t+φ) coefficient is the secular one.",
          workingLatex: "\\text{sin}(t+\\phi)\\ \\text{coeff}:\\ 2\\frac{da}{dT}-a\\left(1-\\frac{a^{2}}{4}\\right)",
          explanation: "Using sin·cos² → ¼(... ) reduction.",
        },
        {
          stepNumber: 3,
          description: "Set it to zero.",
          workingLatex: "\\frac{da}{dT}=\\frac{a}{2}\\left(1-\\frac{a^{2}}{4}\\right)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{da}{dT}=\\dfrac{a}{2}\\left(1-\\dfrac{a^{2}}{4}\\right) \\)",
      canonicalAnswer: "(a/2)*(1-a^2/4)",
    },
  },
  {
    id: "am6-015",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Find the leading uniformly-valid solution of \\( y''+2\\varepsilon y'+y=0 \\) with \\( y(0)=a_0,\\ y'(0)=0 \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["linear damping", "uniformly valid"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Slow flow gives exponential amplitude decay, constant phase.",
          workingLatex: "\\frac{da}{dT}=-a,\\quad \\frac{d\\phi}{dT}=0\\ \\Rightarrow\\ a=a_0 e^{-T},\\ \\phi=0",
          explanation: "y'(0)=0 fixes φ₀=0 at leading order.",
        },
        {
          stepNumber: 2,
          description: "Assemble.",
          workingLatex: "y\\sim a_0 e^{-\\varepsilon t}\\cos t",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y\\sim a_0 e^{-\\varepsilon t}\\cos t \\)",
      canonicalAnswer: "a0*exp(-eps*t)*cos(t)",
    },
  },
  {
    id: "am6-016",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Show that the quadratic oscillator \\( y''+y+\\varepsilon y^{2}=0 \\) has no frequency shift at \\( O(\\varepsilon) \\), and say at what order it first appears.",
    marks: 3,
    yearCreated: 2026,
    tags: ["secular removal", "even nonlinearity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Square the leading order: only DC and second harmonic appear.",
          workingLatex: "y_0^{2}=\\tfrac12 a^{2}+\\tfrac12 a^{2}\\cos\\!\\big(2(t+\\phi)\\big)",
          explanation: "There is no e^{±it} term, so nothing is resonant at O(ε).",
        },
        {
          stepNumber: 2,
          description: "Hence the slow flow is trivial at this order.",
          workingLatex: "\\frac{da}{dT}=0,\\ \\frac{d\\phi}{dT}=0\\ \\Rightarrow\\ \\text{shift is } O(\\varepsilon^{2})",
          explanation: "The second harmonic feeds back into the fundamental only at next order.",
        },
      ],
      finalAnswer: "No \\( O(\\varepsilon) \\) shift; first appears at \\( O(\\varepsilon^{2}) \\)",
      canonicalAnswer: "no O(eps) shift; O(eps^2)",
    },
  },
  {
    id: "am6-017",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Give the leading uniformly-valid solution of \\( y''+y+\\varepsilon y^{3}=0 \\) with \\( y(0)=a_0,\\ y'(0)=0 \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["Duffing", "uniformly valid", "frequency shift"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Amplitude is constant; phase drifts at the Duffing rate.",
          workingLatex: "a=a_0,\\quad \\frac{d\\phi}{dT}=\\frac{3}{8}a_0^{2}",
          explanation: "Conservative system ⇒ no amplitude decay.",
        },
        {
          stepNumber: 2,
          description: "Fold the slow phase into the carrier.",
          workingLatex: "y\\sim a_0\\cos\\!\\left[\\left(1+\\tfrac38\\varepsilon a_0^{2}\\right)t\\right]",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y\\sim a_0\\cos\\!\\left[\\left(1+\\tfrac38\\varepsilon a_0^{2}\\right)t\\right] \\)",
      canonicalAnswer: "a0*cos((1+(3/8)*eps*a0^2)*t)",
    },
  },
  {
    id: "am6-018",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "For nonlinear damping \\( y''+y+\\varepsilon (y')^{3}=0 \\), derive the amplitude equation \\( da/dT \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["nonlinear damping", "amplitude equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Leading velocity and its cube.",
          workingLatex: "\\partial_t y_0=-a\\sin\\psi,\\quad (\\partial_t y_0)^{3}=-a^{3}\\sin^{3}\\psi=-a^{3}\\frac{3\\sin\\psi-\\sin 3\\psi}{4}",
          explanation: "ψ=t+φ.",
        },
        {
          stepNumber: 2,
          description: "Match the sin ψ coefficient in the O(ε) equation.",
          workingLatex: "2\\frac{da}{dT}+\\frac{3}{4}a^{3}=0",
          explanation: "The −2∂_tT y₀ term contributes 2a' sin ψ.",
        },
        {
          stepNumber: 3,
          description: "Solve for the slow flow.",
          workingLatex: "\\frac{da}{dT}=-\\frac{3}{8}a^{3}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{da}{dT}=-\\dfrac{3}{8}a^{3} \\)",
      canonicalAnswer: "-(3/8)*a^3",
    },
  },
  {
    id: "am6-019",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Solve \\( \\dfrac{da}{dT}=-\\dfrac{3}{8}a^{3} \\) with \\( a(0)=a_0 \\), and state the decay type.",
    marks: 3,
    yearCreated: 2026,
    tags: ["nonlinear damping", "algebraic decay"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Separate variables.",
          workingLatex: "\\int a^{-3}\\,da=-\\frac{3}{8}\\int dT\\ \\Rightarrow\\ -\\frac{1}{2a^{2}}=-\\frac{3}{8}T+C",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Apply a(0)=a₀ and rearrange.",
          workingLatex: "a(T)=\\frac{a_0}{\\sqrt{1+\\tfrac34 a_0^{2}T}}",
          explanation: "Algebraic (∼T^{-1/2}) decay, not exponential.",
        },
      ],
      finalAnswer: "\\( a(T)=\\dfrac{a_0}{\\sqrt{1+\\tfrac34 a_0^{2}T}} \\) (algebraic decay)",
      canonicalAnswer: "a0/sqrt(1+(3/4)*a0^2*T)",
    },
  },
  {
    id: "am6-020",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Writing \\( A=R e^{i\\theta} \\), reduce the Duffing slow flow \\( \\dfrac{dA}{dT}=\\dfrac{3i}{2}|A|^{2}A \\) to real equations for \\( R \\) and \\( \\theta \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["Duffing", "polar slow flow"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute A=Re^{iθ} and separate real/imaginary parts.",
          workingLatex: "(R'+iR\\theta')e^{i\\theta}=\\frac{3i}{2}R^{3}e^{i\\theta}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Match parts.",
          workingLatex: "R'=0,\\qquad \\theta'=\\frac{3}{2}R^{2}",
          explanation: "Constant amplitude; phase grows linearly in T. With a=2R this is θ'=(3/8)a².",
        },
      ],
      finalAnswer: "\\( R'=0,\\ \\theta'=\\dfrac{3}{2}R^{2} \\)",
      canonicalAnswer: "R'=0; theta'=(3/2)*R^2",
    },
  },
  {
    id: "am6-021",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Generalise the Duffing shift: find the leading frequency of \\( y''+\\omega_0^{2}y+\\varepsilon y^{3}=0 \\) at amplitude \\( a \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["Duffing", "frequency shift", "general frequency"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rescale to the natural frequency ω₀; the resonant balance gives the phase rate.",
          workingLatex: "\\omega=\\omega_0+\\frac{3\\varepsilon a^{2}}{8\\omega_0}",
          explanation: "Reduces to 1+3εa²/8 when ω₀=1.",
        },
      ],
      finalAnswer: "\\( \\omega=\\omega_0+\\dfrac{3\\varepsilon a^{2}}{8\\omega_0} \\)",
      canonicalAnswer: "w0+(3*eps*a^2)/(8*w0)",
    },
  },
  {
    id: "am6-022",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Quote the period \\( T_{\\mathrm{p}} \\) of the Duffing oscillator \\( y''+y+\\varepsilon y^{3}=0 \\) at amplitude \\( a \\), to first order in \\( \\varepsilon \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["Duffing", "period"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Period is 2π/ω.",
          workingLatex: "T_{\\mathrm{p}}=\\frac{2\\pi}{\\omega}=\\frac{2\\pi}{1+\\tfrac38\\varepsilon a^{2}}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Linearise in ε.",
          workingLatex: "T_{\\mathrm{p}}\\approx 2\\pi\\left(1-\\frac{3}{8}\\varepsilon a^{2}\\right)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( T_{\\mathrm{p}}\\approx 2\\pi\\left(1-\\tfrac38\\varepsilon a^{2}\\right) \\)",
      canonicalAnswer: "2*pi*(1-(3/8)*eps*a^2)",
    },
  },
  {
    id: "am6-023",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "For the damped Duffing oscillator \\( y''+2\\varepsilon y'+y+\\varepsilon y^{3}=0 \\), state the coupled slow-flow equations for amplitude \\( a \\) and phase \\( \\phi \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["damped Duffing", "slow flow"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Damping fixes the amplitude rate; the cubic fixes the phase rate.",
          workingLatex: "\\frac{da}{dT}=-a,\\qquad \\frac{d\\phi}{dT}=\\frac{3}{8}a^{2}",
          explanation: "The two effects decouple at leading order.",
        },
      ],
      finalAnswer: "\\( \\dfrac{da}{dT}=-a,\\quad \\dfrac{d\\phi}{dT}=\\dfrac{3}{8}a^{2} \\)",
      canonicalAnswer: "da/dT=-a; dphi/dT=(3/8)a^2",
    },
  },
  {
    id: "am6-024",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Solve the van der Pol amplitude equation \\( \\dfrac{da}{dT}=\\dfrac{a}{2}\\left(1-\\dfrac{a^{2}}{4}\\right) \\) with \\( a(0)=a_0 \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["van der Pol", "logistic-type"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Let u=a²; the equation becomes a logistic ODE.",
          workingLatex: "u=a^{2}:\\quad \\frac{du}{dT}=u\\left(1-\\frac{u}{4}\\right)",
          explanation: "Since u'=2aa'.",
        },
        {
          stepNumber: 2,
          description: "Solve the logistic ODE and revert.",
          workingLatex: "a(T)=\\frac{2}{\\sqrt{1+\\left(\\dfrac{4}{a_0^{2}}-1\\right)e^{-T}}}",
          explanation: "a→2 as T→∞ for any a₀>0.",
        },
      ],
      finalAnswer: "\\( a(T)=\\dfrac{2}{\\sqrt{1+\\left(\\tfrac{4}{a_0^{2}}-1\\right)e^{-T}}} \\)",
      canonicalAnswer: "2/sqrt(1+(4/a0^2-1)*exp(-T))",
    },
  },
  {
    id: "am6-025",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Linearise the van der Pol amplitude equation about its limit cycle \\( a=2 \\) and find the rate of approach.",
    marks: 3,
    yearCreated: 2026,
    tags: ["van der Pol", "stability"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate f(a)=½a−a³/8 at a=2.",
          workingLatex: "f'(a)=\\frac12-\\frac{3a^{2}}{8},\\quad f'(2)=\\frac12-\\frac32=-1",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Perturbation b=a−2 decays.",
          workingLatex: "\\frac{db}{dT}=-b\\ \\Rightarrow\\ b\\sim e^{-T}=e^{-\\varepsilon t}",
          explanation: "The limit cycle is stable; perturbations relax on the slow scale.",
        },
      ],
      finalAnswer: "\\( b\\sim e^{-\\varepsilon t} \\) (stable, rate 1 in \\( T \\))",
      canonicalAnswer: "b~exp(-eps*t)",
    },
  },
  {
    id: "am6-026",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Find the leading frequency of the quintic oscillator \\( y''+y+\\varepsilon y^{5}=0 \\) at amplitude \\( a \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["frequency shift", "higher nonlinearity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand cos⁵ψ and read off the fundamental.",
          workingLatex: "\\cos^{5}\\psi=\\frac{10\\cos\\psi+5\\cos 3\\psi+\\cos 5\\psi}{16}",
          explanation: "Coefficient of cos ψ is 10/16=5/8.",
        },
        {
          stepNumber: 2,
          description: "Match the cos ψ secular term: 2aφ'−(5/8)a⁵=0.",
          workingLatex: "\\frac{d\\phi}{dT}=\\frac{5}{16}a^{4}\\ \\Rightarrow\\ \\omega=1+\\frac{5}{16}\\varepsilon a^{4}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\omega=1+\\dfrac{5}{16}\\varepsilon a^{4} \\)",
      canonicalAnswer: "1+(5/16)*eps*a^4",
    },
  },
  {
    id: "am6-027",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Why does the amplitude of the conservative Duffing oscillator stay constant in the multiple-scales solution? Give the slow-flow reason.",
    marks: 3,
    yearCreated: 2026,
    tags: ["Duffing", "conservative", "amplitude"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The secular coefficient is purely imaginary.",
          workingLatex: "\\frac{dA}{dT}=\\frac{3i}{2}|A|^{2}A\\ \\Rightarrow\\ \\frac{d|A|^{2}}{dT}=\\bar A A'+A\\bar A'=0",
          explanation: "An imaginary slow-flow rotates A without changing |A|.",
        },
        {
          stepNumber: 2,
          description: "Hence amplitude is conserved; only the phase drifts.",
          workingLatex: "|A|=\\text{const}\\ \\Rightarrow\\ a=\\text{const}",
          explanation: "Consistent with energy conservation of the undamped equation.",
        },
      ],
      finalAnswer: "\\( da/dT=0 \\): the slow-flow rate is pure imaginary, so \\( |A| \\) is conserved.",
      canonicalAnswer: "da/dT=0 (imaginary slow flow)",
    },
  },
  {
    id: "am6-028",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Write down the explicit \\( O(\\varepsilon) \\) equation \\( \\partial_{tt}y_1+y_1=\\dots \\) for the Duffing oscillator \\( y''+y+\\varepsilon y^{3}=0 \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["Duffing", "order epsilon equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Insert the operator expansion and collect O(ε).",
          workingLatex: "\\partial_{tt}y_1+y_1=-2\\,\\partial_{tT}y_0-y_0^{3}",
          explanation: "The 2ε∂_tT term and the cubic both enter at first order.",
        },
      ],
      finalAnswer: "\\( \\partial_{tt}y_1+y_1=-2\\,\\partial_{tT}y_0-y_0^{3} \\)",
      canonicalAnswer: "d_tt y1 + y1 = -2 d_tT y0 - y0^3",
    },
  },
  {
    id: "am6-029",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Compute the energy decay law \\( E(t) \\) for \\( y''+2\\varepsilon y'+y=0 \\) from its multiple-scales amplitude.",
    marks: 3,
    yearCreated: 2026,
    tags: ["linear damping", "energy"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Energy of a unit-frequency oscillator scales as amplitude².",
          workingLatex: "E\\propto a^{2}=a_0^{2}e^{-2T}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Write in t.",
          workingLatex: "E(t)=E_0 e^{-2\\varepsilon t}",
          explanation: "Energy decays twice as fast as amplitude.",
        },
      ],
      finalAnswer: "\\( E(t)=E_0 e^{-2\\varepsilon t} \\)",
      canonicalAnswer: "E0*exp(-2*eps*t)",
    },
  },
  {
    id: "am6-030",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "After removing secular terms in the Duffing problem, find the bounded \\( O(\\varepsilon) \\) correction \\( y_1 \\) (the third-harmonic term), with \\( y_0=a\\cos\\psi \\), \\( \\psi=t+\\phi \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["Duffing", "third harmonic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The non-secular drive is the third harmonic of y₀³.",
          workingLatex: "y_0^{3}=a^{3}\\cos^{3}\\psi=\\frac{3a^{3}}{4}\\cos\\psi+\\frac{a^{3}}{4}\\cos 3\\psi",
          explanation: "The cos ψ part is removed by the slow flow; the cos 3ψ part forces y₁.",
        },
        {
          stepNumber: 2,
          description: "Solve y₁''+y₁=−(a³/4)cos 3ψ for the particular solution.",
          workingLatex: "y_1=-\\frac{a^{3}/4}{1-3^{2}}\\cos 3\\psi=\\frac{a^{3}}{32}\\cos 3\\psi",
          explanation: "A drive cos 3ψ gives particular solution cos3ψ/(1−9)=−cos3ψ/8.",
        },
      ],
      finalAnswer: "\\( y_1=\\dfrac{a^{3}}{32}\\cos 3\\psi \\)",
      canonicalAnswer: "(a^3/32)*cos(3*(t+phi))",
    },
  },

  // ───────────────────────── Challenge (10) ─────────────────────────

  // ── Cluster E: uniformly-valid solutions, forced & parametric ───────
  {
    id: "am6-031",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText: "Give the leading uniformly-valid solution of the van der Pol oscillator \\( y''+y+\\varepsilon(y^{2}-1)y'=0 \\) with small initial amplitude \\( a_0 \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["van der Pol", "uniformly valid", "limit cycle"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the solved amplitude equation; phase is constant at leading order.",
          workingLatex: "a(T)=\\frac{2}{\\sqrt{1+\\left(\\tfrac{4}{a_0^{2}}-1\\right)e^{-T}}},\\quad \\phi=\\text{const}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Assemble with the fast carrier.",
          workingLatex: "y\\sim \\frac{2\\cos t}{\\sqrt{1+\\left(\\tfrac{4}{a_0^{2}}-1\\right)e^{-\\varepsilon t}}}",
          explanation: "Spirals onto the amplitude-2 limit cycle.",
        },
      ],
      finalAnswer: "\\( y\\sim \\dfrac{2\\cos t}{\\sqrt{1+\\left(\\tfrac{4}{a_0^{2}}-1\\right)e^{-\\varepsilon t}}} \\)",
      canonicalAnswer: "2*cos(t)/sqrt(1+(4/a0^2-1)*exp(-eps*t))",
    },
  },
  {
    id: "am6-032",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText: "For the Rayleigh oscillator \\( y''+y=\\varepsilon\\big(y'-\\tfrac13(y')^{3}\\big) \\), derive the amplitude equation and the limit-cycle amplitude.",
    marks: 4,
    yearCreated: 2026,
    tags: ["Rayleigh", "amplitude equation", "limit cycle"],
    workedSolution: {
      steps: [
        // REVIEW: amplitude-equation coefficient relies on the sin³ reduction;
        // limit-cycle value a=2 is standard but re-derivation not fully checked.
        {
          stepNumber: 1,
          description: "With y₀=a cos ψ, the drive y₀'−⅓(y₀')³ has sin ψ coefficient giving the secular balance.",
          workingLatex: "\\frac{da}{dT}=\\frac{a}{2}\\left(1-\\frac{a^{2}}{4}\\right)",
          explanation: "Same normal form as van der Pol after the cubic reduction.",
        },
        {
          stepNumber: 2,
          description: "Set the rate to zero.",
          workingLatex: "a=2",
          explanation: "Rayleigh and van der Pol share the amplitude-2 limit cycle.",
        },
      ],
      finalAnswer: "\\( \\dfrac{da}{dT}=\\dfrac{a}{2}\\left(1-\\dfrac{a^{2}}{4}\\right),\\ a\\to 2 \\)",
      canonicalAnswer: "(a/2)*(1-a^2/4); a=2",
    },
  },
  {
    id: "am6-033",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText: "A weakly-forced oscillator near resonance is \\( y''+y=\\varepsilon\\big(\\gamma\\cos t-2k y'\\big) \\). Derive the slow-flow equation for the complex amplitude \\( A(T) \\).",
    marks: 5,
    yearCreated: 2026,
    tags: ["forced resonance", "slow flow"],
    workedSolution: {
      steps: [
        // REVIEW: forcing/damping balance and the factor on γ depend on the
        // e^{it} bookkeeping convention; verify normalisation before use.
        {
          stepNumber: 1,
          description: "Collect the e^{it} coefficient at O(ε) with drive γcos t and damping −2ky'.",
          workingLatex: "\\partial_{tt}y_1+y_1=-2\\,\\partial_{tT}y_0+\\gamma\\cos t-2k\\,\\partial_t y_0",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Set the resonant e^{it} coefficient to zero (γcos t = ½γ(e^{it}+c.c.)).",
          workingLatex: "-2iA'-2ikA+\\frac{\\gamma}{2}=0\\ \\Rightarrow\\ \\frac{dA}{dT}=-kA-\\frac{i\\gamma}{4}",
          explanation: "Linear slow flow: a forced, damped relaxation toward a steady amplitude.",
        },
      ],
      finalAnswer: "\\( \\dfrac{dA}{dT}=-kA-\\dfrac{i\\gamma}{4} \\)",
      canonicalAnswer: "dA/dT=-k*A - I*gamma/4",
    },
  },
  {
    id: "am6-034",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText: "For the forced, damped slow flow \\( \\dfrac{dA}{dT}=-kA-\\dfrac{i\\gamma}{4} \\) (\\( k>0 \\)), find the steady-state amplitude \\( |A|_\\infty \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["forced resonance", "steady state"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set dA/dT=0.",
          workingLatex: "kA_\\infty=-\\frac{i\\gamma}{4}\\ \\Rightarrow\\ A_\\infty=-\\frac{i\\gamma}{4k}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Take the modulus; physical amplitude a=2|A|.",
          workingLatex: "|A|_\\infty=\\frac{\\gamma}{4k}\\ \\Rightarrow\\ a_\\infty=\\frac{\\gamma}{2k}",
          explanation: "Resonant response set by the damping k.",
        },
      ],
      finalAnswer: "\\( |A|_\\infty=\\dfrac{\\gamma}{4k} \\) (so \\( a_\\infty=\\tfrac{\\gamma}{2k} \\))",
      canonicalAnswer: "gamma/(4*k)",
    },
  },
  {
    id: "am6-035",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText: "Including the third-harmonic correction, write the two-term solution of \\( y''+y+\\varepsilon y^{3}=0 \\) at constant amplitude \\( a \\), phase \\( \\psi=(1+\\tfrac38\\varepsilon a^{2})t \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["Duffing", "third harmonic", "two-term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Combine leading order with the O(ε) third harmonic.",
          workingLatex: "y\\sim a\\cos\\psi+\\varepsilon\\,\\frac{a^{3}}{32}\\cos 3\\psi",
          explanation: "The frequency correction is folded into ψ.",
        },
      ],
      finalAnswer: "\\( y\\sim a\\cos\\psi+\\varepsilon\\dfrac{a^{3}}{32}\\cos 3\\psi \\)",
      canonicalAnswer: "a*cos(psi)+eps*(a^3/32)*cos(3*psi)",
    },
  },
  {
    id: "am6-036",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText: "For the slowly-varying linear oscillator \\( y''+\\omega^{2}(\\varepsilon t)\\,y=0 \\), use a WKB/multiple-scales argument to give the leading amplitude law (the adiabatic invariant).",
    marks: 5,
    yearCreated: 2026,
    tags: ["adiabatic invariant", "slowly varying frequency"],
    workedSolution: {
      steps: [
        // REVIEW: overlaps WKB (am5); the a∝ω^{-1/2} adiabatic invariant is
        // standard but the matching/derivation is only sketched here.
        {
          stepNumber: 1,
          description: "Conservation of action E/ω gives the amplitude scaling.",
          workingLatex: "\\frac{1}{2}a^{2}\\omega=\\text{const}\\ \\Rightarrow\\ a\\propto \\omega^{-1/2}",
          explanation: "The action E/ω is an adiabatic invariant for slow ω(εt).",
        },
        {
          stepNumber: 2,
          description: "Assemble the WKB-type solution.",
          workingLatex: "y\\sim \\frac{C}{\\sqrt{\\omega(\\varepsilon t)}}\\cos\\!\\left(\\int^{t}\\omega(\\varepsilon s)\\,ds\\right)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y\\sim \\dfrac{C}{\\sqrt{\\omega}}\\cos\\!\\left(\\displaystyle\\int^{t}\\omega\\,ds\\right),\\ a\\propto\\omega^{-1/2} \\)",
      canonicalAnswer: "C*omega^(-1/2)*cos(int omega dt)",
    },
  },
  {
    id: "am6-037",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText: "The Mathieu equation \\( y''+(1+\\varepsilon\\cos 2t)\\,y=0 \\) shows parametric resonance near the natural frequency. State the leading growth/transition condition from a two-scale analysis.",
    marks: 5,
    yearCreated: 2026,
    tags: ["Mathieu", "parametric resonance"],
    workedSolution: {
      steps: [
        // REVIEW: parametric-resonance transition curves are convention- and
        // detuning-dependent; the eps/4 tongue half-width needs expert check.
        {
          stepNumber: 1,
          description: "The 2:1 parametric drive couples e^{it} to its conjugate; the slow flow is a 2×2 linear system.",
          workingLatex: "\\frac{dA}{dT}=-\\frac{i}{4}\\bar A\\ \\ \\text{(near } \\omega=1\\text{)}",
          explanation: "Coupling A to Ā is the signature of parametric (rather than ordinary) resonance.",
        },
        {
          stepNumber: 2,
          description: "Eigenvalues of the real slow-flow system give exponential growth.",
          workingLatex: "\\text{growth rate } \\sigma=\\frac{\\varepsilon}{4}\\ \\Rightarrow\\ \\text{instability tongue of half-width } \\sim\\frac{\\varepsilon}{4}",
          explanation: "The principal instability sits at the natural frequency with O(ε) width.",
        },
      ],
      finalAnswer: "Unstable near \\( \\omega=1 \\) with growth rate \\( \\sigma\\sim\\tfrac{\\varepsilon}{4} \\)",
      canonicalAnswer: "growth rate ~ eps/4 near omega=1",
    },
  },
  {
    id: "am6-038",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText: "Explain, using the slow time, why the naive single-scale expansion of any weakly nonlinear oscillator breaks down, and at what time.",
    marks: 4,
    yearCreated: 2026,
    tags: ["secular terms", "breakdown time"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Secular terms grow like εt relative to the leading term.",
          workingLatex: "\\varepsilon y_1\\sim \\varepsilon t\\ \\text{becomes }O(1)\\ \\text{when } t\\sim \\varepsilon^{-1}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "State the breakdown time.",
          workingLatex: "t=O\\!\\left(\\varepsilon^{-1}\\right)",
          explanation: "Exactly the slow timescale T=εt=O(1); two-timing keeps the expansion uniform there.",
        },
      ],
      finalAnswer: "Breaks down when \\( t=O(\\varepsilon^{-1}) \\) (i.e. \\( T=O(1) \\))",
      canonicalAnswer: "t ~ 1/eps",
    },
  },
  {
    id: "am6-039",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText: "Solve \\( y''+y+\\varepsilon y^{3}=0 \\), \\( y(0)=1,\\ y'(0)=0 \\): give \\( a_0,\\ \\phi_0 \\) and the leading uniformly-valid solution.",
    marks: 4,
    yearCreated: 2026,
    tags: ["Duffing", "initial conditions", "uniformly valid"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Match initial conditions at leading order.",
          workingLatex: "a_0=1,\\quad \\phi_0=0",
          explanation: "y(0)=a₀cosφ₀=1 and y'(0)=−a₀sinφ₀=0.",
        },
        {
          stepNumber: 2,
          description: "Insert the constant amplitude and Duffing frequency.",
          workingLatex: "y\\sim \\cos\\!\\left[\\left(1+\\tfrac38\\varepsilon\\right)t\\right]",
          explanation: "",
        },
      ],
      finalAnswer: "\\( a_0=1,\\ \\phi_0=0 \\); \\( y\\sim\\cos\\!\\left[(1+\\tfrac38\\varepsilon)t\\right] \\)",
      canonicalAnswer: "a0=1,phi0=0; cos((1+(3/8)eps)t)",
    },
  },
  {
    id: "am6-040",
    topicRef: "am6",
    topicTitle: "Method of Multiple Scales",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText: "State the general secular-removal condition: for \\( \\partial_{tt}y_1+y_1=\\sum_n c_n e^{int} \\), which \\( n \\) give secular terms and what condition removes them?",
    marks: 4,
    yearCreated: 2026,
    tags: ["secular removal", "general principle"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Resonance occurs when the drive frequency equals the natural frequency.",
          workingLatex: "n=\\pm 1\\ \\text{are resonant};\\ \\text{removal requires } c_{\\pm 1}=0",
          explanation: "All other harmonics give bounded particular solutions c_n e^{int}/(1−n²).",
        },
      ],
      finalAnswer: "\\( n=\\pm1 \\) secular; require \\( c_{\\pm1}=0 \\)",
      canonicalAnswer: "n=+-1; require c_{+-1}=0",
    },
  },
];
