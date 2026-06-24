import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Factorising
 * Ref:   a2
 */
export const lesson: Lesson = {
  topicRef: "a2",
  title: "Factorising",
  intro:
    "Factorising is expanding in reverse: you put the brackets back. The skill is spotting what every term has in common — a number, a letter, even a whole bracket.",
  cards: [
    {
      id: "a2-c1",
      title: "Take out the highest common factor",
      concept:
        "To factorise, pull out the largest thing every term shares and write it outside a bracket. For \\(14m + 21n\\), both \\(14\\) and \\(21\\) divide by \\(7\\), so \\(7\\) comes out: \\(7(2m + 3n)\\). Check by expanding — \\(7 \\times 2m = 14m\\) and \\(7 \\times 3n = 21n\\). Take out the *highest* common factor, not just any factor, so nothing is left to cancel.",
      miniQuestion: {
        prompt: "Factorise \\(15x + 20y\\).",
        expectedAnswer: "\\(5(3x + 4y)\\)",
        options: [
          "\\(5(3x + 4y)\\)",
          "\\(5(3x + 20y)\\)",
          "\\(5(10x + 15y)\\)",
          "\\(3(5x + 4y)\\)",
        ],
        correctIndex: 0,
        answerType: "expression",
        insight:
          "The highest common factor of \\(15\\) and \\(20\\) is \\(5\\). Dividing each term by \\(5\\) leaves \\(3x + 4y\\) inside the bracket.",
        hints: [
          "What is the largest number that divides both \\(15\\) and \\(20\\)?",
          "Divide each term by that number to find what goes inside the bracket.",
          "\\(15 \\div 5 = 3\\) and \\(20 \\div 5 = 4\\).",
        ],
      },
    },
    {
      id: "a2-c2",
      title: "Common letters count too",
      concept:
        "The common factor can include letters. For \\(6a^2b - 9ab^2\\) the numbers share \\(3\\), and both terms have at least one \\(a\\) and one \\(b\\), so \\(3ab\\) comes out: \\(3ab(2a - 3b)\\). For each letter, take the *lowest* power that appears across all terms — here that is \\(a^1\\) and \\(b^1\\).",
      miniQuestion: {
        prompt: "Factorise fully \\(5a^2b + 10ab^2\\).",
        expectedAnswer: "\\(5ab(a + 2b)\\)",
        options: [
          "\\(5(a^2b + 2ab^2)\\)",
          "\\(5ab(a + 2b)\\)",
          "\\(5ab(a^2 + 2b^2)\\)",
          "\\(ab(5a + 10b)\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "The numbers share \\(5\\), and both terms contain \\(ab\\), so \\(5ab\\) is the highest common factor. What remains is \\(a + 2b\\).",
        hints: [
          "Find the common number factor of \\(5\\) and \\(10\\) first.",
          "Now look at the letters: how many \\(a\\)s and \\(b\\)s does every term have?",
          "Take out \\(5ab\\), then divide each term by it.",
        ],
      },
    },
    {
      id: "a2-c3",
      title: "Difference of two squares",
      concept:
        "An expression of the form \\(A^2 - B^2\\) always factorises as \\((A - B)(A + B)\\). So \\(y^2 - 81 = y^2 - 9^2 = (y - 9)(y + 9)\\). It only works for a *difference* (a minus): a sum of two squares like \\(y^2 + 81\\) does not factorise. Spot it by checking both terms are perfect squares with a minus between them.",
      miniQuestion: {
        prompt: "Factorise \\(4c^2 - d^2\\).",
        expectedAnswer: "\\((2c - d)(2c + d)\\)",
        options: [
          "\\((2c - d)^2\\)",
          "\\((4c - d)(4c + d)\\)",
          "\\((2c - d)(2c + d)\\)",
          "\\((2c + d)(2c + d)\\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "Here \\(4c^2 = (2c)^2\\) and \\(d^2 = d^2\\), so \\(A = 2c\\) and \\(B = d\\), giving \\((2c - d)(2c + d)\\).",
        hints: [
          "Write each term as something squared: \\(4c^2 = (\\,?\\,)^2\\).",
          "This is \\(A^2 - B^2\\) with \\(A = 2c\\) and \\(B = d\\).",
          "Apply \\(A^2 - B^2 = (A - B)(A + B)\\).",
        ],
      },
    },
    {
      id: "a2-c4",
      title: "Factor first, then look again",
      concept:
        "Always take out the common factor before anything else — it often reveals a difference of two squares hiding inside. For \\(3x^2 - 75\\), pull out \\(3\\) to get \\(3(x^2 - 25)\\); now \\(x^2 - 25\\) is a difference of two squares, giving \\(3(x - 5)(x + 5)\\). \"Factorise completely\" means keep going until nothing inside any bracket factorises further.",
      miniQuestion: {
        prompt: "Factorise completely \\(2(25x^2 - 9y^2)\\) — already \\(2\\) has been taken out; finish the bracket.",
        expectedAnswer: "\\(2(5x - 3y)(5x + 3y)\\)",
        options: [
          "\\(2(5x - 3y)^2\\)",
          "\\(2(25x - 9y)(x + y)\\)",
          "\\(2(5x - 3y)(5x + 3y)\\)",
          "\\((5x - 3y)(5x + 3y)\\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "Inside the bracket, \\(25x^2 = (5x)^2\\) and \\(9y^2 = (3y)^2\\), so it is a difference of two squares: \\((5x - 3y)(5x + 3y)\\). The \\(2\\) stays out front.",
        hints: [
          "Look only at \\(25x^2 - 9y^2\\): is each term a perfect square?",
          "\\(25x^2 = (5x)^2\\) and \\(9y^2 = (3y)^2\\).",
          "Apply the difference of two squares, keeping the \\(2\\) outside.",
        ],
      },
    },
    {
      id: "a2-c5",
      title: "A whole bracket can be the common factor",
      concept:
        "The shared factor need not be a single term — it can be an entire bracket. In \\(x(x - 4) - 3(x - 4)\\), both parts contain \\((x - 4)\\), so factor it out: \\((x - 4)(x - 3)\\). The same idea drives grouping: \\(ac + ad + bc + bd = a(c + d) + b(c + d) = (c + d)(a + b)\\).",
      miniQuestion: {
        prompt: "Factorise \\(x(y + 5) - 2(y + 5)\\).",
        expectedAnswer: "\\((y + 5)(x - 2)\\)",
        options: [
          "\\((y + 5)(x + 2)\\)",
          "\\((y + 5)(x - 2)\\)",
          "\\((y - 5)(x - 2)\\)",
          "\\((x + 5)(y - 2)\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Both terms share the bracket \\((y + 5)\\). Taking it out leaves \\(x - 2\\) from the two coefficients, so the answer is \\((y + 5)(x - 2)\\).",
        hints: [
          "What identical bracket appears in both terms?",
          "Treat \\((y + 5)\\) like a single common factor and pull it out.",
          "What is left behind is \\(x\\) from the first term and \\(-2\\) from the second.",
        ],
      },
    },
  ],
};
