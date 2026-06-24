import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: The Discriminant
 * Ref:   qc5
 */
export const lesson: Lesson = {
  topicRef: "qc5",
  title: "The Discriminant",
  intro:
    "The discriminant \\(b^2 - 4ac\\) is the part of the quadratic formula hiding under the square root. Its sign alone tells you how many real roots a quadratic has — without solving anything.",
  cards: [
    {
      id: "qc5-c1",
      title: "What the discriminant is",
      concept:
        "For \\(ax^2 + bx + c = 0\\), the discriminant is \\(\\Delta = b^2 - 4ac\\). It is exactly the expression under the root in \\(x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\). Compute it by reading off \\(a\\), \\(b\\), \\(c\\) and substituting carefully.",
      miniQuestion: {
        prompt: "Find the discriminant of \\(x^2 + 3x + 2 = 0\\).",
        expectedAnswer: "1",
        options: ["17", "1", "-1", "5"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "With \\(a=1, b=3, c=2\\): \\(b^2 - 4ac = 9 - 8 = 1\\). The discriminant is a single number you get straight from the coefficients.",
        hints: [
          "Identify \\(a=1\\), \\(b=3\\), \\(c=2\\).",
          "Substitute into \\(b^2 - 4ac = 3^2 - 4(1)(2)\\).",
        ],
      },
    },
    {
      id: "qc5-c2",
      title: "Reading the number of roots from its sign",
      concept:
        "The sign decides everything. If \\(\\Delta > 0\\) there are two distinct real roots; if \\(\\Delta = 0\\) there is one repeated root; if \\(\\Delta < 0\\) there are no real roots (the root of a negative is not real).",
      miniQuestion: {
        prompt: "How many real roots does a quadratic with discriminant \\(-16\\) have?",
        expectedAnswer: "0",
        options: ["2", "1", "0", "-16"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "A negative discriminant means \\(\\sqrt{b^2 - 4ac}\\) is not real, so there are no real roots. The curve never crosses the \\(x\\)-axis.",
        hints: [
          "Look at the sign of the discriminant.",
          "Negative under the root means no real solutions.",
        ],
      },
    },
    {
      id: "qc5-c3",
      title: "The repeated-root condition",
      concept:
        "A repeated (equal) root happens exactly when \\(\\Delta = 0\\), i.e. \\(b^2 - 4ac = 0\\). Setting the discriminant to zero gives an equation you can solve for an unknown coefficient — for example finding \\(c\\) so that \\(x^2 + 6x + c\\) has equal roots.",
      miniQuestion: {
        prompt: "For \\(x^2 + 6x + c = 0\\) to have a repeated root, what is \\(c\\)?",
        expectedAnswer: "9",
        options: ["36", "6", "3", "9"],
        correctIndex: 3,
        answerType: "numeric",
        insight:
          "Equal roots need \\(b^2 - 4ac = 0\\): \\(36 - 4c = 0\\), so \\(c = 9\\). Setting the discriminant to zero turns a shape condition into a solvable equation.",
        hints: [
          "Equal roots means \\(b^2 - 4ac = 0\\).",
          "Solve \\(6^2 - 4(1)c = 0\\).",
        ],
      },
    },
    {
      id: "qc5-c4",
      title: "Finding a range for an unknown",
      concept:
        "When a coefficient \\(k\\) is unknown, an inequality on the discriminant gives a range. 'Two distinct real roots' means \\(b^2 - 4ac > 0\\); 'no real roots' means \\(b^2 - 4ac < 0\\). Form the discriminant in terms of \\(k\\) and solve the inequality.",
      miniQuestion: {
        prompt: "For \\(x^2 + kx + 9 = 0\\) to have no real roots, find the range of \\(k\\).",
        expectedAnswer: "\\(-6 < k < 6\\)",
        options: [
          "\\(k < -6 \\text{ or } k > 6\\)",
          "\\(-6 < k < 6\\)",
          "\\(-3 < k < 3\\)",
          "\\(-6 \\le k \\le 6\\)",
        ],
        correctIndex: 1,
        answerType: "interval",
        insight:
          "No real roots needs \\(b^2 - 4ac < 0\\): \\(k^2 - 36 < 0\\), so \\(k^2 < 36\\), giving \\(-6 < k < 6\\). The discriminant inequality directly bounds \\(k\\).",
        hints: [
          "No real roots means \\(b^2 - 4ac < 0\\).",
          "Solve \\(k^2 - 36 < 0\\), i.e. \\(k^2 < 36\\).",
        ],
      },
    },
  ],
};
