import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Derivatives and Graphs
 * Ref:   d4
 */
export const lesson: Lesson = {
  topicRef: "d4",
  title: "Derivatives and Graphs",
  intro:
    "The derivative is the bridge between an equation and the shape of its graph. With it you can locate the peaks and valleys, say where a curve rises or falls, and sketch a curve you have never seen before.",
  cards: [
    {
      id: "d4-c1",
      title: "Stationary points",
      concept:
        "A stationary point is where the tangent is horizontal — the curve momentarily stops rising or falling. There the gradient is zero, so you find stationary points by solving \\(\\frac{dy}{dx} = 0\\). For \\(y = x^2 - 10x + 3\\), \\(\\frac{dy}{dx} = 2x - 10\\), and setting it to zero gives \\(x = 5\\).",
      miniQuestion: {
        prompt:
          "Find the \\(x\\)-coordinate of the stationary point of \\(y = x^2 - 6x + 1\\).",
        expectedAnswer: "\\(x = 3\\)",
        options: ["\\(x = 6\\)", "\\(x = 3\\)", "\\(x = -3\\)", "\\(x = 2\\)"],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "\\(\\frac{dy}{dx} = 2x - 6\\); setting \\(2x - 6 = 0\\) gives \\(x = 3\\). Every stationary point begins by solving \\(\\frac{dy}{dx} = 0\\) — that is the one condition that pins down where the curve turns.",
        hints: [
          "Differentiate to get \\(2x - 6\\).",
          "Set the derivative equal to \\(0\\) and solve.",
        ],
      },
    },
    {
      id: "d4-c2",
      title: "Maximum or minimum?",
      concept:
        "Knowing where a stationary point is does not tell you whether it is a peak or a valley. One way to decide is the sign of \\(\\frac{dy}{dx}\\) on each side. If the gradient goes positive \\(\\to 0 \\to\\) negative, the curve rose then fell: a maximum. Negative \\(\\to 0 \\to\\) positive is a minimum. (The second derivative gives a faster test.)",
      miniQuestion: {
        prompt:
          "Just left of a stationary point \\(\\frac{dy}{dx} > 0\\), and just right \\(\\frac{dy}{dx} < 0\\). Is it a maximum or a minimum?",
        expectedAnswer: "Local maximum",
        options: [
          "Local minimum",
          "Point of inflection",
          "Local maximum",
          "Not a stationary point",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "Rising then falling means the curve climbed to a peak: a local maximum. The gradient sign change from \\(+\\) to \\(-\\) is the signature of a maximum.",
        hints: [
          "Positive gradient means the curve is rising; negative means falling.",
          "Rising then falling traces out a peak.",
        ],
      },
    },
    {
      id: "d4-c3",
      title: "Increasing and decreasing",
      concept:
        "Between stationary points the sign of \\(\\frac{dy}{dx}\\) describes the whole curve. Where \\(\\frac{dy}{dx} > 0\\) the function is increasing; where \\(\\frac{dy}{dx} < 0\\) it is decreasing. To find an interval, solve the inequality. For \\(y = x^2 - 6x + 5\\), \\(\\frac{dy}{dx} = 2x - 6 > 0\\) gives \\(x > 3\\).",
      miniQuestion: {
        prompt:
          "For what values of \\(x\\) is \\(y = x^2 + 4x - 3\\) decreasing?",
        expectedAnswer: "\\(x < -2\\)",
        options: ["\\(x > -2\\)", "\\(x < 2\\)", "\\(x < -2\\)", "\\(x < 4\\)"],
        correctIndex: 2,
        answerType: "interval",
        insight:
          "\\(\\frac{dy}{dx} = 2x + 4\\); decreasing means \\(2x + 4 < 0\\), so \\(x < -2\\). The function falls until the stationary point at \\(x = -2\\), then rises — the inequality captures exactly that left-hand branch.",
        hints: [
          "Decreasing means \\(\\frac{dy}{dx} < 0\\).",
          "Solve \\(2x + 4 < 0\\).",
        ],
      },
    },
    {
      id: "d4-c4",
      title: "Where a curve meets the axes",
      concept:
        "To sketch a curve you also need its intercepts. The \\(y\\)-intercept is found by setting \\(x = 0\\). The \\(x\\)-intercepts (roots) are found by setting \\(y = 0\\) and factorising. For \\(y = x^3 - 3x^2 = x^2(x - 3)\\), the curve crosses the \\(x\\)-axis where \\(x^2(x-3) = 0\\).",
      miniQuestion: {
        prompt:
          "Find the \\(x\\)-coordinates where \\(y = x^3 - 4x\\) crosses the \\(x\\)-axis.",
        expectedAnswer: "\\(x = 0,\\ 2,\\ -2\\)",
        options: [
          "\\(x = 2,\\ -2\\)",
          "\\(x = 0,\\ 4,\\ -4\\)",
          "\\(x = 0,\\ 2,\\ -2\\)",
          "\\(x = 0,\\ 2\\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "Factorise: \\(x^3 - 4x = x(x^2 - 4) = x(x-2)(x+2)\\), so the roots are \\(x = 0, 2, -2\\). Always pull out a common factor first — it exposes the roots without the quadratic formula.",
        hints: [
          "Set \\(y = 0\\) and take out a factor of \\(x\\).",
          "\\(x^2 - 4\\) is a difference of two squares.",
        ],
      },
    },
    {
      id: "d4-c5",
      title: "Putting a sketch together",
      concept:
        "A good sketch combines everything: the intercepts (where it crosses the axes), the stationary points (with their nature), and the overall shape set by the leading term. For a positive cubic the curve sweeps up from bottom-left to top-right, turning at most twice in between.",
      miniQuestion: {
        prompt:
          "The curve \\(y = x^3 - 3x^2\\) has stationary points at \\(x = 0\\) (maximum) and \\(x = 2\\) (minimum). What are the coordinates of the minimum?",
        expectedAnswer: "\\((2, -4)\\)",
        options: ["\\((2, 4)\\)", "\\((2, -4)\\)", "\\((2, -2)\\)", "\\((2, 8)\\)"],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "At \\(x = 2\\), \\(y = 2^3 - 3(2^2) = 8 - 12 = -4\\), so the minimum is \\((2, -4)\\). A labelled sketch needs the \\(y\\)-value too — always substitute the stationary \\(x\\) back into the original equation.",
        hints: [
          "Substitute \\(x = 2\\) into \\(y = x^3 - 3x^2\\).",
          "\\(2^3 = 8\\) and \\(3 \\times 2^2 = 12\\).",
        ],
      },
    },
  ],
};
