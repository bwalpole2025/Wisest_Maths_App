import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Curve Sketching
 * Ref:   cg5
 */
export const lesson: Lesson = {
  topicRef: "cg5",
  title: "Curve Sketching",
  intro:
    "A good sketch needs only a few facts: the overall shape, where the curve meets the axes, and how it behaves at each root. Here you'll learn to extract all of them from the equation.",
  cards: [
    {
      id: "cg5-c1",
      title: "Shape from the power",
      concept:
        "For a single power \\(y = kx^n\\), the shape depends on whether \\(n\\) is even or odd and the sign of \\(k\\). Even powers give a U or n shape (both ends point the same way); odd powers run from one corner to the opposite (bottom-left to top-right when \\(k > 0\\)). A negative \\(k\\) flips the curve vertically.",
      miniQuestion: {
        prompt:
          "Does \\(y = -2x^4\\) open upward (U-shape) or downward (n-shape)?",
        expectedAnswer: "downward",
        options: ["upward", "downward", "to the right", "it is a straight line"],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Even power gives a U or n; the negative coefficient flips it to an n-shape opening downward.",
        hints: [
          "Power \\(4\\) is even, so both ends go the same way.",
          "The negative sign on \\(k\\) flips the curve over.",
        ],
      },
    },
    {
      id: "cg5-c2",
      title: "Where it crosses the y-axis",
      concept:
        "The \\(y\\)-intercept is found by setting \\(x = 0\\). For a factorised cubic like \\(y = (x + 1)(x - 3)(x - 5)\\), substitute \\(x = 0\\) into every factor: \\(y = (1)(-3)(-5) = 15\\). So the curve passes through \\((0, 15)\\).",
      miniQuestion: {
        prompt:
          "Find the \\(y\\)-intercept of \\(y = (x + 1)(x - 3)(x - 5)\\).",
        expectedAnswer: "\\(15\\)",
        options: ["\\(-15\\)", "\\(15\\)", "\\(9\\)", "\\(-1\\)"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "Setting \\(x = 0\\) gives \\((1)(-3)(-5) = 15\\). Two negatives multiply to a positive, so the intercept is \\(+15\\).",
        hints: [
          "Put \\(x = 0\\) into each bracket.",
          "Multiply \\(1 \\times (-3) \\times (-5)\\), watching the signs.",
        ],
      },
    },
    {
      id: "cg5-c3",
      title: "Where it crosses the x-axis",
      concept:
        "The \\(x\\)-intercepts (roots) are found by setting \\(y = 0\\) and solving each factor. For \\(y = x(x - 2)(x + 3)\\), the factors vanish at \\(x = 0\\), \\(x = 2\\) and \\(x = -3\\). Three distinct factors give three points where the curve crosses the \\(x\\)-axis.",
      miniQuestion: {
        prompt: "List the \\(x\\)-intercepts of \\(y = x(x - 2)(x + 3)\\).",
        expectedAnswer: "\\(x = -3,\\ 0,\\ 2\\)",
        options: ["\\(x = -2,\\ 0,\\ 3\\)", "\\(x = 2,\\ 3\\)", "\\(x = -3,\\ 0,\\ 2\\)", "\\(x = 0,\\ 2,\\ 3\\)"],
        correctIndex: 2,
        answerType: "set",
        insight:
          "Each factor set to zero gives a root: \\(x = 0\\), \\(x - 2 = 0 \\Rightarrow x = 2\\), \\(x + 3 = 0 \\Rightarrow x = -3\\). The sign flips inside the bracket.",
        hints: [
          "Set \\(y = 0\\); a product is zero when any factor is zero.",
          "Solve \\(x = 0\\), \\(x - 2 = 0\\), \\(x + 3 = 0\\) separately.",
        ],
      },
    },
    {
      id: "cg5-c4",
      title: "Repeated roots touch the axis",
      concept:
        "A repeated (double) factor changes the behaviour at that root: instead of crossing, the curve touches the \\(x\\)-axis and turns back. For \\(y = x^2(x - 3)\\), the factor \\(x^2\\) gives a double root at \\(x = 0\\) (touch) while \\(x - 3\\) gives a single root at \\(x = 3\\) (cross).",
      miniQuestion: {
        prompt:
          "At which \\(x\\)-value does the curve \\(y = x^2(x - 3)\\) touch the \\(x\\)-axis rather than cross it?",
        expectedAnswer: "\\(x = 0\\)",
        options: ["\\(x = 3\\)", "\\(x = -3\\)", "\\(x = 2\\)", "\\(x = 0\\)"],
        correctIndex: 3,
        answerType: "numeric",
        insight:
          "The squared factor \\(x^2\\) is a double root, so the curve touches at \\(x = 0\\); the single factor \\(x - 3\\) crosses at \\(x = 3\\).",
        hints: [
          "Which factor is repeated (squared)?",
          "A double root means the curve touches and turns, rather than crossing.",
        ],
      },
    },
  ],
};
