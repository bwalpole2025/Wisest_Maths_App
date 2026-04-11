import { Question } from "@/lib/types";

/**
 * Topic: Surds
 * Ref:   a10
 *
 * Add your questions to the array below.
 * ID convention: "a10-001", "a10-002", etc.
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
    id: 'qc3-001',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 01',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 + 4x + 9 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\) to find \\( p \\).',
          workingLatex: 'p = \\tfrac{4}{2} = 2',
          explanation: 'The \\( x \\)-coefficient is 4, so half of it is 2.'
        },
        {
          stepNumber: 2,
          description: 'Expand the trial square \\( (x+2)^2 \\).',
          workingLatex: '(x+2)^2 = x^2 + 4x + 4',
          explanation: 'This gives the correct \\( x^2 \\) and \\( 4x \\) terms.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant so the expression matches the original.',
          workingLatex: 'x^2 + 4x + 9 = (x+2)^2 - 4 + 9',
          explanation: 'We need \\( +9 \\) but the square only gives \\( +4 \\), so add \\( 5 \\).'
        },
        {
          stepNumber: 4,
          description: 'Combine the constants.',
          workingLatex: '(x+2)^2 + 5',
          explanation: '\\( -4 + 9 = 5 \\).'
        }
      ],
      finalAnswer: '\\((x+2)^2 + 5\\)',
    }
  },
  {
    id: 'qc3-002',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 02',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 + 6x + 11 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = \\tfrac{6}{2} = 3',
          explanation: 'Half of 6 is 3.'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x+3)^2 \\).',
          workingLatex: '(x+3)^2 = x^2 + 6x + 9',
          explanation: 'Correct \\( x^2 \\) and \\( 6x \\) terms.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x+3)^2 - 9 + 11',
          explanation: 'Subtract the 9 and add the original 11.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x+3)^2 + 2',
          explanation: '\\( -9 + 11 = 2 \\).'
        }
      ],
      finalAnswer: '\\((x+3)^2 + 2\\)',
    }
  },
  {
    id: 'qc3-003',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 03',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 + 8x + 3 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = 4',
          explanation: 'Half of 8 is 4.'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x+4)^2 \\).',
          workingLatex: '(x+4)^2 = x^2 + 8x + 16',
          explanation: 'This matches the \\( x^2 \\) and \\( 8x \\).'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x+4)^2 - 16 + 3',
          explanation: 'Subtract 16, add the original 3.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x+4)^2 - 13',
          explanation: '\\( -16 + 3 = -13 \\).'
        }
      ],
      finalAnswer: '\\((x+4)^2 - 13\\)',
    }
  },
  {
    id: 'qc3-004',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 04',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 + 10x + 7 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = 5',
          explanation: 'Half of 10 is 5.'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x+5)^2 \\).',
          workingLatex: '(x+5)^2 = x^2 + 10x + 25',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x+5)^2 - 25 + 7',
          explanation: 'Subtract 25, then add the original 7.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x+5)^2 - 18',
          explanation: '\\( -25 + 7 = -18 \\).'
        }
      ],
      finalAnswer: '\\((x+5)^2 - 18\\)',
    }
  },
  {
    id: 'qc3-005',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 05',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 + 12x + 40 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = 6',
          explanation: 'Half of 12 is 6.'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x+6)^2 \\).',
          workingLatex: '(x+6)^2 = x^2 + 12x + 36',
          explanation: 'This gives the correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x+6)^2 - 36 + 40',
          explanation: 'Subtract 36, add the original 40.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x+6)^2 + 4',
          explanation: '\\( -36 + 40 = 4 \\).'
        }
      ],
      finalAnswer: '\\((x+6)^2 + 4\\)',
    }
  },
  {
    id: 'qc3-006',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 06',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 + 2x + 5 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = 1',
          explanation: 'Half of 2 is 1.'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x+1)^2 \\).',
          workingLatex: '(x+1)^2 = x^2 + 2x + 1',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x+1)^2 - 1 + 5',
          explanation: 'Subtract 1, then add the original 5.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x+1)^2 + 4',
          explanation: '\\( -1 + 5 = 4 \\).'
        }
      ],
      finalAnswer: '\\((x+1)^2 + 4\\)',
    }
  },
  {
    id: 'qc3-007',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 07',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 + 14x + 50 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = 7',
          explanation: 'Half of 14 is 7.'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x+7)^2 \\).',
          workingLatex: '(x+7)^2 = x^2 + 14x + 49',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x+7)^2 - 49 + 50',
          explanation: 'Subtract 49, add the original 50.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x+7)^2 + 1',
          explanation: '\\( -49 + 50 = 1 \\).'
        }
      ],
      finalAnswer: '\\((x+7)^2 + 1\\)',
    }
  },
  {
    id: 'qc3-008',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 08',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 + 16x + 60 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = 8',
          explanation: 'Half of 16 is 8.'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x+8)^2 \\).',
          workingLatex: '(x+8)^2 = x^2 + 16x + 64',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x+8)^2 - 64 + 60',
          explanation: 'Subtract 64, then add 60.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x+8)^2 - 4',
          explanation: '\\( -64 + 60 = -4 \\).'
        }
      ],
      finalAnswer: '\\((x+8)^2 - 4\\)',
    }
  },
  {
    id: 'qc3-009',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 09',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 + 18x + 80 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = 9',
          explanation: 'Half of 18 is 9.'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x+9)^2 \\).',
          workingLatex: '(x+9)^2 = x^2 + 18x + 81',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x+9)^2 - 81 + 80',
          explanation: 'Subtract 81, add 80.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x+9)^2 - 1',
          explanation: '\\( -81 + 80 = -1 \\).'
        }
      ],
      finalAnswer: '\\((x+9)^2 - 1\\)',
    }
  },
  {
    id: 'qc3-010',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 10',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 + 20x + 7 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = 10',
          explanation: 'Half of 20 is 10.'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x+10)^2 \\).',
          workingLatex: '(x+10)^2 = x^2 + 20x + 100',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x+10)^2 - 100 + 7',
          explanation: 'Subtract 100, add 7.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x+10)^2 - 93',
          explanation: '\\( -100 + 7 = -93 \\).'
        }
      ],
      finalAnswer: '\\((x+10)^2 - 93\\)',
    }
  },
  {
    id: 'qc3-011',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 11',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 - 4x + 9 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic', 'negative coefficient'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = -2',
          explanation: 'Half of \\( -4 \\) is \\( -2 \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x-2)^2 \\).',
          workingLatex: '(x-2)^2 = x^2 - 4x + 4',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x-2)^2 - 4 + 9',
          explanation: 'Subtract 4, add 9.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x-2)^2 + 5',
          explanation: '\\( -4 + 9 = 5 \\).'
        }
      ],
      finalAnswer: '\\((x-2)^2 + 5\\)',
    }
  },
  {
    id: 'qc3-012',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 12',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 - 6x + 1 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic', 'negative coefficient'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = -3',
          explanation: 'Half of \\( -6 \\) is \\( -3 \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x-3)^2 \\).',
          workingLatex: '(x-3)^2 = x^2 - 6x + 9',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x-3)^2 - 9 + 1',
          explanation: 'Subtract 9, add 1.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x-3)^2 - 8',
          explanation: '\\( -9 + 1 = -8 \\).'
        }
      ],
      finalAnswer: '\\((x-3)^2 - 8\\)',
    }
  },
  {
    id: 'qc3-013',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 13',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 - 8x + 20 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic', 'negative coefficient'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = -4',
          explanation: 'Half of \\( -8 \\) is \\( -4 \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x-4)^2 \\).',
          workingLatex: '(x-4)^2 = x^2 - 8x + 16',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x-4)^2 - 16 + 20',
          explanation: 'Subtract 16, add 20.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x-4)^2 + 4',
          explanation: '\\( -16 + 20 = 4 \\).'
        }
      ],
      finalAnswer: '\\((x-4)^2 + 4\\)',
    }
  },
  {
    id: 'qc3-014',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 14',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 - 10x + 6 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic', 'negative coefficient'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = -5',
          explanation: 'Half of \\( -10 \\) is \\( -5 \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x-5)^2 \\).',
          workingLatex: '(x-5)^2 = x^2 - 10x + 25',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x-5)^2 - 25 + 6',
          explanation: 'Subtract 25, add 6.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x-5)^2 - 19',
          explanation: '\\( -25 + 6 = -19 \\).'
        }
      ],
      finalAnswer: '\\((x-5)^2 - 19\\)',
    }
  },
  {
    id: 'qc3-015',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 15',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 - 12x + 30 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic', 'negative coefficient'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = -6',
          explanation: 'Half of \\( -12 \\) is \\( -6 \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x-6)^2 \\).',
          workingLatex: '(x-6)^2 = x^2 - 12x + 36',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x-6)^2 - 36 + 30',
          explanation: 'Subtract 36, add 30.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x-6)^2 - 6',
          explanation: '\\( -36 + 30 = -6 \\).'
        }
      ],
      finalAnswer: '\\((x-6)^2 - 6\\)',
    }
  },
  {
    id: 'qc3-016',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 16',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 - 14x + 40 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic', 'negative coefficient'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = -7',
          explanation: 'Half of \\( -14 \\) is \\( -7 \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x-7)^2 \\).',
          workingLatex: '(x-7)^2 = x^2 - 14x + 49',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x-7)^2 - 49 + 40',
          explanation: 'Subtract 49, add 40.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x-7)^2 - 9',
          explanation: '\\( -49 + 40 = -9 \\).'
        }
      ],
      finalAnswer: '\\((x-7)^2 - 9\\)',
    }
  },
  {
    id: 'qc3-017',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 17',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 - 16x + 70 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic', 'negative coefficient'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = -8',
          explanation: 'Half of \\( -16 \\) is \\( -8 \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x-8)^2 \\).',
          workingLatex: '(x-8)^2 = x^2 - 16x + 64',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x-8)^2 - 64 + 70',
          explanation: 'Subtract 64, add 70.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x-8)^2 + 6',
          explanation: '\\( -64 + 70 = 6 \\).'
        }
      ],
      finalAnswer: '\\((x-8)^2 + 6\\)',
    }
  },
  {
    id: 'qc3-018',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 18',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 - 2x - 7 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic', 'negative constant'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = -1',
          explanation: 'Half of \\( -2 \\) is \\( -1 \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x-1)^2 \\).',
          workingLatex: '(x-1)^2 = x^2 - 2x + 1',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x-1)^2 - 1 - 7',
          explanation: 'Subtract 1, then subtract the original 7.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x-1)^2 - 8',
          explanation: '\\( -1 - 7 = -8 \\).'
        }
      ],
      finalAnswer: '\\((x-1)^2 - 8\\)',
    }
  },
  {
    id: 'qc3-019',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 19',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 + 4x - 5 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic', 'negative constant'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = 2',
          explanation: 'Half of 4 is 2.'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x+2)^2 \\).',
          workingLatex: '(x+2)^2 = x^2 + 4x + 4',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x+2)^2 - 4 - 5',
          explanation: 'Subtract 4, then subtract the 5.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x+2)^2 - 9',
          explanation: '\\( -4 - 5 = -9 \\).'
        }
      ],
      finalAnswer: '\\((x+2)^2 - 9\\)',
    }
  },
  {
    id: 'qc3-020',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 20',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 + 6x - 4 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic', 'negative constant'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = 3',
          explanation: 'Half of 6 is 3.'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x+3)^2 \\).',
          workingLatex: '(x+3)^2 = x^2 + 6x + 9',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x+3)^2 - 9 - 4',
          explanation: 'Subtract 9, then subtract 4.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x+3)^2 - 13',
          explanation: '\\( -9 - 4 = -13 \\).'
        }
      ],
      finalAnswer: '\\((x+3)^2 - 13\\)',
    }
  },
  {
    id: 'qc3-021',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 21',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 - 4x - 6 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = -2',
          explanation: 'Half of \\( -4 \\) is \\( -2 \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x-2)^2 \\).',
          workingLatex: '(x-2)^2 = x^2 - 4x + 4',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x-2)^2 - 4 - 6',
          explanation: 'Subtract 4, subtract 6.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x-2)^2 - 10',
          explanation: '\\( -4 - 6 = -10 \\).'
        }
      ],
      finalAnswer: '\\((x-2)^2 - 10\\)',
    }
  },
  {
    id: 'qc3-022',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 22',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 - 6x - 2 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = -3',
          explanation: 'Half of \\( -6 \\) is \\( -3 \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x-3)^2 \\).',
          workingLatex: '(x-3)^2 = x^2 - 6x + 9',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x-3)^2 - 9 - 2',
          explanation: 'Subtract 9, subtract 2.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x-3)^2 - 11',
          explanation: '\\( -9 - 2 = -11 \\).'
        }
      ],
      finalAnswer: '\\((x-3)^2 - 11\\)',
    }
  },
  {
    id: 'qc3-023',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 23',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 + 10x - 3 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = 5',
          explanation: 'Half of 10 is 5.'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x+5)^2 \\).',
          workingLatex: '(x+5)^2 = x^2 + 10x + 25',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x+5)^2 - 25 - 3',
          explanation: 'Subtract 25, subtract 3.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x+5)^2 - 28',
          explanation: '\\( -25 - 3 = -28 \\).'
        }
      ],
      finalAnswer: '\\((x+5)^2 - 28\\)',
    }
  },
  {
    id: 'qc3-024',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 24',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 + 2x - 11 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = 1',
          explanation: 'Half of 2 is 1.'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x+1)^2 \\).',
          workingLatex: '(x+1)^2 = x^2 + 2x + 1',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x+1)^2 - 1 - 11',
          explanation: 'Subtract 1, subtract 11.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x+1)^2 - 12',
          explanation: '\\( -1 - 11 = -12 \\).'
        }
      ],
      finalAnswer: '\\((x+1)^2 - 12\\)',
    }
  },
  {
    id: 'qc3-025',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 25',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 + 3x + 5 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic', 'fractional p'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = \\tfrac{3}{2}',
          explanation: 'Half of 3 is \\( \\tfrac{3}{2} \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x+\\tfrac{3}{2})^2 \\).',
          workingLatex: '(x+\\tfrac{3}{2})^2 = x^2 + 3x + \\tfrac{9}{4}',
          explanation: 'Squaring the half gives the new constant.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x+\\tfrac{3}{2})^2 - \\tfrac{9}{4} + 5',
          explanation: 'Subtract the created \\( \\tfrac{9}{4} \\), add the original 5.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x+\\tfrac{3}{2})^2 + \\tfrac{11}{4}',
          explanation: '\\( 5 - \\tfrac{9}{4} = \\tfrac{20-9}{4} = \\tfrac{11}{4} \\).'
        }
      ],
      finalAnswer: '\\((x+\\tfrac{3}{2})^2 + \\tfrac{11}{4\\)',
    }
  },
  {
    id: 'qc3-026',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 26',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 + 5x + 1 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic', 'fractional p'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = \\tfrac{5}{2}',
          explanation: 'Half of 5 is \\( \\tfrac{5}{2} \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x+\\tfrac{5}{2})^2 \\).',
          workingLatex: '(x+\\tfrac{5}{2})^2 = x^2 + 5x + \\tfrac{25}{4}',
          explanation: 'Squaring \\( \\tfrac{5}{2} \\) gives \\( \\tfrac{25}{4} \\).'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x+\\tfrac{5}{2})^2 - \\tfrac{25}{4} + 1',
          explanation: 'Subtract the created \\( \\tfrac{25}{4} \\), add 1.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x+\\tfrac{5}{2})^2 - \\tfrac{21}{4}',
          explanation: '\\( 1 - \\tfrac{25}{4} = \\tfrac{4-25}{4} = -\\tfrac{21}{4} \\).'
        }
      ],
      finalAnswer: '\\((x+\\tfrac{5}{2})^2 - \\tfrac{21}{4\\)',
    }
  },
  {
    id: 'qc3-027',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 27',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 - 7x + 4 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic', 'fractional p'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = -\\tfrac{7}{2}',
          explanation: 'Half of \\( -7 \\) is \\( -\\tfrac{7}{2} \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x-\\tfrac{7}{2})^2 \\).',
          workingLatex: '(x-\\tfrac{7}{2})^2 = x^2 - 7x + \\tfrac{49}{4}',
          explanation: 'Squaring the half gives the new constant.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x-\\tfrac{7}{2})^2 - \\tfrac{49}{4} + 4',
          explanation: 'Subtract \\( \\tfrac{49}{4} \\), then add the original 4.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x-\\tfrac{7}{2})^2 - \\tfrac{33}{4}',
          explanation: '\\( 4 - \\tfrac{49}{4} = \\tfrac{16-49}{4} = -\\tfrac{33}{4} \\).'
        }
      ],
      finalAnswer: '\\((x-\\tfrac{7}{2})^2 - \\tfrac{33}{4\\)',
    }
  },
  {
    id: 'qc3-028',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 28',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 - 9x + 6 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic', 'fractional p'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = -\\tfrac{9}{2}',
          explanation: 'Half of \\( -9 \\) is \\( -\\tfrac{9}{2} \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x-\\tfrac{9}{2})^2 \\).',
          workingLatex: '(x-\\tfrac{9}{2})^2 = x^2 - 9x + \\tfrac{81}{4}',
          explanation: 'Squaring gives \\( \\tfrac{81}{4} \\).'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x-\\tfrac{9}{2})^2 - \\tfrac{81}{4} + 6',
          explanation: 'Subtract \\( \\tfrac{81}{4} \\), add 6.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x-\\tfrac{9}{2})^2 - \\tfrac{57}{4}',
          explanation: '\\( 6 - \\tfrac{81}{4} = \\tfrac{24-81}{4} = -\\tfrac{57}{4} \\).'
        }
      ],
      finalAnswer: '\\((x-\\tfrac{9}{2})^2 - \\tfrac{57}{4\\)',
    }
  },
  {
    id: 'qc3-029',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 29',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 + x + 1 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic', 'fractional p'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = \\tfrac{1}{2}',
          explanation: 'Half of 1 is \\( \\tfrac{1}{2} \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x+\\tfrac{1}{2})^2 \\).',
          workingLatex: '(x+\\tfrac{1}{2})^2 = x^2 + x + \\tfrac{1}{4}',
          explanation: 'Squaring \\( \\tfrac{1}{2} \\) gives \\( \\tfrac{1}{4} \\).'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x+\\tfrac{1}{2})^2 - \\tfrac{1}{4} + 1',
          explanation: 'Subtract the \\( \\tfrac{1}{4} \\), add the original 1.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x+\\tfrac{1}{2})^2 + \\tfrac{3}{4}',
          explanation: '\\( 1 - \\tfrac{1}{4} = \\tfrac{3}{4} \\).'
        }
      ],
      finalAnswer: '\\((x+\\tfrac{1}{2})^2 + \\tfrac{3}{4\\)',
    }
  },
  {
    id: 'qc3-030',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 30',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 - x - 1 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic', 'fractional p'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = -\\tfrac{1}{2}',
          explanation: 'Half of \\( -1 \\) is \\( -\\tfrac{1}{2} \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x-\\tfrac{1}{2})^2 \\).',
          workingLatex: '(x-\\tfrac{1}{2})^2 = x^2 - x + \\tfrac{1}{4}',
          explanation: 'Squaring gives \\( \\tfrac{1}{4} \\).'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x-\\tfrac{1}{2})^2 - \\tfrac{1}{4} - 1',
          explanation: 'Subtract \\( \\tfrac{1}{4} \\) and subtract 1.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x-\\tfrac{1}{2})^2 - \\tfrac{5}{4}',
          explanation: '\\( -\\tfrac{1}{4} - 1 = -\\tfrac{5}{4} \\).'
        }
      ],
      finalAnswer: '\\((x-\\tfrac{1}{2})^2 - \\tfrac{5}{4\\)',
    }
  },
  {
    id: 'qc3-031',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 31',
    difficulty: 'Foundation',
    questionText: 'Solve \\( (x + 3)^2 = 16 \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'square root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Take the square root of both sides, remembering the \\( \\pm \\).',
          workingLatex: 'x + 3 = \\pm 4',
          explanation: '\\( \\sqrt{16} = 4 \\) but we must include both the positive and negative root.'
        },
        {
          stepNumber: 2,
          description: 'Solve each equation.',
          workingLatex: 'x = -3 + 4 = 1 \\) or \\( x = -3 - 4 = -7',
          explanation: 'Subtract 3 from each side.'
        }
      ],
      finalAnswer: '\\(x = 1\\) or \\(x = -7\\)',
    }
  },
  {
    id: 'qc3-032',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 32',
    difficulty: 'Foundation',
    questionText: 'Solve \\( (x - 2)^2 = 25 \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'square root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Take the square root of both sides.',
          workingLatex: 'x - 2 = \\pm 5',
          explanation: '\\( \\sqrt{25} = 5 \\); include both signs.'
        },
        {
          stepNumber: 2,
          description: 'Solve each equation.',
          workingLatex: 'x = 2 + 5 = 7 \\) or \\( x = 2 - 5 = -3',
          explanation: 'Add 2 to each side.'
        }
      ],
      finalAnswer: '\\(x = 7\\) or \\(x = -3\\)',
    }
  },
  {
    id: 'qc3-033',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 33',
    difficulty: 'Foundation',
    questionText: 'Solve \\( (x + 5)^2 = 9 \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'square root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Take the square root of both sides.',
          workingLatex: 'x + 5 = \\pm 3',
          explanation: '\\( \\sqrt{9} = 3 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve each equation.',
          workingLatex: 'x = -5 + 3 = -2 \\) or \\( x = -5 - 3 = -8',
          explanation: 'Subtract 5 from each side.'
        }
      ],
      finalAnswer: '\\(x = -2\\) or \\(x = -8\\)',
    }
  },
  {
    id: 'qc3-034',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 34',
    difficulty: 'Foundation',
    questionText: 'Solve \\( (x - 6)^2 = 49 \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'square root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Take the square root of both sides.',
          workingLatex: 'x - 6 = \\pm 7',
          explanation: '\\( \\sqrt{49} = 7 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve each equation.',
          workingLatex: 'x = 6 + 7 = 13 \\) or \\( x = 6 - 7 = -1',
          explanation: 'Add 6 to each side.'
        }
      ],
      finalAnswer: '\\(x = 13\\) or \\(x = -1\\)',
    }
  },
  {
    id: 'qc3-035',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 35',
    difficulty: 'Foundation',
    questionText: 'Solve \\( (x + 1)^2 = 7 \\), leaving your answer in surd form.',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'surd form'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Take the square root of both sides.',
          workingLatex: 'x + 1 = \\pm \\sqrt{7}',
          explanation: '7 is not a perfect square so the surd must stay.'
        },
        {
          stepNumber: 2,
          description: 'Subtract 1 from both sides.',
          workingLatex: 'x = -1 \\pm \\sqrt{7}',
          explanation: 'This gives the two surd-form solutions.'
        }
      ],
      finalAnswer: '\\(x = -1 \\pm \\sqrt{7\\)',
    }
  },
  {
    id: 'qc3-036',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 36',
    difficulty: 'Foundation',
    questionText: 'Solve \\( (x - 4)^2 = 11 \\), leaving your answer in surd form.',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'surd form'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Take the square root of both sides.',
          workingLatex: 'x - 4 = \\pm \\sqrt{11}',
          explanation: '11 is prime so the surd stays.'
        },
        {
          stepNumber: 2,
          description: 'Add 4 to both sides.',
          workingLatex: 'x = 4 \\pm \\sqrt{11}',
          explanation: 'Two surd solutions.'
        }
      ],
      finalAnswer: '\\(x = 4 \\pm \\sqrt{11\\)',
    }
  },
  {
    id: 'qc3-037',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 37',
    difficulty: 'Foundation',
    questionText: 'Solve \\( (x + 2)^2 = 5 \\), leaving your answer in surd form.',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'surd form'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Take the square root of both sides.',
          workingLatex: 'x + 2 = \\pm \\sqrt{5}',
          explanation: '5 is not a perfect square.'
        },
        {
          stepNumber: 2,
          description: 'Subtract 2 from both sides.',
          workingLatex: 'x = -2 \\pm \\sqrt{5}',
          explanation: 'Two surd solutions.'
        }
      ],
      finalAnswer: '\\(x = -2 \\pm \\sqrt{5\\)',
    }
  },
  {
    id: 'qc3-038',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 38',
    difficulty: 'Foundation',
    questionText: 'Solve \\( (x - 1)^2 = 13 \\), leaving your answer in surd form.',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'surd form'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Take the square root of both sides.',
          workingLatex: 'x - 1 = \\pm \\sqrt{13}',
          explanation: '13 is prime.'
        },
        {
          stepNumber: 2,
          description: 'Add 1 to both sides.',
          workingLatex: 'x = 1 \\pm \\sqrt{13}',
          explanation: 'Two surd solutions.'
        }
      ],
      finalAnswer: '\\(x = 1 \\pm \\sqrt{13\\)',
    }
  },
  {
    id: 'qc3-039',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 39',
    difficulty: 'Foundation',
    questionText: 'Solve \\( (2x + 1)^2 = 25 \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'linear inside'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Take the square root of both sides.',
          workingLatex: '2x + 1 = \\pm 5',
          explanation: '\\( \\sqrt{25} = 5 \\).'
        },
        {
          stepNumber: 2,
          description: 'Subtract 1 from both sides.',
          workingLatex: '2x = -1 \\pm 5',
          explanation: 'This isolates the \\( 2x \\) term.'
        },
        {
          stepNumber: 3,
          description: 'Divide by 2.',
          workingLatex: 'x = 2 \\) or \\( x = -3',
          explanation: '\\( \\tfrac{-1+5}{2} = 2 \\) and \\( \\tfrac{-1-5}{2} = -3 \\).'
        }
      ],
      finalAnswer: '\\(x = 2\\) or \\(x = -3\\)',
    }
  },
  {
    id: 'qc3-040',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 40',
    difficulty: 'Foundation',
    questionText: 'Solve \\( (3x - 2)^2 = 16 \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'linear inside'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Take the square root of both sides.',
          workingLatex: '3x - 2 = \\pm 4',
          explanation: '\\( \\sqrt{16} = 4 \\).'
        },
        {
          stepNumber: 2,
          description: 'Add 2 to both sides.',
          workingLatex: '3x = 2 \\pm 4',
          explanation: 'Isolate the \\( 3x \\).'
        },
        {
          stepNumber: 3,
          description: 'Divide by 3.',
          workingLatex: 'x = 2 \\) or \\( x = -\\tfrac{2}{3}',
          explanation: '\\( \\tfrac{2+4}{3} = 2 \\) and \\( \\tfrac{2-4}{3} = -\\tfrac{2}{3} \\).'
        }
      ],
      finalAnswer: '\\(x = 2\\) or \\(x = -\\tfrac{2}{3\\)',
    }
  },
  {
    id: 'qc3-041',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 41',
    difficulty: 'Foundation',
    questionText: 'Solve \\( (4x + 3)^2 = 49 \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'linear inside'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Take the square root of both sides.',
          workingLatex: '4x + 3 = \\pm 7',
          explanation: '\\( \\sqrt{49} = 7 \\).'
        },
        {
          stepNumber: 2,
          description: 'Subtract 3 from both sides.',
          workingLatex: '4x = -3 \\pm 7',
          explanation: 'Isolate the \\( 4x \\).'
        },
        {
          stepNumber: 3,
          description: 'Divide by 4.',
          workingLatex: 'x = 1 \\) or \\( x = -\\tfrac{5}{2}',
          explanation: '\\( \\tfrac{-3+7}{4} = 1 \\) and \\( \\tfrac{-3-7}{4} = -\\tfrac{5}{2} \\).'
        }
      ],
      finalAnswer: '\\(x = 1\\) or \\(x = -\\tfrac{5}{2\\)',
    }
  },
  {
    id: 'qc3-042',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 42',
    difficulty: 'Foundation',
    questionText: 'Solve \\( (2x - 3)^2 = 20 \\), leaving your answer in surd form.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'linear inside', 'surd form'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Take the square root of both sides.',
          workingLatex: '2x - 3 = \\pm \\sqrt{20}',
          explanation: '20 is not a perfect square.'
        },
        {
          stepNumber: 2,
          description: 'Add 3 to both sides.',
          workingLatex: '2x = 3 \\pm \\sqrt{20}',
          explanation: 'Isolate the \\( 2x \\).'
        },
        {
          stepNumber: 3,
          description: 'Divide by 2 and simplify the surd if possible.',
          workingLatex: 'x = \\tfrac{3 \\pm 2\\sqrt{5}}{2}',
          explanation: '\\( \\sqrt{20} = 2\\sqrt{5} \\).'
        }
      ],
      finalAnswer: '\\(x = \\tfrac{3 \\pm 2\\sqrt{5}}{2\\)',
    }
  },
  {
    id: 'qc3-043',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 43',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^2 + 4x - 12 = 0 \\) by completing the square.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'quadratic equation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square on the left-hand side.',
          workingLatex: '(x+2)^2 - 4 - 12 = 0',
          explanation: 'Half of 4 is 2, then subtract the created 4.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x+2)^2 - 16 = 0',
          explanation: '\\( -4 - 12 = -16 \\).'
        },
        {
          stepNumber: 3,
          description: 'Rearrange and take the square root.',
          workingLatex: '(x+2)^2 = 16 \\; \\Rightarrow \\; x + 2 = \\pm 4',
          explanation: '\\( \\sqrt{16} = 4 \\).'
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( x \\).',
          workingLatex: 'x = 2 \\) or \\( x = -6',
          explanation: 'Subtract 2 from each side.'
        }
      ],
      finalAnswer: '\\(x = 2\\) or \\(x = -6\\)',
    }
  },
  {
    id: 'qc3-044',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 44',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^2 - 6x - 7 = 0 \\) by completing the square.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'quadratic equation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x-3)^2 - 9 - 7 = 0',
          explanation: 'Half of \\( -6 \\) is \\( -3 \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x-3)^2 - 16 = 0',
          explanation: '\\( -9 - 7 = -16 \\).'
        },
        {
          stepNumber: 3,
          description: 'Rearrange and take the square root.',
          workingLatex: 'x - 3 = \\pm 4',
          explanation: '\\( \\sqrt{16} = 4 \\).'
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( x \\).',
          workingLatex: 'x = 7 \\) or \\( x = -1',
          explanation: 'Add 3 to each side.'
        }
      ],
      finalAnswer: '\\(x = 7\\) or \\(x = -1\\)',
    }
  },
  {
    id: 'qc3-045',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 45',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^2 + 8x + 7 = 0 \\) by completing the square.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'quadratic equation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x+4)^2 - 16 + 7 = 0',
          explanation: 'Half of 8 is 4.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x+4)^2 - 9 = 0',
          explanation: '\\( -16 + 7 = -9 \\).'
        },
        {
          stepNumber: 3,
          description: 'Rearrange and take the square root.',
          workingLatex: 'x + 4 = \\pm 3',
          explanation: '\\( \\sqrt{9} = 3 \\).'
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( x \\).',
          workingLatex: 'x = -1 \\) or \\( x = -7',
          explanation: 'Subtract 4 from each side.'
        }
      ],
      finalAnswer: '\\(x = -1\\) or \\(x = -7\\)',
    }
  },
  {
    id: 'qc3-046',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 46',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^2 - 10x + 9 = 0 \\) by completing the square.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'quadratic equation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x-5)^2 - 25 + 9 = 0',
          explanation: 'Half of \\( -10 \\) is \\( -5 \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x-5)^2 - 16 = 0',
          explanation: '\\( -25 + 9 = -16 \\).'
        },
        {
          stepNumber: 3,
          description: 'Take the square root.',
          workingLatex: 'x - 5 = \\pm 4',
          explanation: '\\( \\sqrt{16} = 4 \\).'
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( x \\).',
          workingLatex: 'x = 9 \\) or \\( x = 1',
          explanation: 'Add 5 to each side.'
        }
      ],
      finalAnswer: '\\(x = 9\\) or \\(x = 1\\)',
    }
  },
  {
    id: 'qc3-047',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 47',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^2 + 2x - 15 = 0 \\) by completing the square.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'quadratic equation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x+1)^2 - 1 - 15 = 0',
          explanation: 'Half of 2 is 1.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x+1)^2 - 16 = 0',
          explanation: '\\( -1 - 15 = -16 \\).'
        },
        {
          stepNumber: 3,
          description: 'Take the square root.',
          workingLatex: 'x + 1 = \\pm 4',
          explanation: '\\( \\sqrt{16} = 4 \\).'
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( x \\).',
          workingLatex: 'x = 3 \\) or \\( x = -5',
          explanation: 'Subtract 1 from each side.'
        }
      ],
      finalAnswer: '\\(x = 3\\) or \\(x = -5\\)',
    }
  },
  {
    id: 'qc3-048',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 48',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^2 - 12x + 20 = 0 \\) by completing the square.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'quadratic equation', 'surd form'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x-6)^2 - 36 + 20 = 0',
          explanation: 'Half of \\( -12 \\) is \\( -6 \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x-6)^2 = 16',
          explanation: '\\( -36 + 20 = -16 \\), then add 16.'
        },
        {
          stepNumber: 3,
          description: 'Take the square root.',
          workingLatex: 'x - 6 = \\pm 4',
          explanation: '\\( \\sqrt{16} = 4 \\).'
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( x \\).',
          workingLatex: 'x = 10 \\) or \\( x = 2',
          explanation: 'Add 6 to each side.'
        }
      ],
      finalAnswer: '\\(x = 10\\) or \\(x = 2\\)',
    }
  },
  {
    id: 'qc3-049',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 49',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^2 + 4x + 1 = 0 \\) by completing the square, leaving your answer in surd form.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'surd form'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x+2)^2 - 4 + 1 = 0',
          explanation: 'Half of 4 is 2.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x+2)^2 - 3 = 0',
          explanation: '\\( -4 + 1 = -3 \\).'
        },
        {
          stepNumber: 3,
          description: 'Rearrange and take the square root.',
          workingLatex: 'x + 2 = \\pm \\sqrt{3}',
          explanation: '3 is not a perfect square.'
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( x \\).',
          workingLatex: 'x = -2 \\pm \\sqrt{3}',
          explanation: 'Subtract 2 from each side.'
        }
      ],
      finalAnswer: '\\(x = -2 \\pm \\sqrt{3\\)',
    }
  },
  {
    id: 'qc3-050',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 50',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^2 - 6x + 4 = 0 \\) by completing the square, leaving your answer in surd form.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'surd form'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x-3)^2 - 9 + 4 = 0',
          explanation: 'Half of \\( -6 \\) is \\( -3 \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x-3)^2 - 5 = 0',
          explanation: '\\( -9 + 4 = -5 \\).'
        },
        {
          stepNumber: 3,
          description: 'Take the square root.',
          workingLatex: 'x - 3 = \\pm \\sqrt{5}',
          explanation: '5 is not a perfect square.'
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( x \\).',
          workingLatex: 'x = 3 \\pm \\sqrt{5}',
          explanation: 'Add 3 to each side.'
        }
      ],
      finalAnswer: '\\(x = 3 \\pm \\sqrt{5\\)',
    }
  },
  {
    id: 'qc3-051',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 51',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^2 + 8x + 5 = 0 \\) by completing the square, leaving your answer in surd form.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'surd form'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x+4)^2 - 16 + 5 = 0',
          explanation: 'Half of 8 is 4.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x+4)^2 - 11 = 0',
          explanation: '\\( -16 + 5 = -11 \\).'
        },
        {
          stepNumber: 3,
          description: 'Take the square root.',
          workingLatex: 'x + 4 = \\pm \\sqrt{11}',
          explanation: '11 is prime.'
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( x \\).',
          workingLatex: 'x = -4 \\pm \\sqrt{11}',
          explanation: 'Subtract 4 from each side.'
        }
      ],
      finalAnswer: '\\(x = -4 \\pm \\sqrt{11\\)',
    }
  },
  {
    id: 'qc3-052',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 52',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^2 - 2x - 9 = 0 \\) by completing the square, leaving your answer in surd form.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'surd form'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x-1)^2 - 1 - 9 = 0',
          explanation: 'Half of \\( -2 \\) is \\( -1 \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x-1)^2 - 10 = 0',
          explanation: '\\( -1 - 9 = -10 \\).'
        },
        {
          stepNumber: 3,
          description: 'Take the square root.',
          workingLatex: 'x - 1 = \\pm \\sqrt{10}',
          explanation: '10 is not a perfect square.'
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( x \\).',
          workingLatex: 'x = 1 \\pm \\sqrt{10}',
          explanation: 'Add 1 to each side.'
        }
      ],
      finalAnswer: '\\(x = 1 \\pm \\sqrt{10\\)',
    }
  },
  {
    id: 'qc3-053',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 53',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^2 + 10x + 18 = 0 \\) by completing the square, leaving your answer in surd form.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'surd form'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x+5)^2 - 25 + 18 = 0',
          explanation: 'Half of 10 is 5.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x+5)^2 - 7 = 0',
          explanation: '\\( -25 + 18 = -7 \\).'
        },
        {
          stepNumber: 3,
          description: 'Take the square root.',
          workingLatex: 'x + 5 = \\pm \\sqrt{7}',
          explanation: '7 is prime.'
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( x \\).',
          workingLatex: 'x = -5 \\pm \\sqrt{7}',
          explanation: 'Subtract 5 from each side.'
        }
      ],
      finalAnswer: '\\(x = -5 \\pm \\sqrt{7\\)',
    }
  },
  {
    id: 'qc3-054',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 54',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^2 - 14x + 40 = 0 \\) by completing the square.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'quadratic equation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x-7)^2 - 49 + 40 = 0',
          explanation: 'Half of \\( -14 \\) is \\( -7 \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x-7)^2 - 9 = 0',
          explanation: '\\( -49 + 40 = -9 \\).'
        },
        {
          stepNumber: 3,
          description: 'Take the square root.',
          workingLatex: 'x - 7 = \\pm 3',
          explanation: '\\( \\sqrt{9} = 3 \\).'
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( x \\).',
          workingLatex: 'x = 10 \\) or \\( x = 4',
          explanation: 'Add 7 to each side.'
        }
      ],
      finalAnswer: '\\(x = 10\\) or \\(x = 4\\)',
    }
  },
  {
    id: 'qc3-055',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 55',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^2 + 16x + 39 = 0 \\) by completing the square.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'quadratic equation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x+8)^2 - 64 + 39 = 0',
          explanation: 'Half of 16 is 8.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x+8)^2 - 25 = 0',
          explanation: '\\( -64 + 39 = -25 \\).'
        },
        {
          stepNumber: 3,
          description: 'Take the square root.',
          workingLatex: 'x + 8 = \\pm 5',
          explanation: '\\( \\sqrt{25} = 5 \\).'
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( x \\).',
          workingLatex: 'x = -3 \\) or \\( x = -13',
          explanation: 'Subtract 8 from each side.'
        }
      ],
      finalAnswer: '\\(x = -3\\) or \\(x = -13\\)',
    }
  },
  {
    id: 'qc3-056',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 56',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^2 + 20 = 8x \\) by completing the square.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'rearranging', 'surd form'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Rearrange into standard form.',
          workingLatex: 'x^2 - 8x + 20 = 0',
          explanation: 'Subtract \\( 8x \\) from both sides.'
        },
        {
          stepNumber: 2,
          description: 'Complete the square.',
          workingLatex: '(x-4)^2 - 16 + 20 = 0',
          explanation: 'Half of \\( -8 \\) is \\( -4 \\).'
        },
        {
          stepNumber: 3,
          description: 'Simplify and rearrange.',
          workingLatex: '(x-4)^2 = -4',
          explanation: 'A square cannot be negative.'
        },
        {
          stepNumber: 4,
          description: 'Interpret the result.',
          workingLatex: '\\text{No real solutions}',
          explanation: 'Since \\( (x-4)^2 \\geq 0 \\), the equation has no real roots.'
        }
      ],
      finalAnswer: 'No real solutions',
    }
  },
  {
    id: 'qc3-057',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 57',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^2 + 18 = 12x \\) by completing the square, leaving your answer in surd form.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'rearranging', 'surd form'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Rearrange into standard form.',
          workingLatex: 'x^2 - 12x + 18 = 0',
          explanation: 'Subtract \\( 12x \\) from both sides.'
        },
        {
          stepNumber: 2,
          description: 'Complete the square.',
          workingLatex: '(x-6)^2 - 36 + 18 = 0',
          explanation: 'Half of \\( -12 \\) is \\( -6 \\).'
        },
        {
          stepNumber: 3,
          description: 'Simplify.',
          workingLatex: '(x-6)^2 = 18',
          explanation: 'Adding 18 to both sides.'
        },
        {
          stepNumber: 4,
          description: 'Take the square root and solve.',
          workingLatex: 'x = 6 \\pm 3\\sqrt{2}',
          explanation: '\\( \\sqrt{18} = 3\\sqrt{2} \\).'
        }
      ],
      finalAnswer: '\\(x = 6 \\pm 3\\sqrt{2\\)',
    }
  },
  {
    id: 'qc3-058',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 58',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 - 20x + 15 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = -10',
          explanation: 'Half of \\( -20 \\) is \\( -10 \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x-10)^2 \\).',
          workingLatex: '(x-10)^2 = x^2 - 20x + 100',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x-10)^2 - 100 + 15',
          explanation: 'Subtract 100, add 15.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x-10)^2 - 85',
          explanation: '\\( -100 + 15 = -85 \\).'
        }
      ],
      finalAnswer: '\\((x-10)^2 - 85\\)',
    }
  },
  {
    id: 'qc3-059',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 59',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 + 12x - 5 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = 6',
          explanation: 'Half of 12 is 6.'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x+6)^2 \\).',
          workingLatex: '(x+6)^2 = x^2 + 12x + 36',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x+6)^2 - 36 - 5',
          explanation: 'Subtract 36, subtract 5.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x+6)^2 - 41',
          explanation: '\\( -36 - 5 = -41 \\).'
        }
      ],
      finalAnswer: '\\((x+6)^2 - 41\\)',
    }
  },
  {
    id: 'qc3-060',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 60',
    difficulty: 'Foundation',
    questionText: 'Use your answer to \\( x^2 + 6x + 11 = (x+3)^2 + 2 \\) to state the minimum value of \\( x^2 + 6x + 11 \\) and the value of \\( x \\) at which it occurs.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'minimum value', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Recognise that \\( (x+3)^2 \\geq 0 \\) for all real \\( x \\).',
          workingLatex: '(x+3)^2 \\geq 0',
          explanation: 'Squaring any real number cannot give a negative result.'
        },
        {
          stepNumber: 2,
          description: 'The smallest value of \\( (x+3)^2 + 2 \\) occurs when the square is 0.',
          workingLatex: '\\text{Minimum} = 0 + 2 = 2',
          explanation: 'Adding 2 to the smallest square gives the minimum value.'
        },
        {
          stepNumber: 3,
          description: 'Find when the square equals zero.',
          workingLatex: 'x + 3 = 0 \\; \\Rightarrow \\; x = -3',
          explanation: 'Set the inside of the bracket equal to zero.'
        }
      ],
 finalAnswer: '\\(Minimum value is 2, occurring at x = -3\\)',
    }
  },
  {
    id: 'qc3-061',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 61',
    difficulty: 'Foundation',
    questionText: 'By completing the square, find the minimum value of \\( x^2 - 4x + 9 \\) and the value of \\( x \\) at which it occurs.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'minimum value'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x-2)^2 - 4 + 9 = (x-2)^2 + 5',
          explanation: 'Half of \\( -4 \\) is \\( -2 \\); subtract the created 4 and add the original 9.'
        },
        {
          stepNumber: 2,
          description: 'Note that \\( (x-2)^2 \\geq 0 \\).',
          workingLatex: '(x-2)^2 \\geq 0',
          explanation: 'A square of a real number is never negative.'
        },
        {
          stepNumber: 3,
          description: 'State the minimum value.',
          workingLatex: '\\text{Minimum} = 0 + 5 = 5',
          explanation: 'The smallest the expression can be is when the square is 0.'
        },
        {
          stepNumber: 4,
          description: 'Find the \\( x \\)-value.',
          workingLatex: 'x = 2',
          explanation: 'Setting \\( x - 2 = 0 \\) gives \\( x = 2 \\).'
        }
      ],
 finalAnswer: '\\(Minimum value is 5 at x = 2\\)',
    }
  },
  {
    id: 'qc3-062',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 62',
    difficulty: 'Foundation',
    questionText: 'By completing the square, find the minimum value of \\( x^2 + 8x + 20 \\) and the value of \\( x \\) at which it occurs.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'minimum value'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x+4)^2 - 16 + 20 = (x+4)^2 + 4',
          explanation: 'Half of 8 is 4; subtract 16 and add 20.'
        },
        {
          stepNumber: 2,
          description: 'Use \\( (x+4)^2 \\geq 0 \\).',
          workingLatex: '(x+4)^2 \\geq 0',
          explanation: 'The square of a real number is never negative.'
        },
        {
          stepNumber: 3,
          description: 'State the minimum.',
          workingLatex: '\\text{Minimum} = 4',
          explanation: 'The smallest the square can be is 0.'
        },
        {
          stepNumber: 4,
          description: 'Find the \\( x \\)-value.',
          workingLatex: 'x = -4',
          explanation: 'Set \\( x + 4 = 0 \\).'
        }
      ],
 finalAnswer: '\\(Minimum value is 4 at x = -4\\)',
    }
  },
  {
    id: 'qc3-063',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 63',
    difficulty: 'Foundation',
    questionText: 'By completing the square, find the minimum value of \\( x^2 - 10x + 27 \\) and the value of \\( x \\) at which it occurs.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'minimum value'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x-5)^2 - 25 + 27 = (x-5)^2 + 2',
          explanation: 'Half of \\( -10 \\) is \\( -5 \\); subtract 25 and add 27.'
        },
        {
          stepNumber: 2,
          description: 'Use \\( (x-5)^2 \\geq 0 \\).',
          workingLatex: '(x-5)^2 \\geq 0',
          explanation: 'Squares of real numbers are non-negative.'
        },
        {
          stepNumber: 3,
          description: 'Give the minimum.',
          workingLatex: '\\text{Minimum} = 2',
          explanation: 'Smallest square value is 0, leaving \\( +2 \\).'
        },
        {
          stepNumber: 4,
          description: 'Find \\( x \\).',
          workingLatex: 'x = 5',
          explanation: 'Set \\( x - 5 = 0 \\).'
        }
      ],
 finalAnswer: '\\(Minimum value is 2 at x = 5\\)',
    }
  },
  {
    id: 'qc3-064',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 64',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 - 22x + 100 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = -11',
          explanation: 'Half of \\( -22 \\) is \\( -11 \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x-11)^2 \\).',
          workingLatex: '(x-11)^2 = x^2 - 22x + 121',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x-11)^2 - 121 + 100',
          explanation: 'Subtract 121, add 100.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x-11)^2 - 21',
          explanation: '\\( -121 + 100 = -21 \\).'
        }
      ],
      finalAnswer: '\\((x-11)^2 - 21\\)',
    }
  },
  {
    id: 'qc3-065',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 65',
    difficulty: 'Foundation',
    questionText: 'Write \\( x^2 + 24x + 100 \\) in the form \\( (x + p)^2 + q \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Halve the coefficient of \\( x \\).',
          workingLatex: 'p = 12',
          explanation: 'Half of 24 is 12.'
        },
        {
          stepNumber: 2,
          description: 'Expand \\( (x+12)^2 \\).',
          workingLatex: '(x+12)^2 = x^2 + 24x + 144',
          explanation: 'Correct linear term.'
        },
        {
          stepNumber: 3,
          description: 'Adjust the constant.',
          workingLatex: '(x+12)^2 - 144 + 100',
          explanation: 'Subtract 144, add 100.'
        },
        {
          stepNumber: 4,
          description: 'Simplify.',
          workingLatex: '(x+12)^2 - 44',
          explanation: '\\( -144 + 100 = -44 \\).'
        }
      ],
      finalAnswer: '\\((x+12)^2 - 44\\)',
    }
  },
  {
    id: 'qc3-066',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 66',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^2 + 6x + 2 = 0 \\) by completing the square, leaving your answer in surd form.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'surd form'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x+3)^2 - 9 + 2 = 0',
          explanation: 'Half of 6 is 3.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x+3)^2 = 7',
          explanation: '\\( -9 + 2 = -7 \\), so add 7.'
        },
        {
          stepNumber: 3,
          description: 'Take the square root.',
          workingLatex: 'x + 3 = \\pm \\sqrt{7}',
          explanation: '7 is prime.'
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( x \\).',
          workingLatex: 'x = -3 \\pm \\sqrt{7}',
          explanation: 'Subtract 3 from each side.'
        }
      ],
      finalAnswer: '\\(x = -3 \\pm \\sqrt{7\\)',
    }
  },
  {
    id: 'qc3-067',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 67',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^2 - 8x + 5 = 0 \\) by completing the square, leaving your answer in surd form.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'surd form'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x-4)^2 - 16 + 5 = 0',
          explanation: 'Half of \\( -8 \\) is \\( -4 \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x-4)^2 = 11',
          explanation: '\\( -16 + 5 = -11 \\), so add 11.'
        },
        {
          stepNumber: 3,
          description: 'Take the square root.',
          workingLatex: 'x - 4 = \\pm \\sqrt{11}',
          explanation: '11 is prime.'
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( x \\).',
          workingLatex: 'x = 4 \\pm \\sqrt{11}',
          explanation: 'Add 4 to each side.'
        }
      ],
      finalAnswer: '\\(x = 4 \\pm \\sqrt{11\\)',
    }
  },
  {
    id: 'qc3-068',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 68',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^2 + 2x - 4 = 0 \\) by completing the square, leaving your answer in surd form.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'surd form'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x+1)^2 - 1 - 4 = 0',
          explanation: 'Half of 2 is 1.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x+1)^2 = 5',
          explanation: '\\( -1 - 4 = -5 \\), so add 5.'
        },
        {
          stepNumber: 3,
          description: 'Take the square root.',
          workingLatex: 'x + 1 = \\pm \\sqrt{5}',
          explanation: '5 is prime.'
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( x \\).',
          workingLatex: 'x = -1 \\pm \\sqrt{5}',
          explanation: 'Subtract 1 from each side.'
        }
      ],
      finalAnswer: '\\(x = -1 \\pm \\sqrt{5\\)',
    }
  },
  {
    id: 'qc3-069',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 69',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^2 - 4x - 1 = 0 \\) by completing the square, leaving your answer in surd form.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'surd form'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x-2)^2 - 4 - 1 = 0',
          explanation: 'Half of \\( -4 \\) is \\( -2 \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x-2)^2 = 5',
          explanation: '\\( -4 - 1 = -5 \\), so add 5.'
        },
        {
          stepNumber: 3,
          description: 'Take the square root.',
          workingLatex: 'x - 2 = \\pm \\sqrt{5}',
          explanation: '5 is prime.'
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( x \\).',
          workingLatex: 'x = 2 \\pm \\sqrt{5}',
          explanation: 'Add 2 to each side.'
        }
      ],
      finalAnswer: '\\(x = 2 \\pm \\sqrt{5\\)',
    }
  },
  {
    id: 'qc3-070',
    topicRef: 'qc3',
    topicTitle: 'Completing the Square 70',
    difficulty: 'Foundation',
    questionText: 'Solve \\( x^2 + 12x + 20 = 0 \\) by completing the square, leaving your answer in surd form.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['completing the square', 'solving', 'surd form'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Complete the square.',
          workingLatex: '(x+6)^2 - 36 + 20 = 0',
          explanation: 'Half of 12 is 6.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
          workingLatex: '(x+6)^2 = 16',
          explanation: '\\( -36 + 20 = -16 \\), so add 16.'
        },
        {
          stepNumber: 3,
          description: 'Take the square root.',
          workingLatex: 'x + 6 = \\pm 4',
          explanation: '\\( \\sqrt{16} = 4 \\).'
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( x \\).',
          workingLatex: 'x = -2 \\) or \\( x = -10',
          explanation: 'Subtract 6 from each side.'
        }
      ],
      finalAnswer: '\\(x = -2\\) or \\(x = -10\\)',
    }
  }
];
