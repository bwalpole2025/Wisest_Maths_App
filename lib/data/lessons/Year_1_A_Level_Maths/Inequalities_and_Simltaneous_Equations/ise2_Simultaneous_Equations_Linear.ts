import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Simultaneous Equations (Linear)
 * Ref:   ise2
 */
export const lesson: Lesson = {
  topicRef: "ise2",
  title: "Simultaneous Equations (Linear)",
  intro:
    "Two linear equations, two unknowns — and exactly one point where both are true at once. This lesson teaches elimination and substitution, and shows that point is where two lines cross.",
  cards: [
    {
      id: "ise2-c1",
      title: "Eliminate by adding or subtracting",
      concept:
        "If the same variable has matching coefficients in both equations, you can remove it. In \\( 5x + 2y = 16 \\) and \\( 3x - 2y = 0 \\), the \\( y \\) terms are \\( +2y \\) and \\( -2y \\). Adding the equations cancels \\( y \\): \\( 8x = 16 \\), so \\( x = 2 \\). Add when the signs are opposite, subtract when they match.",
      miniQuestion: {
        prompt: "Adding \\( 5x + 2y = 16 \\) and \\( 3x - 2y = 0 \\) eliminates \\( y \\). What value of \\( x \\) results?",
        expectedAnswer: "\\( x = 2 \\)",
        options: ["\\( x = 2 \\)", "\\( x = 8 \\)", "\\( x = -2 \\)", "\\( x = 16 \\)"],
        correctIndex: 0,
        answerType: "exactValue",
        insight:
          "The opposite signs \\( +2y \\) and \\( -2y \\) cancel on adding, leaving \\( 8x = 16 \\), so \\( x = 2 \\). Opposite coefficients mean add to eliminate.",
        hints: [
          "Add the two equations term by term.",
          "The \\( y \\) terms cancel, leaving \\( 8x = 16 \\).",
        ],
      },
    },
    {
      id: "ise2-c2",
      title: "Back-substitute for the second unknown",
      concept:
        "Once you have one variable, substitute it back into either original equation to find the other. With \\( x = 2 \\) in \\( 3x - 2y = 0 \\): \\( 6 - 2y = 0 \\), so \\( 2y = 6 \\) and \\( y = 3 \\). Always state both values — a simultaneous solution is a pair.",
      miniQuestion: {
        prompt: "Given \\( x = 2 \\), substitute into \\( 3x - 2y = 0 \\) to find \\( y \\).",
        expectedAnswer: "\\( y = 3 \\)",
        options: ["\\( y = -3 \\)", "\\( y = 3 \\)", "\\( y = 6 \\)", "\\( y = 2 \\)"],
        correctIndex: 1,
        answerType: "exactValue",
        insight:
          "\\( 3(2) - 2y = 0 \\) gives \\( 6 = 2y \\), so \\( y = 3 \\). The full solution is \\( x = 2,\\; y = 3 \\) — both numbers together.",
        hints: [
          "Replace \\( x \\) with \\( 2 \\): \\( 6 - 2y = 0 \\).",
          "Solve \\( 2y = 6 \\).",
        ],
      },
    },
    {
      id: "ise2-c3",
      title: "Scale first when coefficients don't match",
      concept:
        "Often no coefficient lines up yet. Multiply one or both equations to create a matching pair. For \\( 3x + 4y = 10 \\) and \\( 5x - 2y = 8 \\), double the second equation to get \\( 10x - 4y = 16 \\); now the \\( y \\) coefficients are \\( +4 \\) and \\( -4 \\). Adding gives \\( 13x = 26 \\), so \\( x = 2 \\), and then \\( y = 1 \\).",
      miniQuestion: {
        prompt: "Solve \\( 3x + 4y = 10 \\) and \\( 5x - 2y = 8 \\). Give \\( x \\) and \\( y \\).",
        expectedAnswer: "\\( x = 2,\\; y = 1 \\)",
        options: ["\\( x = 1,\\; y = 2 \\)", "\\( x = -2,\\; y = -1 \\)", "\\( x = 2,\\; y = 1 \\)", "\\( x = 2,\\; y = -1 \\)"],
        correctIndex: 2,
        answerType: "exactValue",
        insight:
          "Doubling the second equation makes the \\( y \\) terms \\( +4y \\) and \\( -4y \\); adding gives \\( 13x = 26 \\Rightarrow x = 2 \\), then \\( 3(2) + 4y = 10 \\Rightarrow y = 1 \\).",
        hints: [
          "Multiply \\( 5x - 2y = 8 \\) by \\( 2 \\) so the \\( y \\) terms match in size.",
          "Add to get \\( 13x = 26 \\), find \\( x \\), then back-substitute for \\( y \\).",
        ],
      },
    },
    {
      id: "ise2-c4",
      title: "Substitution when one variable is isolated",
      concept:
        "When an equation already gives one variable in terms of the other, substitution is fastest. For the lines \\( y = 3x - 1 \\) and \\( y = -x + 7 \\), set them equal: \\( 3x - 1 = -x + 7 \\). This gives \\( 4x = 8 \\), so \\( x = 2 \\), and \\( y = 3(2) - 1 = 5 \\).",
      miniQuestion: {
        prompt: "Find the point of intersection of \\( y = 3x - 1 \\) and \\( y = -x + 7 \\).",
        expectedAnswer: "\\( (2, 5) \\)",
        options: ["\\( (5, 2) \\)", "\\( (2, 5) \\)", "\\( (2, 9) \\)", "\\( (-2, -7) \\)"],
        correctIndex: 1,
        answerType: "exactValue",
        insight:
          "Setting the expressions for \\( y \\) equal gives \\( 4x = 8 \\Rightarrow x = 2 \\), then \\( y = 5 \\). The solution of a linear pair is exactly the point where the two lines cross.",
        hints: [
          "Both equal \\( y \\), so set \\( 3x - 1 = -x + 7 \\).",
          "Solve for \\( x \\), then substitute back to get \\( y \\).",
        ],
      },
    },
    {
      id: "ise2-c5",
      title: "The solution is an intersection point",
      concept:
        "Each linear equation is a straight line; solving them simultaneously finds where they meet. \\( y = -2x + 10 \\) and \\( y = 4x - 2 \\) cross where \\( -2x + 10 = 4x - 2 \\), i.e. \\( 6x = 12 \\), \\( x = 2 \\), \\( y = 6 \\). If two lines were parallel they'd never meet — no solution.",
      miniQuestion: {
        prompt: "Find the point of intersection of \\( y = -2x + 10 \\) and \\( y = 4x - 2 \\).",
        expectedAnswer: "\\( (2, 6) \\)",
        options: ["\\( (2, 6) \\)", "\\( (6, 2) \\)", "\\( (2, 8) \\)", "\\( (-2, 14) \\)"],
        correctIndex: 0,
        answerType: "exactValue",
        insight:
          "\\( -2x + 10 = 4x - 2 \\) gives \\( 6x = 12 \\Rightarrow x = 2 \\), then \\( y = 4(2) - 2 = 6 \\). Solving simultaneously is geometrically just finding where the lines intersect.",
        hints: [
          "Set the two expressions for \\( y \\) equal.",
          "Solve \\( 6x = 12 \\), then find \\( y \\).",
        ],
      },
    },
  ],
};
