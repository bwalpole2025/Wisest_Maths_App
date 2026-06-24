import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Inequalities
 * Ref:   ise1
 */
export const lesson: Lesson = {
  topicRef: "ise1",
  title: "Inequalities",
  intro:
    "A linear inequality behaves almost exactly like an equation — until you multiply or divide by a negative. This lesson builds the method and pins down the one rule everyone forgets.",
  cards: [
    {
      id: "ise1-c1",
      title: "An inequality is a range, not a point",
      concept:
        "Solving \\( 3x - 4 < 11 \\) doesn't give a single value — it gives every \\( x \\) that makes the statement true. You rearrange just like an equation: add \\( 4 \\) to both sides to get \\( 3x < 15 \\), then divide by \\( 3 \\). The answer \\( x < 5 \\) describes a whole set of numbers.",
      miniQuestion: {
        prompt: "Solve \\( 3x - 4 < 11 \\).",
        expectedAnswer: "\\( x < 5 \\)",
        options: ["\\( x > 5 \\)", "\\( x < 5 \\)", "\\( x < \\frac{7}{3} \\)", "\\( x < 7 \\)"],
        correctIndex: 1,
        answerType: "interval",
        insight:
          "Adding \\( 4 \\) and dividing by the positive \\( 3 \\) preserves the direction of \\( < \\). The solution is the whole set of values less than \\( 5 \\), not just \\( 5 \\).",
        hints: [
          "Add \\( 4 \\) to both sides first.",
          "You should have \\( 3x < 15 \\); now divide by \\( 3 \\).",
        ],
      },
    },
    {
      id: "ise1-c2",
      title: "Keep the sign, change the side",
      concept:
        "Adding or subtracting the same thing from both sides, and multiplying or dividing by a positive number, all leave the inequality sign pointing the same way. So \\( 2x + 5 \\geq 13 \\) becomes \\( 2x \\geq 8 \\), then \\( x \\geq 4 \\) — the \\( \\geq \\) never flips because we only ever divided by a positive.",
      miniQuestion: {
        prompt: "Solve \\( 2x + 5 \\geq 13 \\).",
        expectedAnswer: "\\( x \\geq 4 \\)",
        options: ["\\( x \\leq 4 \\)", "\\( x \\geq 9 \\)", "\\( x \\geq 4 \\)", "\\( x \\geq 6 \\)"],
        correctIndex: 2,
        answerType: "interval",
        insight:
          "Subtracting \\( 5 \\) then dividing by the positive \\( 2 \\) keeps \\( \\geq \\) intact. Positive operations never disturb the direction of the inequality.",
        hints: [
          "Subtract \\( 5 \\) from both sides.",
          "Divide \\( 2x \\geq 8 \\) by \\( 2 \\) — the sign stays as \\( \\geq \\).",
        ],
      },
    },
    {
      id: "ise1-c3",
      title: "Multiply or divide by a negative — flip!",
      concept:
        "This is the one rule that catches everyone. Multiplying or dividing both sides by a negative number reverses the inequality. Take \\( 7 - 2x < 1 \\): subtract \\( 7 \\) to get \\( -2x < -6 \\). Dividing by \\( -2 \\) flips \\( < \\) to \\( > \\), giving \\( x > 3 \\). Forget to flip and you'd get the entire wrong half of the number line.",
      miniQuestion: {
        prompt: "Solve \\( 8 - 5x > -7 \\).",
        expectedAnswer: "\\( x < 3 \\)",
        options: ["\\( x < 3 \\)", "\\( x > 3 \\)", "\\( x > -3 \\)", "\\( x < \\frac{1}{5} \\)"],
        correctIndex: 0,
        answerType: "interval",
        insight:
          "Subtracting \\( 8 \\) gives \\( -5x > -15 \\); dividing by \\( -5 \\) flips \\( > \\) into \\( < \\), so \\( x < 3 \\). The negative divisor is exactly what reverses the sign.",
        hints: [
          "Subtract \\( 8 \\) from both sides to get \\( -5x > -15 \\).",
          "You're about to divide by \\( -5 \\) — what must happen to the \\( > \\) sign?",
          "Dividing by a negative reverses \\( > \\) to \\( < \\).",
        ],
      },
    },
    {
      id: "ise1-c4",
      title: "Unknowns on both sides",
      concept:
        "When \\( x \\) appears on both sides, collect the \\( x \\) terms together first — and a neat trick avoids the flip entirely: move the \\( x \\) terms to whichever side keeps their coefficient positive. For \\( 6x + 1 > 4x + 9 \\), subtract \\( 4x \\) to get \\( 2x + 1 > 9 \\), then \\( 2x > 8 \\), so \\( x > 4 \\). No negative coefficient, no flip needed.",
      miniQuestion: {
        prompt: "Solve \\( 5x - 2 \\leq 3x + 8 \\).",
        expectedAnswer: "\\( x \\leq 5 \\)",
        options: ["\\( x \\geq 5 \\)", "\\( x \\leq 3 \\)", "\\( x \\leq 5 \\)", "\\( x \\leq \\frac{3}{4} \\)"],
        correctIndex: 2,
        answerType: "interval",
        insight:
          "Subtracting \\( 3x \\) keeps the coefficient positive: \\( 2x - 2 \\leq 8 \\), then \\( 2x \\leq 10 \\), so \\( x \\leq 5 \\). Collecting onto the positive side sidesteps any sign-flip.",
        hints: [
          "Subtract \\( 3x \\) from both sides.",
          "Then add \\( 2 \\) and divide by the positive \\( 2 \\).",
        ],
      },
    },
    {
      id: "ise1-c5",
      title: "Writing the solution set",
      concept:
        "A solution like \\( x < 10 \\) can be written several equivalent ways: as the inequality \\( x < 10 \\), in set notation \\( \\{ x : x < 10 \\} \\), or in interval notation \\( (-\\infty, 10) \\). A round bracket means the endpoint is excluded (used for \\( < \\) and \\( > \\)); a square bracket means included (used for \\( \\leq \\) and \\( \\geq \\)).",
      miniQuestion: {
        prompt:
          "Write the solution of \\( 2x - 7 < x + 3 \\) (which simplifies to \\( x < 10 \\)) in interval notation.",
        expectedAnswer: "\\( (-\\infty, 10) \\)",
        options: ["\\( (10, \\infty) \\)", "\\( (-\\infty, 10] \\)", "\\( (-\\infty, 10) \\)", "\\( [10, \\infty) \\)"],
        correctIndex: 2,
        answerType: "interval",
        insight:
          "Because the inequality is strict (\\( < \\)), \\( 10 \\) is not included, so we use a round bracket: \\( (-\\infty, 10) \\). Infinity always takes a round bracket.",
        hints: [
          "Is \\( 10 \\) itself part of the solution? That decides round vs square bracket.",
          "Strict \\( < \\) excludes the endpoint, so use \\( ) \\) at \\( 10 \\).",
        ],
      },
    },
  ],
};
