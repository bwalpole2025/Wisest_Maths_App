import { Question } from "@/lib/types";

/**
 * Topic: Complex Numbers: Introduction
 * Ref:   FMp1
 */
export const questions: Question[] = [
  {
    id: "FMp1-001",
    topicRef: "FMp1",
    topicTitle: "Complex Numbers: Introduction",
    difficulty: "Foundation",
    questionText:
      "Express \\(\\sqrt{-49}\\) in terms of \\(i\\) and hence solve \\(z^2 + 49 = 0\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2024,
    tags: ["complex-numbers", "imaginary-unit"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Express the square root of a negative number",
          workingLatex:
            "\\sqrt{-49} = \\sqrt{49} \\times \\sqrt{-1} = 7i",
          explanation:
            "Use the definition i = \\sqrt{-1} to write \\sqrt{-49} = 7i.",
        },
        {
          stepNumber: 2,
          description: "Solve the equation",
          workingLatex:
            "z^2 = -49 \\implies z = \\pm 7i",
          explanation:
            "Taking square roots of both sides gives two solutions.",
        },
      ],
      finalAnswer: "z = 7i \\text{ or } z = -7i",
    },
  },
  {
    id: "FMp1-002",
    topicRef: "FMp1",
    topicTitle: "Complex Numbers: Introduction",
    difficulty: "Standard",
    questionText:
      "Given \\(z = 3 + 4i\\) and \\(w = 1 - 2i\\), find \\(zw\\) and \\(|z|\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2024,
    tags: ["complex-numbers", "modulus", "multiplication"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply the complex numbers",
          workingLatex:
            "zw = (3+4i)(1-2i) = 3 - 6i + 4i - 8i^2 = 3 - 2i + 8 = 11 - 2i",
          explanation:
            "Expand the brackets and use i^2 = -1.",
        },
        {
          stepNumber: 2,
          description: "Find the modulus of z",
          workingLatex:
            "|z| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5",
          explanation:
            "The modulus is the square root of the sum of squares of real and imaginary parts.",
        },
      ],
      finalAnswer: "zw = 11 - 2i, \\quad |z| = 5",
    },
  },
  {
    id: "FMp5-001",
    topicRef: "FMp5",
    topicTitle: "Matrix Addition and Multiplication",
    difficulty: "Foundation",
    questionText:
      "Given \\(A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}\\) and \\(B = \\begin{pmatrix} 1 & -1 \\\\ 4 & 2 \\end{pmatrix}\\), find \\(AB\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2024,
    tags: ["matrices", "multiplication"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply row by column",
          workingLatex:
            "AB = \\begin{pmatrix} 2(1)+1(4) & 2(-1)+1(2) \\\\ 0(1)+3(4) & 0(-1)+3(2) \\end{pmatrix} = \\begin{pmatrix} 6 & 0 \\\\ 12 & 6 \\end{pmatrix}",
          explanation:
            "Each entry is the dot product of the corresponding row of A and column of B.",
        },
      ],
      finalAnswer: "AB = \\begin{pmatrix} 6 & 0 \\\\ 12 & 6 \\end{pmatrix}",
    },
  },
];
