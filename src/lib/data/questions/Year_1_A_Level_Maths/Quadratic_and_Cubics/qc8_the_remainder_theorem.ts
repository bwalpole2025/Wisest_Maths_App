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

    // Topic: The Remainder Theorem
    // topicRef: a15
    // 50 questions — Foundation difficulty

    // ─── TYPE A: Find the remainder — cubic divided by (x − a) ─────────────────

    {
        id: 'qc8-001',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 01',
        difficulty: 'Foundation',
        questionText: 'Use the Remainder Theorem to find the remainder when \\( x^3 - 4x^2 + x + 6 \\) is divided by \\( (x - 1) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'cubic', 'polynomial division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'By the Remainder Theorem, the remainder when dividing by \\( (x - 1) \\) is \\( f(1) \\).',
                    workingLatex: 'f(1) = (1)^3 - 4(1)^2 + (1) + 6',
                    explanation: 'Substitute \\( x = 1 \\) into the polynomial.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(1) = 1 - 4 + 1 + 6 = 4',
                    explanation: 'Carry out the arithmetic carefully.'
                }
            ],
            finalAnswer: 'Remainder  = 4 ',
        }
    },

    {
        id: 'qc8-002',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 02',
        difficulty: 'Foundation',
        questionText: 'Use the Remainder Theorem to find the remainder when \\( x^3 + 2x^2 - 5x - 6 \\) is divided by \\( (x - 2) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'cubic', 'polynomial division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The remainder when dividing by \\( (x - 2) \\) is \\( f(2) \\).',
                    workingLatex: 'f(2) = (2)^3 + 2(2)^2 - 5(2) - 6',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(2) = 8 + 8 - 10 - 6 = 0',
                    explanation: 'The remainder is 0, which means \\( (x-2) \\) is actually a factor.'
                }
            ],
            finalAnswer: 'Remainder  = 0 ',
        }
    },

    {
        id: 'qc8-003',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 03',
        difficulty: 'Foundation',
        questionText: 'Use the Remainder Theorem to find the remainder when \\( 3x^3 - 2x^2 + x - 5 \\) is divided by \\( (x - 2) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'cubic', 'polynomial division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The remainder is \\( f(2) \\).',
                    workingLatex: 'f(2) = 3(2)^3 - 2(2)^2 + (2) - 5',
                    explanation: 'Substitute \\( x = 2 \\) into the polynomial.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(2) = 24 - 8 + 2 - 5 = 13',
                    explanation: 'Evaluate each term: \\( 3 \\times 8 = 24 \\), \\( 2 \\times 4 = 8 \\).'
                }
            ],
            finalAnswer: 'Remainder  = 13 ',
        }
    },

    {
        id: 'qc8-004',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 04',
        difficulty: 'Foundation',
        questionText: 'Use the Remainder Theorem to find the remainder when \\( 2x^3 + x^2 - 8x + 3 \\) is divided by \\( (x + 1) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'cubic', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Dividing by \\( (x + 1) = (x - (-1)) \\), so the remainder is \\( f(-1) \\).',
                    workingLatex: 'f(-1) = 2(-1)^3 + (-1)^2 - 8(-1) + 3',
                    explanation: 'Substitute \\( x = -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(-1) = -2 + 1 + 8 + 3 = 10',
                    explanation: 'Take care with signs: \\( 2(-1)^3 = -2 \\) and \\( -8 \\times -1 = +8 \\).'
                }
            ],
            finalAnswer: 'Remainder  = 10 ',
        }
    },

    {
        id: 'qc8-005',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 05',
        difficulty: 'Foundation',
        questionText: 'Use the Remainder Theorem to find the remainder when \\( x^3 - 7x + 2 \\) is divided by \\( (x + 3) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'cubic', 'missing term', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Dividing by \\( (x + 3) \\), so the remainder is \\( f(-3) \\).',
                    workingLatex: 'f(-3) = (-3)^3 - 7(-3) + 2',
                    explanation: 'Note there is no \\( x^2 \\) term, so substitute \\( x = -3 \\) directly.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(-3) = -27 + 21 + 2 = -4',
                    explanation: '\\( (-3)^3 = -27 \\) and \\( -7 \\times -3 = +21 \\).'
                }
            ],
            finalAnswer: 'Remainder  = -4 ',
        }
    },

    {
        id: 'qc8-006',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 06',
        difficulty: 'Foundation',
        questionText: 'Use the Remainder Theorem to find the remainder when \\( 4x^3 - 3x^2 - 2x + 1 \\) is divided by \\( (2x - 1) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'cubic', 'non-monic divisor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'For divisor \\( (2x - 1) \\), we have \\( a = 2, b = 1 \\), so the remainder is \\( f\\!\\left(\\tfrac{1}{2}\\right) \\).',
                    workingLatex: 'f\\!\\left(\\tfrac{1}{2}\\right) = 4\\!\\left(\\tfrac{1}{2}\\right)^3 - 3\\!\\left(\\tfrac{1}{2}\\right)^2 - 2\\!\\left(\\tfrac{1}{2}\\right) + 1',
                    explanation: 'Substitute \\( x = \\tfrac{b}{a} = \\tfrac{1}{2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate each term.',
                    workingLatex: 'f\\!\\left(\\tfrac{1}{2}\\right) = 4 \\cdot \\tfrac{1}{8} - 3 \\cdot \\tfrac{1}{4} - 1 + 1 = \\tfrac{1}{2} - \\tfrac{3}{4} = -\\tfrac{1}{4}',
                    explanation: 'Simplify: \\( \\tfrac{1}{2} - \\tfrac{3}{4} = \\tfrac{2}{4} - \\tfrac{3}{4} = -\\tfrac{1}{4} \\).'
                }
            ],
            finalAnswer: 'Remainder  = -\\tfrac{1}{4} ',
        }
    },

    {
        id: 'qc8-007',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 07',
        difficulty: 'Foundation',
        questionText: 'Use the Remainder Theorem to find the remainder when \\( 3x^3 + 5x^2 - 4x + 2 \\) is divided by \\( (3x + 1) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'cubic', 'non-monic divisor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'For divisor \\( (3x + 1) \\), substitute \\( x = -\\tfrac{1}{3} \\).',
                    workingLatex: 'f\\!\\left(-\\tfrac{1}{3}\\right) = 3\\!\\left(-\\tfrac{1}{3}\\right)^3 + 5\\!\\left(-\\tfrac{1}{3}\\right)^2 - 4\\!\\left(-\\tfrac{1}{3}\\right) + 2',
                    explanation: '\\( ax - b = 3x - (-1) \\) so \\( b/a = -1/3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate each term.',
                    workingLatex: '= 3 \\cdot \\left(-\\tfrac{1}{27}\\right) + 5 \\cdot \\tfrac{1}{9} + \\tfrac{4}{3} + 2 = -\\tfrac{1}{9} + \\tfrac{5}{9} + \\tfrac{12}{9} + \\tfrac{18}{9} = \\tfrac{34}{9}',
                    explanation: 'Convert all fractions to ninths to add: \\( -1 + 5 + 12 + 18 = 34 \\).'
                }
            ],
            finalAnswer: 'Remainder  = \\tfrac{34}{9} ',
        }
    },

    {
        id: 'qc8-008',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 08',
        difficulty: 'Foundation',
        questionText: 'Use the Remainder Theorem to find the remainder when \\( x^3 + 3x^2 - x - 3 \\) is divided by \\( (x - 3) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The remainder is \\( f(3) \\).',
                    workingLatex: 'f(3) = (3)^3 + 3(3)^2 - (3) - 3',
                    explanation: 'Substitute \\( x = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(3) = 27 + 27 - 3 - 3 = 48',
                    explanation: 'Add the terms carefully.'
                }
            ],
            finalAnswer: 'Remainder  = 48 ',
        }
    },

    {
        id: 'qc8-009',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 09',
        difficulty: 'Foundation',
        questionText: 'Use the Remainder Theorem to find the remainder when \\( 5x^3 - x^2 + 3x - 10 \\) is divided by \\( (x + 2) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'cubic', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The remainder is \\( f(-2) \\).',
                    workingLatex: 'f(-2) = 5(-2)^3 - (-2)^2 + 3(-2) - 10',
                    explanation: 'Substitute \\( x = -2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(-2) = 5(-8) - 4 + (-6) - 10 = -40 - 4 - 6 - 10 = -60',
                    explanation: 'Take care with all the negative signs.'
                }
            ],
            finalAnswer: 'Remainder  = -60 ',
        }
    },

    {
        id: 'qc8-010',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 10',
        difficulty: 'Foundation',
        questionText: 'Use the Remainder Theorem to find the remainder when \\( 2x^3 - 5x^2 + 4x - 3 \\) is divided by \\( (2x + 3) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'cubic', 'non-monic divisor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'For divisor \\( (2x + 3) \\), substitute \\( x = -\\tfrac{3}{2} \\).',
                    workingLatex: 'f\\!\\left(-\\tfrac{3}{2}\\right) = 2\\!\\left(-\\tfrac{3}{2}\\right)^3 - 5\\!\\left(-\\tfrac{3}{2}\\right)^2 + 4\\!\\left(-\\tfrac{3}{2}\\right) - 3',
                    explanation: 'Set \\( 2x + 3 = 0 \\Rightarrow x = -\\tfrac{3}{2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate each term.',
                    workingLatex: '= 2\\!\\left(-\\tfrac{27}{8}\\right) - 5\\!\\left(\\tfrac{9}{4}\\right) - 6 - 3 = -\\tfrac{27}{4} - \\tfrac{45}{4} - \\tfrac{36}{4} = -\\tfrac{108}{4} = -27',
                    explanation: 'Convert to quarters: \\( -\\tfrac{27}{4} - \\tfrac{45}{4} - \\tfrac{24}{4} - \\tfrac{12}{4} = -\\tfrac{108}{4} \\).'
                }
            ],
            finalAnswer: 'Remainder  = -27 ',
        }
    },

    // ─── TYPE B: Quartic f(x) — find remainder with multiple divisors ───────────

    {
        id: 'qc8-011',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 11',
        difficulty: 'Foundation',
        questionText: 'Find the remainder when \\( f(x) = x^4 + 2x^3 - 5x^2 + x - 3 \\) is divided by \\( (x - 1) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'quartic', 'polynomial division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The remainder is \\( f(1) \\).',
                    workingLatex: 'f(1) = (1)^4 + 2(1)^3 - 5(1)^2 + (1) - 3',
                    explanation: 'Substitute \\( x = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(1) = 1 + 2 - 5 + 1 - 3 = -4',
                    explanation: 'Sum: \\( 1 + 2 = 3,\\; 3 - 5 = -2,\\; -2 + 1 = -1,\\; -1 - 3 = -4 \\).'
                }
            ],
            finalAnswer: 'Remainder  = -4 ',
        }
    },

    {
        id: 'qc8-012',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 12',
        difficulty: 'Foundation',
        questionText: 'Find the remainder when \\( f(x) = x^4 + 2x^3 - 5x^2 + x - 3 \\) is divided by \\( (x + 2) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'quartic', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The remainder is \\( f(-2) \\).',
                    workingLatex: 'f(-2) = (-2)^4 + 2(-2)^3 - 5(-2)^2 + (-2) - 3',
                    explanation: 'Substitute \\( x = -2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(-2) = 16 - 16 - 20 - 2 - 3 = -25',
                    explanation: '\\( (-2)^4 = 16,\\; 2(-8) = -16,\\; -5(4) = -20 \\).'
                }
            ],
            finalAnswer: 'Remainder  = -25 ',
        }
    },

    {
        id: 'qc8-013',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 13',
        difficulty: 'Foundation',
        questionText: 'Find the remainder when \\( f(x) = x^4 + 2x^3 - 5x^2 + x - 3 \\) is divided by \\( (x + 1) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'quartic', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The remainder is \\( f(-1) \\).',
                    workingLatex: 'f(-1) = (-1)^4 + 2(-1)^3 - 5(-1)^2 + (-1) - 3',
                    explanation: 'Substitute \\( x = -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'f(-1) = 1 - 2 - 5 - 1 - 3 = -10',
                    explanation: '\\( (-1)^4 = 1,\\; 2(-1)^3 = -2,\\; -5(1) = -5 \\).'
                }
            ],
            finalAnswer: 'Remainder  = -10 ',
        }
    },

    {
        id: 'qc8-014',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 14',
        difficulty: 'Foundation',
        questionText: 'Find the remainder when \\( f(x) = x^4 + 2x^3 - 5x^2 + x - 3 \\) is divided by \\( (2x - 1) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'quartic', 'non-monic divisor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'For \\( (2x - 1) \\), substitute \\( x = \\tfrac{1}{2} \\).',
                    workingLatex: 'f\\!\\left(\\tfrac{1}{2}\\right) = \\left(\\tfrac{1}{2}\\right)^4 + 2\\!\\left(\\tfrac{1}{2}\\right)^3 - 5\\!\\left(\\tfrac{1}{2}\\right)^2 + \\tfrac{1}{2} - 3',
                    explanation: 'Set \\( 2x - 1 = 0 \\Rightarrow x = \\tfrac{1}{2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate using sixteenths.',
                    workingLatex: '= \\tfrac{1}{16} + \\tfrac{2}{8} - \\tfrac{5}{4} + \\tfrac{1}{2} - 3 = \\tfrac{1}{16} + \\tfrac{4}{16} - \\tfrac{20}{16} + \\tfrac{8}{16} - \\tfrac{48}{16} = -\\tfrac{55}{16}',
                    explanation: 'Convert all to sixteenths: \\( 1 + 4 - 20 + 8 - 48 = -55 \\).'
                }
            ],
            finalAnswer: 'Remainder  = -\\tfrac{55}{16} ',
        }
    },

    {
        id: 'qc8-015',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 15',
        difficulty: 'Foundation',
        questionText: 'Find the remainder when \\( g(x) = 2x^4 - x^3 + 3x^2 - 4x + 5 \\) is divided by \\( (x - 2) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'quartic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The remainder is \\( g(2) \\).',
                    workingLatex: 'g(2) = 2(2)^4 - (2)^3 + 3(2)^2 - 4(2) + 5',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'g(2) = 2(16) - 8 + 3(4) - 8 + 5 = 32 - 8 + 12 - 8 + 5 = 33',
                    explanation: 'Work through each term systematically.'
                }
            ],
            finalAnswer: 'Remainder  = 33 ',
        }
    },

    {
        id: 'qc8-016',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 16',
        difficulty: 'Foundation',
        questionText: 'Find the remainder when \\( g(x) = 2x^4 - x^3 + 3x^2 - 4x + 5 \\) is divided by \\( (x + 1) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'quartic', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The remainder is \\( g(-1) \\).',
                    workingLatex: 'g(-1) = 2(-1)^4 - (-1)^3 + 3(-1)^2 - 4(-1) + 5',
                    explanation: 'Substitute \\( x = -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'g(-1) = 2(1) - (-1) + 3(1) + 4 + 5 = 2 + 1 + 3 + 4 + 5 = 15',
                    explanation: '\\( (-1)^4 = 1,\\; -(-1)^3 = -(-1) = +1 \\).'
                }
            ],
            finalAnswer: 'Remainder  = 15 ',
        }
    },

    {
        id: 'qc8-017',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 17',
        difficulty: 'Foundation',
        questionText: 'Find the remainder when \\( g(x) = 2x^4 - x^3 + 3x^2 - 4x + 5 \\) is divided by \\( (2x + 1) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'quartic', 'non-monic divisor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'For \\( (2x + 1) \\), substitute \\( x = -\\tfrac{1}{2} \\).',
                    workingLatex: 'g\\!\\left(-\\tfrac{1}{2}\\right) = 2\\!\\left(-\\tfrac{1}{2}\\right)^4 - \\!\\left(-\\tfrac{1}{2}\\right)^3 + 3\\!\\left(-\\tfrac{1}{2}\\right)^2 - 4\\!\\left(-\\tfrac{1}{2}\\right) + 5',
                    explanation: 'Set \\( 2x + 1 = 0 \\Rightarrow x = -\\tfrac{1}{2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate each term.',
                    workingLatex: '= 2 \\cdot \\tfrac{1}{16} + \\tfrac{1}{8} + 3 \\cdot \\tfrac{1}{4} + 2 + 5 = \\tfrac{1}{8} + \\tfrac{1}{8} + \\tfrac{3}{4} + 7 = \\tfrac{1}{4} + \\tfrac{3}{4} + 7 = 8',
                    explanation: '\\( \\tfrac{1}{8} + \\tfrac{1}{8} = \\tfrac{2}{8} = \\tfrac{1}{4} \\), and \\( \\tfrac{1}{4} + \\tfrac{3}{4} = 1 \\).'
                }
            ],
            finalAnswer: 'Remainder  = 8 ',
        }
    },

    {
        id: 'qc8-018',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 18',
        difficulty: 'Foundation',
        questionText: 'Find the remainder when \\( h(x) = x^4 - 6x^2 + 8x - 1 \\) is divided by \\( (x - 1) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'quartic', 'missing term'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The remainder is \\( h(1) \\). Note there is no \\( x^3 \\) term.',
                    workingLatex: 'h(1) = (1)^4 - 6(1)^2 + 8(1) - 1',
                    explanation: 'Substitute \\( x = 1 \\). Missing terms contribute zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'h(1) = 1 - 6 + 8 - 1 = 2',
                    explanation: 'Sum: \\( 1 - 6 = -5,\\; -5 + 8 = 3,\\; 3 - 1 = 2 \\).'
                }
            ],
            finalAnswer: 'Remainder  = 2 ',
        }
    },

    {
        id: 'qc8-019',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 19',
        difficulty: 'Foundation',
        questionText: 'Find the remainder when \\( h(x) = x^4 - 6x^2 + 8x - 1 \\) is divided by \\( (x + 3) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'quartic', 'missing term', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The remainder is \\( h(-3) \\).',
                    workingLatex: 'h(-3) = (-3)^4 - 6(-3)^2 + 8(-3) - 1',
                    explanation: 'Substitute \\( x = -3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'h(-3) = 81 - 54 - 24 - 1 = 2',
                    explanation: '\\( (-3)^4 = 81,\\; 6 \\times 9 = 54,\\; 8 \\times (-3) = -24 \\).'
                }
            ],
            finalAnswer: 'Remainder  = 2 ',
        }
    },

    {
        id: 'qc8-020',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 20',
        difficulty: 'Foundation',
        questionText: 'Find the remainder when \\( h(x) = x^4 - 6x^2 + 8x - 1 \\) is divided by \\( (2x - 3) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'quartic', 'non-monic divisor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'For \\( (2x - 3) \\), substitute \\( x = \\tfrac{3}{2} \\).',
                    workingLatex: 'h\\!\\left(\\tfrac{3}{2}\\right) = \\left(\\tfrac{3}{2}\\right)^4 - 6\\!\\left(\\tfrac{3}{2}\\right)^2 + 8\\!\\left(\\tfrac{3}{2}\\right) - 1',
                    explanation: 'Set \\( 2x - 3 = 0 \\Rightarrow x = \\tfrac{3}{2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate using sixteenths where needed.',
                    workingLatex: '= \\tfrac{81}{16} - 6 \\cdot \\tfrac{9}{4} + 12 - 1 = \\tfrac{81}{16} - \\tfrac{216}{16} + \\tfrac{176}{16} = \\tfrac{41}{16}',
                    explanation: 'Convert to sixteenths: \\( 81 - 216 + 192 - 16 = 41 \\).'
                }
            ],
            finalAnswer: 'Remainder  = \\tfrac{41}{16} ',
        }
    },

    // ─── TYPE C: Different quartic — find remainders ─────────────────────────────

    {
        id: 'qc8-021',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 21',
        difficulty: 'Foundation',
        questionText: 'Find the remainder when \\( p(x) = 3x^4 - 2x^3 + x^2 - 5x + 4 \\) is divided by \\( (x - 1) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'quartic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The remainder is \\( p(1) \\).',
                    workingLatex: 'p(1) = 3(1) - 2(1) + 1 - 5 + 4',
                    explanation: 'Every power of 1 is 1, so just sum the coefficients.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'p(1) = 3 - 2 + 1 - 5 + 4 = 1',
                    explanation: 'Sum of coefficients: \\( 3 - 2 + 1 - 5 + 4 = 1 \\).'
                }
            ],
            finalAnswer: 'Remainder  = 1 ',
        }
    },

    {
        id: 'qc8-022',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 22',
        difficulty: 'Foundation',
        questionText: 'Find the remainder when \\( p(x) = 3x^4 - 2x^3 + x^2 - 5x + 4 \\) is divided by \\( (x + 1) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'quartic', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The remainder is \\( p(-1) \\).',
                    workingLatex: 'p(-1) = 3(-1)^4 - 2(-1)^3 + (-1)^2 - 5(-1) + 4',
                    explanation: 'Substitute \\( x = -1 \\). Even powers give +1, odd powers give −1.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'p(-1) = 3(1) - 2(-1) + 1 + 5 + 4 = 3 + 2 + 1 + 5 + 4 = 15',
                    explanation: 'Take care: \\( -2 \\times (-1) = +2 \\) and \\( -5 \\times (-1) = +5 \\).'
                }
            ],
            finalAnswer: 'Remainder  = 15 ',
        }
    },

    {
        id: 'qc8-023',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 23',
        difficulty: 'Foundation',
        questionText: 'Find the remainder when \\( p(x) = 3x^4 - 2x^3 + x^2 - 5x + 4 \\) is divided by \\( (x - 2) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'quartic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The remainder is \\( p(2) \\).',
                    workingLatex: 'p(2) = 3(2)^4 - 2(2)^3 + (2)^2 - 5(2) + 4',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'p(2) = 3(16) - 2(8) + 4 - 10 + 4 = 48 - 16 + 4 - 10 + 4 = 30',
                    explanation: 'Work term by term: \\( 48 - 16 = 32,\\; 32 + 4 = 36,\\; 36 - 10 = 26,\\; 26 + 4 = 30 \\).'
                }
            ],
            finalAnswer: 'Remainder  = 30 ',
        }
    },

    {
        id: 'qc8-024',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 24',
        difficulty: 'Foundation',
        questionText: 'Find the remainder when \\( p(x) = 3x^4 - 2x^3 + x^2 - 5x + 4 \\) is divided by \\( (3x - 2) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'quartic', 'non-monic divisor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'For \\( (3x - 2) \\), substitute \\( x = \\tfrac{2}{3} \\).',
                    workingLatex: 'p\\!\\left(\\tfrac{2}{3}\\right) = 3\\!\\left(\\tfrac{2}{3}\\right)^4 - 2\\!\\left(\\tfrac{2}{3}\\right)^3 + \\!\\left(\\tfrac{2}{3}\\right)^2 - 5\\!\\left(\\tfrac{2}{3}\\right) + 4',
                    explanation: 'Set \\( 3x - 2 = 0 \\Rightarrow x = \\tfrac{2}{3} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate using eighty-firsts.',
                    workingLatex: '= 3 \\cdot \\tfrac{16}{81} - 2 \\cdot \\tfrac{8}{27} + \\tfrac{4}{9} - \\tfrac{10}{3} + 4 = \\tfrac{48}{81} - \\tfrac{48}{81} + \\tfrac{36}{81} - \\tfrac{270}{81} + \\tfrac{324}{81} = \\tfrac{90}{81} = \\tfrac{10}{9}',
                    explanation: 'Convert all to 81sts: \\( 48 - 48 + 36 - 270 + 324 = 90 \\).'
                }
            ],
            finalAnswer: 'Remainder  = \\tfrac{10}{9} ',
        }
    },

    {
        id: 'qc8-025',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 25',
        difficulty: 'Foundation',
        questionText: 'Find the remainder when \\( q(x) = -2x^4 + x^3 + 6x^2 - x + 3 \\) is divided by \\( (x + 2) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'quartic', 'negative leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The remainder is \\( q(-2) \\).',
                    workingLatex: 'q(-2) = -2(-2)^4 + (-2)^3 + 6(-2)^2 - (-2) + 3',
                    explanation: 'Substitute \\( x = -2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: 'q(-2) = -2(16) + (-8) + 6(4) + 2 + 3 = -32 - 8 + 24 + 2 + 3 = -11',
                    explanation: 'Work term by term: \\( -32 - 8 = -40,\\; -40 + 24 = -16,\\; -16 + 5 = -11 \\).'
                }
            ],
            finalAnswer: 'Remainder  = -11 ',
        }
    },

    // ─── TYPE D: Find the unknown constant given a remainder ────────────────────

    {
        id: 'qc8-026',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 26',
        difficulty: 'Foundation',
        questionText: 'The remainder when \\( x^3 + ax^2 - 5x + 2 \\) is divided by \\( (x - 2) \\) is 8. Find the value of \\( a \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'find unknown', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'By the Remainder Theorem, \\( f(2) = 8 \\).',
                    workingLatex: '(2)^3 + a(2)^2 - 5(2) + 2 = 8',
                    explanation: 'Substitute \\( x = 2 \\) and set the result equal to the given remainder.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the left-hand side.',
                    workingLatex: '8 + 4a - 10 + 2 = 8',
                    explanation: 'Evaluate all numerical terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( a \\).',
                    workingLatex: '4a = 8 \\implies a = 2',
                    explanation: '\\( 8 + 4a - 8 = 8 \\Rightarrow 4a = 8 \\Rightarrow a = 2 \\).'
                }
            ],
            finalAnswer: ' a = 2 ',
        }
    },

    {
        id: 'qc8-027',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 27',
        difficulty: 'Foundation',
        questionText: 'The remainder when \\( x^3 - 3x^2 + bx - 4 \\) is divided by \\( (x - 1) \\) is \\( -9 \\). Find the value of \\( b \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'find unknown', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'By the Remainder Theorem, \\( f(1) = -9 \\).',
                    workingLatex: '(1)^3 - 3(1)^2 + b(1) - 4 = -9',
                    explanation: 'Substitute \\( x = 1 \\) and set equal to the remainder.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '1 - 3 + b - 4 = -9',
                    explanation: 'Collect numerical terms: \\( -6 + b = -9 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( b \\).',
                    workingLatex: 'b = -9 + 6 = -3',
                    explanation: 'Add 6 to both sides.'
                }
            ],
            finalAnswer: ' b = -3 ',
        }
    },

    {
        id: 'qc8-028',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 28',
        difficulty: 'Foundation',
        questionText: 'The remainder when \\( 2x^3 + cx^2 + 4x - 1 \\) is divided by \\( (x + 1) \\) is 6. Find the value of \\( c \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'find unknown', 'cubic', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'By the Remainder Theorem, \\( f(-1) = 6 \\).',
                    workingLatex: '2(-1)^3 + c(-1)^2 + 4(-1) - 1 = 6',
                    explanation: 'Substitute \\( x = -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '-2 + c - 4 - 1 = 6',
                    explanation: '\\( c - 7 = 6 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( c \\).',
                    workingLatex: 'c = 13',
                    explanation: 'Add 7 to both sides.'
                }
            ],
            finalAnswer: ' c = 13 ',
        }
    },

    {
        id: 'qc8-029',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 29',
        difficulty: 'Foundation',
        questionText: 'The remainder when \\( x^3 + 4x^2 - dx + 3 \\) is divided by \\( (x - 3) \\) is 15. Find the value of \\( d \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'find unknown', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'By the Remainder Theorem, \\( f(3) = 15 \\).',
                    workingLatex: '(3)^3 + 4(3)^2 - d(3) + 3 = 15',
                    explanation: 'Substitute \\( x = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '27 + 36 - 3d + 3 = 15 \\implies 66 - 3d = 15',
                    explanation: 'Collect numerical terms on the left.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( d \\).',
                    workingLatex: '3d = 51 \\implies d = 17',
                    explanation: 'Subtract 15 from both sides, then divide by 3.'
                }
            ],
            finalAnswer: ' d = 17 ',
        }
    },

    {
        id: 'qc8-030',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 30',
        difficulty: 'Foundation',
        questionText: 'The remainder when \\( x^3 - 5x^2 + kx + 2 \\) is divided by \\( (x + 2) \\) is \\( -36 \\). Find the value of \\( k \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'find unknown', 'cubic', 'negative substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'By the Remainder Theorem, \\( f(-2) = -36 \\).',
                    workingLatex: '(-2)^3 - 5(-2)^2 + k(-2) + 2 = -36',
                    explanation: 'Substitute \\( x = -2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '-8 - 20 - 2k + 2 = -36 \\implies -26 - 2k = -36',
                    explanation: '\\( (-2)^3 = -8 \\) and \\( -5 \\times 4 = -20 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( k \\).',
                    workingLatex: '-2k = -10 \\implies k = 5',
                    explanation: 'Add 26 to both sides: \\( -2k = -10 \\), then divide by −2.'
                }
            ],
            finalAnswer: ' k = 5 ',
        }
    },

    {
        id: 'qc8-031',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 31',
        difficulty: 'Foundation',
        questionText: 'The remainder when \\( 3x^3 + mx^2 - x + 5 \\) is divided by \\( (x - 2) \\) is 19. Find the value of \\( m \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'find unknown', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'By the Remainder Theorem, \\( f(2) = 19 \\).',
                    workingLatex: '3(2)^3 + m(2)^2 - (2) + 5 = 19',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '24 + 4m - 2 + 5 = 19 \\implies 27 + 4m = 19',
                    explanation: 'Collect numerical terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( m \\).',
                    workingLatex: '4m = -8 \\implies m = -2',
                    explanation: 'Subtract 27 from both sides, then divide by 4.'
                }
            ],
            finalAnswer: ' m = -2 ',
        }
    },

    {
        id: 'qc8-032',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 32',
        difficulty: 'Foundation',
        questionText: 'When \\( x^3 + 2x^2 + nx - 4 \\) is divided by \\( (x + 3) \\) the remainder is 2. Find the value of \\( n \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'find unknown', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'By the Remainder Theorem, \\( f(-3) = 2 \\).',
                    workingLatex: '(-3)^3 + 2(-3)^2 + n(-3) - 4 = 2',
                    explanation: 'Substitute \\( x = -3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '-27 + 18 - 3n - 4 = 2 \\implies -13 - 3n = 2',
                    explanation: '\\( (-3)^3 = -27,\\; 2 \\times 9 = 18 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( n \\).',
                    workingLatex: '-3n = 15 \\implies n = -5',
                    explanation: 'Add 13 to both sides, then divide by −3.'
                }
            ],
            finalAnswer: ' n = -5 ',
        }
    },

    {
        id: 'qc8-033',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 33',
        difficulty: 'Foundation',
        questionText: 'When \\( 2x^3 - x^2 + px + 7 \\) is divided by \\( (2x - 1) \\) the remainder is 4. Find the value of \\( p \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'find unknown', 'cubic', 'non-monic divisor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'For \\( (2x - 1) \\), the remainder is \\( f\\!\\left(\\tfrac{1}{2}\\right) = 4 \\).',
                    workingLatex: '2\\!\\left(\\tfrac{1}{2}\\right)^3 - \\!\\left(\\tfrac{1}{2}\\right)^2 + p\\!\\left(\\tfrac{1}{2}\\right) + 7 = 4',
                    explanation: 'Set \\( 2x - 1 = 0 \\Rightarrow x = \\tfrac{1}{2} \\), substitute and set equal to remainder.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '\\tfrac{1}{4} - \\tfrac{1}{4} + \\tfrac{p}{2} + 7 = 4 \\implies \\tfrac{p}{2} + 7 = 4',
                    explanation: 'The first two terms cancel.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( p \\).',
                    workingLatex: '\\tfrac{p}{2} = -3 \\implies p = -6',
                    explanation: 'Subtract 7, then multiply both sides by 2.'
                }
            ],
            finalAnswer: ' p = -6 ',
        }
    },

    {
        id: 'qc8-034',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 34',
        difficulty: 'Foundation',
        questionText: 'When \\( x^4 + 3x^3 - qx + 5 \\) is divided by \\( (x - 1) \\) the remainder is 6. Find the value of \\( q \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'find unknown', 'quartic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'By the Remainder Theorem, \\( f(1) = 6 \\).',
                    workingLatex: '(1)^4 + 3(1)^3 - q(1) + 5 = 6',
                    explanation: 'Substitute \\( x = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '1 + 3 - q + 5 = 6 \\implies 9 - q = 6',
                    explanation: 'Sum the constant terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( q \\).',
                    workingLatex: 'q = 3',
                    explanation: 'Rearrange: \\( q = 9 - 6 = 3 \\).'
                }
            ],
            finalAnswer: ' q = 3 ',
        }
    },

    {
        id: 'qc8-035',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 35',
        difficulty: 'Foundation',
        questionText: 'When \\( x^3 + rx^2 + 3x - 10 \\) is divided by \\( (x - 2) \\) the remainder is \\( -4 \\). Find the value of \\( r \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'find unknown', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'By the Remainder Theorem, \\( f(2) = -4 \\).',
                    workingLatex: '(2)^3 + r(2)^2 + 3(2) - 10 = -4',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '8 + 4r + 6 - 10 = -4 \\implies 4 + 4r = -4',
                    explanation: 'Collect numerical terms: \\( 8 + 6 - 10 = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( r \\).',
                    workingLatex: '4r = -8 \\implies r = -2',
                    explanation: 'Subtract 4 from both sides, then divide by 4.'
                }
            ],
            finalAnswer: ' r = -2 ',
        }
    },

    {
        id: 'qc8-036',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 36',
        difficulty: 'Foundation',
        questionText: 'When \\( 4x^3 - sx^2 + 2x + 3 \\) is divided by \\( (x + 1) \\) the remainder is 12. Find the value of \\( s \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'find unknown', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'By the Remainder Theorem, \\( f(-1) = 12 \\).',
                    workingLatex: '4(-1)^3 - s(-1)^2 + 2(-1) + 3 = 12',
                    explanation: 'Substitute \\( x = -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '-4 - s - 2 + 3 = 12 \\implies -3 - s = 12',
                    explanation: 'Collect numerical terms: \\( -4 - 2 + 3 = -3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( s \\).',
                    workingLatex: '-s = 15 \\implies s = -15',
                    explanation: 'Add 3 to both sides, then multiply by −1.'
                }
            ],
            finalAnswer: ' s = -15 ',
        }
    },

    {
        id: 'qc8-037',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 37',
        difficulty: 'Foundation',
        questionText: 'When \\( x^3 + 5x^2 + tx - 2 \\) is divided by \\( (x + 2) \\) the remainder is 10. Find the value of \\( t \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'find unknown', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'By the Remainder Theorem, \\( f(-2) = 10 \\).',
                    workingLatex: '(-2)^3 + 5(-2)^2 + t(-2) - 2 = 10',
                    explanation: 'Substitute \\( x = -2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '-8 + 20 - 2t - 2 = 10 \\implies 10 - 2t = 10',
                    explanation: '\\( -8 + 20 - 2 = 10 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( t \\).',
                    workingLatex: '-2t = 0 \\implies t = 0',
                    explanation: 'The coefficient of x turns out to be zero for this remainder.'
                }
            ],
            finalAnswer: ' t = 0 ',
        }
    },

    {
        id: 'qc8-038',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 38',
        difficulty: 'Foundation',
        questionText: 'When \\( x^3 - 2x^2 + ux + 8 \\) is divided by \\( (x - 4) \\) the remainder is 0. Find the value of \\( u \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'find unknown', 'cubic', 'factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'A remainder of 0 means \\( f(4) = 0 \\).',
                    workingLatex: '(4)^3 - 2(4)^2 + u(4) + 8 = 0',
                    explanation: 'Substitute \\( x = 4 \\) and set equal to 0.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '64 - 32 + 4u + 8 = 0 \\implies 40 + 4u = 0',
                    explanation: 'Collect numerical terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( u \\).',
                    workingLatex: '4u = -40 \\implies u = -10',
                    explanation: 'Divide both sides by 4.'
                }
            ],
            finalAnswer: ' u = -10 ',
        }
    },

    // ─── TYPE E: Two divisors give equal remainders — find unknown ───────────────

    {
        id: 'qc8-039',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 39',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 + ax^2 - 3x + 2 \\). The remainder when \\( f(x) \\) is divided by \\( (x - 1) \\) is the same as the remainder when divided by \\( (x + 2) \\). Find the value of \\( a \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'equal remainders', 'find unknown'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write expressions for the two remainders.',
                    workingLatex: 'f(1) = 1 + a - 3 + 2 = a \\qquad f(-2) = -8 + 4a + 6 + 2 = 4a',
                    explanation: 'Substitute \\( x = 1 \\) and \\( x = -2 \\) separately.'
                },
                {
                    stepNumber: 2,
                    description: 'Set the two remainders equal.',
                    workingLatex: 'a = 4a',
                    explanation: 'The problem states \\( f(1) = f(-2) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( a \\).',
                    workingLatex: '0 = 3a \\implies a = 0',
                    explanation: 'Subtract \\( a \\) from both sides.'
                }
            ],
            finalAnswer: ' a = 0 ',
        }
    },

    {
        id: 'qc8-040',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 40',
        difficulty: 'Foundation',
        questionText: '\\( g(x) = 2x^3 - 3x^2 + bx + 1 \\). The remainder when \\( g(x) \\) is divided by \\( (x - 2) \\) is the same as the remainder when divided by \\( (x + 1) \\). Find the value of \\( b \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'equal remainders', 'find unknown'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( g(2) \\) and \\( g(-1) \\).',
                    workingLatex: 'g(2) = 16 - 12 + 2b + 1 = 2b + 5 \\qquad g(-1) = -2 - 3 - b + 1 = -b - 4',
                    explanation: 'Substitute \\( x = 2 \\) and \\( x = -1 \\) separately.'
                },
                {
                    stepNumber: 2,
                    description: 'Set the two remainders equal.',
                    workingLatex: '2b + 5 = -b - 4',
                    explanation: 'The problem states \\( g(2) = g(-1) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( b \\).',
                    workingLatex: '3b = -9 \\implies b = -3',
                    explanation: 'Add \\( b \\) to both sides and subtract 5: \\( 3b = -9 \\).'
                }
            ],
            finalAnswer: ' b = -3 ',
        }
    },

    {
        id: 'qc8-041',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 41',
        difficulty: 'Foundation',
        questionText: '\\( h(x) = x^3 + cx^2 + 5x - 3 \\). The remainder when \\( h(x) \\) is divided by \\( (x - 3) \\) is the same as the remainder when divided by \\( (x + 1) \\). Find the value of \\( c \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'equal remainders', 'find unknown'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( h(3) \\) and \\( h(-1) \\).',
                    workingLatex: 'h(3) = 27 + 9c + 15 - 3 = 9c + 39 \\qquad h(-1) = -1 + c - 5 - 3 = c - 9',
                    explanation: 'Substitute \\( x = 3 \\) and \\( x = -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set the remainders equal.',
                    workingLatex: '9c + 39 = c - 9',
                    explanation: '\\( h(3) = h(-1) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( c \\).',
                    workingLatex: '8c = -48 \\implies c = -6',
                    explanation: 'Subtract \\( c \\) and subtract 39 from both sides.'
                }
            ],
            finalAnswer: ' c = -6 ',
        }
    },

    {
        id: 'qc8-042',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 42',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^4 + dx^2 - 2x + 1 \\). The remainder when \\( f(x) \\) is divided by \\( (x - 1) \\) is the same as the remainder when divided by \\( (x + 1) \\). Find the value of \\( d \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'equal remainders', 'quartic', 'find unknown'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( f(1) \\) and \\( f(-1) \\).',
                    workingLatex: 'f(1) = 1 + d - 2 + 1 = d \\qquad f(-1) = 1 + d + 2 + 1 = d + 4',
                    explanation: 'Note \\( x^4 \\) and \\( x^2 \\) give the same value at \\( \\pm 1 \\); only the odd-power terms differ.'
                },
                {
                    stepNumber: 2,
                    description: 'Set the remainders equal.',
                    workingLatex: 'd = d + 4',
                    explanation: '\\( f(1) = f(-1) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve.',
                    workingLatex: '0 = 4',
                    explanation: 'This is a contradiction — there is no value of \\( d \\) that makes the remainders equal. The two remainders always differ by 4, regardless of \\( d \\).'
                }
            ],
            finalAnswer: 'No solution — the two remainders can never be equal for any value of  d .',
        }
    },

    {
        id: 'qc8-043',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 43',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = 2x^3 + ex^2 - 4x + 3 \\). The remainder when \\( f(x) \\) is divided by \\( (x - 2) \\) is twice the remainder when divided by \\( (x - 1) \\). Find the value of \\( e \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'related remainders', 'find unknown'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( f(2) \\) and \\( f(1) \\).',
                    workingLatex: 'f(2) = 16 + 4e - 8 + 3 = 4e + 11 \\qquad f(1) = 2 + e - 4 + 3 = e + 1',
                    explanation: 'Substitute \\( x = 2 \\) and \\( x = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the condition: \\( f(2) = 2 \\cdot f(1) \\).',
                    workingLatex: '4e + 11 = 2(e + 1) = 2e + 2',
                    explanation: 'The remainder at \\( x = 2 \\) is twice the remainder at \\( x = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( e \\).',
                    workingLatex: '2e = -9 \\implies e = -\\tfrac{9}{2}',
                    explanation: 'Subtract \\( 2e \\) and 11 from both sides: \\( 2e = 2 - 11 = -9 \\).'
                }
            ],
            finalAnswer: ' e = -\\tfrac{9}{2} ',
        }
    },

    {
        id: 'qc8-044',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 44',
        difficulty: 'Foundation',
        questionText: '\\( g(x) = x^3 + 3x^2 + fx - 6 \\). The remainder when \\( g(x) \\) is divided by \\( (x + 2) \\) is three times the remainder when divided by \\( (x - 1) \\). Find the value of \\( f \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'related remainders', 'find unknown'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( g(-2) \\) and \\( g(1) \\).',
                    workingLatex: 'g(-2) = -8 + 12 - 2f - 6 = -2f - 2 \\qquad g(1) = 1 + 3 + f - 6 = f - 2',
                    explanation: 'Substitute \\( x = -2 \\) and \\( x = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the condition: \\( g(-2) = 3 \\cdot g(1) \\).',
                    workingLatex: '-2f - 2 = 3(f - 2) = 3f - 6',
                    explanation: 'The remainder at \\( x = -2 \\) is three times the remainder at \\( x = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( f \\).',
                    workingLatex: '-5f = -4 \\implies f = \\tfrac{4}{5}',
                    explanation: 'Add \\( 2f \\) to both sides and add 6: \\( -5f = -4 \\).'
                }
            ],
            finalAnswer: ' f = \\tfrac{4}{5} ',
        }
    },

    {
        id: 'qc8-045',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 45',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 + gx^2 - 2x + 5 \\). The remainder when \\( f(x) \\) is divided by \\( (x - 2) \\) is the same as the remainder when divided by \\( (x + 3) \\). Find the value of \\( g \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'equal remainders', 'find unknown'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( f(2) \\) and \\( f(-3) \\).',
                    workingLatex: 'f(2) = 8 + 4g - 4 + 5 = 4g + 9 \\qquad f(-3) = -27 + 9g + 6 + 5 = 9g - 16',
                    explanation: 'Substitute \\( x = 2 \\) and \\( x = -3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set the remainders equal.',
                    workingLatex: '4g + 9 = 9g - 16',
                    explanation: '\\( f(2) = f(-3) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( g \\).',
                    workingLatex: '25 = 5g \\implies g = 5',
                    explanation: 'Subtract \\( 4g \\) and add 16 to both sides.'
                }
            ],
            finalAnswer: ' g = 5 ',
        }
    },

    {
        id: 'qc8-046',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 46',
        difficulty: 'Foundation',
        questionText: '\\( h(x) = x^4 + 2x^3 + hx^2 - 3x + 1 \\). The remainder when \\( h(x) \\) is divided by \\( (x - 1) \\) is the same as the remainder when divided by \\( (x + 2) \\). Find the value of \\( h \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'equal remainders', 'quartic', 'find unknown'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the two remainders.',
                    workingLatex: 'h(1) = 1 + 2 + h - 3 + 1 = h + 1 \\qquad h(-2) = 16 - 16 + 4h + 6 + 1 = 4h + 7',
                    explanation: 'Substitute \\( x = 1 \\) and \\( x = -2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set the remainders equal.',
                    workingLatex: 'h + 1 = 4h + 7',
                    explanation: '\\( h(1) = h(-2) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( h \\).',
                    workingLatex: '-3h = 6 \\implies h = -2',
                    explanation: 'Subtract \\( 4h \\) and subtract 1 from both sides.'
                }
            ],
            finalAnswer: ' h = -2 ',
        }
    },

    {
        id: 'qc8-047',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 47',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = 3x^3 + jx - 5 \\). The remainder when \\( f(x) \\) is divided by \\( (x - 2) \\) is the same as the remainder when divided by \\( (x + 2) \\). Find the value of \\( j \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'equal remainders', 'missing term', 'find unknown'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( f(2) \\) and \\( f(-2) \\). Note there is no \\( x^2 \\) term.',
                    workingLatex: 'f(2) = 24 + 2j - 5 = 2j + 19 \\qquad f(-2) = -24 - 2j - 5 = -2j - 29',
                    explanation: 'Substitute \\( x = 2 \\) and \\( x = -2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set the remainders equal.',
                    workingLatex: '2j + 19 = -2j - 29',
                    explanation: '\\( f(2) = f(-2) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( j \\).',
                    workingLatex: '4j = -48 \\implies j = -12',
                    explanation: 'Add \\( 2j \\) and subtract 19 from both sides.'
                }
            ],
            finalAnswer: ' j = -12 ',
        }
    },

    {
        id: 'qc8-048',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 48',
        difficulty: 'Foundation',
        questionText: 'When \\( x^3 + 3x^2 - kx + 2 \\) is divided by \\( (x - 1) \\) the remainder is 3. Find \\( k \\). Hence find the remainder when the same polynomial is divided by \\( (x + 2) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'find unknown', 'two-part question'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use \\( f(1) = 3 \\) to find \\( k \\).',
                    workingLatex: '1 + 3 - k + 2 = 3 \\implies 6 - k = 3 \\implies k = 3',
                    explanation: 'Substitute \\( x = 1 \\) and set equal to the given remainder.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( k = 3 \\) back into the polynomial.',
                    workingLatex: 'f(x) = x^3 + 3x^2 - 3x + 2',
                    explanation: 'Now the polynomial is fully defined.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the remainder when dividing by \\( (x + 2) \\): evaluate \\( f(-2) \\).',
                    workingLatex: 'f(-2) = -8 + 12 + 6 + 2 = 12',
                    explanation: '\\( (-2)^3 = -8,\\; 3(4) = 12,\\; -3(-2) = +6 \\).'
                }
            ],
            finalAnswer: ' k = 3 ; remainder when divided by  (x + 2)  is  12 ',
        }
    },

    {
        id: 'qc8-049',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 49',
        difficulty: 'Foundation',
        questionText: 'When \\( 2x^3 - x^2 + mx + 4 \\) is divided by \\( (x + 1) \\) the remainder is \\( -3 \\). Find \\( m \\). Hence find the remainder when the same polynomial is divided by \\( (2x - 1) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'find unknown', 'two-part question', 'non-monic divisor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use \\( f(-1) = -3 \\) to find \\( m \\).',
                    workingLatex: '2(-1)^3 - (-1)^2 + m(-1) + 4 = -3 \\implies -2 - 1 - m + 4 = -3 \\implies 1 - m = -3 \\implies m = 4',
                    explanation: 'Substitute \\( x = -1 \\) and solve.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( m = 4 \\): \\( f(x) = 2x^3 - x^2 + 4x + 4 \\).',
                    workingLatex: 'f\\!\\left(\\tfrac{1}{2}\\right) = 2\\!\\left(\\tfrac{1}{8}\\right) - \\tfrac{1}{4} + 2 + 4',
                    explanation: 'For \\( (2x - 1) \\), evaluate at \\( x = \\tfrac{1}{2} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate.',
                    workingLatex: '= \\tfrac{1}{4} - \\tfrac{1}{4} + 6 = 6',
                    explanation: 'The first two terms cancel.'
                }
            ],
            finalAnswer: ' m = 4 ; remainder when divided by  (2x - 1)  is  6 ',
        }
    },

    {
        id: 'qc8-050',
        topicRef: 'qc8',
        topicTitle: 'Remainder Theorem 50',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^4 - 2x^3 + vx^2 + x - 4 \\). The remainder when \\( f(x) \\) is divided by \\( (x - 2) \\) is the same as the remainder when divided by \\( (x + 1) \\). Find \\( v \\). Hence state the remainder.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['remainder theorem', 'equal remainders', 'quartic', 'find unknown', 'two-part question'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( f(2) \\).',
                    workingLatex: 'f(2) = 16 - 16 + 4v + 2 - 4 = 4v - 2',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( f(-1) \\).',
                    workingLatex: 'f(-1) = 1 + 2 + v - 1 - 4 = v - 2',
                    explanation: 'Substitute \\( x = -1 \\). Note \\( (-1)^4 = 1,\\; -2(-1)^3 = +2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Set the remainders equal.',
                    workingLatex: '4v - 2 = v - 2 \\implies 3v = 0 \\implies v = 0',
                    explanation: 'Subtract \\( v \\) from both sides; the −2 cancels.'
                },
                {
                    stepNumber: 4,
                    description: 'State the common remainder by substituting \\( v = 0 \\) into either expression.',
                    workingLatex: 'f(2) = 4(0) - 2 = -2',
                    explanation: 'The remainder is −2 in both cases.'
                }
            ],
            finalAnswer: ' v = 0 ; the common remainder is  -2 ',
        }
    },

];

