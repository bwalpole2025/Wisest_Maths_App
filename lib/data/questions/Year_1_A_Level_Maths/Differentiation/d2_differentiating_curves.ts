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
        id: 'd2-001',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 01',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( y = x^5 \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the power rule: multiply by the index, then reduce the index by 1.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 5x^{5-1} = 5x^4',
                    explanation: 'The rule is: if \\( y = x^n \\), then \\( \\frac{\\mathrm{d}y}{\\mathrm{d}x} = nx^{n-1} \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 5x^4 \\)'
        }
    },
    {
        id: 'd2-002',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 02',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( y = x^7 \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the power rule.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 7x^6',
                    explanation: 'Multiply the coefficient by the power (here coefficient is 1), then reduce the power by 1.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 7x^6 \\)'
        }
    },
    {
        id: 'd2-003',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 03',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( y = 6x^4 \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply the coefficient by the power, then reduce the power by 1.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 6 \\times 4x^3 = 24x^3',
                    explanation: 'When there is a number in front, multiply it by the index.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 24x^3 \\)'
        }
    },
    {
        id: 'd2-004',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 04',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( y = \\sqrt{x} \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'fractional index', 'square root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite the square root as a fractional power.',
                    workingLatex: 'y = x^{1/2}',
                    explanation: '\\( \\sqrt{x} = x^{1/2} \\). Always convert roots to fractional powers before differentiating.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\tfrac{1}{2}x^{-1/2}',
                    explanation: 'Multiply by \\( \\tfrac{1}{2} \\) and reduce the index to \\( \\tfrac{1}{2} - 1 = -\\tfrac{1}{2} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Rewrite using a surd if required.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{1}{2\\sqrt{x}}',
                    explanation: '\\( x^{-1/2} = \\dfrac{1}{\\sqrt{x}} \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{1}{2\\sqrt{x}} \\)'
        }
    },
    {
        id: 'd2-005',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 05',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( y = \\dfrac{1}{x^3} \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'negative index', 'reciprocal'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite as a negative power of \\( x \\).',
                    workingLatex: 'y = x^{-3}',
                    explanation: '\\( \\dfrac{1}{x^3} = x^{-3} \\). Convert before differentiating.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -3x^{-4}',
                    explanation: 'Multiply by \\(-3\\) and reduce the index: \\(-3 - 1 = -4\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write in fraction form.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\frac{3}{x^4}',
                    explanation: '\\( x^{-4} = \\dfrac{1}{x^4} \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -\\dfrac{3}{x^4} \\)'
        }
    },
    {
        id: 'd2-006',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 06',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( y = 5x^3 - 4x^2 + 7x - 2 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'polynomial', 'sum of terms'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate each term separately.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3(5x^2) - 2(4x) + 7 - 0',
                    explanation: 'The derivative of a sum is the sum of the derivatives. The constant \\(-2\\) differentiates to 0.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 15x^2 - 8x + 7',
                    explanation: 'Collect the simplified terms.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 15x^2 - 8x + 7 \\)'
        }
    },
    {
        id: 'd2-007',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 07',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( f(x) = 2x^4 - 9x^2 + 1 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate each term.',
                    workingLatex: "f'(x) = 8x^3 - 18x",
                    explanation: 'The derivative of \\(2x^4\\) is \\(8x^3\\), of \\(-9x^2\\) is \\(-18x\\), and of the constant \\(1\\) is \\(0\\).'
                }
            ],
            finalAnswer: "\\( f'(x) = 8x^3 - 18x \\)"
        }
    },
    {
        id: 'd2-008',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 08',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\) when \\( y = 3x^{-2} + 5x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'negative index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate each term using the power rule.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3(-2)x^{-3} + 5(1)x^0',
                    explanation: '\\(x^0 = 1\\), so the derivative of \\(5x\\) is simply \\(5\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -6x^{-3} + 5',
                    explanation: 'Or equivalently \\( -\\dfrac{6}{x^3} + 5 \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -\\dfrac{6}{x^3} + 5 \\)'
        }
    },
    {
        id: 'd2-009',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 09',
        difficulty: 'Foundation',
        questionText: 'Expand and differentiate \\( y = x(x - 3)^2 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'expand brackets', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand \\( (x-3)^2 \\) first.',
                    workingLatex: '(x-3)^2 = x^2 - 6x + 9',
                    explanation: 'Square the bracket before multiplying.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply by \\( x \\).',
                    workingLatex: 'y = x(x^2 - 6x + 9) = x^3 - 6x^2 + 9x',
                    explanation: 'Distribute the \\( x \\) across every term.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate term by term.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 12x + 9',
                    explanation: 'Apply the power rule to each term.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 12x + 9 \\)'
        }
    },
    {
        id: 'd2-010',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 10',
        difficulty: 'Foundation',
        questionText: 'Expand and differentiate \\( y = (2x + 1)(x - 4) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'expand brackets', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the brackets.',
                    workingLatex: 'y = 2x^2 - 8x + x - 4 = 2x^2 - 7x - 4',
                    explanation: 'FOIL: \\( 2x \\cdot x = 2x^2 \\), \\( 2x \\cdot (-4) = -8x \\), \\( 1 \\cdot x = x \\), \\( 1 \\cdot (-4) = -4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4x - 7',
                    explanation: 'Apply the power rule to \\(2x^2\\) and \\(-7x\\); the constant \\(-4\\) disappears.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 4x - 7 \\)'
        }
    },
    {
        id: 'd2-011',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 11',
        difficulty: 'Foundation',
        questionText: 'Find \\( f\'(x) \\) for \\( f(x) = \\dfrac{x^3 + 4x}{x} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'simplify fraction', 'power rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Split the fraction by dividing each term in the numerator by \\( x \\).',
                    workingLatex: 'f(x) = \\frac{x^3}{x} + \\frac{4x}{x} = x^2 + 4',
                    explanation: 'Simplify before differentiating — never try to differentiate a fraction directly in this form.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate.',
                    workingLatex: "f'(x) = 2x",
                    explanation: 'The constant \\(4\\) differentiates to \\(0\\).'
                }
            ],
            finalAnswer: "\\( f'(x) = 2x \\)"
        }
    },
    {
        id: 'd2-012',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 12',
        difficulty: 'Foundation',
        questionText: 'Simplify and differentiate \\( y = \\dfrac{x^4 - 3x^2}{x^2} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'simplify fraction', 'power rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide each term in the numerator by \\( x^2 \\).',
                    workingLatex: 'y = \\frac{x^4}{x^2} - \\frac{3x^2}{x^2} = x^2 - 3',
                    explanation: 'This gives a simple polynomial to differentiate.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x',
                    explanation: 'The constant \\(-3\\) differentiates to \\(0\\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 2x \\)'
        }
    },
    {
        id: 'd2-013',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 13',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( y = 4\\sqrt{x} - \\dfrac{2}{x} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'fractional index', 'negative index', 'power rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite using index notation.',
                    workingLatex: 'y = 4x^{1/2} - 2x^{-1}',
                    explanation: '\\( \\sqrt{x} = x^{1/2} \\) and \\( \\dfrac{1}{x} = x^{-1} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate each term.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4 \\cdot \\tfrac{1}{2} x^{-1/2} - 2(-1)x^{-2} = 2x^{-1/2} + 2x^{-2}',
                    explanation: 'Apply the power rule to each term separately.'
                },
                {
                    stepNumber: 3,
                    description: 'Rewrite in standard form.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{2}{\\sqrt{x}} + \\frac{2}{x^2}',
                    explanation: 'Convert negative/fractional indices back to fractions or surds.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{2}{\\sqrt{x}} + \\dfrac{2}{x^2} \\)'
        }
    },
    {
        id: 'd2-014',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 14',
        difficulty: 'Foundation',
        questionText: 'Find the gradient of \\( y = 3x^2 - 5x + 1 \\) at \\( x = 2 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'gradient at a point', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate \\( y \\).',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 6x - 5',
                    explanation: 'Power rule applied to each term.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( x = 2 \\).',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\bigg|_{x=2} = 6(2) - 5 = 12 - 5 = 7',
                    explanation: 'Substitute the given \\( x \\)-value into the derivative.'
                }
            ],
            finalAnswer: 'Gradient \\( = 7 \\)'
        }
    },
    {
        id: 'd2-015',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 15',
        difficulty: 'Foundation',
        questionText: 'Find the gradient of the curve \\( y = 2x^3 - x \\) at the point \\( (1, 1) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'gradient at a point', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 6x^2 - 1',
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( x = 1 \\).',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 6(1)^2 - 1 = 5',
                    explanation: 'The gradient at \\( (1,1) \\) is the value of the derivative when \\( x = 1 \\).'
                }
            ],
            finalAnswer: 'Gradient \\( = 5 \\)'
        }
    },
    {
        id: 'd2-016',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 16',
        difficulty: 'Foundation',
        questionText: 'Find the gradient of \\( f(x) = 2\\sqrt{x} \\) at the point \\( (9, 6) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'fractional index', 'gradient at a point'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( f(x) \\) using index notation.',
                    workingLatex: 'f(x) = 2x^{1/2}',
                    explanation: 'Convert the square root to a fractional power.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate.',
                    workingLatex: "f'(x) = 2 \\cdot \\tfrac{1}{2} x^{-1/2} = x^{-1/2} = \\frac{1}{\\sqrt{x}}",
                    explanation: 'Apply the power rule and simplify.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( x = 9 \\).',
                    workingLatex: "f'(9) = \\frac{1}{\\sqrt{9}} = \\frac{1}{3}",
                    explanation: '\\( \\sqrt{9} = 3 \\).'
                }
            ],
            finalAnswer: 'Gradient \\( = \\dfrac{1}{3} \\)'
        }
    },
    {
        id: 'd2-017',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 17',
        difficulty: 'Foundation',
        questionText: 'Find the gradient of \\( y = x^4 - 3x^2 + 2 \\) when \\( x = -1 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'gradient at a point', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3 - 6x',
                    explanation: 'Term-by-term differentiation.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( x = -1 \\).',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4(-1)^3 - 6(-1) = -4 + 6 = 2',
                    explanation: 'Be careful with negative values: \\((-1)^3 = -1\\).'
                }
            ],
            finalAnswer: 'Gradient \\( = 2 \\)'
        }
    },
    {
        id: 'd2-018',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 18',
        difficulty: 'Foundation',
        questionText: 'Find the coordinates of the point on \\( y = x^2 - 6x + 5 \\) where the gradient is \\( 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'stationary point', 'gradient equals zero'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x - 6',
                    explanation: 'The gradient function gives the slope at any point.'
                },
                {
                    stepNumber: 2,
                    description: 'Set the derivative equal to 0.',
                    workingLatex: '2x - 6 = 0 \\implies x = 3',
                    explanation: 'A gradient of 0 means the curve is neither rising nor falling at that point.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( y \\)-coordinate by substituting \\( x = 3 \\) into the original equation.',
                    workingLatex: 'y = (3)^2 - 6(3) + 5 = 9 - 18 + 5 = -4',
                    explanation: 'Always substitute back into \\( y \\) (not \\( \\frac{\\mathrm{d}y}{\\mathrm{d}x} \\)) to find the \\(y\\)-coordinate.'
                }
            ],
            finalAnswer: '\\( (3,\\ -4) \\)'
        }
    },
    {
        id: 'd2-019',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 19',
        difficulty: 'Foundation',
        questionText: 'Find the coordinates of the points on \\( y = x^3 - 3x \\) where the gradient is \\( 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'stationary points', 'cubic', 'gradient equals zero'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 3',
                    explanation: 'Apply the power rule term by term.'
                },
                {
                    stepNumber: 2,
                    description: 'Set equal to 0 and solve.',
                    workingLatex: '3x^2 - 3 = 0 \\implies x^2 = 1 \\implies x = \\pm 1',
                    explanation: 'Factorise or rearrange to find both values of \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( y \\)-coordinates.',
                    workingLatex: 'x=1: y = 1 - 3 = -2; \\quad x=-1: y = -1 + 3 = 2',
                    explanation: 'Substitute each \\( x \\) back into \\( y = x^3 - 3x \\).'
                }
            ],
            finalAnswer: '\\( (1,\\ -2) \\) and \\( (-1,\\ 2) \\)'
        }
    },
    {
        id: 'd2-020',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 20',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the tangent to \\( y = x^2 + 3x \\) at the point \\( (1, 4) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'tangent', 'equation of line'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate to find the gradient function.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x + 3',
                    explanation: 'The derivative gives the gradient of the tangent at any point.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the gradient at \\( x = 1 \\).',
                    workingLatex: 'm = 2(1) + 3 = 5',
                    explanation: 'Substitute \\( x = 1 \\) into the derivative.'
                },
                {
                    stepNumber: 3,
                    description: 'Use \\( y - y_1 = m(x - x_1) \\) with \\( m = 5 \\) and the point \\( (1, 4) \\).',
                    workingLatex: 'y - 4 = 5(x - 1) \\implies y = 5x - 1',
                    explanation: 'Rearrange to the required form \\( y = mx + c \\).'
                }
            ],
            finalAnswer: '\\( y = 5x - 1 \\)'
        }
    },
    {
        id: 'd2-021',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 21',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the tangent to \\( y = 2x^3 - 5 \\) at the point \\( (1, -3) \\). Give your answer in the form \\( ax + by + c = 0 \\), where \\( a \\), \\( b \\), and \\( c \\) are integers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'tangent', 'equation of line', 'integer form'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 6x^2',
                    explanation: 'Apply the power rule to \\( 2x^3 \\); the constant \\(-5\\) differentiates to \\(0\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient at \\( x = 1 \\).',
                    workingLatex: 'm = 6(1)^2 = 6',
                    explanation: 'Substitute \\( x = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equation of tangent.',
                    workingLatex: 'y - (-3) = 6(x - 1) \\implies y = 6x - 9',
                    explanation: 'Use point-slope form and expand.'
                },
                {
                    stepNumber: 4,
                    description: 'Rearrange to the required form.',
                    workingLatex: '6x - y - 9 = 0',
                    explanation: 'Move everything to one side so coefficients are integers.'
                }
            ],
            finalAnswer: '\\( 6x - y - 9 = 0 \\)'
        }
    },
    {
        id: 'd2-022',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 22',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the normal to \\( y = x^2 - 4x + 3 \\) at the point \\( (3, 0) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'normal', 'equation of line', 'perpendicular gradient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate to find the gradient of the curve.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x - 4',
                    explanation: 'The derivative gives the gradient of the tangent at any point.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the gradient of the tangent at \\( x = 3 \\).',
                    workingLatex: 'm_{\\text{tangent}} = 2(3) - 4 = 2',
                    explanation: 'Substitute \\( x = 3 \\) into the derivative.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the gradient of the normal.',
                    workingLatex: 'm_{\\text{normal}} = -\\frac{1}{2}',
                    explanation: 'The normal is perpendicular to the tangent, so its gradient is the negative reciprocal: \\( -\\dfrac{1}{m} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write the equation of the normal through \\( (3, 0) \\).',
                    workingLatex: 'y - 0 = -\\tfrac{1}{2}(x - 3) \\implies y = -\\tfrac{1}{2}x + \\tfrac{3}{2}',
                    explanation: 'Use \\( y - y_1 = m(x - x_1) \\) with the normal gradient and the given point.'
                }
            ],
            finalAnswer: '\\( y = -\\dfrac{1}{2}x + \\dfrac{3}{2} \\)'
        }
    },
    {
        id: 'd2-023',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 23',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the normal to \\( y = x^3 - 2x + 1 \\) at the point \\( (2, 5) \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'normal', 'equation of line', 'integer form'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 2',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient of tangent at \\( x = 2 \\).',
                    workingLatex: 'm_{\\text{tangent}} = 3(4) - 2 = 10',
                    explanation: '\\( 3(2)^2 - 2 = 12 - 2 = 10 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Gradient of normal.',
                    workingLatex: 'm_{\\text{normal}} = -\\frac{1}{10}',
                    explanation: 'Negative reciprocal of \\( 10 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Equation of normal through \\( (2, 5) \\).',
                    workingLatex: 'y - 5 = -\\tfrac{1}{10}(x - 2) \\implies 10y - 50 = -(x - 2) \\implies x + 10y - 52 = 0',
                    explanation: 'Multiply through by 10 to clear the fraction, then rearrange.'
                }
            ],
            finalAnswer: '\\( x + 10y - 52 = 0 \\)'
        }
    },
    {
        id: 'd2-024',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 24',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( f(x) = (x+2)(x-5) \\) and find the value of \\( x \\) where \\( f\'(x) = 3 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'expand brackets', 'solve for x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the brackets.',
                    workingLatex: 'f(x) = x^2 - 3x - 10',
                    explanation: '\\( (x+2)(x-5) = x^2 - 5x + 2x - 10 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate.',
                    workingLatex: "f'(x) = 2x - 3",
                    explanation: 'Apply the power rule term by term.'
                },
                {
                    stepNumber: 3,
                    description: "Set \\( f'(x) = 3 \\) and solve.",
                    workingLatex: '2x - 3 = 3 \\implies 2x = 6 \\implies x = 3',
                    explanation: 'Substitute the given gradient value and solve for \\( x \\).'
                }
            ],
            finalAnswer: '\\( x = 3 \\)'
        }
    },
    {
        id: 'd2-025',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 25',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( y = \\dfrac{x^3 - 5x^2 + 2x}{x} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'simplify fraction', 'power rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide each term in the numerator by \\( x \\).',
                    workingLatex: 'y = x^2 - 5x + 2',
                    explanation: '\\( \\dfrac{x^3}{x} = x^2 \\), \\( \\dfrac{-5x^2}{x} = -5x \\), \\( \\dfrac{2x}{x} = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x - 5',
                    explanation: 'The constant \\(2\\) differentiates to \\(0\\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 2x - 5 \\)'
        }
    },
    {
        id: 'd2-026',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 26',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\) when \\( y = \\dfrac{3x^3 + x}{\\sqrt{x}} \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'simplify fraction', 'fractional index', 'power rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( \\sqrt{x} = x^{1/2} \\) and divide each numerator term.',
                    workingLatex: 'y = \\frac{3x^3}{x^{1/2}} + \\frac{x}{x^{1/2}} = 3x^{5/2} + x^{1/2}',
                    explanation: 'Use the index law \\( \\dfrac{x^a}{x^b} = x^{a-b} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3 \\cdot \\tfrac{5}{2} x^{3/2} + \\tfrac{1}{2} x^{-1/2} = \\tfrac{15}{2}x^{3/2} + \\tfrac{1}{2}x^{-1/2}',
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 3,
                    description: 'Rewrite in a clean form.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{15}{2}x\\sqrt{x} + \\frac{1}{2\\sqrt{x}}',
                    explanation: '\\( x^{3/2} = x \\cdot \\sqrt{x} \\) and \\( x^{-1/2} = \\dfrac{1}{\\sqrt{x}} \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{15x\\sqrt{x}}{2} + \\dfrac{1}{2\\sqrt{x}} \\)'
        }
    },
    {
        id: 'd2-027',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 27',
        difficulty: 'Foundation',
        questionText: 'Expand then differentiate \\( y = (3x - 1)^2 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'expand brackets', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the square.',
                    workingLatex: '(3x-1)^2 = 9x^2 - 6x + 1',
                    explanation: '\\( (a - b)^2 = a^2 - 2ab + b^2 \\) with \\( a = 3x \\), \\( b = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 18x - 6',
                    explanation: 'Apply the power rule to each term; the constant \\(1\\) differentiates to \\(0\\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 18x - 6 \\)'
        }
    },
    {
        id: 'd2-028',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 28',
        difficulty: 'Foundation',
        questionText: 'Find the gradient of \\( y = \\dfrac{x^2 - 4}{x} \\) at the point \\( (-2, 0) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'simplify fraction', 'gradient at a point'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Simplify by splitting the fraction.',
                    workingLatex: 'y = x - 4x^{-1}',
                    explanation: '\\( \\dfrac{x^2}{x} = x \\) and \\( \\dfrac{-4}{x} = -4x^{-1} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 1 + 4x^{-2} = 1 + \\frac{4}{x^2}',
                    explanation: 'Derivative of \\( -4x^{-1} \\) is \\( +4x^{-2} \\) (multiply by \\(-1\\), reduce index by 1).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( x = -2 \\).',
                    workingLatex: '1 + \\frac{4}{(-2)^2} = 1 + \\frac{4}{4} = 1 + 1 = 2',
                    explanation: '\\( (-2)^2 = 4 \\).'
                }
            ],
            finalAnswer: 'Gradient \\( = 2 \\)'
        }
    },
    {
        id: 'd2-029',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 29',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( y = \\sqrt{x}\\,(x - 4) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'expand brackets', 'fractional index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite and expand.',
                    workingLatex: 'y = x^{1/2}(x - 4) = x^{3/2} - 4x^{1/2}',
                    explanation: 'Multiply \\( x^{1/2} \\) by each term: \\( x^{1/2} \\cdot x = x^{3/2} \\) and \\( x^{1/2} \\cdot (-4) = -4x^{1/2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\tfrac{3}{2}x^{1/2} - 4 \\cdot \\tfrac{1}{2}x^{-1/2} = \\tfrac{3}{2}\\sqrt{x} - \\frac{2}{\\sqrt{x}}',
                    explanation: 'Apply the power rule to each fractional-index term.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{3\\sqrt{x}}{2} - \\dfrac{2}{\\sqrt{x}} \\)'
        }
    },
    {
        id: 'd2-030',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 30',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the tangent to \\( y = (x-1)(x+3) \\) at the point \\( (2, 5) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'tangent', 'expand brackets', 'equation of line'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the brackets.',
                    workingLatex: 'y = x^2 + 2x - 3',
                    explanation: '\\( (x-1)(x+3) = x^2 + 3x - x - 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x + 2',
                    explanation: 'Power rule applied term by term.'
                },
                {
                    stepNumber: 3,
                    description: 'Gradient at \\( x = 2 \\).',
                    workingLatex: 'm = 2(2) + 2 = 6',
                    explanation: 'Substitute \\( x = 2 \\) into the derivative.'
                },
                {
                    stepNumber: 4,
                    description: 'Equation of tangent through \\( (2, 5) \\).',
                    workingLatex: 'y - 5 = 6(x - 2) \\implies y = 6x - 7',
                    explanation: 'Expand and rearrange to \\( y = mx + c \\).'
                }
            ],
            finalAnswer: '\\( y = 6x - 7 \\)'
        }
    },
    {
        id: 'd2-031',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 31',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the normal to \\( y = 4\\sqrt{x} \\) at the point \\( (4, 8) \\). Give your answer in the form \\( ax + by + c = 0 \\), where \\( a \\), \\( b \\), and \\( c \\) are integers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'normal', 'fractional index', 'equation of line'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write as a power of \\( x \\) and differentiate.',
                    workingLatex: 'y = 4x^{1/2} \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x^{-1/2} = \\frac{2}{\\sqrt{x}}',
                    explanation: 'Apply the power rule to \\( 4x^{1/2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient of tangent at \\( x = 4 \\).',
                    workingLatex: 'm_{\\text{tangent}} = \\frac{2}{\\sqrt{4}} = \\frac{2}{2} = 1',
                    explanation: 'Substitute \\( x = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Gradient of normal.',
                    workingLatex: 'm_{\\text{normal}} = -1',
                    explanation: 'Negative reciprocal of \\(1\\) is \\(-1\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Equation of normal through \\( (4, 8) \\).',
                    workingLatex: 'y - 8 = -1(x - 4) \\implies y = -x + 12',
                    explanation: 'Point-slope form with \\( m = -1 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Rearrange to integer form.',
                    workingLatex: 'x + y - 12 = 0',
                    explanation: 'Add \\( x \\) and subtract \\( 12 \\) from both sides.'
                }
            ],
            finalAnswer: '\\( x + y - 12 = 0 \\)'
        }
    },
    {
        id: 'd2-032',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 32',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) has equation \\( y = x^3 - 4x + 3 \\).\n(a) Find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\).\n(b) Show that the point \\( P(2, 3) \\) lies on \\( C \\).\n(c) Find the equation of the tangent to \\( C \\) at \\( P \\), giving your answer in the form \\( y = mx + c \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'tangent', 'show that', 'cubic', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 4',
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( x = 2 \\) into \\( y = x^3 - 4x + 3 \\).',
                    workingLatex: 'y = (2)^3 - 4(2) + 3 = 8 - 8 + 3 = 3 \\checkmark',
                    explanation: 'The point \\( (2, 3) \\) satisfies the equation, so it lies on \\( C \\).'
                },
                {
                    stepNumber: 3,
                    description: '(c) Gradient at \\( P(2, 3) \\).',
                    workingLatex: 'm = 3(2)^2 - 4 = 12 - 4 = 8',
                    explanation: 'Substitute \\( x = 2 \\) into the derivative.'
                },
                {
                    stepNumber: 4,
                    description: 'Write the tangent equation.',
                    workingLatex: 'y - 3 = 8(x - 2) \\implies y = 8x - 13',
                    explanation: 'Use point-slope form and rearrange.'
                }
            ],
            finalAnswer: '(a) \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 4 \\) \\newline (b) \\( y = 8 - 8 + 3 = 3 \\) ✓ \\newline (c) \\( y = 8x - 13 \\)'
        }
    },
    {
        id: 'd2-033',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 33',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) has equation \\( y = 2x^2 - 7x + 4 \\).\n(a) Find the gradient of \\( C \\) at the point \\( A(3, 1) \\).\n(b) Hence find the equation of the normal to \\( C \\) at \\( A \\), giving your answer in the form \\( ax + by + c = 0 \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'normal', 'quadratic', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4x - 7',
                    explanation: 'Power rule applied to each term.'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient at \\( x = 3 \\).',
                    workingLatex: 'm_{\\text{tangent}} = 4(3) - 7 = 5',
                    explanation: 'Substitute \\( x = 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Gradient of normal.',
                    workingLatex: 'm_{\\text{normal}} = -\\frac{1}{5}',
                    explanation: 'The normal gradient is the negative reciprocal.'
                },
                {
                    stepNumber: 4,
                    description: 'Equation of normal through \\( (3, 1) \\).',
                    workingLatex: 'y - 1 = -\\tfrac{1}{5}(x - 3) \\implies 5y - 5 = -(x - 3) \\implies x + 5y - 8 = 0',
                    explanation: 'Multiply through by 5 to clear the fraction, then rearrange.'
                }
            ],
            finalAnswer: '(a) Gradient \\( = 5 \\) \\newline (b) \\( x + 5y - 8 = 0 \\)'
        }
    },
    {
        id: 'd2-034',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 34',
        difficulty: 'Foundation',
        questionText: 'The function \\( f(x) = x^3 - 6x^2 + 9x + 2 \\).\n(a) Find \\( f\'(x) \\).\n(b) Find the coordinates of the two stationary points of the curve \\( y = f(x) \\).\n(c) Find the equation of the tangent to the curve at the point where \\( x = 4 \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'stationary points', 'tangent', 'cubic', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "(a) Differentiate \\( f(x) \\).",
                    workingLatex: "f'(x) = 3x^2 - 12x + 9",
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 2,
                    description: "(b) Set \\( f'(x) = 0 \\).",
                    workingLatex: '3x^2 - 12x + 9 = 0 \\implies x^2 - 4x + 3 = 0 \\implies (x-1)(x-3) = 0',
                    explanation: 'Divide through by 3, then factorise.'
                },
                {
                    stepNumber: 3,
                    description: 'So \\( x = 1 \\) or \\( x = 3 \\). Find the \\( y \\)-coordinates.',
                    workingLatex: 'f(1) = 1 - 6 + 9 + 2 = 6; \\quad f(3) = 27 - 54 + 27 + 2 = 2',
                    explanation: 'Substitute each \\( x \\) back into \\( f(x) \\).'
                },
                {
                    stepNumber: 4,
                    description: '(c) Gradient at \\( x = 4 \\).',
                    workingLatex: "f'(4) = 3(16) - 12(4) + 9 = 48 - 48 + 9 = 9",
                    explanation: 'Substitute \\( x = 4 \\) into \\( f\'(x) \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Point on curve when \\( x = 4 \\).',
                    workingLatex: 'f(4) = 64 - 96 + 36 + 2 = 6',
                    explanation: 'Substitute into \\( f(x) \\) to find the \\( y \\)-coordinate.'
                },
                {
                    stepNumber: 6,
                    description: 'Tangent at \\( (4, 6) \\) with gradient \\( 9 \\).',
                    workingLatex: 'y - 6 = 9(x - 4) \\implies y = 9x - 30',
                    explanation: 'Use point-slope form and rearrange.'
                }
            ],
            finalAnswer: "(a) \\( f'(x) = 3x^2 - 12x + 9 \\) \\newline (b) \\( (1,\\, 6) \\) and \\( (3,\\, 2) \\) \\newline (c) \\( y = 9x - 30 \\)"
        }
    },
    {
        id: 'd2-035',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 35',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) has equation \\( y = f(x) \\), where \\( f(x) = \\dfrac{x^3 - 4x}{\\sqrt{x}} \\) for \\( x > 0 \\).\n(a) Show that \\( f(x) \\) can be written in the form \\( ax^p + bx^q \\), stating the values of \\( a \\), \\( p \\), \\( b \\), and \\( q \\).\n(b) Find \\( f\'(x) \\).\n(c) Find the equation of the tangent to \\( C \\) at the point where \\( x = 4 \\), giving your answer in the form \\( y = mx + c \\).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'fractional index', 'simplify', 'tangent', 'exam style', 'show that'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write \\( \\sqrt{x} = x^{1/2} \\) and divide each term.',
                    workingLatex: 'f(x) = \\frac{x^3}{x^{1/2}} - \\frac{4x}{x^{1/2}} = x^{5/2} - 4x^{1/2}',
                    explanation: 'Use \\( \\dfrac{x^a}{x^b} = x^{a-b} \\): \\( x^{3-1/2} = x^{5/2} \\) and \\( x^{1-1/2} = x^{1/2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'State the constants.',
                    workingLatex: 'a = 1,\\ p = \\tfrac{5}{2},\\ b = -4,\\ q = \\tfrac{1}{2}',
                    explanation: 'Match the form \\( ax^p + bx^q \\).'
                },
                {
                    stepNumber: 3,
                    description: "(b) Differentiate \\( f(x) = x^{5/2} - 4x^{1/2} \\).",
                    workingLatex: "f'(x) = \\tfrac{5}{2}x^{3/2} - 4 \\cdot \\tfrac{1}{2}x^{-1/2} = \\tfrac{5}{2}x^{3/2} - \\frac{2}{\\sqrt{x}}",
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 4,
                    description: '(c) Find the \\( y \\)-coordinate when \\( x = 4 \\).',
                    workingLatex: 'f(4) = 4^{5/2} - 4 \\cdot 4^{1/2} = 32 - 8 = 24',
                    explanation: '\\( 4^{5/2} = (\\sqrt{4})^5 = 2^5 = 32 \\) and \\( 4^{1/2} = 2 \\).'
                },
                {
                    stepNumber: 5,
                    description: "Gradient at \\( x = 4 \\).",
                    workingLatex: "f'(4) = \\tfrac{5}{2}(4)^{3/2} - \\frac{2}{\\sqrt{4}} = \\tfrac{5}{2}(8) - 1 = 20 - 1 = 19",
                    explanation: '\\( 4^{3/2} = (\\sqrt{4})^3 = 8 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Tangent through \\( (4, 24) \\) with gradient \\( 19 \\).',
                    workingLatex: 'y - 24 = 19(x - 4) \\implies y = 19x - 52',
                    explanation: 'Point-slope form, expanded and rearranged.'
                }
            ],
            finalAnswer: "(a) \\( f(x) = x^{5/2} - 4x^{1/2} \\); \\( a=1, p=\\tfrac{5}{2}, b=-4, q=\\tfrac{1}{2} \\) \\newline (b) \\( f'(x) = \\dfrac{5}{2}x^{3/2} - \\dfrac{2}{\\sqrt{x}} \\) \\newline (c) \\( y = 19x - 52 \\)"
        }
    }
];


