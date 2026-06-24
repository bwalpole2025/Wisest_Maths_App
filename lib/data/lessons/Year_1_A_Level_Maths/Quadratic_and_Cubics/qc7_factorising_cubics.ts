import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Factorising Cubics
 * Ref:   qc7
 */
export const lesson: Lesson = {
  topicRef: "qc7",
  title: "Factorising Cubics",
  intro:
    "When every term of a cubic contains an \\(x\\), the hardest step is the easiest: pull that \\(x\\) out first. What remains is a quadratic you can factorise with familiar methods.",
  cards: [
    {
      id: "qc7-c1",
      title: "Take out the common factor of x",
      concept:
        "If a cubic has no constant term, every term shares at least one \\(x\\). Factor it out: \\(x^3 + 7x^2 + 10x = x(x^2 + 7x + 10)\\). This drops the degree from three to two.",
      miniQuestion: {
        prompt: "Take out the common factor: \\(x^3 + 7x^2 + 10x\\).",
        expectedAnswer: "\\(x(x^2 + 7x + 10)\\)",
        options: [
          "\\(x(x^2 + 7x + 10)\\)",
          "\\(x(x^2 + 7x)\\)",
          "\\(x^2(x + 7 + 10)\\)",
          "\\(x(x^3 + 7x^2 + 10x)\\)",
        ],
        correctIndex: 0,
        answerType: "expression",
        insight:
          "Each term has an \\(x\\), so \\(x^3 + 7x^2 + 10x = x(x^2 + 7x + 10)\\). Removing the common \\(x\\) leaves an ordinary quadratic.",
        hints: [
          "Is there an \\(x\\) in every term?",
          "Divide each term by \\(x\\) and write \\(x(\\dots)\\).",
        ],
      },
    },
    {
      id: "qc7-c2",
      title: "Factorise the quadratic that remains",
      concept:
        "After removing \\(x\\), factorise the quadratic as usual. From \\(x(x^2 + 7x + 10)\\), the quadratic \\(x^2 + 7x + 10\\) needs a pair multiplying to \\(10\\) and adding to \\(7\\): namely \\(2\\) and \\(5\\).",
      miniQuestion: {
        prompt: "Fully factorise \\(x^3 + 7x^2 + 10x\\).",
        expectedAnswer: "\\(x(x + 2)(x + 5)\\)",
        options: [
          "\\((x + 2)(x + 5)\\)",
          "\\(x(x - 2)(x - 5)\\)",
          "\\(x(x + 2)(x + 5)\\)",
          "\\(x(x + 1)(x + 10)\\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "After taking out \\(x\\), \\(x^2 + 7x + 10 = (x+2)(x+5)\\), so the full factorisation is \\(x(x+2)(x+5)\\) — three linear factors.",
        hints: [
          "Start from \\(x(x^2 + 7x + 10)\\).",
          "Factorise the quadratic: pair multiplying to 10, adding to 7.",
        ],
      },
    },
    {
      id: "qc7-c3",
      title: "Watch for a numerical factor too",
      concept:
        "Sometimes a number divides every term as well. \\(2x^3 + 10x^2 + 12x\\) shares both a \\(2\\) and an \\(x\\), so factor out \\(2x\\) first: \\(2x(x^2 + 5x + 6)\\). Always pull out the full common factor before factorising what's left.",
      miniQuestion: {
        prompt: "Fully factorise \\(2x^3 + 10x^2 + 12x\\).",
        expectedAnswer: "\\(2x(x + 2)(x + 3)\\)",
        options: [
          "\\(x(x + 2)(x + 3)\\)",
          "\\(2x(x + 2)(x + 3)\\)",
          "\\(2x(x + 1)(x + 6)\\)",
          "\\(2x(x - 2)(x - 3)\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "The common factor is \\(2x\\): \\(2x(x^2 + 5x + 6) = 2x(x+2)(x+3)\\). Missing the numerical part leaves the factorisation incomplete.",
        hints: [
          "What number, as well as \\(x\\), divides every term?",
          "Factor out \\(2x\\), then factorise \\(x^2 + 5x + 6\\).",
        ],
      },
    },
    {
      id: "qc7-c4",
      title: "From factors to roots",
      concept:
        "A factorised cubic set to zero gives its roots by the zero-product rule — including \\(x = 0\\) from the factor \\(x\\). So \\(x(x+2)(x+5) = 0\\) has three roots, one of them at the origin.",
      miniQuestion: {
        prompt: "Solve \\(x(x - 5)(x + 2) = 0\\).",
        expectedAnswer: "\\(x = 0, \\; x = 5, \\; x = -2\\)",
        options: [
          "\\(x = 5, \\; x = -2\\)",
          "\\(x = 0, \\; x = -5, \\; x = 2\\)",
          "\\(x = 0, \\; x = 5, \\; x = -2\\)",
          "\\(x = 0, \\; x = 5, \\; x = 2\\)",
        ],
        correctIndex: 2,
        answerType: "equationRoots",
        insight:
          "Each factor gives a root: \\(x = 0\\), \\(x - 5 = 0\\) so \\(x = 5\\), and \\(x + 2 = 0\\) so \\(x = -2\\). The factored-out \\(x\\) is itself a root.",
        hints: [
          "Set each of the three factors equal to zero.",
          "Don't forget the factor \\(x\\) gives the root \\(x = 0\\).",
        ],
      },
    },
  ],
};
