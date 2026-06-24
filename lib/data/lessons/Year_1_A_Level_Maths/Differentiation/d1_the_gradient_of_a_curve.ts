import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: The Gradient of a Curve
 * Ref:   d1
 */
export const lesson: Lesson = {
  topicRef: "d1",
  title: "The Gradient of a Curve",
  intro:
    "A straight line has one fixed gradient, but a curve bends — its steepness changes from point to point. This lesson builds the gradient at a point from the ground up, by squeezing a chord down onto a tangent.",
  cards: [
    {
      id: "d1-c1",
      title: "Gradient of a chord",
      concept:
        "A chord is a straight line joining two points on a curve. Its gradient is just the usual rise over run: from \\(x = a\\) to \\(x = b\\) on \\(y = f(x)\\) it is \\(\\dfrac{f(b) - f(a)}{b - a}\\). This measures the average steepness between the two points.",
      miniQuestion: {
        prompt:
          "For \\(y = x^2\\), find the gradient of the chord joining \\(x = 2\\) to \\(x = 3\\).",
        expectedAnswer: "\\(5\\)",
        options: ["\\(5\\)", "\\(\\dfrac{13}{5}\\)", "\\(2.5\\)", "\\(13\\)"],
        correctIndex: 0,
        answerType: "numeric",
        insight:
          "The chord runs from \\((2,4)\\) to \\((3,9)\\), so its gradient is \\(\\dfrac{9 - 4}{3 - 2} = 5\\). This is the average rate of change of \\(y\\) over that interval — not yet the gradient at a single point.",
        hints: [
          "Find the two \\(y\\)-values: \\(f(2)\\) and \\(f(3)\\).",
          "Gradient \\(= \\dfrac{f(3) - f(2)}{3 - 2}\\).",
        ],
      },
    },
    {
      id: "d1-c2",
      title: "Closing in on a point",
      concept:
        "To find the steepness at a single point, slide the second point closer and closer to the first. The chord gradients settle on a limiting value — that limit is the gradient of the curve at the point. For \\(y = x^2\\) at \\(x = 2\\), chords to \\(x = 2.5\\) give \\(4.5\\), to \\(x = 2.1\\) give \\(4.1\\), to \\(x = 2.01\\) give \\(4.01\\).",
      miniQuestion: {
        prompt:
          "The chord gradients of \\(y = x^2\\) at \\(x = 2\\) are \\(4.5,\\ 4.1,\\ 4.01,\\ \\dots\\) What value are they approaching?",
        expectedAnswer: "\\(4\\)",
        options: ["\\(4.01\\)", "\\(4\\)", "\\(4.5\\)", "\\(0\\)"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "The chord gradients home in on \\(4\\), so the gradient of \\(y = x^2\\) at \\(x = 2\\) is \\(4\\). Shrinking the gap turns an average rate of change into an instantaneous one.",
        hints: [
          "Look at the trend: \\(4.5 \\to 4.1 \\to 4.01 \\to \\dots\\)",
          "The values are settling just above a whole number.",
        ],
      },
    },
    {
      id: "d1-c3",
      title: "The chord becomes a tangent",
      concept:
        "Take a point \\(x\\) and a nearby point \\(x + h\\). The chord gradient is \\(\\dfrac{f(x+h) - f(x)}{h}\\). Letting \\(h \\to 0\\) makes the two points merge, and the chord becomes the tangent. This limit defines the derivative: \\(f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h) - f(x)}{h}\\).",
      miniQuestion: {
        prompt:
          "Write down the first-principles expression for the chord gradient of \\(y = x^2\\) (using \\(x\\) and \\(h\\)), before taking the limit.",
        expectedAnswer: "\\(\\dfrac{(x+h)^2 - x^2}{h}\\)",
        options: [
          "\\(\\dfrac{(x+h)^2 - x^2}{h}\\)",
          "\\(\\dfrac{(x+h)^2 - x^2}{x+h-x}\\)",
          "\\((x+h)^2 - x^2\\)",
          "\\(\\dfrac{(x+h)^2 + x^2}{h}\\)",
        ],
        correctIndex: 0,
        answerType: "expression",
        insight:
          "Substituting \\(f(x) = x^2\\) into \\(\\dfrac{f(x+h) - f(x)}{h}\\) gives \\(\\dfrac{(x+h)^2 - x^2}{h}\\). Everything in first principles flows from this one quotient.",
        hints: [
          "Use \\(\\dfrac{f(x+h) - f(x)}{h}\\) with \\(f(x) = x^2\\).",
          "Replace \\(f(x+h)\\) by \\((x+h)^2\\) and \\(f(x)\\) by \\(x^2\\).",
        ],
      },
    },
    {
      id: "d1-c4",
      title: "Taking the limit",
      concept:
        "Expand and simplify the quotient, then let \\(h \\to 0\\). For \\(y = x^2\\): \\(\\dfrac{(x+h)^2 - x^2}{h} = \\dfrac{2xh + h^2}{h} = 2x + h\\). The key move is cancelling the \\(h\\) (valid because \\(h \\neq 0\\) before the limit). As \\(h \\to 0\\), \\(2x + h \\to 2x\\).",
      miniQuestion: {
        prompt: "From first principles, \\(\\dfrac{2xh + h^2}{h} = 2x + h\\). What is \\(f'(x)\\) as \\(h \\to 0\\)?",
        expectedAnswer: "\\(f'(x) = 2x\\)",
        options: [
          "\\(f'(x) = 2x + h\\)",
          "\\(f'(x) = x\\)",
          "\\(f'(x) = 2x\\)",
          "\\(f'(x) = 2\\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "Letting \\(h \\to 0\\) kills the \\(h\\) term, leaving \\(f'(x) = 2x\\). This single gradient function gives the steepness at every point: at \\(x = 2\\) it is \\(4\\), matching the chords from Card 2.",
        hints: [
          "The only term containing \\(h\\) vanishes as \\(h \\to 0\\).",
          "What is left of \\(2x + h\\) when \\(h\\) becomes \\(0\\)?",
        ],
      },
    },
    {
      id: "d1-c5",
      title: "Using the gradient function",
      concept:
        "Once you have \\(f'(x)\\), the gradient at a particular point is found by substituting that \\(x\\)-value. The sign tells you the behaviour: \\(f'(x) > 0\\) means the curve is rising, \\(f'(x) < 0\\) means it is falling, and \\(f'(x) = 0\\) means the tangent is horizontal.",
      miniQuestion: {
        prompt:
          "For \\(y = x^2\\), \\(f'(x) = 2x\\). Find the gradient of the curve at the point \\((5, 25)\\).",
        expectedAnswer: "\\(10\\)",
        options: ["\\(7\\)", "\\(25\\)", "\\(5\\)", "\\(10\\)"],
        correctIndex: 3,
        answerType: "numeric",
        insight:
          "Substituting \\(x = 5\\) into \\(f'(x) = 2x\\) gives \\(2 \\times 5 = 10\\). The derivative is a formula for the gradient — feed in the \\(x\\)-coordinate to read off the steepness there.",
        hints: [
          "Put \\(x = 5\\) into the gradient function \\(2x\\).",
          "Only the \\(x\\)-coordinate matters; the \\(y\\)-value is just along for the ride.",
        ],
      },
    },
  ],
};
