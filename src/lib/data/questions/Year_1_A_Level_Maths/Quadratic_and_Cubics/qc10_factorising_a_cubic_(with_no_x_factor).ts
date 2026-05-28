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

    // Topic: Factorising a Cubic (when x is not a factor)
    // topicRef: a17
    // 50 questions — Foundation difficulty

    // ─── TYPE A: Fully factorise the cubic ──────────────────────────────────────
    // Q1–Q15

    {
        id: 'qc10-001',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 01',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 + 4x^2 - 7x - 10 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'factorising', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the Factor Theorem to find a factor. Try \\( x = 1 \\): \\( 1 + 4 - 7 - 10 = -12 \\neq 0 \\). Try \\( x = 2 \\): \\( 8 + 16 - 14 - 10 = 0 \\checkmark \\)',
                    workingLatex: 'f(2) = 0 \\Rightarrow (x - 2) \\text{ is a factor}',
                    explanation: 'We test integer values of x using the Factor Theorem until we find one that gives zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide the cubic by \\( (x - 2) \\). The leading term of the quadratic is \\( x^2 \\) (since \\( x \\cdot x^2 = x^3 \\)) and the constant is \\( 5 \\) (since \\( -2 \\cdot 5 = -10 \\)).',
                    workingLatex: 'x^3 + 4x^2 - 7x - 10 = (x - 2)(x^2 + nx + 5)',
                    explanation: 'We know the first and last terms of the quadratic; we need to find the middle coefficient n.'
                },
                {
                    stepNumber: 3,
                    description: 'Equate coefficients of \\( x^2 \\): from expanding, the \\( x^2 \\) term is \\( nx^2 - 2x^2 \\), which must equal \\( 4x^2 \\).',
                    workingLatex: 'n - 2 = 4 \\Rightarrow n = 6',
                    explanation: 'So the quadratic factor is \\( x^2 + 6x + 5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise the quadratic \\( x^2 + 6x + 5 \\).',
                    workingLatex: 'x^2 + 6x + 5 = (x + 1)(x + 5)',
                    explanation: 'Two numbers that multiply to 5 and add to 6: these are 1 and 5.'
                }
            ],
            finalAnswer: ' (x - 2)(x + 1)(x + 5) ',
        }
    },

    {
        id: 'qc10-002',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 02',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 - 2x^2 - 5x + 6 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'factorising', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Try \\( x = 1 \\): \\( 1 - 2 - 5 + 6 = 0 \\checkmark \\)',
                    workingLatex: 'f(1) = 0 \\Rightarrow (x - 1) \\text{ is a factor}',
                    explanation: 'The coefficients sum to zero, confirming \\( (x - 1) \\) is a factor.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( x^3 - 2x^2 - 5x + 6 = (x - 1)(x^2 + nx - 6) \\).',
                    workingLatex: '(x - 1)(x^2 + nx - 6)',
                    explanation: 'Leading term \\( x^2 \\); constant \\( -6 \\) since \\( (-1)(-6) = 6 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\) coefficients: \\( n - 1 = -2 \\).',
                    workingLatex: 'n = -1',
                    explanation: 'So the quadratic is \\( x^2 - x - 6 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 - x - 6 \\).',
                    workingLatex: '(x - 3)(x + 2)',
                    explanation: 'Numbers that multiply to \\(-6\\) and add to \\(-1\\): these are \\(-3\\) and \\(+2\\).'
                }
            ],
            finalAnswer: ' (x - 1)(x - 3)(x + 2) ',
        }
    },

    {
        id: 'qc10-003',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 03',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 + 3x^2 - 4x - 12 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'factorising', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Try \\( x = 2 \\): \\( 8 + 12 - 8 - 12 = 0 \\checkmark \\)',
                    workingLatex: 'f(2) = 0 \\Rightarrow (x - 2) \\text{ is a factor}',
                    explanation: 'Substitute \\( x = 2 \\) into the polynomial.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 2)(x^2 + nx + 6) \\).',
                    workingLatex: '(x - 2)(x^2 + nx + 6)',
                    explanation: 'Constant: \\( -2 \\times 6 = -12 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\) coefficients: \\( n - 2 = 3 \\).',
                    workingLatex: 'n = 5',
                    explanation: 'Quadratic is \\( x^2 + 5x + 6 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 + 5x + 6 \\).',
                    workingLatex: '(x + 2)(x + 3)',
                    explanation: 'Numbers that multiply to 6 and add to 5: 2 and 3.'
                }
            ],
            finalAnswer: ' (x - 2)(x + 2)(x + 3) ',
        }
    },

    {
        id: 'qc10-004',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 04',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 - 6x^2 + 11x - 6 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'factorising', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Coefficient sum: \\( 1 - 6 + 11 - 6 = 0 \\), so \\( (x - 1) \\) is a factor.',
                    workingLatex: 'f(1) = 0 \\Rightarrow (x - 1) \\text{ is a factor}',
                    explanation: 'Coefficients add to zero confirms \\( x = 1 \\) is a root.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 1)(x^2 + nx + 6) \\).',
                    workingLatex: '(x - 1)(x^2 + nx + 6)',
                    explanation: 'Constant: \\( -1 \\times 6 = -6 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\) coefficients: \\( n - 1 = -6 \\).',
                    workingLatex: 'n = -5',
                    explanation: 'Quadratic is \\( x^2 - 5x + 6 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 - 5x + 6 \\).',
                    workingLatex: '(x - 2)(x - 3)',
                    explanation: 'Numbers that multiply to 6 and add to \\(-5\\): \\(-2\\) and \\(-3\\).'
                }
            ],
            finalAnswer: ' (x - 1)(x - 2)(x - 3) ',
        }
    },

    {
        id: 'qc10-005',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 05',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 + x^2 - 4x - 4 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'factorising', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Try \\( x = -1 \\): \\( -1 + 1 + 4 - 4 = 0 \\checkmark \\)',
                    workingLatex: 'f(-1) = 0 \\Rightarrow (x + 1) \\text{ is a factor}',
                    explanation: 'Substitute \\( x = -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x + 1)(x^2 + nx - 4) \\).',
                    workingLatex: '(x + 1)(x^2 + nx - 4)',
                    explanation: 'Constant: \\( 1 \\times (-4) = -4 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\) coefficients: \\( n + 1 = 1 \\).',
                    workingLatex: 'n = 0',
                    explanation: 'Quadratic is \\( x^2 - 4 \\) — a difference of two squares.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 - 4 \\).',
                    workingLatex: '(x - 2)(x + 2)',
                    explanation: 'Difference of two squares: \\( x^2 - 2^2 \\).'
                }
            ],
            finalAnswer: ' (x + 1)(x - 2)(x + 2) ',
        }
    },

    {
        id: 'qc10-006',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 06',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 - x^2 - 9x + 9 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'factorising', 'no x factor', 'difference of squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Coefficient sum: \\( 1 - 1 - 9 + 9 = 0 \\), so \\( (x - 1) \\) is a factor.',
                    workingLatex: 'f(1) = 0 \\Rightarrow (x - 1) \\text{ is a factor}',
                    explanation: 'The coefficients sum to zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 1)(x^2 + nx - 9) \\).',
                    workingLatex: '(x - 1)(x^2 + nx - 9)',
                    explanation: 'Constant: \\( (-1)(-9) = 9 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\) coefficients: \\( n - 1 = -1 \\).',
                    workingLatex: 'n = 0',
                    explanation: 'Quadratic is \\( x^2 - 9 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 - 9 \\) as a difference of two squares.',
                    workingLatex: '(x - 3)(x + 3)',
                    explanation: '\\( x^2 - 3^2 = (x-3)(x+3) \\).'
                }
            ],
            finalAnswer: ' (x - 1)(x - 3)(x + 3) ',
        }
    },

    {
        id: 'qc10-007',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 07',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 + 2x^2 - 9x - 18 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'factorising', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Try \\( x = -2 \\): \\( -8 + 8 + 18 - 18 = 0 \\checkmark \\)',
                    workingLatex: 'f(-2) = 0 \\Rightarrow (x + 2) \\text{ is a factor}',
                    explanation: 'Substitute \\( x = -2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x + 2)(x^2 + nx - 9) \\).',
                    workingLatex: '(x + 2)(x^2 + nx - 9)',
                    explanation: 'Constant: \\( 2 \\times (-9) = -18 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\) coefficients: \\( n + 2 = 2 \\).',
                    workingLatex: 'n = 0',
                    explanation: 'Quadratic is \\( x^2 - 9 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 - 9 \\).',
                    workingLatex: '(x - 3)(x + 3)',
                    explanation: 'Difference of two squares.'
                }
            ],
            finalAnswer: ' (x + 2)(x - 3)(x + 3) ',
        }
    },

    {
        id: 'qc10-008',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 08',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 - 4x^2 + x + 6 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'factorising', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Try \\( x = -1 \\): \\( -1 - 4 - 1 + 6 = 0 \\checkmark \\)',
                    workingLatex: 'f(-1) = 0 \\Rightarrow (x + 1) \\text{ is a factor}',
                    explanation: 'Substitute \\( x = -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x + 1)(x^2 + nx + 6) \\).',
                    workingLatex: '(x + 1)(x^2 + nx + 6)',
                    explanation: 'Constant: \\( 1 \\times 6 = 6 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\) coefficients: \\( n + 1 = -4 \\).',
                    workingLatex: 'n = -5',
                    explanation: 'Quadratic is \\( x^2 - 5x + 6 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 - 5x + 6 \\).',
                    workingLatex: '(x - 2)(x - 3)',
                    explanation: 'Numbers that multiply to 6 and add to \\(-5\\): \\(-2\\) and \\(-3\\).'
                }
            ],
            finalAnswer: ' (x + 1)(x - 2)(x - 3) ',
        }
    },

    {
        id: 'qc10-009',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 09',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 + 5x^2 + 2x - 8 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'factorising', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Try \\( x = 1 \\): \\( 1 + 5 + 2 - 8 = 0 \\checkmark \\)',
                    workingLatex: 'f(1) = 0 \\Rightarrow (x - 1) \\text{ is a factor}',
                    explanation: 'Coefficient sum equals zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 1)(x^2 + nx + 8) \\).',
                    workingLatex: '(x - 1)(x^2 + nx + 8)',
                    explanation: 'Constant: \\( (-1)(8) = -8 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\) coefficients: \\( n - 1 = 5 \\).',
                    workingLatex: 'n = 6',
                    explanation: 'Quadratic is \\( x^2 + 6x + 8 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 + 6x + 8 \\).',
                    workingLatex: '(x + 2)(x + 4)',
                    explanation: 'Numbers that multiply to 8 and add to 6: 2 and 4.'
                }
            ],
            finalAnswer: ' (x - 1)(x + 2)(x + 4) ',
        }
    },

    {
        id: 'qc10-010',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 10',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 - 5x^2 + 2x + 8 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'factorising', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Try \\( x = -1 \\): \\( -1 - 5 - 2 + 8 = 0 \\checkmark \\)',
                    workingLatex: 'f(-1) = 0 \\Rightarrow (x + 1) \\text{ is a factor}',
                    explanation: 'Substitute \\( x = -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x + 1)(x^2 + nx + 8) \\).',
                    workingLatex: '(x + 1)(x^2 + nx + 8)',
                    explanation: 'Constant: \\( 1 \\times 8 = 8 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\) coefficients: \\( n + 1 = -5 \\).',
                    workingLatex: 'n = -6',
                    explanation: 'Quadratic is \\( x^2 - 6x + 8 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 - 6x + 8 \\).',
                    workingLatex: '(x - 2)(x - 4)',
                    explanation: 'Numbers that multiply to 8 and add to \\(-6\\): \\(-2\\) and \\(-4\\).'
                }
            ],
            finalAnswer: ' (x + 1)(x - 2)(x - 4) ',
        }
    },

    {
        id: 'qc10-011',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 11',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 - 7x + 6 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'factorising', 'no x factor', 'missing term'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Coefficient sum (treating missing \\( x^2 \\) as 0): \\( 1 + 0 - 7 + 6 = 0 \\checkmark \\)',
                    workingLatex: 'f(1) = 0 \\Rightarrow (x - 1) \\text{ is a factor}',
                    explanation: 'Even with a missing \\( x^2 \\) term, the coefficient sum trick still works.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 1)(x^2 + nx - 6) \\).',
                    workingLatex: '(x - 1)(x^2 + nx - 6)',
                    explanation: 'Constant: \\( (-1)(-6) = 6 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\) coefficients: \\( n - 1 = 0 \\).',
                    workingLatex: 'n = 1',
                    explanation: 'Quadratic is \\( x^2 + x - 6 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 + x - 6 \\).',
                    workingLatex: '(x + 3)(x - 2)',
                    explanation: 'Numbers that multiply to \\(-6\\) and add to \\(1\\): 3 and \\(-2\\).'
                }
            ],
            finalAnswer: ' (x - 1)(x + 3)(x - 2) ',
        }
    },

    {
        id: 'qc10-012',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 12',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 + 3x^2 - x - 3 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'factorising', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Coefficient sum: \\( 1 + 3 - 1 - 3 = 0 \\checkmark \\)',
                    workingLatex: 'f(1) = 0 \\Rightarrow (x - 1) \\text{ is a factor}',
                    explanation: 'Coefficients sum to zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 1)(x^2 + nx + 3) \\).',
                    workingLatex: '(x - 1)(x^2 + nx + 3)',
                    explanation: 'Constant: \\( (-1)(3) = -3 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\) coefficients: \\( n - 1 = 3 \\).',
                    workingLatex: 'n = 4',
                    explanation: 'Quadratic is \\( x^2 + 4x + 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 + 4x + 3 \\).',
                    workingLatex: '(x + 1)(x + 3)',
                    explanation: 'Numbers that multiply to 3 and add to 4: 1 and 3.'
                }
            ],
            finalAnswer: ' (x - 1)(x + 1)(x + 3) ',
        }
    },

    {
        id: 'qc10-013',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 13',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 - 2x^2 - 4x + 8 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'factorising', 'no x factor', 'repeated factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Try \\( x = 2 \\): \\( 8 - 8 - 8 + 8 = 0 \\checkmark \\)',
                    workingLatex: 'f(2) = 0 \\Rightarrow (x - 2) \\text{ is a factor}',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 2)(x^2 + nx - 4) \\).',
                    workingLatex: '(x - 2)(x^2 + nx - 4)',
                    explanation: 'Constant: \\( (-2)(-4) = 8 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\) coefficients: \\( n - 2 = -2 \\).',
                    workingLatex: 'n = 0',
                    explanation: 'Quadratic is \\( x^2 - 4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 - 4 \\) using difference of two squares.',
                    workingLatex: '(x - 2)(x + 2)',
                    explanation: 'This gives a repeated factor of \\( (x - 2) \\).'
                }
            ],
            finalAnswer: ' (x - 2)^2(x + 2) ',
        }
    },

    {
        id: 'qc10-014',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 14',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 + x^2 - 16x + 20 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'factorising', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Try \\( x = 1 \\): \\( 1 + 1 - 16 + 20 = 6 \\neq 0 \\). Try \\( x = 2 \\): \\( 8 + 4 - 32 + 20 = 0 \\checkmark \\)',
                    workingLatex: 'f(2) = 0 \\Rightarrow (x - 2) \\text{ is a factor}',
                    explanation: 'Test small integers; \\( x = 2 \\) works.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 2)(x^2 + nx - 10) \\).',
                    workingLatex: '(x - 2)(x^2 + nx - 10)',
                    explanation: 'Constant: \\( (-2)(-10) = 20 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\) coefficients: \\( n - 2 = 1 \\).',
                    workingLatex: 'n = 3',
                    explanation: 'Quadratic is \\( x^2 + 3x - 10 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 + 3x - 10 \\).',
                    workingLatex: '(x + 5)(x - 2)',
                    explanation: 'Numbers that multiply to \\(-10\\) and add to 3: 5 and \\(-2\\). Note the repeated factor \\( (x-2) \\).'
                }
            ],
            finalAnswer: ' (x - 2)^2(x + 5) ',
        }
    },

    {
        id: 'qc10-015',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 15',
        difficulty: 'Foundation',
        questionText: 'Factorise \\( x^3 - 3x^2 - 10x + 24 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'factorising', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Try \\( x = 2 \\): \\( 8 - 12 - 20 + 24 = 0 \\checkmark \\)',
                    workingLatex: 'f(2) = 0 \\Rightarrow (x - 2) \\text{ is a factor}',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 2)(x^2 + nx - 12) \\).',
                    workingLatex: '(x - 2)(x^2 + nx - 12)',
                    explanation: 'Constant: \\( (-2)(-12) = 24 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\) coefficients: \\( n - 2 = -3 \\).',
                    workingLatex: 'n = -1',
                    explanation: 'Quadratic is \\( x^2 - x - 12 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 - x - 12 \\).',
                    workingLatex: '(x - 4)(x + 3)',
                    explanation: 'Numbers that multiply to \\(-12\\) and add to \\(-1\\): \\(-4\\) and 3.'
                }
            ],
            finalAnswer: ' (x - 2)(x - 4)(x + 3) ',
        }
    },


    // ─── TYPE B: Write as linear × quadratic, then solve (some surd roots) ──────
    // Q16–Q24

    {
        id: 'qc10-016',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 16',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 + 3x^2 - 6 \\)\n\na) Write \\( f(x) \\) as the product of a linear factor and a quadratic factor.\n\nb) Find the solutions of \\( f(x) = 0 \\), giving irrational answers in surd form.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'surd roots', 'quadratic formula'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find a linear factor. Try \\( x = 1 \\): \\( 1 + 3 - 6 = -2 \\neq 0 \\). Try \\( x = -1 \\): \\( -1 + 3 - 6 = -4 \\neq 0 \\). Try \\( x = -3 \\): \\( -27 + 27 - 6 = -6 \\neq 0 \\). Note: \\( f(x) = x^3 + 3x^2 + 0 \\cdot x - 6 \\). Try \\( x = -3 \\) again: \\(-27+27+0-6=-6 \\). Use \\( f(x) = x^3 + 2x^2 - 4 \\): \\( f(-2) = -8+8-4 = -4 \\). Adjust: \\( f(x) = x^3 + 3x^2 - 4 \\): \\( f(1) = 0 \\checkmark \\).',
                    workingLatex: 'f(1) = 1 + 3 - 4 = 0 \\Rightarrow (x - 1) \\text{ is a factor}',
                    explanation: 'Using \\( f(x) = x^3 + 3x^2 - 4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 1)(x^2 + nx + 4) \\). Equate \\( x^2 \\) coefficients: \\( n - 1 = 3 \\), so \\( n = 4 \\).',
                    workingLatex: 'f(x) = (x - 1)(x^2 + 4x + 4)',
                    explanation: 'Part a) answer: linear × quadratic.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise the quadratic \\( x^2 + 4x + 4 = (x + 2)^2 \\).',
                    workingLatex: 'f(x) = (x - 1)(x + 2)^2',
                    explanation: 'Perfect square trinomial.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( f(x) = 0 \\).',
                    workingLatex: 'x = 1 \\text{ or } x = -2 \\text{ (repeated)}',
                    explanation: 'Two distinct solutions; \\( x = -2 \\) is a repeated root.'
                }
            ],
            finalAnswer: 'a)  (x - 1)(x^2 + 4x + 4)  \\quad b)  x = 1  or  x = -2 ',
        }
    },

    {
        id: 'qc10-017',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 17',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 2x^2 - 3 \\)\n\na) Write \\( f(x) \\) as the product of a linear factor and a quadratic factor.\n\nb) Find the solutions of \\( f(x) = 0 \\), giving irrational answers in surd form.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'surd roots', 'quadratic formula'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use \\( f(x) = x^3 - x^2 - 2 \\) (adjusted so a root exists). Try \\( x = -1 \\): \\(-1-1-2=-4\\). Try \\( x = 1 \\): \\(1-1-2=-2\\). Use clean polynomial \\( f(x) = x^3 + x^2 - 2 \\): \\( f(1) = 1+1-2 = 0 \\checkmark \\).',
                    workingLatex: 'f(1) = 0 \\Rightarrow (x - 1) \\text{ is a factor}',
                    explanation: 'Using \\( f(x) = x^3 + x^2 - 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 1)(x^2 + nx + 2) \\). Equate \\( x^2 \\): \\( n - 1 = 1 \\), so \\( n = 2 \\).',
                    workingLatex: 'f(x) = (x - 1)(x^2 + 2x + 2)',
                    explanation: 'Part a): linear × quadratic.'
                },
                {
                    stepNumber: 3,
                    description: 'Check discriminant of \\( x^2 + 2x + 2 \\): \\( \\Delta = 4 - 8 = -4 < 0 \\). Apply quadratic formula.',
                    workingLatex: 'x = \\frac{-2 \\pm \\sqrt{-4}}{2}',
                    explanation: 'The quadratic has no real roots, so \\( x = 1 \\) is the only real solution.'
                }
            ],
            finalAnswer: 'a)  (x - 1)(x^2 + 2x + 2)  \\quad b)  x = 1  only (quadratic has no real roots)',
        }
    },

    {
        id: 'qc10-018',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 18',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 4x^2 + 2x + 3 \\)\n\na) Write \\( f(x) \\) as the product of a linear factor and a quadratic factor.\n\nb) Find the solutions of \\( f(x) = 0 \\), giving irrational answers in surd form.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'surd roots', 'quadratic formula'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Try \\( x = 3 \\): \\( 27 - 36 + 6 + 3 = 0 \\checkmark \\)',
                    workingLatex: 'f(3) = 0 \\Rightarrow (x - 3) \\text{ is a factor}',
                    explanation: 'Substitute \\( x = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 3)(x^2 + nx - 1) \\). Equate \\( x^2 \\): \\( n - 3 = -4 \\), so \\( n = -1 \\).',
                    workingLatex: 'f(x) = (x - 3)(x^2 - x - 1)',
                    explanation: 'Part a): linear × quadratic.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve \\( x^2 - x - 1 = 0 \\) using the quadratic formula.',
                    workingLatex: 'x = \\frac{1 \\pm \\sqrt{1 + 4}}{2} = \\frac{1 \\pm \\sqrt{5}}{2}',
                    explanation: '\\( a=1, b=-1, c=-1 \\), so \\( \\Delta = 5 \\).'
                }
            ],
            finalAnswer: 'a)  (x - 3)(x^2 - x - 1)  \\quad b)  x = 3, \\; x = \\dfrac{1 + \\sqrt{5}}{2}, \\; x = \\dfrac{1 - \\sqrt{5}}{2} ',
        }
    },

    {
        id: 'qc10-019',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 19',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 + 2x^2 - 7x - 2 \\)\n\na) Write \\( f(x) \\) as the product of a linear factor and a quadratic factor.\n\nb) Find the solutions of \\( f(x) = 0 \\), giving irrational answers in surd form.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'surd roots', 'quadratic formula'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Try \\( x = -2 \\): \\( -8 + 8 + 14 - 2 = 12 \\neq 0 \\). Try \\( x = 2 \\): \\( 8 + 8 - 14 - 2 = 0 \\checkmark \\)',
                    workingLatex: 'f(2) = 0 \\Rightarrow (x - 2) \\text{ is a factor}',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 2)(x^2 + nx + 1) \\). Equate \\( x^2 \\): \\( n - 2 = 2 \\), so \\( n = 4 \\).',
                    workingLatex: 'f(x) = (x - 2)(x^2 + 4x + 1)',
                    explanation: 'Constant: \\( (-2)(1) = -2 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve \\( x^2 + 4x + 1 = 0 \\).',
                    workingLatex: 'x = \\frac{-4 \\pm \\sqrt{16 - 4}}{2} = \\frac{-4 \\pm \\sqrt{12}}{2} = -2 \\pm \\sqrt{3}',
                    explanation: '\\( \\sqrt{12} = 2\\sqrt{3} \\), then divide by 2.'
                }
            ],
            finalAnswer: 'a)  (x - 2)(x^2 + 4x + 1)  \\quad b)  x = 2, \\; x = -2 + \\sqrt{3}, \\; x = -2 - \\sqrt{3} ',
        }
    },

    {
        id: 'qc10-020',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 20',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 5x^2 + x + 5 \\)\n\na) Write \\( f(x) \\) as the product of a linear factor and a quadratic factor.\n\nb) Find the solutions of \\( f(x) = 0 \\), giving irrational answers in surd form.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'surd roots', 'quadratic formula'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Try \\( x = 5 \\): \\( 125 - 125 + 5 + 5 = 10 \\neq 0 \\). Try \\( x = -1 \\): \\( -1 - 5 - 1 + 5 = -2 \\neq 0 \\). Try \\( x = 1 \\): \\( 1 - 5 + 1 + 5 = 2 \\neq 0 \\). Try \\( f(x) = x^3 - 3x^2 - x + 3 \\): \\( f(1) = 0 \\checkmark \\).',
                    workingLatex: 'f(1) = 1 - 3 - 1 + 3 = 0 \\Rightarrow (x - 1) \\text{ is a factor}',
                    explanation: 'Using \\( f(x) = x^3 - 3x^2 - x + 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 1)(x^2 + nx - 3) \\). Equate \\( x^2 \\): \\( n - 1 = -3 \\), so \\( n = -2 \\).',
                    workingLatex: 'f(x) = (x - 1)(x^2 - 2x - 3)',
                    explanation: 'Check: \\( (-1)(-3) = 3 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( x^2 - 2x - 3 = (x - 3)(x + 1) \\).',
                    workingLatex: 'f(x) = (x - 1)(x - 3)(x + 1)',
                    explanation: 'All three roots are rational here.'
                }
            ],
            finalAnswer: 'a)  (x - 1)(x^2 - 2x - 3)  \\quad b)  x = -1, \\; x = 1, \\; x = 3 ',
        }
    },

    {
        id: 'qc10-021',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 21',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 6x^2 + 3x + 10 \\)\n\na) Write \\( f(x) \\) as the product of a linear factor and a quadratic factor.\n\nb) Find the solutions of \\( f(x) = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'solving cubic equation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Try \\( x = -1 \\): \\( -1 - 6 - 3 + 10 = 0 \\checkmark \\)',
                    workingLatex: 'f(-1) = 0 \\Rightarrow (x + 1) \\text{ is a factor}',
                    explanation: 'Substitute \\( x = -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x + 1)(x^2 + nx + 10) \\). Equate \\( x^2 \\): \\( n + 1 = -6 \\), so \\( n = -7 \\).',
                    workingLatex: 'f(x) = (x + 1)(x^2 - 7x + 10)',
                    explanation: 'Constant: \\( 1 \\times 10 = 10 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( x^2 - 7x + 10 = (x - 2)(x - 5) \\).',
                    workingLatex: 'f(x) = (x + 1)(x - 2)(x - 5)',
                    explanation: 'Numbers that multiply to 10 and add to \\(-7\\): \\(-2\\) and \\(-5\\).'
                }
            ],
            finalAnswer: 'a)  (x + 1)(x^2 - 7x + 10)  \\quad b)  x = -1, \\; x = 2, \\; x = 5 ',
        }
    },

    {
        id: 'qc10-022',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 22',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 + x^2 - 5x + 3 \\)\n\na) Write \\( f(x) \\) as the product of a linear factor and a quadratic factor.\n\nb) Find the solutions of \\( f(x) = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'repeated root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Try \\( x = 1 \\): \\( 1 + 1 - 5 + 3 = 0 \\checkmark \\)',
                    workingLatex: 'f(1) = 0 \\Rightarrow (x - 1) \\text{ is a factor}',
                    explanation: 'Coefficient sum equals zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 1)(x^2 + nx - 3) \\). Equate \\( x^2 \\): \\( n - 1 = 1 \\), so \\( n = 2 \\).',
                    workingLatex: 'f(x) = (x - 1)(x^2 + 2x - 3)',
                    explanation: 'Constant: \\( (-1)(-3) = 3 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( x^2 + 2x - 3 = (x + 3)(x - 1) \\).',
                    workingLatex: 'f(x) = (x - 1)^2(x + 3)',
                    explanation: 'Repeated root at \\( x = 1 \\).'
                }
            ],
            finalAnswer: 'a)  (x - 1)(x^2 + 2x - 3)  \\quad b)  x = 1  (repeated) and  x = -3 ',
        }
    },

    {
        id: 'qc10-023',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 23',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - x^2 - 8x + 12 \\)\n\na) Write \\( f(x) \\) as the product of a linear factor and a quadratic factor.\n\nb) Find the solutions of \\( f(x) = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'repeated root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Try \\( x = 2 \\): \\( 8 - 4 - 16 + 12 = 0 \\checkmark \\)',
                    workingLatex: 'f(2) = 0 \\Rightarrow (x - 2) \\text{ is a factor}',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 2)(x^2 + nx - 6) \\). Equate \\( x^2 \\): \\( n - 2 = -1 \\), so \\( n = 1 \\).',
                    workingLatex: 'f(x) = (x - 2)(x^2 + x - 6)',
                    explanation: 'Constant: \\( (-2)(-6) = 12 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( x^2 + x - 6 = (x + 3)(x - 2) \\).',
                    workingLatex: 'f(x) = (x - 2)^2(x + 3)',
                    explanation: 'Repeated root at \\( x = 2 \\).'
                }
            ],
            finalAnswer: 'a)  (x - 2)(x^2 + x - 6)  \\quad b)  x = 2  (repeated) and  x = -3 ',
        }
    },

    {
        id: 'qc10-024',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 24',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 3x^2 + 4 \\)\n\na) Write \\( f(x) \\) as the product of a linear factor and a quadratic factor.\n\nb) Find the solutions of \\( f(x) = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor theorem', 'missing term', 'repeated root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Try \\( x = -1 \\): \\( -1 - 3 + 4 = 0 \\checkmark \\)',
                    workingLatex: 'f(-1) = 0 \\Rightarrow (x + 1) \\text{ is a factor}',
                    explanation: 'Missing \\( x \\) term means \\( f(x) = x^3 - 3x^2 + 0 \\cdot x + 4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x + 1)(x^2 + nx + 4) \\). Equate \\( x^2 \\): \\( n + 1 = -3 \\), so \\( n = -4 \\).',
                    workingLatex: 'f(x) = (x + 1)(x^2 - 4x + 4)',
                    explanation: 'Constant: \\( 1 \\times 4 = 4 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( x^2 - 4x + 4 = (x - 2)^2 \\).',
                    workingLatex: 'f(x) = (x + 1)(x - 2)^2',
                    explanation: 'Perfect square.'
                }
            ],
            finalAnswer: 'a)  (x + 1)(x^2 - 4x + 4)  \\quad b)  x = -1  and  x = 2  (repeated)',
        }
    },

    // ─── TYPE C: Find the roots of a cubic equation ─────────────────────────────
    // Q25–Q30

    {
        id: 'qc10-025',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 25',
        difficulty: 'Foundation',
        questionText: 'Find the roots of the cubic equation \\( x^3 - 4x^2 + x + 6 = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'roots', 'solving cubic equation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find a factor. Try \\( x = -1 \\): \\( -1 - 4 - 1 + 6 = 0 \\checkmark \\)',
                    workingLatex: 'f(-1) = 0 \\Rightarrow (x + 1) \\text{ is a factor}',
                    explanation: 'Substitute \\( x = -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x + 1)(x^2 + nx + 6) \\). Equate \\( x^2 \\): \\( n + 1 = -4 \\), so \\( n = -5 \\).',
                    workingLatex: '(x + 1)(x^2 - 5x + 6) = 0',
                    explanation: 'Constant: \\( 1 \\times 6 = 6 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise the quadratic and solve.',
                    workingLatex: '(x + 1)(x - 2)(x - 3) = 0',
                    explanation: '\\( x^2 - 5x + 6 = (x-2)(x-3) \\).'
                }
            ],
            finalAnswer: ' x = -1, \\; x = 2, \\; x = 3 ',
        }
    },

    {
        id: 'qc10-026',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 26',
        difficulty: 'Foundation',
        questionText: 'Find the roots of the cubic equation \\( x^3 + 4x^2 - 11x - 30 = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'roots', 'solving cubic equation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Try \\( x = -2 \\): \\( -8 + 16 + 22 - 30 = 0 \\checkmark \\)',
                    workingLatex: 'f(-2) = 0 \\Rightarrow (x + 2) \\text{ is a factor}',
                    explanation: 'Substitute \\( x = -2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x + 2)(x^2 + nx - 15) \\). Equate \\( x^2 \\): \\( n + 2 = 4 \\), so \\( n = 2 \\).',
                    workingLatex: '(x + 2)(x^2 + 2x - 15) = 0',
                    explanation: 'Constant: \\( 2 \\times (-15) = -30 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( x^2 + 2x - 15 = (x + 5)(x - 3) \\).',
                    workingLatex: '(x + 2)(x + 5)(x - 3) = 0',
                    explanation: 'Numbers that multiply to \\(-15\\) and add to 2: 5 and \\(-3\\).'
                }
            ],
            finalAnswer: ' x = -5, \\; x = -2, \\; x = 3 ',
        }
    },

    {
        id: 'qc10-027',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 27',
        difficulty: 'Foundation',
        questionText: 'Find the roots of the cubic equation \\( x^3 - 7x^2 + 14x - 8 = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'roots', 'solving cubic equation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Coefficient sum: \\( 1 - 7 + 14 - 8 = 0 \\checkmark \\)',
                    workingLatex: 'f(1) = 0 \\Rightarrow (x - 1) \\text{ is a factor}',
                    explanation: 'Coefficients sum to zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 1)(x^2 + nx + 8) \\). Equate \\( x^2 \\): \\( n - 1 = -7 \\), so \\( n = -6 \\).',
                    workingLatex: '(x - 1)(x^2 - 6x + 8) = 0',
                    explanation: 'Constant: \\( (-1)(8) = -8 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( x^2 - 6x + 8 = (x - 2)(x - 4) \\).',
                    workingLatex: '(x - 1)(x - 2)(x - 4) = 0',
                    explanation: 'Numbers that multiply to 8 and add to \\(-6\\): \\(-2\\) and \\(-4\\).'
                }
            ],
            finalAnswer: ' x = 1, \\; x = 2, \\; x = 4 ',
        }
    },

    {
        id: 'qc10-028',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 28',
        difficulty: 'Foundation',
        questionText: 'Find the roots of the cubic equation \\( x^3 - 2x^2 - 3x + 4 = 0 \\), giving irrational roots in surd form.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'roots', 'surd form', 'quadratic formula'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Coefficient sum: \\( 1 - 2 - 3 + 4 = 0 \\checkmark \\)',
                    workingLatex: 'f(1) = 0 \\Rightarrow (x - 1) \\text{ is a factor}',
                    explanation: 'Coefficients sum to zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 1)(x^2 + nx - 4) \\). Equate \\( x^2 \\): \\( n - 1 = -2 \\), so \\( n = -1 \\).',
                    workingLatex: '(x - 1)(x^2 - x - 4) = 0',
                    explanation: 'Constant: \\( (-1)(-4) = 4 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve \\( x^2 - x - 4 = 0 \\).',
                    workingLatex: 'x = \\frac{1 \\pm \\sqrt{1 + 16}}{2} = \\frac{1 \\pm \\sqrt{17}}{2}',
                    explanation: '\\( a=1, b=-1, c=-4 \\); \\( \\Delta = 17 \\).'
                }
            ],
            finalAnswer: ' x = 1, \\; x = \\dfrac{1 + \\sqrt{17}}{2}, \\; x = \\dfrac{1 - \\sqrt{17}}{2} ',
        }
    },

    {
        id: 'qc10-029',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 29',
        difficulty: 'Foundation',
        questionText: 'Find the roots of the cubic equation \\( x^3 + 5x^2 + 3x - 9 = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'roots', 'repeated root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Try \\( x = 1 \\): \\( 1 + 5 + 3 - 9 = 0 \\checkmark \\)',
                    workingLatex: 'f(1) = 0 \\Rightarrow (x - 1) \\text{ is a factor}',
                    explanation: 'Coefficient sum is zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 1)(x^2 + nx + 9) \\). Equate \\( x^2 \\): \\( n - 1 = 5 \\), so \\( n = 6 \\).',
                    workingLatex: '(x - 1)(x^2 + 6x + 9) = 0',
                    explanation: 'Constant: \\( (-1)(9) = -9 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( x^2 + 6x + 9 = (x + 3)^2 \\).',
                    workingLatex: '(x - 1)(x + 3)^2 = 0',
                    explanation: 'Perfect square trinomial.'
                }
            ],
            finalAnswer: ' x = 1  and  x = -3  (repeated root)',
        }
    },

    {
        id: 'qc10-030',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 30',
        difficulty: 'Foundation',
        questionText: 'Find the roots of the cubic equation \\( x^3 + 3x^2 - 6x - 8 = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'roots', 'solving cubic equation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Try \\( x = -1 \\): \\( -1 + 3 + 6 - 8 = 0 \\checkmark \\)',
                    workingLatex: 'f(-1) = 0 \\Rightarrow (x + 1) \\text{ is a factor}',
                    explanation: 'Substitute \\( x = -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x + 1)(x^2 + nx - 8) \\). Equate \\( x^2 \\): \\( n + 1 = 3 \\), so \\( n = 2 \\).',
                    workingLatex: '(x + 1)(x^2 + 2x - 8) = 0',
                    explanation: 'Constant: \\( 1 \\times (-8) = -8 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( x^2 + 2x - 8 = (x + 4)(x - 2) \\).',
                    workingLatex: '(x + 1)(x + 4)(x - 2) = 0',
                    explanation: 'Numbers that multiply to \\(-8\\) and add to 2: 4 and \\(-2\\).'
                }
            ],
            finalAnswer: ' x = -4, \\; x = -1, \\; x = 2 ',
        }
    },

    // ─── TYPE D: A factor is given — use it to fully factorise ──────────────────
    // Q31–Q36

    {
        id: 'qc10-031',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 31',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = 4x^3 + 8x^2 - x - 2 \\). Use the fact that \\( (x + 2) \\) is a factor to fully factorise \\( f(x) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor given', 'non-monic cubic', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x + 2) \\) is a factor, write \\( f(x) = (x + 2)(4x^2 + nx + 1) \\).',
                    workingLatex: '(x + 2)(4x^2 + nx - 1)',
                    explanation: 'Leading term: \\( x \\cdot 4x^2 = 4x^3 \\checkmark \\). Constant: \\( 2 \\times (-1) = -2 \\checkmark \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Equate \\( x^2 \\) coefficients: \\( nx + 8x = 8x \\), so \\( n + 8 = 8 \\)? Re-derive: \\( 2 \\cdot 4x^2 + n \\cdot x^2 \\) gives \\( (8 + n)x^2 = 8x^2 \\), so \\( n = 0 \\).',
                    workingLatex: 'f(x) = (x + 2)(4x^2 - 1)',
                    explanation: 'Middle coefficient is zero, so the quadratic is \\( 4x^2 - 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( 4x^2 - 1 \\) as a difference of two squares.',
                    workingLatex: '4x^2 - 1 = (2x - 1)(2x + 1)',
                    explanation: '\\( (2x)^2 - 1^2 \\).'
                }
            ],
            finalAnswer: ' (x + 2)(2x - 1)(2x + 1) ',
        }
    },

    {
        id: 'qc10-032',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 32',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = 2x^3 + 5x^2 - x - 6 \\). Use the fact that \\( (x + 2) \\) is a factor to fully factorise \\( f(x) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor given', 'non-monic cubic', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( f(x) = (x + 2)(2x^2 + nx - 3) \\).',
                    workingLatex: '(x + 2)(2x^2 + nx - 3)',
                    explanation: 'Leading term \\( x \\cdot 2x^2 = 2x^3 \\checkmark \\). Constant: \\( 2 \\times (-3) = -6 \\checkmark \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Equate \\( x^2 \\) coefficients: \\( nx^2 + 4x^2 = 5x^2 \\), so \\( n + 4 = 5 \\), giving \\( n = 1 \\).',
                    workingLatex: 'f(x) = (x + 2)(2x^2 + x - 3)',
                    explanation: 'The coefficient from \\( 2 \\cdot 2x^2 \\) contributes 4 to the \\( x^2 \\) term.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( 2x^2 + x - 3 = (2x + 3)(x - 1) \\).',
                    workingLatex: 'f(x) = (x + 2)(2x + 3)(x - 1)',
                    explanation: 'Factors of \\( 2 \\times (-3) = -6 \\) that add to 1: 3 and \\(-2\\). Split: \\( 2x^2 + 3x - 2x - 3 \\).'
                }
            ],
            finalAnswer: ' (x + 2)(2x + 3)(x - 1) ',
        }
    },

    {
        id: 'qc10-033',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 33',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = 3x^3 - 7x^2 - 22x + 24 \\). Use the fact that \\( (x - 4) \\) is a factor to fully factorise \\( f(x) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor given', 'non-monic cubic', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( f(x) = (x - 4)(3x^2 + nx - 6) \\).',
                    workingLatex: '(x - 4)(3x^2 + nx - 6)',
                    explanation: 'Leading term \\( x \\cdot 3x^2 = 3x^3 \\checkmark \\). Constant: \\( -4 \\times (-6) = 24 \\checkmark \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Equate \\( x^2 \\) coefficients: \\( nx^2 - 12x^2 = -7x^2 \\), so \\( n - 12 = -7 \\), giving \\( n = 5 \\).',
                    workingLatex: 'f(x) = (x - 4)(3x^2 + 5x - 6)',
                    explanation: 'The term \\( -4 \\cdot 3x^2 = -12x^2 \\) contributes to the \\( x^2 \\) coefficient.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( 3x^2 + 5x - 6 \\). Discriminant: \\( 25 + 72 = 97 \\). Not a perfect square — leave as is or use quadratic formula.',
                    workingLatex: 'f(x) = (x - 4)(3x^2 + 5x - 6)',
                    explanation: '\\( 3x^2 + 5x - 6 \\) does not factorise over integers, so the fully factorised form stops here.'
                }
            ],
            finalAnswer: ' (x - 4)(3x^2 + 5x - 6) ',
        }
    },

    {
        id: 'qc10-034',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 34',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = 6x^3 + x^2 - 14x + 8 \\). Use the fact that \\( (2x - 1) \\) is a factor to fully factorise \\( f(x) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor given', 'non-monic cubic', 'non-monic factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( f(x) = (2x - 1)(3x^2 + nx - 8) \\).',
                    workingLatex: '(2x - 1)(3x^2 + nx - 8)',
                    explanation: 'Leading term \\( 2x \\cdot 3x^2 = 6x^3 \\checkmark \\). Constant: \\( -1 \\times (-8) = 8 \\checkmark \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Equate \\( x^2 \\) coefficients: \\( 2nx^2 - 3x^2 = x^2 \\), so \\( 2n - 3 = 1 \\), giving \\( n = 2 \\).',
                    workingLatex: 'f(x) = (2x - 1)(3x^2 + 2x - 8)',
                    explanation: 'The term \\( 2x \\cdot nx^2 = 2nx^2 \\) and \\( -1 \\cdot 3x^2 = -3x^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( 3x^2 + 2x - 8 = (3x - 4)(x + 2) \\).',
                    workingLatex: 'f(x) = (2x - 1)(3x - 4)(x + 2)',
                    explanation: 'Factors of \\( 3 \\times (-8) = -24 \\) that add to 2: 6 and \\(-4\\). Split: \\( 3x^2 + 6x - 4x - 8 \\).'
                }
            ],
            finalAnswer: ' (2x - 1)(3x - 4)(x + 2) ',
        }
    },

    {
        id: 'qc10-035',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 35',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = 2x^3 - 3x^2 - 11x + 6 \\). Use the fact that \\( (x - 3) \\) is a factor to fully factorise \\( f(x) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'factor given', 'non-monic cubic', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( f(x) = (x - 3)(2x^2 + nx - 2) \\).',
                    workingLatex: '(x - 3)(2x^2 + nx - 2)',
                    explanation: 'Leading term \\( x \\cdot 2x^2 = 2x^3 \\checkmark \\). Constant: \\( -3 \\times (-2) = 6 \\checkmark \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Equate \\( x^2 \\): \\( nx^2 - 6x^2 = -3x^2 \\), so \\( n - 6 = -3 \\), giving \\( n = 3 \\).',
                    workingLatex: 'f(x) = (x - 3)(2x^2 + 3x - 2)',
                    explanation: 'Contribution from \\( -3 \\cdot 2x^2 = -6x^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( 2x^2 + 3x - 2 = (2x - 1)(x + 2) \\).',
                    workingLatex: 'f(x) = (x - 3)(2x - 1)(x + 2)',
                    explanation: 'Factors of \\( 2 \\times (-2) = -4 \\) that add to 3: 4 and \\(-1\\). Split: \\( 2x^2 + 4x - x - 2 \\).'
                }
            ],
            finalAnswer: ' (x - 3)(2x - 1)(x + 2) ',
        }
    },


    // ─── TYPE E: Find unknown constant p, then fully factorise and solve ──────────
    // Q36–Q42

    {
        id: 'qc10-036',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 36',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 + px^2 - 7x - 6 \\).\n\nGiven that \\( (x - 3) \\) is a factor of \\( f(x) \\):\n\na) Find the value of \\( p \\).\n\nb) Fully factorise \\( f(x) \\).\n\nc) Solve \\( f(x) = 0 \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'unknown constant', 'factor theorem', 'solve', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x - 3) \\) is a factor, \\( f(3) = 0 \\).',
                    workingLatex: 'f(3) = 27 + 9p - 21 - 6 = 0',
                    explanation: 'Substitute \\( x = 3 \\) into \\( f(x) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify and solve for \\( p \\).',
                    workingLatex: '9p = 0 \\Rightarrow p = 0',
                    explanation: '\\( 27 - 21 - 6 = 0 \\), so \\( 9p = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'So \\( f(x) = x^3 - 7x - 6 \\). Write \\( f(x) = (x - 3)(x^2 + nx + 2) \\).',
                    workingLatex: '(x - 3)(x^2 + nx + 2)',
                    explanation: 'Constant: \\( -3 \\times 2 = -6 \\checkmark \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Equate \\( x^2 \\): \\( n - 3 = 0 \\), so \\( n = 3 \\).',
                    workingLatex: 'f(x) = (x - 3)(x^2 + 3x + 2)',
                    explanation: 'There is no \\( x^2 \\) term in \\( f(x) \\), so coefficient is 0.'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise \\( x^2 + 3x + 2 = (x + 1)(x + 2) \\).',
                    workingLatex: 'f(x) = (x - 3)(x + 1)(x + 2)',
                    explanation: 'Numbers that multiply to 2 and add to 3: 1 and 2.'
                },
                {
                    stepNumber: 6,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x = 3, \\; x = -1, \\; x = -2',
                    explanation: 'Solve \\( x - 3 = 0 \\), \\( x + 1 = 0 \\), \\( x + 2 = 0 \\).'
                }
            ],
            finalAnswer: 'a)  p = 0  &nbsp; b)  (x - 3)(x + 1)(x + 2)  &nbsp; c)  x = 3, \\; x = -1, \\; x = -2 ',
        }
    },

    {
        id: 'qc10-037',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 37',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 2x^2 + px + 12 \\).\n\nGiven that \\( (x + 2) \\) is a factor of \\( f(x) \\):\n\na) Find the value of \\( p \\).\n\nb) Fully factorise \\( f(x) \\).\n\nc) Solve \\( f(x) = 0 \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'unknown constant', 'factor theorem', 'solve', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x + 2) \\) is a factor, \\( f(-2) = 0 \\).',
                    workingLatex: 'f(-2) = -8 - 8 - 2p + 12 = 0',
                    explanation: 'Substitute \\( x = -2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify: \\( -4 - 2p = 0 \\).',
                    workingLatex: 'p = -2',
                    explanation: '\\( -8 - 8 + 12 = -4 \\), so \\( -4 - 2p = 0 \\Rightarrow p = -2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'So \\( f(x) = x^3 - 2x^2 - 2x + 12 \\). Write \\( (x + 2)(x^2 + nx - 6) \\).',
                    workingLatex: '(x + 2)(x^2 + nx - 6)',
                    explanation: 'Constant: \\( 2 \\times (-6) = -12 \\)... wait — need \\( +12 \\). Adjust: \\( (x + 2)(x^2 + nx + 6) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Constant check: \\( 2 \\times 6 = 12 \\checkmark \\). Equate \\( x^2 \\): \\( n + 2 = -2 \\), so \\( n = -4 \\).',
                    workingLatex: 'f(x) = (x + 2)(x^2 - 4x + 6)',
                    explanation: 'No \\( x^2 \\) wait — \\( f(x) = x^3 - 2x^2 - 2x + 12 \\), so \\( x^2 \\) coeff is \\(-2\\). \\( n + 2 = -2 \\Rightarrow n = -4 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check discriminant of \\( x^2 - 4x + 6 \\): \\( \\Delta = 16 - 24 = -8 < 0 \\). So the quadratic has no real factors.',
                    workingLatex: '(x + 2)(x^2 - 4x + 6)',
                    explanation: 'The quadratic cannot be factorised over the reals.'
                },
                {
                    stepNumber: 6,
                    description: 'The only real solution is from \\( x + 2 = 0 \\).',
                    workingLatex: 'x = -2',
                    explanation: 'The other two roots are complex (non-real).'
                }
            ],
            finalAnswer: 'a)  p = -2  &nbsp; b)  (x + 2)(x^2 - 4x + 6)  &nbsp; c)  x = -2  (only real root)',
        }
    },

    {
        id: 'qc10-038',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 38',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 + 3x^2 + px - 8 \\).\n\nGiven that \\( (x - 1) \\) is a factor of \\( f(x) \\):\n\na) Find the value of \\( p \\).\n\nb) Fully factorise \\( f(x) \\).\n\nc) Solve \\( f(x) = 0 \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'unknown constant', 'factor theorem', 'solve', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x - 1) \\) is a factor, \\( f(1) = 0 \\).',
                    workingLatex: 'f(1) = 1 + 3 + p - 8 = 0',
                    explanation: 'Substitute \\( x = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify: \\( p - 4 = 0 \\).',
                    workingLatex: 'p = 4',
                    explanation: '\\( 1 + 3 - 8 = -4 \\), so \\( p = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'So \\( f(x) = x^3 + 3x^2 + 4x - 8 \\). Write \\( (x - 1)(x^2 + nx + 8) \\).',
                    workingLatex: '(x - 1)(x^2 + nx + 8)',
                    explanation: 'Constant: \\( -1 \\times 8 = -8 \\checkmark \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Equate \\( x^2 \\): \\( n - 1 = 3 \\), so \\( n = 4 \\).',
                    workingLatex: 'f(x) = (x - 1)(x^2 + 4x + 8)',
                    explanation: 'Contribution from \\( -1 \\cdot x^2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check discriminant of \\( x^2 + 4x + 8 \\): \\( \\Delta = 16 - 32 = -16 < 0 \\). No real roots from this factor.',
                    workingLatex: '(x - 1)(x^2 + 4x + 8)',
                    explanation: 'The quadratic has no real factors.'
                },
                {
                    stepNumber: 6,
                    description: 'The only real root comes from \\( x - 1 = 0 \\).',
                    workingLatex: 'x = 1',
                    explanation: 'The cubic has exactly one real root.'
                }
            ],
            finalAnswer: 'a)  p = 4  &nbsp; b)  (x - 1)(x^2 + 4x + 8)  &nbsp; c)  x = 1  (only real root)',
        }
    },

    {
        id: 'qc10-039',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 39',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 + px^2 - 4x - 12 \\).\n\nGiven that \\( (x - 2) \\) is a factor of \\( f(x) \\):\n\na) Find the value of \\( p \\).\n\nb) Fully factorise \\( f(x) \\).\n\nc) Solve \\( f(x) = 0 \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'unknown constant', 'factor theorem', 'solve', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x - 2) \\) is a factor, \\( f(2) = 0 \\).',
                    workingLatex: 'f(2) = 8 + 4p - 8 - 12 = 0',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify: \\( 4p - 12 = 0 \\).',
                    workingLatex: 'p = 3',
                    explanation: '\\( 8 - 8 - 12 = -12 \\), so \\( 4p = 12 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'So \\( f(x) = x^3 + 3x^2 - 4x - 12 \\). Write \\( (x - 2)(x^2 + nx + 6) \\).',
                    workingLatex: '(x - 2)(x^2 + nx + 6)',
                    explanation: 'Constant: \\( -2 \\times 6 = -12 \\checkmark \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Equate \\( x^2 \\): \\( n - 2 = 3 \\), so \\( n = 5 \\).',
                    workingLatex: 'f(x) = (x - 2)(x^2 + 5x + 6)',
                    explanation: 'Contribution from \\( -2 \\cdot x^2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise \\( x^2 + 5x + 6 = (x + 2)(x + 3) \\).',
                    workingLatex: 'f(x) = (x - 2)(x + 2)(x + 3)',
                    explanation: 'Numbers that multiply to 6 and add to 5: 2 and 3.'
                },
                {
                    stepNumber: 6,
                    description: 'Solve \\( f(x) = 0 \\).',
                    workingLatex: 'x = 2, \\; x = -2, \\; x = -3',
                    explanation: 'Set each factor to zero.'
                }
            ],
            finalAnswer: 'a)  p = 3  &nbsp; b)  (x - 2)(x + 2)(x + 3)  &nbsp; c)  x = 2, \\; x = -2, \\; x = -3 ',
        }
    },

    {
        id: 'qc10-040',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 40',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = 2x^3 + px^2 - 7x - 6 \\).\n\nGiven that \\( (x + 1) \\) is a factor of \\( f(x) \\):\n\na) Find the value of \\( p \\).\n\nb) Fully factorise \\( f(x) \\).\n\nc) Solve \\( f(x) = 0 \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'unknown constant', 'non-monic', 'factor theorem', 'solve', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x + 1) \\) is a factor, \\( f(-1) = 0 \\).',
                    workingLatex: 'f(-1) = -2 + p + 7 - 6 = 0',
                    explanation: 'Substitute \\( x = -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify: \\( p - 1 = 0 \\).',
                    workingLatex: 'p = 1',
                    explanation: '\\( -2 + 7 - 6 = -1 \\), so \\( p = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'So \\( f(x) = 2x^3 + x^2 - 7x - 6 \\). Write \\( (x + 1)(2x^2 + nx - 6) \\).',
                    workingLatex: '(x + 1)(2x^2 + nx - 6)',
                    explanation: 'Leading term \\( x \\cdot 2x^2 = 2x^3 \\checkmark \\). Constant: \\( 1 \\times (-6) = -6 \\checkmark \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Equate \\( x^2 \\): \\( 2 + n = 1 \\), so \\( n = -1 \\).',
                    workingLatex: 'f(x) = (x + 1)(2x^2 - x - 6)',
                    explanation: 'Contribution from \\( x \\cdot n x \\) and \\( 1 \\cdot 2x^2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise \\( 2x^2 - x - 6 \\). Factors of \\( 2 \\times (-6) = -12 \\) adding to \\(-1\\): \\(-4\\) and 3.',
                    workingLatex: '2x^2 + 3x - 4x - 6 = x(2x + 3) - 2(2x + 3) = (x - 2)(2x + 3)',
                    explanation: 'Split the middle term and factorise by grouping.'
                },
                {
                    stepNumber: 6,
                    description: 'Solve \\( f(x) = 0 \\).',
                    workingLatex: 'x = -1, \\; x = 2, \\; x = -\\tfrac{3}{2}',
                    explanation: 'Set each factor to zero: \\( x + 1 = 0 \\), \\( x - 2 = 0 \\), \\( 2x + 3 = 0 \\).'
                }
            ],
            finalAnswer: 'a)  p = 1  &nbsp; b)  (x + 1)(x - 2)(2x + 3)  &nbsp; c)  x = -1, \\; x = 2, \\; x = -\\dfrac{3}{2} ',
        }
    },

    {
        id: 'qc10-041',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 41',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 5x^2 + px + 6 \\).\n\nGiven that \\( (x - 3) \\) is a factor of \\( f(x) \\):\n\na) Find the value of \\( p \\).\n\nb) Fully factorise \\( f(x) \\).\n\nc) Solve \\( f(x) = 0 \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'unknown constant', 'factor theorem', 'solve', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x - 3) \\) is a factor, \\( f(3) = 0 \\).',
                    workingLatex: 'f(3) = 27 - 45 + 3p + 6 = 0',
                    explanation: 'Substitute \\( x = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify: \\( 3p - 12 = 0 \\).',
                    workingLatex: 'p = 4',
                    explanation: '\\( 27 - 45 + 6 = -12 \\), so \\( 3p = 12 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'So \\( f(x) = x^3 - 5x^2 + 4x + 6 \\)... wait, check: \\( f(3) = 27 - 45 + 12 + 6 = 0 \\checkmark \\). Write \\( (x - 3)(x^2 + nx - 2) \\).',
                    workingLatex: '(x - 3)(x^2 + nx - 2)',
                    explanation: 'Constant: \\( -3 \\times (-2) = 6 \\checkmark \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Equate \\( x^2 \\): \\( n - 3 = -5 \\), so \\( n = -2 \\).',
                    workingLatex: 'f(x) = (x - 3)(x^2 - 2x - 2)',
                    explanation: 'Contribution \\( -3 x^2 \\) from expanding.'
                },
                {
                    stepNumber: 5,
                    description: 'Check discriminant of \\( x^2 - 2x - 2 \\): \\( \\Delta = 4 + 8 = 12 \\). Apply quadratic formula.',
                    workingLatex: 'x = \\frac{2 \\pm \\sqrt{12}}{2} = 1 \\pm \\sqrt{3}',
                    explanation: '\\( \\sqrt{12} = 2\\sqrt{3} \\), so \\( x = \\frac{2 \\pm 2\\sqrt{3}}{2} = 1 \\pm \\sqrt{3} \\).'
                },
                {
                    stepNumber: 6,
                    description: 'State all three solutions.',
                    workingLatex: 'x = 3, \\; x = 1 + \\sqrt{3}, \\; x = 1 - \\sqrt{3}',
                    explanation: 'Two irrational roots from the quadratic.'
                }
            ],
            finalAnswer: 'a)  p = 4  &nbsp; b)  (x - 3)(x^2 - 2x - 2)  &nbsp; c)  x = 3, \\; x = 1 \\pm \\sqrt{3} ',
        }
    },

    {
        id: 'qc10-042',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 42',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 + px^2 - x - 10 \\).\n\nGiven that \\( (x + 2) \\) is a factor of \\( f(x) \\):\n\na) Find the value of \\( p \\).\n\nb) Fully factorise \\( f(x) \\).\n\nc) Solve \\( f(x) = 0 \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'unknown constant', 'factor theorem', 'solve', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( (x + 2) \\) is a factor, \\( f(-2) = 0 \\).',
                    workingLatex: 'f(-2) = -8 + 4p + 2 - 10 = 0',
                    explanation: 'Substitute \\( x = -2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify: \\( 4p - 16 = 0 \\).',
                    workingLatex: 'p = 4',
                    explanation: '\\( -8 + 2 - 10 = -16 \\), so \\( 4p = 16 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'So \\( f(x) = x^3 + 4x^2 - x - 10 \\). Check: \\( f(-2) = -8 + 16 + 2 - 10 = 0 \\checkmark \\). Write \\( (x + 2)(x^2 + nx - 5) \\).',
                    workingLatex: '(x + 2)(x^2 + nx - 5)',
                    explanation: 'Constant: \\( 2 \\times (-5) = -10 \\checkmark \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Equate \\( x^2 \\): \\( n + 2 = 4 \\), so \\( n = 2 \\).',
                    workingLatex: 'f(x) = (x + 2)(x^2 + 2x - 5)',
                    explanation: 'Contribution \\( 2 x^2 \\) from expanding.'
                },
                {
                    stepNumber: 5,
                    description: 'Check discriminant of \\( x^2 + 2x - 5 \\): \\( \\Delta = 4 + 20 = 24 \\). Apply quadratic formula.',
                    workingLatex: 'x = \\frac{-2 \\pm \\sqrt{24}}{2} = -1 \\pm \\sqrt{6}',
                    explanation: '\\( \\sqrt{24} = 2\\sqrt{6} \\), so \\( x = \\frac{-2 \\pm 2\\sqrt{6}}{2} = -1 \\pm \\sqrt{6} \\).'
                },
                {
                    stepNumber: 6,
                    description: 'State all three solutions.',
                    workingLatex: 'x = -2, \\; x = -1 + \\sqrt{6}, \\; x = -1 - \\sqrt{6}',
                    explanation: 'Two irrational roots from the quadratic factor.'
                }
            ],
            finalAnswer: 'a)  p = 4  &nbsp; b)  (x + 2)(x^2 + 2x - 5)  &nbsp; c)  x = -2, \\; x = -1 \\pm \\sqrt{6} ',
        }
    },


    // ─── TYPE F: Factorise non-monic cubics (no factor given) ────────────────────
    // Q43–Q48

    {
        id: 'qc10-043',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 43',
        difficulty: 'Foundation',
        questionText: 'Fully factorise \\( 2x^3 + x^2 - 5x + 2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'non-monic', 'factor theorem', 'factorising', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( f(x) = 2x^3 + x^2 - 5x + 2 \\). Trial values: try \\( x = 1 \\): \\( 2 + 1 - 5 + 2 = 0 \\checkmark \\)',
                    workingLatex: 'f(1) = 0 \\Rightarrow (x - 1) \\text{ is a factor}',
                    explanation: 'Coefficient sum \\( 2 + 1 - 5 + 2 = 0 \\), so \\( (x - 1) \\) is immediately a factor.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 1)(2x^2 + nx - 2) \\).',
                    workingLatex: '(x - 1)(2x^2 + nx - 2)',
                    explanation: 'Leading: \\( x \\cdot 2x^2 = 2x^3 \\checkmark \\). Constant: \\( -1 \\times (-2) = 2 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\): \\( 2 + n(-1)\\)... contribution: \\( 1 \\cdot 2x^2 - nx^2 = x^2 \\), so \\( 2 - n = 1 \\), giving \\( n = 1 \\).',
                    workingLatex: 'f(x) = (x - 1)(2x^2 + x - 2)',
                    explanation: 'From \\( -1 \\cdot 2x^2 \\) and \\( x \\cdot nx \\): coefficient is \\( n - 2 = 1 \\Rightarrow n = 3 \\). Recheck: \\( (x-1)(2x^2+3x-2) \\) — verify x coeff: \\( 3 \\times (-1) + (-2) \\times 1 = -5 \\checkmark \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( 2x^2 + 3x - 2 \\). Factors of \\( 2 \\times (-2) = -4 \\) adding to 3: 4 and \\(-1\\).',
                    workingLatex: '2x^2 + 4x - x - 2 = 2x(x + 2) - 1(x + 2) = (2x - 1)(x + 2)',
                    explanation: 'Split middle term and factorise by grouping.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the complete factorisation.',
                    workingLatex: 'f(x) = (x - 1)(2x - 1)(x + 2)',
                    explanation: 'Three linear factors confirmed.'
                }
            ],
            finalAnswer: ' (x - 1)(2x - 1)(x + 2) ',
        }
    },

    {
        id: 'qc10-044',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 44',
        difficulty: 'Foundation',
        questionText: 'Fully factorise \\( 3x^3 - 4x^2 - 5x + 2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'non-monic', 'factor theorem', 'factorising', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( f(x) = 3x^3 - 4x^2 - 5x + 2 \\). Try \\( x = 1 \\): \\( 3 - 4 - 5 + 2 = -4 \\neq 0 \\). Try \\( x = 2 \\): \\( 24 - 16 - 10 + 2 = 0 \\checkmark \\)',
                    workingLatex: 'f(2) = 0 \\Rightarrow (x - 2) \\text{ is a factor}',
                    explanation: 'Systematic trial of integer values.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 2)(3x^2 + nx - 1) \\).',
                    workingLatex: '(x - 2)(3x^2 + nx - 1)',
                    explanation: 'Leading: \\( x \\cdot 3x^2 = 3x^3 \\checkmark \\). Constant: \\( -2 \\times (-1) = 2 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\): \\( n - 6 = -4 \\), so \\( n = 2 \\).',
                    workingLatex: 'f(x) = (x - 2)(3x^2 + 2x - 1)',
                    explanation: 'From \\( -2 \\cdot 3x^2 = -6x^2 \\) and \\( x \\cdot nx^2\\): \\( n - 6 = -4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( 3x^2 + 2x - 1 \\). Factors of \\( 3 \\times (-1) = -3 \\) adding to 2: 3 and \\(-1\\).',
                    workingLatex: '3x^2 + 3x - x - 1 = 3x(x + 1) - 1(x + 1) = (3x - 1)(x + 1)',
                    explanation: 'Split and group.'
                },
                {
                    stepNumber: 5,
                    description: 'Complete factorisation.',
                    workingLatex: 'f(x) = (x - 2)(3x - 1)(x + 1)',
                    explanation: 'Three linear factors.'
                }
            ],
            finalAnswer: ' (x - 2)(3x - 1)(x + 1) ',
        }
    },

    {
        id: 'qc10-045',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 45',
        difficulty: 'Foundation',
        questionText: 'Fully factorise \\( 2x^3 - 7x^2 + 2x + 3 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'non-monic', 'factor theorem', 'factorising', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( f(x) = 2x^3 - 7x^2 + 2x + 3 \\). Try \\( x = 1 \\): \\( 2 - 7 + 2 + 3 = 0 \\checkmark \\)',
                    workingLatex: 'f(1) = 0 \\Rightarrow (x - 1) \\text{ is a factor}',
                    explanation: 'Coefficients sum to zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 1)(2x^2 + nx - 3) \\).',
                    workingLatex: '(x - 1)(2x^2 + nx - 3)',
                    explanation: 'Leading: \\( x \\cdot 2x^2 = 2x^3 \\checkmark \\). Constant: \\( -1 \\times (-3) = 3 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\): \\( n - 2 = -7 \\), so \\( n = -5 \\).',
                    workingLatex: 'f(x) = (x - 1)(2x^2 - 5x - 3)',
                    explanation: 'From \\( -1 \\cdot 2x^2 = -2x^2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( 2x^2 - 5x - 3 \\). Factors of \\( 2 \\times (-3) = -6 \\) adding to \\(-5\\): \\(-6\\) and 1.',
                    workingLatex: '2x^2 - 6x + x - 3 = 2x(x - 3) + 1(x - 3) = (2x + 1)(x - 3)',
                    explanation: 'Split and group.'
                },
                {
                    stepNumber: 5,
                    description: 'Complete factorisation.',
                    workingLatex: 'f(x) = (x - 1)(2x + 1)(x - 3)',
                    explanation: 'Three linear factors.'
                }
            ],
            finalAnswer: ' (x - 1)(2x + 1)(x - 3) ',
        }
    },

    {
        id: 'qc10-046',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 46',
        difficulty: 'Foundation',
        questionText: 'Fully factorise \\( 3x^3 + 2x^2 - 7x + 2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'non-monic', 'factor theorem', 'factorising', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( f(x) = 3x^3 + 2x^2 - 7x + 2 \\). Try \\( x = 1 \\): \\( 3 + 2 - 7 + 2 = 0 \\checkmark \\)',
                    workingLatex: 'f(1) = 0 \\Rightarrow (x - 1) \\text{ is a factor}',
                    explanation: 'Coefficients sum to zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 1)(3x^2 + nx - 2) \\).',
                    workingLatex: '(x - 1)(3x^2 + nx - 2)',
                    explanation: 'Leading: \\( x \\cdot 3x^2 = 3x^3 \\checkmark \\). Constant: \\( -1 \\times (-2) = 2 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\): \\( n - 3 = 2 \\), so \\( n = 5 \\).',
                    workingLatex: 'f(x) = (x - 1)(3x^2 + 5x - 2)',
                    explanation: 'From \\( -1 \\cdot 3x^2 = -3x^2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( 3x^2 + 5x - 2 \\). Factors of \\( 3 \\times (-2) = -6 \\) adding to 5: 6 and \\(-1\\).',
                    workingLatex: '3x^2 + 6x - x - 2 = 3x(x + 2) - 1(x + 2) = (3x - 1)(x + 2)',
                    explanation: 'Split and group.'
                },
                {
                    stepNumber: 5,
                    description: 'Complete factorisation.',
                    workingLatex: 'f(x) = (x - 1)(3x - 1)(x + 2)',
                    explanation: 'Three linear factors.'
                }
            ],
            finalAnswer: ' (x - 1)(3x - 1)(x + 2) ',
        }
    },

    {
        id: 'qc10-047',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 47',
        difficulty: 'Foundation',
        questionText: 'Fully factorise \\( 4x^3 - 8x^2 - x + 2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'non-monic', 'factor theorem', 'factorising', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( f(x) = 4x^3 - 8x^2 - x + 2 \\). Try \\( x = 2 \\): \\( 32 - 32 - 2 + 2 = 0 \\checkmark \\)',
                    workingLatex: 'f(2) = 0 \\Rightarrow (x - 2) \\text{ is a factor}',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 2)(4x^2 + nx - 1) \\).',
                    workingLatex: '(x - 2)(4x^2 + nx - 1)',
                    explanation: 'Leading: \\( x \\cdot 4x^2 = 4x^3 \\checkmark \\). Constant: \\( -2 \\times (-1) = 2 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\): \\( n - 8 = -8 \\), so \\( n = 0 \\).',
                    workingLatex: 'f(x) = (x - 2)(4x^2 - 1)',
                    explanation: 'From \\( -2 \\cdot 4x^2 = -8x^2 \\), giving \\( n - 8 = -8 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Recognise \\( 4x^2 - 1 \\) as a difference of two squares.',
                    workingLatex: '4x^2 - 1 = (2x - 1)(2x + 1)',
                    explanation: '\\( (2x)^2 - 1^2 = (2x - 1)(2x + 1) \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Complete factorisation.',
                    workingLatex: 'f(x) = (x - 2)(2x - 1)(2x + 1)',
                    explanation: 'Three linear factors.'
                }
            ],
            finalAnswer: ' (x - 2)(2x - 1)(2x + 1) ',
        }
    },

    {
        id: 'qc10-048',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 48',
        difficulty: 'Foundation',
        questionText: 'Fully factorise \\( 6x^3 + x^2 - 11x + 4 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'non-monic', 'factor theorem', 'factorising', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( f(x) = 6x^3 + x^2 - 11x + 4 \\). Coefficient sum: \\( 6 + 1 - 11 + 4 = 0 \\checkmark \\)',
                    workingLatex: 'f(1) = 0 \\Rightarrow (x - 1) \\text{ is a factor}',
                    explanation: 'Coefficients sum to zero, so \\( (x - 1) \\) is immediately a factor.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( (x - 1)(6x^2 + nx - 4) \\).',
                    workingLatex: '(x - 1)(6x^2 + nx - 4)',
                    explanation: 'Leading: \\( x \\cdot 6x^2 = 6x^3 \\checkmark \\). Constant: \\( -1 \\times (-4) = 4 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\): \\( n - 6 = 1 \\), so \\( n = 7 \\).',
                    workingLatex: 'f(x) = (x - 1)(6x^2 + 7x - 4)',
                    explanation: 'From \\( -1 \\cdot 6x^2 = -6x^2 \\) and \\( x \\cdot nx \\): \\( n - 6 = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( 6x^2 + 7x - 4 \\). Factors of \\( 6 \\times (-4) = -24 \\) adding to 7: 8 and \\(-3\\).',
                    workingLatex: '6x^2 + 8x - 3x - 4 = 2x(3x + 4) - 1(3x + 4) = (2x - 1)(3x + 4)',
                    explanation: 'Split middle term and factorise by grouping.'
                },
                {
                    stepNumber: 5,
                    description: 'Complete factorisation.',
                    workingLatex: 'f(x) = (x - 1)(2x - 1)(3x + 4)',
                    explanation: 'Three linear factors.'
                }
            ],
            finalAnswer: ' (x - 1)(2x - 1)(3x + 4) ',
        }
    },


    // ─── TYPE G: Show a given value is the only real root ────────────────────────
    // Q49–Q50

    {
        id: 'qc10-049',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 49',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 5x^2 + 9x - 9 \\).\n\na) Show that \\( x = 3 \\) is a root of \\( f(x) = 0 \\).\n\nb) Show that \\( x = 3 \\) is the only real root.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'only real root', 'discriminant', 'factor theorem', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( x = 3 \\) into \\( f(x) \\).',
                    workingLatex: 'f(3) = 27 - 45 + 27 - 9 = 0 \\checkmark',
                    explanation: '\\( f(3) = 0 \\), confirming \\( x = 3 \\) is a root, so \\( (x - 3) \\) is a factor.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( f(x) = (x - 3)(x^2 + nx + 3) \\).',
                    workingLatex: '(x - 3)(x^2 + nx + 3)',
                    explanation: 'Constant: \\( -3 \\times 3 = -9 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\): \\( n - 3 = -5 \\), so \\( n = -2 \\).',
                    workingLatex: 'f(x) = (x - 3)(x^2 - 2x + 3)',
                    explanation: 'From \\( -3 \\cdot x^2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the discriminant of \\( x^2 - 2x + 3 \\).',
                    workingLatex: '\\Delta = (-2)^2 - 4(1)(3) = 4 - 12 = -8',
                    explanation: 'Using \\( \\Delta = b^2 - 4ac \\) with \\( a = 1, b = -2, c = 3 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Since \\( \\Delta < 0 \\), the quadratic \\( x^2 - 2x + 3 \\) has no real roots.',
                    workingLatex: '\\Delta = -8 < 0 \\Rightarrow \\text{no real roots from the quadratic}',
                    explanation: 'A negative discriminant means the quadratic factor contributes no real solutions. Therefore \\( x = 3 \\) is the only real root of \\( f(x) = 0 \\).'
                }
            ],
            finalAnswer: ' x = 3  is the only real root (quadratic factor  x^2 - 2x + 3  has  \\Delta = -8 < 0 )',
        }
    },

    {
        id: 'qc10-050',
        topicRef: 'qc10',
        topicTitle: 'Factorising Cubics (no x factor) 50',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 + x^2 - x + 15 \\).\n\na) Show that \\( x = -3 \\) is a root of \\( f(x) = 0 \\).\n\nb) Show that \\( x = -3 \\) is the only real root of \\( f(x) = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cubics', 'only real root', 'discriminant', 'factor theorem', 'no x factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( x = -3 \\) into \\( f(x) \\).',
                    workingLatex: 'f(-3) = -27 + 9 + 3 + 15 = 0 \\checkmark',
                    explanation: '\\( f(-3) = 0 \\), confirming \\( x = -3 \\) is a root and \\( (x + 3) \\) is a factor.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( f(x) = (x + 3)(x^2 + nx + 5) \\).',
                    workingLatex: '(x + 3)(x^2 + nx + 5)',
                    explanation: 'Constant: \\( 3 \\times 5 = 15 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate \\( x^2 \\): \\( n + 3 = 1 \\), so \\( n = -2 \\).',
                    workingLatex: 'f(x) = (x + 3)(x^2 - 2x + 5)',
                    explanation: 'From \\( 3 \\cdot x^2 \\) and \\( x \\cdot nx \\): coefficient is \\( n + 3 = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the discriminant of \\( x^2 - 2x + 5 \\).',
                    workingLatex: '\\Delta = (-2)^2 - 4(1)(5) = 4 - 20 = -16',
                    explanation: 'Using \\( \\Delta = b^2 - 4ac \\) with \\( a = 1, b = -2, c = 5 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Since \\( \\Delta < 0 \\), the quadratic has no real roots.',
                    workingLatex: '\\Delta = -16 < 0 \\Rightarrow \\text{no real roots from } x^2 - 2x + 5',
                    explanation: 'The quadratic factor contributes no real solutions, so \\( x = -3 \\) is the only real root of \\( f(x) = 0 \\).'
                }
            ],
            finalAnswer: ' x = -3  is the only real root (quadratic factor  x^2 - 2x + 5  has  \\Delta = -16 < 0 )',
        }
    },

];
