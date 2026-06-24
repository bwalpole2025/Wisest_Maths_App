import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Line Segments
 * Ref:   CG2
 */
export const lesson: Lesson = {
  topicRef: "CG2",
  title: "Line Segments",
  intro:
    "A line segment between two points has a midpoint and a length. Both come from simple coordinate arithmetic — once you handle negative coordinates carefully.",
  cards: [
    {
      id: "CG2-c1",
      title: "The midpoint is an average",
      concept:
        "The midpoint of a segment is the point exactly halfway along it. You average the two \\(x\\)-coordinates and, separately, the two \\(y\\)-coordinates: \\(M = \\left(\\dfrac{x_1 + x_2}{2}, \\dfrac{y_1 + y_2}{2}\\right)\\). For \\((-2, 4)\\) and \\((4, 12)\\): \\(M = \\left(\\dfrac{-2 + 4}{2}, \\dfrac{4 + 12}{2}\\right) = (1, 8)\\).",
      miniQuestion: {
        prompt: "Find the midpoint of the segment from \\((3, -5)\\) to \\((-3, 3)\\).",
        expectedAnswer: "\\((0, -1)\\)",
        options: ["\\((0, -1)\\)", "\\((0, 1)\\)", "\\((-1, 0)\\)", "\\((6, -8)\\)"],
        correctIndex: 0,
        answerType: "expression",
        insight:
          "\\(\\dfrac{3 + (-3)}{2} = 0\\) and \\(\\dfrac{-5 + 3}{2} = -1\\), giving \\((0, -1)\\). Averaging each coordinate separately is all there is to it.",
        hints: [
          "Average the \\(x\\)-values, then average the \\(y\\)-values.",
          "Take care: \\(3 + (-3) = 0\\) and \\(-5 + 3 = -2\\).",
        ],
      },
    },
    {
      id: "CG2-c2",
      title: "Length by Pythagoras",
      concept:
        "The length of a segment is the straight-line distance: \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\). This is just Pythagoras on the horizontal and vertical gaps. For \\((-2, 4)\\) to \\((4, 12)\\): \\(d = \\sqrt{(4 - (-2))^2 + (12 - 4)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\).",
      miniQuestion: {
        prompt:
          "Find the horizontal gap \\(x_2 - x_1\\) for the points \\((-2, 4)\\) and \\((4, 12)\\).",
        expectedAnswer: "\\(6\\)",
        options: ["\\(2\\)", "\\(6\\)", "\\(-6\\)", "\\(-2\\)"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "\\(4 - (-2) = 4 + 2 = 6\\), not \\(2\\). The double negative is the classic trap — subtracting a negative adds.",
        hints: [
          "Compute \\(x_2 - x_1 = 4 - (-2)\\).",
          "Subtracting a negative is the same as adding.",
        ],
      },
    },
    {
      id: "CG2-c3",
      title: "Squaring kills the sign",
      concept:
        "Inside the distance formula every difference is squared, so it never matters which point you call first — \\((x_2 - x_1)^2\\) equals \\((x_1 - x_2)^2\\). A negative gap and a positive gap of the same size give the same square. This is why distance is always positive.",
      miniQuestion: {
        prompt: "What is \\((-6)^2\\)?",
        expectedAnswer: "\\(36\\)",
        options: ["\\(-12\\)", "\\(-36\\)", "\\(36\\)", "\\(12\\)"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "\\((-6)^2 = 36\\). Squaring a negative gives a positive, so the order you subtract the coordinates in can never change the length.",
        hints: [
          "A negative number times itself is…?",
          "\\((-6) \\times (-6) = 36\\).",
        ],
      },
    },
    {
      id: "CG2-c4",
      title: "Putting it together",
      concept:
        "To find a length: square each gap, add, then square-root. For \\((3, -5)\\) to \\((-3, 3)\\) the gaps are \\(-3 - 3 = -6\\) and \\(3 - (-5) = 8\\), giving \\(d = \\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\).",
      miniQuestion: {
        prompt:
          "Find the exact length of the segment from \\((3, -5)\\) to \\((-3, 3)\\).",
        expectedAnswer: "\\(10\\)",
        options: ["\\(\\sqrt{28}\\)", "\\(14\\)", "\\(2\\)", "\\(10\\)"],
        correctIndex: 3,
        answerType: "exactValue",
        insight:
          "\\(\\sqrt{36 + 64} = \\sqrt{100} = 10\\). The gaps \\(6\\) and \\(8\\) form a 6–8–10 right triangle, a scaled 3–4–5.",
        hints: [
          "Find both gaps: \\(-3 - 3\\) and \\(3 - (-5)\\).",
          "Square each, add, then take the square root of \\(36 + 64\\).",
        ],
      },
    },
  ],
};
