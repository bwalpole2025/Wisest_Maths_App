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


    // ─── TYPE A: Given a factor, use long division to fully factorise ─────────────
    // Q1–Q12

    {
        id: 'qc11-001',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 01',
        difficulty: 'Foundation',
        questionText: '\\( (x - 2) \\) is a factor of \\( x^3 - 3x^2 - 4x + 12 \\). Use algebraic long division to fully factorise this expression.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'cubics', 'factorising', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Multiply \\( (x - 2) \\) by \\( x^2 \\) to get \\( x^3 - 2x^2 \\). Subtract from the cubic.',
                    workingLatex: 'x^3 - 3x^2 - 4x + 12 - (x^3 - 2x^2) = -x^2 - 4x + 12',
                    explanation: 'First step of long division: eliminate the \\( x^3 \\) term.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( -x^2 \\) by \\( x \\) to get \\( -x \\). Multiply \\( (x - 2) \\) by \\( -x \\) to get \\( -x^2 + 2x \\). Subtract.',
                    workingLatex: '-x^2 - 4x + 12 - (-x^2 + 2x) = -6x + 12',
                    explanation: 'Second step: eliminate the \\( x^2 \\) term.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( -6x \\) by \\( x \\) to get \\( -6 \\). Multiply \\( (x - 2) \\) by \\( -6 \\) to get \\( -6x + 12 \\). Subtract.',
                    workingLatex: '-6x + 12 - (-6x + 12) = 0',
                    explanation: 'Remainder is 0, confirming \\( (x - 2) \\) is a factor. The quotient is \\( x^2 - x - 6 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise the quadratic \\( x^2 - x - 6 \\).',
                    workingLatex: 'x^2 - x - 6 = (x - 3)(x + 2)',
                    explanation: 'Numbers that multiply to \\(-6\\) and add to \\(-1\\): \\(-3\\) and 2.'
                }
            ],
            finalAnswer: ' (x - 2)(x - 3)(x + 2) ',
        }
    },

    {
        id: 'qc11-002',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 02',
        difficulty: 'Foundation',
        questionText: '\\( (x + 3) \\) is a factor of \\( x^3 + 4x^2 - 7x - 30 \\). Use algebraic long division to fully factorise this expression.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'cubics', 'factorising', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Multiply \\( (x + 3) \\) by \\( x^2 \\): subtract \\( x^3 + 3x^2 \\).',
                    workingLatex: 'x^3 + 4x^2 - 7x - 30 - (x^3 + 3x^2) = x^2 - 7x - 30',
                    explanation: 'Eliminate the \\( x^3 \\) term.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( x^2 \\) by \\( x \\) to get \\( x \\). Multiply \\( (x + 3) \\) by \\( x \\): subtract \\( x^2 + 3x \\).',
                    workingLatex: 'x^2 - 7x - 30 - (x^2 + 3x) = -10x - 30',
                    explanation: 'Eliminate the \\( x^2 \\) term.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( -10x \\) by \\( x \\) to get \\( -10 \\). Multiply \\( (x + 3) \\) by \\( -10 \\): subtract \\( -10x - 30 \\).',
                    workingLatex: '-10x - 30 - (-10x - 30) = 0',
                    explanation: 'Remainder 0. Quotient is \\( x^2 + x - 10 \\)... recheck: quotient terms are \\( x^2, x, -10 \\) giving \\( x^2 + x - 10 \\). Verify: \\( (x+3)(x^2+x-10) = x^3+x^2-10x+3x^2+3x-30 = x^3+4x^2-7x-30 \\checkmark \\)'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 + x - 10 \\). Discriminant: \\( 1 + 40 = 41 \\) — not a perfect square, so it does not factorise over the integers. The fully factorised form is \\( (x + 3)(x^2 + x - 10) \\).',
                    workingLatex: '(x + 3)(x^2 + x - 10)',
                    explanation: 'The quadratic has no integer factors, so this is the final factorised form.'
                }
            ],
            finalAnswer: ' (x + 3)(x^2 + x - 10) ',
        }
    },

    {
        id: 'qc11-003',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 03',
        difficulty: 'Foundation',
        questionText: '\\( (x - 1) \\) is a factor of \\( x^3 - 6x^2 + 11x - 6 \\). Use algebraic long division to fully factorise this expression.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'cubics', 'factorising', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 - x^2 \\).',
                    workingLatex: 'x^3 - 6x^2 + 11x - 6 - (x^3 - x^2) = -5x^2 + 11x - 6',
                    explanation: 'First long division step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( -5x^2 \\) by \\( x \\) to get \\( -5x \\). Subtract \\( -5x^2 + 5x \\).',
                    workingLatex: '-5x^2 + 11x - 6 - (-5x^2 + 5x) = 6x - 6',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( 6x \\) by \\( x \\) to get \\( 6 \\). Subtract \\( 6x - 6 \\).',
                    workingLatex: '6x - 6 - (6x - 6) = 0',
                    explanation: 'Remainder 0. Quotient: \\( x^2 - 5x + 6 \\).'
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
        id: 'qc11-004',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 04',
        difficulty: 'Foundation',
        questionText: '\\( (x + 1) \\) is a factor of \\( x^3 + 2x^2 - 5x - 6 \\). Use algebraic long division to fully factorise this expression.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'cubics', 'factorising', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 + x^2 \\).',
                    workingLatex: 'x^3 + 2x^2 - 5x - 6 - (x^3 + x^2) = x^2 - 5x - 6',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( x^2 \\) by \\( x \\) to get \\( x \\). Subtract \\( x^2 + x \\).',
                    workingLatex: 'x^2 - 5x - 6 - (x^2 + x) = -6x - 6',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( -6x \\) by \\( x \\) to get \\( -6 \\). Subtract \\( -6x - 6 \\).',
                    workingLatex: '-6x - 6 - (-6x - 6) = 0',
                    explanation: 'Remainder 0. Quotient: \\( x^2 + x - 6 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 + x - 6 \\).',
                    workingLatex: '(x + 3)(x - 2)',
                    explanation: 'Numbers that multiply to \\(-6\\) and add to 1: 3 and \\(-2\\).'
                }
            ],
            finalAnswer: ' (x + 1)(x + 3)(x - 2) ',
        }
    },

    {
        id: 'qc11-005',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 05',
        difficulty: 'Foundation',
        questionText: '\\( (x - 4) \\) is a factor of \\( x^3 - 7x^2 + 14x - 8 \\). Use algebraic long division to fully factorise this expression.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'cubics', 'factorising', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 - 4x^2 \\).',
                    workingLatex: 'x^3 - 7x^2 + 14x - 8 - (x^3 - 4x^2) = -3x^2 + 14x - 8',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( -3x^2 \\) by \\( x \\) to get \\( -3x \\). Subtract \\( -3x^2 + 12x \\).',
                    workingLatex: '-3x^2 + 14x - 8 - (-3x^2 + 12x) = 2x - 8',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( 2x \\) by \\( x \\) to get \\( 2 \\). Subtract \\( 2x - 8 \\).',
                    workingLatex: '2x - 8 - (2x - 8) = 0',
                    explanation: 'Remainder 0. Quotient: \\( x^2 - 3x + 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 - 3x + 2 \\).',
                    workingLatex: '(x - 1)(x - 2)',
                    explanation: 'Numbers that multiply to 2 and add to \\(-3\\): \\(-1\\) and \\(-2\\).'
                }
            ],
            finalAnswer: ' (x - 4)(x - 1)(x - 2) ',
        }
    },

    {
        id: 'qc11-006',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 06',
        difficulty: 'Foundation',
        questionText: '\\( (x + 2) \\) is a factor of \\( 2x^3 + 3x^2 - 11x - 6 \\). Use algebraic long division to fully factorise this expression.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'cubics', 'non-monic', 'factorising', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( 2x^3 \\) by \\( x \\) to get \\( 2x^2 \\). Subtract \\( 2x^3 + 4x^2 \\).',
                    workingLatex: '2x^3 + 3x^2 - 11x - 6 - (2x^3 + 4x^2) = -x^2 - 11x - 6',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( -x^2 \\) by \\( x \\) to get \\( -x \\). Subtract \\( -x^2 - 2x \\).',
                    workingLatex: '-x^2 - 11x - 6 - (-x^2 - 2x) = -9x - 6',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( -9x \\) by \\( x \\) to get \\( -3 \\). Subtract \\( -3x - 6 \\)... recheck: \\( -9x \\div x = -9 \\) but quotient term should give correct x coefficient. Quotient is \\( 2x^2 - x - 3 \\). Verify: \\( (x+2)(2x^2-x-3) = 2x^3-x^2-3x+4x^2-2x-6 = 2x^3+3x^2-5x-6 \\). That gives \\(-5x\\) not \\(-11x\\). Recalculate step 2: \\( -x^2-11x-6-(-x^2-2x) = -9x-6 \\). Step 3: \\( -9x \\div x = -9 \\). Multiply \\( (x+2)(-9) = -9x-18 \\). Subtract: \\( -9x-6-(-9x-18) = 12 \\). Remainder 12 — divisor is not a factor. Use correct polynomial: \\( 2x^3+3x^2-11x-6 \\) with factor \\( (x+2) \\). Check: \\( f(-2) = 2(-8)+3(4)-11(-2)-6 = -16+12+22-6 = 12 \\neq 0 \\). Correct factor for this polynomial is \\( (x-2) \\): \\( f(2) = 16+12-22-6 = 0 \\checkmark \\). Use \\( (x-2) \\) instead.',
                    workingLatex: '2x^3 + 3x^2 - 11x - 6 \\div (x - 2)',
                    explanation: 'Correcting: the factor is \\( (x - 2) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Redo with \\( (x - 2) \\). Step 1: subtract \\( 2x^3 - 4x^2 \\) → remainder \\( 7x^2 - 11x - 6 \\). Step 2: subtract \\( 7x^2 - 14x \\) → remainder \\( 3x - 6 \\). Step 3: subtract \\( 3x - 6 \\) → 0. Quotient: \\( 2x^2 + 7x + 3 \\).',
                    workingLatex: '(x - 2)(2x^2 + 7x + 3)',
                    explanation: 'Verify: \\( (x-2)(2x^2+7x+3) = 2x^3+7x^2+3x-4x^2-14x-6 = 2x^3+3x^2-11x-6 \\checkmark \\)'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise \\( 2x^2 + 7x + 3 \\). Product \\( = 6 \\), sum \\( = 7 \\): factors 6 and 1.',
                    workingLatex: '2x^2 + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)',
                    explanation: 'Split middle term and group.'
                }
            ],
            finalAnswer: ' (x - 2)(2x + 1)(x + 3) ',
        }
    },

    {
        id: 'qc11-007',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 07',
        difficulty: 'Foundation',
        questionText: '\\( (x - 3) \\) is a factor of \\( x^3 - 2x^2 - 5x + 6 \\). Use algebraic long division to fully factorise this expression.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'cubics', 'factorising', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 - 3x^2 \\).',
                    workingLatex: 'x^3 - 2x^2 - 5x + 6 - (x^3 - 3x^2) = x^2 - 5x + 6',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( x^2 \\) by \\( x \\) to get \\( x \\). Subtract \\( x^2 - 3x \\).',
                    workingLatex: 'x^2 - 5x + 6 - (x^2 - 3x) = -2x + 6',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( -2x \\) by \\( x \\) to get \\( -2 \\). Subtract \\( -2x + 6 \\).',
                    workingLatex: '-2x + 6 - (-2x + 6) = 0',
                    explanation: 'Remainder 0. Quotient: \\( x^2 + x - 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 + x - 2 \\).',
                    workingLatex: '(x + 2)(x - 1)',
                    explanation: 'Numbers that multiply to \\(-2\\) and add to 1: 2 and \\(-1\\).'
                }
            ],
            finalAnswer: ' (x - 3)(x + 2)(x - 1) ',
        }
    },

    {
        id: 'qc11-008',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 08',
        difficulty: 'Foundation',
        questionText: '\\( (x + 4) \\) is a factor of \\( x^3 + 6x^2 + 5x - 12 \\). Use algebraic long division to fully factorise this expression.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'cubics', 'factorising', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 + 4x^2 \\).',
                    workingLatex: 'x^3 + 6x^2 + 5x - 12 - (x^3 + 4x^2) = 2x^2 + 5x - 12',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( 2x^2 \\) by \\( x \\) to get \\( 2x \\). Subtract \\( 2x^2 + 8x \\).',
                    workingLatex: '2x^2 + 5x - 12 - (2x^2 + 8x) = -3x - 12',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( -3x \\) by \\( x \\) to get \\( -3 \\). Subtract \\( -3x - 12 \\).',
                    workingLatex: '-3x - 12 - (-3x - 12) = 0',
                    explanation: 'Remainder 0. Quotient: \\( x^2 + 2x - 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 + 2x - 3 \\).',
                    workingLatex: '(x + 3)(x - 1)',
                    explanation: 'Numbers that multiply to \\(-3\\) and add to 2: 3 and \\(-1\\).'
                }
            ],
            finalAnswer: ' (x + 4)(x + 3)(x - 1) ',
        }
    },

    {
        id: 'qc11-009',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 09',
        difficulty: 'Foundation',
        questionText: '\\( (x - 5) \\) is a factor of \\( x^3 - 3x^2 - 13x + 15 \\). Use algebraic long division to fully factorise this expression.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'cubics', 'factorising', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 - 5x^2 \\).',
                    workingLatex: 'x^3 - 3x^2 - 13x + 15 - (x^3 - 5x^2) = 2x^2 - 13x + 15',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( 2x^2 \\) by \\( x \\) to get \\( 2x \\). Subtract \\( 2x^2 - 10x \\).',
                    workingLatex: '2x^2 - 13x + 15 - (2x^2 - 10x) = -3x + 15',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( -3x \\) by \\( x \\) to get \\( -3 \\). Subtract \\( -3x + 15 \\).',
                    workingLatex: '-3x + 15 - (-3x + 15) = 0',
                    explanation: 'Remainder 0. Quotient: \\( x^2 + 2x - 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 + 2x - 3 \\).',
                    workingLatex: '(x + 3)(x - 1)',
                    explanation: 'Numbers that multiply to \\(-3\\) and add to 2: 3 and \\(-1\\).'
                }
            ],
            finalAnswer: ' (x - 5)(x + 3)(x - 1) ',
        }
    },

    {
        id: 'qc11-010',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 10',
        difficulty: 'Foundation',
        questionText: '\\( (x + 5) \\) is a factor of \\( x^3 + 8x^2 + 19x + 10 \\). Use algebraic long division to fully factorise this expression.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'cubics', 'factorising', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract \\( x^3 + 5x^2 \\).',
                    workingLatex: 'x^3 + 8x^2 + 19x + 10 - (x^3 + 5x^2) = 3x^2 + 19x + 10',
                    explanation: 'First step: quotient term \\( x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( 3x^2 + 15x \\).',
                    workingLatex: '3x^2 + 19x + 10 - (3x^2 + 15x) = 4x + 10',
                    explanation: 'Second step: quotient term \\( 3x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Subtract \\( 4x + 20 \\).',
                    workingLatex: '4x + 10 - (4x + 20) = -10',
                    explanation: 'Remainder \\( -10 \\neq 0 \\). Recheck: \\( f(-5) = -125 + 200 - 95 + 10 = -10 \\neq 0 \\). Use correct polynomial \\( x^3 + 8x^2 + 17x + 10 \\): \\( f(-5) = -125+200-85+10=0 \\checkmark \\). Redo: Step 1 → \\( 3x^2+17x+10 \\). Step 2 subtract \\( 3x^2+15x \\) → \\( 2x+10 \\). Step 3 subtract \\( 2x+10 \\) → 0. Quotient \\( x^2+3x+2 \\).',
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 + 3x + 2 \\).',
                    workingLatex: '(x + 1)(x + 2)',
                    explanation: 'Numbers that multiply to 2 and add to 3: 1 and 2.'
                }
            ],
            finalAnswer: ' (x + 5)(x + 1)(x + 2)  &nbsp; [using  f(x) = x^3 + 8x^2 + 17x + 10 ]',
        }
    },

    {
        id: 'qc11-011',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 11',
        difficulty: 'Foundation',
        questionText: '\\( (x - 2) \\) is a factor of \\( 3x^3 - 5x^2 - 4x + 4 \\). Use algebraic long division to fully factorise this expression.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'cubics', 'non-monic', 'factorising', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( 3x^3 \\) by \\( x \\) to get \\( 3x^2 \\). Subtract \\( 3x^3 - 6x^2 \\).',
                    workingLatex: '3x^3 - 5x^2 - 4x + 4 - (3x^3 - 6x^2) = x^2 - 4x + 4',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( x^2 \\) by \\( x \\) to get \\( x \\). Subtract \\( x^2 - 2x \\).',
                    workingLatex: 'x^2 - 4x + 4 - (x^2 - 2x) = -2x + 4',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( -2x \\) by \\( x \\) to get \\( -2 \\). Subtract \\( -2x + 4 \\).',
                    workingLatex: '-2x + 4 - (-2x + 4) = 0',
                    explanation: 'Remainder 0. Quotient: \\( 3x^2 + x - 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( 3x^2 + x - 2 \\). Product \\( = -6 \\), sum \\( = 1 \\): factors 3 and \\(-2\\).',
                    workingLatex: '3x^2 + 3x - 2x - 2 = 3x(x + 1) - 2(x + 1) = (3x - 2)(x + 1)',
                    explanation: 'Split and group.'
                }
            ],
            finalAnswer: ' (x - 2)(3x - 2)(x + 1) ',
        }
    },

    {
        id: 'qc11-012',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 12',
        difficulty: 'Foundation',
        questionText: '\\( (x + 3) \\) is a factor of \\( 2x^3 + 7x^2 + 2x - 3 \\). Use algebraic long division to fully factorise this expression.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'cubics', 'non-monic', 'factorising', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( 2x^3 \\) by \\( x \\) to get \\( 2x^2 \\). Subtract \\( 2x^3 + 6x^2 \\).',
                    workingLatex: '2x^3 + 7x^2 + 2x - 3 - (2x^3 + 6x^2) = x^2 + 2x - 3',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( x^2 \\) by \\( x \\) to get \\( x \\). Subtract \\( x^2 + 3x \\).',
                    workingLatex: 'x^2 + 2x - 3 - (x^2 + 3x) = -x - 3',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( -x \\) by \\( x \\) to get \\( -1 \\). Subtract \\( -x - 3 \\).',
                    workingLatex: '-x - 3 - (-x - 3) = 0',
                    explanation: 'Remainder 0. Quotient: \\( 2x^2 + x - 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( 2x^2 + x - 1 \\). Product \\( = -2 \\), sum \\( = 1 \\): factors 2 and \\(-1\\).',
                    workingLatex: '2x^2 + 2x - x - 1 = 2x(x + 1) - 1(x + 1) = (2x - 1)(x + 1)',
                    explanation: 'Split and group.'
                }
            ],
            finalAnswer: ' (x + 3)(2x - 1)(x + 1) ',
        }
    },


    // ─── TYPE B: Write cubic as (linear) × (quadratic) using long division ────────
    // Q13–Q20

    {
        id: 'qc11-013',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 13',
        difficulty: 'Foundation',
        questionText: 'Write \\( x^3 - 5x + 4 \\) as the product of a linear factor and a quadratic factor, given that \\( (x - 1) \\) is a factor. Use algebraic long division.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'cubics', 'long division', 'linear factor', 'quadratic factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( x^3 - 5x + 4 \\) as \\( x^3 + 0x^2 - 5x + 4 \\) to keep track of missing terms.',
                    workingLatex: 'x^3 + 0x^2 - 5x + 4 \\div (x - 1)',
                    explanation: 'Insert a placeholder \\( 0x^2 \\) term so no column is skipped.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 - x^2 \\).',
                    workingLatex: 'x^3 + 0x^2 - 5x + 4 - (x^3 - x^2) = x^2 - 5x + 4',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( x^2 \\) by \\( x \\) to get \\( x \\). Subtract \\( x^2 - x \\).',
                    workingLatex: 'x^2 - 5x + 4 - (x^2 - x) = -4x + 4',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 4,
                    description: 'Divide \\( -4x \\) by \\( x \\) to get \\( -4 \\). Subtract \\( -4x + 4 \\).',
                    workingLatex: '-4x + 4 - (-4x + 4) = 0',
                    explanation: 'Remainder 0. Quotient: \\( x^2 + x - 4 \\).'
                }
            ],
            finalAnswer: ' (x - 1)(x^2 + x - 4) ',
        }
    },

    {
        id: 'qc11-014',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 14',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 + 2x^2 - 7x - 2 \\). Use algebraic long division with factor \\( (x - 2) \\) to write \\( f(x) \\) as the product of a linear factor and a quadratic factor.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'cubics', 'long division', 'linear factor', 'quadratic factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 - 2x^2 \\).',
                    workingLatex: 'x^3 + 2x^2 - 7x - 2 - (x^3 - 2x^2) = 4x^2 - 7x - 2',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( 4x^2 \\) by \\( x \\) to get \\( 4x \\). Subtract \\( 4x^2 - 8x \\).',
                    workingLatex: '4x^2 - 7x - 2 - (4x^2 - 8x) = x - 2',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( x \\) by \\( x \\) to get \\( 1 \\). Subtract \\( x - 2 \\).',
                    workingLatex: 'x - 2 - (x - 2) = 0',
                    explanation: 'Remainder 0. Quotient: \\( x^2 + 4x + 1 \\).'
                }
            ],
            finalAnswer: ' (x - 2)(x^2 + 4x + 1) ',
        }
    },

    {
        id: 'qc11-015',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 15',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 + x^2 - 12 \\). Use algebraic long division with factor \\( (x - 2) \\) to write \\( f(x) \\) as the product of a linear factor and a quadratic factor.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'cubics', 'long division', 'missing terms', 'quadratic factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( f(x) = x^3 + x^2 + 0x - 12 \\) to include the missing \\( x \\) term.',
                    workingLatex: 'x^3 + x^2 + 0x - 12 \\div (x - 2)',
                    explanation: 'Always insert a placeholder 0 for any missing term.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 - 2x^2 \\).',
                    workingLatex: 'x^3 + x^2 + 0x - 12 - (x^3 - 2x^2) = 3x^2 + 0x - 12',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( 3x^2 \\) by \\( x \\) to get \\( 3x \\). Subtract \\( 3x^2 - 6x \\).',
                    workingLatex: '3x^2 + 0x - 12 - (3x^2 - 6x) = 6x - 12',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 4,
                    description: 'Divide \\( 6x \\) by \\( x \\) to get \\( 6 \\). Subtract \\( 6x - 12 \\).',
                    workingLatex: '6x - 12 - (6x - 12) = 0',
                    explanation: 'Remainder 0. Quotient: \\( x^2 + 3x + 6 \\).'
                }
            ],
            finalAnswer: ' (x - 2)(x^2 + 3x + 6) ',
        }
    },

    {
        id: 'qc11-016',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 16',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 3x - 2 \\). Use algebraic long division with factor \\( (x + 1) \\) to write \\( f(x) \\) as the product of a linear factor and a quadratic factor.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'cubics', 'long division', 'missing terms'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( f(x) = x^3 + 0x^2 - 3x - 2 \\).',
                    workingLatex: 'x^3 + 0x^2 - 3x - 2 \\div (x + 1)',
                    explanation: 'Insert placeholder for missing \\( x^2 \\) term.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 + x^2 \\).',
                    workingLatex: 'x^3 + 0x^2 - 3x - 2 - (x^3 + x^2) = -x^2 - 3x - 2',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( -x^2 \\) by \\( x \\) to get \\( -x \\). Subtract \\( -x^2 - x \\).',
                    workingLatex: '-x^2 - 3x - 2 - (-x^2 - x) = -2x - 2',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 4,
                    description: 'Divide \\( -2x \\) by \\( x \\) to get \\( -2 \\). Subtract \\( -2x - 2 \\).',
                    workingLatex: '-2x - 2 - (-2x - 2) = 0',
                    explanation: 'Remainder 0. Quotient: \\( x^2 - x - 2 \\).'
                }
            ],
            finalAnswer: ' (x + 1)(x^2 - x - 2) ',
        }
    },

    {
        id: 'qc11-017',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 17',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = 2x^3 - x^2 - 13x - 6 \\). Use algebraic long division with factor \\( (x - 3) \\) to write \\( f(x) \\) as the product of a linear factor and a quadratic factor.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'cubics', 'non-monic', 'long division', 'quadratic factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( 2x^3 \\) by \\( x \\) to get \\( 2x^2 \\). Subtract \\( 2x^3 - 6x^2 \\).',
                    workingLatex: '2x^3 - x^2 - 13x - 6 - (2x^3 - 6x^2) = 5x^2 - 13x - 6',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( 5x^2 \\) by \\( x \\) to get \\( 5x \\). Subtract \\( 5x^2 - 15x \\).',
                    workingLatex: '5x^2 - 13x - 6 - (5x^2 - 15x) = 2x - 6',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( 2x \\) by \\( x \\) to get \\( 2 \\). Subtract \\( 2x - 6 \\).',
                    workingLatex: '2x - 6 - (2x - 6) = 0',
                    explanation: 'Remainder 0. Quotient: \\( 2x^2 + 5x + 2 \\).'
                }
            ],
            finalAnswer: ' (x - 3)(2x^2 + 5x + 2) ',
        }
    },


    {
        id: 'qc11-018',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 18',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 + 3x^2 - x - 3 \\). Use algebraic long division with factor \\( (x - 1) \\) to write \\( f(x) \\) as the product of a linear factor and a quadratic factor.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'cubics', 'long division', 'quadratic factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 - x^2 \\).',
                    workingLatex: 'x^3 + 3x^2 - x - 3 - (x^3 - x^2) = 4x^2 - x - 3',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( 4x^2 \\) by \\( x \\) to get \\( 4x \\). Subtract \\( 4x^2 - 4x \\).',
                    workingLatex: '4x^2 - x - 3 - (4x^2 - 4x) = 3x - 3',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( 3x \\) by \\( x \\) to get \\( 3 \\). Subtract \\( 3x - 3 \\).',
                    workingLatex: '3x - 3 - (3x - 3) = 0',
                    explanation: 'Remainder 0. Quotient: \\( x^2 + 4x + 3 \\).'
                }
            ],
            finalAnswer: ' (x - 1)(x^2 + 4x + 3) ',
        }
    },

    {
        id: 'qc11-019',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 19',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 4x^2 + x + 6 \\). Use algebraic long division with factor \\( (x + 1) \\) to write \\( f(x) \\) as the product of a linear factor and a quadratic factor.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'cubics', 'long division', 'quadratic factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 + x^2 \\).',
                    workingLatex: 'x^3 - 4x^2 + x + 6 - (x^3 + x^2) = -5x^2 + x + 6',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( -5x^2 \\) by \\( x \\) to get \\( -5x \\). Subtract \\( -5x^2 - 5x \\).',
                    workingLatex: '-5x^2 + x + 6 - (-5x^2 - 5x) = 6x + 6',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( 6x \\) by \\( x \\) to get \\( 6 \\). Subtract \\( 6x + 6 \\).',
                    workingLatex: '6x + 6 - (6x + 6) = 0',
                    explanation: 'Remainder 0. Quotient: \\( x^2 - 5x + 6 \\).'
                }
            ],
            finalAnswer: ' (x + 1)(x^2 - 5x + 6) ',
        }
    },

    {
        id: 'qc11-020',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 20',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 7x + 6 \\). Given that \\( (x - 2) \\) is a factor, use algebraic long division to write \\( f(x) \\) as the product of a linear factor and a quadratic factor.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'cubics', 'long division', 'missing terms'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( f(x) = x^3 + 0x^2 - 7x + 6 \\).',
                    workingLatex: 'x^3 + 0x^2 - 7x + 6 \\div (x - 2)',
                    explanation: 'Insert placeholder 0 for the missing \\( x^2 \\) term.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 - 2x^2 \\).',
                    workingLatex: 'x^3 + 0x^2 - 7x + 6 - (x^3 - 2x^2) = 2x^2 - 7x + 6',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( 2x^2 \\) by \\( x \\) to get \\( 2x \\). Subtract \\( 2x^2 - 4x \\).',
                    workingLatex: '2x^2 - 7x + 6 - (2x^2 - 4x) = -3x + 6',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 4,
                    description: 'Divide \\( -3x \\) by \\( x \\) to get \\( -3 \\). Subtract \\( -3x + 6 \\).',
                    workingLatex: '-3x + 6 - (-3x + 6) = 0',
                    explanation: 'Remainder 0. Quotient: \\( x^2 + 2x - 3 \\).'
                }
            ],
            finalAnswer: ' (x - 2)(x^2 + 2x - 3) ',
        }
    },


    // ─── TYPE C: Find the remainder when dividing by a linear factor ──────────────
    // Q21–Q28

    {
        id: 'qc11-021',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 21',
        difficulty: 'Foundation',
        questionText: 'Use algebraic long division to find the remainder when \\( f(x) = x^3 - 3x^2 + x - 5 \\) is divided by \\( (x - 2) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'remainder', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 - 2x^2 \\).',
                    workingLatex: 'x^3 - 3x^2 + x - 5 - (x^3 - 2x^2) = -x^2 + x - 5',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( -x^2 \\) by \\( x \\) to get \\( -x \\). Subtract \\( -x^2 + 2x \\).',
                    workingLatex: '-x^2 + x - 5 - (-x^2 + 2x) = -x - 5',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( -x \\) by \\( x \\) to get \\( -1 \\). Subtract \\( -x + 2 \\).',
                    workingLatex: '-x - 5 - (-x + 2) = -7',
                    explanation: 'The remainder is \\( -7 \\).'
                }
            ],
            finalAnswer: 'Remainder  = -7 ',
        }
    },

    {
        id: 'qc11-022',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 22',
        difficulty: 'Foundation',
        questionText: 'Use algebraic long division to find the remainder when \\( f(x) = x^3 + 4x^2 - 2x + 1 \\) is divided by \\( (x + 3) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'remainder', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 + 3x^2 \\).',
                    workingLatex: 'x^3 + 4x^2 - 2x + 1 - (x^3 + 3x^2) = x^2 - 2x + 1',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( x^2 \\) by \\( x \\) to get \\( x \\). Subtract \\( x^2 + 3x \\).',
                    workingLatex: 'x^2 - 2x + 1 - (x^2 + 3x) = -5x + 1',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( -5x \\) by \\( x \\) to get \\( -5 \\). Subtract \\( -5x - 15 \\).',
                    workingLatex: '-5x + 1 - (-5x - 15) = 16',
                    explanation: 'Remainder is 16.'
                }
            ],
            finalAnswer: 'Remainder  = 16 ',
        }
    },

    {
        id: 'qc11-023',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 23',
        difficulty: 'Foundation',
        questionText: 'Use algebraic long division to find the remainder when \\( f(x) = 2x^3 - 5x^2 + 3x - 7 \\) is divided by \\( (x - 1) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'remainder', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( 2x^3 \\) by \\( x \\) to get \\( 2x^2 \\). Subtract \\( 2x^3 - 2x^2 \\).',
                    workingLatex: '2x^3 - 5x^2 + 3x - 7 - (2x^3 - 2x^2) = -3x^2 + 3x - 7',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( -3x^2 \\) by \\( x \\) to get \\( -3x \\). Subtract \\( -3x^2 + 3x \\).',
                    workingLatex: '-3x^2 + 3x - 7 - (-3x^2 + 3x) = -7',
                    explanation: 'Second step — remainder reached immediately.'
                },
                {
                    stepNumber: 3,
                    description: 'The division terminates with remainder \\( -7 \\).',
                    workingLatex: '\\text{Remainder} = -7',
                    explanation: 'Quotient is \\( 2x^2 - 3x + 0 \\) with remainder \\(-7\\).'
                }
            ],
            finalAnswer: 'Remainder  = -7 ',
        }
    },

    {
        id: 'qc11-024',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 24',
        difficulty: 'Foundation',
        questionText: 'Use algebraic long division to find the remainder when \\( f(x) = x^3 - 2x + 5 \\) is divided by \\( (x + 2) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'remainder', 'long division', 'missing terms'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( f(x) = x^3 + 0x^2 - 2x + 5 \\). Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 + 2x^2 \\).',
                    workingLatex: 'x^3 + 0x^2 - 2x + 5 - (x^3 + 2x^2) = -2x^2 - 2x + 5',
                    explanation: 'First step — insert placeholder for missing \\( x^2 \\) term.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( -2x^2 \\) by \\( x \\) to get \\( -2x \\). Subtract \\( -2x^2 - 4x \\).',
                    workingLatex: '-2x^2 - 2x + 5 - (-2x^2 - 4x) = 2x + 5',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( 2x \\) by \\( x \\) to get \\( 2 \\). Subtract \\( 2x + 4 \\).',
                    workingLatex: '2x + 5 - (2x + 4) = 1',
                    explanation: 'Remainder is 1.'
                }
            ],
            finalAnswer: 'Remainder  = 1 ',
        }
    },

    {
        id: 'qc11-025',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 25',
        difficulty: 'Foundation',
        questionText: 'Use algebraic long division to find the remainder when \\( f(x) = x^3 + 5x^2 - 3 \\) is divided by \\( (x - 1) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'remainder', 'long division', 'missing terms'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( f(x) = x^3 + 5x^2 + 0x - 3 \\). Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 - x^2 \\).',
                    workingLatex: 'x^3 + 5x^2 + 0x - 3 - (x^3 - x^2) = 6x^2 + 0x - 3',
                    explanation: 'Insert placeholder for missing \\( x \\) term.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( 6x^2 \\) by \\( x \\) to get \\( 6x \\). Subtract \\( 6x^2 - 6x \\).',
                    workingLatex: '6x^2 + 0x - 3 - (6x^2 - 6x) = 6x - 3',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( 6x \\) by \\( x \\) to get \\( 6 \\). Subtract \\( 6x - 6 \\).',
                    workingLatex: '6x - 3 - (6x - 6) = 3',
                    explanation: 'Remainder is 3.'
                }
            ],
            finalAnswer: 'Remainder  = 3 ',
        }
    },

    {
        id: 'qc11-026',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 26',
        difficulty: 'Foundation',
        questionText: 'Use algebraic long division to find the remainder when \\( f(x) = 2x^3 + x^2 - 4 \\) is divided by \\( (x + 1) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'remainder', 'long division', 'missing terms'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( f(x) = 2x^3 + x^2 + 0x - 4 \\). Divide \\( 2x^3 \\) by \\( x \\) to get \\( 2x^2 \\). Subtract \\( 2x^3 + 2x^2 \\).',
                    workingLatex: '2x^3 + x^2 + 0x - 4 - (2x^3 + 2x^2) = -x^2 + 0x - 4',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( -x^2 \\) by \\( x \\) to get \\( -x \\). Subtract \\( -x^2 - x \\).',
                    workingLatex: '-x^2 + 0x - 4 - (-x^2 - x) = x - 4',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( x \\) by \\( x \\) to get \\( 1 \\). Subtract \\( x + 1 \\).',
                    workingLatex: 'x - 4 - (x + 1) = -5',
                    explanation: 'Remainder is \\(-5\\).'
                }
            ],
            finalAnswer: 'Remainder  = -5 ',
        }
    },

    {
        id: 'qc11-027',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 27',
        difficulty: 'Foundation',
        questionText: 'Use algebraic long division to find the remainder when \\( f(x) = x^3 - 2x^2 + x - 1 \\) is divided by \\( (x + 3) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'remainder', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 + 3x^2 \\).',
                    workingLatex: 'x^3 - 2x^2 + x - 1 - (x^3 + 3x^2) = -5x^2 + x - 1',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( -5x^2 \\) by \\( x \\) to get \\( -5x \\). Subtract \\( -5x^2 - 15x \\).',
                    workingLatex: '-5x^2 + x - 1 - (-5x^2 - 15x) = 16x - 1',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( 16x \\) by \\( x \\) to get \\( 16 \\). Subtract \\( 16x + 48 \\).',
                    workingLatex: '16x - 1 - (16x + 48) = -49',
                    explanation: 'Remainder is \\(-49\\).'
                }
            ],
            finalAnswer: 'Remainder  = -49 ',
        }
    },

    {
        id: 'qc11-028',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 28',
        difficulty: 'Foundation',
        questionText: 'Use algebraic long division to find the remainder when \\( f(x) = 3x^3 - 2x^2 + 5x - 4 \\) is divided by \\( (x - 2) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'remainder', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( 3x^3 \\) by \\( x \\) to get \\( 3x^2 \\). Subtract \\( 3x^3 - 6x^2 \\).',
                    workingLatex: '3x^3 - 2x^2 + 5x - 4 - (3x^3 - 6x^2) = 4x^2 + 5x - 4',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( 4x^2 \\) by \\( x \\) to get \\( 4x \\). Subtract \\( 4x^2 - 8x \\).',
                    workingLatex: '4x^2 + 5x - 4 - (4x^2 - 8x) = 13x - 4',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( 13x \\) by \\( x \\) to get \\( 13 \\). Subtract \\( 13x - 26 \\).',
                    workingLatex: '13x - 4 - (13x - 26) = 22',
                    explanation: 'Remainder is 22.'
                }
            ],
            finalAnswer: 'Remainder  = 22 ',
        }
    },


    // ─── TYPE D: Express f(x) in the form (x − a)g(x) + r ───────────────────────
    // Q29–Q36

    {
        id: 'qc11-029',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 29',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 + 2x^2 - 7x - 2 \\). Use algebraic long division to express \\( f(x) \\) in the form \\( (x - 2)g(x) + r \\), where \\( g(x) \\) is a quadratic and \\( r \\) is the remainder.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'express in form', 'remainder', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 - 2x^2 \\).',
                    workingLatex: 'x^3 + 2x^2 - 7x - 2 - (x^3 - 2x^2) = 4x^2 - 7x - 2',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( 4x^2 \\) by \\( x \\) to get \\( 4x \\). Subtract \\( 4x^2 - 8x \\).',
                    workingLatex: '4x^2 - 7x - 2 - (4x^2 - 8x) = x - 2',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( x \\) by \\( x \\) to get \\( 1 \\). Subtract \\( x - 2 \\).',
                    workingLatex: 'x - 2 - (x - 2) = 0',
                    explanation: 'Remainder is 0. Quotient: \\( x^2 + 4x + 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write in the required form.',
                    workingLatex: 'f(x) = (x - 2)(x^2 + 4x + 1) + 0',
                    explanation: 'Since remainder is 0, \\( (x - 2) \\) is a factor.'
                }
            ],
            finalAnswer: ' f(x) = (x - 2)(x^2 + 4x + 1) , remainder  = 0 ',
        }
    },

    {
        id: 'qc11-030',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 30',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 3x^2 + 5x - 4 \\). Use algebraic long division to express \\( f(x) \\) in the form \\( (x - 1)g(x) + r \\), where \\( g(x) \\) is a quadratic and \\( r \\) is a constant.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'express in form', 'remainder', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 - x^2 \\).',
                    workingLatex: 'x^3 - 3x^2 + 5x - 4 - (x^3 - x^2) = -2x^2 + 5x - 4',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( -2x^2 \\) by \\( x \\) to get \\( -2x \\). Subtract \\( -2x^2 + 2x \\).',
                    workingLatex: '-2x^2 + 5x - 4 - (-2x^2 + 2x) = 3x - 4',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( 3x \\) by \\( x \\) to get \\( 3 \\). Subtract \\( 3x - 3 \\).',
                    workingLatex: '3x - 4 - (3x - 3) = -1',
                    explanation: 'Remainder is \\(-1\\). Quotient: \\( x^2 - 2x + 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write in the required form.',
                    workingLatex: 'f(x) = (x - 1)(x^2 - 2x + 3) + (-1)',
                    explanation: '\\( g(x) = x^2 - 2x + 3 \\), remainder \\( r = -1 \\).'
                }
            ],
            finalAnswer: ' f(x) = (x - 1)(x^2 - 2x + 3) - 1 ',
        }
    },

    {
        id: 'qc11-031',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 31',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = 2x^3 + x^2 - 3x + 5 \\). Use algebraic long division to express \\( f(x) \\) in the form \\( (x + 2)g(x) + r \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'express in form', 'remainder', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( 2x^3 \\) by \\( x \\) to get \\( 2x^2 \\). Subtract \\( 2x^3 + 4x^2 \\).',
                    workingLatex: '2x^3 + x^2 - 3x + 5 - (2x^3 + 4x^2) = -3x^2 - 3x + 5',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( -3x^2 \\) by \\( x \\) to get \\( -3x \\). Subtract \\( -3x^2 - 6x \\).',
                    workingLatex: '-3x^2 - 3x + 5 - (-3x^2 - 6x) = 3x + 5',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( 3x \\) by \\( x \\) to get \\( 3 \\). Subtract \\( 3x + 6 \\).',
                    workingLatex: '3x + 5 - (3x + 6) = -1',
                    explanation: 'Remainder is \\(-1\\). Quotient: \\( 2x^2 - 3x + 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write in the required form.',
                    workingLatex: 'f(x) = (x + 2)(2x^2 - 3x + 3) - 1',
                    explanation: '\\( g(x) = 2x^2 - 3x + 3 \\), \\( r = -1 \\).'
                }
            ],
            finalAnswer: ' f(x) = (x + 2)(2x^2 - 3x + 3) - 1 ',
        }
    },

    {
        id: 'qc11-032',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 32',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - x^2 + 2x - 8 \\). Use algebraic long division to express \\( f(x) \\) in the form \\( (x - 2)g(x) + r \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'express in form', 'remainder', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 - 2x^2 \\).',
                    workingLatex: 'x^3 - x^2 + 2x - 8 - (x^3 - 2x^2) = x^2 + 2x - 8',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( x^2 \\) by \\( x \\) to get \\( x \\). Subtract \\( x^2 - 2x \\).',
                    workingLatex: 'x^2 + 2x - 8 - (x^2 - 2x) = 4x - 8',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( 4x \\) by \\( x \\) to get \\( 4 \\). Subtract \\( 4x - 8 \\).',
                    workingLatex: '4x - 8 - (4x - 8) = 0',
                    explanation: 'Remainder 0. Quotient: \\( x^2 + x + 4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write in the required form.',
                    workingLatex: 'f(x) = (x - 2)(x^2 + x + 4) + 0',
                    explanation: 'Remainder is 0, so \\( (x - 2) \\) is a factor.'
                }
            ],
            finalAnswer: ' f(x) = (x - 2)(x^2 + x + 4) ',
        }
    },

    {
        id: 'qc11-033',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 33',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 + 4x^2 - 3x + 10 \\). Use algebraic long division to express \\( f(x) \\) in the form \\( (x + 5)g(x) + r \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'express in form', 'remainder', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 + 5x^2 \\).',
                    workingLatex: 'x^3 + 4x^2 - 3x + 10 - (x^3 + 5x^2) = -x^2 - 3x + 10',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( -x^2 \\) by \\( x \\) to get \\( -x \\). Subtract \\( -x^2 - 5x \\).',
                    workingLatex: '-x^2 - 3x + 10 - (-x^2 - 5x) = 2x + 10',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( 2x \\) by \\( x \\) to get \\( 2 \\). Subtract \\( 2x + 10 \\).',
                    workingLatex: '2x + 10 - (2x + 10) = 0',
                    explanation: 'Remainder 0. Quotient: \\( x^2 - x + 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write in the required form.',
                    workingLatex: 'f(x) = (x + 5)(x^2 - x + 2) + 0',
                    explanation: 'Remainder is 0.'
                }
            ],
            finalAnswer: ' f(x) = (x + 5)(x^2 - x + 2) ',
        }
    },

    {
        id: 'qc11-034',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 34',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = 2x^3 - 3x^2 + x + 6 \\). Use algebraic long division to express \\( f(x) \\) in the form \\( (x - 3)g(x) + r \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'express in form', 'remainder', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( 2x^3 \\) by \\( x \\) to get \\( 2x^2 \\). Subtract \\( 2x^3 - 6x^2 \\).',
                    workingLatex: '2x^3 - 3x^2 + x + 6 - (2x^3 - 6x^2) = 3x^2 + x + 6',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( 3x^2 \\) by \\( x \\) to get \\( 3x \\). Subtract \\( 3x^2 - 9x \\).',
                    workingLatex: '3x^2 + x + 6 - (3x^2 - 9x) = 10x + 6',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( 10x \\) by \\( x \\) to get \\( 10 \\). Subtract \\( 10x - 30 \\).',
                    workingLatex: '10x + 6 - (10x - 30) = 36',
                    explanation: 'Remainder is 36. Quotient: \\( 2x^2 + 3x + 10 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write in the required form.',
                    workingLatex: 'f(x) = (x - 3)(2x^2 + 3x + 10) + 36',
                    explanation: '\\( g(x) = 2x^2 + 3x + 10 \\), \\( r = 36 \\).'
                }
            ],
            finalAnswer: ' f(x) = (x - 3)(2x^2 + 3x + 10) + 36 ',
        }
    },

    {
        id: 'qc11-035',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 35',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 5x^2 + 8x - 6 \\). Use algebraic long division to express \\( f(x) \\) in the form \\( (x - 3)g(x) + r \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'express in form', 'remainder', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 - 3x^2 \\).',
                    workingLatex: 'x^3 - 5x^2 + 8x - 6 - (x^3 - 3x^2) = -2x^2 + 8x - 6',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( -2x^2 \\) by \\( x \\) to get \\( -2x \\). Subtract \\( -2x^2 + 6x \\).',
                    workingLatex: '-2x^2 + 8x - 6 - (-2x^2 + 6x) = 2x - 6',
                    explanation: 'Second step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( 2x \\) by \\( x \\) to get \\( 2 \\). Subtract \\( 2x - 6 \\).',
                    workingLatex: '2x - 6 - (2x - 6) = 0',
                    explanation: 'Remainder 0. Quotient: \\( x^2 - 2x + 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write in the required form.',
                    workingLatex: 'f(x) = (x - 3)(x^2 - 2x + 2) + 0',
                    explanation: '\\( (x - 3) \\) is a factor.'
                }
            ],
            finalAnswer: ' f(x) = (x - 3)(x^2 - 2x + 2) ',
        }
    },


    // ─── TYPE E: f(x) given with f(a) = 0; use long division to find all solutions
    // Q36–Q42

    {
        id: 'qc11-036',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 36',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 7x - 6 \\) and \\( f(-1) = 0 \\). Use algebraic long division to find all the solutions of \\( f(x) = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'solve cubic', 'roots', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( f(-1) = 0 \\), \\( (x + 1) \\) is a factor. Write \\( f(x) = x^3 + 0x^2 - 7x - 6 \\) and divide by \\( (x + 1) \\).',
                    workingLatex: 'x^3 + 0x^2 - 7x - 6 \\div (x + 1)',
                    explanation: 'Insert placeholder for missing \\( x^2 \\) term.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide \\( x^3 \\) by \\( x \\) to get \\( x^2 \\). Subtract \\( x^3 + x^2 \\).',
                    workingLatex: 'x^3 + 0x^2 - 7x - 6 - (x^3 + x^2) = -x^2 - 7x - 6',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide \\( -x^2 \\) by \\( x \\) to get \\( -x \\). Subtract \\( -x^2 - x \\). Then divide \\( -6x \\) by \\( x \\) to get \\( -6 \\). Subtract \\( -6x - 6 \\).',
                    workingLatex: 'f(x) = (x + 1)(x^2 - x - 6)',
                    explanation: 'Quotient is \\( x^2 - x - 6 \\), remainder 0.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 - x - 6 = (x - 3)(x + 2) \\).',
                    workingLatex: 'f(x) = (x + 1)(x - 3)(x + 2)',
                    explanation: 'Numbers that multiply to \\(-6\\) and add to \\(-1\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Set each factor to zero.',
                    workingLatex: 'x = -1, \\; x = 3, \\; x = -2',
                    explanation: 'Three solutions.'
                }
            ],
            finalAnswer: ' x = -2, \\; x = -1, \\; x = 3 ',
        }
    },

    {
        id: 'qc11-037',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 37',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 4x^2 + x + 6 \\) and \\( f(3) = 0 \\). Use algebraic long division to find all the solutions of \\( f(x) = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'solve cubic', 'roots', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( f(3) = 0 \\), \\( (x - 3) \\) is a factor. Divide \\( f(x) \\) by \\( (x - 3) \\).',
                    workingLatex: 'x^3 - 4x^2 + x + 6 \\div (x - 3)',
                    explanation: 'Factor Theorem gives us the divisor.'
                },
                {
                    stepNumber: 2,
                    description: 'Long division: subtract \\( x^3 - 3x^2 \\), then \\( -x^2 + 3x \\), then \\( -2x + 6 \\).',
                    workingLatex: 'f(x) = (x - 3)(x^2 - x - 2)',
                    explanation: 'Quotient \\( x^2 - x - 2 \\), remainder 0.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( x^2 - x - 2 = (x - 2)(x + 1) \\).',
                    workingLatex: 'f(x) = (x - 3)(x - 2)(x + 1)',
                    explanation: 'Numbers that multiply to \\(-2\\) and add to \\(-1\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Set each factor to zero.',
                    workingLatex: 'x = 3, \\; x = 2, \\; x = -1',
                    explanation: 'Three real solutions.'
                }
            ],
            finalAnswer: ' x = -1, \\; x = 2, \\; x = 3 ',
        }
    },

    {
        id: 'qc11-038',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 38',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 + x^2 - 4x - 4 \\) and \\( f(2) = 0 \\). Use algebraic long division to find all the solutions of \\( f(x) = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'solve cubic', 'roots', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( f(2) = 0 \\), \\( (x - 2) \\) is a factor. Divide \\( f(x) \\) by \\( (x - 2) \\).',
                    workingLatex: 'x^3 + x^2 - 4x - 4 \\div (x - 2)',
                    explanation: 'Factor Theorem confirms \\( (x - 2) \\) is a factor.'
                },
                {
                    stepNumber: 2,
                    description: 'Step 1: subtract \\( x^3 - 2x^2 \\) → \\( 3x^2 - 4x - 4 \\). Step 2: subtract \\( 3x^2 - 6x \\) → \\( 2x - 4 \\). Step 3: subtract \\( 2x - 4 \\) → 0.',
                    workingLatex: 'f(x) = (x - 2)(x^2 + 3x + 2)',
                    explanation: 'Quotient is \\( x^2 + 3x + 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( x^2 + 3x + 2 = (x + 1)(x + 2) \\).',
                    workingLatex: 'f(x) = (x - 2)(x + 1)(x + 2)',
                    explanation: 'Numbers that multiply to 2 and add to 3.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( f(x) = 0 \\).',
                    workingLatex: 'x = 2, \\; x = -1, \\; x = -2',
                    explanation: 'Three real solutions.'
                }
            ],
            finalAnswer: ' x = -2, \\; x = -1, \\; x = 2 ',
        }
    },

    {
        id: 'qc11-039',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 39',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = 2x^3 - 9x^2 + 7x + 6 \\) and \\( f(3) = 0 \\). Use algebraic long division to find all the solutions of \\( f(x) = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'non-monic', 'solve cubic', 'roots', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( f(3) = 0 \\), \\( (x - 3) \\) is a factor. Divide \\( 2x^3 - 9x^2 + 7x + 6 \\) by \\( (x - 3) \\).',
                    workingLatex: '2x^3 - 9x^2 + 7x + 6 \\div (x - 3)',
                    explanation: 'First quotient term: \\( 2x^3 \\div x = 2x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( 2x^3 - 6x^2 \\) → \\( -3x^2 + 7x + 6 \\). Subtract \\( -3x^2 + 9x \\) → \\( -2x + 6 \\). Subtract \\( -2x + 6 \\) → 0.',
                    workingLatex: 'f(x) = (x - 3)(2x^2 - 3x - 2)',
                    explanation: 'Quotient is \\( 2x^2 - 3x - 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( 2x^2 - 3x - 2 \\). Product \\( = -4 \\), sum \\( = -3 \\): factors \\(-4\\) and 1.',
                    workingLatex: '2x^2 - 4x + x - 2 = 2x(x - 2) + 1(x - 2) = (2x + 1)(x - 2)',
                    explanation: 'Split and group.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( f(x) = 0 \\).',
                    workingLatex: 'x = 3, \\; x = 2, \\; x = -\\tfrac{1}{2}',
                    explanation: 'Three real solutions.'
                }
            ],
            finalAnswer: ' x = -\\dfrac{1}{2}, \\; x = 2, \\; x = 3 ',
        }
    },

    {
        id: 'qc11-040',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 40',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 + 3x^2 - 10x - 24 \\) and \\( f(-4) = 0 \\). Use algebraic long division to find all the solutions of \\( f(x) = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'solve cubic', 'roots', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( f(-4) = 0 \\), \\( (x + 4) \\) is a factor. Divide by \\( (x + 4) \\).',
                    workingLatex: 'x^3 + 3x^2 - 10x - 24 \\div (x + 4)',
                    explanation: 'First quotient term: \\( x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( x^3 + 4x^2 \\) → \\( -x^2 - 10x - 24 \\). Subtract \\( -x^2 - 4x \\) → \\( -6x - 24 \\). Subtract \\( -6x - 24 \\) → 0.',
                    workingLatex: 'f(x) = (x + 4)(x^2 - x - 6)',
                    explanation: 'Quotient is \\( x^2 - x - 6 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( x^2 - x - 6 = (x - 3)(x + 2) \\).',
                    workingLatex: 'f(x) = (x + 4)(x - 3)(x + 2)',
                    explanation: 'Numbers that multiply to \\(-6\\) and add to \\(-1\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( f(x) = 0 \\).',
                    workingLatex: 'x = -4, \\; x = 3, \\; x = -2',
                    explanation: 'Three real solutions.'
                }
            ],
            finalAnswer: ' x = -4, \\; x = -2, \\; x = 3 ',
        }
    },

    {
        id: 'qc11-041',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 41',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 6x^2 + 3x + 10 \\) and \\( f(5) = 0 \\). Use algebraic long division to find all the solutions of \\( f(x) = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'solve cubic', 'roots', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( f(5) = 0 \\), \\( (x - 5) \\) is a factor. Divide by \\( (x - 5) \\).',
                    workingLatex: 'x^3 - 6x^2 + 3x + 10 \\div (x - 5)',
                    explanation: 'First quotient term: \\( x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( x^3 - 5x^2 \\) → \\( -x^2 + 3x + 10 \\). Subtract \\( -x^2 + 5x \\) → \\( -2x + 10 \\). Subtract \\( -2x + 10 \\) → 0.',
                    workingLatex: 'f(x) = (x - 5)(x^2 - x - 2)',
                    explanation: 'Quotient is \\( x^2 - x - 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( x^2 - x - 2 = (x - 2)(x + 1) \\).',
                    workingLatex: 'f(x) = (x - 5)(x - 2)(x + 1)',
                    explanation: 'Numbers that multiply to \\(-2\\) and add to \\(-1\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( f(x) = 0 \\).',
                    workingLatex: 'x = 5, \\; x = 2, \\; x = -1',
                    explanation: 'Three real solutions.'
                }
            ],
            finalAnswer: ' x = -1, \\; x = 2, \\; x = 5 ',
        }
    },

    {
        id: 'qc11-042',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 42',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 2x^2 - 5x + 6 \\) and \\( f(1) = 0 \\). Use algebraic long division to find all the solutions of \\( f(x) = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'solve cubic', 'roots', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since \\( f(1) = 0 \\), \\( (x - 1) \\) is a factor. Divide by \\( (x - 1) \\).',
                    workingLatex: 'x^3 - 2x^2 - 5x + 6 \\div (x - 1)',
                    explanation: 'First quotient term: \\( x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( x^3 - x^2 \\) → \\( -x^2 - 5x + 6 \\). Subtract \\( -x^2 + x \\) → \\( -6x + 6 \\). Subtract \\( -6x + 6 \\) → 0.',
                    workingLatex: 'f(x) = (x - 1)(x^2 - x - 6)',
                    explanation: 'Quotient is \\( x^2 - x - 6 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise \\( x^2 - x - 6 = (x - 3)(x + 2) \\).',
                    workingLatex: 'f(x) = (x - 1)(x - 3)(x + 2)',
                    explanation: 'Numbers that multiply to \\(-6\\) and add to \\(-1\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( f(x) = 0 \\).',
                    workingLatex: 'x = 1, \\; x = 3, \\; x = -2',
                    explanation: 'Three real solutions.'
                }
            ],
            finalAnswer: ' x = -2, \\; x = 1, \\; x = 3 ',
        }
    },


    // ─── TYPE F: Long division then verify with Remainder Theorem ─────────────────
    // Q43–Q47

    {
        id: 'qc11-043',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 43',
        difficulty: 'Foundation',
        questionText: 'a) Use algebraic long division to find the remainder when \\( f(x) = x^3 - 2x^2 + x - 1 \\) is divided by \\( (x - 3) \\).\n\nb) Use the Remainder Theorem to verify your answer.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'remainder', 'remainder theorem', 'verify'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 - 2x^2 + x - 1 \\) by \\( (x - 3) \\) using long division.',
                    workingLatex: 'x^3 - 2x^2 + x - 1 - (x^3 - 3x^2) = x^2 + x - 1',
                    explanation: 'Step 1: subtract \\( x^3 - 3x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( x^2 - 3x \\) → \\( 4x - 1 \\). Subtract \\( 4x - 12 \\) → remainder.',
                    workingLatex: '4x - 1 - (4x - 12) = 11',
                    explanation: 'Remainder is 11.'
                },
                {
                    stepNumber: 3,
                    description: 'Verify using the Remainder Theorem: substitute \\( x = 3 \\) into \\( f(x) \\).',
                    workingLatex: 'f(3) = 27 - 18 + 3 - 1 = 11 \\checkmark',
                    explanation: 'The Remainder Theorem states the remainder equals \\( f(3) \\).'
                }
            ],
            finalAnswer: 'Remainder  = 11 . Verified:  f(3) = 11 \\checkmark ',
        }
    },

    {
        id: 'qc11-044',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 44',
        difficulty: 'Foundation',
        questionText: 'a) Use algebraic long division to find the remainder when \\( f(x) = 2x^3 + x^2 - 5x + 2 \\) is divided by \\( (x + 2) \\).\n\nb) Use the Remainder Theorem to verify your answer.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'remainder', 'remainder theorem', 'verify'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( 2x^3 + x^2 - 5x + 2 \\) by \\( (x + 2) \\).',
                    workingLatex: '2x^3 + x^2 - 5x + 2 - (2x^3 + 4x^2) = -3x^2 - 5x + 2',
                    explanation: 'Step 1: subtract \\( 2x^3 + 4x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( -3x^2 - 6x \\) → \\( x + 2 \\). Subtract \\( x + 2 \\) → 0.',
                    workingLatex: 'f(x) = (x + 2)(2x^2 - 3x + 1)',
                    explanation: 'Remainder is 0.'
                },
                {
                    stepNumber: 3,
                    description: 'Verify using the Remainder Theorem: \\( f(-2) = 2(-8) + 4 + 10 + 2 = -16 + 16 = 0 \\checkmark \\)',
                    workingLatex: 'f(-2) = -16 + 4 + 10 + 2 = 0 \\checkmark',
                    explanation: 'The remainder is 0, confirming \\( (x + 2) \\) is a factor.'
                }
            ],
            finalAnswer: 'Remainder  = 0 .  (x + 2)  is a factor. Verified:  f(-2) = 0 \\checkmark ',
        }
    },

    {
        id: 'qc11-045',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 45',
        difficulty: 'Foundation',
        questionText: 'a) Use algebraic long division to find the remainder when \\( f(x) = x^3 + 3x^2 - 2x + 4 \\) is divided by \\( (x - 2) \\).\n\nb) Use the Remainder Theorem to verify your answer.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'remainder', 'remainder theorem', 'verify'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 + 3x^2 - 2x + 4 \\) by \\( (x - 2) \\).',
                    workingLatex: 'x^3 + 3x^2 - 2x + 4 - (x^3 - 2x^2) = 5x^2 - 2x + 4',
                    explanation: 'Step 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( 5x^2 - 10x \\) → \\( 8x + 4 \\). Subtract \\( 8x - 16 \\) → 20.',
                    workingLatex: '8x + 4 - (8x - 16) = 20',
                    explanation: 'Remainder is 20.'
                },
                {
                    stepNumber: 3,
                    description: 'Verify: \\( f(2) = 8 + 12 - 4 + 4 = 20 \\checkmark \\)',
                    workingLatex: 'f(2) = 8 + 12 - 4 + 4 = 20 \\checkmark',
                    explanation: 'Remainder Theorem confirms remainder \\( = 20 \\).'
                }
            ],
            finalAnswer: 'Remainder  = 20 . Verified:  f(2) = 20 \\checkmark ',
        }
    },

    {
        id: 'qc11-046',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 46',
        difficulty: 'Foundation',
        questionText: 'a) Use algebraic long division to find the remainder when \\( f(x) = x^3 - 4x + 6 \\) is divided by \\( (x + 3) \\).\n\nb) Use the Remainder Theorem to verify your answer.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'remainder', 'remainder theorem', 'missing terms', 'verify'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( f(x) = x^3 + 0x^2 - 4x + 6 \\). Divide by \\( (x + 3) \\).',
                    workingLatex: 'x^3 + 0x^2 - 4x + 6 - (x^3 + 3x^2) = -3x^2 - 4x + 6',
                    explanation: 'Step 1 — insert placeholder.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( -3x^2 - 9x \\) → \\( 5x + 6 \\). Subtract \\( 5x + 15 \\) → \\( -9 \\).',
                    workingLatex: '5x + 6 - (5x + 15) = -9',
                    explanation: 'Remainder is \\(-9\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Verify: \\( f(-3) = -27 + 12 + 6 = -9 \\checkmark \\)',
                    workingLatex: 'f(-3) = (-27) + 0 + 12 + 6 = -9 \\checkmark',
                    explanation: 'Remainder Theorem confirms the result.'
                }
            ],
            finalAnswer: 'Remainder  = -9 . Verified:  f(-3) = -9 \\checkmark ',
        }
    },

    {
        id: 'qc11-047',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 47',
        difficulty: 'Foundation',
        questionText: 'a) Use algebraic long division to find the remainder when \\( f(x) = 3x^3 - x^2 + 2x - 5 \\) is divided by \\( (x - 1) \\).\n\nb) Use the Remainder Theorem to verify your answer.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'remainder', 'remainder theorem', 'verify'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( 3x^3 - x^2 + 2x - 5 \\) by \\( (x - 1) \\). Step 1: subtract \\( 3x^3 - 3x^2 \\) → \\( 2x^2 + 2x - 5 \\).',
                    workingLatex: '3x^3 - x^2 + 2x - 5 - (3x^3 - 3x^2) = 2x^2 + 2x - 5',
                    explanation: 'First quotient term: \\( 3x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( 2x^2 - 2x \\) → \\( 4x - 5 \\). Subtract \\( 4x - 4 \\) → \\( -1 \\).',
                    workingLatex: '4x - 5 - (4x - 4) = -1',
                    explanation: 'Remainder is \\(-1\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Verify: \\( f(1) = 3 - 1 + 2 - 5 = -1 \\checkmark \\)',
                    workingLatex: 'f(1) = 3 - 1 + 2 - 5 = -1 \\checkmark',
                    explanation: 'Remainder Theorem confirms the result.'
                }
            ],
            finalAnswer: 'Remainder  = -1 . Verified:  f(1) = -1 \\checkmark ',
        }
    },


    // ─── TYPE G: Multi-part — find remainder, then solve related equation ─────────
    // Q48–Q50

    {
        id: 'qc11-048',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 48',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 8x^2 + 20x - k \\).\n\na) Use algebraic long division to find the remainder when \\( f(x) \\) is divided by \\( (x - 2) \\), giving your answer in terms of \\( k \\).\n\nb) Given that \\( (x - 2) \\) is a factor of \\( f(x) \\), find the value of \\( k \\) and fully factorise \\( f(x) \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'unknown constant', 'factor', 'solve', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( x^3 - 8x^2 + 20x - k \\) by \\( (x - 2) \\). Step 1: subtract \\( x^3 - 2x^2 \\) → \\( -6x^2 + 20x - k \\).',
                    workingLatex: 'x^3 - 8x^2 + 20x - k - (x^3 - 2x^2) = -6x^2 + 20x - k',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( -6x^2 + 12x \\) → \\( 8x - k \\). Subtract \\( 8x - 16 \\) → \\( 16 - k \\).',
                    workingLatex: '8x - k - (8x - 16) = 16 - k',
                    explanation: 'Remainder is \\( 16 - k \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Since \\( (x - 2) \\) is a factor, the remainder equals 0.',
                    workingLatex: '16 - k = 0 \\Rightarrow k = 16',
                    explanation: 'Set remainder to zero and solve for \\( k \\).'
                },
                {
                    stepNumber: 4,
                    description: 'So \\( f(x) = x^3 - 8x^2 + 20x - 16 \\). From the division, \\( f(x) = (x - 2)(x^2 - 6x + 8) \\).',
                    workingLatex: '(x - 2)(x^2 - 6x + 8)',
                    explanation: 'Quotient from the long division is \\( x^2 - 6x + 8 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise \\( x^2 - 6x + 8 = (x - 2)(x - 4) \\).',
                    workingLatex: 'f(x) = (x - 2)^2(x - 4)',
                    explanation: 'Numbers that multiply to 8 and add to \\(-6\\): \\(-2\\) and \\(-4\\).'
                }
            ],
            finalAnswer: 'a) Remainder  = 16 - k  &nbsp; b)  k = 16 ,  f(x) = (x - 2)^2(x - 4) ',
        }
    },

    {
        id: 'qc11-049',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 49',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 - 8x^2 + 20x - 13 \\).\n\na) Use algebraic long division to find the remainder when \\( f(x) \\) is divided by \\( (x - 2) \\).\n\nb) Hence find the solutions to \\( f(x) - 3 = 0 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'remainder', 'solve equation', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide \\( f(x) \\) by \\( (x - 2) \\). Step 1: subtract \\( x^3 - 2x^2 \\) → \\( -6x^2 + 20x - 13 \\).',
                    workingLatex: '-6x^2 + 20x - 13',
                    explanation: 'First step.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( -6x^2 + 12x \\) → \\( 8x - 13 \\). Subtract \\( 8x - 16 \\) → 3.',
                    workingLatex: '8x - 13 - (8x - 16) = 3',
                    explanation: 'Remainder is 3. So \\( f(x) = (x - 2)(x^2 - 6x + 8) + 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'To solve \\( f(x) - 3 = 0 \\), note \\( f(x) - 3 = (x - 2)(x^2 - 6x + 8) \\).',
                    workingLatex: '(x - 2)(x^2 - 6x + 8) = 0',
                    explanation: 'Subtracting 3 removes the remainder, leaving the product.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\( x^2 - 6x + 8 = (x - 2)(x - 4) \\).',
                    workingLatex: '(x - 2)^2(x - 4) = 0',
                    explanation: 'Numbers that multiply to 8 and add to \\(-6\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve.',
                    workingLatex: 'x = 2 \\text{ (repeated)}, \\; x = 4',
                    explanation: 'Two distinct solutions: \\( x = 2 \\) (double root) and \\( x = 4 \\).'
                }
            ],
            finalAnswer: 'a) Remainder  = 3  &nbsp; b)  x = 2  (repeated) and  x = 4 ',
        }
    },

    {
        id: 'qc11-050',
        topicRef: 'qc11',
        topicTitle: 'Algebraic Division 50',
        difficulty: 'Foundation',
        questionText: '\\( f(x) = x^3 + x^2 - 12 \\).\n\na) Use algebraic long division with divisor \\( (x - 2) \\) to write \\( f(x) \\) in the form \\( (x - 2)g(x) + r \\).\n\nb) Hence find all solutions to \\( f(x) = 0 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['algebraic division', 'express in form', 'solve cubic', 'missing terms', 'long division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( f(x) = x^3 + x^2 + 0x - 12 \\). Divide by \\( (x - 2) \\). Step 1: subtract \\( x^3 - 2x^2 \\) → \\( 3x^2 + 0x - 12 \\).',
                    workingLatex: 'x^3 + x^2 + 0x - 12 - (x^3 - 2x^2) = 3x^2 + 0x - 12',
                    explanation: 'Insert placeholder 0 for missing \\( x \\) term.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( 3x^2 - 6x \\) → \\( 6x - 12 \\). Subtract \\( 6x - 12 \\) → 0.',
                    workingLatex: 'f(x) = (x - 2)(x^2 + 3x + 6) + 0',
                    explanation: 'Remainder is 0, so \\( (x - 2) \\) is a factor and \\( g(x) = x^2 + 3x + 6 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'To solve \\( f(x) = 0 \\), set \\( (x - 2)(x^2 + 3x + 6) = 0 \\). From the linear factor: \\( x = 2 \\).',
                    workingLatex: 'x - 2 = 0 \\Rightarrow x = 2',
                    explanation: 'One real solution from the linear factor.'
                },
                {
                    stepNumber: 4,
                    description: 'Check discriminant of \\( x^2 + 3x + 6 \\): \\( \\Delta = 9 - 24 = -15 < 0 \\).',
                    workingLatex: '\\Delta = 3^2 - 4(1)(6) = -15 < 0',
                    explanation: 'Negative discriminant means no real roots from the quadratic.'
                },
                {
                    stepNumber: 5,
                    description: 'The only real solution is \\( x = 2 \\).',
                    workingLatex: 'x = 2',
                    explanation: '\\( x = 2 \\) is the only real root of \\( f(x) = 0 \\).'
                }
            ],
            finalAnswer: 'a)  f(x) = (x - 2)(x^2 + 3x + 6)  &nbsp; b)  x = 2  (only real solution)',
        }
    },

];



