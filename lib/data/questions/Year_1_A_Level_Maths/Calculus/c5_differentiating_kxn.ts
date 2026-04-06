import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    id: "c5-001",
    topicRef: "c5",
    topicTitle: "Differentiating kx\u207f",
    difficulty: "Standard",
    questionText:
      "Find the stationary points of \\(y = 2x^3 - 3x^2 - 12x + 5\\) and determine their nature.",
    marks: 6,
    examStyle: true,
    yearCreated: 2024,
    tags: ["differentiation", "stationary-points", "second-derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate to find the gradient function",
          workingLatex: "\\frac{dy}{dx} = 6x^2 - 6x - 12",
          explanation:
            "Apply the power rule to each term: multiply by the power and reduce it by one.",
        },
        {
          stepNumber: 2,
          description: "Set the derivative equal to zero and solve",
          workingLatex:
            "6x^2 - 6x - 12 = 0 \\implies x^2 - x - 2 = 0 \\implies (x - 2)(x + 1) = 0",
          explanation:
            "At stationary points the gradient is zero. Divide through by 6 and factorise the resulting quadratic.",
        },
        {
          stepNumber: 3,
          description: "Find the y-coordinates of each stationary point",
          workingLatex:
            "x = 2:\; y = 16 - 12 - 24 + 5 = -15 \\qquad x = -1:\; y = -2 - 3 + 12 + 5 = 12",
          explanation:
            "Substitute each x-value back into the original equation to find the corresponding y-coordinate.",
        },
        {
          stepNumber: 4,
          description: "Use the second derivative to classify each point",
          workingLatex:
            "\\frac{d^{2}y}{dx^{2}} = 12x - 6 \\qquad x=2:\;18>0\;(\\text{min}) \\qquad x=-1:\;-18<0\;(\\text{max})",
          explanation:
            "If the second derivative is positive the point is a minimum; if negative it is a maximum.",
        },
      ],
      finalAnswer:
        "\\text{Maximum at }(-1,\\,12),\\quad \\text{minimum at }(2,\\,-15)",
      commonMistakes: [
        "Forgetting to find both x and y coordinates of each stationary point.",
        "Confusing the sign convention for the second-derivative test.",
        "Arithmetic errors when substituting back into the cubic.",
      ],
    },
  },
];
