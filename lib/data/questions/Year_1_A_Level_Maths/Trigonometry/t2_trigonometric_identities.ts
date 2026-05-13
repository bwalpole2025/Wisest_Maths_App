import { Question } from "@/lib/types";

function sample(f: (x: number) => number, xMin: number, xMax: number, n = 120): Array<[number, number]> {
    const pts: Array<[number, number]> = [];
    for (let i = 0; i < n; i++) {
        const x = xMin + (i / (n - 1)) * (xMax - xMin);
        pts.push([x, f(x)]);
    }
    return pts;
}

// Sample a tan curve while avoiding the asymptotes by splitting around them.
function sampleTanDeg(xMin: number, xMax: number, asymptotes: number[], yClip = 5, nPerSegment = 60): Array<Array<[number, number]>> {
    const bounds = [xMin, ...asymptotes.filter(a => a > xMin && a < xMax), xMax];
    const segments: Array<Array<[number, number]>> = [];
    for (let s = 0; s < bounds.length - 1; s++) {
        const a = bounds[s] + 0.5;
        const b = bounds[s + 1] - 0.5;
        if (b <= a) continue;
        const seg: Array<[number, number]> = [];
        for (let i = 0; i < nPerSegment; i++) {
            const x = a + (i / (nPerSegment - 1)) * (b - a);
            const y = Math.tan((x * Math.PI) / 180);
            if (Math.abs(y) <= yClip) seg.push([x, y]);
        }
        if (seg.length > 0) segments.push(seg);
    }
    return segments;
}

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
        difficulty: 'Standard',
        questionText: 'Prove that \\( (1 - \\cos\\theta)(1 + \\cos\\theta) \\equiv \\sin^2\\theta \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'difference of squares', 'pythagorean'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = (1 - \\cos\\theta)(1 + \\cos\\theta)',
                    explanation: 'When proving an identity we manipulate one side until it matches the other. The LHS is a product of conjugate brackets, which is exactly the shape of the difference of two squares.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand using difference of two squares.',
                    workingLatex: '= 1^2 - \\cos^2\\theta',
                    explanation: 'Apply \\( (a-b)(a+b) = a^2 - b^2 \\) with \\( a = 1 \\) and \\( b = \\cos\\theta \\). The cross-terms cancel automatically, so no full FOIL expansion is needed.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: '= 1 - \\cos^2\\theta',
                    explanation: '\\( 1^2 = 1 \\). The expression is now in the form \\( 1 - \\cos^2\\theta \\), which is one of the standard rearrangements of the Pythagorean identity.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the rearranged Pythagorean identity.',
                    workingLatex: '= \\sin^2\\theta = \\text{RHS}',
                    explanation: 'From \\( \\sin^2\\theta + \\cos^2\\theta \\equiv 1 \\) we get \\( 1 - \\cos^2\\theta \\equiv \\sin^2\\theta \\). The LHS now matches the RHS, so the identity is proved.'
                }
            ],
            finalAnswer: '\\( (1 - \\cos\\theta)(1 + \\cos\\theta) \\equiv \\sin^2\\theta \\) (proved)'
        }
    },
    {
        id: 't2-002',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 02',
        difficulty: 'Standard',
        questionText: 'Prove that \\( (\\sin\\theta + \\cos\\theta)^2 + (\\sin\\theta - \\cos\\theta)^2 \\equiv 2 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'pythagorean', 'expansion'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = (\\sin\\theta + \\cos\\theta)^2 + (\\sin\\theta - \\cos\\theta)^2',
                    explanation: 'The LHS is a sum of two squared brackets. Expanding each will produce cross-terms with opposite signs that should cancel — a classic algebraic trick worth recognising.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the first bracket.',
                    workingLatex: '(\\sin\\theta + \\cos\\theta)^2 = \\sin^2\\theta + 2\\sin\\theta\\cos\\theta + \\cos^2\\theta',
                    explanation: 'Use \\( (a+b)^2 = a^2 + 2ab + b^2 \\) with \\( a = \\sin\\theta \\) and \\( b = \\cos\\theta \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand the second bracket.',
                    workingLatex: '(\\sin\\theta - \\cos\\theta)^2 = \\sin^2\\theta - 2\\sin\\theta\\cos\\theta + \\cos^2\\theta',
                    explanation: 'Use \\( (a-b)^2 = a^2 - 2ab + b^2 \\). The middle term picks up a minus sign, which is the key to the cancellation in the next step.'
                },
                {
                    stepNumber: 4,
                    description: 'Add the two expansions.',
                    workingLatex: '= 2\\sin^2\\theta + 2\\cos^2\\theta + 2\\sin\\theta\\cos\\theta - 2\\sin\\theta\\cos\\theta',
                    explanation: 'The \\( +2\\sin\\theta\\cos\\theta \\) and \\( -2\\sin\\theta\\cos\\theta \\) cross-terms have opposite signs, so they cancel. The squared terms double up.'
                },
                {
                    stepNumber: 5,
                    description: 'Factor out 2 and apply the Pythagorean identity.',
                    workingLatex: '= 2(\\sin^2\\theta + \\cos^2\\theta) = 2(1) = 2 = \\text{RHS}',
                    explanation: 'Factor 2 from the surviving terms, then replace \\( \\sin^2\\theta + \\cos^2\\theta \\) with 1. The LHS equals 2, matching the RHS.'
                }
            ],
            finalAnswer: '\\( (\\sin\\theta + \\cos\\theta)^2 + (\\sin\\theta - \\cos\\theta)^2 \\equiv 2 \\) (proved)'
        }
    },
    {
        id: 't2-003',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 03',
        difficulty: 'Standard',
        questionText: 'Prove that \\( (\\sin\\theta + \\cos\\theta)^2 \\equiv 1 + 2\\sin\\theta\\cos\\theta \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'pythagorean', 'expansion'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = (\\sin\\theta + \\cos\\theta)^2',
                    explanation: 'We expand the squared bracket; the Pythagorean identity will then collapse two of the three terms into a 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand using \\( (a+b)^2 = a^2 + 2ab + b^2 \\).',
                    workingLatex: '= \\sin^2\\theta + 2\\sin\\theta\\cos\\theta + \\cos^2\\theta',
                    explanation: 'Treat \\( \\sin\\theta \\) as \\( a \\) and \\( \\cos\\theta \\) as \\( b \\). The middle term \\( 2ab \\) is \\( 2\\sin\\theta\\cos\\theta \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Group the squared terms.',
                    workingLatex: '= (\\sin^2\\theta + \\cos^2\\theta) + 2\\sin\\theta\\cos\\theta',
                    explanation: 'Reorder using the commutative property so the \\( \\sin^2\\theta \\) and \\( \\cos^2\\theta \\) sit together. This isolates the Pythagorean piece.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= 1 + 2\\sin\\theta\\cos\\theta = \\text{RHS}',
                    explanation: 'Replace \\( \\sin^2\\theta + \\cos^2\\theta \\) with 1. The result matches the right-hand side exactly, so the identity is proved.'
                }
            ],
            finalAnswer: '\\( (\\sin\\theta + \\cos\\theta)^2 \\equiv 1 + 2\\sin\\theta\\cos\\theta \\) (proved)'
        }
    },
    {
        id: 't2-004',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 04',
        difficulty: 'Challenge',
        questionText: 'Prove that \\( \\sin^4\\theta + \\cos^4\\theta \\equiv 1 - 2\\sin^2\\theta\\cos^2\\theta \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'pythagorean', 'fourth powers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the LHS and split each fourth power into a product.',
                    workingLatex: '\\text{LHS} = \\sin^4\\theta + \\cos^4\\theta = \\sin^2\\theta \\cdot \\sin^2\\theta + \\cos^2\\theta \\cdot \\cos^2\\theta',
                    explanation: 'Writing \\( \\sin^4\\theta \\) as \\( \\sin^2\\theta \\cdot \\sin^2\\theta \\) (and similarly for \\( \\cos^4\\theta \\)) lets us replace just ONE of the two factors using the Pythagorean identity, which is the move that unlocks the proof.'
                },
                {
                    stepNumber: 2,
                    description: 'Use the Pythagorean identity to rewrite one factor of each term.',
                    workingLatex: '= \\sin^2\\theta(1 - \\cos^2\\theta) + \\cos^2\\theta(1 - \\sin^2\\theta)',
                    explanation: 'From \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\) we get \\( \\sin^2\\theta = 1 - \\cos^2\\theta \\) and \\( \\cos^2\\theta = 1 - \\sin^2\\theta \\). Substituting into one factor of each product converts the fourth powers into a mix of squared terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand both brackets.',
                    workingLatex: '= \\sin^2\\theta - \\sin^2\\theta\\cos^2\\theta + \\cos^2\\theta - \\sin^2\\theta\\cos^2\\theta',
                    explanation: 'Distributing \\( \\sin^2\\theta \\) over \\( (1 - \\cos^2\\theta) \\) gives \\( \\sin^2\\theta - \\sin^2\\theta\\cos^2\\theta \\), and similarly for the other bracket. Notice that two identical \\( \\sin^2\\theta\\cos^2\\theta \\) terms appear — they will combine in the next step.'
                },
                {
                    stepNumber: 4,
                    description: 'Group \\( \\sin^2\\theta + \\cos^2\\theta \\) and collect the cross terms.',
                    workingLatex: '= (\\sin^2\\theta + \\cos^2\\theta) - 2\\sin^2\\theta\\cos^2\\theta',
                    explanation: 'The two \\( -\\sin^2\\theta\\cos^2\\theta \\) terms add to \\( -2\\sin^2\\theta\\cos^2\\theta \\). The remaining \\( \\sin^2\\theta + \\cos^2\\theta \\) is exactly what the Pythagorean identity tells us how to simplify.'
                },
                {
                    stepNumber: 5,
                    description: 'Apply \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\).',
                    workingLatex: '= 1 - 2\\sin^2\\theta\\cos^2\\theta = \\text{RHS}',
                    explanation: 'Replacing the bracketed sum with 1 gives the right-hand side exactly. Starting from the LHS we have reached the RHS using only valid algebraic moves, so the identity is proved.'
                }
            ],
            finalAnswer: '\\( \\sin^4\\theta + \\cos^4\\theta \\equiv 1 - 2\\sin^2\\theta\\cos^2\\theta \\) (proved)'
        }
    },
    {
        id: 't2-005',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 05',
        difficulty: 'Standard',
        questionText: 'Prove that \\( \\dfrac{1 - \\cos^2\\theta}{1 - \\sin^2\\theta} \\equiv \\tan^2\\theta \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'pythagorean', 'quotient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{1 - \\cos^2\\theta}{1 - \\sin^2\\theta}',
                    explanation: 'Both the numerator and denominator are rearrangements of the Pythagorean identity, so we can replace each with a single squared trig term.'
                },
                {
                    stepNumber: 2,
                    description: 'Replace the numerator using \\( 1 - \\cos^2\\theta = \\sin^2\\theta \\).',
                    workingLatex: '= \\frac{\\sin^2\\theta}{1 - \\sin^2\\theta}',
                    explanation: 'Subtract \\( \\cos^2\\theta \\) from both sides of \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\) to get \\( \\sin^2\\theta = 1 - \\cos^2\\theta \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Replace the denominator using \\( 1 - \\sin^2\\theta = \\cos^2\\theta \\).',
                    workingLatex: '= \\frac{\\sin^2\\theta}{\\cos^2\\theta}',
                    explanation: 'Similarly, subtracting \\( \\sin^2\\theta \\) from both sides of the Pythagorean identity gives \\( \\cos^2\\theta = 1 - \\sin^2\\theta \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Rewrite as a squared fraction.',
                    workingLatex: '= \\left(\\frac{\\sin\\theta}{\\cos\\theta}\\right)^2',
                    explanation: 'Using \\( \\dfrac{a^2}{b^2} = \\left(\\dfrac{a}{b}\\right)^2 \\) pulls the square across the whole fraction so the quotient identity is visible.'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the quotient identity.',
                    workingLatex: '= \\tan^2\\theta = \\text{RHS}',
                    explanation: 'Since \\( \\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta} \\), squaring both sides gives \\( \\tan^2\\theta \\). The LHS now matches the RHS.'
                }
            ],
            finalAnswer: '\\( \\dfrac{1 - \\cos^2\\theta}{1 - \\sin^2\\theta} \\equiv \\tan^2\\theta \\) (proved)'
        }
    },
    {
        id: 't2-006',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 06',
        difficulty: 'Challenge',
        questionText: 'Prove that \\( \\tan^2\\theta - \\sin^2\\theta \\equiv \\tan^2\\theta\\sin^2\\theta \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'pythagorean', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\tan^2\\theta - \\sin^2\\theta',
                    explanation: 'Both terms contain a \\( \\sin^2 \\) factor in disguise, so factorising will reveal a common piece. Converting \\( \\tan \\) into \\( \\sin/\\cos \\) is the natural first move.'
                },
                {
                    stepNumber: 2,
                    description: 'Replace \\( \\tan^2\\theta \\) using the quotient identity.',
                    workingLatex: '= \\frac{\\sin^2\\theta}{\\cos^2\\theta} - \\sin^2\\theta',
                    explanation: 'Since \\( \\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta} \\), squaring gives \\( \\tan^2\\theta = \\dfrac{\\sin^2\\theta}{\\cos^2\\theta} \\). Now everything is in terms of \\( \\sin \\) and \\( \\cos \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factor out the common factor \\( \\sin^2\\theta \\).',
                    workingLatex: '= \\sin^2\\theta\\left(\\frac{1}{\\cos^2\\theta} - 1\\right)',
                    explanation: 'Both terms have \\( \\sin^2\\theta \\) as a factor — the first has \\( \\dfrac{\\sin^2\\theta}{\\cos^2\\theta} = \\sin^2\\theta \\cdot \\dfrac{1}{\\cos^2\\theta} \\) and the second is \\( \\sin^2\\theta \\cdot 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Combine the bracket into a single fraction.',
                    workingLatex: '= \\sin^2\\theta\\left(\\frac{1 - \\cos^2\\theta}{\\cos^2\\theta}\\right)',
                    explanation: 'Subtract over a common denominator \\( \\cos^2\\theta \\); writing 1 as \\( \\dfrac{\\cos^2\\theta}{\\cos^2\\theta} \\) gives \\( \\dfrac{1 - \\cos^2\\theta}{\\cos^2\\theta} \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the Pythagorean identity to the numerator.',
                    workingLatex: '= \\sin^2\\theta \\cdot \\frac{\\sin^2\\theta}{\\cos^2\\theta}',
                    explanation: '\\( 1 - \\cos^2\\theta \\equiv \\sin^2\\theta \\). The bracket is now \\( \\dfrac{\\sin^2\\theta}{\\cos^2\\theta} \\), which we recognise as \\( \\tan^2\\theta \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Re-apply the quotient identity.',
                    workingLatex: '= \\sin^2\\theta\\tan^2\\theta = \\text{RHS}',
                    explanation: 'Replacing \\( \\dfrac{\\sin^2\\theta}{\\cos^2\\theta} \\) with \\( \\tan^2\\theta \\) gives \\( \\sin^2\\theta \\tan^2\\theta \\), which is the right-hand side.'
                }
            ],
            finalAnswer: '\\( \\tan^2\\theta - \\sin^2\\theta \\equiv \\tan^2\\theta\\sin^2\\theta \\) (proved)'
        }
    },
    {
        id: 't2-007',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 07',
        difficulty: 'Challenge',
        questionText: 'Prove that \\( \\dfrac{\\sin\\theta}{1 + \\cos\\theta} + \\dfrac{1 + \\cos\\theta}{\\sin\\theta} \\equiv \\dfrac{2}{\\sin\\theta} \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'pythagorean', 'combining fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{\\sin\\theta}{1 + \\cos\\theta} + \\frac{1 + \\cos\\theta}{\\sin\\theta}',
                    explanation: 'To add the two fractions we need a common denominator. The product of the two denominators is \\( \\sin\\theta(1 + \\cos\\theta) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write over a common denominator.',
                    workingLatex: '= \\frac{\\sin\\theta \\cdot \\sin\\theta + (1 + \\cos\\theta)(1 + \\cos\\theta)}{\\sin\\theta(1 + \\cos\\theta)}',
                    explanation: 'Multiply the first fraction top and bottom by \\( \\sin\\theta \\) and the second by \\( 1 + \\cos\\theta \\). The combined numerator is \\( \\sin^2\\theta + (1+\\cos\\theta)^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand the squared bracket in the numerator.',
                    workingLatex: '= \\frac{\\sin^2\\theta + 1 + 2\\cos\\theta + \\cos^2\\theta}{\\sin\\theta(1 + \\cos\\theta)}',
                    explanation: 'Use \\( (1+\\cos\\theta)^2 = 1 + 2\\cos\\theta + \\cos^2\\theta \\). Now we have a \\( \\sin^2\\theta + \\cos^2\\theta \\) pair ready for the Pythagorean identity.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the Pythagorean identity in the numerator.',
                    workingLatex: '= \\frac{1 + 1 + 2\\cos\\theta}{\\sin\\theta(1 + \\cos\\theta)} = \\frac{2 + 2\\cos\\theta}{\\sin\\theta(1 + \\cos\\theta)}',
                    explanation: '\\( \\sin^2\\theta + \\cos^2\\theta = 1 \\) collapses two terms into 1. The numerator simplifies to \\( 2 + 2\\cos\\theta \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Factor the numerator.',
                    workingLatex: '= \\frac{2(1 + \\cos\\theta)}{\\sin\\theta(1 + \\cos\\theta)}',
                    explanation: 'Factor 2 out of \\( 2 + 2\\cos\\theta \\). This reveals a common factor of \\( 1 + \\cos\\theta \\) in numerator and denominator.'
                },
                {
                    stepNumber: 6,
                    description: 'Cancel the common factor \\( 1 + \\cos\\theta \\).',
                    workingLatex: '= \\frac{2}{\\sin\\theta} = \\text{RHS}',
                    explanation: 'Provided \\( \\cos\\theta \\neq -1 \\), the \\( (1 + \\cos\\theta) \\) factors cancel, leaving \\( \\dfrac{2}{\\sin\\theta} \\), the right-hand side.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\sin\\theta}{1 + \\cos\\theta} + \\dfrac{1 + \\cos\\theta}{\\sin\\theta} \\equiv \\dfrac{2}{\\sin\\theta} \\) (proved)'
        }
    },
    {
        id: 't2-008',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 08',
        difficulty: 'Challenge',
        questionText: 'Prove that \\( \\dfrac{1}{1 - \\sin\\theta} + \\dfrac{1}{1 + \\sin\\theta} \\equiv \\dfrac{2}{\\cos^2\\theta} \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'pythagorean', 'combining fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{1}{1 - \\sin\\theta} + \\frac{1}{1 + \\sin\\theta}',
                    explanation: 'The two denominators are conjugates, so their product gives a difference of two squares — perfect for the Pythagorean identity.'
                },
                {
                    stepNumber: 2,
                    description: 'Combine over a common denominator.',
                    workingLatex: '= \\frac{(1 + \\sin\\theta) + (1 - \\sin\\theta)}{(1 - \\sin\\theta)(1 + \\sin\\theta)}',
                    explanation: 'Multiply the first fraction top and bottom by \\( 1 + \\sin\\theta \\) and the second by \\( 1 - \\sin\\theta \\). This gives a single fraction with the conjugate product as the denominator.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the numerator.',
                    workingLatex: '= \\frac{2}{(1 - \\sin\\theta)(1 + \\sin\\theta)}',
                    explanation: 'The \\( +\\sin\\theta \\) and \\( -\\sin\\theta \\) terms cancel, leaving \\( 1 + 1 = 2 \\) on top.'
                },
                {
                    stepNumber: 4,
                    description: 'Expand the denominator as a difference of squares.',
                    workingLatex: '= \\frac{2}{1 - \\sin^2\\theta}',
                    explanation: 'Use \\( (a-b)(a+b) = a^2 - b^2 \\) with \\( a = 1 \\), \\( b = \\sin\\theta \\). The denominator becomes \\( 1 - \\sin^2\\theta \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= \\frac{2}{\\cos^2\\theta} = \\text{RHS}',
                    explanation: 'Since \\( \\sin^2\\theta + \\cos^2\\theta \\equiv 1 \\), we have \\( 1 - \\sin^2\\theta \\equiv \\cos^2\\theta \\). The LHS matches the RHS.'
                }
            ],
            finalAnswer: '\\( \\dfrac{1}{1 - \\sin\\theta} + \\dfrac{1}{1 + \\sin\\theta} \\equiv \\dfrac{2}{\\cos^2\\theta} \\) (proved)'
        }
    },
    {
        id: 't2-009',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 09',
        difficulty: 'Standard',
        questionText: 'Prove that \\( \\sin^3\\theta + \\cos^3\\theta \\equiv (\\sin\\theta + \\cos\\theta)(1 - \\sin\\theta\\cos\\theta) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'sum of cubes', 'pythagorean'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\sin^3\\theta + \\cos^3\\theta',
                    explanation: 'This is a sum of two cubes. The algebraic identity \\( a^3 + b^3 = (a+b)(a^2 - ab + b^2) \\) will factor it.'
                },
                {
                    stepNumber: 2,
                    description: 'Factor using the sum-of-cubes identity.',
                    workingLatex: '= (\\sin\\theta + \\cos\\theta)(\\sin^2\\theta - \\sin\\theta\\cos\\theta + \\cos^2\\theta)',
                    explanation: 'Apply \\( a^3 + b^3 = (a+b)(a^2 - ab + b^2) \\) with \\( a = \\sin\\theta \\) and \\( b = \\cos\\theta \\). Notice the second bracket contains a \\( \\sin^2\\theta + \\cos^2\\theta \\) pair.'
                },
                {
                    stepNumber: 3,
                    description: 'Group the squared terms inside the second bracket.',
                    workingLatex: '= (\\sin\\theta + \\cos\\theta)\\bigl((\\sin^2\\theta + \\cos^2\\theta) - \\sin\\theta\\cos\\theta\\bigr)',
                    explanation: 'Reorder using commutativity so \\( \\sin^2\\theta \\) and \\( \\cos^2\\theta \\) sit next to each other, isolating the Pythagorean piece.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= (\\sin\\theta + \\cos\\theta)(1 - \\sin\\theta\\cos\\theta) = \\text{RHS}',
                    explanation: 'Replace \\( \\sin^2\\theta + \\cos^2\\theta \\) with 1. The expression now matches the right-hand side, proving the identity.'
                }
            ],
            finalAnswer: '\\( \\sin^3\\theta + \\cos^3\\theta \\equiv (\\sin\\theta + \\cos\\theta)(1 - \\sin\\theta\\cos\\theta) \\) (proved)'
        }
    },
    {
        id: 't2-010',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 10',
        difficulty: 'Standard',
        questionText: 'Prove that \\( \\sin^3\\theta - \\cos^3\\theta \\equiv (\\sin\\theta - \\cos\\theta)(1 + \\sin\\theta\\cos\\theta) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'difference of cubes', 'pythagorean'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\sin^3\\theta - \\cos^3\\theta',
                    explanation: 'A difference of two cubes factors as \\( a^3 - b^3 = (a-b)(a^2 + ab + b^2) \\). This is the natural starting move.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the difference-of-cubes factorisation.',
                    workingLatex: '= (\\sin\\theta - \\cos\\theta)(\\sin^2\\theta + \\sin\\theta\\cos\\theta + \\cos^2\\theta)',
                    explanation: 'With \\( a = \\sin\\theta \\) and \\( b = \\cos\\theta \\), the second bracket is \\( a^2 + ab + b^2 \\). Notice it contains a \\( \\sin^2\\theta + \\cos^2\\theta \\) pair.'
                },
                {
                    stepNumber: 3,
                    description: 'Regroup inside the second bracket.',
                    workingLatex: '= (\\sin\\theta - \\cos\\theta)\\bigl((\\sin^2\\theta + \\cos^2\\theta) + \\sin\\theta\\cos\\theta\\bigr)',
                    explanation: 'Reorder so the squared terms sit together, isolating the Pythagorean identity inside the bracket.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= (\\sin\\theta - \\cos\\theta)(1 + \\sin\\theta\\cos\\theta) = \\text{RHS}',
                    explanation: 'Replace \\( \\sin^2\\theta + \\cos^2\\theta \\) with 1. The result matches the right-hand side.'
                }
            ],
            finalAnswer: '\\( \\sin^3\\theta - \\cos^3\\theta \\equiv (\\sin\\theta - \\cos\\theta)(1 + \\sin\\theta\\cos\\theta) \\) (proved)'
        }
    },
    {
        id: 't2-011',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 11',
        difficulty: 'Challenge',
        questionText: 'Prove that \\( \\dfrac{\\sin\\theta + \\tan\\theta}{1 + \\cos\\theta} \\equiv \\tan\\theta \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'quotient', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{\\sin\\theta + \\tan\\theta}{1 + \\cos\\theta}',
                    explanation: 'Converting \\( \\tan\\theta \\) into \\( \\sin\\theta/\\cos\\theta \\) is the standard first move, but factorising the numerator first will be cleaner.'
                },
                {
                    stepNumber: 2,
                    description: 'Rewrite the numerator using the quotient identity.',
                    workingLatex: '= \\frac{\\sin\\theta + \\dfrac{\\sin\\theta}{\\cos\\theta}}{1 + \\cos\\theta}',
                    explanation: 'Replace \\( \\tan\\theta \\) with \\( \\dfrac{\\sin\\theta}{\\cos\\theta} \\) so that everything is in terms of \\( \\sin \\) and \\( \\cos \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factor \\( \\sin\\theta \\) out of the numerator.',
                    workingLatex: '= \\frac{\\sin\\theta\\left(1 + \\dfrac{1}{\\cos\\theta}\\right)}{1 + \\cos\\theta}',
                    explanation: 'Both numerator terms have \\( \\sin\\theta \\) as a factor: \\( \\sin\\theta = \\sin\\theta \\cdot 1 \\) and \\( \\dfrac{\\sin\\theta}{\\cos\\theta} = \\sin\\theta \\cdot \\dfrac{1}{\\cos\\theta} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Combine the bracket into a single fraction.',
                    workingLatex: '= \\frac{\\sin\\theta \\cdot \\dfrac{\\cos\\theta + 1}{\\cos\\theta}}{1 + \\cos\\theta}',
                    explanation: 'Write 1 as \\( \\dfrac{\\cos\\theta}{\\cos\\theta} \\) and add: \\( 1 + \\dfrac{1}{\\cos\\theta} = \\dfrac{\\cos\\theta + 1}{\\cos\\theta} \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Simplify by cancelling the common \\( (1 + \\cos\\theta) \\) factor.',
                    workingLatex: '= \\frac{\\sin\\theta(1 + \\cos\\theta)}{\\cos\\theta(1 + \\cos\\theta)} = \\frac{\\sin\\theta}{\\cos\\theta}',
                    explanation: 'Bring the \\( \\cos\\theta \\) in the inner denominator out to the main denominator. The \\( 1 + \\cos\\theta \\) factors in top and bottom cancel (provided \\( \\cos\\theta \\neq -1 \\)).'
                },
                {
                    stepNumber: 6,
                    description: 'Apply the quotient identity.',
                    workingLatex: '= \\tan\\theta = \\text{RHS}',
                    explanation: 'By definition \\( \\dfrac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta \\). LHS = RHS, so the identity is proved.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\sin\\theta + \\tan\\theta}{1 + \\cos\\theta} \\equiv \\tan\\theta \\) (proved)'
        }
    },
    {
        id: 't2-012',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 12',
        difficulty: 'Challenge',
        questionText: 'Prove that \\( \\dfrac{1 - \\cos\\theta}{\\sin\\theta} \\equiv \\dfrac{\\sin\\theta}{1 + \\cos\\theta} \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'conjugate', 'pythagorean'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{1 - \\cos\\theta}{\\sin\\theta}',
                    explanation: 'The conjugate of \\( 1 - \\cos\\theta \\) is \\( 1 + \\cos\\theta \\). Multiplying top and bottom by this conjugate will create a difference of squares, opening up the Pythagorean identity.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply numerator and denominator by the conjugate \\( 1 + \\cos\\theta \\).',
                    workingLatex: '= \\frac{(1 - \\cos\\theta)(1 + \\cos\\theta)}{\\sin\\theta(1 + \\cos\\theta)}',
                    explanation: 'Multiplying top and bottom by the same non-zero quantity leaves the value unchanged. We pick \\( 1 + \\cos\\theta \\) because it pairs with \\( 1 - \\cos\\theta \\) to give a difference of two squares.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand the numerator as a difference of squares.',
                    workingLatex: '= \\frac{1 - \\cos^2\\theta}{\\sin\\theta(1 + \\cos\\theta)}',
                    explanation: '\\( (1 - \\cos\\theta)(1 + \\cos\\theta) = 1^2 - \\cos^2\\theta \\). The numerator now matches a Pythagorean rearrangement.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= \\frac{\\sin^2\\theta}{\\sin\\theta(1 + \\cos\\theta)}',
                    explanation: 'Replace \\( 1 - \\cos^2\\theta \\) with \\( \\sin^2\\theta \\). This creates a common factor of \\( \\sin\\theta \\) ready to cancel.'
                },
                {
                    stepNumber: 5,
                    description: 'Cancel a factor of \\( \\sin\\theta \\).',
                    workingLatex: '= \\frac{\\sin\\theta}{1 + \\cos\\theta} = \\text{RHS}',
                    explanation: '\\( \\sin^2\\theta = \\sin\\theta \\cdot \\sin\\theta \\), so one factor cancels with the \\( \\sin\\theta \\) in the denominator. The result is exactly the right-hand side.'
                }
            ],
            finalAnswer: '\\( \\dfrac{1 - \\cos\\theta}{\\sin\\theta} \\equiv \\dfrac{\\sin\\theta}{1 + \\cos\\theta} \\) (proved)'
        }
    },
    {
        id: 't2-013',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 13',
        difficulty: 'Standard',
        questionText: 'Prove that \\( (\\sin\\theta - \\cos\\theta)(\\sin\\theta + \\cos\\theta) \\equiv 1 - 2\\cos^2\\theta \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'difference of squares', 'pythagorean'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = (\\sin\\theta - \\cos\\theta)(\\sin\\theta + \\cos\\theta)',
                    explanation: 'The two brackets are conjugates, so the product is a difference of two squares — no full expansion is needed.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the difference-of-squares formula.',
                    workingLatex: '= \\sin^2\\theta - \\cos^2\\theta',
                    explanation: 'Use \\( (a-b)(a+b) = a^2 - b^2 \\) with \\( a = \\sin\\theta \\) and \\( b = \\cos\\theta \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Replace \\( \\sin^2\\theta \\) using the Pythagorean identity.',
                    workingLatex: '= (1 - \\cos^2\\theta) - \\cos^2\\theta',
                    explanation: 'From \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\) we get \\( \\sin^2\\theta = 1 - \\cos^2\\theta \\). Substitute this in to convert everything to \\( \\cos \\) terms, since the RHS is purely in terms of \\( \\cos \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify.',
                    workingLatex: '= 1 - 2\\cos^2\\theta = \\text{RHS}',
                    explanation: 'Combine the two \\( \\cos^2\\theta \\) terms: \\( -\\cos^2\\theta - \\cos^2\\theta = -2\\cos^2\\theta \\). The result matches the right-hand side.'
                }
            ],
            finalAnswer: '\\( (\\sin\\theta - \\cos\\theta)(\\sin\\theta + \\cos\\theta) \\equiv 1 - 2\\cos^2\\theta \\) (proved)'
        }
    },
    {
        id: 't2-014',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 14',
        difficulty: 'Challenge',
        questionText: 'Prove that \\( \\dfrac{\\tan\\theta - \\sin\\theta}{\\sin^3\\theta} \\equiv \\dfrac{1}{\\cos\\theta(1 + \\cos\\theta)} \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'quotient', 'conjugate'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{\\tan\\theta - \\sin\\theta}{\\sin^3\\theta}',
                    explanation: 'Convert \\( \\tan\\theta \\) to \\( \\sin/\\cos \\) so the numerator and denominator both involve only \\( \\sin \\) and \\( \\cos \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Replace \\( \\tan\\theta \\) using the quotient identity.',
                    workingLatex: '= \\frac{\\dfrac{\\sin\\theta}{\\cos\\theta} - \\sin\\theta}{\\sin^3\\theta}',
                    explanation: 'Substitute \\( \\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta} \\). Both numerator terms now share a factor of \\( \\sin\\theta \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factor \\( \\sin\\theta \\) from the numerator.',
                    workingLatex: '= \\frac{\\sin\\theta\\left(\\dfrac{1}{\\cos\\theta} - 1\\right)}{\\sin^3\\theta}',
                    explanation: 'Take \\( \\sin\\theta \\) out as a common factor. This sets up cancellation with the \\( \\sin^3\\theta \\) denominator.'
                },
                {
                    stepNumber: 4,
                    description: 'Cancel one \\( \\sin\\theta \\) and combine the bracket.',
                    workingLatex: '= \\frac{1}{\\sin^2\\theta} \\cdot \\frac{1 - \\cos\\theta}{\\cos\\theta}',
                    explanation: 'One factor of \\( \\sin\\theta \\) cancels, reducing \\( \\sin^3\\theta \\) to \\( \\sin^2\\theta \\). Combine the bracket over the common denominator \\( \\cos\\theta \\): \\( \\dfrac{1}{\\cos\\theta} - 1 = \\dfrac{1 - \\cos\\theta}{\\cos\\theta} \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Replace \\( \\sin^2\\theta \\) using the Pythagorean identity.',
                    workingLatex: '= \\frac{1 - \\cos\\theta}{\\cos\\theta(1 - \\cos^2\\theta)}',
                    explanation: 'From \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\), \\( \\sin^2\\theta = 1 - \\cos^2\\theta \\). The denominator now contains a difference of two squares.'
                },
                {
                    stepNumber: 6,
                    description: 'Factor the denominator and cancel.',
                    workingLatex: '= \\frac{1 - \\cos\\theta}{\\cos\\theta(1 - \\cos\\theta)(1 + \\cos\\theta)} = \\frac{1}{\\cos\\theta(1 + \\cos\\theta)} = \\text{RHS}',
                    explanation: '\\( 1 - \\cos^2\\theta = (1 - \\cos\\theta)(1 + \\cos\\theta) \\). The \\( 1 - \\cos\\theta \\) in numerator and denominator cancel, leaving the right-hand side.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\tan\\theta - \\sin\\theta}{\\sin^3\\theta} \\equiv \\dfrac{1}{\\cos\\theta(1 + \\cos\\theta)} \\) (proved)'
        }
    },
    {
        id: 't2-015',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 15',
        difficulty: 'Standard',
        questionText: 'Prove that \\( \\dfrac{\\sin\\theta\\cos\\theta}{\\tan\\theta} \\equiv \\cos^2\\theta \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'quotient', 'simplifying'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{\\sin\\theta\\cos\\theta}{\\tan\\theta}',
                    explanation: 'Dividing by \\( \\tan\\theta \\) is awkward; rewriting \\( \\tan\\theta \\) using the quotient identity converts the division into a simpler multiplication.'
                },
                {
                    stepNumber: 2,
                    description: 'Replace \\( \\tan\\theta \\) using the quotient identity.',
                    workingLatex: '= \\frac{\\sin\\theta\\cos\\theta}{\\dfrac{\\sin\\theta}{\\cos\\theta}}',
                    explanation: 'Substitute \\( \\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta} \\). The expression is now a fraction divided by a fraction.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by a fraction by multiplying by its reciprocal.',
                    workingLatex: '= \\sin\\theta\\cos\\theta \\times \\frac{\\cos\\theta}{\\sin\\theta}',
                    explanation: 'Dividing by \\( \\dfrac{\\sin\\theta}{\\cos\\theta} \\) is the same as multiplying by \\( \\dfrac{\\cos\\theta}{\\sin\\theta} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Cancel the common factor of \\( \\sin\\theta \\) and simplify.',
                    workingLatex: '= \\cos\\theta \\cdot \\cos\\theta = \\cos^2\\theta = \\text{RHS}',
                    explanation: 'The \\( \\sin\\theta \\) in the numerator cancels with the \\( \\sin\\theta \\) in the denominator. The two factors of \\( \\cos\\theta \\) combine to give \\( \\cos^2\\theta \\), matching the RHS.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\sin\\theta\\cos\\theta}{\\tan\\theta} \\equiv \\cos^2\\theta \\) (proved)'
        }
    },
    {
        id: 't2-016',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 16',
        difficulty: 'Challenge',
        questionText: 'Prove that \\( \\tan\\theta + \\dfrac{\\cos\\theta}{1 + \\sin\\theta} \\equiv \\dfrac{1}{\\cos\\theta} \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'combining fractions', 'pythagorean'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\tan\\theta + \\frac{\\cos\\theta}{1 + \\sin\\theta}',
                    explanation: 'Convert \\( \\tan\\theta \\) to \\( \\sin\\theta/\\cos\\theta \\) so both terms are fractions ready to be added over a common denominator.'
                },
                {
                    stepNumber: 2,
                    description: 'Use the quotient identity.',
                    workingLatex: '= \\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{1 + \\sin\\theta}',
                    explanation: 'Both terms are now single fractions. The common denominator will be \\( \\cos\\theta(1 + \\sin\\theta) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Combine over the common denominator.',
                    workingLatex: '= \\frac{\\sin\\theta(1 + \\sin\\theta) + \\cos\\theta \\cdot \\cos\\theta}{\\cos\\theta(1 + \\sin\\theta)}',
                    explanation: 'Multiply the first fraction top and bottom by \\( 1 + \\sin\\theta \\), and the second by \\( \\cos\\theta \\). The combined numerator is \\( \\sin\\theta + \\sin^2\\theta + \\cos^2\\theta \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Expand and apply the Pythagorean identity.',
                    workingLatex: '= \\frac{\\sin\\theta + \\sin^2\\theta + \\cos^2\\theta}{\\cos\\theta(1 + \\sin\\theta)} = \\frac{\\sin\\theta + 1}{\\cos\\theta(1 + \\sin\\theta)}',
                    explanation: 'Replace \\( \\sin^2\\theta + \\cos^2\\theta \\) with 1 in the numerator. This produces a factor \\( 1 + \\sin\\theta \\) (just rearranged) that will cancel with the denominator.'
                },
                {
                    stepNumber: 5,
                    description: 'Cancel the common factor \\( 1 + \\sin\\theta \\).',
                    workingLatex: '= \\frac{1 + \\sin\\theta}{\\cos\\theta(1 + \\sin\\theta)} = \\frac{1}{\\cos\\theta} = \\text{RHS}',
                    explanation: 'The \\( 1 + \\sin\\theta \\) in the numerator cancels with the \\( 1 + \\sin\\theta \\) in the denominator, leaving \\( \\dfrac{1}{\\cos\\theta} \\), the right-hand side.'
                }
            ],
            finalAnswer: '\\( \\tan\\theta + \\dfrac{\\cos\\theta}{1 + \\sin\\theta} \\equiv \\dfrac{1}{\\cos\\theta} \\) (proved)'
        }
    },
    {
        id: 't2-017',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 17',
        difficulty: 'Challenge',
        questionText: 'Prove that \\( \\dfrac{1 + \\sin\\theta}{\\cos\\theta} \\equiv \\dfrac{\\cos\\theta}{1 - \\sin\\theta} \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'conjugate', 'pythagorean'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{1 + \\sin\\theta}{\\cos\\theta}',
                    explanation: 'The RHS denominator is \\( 1 - \\sin\\theta \\), the conjugate of the LHS numerator. Multiplying top and bottom by this conjugate will reshape the LHS to match.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply numerator and denominator by \\( 1 - \\sin\\theta \\).',
                    workingLatex: '= \\frac{(1 + \\sin\\theta)(1 - \\sin\\theta)}{\\cos\\theta(1 - \\sin\\theta)}',
                    explanation: 'This is the conjugate trick: multiplying by \\( \\dfrac{1 - \\sin\\theta}{1 - \\sin\\theta} \\) (a form of 1) creates a difference of two squares in the numerator.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand the numerator as a difference of two squares.',
                    workingLatex: '= \\frac{1 - \\sin^2\\theta}{\\cos\\theta(1 - \\sin\\theta)}',
                    explanation: '\\( (1 + \\sin\\theta)(1 - \\sin\\theta) = 1^2 - \\sin^2\\theta \\). The cross-terms cancel, leaving a Pythagorean rearrangement.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= \\frac{\\cos^2\\theta}{\\cos\\theta(1 - \\sin\\theta)}',
                    explanation: 'Replace \\( 1 - \\sin^2\\theta \\) with \\( \\cos^2\\theta \\). The numerator now has a factor of \\( \\cos\\theta \\) ready to cancel.'
                },
                {
                    stepNumber: 5,
                    description: 'Cancel one factor of \\( \\cos\\theta \\).',
                    workingLatex: '= \\frac{\\cos\\theta}{1 - \\sin\\theta} = \\text{RHS}',
                    explanation: '\\( \\cos^2\\theta = \\cos\\theta \\cdot \\cos\\theta \\); one factor cancels with the \\( \\cos\\theta \\) in the denominator. The result matches the right-hand side.'
                }
            ],
            finalAnswer: '\\( \\dfrac{1 + \\sin\\theta}{\\cos\\theta} \\equiv \\dfrac{\\cos\\theta}{1 - \\sin\\theta} \\) (proved)'
        }
    },
    {
        id: 't2-018',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 18',
        difficulty: 'Standard',
        questionText: 'Prove that \\( \\dfrac{\\sin^2\\theta - \\cos^2\\theta}{\\sin\\theta + \\cos\\theta} \\equiv \\sin\\theta - \\cos\\theta \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'difference of squares', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{\\sin^2\\theta - \\cos^2\\theta}{\\sin\\theta + \\cos\\theta}',
                    explanation: 'The numerator is a difference of two squares. Factoring it will reveal a common factor with the denominator.'
                },
                {
                    stepNumber: 2,
                    description: 'Factor the numerator using difference of two squares.',
                    workingLatex: '= \\frac{(\\sin\\theta - \\cos\\theta)(\\sin\\theta + \\cos\\theta)}{\\sin\\theta + \\cos\\theta}',
                    explanation: 'Apply \\( a^2 - b^2 = (a-b)(a+b) \\) with \\( a = \\sin\\theta \\) and \\( b = \\cos\\theta \\). The second factor matches the denominator.'
                },
                {
                    stepNumber: 3,
                    description: 'Cancel the common factor \\( \\sin\\theta + \\cos\\theta \\).',
                    workingLatex: '= \\sin\\theta - \\cos\\theta = \\text{RHS}',
                    explanation: 'Provided \\( \\sin\\theta + \\cos\\theta \\neq 0 \\), the \\( \\sin\\theta + \\cos\\theta \\) factors in numerator and denominator cancel. The result matches the right-hand side.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\sin^2\\theta - \\cos^2\\theta}{\\sin\\theta + \\cos\\theta} \\equiv \\sin\\theta - \\cos\\theta \\) (proved)'
        }
    },
    {
        id: 't2-019',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 19',
        difficulty: 'Standard',
        questionText: 'Prove that \\( \\tan^2\\theta\\cos^2\\theta + \\cos^2\\theta \\equiv 1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'quotient', 'pythagorean'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\tan^2\\theta\\cos^2\\theta + \\cos^2\\theta',
                    explanation: 'Convert \\( \\tan^2\\theta \\) to \\( \\sin^2\\theta/\\cos^2\\theta \\) so a cancellation with the adjacent \\( \\cos^2\\theta \\) factor becomes possible.'
                },
                {
                    stepNumber: 2,
                    description: 'Replace \\( \\tan^2\\theta \\) using the quotient identity.',
                    workingLatex: '= \\frac{\\sin^2\\theta}{\\cos^2\\theta} \\cdot \\cos^2\\theta + \\cos^2\\theta',
                    explanation: 'Since \\( \\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta} \\), squaring gives \\( \\tan^2\\theta = \\dfrac{\\sin^2\\theta}{\\cos^2\\theta} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Cancel \\( \\cos^2\\theta \\) in the first term.',
                    workingLatex: '= \\sin^2\\theta + \\cos^2\\theta',
                    explanation: 'The \\( \\cos^2\\theta \\) in the numerator and denominator of the first term cancel, leaving \\( \\sin^2\\theta \\). The second term is unchanged.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= 1 = \\text{RHS}',
                    explanation: '\\( \\sin^2\\theta + \\cos^2\\theta \\equiv 1 \\). The LHS reduces to 1, matching the right-hand side.'
                }
            ],
            finalAnswer: '\\( \\tan^2\\theta\\cos^2\\theta + \\cos^2\\theta \\equiv 1 \\) (proved)'
        }
    },
    {
        id: 't2-020',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 20',
        difficulty: 'Challenge',
        questionText: 'Given that \\( \\sin\\theta + \\cos\\theta = \\dfrac{1}{2} \\), show that \\( \\sin\\theta\\cos\\theta = -\\dfrac{3}{8} \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'pythagorean', 'algebraic manipulation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Square both sides of the given equation.',
                    workingLatex: '(\\sin\\theta + \\cos\\theta)^2 = \\left(\\frac{1}{2}\\right)^2',
                    explanation: 'Squaring is the standard trick when the target involves \\( \\sin\\theta\\cos\\theta \\): expanding the left-hand square produces exactly that cross-term, alongside terms covered by the Pythagorean identity.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the left-hand side.',
                    workingLatex: '\\sin^2\\theta + 2\\sin\\theta\\cos\\theta + \\cos^2\\theta = \\frac{1}{4}',
                    explanation: 'Use \\( (a+b)^2 = a^2 + 2ab + b^2 \\) with \\( a = \\sin\\theta \\) and \\( b = \\cos\\theta \\). The cross-term \\( 2\\sin\\theta\\cos\\theta \\) is what we are after.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '1 + 2\\sin\\theta\\cos\\theta = \\frac{1}{4}',
                    explanation: 'Group the squared terms: \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\). The equation simplifies to a single linear equation in \\( \\sin\\theta\\cos\\theta \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Isolate \\( 2\\sin\\theta\\cos\\theta \\).',
                    workingLatex: '2\\sin\\theta\\cos\\theta = \\frac{1}{4} - 1 = -\\frac{3}{4}',
                    explanation: 'Subtract 1 from both sides. Writing 1 as \\( \\frac{4}{4} \\), we get \\( \\frac{1}{4} - \\frac{4}{4} = -\\frac{3}{4} \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Divide both sides by 2.',
                    workingLatex: '\\sin\\theta\\cos\\theta = -\\frac{3}{8}',
                    explanation: 'Halving both sides gives the required result. The negative value is consistent with \\( \\sin\\theta + \\cos\\theta \\) being smaller than \\( \\sqrt{2} \\) in magnitude.'
                }
            ],
            finalAnswer: '\\( \\sin\\theta\\cos\\theta = -\\dfrac{3}{8} \\) (shown)'
        }
    },
    {
        id: 't2-021',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 21',
        difficulty: 'Standard',
        questionText: 'Prove that \\( \\dfrac{\\sin^2\\theta}{1 - \\cos\\theta} \\equiv 1 + \\cos\\theta \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'pythagorean', 'cancelling factors'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{\\sin^2\\theta}{1 - \\cos\\theta}',
                    explanation: 'The denominator is \\( 1 - \\cos\\theta \\), and the numerator is \\( \\sin^2\\theta \\). The Pythagorean identity lets us rewrite \\( \\sin^2\\theta \\) as something that factorises and shares a piece with the denominator.'
                },
                {
                    stepNumber: 2,
                    description: 'Replace \\( \\sin^2\\theta \\) using the rearranged Pythagorean identity.',
                    workingLatex: '= \\frac{1 - \\cos^2\\theta}{1 - \\cos\\theta}',
                    explanation: 'From \\( \\sin^2\\theta + \\cos^2\\theta \\equiv 1 \\) we get \\( \\sin^2\\theta \\equiv 1 - \\cos^2\\theta \\). The numerator is now in a form that can be factorised as a difference of two squares.'
                },
                {
                    stepNumber: 3,
                    description: 'Factor the numerator using difference of two squares.',
                    workingLatex: '= \\frac{(1 - \\cos\\theta)(1 + \\cos\\theta)}{1 - \\cos\\theta}',
                    explanation: 'Apply \\( a^2 - b^2 = (a - b)(a + b) \\) with \\( a = 1 \\) and \\( b = \\cos\\theta \\). One of the factors now matches the denominator exactly.'
                },
                {
                    stepNumber: 4,
                    description: 'Cancel the common factor.',
                    workingLatex: '= 1 + \\cos\\theta = \\text{RHS}',
                    explanation: 'Cancel the \\( (1 - \\cos\\theta) \\) factor from numerator and denominator (valid provided \\( \\cos\\theta \\neq 1 \\)). The result is the right-hand side, so the identity is proved.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\sin^2\\theta}{1 - \\cos\\theta} \\equiv 1 + \\cos\\theta \\) (proved)'
        }
    },
    {
        id: 't2-022',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 22',
        difficulty: 'Standard',
        questionText: 'Prove that \\( \\dfrac{\\cos^2\\theta}{1 - \\sin\\theta} \\equiv 1 + \\sin\\theta \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'pythagorean', 'cancelling factors'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{\\cos^2\\theta}{1 - \\sin\\theta}',
                    explanation: 'The strategy mirrors the \\( \\sin \\)-version: rewrite the numerator using Pythagoras, factor it as a difference of two squares, and cancel against the denominator.'
                },
                {
                    stepNumber: 2,
                    description: 'Replace \\( \\cos^2\\theta \\) using the rearranged Pythagorean identity.',
                    workingLatex: '= \\frac{1 - \\sin^2\\theta}{1 - \\sin\\theta}',
                    explanation: 'From \\( \\sin^2\\theta + \\cos^2\\theta \\equiv 1 \\), we get \\( \\cos^2\\theta \\equiv 1 - \\sin^2\\theta \\). The numerator is now in difference-of-two-squares form.'
                },
                {
                    stepNumber: 3,
                    description: 'Factor the numerator.',
                    workingLatex: '= \\frac{(1 - \\sin\\theta)(1 + \\sin\\theta)}{1 - \\sin\\theta}',
                    explanation: 'Apply \\( a^2 - b^2 = (a - b)(a + b) \\) with \\( a = 1 \\) and \\( b = \\sin\\theta \\). The \\( (1 - \\sin\\theta) \\) factor now matches the denominator.'
                },
                {
                    stepNumber: 4,
                    description: 'Cancel the common factor.',
                    workingLatex: '= 1 + \\sin\\theta = \\text{RHS}',
                    explanation: 'Cancel \\( (1 - \\sin\\theta) \\) from top and bottom (valid for \\( \\sin\\theta \\neq 1 \\)). The result is the right-hand side, proving the identity.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\cos^2\\theta}{1 - \\sin\\theta} \\equiv 1 + \\sin\\theta \\) (proved)'
        }
    },
    {
        id: 't2-023',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 23',
        difficulty: 'Standard',
        questionText: 'Prove that \\( \\sin^4\\theta - \\cos^4\\theta \\equiv 2\\sin^2\\theta - 1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'difference of squares', 'fourth powers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\sin^4\\theta - \\cos^4\\theta',
                    explanation: 'Write the fourth powers as squares of squares: \\( \\sin^4\\theta = (\\sin^2\\theta)^2 \\) and \\( \\cos^4\\theta = (\\cos^2\\theta)^2 \\). This exposes a difference of two squares.'
                },
                {
                    stepNumber: 2,
                    description: 'Factor as a difference of two squares.',
                    workingLatex: '= (\\sin^2\\theta - \\cos^2\\theta)(\\sin^2\\theta + \\cos^2\\theta)',
                    explanation: 'Apply \\( a^2 - b^2 = (a - b)(a + b) \\) with \\( a = \\sin^2\\theta \\), \\( b = \\cos^2\\theta \\). The second factor is exactly the Pythagorean identity.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the Pythagorean identity to the second factor.',
                    workingLatex: '= (\\sin^2\\theta - \\cos^2\\theta)(1) = \\sin^2\\theta - \\cos^2\\theta',
                    explanation: 'Since \\( \\sin^2\\theta + \\cos^2\\theta \\equiv 1 \\), the second factor collapses to 1, leaving the first factor unchanged.'
                },
                {
                    stepNumber: 4,
                    description: 'Eliminate \\( \\cos^2\\theta \\) using Pythagoras a second time.',
                    workingLatex: '= \\sin^2\\theta - (1 - \\sin^2\\theta)',
                    explanation: 'The RHS only contains \\( \\sin^2\\theta \\), so substitute \\( \\cos^2\\theta = 1 - \\sin^2\\theta \\). Brackets are essential here because of the minus sign in front.'
                },
                {
                    stepNumber: 5,
                    description: 'Simplify.',
                    workingLatex: '= \\sin^2\\theta - 1 + \\sin^2\\theta = 2\\sin^2\\theta - 1 = \\text{RHS}',
                    explanation: 'Distribute the minus and collect like terms. The result matches the right-hand side exactly, so the identity is proved.'
                }
            ],
            finalAnswer: '\\( \\sin^4\\theta - \\cos^4\\theta \\equiv 2\\sin^2\\theta - 1 \\) (proved)'
        }
    },
    {
        id: 't2-024',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 24',
        difficulty: 'Challenge',
        questionText: 'Given that \\( \\sin\\theta - \\cos\\theta = \\dfrac{1}{3} \\), show that \\( \\sin\\theta\\cos\\theta = \\dfrac{4}{9} \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig identities', 'given a condition', 'squaring', 'pythagorean'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write down the given relation and decide the strategy.',
                    workingLatex: '\\sin\\theta - \\cos\\theta = \\frac{1}{3}',
                    explanation: 'We want to extract \\( \\sin\\theta\\cos\\theta \\), which appears as the cross term when we square \\( (\\sin\\theta - \\cos\\theta) \\). Squaring both sides is the natural first move.'
                },
                {
                    stepNumber: 2,
                    description: 'Square both sides.',
                    workingLatex: '(\\sin\\theta - \\cos\\theta)^2 = \\left(\\frac{1}{3}\\right)^2',
                    explanation: 'Squaring is valid since both sides are real numbers. The LHS will expand into three terms, two of which combine via the Pythagorean identity.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand the LHS.',
                    workingLatex: '\\sin^2\\theta - 2\\sin\\theta\\cos\\theta + \\cos^2\\theta = \\frac{1}{9}',
                    explanation: 'Use \\( (a - b)^2 = a^2 - 2ab + b^2 \\) with \\( a = \\sin\\theta \\), \\( b = \\cos\\theta \\). The cross term \\( -2\\sin\\theta\\cos\\theta \\) is what we will isolate.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '1 - 2\\sin\\theta\\cos\\theta = \\frac{1}{9}',
                    explanation: 'Group the squared terms: \\( \\sin^2\\theta + \\cos^2\\theta \\equiv 1 \\). The equation now has \\( \\sin\\theta\\cos\\theta \\) as the only unknown.'
                },
                {
                    stepNumber: 5,
                    description: 'Rearrange to isolate \\( \\sin\\theta\\cos\\theta \\).',
                    workingLatex: '2\\sin\\theta\\cos\\theta = 1 - \\frac{1}{9} = \\frac{8}{9}',
                    explanation: 'Add \\( 2\\sin\\theta\\cos\\theta \\) to both sides and subtract \\( \\dfrac{1}{9} \\). Convert 1 to ninths: \\( 1 = \\dfrac{9}{9} \\), so \\( \\dfrac{9}{9} - \\dfrac{1}{9} = \\dfrac{8}{9} \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Divide by 2.',
                    workingLatex: '\\sin\\theta\\cos\\theta = \\frac{4}{9}',
                    explanation: 'Halve both sides: \\( \\dfrac{8}{9} \\div 2 = \\dfrac{8}{18} = \\dfrac{4}{9} \\). This is the required result.'
                }
            ],
            finalAnswer: '\\( \\sin\\theta\\cos\\theta = \\dfrac{4}{9} \\) (shown)'
        }
    },
    {
        id: 't2-025',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 25',
        difficulty: 'Standard',
        questionText: 'Prove that \\( (\\sin\\theta + \\cos\\theta)^2 - (\\sin\\theta - \\cos\\theta)^2 \\equiv 4\\sin\\theta\\cos\\theta \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'expansion', 'difference of squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = (\\sin\\theta + \\cos\\theta)^2 - (\\sin\\theta - \\cos\\theta)^2',
                    explanation: 'Expanding both squared brackets produces three terms each. The \\( \\sin^2\\theta \\) and \\( \\cos^2\\theta \\) pieces will cancel, leaving only the cross terms — which is exactly the structure of the RHS.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the first bracket.',
                    workingLatex: '(\\sin\\theta + \\cos\\theta)^2 = \\sin^2\\theta + 2\\sin\\theta\\cos\\theta + \\cos^2\\theta',
                    explanation: 'Use \\( (a + b)^2 = a^2 + 2ab + b^2 \\) with \\( a = \\sin\\theta \\) and \\( b = \\cos\\theta \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand the second bracket.',
                    workingLatex: '(\\sin\\theta - \\cos\\theta)^2 = \\sin^2\\theta - 2\\sin\\theta\\cos\\theta + \\cos^2\\theta',
                    explanation: 'Use \\( (a - b)^2 = a^2 - 2ab + b^2 \\). The middle term gains a minus sign — the key to the cancellation.'
                },
                {
                    stepNumber: 4,
                    description: 'Subtract, taking care with brackets.',
                    workingLatex: '= \\sin^2\\theta + 2\\sin\\theta\\cos\\theta + \\cos^2\\theta - (\\sin^2\\theta - 2\\sin\\theta\\cos\\theta + \\cos^2\\theta)',
                    explanation: 'Keep the second expansion in brackets so the minus sign flips every term inside when we distribute.'
                },
                {
                    stepNumber: 5,
                    description: 'Distribute the minus and collect like terms.',
                    workingLatex: '= \\sin^2\\theta + 2\\sin\\theta\\cos\\theta + \\cos^2\\theta - \\sin^2\\theta + 2\\sin\\theta\\cos\\theta - \\cos^2\\theta',
                    explanation: 'The \\( \\sin^2\\theta \\) terms cancel; the \\( \\cos^2\\theta \\) terms cancel; the two \\( +2\\sin\\theta\\cos\\theta \\) terms add.'
                },
                {
                    stepNumber: 6,
                    description: 'Simplify.',
                    workingLatex: '= 4\\sin\\theta\\cos\\theta = \\text{RHS}',
                    explanation: '\\( 2\\sin\\theta\\cos\\theta + 2\\sin\\theta\\cos\\theta = 4\\sin\\theta\\cos\\theta \\). The LHS now matches the RHS, so the identity is proved.'
                }
            ],
            finalAnswer: '\\( (\\sin\\theta + \\cos\\theta)^2 - (\\sin\\theta - \\cos\\theta)^2 \\equiv 4\\sin\\theta\\cos\\theta \\) (proved)'
        }
    },
    {
        id: 't2-026',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 26',
        difficulty: 'Challenge',
        questionText: 'Prove that \\( \\sin\\theta\\tan\\theta + \\cos\\theta \\equiv \\dfrac{1}{\\cos\\theta} \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'quotient', 'combining fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\sin\\theta\\tan\\theta + \\cos\\theta',
                    explanation: 'The RHS is a fraction with denominator \\( \\cos\\theta \\), so the natural plan is to rewrite \\( \\tan\\theta \\) using the quotient identity and then combine the two terms over the common denominator \\( \\cos\\theta \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Replace \\( \\tan\\theta \\) using the quotient identity.',
                    workingLatex: '= \\sin\\theta \\cdot \\frac{\\sin\\theta}{\\cos\\theta} + \\cos\\theta',
                    explanation: 'From \\( \\tan\\theta \\equiv \\dfrac{\\sin\\theta}{\\cos\\theta} \\). The product on the left becomes \\( \\dfrac{\\sin^2\\theta}{\\cos\\theta} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the product.',
                    workingLatex: '= \\frac{\\sin^2\\theta}{\\cos\\theta} + \\cos\\theta',
                    explanation: '\\( \\sin\\theta \\times \\dfrac{\\sin\\theta}{\\cos\\theta} = \\dfrac{\\sin\\theta \\cdot \\sin\\theta}{\\cos\\theta} = \\dfrac{\\sin^2\\theta}{\\cos\\theta} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write \\( \\cos\\theta \\) over the common denominator.',
                    workingLatex: '= \\frac{\\sin^2\\theta}{\\cos\\theta} + \\frac{\\cos^2\\theta}{\\cos\\theta}',
                    explanation: 'Multiplying \\( \\cos\\theta \\) by \\( \\dfrac{\\cos\\theta}{\\cos\\theta} \\) does not change its value but expresses it with the same denominator as the first term.'
                },
                {
                    stepNumber: 5,
                    description: 'Combine over the common denominator.',
                    workingLatex: '= \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\cos\\theta}',
                    explanation: 'The denominators match, so we can add the numerators directly.'
                },
                {
                    stepNumber: 6,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= \\frac{1}{\\cos\\theta} = \\text{RHS}',
                    explanation: '\\( \\sin^2\\theta + \\cos^2\\theta \\equiv 1 \\), so the numerator collapses to 1. The LHS now equals the RHS, so the identity is proved.'
                }
            ],
            finalAnswer: '\\( \\sin\\theta\\tan\\theta + \\cos\\theta \\equiv \\dfrac{1}{\\cos\\theta} \\) (proved)'
        }
    },
    {
        id: 't2-027',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 27',
        difficulty: 'Challenge',
        questionText: 'Prove that \\( \\dfrac{\\tan\\theta + 1}{\\tan\\theta - 1} \\equiv \\dfrac{\\sin\\theta + \\cos\\theta}{\\sin\\theta - \\cos\\theta} \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'quotient', 'combining fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{\\tan\\theta + 1}{\\tan\\theta - 1}',
                    explanation: 'The RHS is written purely in \\( \\sin\\theta \\) and \\( \\cos\\theta \\), so we replace \\( \\tan\\theta \\) using the quotient identity and tidy the resulting compound fraction.'
                },
                {
                    stepNumber: 2,
                    description: 'Replace \\( \\tan\\theta \\) with \\( \\dfrac{\\sin\\theta}{\\cos\\theta} \\).',
                    workingLatex: '= \\frac{\\frac{\\sin\\theta}{\\cos\\theta} + 1}{\\frac{\\sin\\theta}{\\cos\\theta} - 1}',
                    explanation: 'Using the quotient identity. Both the numerator and denominator are now sums/differences containing a single fraction — we clear them by multiplying through by \\( \\cos\\theta \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply numerator and denominator of the big fraction by \\( \\cos\\theta \\).',
                    workingLatex: '= \\frac{\\cos\\theta\\left(\\frac{\\sin\\theta}{\\cos\\theta} + 1\\right)}{\\cos\\theta\\left(\\frac{\\sin\\theta}{\\cos\\theta} - 1\\right)}',
                    explanation: 'Multiplying top and bottom of a fraction by the same non-zero quantity leaves the value unchanged. We choose \\( \\cos\\theta \\) because it clears the inner fractions.'
                },
                {
                    stepNumber: 4,
                    description: 'Distribute \\( \\cos\\theta \\) in both numerator and denominator.',
                    workingLatex: '= \\frac{\\sin\\theta + \\cos\\theta}{\\sin\\theta - \\cos\\theta}',
                    explanation: 'On the top: \\( \\cos\\theta \\cdot \\dfrac{\\sin\\theta}{\\cos\\theta} = \\sin\\theta \\) and \\( \\cos\\theta \\cdot 1 = \\cos\\theta \\). The bottom works identically with a minus sign. This is the right-hand side, so the identity is proved.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\tan\\theta + 1}{\\tan\\theta - 1} \\equiv \\dfrac{\\sin\\theta + \\cos\\theta}{\\sin\\theta - \\cos\\theta} \\) (proved)'
        }
    },
    {
        id: 't2-028',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 28',
        difficulty: 'Challenge',
        questionText: 'Prove that \\( \\cos^4\\theta - \\sin^4\\theta + 1 \\equiv 2\\cos^2\\theta \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'difference of squares', 'fourth powers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\cos^4\\theta - \\sin^4\\theta + 1',
                    explanation: 'The first two terms form a difference of two squares once we recognise \\( \\cos^4\\theta = (\\cos^2\\theta)^2 \\) and \\( \\sin^4\\theta = (\\sin^2\\theta)^2 \\). The \\( + 1 \\) on the end is what eventually produces the doubling.'
                },
                {
                    stepNumber: 2,
                    description: 'Factor the first two terms as a difference of two squares.',
                    workingLatex: '= (\\cos^2\\theta - \\sin^2\\theta)(\\cos^2\\theta + \\sin^2\\theta) + 1',
                    explanation: 'Apply \\( a^2 - b^2 = (a - b)(a + b) \\) with \\( a = \\cos^2\\theta \\) and \\( b = \\sin^2\\theta \\). The second factor is the Pythagorean identity.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= (\\cos^2\\theta - \\sin^2\\theta)(1) + 1 = \\cos^2\\theta - \\sin^2\\theta + 1',
                    explanation: 'The bracket \\( \\cos^2\\theta + \\sin^2\\theta \\) is identically 1, so the product collapses to its other factor.'
                },
                {
                    stepNumber: 4,
                    description: 'Replace \\( \\sin^2\\theta \\) using Pythagoras.',
                    workingLatex: '= \\cos^2\\theta - (1 - \\cos^2\\theta) + 1',
                    explanation: 'The RHS is entirely in \\( \\cos^2\\theta \\), so eliminate \\( \\sin^2\\theta \\) with \\( \\sin^2\\theta = 1 - \\cos^2\\theta \\). Brackets are needed because of the minus sign in front.'
                },
                {
                    stepNumber: 5,
                    description: 'Distribute and collect like terms.',
                    workingLatex: '= \\cos^2\\theta - 1 + \\cos^2\\theta + 1 = 2\\cos^2\\theta = \\text{RHS}',
                    explanation: 'Distribute the minus: \\( -(1 - \\cos^2\\theta) = -1 + \\cos^2\\theta \\). The \\( -1 \\) and \\( +1 \\) cancel, and the two \\( \\cos^2\\theta \\) terms combine. The LHS now equals the RHS, so the identity is proved.'
                }
            ],
            finalAnswer: '\\( \\cos^4\\theta - \\sin^4\\theta + 1 \\equiv 2\\cos^2\\theta \\) (proved)'
        }
    },
    {
        id: 't2-029',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 29',
        difficulty: 'Standard',
        questionText: 'Prove that \\( (1 + \\sin\\theta)(1 - \\sin\\theta) + (1 + \\cos\\theta)(1 - \\cos\\theta) \\equiv 1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'proof', 'pythagorean', 'difference of squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = (1 + \\sin\\theta)(1 - \\sin\\theta) + (1 + \\cos\\theta)(1 - \\cos\\theta)',
                    explanation: 'Both products are pairs of conjugate brackets, so each expands quickly via the difference of two squares.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the first bracket using \\( (a+b)(a-b) = a^2 - b^2 \\).',
                    workingLatex: '(1 + \\sin\\theta)(1 - \\sin\\theta) = 1 - \\sin^2\\theta',
                    explanation: 'With \\( a = 1 \\) and \\( b = \\sin\\theta \\), the cross terms cancel and we get \\( 1^2 - \\sin^2\\theta = 1 - \\sin^2\\theta \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand the second bracket in the same way.',
                    workingLatex: '(1 + \\cos\\theta)(1 - \\cos\\theta) = 1 - \\cos^2\\theta',
                    explanation: 'Same template with \\( b = \\cos\\theta \\). Both expansions are in the rearranged Pythagorean form.'
                },
                {
                    stepNumber: 4,
                    description: 'Combine the two expansions.',
                    workingLatex: '= (1 - \\sin^2\\theta) + (1 - \\cos^2\\theta) = 2 - (\\sin^2\\theta + \\cos^2\\theta)',
                    explanation: 'Add the constants \\( 1 + 1 = 2 \\) and factor out the minus from the squared terms.'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= 2 - 1 = 1 = \\text{RHS}',
                    explanation: '\\( \\sin^2\\theta + \\cos^2\\theta \\equiv 1 \\), so the bracket collapses to 1, and \\( 2 - 1 = 1 \\). The LHS matches the RHS, so the identity is proved.'
                }
            ],
            finalAnswer: '\\( (1 + \\sin\\theta)(1 - \\sin\\theta) + (1 + \\cos\\theta)(1 - \\cos\\theta) \\equiv 1 \\) (proved)'
        }
    },
    {
        id: 't2-030',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 30',
        difficulty: 'Challenge',
        questionText: 'Given that \\( \\sin\\theta = \\dfrac{3}{5} \\) and \\( \\theta \\) is obtuse, find the exact values of \\( \\cos\\theta \\) and \\( \\tan\\theta \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig identities', 'exact values', 'sign reasoning', 'obtuse'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Note the sign information from the obtuse condition.',
                    workingLatex: '90^\\circ < \\theta < 180^\\circ \\implies \\sin\\theta > 0, \\quad \\cos\\theta < 0, \\quad \\tan\\theta < 0',
                    explanation: 'An obtuse angle lies in the second quadrant. There \\( \\sin\\theta \\) is positive (consistent with \\( \\sin\\theta = \\dfrac{3}{5} \\)), but \\( \\cos\\theta \\) is negative, and so is \\( \\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta} \\). This sign reasoning is the crux of the question.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the Pythagorean identity to find \\( \\cos^2\\theta \\).',
                    workingLatex: '\\cos^2\\theta = 1 - \\sin^2\\theta = 1 - \\left(\\frac{3}{5}\\right)^2 = 1 - \\frac{9}{25}',
                    explanation: 'Rearrange \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\). Squaring the given value: \\( \\left(\\dfrac{3}{5}\\right)^2 = \\dfrac{9}{25} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the fraction.',
                    workingLatex: '\\cos^2\\theta = \\frac{25}{25} - \\frac{9}{25} = \\frac{16}{25}',
                    explanation: 'Write 1 as \\( \\dfrac{25}{25} \\) for a common denominator and subtract.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the square root, choosing the correct sign.',
                    workingLatex: '\\cos\\theta = -\\sqrt{\\frac{16}{25}} = -\\frac{4}{5}',
                    explanation: 'Square-rooting normally allows \\( \\pm \\), but step 1 told us \\( \\cos\\theta < 0 \\) in the second quadrant, so we take the negative root.'
                },
                {
                    stepNumber: 5,
                    description: 'Use the quotient identity to find \\( \\tan\\theta \\).',
                    workingLatex: '\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{3/5}{-4/5}',
                    explanation: 'Substitute the values directly into \\( \\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta} \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Simplify the compound fraction.',
                    workingLatex: '\\tan\\theta = \\frac{3}{5} \\times \\frac{5}{-4} = -\\frac{3}{4}',
                    explanation: 'Dividing fractions: multiply by the reciprocal. The fives cancel, leaving \\( -\\dfrac{3}{4} \\). The sign is negative as predicted in step 1, which is a useful consistency check.'
                }
            ],
            finalAnswer: '\\( \\cos\\theta = -\\dfrac{4}{5}, \\quad \\tan\\theta = -\\dfrac{3}{4} \\)'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\sin^2 x\\cos^2 y - \\cos^2 x\\sin^2 y',
                    explanation: 'The expression mixes \\( x \\) and \\( y \\). The RHS has no \\( \\cos \\) terms, so we will replace \\( \\cos^2 y \\) using the Pythagorean identity.'
                },
                {
                    stepNumber: 2,
                    description: 'Replace \\( \\cos^2 y \\) with \\( 1 - \\sin^2 y \\).',
                    workingLatex: '= \\sin^2 x(1 - \\sin^2 y) - \\cos^2 x\\sin^2 y',
                    explanation: 'The Pythagorean identity holds for any angle, so it applies to \\( y \\) just as to \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Distribute \\( \\sin^2 x \\).',
                    workingLatex: '= \\sin^2 x - \\sin^2 x\\sin^2 y - \\cos^2 x\\sin^2 y',
                    explanation: 'Multiply \\( \\sin^2 x \\) through the bracket: \\( \\sin^2 x \\cdot 1 = \\sin^2 x \\) and \\( \\sin^2 x \\cdot (-\\sin^2 y) = -\\sin^2 x \\sin^2 y \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factor \\( -\\sin^2 y \\) from the last two terms.',
                    workingLatex: '= \\sin^2 x - \\sin^2 y(\\sin^2 x + \\cos^2 x)',
                    explanation: 'Both terms contain \\( \\sin^2 y \\). Pulling it out (with its minus sign) leaves \\( \\sin^2 x + \\cos^2 x \\) inside the bracket — exactly the Pythagorean identity.'
                },
                {
                    stepNumber: 5,
                    description: 'Apply \\( \\sin^2 x + \\cos^2 x = 1 \\).',
                    workingLatex: '= \\sin^2 x - \\sin^2 y \\cdot 1 = \\sin^2 x - \\sin^2 y = \\text{RHS}',
                    explanation: 'The bracket collapses to 1. The result matches the right-hand side.'
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
                    description: 'Square the value of \\( \\sin x \\).',
                    workingLatex: '\\sin^2 x = \\left(\\frac{2}{\\sqrt{5}}\\right)^2 = \\frac{4}{5}',
                    explanation: '\\( \\left(\\frac{2}{\\sqrt{5}}\\right)^2 = \\frac{2^2}{(\\sqrt{5})^2} = \\frac{4}{5} \\). Squaring a square root removes it.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the Pythagorean identity.',
                    workingLatex: '\\frac{4}{5} + \\cos^2 x = 1',
                    explanation: 'Plug \\( \\sin^2 x \\) into \\( \\sin^2 x + \\cos^2 x = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Isolate \\( \\cos^2 x \\).',
                    workingLatex: '\\cos^2 x = 1 - \\frac{4}{5} = \\frac{1}{5}',
                    explanation: 'Subtract \\( \\frac{4}{5} \\) from both sides.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the positive square root.',
                    workingLatex: '\\cos x = \\frac{1}{\\sqrt{5}}',
                    explanation: '\\( x \\) is acute so \\( \\cos x > 0 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the quotient identity.',
                    workingLatex: '\\tan x = \\frac{\\sin x}{\\cos x} = \\frac{\\frac{2}{\\sqrt{5}}}{\\frac{1}{\\sqrt{5}}}',
                    explanation: 'Use \\( \\tan x = \\dfrac{\\sin x}{\\cos x} \\) with the known values.'
                },
                {
                    stepNumber: 6,
                    description: 'Simplify the compound fraction.',
                    workingLatex: '= \\frac{2}{\\sqrt{5}} \\times \\frac{\\sqrt{5}}{1} = 2',
                    explanation: 'Dividing by \\( \\dfrac{1}{\\sqrt{5}} \\) is the same as multiplying by \\( \\sqrt{5} \\). The \\( \\sqrt{5} \\) terms cancel, leaving 2.'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = (3\\sin x + 4\\cos x)^2 + (4\\sin x - 3\\cos x)^2',
                    explanation: 'Expand each squared bracket using \\( (a\\pm b)^2 = a^2 \\pm 2ab + b^2 \\). The cross-terms should cancel because one bracket is plus and the other is minus.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the first square.',
                    workingLatex: '(3\\sin x + 4\\cos x)^2 = 9\\sin^2 x + 24\\sin x\\cos x + 16\\cos^2 x',
                    explanation: 'With \\( a = 3\\sin x \\) and \\( b = 4\\cos x \\): \\( a^2 = 9\\sin^2 x \\), \\( 2ab = 24\\sin x\\cos x \\), \\( b^2 = 16\\cos^2 x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand the second square.',
                    workingLatex: '(4\\sin x - 3\\cos x)^2 = 16\\sin^2 x - 24\\sin x\\cos x + 9\\cos^2 x',
                    explanation: 'With \\( a = 4\\sin x \\) and \\( b = 3\\cos x \\): \\( a^2 = 16\\sin^2 x \\), \\( -2ab = -24\\sin x\\cos x \\), \\( b^2 = 9\\cos^2 x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Add the two expansions.',
                    workingLatex: '= (9 + 16)\\sin^2 x + (24 - 24)\\sin x\\cos x + (16 + 9)\\cos^2 x',
                    explanation: 'Collect like terms across the two expansions.'
                },
                {
                    stepNumber: 5,
                    description: 'Simplify each coefficient.',
                    workingLatex: '= 25\\sin^2 x + 0 + 25\\cos^2 x = 25\\sin^2 x + 25\\cos^2 x',
                    explanation: 'The cross-terms exactly cancel; the \\( \\sin^2 x \\) terms add to 25 and so do the \\( \\cos^2 x \\) terms.'
                },
                {
                    stepNumber: 6,
                    description: 'Factor out 25.',
                    workingLatex: '= 25(\\sin^2 x + \\cos^2 x)',
                    explanation: 'Both terms share a factor of 25.'
                },
                {
                    stepNumber: 7,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= 25(1) = 25 = \\text{RHS}',
                    explanation: '\\( \\sin^2 x + \\cos^2 x = 1 \\), giving the required result.'
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
                    description: 'Part (a): Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\sin^2 x - \\cos^2 x',
                    explanation: 'Rearrange the Pythagorean identity to eliminate \\( \\cos^2 x \\) in favour of \\( \\sin^2 x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Use \\( \\cos^2 x = 1 - \\sin^2 x \\).',
                    workingLatex: '= \\sin^2 x - (1 - \\sin^2 x)',
                    explanation: 'Substitute and keep the bracket so we distribute the minus sign correctly.'
                },
                {
                    stepNumber: 3,
                    description: 'Distribute the minus sign.',
                    workingLatex: '= \\sin^2 x - 1 + \\sin^2 x',
                    explanation: 'A minus outside a bracket flips both signs inside: \\( -(1) = -1 \\) and \\( -(-\\sin^2 x) = +\\sin^2 x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Collect like terms.',
                    workingLatex: '= 2\\sin^2 x - 1 = \\text{RHS}',
                    explanation: 'The two \\( \\sin^2 x \\) terms add. This proves part (a).'
                },
                {
                    stepNumber: 5,
                    description: 'Part (b): Use the result from (a).',
                    workingLatex: '2\\sin^2 x - 1 = \\frac{1}{2}',
                    explanation: 'By part (a) the original equation is equivalent to this single-trig-function form.'
                },
                {
                    stepNumber: 6,
                    description: 'Add 1 to both sides.',
                    workingLatex: '2\\sin^2 x = \\frac{3}{2}',
                    explanation: '\\( \\frac{1}{2} + 1 = \\frac{1}{2} + \\frac{2}{2} = \\frac{3}{2} \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Divide by 2 and square-root.',
                    workingLatex: '\\sin^2 x = \\frac{3}{4} \\implies \\sin x = \\pm\\frac{\\sqrt{3}}{2}',
                    explanation: 'Both signs are kept because \\( \\sin x \\) can be positive or negative in the given interval.'
                },
                {
                    stepNumber: 8,
                    description: 'Solve \\( \\sin x = \\dfrac{\\sqrt{3}}{2} \\).',
                    workingLatex: 'x = 60^\\circ, \\, 120^\\circ',
                    explanation: 'The principal value is \\( 60^\\circ \\); the second-quadrant solution is \\( 180^\\circ - 60^\\circ = 120^\\circ \\).'
                },
                {
                    stepNumber: 9,
                    description: 'Solve \\( \\sin x = -\\dfrac{\\sqrt{3}}{2} \\).',
                    workingLatex: 'x = 180^\\circ + 60^\\circ = 240^\\circ, \\quad 360^\\circ - 60^\\circ = 300^\\circ',
                    explanation: 'Sine is negative in quadrants III and IV. The reference angle is still \\( 60^\\circ \\).'
                },
                {
                    stepNumber: 10,
                    description: 'List all solutions in order.',
                    workingLatex: 'x = 60^\\circ, \\, 120^\\circ, \\, 240^\\circ, \\, 300^\\circ',
                    explanation: 'These are all four values in \\( [0^\\circ, 360^\\circ] \\). The diagram below shows why: the sine curve crosses the line \\( y = \\tfrac{\\sqrt{3}}{2} \\) twice (at \\( 60^\\circ \\) and \\( 120^\\circ \\)) and the line \\( y = -\\tfrac{\\sqrt{3}}{2} \\) twice (at \\( 240^\\circ \\) and \\( 300^\\circ \\)).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -10, xMax: 380, yMin: -1.35, yMax: 1.35,
                        xTicks: [60, 120, 180, 240, 300, 360],
                        yTicks: [-1, 1],
                        xLabel: 'x',
                        yLabel: 'y',
                        curves: [
                            {
                                points: sample((x) => Math.sin(x * Math.PI / 180), 0, 360, 180),
                                color: '#1d4ed8',
                                label: 'y = \\sin x',
                                labelAt: [10, 1.15],
                            },
                        ],
                        lines: [
                            { from: [0, Math.sqrt(3) / 2], to: [360, Math.sqrt(3) / 2], color: '#16a34a', dashed: true, label: 'y = \\tfrac{\\sqrt{3}}{2}', labelAt: [305, 1.05] },
                            { from: [0, -Math.sqrt(3) / 2], to: [360, -Math.sqrt(3) / 2], color: '#dc2626', dashed: true, label: 'y = -\\tfrac{\\sqrt{3}}{2}', labelAt: [305, -0.7] },
                        ],
                        points: [
                            { at: [60, Math.sqrt(3) / 2], label: '(60^\\circ,\\, \\tfrac{\\sqrt{3}}{2})', labelAnchor: 'nw', r: 4 },
                            { at: [120, Math.sqrt(3) / 2], label: '(120^\\circ,\\, \\tfrac{\\sqrt{3}}{2})', labelAnchor: 'ne', r: 4 },
                            { at: [240, -Math.sqrt(3) / 2], label: '(240^\\circ,\\, -\\tfrac{\\sqrt{3}}{2})', labelAnchor: 'sw', r: 4 },
                            { at: [300, -Math.sqrt(3) / 2], label: '(300^\\circ,\\, -\\tfrac{\\sqrt{3}}{2})', labelAnchor: 'se', r: 4 },
                        ],
                    },
                }
            ],
            finalAnswer: '\\( x = 60^\\circ, \\, 120^\\circ, \\, 240^\\circ, \\, 300^\\circ \\)'
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
                    description: 'Part (a): Start from the equation we are given.',
                    workingLatex: '2\\cos^2\\theta + 3\\sin\\theta - 3 = 0',
                    explanation: 'The goal is to rewrite this with only \\( \\sin\\theta \\) using the Pythagorean identity.'
                },
                {
                    stepNumber: 2,
                    description: 'Replace \\( \\cos^2\\theta \\) using the Pythagorean identity.',
                    workingLatex: '2(1 - \\sin^2\\theta) + 3\\sin\\theta - 3 = 0',
                    explanation: 'Rearrange \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\) to get \\( \\cos^2\\theta = 1 - \\sin^2\\theta \\), then substitute.'
                },
                {
                    stepNumber: 3,
                    description: 'Distribute the 2.',
                    workingLatex: '2 - 2\\sin^2\\theta + 3\\sin\\theta - 3 = 0',
                    explanation: '\\( 2 \\times 1 = 2 \\) and \\( 2 \\times (-\\sin^2\\theta) = -2\\sin^2\\theta \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify the constants.',
                    workingLatex: '-2\\sin^2\\theta + 3\\sin\\theta - 1 = 0',
                    explanation: '\\( 2 - 3 = -1 \\). The equation is now a quadratic in \\( \\sin\\theta \\), with a negative leading coefficient.'
                },
                {
                    stepNumber: 5,
                    description: 'Multiply through by \\( -1 \\).',
                    workingLatex: '2\\sin^2\\theta - 3\\sin\\theta + 1 = 0',
                    explanation: 'Multiplying every term by \\( -1 \\) keeps the equation equivalent and gives the required form. Part (a) is shown.'
                },
                {
                    stepNumber: 6,
                    description: 'Part (b): Factorise the quadratic in \\( \\sin\\theta \\).',
                    workingLatex: '(2\\sin\\theta - 1)(\\sin\\theta - 1) = 0',
                    explanation: 'Check by expansion: \\( 2\\sin^2\\theta - 2\\sin\\theta - \\sin\\theta + 1 = 2\\sin^2\\theta - 3\\sin\\theta + 1 \\). \\checkmark'
                },
                {
                    stepNumber: 7,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '2\\sin\\theta - 1 = 0 \\quad \\text{or} \\quad \\sin\\theta - 1 = 0',
                    explanation: 'A product is zero only if one of the factors is zero.'
                },
                {
                    stepNumber: 8,
                    description: 'Solve each factor.',
                    workingLatex: '\\sin\\theta = \\frac{1}{2} \\quad \\text{or} \\quad \\sin\\theta = 1',
                    explanation: 'Rearrange each linear equation in \\( \\sin\\theta \\).'
                },
                {
                    stepNumber: 9,
                    description: 'Solve \\( \\sin\\theta = \\dfrac{1}{2} \\).',
                    workingLatex: '\\theta = 30^\\circ, \\, 150^\\circ',
                    explanation: 'Principal value \\( 30^\\circ \\); second-quadrant solution \\( 180^\\circ - 30^\\circ = 150^\\circ \\).'
                },
                {
                    stepNumber: 10,
                    description: 'Solve \\( \\sin\\theta = 1 \\).',
                    workingLatex: '\\theta = 90^\\circ',
                    explanation: 'Sine equals 1 only at the top of the unit circle.'
                },
                {
                    stepNumber: 11,
                    description: 'List all solutions in order.',
                    workingLatex: '\\theta = 30^\\circ, \\, 90^\\circ, \\, 150^\\circ',
                    explanation: 'These are the three values in \\( [0^\\circ, 360^\\circ] \\). The diagram shows the sine curve crossing \\( y = \\tfrac{1}{2} \\) at \\( 30^\\circ \\) and \\( 150^\\circ \\), and touching \\( y = 1 \\) at \\( 90^\\circ \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -10, xMax: 380, yMin: -1.35, yMax: 1.35,
                        xTicks: [30, 90, 150, 180, 270, 360],
                        yTicks: [-1, 1],
                        xLabel: '\\theta',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.sin(x * Math.PI / 180), 0, 360, 180), color: '#1d4ed8', label: 'y = \\sin\\theta', labelAt: [10, 1.15] },
                        ],
                        lines: [
                            { from: [0, 0.5], to: [360, 0.5], color: '#16a34a', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [310, 0.62] },
                            { from: [0, 1], to: [360, 1], color: '#16a34a', dashed: true, label: 'y = 1', labelAt: [310, 1.1] },
                        ],
                        points: [
                            { at: [30, 0.5], label: '30^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [90, 1], label: '90^\\circ', labelAnchor: 'n', r: 4 },
                            { at: [150, 0.5], label: '150^\\circ', labelAnchor: 'ne', r: 4 },
                        ],
                    },
                }
            ],
            finalAnswer: '\\( \\theta = 30^\\circ, \\, 90^\\circ, \\, 150^\\circ \\)'
        }
    },

    // ─── Q36–70: Additional Trigonometric Identities Questions ──────────────

    {
        id: 't2-036',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 36',
        difficulty: 'Foundation',
        questionText: 'Simplify \\( \\sin^2 x + \\cos^2 x \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the Pythagorean identity.',
                    workingLatex: '\\sin^2 x + \\cos^2 x = 1',
                    explanation: 'This is one of the two fundamental trigonometric identities, true for every value of \\( x \\). It is worth memorising.'
                }
            ],
            finalAnswer: '\\( 1 \\)'
        }
    },
    {
        id: 't2-037',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 37',
        difficulty: 'Foundation',
        questionText: 'Express \\( \\tan x \\) in terms of \\( \\sin x \\) and \\( \\cos x \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the quotient identity.',
                    workingLatex: '\\tan x = \\frac{\\sin x}{\\cos x}',
                    explanation: 'This is the definition of \\( \\tan x \\) in terms of the other two basic trig functions, valid whenever \\( \\cos x \\neq 0 \\).'
                }
            ],
            finalAnswer: '\\( \\tan x = \\dfrac{\\sin x}{\\cos x} \\)'
        }
    },
    {
        id: 't2-038',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 38',
        difficulty: 'Foundation',
        questionText: 'Prove that \\( \\dfrac{\\sin x}{\\cos x} + \\dfrac{\\cos x}{\\sin x} = \\dfrac{1}{\\sin x \\cos x} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{\\sin x}{\\cos x} + \\frac{\\cos x}{\\sin x}',
                    explanation: 'To add the two fractions we need a common denominator. The natural choice is \\( \\sin x \\cos x \\), the product of the two existing denominators.'
                },
                {
                    stepNumber: 2,
                    description: 'Rewrite over the common denominator.',
                    workingLatex: '= \\frac{\\sin x \\cdot \\sin x}{\\cos x \\cdot \\sin x} + \\frac{\\cos x \\cdot \\cos x}{\\sin x \\cdot \\cos x}',
                    explanation: 'Multiply each fraction top and bottom by what it is missing. The first now has denominator \\( \\sin x \\cos x \\); so does the second.'
                },
                {
                    stepNumber: 3,
                    description: 'Combine over the single denominator.',
                    workingLatex: '= \\frac{\\sin^2 x + \\cos^2 x}{\\sin x \\cos x}',
                    explanation: 'Same denominator, so we add the numerators.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= \\frac{1}{\\sin x \\cos x} = \\text{RHS}',
                    explanation: '\\( \\sin^2 x + \\cos^2 x = 1 \\). This is the right-hand side.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\sin x}{\\cos x} + \\dfrac{\\cos x}{\\sin x} \\equiv \\dfrac{1}{\\sin x \\cos x} \\) (proven)'
        }
    },
    {
        id: 't2-039',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 39',
        difficulty: 'Foundation',
        questionText: 'Simplify \\( 1 - \\cos^2 \\theta \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the Pythagorean identity.',
                    workingLatex: '\\sin^2\\theta + \\cos^2\\theta = 1 \\implies 1 - \\cos^2\\theta = \\sin^2\\theta',
                    explanation: 'Subtracting \\( \\cos^2\\theta \\) from both sides of \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\) gives the result directly.'
                }
            ],
            finalAnswer: '\\( \\sin^2 \\theta \\)'
        }
    },
    {
        id: 't2-040',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 40',
        difficulty: 'Foundation',
        questionText: 'Given \\( \\sin x = \\dfrac{3}{5} \\) and \\( x \\) is acute, find \\( \\cos x \\) and \\( \\tan x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Square the value of \\( \\sin x \\).',
                    workingLatex: '\\sin^2 x = \\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}',
                    explanation: 'Square the numerator and the denominator separately.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the Pythagorean identity.',
                    workingLatex: '\\frac{9}{25} + \\cos^2 x = 1',
                    explanation: 'Use \\( \\sin^2 x + \\cos^2 x = 1 \\) with the value found in step 1.'
                },
                {
                    stepNumber: 3,
                    description: 'Isolate \\( \\cos^2 x \\).',
                    workingLatex: '\\cos^2 x = 1 - \\frac{9}{25} = \\frac{16}{25}',
                    explanation: 'Write 1 as \\( \\frac{25}{25} \\) and subtract.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the positive square root.',
                    workingLatex: '\\cos x = \\frac{4}{5}',
                    explanation: 'Positive because \\( x \\) is acute and \\( \\sqrt{16/25} = 4/5 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Compute \\( \\tan x \\) using the quotient identity.',
                    workingLatex: '\\tan x = \\frac{\\sin x}{\\cos x} = \\frac{\\frac{3}{5}}{\\frac{4}{5}} = \\frac{3}{5} \\times \\frac{5}{4} = \\frac{3}{4}',
                    explanation: 'Dividing by \\( \\frac{4}{5} \\) is the same as multiplying by \\( \\frac{5}{4} \\); the 5s cancel.'
                }
            ],
            finalAnswer: '\\( \\cos x = \\dfrac{4}{5}, \\quad \\tan x = \\dfrac{3}{4} \\)'
        }
    },
    {
        id: 't2-041',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 41',
        difficulty: 'Foundation',
        questionText: 'Prove that \\( \\cos^4 x - \\sin^4 x = \\cos^2 x - \\sin^2 x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\cos^4 x - \\sin^4 x',
                    explanation: 'Treat \\( \\cos^4 x = (\\cos^2 x)^2 \\) and \\( \\sin^4 x = (\\sin^2 x)^2 \\); the LHS is then a difference of two squares.'
                },
                {
                    stepNumber: 2,
                    description: 'Factor using difference of two squares.',
                    workingLatex: '= (\\cos^2 x - \\sin^2 x)(\\cos^2 x + \\sin^2 x)',
                    explanation: 'Apply \\( a^2 - b^2 = (a-b)(a+b) \\) with \\( a = \\cos^2 x \\) and \\( b = \\sin^2 x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= (\\cos^2 x - \\sin^2 x)(1)',
                    explanation: 'The second factor is exactly \\( \\sin^2 x + \\cos^2 x = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify.',
                    workingLatex: '= \\cos^2 x - \\sin^2 x = \\text{RHS}',
                    explanation: 'Multiplying by 1 leaves the first factor unchanged.'
                }
            ],
            finalAnswer: '\\( \\cos^4 x - \\sin^4 x \\equiv \\cos^2 x - \\sin^2 x \\) (proven)'
        }
    },
    {
        id: 't2-042',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 42',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\sin x - 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Isolate \\( \\sin x \\).',
                    workingLatex: '2\\sin x = 1 \\implies \\sin x = \\frac{1}{2}',
                    explanation: 'Add 1 to both sides, then divide by 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the principal value.',
                    workingLatex: 'x_0 = \\sin^{-1}\\left(\\frac{1}{2}\\right) = 30^\\circ',
                    explanation: '\\( 30^\\circ \\) is the standard exact value for which sine is \\( \\tfrac{1}{2} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the second solution using the CAST rule.',
                    workingLatex: 'x = 180^\\circ - 30^\\circ = 150^\\circ',
                    explanation: 'Sine is also positive in the second quadrant. The other solution in \\( [0^\\circ, 360^\\circ] \\) is \\( 180^\\circ - \\) principal value.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solutions in the given interval.',
                    workingLatex: 'x = 30^\\circ, \\, 150^\\circ',
                    explanation: 'These are the two solutions in \\( [0^\\circ, 360^\\circ] \\); no further values would lie inside this range. The diagram shows the sine curve cutting the line \\( y = \\tfrac{1}{2} \\) at these two points.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -10, xMax: 380, yMin: -1.35, yMax: 1.35,
                        xTicks: [30, 90, 150, 180, 270, 360],
                        yTicks: [-1, 1],
                        xLabel: 'x',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.sin(x * Math.PI / 180), 0, 360, 180), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [10, 1.15] },
                        ],
                        lines: [
                            { from: [0, 0.5], to: [360, 0.5], color: '#16a34a', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [310, 0.62] },
                        ],
                        points: [
                            { at: [30, 0.5], label: '30^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [150, 0.5], label: '150^\\circ', labelAnchor: 'ne', r: 4 },
                        ],
                    },
                }
            ],
            finalAnswer: '\\( x = 30^\\circ, \\, 150^\\circ \\)'
        }
    },
    {
        id: 't2-043',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 43',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\tan x = -1 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the reference angle from \\( |{-1}| \\).',
                    workingLatex: '\\tan^{-1}(1) = 45^\\circ',
                    explanation: 'The reference (acute) angle uses the positive value. \\( 45^\\circ \\) is a standard exact value for \\( \\tan \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the quadrants where \\( \\tan x \\) is negative.',
                    workingLatex: '\\tan x < 0 \\text{ in quadrants II and IV}',
                    explanation: 'By the CAST rule, tan is positive in quadrants I and III and negative in quadrants II and IV.'
                },
                {
                    stepNumber: 3,
                    description: 'Compute the quadrant II solution.',
                    workingLatex: 'x = 180^\\circ - 45^\\circ = 135^\\circ',
                    explanation: 'In quadrant II the angle is \\( 180^\\circ - \\) reference angle.'
                },
                {
                    stepNumber: 4,
                    description: 'Compute the quadrant IV solution.',
                    workingLatex: 'x = 360^\\circ - 45^\\circ = 315^\\circ',
                    explanation: 'In quadrant IV the angle is \\( 360^\\circ - \\) reference angle.'
                },
                {
                    stepNumber: 5,
                    description: 'State the solutions.',
                    workingLatex: 'x = 135^\\circ, \\, 315^\\circ',
                    explanation: 'These are the two solutions in \\( [0^\\circ, 360^\\circ] \\). The tan curve crosses \\( y = -1 \\) once in each branch.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -10, xMax: 380, yMin: -5, yMax: 5,
                        xTicks: [90, 135, 180, 270, 315, 360],
                        yTicks: [-4, -2, 2, 4],
                        xLabel: 'x',
                        yLabel: 'y',
                        curves: sampleTanDeg(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = \\tan x' : undefined, labelAt: i === 0 ? [20, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [0, -1], to: [360, -1], color: '#dc2626', dashed: true, label: 'y = -1', labelAt: [320, -1.6] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true },
                        ],
                        points: [
                            { at: [135, -1], label: '135^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [315, -1], label: '315^\\circ', labelAnchor: 'sw', r: 4 },
                        ],
                    },
                }
            ],
            finalAnswer: '\\( x = 135^\\circ, \\, 315^\\circ \\)'
        }
    },
    {
        id: 't2-044',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 44',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\cos^2 x - 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Isolate \\( \\cos^2 x \\).',
                    workingLatex: '2\\cos^2 x = 1 \\implies \\cos^2 x = \\frac{1}{2}',
                    explanation: 'Add 1 to both sides, then divide by 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Take both square roots.',
                    workingLatex: '\\cos x = \\pm\\sqrt{\\frac{1}{2}} = \\pm\\frac{1}{\\sqrt{2}} = \\pm\\frac{\\sqrt{2}}{2}',
                    explanation: 'Both signs must be kept because we do not know which quadrant \\( x \\) is in. \\( \\frac{1}{\\sqrt{2}} \\) and \\( \\frac{\\sqrt{2}}{2} \\) are equal — the second has a rationalised denominator.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve \\( \\cos x = \\dfrac{\\sqrt{2}}{2} \\).',
                    workingLatex: 'x = 45^\\circ, \\, 360^\\circ - 45^\\circ = 315^\\circ',
                    explanation: 'Cosine is positive in quadrants I and IV. Reference angle is \\( 45^\\circ \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( \\cos x = -\\dfrac{\\sqrt{2}}{2} \\).',
                    workingLatex: 'x = 180^\\circ - 45^\\circ = 135^\\circ, \\quad 180^\\circ + 45^\\circ = 225^\\circ',
                    explanation: 'Cosine is negative in quadrants II and III.'
                },
                {
                    stepNumber: 5,
                    description: 'Combine all solutions in order.',
                    workingLatex: 'x = 45^\\circ, \\, 135^\\circ, \\, 225^\\circ, \\, 315^\\circ',
                    explanation: 'Four solutions in \\( [0^\\circ, 360^\\circ] \\), evenly spaced \\( 90^\\circ \\) apart. The diagram shows where the cosine curve cuts \\( y = \\pm\\tfrac{\\sqrt{2}}{2} \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -10, xMax: 380, yMin: -1.35, yMax: 1.35,
                        xTicks: [45, 135, 180, 225, 315, 360],
                        yTicks: [-1, 1],
                        xLabel: 'x',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.cos(x * Math.PI / 180), 0, 360, 180), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [10, 1.15] },
                        ],
                        lines: [
                            { from: [0, Math.SQRT2 / 2], to: [360, Math.SQRT2 / 2], color: '#16a34a', dashed: true, label: 'y = \\tfrac{\\sqrt{2}}{2}', labelAt: [300, 0.85] },
                            { from: [0, -Math.SQRT2 / 2], to: [360, -Math.SQRT2 / 2], color: '#dc2626', dashed: true, label: 'y = -\\tfrac{\\sqrt{2}}{2}', labelAt: [300, -0.85] },
                        ],
                        points: [
                            { at: [45, Math.SQRT2 / 2], label: '45^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [135, -Math.SQRT2 / 2], label: '135^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [225, -Math.SQRT2 / 2], label: '225^\\circ', labelAnchor: 'se', r: 4 },
                            { at: [315, Math.SQRT2 / 2], label: '315^\\circ', labelAnchor: 'ne', r: 4 },
                        ],
                    },
                }
            ],
            finalAnswer: '\\( x = 45^\\circ, \\, 135^\\circ, \\, 225^\\circ, \\, 315^\\circ \\)'
        }
    },
    {
        id: 't2-045',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 45',
        difficulty: 'Foundation',
        questionText: 'Show that \\( \\dfrac{1 - \\cos^2 x}{\\cos^2 x} = \\tan^2 x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{1 - \\cos^2 x}{\\cos^2 x}',
                    explanation: 'Rewrite the numerator using the Pythagorean identity to turn the fraction into \\( \\sin^2/\\cos^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Use \\( 1 - \\cos^2 x = \\sin^2 x \\).',
                    workingLatex: '= \\frac{\\sin^2 x}{\\cos^2 x}',
                    explanation: 'Rearranging \\( \\sin^2 x + \\cos^2 x = 1 \\) gives this directly.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quotient identity.',
                    workingLatex: '= \\left(\\frac{\\sin x}{\\cos x}\\right)^2 = \\tan^2 x = \\text{RHS}',
                    explanation: 'Since \\( \\frac{\\sin x}{\\cos x} = \\tan x \\), the squared ratio equals \\( \\tan^2 x \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{1 - \\cos^2 x}{\\cos^2 x} \\equiv \\tan^2 x \\) (shown)'
        }
    },
    {
        id: 't2-046',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 46',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin^2 x = \\dfrac{3}{4} \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take both square roots.',
                    workingLatex: '\\sin x = \\pm\\sqrt{\\frac{3}{4}} = \\pm\\frac{\\sqrt{3}}{2}',
                    explanation: 'Both signs are needed because \\( \\sin x \\) can be positive or negative in the interval.'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the reference angle.',
                    workingLatex: '\\sin^{-1}\\left(\\frac{\\sqrt{3}}{2}\\right) = 60^\\circ',
                    explanation: '\\( 60^\\circ \\) is the standard exact value for which \\( \\sin = \\dfrac{\\sqrt{3}}{2} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve \\( \\sin x = \\dfrac{\\sqrt{3}}{2} \\).',
                    workingLatex: 'x = 60^\\circ, \\, 180^\\circ - 60^\\circ = 120^\\circ',
                    explanation: 'Sine is positive in quadrants I and II.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( \\sin x = -\\dfrac{\\sqrt{3}}{2} \\).',
                    workingLatex: 'x = 180^\\circ + 60^\\circ = 240^\\circ, \\, 360^\\circ - 60^\\circ = 300^\\circ',
                    explanation: 'Sine is negative in quadrants III and IV.'
                },
                {
                    stepNumber: 5,
                    description: 'List all solutions.',
                    workingLatex: 'x = 60^\\circ, \\, 120^\\circ, \\, 240^\\circ, \\, 300^\\circ',
                    explanation: 'Four solutions in \\( [0^\\circ, 360^\\circ] \\). The diagram shows the sine curve cutting \\( y = \\pm\\tfrac{\\sqrt{3}}{2} \\) at these four x-values.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -10, xMax: 380, yMin: -1.35, yMax: 1.35,
                        xTicks: [60, 120, 180, 240, 300, 360],
                        yTicks: [-1, 1],
                        xLabel: 'x',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.sin(x * Math.PI / 180), 0, 360, 180), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [10, 1.15] },
                        ],
                        lines: [
                            { from: [0, Math.sqrt(3) / 2], to: [360, Math.sqrt(3) / 2], color: '#16a34a', dashed: true, label: 'y = \\tfrac{\\sqrt{3}}{2}', labelAt: [305, 1.05] },
                            { from: [0, -Math.sqrt(3) / 2], to: [360, -Math.sqrt(3) / 2], color: '#dc2626', dashed: true, label: 'y = -\\tfrac{\\sqrt{3}}{2}', labelAt: [305, -0.7] },
                        ],
                        points: [
                            { at: [60, Math.sqrt(3) / 2], label: '60^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [120, Math.sqrt(3) / 2], label: '120^\\circ', labelAnchor: 'ne', r: 4 },
                            { at: [240, -Math.sqrt(3) / 2], label: '240^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [300, -Math.sqrt(3) / 2], label: '300^\\circ', labelAnchor: 'se', r: 4 },
                        ],
                    },
                }
            ],
            finalAnswer: '\\( x = 60^\\circ, \\, 120^\\circ, \\, 240^\\circ, \\, 300^\\circ \\)'
        }
    },
    {
        id: 't2-047',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 47',
        difficulty: 'Foundation',
        questionText: 'Given \\( \\cos \\theta = -\\dfrac{5}{13} \\) and \\( 90^\\circ < \\theta < 180^\\circ \\), find \\( \\sin \\theta \\) and \\( \\tan \\theta \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Square the value of \\( \\cos\\theta \\).',
                    workingLatex: '\\cos^2\\theta = \\left(-\\frac{5}{13}\\right)^2 = \\frac{25}{169}',
                    explanation: 'Squaring a negative number gives a positive result.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the Pythagorean identity.',
                    workingLatex: '\\sin^2\\theta + \\frac{25}{169} = 1',
                    explanation: 'Use \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Isolate \\( \\sin^2\\theta \\).',
                    workingLatex: '\\sin^2\\theta = 1 - \\frac{25}{169} = \\frac{144}{169}',
                    explanation: 'Subtract \\( \\frac{25}{169} \\) from both sides; \\( \\frac{169}{169} - \\frac{25}{169} = \\frac{144}{169} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Take the positive square root.',
                    workingLatex: '\\sin\\theta = \\frac{12}{13}',
                    explanation: '\\( \\sqrt{\\frac{144}{169}} = \\frac{12}{13} \\). Since \\( 90^\\circ < \\theta < 180^\\circ \\) (quadrant II), sine is positive, so we take the \\( + \\) root.'
                },
                {
                    stepNumber: 5,
                    description: 'Compute \\( \\tan\\theta \\) using the quotient identity.',
                    workingLatex: '\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{\\frac{12}{13}}{-\\frac{5}{13}} = \\frac{12}{13} \\times \\left(-\\frac{13}{5}\\right) = -\\frac{12}{5}',
                    explanation: 'Dividing by \\( -\\frac{5}{13} \\) is the same as multiplying by its reciprocal \\( -\\frac{13}{5} \\). The 13s cancel. The result is negative, consistent with \\( \\tan \\) being negative in quadrant II.'
                }
            ],
            finalAnswer: '\\( \\sin\\theta = \\dfrac{12}{13}, \\quad \\tan\\theta = -\\dfrac{12}{5} \\)'
        }
    },
    {
        id: 't2-048',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 48',
        difficulty: 'Foundation',
        questionText: 'Prove that \\( (\\sin x + \\cos x)^2 = 1 + 2\\sin x \\cos x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = (\\sin x + \\cos x)^2',
                    explanation: 'Expand the square first; the Pythagorean identity will then collapse part of the result.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the square.',
                    workingLatex: '= \\sin^2 x + 2\\sin x \\cos x + \\cos^2 x',
                    explanation: 'Using \\( (a+b)^2 = a^2 + 2ab + b^2 \\) with \\( a = \\sin x \\) and \\( b = \\cos x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Group the Pythagorean pair.',
                    workingLatex: '= (\\sin^2 x + \\cos^2 x) + 2\\sin x \\cos x',
                    explanation: 'Bracketing the \\( \\sin^2 + \\cos^2 \\) terms makes the identity easy to apply.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= 1 + 2\\sin x \\cos x = \\text{RHS}',
                    explanation: 'The bracket equals 1, leaving the right-hand side.'
                }
            ],
            finalAnswer: '\\( (\\sin x + \\cos x)^2 \\equiv 1 + 2\\sin x \\cos x \\) (proven)'
        }
    },
    {
        id: 't2-049',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 49',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\sin^2 x + \\sin x - 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise this as a quadratic in \\( \\sin x \\).',
                    workingLatex: '2\\sin^2 x + \\sin x - 1 = 0',
                    explanation: 'Treat \\( \\sin x \\) as the variable. The form is \\( 2u^2 + u - 1 = 0 \\) with \\( u = \\sin x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(2\\sin x - 1)(\\sin x + 1) = 0',
                    explanation: 'Check by expansion: \\( 2\\sin^2 x + 2\\sin x - \\sin x - 1 = 2\\sin^2 x + \\sin x - 1 \\). \\checkmark'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\sin x = \\frac{1}{2} \\quad \\text{or} \\quad \\sin x = -1',
                    explanation: 'Set each factor equal to zero and solve for \\( \\sin x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( \\sin x = \\dfrac{1}{2} \\).',
                    workingLatex: 'x = 30^\\circ, \\, 150^\\circ',
                    explanation: 'Principal value \\( 30^\\circ \\); quadrant II value \\( 180^\\circ - 30^\\circ = 150^\\circ \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve \\( \\sin x = -1 \\).',
                    workingLatex: 'x = 270^\\circ',
                    explanation: 'Sine equals \\( -1 \\) only at the bottom of the unit circle.'
                },
                {
                    stepNumber: 6,
                    description: 'Combine the solutions.',
                    workingLatex: 'x = 30^\\circ, \\, 150^\\circ, \\, 270^\\circ',
                    explanation: 'Three solutions in \\( [0^\\circ, 360^\\circ] \\). The diagram shows the sine curve crossing \\( y = \\tfrac{1}{2} \\) twice and touching \\( y = -1 \\) once.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -10, xMax: 380, yMin: -1.35, yMax: 1.35,
                        xTicks: [30, 90, 150, 180, 270, 360],
                        yTicks: [-1, 1],
                        xLabel: 'x',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.sin(x * Math.PI / 180), 0, 360, 180), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [10, 1.15] },
                        ],
                        lines: [
                            { from: [0, 0.5], to: [360, 0.5], color: '#16a34a', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [310, 0.62] },
                            { from: [0, -1], to: [360, -1], color: '#dc2626', dashed: true, label: 'y = -1', labelAt: [320, -1.18] },
                        ],
                        points: [
                            { at: [30, 0.5], label: '30^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [150, 0.5], label: '150^\\circ', labelAnchor: 'ne', r: 4 },
                            { at: [270, -1], label: '270^\\circ', labelAnchor: 's', r: 4 },
                        ],
                    },
                }
            ],
            finalAnswer: '\\( x = 30^\\circ, \\, 150^\\circ, \\, 270^\\circ \\)'
        }
    },
    {
        id: 't2-050',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 50',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\cos^2 x + 3\\cos x + 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the quadratic in \\( \\cos x \\).',
                    workingLatex: '2\\cos^2 x + 3\\cos x + 1 = 0',
                    explanation: 'Treat \\( \\cos x \\) as the variable. The form is \\( 2u^2 + 3u + 1 = 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(2\\cos x + 1)(\\cos x + 1) = 0',
                    explanation: 'Check by expanding: \\( 2\\cos^2 x + 2\\cos x + \\cos x + 1 = 2\\cos^2 x + 3\\cos x + 1 \\). \\checkmark'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\cos x = -\\frac{1}{2} \\quad \\text{or} \\quad \\cos x = -1',
                    explanation: 'Set each factor to zero and solve for \\( \\cos x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( \\cos x = -\\dfrac{1}{2} \\).',
                    workingLatex: 'x = 180^\\circ - 60^\\circ = 120^\\circ, \\quad 180^\\circ + 60^\\circ = 240^\\circ',
                    explanation: 'Reference angle \\( \\cos^{-1}(\\tfrac{1}{2}) = 60^\\circ \\). Cosine is negative in quadrants II and III.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve \\( \\cos x = -1 \\).',
                    workingLatex: 'x = 180^\\circ',
                    explanation: 'Cosine equals \\( -1 \\) only at \\( 180^\\circ \\) within the interval.'
                },
                {
                    stepNumber: 6,
                    description: 'List all solutions.',
                    workingLatex: 'x = 120^\\circ, \\, 180^\\circ, \\, 240^\\circ',
                    explanation: 'Three solutions in \\( [0^\\circ, 360^\\circ] \\). The diagram shows the cosine curve crossing \\( y = -\\tfrac{1}{2} \\) twice and touching \\( y = -1 \\) once.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -10, xMax: 380, yMin: -1.35, yMax: 1.35,
                        xTicks: [90, 120, 180, 240, 270, 360],
                        yTicks: [-1, 1],
                        xLabel: 'x',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.cos(x * Math.PI / 180), 0, 360, 180), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [10, 1.15] },
                        ],
                        lines: [
                            { from: [0, -0.5], to: [360, -0.5], color: '#dc2626', dashed: true, label: 'y = -\\tfrac{1}{2}', labelAt: [305, -0.7] },
                            { from: [0, -1], to: [360, -1], color: '#dc2626', dashed: true, label: 'y = -1', labelAt: [320, -1.18] },
                        ],
                        points: [
                            { at: [120, -0.5], label: '120^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [180, -1], label: '180^\\circ', labelAnchor: 's', r: 4 },
                            { at: [240, -0.5], label: '240^\\circ', labelAnchor: 'ne', r: 4 },
                        ],
                    },
                }
            ],
            finalAnswer: '\\( x = 120^\\circ, \\, 180^\\circ, \\, 240^\\circ \\)'
        }
    },
    {
        id: 't2-051',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 51',
        difficulty: 'Foundation',
        questionText: 'Prove that \\( \\dfrac{\\tan^2 x}{1 + \\tan^2 x} = \\sin^2 x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{\\tan^2 x}{1 + \\tan^2 x}',
                    explanation: 'Convert \\( \\tan^2 x \\) to \\( \\sin \\) and \\( \\cos \\) using the quotient identity.'
                },
                {
                    stepNumber: 2,
                    description: 'Replace \\( \\tan^2 x \\) with \\( \\dfrac{\\sin^2 x}{\\cos^2 x} \\).',
                    workingLatex: '= \\frac{\\frac{\\sin^2 x}{\\cos^2 x}}{1 + \\frac{\\sin^2 x}{\\cos^2 x}}',
                    explanation: 'Substitute using \\( \\tan x = \\dfrac{\\sin x}{\\cos x} \\), then square.'
                },
                {
                    stepNumber: 3,
                    description: 'Combine the denominator over \\( \\cos^2 x \\).',
                    workingLatex: '= \\frac{\\frac{\\sin^2 x}{\\cos^2 x}}{\\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x}}',
                    explanation: 'Write 1 as \\( \\dfrac{\\cos^2 x}{\\cos^2 x} \\) so the denominator can be added.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the Pythagorean identity in the denominator.',
                    workingLatex: '= \\frac{\\frac{\\sin^2 x}{\\cos^2 x}}{\\frac{1}{\\cos^2 x}}',
                    explanation: '\\( \\cos^2 x + \\sin^2 x = 1 \\), so the inner numerator collapses to 1.'
                },
                {
                    stepNumber: 5,
                    description: 'Divide the two fractions.',
                    workingLatex: '= \\frac{\\sin^2 x}{\\cos^2 x} \\times \\frac{\\cos^2 x}{1} = \\sin^2 x = \\text{RHS}',
                    explanation: 'Dividing by \\( \\dfrac{1}{\\cos^2 x} \\) is the same as multiplying by \\( \\cos^2 x \\); the \\( \\cos^2 x \\) terms cancel.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\tan^2 x}{1 + \\tan^2 x} \\equiv \\sin^2 x \\) (proven)'
        }
    },
    {
        id: 't2-052',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 52',
        difficulty: 'Foundation',
        questionText: 'Simplify \\( \\sin x \\cos x \\tan x + \\cos^2 x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\tan x \\) using the quotient identity.',
                    workingLatex: '\\sin x \\cos x \\cdot \\frac{\\sin x}{\\cos x} + \\cos^2 x',
                    explanation: 'Use \\( \\tan x = \\dfrac{\\sin x}{\\cos x} \\) so everything is in \\( \\sin \\) and \\( \\cos \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Cancel the \\( \\cos x \\) terms.',
                    workingLatex: '= \\sin x \\cdot \\sin x + \\cos^2 x = \\sin^2 x + \\cos^2 x',
                    explanation: 'The \\( \\cos x \\) in the first product cancels with the \\( \\cos x \\) in the denominator.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= 1',
                    explanation: '\\( \\sin^2 x + \\cos^2 x = 1 \\).'
                }
            ],
            finalAnswer: '\\( 1 \\)'
        }
    },
    {
        id: 't2-053',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 53',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\tan^2 x = 3 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take both square roots.',
                    workingLatex: '\\tan x = \\pm\\sqrt{3}',
                    explanation: 'Both signs are needed because \\( \\tan x \\) can be positive or negative in the interval.'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the reference angle.',
                    workingLatex: '\\tan^{-1}(\\sqrt{3}) = 60^\\circ',
                    explanation: '\\( 60^\\circ \\) is the standard exact value with \\( \\tan = \\sqrt{3} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve \\( \\tan x = \\sqrt{3} \\).',
                    workingLatex: 'x = 60^\\circ, \\, 60^\\circ + 180^\\circ = 240^\\circ',
                    explanation: 'Tangent is positive in quadrants I and III; the period of tan is \\( 180^\\circ \\), so add \\( 180^\\circ \\) to get the next solution.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( \\tan x = -\\sqrt{3} \\).',
                    workingLatex: 'x = 180^\\circ - 60^\\circ = 120^\\circ, \\quad 360^\\circ - 60^\\circ = 300^\\circ',
                    explanation: 'Tangent is negative in quadrants II and IV.'
                },
                {
                    stepNumber: 5,
                    description: 'Combine in order.',
                    workingLatex: 'x = 60^\\circ, \\, 120^\\circ, \\, 240^\\circ, \\, 300^\\circ',
                    explanation: 'Four solutions in \\( [0^\\circ, 360^\\circ] \\), spaced \\( 60^\\circ \\) then \\( 120^\\circ \\) apart. The diagram shows the tan curve crossing \\( y = \\pm\\sqrt{3} \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -10, xMax: 380, yMin: -5, yMax: 5,
                        xTicks: [60, 90, 120, 180, 240, 270, 300, 360],
                        yTicks: [-4, -2, 2, 4],
                        xLabel: 'x',
                        yLabel: 'y',
                        curves: sampleTanDeg(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = \\tan x' : undefined, labelAt: i === 0 ? [20, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [0, Math.sqrt(3)], to: [360, Math.sqrt(3)], color: '#16a34a', dashed: true, label: 'y = \\sqrt{3}', labelAt: [320, 2.2] },
                            { from: [0, -Math.sqrt(3)], to: [360, -Math.sqrt(3)], color: '#dc2626', dashed: true, label: 'y = -\\sqrt{3}', labelAt: [320, -2.4] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true },
                        ],
                        points: [
                            { at: [60, Math.sqrt(3)], label: '60^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [120, -Math.sqrt(3)], label: '120^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [240, Math.sqrt(3)], label: '240^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [300, -Math.sqrt(3)], label: '300^\\circ', labelAnchor: 'sw', r: 4 },
                        ],
                    },
                }
            ],
            finalAnswer: '\\( x = 60^\\circ, \\, 120^\\circ, \\, 240^\\circ, \\, 300^\\circ \\)'
        }
    },
    {
        id: 't2-054',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 54',
        difficulty: 'Foundation',
        questionText: 'Prove that \\( \\dfrac{1}{1 - \\sin x} + \\dfrac{1}{1 + \\sin x} = \\dfrac{2}{\\cos^2 x} \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{1}{1 - \\sin x} + \\frac{1}{1 + \\sin x}',
                    explanation: 'Combine the two fractions over the common denominator \\( (1-\\sin x)(1+\\sin x) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write over the common denominator.',
                    workingLatex: '= \\frac{(1 + \\sin x) + (1 - \\sin x)}{(1 - \\sin x)(1 + \\sin x)}',
                    explanation: 'Multiply each fraction top and bottom by what it is missing, then add the numerators.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the numerator.',
                    workingLatex: '= \\frac{2}{(1 - \\sin x)(1 + \\sin x)}',
                    explanation: 'The \\( +\\sin x \\) and \\( -\\sin x \\) cancel, leaving \\( 1 + 1 = 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Expand the denominator using difference of two squares.',
                    workingLatex: '= \\frac{2}{1 - \\sin^2 x}',
                    explanation: '\\( (1 - \\sin x)(1 + \\sin x) = 1 - \\sin^2 x \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= \\frac{2}{\\cos^2 x} = \\text{RHS}',
                    explanation: '\\( 1 - \\sin^2 x = \\cos^2 x \\). This is the right-hand side.'
                }
            ],
            finalAnswer: '\\( \\dfrac{1}{1 - \\sin x} + \\dfrac{1}{1 + \\sin x} \\equiv \\dfrac{2}{\\cos^2 x} \\) (proven)'
        }
    },
    {
        id: 't2-055',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 55',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 6\\cos^2 x - \\cos x - 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the quadratic in \\( \\cos x \\).',
                    workingLatex: '6\\cos^2 x - \\cos x - 1 = 0',
                    explanation: 'Treat \\( \\cos x \\) as the variable: form is \\( 6u^2 - u - 1 = 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: '(3\\cos x + 1)(2\\cos x - 1) = 0',
                    explanation: 'Check by expansion: \\( 6\\cos^2 x - 3\\cos x + 2\\cos x - 1 = 6\\cos^2 x - \\cos x - 1 \\). \\checkmark'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\cos x = -\\frac{1}{3} \\quad \\text{or} \\quad \\cos x = \\frac{1}{2}',
                    explanation: 'Solve each linear factor for \\( \\cos x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( \\cos x = \\dfrac{1}{2} \\).',
                    workingLatex: 'x = 60^\\circ, \\, 360^\\circ - 60^\\circ = 300^\\circ',
                    explanation: 'Reference angle \\( 60^\\circ \\). Cosine is positive in quadrants I and IV.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve \\( \\cos x = -\\dfrac{1}{3} \\).',
                    workingLatex: 'x_0 = \\cos^{-1}\\left(\\frac{1}{3}\\right) \\approx 70.53^\\circ',
                    explanation: 'Use a calculator for the reference angle since \\( \\frac{1}{3} \\) is not a standard value.'
                },
                {
                    stepNumber: 6,
                    description: 'Find both solutions for \\( \\cos x = -\\dfrac{1}{3} \\).',
                    workingLatex: 'x = 180^\\circ - 70.53^\\circ \\approx 109.5^\\circ, \\quad 180^\\circ + 70.53^\\circ \\approx 250.5^\\circ',
                    explanation: 'Cosine is negative in quadrants II and III, giving \\( 180^\\circ \\pm \\) reference angle.'
                },
                {
                    stepNumber: 7,
                    description: 'List all solutions to 1 d.p.',
                    workingLatex: 'x = 60^\\circ, \\, 109.5^\\circ, \\, 250.5^\\circ, \\, 300^\\circ',
                    explanation: 'Four solutions in \\( [0^\\circ, 360^\\circ] \\), to 1 decimal place where non-exact. The diagram shows the cosine curve crossing \\( y = \\tfrac{1}{2} \\) and \\( y = -\\tfrac{1}{3} \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -10, xMax: 380, yMin: -1.35, yMax: 1.35,
                        xTicks: [60, 109.5, 180, 250.5, 300, 360],
                        yTicks: [-1, 1],
                        xLabel: 'x',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.cos(x * Math.PI / 180), 0, 360, 180), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [10, 1.15] },
                        ],
                        lines: [
                            { from: [0, 0.5], to: [360, 0.5], color: '#16a34a', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [305, 0.62] },
                            { from: [0, -1 / 3], to: [360, -1 / 3], color: '#dc2626', dashed: true, label: 'y = -\\tfrac{1}{3}', labelAt: [305, -0.5] },
                        ],
                        points: [
                            { at: [60, 0.5], label: '60^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [109.5, -1 / 3], label: '109.5^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [250.5, -1 / 3], label: '250.5^\\circ', labelAnchor: 'se', r: 4 },
                            { at: [300, 0.5], label: '300^\\circ', labelAnchor: 'ne', r: 4 },
                        ],
                    },
                }
            ],
            finalAnswer: '\\( x = 60^\\circ, \\, 109.5^\\circ, \\, 250.5^\\circ, \\, 300^\\circ \\)'
        }
    },
    {
        id: 't2-056',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 56',
        difficulty: 'Foundation',
        questionText: 'Given \\( \\tan x = \\dfrac{5}{12} \\) and \\( x \\) is acute, find \\( \\sin x \\) and \\( \\cos x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Interpret \\( \\tan x \\) as opposite over adjacent.',
                    workingLatex: '\\tan x = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{5}{12}',
                    explanation: 'For an acute angle, place \\( x \\) in a right-angled triangle with opposite side 5 and adjacent side 12.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the hypotenuse using Pythagoras.',
                    workingLatex: '\\text{hyp}^2 = 5^2 + 12^2 = 25 + 144 = 169 \\implies \\text{hyp} = 13',
                    explanation: 'Take the positive root because a length is positive.'
                },
                {
                    stepNumber: 3,
                    description: 'Read \\( \\sin x \\) and \\( \\cos x \\) off the triangle.',
                    workingLatex: '\\sin x = \\frac{\\text{opp}}{\\text{hyp}} = \\frac{5}{13}, \\quad \\cos x = \\frac{\\text{adj}}{\\text{hyp}} = \\frac{12}{13}',
                    explanation: 'Both are positive because \\( x \\) is acute. The 5-12-13 triangle is a standard Pythagorean triple.'
                }
            ],
            finalAnswer: '\\( \\sin x = \\dfrac{5}{13}, \\quad \\cos x = \\dfrac{12}{13} \\)'
        }
    },
    {
        id: 't2-057',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 57',
        difficulty: 'Foundation',
        questionText: 'Show that \\( (1 - \\sin x)(1 + \\sin x) = \\cos^2 x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = (1 - \\sin x)(1 + \\sin x)',
                    explanation: 'This is the form \\( (a-b)(a+b) \\), the difference of two squares.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand using difference of two squares.',
                    workingLatex: '= 1^2 - (\\sin x)^2 = 1 - \\sin^2 x',
                    explanation: 'With \\( a = 1 \\) and \\( b = \\sin x \\), \\( (a-b)(a+b) = a^2 - b^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= \\cos^2 x = \\text{RHS}',
                    explanation: '\\( 1 - \\sin^2 x = \\cos^2 x \\), giving the required result.'
                }
            ],
            finalAnswer: '\\( (1 - \\sin x)(1 + \\sin x) \\equiv \\cos^2 x \\) (shown)'
        }
    },
    {
        id: 't2-058',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 58',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin x = \\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide both sides by \\( \\cos x \\).',
                    workingLatex: '\\frac{\\sin x}{\\cos x} = 1 \\implies \\tan x = 1',
                    explanation: 'This is valid because \\( \\cos x = 0 \\) does not give a solution (at those points \\( \\sin x = \\pm 1 \\neq 0 = \\cos x \\)).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the principal value.',
                    workingLatex: 'x_0 = \\tan^{-1}(1) = 45^\\circ',
                    explanation: '\\( 45^\\circ \\) is the standard exact value with \\( \\tan = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Use the period of tan to find the second solution.',
                    workingLatex: 'x = 45^\\circ + 180^\\circ = 225^\\circ',
                    explanation: 'Tangent repeats every \\( 180^\\circ \\). Tan is positive in quadrants I and III.'
                },
                {
                    stepNumber: 4,
                    description: 'List both solutions in the interval.',
                    workingLatex: 'x = 45^\\circ, \\, 225^\\circ',
                    explanation: 'Adding another \\( 180^\\circ \\) would exceed \\( 360^\\circ \\). The diagram shows the tan curve crossing \\( y = 1 \\) once in each branch.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -10, xMax: 380, yMin: -5, yMax: 5,
                        xTicks: [45, 90, 180, 225, 270, 360],
                        yTicks: [-4, -2, 2, 4],
                        xLabel: 'x',
                        yLabel: 'y',
                        curves: sampleTanDeg(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = \\tan x' : undefined, labelAt: i === 0 ? [20, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#16a34a', dashed: true, label: 'y = 1', labelAt: [320, 1.5] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true },
                        ],
                        points: [
                            { at: [45, 1], label: '45^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [225, 1], label: '225^\\circ', labelAnchor: 'nw', r: 4 },
                        ],
                    },
                }
            ],
            finalAnswer: '\\( x = 45^\\circ, \\, 225^\\circ \\)'
        }
    },
    {
        id: 't2-059',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 59',
        difficulty: 'Foundation',
        questionText: 'Prove that \\( \\dfrac{\\sin^2 x - \\cos^2 x}{\\sin x - \\cos x} = \\sin x + \\cos x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{\\sin^2 x - \\cos^2 x}{\\sin x - \\cos x}',
                    explanation: 'The numerator is a difference of two squares, so it should factorise to expose the denominator.'
                },
                {
                    stepNumber: 2,
                    description: 'Factor the numerator.',
                    workingLatex: '= \\frac{(\\sin x - \\cos x)(\\sin x + \\cos x)}{\\sin x - \\cos x}',
                    explanation: 'Using \\( a^2 - b^2 = (a-b)(a+b) \\) with \\( a = \\sin x \\) and \\( b = \\cos x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Cancel the common factor.',
                    workingLatex: '= \\sin x + \\cos x = \\text{RHS}',
                    explanation: 'Cancellation is valid where \\( \\sin x - \\cos x \\neq 0 \\), i.e. \\( x \\neq 45^\\circ + 180^\\circ k \\). This is the right-hand side.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\sin^2 x - \\cos^2 x}{\\sin x - \\cos x} \\equiv \\sin x + \\cos x \\) (proven)'
        }
    },
    {
        id: 't2-060',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 60',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 3\\sin x = 2\\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide both sides by \\( \\cos x \\).',
                    workingLatex: '\\frac{3\\sin x}{\\cos x} = 2 \\implies 3\\tan x = 2',
                    explanation: 'Use \\( \\dfrac{\\sin x}{\\cos x} = \\tan x \\). Division by \\( \\cos x \\) is fine here: where \\( \\cos x = 0 \\), the original equation gives \\( 3\\sin x = 0 \\) so \\( \\sin x = 0 \\), contradicting \\( \\cos x = 0 \\). No solutions are lost.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\( \\tan x \\).',
                    workingLatex: '\\tan x = \\frac{2}{3}',
                    explanation: 'Divide both sides by 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the principal value.',
                    workingLatex: 'x_0 = \\tan^{-1}\\left(\\frac{2}{3}\\right) \\approx 33.69^\\circ',
                    explanation: 'Calculator value, since \\( \\frac{2}{3} \\) is not a standard exact value for tan.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the second solution using the period of tan.',
                    workingLatex: 'x = 33.69^\\circ + 180^\\circ \\approx 213.69^\\circ',
                    explanation: 'Tan has period \\( 180^\\circ \\); positive values of tan occur in quadrants I and III.'
                },
                {
                    stepNumber: 5,
                    description: 'State the solutions to 1 d.p.',
                    workingLatex: 'x \\approx 33.7^\\circ, \\, 213.7^\\circ',
                    explanation: 'Two solutions in \\( [0^\\circ, 360^\\circ] \\), each to 1 decimal place. The diagram shows the tan curve crossing \\( y = \\tfrac{2}{3} \\) once in each branch.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -10, xMax: 380, yMin: -5, yMax: 5,
                        xTicks: [33.7, 90, 180, 213.7, 270, 360],
                        yTicks: [-4, -2, 2, 4],
                        xLabel: 'x',
                        yLabel: 'y',
                        curves: sampleTanDeg(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = \\tan x' : undefined, labelAt: i === 0 ? [20, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [0, 2 / 3], to: [360, 2 / 3], color: '#16a34a', dashed: true, label: 'y = \\tfrac{2}{3}', labelAt: [320, 1.2] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true },
                        ],
                        points: [
                            { at: [33.7, 2 / 3], label: '33.7^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [213.7, 2 / 3], label: '213.7^\\circ', labelAnchor: 'nw', r: 4 },
                        ],
                    },
                }
            ],
            finalAnswer: '\\( x \\approx 33.7^\\circ, \\, 213.7^\\circ \\)'
        }
    },
    {
        id: 't2-061',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 61',
        difficulty: 'Foundation',
        questionText: 'Prove that \\( \\tan x + \\dfrac{1}{\\tan x} = \\dfrac{1}{\\sin x \\cos x} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\tan x + \\frac{1}{\\tan x}',
                    explanation: 'Rewrite both terms using the quotient identity so we can combine them.'
                },
                {
                    stepNumber: 2,
                    description: 'Replace \\( \\tan x \\) with \\( \\dfrac{\\sin x}{\\cos x} \\).',
                    workingLatex: '= \\frac{\\sin x}{\\cos x} + \\frac{1}{\\frac{\\sin x}{\\cos x}} = \\frac{\\sin x}{\\cos x} + \\frac{\\cos x}{\\sin x}',
                    explanation: 'The reciprocal of \\( \\dfrac{\\sin x}{\\cos x} \\) is \\( \\dfrac{\\cos x}{\\sin x} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Combine over the common denominator \\( \\sin x \\cos x \\).',
                    workingLatex: '= \\frac{\\sin^2 x + \\cos^2 x}{\\sin x \\cos x}',
                    explanation: 'Multiply each fraction top and bottom by what it is missing, then add the numerators.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= \\frac{1}{\\sin x \\cos x} = \\text{RHS}',
                    explanation: '\\( \\sin^2 x + \\cos^2 x = 1 \\), giving the right-hand side.'
                }
            ],
            finalAnswer: '\\( \\tan x + \\dfrac{1}{\\tan x} \\equiv \\dfrac{1}{\\sin x \\cos x} \\) (proven)'
        }
    },
    {
        id: 't2-062',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 62',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\sin^2 x - 3\\sin x + 1 = 0 \\) for \\( 0 \\leq x \\leq 2\\pi \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the quadratic in \\( \\sin x \\).',
                    workingLatex: '2\\sin^2 x - 3\\sin x + 1 = 0',
                    explanation: 'Treat \\( \\sin x \\) as the variable; form is \\( 2u^2 - 3u + 1 = 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: '(2\\sin x - 1)(\\sin x - 1) = 0',
                    explanation: 'Check by expanding: \\( 2\\sin^2 x - 2\\sin x - \\sin x + 1 = 2\\sin^2 x - 3\\sin x + 1 \\). \\checkmark'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\sin x = \\frac{1}{2} \\quad \\text{or} \\quad \\sin x = 1',
                    explanation: 'Set each factor to zero.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( \\sin x = \\dfrac{1}{2} \\) in radians.',
                    workingLatex: 'x = \\frac{\\pi}{6}, \\, \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}',
                    explanation: 'Principal value \\( \\dfrac{\\pi}{6} \\); second-quadrant value \\( \\pi - \\dfrac{\\pi}{6} = \\dfrac{5\\pi}{6} \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve \\( \\sin x = 1 \\).',
                    workingLatex: 'x = \\frac{\\pi}{2}',
                    explanation: 'Sine equals 1 at \\( \\dfrac{\\pi}{2} \\), the top of the unit circle.'
                },
                {
                    stepNumber: 6,
                    description: 'List solutions in order.',
                    workingLatex: 'x = \\frac{\\pi}{6}, \\, \\frac{\\pi}{2}, \\, \\frac{5\\pi}{6}',
                    explanation: 'Three solutions in \\( [0, 2\\pi] \\). The diagram shows the sine curve crossing \\( y = \\tfrac{1}{2} \\) twice and touching \\( y = 1 \\) once.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -0.2, xMax: 6.5, yMin: -1.35, yMax: 1.35,
                        xTicks: [Math.PI / 6, Math.PI / 2, 5 * Math.PI / 6, Math.PI, 3 * Math.PI / 2, 2 * Math.PI],
                        xTickLabels: ['\\tfrac{\\pi}{6}', '\\tfrac{\\pi}{2}', '\\tfrac{5\\pi}{6}', '\\pi', '\\tfrac{3\\pi}{2}', '2\\pi'],
                        yTicks: [-1, 1],
                        xLabel: 'x (radians)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.sin(x), 0, 2 * Math.PI, 180), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [0.2, 1.15] },
                        ],
                        lines: [
                            { from: [0, 0.5], to: [2 * Math.PI, 0.5], color: '#16a34a', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [5.4, 0.62] },
                            { from: [0, 1], to: [2 * Math.PI, 1], color: '#16a34a', dashed: true, label: 'y = 1', labelAt: [5.6, 1.1] },
                        ],
                        points: [
                            { at: [Math.PI / 6, 0.5], label: '\\tfrac{\\pi}{6}', labelAnchor: 'nw', r: 4 },
                            { at: [Math.PI / 2, 1], label: '\\tfrac{\\pi}{2}', labelAnchor: 'n', r: 4 },
                            { at: [5 * Math.PI / 6, 0.5], label: '\\tfrac{5\\pi}{6}', labelAnchor: 'ne', r: 4 },
                        ],
                    },
                }
            ],
            finalAnswer: '\\( x = \\dfrac{\\pi}{6}, \\, \\dfrac{\\pi}{2}, \\, \\dfrac{5\\pi}{6} \\)'
        }
    },
    {
        id: 't2-063',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 63',
        difficulty: 'Foundation',
        questionText: 'Simplify \\( \\dfrac{1 + \\tan^2 x}{1 + \\cot^2 x} \\) where \\( \\cot x = \\dfrac{1}{\\tan x} \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\tan^2 x \\) and \\( \\cot^2 x \\) in terms of \\( \\sin \\) and \\( \\cos \\).',
                    workingLatex: 'Numerator: 1 + \\frac{\\sin^2 x}{\\cos^2 x}; \\quad Denominator: 1 + \\frac{\\cos^2 x}{\\sin^2 x}',
                    explanation: '\\( \\tan x = \\dfrac{\\sin x}{\\cos x} \\) and \\( \\cot x = \\dfrac{\\cos x}{\\sin x} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Combine each term over its denominator.',
                    workingLatex: 'Numerator: \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x}; \\quad Denominator: \\frac{\\sin^2 x + \\cos^2 x}{\\sin^2 x}',
                    explanation: 'Write 1 as \\( \\dfrac{\\cos^2 x}{\\cos^2 x} \\) for the numerator and \\( \\dfrac{\\sin^2 x}{\\sin^2 x} \\) for the denominator.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the Pythagorean identity to both.',
                    workingLatex: 'Numerator: \\frac{1}{\\cos^2 x}; \\quad Denominator: \\frac{1}{\\sin^2 x}',
                    explanation: 'Both inner sums collapse to 1.'
                },
                {
                    stepNumber: 4,
                    description: 'Divide the two fractions.',
                    workingLatex: '\\frac{\\frac{1}{\\cos^2 x}}{\\frac{1}{\\sin^2 x}} = \\frac{1}{\\cos^2 x} \\times \\frac{\\sin^2 x}{1} = \\frac{\\sin^2 x}{\\cos^2 x}',
                    explanation: 'Dividing by \\( \\dfrac{1}{\\sin^2 x} \\) is multiplying by \\( \\sin^2 x \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the quotient identity.',
                    workingLatex: '= \\tan^2 x',
                    explanation: '\\( \\dfrac{\\sin^2 x}{\\cos^2 x} = \\tan^2 x \\).'
                }
            ],
            finalAnswer: '\\( \\tan^2 x \\)'
        }
    },
    {
        id: 't2-064',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 64',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\cos 2x = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( u = 2x \\) and adjust the interval.',
                    workingLatex: '\\cos u = 0, \\quad 0^\\circ \\leq u \\leq 720^\\circ',
                    explanation: 'Doubling \\( x \\) doubles the interval, so we need to find all solutions of \\( \\cos u = 0 \\) in \\( [0^\\circ, 720^\\circ] \\) to capture every \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( \\cos u = 0 \\) in the doubled range.',
                    workingLatex: 'u = 90^\\circ, \\, 270^\\circ, \\, 450^\\circ, \\, 630^\\circ',
                    explanation: 'Cosine equals zero every \\( 180^\\circ \\) starting from \\( 90^\\circ \\): \\( 90^\\circ, 90^\\circ + 180^\\circ, \\ldots \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Convert back to \\( x \\) by dividing by 2.',
                    workingLatex: 'x = 45^\\circ, \\, 135^\\circ, \\, 225^\\circ, \\, 315^\\circ',
                    explanation: 'Since \\( u = 2x \\), \\( x = u/2 \\). Each \\( u \\)-solution gives one \\( x \\)-solution in the original interval. The diagram plots \\( y = \\cos 2x \\), which completes two full periods over \\( [0^\\circ, 360^\\circ] \\) and crosses zero four times.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -10, xMax: 380, yMin: -1.35, yMax: 1.35,
                        xTicks: [45, 135, 180, 225, 315, 360],
                        yTicks: [-1, 1],
                        xLabel: 'x',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.cos(2 * x * Math.PI / 180), 0, 360, 240), color: '#1d4ed8', label: 'y = \\cos 2x', labelAt: [10, 1.15] },
                        ],
                        lines: [
                            { from: [0, 0], to: [360, 0], color: '#16a34a', dashed: true, label: 'y = 0', labelAt: [325, 0.15] },
                        ],
                        points: [
                            { at: [45, 0], label: '45^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [135, 0], label: '135^\\circ', labelAnchor: 'ne', r: 4 },
                            { at: [225, 0], label: '225^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [315, 0], label: '315^\\circ', labelAnchor: 'ne', r: 4 },
                        ],
                    },
                }
            ],
            finalAnswer: '\\( x = 45^\\circ, \\, 135^\\circ, \\, 225^\\circ, \\, 315^\\circ \\)'
        }
    },
    {
        id: 't2-065',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 65',
        difficulty: 'Foundation',
        questionText: 'Prove that \\( \\dfrac{1 - \\cos x}{\\sin x} = \\dfrac{\\sin x}{1 + \\cos x} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the LHS and multiply top and bottom by \\( 1 + \\cos x \\).',
                    workingLatex: '\\text{LHS} = \\frac{1 - \\cos x}{\\sin x} \\times \\frac{1 + \\cos x}{1 + \\cos x}',
                    explanation: 'Multiplying top and bottom by the same expression does not change the value. We choose \\( 1 + \\cos x \\) so the numerator becomes a difference of two squares.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the numerator using difference of two squares.',
                    workingLatex: '= \\frac{(1 - \\cos x)(1 + \\cos x)}{\\sin x(1 + \\cos x)} = \\frac{1 - \\cos^2 x}{\\sin x(1 + \\cos x)}',
                    explanation: '\\( (1 - \\cos x)(1 + \\cos x) = 1 - \\cos^2 x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= \\frac{\\sin^2 x}{\\sin x(1 + \\cos x)}',
                    explanation: '\\( 1 - \\cos^2 x = \\sin^2 x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Cancel a factor of \\( \\sin x \\).',
                    workingLatex: '= \\frac{\\sin x}{1 + \\cos x} = \\text{RHS}',
                    explanation: 'One \\( \\sin x \\) in the numerator cancels with the \\( \\sin x \\) in the denominator. Valid wherever \\( \\sin x \\neq 0 \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{1 - \\cos x}{\\sin x} \\equiv \\dfrac{\\sin x}{1 + \\cos x} \\) (proven)'
        }
    },
    {
        id: 't2-066',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 66',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 4\\sin^2 x - 3 = 0 \\) for \\( 0 \\leq x \\leq 2\\pi \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Isolate \\( \\sin^2 x \\).',
                    workingLatex: '4\\sin^2 x = 3 \\implies \\sin^2 x = \\frac{3}{4}',
                    explanation: 'Add 3 to both sides and divide by 4.'
                },
                {
                    stepNumber: 2,
                    description: 'Take both square roots.',
                    workingLatex: '\\sin x = \\pm\\frac{\\sqrt{3}}{2}',
                    explanation: 'Keep both signs because \\( \\sin x \\) can be positive or negative in the interval.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve \\( \\sin x = \\dfrac{\\sqrt{3}}{2} \\) in radians.',
                    workingLatex: 'x = \\frac{\\pi}{3}, \\, \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}',
                    explanation: 'Principal value \\( \\dfrac{\\pi}{3} \\); second-quadrant value \\( \\pi - \\dfrac{\\pi}{3} = \\dfrac{2\\pi}{3} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( \\sin x = -\\dfrac{\\sqrt{3}}{2} \\).',
                    workingLatex: 'x = \\pi + \\frac{\\pi}{3} = \\frac{4\\pi}{3}, \\quad 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}',
                    explanation: 'Sine is negative in quadrants III and IV.'
                },
                {
                    stepNumber: 5,
                    description: 'List all solutions.',
                    workingLatex: 'x = \\frac{\\pi}{3}, \\, \\frac{2\\pi}{3}, \\, \\frac{4\\pi}{3}, \\, \\frac{5\\pi}{3}',
                    explanation: 'Four solutions in \\( [0, 2\\pi] \\). The diagram shows the sine curve cutting \\( y = \\pm\\tfrac{\\sqrt{3}}{2} \\) at these four points.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -0.2, xMax: 6.5, yMin: -1.35, yMax: 1.35,
                        xTicks: [Math.PI / 3, 2 * Math.PI / 3, Math.PI, 4 * Math.PI / 3, 5 * Math.PI / 3, 2 * Math.PI],
                        xTickLabels: ['\\tfrac{\\pi}{3}', '\\tfrac{2\\pi}{3}', '\\pi', '\\tfrac{4\\pi}{3}', '\\tfrac{5\\pi}{3}', '2\\pi'],
                        yTicks: [-1, 1],
                        xLabel: 'x (radians)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.sin(x), 0, 2 * Math.PI, 180), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [0.2, 1.15] },
                        ],
                        lines: [
                            { from: [0, Math.sqrt(3) / 2], to: [2 * Math.PI, Math.sqrt(3) / 2], color: '#16a34a', dashed: true, label: 'y = \\tfrac{\\sqrt{3}}{2}', labelAt: [5.2, 1.0] },
                            { from: [0, -Math.sqrt(3) / 2], to: [2 * Math.PI, -Math.sqrt(3) / 2], color: '#dc2626', dashed: true, label: 'y = -\\tfrac{\\sqrt{3}}{2}', labelAt: [5.2, -0.7] },
                        ],
                        points: [
                            { at: [Math.PI / 3, Math.sqrt(3) / 2], label: '\\tfrac{\\pi}{3}', labelAnchor: 'nw', r: 4 },
                            { at: [2 * Math.PI / 3, Math.sqrt(3) / 2], label: '\\tfrac{2\\pi}{3}', labelAnchor: 'ne', r: 4 },
                            { at: [4 * Math.PI / 3, -Math.sqrt(3) / 2], label: '\\tfrac{4\\pi}{3}', labelAnchor: 'sw', r: 4 },
                            { at: [5 * Math.PI / 3, -Math.sqrt(3) / 2], label: '\\tfrac{5\\pi}{3}', labelAnchor: 'se', r: 4 },
                        ],
                    },
                }
            ],
            finalAnswer: '\\( x = \\dfrac{\\pi}{3}, \\, \\dfrac{2\\pi}{3}, \\, \\dfrac{4\\pi}{3}, \\, \\dfrac{5\\pi}{3} \\)'
        }
    },
    {
        id: 't2-067',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 67',
        difficulty: 'Foundation',
        questionText: 'Show that \\( \\cos^2 x - \\sin^2 x = 2\\cos^2 x - 1 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\cos^2 x - \\sin^2 x',
                    explanation: 'The RHS uses only \\( \\cos^2 x \\), so we eliminate \\( \\sin^2 x \\) using the Pythagorean identity.'
                },
                {
                    stepNumber: 2,
                    description: 'Replace \\( \\sin^2 x \\) with \\( 1 - \\cos^2 x \\).',
                    workingLatex: '= \\cos^2 x - (1 - \\cos^2 x)',
                    explanation: 'Keep the bracket so the minus sign is distributed correctly.'
                },
                {
                    stepNumber: 3,
                    description: 'Distribute the minus sign.',
                    workingLatex: '= \\cos^2 x - 1 + \\cos^2 x',
                    explanation: '\\( -(1) = -1 \\) and \\( -(-\\cos^2 x) = +\\cos^2 x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Collect like terms.',
                    workingLatex: '= 2\\cos^2 x - 1 = \\text{RHS}',
                    explanation: 'The two \\( \\cos^2 x \\) terms add to \\( 2\\cos^2 x \\).'
                }
            ],
            finalAnswer: '\\( \\cos^2 x - \\sin^2 x \\equiv 2\\cos^2 x - 1 \\) (shown)'
        }
    },
    {
        id: 't2-068',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 68',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin x + \\cos x = 1 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Square both sides.',
                    workingLatex: '(\\sin x + \\cos x)^2 = 1^2',
                    explanation: 'Squaring may introduce extraneous solutions, so we will need to check each candidate at the end.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the left-hand side.',
                    workingLatex: '\\sin^2 x + 2\\sin x \\cos x + \\cos^2 x = 1',
                    explanation: 'Using \\( (a+b)^2 = a^2 + 2ab + b^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '1 + 2\\sin x \\cos x = 1',
                    explanation: '\\( \\sin^2 x + \\cos^2 x = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify.',
                    workingLatex: '2\\sin x \\cos x = 0 \\implies \\sin x \\cos x = 0',
                    explanation: 'Subtract 1 from both sides, then divide by 2.'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\sin x = 0 \\quad \\text{or} \\quad \\cos x = 0',
                    explanation: 'A product is zero only if at least one factor is zero.'
                },
                {
                    stepNumber: 6,
                    description: 'List all candidates in \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: 'x = 0^\\circ, \\, 90^\\circ, \\, 180^\\circ, \\, 270^\\circ, \\, 360^\\circ',
                    explanation: 'Sine is zero at \\( 0^\\circ, 180^\\circ, 360^\\circ \\); cosine is zero at \\( 90^\\circ, 270^\\circ \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Check each candidate in the original equation.',
                    workingLatex: '0^\\circ: 0+1=1 \\, \\checkmark; \\quad 90^\\circ: 1+0=1 \\, \\checkmark; \\quad 180^\\circ: 0-1=-1 \\, \\times; \\quad 270^\\circ: -1+0=-1 \\, \\times; \\quad 360^\\circ: 0+1=1 \\, \\checkmark',
                    explanation: 'Squaring introduced two false candidates at \\( 180^\\circ \\) and \\( 270^\\circ \\). Reject these.'
                },
                {
                    stepNumber: 8,
                    description: 'State the valid solutions.',
                    workingLatex: 'x = 0^\\circ, \\, 90^\\circ, \\, 360^\\circ',
                    explanation: 'These three angles satisfy the original equation in the given interval. The diagram plots \\( y = \\sin x + \\cos x \\) against the horizontal line \\( y = 1 \\); the curve touches the line exactly at the three valid solutions.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -10, xMax: 380, yMin: -1.6, yMax: 1.6,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 1],
                        xLabel: 'x',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.sin(x * Math.PI / 180) + Math.cos(x * Math.PI / 180), 0, 360, 240), color: '#1d4ed8', label: 'y = \\sin x + \\cos x', labelAt: [10, 1.45] },
                        ],
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#16a34a', dashed: true, label: 'y = 1', labelAt: [325, 1.18] },
                        ],
                        points: [
                            { at: [0, 1], label: '0^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [90, 1], label: '90^\\circ', labelAnchor: 's', r: 4 },
                            { at: [360, 1], label: '360^\\circ', labelAnchor: 'se', r: 4 },
                        ],
                    },
                }
            ],
            finalAnswer: '\\( x = 0^\\circ, \\, 90^\\circ, \\, 360^\\circ \\)'
        }
    },
    {
        id: 't2-069',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 69',
        difficulty: 'Foundation',
        questionText: 'Prove that \\( \\dfrac{\\cos x}{1 - \\tan x} + \\dfrac{\\sin x}{1 - \\cot x} = \\sin x + \\cos x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the LHS and replace \\( \\tan x \\), \\( \\cot x \\).',
                    workingLatex: '\\text{LHS} = \\frac{\\cos x}{1 - \\frac{\\sin x}{\\cos x}} + \\frac{\\sin x}{1 - \\frac{\\cos x}{\\sin x}}',
                    explanation: 'Use \\( \\tan x = \\dfrac{\\sin x}{\\cos x} \\) and \\( \\cot x = \\dfrac{\\cos x}{\\sin x} \\) to rewrite in pure \\( \\sin \\) and \\( \\cos \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Combine each denominator over a single fraction.',
                    workingLatex: '= \\frac{\\cos x}{\\frac{\\cos x - \\sin x}{\\cos x}} + \\frac{\\sin x}{\\frac{\\sin x - \\cos x}{\\sin x}}',
                    explanation: 'Write 1 as \\( \\dfrac{\\cos x}{\\cos x} \\) (resp. \\( \\dfrac{\\sin x}{\\sin x} \\)) before subtracting.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify each compound fraction.',
                    workingLatex: '= \\cos x \\cdot \\frac{\\cos x}{\\cos x - \\sin x} + \\sin x \\cdot \\frac{\\sin x}{\\sin x - \\cos x} = \\frac{\\cos^2 x}{\\cos x - \\sin x} + \\frac{\\sin^2 x}{\\sin x - \\cos x}',
                    explanation: 'Dividing by a fraction is the same as multiplying by its reciprocal.'
                },
                {
                    stepNumber: 4,
                    description: 'Note that \\( \\sin x - \\cos x = -(\\cos x - \\sin x) \\).',
                    workingLatex: '= \\frac{\\cos^2 x}{\\cos x - \\sin x} - \\frac{\\sin^2 x}{\\cos x - \\sin x}',
                    explanation: 'Flip the sign of the second denominator (and the whole fraction) to give a common denominator with the first.'
                },
                {
                    stepNumber: 5,
                    description: 'Combine over the common denominator.',
                    workingLatex: '= \\frac{\\cos^2 x - \\sin^2 x}{\\cos x - \\sin x}',
                    explanation: 'Same denominator, so subtract the numerators.'
                },
                {
                    stepNumber: 6,
                    description: 'Factor the numerator using difference of two squares.',
                    workingLatex: '= \\frac{(\\cos x - \\sin x)(\\cos x + \\sin x)}{\\cos x - \\sin x}',
                    explanation: '\\( a^2 - b^2 = (a-b)(a+b) \\) with \\( a = \\cos x \\), \\( b = \\sin x \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Cancel the common factor.',
                    workingLatex: '= \\cos x + \\sin x = \\sin x + \\cos x = \\text{RHS}',
                    explanation: 'Cancel \\( \\cos x - \\sin x \\) (valid where it is non-zero). Addition is commutative, so the order can be reversed to match the RHS.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\cos x}{1 - \\tan x} + \\dfrac{\\sin x}{1 - \\cot x} \\equiv \\sin x + \\cos x \\) (proven)'
        }
    },
    {
        id: 't2-070',
        topicRef: 't2',
        topicTitle: 'Trigonometric Identities 70',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 5\\sin^2 x + 3\\cos x - 3 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\sin^2 x \\) using the Pythagorean identity.',
                    workingLatex: '5(1 - \\cos^2 x) + 3\\cos x - 3 = 0',
                    explanation: 'Use \\( \\sin^2 x = 1 - \\cos^2 x \\) so the equation is in \\( \\cos x \\) alone.'
                },
                {
                    stepNumber: 2,
                    description: 'Distribute and simplify.',
                    workingLatex: '5 - 5\\cos^2 x + 3\\cos x - 3 = 0 \\implies -5\\cos^2 x + 3\\cos x + 2 = 0',
                    explanation: 'Collect constants: \\( 5 - 3 = 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply through by \\( -1 \\) for a positive leading coefficient.',
                    workingLatex: '5\\cos^2 x - 3\\cos x - 2 = 0',
                    explanation: 'Easier to factorise with a positive leading coefficient.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise.',
                    workingLatex: '(5\\cos x + 2)(\\cos x - 1) = 0',
                    explanation: 'Check by expanding: \\( 5\\cos^2 x - 5\\cos x + 2\\cos x - 2 = 5\\cos^2 x - 3\\cos x - 2 \\). \\checkmark'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\cos x = -\\frac{2}{5} \\quad \\text{or} \\quad \\cos x = 1',
                    explanation: 'Set each factor to zero and solve.'
                },
                {
                    stepNumber: 6,
                    description: 'Solve \\( \\cos x = 1 \\).',
                    workingLatex: 'x = 0^\\circ, \\, 360^\\circ',
                    explanation: 'Cosine equals 1 at the endpoints of the interval.'
                },
                {
                    stepNumber: 7,
                    description: 'Solve \\( \\cos x = -\\dfrac{2}{5} \\).',
                    workingLatex: 'x_0 = \\cos^{-1}\\left(\\frac{2}{5}\\right) \\approx 66.42^\\circ',
                    explanation: 'Calculator value of the reference angle, since \\( \\frac{2}{5} \\) is not a standard exact value.'
                },
                {
                    stepNumber: 8,
                    description: 'Find both negative-cos solutions.',
                    workingLatex: 'x = 180^\\circ - 66.42^\\circ \\approx 113.6^\\circ, \\quad 180^\\circ + 66.42^\\circ \\approx 246.4^\\circ',
                    explanation: 'Cosine is negative in quadrants II and III: \\( 180^\\circ \\pm \\) reference angle.'
                },
                {
                    stepNumber: 9,
                    description: 'List all solutions in order.',
                    workingLatex: 'x = 0^\\circ, \\, 113.6^\\circ, \\, 246.4^\\circ, \\, 360^\\circ',
                    explanation: 'Four solutions in \\( [0^\\circ, 360^\\circ] \\), to 1 d.p. where non-exact. The diagram shows the cosine curve cutting \\( y = 1 \\) at the endpoints and \\( y = -\\tfrac{2}{5} \\) at the two interior points.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -10, xMax: 380, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 113.6, 180, 246.4, 360],
                        yTicks: [-1, 1],
                        xLabel: 'x',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.cos(x * Math.PI / 180), 0, 360, 180), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [10, 1.15] },
                        ],
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#16a34a', dashed: true, label: 'y = 1', labelAt: [325, 1.1] },
                            { from: [0, -2 / 5], to: [360, -2 / 5], color: '#dc2626', dashed: true, label: 'y = -\\tfrac{2}{5}', labelAt: [305, -0.55] },
                        ],
                        points: [
                            { at: [0, 1], label: '0^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [113.6, -2 / 5], label: '113.6^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [246.4, -2 / 5], label: '246.4^\\circ', labelAnchor: 'se', r: 4 },
                            { at: [360, 1], label: '360^\\circ', labelAnchor: 'se', r: 4 },
                        ],
                    },
                }
            ],
            finalAnswer: '\\( x = 0^\\circ, \\, 113.6^\\circ, \\, 246.4^\\circ, \\, 360^\\circ \\)'
        }
    },
];
