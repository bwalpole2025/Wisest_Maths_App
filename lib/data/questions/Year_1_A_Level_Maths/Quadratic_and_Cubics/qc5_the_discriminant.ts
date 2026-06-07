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
    id: 'qc5-001',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 01',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Read the coefficients straight off the standard form \\( ax^2 + bx + c \\).'
        },
        {
          stepNumber: 2,
          description: 'Substitute into \\( b^2 - 4ac \\).',
 workingLatex: ' 6^2 - 4 \\times 1 \\times 8 = 36 - 32 = 4',
          explanation: 'The discriminant \\( \\Delta = b^2 - 4ac \\) measures whether the quadratic formula\'s square root is positive, zero, or negative.'
        },
        {
          stepNumber: 3,
          description: 'Interpret the result.',
 workingLatex: ' 4 > 0',
          explanation: 'Since \\( \\Delta > 0 \\) the square root in the quadratic formula gives two different real values, so the equation has two distinct real roots.'
        }
      ],
 finalAnswer: 'Discriminant = 4 ; two distinct real roots.'
    }
  },
  {
    id: 'qc5-002',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 02',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Read \\( a \\), \\( b \\), \\( c \\) directly from \\( x^2 - 4x + 4 \\); keep the sign on \\( b \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' (-4)^2 - 4 \\times 1 \\times 4 = 16 - 16 = 0',
          explanation: 'Squaring \\( -4 \\) gives \\( +16 \\) — the bracket is essential to avoid \\( -16 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: 'Discriminant = 0',
          explanation: 'When \\( \\Delta = 0 \\) the quadratic formula\'s square-root term vanishes, leaving exactly one (repeated) real root.'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
  {
    id: 'qc5-003',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 03',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Read \\( a, b, c \\) from \\( x^2 + 2x + 5 \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 4 - 20 = -16',
          explanation: '\\( 2^2 = 4 \\) and \\( 4ac = 4 \\times 1 \\times 5 = 20 \\), so \\( \\Delta = 4 - 20 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: '-16 < 0',
          explanation: 'A negative discriminant means \\( \\sqrt{\\Delta} \\) is not real, so the quadratic formula has no real solutions.'
        }
      ],
 finalAnswer: 'Discriminant -16; no real roots.'
    }
  },
  {
    id: 'qc5-004',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 04',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Take the sign with the coefficient: \\( c = -3 \\), not \\( 3 \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 25 - 4 \\times 2 \\times (-3) = 25 + 24 = 49',
          explanation: '\\( -4ac = -4 \\times 2 \\times (-3) = +24 \\) — the two negatives multiply to a positive, which is why \\( \\Delta \\) grows rather than shrinks.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: ' 49 > 0',
          explanation: 'Since \\( \\Delta > 0 \\), the quadratic has two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 49; two distinct real roots.'
    }
  },
  {
    id: 'qc5-005',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 05',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Read \\( a, b, c \\) from the standard form, keeping the sign on \\( b \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 36 - 4 \\times 3 \\times 3 = 36 - 36 = 0',
          explanation: '\\( (-6)^2 = 36 \\) and \\( 4ac = 36 \\), so the two parts cancel.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: ' 0',
          explanation: 'A zero discriminant means \\( \\sqrt{\\Delta} = 0 \\) in the quadratic formula, giving one repeated real root.'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
  {
    id: 'qc5-006',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 06',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Read \\( a, b, c \\) from \\( x^2 - 3x + 5 \\), keeping the minus on \\( b \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 9 - 20 = -11',
          explanation: '\\( (-3)^2 = 9 \\) and \\( 4ac = 20 \\), so \\( \\Delta = 9 - 20 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: '-11 < 0',
          explanation: 'Since \\( \\Delta < 0 \\), the square root in the quadratic formula is not real, so there are no real roots.'
        }
      ],
 finalAnswer: 'Discriminant -11; no real roots.'
    }
  },
  {
    id: 'qc5-007',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 07',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'The whole surd \\( 2\\sqrt{3} \\) is the coefficient of \\( x \\), so that is \\( b \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute \\( b^2 \\).',
 workingLatex: ' (2\\sqrt{3})^2 = 4 \\times 3 = 12',
          explanation: 'Square each factor: \\( 2^2 = 4 \\) and \\( (\\sqrt{3})^2 = 3 \\), giving \\( 12 \\).'
        },
        {
          stepNumber: 3,
          description: 'Compute discriminant.',
 workingLatex: ' 12 - 12 = 0',
          explanation: '\\( 4ac = 12 \\) matches \\( b^2 = 12 \\), so they cancel.'
        },
        {
          stepNumber: 4,
          description: 'Interpret.',
          workingLatex: '0',
          explanation: '\\( \\Delta = 0 \\) means the quadratic is a perfect square and has one repeated real root.'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
  {
    id: 'qc5-008',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 08',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'The discriminant formula needs the quadratic in standard form \\( ax^2 + bx + c \\), so expand the brackets first.'
        },
        {
          stepNumber: 2,
          description: 'Identify.',
 workingLatex: ' a = 3, b = 10, c = -8',
          explanation: 'Read \\( a, b, c \\) from the expanded form, keeping the minus on \\( c \\).'
        },
        {
          stepNumber: 3,
          description: 'Compute.',
 workingLatex: ' 100 - 4 \\times 3 \\times (-8) = 100 + 96 = 196',
          explanation: '\\( -4ac = -4 \\times 3 \\times (-8) = +96 \\) because two negatives multiply to a positive.'
        },
        {
          stepNumber: 4,
          description: 'Interpret.',
 workingLatex: ' 196 > 0',
          explanation: '\\( \\Delta > 0 \\) means two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 196; two distinct real roots.'
    }
  },
  {
    id: 'qc5-009',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 09',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'With no constant term the value of \\( c \\) is \\( 0 \\), not missing.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 144 - 0 = 144',
          explanation: '\\( 4ac = 4 \\times 4 \\times 0 = 0 \\), so \\( \\Delta = b^2 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: ' 144 > 0',
          explanation: '\\( \\Delta > 0 \\) so two distinct real roots; in fact one of them is \\( x = 0 \\) because \\( c = 0 \\).'
        }
      ],
      finalAnswer: 'Discriminant 144; two distinct real roots.'
    }
  },
  {
    id: 'qc5-010',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 10',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'No \\( x \\) term means \\( b = 0 \\), and the leading fraction is \\( a \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 0 - 4 \\times \\tfrac{9}{16} \\times (-4) = 9',
          explanation: '\\( 4 \\times \\tfrac{9}{16} = \\tfrac{9}{4} \\) and then \\( \\tfrac{9}{4} \\times (-4) = -9 \\); subtracting that flips the sign to \\( +9 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: ' 9 > 0',
          explanation: '\\( \\Delta > 0 \\) gives two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 9; two distinct real roots.'
    }
  },
  {
    id: 'qc5-011',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 11',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Read \\( a, b, c \\) from the standard form.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 16 - 40 = -24',
          explanation: '\\( 4ac = 4 \\times 5 \\times 2 = 40 \\), and \\( b^2 = 16 \\) is smaller, so \\( \\Delta \\) is negative.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: '-24 < 0',
          explanation: '\\( \\Delta < 0 \\) so \\( \\sqrt{\\Delta} \\) is not real and the equation has no real roots.'
        }
      ],
 finalAnswer: 'Discriminant -24; no real roots.'
    }
  },
  {
    id: 'qc5-012',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 12',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Keep the signs with the coefficients: \\( a = -2 \\) and \\( c = -3 \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 49 - 4 \\times (-2) \\times (-3) = 49 - 24 = 25',
          explanation: '\\( 4ac = 4 \\times (-2) \\times (-3) = 24 \\) — the two negatives multiply to give a positive, so \\( -4ac = -24 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: ' 25 > 0',
          explanation: '\\( \\Delta > 0 \\) so two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 25; two distinct real roots.'
    }
  },
  {
    id: 'qc5-013',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 13',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Read \\( a, b, c \\) from the standard form.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 100 - 100 = 0',
          explanation: '\\( b^2 = 100 \\) and \\( 4ac = 100 \\) match exactly, so the discriminant is zero — a signal that the quadratic is a perfect square \\( (x + 5)^2 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
          workingLatex: '0',
          explanation: '\\( \\Delta = 0 \\) means one repeated real root.'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
  {
    id: 'qc5-014',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 14',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'No \\( x \\) term means \\( b = 0 \\); keep the minus on \\( c \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 0 - 4 \\times 1 \\times (-9) = 36',
          explanation: 'Subtracting \\( 4 \\times 1 \\times (-9) = -36 \\) flips the sign to give \\( +36 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: ' 36 > 0',
          explanation: '\\( \\Delta > 0 \\) gives two distinct real roots (which are \\( x = \\pm 3 \\)).'
        }
      ],
      finalAnswer: 'Discriminant 36; two distinct real roots.'
    }
  },
  {
    id: 'qc5-015',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 15',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'No \\( x \\) term gives \\( b = 0 \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 0 - 64 = -64',
          explanation: '\\( b^2 = 0 \\) and \\( 4ac = 64 \\), so \\( \\Delta = -64 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: '-64 < 0',
          explanation: '\\( \\Delta < 0 \\) means no real roots — the graph \\( y = x^2 + 16 \\) sits entirely above the \\( x \\)-axis.'
        }
      ],
 finalAnswer: 'Discriminant -64; no real roots.'
    }
  },
  {
    id: 'qc5-016',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 16',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Read \\( a, b, c \\) from the quadratic; note the common factor of \\( 7 \\) but we still use the full coefficients.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 196 - 196 = 0',
          explanation: '\\( 14^2 = 196 \\) and \\( 4ac = 4 \\times 7 \\times 7 = 196 \\), so they cancel.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
          workingLatex: '0',
          explanation: '\\( \\Delta = 0 \\) means one repeated real root — the quadratic factors as \\( 7(x + 1)^2 \\).'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
  {
    id: 'qc5-017',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 17',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'The coefficient of \\( x^2 \\) is \\( \\tfrac{1}{2} \\) and the coefficient of \\( x \\) is \\( \\tfrac{3}{2} \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' \\tfrac{9}{4} - 4 \\times \\tfrac{1}{2} \\times 1 = \\tfrac{9}{4} - 2 = \\tfrac{1}{4}',
          explanation: '\\( \\left(\\tfrac{3}{2}\\right)^2 = \\tfrac{9}{4} \\) and \\( 4ac = 2 \\); writing \\( 2 = \\tfrac{8}{4} \\) gives \\( \\tfrac{9}{4} - \\tfrac{8}{4} = \\tfrac{1}{4} \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: ' \\tfrac{1}{4} > 0',
          explanation: '\\( \\Delta > 0 \\) so two distinct real roots.'
        }
      ],
 finalAnswer: 'Discriminant \\( \\tfrac{1}{4} \\); two distinct real roots.'
    }
  },
  {
    id: 'qc5-018',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 18',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Read \\( a, b, c \\) from the standard form.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 64 - 80 = -16',
          explanation: '\\( b^2 = 64 \\) is smaller than \\( 4ac = 80 \\), so \\( \\Delta \\) is negative.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: '-16 < 0',
          explanation: '\\( \\Delta < 0 \\) so no real roots.'
        }
      ],
 finalAnswer: 'Discriminant -16; no real roots.'
    }
  },
  {
    id: 'qc5-019',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 19',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Read \\( a, b, c \\) from the standard form, keeping the minus on \\( b \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 144 - 144 = 0',
          explanation: '\\( (-12)^2 = 144 = 4ac \\), so the discriminant vanishes — this is the perfect-square \\( (x - 6)^2 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
          workingLatex: '0',
          explanation: '\\( \\Delta = 0 \\) means one repeated real root.'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
  {
    id: 'qc5-020',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 20',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Keep the signs: \\( b = -1 \\) (coefficient of \\( x \\)) and \\( c = -12 \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 1 - 4 \\times 1 \\times (-12) = 1 + 48 = 49',
          explanation: 'Subtracting \\( 4ac = -48 \\) is the same as adding \\( 48 \\), so \\( \\Delta = 49 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: ' 49 > 0',
          explanation: '\\( \\Delta > 0 \\) gives two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 49; two distinct real roots.'
    }
  },
  {
    id: 'qc5-021',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 21',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: '\\( \\Delta = 0 \\) is the condition for a repeated root; substitute the known \\( a \\) and \\( c \\) and leave \\( b \\) as the unknown.'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
 workingLatex: ' b^2 = 144',
          explanation: '\\( 4ac = 4 \\times 4 \\times 9 = 144 \\); move it to the other side.'
        },
        {
          stepNumber: 3,
          description: 'Take the positive root.',
 workingLatex: ' b = 12',
          explanation: 'Square-rooting gives \\( b = \\pm 12 \\), but the question specifies \\( b > 0 \\) so we take \\( +12 \\).'
        }
      ],
 finalAnswer: ' b = 12 '
    }
  },
  {
    id: 'qc5-022',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 22',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Setting \\( b^2 - 4ac \\) equal to the given discriminant \\( 9 \\); with \\( a = 1, c = 4 \\) we get \\( 4ac = 16 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' b^2 = 25',
          explanation: 'Add \\( 16 \\) to both sides to isolate \\( b^2 \\).'
        },
        {
          stepNumber: 3,
          description: 'Take both roots.',
 workingLatex: ' b = \\pm 5',
          explanation: 'No sign restriction on \\( b \\) is given, so both square roots are valid.'
        }
      ],
 finalAnswer: ' b = 5 or b = -5 '
    }
  },
  {
    id: 'qc5-023',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 23',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Set \\( \\Delta = 0 \\) for a repeated root; \\( 4ac = 4 \\times 2 \\times 8 = 64 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' b^2 = 64',
          explanation: 'Add \\( 64 \\) to both sides.'
        },
        {
          stepNumber: 3,
          description: 'Roots.',
 workingLatex: ' b = \\pm 8',
          explanation: 'No sign restriction, so both square roots are valid values of \\( b \\).'
        }
      ],
 finalAnswer: ' b = 8 or b = -8 '
    }
  },
  {
    id: 'qc5-024',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 24',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'For a repeated root \\( \\Delta = 0 \\); with \\( a = 3, b = 12 \\) the discriminant is \\( 144 - 4 \\times 3 \\times c = 144 - 12c \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' c = 12',
          explanation: '\\( 144 = 12c \\), so dividing by \\( 12 \\) gives \\( c = 12 \\).'
        }
      ],
 finalAnswer: ' c = 12 '
    }
  },
  {
    id: 'qc5-025',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 25',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'A repeated root requires \\( \\Delta = 0 \\); with \\( b = 6, c = 9 \\) we get \\( b^2 - 4ac = 36 - 36a \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' a = 1',
          explanation: '\\( 36 = 36a \\), so \\( a = 1 \\).'
        }
      ],
 finalAnswer: ' a = 1 '
    }
  },
  {
    id: 'qc5-026',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 26',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Repeated root means \\( \\Delta = 0 \\); with \\( a = 1, b = 6 \\) the discriminant is \\( 36 - 4c \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' c = 9',
          explanation: '\\( 36 = 4c \\), so \\( c = 9 \\) — which makes the quadratic \\( (x + 3)^2 \\).'
        }
      ],
 finalAnswer: ' c = 9 '
    }
  },
  {
    id: 'qc5-027',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 27',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Two distinct real roots requires \\( \\Delta > 0 \\); with \\( a = 1, b = 6, c = k \\) this becomes the inequality in \\( k \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' k < 9',
          explanation: '\\( 36 > 4k \\) so dividing by \\( 4 \\) (positive, inequality unchanged) gives \\( k < 9 \\).'
        }
      ],
 finalAnswer: ' k < 9 '
    }
  },
  {
    id: 'qc5-028',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 28',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'No real roots requires \\( \\Delta < 0 \\); with \\( b = -10, c = k \\) this gives \\( 100 - 4k < 0 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' k > 25',
          explanation: 'Rearrange to \\( 4k > 100 \\); dividing by \\( 4 \\) (positive) keeps the inequality direction.'
        }
      ],
 finalAnswer: ' k > 25 '
    }
  },
  {
    id: 'qc5-029',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 29',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Two distinct real roots requires \\( \\Delta > 0 \\); here \\( b = k \\), \\( a = 1 \\), \\( c = 4 \\) so \\( \\Delta = k^2 - 16 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' k > 4 or k < -4',
          explanation: '\\( k^2 > 16 \\) means \\( |k| > 4 \\), giving the two branches \\( k > 4 \\) or \\( k < -4 \\).'
        }
      ],
 finalAnswer: ' k > 4 or k < -4 '
    }
  },
  {
    id: 'qc5-030',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 30',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'No real roots requires \\( \\Delta < 0 \\); with \\( b = k \\), \\( a = 1 \\), \\( c = 9 \\) the discriminant is \\( k^2 - 36 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' -6 < k < 6',
          explanation: '\\( k^2 < 36 \\) means \\( |k| < 6 \\), so \\( k \\) lies strictly between \\( -6 \\) and \\( 6 \\).'
        }
      ],
 finalAnswer: ' -6 < k < 6 '
    }
  },
  {
    id: 'qc5-031',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 31',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Repeated root requires \\( \\Delta = 0 \\); here \\( b = k + 1 \\), \\( a = 1 \\), \\( c = 4 \\), so \\( \\Delta = (k+1)^2 - 16 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' (k+1)^2 = 16 \\Rightarrow k + 1 = \\pm 4',
          explanation: 'Square-root both sides, remembering both positive and negative roots.'
        },
        {
          stepNumber: 3,
          description: 'Find both values.',
 workingLatex: ' k = 3 or k = -5',
          explanation: 'Subtract \\( 1 \\) from each branch: \\( 4 - 1 = 3 \\) and \\( -4 - 1 = -5 \\).'
        }
      ],
 finalAnswer: ' k = 3 or k = -5 '
    }
  },
  {
    id: 'qc5-032',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 32',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Two distinct real roots requires \\( \\Delta > 0 \\); with \\( a = 1, b = -8, c = 12 + p \\), the discriminant is \\( 64 - 4(12 + p) \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
 workingLatex: ' 64 - 48 - 4p > 0',
          explanation: 'Distribute the \\( -4 \\) through the bracket: \\( -4(12 + p) = -48 - 4p \\).'
        },
        {
          stepNumber: 3,
          description: 'Solve.',
 workingLatex: ' 16 > 4p \\Rightarrow p < 4',
          explanation: 'Collect to \\( 16 > 4p \\) and divide by \\( 4 \\) (positive, so direction unchanged).'
        }
      ],
 finalAnswer: ' p < 4 '
    }
  },
  {
    id: 'qc5-033',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 33',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Two distinct real roots requires \\( \\Delta > 0 \\); here \\( b^2 = 16 \\) and \\( 4ac = 4 \\times 4 \\times q = 16q \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' q < 1',
          explanation: '\\( 16 > 16q \\), so dividing by \\( 16 \\) (positive) gives \\( q < 1 \\).'
        }
      ],
 finalAnswer: ' q < 1 '
    }
  },
  {
    id: 'qc5-034',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 34',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'No real roots requires \\( \\Delta < 0 \\); with \\( b = k \\), \\( a = 1 \\), \\( c = 16 \\) we get \\( k^2 - 64 < 0 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' -8 < k < 8',
          explanation: '\\( k^2 < 64 \\) means \\( |k| < 8 \\), so \\( k \\) lies strictly between \\( -8 \\) and \\( 8 \\).'
        }
      ],
 finalAnswer: ' -8 < k < 8 '
    }
  },
  {
    id: 'qc5-035',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 35',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'No real roots requires \\( \\Delta < 0 \\); \\( b^2 = k^2 \\) and \\( 4ac = 4 \\times 2 \\times 8 = 64 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' -8 < k < 8',
          explanation: '\\( k^2 < 64 \\) is equivalent to \\( |k| < 8 \\).'
        }
      ],
 finalAnswer: ' -8 < k < 8 '
    }
  },
  {
    id: 'qc5-036',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 36',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Repeated root requires \\( \\Delta = 0 \\); here \\( a = k, b = -4, c = 1 \\), so \\( b^2 = 16 \\) and \\( 4ac = 4k \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' k = 4',
          explanation: '\\( 16 = 4k \\) gives \\( k = 4 \\).'
        }
      ],
 finalAnswer: ' k = 4 '
    }
  },
  {
    id: 'qc5-037',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 37',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Two distinct real roots requires \\( \\Delta > 0 \\); here \\( a = k, b = 6, c = 3 \\), so \\( b^2 = 36 \\) and \\( 4ac = 12k \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' k < 3',
          explanation: '\\( 36 > 12k \\), so dividing by \\( 12 \\) (positive) gives \\( k < 3 \\); remember the stem also requires \\( k \\ne 0 \\).'
        }
      ],
 finalAnswer: ' k < 3, k \\ne 0 '
    }
  },
  {
    id: 'qc5-038',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 38',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Repeated root requires \\( \\Delta = 0 \\); here \\( b = k - 2 \\), \\( a = 1 \\), \\( c = 9 \\), so \\( \\Delta = (k-2)^2 - 36 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' k - 2 = \\pm 6',
          explanation: 'Take both positive and negative square roots of \\( 36 \\).'
        },
        {
          stepNumber: 3,
          description: 'Find both values.',
 workingLatex: ' k = 8 or k = -4',
          explanation: 'Add \\( 2 \\) to each branch: \\( 6 + 2 = 8 \\) and \\( -6 + 2 = -4 \\).'
        }
      ],
 finalAnswer: ' k = 8 or k = -4 '
    }
  },
  {
    id: 'qc5-039',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 39',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Two distinct real roots requires \\( \\Delta > 0 \\); here \\( b = 2k \\) so \\( b^2 = 4k^2 \\), and \\( 4ac = 4(k + 2) \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
 workingLatex: ' 4k^2 - 4k - 8 > 0',
          explanation: 'Distribute \\( -4 \\) through \\( (k + 2) \\) to get \\( -4k - 8 \\).'
        },
        {
          stepNumber: 3,
          description: 'Divide by 4 and factorise.',
 workingLatex: ' k^2 - k - 2 > 0 \\Rightarrow (k - 2)(k + 1) > 0',
          explanation: 'Dividing by \\( 4 \\) (positive) keeps the inequality direction; the quadratic in \\( k \\) factorises since \\( -2 \\times 1 = -2 \\) and \\( -2 + 1 = -1 \\).'
        },
        {
          stepNumber: 4,
          description: 'Solve the inequality.',
 workingLatex: ' k > 2 or k < -1',
          explanation: 'The quadratic in \\( k \\) has positive leading coefficient (U-shape), so it is positive outside its roots \\( k = -1 \\) and \\( k = 2 \\).'
        }
      ],
 finalAnswer: ' k > 2 or k < -1 '
    }
  },
  {
    id: 'qc5-040',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 40',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Two distinct real roots requires \\( \\Delta > 0 \\); here \\( b = k - 3 \\), \\( a = 1 \\), \\( c = 4 \\), giving \\( (k-3)^2 - 16 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' (k - 3)^2 > 16',
          explanation: 'Add \\( 16 \\) to both sides.'
        },
        {
          stepNumber: 3,
          description: 'Take square roots.',
 workingLatex: ' k - 3 > 4 or k - 3 < -4',
          explanation: '\\( |k - 3| > 4 \\) splits into two branches because the value can be more than \\( 4 \\) above or more than \\( 4 \\) below \\( 0 \\).'
        },
        {
          stepNumber: 4,
          description: 'Solve each.',
 workingLatex: ' k > 7 or k < -1',
          explanation: 'Add \\( 3 \\) to each branch.'
        }
      ],
 finalAnswer: ' k > 7 or k < -1 '
    }
  },
  {
    id: 'qc5-041',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 41',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'No real roots requires \\( \\Delta < 0 \\); here \\( b = 4, a = 1, c = k - 1 \\), so \\( b^2 = 16 \\) and \\( 4ac = 4(k - 1) \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
 workingLatex: ' 16 - 4k + 4 < 0',
          explanation: 'Distribute \\( -4 \\) through \\( (k - 1) \\): \\( -4k + 4 \\).'
        },
        {
          stepNumber: 3,
          description: 'Solve.',
 workingLatex: ' 20 < 4k \\Rightarrow k > 5',
          explanation: 'Collect to \\( 20 - 4k < 0 \\), rearrange to \\( 20 < 4k \\), then divide by \\( 4 \\) (positive) to get \\( k > 5 \\).'
        }
      ],
 finalAnswer: ' k > 5 '
    }
  },
  {
    id: 'qc5-042',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 42',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Two distinct real roots requires \\( \\Delta > 0 \\); here \\( b = 8, a = 2, c = k + 3 \\), so \\( b^2 = 64 \\) and \\( 4ac = 8(k + 3) \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
 workingLatex: ' 64 - 8k - 24 > 0',
          explanation: 'Distribute \\( -8 \\) through \\( (k + 3) \\): \\( -8k - 24 \\).'
        },
        {
          stepNumber: 3,
          description: 'Solve.',
 workingLatex: ' 40 > 8k \\Rightarrow k < 5',
          explanation: 'Collect to \\( 40 - 8k > 0 \\), rearrange to \\( 40 > 8k \\), then divide by \\( 8 \\) (positive) to get \\( k < 5 \\).'
        }
      ],
 finalAnswer: ' k < 5 '
    }
  },
  {
    id: 'qc5-043',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 43',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'The graph crosses the \\( x \\)-axis exactly where \\( y = 0 \\); not crossing it means the equation \\( x^2 + 2x + c = 0 \\) has no real solutions, so \\( \\Delta < 0 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' c > 1',
          explanation: 'Rearrange to \\( 4c > 4 \\) and divide by \\( 4 \\) (positive) to get \\( c > 1 \\).'
        }
      ],
 finalAnswer: ' c > 1 '
    }
  },
  {
    id: 'qc5-044',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 44',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Crossing the \\( x \\)-axis twice means \\( x^2 - 4x + c = 0 \\) has two distinct real roots, so \\( \\Delta > 0 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' c < 4',
          explanation: '\\( 16 > 4c \\) so dividing by \\( 4 \\) (positive) gives \\( c < 4 \\).'
        }
      ],
 finalAnswer: ' c < 4 '
    }
  },
  {
    id: 'qc5-045',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 45',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Just touching the \\( x \\)-axis means a single repeated root, so \\( \\Delta = 0 \\); here \\( b^2 = 100 \\) and \\( 4ac = 4c \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' c = 25',
          explanation: '\\( 100 = 4c \\), so \\( c = 25 \\) — making the quadratic \\( (x + 5)^2 \\).'
        }
      ],
 finalAnswer: ' c = 25 '
    }
  },
  {
    id: 'qc5-046',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 46',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Two distinct real roots requires \\( \\Delta > 0 \\); here \\( b = k - 4 \\), \\( a = 1 \\), \\( c = k \\), giving \\( (k-4)^2 - 4k \\).'
        },
        {
          stepNumber: 2,
          description: 'Expand.',
 workingLatex: ' k^2 - 8k + 16 - 4k > 0',
          explanation: 'Use \\( (k - 4)^2 = k^2 - 8k + 16 \\), then subtract \\( 4k \\).'
        },
        {
          stepNumber: 3,
          description: 'Simplify.',
 workingLatex: ' k^2 - 12k + 16 > 0',
          explanation: 'Combine the two \\( k \\)-terms: \\( -8k - 4k = -12k \\).'
        },
        {
          stepNumber: 4,
          description: 'Solve \\( k^2 - 12k + 16 = 0 \\) using the quadratic formula to find critical values.',
 workingLatex: ' k = 6 \\pm 2\\sqrt{5}',
          explanation: '\\( k = \\tfrac{12 \\pm \\sqrt{144 - 64}}{2} = \\tfrac{12 \\pm \\sqrt{80}}{2} = 6 \\pm 2\\sqrt{5} \\); the quadratic in \\( k \\) is U-shaped so it is positive outside these critical values.'
        }
      ],
 finalAnswer: ' k < 6 - 2\\sqrt{5} or k > 6 + 2\\sqrt{5} '
    }
  },
  {
    id: 'qc5-047',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 47',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Repeated root requires \\( \\Delta = 0 \\); here \\( b = -6, a = 1, c = k + 2 \\), so \\( b^2 = 36 \\) and \\( 4ac = 4(k + 2) \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
 workingLatex: ' 36 - 4k - 8 = 0',
          explanation: 'Distribute \\( -4 \\) through \\( (k + 2) \\): \\( -4k - 8 \\).'
        },
        {
          stepNumber: 3,
          description: 'Solve.',
 workingLatex: ' k = 7',
          explanation: 'Collect to \\( 28 - 4k = 0 \\), then \\( 4k = 28 \\), so \\( k = 7 \\).'
        }
      ],
 finalAnswer: ' k = 7 '
    }
  },
  {
    id: 'qc5-048',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 48',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'No real roots requires \\( \\Delta < 0 \\); here \\( b = 12, a = 3, c = k \\), so \\( b^2 = 144 \\) and \\( 4ac = 12k \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' k > 12',
          explanation: 'Rearrange to \\( 12k > 144 \\); dividing by \\( 12 \\) (positive) keeps the direction.'
        }
      ],
 finalAnswer: ' k > 12 '
    }
  },
  {
    id: 'qc5-049',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 49',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Two distinct real roots requires \\( \\Delta > 0 \\); here \\( b = -10, a = 5, c = k \\), so \\( b^2 = 100 \\) and \\( 4ac = 20k \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
 workingLatex: ' k < 5',
          explanation: '\\( 100 > 20k \\), so dividing by \\( 20 \\) (positive) gives \\( k < 5 \\).'
        }
      ],
 finalAnswer: ' k < 5 '
    }
  },
  {
    id: 'qc5-050',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 50',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'No real roots requires \\( \\Delta < 0 \\); here \\( b = 2p \\) so \\( b^2 = 4p^2 \\), and \\( 4ac = 4(p + 6) \\).'
        },
        {
          stepNumber: 2,
          description: 'Simplify.',
 workingLatex: ' p^2 - p - 6 < 0',
          explanation: 'Expand to \\( 4p^2 - 4p - 24 < 0 \\), then divide by \\( 4 \\) (positive) to keep the direction.'
        },
        {
          stepNumber: 3,
          description: 'Factorise.',
 workingLatex: ' (p - 3)(p + 2) < 0',
          explanation: '\\( -3 \\times 2 = -6 \\) and \\( -3 + 2 = -1 \\), matching the coefficients.'
        },
        {
          stepNumber: 4,
          description: 'Solve the inequality.',
 workingLatex: ' -2 < p < 3',
          explanation: 'The quadratic in \\( p \\) has positive leading coefficient (U-shape), so it is negative strictly between its roots \\( p = -2 \\) and \\( p = 3 \\).'
        }
      ],
 finalAnswer: ' -2 < p < 3 '
    }
  },
  {
    id: 'qc5-051',
    topicRef: 'qc5',
    topicTitle: 'Quadratic Graph Interpretation 51',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Each \\( x \\)-intercept is a value of \\( x \\) where \\( y = 0 \\), i.e. a real root of the quadratic.'
        },
        {
          stepNumber: 2,
          description: 'The discriminant must be positive.',
 workingLatex: ' b^2 - 4ac > 0',
          explanation: '\\( \\Delta > 0 \\) is the condition that produces two distinct real roots in the quadratic formula.'
        }
      ],
      finalAnswer: 'Two real roots; positive discriminant.'
    }
  },
  {
    id: 'qc5-052',
    topicRef: 'qc5',
    topicTitle: 'Quadratic Graph Interpretation 52',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'The vertex sits exactly on the \\( x \\)-axis, so the curve meets \\( y = 0 \\) at a single point counted twice.'
        },
        {
          stepNumber: 2,
          description: 'Discriminant is zero.',
 workingLatex: ' b^2 - 4ac = 0',
          explanation: '\\( \\Delta = 0 \\) is the condition for exactly one (repeated) real root.'
        }
      ],
      finalAnswer: 'One repeated real root; discriminant = 0.'
    }
  },
  {
    id: 'qc5-053',
    topicRef: 'qc5',
    topicTitle: 'Quadratic Graph Interpretation 53',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'For an n-shape that never reaches \\( y = 0 \\), the equation has no real solutions.'
        },
        {
          stepNumber: 2,
          description: 'Discriminant must be negative.',
 workingLatex: ' b^2 - 4ac < 0',
          explanation: '\\( \\Delta < 0 \\) means \\( \\sqrt{\\Delta} \\) is not real, so the quadratic formula gives no real roots.'
        }
      ],
      finalAnswer: 'No real roots; negative discriminant.'
    }
  },
  {
    id: 'qc5-054',
    topicRef: 'qc5',
    topicTitle: 'Quadratic Graph Interpretation 54',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'An n-shape comes up from \\( -\\infty \\), reaches a maximum above the axis, and goes back down to \\( -\\infty \\), so it must cross \\( y = 0 \\) twice — giving \\( \\Delta > 0 \\).'
        }
      ],
      finalAnswer: 'Two distinct real roots.'
    }
  },
  {
    id: 'qc5-055',
    topicRef: 'qc5',
    topicTitle: 'Quadratic Graph Interpretation 55',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'If the lowest point of the curve is still above \\( y = 0 \\), the curve never touches the \\( x \\)-axis, so the equation has no real solutions and \\( \\Delta < 0 \\).'
        }
      ],
      finalAnswer: 'No real roots.'
    }
  },
  {
    id: 'qc5-056',
    topicRef: 'qc5',
    topicTitle: 'Quadratic Graph Interpretation 56',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'The vertex sits on the \\( x \\)-axis at \\( x = 4 \\), giving exactly one (repeated) real root and \\( \\Delta = 0 \\).'
        },
        {
          stepNumber: 2,
          description: 'Write an n-shape with repeated root at 4.',
 workingLatex: ' f(x) = -(x - 4)^2',
          explanation: 'A repeated root at \\( 4 \\) gives the factor \\( (x - 4)^2 \\); the leading minus makes the graph n-shaped.'
        }
      ],
 finalAnswer: 'One repeated root at x = 4 ; f(x) = -(x-4)^2 .'
    }
  },
  {
    id: 'qc5-057',
    topicRef: 'qc5',
    topicTitle: 'Quadratic Graph Interpretation 57',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Crossing the \\( x \\)-axis at two distinct points means the equation has two different real roots, i.e. \\( \\Delta > 0 \\).'
        },
        {
          stepNumber: 2,
          description: 'Possible equation.',
 workingLatex: ' f(x) = (x - 1)(x - 5) = x^2 - 6x + 5',
          explanation: 'A quadratic with roots \\( 1 \\) and \\( 5 \\) has factors \\( (x - 1) \\) and \\( (x - 5) \\); positive leading coefficient gives the U-shape.'
        }
      ],
 finalAnswer: 'Positive discriminant; f(x) = x^2 - 6x + 5 .'
    }
  },
  {
    id: 'qc5-058',
    topicRef: 'qc5',
    topicTitle: 'Quadratic Graph Interpretation 58',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Two distinct \\( x \\)-intercepts means \\( \\Delta > 0 \\) regardless of whether the graph is U-shaped or n-shaped.'
        },
        {
          stepNumber: 2,
          description: 'Equation (n-shape).',
 workingLatex: ' f(x) = -(x + 2)(x - 3)',
          explanation: 'Roots \\( -2 \\) and \\( 3 \\) give factors \\( (x + 2)(x - 3) \\); the leading minus makes it n-shaped.'
        }
      ],
 finalAnswer: 'Positive discriminant; f(x) = -(x+2)(x-3) .'
    }
  },
  {
    id: 'qc5-059',
    topicRef: 'qc5',
    topicTitle: 'Quadratic Graph Interpretation 59',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'A U-shape starts high, dips below the \\( x \\)-axis to \\( y = -9 \\) and rises again, so it must cross the axis twice.'
        },
        {
          stepNumber: 2,
          description: 'Positive discriminant.',
 workingLatex: ' b^2 - 4ac > 0',
          explanation: 'Two distinct real roots means \\( \\Delta > 0 \\).'
        }
      ],
      finalAnswer: 'Two real roots; positive discriminant.'
    }
  },
  {
    id: 'qc5-060',
    topicRef: 'qc5',
    topicTitle: 'Quadratic Graph Interpretation 60',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'The lowest point of the U-shape is at \\( y = 2 > 0 \\), so the curve never reaches \\( y = 0 \\).'
        },
        {
          stepNumber: 2,
          description: 'Negative discriminant.',
 workingLatex: ' b^2 - 4ac < 0',
          explanation: 'No real roots means \\( \\Delta < 0 \\).'
        }
      ],
      finalAnswer: 'No real roots; negative discriminant.'
    }
  },
  {
    id: 'qc5-061',
    topicRef: 'qc5',
    topicTitle: 'Quadratic Graph Interpretation 61',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'The maximum of the n-shape lies on \\( y = 0 \\) at \\( x = -1 \\), giving a single repeated root there.'
        },
        {
          stepNumber: 2,
          description: 'Discriminant equals 0.',
 workingLatex: ' b^2 - 4ac = 0',
          explanation: 'A single repeated root corresponds to \\( \\Delta = 0 \\).'
        }
      ],
      finalAnswer: 'One repeated root; discriminant = 0.'
    }
  },
  {
    id: 'qc5-062',
    topicRef: 'qc5',
    topicTitle: 'Quadratic Graph Interpretation 62',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'An n-shape with maximum at \\( y = -5 < 0 \\) sits entirely below the \\( x \\)-axis, so it has no real roots and \\( \\Delta < 0 \\).'
        }
      ],
      finalAnswer: 'No real roots.'
    }
  },
  {
    id: 'qc5-063',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 63',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Read \\( a, b, c \\) from the standard form, keeping the minus on \\( b \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 9 - 8 = 1',
          explanation: '\\( (-3)^2 = 9 \\) and \\( 4ac = 4 \\times 2 \\times 1 = 8 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: ' 1 > 0',
          explanation: '\\( \\Delta > 0 \\) gives two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 1; two distinct real roots.'
    }
  },
  {
    id: 'qc5-064',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 64',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Read \\( a, b, c \\) from the standard form.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 36 - 36 = 0',
          explanation: '\\( 6^2 = 36 \\) and \\( 4ac = 4 \\times 9 \\times 1 = 36 \\), so the two parts cancel — the quadratic is the perfect square \\( (3x + 1)^2 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
          workingLatex: '0',
          explanation: '\\( \\Delta = 0 \\) means one repeated real root.'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
  {
    id: 'qc5-065',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 65',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Keep the minus on \\( c \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 1 - 4 \\times 6 \\times (-2) = 1 + 48 = 49',
          explanation: 'Subtracting \\( 4ac = -48 \\) is the same as adding \\( 48 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: ' 49 > 0',
          explanation: '\\( \\Delta > 0 \\) gives two distinct real roots.'
        }
      ],
      finalAnswer: 'Discriminant 49; two distinct real roots.'
    }
  },
  {
    id: 'qc5-066',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 66',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Read \\( a, b, c \\) from the standard form.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 16 - 16 = 0',
          explanation: '\\( 4^2 = 16 \\) and \\( 4ac = 16 \\), so the parts cancel — the quadratic is the perfect square \\( (2x + 1)^2 \\).'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
          workingLatex: '0',
          explanation: '\\( \\Delta = 0 \\) means one repeated real root.'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
  {
    id: 'qc5-067',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 67',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Read \\( a, b, c \\) from the standard form.'
        },
        {
          stepNumber: 2,
          description: 'Compute.',
 workingLatex: ' 25 - 28 = -3',
          explanation: '\\( b^2 = 25 \\) is smaller than \\( 4ac = 28 \\), so \\( \\Delta \\) is negative.'
        },
        {
          stepNumber: 3,
          description: 'Interpret.',
 workingLatex: '-3 < 0',
          explanation: '\\( \\Delta < 0 \\) so no real roots.'
        }
      ],
 finalAnswer: 'Discriminant -3; no real roots.'
    }
  },
  {
    id: 'qc5-068',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 68',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'The discriminant formula needs the quadratic in standard form, so expand using FOIL: \\( 3 \\times (-5) = -15 \\) and \\( 3 + (-5) = -2 \\).'
        },
        {
          stepNumber: 2,
          description: 'Identify.',
 workingLatex: ' a = 1, b = -2, c = -15',
          explanation: 'Read \\( a, b, c \\) from the expanded form, keeping the signs.'
        },
        {
          stepNumber: 3,
          description: 'Compute.',
 workingLatex: ' 4 + 60 = 64',
          explanation: '\\( (-2)^2 = 4 \\) and \\( -4ac = -4 \\times 1 \\times (-15) = +60 \\).'
        },
        {
          stepNumber: 4,
          description: 'Interpret.',
 workingLatex: ' 64 > 0',
          explanation: '\\( \\Delta > 0 \\) gives two distinct real roots — visible directly in the factorised form, which has two different linear factors.'
        }
      ],
      finalAnswer: 'Discriminant 64; two distinct real roots.'
    }
  },
  {
    id: 'qc5-069',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 69',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'Multiply \\( x \\) into the bracket; there is no constant term since one factor is \\( x \\).'
        },
        {
          stepNumber: 2,
          description: 'Identify.',
 workingLatex: ' a = 1, b = 6, c = 0',
          explanation: 'Read \\( a, b, c \\) from the expanded form; the missing constant means \\( c = 0 \\).'
        },
        {
          stepNumber: 3,
          description: 'Compute.',
 workingLatex: ' 36 - 0 = 36',
          explanation: '\\( 4ac = 0 \\) because \\( c = 0 \\), so \\( \\Delta = b^2 \\).'
        },
        {
          stepNumber: 4,
          description: 'Interpret.',
 workingLatex: ' 36 > 0',
          explanation: '\\( \\Delta > 0 \\) gives two distinct real roots — visible directly as \\( x = 0 \\) and \\( x = -6 \\) from the factorised form.'
        }
      ],
      finalAnswer: 'Discriminant 36; two distinct real roots.'
    }
  },
  {
    id: 'qc5-070',
    topicRef: 'qc5',
    topicTitle: 'Using the Discriminant 70',
    difficulty: 'Foundation',
    answerType: 'expression',
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
          explanation: 'The whole expression \\( -2\\sqrt{5} \\) is the coefficient of \\( x \\), surd and sign included.'
        },
        {
          stepNumber: 2,
          description: 'Compute \\( b^2 \\).',
 workingLatex: ' (-2\\sqrt{5})^2 = 4 \\times 5 = 20',
          explanation: 'Square the \\( -2 \\) to get \\( 4 \\) and the \\( \\sqrt{5} \\) to get \\( 5 \\), then multiply.'
        },
        {
          stepNumber: 3,
          description: 'Discriminant.',
 workingLatex: ' 20 - 20 = 0',
          explanation: '\\( 4ac = 20 \\) matches \\( b^2 = 20 \\), so they cancel.'
        },
        {
          stepNumber: 4,
          description: 'Interpret.',
          workingLatex: '0',
          explanation: '\\( \\Delta = 0 \\) means one repeated real root — the quadratic is the perfect square \\( (x - \\sqrt{5})^2 \\).'
        }
      ],
      finalAnswer: 'Discriminant 0; one repeated real root.'
    }
  },
];
