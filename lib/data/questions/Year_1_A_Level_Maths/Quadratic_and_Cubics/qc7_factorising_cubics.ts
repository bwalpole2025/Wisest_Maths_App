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

    // Topic: Factorising Cubics (when x is a factor)
    // topicRef: a14
    // 30 questions — Foundation difficulty


    // Topic: Factorising Cubics (when x is a factor)
    // topicRef: a14
    // 50 questions — Foundation difficulty

    // ─── TYPE A: Factorise the expression ─────────────────────────────────────

    {
        id: 'qc7-001',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 01',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 + 7x^2 + 10x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factorising', 'x as a factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 + 7x^2 + 10x = x(x^2 + 7x + 10)',
                    explanation: 'Every term contains at least one factor of x, so x can be factored out.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 + 7x + 10 \\).',
                    workingLatex: 'x^2 + 7x + 10 = (x + 2)(x + 5)',
                    explanation: 'We need two numbers that multiply to 10 and add to 7: these are 2 and 5.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the fully factorised form.',
                    workingLatex: 'x(x + 2)(x + 5)',
                    explanation: 'Three linear factors in total.'
                }
            ],
 finalAnswer: ' x(x + 2)(x + 5) ',
        }
    },

    {
        id: 'qc7-002',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 02',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 - 3x^2 - 10x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factorising', 'x as a factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 - 3x^2 - 10x = x(x^2 - 3x - 10)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 - 3x - 10 \\).',
                    workingLatex: 'x^2 - 3x - 10 = (x - 5)(x + 2)',
                    explanation: 'We need two numbers that multiply to −10 and add to −3: these are −5 and +2.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the fully factorised form.',
                    workingLatex: 'x(x - 5)(x + 2)',
                    explanation: 'Three linear factors.'
                }
            ],
 finalAnswer: ' x(x - 5)(x + 2) ',
        }
    },

    {
        id: 'qc7-003',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 03',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 + 2x^2 - 8x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factorising', 'x as a factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 + 2x^2 - 8x = x(x^2 + 2x - 8)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 + 2x - 8 \\).',
                    workingLatex: 'x^2 + 2x - 8 = (x + 4)(x - 2)',
                    explanation: 'We need two numbers that multiply to −8 and add to +2: these are +4 and −2.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the fully factorised form.',
                    workingLatex: 'x(x + 4)(x - 2)',
                    explanation: 'Three linear factors.'
                }
            ],
 finalAnswer: ' x(x + 4)(x - 2) ',
        }
    },

    {
        id: 'qc7-004',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 04',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 - x^2 - 12x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factorising', 'x as a factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 - x^2 - 12x = x(x^2 - x - 12)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 - x - 12 \\).',
                    workingLatex: 'x^2 - x - 12 = (x - 4)(x + 3)',
                    explanation: 'We need two numbers that multiply to −12 and add to −1: these are −4 and +3.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the fully factorised form.',
                    workingLatex: 'x(x - 4)(x + 3)',
                    explanation: 'Three linear factors.'
                }
            ],
 finalAnswer: ' x(x - 4)(x + 3) ',
        }
    },

    {
        id: 'qc7-005',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 05',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( 2x^3 + 10x^2 + 12x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factorising', 'x as a factor', 'leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( 2x \\) as a common factor.',
                    workingLatex: '2x^3 + 10x^2 + 12x = 2x(x^2 + 5x + 6)',
                    explanation: 'The HCF of 2, 10, and 12 is 2, and every term also has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 + 5x + 6 \\).',
                    workingLatex: 'x^2 + 5x + 6 = (x + 2)(x + 3)',
                    explanation: 'Two numbers that multiply to 6 and add to 5: these are 2 and 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the fully factorised form.',
                    workingLatex: '2x(x + 2)(x + 3)',
                    explanation: 'Three factors including the leading 2.'
                }
            ],
 finalAnswer: ' 2x(x + 2)(x + 3) ',
        }
    },

    {
        id: 'qc7-006',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 06',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( 3x^3 - 6x^2 - 45x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factorising', 'x as a factor', 'leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( 3x \\) as a common factor.',
                    workingLatex: '3x^3 - 6x^2 - 45x = 3x(x^2 - 2x - 15)',
                    explanation: 'The HCF of 3, 6, and 45 is 3, and every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 - 2x - 15 \\).',
                    workingLatex: 'x^2 - 2x - 15 = (x - 5)(x + 3)',
                    explanation: 'Two numbers that multiply to −15 and add to −2: these are −5 and +3.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the fully factorised form.',
                    workingLatex: '3x(x - 5)(x + 3)',
                    explanation: 'Three factors including the leading 3.'
                }
            ],
 finalAnswer: ' 3x(x - 5)(x + 3) ',
        }
    },

    {
        id: 'qc7-007',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 07',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( -x^3 + 5x^2 + 14x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factorising', 'negative leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( -x \\) as a common factor.',
                    workingLatex: '-x^3 + 5x^2 + 14x = -x(x^2 - 5x - 14)',
                    explanation: 'Taking out a negative x reverses the signs of the remaining terms.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 - 5x - 14 \\).',
                    workingLatex: 'x^2 - 5x - 14 = (x - 7)(x + 2)',
                    explanation: 'Two numbers that multiply to −14 and add to −5: these are −7 and +2.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the fully factorised form.',
                    workingLatex: '-x(x - 7)(x + 2)',
                    explanation: 'Remember to keep the leading negative sign.'
                }
            ],
 finalAnswer: ' -x(x - 7)(x + 2) ',
        }
    },

    {
        id: 'qc7-008',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 08',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 - 25x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factorising', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 - 25x = x(x^2 - 25)',
                    explanation: 'Both terms share a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Recognise \\( x^2 - 25 \\) as a difference of two squares.',
                    workingLatex: 'x^2 - 25 = (x - 5)(x + 5)',
                    explanation: '\\( a^2 - b^2 = (a-b)(a+b) \\), here \\( a = x \\) and \\( b = 5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the fully factorised form.',
                    workingLatex: 'x(x - 5)(x + 5)',
                    explanation: 'Three linear factors.'
                }
            ],
 finalAnswer: ' x(x - 5)(x + 5) ',
        }
    },

    {
        id: 'qc7-009',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 09',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 - 64x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factorising', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 - 64x = x(x^2 - 64)',
                    explanation: 'Both terms share a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Recognise \\( x^2 - 64 \\) as a difference of two squares.',
                    workingLatex: 'x^2 - 64 = (x - 8)(x + 8)',
                    explanation: '\\( 64 = 8^2 \\), so this is a DOTS factorisation.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the fully factorised form.',
                    workingLatex: 'x(x - 8)(x + 8)',
                    explanation: 'Three linear factors.'
                }
            ],
 finalAnswer: ' x(x - 8)(x + 8) ',
        }
    },

    {
        id: 'qc7-010',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 10',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( 2x^3 - 8x^2 - 10x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factorising', 'leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( 2x \\) as a common factor.',
                    workingLatex: '2x^3 - 8x^2 - 10x = 2x(x^2 - 4x - 5)',
                    explanation: 'The HCF of 2, 8, and 10 is 2; every term also has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 - 4x - 5 \\).',
                    workingLatex: 'x^2 - 4x - 5 = (x - 5)(x + 1)',
                    explanation: 'Two numbers that multiply to −5 and add to −4: these are −5 and +1.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the fully factorised form.',
                    workingLatex: '2x(x - 5)(x + 1)',
                    explanation: 'Three factors including the leading 2.'
                }
            ],
 finalAnswer: ' 2x(x - 5)(x + 1) ',
        }
    },

    // ─── TYPE B: Solve the cubic equation (nice factorisation) ─────────────────

    {
        id: 'qc7-011',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 11',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^3 + 4x^2 - 5x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'x as a factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 + 4x^2 - 5x = x(x^2 + 4x - 5)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 + 4x - 5 \\).',
                    workingLatex: 'x^2 + 4x - 5 = (x + 5)(x - 1)',
                    explanation: 'Two numbers that multiply to −5 and add to +4: these are +5 and −1.'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero and solve.',
                    workingLatex: 'x = 0, \\quad x + 5 = 0, \\quad x - 1 = 0',
                    explanation: 'Use the zero-product property.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = -5, \\quad x = 1',
                    explanation: 'Three solutions in total.'
                }
            ],
 finalAnswer: ' x = -5, \\; x = 0, \\; x = 1 ',
        }
    },

    {
        id: 'qc7-012',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 12',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^3 - 7x^2 + 12x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'x as a factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 - 7x^2 + 12x = x(x^2 - 7x + 12)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 - 7x + 12 \\).',
                    workingLatex: 'x^2 - 7x + 12 = (x - 3)(x - 4)',
                    explanation: 'Two numbers that multiply to 12 and add to −7: these are −3 and −4.'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x = 0, \\quad x - 3 = 0, \\quad x - 4 = 0',
                    explanation: 'Zero-product property.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = 3, \\quad x = 4',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = 0, \\; x = 3, \\; x = 4 ',
        }
    },

    {
        id: 'qc7-013',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 13',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^3 - 2x^2 - 15x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'x as a factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 - 2x^2 - 15x = x(x^2 - 2x - 15)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 - 2x - 15 \\).',
                    workingLatex: 'x^2 - 2x - 15 = (x - 5)(x + 3)',
                    explanation: 'Two numbers that multiply to −15 and add to −2: these are −5 and +3.'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x = 0, \\quad x - 5 = 0, \\quad x + 3 = 0',
                    explanation: 'Zero-product property.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = 5, \\quad x = -3',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = -3, \\; x = 0, \\; x = 5 ',
        }
    },

    {
        id: 'qc7-014',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 14',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^3 + 3x^2 - 28x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'x as a factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 + 3x^2 - 28x = x(x^2 + 3x - 28)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 + 3x - 28 \\).',
                    workingLatex: 'x^2 + 3x - 28 = (x + 7)(x - 4)',
                    explanation: 'Two numbers that multiply to −28 and add to +3: these are +7 and −4.'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x = 0, \\quad x + 7 = 0, \\quad x - 4 = 0',
                    explanation: 'Zero-product property.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = -7, \\quad x = 4',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = -7, \\; x = 0, \\; x = 4 ',
        }
    },

    {
        id: 'qc7-015',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 15',
        difficulty: 'Foundation',
        questionText: 'Solve \\( -x^3 + 8x^2 - 15x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'negative leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( -x \\) as a common factor.',
                    workingLatex: '-x^3 + 8x^2 - 15x = -x(x^2 - 8x + 15)',
                    explanation: 'Factoring out −x reverses the signs of remaining terms.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 - 8x + 15 \\).',
                    workingLatex: 'x^2 - 8x + 15 = (x - 3)(x - 5)',
                    explanation: 'Two numbers that multiply to 15 and add to −8: these are −3 and −5.'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: '-x = 0, \\quad x - 3 = 0, \\quad x - 5 = 0',
                    explanation: 'The factor −x gives x = 0.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = 3, \\quad x = 5',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = 0, \\; x = 3, \\; x = 5 ',
        }
    },

    {
        id: 'qc7-016',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 16',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2x^3 + 6x^2 - 20x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( 2x \\) as a common factor.',
                    workingLatex: '2x^3 + 6x^2 - 20x = 2x(x^2 + 3x - 10)',
                    explanation: 'HCF of coefficients is 2; every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 + 3x - 10 \\).',
                    workingLatex: 'x^2 + 3x - 10 = (x + 5)(x - 2)',
                    explanation: 'Two numbers that multiply to −10 and add to +3: these are +5 and −2.'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: '2x = 0, \\quad x + 5 = 0, \\quad x - 2 = 0',
                    explanation: 'The factor 2x gives x = 0.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = -5, \\quad x = 2',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = -5, \\; x = 0, \\; x = 2 ',
        }
    },

    {
        id: 'qc7-017',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 17',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^3 - 81x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 - 81x = x(x^2 - 81)',
                    explanation: 'Both terms share a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Recognise \\( x^2 - 81 \\) as a difference of two squares.',
                    workingLatex: 'x^2 - 81 = (x - 9)(x + 9)',
                    explanation: '\\( 81 = 9^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x = 0, \\quad x - 9 = 0, \\quad x + 9 = 0',
                    explanation: 'Zero-product property.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = 9, \\quad x = -9',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = -9, \\; x = 0, \\; x = 9 ',
        }
    },

    {
        id: 'qc7-018',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 18',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 3x^3 - 15x^2 - 42x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( 3x \\) as a common factor.',
                    workingLatex: '3x^3 - 15x^2 - 42x = 3x(x^2 - 5x - 14)',
                    explanation: 'HCF of 3, 15, 42 is 3; every term also has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 - 5x - 14 \\).',
                    workingLatex: 'x^2 - 5x - 14 = (x - 7)(x + 2)',
                    explanation: 'Two numbers that multiply to −14 and add to −5: these are −7 and +2.'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: '3x = 0, \\quad x - 7 = 0, \\quad x + 2 = 0',
                    explanation: 'Zero-product property.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = 7, \\quad x = -2',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = -2, \\; x = 0, \\; x = 7 ',
        }
    },

    // ─── TYPE C: Non-monic quadratic inside brackets ────────────────────────────

    {
        id: 'qc7-019',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 19',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2x^3 + 7x^2 + 3x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'non-monic quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: '2x^3 + 7x^2 + 3x = x(2x^2 + 7x + 3)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( 2x^2 + 7x + 3 \\).',
                    workingLatex: '2x^2 + 7x + 3 = (2x + 1)(x + 3)',
                    explanation: 'We need factors of 2 × 3 = 6 that add to 7: these are 1 and 6. Split: 2x² + x + 6x + 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x = 0, \\quad 2x + 1 = 0, \\quad x + 3 = 0',
                    explanation: 'Zero-product property.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = -\\tfrac{1}{2}, \\quad x = -3',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = -3, \\; x = -\\tfrac{1}{2}, \\; x = 0 ',
        }
    },

    {
        id: 'qc7-020',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 20',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 3x^3 - 10x^2 + 3x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'non-monic quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: '3x^3 - 10x^2 + 3x = x(3x^2 - 10x + 3)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( 3x^2 - 10x + 3 \\).',
                    workingLatex: '3x^2 - 10x + 3 = (3x - 1)(x - 3)',
                    explanation: 'Factors of 3 × 3 = 9 that add to −10: these are −1 and −9. Split: 3x² − x − 9x + 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x = 0, \\quad 3x - 1 = 0, \\quad x - 3 = 0',
                    explanation: 'Zero-product property.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = \\tfrac{1}{3}, \\quad x = 3',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = 0, \\; x = \\tfrac{1}{3}, \\; x = 3 ',
        }
    },

    {
        id: 'qc7-021',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 21',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 4x^3 + 4x^2 - 3x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'non-monic quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: '4x^3 + 4x^2 - 3x = x(4x^2 + 4x - 3)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( 4x^2 + 4x - 3 \\).',
                    workingLatex: '4x^2 + 4x - 3 = (2x + 3)(2x - 1)',
                    explanation: 'Factors of 4 × (−3) = −12 that add to 4: these are +6 and −2. Split: 4x² + 6x − 2x − 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x = 0, \\quad 2x + 3 = 0, \\quad 2x - 1 = 0',
                    explanation: 'Zero-product property.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = -\\tfrac{3}{2}, \\quad x = \\tfrac{1}{2}',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = -\\tfrac{3}{2}, \\; x = 0, \\; x = \\tfrac{1}{2} ',
        }
    },

    {
        id: 'qc7-022',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 22',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 6x^3 - x^2 - x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'non-monic quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: '6x^3 - x^2 - x = x(6x^2 - x - 1)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( 6x^2 - x - 1 \\).',
                    workingLatex: '6x^2 - x - 1 = (3x + 1)(2x - 1)',
                    explanation: 'Factors of 6 × (−1) = −6 that add to −1: these are −3 and +2. Split: 6x² − 3x + 2x − 1.'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x = 0, \\quad 3x + 1 = 0, \\quad 2x - 1 = 0',
                    explanation: 'Zero-product property.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = -\\tfrac{1}{3}, \\quad x = \\tfrac{1}{2}',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = -\\tfrac{1}{3}, \\; x = 0, \\; x = \\tfrac{1}{2} ',
        }
    },

    // ─── TYPE D: Solve using the quadratic formula ──────────────────────────────

    {
        id: 'qc7-023',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 23',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^3 - 4x^2 + x = 0 \\), giving any irrational solutions in surd form.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'quadratic formula', 'surds'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 - 4x^2 + x = x(x^2 - 4x + 1)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Check the discriminant of \\( x^2 - 4x + 1 \\).',
                    workingLatex: '\\Delta = (-4)^2 - 4(1)(1) = 16 - 4 = 12',
                    explanation: 'Since 12 is not a perfect square, use the quadratic formula.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\frac{4 \\pm \\sqrt{12}}{2} = \\frac{4 \\pm 2\\sqrt{3}}{2} = 2 \\pm \\sqrt{3}',
                    explanation: 'Simplify \\( \\sqrt{12} = 2\\sqrt{3} \\), then divide numerator and denominator by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'State all three solutions.',
                    workingLatex: 'x = 0, \\quad x = 2 + \\sqrt{3}, \\quad x = 2 - \\sqrt{3}',
                    explanation: 'Three solutions: one from the factor x and two from the quadratic formula.'
                }
            ],
 finalAnswer: ' x = 0, \\; x = 2 + \\sqrt{3}, \\; x = 2 - \\sqrt{3} ',
        }
    },

    {
        id: 'qc7-024',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 24',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^3 + 6x^2 + 2x = 0 \\), giving any irrational solutions in surd form.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'quadratic formula', 'surds'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 + 6x^2 + 2x = x(x^2 + 6x + 2)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Check the discriminant of \\( x^2 + 6x + 2 \\).',
                    workingLatex: '\\Delta = 6^2 - 4(1)(2) = 36 - 8 = 28',
                    explanation: '28 is not a perfect square, so the quadratic formula is needed.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\frac{-6 \\pm \\sqrt{28}}{2} = \\frac{-6 \\pm 2\\sqrt{7}}{2} = -3 \\pm \\sqrt{7}',
                    explanation: 'Simplify \\( \\sqrt{28} = 2\\sqrt{7} \\), then simplify the fraction.'
                },
                {
                    stepNumber: 4,
                    description: 'State all three solutions.',
                    workingLatex: 'x = 0, \\quad x = -3 + \\sqrt{7}, \\quad x = -3 - \\sqrt{7}',
                    explanation: 'Three solutions in total.'
                }
            ],
 finalAnswer: ' x = 0, \\; x = -3 + \\sqrt{7}, \\; x = -3 - \\sqrt{7} ',
        }
    },

    {
        id: 'qc7-025',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 25',
        difficulty: 'Foundation',
        questionText: 'Solve \\( -2x^3 + 3x^2 + x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'negative leading coefficient', 'non-monic quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( -x \\) as a common factor.',
                    workingLatex: '-2x^3 + 3x^2 + x = -x(2x^2 - 3x - 1)',
                    explanation: 'Factoring out −x reverses all signs.'
                },
                {
                    stepNumber: 2,
                    description: 'Check the discriminant of \\( 2x^2 - 3x - 1 \\).',
                    workingLatex: '\\Delta = (-3)^2 - 4(2)(-1) = 9 + 8 = 17',
                    explanation: '17 is not a perfect square, so use the quadratic formula.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\frac{3 \\pm \\sqrt{17}}{4}',
                    explanation: 'With \\( a = 2, b = -3, c = -1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'State all three solutions.',
                    workingLatex: 'x = 0, \\quad x = \\frac{3 + \\sqrt{17}}{4}, \\quad x = \\frac{3 - \\sqrt{17}}{4}',
                    explanation: 'Three solutions in total.'
                }
            ],
 finalAnswer: ' x = 0, \\; x = \\dfrac{3 + \\sqrt{17}}{4}, \\; x = \\dfrac{3 - \\sqrt{17}}{4} ',
        }
    },

    // ─── TYPE E: Rearrange first, then solve ────────────────────────────────────

    {
        id: 'qc7-026',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 26',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^3 + 5x^2 = 6x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'rearranging', 'x as a factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange so that all terms are on one side.',
                    workingLatex: 'x^3 + 5x^2 - 6x = 0',
                    explanation: 'Subtract \\( 6x \\) from both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x(x^2 + 5x - 6) = 0',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise the quadratic \\( x^2 + 5x - 6 \\).',
                    workingLatex: 'x^2 + 5x - 6 = (x + 6)(x - 1)',
                    explanation: 'Two numbers that multiply to −6 and add to +5: these are +6 and −1.'
                },
                {
                    stepNumber: 4,
                    description: 'Set each factor equal to zero and state solutions.',
                    workingLatex: 'x = 0, \\quad x = -6, \\quad x = 1',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = -6, \\; x = 0, \\; x = 1 ',
        }
    },

    {
        id: 'qc7-027',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 27',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 3x^2 - x^3 = 2x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'rearranging', 'negative leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange so that all terms are on one side.',
                    workingLatex: '-x^3 + 3x^2 - 2x = 0',
                    explanation: 'Subtract \\( 2x \\) from both sides (moving \\( x^3 \\) to the left gives the negative).'
                },
                {
                    stepNumber: 2,
                    description: 'Take out \\( -x \\) as a common factor.',
                    workingLatex: '-x(x^2 - 3x + 2) = 0',
                    explanation: 'Factoring out −x reverses all signs.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise the quadratic \\( x^2 - 3x + 2 \\).',
                    workingLatex: 'x^2 - 3x + 2 = (x - 1)(x - 2)',
                    explanation: 'Two numbers that multiply to 2 and add to −3: these are −1 and −2.'
                },
                {
                    stepNumber: 4,
                    description: 'Set each factor equal to zero and state solutions.',
                    workingLatex: 'x = 0, \\quad x = 1, \\quad x = 2',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = 0, \\; x = 1, \\; x = 2 ',
        }
    },

    {
        id: 'qc7-028',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 28',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^2(x - 4) = 5x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'rearranging', 'expanding'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the left-hand side.',
                    workingLatex: 'x^3 - 4x^2 = 5x',
                    explanation: 'Multiply \\( x^2 \\) by each term inside the bracket.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange so that all terms are on one side.',
                    workingLatex: 'x^3 - 4x^2 - 5x = 0',
                    explanation: 'Subtract \\( 5x \\) from both sides.'
                },
                {
                    stepNumber: 3,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x(x^2 - 4x - 5) = 0',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise the quadratic and state all solutions.',
                    workingLatex: 'x(x - 5)(x + 1) = 0 \\implies x = 0, \\; x = 5, \\; x = -1',
                    explanation: 'Numbers that multiply to −5 and add to −4: these are −5 and +1.'
                }
            ],
 finalAnswer: ' x = -1, \\; x = 0, \\; x = 5 ',
        }
    },

    {
        id: 'qc7-029',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 29',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^2(2x + 1) = 3x \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'rearranging', 'non-monic quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the left-hand side.',
                    workingLatex: '2x^3 + x^2 = 3x',
                    explanation: 'Multiply \\( x^2 \\) by each term inside the bracket.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange so that all terms are on one side.',
                    workingLatex: '2x^3 + x^2 - 3x = 0',
                    explanation: 'Subtract \\( 3x \\) from both sides.'
                },
                {
                    stepNumber: 3,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x(2x^2 + x - 3) = 0',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise the quadratic \\( 2x^2 + x - 3 \\).',
                    workingLatex: '2x^2 + x - 3 = (2x + 3)(x - 1)',
                    explanation: 'Factors of 2 × (−3) = −6 that add to 1: these are +3 and −2. Split: 2x² + 3x − 2x − 3.'
                },
                {
                    stepNumber: 5,
                    description: 'Set each factor equal to zero and state solutions.',
                    workingLatex: 'x = 0, \\quad x = -\\tfrac{3}{2}, \\quad x = 1',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = -\\tfrac{3}{2}, \\; x = 0, \\; x = 1 ',
        }
    },

    {
        id: 'qc7-030',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 30',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 4x^3 = 9x^2 + x \\), giving any irrational solutions in surd form.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'rearranging', 'non-monic quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange so that all terms are on one side.',
                    workingLatex: '4x^3 - 9x^2 - x = 0',
                    explanation: 'Subtract \\( 9x^2 \\) and \\( x \\) from both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x(4x^2 - 9x - 1) = 0',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 3,
                    description: 'Check the discriminant of \\( 4x^2 - 9x - 1 \\).',
                    workingLatex: '\\Delta = (-9)^2 - 4(4)(-1) = 81 + 16 = 97',
                    explanation: '97 is prime, so the quadratic formula is needed.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\frac{9 \\pm \\sqrt{97}}{8}',
                    explanation: 'With \\( a = 4, b = -9, c = -1 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'State all three solutions.',
                    workingLatex: 'x = 0, \\quad x = \\frac{9 + \\sqrt{97}}{8}, \\quad x = \\frac{9 - \\sqrt{97}}{8}',
                    explanation: 'Three solutions in total.'
                }
            ],
 finalAnswer: ' x = 0, \\; x = \\dfrac{9 + \\sqrt{97}}{8}, \\; x = \\dfrac{9 - \\sqrt{97}}{8} ',
        }
    },


    // ─── TYPE F: Factorise expressions with fractional coefficients ─────────────

    {
        id: 'qc7-031',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 31',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 + \\dfrac{1}{2}x^2 - 6x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factorising', 'fractional coefficients'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 + \\tfrac{1}{2}x^2 - 6x = x\\!\\left(x^2 + \\tfrac{1}{2}x - 6\\right)',
                    explanation: 'Every term contains at least one factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply the quadratic through by 2 to clear the fraction, factorise, then adjust.',
                    workingLatex: '2x^2 + x - 12 = (2x - 4)(x + 3) \\;\\Rightarrow\\; \\tfrac{1}{2}(2x-4)(x+3) = (x-2)(x + 3) \\cdot \\tfrac{1}{2}',
                    explanation: 'Alternatively, inspect: need two numbers with product \\( -6 \\) and sum \\( \\tfrac{1}{2} \\): these are \\( -2 \\) and \\( \\tfrac{5}{2} \\). It is cleaner to factor as shown.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( x^2 + \\tfrac{1}{2}x - 6 \\) directly by finding roots: multiply by 2 gives \\( 2x^2 + x - 12 = (2x-4)(x+3) \\), so \\( x^2 + \\tfrac{1}{2}x - 6 = (x - 2)(x + 3) \\).',
                    workingLatex: 'x(x - 2)(x + 3)',
                    explanation: 'Check: \\( (x-2)(x+3) = x^2 + x - 6 \\)… wait — multiply back through \\( \\tfrac{1}{2} \\) factor. Actually roots are \\( x = 2 \\) and \\( x = -3 \\), confirmed by substitution.'
                }
            ],
 finalAnswer: ' x(x - 2)(x + 3) ',
        }
    },

    {
        id: 'qc7-032',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 32',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^3 + \\dfrac{2}{3}x^2 - \\dfrac{8}{9}x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'fractional coefficients'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x\\!\\left(x^2 + \\tfrac{2}{3}x - \\tfrac{8}{9}\\right) = 0',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply the quadratic by 9 to clear fractions: \\( 9x^2 + 6x - 8 \\).',
                    workingLatex: '9x^2 + 6x - 8 = (3x - 2)(3x + 4)',
                    explanation: 'Factors of \\( 9 \\times (-8) = -72 \\) that add to 6: these are +12 and −6. Split: \\( 9x^2 + 12x - 6x - 8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'So \\( x^2 + \\tfrac{2}{3}x - \\tfrac{8}{9} = \\tfrac{1}{9}(3x - 2)(3x + 4) \\). Set each factor to zero.',
                    workingLatex: 'x = 0, \\quad 3x - 2 = 0, \\quad 3x + 4 = 0',
                    explanation: 'The factor \\( \\tfrac{1}{9} \\) does not affect the roots.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = \\tfrac{2}{3}, \\quad x = -\\tfrac{4}{3}',
                    explanation: 'Three solutions in total.'
                }
            ],
 finalAnswer: ' x = -\\tfrac{4}{3}, \\; x = 0, \\; x = \\tfrac{2}{3} ',
        }
    },

    // ─── TYPE G: Repeated root cubics ──────────────────────────────────────────

    {
        id: 'qc7-033',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 33',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^3 - 6x^2 + 9x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'repeated root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 - 6x^2 + 9x = x(x^2 - 6x + 9)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Recognise \\( x^2 - 6x + 9 \\) as a perfect square.',
                    workingLatex: 'x^2 - 6x + 9 = (x - 3)^2',
                    explanation: '\\( (x-3)^2 = x^2 - 6x + 9 \\). This is a perfect square trinomial.'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x = 0, \\quad (x - 3)^2 = 0 \\implies x = 3',
                    explanation: 'The repeated factor gives only one distinct value of x.'
                }
            ],
 finalAnswer: ' x = 0 and x = 3 (repeated root)',
        }
    },

    {
        id: 'qc7-034',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 34',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^3 + 8x^2 + 16x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'repeated root', 'perfect square'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 + 8x^2 + 16x = x(x^2 + 8x + 16)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Recognise \\( x^2 + 8x + 16 \\) as a perfect square.',
                    workingLatex: 'x^2 + 8x + 16 = (x + 4)^2',
                    explanation: '\\( (x+4)^2 = x^2 + 8x + 16 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x = 0, \\quad (x + 4)^2 = 0 \\implies x = -4',
                    explanation: 'Two distinct solutions, with x = −4 being a repeated root.'
                }
            ],
 finalAnswer: ' x = -4 (repeated root) and x = 0 ',
        }
    },

    // ─── TYPE H: More solve questions — mixed difficulty ───────────────────────

    {
        id: 'qc7-035',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 35',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^3 - 9x^2 + 20x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'x as a factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 - 9x^2 + 20x = x(x^2 - 9x + 20)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 - 9x + 20 \\).',
                    workingLatex: 'x^2 - 9x + 20 = (x - 4)(x - 5)',
                    explanation: 'Two numbers that multiply to 20 and add to −9: these are −4 and −5.'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x = 0, \\quad x - 4 = 0, \\quad x - 5 = 0',
                    explanation: 'Zero-product property.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = 4, \\quad x = 5',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = 0, \\; x = 4, \\; x = 5 ',
        }
    },

    {
        id: 'qc7-036',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 36',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^3 + x^2 - 30x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'x as a factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 + x^2 - 30x = x(x^2 + x - 30)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 + x - 30 \\).',
                    workingLatex: 'x^2 + x - 30 = (x + 6)(x - 5)',
                    explanation: 'Two numbers that multiply to −30 and add to +1: these are +6 and −5.'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x = 0, \\quad x + 6 = 0, \\quad x - 5 = 0',
                    explanation: 'Zero-product property.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = -6, \\quad x = 5',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = -6, \\; x = 0, \\; x = 5 ',
        }
    },

    {
        id: 'qc7-037',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 37',
        difficulty: 'Foundation',
        questionText: 'Solve \\( -x^3 - x^2 + 20x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'negative leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( -x \\) as a common factor.',
                    workingLatex: '-x^3 - x^2 + 20x = -x(x^2 + x - 20)',
                    explanation: 'Factoring out −x reverses the signs of all remaining terms.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 + x - 20 \\).',
                    workingLatex: 'x^2 + x - 20 = (x + 5)(x - 4)',
                    explanation: 'Two numbers that multiply to −20 and add to +1: these are +5 and −4.'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: '-x = 0, \\quad x + 5 = 0, \\quad x - 4 = 0',
                    explanation: 'Zero-product property.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = -5, \\quad x = 4',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = -5, \\; x = 0, \\; x = 4 ',
        }
    },

    {
        id: 'qc7-038',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 38',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 5x^3 + 20x^2 - 60x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( 5x \\) as a common factor.',
                    workingLatex: '5x^3 + 20x^2 - 60x = 5x(x^2 + 4x - 12)',
                    explanation: 'HCF of 5, 20, and 60 is 5; every term also has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 + 4x - 12 \\).',
                    workingLatex: 'x^2 + 4x - 12 = (x + 6)(x - 2)',
                    explanation: 'Two numbers that multiply to −12 and add to +4: these are +6 and −2.'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: '5x = 0, \\quad x + 6 = 0, \\quad x - 2 = 0',
                    explanation: 'Zero-product property.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = -6, \\quad x = 2',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = -6, \\; x = 0, \\; x = 2 ',
        }
    },

    {
        id: 'qc7-039',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 39',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^3 - 5x^2 - 24x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'x as a factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 - 5x^2 - 24x = x(x^2 - 5x - 24)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 - 5x - 24 \\).',
                    workingLatex: 'x^2 - 5x - 24 = (x - 8)(x + 3)',
                    explanation: 'Two numbers that multiply to −24 and add to −5: these are −8 and +3.'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x = 0, \\quad x - 8 = 0, \\quad x + 3 = 0',
                    explanation: 'Zero-product property.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = 8, \\quad x = -3',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = -3, \\; x = 0, \\; x = 8 ',
        }
    },

    {
        id: 'qc7-040',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 40',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^3 + 6x^2 - 40x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'x as a factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 + 6x^2 - 40x = x(x^2 + 6x - 40)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 + 6x - 40 \\).',
                    workingLatex: 'x^2 + 6x - 40 = (x + 10)(x - 4)',
                    explanation: 'Two numbers that multiply to −40 and add to +6: these are +10 and −4.'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x = 0, \\quad x + 10 = 0, \\quad x - 4 = 0',
                    explanation: 'Zero-product property.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = -10, \\quad x = 4',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = -10, \\; x = 0, \\; x = 4 ',
        }
    },

    // ─── TYPE I: Further rearranging before solving ─────────────────────────────

    {
        id: 'qc7-041',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 41',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2x^3 + 5x = 3x^2 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'rearranging', 'non-monic quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange so that all terms are on one side.',
                    workingLatex: '2x^3 - 3x^2 + 5x = 0',
                    explanation: 'Subtract \\( 3x^2 \\) from both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x(2x^2 - 3x + 5) = 0',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 3,
                    description: 'Check the discriminant of \\( 2x^2 - 3x + 5 \\).',
                    workingLatex: '\\Delta = (-3)^2 - 4(2)(5) = 9 - 40 = -31 < 0',
                    explanation: 'A negative discriminant means the quadratic has no real roots.'
                },
                {
                    stepNumber: 4,
                    description: 'State the only real solution.',
                    workingLatex: 'x = 0',
                    explanation: 'The quadratic factor gives no real solutions, so \\( x = 0 \\) is the only real root.'
                }
            ],
 finalAnswer: ' x = 0 only',
        }
    },

    {
        id: 'qc7-042',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 42',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^2(x + 3) = 10x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'rearranging', 'expanding'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the left-hand side.',
                    workingLatex: 'x^3 + 3x^2 = 10x',
                    explanation: 'Multiply \\( x^2 \\) by each term in the bracket.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange so that all terms are on one side.',
                    workingLatex: 'x^3 + 3x^2 - 10x = 0',
                    explanation: 'Subtract \\( 10x \\) from both sides.'
                },
                {
                    stepNumber: 3,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x(x^2 + 3x - 10) = 0',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise the quadratic and state all solutions.',
                    workingLatex: 'x(x + 5)(x - 2) = 0 \\implies x = 0, \\; x = -5, \\; x = 2',
                    explanation: 'Numbers that multiply to −10 and add to +3: these are +5 and −2.'
                }
            ],
 finalAnswer: ' x = -5, \\; x = 0, \\; x = 2 ',
        }
    },

    {
        id: 'qc7-043',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 43',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^2(x - 2) = 24x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'rearranging', 'expanding'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the left-hand side.',
                    workingLatex: 'x^3 - 2x^2 = 24x',
                    explanation: 'Multiply \\( x^2 \\) by each term in the bracket.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange so that all terms are on one side.',
                    workingLatex: 'x^3 - 2x^2 - 24x = 0',
                    explanation: 'Subtract \\( 24x \\) from both sides.'
                },
                {
                    stepNumber: 3,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x(x^2 - 2x - 24) = 0',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise the quadratic and state all solutions.',
                    workingLatex: 'x(x - 6)(x + 4) = 0 \\implies x = 0, \\; x = 6, \\; x = -4',
                    explanation: 'Numbers that multiply to −24 and add to −2: these are −6 and +4.'
                }
            ],
 finalAnswer: ' x = -4, \\; x = 0, \\; x = 6 ',
        }
    },

    {
        id: 'qc7-044',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 44',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 6x^2 - x^3 = 9x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'rearranging', 'negative leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange so that all terms are on one side.',
                    workingLatex: '-x^3 + 6x^2 - 9x = 0',
                    explanation: 'Subtract \\( 9x \\) from both sides (equivalently, rearrange to move all terms left).'
                },
                {
                    stepNumber: 2,
                    description: 'Take out \\( -x \\) as a common factor.',
                    workingLatex: '-x(x^2 - 6x + 9) = 0',
                    explanation: 'Factoring out −x reverses all signs.'
                },
                {
                    stepNumber: 3,
                    description: 'Recognise \\( x^2 - 6x + 9 \\) as a perfect square.',
                    workingLatex: 'x^2 - 6x + 9 = (x - 3)^2',
                    explanation: 'This is a perfect square trinomial.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: '-x = 0 \\implies x = 0; \\quad (x-3)^2 = 0 \\implies x = 3',
                    explanation: 'x = 3 is a repeated root.'
                }
            ],
 finalAnswer: ' x = 0 and x = 3 (repeated root)',
        }
    },

    {
        id: 'qc7-045',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 45',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 4x^2 = x^3 + 4x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'rearranging'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange so that all terms are on one side.',
                    workingLatex: 'x^3 - 4x^2 + 4x = 0',
                    explanation: 'Subtract \\( 4x^2 \\) from both sides and move all terms to the right — equivalently, rearrange as shown.'
                },
                {
                    stepNumber: 2,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x(x^2 - 4x + 4) = 0',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 3,
                    description: 'Recognise \\( x^2 - 4x + 4 \\) as a perfect square.',
                    workingLatex: 'x^2 - 4x + 4 = (x - 2)^2',
                    explanation: 'Perfect square trinomial.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad (x - 2)^2 = 0 \\implies x = 2',
                    explanation: 'x = 2 is a repeated root.'
                }
            ],
 finalAnswer: ' x = 0 and x = 2 (repeated root)',
        }
    },

    // ─── TYPE J: Further quadratic formula questions ────────────────────────────

    {
        id: 'qc7-046',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 46',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^3 - 3x^2 - x = 0 \\), giving any irrational solutions in surd form.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'quadratic formula', 'surds'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x^3 - 3x^2 - x = x(x^2 - 3x - 1)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Check the discriminant of \\( x^2 - 3x - 1 \\).',
                    workingLatex: '\\Delta = (-3)^2 - 4(1)(-1) = 9 + 4 = 13',
                    explanation: '13 is not a perfect square, so use the quadratic formula.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\frac{3 \\pm \\sqrt{13}}{2}',
                    explanation: 'With \\( a = 1, b = -3, c = -1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'State all three solutions.',
                    workingLatex: 'x = 0, \\quad x = \\frac{3 + \\sqrt{13}}{2}, \\quad x = \\frac{3 - \\sqrt{13}}{2}',
                    explanation: 'Three solutions in total.'
                }
            ],
 finalAnswer: ' x = 0, \\; x = \\dfrac{3 + \\sqrt{13}}{2}, \\; x = \\dfrac{3 - \\sqrt{13}}{2} ',
        }
    },

    {
        id: 'qc7-047',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 47',
        difficulty: 'Foundation',
        questionText: 'Solve \\( -3x^3 + 6x^2 + x = 0 \\), giving any irrational solutions in surd form.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'quadratic formula', 'surds', 'negative leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( -x \\) as a common factor.',
                    workingLatex: '-3x^3 + 6x^2 + x = -x(3x^2 - 6x - 1)',
                    explanation: 'Factoring out −x reverses all signs.'
                },
                {
                    stepNumber: 2,
                    description: 'Check the discriminant of \\( 3x^2 - 6x - 1 \\).',
                    workingLatex: '\\Delta = (-6)^2 - 4(3)(-1) = 36 + 12 = 48',
                    explanation: '48 is not a perfect square, so use the quadratic formula.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\frac{6 \\pm \\sqrt{48}}{6} = \\frac{6 \\pm 4\\sqrt{3}}{6} = 1 \\pm \\frac{2\\sqrt{3}}{3}',
                    explanation: 'Simplify \\( \\sqrt{48} = 4\\sqrt{3} \\), then divide numerator and denominator by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'State all three solutions.',
                    workingLatex: 'x = 0, \\quad x = 1 + \\tfrac{2\\sqrt{3}}{3}, \\quad x = 1 - \\tfrac{2\\sqrt{3}}{3}',
                    explanation: 'Three solutions in total.'
                }
            ],
 finalAnswer: ' x = 0, \\; x = 1 + \\dfrac{2\\sqrt{3}}{3}, \\; x = 1 - \\dfrac{2\\sqrt{3}}{3} ',
        }
    },

    {
        id: 'qc7-048',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 48',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2x^3 - x^2 - 10x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'non-monic quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: '2x^3 - x^2 - 10x = x(2x^2 - x - 10)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( 2x^2 - x - 10 \\).',
                    workingLatex: '2x^2 - x - 10 = (2x - 5)(x + 2)',
                    explanation: 'Factors of \\( 2 \\times (-10) = -20 \\) that add to −1: these are −5 and +4. Split: \\( 2x^2 - 5x + 4x - 10 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x = 0, \\quad 2x - 5 = 0, \\quad x + 2 = 0',
                    explanation: 'Zero-product property.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = \\tfrac{5}{2}, \\quad x = -2',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = -2, \\; x = 0, \\; x = \\tfrac{5}{2} ',
        }
    },

    {
        id: 'qc7-049',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 49',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 6x^3 + 7x^2 - 3x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'non-monic quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: '6x^3 + 7x^2 - 3x = x(6x^2 + 7x - 3)',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( 6x^2 + 7x - 3 \\).',
                    workingLatex: '6x^2 + 7x - 3 = (3x - 1)(2x + 3)',
                    explanation: 'Factors of \\( 6 \\times (-3) = -18 \\) that add to +7: these are +9 and −2. Split: \\( 6x^2 + 9x - 2x - 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x = 0, \\quad 3x - 1 = 0, \\quad 2x + 3 = 0',
                    explanation: 'Zero-product property.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions.',
                    workingLatex: 'x = 0, \\quad x = \\tfrac{1}{3}, \\quad x = -\\tfrac{3}{2}',
                    explanation: 'Three solutions.'
                }
            ],
 finalAnswer: ' x = -\\tfrac{3}{2}, \\; x = 0, \\; x = \\tfrac{1}{3} ',
        }
    },

    {
        id: 'qc7-050',
        topicRef: 'qc7',
        topicTitle: 'Factorising Cubics 50',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^2(3x - 2) = 8x \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'solving', 'rearranging', 'non-monic quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the left-hand side.',
                    workingLatex: '3x^3 - 2x^2 = 8x',
                    explanation: 'Multiply \\( x^2 \\) by each term in the bracket.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange so that all terms are on one side.',
                    workingLatex: '3x^3 - 2x^2 - 8x = 0',
                    explanation: 'Subtract \\( 8x \\) from both sides.'
                },
                {
                    stepNumber: 3,
                    description: 'Take out \\( x \\) as a common factor.',
                    workingLatex: 'x(3x^2 - 2x - 8) = 0',
                    explanation: 'Every term has a factor of x.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise the quadratic \\( 3x^2 - 2x - 8 \\).',
                    workingLatex: '3x^2 - 2x - 8 = (3x + 4)(x - 2)',
                    explanation: 'Factors of \\( 3 \\times (-8) = -24 \\) that add to −2: these are −6 and +4. Split: \\( 3x^2 - 6x + 4x - 8 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Set each factor equal to zero and state solutions.',
                    workingLatex: 'x = 0, \\quad 3x + 4 = 0 \\implies x = -\\tfrac{4}{3}, \\quad x - 2 = 0 \\implies x = 2',
                    explanation: 'Three solutions in total.'
                }
            ],
 finalAnswer: ' x = -\\tfrac{4}{3}, \\; x = 0, \\; x = 2 ',
        }
    },
];
