import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Introduction to Vectors
 * Ref:   v1
 */
export const lesson: Lesson = {
  topicRef: "v1",
  title: "Introduction to Vectors",
  intro:
    "A vector carries both a size and a direction. In this lesson you'll learn how to write vectors, reverse them, add them nose-to-tail, scale them, and pin down points using position vectors.",
  cards: [
    {
      id: "v1-c1",
      title: "Magnitude and direction",
      concept:
        "A \\textbf{scalar} has size only; a \\textbf{vector} has size \\emph{and} direction. \"A mass of \\(5\\,\\text{kg}\\)\" is a scalar — there is no direction attached. \"A velocity of \\(60\\,\\text{km/h}\\) north-east\" is a vector, because the direction is part of the information. The displacement from \\(A\\) to \\(B\\) is written \\(\\overrightarrow{AB}\\), or with a bold letter like \\(\\mathbf{a}\\).",
      miniQuestion: {
        prompt:
          "Is \"an acceleration of \\(3\\,\\text{m/s}^2\\) upwards\" a scalar or a vector?",
        expectedAnswer: "vector",
        options: ["scalar", "vector", "neither", "both"],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "It has a magnitude (\\(3\\,\\text{m/s}^2\\)) AND a direction (upwards), so it is a vector. The moment a direction is pinned down alongside a size, the quantity is a vector.",
        hints: [
          "Does the quantity have a direction attached to it?",
          "Magnitude and direction together means…?",
        ],
      },
    },
    {
      id: "v1-c2",
      title: "Reversing a vector",
      concept:
        "Travelling from \\(Y\\) to \\(X\\) is the exact opposite trip of travelling from \\(X\\) to \\(Y\\): same length, opposite direction. So \\(\\overrightarrow{XY} = -\\overrightarrow{YX}\\). Reversing a vector simply negates it — every component, or the whole bold letter, picks up a minus sign.",
      miniQuestion: {
        prompt:
          "If \\(\\overrightarrow{YX} = \\mathbf{q}\\), what is \\(\\overrightarrow{XY}\\) in terms of \\(\\mathbf{q}\\)?",
        expectedAnswer: "\\(-\\mathbf{q}\\)",
        options: [
          "\\(\\mathbf{q}\\)",
          "\\(2\\mathbf{q}\\)",
          "\\(-\\mathbf{q}\\)",
          "\\(\\tfrac{1}{\\mathbf{q}}\\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "\\(\\overrightarrow{XY} = -\\overrightarrow{YX} = -\\mathbf{q}\\). Swapping the order of the letters flips the arrow's direction, which is exactly what a minus sign does.",
        hints: [
          "Going X to Y is the opposite trip to going Y to X.",
          "Opposite direction, same length — what does that do to the sign?",
        ],
      },
    },
    {
      id: "v1-c3",
      title: "Adding vectors nose-to-tail",
      concept:
        "To add vectors you join them nose-to-tail: the route \\(Y \\to X \\to Z\\) gives \\(\\overrightarrow{YZ} = \\overrightarrow{YX} + \\overrightarrow{XZ}\\). The intermediate point \\(X\\) cancels — only the start and end matter. This is the triangle law: any chain of displacements adds up to the single displacement from first point to last.",
      miniQuestion: {
        prompt:
          "Given \\(\\overrightarrow{YX} = \\mathbf{q}\\) and \\(\\overrightarrow{XZ} = \\mathbf{p}\\), write \\(\\overrightarrow{YZ}\\) in terms of \\(\\mathbf{p}\\) and \\(\\mathbf{q}\\).",
        expectedAnswer: "\\(\\mathbf{q} + \\mathbf{p}\\)",
        options: [
          "\\(\\mathbf{q} + \\mathbf{p}\\)",
          "\\(\\mathbf{q} - \\mathbf{p}\\)",
          "\\(\\mathbf{p} - \\mathbf{q}\\)",
          "\\(-\\mathbf{q} - \\mathbf{p}\\)",
        ],
        correctIndex: 0,
        answerType: "expression",
        insight:
          "Routing \\(Y \\to X \\to Z\\) gives \\(\\overrightarrow{YZ} = \\overrightarrow{YX} + \\overrightarrow{XZ} = \\mathbf{q} + \\mathbf{p}\\). Pick a path through known vectors and the middle point always cancels.",
        hints: [
          "Find a path from Y to Z that passes through X.",
          "Add the two legs nose-to-tail: \\(\\overrightarrow{YX} + \\overrightarrow{XZ}\\).",
        ],
      },
    },
    {
      id: "v1-c4",
      title: "Scaling and midpoints",
      concept:
        "Multiplying a vector by a scalar stretches it without changing its line of direction: \\(2\\mathbf{a}\\) is twice as long as \\(\\mathbf{a}\\) and parallel to it. Ratios use this idea. If \\(M\\) is the midpoint of \\(QR\\), then \\(\\overrightarrow{QM} = \\tfrac{1}{2}\\overrightarrow{QR}\\). If a point splits a segment in the ratio \\(1:3\\), the first piece is \\(\\tfrac{1}{4}\\) of the whole.",
      miniQuestion: {
        prompt:
          "A point \\(E\\) lies on \\(AB\\) with \\(AE:EB = 1:3\\). What fraction of \\(\\overrightarrow{AB}\\) is \\(\\overrightarrow{AE}\\)?",
        expectedAnswer: "\\(\\tfrac{1}{4}\\)",
        options: [
          "\\(\\tfrac{1}{3}\\)",
          "\\(\\tfrac{1}{4}\\)",
          "\\(\\tfrac{3}{4}\\)",
          "\\(\\tfrac{1}{2}\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "The ratio \\(1:3\\) cuts \\(AB\\) into \\(1+3 = 4\\) equal parts, and \\(E\\) is one part along from \\(A\\), so \\(\\overrightarrow{AE} = \\tfrac{1}{4}\\overrightarrow{AB}\\). Always add the ratio parts to get the denominator.",
        hints: [
          "Add the ratio numbers to find how many equal parts AB is split into.",
          "E is the first part of how many?",
        ],
      },
    },
    {
      id: "v1-c5",
      title: "Position vectors and components",
      concept:
        "A \\textbf{position vector} fixes a point relative to the origin \\(O\\). If \\(\\overrightarrow{OL} = \\begin{pmatrix}1\\\\4\\end{pmatrix}\\) and \\(\\overrightarrow{OP} = \\begin{pmatrix}5\\\\2\\end{pmatrix}\\), then the displacement between them is \\(\\overrightarrow{LP} = \\overrightarrow{OP} - \\overrightarrow{OL}\\): subtract the start from the end, component by component. The same vector can be written as a column or in \\(\\mathbf{i}, \\mathbf{j}\\) form, e.g. \\(\\begin{pmatrix}4\\\\-2\\end{pmatrix} = 4\\mathbf{i} - 2\\mathbf{j}\\).",
      miniQuestion: {
        prompt:
          "With \\(\\overrightarrow{OL} = \\begin{pmatrix}1\\\\4\\end{pmatrix}\\) and \\(\\overrightarrow{OP} = \\begin{pmatrix}5\\\\2\\end{pmatrix}\\), find \\(\\overrightarrow{LP}\\) as a column vector.",
        expectedAnswer: "\\(\\begin{pmatrix}4\\\\-2\\end{pmatrix}\\)",
        options: [
          "\\(\\begin{pmatrix}-4\\\\2\\end{pmatrix}\\)",
          "\\(\\begin{pmatrix}6\\\\6\\end{pmatrix}\\)",
          "\\(\\begin{pmatrix}4\\\\-2\\end{pmatrix}\\)",
          "\\(\\begin{pmatrix}-2\\\\4\\end{pmatrix}\\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "\\(\\overrightarrow{LP} = \\overrightarrow{OP} - \\overrightarrow{OL} = \\begin{pmatrix}5-1\\\\2-4\\end{pmatrix} = \\begin{pmatrix}4\\\\-2\\end{pmatrix}\\). \"End minus start\" is the rule for the displacement between two points given by position vectors.",
        hints: [
          "The displacement L to P is \\(\\overrightarrow{OP} - \\overrightarrow{OL}\\) (end minus start).",
          "Subtract component by component: top from top, bottom from bottom.",
        ],
      },
    },
  ],
};
