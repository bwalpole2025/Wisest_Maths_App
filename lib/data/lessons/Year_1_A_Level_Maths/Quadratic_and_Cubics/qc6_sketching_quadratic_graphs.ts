import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Sketching Quadratic Graphs
 * Ref:   qc6
 */
export const lesson: Lesson = {
  topicRef: "qc6",
  title: "Sketching Quadratic Graphs",
  intro:
    "A good sketch of a quadratic needs only a few key features: which way it opens, where it crosses the axes, and its turning point. Each comes straight from the algebra you already know.",
  cards: [
    {
      id: "qc6-c1",
      title: "Which way does it open?",
      concept:
        "The sign of the \\(x^2\\) coefficient sets the shape. If \\(a > 0\\) the parabola opens upward (a U with a minimum). If \\(a < 0\\) it opens downward (an n with a maximum). This is the first thing to decide.",
      miniQuestion: {
        prompt: "Does \\(y = -x^2 + 4x - 1\\) have a maximum or a minimum?",
        expectedAnswer: "maximum",
        options: ["minimum", "maximum", "neither", "both"],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "The \\(x^2\\) coefficient is \\(-1 < 0\\), so the parabola opens downward and has a maximum turning point.",
        hints: [
          "Look only at the sign of the \\(x^2\\) coefficient.",
          "Negative coefficient means the curve opens downward.",
        ],
      },
    },
    {
      id: "qc6-c2",
      title: "Where it crosses the axes",
      concept:
        "The \\(y\\)-intercept is found by setting \\(x = 0\\): it is just the constant term \\(c\\). The \\(x\\)-intercepts (roots) come from setting \\(y = 0\\) and factorising. For \\(y = x^2 - 2x - 3\\), the roots solve \\(x^2 - 2x - 3 = 0\\).",
      miniQuestion: {
        prompt: "Find the roots of \\(y = x^2 - 2x - 3\\).",
        expectedAnswer: "\\(x = -1\\) or \\(x = 3\\)",
        options: [
          "\\(x = 1\\) or \\(x = -3\\)",
          "\\(x = -1\\) or \\(x = 3\\)",
          "\\(x = 1\\) or \\(x = 3\\)",
          "\\(x = -1\\) or \\(x = -3\\)",
        ],
        correctIndex: 1,
        answerType: "equationRoots",
        insight:
          "\\(x^2 - 2x - 3 = (x+1)(x-3) = 0\\), so the curve cuts the \\(x\\)-axis at \\(x = -1\\) and \\(x = 3\\). The \\(y\\)-intercept here is \\((0,-3)\\).",
        hints: [
          "Set \\(y = 0\\) and factorise.",
          "Find two numbers multiplying to \\(-3\\), adding to \\(-2\\).",
        ],
      },
    },
    {
      id: "qc6-c3",
      title: "The turning point",
      concept:
        "Completing the square to \\((x+p)^2 + q\\) reveals the turning point at \\((-p, q)\\). Alternatively, the line of symmetry sits halfway between the roots, and its \\(x\\)-value put back into \\(y\\) gives the turning point's height.",
      miniQuestion: {
        prompt: "The roots of \\(y = x^2 - 2x - 3\\) are \\(-1\\) and \\(3\\). What is the \\(x\\)-coordinate of the turning point?",
        expectedAnswer: "1",
        options: ["2", "1", "-1", "-4"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "The turning point lies on the line of symmetry, midway between the roots: \\(\\tfrac{-1 + 3}{2} = 1\\). Substituting \\(x=1\\) gives \\(y = -4\\), so the minimum is \\((1,-4)\\).",
        hints: [
          "The turning point is exactly halfway between the two roots.",
          "Average the roots: \\(\\tfrac{-1+3}{2}\\).",
        ],
      },
    },
    {
      id: "qc6-c4",
      title: "Putting the sketch together",
      concept:
        "A complete sketch combines all features: the opening direction, the \\(y\\)-intercept, the roots (if any), and the turning point — then a smooth curve through them. When the discriminant is negative there are no \\(x\\)-intercepts and the curve sits entirely above or below the axis.",
      miniQuestion: {
        prompt: "For \\(y = x^2 + 1\\) (opens up, minimum at \\((0,1)\\)), how many times does it cross the \\(x\\)-axis?",
        expectedAnswer: "0",
        options: ["2", "1", "0", "3"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "Its minimum value is \\(1 > 0\\) and it opens upward, so the whole curve stays above the \\(x\\)-axis — no roots. This matches a negative discriminant: \\(0 - 4 = -4 < 0\\).",
        hints: [
          "The lowest point is at height \\(1\\); the curve opens upward.",
          "If the minimum is above the axis, how often can it cross?",
        ],
      },
    },
  ],
};
