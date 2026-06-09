import { Question } from "@/lib/types";

/**
 * Topic: Laplace Transforms
 * Ref:   em10  (Undergraduate Engineering Mathematics)  prereq: em09
 *
 * 20 questions — 6 Foundation, 9 Standard, 5 Challenge.
 * Standard transforms, linearity, the first shift theorem, transforms of
 * derivatives, inverse transforms (incl. partial fractions), and solving
 * initial-value problems with the Laplace method.
 */
export const questions: Question[] = [
  // ───────────────────────── Foundation (6) ─────────────────────────
  {
    id: "em10-001",
    topicRef: "em10",
    topicTitle: "Laplace Transforms 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find \\( \\mathcal{L}\\{1\\} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["laplace", "standard transform"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Standard transform.",
          workingLatex: "\\mathcal{L}\\{1\\}=\\frac{1}{s}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{1}{s} \\)",
      canonicalAnswer: "1/s",
    },
  },
  {
    id: "em10-002",
    topicRef: "em10",
    topicTitle: "Laplace Transforms 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find \\( \\mathcal{L}\\{t\\} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["laplace", "standard transform"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Standard transform \\( \\mathcal{L}\\{t^{n}\\}=\\frac{n!}{s^{n+1}} \\) with \\( n=1 \\).",
          workingLatex: "\\mathcal{L}\\{t\\}=\\frac{1}{s^{2}}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{1}{s^{2}} \\)",
      canonicalAnswer: "1/s^2",
    },
  },
  {
    id: "em10-003",
    topicRef: "em10",
    topicTitle: "Laplace Transforms 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find \\( \\mathcal{L}\\{e^{3t}\\} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["laplace", "standard transform"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( \\mathcal{L}\\{e^{at}\\}=\\frac{1}{s-a} \\).",
          workingLatex: "\\mathcal{L}\\{e^{3t}\\}=\\frac{1}{s-3}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{1}{s-3} \\)",
      canonicalAnswer: "1/(s-3)",
    },
  },
  {
    id: "em10-004",
    topicRef: "em10",
    topicTitle: "Laplace Transforms 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find \\( \\mathcal{L}\\{\\sin 2t\\} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["laplace", "standard transform", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( \\mathcal{L}\\{\\sin at\\}=\\frac{a}{s^{2}+a^{2}} \\).",
          workingLatex: "\\mathcal{L}\\{\\sin 2t\\}=\\frac{2}{s^{2}+4}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{2}{s^{2}+4} \\)",
      canonicalAnswer: "2/(s^2+4)",
    },
  },
  {
    id: "em10-005",
    topicRef: "em10",
    topicTitle: "Laplace Transforms 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find \\( \\mathcal{L}\\{\\cos 3t\\} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["laplace", "standard transform", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( \\mathcal{L}\\{\\cos at\\}=\\frac{s}{s^{2}+a^{2}} \\).",
          workingLatex: "\\mathcal{L}\\{\\cos 3t\\}=\\frac{s}{s^{2}+9}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{s}{s^{2}+9} \\)",
      canonicalAnswer: "s/(s^2+9)",
    },
  },
  {
    id: "em10-006",
    topicRef: "em10",
    topicTitle: "Laplace Transforms 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find \\( \\mathcal{L}\\{t^{2}\\} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["laplace", "standard transform"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( \\mathcal{L}\\{t^{n}\\}=\\frac{n!}{s^{n+1}} \\) with \\( n=2 \\).",
          workingLatex: "\\mathcal{L}\\{t^{2}\\}=\\frac{2}{s^{3}}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{2}{s^{3}} \\)",
      canonicalAnswer: "2/s^3",
    },
  },

  // ───────────────────────── Standard (9) ─────────────────────────
  {
    id: "em10-007",
    topicRef: "em10",
    topicTitle: "Laplace Transforms 07",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( \\mathcal{L}\\{3t+2\\} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["laplace", "linearity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply linearity to each term.",
          workingLatex: "3\\cdot\\frac{1}{s^{2}}+2\\cdot\\frac{1}{s}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Write the result.",
          workingLatex: "\\frac{3}{s^{2}}+\\frac{2}{s}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{3}{s^{2}}+\\dfrac{2}{s} \\)",
      canonicalAnswer: "3/s^2 + 2/s",
    },
  },
  {
    id: "em10-008",
    topicRef: "em10",
    topicTitle: "Laplace Transforms 08",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( \\mathcal{L}\\{t^{3}\\} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["laplace", "standard transform"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( \\mathcal{L}\\{t^{n}\\}=\\frac{n!}{s^{n+1}} \\) with \\( n=3 \\).",
          workingLatex: "\\frac{3!}{s^{4}}=\\frac{6}{s^{4}}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{6}{s^{4}} \\)",
      canonicalAnswer: "6/s^4",
    },
  },
  {
    id: "em10-009",
    topicRef: "em10",
    topicTitle: "Laplace Transforms 09",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Use the first shift theorem to find \\( \\mathcal{L}\\{t\\,e^{2t}\\} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laplace", "first shift theorem"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from \\( \\mathcal{L}\\{t\\}=\\frac{1}{s^{2}} \\).",
          workingLatex: "\\mathcal{L}\\{t\\}=\\frac{1}{s^{2}}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "First shift theorem: \\( e^{at} \\) replaces \\( s \\) by \\( s-a \\).",
          workingLatex: "\\mathcal{L}\\{te^{2t}\\}=\\frac{1}{(s-2)^{2}}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{1}{(s-2)^{2}} \\)",
      canonicalAnswer: "1/(s-2)^2",
    },
  },
  {
    id: "em10-010",
    topicRef: "em10",
    topicTitle: "Laplace Transforms 10",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Use the first shift theorem to find \\( \\mathcal{L}\\{e^{-t}\\sin 2t\\} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laplace", "first shift theorem", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from \\( \\mathcal{L}\\{\\sin 2t\\}=\\frac{2}{s^{2}+4} \\).",
          workingLatex: "\\mathcal{L}\\{\\sin 2t\\}=\\frac{2}{s^{2}+4}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Replace \\( s \\) by \\( s+1 \\) for the factor \\( e^{-t} \\).",
          workingLatex: "\\mathcal{L}\\{e^{-t}\\sin 2t\\}=\\frac{2}{(s+1)^{2}+4}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{2}{(s+1)^{2}+4} \\)",
      canonicalAnswer: "2/((s+1)^2+4)",
    },
  },
  {
    id: "em10-011",
    topicRef: "em10",
    topicTitle: "Laplace Transforms 11",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( \\mathcal{L}^{-1}\\!\\left\\{\\dfrac{1}{s-3}\\right\\} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["laplace", "inverse"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the standard form \\( \\frac{1}{s-a}\\to e^{at} \\).",
          workingLatex: "e^{3t}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( e^{3t} \\)",
      canonicalAnswer: "e^(3*t)",
    },
  },
  {
    id: "em10-012",
    topicRef: "em10",
    topicTitle: "Laplace Transforms 12",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( \\mathcal{L}^{-1}\\!\\left\\{\\dfrac{2}{s^{2}+4}\\right\\} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["laplace", "inverse", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise \\( \\frac{a}{s^{2}+a^{2}}\\to\\sin at \\) with \\( a=2 \\).",
          workingLatex: "\\sin 2t",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\sin 2t \\)",
      canonicalAnswer: "sin(2*t)",
    },
  },
  {
    id: "em10-013",
    topicRef: "em10",
    topicTitle: "Laplace Transforms 13",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( \\mathcal{L}^{-1}\\!\\left\\{\\dfrac{1}{s^{2}}\\right\\} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["laplace", "inverse"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Standard inverse.",
          workingLatex: "t",
          explanation: "",
        },
      ],
      finalAnswer: "\\( t \\)",
      canonicalAnswer: "t",
    },
  },
  {
    id: "em10-014",
    topicRef: "em10",
    topicTitle: "Laplace Transforms 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find \\( \\mathcal{L}^{-1}\\!\\left\\{\\dfrac{1}{(s-1)(s-2)}\\right\\} \\) using partial fractions.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laplace", "inverse", "partial fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Decompose.",
          workingLatex: "\\frac{1}{(s-1)(s-2)}=\\frac{-1}{s-1}+\\frac{1}{s-2}",
          explanation: "Cover-up gives \\( A=-1 \\), \\( B=1 \\).",
        },
        {
          stepNumber: 2,
          description: "Invert each term.",
          workingLatex: "-e^{t}+e^{2t}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( e^{2t}-e^{t} \\)",
      canonicalAnswer: "e^(2*t)-e^t",
    },
  },
  {
    id: "em10-015",
    topicRef: "em10",
    topicTitle: "Laplace Transforms 15",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A function \\( y(t) \\) has \\( y(0)=2 \\). Write \\( \\mathcal{L}\\{y'\\} \\) in terms of \\( Y=\\mathcal{L}\\{y\\} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["laplace", "transform of derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( \\mathcal{L}\\{y'\\}=sY-y(0) \\).",
          workingLatex: "\\mathcal{L}\\{y'\\}=sY-2",
          explanation: "",
        },
      ],
      finalAnswer: "\\( sY-2 \\)",
      canonicalAnswer: "s*Y-2",
    },
  },

  // ───────────────────────── Challenge (5) ─────────────────────────
  {
    id: "em10-016",
    topicRef: "em10",
    topicTitle: "Laplace Transforms 16",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Use Laplace transforms to solve \\( y'+y=0 \\) with \\( y(0)=3 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laplace", "initial value"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Transform, using \\( \\mathcal{L}\\{y'\\}=sY-y(0) \\).",
          workingLatex: "sY-3+Y=0",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Solve for \\( Y \\).",
          workingLatex: "Y(s+1)=3\\ \\Rightarrow\\ Y=\\frac{3}{s+1}",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Invert.",
          workingLatex: "y=3e^{-t}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y=3e^{-t} \\)",
      canonicalAnswer: "3*e^(-t)",
    },
  },
  {
    id: "em10-017",
    topicRef: "em10",
    topicTitle: "Laplace Transforms 17",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Use Laplace transforms to solve \\( y''+y=0 \\) with \\( y(0)=0 \\), \\( y'(0)=1 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laplace", "initial value", "second order"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Transform, using \\( \\mathcal{L}\\{y''\\}=s^{2}Y-sy(0)-y'(0) \\).",
          workingLatex: "s^{2}Y-1+Y=0",
          explanation: "The \\( sy(0) \\) term vanishes.",
        },
        {
          stepNumber: 2,
          description: "Solve for \\( Y \\).",
          workingLatex: "Y=\\frac{1}{s^{2}+1}",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Invert.",
          workingLatex: "y=\\sin t",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y=\\sin t \\)",
      canonicalAnswer: "sin(t)",
    },
  },
  {
    id: "em10-018",
    topicRef: "em10",
    topicTitle: "Laplace Transforms 18",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find \\( \\mathcal{L}^{-1}\\!\\left\\{\\dfrac{1}{s^{2}(s+1)}\\right\\} \\) using partial fractions.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laplace", "inverse", "partial fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Decompose with a repeated factor.",
          workingLatex: "\\frac{1}{s^{2}(s+1)}=\\frac{-1}{s}+\\frac{1}{s^{2}}+\\frac{1}{s+1}",
          explanation: "Matching \\( 1=As(s+1)+B(s+1)+Cs^{2} \\) gives \\( B=1,\\ C=1,\\ A=-1 \\).",
        },
        {
          stepNumber: 2,
          description: "Invert each term.",
          workingLatex: "-1+t+e^{-t}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( t-1+e^{-t} \\)",
      canonicalAnswer: "t-1+e^(-t)",
    },
  },
  {
    id: "em10-019",
    topicRef: "em10",
    topicTitle: "Laplace Transforms 19",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Use Laplace transforms to solve \\( y''-y=0 \\) with \\( y(0)=1 \\), \\( y'(0)=0 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laplace", "initial value", "second order"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Transform.",
          workingLatex: "s^{2}Y-s-Y=0",
          explanation: "\\( \\mathcal{L}\\{y''\\}=s^{2}Y-s(1)-0 \\).",
        },
        {
          stepNumber: 2,
          description: "Solve for \\( Y \\).",
          workingLatex: "Y=\\frac{s}{s^{2}-1}",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Invert (standard form for \\( \\cosh \\)).",
          workingLatex: "y=\\cosh t",
          explanation: "Equivalently \\( \\tfrac{1}{2}(e^{t}+e^{-t}) \\).",
        },
      ],
      finalAnswer: "\\( y=\\cosh t \\)",
      canonicalAnswer: "cosh(t)",
    },
  },
  {
    id: "em10-020",
    topicRef: "em10",
    topicTitle: "Laplace Transforms 20",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Use Laplace transforms to solve \\( y'+2y=e^{-t} \\) with \\( y(0)=0 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laplace", "initial value", "partial fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Transform.",
          workingLatex: "sY+2Y=\\frac{1}{s+1}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Solve for \\( Y \\) and decompose.",
          workingLatex: "Y=\\frac{1}{(s+1)(s+2)}=\\frac{1}{s+1}-\\frac{1}{s+2}",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Invert.",
          workingLatex: "y=e^{-t}-e^{-2t}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( y=e^{-t}-e^{-2t} \\)",
      canonicalAnswer: "e^(-t)-e^(-2*t)",
    },
  },
];
