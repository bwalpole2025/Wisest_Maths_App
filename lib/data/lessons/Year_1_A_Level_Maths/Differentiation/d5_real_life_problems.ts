import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Real-Life Problems
 * Ref:   d5
 */
export const lesson: Lesson = {
  topicRef: "d5",
  title: "Real-Life Problems",
  intro:
    "Differentiation is not just about curves — it is a rate-of-change machine. Here you use it to turn displacement into velocity, find the largest area a fence can enclose, and squeeze the most out of a real-world model.",
  cards: [
    {
      id: "d5-c1",
      title: "Velocity is a derivative",
      concept:
        "If a particle's displacement is \\(s(t)\\), its velocity is the rate of change of displacement: \\(v = \\frac{ds}{dt}\\). Differentiating with respect to time turns a position formula into a speed formula. For \\(s = 4t^2 - 3t\\), \\(v = \\frac{ds}{dt} = 8t - 3\\).",
      miniQuestion: {
        prompt:
          "A particle has displacement \\(s = 4t^2 - 3t\\) metres. Find its velocity when \\(t = 5\\) seconds.",
        expectedAnswer: "\\(37\\) m/s",
        options: [
          "\\(40\\) m/s",
          "\\(85\\) m/s",
          "\\(37\\) m/s",
          "\\(5\\) m/s",
        ],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "\\(v = \\frac{ds}{dt} = 8t - 3\\), so at \\(t = 5\\), \\(v = 8(5) - 3 = 37\\) m/s. Velocity is the gradient of the displacement–time graph — differentiate, then substitute the time.",
        hints: [
          "Differentiate \\(s\\) to get \\(v = 8t - 3\\).",
          "Substitute \\(t = 5\\).",
        ],
      },
    },
    {
      id: "d5-c2",
      title: "Acceleration is the second derivative",
      concept:
        "Differentiate velocity and you get acceleration: \\(a = \\frac{dv}{dt} = \\frac{d^2s}{dt^2}\\). So displacement, differentiated twice, gives acceleration. For \\(s = t^3 - 6t^2 + 5\\): \\(v = 3t^2 - 12t\\), then \\(a = 6t - 12\\).",
      miniQuestion: {
        prompt:
          "For \\(s = t^3 - 6t^2 + 5\\), the acceleration is \\(a = 6t - 12\\). Find the acceleration when \\(t = 4\\) seconds.",
        expectedAnswer: "\\(12\\) m/s²",
        options: [
          "\\(24\\) m/s²",
          "\\(12\\) m/s²",
          "\\(36\\) m/s²",
          "\\(0\\) m/s²",
        ],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "At \\(t = 4\\), \\(a = 6(4) - 12 = 12\\) m/s². Acceleration is how fast the velocity is changing — the second derivative of displacement does that job in one chain: \\(s \\to v \\to a\\).",
        hints: [
          "Substitute \\(t = 4\\) into \\(a = 6t - 12\\).",
          "\\(6 \\times 4 = 24\\), then subtract \\(12\\).",
        ],
      },
    },
    {
      id: "d5-c3",
      title: "Momentarily at rest",
      concept:
        "A particle is instantaneously at rest when its velocity is zero — so solve \\(v = 0\\). This is the same idea as a stationary point: it marks where a thrown object reaches its highest point, or where a particle changes direction. For \\(h = 20t - 5t^2\\), the stone is highest when \\(v = 20 - 10t = 0\\).",
      miniQuestion: {
        prompt:
          "A stone has height \\(h = 20t - 5t^2\\) metres, so \\(v = 20 - 10t\\). At what time is it momentarily at rest (its maximum height)?",
        expectedAnswer: "\\(t = 2\\) seconds",
        options: [
          "\\(t = 20\\) seconds",
          "\\(t = 10\\) seconds",
          "\\(t = 2\\) seconds",
          "\\(t = 0.5\\) seconds",
        ],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "Setting \\(v = 20 - 10t = 0\\) gives \\(t = 2\\). At the top of its flight the stone is momentarily stationary — exactly when velocity passes through zero on its way from positive to negative.",
        hints: [
          "At maximum height the velocity is \\(0\\).",
          "Solve \\(20 - 10t = 0\\).",
        ],
      },
    },
    {
      id: "d5-c4",
      title: "Building the model: one variable",
      concept:
        "Optimisation problems start with a constraint that lets you write the quantity in terms of a single variable. A rectangle with perimeter \\(60\\) m has \\(x + y = 30\\), so \\(y = 30 - x\\); its area becomes \\(A = x(30 - x)\\) — a function of \\(x\\) alone, ready to differentiate.",
      miniQuestion: {
        prompt:
          "A rectangle has perimeter \\(60\\) m and width \\(x\\). Using \\(y = 30 - x\\), write the area \\(A\\) as a function of \\(x\\).",
        expectedAnswer: "\\(A = x(30 - x)\\)",
        options: [
          "\\(A = x(60 - x)\\)",
          "\\(A = x(30 - x)\\)",
          "\\(A = x(30 + x)\\)",
          "\\(A = 30 - x\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Area \\(= \\text{width} \\times \\text{length} = x(30 - x) = 30x - x^2\\). The constraint collapses two variables into one — that single-variable expression is what you optimise.",
        hints: [
          "Area is width times length.",
          "The length is \\(30 - x\\); multiply by the width \\(x\\).",
        ],
      },
    },
    {
      id: "d5-c5",
      title: "Optimising the model",
      concept:
        "To maximise or minimise the quantity, differentiate and set the derivative to zero — the optimum sits at a stationary point. Then check it really is a maximum (or minimum) using the second derivative. For \\(A = 30x - x^2\\), \\(\\frac{dA}{dx} = 30 - 2x = 0\\) gives \\(x = 15\\), and \\(\\frac{d^2A}{dx^2} = -2 < 0\\) confirms a maximum.",
      miniQuestion: {
        prompt:
          "For \\(A = 30x - x^2\\), find the value of \\(x\\) that maximises the area.",
        expectedAnswer: "\\(x = 15\\)",
        options: ["\\(x = 30\\)", "\\(x = 15\\)", "\\(x = 60\\)", "\\(x = 7.5\\)"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "\\(\\frac{dA}{dx} = 30 - 2x = 0\\) gives \\(x = 15\\), and since \\(\\frac{d^2A}{dx^2} = -2 < 0\\) it is a maximum — the square \\(15 \\times 15\\) encloses the most area. Optimisation is just differentiation aimed at a stationary point, with the second derivative confirming its nature.",
        hints: [
          "Differentiate \\(A\\) and set \\(\\frac{dA}{dx} = 0\\).",
          "Solve \\(30 - 2x = 0\\).",
        ],
      },
    },
  ],
};
