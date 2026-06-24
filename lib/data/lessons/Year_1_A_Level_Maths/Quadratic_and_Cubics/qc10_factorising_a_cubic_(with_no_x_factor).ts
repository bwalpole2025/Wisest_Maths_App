import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Factorising a Cubic (No x Factor)
 * Ref:   qc10
 */
export const lesson: Lesson = {
  topicRef: "qc10",
  title: "Factorising a Cubic (No x Factor)",
  intro:
    "When a cubic has a constant term, you can't just pull out an \\(x\\). Instead the Factor Theorem finds the first factor, and dividing leaves a quadratic you can finish off.",
  cards: [
    {
      id: "qc10-c1",
      title: "Find one root by trial",
      concept:
        "With a constant term present, test small values \\(\\pm 1, \\pm 2, \\pm 3, \\dots\\) (factors of the constant) until \\(f(a) = 0\\). For \\(f(x) = x^3 + 4x^2 - 7x - 10\\), try values until one gives zero.",
      miniQuestion: {
        prompt: "For \\(f(x) = x^3 + 4x^2 - 7x - 10\\), evaluate \\(f(-1)\\).",
        expectedAnswer: "0",
        options: ["-12", "0", "-14", "2"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "\\(f(-1) = -1 + 4 + 7 - 10 = 0\\), so \\((x + 1)\\) is a factor. Testing the divisors of the constant term \\(-10\\) is how you find that first root.",
        hints: [
          "Substitute \\(x = -1\\) into each term.",
          "Compute \\((-1)^3 + 4(-1)^2 - 7(-1) - 10\\).",
        ],
      },
    },
    {
      id: "qc10-c2",
      title: "Reduce to a quadratic",
      concept:
        "Once \\((x - a)\\) is known, divide the cubic by it (or compare coefficients) to get a quadratic. A cubic always factors as \\((\\text{linear}) \\times (\\text{quadratic})\\). Dividing \\(x^3 + 4x^2 - 7x - 10\\) by \\((x + 1)\\) gives \\(x^2 + 3x - 10\\).",
      miniQuestion: {
        prompt: "Dividing \\(x^3 + 4x^2 - 7x - 10\\) by \\((x + 1)\\) gives which quadratic?",
        expectedAnswer: "\\(x^2 + 3x - 10\\)",
        options: [
          "\\(x^2 + 5x - 2\\)",
          "\\(x^2 + 3x - 10\\)",
          "\\(x^2 + 4x - 10\\)",
          "\\(x^2 + 3x + 10\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "\\(x^3 + 4x^2 - 7x - 10 = (x + 1)(x^2 + 3x - 10)\\). The leading term \\(x^2\\) and constant \\(-10\\) follow from matching the cubic's ends.",
        hints: [
          "The quadratic starts with \\(x^2\\) and its constant times \\(1\\) gives \\(-10\\).",
          "Check: \\((x+1)(x^2 + 3x - 10)\\) should expand back to the cubic.",
        ],
      },
    },
    {
      id: "qc10-c3",
      title: "Factorise the quadratic",
      concept:
        "Finish by factorising that quadratic the usual way. \\(x^2 + 3x - 10\\) needs a pair multiplying to \\(-10\\) and adding to \\(3\\): that's \\(5\\) and \\(-2\\), giving \\((x + 5)(x - 2)\\).",
      miniQuestion: {
        prompt: "Fully factorise \\(x^3 + 4x^2 - 7x - 10\\).",
        expectedAnswer: "\\((x + 1)(x - 2)(x + 5)\\)",
        options: [
          "\\((x + 1)(x + 2)(x - 5)\\)",
          "\\((x - 1)(x - 2)(x + 5)\\)",
          "\\((x + 1)(x - 2)(x + 5)\\)",
          "\\((x + 1)(x + 2)(x + 5)\\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "\\(x^2 + 3x - 10 = (x - 2)(x + 5)\\), so the full factorisation is \\((x + 1)(x - 2)(x + 5)\\) — three linear factors.",
        hints: [
          "Factorise \\(x^2 + 3x - 10\\): pair multiplying to \\(-10\\), adding to \\(3\\).",
          "Combine with the first factor \\((x + 1)\\).",
        ],
      },
    },
    {
      id: "qc10-c4",
      title: "Reading off all three roots",
      concept:
        "A fully factorised cubic set to zero gives all its roots at once. With \\((x + 1)(x - 2)(x + 5) = 0\\), each bracket contributes one root by the zero-product rule.",
      miniQuestion: {
        prompt: "Solve \\((x + 1)(x - 2)(x + 5) = 0\\).",
        expectedAnswer: "\\(x = -1, \\; x = 2, \\; x = -5\\)",
        options: [
          "\\(x = 1, \\; x = -2, \\; x = 5\\)",
          "\\(x = -1, \\; x = 2, \\; x = -5\\)",
          "\\(x = -1, \\; x = -2, \\; x = -5\\)",
          "\\(x = 1, \\; x = 2, \\; x = 5\\)",
        ],
        correctIndex: 1,
        answerType: "equationRoots",
        insight:
          "Setting each factor to zero: \\(x = -1\\), \\(x = 2\\), \\(x = -5\\). A cubic has up to three real roots, one from each linear factor.",
        hints: [
          "Set each of the three brackets equal to zero.",
          "Solve \\(x + 1 = 0\\), \\(x - 2 = 0\\), \\(x + 5 = 0\\).",
        ],
      },
    },
  ],
};
