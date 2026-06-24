import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Quadratic Equations
 * Ref:   qc2
 */
export const lesson: Lesson = {
  topicRef: "qc2",
  title: "Quadratic Equations",
  intro:
    "Solving \\(ax^2 + bx + c = 0\\) means finding the \\(x\\)-values that make it true. Factorising turns one hard equation into two easy ones, and when factorising fails the formula always works.",
  cards: [
    {
      id: "qc2-c1",
      title: "Zero product: the key idea",
      concept:
        "If two things multiply to give zero, at least one of them must be zero. So once a quadratic is factorised, say \\((x+2)(x+3) = 0\\), you can set each bracket to zero separately: \\(x+2 = 0\\) or \\(x+3 = 0\\).",
      miniQuestion: {
        prompt: "Solve \\((x+2)(x+3) = 0\\).",
        expectedAnswer: "\\(x = -2\\) or \\(x = -3\\)",
        options: [
          "\\(x = 2\\) or \\(x = 3\\)",
          "\\(x = -2\\) or \\(x = -3\\)",
          "\\(x = -2\\) or \\(x = 3\\)",
          "\\(x = 2\\) or \\(x = -3\\)",
        ],
        correctIndex: 1,
        answerType: "equationRoots",
        insight:
          "The zero-product rule splits one equation into two: \\(x+2=0\\) gives \\(x=-2\\), and \\(x+3=0\\) gives \\(x=-3\\). A root is the value that makes its own bracket vanish.",
        hints: [
          "Set each bracket equal to zero on its own.",
          "\\(x + 2 = 0\\) gives one root; \\(x + 3 = 0\\) gives the other.",
        ],
      },
    },
    {
      id: "qc2-c2",
      title: "Factorise first, then solve",
      concept:
        "Most quadratic equations arrive unfactorised. First write them as \\(\\text{(bracket)}\\,\\text{(bracket)} = 0\\), then apply the zero-product rule. For \\(x^2 + 7x + 10 = 0\\), find a pair multiplying to \\(10\\) and adding to \\(7\\).",
      miniQuestion: {
        prompt: "Solve \\(x^2 + 7x + 10 = 0\\).",
        expectedAnswer: "\\(x = -2\\) or \\(x = -5\\)",
        options: [
          "\\(x = 2\\) or \\(x = 5\\)",
          "\\(x = -1\\) or \\(x = -10\\)",
          "\\(x = -2\\) or \\(x = -5\\)",
          "\\(x = -2\\) or \\(x = 5\\)",
        ],
        correctIndex: 2,
        answerType: "equationRoots",
        insight:
          "\\(2 \\times 5 = 10\\) and \\(2 + 5 = 7\\), so \\((x+2)(x+5) = 0\\), giving \\(x = -2\\) or \\(x = -5\\).",
        hints: [
          "Factorise: find two numbers multiplying to \\(10\\), adding to \\(7\\).",
          "\\((x+2)(x+5) = 0\\); now set each bracket to zero.",
        ],
      },
    },
    {
      id: "qc2-c3",
      title: "Rearrange to equal zero first",
      concept:
        "The zero-product rule only works when one side is \\(0\\). If the equation is \\(x^2 = 5x - 6\\), move everything to one side first: \\(x^2 - 5x + 6 = 0\\). Never factorise before the right-hand side is zero.",
      miniQuestion: {
        prompt: "Solve \\(x^2 = 5x - 6\\).",
        expectedAnswer: "\\(x = 2\\) or \\(x = 3\\)",
        options: [
          "\\(x = -2\\) or \\(x = -3\\)",
          "\\(x = 1\\) or \\(x = 6\\)",
          "\\(x = 2\\) or \\(x = 3\\)",
          "\\(x = 2\\) or \\(x = -3\\)",
        ],
        correctIndex: 2,
        answerType: "equationRoots",
        insight:
          "Rearrange to \\(x^2 - 5x + 6 = 0\\), factorise to \\((x-2)(x-3) = 0\\), so \\(x = 2\\) or \\(x = 3\\). Moving terms across is essential before factorising.",
        hints: [
          "Bring every term to the left so the equation equals \\(0\\).",
          "\\(x^2 - 5x + 6 = 0\\) factorises to \\((x-2)(x-3)\\).",
        ],
      },
    },
    {
      id: "qc2-c4",
      title: "When factorising fails: the formula",
      concept:
        "If no neat factor pair exists, use \\(x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\). It works for every quadratic. Substitute \\(a\\), \\(b\\), \\(c\\) carefully, watching signs, and the \\(\\pm\\) gives the two roots.",
      miniQuestion: {
        prompt: "For \\(x^2 + 5x + 5 = 0\\), what is the value of \\(b^2 - 4ac\\)?",
        expectedAnswer: "5",
        options: ["45", "5", "-5", "20"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "With \\(a=1, b=5, c=5\\): \\(b^2 - 4ac = 25 - 20 = 5\\). This sits under the root and gives \\(x = \\tfrac{-5 \\pm \\sqrt{5}}{2}\\), i.e. \\(x \\approx -1.38\\) or \\(x \\approx -3.62\\).",
        hints: [
          "Identify \\(a=1\\), \\(b=5\\), \\(c=5\\).",
          "Compute \\(b^2 - 4ac = 5^2 - 4(1)(5)\\).",
        ],
      },
    },
  ],
};
