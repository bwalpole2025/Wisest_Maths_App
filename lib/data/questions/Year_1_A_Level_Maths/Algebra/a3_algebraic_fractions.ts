import { Question } from "@/lib/types";

/**
 * Topic: Linear-Quadratic Simultaneous Equations
 * Ref:   a5
 *
 * Add your questions to the array below.
 * ID convention: "a5-001", "a5-002", etc.
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
    id: 'a3-001',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 1',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify the expression: \\( \\frac{2x+10}{6} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the numerator by extracting the highest common factor of 2.',
          workingLatex: '\\frac{2(x + 5)}{6}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Cancel the common factor of 2 from both the numerator and the denominator.',
          workingLatex: '\\frac{x + 5}{3}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{x + 5}{3}\\)',
    }
  },
  {
    id: 'a3-002',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 2',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{np^2 - 2n^2p}{np} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the numerator completely by taking out the common factor of \\( np \\).',
          workingLatex: '\\frac{np(p - 2n)}{np}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Cancel the \\( np \\) term from both the numerator and the denominator.',
          workingLatex: 'p - 2n',
          explanation: ""
        }
      ],
      finalAnswer: '\\(p - 2n\\)',
    }
  },
  {
    id: 'a3-003',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 3',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction: \\( \\frac{x}{3} + \\frac{x}{4} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find a common denominator for the fractions, which is 12. Multiply the top and bottom of the first fraction by 4, and the second by 3.',
          workingLatex: '\\frac{4x}{12} + \\frac{3x}{12}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Add the numerators together over the common denominator.',
          workingLatex: '\\frac{7x}{12}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{7x}{12}\\)',
    }
  },
  {
    id: 'a3-004',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 4',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction: \\( \\frac{1}{2p} - \\frac{1}{5q} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find a common denominator by multiplying the two denominators together to get \\( 10pq \\).',
          workingLatex: '\\frac{5q}{10pq} - \\frac{2p}{10pq}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Subtract the numerators over the common denominator.',
          workingLatex: '\\frac{5q - 2p}{10pq}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{5q - 2p}{10pq}\\)',
    }
  },
  {
    id: 'a3-005',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 5',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction in its simplest form: \\( \\frac{5}{y-1} + \\frac{3}{y-2} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find the common denominator by multiplying the two denominators together: \\( (y-1)(y-2) \\). Rewrite each fraction.',
          workingLatex: '\\frac{5(y-2)}{(y-1)(y-2)} + \\frac{3(y-1)}{(y-1)(y-2)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Combine the numerators over the common denominator and expand the brackets.',
          workingLatex: '\\frac{5y - 10 + 3y - 3}{(y-1)(y-2)}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Simplify the numerator by collecting like terms: \\( 5y + 3y = 8y \\) and \\( -10 - 3 = -13 \\).',
          workingLatex: '\\frac{8y - 13}{(y-1)(y-2)}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{8y - 13}{(y-1)(y-2)}\\)',
    }
  },
  {
    id: 'a3-006',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 6',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction in its simplest form: \\( \\frac{7}{r-5} - \\frac{4}{r+3} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find the common denominator: \\( (r-5)(r+3) \\). Multiply the numerator of each fraction by the denominator of the other.',
          workingLatex: '\\frac{7(r+3)}{(r-5)(r+3)} - \\frac{4(r-5)}{(r-5)(r+3)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Combine the numerators and expand the brackets. Pay close attention to expanding the negative term: \\( -4(r-5) = -4r + 20 \\).',
          workingLatex: '\\frac{7r + 21 - 4r + 20}{(r-5)(r+3)}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Collect like terms on the numerator to fully simplify the expression.',
          workingLatex: '\\frac{3r + 41}{(r-5)(r+3)}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{3r + 41}{(r-5)(r+3)}\\)',
    }
  },
  {
    id: 'a3-007',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 7',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify the expression fully: \\( \\frac{4g^2 - 4h^2}{g^2 + gh} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [], // Fixed unclosed string and array
    workedSolution: {
      steps: [ // Added opening bracket for the array of steps
        {
          stepNumber: 1,
          description: 'Factorise the numerator by extracting the common factor of 4.',
          workingLatex: '\\frac{4(g^2 - h^2)}{g^2 + gh}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Notice the bracket on the top is a difference of two squares. Factorise it fully. Also factorise the denominator by extracting \\( g \\).',
          workingLatex: '\\frac{4(g-h)(g+h)}{g(g+h)}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cancel the common binomial factor of \\( (g+h) \\) from the numerator and denominator.',
          workingLatex: '\\frac{4(g-h)}{g}',
          explanation: ""
        }
      ], // Added closing bracket for the array of steps
      finalAnswer: '\\(\\frac{4(g-h)}{g}\\)',
    }
  },
  {
    id: 'a3-008',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 8',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify the expression fully: \\( \\frac{15m - 10}{5} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the numerator by extracting the highest common factor, which is 5.',
          workingLatex: '\\frac{5(3m - 2)}{5}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Cancel the common factor of 5 from the numerator and the denominator.',
          workingLatex: '3m - 2',
          explanation: ""
        }
      ],
      finalAnswer: '\\(3m - 2\\)',
    }
  },
  {
    id: 'a3-009',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 9',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{x^2 + 7x + 10}{x + 5} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the quadratic expression in the numerator.',
          workingLatex: '\\frac{(x + 2)(x + 5)}{x + 5}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Cancel the common binomial factor of \\( (x + 5) \\).',
          workingLatex: 'x + 2',
          explanation: ""
        }
      ],
      finalAnswer: '\\(x + 2\\)',
    }
  },
  {
    id: 'a3-010',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 10',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify the expression: \\( \\frac{y^2 - 9}{y + 3} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Recognise the numerator as a difference of two squares and factorise it.',
          workingLatex: '\\frac{(y - 3)(y + 3)}{y + 3}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Cancel the common factor \\( (y + 3) \\).',
          workingLatex: 'y - 3',
          explanation: ""
        }
      ],
      finalAnswer: '\\(y - 3\\)',
    }
  },
  {
    id: 'a3-011',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 11',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{8p^3q}{2pq^2} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Divide the numerical coefficients.',
          workingLatex: '\\frac{4p^3q}{pq^2}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Use the laws of indices to simplify the \\( p \\) terms.',
          workingLatex: '\\frac{4p^2q}{q^2}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Use the laws of indices to simplify the \\( q \\) terms.',
          workingLatex: '\\frac{4p^2}{q}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{4p^2}{q}\\)',
    }
  },
  {
    id: 'a3-012',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 12',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Write as a single fraction in its simplest form: \\( \\frac{3x}{4} + \\frac{x}{4} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Add the numerators together since the denominators are the same.',
          workingLatex: '\\frac{3x + x}{4}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Collect like terms on the numerator.',
          workingLatex: '\\frac{4x}{4}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Simplify the fraction by cancelling the common factor of 4.',
          workingLatex: 'x',
          explanation: ""
        }
      ],
      finalAnswer: '\\(x\\)',
    }
  },
  {
    id: 'a3-013',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 13',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction: \\( \\frac{x}{2} + \\frac{x}{3} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find a common denominator for 2 and 3, which is 6.',
          workingLatex: '\\frac{3x}{6} + \\frac{2x}{6}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Add the numerators over the common denominator.',
          workingLatex: '\\frac{3x + 2x}{6}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Simplify the numerator.',
          workingLatex: '\\frac{5x}{6}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{5x}{6}\\)',
    }
  },
  {
    id: 'a3-014',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 14',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{2x^2 + 6x}{x^2 + 3x} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the numerator by taking out the common factor of \\( 2x \\).',
          workingLatex: '\\frac{2x(x + 3)}{x^2 + 3x}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Factorise the denominator by taking out the common factor of \\( x \\).',
          workingLatex: '\\frac{2x(x + 3)}{x(x + 3)}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cancel the common factors \\( x \\) and \\( (x + 3) \\) from the top and bottom.',
          workingLatex: '2',
          explanation: ""
        }
      ],
      finalAnswer: '\\(2\\)',
    }
  },
  {
    id: 'a3-015',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 15',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{2x}{3} \\times \\frac{5}{4x} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the numerators together and the denominators together.',
          workingLatex: '\\frac{2x \\times 5}{3 \\times 4x}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify the resulting fraction.',
          workingLatex: '\\frac{10x}{12x}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cancel the common factors from the top and bottom.',
          workingLatex: '\\frac{5}{6}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{5}{6}\\)',
    }
  },
  {
    id: 'a3-016',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 16',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{3a}{b} \\div \\frac{6a^2}{b^2} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Change the division into a multiplication by flipping the second fraction.',
          workingLatex: '\\frac{3a}{b} \\times \\frac{b^2}{6a^2}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Multiply the numerators and the denominators.',
          workingLatex: '\\frac{3ab^2}{6a^2b}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Simplify the coefficients and use index laws to cancel the variables.',
          workingLatex: '\\frac{b}{2a}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{b}{2a}\\)',
    }
  },
  {
    id: 'a3-017',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 17',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction in its simplest form: \\( \\frac{5}{x+1} - \\frac{2}{x-2} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find a common denominator by multiplying the two denominators together.',
          workingLatex: '\\frac{5(x-2)}{(x+1)(x-2)} - \\frac{2(x+1)}{(x+1)(x-2)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Combine the numerators over the single common denominator.',
          workingLatex: '\\frac{5(x-2) - 2(x+1)}{(x+1)(x-2)}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Expand the brackets in the numerator and collect like terms.',
          workingLatex: '\\frac{5x - 10 - 2x - 2}{(x+1)(x-2)}',
          explanation: 'Be careful with the negative sign when expanding \\( -2(x+1) \\).'
        },
        {
          stepNumber: 4,
          description: 'Simplify the numerator to get the final answer.',
          workingLatex: '\\frac{3x - 12}{(x+1)(x-2)}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{3x - 12}{(x+1)(x-2)}\\)',
    }
  },
  {
    id: 'a3-018',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 18',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{x^2 - x - 12}{x^2 - 16} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the quadratic expression in the numerator.',
          workingLatex: '\\frac{(x - 4)(x + 3)}{x^2 - 16}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Factorise the denominator, which is a difference of two squares.',
          workingLatex: '\\frac{(x - 4)(x + 3)}{(x - 4)(x + 4)}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cancel the common factor of \\( (x - 4) \\) from the numerator and denominator.',
          workingLatex: '\\frac{x + 3}{x + 4}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{x + 3}{x + 4}\\)',
    }
  },
  {
    id: 'a3-019',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 19',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Write as a single fraction: \\( \\frac{2}{x} + \\frac{3}{2x} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify the lowest common denominator, which is \\( 2x \\). Convert the first fraction.',
          workingLatex: '\\frac{4}{2x} + \\frac{3}{2x}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Add the numerators together.',
          workingLatex: '\\frac{4 + 3}{2x}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Simplify to get the final fraction.',
          workingLatex: '\\frac{7}{2x}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{7}{2x}\\)',
    }
  },
  {
    id: 'a3-020',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 20',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{x+2}{3} \\times \\frac{9}{x^2 - 4} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the expression \\( x^2 - 4 \\) in the denominator.',
          workingLatex: '\\frac{x+2}{3} \\times \\frac{9}{(x-2)(x+2)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Cross-cancel the common numerical factors.',
          workingLatex: '\\frac{x+2}{1} \\times \\frac{3}{(x-2)(x+2)}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cross-cancel the common algebraic factor \\( (x+2) \\).',
          workingLatex: '1 \\times \\frac{3}{x-2}',
          explanation: ""
        },
        {
          stepNumber: 4,
          description: 'Multiply the remaining parts together.',
          workingLatex: '\\frac{3}{x-2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{3}{x-2}\\)',
    }
  },
  {
    id: 'a3-021',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 21',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{5 - x}{x^2 - 25} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the denominator as a difference of two squares.',
          workingLatex: '\\frac{5 - x}{(x - 5)(x + 5)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Factorise out a -1 from the numerator to reverse the terms.',
          workingLatex: '\\frac{-(x - 5)}{(x - 5)(x + 5)}',
          explanation: '\\( 5 - x \\) is the exact negative of \\( x - 5 \\), so pulling out a -1 creates a matching bracket.'
        },
        {
          stepNumber: 3,
          description: 'Cancel the matching \\( (x - 5) \\) bracket.',
          workingLatex: '\\frac{-1}{x + 5}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(-\\frac{1}{x + 5}\\)',
    }
  },
  {
    id: 'a3-022',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 22',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction: \\( \\frac{2x - 1}{3} + \\frac{x + 4}{5} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['algebraic fractions', 'adding', 'expanding brackets'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find a common denominator, which is 15.',
          workingLatex: '\\frac{5(2x - 1)}{15} + \\frac{3(x + 4)}{15}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the brackets on the numerators and write over a single fraction.',
          workingLatex: '\\frac{10x - 5 + 3x + 12}{15}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Collect like terms on the numerator to simplify fully.',
          workingLatex: '\\frac{13x + 7}{15}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{13x + 7}{15}\\)',
    }
  },
  {
    id: 'a3-023',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 23',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{2x+10}{6} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the numerator by taking out the highest common factor of 2.',
          workingLatex: '\\frac{2(x+5)}{6}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Cancel the common factor from the top and bottom.',
          workingLatex: '\\frac{x+5}{3}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{x+5}{3}\\)',
    }
  },
  {
    id: 'a3-024',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 24',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{6a-12b-15c}{3} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the expression on the top line by finding the highest common numerical factor, which is 3.',
          workingLatex: '\\frac{3(2a-4b-5c)}{3}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Cancel the common factor of 3 from the numerator and denominator.',
          workingLatex: '2a-4b-5c',
          explanation: ""
        }
      ],
      finalAnswer: '\\(2a-4b-5c\\)',
    }
  },
  {
    id: 'a3-025',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 25',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{np^2-2n^2p}{np} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the numerator by extracting the highest common algebraic factor, which is \\( np \\).',
          workingLatex: '\\frac{np(p-2n)}{np}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Cancel the shared factor of \\( np \\) from the top and bottom.',
          workingLatex: 'p-2n',
          explanation: ""
        }
      ],
      finalAnswer: '\\(p-2n\\)',
    }
  },
  {
    id: 'a3-026',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 26',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction in its simplest form: \\( \\frac{5}{y-1} + \\frac{3}{y-2} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find a common denominator by multiplying the two linear brackets together.',
          workingLatex: '\\frac{5(y-2)}{(y-1)(y-2)} + \\frac{3(y-1)}{(y-1)(y-2)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Add the numerators together over the common denominator.',
          workingLatex: '\\frac{5(y-2) + 3(y-1)}{(y-1)(y-2)}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Expand the brackets on the numerator.',
          workingLatex: '\\frac{5y - 10 + 3y - 3}{(y-1)(y-2)}',
          explanation: ""
        },
        {
          stepNumber: 4,
          description: 'Collect like terms to fully simplify the numerator.',
          workingLatex: '\\frac{8y - 13}{(y-1)(y-2)}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{8y - 13}{(y-1)(y-2)}\\)',
    }
  },
  {
    id: 'a3-027',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 27',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction in its simplest form: \\( \\frac{7}{r-5} - \\frac{4}{r+3} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find a common denominator by multiplying the two denominators.',
          workingLatex: '\\frac{7(r+3)}{(r-5)(r+3)} - \\frac{4(r-5)}{(r-5)(r+3)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Combine the numerators over the single denominator.',
          workingLatex: '\\frac{7(r+3) - 4(r-5)}{(r-5)(r+3)}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Expand the brackets on the numerator carefully, paying attention to the negative sign.',
          workingLatex: '\\frac{7r + 21 - 4r + 20}{(r-5)(r+3)}',
          explanation: 'Be careful to note that \\( -4 \\times -5 = +20 \\).'
        },
        {
          stepNumber: 4,
          description: 'Collect like terms on the numerator to finish.',
          workingLatex: '\\frac{3r + 41}{(r-5)(r+3)}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{3r + 41}{(r-5)(r+3)}\\)',
    }
  },
  {
    id: 'a3-028',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 28',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction in its simplest form: \\( \\frac{z+1}{z+2} - \\frac{z+3}{z+4} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Form equivalent fractions with a common denominator of \\( (z+2)(z+4) \\).',
          workingLatex: '\\frac{(z+1)(z+4)}{(z+2)(z+4)} - \\frac{(z+3)(z+2)}{(z+2)(z+4)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Write as a single fraction.',
          workingLatex: '\\frac{(z+1)(z+4) - (z+3)(z+2)}{(z+2)(z+4)}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Expand the double brackets on the numerator.',
          workingLatex: '\\frac{(z^2 + 5z + 4) - (z^2 + 5z + 6)}{(z+2)(z+4)}',
          explanation: ""
        },
        {
          stepNumber: 4,
          description: 'Subtract the expanded terms and simplify the numerator.',
          workingLatex: '\\frac{-2}{(z+2)(z+4)}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{-2}{(z+2)(z+4)}\\)',
    }
  },
  {
    id: 'a3-029',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 29',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction: \\( \\frac{2}{t} + \\frac{13}{r^2} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify the common denominator by multiplying the two distinct denominators together.',
          workingLatex: '\\frac{2(r^2)}{tr^2} + \\frac{13(t)}{tr^2}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Combine the numerators over the single common denominator.',
          workingLatex: '\\frac{2r^2 + 13t}{tr^2}',
          explanation: 'Since the variables are different, you cannot collect the terms any further.'
        }
      ],
      finalAnswer: '\\(\\frac{2r^2 + 13t}{tr^2}\\)',
    }
  },
  {
    id: 'a3-030',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 30',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction in its simplest form: \\( \\frac{8}{p} - \\frac{1}{p-3} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find a common denominator, which is \\( p(p-3) \\).',
          workingLatex: '\\frac{8(p-3)}{p(p-3)} - \\frac{1(p)}{p(p-3)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Combine the numerators over the single denominator.',
          workingLatex: '\\frac{8(p-3) - p}{p(p-3)}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Expand the bracket on the numerator.',
          workingLatex: '\\frac{8p - 24 - p}{p(p-3)}',
          explanation: ""
        },
        {
          stepNumber: 4,
          description: 'Collect like terms to simplify the numerator fully.',
          workingLatex: '\\frac{7p - 24}{p(p-3)}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{7p - 24}{p(p-3)}\\)',
    }
  },
  {
    id: 'a3-031',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 31',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{10yz - 40y^3z + 60y^2z^3}{10z^2} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the numerator by extracting the highest common factor of all three terms, which is \\( 10yz \\).',
          workingLatex: '\\frac{10yz(1 - 4y^2 + 6yz^2)}{10z^2}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Cancel the common factor of \\( 10z \\) from the numerator and denominator.',
          workingLatex: '\\frac{y(1 - 4y^2 + 6yz^2)}{z}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{y(1 - 4y^2 + 6yz^2)}{z}\\)',
    }
  },
  {
    id: 'a3-032',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 32',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{4st + 6s^2t + 9s^3t}{2t} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the numerator by extracting the common factor, which is \\( t \\).',
          workingLatex: '\\frac{t(4s + 6s^2 + 9s^3)}{2t}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Cancel the common factor of \\( t \\) from the top and bottom.',
          workingLatex: '\\frac{4s + 6s^2 + 9s^3}{2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{4s + 6s^2 + 9s^3}{2}\\)',
    }
  },
  {
    id: 'a3-033',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 33',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction in its simplest form: \\( \\frac{1}{q+1} + \\frac{3}{q-2} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find a common denominator by multiplying the two linear denominators together.',
          workingLatex: '\\frac{1(q-2)}{(q+1)(q-2)} + \\frac{3(q+1)}{(q+1)(q-2)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Combine the numerators over the single common denominator.',
          workingLatex: '\\frac{1(q-2) + 3(q+1)}{(q+1)(q-2)}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Expand the brackets on the numerator.',
          workingLatex: '\\frac{q - 2 + 3q + 3}{(q+1)(q-2)}',
          explanation: ""
        },
        {
          stepNumber: 4,
          description: 'Collect like terms to fully simplify the numerator.',
          workingLatex: '\\frac{4q + 1}{(q+1)(q-2)}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{4q + 1}{(q+1)(q-2)}\\)',
    }
  },
  {
    id: 'a3-034',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 34',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction in its simplest form: \\( \\frac{x}{x+z} + \\frac{2z}{x-z} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Form equivalent fractions with a common denominator of \\( (x+z)(x-z) \\).',
          workingLatex: '\\frac{x(x-z)}{(x+z)(x-z)} + \\frac{2z(x+z)}{(x+z)(x-z)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Combine the numerators over the shared denominator.',
          workingLatex: '\\frac{x(x-z) + 2z(x+z)}{(x+z)(x-z)}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Expand the brackets on the numerator.',
          workingLatex: '\\frac{x^2 - xz + 2xz + 2z^2}{(x+z)(x-z)}',
          explanation: ""
        },
        {
          stepNumber: 4,
          description: 'Collect the like terms to simplify the numerator.',
          workingLatex: '\\frac{x^2 + xz + 2z^2}{(x+z)(x-z)}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{x^2 + xz + 2z^2}{(x+z)(x-z)}\\)',
    }
  },
  {
    id: 'a3-035',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 35',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction: \\( \\frac{1}{2p} - \\frac{1}{5q} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find a common denominator by multiplying the two distinct denominators, which gives \\( 10pq \\).',
          workingLatex: '\\frac{1(5q)}{10pq} - \\frac{1(2p)}{10pq}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Combine the numerators over the single common denominator.',
          workingLatex: '\\frac{5q - 2p}{10pq}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{5q - 2p}{10pq}\\)',
    }
  },
  {
    id: 'a3-036',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 36',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction: \\( \\frac{2}{ab^3} - \\frac{9}{a^3b} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify the lowest common multiple for the denominators, which is \\( a^3b^3 \\).',
          workingLatex: '\\frac{2(a^2)}{ab^3(a^2)} - \\frac{9(b^2)}{a^3b(b^2)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Multiply the terms out.',
          workingLatex: '\\frac{2a^2}{a^3b^3} - \\frac{9b^2}{a^3b^3}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Combine the numerators over the single common denominator.',
          workingLatex: '\\frac{2a^2 - 9b^2}{a^3b^3}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{2a^2 - 9b^2}{a^3b^3}\\)',
    }
  },
  {
    id: 'a3-037',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 37',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction in its simplest form: \\( \\frac{w}{2(w-2)} + \\frac{3w}{w-7} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find a common denominator, which is \\( 2(w-2)(w-7) \\).',
          workingLatex: '\\frac{w(w-7)}{2(w-2)(w-7)} + \\frac{3w(2)(w-2)}{2(w-2)(w-7)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Combine the numerators and simplify the multiplier on the second term.',
          workingLatex: '\\frac{w(w-7) + 6w(w-2)}{2(w-2)(w-7)}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Expand the brackets on the numerator.',
          workingLatex: '\\frac{w^2 - 7w + 6w^2 - 12w}{2(w-2)(w-7)}',
          explanation: ""
        },
        {
          stepNumber: 4,
          description: 'Collect like terms to simplify the numerator fully.',
          workingLatex: '\\frac{7w^2 - 19w}{2(w-2)(w-7)}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{7w^2 - 19w}{2(w-2)(w-7)}\\)',
    }
  },
  {
    id: 'a3-038',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 38',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{12cd - 6c^2d + 3c^3d^2}{12c^2de} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the numerator by extracting the highest common factor of all three terms, which is \\( 3cd \\).',
          workingLatex: '\\frac{3cd(4 - 2c + c^2d)}{12c^2de}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Cancel the common factors of \\( 3 \\), \\( c \\), and \\( d \\) from the numerator and denominator.',
          workingLatex: '\\frac{4 - 2c + c^2d}{4ce}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{4 - 2c + c^2d}{4ce}\\)',
    }
  },
  {
    id: 'a3-039',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 39',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction: \\( \\frac{2}{mn} - \\frac{3m}{n} + \\frac{n^2}{m} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify the common denominator for all three fractions, which is \\( mn \\).',
          workingLatex: '\\frac{2}{mn} - \\frac{3m(m)}{mn} + \\frac{n^2(n)}{mn}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify the numerators of the equivalent fractions.',
          workingLatex: '\\frac{2}{mn} - \\frac{3m^2}{mn} + \\frac{n^3}{mn}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Combine the numerators over the single common denominator.',
          workingLatex: '\\frac{2 - 3m^2 + n^3}{mn}',
          explanation: 'Since these are not like terms, they cannot be simplified further.'
        }
      ],
      finalAnswer: '\\(\\frac{2 - 3m^2 + n^3}{mn}\\)',
    }
  },
  {
    id: 'a3-040',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 40',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction in its simplest form: \\( \\frac{y}{2x+3} - \\frac{2y}{3-x} \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find a common denominator by multiplying the two linear denominators together.',
          workingLatex: '\\frac{y(3-x)}{(2x+3)(3-x)} - \\frac{2y(2x+3)}{(2x+3)(3-x)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Combine the numerators over the single common denominator.',
          workingLatex: '\\frac{y(3-x) - 2y(2x+3)}{(2x+3)(3-x)}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Expand the brackets on the numerator.',
          workingLatex: '\\frac{3y - xy - (4xy + 6y)}{(2x+3)(3-x)}',
          explanation: ""
        },
        {
          stepNumber: 4,
          description: 'Collect like terms and simplify fully.',
          workingLatex: '\\frac{-3y - 5xy}{(2x+3)(3-x)}',
          explanation: '\\( 3y - 6y = -3y \\) and \\( -xy - 4xy = -5xy \\). You can also factorise out a \\( -y \\) on top to get \\( \\frac{-y(3+5x)}{(2x+3)(3-x)} \\).'
        }
      ],
      finalAnswer: '\\(\\frac{-3y - 5xy}{(2x+3)(3-x)}\\)',
    }
  },
  {
    id: 'a3-041',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 41',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction: \\( \\frac{1}{x} + \\frac{2x}{y} + \\frac{4}{x^2} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify the lowest common multiple for the denominators, which is \\( x^2y \\).',
          workingLatex: '\\frac{1(xy)}{x^2y} + \\frac{2x(x^2)}{x^2y} + \\frac{4(y)}{x^2y}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify the numerators of the equivalent fractions.',
          workingLatex: '\\frac{xy}{x^2y} + \\frac{2x^3}{x^2y} + \\frac{4y}{x^2y}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Combine the numerators over the single common denominator.',
          workingLatex: '\\frac{xy + 2x^3 + 4y}{x^2y}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{xy + 2x^3 + 4y}{x^2y}\\)',
    }
  },
  {
    id: 'a3-042',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 42',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction: \\( \\frac{ab}{c} + \\frac{bc}{a} + \\frac{ca}{b} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find a common denominator by multiplying all three distinct denominators together to get \\( abc \\).',
          workingLatex: '\\frac{ab(ab)}{abc} + \\frac{bc(bc)}{abc} + \\frac{ca(ca)}{abc}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify the numerators by applying the laws of indices.',
          workingLatex: '\\frac{a^2b^2}{abc} + \\frac{b^2c^2}{abc} + \\frac{c^2a^2}{abc}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Combine the terms over the single denominator.',
          workingLatex: '\\frac{a^2b^2 + b^2c^2 + c^2a^2}{abc}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{a^2b^2 + b^2c^2 + c^2a^2}{abc}\\)',
    }
  },
  {
    id: 'a3-043',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 43',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction: \\( 2 + \\frac{a^2}{b} - \\frac{2b}{a^3} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify the common denominator, which is \\( a^3b \\). Convert the whole number 2 into a fraction.',
          workingLatex: '\\frac{2(a^3b)}{a^3b} + \\frac{a^2(a^3)}{a^3b} - \\frac{2b(b)}{a^3b}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify the numerators of the equivalent fractions.',
          workingLatex: '\\frac{2a^3b}{a^3b} + \\frac{a^5}{a^3b} - \\frac{2b^2}{a^3b}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Combine the numerators over the single common denominator.',
          workingLatex: '\\frac{2a^3b + a^5 - 2b^2}{a^3b}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{2a^3b + a^5 - 2b^2}{a^3b}\\)',
    }
  },
  {
    id: 'a3-044',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 44',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{2x + x^2y - x^2}{x^2 + 3x} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the numerator by extracting the common factor of \\( x \\).',
          workingLatex: '\\frac{x(2 + xy - x)}{x^2 + 3x}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Factorise the denominator by extracting the common factor of \\( x \\).',
          workingLatex: '\\frac{x(2 + xy - x)}{x(x + 3)}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cancel the common factor of \\( x \\) to simplify fully.',
          workingLatex: '\\frac{2 + xy - x}{x + 3}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{2 + xy - x}{x + 3}\\)',
    }
  },
  {
    id: 'a3-045',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 45',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{12cd - 6c^2d + 3c^3d^2}{12c^2de} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the numerator by extracting the highest common factor of \\( 3cd \\).',
          workingLatex: '\\frac{3cd(4 - 2c + c^2d)}{12c^2de}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Cancel the common factors of \\( 3 \\), \\( c \\), and \\( d \\) from the numerator and denominator.',
          workingLatex: '\\frac{4 - 2c + c^2d}{4ce}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{4 - 2c + c^2d}{4ce}\\)',
    }
  },
  {
    id: 'a3-046',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 46',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{x^2 - 9}{x^2 + 5x + 6} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the numerator and denominator separately, then cancel.',
          workingLatex: '\\begin{aligned} \\frac{x^2 - 9}{x^2 + 5x + 6} &= \\frac{(x-3)(x+3)}{(x+2)(x+3)} \\\\ &= \\frac{x-3}{x+2} \\end{aligned}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{x-3}{x+2}\\)',
    }
  },
  {
    id: 'a3-047',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 47',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{ax+ay}{az} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the top line by taking out the common factor of \\( a \\).',
          workingLatex: '\\frac{a(x+y)}{az}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Cancel the common factor of \\( a \\) from the numerator and denominator.',
          workingLatex: '\\frac{x+y}{z}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{x+y}{z}\\)',
    }
  },
  {
    id: 'a3-048',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 48',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction: \\( \\frac{x}{3} + \\frac{x}{4} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find a common denominator for 3 and 4, which is 12.',
          workingLatex: '\\frac{4x}{12} + \\frac{3x}{12}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Add the numerators together over the common denominator.',
          workingLatex: '\\frac{4x + 3x}{12}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Simplify the numerator.',
          workingLatex: '\\frac{7x}{12}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{7x}{12}\\)',
    }
  },
  {
    id: 'a3-049',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 49',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{5x^2 + 10xy}{5x} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the numerator by extracting the highest common factor, which is \\( 5x \\).',
          workingLatex: '\\frac{5x(x + 2y)}{5x}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Cancel the common factor of \\( 5x \\) from the numerator and the denominator.',
          workingLatex: 'x + 2y',
          explanation: ""
        }
      ],
      finalAnswer: '\\(x + 2y\\)',
    }
  },
  {
    id: 'a3-050',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 50',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction in its simplest form: \\( \\frac{2}{x+3} - \\frac{1}{x-1} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find a common denominator by multiplying the two linear denominators together.',
          workingLatex: '\\frac{2(x-1)}{(x+3)(x-1)} - \\frac{1(x+3)}{(x+3)(x-1)}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Combine the numerators over the single common denominator.',
          workingLatex: '\\frac{2(x-1) - 1(x+3)}{(x+3)(x-1)}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Expand the brackets on the numerator.',
          workingLatex: '\\frac{2x - 2 - x - 3}{(x+3)(x-1)}',
          explanation: 'Be careful with the negative sign when expanding the second bracket.'
        },
        {
          stepNumber: 4,
          description: 'Collect like terms to fully simplify the numerator.',
          workingLatex: '\\frac{x - 5}{(x+3)(x-1)}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{x - 5}{(x+3)(x-1)}\\)',
    }
  },
  {
    id: 'a3-051',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 51',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express as a single fraction: \\( 3 + \\frac{2}{x-2} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Rewrite the whole number 3 as a fraction with a denominator of \\( x-2 \\).',
          workingLatex: '\\frac{3(x-2)}{x-2} + \\frac{2}{x-2}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Expand the numerator of the first fraction.',
          workingLatex: '\\frac{3x - 6}{x-2} + \\frac{2}{x-2}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Add the numerators together over the common denominator and simplify.',
          workingLatex: '\\frac{3x - 6 + 2}{x-2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{3x - 4}{x-2}\\)',
    }
  },
  {
    id: 'a3-052',
    topicRef: 'a3',
    topicTitle: 'Algebraic Fractions 52',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify fully: \\( \\frac{x^2 - 16}{4x + 16} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the numerator using the difference of two squares.',
          workingLatex: '\\frac{(x-4)(x+4)}{4x + 16}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Factorise the denominator by extracting the common numerical factor of 4.',
          workingLatex: '\\frac{(x-4)(x+4)}{4(x+4)}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cancel the common factor of \\( (x+4) \\) from the numerator and denominator.',
          workingLatex: '\\frac{x-4}{4}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{x-4}{4}\\)',
    }
  }
];
