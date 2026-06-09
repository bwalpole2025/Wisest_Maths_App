import { Question } from "@/lib/types";

/**
 * Topic: Partial Differentiation
 * Ref:   em06  (Undergraduate Engineering Mathematics)  prereq: em04
 *
 * 20 questions — 6 Foundation, 9 Standard, 5 Challenge.
 * First-order partials, products/quotients/chains of two variables, second-order
 * and mixed partials (Clairaut), total differential, gradient, the chain rule for
 * z(t), stationary points and the Laplacian.
 */
export const questions: Question[] = [
  // ───────────────────────── Foundation (6) ─────────────────────────
  {
    id: "em06-001",
    topicRef: "em06",
    topicTitle: "Partial Differentiation 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Given \\( f(x,y)=x^{2}+y^{2} \\), find \\( \\dfrac{\\partial f}{\\partial x} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["partial differentiation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate with respect to \\( x \\), treating \\( y \\) as constant.",
          workingLatex: "\\frac{\\partial f}{\\partial x}=2x",
          explanation: "The \\( y^{2} \\) term is constant in \\( x \\).",
        },
      ],
      finalAnswer: "\\( 2x \\)",
      canonicalAnswer: "2*x",
    },
  },
  {
    id: "em06-002",
    topicRef: "em06",
    topicTitle: "Partial Differentiation 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Given \\( f(x,y)=x^{2}+y^{2} \\), find \\( \\dfrac{\\partial f}{\\partial y} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["partial differentiation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate with respect to \\( y \\), treating \\( x \\) as constant.",
          workingLatex: "\\frac{\\partial f}{\\partial y}=2y",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 2y \\)",
      canonicalAnswer: "2*y",
    },
  },
  {
    id: "em06-003",
    topicRef: "em06",
    topicTitle: "Partial Differentiation 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Given \\( f(x,y)=x^{2}y \\), find \\( \\dfrac{\\partial f}{\\partial x} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["partial differentiation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Treat \\( y \\) as a constant multiplier.",
          workingLatex: "\\frac{\\partial f}{\\partial x}=2xy",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 2xy \\)",
      canonicalAnswer: "2*x*y",
    },
  },
  {
    id: "em06-004",
    topicRef: "em06",
    topicTitle: "Partial Differentiation 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Given \\( f(x,y)=x^{2}y \\), find \\( \\dfrac{\\partial f}{\\partial y} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["partial differentiation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Treat \\( x^{2} \\) as a constant multiplier.",
          workingLatex: "\\frac{\\partial f}{\\partial y}=x^{2}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( x^{2} \\)",
      canonicalAnswer: "x^2",
    },
  },
  {
    id: "em06-005",
    topicRef: "em06",
    topicTitle: "Partial Differentiation 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Given \\( f(x,y)=3x+4y \\), find \\( \\dfrac{\\partial f}{\\partial x} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["partial differentiation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate, treating \\( y \\) as constant.",
          workingLatex: "\\frac{\\partial f}{\\partial x}=3",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 3 \\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "em06-006",
    topicRef: "em06",
    topicTitle: "Partial Differentiation 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Given \\( f(x,y)=x^{2}y^{3} \\), find \\( \\dfrac{\\partial f}{\\partial x} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["partial differentiation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Treat \\( y^{3} \\) as a constant multiplier.",
          workingLatex: "\\frac{\\partial f}{\\partial x}=2xy^{3}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 2xy^{3} \\)",
      canonicalAnswer: "2*x*y^3",
    },
  },

  // ───────────────────────── Standard (9) ─────────────────────────
  {
    id: "em06-007",
    topicRef: "em06",
    topicTitle: "Partial Differentiation 07",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Given \\( f(x,y)=x^{2}y^{3} \\), find \\( \\dfrac{\\partial f}{\\partial y} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["partial differentiation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Treat \\( x^{2} \\) as constant; differentiate \\( y^{3} \\).",
          workingLatex: "\\frac{\\partial f}{\\partial y}=3x^{2}y^{2}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 3x^{2}y^{2} \\)",
      canonicalAnswer: "3*x^2*y^2",
    },
  },
  {
    id: "em06-008",
    topicRef: "em06",
    topicTitle: "Partial Differentiation 08",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Given \\( f(x,y)=\\sin(xy) \\), find \\( \\dfrac{\\partial f}{\\partial x} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["partial differentiation", "chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Chain rule; the inside derivative w.r.t. \\( x \\) is \\( y \\).",
          workingLatex: "\\frac{\\partial f}{\\partial x}=y\\cos(xy)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y\\cos(xy) \\)",
      canonicalAnswer: "y*cos(x*y)",
    },
  },
  {
    id: "em06-009",
    topicRef: "em06",
    topicTitle: "Partial Differentiation 09",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Given \\( f(x,y)=e^{xy} \\), find \\( \\dfrac{\\partial f}{\\partial y} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["partial differentiation", "chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Chain rule; the inside derivative w.r.t. \\( y \\) is \\( x \\).",
          workingLatex: "\\frac{\\partial f}{\\partial y}=x\\,e^{xy}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( x\\,e^{xy} \\)",
      canonicalAnswer: "x*e^(x*y)",
    },
  },
  {
    id: "em06-010",
    topicRef: "em06",
    topicTitle: "Partial Differentiation 10",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Given \\( f(x,y)=x^{3}y^{2} \\), find \\( \\dfrac{\\partial^{2} f}{\\partial x^{2}} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["partial differentiation", "second order"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "First partial in \\( x \\).",
          workingLatex: "\\frac{\\partial f}{\\partial x}=3x^{2}y^{2}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Differentiate again in \\( x \\).",
          workingLatex: "\\frac{\\partial^{2} f}{\\partial x^{2}}=6xy^{2}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 6xy^{2} \\)",
      canonicalAnswer: "6*x*y^2",
    },
  },
  {
    id: "em06-011",
    topicRef: "em06",
    topicTitle: "Partial Differentiation 11",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Given \\( f(x,y)=x^{2}y^{3} \\), find the mixed partial \\( \\dfrac{\\partial^{2} f}{\\partial x\\,\\partial y} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["partial differentiation", "mixed partial", "clairaut"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate first in \\( y \\).",
          workingLatex: "\\frac{\\partial f}{\\partial y}=3x^{2}y^{2}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Then in \\( x \\).",
          workingLatex: "\\frac{\\partial^{2} f}{\\partial x\\,\\partial y}=6xy^{2}",
          explanation: "By Clairaut's theorem the order does not matter.",
        },
      ],
      finalAnswer: "\\( 6xy^{2} \\)",
      canonicalAnswer: "6*x*y^2",
    },
  },
  {
    id: "em06-012",
    topicRef: "em06",
    topicTitle: "Partial Differentiation 12",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Given \\( f(x,y)=\\dfrac{x}{y} \\), find \\( \\dfrac{\\partial f}{\\partial y} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["partial differentiation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write as \\( xy^{-1} \\) and differentiate in \\( y \\).",
          workingLatex: "\\frac{\\partial f}{\\partial y}=-xy^{-2}=-\\frac{x}{y^{2}}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( -\\dfrac{x}{y^{2}} \\)",
      canonicalAnswer: "-x/y^2",
    },
  },
  {
    id: "em06-013",
    topicRef: "em06",
    topicTitle: "Partial Differentiation 13",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Given \\( f(x,y)=\\ln(x^{2}+y^{2}) \\), find \\( \\dfrac{\\partial f}{\\partial x} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["partial differentiation", "chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Chain rule: \\( \\frac{\\partial}{\\partial x}\\ln u=\\frac{u_x}{u} \\).",
          workingLatex: "\\frac{\\partial f}{\\partial x}=\\frac{2x}{x^{2}+y^{2}}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{2x}{x^{2}+y^{2}} \\)",
      canonicalAnswer: "2*x/(x^2+y^2)",
    },
  },
  {
    id: "em06-014",
    topicRef: "em06",
    topicTitle: "Partial Differentiation 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the total differential \\( df \\) of \\( f(x,y)=x^{2}+y^{2} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["partial differentiation", "total differential"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( df=f_x\\,dx+f_y\\,dy \\).",
          workingLatex: "df=2x\\,dx+2y\\,dy",
          explanation: "",
        },
      ],
      finalAnswer: "\\( df=2x\\,dx+2y\\,dy \\)",
      canonicalAnswer: "2*x*dx + 2*y*dy",
    },
  },
  {
    id: "em06-015",
    topicRef: "em06",
    topicTitle: "Partial Differentiation 15",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Given \\( f(x,y)=x^{2}+3xy+y^{2} \\), find \\( \\dfrac{\\partial f}{\\partial y} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["partial differentiation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate in \\( y \\), treating \\( x \\) as constant.",
          workingLatex: "\\frac{\\partial f}{\\partial y}=3x+2y",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 3x+2y \\)",
      canonicalAnswer: "3*x+2*y",
    },
  },

  // ───────────────────────── Challenge (5) ─────────────────────────
  {
    id: "em06-016",
    topicRef: "em06",
    topicTitle: "Partial Differentiation 16",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Given \\( f(x,y)=x^{3}+3xy^{2}+y^{3} \\), find the mixed partial \\( \\dfrac{\\partial^{2} f}{\\partial x\\,\\partial y} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["partial differentiation", "mixed partial"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "First partial in \\( y \\).",
          workingLatex: "\\frac{\\partial f}{\\partial y}=6xy+3y^{2}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Then in \\( x \\).",
          workingLatex: "\\frac{\\partial^{2} f}{\\partial x\\,\\partial y}=6y",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 6y \\)",
      canonicalAnswer: "6*y",
    },
  },
  {
    id: "em06-017",
    topicRef: "em06",
    topicTitle: "Partial Differentiation 17",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the gradient \\( \\nabla f \\) of \\( f(x,y,z)=x^{2}+y^{2}+z^{2} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["partial differentiation", "gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Collect the three first-order partials.",
          workingLatex: "\\nabla f=\\left(\\frac{\\partial f}{\\partial x},\\frac{\\partial f}{\\partial y},\\frac{\\partial f}{\\partial z}\\right)=(2x,\\,2y,\\,2z)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\nabla f=2x\\,\\mathbf{i}+2y\\,\\mathbf{j}+2z\\,\\mathbf{k} \\)",
      canonicalAnswer: "(2*x,2*y,2*z)",
    },
  },
  {
    id: "em06-018",
    topicRef: "em06",
    topicTitle: "Partial Differentiation 18",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the stationary point of \\( f(x,y)=x^{2}+y^{2}-4x-6y+13 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["partial differentiation", "stationary points"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set both first-order partials to zero.",
          workingLatex: "\\frac{\\partial f}{\\partial x}=2x-4=0,\\qquad \\frac{\\partial f}{\\partial y}=2y-6=0",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Solve.",
          workingLatex: "x=2,\\qquad y=3",
          explanation: "",
        },
      ],
      finalAnswer: "\\( (2,\\,3) \\)",
      canonicalAnswer: "(2,3)",
    },
  },
  {
    id: "em06-019",
    topicRef: "em06",
    topicTitle: "Partial Differentiation 19",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Given \\( z=x^{2}+y^{2} \\) with \\( x=t \\) and \\( y=t^{2} \\), find \\( \\dfrac{dz}{dt} \\) using the chain rule.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["partial differentiation", "chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply \\( \\frac{dz}{dt}=\\frac{\\partial z}{\\partial x}\\frac{dx}{dt}+\\frac{\\partial z}{\\partial y}\\frac{dy}{dt} \\).",
          workingLatex: "\\frac{dz}{dt}=2x\\cdot 1+2y\\cdot 2t",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Substitute \\( x=t \\), \\( y=t^{2} \\).",
          workingLatex: "2t+2(t^{2})(2t)=2t+4t^{3}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 2t+4t^{3} \\)",
      canonicalAnswer: "2*t+4*t^3",
    },
  },
  {
    id: "em06-020",
    topicRef: "em06",
    topicTitle: "Partial Differentiation 20",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Show that \\( f(x,y)=x^{3}-3xy^{2} \\) satisfies Laplace's equation by evaluating \\( \\dfrac{\\partial^{2} f}{\\partial x^{2}}+\\dfrac{\\partial^{2} f}{\\partial y^{2}} \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["partial differentiation", "laplacian", "second order"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Second partial in \\( x \\).",
          workingLatex: "\\frac{\\partial f}{\\partial x}=3x^{2}-3y^{2}\\ \\Rightarrow\\ \\frac{\\partial^{2} f}{\\partial x^{2}}=6x",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Second partial in \\( y \\).",
          workingLatex: "\\frac{\\partial f}{\\partial y}=-6xy\\ \\Rightarrow\\ \\frac{\\partial^{2} f}{\\partial y^{2}}=-6x",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Add.",
          workingLatex: "6x+(-6x)=0",
          explanation: "Laplace's equation is satisfied, so \\( f \\) is harmonic.",
        },
      ],
      finalAnswer: "\\( 0 \\)",
      canonicalAnswer: "0",
    },
  },
];
