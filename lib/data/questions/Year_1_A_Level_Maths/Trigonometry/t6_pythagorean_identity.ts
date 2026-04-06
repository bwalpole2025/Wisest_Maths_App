import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    id: "t6-001",
    topicRef: "t6",
    topicTitle: "The Pythagorean Identity",
    difficulty: "Standard",
    questionText:
      "Given that \\(\\sin\\theta = \\tfrac{3}{5}\\) and \\(\\theta\\) is obtuse, find the exact values of \\(\\cos\\theta\\) and \\(\\tan\\theta\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2024,
    tags: ["trigonometry", "pythagorean-identity", "exact-values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply the Pythagorean identity",
          workingLatex:
            "\\sin^2\\theta + \\cos^2\\theta = 1 \\implies \\cos^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}",
          explanation:
            "Substitute the given value of sin \u03b8 into the identity and solve for cos\u00b2 \u03b8.",
        },
        {
          stepNumber: 2,
          description: "Determine the sign of cos \u03b8",
          workingLatex:
            "\\cos\\theta = \\pm\\frac{4}{5} \\qquad \\theta \\text{ is obtuse} \\implies \\cos\\theta = -\\frac{4}{5}",
          explanation:
            "In the second quadrant (90\u00b0 < \u03b8 < 180\u00b0) cosine is negative.",
        },
        {
          stepNumber: 3,
          description: "Find tan \u03b8 using the identity tan = sin / cos",
          workingLatex:
            "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{3/5}{-4/5} = -\\frac{3}{4}",
          explanation:
            "Divide sin \u03b8 by cos \u03b8. The result is negative since sin is positive and cos is negative in the second quadrant.",
        },
      ],
      finalAnswer:
        "\\cos\\theta = -\\tfrac{4}{5}, \\qquad \\tan\\theta = -\\tfrac{3}{4}",
      commonMistakes: [
        "Forgetting to consider the sign of cos \u03b8 when \u03b8 is obtuse.",
        "Writing cos \u03b8 = 4/5 (positive) instead of \u22124/5.",
      ],
    },
  },
];
