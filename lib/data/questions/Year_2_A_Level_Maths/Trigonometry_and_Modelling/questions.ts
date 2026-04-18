import { Question } from "@/lib/types";

/**
 * Chapter 7 — Trigonometry and modelling (Year 2)
 * 7.1 Addition formulae, 7.2 Using angle addition, 7.3 Double-angle formulae,
 * 7.4 Solving trig equations, 7.5 Simplifying a cos x ± b sin x, 7.6 Proving identities.
 */
export const questions: Question[] = [
  {
    id: "y2tm1-001",
    topicRef: "y2tm1",
    topicTitle: "Addition Formulae",
    difficulty: "Standard",
    questionText: "Using \\( \\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B \\), find the exact value of \\( \\sin 75^\\circ \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["addition formula", "exact values"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write 75° as a sum of familiar angles.", workingLatex: "\\sin 75^\\circ = \\sin(45^\\circ + 30^\\circ)", explanation: "" },
        { stepNumber: 2, description: "Apply the addition formula.", workingLatex: "= \\sin 45^\\circ \\cos 30^\\circ + \\cos 45^\\circ \\sin 30^\\circ", explanation: "" },
        { stepNumber: 3, description: "Substitute exact values.", workingLatex: "= \\tfrac{\\sqrt{2}}{2}\\cdot\\tfrac{\\sqrt{3}}{2} + \\tfrac{\\sqrt{2}}{2}\\cdot\\tfrac{1}{2} = \\tfrac{\\sqrt{6} + \\sqrt{2}}{4}", explanation: "" },
      ],
      finalAnswer: "\\( \\sin 75^\\circ = \\dfrac{\\sqrt{6} + \\sqrt{2}}{4} \\)",
    },
  },
  {
    id: "y2tm2-001",
    topicRef: "y2tm2",
    topicTitle: "Using the Angle Addition Formulae",
    difficulty: "Standard",
    questionText: "Show that \\( \\sin(x + \\tfrac{\\pi}{3}) = \\tfrac{1}{2}\\sin x + \\tfrac{\\sqrt{3}}{2}\\cos x \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["addition formula", "proof"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the addition formula.", workingLatex: "\\sin(x + \\tfrac{\\pi}{3}) = \\sin x\\cos\\tfrac{\\pi}{3} + \\cos x\\sin\\tfrac{\\pi}{3}", explanation: "" },
        { stepNumber: 2, description: "Substitute exact values.", workingLatex: "= \\sin x \\cdot \\tfrac{1}{2} + \\cos x \\cdot \\tfrac{\\sqrt{3}}{2}", explanation: "" },
      ],
      finalAnswer: "\\( \\sin(x + \\tfrac{\\pi}{3}) = \\tfrac{1}{2}\\sin x + \\tfrac{\\sqrt{3}}{2}\\cos x \\). \\(\\blacksquare\\)",
    },
  },
  {
    id: "y2tm3-001",
    topicRef: "y2tm3",
    topicTitle: "Double-Angle Formulae",
    difficulty: "Standard",
    questionText: "Given \\( \\sin\\theta = \\tfrac{3}{5} \\) and \\( \\theta \\) is acute, find the exact values of \\( \\sin 2\\theta \\) and \\( \\cos 2\\theta \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["double angle", "exact values"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Use \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\) to find \\( \\cos\\theta \\).", workingLatex: "\\cos\\theta = \\sqrt{1 - \\tfrac{9}{25}} = \\tfrac{4}{5}", explanation: "Positive because \\( \\theta \\) is acute." },
        { stepNumber: 2, description: "Apply \\( \\sin 2\\theta = 2\\sin\\theta\\cos\\theta \\).", workingLatex: "\\sin 2\\theta = 2 \\cdot \\tfrac{3}{5} \\cdot \\tfrac{4}{5} = \\tfrac{24}{25}", explanation: "" },
        { stepNumber: 3, description: "Apply \\( \\cos 2\\theta = 1 - 2\\sin^2\\theta \\).", workingLatex: "\\cos 2\\theta = 1 - 2 \\cdot \\tfrac{9}{25} = \\tfrac{7}{25}", explanation: "" },
      ],
      finalAnswer: "\\( \\sin 2\\theta = \\tfrac{24}{25} \\);\\; \\( \\cos 2\\theta = \\tfrac{7}{25} \\).",
    },
  },
  {
    id: "y2tm4-001",
    topicRef: "y2tm4",
    topicTitle: "Solving Trigonometric Equations",
    difficulty: "Challenge",
    questionText: "Solve \\( \\cos 2x + \\sin x = 0 \\) for \\( 0 \\le x < 2\\pi \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["trig equations", "double angle"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Use \\( \\cos 2x = 1 - 2\\sin^2 x \\) to get a quadratic in \\( \\sin x \\).", workingLatex: "1 - 2\\sin^2 x + \\sin x = 0 \\;\\Rightarrow\\; 2\\sin^2 x - \\sin x - 1 = 0", explanation: "" },
        { stepNumber: 2, description: "Factorise.", workingLatex: "(2\\sin x + 1)(\\sin x - 1) = 0", explanation: "" },
        { stepNumber: 3, description: "Solve each factor.", workingLatex: "\\sin x = -\\tfrac{1}{2} \\;\\text{or}\\; \\sin x = 1", explanation: "" },
        { stepNumber: 4, description: "Find all solutions in \\( [0, 2\\pi) \\).", workingLatex: "x = \\tfrac{\\pi}{2},\\; \\tfrac{7\\pi}{6},\\; \\tfrac{11\\pi}{6}", explanation: "" },
      ],
      finalAnswer: "\\( x = \\tfrac{\\pi}{2},\\; \\tfrac{7\\pi}{6},\\; \\tfrac{11\\pi}{6} \\)",
    },
  },
  {
    id: "y2tm5-001",
    topicRef: "y2tm5",
    topicTitle: "Simplifying a cos x ± b sin x",
    difficulty: "Standard",
    questionText: "Express \\( 3\\cos x + 4\\sin x \\) in the form \\( R\\cos(x - \\alpha) \\) where \\( R > 0 \\) and \\( 0 < \\alpha < \\tfrac{\\pi}{2} \\). Hence write down the maximum value of the expression.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["harmonic form", "R-formula"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "\\( R\\cos(x - \\alpha) = R\\cos x\\cos\\alpha + R\\sin x\\sin\\alpha \\).", workingLatex: "R\\cos\\alpha = 3,\\; R\\sin\\alpha = 4", explanation: "" },
        { stepNumber: 2, description: "Find \\( R \\) by squaring and adding.", workingLatex: "R^2 = 9 + 16 = 25 \\;\\Rightarrow\\; R = 5", explanation: "" },
        { stepNumber: 3, description: "Find \\( \\alpha \\) by dividing.", workingLatex: "\\tan\\alpha = \\tfrac{4}{3} \\;\\Rightarrow\\; \\alpha = \\arctan\\tfrac{4}{3} \\approx 0.927\\text{ rad}", explanation: "" },
        { stepNumber: 4, description: "Maximum value of \\( R\\cos(x - \\alpha) \\) is \\( R \\).", workingLatex: "\\text{max} = 5", explanation: "" },
      ],
      finalAnswer: "\\( 3\\cos x + 4\\sin x = 5\\cos(x - 0.927) \\); maximum value is 5.",
    },
  },
  {
    id: "y2tm6-001",
    topicRef: "y2tm6",
    topicTitle: "Proving Trigonometric Identities",
    difficulty: "Challenge",
    questionText: "Prove that \\( \\sin 3\\theta \\equiv 3\\sin\\theta - 4\\sin^3\\theta \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["identity", "proof", "triple angle"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write \\( 3\\theta = 2\\theta + \\theta \\) and apply the addition formula.", workingLatex: "\\sin 3\\theta = \\sin(2\\theta + \\theta) = \\sin 2\\theta\\cos\\theta + \\cos 2\\theta\\sin\\theta", explanation: "" },
        { stepNumber: 2, description: "Substitute double-angle formulae.", workingLatex: "= 2\\sin\\theta\\cos^2\\theta + (1 - 2\\sin^2\\theta)\\sin\\theta", explanation: "" },
        { stepNumber: 3, description: "Use \\( \\cos^2\\theta = 1 - \\sin^2\\theta \\).", workingLatex: "= 2\\sin\\theta(1 - \\sin^2\\theta) + \\sin\\theta - 2\\sin^3\\theta", explanation: "" },
        { stepNumber: 4, description: "Expand and collect.", workingLatex: "= 2\\sin\\theta - 2\\sin^3\\theta + \\sin\\theta - 2\\sin^3\\theta = 3\\sin\\theta - 4\\sin^3\\theta", explanation: "" },
      ],
      finalAnswer: "\\( \\sin 3\\theta \\equiv 3\\sin\\theta - 4\\sin^3\\theta \\). \\(\\blacksquare\\)",
    },
  },
];
