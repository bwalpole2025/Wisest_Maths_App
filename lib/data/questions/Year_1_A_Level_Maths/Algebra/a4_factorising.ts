import { Question } from "@/lib/types";

/**
 * Topic: Linear Simultaneous Equations
 * Ref:   a4
 *
 * Add your questions to the array below.
 * ID convention: "a4-001", "a4-002", etc.
 *
 * LaTeX cheat sheet:
 *   Fractions:   \\frac{a}{b}
 *   Powers:      x^{2}
 *   Square root: \\sqrt{x}
 *   Trig:        \\sin, \\cos, \\tan
 *   Greek:       \\theta, \\pi
 *   Derivative:  \\frac{dy}{dx}
 *   Integral:    \\int_{a}^{b} f(x)\\,dx
 *   Text:        \\text{minimum}
 */
export const questions: Question[] = [
  {
    id: "a4-001",
    topicRef: "a4",
    topicTitle: "Factorising 1",
    difficulty: "Foundation",
    questionText:
      "Factorise: \\( 14m +21n \\) ",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The highest common factor of 14 and 21 is 7.",
          workingLatex: "\\( 7(2m+3n) \\)",
          explanation: "Look for highest common factors (HCF).",
        },
      ],
      finalAnswer: "\\( 7(2m+3n) \\).",
    },
  },

  {
    id: "a4-002",
    topicRef: "a4",
    topicTitle: "Factorising 2",
    difficulty: "Foundation",
    questionText:
      "Factorise: \\( 5x^3y^2 - 15x^2y^3 \\) ",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The highest common factor (HCF) of 5 and 15 is 5. The highest common power of \\( x\\) is \\( x^2 \\), and for \\( y\\) it is \\(y^2\\).",
          workingLatex: "\\( 5x^2y^2(x-3y) \\)"
           explanation: 'Identify the highest common factors in the expression.'
        },
      ],
      finalAnswer: "\\( 5x^2y^2(x-3y)  \\).",
    },
  },

  {
    id: 'a4-003',
    topicRef: 'a4',
    topicTitle: 'Factorising 3',
    difficulty: 'Foundation',
    questionText: 'Factorise completely: \\( 4a^2bc + 12ab^2c - 8abc^2 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'The HCF of the numbers (4, 12, 8) is 4. The common variables are \\( a \\), \\( b \\), and \\( c \\).',
          workingLatex: '\\( 4abc \\)',
          explanation: 'Identify the highest common numerical and algebraic factors in the expression.'
        },
        {
          stepNumber: 2,
          description: 'Factor out the HCF from each term in the expression.',
          workingLatex: '\\( 4abc(a + 3b - 2c) \\)',
          explanation: 'Divide each term by the common factor to find the contents of the bracket.'
        }
      ],
      finalAnswer: '\\( 4abc(a + 3b - 2c) \\)'
    }
  },
  {
    id: 'a4-004',
    topicRef: 'a4',
    topicTitle: 'Factorising 4',
    difficulty: 'Foundation',
    questionText: 'Write the expression as a product of factors: \\( p^2 - 16q^2 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Recognise that the expression is a difference of two squares, where \\( 16q^2 \\) is \\( (4q)^2 \\).',
          workingLatex: '\\( p^2 - (4q)^2 \\)',
          explanation: 'Identify the squared terms.'
        }
      ],
      finalAnswer: '\\( (p - 4q)(p + 4q) \\)'
    }
  },
  {
    id: 'a4-005',
    topicRef: 'a4',
    topicTitle: 'Factorising 5',
    difficulty: 'Foundation',
    questionText: 'Factorise completely: \\( 50x^2 - 18y^2 \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Extract the common factor of 2 from both terms.',
          workingLatex: '\\( 2(25x^2 - 9y^2) \\)',
          explanation: 'Find the numerical highest common factor.'
        },
        {
          stepNumber: 2,
          description: 'Apply the difference of two squares to the expression inside the bracket.',
          workingLatex: '\\( 2(5x - 3y)(5x + 3y) \\)',
          explanation: 'Factorise the remaining quadratic expression.'
        }
      ],
      finalAnswer: '\\( 2(5x - 3y)(5x + 3y) \\)'
    }
  },
  {
    id: 'a4-006',
    topicRef: 'a4',
    topicTitle: 'Factorising 6',
    difficulty: 'Foundation',
    questionText: 'Write the expression as a product of factors: \\( m^2 - 7 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Treat 7 as the square of a surd, \\( (\\sqrt{7})^2 \\), to apply the difference of two squares.',
          workingLatex: '\\( m^2 - (\\sqrt{7})^2 \\)',
          explanation: 'Set up the difference of two squares using a square root.'
        }
      ],
      finalAnswer: '\\( (m - \\sqrt{7})(m + \\sqrt{7}) \\)'
    }
  },
  {
    id: 'a4-007',
    topicRef: 'a4',
    topicTitle: 'Factorising 7',
    difficulty: 'Foundation',
    questionText: 'Express as the product of factors: \\( (x+y)^2 + 5(x+y) \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Notice that the binomial \\( (x+y) \\) is a common factor in both parts of the expression.',
          workingLatex: '\\( (x+y)[(x+y) + 5] \\)',
          explanation: 'Extract the common bracket.'
        }
      ],
      finalAnswer: '\\( (x+y)(x+y+5) \\)'
    }
  },
  {
    id: 'a4-008',
    topicRef: 'a4',
    topicTitle: 'Factorising 8',
    difficulty: 'Foundation',
    questionText: 'Express as the product of factors: \\( a^2(b-3c) + 4d(3c-b) \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'The brackets \\( (b-3c) \\) and \\( (3c-b) \\) are opposites. Factor out -1 from the second term to make them match.',
          workingLatex: '\\( a^2(b-3c) - 4d(b-3c) \\)',
          explanation: 'Reverse the sign to reveal a common bracket.'
        },
        {
          stepNumber: 2,
          description: 'Factor out the newly found common bracket.',
          workingLatex: '\\( (b-3c)(a^2-4d) \\)',
          explanation: 'Extract the common binomial factor.'
        }
      ],
      finalAnswer: '\\( (b-3c)(a^2-4d) \\)'
    }
  },
  {
    id: 'a4-009',
    topicRef: 'a4',
    topicTitle: 'Factorising 9',
    difficulty: 'Foundation',
    questionText: 'Simplify the expression, leaving your answer in factorised form: \\( 3(m-n)^2 - 6m(m-n) \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify and factor out the common factor of \\( 3(m-n) \\).',
          workingLatex: '\\( 3(m-n)[(m-n) - 2m] \\)',
          explanation: 'Extract the shared numerical and binomial factors.'
        },
        {
          stepNumber: 2,
          description: 'Simplify the expression inside the square brackets: \\( m - n - 2m = -m - n \\).',
          workingLatex: '\\( 3(m-n)(-m-n) \\)',
          explanation: 'Collect like terms inside the remaining factor.'
        }
      ],
      finalAnswer: '\\( -3(m-n)(m+n) \\)'
    }
  }

  {
    id: 'a4-010',
    topicRef: 'a4',
    topicTitle: 'Factorising 10',
    difficulty: 'Foundation',
    questionText: 'Factorise fully: \\( (p+2q)^2 + p + 2q \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Group the last two terms together to reveal a hidden common binomial factor.',
          workingLatex: '\\( (p+2q)^2 + 1(p+2q) \\)',
          explanation: 'Recognise that \\( p + 2q \\) is identical to the expression inside the squared bracket.'
        },
        {
          stepNumber: 2,
          description: 'Factor out the common bracket \\( (p+2q) \\).',
          workingLatex: '\\( (p+2q)[(p+2q) + 1] \\)',
          explanation: 'Extract the shared factor from both parts of the expression.'
        }
      ],
      finalAnswer: '\\( (p+2q)(p+2q+1) \\)'
    }
  },
  {
    id: 'a4-011',
    topicRef: 'a4',
    topicTitle: 'Factorising 11',
    difficulty: 'Foundation',
    questionText: 'Factorise completely: \\( (x+3)^2 - 25 \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Recognise this is a difference of two squares, where \\( 25 \\) is \\( 5^2 \\) and \\( A = (x+3) \\).',
          workingLatex: '\\( [(x+3) - 5][(x+3) + 5] \\)',
          explanation: 'Apply the pattern \\( A^2 - B^2 = (A-B)(A+B) \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify the expressions inside each of the new brackets.',
          workingLatex: '\\( (x - 2)(x + 8) \\)',
          explanation: 'Collect the number terms together.'
        }
      ],
      finalAnswer: '\\( (x - 2)(x + 8) \\)'
    }
  },
  {
    id: 'a4-012',
    topicRef: 'a4',
    topicTitle: 'Factorising 12',
    difficulty: 'Foundation',
    questionText: 'Factorise by grouping: \\( ac + ad + bc + bd \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Split the expression in half and factorise the first two terms and the last two terms separately.',
          workingLatex: '\\( a(c+d) + b(c+d) \\)',
          explanation: 'Extract the common factor \\( a \\) from the first pair, and \\( b \\) from the second pair.'
        },
        {
          stepNumber: 2,
          description: 'Factor out the newly formed common bracket \\( (c+d) \\).',
          workingLatex: '\\( (c+d)(a+b) \\)',
          explanation: 'Combine the factored groups.'
        }
      ],
      finalAnswer: '\\( (c+d)(a+b) \\)'
    }
  },
  {
    id: 'a4-013',
    topicRef: 'a4',
    topicTitle: 'Factorising 13',
    difficulty: 'Higher',
    questionText: 'Simplify the expression, leaving your answer in factorised form: \\( (l+w+h)^2 - l(l+w+h) \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify \\( (l+w+h) \\) as a common factor in both terms and extract it.',
          workingLatex: '\\( (l+w+h)[(l+w+h) - l] \\)',
          explanation: 'Pull the shared bracket out to the front.'
        },
        {
          stepNumber: 2,
          description: 'Simplify the expression inside the square brackets: \\( l + w + h - l = w + h \\).',
          workingLatex: '\\( (l+w+h)(w+h) \\)',
          explanation: 'Cancel out the \\( l \\) and \\( -l \\).'
        }
      ],
      finalAnswer: '\\( (l+w+h)(w+h) \\)'
    }
  },
  {
    id: 'a4-014',
    topicRef: 'a4',
    topicTitle: 'Factorising 14',
    difficulty: 'Foundation',
    questionText: 'Factorise completely: \\( -4x^2y - 8xy^2 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify the highest common factor, including the negative sign: \\( -4xy \\).',
          workingLatex: '\\( -4xy \\)',
          explanation: 'Both terms share a factor of -4, x, and y.'
        },
        {
          stepNumber: 2,
          description: 'Divide both original terms by \\( -4xy \\) to find the contents of the bracket.',
          workingLatex: '\\( -4xy(x + 2y) \\)',
          explanation: 'Ensure the signs inside the bracket become positive because a negative was factored out.'
        }
      ],
      finalAnswer: '\\( -4xy(x + 2y) \\)'
    }
  },
  {
    id: 'a4-015',
    topicRef: 'a4',
    topicTitle: 'Factorising 15',
    difficulty: 'Foundation',
    questionText: 'Factorise fully: \\( 16a^4 - b^4 \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Treat this as a difference of two squares, where the terms are \\( (4a^2)^2 \\) and \\( (b^2)^2 \\).',
          workingLatex: '\\( (4a^2 - b^2)(4a^2 + b^2) \\)',
          explanation: 'Apply the standard difference of two squares rule to the power of 4 terms.'
        },
        {
          stepNumber: 2,
          description: 'Recognise that the first bracket, \\( (4a^2 - b^2) \\), is another difference of two squares.',
          workingLatex: '\\( (2a - b)(2a + b)(4a^2 + b^2) \\)',
          explanation: 'Factorise the resulting quadratic, leaving the sum of squares \\( (4a^2 + b^2) \\) as it cannot be factorised further.'
        }
      ],
      finalAnswer: '\\( (2a - b)(2a + b)(4a^2 + b^2) \\)'
    }
  },
  {
    id: 'a4-016',
    topicRef: 'a4',
    topicTitle: 'Factorising 16',
    difficulty: 'Foundation',
    questionText: 'Simplify the expression, leaving your answer in factorised form: \\( x^2(1-y)^2 + x(2-2y) \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the second term, \\( x(2-2y) \\), by extracting a 2 to reveal a common bracket.',
          workingLatex: '\\( x^2(1-y)^2 + 2x(1-y) \\)',
          explanation: 'Make the brackets match across both terms.'
        },
        {
          stepNumber: 2,
          description: 'Identify and factor out the common factor of \\( x(1-y) \\) from the entire expression.',
          workingLatex: '\\( x(1-y)[x(1-y) + 2] \\)',
          explanation: 'Extract the shared algebraic and binomial components.'
        },
        {
          stepNumber: 3,
          description: 'Expand the inner bracket slightly to neaten the final expression (optional but good practice).',
          workingLatex: '\\( x(1-y)(x - xy + 2) \\)',
          explanation: 'Distribute the \\( x \\) inside the square brackets.'
        }
      ],
      finalAnswer: '\\( x(1-y)(x - xy + 2) \\)'
    }
  }

  {
    id: 'a4-017',
    topicRef: 'a4',
    topicTitle: 'Factorising 17',
    difficulty: 'Foundation',
    questionText: 'Factorise: \\( 15x + 20y \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find the highest common factor (HCF) of the numbers 15 and 20, which is 5.',
          workingLatex: '\\( 5(3x + 4y) \\)',
          explanation: 'Divide both terms by 5 and place the remainder inside the bracket.'
        }
      ],
      finalAnswer: '\\( 5(3x + 4y) \\)'
    }
  },
  {
    id: 'a4-018',
    topicRef: 'a4',
    topicTitle: 'Factorising 18',
    difficulty: 'Intermediate',
    questionText: 'Factorise fully: \\( 6a^2b - 9ab^2 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify the HCF of 6 and 9 (which is 3) and the common variables (which are \\( a \\) and \\( b \\)).',
          workingLatex: '\\( 3ab \\)',
          explanation: 'Find the highest algebraic and numerical factors shared by both terms.'
        },
        {
          stepNumber: 2,
          description: 'Factor out \\( 3ab \\) from the original expression.',
          workingLatex: '\\( 3ab(2a - 3b) \\)',
          explanation: 'Divide each term by \\( 3ab \\) to find the expression inside the bracket.'
        }
      ],
      finalAnswer: '\\( 3ab(2a - 3b) \\)'
    }
  },
  {
    id: 'a4-019',
    topicRef: 'a4',
    topicTitle: 'Factorising 19',
    difficulty: 'Foundation',
    questionText: 'Write the expression as a product of factors: \\( y^2 - 81 \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Recognise that this is a difference of two squares, where 81 is \\( 9^2 \\).',
          workingLatex: '\\( y^2 - 9^2 \\)',
          explanation: 'Identify the squared terms to apply the rule \\( A^2 - B^2 = (A-B)(A+B) \\).'
        }
      ],
      finalAnswer: '\\( (y - 9)(y + 9) \\)'
    }
  },
  {
    id: 'a4-020',
    topicRef: 'a4',
    topicTitle: 'Factorising 20',
    difficulty: 'Foundation',
    questionText: 'Factorise completely: \\( 3x^2 - 75 \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Extract the common numerical factor of 3 from both terms first.',
          workingLatex: '\\( 3(x^2 - 25) \\)',
          explanation: 'Always check for a common factor before applying other factorisation rules.'
        },
        {
          stepNumber: 2,
          description: 'Factorise the expression inside the bracket using the difference of two squares rule.',
          workingLatex: '\\( 3(x - 5)(x + 5) \\)',
          explanation: 'Recognise that 25 is \\( 5^2 \\).'
        }
      ],
      finalAnswer: '\\( 3(x - 5)(x + 5) \\)'
    }
  },
  {
    id: 'a4-021',
    topicRef: 'a4',
    topicTitle: 'Factorising 21',
    difficulty: 'Foundation',
    questionText: 'Factorise by grouping: \\( xy + 2x + 3y + 6 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Group the first two terms and the last two terms, then factorise them separately.',
          workingLatex: '\\( x(y + 2) + 3(y + 2) \\)',
          explanation: 'Extract \\( x \\) from the first pair and 3 from the second pair.'
        },
        {
          stepNumber: 2,
          description: 'Factor out the common binomial bracket \\( (y + 2) \\).',
          workingLatex: '\\( (y + 2)(x + 3) \\)',
          explanation: 'Combine the factored groups together.'
        }
      ],
      finalAnswer: '\\( (y + 2)(x + 3) \\)'
    }
  },
  {
    id: 'a4-022',
    topicRef: 'a4',
    topicTitle: 'Factorising 22',
    difficulty: 'Foundation',
    questionText: 'Express as a product of factors: \\( (a-b)^2 + 2(a-b) \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify that the bracket \\( (a-b) \\) is a common factor in both terms.',
          workingLatex: '\\( (a-b)[(a-b) + 2] \\)',
          explanation: 'Extract the shared binomial bracket to the front.'
        },
        {
          stepNumber: 2,
          description: 'Remove the inner square brackets for the final simplified answer.',
          workingLatex: '\\( (a-b)(a-b+2) \\)',
          explanation: 'Neaten up the expression.'
        }
      ],
      finalAnswer: '\\( (a-b)(a-b+2) \\)'
    }
  },
  {
    id: 'a4-023',
    topicRef: 'a4',
    topicTitle: 'Factorising 23',
    difficulty: 'Foundation',
    questionText: 'Factorise fully: \\( 4x^3y - 16xy^3 \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find and extract the highest common factor for both terms, which is \\( 4xy \\).',
          workingLatex: '\\( 4xy(x^2 - 4y^2) \\)',
          explanation: 'Divide both terms by \\( 4xy \\) to find the remaining expression.'
        },
        {
          stepNumber: 2,
          description: 'Recognise that the expression inside the bracket is a difference of two squares and factorise it.',
          workingLatex: '\\( 4xy(x - 2y)(x + 2y) \\)',
          explanation: 'Apply the pattern \\( A^2 - B^2 = (A-B)(A+B) \\) to \\( (x^2 - 4y^2) \\).'
        }
      ],
      finalAnswer: '\\( 4xy(x - 2y)(x + 2y) \\)'
    }
  }
]




];
