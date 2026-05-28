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
    {
        id: 'qc6-001',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 01',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - 2x - 3 \\). Find where \\( f(x) = 0 \\) and show the coordinates of the turning point and axis intercepts.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'roots', 'turning point'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise to find the roots where \\( f(x) = 0 \\).',
                    workingLatex: '\\( (x - 3)(x + 1) = 0 \\Rightarrow x = 3,\\; -1 \\)',
                    explanation: 'These are the x-intercepts.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the y-intercept.',
                    workingLatex: '\\( f(0) = -3 \\)',
                    explanation: 'Cuts y-axis at \\( (0, -3) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Complete the square to find the minimum.',
                    workingLatex: '\\( (x - 1)^2 - 4 \\)',
                    explanation: 'Minimum at \\( (1, -4) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'U-shape through the marked points.'
                }
            ],
            finalAnswer: 'Roots \\( x = -1, 3 \\); y-intercept \\( (0,-3) \\); minimum \\( (1,-4) \\).'
        }
    },
    {
        id: 'qc6-002',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 02',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 + 4x - 5 \\). Solve \\( f(x) = 0 \\) and label intercepts and turning point.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'roots'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( (x + 5)(x - 1) = 0 \\Rightarrow x = -5,\\; 1 \\)',
                    explanation: 'Roots.'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = -5 \\)',
                    explanation: 'At \\( (0, -5) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( (x + 2)^2 - 9 \\)',
                    explanation: 'Minimum \\( (-2, -9) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'U-shaped curve.'
                }
            ],
            finalAnswer: 'Roots \\( x = -5, 1 \\); y-intercept \\( (0,-5) \\); minimum \\( (-2,-9) \\).'
        }
    },
    {
        id: 'qc6-003',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 03',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - 6x + 8 \\). Find all \\( x \\) for which \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( (x - 2)(x - 4) = 0 \\)',
                    explanation: 'Roots \\( x = 2, 4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 8 \\)',
                    explanation: 'At \\( (0, 8) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( (x - 3)^2 - 1 \\)',
                    explanation: 'Minimum \\( (3, -1) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = 2, 4 \\); y-intercept \\( (0,8) \\); minimum \\( (3,-1) \\).'
        }
    },
    {
        id: 'qc6-004',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 04',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 + 2x - 8 \\). Find the values of \\( x \\) where \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( (x + 4)(x - 2) = 0 \\)',
                    explanation: 'Roots \\( x = -4, 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = -8 \\)',
                    explanation: 'At \\( (0, -8) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( (x + 1)^2 - 9 \\)',
                    explanation: 'Minimum \\( (-1, -9) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -4, 2 \\); minimum \\( (-1,-9) \\).'
        }
    },
    {
        id: 'qc6-005',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 05',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = -x^2 + 4x + 5 \\). Solve \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'n-shape'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise: \\( -(x^2 - 4x - 5) = -(x - 5)(x + 1) \\).',
                    workingLatex: '\\( x = 5,\\; -1 \\)',
                    explanation: 'Roots.'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 5 \\)',
                    explanation: 'At \\( (0, 5) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( -(x - 2)^2 + 9 \\)',
                    explanation: 'Maximum \\( (2, 9) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'N-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -1, 5 \\); maximum \\( (2,9) \\).'
        }
    },
    {
        id: 'qc6-006',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 06',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - 9 \\). Find where \\( f(x) = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Difference of squares.',
                    workingLatex: '\\( (x - 3)(x + 3) = 0 \\)',
                    explanation: 'Roots \\( x = \\pm 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept and minimum at \\( x = 0 \\).',
                    workingLatex: '\\( (0, -9) \\)',
                    explanation: 'The axis of symmetry is the y-axis.'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'Symmetric about the y-axis.'
                }
            ],
            finalAnswer: 'Roots \\( x = \\pm 3 \\); minimum \\( (0,-9) \\).'
        }
    },
    {
        id: 'qc6-007',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 07',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - 4x + 4 \\). Find the value(s) of \\( x \\) for which \\( f(x) = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'repeated root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Perfect square.',
                    workingLatex: '\\( (x - 2)^2 = 0 \\)',
                    explanation: 'Repeated root at \\( x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 4 \\)',
                    explanation: 'At \\( (0, 4) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'Curve touches x-axis at the repeated root.'
                }
            ],
            finalAnswer: 'Repeated root \\( x = 2 \\); minimum \\( (2, 0) \\).'
        }
    },
    {
        id: 'qc6-008',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 08',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = (x - 1)(x + 4) \\). Find where \\( f(x) = 0 \\) and show the turning point.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'factorised form'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Roots from factorised form.',
                    workingLatex: '\\( x = 1,\\; -4 \\)',
                    explanation: 'Zeros of each bracket.'
                },
                {
                    stepNumber: 2,
                    description: 'Line of symmetry midway between roots.',
                    workingLatex: '\\( x = -\\tfrac{3}{2} \\)',
                    explanation: 'Turning point x-coordinate.'
                },
                {
                    stepNumber: 3,
                    description: 'Minimum y-value.',
                    workingLatex: '\\( \\left(-\\tfrac{5}{2}\\right)\\left(\\tfrac{5}{2}\\right) = -\\tfrac{25}{4} \\)',
                    explanation: 'Minimum \\( \\left(-\\tfrac{3}{2}, -\\tfrac{25}{4}\\right) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -4, 1 \\); minimum \\( \\left(-\\tfrac{3}{2},-\\tfrac{25}{4}\\right) \\).'
        }
    },
    {
        id: 'qc6-009',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 09',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = (x + 2)(x - 6) \\). Solve \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'factorised form'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Roots from brackets.',
                    workingLatex: '\\( x = -2,\\; 6 \\)',
                    explanation: 'Set each factor to zero.'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( (2)(-6) = -12 \\)',
                    explanation: 'At \\( (0, -12) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Midpoint of roots.',
                    workingLatex: '\\( x = 2 \\)',
                    explanation: 'Line of symmetry.'
                },
                {
                    stepNumber: 4,
                    description: 'Minimum y-value.',
                    workingLatex: '\\( (4)(-4) = -16 \\)',
                    explanation: 'Minimum \\( (2, -16) \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -2, 6 \\); minimum \\( (2,-16) \\).'
        }
    },
    {
        id: 'qc6-010',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 10',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 + 6x + 5 \\). Find where \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( (x + 1)(x + 5) = 0 \\)',
                    explanation: 'Roots \\( x = -1, -5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 5 \\)',
                    explanation: 'At \\( (0, 5) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( (x + 3)^2 - 4 \\)',
                    explanation: 'Minimum \\( (-3, -4) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -5, -1 \\); minimum \\( (-3,-4) \\).'
        }
    },
    {
        id: 'qc6-011',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 11',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - x - 12 \\). Find \\( x \\) where \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( (x - 4)(x + 3) = 0 \\)',
                    explanation: 'Roots \\( x = 4, -3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = -12 \\)',
                    explanation: 'At \\( (0, -12) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( \\left(x - \\tfrac{1}{2}\\right)^2 - \\tfrac{49}{4} \\)',
                    explanation: 'Minimum \\( \\left(\\tfrac{1}{2}, -\\tfrac{49}{4}\\right) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -3, 4 \\); minimum \\( \\left(\\tfrac{1}{2},-\\tfrac{49}{4}\\right) \\).'
        }
    },
    {
        id: 'qc6-012',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 12',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = -x^2 + 2x + 3 \\). Find where \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'n-shape'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( -(x - 3)(x + 1) = 0 \\)',
                    explanation: 'Roots \\( x = 3, -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 3 \\)',
                    explanation: 'At \\( (0, 3) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( -(x - 1)^2 + 4 \\)',
                    explanation: 'Maximum \\( (1, 4) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'N-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -1, 3 \\); maximum \\( (1,4) \\).'
        }
    },
    {
        id: 'qc6-013',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 13',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 + 2x + 1 \\). Find where \\( f(x) = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'repeated root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Perfect square.',
                    workingLatex: '\\( (x + 1)^2 = 0 \\)',
                    explanation: 'Repeated root at \\( x = -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 1 \\)',
                    explanation: 'At \\( (0, 1) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'Touches x-axis at repeated root.'
                }
            ],
            finalAnswer: 'Repeated root \\( x = -1 \\); minimum \\( (-1, 0) \\).'
        }
    },
    {
        id: 'qc6-014',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 14',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = 2x^2 - 8 \\). Find where \\( f(x) = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set equal to zero.',
                    workingLatex: '\\( 2x^2 = 8 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2 \\)',
                    explanation: 'Roots.'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = -8 \\)',
                    explanation: 'Also the minimum.'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'U-shape, symmetric about y-axis.'
                }
            ],
            finalAnswer: 'Roots \\( x = \\pm 2 \\); minimum \\( (0,-8) \\).'
        }
    },
    {
        id: 'qc6-015',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 15',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - 3x \\). Find where \\( f(x) = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( x(x - 3) = 0 \\)',
                    explanation: 'Roots \\( x = 0, 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Line of symmetry.',
                    workingLatex: '\\( x = \\tfrac{3}{2} \\)',
                    explanation: 'Midpoint of roots.'
                },
                {
                    stepNumber: 3,
                    description: 'Minimum value.',
                    workingLatex: '\\( \\tfrac{9}{4} - \\tfrac{9}{2} = -\\tfrac{9}{4} \\)',
                    explanation: 'Minimum \\( \\left(\\tfrac{3}{2}, -\\tfrac{9}{4}\\right) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'U-shape passing through the origin.'
                }
            ],
            finalAnswer: 'Roots \\( x = 0, 3 \\); minimum \\( \\left(\\tfrac{3}{2},-\\tfrac{9}{4}\\right) \\).'
        }
    },
    {
        id: 'qc6-016',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 16',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 + 4x \\). Find where \\( f(x) = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( x(x + 4) = 0 \\)',
                    explanation: 'Roots \\( x = 0, -4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Completed square.',
                    workingLatex: '\\( (x + 2)^2 - 4 \\)',
                    explanation: 'Minimum \\( (-2, -4) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -4, 0 \\); minimum \\( (-2,-4) \\).'
        }
    },
    {
        id: 'qc6-017',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 17',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = -x^2 + 6x - 8 \\). Solve \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'n-shape'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise: \\( -(x^2 - 6x + 8) = -(x - 2)(x - 4) \\).',
                    workingLatex: '\\( x = 2,\\; 4 \\)',
                    explanation: 'Roots.'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = -8 \\)',
                    explanation: 'At \\( (0, -8) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( -(x - 3)^2 + 1 \\)',
                    explanation: 'Maximum \\( (3, 1) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'N-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = 2, 4 \\); maximum \\( (3,1) \\).'
        }
    },
    {
        id: 'qc6-018',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 18',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - 2x - 15 \\). Find where \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( (x - 5)(x + 3) = 0 \\)',
                    explanation: 'Roots \\( x = 5, -3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = -15 \\)',
                    explanation: 'At \\( (0, -15) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( (x - 1)^2 - 16 \\)',
                    explanation: 'Minimum \\( (1, -16) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -3, 5 \\); minimum \\( (1,-16) \\).'
        }
    },
    {
        id: 'qc6-019',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 19',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 + 2x - 3 \\). Find where \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( (x + 3)(x - 1) = 0 \\)',
                    explanation: 'Roots \\( x = -3, 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = -3 \\)',
                    explanation: 'At \\( (0, -3) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( (x + 1)^2 - 4 \\)',
                    explanation: 'Minimum \\( (-1, -4) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -3, 1 \\); minimum \\( (-1,-4) \\).'
        }
    },
    {
        id: 'qc6-020',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 20',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - 10x + 21 \\). Find where \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( (x - 3)(x - 7) = 0 \\)',
                    explanation: 'Roots \\( x = 3, 7 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 21 \\)',
                    explanation: 'At \\( (0, 21) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( (x - 5)^2 - 4 \\)',
                    explanation: 'Minimum \\( (5, -4) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = 3, 7 \\); minimum \\( (5,-4) \\).'
        }
    },
    {
        id: 'qc6-021',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 21',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = 16 - x^2 \\). Find where \\( f(x) = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'n-shape'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set equal to zero.',
                    workingLatex: '\\( x^2 = 16 \\Rightarrow x = \\pm 4 \\)',
                    explanation: 'Roots.'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept and maximum.',
                    workingLatex: '\\( (0, 16) \\)',
                    explanation: 'Axis of symmetry is y-axis.'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'N-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = \\pm 4 \\); maximum \\( (0,16) \\).'
        }
    },
    {
        id: 'qc6-022',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 22',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = (x - 2)^2 - 9 \\). Solve \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'completed square'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Read off vertex.',
                    workingLatex: '\\( (2, -9) \\)',
                    explanation: 'Minimum from completed-square form.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( f(x) = 0 \\).',
                    workingLatex: '\\( (x - 2)^2 = 9 \\Rightarrow x = 5,\\; -1 \\)',
                    explanation: 'Roots.'
                },
                {
                    stepNumber: 3,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 4 - 9 = -5 \\)',
                    explanation: 'At \\( (0, -5) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -1, 5 \\); minimum \\( (2,-9) \\).'
        }
    },
    {
        id: 'qc6-023',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 23',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = (x + 3)^2 - 4 \\). Solve \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'completed square'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Vertex from form.',
                    workingLatex: '\\( (-3, -4) \\)',
                    explanation: 'Minimum.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( f(x) = 0 \\).',
                    workingLatex: '\\( (x + 3)^2 = 4 \\Rightarrow x = -1,\\; -5 \\)',
                    explanation: 'Roots.'
                },
                {
                    stepNumber: 3,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 9 - 4 = 5 \\)',
                    explanation: 'At \\( (0, 5) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -5, -1 \\); minimum \\( (-3,-4) \\).'
        }
    },
    {
        id: 'qc6-024',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 24',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - 5x + 6 \\). Find where \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( (x - 2)(x - 3) = 0 \\)',
                    explanation: 'Roots \\( x = 2, 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 6 \\)',
                    explanation: 'At \\( (0, 6) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( \\left(x - \\tfrac{5}{2}\\right)^2 - \\tfrac{1}{4} \\)',
                    explanation: 'Minimum \\( \\left(\\tfrac{5}{2}, -\\tfrac{1}{4}\\right) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = 2, 3 \\); minimum \\( \\left(\\tfrac{5}{2},-\\tfrac{1}{4}\\right) \\).'
        }
    },
    {
        id: 'qc6-025',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 25',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = -x^2 - 2x + 8 \\). Solve \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'n-shape'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise: \\( -(x^2 + 2x - 8) = -(x + 4)(x - 2) \\).',
                    workingLatex: '\\( x = -4,\\; 2 \\)',
                    explanation: 'Roots.'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 8 \\)',
                    explanation: 'At \\( (0, 8) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( -(x + 1)^2 + 9 \\)',
                    explanation: 'Maximum \\( (-1, 9) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'N-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -4, 2 \\); maximum \\( (-1,9) \\).'
        }
    },
    {
        id: 'qc6-026',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 26',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - 7x + 10 \\). Find where \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( (x - 2)(x - 5) = 0 \\)',
                    explanation: 'Roots \\( x = 2, 5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 10 \\)',
                    explanation: 'At \\( (0, 10) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( \\left(x - \\tfrac{7}{2}\\right)^2 - \\tfrac{9}{4} \\)',
                    explanation: 'Minimum \\( \\left(\\tfrac{7}{2}, -\\tfrac{9}{4}\\right) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = 2, 5 \\); minimum \\( \\left(\\tfrac{7}{2},-\\tfrac{9}{4}\\right) \\).'
        }
    },
    {
        id: 'qc6-027',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 27',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - 25 \\). Find where \\( f(x) = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Difference of two squares.',
                    workingLatex: '\\( (x - 5)(x + 5) = 0 \\)',
                    explanation: 'Roots \\( x = \\pm 5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Minimum on y-axis.',
                    workingLatex: '\\( (0, -25) \\)',
                    explanation: 'Also the y-intercept.'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'U-shape symmetric about y-axis.'
                }
            ],
            finalAnswer: 'Roots \\( x = \\pm 5 \\); minimum \\( (0,-25) \\).'
        }
    },
    {
        id: 'qc6-028',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 28',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 + 8x + 16 \\). Find where \\( f(x) = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'repeated root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Perfect square.',
                    workingLatex: '\\( (x + 4)^2 = 0 \\)',
                    explanation: 'Repeated root at \\( x = -4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 16 \\)',
                    explanation: 'At \\( (0, 16) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'Touches x-axis at repeated root.'
                }
            ],
            finalAnswer: 'Repeated root \\( x = -4 \\); minimum \\( (-4, 0) \\).'
        }
    },
    {
        id: 'qc6-029',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 29',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = 2x^2 - 4x - 6 \\). Find where \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'non-monic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factor out 2.',
                    workingLatex: '\\( 2(x^2 - 2x - 3) = 2(x - 3)(x + 1) \\)',
                    explanation: 'Roots \\( x = 3, -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = -6 \\)',
                    explanation: 'At \\( (0, -6) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( 2(x - 1)^2 - 8 \\)',
                    explanation: 'Minimum \\( (1, -8) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'Steeper U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -1, 3 \\); minimum \\( (1,-8) \\).'
        }
    },
    {
        id: 'qc6-030',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratics 30',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = -x^2 + 9 \\). Find where \\( f(x) = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'n-shape'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set \\( f(x) = 0 \\).',
                    workingLatex: '\\( x^2 = 9 \\Rightarrow x = \\pm 3 \\)',
                    explanation: 'Roots.'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept and maximum.',
                    workingLatex: '\\( (0, 9) \\)',
                    explanation: 'Axis of symmetry is y-axis.'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch the graph:',
                    workingLatex: '\\text{See graph below}',
                    explanation: 'N-shape symmetric about y-axis.'
                }
            ],
            finalAnswer: 'Roots \\( x = \\pm 3 \\); maximum \\( (0,9) \\).'
        }
    },


    {
        id: 'qc6-031',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 31',
        difficulty: 'Foundation',

        questionText:
            'Sketch the graph of \\( y = x^2 - 7x + 10 \\), showing any intersections with the axes.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'factorisation', 'u-shaped'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Shape.',
                    workingLatex: 'a = 1 > 0',
                    explanation: 'U-shaped (minimum).',
                },
                {
                    stepNumber: 2,
                    description: 'Y-intercept.',
                    workingLatex: 'y = 10',
                    explanation: '(0, 10).',
                },
                {
                    stepNumber: 3,
                    description: 'X-intercepts.',
                    workingLatex: '(x-2)(x-5) = 0 \\implies x = 2 \\text{ or } x = 5',
                    explanation: '(2, 0) and (5, 0).',
                },
                {
                    stepNumber: 4,
                    description: 'Vertex.',
                    workingLatex: 'x = \\tfrac{2+5}{2} = 3.5,\\quad y = 12.25 - 24.5 + 10 = -2.25',
                    explanation: 'Minimum at (3.5, −2.25).',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'U-shaped through (0,10), (2,0), (5,0), minimum (3.5, −2.25).',
                    graph: { a: 1, b: -7, c: 10 },
                },
            ],
            finalAnswer:
                'U-shaped; y-intercept \\((0,10)\\); x-intercepts \\((2,0)\\) and \\((5,0)\\); minimum \\((3.5,-2.25)\\).',
        },
    },

    {
        id: 'qc6-032',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 32',
        difficulty: 'Foundation',

        questionText:
            'Sketch the graph of \\( y = x^2 + x - 12 \\), showing any intersections with the axes.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'factorisation', 'u-shaped'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Shape.',
                    workingLatex: 'a = 1 > 0',
                    explanation: 'U-shaped.',
                },
                {
                    stepNumber: 2,
                    description: 'Y-intercept.',
                    workingLatex: 'y = -12',
                    explanation: '(0, −12).',
                },
                {
                    stepNumber: 3,
                    description: 'X-intercepts.',
                    workingLatex: '(x+4)(x-3) = 0 \\implies x = -4 \\text{ or } x = 3',
                    explanation: '(−4, 0) and (3, 0).',
                },
                {
                    stepNumber: 4,
                    description: 'Vertex.',
                    workingLatex: 'x = \\tfrac{-4+3}{2} = -0.5,\\quad y = 0.25 - 0.5 - 12 = -12.25',
                    explanation: 'Minimum at (−0.5, −12.25).',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'U-shaped through (0,−12), (−4,0), (3,0), minimum (−0.5,−12.25).',
                    graph: { a: 1, b: 1, c: -12 },
                },
            ],
            finalAnswer:
                'U-shaped; y-intercept \\((0,-12)\\); x-intercepts \\((-4,0)\\) and \\((3,0)\\); minimum \\((-0.5,-12.25)\\).',
        },
    },

    {
        id: 'qc6-033',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 33',
        difficulty: 'Foundation',

        questionText:
            'Sketch the graph of \\( y = x^2 - 16 \\), showing any intersections with the axes.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'difference of two squares', 'u-shaped'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Shape.',
                    workingLatex: 'a = 1 > 0',
                    explanation: 'U-shaped.',
                },
                {
                    stepNumber: 2,
                    description: 'Y-intercept.',
                    workingLatex: 'y = -16',
                    explanation: '(0, −16).',
                },
                {
                    stepNumber: 3,
                    description: 'X-intercepts (difference of two squares).',
                    workingLatex: '(x-4)(x+4) = 0 \\implies x = \\pm 4',
                    explanation: '(−4, 0) and (4, 0).',
                },
                {
                    stepNumber: 4,
                    description: 'Vertex on axis of symmetry x = 0.',
                    workingLatex: 'y = -16',
                    explanation: 'Minimum at (0, −16).',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'Symmetric u-shape, x-intercepts (±4, 0), minimum (0, −16).',
                    graph: { a: 1, b: 0, c: -16 },
                },
            ],
            finalAnswer:
                'U-shaped; x-intercepts \\((\\pm4, 0)\\); minimum (and y-intercept) at \\((0,-16)\\).',
        },
    },

    {
        id: 'qc6-034',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 34',
        difficulty: 'Foundation',

        questionText:
            'Sketch the graph of \\( y = -x^2 + 6x \\), showing any intersections with the axes.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'n-shaped', 'factorisation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Shape.',
                    workingLatex: 'a = -1 < 0',
                    explanation: 'N-shaped (maximum).',
                },
                {
                    stepNumber: 2,
                    description: 'Y-intercept.',
                    workingLatex: 'y = 0',
                    explanation: 'Passes through the origin (0, 0).',
                },
                {
                    stepNumber: 3,
                    description: 'X-intercepts.',
                    workingLatex: '-x(x - 6) = 0 \\implies x = 0 \\text{ or } x = 6',
                    explanation: '(0, 0) and (6, 0).',
                },
                {
                    stepNumber: 4,
                    description: 'Vertex.',
                    workingLatex: 'x = 3,\\quad y = -9 + 18 = 9',
                    explanation: 'Maximum at (3, 9).',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'N-shaped through (0,0), (6,0), maximum (3,9).',
                    graph: { a: -1, b: 6, c: 0 },
                },
            ],
            finalAnswer:
                'N-shaped; x-intercepts \\((0,0)\\) and \\((6,0)\\); maximum at \\((3,9)\\).',
        },
    },

    {
        id: 'qc6-035',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 35',
        difficulty: 'Foundation',

        questionText:
            'Sketch the graph of \\( y = -x^2 + 3x + 10 \\), showing any intersections with the axes.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'n-shaped', 'factorisation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Shape.',
                    workingLatex: 'a = -1 < 0',
                    explanation: 'N-shaped.',
                },
                {
                    stepNumber: 2,
                    description: 'Y-intercept.',
                    workingLatex: 'y = 10',
                    explanation: '(0, 10).',
                },
                {
                    stepNumber: 3,
                    description: 'X-intercepts.',
                    workingLatex: '-(x-5)(x+2) = 0 \\implies x = 5 \\text{ or } x = -2',
                    explanation: '(−2, 0) and (5, 0).',
                },
                {
                    stepNumber: 4,
                    description: 'Vertex.',
                    workingLatex: 'x = \\tfrac{-2+5}{2} = 1.5,\\quad y = -2.25 + 4.5 + 10 = 12.25',
                    explanation: 'Maximum at (1.5, 12.25).',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'N-shaped through (0,10), (−2,0), (5,0), maximum (1.5, 12.25).',
                    graph: { a: -1, b: 3, c: 10 },
                },
            ],
            finalAnswer:
                'N-shaped; y-intercept \\((0,10)\\); x-intercepts \\((-2,0)\\) and \\((5,0)\\); maximum \\((1.5,12.25)\\).',
        },
    },

    {
        id: 'qc6-036',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 36',
        difficulty: 'Foundation',

        questionText:
            'a) Complete the square for \\( x^2 - 8x + 10 \\).\n\nb) Hence sketch \\( y = x^2 - 8x + 10 \\), showing the vertex and any intersections with the axes.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'completing the square', 'irrational roots'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Complete the square.',
                    workingLatex: '(x-4)^2 - 16 + 10 = (x-4)^2 - 6',
                    explanation: 'Vertex (minimum) at (4, −6).',
                },
                {
                    stepNumber: 2,
                    description: 'Y-intercept.',
                    workingLatex: 'y = 10',
                    explanation: '(0, 10).',
                },
                {
                    stepNumber: 3,
                    description: 'X-intercepts.',
                    workingLatex: '(x-4)^2 = 6 \\implies x = 4 \\pm \\sqrt{6}',
                    explanation:
                        '\\( x \\approx 1.55 \\) and \\( x \\approx 6.45 \\).',
                },
                {
                    stepNumber: 4,
                    description: 'Shape.',
                    workingLatex: 'a = 1 > 0',
                    explanation: 'U-shaped.',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'U-shaped, y-int (0,10), x-ints \\((4\\pm\\sqrt{6},0)\\), min (4,−6).',
                    graph: { a: 1, b: -8, c: 10 },
                },
            ],
            finalAnswer:
                '\\( y=(x-4)^2-6 \\); U-shaped; y-intercept \\((0,10)\\); x-intercepts \\((4\\pm\\sqrt{6},0)\\); minimum \\((4,-6)\\).',
        },
    },

    {
        id: 'qc6-037',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 37',
        difficulty: 'Foundation',

        questionText:
            'Sketch the graph of \\( y = x^2 + 3x + 4 \\), showing the vertex and any intersections with the axes.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'completing the square', 'no real roots'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Shape.',
                    workingLatex: 'a = 1 > 0',
                    explanation: 'U-shaped.',
                },
                {
                    stepNumber: 2,
                    description: 'Complete the square.',
                    workingLatex: '\\left(x + \\tfrac{3}{2}\\right)^2 - \\tfrac{9}{4} + 4 = \\left(x + \\tfrac{3}{2}\\right)^2 + \\tfrac{7}{4}',
                    explanation: 'Vertex (minimum) at \\(\\left(-\\tfrac{3}{2}, \\tfrac{7}{4}\\right)\\).',
                },
                {
                    stepNumber: 3,
                    description: 'Y-intercept.',
                    workingLatex: 'y = 4',
                    explanation: '(0, 4).',
                },
                {
                    stepNumber: 4,
                    description: 'X-intercepts.',
                    workingLatex: '\\left(x+\\tfrac{3}{2}\\right)^2 = -\\tfrac{7}{4}',
                    explanation: 'No real solutions — graph does not cross x-axis.',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'U-shaped entirely above x-axis; y-int (0,4); min (−1.5, 1.75).',
                    graph: { a: 1, b: 3, c: 4 },
                },
            ],
            finalAnswer:
                'U-shaped with no x-intercepts; y-intercept \\((0,4)\\); minimum \\(\\left(-\\tfrac{3}{2},\\tfrac{7}{4}\\right)\\).',
        },
    },

    {
        id: 'qc6-038',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 38',
        difficulty: 'Foundation',

        questionText:
            'Sketch the graph of \\( y = -x^2 + 6x - 10 \\), showing the vertex and any intersections with the axes.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'completing the square', 'n-shaped', 'no real roots'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Shape.',
                    workingLatex: 'a = -1 < 0',
                    explanation: 'N-shaped.',
                },
                {
                    stepNumber: 2,
                    description: 'Complete the square.',
                    workingLatex:
                        '-(x^2 - 6x) - 10 = -[(x-3)^2 - 9] - 10 = -(x-3)^2 - 1',
                    explanation: 'Maximum at (3, −1).',
                },
                {
                    stepNumber: 3,
                    description: 'Y-intercept.',
                    workingLatex: 'y = -10',
                    explanation: '(0, −10).',
                },
                {
                    stepNumber: 4,
                    description: 'X-intercepts.',
                    workingLatex: '-(x-3)^2 - 1 = 0 \\implies (x-3)^2 = -1',
                    explanation: 'No real solutions — entirely below x-axis.',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'N-shaped below x-axis; y-int (0,−10); max (3,−1).',
                    graph: { a: -1, b: 6, c: -10 },
                },
            ],
            finalAnswer:
                'N-shaped with no x-intercepts; y-intercept \\((0,-10)\\); maximum vertex at \\((3,-1)\\).',
        },
    },

    {
        id: 'qc6-039',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 39',
        difficulty: 'Foundation',

        questionText:
            'Sketch the graph of \\( y = 3x^2 - 6x - 9 \\), showing the vertex and any intersections with the axes.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'completing the square', 'u-shaped', 'coefficient > 1'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Shape.',
                    workingLatex: 'a = 3 > 0',
                    explanation: 'U-shaped.',
                },
                {
                    stepNumber: 2,
                    description: 'Y-intercept.',
                    workingLatex: 'y = -9',
                    explanation: '(0, −9).',
                },
                {
                    stepNumber: 3,
                    description: 'X-intercepts.',
                    workingLatex: '3(x^2-2x-3) = 3(x-3)(x+1) = 0 \\implies x = 3 \\text{ or } x = -1',
                    explanation: '(−1, 0) and (3, 0).',
                },
                {
                    stepNumber: 4,
                    description: 'Complete the square for vertex.',
                    workingLatex: '3(x-1)^2 - 3 - 9 = 3(x-1)^2 - 12',
                    explanation: 'Minimum at (1, −12).',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'U-shaped through (0,−9), (−1,0), (3,0), minimum (1,−12).',
                    graph: { a: 3, b: -6, c: -9 },
                },
            ],
            finalAnswer:
                'U-shaped; y-intercept \\((0,-9)\\); x-intercepts \\((-1,0)\\) and \\((3,0)\\); minimum \\((1,-12)\\).',
        },
    },

    {
        id: 'qc6-040',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 40',
        difficulty: 'Foundation',

        questionText:
            'Sketch the graph of \\( y = -2x^2 - 4x + 6 \\), showing the vertex and any intersections with the axes.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'completing the square', 'n-shaped', 'coefficient > 1'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Shape.',
                    workingLatex: 'a = -2 < 0',
                    explanation: 'N-shaped.',
                },
                {
                    stepNumber: 2,
                    description: 'Y-intercept.',
                    workingLatex: 'y = 6',
                    explanation: '(0, 6).',
                },
                {
                    stepNumber: 3,
                    description: 'X-intercepts.',
                    workingLatex: '-2(x^2+2x-3) = -2(x+3)(x-1) = 0 \\implies x = -3 \\text{ or } x = 1',
                    explanation: '(−3, 0) and (1, 0).',
                },
                {
                    stepNumber: 4,
                    description: 'Complete the square for vertex.',
                    workingLatex: '-2[(x+1)^2 - 1] + 6 = -2(x+1)^2 + 8',
                    explanation: 'Maximum at (−1, 8).',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'N-shaped through (0,6), (−3,0), (1,0), maximum (−1,8).',
                    graph: { a: -2, b: -4, c: 6 },
                },
            ],
            finalAnswer:
                'N-shaped; y-intercept \\((0,6)\\); x-intercepts \\((-3,0)\\) and \\((1,0)\\); maximum \\((-1,8)\\).',
        },
    },

    {
        id: 'qc6-041',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 41',
        difficulty: 'Foundation',

        questionText:
            'a) Complete the square for \\( x^2 + 8x + 11 \\).\n\nb) Hence sketch \\( y = x^2 + 8x + 11 \\), showing the vertex and any intersections with the axes.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'completing the square', 'irrational roots'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Complete the square.',
                    workingLatex: '(x+4)^2 - 16 + 11 = (x+4)^2 - 5',
                    explanation: 'Vertex (minimum) at (−4, −5).',
                },
                {
                    stepNumber: 2,
                    description: 'Y-intercept.',
                    workingLatex: 'y = 11',
                    explanation: '(0, 11).',
                },
                {
                    stepNumber: 3,
                    description: 'X-intercepts.',
                    workingLatex: '(x+4)^2 = 5 \\implies x = -4 \\pm \\sqrt{5}',
                    explanation:
                        '\\( x \\approx -6.24 \\) and \\( x \\approx -1.76 \\).',
                },
                {
                    stepNumber: 4,
                    description: 'Shape: U-shaped.',
                    workingLatex: 'a = 1 > 0',
                    explanation: '',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'U-shaped, y-int (0,11), x-ints \\((-4\\pm\\sqrt{5},0)\\), min (−4,−5).',
                    graph: { a: 1, b: 8, c: 11 },
                },
            ],
            finalAnswer:
                '\\(y=(x+4)^2-5\\); U-shaped; y-intercept \\((0,11)\\); x-intercepts \\((-4\\pm\\sqrt{5},0)\\); minimum \\((-4,-5)\\).',
        },
    },

    {
        id: 'qc6-042',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 42',
        difficulty: 'Foundation',

        questionText:
            'Sketch the following graphs on the same axes, indicating x-intercepts of each:\n\na) \\( y = x^2 - 9 \\)\n\nb) \\( y = -x^2 + 9 \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'reflection', 'multiple graphs'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '\\( y = x^2 - 9 \\): x-intercepts.',
                    workingLatex: '(x-3)(x+3) = 0 \\implies x = \\pm 3',
                    explanation: 'U-shaped, minimum (0,−9).',
                },
                {
                    stepNumber: 2,
                    description: '\\( y = -x^2 + 9 \\): x-intercepts.',
                    workingLatex: '-(x-3)(x+3) = 0 \\implies x = \\pm 3',
                    explanation: 'N-shaped, maximum (0,9). Reflection of first curve in x-axis.',
                },
                {
                    stepNumber: 3,
                    description: 'Sketch both.',
                    workingLatex: '',
                    explanation: 'Both pass through (±3,0); one dips to (0,−9), other peaks at (0,9).',
                    graph: { a: 1, b: 0, c: -9 },
                },
            ],
            finalAnswer:
                'Both share x-intercepts \\((\\pm3,0)\\). \\(y=x^2-9\\): u-shaped, min \\((0,-9)\\). \\(y=-x^2+9\\): n-shaped, max \\((0,9)\\).',
        },
    },

    {
        id: 'qc6-043',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 43',
        difficulty: 'Foundation',

        questionText:
            'The graph of a quadratic function \\( y = f(x) \\) crosses the x-axis at \\( x = -3 \\) and \\( x = 1 \\), and has a minimum point.\n\na) Write down the roots of \\( f(x) = 0 \\).\n\nb) Write \\( f(x) \\) in the form \\( (x + p)(x + q) \\) and find \\( p \\) and \\( q \\).\n\nc) Find the coordinates of the minimum point.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'u-shaped', 'graph reading', 'vertex'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Roots from graph.',
                    workingLatex: 'x = -3 \\text{ and } x = 1',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Factored form.',
                    workingLatex: 'f(x) = (x+3)(x-1)',
                    explanation: 'So \\( p = 3 \\) and \\( q = -1 \\).',
                },
                {
                    stepNumber: 3,
                    description: 'Axis of symmetry.',
                    workingLatex: 'x = \\tfrac{-3+1}{2} = -1',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Minimum y-value.',
                    workingLatex: 'f(-1) = (-1+3)(-1-1) = (2)(-2) = -4',
                    explanation: 'Minimum at (−1, −4).',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'U-shaped through (−3,0), (1,0), y-int (0,−3), min (−1,−4).',
                    graph: { a: 1, b: 2, c: -3 },
                },
            ],
            finalAnswer:
                'a) \\(x=-3\\) and \\(x=1\\). b) \\(p=3,\\;q=-1\\). c) Minimum at \\((-1,-4)\\).',
        },
    },

    {
        id: 'qc6-044',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 44',
        difficulty: 'Foundation',

        questionText:
            'Sketch the following graphs on the same set of axes, showing x-intercepts:\n\na) \\( y = x^2 - 2x - 3 \\)\n\nb) \\( y = x^2 - 2x \\)\n\nc) \\( y = x^2 - 2x + 1 \\)',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'multiple graphs', 'factorisation', 'repeated root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'a) \\( y = x^2 - 2x - 3 = (x-3)(x+1) \\)',
                    workingLatex: 'x = 3 \\text{ or } x = -1;\\quad y\\text{-int} = -3',
                    explanation: 'U-shaped, crosses at −1 and 3.',
                },
                {
                    stepNumber: 2,
                    description: 'b) \\( y = x^2 - 2x = x(x-2) \\)',
                    workingLatex: 'x = 0 \\text{ or } x = 2;\\quad y\\text{-int} = 0',
                    explanation: 'U-shaped, crosses at 0 and 2.',
                },
                {
                    stepNumber: 3,
                    description: 'c) \\( y = x^2 - 2x + 1 = (x-1)^2 \\)',
                    workingLatex: 'x = 1 \\text{ (repeated root)};\\quad y\\text{-int} = 1',
                    explanation: 'U-shaped, touches x-axis at x = 1 only.',
                },
                {
                    stepNumber: 4,
                    description: 'Note the pattern.',
                    workingLatex: '',
                    explanation: 'Each curve shifts the constant term up by 1: −3 → 0 → +1, moving the parabola progressively upward.',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch all three.',
                    workingLatex: '',
                    explanation: 'Three u-shaped parabolas with the same axis of symmetry x = 1.',
                    graph: { a: 1, b: -2, c: -3 },
                },
            ],
            finalAnswer:
                'a) Crosses at \\(x=-1,3\\). b) Crosses at \\(x=0,2\\). c) Touches at \\(x=1\\) only. All three share axis of symmetry \\(x=1\\).',
        },
    },

    {
        id: 'qc6-045',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 45',
        difficulty: 'Foundation',

        questionText:
            'a) Factorise \\( g(x) = x^2 + 2x - 15 \\).\n\nb) Sketch \\( y = g(x) \\), showing all axis crossings and the vertex.\n\nc) On the same axes, sketch \\( y = g(x+3) \\), stating its x-intercepts.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'translations', 'factorisation', 'higher'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: 'g(x) = (x+5)(x-3)',
                    explanation: 'Roots at x = −5 and x = 3.',
                },
                {
                    stepNumber: 2,
                    description: '\\( y = g(x) \\) details.',
                    workingLatex: 'y\\text{-int} = -15;\\quad \\text{min at } x = -1,\\; y = -16',
                    explanation: 'U-shaped, y-intercept (0,−15), minimum (−1,−16).',
                },
                {
                    stepNumber: 3,
                    description: '\\( y = g(x+3) \\) is a translation 3 units left.',
                    workingLatex: 'g(x+3) = (x+3+5)(x+3-3) = (x+8)x = x^2 + 8x',
                    explanation: 'x-intercepts shift: x = −5−3=−8 and x = 3−3=0.',
                },
                {
                    stepNumber: 4,
                    description: 'Sketch both.',
                    workingLatex: '',
                    explanation: 'Two u-shapes; second is first shifted 3 left.',
                    graph: { a: 1, b: 2, c: -15 },
                },
            ],
            finalAnswer:
                'a) \\((x+5)(x-3)\\). b) U-shaped, x-ints (−5,0) and (3,0), min (−1,−16). c) \\(y=g(x+3)\\) has x-ints at \\(x=-8\\) and \\(x=0\\).',
        },
    },

    {
        id: 'qc6-046',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 46',
        difficulty: 'Foundation',

        questionText:
            'Sketch the graph of \\( y = 4x^2 - 1 \\), showing any intersections with the axes and stating the equation of the axis of symmetry.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'difference of two squares', 'axis of symmetry'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Shape.',
                    workingLatex: 'a = 4 > 0',
                    explanation: 'U-shaped.',
                },
                {
                    stepNumber: 2,
                    description: 'Y-intercept.',
                    workingLatex: 'y = -1',
                    explanation: '(0, −1).',
                },
                {
                    stepNumber: 3,
                    description: 'X-intercepts (difference of two squares).',
                    workingLatex: '(2x-1)(2x+1) = 0 \\implies x = \\pm\\tfrac{1}{2}',
                    explanation: '\\(\\left(-\\tfrac{1}{2}, 0\\right)\\) and \\(\\left(\\tfrac{1}{2}, 0\\right)\\).',
                },
                {
                    stepNumber: 4,
                    description: 'Axis of symmetry.',
                    workingLatex: 'x = 0',
                    explanation: 'Minimum at (0, −1); axis is the y-axis.',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'Narrow u-shape, symmetric about y-axis, x-ints at ±½.',
                    graph: { a: 4, b: 0, c: -1 },
                },
            ],
            finalAnswer:
                'U-shaped; x-intercepts \\((\\pm\\tfrac{1}{2},0)\\); minimum and y-intercept \\((0,-1)\\); axis of symmetry \\(x=0\\).',
        },
    },

    {
        id: 'qc6-047',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 47',
        difficulty: 'Foundation',

        questionText:
            'Sketch the graph of \\( y = 2x^2 - 3x - 5 \\), showing the vertex and any intersections with the axes.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'factorisation', 'completing the square', 'coefficient > 1'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Shape.',
                    workingLatex: 'a = 2 > 0',
                    explanation: 'U-shaped.',
                },
                {
                    stepNumber: 2,
                    description: 'Y-intercept.',
                    workingLatex: 'y = -5',
                    explanation: '(0, −5).',
                },
                {
                    stepNumber: 3,
                    description: 'X-intercepts.',
                    workingLatex: '(2x-5)(x+1) = 0 \\implies x = \\tfrac{5}{2} \\text{ or } x = -1',
                    explanation: '(−1, 0) and (2.5, 0).',
                },
                {
                    stepNumber: 4,
                    description: 'Vertex.',
                    workingLatex: 'x = \\tfrac{-1+2.5}{2} = 0.75,\\quad y = 2(0.5625) - 2.25 - 5 = -6.125',
                    explanation: 'Minimum at \\(\\left(\\tfrac{3}{4}, -\\tfrac{49}{8}\\right)\\).',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'U-shaped through (0,−5), (−1,0), (2.5,0), min (0.75,−6.125).',
                    graph: { a: 2, b: -3, c: -5 },
                },
            ],
            finalAnswer:
                'U-shaped; y-intercept \\((0,-5)\\); x-intercepts \\((-1,0)\\) and \\(\\left(\\tfrac{5}{2},0\\right)\\); minimum \\(\\left(\\tfrac{3}{4},-\\tfrac{49}{8}\\right)\\).',
        },
    },

    {
        id: 'qc6-048',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 48',
        difficulty: 'Foundation',

        questionText:
            'a) Show that \\( y = 2x^2 + x + 3 \\) has no real roots.\n\nb) Sketch the graph, showing the vertex and y-intercept.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'discriminant', 'no real roots', 'completing the square'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Calculate the discriminant.',
                    workingLatex: 'b^2 - 4ac = 1 - 24 = -23 < 0',
                    explanation: 'Since \\(\\Delta < 0\\), there are no real roots.',
                },
                {
                    stepNumber: 2,
                    description: 'Shape.',
                    workingLatex: 'a = 2 > 0',
                    explanation: 'U-shaped, entirely above x-axis.',
                },
                {
                    stepNumber: 3,
                    description: 'Complete the square.',
                    workingLatex:
                        '2\\left(x + \\tfrac{1}{4}\\right)^2 - \\tfrac{1}{8} + 3 = 2\\left(x+\\tfrac{1}{4}\\right)^2 + \\tfrac{23}{8}',
                    explanation: 'Minimum at \\(\\left(-\\tfrac{1}{4}, \\tfrac{23}{8}\\right)\\).',
                },
                {
                    stepNumber: 4,
                    description: 'Y-intercept.',
                    workingLatex: 'y = 3',
                    explanation: '(0, 3).',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'U-shaped above x-axis; y-int (0,3); min (−0.25, 2.875).',
                    graph: { a: 2, b: 1, c: 3 },
                },
            ],
            finalAnswer:
                'a) \\(\\Delta = -23 < 0\\) so no real roots. b) U-shaped above x-axis; y-int \\((0,3)\\); min \\(\\left(-\\tfrac{1}{4},\\tfrac{23}{8}\\right)\\).',
        },
    },

    {
        id: 'qc6-049',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 49',
        difficulty: 'Foundation',

        questionText:
            'Sketch the graph of \\( y = -4x^2 + 4x - 1 \\), showing any intersections with the axes and the vertex.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'n-shaped', 'repeated root', 'perfect square'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Shape.',
                    workingLatex: 'a = -4 < 0',
                    explanation: 'N-shaped.',
                },
                {
                    stepNumber: 2,
                    description: 'Recognise perfect square.',
                    workingLatex: '-4x^2 + 4x - 1 = -(2x-1)^2',
                    explanation: 'Repeated root at \\(x = \\tfrac{1}{2}\\).',
                },
                {
                    stepNumber: 3,
                    description: 'X-intercept (touches only).',
                    workingLatex: '-(2x-1)^2 = 0 \\implies x = \\tfrac{1}{2}',
                    explanation: 'Touches x-axis at \\(\\left(\\tfrac{1}{2}, 0\\right)\\) — this is also the maximum.',
                },
                {
                    stepNumber: 4,
                    description: 'Y-intercept.',
                    workingLatex: 'y = -1',
                    explanation: '(0, −1).',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'N-shaped touching x-axis at (½, 0), y-int (0,−1), maximum (½, 0).',
                    graph: { a: -4, b: 4, c: -1 },
                },
            ],
            finalAnswer:
                'N-shaped; y-intercept \\((0,-1)\\); touches x-axis at \\(\\left(\\tfrac{1}{2},0\\right)\\) (maximum and repeated root).',
        },
    },

    {
        id: 'qc6-050',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 50',
        difficulty: 'Foundation',

        questionText:
            'a) Complete the square for \\( -x^2 + 2x + 5 \\).\n\nb) Hence sketch \\( y = -x^2 + 2x + 5 \\), showing the vertex and x-intercepts.\n\nc) Use your graph to solve \\( -x^2 + 2x + 5 > 0 \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'completing the square', 'n-shaped', 'inequalities'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Complete the square.',
                    workingLatex:
                        '-(x^2-2x)+5 = -[(x-1)^2-1]+5 = -(x-1)^2+6',
                    explanation: 'Maximum at (1, 6).',
                },
                {
                    stepNumber: 2,
                    description: 'X-intercepts.',
                    workingLatex: '(x-1)^2 = 6 \\implies x = 1 \\pm \\sqrt{6}',
                    explanation:
                        '\\(x \\approx -1.449\\) and \\(x \\approx 3.449\\).',
                },
                {
                    stepNumber: 3,
                    description: 'Y-intercept.',
                    workingLatex: 'y = 5',
                    explanation: '(0, 5).',
                },
                {
                    stepNumber: 4,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'N-shaped; roots at \\(1\\pm\\sqrt{6}\\); max (1,6); y-int (0,5).',
                    graph: { a: -1, b: 2, c: 5 },
                },
                {
                    stepNumber: 5,
                    description: 'Solve the inequality.',
                    workingLatex: '1 - \\sqrt{6} < x < 1 + \\sqrt{6}',
                    explanation: 'The graph is above the x-axis between its two roots.',
                },
            ],
            finalAnswer:
                'a) \\(-(x-1)^2+6\\). b) N-shaped, x-ints \\((1\\pm\\sqrt{6},0)\\), max \\((1,6)\\). c) \\(1-\\sqrt{6} < x < 1+\\sqrt{6}\\).',
        },
    },

    {
        id: 'qc6-051',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 51',
        difficulty: 'Foundation',

        questionText:
            'A football is kicked from the ground. Its height \\( h \\) metres after travelling a horizontal distance of \\( x \\) metres is modelled by \\( h = -\\tfrac{1}{20}x^2 + x \\).\n\na) Sketch the graph of \\( h \\) against \\( x \\).\n\nb) Find the maximum height of the ball.\n\nc) Find the horizontal distance at which the ball lands.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'real-world', 'projectile', 'n-shaped'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Shape.',
                    workingLatex: 'a = -\\tfrac{1}{20} < 0',
                    explanation: 'N-shaped.',
                },
                {
                    stepNumber: 2,
                    description: 'h-intercept.',
                    workingLatex: 'h = 0',
                    explanation: '(0, 0) — starts on the ground.',
                },
                {
                    stepNumber: 3,
                    description: 'X-intercepts.',
                    workingLatex: 'x\\left(-\\tfrac{1}{20}x + 1\\right) = 0 \\implies x = 0 \\text{ or } x = 20',
                    explanation: 'Ball lands at x = 20 m.',
                },
                {
                    stepNumber: 4,
                    description: 'Maximum height.',
                    workingLatex: 'x = 10,\\quad h = -\\tfrac{100}{20} + 10 = -5 + 10 = 5',
                    explanation: 'Maximum height 5 m at x = 10 m.',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'N-shaped arc from (0,0) to (20,0), peak at (10,5).',
                    graph: { a: 1, b: -20, c: 0 },
                },
            ],
            finalAnswer:
                'a) N-shaped arc through (0,0) and (20,0), peak (10,5). b) Max height = 5 m. c) Lands at \\(x = 20\\) m.',
        },
    },

    {
        id: 'qc6-052',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 52',
        difficulty: 'Foundation',

        questionText:
            'A stone is dropped into a well. The depth \\( d \\) metres of the stone below the ground after \\( t \\) seconds is modelled by \\( d = 5t^2 \\) for \\( 0 \\le t \\le 3 \\).\n\na) Sketch the graph of \\( d \\) against \\( t \\) for the given domain.\n\nb) Find the depth after 2 seconds.\n\nc) Find when the stone has fallen 45 m.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'real-world', 'u-shaped', 'restricted domain'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Shape.',
                    workingLatex: 'a = 5 > 0',
                    explanation: 'U-shaped (but only positive t shown).',
                },
                {
                    stepNumber: 2,
                    description: 'Endpoints of domain.',
                    workingLatex: 't=0 \\implies d=0;\\quad t=3 \\implies d=45',
                    explanation: 'Arc from (0,0) to (3,45).',
                },
                {
                    stepNumber: 3,
                    description: 'Depth after 2 s.',
                    workingLatex: 'd = 5(4) = 20 \\text{ m}',
                    explanation: '(2, 20).',
                },
                {
                    stepNumber: 4,
                    description: 'When d = 45.',
                    workingLatex: '5t^2 = 45 \\implies t^2 = 9 \\implies t = 3 \\text{ s}',
                    explanation: '',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'Half-parabola from (0,0) curving up to (3,45).',
                    graph: { a: 5, b: 0, c: 0 },
                },
            ],
            finalAnswer:
                'a) Rising half-parabola from (0,0) to (3,45). b) \\(d = 20\\) m at \\(t=2\\) s. c) Stone falls 45 m at \\(t=3\\) s.',
        },
    },

    {
        id: 'qc6-053',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 53',
        difficulty: 'Foundation',

        questionText:
            'A company sells \\( x \\) items per week. The weekly revenue \\( R \\) (£) is given by \\( R = 80x - 2x^2 \\).\n\na) Sketch \\( R \\) against \\( x \\) for \\( x \\ge 0 \\).\n\nb) Find the number of items that maximises revenue.\n\nc) Find the maximum weekly revenue.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'real-world', 'optimisation', 'n-shaped'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Shape.',
                    workingLatex: 'a = -2 < 0',
                    explanation: 'N-shaped.',
                },
                {
                    stepNumber: 2,
                    description: 'R-intercept (x = 0).',
                    workingLatex: 'R = 0',
                    explanation: 'Starts at origin.',
                },
                {
                    stepNumber: 3,
                    description: 'X-intercepts.',
                    workingLatex: '2x(40 - x) = 0 \\implies x = 0 \\text{ or } x = 40',
                    explanation: 'Revenue is zero when no items sold, or when x = 40.',
                },
                {
                    stepNumber: 4,
                    description: 'Maximum revenue.',
                    workingLatex: 'x = 20,\\quad R = 1600 - 800 = 800',
                    explanation: 'Maximum revenue £800 at x = 20 items.',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'N-shaped arc, (0,0) to (40,0), peak (20,800).',
                    graph: { a: -2, b: 80, c: 0 },
                },
            ],
            finalAnswer:
                'a) N-shaped, (0,0) to (40,0), peak (20,800). b) 20 items maximises revenue. c) Maximum revenue = £800.',
        },
    },

    {
        id: 'qc6-054',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 54',
        difficulty: 'Foundation',

        questionText:
            'A suspension bridge cable hangs in the shape of \\( y = 0.01x^2 - x + 30 \\), where \\( y \\) is the height in metres above the road and \\( x \\) is the horizontal distance in metres from one tower (\\( 0 \\le x \\le 100 \\)).\n\na) Complete the square to find the lowest point of the cable.\n\nb) Sketch the cable shape over the given domain, showing the lowest point and the heights at each tower.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'real-world', 'completing the square', 'restricted domain'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Complete the square.',
                    workingLatex:
                        '0.01(x^2 - 100x) + 30 = 0.01[(x-50)^2 - 2500] + 30 = 0.01(x-50)^2 + 5',
                    explanation: 'Lowest point at (50, 5) — cable is 5 m above road at mid-span.',
                },
                {
                    stepNumber: 2,
                    description: 'Height at left tower (x = 0).',
                    workingLatex: 'y = 0 - 0 + 30 = 30',
                    explanation: '(0, 30).',
                },
                {
                    stepNumber: 3,
                    description: 'Height at right tower (x = 100).',
                    workingLatex: 'y = 0.01(10000) - 100 + 30 = 100 - 100 + 30 = 30',
                    explanation: '(100, 30) — symmetric, same height at both towers.',
                },
                {
                    stepNumber: 4,
                    description: 'Shape.',
                    workingLatex: 'a = 0.01 > 0',
                    explanation: 'U-shaped (catenary approximation).',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'U-shaped from (0,30) dipping to (50,5) and back up to (100,30).',
                },
            ],
            finalAnswer:
                'a) \\(y = 0.01(x-50)^2+5\\); lowest point \\((50, 5)\\). b) U-shaped from \\((0,30)\\) to \\((100,30)\\), dipping to \\((50,5)\\).',
        },
    },

    {
        id: 'qc6-055',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 55',
        difficulty: 'Foundation',

        questionText:
            'A farmer encloses a rectangular field using a river as one side. He has 60 m of fencing for the other three sides. If the width of the field is \\( w \\) metres, the area is \\( A = w(60 - 2w) \\).\n\na) Sketch the graph of \\( A \\) against \\( w \\) for the valid domain.\n\nb) Find the maximum area and the width that produces it.\n\nc) Find the values of \\( w \\) for which the area exceeds 400 m².',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'real-world', 'optimisation', 'inequalities'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand.',
                    workingLatex: 'A = 60w - 2w^2',
                    explanation: 'N-shaped, domain \\(0 \\le w \\le 30\\).',
                },
                {
                    stepNumber: 2,
                    description: 'A-intercepts.',
                    workingLatex: '2w(30-w)=0 \\implies w=0 \\text{ or } w=30',
                    explanation: '(0,0) and (30,0).',
                },
                {
                    stepNumber: 3,
                    description: 'Maximum.',
                    workingLatex: 'w = 15,\\quad A = 900 - 450 = 450 \\text{ m}^2',
                    explanation: 'Maximum area 450 m² when w = 15 m.',
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( A > 400 \\).',
                    workingLatex: '60w - 2w^2 > 400 \\implies 2w^2 - 60w + 400 < 0 \\implies (w-10)(w-20) < 0',
                    explanation: 'Area exceeds 400 m² when \\(10 < w < 20\\).',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'N-shaped arc (0,0) to (30,0), peak (15,450), line A=400 shown.',
                },
            ],
            finalAnswer:
                'a) N-shaped, (0,0) to (30,0), peak (15,450). b) Max area = 450 m² when \\(w=15\\) m. c) \\(A>400\\) when \\(10 < w < 20\\).',
        },
    },

    {
        id: 'qc6-056',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 56',
        difficulty: 'Foundation',

        questionText:
            'a) Show that \\( x^2 + 5x + 8 \\) is always positive.\n\nb) Sketch the graph of \\( y = x^2 + 5x + 8 \\), showing the vertex and y-intercept.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'discriminant', 'completing the square', 'no real roots'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Complete the square.',
                    workingLatex: '\\left(x+\\tfrac{5}{2}\\right)^2 - \\tfrac{25}{4} + 8 = \\left(x+\\tfrac{5}{2}\\right)^2 + \\tfrac{7}{4}',
                    explanation: '\\(\\left(x+\\tfrac{5}{2}\\right)^2 \\ge 0\\) always, so \\(y \\ge \\tfrac{7}{4} > 0\\) always.',
                },
                {
                    stepNumber: 2,
                    description: 'Alternatively: discriminant.',
                    workingLatex: '\\Delta = 25 - 32 = -7 < 0',
                    explanation: 'No real roots and \\(a>0\\), so the parabola is always above the x-axis.',
                },
                {
                    stepNumber: 3,
                    description: 'Y-intercept.',
                    workingLatex: 'y = 8',
                    explanation: '(0, 8).',
                },
                {
                    stepNumber: 4,
                    description: 'Vertex.',
                    workingLatex: '\\left(-\\tfrac{5}{2},\\; \\tfrac{7}{4}\\right)',
                    explanation: 'Minimum at (−2.5, 1.75).',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'U-shaped, entirely above x-axis; y-int (0,8); min (−2.5, 1.75).',
                    graph: { a: 1, b: 5, c: 8 },
                },
            ],
            finalAnswer:
                'a) \\(\\Delta=-7<0\\) and \\(a>0\\), so always positive. b) U-shaped, no x-ints; y-int \\((0,8)\\); min \\(\\left(-\\tfrac{5}{2},\\tfrac{7}{4}\\right)\\).',
        },
    },

    {
        id: 'qc6-057',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 57',
        difficulty: 'Foundation',

        questionText:
            'a) Write \\( y = -x^2 + 8x - 7 \\) in the form \\( -(x-p)^2 + q \\).\n\nb) Sketch the graph, showing all axis intersections and the vertex.\n\nc) Hence solve \\( -x^2 + 8x - 7 \\ge 0 \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'completing the square', 'n-shaped', 'inequalities'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Complete the square.',
                    workingLatex: '-(x^2-8x)-7 = -[(x-4)^2-16]-7 = -(x-4)^2+9',
                    explanation: '\\(p=4,\\; q=9\\). Maximum at (4, 9).',
                },
                {
                    stepNumber: 2,
                    description: 'Y-intercept.',
                    workingLatex: 'y = -7',
                    explanation: '(0, −7).',
                },
                {
                    stepNumber: 3,
                    description: 'X-intercepts.',
                    workingLatex: '-(x-1)(x-7) = 0 \\implies x = 1 \\text{ or } x = 7',
                    explanation: '(1, 0) and (7, 0).',
                },
                {
                    stepNumber: 4,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'N-shaped through (0,−7), (1,0), (7,0), max (4,9).',
                    graph: { a: -1, b: 8, c: -7 },
                },
                {
                    stepNumber: 5,
                    description: 'Solve the inequality.',
                    workingLatex: '1 \\le x \\le 7',
                    explanation: 'Graph is at or above the x-axis between its roots.',
                },
            ],
            finalAnswer:
                'a) \\(-(x-4)^2+9\\). b) N-shaped; y-int \\((0,-7)\\); x-ints \\((1,0),(7,0)\\); max \\((4,9)\\). c) \\(1 \\le x \\le 7\\).',
        },
    },

    {
        id: 'qc6-058',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 58',
        difficulty: 'Foundation',

        questionText:
            'The quadratic function \\( f(x) = x^2 + bx + c \\) has roots at \\( x = 2 \\) and \\( x = 6 \\).\n\na) Find the values of \\( b \\) and \\( c \\).\n\nb) Sketch the graph of \\( y = f(x) \\), showing the vertex and all axis intersections.\n\nc) Write down the equation of the axis of symmetry.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'roots to equation', 'axis of symmetry'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use roots to write factored form.',
                    workingLatex: 'f(x) = (x-2)(x-6) = x^2 - 8x + 12',
                    explanation: 'So \\(b = -8\\) and \\(c = 12\\).',
                },
                {
                    stepNumber: 2,
                    description: 'Y-intercept.',
                    workingLatex: 'f(0) = 12',
                    explanation: '(0, 12).',
                },
                {
                    stepNumber: 3,
                    description: 'Vertex (axis of symmetry at x = 4).',
                    workingLatex: 'f(4) = 16 - 32 + 12 = -4',
                    explanation: 'Minimum at (4, −4).',
                },
                {
                    stepNumber: 4,
                    description: 'Axis of symmetry.',
                    workingLatex: 'x = 4',
                    explanation: 'Halfway between the two roots.',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'U-shaped through (0,12), (2,0), (6,0), min (4,−4).',
                    graph: { a: 1, b: -8, c: 12 },
                },
            ],
            finalAnswer:
                'a) \\(b=-8,\\; c=12\\). b) U-shaped; y-int \\((0,12)\\); x-ints \\((2,0)\\) and \\((6,0)\\); min \\((4,-4)\\). c) \\(x=4\\).',
        },
    },

    {
        id: 'qc6-059',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 59',
        difficulty: 'Foundation',

        questionText:
            'a) Factorise \\( h(x) = -x^2 + x + 6 \\).\n\nb) Sketch \\( y = h(x) \\), showing the vertex and all axis intercepts.\n\nc) On the same axes, sketch \\( y = h(2x) \\), stating its x-intercepts.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'horizontal stretch', 'factorisation', 'n-shaped'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '-(x^2 - x - 6) = -(x-3)(x+2)',
                    explanation: 'Roots at x = 3 and x = −2.',
                },
                {
                    stepNumber: 2,
                    description: '\\( y = h(x) \\) details.',
                    workingLatex: 'y\\text{-int}=6;\\quad \\text{max at }x=0.5,\\; y=6.25',
                    explanation: 'N-shaped, max (0.5, 6.25).',
                },
                {
                    stepNumber: 3,
                    description: '\\( y = h(2x) = -(2x-3)(2x+2) \\).',
                    workingLatex: '2x-3=0\\implies x=1.5;\\quad 2x+2=0\\implies x=-1',
                    explanation: 'Horizontal squash by factor ½: x-ints at x = −1 and x = 1.5.',
                },
                {
                    stepNumber: 4,
                    description: 'Maximum of \\( y=h(2x) \\) at x = 0.25.',
                    workingLatex: 'h(2\\cdot0.25) = h(0.5) = 6.25',
                    explanation: 'Maximum still 6.25, shifted to x = 0.25.',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch both.',
                    workingLatex: '',
                    explanation: 'Both n-shaped; second is a horizontal squash of the first.',
                    graph: { a: -1, b: 1, c: 6 },
                },
            ],
            finalAnswer:
                'a) \\(-(x-3)(x+2)\\). b) N-shaped, x-ints \\((-2,0),(3,0)\\), y-int \\((0,6)\\), max \\((0.5,6.25)\\). c) \\(y=h(2x)\\) has x-ints at \\(x=-1\\) and \\(x=1.5\\).',
        },
    },

    {
        id: 'qc6-060',
        topicRef: 'qc6',
        topicTitle: 'Sketching Quadratic Graphs 60',
        difficulty: 'Foundation',

        questionText:
            'A skateboarder rides along a ramp whose cross-section follows the curve \\( y = 0.1x^2 - 2x + 12 \\) for \\( 4 \\le x \\le 16 \\), where \\( x \\) and \\( y \\) are in metres.\n\na) Complete the square to find the lowest point of the ramp.\n\nb) Sketch the cross-section of the ramp over the given domain, marking the lowest point and the heights at each end.\n\nc) Find the values of \\( x \\) at which the ramp is at height 2.5 m.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quadratics', 'sketching', 'real-world', 'completing the square', 'restricted domain'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Complete the square.',
                    workingLatex:
                        '0.1(x^2-20x)+12 = 0.1[(x-10)^2-100]+12 = 0.1(x-10)^2+2',
                    explanation: 'Lowest point at (10, 2) — ramp is 2 m above ground at mid-point.',
                },
                {
                    stepNumber: 2,
                    description: 'Height at x = 4.',
                    workingLatex: 'y = 0.1(16) - 8 + 12 = 1.6 - 8 + 12 = 5.6',
                    explanation: '(4, 5.6).',
                },
                {
                    stepNumber: 3,
                    description: 'Height at x = 16.',
                    workingLatex: 'y = 0.1(256) - 32 + 12 = 25.6 - 32 + 12 = 5.6',
                    explanation: '(16, 5.6) — symmetric about x = 10.',
                },
                {
                    stepNumber: 4,
                    description: 'Find x when y = 2.5.',
                    workingLatex: '0.1(x-10)^2 + 2 = 2.5 \\implies (x-10)^2 = 5 \\implies x = 10 \\pm \\sqrt{5}',
                    explanation:
                        '\\(x \\approx 7.76\\) and \\(x \\approx 12.24\\) — both within the domain.',
                },
                {
                    stepNumber: 5,
                    description: 'Sketch.',
                    workingLatex: '',
                    explanation: 'U-shaped arc from (4, 5.6) dipping to (10, 2) then up to (16, 5.6).',
                },
            ],
            finalAnswer:
                'a) \\(y=0.1(x-10)^2+2\\); lowest point \\((10,2)\\). b) U-shaped arc from \\((4,5.6)\\) to \\((16,5.6)\\), dipping to \\((10,2)\\). c) \\(x = 10\\pm\\sqrt{5}\\approx 7.76\\) and \\(12.24\\) m.',
        },
    },
];
