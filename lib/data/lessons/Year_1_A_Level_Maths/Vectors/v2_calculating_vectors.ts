import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Calculating with Vectors
 * Ref:   v2
 */
export const lesson: Lesson = {
  topicRef: "v2",
  title: "Calculating with Vectors",
  intro:
    "Once a vector is in component form you can measure it. This lesson covers magnitude by Pythagoras, unit vectors, the direction angle (with quadrant care), and finding the angle between two vectors.",
  cards: [
    {
      id: "v2-c1",
      title: "Magnitude by Pythagoras",
      concept:
        "The magnitude of \\(x\\mathbf{i} + y\\mathbf{j}\\) is the length of the arrow it represents. By Pythagoras on the component triangle, \\(|x\\mathbf{i} + y\\mathbf{j}| = \\sqrt{x^2 + y^2}\\). Squaring removes any minus signs, so the signs of the components never change the magnitude. Look out for Pythagorean triples like \\((3,4,5)\\) and \\((5,12,13)\\) to skip arithmetic.",
      miniQuestion: {
        prompt: "Find the magnitude of \\(5\\mathbf{i} + 12\\mathbf{j}\\).",
        expectedAnswer: "13",
        options: ["17", "13", "169", "7"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "\\(\\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13\\). The \\((5,12,13)\\) triple gives a whole-number answer with no rounding.",
        hints: [
          "Use \\(\\sqrt{x^2 + y^2}\\).",
          "What is \\(25 + 144\\), and what is its square root?",
        ],
      },
    },
    {
      id: "v2-c2",
      title: "Negative components don't change length",
      concept:
        "A common slip is to think a negative component shortens a vector. It doesn't: \\((-3)^2 = +9\\), so the minus sign vanishes under the square. The vector \\(\\begin{pmatrix}-3\\\\4\\end{pmatrix}\\) has exactly the same magnitude as \\(\\begin{pmatrix}3\\\\4\\end{pmatrix}\\). Column form uses the same formula — the top entry is \\(x\\), the bottom is \\(y\\).",
      miniQuestion: {
        prompt:
          "Find the magnitude of \\(\\begin{pmatrix}-3\\\\4\\end{pmatrix}\\).",
        expectedAnswer: "5",
        options: ["1", "5", "25", "7"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "\\(\\sqrt{(-3)^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\). The minus disappears when squared — magnitude is always non-negative.",
        hints: [
          "Square each component first; what does \\((-3)^2\\) equal?",
          "This is the \\((3,4,5)\\) triple.",
        ],
      },
    },
    {
      id: "v2-c3",
      title: "Unit vectors",
      concept:
        "A \\textbf{unit vector} has magnitude \\(1\\) and points the same way as the original. To make one, divide a vector by its own length: \\(\\hat{\\mathbf{u}} = \\dfrac{1}{|\\mathbf{u}|}\\mathbf{u}\\). For example, \\(3\\mathbf{i} + 4\\mathbf{j}\\) has magnitude \\(5\\), so its unit vector is \\(\\tfrac{1}{5}(3\\mathbf{i} + 4\\mathbf{j}) = \\tfrac{3}{5}\\mathbf{i} + \\tfrac{4}{5}\\mathbf{j}\\).",
      miniQuestion: {
        prompt:
          "Find the unit vector in the direction of \\(3\\mathbf{i} + 4\\mathbf{j}\\).",
        expectedAnswer: "\\(\\tfrac{3}{5}\\mathbf{i} + \\tfrac{4}{5}\\mathbf{j}\\)",
        options: [
          "\\(\\tfrac{4}{5}\\mathbf{i} + \\tfrac{3}{5}\\mathbf{j}\\)",
          "\\(3\\mathbf{i} + 4\\mathbf{j}\\)",
          "\\(\\tfrac{3}{5}\\mathbf{i} + \\tfrac{4}{5}\\mathbf{j}\\)",
          "\\(\\tfrac{3}{25}\\mathbf{i} + \\tfrac{4}{25}\\mathbf{j}\\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "Its magnitude is \\(\\sqrt{3^2 + 4^2} = 5\\), so dividing through by \\(5\\) gives \\(\\tfrac{3}{5}\\mathbf{i} + \\tfrac{4}{5}\\mathbf{j}\\). Check: \\(\\sqrt{(3/5)^2 + (4/5)^2} = 1\\).",
        hints: [
          "First find the magnitude of \\(3\\mathbf{i} + 4\\mathbf{j}\\).",
          "Divide each component by that magnitude.",
        ],
      },
    },
    {
      id: "v2-c4",
      title: "Direction angle and quadrants",
      concept:
        "The direction of a vector is the angle \\(\\theta\\) measured anticlockwise from the positive \\(x\\)-axis. First find the \\emph{reference angle} \\(\\alpha = \\tan^{-1}(|y|/|x|)\\) from the absolute values, then adjust for the quadrant. A calculator's \\(\\tan^{-1}\\) only returns \\((-90°, 90°)\\), so a vector like \\(-3\\mathbf{i} + 7\\mathbf{j}\\) (second quadrant) needs \\(\\theta = 180° - \\alpha\\).",
      miniQuestion: {
        prompt:
          "For \\(-3\\mathbf{i} + 7\\mathbf{j}\\) the reference angle is \\(66.8°\\). What is the direction angle measured anticlockwise from the positive \\(x\\)-axis?",
        expectedAnswer: "\\(113.2°\\)",
        options: [
          "\\(66.8°\\)",
          "\\(113.2°\\)",
          "\\(246.8°\\)",
          "\\(293.2°\\)",
        ],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "The vector points up and to the left (second quadrant), so \\(\\theta = 180° - 66.8° = 113.2°\\). The reference angle alone would point the wrong way — the quadrant fixes it.",
        hints: [
          "Which quadrant is \\(-3\\mathbf{i} + 7\\mathbf{j}\\) in (negative \\(x\\), positive \\(y\\))?",
          "In the second quadrant, \\(\\theta = 180° - \\alpha\\).",
        ],
      },
    },
    {
      id: "v2-c5",
      title: "Angle between two vectors",
      concept:
        "The angle \\(\\theta\\) between two vectors comes from the scalar (dot) product: \\(\\mathbf{a} \\cdot \\mathbf{b} = a_1 b_1 + a_2 b_2 = |\\mathbf{a}|\\,|\\mathbf{b}|\\cos\\theta\\). Rearrange to \\(\\cos\\theta = \\dfrac{\\mathbf{a} \\cdot \\mathbf{b}}{|\\mathbf{a}|\\,|\\mathbf{b}|}\\). A handy special case: if \\(\\mathbf{a} \\cdot \\mathbf{b} = 0\\) the vectors are perpendicular.",
      miniQuestion: {
        prompt:
          "Compute the scalar product \\(\\mathbf{a} \\cdot \\mathbf{b}\\) for \\(\\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j}\\) and \\(\\mathbf{b} = 4\\mathbf{i} - 1\\mathbf{j}\\).",
        expectedAnswer: "5",
        options: ["11", "5", "-5", "14"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "\\(\\mathbf{a} \\cdot \\mathbf{b} = (2)(4) + (3)(-1) = 8 - 3 = 5\\). Multiply matching components and add — a single number that feeds straight into \\(\\cos\\theta\\).",
        hints: [
          "Multiply the \\(\\mathbf{i}\\)-components together, then the \\(\\mathbf{j}\\)-components.",
          "Add the two products: \\(8 + (-3)\\).",
        ],
      },
    },
  ],
};
