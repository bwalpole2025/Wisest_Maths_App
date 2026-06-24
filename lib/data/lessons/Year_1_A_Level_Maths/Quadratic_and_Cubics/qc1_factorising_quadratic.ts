import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Factorising Quadratics
 * Ref:   qc1
 */
export const lesson: Lesson = {
  topicRef: "qc1",
  title: "Factorising Quadratics",
  intro:
    "Factorising a quadratic means reversing an expansion: turning \\(x^2 + bx + c\\) back into \\((x+m)(x+n)\\). The whole game is finding two numbers that fit two conditions at once.",
  cards: [
    {
      id: "qc1-c1",
      title: "Two numbers, two conditions",
      concept:
        "Expanding \\((x+m)(x+n)\\) gives \\(x^2 + (m+n)x + mn\\). So to factorise \\(x^2 + bx + c\\) you need two numbers that multiply to \\(c\\) and add to \\(b\\). For \\(x^2 + 5x + 6\\), you want a pair multiplying to \\(6\\) and adding to \\(5\\).",
      miniQuestion: {
        prompt: "Which pair of numbers multiplies to \\(6\\) and adds to \\(5\\)?",
        expectedAnswer: "2 and 3",
        options: ["1 and 6", "2 and 3", "1 and 5", "2 and 4"],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "\\(2 \\times 3 = 6\\) and \\(2 + 3 = 5\\), so \\(x^2 + 5x + 6 = (x+2)(x+3)\\). The constant fixes the product; the middle coefficient fixes the sum.",
        hints: [
          "List factor pairs of \\(6\\): \\(1\\times 6\\) and \\(2\\times 3\\).",
          "Which of those pairs adds up to \\(5\\)?",
        ],
      },
    },
    {
      id: "qc1-c2",
      title: "When the signs matter",
      concept:
        "The sign of \\(c\\) tells you the structure. If \\(c\\) is positive, both numbers share the sign of \\(b\\). If \\(c\\) is negative, the two numbers have opposite signs. For \\(x^2 + x - 6\\), the product is \\(-6\\), so one number is positive and one negative.",
      miniQuestion: {
        prompt: "Factorise \\(x^2 + x - 6\\).",
        expectedAnswer: "\\((x + 3)(x - 2)\\)",
        options: [
          "\\((x - 3)(x + 2)\\)",
          "\\((x + 3)(x - 2)\\)",
          "\\((x + 6)(x - 1)\\)",
          "\\((x + 3)(x + 2)\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Need a product of \\(-6\\) and a sum of \\(+1\\): that's \\(+3\\) and \\(-2\\). So \\(x^2 + x - 6 = (x+3)(x-2)\\). Opposite signs come from the negative constant.",
        hints: [
          "A negative product means one positive and one negative number.",
          "Try \\(+3\\) and \\(-2\\): do they multiply to \\(-6\\) and add to \\(+1\\)?",
        ],
      },
    },
    {
      id: "qc1-c3",
      title: "A leading coefficient bigger than 1",
      concept:
        "When the \\(x^2\\) coefficient \\(a\\) is not \\(1\\), look at the product \\(a \\times c\\). Split the middle term using two numbers that multiply to \\(ac\\) and add to \\(b\\), then group. For \\(2x^2 + 7x + 3\\), \\(ac = 6\\) and you need a pair adding to \\(7\\).",
      miniQuestion: {
        prompt: "Factorise \\(2x^2 + 7x + 3\\).",
        expectedAnswer: "\\((2x + 1)(x + 3)\\)",
        options: [
          "\\((2x + 3)(x + 1)\\)",
          "\\((2x - 1)(x - 3)\\)",
          "\\((2x + 1)(x + 3)\\)",
          "\\((2x + 1)(x - 3)\\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "\\(ac = 6\\); the pair \\(1, 6\\) adds to \\(7\\). Splitting: \\(2x^2 + x + 6x + 3 = x(2x+1) + 3(2x+1) = (2x+1)(x+3)\\).",
        hints: [
          "Compute \\(a \\times c = 2 \\times 3 = 6\\); find a pair multiplying to 6, adding to 7.",
          "Split \\(7x\\) as \\(x + 6x\\), then group \\(x(2x+1) + 3(2x+1)\\).",
        ],
      },
    },
    {
      id: "qc1-c4",
      title: "Special cases: squares and difference of two squares",
      concept:
        "Two patterns appear often. A perfect square: \\(x^2 + 2px + p^2 = (x+p)^2\\). A difference of two squares: \\(x^2 - k^2 = (x-k)(x+k)\\), where there is no middle term. Spotting these saves searching for a pair.",
      miniQuestion: {
        prompt: "Factorise \\(x^2 - 25\\).",
        expectedAnswer: "\\((x - 5)(x + 5)\\)",
        options: [
          "\\((x - 5)(x + 5)\\)",
          "\\((x - 5)^2\\)",
          "\\((x - 25)(x + 1)\\)",
          "\\((x + 5)^2\\)",
        ],
        correctIndex: 0,
        answerType: "expression",
        insight:
          "\\(25 = 5^2\\), and there is no \\(x\\) term, so this is a difference of two squares: \\(x^2 - 25 = (x-5)(x+5)\\).",
        hints: [
          "There is no middle term — think \\(a^2 - b^2\\).",
          "\\(25 = 5^2\\), so \\(x^2 - 5^2 = (x-5)(x+5)\\).",
        ],
      },
    },
  ],
};
