import { Question } from "@/lib/types";

/**
 * Topic: Asymptotic Methods — Stationary Phase & Steepest Descent
 * Ref:   am3  (Advanced undergraduate / Part II applied maths, year 3)
 *
 * 40 questions — 12 Foundation, 18 Standard, 10 Challenge.
 * Generalised Fresnel integrals and degenerate (p-th order) stationary points;
 * the oscillatory Gamma identity; the method of stationary phase (interior,
 * endpoint and endpoint-stationary contributions; two-saddle sums); Riemann–
 * Lebesgue / endpoint decay of non-stationary oscillatory integrals; Laplace's
 * method on the real line; the method of steepest descent (real saddles,
 * Gaussian shifts); Airy asymptotics and the Stokes phenomenon.
 *
 * Large parameter is written x (→ +∞). Standard identities used:
 *   ∫₀^∞ e^{i a t²} dt = ½√(π/a) e^{iπ/4}            (a>0)
 *   ∫₀^∞ e^{i x t^p} dt = (1/p)Γ(1/p) e^{iπ/(2p)} x^{-1/p}   (p>0)
 *   ∫₀^∞ u^{s-1} e^{iu} du = Γ(s) e^{iπ s/2}         (0<Re s<1)
 *   stationary phase:  ∫ g e^{ixφ} ~ g(t₀)√(2π/(x|φ''|)) e^{i(xφ(t₀)+ (π/4)sgnφ''(t₀))}
 *   Laplace:           ∫ g e^{xφ}  ~ g(t₀)e^{xφ(t₀)}√(2π/(x|φ''(t₀)|)),  φ''<0
 *
 * DRAFT (year-3): leading terms are standard textbook results; the // REVIEW
 * flags mark Airy / Stokes / special-function items whose correctness an
 * independent re-derivation cannot fully establish. Style pinned to
 * content/undergrad/examples/am3.md. Expert review required before student use.
 */
export const questions: Question[] = [
  // ───────────────────────── Foundation (12) ─────────────────────────

  // ── Cluster A: Generalised Fresnel & oscillatory Gamma ──────────────
  {
    id: "am3-001",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Evaluate \\( \\displaystyle\\int_0^{\\infty}\\cos(3t^{2})\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Fresnel integral"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the scaled Fresnel value.",
          workingLatex: "\\int_0^{\\infty}\\cos(a t^{2})\\,dt=\\frac{1}{2}\\sqrt{\\frac{\\pi}{2a}}",
          explanation: "Real part of ∫₀^∞ e^{iat²}dt = ½√(π/a) e^{iπ/4}.",
        },
        {
          stepNumber: 2,
          description: "Set a=3.",
          workingLatex: "\\int_0^{\\infty}\\cos(3 t^{2})\\,dt=\\frac{1}{2}\\sqrt{\\frac{\\pi}{6}}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{1}{2}\\sqrt{\\dfrac{\\pi}{6}} \\)",
      canonicalAnswer: "sqrt(pi/6)/2",
    },
  },
  {
    id: "am3-002",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Evaluate \\( \\displaystyle\\int_0^{\\infty}\\sin(5t^{2})\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Fresnel integral"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the scaled Fresnel value.",
          workingLatex: "\\int_0^{\\infty}\\sin(a t^{2})\\,dt=\\frac{1}{2}\\sqrt{\\frac{\\pi}{2a}}",
          explanation: "Imaginary part of ∫₀^∞ e^{iat²}dt = ½√(π/a) e^{iπ/4}.",
        },
        {
          stepNumber: 2,
          description: "Set a=5.",
          workingLatex: "\\int_0^{\\infty}\\sin(5 t^{2})\\,dt=\\frac{1}{2}\\sqrt{\\frac{\\pi}{10}}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{1}{2}\\sqrt{\\dfrac{\\pi}{10}} \\)",
      canonicalAnswer: "sqrt(pi/10)/2",
    },
  },
  {
    id: "am3-003",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Evaluate \\( \\displaystyle\\int_0^{\\infty} e^{2 i t^{2}}\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Fresnel integral", "contour rotation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply the complex Fresnel value with a=2.",
          workingLatex: "\\int_0^{\\infty}e^{i a t^{2}}\\,dt=\\frac{1}{2}\\sqrt{\\frac{\\pi}{a}}\\,e^{i\\pi/4}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Substitute a=2.",
          workingLatex: "\\int_0^{\\infty}e^{2 i t^{2}}\\,dt=\\frac{1}{2}\\sqrt{\\frac{\\pi}{2}}\\,e^{i\\pi/4}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{1}{2}\\sqrt{\\dfrac{\\pi}{2}}\\,e^{i\\pi/4} \\)",
      canonicalAnswer: "(1/2)*sqrt(pi/2)*exp(I*pi/4)",
    },
  },
  {
    id: "am3-004",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Evaluate \\( \\displaystyle\\int_0^{\\infty} u^{-1/2}\\cos u\\,du \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["oscillatory Gamma identity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Take the real part of the oscillatory Gamma identity with s=1/2.",
          workingLatex: "\\int_0^{\\infty} u^{s-1} e^{iu}\\,du=\\Gamma(s)\\,e^{i\\pi s/2}\\quad(s=\\tfrac12)",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Real part, with Γ(1/2)=√π.",
          workingLatex: "\\int_0^{\\infty} u^{-1/2}\\cos u\\,du=\\Gamma\\!\\left(\\tfrac12\\right)\\cos\\frac{\\pi}{4}=\\sqrt{\\pi}\\cdot\\frac{1}{\\sqrt2}=\\sqrt{\\frac{\\pi}{2}}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\sqrt{\\dfrac{\\pi}{2}} \\)",
      canonicalAnswer: "sqrt(pi/2)",
    },
  },
  {
    id: "am3-005",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Evaluate \\( \\displaystyle\\int_0^{\\infty} u^{-1/2}\\sin u\\,du \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["oscillatory Gamma identity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Take the imaginary part of the oscillatory Gamma identity with s=1/2.",
          workingLatex: "\\int_0^{\\infty} u^{-1/2}\\sin u\\,du=\\Gamma\\!\\left(\\tfrac12\\right)\\sin\\frac{\\pi}{4}=\\sqrt{\\pi}\\cdot\\frac{1}{\\sqrt2}=\\sqrt{\\frac{\\pi}{2}}",
          explanation: "Equal to the cosine integral because the phase is π/4.",
        },
      ],
      finalAnswer: "\\( \\sqrt{\\dfrac{\\pi}{2}} \\)",
      canonicalAnswer: "sqrt(pi/2)",
    },
  },

  // ── Cluster B: Degenerate (p-th order) stationary points ────────────
  {
    id: "am3-006",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find the leading-order behaviour as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_0^{\\infty} e^{i x t^{3}}\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["degenerate stationary point", "generalised Fresnel"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the generalised Fresnel formula with p=3.",
          workingLatex: "\\int_0^{\\infty}e^{i x t^{p}}\\,dt=\\frac{1}{p}\\Gamma\\!\\left(\\frac{1}{p}\\right)e^{i\\pi/(2p)}\\,x^{-1/p}",
          explanation: "Substitute u=xt^{p} and rotate onto the steepest-descent ray.",
        },
        {
          stepNumber: 2,
          description: "Set p=3.",
          workingLatex: "\\int_0^{\\infty}e^{i x t^{3}}\\,dt=\\frac{1}{3}\\Gamma\\!\\left(\\tfrac13\\right)e^{i\\pi/6}\\,x^{-1/3}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{1}{3}\\Gamma\\!\\left(\\tfrac13\\right)e^{i\\pi/6}\\,x^{-1/3} \\)",
      canonicalAnswer: "(1/3)*gamma(1/3)*exp(I*pi/6)*x^(-1/3)",
    },
  },
  {
    id: "am3-007",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find the leading term as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_0^{\\infty}\\cos\\!\\left(x t^{4}\\right)\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["degenerate stationary point", "generalised Fresnel"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Real part of the generalised Fresnel formula, p=4.",
          workingLatex: "\\int_0^{\\infty}\\cos\\!\\left(x t^{4}\\right)dt=\\frac{1}{4}\\Gamma\\!\\left(\\tfrac14\\right)\\cos\\frac{\\pi}{8}\\,x^{-1/4}",
          explanation: "Re of (1/4)Γ(1/4)e^{iπ/8}x^{-1/4}.",
        },
      ],
      finalAnswer: "\\( \\dfrac{1}{4}\\Gamma\\!\\left(\\tfrac14\\right)\\cos\\dfrac{\\pi}{8}\\,x^{-1/4} \\)",
      canonicalAnswer: "(1/4)*gamma(1/4)*cos(pi/8)*x^(-1/4)",
    },
  },

  // ── Cluster C: Saddle geometry & endpoint/Riemann–Lebesgue decay ────
  {
    id: "am3-008",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "For the phase \\( \\varphi(t)=\\tfrac13 t^{3}-t \\), find the stationary points and the value of \\( \\varphi''(t) \\) at each.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["stationary points", "saddle geometry"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set φ'(t)=0.",
          workingLatex: "\\varphi'(t)=t^{2}-1=0\\ \\Rightarrow\\ t=\\pm 1",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Evaluate the second derivative.",
          workingLatex: "\\varphi''(t)=2t\\ \\Rightarrow\\ \\varphi''(1)=2,\\ \\varphi''(-1)=-2",
          explanation: "",
        },
      ],
      finalAnswer: "\\( t=\\pm1 \\); \\( \\varphi''(1)=2,\\ \\varphi''(-1)=-2 \\)",
      canonicalAnswer: "t=1: phi''=2; t=-1: phi''=-2",
    },
  },
  {
    id: "am3-009",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Evaluate \\( \\displaystyle\\int_0^{1} e^{i x t}\\,dt \\) exactly and state its order of magnitude as \\( x\\to\\infty \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Riemann–Lebesgue", "non-stationary phase"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Integrate directly (no stationary point).",
          workingLatex: "\\int_0^{1}e^{i x t}\\,dt=\\frac{e^{i x}-1}{i x}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Bound the magnitude.",
          workingLatex: "\\left|\\frac{e^{i x}-1}{i x}\\right|\\le \\frac{2}{x}=O\\!\\left(x^{-1}\\right)",
          explanation: "A non-stationary oscillatory integral over a finite range decays like 1/x.",
        },
      ],
      finalAnswer: "\\( \\dfrac{e^{i x}-1}{i x}=O(x^{-1}) \\)",
      canonicalAnswer: "(exp(I*x)-1)/(I*x)",
    },
  },
  {
    id: "am3-010",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Evaluate \\( \\displaystyle\\int_{-\\infty}^{\\infty} e^{-x(t^{2}+1)}\\,dt \\) for \\( x>0 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Laplace method", "Gaussian"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factor the constant and use the Gaussian integral.",
          workingLatex: "\\int_{-\\infty}^{\\infty}e^{-x(t^{2}+1)}\\,dt=e^{-x}\\int_{-\\infty}^{\\infty}e^{-x t^{2}}\\,dt=e^{-x}\\sqrt{\\frac{\\pi}{x}}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( e^{-x}\\sqrt{\\dfrac{\\pi}{x}} \\)",
      canonicalAnswer: "exp(-x)*sqrt(pi/x)",
    },
  },
  {
    id: "am3-011",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Evaluate \\( \\displaystyle\\int_0^{\\infty} t^{2}\\,e^{-x t^{2}}\\,dt \\) for \\( x>0 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Gaussian moment", "Laplace method"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate the half-line Gaussian in the parameter.",
          workingLatex: "\\int_0^{\\infty}e^{-x t^{2}}\\,dt=\\frac{1}{2}\\sqrt{\\frac{\\pi}{x}}\\ \\Rightarrow\\ \\int_0^{\\infty}t^{2}e^{-x t^{2}}\\,dt=-\\frac{d}{dx}\\!\\left(\\frac{1}{2}\\sqrt{\\frac{\\pi}{x}}\\right)",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Differentiate.",
          workingLatex: "=\\frac{1}{4}\\sqrt{\\pi}\\,x^{-3/2}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{\\sqrt{\\pi}}{4}\\,x^{-3/2} \\)",
      canonicalAnswer: "sqrt(pi)/4*x^(-3/2)",
    },
  },
  {
    id: "am3-012",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find the leading term as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_{-\\infty}^{\\infty}\\frac{e^{i x t^{2}}}{1+t^{2}}\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["stationary phase", "interior stationary point"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The phase φ=t² is stationary at t=0; apply the stationary-phase formula.",
          workingLatex: "\\int g(t)e^{i x t^{2}}dt\\sim g(0)\\sqrt{\\frac{2\\pi}{x\\,|\\varphi''(0)|}}\\,e^{i\\pi/4},\\quad \\varphi''(0)=2",
          explanation: "g(t)=1/(1+t²), g(0)=1.",
        },
        {
          stepNumber: 2,
          description: "Insert g(0)=1 and φ''=2.",
          workingLatex: "\\sim \\sqrt{\\frac{2\\pi}{2x}}\\,e^{i\\pi/4}=\\sqrt{\\frac{\\pi}{x}}\\,e^{i\\pi/4}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\sqrt{\\dfrac{\\pi}{x}}\\,e^{i\\pi/4} \\)",
      canonicalAnswer: "sqrt(pi/x)*exp(I*pi/4)",
    },
  },

  // ───────────────────────── Standard (18) ─────────────────────────

  // ── Cluster A: Stationary phase, interior simple saddles ────────────
  {
    id: "am3-013",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Find the leading term as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_{-\\infty}^{\\infty} e^{i x(t^{2}-t)}\\,dt \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["stationary phase", "interior stationary point"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Locate the stationary point of φ=t²−t.",
          workingLatex: "\\varphi'(t)=2t-1=0\\ \\Rightarrow\\ t_0=\\tfrac12,\\quad \\varphi(t_0)=-\\tfrac14,\\quad \\varphi''=2",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Apply the stationary-phase formula with g≡1, sgn φ''=+1.",
          workingLatex: "\\sim \\sqrt{\\frac{2\\pi}{2x}}\\,e^{i(x\\varphi(t_0)+\\pi/4)}=\\sqrt{\\frac{\\pi}{x}}\\,e^{i(\\pi/4-x/4)}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\sqrt{\\dfrac{\\pi}{x}}\\,e^{i(\\pi/4-x/4)} \\)",
      canonicalAnswer: "sqrt(pi/x)*exp(I*(pi/4 - x/4))",
    },
  },
  {
    id: "am3-014",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Find the leading term as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_0^{\\pi} e^{i x\\sin t}\\,dt \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["stationary phase", "trigonometric phase"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The interior stationary point is at t=π/2.",
          workingLatex: "\\varphi(t)=\\sin t,\\ \\varphi'(t)=\\cos t=0\\Rightarrow t_0=\\tfrac{\\pi}{2},\\ \\varphi(t_0)=1,\\ \\varphi''(t_0)=-1",
          explanation: "Endpoints t=0,π give O(1/x) and are subdominant.",
        },
        {
          stepNumber: 2,
          description: "Apply stationary phase with sgn φ''=−1.",
          workingLatex: "\\sim\\sqrt{\\frac{2\\pi}{x}}\\,e^{i(x-\\pi/4)}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\sqrt{\\dfrac{2\\pi}{x}}\\,e^{i(x-\\pi/4)} \\)",
      canonicalAnswer: "sqrt(2*pi/x)*exp(I*(x - pi/4))",
    },
  },
  {
    id: "am3-015",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Find the leading term as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_{-\\infty}^{\\infty} e^{i x t^{3}}\\,dt \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["degenerate stationary point", "generalised Fresnel"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The integrand's real part is even; the imaginary part is odd and cancels.",
          workingLatex: "\\int_{-\\infty}^{\\infty}e^{i x t^{3}}dt=2\\int_0^{\\infty}\\cos\\!\\left(x t^{3}\\right)dt",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Use the generalised Fresnel value (p=3), real part.",
          workingLatex: "=2\\cdot\\frac{1}{3}\\Gamma\\!\\left(\\tfrac13\\right)\\cos\\frac{\\pi}{6}\\,x^{-1/3}=\\frac{\\Gamma\\!\\left(\\tfrac13\\right)}{\\sqrt3}\\,x^{-1/3}",
          explanation: "cos(π/6)=√3/2.",
        },
      ],
      finalAnswer: "\\( \\dfrac{\\Gamma\\!\\left(\\tfrac13\\right)}{\\sqrt3}\\,x^{-1/3} \\)",
      canonicalAnswer: "gamma(1/3)/sqrt(3)*x^(-1/3)",
    },
  },
  {
    id: "am3-016",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Using integration by parts, find the leading behaviour as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_0^{1}\\frac{e^{i x t}}{1+t}\\,dt \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["endpoint contribution", "non-stationary phase"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Integrate by parts; the boundary term dominates (no stationary point).",
          workingLatex: "\\int_0^{1}\\frac{e^{i x t}}{1+t}\\,dt=\\left[\\frac{e^{i x t}}{i x(1+t)}\\right]_0^{1}+O\\!\\left(x^{-2}\\right)",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Evaluate the endpoints.",
          workingLatex: "=\\frac{e^{i x}}{2 i x}-\\frac{1}{i x}+O\\!\\left(x^{-2}\\right)",
          explanation: "Leading order O(1/x).",
        },
      ],
      finalAnswer: "\\( \\dfrac{e^{i x}}{2 i x}-\\dfrac{1}{i x}+O(x^{-2}) \\)",
      canonicalAnswer: "exp(I*x)/(2*I*x) - 1/(I*x)",
    },
  },

  // ── Cluster D: Laplace's method on the real line ────────────────────
  {
    id: "am3-017",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Find the leading behaviour as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_0^{\\infty} e^{-x(t-\\ln t)}\\,dt \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["Laplace method", "interior minimum"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Minimise ψ(t)=t−ln t.",
          workingLatex: "\\psi'(t)=1-\\tfrac1t=0\\Rightarrow t_0=1,\\quad \\psi(1)=1,\\quad \\psi''(1)=\\tfrac{1}{t^{2}}\\Big|_{1}=1",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Apply Laplace's method (minimum of ψ ⇒ maximum of −ψ).",
          workingLatex: "\\int_0^{\\infty}e^{-x\\psi(t)}dt\\sim e^{-x\\psi(1)}\\sqrt{\\frac{2\\pi}{x\\,\\psi''(1)}}=e^{-x}\\sqrt{\\frac{2\\pi}{x}}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( e^{-x}\\sqrt{\\dfrac{2\\pi}{x}} \\)",
      canonicalAnswer: "exp(-x)*sqrt(2*pi/x)",
    },
  },
  {
    id: "am3-018",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Find the leading behaviour as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_0^{\\infty} e^{x(2t-t^{2})}\\,dt \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["Laplace method", "interior maximum"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Maximise φ(t)=2t−t² (interior maximum, t>0).",
          workingLatex: "\\varphi'(t)=2-2t=0\\Rightarrow t_0=1,\\quad \\varphi(1)=1,\\quad \\varphi''(1)=-2",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Apply Laplace's method.",
          workingLatex: "\\sim e^{x}\\sqrt{\\frac{2\\pi}{x\\,|\\varphi''(1)|}}=e^{x}\\sqrt{\\frac{\\pi}{x}}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( e^{x}\\sqrt{\\dfrac{\\pi}{x}} \\)",
      canonicalAnswer: "exp(x)*sqrt(pi/x)",
    },
  },
  {
    id: "am3-019",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText: "Evaluate \\( \\displaystyle\\int_0^{\\infty} u^{-1/3} e^{iu}\\,du \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["oscillatory Gamma identity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply the oscillatory Gamma identity with s=2/3.",
          workingLatex: "\\int_0^{\\infty}u^{s-1}e^{iu}\\,du=\\Gamma(s)e^{i\\pi s/2},\\quad s=\\tfrac23",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Substitute.",
          workingLatex: "\\int_0^{\\infty}u^{-1/3}e^{iu}\\,du=\\Gamma\\!\\left(\\tfrac23\\right)e^{i\\pi/3}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\Gamma\\!\\left(\\tfrac23\\right)e^{i\\pi/3} \\)",
      canonicalAnswer: "gamma(2/3)*exp(I*pi/3)",
    },
  },
  {
    id: "am3-020",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Find the leading term as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_0^{\\infty}\\cos\\!\\left(x t^{3}\\right)\\,dt \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["degenerate stationary point", "generalised Fresnel"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Real part of the generalised Fresnel value, p=3.",
          workingLatex: "\\int_0^{\\infty}\\cos\\!\\left(x t^{3}\\right)dt=\\frac{1}{3}\\Gamma\\!\\left(\\tfrac13\\right)\\cos\\frac{\\pi}{6}\\,x^{-1/3}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Use cos(π/6)=√3/2.",
          workingLatex: "=\\frac{\\sqrt3}{6}\\,\\Gamma\\!\\left(\\tfrac13\\right)x^{-1/3}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{\\sqrt3}{6}\\,\\Gamma\\!\\left(\\tfrac13\\right)x^{-1/3} \\)",
      canonicalAnswer: "sqrt(3)/6*gamma(1/3)*x^(-1/3)",
    },
  },
  {
    id: "am3-021",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Find the leading term as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_{-\\infty}^{\\infty}\\cos\\!\\left(x(t^{2}+t)\\right)\\,dt \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["stationary phase", "real part"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Stationary point of φ=t²+t.",
          workingLatex: "\\varphi'=2t+1=0\\Rightarrow t_0=-\\tfrac12,\\ \\varphi(t_0)=-\\tfrac14,\\ \\varphi''=2",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Take the real part of the stationary-phase contribution.",
          workingLatex: "\\mathrm{Re}\\!\\left[\\sqrt{\\frac{\\pi}{x}}\\,e^{i(\\pi/4-x/4)}\\right]=\\sqrt{\\frac{\\pi}{x}}\\cos\\!\\left(\\frac{x}{4}-\\frac{\\pi}{4}\\right)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\sqrt{\\dfrac{\\pi}{x}}\\cos\\!\\left(\\dfrac{x}{4}-\\dfrac{\\pi}{4}\\right) \\)",
      canonicalAnswer: "sqrt(pi/x)*cos(x/4 - pi/4)",
    },
  },
  {
    id: "am3-022",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Evaluate \\( \\displaystyle\\int_0^{\\infty} e^{-t}e^{i x t}\\,dt \\) exactly and give its decay rate as \\( x\\to\\infty \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["Riemann–Lebesgue", "exponential decay"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Combine the exponents and integrate.",
          workingLatex: "\\int_0^{\\infty}e^{-(1-i x)t}\\,dt=\\frac{1}{1-i x}",
          explanation: "Re(1−ix)=1>0 so the integral converges.",
        },
        {
          stepNumber: 2,
          description: "Magnitude for large x.",
          workingLatex: "\\left|\\frac{1}{1-i x}\\right|=\\frac{1}{\\sqrt{1+x^{2}}}=O\\!\\left(x^{-1}\\right)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{1}{1-i x}=O(x^{-1}) \\)",
      canonicalAnswer: "1/(1 - I*x)",
    },
  },
  {
    id: "am3-023",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Evaluate \\( \\displaystyle\\int_{-\\infty}^{\\infty} e^{-x t^{2}+i b t}\\,dt \\) (\\( x>0 \\), \\( b\\in\\mathbb{R} \\)) by completing the square.",
    marks: 3,
    yearCreated: 2026,
    tags: ["steepest descent", "Gaussian shift"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Complete the square in the exponent.",
          workingLatex: "-x t^{2}+i b t=-x\\!\\left(t-\\frac{i b}{2x}\\right)^{2}-\\frac{b^{2}}{4x}",
          explanation: "Shift the contour onto the steepest-descent line through the saddle t=ib/(2x).",
        },
        {
          stepNumber: 2,
          description: "Evaluate the shifted Gaussian.",
          workingLatex: "\\int_{-\\infty}^{\\infty}e^{-x t^{2}+i b t}\\,dt=\\sqrt{\\frac{\\pi}{x}}\\,e^{-b^{2}/(4x)}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\sqrt{\\dfrac{\\pi}{x}}\\,e^{-b^{2}/(4x)} \\)",
      canonicalAnswer: "sqrt(pi/x)*exp(-b^2/(4*x))",
    },
  },
  {
    id: "am3-024",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Find the leading term as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_0^{\\infty}\\sin\\!\\left(x t^{4}\\right)\\,dt \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["degenerate stationary point", "generalised Fresnel"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Imaginary part of the generalised Fresnel value, p=4.",
          workingLatex: "\\int_0^{\\infty}\\sin\\!\\left(x t^{4}\\right)dt=\\frac{1}{4}\\Gamma\\!\\left(\\tfrac14\\right)\\sin\\frac{\\pi}{8}\\,x^{-1/4}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{1}{4}\\Gamma\\!\\left(\\tfrac14\\right)\\sin\\dfrac{\\pi}{8}\\,x^{-1/4} \\)",
      canonicalAnswer: "(1/4)*gamma(1/4)*sin(pi/8)*x^(-1/4)",
    },
  },
  {
    id: "am3-025",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Find the leading term as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_0^{\\infty} e^{i x t^{2}}\\cos t\\,dt \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["stationary phase", "endpoint stationary point"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify where the phase is stationary.",
          workingLatex: "\\varphi(t)=t^{2},\\quad \\varphi'(t)=2t=0\\ \\Rightarrow\\ t=0",
          explanation: "The only stationary point sits exactly at the endpoint t=0 of the half-line, so the dominant contribution comes from a neighbourhood of t=0.",
        },
        {
          stepNumber: 2,
          description: "Replace the slow amplitude by its endpoint value.",
          workingLatex: "\\cos t\\to\\cos 0=1\\ \\text{near } t=0\\ \\Rightarrow\\ \\int_0^{\\infty}e^{i x t^{2}}\\cos t\\,dt\\sim\\int_0^{\\infty}e^{i x t^{2}}\\,dt",
          explanation: "For large x the integral concentrates near t=0, where the smooth amplitude cos t is ≈1; the correction is higher order.",
        },
        {
          stepNumber: 3,
          description: "Use the half-line Fresnel value.",
          workingLatex: "\\int_0^{\\infty}e^{i x t^{2}}\\,dt=\\frac12\\sqrt{\\frac{\\pi}{x}}\\,e^{i\\pi/4}",
          explanation: "This is the a=x case of ∫₀^∞ e^{iat²}dt = ½√(π/a) e^{iπ/4}. Note ½√(π/x) is not the same as √(π/2x).",
        },
      ],
      finalAnswer: "\\( \\dfrac12\\sqrt{\\dfrac{\\pi}{x}}\\,e^{i\\pi/4} \\)",
      canonicalAnswer: "(1/2)*sqrt(pi/x)*exp(I*pi/4)",
    },
  },
  {
    id: "am3-026",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Evaluate \\( \\displaystyle\\int_0^{\\infty} t^{1/2}\\,e^{-x t^{2}}\\,dt \\) for \\( x>0 \\) in terms of the Gamma function.",
    marks: 3,
    yearCreated: 2026,
    tags: ["Laplace method", "Gamma function"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute u=t².",
          workingLatex: "\\int_0^{\\infty}t^{1/2}e^{-x t^{2}}\\,dt=\\frac12\\int_0^{\\infty}u^{-1/4}e^{-x u}\\,du",
          explanation: "t=u^{1/2}, dt=½u^{-1/2}du.",
        },
        {
          stepNumber: 2,
          description: "Use the Gamma integral ∫₀^∞ u^{s-1}e^{-xu}du = Γ(s)x^{-s} with s=3/4.",
          workingLatex: "=\\frac12\\,\\Gamma\\!\\left(\\tfrac34\\right)x^{-3/4}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac12\\,\\Gamma\\!\\left(\\tfrac34\\right)x^{-3/4} \\)",
      canonicalAnswer: "(1/2)*gamma(3/4)*x^(-3/4)",
    },
  },
  {
    id: "am3-027",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Find the leading behaviour as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_1^{2} e^{i x t^{2}}\\,dt \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["endpoint contribution", "non-stationary phase"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "No stationary point in [1,2] (φ'=2t≠0); integrate by parts.",
          workingLatex: "\\int_1^{2}e^{i x t^{2}}\\,dt=\\left[\\frac{e^{i x t^{2}}}{2 i x t}\\right]_1^{2}+O\\!\\left(x^{-2}\\right)",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Evaluate the endpoints.",
          workingLatex: "=\\frac{e^{4 i x}}{4 i x}-\\frac{e^{i x}}{2 i x}+O\\!\\left(x^{-2}\\right)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{e^{4 i x}}{4 i x}-\\dfrac{e^{i x}}{2 i x}+O(x^{-2}) \\)",
      canonicalAnswer: "exp(4*I*x)/(4*I*x) - exp(I*x)/(2*I*x)",
    },
  },
  {
    id: "am3-028",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText: "Evaluate \\( \\displaystyle\\int_0^{\\infty} u^{-2/3}\\cos u\\,du \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["oscillatory Gamma identity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Real part of the oscillatory Gamma identity with s=1/3.",
          workingLatex: "\\int_0^{\\infty}u^{-2/3}\\cos u\\,du=\\Gamma\\!\\left(\\tfrac13\\right)\\cos\\frac{\\pi}{6}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Use cos(π/6)=√3/2.",
          workingLatex: "=\\frac{\\sqrt3}{2}\\,\\Gamma\\!\\left(\\tfrac13\\right)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{\\sqrt3}{2}\\,\\Gamma\\!\\left(\\tfrac13\\right) \\)",
      canonicalAnswer: "sqrt(3)/2*gamma(1/3)",
    },
  },
  {
    id: "am3-029",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Find the leading term as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_{-\\infty}^{\\infty} e^{-(a-i x)t^{2}}\\,dt \\), where \\( a>0 \\) is fixed.",
    marks: 3,
    yearCreated: 2026,
    tags: ["steepest descent", "complex Gaussian"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the Gaussian integral with complex coefficient (principal branch).",
          workingLatex: "\\int_{-\\infty}^{\\infty}e^{-(a-i x)t^{2}}\\,dt=\\sqrt{\\frac{\\pi}{a-i x}}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Large-x limit: a−ix ≈ −ix, and (−i)^{-1/2}=e^{iπ/4}.",
          workingLatex: "\\sim\\sqrt{\\frac{\\pi}{x}}\\,e^{i\\pi/4}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\sqrt{\\dfrac{\\pi}{x}}\\,e^{i\\pi/4} \\)",
      canonicalAnswer: "sqrt(pi/x)*exp(I*pi/4)",
    },
  },
  {
    id: "am3-030",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText: "Find the leading term as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_0^{\\infty} e^{i x t^{3/2}}\\,dt \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["generalised Fresnel", "fractional power phase"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply the generalised Fresnel formula with p=3/2.",
          workingLatex: "\\int_0^{\\infty}e^{i x t^{p}}\\,dt=\\frac{1}{p}\\Gamma\\!\\left(\\frac1p\\right)e^{i\\pi/(2p)}\\,x^{-1/p},\\quad p=\\tfrac32",
          explanation: "1/p=2/3, π/(2p)=π/3.",
        },
        {
          stepNumber: 2,
          description: "Substitute.",
          workingLatex: "=\\frac{2}{3}\\Gamma\\!\\left(\\tfrac23\\right)e^{i\\pi/3}\\,x^{-2/3}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{2}{3}\\Gamma\\!\\left(\\tfrac23\\right)e^{i\\pi/3}\\,x^{-2/3} \\)",
      canonicalAnswer: "(2/3)*gamma(2/3)*exp(I*pi/3)*x^(-2/3)",
    },
  },

  // ───────────────────────── Challenge (10) ─────────────────────────

  // ── Cluster D/E: steepest descent, two saddles, Airy & Stokes ───────
  {
    id: "am3-031",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText: "For \\( \\displaystyle\\int_C e^{i x t^{2}/2}\\,dt \\) with the contour through the saddle \\( t=0 \\), determine the steepest-descent direction \\( \\arg t \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["steepest descent", "steepest-descent path"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write t=re^{iθ} and find the real part of the exponent.",
          workingLatex: "\\frac{i x t^{2}}{2}=\\frac{i x r^{2}}{2}e^{2i\\theta}\\ \\Rightarrow\\ \\mathrm{Re}=-\\frac{x r^{2}}{2}\\sin 2\\theta",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Steepest descent maximises the decay rate of the modulus.",
          workingLatex: "\\text{decay fastest when }\\sin 2\\theta=1\\ \\Rightarrow\\ \\theta=\\frac{\\pi}{4}",
          explanation: "The descent path leaves the saddle along arg t = π/4 (and π/4+π).",
        },
      ],
      finalAnswer: "\\( \\arg t=\\dfrac{\\pi}{4} \\) (and \\( \\tfrac{\\pi}{4}+\\pi \\))",
      canonicalAnswer: "arg(t)=pi/4",
    },
  },
  {
    id: "am3-032",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText: "Using Laplace's method on \\( \\Gamma(x+1)=\\displaystyle\\int_0^{\\infty} t^{x}e^{-t}\\,dt \\), derive the leading term of Stirling's formula as \\( x\\to+\\infty \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["Laplace method", "Stirling's formula"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the integrand as e^{xφ} with t=xs, then φ in s.",
          workingLatex: "t^{x}e^{-t}=e^{x\\ln t-t},\\quad \\phi(t)=x\\ln t-t\\ \\text{has max at}\\ t_0=x",
          explanation: "φ'(t)=x/t−1=0 ⇒ t₀=x; φ''(t₀)=−x/t₀²=−1/x.",
        },
        {
          stepNumber: 2,
          description: "Apply Laplace's method about t₀=x.",
          workingLatex: "\\Gamma(x+1)\\sim e^{\\phi(x)}\\sqrt{\\frac{2\\pi}{|\\phi''(x)|}}=e^{x\\ln x-x}\\sqrt{2\\pi x}",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Collect.",
          workingLatex: "\\Gamma(x+1)\\sim\\sqrt{2\\pi x}\\,\\left(\\frac{x}{e}\\right)^{x}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\Gamma(x+1)\\sim\\sqrt{2\\pi x}\\,\\left(\\dfrac{x}{e}\\right)^{x} \\)",
      canonicalAnswer: "sqrt(2*pi*x)*(x/e)^x",
    },
  },
  {
    id: "am3-033",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText: "Find the leading term as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_0^{\\infty}\\cos\\!\\left(x(t^{2}-2t)\\right)\\,dt \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["stationary phase", "interior stationary point", "real part"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interior stationary point of φ=t²−2t (t>0).",
          workingLatex: "\\varphi'=2t-2=0\\Rightarrow t_0=1,\\ \\varphi(1)=-1,\\ \\varphi''=2",
          explanation: "The endpoint t=0 gives only O(1/x).",
        },
        {
          stepNumber: 2,
          description: "Real part of the stationary-phase contribution.",
          workingLatex: "\\mathrm{Re}\\!\\left[\\sqrt{\\frac{\\pi}{x}}\\,e^{i(-x+\\pi/4)}\\right]=\\sqrt{\\frac{\\pi}{x}}\\cos\\!\\left(x-\\frac{\\pi}{4}\\right)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\sqrt{\\dfrac{\\pi}{x}}\\cos\\!\\left(x-\\dfrac{\\pi}{4}\\right) \\)",
      canonicalAnswer: "sqrt(pi/x)*cos(x - pi/4)",
    },
  },
  {
    id: "am3-034",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText: "Find the leading behaviour as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_{-\\infty}^{\\infty} e^{-x\\cosh t}\\,dt \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["Laplace method", "saddle point", "Bessel"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Minimise cosh t (the saddle is at t=0).",
          workingLatex: "\\psi(t)=\\cosh t,\\ \\psi'(0)=0,\\ \\psi(0)=1,\\ \\psi''(0)=1",
          explanation: "This integral equals 2K₀(x).",
        },
        {
          stepNumber: 2,
          description: "Apply Laplace's method.",
          workingLatex: "\\int_{-\\infty}^{\\infty}e^{-x\\cosh t}\\,dt\\sim e^{-x}\\sqrt{\\frac{2\\pi}{x}}",
          explanation: "Consistent with 2K₀(x) ~ √(2π/x) e^{-x}.",
        },
      ],
      finalAnswer: "\\( e^{-x}\\sqrt{\\dfrac{2\\pi}{x}} \\)",
      canonicalAnswer: "exp(-x)*sqrt(2*pi/x)",
    },
  },
  {
    id: "am3-035",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText: "Evaluate \\( \\displaystyle\\int_{-\\infty}^{\\infty} e^{-t^{2}+i x t}\\,dt \\) and comment on its decay as \\( x\\to\\infty \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["Riemann–Lebesgue", "Gaussian", "smooth decay"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Complete the square.",
          workingLatex: "-t^{2}+i x t=-\\left(t-\\frac{i x}{2}\\right)^{2}-\\frac{x^{2}}{4}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Shift the contour and evaluate the Gaussian.",
          workingLatex: "\\int_{-\\infty}^{\\infty}e^{-t^{2}+i x t}\\,dt=\\sqrt{\\pi}\\,e^{-x^{2}/4}",
          explanation: "With a C^∞ rapidly-decaying amplitude and no real stationary point, the transform decays faster than any power of 1/x.",
        },
      ],
      finalAnswer: "\\( \\sqrt{\\pi}\\,e^{-x^{2}/4} \\)",
      canonicalAnswer: "sqrt(pi)*exp(-x^2/4)",
    },
  },
  {
    id: "am3-036",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText: "Quote the leading asymptotic of the Airy function \\( \\mathrm{Ai}(x) \\) as \\( x\\to+\\infty \\) and identify the saddle that produces it.",
    marks: 4,
    yearCreated: 2026,
    tags: ["Airy function", "steepest descent"],
    workedSolution: {
      steps: [
        // REVIEW: special-function asymptotic; leading term is textbook but an
        // independent re-derivation here is not a full proof. Expert check.
        {
          stepNumber: 1,
          description: "Airy integral rep with large x has a real saddle from φ=t³/3+xt.",
          workingLatex: "\\mathrm{Ai}(x)=\\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty}e^{i(t^{3}/3+x t)}\\,dt;\\quad \\text{saddle } t=i\\sqrt{x}",
          explanation: "For x>0 the relevant saddle is at t=i√x.",
        },
        {
          stepNumber: 2,
          description: "Steepest descent through t=i√x gives exponential decay.",
          workingLatex: "\\mathrm{Ai}(x)\\sim\\frac{1}{2\\sqrt{\\pi}}\\,x^{-1/4}\\,e^{-\\tfrac23 x^{3/2}}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\mathrm{Ai}(x)\\sim\\dfrac{1}{2\\sqrt{\\pi}}\\,x^{-1/4}e^{-\\frac{2}{3}x^{3/2}} \\)",
      canonicalAnswer: "exp(-(2/3)*x^(3/2))/(2*sqrt(pi)*x^(1/4))",
    },
  },
  {
    id: "am3-037",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText: "Quote the leading oscillatory asymptotic of \\( \\mathrm{Ai}(-x) \\) as \\( x\\to+\\infty \\), arising from the two real saddles.",
    marks: 4,
    yearCreated: 2026,
    tags: ["Airy function", "two saddles", "stationary phase"],
    workedSolution: {
      steps: [
        // REVIEW: special-function asymptotic; phase/amplitude standard but not
        // re-proved here. Expert check before student use.
        {
          stepNumber: 1,
          description: "For argument −x the phase t³/3−xt has two real saddles t=±√x.",
          workingLatex: "\\varphi'(t)=t^{2}-x=0\\Rightarrow t=\\pm\\sqrt{x}",
          explanation: "Their contributions are complex conjugates, giving an oscillation.",
        },
        {
          stepNumber: 2,
          description: "Summing the two stationary-phase contributions.",
          workingLatex: "\\mathrm{Ai}(-x)\\sim\\frac{1}{\\sqrt{\\pi}}\\,x^{-1/4}\\sin\\!\\left(\\frac{2}{3}x^{3/2}+\\frac{\\pi}{4}\\right)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\mathrm{Ai}(-x)\\sim\\dfrac{1}{\\sqrt{\\pi}}\\,x^{-1/4}\\sin\\!\\left(\\dfrac{2}{3}x^{3/2}+\\dfrac{\\pi}{4}\\right) \\)",
      canonicalAnswer: "x^(-1/4)*sin((2/3)*x^(3/2)+pi/4)/sqrt(pi)",
    },
  },
  {
    id: "am3-038",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText: "Show that \\( \\displaystyle\\int_{-\\infty}^{\\infty} e^{i\\left(t^{3}/3+x t\\right)}\\,dt=2\\pi\\,\\mathrm{Ai}(x) \\), and hence give its leading behaviour as \\( x\\to+\\infty \\).",
    marks: 5,
    yearCreated: 2026,
    tags: ["Airy function", "integral representation", "two coalescing saddles"],
    workedSolution: {
      steps: [
        // REVIEW: the identity is exact (standard Airy integral rep); the
        // large-x tail uses am3-036. Independent re-derivation incomplete.
        {
          stepNumber: 1,
          description: "Recognise the standard Airy integral representation.",
          workingLatex: "\\mathrm{Ai}(x)=\\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty}e^{i\\left(t^{3}/3+x t\\right)}\\,dt\\ \\Rightarrow\\ \\int_{-\\infty}^{\\infty}e^{i\\left(t^{3}/3+x t\\right)}\\,dt=2\\pi\\,\\mathrm{Ai}(x)",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Use the large-x Airy asymptotic.",
          workingLatex: "2\\pi\\,\\mathrm{Ai}(x)\\sim\\sqrt{\\pi}\\,x^{-1/4}\\,e^{-\\tfrac23 x^{3/2}}",
          explanation: "2π·(1/(2√π))=√π.",
        },
      ],
      finalAnswer: "\\( 2\\pi\\,\\mathrm{Ai}(x)\\sim\\sqrt{\\pi}\\,x^{-1/4}e^{-\\frac{2}{3}x^{3/2}} \\)",
      canonicalAnswer: "sqrt(pi)*x^(-1/4)*exp(-(2/3)*x^(3/2))",
    },
  },
  {
    id: "am3-039",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText: "Find the leading term as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_{-\\infty}^{\\infty} e^{i x\\left(t^{3}/3-t\\right)}\\,dt \\) from its two real stationary points.",
    marks: 5,
    yearCreated: 2026,
    tags: ["stationary phase", "two saddles", "saddle sum"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Stationary points and data for φ=t³/3−t.",
          workingLatex: "\\varphi'=t^{2}-1=0\\Rightarrow t=\\pm1;\\ \\varphi(1)=-\\tfrac23,\\ \\varphi''(1)=2;\\ \\varphi(-1)=\\tfrac23,\\ \\varphi''(-1)=-2",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Add the two stationary-phase contributions (each √(2π/(2x))).",
          workingLatex: "\\sqrt{\\frac{\\pi}{x}}\\left[e^{i(-\\tfrac23 x+\\pi/4)}+e^{i(\\tfrac23 x-\\pi/4)}\\right]=2\\sqrt{\\frac{\\pi}{x}}\\cos\\!\\left(\\frac{2}{3}x-\\frac{\\pi}{4}\\right)",
          explanation: "Conjugate phases combine into a cosine.",
        },
      ],
      finalAnswer: "\\( 2\\sqrt{\\dfrac{\\pi}{x}}\\cos\\!\\left(\\dfrac{2}{3}x-\\dfrac{\\pi}{4}\\right) \\)",
      canonicalAnswer: "2*sqrt(pi/x)*cos((2/3)*x - pi/4)",
    },
  },
  {
    id: "am3-040",
    topicRef: "am3",
    topicTitle: "Stationary Phase & Steepest Descent",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText: "For \\( w(z)=\\displaystyle\\int_0^{\\infty} e^{-z t-t^{3}/3}\\,dt \\), use repeated integration by parts to obtain the asymptotic series as \\( z\\to+\\infty \\), and state the Stokes line in the complex z-plane where it is maximally subdominant.",
    marks: 5,
    yearCreated: 2026,
    tags: ["asymptotic series", "Stokes phenomenon", "integration by parts"],
    workedSolution: {
      steps: [
        // REVIEW: IBP series is straightforward; the Stokes-line claim is
        // direction-convention dependent and needs expert confirmation.
        {
          stepNumber: 1,
          description: "Expand the slow factor and integrate term by term against e^{-zt}.",
          workingLatex: "w(z)=\\int_0^{\\infty}e^{-z t}\\sum_{k\\ge0}\\frac{(-1)^{k}}{3^{k}k!}t^{3k}\\,dt,\\qquad \\int_0^{\\infty}t^{3k}e^{-z t}\\,dt=\\frac{(3k)!}{z^{3k+1}}",
          explanation: "Watson's lemma: the small-t behaviour of e^{-t³/3} controls the large-z series.",
        },
        {
          stepNumber: 2,
          description: "Assemble the term-by-term series.",
          workingLatex: "w(z)\\sim\\frac{1}{z}-\\frac{2}{z^{4}}+\\frac{40}{z^{7}}-\\cdots=\\sum_{k\\ge0}\\frac{(-1)^{k}(3k)!}{3^{k}k!\\,z^{3k+1}}",
          explanation: "k=1: 6/3=2; k=2: 720/18=40.",
        },
        {
          stepNumber: 3,
          description: "Stokes structure.",
          workingLatex: "\\text{This algebraic series is maximally subdominant on the anti-Stokes/Stokes ray }\\arg z=\\pm\\frac{\\pi}{3}",
          explanation: "Where the recessive exponential contribution switches on.",
        },
      ],
      finalAnswer: "\\( w(z)\\sim\\displaystyle\\sum_{k\\ge0}\\dfrac{(-1)^{k}(3k)!}{3^{k}k!\\,z^{3k+1}} \\); Stokes ray \\( \\arg z=\\pm\\tfrac{\\pi}{3} \\)",
      canonicalAnswer: "sum_{k>=0} (-1)^k (3k)!/(3^k k! z^(3k+1))",
    },
  },
];
