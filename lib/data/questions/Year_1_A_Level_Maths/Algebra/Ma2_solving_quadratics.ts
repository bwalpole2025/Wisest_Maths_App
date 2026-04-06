import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    id: "Ma2-001",
    topicRef: "Ma2",
    topicTitle: "Solving Quadratic Equations",
    difficulty: "Foundation",
    questionText:
      "Solve \\(3x^2 + 7x - 6 = 0\\), giving your answers as exact fractions.",
    marks: 3,
    examStyle: false,
    yearCreated: 2024,
    tags: ["quadratics", "quadratic-formula", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b and c then apply the quadratic formula",
          workingLatex:
            "a = 3,\; b = 7,\; c = -6 \\qquad x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
          explanation:
            "Since the quadratic does not factorise easily by inspection, use the formula.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the discriminant",
          workingLatex:
            "b^2 - 4ac = 49 + 72 = 121 \\qquad \\sqrt{121} = 11",
          explanation:
            "A positive discriminant confirms two distinct real roots.",
        },
        {
          stepNumber: 3,
          description: "Compute both roots",
          workingLatex:
            "x = \\frac{-7 + 11}{6} = \\frac{2}{3} \\qquad x = \\frac{-7 - 11}{6} = -3",
          explanation:
            "Substitute back and simplify each fraction.",
        },
      ],
      finalAnswer: "x = \\tfrac{2}{3} \\quad \\text{or} \\quad x = -3",
      commonMistakes: [
        "Sign errors when computing b\u00b2 \u2212 4ac (forgetting that c is negative).",
        "Dividing by 2 instead of 2a = 6.",
      ],
    },
  },
];
