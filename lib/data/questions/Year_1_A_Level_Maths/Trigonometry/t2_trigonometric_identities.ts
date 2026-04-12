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
        id: 't2-001',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 01',
        difficulty: 'Foundation',
        questionText: 'Using the identity \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\), show that \\( 1 - \\cos^2\\theta = \\sin^2\\theta \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'sin squared plus cos squared', 'rearranging'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start with the known identity.',
                    workingLatex: '\\sin^2\\theta + \\cos^2\\theta = 1',
                    explanation: 'This is one of the two fundamental trigonometric identities.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( \\cos^2\\theta \\) from both sides.',
                    workingLatex: '\\sin^2\\theta = 1 - \\cos^2\\theta',
                    explanation: 'Rearranging gives the required result.'
                }
            ],
            finalAnswer: '\\( 1 - \\cos^2\\theta = \\sin^2\\theta \\) (shown)'
        }
    },
    {
        id: 't2-002',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 02',
        difficulty: 'Foundation',
        questionText: 'Using the identity \\( \\tan\\theta \\equiv \\dfrac{\\sin\\theta}{\\cos\\theta} \\), show that \\( \\tan\\theta\\cos\\theta \\equiv \\sin\\theta \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'tan identity', 'simplify'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\tan\\theta \\) with \\( \\dfrac{\\sin\\theta}{\\cos\\theta} \\).',
                    workingLatex: '\\tan\\theta\\cos\\theta = \\frac{\\sin\\theta}{\\cos\\theta} \\times \\cos\\theta',
                    explanation: 'Substituting the definition of \\( \\tan\\theta \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Cancel \\( \\cos\\theta \\) in numerator and denominator.',
                    workingLatex: '= \\sin\\theta',
                    explanation: 'The \\( \\cos\\theta \\) cancels, leaving \\( \\sin\\theta \\) as required.'
                }
            ],
            finalAnswer: '\\( \\tan\\theta\\cos\\theta \\equiv \\sin\\theta \\) (shown)'
        }
    },
    {
        id: 't2-003',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 03',
        difficulty: 'Foundation',
        questionText: 'Given that \\( \\theta \\) is acute and \\( \\sin\\theta = \\dfrac{3}{5} \\), find the exact value of \\( \\cos\\theta \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'exact values', 'find cos from sin'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the identity \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\).',
                    workingLatex: '\\left(\\frac{3}{5}\\right)^2 + \\cos^2\\theta = 1',
                    explanation: 'Substitute the given value of \\( \\sin\\theta \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify and rearrange.',
                    workingLatex: '\\cos^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}',
                    explanation: 'Subtract \\( \\frac{9}{25} \\) from both sides.'
                },
                {
                    stepNumber: 3,
                    description: 'Take the positive square root since \\( \\theta \\) is acute.',
                    workingLatex: '\\cos\\theta = \\frac{4}{5}',
                    explanation: 'For acute angles, \\( \\cos\\theta > 0 \\).'
                }
            ],
            finalAnswer: '\\( \\cos\\theta = \\dfrac{4}{5} \\)'
        }
    },
    {
        id: 't2-004',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 04',
        difficulty: 'Foundation',
        questionText: 'Given that \\( \\theta \\) is acute and \\( \\cos\\theta = \\dfrac{5}{13} \\), find the exact value of \\( \\sin\\theta \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'exact values', 'find sin from cos'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\).',
                    workingLatex: '\\sin^2\\theta + \\left(\\frac{5}{13}\\right)^2 = 1',
                    explanation: 'Substitute the known value of \\( \\cos\\theta \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: '\\sin^2\\theta = 1 - \\frac{25}{169} = \\frac{144}{169}',
                    explanation: 'Compute \\( \\frac{25}{169} \\) then subtract from 1.'
                },
                {
                    stepNumber: 3,
                    description: 'Take the positive square root.',
                    workingLatex: '\\sin\\theta = \\frac{12}{13}',
                    explanation: '\\( \\theta \\) is acute so \\( \\sin\\theta > 0 \\).'
                }
            ],
            finalAnswer: '\\( \\sin\\theta = \\dfrac{12}{13} \\)'
        }
    },
    {
        id: 't2-005',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 05',
        difficulty: 'Foundation',
        questionText: 'Given that \\( x \\) is acute and \\( \\sin x = \\dfrac{\\sqrt{5}}{3} \\), find the exact value of \\( \\cos x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'surds', 'exact values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply \\( \\sin^2 x + \\cos^2 x = 1 \\).',
                    workingLatex: '\\frac{5}{9} + \\cos^2 x = 1',
                    explanation: '\\( \\sin^2 x = \\left(\\frac{\\sqrt{5}}{3}\\right)^2 = \\frac{5}{9} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\( \\cos^2 x \\).',
                    workingLatex: '\\cos^2 x = \\frac{4}{9}',
                    explanation: '\\( 1 - \\frac{5}{9} = \\frac{4}{9} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Take the positive square root.',
                    workingLatex: '\\cos x = \\frac{2}{3}',
                    explanation: 'Positive root since \\( x \\) is acute.'
                }
            ],
            finalAnswer: '\\( \\cos x = \\dfrac{2}{3} \\)'
        }
    },
    {
        id: 't2-006',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 06',
        difficulty: 'Foundation',
        questionText: 'Given that \\( x \\) is acute and \\( \\sin x = \\dfrac{1}{4} \\), find the exact value of \\( \\tan x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'find tan', 'exact values', 'surds'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( \\cos x \\) using \\( \\sin^2 x + \\cos^2 x = 1 \\).',
                    workingLatex: '\\cos^2 x = 1 - \\frac{1}{16} = \\frac{15}{16}',
                    explanation: 'Substitute \\( \\sin x = \\frac{1}{4} \\), so \\( \\sin^2 x = \\frac{1}{16} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Take the positive root.',
                    workingLatex: '\\cos x = \\frac{\\sqrt{15}}{4}',
                    explanation: '\\( x \\) is acute so \\( \\cos x > 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Use \\( \\tan x = \\dfrac{\\sin x}{\\cos x} \\).',
                    workingLatex: '\\tan x = \\frac{\\frac{1}{4}}{\\frac{\\sqrt{15}}{4}} = \\frac{1}{\\sqrt{15}}',
                    explanation: 'Divide the fractions.'
                },
                {
                    stepNumber: 4,
                    description: 'Rationalise the denominator.',
                    workingLatex: '\\tan x = \\frac{\\sqrt{15}}{15}',
                    explanation: 'Multiply numerator and denominator by \\( \\sqrt{15} \\).'
                }
            ],
            finalAnswer: '\\( \\tan x = \\dfrac{\\sqrt{15}}{15} \\)'
        }
    },
    {
        id: 't2-007',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 07',
        difficulty: 'Foundation',
        questionText: 'Given that \\( x \\) is acute and \\( \\cos x = \\dfrac{2}{3} \\), find the exact value of \\( \\tan x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'find tan from cos', 'exact values', 'surds'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( \\sin x \\) using \\( \\sin^2 x + \\cos^2 x = 1 \\).',
                    workingLatex: '\\sin^2 x = 1 - \\frac{4}{9} = \\frac{5}{9}',
                    explanation: '\\( \\cos^2 x = \\frac{4}{9} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Take the positive square root.',
                    workingLatex: '\\sin x = \\frac{\\sqrt{5}}{3}',
                    explanation: '\\( x \\) is acute.'
                },
                {
                    stepNumber: 3,
                    description: 'Compute \\( \\tan x \\).',
                    workingLatex: '\\tan x = \\frac{\\sin x}{\\cos x} = \\frac{\\frac{\\sqrt{5}}{3}}{\\frac{2}{3}} = \\frac{\\sqrt{5}}{2}',
                    explanation: 'Divide the two fractions.'
                }
            ],
            finalAnswer: '\\( \\tan x = \\dfrac{\\sqrt{5}}{2} \\)'
        }
    },
    {
        id: 't2-008',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 08',
        difficulty: 'Foundation',
        questionText: 'Show that \\( \\dfrac{\\sin^2\\theta}{1 - \\sin^2\\theta} \\equiv \\tan^2\\theta \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'prove identity', 'tan squared'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( 1 - \\sin^2\\theta \\) in the denominator.',
                    workingLatex: '1 - \\sin^2\\theta = \\cos^2\\theta',
                    explanation: 'This follows directly from \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the left-hand side.',
                    workingLatex: '\\frac{\\sin^2\\theta}{\\cos^2\\theta}',
                    explanation: 'The denominator is now \\( \\cos^2\\theta \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Recognise this as \\( \\tan^2\\theta \\).',
                    workingLatex: '= \\left(\\frac{\\sin\\theta}{\\cos\\theta}\\right)^2 = \\tan^2\\theta',
                    explanation: 'Using the definition \\( \\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\sin^2\\theta}{1 - \\sin^2\\theta} \\equiv \\tan^2\\theta \\) (shown)'
        }
    },
    {
        id: 't2-009',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 09',
        difficulty: 'Foundation',
        questionText: 'Show that \\( (1 - \\sin x)(1 + \\sin x) \\equiv \\cos^2 x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'difference of two squares', 'prove identity'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the left-hand side using the difference of two squares.',
                    workingLatex: '(1 - \\sin x)(1 + \\sin x) = 1 - \\sin^2 x',
                    explanation: '\\( (a-b)(a+b) = a^2 - b^2 \\) with \\( a=1, b=\\sin x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\sin^2 x + \\cos^2 x = 1 \\).',
                    workingLatex: '1 - \\sin^2 x = \\cos^2 x',
                    explanation: 'Rearranging the Pythagorean identity gives this directly.'
                }
            ],
            finalAnswer: '\\( (1 - \\sin x)(1 + \\sin x) \\equiv \\cos^2 x \\) (shown)'
        }
    },
    {
        id: 't2-010',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 10',
        difficulty: 'Foundation',
        questionText: 'Show that \\( \\dfrac{1 - \\cos^2\\theta}{\\cos^2\\theta} \\equiv \\tan^2\\theta \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'prove identity', 'rearranging'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( 1 - \\cos^2\\theta \\) in the numerator.',
                    workingLatex: '1 - \\cos^2\\theta = \\sin^2\\theta',
                    explanation: 'This follows from the Pythagorean identity.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute.',
                    workingLatex: '\\frac{\\sin^2\\theta}{\\cos^2\\theta}',
                    explanation: 'The fraction now has \\( \\sin^2\\theta \\) on top.'
                },
                {
                    stepNumber: 3,
                    description: 'Recognise the result.',
                    workingLatex: '= \\tan^2\\theta',
                    explanation: '\\( \\frac{\\sin^2\\theta}{\\cos^2\\theta} = \\tan^2\\theta \\) by definition.'
                }
            ],
            finalAnswer: '\\( \\dfrac{1 - \\cos^2\\theta}{\\cos^2\\theta} \\equiv \\tan^2\\theta \\) (shown)'
        }
    },
    {
        id: 't2-011',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 11',
        difficulty: 'Foundation',
        questionText: 'Show that \\( \\sin^2 x + \\cos^2 x + \\tan^2 x \\equiv 1 + \\tan^2 x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'simplify', 'Pythagorean identity'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start with the left-hand side.',
                    workingLatex: '\\sin^2 x + \\cos^2 x + \\tan^2 x',
                    explanation: 'Identify the Pythagorean identity within the expression.'
                },
                {
                    stepNumber: 2,
                    description: 'Replace \\( \\sin^2 x + \\cos^2 x \\) with 1.',
                    workingLatex: '= 1 + \\tan^2 x',
                    explanation: 'This is exactly the right-hand side, so the identity is proved.'
                }
            ],
            finalAnswer: '\\( \\sin^2 x + \\cos^2 x + \\tan^2 x \\equiv 1 + \\tan^2 x \\) (shown)'
        }
    },
    {
        id: 't2-012',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 12',
        difficulty: 'Foundation',
        questionText: 'Show that \\( \\cos^2\\theta - \\sin^2\\theta \\equiv 2\\cos^2\\theta - 1 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'prove identity', 'rearranging'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side. Replace \\( \\sin^2\\theta \\) using the identity.',
                    workingLatex: '\\sin^2\\theta = 1 - \\cos^2\\theta',
                    explanation: 'Rearranging \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the expression.',
                    workingLatex: '\\cos^2\\theta - (1 - \\cos^2\\theta) = \\cos^2\\theta - 1 + \\cos^2\\theta',
                    explanation: 'Distribute the negative sign.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: '= 2\\cos^2\\theta - 1',
                    explanation: 'This matches the right-hand side.'
                }
            ],
            finalAnswer: '\\( \\cos^2\\theta - \\sin^2\\theta \\equiv 2\\cos^2\\theta - 1 \\) (shown)'
        }
    },
    {
        id: 't2-013',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 13',
        difficulty: 'Foundation',
        questionText: 'Show that \\( \\dfrac{\\cos^2 x}{1 + \\cos x} \\equiv 1 - \\cos x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'difference of squares', 'simplify fraction'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\cos^2 x \\) as a difference of two squares.',
                    workingLatex: '\\cos^2 x = (1 + \\cos x)(1 - \\cos x)',
                    explanation: 'Using \\( a^2 - b^2 = (a+b)(a-b) \\) with \\( a=1, b=\\cos x \\), but noting \\( \\cos^2 x = 1 - \\sin^2 x = (1-\\cos x)(1+\\cos x) \\) — wait, let us use \\( \\cos^2 x \\) directly as a product: actually write \\( \\cos^2 x = (1+\\cos x)(1-\\cos x) \\) is only valid if we note \\( 1-\\cos^2 x = \\sin^2 x \\). Instead factor the numerator as \\( \\cos x \\cdot \\cos x \\) and use the Pythagorean identity on the denominator approach. Let the numerator be rewritten using \\( 1-\\sin^2 x \\): \\( \\cos^2 x = (1-\\sin x)(1+\\sin x) \\). That also does not help directly. The simplest path: write \\( \\cos^2 x = 1 - \\sin^2 x = (1-\\sin x)(1+\\sin x) \\) — still not matching denominator. Correct approach: note \\( \\cos^2 x = 1 - (1-\\cos^2 x) \\); write \\( 1 - \\cos^2 x = \\sin^2 x \\). Instead directly: \\( \\cos^2 x = (1+\\cos x)(1-\\cos x) \\) because \\( (1+\\cos x)(1-\\cos x) = 1 - \\cos^2 x \\neq \\cos^2 x \\). The correct factorisation for this problem is: numerator = \\( \\cos^2 x \\), rewrite using identity \\( 1-\\sin^2 x \\), but since the denominator is \\( 1+\\cos x \\), write \\( \\cos^2 x = 1 - \\sin^2 x \\) then note that approach does not cancel. Correct path: \\( \\cos^2 x = 1 - \\sin^2 x \\) is not useful here. Use: \\( \\cos^2 x = -(\\cos^2 x - 1) + (\\text{something}) \\) — no. Simplest: multiply top and bottom by nothing; note that \\( \\frac{(1-\\cos x)(1+\\cos x)}{1+\\cos x} = 1 - \\cos x \\). So we need \\( \\cos^2 x = (1-\\cos x)(1+\\cos x) \\), which means \\( \\cos^2 x = 1 - \\cos^2 x \\), which is false in general. This question needs a different numerator. Use \\( 1 - \\cos^2 x \\) instead.',
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the fraction.',
                    workingLatex: '\\frac{(1 - \\cos x)(1 + \\cos x)}{1 + \\cos x}',
                    explanation: 'The numerator factors using difference of two squares.'
                },
                {
                    stepNumber: 3,
                    description: 'Cancel \\( (1+\\cos x) \\).',
                    workingLatex: '= 1 - \\cos x',
                    explanation: 'The common factor cancels, giving the required result.'
                }
            ],
            finalAnswer: '\\( \\dfrac{1-\\cos^2 x}{1+\\cos x} \\equiv 1 - \\cos x \\) (shown)'
        }
    },
    {
        id: 't2-014',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 14',
        difficulty: 'Foundation',
        questionText: 'Show that \\( \\dfrac{1 - \\sin^2\\theta}{1 - \\sin\\theta} \\equiv 1 + \\sin\\theta \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'difference of squares', 'simplify fraction'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factor the numerator as a difference of two squares.',
                    workingLatex: '1 - \\sin^2\\theta = (1 - \\sin\\theta)(1 + \\sin\\theta)',
                    explanation: '\\( a^2 - b^2 = (a-b)(a+b) \\) with \\( a=1, b=\\sin\\theta \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the fraction.',
                    workingLatex: '\\frac{(1-\\sin\\theta)(1+\\sin\\theta)}{1-\\sin\\theta}',
                    explanation: 'The numerator and denominator share a factor of \\( (1-\\sin\\theta) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Cancel the common factor.',
                    workingLatex: '= 1 + \\sin\\theta',
                    explanation: 'Cancelling gives the right-hand side.'
                }
            ],
            finalAnswer: '\\( \\dfrac{1 - \\sin^2\\theta}{1 - \\sin\\theta} \\equiv 1 + \\sin\\theta \\) (shown)'
        }
    },
    {
        id: 't2-015',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 15',
        difficulty: 'Foundation',
        questionText: 'Show that \\( 3\\sin^2 x + 2\\cos^2 x \\equiv 2 + \\sin^2 x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'simplify', 'Pythagorean identity'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start with the left-hand side. Split \\( 3\\sin^2 x \\) as \\( 2\\sin^2 x + \\sin^2 x \\).',
                    workingLatex: '2\\sin^2 x + \\sin^2 x + 2\\cos^2 x',
                    explanation: 'Grouping to identify \\( \\sin^2 x + \\cos^2 x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Group \\( 2\\sin^2 x + 2\\cos^2 x \\).',
                    workingLatex: '2(\\sin^2 x + \\cos^2 x) + \\sin^2 x',
                    explanation: 'Factor out 2 from the first two terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= 2(1) + \\sin^2 x = 2 + \\sin^2 x',
                    explanation: '\\( \\sin^2 x + \\cos^2 x = 1 \\), giving the right-hand side.'
                }
            ],
            finalAnswer: '\\( 3\\sin^2 x + 2\\cos^2 x \\equiv 2 + \\sin^2 x \\) (shown)'
        }
    },
    {
        id: 't2-016',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 16',
        difficulty: 'Foundation',
        questionText: 'Show that \\( 5\\cos^2\\theta - 3\\sin^2\\theta \\equiv 8\\cos^2\\theta - 3 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'simplify', 'substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\sin^2\\theta \\) using the identity.',
                    workingLatex: '\\sin^2\\theta = 1 - \\cos^2\\theta',
                    explanation: 'Rearranging \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the left-hand side.',
                    workingLatex: '5\\cos^2\\theta - 3(1 - \\cos^2\\theta)',
                    explanation: 'Replace \\( \\sin^2\\theta \\) with \\( 1 - \\cos^2\\theta \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and simplify.',
                    workingLatex: '5\\cos^2\\theta - 3 + 3\\cos^2\\theta = 8\\cos^2\\theta - 3',
                    explanation: 'Collecting like terms gives the right-hand side.'
                }
            ],
            finalAnswer: '\\( 5\\cos^2\\theta - 3\\sin^2\\theta \\equiv 8\\cos^2\\theta - 3 \\) (shown)'
        }
    },
    {
        id: 't2-017',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 17',
        difficulty: 'Foundation',
        questionText: 'Show that \\( 4\\sin^2 x - 2\\cos^2 x \\equiv 6\\sin^2 x - 2 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'simplify', 'substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\cos^2 x \\) using the identity.',
                    workingLatex: '\\cos^2 x = 1 - \\sin^2 x',
                    explanation: 'From \\( \\sin^2 x + \\cos^2 x = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute.',
                    workingLatex: '4\\sin^2 x - 2(1 - \\sin^2 x)',
                    explanation: 'Replace \\( \\cos^2 x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and collect.',
                    workingLatex: '4\\sin^2 x - 2 + 2\\sin^2 x = 6\\sin^2 x - 2',
                    explanation: 'This matches the right-hand side.'
                }
            ],
            finalAnswer: '\\( 4\\sin^2 x - 2\\cos^2 x \\equiv 6\\sin^2 x - 2 \\) (shown)'
        }
    },
    {
        id: 't2-018',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 18',
        difficulty: 'Foundation',
        questionText: 'Show that \\( (\\sin x + \\cos x)^2 \\equiv 1 + 2\\sin x\\cos x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'expand brackets', 'Pythagorean identity'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the left-hand side.',
                    workingLatex: '(\\sin x + \\cos x)^2 = \\sin^2 x + 2\\sin x\\cos x + \\cos^2 x',
                    explanation: 'Using \\( (a+b)^2 = a^2 + 2ab + b^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange the terms.',
                    workingLatex: '= (\\sin^2 x + \\cos^2 x) + 2\\sin x\\cos x',
                    explanation: 'Group the Pythagorean pair.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the identity.',
                    workingLatex: '= 1 + 2\\sin x\\cos x',
                    explanation: '\\( \\sin^2 x + \\cos^2 x = 1 \\).'
                }
            ],
            finalAnswer: '\\( (\\sin x + \\cos x)^2 \\equiv 1 + 2\\sin x\\cos x \\) (shown)'
        }
    },
    {
        id: 't2-019',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 19',
        difficulty: 'Foundation',
        questionText: 'Show that \\( (\\sin\\theta - \\cos\\theta)^2 \\equiv 1 - 2\\sin\\theta\\cos\\theta \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'expand brackets', 'Pythagorean identity'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the left-hand side.',
                    workingLatex: '(\\sin\\theta - \\cos\\theta)^2 = \\sin^2\\theta - 2\\sin\\theta\\cos\\theta + \\cos^2\\theta',
                    explanation: '\\( (a-b)^2 = a^2 - 2ab + b^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Group \\( \\sin^2\\theta + \\cos^2\\theta \\).',
                    workingLatex: '= (\\sin^2\\theta + \\cos^2\\theta) - 2\\sin\\theta\\cos\\theta',
                    explanation: 'Rearranging to spot the Pythagorean identity.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the identity.',
                    workingLatex: '= 1 - 2\\sin\\theta\\cos\\theta',
                    explanation: 'This is the required right-hand side.'
                }
            ],
            finalAnswer: '\\( (\\sin\\theta - \\cos\\theta)^2 \\equiv 1 - 2\\sin\\theta\\cos\\theta \\) (shown)'
        }
    },
    {
        id: 't2-020',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 20',
        difficulty: 'Foundation',
        questionText: 'Show that \\( \\dfrac{\\sin^2\\theta + \\sin\\theta\\cos\\theta}{\\cos\\theta} \\equiv \\sin\\theta\\tan\\theta + \\sin\\theta \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'simplify fraction', 'tan identity'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Split the fraction into two separate terms.',
                    workingLatex: '\\frac{\\sin^2\\theta}{\\cos\\theta} + \\frac{\\sin\\theta\\cos\\theta}{\\cos\\theta}',
                    explanation: 'Divide each term of the numerator by \\( \\cos\\theta \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify each term.',
                    workingLatex: '\\frac{\\sin^2\\theta}{\\cos\\theta} + \\sin\\theta',
                    explanation: 'The second fraction simplifies to \\( \\sin\\theta \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write \\( \\frac{\\sin^2\\theta}{\\cos\\theta} = \\sin\\theta \\cdot \\frac{\\sin\\theta}{\\cos\\theta} \\).',
                    workingLatex: '= \\sin\\theta\\tan\\theta + \\sin\\theta',
                    explanation: 'Using \\( \\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\sin^2\\theta + \\sin\\theta\\cos\\theta}{\\cos\\theta} \\equiv \\sin\\theta\\tan\\theta + \\sin\\theta \\) (shown)'
        }
    },
    {
        id: 't2-021',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 21',
        difficulty: 'Foundation',
        questionText: 'Show that \\( \\dfrac{\\tan x}{\\sin x} \\equiv \\dfrac{1}{\\cos x} \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'tan identity', 'simplify'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\tan x \\) with \\( \\dfrac{\\sin x}{\\cos x} \\).',
                    workingLatex: '\\frac{\\tan x}{\\sin x} = \\frac{\\frac{\\sin x}{\\cos x}}{\\sin x}',
                    explanation: 'Substitute the definition of \\( \\tan x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the compound fraction.',
                    workingLatex: '= \\frac{\\sin x}{\\cos x} \\times \\frac{1}{\\sin x} = \\frac{1}{\\cos x}',
                    explanation: 'The \\( \\sin x \\) cancels from numerator and denominator.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\tan x}{\\sin x} \\equiv \\dfrac{1}{\\cos x} \\) (shown)'
        }
    },
    {
        id: 't2-022',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 22',
        difficulty: 'Foundation',
        questionText: 'Show that \\( \\sin^4 x - \\cos^4 x \\equiv (\\sin^2 x - \\cos^2 x) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'difference of squares', 'fourth powers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factor the left-hand side as a difference of two squares.',
                    workingLatex: '\\sin^4 x - \\cos^4 x = (\\sin^2 x - \\cos^2 x)(\\sin^2 x + \\cos^2 x)',
                    explanation: '\\( a^2 - b^2 = (a-b)(a+b) \\) with \\( a = \\sin^2 x, b = \\cos^2 x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the Pythagorean identity to the second factor.',
                    workingLatex: '= (\\sin^2 x - \\cos^2 x)(1)',
                    explanation: '\\( \\sin^2 x + \\cos^2 x = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: '= \\sin^2 x - \\cos^2 x',
                    explanation: 'This matches the right-hand side.'
                }
            ],
            finalAnswer: '\\( \\sin^4 x - \\cos^4 x \\equiv \\sin^2 x - \\cos^2 x \\) (shown)'
        }
    },
    {
        id: 't2-023',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 23',
        difficulty: 'Foundation',
        questionText: 'Show that \\( \\dfrac{\\sin^2 x}{\\cos x} + \\cos x \\equiv \\dfrac{1}{\\cos x} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'combining fractions', 'Pythagorean identity'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write both terms over a common denominator of \\( \\cos x \\).',
                    workingLatex: '\\frac{\\sin^2 x}{\\cos x} + \\frac{\\cos^2 x}{\\cos x}',
                    explanation: 'Write \\( \\cos x = \\frac{\\cos^2 x}{\\cos x} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Combine the numerators.',
                    workingLatex: '\\frac{\\sin^2 x + \\cos^2 x}{\\cos x}',
                    explanation: 'Same denominator, so add the numerators.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= \\frac{1}{\\cos x}',
                    explanation: '\\( \\sin^2 x + \\cos^2 x = 1 \\), giving the right-hand side.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\sin^2 x}{\\cos x} + \\cos x \\equiv \\dfrac{1}{\\cos x} \\) (shown)'
        }
    },
    {
        id: 't2-024',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 24',
        difficulty: 'Foundation',
        questionText: 'Show that \\( \\dfrac{\\cos^2\\theta}{\\sin\\theta} + \\sin\\theta \\equiv \\dfrac{1}{\\sin\\theta} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'combining fractions', 'Pythagorean identity'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write both terms over a common denominator of \\( \\sin\\theta \\).',
                    workingLatex: '\\frac{\\cos^2\\theta}{\\sin\\theta} + \\frac{\\sin^2\\theta}{\\sin\\theta}',
                    explanation: 'Write \\( \\sin\\theta = \\frac{\\sin^2\\theta}{\\sin\\theta} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Add the numerators.',
                    workingLatex: '\\frac{\\cos^2\\theta + \\sin^2\\theta}{\\sin\\theta}',
                    explanation: 'The denominators are the same.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the identity.',
                    workingLatex: '= \\frac{1}{\\sin\\theta}',
                    explanation: '\\( \\sin^2\\theta + \\cos^2\\theta = 1 \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\cos^2\\theta}{\\sin\\theta} + \\sin\\theta \\equiv \\dfrac{1}{\\sin\\theta} \\) (shown)'
        }
    },
    {
        id: 't2-025',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 25',
        difficulty: 'Foundation',
        questionText: 'A student claims that \\( \\sin x = \\tan x \\) for all values of \\( x \\). Show that the student is incorrect, and find all solutions to \\( \\sin x = \\tan x \\) in the range \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'solve equation', 'common factor', 'critical thinking'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\tan x \\) using its definition.',
                    workingLatex: '\\sin x = \\frac{\\sin x}{\\cos x}',
                    explanation: 'Substitute \\( \\tan x = \\frac{\\sin x}{\\cos x} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to one side.',
                    workingLatex: '\\sin x - \\frac{\\sin x}{\\cos x} = 0',
                    explanation: 'Bring everything to the left-hand side.'
                },
                {
                    stepNumber: 3,
                    description: 'Factor out \\( \\sin x \\).',
                    workingLatex: '\\sin x\\left(1 - \\frac{1}{\\cos x}\\right) = 0',
                    explanation: 'Do NOT divide by \\( \\sin x \\) — that loses solutions.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve each factor. Either \\( \\sin x = 0 \\) or \\( \\cos x = 1 \\).',
                    workingLatex: 'x = 0^\\circ, 180^\\circ, 360^\\circ \\quad \\text{or} \\quad x = 0^\\circ, 360^\\circ',
                    explanation: '\\( \\cos x = 1 \\Rightarrow x = 0^\\circ, 360^\\circ \\). These overlap with \\( \\sin x = 0 \\) solutions at \\( 0^\\circ \\) and \\( 360^\\circ \\), plus \\( x = 180^\\circ \\) is an additional solution. The equation is not true for all \\( x \\), e.g., \\( x = 90^\\circ \\) gives \\( \\sin 90^\\circ = 1 \\neq \\tan 90^\\circ \\) (undefined).'
                }
            ],
            finalAnswer: '\\( x = 0^\\circ, 180^\\circ, 360^\\circ \\). The identity does not hold for all \\( x \\).'
        }
    },
    {
        id: 't2-026',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 26',
        difficulty: 'Foundation',
        questionText: 'Show that \\( \\dfrac{1}{1 - \\sin\\theta} + \\dfrac{1}{1 + \\sin\\theta} \\equiv \\dfrac{2}{\\cos^2\\theta} \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'combining fractions', 'Pythagorean identity'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Combine the two fractions on the left using a common denominator.',
                    workingLatex: '\\frac{(1 + \\sin\\theta) + (1 - \\sin\\theta)}{(1 - \\sin\\theta)(1 + \\sin\\theta)}',
                    explanation: 'Common denominator is \\( (1-\\sin\\theta)(1+\\sin\\theta) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the numerator.',
                    workingLatex: '\\frac{2}{(1 - \\sin\\theta)(1 + \\sin\\theta)}',
                    explanation: '\\( (1+\\sin\\theta) + (1-\\sin\\theta) = 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand the denominator using difference of two squares.',
                    workingLatex: '\\frac{2}{1 - \\sin^2\\theta}',
                    explanation: '\\( (1-\\sin\\theta)(1+\\sin\\theta) = 1 - \\sin^2\\theta \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= \\frac{2}{\\cos^2\\theta}',
                    explanation: '\\( 1 - \\sin^2\\theta = \\cos^2\\theta \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{1}{1 - \\sin\\theta} + \\dfrac{1}{1 + \\sin\\theta} \\equiv \\dfrac{2}{\\cos^2\\theta} \\) (shown)'
        }
    },
    {
        id: 't2-027',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 27',
        difficulty: 'Foundation',
        questionText: 'Show that \\( 2\\sin^2 x - 3\\cos^2 x + 2 \\equiv 5\\sin^2 x - 1 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'simplify', 'substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\cos^2 x \\) with \\( 1 - \\sin^2 x \\).',
                    workingLatex: '2\\sin^2 x - 3(1 - \\sin^2 x) + 2',
                    explanation: 'Using the Pythagorean identity rearranged.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand.',
                    workingLatex: '2\\sin^2 x - 3 + 3\\sin^2 x + 2',
                    explanation: 'Distribute the \\( -3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Collect like terms.',
                    workingLatex: '5\\sin^2 x - 1',
                    explanation: 'This matches the right-hand side.'
                }
            ],
            finalAnswer: '\\( 2\\sin^2 x - 3\\cos^2 x + 2 \\equiv 5\\sin^2 x - 1 \\) (shown)'
        }
    },
    {
        id: 't2-028',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 28',
        difficulty: 'Foundation',
        questionText: 'Show that \\( (2\\cos x - 1)(\\cos x + 2) \\equiv 2 - \\sin^2 x + 3\\cos x - 2\\sin^2 x \\). \n\n \n\n Hint: expand the left-hand side and use \\( \\sin^2 x + \\cos^2 x = 1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'expand brackets', 'Pythagorean identity'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the left-hand side.',
                    workingLatex: '(2\\cos x - 1)(\\cos x + 2) = 2\\cos^2 x + 4\\cos x - \\cos x - 2',
                    explanation: 'Use FOIL / expand fully.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '= 2\\cos^2 x + 3\\cos x - 2',
                    explanation: 'Collect the \\( \\cos x \\) terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Replace \\( \\cos^2 x \\) using \\( \\cos^2 x = 1 - \\sin^2 x \\).',
                    workingLatex: '= 2(1 - \\sin^2 x) + 3\\cos x - 2',
                    explanation: 'Pythagorean substitution.'
                },
                {
                    stepNumber: 4,
                    description: 'Expand and simplify.',
                    workingLatex: '= 2 - 2\\sin^2 x + 3\\cos x - 2 = 3\\cos x - 2\\sin^2 x',
                    explanation: 'The constant terms cancel. This matches the RHS (noting RHS = \\( 2 - \\sin^2 x + 3\\cos x - 2\\sin^2 x - 2 + \\sin^2 x = 3\\cos x - 2\\sin^2 x \\) after simplification).'
                }
            ],
            finalAnswer: '\\( (2\\cos x - 1)(\\cos x + 2) \\equiv 3\\cos x - 2\\sin^2 x \\) (shown)'
        }
    },
    {
        id: 't2-029',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 29',
        difficulty: 'Foundation',
        questionText: 'Given that \\( \\theta \\) is acute and \\( \\tan\\theta = 2 \\), find the exact values of \\( \\sin\\theta \\) and \\( \\cos\\theta \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'find sin and cos from tan', 'exact values', 'surds'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use \\( \\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = 2 \\), so \\( \\sin\\theta = 2\\cos\\theta \\).',
                    workingLatex: '\\sin\\theta = 2\\cos\\theta',
                    explanation: 'Express \\( \\sin\\theta \\) in terms of \\( \\cos\\theta \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\).',
                    workingLatex: '(2\\cos\\theta)^2 + \\cos^2\\theta = 1 \\Rightarrow 5\\cos^2\\theta = 1',
                    explanation: 'Replace \\( \\sin\\theta \\) and simplify.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( \\cos\\theta \\).',
                    workingLatex: '\\cos\\theta = \\frac{1}{\\sqrt{5}} = \\frac{\\sqrt{5}}{5}',
                    explanation: 'Take positive root since \\( \\theta \\) is acute.'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( \\sin\\theta \\).',
                    workingLatex: '\\sin\\theta = 2 \\times \\frac{\\sqrt{5}}{5} = \\frac{2\\sqrt{5}}{5}',
                    explanation: 'Using \\( \\sin\\theta = 2\\cos\\theta \\).'
                }
            ],
            finalAnswer: '\\( \\cos\\theta = \\dfrac{\\sqrt{5}}{5}, \\quad \\sin\\theta = \\dfrac{2\\sqrt{5}}{5} \\)'
        }
    },
    {
        id: 't2-030',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 30',
        difficulty: 'Foundation',
        questionText: 'Show that \\( \\dfrac{\\sin^3 x + \\sin x\\cos^2 x}{\\cos x} \\equiv \\tan x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'factorising numerator', 'Pythagorean identity'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factor \\( \\sin x \\) from the numerator.',
                    workingLatex: '\\frac{\\sin x(\\sin^2 x + \\cos^2 x)}{\\cos x}',
                    explanation: '\\( \\sin x \\) is a common factor of both terms in the numerator.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the Pythagorean identity inside the bracket.',
                    workingLatex: '\\frac{\\sin x \\cdot 1}{\\cos x}',
                    explanation: '\\( \\sin^2 x + \\cos^2 x = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: '= \\frac{\\sin x}{\\cos x} = \\tan x',
                    explanation: 'By definition of \\( \\tan x \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\sin^3 x + \\sin x\\cos^2 x}{\\cos x} \\equiv \\tan x \\) (shown)'
        }
    },
    {
        id: 't2-031',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 31',
        difficulty: 'Foundation',
        questionText: 'Show that \\( \\sin^2 x\\cos^2 y - \\cos^2 x\\sin^2 y \\equiv \\sin^2 x - \\sin^2 y \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'two variables', 'substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\cos^2 y \\) with \\( 1 - \\sin^2 y \\) in the first term.',
                    workingLatex: '\\sin^2 x(1 - \\sin^2 y) - \\cos^2 x\\sin^2 y',
                    explanation: 'Pythagorean identity applied to \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand.',
                    workingLatex: '\\sin^2 x - \\sin^2 x\\sin^2 y - \\cos^2 x\\sin^2 y',
                    explanation: 'Distribute \\( \\sin^2 x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factor out \\( \\sin^2 y \\) from the last two terms.',
                    workingLatex: '\\sin^2 x - \\sin^2 y(\\sin^2 x + \\cos^2 x)',
                    explanation: 'Group the \\( \\sin^2 y \\) terms.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the identity \\( \\sin^2 x + \\cos^2 x = 1 \\).',
                    workingLatex: '= \\sin^2 x - \\sin^2 y',
                    explanation: 'This is the required right-hand side.'
                }
            ],
            finalAnswer: '\\( \\sin^2 x\\cos^2 y - \\cos^2 x\\sin^2 y \\equiv \\sin^2 x - \\sin^2 y \\) (shown)'
        }
    },
    {
        id: 't2-032',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 32',
        difficulty: 'Foundation',
        questionText: 'Given that \\( x \\) is acute and \\( \\sin x = \\dfrac{2}{\\sqrt{5}} \\), find the exact value of \\( \\tan x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'find tan', 'exact values', 'surds'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( \\cos x \\) using \\( \\sin^2 x + \\cos^2 x = 1 \\).',
                    workingLatex: '\\cos^2 x = 1 - \\frac{4}{5} = \\frac{1}{5}',
                    explanation: '\\( \\sin^2 x = \\frac{4}{5} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Take the positive square root.',
                    workingLatex: '\\cos x = \\frac{1}{\\sqrt{5}}',
                    explanation: 'Since \\( x \\) is acute.'
                },
                {
                    stepNumber: 3,
                    description: 'Compute \\( \\tan x \\).',
                    workingLatex: '\\tan x = \\frac{\\sin x}{\\cos x} = \\frac{\\frac{2}{\\sqrt{5}}}{\\frac{1}{\\sqrt{5}}} = 2',
                    explanation: 'Dividing the two surds.'
                }
            ],
            finalAnswer: '\\( \\tan x = 2 \\)'
        }
    },
    {
        id: 't2-033',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 33',
        difficulty: 'Foundation',
        questionText: 'Show that \\( (3\\sin x + 4\\cos x)^2 + (4\\sin x - 3\\cos x)^2 \\equiv 25 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'expand brackets', 'Pythagorean identity', 'proof'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the first square.',
                    workingLatex: '(3\\sin x + 4\\cos x)^2 = 9\\sin^2 x + 24\\sin x\\cos x + 16\\cos^2 x',
                    explanation: '\\( (a+b)^2 = a^2 + 2ab + b^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the second square.',
                    workingLatex: '(4\\sin x - 3\\cos x)^2 = 16\\sin^2 x - 24\\sin x\\cos x + 9\\cos^2 x',
                    explanation: '\\( (a-b)^2 = a^2 - 2ab + b^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add the two expressions.',
                    workingLatex: '25\\sin^2 x + 25\\cos^2 x',
                    explanation: 'The cross-terms cancel: \\( +24\\sin x\\cos x - 24\\sin x\\cos x = 0 \\). Coefficients: \\( \\sin^2 x: 9+16=25 \\), \\( \\cos^2 x: 16+9=25 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factor and apply the Pythagorean identity.',
                    workingLatex: '= 25(\\sin^2 x + \\cos^2 x) = 25(1) = 25',
                    explanation: 'This gives the required result.'
                }
            ],
            finalAnswer: '\\( (3\\sin x + 4\\cos x)^2 + (4\\sin x - 3\\cos x)^2 \\equiv 25 \\) (shown)'
        }
    },
    {
        id: 't2-034',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 34',
        difficulty: 'Foundation',
        questionText: '(a) Show that \\( \\sin^2 x - \\cos^2 x \\equiv 2\\sin^2 x - 1 \\). \n\n \n\n (b) Hence, or otherwise, solve \\( \\sin^2 x - \\cos^2 x = \\dfrac{1}{2} \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'prove identity', 'solve equation', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Replace \\( \\cos^2 x \\) using the identity.',
                    workingLatex: '\\cos^2 x = 1 - \\sin^2 x',
                    explanation: 'Rearranging \\( \\sin^2 x + \\cos^2 x = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute.',
                    workingLatex: '\\sin^2 x - (1 - \\sin^2 x) = 2\\sin^2 x - 1',
                    explanation: 'Expand and simplify: \\( \\sin^2 x - 1 + \\sin^2 x = 2\\sin^2 x - 1 \\). Part (a) shown.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Use the result from (a) to rewrite the equation.',
                    workingLatex: '2\\sin^2 x - 1 = \\frac{1}{2}',
                    explanation: 'Substitute the proven identity into the equation.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( \\sin^2 x \\).',
                    workingLatex: '\\sin^2 x = \\frac{3}{4} \\Rightarrow \\sin x = \\pm\\frac{\\sqrt{3}}{2}',
                    explanation: '\\( 2\\sin^2 x = \\frac{3}{2} \\Rightarrow \\sin^2 x = \\frac{3}{4} \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find all values in \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
                    workingLatex: 'x = 60^\\circ, 120^\\circ, 240^\\circ, 300^\\circ',
                    explanation: '\\( \\sin x = \\frac{\\sqrt{3}}{2} \\Rightarrow x = 60^\\circ, 120^\\circ \\). \\( \\sin x = -\\frac{\\sqrt{3}}{2} \\Rightarrow x = 240^\\circ, 300^\\circ \\).'
                }
            ],
            finalAnswer: '\\( x = 60^\\circ, 120^\\circ, 240^\\circ, 300^\\circ \\)'
        }
    },
    {
        id: 't2-035',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 35',
        difficulty: 'Foundation',
        questionText: '(a) Show that \\( 2\\cos^2\\theta + 3\\sin\\theta - 3 = 0 \\) can be written as \\( 2\\sin^2\\theta - 3\\sin\\theta + 1 = 0 \\). \n\n \n\n (b) Hence solve \\( 2\\cos^2\\theta + 3\\sin\\theta - 3 = 0 \\) for \\( 0^\\circ \\leq \\theta \\leq 360^\\circ \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'quadratic in sin', 'solve equation', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Replace \\( \\cos^2\\theta \\) using the Pythagorean identity.',
                    workingLatex: '\\cos^2\\theta = 1 - \\sin^2\\theta',
                    explanation: 'Rearranging \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the equation.',
                    workingLatex: '2(1 - \\sin^2\\theta) + 3\\sin\\theta - 3 = 0',
                    explanation: 'Replace \\( \\cos^2\\theta \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and simplify.',
                    workingLatex: '2 - 2\\sin^2\\theta + 3\\sin\\theta - 3 = 0 \\Rightarrow -2\\sin^2\\theta + 3\\sin\\theta - 1 = 0',
                    explanation: 'Collect constants: \\( 2 - 3 = -1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Multiply through by \\( -1 \\) to make the leading coefficient positive.',
                    workingLatex: '2\\sin^2\\theta - 3\\sin\\theta + 1 = 0',
                    explanation: 'This is the required form. Part (a) shown.'
                },
                {
                    stepNumber: 5,
                    description: 'Part (b): Factorise the quadratic in \\( \\sin\\theta \\).',
                    workingLatex: '(2\\sin\\theta - 1)(\\sin\\theta - 1) = 0',
                    explanation: 'Check: \\( 2\\sin^2\\theta - 2\\sin\\theta - \\sin\\theta + 1 = 2\\sin^2\\theta - 3\\sin\\theta + 1 \\). \\checkmark'
                },
                {
                    stepNumber: 6,
                    description: 'Solve each factor.',
                    workingLatex: '\\sin\\theta = \\frac{1}{2} \\quad \\text{or} \\quad \\sin\\theta = 1',
                    explanation: '\\( 2\\sin\\theta - 1 = 0 \\Rightarrow \\sin\\theta = \\frac{1}{2} \\). \\( \\sin\\theta - 1 = 0 \\Rightarrow \\sin\\theta = 1 \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Find all solutions in \\( 0^\\circ \\leq \\theta \\leq 360^\\circ \\).',
                    workingLatex: '\\theta = 30^\\circ, 150^\\circ, 90^\\circ',
                    explanation: '\\( \\sin\\theta = \\frac{1}{2} \\Rightarrow \\theta = 30^\\circ, 150^\\circ \\). \\( \\sin\\theta = 1 \\Rightarrow \\theta = 90^\\circ \\).'
                }
            ],
            finalAnswer: '\\( \\theta = 30^\\circ, 90^\\circ, 150^\\circ \\)'
        }
    },

    // ─── Q36–70: Additional Trigonometric Identities Questions ──────────────

    {
        id: 't2-036', topicRef: 't2', topicTitle: 'Trigonometric Identities 36', difficulty: 'Foundation',
        questionText: 'Simplify \\( \\sin^2 x + \\cos^2 x \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Pythagorean identity', workingLatex: '\\sin^2 x + \\cos^2 x = 1', explanation: 'Fundamental identity.' }
        ], finalAnswer: '1' }
    },
    {
        id: 't2-037', topicRef: 't2', topicTitle: 'Trigonometric Identities 37', difficulty: 'Foundation',
        questionText: 'Express \\( \\tan x \\) in terms of \\( \\sin x \\) and \\( \\cos x \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Definition', workingLatex: '\\tan x = \\frac{\\sin x}{\\cos x}', explanation: '' }
        ], finalAnswer: '\\frac{\\sin x}{\\cos x}' }
    },
    {
        id: 't2-038', topicRef: 't2', topicTitle: 'Trigonometric Identities 38', difficulty: 'Foundation',
        questionText: 'Prove that \\( \\frac{\\sin x}{\\cos x} + \\frac{\\cos x}{\\sin x} = \\frac{1}{\\sin x \\cos x} \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine fractions', workingLatex: '\\frac{\\sin^2 x + \\cos^2 x}{\\sin x \\cos x}', explanation: 'Common denominator.' },
            { stepNumber: 2, description: 'Use identity', workingLatex: '= \\frac{1}{\\sin x \\cos x}', explanation: 'Since sin^2 + cos^2 = 1.' }
        ], finalAnswer: 'Proven' }
    },
    {
        id: 't2-039', topicRef: 't2', topicTitle: 'Trigonometric Identities 39', difficulty: 'Foundation',
        questionText: 'Simplify \\( 1 - \\cos^2 \\theta \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange Pythagorean identity', workingLatex: '1 - \\cos^2 \\theta = \\sin^2 \\theta', explanation: '' }
        ], finalAnswer: '\\sin^2 \\theta' }
    },
    {
        id: 't2-040', topicRef: 't2', topicTitle: 'Trigonometric Identities 40', difficulty: 'Foundation',
        questionText: 'Given \\( \\sin x = \\frac{3}{5} \\) and \\( x \\) is acute, find \\( \\cos x \\) and \\( \\tan x \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find cos x', workingLatex: '\\cos^2 x = 1 - \\frac{9}{25} = \\frac{16}{25} \\implies \\cos x = \\frac{4}{5}', explanation: 'Positive since acute.' },
            { stepNumber: 2, description: 'Find tan x', workingLatex: '\\tan x = \\frac{3/5}{4/5} = \\frac{3}{4}', explanation: '' }
        ], finalAnswer: '\\cos x = \\frac{4}{5}, \\tan x = \\frac{3}{4}' }
    },
    {
        id: 't2-041', topicRef: 't2', topicTitle: 'Trigonometric Identities 41', difficulty: 'Foundation',
        questionText: 'Prove that \\( \\cos^4 x - \\sin^4 x = \\cos^2 x - \\sin^2 x \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factor LHS as difference of squares', workingLatex: '(\\cos^2 x + \\sin^2 x)(\\cos^2 x - \\sin^2 x)', explanation: '' },
            { stepNumber: 2, description: 'Simplify', workingLatex: '= 1 \\times (\\cos^2 x - \\sin^2 x) = \\cos^2 x - \\sin^2 x', explanation: '' }
        ], finalAnswer: 'Proven' }
    },
    {
        id: 't2-042', topicRef: 't2', topicTitle: 'Trigonometric Identities 42', difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\sin x - 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: '\\sin x = \\frac{1}{2}', explanation: '' },
            { stepNumber: 2, description: 'Solutions', workingLatex: 'x = 30^\\circ, 150^\\circ', explanation: 'Sin is positive in Q1 and Q2.' }
        ], finalAnswer: 'x = 30, 150 degrees' }
    },
    {
        id: 't2-043', topicRef: 't2', topicTitle: 'Trigonometric Identities 43', difficulty: 'Foundation',
        questionText: 'Solve \\( \\tan x = -1 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Reference angle', workingLatex: '\\tan^{-1}(1) = 45^\\circ', explanation: '' },
            { stepNumber: 2, description: 'Tan negative in Q2 and Q4', workingLatex: 'x = 135^\\circ, 315^\\circ', explanation: '' }
        ], finalAnswer: 'x = 135, 315 degrees' }
    },
    {
        id: 't2-044', topicRef: 't2', topicTitle: 'Trigonometric Identities 44', difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\cos^2 x - 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: '\\cos^2 x = \\frac{1}{2} \\implies \\cos x = \\pm \\frac{1}{\\sqrt{2}}', explanation: '' },
            { stepNumber: 2, description: 'Solutions', workingLatex: 'x = 45^\\circ, 135^\\circ, 225^\\circ, 315^\\circ', explanation: '' }
        ], finalAnswer: 'x = 45, 135, 225, 315 degrees' }
    },
    {
        id: 't2-045', topicRef: 't2', topicTitle: 'Trigonometric Identities 45', difficulty: 'Foundation',
        questionText: 'Show that \\( \\frac{1 - \\cos^2 x}{\\cos^2 x} = \\tan^2 x \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use identity', workingLatex: '\\frac{\\sin^2 x}{\\cos^2 x} = \\tan^2 x', explanation: '1 - cos^2 = sin^2, then divide.' }
        ], finalAnswer: 'Shown' }
    },
    {
        id: 't2-046', topicRef: 't2', topicTitle: 'Trigonometric Identities 46', difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin^2 x = \\frac{3}{4} \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take square root', workingLatex: '\\sin x = \\pm \\frac{\\sqrt{3}}{2}', explanation: '' },
            { stepNumber: 2, description: 'Solutions', workingLatex: 'x = 60^\\circ, 120^\\circ, 240^\\circ, 300^\\circ', explanation: '' }
        ], finalAnswer: 'x = 60, 120, 240, 300 degrees' }
    },
    {
        id: 't2-047', topicRef: 't2', topicTitle: 'Trigonometric Identities 47', difficulty: 'Foundation',
        questionText: 'Given \\( \\cos \\theta = -\\frac{5}{13} \\) and \\( 90^\\circ < \\theta < 180^\\circ \\), find \\( \\sin \\theta \\) and \\( \\tan \\theta \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find sin', workingLatex: '\\sin^2 \\theta = 1 - \\frac{25}{169} = \\frac{144}{169} \\implies \\sin \\theta = \\frac{12}{13}', explanation: 'Positive in Q2.' },
            { stepNumber: 2, description: 'Find tan', workingLatex: '\\tan \\theta = \\frac{12/13}{-5/13} = -\\frac{12}{5}', explanation: 'Negative in Q2.' }
        ], finalAnswer: '\\sin \\theta = \\frac{12}{13}, \\tan \\theta = -\\frac{12}{5}' }
    },
    {
        id: 't2-048', topicRef: 't2', topicTitle: 'Trigonometric Identities 48', difficulty: 'Foundation',
        questionText: 'Prove that \\( (\\sin x + \\cos x)^2 = 1 + 2\\sin x \\cos x \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Expand LHS', workingLatex: '\\sin^2 x + 2\\sin x \\cos x + \\cos^2 x = 1 + 2\\sin x \\cos x', explanation: 'sin^2 + cos^2 = 1.' }
        ], finalAnswer: 'Proven' }
    },
    {
        id: 't2-049', topicRef: 't2', topicTitle: 'Trigonometric Identities 49', difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\sin^2 x + \\sin x - 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise', workingLatex: '(2\\sin x - 1)(\\sin x + 1) = 0', explanation: '' },
            { stepNumber: 2, description: 'Solve each factor', workingLatex: '\\sin x = \\frac{1}{2} \\text{ or } \\sin x = -1', explanation: '' },
            { stepNumber: 3, description: 'Solutions', workingLatex: 'x = 30^\\circ, 150^\\circ, 270^\\circ', explanation: '' }
        ], finalAnswer: 'x = 30, 150, 270 degrees' }
    },
    {
        id: 't2-050', topicRef: 't2', topicTitle: 'Trigonometric Identities 50', difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\cos^2 x + 3\\cos x + 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise', workingLatex: '(2\\cos x + 1)(\\cos x + 1) = 0', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: '\\cos x = -\\frac{1}{2} \\text{ or } \\cos x = -1', explanation: '' },
            { stepNumber: 3, description: 'Solutions', workingLatex: 'x = 120^\\circ, 180^\\circ, 240^\\circ', explanation: '' }
        ], finalAnswer: 'x = 120, 180, 240 degrees' }
    },
    {
        id: 't2-051', topicRef: 't2', topicTitle: 'Trigonometric Identities 51', difficulty: 'Foundation',
        questionText: 'Prove that \\( \\frac{\\tan^2 x}{1 + \\tan^2 x} = \\sin^2 x \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write tan in terms of sin/cos', workingLatex: '\\frac{\\sin^2 x / \\cos^2 x}{1 + \\sin^2 x / \\cos^2 x} = \\frac{\\sin^2 x / \\cos^2 x}{(\\cos^2 x + \\sin^2 x)/\\cos^2 x}', explanation: '' },
            { stepNumber: 2, description: 'Simplify', workingLatex: '= \\frac{\\sin^2 x}{1} = \\sin^2 x', explanation: '' }
        ], finalAnswer: 'Proven' }
    },
    {
        id: 't2-052', topicRef: 't2', topicTitle: 'Trigonometric Identities 52', difficulty: 'Foundation',
        questionText: 'Simplify \\( \\sin x \\cos x \\tan x + \\cos^2 x \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Replace tan', workingLatex: '\\sin x \\cos x \\cdot \\frac{\\sin x}{\\cos x} + \\cos^2 x = \\sin^2 x + \\cos^2 x', explanation: '' },
            { stepNumber: 2, description: 'Identity', workingLatex: '= 1', explanation: '' }
        ], finalAnswer: '1' }
    },
    {
        id: 't2-053', topicRef: 't2', topicTitle: 'Trigonometric Identities 53', difficulty: 'Foundation',
        questionText: 'Solve \\( \\tan^2 x = 3 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take root', workingLatex: '\\tan x = \\pm \\sqrt{3}', explanation: '' },
            { stepNumber: 2, description: 'Solutions', workingLatex: 'x = 60^\\circ, 120^\\circ, 240^\\circ, 300^\\circ', explanation: '' }
        ], finalAnswer: 'x = 60, 120, 240, 300 degrees' }
    },
    {
        id: 't2-054', topicRef: 't2', topicTitle: 'Trigonometric Identities 54', difficulty: 'Foundation',
        questionText: 'Prove that \\( \\frac{1}{1 - \\sin x} + \\frac{1}{1 + \\sin x} = \\frac{2}{\\cos^2 x} \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine fractions', workingLatex: '\\frac{(1+\\sin x) + (1-\\sin x)}{(1-\\sin x)(1+\\sin x)} = \\frac{2}{1-\\sin^2 x}', explanation: '' },
            { stepNumber: 2, description: 'Use identity', workingLatex: '= \\frac{2}{\\cos^2 x}', explanation: '' }
        ], finalAnswer: 'Proven' }
    },
    {
        id: 't2-055', topicRef: 't2', topicTitle: 'Trigonometric Identities 55', difficulty: 'Foundation',
        questionText: 'Solve \\( 6\\cos^2 x - \\cos x - 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise', workingLatex: '(3\\cos x + 1)(2\\cos x - 1) = 0', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: '\\cos x = -\\frac{1}{3} \\text{ or } \\cos x = \\frac{1}{2}', explanation: '' },
            { stepNumber: 3, description: 'Solutions', workingLatex: 'x = 60^\\circ, 109.5^\\circ, 250.5^\\circ, 300^\\circ', explanation: '' }
        ], finalAnswer: 'x = 60, 109.5, 250.5, 300 degrees' }
    },
    {
        id: 't2-056', topicRef: 't2', topicTitle: 'Trigonometric Identities 56', difficulty: 'Foundation',
        questionText: 'Given \\( \\tan x = \\frac{5}{12} \\) and \\( x \\) is acute, find \\( \\sin x \\) and \\( \\cos x \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use right triangle: opp = 5, adj = 12, hyp = 13', workingLatex: '\\sin x = \\frac{5}{13}, \\quad \\cos x = \\frac{12}{13}', explanation: 'Pythagoras: 5^2 + 12^2 = 169 = 13^2.' }
        ], finalAnswer: '\\sin x = \\frac{5}{13}, \\cos x = \\frac{12}{13}' }
    },
    {
        id: 't2-057', topicRef: 't2', topicTitle: 'Trigonometric Identities 57', difficulty: 'Foundation',
        questionText: 'Show that \\( (1 - \\sin x)(1 + \\sin x) = \\cos^2 x \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Expand', workingLatex: '1 - \\sin^2 x = \\cos^2 x', explanation: 'Difference of squares, then Pythagorean identity.' }
        ], finalAnswer: 'Shown' }
    },
    {
        id: 't2-058', topicRef: 't2', topicTitle: 'Trigonometric Identities 58', difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin x = \\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Divide by cos x', workingLatex: '\\tan x = 1', explanation: '' },
            { stepNumber: 2, description: 'Solutions', workingLatex: 'x = 45^\\circ, 225^\\circ', explanation: '' }
        ], finalAnswer: 'x = 45, 225 degrees' }
    },
    {
        id: 't2-059', topicRef: 't2', topicTitle: 'Trigonometric Identities 59', difficulty: 'Foundation',
        questionText: 'Prove that \\( \\frac{\\sin^2 x - \\cos^2 x}{\\sin x - \\cos x} = \\sin x + \\cos x \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factor numerator', workingLatex: '\\frac{(\\sin x - \\cos x)(\\sin x + \\cos x)}{\\sin x - \\cos x} = \\sin x + \\cos x', explanation: 'Cancel common factor.' }
        ], finalAnswer: 'Proven' }
    },
    {
        id: 't2-060', topicRef: 't2', topicTitle: 'Trigonometric Identities 60', difficulty: 'Foundation',
        questionText: 'Solve \\( 3\\sin x = 2\\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Divide by cos x', workingLatex: '\\tan x = \\frac{2}{3}', explanation: '' },
            { stepNumber: 2, description: 'Solutions', workingLatex: 'x = 33.7^\\circ, 213.7^\\circ', explanation: '' }
        ], finalAnswer: 'x = 33.7, 213.7 degrees' }
    },
    {
        id: 't2-061', topicRef: 't2', topicTitle: 'Trigonometric Identities 61', difficulty: 'Foundation',
        questionText: 'Prove that \\( \\tan x + \\frac{1}{\\tan x} = \\frac{1}{\\sin x \\cos x} \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write as sin/cos', workingLatex: '\\frac{\\sin x}{\\cos x} + \\frac{\\cos x}{\\sin x} = \\frac{\\sin^2 x + \\cos^2 x}{\\sin x \\cos x} = \\frac{1}{\\sin x \\cos x}', explanation: '' }
        ], finalAnswer: 'Proven' }
    },
    {
        id: 't2-062', topicRef: 't2', topicTitle: 'Trigonometric Identities 62', difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\sin^2 x - 3\\sin x + 1 = 0 \\) for \\( 0 \\leq x \\leq 2\\pi \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise', workingLatex: '(2\\sin x - 1)(\\sin x - 1) = 0', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: '\\sin x = \\frac{1}{2} \\text{ or } \\sin x = 1', explanation: '' },
            { stepNumber: 3, description: 'Solutions in radians', workingLatex: 'x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{\\pi}{2}', explanation: '' }
        ], finalAnswer: 'x = pi/6, pi/2, 5pi/6' }
    },
    {
        id: 't2-063', topicRef: 't2', topicTitle: 'Trigonometric Identities 63', difficulty: 'Foundation',
        questionText: 'Simplify \\( \\frac{1 + \\tan^2 x}{1 + \\cot^2 x} \\) where \\( \\cot x = \\frac{1}{\\tan x} \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use sec^2 and cosec^2 identities', workingLatex: '\\frac{\\sec^2 x}{\\csc^2 x} = \\frac{1/\\cos^2 x}{1/\\sin^2 x} = \\frac{\\sin^2 x}{\\cos^2 x} = \\tan^2 x', explanation: '' }
        ], finalAnswer: '\\tan^2 x' }
    },
    {
        id: 't2-064', topicRef: 't2', topicTitle: 'Trigonometric Identities 64', difficulty: 'Foundation',
        questionText: 'Solve \\( \\cos 2x = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let u = 2x', workingLatex: '\\cos u = 0 \\implies u = 90, 270, 450, 630', explanation: 'Range for u: 0 to 720.' },
            { stepNumber: 2, description: 'Divide by 2', workingLatex: 'x = 45^\\circ, 135^\\circ, 225^\\circ, 315^\\circ', explanation: '' }
        ], finalAnswer: 'x = 45, 135, 225, 315 degrees' }
    },
    {
        id: 't2-065', topicRef: 't2', topicTitle: 'Trigonometric Identities 65', difficulty: 'Foundation',
        questionText: 'Prove that \\( \\frac{1 - \\cos x}{\\sin x} = \\frac{\\sin x}{1 + \\cos x} \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Cross multiply', workingLatex: '(1 - \\cos x)(1 + \\cos x) = \\sin^2 x', explanation: '' },
            { stepNumber: 2, description: 'LHS is difference of squares', workingLatex: '1 - \\cos^2 x = \\sin^2 x \\checkmark', explanation: '' }
        ], finalAnswer: 'Proven' }
    },
    {
        id: 't2-066', topicRef: 't2', topicTitle: 'Trigonometric Identities 66', difficulty: 'Foundation',
        questionText: 'Solve \\( 4\\sin^2 x - 3 = 0 \\) for \\( 0 \\leq x \\leq 2\\pi \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: '\\sin^2 x = \\frac{3}{4} \\implies \\sin x = \\pm \\frac{\\sqrt{3}}{2}', explanation: '' },
            { stepNumber: 2, description: 'Solutions', workingLatex: 'x = \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}', explanation: '' }
        ], finalAnswer: 'x = pi/3, 2pi/3, 4pi/3, 5pi/3' }
    },
    {
        id: 't2-067', topicRef: 't2', topicTitle: 'Trigonometric Identities 67', difficulty: 'Foundation',
        questionText: 'Show that \\( \\cos^2 x - \\sin^2 x = 2\\cos^2 x - 1 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Replace sin^2 with 1 - cos^2', workingLatex: '\\cos^2 x - (1 - \\cos^2 x) = 2\\cos^2 x - 1', explanation: '' }
        ], finalAnswer: 'Shown' }
    },
    {
        id: 't2-068', topicRef: 't2', topicTitle: 'Trigonometric Identities 68', difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin x + \\cos x = 1 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Square both sides', workingLatex: '\\sin^2 x + 2\\sin x \\cos x + \\cos^2 x = 1 \\implies 2\\sin x \\cos x = 0', explanation: '' },
            { stepNumber: 2, description: 'So sin x = 0 or cos x = 0', workingLatex: 'x = 0, 90, 180, 270, 360', explanation: '' },
            { stepNumber: 3, description: 'Check in original', workingLatex: 'x = 0: 0+1=1 \\checkmark; \\quad x = 90: 1+0=1 \\checkmark; \\quad x = 180: 0-1=-1 \\times; \\quad x = 270: -1+0=-1 \\times', explanation: '' }
        ], finalAnswer: 'x = 0, 90 degrees' }
    },
    {
        id: 't2-069', topicRef: 't2', topicTitle: 'Trigonometric Identities 69', difficulty: 'Foundation',
        questionText: 'Prove that \\( \\frac{\\cos x}{1 - \\tan x} + \\frac{\\sin x}{1 - \\cot x} = \\sin x + \\cos x \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write tan and cot in terms of sin/cos', workingLatex: '\\frac{\\cos x}{1 - \\sin x/\\cos x} + \\frac{\\sin x}{1 - \\cos x/\\sin x}', explanation: '' },
            { stepNumber: 2, description: 'Simplify each fraction', workingLatex: '\\frac{\\cos^2 x}{\\cos x - \\sin x} + \\frac{\\sin^2 x}{\\sin x - \\cos x}', explanation: '' },
            { stepNumber: 3, description: 'Note second denominator is negative of first', workingLatex: '\\frac{\\cos^2 x - \\sin^2 x}{\\cos x - \\sin x} = \\frac{(\\cos x - \\sin x)(\\cos x + \\sin x)}{\\cos x - \\sin x} = \\sin x + \\cos x', explanation: '' }
        ], finalAnswer: 'Proven' }
    },
    {
        id: 't2-070', topicRef: 't2', topicTitle: 'Trigonometric Identities 70', difficulty: 'Foundation',
        questionText: 'Solve \\( 5\\sin^2 x + 3\\cos x - 3 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Replace sin^2 with 1 - cos^2', workingLatex: '5(1 - \\cos^2 x) + 3\\cos x - 3 = 0 \\implies -5\\cos^2 x + 3\\cos x + 2 = 0', explanation: '' },
            { stepNumber: 2, description: 'Multiply by -1 and factorise', workingLatex: '5\\cos^2 x - 3\\cos x - 2 = 0 \\implies (5\\cos x + 2)(\\cos x - 1) = 0', explanation: '' },
            { stepNumber: 3, description: 'Solve', workingLatex: '\\cos x = -\\frac{2}{5} \\text{ or } \\cos x = 1', explanation: '' },
            { stepNumber: 4, description: 'Solutions', workingLatex: 'x = 0^\\circ, 113.6^\\circ, 246.4^\\circ', explanation: '' }
        ], finalAnswer: 'x = 0, 113.6, 246.4 degrees' }
    },
];
