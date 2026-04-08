import { Question } from "@/lib/types";

/**
 * Topic: Momentum and Impulse
 * Ref:   FMm1
 */
export const questions: Question[] = [
  {
    id: "FMm1-001",
    topicRef: "FMm1",
    topicTitle: "Momentum and Impulse",
    difficulty: "Foundation",
    questionText:
      "A particle of mass 3 kg is moving at \\(4\\text{ ms}^{-1}\\). It collides with a stationary particle of mass 5 kg and they coalesce. Find the speed of the combined particle after the collision.",
    marks: 3,
    examStyle: true,
    yearCreated: 2024,
    tags: ["momentum", "conservation", "collision"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply conservation of momentum",
          workingLatex:
            "m_1 u_1 + m_2 u_2 = (m_1 + m_2) v",
          explanation:
            "Total momentum before equals total momentum after for a coalescence.",
        },
        {
          stepNumber: 2,
          description: "Substitute and solve",
          workingLatex:
            "3(4) + 5(0) = (3+5)v \\implies 12 = 8v \\implies v = 1.5 \\text{ ms}^{-1}",
          explanation:
            "The combined particle moves at 1.5 m/s in the original direction.",
        },
      ],
      finalAnswer: "v = 1.5 \\text{ ms}^{-1}",
    },
  },
  {
    id: "FMm5-001",
    topicRef: "FMm5",
    topicTitle: "Circular Motion",
    difficulty: "Standard",
    questionText:
      "A particle of mass 0.2 kg moves in a horizontal circle of radius 0.5 m at a constant speed of \\(3\\text{ ms}^{-1}\\). Find the centripetal force acting on the particle.",
    marks: 3,
    examStyle: false,
    yearCreated: 2024,
    tags: ["circular-motion", "centripetal-force"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the centripetal force formula",
          workingLatex:
            "F = \\frac{mv^2}{r} = \\frac{0.2 \\times 3^2}{0.5} = \\frac{0.2 \\times 9}{0.5} = \\frac{1.8}{0.5} = 3.6 \\text{ N}",
          explanation:
            "The centripetal force is directed towards the centre of the circle.",
        },
      ],
      finalAnswer: "F = 3.6 \\text{ N}",
    },
  },
];
