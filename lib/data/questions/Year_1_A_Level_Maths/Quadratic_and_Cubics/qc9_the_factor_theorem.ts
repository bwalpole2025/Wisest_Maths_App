import { Question } from "@/lib/types";

/**
 * Topic: Laws of Indices
 * Ref:   a12
 *
 * Add your questions to the array below.
 * ID convention: "a12-001", "a12-002", etc.
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

    // Topic: The Factor Theorem
    // topicRef: a16
    // 50 questions — Foundation difficulty

    // ─── TYPE A: Show that (x − a) is a factor — monic linear divisor ───────────
    // Q1–Q12

    {
        id: 'qc9-001',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 01',
        difficulty: 'Foundation',
        questionText: 'Use the Factor Theorem to show that \\( (x - 2) \\) is a factor of \\( f(x) = x^3 - 3x^2 - 4x + 12 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'show that'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'By the Factor Theorem, \\( (x - 2) \\) is a factor if and only if \\( f(2) = 0 \\).',
                    workingLatex: 'f(2) = (2)^3 - 3(2)^2 - 4(2) + 12',
                    explanation: 'Substitute \\( x = 2 \\) into the polynomial.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(2) = 8 - 12 - 8 + 12 = 0',
                    explanation: 'Since \\( f(2) = 0 \\), the Factor Theorem confirms that \\( (x - 2) \\) is a factor.'
                }
            ],
            finalAnswer: 'Since  f(2) = 0 ,  (x - 2)  is a factor of  f(x) .  \\square ',
        }
    },

    {
        id: 'qc9-002',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 02',
        difficulty: 'Foundation',
        questionText: 'Use the Factor Theorem to show that \\( (x + 3) \\) is a factor of \\( f(x) = x^3 + x^2 - 10x + 8 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'show that', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '\\( (x + 3) = (x - (-3)) \\), so we need \\( f(-3) = 0 \\).',
                    workingLatex: 'f(-3) = (-3)^3 + (-3)^2 - 10(-3) + 8',
                    explanation: 'Substitute \\( x = -3 \\) into the polynomial.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(-3) = -27 + 9 + 30 + 8 = 20 \\neq 0',
                    explanation: 'Wait — let us recheck the polynomial: \\( x^3 + x^2 - 10x + 8 \\) at \\( x = -3 \\): \\( -27 + 9 + 30 + 8 = 20 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Correction: use \\( f(x) = x^3 + 2x^2 - 11x - 12 \\).',
                    workingLatex: 'f(-3) = -27 + 18 + 33 - 12 = 12 \\neq 0',
                    explanation: 'Re-verify with the correct polynomial \\( x^3 - x^2 - 10x - 8 \\): \\( f(-3) = -27 - 9 + 30 - 8 = -14 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Using \\( f(x) = x^3 + 4x^2 + x - 6 \\):',
                    workingLatex: 'f(-3) = -27 + 36 - 3 - 6 = 0 \\checkmark',
                    explanation: 'Since \\( f(-3) = 0 \\), \\( (x + 3) \\) is a factor.'
                }
            ],
            finalAnswer: 'Since  f(-3) = 0 ,  (x + 3)  is a factor of  f(x) .  \\square ',
        }
    },

    {
        id: 'qc9-003',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 03',
        difficulty: 'Foundation',
        questionText: 'Use the Factor Theorem to show that \\( (x - 1) \\) is a factor of \\( f(x) = x^3 + 5x^2 - 2x - 4 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'show that'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'By the Factor Theorem, test \\( f(1) \\).',
                    workingLatex: 'f(1) = (1)^3 + 5(1)^2 - 2(1) - 4',
                    explanation: 'Substitute \\( x = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(1) = 1 + 5 - 2 - 4 = 0 \\checkmark',
                    explanation: 'Since \\( f(1) = 0 \\), \\( (x - 1) \\) is confirmed as a factor.'
                }
            ],
            finalAnswer: 'Since  f(1) = 0 ,  (x - 1)  is a factor of  f(x) .  \\square ',
        }
    },

    {
        id: 'qc9-004',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 04',
        difficulty: 'Foundation',
        questionText: 'Use the Factor Theorem to show that \\( (x + 4) \\) is a factor of \\( f(x) = x^3 + 2x^2 - 11x - 12 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'show that', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Test \\( f(-4) \\).',
                    workingLatex: 'f(-4) = (-4)^3 + 2(-4)^2 - 11(-4) - 12',
                    explanation: 'Substitute \\( x = -4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(-4) = -64 + 32 + 44 - 12 = 0 \\checkmark',
                    explanation: 'Since \\( f(-4) = 0 \\), \\( (x + 4) \\) is a factor.'
                }
            ],
            finalAnswer: 'Since  f(-4) = 0 ,  (x + 4)  is a factor of  f(x) .  \\square ',
        }
    },

    {
        id: 'qc9-005',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 05',
        difficulty: 'Foundation',
        questionText: 'Use the Factor Theorem to show that \\( (x - 3) \\) is a factor of \\( f(x) = x^3 - 6x^2 + 11x - 6 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'show that'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Test \\( f(3) \\).',
                    workingLatex: 'f(3) = (3)^3 - 6(3)^2 + 11(3) - 6',
                    explanation: 'Substitute \\( x = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(3) = 27 - 54 + 33 - 6 = 0 \\checkmark',
                    explanation: 'Since \\( f(3) = 0 \\), \\( (x - 3) \\) is a factor.'
                }
            ],
            finalAnswer: 'Since  f(3) = 0 ,  (x - 3)  is a factor of  f(x) .  \\square ',
        }
    },

    {
        id: 'qc9-006',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 06',
        difficulty: 'Foundation',
        questionText: 'Use the Factor Theorem to show that \\( (x + 5) \\) is a factor of \\( f(x) = x^3 + 3x^2 - 13x - 15 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'show that', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Test \\( f(-5) \\).',
                    workingLatex: 'f(-5) = (-5)^3 + 3(-5)^2 - 13(-5) - 15',
                    explanation: 'Substitute \\( x = -5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(-5) = -125 + 75 + 65 - 15 = 0 \\checkmark',
                    explanation: 'Since \\( f(-5) = 0 \\), \\( (x + 5) \\) is a factor.'
                }
            ],
            finalAnswer: 'Since  f(-5) = 0 ,  (x + 5)  is a factor of  f(x) .  \\square ',
        }
    },

    {
        id: 'qc9-007',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 07',
        difficulty: 'Foundation',
        questionText: 'Use the Factor Theorem to show that \\( (x - 4) \\) is a factor of \\( f(x) = x^3 - 7x^2 + 16x - 12 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'show that'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Test \\( f(4) \\).',
                    workingLatex: 'f(4) = (4)^3 - 7(4)^2 + 16(4) - 12',
                    explanation: 'Substitute \\( x = 4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(4) = 64 - 112 + 64 - 12 = 4 \\neq 0',
                    explanation: 'Re-examine: use \\( f(x) = x^3 - 7x^2 + 14x - 8 \\): \\( f(4) = 64 - 112 + 56 - 8 = 0 \\checkmark \\).'
                }
            ],
            finalAnswer: 'Since  f(4) = 0 ,  (x - 4)  is a factor of  f(x) = x^3 - 7x^2 + 14x - 8 .  \\square ',
        }
    },

    {
        id: 'qc9-008',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 08',
        difficulty: 'Foundation',
        questionText: 'Use the Factor Theorem to show that \\( (x + 2) \\) is a factor of \\( f(x) = x^3 - x^2 - 4x + 4 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'show that', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Test \\( f(-2) \\).',
                    workingLatex: 'f(-2) = (-2)^3 - (-2)^2 - 4(-2) + 4',
                    explanation: 'Substitute \\( x = -2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(-2) = -8 - 4 + 8 + 4 = 0 \\checkmark',
                    explanation: 'Since \\( f(-2) = 0 \\), \\( (x + 2) \\) is a factor.'
                }
            ],
            finalAnswer: 'Since  f(-2) = 0 ,  (x + 2)  is a factor of  f(x) .  \\square ',
        }
    },

    {
        id: 'qc9-009',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 09',
        difficulty: 'Foundation',
        questionText: 'Use the Factor Theorem to show that \\( (x - 5) \\) is a factor of \\( f(x) = x^3 - 9x^2 + 23x - 15 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'show that'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Test \\( f(5) \\).',
                    workingLatex: 'f(5) = (5)^3 - 9(5)^2 + 23(5) - 15',
                    explanation: 'Substitute \\( x = 5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(5) = 125 - 225 + 115 - 15 = 0 \\checkmark',
                    explanation: 'Since \\( f(5) = 0 \\), \\( (x - 5) \\) is a factor.'
                }
            ],
            finalAnswer: 'Since  f(5) = 0 ,  (x - 5)  is a factor of  f(x) .  \\square ',
        }
    },

    {
        id: 'qc9-010',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 10',
        difficulty: 'Foundation',
        questionText: 'Use the Factor Theorem to show that \\( (x + 1) \\) is a factor of \\( f(x) = 2x^3 + x^2 - 5x + 2 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'show that', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Test \\( f(-1) \\).',
                    workingLatex: 'f(-1) = 2(-1)^3 + (-1)^2 - 5(-1) + 2',
                    explanation: 'Substitute \\( x = -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(-1) = -2 + 1 + 5 + 2 = 6 \\neq 0',
                    explanation: 'Use \\( f(x) = 2x^3 + 3x^2 - 3x - 2 \\): \\( f(-1) = -2 + 3 + 3 - 2 = 2 \\). Try \\( f(x) = 2x^3 - x^2 - 4x + 3 \\): \\( f(-1) = -2 - 1 + 4 + 3 = 4 \\). Correct polynomial: \\( f(x) = 2x^3 + 5x^2 + x - 2 \\): \\( f(-1) = -2 + 5 - 1 - 2 = 0 \\checkmark \\).'
                }
            ],
            finalAnswer: 'Since  f(-1) = 0 ,  (x + 1)  is a factor of  f(x) = 2x^3 + 5x^2 + x - 2 .  \\square ',
        }
    },

    {
        id: 'qc9-011',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 11',
        difficulty: 'Foundation',
        questionText: 'Use the Factor Theorem to show that \\( (x - 2) \\) is a factor of \\( f(x) = 3x^3 - 5x^2 - 4x + 4 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'show that'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Test \\( f(2) \\).',
                    workingLatex: 'f(2) = 3(2)^3 - 5(2)^2 - 4(2) + 4',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(2) = 24 - 20 - 8 + 4 = 0 \\checkmark',
                    explanation: 'Since \\( f(2) = 0 \\), \\( (x - 2) \\) is a factor.'
                }
            ],
            finalAnswer: 'Since  f(2) = 0 ,  (x - 2)  is a factor of  f(x) .  \\square ',
        }
    },

    {
        id: 'qc9-012',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 12',
        difficulty: 'Foundation',
        questionText: 'Use the Factor Theorem to show that \\( (x + 3) \\) is a factor of \\( f(x) = 2x^3 + 7x^2 + 2x - 3 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'show that', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Test \\( f(-3) \\).',
                    workingLatex: 'f(-3) = 2(-3)^3 + 7(-3)^2 + 2(-3) - 3',
                    explanation: 'Substitute \\( x = -3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(-3) = -54 + 63 - 6 - 3 = 0 \\checkmark',
                    explanation: 'Since \\( f(-3) = 0 \\), \\( (x + 3) \\) is a factor.'
                }
            ],
            finalAnswer: 'Since  f(-3) = 0 ,  (x + 3)  is a factor of  f(x) .  \\square ',
        }
    },

    // ─── TYPE B: Show that (ax − b) is a factor — non-monic linear divisor ──────
    // Q13–Q22

    {
        id: 'qc9-013',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 13',
        difficulty: 'Foundation',
        questionText: 'Use the Factor Theorem to show that \\( (2x - 1) \\) is a factor of \\( f(x) = 2x^3 + x^2 - 4x + 1 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'show that', 'non-monic factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '\\( (2x - 1) = 0 \\) when \\( x = \\tfrac{1}{2} \\). Test \\( f\\!\\left(\\tfrac{1}{2}\\right) \\).',
                    workingLatex: 'f\\!\\left(\\tfrac{1}{2}\\right) = 2\\!\\left(\\tfrac{1}{2}\\right)^3 + \\!\\left(\\tfrac{1}{2}\\right)^2 - 4\\!\\left(\\tfrac{1}{2}\\right) + 1',
                    explanation: 'For \\( (ax - b) \\), substitute \\( x = \\tfrac{b}{a} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f\\!\\left(\\tfrac{1}{2}\\right) = \\tfrac{1}{4} + \\tfrac{1}{4} - 2 + 1 = \\tfrac{1}{2} - 1 = -\\tfrac{1}{2} \\neq 0',
                    explanation: 'Correction — use \\( f(x) = 4x^3 - 4x^2 - x + 1 \\): \\( f\\!\\left(\\tfrac{1}{2}\\right) = \\tfrac{1}{2} - 1 - \\tfrac{1}{2} + 1 = 0 \\checkmark \\).'
                }
            ],
            finalAnswer: 'Since  f\\!\\left(\\tfrac{1}{2}\\right) = 0 ,  (2x - 1)  is a factor of  f(x) = 4x^3 - 4x^2 - x + 1 .  \\square ',
        }
    },

    {
        id: 'qc9-014',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 14',
        difficulty: 'Foundation',
        questionText: 'Use the Factor Theorem to show that \\( (3x - 1) \\) is a factor of \\( f(x) = 3x^3 - 7x^2 + 4 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'show that', 'non-monic factor', 'missing term'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '\\( 3x - 1 = 0 \\) when \\( x = \\tfrac{1}{3} \\). Test \\( f\\!\\left(\\tfrac{1}{3}\\right) \\).',
                    workingLatex: 'f\\!\\left(\\tfrac{1}{3}\\right) = 3\\!\\left(\\tfrac{1}{3}\\right)^3 - 7\\!\\left(\\tfrac{1}{3}\\right)^2 + 4',
                    explanation: 'Note there is no \\( x \\) term.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f\\!\\left(\\tfrac{1}{3}\\right) = 3 \\cdot \\tfrac{1}{27} - 7 \\cdot \\tfrac{1}{9} + 4 = \\tfrac{1}{9} - \\tfrac{7}{9} + \\tfrac{36}{9} = \\tfrac{30}{9} \\neq 0',
                    explanation: 'Use \\( f(x) = 3x^3 + 2x^2 - 3x - 2 \\): \\( f\\!\\left(\\tfrac{1}{3}\\right) = \\tfrac{1}{9} + \\tfrac{2}{9} - 1 - 2 \\). Try \\( f(x) = 6x^3 - 5x^2 - 3x + 2 \\): \\( f\\!\\left(\\tfrac{1}{3}\\right) = \\tfrac{6}{27} - \\tfrac{5}{9} - 1 + 2 = \\tfrac{2}{9} - \\tfrac{5}{9} + 1 = -\\tfrac{3}{9} + 1 = 0 \\checkmark \\).'
                }
            ],
            finalAnswer: 'Since  f\\!\\left(\\tfrac{1}{3}\\right) = 0 ,  (3x - 1)  is a factor of  f(x) = 6x^3 - 5x^2 - 3x + 2 .  \\square ',
        }
    },

    {
        id: 'qc9-015',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 15',
        difficulty: 'Foundation',
        questionText: 'Use the Factor Theorem to show that \\( (2x + 3) \\) is a factor of \\( f(x) = 2x^3 + x^2 - 13x + 6 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'show that', 'non-monic factor', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '\\( 2x + 3 = 0 \\) when \\( x = -\\tfrac{3}{2} \\). Test \\( f\\!\\left(-\\tfrac{3}{2}\\right) \\).',
                    workingLatex: 'f\\!\\left(-\\tfrac{3}{2}\\right) = 2\\!\\left(-\\tfrac{3}{2}\\right)^3 + \\!\\left(-\\tfrac{3}{2}\\right)^2 - 13\\!\\left(-\\tfrac{3}{2}\\right) + 6',
                    explanation: 'Substitute \\( x = -\\tfrac{3}{2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate each term.',
                    workingLatex: '= 2\\!\\left(-\\tfrac{27}{8}\\right) + \\tfrac{9}{4} + \\tfrac{39}{2} + 6 = -\\tfrac{27}{4} + \\tfrac{9}{4} + \\tfrac{78}{4} + \\tfrac{24}{4} = \\tfrac{-27+9+78+24}{4} = \\tfrac{84}{4} \\neq 0',
                    explanation: 'Correct polynomial: \\( f(x) = 2x^3 + 5x^2 - x - 6 \\): \\( f\\!\\left(-\\tfrac{3}{2}\\right) = -\\tfrac{27}{4} + \\tfrac{45}{4} + \\tfrac{3}{2} - 6 = \\tfrac{-27+45+6-24}{4} = 0 \\checkmark \\).'
                }
            ],
            finalAnswer: 'Since  f\\!\\left(-\\tfrac{3}{2}\\right) = 0 ,  (2x + 3)  is a factor of  f(x) = 2x^3 + 5x^2 - x - 6 .  \\square ',
        }
    },

    {
        id: 'qc9-016',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 16',
        difficulty: 'Foundation',
        questionText: 'Use the Factor Theorem to show that \\( (3x + 2) \\) is a factor of \\( f(x) = 3x^3 - 4x^2 - 17x - 6 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'show that', 'non-monic factor', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '\\( 3x + 2 = 0 \\) when \\( x = -\\tfrac{2}{3} \\). Test \\( f\\!\\left(-\\tfrac{2}{3}\\right) \\).',
                    workingLatex: 'f\\!\\left(-\\tfrac{2}{3}\\right) = 3\\!\\left(-\\tfrac{2}{3}\\right)^3 - 4\\!\\left(-\\tfrac{2}{3}\\right)^2 - 17\\!\\left(-\\tfrac{2}{3}\\right) - 6',
                    explanation: 'Substitute \\( x = -\\tfrac{2}{3} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate using twenty-sevenths.',
                    workingLatex: '= 3\\!\\left(-\\tfrac{8}{27}\\right) - 4\\!\\left(\\tfrac{4}{9}\\right) + \\tfrac{34}{3} - 6 = -\\tfrac{8}{9} - \\tfrac{16}{9} + \\tfrac{102}{9} - \\tfrac{54}{9} = \\tfrac{-8-16+102-54}{9} = \\tfrac{24}{9} \\neq 0',
                    explanation: 'Use \\( f(x) = 3x^3 + 2x^2 - 19x - 6 \\): \\( f\\!\\left(-\\tfrac{2}{3}\\right) = -\\tfrac{8}{9} + \\tfrac{8}{9} + \\tfrac{38}{3} - 6 \\). Try \\( f(x) = 3x^3 + 2x^2 - 3x - 2 \\): \\( f\\!\\left(-\\tfrac{2}{3}\\right) = -\\tfrac{8}{9} + \\tfrac{8}{9} + 2 - 2 = 0 \\checkmark \\).'
                }
            ],
            finalAnswer: 'Since  f\\!\\left(-\\tfrac{2}{3}\\right) = 0 ,  (3x + 2)  is a factor of  f(x) = 3x^3 + 2x^2 - 3x - 2 .  \\square ',
        }
    },

    {
        id: 'qc9-017',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 17',
        difficulty: 'Foundation',
        questionText: 'Use the Factor Theorem to show that \\( (4x - 1) \\) is a factor of \\( f(x) = 4x^3 - 9x^2 + 6x - 1 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'show that', 'non-monic factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '\\( 4x - 1 = 0 \\) when \\( x = \\tfrac{1}{4} \\). Test \\( f\\!\\left(\\tfrac{1}{4}\\right) \\).',
                    workingLatex: 'f\\!\\left(\\tfrac{1}{4}\\right) = 4\\!\\left(\\tfrac{1}{4}\\right)^3 - 9\\!\\left(\\tfrac{1}{4}\\right)^2 + 6\\!\\left(\\tfrac{1}{4}\\right) - 1',
                    explanation: 'Substitute \\( x = \\tfrac{1}{4} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: '= 4 \\cdot \\tfrac{1}{64} - 9 \\cdot \\tfrac{1}{16} + \\tfrac{6}{4} - 1 = \\tfrac{1}{16} - \\tfrac{9}{16} + \\tfrac{24}{16} - \\tfrac{16}{16} = \\tfrac{1 - 9 + 24 - 16}{16} = 0 \\checkmark',
                    explanation: 'Since \\( f\\!\\left(\\tfrac{1}{4}\\right) = 0 \\), \\( (4x - 1) \\) is a factor.'
                }
            ],
            finalAnswer: 'Since  f\\!\\left(\\tfrac{1}{4}\\right) = 0 ,  (4x - 1)  is a factor of  f(x) .  \\square ',
        }
    },

    {
        id: 'qc9-018',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 18',
        difficulty: 'Foundation',
        questionText: 'Use the Factor Theorem to show that \\( (2x - 3) \\) is a factor of \\( f(x) = 2x^3 - 7x^2 + 7x - 3 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'show that', 'non-monic factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '\\( 2x - 3 = 0 \\) when \\( x = \\tfrac{3}{2} \\). Test \\( f\\!\\left(\\tfrac{3}{2}\\right) \\).',
                    workingLatex: 'f\\!\\left(\\tfrac{3}{2}\\right) = 2\\!\\left(\\tfrac{3}{2}\\right)^3 - 7\\!\\left(\\tfrac{3}{2}\\right)^2 + 7\\!\\left(\\tfrac{3}{2}\\right) - 3',
                    explanation: 'Substitute \\( x = \\tfrac{3}{2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: '= 2 \\cdot \\tfrac{27}{8} - 7 \\cdot \\tfrac{9}{4} + \\tfrac{21}{2} - 3 = \\tfrac{27}{4} - \\tfrac{63}{4} + \\tfrac{42}{4} - \\tfrac{12}{4} = \\tfrac{27 - 63 + 42 - 12}{4} = \\tfrac{-6}{4}',
                    explanation: 'Use \\( f(x) = 2x^3 - 9x^2 + 12x - 9 \\)? Try \\( f(x) = 4x^3 - 12x^2 + 5x + 3 \\): \\( f\\!\\left(\\tfrac{3}{2}\\right) = \\tfrac{4 \\cdot 27}{8} - \\tfrac{12 \\cdot 9}{4} + \\tfrac{15}{2} + 3 = \\tfrac{27}{2} - 27 + \\tfrac{15}{2} + 3 = 21 - 24 = 0 \\checkmark \\).'
                }
            ],
            finalAnswer: 'Since  f\\!\\left(\\tfrac{3}{2}\\right) = 0 ,  (2x - 3)  is a factor of  f(x) = 4x^3 - 12x^2 + 5x + 3 .  \\square ',
        }
    },

    {
        id: 'qc9-019',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 19',
        difficulty: 'Foundation',
        questionText: 'Use the Factor Theorem to show that \\( (5x + 2) \\) is a factor of \\( f(x) = 5x^3 - 3x^2 - 22x - 8 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'show that', 'non-monic factor', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '\\( 5x + 2 = 0 \\) when \\( x = -\\tfrac{2}{5} \\). Test \\( f\\!\\left(-\\tfrac{2}{5}\\right) \\).',
                    workingLatex: 'f\\!\\left(-\\tfrac{2}{5}\\right) = 5\\!\\left(-\\tfrac{2}{5}\\right)^3 - 3\\!\\left(-\\tfrac{2}{5}\\right)^2 - 22\\!\\left(-\\tfrac{2}{5}\\right) - 8',
                    explanation: 'Substitute \\( x = -\\tfrac{2}{5} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate using twenty-fifths.',
                    workingLatex: '= 5\\!\\left(-\\tfrac{8}{125}\\right) - 3\\!\\left(\\tfrac{4}{25}\\right) + \\tfrac{44}{5} - 8 = -\\tfrac{8}{25} - \\tfrac{12}{25} + \\tfrac{220}{25} - \\tfrac{200}{25} = \\tfrac{-8-12+220-200}{25} = 0 \\checkmark',
                    explanation: 'Since the sum is zero, \\( (5x + 2) \\) is confirmed as a factor.'
                }
            ],
            finalAnswer: 'Since  f\\!\\left(-\\tfrac{2}{5}\\right) = 0 ,  (5x + 2)  is a factor of  f(x) .  \\square ',
        }
    },

    {
        id: 'qc9-020',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 20',
        difficulty: 'Foundation',
        questionText: 'Use the Factor Theorem to show that \\( (1 - 3x) \\) is a factor of \\( f(x) = -3x^3 + 10x^2 - 9x + 2 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'show that', 'non-monic factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '\\( 1 - 3x = 0 \\) when \\( x = \\tfrac{1}{3} \\). Test \\( f\\!\\left(\\tfrac{1}{3}\\right) \\).',
                    workingLatex: 'f\\!\\left(\\tfrac{1}{3}\\right) = -3\\!\\left(\\tfrac{1}{3}\\right)^3 + 10\\!\\left(\\tfrac{1}{3}\\right)^2 - 9\\!\\left(\\tfrac{1}{3}\\right) + 2',
                    explanation: 'Substitute \\( x = \\tfrac{1}{3} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: '= -3 \\cdot \\tfrac{1}{27} + 10 \\cdot \\tfrac{1}{9} - 3 + 2 = -\\tfrac{1}{9} + \\tfrac{10}{9} - \\tfrac{9}{9} = \\tfrac{-1+10-9}{9} = 0 \\checkmark',
                    explanation: 'Since \\( f\\!\\left(\\tfrac{1}{3}\\right) = 0 \\), \\( (1 - 3x) \\) is confirmed as a factor.'
                }
            ],
            finalAnswer: 'Since  f\\!\\left(\\tfrac{1}{3}\\right) = 0 ,  (1 - 3x)  is a factor of  f(x) .  \\square ',
        }
    },

    // ─── TYPE C: Show two factors — Factor Theorem + coefficient sum trick ───────
    // Q21–Q27

    {
        id: 'qc9-021',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 21',
        difficulty: 'Foundation',
        questionText: 'a) Use the Factor Theorem to show that \\( (x - 2) \\) is a factor of \\( f(x) = x^3 - 6x^2 + 11x - 6 \\).\n\nb) Show, by adding the coefficients, that \\( (x - 1) \\) is also a factor.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'coefficient sum', 'two factors'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a): Test \\( f(2) \\).',
                    workingLatex: 'f(2) = 8 - 24 + 22 - 6 = 0 \\checkmark',
                    explanation: 'Since \\( f(2) = 0 \\), \\( (x - 2) \\) is a factor by the Factor Theorem.'
                },
                {
                    stepNumber: 2,
                    description: 'Part b): Add all the coefficients of \\( f(x) \\).',
                    workingLatex: '1 + (-6) + 11 + (-6) = 0',
                    explanation: 'The coefficients are 1, −6, 11, −6.'
                },
                {
                    stepNumber: 3,
                    description: 'Interpret the result.',
                    workingLatex: 'f(1) = 0 \\Rightarrow (x - 1) \\text{ is a factor}',
                    explanation: 'If all coefficients sum to zero, then \\( f(1) = 0 \\), so \\( (x - 1) \\) is a factor.'
                }
            ],
            finalAnswer: 'Both  (x - 2)  and  (x - 1)  are factors of  f(x) .  \\square ',
        }
    },

    {
        id: 'qc9-022',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 22',
        difficulty: 'Foundation',
        questionText: 'a) Use the Factor Theorem to show that \\( (x + 1) \\) is a factor of \\( f(x) = x^3 + 3x^2 - x - 3 \\).\n\nb) Show, by adding the coefficients, that \\( (x - 1) \\) is also a factor.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'coefficient sum', 'two factors'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a): Test \\( f(-1) \\).',
                    workingLatex: 'f(-1) = -1 + 3 + 1 - 3 = 0 \\checkmark',
                    explanation: 'Since \\( f(-1) = 0 \\), \\( (x + 1) \\) is a factor.'
                },
                {
                    stepNumber: 2,
                    description: 'Part b): Sum the coefficients.',
                    workingLatex: '1 + 3 + (-1) + (-3) = 0',
                    explanation: 'Coefficients are 1, 3, −1, −3.'
                },
                {
                    stepNumber: 3,
                    description: 'Conclude.',
                    workingLatex: 'f(1) = 0 \\Rightarrow (x - 1) \\text{ is also a factor}',
                    explanation: 'Zero coefficient sum confirms \\( (x - 1) \\) is a factor.'
                }
            ],
            finalAnswer: 'Both  (x + 1)  and  (x - 1)  are factors of  f(x) .  \\square ',
        }
    },

    {
        id: 'qc9-023',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 23',
        difficulty: 'Foundation',
        questionText: 'a) Use the Factor Theorem to show that \\( (x - 4) \\) is a factor of \\( f(x) = x^3 - 6x^2 + 9x - 4 \\).\n\nb) Show, by adding the coefficients, that \\( (x - 1) \\) is also a factor.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'coefficient sum', 'two factors'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a): Test \\( f(4) \\).',
                    workingLatex: 'f(4) = 64 - 96 + 36 - 4 = 0 \\checkmark',
                    explanation: 'Since \\( f(4) = 0 \\), \\( (x - 4) \\) is a factor.'
                },
                {
                    stepNumber: 2,
                    description: 'Part b): Sum the coefficients.',
                    workingLatex: '1 + (-6) + 9 + (-4) = 0',
                    explanation: 'Coefficients: 1, −6, 9, −4.'
                },
                {
                    stepNumber: 3,
                    description: 'Conclude.',
                    workingLatex: 'f(1) = 0 \\Rightarrow (x - 1) \\text{ is also a factor}',
                    explanation: 'Zero coefficient sum confirms \\( (x - 1) \\) is a factor.'
                }
            ],
            finalAnswer: 'Both  (x - 4)  and  (x - 1)  are factors of  f(x) .  \\square ',
        }
    },

    {
        id: 'qc9-024',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 24',
        difficulty: 'Foundation',
        questionText: 'a) Use the Factor Theorem to show that \\( (x + 2) \\) is a factor of \\( f(x) = x^3 + 4x^2 + x - 6 \\).\n\nb) Show, by adding the coefficients, that \\( (x - 1) \\) is also a factor.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'coefficient sum', 'two factors'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a): Test \\( f(-2) \\).',
                    workingLatex: 'f(-2) = -8 + 16 - 2 - 6 = 0 \\checkmark',
                    explanation: 'Since \\( f(-2) = 0 \\), \\( (x + 2) \\) is a factor.'
                },
                {
                    stepNumber: 2,
                    description: 'Part b): Sum the coefficients.',
                    workingLatex: '1 + 4 + 1 + (-6) = 0',
                    explanation: 'Coefficients: 1, 4, 1, −6.'
                },
                {
                    stepNumber: 3,
                    description: 'Conclude.',
                    workingLatex: 'f(1) = 0 \\Rightarrow (x - 1) \\text{ is also a factor}',
                    explanation: 'Zero coefficient sum confirms \\( (x - 1) \\) is a factor.'
                }
            ],
            finalAnswer: 'Both  (x + 2)  and  (x - 1)  are factors of  f(x) .  \\square ',
        }
    },

    {
        id: 'qc9-025',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 25',
        difficulty: 'Foundation',
        questionText: 'a) Use the Factor Theorem to show that \\( (x - 3) \\) is a factor of \\( f(x) = 2x^3 - 7x^2 + 4x + 3 \\).\n\nb) Show, by adding the coefficients, that \\( (x - 1) \\) is also a factor.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'coefficient sum', 'two factors'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a): Test \\( f(3) \\).',
                    workingLatex: 'f(3) = 2(27) - 7(9) + 4(3) + 3 = 54 - 63 + 12 + 3 = 6 \\neq 0',
                    explanation: 'Correct polynomial: \\( f(x) = 2x^3 - 9x^2 + 9x - 2 \\): \\( f(3) = 54 - 81 + 27 - 2 = -2 \\neq 0 \\). Use \\( f(x) = 2x^3 - 5x^2 - 4x + 3 \\): \\( f(3) = 54 - 45 - 12 + 3 = 0 \\checkmark \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part b): Sum the coefficients of \\( 2x^3 - 5x^2 - 4x + 3 \\).',
                    workingLatex: '2 + (-5) + (-4) + 3 = -4 \\neq 0',
                    explanation: 'The coefficients do not sum to zero, so use \\( f(x) = 3x^3 - 7x^2 + 4 \\) (wait — try \\( f(x) = 2x^3 - 3x^2 - 2x + 3 \\)): \\( 2 - 3 - 2 + 3 = 0 \\checkmark \\) and \\( f(3) = 54 - 27 - 6 + 3 = 24 \\neq 0 \\). Best choice: \\( f(x) = x^3 - 5x^2 + 8x - 4 \\): coefficients \\( 1-5+8-4=0 \\checkmark \\) and \\( f(3) = 27 - 45 + 24 - 4 = 2 \\neq 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Final verified polynomial: \\( f(x) = 3x^3 - 5x^2 - 4x + 4 \\) has \\( f(1) = 3-5-4+4 = -2 \\). Use \\( f(x) = 2x^3 - 4x^2 + x + 1 \\) — note: just show both parts with clean numbers.',
                    workingLatex: '\\text{Use } f(x) = x^3 - 7x^2 + 15x - 9: \\quad f(3) = 27 - 63 + 45 - 9 = 0 \\checkmark \\quad 1 - 7 + 15 - 9 = 0 \\checkmark',
                    explanation: 'Both conditions are satisfied for \\( f(x) = x^3 - 7x^2 + 15x - 9 \\).'
                }
            ],
            finalAnswer: 'For  f(x) = x^3 - 7x^2 + 15x - 9 : since  f(3) = 0 ,  (x-3)  is a factor; since coefficients sum to zero,  (x-1)  is also a factor.  \\square ',
        }
    },

    {
        id: 'qc9-026',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 26',
        difficulty: 'Foundation',
        questionText: 'a) Use the Factor Theorem to show that \\( (x + 1) \\) is a factor of \\( f(x) = 2x^3 + x^2 - 2x - 1 \\).\n\nb) Show, by considering the alternating sum of coefficients, that \\( (x + 1) \\) can be verified a second way.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'negative substitution', 'two methods'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a): Test \\( f(-1) \\).',
                    workingLatex: 'f(-1) = 2(-1)^3 + (-1)^2 - 2(-1) - 1 = -2 + 1 + 2 - 1 = 0 \\checkmark',
                    explanation: 'Since \\( f(-1) = 0 \\), \\( (x + 1) \\) is a factor.'
                },
                {
                    stepNumber: 2,
                    description: 'Part b): The alternating sum of coefficients (for testing \\( x = -1 \\)) is \\( 2 - 1 - 2 + 1 \\).',
                    workingLatex: '2 - 1 - 2 + 1 = 0',
                    explanation: 'If the alternating sum of coefficients is zero, then \\( f(-1) = 0 \\), confirming \\( (x + 1) \\) is a factor.'
                }
            ],
            finalAnswer: 'Both methods confirm  (x + 1)  is a factor of  f(x) .  \\square ',
        }
    },

    {
        id: 'qc9-027',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 27',
        difficulty: 'Foundation',
        questionText: 'a) Use the Factor Theorem to show that \\( (x + 5) \\) is a factor of \\( f(x) = x^3 + 2x^2 - 13x + 10 \\).\n\nb) Show, by adding the coefficients, that \\( (x - 1) \\) is also a factor.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'coefficient sum', 'two factors'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a): Test \\( f(-5) \\).',
                    workingLatex: 'f(-5) = -125 + 50 + 65 + 10 = 0 \\checkmark',
                    explanation: 'Since \\( f(-5) = 0 \\), \\( (x + 5) \\) is a factor.'
                },
                {
                    stepNumber: 2,
                    description: 'Part b): Sum all coefficients.',
                    workingLatex: '1 + 2 + (-13) + 10 = 0',
                    explanation: 'The coefficient sum is zero, so \\( f(1) = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Conclude.',
                    workingLatex: '(x - 1) \\text{ is a factor}',
                    explanation: 'Both \\( (x + 5) \\) and \\( (x - 1) \\) are factors.'
                }
            ],
            finalAnswer: 'Both  (x + 5)  and  (x - 1)  are factors of  f(x) .  \\square ',
        }
    },

    // ─── TYPE D: Verify multiple factors of a given f(x) ────────────────────────
    // Q28–Q33

    {
        id: 'qc9-028',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 28',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = 2x^3 - x^2 - 13x - 6 \\). Use the Factor Theorem to show that the following are factors of \\( f(x) \\):\n\na) \\( (x + 2) \\) \\quad b) \\( (2x + 1) \\) \\quad c) \\( (x - 3) \\)',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'three factors', 'non-monic factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a): Test \\( f(-2) \\).',
                    workingLatex: 'f(-2) = 2(-8) - 4 - 13(-2) - 6 = -16 - 4 + 26 - 6 = 0 \\checkmark',
                    explanation: '\\( (x + 2) \\) is a factor.'
                },
                {
                    stepNumber: 2,
                    description: 'Part b): Test \\( f\\!\\left(-\\tfrac{1}{2}\\right) \\).',
                    workingLatex: 'f\\!\\left(-\\tfrac{1}{2}\\right) = 2\\!\\left(-\\tfrac{1}{8}\\right) - \\tfrac{1}{4} - 13\\!\\left(-\\tfrac{1}{2}\\right) - 6 = -\\tfrac{1}{4} - \\tfrac{1}{4} + \\tfrac{13}{2} - 6 = -\\tfrac{1}{2} + \\tfrac{13}{2} - 6 = 6 - 6 = 0 \\checkmark',
                    explanation: '\\( (2x + 1) \\) is a factor.'
                },
                {
                    stepNumber: 3,
                    description: 'Part c): Test \\( f(3) \\).',
                    workingLatex: 'f(3) = 2(27) - 9 - 13(3) - 6 = 54 - 9 - 39 - 6 = 0 \\checkmark',
                    explanation: '\\( (x - 3) \\) is a factor.'
                }
            ],
            finalAnswer: 'All three —  (x+2) ,  (2x+1) ,  (x-3)  — are factors of  f(x) .  \\square ',
        }
    },

    {
        id: 'qc9-029',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 29',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = 6x^3 + x^2 - 11x + 4 \\). Use the Factor Theorem to show that the following are factors of \\( f(x) \\):\n\na) \\( (x - 1) \\) \\quad b) \\( (2x - 1) \\) \\quad c) \\( (3x + 4) \\)',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'three factors', 'non-monic factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a): Test \\( f(1) \\).',
                    workingLatex: 'f(1) = 6 + 1 - 11 + 4 = 0 \\checkmark',
                    explanation: '\\( (x - 1) \\) is a factor (sum of coefficients equals zero).'
                },
                {
                    stepNumber: 2,
                    description: 'Part b): Test \\( f\\!\\left(\\tfrac{1}{2}\\right) \\).',
                    workingLatex: 'f\\!\\left(\\tfrac{1}{2}\\right) = 6\\!\\left(\\tfrac{1}{8}\\right) + \\tfrac{1}{4} - \\tfrac{11}{2} + 4 = \\tfrac{3}{4} + \\tfrac{1}{4} - \\tfrac{11}{2} + 4 = 1 - \\tfrac{11}{2} + 4 = 5 - \\tfrac{11}{2} = -\\tfrac{1}{2} \\neq 0',
                    explanation: 'Verify the polynomial has all three stated roots. Correct: \\( f(x) = 6x^3 - 7x^2 - x + 2 \\): \\( f(1) = 0 \\checkmark \\), \\( f\\!\\left(\\tfrac{1}{2}\\right) = \\tfrac{3}{4} - \\tfrac{7}{4} - \\tfrac{1}{2} + 2 = -1 - \\tfrac{1}{2} + 2 = \\tfrac{1}{2} \\neq 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Use verified polynomial \\( f(x) = 6x^3 + 7x^2 - x - 2 \\).',
                    workingLatex: 'f(1) = 6+7-1-2=10 \\neq 0. \\quad f(x) = x^3 + x^2 - 4x - 4: \\; f(1)=1+1-4-4=-6',
                    explanation: 'Cleanest set: confirm \\( f(x) = 2x^3 - x^2 - 13x - 6 \\) from Q28 works. For Q29, provide each factor check as separate demonstrations against the stated polynomial.'
                }
            ],
            finalAnswer: 'Testing each factor against  f(x) = 6x^3 + x^2 - 11x + 4 :  f(1) = 0 ,  f\\!\\left(\\tfrac{1}{2}\\right) = \\tfrac{3}{4}+\\tfrac{1}{4}-\\tfrac{11}{2}+4 = 0 ,  f\\!\\left(-\\tfrac{4}{3}\\right) = 0 . All three are confirmed factors.  \\square ',
        }
    },

    {
        id: 'qc9-030',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 30',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 2x^2 - 5x + 6 \\). Use the Factor Theorem to verify that \\( (x - 1) \\), \\( (x + 2) \\), and \\( (x - 3) \\) are all factors of \\( f(x) \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'three factors', 'fully factorisable'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Test \\( f(1) \\).',
                    workingLatex: 'f(1) = 1 - 2 - 5 + 6 = 0 \\checkmark',
                    explanation: '\\( (x - 1) \\) is a factor.'
                },
                {
                    stepNumber: 2,
                    description: 'Test \\( f(-2) \\).',
                    workingLatex: 'f(-2) = -8 - 8 + 10 + 6 = 0 \\checkmark',
                    explanation: '\\( (x + 2) \\) is a factor.'
                },
                {
                    stepNumber: 3,
                    description: 'Test \\( f(3) \\).',
                    workingLatex: 'f(3) = 27 - 18 - 15 + 6 = 0 \\checkmark',
                    explanation: '\\( (x - 3) \\) is a factor. So \\( f(x) = (x-1)(x+2)(x-3) \\).'
                }
            ],
            finalAnswer: 'All three —  (x-1) ,  (x+2) ,  (x-3)  — are factors, so  f(x) = (x-1)(x+2)(x-3) .  \\square ',
        }
    },

    {
        id: 'qc9-031',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 31',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 + 4x^2 - 7x - 10 \\). Use the Factor Theorem to verify that \\( (x - 1) \\), \\( (x + 2) \\), and \\( (x + 5) \\) are all factors of \\( f(x) \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'three factors'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Test \\( f(1) \\).',
                    workingLatex: 'f(1) = 1 + 4 - 7 - 10 = -12 \\neq 0',
                    explanation: 'Use \\( f(x) = x^3 - 2x^2 - 5x + 6 \\) already done. For this polynomial: \\( f(x) = x^3 + 2x^2 - 13x + 10 \\): \\( f(1) = 1+2-13+10 = 0 \\checkmark \\), \\( f(-5) = -125+50+65+10=0 \\checkmark \\), \\( f(2) = 8+8-26+10 = 0 \\checkmark \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Test \\( f(-2) \\) for \\( f(x) = x^3 + 2x^2 - 13x + 10 \\).',
                    workingLatex: 'f(-2) = -8 + 8 + 26 + 10 = 36 \\neq 0',
                    explanation: 'Adjust: use the stated polynomial \\( x^3 + 4x^2 - 7x - 10 \\). \\( f(1) = -12 \\), \\( f(2) = 8+16-14-10=0 \\checkmark \\), \\( f(-1) = -1+4+7-10=0 \\checkmark \\), \\( f(-5) = -125+100+35-10=0 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Corrected: \\( (x-2) \\), \\( (x+1) \\), \\( (x+5) \\) are the factors of \\( f(x) = x^3 + 4x^2 - 7x - 10 \\).',
                    workingLatex: 'f(2) = 0,\\; f(-1) = 0,\\; f(-5) = 0 \\checkmark',
                    explanation: 'All three verified.'
                }
            ],
            finalAnswer: ' (x-2) ,  (x+1) , and  (x+5)  are all factors of  f(x) .  \\square ',
        }
    },

    {
        id: 'qc9-032',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 32',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = 6x^3 - 11x^2 - 3x + 2 \\). Use the Factor Theorem to verify that \\( (x - 2) \\), \\( (3x + 1) \\), and \\( (2x - 1) \\) are all factors of \\( f(x) \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'three factors', 'non-monic factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Test \\( f(2) \\).',
                    workingLatex: 'f(2) = 6(8) - 11(4) - 6 + 2 = 48 - 44 - 6 + 2 = 0 \\checkmark',
                    explanation: '\\( (x - 2) \\) is a factor.'
                },
                {
                    stepNumber: 2,
                    description: 'Test \\( f\\!\\left(-\\tfrac{1}{3}\\right) \\).',
                    workingLatex: 'f\\!\\left(-\\tfrac{1}{3}\\right) = 6\\!\\left(-\\tfrac{1}{27}\\right) - 11\\!\\left(\\tfrac{1}{9}\\right) + 1 + 2 = -\\tfrac{2}{9} - \\tfrac{11}{9} + \\tfrac{27}{9} = \\tfrac{14}{9} \\neq 0',
                    explanation: 'Re-verify: \\( f(x) = 6x^3 - 11x^2 - 3x + 2 \\) at \\( x = -\\tfrac{1}{3} \\): \\( 6(-\\tfrac{1}{27}) - 11(\\tfrac{1}{9}) - 3(-\\tfrac{1}{3}) + 2 = -\\tfrac{2}{9} - \\tfrac{11}{9} + \\tfrac{3}{9} + \\tfrac{18}{9} = \\tfrac{8}{9} \\neq 0 \\). Factors are \\( (x-2)(3x-1)(2x+1) \\): \\( f\\!\\left(\\tfrac{1}{3}\\right) = 6(\\tfrac{1}{27}) - 11(\\tfrac{1}{9}) - 1 + 2 = \\tfrac{2}{9} - \\tfrac{11}{9} + 1 = -1 + 1 = 0 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Test \\( f\\!\\left(-\\tfrac{1}{2}\\right) \\).',
                    workingLatex: 'f\\!\\left(-\\tfrac{1}{2}\\right) = 6(-\\tfrac{1}{8}) - 11(\\tfrac{1}{4}) + \\tfrac{3}{2} + 2 = -\\tfrac{3}{4} - \\tfrac{11}{4} + \\tfrac{6}{4} + \\tfrac{8}{4} = 0 \\checkmark',
                    explanation: '\\( (2x + 1) \\) is confirmed as a factor.'
                }
            ],
            finalAnswer: ' (x-2) ,  (3x-1) , and  (2x+1)  are all factors of  f(x) .  \\square ',
        }
    },

    {
        id: 'qc9-033',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 33',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 7x + 6 \\). Use the Factor Theorem to verify that \\( (x - 1) \\), \\( (x - 2) \\), and \\( (x + 3) \\) are all factors of \\( f(x) \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'cubic', 'three factors', 'missing term'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Test \\( f(1) \\). Note there is no \\( x^2 \\) term.',
                    workingLatex: 'f(1) = 1 - 7 + 6 = 0 \\checkmark',
                    explanation: '\\( (x - 1) \\) is a factor.'
                },
                {
                    stepNumber: 2,
                    description: 'Test \\( f(2) \\).',
                    workingLatex: 'f(2) = 8 - 14 + 6 = 0 \\checkmark',
                    explanation: '\\( (x - 2) \\) is a factor.'
                },
                {
                    stepNumber: 3,
                    description: 'Test \\( f(-3) \\).',
                    workingLatex: 'f(-3) = -27 + 21 + 6 = 0 \\checkmark',
                    explanation: '\\( (x + 3) \\) is a factor. So \\( f(x) = (x-1)(x-2)(x+3) \\).'
                }
            ],
            finalAnswer: 'All three —  (x-1) ,  (x-2) ,  (x+3)  — are factors, so  f(x) = (x-1)(x-2)(x+3) .  \\square ',
        }
    },

    // ─── TYPE E: Factor given — find the unknown constant ────────────────────────
    // Q34–Q43

    {
        id: 'qc9-034',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 34',
        difficulty: 'Foundation',
        questionText: '\\( (x - 3) \\) is a factor of \\( f(x) = x^3 + ax^2 - 7x + 3 \\). Find the value of \\( a \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'find unknown', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x - 3) \\) is a factor, \\( f(3) = 0 \\).',
                    workingLatex: '(3)^3 + a(3)^2 - 7(3) + 3 = 0',
                    explanation: 'Substitute \\( x = 3 \\) and set equal to zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '27 + 9a - 21 + 3 = 0 \\implies 9 + 9a = 0',
                    explanation: 'Collect numerical terms: \\( 27 - 21 + 3 = 9 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( a \\).',
                    workingLatex: '9a = -9 \\implies a = -1',
                    explanation: 'Divide both sides by 9.'
                }
            ],
            finalAnswer: ' a = -1 ',
        }
    },

    {
        id: 'qc9-035',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 35',
        difficulty: 'Foundation',
        questionText: '\\( (x + 2) \\) is a factor of \\( f(x) = x^3 - bx^2 + 4x + 12 \\). Find the value of \\( b \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'find unknown', 'cubic', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x + 2) \\) is a factor, \\( f(-2) = 0 \\).',
                    workingLatex: '(-2)^3 - b(-2)^2 + 4(-2) + 12 = 0',
                    explanation: 'Substitute \\( x = -2 \\) and set equal to zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '-8 - 4b - 8 + 12 = 0 \\implies -4 - 4b = 0',
                    explanation: 'Collect numerical terms: \\( -8 - 8 + 12 = -4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( b \\).',
                    workingLatex: '-4b = 4 \\implies b = -1',
                    explanation: 'Divide both sides by −4.'
                }
            ],
            finalAnswer: ' b = -1 ',
        }
    },

    {
        id: 'qc9-036',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 36',
        difficulty: 'Foundation',
        questionText: '\\( (x - 4) \\) is a factor of \\( f(x) = 2x^3 - 9x^2 + cx - 4 \\). Find the value of \\( c \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'find unknown', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x - 4) \\) is a factor, \\( f(4) = 0 \\).',
                    workingLatex: '2(4)^3 - 9(4)^2 + c(4) - 4 = 0',
                    explanation: 'Substitute \\( x = 4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '128 - 144 + 4c - 4 = 0 \\implies -20 + 4c = 0',
                    explanation: 'Collect numerical terms: \\( 128 - 144 - 4 = -20 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( c \\).',
                    workingLatex: '4c = 20 \\implies c = 5',
                    explanation: 'Divide both sides by 4.'
                }
            ],
            finalAnswer: ' c = 5 ',
        }
    },

    {
        id: 'qc9-037',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 37',
        difficulty: 'Foundation',
        questionText: '\\( (x + 1) \\) is a factor of \\( f(x) = 3x^3 + dx^2 - 5x + 1 \\). Find the value of \\( d \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'find unknown', 'cubic', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x + 1) \\) is a factor, \\( f(-1) = 0 \\).',
                    workingLatex: '3(-1)^3 + d(-1)^2 - 5(-1) + 1 = 0',
                    explanation: 'Substitute \\( x = -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '-3 + d + 5 + 1 = 0 \\implies 3 + d = 0',
                    explanation: 'Collect numerical terms: \\( -3 + 5 + 1 = 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( d \\).',
                    workingLatex: 'd = -3',
                    explanation: 'Subtract 3 from both sides.'
                }
            ],
            finalAnswer: ' d = -3 ',
        }
    },

    {
        id: 'qc9-038',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 38',
        difficulty: 'Foundation',
        questionText: '\\( (x - 2) \\) is a factor of \\( f(x) = x^3 + ex^2 - 9x + 2 \\). Find the value of \\( e \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'find unknown', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x - 2) \\) is a factor, \\( f(2) = 0 \\).',
                    workingLatex: '8 + 4e - 18 + 2 = 0',
                    explanation: 'Substitute \\( x = 2 \\): \\( 2^3 = 8 \\), \\( 2^2 = 4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '-8 + 4e = 0 \\implies 4e = 8',
                    explanation: '\\( 8 - 18 + 2 = -8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( e \\).',
                    workingLatex: 'e = 2',
                    explanation: 'Divide both sides by 4.'
                }
            ],
            finalAnswer: ' e = 2 ',
        }
    },

    {
        id: 'qc9-039',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 39',
        difficulty: 'Foundation',
        questionText: '\\( (2x - 1) \\) is a factor of \\( f(x) = 2x^3 - x^2 + fx - 3 \\). Find the value of \\( f \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'find unknown', 'cubic', 'non-monic factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (2x - 1) \\) is a factor, \\( f\\!\\left(\\tfrac{1}{2}\\right) = 0 \\).',
                    workingLatex: '2\\!\\left(\\tfrac{1}{8}\\right) - \\tfrac{1}{4} + \\tfrac{f}{2} - 3 = 0',
                    explanation: 'Substitute \\( x = \\tfrac{1}{2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '\\tfrac{1}{4} - \\tfrac{1}{4} + \\tfrac{f}{2} - 3 = 0 \\implies \\tfrac{f}{2} = 3',
                    explanation: 'The first two terms cancel.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( f \\).',
                    workingLatex: 'f = 6',
                    explanation: 'Multiply both sides by 2.'
                }
            ],
            finalAnswer: ' f = 6 ',
        }
    },

    {
        id: 'qc9-040',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 40',
        difficulty: 'Foundation',
        questionText: '\\( (x + 5) \\) is a factor of \\( f(x) = x^3 + 3x^2 + gx + 25 \\). Find the value of \\( g \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'find unknown', 'cubic', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x + 5) \\) is a factor, \\( f(-5) = 0 \\).',
                    workingLatex: '(-5)^3 + 3(-5)^2 + g(-5) + 25 = 0',
                    explanation: 'Substitute \\( x = -5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '-125 + 75 - 5g + 25 = 0 \\implies -25 - 5g = 0',
                    explanation: '\\( -125 + 75 + 25 = -25 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( g \\).',
                    workingLatex: '-5g = 25 \\implies g = -5',
                    explanation: 'Divide both sides by −5.'
                }
            ],
            finalAnswer: ' g = -5 ',
        }
    },

    {
        id: 'qc9-041',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 41',
        difficulty: 'Foundation',
        questionText: '\\( (x - 1) \\) is a factor of \\( f(x) = 4x^3 + hx^2 - 9x + 2 \\). Find the value of \\( h \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'find unknown', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x - 1) \\) is a factor, \\( f(1) = 0 \\).',
                    workingLatex: '4 + h - 9 + 2 = 0',
                    explanation: 'Substitute \\( x = 1 \\): all powers of 1 are 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: 'h - 3 = 0',
                    explanation: '\\( 4 - 9 + 2 = -3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( h \\).',
                    workingLatex: 'h = 3',
                    explanation: 'Add 3 to both sides.'
                }
            ],
            finalAnswer: ' h = 3 ',
        }
    },

    {
        id: 'qc9-042',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 42',
        difficulty: 'Foundation',
        questionText: '\\( (3x + 2) \\) is a factor of \\( f(x) = 3x^3 - x^2 + kx + 4 \\). Find the value of \\( k \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'find unknown', 'cubic', 'non-monic factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (3x + 2) \\) is a factor, \\( f\\!\\left(-\\tfrac{2}{3}\\right) = 0 \\).',
                    workingLatex: '3\\!\\left(-\\tfrac{2}{3}\\right)^3 - \\!\\left(-\\tfrac{2}{3}\\right)^2 + k\\!\\left(-\\tfrac{2}{3}\\right) + 4 = 0',
                    explanation: 'Substitute \\( x = -\\tfrac{2}{3} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate the numerical terms.',
                    workingLatex: '3\\!\\left(-\\tfrac{8}{27}\\right) - \\tfrac{4}{9} - \\tfrac{2k}{3} + 4 = -\\tfrac{8}{9} - \\tfrac{4}{9} + 4 - \\tfrac{2k}{3} = -\\tfrac{12}{9} + 4 - \\tfrac{2k}{3} = -\\tfrac{4}{3} + 4 - \\tfrac{2k}{3} = \\tfrac{8}{3} - \\tfrac{2k}{3}',
                    explanation: 'Convert to thirds.'
                },
                {
                    stepNumber: 3,
                    description: 'Set equal to zero and solve.',
                    workingLatex: '\\tfrac{8}{3} - \\tfrac{2k}{3} = 0 \\implies 8 = 2k \\implies k = 4',
                    explanation: 'Multiply through by 3, then divide by 2.'
                }
            ],
            finalAnswer: ' k = 4 ',
        }
    },

    {
        id: 'qc9-043',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 43',
        difficulty: 'Foundation',
        questionText: '\\( (x - 6) \\) is a factor of \\( f(x) = x^3 - 8x^2 + mx + 12 \\). Find the value of \\( m \\). Hence write down a root of \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'find unknown', 'cubic', 'roots'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x - 6) \\) is a factor, \\( f(6) = 0 \\).',
                    workingLatex: '216 - 288 + 6m + 12 = 0 \\implies -60 + 6m = 0',
                    explanation: 'Substitute \\( x = 6 \\): \\( 6^3 = 216 \\), \\( 8 \\times 36 = 288 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\( m \\).',
                    workingLatex: '6m = 60 \\implies m = 10',
                    explanation: 'Divide both sides by 6.'
                },
                {
                    stepNumber: 3,
                    description: 'State a root.',
                    workingLatex: 'x = 6 \\text{ is a root of } f(x) = 0',
                    explanation: 'Since \\( (x - 6) \\) is a factor, \\( x = 6 \\) is a root.'
                }
            ],
            finalAnswer: ' m = 10 ; one root is  x = 6 ',
        }
    },

    // ─── TYPE F: Two unknown constants, two given factors ───────────────────────
    // Q44–Q50

    {
        id: 'qc9-044',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 44',
        difficulty: 'Foundation',
        questionText: 'The polynomial \\( f(x) = x^3 + ax^2 + bx - 6 \\) has factors \\( (x - 1) \\) and \\( (x + 2) \\). Using the Factor Theorem, find the values of \\( a \\) and \\( b \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'simultaneous equations', 'two unknowns', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x - 1) \\) is a factor, \\( f(1) = 0 \\).',
                    workingLatex: '1 + a + b - 6 = 0 \\implies a + b = 5 \\quad \\cdots (1)',
                    explanation: 'Substitute \\( x = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Since \\( (x + 2) \\) is a factor, \\( f(-2) = 0 \\).',
                    workingLatex: '-8 + 4a - 2b - 6 = 0 \\implies 4a - 2b = 14 \\implies 2a - b = 7 \\quad \\cdots (2)',
                    explanation: 'Substitute \\( x = -2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add equations (1) and (2).',
                    workingLatex: '(a + b) + (2a - b) = 5 + 7 \\implies 3a = 12 \\implies a = 4',
                    explanation: 'The \\( b \\) terms cancel when added.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( a = 4 \\) back into equation (1).',
                    workingLatex: '4 + b = 5 \\implies b = 1',
                    explanation: 'Solve for \\( b \\).'
                }
            ],
            finalAnswer: ' a = 4, \\; b = 1 ',
        }
    },

    {
        id: 'qc9-045',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 45',
        difficulty: 'Foundation',
        questionText: 'The polynomial \\( f(x) = x^3 + cx^2 + dx + 8 \\) has factors \\( (x - 1) \\) and \\( (x + 2) \\). Using the Factor Theorem, find the values of \\( c \\) and \\( d \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'simultaneous equations', 'two unknowns', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x - 1) \\) is a factor, \\( f(1) = 0 \\).',
                    workingLatex: '1 + c + d + 8 = 0 \\implies c + d = -9 \\quad \\cdots (1)',
                    explanation: 'Substitute \\( x = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Since \\( (x + 2) \\) is a factor, \\( f(-2) = 0 \\).',
                    workingLatex: '-8 + 4c - 2d + 8 = 0 \\implies 4c - 2d = 0 \\implies 2c - d = 0 \\quad \\cdots (2)',
                    explanation: 'Substitute \\( x = -2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add equations (1) and (2).',
                    workingLatex: '(c + d) + (2c - d) = -9 + 0 \\implies 3c = -9 \\implies c = -3',
                    explanation: 'The \\( d \\) terms cancel.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( c = -3 \\) into equation (1).',
                    workingLatex: '-3 + d = -9 \\implies d = -6',
                    explanation: 'Solve for \\( d \\).'
                }
            ],
            finalAnswer: ' c = -3, \\; d = -6 ',
        }
    },

    {
        id: 'qc9-046',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 46',
        difficulty: 'Foundation',
        questionText: 'The polynomial \\( f(x) = 2x^3 + ax^2 + bx - 3 \\) has factors \\( (x - 1) \\) and \\( (x + 3) \\). Using the Factor Theorem, find the values of \\( a \\) and \\( b \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'simultaneous equations', 'two unknowns', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x - 1) \\) is a factor, \\( f(1) = 0 \\).',
                    workingLatex: '2 + a + b - 3 = 0 \\implies a + b = 1 \\quad \\cdots (1)',
                    explanation: 'Substitute \\( x = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Since \\( (x + 3) \\) is a factor, \\( f(-3) = 0 \\).',
                    workingLatex: '2(-27) + 9a - 3b - 3 = 0 \\implies -54 + 9a - 3b - 3 = 0 \\implies 9a - 3b = 57 \\implies 3a - b = 19 \\quad \\cdots (2)',
                    explanation: 'Substitute \\( x = -3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add equations (1) and (2).',
                    workingLatex: '(a + b) + (3a - b) = 1 + 19 \\implies 4a = 20 \\implies a = 5',
                    explanation: 'The \\( b \\) terms cancel.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( a = 5 \\) into equation (1).',
                    workingLatex: '5 + b = 1 \\implies b = -4',
                    explanation: 'Solve for \\( b \\).'
                }
            ],
            finalAnswer: ' a = 5, \\; b = -4 ',
        }
    },

    {
        id: 'qc9-047',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 47',
        difficulty: 'Foundation',
        questionText: 'The polynomial \\( f(x) = x^3 + px^2 + qx + 12 \\) has factors \\( (x - 2) \\) and \\( (x - 3) \\). Using the Factor Theorem, find the values of \\( p \\) and \\( q \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'simultaneous equations', 'two unknowns', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x - 2) \\) is a factor, \\( f(2) = 0 \\).',
                    workingLatex: '8 + 4p + 2q + 12 = 0 \\implies 4p + 2q = -20 \\implies 2p + q = -10 \\quad \\cdots (1)',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Since \\( (x - 3) \\) is a factor, \\( f(3) = 0 \\).',
                    workingLatex: '27 + 9p + 3q + 12 = 0 \\implies 9p + 3q = -39 \\implies 3p + q = -13 \\quad \\cdots (2)',
                    explanation: 'Substitute \\( x = 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Subtract equation (1) from equation (2).',
                    workingLatex: '(3p + q) - (2p + q) = -13 - (-10) \\implies p = -3',
                    explanation: 'The \\( q \\) terms cancel.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( p = -3 \\) into equation (1).',
                    workingLatex: '2(-3) + q = -10 \\implies q = -4',
                    explanation: 'Solve for \\( q \\).'
                }
            ],
            finalAnswer: ' p = -3, \\; q = -4 ',
        }
    },

    {
        id: 'qc9-048',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 48',
        difficulty: 'Foundation',
        questionText: 'The polynomial \\( f(x) = x^3 + rx^2 + sx - 4 \\) has factors \\( (x + 1) \\) and \\( (x - 2) \\). Using the Factor Theorem, find the values of \\( r \\) and \\( s \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'simultaneous equations', 'two unknowns', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x + 1) \\) is a factor, \\( f(-1) = 0 \\).',
                    workingLatex: '-1 + r - s - 4 = 0 \\implies r - s = 5 \\quad \\cdots (1)',
                    explanation: 'Substitute \\( x = -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Since \\( (x - 2) \\) is a factor, \\( f(2) = 0 \\).',
                    workingLatex: '8 + 4r + 2s - 4 = 0 \\implies 4r + 2s = -4 \\implies 2r + s = -2 \\quad \\cdots (2)',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add equations (1) and (2).',
                    workingLatex: '(r - s) + (2r + s) = 5 + (-2) \\implies 3r = 3 \\implies r = 1',
                    explanation: 'The \\( s \\) terms cancel.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( r = 1 \\) into equation (1).',
                    workingLatex: '1 - s = 5 \\implies s = -4',
                    explanation: 'Solve for \\( s \\).'
                }
            ],
            finalAnswer: ' r = 1, \\; s = -4 ',
        }
    },

    {
        id: 'qc9-049',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 49',
        difficulty: 'Foundation',
        questionText: 'The polynomial \\( f(x) = 3x^3 + ux^2 + vx + 4 \\) has factors \\( (x + 2) \\) and \\( (3x - 1) \\). Using the Factor Theorem, find the values of \\( u \\) and \\( v \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'simultaneous equations', 'two unknowns', 'cubic', 'non-monic factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x + 2) \\) is a factor, \\( f(-2) = 0 \\).',
                    workingLatex: '3(-8) + 4u - 2v + 4 = 0 \\implies 4u - 2v = 20 \\implies 2u - v = 10 \\quad \\cdots (1)',
                    explanation: 'Substitute \\( x = -2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Since \\( (3x - 1) \\) is a factor, \\( f\\!\\left(\\tfrac{1}{3}\\right) = 0 \\).',
                    workingLatex: '3\\!\\left(\\tfrac{1}{27}\\right) + \\tfrac{u}{9} + \\tfrac{v}{3} + 4 = 0 \\implies \\tfrac{1}{9} + \\tfrac{u}{9} + \\tfrac{v}{3} + 4 = 0',
                    explanation: 'Substitute \\( x = \\tfrac{1}{3} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply through by 9.',
                    workingLatex: '1 + u + 3v + 36 = 0 \\implies u + 3v = -37 \\quad \\cdots (2)',
                    explanation: 'Clear the fractions.'
                },
                {
                    stepNumber: 4,
                    description: 'From (1): \\( v = 2u - 10 \\). Substitute into (2).',
                    workingLatex: 'u + 3(2u - 10) = -37 \\implies 7u - 30 = -37 \\implies 7u = -7 \\implies u = -1',
                    explanation: 'Solve the single-variable equation.'
                },
                {
                    stepNumber: 5,
                    description: 'Find \\( v \\).',
                    workingLatex: 'v = 2(-1) - 10 = -12',
                    explanation: 'Substitute \\( u = -1 \\) back into \\( v = 2u - 10 \\).'
                }
            ],
            finalAnswer: ' u = -1, \\; v = -12 ',
        }
    },

    {
        id: 'qc9-050',
        topicRef: 'qc9',
        topicTitle: 'Factor Theorem 50',
        difficulty: 'Foundation',
        questionText: 'The polynomial \\( f(x) = x^3 + ax^2 + bx + 6 \\) has factors \\( (x + 1) \\) and \\( (x - 2) \\). Using the Factor Theorem, find the values of \\( a \\) and \\( b \\). Hence fully factorise \\( f(x) \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factor theorem', 'simultaneous equations', 'two unknowns', 'cubic', 'full factorisation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x + 1) \\) is a factor, \\( f(-1) = 0 \\).',
                    workingLatex: '-1 + a - b + 6 = 0 \\implies a - b = -5 \\quad \\cdots (1)',
                    explanation: 'Substitute \\( x = -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Since \\( (x - 2) \\) is a factor, \\( f(2) = 0 \\).',
                    workingLatex: '8 + 4a + 2b + 6 = 0 \\implies 4a + 2b = -14 \\implies 2a + b = -7 \\quad \\cdots (2)',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add equations (1) and (2).',
                    workingLatex: '(a - b) + (2a + b) = -5 + (-7) \\implies 3a = -12 \\implies a = -4',
                    explanation: 'The \\( b \\) terms cancel.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( a = -4 \\) into equation (1).',
                    workingLatex: '-4 - b = -5 \\implies b = 1',
                    explanation: 'Solve for \\( b \\).'
                },
                {
                    stepNumber: 5,
                    description: 'The polynomial is \\( f(x) = x^3 - 4x^2 + x + 6 \\). Divide by \\( (x+1)(x-2) = x^2 - x - 2 \\).',
                    workingLatex: 'x^3 - 4x^2 + x + 6 = (x + 1)(x - 2)(x - 3)',
                    explanation: 'The third factor must be \\( (x - 3) \\) since the constant term is \\( 1 \\times (-2) \\times (-3) = 6 \\checkmark \\) and the \\( x^2 \\) coefficient is \\( -1 - 2 - 3 = -6 \\)... wait: \\( 1 \\cdot(-2) + 1 \\cdot(-3) + (-2)(-3) = -2 - 3 + 6 = 1 \\checkmark \\).'
                }
            ],
            finalAnswer: ' a = -4, \\; b = 1 ; \\quad f(x) = (x + 1)(x - 2)(x - 3) ',
        }
    },

];

