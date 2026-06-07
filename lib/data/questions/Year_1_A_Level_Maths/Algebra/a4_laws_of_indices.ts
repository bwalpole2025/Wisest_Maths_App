import { Question } from "@/lib/types";

/**
 * Topic: Intersection of Graphs
 * Ref:   a6
 *
 * Add your questions to the array below.
 * ID convention: "a6-001", "a6-002", etc.
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
    id: 'a4-001',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 01',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, leaving your answer as a power: \\( 5^3 \\times 5^4 \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'When multiplying powers with the same base, add the exponents.',
          workingLatex: '5^3 \\times 5^4 = 5^{3+4}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Add the exponents together.',
          workingLatex: '5^{7}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(5^{7}\\)',
    }
  },
  {
    id: 'a4-002',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 02',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, leaving your answer as a power: \\( 8^5 \\div 8^2 \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'When dividing powers with the same base, subtract the exponents.',
          workingLatex: '8^5 \\div 8^2 = 8^{5-2}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Subtract the exponents.',
          workingLatex: '8^{3}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(8^{3}\\)',
    }
  },
  {
    id: 'a4-003',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 03',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, leaving your answer as a power: \\( (6^3)^2 \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'When raising a power to another power, multiply the exponents.',
          workingLatex: '(6^3)^2 = 6^{3 \\times 2}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Multiply the exponents together.',
          workingLatex: '6^{6}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(6^{6}\\)',
    }
  },
  {
    id: 'a4-004',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 04',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, leaving your answer as a single power of \\( y \\): \\( y^{-1} \\times y^2 \\times y^3 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Add all the exponents together since the bases are the same and the terms are multiplied.',
          workingLatex: 'y^{-1+2+3}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify the sum of the exponents.',
          workingLatex: 'y^{4}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(y^{4}\\)',
    }
  },
  {
    id: 'a4-005',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 05',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, leaving your answer as a power: \\( \\frac{6^{11}}{6^6} \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Writing the fraction as a division and subtracting exponents.',
          workingLatex: '\\frac{6^{11}}{6^6} = 6^{11-6}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify the exponent.',
          workingLatex: '6^{5}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(6^{5}\\)',
    }
  },
  {
    id: 'a4-006',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 06',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, leaving your answer as a single power of \\( r \\): \\( \\frac{r^2}{r^6} \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Subtract the exponents using the division law.',
          workingLatex: 'r^{2-6}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify the exponent.',
          workingLatex: 'r^{-4}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(r^{-4}\\)',
    }
  },
  {
    id: 'a4-007',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 07',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify: \\( (k^{-2})^5 \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the exponents using the power-of-a-power law.',
          workingLatex: 'k^{-2 \\times 5}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Evaluate the product of the exponents.',
          workingLatex: 'k^{-10}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(k^{-10}\\)',
    }
  },
  {
    id: 'a4-008',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 08',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( 4^{\\frac{1}{2}} \\times 4^{\\frac{1}{2}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Add the fractional exponents since the bases are the same.',
          workingLatex: '4^{\\frac{1}{2}+\\frac{1}{2}} = 4^{1}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Evaluate.',
          workingLatex: '4',
          explanation: ""
        }
      ],
      finalAnswer: '\\(4\\)',
    }
  },
  {
    id: 'a4-009',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 09',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( 3^4 \\div 3^1 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Subtract the exponents using the division law.',
          workingLatex: '3^{4-1} = 3^{3}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Evaluate \\( 3^3 \\).',
          workingLatex: '3 \\times 3 \\times 3 = 27',
          explanation: ""
        }
      ],
      finalAnswer: '\\(27\\)',
    }
  },
  {
    id: 'a4-010',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 10',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( (2^3)^2 \\div 2^4 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Apply the power-of-a-power law to simplify \\( (2^3)^2 \\).',
          workingLatex: '2^{3 \\times 2} \\div 2^4 = 2^6 \\div 2^4',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Now apply the division law.',
          workingLatex: '2^{6-4} = 2^2',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Evaluate \\( 2^2 \\).',
          workingLatex: '4',
          explanation: ""
        }
      ],
      finalAnswer: '\\(4\\)',
    }
  },
  {
    id: 'a4-011',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 11',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( 7^0 \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Apply the zero exponent rule.',
          workingLatex: '7^0 = 1',
          explanation: 'Any non-zero number raised to the power 0 equals 1. This follows from the division law: \\( a^n \\div a^n = a^{n-n} = a^0 = 1 \\).'
        }
      ],
      finalAnswer: '\\(1\\)',
    }
  },
  {
    id: 'a4-012',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 12',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( \\left(\\frac{3}{5}\\right)^0 \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Apply the zero exponent rule.',
          workingLatex: '\\left(\\frac{3}{5}\\right)^0 = 1',
          explanation: ""
        }
      ],
      finalAnswer: '\\(1\\)',
    }
  },
  {
    id: 'a4-013',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 13',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( 9^{\\frac{1}{2}} \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Recognise that a power of \\( \\frac{1}{2} \\) means the square root.',
          workingLatex: '9^{\\frac{1}{2}} = \\sqrt{9}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Evaluate the square root.',
          workingLatex: '3',
          explanation: ""
        }
      ],
      finalAnswer: '\\(3\\)',
    }
  },
  {
    id: 'a4-014',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 14',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( 8^{\\frac{1}{3}} \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Recognise that a power of \\( \\frac{1}{3} \\) means the cube root.',
          workingLatex: '8^{\\frac{1}{3}} = \\sqrt[3]{8}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Evaluate the cube root.',
          workingLatex: '2',
          explanation: ""
        }
      ],
      finalAnswer: '\\(2\\)',
    }
  },
  {
    id: 'a4-015',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 15',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( 27^{\\frac{1}{3}} \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'The exponent \\( \\frac{1}{3} \\) means take the cube root.',
          workingLatex: '27^{\\frac{1}{3}} = \\sqrt[3]{27}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Evaluate.',
          workingLatex: '3',
          explanation: ""
        }
      ],
      finalAnswer: '\\(3\\)',
    }
  },
  {
    id: 'a4-016',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 16',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( 16^{\\frac{3}{4}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Split the fractional exponent: root first, then power.',
          workingLatex: '16^{\\frac{3}{4}} = \\left(16^{\\frac{1}{4}}\\right)^3',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Evaluate the fourth root of 16.',
          workingLatex: '16^{\\frac{1}{4}} = 2',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cube the result.',
          workingLatex: '2^3 = 8',
          explanation: ""
        }
      ],
      finalAnswer: '\\(8\\)',
    }
  },
  {
    id: 'a4-017',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 17',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( 25^{\\frac{3}{2}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Split the fractional exponent: root first, then power.',
          workingLatex: '25^{\\frac{3}{2}} = \\left(25^{\\frac{1}{2}}\\right)^3',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Take the square root of 25.',
          workingLatex: '25^{\\frac{1}{2}} = 5',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cube the result.',
          workingLatex: '5^3 = 125',
          explanation: ""
        }
      ],
      finalAnswer: '\\(125\\)',
    }
  },
  {
    id: 'a4-018',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 18',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( 32^{\\frac{2}{5}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Split the fractional exponent: fifth root first, then square.',
          workingLatex: '32^{\\frac{2}{5}} = \\left(32^{\\frac{1}{5}}\\right)^2',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Evaluate the fifth root of 32.',
          workingLatex: '32^{\\frac{1}{5}} = 2',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Square the result.',
          workingLatex: '2^2 = 4',
          explanation: ""
        }
      ],
      finalAnswer: '\\(4\\)',
    }
  },
  {
    id: 'a4-019',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 19',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( 4^{-\\frac{1}{2}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Deal with the negative exponent by taking the reciprocal.',
          workingLatex: '4^{-\\frac{1}{2}} = \\frac{1}{4^{\\frac{1}{2}}}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Evaluate the square root of 4.',
          workingLatex: '4^{\\frac{1}{2}} = 2',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Write the final answer.',
          workingLatex: '\\frac{1}{2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{1}{2}\\)',
    }
  },
  {
    id: 'a4-020',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 20',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( 27^{-\\frac{2}{3}} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Deal with the negative sign by taking the reciprocal.',
          workingLatex: '27^{-\\frac{2}{3}} = \\frac{1}{27^{\\frac{2}{3}}}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Split the fractional exponent: cube root first, then square.',
          workingLatex: '27^{\\frac{2}{3}} = \\left(27^{\\frac{1}{3}}\\right)^2 = 3^2 = 9',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Write the final answer.',
          workingLatex: '\\frac{1}{9}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{1}{9}\\)',
    }
  },
  {
    id: 'a4-021',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 21',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express \\( \\frac{1}{m} \\) as a power of \\( m \\).',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '"One over" a base is the same as that base raised to a negative power.',
          workingLatex: '\\frac{1}{m} = m^{-1}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(m^{-1}\\)',
    }
  },
  {
    id: 'a4-022',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 22',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express \\( \\sqrt[3]{n} \\) as a power of \\( n \\).',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'The cube root can be written as a fractional exponent.',
          workingLatex: '\\sqrt[3]{n} = n^{\\frac{1}{3}}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(n^{\\frac{1}{3}}\\)',
    }
  },
  {
    id: 'a4-023',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 23',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express \\( \\frac{1}{\\sqrt{t}} \\) as a single power of \\( t \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Rewrite the square root as a fractional exponent.',
          workingLatex: '\\frac{1}{\\sqrt{t}} = \\frac{1}{t^{\\frac{1}{2}}}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Use the negative exponent rule to bring the base to the numerator.',
          workingLatex: 't^{-\\frac{1}{2}}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(t^{-\\frac{1}{2}}\\)',
    }
  },
  {
    id: 'a4-024',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 24',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Express \\( \\left(\\frac{1}{\\sqrt[3]{x}}\\right)^2 \\) as a single power of \\( x \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Rewrite the expression using index notation.',
          workingLatex: '\\left(\\frac{1}{x^{\\frac{1}{3}}}\\right)^2 = \\left(x^{-\\frac{1}{3}}\\right)^2',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Apply the power-of-a-power law.',
          workingLatex: 'x^{-\\frac{1}{3} \\times 2} = x^{-\\frac{2}{3}}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(x^{-\\frac{2}{3}}\\)',
    }
  },
  {
    id: 'a4-025',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 25',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify: \\( (z^4)^{\\frac{1}{2}} \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the exponents using the power-of-a-power law.',
          workingLatex: 'z^{4 \\times \\frac{1}{2}} = z^{2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(z^{2}\\)',
    }
  },
  {
    id: 'a4-026',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 26',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify: \\( (8^4)^{-\\frac{1}{2}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Multiply the exponents.',
          workingLatex: '8^{4 \\times (-\\frac{1}{2})} = 8^{-2}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Deal with the negative exponent.',
          workingLatex: '8^{-2} = \\frac{1}{8^2} = \\frac{1}{64}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{1}{64}\\)',
    }
  },
  {
    id: 'a4-027',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 27',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( \\frac{2^3 \\times 2}{2^5} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Simplify the numerator using the multiplication law.',
          workingLatex: '\\frac{2^{3+1}}{2^5} = \\frac{2^4}{2^5}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Apply the division law.',
          workingLatex: '2^{4-5} = 2^{-1}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Evaluate.',
          workingLatex: '2^{-1} = \\frac{1}{2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{1}{2}\\)',
    }
  },
  {
    id: 'a4-028',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 28',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( \\frac{7^3 \\times 7^4}{7^6} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Simplify the numerator by adding the exponents.',
          workingLatex: '\\frac{7^{3+4}}{7^6} = \\frac{7^7}{7^6}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Divide by subtracting exponents.',
          workingLatex: '7^{7-6} = 7^1 = 7',
          explanation: ""
        }
      ],
      finalAnswer: '\\(7\\)',
    }
  },
  {
    id: 'a4-029',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 29',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( (3^2)^3 \\div (3^1)^4 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Apply the power-of-a-power law to both parts.',
          workingLatex: '3^{2 \\times 3} \\div 3^{1 \\times 4} = 3^6 \\div 3^4',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Subtract the exponents.',
          workingLatex: '3^{6-4} = 3^2',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Evaluate.',
          workingLatex: '3^2 = 9',
          explanation: ""
        }
      ],
      finalAnswer: '\\(9\\)',
    }
  },
  {
    id: 'a4-030',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 30',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( \\frac{(2^{\\frac{1}{2}})^6 \\times (2^{-1})^4}{(2^{-4})^{-2}} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Apply the power-of-a-power law to each bracket.',
          workingLatex: '\\frac{2^{\\frac{1}{2} \\times 6} \\times 2^{-1 \\times 4}}{2^{-4 \\times (-2)}} = \\frac{2^3 \\times 2^{-4}}{2^8}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify the numerator by adding exponents.',
          workingLatex: '\\frac{2^{3+(-4)}}{2^8} = \\frac{2^{-1}}{2^8}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Divide by subtracting the exponents.',
          workingLatex: '2^{-1-8} = 2^{-9}',
          explanation: ""
        },
        {
          stepNumber: 4,
          description: 'Express as a fraction.',
          workingLatex: '2^{-9} = \\frac{1}{2^9} = \\frac{1}{512}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{1}{512}\\)',
    }
  },
  {
    id: 'a4-031',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 31',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, leaving your answer as a single power of \\( a \\): \\( \\frac{a^5 \\times a^3}{a^2} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Simplify the numerator by adding the exponents.',
          workingLatex: '\\frac{a^{5+3}}{a^2} = \\frac{a^8}{a^2}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Divide by subtracting the exponents.',
          workingLatex: 'a^{8-2} = a^6',
          explanation: ""
        }
      ],
      finalAnswer: '\\(a^6\\)',
    }
  },
  {
    id: 'a4-032',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 32',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify: \\( \\frac{c^4 d^{\\frac{1}{2}}}{c^{-1} d^3} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Apply the division law to each variable separately.',
          workingLatex: 'c^{4-(-1)} \\times d^{\\frac{1}{2}-3}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify each exponent.',
          workingLatex: 'c^{5} d^{-\\frac{5}{2}}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(c^{5} d^{-\\frac{5}{2}}\\)',
    }
  },
  {
    id: 'a4-033',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 33',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify: \\( \\frac{12y z^{\\frac{1}{3}}}{4y z^{\\frac{1}{2}}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Divide the numerical coefficients and apply the division law to each variable.',
          workingLatex: '\\frac{12}{4} \\times y^{1-1} \\times z^{\\frac{1}{3}-\\frac{1}{2}}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify each part.',
          workingLatex: '3 \\times y^0 \\times z^{-\\frac{1}{6}} = 3z^{-\\frac{1}{6}}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(3z^{-\\frac{1}{6}}\\)',
    }
  },
  {
    id: 'a4-034',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 34',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify: \\( (ab^2)^3 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Raise each factor inside the bracket to the power 3.',
          workingLatex: 'a^3 \\times (b^2)^3',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Apply the power-of-a-power law to \\( (b^2)^3 \\).',
          workingLatex: 'a^3 b^{6}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(a^3 b^{6}\\)',
    }
  },
  {
    id: 'a4-035',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 35',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify: \\( (mn^{\\frac{1}{2}})^4 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Raise each factor inside the bracket to the power 4.',
          workingLatex: 'm^4 \\times (n^{\\frac{1}{2}})^4',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Apply the power-of-a-power law.',
          workingLatex: 'm^4 n^{\\frac{1}{2} \\times 4} = m^4 n^{2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(m^4 n^{2}\\)',
    }
  },
  {
    id: 'a4-036',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 36',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify: \\( \\frac{p^3 q^4}{p^5 q} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Apply the division law to each variable separately.',
          workingLatex: 'p^{3-5} \\times q^{4-1}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: 'p^{-2} q^{3}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(p^{-2} q^{3}\\)',
    }
  },
  {
    id: 'a4-037',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 37',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( (4^{-\\frac{1}{2}})^2 \\times (4^{-1})^{\\frac{1}{2}} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Apply the power-of-a-power law to each bracket.',
          workingLatex: '4^{-\\frac{1}{2} \\times 2} \\times 4^{-1 \\times \\frac{1}{2}} = 4^{-1} \\times 4^{-\\frac{1}{2}}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Add the exponents since the bases are the same.',
          workingLatex: '4^{-1 + (-\\frac{1}{2})} = 4^{-\\frac{3}{2}}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Evaluate \\( 4^{-\\frac{3}{2}} \\).',
          workingLatex: '\\frac{1}{4^{\\frac{3}{2}}} = \\frac{1}{(\\sqrt{4})^3} = \\frac{1}{2^3} = \\frac{1}{8}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{1}{8}\\)',
    }
  },
  {
    id: 'a4-038',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 38',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Find the value of \\( x \\): \\( 4^x = \\sqrt{4} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Rewrite the right-hand side using index notation.',
          workingLatex: '\\sqrt{4} = 4^{\\frac{1}{2}}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Compare the exponents since the bases are equal.',
          workingLatex: '4^x = 4^{\\frac{1}{2}} \\implies x = \\frac{1}{2}',
          explanation: 'If \\( a^x = a^y \\) then \\( x = y \\).'
        }
      ],
      finalAnswer: '\\(x = \\frac{1}{2}\\)',
    }
  },
  {
    id: 'a4-039',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 39',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Find the value of \\( x \\): \\( 9^x = \\frac{1}{3} \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Write both sides with the same base. Since \\( 9 = 3^2 \\), rewrite the left-hand side.',
          workingLatex: '(3^2)^x = 3^{-1}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify the left-hand side using the power-of-a-power law.',
          workingLatex: '3^{2x} = 3^{-1}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Since the bases are equal, set the exponents equal and solve.',
          workingLatex: '2x = -1 \\implies x = -\\frac{1}{2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(x = -\\frac{1}{2}\\)',
    }
  },
  {
    id: 'a4-040',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 40',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Find the value of \\( x \\): \\( \\sqrt{5} \\times 5^3 = 5^x \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Rewrite \\( \\sqrt{5} \\) as a power of 5.',
          workingLatex: '5^{\\frac{1}{2}} \\times 5^3 = 5^x',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Add the exponents on the left-hand side.',
          workingLatex: '5^{\\frac{1}{2}+3} = 5^{\\frac{7}{2}} = 5^x',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Compare exponents.',
          workingLatex: 'x = \\frac{7}{2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(x = \\frac{7}{2}\\)',
    }
  },
  {
    id: 'a4-041',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 41',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, leaving your answer as a power: \\( 10^6 \\times 10^{-2} \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Add the exponents since the bases are the same.',
          workingLatex: '10^{6+(-2)} = 10^{6-2}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify the exponent.',
          workingLatex: '10^{4}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(10^{4}\\)',
    }
  },
  {
    id: 'a4-042',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 42',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( 64^{\\frac{1}{3}} \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Recognise that a power of \\( \\frac{1}{3} \\) means the cube root.',
          workingLatex: '64^{\\frac{1}{3}} = \\sqrt[3]{64}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Evaluate the cube root.',
          workingLatex: '4',
          explanation: ""
        }
      ],
      finalAnswer: '\\(4\\)',
    }
  },
  {
    id: 'a4-043',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 43',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, leaving your answer as a single power of \\( w \\): \\( w^7 \\div w^{-3} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Subtract the exponents using the division law.',
          workingLatex: 'w^{7-(-3)}',
          explanation: '\\( a^m \\div a^n = a^{m-n} \\). Be careful: subtracting a negative is the same as adding.'
        },
        {
          stepNumber: 2,
          description: 'Simplify the exponent.',
          workingLatex: 'w^{10}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(w^{10}\\)',
    }
  },
  {
    id: 'a4-044',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 44',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( 100^{\\frac{3}{2}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Split the fractional exponent: square root first, then cube.',
          workingLatex: '100^{\\frac{3}{2}} = \\left(100^{\\frac{1}{2}}\\right)^3',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Take the square root of 100.',
          workingLatex: '100^{\\frac{1}{2}} = 10',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Cube the result.',
          workingLatex: '10^3 = 1000',
          explanation: ""
        }
      ],
      finalAnswer: '\\(1000\\)',
    }
  },
  {
    id: 'a4-045',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 45',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify: \\( \\frac{(3^2)^4}{3^5} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Apply the power-of-a-power law to the numerator.',
          workingLatex: '\\frac{3^{2 \\times 4}}{3^5} = \\frac{3^8}{3^5}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Apply the division law.',
          workingLatex: '3^{8-5} = 3^3',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Evaluate.',
          workingLatex: '3^3 = 27',
          explanation: ""
        }
      ],
      finalAnswer: '\\(27\\)',
    }
  },
  {
    id: 'a4-046',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 46',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( 2^{-3} \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'A negative exponent means take the reciprocal.',
          workingLatex: '2^{-3} = \\frac{1}{2^3}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Evaluate \\( 2^3 \\).',
          workingLatex: '\\frac{1}{8}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{1}{8}\\)',
    }
  },
  {
    id: 'a4-047',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 47',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify, leaving your answer as a single power of \\( d \\): \\( d^{\\frac{1}{2}} \\times d^{\\frac{3}{2}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Add the fractional exponents since the bases are the same.',
          workingLatex: 'd^{\\frac{1}{2}+\\frac{3}{2}}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Simplify the sum of the exponents.',
          workingLatex: 'd^{\\frac{4}{2}} = d^{2}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(d^{2}\\)',
    }
  },
  {
    id: 'a4-048',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 48',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Find the value of \\( x \\): \\( 2^x = 16 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Rewrite 16 as a power of 2.',
          workingLatex: '16 = 2^4',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Compare the exponents since the bases are equal.',
          workingLatex: '2^x = 2^4 \\implies x = 4',
          explanation: 'If \\( a^x = a^y \\) then \\( x = y \\).'
        }
      ],
      finalAnswer: '\\(x = 4\\)',
    }
  },
  {
    id: 'a4-049',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 49',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Simplify: \\( \\frac{5^4 \\times 5^{-2}}{5^3} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Simplify the numerator by adding the exponents.',
          workingLatex: '\\frac{5^{4+(-2)}}{5^3} = \\frac{5^{2}}{5^3}',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Apply the division law.',
          workingLatex: '5^{2-3} = 5^{-1}',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Evaluate.',
          workingLatex: '5^{-1} = \\frac{1}{5}',
          explanation: ""
        }
      ],
      finalAnswer: '\\(\\frac{1}{5}\\)',
    }
  },
  {
    id: 'a4-050',
    topicRef: 'a4',
    topicTitle: 'Laws of Indices 50',
    difficulty: 'Foundation',
    answerType: 'expression',
    questionText: 'Evaluate: \\( 8^{\\frac{2}{3}} \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Split the fractional exponent: cube root first, then square.',
          workingLatex: '8^{\\frac{2}{3}} = \\left(8^{\\frac{1}{3}}\\right)^2',
          explanation: ""
        },
        {
          stepNumber: 2,
          description: 'Take the cube root of 8.',
          workingLatex: '8^{\\frac{1}{3}} = 2',
          explanation: ""
        },
        {
          stepNumber: 3,
          description: 'Square the result.',
          workingLatex: '2^2 = 4',
          explanation: ""
        }
      ],
      finalAnswer: '\\(4\\)',
    }
  }
];