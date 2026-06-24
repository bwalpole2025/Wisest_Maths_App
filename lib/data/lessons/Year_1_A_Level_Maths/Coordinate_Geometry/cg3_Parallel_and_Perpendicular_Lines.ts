import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Parallel and Perpendicular Lines
 * Ref:   CG3
 */
export const lesson: Lesson = {
  topicRef: "CG3",
  title: "Parallel and Perpendicular Lines",
  intro:
    "Whether two lines run side by side or cross at a right angle is decided entirely by their gradients. Master the two gradient rules and the geometry follows.",
  cards: [
    {
      id: "CG3-c1",
      title: "Parallel means equal gradients",
      concept:
        "Two lines are parallel exactly when they have the same gradient, \\(m_1 = m_2\\) (with different intercepts). To compare, rearrange each into \\(y = mx + c\\) first. For example \\(2y = 8x + 5\\) becomes \\(y = 4x + 2.5\\), so its gradient is \\(4\\) — parallel to \\(y = 4x - 3\\).",
      miniQuestion: {
        prompt: "Is the line \\(4y = x\\) parallel to \\(y = 4x - 3\\)?",
        expectedAnswer: "No",
        options: ["Yes", "No", "Only if they share a point", "They are perpendicular"],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Dividing by \\(4\\) gives \\(y = \\tfrac{1}{4}x\\), gradient \\(\\tfrac{1}{4}\\), not \\(4\\). \\(4y = x\\) is not the same as \\(y = 4x\\) — rearrange before reading the gradient.",
        hints: [
          "Rearrange \\(4y = x\\) into \\(y = mx + c\\).",
          "Dividing both sides by \\(4\\) gives gradient \\(\\tfrac{1}{4}\\), not \\(4\\).",
        ],
      },
    },
    {
      id: "CG3-c2",
      title: "Perpendicular means product −1",
      concept:
        "Two lines are perpendicular when the product of their gradients is \\(-1\\), i.e. \\(m_1 \\times m_2 = -1\\). Equivalently, each gradient is the negative reciprocal of the other. The line \\(y = 2x + 4\\) and \\(y = -\\tfrac{1}{2}x + 1\\) are perpendicular because \\(2 \\times (-\\tfrac{1}{2}) = -1\\).",
      miniQuestion: {
        prompt: "What is the product of the gradients of two perpendicular lines?",
        expectedAnswer: "\\(-1\\)",
        options: ["\\(0\\)", "\\(-1\\)", "\\(1\\)", "\\(-2\\)"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "Perpendicular gradients always multiply to \\(-1\\). That single condition is what makes the lines meet at a right angle.",
        hints: [
          "Recall the perpendicularity condition \\(m_1 \\times m_2 = ?\\)",
          "It is the same for every pair of perpendicular lines.",
        ],
      },
    },
    {
      id: "CG3-c3",
      title: "The negative reciprocal",
      concept:
        "To get a perpendicular gradient, flip the fraction and change the sign — that is the negative reciprocal. The negative reciprocal of \\(2\\) is \\(-\\tfrac{1}{2}\\); of \\(-\\tfrac{2}{5}\\) it is \\(\\tfrac{5}{2}\\). Just swapping the sign is not enough: \\(5\\) and \\(-5\\) are not perpendicular because \\(5 \\times (-5) = -25\\).",
      miniQuestion: {
        prompt: "What gradient is perpendicular to a line of gradient \\(-\\dfrac{1}{3}\\)?",
        expectedAnswer: "\\(3\\)",
        options: ["\\(-3\\)", "\\(\\tfrac{1}{3}\\)", "\\(3\\)", "\\(-\\tfrac{1}{3}\\)"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "Flip \\(-\\tfrac{1}{3}\\) to \\(-3\\) then change the sign to \\(3\\); check \\(-\\tfrac{1}{3} \\times 3 = -1\\). Flipping and sign-swapping together is what works.",
        hints: [
          "Take the negative reciprocal: flip the fraction and swap the sign.",
          "The reciprocal of \\(-\\tfrac{1}{3}\\) is \\(-3\\); now change its sign.",
        ],
      },
    },
    {
      id: "CG3-c4",
      title: "Building a perpendicular line",
      concept:
        "To find a perpendicular line through a point: take the negative reciprocal gradient, then substitute the point into \\(y = mx + c\\) to find \\(c\\). Perpendicular to \\(y = 2x - 1\\) through \\((4, 3)\\): gradient \\(-\\tfrac{1}{2}\\), so \\(3 = -\\tfrac{1}{2}(4) + c\\) gives \\(c = 5\\), and \\(y = -\\tfrac{1}{2}x + 5\\).",
      miniQuestion: {
        prompt:
          "Find \\(c\\) for the line of gradient \\(-\\dfrac{1}{2}\\) passing through \\((4, 3)\\).",
        expectedAnswer: "\\(5\\)",
        options: ["\\(5\\)", "\\(1\\)", "\\(-5\\)", "\\(11\\)"],
        correctIndex: 0,
        answerType: "numeric",
        insight:
          "\\(3 = -\\tfrac{1}{2}(4) + c = -2 + c\\), so \\(c = 5\\). The point must satisfy the equation, which fixes the intercept.",
        hints: [
          "Substitute \\(x = 4\\), \\(y = 3\\) into \\(y = -\\tfrac{1}{2}x + c\\).",
          "\\(-\\tfrac{1}{2} \\times 4 = -2\\), so solve \\(3 = -2 + c\\).",
        ],
      },
    },
  ],
};
