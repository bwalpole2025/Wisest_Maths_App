import { Question } from "@/lib/types";

/**
 * Topic: Set Notation for Inequalities
 * Ref:   a9
 *
 * Add your questions to the array below.
 * ID convention: "a9-001", "a9-002", etc.
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
        id: 'qc2-001',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 01',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 + 5x + 6 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients \\( a \\), \\( b \\) and \\( c \\).',
                    workingLatex: 'a = 1, \\; b = 5, \\; c = 6',
                    explanation: 'Compare the equation to the standard form \\( ax^2 + bx + c = 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute the values into the quadratic formula \\( x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\).',
                    workingLatex: 'x = \\frac{-5 \\pm \\sqrt{25 - 24}}{2}',
                    explanation: 'Calculate \\( b^2 = 25 \\) and \\( 4ac = 24 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the discriminant and evaluate the square root.',
                    workingLatex: 'x = \\frac{-5 \\pm 1}{2}',
                    explanation: '\\( 25 - 24 = 1 \\) and \\( \\sqrt{1} = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Split the \\( \\pm \\) into two separate solutions.',
                    workingLatex: 'x = -2 \\) or \\( x = -3',
                    explanation: '\\( \\frac{-5+1}{2} = -2 \\) and \\( \\frac{-5-1}{2} = -3 \\).'
                }
            ],
            finalAnswer: '\\(x = -2\\) or \\(x = -3\\)',
        }
    },
    {
        id: 'qc2-002',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 02',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 + 7x + 12 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = 7, \\; c = 12',
                    explanation: 'Match the equation to \\( ax^2 + bx + c = 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the quadratic formula.',
                    workingLatex: 'x = \\frac{-7 \\pm \\sqrt{49 - 48}}{2}',
                    explanation: '\\( b^2 = 49 \\) and \\( 4ac = 48 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the discriminant.',
                    workingLatex: 'x = \\frac{-7 \\pm 1}{2}',
                    explanation: '\\( \\sqrt{1} = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = -3 \\) or \\( x = -4',
                    explanation: '\\( \\frac{-7+1}{2} = -3 \\) and \\( \\frac{-7-1}{2} = -4 \\).'
                }
            ],
            finalAnswer: '\\(x = -3\\) or \\(x = -4\\)',
        }
    },
    {
        id: 'qc2-003',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 03',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 - 6x + 8 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = -6, \\; c = 8',
                    explanation: 'Be careful with the sign of \\( b \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{6 \\pm \\sqrt{36 - 32}}{2}',
                    explanation: '\\( -(-6) = 6 \\), \\( b^2 = 36 \\), \\( 4ac = 32 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the discriminant.',
                    workingLatex: 'x = \\frac{6 \\pm 2}{2}',
                    explanation: '\\( \\sqrt{4} = 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 4 \\) or \\( x = 2',
                    explanation: '\\( \\frac{6+2}{2} = 4 \\) and \\( \\frac{6-2}{2} = 2 \\).'
                }
            ],
            finalAnswer: '\\(x = 4\\) or \\(x = 2\\)',
        }
    },
    {
        id: 'qc2-004',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 04',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 - 5x + 4 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = -5, \\; c = 4',
                    explanation: 'Compare to \\( ax^2 + bx + c = 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{5 \\pm \\sqrt{25 - 16}}{2}',
                    explanation: '\\( b^2 = 25 \\) and \\( 4ac = 16 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{5 \\pm 3}{2}',
                    explanation: '\\( \\sqrt{9} = 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 4 \\) or \\( x = 1',
                    explanation: '\\( \\frac{5+3}{2} = 4 \\) and \\( \\frac{5-3}{2} = 1 \\).'
                }
            ],
            finalAnswer: '\\(x = 4\\) or \\(x = 1\\)',
        }
    },
    {
        id: 'qc2-005',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 05',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 + 3x - 10 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = 3, \\; c = -10',
                    explanation: 'Note that \\( c \\) is negative.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-3 \\pm \\sqrt{9 + 40}}{2}',
                    explanation: '\\( 4ac = 4(1)(-10) = -40 \\), and subtracting a negative becomes \\( +40 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the discriminant.',
                    workingLatex: 'x = \\frac{-3 \\pm 7}{2}',
                    explanation: '\\( \\sqrt{49} = 7 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 2 \\) or \\( x = -5',
                    explanation: '\\( \\frac{-3+7}{2} = 2 \\) and \\( \\frac{-3-7}{2} = -5 \\).'
                }
            ],
            finalAnswer: '\\(x = 2\\) or \\(x = -5\\)',
        }
    },
    {
        id: 'qc2-006',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 06',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 - 2x - 15 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = -2, \\; c = -15',
                    explanation: 'Both \\( b \\) and \\( c \\) are negative.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{2 \\pm \\sqrt{4 + 60}}{2}',
                    explanation: '\\( b^2 = 4 \\) and \\( -4ac = 60 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{2 \\pm 8}{2}',
                    explanation: '\\( \\sqrt{64} = 8 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 5 \\) or \\( x = -3',
                    explanation: '\\( \\frac{2+8}{2} = 5 \\) and \\( \\frac{2-8}{2} = -3 \\).'
                }
            ],
            finalAnswer: '\\(x = 5\\) or \\(x = -3\\)',
        }
    },
    {
        id: 'qc2-007',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 07',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 + 4x - 21 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = 4, \\; c = -21',
                    explanation: 'Match to the standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-4 \\pm \\sqrt{16 + 84}}{2}',
                    explanation: '\\( b^2 = 16 \\), \\( -4ac = 84 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-4 \\pm 10}{2}',
                    explanation: '\\( \\sqrt{100} = 10 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 3 \\) or \\( x = -7',
                    explanation: '\\( \\frac{-4+10}{2} = 3 \\) and \\( \\frac{-4-10}{2} = -7 \\).'
                }
            ],
            finalAnswer: '\\(x = 3\\) or \\(x = -7\\)',
        }
    },
    {
        id: 'qc2-008',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 08',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 - 9x + 20 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = -9, \\; c = 20',
                    explanation: 'Compare with \\( ax^2 + bx + c = 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{9 \\pm \\sqrt{81 - 80}}{2}',
                    explanation: '\\( b^2 = 81 \\), \\( 4ac = 80 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{9 \\pm 1}{2}',
                    explanation: '\\( \\sqrt{1} = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 5 \\) or \\( x = 4',
                    explanation: '\\( \\frac{9+1}{2} = 5 \\) and \\( \\frac{9-1}{2} = 4 \\).'
                }
            ],
            finalAnswer: '\\(x = 5\\) or \\(x = 4\\)',
        }
    },
    {
        id: 'qc2-009',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 09',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 + 8x + 15 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = 8, \\; c = 15',
                    explanation: 'All positive.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-8 \\pm \\sqrt{64 - 60}}{2}',
                    explanation: '\\( b^2 = 64 \\), \\( 4ac = 60 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-8 \\pm 2}{2}',
                    explanation: '\\( \\sqrt{4} = 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = -3 \\) or \\( x = -5',
                    explanation: '\\( \\frac{-8+2}{2} = -3 \\) and \\( \\frac{-8-2}{2} = -5 \\).'
                }
            ],
            finalAnswer: '\\(x = -3\\) or \\(x = -5\\)',
        }
    },
    {
        id: 'qc2-010',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 10',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 - 7x + 10 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = -7, \\; c = 10',
                    explanation: 'Be careful with the sign of \\( b \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{7 \\pm \\sqrt{49 - 40}}{2}',
                    explanation: '\\( b^2 = 49 \\), \\( 4ac = 40 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{7 \\pm 3}{2}',
                    explanation: '\\( \\sqrt{9} = 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 5 \\) or \\( x = 2',
                    explanation: '\\( \\frac{7+3}{2} = 5 \\) and \\( \\frac{7-3}{2} = 2 \\).'
                }
            ],
            finalAnswer: '\\(x = 5\\) or \\(x = 2\\)',
        }
    },
    {
        id: 'qc2-011',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 11',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 2x^2 + 7x + 3 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 2, \\; b = 7, \\; c = 3',
                    explanation: 'Here \\( a \\neq 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-7 \\pm \\sqrt{49 - 24}}{4}',
                    explanation: '\\( b^2 = 49 \\), \\( 4ac = 24 \\), and \\( 2a = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-7 \\pm 5}{4}',
                    explanation: '\\( \\sqrt{25} = 5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = -\\tfrac{1}{2} \\) or \\( x = -3',
                    explanation: '\\( \\frac{-7+5}{4} = -\\tfrac{1}{2} \\) and \\( \\frac{-7-5}{4} = -3 \\).'
                }
            ],
            finalAnswer: '\\(x = -\\tfrac{1}{2}\\) or \\(x = -3\\)',
        }
    },
    {
        id: 'qc2-012',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 12',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 2x^2 - 5x + 2 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 2, \\; b = -5, \\; c = 2',
                    explanation: 'Compare to \\( ax^2 + bx + c = 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{5 \\pm \\sqrt{25 - 16}}{4}',
                    explanation: '\\( b^2 = 25 \\), \\( 4ac = 16 \\), \\( 2a = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{5 \\pm 3}{4}',
                    explanation: '\\( \\sqrt{9} = 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 2 \\) or \\( x = \\tfrac{1}{2}',
                    explanation: '\\( \\frac{5+3}{4} = 2 \\) and \\( \\frac{5-3}{4} = \\tfrac{1}{2} \\).'
                }
            ],
            finalAnswer: '\\(x = 2\\) or \\(x = \\tfrac{1}{2\\)',
        }
    },
    {
        id: 'qc2-013',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 13',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 3x^2 + 10x + 3 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 3, \\; b = 10, \\; c = 3',
                    explanation: 'Match to the standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-10 \\pm \\sqrt{100 - 36}}{6}',
                    explanation: '\\( b^2 = 100 \\), \\( 4ac = 36 \\), \\( 2a = 6 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-10 \\pm 8}{6}',
                    explanation: '\\( \\sqrt{64} = 8 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = -\\tfrac{1}{3} \\) or \\( x = -3',
                    explanation: '\\( \\frac{-10+8}{6} = -\\tfrac{1}{3} \\) and \\( \\frac{-10-8}{6} = -3 \\).'
                }
            ],
            finalAnswer: '\\(x = -\\tfrac{1}{3}\\) or \\(x = -3\\)',
        }
    },
    {
        id: 'qc2-014',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 14',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 3x^2 - 7x + 2 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 3, \\; b = -7, \\; c = 2',
                    explanation: 'Match to the standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{7 \\pm \\sqrt{49 - 24}}{6}',
                    explanation: '\\( b^2 = 49 \\), \\( 4ac = 24 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{7 \\pm 5}{6}',
                    explanation: '\\( \\sqrt{25} = 5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 2 \\) or \\( x = \\tfrac{1}{3}',
                    explanation: '\\( \\frac{7+5}{6} = 2 \\) and \\( \\frac{7-5}{6} = \\tfrac{1}{3} \\).'
                }
            ],
            finalAnswer: '\\(x = 2\\) or \\(x = \\tfrac{1}{3\\)',
        }
    },
    {
        id: 'qc2-015',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 15',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 2x^2 + 5x - 3 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 2, \\; b = 5, \\; c = -3',
                    explanation: '\\( c \\) is negative.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-5 \\pm \\sqrt{25 + 24}}{4}',
                    explanation: '\\( -4ac = -4(2)(-3) = 24 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-5 \\pm 7}{4}',
                    explanation: '\\( \\sqrt{49} = 7 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = \\tfrac{1}{2} \\) or \\( x = -3',
                    explanation: '\\( \\frac{-5+7}{4} = \\tfrac{1}{2} \\) and \\( \\frac{-5-7}{4} = -3 \\).'
                }
            ],
            finalAnswer: '\\(x = \\tfrac{1}{2}\\) or \\(x = -3\\)',
        }
    },
    {
        id: 'qc2-016',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 16',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 2x^2 - 7x - 4 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 2, \\; b = -7, \\; c = -4',
                    explanation: 'Both \\( b \\) and \\( c \\) are negative.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{7 \\pm \\sqrt{49 + 32}}{4}',
                    explanation: '\\( b^2 = 49 \\), \\( -4ac = 32 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{7 \\pm 9}{4}',
                    explanation: '\\( \\sqrt{81} = 9 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 4 \\) or \\( x = -\\tfrac{1}{2}',
                    explanation: '\\( \\frac{7+9}{4} = 4 \\) and \\( \\frac{7-9}{4} = -\\tfrac{1}{2} \\).'
                }
            ],
            finalAnswer: '\\(x = 4\\) or \\(x = -\\tfrac{1}{2\\)',
        }
    },
    {
        id: 'qc2-017',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 17',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 3x^2 + 5x - 2 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 3, \\; b = 5, \\; c = -2',
                    explanation: 'Match to the standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-5 \\pm \\sqrt{25 + 24}}{6}',
                    explanation: '\\( b^2 = 25 \\), \\( -4ac = 24 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-5 \\pm 7}{6}',
                    explanation: '\\( \\sqrt{49} = 7 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = \\tfrac{1}{3} \\) or \\( x = -2',
                    explanation: '\\( \\frac{-5+7}{6} = \\tfrac{1}{3} \\) and \\( \\frac{-5-7}{6} = -2 \\).'
                }
            ],
            finalAnswer: '\\(x = \\tfrac{1}{3}\\) or \\(x = -2\\)',
        }
    },
    {
        id: 'qc2-018',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 18',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 5x^2 - 11x + 2 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 5, \\; b = -11, \\; c = 2',
                    explanation: 'Match to the standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{11 \\pm \\sqrt{121 - 40}}{10}',
                    explanation: '\\( b^2 = 121 \\), \\( 4ac = 40 \\), \\( 2a = 10 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{11 \\pm 9}{10}',
                    explanation: '\\( \\sqrt{81} = 9 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 2 \\) or \\( x = \\tfrac{1}{5}',
                    explanation: '\\( \\frac{11+9}{10} = 2 \\) and \\( \\frac{11-9}{10} = \\tfrac{1}{5} \\).'
                }
            ],
            finalAnswer: '\\(x = 2\\) or \\(x = \\tfrac{1}{5\\)',
        }
    },
    {
        id: 'qc2-019',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 19',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 4x^2 + 4x - 3 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 4, \\; b = 4, \\; c = -3',
                    explanation: 'Compare to \\( ax^2 + bx + c = 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-4 \\pm \\sqrt{16 + 48}}{8}',
                    explanation: '\\( b^2 = 16 \\), \\( -4ac = 48 \\), \\( 2a = 8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-4 \\pm 8}{8}',
                    explanation: '\\( \\sqrt{64} = 8 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = \\tfrac{1}{2} \\) or \\( x = -\\tfrac{3}{2}',
                    explanation: '\\( \\frac{-4+8}{8} = \\tfrac{1}{2} \\) and \\( \\frac{-4-8}{8} = -\\tfrac{3}{2} \\).'
                }
            ],
            finalAnswer: '\\(x = \\tfrac{1}{2}\\) or \\(x = -\\tfrac{3}{2\\)',
        }
    },
    {
        id: 'qc2-020',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 20',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 6x^2 + x - 2 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 6, \\; b = 1, \\; c = -2',
                    explanation: 'Match to the standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-1 \\pm \\sqrt{1 + 48}}{12}',
                    explanation: '\\( b^2 = 1 \\), \\( -4ac = 48 \\), \\( 2a = 12 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-1 \\pm 7}{12}',
                    explanation: '\\( \\sqrt{49} = 7 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = \\tfrac{1}{2} \\) or \\( x = -\\tfrac{2}{3}',
                    explanation: '\\( \\frac{-1+7}{12} = \\tfrac{1}{2} \\) and \\( \\frac{-1-7}{12} = -\\tfrac{2}{3} \\).'
                }
            ],
            finalAnswer: '\\(x = \\tfrac{1}{2}\\) or \\(x = -\\tfrac{2}{3\\)',
        }
    },
    {
        id: 'qc2-021',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 21',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 + 3x + 1 = 0 \\), giving your answers to 2 decimal places.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'decimal answers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = 3, \\; c = 1',
                    explanation: 'Match to \\( ax^2 + bx + c = 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-3 \\pm \\sqrt{9 - 4}}{2}',
                    explanation: '\\( b^2 = 9 \\), \\( 4ac = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the discriminant.',
                    workingLatex: 'x = \\frac{-3 \\pm \\sqrt{5}}{2}',
                    explanation: '5 is not a square number, so leave the surd.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate each root to 2 d.p.',
                    workingLatex: 'x \\approx -0.38 \\) or \\( x \\approx -2.62',
                    explanation: '\\( \\sqrt{5} \\approx 2.236 \\); \\( \\frac{-3+2.236}{2} \\approx -0.38 \\), \\( \\frac{-3-2.236}{2} \\approx -2.62 \\).'
                }
            ],
            finalAnswer: 'x \\(\\approx -0.38\\) or x \\(\\approx -2.62\\)',
        }
    },
    {
        id: 'qc2-022',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 22',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 - 5x + 2 = 0 \\), giving your answers to 2 decimal places.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'decimal answers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = -5, \\; c = 2',
                    explanation: 'Compare with standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{5 \\pm \\sqrt{25 - 8}}{2}',
                    explanation: '\\( b^2 = 25 \\), \\( 4ac = 8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the discriminant.',
                    workingLatex: 'x = \\frac{5 \\pm \\sqrt{17}}{2}',
                    explanation: '17 is prime so the surd stays.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate each root to 2 d.p.',
                    workingLatex: 'x \\approx 4.56 \\) or \\( x \\approx 0.44',
                    explanation: '\\( \\sqrt{17} \\approx 4.123 \\).'
                }
            ],
            finalAnswer: 'x \\(\\approx 4.56\\) or x \\(\\approx 0.44\\)',
        }
    },
    {
        id: 'qc2-023',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 23',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 + 4x + 2 = 0 \\), giving your answers to 2 decimal places.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'decimal answers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = 4, \\; c = 2',
                    explanation: 'All positive.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-4 \\pm \\sqrt{16 - 8}}{2}',
                    explanation: '\\( b^2 = 16 \\), \\( 4ac = 8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-4 \\pm \\sqrt{8}}{2}',
                    explanation: '\\( \\sqrt{8} \\approx 2.828 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate each root to 2 d.p.',
                    workingLatex: 'x \\approx -0.59 \\) or \\( x \\approx -3.41',
                    explanation: '\\( \\frac{-4+2.828}{2} \\approx -0.59 \\), \\( \\frac{-4-2.828}{2} \\approx -3.41 \\).'
                }
            ],
            finalAnswer: 'x \\(\\approx -0.59\\) or x \\(\\approx -3.41\\)',
        }
    },
    {
        id: 'qc2-024',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 24',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 - 3x - 1 = 0 \\), giving your answers to 2 decimal places.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'decimal answers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = -3, \\; c = -1',
                    explanation: 'Both \\( b \\) and \\( c \\) are negative.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{3 \\pm \\sqrt{9 + 4}}{2}',
                    explanation: '\\( -4ac = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{3 \\pm \\sqrt{13}}{2}',
                    explanation: '13 is prime.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate each root to 2 d.p.',
                    workingLatex: 'x \\approx 3.30 \\) or \\( x \\approx -0.30',
                    explanation: '\\( \\sqrt{13} \\approx 3.606 \\).'
                }
            ],
            finalAnswer: 'x \\(\\approx 3.30\\) or x \\(\\approx -0.30\\)',
        }
    },
    {
        id: 'qc2-025',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 25',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 + x - 5 = 0 \\), giving your answers to 2 decimal places.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'decimal answers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = 1, \\; c = -5',
                    explanation: 'Match to the standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-1 \\pm \\sqrt{1 + 20}}{2}',
                    explanation: '\\( -4ac = 20 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-1 \\pm \\sqrt{21}}{2}',
                    explanation: '21 is not a perfect square.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate each root to 2 d.p.',
                    workingLatex: 'x \\approx 1.79 \\) or \\( x \\approx -2.79',
                    explanation: '\\( \\sqrt{21} \\approx 4.583 \\).'
                }
            ],
            finalAnswer: 'x \\(\\approx 1.79\\) or x \\(\\approx -2.79\\)',
        }
    },
    {
        id: 'qc2-026',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 26',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 - 2x - 4 = 0 \\), giving your answers to 2 decimal places.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'decimal answers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = -2, \\; c = -4',
                    explanation: 'Both negative.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{2 \\pm \\sqrt{4 + 16}}{2}',
                    explanation: '\\( -4ac = 16 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{2 \\pm \\sqrt{20}}{2}',
                    explanation: '\\( \\sqrt{20} \\approx 4.472 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate each root to 2 d.p.',
                    workingLatex: 'x \\approx 3.24 \\) or \\( x \\approx -1.24',
                    explanation: '\\( \\frac{2+4.472}{2} \\approx 3.24 \\), \\( \\frac{2-4.472}{2} \\approx -1.24 \\).'
                }
            ],
            finalAnswer: 'x \\(\\approx 3.24\\) or x \\(\\approx -1.24\\)',
        }
    },
    {
        id: 'qc2-027',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 27',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 + 6x + 4 = 0 \\), giving your answers to 2 decimal places.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'decimal answers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = 6, \\; c = 4',
                    explanation: 'All positive.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-6 \\pm \\sqrt{36 - 16}}{2}',
                    explanation: '\\( 4ac = 16 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-6 \\pm \\sqrt{20}}{2}',
                    explanation: '\\( \\sqrt{20} \\approx 4.472 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate each root to 2 d.p.',
                    workingLatex: 'x \\approx -0.76 \\) or \\( x \\approx -5.24',
                    explanation: '\\( \\frac{-6+4.472}{2} \\approx -0.76 \\), \\( \\frac{-6-4.472}{2} \\approx -5.24 \\).'
                }
            ],
            finalAnswer: 'x \\(\\approx -0.76\\) or x \\(\\approx -5.24\\)',
        }
    },
    {
        id: 'qc2-028',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 28',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 + 2x - 6 = 0 \\), giving your answers to 2 decimal places.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'decimal answers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = 2, \\; c = -6',
                    explanation: '\\( c \\) is negative.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-2 \\pm \\sqrt{4 + 24}}{2}',
                    explanation: '\\( -4ac = 24 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-2 \\pm \\sqrt{28}}{2}',
                    explanation: '\\( \\sqrt{28} \\approx 5.292 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate each root to 2 d.p.',
                    workingLatex: 'x \\approx 1.65 \\) or \\( x \\approx -3.65',
                    explanation: '\\( \\frac{-2+5.292}{2} \\approx 1.65 \\), \\( \\frac{-2-5.292}{2} \\approx -3.65 \\).'
                }
            ],
            finalAnswer: 'x \\(\\approx 1.65\\) or x \\(\\approx -3.65\\)',
        }
    },
    {
        id: 'qc2-029',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 29',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 - 4x + 1 = 0 \\), giving your answers to 2 decimal places.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'decimal answers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = -4, \\; c = 1',
                    explanation: 'Match to the standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{4 \\pm \\sqrt{16 - 4}}{2}',
                    explanation: '\\( 4ac = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{4 \\pm \\sqrt{12}}{2}',
                    explanation: '\\( \\sqrt{12} \\approx 3.464 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate each root to 2 d.p.',
                    workingLatex: 'x \\approx 3.73 \\) or \\( x \\approx 0.27',
                    explanation: '\\( \\frac{4+3.464}{2} \\approx 3.73 \\), \\( \\frac{4-3.464}{2} \\approx 0.27 \\).'
                }
            ],
            finalAnswer: 'x \\(\\approx 3.73\\) or x \\(\\approx 0.27\\)',
        }
    },
    {
        id: 'qc2-030',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 30',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 - 6x + 2 = 0 \\), giving your answers to 2 decimal places.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'decimal answers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = -6, \\; c = 2',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{6 \\pm \\sqrt{36 - 8}}{2}',
                    explanation: '\\( 4ac = 8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{6 \\pm \\sqrt{28}}{2}',
                    explanation: '\\( \\sqrt{28} \\approx 5.292 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate each root to 2 d.p.',
                    workingLatex: 'x \\approx 5.65 \\) or \\( x \\approx 0.35',
                    explanation: '\\( \\frac{6+5.292}{2} \\approx 5.65 \\), \\( \\frac{6-5.292}{2} \\approx 0.35 \\).'
                }
            ],
            finalAnswer: 'x \\(\\approx 5.65\\) or x \\(\\approx 0.35\\)',
        }
    },
    {
        id: 'qc2-031',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 31',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 2x^2 + 3x - 1 = 0 \\), giving your answers to 2 decimal places.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'decimal answers', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 2, \\; b = 3, \\; c = -1',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-3 \\pm \\sqrt{9 + 8}}{4}',
                    explanation: '\\( -4ac = 8 \\), \\( 2a = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-3 \\pm \\sqrt{17}}{4}',
                    explanation: '17 is prime.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate each root to 2 d.p.',
                    workingLatex: 'x \\approx 0.28 \\) or \\( x \\approx -1.78',
                    explanation: '\\( \\sqrt{17} \\approx 4.123 \\).'
                }
            ],
            finalAnswer: 'x \\(\\approx 0.28\\) or x \\(\\approx -1.78\\)',
        }
    },
    {
        id: 'qc2-032',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 32',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 2x^2 - 5x + 1 = 0 \\), giving your answers to 2 decimal places.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'decimal answers', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 2, \\; b = -5, \\; c = 1',
                    explanation: 'Match to the standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{5 \\pm \\sqrt{25 - 8}}{4}',
                    explanation: '\\( 4ac = 8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{5 \\pm \\sqrt{17}}{4}',
                    explanation: '17 is prime.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate each root to 2 d.p.',
                    workingLatex: 'x \\approx 2.28 \\) or \\( x \\approx 0.22',
                    explanation: '\\( \\sqrt{17} \\approx 4.123 \\).'
                }
            ],
            finalAnswer: 'x \\(\\approx 2.28\\) or x \\(\\approx 0.22\\)',
        }
    },
    {
        id: 'qc2-033',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 33',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 3x^2 + 4x - 2 = 0 \\), giving your answers to 2 decimal places.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'decimal answers', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 3, \\; b = 4, \\; c = -2',
                    explanation: 'Match to the standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-4 \\pm \\sqrt{16 + 24}}{6}',
                    explanation: '\\( -4ac = 24 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-4 \\pm \\sqrt{40}}{6}',
                    explanation: '\\( \\sqrt{40} \\approx 6.325 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate each root to 2 d.p.',
                    workingLatex: 'x \\approx 0.39 \\) or \\( x \\approx -1.72',
                    explanation: '\\( \\frac{-4+6.325}{6} \\approx 0.39 \\), \\( \\frac{-4-6.325}{6} \\approx -1.72 \\).'
                }
            ],
            finalAnswer: 'x \\(\\approx 0.39\\) or x \\(\\approx -1.72\\)',
        }
    },
    {
        id: 'qc2-034',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 34',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 3x^2 - 2x - 4 = 0 \\), giving your answers to 2 decimal places.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'decimal answers', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 3, \\; b = -2, \\; c = -4',
                    explanation: 'Both negative.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{2 \\pm \\sqrt{4 + 48}}{6}',
                    explanation: '\\( -4ac = 48 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{2 \\pm \\sqrt{52}}{6}',
                    explanation: '\\( \\sqrt{52} \\approx 7.211 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate each root to 2 d.p.',
                    workingLatex: 'x \\approx 1.54 \\) or \\( x \\approx -0.87',
                    explanation: '\\( \\frac{2+7.211}{6} \\approx 1.54 \\), \\( \\frac{2-7.211}{6} \\approx -0.87 \\).'
                }
            ],
            finalAnswer: 'x \\(\\approx 1.54\\) or x \\(\\approx -0.87\\)',
        }
    },
    {
        id: 'qc2-035',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 35',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 4x^2 + 6x + 1 = 0 \\), giving your answers to 2 decimal places.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'decimal answers', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 4, \\; b = 6, \\; c = 1',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-6 \\pm \\sqrt{36 - 16}}{8}',
                    explanation: '\\( 4ac = 16 \\), \\( 2a = 8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-6 \\pm \\sqrt{20}}{8}',
                    explanation: '\\( \\sqrt{20} \\approx 4.472 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate each root to 2 d.p.',
                    workingLatex: 'x \\approx -0.19 \\) or \\( x \\approx -1.31',
                    explanation: '\\( \\frac{-6+4.472}{8} \\approx -0.19 \\), \\( \\frac{-6-4.472}{8} \\approx -1.31 \\).'
                }
            ],
            finalAnswer: 'x \\(\\approx -0.19\\) or x \\(\\approx -1.31\\)',
        }
    },
    {
        id: 'qc2-036',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 36',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 5x^2 - 6x + 1 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 5, \\; b = -6, \\; c = 1',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{6 \\pm \\sqrt{36 - 20}}{10}',
                    explanation: '\\( 4ac = 20 \\), \\( 2a = 10 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{6 \\pm 4}{10}',
                    explanation: '\\( \\sqrt{16} = 4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 1 \\) or \\( x = \\tfrac{1}{5}',
                    explanation: '\\( \\frac{6+4}{10} = 1 \\) and \\( \\frac{6-4}{10} = \\tfrac{1}{5} \\).'
                }
            ],
            finalAnswer: '\\(x = 1\\) or \\(x = \\tfrac{1}{5\\)',
        }
    },
    {
        id: 'qc2-037',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 37',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 - x - 12 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = -1, \\; c = -12',
                    explanation: 'Match to the standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{1 \\pm \\sqrt{1 + 48}}{2}',
                    explanation: '\\( b^2 = 1 \\), \\( -4ac = 48 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{1 \\pm 7}{2}',
                    explanation: '\\( \\sqrt{49} = 7 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 4 \\) or \\( x = -3',
                    explanation: '\\( \\frac{1+7}{2} = 4 \\) and \\( \\frac{1-7}{2} = -3 \\).'
                }
            ],
            finalAnswer: '\\(x = 4\\) or \\(x = -3\\)',
        }
    },
    {
        id: 'qc2-038',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 38',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 + x - 20 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = 1, \\; c = -20',
                    explanation: 'Match to the standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-1 \\pm \\sqrt{1 + 80}}{2}',
                    explanation: '\\( -4ac = 80 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-1 \\pm 9}{2}',
                    explanation: '\\( \\sqrt{81} = 9 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 4 \\) or \\( x = -5',
                    explanation: '\\( \\frac{-1+9}{2} = 4 \\) and \\( \\frac{-1-9}{2} = -5 \\).'
                }
            ],
            finalAnswer: '\\(x = 4\\) or \\(x = -5\\)',
        }
    },
    {
        id: 'qc2-039',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 39',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 - 10x + 21 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = -10, \\; c = 21',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{10 \\pm \\sqrt{100 - 84}}{2}',
                    explanation: '\\( 4ac = 84 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{10 \\pm 4}{2}',
                    explanation: '\\( \\sqrt{16} = 4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 7 \\) or \\( x = 3',
                    explanation: '\\( \\frac{10+4}{2} = 7 \\) and \\( \\frac{10-4}{2} = 3 \\).'
                }
            ],
            finalAnswer: '\\(x = 7\\) or \\(x = 3\\)',
        }
    },
    {
        id: 'qc2-040',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 40',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 + 11x + 24 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = 11, \\; c = 24',
                    explanation: 'All positive.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-11 \\pm \\sqrt{121 - 96}}{2}',
                    explanation: '\\( 4ac = 96 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-11 \\pm 5}{2}',
                    explanation: '\\( \\sqrt{25} = 5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = -3 \\) or \\( x = -8',
                    explanation: '\\( \\frac{-11+5}{2} = -3 \\) and \\( \\frac{-11-5}{2} = -8 \\).'
                }
            ],
            finalAnswer: '\\(x = -3\\) or \\(x = -8\\)',
        }
    },
    {
        id: 'qc2-041',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 41',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 - 12x + 32 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = -12, \\; c = 32',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{12 \\pm \\sqrt{144 - 128}}{2}',
                    explanation: '\\( 4ac = 128 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{12 \\pm 4}{2}',
                    explanation: '\\( \\sqrt{16} = 4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 8 \\) or \\( x = 4',
                    explanation: '\\( \\frac{12+4}{2} = 8 \\) and \\( \\frac{12-4}{2} = 4 \\).'
                }
            ],
            finalAnswer: '\\(x = 8\\) or \\(x = 4\\)',
        }
    },
    {
        id: 'qc2-042',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 42',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 + 9x + 14 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = 9, \\; c = 14',
                    explanation: 'All positive.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-9 \\pm \\sqrt{81 - 56}}{2}',
                    explanation: '\\( 4ac = 56 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-9 \\pm 5}{2}',
                    explanation: '\\( \\sqrt{25} = 5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = -2 \\) or \\( x = -7',
                    explanation: '\\( \\frac{-9+5}{2} = -2 \\) and \\( \\frac{-9-5}{2} = -7 \\).'
                }
            ],
            finalAnswer: '\\(x = -2\\) or \\(x = -7\\)',
        }
    },
    {
        id: 'qc2-043',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 43',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 - 8x - 9 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = -8, \\; c = -9',
                    explanation: 'Both negative.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{8 \\pm \\sqrt{64 + 36}}{2}',
                    explanation: '\\( -4ac = 36 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{8 \\pm 10}{2}',
                    explanation: '\\( \\sqrt{100} = 10 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 9 \\) or \\( x = -1',
                    explanation: '\\( \\frac{8+10}{2} = 9 \\) and \\( \\frac{8-10}{2} = -1 \\).'
                }
            ],
            finalAnswer: '\\(x = 9\\) or \\(x = -1\\)',
        }
    },
    {
        id: 'qc2-044',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 44',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 + 6x - 7 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = 6, \\; c = -7',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-6 \\pm \\sqrt{36 + 28}}{2}',
                    explanation: '\\( -4ac = 28 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-6 \\pm 8}{2}',
                    explanation: '\\( \\sqrt{64} = 8 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 1 \\) or \\( x = -7',
                    explanation: '\\( \\frac{-6+8}{2} = 1 \\) and \\( \\frac{-6-8}{2} = -7 \\).'
                }
            ],
            finalAnswer: '\\(x = 1\\) or \\(x = -7\\)',
        }
    },
    {
        id: 'qc2-045',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 45',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 - 4x - 12 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = -4, \\; c = -12',
                    explanation: 'Both negative.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{4 \\pm \\sqrt{16 + 48}}{2}',
                    explanation: '\\( -4ac = 48 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{4 \\pm 8}{2}',
                    explanation: '\\( \\sqrt{64} = 8 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 6 \\) or \\( x = -2',
                    explanation: '\\( \\frac{4+8}{2} = 6 \\) and \\( \\frac{4-8}{2} = -2 \\).'
                }
            ],
            finalAnswer: '\\(x = 6\\) or \\(x = -2\\)',
        }
    },
    {
        id: 'qc2-046',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 46',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 2x^2 - x - 1 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 2, \\; b = -1, \\; c = -1',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{1 \\pm \\sqrt{1 + 8}}{4}',
                    explanation: '\\( -4ac = 8 \\), \\( 2a = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{1 \\pm 3}{4}',
                    explanation: '\\( \\sqrt{9} = 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 1 \\) or \\( x = -\\tfrac{1}{2}',
                    explanation: '\\( \\frac{1+3}{4} = 1 \\) and \\( \\frac{1-3}{4} = -\\tfrac{1}{2} \\).'
                }
            ],
            finalAnswer: '\\(x = 1\\) or \\(x = -\\tfrac{1}{2\\)',
        }
    },
    {
        id: 'qc2-047',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 47',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 2x^2 + x - 6 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 2, \\; b = 1, \\; c = -6',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-1 \\pm \\sqrt{1 + 48}}{4}',
                    explanation: '\\( -4ac = 48 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-1 \\pm 7}{4}',
                    explanation: '\\( \\sqrt{49} = 7 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = \\tfrac{3}{2} \\) or \\( x = -2',
                    explanation: '\\( \\frac{-1+7}{4} = \\tfrac{3}{2} \\) and \\( \\frac{-1-7}{4} = -2 \\).'
                }
            ],
            finalAnswer: '\\(x = \\tfrac{3}{2}\\) or \\(x = -2\\)',
        }
    },
    {
        id: 'qc2-048',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 48',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 3x^2 - 11x + 6 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 3, \\; b = -11, \\; c = 6',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{11 \\pm \\sqrt{121 - 72}}{6}',
                    explanation: '\\( 4ac = 72 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{11 \\pm 7}{6}',
                    explanation: '\\( \\sqrt{49} = 7 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 3 \\) or \\( x = \\tfrac{2}{3}',
                    explanation: '\\( \\frac{11+7}{6} = 3 \\) and \\( \\frac{11-7}{6} = \\tfrac{2}{3} \\).'
                }
            ],
            finalAnswer: '\\(x = 3\\) or \\(x = \\tfrac{2}{3\\)',
        }
    },
    {
        id: 'qc2-049',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 49',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 4x^2 - 4x - 3 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 4, \\; b = -4, \\; c = -3',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{4 \\pm \\sqrt{16 + 48}}{8}',
                    explanation: '\\( -4ac = 48 \\), \\( 2a = 8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{4 \\pm 8}{8}',
                    explanation: '\\( \\sqrt{64} = 8 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = \\tfrac{3}{2} \\) or \\( x = -\\tfrac{1}{2}',
                    explanation: '\\( \\frac{4+8}{8} = \\tfrac{3}{2} \\) and \\( \\frac{4-8}{8} = -\\tfrac{1}{2} \\).'
                }
            ],
            finalAnswer: '\\(x = \\tfrac{3}{2}\\) or \\(x = -\\tfrac{1}{2\\)',
        }
    },
    {
        id: 'qc2-050',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 50',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 5x^2 + 9x - 2 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 5, \\; b = 9, \\; c = -2',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-9 \\pm \\sqrt{81 + 40}}{10}',
                    explanation: '\\( -4ac = 40 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-9 \\pm 11}{10}',
                    explanation: '\\( \\sqrt{121} = 11 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = \\tfrac{1}{5} \\) or \\( x = -2',
                    explanation: '\\( \\frac{-9+11}{10} = \\tfrac{1}{5} \\) and \\( \\frac{-9-11}{10} = -2 \\).'
                }
            ],
            finalAnswer: '\\(x = \\tfrac{1}{5}\\) or \\(x = -2\\)',
        }
    },
    {
        id: 'qc2-051',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 51',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 2x^2 + x - 4 = 0 \\), giving your answers to 2 decimal places.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'decimal answers', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 2, \\; b = 1, \\; c = -4',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-1 \\pm \\sqrt{1 + 32}}{4}',
                    explanation: '\\( -4ac = 32 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-1 \\pm \\sqrt{33}}{4}',
                    explanation: '33 is not a perfect square.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate each root to 2 d.p.',
                    workingLatex: 'x \\approx 1.19 \\) or \\( x \\approx -1.69',
                    explanation: '\\( \\sqrt{33} \\approx 5.745 \\).'
                }
            ],
            finalAnswer: 'x \\(\\approx 1.19\\) or x \\(\\approx -1.69\\)',
        }
    },
    {
        id: 'qc2-052',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 52',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 3x^2 - 6x + 1 = 0 \\), giving your answers to 2 decimal places.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'decimal answers', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 3, \\; b = -6, \\; c = 1',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{6 \\pm \\sqrt{36 - 12}}{6}',
                    explanation: '\\( 4ac = 12 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{6 \\pm \\sqrt{24}}{6}',
                    explanation: '\\( \\sqrt{24} \\approx 4.899 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate each root to 2 d.p.',
                    workingLatex: 'x \\approx 1.82 \\) or \\( x \\approx 0.18',
                    explanation: '\\( \\frac{6+4.899}{6} \\approx 1.82 \\), \\( \\frac{6-4.899}{6} \\approx 0.18 \\).'
                }
            ],
            finalAnswer: 'x \\(\\approx 1.82\\) or x \\(\\approx 0.18\\)',
        }
    },
    {
        id: 'qc2-053',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 53',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 2x^2 - 3x - 2 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 2, \\; b = -3, \\; c = -2',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{3 \\pm \\sqrt{9 + 16}}{4}',
                    explanation: '\\( -4ac = 16 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{3 \\pm 5}{4}',
                    explanation: '\\( \\sqrt{25} = 5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 2 \\) or \\( x = -\\tfrac{1}{2}',
                    explanation: '\\( \\frac{3+5}{4} = 2 \\) and \\( \\frac{3-5}{4} = -\\tfrac{1}{2} \\).'
                }
            ],
            finalAnswer: '\\(x = 2\\) or \\(x = -\\tfrac{1}{2\\)',
        }
    },
    {
        id: 'qc2-054',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 54',

        difficulty: 'Foundation',
        questionText: 'Rearrange the equation \\( x^2 + 5x = 14 \\) into standard form and then use the quadratic formula to solve it.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'rearranging'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 14 from both sides to put the equation into the form \\( ax^2 + bx + c = 0 \\).',
                    workingLatex: 'x^2 + 5x - 14 = 0',
                    explanation: 'The quadratic formula only works when one side is zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = 5, \\; c = -14',
                    explanation: 'Read them straight off.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-5 \\pm \\sqrt{25 + 56}}{2}',
                    explanation: '\\( -4ac = 56 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify and give both solutions.',
                    workingLatex: 'x = \\frac{-5 \\pm 9}{2} = 2 \\text{ or } -7',
                    explanation: '\\( \\sqrt{81} = 9 \\).'
                }
            ],
            finalAnswer: '\\(x = 2\\) or \\(x = -7\\)',
        }
    },
    {
        id: 'qc2-055',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 55',

        difficulty: 'Foundation',
        questionText: 'Rearrange the equation \\( x^2 = 4x + 5 \\) into standard form and then use the quadratic formula to solve it.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'rearranging'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract \\( 4x + 5 \\) from both sides.',
                    workingLatex: 'x^2 - 4x - 5 = 0',
                    explanation: 'This gives the standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = -4, \\; c = -5',
                    explanation: 'Read them from the rearranged equation.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{4 \\pm \\sqrt{16 + 20}}{2}',
                    explanation: '\\( -4ac = 20 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify and give both solutions.',
                    workingLatex: 'x = \\frac{4 \\pm 6}{2} = 5 \\text{ or } -1',
                    explanation: '\\( \\sqrt{36} = 6 \\).'
                }
            ],
            finalAnswer: '\\(x = 5\\) or \\(x = -1\\)',
        }
    },
    {
        id: 'qc2-056',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 56',

        difficulty: 'Foundation',
        questionText: 'Rearrange \\( 3x^2 = 2x + 8 \\) and solve using the quadratic formula.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'rearranging', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Move all terms to one side.',
                    workingLatex: '3x^2 - 2x - 8 = 0',
                    explanation: 'Subtract \\( 2x + 8 \\) from both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 3, \\; b = -2, \\; c = -8',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{2 \\pm \\sqrt{4 + 96}}{6}',
                    explanation: '\\( -4ac = 96 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify and give the solutions.',
                    workingLatex: 'x = \\frac{2 \\pm 10}{6} = 2 \\text{ or } -\\tfrac{4}{3}',
                    explanation: '\\( \\sqrt{100} = 10 \\).'
                }
            ],
            finalAnswer: '\\(x = 2\\) or \\(x = -\\tfrac{4}{3\\)',
        }
    },
    {
        id: 'qc2-057',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 57',

        difficulty: 'Foundation',
        questionText: 'Rearrange \\( x(x + 3) = 10 \\) and solve using the quadratic formula.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'expanding', 'decimal answers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the bracket.',
                    workingLatex: 'x^2 + 3x = 10',
                    explanation: 'Multiply \\( x \\) by each term in the bracket.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract 10 from both sides.',
                    workingLatex: 'x^2 + 3x - 10 = 0',
                    explanation: 'Put the equation into standard form.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( a = 1, b = 3, c = -10 \\) into the formula.',
                    workingLatex: 'x = \\frac{-3 \\pm \\sqrt{9 + 40}}{2} = \\frac{-3 \\pm 7}{2}',
                    explanation: '\\( \\sqrt{49} = 7 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 2 \\) or \\( x = -5',
                    explanation: '\\( \\frac{-3+7}{2} = 2 \\) and \\( \\frac{-3-7}{2} = -5 \\).'
                }
            ],
            finalAnswer: '\\(x = 2\\) or \\(x = -5\\)',
        }
    },
    {
        id: 'qc2-058',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 58',

        difficulty: 'Foundation',
        questionText: 'Rearrange \\( (x + 2)(x - 1) = 4 \\) and solve using the quadratic formula.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'expanding'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the brackets.',
                    workingLatex: 'x^2 + x - 2 = 4',
                    explanation: 'Use FOIL (or the grid method) to multiply out.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract 4 from both sides.',
                    workingLatex: 'x^2 + x - 6 = 0',
                    explanation: 'Now it is in standard form.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( a = 1, b = 1, c = -6 \\) into the formula.',
                    workingLatex: 'x = \\frac{-1 \\pm \\sqrt{1 + 24}}{2} = \\frac{-1 \\pm 5}{2}',
                    explanation: '\\( \\sqrt{25} = 5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 2 \\) or \\( x = -3',
                    explanation: '\\( \\frac{-1+5}{2} = 2 \\) and \\( \\frac{-1-5}{2} = -3 \\).'
                }
            ],
            finalAnswer: '\\(x = 2\\) or \\(x = -3\\)',
        }
    },
    {
        id: 'qc2-059',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 59',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 - 7x + 3 = 0 \\), giving your answers to 2 decimal places.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'decimal answers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = -7, \\; c = 3',
                    explanation: 'Match to the standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{7 \\pm \\sqrt{49 - 12}}{2}',
                    explanation: '\\( 4ac = 12 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{7 \\pm \\sqrt{37}}{2}',
                    explanation: '37 is prime.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate each root to 2 d.p.',
                    workingLatex: 'x \\approx 6.54 \\) or \\( x \\approx 0.46',
                    explanation: '\\( \\sqrt{37} \\approx 6.083 \\).'
                }
            ],
            finalAnswer: 'x \\(\\approx 6.54\\) or x \\(\\approx 0.46\\)',
        }
    },
    {
        id: 'qc2-060',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 60',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 + 2x - 8 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = 2, \\; c = -8',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-2 \\pm \\sqrt{4 + 32}}{2}',
                    explanation: '\\( -4ac = 32 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-2 \\pm 6}{2}',
                    explanation: '\\( \\sqrt{36} = 6 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 2 \\) or \\( x = -4',
                    explanation: '\\( \\frac{-2+6}{2} = 2 \\) and \\( \\frac{-2-6}{2} = -4 \\).'
                }
            ],
            finalAnswer: '\\(x = 2\\) or \\(x = -4\\)',
        }
    },
    {
        id: 'qc2-061',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 61',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 - 14x + 45 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = -14, \\; c = 45',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{14 \\pm \\sqrt{196 - 180}}{2}',
                    explanation: '\\( 4ac = 180 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{14 \\pm 4}{2}',
                    explanation: '\\( \\sqrt{16} = 4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 9 \\) or \\( x = 5',
                    explanation: '\\( \\frac{14+4}{2} = 9 \\) and \\( \\frac{14-4}{2} = 5 \\).'
                }
            ],
            finalAnswer: '\\(x = 9\\) or \\(x = 5\\)',
        }
    },
    {
        id: 'qc2-062',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 62',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 + 13x + 36 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = 13, \\; c = 36',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-13 \\pm \\sqrt{169 - 144}}{2}',
                    explanation: '\\( 4ac = 144 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-13 \\pm 5}{2}',
                    explanation: '\\( \\sqrt{25} = 5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = -4 \\) or \\( x = -9',
                    explanation: '\\( \\frac{-13+5}{2} = -4 \\) and \\( \\frac{-13-5}{2} = -9 \\).'
                }
            ],
            finalAnswer: '\\(x = -4\\) or \\(x = -9\\)',
        }
    },
    {
        id: 'qc2-063',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 63',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 - 11x + 18 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = -11, \\; c = 18',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{11 \\pm \\sqrt{121 - 72}}{2}',
                    explanation: '\\( 4ac = 72 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{11 \\pm 7}{2}',
                    explanation: '\\( \\sqrt{49} = 7 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 9 \\) or \\( x = 2',
                    explanation: '\\( \\frac{11+7}{2} = 9 \\) and \\( \\frac{11-7}{2} = 2 \\).'
                }
            ],
            finalAnswer: '\\(x = 9\\) or \\(x = 2\\)',
        }
    },
    {
        id: 'qc2-064',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 64',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( x^2 + 6x - 16 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\; b = 6, \\; c = -16',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-6 \\pm \\sqrt{36 + 64}}{2}',
                    explanation: '\\( -4ac = 64 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-6 \\pm 10}{2}',
                    explanation: '\\( \\sqrt{100} = 10 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 2 \\) or \\( x = -8',
                    explanation: '\\( \\frac{-6+10}{2} = 2 \\) and \\( \\frac{-6-10}{2} = -8 \\).'
                }
            ],
            finalAnswer: '\\(x = 2\\) or \\(x = -8\\)',
        }
    },
    {
        id: 'qc2-065',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 65',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 2x^2 - 9x + 4 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 2, \\; b = -9, \\; c = 4',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{9 \\pm \\sqrt{81 - 32}}{4}',
                    explanation: '\\( 4ac = 32 \\), \\( 2a = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{9 \\pm 7}{4}',
                    explanation: '\\( \\sqrt{49} = 7 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 4 \\) or \\( x = \\tfrac{1}{2}',
                    explanation: '\\( \\frac{9+7}{4} = 4 \\) and \\( \\frac{9-7}{4} = \\tfrac{1}{2} \\).'
                }
            ],
            finalAnswer: '\\(x = 4\\) or \\(x = \\tfrac{1}{2\\)',
        }
    },
    {
        id: 'qc2-066',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 66',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 3x^2 + 7x + 2 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 3, \\; b = 7, \\; c = 2',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-7 \\pm \\sqrt{49 - 24}}{6}',
                    explanation: '\\( 4ac = 24 \\), \\( 2a = 6 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-7 \\pm 5}{6}',
                    explanation: '\\( \\sqrt{25} = 5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = -\\tfrac{1}{3} \\) or \\( x = -2',
                    explanation: '\\( \\frac{-7+5}{6} = -\\tfrac{1}{3} \\) and \\( \\frac{-7-5}{6} = -2 \\).'
                }
            ],
            finalAnswer: '\\(x = -\\tfrac{1}{3}\\) or \\(x = -2\\)',
        }
    },
    {
        id: 'qc2-067',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 67',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 5x^2 + 7x + 2 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 5, \\; b = 7, \\; c = 2',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-7 \\pm \\sqrt{49 - 40}}{10}',
                    explanation: '\\( 4ac = 40 \\), \\( 2a = 10 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-7 \\pm 3}{10}',
                    explanation: '\\( \\sqrt{9} = 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = -\\tfrac{2}{5} \\) or \\( x = -1',
                    explanation: '\\( \\frac{-7+3}{10} = -\\tfrac{2}{5} \\) and \\( \\frac{-7-3}{10} = -1 \\).'
                }
            ],
            finalAnswer: '\\(x = -\\tfrac{2}{5}\\) or \\(x = -1\\)',
        }
    },
    {
        id: 'qc2-068',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 68',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 6x^2 - 7x + 2 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 6, \\; b = -7, \\; c = 2',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{7 \\pm \\sqrt{49 - 48}}{12}',
                    explanation: '\\( 4ac = 48 \\), \\( 2a = 12 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{7 \\pm 1}{12}',
                    explanation: '\\( \\sqrt{1} = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = \\tfrac{2}{3} \\) or \\( x = \\tfrac{1}{2}',
                    explanation: '\\( \\frac{7+1}{12} = \\tfrac{2}{3} \\) and \\( \\frac{7-1}{12} = \\tfrac{1}{2} \\).'
                }
            ],
            finalAnswer: '\\(x = \\tfrac{2}{3}\\) or \\(x = \\tfrac{1}{2\\)',
        }
    },
    {
        id: 'qc2-069',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 69',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 2x^2 + 9x + 4 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 2, \\; b = 9, \\; c = 4',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{-9 \\pm \\sqrt{81 - 32}}{4}',
                    explanation: '\\( 4ac = 32 \\), \\( 2a = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-9 \\pm 7}{4}',
                    explanation: '\\( \\sqrt{49} = 7 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = -\\tfrac{1}{2} \\) or \\( x = -4',
                    explanation: '\\( \\frac{-9+7}{4} = -\\tfrac{1}{2} \\) and \\( \\frac{-9-7}{4} = -4 \\).'
                }
            ],
            finalAnswer: '\\(x = -\\tfrac{1}{2}\\) or \\(x = -4\\)',
        }
    },
    {
        id: 'qc2-070',
        topicRef: 'qc2',
        topicTitle: 'Quadratic Equations 70',

        difficulty: 'Foundation',
        questionText: 'Use the quadratic formula to solve \\( 3x^2 - 8x + 4 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic formula', 'solving quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 3, \\; b = -8, \\; c = 4',
                    explanation: 'Match to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the formula.',
                    workingLatex: 'x = \\frac{8 \\pm \\sqrt{64 - 48}}{6}',
                    explanation: '\\( 4ac = 48 \\), \\( 2a = 6 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{8 \\pm 4}{6}',
                    explanation: '\\( \\sqrt{16} = 4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Give the two solutions.',
                    workingLatex: 'x = 2 \\) or \\( x = \\tfrac{2}{3}',
                    explanation: '\\( \\frac{8+4}{6} = 2 \\) and \\( \\frac{8-4}{6} = \\tfrac{2}{3} \\).'
                }
            ],
            finalAnswer: '\\(x = 2\\) or \\(x = \\tfrac{2}{3\\)',
        }
    }

]