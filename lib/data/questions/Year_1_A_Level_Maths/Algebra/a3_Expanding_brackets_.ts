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
    examStyle: false,
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
    examStyle: false,
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
    examStyle: false,
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
    examStyle: false,
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
    examStyle: false,
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

  {
    id: "a3-009",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 9",
    difficulty: "Foundation",
    questionText:
      "Expand \\(  (m+n)(m^3-mn^2+n^3) \\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets",
          workingLatex: "\\text{Expand the brackets:} \\\\[1em] \\begin{aligned} (m+n)(m^3-mn^2+n^3) & = m(m^3-mn^2+n^3)+n(m^3-mn^2+n^3) \\ &= m^4-m^2n^2+mn^3+m^3n-mn^3+n^4 \\ &= m^4+m^3n-m^2n^2+n^4 \end{aligned}",
          explanation: "Expand the first term in the first bracket with the last bracket, and then the second term in the first bracket with the last bracket.",
        },
      ],
      finalAnswer: "m^4+m^3n-m^2n^2+n^4",
    },
  },

  {
    id: "a3-0010",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 10",
    difficulty: "Foundation",
    questionText:
      "Expand \\(  pq(q^2-2p+3q)+rs(r^2-2s+3r) \\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets",
          workingLatex: "\\text{Expand the brackets:} \\\\[1em] \\begin{aligned} pq(q^2-2p+3q)+rs(r^2-2s+3r) & = pq^3-2p^2q+3pq^2+r^3s-2rs^2+3r^2s \end{aligned}",
          explanation: "Expand each bracket separately, then collect like terms.",
        },
      ],
      finalAnswer: "pq^3-2p^2q+3pq^2+r^3s-2rs^2+3r^2s",
    },
  },
  {
    id: "a3-0011",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 11",
    difficulty: "Foundation",
    questionText:
      "Expand \\(  (x+y+z)(x-y-z) \\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets",
          workingLatex: "\\text{Expand the brackets:} \\\\[1em] \\begin{aligned} (x+y+z)(x-y-z) & = x(x-y-z)+y(x-y-z)+z(x-y-z) \ &= x^2-xy-xz+xy-y^2-yz+xz-yz-z^2 \ &= x^2-y^2-z^2-2yz \end{aligned}",
          explanation: "Expand each bracket separately, then collect like terms.",
        },
      ],
      finalAnswer: "x^2-y^2-z^2-2yz",
    },
  },

  {
    id: "a3-0012",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 12",
    difficulty: "Foundation",
    questionText:
      "Expand \\(  (x+1)(2x-1)^2 + (x-1)(3x-2)^2 \\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets",
          workingLatex: "\\text{Expand the brackets:} \\\\[1em] \\begin{aligned} (x+1)(2x-1)^2 + (x-1)(3x-2)^2 \\\\ & = (x+1)\\Big( (2x-1)(2x-1) \\Big + (x-1)\\Big( (3x-2)(3x-2) \\Big) \\\\ &= (x+1)(4x^2-4x+1)+(x-1)(9x^2-12x+4) \\\\ &= x(4x^2-4x+1)+1(4x^2-4x+1)+x(9x^2-12x+4)-1(9x^2-12x+4) \\\\ &= (4x^3-4x^2+x+4x^2-4x+1)+(9x^3-12x^2+4x-9x^2+12x-4) \\\\ &= (4x^3-3x+1)+(9x^3-21x^2+16x-4) \\\\ &= 13x^3-21x^2+13x-3 \end{aligned}",
          explanation: "Expand each bracket separately, then collect like terms.",
        },
      ],
      finalAnswer: "13x^3-21x^2+13x-3",
    },
  },

  {
    id: "a3-0013",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 13",
    difficulty: "Foundation",
    questionText:
      "Expand \\(  (x+1)(2x-1)^2 + (x-1)(3x-2)^2 \\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets",
          workingLatex: "\\text{Expand the brackets:} \\\\[1em] \\begin{aligned} (x+1)(2x-1)^2 + (x-1)(3x-2)^2 \\\\ & = (x+1)\\Big( (2x-1)(2x-1) \\Big + (x-1)\\Big( (3x-2)(3x-2) \\Big) \\\\ &= (x+1)(4x^2-4x+1)+(x-1)(9x^2-12x+4) \\\\ &= x(4x^2-4x+1)+1(4x^2-4x+1)+x(9x^2-12x+4)-1(9x^2-12x+4) \\\\ &= (4x^3-4x^2+x+4x^2-4x+1)+(9x^3-12x^2+4x-9x^2+12x-4) \\\\ &= (4x^3-3x+1)+(9x^3-21x^2+16x-4) \\\\ &= 13x^3-21x^2+13x-3 \end{aligned}",
          explanation: "Expand each bracket separately, then collect like terms.",
        },
      ],
      finalAnswer: "13x^3-21x^2+13x-3",
    },
  },

  {
    id: "a3-014",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 14",
    difficulty: "Foundation",
    questionText:
      "Expand \\( (3a+2b)^2 - (3a-2b)^2 \\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the squares and simplify",
          workingLatex: "\\text{Expand the brackets:} \\\\[1em] \\begin{aligned} (3a+2b)^2 - (3a-2b)^2 & = (3a+2b)(3a+2b) - (3a-2b)(3a-2b) \\\\ &= 3a(3a+2b)+2b(3a+2b) - 3a(3a-2b)-2b(3a-2b) \\\\ &= 9a^2 + 6ab + 6ab + 4b^2 - (9a^2 - 6ab - 6ab + 4b^2) \\\\ &= 9a^2 + 12ab + 4b^2 - (9a^2 - 12ab + 4b^2) \\\\ &= 9a^2 + 12ab + 4b^2 - 9a^2 + 12ab - 4b^2 \\\\ &= 24ab \\end{aligned}",
          explanation: "Expand both squared binomials separately, then subtract the second expansion from the first, taking care with the signs.",
        },
      ],
      finalAnswer: "24ab",
    },
  },

  {
    id: "a3-015",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 15",
    difficulty: "Foundation",
    questionText:
      "Expand \\( (x^2+2)(x^2-5x+3) \\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets",
          workingLatex: "\\text{Expand the brackets:} \\\\[1em] \\begin{aligned} (x^2+2)(x^2-5x+3) & = x^2(x^2-5x+3) + 2(x^2-5x+3) \\\\ &= x^2(x^2) +x^2(-5x)+x^2(3) + 2(x^2) + 2(-5x) + 2(3) \\\\ &= x^4 - 5x^3 + 3x^2 + 2x^2 - 10x + 6 \\\\ &= x^4 - 5x^3 + 5x^2 - 10x + 6 \\end{aligned}",
          explanation: "Distribute each term in the first bracket across the second bracket, then combine the like terms.",
        },
      ],
      finalAnswer: "x^4 - 5x^3 + 5x^2 - 10x + 6",
    },
  },

  {
    id: "a3-016",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 16",
    difficulty: "Foundation",
    questionText:
      "Expand \\( (a-b)(a+b)(a^2+b^2) \\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first two brackets",
          workingLatex: "\\text{Step 1: Difference of two squares} \\\\[1em] \\begin{aligned} (a-b)(a+b)(a^2+b^2) &= \\Big(a(a+b)-b(a+b)\\Big)(a^2+b^2) \\\\ & = \\Big( a^2+ab-ba-b^2\\Big)(a^2+b^2) \\\\ & = \\Big( a^2-b^2\\Big)(a^2+b^2) \\\\ & = \\Big( a^2(a^2+b^2)-b^2(a^2+b^2)\\Big) \\\\ & = a^4+a^2b^2-b^2a^2-b^4 \\\\ & = a^4-b^4 \\end{aligned}",
          explanation: "Recognize that the first two brackets form a difference of two squares.",
        },

      ],
      finalAnswer: "a^4 - b^4",
    },
  },

  {
    id: "a3-017",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 17",
    difficulty: "Foundation",
    questionText:
      "Expand \\( 2x(x-3)^2 - x^2(2x+1) \\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the squares and distribute",
          workingLatex: "\\text{Expand the brackets:} \\\\[1em] \\begin{aligned} 2x(x-3)^2 - x^2(2x+1) & = 2x(x-3)(x-3) - (2x^3+x^2) \\\\ &= 2x(x(x-3)-3(x-3)) - (2x^3+x^2) \\\\ &= 2x(x^2-3x-3x+9) - (2x^3+x^2) \\\\ &= 2x(x^2-6x+9) - (2x^3+x^2) \\\\ &= 2x^3 - 12x^2 + 18x - 2x^3 - x^2 \\\\ &= -13x^2 + 18x \\end{aligned}",
          explanation: "First square the binomial, then multiply by 2x. Expand the second part and carefully subtract to collect like terms.",
        },
      ],
      finalAnswer: "-13x^2 + 18x",
    },
  },

  {
    id: "a3-018",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 18",
    difficulty: "Foundation",
    questionText:
      "Expand \\( (x+2)(x-3)(x+4) \\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first two brackets",
          workingLatex: "\\text{Expand:} \\\\[1em] \\begin{aligned} (x+2)\\Big( (x-3)(x+4)\\Big) & = (x+2)\\Big(x(x+4)-3(x+4)) \\\\ &= (x+2)\\Big(x^2+4x-3x-12\\Big) \\\\ &= (x+2)\\Big(x^2+x-12\\Big) \\\\ &= x(x^2+x-12)+2(x^2+x-12) \\\\ &= x^3+x^2-12x+2x^2+2x-24 \\\\ &= x^3+3x^2-10x-24 \\end{aligned}",
          explanation: "Multiply the first two terms and simplify.",
        },
      ],
      finalAnswer: "x^3 + 3x^2 - 10x - 24",
    },
  },

  {
    id: "a3-019",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 19",
    difficulty: "Foundation",
    questionText:
      "A rectangle has a length of \\( 2x + 5 \\) and a width of \\( x - 3 \\). Write an expanded expression for the area of the rectangle.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["geometry", "area"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the area calculation",
          workingLatex: "\\text{Area} = \\text{length} \\times \\text{width} = (2x + 5)(x - 3)",
          explanation: "To find the area of a rectangle, multiply the expressions for length and width.",
        },
        {
          stepNumber: 2,
          description: "Expand the brackets",
          workingLatex: "\\begin{aligned} (2x + 5)(x - 3) &= 2x(x-3) + 5(x-3) \\\\ &= 2x^2 - 6x + 5x - 15 \\\\ &= 2x^2 - x - 15 \\end{aligned}",
          explanation: "Expand the brackets and then collect the middle $x$ terms.",
        },
      ],
      finalAnswer: "2x^2 - x - 15",
    },
  },

  {
    id: "a3-020",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 20",
    difficulty: "Foundation",
    questionText:
      "Expand and simplify \\( \\frac{1}{4}(12x - 8) - \\frac{1}{5}(10x + 5) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["fractions", "negatives"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets using the fractional coefficients",
          workingLatex: "\\text{Expand:} \\\\[1em] \\begin{aligned} \\frac{1}{4}(12x - 8)-\\frac{1}{5}(10x+5) &= 3x-2-2x-1 \\\\ & = x-3 \\end{aligned}",
          explanation: "Divide the first bracket by 4 and the second bracket by 5, being careful to distribute the negative sign.",
        },
      ],
      finalAnswer: "x - 3",
    },
  },

  {
    id: "a3-021",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 21",
    difficulty: "Foundation",
    questionText:
      "Expand and simplify \\( 2x(x + 3) - (x + 1)(x + 2) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["mixed types", "subtraction"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the single and double brackets",
          workingLatex: "\\begin{aligned} 2x(x + 3)-(x+1)(x+2) &= 2x^2 + 6x - x(x+2)-1(x+2) \\\\ &= 2x^2 + 6x - x^2 - 2x - x - 2 \\\\ &= x^2 + 3x - 2 \end{aligned}",
          explanation: "Expand the first part by distributing $2x$, and expand the brackets of the second part.",
        },
      ],
      finalAnswer: "x^2 + 3x - 2",
    },
  },

  {
    id: "a3-022",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 22",
    difficulty: "Foundation",
    questionText:
      "Expand and simplify \\( (a + b)^2 - (a - b)^2 \\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "simplification"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand both squared brackets",
          workingLatex: "\\begin{aligned} (a+b)^2 - (a-b)^2 &= \\\\ (a+b)(a+b)-(a-b)(a-b) \\\\ a(a+b)+b(a+b)-a(a-b)-b(a-b) \\\\ a^2+ab+ab+b^2-a^2+ab+ab-b^2 \\\\ a^2+2ab+b^2-a^2+2ab-b^2 \\\\ 4ab \\end{aligned}",
          explanation: "Expand the brackets and then collect the middle $x$ terms.",
        },
      ],
      finalAnswer: "4ab",
    },
  },

  {
    id: "a3-023",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 23",
    difficulty: "Foundation",
    questionText:
      "Expand \\( x[3(x + 2) - 4] \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["nested", "brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Simplify the expression inside the square brackets first",
          workingLatex: "\\begin{aligned} x(3(x + 2) - 4) &= x(3x+6-4) \\ &= x(3x+2) \\ &= 3x^2+2x \\end{aligned}",
          explanation: "Start from the inner-most brackets and work outward.",
        },
      ],
      finalAnswer: "3x^2 + 2x",
    },
  },

  {
    id: "a3-024",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 24",
    difficulty: "Foundation",
    questionText:
      "Expand and simplify \\( \\left(x + \\frac{1}{x^2}\\right)\\left(y - \\frac{1}{z^2}\\right) \\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["fractions", "multi-variable"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets",
          workingLatex: "\\text{Expand:} \\\\[1em] \\begin{aligned} \\left( x + \\frac{1}{x^2}\\right)\\left(y - \\frac{1}{z^2}\\right) &= x\\left(y-\\frac{1}{z^2}\\right) +\\frac{1}{x^2}\\left( y - \\frac{1}{z^2}\\right) \\\\ &= x\\left(y-\\frac{1}{z^2}\\right) + \\frac{1}{x^2}\\left( y - \\frac{1}{z^2}\\right) \\\\ &= xy - \\frac{x}{z^2} + \\frac{y}{x^2} - \\frac{1}{x^2z^2} \\\\ \\end{aligned}",
          explanation: "Multiply each term in the first bracket by each term in the second. Since all variables are different, no terms can be combined.",
        },
      ],
      finalAnswer: "xy - \\frac{x}{z^2} + \\frac{y}{x^2} - \\frac{1}{x^2z^2}",
    },
  },

  {
    id: "a3-025",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 25",
    difficulty: "Foundation",
    questionText:
      "Expand and simplify \\( (a + b)(a^2 - b^2) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["indices", "difference of squares"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets",
          workingLatex: "\\text{Expand:} \\\\[1em] \\begin{aligned} (a+b)(a^2-b^2) &= a(a^2-b^2) + b(a^2-b^2) \\\\a(a^2) + a(-b^2) + b(a^2) + b(-b^2) \\\\ &= a^3 - ab^2 + a^2b - b^3 \\end{aligned}",
          explanation: "Distribute the $a$ and the $b$ across the second bracket. Remember to add the indices for the same bases ($a \\times a^2 = a^3$).",
        },
      ],
      finalAnswer: "a^3 + a^2b - ab^2 - b^3",
    },
  },

  {
    id: "a3-031",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 31",
    difficulty: "Foundation",
    questionText:
      "Expand and simplify \\( p(p + q) - pq(p^2 - pq) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["indices", "negatives"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand each part of the expression",
          workingLatex: "\\begin{aligned} p(p + q) - pq(p^2-pq) &= p^2+pq-p^3q+p^2q^2 \\\\ p^2 + pq-p^3q + p^2q^2 \\end{aligned}",
          explanation: "Be careful with the second part; multiplying $-pq$ by $-pq$ results in a positive $+p^2q^2$.",
        },
      ],
      finalAnswer: "p^2 + pq - p^3q + p^2q^2",
    },
  },

  {
    id: "a3-032",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 32",
    difficulty: "Foundation",
    questionText:
      "Expand and simplify \\( \\left(\\frac{3}{x} - \\frac{4}{x^2}\\right)(x^2 + 3x) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["fractions", "cancelling"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Distribute the fractional terms",
          workingLatex: "\\text{Expand:} \\\\[1em] \\begin{aligned} \\left(\frac{3}{x} - \\frac{4}{x^2}\right)\\left(x^2+3x\\right) & = \\frac{3}{x}(x^2+3x)-\\frac{4}{x^2}(x^2+3x) \\\\ & = 3x+9 -4-\\frac{12}{x}\\\\ & = 3x+2-\\frac{12}{x} \\end{aligned}",
          explanation: "Multiply each term in the first bracket by each term in the second.",
        },
      ],
      finalAnswer: "3x + 5 - \\frac{12}{x}",
    },
  },

  {
    id: "a3-033",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 33",
    difficulty: "Foundation",
    questionText:
      "Expand and simplify \\( (x^2 - 1)\\left(1 + \\frac{1}{x}\\right) \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["fractions", "simplification"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets",
          workingLatex: "\\begin{aligned} (x^2-1)\\left( 1 +\\frac{1}{x}\\right) &= x^2\\left( 1 +\\frac{1}{x}\\right) -1\\left( 1 +\\frac{1}{x}\\right) \\ &= x^2 + x - 1 - \\frac{1}{x} \\end{aligned}",
          explanation: "Multiply through and simplify $x^2 \\times \\frac{1}{x}$ to get $x$.",
        },
      ],
      finalAnswer: "x^2 + x - 1 - \\frac{1}{x}",
    },
  },


  {
    id: "a3-034",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 34",
    difficulty: "Foundation",
    questionText:
      "Expand and simplify \\( \\left(y^2 + \\frac{1}{y}\\right)(y^3 - 2) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["indices", "fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets and simplify the powers",
          workingLatex: "\\begin{aligned} \\left(y^2 + \\frac{1}{y}\\right)(y^3 - 2) &= y^2(y^3 - 2) + \\frac{1}{y}(y^3 - 2) \\\\ &= y^5 - 2y^2 + \\frac{y^3}{y} - \\frac{2}{y} \\\\ &= y^5 - 2y^2 + y^2 - \\frac{2}{y} \\\\ &= y^5 - 2y^2 + y^2 -\\frac{2}{y} \\end{aligned}",
          explanation: "Multiply both terms in the first bracket by both terms in the second. Simplify \\( \\frac{y^3}{y} \\) to \\( y^2 \\) using index laws.",
        },

      ],
      finalAnswer: "y^5 - y^2 - \\frac{2}{y}",
    },
  },

  {
    id: "a3-035",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 35",
    difficulty: "Foundation",
    questionText:
      "Expand and simplify \\( 2ab(a - b) - a^2(2b - 1) \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["multi-variable", "negatives"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand each single bracket",
          workingLatex: "\\begin{aligned} 2ab(a - b) - a^2(2b - 1) &= (2a^2b - 2ab^2) - (2a^2b - a^2) \\\\ &= 2a^2b - 2ab^2 - 2a^2b + a^2 \\end{aligned}",
          explanation: "Distribute the terms outside the brackets. Be careful with the negative sign outside the second bracket; it changes the sign of both terms inside.",
        },
        {
          stepNumber: 2,
          description: "Collect like terms",
          workingLatex: "\\begin{aligned} 2a^2b - 2a^2b - 2ab^2 + a^2 &= a^2 - 2ab^2 \\end{aligned}",
          explanation: "The \\( 2a^2b \\) and \\( -2a^2b \\) terms cancel each other out.",
        },
      ],
      finalAnswer: "a^2 - 2ab^2",
    },
  },

  {
    id: "a3-036",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 36",
    difficulty: "Foundation",
    questionText:
      "Expand and simplify \\( \\left(\\frac{x}{2} + 4\\right)\\left(\\frac{4}{x} - 2\\right) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["fractions", "cancelling"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets using FOIL",
          workingLatex: "\\begin{aligned} \\left(\\frac{x}{2} + 4\\right)\\left(\\frac{4}{x} - 2\\right) &= \\frac{x}{2}\\left(\\frac{4}{x}\\right) + \\frac{x}{2}(-2) + 4\\left(\\frac{4}{x}\\right) + 4(-2) \\\\ &= \\frac{4x}{2x} - \\frac{2x}{2} + \\frac{16}{x} - 8 \\end{aligned}",
          explanation: "Multiply the first, outer, inner, and last terms.",
        },
        {
          stepNumber: 2,
          description: "Simplify each term and collect constants",
          workingLatex: "\\begin{aligned} 2 - x + \\frac{16}{x} - 8 &= -x + \\frac{16}{x} - 6 \\end{aligned}",
          explanation: "Simplify \\( \\frac{4x}{2x} \\) to 2 and \\( \\frac{2x}{2} \\) to \\( x \\). Then combine 2 and -8.",
        },
      ],
      finalAnswer: "\\frac{16}{x} - x - 6",
    },
  },

  {
    id: "a3-037",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 37",
    difficulty: "Foundation",
    questionText:
      "Expand and simplify \\( m^2n(m + n) - n^2m(n + m) \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["indices", "multi-variable"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand both sets of brackets",
          workingLatex: "\\begin{aligned} m^2n(m + n) - n^2m(n + m) &= (m^3n + m^2n^2) - (n^3m + n^2m^2) \\\\ &= m^3n + m^2n^2 - n^3m - n^2m^2 \\end{aligned}",
          explanation: "Multiply the terms outside by each term inside. Note that \\( n^2m^2 \\) is the same as \\( m^2n^2 \\).",
        },
        {
          stepNumber: 2,
          description: "Collect like terms",
          workingLatex: "\\begin{aligned} m^3n + m^2n^2 - n^2m^2 - mn^3 &= m^3n - mn^3 \\end{aligned}",
          explanation: "The terms \\( m^2n^2 \\) and \\( -n^2m^2 \\) are identical and cancel out.",
        },
      ],
      finalAnswer: "m^3n - mn^3",
    },
  },

  {
    id: "a3-038",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 38",
    difficulty: "Foundation",
    questionText:
      "Expand and simplify \\( \\left(1 - \\frac{2}{x}\\right)\\left(x^2 + 2x\\right) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["fractions", "simplification"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets",
          workingLatex: "\\begin{aligned} 1(x^2 + 2x) - \\frac{2}{x}(x^2 + 2x) &= x^2 + 2x - \\left(\\frac{2x^2}{x} + \\frac{4x}{x}\\right) \\\\ &= x^2 + 2x - (2x + 4) \\end{aligned}",
          explanation: "Distribute each term. Simplify the second part by dividing each term by \\( x \\).",
        },
        {
          stepNumber: 2,
          description: "Remove brackets and simplify",
          workingLatex: "\\begin{aligned} x^2 + 2x - 2x - 4 &= x^2 - 4 \\end{aligned}",
          explanation: "The \\( 2x \\) and \\( -2x \\) cancel out, leaving a difference of squares result.",
        },
      ],
      finalAnswer: "x^2 - 4",
    },
  },
  {
    id: "a3-039",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 39",
    difficulty: "Foundation",
    questionText:
      "Expand and simplify \\( \\left(xyz - \\frac{y^2}{xz}\\right)\\left(x^2z^2 + \\frac{x}{yz} \\right) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["fractions", "simplification"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets",
          workingLatex: "\\begin{aligned} \\left(xyz - \\frac{y^2}{xz}\\right)\\left(x^2z^2 + \\frac{x}{yz} \\right) &=xyz(x^2z^2 + \\frac{x}{yz}) - \\frac{y^2}{xz}(x^2z^2 + \\frac{x}{yz}) \\ &= x^3yz^3 + \\frac{x^2yz}{yz} - \\frac{x^2y^2z^2}{xz} - \\frac{xy^3}{x^2yz} \\ &= x^3yz^3 + x^2 - xy^2z - \\frac{y^2}{xz} \\end{aligned}",
          explanation: "Distribute each term. Simplify the second part by dividing each term by \\( x \\).",
        },
      ],
      finalAnswer: "x^3yz^3 + x^2 - xy^2z - \\frac{y^2}{xz}",
    },
  }
  ,

  {
    id: "a3-040",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 40",
    difficulty: "Foundation",
    questionText:
      "Expand and simplify \\( \\left( x - \\frac{1}{x} \\right)\\left( x^2 + 1 + \\frac{1}{x^2} \\right)\\left( x^3 + \\frac{1}{x} \\right) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["fractions", "simplification"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first two brackets",
          workingLatex: "\\begin{aligned} \\left( x - \\frac{1}{x} \\right)\\left( x^2 + 1 + \\frac{1}{x^2} \\right) &= x\\left( x^2+1+\\frac{1}{x^2} \\right) -\\frac{1}{x}\\left( x^2+1+\\frac{1}{x^2} \\right) \\\\ &= x^3 + x + \\frac{1}{x} - x - \\frac{1}{x} - \\frac{1}{x^3} \\\\ &= x^3 - \\frac{1}{x^3} \\end{aligned}",
          explanation: "Multiply every term in the first bracket by every term in the second. Notice that the middle terms cancel out, leaving a difference of cubes.",
        },
        {
          stepNumber: 2,
          description: "Multiply the result by the final bracket",
          workingLatex: "\\begin{aligned} \\left( x^3 - \\frac{1}{x^3} \\right)\\left( x^3 + \\frac{1}{x} \\right) &= x^3\\left( x^3 + \\frac{1}{x}\\right) -\\frac{1}{x^3}\\left( x^3 + \\frac{1}{x} \\right)  \\\\ & = x^6 + x^2 - 1 - \\frac{1}{x^4} \\end{aligned}",
          explanation: "Expand the resulting term with the last bracket and simplify each term.",
        },
      ],
      finalAnswer: "x^6 + x^2 - 1 - \\frac{1}{x^4}",
    },
  },

  {
    id: "a3-041",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 41",
    difficulty: "Foundation",
    questionText: "Expand and simplify \\( \\left(\\frac{2}{y} - 3\\right)\\left(\\frac{y}{2} + 1\\right) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["fractions", "binomials"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets",
          workingLatex: "\\begin{aligned} \\left(\\frac{2}{y} - 3\\right)\\left(\\frac{y}{2} + 1\\right) &= \\frac{2}{y}\\left(\\frac{y}{2}+1\\right) - 3\\left(\\frac{y}{2}+1\\right \\\\ &= \\frac{2y}{2y} + \\frac{2}{y} - \\frac{3y}{2} - 3 \\\\ & = 1 +\\frac{2}{y} - \\frac{3y}{2} - 3 \\\\ & = \\frac{2}{y} - \\frac{3y}{2} - 2 \\end{aligned}",
          explanation: "Multiply the first, outer, inner, and last terms."
        },

      ],
      finalAnswer: "\\frac{2}{y} - \\frac{3y}{2} - 2"
    }
  },
  {
    id: "a3-042",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 42",
    difficulty: "Foundation",
    questionText: "Expand and simplify \\( a^2b(a - b) + ab^2(a + b) \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["indices", "multi-variable"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand both sets of brackets",
          workingLatex: "\\begin{aligned} a^2b(a - b) + ab^2(a + b) &= (a^3b - a^2b^2) + (a^2b^2 + ab^3) \\\\ &= a^3b - a^2b^2 + a^2b^2 + ab^3 \\\\ & = a^3b + ab^3 \\end{aligned}",
          explanation: "Multiply the terms outside by each term inside the brackets."
        },
      ],
      finalAnswer: "a^3b + ab^3"
    }
  },
  {
    id: "a3-043",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 43",
    difficulty: "Foundation",
    questionText: "Expand and simplify \\( \\left(2x + \\frac{3}{x}\\right)\\left(2x - \\frac{3}{x}\\right) \\).",
    marks: 2,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of squares", "fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand using the difference of two squares identity",
          workingLatex: "\\begin{aligned} \\left(2x + \\frac{3}{x}\\right)\\left(2x - \\frac{3}{x}\\right) & = 2x\\left( 2x - \\frac{3}{x}\\right) + \\\frac{3}{x}\\left( 2x - \\frac{3}{x}\\right) \\ & = 4x^2 - \\frac{6x}{x} + \\frac{6x}{x} - \\frac{9}{x^2} \\ & = 4x^2 - 6 + 6 - \\frac{9}{x^2} \\ & = 4x^2 - \\frac{9}{x^2} \\end{aligned}",
          explanation: "Recognize the pattern \\( (a+b)(a-b) = a^2 - b^2 \\). Alternatively, expanding fully shows the middle terms cancel out: \\( 4x^2 - \\frac{6x}{x} + \\frac{6x}{x} - \\frac{9}{x^2} \\)."
        }
      ],
      finalAnswer: "4x^2 - \\frac{9}{x^2}"
    }
  },
  {
    id: "a3-044",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 44",
    difficulty: "Foundation",
    questionText: "Expand and simplify \\( \\left(x + \\frac{2}{x}\\right)^2 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["perfect square", "fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite as two brackets and expand",
          workingLatex: "\\begin{aligned} \\left(x + \\frac{2}{x}\\right)\\left(x + \\frac{2}{x}\\right) &= x\\left(x + \\frac{2}{x}\\right) + \\frac{2}{x}\\left(x + \\frac{2}{x}\\right) \\\\ &= x^2 + \\frac{2x}{x} + \\frac{2x}{x} + \\frac{4}{x^2} = x^2 + 2 + 2 + \\frac{4}{x^2} = x^2 + 4 + \\frac{4}{x^2} \\end{aligned}",
          explanation: "Multiply every term in the first bracket by every term in the second bracket."
        },
      ],
      finalAnswer: "x^2 + 4 + \\frac{4}{x^2}"
    }
  },
  {
    id: "a3-045",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 45",
    difficulty: "Foundation",
    questionText: "Expand and simplify \\( \\left(\\frac{1}{x^2} - x\\right)\\left(x^3 - x\\right) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["fractions", "indices"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets",
          workingLatex: "\\begin{aligned} \\left(\\frac{1}{x^2} - x\\right)\\left(x^3 - x\\right) &= \\frac{1}{x^2}\\left( x^3 - x \\right) - x(x^3-x) \\\\ & = \\frac{x^3}{x^2}-\\frac{x}{x^2} - x^4 + x^2\\\\ & = x-\\frac{1}{x}-x^4+x^2  \\end{aligned}",
          explanation: "Distribute each term from the first bracket into the second bracket."
        },
      ],
      finalAnswer: "-x^4 + x^2 + x - \\frac{1}{x}"
    }
  },
  {
    id: "a3-046",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 46",
    difficulty: "Foundation",
    questionText: "Expand and simplify \\( \\left(p - \\frac{1}{p}\\right)\\left(p + \\frac{1}{p}\\right)\\left(p^2 + \\frac{1}{p^2}\\right) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of squares", "simplification"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first two brackets",
          workingLatex: "\\begin{aligned} \\left(p - \\frac{1}{p}\\right)\\left(p + \\frac{1}{p}\\right) &= p\\left(p+\\frac{1}{p} \\right) - \\frac{1}{p}\\left(p+\\frac{1}{p}\\right) \\\\ &= p^2 + \\frac{p}{p} - \\frac{p}{p} - \\frac{1}{p^2}\\\\ & = p^2 - \\frac{1}{p^2} \\end{aligned}",
          explanation: "Recognize the difference of two squares. The middle terms cancel out."
        },
        {
          stepNumber: 2,
          description: "Multiply the result by the final bracket",
          workingLatex: "\\begin{aligned} \\left(p^2 - \\frac{1}{p^2}\\right)\\left(p^2 + \\frac{1}{p^2}\\right) &= p^2\lleft( p^2 + \\frac{1}{p^2} \\right) -\\frac{1}{p^2}\\left( p^2 +\\frac{1}{p^2}\\right) \\\\ & = p^4 + \\frac{p^2}{p^2} - \\frac{p^2}{p^2} - \\frac{1}{p^4} \\\\ & = p^4 - \\frac{1}{p^4} \\end{aligned}",
          explanation: "This forms another difference of two squares. Expanding fully shows the middle terms cancel once again."
        }
      ],
      finalAnswer: "p^4 - \\frac{1}{p^4}"
    }
  },

  {
    id: "a3-047",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 47",
    difficulty: "Foundation",
    questionText: "Expand and simplify \\( p(p+q)-(p-q)(p+q) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of squares", "simplification"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first single bracket, and then expand the pair of brackets.",
          workingLatex: "\\begin{aligned}  p(p+q)-(p-q)(p+q) & = p^2+pq -p(p+q)+q(p+q) \\\\ & = p^2+pq - p^2-pq+pq+q^2 \\\\ &= q^2+pq \\end{aligned}",
          explanation: "Recognize the difference of two squares. The middle terms cancel out."
        },

      ],
      finalAnswer: "q^2+pq"
    }
  },
  {
    id: "a3-048",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 48",
    difficulty: "Foundation",
    questionText: "Expand and simplify \\( (x+y)^3 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubes"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first two brackets, and then expand the final bracket.",
          workingLatex: "\\begin{aligned} (x+y)^3 = (x+y)(x+y)(x+y) & = \\Big( (x+y)(x+y) \\Big) (x+y) \\\\ & = \\Big( x(x+y)+y(x+y) \\Big)(x+y) \\\\ & = \\Big( x^2+xy+xy+y^2 \\Big)(x+y) \\\\ & = \\Big( x^2+2xy+y^2 \\Big)(x+y) \\\\ & = x(x^2+2xy+y^2)+y(x^2+2xy+y^2) \\\\ & = x^3+2x^2y+xy^2+x^2y+2xy^2+y^3 \\\\ & = x^3+3x^2y+3xy^2+y^3 \\end{aligned}",
          explanation: "Recognize the difference of two squares. The middle terms cancel out."
        },

      ],
      finalAnswer: "x^3+3x^2y+3xy^2+y^3"
    }
  },

  {
    id: "a3-049",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 49",
    difficulty: "Foundation",
    questionText: "Expand and simplify \\( (ab+cd)(ac-bd) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets",
          workingLatex: "\\begin{aligned} (ab+cd)(ac-bd) & = ab(ac-bd)+cd(ac-bd) \\ & = a^2bc-ab^2d+ac^2d-bcd^2 \\end{aligned}",
          explanation: "Multiply each term in the first bracket by each term in the second bracket."
        },

      ],
      finalAnswer: "a^2bc-ab^2d+ac^2d-bcd^2"
    }
  },

  {
    id: "a3-050",
    topicRef: "a3",
    topicTitle: "Expanding Brackets 50",
    difficulty: "Foundation",
    questionText: "Expand and simplify \\( (2x-1)^2(x+3) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets",
          workingLatex: "\\begin{aligned} (2x-1)^2(x+3) & = (2x-1)(2x-1)(x+3) \\ & = \\Big( 2x(2x-1) -1(2x-1) \\Big) (x+3) \\ & = \\Big( 4x^2-2x-2x+1 \\Big) (x+3) \\ & = \\Big( 4x^2-4x+1 \\Big) (x+3) \\ & = 4x^2(x+3)-4x(x+3)+1(x+3) \\ & = 4x^3+12x^2-4x^2-12x+x+3 \\ & = 4x^3+8x^2-11x+3 \end{aligned}",
          explanation: "Multiply each term in the first bracket by each term in the second bracket."
        },

      ],
      finalAnswer: "4x^3+8x^2-11x+3"
    }
  },


];
