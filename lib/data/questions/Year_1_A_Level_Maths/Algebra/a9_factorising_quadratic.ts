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
        id: 'a9-01',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 01',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 + 5x + 6 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write down two brackets, each starting with \\( x \\).',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Since the leading coefficient is 1, both brackets begin with \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find two numbers that multiply to give \\( +6 \\) and add to give \\( +5 \\).',
                    workingLatex: '2 \\times 3 = 6, \\quad 2 + 3 = 5',
                    explanation: 'The pair \\( (2, 3) \\) works for both conditions.'
                },
                {
                    stepNumber: 3,
                    description: 'Place the numbers into the brackets.',
                    workingLatex: '(x + 2)(x + 3)',
                    explanation: 'Both signs are positive because c and b are positive.'
                }
            ],
            finalAnswer: '(x + 2)(x + 3)'
        }
    },
    {
        id: 'a9-02',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 02',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 + 7x + 12 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up two brackets starting with \\( x \\).',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'The leading term is \\( x^2 \\), so both brackets begin with \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find two numbers that multiply to 12 and add to 7.',
                    workingLatex: '3 \\times 4 = 12, \\quad 3 + 4 = 7',
                    explanation: 'Factor pairs of 12 are (1,12), (2,6), (3,4). Only (3,4) adds to 7.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the factorised form.',
                    workingLatex: '(x + 3)(x + 4)',
                    explanation: 'Both signs are positive.'
                }
            ],
            finalAnswer: '(x + 3)(x + 4)'
        }
    },
    {
        id: 'a9-03',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 03',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 + 9x + 20 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up the two brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Leading coefficient is 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Find two numbers multiplying to 20 and adding to 9.',
                    workingLatex: '4 \\times 5 = 20, \\quad 4 + 5 = 9',
                    explanation: 'Factor pairs of 20: (1,20), (2,10), (4,5). Only (4,5) adds to 9.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the factors.',
                    workingLatex: '(x + 4)(x + 5)',
                    explanation: 'Both positive.'
                }
            ],
            finalAnswer: '(x + 4)(x + 5)'
        }
    },
    {
        id: 'a9-04',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 04',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 + 11x + 24 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write down two brackets beginning with \\( x \\).',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find two numbers multiplying to 24 and adding to 11.',
                    workingLatex: '3 \\times 8 = 24, \\quad 3 + 8 = 11',
                    explanation: 'Factor pairs of 24: (1,24),(2,12),(3,8),(4,6). Only (3,8) sums to 11.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x + 3)(x + 8)',
                    explanation: 'Both signs positive.'
                }
            ],
            finalAnswer: '(x + 3)(x + 8)'
        }
    },
    {
        id: 'a9-05',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 05',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 + 10x + 21 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up two brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Leading coefficient is 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to 21 and adding to 10.',
                    workingLatex: '3 \\times 7 = 21, \\quad 3 + 7 = 10',
                    explanation: 'Factor pairs of 21: (1,21),(3,7). (3,7) works.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x + 3)(x + 7)',
                    explanation: 'Both signs positive.'
                }
            ],
            finalAnswer: '(x + 3)(x + 7)'
        }
    },
    {
        id: 'a9-06',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 06',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 7x + 10 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find two numbers that multiply to 10 and add to \\( -7 \\).',
                    workingLatex: '(-2) \\times (-5) = 10, \\quad (-2) + (-5) = -7',
                    explanation: 'c is positive and b is negative, so both signs are negative.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the factorised form.',
                    workingLatex: '(x - 2)(x - 5)',
                    explanation: 'Both factors negative.'
                }
            ],
            finalAnswer: '(x - 2)(x - 5)'
        }
    },
    {
        id: 'a9-07',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 07',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 9x + 18 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to 18 and adding to \\( -9 \\).',
                    workingLatex: '(-3) \\times (-6) = 18, \\quad (-3) + (-6) = -9',
                    explanation: 'Both signs negative because c > 0 and b < 0.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x - 3)(x - 6)',
                    explanation: 'Both factors are negative.'
                }
            ],
            finalAnswer: '(x - 3)(x - 6)'
        }
    },
    {
        id: 'a9-08',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 08',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 11x + 28 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Leading coefficient is 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to 28 and adding to \\( -11 \\).',
                    workingLatex: '(-4) \\times (-7) = 28, \\quad (-4) + (-7) = -11',
                    explanation: 'Both signs negative.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x - 4)(x - 7)',
                    explanation: 'Both factors are negative.'
                }
            ],
            finalAnswer: '(x - 4)(x - 7)'
        }
    },
    {
        id: 'a9-09',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 09',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 13x + 36 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to 36 and adding to \\( -13 \\).',
                    workingLatex: '(-4) \\times (-9) = 36, \\quad (-4) + (-9) = -13',
                    explanation: 'Factor pairs of 36: (1,36),(2,18),(3,12),(4,9),(6,6). The pair (4,9) adds to 13.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x - 4)(x - 9)',
                    explanation: 'Both signs negative.'
                }
            ],
            finalAnswer: '(x - 4)(x - 9)'
        }
    },
    {
        id: 'a9-10',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 10',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 15x + 56 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to 56 and adding to \\( -15 \\).',
                    workingLatex: '(-7) \\times (-8) = 56, \\quad (-7) + (-8) = -15',
                    explanation: 'Factor pairs: (1,56),(2,28),(4,14),(7,8). (7,8) adds to 15.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x - 7)(x - 8)',
                    explanation: 'Both signs negative.'
                }
            ],
            finalAnswer: '(x - 7)(x - 8)'
        }
    },
    {
        id: 'a9-11',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 11',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 + 2x - 15 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to \\( -15 \\) and adding to \\( +2 \\).',
                    workingLatex: '5 \\times (-3) = -15, \\quad 5 + (-3) = 2',
                    explanation: 'c is negative so the signs are opposite.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x + 5)(x - 3)',
                    explanation: 'The larger number (5) takes the positive sign.'
                }
            ],
            finalAnswer: '(x + 5)(x - 3)'
        }
    },
    {
        id: 'a9-12',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 12',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 + 4x - 21 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to \\( -21 \\) and adding to \\( +4 \\).',
                    workingLatex: '7 \\times (-3) = -21, \\quad 7 + (-3) = 4',
                    explanation: 'Opposite signs because c is negative.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x + 7)(x - 3)',
                    explanation: 'The larger value 7 is positive.'
                }
            ],
            finalAnswer: '(x + 7)(x - 3)'
        }
    },
    {
        id: 'a9-13',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 13',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 + 3x - 28 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to \\( -28 \\) and adding to \\( +3 \\).',
                    workingLatex: '7 \\times (-4) = -28, \\quad 7 + (-4) = 3',
                    explanation: 'Factor pairs of 28: (1,28),(2,14),(4,7). (4,7) gives a difference of 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x + 7)(x - 4)',
                    explanation: 'Larger number (7) is positive.'
                }
            ],
            finalAnswer: '(x + 7)(x - 4)'
        }
    },
    {
        id: 'a9-14',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 14',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 + 5x - 24 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to \\( -24 \\) and adding to \\( +5 \\).',
                    workingLatex: '8 \\times (-3) = -24, \\quad 8 + (-3) = 5',
                    explanation: 'Factor pairs of 24: (1,24),(2,12),(3,8),(4,6). (3,8) gives a difference of 5.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x + 8)(x - 3)',
                    explanation: 'Larger (8) is positive.'
                }
            ],
            finalAnswer: '(x + 8)(x - 3)'
        }
    },
    {
        id: 'a9-15',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 15',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 + x - 30 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to \\( -30 \\) and adding to \\( +1 \\).',
                    workingLatex: '6 \\times (-5) = -30, \\quad 6 + (-5) = 1',
                    explanation: 'Factor pairs of 30: (1,30),(2,15),(3,10),(5,6). (5,6) differs by 1.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x + 6)(x - 5)',
                    explanation: 'Larger (6) takes the positive sign.'
                }
            ],
            finalAnswer: '(x + 6)(x - 5)'
        }
    },
    {
        id: 'a9-16',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 16',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 2x - 15 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to \\( -15 \\) and adding to \\( -2 \\).',
                    workingLatex: '(-5) \\times 3 = -15, \\quad (-5) + 3 = -2',
                    explanation: 'Opposite signs; the larger number is negative this time.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x - 5)(x + 3)',
                    explanation: 'Larger (5) takes the negative sign.'
                }
            ],
            finalAnswer: '(x - 5)(x + 3)'
        }
    },
    {
        id: 'a9-17',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 17',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 3x - 10 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to \\( -10 \\) and adding to \\( -3 \\).',
                    workingLatex: '(-5) \\times 2 = -10, \\quad (-5) + 2 = -3',
                    explanation: 'Opposite signs; the larger factor (5) is negative.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x - 5)(x + 2)',
                    explanation: 'Larger goes with the negative sign.'
                }
            ],
            finalAnswer: '(x - 5)(x + 2)'
        }
    },
    {
        id: 'a9-18',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 18',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 5x - 14 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to \\( -14 \\) and adding to \\( -5 \\).',
                    workingLatex: '(-7) \\times 2 = -14, \\quad (-7) + 2 = -5',
                    explanation: 'Opposite signs with larger factor negative.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x - 7)(x + 2)',
                    explanation: 'Larger (7) is negative.'
                }
            ],
            finalAnswer: '(x - 7)(x + 2)'
        }
    },
    {
        id: 'a9-19',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 19',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 6x - 16 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to \\( -16 \\) and adding to \\( -6 \\).',
                    workingLatex: '(-8) \\times 2 = -16, \\quad (-8) + 2 = -6',
                    explanation: 'Opposite signs with larger factor negative.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x - 8)(x + 2)',
                    explanation: 'Larger (8) is negative.'
                }
            ],
            finalAnswer: '(x - 8)(x + 2)'
        }
    },
    {
        id: 'a9-20',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 20',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 4x - 32 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to \\( -32 \\) and adding to \\( -4 \\).',
                    workingLatex: '(-8) \\times 4 = -32, \\quad (-8) + 4 = -4',
                    explanation: 'Factor pairs of 32: (1,32),(2,16),(4,8). (4,8) differs by 4.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x - 8)(x + 4)',
                    explanation: 'Larger (8) is negative.'
                }
            ],
            finalAnswer: '(x - 8)(x + 4)'
        }
    },
    {
        id: 'a9-21',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 21',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 + 8x + 16 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'perfect square'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to 16 and adding to 8.',
                    workingLatex: '4 \\times 4 = 16, \\quad 4 + 4 = 8',
                    explanation: 'A repeated factor of 4 works — this is a perfect square.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x + 4)(x + 4) = (x + 4)^2',
                    explanation: 'Repeated factor gives a perfect square.'
                }
            ],
            finalAnswer: '(x + 4)^2'
        }
    },
    {
        id: 'a9-22',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 22',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 10x + 25 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'perfect square'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to 25 and adding to \\( -10 \\).',
                    workingLatex: '(-5) \\times (-5) = 25, \\quad (-5) + (-5) = -10',
                    explanation: 'Repeated factor of \\( -5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x - 5)^2',
                    explanation: 'Perfect square.'
                }
            ],
            finalAnswer: '(x - 5)^2'
        }
    },
    {
        id: 'a9-23',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 23',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 + 12x + 36 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'perfect square'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to 36 and adding to 12.',
                    workingLatex: '6 \\times 6 = 36, \\quad 6 + 6 = 12',
                    explanation: 'Repeated factor of 6.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x + 6)^2',
                    explanation: 'Perfect square.'
                }
            ],
            finalAnswer: '(x + 6)^2'
        }
    },
    {
        id: 'a9-24',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 24',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 14x + 49 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'perfect square'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to 49 and adding to \\( -14 \\).',
                    workingLatex: '(-7) \\times (-7) = 49, \\quad (-7) + (-7) = -14',
                    explanation: 'Repeated factor of \\( -7 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x - 7)^2',
                    explanation: 'Perfect square.'
                }
            ],
            finalAnswer: '(x - 7)^2'
        }
    },
    {
        id: 'a9-25',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 25',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 25 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the difference of two squares.',
                    workingLatex: 'x^2 - 25 = x^2 - 5^2',
                    explanation: 'Both \\( x^2 \\) and 25 are perfect squares separated by a minus sign.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( a^2 - b^2 = (a - b)(a + b) \\).',
                    workingLatex: '(x - 5)(x + 5)',
                    explanation: 'Replace \\( a \\) with \\( x \\) and \\( b \\) with 5.'
                }
            ],
            finalAnswer: '(x - 5)(x + 5)'
        }
    },
    {
        id: 'a9-26',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 26',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 64 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the difference of two squares.',
                    workingLatex: 'x^2 - 64 = x^2 - 8^2',
                    explanation: '64 = \\( 8^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the difference of two squares formula.',
                    workingLatex: '(x - 8)(x + 8)',
                    explanation: 'One bracket with a minus, one with a plus.'
                }
            ],
            finalAnswer: '(x - 8)(x + 8)'
        }
    },
    {
        id: 'a9-27',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 27',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 100 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the difference of two squares.',
                    workingLatex: 'x^2 - 100 = x^2 - 10^2',
                    explanation: '100 = \\( 10^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the formula.',
                    workingLatex: '(x - 10)(x + 10)',
                    explanation: 'Difference of two squares.'
                }
            ],
            finalAnswer: '(x - 10)(x + 10)'
        }
    },
    {
        id: 'a9-28',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 28',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 81 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the difference of two squares.',
                    workingLatex: 'x^2 - 81 = x^2 - 9^2',
                    explanation: '81 = \\( 9^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the formula.',
                    workingLatex: '(x - 9)(x + 9)',
                    explanation: 'Difference of two squares.'
                }
            ],
            finalAnswer: '(x - 9)(x + 9)'
        }
    },
    {
        id: 'a9-29',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 29',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 8x \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'common factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the common factor in both terms.',
                    workingLatex: 'x^2 - 8x',
                    explanation: 'Both terms contain an \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factor out \\( x \\).',
                    workingLatex: 'x(x - 8)',
                    explanation: 'Dividing each term by \\( x \\) gives \\( x \\) and \\( -8 \\).'
                }
            ],
            finalAnswer: 'x(x - 8)'
        }
    },
    {
        id: 'a9-30',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 30',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 + 11x \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'common factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the common factor.',
                    workingLatex: 'x^2 + 11x',
                    explanation: 'Both terms share an \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factor out \\( x \\).',
                    workingLatex: 'x(x + 11)',
                    explanation: 'Pulling out \\( x \\) leaves \\( x + 11 \\) inside the bracket.'
                }
            ],
            finalAnswer: 'x(x + 11)'
        }
    },
    {
        id: 'a9-31',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 31',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 2x^2 + 7x + 3 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets that will give \\( 2x^2 \\) when multiplied.',
                    workingLatex: '(2x \\quad )(x \\quad )',
                    explanation: '\\( 2x \\times x = 2x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to 3 that combine with 2x and x to give 7x.',
                    workingLatex: '(2x + 1)(x + 3): \\; 2x \\cdot 3 + 1 \\cdot x = 6x + x = 7x',
                    explanation: 'Try the pair (1, 3) and check which arrangement gives 7x.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(2x + 1)(x + 3)',
                    explanation: 'All signs positive.'
                }
            ],
            finalAnswer: '(2x + 1)(x + 3)'
        }
    },
    {
        id: 'a9-32',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 32',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 2x^2 + 9x + 4 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(2x \\quad )(x \\quad )',
                    explanation: '\\( 2x \\times x = 2x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Try pairs that multiply to 4 and give a middle term of 9x.',
                    workingLatex: '(2x + 1)(x + 4): \\; 2x \\cdot 4 + 1 \\cdot x = 8x + x = 9x',
                    explanation: 'The pair (1, 4) works with 1 in the first bracket.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(2x + 1)(x + 4)',
                    explanation: 'All signs positive.'
                }
            ],
            finalAnswer: '(2x + 1)(x + 4)'
        }
    },
    {
        id: 'a9-33',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 33',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 2x^2 + 11x + 5 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(2x \\quad )(x \\quad )',
                    explanation: '\\( 2x \\times x = 2x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find a pair multiplying to 5 that gives middle term 11x.',
                    workingLatex: '(2x + 1)(x + 5): \\; 10x + x = 11x',
                    explanation: 'Put 1 with 2x and 5 with x.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(2x + 1)(x + 5)',
                    explanation: 'All signs positive.'
                }
            ],
            finalAnswer: '(2x + 1)(x + 5)'
        }
    },
    {
        id: 'a9-34',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 34',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 3x^2 + 10x + 3 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(3x \\quad )(x \\quad )',
                    explanation: '\\( 3x \\times x = 3x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find a pair multiplying to 3 that gives middle term 10x.',
                    workingLatex: '(3x + 1)(x + 3): \\; 9x + x = 10x',
                    explanation: 'Put 1 with 3x and 3 with x.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(3x + 1)(x + 3)',
                    explanation: 'All signs positive.'
                }
            ],
            finalAnswer: '(3x + 1)(x + 3)'
        }
    },
    {
        id: 'a9-35',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 35',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 3x^2 + 8x + 4 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(3x \\quad )(x \\quad )',
                    explanation: '\\( 3x \\times x = 3x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find a pair multiplying to 4 that gives middle term 8x.',
                    workingLatex: '(3x + 2)(x + 2): \\; 6x + 2x = 8x',
                    explanation: 'Pair (2, 2) works.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(3x + 2)(x + 2)',
                    explanation: 'All signs positive.'
                }
            ],
            finalAnswer: '(3x + 2)(x + 2)'
        }
    },
    {
        id: 'a9-36',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 36',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 2x^2 - 7x + 3 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(2x \\quad )(x \\quad )',
                    explanation: '\\( 2x \\times x = 2x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Since c > 0 and b < 0, both signs are negative. Find a pair with product 3 giving middle term \\( -7x \\).',
                    workingLatex: '(2x - 1)(x - 3): \\; -6x - x = -7x',
                    explanation: 'Place \\( -1 \\) with \\( 2x \\) and \\( -3 \\) with \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(2x - 1)(x - 3)',
                    explanation: 'Both signs negative.'
                }
            ],
            finalAnswer: '(2x - 1)(x - 3)'
        }
    },
    {
        id: 'a9-37',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 37',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 3x^2 - 11x + 6 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(3x \\quad )(x \\quad )',
                    explanation: '\\( 3x \\times x = 3x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Both signs negative. Try pairs of 6 that give \\( -11x \\) in the middle.',
                    workingLatex: '(3x - 2)(x - 3): \\; -9x - 2x = -11x',
                    explanation: '\\( -2 \\) with \\( 3x \\) and \\( -3 \\) with \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(3x - 2)(x - 3)',
                    explanation: 'Both signs negative.'
                }
            ],
            finalAnswer: '(3x - 2)(x - 3)'
        }
    },
    {
        id: 'a9-38',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 38',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 2x^2 + 5x - 3 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(2x \\quad )(x \\quad )',
                    explanation: '\\( 2x \\times x = 2x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Since c < 0, the signs are opposite. Find a combination giving \\( +5x \\).',
                    workingLatex: '(2x - 1)(x + 3): \\; 6x - x = 5x',
                    explanation: 'Place \\( -1 \\) with \\( 2x \\) and \\( +3 \\) with \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(2x - 1)(x + 3)',
                    explanation: 'Opposite signs.'
                }
            ],
            finalAnswer: '(2x - 1)(x + 3)'
        }
    },
    {
        id: 'a9-39',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 39',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 3x^2 + 5x - 2 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(3x \\quad )(x \\quad )',
                    explanation: '\\( 3x \\times x = 3x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'c is negative so signs are opposite. Find a combination giving \\( +5x \\).',
                    workingLatex: '(3x - 1)(x + 2): \\; 6x - x = 5x',
                    explanation: '\\( -1 \\) with \\( 3x \\) and \\( +2 \\) with \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(3x - 1)(x + 2)',
                    explanation: 'Opposite signs.'
                }
            ],
            finalAnswer: '(3x - 1)(x + 2)'
        }
    },
    {
        id: 'a9-40',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 40',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 2x^2 - 5x - 3 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(2x \\quad )(x \\quad )',
                    explanation: '\\( 2x \\times x = 2x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Opposite signs needed. Find a combination giving \\( -5x \\).',
                    workingLatex: '(2x + 1)(x - 3): \\; -6x + x = -5x',
                    explanation: '\\( +1 \\) with \\( 2x \\) and \\( -3 \\) with \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(2x + 1)(x - 3)',
                    explanation: 'Opposite signs.'
                }
            ],
            finalAnswer: '(2x + 1)(x - 3)'
        }
    },
    {
        id: 'a9-41',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 41',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 3x^2 - 7x - 6 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(3x \\quad )(x \\quad )',
                    explanation: '\\( 3x \\times x = 3x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Opposite signs. Try (3x + 2)(x − 3).',
                    workingLatex: '(3x + 2)(x - 3): \\; -9x + 2x = -7x',
                    explanation: '\\( +2 \\) with \\( 3x \\) and \\( -3 \\) with \\( x \\) gives the correct middle term.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(3x + 2)(x - 3)',
                    explanation: 'Opposite signs.'
                }
            ],
            finalAnswer: '(3x + 2)(x - 3)'
        }
    },
    {
        id: 'a9-42',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 42',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 4x^2 - 9 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the difference of two squares.',
                    workingLatex: '4x^2 - 9 = (2x)^2 - 3^2',
                    explanation: 'Both \\( 4x^2 \\) and 9 are perfect squares.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( a^2 - b^2 = (a - b)(a + b) \\).',
                    workingLatex: '(2x - 3)(2x + 3)',
                    explanation: 'Here \\( a = 2x \\) and \\( b = 3 \\).'
                }
            ],
            finalAnswer: '(2x - 3)(2x + 3)'
        }
    },
    {
        id: 'a9-43',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 43',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 9x^2 - 16 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the difference of two squares.',
                    workingLatex: '9x^2 - 16 = (3x)^2 - 4^2',
                    explanation: '\\( 9x^2 = (3x)^2 \\) and \\( 16 = 4^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the formula.',
                    workingLatex: '(3x - 4)(3x + 4)',
                    explanation: 'Here \\( a = 3x \\) and \\( b = 4 \\).'
                }
            ],
            finalAnswer: '(3x - 4)(3x + 4)'
        }
    },
    {
        id: 'a9-44',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 44',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 25x^2 - 49 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the difference of two squares.',
                    workingLatex: '25x^2 - 49 = (5x)^2 - 7^2',
                    explanation: '\\( 25x^2 = (5x)^2 \\) and \\( 49 = 7^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the formula.',
                    workingLatex: '(5x - 7)(5x + 7)',
                    explanation: 'Here \\( a = 5x \\) and \\( b = 7 \\).'
                }
            ],
            finalAnswer: '(5x - 7)(5x + 7)'
        }
    },
    {
        id: 'a9-45',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 45',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 2x^2 - 18 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'common factor', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out the common factor 2.',
                    workingLatex: '2(x^2 - 9)',
                    explanation: 'Both terms share a factor of 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise \\( x^2 - 9 \\) as a difference of two squares.',
                    workingLatex: '2(x - 3)(x + 3)',
                    explanation: '\\( x^2 - 9 = (x - 3)(x + 3) \\).'
                }
            ],
            finalAnswer: '2(x - 3)(x + 3)'
        }
    },
    {
        id: 'a9-46',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 46',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 3x^2 + 12x + 9 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'common factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out the common factor 3.',
                    workingLatex: '3(x^2 + 4x + 3)',
                    explanation: 'All three terms share a factor of 3.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the bracket: numbers multiplying to 3 and adding to 4.',
                    workingLatex: '1 \\times 3 = 3, \\quad 1 + 3 = 4',
                    explanation: 'The pair (1, 3) works.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '3(x + 1)(x + 3)',
                    explanation: 'Keep the factor 3 outside.'
                }
            ],
            finalAnswer: '3(x + 1)(x + 3)'
        }
    },
    {
        id: 'a9-47',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 47',
        difficulty: 'Foundation',
        questionText: 'Solve by factorising: \\( x^2 + 6x + 8 = 0 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(x + 2)(x + 4) = 0',
                    explanation: '2 and 4 multiply to 8 and add to 6.'
                },
                {
                    stepNumber: 2,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x + 2 = 0 \\; \\text{or} \\; x + 4 = 0',
                    explanation: 'If a product is zero, at least one factor must be zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve each equation.',
                    workingLatex: 'x = -2 \\; \\text{or} \\; x = -4',
                    explanation: 'These are the two roots.'
                }
            ],
            finalAnswer: 'x = -2 \\; \\text{or} \\; x = -4'
        }
    },
    {
        id: 'a9-48',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 48',
        difficulty: 'Foundation',
        questionText: 'Solve by factorising: \\( x^2 - 5x + 6 = 0 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(x - 2)(x - 3) = 0',
                    explanation: '\\( (-2) \\times (-3) = 6 \\) and \\( -2 - 3 = -5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x - 2 = 0 \\; \\text{or} \\; x - 3 = 0',
                    explanation: 'One of the factors must be zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = 2 \\; \\text{or} \\; x = 3',
                    explanation: 'These are the two solutions.'
                }
            ],
            finalAnswer: 'x = 2 \\; \\text{or} \\; x = 3'
        }
    },
    {
        id: 'a9-49',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 49',
        difficulty: 'Foundation',
        questionText: 'Solve by factorising: \\( x^2 - x - 12 = 0 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(x - 4)(x + 3) = 0',
                    explanation: '\\( (-4) \\times 3 = -12 \\) and \\( -4 + 3 = -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x - 4 = 0 \\; \\text{or} \\; x + 3 = 0',
                    explanation: 'One factor must be zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = 4 \\; \\text{or} \\; x = -3',
                    explanation: 'The two solutions.'
                }
            ],
            finalAnswer: 'x = 4 \\; \\text{or} \\; x = -3'
        }
    },
    {
        id: 'a9-50',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 50',
        difficulty: 'Foundation',
        questionText: 'Solve by factorising: \\( x^2 - 9 = 0 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the difference of two squares and factorise.',
                    workingLatex: '(x - 3)(x + 3) = 0',
                    explanation: '\\( x^2 - 9 = x^2 - 3^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x - 3 = 0 \\; \\text{or} \\; x + 3 = 0',
                    explanation: 'One of the factors must be zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = 3 \\; \\text{or} \\; x = -3',
                    explanation: 'Both roots are \\( \\pm 3 \\).'
                }
            ],
            finalAnswer: 'x = 3 \\; \\text{or} \\; x = -3'
        }
    },
    {
        id: 'a9-51',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 51',
        difficulty: 'Foundation',
        questionText: 'Solve by factorising: \\( x^2 - 2x - 8 = 0 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the quadratic. Find two numbers that multiply to \\( -8 \\) and add to \\( -2 \\).',
                    workingLatex: '(x - 4)(x + 2) = 0',
                    explanation: '\\( -4 \\times 2 = -8 \\) and \\( -4 + 2 = -2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x - 4 = 0 \\; \\text{or} \\; x + 2 = 0',
                    explanation: 'If a product is zero, at least one factor is zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve each equation.',
                    workingLatex: 'x = 4 \\; \\text{or} \\; x = -2',
                    explanation: 'These are the two roots.'
                }
            ],
            finalAnswer: 'x = 4 \\; \\text{or} \\; x = -2'
        }
    },
    {
        id: 'a9-52',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 52',
        difficulty: 'Foundation',
        questionText: 'Solve by factorising: \\( 2x^2 + 2x - 40 = 0 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving', 'common factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide through by 2 to simplify first.',
                    workingLatex: 'x^2 + x - 20 = 0',
                    explanation: 'All three coefficients share the factor 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise: find numbers multiplying to \\( -20 \\) and adding to \\( +1 \\).',
                    workingLatex: '(x + 5)(x - 4) = 0',
                    explanation: '\\( 5 \\times (-4) = -20 \\) and \\( 5 + (-4) = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor to zero and solve.',
                    workingLatex: 'x = -5 \\; \\text{or} \\; x = 4',
                    explanation: 'Two solutions from the product-is-zero rule.'
                }
            ],
            finalAnswer: 'x = -5 \\; \\text{or} \\; x = 4'
        }
    },
    {
        id: 'a9-53',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 53',
        difficulty: 'Foundation',
        questionText: 'Solve by factorising: \\( p^2 + 21p + 38 = 0 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find two numbers multiplying to 38 and adding to 21.',
                    workingLatex: '2 \\times 19 = 38, \\quad 2 + 19 = 21',
                    explanation: 'Factor pairs of 38 are (1,38) and (2,19). Only (2,19) sums to 21.'
                },
                {
                    stepNumber: 2,
                    description: 'Write the factorised equation.',
                    workingLatex: '(p + 2)(p + 19) = 0',
                    explanation: 'Both signs positive.'
                },
                {
                    stepNumber: 3,
                    description: 'Set each factor to zero and solve.',
                    workingLatex: 'p = -2 \\; \\text{or} \\; p = -19',
                    explanation: 'The two solutions.'
                }
            ],
            finalAnswer: 'p = -2 \\; \\text{or} \\; p = -19'
        }
    },
    {
        id: 'a9-54',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 54',
        difficulty: 'Foundation',
        questionText: 'Solve by factorising: \\( x^2 - 15x + 54 = 0 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find numbers multiplying to 54 and adding to \\( -15 \\).',
                    workingLatex: '(-6) \\times (-9) = 54, \\quad (-6) + (-9) = -15',
                    explanation: 'Factor pairs of 54: (1,54),(2,27),(3,18),(6,9). Only (6,9) sums to 15.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise and set to zero.',
                    workingLatex: '(x - 6)(x - 9) = 0',
                    explanation: 'Both signs negative.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve.',
                    workingLatex: 'x = 6 \\; \\text{or} \\; x = 9',
                    explanation: 'The two solutions.'
                }
            ],
            finalAnswer: 'x = 6 \\; \\text{or} \\; x = 9'
        }
    },
    {
        id: 'a9-55',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 55',
        difficulty: 'Foundation',
        questionText: 'Solve by factorising: \\( x^2 + 18x = -65 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving', 'rearranging'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange into standard form.',
                    workingLatex: 'x^2 + 18x + 65 = 0',
                    explanation: 'Add 65 to both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to 65 and adding to 18.',
                    workingLatex: '5 \\times 13 = 65, \\quad 5 + 13 = 18',
                    explanation: 'Factor pairs of 65: (1,65),(5,13). (5,13) works.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise and solve.',
                    workingLatex: '(x + 5)(x + 13) = 0 \\; \\Rightarrow \\; x = -5 \\; \\text{or} \\; x = -13',
                    explanation: 'Set each factor to zero.'
                }
            ],
            finalAnswer: 'x = -5 \\; \\text{or} \\; x = -13'
        }
    },
    {
        id: 'a9-56',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 56',
        difficulty: 'Foundation',
        questionText: 'Solve by factorising: \\( x^2 - x = 42 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving', 'rearranging'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange into standard form.',
                    workingLatex: 'x^2 - x - 42 = 0',
                    explanation: 'Subtract 42 from both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to \\( -42 \\) and adding to \\( -1 \\).',
                    workingLatex: '(-7) \\times 6 = -42, \\quad (-7) + 6 = -1',
                    explanation: 'Opposite signs; larger factor (7) is negative.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise and solve.',
                    workingLatex: '(x - 7)(x + 6) = 0 \\; \\Rightarrow \\; x = 7 \\; \\text{or} \\; x = -6',
                    explanation: 'Set each factor to zero.'
                }
            ],
            finalAnswer: 'x = 7 \\; \\text{or} \\; x = -6'
        }
    },
    {
        id: 'a9-57',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 57',
        difficulty: 'Foundation',
        questionText: 'Solve by factorising: \\( 3x^2 - 3x - 6 = 0 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving', 'common factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide through by 3.',
                    workingLatex: 'x^2 - x - 2 = 0',
                    explanation: 'All terms share a factor of 3.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise: numbers multiplying to \\( -2 \\), adding to \\( -1 \\).',
                    workingLatex: '(x - 2)(x + 1) = 0',
                    explanation: '\\( -2 \\times 1 = -2 \\) and \\( -2 + 1 = -1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve.',
                    workingLatex: 'x = 2 \\; \\text{or} \\; x = -1',
                    explanation: 'The two roots.'
                }
            ],
            finalAnswer: 'x = 2 \\; \\text{or} \\; x = -1'
        }
    },
    {
        id: 'a9-58',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 58',
        difficulty: 'Foundation',
        questionText: 'Solve by factorising: \\( 5x^2 - 21x + 4 = 0 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets for the non-monic case.',
                    workingLatex: '(5x \\quad )(x \\quad ) = 0',
                    explanation: '\\( 5x \\times x = 5x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Both signs negative (c > 0, b < 0). Try pairs of 4.',
                    workingLatex: '(5x - 1)(x - 4): \\; -20x - x = -21x',
                    explanation: '\\( -1 \\) with \\( 5x \\) and \\( -4 \\) with \\( x \\) produces \\( -21x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve each factor.',
                    workingLatex: '5x - 1 = 0 \\; \\text{or} \\; x - 4 = 0 \\; \\Rightarrow \\; x = \\tfrac{1}{5} \\; \\text{or} \\; x = 4',
                    explanation: 'Divide by 5 for the first root.'
                }
            ],
            finalAnswer: 'x = \\tfrac{1}{5} \\; \\text{or} \\; x = 4'
        }
    },
    {
        id: 'a9-59',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 59',
        difficulty: 'Foundation',
        questionText: 'Solve by factorising: \\( 2x^2 + 11x + 5 = 0 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(2x \\quad )(x \\quad ) = 0',
                    explanation: '\\( 2x \\times x = 2x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find a pair multiplying to 5 giving middle term 11x.',
                    workingLatex: '(2x + 1)(x + 5): \\; 10x + x = 11x',
                    explanation: '1 goes with 2x and 5 with x.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve each factor.',
                    workingLatex: 'x = -\\tfrac{1}{2} \\; \\text{or} \\; x = -5',
                    explanation: 'Set each factor to zero.'
                }
            ],
            finalAnswer: 'x = -\\tfrac{1}{2} \\; \\text{or} \\; x = -5'
        }
    },
    {
        id: 'a9-60',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 60',
        difficulty: 'Foundation',
        questionText: 'Solve by factorising: \\( 3x^2 + 10x - 8 = 0 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(3x \\quad )(x \\quad ) = 0',
                    explanation: '\\( 3x \\times x = 3x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Opposite signs (c < 0). Try pairs of 8 to get 10x in the middle.',
                    workingLatex: '(3x - 2)(x + 4): \\; 12x - 2x = 10x',
                    explanation: '\\( -2 \\) with \\( 3x \\) and \\( +4 \\) with \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve each factor.',
                    workingLatex: 'x = \\tfrac{2}{3} \\; \\text{or} \\; x = -4',
                    explanation: 'Set each factor to zero.'
                }
            ],
            finalAnswer: 'x = \\tfrac{2}{3} \\; \\text{or} \\; x = -4'
        }
    },
    {
        id: 'a9-61',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 61',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 + 6xy + 8y^2 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'two variables'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up two brackets, each containing an \\( x \\) term and a \\( y \\) term.',
                    workingLatex: '(x \\quad y)(x \\quad y)',
                    explanation: '\\( x \\times x = x^2 \\) and \\( y \\times y = y^2 \\) give the end terms.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to 8 and adding to 6.',
                    workingLatex: '2 \\times 4 = 8, \\quad 2 + 4 = 6',
                    explanation: 'Factor pairs of 8: (1,8),(2,4). (2,4) works.'
                },
                {
                    stepNumber: 3,
                    description: 'Place the numbers beside the \\( y \\) terms.',
                    workingLatex: '(x + 2y)(x + 4y)',
                    explanation: 'Both signs positive.'
                }
            ],
            finalAnswer: '(x + 2y)(x + 4y)'
        }
    },
    {
        id: 'a9-62',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 62',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 + 7xy + 12y^2 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'two variables'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad y)(x \\quad y)',
                    explanation: 'Each bracket contains an \\( x \\) and a \\( y \\) term.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to 12 and adding to 7.',
                    workingLatex: '3 \\times 4 = 12, \\quad 3 + 4 = 7',
                    explanation: 'The pair (3, 4) works.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x + 3y)(x + 4y)',
                    explanation: 'Both signs positive.'
                }
            ],
            finalAnswer: '(x + 3y)(x + 4y)'
        }
    },
    {
        id: 'a9-63',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 63',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 5xy + 6y^2 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'two variables'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad y)(x \\quad y)',
                    explanation: 'Standard two-variable setup.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to 6 and adding to \\( -5 \\).',
                    workingLatex: '(-2) \\times (-3) = 6, \\quad (-2) + (-3) = -5',
                    explanation: 'Both signs negative.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x - 2y)(x - 3y)',
                    explanation: 'Both factors negative.'
                }
            ],
            finalAnswer: '(x - 2y)(x - 3y)'
        }
    },
    {
        id: 'a9-64',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 64',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 4xy - 12y^2 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'two variables'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad y)(x \\quad y)',
                    explanation: 'Standard setup.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to \\( -12 \\) and adding to \\( -4 \\).',
                    workingLatex: '(-6) \\times 2 = -12, \\quad (-6) + 2 = -4',
                    explanation: 'Opposite signs, larger (6) negative.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x - 6y)(x + 2y)',
                    explanation: 'Larger factor negative.'
                }
            ],
            finalAnswer: '(x - 6y)(x + 2y)'
        }
    },
    {
        id: 'a9-65',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 65',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - y^2 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'difference of two squares', 'two variables'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the difference of two squares.',
                    workingLatex: 'x^2 - y^2',
                    explanation: 'Both terms are perfect squares separated by a minus sign.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( a^2 - b^2 = (a - b)(a + b) \\).',
                    workingLatex: '(x - y)(x + y)',
                    explanation: 'Here \\( a = x \\) and \\( b = y \\).'
                }
            ],
            finalAnswer: '(x - y)(x + y)'
        }
    },
    {
        id: 'a9-66',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 66',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 4x^2 - 25y^2 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'difference of two squares', 'two variables'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the difference of two squares.',
                    workingLatex: '4x^2 - 25y^2 = (2x)^2 - (5y)^2',
                    explanation: 'Both are perfect squares.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the formula.',
                    workingLatex: '(2x - 5y)(2x + 5y)',
                    explanation: 'Here \\( a = 2x \\) and \\( b = 5y \\).'
                }
            ],
            finalAnswer: '(2x - 5y)(2x + 5y)'
        }
    },
    {
        id: 'a9-67',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 67',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 + 13x + 40 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to 40 and adding to 13.',
                    workingLatex: '5 \\times 8 = 40, \\quad 5 + 8 = 13',
                    explanation: 'Factor pairs: (1,40),(2,20),(4,10),(5,8). (5,8) works.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x + 5)(x + 8)',
                    explanation: 'Both signs positive.'
                }
            ],
            finalAnswer: '(x + 5)(x + 8)'
        }
    },
    {
        id: 'a9-68',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 68',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 + 14x + 45 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to 45 and adding to 14.',
                    workingLatex: '5 \\times 9 = 45, \\quad 5 + 9 = 14',
                    explanation: 'Factor pairs: (1,45),(3,15),(5,9). (5,9) works.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x + 5)(x + 9)',
                    explanation: 'Both signs positive.'
                }
            ],
            finalAnswer: '(x + 5)(x + 9)'
        }
    },
    {
        id: 'a9-69',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 69',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 12x + 32 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to 32 and adding to \\( -12 \\).',
                    workingLatex: '(-4) \\times (-8) = 32, \\quad (-4) + (-8) = -12',
                    explanation: 'Both signs negative.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x - 4)(x - 8)',
                    explanation: 'Both factors negative.'
                }
            ],
            finalAnswer: '(x - 4)(x - 8)'
        }
    },
    {
        id: 'a9-70',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 70',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 + 6x - 40 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to \\( -40 \\) and adding to \\( +6 \\).',
                    workingLatex: '10 \\times (-4) = -40, \\quad 10 + (-4) = 6',
                    explanation: 'Opposite signs; larger factor (10) positive.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x + 10)(x - 4)',
                    explanation: 'Larger positive.'
                }
            ],
            finalAnswer: '(x + 10)(x - 4)'
        }
    },
    {
        id: 'a9-71',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 71',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 7x - 18 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad )(x \\quad )',
                    explanation: 'Monic quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to \\( -18 \\) and adding to \\( -7 \\).',
                    workingLatex: '(-9) \\times 2 = -18, \\quad (-9) + 2 = -7',
                    explanation: 'Larger factor (9) negative.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x - 9)(x + 2)',
                    explanation: 'Larger negative.'
                }
            ],
            finalAnswer: '(x - 9)(x + 2)'
        }
    },
    {
        id: 'a9-72',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 72',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 36 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the difference of two squares.',
                    workingLatex: 'x^2 - 36 = x^2 - 6^2',
                    explanation: '36 = \\( 6^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the formula.',
                    workingLatex: '(x - 6)(x + 6)',
                    explanation: 'Standard difference of two squares.'
                }
            ],
            finalAnswer: '(x - 6)(x + 6)'
        }
    },
    {
        id: 'a9-73',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 73',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 121 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the difference of two squares.',
                    workingLatex: 'x^2 - 121 = x^2 - 11^2',
                    explanation: '121 = \\( 11^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the formula.',
                    workingLatex: '(x - 11)(x + 11)',
                    explanation: 'Difference of two squares.'
                }
            ],
            finalAnswer: '(x - 11)(x + 11)'
        }
    },
    {
        id: 'a9-74',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 74',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 144 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the difference of two squares.',
                    workingLatex: 'x^2 - 144 = x^2 - 12^2',
                    explanation: '144 = \\( 12^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the formula.',
                    workingLatex: '(x - 12)(x + 12)',
                    explanation: 'Difference of two squares.'
                }
            ],
            finalAnswer: '(x - 12)(x + 12)'
        }
    },
    {
        id: 'a9-75',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 75',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 2x^2 + 13x + 6 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(2x \\quad )(x \\quad )',
                    explanation: '\\( 2x \\times x = 2x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find a pair multiplying to 6 giving middle term 13x.',
                    workingLatex: '(2x + 1)(x + 6): \\; 12x + x = 13x',
                    explanation: '1 with 2x and 6 with x.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(2x + 1)(x + 6)',
                    explanation: 'All signs positive.'
                }
            ],
            finalAnswer: '(2x + 1)(x + 6)'
        }
    },
    {
        id: 'a9-76',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 76',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 2x^2 + 7x + 6 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(2x \\quad )(x \\quad )',
                    explanation: '\\( 2x \\times x = 2x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Try pairs of 6 to get 7x in the middle.',
                    workingLatex: '(2x + 3)(x + 2): \\; 4x + 3x = 7x',
                    explanation: '3 with 2x and 2 with x.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(2x + 3)(x + 2)',
                    explanation: 'All signs positive.'
                }
            ],
            finalAnswer: '(2x + 3)(x + 2)'
        }
    },
    {
        id: 'a9-77',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 77',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 5x^2 + 12x + 4 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(5x \\quad )(x \\quad )',
                    explanation: '\\( 5x \\times x = 5x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find a pair multiplying to 4 giving middle term 12x.',
                    workingLatex: '(5x + 2)(x + 2): \\; 10x + 2x = 12x',
                    explanation: 'Put 2 with 5x and 2 with x.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(5x + 2)(x + 2)',
                    explanation: 'All signs positive.'
                }
            ],
            finalAnswer: '(5x + 2)(x + 2)'
        }
    },
    {
        id: 'a9-78',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 78',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 3x^2 - 14x + 8 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(3x \\quad )(x \\quad )',
                    explanation: '\\( 3x \\times x = 3x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Both signs negative (c > 0, b < 0). Try pairs of 8.',
                    workingLatex: '(3x - 2)(x - 4): \\; -12x - 2x = -14x',
                    explanation: '\\( -2 \\) with \\( 3x \\) and \\( -4 \\) with \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(3x - 2)(x - 4)',
                    explanation: 'Both signs negative.'
                }
            ],
            finalAnswer: '(3x - 2)(x - 4)'
        }
    },
    {
        id: 'a9-79',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 79',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 2x^2 - 11x + 12 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(2x \\quad )(x \\quad )',
                    explanation: '\\( 2x \\times x = 2x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Try pairs of 12 with both signs negative.',
                    workingLatex: '(2x - 3)(x - 4): \\; -8x - 3x = -11x',
                    explanation: '\\( -3 \\) with \\( 2x \\) and \\( -4 \\) with \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(2x - 3)(x - 4)',
                    explanation: 'Both signs negative.'
                }
            ],
            finalAnswer: '(2x - 3)(x - 4)'
        }
    },
    {
        id: 'a9-80',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 80',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 2x^2 + 3x - 9 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(2x \\quad )(x \\quad )',
                    explanation: '\\( 2x \\times x = 2x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Opposite signs (c < 0). Try pairs of 9.',
                    workingLatex: '(2x - 3)(x + 3): \\; 6x - 3x = 3x',
                    explanation: '\\( -3 \\) with \\( 2x \\) and \\( +3 \\) with \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(2x - 3)(x + 3)',
                    explanation: 'Opposite signs.'
                }
            ],
            finalAnswer: '(2x - 3)(x + 3)'
        }
    },
    {
        id: 'a9-81',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 81',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 5x^2 - 3x - 2 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(5x \\quad )(x \\quad )',
                    explanation: '\\( 5x \\times x = 5x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Opposite signs. Try pairs of 2 to get middle term \\( -3x \\).',
                    workingLatex: '(5x + 2)(x - 1): \\; -5x + 2x = -3x',
                    explanation: '\\( +2 \\) with \\( 5x \\) and \\( -1 \\) with \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(5x + 2)(x - 1)',
                    explanation: 'Opposite signs.'
                }
            ],
            finalAnswer: '(5x + 2)(x - 1)'
        }
    },
    {
        id: 'a9-82',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 82',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 7x^2 + 8x + 1 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(7x \\quad )(x \\quad )',
                    explanation: '\\( 7x \\times x = 7x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The only pair multiplying to 1 is \\( 1 \\times 1 \\).',
                    workingLatex: '(7x + 1)(x + 1): \\; 7x + x = 8x',
                    explanation: 'Put 1 in each bracket.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(7x + 1)(x + 1)',
                    explanation: 'All signs positive.'
                }
            ],
            finalAnswer: '(7x + 1)(x + 1)'
        }
    },
    {
        id: 'a9-83',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 83',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 4x^2 + 8x + 3 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets. Since 4 factorises as \\( 2 \\times 2 \\) or \\( 4 \\times 1 \\), try \\( 2x \\) in each bracket.',
                    workingLatex: '(2x \\quad )(2x \\quad )',
                    explanation: 'Start with \\( 2x \\times 2x = 4x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find a pair multiplying to 3 giving middle term 8x.',
                    workingLatex: '(2x + 1)(2x + 3): \\; 6x + 2x = 8x',
                    explanation: '1 with the first 2x and 3 with the second 2x.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(2x + 1)(2x + 3)',
                    explanation: 'All signs positive.'
                }
            ],
            finalAnswer: '(2x + 1)(2x + 3)'
        }
    },
    {
        id: 'a9-84',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 84',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 4x^2 - 12x + 5 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets using 2x and 2x.',
                    workingLatex: '(2x \\quad )(2x \\quad )',
                    explanation: '\\( 2x \\times 2x = 4x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Both signs negative. Try pairs of 5.',
                    workingLatex: '(2x - 1)(2x - 5): \\; -10x - 2x = -12x',
                    explanation: '\\( -1 \\) with first \\( 2x \\) and \\( -5 \\) with second \\( 2x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(2x - 1)(2x - 5)',
                    explanation: 'Both negative.'
                }
            ],
            finalAnswer: '(2x - 1)(2x - 5)'
        }
    },
    {
        id: 'a9-85',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 85',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 6x^2 + 11x + 3 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets. 6 = \\( 2 \\times 3 \\) or \\( 6 \\times 1 \\). Try 2x and 3x.',
                    workingLatex: '(2x \\quad )(3x \\quad )',
                    explanation: '\\( 2x \\times 3x = 6x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find a pair multiplying to 3 giving middle term 11x.',
                    workingLatex: '(2x + 3)(3x + 1): \\; 2x + 9x = 11x',
                    explanation: '\\( 3 \\) with \\( 2x \\) and \\( 1 \\) with \\( 3x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(2x + 3)(3x + 1)',
                    explanation: 'All signs positive.'
                }
            ],
            finalAnswer: '(2x + 3)(3x + 1)'
        }
    },
    {
        id: 'a9-86',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 86',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 6x^2 - 7x - 3 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets using 2x and 3x.',
                    workingLatex: '(2x \\quad )(3x \\quad )',
                    explanation: '\\( 2x \\times 3x = 6x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Opposite signs (c < 0). Try pairs of 3.',
                    workingLatex: '(2x - 3)(3x + 1): \\; 2x - 9x = -7x',
                    explanation: '\\( -3 \\) with \\( 2x \\) and \\( +1 \\) with \\( 3x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(2x - 3)(3x + 1)',
                    explanation: 'Opposite signs.'
                }
            ],
            finalAnswer: '(2x - 3)(3x + 1)'
        }
    },
    {
        id: 'a9-87',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 87',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 4x^2 + x - 3 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(4x \\quad )(x \\quad )',
                    explanation: '\\( 4x \\times x = 4x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Opposite signs. Try pairs of 3 to get middle term 1x.',
                    workingLatex: '(4x - 3)(x + 1): \\; 4x - 3x = x',
                    explanation: '\\( -3 \\) with \\( 4x \\) and \\( +1 \\) with \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(4x - 3)(x + 1)',
                    explanation: 'Opposite signs.'
                }
            ],
            finalAnswer: '(4x - 3)(x + 1)'
        }
    },
    {
        id: 'a9-88',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 88',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 + 16x + 64 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'perfect square'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Check for a perfect square. \\( 64 = 8^2 \\) and the middle term is \\( 2 \\times 8 = 16 \\).',
                    workingLatex: 'x^2 + 16x + 64',
                    explanation: 'This matches the pattern \\( (x + a)^2 = x^2 + 2ax + a^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write as a perfect square.',
                    workingLatex: '(x + 8)^2',
                    explanation: 'Here \\( a = 8 \\).'
                }
            ],
            finalAnswer: '(x + 8)^2'
        }
    },
    {
        id: 'a9-89',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 89',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 - 20x + 100 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'perfect square'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Check for a perfect square. \\( 100 = 10^2 \\) and \\( 2 \\times 10 = 20 \\).',
                    workingLatex: 'x^2 - 20x + 100',
                    explanation: 'Matches the pattern \\( (x - a)^2 = x^2 - 2ax + a^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write as a perfect square.',
                    workingLatex: '(x - 10)^2',
                    explanation: 'Here \\( a = 10 \\).'
                }
            ],
            finalAnswer: '(x - 10)^2'
        }
    },
    {
        id: 'a9-90',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 90',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 2x^2 - 8 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'common factor', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out the common factor 2.',
                    workingLatex: '2(x^2 - 4)',
                    explanation: 'Both terms share a factor of 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the difference of two squares to the bracket.',
                    workingLatex: '2(x - 2)(x + 2)',
                    explanation: '\\( x^2 - 4 = (x - 2)(x + 2) \\).'
                }
            ],
            finalAnswer: '2(x - 2)(x + 2)'
        }
    },
    {
        id: 'a9-91',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 91',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 5x^2 - 20x \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'common factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the highest common factor of the two terms.',
                    workingLatex: '5x^2 - 20x',
                    explanation: 'Both terms share a factor of \\( 5x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factor out \\( 5x \\).',
                    workingLatex: '5x(x - 4)',
                    explanation: 'Dividing each term by \\( 5x \\) gives \\( x \\) and \\( -4 \\).'
                }
            ],
            finalAnswer: '5x(x - 4)'
        }
    },
    {
        id: 'a9-92',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 92',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( 4x^2 + 12x \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'common factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the highest common factor.',
                    workingLatex: '4x^2 + 12x',
                    explanation: 'Both terms share a factor of \\( 4x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factor out \\( 4x \\).',
                    workingLatex: '4x(x + 3)',
                    explanation: 'Dividing by \\( 4x \\) leaves \\( x + 3 \\).'
                }
            ],
            finalAnswer: '4x(x + 3)'
        }
    },
    {
        id: 'a9-93',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 93',
        difficulty: 'Foundation',
        questionText: 'Solve by factorising: \\( x^2 - 8x + 15 = 0 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise: find numbers multiplying to 15 and adding to \\( -8 \\).',
                    workingLatex: '(x - 3)(x - 5) = 0',
                    explanation: '\\( (-3) + (-5) = -8 \\) and \\( (-3) \\times (-5) = 15 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x - 3 = 0 \\; \\text{or} \\; x - 5 = 0',
                    explanation: 'One factor must be zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve.',
                    workingLatex: 'x = 3 \\; \\text{or} \\; x = 5',
                    explanation: 'The two roots.'
                }
            ],
            finalAnswer: 'x = 3 \\; \\text{or} \\; x = 5'
        }
    },
    {
        id: 'a9-94',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 94',
        difficulty: 'Foundation',
        questionText: 'Solve by factorising: \\( x^2 + 3x - 10 = 0 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise: find numbers multiplying to \\( -10 \\) and adding to \\( +3 \\).',
                    workingLatex: '(x + 5)(x - 2) = 0',
                    explanation: '\\( 5 \\times (-2) = -10 \\) and \\( 5 + (-2) = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set each factor to zero.',
                    workingLatex: 'x + 5 = 0 \\; \\text{or} \\; x - 2 = 0',
                    explanation: 'One of the factors must be zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve.',
                    workingLatex: 'x = -5 \\; \\text{or} \\; x = 2',
                    explanation: 'The two roots.'
                }
            ],
            finalAnswer: 'x = -5 \\; \\text{or} \\; x = 2'
        }
    },
    {
        id: 'a9-95',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 95',
        difficulty: 'Foundation',
        questionText: 'Solve by factorising: \\( x^2 - 16 = 0 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the difference of two squares.',
                    workingLatex: '(x - 4)(x + 4) = 0',
                    explanation: '\\( x^2 - 16 = x^2 - 4^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set each factor to zero.',
                    workingLatex: 'x - 4 = 0 \\; \\text{or} \\; x + 4 = 0',
                    explanation: 'Product-is-zero rule.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve.',
                    workingLatex: 'x = 4 \\; \\text{or} \\; x = -4',
                    explanation: 'The two roots are \\( \\pm 4 \\).'
                }
            ],
            finalAnswer: 'x = 4 \\; \\text{or} \\; x = -4'
        }
    },
    {
        id: 'a9-96',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 96',
        difficulty: 'Foundation',
        questionText: 'Solve by factorising: \\( x^2 - 10x = 0 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving', 'common factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factor out the common factor \\( x \\).',
                    workingLatex: 'x(x - 10) = 0',
                    explanation: 'Both terms share an \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set each factor to zero.',
                    workingLatex: 'x = 0 \\; \\text{or} \\; x - 10 = 0',
                    explanation: 'Product-is-zero rule.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve.',
                    workingLatex: 'x = 0 \\; \\text{or} \\; x = 10',
                    explanation: 'The two roots.'
                }
            ],
            finalAnswer: 'x = 0 \\; \\text{or} \\; x = 10'
        }
    },
    {
        id: 'a9-97',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 97',
        difficulty: 'Foundation',
        questionText: 'Solve: \\( (x - 1)(x - 2) = 2 \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving', 'rearranging'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the left-hand side.',
                    workingLatex: 'x^2 - 3x + 2 = 2',
                    explanation: '\\( (x - 1)(x - 2) = x^2 - 2x - x + 2 = x^2 - 3x + 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange into standard form.',
                    workingLatex: 'x^2 - 3x = 0',
                    explanation: 'Subtract 2 from both sides.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise and solve.',
                    workingLatex: 'x(x - 3) = 0 \\; \\Rightarrow \\; x = 0 \\; \\text{or} \\; x = 3',
                    explanation: 'Factor out \\( x \\) and apply the product-is-zero rule.'
                }
            ],
            finalAnswer: 'x = 0 \\; \\text{or} \\; x = 3'
        }
    },
    {
        id: 'a9-98',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 98',
        difficulty: 'Foundation',
        questionText: 'The function \\( f(x) = -x^2 + 7x + 30 \\). Find the \\( x \\) coordinates of the points where the graph of \\( f(x) \\) meets the \\( x \\)-axis.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving', 'graphs'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set \\( f(x) = 0 \\) since the graph meets the \\( x \\)-axis where \\( y = 0 \\).',
                    workingLatex: '-x^2 + 7x + 30 = 0',
                    explanation: 'Crossing points with the x-axis have \\( y = 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply through by \\( -1 \\) to make the leading coefficient positive.',
                    workingLatex: 'x^2 - 7x - 30 = 0',
                    explanation: 'This makes factorising easier.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise: find numbers multiplying to \\( -30 \\) and adding to \\( -7 \\).',
                    workingLatex: '(x - 10)(x + 3) = 0',
                    explanation: '\\( -10 \\times 3 = -30 \\) and \\( -10 + 3 = -7 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve each factor.',
                    workingLatex: 'x = 10 \\; \\text{or} \\; x = -3',
                    explanation: 'The graph meets the x-axis at these two points.'
                }
            ],
            finalAnswer: 'x = 10 \\; \\text{or} \\; x = -3'
        }
    },
    {
        id: 'a9-99',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 99',
        difficulty: 'Foundation',
        questionText: 'The temperature \\( T \\) °C is modelled by \\( T = h^2 - 9h + 14 \\), where \\( h \\) is time in hours. Find both times at which the temperature is 0 °C.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'solving', 'modelling'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set \\( T = 0 \\).',
                    workingLatex: 'h^2 - 9h + 14 = 0',
                    explanation: 'We want the times when the temperature is zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise: find numbers multiplying to 14 and adding to \\( -9 \\).',
                    workingLatex: '(h - 2)(h - 7) = 0',
                    explanation: '\\( -2 \\times -7 = 14 \\) and \\( -2 - 7 = -9 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( h \\).',
                    workingLatex: 'h = 2 \\; \\text{or} \\; h = 7',
                    explanation: 'Both values are positive, so both are valid times.'
                }
            ],
            finalAnswer: 'h = 2 \\; \\text{hours or} \\; h = 7 \\; \\text{hours}'
        }
    },
    {
        id: 'a9-100',
        topicRef: 'a9',
        topicTitle: 'Factoring a Quadratic 100',
        difficulty: 'Foundation',
        questionText: 'Factorise: \\( x^2 + 10xy + 21y^2 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['factorising', 'quadratic', 'two variables'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up brackets.',
                    workingLatex: '(x \\quad y)(x \\quad y)',
                    explanation: 'Two-variable setup.'
                },
                {
                    stepNumber: 2,
                    description: 'Find numbers multiplying to 21 and adding to 10.',
                    workingLatex: '3 \\times 7 = 21, \\quad 3 + 7 = 10',
                    explanation: 'The pair (3, 7) works.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the answer.',
                    workingLatex: '(x + 3y)(x + 7y)',
                    explanation: 'Both signs positive.'
                }
            ],
            finalAnswer: '(x + 3y)(x + 7y)'
        }
    }
];

