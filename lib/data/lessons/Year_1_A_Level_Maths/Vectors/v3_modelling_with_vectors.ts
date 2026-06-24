import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Modelling with Vectors
 * Ref:   v3
 */
export const lesson: Lesson = {
  topicRef: "v3",
  title: "Modelling with Vectors",
  intro:
    "Velocity, force and displacement are all vectors. This lesson applies vector skills to real situations — finding speed and bearing, predicting displacement over time, and combining forces into a resultant.",
  cards: [
    {
      id: "v3-c1",
      title: "Speed is the magnitude of velocity",
      concept:
        "When velocity is modelled as \\(\\mathbf{v} = x\\mathbf{i} + y\\mathbf{j}\\), the \\emph{speed} is just its magnitude, \\(|\\mathbf{v}| = \\sqrt{x^2 + y^2}\\), and it carries velocity's units. The same Pythagoras idea gives the magnitude of an acceleration or a force vector. Direction (a bearing or an angle) is reported separately.",
      miniQuestion: {
        prompt:
          "A drone has velocity \\(\\mathbf{v} = -5\\mathbf{i} + 12\\mathbf{j}\\) (ms\\(^{-1}\\)). Find its speed.",
        expectedAnswer: "\\(13\\) ms\\(^{-1}\\)",
        options: [
          "\\(7\\) ms\\(^{-1}\\)",
          "\\(13\\) ms\\(^{-1}\\)",
          "\\(17\\) ms\\(^{-1}\\)",
          "\\(169\\) ms\\(^{-1}\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Speed \\(= |\\mathbf{v}| = \\sqrt{(-5)^2 + 12^2} = \\sqrt{169} = 13\\) ms\\(^{-1}\\). The negative \\(\\mathbf{i}\\)-component squares away — a \\((5,12,13)\\) triple.",
        hints: [
          "Speed is the magnitude of the velocity vector.",
          "Use \\(\\sqrt{x^2 + y^2}\\); the minus sign disappears once squared.",
        ],
      },
    },
    {
      id: "v3-c2",
      title: "Bearings from components",
      concept:
        "With \\(\\mathbf{i}\\) due east and \\(\\mathbf{j}\\) due north, a bearing is measured \\emph{clockwise from north} as a three-figure angle. Find the acute angle to the north line, then place it by quadrant. A vector pointing north-west (negative \\(\\mathbf{i}\\), positive \\(\\mathbf{j}\\)) has a bearing of \\(360° - \\alpha\\), where \\(\\alpha = \\tan^{-1}\\!\\left(\\tfrac{|x|}{|y|}\\right)\\).",
      miniQuestion: {
        prompt:
          "For \\(\\mathbf{v} = -5\\mathbf{i} + 12\\mathbf{j}\\), the angle west of north is \\(22.6°\\). What is the bearing, to the nearest degree?",
        expectedAnswer: "\\(337°\\)",
        options: [
          "\\(023°\\)",
          "\\(203°\\)",
          "\\(337°\\)",
          "\\(157°\\)",
        ],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "Pointing north-west, the bearing is \\(360° - 22.6° = 337.4° \\approx 337°\\). Bearings sweep clockwise from north, so a north-west direction sits just short of a full turn.",
        hints: [
          "The drone heads north and west, so the bearing is between \\(270°\\) and \\(360°\\).",
          "Subtract the angle west of north from \\(360°\\).",
        ],
      },
    },
    {
      id: "v3-c3",
      title: "Displacement = velocity × time",
      concept:
        "For constant velocity \\(\\mathbf{v}\\), the displacement after time \\(t\\) is \\(\\mathbf{s} = \\mathbf{v}\\,t\\) — scalar multiplication scales each component. If a position vector \\(\\mathbf{r}_0\\) is given, the new position is \\(\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{v}\\,t\\). The direction is unchanged; only the length grows with \\(t\\).",
      miniQuestion: {
        prompt:
          "A particle moves with constant velocity \\(\\mathbf{v} = 3\\mathbf{i} - 2\\mathbf{j}\\) (ms\\(^{-1}\\)). Find its displacement after \\(4\\) seconds.",
        expectedAnswer: "\\(12\\mathbf{i} - 8\\mathbf{j}\\)",
        options: [
          "\\(12\\mathbf{i} - 8\\mathbf{j}\\)",
          "\\(7\\mathbf{i} + 2\\mathbf{j}\\)",
          "\\(12\\mathbf{i} + 8\\mathbf{j}\\)",
          "\\(-8\\mathbf{i} + 12\\mathbf{j}\\)",
        ],
        correctIndex: 0,
        answerType: "expression",
        insight:
          "\\(\\mathbf{s} = \\mathbf{v}\\,t = 4(3\\mathbf{i} - 2\\mathbf{j}) = 12\\mathbf{i} - 8\\mathbf{j}\\). Multiplying by the scalar \\(t\\) stretches the vector without turning it.",
        hints: [
          "Displacement is velocity times time.",
          "Multiply each component of \\(\\mathbf{v}\\) by \\(4\\).",
        ],
      },
    },
    {
      id: "v3-c4",
      title: "Resultant of forces in components",
      concept:
        "Several forces acting on a body combine into a single \\textbf{resultant} by adding them component-wise: \\(\\mathbf{R} = \\mathbf{F}_1 + \\mathbf{F}_2 + \\cdots\\). Add all the \\(\\mathbf{i}\\)-parts, add all the \\(\\mathbf{j}\\)-parts, then take \\(|\\mathbf{R}|\\) for the size of the net force and its direction angle for where it points.",
      miniQuestion: {
        prompt:
          "Two forces \\(\\mathbf{F}_1 = 3\\mathbf{i} + 5\\mathbf{j}\\) and \\(\\mathbf{F}_2 = 4\\mathbf{i} - 2\\mathbf{j}\\) (N) act on a body. Find the resultant \\(\\mathbf{R}\\).",
        expectedAnswer: "\\(7\\mathbf{i} + 3\\mathbf{j}\\)",
        options: [
          "\\(7\\mathbf{i} + 7\\mathbf{j}\\)",
          "\\(-1\\mathbf{i} + 7\\mathbf{j}\\)",
          "\\(7\\mathbf{i} + 3\\mathbf{j}\\)",
          "\\(3\\mathbf{i} + 7\\mathbf{j}\\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "Add component-wise: \\((3+4)\\mathbf{i} + (5-2)\\mathbf{j} = 7\\mathbf{i} + 3\\mathbf{j}\\). The resultant is the single force that would have the same effect as both together.",
        hints: [
          "Add the \\(\\mathbf{i}\\)-components, then the \\(\\mathbf{j}\\)-components.",
          "\\((3 + 4)\\mathbf{i} + (5 - 2)\\mathbf{j}\\).",
        ],
      },
    },
    {
      id: "v3-c5",
      title: "Resultant by the cosine rule",
      concept:
        "When two forces are given by their magnitudes and the angle between them rather than components, build a tip-to-tail triangle. If the angle between the forces is \\(40°\\), the triangle's interior angle opposite the resultant is its supplement \\(180° - 40° = 140°\\). Then apply the cosine rule \\(|\\mathbf{R}|^2 = a^2 + b^2 - 2ab\\cos C\\).",
      miniQuestion: {
        prompt:
          "Forces of \\(8\\) kN and \\(15\\) kN act with \\(40°\\) between them. What interior angle goes into the cosine rule for the resultant?",
        expectedAnswer: "\\(140°\\)",
        options: [
          "\\(40°\\)",
          "\\(140°\\)",
          "\\(50°\\)",
          "\\(220°\\)",
        ],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "Laying the second force tip-to-tail rotates it, so the included angle becomes the supplement: \\(180° - 40° = 140°\\). Using \\(40°\\) directly is the classic mistake — it would give the difference of the forces, not their resultant.",
        hints: [
          "In a tip-to-tail triangle the angle between the forces becomes its supplement.",
          "\\(180° - 40°\\).",
        ],
      },
    },
  ],
};
