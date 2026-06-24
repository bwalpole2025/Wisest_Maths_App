import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Algebraic Fractions
 * Ref:   a3
 */
export const lesson: Lesson = {
  topicRef: "a3",
  title: "Algebraic Fractions",
  intro:
    "Algebraic fractions obey exactly the same rules as number fractions — you just have to factorise before you can cancel, and find a common denominator before you can add.",
  cards: [
    {
      id: "a3-c1",
      title: "Cancel only common factors",
      concept:
        "You can cancel a fraction only when the same thing multiplies the *whole* top and the *whole* bottom. So factorise first, then cancel. For \\(\\frac{2x + 10}{6}\\), factor the top: \\(\\frac{2(x + 5)}{6}\\); now the factor \\(2\\) cancels, leaving \\(\\frac{x + 5}{3}\\). You cannot cancel the \\(x\\) or the \\(10\\) on their own — they are not factors of the whole numerator.",
      miniQuestion: {
        prompt: "Simplify \\(\\frac{15m - 10}{5}\\).",
        expectedAnswer: "\\(3m - 2\\)",
        options: ["\\(3m - 2\\)", "\\(3m - 10\\)", "\\(15m - 2\\)", "\\(3m + 2\\)"],
        correctIndex: 0,
        answerType: "expression",
        insight:
          "Factor the top as \\(5(3m - 2)\\); the \\(5\\) cancels the \\(5\\) on the bottom, leaving \\(3m - 2\\).",
        hints: [
          "What is the highest common factor of \\(15m\\) and \\(10\\)?",
          "Write the numerator as \\(5(\\dots)\\) first.",
          "Cancel the \\(5\\) on top with the \\(5\\) on the bottom.",
        ],
      },
    },
    {
      id: "a3-c2",
      title: "Factorise to unlock the cancelling",
      concept:
        "With quadratics or a difference of two squares, factorise top and bottom into brackets, then cancel any bracket they share. For \\(\\frac{y^2 - 9}{y + 3}\\), the top is \\((y - 3)(y + 3)\\), so \\(\\frac{(y - 3)(y + 3)}{y + 3} = y - 3\\). The matching \\((y + 3)\\) brackets cancel.",
      miniQuestion: {
        prompt: "Simplify \\(\\frac{x^2 + 7x + 10}{x + 5}\\).",
        expectedAnswer: "\\(x + 2\\)",
        options: ["\\(x + 5\\)", "\\(x + 2\\)", "\\(x + 10\\)", "\\(x - 2\\)"],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "The numerator factorises as \\((x + 2)(x + 5)\\); cancelling the common \\((x + 5)\\) leaves \\(x + 2\\).",
        hints: [
          "Factorise the quadratic on top into two brackets.",
          "You need two numbers that multiply to \\(10\\) and add to \\(7\\).",
          "That gives \\((x + 2)(x + 5)\\); now cancel \\((x + 5)\\).",
        ],
      },
    },
    {
      id: "a3-c3",
      title: "A common denominator to add",
      concept:
        "To add or subtract fractions you need a common denominator. With unlike denominators, multiply them together: for \\(\\frac{x}{3} + \\frac{x}{4}\\) the common denominator is \\(12\\), giving \\(\\frac{4x}{12} + \\frac{3x}{12} = \\frac{7x}{12}\\). Whatever you multiply the bottom by, you must multiply the top by too, so the value is unchanged.",
      miniQuestion: {
        prompt: "Write as a single fraction: \\(\\frac{x}{2} + \\frac{x}{3}\\).",
        expectedAnswer: "\\(\\frac{5x}{6}\\)",
        options: [
          "\\(\\frac{2x}{5}\\)",
          "\\(\\frac{x^2}{6}\\)",
          "\\(\\frac{5x}{6}\\)",
          "\\(\\frac{5x}{5}\\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "The common denominator is \\(6\\): \\(\\frac{3x}{6} + \\frac{2x}{6} = \\frac{5x}{6}\\). Each numerator scales up by the same factor as its denominator.",
        hints: [
          "What is the lowest common denominator of \\(2\\) and \\(3\\)?",
          "Rewrite each fraction over \\(6\\): \\(\\frac{x}{2} = \\frac{3x}{6}\\).",
          "Now add the numerators: \\(3x + 2x\\).",
        ],
      },
    },
    {
      id: "a3-c4",
      title: "Mind the minus sign",
      concept:
        "When subtracting, the second numerator is multiplied by everything — including the minus. For \\(\\frac{5}{x+1} - \\frac{2}{x-2}\\), over the common denominator \\((x+1)(x-2)\\) the top is \\(5(x-2) - 2(x+1) = 5x - 10 - 2x - 2 = 3x - 12\\). The \\(-2(x+1)\\) gives \\(-2x - 2\\), not \\(-2x + 2\\): the minus distributes across both terms.",
      miniQuestion: {
        prompt: "Express as a single fraction: \\(\\frac{8}{p} - \\frac{1}{p-3}\\).",
        expectedAnswer: "\\(\\frac{7p - 24}{p(p-3)}\\)",
        options: [
          "\\(\\frac{9p - 24}{p(p-3)}\\)",
          "\\(\\frac{7p - 24}{p(p-3)}\\)",
          "\\(\\frac{7p + 24}{p(p-3)}\\)",
          "\\(\\frac{7}{p(p-3)}\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Over \\(p(p-3)\\) the numerator is \\(8(p-3) - p = 8p - 24 - p = 7p - 24\\). The single subtracted \\(p\\) is what turns \\(8p\\) into \\(7p\\).",
        hints: [
          "The common denominator is \\(p(p-3)\\).",
          "The numerator becomes \\(8(p-3) - 1 \\times p\\).",
          "Expand \\(8(p-3) = 8p - 24\\), then subtract \\(p\\).",
        ],
      },
    },
    {
      id: "a3-c5",
      title: "Multiply and divide",
      concept:
        "To multiply fractions, multiply tops and multiply bottoms, then cancel. To divide, flip the second fraction and multiply. For \\(\\frac{3a}{b} \\div \\frac{6a^2}{b^2}\\), flip to \\(\\frac{3a}{b} \\times \\frac{b^2}{6a^2} = \\frac{3ab^2}{6a^2b}\\), then cancel to \\(\\frac{b}{2a}\\). Factorising before multiplying lets you cancel across the two fractions early.",
      miniQuestion: {
        prompt: "Simplify \\(\\frac{2x}{3} \\times \\frac{5}{4x}\\).",
        expectedAnswer: "\\(\\frac{5}{6}\\)",
        options: [
          "\\(\\frac{10x}{12}\\)",
          "\\(\\frac{5x}{6}\\)",
          "\\(\\frac{5}{6}\\)",
          "\\(\\frac{7}{12}\\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "Multiplying gives \\(\\frac{10x}{12x}\\); the \\(x\\) cancels and \\(\\frac{10}{12}\\) simplifies to \\(\\frac{5}{6}\\).",
        hints: [
          "Multiply the numerators together and the denominators together.",
          "That gives \\(\\frac{10x}{12x}\\).",
          "Cancel the \\(x\\), then simplify the number fraction.",
        ],
      },
    },
  ],
};
