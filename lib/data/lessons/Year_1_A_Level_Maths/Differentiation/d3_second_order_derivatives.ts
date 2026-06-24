import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Second Order Derivatives
 * Ref:   d3
 */
export const lesson: Lesson = {
  topicRef: "d3",
  title: "Second Order Derivatives",
  intro:
    "The first derivative gives the gradient. Differentiate again and you get the second derivative — the rate at which the gradient itself is changing. This is the tool that tells a maximum apart from a minimum.",
  cards: [
    {
      id: "d3-c1",
      title: "Differentiating twice",
      concept:
        "The second derivative is just the derivative of the derivative. Differentiate \\(y\\) once to get \\(\\frac{dy}{dx}\\), then differentiate that to get \\(\\frac{d^2y}{dx^2}\\) (or \\(f''(x)\\)). For \\(y = x^4\\): \\(\\frac{dy}{dx} = 4x^3\\), then \\(\\frac{d^2y}{dx^2} = 12x^2\\).",
      miniQuestion: {
        prompt: "Find \\(\\frac{d^2y}{dx^2}\\) when \\(y = 5x^3 - 2x\\).",
        expectedAnswer: "\\(30x\\)",
        options: ["\\(15x^2 - 2\\)", "\\(30x\\)", "\\(30x - 2\\)", "\\(30x^2\\)"],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "First \\(\\frac{dy}{dx} = 15x^2 - 2\\); differentiating again the constant \\(-2\\) vanishes, leaving \\(\\frac{d^2y}{dx^2} = 30x\\). You simply apply the power rule a second time.",
        hints: [
          "Differentiate once to get \\(15x^2 - 2\\).",
          "Now differentiate \\(15x^2 - 2\\); a constant differentiates to \\(0\\).",
        ],
      },
    },
    {
      id: "d3-c2",
      title: "What it measures",
      concept:
        "If \\(\\frac{dy}{dx}\\) is the rate of change of \\(y\\), then \\(\\frac{d^2y}{dx^2}\\) is the rate of change of the gradient — how fast the slope is changing. Geometrically it measures concavity: \\(\\frac{d^2y}{dx^2} > 0\\) means the curve bends upward (concave up), \\(\\frac{d^2y}{dx^2} < 0\\) means it bends downward (concave down).",
      miniQuestion: {
        prompt:
          "For \\(y = x^3 - 5x\\), \\(\\frac{d^2y}{dx^2} = 6x\\). Find its value at \\(x = 2\\) and say whether the curve is concave up or concave down there.",
        expectedAnswer: "\\(12\\), concave up",
        options: [
          "\\(12\\), concave down",
          "\\(8\\), concave up",
          "\\(12\\), concave up",
          "\\(6\\), concave up",
        ],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "At \\(x = 2\\), \\(\\frac{d^2y}{dx^2} = 6(2) = 12 > 0\\), so the curve is concave up. A positive second derivative means the gradient is increasing — the curve is bending upward like a valley.",
        hints: [
          "Substitute \\(x = 2\\) into \\(6x\\).",
          "A positive second derivative means concave up.",
        ],
      },
    },
    {
      id: "d3-c3",
      title: "The second derivative test",
      concept:
        "At a stationary point (\\(\\frac{dy}{dx} = 0\\)), the sign of \\(\\frac{d^2y}{dx^2}\\) reveals its nature. Concave up (\\(\\frac{d^2y}{dx^2} > 0\\)) is a local minimum — the curve sits in a valley. Concave down (\\(\\frac{d^2y}{dx^2} < 0\\)) is a local maximum — the curve sits on a hill.",
      miniQuestion: {
        prompt:
          "A stationary point has \\(\\frac{d^2y}{dx^2} = -6\\) there. Is it a local maximum or a local minimum?",
        expectedAnswer: "Local maximum",
        options: [
          "Local minimum",
          "Local maximum",
          "Point of inflection",
          "Cannot be determined",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "A negative second derivative means concave down — the curve arches over the top, so the stationary point is a local maximum. Negative for a maximum, positive for a minimum.",
        hints: [
          "Negative second derivative means concave down.",
          "Concave down at a stationary point is the top of a hill.",
        ],
      },
    },
    {
      id: "d3-c4",
      title: "Classifying a stationary point",
      concept:
        "Combine the two derivatives: find where \\(\\frac{dy}{dx} = 0\\) to locate stationary points, then test each with \\(\\frac{d^2y}{dx^2}\\). For \\(y = x^2 - 8x + 3\\): \\(\\frac{dy}{dx} = 2x - 8 = 0\\) gives \\(x = 4\\), and \\(\\frac{d^2y}{dx^2} = 2 > 0\\), so it is a minimum.",
      miniQuestion: {
        prompt:
          "For \\(y = x^3 - 12x\\), one stationary point is at \\(x = 2\\). Given \\(\\frac{d^2y}{dx^2} = 6x\\), classify it.",
        expectedAnswer: "Local minimum",
        options: [
          "Local maximum",
          "Point of inflection",
          "Local minimum",
          "Saddle point",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "At \\(x = 2\\), \\(\\frac{d^2y}{dx^2} = 6(2) = 12 > 0\\), so it is a local minimum. The second derivative test does in one substitution what a sign table does in several.",
        hints: [
          "Evaluate \\(6x\\) at \\(x = 2\\).",
          "Positive value at a stationary point means a minimum.",
        ],
      },
    },
    {
      id: "d3-c5",
      title: "When the test fails",
      concept:
        "If \\(\\frac{d^2y}{dx^2} = 0\\) at a stationary point, the test is inconclusive — the point could be a maximum, a minimum, or a point of inflection. You must fall back on checking the sign of \\(\\frac{dy}{dx}\\) on each side. For \\(y = x^3\\) at \\(x = 0\\), \\(\\frac{d^2y}{dx^2} = 0\\), and the gradient stays positive either side: a stationary point of inflection.",
      miniQuestion: {
        prompt:
          "At a stationary point of \\(y = x^3\\), \\(\\frac{d^2y}{dx^2} = 0\\). The gradient is positive on both sides. What kind of stationary point is it?",
        expectedAnswer: "Stationary point of inflection",
        options: [
          "Local maximum",
          "Local minimum",
          "Stationary point of inflection",
          "Discontinuity",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "When \\(\\frac{d^2y}{dx^2} = 0\\) the test says nothing, so you check the gradient either side. Here it does not change sign — positive both sides — so the curve flattens then continues: a point of inflection, not a turning point.",
        hints: [
          "A second derivative of \\(0\\) makes the test inconclusive.",
          "If the gradient does not change sign, it is not a max or min.",
        ],
      },
    },
  ],
};
