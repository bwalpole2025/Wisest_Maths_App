import { Question } from "@/lib/types";

/**
 * Topic: Numerical Methods
 * Ref:   em15  (Undergraduate Engineering Mathematics)  prereq: em05, em08
 *
 * 20 questions — 6 Foundation, 9 Standard, 5 Challenge.
 * Root location (sign change, bisection, linear interpolation), Newton–Raphson,
 * the trapezium and Simpson's rules for integration, and Euler's method for ODEs.
 */
export const questions: Question[] = [
  // ───────────────────────── Foundation (6) ─────────────────────────
  {
    id: "em15-001",
    topicRef: "em15",
    topicTitle: "Numerical Methods 01",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Use the trapezium rule with one strip (\\( h=1 \\)) to estimate an integral where \\( f(0)=1 \\) and \\( f(1)=3 \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["numerical", "trapezium rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply \\( \\frac{h}{2}(f_0+f_1) \\).",
          workingLatex: "\\frac{1}{2}(1+3)=2",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 2 \\)",
      canonicalAnswer: "2",
    },
  },
  {
    id: "em15-002",
    topicRef: "em15",
    topicTitle: "Numerical Methods 02",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Apply one Newton–Raphson step to \\( f(x)=x^{2}-2 \\) starting from \\( x_0=1 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["numerical", "newton-raphson"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( x_{1}=x_0-\\frac{f(x_0)}{f'(x_0)} \\); here \\( f(1)=-1 \\), \\( f'(1)=2 \\).",
          workingLatex: "x_{1}=1-\\frac{-1}{2}=1.5",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 1.5 \\)",
      canonicalAnswer: "1.5",
    },
  },
  {
    id: "em15-003",
    topicRef: "em15",
    topicTitle: "Numerical Methods 03",
    difficulty: "Foundation",
    answerType: "interval",
    questionText:
      "Show that \\( f(x)=x^{2}-2 \\) has a root between \\( x=1 \\) and \\( x=2 \\) by a sign change.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["numerical", "sign change"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Evaluate at the endpoints.",
          workingLatex: "f(1)=-1<0,\\qquad f(2)=2>0",
          explanation: "A continuous function changing sign has a root between.",
        },
      ],
      finalAnswer: "Root in \\( (1,2) \\)",
      canonicalAnswer: "(1,2)",
    },
  },
  {
    id: "em15-004",
    topicRef: "em15",
    topicTitle: "Numerical Methods 04",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Find the midpoint used in the first bisection step on the interval \\( (1,2) \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["numerical", "bisection"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Average the endpoints.",
          workingLatex: "\\frac{1+2}{2}=1.5",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 1.5 \\)",
      canonicalAnswer: "1.5",
    },
  },
  {
    id: "em15-005",
    topicRef: "em15",
    topicTitle: "Numerical Methods 05",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Use the trapezium rule with two strips (\\( h=0.5 \\)) given \\( f(0)=0 \\), \\( f(0.5)=1 \\), \\( f(1)=2 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["numerical", "trapezium rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply \\( \\frac{h}{2}(f_0+2f_1+f_2) \\).",
          workingLatex: "\\frac{0.5}{2}(0+2(1)+2)=0.25\\cdot 4=1",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 1 \\)",
      canonicalAnswer: "1",
    },
  },
  {
    id: "em15-006",
    topicRef: "em15",
    topicTitle: "Numerical Methods 06",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Apply one step of Euler's method to \\( \\frac{dy}{dx}=y \\), \\( y(0)=1 \\), with \\( h=0.1 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["numerical", "euler"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( y_{1}=y_0+h f(x_0,y_0) \\).",
          workingLatex: "y_{1}=1+0.1\\cdot 1=1.1",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 1.1 \\)",
      canonicalAnswer: "1.1",
    },
  },

  // ───────────────────────── Standard (9) ─────────────────────────
  {
    id: "em15-007",
    topicRef: "em15",
    topicTitle: "Numerical Methods 07",
    difficulty: "Standard",
    answerType: "numeric",
    answerMeta: { requiredDp: 4 },
    questionText:
      "Apply two Newton–Raphson steps to \\( f(x)=x^{2}-2 \\) from \\( x_0=1 \\), giving \\( x_2 \\) to 4 decimal places.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["numerical", "newton-raphson"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "First step.",
          workingLatex: "x_{1}=1-\\frac{-1}{2}=1.5",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Second step with \\( f(1.5)=0.25 \\), \\( f'(1.5)=3 \\).",
          workingLatex: "x_{2}=1.5-\\frac{0.25}{3}=1.4167",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 1.4167 \\)",
      canonicalAnswer: "1.4167",
    },
  },
  {
    id: "em15-008",
    topicRef: "em15",
    topicTitle: "Numerical Methods 08",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Use the trapezium rule with two strips to estimate \\( \\displaystyle\\int_{0}^{2} x^{2}\\,dx \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["numerical", "trapezium rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "With \\( h=1 \\): \\( f(0)=0 \\), \\( f(1)=1 \\), \\( f(2)=4 \\).",
          workingLatex: "\\frac{1}{2}(0+2(1)+4)=\\frac{6}{2}=3",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 3 \\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "em15-009",
    topicRef: "em15",
    topicTitle: "Numerical Methods 09",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Use Simpson's rule with two strips to estimate \\( \\displaystyle\\int_{0}^{2} x^{2}\\,dx \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["numerical", "simpson"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply \\( \\frac{h}{3}(f_0+4f_1+f_2) \\) with \\( h=1 \\).",
          workingLatex: "\\frac{1}{3}(0+4(1)+4)=\\frac{8}{3}",
          explanation: "Simpson's rule is exact for quadratics.",
        },
      ],
      finalAnswer: "\\( \\dfrac{8}{3} \\)",
      canonicalAnswer: "8/3",
    },
  },
  {
    id: "em15-010",
    topicRef: "em15",
    topicTitle: "Numerical Methods 10",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Apply one Newton–Raphson step to \\( f(x)=x^{3}-5 \\) from \\( x_0=2 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["numerical", "newton-raphson"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Here \\( f(2)=3 \\), \\( f'(x)=3x^{2} \\), \\( f'(2)=12 \\).",
          workingLatex: "x_{1}=2-\\frac{3}{12}=1.75",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 1.75 \\)",
      canonicalAnswer: "1.75",
    },
  },
  {
    id: "em15-011",
    topicRef: "em15",
    topicTitle: "Numerical Methods 11",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "Carry out two bisection steps for \\( f(x)=x^{2}-2 \\) on \\( (1,2) \\); state the resulting interval.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["numerical", "bisection"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Midpoint 1.5: \\( f(1.5)=0.25>0 \\), so the root is in \\( (1,1.5) \\).",
          workingLatex: "(1,\\,1.5)",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Midpoint 1.25: \\( f(1.25)=-0.4375<0 \\), so the root is in \\( (1.25,1.5) \\).",
          workingLatex: "(1.25,\\,1.5)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( (1.25,\\,1.5) \\)",
      canonicalAnswer: "(1.25,1.5)",
    },
  },
  {
    id: "em15-012",
    topicRef: "em15",
    topicTitle: "Numerical Methods 12",
    difficulty: "Standard",
    answerType: "numeric",
    answerMeta: { requiredDp: 4 },
    questionText:
      "Apply one step of the iteration \\( x_{n+1}=\\cos x_n \\) starting from \\( x_0=0.5 \\) (radians), to 4 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["numerical", "fixed point iteration"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Evaluate \\( \\cos 0.5 \\).",
          workingLatex: "x_{1}=\\cos 0.5=0.8776",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 0.8776 \\)",
      canonicalAnswer: "0.8776",
    },
  },
  {
    id: "em15-013",
    topicRef: "em15",
    topicTitle: "Numerical Methods 13",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Apply two steps of Euler's method to \\( \\frac{dy}{dx}=x+y \\), \\( y(0)=1 \\), with \\( h=0.1 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["numerical", "euler"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "First step: \\( f(0,1)=1 \\).",
          workingLatex: "y_{1}=1+0.1(1)=1.1",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Second step: \\( f(0.1,1.1)=1.2 \\).",
          workingLatex: "y_{2}=1.1+0.1(1.2)=1.22",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 1.22 \\)",
      canonicalAnswer: "1.22",
    },
  },
  {
    id: "em15-014",
    topicRef: "em15",
    topicTitle: "Numerical Methods 14",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Use linear interpolation between \\( x=1 \\) (\\( f=-1 \\)) and \\( x=2 \\) (\\( f=3 \\)) to estimate the root.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["numerical", "linear interpolation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( x=x_0-f_0\\dfrac{x_1-x_0}{f_1-f_0} \\).",
          workingLatex: "1-(-1)\\cdot\\frac{2-1}{3-(-1)}=1+\\frac{1}{4}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Simplify.",
          workingLatex: "1.25",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 1.25 \\)",
      canonicalAnswer: "1.25",
    },
  },
  {
    id: "em15-015",
    topicRef: "em15",
    topicTitle: "Numerical Methods 15",
    difficulty: "Standard",
    answerType: "numeric",
    answerMeta: { requiredDp: 4 },
    questionText:
      "Use the trapezium rule with two strips to estimate \\( \\displaystyle\\int_{1}^{3}\\frac{1}{x}\\,dx \\), to 4 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["numerical", "trapezium rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "With \\( h=1 \\): \\( f(1)=1 \\), \\( f(2)=0.5 \\), \\( f(3)=\\tfrac{1}{3} \\).",
          workingLatex: "\\frac{1}{2}\\left(1+2(0.5)+\\tfrac{1}{3}\\right)=\\frac{1}{2}\\cdot\\frac{7}{3}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Evaluate.",
          workingLatex: "\\frac{7}{6}=1.1667",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 1.1667 \\)",
      canonicalAnswer: "1.1667",
    },
  },

  // ───────────────────────── Challenge (5) ─────────────────────────
  {
    id: "em15-016",
    topicRef: "em15",
    topicTitle: "Numerical Methods 16",
    difficulty: "Challenge",
    answerType: "numeric",
    answerMeta: { requiredDp: 4 },
    questionText:
      "Apply three Newton–Raphson steps to \\( f(x)=x^{2}-2 \\) from \\( x_0=1.5 \\), giving \\( x_3 \\) to 4 decimal places.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["numerical", "newton-raphson", "convergence"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Iterate \\( x_{n+1}=x_n-\\frac{x_n^{2}-2}{2x_n} \\).",
          workingLatex: "x_1=1.4167,\\quad x_2=1.4142157,\\quad x_3=1.4142136",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Round to 4 d.p.",
          workingLatex: "x_3\\approx 1.4142",
          explanation: "Converging quadratically to \\( \\sqrt{2} \\).",
        },
      ],
      finalAnswer: "\\( 1.4142 \\)",
      canonicalAnswer: "1.4142",
    },
  },
  {
    id: "em15-017",
    topicRef: "em15",
    topicTitle: "Numerical Methods 17",
    difficulty: "Challenge",
    answerType: "numeric",
    answerMeta: { requiredDp: 4 },
    questionText:
      "Use Simpson's rule with two strips to estimate \\( \\displaystyle\\int_{0}^{1} e^{x}\\,dx \\), to 4 decimal places.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["numerical", "simpson"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "With \\( h=0.5 \\): \\( f(0)=1 \\), \\( f(0.5)=1.6487 \\), \\( f(1)=2.7183 \\).",
          workingLatex: "\\frac{0.5}{3}\\left(1+4(1.6487)+2.7183\\right)",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Evaluate.",
          workingLatex: "\\frac{1}{6}(10.3132)=1.7189",
          explanation: "Compare with the exact value \\( e-1=1.7183 \\).",
        },
      ],
      finalAnswer: "\\( 1.7189 \\)",
      canonicalAnswer: "1.7189",
    },
  },
  {
    id: "em15-018",
    topicRef: "em15",
    topicTitle: "Numerical Methods 18",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Apply one Newton–Raphson step to \\( f(x)=x^{3}-2x-5 \\) from \\( x_0=2 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["numerical", "newton-raphson"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Here \\( f(2)=-1 \\), \\( f'(x)=3x^{2}-2 \\), \\( f'(2)=10 \\).",
          workingLatex: "x_{1}=2-\\frac{-1}{10}=2.1",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 2.1 \\)",
      canonicalAnswer: "2.1",
    },
  },
  {
    id: "em15-019",
    topicRef: "em15",
    topicTitle: "Numerical Methods 19",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Use the trapezium rule with two strips to estimate \\( \\displaystyle\\int_{0}^{\\pi}\\sin x\\,dx \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["numerical", "trapezium rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "With \\( h=\\frac{\\pi}{2} \\): \\( f(0)=0 \\), \\( f(\\tfrac{\\pi}{2})=1 \\), \\( f(\\pi)=0 \\).",
          workingLatex: "\\frac{\\pi/2}{2}\\left(0+2(1)+0\\right)=\\frac{\\pi}{4}\\cdot 2",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Simplify.",
          workingLatex: "\\frac{\\pi}{2}",
          explanation: "A poor estimate of the true value 2 (only two strips).",
        },
      ],
      finalAnswer: "\\( \\dfrac{\\pi}{2} \\)",
      canonicalAnswer: "pi/2",
    },
  },
  {
    id: "em15-020",
    topicRef: "em15",
    topicTitle: "Numerical Methods 20",
    difficulty: "Challenge",
    answerType: "numeric",
    answerMeta: { requiredDp: 3 },
    questionText:
      "Apply three steps of Euler's method to \\( \\frac{dy}{dx}=y \\), \\( y(0)=1 \\), with \\( h=0.5 \\); give \\( y(1.5) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["numerical", "euler"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Each step multiplies by \\( 1+h=1.5 \\).",
          workingLatex: "y_{1}=1.5,\\quad y_{2}=2.25,\\quad y_{3}=3.375",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "State the estimate.",
          workingLatex: "y(1.5)\\approx 3.375",
          explanation: "Underestimates the exact \\( e^{1.5}\\approx 4.482 \\).",
        },
      ],
      finalAnswer: "\\( 3.375 \\)",
      canonicalAnswer: "3.375",
    },
  },
];
