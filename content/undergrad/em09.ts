import { Question } from "@/lib/types";

/**
 * Topic: Second-Order Linear Differential Equations
 * Ref:   em09  (Undergraduate Engineering Mathematics)  prereq: em08
 *
 * 20 questions — 6 Foundation, 9 Standard, 5 Challenge.
 * Constant-coefficient homogeneous equations (real distinct / repeated /
 * complex roots), particular integrals (constant, exponential, polynomial,
 * trig), the resonance case, and initial-value problems.
 */
export const questions: Question[] = [
  // ───────────────────────── Foundation (6) ─────────────────────────
  {
    id: "em09-001",
    topicRef: "em09",
    topicTitle: "Second-Order ODEs 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Write down the auxiliary equation for \\( \\dfrac{d^{2}y}{dx^{2}}+5\\dfrac{dy}{dx}+6y=0 \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second-order odes", "auxiliary equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Replace \\( \\frac{d^{2}y}{dx^{2}}\\to m^{2} \\), \\( \\frac{dy}{dx}\\to m \\), \\( y\\to 1 \\).",
          workingLatex: "m^{2}+5m+6=0",
          explanation: "",
        },
      ],
      finalAnswer: "\\( m^{2}+5m+6=0 \\)",
      canonicalAnswer: "m^2+5*m+6=0",
    },
  },
  {
    id: "em09-002",
    topicRef: "em09",
    topicTitle: "Second-Order ODEs 02",
    difficulty: "Foundation",
    answerType: "set",
    questionText: "Solve the auxiliary equation \\( m^{2}+5m+6=0 \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second-order odes", "auxiliary equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise.",
          workingLatex: "(m+2)(m+3)=0",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Read off the roots.",
          workingLatex: "m=-2,\\ m=-3",
          explanation: "",
        },
      ],
      finalAnswer: "\\( m=-2,\\ -3 \\)",
      canonicalAnswer: "{-2, -3}",
    },
  },
  {
    id: "em09-003",
    topicRef: "em09",
    topicTitle: "Second-Order ODEs 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Write the general solution of a second-order equation whose auxiliary roots are \\( m=-2 \\) and \\( m=-3 \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second-order odes", "general solution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Distinct real roots give \\( y=Ae^{m_1 x}+Be^{m_2 x} \\).",
          workingLatex: "y=Ae^{-2x}+Be^{-3x}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y=Ae^{-2x}+Be^{-3x} \\)",
      canonicalAnswer: "A*e^(-2*x)+B*e^(-3*x)",
    },
  },
  {
    id: "em09-004",
    topicRef: "em09",
    topicTitle: "Second-Order ODEs 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Solve \\( \\dfrac{d^{2}y}{dx^{2}}-y=0 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second-order odes", "real roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Auxiliary equation.",
          workingLatex: "m^{2}-1=0\\ \\Rightarrow\\ m=\\pm 1",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Write the general solution.",
          workingLatex: "y=Ae^{x}+Be^{-x}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y=Ae^{x}+Be^{-x} \\)",
      canonicalAnswer: "A*e^x+B*e^(-x)",
    },
  },
  {
    id: "em09-005",
    topicRef: "em09",
    topicTitle: "Second-Order ODEs 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Solve \\( \\dfrac{d^{2}y}{dx^{2}}=0 \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second-order odes", "direct integration"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Integrate twice.",
          workingLatex: "y=Ax+B",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y=Ax+B \\)",
      canonicalAnswer: "A*x+B",
    },
  },
  {
    id: "em09-006",
    topicRef: "em09",
    topicTitle: "Second-Order ODEs 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Write the general solution when the auxiliary equation has a repeated root \\( m=2 \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second-order odes", "repeated roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "A repeated root \\( m \\) gives \\( y=(A+Bx)e^{mx} \\).",
          workingLatex: "y=(A+Bx)e^{2x}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y=(A+Bx)e^{2x} \\)",
      canonicalAnswer: "(A+B*x)*e^(2*x)",
    },
  },

  // ───────────────────────── Standard (9) ─────────────────────────
  {
    id: "em09-007",
    topicRef: "em09",
    topicTitle: "Second-Order ODEs 07",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Solve \\( \\dfrac{d^{2}y}{dx^{2}}-5\\dfrac{dy}{dx}+6y=0 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["second-order odes", "real roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Auxiliary equation.",
          workingLatex: "m^{2}-5m+6=0\\ \\Rightarrow\\ (m-2)(m-3)=0",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Distinct real roots \\( m=2,3 \\).",
          workingLatex: "y=Ae^{2x}+Be^{3x}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y=Ae^{2x}+Be^{3x} \\)",
      canonicalAnswer: "A*e^(2*x)+B*e^(3*x)",
    },
  },
  {
    id: "em09-008",
    topicRef: "em09",
    topicTitle: "Second-Order ODEs 08",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Solve \\( \\dfrac{d^{2}y}{dx^{2}}-4\\dfrac{dy}{dx}+4y=0 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["second-order odes", "repeated roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Auxiliary equation.",
          workingLatex: "m^{2}-4m+4=0\\ \\Rightarrow\\ (m-2)^{2}=0",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Repeated root \\( m=2 \\).",
          workingLatex: "y=(A+Bx)e^{2x}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y=(A+Bx)e^{2x} \\)",
      canonicalAnswer: "(A+B*x)*e^(2*x)",
    },
  },
  {
    id: "em09-009",
    topicRef: "em09",
    topicTitle: "Second-Order ODEs 09",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Solve \\( \\dfrac{d^{2}y}{dx^{2}}+4y=0 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["second-order odes", "complex roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Auxiliary equation.",
          workingLatex: "m^{2}+4=0\\ \\Rightarrow\\ m=\\pm 2i",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Purely imaginary roots \\( \\pm\\beta i \\) give sines and cosines.",
          workingLatex: "y=A\\cos 2x+B\\sin 2x",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y=A\\cos 2x+B\\sin 2x \\)",
      canonicalAnswer: "A*cos(2*x)+B*sin(2*x)",
    },
  },
  {
    id: "em09-010",
    topicRef: "em09",
    topicTitle: "Second-Order ODEs 10",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Solve \\( \\dfrac{d^{2}y}{dx^{2}}+2\\dfrac{dy}{dx}+5y=0 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["second-order odes", "complex roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Auxiliary equation; complete the quadratic formula.",
          workingLatex: "m=\\frac{-2\\pm\\sqrt{4-20}}{2}=\\frac{-2\\pm 4i}{2}=-1\\pm 2i",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Complex roots \\( \\alpha\\pm\\beta i \\) give \\( e^{\\alpha x}(A\\cos\\beta x+B\\sin\\beta x) \\).",
          workingLatex: "y=e^{-x}(A\\cos 2x+B\\sin 2x)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y=e^{-x}(A\\cos 2x+B\\sin 2x) \\)",
      canonicalAnswer: "e^(-x)*(A*cos(2*x)+B*sin(2*x))",
    },
  },
  {
    id: "em09-011",
    topicRef: "em09",
    topicTitle: "Second-Order ODEs 11",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Solve \\( \\dfrac{d^{2}y}{dx^{2}}-9y=0 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second-order odes", "real roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Auxiliary equation.",
          workingLatex: "m^{2}-9=0\\ \\Rightarrow\\ m=\\pm 3",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "General solution.",
          workingLatex: "y=Ae^{3x}+Be^{-3x}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y=Ae^{3x}+Be^{-3x} \\)",
      canonicalAnswer: "A*e^(3*x)+B*e^(-3*x)",
    },
  },
  {
    id: "em09-012",
    topicRef: "em09",
    topicTitle: "Second-Order ODEs 12",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find a particular integral of \\( \\dfrac{d^{2}y}{dx^{2}}+y=6 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second-order odes", "particular integral"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Try a constant \\( y_p=a \\), so \\( y_p''=0 \\).",
          workingLatex: "0+a=6\\ \\Rightarrow\\ a=6",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y_p=6 \\)",
      canonicalAnswer: "6",
    },
  },
  {
    id: "em09-013",
    topicRef: "em09",
    topicTitle: "Second-Order ODEs 13",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find a particular integral of \\( \\dfrac{d^{2}y}{dx^{2}}-y=e^{2x} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["second-order odes", "particular integral", "exponential"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Try \\( y_p=ae^{2x} \\), so \\( y_p''=4ae^{2x} \\).",
          workingLatex: "4ae^{2x}-ae^{2x}=e^{2x}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Match coefficients.",
          workingLatex: "3a=1\\ \\Rightarrow\\ a=\\frac{1}{3}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y_p=\\dfrac{1}{3}e^{2x} \\)",
      canonicalAnswer: "e^(2*x)/3",
    },
  },
  {
    id: "em09-014",
    topicRef: "em09",
    topicTitle: "Second-Order ODEs 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find a particular integral of \\( \\dfrac{d^{2}y}{dx^{2}}+y=x \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second-order odes", "particular integral", "polynomial"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Try \\( y_p=ax+b \\), so \\( y_p''=0 \\).",
          workingLatex: "0+(ax+b)=x\\ \\Rightarrow\\ a=1,\\ b=0",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y_p=x \\)",
      canonicalAnswer: "x",
    },
  },
  {
    id: "em09-015",
    topicRef: "em09",
    topicTitle: "Second-Order ODEs 15",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Solve \\( \\dfrac{d^{2}y}{dx^{2}}-y=0 \\) given \\( y(0)=2 \\) and \\( y'(0)=0 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["second-order odes", "initial value"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "General solution.",
          workingLatex: "y=Ae^{x}+Be^{-x}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Apply the conditions.",
          workingLatex: "A+B=2,\\qquad A-B=0\\ \\Rightarrow\\ A=B=1",
          explanation: "\\( y'(0)=A-B \\).",
        },
        {
          stepNumber: 3,
          description: "Write the particular solution.",
          workingLatex: "y=e^{x}+e^{-x}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y=e^{x}+e^{-x} \\)",
      canonicalAnswer: "e^x+e^(-x)",
    },
  },

  // ───────────────────────── Challenge (5) ─────────────────────────
  {
    id: "em09-016",
    topicRef: "em09",
    topicTitle: "Second-Order ODEs 16",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Solve \\( \\dfrac{d^{2}y}{dx^{2}}-3\\dfrac{dy}{dx}+2y=e^{3x} \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["second-order odes", "complementary function", "particular integral"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Complementary function from \\( m^{2}-3m+2=0 \\).",
          workingLatex: "m=1,2\\ \\Rightarrow\\ y_c=Ae^{x}+Be^{2x}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Try \\( y_p=ae^{3x} \\).",
          workingLatex: "(9a-9a+2a)e^{3x}=e^{3x}\\ \\Rightarrow\\ 2a=1\\ \\Rightarrow\\ a=\\frac{1}{2}",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Add complementary function and particular integral.",
          workingLatex: "y=Ae^{x}+Be^{2x}+\\frac{1}{2}e^{3x}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y=Ae^{x}+Be^{2x}+\\dfrac{1}{2}e^{3x} \\)",
      canonicalAnswer: "A*e^x+B*e^(2*x)+e^(3*x)/2",
    },
  },
  {
    id: "em09-017",
    topicRef: "em09",
    topicTitle: "Second-Order ODEs 17",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Solve \\( \\dfrac{d^{2}y}{dx^{2}}+y=\\sin 2x \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["second-order odes", "particular integral", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Complementary function: \\( m^{2}+1=0 \\).",
          workingLatex: "y_c=A\\cos x+B\\sin x",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Try \\( y_p=a\\cos 2x+b\\sin 2x \\); then \\( y_p''=-4y_p \\).",
          workingLatex: "y_p''+y_p=-3a\\cos 2x-3b\\sin 2x=\\sin 2x",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Match: \\( -3a=0 \\), \\( -3b=1 \\).",
          workingLatex: "a=0,\\ b=-\\frac{1}{3}",
          explanation: "",
        },
        {
          stepNumber: 4,
          description: "General solution.",
          workingLatex: "y=A\\cos x+B\\sin x-\\frac{1}{3}\\sin 2x",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y=A\\cos x+B\\sin x-\\dfrac{1}{3}\\sin 2x \\)",
      canonicalAnswer: "A*cos(x)+B*sin(x)-sin(2*x)/3",
    },
  },
  {
    id: "em09-018",
    topicRef: "em09",
    topicTitle: "Second-Order ODEs 18",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Solve \\( \\dfrac{d^{2}y}{dx^{2}}-y=e^{x} \\). (Note the resonance with the complementary function.)",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["second-order odes", "resonance", "particular integral"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Complementary function: \\( m=\\pm 1 \\).",
          workingLatex: "y_c=Ae^{x}+Be^{-x}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Since \\( e^{x} \\) is in \\( y_c \\), try \\( y_p=axe^{x} \\).",
          workingLatex: "y_p''=ae^{x}(x+2),\\quad y_p''-y_p=2ae^{x}",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Match: \\( 2a=1 \\).",
          workingLatex: "a=\\frac{1}{2}",
          explanation: "",
        },
        {
          stepNumber: 4,
          description: "General solution.",
          workingLatex: "y=Ae^{x}+Be^{-x}+\\frac{1}{2}xe^{x}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y=Ae^{x}+Be^{-x}+\\dfrac{1}{2}xe^{x} \\)",
      canonicalAnswer: "A*e^x+B*e^(-x)+x*e^x/2",
    },
  },
  {
    id: "em09-019",
    topicRef: "em09",
    topicTitle: "Second-Order ODEs 19",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Solve \\( \\dfrac{d^{2}y}{dx^{2}}+4y=0 \\) given \\( y(0)=3 \\) and \\( y'(0)=2 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["second-order odes", "complex roots", "initial value"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "General solution.",
          workingLatex: "y=A\\cos 2x+B\\sin 2x",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Apply \\( y(0)=3 \\).",
          workingLatex: "A=3",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Differentiate and apply \\( y'(0)=2 \\).",
          workingLatex: "y'=-2A\\sin 2x+2B\\cos 2x\\ \\Rightarrow\\ 2B=2\\ \\Rightarrow\\ B=1",
          explanation: "",
        },
        {
          stepNumber: 4,
          description: "Particular solution.",
          workingLatex: "y=3\\cos 2x+\\sin 2x",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y=3\\cos 2x+\\sin 2x \\)",
      canonicalAnswer: "3*cos(2*x)+sin(2*x)",
    },
  },
  {
    id: "em09-020",
    topicRef: "em09",
    topicTitle: "Second-Order ODEs 20",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Solve \\( \\dfrac{d^{2}y}{dx^{2}}+2\\dfrac{dy}{dx}+2y=0 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["second-order odes", "complex roots", "damping"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Auxiliary equation.",
          workingLatex: "m=\\frac{-2\\pm\\sqrt{4-8}}{2}=-1\\pm i",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Complex roots \\( -1\\pm i \\).",
          workingLatex: "y=e^{-x}(A\\cos x+B\\sin x)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y=e^{-x}(A\\cos x+B\\sin x) \\)",
      canonicalAnswer: "e^(-x)*(A*cos(x)+B*sin(x))",
    },
  },
];
