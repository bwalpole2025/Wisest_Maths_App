import { Question } from "@/lib/types";

/**
 * Topic: The Discriminant
 * Ref:   a3
 */
export const questions: Question[] = [
  {
    id: "a3-001",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 1",
    difficulty: "Foundation",
    questionText:
      "Expand the brackets \\((x+4)(x-1)\\).",
    marks: 2,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand and simplify",
          workingLatex: "\\text{Expanding the brackets:} \\\\[1em] \\begin{aligned} (x+4)(x-1) &= x(x-1)+4(x-1) \\\\ &= x^2-x+4x-4 \\\\ &= x^2+3x-4 \\end{aligned}",
          explanation: "Multiply each term in the first bracket by each term in the second, then collect like terms.",
        },
      ],
      finalAnswer: "x^2+3x-4",
      commonMistakes: ["A common mistake is to forget to multiply the 4 by the -1, which would give the incorrect answer of x^2+3x+4."],
    },
  },

  {
    id: "a3-002",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 2",
    difficulty: "Foundation",
    questionText:
      "Expand the brackets \\((2x+1)(x-3)\\).",
    marks: 2,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand and simplify",
          workingLatex: "\\text{Expanding the brackets:} \\\\[1em] \\begin{aligned} (2x+1)(x-3) &= 2x(x-3)+1(x-3) \\\\ &= 2x^2-6x+x-3 \\\\ &= 2x^2-5x-3 \\end{aligned}",
          explanation: "Multiply each term in the first bracket by each term in the second, then collect like terms.",
        },
      ],
      finalAnswer: "2x^2-5x-3",
      commonMistakes: ["A common mistake is to forget to multiply the -3 by the 1, which would give the incorrect answer of 2x^2-6x-3."],
    },
  },

  {
    id: "a3-003",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 3",
    difficulty: "Foundation",
    questionText:
      "Expand the brackets \\((x+1)(x-2)(x+3)\\).",
    marks: 2,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the last two brackets first, then multiply by the remaining bracket",
          workingLatex: "\\text{Expanding the last two brackets:} \\\\[1em] \\begin{aligned} (x+1)\\Big((x-2)(x+3)\\Big) &= (x+1)\\Big(x^2+3x-2x-6\\Big) \\\\ &= (x+1)\\Big(x^2+x-6\\Big) \\end{aligned} \\\\[1em] \\text{Now expand:} \\\\[1em] \\begin{aligned} (x+1)\\Big( x^2+x-6\\Big)&= x(x^2+x-6)+1(x^2+x-6) \\\\ &= x^3+x^2-6x+x^2+x-6 \\\\ &= x^3+2x^2-5x-6 \\end{aligned}",
          explanation: "First expand two of the three brackets, then multiply the result by the third bracket.",
        },
      ],
      finalAnswer: "x^3+2x^2-5x-6",
    },
  },

  {
    id: "a3-004",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 4",
    difficulty: "Foundation",
    questionText:
      "Expand \\(xy^3(x+y)(x^2+2xy-3y^2)\\).",
    marks: 2,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the inner brackets first, then multiply by the outer factor",
          workingLatex: "\\text{Expand the inner brackets:} \\\\[1em] \\begin{aligned} xy^3\\Big(x(x^2+2xy-3y^2)+y(x^2+2xy-3y^2)\\Big) &= xy^3\\Big(x^3+2x^2y-3xy^2+x^2y+2xy^2-3y^3\\Big) \\\\ &= xy^3\\Big(x^3+3x^2y-xy^2-3y^3\\Big) \\end{aligned} \\\\[1em] \\text{Now distribute } xy^3\\text{:} \\\\[1em] \\begin{aligned} &= x^4y^3+3x^3y^4-x^2y^5-3xy^6 \\end{aligned}",
          explanation: "Expand the two brackets in parentheses first, collect like terms, then multiply every term by the outer factor.",
        },
      ],
      finalAnswer: "x^4y^3+3x^3y^4-x^2y^5-3xy^6",
    },
  },

  {
    id: "a3-005",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 5",
    difficulty: "Foundation",
    questionText:
      "Expand \\(\\Big(x+xy+\\frac{x^2}{y}\\Big)\\Big(x^2-\\frac{y}{x^2}+y^2\\Big)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets",
          workingLatex: "\\text{Expand the brackets:} \\\\[1em] \\begin{aligned} &\\Big(x+xy+\\frac{x^2}{y}\\Big)\\Big(x^2-\\frac{y}{x^2}+y^2\\Big) \\\\ &= x\\left(x^2-\\frac{y}{x^2}+y^2\\right) + xy\\left(x^2-\\frac{y}{x^2}+y^2\\right) + \\frac{x^2}{y}\\left(x^2-\\frac{y}{x^2}+y^2\\right) \\\\ &= x^3-\\frac{y}{x}+xy^2 + x^3y-\\frac{y^2}{x}+xy^3 + \\frac{x^4}{y}-1+x^2y \\\\ &= x^3 + x^3y + x^2y + xy^2 + xy^3 + \\frac{x^4}{y} - \\frac{y}{x} - \\frac{y^2}{x} - 1 \\end{aligned}",
          explanation: "Multiply each term in the first bracket by each term in the second, then collect like terms.",
        },
      ],
      finalAnswer: "x^3 + x^3y + x^2y + xy^2 + xy^3 + \\frac{x^4}{y} - \\frac{y}{x} - \\frac{y^2}{x} - 1",
    },
  },

  {
    id: "a3-006",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 6",
    difficulty: "Foundation",
    questionText:
      "Expand \\(4x - \\Big(3(x-2) - 4(2x+3(x-3))\\Big)\\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets",
          workingLatex: "\\text{Expand the brackets:} \\\\[1em] \\begin{aligned} & 4x - \\Big(3(x-2) - 4(2x+3(x-3))\\Big) \\\\ &= 4x - \\Big(3x-6 - 4(2x+3x-9)\\Big) \\\\ &= 4x - \\Big(3x-6 - 4(5x-9)\\Big) \\\\ &= 4x - \\Big(3x-6-20x+36\\Big) \\\\ &= 4x - \\Big(-17x+30\\Big) \\\\ &= 4x + 17x - 30 \\\\ &= 21x - 30 \\end{aligned}",
          explanation: "Start by expanding the innermost brackets, then work outwards, simplifying at each step.",
        },
      ],
      finalAnswer: "21x - 30",
    },
  },

  {
    id: "a3-007",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 7",
    difficulty: "Foundation",
    questionText:
      "Expand \\(  (a+b-c)(a-b+c) + (b-c-a)(b-c+a) \\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets",
          workingLatex: "\\text{Expand the brackets:} \\\\[1em] \\begin{aligned} (a+b-c)(a-b+c)+(b+c-a)(b-c+a) \\ &= (a+(b-c))(a-(b-c))+(b+(c-a))(b-(c-a)) \\ &= a(a-(b-c))+(b-c)(a-(b-c))+(b+(c-a))(b-(c-a)) \\ &= a^2-a(b-c)+(b-c)a-(b-c)^2+b(b-(c-a))+(c-a)(b-(c-a)) \\\\ & = a^2-(b-c)^2+b^2-b(c-a)+(c-a)b-(c-a)^2 \\ & = a^2-(b-c)^2+b^2-bc+ab+bc-ab-(c-a)^2 \\ & = a^2-(b-c)^2+b^2-(c-a)^2 \\ & = a^2-(b^2-2bc+c^2)+b^2-(c^2-2ac+a^2) \\ & = a^2-b^2+2bc-c^2+b^2-c^2+2ac-a^2 \\ & = 2bc-2c^2+2ac \\ & = 2c(a+b-c) \end{aligned}",
          explanation: "Start by expanding both sets of brackets, then collect like terms.",
        },
      ],
      finalAnswer: "2c(a+b-c)",
    },
  },

  {
    id: "a3-007",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 8",
    difficulty: "Foundation",
    questionText:
      "Expand \\(  (2x-3y^2)^3 \\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets",
          workingLatex: "\\text{Expand the brackets:} \\\\[1em] \\begin{aligned} (2x-3y^2)^3 & = (2x-3y^2)\\Big( (2x-3y^2)(2x-3y^2)  \\Big) \\ &= (2x-3y^2)\\Big( 4x^2-6xy^2-6xy^2+9y^4 \\ &= (2x-3y^2)\\Big( 4x^2-12xy^2+9y^4 \\ &= 8x^3-24x^2y^2+18xy^4-12x^2y^2+36xy^4-27y^6 \\ &= 8x^3-36x^2y^2+54xy^4-27y^6 \end{aligned}",
          explanation: "Start by expanding the last two brackets, then multiply the result by the remaining bracket.",
        },
      ],
      finalAnswer: "8x^3-36x^2y^2+54xy^4-27y^6",
    },
  },

];
