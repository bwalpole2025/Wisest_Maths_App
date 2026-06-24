import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Definite Integration
 * Ref:   i2
 */
export const lesson: Lesson = {
  topicRef: "i2",
  title: "Definite Integration",
  intro:
    "A definite integral has limits and gives a number, not an expression. It is the engine for finding areas under curves — but the numbers can be negative, and that hides a trap worth knowing.",
  cards: [
    {
      id: "i2-c1",
      title: "Limits turn integrals into numbers",
      concept:
        "A definite integral \\(\\int_a^b f(x)\\, dx\\) is evaluated as \\(F(b) - F(a)\\): integrate to get \\(F(x)\\), substitute the top limit, substitute the bottom limit, and subtract. The result is a single number.",
      miniQuestion: {
        prompt: "Evaluate \\(\\int_1^3 (2x + 5)\\, dx\\).",
        expectedAnswer: "\\(18\\)",
        options: ["\\(24\\)", "\\(18\\)", "\\(30\\)", "\\(8\\)"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "Integrate to \\(x^2 + 5x\\). Upper: \\(9 + 15 = 24\\); lower: \\(1 + 5 = 6\\). Then \\(24 - 6 = 18\\). Always subtract the lower value from the upper.",
        hints: [
          "Integrate first to get \\(x^2 + 5x\\).",
          "Work out the value at \\(x = 3\\), then at \\(x = 1\\), and subtract.",
        ],
      },
    },
    {
      id: "i2-c2",
      title: "Why there is no +c",
      concept:
        "A definite integral needs no constant of integration. If you wrote \\(F(x) + c\\), the subtraction would give \\((F(b) + c) - (F(a) + c)\\), and the \\(c\\)s cancel exactly. So the \\(+c\\) can never affect a definite integral — leave it out.",
      miniQuestion: {
        prompt: "Evaluate \\(\\int_0^2 (3x^2 - 4x + 1)\\, dx\\).",
        expectedAnswer: "\\(2\\)",
        options: ["\\(6\\)", "\\(-2\\)", "\\(2\\)", "\\(10\\)"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "Integrate to \\(x^3 - 2x^2 + x\\). At \\(x = 2\\): \\(8 - 8 + 2 = 2\\); at \\(x = 0\\): \\(0\\). So \\(2 - 0 = 2\\). No \\(+c\\) is needed because it would cancel anyway.",
        hints: [
          "Integrate term by term — but don't write \\(+c\\).",
          "Substitute \\(x = 2\\) and \\(x = 0\\), then subtract.",
        ],
      },
    },
    {
      id: "i2-c3",
      title: "Area under a curve",
      concept:
        "For a curve lying above the \\(x\\)-axis between \\(x = a\\) and \\(x = b\\), the area enclosed by the curve, the axis and those lines is exactly \\(\\int_a^b y\\, dx\\). The definite integral measures signed area, and above the axis that signed area is positive.",
      miniQuestion: {
        prompt:
          "Find the area between \\(y = x^2\\), the \\(x\\)-axis and the lines \\(x = 0\\) and \\(x = 3\\).",
        expectedAnswer: "\\(9\\)",
        options: ["\\(27\\)", "\\(6\\)", "\\(9\\)", "\\(3\\)"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "Area \\(= \\int_0^3 x^2\\, dx = \\left[\\dfrac{x^3}{3}\\right]_0^3 = 9 - 0 = 9\\). Above the axis, the integral and the area are the same thing.",
        hints: [
          "The area is \\(\\int_0^3 x^2\\, dx\\).",
          "Integrate to \\(\\dfrac{x^3}{3}\\), then evaluate from \\(0\\) to \\(3\\).",
        ],
      },
    },
    {
      id: "i2-c4",
      title: "When the curve dips below the axis",
      concept:
        "Where a curve is below the \\(x\\)-axis the integral comes out negative — a signed area. For a true geometric area you must integrate each region separately and take the size (modulus) of any negative part before adding. Integrating straight across a root would let the parts cancel and undercount the area.",
      miniQuestion: {
        prompt:
          "The curve \\(y = (x-1)(x-3)\\) lies below the \\(x\\)-axis for \\(1 \\le x \\le 3\\). Find the area it encloses with the \\(x\\)-axis.",
        expectedAnswer: "\\(\\dfrac{4}{3}\\)",
        options: [
          "\\(-\\dfrac{4}{3}\\)",
          "\\(\\dfrac{8}{3}\\)",
          "\\(\\dfrac{4}{3}\\)",
          "\\(\\dfrac{2}{3}\\)",
        ],
        correctIndex: 2,
        answerType: "exactValue",
        insight:
          "\\(\\int_1^3 (x^2 - 4x + 3)\\, dx = -\\dfrac{4}{3}\\). The integral is negative because the region is below the axis; the area is its size, \\(\\dfrac{4}{3}\\).",
        hints: [
          "Expand to \\(x^2 - 4x + 3\\) and integrate from \\(1\\) to \\(3\\).",
          "The integral comes out negative — take its modulus for the area.",
        ],
      },
    },
    {
      id: "i2-c5",
      title: "Finding an unknown limit",
      concept:
        "If a definite integral is given a target value but a limit is unknown, integrate, substitute the limits to get an expression in the unknown, set it equal to the target, and solve. This turns an integral into an ordinary equation.",
      miniQuestion: {
        prompt:
          "Given \\(\\int_0^a (4x + 3)\\, dx = 22\\) with \\(a > 0\\), find \\(a\\).",
        expectedAnswer: "\\(a = 2\\)",
        options: [
          "\\(a = 2\\)",
          "\\(a = -\\dfrac{11}{2}\\)",
          "\\(a = 4\\)",
          "\\(a = \\dfrac{11}{2}\\)",
        ],
        correctIndex: 0,
        answerType: "numeric",
        insight:
          "Integrate to \\(2x^2 + 3x\\). At \\(x = a\\): \\(2a^2 + 3a\\); at \\(0\\): \\(0\\). So \\(2a^2 + 3a = 22\\), giving \\(2a^2 + 3a - 22 = 0 = (2a + 11)(a - 2)\\). Since \\(a > 0\\), \\(a = 2\\).",
        hints: [
          "Integrate to \\(2x^2 + 3x\\) and substitute the limits \\(0\\) and \\(a\\).",
          "Set \\(2a^2 + 3a = 22\\) and solve the quadratic, keeping \\(a > 0\\).",
        ],
      },
    },
  ],
};
