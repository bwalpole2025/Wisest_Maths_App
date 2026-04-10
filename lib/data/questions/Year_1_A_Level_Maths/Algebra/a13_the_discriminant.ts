import { Question } from "@/lib/types";

/**
 * Topic: Proportional Relationships
 * Ref:   a14
 *
 * Add your questions to the array below.
 * ID convention: "a14-001", "a14-002", etc.
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
    id: 'a13-01',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 01',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( x^2 + 6x + 8 \\) and hence state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'real roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify \\( a \\), \\( b \\) and \\( c \\).',
 workingLatex: ' a = 1, b = 6, c = 8',
          explanation: 'Read the coefficients from the standard form.'
        },
        {
          stepNumber: 2,
          description: 'Substitute into \\( b^2 - 4ac \\).',
 workingLatex: ' 6^2 - 4 \\times 1 \\times 8 = 36 - 32 = 4',
          explanation: 'Compute the square and the product, then subtract.'
        },
        {
          stepNumber: 3,
          description: 'Interpret the result.',
 workingLatex: ' 4 > 0',
          explanation: 'Positive discriminant means two distinct real roots.'
        }
      ],
 finalAnswer: 'Discriminant = 4 ; two distinct real roots.'
    }
  },
  {
    id: 'a13-02',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 02',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( x^2 - 4x + 4 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'repeated root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify coefficients.',
 workingLatex: ' a = 1, b = -4, c = 4',
          explanation: 'Standard form.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' (-4)^2 - 4 \\times 1 \\times 4 = 16 - 16 = 0',
          explanation: 'Square the negative, then subtract.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: 'Discriminant = 0',
          explanation: 'Zero discriminant means one repeated real root.'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
  {
    id: 'a13-03',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 03',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( x^2 + 2x + 5 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'no real roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify coefficients.',
 workingLatex: ' a = 1, b = 2, c = 5',
          explanation: 'Read off from the quadratic.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 4 - 20 = -16',
          explanation: '\\( 2^2 = 4 \\) and \\( 4 \\times 1 \\times 5 = 20 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: '-16 < 0',
          explanation: 'Negative discriminant means no real roots.'
        }
      ],
 finalAnswer: 'Discriminant -16; no real roots.'
    }
  },
  {
    id: 'a13-04',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 04',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( 2x^2 + 5x - 3 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'real roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify coefficients.',
 workingLatex: ' a = 2, b = 5, c = -3',
          explanation: 'Include the negative sign on \\( c \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 25 - 4 \\times 2 \\times (-3) = 25 + 24 = 49',
          explanation: 'Two negatives multiply to a positive.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: ' 49 > 0',
          explanation: 'Two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 49; two distinct real roots.'
    }
  },
  {
    id: 'a13-05',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 05',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( 3x^2 - 6x + 3 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'repeated root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify coefficients.',
 workingLatex: ' a = 3, b = -6, c = 3',
          explanation: 'Standard form.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 36 - 4 \\times 3 \\times 3 = 36 - 36 = 0',
          explanation: 'The two terms cancel.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: ' 0',
          explanation: 'One repeated real root.'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
  {
    id: 'a13-06',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 06',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( x^2 - 3x + 5 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'no real roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = 1, b = -3, c = 5',
          explanation: 'Read off coefficients.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 9 - 20 = -11',
          explanation: '\\( (-3)^2 = 9 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: '-11 < 0',
          explanation: 'No real roots.'
        }
      ],
 finalAnswer: 'Discriminant -11; no real roots.'
    }
  },
  {
    id: 'a13-07',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 07',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( x^2 + 2\\sqrt{3}x + 3 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'surds'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = 1, b = 2\\sqrt{3}, c = 3',
          explanation: 'Treat the surd carefully.'
        },
        {
          stepNumber: 2,
          description: 'Compute \\( b^2 \\).',
 workingLatex: ' (2\\sqrt{3})^2 = 4 \\times 3 = 12',
          explanation: 'Square the coefficient and the surd.'
        },
        {
          stepNumber: 3,
          description: 'Compute discriminant.',
 workingLatex: ' 12 - 12 = 0',
          explanation: 'The terms cancel.'
        },
        {
          stepNumber: 4,
          description: 'Interpret.',
          workingLatex: '0',
          explanation: 'One repeated real root.'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
  {
    id: 'a13-08',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 08',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( (3x - 2)(x + 4) \\) and hence state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'expanding'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Expand first.',
 workingLatex: ' 3x^2 + 12x - 2x - 8 = 3x^2 + 10x - 8',
          explanation: 'Use FOIL.'
        },
        {
          stepNumber: 2,
          description: 'Identify.',
 workingLatex: ' a = 3, b = 10, c = -8',
          explanation: 'From the expanded form.'
        },
        {
          stepNumber: 3,
          description: 'Compute.',
 workingLatex: ' 100 - 4 \\times 3 \\times (-8) = 100 + 96 = 196',
          explanation: 'Positive result.'
        },
        {
          stepNumber: 4,
          description: 'Interpret.',
 workingLatex: ' 196 > 0',
          explanation: 'Two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 196; two distinct real roots.'
    }
  },
  {
    id: 'a13-09',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 09',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( 4x^2 + 12x \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'no constant term'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = 4, b = 12, c = 0',
          explanation: 'No constant term means \\( c = 0 \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 144 - 0 = 144',
          explanation: '\\( 4ac = 0 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: ' 144 > 0',
          explanation: 'Two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 144; two distinct real roots.'
    }
  },
  {
    id: 'a13-10',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 10',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( \\tfrac{9}{16}x^2 - 4 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'no linear term'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = \\tfrac{9}{16}, b = 0, c = -4',
          explanation: 'No x term means \\( b = 0 \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 0 - 4 \\times \\tfrac{9}{16} \\times (-4) = 9',
          explanation: 'The fractions cancel nicely.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: ' 9 > 0',
          explanation: 'Two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 9; two distinct real roots.'
    }
  },
  {
    id: 'a13-11',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 11',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( 5x^2 + 4x + 2 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'no real roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = 5, b = 4, c = 2',
          explanation: 'Read off coefficients.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 16 - 40 = -24',
          explanation: '\\( 4ac = 40 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: '-24 < 0',
          explanation: 'No real roots.'
        }
      ],
 finalAnswer: 'Discriminant -24; no real roots.'
    }
  },
  {
    id: 'a13-12',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 12',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( -2x^2 + 7x - 3 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'negative leading coefficient'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = -2, b = 7, c = -3',
          explanation: 'Include the signs.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 49 - 4 \\times (-2) \\times (-3) = 49 - 24 = 25',
          explanation: 'Two negatives multiply to positive.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: ' 25 > 0',
          explanation: 'Two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 25; two distinct real roots.'
    }
  },
  {
    id: 'a13-13',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 13',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( x^2 + 10x + 25 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'repeated root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = 1, b = 10, c = 25',
          explanation: 'Standard form.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 100 - 100 = 0',
          explanation: 'The two terms cancel.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
          workingLatex: '0',
          explanation: 'One repeated real root.'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
  {
    id: 'a13-14',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 14',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( x^2 - 9 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'difference of squares'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = 1, b = 0, c = -9',
          explanation: 'No linear term.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 0 - 4 \\times 1 \\times (-9) = 36',
          explanation: '\\( -4ac = 36 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: ' 36 > 0',
          explanation: 'Two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 36; two distinct real roots.'
    }
  },
  {
    id: 'a13-15',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 15',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( x^2 + 16 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'no real roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = 1, b = 0, c = 16',
          explanation: 'No linear term.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 0 - 64 = -64',
          explanation: '\\( 4 \\times 1 \\times 16 = 64 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: '-64 < 0',
          explanation: 'No real roots.'
        }
      ],
 finalAnswer: 'Discriminant -64; no real roots.'
    }
  },
  {
    id: 'a13-16',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 16',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( 7x^2 + 14x + 7 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'repeated root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = 7, b = 14, c = 7',
          explanation: 'Coefficients from the quadratic.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 196 - 196 = 0',
          explanation: '\\( 4ac = 196 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
          workingLatex: '0',
          explanation: 'One repeated real root.'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
  {
    id: 'a13-17',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 17',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( \\tfrac{x^2}{2} + \\tfrac{3x}{2} + 1 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'fractions'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = \\tfrac{1}{2}, b = \\tfrac{3}{2}, c = 1',
          explanation: 'Fractions for \\( a \\) and \\( b \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' \\tfrac{9}{4} - 4 \\times \\tfrac{1}{2} \\times 1 = \\tfrac{9}{4} - 2 = \\tfrac{1}{4}',
          explanation: 'Subtract carefully with a common denominator.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: ' \\tfrac{1}{4} > 0',
          explanation: 'Two distinct real roots.'
        }
      ],
 finalAnswer: 'Discriminant \\tfrac{1}{4} ; two distinct real roots.'
    }
  },
  {
    id: 'a13-18',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 18',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( x^2 + 8x + 20 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'no real roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = 1, b = 8, c = 20',
          explanation: 'Read off.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 64 - 80 = -16',
          explanation: '\\( 4ac = 80 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: '-16 < 0',
          explanation: 'No real roots.'
        }
      ],
 finalAnswer: 'Discriminant -16; no real roots.'
    }
  },
  {
    id: 'a13-19',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 19',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( x^2 - 12x + 36 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'repeated root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = 1, b = -12, c = 36',
          explanation: 'Standard form.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 144 - 144 = 0',
          explanation: 'Perfect square quadratic.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
          workingLatex: '0',
          explanation: 'One repeated real root.'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
  {
    id: 'a13-20',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 20',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( x^2 - x - 12 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'real roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = 1, b = -1, c = -12',
          explanation: 'Include negative signs.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 1 - 4 \\times 1 \\times (-12) = 1 + 48 = 49',
          explanation: 'The negative c flips the sign.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: ' 49 > 0',
          explanation: 'Two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 49; two distinct real roots.'
    }
  },
  {
    id: 'a13-21',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 21',
    difficulty: 'Foundation',
    questionText: 'The discriminant of \\( 4x^2 + bx + 9 = 0 \\) is 0, where \\( b > 0 \\). Find \\( b \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'finding b'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Write the discriminant equation.',
 workingLatex: ' b^2 - 4 \\times 4 \\times 9 = 0',
          explanation: 'Set \\( b^2 - 4ac = 0 \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
 workingLatex: ' b^2 = 144',
          explanation: '\\( 4ac = 144 \\).'
        },
        {
          stepNumber: 3,
          description: 'Take the positive root.',
 workingLatex: ' b = 12',
          explanation: 'Since \\( b > 0 \\).'
        }
      ],
 finalAnswer: ' b = 12 '
    }
  },
  {
    id: 'a13-22',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 22',
    difficulty: 'Foundation',
    questionText: 'The discriminant of \\( x^2 + bx + 4 = 0 \\) is 9. Find the possible values of \\( b \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'finding b'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Discriminant equation.',
 workingLatex: ' b^2 - 16 = 9',
          explanation: '\\( 4ac = 16 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' b^2 = 25',
          explanation: 'Add 16 to both sides.'
        },
        {
          stepNumber: 3,
          description: 'Take both roots.',
 workingLatex: ' b = \\pm 5',
          explanation: 'Two possible values.'
        }
      ],
 finalAnswer: ' b = 5 or b = -5 '
    }
  },
  {
    id: 'a13-23',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 23',
    difficulty: 'Foundation',
    questionText: 'The discriminant of \\( 2x^2 + bx + 8 = 0 \\) is 0. Find the possible values of \\( b \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'repeated root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Equation.',
 workingLatex: ' b^2 - 64 = 0',
          explanation: '\\( 4ac = 4 \\times 2 \\times 8 = 64 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' b^2 = 64',
          explanation: 'Add 64.'
        },
        {
          stepNumber: 3,
          description: 'Roots.',
 workingLatex: ' b = \\pm 8',
          explanation: 'Two values.'
        }
      ],
 finalAnswer: ' b = 8 or b = -8 '
    }
  },
  {
    id: 'a13-24',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 24',
    difficulty: 'Foundation',
    questionText: 'The discriminant of \\( 3x^2 + 12x + c = 0 \\) is 0. Find \\( c \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'finding c'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Equation.',
 workingLatex: ' 144 - 12c = 0',
          explanation: '\\( b^2 = 144 \\), \\( 4ac = 12c \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' c = 12',
          explanation: 'Divide by 12.'
        }
      ],
 finalAnswer: ' c = 12 '
    }
  },
  {
    id: 'a13-25',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 25',
    difficulty: 'Foundation',
    questionText: 'The equation \\( ax^2 + 6x + 9 = 0 \\) has one repeated real root. Find \\( a \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'finding a'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Set discriminant to 0.',
 workingLatex: ' 36 - 36a = 0',
          explanation: '\\( b^2 = 36 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' a = 1',
          explanation: 'Divide by 36.'
        }
      ],
 finalAnswer: ' a = 1 '
    }
  },
  {
    id: 'a13-26',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 26',
    difficulty: 'Foundation',
    questionText: 'The equation \\( x^2 + 6x + c = 0 \\) has one repeated real root. Find \\( c \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'finding c'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Set discriminant to 0.',
 workingLatex: ' 36 - 4c = 0',
          explanation: '\\( b = 6 \\), \\( a = 1 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' c = 9',
          explanation: 'Divide by 4.'
        }
      ],
 finalAnswer: ' c = 9 '
    }
  },
  {
    id: 'a13-27',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 27',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( k \\) for which \\( x^2 + 6x + k = 0 \\) has two distinct real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'range of values'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Apply the condition \\( b^2 - 4ac > 0 \\).',
 workingLatex: ' 36 - 4k > 0',
          explanation: 'Two distinct real roots means discriminant is positive.'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' k < 9',
          explanation: 'Divide by 4.'
        }
      ],
 finalAnswer: ' k < 9 '
    }
  },
  {
    id: 'a13-28',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 28',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( k \\) for which \\( x^2 - 10x + k = 0 \\) has no real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'range of values'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition \\( b^2 - 4ac < 0 \\).',
 workingLatex: ' 100 - 4k < 0',
          explanation: 'No real roots means negative discriminant.'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' k > 25',
          explanation: 'Divide by 4.'
        }
      ],
 finalAnswer: ' k > 25 '
    }
  },
  {
    id: 'a13-29',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 29',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( k \\) for which \\( x^2 + kx + 4 = 0 \\) has two distinct real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'range of values'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' k^2 - 16 > 0',
          explanation: '\\( a = 1, c = 4 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' k > 4 or k < -4',
          explanation: 'Take square roots.'
        }
      ],
 finalAnswer: ' k > 4 or k < -4 '
    }
  },
  {
    id: 'a13-30',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 30',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( k \\) for which \\( x^2 + kx + 9 = 0 \\) has no real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'range of values'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' k^2 - 36 < 0',
          explanation: '\\( a = 1, c = 9 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' -6 < k < 6',
          explanation: '\\( k^2 < 36 \\).'
        }
      ],
 finalAnswer: ' -6 < k < 6 '
    }
  },
  {
    id: 'a13-31',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 31',
    difficulty: 'Foundation',
    questionText: 'Find the values of \\( k \\) for which \\( x^2 + (k+1)x + 4 = 0 \\) has a repeated root.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Discriminant equals 0.',
 workingLatex: ' (k+1)^2 - 16 = 0',
          explanation: '\\( a = 1, c = 4 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' (k+1)^2 = 16 \\Rightarrow k + 1 = \\pm 4',
          explanation: 'Square-root both sides.'
        },
        {
          stepNumber: 3,
          description: 'Find both values.',
 workingLatex: ' k = 3 or k = -5',
          explanation: 'Subtract 1 from each.'
        }
      ],
 finalAnswer: ' k = 3 or k = -5 '
    }
  },
  {
    id: 'a13-32',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 32',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( p \\) for which \\( x^2 - 8x + 12 + p = 0 \\) has two distinct real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' 64 - 4(12 + p) > 0',
          explanation: '\\( a = 1, b = -8, c = 12 + p \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
 workingLatex: ' 64 - 48 - 4p > 0',
          explanation: 'Expand the bracket.'
        },
        {
          stepNumber: 3,
          description: 'Solve.',
 workingLatex: ' 16 > 4p \\Rightarrow p < 4',
          explanation: 'Divide by 4.'
        }
      ],
 finalAnswer: ' p < 4 '
    }
  },
  {
    id: 'a13-33',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 33',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( q \\) for which \\( 4x^2 - 4x + q = 0 \\) has two distinct real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' 16 - 16q > 0',
          explanation: '\\( b^2 = 16, 4ac = 16q \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' q < 1',
          explanation: 'Divide by 16.'
        }
      ],
 finalAnswer: ' q < 1 '
    }
  },
  {
    id: 'a13-34',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 34',
    difficulty: 'Foundation',
    questionText: 'The equation \\( x^2 + kx + 16 = 0 \\) has no real roots. Find the range of values of \\( k \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'range of values'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' k^2 - 64 < 0',
          explanation: '\\( a = 1, c = 16 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' -8 < k < 8',
          explanation: 'Take square roots.'
        }
      ],
 finalAnswer: ' -8 < k < 8 '
    }
  },
  {
    id: 'a13-35',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 35',
    difficulty: 'Foundation',
    questionText: 'The equation \\( 2x^2 + kx + 8 = 0 \\) has no real roots. Find the range of values of \\( k \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'range of values'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' k^2 - 64 < 0',
          explanation: '\\( 4ac = 4 \\times 2 \\times 8 = 64 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' -8 < k < 8',
          explanation: 'Square-root inequality.'
        }
      ],
 finalAnswer: ' -8 < k < 8 '
    }
  },
  {
    id: 'a13-36',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 36',
    difficulty: 'Foundation',
    questionText: 'Find the value(s) of \\( k \\) for which \\( kx^2 - 4x + 1 = 0 \\) has a repeated root.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Discriminant = 0.',
 workingLatex: ' 16 - 4k = 0',
          explanation: '\\( b^2 = 16, 4ac = 4k \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' k = 4',
          explanation: 'Divide by 4.'
        }
      ],
 finalAnswer: ' k = 4 '
    }
  },
  {
    id: 'a13-37',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 37',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( k \\) for which \\( kx^2 + 6x + 3 = 0 \\) has two distinct real roots. (Assume \\( k \\ne 0 \\).)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' 36 - 12k > 0',
          explanation: '\\( b^2 = 36, 4ac = 12k \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' k < 3',
          explanation: 'Divide by 12.'
        }
      ],
 finalAnswer: ' k < 3, k \\ne 0 '
    }
  },
  {
    id: 'a13-38',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 38',
    difficulty: 'Foundation',
    questionText: 'The equation \\( x^2 + (k - 2)x + 9 = 0 \\) has a repeated root. Find the values of \\( k \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Equation.',
 workingLatex: ' (k - 2)^2 - 36 = 0',
          explanation: 'Set discriminant to 0.'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' k - 2 = \\pm 6',
          explanation: 'Square-root.'
        },
        {
          stepNumber: 3,
          description: 'Find both values.',
 workingLatex: ' k = 8 or k = -4',
          explanation: 'Add 2 to each.'
        }
      ],
 finalAnswer: ' k = 8 or k = -4 '
    }
  },
  {
    id: 'a13-39',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 39',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( k \\) for which \\( x^2 + (2k)x + k + 2 = 0 \\) has two distinct real roots.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' 4k^2 - 4(k + 2) > 0',
          explanation: '\\( b^2 = 4k^2 \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
 workingLatex: ' 4k^2 - 4k - 8 > 0',
          explanation: 'Expand the bracket.'
        },
        {
          stepNumber: 3,
          description: 'Divide by 4 and factorise.',
 workingLatex: ' k^2 - k - 2 > 0 \\Rightarrow (k - 2)(k + 1) > 0',
          explanation: 'Factorising the quadratic.'
        },
        {
          stepNumber: 4,
          description: 'Solve the inequality.',
 workingLatex: ' k > 2 or k < -1',
          explanation: 'Outside the roots for a U-shape.'
        }
      ],
 finalAnswer: ' k > 2 or k < -1 '
    }
  },
  {
    id: 'a13-40',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 40',
    difficulty: 'Foundation',
    questionText: 'The equation \\( x^2 + (k - 3)x + 4 = 0 \\) has two distinct real roots. Find the range of values of \\( k \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' (k - 3)^2 - 16 > 0',
          explanation: '\\( a = 1, c = 4 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' (k - 3)^2 > 16',
          explanation: 'Rearrange.'
        },
        {
          stepNumber: 3,
          description: 'Take square roots.',
 workingLatex: ' k - 3 > 4 or k - 3 < -4',
          explanation: 'Two cases.'
        },
        {
          stepNumber: 4,
          description: 'Solve each.',
 workingLatex: ' k > 7 or k < -1',
          explanation: 'Add 3 to each.'
        }
      ],
 finalAnswer: ' k > 7 or k < -1 '
    }
  },
  {
    id: 'a13-41',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 41',
    difficulty: 'Foundation',
    questionText: 'The equation \\( x^2 + 4x + (k - 1) = 0 \\) has no real roots. Find the range of values of \\( k \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' 16 - 4(k - 1) < 0',
          explanation: '\\( b^2 = 16 \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
 workingLatex: ' 16 - 4k + 4 < 0',
          explanation: 'Distribute the -4.'
        },
        {
          stepNumber: 3,
          description: 'Solve.',
 workingLatex: ' 20 < 4k \\Rightarrow k > 5',
          explanation: 'Divide by 4.'
        }
      ],
 finalAnswer: ' k > 5 '
    }
  },
  {
    id: 'a13-42',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 42',
    difficulty: 'Foundation',
    questionText: 'The equation \\( 2x^2 + 8x + (k + 3) = 0 \\) has two distinct real roots. Find the range of values of \\( k \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' 64 - 8(k + 3) > 0',
          explanation: '\\( b^2 = 64, 4ac = 8(k+3) \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
 workingLatex: ' 64 - 8k - 24 > 0',
          explanation: 'Distribute.'
        },
        {
          stepNumber: 3,
          description: 'Solve.',
 workingLatex: ' 40 > 8k \\Rightarrow k < 5',
          explanation: 'Divide by 8.'
        }
      ],
 finalAnswer: ' k < 5 '
    }
  },
  {
    id: 'a13-43',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 43',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( c \\) for which the graph \\( y = x^2 + 2x + c \\) does not cross the x-axis.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'graph interpretation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'No x-intercepts means no real roots.',
 workingLatex: ' 4 - 4c < 0',
          explanation: 'Use \\( b^2 - 4ac < 0 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' c > 1',
          explanation: 'Divide by 4.'
        }
      ],
 finalAnswer: ' c > 1 '
    }
  },
  {
    id: 'a13-44',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 44',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( c \\) for which the graph \\( y = x^2 - 4x + c \\) crosses the x-axis twice.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'graph interpretation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Two x-intercepts means two distinct real roots.',
 workingLatex: ' 16 - 4c > 0',
          explanation: 'Use \\( b^2 - 4ac > 0 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' c < 4',
          explanation: 'Divide by 4.'
        }
      ],
 finalAnswer: ' c < 4 '
    }
  },
  {
    id: 'a13-45',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 45',
    difficulty: 'Foundation',
    questionText: 'Find the value of \\( c \\) for which the graph \\( y = x^2 + 10x + c \\) just touches the x-axis.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'graph interpretation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Touching x-axis once means discriminant = 0.',
 workingLatex: ' 100 - 4c = 0',
          explanation: '\\( b^2 = 100 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' c = 25',
          explanation: 'Divide by 4.'
        }
      ],
 finalAnswer: ' c = 25 '
    }
  },
  {
    id: 'a13-46',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 46',
    difficulty: 'Foundation',
    questionText: 'The equation \\( x^2 + (k - 4)x + k = 0 \\) has two distinct real roots. Find the range of values of \\( k \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' (k - 4)^2 - 4k > 0',
          explanation: '\\( a = 1, c = k \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand.',
 workingLatex: ' k^2 - 8k + 16 - 4k > 0',
          explanation: 'Expand the square.'
        },
        {
          stepNumber: 3,
          description: 'Simplify.',
 workingLatex: ' k^2 - 12k + 16 > 0',
          explanation: 'Collect like terms.'
        },
        {
          stepNumber: 4,
          description: 'Solve \\( k^2 - 12k + 16 = 0 \\) using the quadratic formula to find critical values.',
 workingLatex: ' k = 6 \\pm 2\\sqrt{5}',
          explanation: 'Then outside the roots for >0.'
        }
      ],
 finalAnswer: ' k < 6 - 2\\sqrt{5} or k > 6 + 2\\sqrt{5} '
    }
  },
  {
    id: 'a13-47',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 47',
    difficulty: 'Foundation',
    questionText: 'The equation \\( x^2 - 6x + k + 2 = 0 \\) has a repeated root. Find \\( k \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Discriminant = 0.',
 workingLatex: ' 36 - 4(k + 2) = 0',
          explanation: '\\( b^2 = 36 \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
 workingLatex: ' 36 - 4k - 8 = 0',
          explanation: 'Distribute -4.'
        },
        {
          stepNumber: 3,
          description: 'Solve.',
 workingLatex: ' k = 7',
          explanation: '\\( 28 = 4k \\).'
        }
      ],
 finalAnswer: ' k = 7 '
    }
  },
  {
    id: 'a13-48',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 48',
    difficulty: 'Foundation',
    questionText: 'The equation \\( 3x^2 + 12x + k = 0 \\) has no real roots. Find the range of \\( k \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'range of values'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' 144 - 12k < 0',
          explanation: '\\( b^2 = 144, 4ac = 12k \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' k > 12',
          explanation: 'Divide by 12.'
        }
      ],
 finalAnswer: ' k > 12 '
    }
  },
  {
    id: 'a13-49',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 49',
    difficulty: 'Foundation',
    questionText: 'The equation \\( 5x^2 - 10x + k = 0 \\) has two distinct real roots. Find the range of \\( k \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'range of values'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' 100 - 20k > 0',
          explanation: '\\( b^2 = 100, 4ac = 20k \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' k < 5',
          explanation: 'Divide by 20.'
        }
      ],
 finalAnswer: ' k < 5 '
    }
  },
  {
    id: 'a13-50',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 50',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( p \\) for which \\( x^2 + 2px + p + 6 = 0 \\) has no real roots.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' 4p^2 - 4(p + 6) < 0',
          explanation: '\\( b^2 = 4p^2 \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
 workingLatex: ' p^2 - p - 6 < 0',
          explanation: 'Divide through by 4.'
        },
        {
          stepNumber: 3,
          description: 'Factorise.',
 workingLatex: ' (p - 3)(p + 2) < 0',
          explanation: '-3 and 2 multiply to -6 and add to -1.'
        },
        {
          stepNumber: 4,
          description: 'Solve the inequality.',
 workingLatex: ' -2 < p < 3',
          explanation: 'Between the roots for a U-shape < 0.'
        }
      ],
 finalAnswer: ' -2 < p < 3 '
    }
  },
  {
    id: 'a13-51',
    topicRef: 'a13',
    topicTitle: 'Quadratic Graph Interpretation 51',
    difficulty: 'Foundation',
    questionText: 'A sketch shows a U-shaped quadratic whose graph crosses the x-axis at two distinct points. State the number of real roots and the sign of the discriminant.',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'graph interpretation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Two crossings mean two distinct real roots.',
          workingLatex: 'Two real roots',
          explanation: 'Each x-intercept is a solution.'
        },
        {
          stepNumber: 2,
          description: 'The discriminant must be positive.',
 workingLatex: ' b^2 - 4ac > 0',
          explanation: 'Positive discriminant gives two different roots.'
        }
      ],
      finalAnswer: 'Two real roots; positive discriminant.'
    }
  },
  {
    id: 'a13-52',
    topicRef: 'a13',
    topicTitle: 'Quadratic Graph Interpretation 52',
    difficulty: 'Foundation',
    questionText: 'A sketch shows a U-shaped quadratic whose graph just touches the x-axis at one point. State the number of real roots and the sign of the discriminant.',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'graph interpretation', 'repeated root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Touching once means a repeated root.',
          workingLatex: 'One repeated real root',
          explanation: 'Vertex lies on the x-axis.'
        },
        {
          stepNumber: 2,
          description: 'Discriminant is zero.',
 workingLatex: ' b^2 - 4ac = 0',
          explanation: 'Exactly one solution.'
        }
      ],
      finalAnswer: 'One repeated real root; discriminant = 0.'
    }
  },
  {
    id: 'a13-53',
    topicRef: 'a13',
    topicTitle: 'Quadratic Graph Interpretation 53',
    difficulty: 'Foundation',
    questionText: 'A sketch shows an n-shaped quadratic graph that does not cross the x-axis. State the number of real roots and the sign of the discriminant.',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'graph interpretation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'No crossings mean no real roots.',
          workingLatex: 'No real roots',
          explanation: 'The graph lies entirely below (or above) the x-axis.'
        },
        {
          stepNumber: 2,
          description: 'Discriminant must be negative.',
 workingLatex: ' b^2 - 4ac < 0',
          explanation: 'Negative discriminant gives no real solutions.'
        }
      ],
      finalAnswer: 'No real roots; negative discriminant.'
    }
  },
  {
    id: 'a13-54',
    topicRef: 'a13',
    topicTitle: 'Quadratic Graph Interpretation 54',
    difficulty: 'Foundation',
    questionText: 'A sketch shows an n-shaped quadratic with maximum value above the x-axis. State the number of real roots.',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'graph interpretation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'An n-shape rising above zero must cross the x-axis twice.',
          workingLatex: 'Two distinct real roots',
          explanation: 'It crosses once going up, once coming down.'
        }
      ],
      finalAnswer: 'Two distinct real roots.'
    }
  },
  {
    id: 'a13-55',
    topicRef: 'a13',
    topicTitle: 'Quadratic Graph Interpretation 55',
    difficulty: 'Foundation',
    questionText: 'A sketch shows a U-shaped quadratic with minimum value above the x-axis. State the number of real roots.',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'graph interpretation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'A U-shape whose minimum is above zero never meets the x-axis.',
          workingLatex: 'No real roots',
          explanation: 'Graph stays entirely above the x-axis.'
        }
      ],
      finalAnswer: 'No real roots.'
    }
  },
  {
    id: 'a13-56',
    topicRef: 'a13',
    topicTitle: 'Quadratic Graph Interpretation 56',
    difficulty: 'Foundation',
    questionText: 'A sketch shows an n-shaped quadratic that just touches the x-axis at \\( x = 4 \\). State the number of real roots and write a possible equation.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'graph interpretation', 'repeated root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Touching once at \\( x = 4 \\) means a repeated root at 4.',
          workingLatex: '1 repeated real root',
          explanation: 'The graph just touches at the vertex.'
        },
        {
          stepNumber: 2,
          description: 'Write an n-shape with repeated root at 4.',
 workingLatex: ' f(x) = -(x - 4)^2',
          explanation: 'Negative leading coefficient for an n-shape.'
        }
      ],
 finalAnswer: 'One repeated root at x = 4 ; f(x) = -(x-4)^2 .'
    }
  },
  {
    id: 'a13-57',
    topicRef: 'a13',
    topicTitle: 'Quadratic Graph Interpretation 57',
    difficulty: 'Foundation',
    questionText: 'A sketch shows a U-shaped quadratic crossing the x-axis at \\( x = 1 \\) and \\( x = 5 \\). State the discriminant sign and give one possible equation.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'graph interpretation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Two distinct real roots means positive discriminant.',
 workingLatex: ' b^2 - 4ac > 0',
          explanation: 'Two different solutions.'
        },
        {
          stepNumber: 2,
          description: 'Possible equation.',
 workingLatex: ' f(x) = (x - 1)(x - 5) = x^2 - 6x + 5',
          explanation: 'Roots at 1 and 5.'
        }
      ],
 finalAnswer: 'Positive discriminant; f(x) = x^2 - 6x + 5 .'
    }
  },
  {
    id: 'a13-58',
    topicRef: 'a13',
    topicTitle: 'Quadratic Graph Interpretation 58',
    difficulty: 'Foundation',
    questionText: 'A sketch shows an n-shaped quadratic that crosses the x-axis at \\( x = -2 \\) and \\( x = 3 \\). State the discriminant sign and give one possible equation.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'graph interpretation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Two roots → positive discriminant.',
 workingLatex: ' b^2 - 4ac > 0',
          explanation: 'Same rule for U- and n-shapes.'
        },
        {
          stepNumber: 2,
          description: 'Equation (n-shape).',
 workingLatex: ' f(x) = -(x + 2)(x - 3)',
          explanation: 'Negative leading coefficient.'
        }
      ],
 finalAnswer: 'Positive discriminant; f(x) = -(x+2)(x-3) .'
    }
  },
  {
    id: 'a13-59',
    topicRef: 'a13',
    topicTitle: 'Quadratic Graph Interpretation 59',
    difficulty: 'Foundation',
    questionText: 'A sketch shows a U-shaped quadratic whose vertex is at \\( (2, -9) \\). How many real roots does the function have, and what is the sign of the discriminant?',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'graph interpretation', 'vertex'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'The minimum value is -9 which is below the x-axis.',
          workingLatex: 'Two distinct real roots',
          explanation: 'A U-shape with minimum below zero crosses twice.'
        },
        {
          stepNumber: 2,
          description: 'Positive discriminant.',
 workingLatex: ' b^2 - 4ac > 0',
          explanation: 'Two distinct real solutions.'
        }
      ],
      finalAnswer: 'Two real roots; positive discriminant.'
    }
  },
  {
    id: 'a13-60',
    topicRef: 'a13',
    topicTitle: 'Quadratic Graph Interpretation 60',
    difficulty: 'Foundation',
    questionText: 'A sketch shows a U-shaped quadratic whose vertex is at \\( (3, 2) \\). How many real roots does the function have, and what is the sign of the discriminant?',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'graph interpretation', 'vertex'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Minimum value 2 is above the x-axis.',
          workingLatex: 'No real roots',
          explanation: 'Graph lies above the x-axis.'
        },
        {
          stepNumber: 2,
          description: 'Negative discriminant.',
 workingLatex: ' b^2 - 4ac < 0',
          explanation: 'No real solutions.'
        }
      ],
      finalAnswer: 'No real roots; negative discriminant.'
    }
  },
  {
    id: 'a13-61',
    topicRef: 'a13',
    topicTitle: 'Quadratic Graph Interpretation 61',
    difficulty: 'Foundation',
    questionText: 'A sketch shows an n-shaped quadratic whose vertex is at \\( (-1, 0) \\). How many real roots does the function have and what is the discriminant?',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'graph interpretation', 'vertex'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Vertex on the x-axis means exactly one repeated root.',
 workingLatex: 'One repeated real root at x = -1',
          explanation: 'The maximum touches the x-axis.'
        },
        {
          stepNumber: 2,
          description: 'Discriminant equals 0.',
 workingLatex: ' b^2 - 4ac = 0',
          explanation: 'Single repeated solution.'
        }
      ],
      finalAnswer: 'One repeated root; discriminant = 0.'
    }
  },
  {
    id: 'a13-62',
    topicRef: 'a13',
    topicTitle: 'Quadratic Graph Interpretation 62',
    difficulty: 'Foundation',
    questionText: 'A sketch shows an n-shaped quadratic whose vertex is at \\( (0, -5) \\). How many real roots does the function have?',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'graph interpretation', 'vertex'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'The maximum value -5 is below the x-axis.',
          workingLatex: 'No real roots',
          explanation: 'An n-shape whose peak is below zero never touches the x-axis.'
        }
      ],
      finalAnswer: 'No real roots.'
    }
  },
  {
    id: 'a13-63',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 63',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( 2x^2 - 3x + 1 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'real roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = 2, b = -3, c = 1',
          explanation: 'From standard form.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 9 - 8 = 1',
          explanation: '\\( 4ac = 8 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: ' 1 > 0',
          explanation: 'Two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 1; two distinct real roots.'
    }
  },
  {
    id: 'a13-64',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 64',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( 9x^2 + 6x + 1 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'repeated root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = 9, b = 6, c = 1',
          explanation: 'Standard form.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 36 - 36 = 0',
          explanation: '\\( 4ac = 36 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
          workingLatex: '0',
          explanation: 'One repeated real root.'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
  {
    id: 'a13-65',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 65',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( 6x^2 + x - 2 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'real roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = 6, b = 1, c = -2',
          explanation: 'Read off.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 1 - 4 \\times 6 \\times (-2) = 1 + 48 = 49',
          explanation: 'Negative c flips sign.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: ' 49 > 0',
          explanation: 'Two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 49; two distinct real roots.'
    }
  },
  {
    id: 'a13-66',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 66',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( 4x^2 + 4x + 1 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'repeated root'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = 4, b = 4, c = 1',
          explanation: 'Perfect square form.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 16 - 16 = 0',
          explanation: '\\( 4ac = 16 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
          workingLatex: '0',
          explanation: 'One repeated real root.'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
  {
    id: 'a13-67',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 67',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( x^2 + 5x + 7 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'no real roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = 1, b = 5, c = 7',
          explanation: 'Standard form.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 25 - 28 = -3',
          explanation: '\\( 4ac = 28 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: '-3 < 0',
          explanation: 'No real roots.'
        }
      ],
 finalAnswer: 'Discriminant -3; no real roots.'
    }
  },
  {
    id: 'a13-68',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 68',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( (x + 3)(x - 5) \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'expanding'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Expand.',
 workingLatex: ' x^2 - 2x - 15',
          explanation: 'Use FOIL.'
        },
        {
          stepNumber: 2,
          description: 'Identify.',
 workingLatex: ' a = 1, b = -2, c = -15',
          explanation: 'From expanded form.'
        },
        {
          stepNumber: 3,
          description: 'Compute.',
 workingLatex: ' 4 + 60 = 64',
          explanation: 'Positive result.'
        },
        {
          stepNumber: 4,
          description: 'Interpret.',
 workingLatex: ' 64 > 0',
          explanation: 'Two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 64; two distinct real roots.'
    }
  },
  {
    id: 'a13-69',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 69',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( x(x + 6) \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'factorised'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Expand.',
 workingLatex: ' x^2 + 6x',
          explanation: 'No constant term.'
        },
        {
          stepNumber: 2,
          description: 'Identify.',
 workingLatex: ' a = 1, b = 6, c = 0',
          explanation: 'From expanded form.'
        },
        {
          stepNumber: 3,
          description: 'Compute.',
 workingLatex: ' 36 - 0 = 36',
          explanation: '\\( 4ac = 0 \\).'
        },
        {
          stepNumber: 4,
          description: 'Interpret.',
 workingLatex: ' 36 > 0',
          explanation: 'Two distinct real roots (at \\( x = 0 \\) and \\( x = -6 \\)).'
        }
      ],
      finalAnswer: 'Discriminant 36; two distinct real roots.'
    }
  },
  {
    id: 'a13-70',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 70',
    difficulty: 'Foundation',
    questionText: 'Find the discriminant of \\( x^2 - 2\\sqrt{5}x + 5 \\) and state the number of real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'surds'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = 1, b = -2\\sqrt{5}, c = 5',
          explanation: 'Include the surd.'
        },
        {
          stepNumber: 2,
          description: 'Compute \\( b^2 \\).',
 workingLatex: ' (-2\\sqrt{5})^2 = 4 \\times 5 = 20',
          explanation: 'Square both parts.'
        },
        {
          stepNumber: 3,
          description: 'Discriminant.',
 workingLatex: ' 20 - 20 = 0',
          explanation: 'They cancel exactly.'
        },
        {
          stepNumber: 4,
          description: 'Interpret.',
          workingLatex: '0',
          explanation: 'One repeated real root.'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
  {
    id: 'a13-71',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 71',
    difficulty: 'Foundation',
    questionText: 'The discriminant of \\( 6x^2 + bx = 5 \\) is 169, where \\( b \\) is an integer. Find all possible values of \\( b \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'finding b'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Rearrange.',
 workingLatex: ' 6x^2 + bx - 5 = 0',
          explanation: 'Standard form.'
        },
        {
          stepNumber: 2,
          description: 'Write discriminant equation.',
 workingLatex: ' b^2 - 4 \\times 6 \\times (-5) = 169',
          explanation: '\\( a = 6, c = -5 \\).'
        },
        {
          stepNumber: 3,
          description: 'Simplify.',
 workingLatex: ' b^2 + 120 = 169 \\Rightarrow b^2 = 49',
          explanation: 'Subtract 120.'
        },
        {
          stepNumber: 4,
          description: 'Solve.',
 workingLatex: ' b = \\pm 7',
          explanation: 'Two integer solutions.'
        }
      ],
 finalAnswer: ' b = 7 or b = -7 '
    }
  },
  {
    id: 'a13-72',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 72',
    difficulty: 'Foundation',
    questionText: 'The equation \\( ax^2 + 5x + 2 = 0 \\) has one repeated real root. Find \\( a \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'finding a'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Discriminant = 0.',
 workingLatex: ' 25 - 8a = 0',
          explanation: '\\( b^2 = 25, 4ac = 8a \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' a = \\tfrac{25}{8}',
          explanation: 'Divide by 8.'
        }
      ],
 finalAnswer: ' a = \\tfrac{25}{8} '
    }
  },
  {
    id: 'a13-73',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 73',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( p \\) for which \\( x^2 - 8x + 12 + p = 0 \\) has no real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' 64 - 4(12 + p) < 0',
          explanation: '\\( b^2 = 64 \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
 workingLatex: ' 16 - 4p < 0',
          explanation: 'Distribute.'
        },
        {
          stepNumber: 3,
          description: 'Solve.',
 workingLatex: ' p > 4',
          explanation: 'Divide by 4.'
        }
      ],
 finalAnswer: ' p > 4 '
    }
  },
  {
    id: 'a13-74',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 74',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( q \\) for which \\( 4x^2 - 12x + q = 0 \\) has a repeated root or no real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'range of values'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition: discriminant \\(\\le 0\\).',
 workingLatex: ' 144 - 16q \\le 0',
          explanation: '\\( b^2 = 144 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' q \\ge 9',
          explanation: 'Divide by 16.'
        }
      ],
 finalAnswer: ' q \\ge 9 '
    }
  },
  {
    id: 'a13-75',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 75',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( k \\) for which \\( x^2 + 4x + 4k = 0 \\) has two distinct real roots.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'range of values'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' 16 - 16k > 0',
          explanation: '\\( b^2 = 16, 4ac = 16k \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' k < 1',
          explanation: 'Divide by 16.'
        }
      ],
 finalAnswer: ' k < 1 '
    }
  },
  {
    id: 'a13-76',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 76',
    difficulty: 'Foundation',
    questionText: 'The graph \\( y = x^2 + kx + 1 \\) does not cross the x-axis. Find the range of values of \\( k \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'graph interpretation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' k^2 - 4 < 0',
          explanation: '\\( a = 1, c = 1 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' -2 < k < 2',
          explanation: '\\( k^2 < 4 \\).'
        }
      ],
 finalAnswer: ' -2 < k < 2 '
    }
  },
  {
    id: 'a13-77',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 77',
    difficulty: 'Foundation',
    questionText: 'The graph \\( y = 3x^2 + kx + 12 \\) is tangent to the x-axis. Find the possible values of \\( k \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'graph interpretation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Tangent means discriminant = 0.',
 workingLatex: ' k^2 - 144 = 0',
          explanation: '\\( 4ac = 144 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' k = \\pm 12',
          explanation: 'Two possible values.'
        }
      ],
 finalAnswer: ' k = 12 or k = -12 '
    }
  },
  {
    id: 'a13-78',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 78',
    difficulty: 'Foundation',
    questionText: 'The equation \\( x^2 + (2k + 1)x + 9 = 0 \\) has a repeated root. Find the values of \\( k \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' (2k + 1)^2 - 36 = 0',
          explanation: '\\( a = 1, c = 9 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' (2k + 1)^2 = 36 \\Rightarrow 2k + 1 = \\pm 6',
          explanation: 'Square-root both sides.'
        },
        {
          stepNumber: 3,
          description: 'Find values.',
 workingLatex: ' k = \\tfrac{5}{2} or k = -\\tfrac{7}{2}',
          explanation: 'Subtract 1 and divide by 2.'
        }
      ],
 finalAnswer: ' k = \\tfrac{5}{2} or k = -\\tfrac{7}{2} '
    }
  },
  {
    id: 'a13-79',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 79',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( k \\) for which \\( x^2 + (k - 2)x + (k - 2) = 0 \\) has no real roots.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' (k - 2)^2 - 4(k - 2) < 0',
          explanation: '\\( b^2 - 4ac \\).'
        },
        {
          stepNumber: 2,
          description: 'Factor out \\( (k - 2) \\).',
 workingLatex: ' (k - 2)(k - 2 - 4) < 0',
          explanation: 'Common factor trick.'
        },
        {
          stepNumber: 3,
          description: 'Simplify.',
 workingLatex: ' (k - 2)(k - 6) < 0',
          explanation: 'Product of two factors.'
        },
        {
          stepNumber: 4,
          description: 'Solve the inequality.',
 workingLatex: ' 2 < k < 6',
          explanation: 'Between the roots.'
        }
      ],
 finalAnswer: ' 2 < k < 6 '
    }
  },
  {
    id: 'a13-80',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 80',
    difficulty: 'Foundation',
    questionText: 'The equation \\( (k - 1)x^2 + 2kx + 4 = 0 \\) has a repeated root. Find the values of \\( k \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' (2k)^2 - 4(k - 1)(4) = 0',
          explanation: 'Discriminant = 0.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
 workingLatex: ' 4k^2 - 16k + 16 = 0',
          explanation: 'Expand.'
        },
        {
          stepNumber: 3,
          description: 'Divide by 4.',
 workingLatex: ' k^2 - 4k + 4 = 0',
          explanation: 'Simplify.'
        },
        {
          stepNumber: 4,
          description: 'Factorise.',
 workingLatex: ' (k - 2)^2 = 0 \\Rightarrow k = 2',
          explanation: 'One repeated root.'
        }
      ],
 finalAnswer: ' k = 2 '
    }
  },
  {
    id: 'a13-81',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 81',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( k \\) for which \\( x^2 - 2kx + 4 = 0 \\) has two distinct real roots.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' 4k^2 - 16 > 0',
          explanation: '\\( b = -2k \\), so \\( b^2 = 4k^2 \\).'
        },
        {
          stepNumber: 2,
          description: 'Divide by 4.',
 workingLatex: ' k^2 > 4',
          explanation: 'Simplify.'
        },
        {
          stepNumber: 3,
          description: 'Solve.',
 workingLatex: ' k > 2 or k < -2',
          explanation: 'Two intervals.'
        }
      ],
 finalAnswer: ' k > 2 or k < -2 '
    }
  },
  {
    id: 'a13-82',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 82',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( k \\) for which \\( x^2 - 2kx + 9 = 0 \\) has no real roots.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' 4k^2 - 36 < 0',
          explanation: '\\( b^2 = 4k^2 \\).'
        },
        {
          stepNumber: 2,
          description: 'Divide by 4.',
 workingLatex: ' k^2 < 9',
          explanation: 'Simplify.'
        },
        {
          stepNumber: 3,
          description: 'Solve.',
 workingLatex: ' -3 < k < 3',
          explanation: 'Between the square roots.'
        }
      ],
 finalAnswer: ' -3 < k < 3 '
    }
  },
  {
    id: 'a13-83',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 83',
    difficulty: 'Foundation',
    questionText: 'The equation \\( x^2 + 2kx + (3k + 4) = 0 \\) has no real roots. Find the range of \\( k \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' 4k^2 - 4(3k + 4) < 0',
          explanation: '\\( b^2 - 4ac \\).'
        },
        {
          stepNumber: 2,
          description: 'Divide by 4.',
 workingLatex: ' k^2 - 3k - 4 < 0',
          explanation: 'Simplify.'
        },
        {
          stepNumber: 3,
          description: 'Factorise.',
 workingLatex: ' (k - 4)(k + 1) < 0',
          explanation: '-4 and 1 multiply to -4 and add to -3.'
        },
        {
          stepNumber: 4,
          description: 'Solve.',
 workingLatex: ' -1 < k < 4',
          explanation: 'Between the roots.'
        }
      ],
 finalAnswer: ' -1 < k < 4 '
    }
  },
  {
    id: 'a13-84',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 84',
    difficulty: 'Foundation',
    questionText: 'The equation \\( x^2 - 4x + k - 5 = 0 \\) has a repeated root. Find \\( k \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' 16 - 4(k - 5) = 0',
          explanation: 'Discriminant = 0.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
 workingLatex: ' 16 - 4k + 20 = 0',
          explanation: 'Distribute -4.'
        },
        {
          stepNumber: 3,
          description: 'Solve.',
 workingLatex: ' k = 9',
          explanation: '\\( 36 = 4k \\).'
        }
      ],
 finalAnswer: ' k = 9 '
    }
  },
  {
    id: 'a13-85',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 85',
    difficulty: 'Foundation',
    questionText: 'For what values of \\( k \\) does \\( x^2 + 6x + 2k = 0 \\) have no real roots?',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'range of values'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' 36 - 8k < 0',
          explanation: '\\( b^2 = 36, 4ac = 8k \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' k > \\tfrac{9}{2}',
          explanation: 'Divide by 8.'
        }
      ],
 finalAnswer: ' k > \\tfrac{9}{2} '
    }
  },
  {
    id: 'a13-86',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 86',
    difficulty: 'Foundation',
    questionText: 'For what values of \\( k \\) does \\( 2x^2 - 4x + k = 0 \\) have two distinct real roots?',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'range of values'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' 16 - 8k > 0',
          explanation: '\\( b^2 = 16 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' k < 2',
          explanation: 'Divide by 8.'
        }
      ],
 finalAnswer: ' k < 2 '
    }
  },
  {
    id: 'a13-87',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 87',
    difficulty: 'Foundation',
    questionText: 'For what values of \\( k \\) does \\( x^2 + kx + k = 0 \\) have a repeated root?',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'parameter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' k^2 - 4k = 0',
          explanation: '\\( a = 1, c = k \\).'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
 workingLatex: ' k(k - 4) = 0',
          explanation: 'Common factor k.'
        },
        {
          stepNumber: 3,
          description: 'Solve.',
 workingLatex: ' k = 0 or k = 4',
          explanation: 'Two possible values.'
        }
      ],
 finalAnswer: ' k = 0 or k = 4 '
    }
  },
  {
    id: 'a13-88',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 88',
    difficulty: 'Foundation',
    questionText: 'A U-shaped quadratic graph \\( y = x^2 + bx + 1 \\) just touches the x-axis. Find the possible values of \\( b \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'graph interpretation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Condition.',
 workingLatex: ' b^2 - 4 = 0',
          explanation: 'Discriminant is zero for tangency.'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' b = \\pm 2',
          explanation: 'Two possible values.'
        }
      ],
 finalAnswer: ' b = 2 or b = -2 '
    }
  },
  {
    id: 'a13-89',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 89',
    difficulty: 'Foundation',
    questionText: 'A U-shaped quadratic graph \\( y = 2x^2 + 4x + c \\) has its minimum exactly on the x-axis. Find \\( c \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'graph interpretation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Tangent to x-axis means discriminant = 0.',
 workingLatex: ' 16 - 8c = 0',
          explanation: '\\( b^2 = 16, 4ac = 8c \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' c = 2',
          explanation: 'Divide by 8.'
        }
      ],
 finalAnswer: ' c = 2 '
    }
  },
  {
    id: 'a13-90',
    topicRef: 'a13',
    topicTitle: 'Using the Discriminant 90',
    difficulty: 'Foundation',
    questionText: 'Show that \\( x^2 - 6x + 10 \\) has no real roots by computing the discriminant.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['discriminant', 'proof', 'no real roots'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify.',
 workingLatex: ' a = 1, b = -6, c = 10',
          explanation: 'Read off coefficients.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 36 - 40 = -4',
          explanation: '\\( 4ac = 40 \\).'
        },
        {
          stepNumber: 3,
          description: 'Conclude.',
 workingLatex: '-4 < 0',
          explanation: 'Since the discriminant is negative, there are no real roots.'
        }
      ],
 finalAnswer: 'Discriminant -4 < 0, so no real roots.'
    }
  }
];