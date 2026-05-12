import { Question } from "@/lib/types";

/**
 * Topic: The Discriminant
 * Ref:   a3
 */
export const questions: Question[] = [

    {
        id: 'i1-001',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 01',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int x^6 \\, \\mathrm{d}x \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'power rule', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the integration power rule: increase the index by 1 and divide by the new index.',
                    workingLatex: '\\int x^6 \\, \\mathrm{d}x = \\frac{x^7}{7} + C',
                    explanation: 'The rule is \\( \\displaystyle\\int x^n \\, \\mathrm{d}x = \\dfrac{x^{n+1}}{n+1} + C \\). Here \\( n = 6 \\), so the index becomes 7.'
                }
            ],
            finalAnswer: '\\( \\dfrac{x^7}{7} + C \\)'
        }
    },
    {
        id: 'i1-002',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 02',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int 5x^4 \\, \\mathrm{d}x \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'power rule', 'coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take the constant outside the integral, then integrate.',
                    workingLatex: '\\int 5x^4 \\, \\mathrm{d}x = 5 \\cdot \\frac{x^5}{5} + C = x^5 + C',
                    explanation: 'The constant 5 multiplies the integral. Increase the index from 4 to 5 and divide by 5; the 5s cancel.'
                }
            ],
            finalAnswer: '\\( x^5 + C \\)'
        }
    },
    {
        id: 'i1-003',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 03',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int 8x \\, \\mathrm{d}x \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'power rule', 'linear'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( 8x = 8x^1 \\) and apply the power rule.',
                    workingLatex: '\\int 8x \\, \\mathrm{d}x = 8 \\cdot \\frac{x^2}{2} + C = 4x^2 + C',
                    explanation: 'Increase the index from 1 to 2 and divide by 2; \\( 8 \\div 2 = 4 \\).'
                }
            ],
            finalAnswer: '\\( 4x^2 + C \\)'
        }
    },
    {
        id: 'i1-004',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 04',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int 12 \\, \\mathrm{d}x \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'constant', 'power rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write 12 as \\( 12x^0 \\) and integrate.',
                    workingLatex: '\\int 12 \\, \\mathrm{d}x = 12x + C',
                    explanation: 'Integrating a constant \\( k \\) gives \\( kx + C \\). The index increases from 0 to 1 and we divide by 1.'
                }
            ],
            finalAnswer: '\\( 12x + C \\)'
        }
    },
    {
        id: 'i1-005',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 05',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int -3x^2 \\, \\mathrm{d}x \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'power rule', 'negative coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the power rule with the negative constant.',
                    workingLatex: '\\int -3x^2 \\, \\mathrm{d}x = -3 \\cdot \\frac{x^3}{3} + C = -x^3 + C',
                    explanation: 'Increase the index from 2 to 3 and divide by 3; \\( -3 \\div 3 = -1 \\).'
                }
            ],
            finalAnswer: '\\( -x^3 + C \\)'
        }
    },
    {
        id: 'i1-006',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 06',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int x^{-3} \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'power rule', 'negative index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the power rule with \\( n = -3 \\).',
                    workingLatex: '\\int x^{-3} \\, \\mathrm{d}x = \\frac{x^{-2}}{-2} + C = -\\frac{1}{2x^2} + C',
                    explanation: 'Increase the index from \\(-3\\) to \\(-2\\) and divide by \\(-2\\).'
                }
            ],
            finalAnswer: '\\( -\\dfrac{1}{2x^2} + C \\)'
        }
    },
    {
        id: 'i1-007',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 07',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int \\sqrt{x} \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'fractional index', 'square root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\sqrt{x} = x^{1/2} \\).',
                    workingLatex: '\\int x^{1/2} \\, \\mathrm{d}x',
                    explanation: 'Always convert surds to fractional powers before integrating.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule.',
                    workingLatex: '= \\frac{x^{3/2}}{3/2} + C = \\frac{2}{3}x^{3/2} + C',
                    explanation: 'Increase the index from \\( \\tfrac{1}{2} \\) to \\( \\tfrac{3}{2} \\) and divide by \\( \\tfrac{3}{2} \\) — dividing by a fraction is the same as multiplying by its reciprocal.'
                },
                {
                    stepNumber: 3,
                    description: 'Rewrite using surd notation if required.',
                    workingLatex: '= \\frac{2}{3}x\\sqrt{x} + C',
                    explanation: '\\( x^{3/2} = x \\cdot \\sqrt{x} \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{2}{3}x^{3/2} + C \\)'
        }
    },
    {
        id: 'i1-008',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 08',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int \\frac{4}{x^2} \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'negative index', 'reciprocal'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite as a negative power of \\( x \\).',
                    workingLatex: '\\int 4x^{-2} \\, \\mathrm{d}x',
                    explanation: '\\( \\dfrac{4}{x^2} = 4x^{-2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: '= 4 \\cdot \\frac{x^{-1}}{-1} + C = -4x^{-1} + C = -\\frac{4}{x} + C',
                    explanation: 'Increase the index from \\(-2\\) to \\(-1\\) and divide by \\(-1\\).'
                }
            ],
            finalAnswer: '\\( -\\dfrac{4}{x} + C \\)'
        }
    },
    {
        id: 'i1-009',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 09',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int (3x^2 + 5x - 2) \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'polynomial', 'sum of terms'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate each term separately.',
                    workingLatex: '\\int 3x^2 \\, \\mathrm{d}x + \\int 5x \\, \\mathrm{d}x + \\int (-2) \\, \\mathrm{d}x',
                    explanation: 'The integral of a sum equals the sum of the integrals.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule to each term.',
                    workingLatex: '= 3 \\cdot \\frac{x^3}{3} + 5 \\cdot \\frac{x^2}{2} - 2x + C',
                    explanation: 'Increase each index by 1 and divide by the new index.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: '= x^3 + \\frac{5x^2}{2} - 2x + C',
                    explanation: '\\( 3 \\div 3 = 1 \\). Only one constant of integration is needed for the whole expression.'
                }
            ],
            finalAnswer: '\\( x^3 + \\dfrac{5x^2}{2} - 2x + C \\)'
        }
    },
    {
        id: 'i1-010',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 10',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int (4x^3 - 6x^2 + 1) \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'polynomial', 'sum of terms'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate each term separately.',
                    workingLatex: '= 4 \\cdot \\frac{x^4}{4} - 6 \\cdot \\frac{x^3}{3} + x + C',
                    explanation: 'Apply \\( \\int x^n \\, \\mathrm{d}x = \\dfrac{x^{n+1}}{n+1} \\) to each term.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '= x^4 - 2x^3 + x + C',
                    explanation: '\\( 4 \\div 4 = 1 \\) and \\( 6 \\div 3 = 2 \\).'
                }
            ],
            finalAnswer: '\\( x^4 - 2x^3 + x + C \\)'
        }
    },
    {
        id: 'i1-011',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 11',
        difficulty: 'Foundation',
        questionText: 'Expand and then integrate \\( (x + 3)(x - 2) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand brackets', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the bracket.',
                    workingLatex: '(x+3)(x-2) = x^2 + x - 6',
                    explanation: 'FOIL: \\( x^2 - 2x + 3x - 6 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate term by term.',
                    workingLatex: '\\int (x^2 + x - 6) \\, \\mathrm{d}x = \\frac{x^3}{3} + \\frac{x^2}{2} - 6x + C',
                    explanation: 'Apply the power rule to each term.'
                }
            ],
            finalAnswer: '\\( \\dfrac{x^3}{3} + \\dfrac{x^2}{2} - 6x + C \\)'
        }
    },
    {
        id: 'i1-012',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 12',
        difficulty: 'Foundation',
        questionText: 'Expand and integrate \\( x^2(3x - 5) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand brackets', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand.',
                    workingLatex: 'x^2(3x - 5) = 3x^3 - 5x^2',
                    explanation: 'Multiply \\( x^2 \\) by each term inside the bracket.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: '\\int (3x^3 - 5x^2) \\, \\mathrm{d}x = \\frac{3x^4}{4} - \\frac{5x^3}{3} + C',
                    explanation: 'Apply the power rule to each term.'
                }
            ],
            finalAnswer: '\\( \\dfrac{3x^4}{4} - \\dfrac{5x^3}{3} + C \\)'
        }
    },
    {
        id: 'i1-013',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 13',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int (2x - 1)^2 \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand brackets', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand \\( (2x-1)^2 \\).',
                    workingLatex: '(2x-1)^2 = 4x^2 - 4x + 1',
                    explanation: '\\( (a-b)^2 = a^2 - 2ab + b^2 \\) with \\( a = 2x \\), \\( b = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate each term.',
                    workingLatex: '\\int (4x^2 - 4x + 1) \\, \\mathrm{d}x = \\frac{4x^3}{3} - 2x^2 + x + C',
                    explanation: 'Power rule applied to each term.'
                }
            ],
            finalAnswer: '\\( \\dfrac{4x^3}{3} - 2x^2 + x + C \\)'
        }
    },
    {
        id: 'i1-014',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 14',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int \\left( x^{1/3} + 2x \\right) \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'fractional index', 'sum of terms'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate each term.',
                    workingLatex: '\\int x^{1/3} \\, \\mathrm{d}x + \\int 2x \\, \\mathrm{d}x',
                    explanation: 'Integrate term by term.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule.',
                    workingLatex: '= \\frac{x^{4/3}}{4/3} + x^2 + C = \\frac{3}{4}x^{4/3} + x^2 + C',
                    explanation: 'For \\( x^{1/3} \\): new index \\( = \\tfrac{4}{3} \\); dividing by \\( \\tfrac{4}{3} \\) gives \\( \\times \\tfrac{3}{4} \\). For \\( 2x \\): \\( 2 \\cdot \\dfrac{x^2}{2} = x^2 \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{3}{4}x^{4/3} + x^2 + C \\)'
        }
    },
    {
        id: 'i1-015',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 15',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int \\frac{x^3 - 4x}{x} \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'simplify fraction', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Simplify the fraction by dividing each term by \\( x \\).',
                    workingLatex: '\\frac{x^3 - 4x}{x} = x^2 - 4',
                    explanation: '\\( \\dfrac{x^3}{x} = x^2 \\) and \\( \\dfrac{-4x}{x} = -4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: '\\int (x^2 - 4) \\, \\mathrm{d}x = \\frac{x^3}{3} - 4x + C',
                    explanation: 'Power rule applied to \\( x^2 \\); integrating the constant \\(-4\\) gives \\(-4x\\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{x^3}{3} - 4x + C \\)'
        }
    },
    {
        id: 'i1-016',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 16',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int \\frac{6x^4 + 3x^2}{3x} \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'simplify fraction', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide each term in the numerator by \\( 3x \\).',
                    workingLatex: '\\frac{6x^4}{3x} + \\frac{3x^2}{3x} = 2x^3 + x',
                    explanation: '\\( \\dfrac{6x^4}{3x} = 2x^3 \\) and \\( \\dfrac{3x^2}{3x} = x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: '\\int (2x^3 + x) \\, \\mathrm{d}x = \\frac{x^4}{2} + \\frac{x^2}{2} + C',
                    explanation: '\\( 2 \\cdot \\dfrac{x^4}{4} = \\dfrac{x^4}{2} \\) and \\( \\dfrac{x^2}{2} \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{x^4}{2} + \\dfrac{x^2}{2} + C \\)'
        }
    },
    {
        id: 'i1-017',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 17',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int \\left( 3\\sqrt{x} - \\frac{2}{x^2} \\right) \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'fractional index', 'negative index', 'mixed'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite using index notation.',
                    workingLatex: '3x^{1/2} - 2x^{-2}',
                    explanation: '\\( \\sqrt{x} = x^{1/2} \\) and \\( \\dfrac{1}{x^2} = x^{-2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate each term.',
                    workingLatex: '\\int 3x^{1/2} \\, \\mathrm{d}x - \\int 2x^{-2} \\, \\mathrm{d}x = 3 \\cdot \\frac{x^{3/2}}{3/2} - 2 \\cdot \\frac{x^{-1}}{-1} + C',
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: '= 2x^{3/2} + \\frac{2}{x} + C',
                    explanation: '\\( 3 \\div \\tfrac{3}{2} = 3 \\times \\tfrac{2}{3} = 2 \\). \\( -2 \\div (-1) = 2 \\).'
                }
            ],
            finalAnswer: '\\( 2x^{3/2} + \\dfrac{2}{x} + C \\)'
        }
    },
    {
        id: 'i1-018',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 18',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int \\sqrt{x}(x + 4) \\, \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand brackets', 'fractional index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand by multiplying \\( x^{1/2} \\) through the bracket.',
                    workingLatex: '\\sqrt{x}(x+4) = x^{3/2} + 4x^{1/2}',
                    explanation: '\\( x^{1/2} \\cdot x = x^{3/2} \\) and \\( x^{1/2} \\cdot 4 = 4x^{1/2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate each term.',
                    workingLatex: '\\int (x^{3/2} + 4x^{1/2}) \\, \\mathrm{d}x = \\frac{x^{5/2}}{5/2} + 4 \\cdot \\frac{x^{3/2}}{3/2} + C',
                    explanation: 'Power rule applied to each fractional-index term.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: '= \\frac{2}{5}x^{5/2} + \\frac{8}{3}x^{3/2} + C',
                    explanation: 'Dividing by \\( \\tfrac{5}{2} \\) gives \\( \\times \\tfrac{2}{5} \\); dividing by \\( \\tfrac{3}{2} \\) gives \\( \\times \\tfrac{2}{3} \\), then \\( \\times 4 = \\tfrac{8}{3} \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{2}{5}x^{5/2} + \\dfrac{8}{3}x^{3/2} + C \\)'
        }
    },
    {
        id: 'i1-019',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 19',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int \\frac{x^2 + 5x + 6}{\\sqrt{x}} \\, \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'simplify fraction', 'fractional index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide each term by \\( x^{1/2} \\).',
                    workingLatex: 'x^{3/2} + 5x^{1/2} + 6x^{-1/2}',
                    explanation: '\\( \\dfrac{x^2}{x^{1/2}} = x^{3/2} \\), \\( \\dfrac{5x}{x^{1/2}} = 5x^{1/2} \\), \\( \\dfrac{6}{x^{1/2}} = 6x^{-1/2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate each term.',
                    workingLatex: '\\int (x^{3/2} + 5x^{1/2} + 6x^{-1/2}) \\, \\mathrm{d}x = \\frac{2}{5}x^{5/2} + \\frac{10}{3}x^{3/2} + 12x^{1/2} + C',
                    explanation: 'Apply \\( \\int x^n \\, \\mathrm{d}x = \\dfrac{x^{n+1}}{n+1} \\) to each term.'
                }
            ],
            finalAnswer: '\\( \\dfrac{2}{5}x^{5/2} + \\dfrac{10}{3}x^{3/2} + 12\\sqrt{x} + C \\)'
        }
    },
    {
        id: 'i1-020',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 20',
        difficulty: 'Foundation',
        questionText: 'Find \\( y \\) given that \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 6x^2 - 4x + 3 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'find y from dy/dx', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate the right-hand side with respect to \\( x \\).',
                    workingLatex: 'y = \\int (6x^2 - 4x + 3) \\, \\mathrm{d}x',
                    explanation: 'Integrating \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\) gives \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule to each term.',
                    workingLatex: 'y = 2x^3 - 2x^2 + 3x + C',
                    explanation: '\\( 6 \\cdot \\dfrac{x^3}{3} = 2x^3 \\), \\( 4 \\cdot \\dfrac{x^2}{2} = 2x^2 \\), \\( 3x^0 \\to 3x \\).'
                }
            ],
            finalAnswer: '\\( y = 2x^3 - 2x^2 + 3x + C \\)'
        }
    },
    {
        id: 'i1-021',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 21',
        difficulty: 'Foundation',
        questionText: 'The curve \\( y = f(x) \\) passes through the point \\( (0, 3) \\) and \\( f\'(x) = 4x - 1 \\). Find \\( f(x) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'find constant', 'equation of curve', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate \\( f\'(x) \\).',
                    workingLatex: 'f(x) = \\int (4x - 1) \\, \\mathrm{d}x = 2x^2 - x + C',
                    explanation: 'Power rule applied to each term.'
                },
                {
                    stepNumber: 2,
                    description: 'Use the point \\( (0, 3) \\) to find \\( C \\).',
                    workingLatex: 'f(0) = 3: \\quad 0 - 0 + C = 3 \\implies C = 3',
                    explanation: 'Substitute \\( x = 0 \\) and \\( f(0) = 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the full equation.',
                    workingLatex: 'f(x) = 2x^2 - x + 3',
                    explanation: 'Substitute the found value of \\( C \\).'
                }
            ],
            finalAnswer: '\\( f(x) = 2x^2 - x + 3 \\)'
        }
    },
    {
        id: 'i1-022',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 22',
        difficulty: 'Foundation',
        questionText: 'A curve passes through \\( (2, 5) \\) and has gradient function \\( f\'(x) = 3x^2 - 6x + 1 \\). Find \\( f(x) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'find constant', 'equation of curve', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate the gradient function.',
                    workingLatex: 'f(x) = \\int (3x^2 - 6x + 1) \\, \\mathrm{d}x = x^3 - 3x^2 + x + C',
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( (2, 5) \\) to find \\( C \\).',
                    workingLatex: '5 = 8 - 12 + 2 + C \\implies 5 = -2 + C \\implies C = 7',
                    explanation: 'Replace \\( x = 2 \\) and \\( f(x) = 5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'State the equation.',
                    workingLatex: 'f(x) = x^3 - 3x^2 + x + 7',
                    explanation: 'Substitute \\( C = 7 \\).'
                }
            ],
            finalAnswer: '\\( f(x) = x^3 - 3x^2 + x + 7 \\)'
        }
    },
    {
        id: 'i1-023',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 23',
        difficulty: 'Foundation',
        questionText: 'A curve \\( y = f(x) \\) passes through \\( (1, -2) \\) and \\( f\'(x) = 6x(x - 2) \\). Find \\( f(x) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand brackets', 'find constant', 'equation of curve'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand \\( f\'(x) \\).',
                    workingLatex: "f'(x) = 6x^2 - 12x",
                    explanation: 'Multiply \\( 6x \\) by each term in the bracket.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: 'f(x) = \\int (6x^2 - 12x) \\, \\mathrm{d}x = 2x^3 - 6x^2 + C',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 3,
                    description: 'Use the point \\( (1, -2) \\).',
                    workingLatex: '-2 = 2(1) - 6(1) + C = -4 + C \\implies C = 2',
                    explanation: 'Substitute \\( x = 1 \\), \\( f(1) = -2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'State the answer.',
                    workingLatex: 'f(x) = 2x^3 - 6x^2 + 2',
                    explanation: 'Substitute \\( C = 2 \\).'
                }
            ],
            finalAnswer: '\\( f(x) = 2x^3 - 6x^2 + 2 \\)'
        }
    },
    {
        id: 'i1-024',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 24',
        difficulty: 'Foundation',
        questionText: 'The gradient of a curve is given by \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{1}{\\sqrt{x}} \\). Given that the curve passes through \\( (4, 10) \\), find the equation of the curve.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'fractional index', 'find constant', 'equation of curve'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\dfrac{1}{\\sqrt{x}} = x^{-1/2} \\).',
                    workingLatex: 'y = \\int x^{-1/2} \\, \\mathrm{d}x',
                    explanation: 'Convert to index notation.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: 'y = \\frac{x^{1/2}}{1/2} + C = 2\\sqrt{x} + C',
                    explanation: 'Increase index from \\(-\\tfrac{1}{2}\\) to \\(\\tfrac{1}{2}\\) and divide by \\(\\tfrac{1}{2}\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Use the point \\( (4, 10) \\).',
                    workingLatex: '10 = 2\\sqrt{4} + C = 4 + C \\implies C = 6',
                    explanation: 'Substitute \\( x = 4 \\), \\( y = 10 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write the equation.',
                    workingLatex: 'y = 2\\sqrt{x} + 6',
                    explanation: 'Substitute \\( C = 6 \\).'
                }
            ],
            finalAnswer: '\\( y = 2\\sqrt{x} + 6 \\)'
        }
    },
    {
        id: 'i1-025',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 25',
        difficulty: 'Foundation',
        questionText: 'A curve passes through \\( (3, 4) \\) and has gradient function \\( f\'(x) = 2x - \\dfrac{5}{x^2} \\). Find \\( f(x) \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'negative index', 'find constant', 'mixed'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\dfrac{5}{x^2} = 5x^{-2} \\).',
                    workingLatex: "f'(x) = 2x - 5x^{-2}",
                    explanation: 'Convert to index notation.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: 'f(x) = x^2 - 5 \\cdot \\frac{x^{-1}}{-1} + C = x^2 + \\frac{5}{x} + C',
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 3,
                    description: 'Use the point \\( (3, 4) \\).',
                    workingLatex: '4 = 9 + \\frac{5}{3} + C \\implies C = 4 - 9 - \\frac{5}{3} = -5 - \\frac{5}{3} = -\\frac{20}{3}',
                    explanation: 'Substitute \\( x = 3 \\), \\( f(3) = 4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'State the equation.',
                    workingLatex: 'f(x) = x^2 + \\frac{5}{x} - \\frac{20}{3}',
                    explanation: 'Substitute \\( C = -\\dfrac{20}{3} \\).'
                }
            ],
            finalAnswer: '\\( f(x) = x^2 + \\dfrac{5}{x} - \\dfrac{20}{3} \\)'
        }
    },
    {
        id: 'i1-026',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 26',
        difficulty: 'Foundation',
        questionText: 'Given that \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}t} = \\sqrt{t} - 3 \\) and \\( y = 9 \\) when \\( t = 4 \\), find \\( y \\) as a function of \\( t \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'fractional index', 'find constant', 'function of t'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( \\sqrt{t} = t^{1/2} \\) and integrate.',
                    workingLatex: 'y = \\int (t^{1/2} - 3) \\, \\mathrm{d}t = \\frac{2}{3}t^{3/2} - 3t + C',
                    explanation: 'Apply the power rule to each term in \\( t \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Use \\( y = 9 \\) when \\( t = 4 \\).',
                    workingLatex: '9 = \\frac{2}{3}(8) - 12 + C = \\frac{16}{3} - 12 + C',
                    explanation: '\\( 4^{3/2} = (\\sqrt{4})^3 = 8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( C \\).',
                    workingLatex: 'C = 9 - \\frac{16}{3} + 12 = 21 - \\frac{16}{3} = \\frac{63 - 16}{3} = \\frac{47}{3}',
                    explanation: 'Rearrange and simplify.'
                },
                {
                    stepNumber: 4,
                    description: 'State \\( y \\).',
                    workingLatex: 'y = \\frac{2}{3}t^{3/2} - 3t + \\frac{47}{3}',
                    explanation: 'Substitute \\( C = \\dfrac{47}{3} \\).'
                }
            ],
            finalAnswer: '\\( y = \\dfrac{2}{3}t^{3/2} - 3t + \\dfrac{47}{3} \\)'
        }
    },
    {
        id: 'i1-027',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 27',
        difficulty: 'Foundation',
        questionText: 'A curve \\( y = f(x) \\) passes through \\( (1, 3) \\) and \\( f\'(x) = (2x + 1)(x - 3) \\). Find \\( f(x) \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand brackets', 'find constant', 'equation of curve'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand \\( f\'(x) \\).',
                    workingLatex: "(2x+1)(x-3) = 2x^2 - 6x + x - 3 = 2x^2 - 5x - 3",
                    explanation: 'FOIL the brackets.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: 'f(x) = \\frac{2x^3}{3} - \\frac{5x^2}{2} - 3x + C',
                    explanation: 'Power rule applied to each term.'
                },
                {
                    stepNumber: 3,
                    description: 'Use the point \\( (1, 3) \\).',
                    workingLatex: '3 = \\frac{2}{3} - \\frac{5}{2} - 3 + C \\implies C = 3 - \\frac{2}{3} + \\frac{5}{2} + 3 = 6 - \\frac{4}{6} + \\frac{15}{6} = 6 + \\frac{11}{6} = \\frac{47}{6}',
                    explanation: 'Substitute \\( x = 1 \\), \\( f(1) = 3 \\) and solve for \\( C \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write the equation.',
                    workingLatex: 'f(x) = \\frac{2x^3}{3} - \\frac{5x^2}{2} - 3x + \\frac{47}{6}',
                    explanation: 'Substitute \\( C = \\dfrac{47}{6} \\).'
                }
            ],
            finalAnswer: '\\( f(x) = \\dfrac{2x^3}{3} - \\dfrac{5x^2}{2} - 3x + \\dfrac{47}{6} \\)'
        }
    },
    {
        id: 'i1-028',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 28',
        difficulty: 'Foundation',
        questionText: 'A curve \\( y = f(x) \\) passes through \\( (4, 9) \\) and its gradient function is \\( f\'(x) = \\sqrt{x} + \\dfrac{1}{\\sqrt{x}} \\). Find \\( f(x) \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'fractional index', 'find constant', 'equation of curve'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite in index notation.',
                    workingLatex: "f'(x) = x^{1/2} + x^{-1/2}",
                    explanation: '\\( \\sqrt{x} = x^{1/2} \\) and \\( \\dfrac{1}{\\sqrt{x}} = x^{-1/2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: 'f(x) = \\frac{x^{3/2}}{3/2} + \\frac{x^{1/2}}{1/2} + C = \\frac{2}{3}x^{3/2} + 2x^{1/2} + C',
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 3,
                    description: 'Use the point \\( (4, 9) \\).',
                    workingLatex: '9 = \\frac{2}{3}(8) + 2(2) + C = \\frac{16}{3} + 4 + C',
                    explanation: '\\( 4^{3/2} = 8 \\) and \\( 4^{1/2} = 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( C \\).',
                    workingLatex: 'C = 9 - \\frac{16}{3} - 4 = 5 - \\frac{16}{3} = \\frac{15 - 16}{3} = -\\frac{1}{3}',
                    explanation: 'Rearrange.'
                },
                {
                    stepNumber: 5,
                    description: 'State the equation.',
                    workingLatex: 'f(x) = \\frac{2}{3}x^{3/2} + 2\\sqrt{x} - \\frac{1}{3}',
                    explanation: 'Substitute \\( C = -\\dfrac{1}{3} \\).'
                }
            ],
            finalAnswer: '\\( f(x) = \\dfrac{2}{3}x^{3/2} + 2\\sqrt{x} - \\dfrac{1}{3} \\)'
        }
    },
    {
        id: 'i1-029',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 29',
        difficulty: 'Foundation',
        questionText: 'An object moves so that its acceleration at time \\( t \\) seconds is \\( a = 6t - 2 \\) ms\\(^{-2}\\). Given that the object is at rest when \\( t = 0 \\), find the velocity \\( v \\) as a function of \\( t \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'kinematics', 'velocity from acceleration', 'find constant'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Velocity is the integral of acceleration.',
                    workingLatex: 'v = \\int (6t - 2) \\, \\mathrm{d}t = 3t^2 - 2t + C',
                    explanation: 'Integrate with respect to \\( t \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Use \\( v = 0 \\) when \\( t = 0 \\).',
                    workingLatex: '0 = 0 - 0 + C \\implies C = 0',
                    explanation: 'Substitute the initial condition.'
                },
                {
                    stepNumber: 3,
                    description: 'State the velocity function.',
                    workingLatex: 'v = 3t^2 - 2t',
                    explanation: 'No additional constant is needed.'
                }
            ],
            finalAnswer: '\\( v = 3t^2 - 2t \\)'
        }
    },
    {
        id: 'i1-030',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 30',
        difficulty: 'Foundation',
        questionText: 'An object has acceleration \\( a = 10 - 4t \\) ms\\(^{-2}\\). Given that the velocity is \\( 8 \\) ms\\(^{-1}\\) when \\( t = 0 \\), find:\n(a) The velocity function.\n(b) The time when the object reaches its maximum velocity.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'kinematics', 'velocity from acceleration', 'maximum velocity'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Integrate acceleration to find velocity.',
                    workingLatex: 'v = \\int (10 - 4t) \\, \\mathrm{d}t = 10t - 2t^2 + C',
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply initial condition \\( v(0) = 8 \\).',
                    workingLatex: '8 = 0 + C \\implies C = 8',
                    explanation: 'Substitute \\( t = 0 \\), \\( v = 8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'State velocity function.',
                    workingLatex: 'v = 10t - 2t^2 + 8',
                    explanation: 'Substitute \\( C = 8 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(b) Maximum velocity when \\( a = \\dfrac{\\mathrm{d}v}{\\mathrm{d}t} = 0 \\).',
                    workingLatex: '10 - 4t = 0 \\implies t = 2.5 \\text{ s}',
                    explanation: 'Set the acceleration to zero.'
                }
            ],
            finalAnswer: '(a) \\( v = 10t - 2t^2 + 8 \\) \\newline (b) Maximum velocity at \\( t = 2.5 \\) s'
        }
    },
    {
        id: 'i1-031',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 31',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int \\left( \\frac{x^3 + 2x^2 - x}{x^2} \\right) \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'simplify fraction', 'negative index', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide each numerator term by \\( x^2 \\).',
                    workingLatex: 'x + 2 - x^{-1}',
                    explanation: 'Splitting the fraction term-by-term gives a sum of powers of \\( x \\). Using index laws: \\( \\dfrac{x^3}{x^2} = x \\), \\( \\dfrac{2x^2}{x^2} = 2 \\), and \\( \\dfrac{-x}{x^2} = -x^{-1} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set up the integral.',
                    workingLatex: '\\int (x + 2 - x^{-1}) \\, \\mathrm{d}x',
                    explanation: 'The reverse power rule \\( \\int x^n \\, \\mathrm{d}x = \\dfrac{x^{n+1}}{n+1} + C \\) handles the \\( x \\) and the constant \\( 2 \\) directly, but it fails for \\( x^{-1} \\) because then \\( n + 1 = 0 \\) and we would divide by zero — this is the famous \\( n = -1 \\) exclusion.'
                },
                {
                    stepNumber: 3,
                    description: 'Integrate, using the standard result \\( \\int x^{-1} \\, \\mathrm{d}x = \\ln|x| \\).',
                    workingLatex: '= \\frac{x^2}{2} + 2x - \\ln|x| + C',
                    explanation: 'For the \\( x^{-1} \\) term we use the standard logarithm result \\( \\int \\dfrac{1}{x} \\, \\mathrm{d}x = \\ln|x| + C \\) (the absolute value handles negative \\( x \\)). One \\( +C \\) covers the whole expression — a single antiderivative family.'
                }
            ],
            finalAnswer: '\\( \\dfrac{x^2}{2} + 2x - \\ln|x| + C \\)'
        }
    },
    {
        id: 'i1-032',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 32',
        difficulty: 'Foundation',
        questionText: 'A function \\( f \\) has gradient \\( f\'(x) = 3x^2 + kx - 4 \\), where \\( k \\) is a constant. Given that \\( f\'(2) = 12 \\) and the curve passes through \\( (0, 5) \\), find \\( k \\) and hence find \\( f(x) \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'find constant', 'unknown constant', 'equation of curve'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Use \\( f'(2) = 12 \\) to find \\( k \\).",
                    workingLatex: "3(2)^2 + k(2) - 4 = 12 \\implies 12 + 2k - 4 = 12 \\implies 2k = 4 \\implies k = 2",
                    explanation: "Substitute \\( x = 2 \\) into \\( f'(x) \\) and equate to the given gradient. This generates a linear equation in the unknown \\( k \\), which we then solve."
                },
                {
                    stepNumber: 2,
                    description: 'Integrate \\( f\'(x) = 3x^2 + 2x - 4 \\).',
                    workingLatex: 'f(x) = \\int (3x^2 + 2x - 4) \\, \\mathrm{d}x = x^3 + x^2 - 4x + C',
                    explanation: 'Apply the reverse power rule \\( \\int x^n \\, \\mathrm{d}x = \\dfrac{x^{n+1}}{n+1} + C \\) to each term: \\( 3 \\cdot \\tfrac{x^3}{3} = x^3 \\), \\( 2 \\cdot \\tfrac{x^2}{2} = x^2 \\), and \\( \\int -4 \\, \\mathrm{d}x = -4x \\). The \\( +C \\) is essential because there is a whole family of antiderivatives that differ only by a constant.'
                },
                {
                    stepNumber: 3,
                    description: 'Use \\( f(0) = 5 \\) to pin down \\( C \\).',
                    workingLatex: '5 = (0)^3 + (0)^2 - 4(0) + C \\implies C = 5',
                    explanation: 'The boundary condition selects one specific antiderivative from the family. Substituting \\( x = 0 \\) makes every \\( x \\)-term vanish, so the equation reduces directly to \\( C = 5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'State the answer.',
                    workingLatex: 'f(x) = x^3 + x^2 - 4x + 5',
                    explanation: 'Substitute the found value \\( C = 5 \\) back into the general antiderivative to get the unique \\( f(x) \\) that satisfies both conditions.'
                }
            ],
            finalAnswer: '\\( k = 2 \\); \\( f(x) = x^3 + x^2 - 4x + 5 \\)'
        }
    },
    {
        id: 'i1-033',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 33',
        difficulty: 'Foundation',
        questionText: 'The curve \\( y = f(x) \\) passes through \\( (1, -1) \\) and has \\( f\'(x) = (5x - 1)(x + 2) \\). Find \\( f(x) \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand brackets', 'find constant', 'equation of curve', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand \\( f\'(x) \\).',
                    workingLatex: "(5x-1)(x+2) = 5x^2 + 10x - x - 2 = 5x^2 + 9x - 2",
                    explanation: 'FOIL the brackets.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: 'f(x) = \\frac{5x^3}{3} + \\frac{9x^2}{2} - 2x + C',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 3,
                    description: 'Use \\( (1, -1) \\).',
                    workingLatex: '-1 = \\frac{5}{3} + \\frac{9}{2} - 2 + C',
                    explanation: 'Substitute \\( x = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( C \\).',
                    workingLatex: 'C = -1 - \\frac{5}{3} - \\frac{9}{2} + 2 = 1 - \\frac{10}{6} - \\frac{27}{6} = 1 - \\frac{37}{6} = -\\frac{31}{6}',
                    explanation: 'Common denominator of 6.'
                },
                {
                    stepNumber: 5,
                    description: 'State the equation.',
                    workingLatex: 'f(x) = \\frac{5x^3}{3} + \\frac{9x^2}{2} - 2x - \\frac{31}{6}',
                    explanation: 'Substitute \\( C = -\\dfrac{31}{6} \\).'
                }
            ],
            finalAnswer: '\\( f(x) = \\dfrac{5x^3}{3} + \\dfrac{9x^2}{2} - 2x - \\dfrac{31}{6} \\)'
        }
    },
    {
        id: 'i1-034',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 34',
        difficulty: 'Foundation',
        questionText: 'A curve \\( y = f(x) \\) has \\( f\'(x) = x^2 - \\dfrac{4}{x^2} \\) and passes through \\( (2, 3) \\). Find \\( f(x) \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['indefinite integration', 'negative index', 'find constant', 'equation of curve', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\dfrac{4}{x^2} = 4x^{-2} \\).',
                    workingLatex: "f'(x) = x^2 - 4x^{-2}",
                    explanation: 'Index notation.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: 'f(x) = \\frac{x^3}{3} - 4 \\cdot \\frac{x^{-1}}{-1} + C = \\frac{x^3}{3} + \\frac{4}{x} + C',
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 3,
                    description: 'Use \\( f(2) = 3 \\).',
                    workingLatex: '3 = \\frac{8}{3} + \\frac{4}{2} + C = \\frac{8}{3} + 2 + C',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( C \\).',
                    workingLatex: 'C = 3 - \\frac{8}{3} - 2 = 1 - \\frac{8}{3} = -\\frac{5}{3}',
                    explanation: 'Rearrange.'
                },
                {
                    stepNumber: 5,
                    description: 'State the equation.',
                    workingLatex: 'f(x) = \\frac{x^3}{3} + \\frac{4}{x} - \\frac{5}{3}',
                    explanation: 'Substitute \\( C = -\\dfrac{5}{3} \\).'
                }
            ],
            finalAnswer: '\\( f(x) = \\dfrac{x^3}{3} + \\dfrac{4}{x} - \\dfrac{5}{3} \\)'
        }
    },
    {
        id: 'i1-035',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 35',
        difficulty: 'Foundation',
        questionText: 'A function \\( f \\) has gradient function \\( f\'(x) = 4x^3 + 3kx^2 + k \\), where \\( k \\) is a constant. The curve \\( y = f(x) \\) passes through \\( (1, 6) \\) with gradient \\( 12 \\) at that point.\n(a) Find the value of \\( k \\).\n(b) Find \\( f(x) \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['indefinite integration', 'unknown constant', 'find constant', 'equation of curve', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "(a) Use the gradient condition \\( f'(1) = 12 \\) to set up an equation in \\( k \\).",
                    workingLatex: "f'(1) = 4(1)^3 + 3k(1)^2 + k = 4 + 3k + k = 4 + 4k",
                    explanation: "Substitute \\( x = 1 \\) into the gradient function and collect like terms. The unknown \\( k \\) survives because the two \\( k \\)-terms have the same sign, so they add rather than cancel."
                },
                {
                    stepNumber: 2,
                    description: "Set equal to 12 and solve.",
                    workingLatex: "4 + 4k = 12 \\implies 4k = 8 \\implies k = 2",
                    explanation: "A simple linear equation. Subtract 4 from both sides, then divide by 4."
                },
                {
                    stepNumber: 3,
                    description: "(b) Substitute \\( k = 2 \\) into \\( f'(x) \\) before integrating.",
                    workingLatex: "f'(x) = 4x^3 + 6x^2 + 2",
                    explanation: "Replacing the unknown constant first keeps the antiderivative computation tidy."
                },
                {
                    stepNumber: 4,
                    description: 'Integrate using the reverse power rule.',
                    workingLatex: 'f(x) = \\int (4x^3 + 6x^2 + 2) \\, \\mathrm{d}x = x^4 + 2x^3 + 2x + C',
                    explanation: 'Apply \\( \\int x^n \\, \\mathrm{d}x = \\dfrac{x^{n+1}}{n+1} + C \\) to each term: \\( 4 \\cdot \\tfrac{x^4}{4} = x^4 \\), \\( 6 \\cdot \\tfrac{x^3}{3} = 2x^3 \\), and \\( \\int 2 \\, \\mathrm{d}x = 2x \\). The \\( +C \\) is essential — without a boundary condition the antiderivative is only known up to an additive constant.'
                },
                {
                    stepNumber: 5,
                    description: 'Use the point \\( (1, 6) \\) to pin down \\( C \\).',
                    workingLatex: '6 = (1)^4 + 2(1)^3 + 2(1) + C = 1 + 2 + 2 + C = 5 + C \\implies C = 1',
                    explanation: 'The boundary condition selects the one antiderivative whose graph actually passes through \\( (1, 6) \\) from the infinite family parametrised by \\( C \\).'
                },
                {
                    stepNumber: 6,
                    description: 'State the equation.',
                    workingLatex: 'f(x) = x^4 + 2x^3 + 2x + 1',
                    explanation: 'Substitute \\( C = 1 \\) back into the general antiderivative.'
                }
            ],
            finalAnswer: '(a) \\( k = 2 \\) \\newline (b) \\( f(x) = x^4 + 2x^3 + 2x + 1 \\)'
        }
    },
    {
        id: 'i1-036',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 36',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int 7x^2 \\, \\mathrm{d}x \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'power rule'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Apply the power rule.', workingLatex: '\\int 7x^2 \\, \\mathrm{d}x = 7 \\cdot \\frac{x^3}{3} + C = \\frac{7x^3}{3} + C', explanation: 'Increase the index from 2 to 3 and divide by 3.' }
            ],
            finalAnswer: '\\( \\dfrac{7x^3}{3} + C \\)'
        }
    },
    {
        id: 'i1-037',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 37',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int (3x^2 + 4x - 1) \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'polynomial', 'sum'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate term by term.', workingLatex: '\\int (3x^2 + 4x - 1) \\, \\mathrm{d}x = x^3 + 2x^2 - x + C', explanation: 'Apply the reverse power rule \\( \\int x^n \\, \\mathrm{d}x = \\dfrac{x^{n+1}}{n+1} + C \\) to each term: \\( 3 \\cdot \\tfrac{x^3}{3} = x^3 \\), \\( 4 \\cdot \\tfrac{x^2}{2} = 2x^2 \\), and integrating the constant \\( -1 \\) gives \\( -x \\). One \\( +C \\) covers the whole expression.' }
            ],
            finalAnswer: '\\( x^3 + 2x^2 - x + C \\)'
        }
    },
    {
        id: 'i1-038',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 38',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int 10 \\, \\mathrm{d}x \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'constant'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'A constant integrates to the constant times \\( x \\).', workingLatex: '\\int 10 \\, \\mathrm{d}x = 10x + C', explanation: 'Think of \\( 10 \\) as \\( 10x^0 \\); the power rule increases the index from \\( 0 \\) to \\( 1 \\) and divides by \\( 1 \\), giving \\( 10x \\). The \\( +C \\) is required because every constant differentiates to zero, so all functions of the form \\( 10x + C \\) share the same derivative.' }
            ],
            finalAnswer: '\\( 10x + C \\)'
        }
    },
    {
        id: 'i1-039',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 39',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int x^{-3} \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'negative index'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Apply the power rule with \\( n = -3 \\).', workingLatex: '\\int x^{-3} \\, \\mathrm{d}x = \\frac{x^{-2}}{-2} + C = -\\frac{1}{2x^2} + C', explanation: 'Increase the index: \\( -3 + 1 = -2 \\).' }
            ],
            finalAnswer: '\\( -\\dfrac{1}{2x^2} + C \\)'
        }
    },
    {
        id: 'i1-040',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 40',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int x^{\\frac{1}{2}} \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'fractional index'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Apply the power rule with \\( n = \\frac{1}{2} \\).', workingLatex: '\\int x^{\\frac{1}{2}} \\, \\mathrm{d}x = \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} + C = \\frac{2}{3} x^{\\frac{3}{2}} + C', explanation: 'Increase the index: \\( \\frac{1}{2} + 1 = \\frac{3}{2} \\). Dividing by \\( \\frac{3}{2} \\) is the same as multiplying by \\( \\frac{2}{3} \\).' }
            ],
            finalAnswer: '\\( \\dfrac{2}{3} x^{\\frac{3}{2}} + C \\)'
        }
    },
    {
        id: 'i1-041',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 41',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int \\left( 6x^5 - 2x + 3 \\right) \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'polynomial'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate term by term.', workingLatex: '\\int (6x^5 - 2x + 3) \\, \\mathrm{d}x = x^6 - x^2 + 3x + C', explanation: 'Apply the reverse power rule \\( \\int x^n \\, \\mathrm{d}x = \\dfrac{x^{n+1}}{n+1} + C \\) to each term: \\( 6 \\cdot \\tfrac{x^6}{6} = x^6 \\), \\( 2 \\cdot \\tfrac{x^2}{2} = x^2 \\), and \\( \\int 3 \\, \\mathrm{d}x = 3x \\). One \\( +C \\) covers the whole expression.' }
            ],
            finalAnswer: '\\( x^6 - x^2 + 3x + C \\)'
        }
    },
    {
        id: 'i1-042',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 42',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{3}{x^4} \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'rewrite', 'negative index'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite as a power of \\( x \\).', workingLatex: '\\frac{3}{x^4} = 3x^{-4}', explanation: 'Convert the fraction to a negative-index form so the power rule applies cleanly. The rule \\( \\int x^n \\, \\mathrm{d}x = \\dfrac{x^{n+1}}{n+1} + C \\) works for any \\( n \\neq -1 \\), including negative indices.' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int 3x^{-4} \\, \\mathrm{d}x = 3 \\cdot \\frac{x^{-3}}{-3} + C = -\\frac{1}{x^3} + C', explanation: 'Increase the index from \\( -4 \\) to \\( -3 \\) and divide by \\( -3 \\). The two \\( 3 \\)s cancel, and dividing by a negative flips the sign — a common spot for sign errors. Always include \\( +C \\).' }
            ],
            finalAnswer: '\\( -\\dfrac{1}{x^3} + C \\)'
        }
    },
    {
        id: 'i1-043',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 43',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int 4\\sqrt{x} \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'root', 'rewrite'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite the surd as a fractional power.', workingLatex: '4\\sqrt{x} = 4x^{\\frac{1}{2}}', explanation: 'Always convert surds to fractional powers before integrating — the reverse power rule needs an explicit index \\( n \\). Here \\( \\sqrt{x} = x^{1/2} \\).' },
                { stepNumber: 2, description: 'Apply the power rule.', workingLatex: '\\int 4x^{\\frac{1}{2}} \\, \\mathrm{d}x = 4 \\cdot \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} + C = \\frac{8}{3} x^{\\frac{3}{2}} + C', explanation: 'Increase the index from \\( \\tfrac{1}{2} \\) to \\( \\tfrac{3}{2} \\) and divide by \\( \\tfrac{3}{2} \\); dividing by a fraction is the same as multiplying by its reciprocal, so \\( 4 \\div \\tfrac{3}{2} = 4 \\times \\tfrac{2}{3} = \\tfrac{8}{3} \\).' }
            ],
            finalAnswer: '\\( \\dfrac{8}{3} x^{\\frac{3}{2}} + C \\)'
        }
    },
    {
        id: 'i1-044',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 44',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\left( x^3 - \\frac{2}{x^2} \\right) \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'mixed terms', 'rewrite'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite using a negative index.', workingLatex: 'x^3 - \\frac{2}{x^2} = x^3 - 2x^{-2}', explanation: 'Converting \\( \\dfrac{1}{x^2} = x^{-2} \\) puts every term into the form \\( x^n \\), so the power rule applies directly.' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int (x^3 - 2x^{-2}) \\, \\mathrm{d}x = \\frac{x^4}{4} + \\frac{2}{x} + C', explanation: 'For \\( x^3 \\): increase the index to \\( 4 \\) and divide by \\( 4 \\). For \\( -2x^{-2} \\): the new index is \\( -1 \\), and dividing by \\( -1 \\) flips the sign giving \\( -2 \\cdot \\dfrac{x^{-1}}{-1} = \\dfrac{2}{x} \\) — watch the sign carefully.' }
            ],
            finalAnswer: '\\( \\dfrac{x^4}{4} + \\dfrac{2}{x} + C \\)'
        }
    },
    {
        id: 'i1-045',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 45',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{x^3 + 2x}{x} \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'simplify first', 'divide'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Simplify the integrand by splitting the fraction.', workingLatex: '\\frac{x^3 + 2x}{x} = x^2 + 2', explanation: 'Divide each numerator term by \\( x \\): \\( \\dfrac{x^3}{x} = x^2 \\) and \\( \\dfrac{2x}{x} = 2 \\). Simplifying before integrating avoids any need for the quotient rule or other heavy machinery — the power rule handles each term cleanly.' },
                { stepNumber: 2, description: 'Integrate term by term.', workingLatex: '\\int (x^2 + 2) \\, \\mathrm{d}x = \\frac{x^3}{3} + 2x + C', explanation: 'Apply the reverse power rule \\( \\int x^n \\, \\mathrm{d}x = \\dfrac{x^{n+1}}{n+1} + C \\): the \\( x^2 \\) term becomes \\( \\tfrac{x^3}{3} \\), and the constant \\( 2 \\) integrates to \\( 2x \\).' }
            ],
            finalAnswer: '\\( \\dfrac{x^3}{3} + 2x + C \\)'
        }
    },
    {
        id: 'i1-046',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 46',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{6x^2 - 3}{x^2} \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'simplify first', 'divide'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Split the fraction term-by-term.', workingLatex: '\\frac{6x^2 - 3}{x^2} = 6 - 3x^{-2}', explanation: '\\( \\dfrac{6x^2}{x^2} = 6 \\) and \\( \\dfrac{-3}{x^2} = -3x^{-2} \\). Writing the second term with a negative index puts it in the form \\( x^n \\) so the power rule can be applied.' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int (6 - 3x^{-2}) \\, \\mathrm{d}x = 6x + \\frac{3}{x} + C', explanation: 'Integrating the constant \\( 6 \\) gives \\( 6x \\). For \\( -3x^{-2} \\): new index \\( -1 \\), divide by \\( -1 \\), giving \\( -3 \\cdot \\dfrac{x^{-1}}{-1} = +\\dfrac{3}{x} \\) — the two minus signs cancel, so be careful with the sign here.' }
            ],
            finalAnswer: '\\( 6x + \\dfrac{3}{x} + C \\)'
        }
    },
    {
        id: 'i1-047',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 47',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int x^{-\\frac{1}{2}} \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'fractional index'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Apply the power rule.', workingLatex: '\\int x^{-\\frac{1}{2}} \\, \\mathrm{d}x = \\frac{x^{\\frac{1}{2}}}{\\frac{1}{2}} + C = 2\\sqrt{x} + C', explanation: '\\( -\\frac{1}{2} + 1 = \\frac{1}{2} \\).' }
            ],
            finalAnswer: '\\( 2\\sqrt{x} + C \\)'
        }
    },
    {
        id: 'i1-048',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 48',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\left( 2x + \\frac{1}{\\sqrt{x}} \\right) \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'rewrite', 'mixed'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite the surd in index form.', workingLatex: '2x + \\frac{1}{\\sqrt{x}} = 2x + x^{-\\frac{1}{2}}', explanation: 'Converting \\( \\dfrac{1}{\\sqrt{x}} = x^{-1/2} \\) puts the second term into a form the power rule can handle directly.' },
                { stepNumber: 2, description: 'Integrate term by term.', workingLatex: '\\int \\left(2x + x^{-\\frac{1}{2}}\\right) \\mathrm{d}x = x^2 + 2x^{\\frac{1}{2}} + C = x^2 + 2\\sqrt{x} + C', explanation: 'For \\( 2x \\): the index becomes \\( 2 \\) and dividing by \\( 2 \\) cancels with the coefficient, giving \\( x^2 \\). For \\( x^{-1/2} \\): the new index is \\( \\tfrac{1}{2} \\), and dividing by \\( \\tfrac{1}{2} \\) doubles the term, giving \\( 2\\sqrt{x} \\).' }
            ],
            finalAnswer: '\\( x^2 + 2\\sqrt{x} + C \\)'
        }
    },
    {
        id: 'i1-049',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 49',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int (2x + 1)^2 \\, \\mathrm{d}x \\) by expanding first.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand first'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand the bracket.', workingLatex: '(2x+1)^2 = 4x^2 + 4x + 1', explanation: 'Use \\( (a+b)^2 = a^2 + 2ab + b^2 \\) with \\( a = 2x \\), \\( b = 1 \\). You cannot integrate a bracket squared directly — expand first so each term is a separate power of \\( x \\).' },
                { stepNumber: 2, description: 'Integrate term by term.', workingLatex: '\\int (4x^2 + 4x + 1) \\, \\mathrm{d}x = \\frac{4x^3}{3} + 2x^2 + x + C', explanation: 'Apply the reverse power rule to each term: \\( 4 \\cdot \\tfrac{x^3}{3} = \\tfrac{4x^3}{3} \\), \\( 4 \\cdot \\tfrac{x^2}{2} = 2x^2 \\), and \\( \\int 1 \\, \\mathrm{d}x = x \\).' }
            ],
            finalAnswer: '\\( \\dfrac{4x^3}{3} + 2x^2 + x + C \\)'
        }
    },
    {
        id: 'i1-050',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 50',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int x(x - 3) \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand first'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand the bracket.', workingLatex: 'x(x-3) = x^2 - 3x', explanation: 'Multiply \\( x \\) through the bracket. The product of two algebraic expressions cannot be integrated termwise unless it is first expanded into a sum.' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int (x^2 - 3x) \\, \\mathrm{d}x = \\frac{x^3}{3} - \\frac{3x^2}{2} + C', explanation: 'Apply the reverse power rule to each term: \\( \\int x^2 \\, \\mathrm{d}x = \\tfrac{x^3}{3} \\) and \\( \\int -3x \\, \\mathrm{d}x = -3 \\cdot \\tfrac{x^2}{2} = -\\tfrac{3x^2}{2} \\).' }
            ],
            finalAnswer: '\\( \\dfrac{x^3}{3} - \\dfrac{3x^2}{2} + C \\)'
        }
    },
    {
        id: 'i1-051',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 51',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{x^2 + 4x + 3}{x + 1} \\, \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'factorise', 'simplify'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Factorise the numerator and cancel.', workingLatex: '\\frac{x^2 + 4x + 3}{x + 1} = \\frac{(x+1)(x+3)}{x+1} = x + 3', explanation: 'Find two numbers multiplying to \\( 3 \\) and adding to \\( 4 \\) — namely \\( 1 \\) and \\( 3 \\). Cancelling the common factor \\( (x+1) \\) reduces the quotient to a simple linear expression, which the power rule can handle directly.' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int (x + 3) \\, \\mathrm{d}x = \\frac{x^2}{2} + 3x + C', explanation: 'Apply the reverse power rule: \\( \\int x \\, \\mathrm{d}x = \\tfrac{x^2}{2} \\) and \\( \\int 3 \\, \\mathrm{d}x = 3x \\).' }
            ],
            finalAnswer: '\\( \\dfrac{x^2}{2} + 3x + C \\)'
        }
    },
    {
        id: 'i1-052',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 52',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\sqrt{x}(x + 4) \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand', 'fractional index'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand by multiplying \\( x^{1/2} \\) through the bracket.', workingLatex: '\\sqrt{x}(x+4) = x^{\\frac{3}{2}} + 4x^{\\frac{1}{2}}', explanation: 'Use index laws: \\( x^{1/2} \\cdot x = x^{3/2} \\) and \\( x^{1/2} \\cdot 4 = 4x^{1/2} \\). Converting \\( \\sqrt{x} \\) to \\( x^{1/2} \\) first lets the power rule apply cleanly after expansion.' },
                { stepNumber: 2, description: 'Integrate each fractional-index term.', workingLatex: '\\int \\left(x^{\\frac{3}{2}} + 4x^{\\frac{1}{2}}\\right) \\mathrm{d}x = \\frac{2}{5}x^{\\frac{5}{2}} + \\frac{8}{3}x^{\\frac{3}{2}} + C', explanation: 'For \\( x^{3/2} \\): new index \\( \\tfrac{5}{2} \\), divide by \\( \\tfrac{5}{2} \\) (i.e. multiply by \\( \\tfrac{2}{5} \\)). For \\( 4x^{1/2} \\): new index \\( \\tfrac{3}{2} \\), then \\( 4 \\times \\tfrac{2}{3} = \\tfrac{8}{3} \\).' }
            ],
            finalAnswer: '\\( \\dfrac{2}{5}x^{\\frac{5}{2}} + \\dfrac{8}{3}x^{\\frac{3}{2}} + C \\)'
        }
    },
    {
        id: 'i1-053',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 53',
        difficulty: 'Standard',
        questionText: 'Given that \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 4 \\) and \\( y = 5 \\) when \\( x = 2 \\), find \\( y \\) in terms of \\( x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'find constant', 'equation of curve'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate the gradient function.', workingLatex: 'y = x^3 - 4x + C', explanation: 'Apply the reverse power rule: \\( 3 \\cdot \\tfrac{x^3}{3} = x^3 \\) and \\( \\int -4 \\, \\mathrm{d}x = -4x \\). The \\( +C \\) is essential because integrating \\( \\tfrac{\\mathrm{d}y}{\\mathrm{d}x} \\) recovers \\( y \\) only up to an additive constant.' },
                { stepNumber: 2, description: 'Use the condition \\( y = 5 \\) when \\( x = 2 \\) to find \\( C \\).', workingLatex: '5 = (2)^3 - 4(2) + C = 8 - 8 + C \\implies C = 5', explanation: 'The boundary condition pins down the value of \\( C \\), selecting one specific curve from the family of antiderivatives that all share the same gradient function.' },
                { stepNumber: 3, description: 'State the equation of the curve.', workingLatex: 'y = x^3 - 4x + 5', explanation: 'Substitute \\( C = 5 \\) back into the general antiderivative.' }
            ],
            finalAnswer: '\\( y = x^3 - 4x + 5 \\)'
        }
    },
    {
        id: 'i1-054',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 54',
        difficulty: 'Standard',
        questionText: 'The gradient of a curve is \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 6x - 1 \\). The curve passes through \\( (1, 4) \\). Find the equation of the curve.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'find constant', 'equation of curve'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate the gradient function.', workingLatex: 'y = 3x^2 - x + C', explanation: 'Apply the reverse power rule: \\( 6 \\cdot \\tfrac{x^2}{2} = 3x^2 \\) and \\( \\int -1 \\, \\mathrm{d}x = -x \\). The \\( +C \\) accounts for the infinite family of curves with the same gradient.' },
                { stepNumber: 2, description: 'Substitute the point \\( (1, 4) \\) to find \\( C \\).', workingLatex: '4 = 3(1)^2 - 1 + C = 3 - 1 + C \\implies C = 2', explanation: 'The boundary condition picks out the one curve in the family that actually passes through \\( (1, 4) \\).' },
                { stepNumber: 3, description: 'State the equation.', workingLatex: 'y = 3x^2 - x + 2', explanation: 'Substitute \\( C = 2 \\) back into the general antiderivative.' }
            ],
            finalAnswer: '\\( y = 3x^2 - x + 2 \\)'
        }
    },
    {
        id: 'i1-055',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 55',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\left( 5x^4 + \\frac{3}{x^2} - 7 \\right) \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'mixed terms'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite \\( \\tfrac{3}{x^2} \\) as \\( 3x^{-2} \\) and integrate term by term.', workingLatex: '\\int \\left(5x^4 + 3x^{-2} - 7\\right) \\mathrm{d}x = x^5 - \\frac{3}{x} - 7x + C', explanation: 'Converting to a negative index unlocks the power rule for the middle term. Integrating: \\( 5 \\cdot \\tfrac{x^5}{5} = x^5 \\); for \\( 3x^{-2} \\), new index \\( -1 \\) and dividing by \\( -1 \\) flips the sign to give \\( -\\tfrac{3}{x} \\); and \\( \\int -7 \\, \\mathrm{d}x = -7x \\). Watch the sign on the \\( -\\tfrac{3}{x} \\) carefully.' }
            ],
            finalAnswer: '\\( x^5 - \\dfrac{3}{x} - 7x + C \\)'
        }
    },
    {
        id: 'i1-056',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 56',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{2x^4 - x^2 + 4}{x^2} \\, \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'simplify first', 'divide'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Divide each term in the numerator by \\( x^2 \\).', workingLatex: '\\frac{2x^4 - x^2 + 4}{x^2} = 2x^2 - 1 + 4x^{-2}', explanation: 'Splitting the fraction term-by-term turns the awkward quotient into a sum of simple power-of-\\( x \\) terms, which the reverse power rule can handle directly. Note \\( \\dfrac{4}{x^2} = 4x^{-2} \\) — converting to a negative index is the key step that unlocks the power rule.' },
                { stepNumber: 2, description: 'Integrate using the reverse power rule.', workingLatex: '\\int (2x^2 - 1 + 4x^{-2}) \\, \\mathrm{d}x = \\frac{2x^3}{3} - x - \\frac{4}{x} + C', explanation: 'Apply \\( \\int x^n \\, \\mathrm{d}x = \\dfrac{x^{n+1}}{n+1} + C \\) term-by-term. For \\( 4x^{-2} \\): the new index is \\( -1 \\), and dividing by \\( -1 \\) flips the sign, giving \\( -4x^{-1} = -\\dfrac{4}{x} \\). The \\( +C \\) is essential because indefinite integrals describe a whole family of antiderivatives.' }
            ],
            finalAnswer: '\\( \\dfrac{2x^3}{3} - x - \\dfrac{4}{x} + C \\)'
        }
    },
    {
        id: 'i1-057',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 57',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int x^{\\frac{2}{3}} \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'fractional index'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Apply the power rule.', workingLatex: '\\int x^{\\frac{2}{3}} \\, \\mathrm{d}x = \\frac{x^{\\frac{5}{3}}}{\\frac{5}{3}} + C = \\frac{3}{5} x^{\\frac{5}{3}} + C', explanation: 'Increase the index by \\( 1 \\): \\( \\tfrac{2}{3} + 1 = \\tfrac{5}{3} \\). Dividing by \\( \\tfrac{5}{3} \\) is the same as multiplying by its reciprocal \\( \\tfrac{3}{5} \\).' }
            ],
            finalAnswer: '\\( \\dfrac{3}{5} x^{\\frac{5}{3}} + C \\)'
        }
    },
    {
        id: 'i1-058',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 58',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{5}{\\sqrt{x}} \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'rewrite', 'root'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite the surd in index form.', workingLatex: '\\frac{5}{\\sqrt{x}} = 5x^{-\\frac{1}{2}}', explanation: 'Using \\( \\sqrt{x} = x^{1/2} \\) and the reciprocal rule \\( \\dfrac{1}{x^{1/2}} = x^{-1/2} \\). Putting the expression in the form \\( kx^n \\) is essential before applying the power rule.' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int 5x^{-\\frac{1}{2}} \\, \\mathrm{d}x = 5 \\cdot 2x^{\\frac{1}{2}} + C = 10\\sqrt{x} + C', explanation: 'Increase the index from \\( -\\tfrac{1}{2} \\) to \\( \\tfrac{1}{2} \\) and divide by \\( \\tfrac{1}{2} \\), which is the same as multiplying by \\( 2 \\). Then \\( 5 \\times 2 = 10 \\), and \\( x^{1/2} = \\sqrt{x} \\).' }
            ],
            finalAnswer: '\\( 10\\sqrt{x} + C \\)'
        }
    },
    {
        id: 'i1-059',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 59',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int (x + 2)(x - 5) \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand first'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand the brackets.', workingLatex: '(x+2)(x-5) = x^2 - 3x - 10', explanation: 'FOIL: \\( x \\cdot x - 5x + 2x - 10 = x^2 - 3x - 10 \\). Expand before integrating — the power rule applies to each individual power of \\( x \\), not to a product of brackets.' },
                { stepNumber: 2, description: 'Integrate term by term.', workingLatex: '\\int (x^2 - 3x - 10) \\, \\mathrm{d}x = \\frac{x^3}{3} - \\frac{3x^2}{2} - 10x + C', explanation: 'Apply the reverse power rule: \\( \\int x^2 \\, \\mathrm{d}x = \\tfrac{x^3}{3} \\), \\( \\int -3x \\, \\mathrm{d}x = -\\tfrac{3x^2}{2} \\), and \\( \\int -10 \\, \\mathrm{d}x = -10x \\).' }
            ],
            finalAnswer: '\\( \\dfrac{x^3}{3} - \\dfrac{3x^2}{2} - 10x + C \\)'
        }
    },
    {
        id: 'i1-060',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 60',
        difficulty: 'Standard',
        questionText: 'The gradient of a curve is \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3 + 2x \\). The curve passes through \\( (1, 0) \\). Find the equation of the curve.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['indefinite integration', 'find constant', 'equation of curve', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate the gradient function.', workingLatex: 'y = x^4 + x^2 + C', explanation: 'Apply the reverse power rule: \\( 4 \\cdot \\tfrac{x^4}{4} = x^4 \\) and \\( 2 \\cdot \\tfrac{x^2}{2} = x^2 \\). The \\( +C \\) is required because the gradient alone defines a whole family of parallel curves.' },
                { stepNumber: 2, description: 'Substitute \\( (1, 0) \\) to find \\( C \\).', workingLatex: '0 = (1)^4 + (1)^2 + C = 1 + 1 + C \\implies C = -2', explanation: 'The boundary condition selects the unique curve from the family that passes through this point.' },
                { stepNumber: 3, description: 'State the equation.', workingLatex: 'y = x^4 + x^2 - 2', explanation: 'Substitute \\( C = -2 \\) into the general antiderivative.' }
            ],
            finalAnswer: '\\( y = x^4 + x^2 - 2 \\)'
        }
    },
    {
        id: 'i1-061',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 61',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\left( 3\\sqrt{x} - \\frac{1}{x^3} \\right) \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'rewrite', 'mixed'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite in index form.', workingLatex: '3\\sqrt{x} - \\frac{1}{x^3} = 3x^{\\frac{1}{2}} - x^{-3}', explanation: 'Use \\( \\sqrt{x} = x^{1/2} \\) and \\( \\dfrac{1}{x^3} = x^{-3} \\). Putting every term as a power of \\( x \\) is essential before applying the power rule.' },
                { stepNumber: 2, description: 'Integrate each term.', workingLatex: '\\int \\left(3x^{\\frac{1}{2}} - x^{-3}\\right) \\mathrm{d}x = 2x^{\\frac{3}{2}} + \\frac{1}{2x^2} + C', explanation: 'For \\( 3x^{1/2} \\): new index \\( \\tfrac{3}{2} \\), and \\( 3 \\times \\tfrac{2}{3} = 2 \\). For \\( -x^{-3} \\): new index \\( -2 \\), divide by \\( -2 \\), giving \\( -\\dfrac{x^{-2}}{-2} = \\dfrac{1}{2x^2} \\) — the two minus signs cancel.' }
            ],
            finalAnswer: '\\( 2x^{\\frac{3}{2}} + \\dfrac{1}{2x^2} + C \\)'
        }
    },
    {
        id: 'i1-062',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 62',
        difficulty: 'Standard',
        questionText: 'Given \\( f\'(x) = 12x^2 - 6x + 1 \\) and \\( f(0) = 3 \\), find \\( f(x) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'find constant'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate the gradient function.', workingLatex: 'f(x) = 4x^3 - 3x^2 + x + C', explanation: 'Apply the reverse power rule: \\( 12 \\cdot \\tfrac{x^3}{3} = 4x^3 \\), \\( 6 \\cdot \\tfrac{x^2}{2} = 3x^2 \\), and \\( \\int 1 \\, \\mathrm{d}x = x \\). The \\( +C \\) accounts for the unknown vertical shift.' },
                { stepNumber: 2, description: 'Use \\( f(0) = 3 \\) to pin down \\( C \\).', workingLatex: '3 = 4(0)^3 - 3(0)^2 + 0 + C \\implies C = 3', explanation: 'Substituting \\( x = 0 \\) makes every \\( x \\)-term vanish, so the boundary value goes straight to \\( C \\).' },
                { stepNumber: 3, description: 'State the final function.', workingLatex: 'f(x) = 4x^3 - 3x^2 + x + 3', explanation: 'Substitute \\( C = 3 \\) into the general antiderivative.' }
            ],
            finalAnswer: '\\( f(x) = 4x^3 - 3x^2 + x + 3 \\)'
        }
    },
    {
        id: 'i1-063',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 63',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{(x+1)(x-1)}{x^2} \\, \\mathrm{d}x \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['indefinite integration', 'simplify first', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Simplify using the difference of squares.', workingLatex: '\\frac{(x+1)(x-1)}{x^2} = \\frac{x^2 - 1}{x^2} = 1 - x^{-2}', explanation: '\\( (x+1)(x-1) = x^2 - 1 \\) by the difference of two squares. Then split the fraction: \\( \\dfrac{x^2}{x^2} = 1 \\) and \\( \\dfrac{-1}{x^2} = -x^{-2} \\). Putting it in this form lets the power rule apply to each term.' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int (1 - x^{-2}) \\, \\mathrm{d}x = x + \\frac{1}{x} + C', explanation: '\\( \\int 1 \\, \\mathrm{d}x = x \\). For \\( -x^{-2} \\): new index \\( -1 \\), divide by \\( -1 \\), giving \\( -\\dfrac{x^{-1}}{-1} = +\\dfrac{1}{x} \\) — the two negatives cancel, so the answer has a plus sign.' }
            ],
            finalAnswer: '\\( x + \\dfrac{1}{x} + C \\)'
        }
    },
    {
        id: 'i1-064',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 64',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\left( x^2 + 1 \\right)^2 \\, \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand first'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand the bracket.', workingLatex: '(x^2 + 1)^2 = x^4 + 2x^2 + 1', explanation: 'Use \\( (a+b)^2 = a^2 + 2ab + b^2 \\) with \\( a = x^2 \\), \\( b = 1 \\). The power rule cannot be applied to a bracket squared directly — expand into a sum first.' },
                { stepNumber: 2, description: 'Integrate term by term.', workingLatex: '\\int (x^4 + 2x^2 + 1) \\, \\mathrm{d}x = \\frac{x^5}{5} + \\frac{2x^3}{3} + x + C', explanation: 'Apply the reverse power rule to each term: \\( \\int x^4 \\, \\mathrm{d}x = \\tfrac{x^5}{5} \\), \\( \\int 2x^2 \\, \\mathrm{d}x = \\tfrac{2x^3}{3} \\), and \\( \\int 1 \\, \\mathrm{d}x = x \\).' }
            ],
            finalAnswer: '\\( \\dfrac{x^5}{5} + \\dfrac{2x^3}{3} + x + C \\)'
        }
    },
    {
        id: 'i1-065',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 65',
        difficulty: 'Standard',
        questionText: 'A curve has gradient function \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{3}{x^2} + 2 \\) and passes through \\( (3, 10) \\). Find \\( y \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['indefinite integration', 'find constant', 'equation of curve', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite \\( \\tfrac{3}{x^2} \\) as \\( 3x^{-2} \\) and integrate.', workingLatex: 'y = \\int (3x^{-2} + 2) \\, \\mathrm{d}x = -\\frac{3}{x} + 2x + C', explanation: 'For \\( 3x^{-2} \\): new index \\( -1 \\), divide by \\( -1 \\) — this flips the sign to give \\( -\\dfrac{3}{x} \\). Then \\( \\int 2 \\, \\mathrm{d}x = 2x \\). The \\( +C \\) is required since the gradient alone does not fix the curve uniquely.' },
                { stepNumber: 2, description: 'Substitute the point \\( (3, 10) \\) to find \\( C \\).', workingLatex: '10 = -\\frac{3}{3} + 2(3) + C = -1 + 6 + C \\implies C = 5', explanation: 'The boundary condition selects the unique curve from the family that passes through \\( (3, 10) \\).' },
                { stepNumber: 3, description: 'State the equation.', workingLatex: 'y = -\\frac{3}{x} + 2x + 5', explanation: 'Substitute \\( C = 5 \\) into the general antiderivative.' }
            ],
            finalAnswer: '\\( y = -\\dfrac{3}{x} + 2x + 5 \\)'
        }
    },
    {
        id: 'i1-066',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 66',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{x^4 - 1}{x^2} \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'simplify first'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Split the fraction term-by-term.', workingLatex: '\\frac{x^4 - 1}{x^2} = x^2 - x^{-2}', explanation: '\\( \\dfrac{x^4}{x^2} = x^2 \\) and \\( \\dfrac{-1}{x^2} = -x^{-2} \\). Writing the second term with a negative index unlocks the power rule.' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int (x^2 - x^{-2}) \\, \\mathrm{d}x = \\frac{x^3}{3} + \\frac{1}{x} + C', explanation: '\\( \\int x^2 \\, \\mathrm{d}x = \\tfrac{x^3}{3} \\). For \\( -x^{-2} \\): new index \\( -1 \\), divide by \\( -1 \\), giving \\( -\\dfrac{x^{-1}}{-1} = +\\dfrac{1}{x} \\) — the two minus signs cancel.' }
            ],
            finalAnswer: '\\( \\dfrac{x^3}{3} + \\dfrac{1}{x} + C \\)'
        }
    },
    {
        id: 'i1-067',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 67',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\left( \\sqrt{x} + \\frac{1}{\\sqrt{x}} \\right)^2 \\mathrm{d}x \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand the bracket using \\( (a+b)^2 = a^2 + 2ab + b^2 \\).', workingLatex: '\\left(\\sqrt{x} + \\frac{1}{\\sqrt{x}}\\right)^2 = x + 2 + \\frac{1}{x}', explanation: 'Here \\( a^2 = (\\sqrt{x})^2 = x \\), \\( b^2 = \\dfrac{1}{x} \\), and the middle term simplifies because \\( 2 \\cdot \\sqrt{x} \\cdot \\dfrac{1}{\\sqrt{x}} = 2 \\). Expanding before integrating is essential — the power rule cannot be applied directly to a bracket squared.' },
                { stepNumber: 2, description: 'Integrate term by term.', workingLatex: '\\int \\left(x + 2 + x^{-1}\\right) \\mathrm{d}x = \\frac{x^2}{2} + 2x + \\ln|x| + C', explanation: 'Apply the reverse power rule to \\( x \\) and the constant \\( 2 \\), giving \\( \\tfrac{x^2}{2} \\) and \\( 2x \\). The \\( x^{-1} \\) term is the special case \\( n = -1 \\) where the power rule fails (it would divide by zero), so we use the standard result \\( \\int \\dfrac{1}{x} \\, \\mathrm{d}x = \\ln|x| + C \\) instead.' }
            ],
            finalAnswer: '\\( \\dfrac{x^2}{2} + 2x + \\ln|x| + C \\)'
        }
    },
    {
        id: 'i1-068',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 68',
        difficulty: 'Standard',
        questionText: 'A curve passes through \\( (4, 20) \\) and has gradient \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3\\sqrt{x} \\). Find the equation of the curve.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['indefinite integration', 'find constant', 'equation of curve', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite the surd and integrate.', workingLatex: 'y = \\int 3x^{\\frac{1}{2}} \\, \\mathrm{d}x = 3 \\cdot \\frac{2}{3} x^{\\frac{3}{2}} + C = 2x^{\\frac{3}{2}} + C', explanation: 'Convert \\( \\sqrt{x} = x^{1/2} \\) so the power rule applies. Increase the index to \\( \\tfrac{3}{2} \\) and divide by \\( \\tfrac{3}{2} \\) (equivalently multiply by \\( \\tfrac{2}{3} \\)); then \\( 3 \\times \\tfrac{2}{3} = 2 \\).' },
                { stepNumber: 2, description: 'Substitute the point \\( (4, 20) \\) to find \\( C \\).', workingLatex: '20 = 2(4)^{\\frac{3}{2}} + C = 2 \\cdot 8 + C = 16 + C \\implies C = 4', explanation: 'Use the identity \\( 4^{3/2} = (\\sqrt{4})^3 = 2^3 = 8 \\). The boundary condition pins down which curve in the family passes through this point.' },
                { stepNumber: 3, description: 'State the equation.', workingLatex: 'y = 2x^{\\frac{3}{2}} + 4', explanation: 'Substitute \\( C = 4 \\) into the general antiderivative.' }
            ],
            finalAnswer: '\\( y = 2x^{\\frac{3}{2}} + 4 \\)'
        }
    },
    {
        id: 'i1-069',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 69',
        difficulty: 'Standard',
        questionText: 'Given \\( f\'(x) = 2x - \\dfrac{4}{x^3} \\) and \\( f(1) = 3 \\), find \\( f(x) \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['indefinite integration', 'negative index', 'find constant', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite \\( \\tfrac{4}{x^3} \\) as \\( 4x^{-3} \\) and integrate.', workingLatex: 'f(x) = \\int (2x - 4x^{-3}) \\, \\mathrm{d}x = x^2 + \\frac{2}{x^2} + C', explanation: 'For \\( 2x \\): \\( 2 \\cdot \\tfrac{x^2}{2} = x^2 \\). For \\( -4x^{-3} \\): new index \\( -2 \\), divide by \\( -2 \\), giving \\( -4 \\cdot \\dfrac{x^{-2}}{-2} = +\\dfrac{2}{x^2} \\) — the two minus signs cancel, so be careful with the sign.' },
                { stepNumber: 2, description: 'Substitute \\( f(1) = 3 \\) to find \\( C \\).', workingLatex: '3 = (1)^2 + \\frac{2}{(1)^2} + C = 1 + 2 + C \\implies C = 0', explanation: 'The boundary condition gives \\( C = 0 \\), so no constant term is needed in the final function.' },
                { stepNumber: 3, description: 'State the final function.', workingLatex: 'f(x) = x^2 + \\frac{2}{x^2}', explanation: 'Since \\( C = 0 \\), the antiderivative simplifies to this clean form.' }
            ],
            finalAnswer: '\\( f(x) = x^2 + \\dfrac{2}{x^2} \\)'
        }
    },
    {
        id: 'i1-070',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 70',
        difficulty: 'Standard',
        questionText: 'A curve has second derivative \\( \\dfrac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} = 6x \\). The curve has a stationary point at \\( (1, 2) \\).\n(a) Find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\).\n(b) Find \\( y \\) in terms of \\( x \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['indefinite integration', 'second derivative', 'stationary point', 'find constant', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: '(a) Integrate the second derivative to get the first derivative.', workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\int 6x \\, \\mathrm{d}x = 3x^2 + A', explanation: 'Apply the reverse power rule: \\( 6 \\cdot \\tfrac{x^2}{2} = 3x^2 \\). Use a different letter \\( A \\) for this constant of integration so it does not get confused with the constant from the second integration later.' },
                { stepNumber: 2, description: 'A stationary point means the gradient is zero, so use \\( \\tfrac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\) at \\( x = 1 \\).', workingLatex: '0 = 3(1)^2 + A \\implies A = -3', explanation: 'This boundary condition pins down \\( A \\), selecting the specific gradient function from the family of antiderivatives.' },
                { stepNumber: 3, description: 'State the gradient function.', workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 3', explanation: 'Substitute \\( A = -3 \\) back into the general expression.' },
                { stepNumber: 4, description: '(b) Integrate the gradient function to find \\( y \\).', workingLatex: 'y = \\int (3x^2 - 3) \\, \\mathrm{d}x = x^3 - 3x + B', explanation: 'Apply the reverse power rule: \\( 3 \\cdot \\tfrac{x^3}{3} = x^3 \\) and \\( \\int -3 \\, \\mathrm{d}x = -3x \\). A new constant \\( B \\) appears — every integration introduces its own \\( +C \\).' },
                { stepNumber: 5, description: 'Use the point \\( (1, 2) \\) to find \\( B \\).', workingLatex: '2 = (1)^3 - 3(1) + B = 1 - 3 + B \\implies B = 4', explanation: 'The boundary condition selects the unique curve from the family that passes through \\( (1, 2) \\).' },
                { stepNumber: 6, description: 'State the equation of the curve.', workingLatex: 'y = x^3 - 3x + 4', explanation: 'Substitute \\( B = 4 \\) into the general antiderivative.' }
            ],
            finalAnswer: '(a) \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 3 \\) \\newline (b) \\( y = x^3 - 3x + 4 \\)'
        }
    }

];
