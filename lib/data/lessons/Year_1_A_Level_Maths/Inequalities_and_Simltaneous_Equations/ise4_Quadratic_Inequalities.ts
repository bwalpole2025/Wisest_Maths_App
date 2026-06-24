import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Quadratic Inequalities
 * Ref:   ise4
 */
export const lesson: Lesson = {
  topicRef: "ise4",
  title: "Quadratic Inequalities",
  intro:
    "A quadratic inequality can't be solved by simple rearranging — you find the critical values, then read off which region of the parabola lies above or below zero. This lesson makes that reasoning automatic.",
  cards: [
    {
      id: "ise4-c1",
      title: "Find the critical values first",
      concept:
        "Solving \\( x^2 - 5x + 6 > 0 \\) starts by finding where the expression equals zero. Factorise: \\( x^2 - 5x + 6 = (x-2)(x-3) \\), so the critical values are \\( x = 2 \\) and \\( x = 3 \\). These are the points where the parabola crosses the \\( x \\)-axis — the boundaries between positive and negative regions.",
      miniQuestion: {
        prompt: "What are the critical values of \\( x^2 - 5x + 6 \\)?",
        expectedAnswer: "\\( x = 2 \\) and \\( x = 3 \\)",
        options: ["\\( x = -2 \\) and \\( x = -3 \\)", "\\( x = 2 \\) and \\( x = 3 \\)", "\\( x = 1 \\) and \\( x = 6 \\)", "\\( x = 5 \\) and \\( x = 6 \\)"],
        correctIndex: 1,
        answerType: "set",
        insight:
          "Setting \\( (x-2)(x-3) = 0 \\) gives \\( x = 2 \\) and \\( x = 3 \\). These roots split the number line into the regions you'll test next.",
        hints: [
          "Set the quadratic equal to zero and factorise.",
          "\\( (x-2)(x-3) = 0 \\) — what two values make this true?",
        ],
      },
    },
    {
      id: "ise4-c2",
      title: "Sketch the parabola to choose the region",
      concept:
        "A positive \\( x^2 \\) coefficient gives a \\( \\cup \\)-shaped parabola: it sits below the axis between its roots and above the axis outside them. So for \\( (x-2)(x-3) > 0 \\) (above the axis) you want the outside regions: \\( x < 2 \\) or \\( x > 3 \\). In set notation that's \\( \\{ x : x < 2 \\} \\cup \\{ x : x > 3 \\} \\).",
      miniQuestion: {
        prompt:
          "Solve \\( x^2 - 5x + 6 > 0 \\). Give your answer in set notation.",
        expectedAnswer: "\\( \\{ x : x < 2 \\} \\cup \\{ x : x > 3 \\} \\)",
        options: ["\\( \\{ x : 2 < x < 3 \\} \\)", "\\( \\{ x : x < 2 \\} \\cup \\{ x : x > 3 \\} \\)", "\\( \\{ x : x > 2 \\} \\cup \\{ x : x < 3 \\} \\)", "\\( \\{ x : x \\leq 2 \\} \\cup \\{ x : x \\geq 3 \\} \\)"],
        correctIndex: 1,
        answerType: "set",
        insight:
          "A \\( \\cup \\)-parabola is positive (above the axis) outside its roots, so \\( > 0 \\) gives the two outer pieces \\( x < 2 \\) or \\( x > 3 \\).",
        hints: [
          "The parabola opens upward — where is it above the \\( x \\)-axis?",
          "Above the axis means outside the roots: \\( x < 2 \\) or \\( x > 3 \\).",
        ],
      },
    },
    {
      id: "ise4-c3",
      title: "Less than zero means between the roots",
      concept:
        "For the same upward parabola, the expression is negative (below the axis) only between the roots. So \\( x^2 - 7x + 12 < 0 \\) factorises to \\( (x-3)(x-4) < 0 \\), and the solution is the inside region \\( 3 < x < 4 \\), written in interval notation as \\( (3, 4) \\).",
      miniQuestion: {
        prompt:
          "Solve \\( x^2 - 7x + 12 < 0 \\). Give your answer in interval notation.",
        expectedAnswer: "\\( (3, 4) \\)",
        options: ["\\( (-\\infty, 3) \\cup (4, \\infty) \\)", "\\( [3, 4] \\)", "\\( (3, 4) \\)", "\\( (-4, -3) \\)"],
        correctIndex: 2,
        answerType: "interval",
        insight:
          "Below the axis happens only between the roots, so \\( < 0 \\) gives the single inside interval \\( 3 < x < 4 = (3, 4) \\). Round brackets because the inequality is strict.",
        hints: [
          "Factorise to \\( (x-3)(x-4) \\); the roots are \\( 3 \\) and \\( 4 \\).",
          "A \\( \\cup \\)-parabola dips below zero between its roots.",
        ],
      },
    },
    {
      id: "ise4-c4",
      title: "Don't just flip the sign — rethink the region",
      concept:
        "A common mistake is treating \\( x^2 - x - 12 < 0 \\) like a linear inequality and writing two disconnected pieces. It factorises to \\( (x+3)(x-4) < 0 \\), roots \\( -3 \\) and \\( 4 \\). Because we want below the axis on an upward parabola, the answer is the single interval between the roots: \\( -3 < x < 4 \\), i.e. \\( (-3, 4) \\). The shape decides the region, not a sign-flip rule.",
      miniQuestion: {
        prompt:
          "Solve \\( x^2 - x - 12 < 0 \\). Give your answer in interval notation.",
        expectedAnswer: "\\( (-3, 4) \\)",
        options: ["\\( (-\\infty, -3) \\cup (4, \\infty) \\)", "\\( (-3, 4) \\)", "\\( (3, -4) \\)", "\\( [-3, 4] \\)"],
        correctIndex: 1,
        answerType: "interval",
        insight:
          "Roots are \\( -3 \\) and \\( 4 \\); a \\( \\cup \\)-parabola is below zero only between them, so it's one interval \\( (-3, 4) \\) — not two separate pieces.",
        hints: [
          "Factorise: \\( (x+3)(x-4) \\). The roots are \\( -3 \\) and \\( 4 \\).",
          "\\( < 0 \\) on an upward parabola is the region between the roots.",
        ],
      },
    },
    {
      id: "ise4-c5",
      title: "Negative leading coefficient — rearrange first",
      concept:
        "If the \\( x^2 \\) term is negative, multiply through by \\( -1 \\) to make it positive — and flip the inequality as you do. \\( -x^2 + 4x + 5 > 0 \\) becomes \\( x^2 - 4x - 5 < 0 \\), which factorises to \\( (x-5)(x+1) < 0 \\), roots \\( -1 \\) and \\( 5 \\). The solution is the inside region \\( -1 < x < 5 \\).",
      miniQuestion: {
        prompt: "Solve \\( -x^2 + 4x + 5 > 0 \\).",
        expectedAnswer: "\\( -1 < x < 5 \\)",
        options: ["\\( x < -1 \\) or \\( x > 5 \\)", "\\( -1 < x < 5 \\)", "\\( 1 < x < 5 \\)", "\\( -5 < x < 1 \\)"],
        correctIndex: 1,
        answerType: "interval",
        insight:
          "Multiplying by \\( -1 \\) flips \\( > \\) to \\( < \\), giving \\( (x-5)(x+1) < 0 \\); the upward parabola is below zero between its roots, so \\( -1 < x < 5 \\).",
        hints: [
          "Multiply through by \\( -1 \\) and remember to flip the inequality sign.",
          "You get \\( x^2 - 4x - 5 < 0 \\); factorise and find the between-roots region.",
        ],
      },
    },
    {
      id: "ise4-c6",
      title: "Boundaries and repeated roots",
      concept:
        "With \\( \\leq \\) or \\( \\geq \\) the boundary values are included, so use square brackets. And watch repeated roots: \\( x^2 - 6x + 9 = (x-3)^2 \\) is never negative, so \\( (x-3)^2 \\geq 0 \\) holds for every real number — the solution is all of \\( \\mathbb{R} \\). Always check whether the parabola actually crosses the axis or just touches it.",
      miniQuestion: {
        prompt: "Solve \\( x^2 - 6x + 9 \\geq 0 \\).",
        expectedAnswer: "\\( x \\in \\mathbb{R} \\)",
        options: ["\\( x \\geq 3 \\)", "\\( x = 3 \\)", "\\( x \\in \\mathbb{R} \\)", "no solutions"],
        correctIndex: 2,
        answerType: "set",
        insight:
          "Since \\( x^2 - 6x + 9 = (x-3)^2 \\) is a square, it's \\( \\geq 0 \\) for all \\( x \\) — true everywhere. A repeated root means the parabola only touches the axis, never dipping below.",
        hints: [
          "Factorise — what do you notice about \\( x^2 - 6x + 9 \\)?",
          "A squared term \\( (x-3)^2 \\) is never negative, so when is it \\( \\geq 0 \\)?",
        ],
      },
    },
  ],
};
