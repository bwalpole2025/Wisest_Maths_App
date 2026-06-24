import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Equations of Straight Lines
 * Ref:   CG1
 */
export const lesson: Lesson = {
  topicRef: "CG1",
  title: "Equations of Straight Lines",
  intro:
    "Every straight line carries two pieces of information — how steep it is and where it crosses the \\(y\\)-axis. Learn to read those off an equation, and to build the equation back up from points.",
  cards: [
    {
      id: "CG1-c1",
      title: "Reading m and c",
      concept:
        "Any line written as \\(y = mx + c\\) tells you everything at a glance: \\(m\\) is the gradient (the coefficient of \\(x\\)) and \\(c\\) is the \\(y\\)-intercept (the constant). For \\(y = 3x - 7\\), the gradient is \\(3\\) and the line crosses the \\(y\\)-axis at \\((0, -7)\\).",
      miniQuestion: {
        prompt: "What is the gradient of the line \\(y = -2x + 5\\)?",
        expectedAnswer: "\\(-2\\)",
        options: ["\\(-2\\)", "\\(2\\)", "\\(5\\)", "\\(-\\tfrac{1}{2}\\)"],
        correctIndex: 0,
        answerType: "numeric",
        insight:
          "The gradient is the number multiplying \\(x\\), sign included — here \\(-2\\), so the line slopes downward.",
        hints: [
          "Compare the equation with \\(y = mx + c\\).",
          "Which number is multiplying \\(x\\)? Keep its sign.",
        ],
      },
    },
    {
      id: "CG1-c2",
      title: "Building the equation",
      concept:
        "If you already know the gradient and \\(y\\)-intercept, you just slot them in. A line with gradient \\(4\\) and \\(y\\)-intercept \\((0, -1)\\) is \\(y = 4x - 1\\). The \\(y\\)-intercept is given as a point, but only its \\(y\\)-value becomes \\(c\\).",
      miniQuestion: {
        prompt:
          "Write the equation of the line with gradient \\(0.5\\) and \\(y\\)-intercept \\((0, -3)\\), in the form \\(y = mx + c\\).",
        expectedAnswer: "\\(y = 0.5x - 3\\)",
        options: ["\\(y = -3x + 0.5\\)", "\\(y = 0.5x - 3\\)", "\\(y = 0.5x + 3\\)", "\\(y = 3x - 0.5\\)"],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Substituting \\(m = 0.5\\) and \\(c = -3\\) directly gives \\(y = 0.5x - 3\\). Only the \\(y\\)-coordinate of the intercept becomes \\(c\\).",
        hints: [
          "Put \\(m = 0.5\\) and \\(c = -3\\) into \\(y = mx + c\\).",
          "The intercept \\((0, -3)\\) contributes the value \\(-3\\) as \\(c\\).",
        ],
      },
    },
    {
      id: "CG1-c3",
      title: "Gradient from two points",
      concept:
        "Given two points, the gradient is the change in \\(y\\) over the change in \\(x\\): \\(m = \\dfrac{y_2 - y_1}{x_2 - x_1}\\). Subtract the coordinates in the same order top and bottom. For \\((2, 5)\\) and \\((6, 13)\\): \\(m = \\dfrac{13 - 5}{6 - 2} = \\dfrac{8}{4} = 2\\).",
      miniQuestion: {
        prompt: "Find the gradient of the line through \\((1, 7)\\) and \\((4, 1)\\).",
        expectedAnswer: "\\(-2\\)",
        options: ["\\(2\\)", "\\(-\\tfrac{1}{2}\\)", "\\(-2\\)", "\\(\\tfrac{1}{2}\\)"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "\\(\\dfrac{1 - 7}{4 - 1} = \\dfrac{-6}{3} = -2\\). The \\(y\\)-values dropped, so the gradient is negative.",
        hints: [
          "Use \\(m = \\dfrac{y_2 - y_1}{x_2 - x_1}\\).",
          "Keep the points in the same order top and bottom: \\(\\dfrac{1 - 7}{4 - 1}\\).",
        ],
      },
    },
    {
      id: "CG1-c4",
      title: "The full equation through two points",
      concept:
        "Once you have the gradient, find \\(c\\) by substituting one point into \\(y = mx + c\\). For \\((-2, 3)\\) and \\((4, 15)\\): \\(m = \\dfrac{15 - 3}{4 - (-2)} = \\dfrac{12}{6} = 2\\). Then \\(15 = 2(4) + c\\) gives \\(c = 7\\), so \\(y = 2x + 7\\). Either point gives the same \\(c\\).",
      miniQuestion: {
        prompt:
          "A line has gradient \\(2\\) and passes through \\((4, 15)\\). Find \\(c\\) in \\(y = 2x + c\\).",
        expectedAnswer: "\\(7\\)",
        options: ["\\(23\\)", "\\(15\\)", "\\(-7\\)", "\\(7\\)"],
        correctIndex: 3,
        answerType: "numeric",
        insight:
          "Substituting gives \\(15 = 2(4) + c = 8 + c\\), so \\(c = 7\\). The point must satisfy the equation, which pins down \\(c\\).",
        hints: [
          "Put \\(x = 4\\), \\(y = 15\\) into \\(y = 2x + c\\).",
          "Solve \\(15 = 8 + c\\).",
        ],
      },
    },
  ],
};
