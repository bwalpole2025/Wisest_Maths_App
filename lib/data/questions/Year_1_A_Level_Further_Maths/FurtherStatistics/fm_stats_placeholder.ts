import { Question } from "@/lib/types";

/**
 * Topic: Discrete Random Variables
 * Ref:   FMs1
 */
export const questions: Question[] = [
  {
    id: "FMs1-001",
    topicRef: "FMs1",
    topicTitle: "Discrete Random Variables",
    difficulty: "Foundation",
    questionText:
      "A discrete random variable \\(X\\) has the probability distribution shown:\n\\(P(X=1)=0.2\\), \\(P(X=2)=0.3\\), \\(P(X=3)=0.5\\).\nFind \\(E(X)\\) and \\(\\text{Var}(X)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2024,
    tags: ["expectation", "variance", "discrete-distribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Calculate E(X)",
          workingLatex:
            "E(X) = \\sum x \\cdot P(X=x) = 1(0.2) + 2(0.3) + 3(0.5) = 0.2 + 0.6 + 1.5 = 2.3",
          explanation:
            "The expectation is the sum of each value multiplied by its probability.",
        },
        {
          stepNumber: 2,
          description: "Calculate E(X\u00b2)",
          workingLatex:
            "E(X^2) = 1^2(0.2) + 2^2(0.3) + 3^2(0.5) = 0.2 + 1.2 + 4.5 = 5.9",
          explanation:
            "We need E(X\u00b2) to find the variance.",
        },
        {
          stepNumber: 3,
          description: "Calculate Var(X)",
          workingLatex:
            "\\text{Var}(X) = E(X^2) - [E(X)]^2 = 5.9 - 2.3^2 = 5.9 - 5.29 = 0.61",
          explanation:
            "Use the formula Var(X) = E(X\u00b2) - \u03bc\u00b2.",
        },
      ],
      finalAnswer: "E(X) = 2.3, \\quad \\text{Var}(X) = 0.61",
    },
  },
  {
    id: "FMs2-001",
    topicRef: "FMs2",
    topicTitle: "The Poisson Distribution",
    difficulty: "Standard",
    questionText:
      "The number of errors on a page of a manuscript follows a Poisson distribution with mean 1.5. Find the probability that a randomly selected page contains exactly 2 errors.",
    marks: 3,
    examStyle: true,
    yearCreated: 2024,
    tags: ["poisson", "probability"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply the Poisson formula",
          workingLatex:
            "P(X=2) = \\frac{e^{-\\lambda} \\lambda^2}{2!} = \\frac{e^{-1.5} \\times 1.5^2}{2} = \\frac{e^{-1.5} \\times 2.25}{2}",
          explanation:
            "Use the Poisson probability formula with \\lambda = 1.5 and x = 2.",
        },
        {
          stepNumber: 2,
          description: "Evaluate",
          workingLatex:
            "P(X=2) = \\frac{0.22313 \\times 2.25}{2} = \\frac{0.50204}{2} = 0.251 \\text{ (3 s.f.)}",
          explanation:
            "Calculate e^{-1.5} \\approx 0.22313 and substitute.",
        },
      ],
      finalAnswer: "P(X=2) = 0.251 \\text{ (3 s.f.)}",
    },
  },
];
