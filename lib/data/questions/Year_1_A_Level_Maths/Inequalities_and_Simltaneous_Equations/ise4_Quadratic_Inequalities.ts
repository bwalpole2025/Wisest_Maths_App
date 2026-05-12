import { Question } from "@/lib/types";

/**
 * Topic: Quadratic Inequalities
 * Ref:   ise4
 *
 * 50 questions — mixed difficulty (Foundation, Standard, Challenge).
 * Coverage:
 *   Q1–Q20  Foundation (factorisable, negative leading coeff, repeated/no real roots)
 *   Q21–Q40 Standard   (rearrange, non-monic, quadratic formula, double bounds, combined linear)
 *   Q41–Q50 Challenge  (discriminant for-all-x, substitution, word/exam contexts)
 *
 * LaTeX convention: \\(...\\) for inline maths inside questionText/finalAnswer;
 * raw LaTeX (no delimiters) inside workingLatex.
 */
export const questions: Question[] = [

    // ─── FOUNDATION: Q1–Q6 — simple factorisable monic quadratics ──────────────────

    {
        id: 'ise4-001',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 01',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( x^2 - 5x + 6 > 0 \\). Give your answer in set notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'factorising', 'set notation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 5x + 6 = (x - 2)(x - 3)',
                    explanation: 'We look for two numbers that multiply to 6 and add to -5; these are -2 and -3. The roots are \\( x = 2 \\) and \\( x = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Analyse the sign of the parabola.',
                    workingLatex: 'a = 1 > 0 \\;\\Longrightarrow\\; \\text{parabola opens upward}',
                    explanation: 'Because the leading coefficient is positive, the parabola is U-shaped. It is negative BETWEEN the roots and positive OUTSIDE the roots. We want it to be strictly positive.'
                },
                {
                    stepNumber: 3,
                    description: 'Read off the values of \\( x \\) for which the parabola is above the \\( x \\)-axis.',
                    workingLatex: 'x < 2 \\quad \\text{or} \\quad x > 3',
                    explanation: 'The strict inequality \\( > 0 \\) excludes the roots themselves (where the curve equals 0).'
                },
                {
                    stepNumber: 4,
                    description: 'State the answer in set notation.',
                    workingLatex: '\\{ x : x < 2 \\} \\cup \\{ x : x > 3 \\}',
                    explanation: 'A union of two disjoint open intervals.'
                }
            ],
            finalAnswer: '\\(\\{ x : x < 2 \\} \\cup \\{ x : x > 3 \\}\\)'
        }
    },

    {
        id: 'ise4-002',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 02',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( x^2 - 7x + 12 < 0 \\). Give your answer in interval notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'factorising', 'interval notation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 7x + 12 = (x - 3)(x - 4)',
                    explanation: 'Two numbers multiplying to 12 and summing to -7 are -3 and -4. Roots: \\( x = 3, \\; x = 4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Analyse the sign of the parabola.',
                    workingLatex: 'a = 1 > 0 \\;\\Longrightarrow\\; \\text{U-shape; negative between the roots}',
                    explanation: 'For \\( a > 0 \\) the quadratic is below the x-axis between the two roots. We want where the expression is strictly less than zero, so we take the region between the roots, excluding the endpoints.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the solution as an open interval.',
                    workingLatex: '3 < x < 4',
                    explanation: 'In interval notation this is \\( (3, 4) \\), with round brackets because the inequality is strict.'
                }
            ],
            finalAnswer: '\\(x \\in (3, 4)\\)'
        }
    },

    {
        id: 'ise4-003',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 03',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^2 + 2x - 8 > 0 \\). Give your answer in set notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'factorising', 'set notation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: 'x^2 + 2x - 8 = (x + 4)(x - 2)',
                    explanation: 'Two numbers multiplying to -8 and summing to 2 are 4 and -2. Roots: \\( x = -4, \\; x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the shape of the parabola.',
                    workingLatex: 'a = 1 > 0 \\;\\Longrightarrow\\; \\text{U-shape; positive outside the roots}',
                    explanation: 'A positive leading coefficient means a U-shaped parabola: it is below the x-axis between the roots and above the x-axis to the left of the smaller root and to the right of the larger root.'
                },
                {
                    stepNumber: 3,
                    description: 'Read off the solution.',
                    workingLatex: 'x < -4 \\quad \\text{or} \\quad x > 2',
                    explanation: 'Strict inequality, so the roots themselves are excluded.'
                }
            ],
            finalAnswer: '\\(\\{ x : x < -4 \\} \\cup \\{ x : x > 2 \\}\\)'
        }
    },

    {
        id: 'ise4-004',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 04',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^2 - x - 12 < 0 \\). Give your answer in interval notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'factorising', 'interval notation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: 'x^2 - x - 12 = (x - 4)(x + 3)',
                    explanation: 'Two numbers multiplying to -12 and summing to -1 are -4 and 3. Roots: \\( x = -3, \\; x = 4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Sign analysis.',
                    workingLatex: 'a = 1 > 0 \\;\\Longrightarrow\\; \\text{quadratic is negative between the roots}',
                    explanation: 'U-shaped parabola, so the expression is below the x-axis on the interval between the two roots.'
                },
                {
                    stepNumber: 3,
                    description: 'State the solution interval.',
                    workingLatex: '-3 < x < 4',
                    explanation: 'Open interval because the inequality is strict.'
                }
            ],
            finalAnswer: '\\(x \\in (-3, 4)\\)'
        }
    },

    {
        id: 'ise4-005',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 05',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) for which \\( x^2 - 9 > 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'difference of two squares', 'set notation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise using the difference of two squares.',
                    workingLatex: 'x^2 - 9 = (x - 3)(x + 3)',
                    explanation: '\\( a^2 - b^2 = (a-b)(a+b) \\). Roots are \\( x = \\pm 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the shape and sign regions.',
                    workingLatex: 'a = 1 > 0 \\;\\Longrightarrow\\; \\text{U-shape; positive outside the roots}',
                    explanation: 'A U-shape symmetric about the y-axis. The quadratic is positive where \\( x \\) is further from 0 than 3, and negative for \\( -3 < x < 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'State the solution.',
                    workingLatex: 'x < -3 \\quad \\text{or} \\quad x > 3',
                    explanation: 'Strict inequality, so \\( x = \\pm 3 \\) are excluded.'
                }
            ],
            finalAnswer: '\\(x < -3\\) or \\(x > 3\\)'
        }
    },

    {
        id: 'ise4-006',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 06',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^2 + 6x + 5 < 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: 'x^2 + 6x + 5 = (x + 1)(x + 5)',
                    explanation: 'Two numbers multiplying to 5 and summing to 6 are 1 and 5. Roots: \\( x = -1, \\; x = -5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Determine sign behaviour.',
                    workingLatex: 'a = 1 > 0 \\;\\Longrightarrow\\; \\text{U-shape; negative between the roots}',
                    explanation: 'The expression is below zero for \\( x \\) between \\( -5 \\) and \\( -1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the solution.',
                    workingLatex: '-5 < x < -1',
                    explanation: 'Both endpoints excluded because of the strict inequality.'
                }
            ],
            finalAnswer: '\\(-5 < x < -1\\)'
        }
    },

    // ─── FOUNDATION: Q7–Q10 — negative leading coefficient ────────────────────────

    {
        id: 'ise4-007',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 07',
        difficulty: 'Foundation',
        questionText: 'Solve \\( -x^2 + 4x + 5 > 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'negative leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply through by \\( -1 \\), reversing the inequality.',
                    workingLatex: '-x^2 + 4x + 5 > 0 \\;\\Longleftrightarrow\\; x^2 - 4x - 5 < 0',
                    explanation: 'Multiplying an inequality by a negative number flips the direction. This is the most reliable way to handle a negative leading coefficient — convert it to a monic problem you already know how to solve.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the monic form.',
                    workingLatex: 'x^2 - 4x - 5 = (x - 5)(x + 1)',
                    explanation: 'Two numbers multiplying to -5 and summing to -4 are -5 and 1. Roots: \\( x = -1, \\; x = 5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Read off the solution from the monic inequality.',
                    workingLatex: '(x - 5)(x + 1) < 0 \\;\\Longrightarrow\\; -1 < x < 5',
                    explanation: 'The monic parabola is U-shaped and lies below the x-axis between its roots.'
                },
                {
                    stepNumber: 4,
                    description: 'Sanity check using the original parabola.',
                    workingLatex: 'a = -1 < 0 \\;\\Longrightarrow\\; \\text{n-shape; positive BETWEEN the roots}',
                    explanation: 'For \\( a < 0 \\) the parabola opens downward, so the expression is positive between the roots — opposite to the monic case. Both methods agree.'
                }
            ],
            finalAnswer: '\\(-1 < x < 5\\)'
        }
    },

    {
        id: 'ise4-008',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 08',
        difficulty: 'Foundation',
        questionText: 'Solve \\( -x^2 + 2x + 3 < 0 \\). Give your answer in set notation.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'negative leading coefficient', 'set notation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply through by \\( -1 \\) and flip the inequality.',
                    workingLatex: '-x^2 + 2x + 3 < 0 \\;\\Longleftrightarrow\\; x^2 - 2x - 3 > 0',
                    explanation: 'Reverse the inequality sign whenever you multiply or divide by a negative quantity. This is the most common error students make on these problems.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: 'x^2 - 2x - 3 = (x - 3)(x + 1)',
                    explanation: 'Roots: \\( x = -1, \\; x = 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the U-shape rule to the monic form.',
                    workingLatex: '(x - 3)(x + 1) > 0 \\;\\Longrightarrow\\; x < -1 \\;\\text{or}\\; x > 3',
                    explanation: 'A positive-leading-coefficient parabola is positive outside its roots.'
                },
                {
                    stepNumber: 4,
                    description: 'Write in set notation.',
                    workingLatex: '\\{ x : x < -1 \\} \\cup \\{ x : x > 3 \\}',
                    explanation: 'Union of the two intervals where the original expression is below zero.'
                }
            ],
            finalAnswer: '\\(\\{ x : x < -1 \\} \\cup \\{ x : x > 3 \\}\\)'
        }
    },

    {
        id: 'ise4-009',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 09',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 6 + x - x^2 > 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'negative leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite in standard form and multiply through by \\( -1 \\).',
                    workingLatex: '-x^2 + x + 6 > 0 \\;\\Longleftrightarrow\\; x^2 - x - 6 < 0',
                    explanation: 'First arrange terms in descending powers of \\( x \\); then flip the inequality on multiplying by \\( -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: 'x^2 - x - 6 = (x - 3)(x + 2)',
                    explanation: 'Roots: \\( x = -2, \\; x = 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Use the U-shape rule.',
                    workingLatex: '(x - 3)(x + 2) < 0 \\;\\Longrightarrow\\; -2 < x < 3',
                    explanation: 'Below zero between the roots for a U-shaped (\\( a > 0 \\)) parabola.'
                }
            ],
            finalAnswer: '\\(-2 < x < 3\\)'
        }
    },

    {
        id: 'ise4-010',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 10',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 12 - 4x - x^2 < 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'negative leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite in standard form and multiply through by \\( -1 \\).',
                    workingLatex: '-x^2 - 4x + 12 < 0 \\;\\Longleftrightarrow\\; x^2 + 4x - 12 > 0',
                    explanation: 'Flip the inequality when multiplying by \\( -1 \\). Now we have a monic problem.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: 'x^2 + 4x - 12 = (x + 6)(x - 2)',
                    explanation: 'Roots: \\( x = -6, \\; x = 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the U-shape rule.',
                    workingLatex: '(x + 6)(x - 2) > 0 \\;\\Longrightarrow\\; x < -6 \\;\\text{or}\\; x > 2',
                    explanation: 'Positive outside the roots for a U-shaped parabola.'
                }
            ],
            finalAnswer: '\\(x < -6\\) or \\(x > 2\\)'
        }
    },

    // ─── FOUNDATION: Q11–Q14 — inclusive endpoints ────────────────────────────────

    {
        id: 'ise4-011',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 11',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^2 - 6x + 8 \\leq 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'factorising', 'inclusive endpoints'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: 'x^2 - 6x + 8 = (x - 2)(x - 4)',
                    explanation: 'Roots: \\( x = 2, \\; x = 4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Determine where the quadratic is non-positive.',
                    workingLatex: 'a = 1 > 0 \\;\\Longrightarrow\\; \\text{negative between, zero at, the roots}',
                    explanation: 'A U-shaped parabola sits below or on the x-axis on the closed interval between its roots.'
                },
                {
                    stepNumber: 3,
                    description: 'Include the endpoints because of \\( \\leq \\).',
                    workingLatex: '2 \\leq x \\leq 4',
                    explanation: 'At the roots the quadratic equals 0, which satisfies \\( \\leq 0 \\). So the endpoints belong in the solution; use a closed interval \\( [2, 4] \\).'
                }
            ],
            finalAnswer: '\\(2 \\leq x \\leq 4\\)'
        }
    },

    {
        id: 'ise4-012',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 12',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^2 + x - 6 \\geq 0 \\). Give your answer in interval notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'factorising', 'inclusive endpoints'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: 'x^2 + x - 6 = (x + 3)(x - 2)',
                    explanation: 'Roots: \\( x = -3, \\; x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the U-shape rule with inclusive endpoints.',
                    workingLatex: 'a = 1 > 0 \\;\\Longrightarrow\\; \\text{non-negative outside / on the roots}',
                    explanation: 'A U-shaped parabola is at or above the x-axis when \\( x \\leq \\) smaller root or \\( x \\geq \\) larger root. We include the endpoints because the inequality is non-strict.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the solution as a union of closed intervals.',
                    workingLatex: 'x \\leq -3 \\;\\text{or}\\; x \\geq 2',
                    explanation: 'In interval notation: \\( (-\\infty, -3] \\cup [2, \\infty) \\). Square brackets denote inclusive endpoints; \\( \\pm \\infty \\) always takes a round bracket.'
                }
            ],
            finalAnswer: '\\(x \\in (-\\infty, -3] \\cup [2, \\infty)\\)'
        }
    },

    {
        id: 'ise4-013',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 13',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^2 - 4 \\leq 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'difference of two squares', 'inclusive endpoints'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise using the difference of two squares.',
                    workingLatex: 'x^2 - 4 = (x - 2)(x + 2)',
                    explanation: 'Roots: \\( x = \\pm 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the sign of the parabola.',
                    workingLatex: 'a = 1 > 0 \\;\\Longrightarrow\\; \\text{U-shape; \\(\\leq 0\\) between roots (inclusive)}',
                    explanation: 'Includes endpoints because the quadratic equals 0 at \\( x = \\pm 2 \\), which satisfies \\( \\leq 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'State the solution.',
                    workingLatex: '-2 \\leq x \\leq 2',
                    explanation: 'Closed interval \\( [-2, 2] \\).'
                }
            ],
            finalAnswer: '\\(-2 \\leq x \\leq 2\\)'
        }
    },

    {
        id: 'ise4-014',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 14',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^2 - 8x + 15 \\geq 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'factorising', 'inclusive endpoints'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: 'x^2 - 8x + 15 = (x - 3)(x - 5)',
                    explanation: 'Two numbers multiplying to 15 and summing to -8 are -3 and -5. Roots: \\( x = 3, \\; x = 5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Identify where the parabola is non-negative.',
                    workingLatex: 'a = 1 > 0 \\;\\Longrightarrow\\; \\geq 0 \\text{ on } (-\\infty, 3] \\cup [5, \\infty)',
                    explanation: 'A U-shaped parabola is at or above the x-axis outside (and at) its roots.'
                },
                {
                    stepNumber: 3,
                    description: 'State the solution.',
                    workingLatex: 'x \\leq 3 \\;\\text{or}\\; x \\geq 5',
                    explanation: 'Inclusive endpoints because of \\( \\geq \\).'
                }
            ],
            finalAnswer: '\\(x \\leq 3\\) or \\(x \\geq 5\\)'
        }
    },

    // ─── FOUNDATION: Q15–Q17 — repeated root cases ────────────────────────────────

    {
        id: 'ise4-015',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 15',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^2 - 6x + 9 \\geq 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'repeated root', 'perfect square'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the perfect square.',
                    workingLatex: 'x^2 - 6x + 9 = (x - 3)^2',
                    explanation: 'Discriminant \\( = (-6)^2 - 4(1)(9) = 0 \\), confirming a repeated root at \\( x = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Use the property that any real square is non-negative.',
                    workingLatex: '(x - 3)^2 \\geq 0 \\;\\text{ for all } x \\in \\mathbb{R}',
                    explanation: 'A squared real number can never be negative; it equals zero exactly at \\( x = 3 \\) and is positive everywhere else.'
                },
                {
                    stepNumber: 3,
                    description: 'State the solution.',
                    workingLatex: 'x \\in \\mathbb{R}',
                    explanation: 'The inequality is satisfied for every real number, including \\( x = 3 \\) where the expression equals 0.'
                }
            ],
            finalAnswer: '\\(x \\in \\mathbb{R}\\) (all real numbers)'
        }
    },

    {
        id: 'ise4-016',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 16',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^2 - 4x + 4 > 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'repeated root', 'perfect square'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the perfect square.',
                    workingLatex: 'x^2 - 4x + 4 = (x - 2)^2',
                    explanation: 'Repeated root at \\( x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Use the property of real squares.',
                    workingLatex: '(x - 2)^2 \\geq 0 \\text{ for all } x, \\text{ with equality only at } x = 2',
                    explanation: 'The expression is strictly positive everywhere except at \\( x = 2 \\), where it is zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Exclude the single point at which equality holds.',
                    workingLatex: 'x \\in \\mathbb{R}, \\; x \\neq 2',
                    explanation: 'Because the inequality is strict, we must exclude the value \\( x = 2 \\) which gives \\( 0 \\), not \\( > 0 \\).'
                }
            ],
            finalAnswer: '\\(x \\in \\mathbb{R}\\), \\(x \\neq 2\\)'
        }
    },

    {
        id: 'ise4-017',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 17',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^2 + 10x + 25 < 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'repeated root', 'no solution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise as a perfect square.',
                    workingLatex: 'x^2 + 10x + 25 = (x + 5)^2',
                    explanation: 'Repeated root at \\( x = -5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the non-negativity of real squares.',
                    workingLatex: '(x + 5)^2 \\geq 0 \\;\\text{for all real } x',
                    explanation: 'A real square is never negative. So \\( (x + 5)^2 < 0 \\) is impossible.'
                },
                {
                    stepNumber: 3,
                    description: 'State the conclusion.',
                    workingLatex: '\\text{no real solutions}',
                    explanation: 'The solution set is empty: there is no real \\( x \\) for which the expression is strictly less than zero.'
                }
            ],
            finalAnswer: 'No real solutions (the solution set is empty)'
        }
    },

    // ─── FOUNDATION: Q18–Q20 — no real roots (discriminant < 0) ───────────────────

    {
        id: 'ise4-018',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 18',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^2 + 4 > 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'no real roots', 'discriminant'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compute the discriminant.',
                    workingLatex: '\\Delta = 0^2 - 4(1)(4) = -16 < 0',
                    explanation: 'The discriminant is negative, so the quadratic has no real roots and the parabola never crosses the x-axis.'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the constant sign of the quadratic.',
                    workingLatex: 'a = 1 > 0 \\;\\Longrightarrow\\; x^2 + 4 > 0 \\text{ for all } x',
                    explanation: 'When \\( \\Delta < 0 \\) the parabola lies entirely on one side of the x-axis, and its sign matches the sign of \\( a \\). Here \\( a > 0 \\), so the expression is strictly positive everywhere.'
                },
                {
                    stepNumber: 3,
                    description: 'State the solution.',
                    workingLatex: 'x \\in \\mathbb{R}',
                    explanation: 'The inequality holds for every real number.'
                }
            ],
            finalAnswer: '\\(x \\in \\mathbb{R}\\) (all real numbers)'
        }
    },

    {
        id: 'ise4-019',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 19',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^2 - 2x + 5 < 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'no real roots', 'discriminant'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compute the discriminant.',
                    workingLatex: '\\Delta = (-2)^2 - 4(1)(5) = 4 - 20 = -16 < 0',
                    explanation: 'No real roots — the parabola never crosses the x-axis.'
                },
                {
                    stepNumber: 2,
                    description: 'Complete the square to confirm the sign.',
                    workingLatex: 'x^2 - 2x + 5 = (x - 1)^2 + 4',
                    explanation: 'Completing the square reveals that the minimum value of the expression is 4 (attained at \\( x = 1 \\)). The expression is always at least 4, hence strictly positive.'
                },
                {
                    stepNumber: 3,
                    description: 'Conclude.',
                    workingLatex: 'x^2 - 2x + 5 > 0 \\;\\text{for all } x \\;\\Longrightarrow\\; \\text{no real solutions}',
                    explanation: 'Since the expression is always positive, it can never be less than 0. The solution set is empty.'
                }
            ],
            finalAnswer: 'No real solutions (the solution set is empty)'
        }
    },

    {
        id: 'ise4-020',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 20',
        difficulty: 'Foundation',
        questionText: 'Solve \\( -x^2 + 2x - 5 < 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'no real roots', 'negative leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compute the discriminant.',
                    workingLatex: '\\Delta = 2^2 - 4(-1)(-5) = 4 - 20 = -16 < 0',
                    explanation: 'No real roots.'
                },
                {
                    stepNumber: 2,
                    description: 'Use the sign-of-\\(a\\) rule.',
                    workingLatex: 'a = -1 < 0 \\;\\Longrightarrow\\; -x^2 + 2x - 5 < 0 \\text{ for all } x',
                    explanation: 'When \\( \\Delta < 0 \\) the parabola has constant sign equal to the sign of \\( a \\). Here \\( a < 0 \\), so the expression is strictly negative everywhere.'
                },
                {
                    stepNumber: 3,
                    description: 'State the solution.',
                    workingLatex: 'x \\in \\mathbb{R}',
                    explanation: 'The inequality is satisfied for every real \\( x \\).'
                }
            ],
            finalAnswer: '\\(x \\in \\mathbb{R}\\) (all real numbers)'
        }
    },

    // ─── STANDARD: Q21–Q24 — rearrange to standard form first ─────────────────────

    {
        id: 'ise4-021',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 21',
        difficulty: 'Standard',
        questionText: 'Solve \\( x^2 + 3x \\geq 10 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'rearrange', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange to standard form (one side = 0).',
                    workingLatex: 'x^2 + 3x - 10 \\geq 0',
                    explanation: 'You can only use the parabola sign-analysis once everything is on one side and compared to zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: 'x^2 + 3x - 10 = (x + 5)(x - 2)',
                    explanation: 'Two numbers multiplying to -10 and summing to 3 are 5 and -2. Roots: \\( x = -5, \\; x = 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the U-shape rule with inclusive endpoints.',
                    workingLatex: 'a > 0 \\;\\Longrightarrow\\; \\geq 0 \\text{ outside (and at) the roots}',
                    explanation: 'A positive-leading-coefficient parabola is on or above the x-axis to the left of the smaller root and to the right of the larger root.'
                },
                {
                    stepNumber: 4,
                    description: 'State the answer.',
                    workingLatex: 'x \\leq -5 \\;\\text{or}\\; x \\geq 2',
                    explanation: 'Inclusive endpoints because the inequality is non-strict.'
                }
            ],
            finalAnswer: '\\(x \\leq -5\\) or \\(x \\geq 2\\)'
        }
    },

    {
        id: 'ise4-022',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 22',
        difficulty: 'Standard',
        questionText: 'Solve \\( x^2 < 4x + 5 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'rearrange', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Bring all terms to one side.',
                    workingLatex: 'x^2 - 4x - 5 < 0',
                    explanation: 'Subtract \\( 4x + 5 \\) from both sides so the right-hand side is zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: 'x^2 - 4x - 5 = (x - 5)(x + 1)',
                    explanation: 'Roots: \\( x = -1, \\; x = 5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the U-shape rule.',
                    workingLatex: '(x - 5)(x + 1) < 0 \\;\\Longrightarrow\\; -1 < x < 5',
                    explanation: 'Below zero between the roots for a U-shaped parabola.'
                }
            ],
            finalAnswer: '\\(-1 < x < 5\\)'
        }
    },

    {
        id: 'ise4-023',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 23',
        difficulty: 'Standard',
        questionText: 'Solve \\( 2x^2 + 5 \\geq 11x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'rearrange', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange to standard form.',
                    workingLatex: '2x^2 - 11x + 5 \\geq 0',
                    explanation: 'Subtract \\( 11x \\) from both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the non-monic quadratic.',
                    workingLatex: '2x^2 - 11x + 5 = (2x - 1)(x - 5)',
                    explanation: 'Look for factors of \\( 2 \\times 5 = 10 \\) that sum to -11: these are -1 and -10. Split the middle term: \\( 2x^2 - x - 10x + 5 = x(2x - 1) - 5(2x - 1) = (2x - 1)(x - 5) \\). Roots: \\( x = \\tfrac{1}{2}, \\; x = 5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the U-shape rule.',
                    workingLatex: 'a = 2 > 0 \\;\\Longrightarrow\\; \\geq 0 \\text{ outside (and at) the roots}',
                    explanation: 'Still U-shaped because the leading coefficient is positive — only its steepness changes.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: 'x \\leq \\tfrac{1}{2} \\;\\text{or}\\; x \\geq 5',
                    explanation: 'Inclusive endpoints.'
                }
            ],
            finalAnswer: '\\(x \\leq \\tfrac{1}{2}\\) or \\(x \\geq 5\\)'
        }
    },

    {
        id: 'ise4-024',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 24',
        difficulty: 'Standard',
        questionText: 'Solve \\( x(x - 1) \\leq 6 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'rearrange', 'expand'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand and bring to standard form.',
                    workingLatex: 'x^2 - x \\leq 6 \\;\\Longleftrightarrow\\; x^2 - x - 6 \\leq 0',
                    explanation: 'Resist the temptation to read roots straight from \\( x(x-1) = 6 \\): the factor product equals 6, not 0, so this is not a difference-equals-zero situation. Expand first.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: 'x^2 - x - 6 = (x - 3)(x + 2)',
                    explanation: 'Roots: \\( x = -2, \\; x = 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the U-shape rule with inclusive endpoints.',
                    workingLatex: '(x - 3)(x + 2) \\leq 0 \\;\\Longrightarrow\\; -2 \\leq x \\leq 3',
                    explanation: 'Closed interval because of \\( \\leq \\).'
                }
            ],
            finalAnswer: '\\(-2 \\leq x \\leq 3\\)'
        }
    },

    // ─── STANDARD: Q25–Q28 — non-monic quadratics ─────────────────────────────────

    {
        id: 'ise4-025',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 25',
        difficulty: 'Standard',
        questionText: 'Solve \\( 2x^2 + 5x - 3 < 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'non-monic', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the non-monic quadratic.',
                    workingLatex: '2x^2 + 5x - 3 = (2x - 1)(x + 3)',
                    explanation: 'Two numbers multiplying to \\( 2 \\times (-3) = -6 \\) and summing to 5 are 6 and -1. Split: \\( 2x^2 + 6x - x - 3 = 2x(x + 3) - (x + 3) = (2x - 1)(x + 3) \\). Roots: \\( x = -3, \\; x = \\tfrac{1}{2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the U-shape rule.',
                    workingLatex: 'a = 2 > 0 \\;\\Longrightarrow\\; < 0 \\text{ between the roots}',
                    explanation: 'Positive leading coefficient gives a U-shape; the expression dips below zero strictly between the roots.'
                },
                {
                    stepNumber: 3,
                    description: 'State the solution.',
                    workingLatex: '-3 < x < \\tfrac{1}{2}',
                    explanation: 'Open interval \\( (-3, \\tfrac{1}{2}) \\).'
                }
            ],
            finalAnswer: '\\(-3 < x < \\tfrac{1}{2}\\)'
        }
    },

    {
        id: 'ise4-026',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 26',
        difficulty: 'Standard',
        questionText: 'Solve \\( 3x^2 - 7x + 2 \\geq 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'non-monic', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '3x^2 - 7x + 2 = (3x - 1)(x - 2)',
                    explanation: 'Two numbers multiplying to \\( 3 \\times 2 = 6 \\) and summing to -7 are -1 and -6. Split: \\( 3x^2 - x - 6x + 2 = x(3x - 1) - 2(3x - 1) = (3x - 1)(x - 2) \\). Roots: \\( x = \\tfrac{1}{3}, \\; x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the U-shape rule with inclusive endpoints.',
                    workingLatex: 'a = 3 > 0 \\;\\Longrightarrow\\; \\geq 0 \\text{ outside (and at) the roots}',
                    explanation: 'U-shape because the leading coefficient is positive.'
                },
                {
                    stepNumber: 3,
                    description: 'State the solution.',
                    workingLatex: 'x \\leq \\tfrac{1}{3} \\;\\text{or}\\; x \\geq 2',
                    explanation: 'Inclusive endpoints because of \\( \\geq \\).'
                }
            ],
            finalAnswer: '\\(x \\leq \\tfrac{1}{3}\\) or \\(x \\geq 2\\)'
        }
    },

    {
        id: 'ise4-027',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 27',
        difficulty: 'Standard',
        questionText: 'Solve \\( 6x^2 - x - 1 \\leq 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'non-monic', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '6x^2 - x - 1 = (3x + 1)(2x - 1)',
                    explanation: 'Two numbers multiplying to \\( 6 \\times (-1) = -6 \\) and summing to -1 are -3 and 2. Split: \\( 6x^2 - 3x + 2x - 1 = 3x(2x - 1) + (2x - 1) = (3x + 1)(2x - 1) \\). Roots: \\( x = -\\tfrac{1}{3}, \\; x = \\tfrac{1}{2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the U-shape rule.',
                    workingLatex: 'a = 6 > 0 \\;\\Longrightarrow\\; \\leq 0 \\text{ on the closed interval between the roots}',
                    explanation: 'U-shape; below or on the x-axis from the smaller root to the larger one.'
                },
                {
                    stepNumber: 3,
                    description: 'State the solution.',
                    workingLatex: '-\\tfrac{1}{3} \\leq x \\leq \\tfrac{1}{2}',
                    explanation: 'Closed interval.'
                }
            ],
            finalAnswer: '\\(-\\tfrac{1}{3} \\leq x \\leq \\tfrac{1}{2}\\)'
        }
    },

    {
        id: 'ise4-028',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 28',
        difficulty: 'Standard',
        questionText: 'Solve \\( 4x^2 - 12x + 9 > 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'non-monic', 'repeated root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Spot the perfect square.',
                    workingLatex: '4x^2 - 12x + 9 = (2x - 3)^2',
                    explanation: 'Discriminant \\( = (-12)^2 - 4(4)(9) = 0 \\), confirming a repeated root at \\( x = \\tfrac{3}{2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the non-negativity of real squares.',
                    workingLatex: '(2x - 3)^2 \\geq 0 \\text{ for all } x, \\text{ with equality only at } x = \\tfrac{3}{2}',
                    explanation: 'Squares of real numbers cannot be negative, so the expression is at least 0 everywhere and exactly 0 only at \\( x = \\tfrac{3}{2} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Exclude the point where equality holds.',
                    workingLatex: 'x \\in \\mathbb{R}, \\; x \\neq \\tfrac{3}{2}',
                    explanation: 'Because the inequality is strict, the single point at which the expression equals zero is excluded.'
                }
            ],
            finalAnswer: '\\(x \\in \\mathbb{R}\\), \\(x \\neq \\tfrac{3}{2}\\)'
        }
    },

    // ─── STANDARD: Q29–Q32 — quadratic formula needed ─────────────────────────────

    {
        id: 'ise4-029',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 29',
        difficulty: 'Standard',
        questionText: 'Solve \\( x^2 + 4x - 1 < 0 \\). Give your answer in exact (surd) form.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'quadratic formula', 'surd form'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the roots using the quadratic formula.',
                    workingLatex: 'x = \\frac{-4 \\pm \\sqrt{4^2 - 4(1)(-1)}}{2(1)} = \\frac{-4 \\pm \\sqrt{20}}{2}',
                    explanation: 'The expression does not factorise over the integers, so use \\( x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\). Discriminant \\( = 16 + 4 = 20 > 0 \\), so there are two real roots.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the surd.',
                    workingLatex: '\\sqrt{20} = 2\\sqrt{5} \\;\\Longrightarrow\\; x = \\frac{-4 \\pm 2\\sqrt{5}}{2} = -2 \\pm \\sqrt{5}',
                    explanation: 'Roots: \\( x = -2 - \\sqrt{5} \\) and \\( x = -2 + \\sqrt{5} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the U-shape rule.',
                    workingLatex: 'a = 1 > 0 \\;\\Longrightarrow\\; < 0 \\text{ strictly between the roots}',
                    explanation: 'For a U-shaped parabola the expression is negative on the open interval between the two roots.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: '-2 - \\sqrt{5} < x < -2 + \\sqrt{5}',
                    explanation: 'Open interval; the endpoints are excluded.'
                }
            ],
            finalAnswer: '\\(-2 - \\sqrt{5} < x < -2 + \\sqrt{5}\\)'
        }
    },

    {
        id: 'ise4-030',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 30',
        difficulty: 'Standard',
        questionText: 'Solve \\( x^2 - 6x + 4 > 0 \\). Give your answer in exact form.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'quadratic formula', 'surd form'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the roots using the quadratic formula.',
                    workingLatex: 'x = \\frac{6 \\pm \\sqrt{36 - 16}}{2} = \\frac{6 \\pm \\sqrt{20}}{2}',
                    explanation: 'Discriminant \\( = 20 > 0 \\) so there are two distinct real roots.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the surd.',
                    workingLatex: 'x = \\frac{6 \\pm 2\\sqrt{5}}{2} = 3 \\pm \\sqrt{5}',
                    explanation: 'Roots: \\( x = 3 - \\sqrt{5} \\) and \\( x = 3 + \\sqrt{5} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the U-shape rule.',
                    workingLatex: 'a = 1 > 0 \\;\\Longrightarrow\\; > 0 \\text{ strictly outside the roots}',
                    explanation: 'A U-shape is above the x-axis to the left of the smaller root and to the right of the larger root.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: 'x < 3 - \\sqrt{5} \\;\\text{or}\\; x > 3 + \\sqrt{5}',
                    explanation: 'Strict inequality so the endpoints are excluded.'
                }
            ],
            finalAnswer: '\\(x < 3 - \\sqrt{5}\\) or \\(x > 3 + \\sqrt{5}\\)'
        }
    },

    {
        id: 'ise4-031',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 31',
        difficulty: 'Standard',
        questionText: 'Solve \\( 2x^2 - 4x - 1 \\leq 0 \\). Give your answer in exact form.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'quadratic formula', 'non-monic', 'surd form'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\frac{4 \\pm \\sqrt{16 - 4(2)(-1)}}{2(2)} = \\frac{4 \\pm \\sqrt{24}}{4}',
                    explanation: 'Discriminant \\( = 16 + 8 = 24 > 0 \\). Note the careful use of \\( 2a = 4 \\) in the denominator since \\( a = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '\\sqrt{24} = 2\\sqrt{6} \\;\\Longrightarrow\\; x = \\frac{4 \\pm 2\\sqrt{6}}{4} = \\frac{2 \\pm \\sqrt{6}}{2}',
                    explanation: 'Cancel a common factor of 2 from numerator and denominator.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the U-shape rule with inclusive endpoints.',
                    workingLatex: 'a = 2 > 0 \\;\\Longrightarrow\\; \\leq 0 \\text{ on the closed interval between the roots}',
                    explanation: 'U-shape; below or on the x-axis between (and at) its two roots.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: '\\frac{2 - \\sqrt{6}}{2} \\leq x \\leq \\frac{2 + \\sqrt{6}}{2}',
                    explanation: 'Closed interval; endpoints are included because the inequality is non-strict.'
                }
            ],
            finalAnswer: '\\(\\dfrac{2 - \\sqrt{6}}{2} \\leq x \\leq \\dfrac{2 + \\sqrt{6}}{2}\\)'
        }
    },

    {
        id: 'ise4-032',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 32',
        difficulty: 'Standard',
        questionText: 'Solve \\( x^2 + 2x - 4 \\geq 0 \\). Give your answer in exact form.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'quadratic formula', 'surd form'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\frac{-2 \\pm \\sqrt{4 - 4(1)(-4)}}{2} = \\frac{-2 \\pm \\sqrt{20}}{2}',
                    explanation: 'Discriminant \\( = 4 + 16 = 20 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: 'x = \\frac{-2 \\pm 2\\sqrt{5}}{2} = -1 \\pm \\sqrt{5}',
                    explanation: 'Cancel a factor of 2 in numerator and denominator.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the U-shape rule with inclusive endpoints.',
                    workingLatex: 'a = 1 > 0 \\;\\Longrightarrow\\; \\geq 0 \\text{ outside (and at) the roots}',
                    explanation: 'Above or on the x-axis outside the two roots.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: 'x \\leq -1 - \\sqrt{5} \\;\\text{or}\\; x \\geq -1 + \\sqrt{5}',
                    explanation: 'Inclusive endpoints because of \\( \\geq \\).'
                }
            ],
            finalAnswer: '\\(x \\leq -1 - \\sqrt{5}\\) or \\(x \\geq -1 + \\sqrt{5}\\)'
        }
    },

    // ─── STANDARD: Q33–Q36 — double-bounded inequalities ──────────────────────────

    {
        id: 'ise4-033',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 33',
        difficulty: 'Standard',
        questionText: 'Find the set of values of \\( x \\) that satisfy \\( -2 < x^2 - 3 < 6 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'double-bounded', 'intersection'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Split into two simultaneous inequalities.',
                    workingLatex: '\\text{(A)}\\; x^2 - 3 > -2 \\qquad \\text{(B)}\\; x^2 - 3 < 6',
                    explanation: 'A double inequality is shorthand for the intersection of the two single inequalities — both must hold simultaneously.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve (A).',
                    workingLatex: 'x^2 > 1 \\;\\Longrightarrow\\; x < -1 \\;\\text{or}\\; x > 1',
                    explanation: 'A common trap is to write \\( x > 1 \\) only and forget the negative branch. The inequality \\( x^2 > 1 \\) really says \\( |x| > 1 \\), which gives two intervals.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve (B).',
                    workingLatex: 'x^2 < 9 \\;\\Longrightarrow\\; -3 < x < 3',
                    explanation: '\\( x^2 < 9 \\) means \\( |x| < 3 \\), giving a single open interval.'
                },
                {
                    stepNumber: 4,
                    description: 'Intersect the two solution sets.',
                    workingLatex: '\\bigl(x < -1 \\;\\text{or}\\; x > 1\\bigr) \\;\\cap\\; (-3 < x < 3) \\;=\\; -3 < x < -1 \\;\\text{or}\\; 1 < x < 3',
                    explanation: 'Restrict each branch of (A) to the interval \\( (-3, 3) \\) given by (B). The left branch \\( x < -1 \\) becomes \\( -3 < x < -1 \\); the right branch \\( x > 1 \\) becomes \\( 1 < x < 3 \\).'
                }
            ],
            finalAnswer: '\\(-3 < x < -1\\) or \\(1 < x < 3\\)'
        }
    },

    {
        id: 'ise4-034',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 34',
        difficulty: 'Standard',
        questionText: 'Find the set of values of \\( x \\) that satisfy \\( 0 \\leq x^2 - 4 \\leq 5 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'double-bounded', 'intersection'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Split the double inequality.',
                    workingLatex: '\\text{(A)}\\; x^2 - 4 \\geq 0 \\qquad \\text{(B)}\\; x^2 - 4 \\leq 5',
                    explanation: 'Both inequalities must hold simultaneously.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve (A).',
                    workingLatex: 'x^2 \\geq 4 \\;\\Longrightarrow\\; x \\leq -2 \\;\\text{or}\\; x \\geq 2',
                    explanation: 'Equivalent to \\( |x| \\geq 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve (B).',
                    workingLatex: 'x^2 \\leq 9 \\;\\Longrightarrow\\; -3 \\leq x \\leq 3',
                    explanation: 'Equivalent to \\( |x| \\leq 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Intersect.',
                    workingLatex: '-3 \\leq x \\leq -2 \\;\\text{or}\\; 2 \\leq x \\leq 3',
                    explanation: 'Take the parts of \\( [-3, 3] \\) that also satisfy \\( |x| \\geq 2 \\).'
                }
            ],
            finalAnswer: '\\(-3 \\leq x \\leq -2\\) or \\(2 \\leq x \\leq 3\\)'
        }
    },

    {
        id: 'ise4-035',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 35',
        difficulty: 'Standard',
        questionText: 'Find the set of values of \\( x \\) that satisfy \\( -1 < x^2 - 2x < 8 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'double-bounded', 'rearrange'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Split into two inequalities.',
                    workingLatex: '\\text{(A)}\\; x^2 - 2x > -1 \\qquad \\text{(B)}\\; x^2 - 2x < 8',
                    explanation: 'Both must hold.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve (A).',
                    workingLatex: 'x^2 - 2x + 1 > 0 \\;\\Longleftrightarrow\\; (x - 1)^2 > 0',
                    explanation: 'Rearrange and recognise the perfect square. A real square is strictly positive everywhere except at \\( x = 1 \\). So (A) holds for all \\( x \\neq 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve (B).',
                    workingLatex: 'x^2 - 2x - 8 < 0 \\;\\Longleftrightarrow\\; (x - 4)(x + 2) < 0 \\;\\Longrightarrow\\; -2 < x < 4',
                    explanation: 'Standard factor-and-sign analysis: U-shape, negative between the roots.'
                },
                {
                    stepNumber: 4,
                    description: 'Intersect.',
                    workingLatex: '(-2 < x < 4) \\cap (x \\neq 1) = -2 < x < 4, \\; x \\neq 1',
                    explanation: 'Remove the single point \\( x = 1 \\) from the open interval \\( (-2, 4) \\), because at \\( x = 1 \\) inequality (A) fails (the left bound \\( -1 \\) is not strictly less than \\( x^2 - 2x = -1 \\)).'
                }
            ],
            finalAnswer: '\\(-2 < x < 4\\), \\(x \\neq 1\\)'
        }
    },

    {
        id: 'ise4-036',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 36',
        difficulty: 'Standard',
        questionText: 'Find the set of values of \\( x \\) that satisfy \\( 3 \\leq x^2 + 2x \\leq 8 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'double-bounded', 'rearrange'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Split the double inequality.',
                    workingLatex: '\\text{(A)}\\; x^2 + 2x \\geq 3 \\qquad \\text{(B)}\\; x^2 + 2x \\leq 8',
                    explanation: 'Both must hold simultaneously.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve (A).',
                    workingLatex: 'x^2 + 2x - 3 \\geq 0 \\;\\Longleftrightarrow\\; (x + 3)(x - 1) \\geq 0 \\;\\Longrightarrow\\; x \\leq -3 \\;\\text{or}\\; x \\geq 1',
                    explanation: 'U-shape, non-negative outside (and at) the roots.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve (B).',
                    workingLatex: 'x^2 + 2x - 8 \\leq 0 \\;\\Longleftrightarrow\\; (x + 4)(x - 2) \\leq 0 \\;\\Longrightarrow\\; -4 \\leq x \\leq 2',
                    explanation: 'U-shape, non-positive between (and at) the roots.'
                },
                {
                    stepNumber: 4,
                    description: 'Intersect.',
                    workingLatex: '-4 \\leq x \\leq -3 \\;\\text{or}\\; 1 \\leq x \\leq 2',
                    explanation: 'Restrict each branch of (A) to \\( [-4, 2] \\): the branch \\( x \\leq -3 \\) becomes \\( [-4, -3] \\); the branch \\( x \\geq 1 \\) becomes \\( [1, 2] \\).'
                }
            ],
            finalAnswer: '\\(-4 \\leq x \\leq -3\\) or \\(1 \\leq x \\leq 2\\)'
        }
    },

    // ─── STANDARD: Q37–Q40 — combined with a linear inequality ────────────────────

    {
        id: 'ise4-037',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 37',
        difficulty: 'Standard',
        questionText: 'Find the set of values of \\( x \\) for which both \\( x^2 - 4x + 3 \\leq 0 \\) and \\( x > 1 \\) hold.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'combined inequalities', 'intersection'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Solve the quadratic inequality.',
                    workingLatex: 'x^2 - 4x + 3 = (x - 1)(x - 3) \\leq 0 \\;\\Longrightarrow\\; 1 \\leq x \\leq 3',
                    explanation: 'U-shape, non-positive between (and at) the roots \\( x = 1 \\) and \\( x = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Combine with the linear condition \\( x > 1 \\).',
                    workingLatex: '[1, 3] \\cap (1, \\infty) = (1, 3]',
                    explanation: 'The intersection drops the left endpoint \\( x = 1 \\) (excluded by the strict linear inequality) but keeps \\( x = 3 \\) (included by the non-strict quadratic inequality).'
                },
                {
                    stepNumber: 3,
                    description: 'State the solution.',
                    workingLatex: '1 < x \\leq 3',
                    explanation: 'A half-open interval — pay attention to mixed strictness.'
                }
            ],
            finalAnswer: '\\(1 < x \\leq 3\\)'
        }
    },

    {
        id: 'ise4-038',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 38',
        difficulty: 'Standard',
        questionText: 'Find the set of values of \\( x \\) for which both \\( x^2 - 9 \\geq 0 \\) and \\( 2x + 1 < 9 \\) hold.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'combined inequalities', 'intersection'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Solve the quadratic inequality.',
                    workingLatex: 'x^2 - 9 \\geq 0 \\;\\Longleftrightarrow\\; (x - 3)(x + 3) \\geq 0 \\;\\Longrightarrow\\; x \\leq -3 \\;\\text{or}\\; x \\geq 3',
                    explanation: 'U-shape, non-negative outside (and at) the roots \\( x = \\pm 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Solve the linear inequality.',
                    workingLatex: '2x + 1 < 9 \\;\\Longrightarrow\\; x < 4',
                    explanation: 'Subtract 1, divide by 2 (positive, no flip).'
                },
                {
                    stepNumber: 3,
                    description: 'Intersect the two solution sets.',
                    workingLatex: '\\bigl(x \\leq -3 \\;\\text{or}\\; x \\geq 3\\bigr) \\;\\cap\\; (x < 4)',
                    explanation: 'Restrict each branch to \\( x < 4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'State the answer.',
                    workingLatex: 'x \\leq -3 \\;\\text{or}\\; 3 \\leq x < 4',
                    explanation: 'The left branch \\( x \\leq -3 \\) is already inside \\( x < 4 \\), so unchanged. The right branch \\( x \\geq 3 \\) becomes the half-open interval \\( [3, 4) \\).'
                }
            ],
            finalAnswer: '\\(x \\leq -3\\) or \\(3 \\leq x < 4\\)'
        }
    },

    {
        id: 'ise4-039',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 39',
        difficulty: 'Standard',
        questionText: 'Find the set of values of \\( x \\) for which both \\( 2x^2 - 5x - 3 < 0 \\) and \\( x \\geq 0 \\) hold. Give your answer in interval notation.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'combined inequalities', 'non-monic', 'interval notation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the quadratic.',
                    workingLatex: '2x^2 - 5x - 3 = (2x + 1)(x - 3)',
                    explanation: 'Two numbers multiplying to \\( 2 \\times (-3) = -6 \\) and summing to -5 are -6 and 1. Split: \\( 2x^2 - 6x + x - 3 = 2x(x - 3) + (x - 3) = (2x + 1)(x - 3) \\). Roots: \\( x = -\\tfrac{1}{2}, \\; x = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Solve the quadratic inequality.',
                    workingLatex: '(2x + 1)(x - 3) < 0 \\;\\Longrightarrow\\; -\\tfrac{1}{2} < x < 3',
                    explanation: 'U-shape (\\( a = 2 > 0 \\)), strictly negative between the roots.'
                },
                {
                    stepNumber: 3,
                    description: 'Intersect with \\( x \\geq 0 \\).',
                    workingLatex: '(-\\tfrac{1}{2}, 3) \\cap [0, \\infty) = [0, 3)',
                    explanation: 'The left endpoint becomes \\( 0 \\) (included via \\( x \\geq 0 \\)); the right endpoint \\( 3 \\) is excluded (strict from the quadratic).'
                }
            ],
            finalAnswer: '\\(x \\in [0, 3)\\)'
        }
    },

    {
        id: 'ise4-040',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 40',
        difficulty: 'Standard',
        questionText: 'Find the set of values of \\( x \\) for which both \\( x^2 + x - 6 > 0 \\) and \\( 3 - x \\geq 0 \\) hold.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'combined inequalities', 'intersection'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Solve the quadratic inequality.',
                    workingLatex: 'x^2 + x - 6 = (x + 3)(x - 2) > 0 \\;\\Longrightarrow\\; x < -3 \\;\\text{or}\\; x > 2',
                    explanation: 'U-shape, strictly positive outside the roots.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve the linear inequality.',
                    workingLatex: '3 - x \\geq 0 \\;\\Longrightarrow\\; x \\leq 3',
                    explanation: 'Rearrange — add \\( x \\) to both sides, no flip needed.'
                },
                {
                    stepNumber: 3,
                    description: 'Intersect.',
                    workingLatex: '\\bigl(x < -3 \\;\\text{or}\\; x > 2\\bigr) \\;\\cap\\; (x \\leq 3) \\;=\\; x < -3 \\;\\text{or}\\; 2 < x \\leq 3',
                    explanation: 'The left branch is unchanged; the right branch \\( x > 2 \\) is capped at 3 (inclusive), giving \\( (2, 3] \\).'
                }
            ],
            finalAnswer: '\\(x < -3\\) or \\(2 < x \\leq 3\\)'
        }
    },

    // ─── CHALLENGE: Q41–Q43 — discriminant-driven ─────────────────────────────────

    {
        id: 'ise4-041',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 41',
        difficulty: 'Challenge',
        questionText: 'Find the set of values of the constant \\( k \\) for which the inequality \\( x^2 + kx + 9 > 0 \\) holds for all real values of \\( x \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'discriminant', 'parameter', 'for all x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the condition for "positive for all real \\( x \\)".',
                    workingLatex: 'a = 1 > 0; \\;\\text{need parabola to never touch / cross the x-axis}',
                    explanation: 'A U-shaped parabola is strictly above the x-axis everywhere if and only if it has no real roots. This translates to the discriminant being strictly negative.'
                },
                {
                    stepNumber: 2,
                    description: 'Set up the discriminant condition.',
                    workingLatex: 'b^2 - 4ac < 0 \\;\\Longrightarrow\\; k^2 - 4(1)(9) < 0 \\;\\Longrightarrow\\; k^2 - 36 < 0',
                    explanation: 'Here the variable in the original quadratic is \\( x \\), and \\( k \\) plays the role of \\( b \\). The discriminant in \\( x \\) depends on \\( k \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve the resulting quadratic inequality in \\( k \\).',
                    workingLatex: 'k^2 - 36 < 0 \\;\\Longleftrightarrow\\; (k - 6)(k + 6) < 0 \\;\\Longrightarrow\\; -6 < k < 6',
                    explanation: 'A second quadratic inequality appears, now in the variable \\( k \\). Same technique as before: U-shape, negative between the roots.'
                },
                {
                    stepNumber: 4,
                    description: 'State the answer.',
                    workingLatex: '-6 < k < 6',
                    explanation: 'For these values of \\( k \\) the original quadratic in \\( x \\) is positive for every real \\( x \\).'
                }
            ],
            finalAnswer: '\\(-6 < k < 6\\)'
        }
    },

    {
        id: 'ise4-042',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 42',
        difficulty: 'Challenge',
        questionText: 'Find the set of values of \\( k \\) for which the equation \\( 2x^2 + kx + 8 = 0 \\) has no real roots.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'discriminant', 'parameter', 'no real roots'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the condition for no real roots.',
                    workingLatex: '\\Delta < 0',
                    explanation: 'A quadratic equation has no real roots exactly when its discriminant is strictly negative.'
                },
                {
                    stepNumber: 2,
                    description: 'Form the discriminant.',
                    workingLatex: '\\Delta = k^2 - 4(2)(8) = k^2 - 64',
                    explanation: 'With \\( a = 2, b = k, c = 8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve \\( \\Delta < 0 \\).',
                    workingLatex: 'k^2 - 64 < 0 \\;\\Longleftrightarrow\\; (k - 8)(k + 8) < 0 \\;\\Longrightarrow\\; -8 < k < 8',
                    explanation: 'U-shape (in \\( k \\)); negative between the roots.'
                }
            ],
            finalAnswer: '\\(-8 < k < 8\\)'
        }
    },

    {
        id: 'ise4-043',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 43',
        difficulty: 'Challenge',
        questionText: 'Find the set of values of \\( p \\) for which the equation \\( x^2 + (p - 2)x + 4 = 0 \\) has two distinct real roots.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'discriminant', 'parameter', 'distinct real roots'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the condition for two distinct real roots.',
                    workingLatex: '\\Delta > 0',
                    explanation: 'Two distinct real roots correspond to a strictly positive discriminant.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the discriminant.',
                    workingLatex: '\\Delta = (p - 2)^2 - 4(1)(4) = (p - 2)^2 - 16',
                    explanation: 'Here \\( b = p - 2 \\), so be careful to square the entire expression — students often write \\( p^2 - 4 \\) by mistake.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve \\( (p - 2)^2 - 16 > 0 \\).',
                    workingLatex: '(p - 2)^2 > 16 \\;\\Longrightarrow\\; |p - 2| > 4 \\;\\Longrightarrow\\; p - 2 < -4 \\;\\text{or}\\; p - 2 > 4',
                    explanation: 'Take the square root after isolating the squared term. The square-root step introduces \\( | \\cdot | \\) and hence two cases.'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify each branch.',
                    workingLatex: 'p < -2 \\;\\text{or}\\; p > 6',
                    explanation: 'Add 2 to both sides of each case.'
                }
            ],
            finalAnswer: '\\(p < -2\\) or \\(p > 6\\)'
        }
    },

    // ─── CHALLENGE: Q44–Q46 — substitution / unexpanded forms ─────────────────────

    {
        id: 'ise4-044',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 44',
        difficulty: 'Challenge',
        questionText: 'Solve \\( (x - 1)^2 - 9 \\leq 0 \\) without expanding the bracket.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'substitution', 'completed square'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Isolate the squared term.',
                    workingLatex: '(x - 1)^2 \\leq 9',
                    explanation: 'Add 9 to both sides. Treat \\( x - 1 \\) as a single variable.'
                },
                {
                    stepNumber: 2,
                    description: 'Take square roots, introducing \\( | \\cdot | \\).',
                    workingLatex: '|x - 1| \\leq 3 \\;\\Longleftrightarrow\\; -3 \\leq x - 1 \\leq 3',
                    explanation: 'For any non-negative \\( k \\), \\( y^2 \\leq k^2 \\) is equivalent to \\( |y| \\leq k \\), which is equivalent to \\( -k \\leq y \\leq k \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve the double inequality.',
                    workingLatex: '-2 \\leq x \\leq 4',
                    explanation: 'Add 1 to each part of the chain.'
                },
                {
                    stepNumber: 4,
                    description: 'Sanity check by expanding.',
                    workingLatex: '(x - 1)^2 - 9 = x^2 - 2x - 8 = (x - 4)(x + 2)',
                    explanation: 'Roots \\( x = -2 \\) and \\( x = 4 \\) match — the answer is correct.'
                }
            ],
            finalAnswer: '\\(-2 \\leq x \\leq 4\\)'
        }
    },

    {
        id: 'ise4-045',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 45',
        difficulty: 'Challenge',
        questionText: 'Solve \\( (2x + 3)^2 > 25 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'substitution', 'absolute value'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Translate the squared inequality to an absolute-value statement.',
                    workingLatex: '(2x + 3)^2 > 25 \\;\\Longleftrightarrow\\; |2x + 3| > 5',
                    explanation: 'For any \\( k > 0 \\), \\( y^2 > k^2 \\) is equivalent to \\( |y| > k \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Break into two cases.',
                    workingLatex: '2x + 3 < -5 \\;\\text{or}\\; 2x + 3 > 5',
                    explanation: '\\( |y| > 5 \\) splits into \\( y < -5 \\) or \\( y > 5 \\) — two disjoint pieces.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve each linear inequality.',
                    workingLatex: '2x < -8 \\;\\Rightarrow\\; x < -4 \\qquad \\text{or} \\qquad 2x > 2 \\;\\Rightarrow\\; x > 1',
                    explanation: 'Subtract 3 then divide by 2 (positive — no flip).'
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: 'x < -4 \\;\\text{or}\\; x > 1',
                    explanation: 'Union of two open intervals.'
                }
            ],
            finalAnswer: '\\(x < -4\\) or \\(x > 1\\)'
        }
    },

    {
        id: 'ise4-046',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 46',
        difficulty: 'Challenge',
        questionText: 'Solve \\( x^4 - 5x^2 + 4 \\leq 0 \\). [Hint: substitute \\( u = x^2 \\).]',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'substitution', 'quartic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( u = x^2 \\).',
                    workingLatex: 'u^2 - 5u + 4 \\leq 0',
                    explanation: 'A quadratic in \\( u \\). Note that \\( u = x^2 \\geq 0 \\) automatically, which we must remember when translating back.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise and solve in \\( u \\).',
                    workingLatex: '(u - 1)(u - 4) \\leq 0 \\;\\Longrightarrow\\; 1 \\leq u \\leq 4',
                    explanation: 'U-shape; non-positive between (and at) the roots.'
                },
                {
                    stepNumber: 3,
                    description: 'Translate back to \\( x \\).',
                    workingLatex: '1 \\leq x^2 \\leq 4',
                    explanation: 'Replace \\( u \\) with \\( x^2 \\). This is now a double-bounded inequality in \\( x^2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve the double inequality.',
                    workingLatex: 'x^2 \\geq 1 \\;\\text{and}\\; x^2 \\leq 4',
                    explanation: '\\( x^2 \\geq 1 \\Leftrightarrow |x| \\geq 1 \\); \\( x^2 \\leq 4 \\Leftrightarrow |x| \\leq 2 \\). Together: \\( 1 \\leq |x| \\leq 2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Convert the absolute-value statement to intervals.',
                    workingLatex: '-2 \\leq x \\leq -1 \\;\\text{or}\\; 1 \\leq x \\leq 2',
                    explanation: 'The condition \\( 1 \\leq |x| \\leq 2 \\) describes two symmetric closed intervals — one negative, one positive.'
                }
            ],
            finalAnswer: '\\(-2 \\leq x \\leq -1\\) or \\(1 \\leq x \\leq 2\\)'
        }
    },

    // ─── CHALLENGE: Q47–Q48 — word problems ───────────────────────────────────────

    {
        id: 'ise4-047',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 47',
        difficulty: 'Challenge',
        questionText: 'A particle is launched vertically and its height (in metres) above the ground after \\( t \\) seconds is given by \\( h(t) = 20t - 5t^2 \\). Find the values of \\( t \\) (with \\( t \\geq 0 \\)) for which the particle is more than 15 metres above the ground.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'word problem', 'projectile', 'context'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up the inequality from the model.',
                    workingLatex: '20t - 5t^2 > 15',
                    explanation: '"More than 15 metres above the ground" means the height function strictly exceeds 15.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to standard form.',
                    workingLatex: '-5t^2 + 20t - 15 > 0 \\;\\Longleftrightarrow\\; t^2 - 4t + 3 < 0',
                    explanation: 'Divide both sides by \\( -5 \\) and flip the inequality. Dividing by a negative quantity always reverses the direction — a very common mistake to watch for.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise and solve.',
                    workingLatex: 't^2 - 4t + 3 = (t - 1)(t - 3) < 0 \\;\\Longrightarrow\\; 1 < t < 3',
                    explanation: 'U-shape, strictly negative between the roots.'
                },
                {
                    stepNumber: 4,
                    description: 'Check the physical domain.',
                    workingLatex: '1 < t < 3 \\;\\text{and}\\; t \\geq 0',
                    explanation: 'The interval \\( (1, 3) \\) already lies inside \\( t \\geq 0 \\), so no additional restriction is needed. Times before launch are not physically meaningful and are excluded by the model anyway.'
                },
                {
                    stepNumber: 5,
                    description: 'State the answer with units.',
                    workingLatex: '1 < t < 3 \\;\\text{(seconds)}',
                    explanation: 'The particle is more than 15 metres above the ground between 1 and 3 seconds after launch.'
                }
            ],
            finalAnswer: '\\(1 < t < 3\\) seconds'
        }
    },

    {
        id: 'ise4-048',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 48',
        difficulty: 'Challenge',
        questionText: 'A company’s daily profit (in pounds) from selling \\( n \\) units of a product is modelled by \\( P(n) = -n^2 + 80n - 700 \\). Find the values of \\( n \\) (with \\( n \\geq 0 \\)) for which the daily profit is at least £900.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'word problem', 'profit', 'context'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Translate "at least £900" into an inequality.',
                    workingLatex: '-n^2 + 80n - 700 \\geq 900',
                    explanation: '"At least" allows equality, so we use a non-strict \\( \\geq \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to standard form.',
                    workingLatex: '-n^2 + 80n - 1600 \\geq 0 \\;\\Longleftrightarrow\\; n^2 - 80n + 1600 \\leq 0',
                    explanation: 'Subtract 900 from both sides, then multiply by \\( -1 \\) and reverse the inequality.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: 'n^2 - 80n + 1600 = (n - 40)^2',
                    explanation: 'Discriminant \\( = 80^2 - 4(1)(1600) = 6400 - 6400 = 0 \\) — a repeated root at \\( n = 40 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( (n - 40)^2 \\leq 0 \\).',
                    workingLatex: '(n - 40)^2 \\geq 0 \\text{ always, with equality only at } n = 40',
                    explanation: 'A real square cannot be negative, so \\( (n - 40)^2 \\leq 0 \\) forces \\( (n - 40)^2 = 0 \\), giving \\( n = 40 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Verify the physical domain.',
                    workingLatex: 'n = 40 \\geq 0 \\;\\checkmark',
                    explanation: 'Selling 40 units yields exactly £900 profit, the maximum possible from this model. No other sales level achieves £900 or more.'
                }
            ],
            finalAnswer: '\\(n = 40\\) units'
        }
    },

    // ─── CHALLENGE: Q49–Q50 — exam-style intersections / sketches ─────────────────

    {
        id: 'ise4-049',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 49',
        difficulty: 'Challenge',
        questionText: 'The line \\( y = x + 1 \\) and the curve \\( y = x^2 - 5 \\) are sketched on the same axes. Find the set of values of \\( x \\) for which the line lies strictly above the curve.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'curve and line', 'intersection', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Translate the geometric condition into an inequality.',
                    workingLatex: 'x + 1 > x^2 - 5',
                    explanation: 'The line is strictly above the curve where its \\( y \\)-value is strictly greater than the curve’s \\( y \\)-value.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to standard form.',
                    workingLatex: '0 > x^2 - x - 6 \\;\\Longleftrightarrow\\; x^2 - x - 6 < 0',
                    explanation: 'Bring all terms to one side; the \\( x^2 \\) coefficient is positive (we want it that way).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: 'x^2 - x - 6 = (x - 3)(x + 2)',
                    explanation: 'Roots \\( x = -2 \\) and \\( x = 3 \\), which are the \\( x \\)-coordinates of the intersection points of the line and the curve.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the U-shape rule.',
                    workingLatex: '(x - 3)(x + 2) < 0 \\;\\Longrightarrow\\; -2 < x < 3',
                    explanation: 'Between the two intersection points the line sits above the curve; outside them the curve overtakes the line.'
                }
            ],
            finalAnswer: '\\(-2 < x < 3\\)'
        }
    },

    {
        id: 'ise4-050',
        topicRef: 'ise4',
        topicTitle: 'Quadratic Inequalities 50',
        difficulty: 'Challenge',
        questionText: 'The curve \\( C \\) has equation \\( y = x^2 - 6x + 11 \\) and the line \\( \\ell \\) has equation \\( y = 2x - 4 \\). (a) Show that the curve lies entirely above the \\( x \\)-axis. (b) Find the set of values of \\( x \\) for which the curve lies on or below the line.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['quadratic inequalities', 'discriminant', 'curve and line', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Show \\( x^2 - 6x + 11 > 0 \\) for all real \\( x \\) using the discriminant.',
                    workingLatex: '\\Delta = (-6)^2 - 4(1)(11) = 36 - 44 = -8 < 0',
                    explanation: 'The discriminant is negative, so the quadratic has no real roots and the parabola never crosses the x-axis.'
                },
                {
                    stepNumber: 2,
                    description: 'Combine with the sign of \\( a \\).',
                    workingLatex: 'a = 1 > 0, \\; \\Delta < 0 \\;\\Longrightarrow\\; x^2 - 6x + 11 > 0 \\text{ for all } x',
                    explanation: 'When \\( \\Delta < 0 \\) the parabola is entirely on one side of the x-axis, taking the sign of \\( a \\). Since \\( a > 0 \\), it is strictly above. (Alternatively, completing the square gives \\( (x - 3)^2 + 2 \\geq 2 > 0 \\) for all \\( x \\).)'
                },
                {
                    stepNumber: 3,
                    description: '(b) Translate "curve on or below line" into an inequality.',
                    workingLatex: 'x^2 - 6x + 11 \\leq 2x - 4',
                    explanation: 'The curve’s \\( y \\)-value is at most the line’s \\( y \\)-value.'
                },
                {
                    stepNumber: 4,
                    description: 'Rearrange to standard form.',
                    workingLatex: 'x^2 - 8x + 15 \\leq 0',
                    explanation: 'Subtract \\( 2x - 4 \\) from both sides and tidy.'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise and solve.',
                    workingLatex: '(x - 3)(x - 5) \\leq 0 \\;\\Longrightarrow\\; 3 \\leq x \\leq 5',
                    explanation: 'U-shape, non-positive on the closed interval between the roots. The endpoints \\( x = 3 \\) and \\( x = 5 \\) are the \\( x \\)-coordinates of the intersection points of \\( C \\) and \\( \\ell \\), and are included because of \\( \\leq \\).'
                }
            ],
            finalAnswer: '(a) Shown: \\(\\Delta < 0\\) and \\(a > 0\\), so the quadratic is positive for all \\(x\\). (b) \\(3 \\leq x \\leq 5\\)'
        }
    }

];
