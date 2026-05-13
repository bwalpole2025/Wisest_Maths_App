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
                    description: 'State the Pythagorean identity.',
                    workingLatex: '\\sin^2\\theta + \\cos^2\\theta = 1',
                    explanation: 'This is the first of the two fundamental trigonometric identities and is true for every value of \\( \\theta \\). We will rearrange it to isolate \\( \\sin^2\\theta \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( \\cos^2\\theta \\) from both sides.',
                    workingLatex: '\\sin^2\\theta + \\cos^2\\theta - \\cos^2\\theta = 1 - \\cos^2\\theta',
                    explanation: 'To isolate \\( \\sin^2\\theta \\) on the left, we remove \\( \\cos^2\\theta \\) from both sides. Whatever we do to one side of an equation we must do to the other to preserve the equality.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the left-hand side.',
                    workingLatex: '\\sin^2\\theta = 1 - \\cos^2\\theta',
                    explanation: 'The \\( +\\cos^2\\theta \\) and \\( -\\cos^2\\theta \\) on the left cancel, leaving just \\( \\sin^2\\theta \\). This is the required rearrangement, written the other way round as \\( 1 - \\cos^2\\theta = \\sin^2\\theta \\).'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\tan\\theta\\cos\\theta',
                    explanation: 'When proving an identity \\( A \\equiv B \\) we usually start at one side (here the LHS) and manipulate it until it matches the other side.'
                },
                {
                    stepNumber: 2,
                    description: 'Replace \\( \\tan\\theta \\) using its definition.',
                    workingLatex: '= \\frac{\\sin\\theta}{\\cos\\theta} \\times \\cos\\theta',
                    explanation: 'The quotient identity \\( \\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta} \\) lets us write everything in terms of \\( \\sin\\theta \\) and \\( \\cos\\theta \\). This often unlocks cancellation.'
                },
                {
                    stepNumber: 3,
                    description: 'Write as a single fraction.',
                    workingLatex: '= \\frac{\\sin\\theta \\cdot \\cos\\theta}{\\cos\\theta}',
                    explanation: 'Multiplying a fraction by something is the same as putting that something into the numerator. This sets us up to cancel a common factor.'
                },
                {
                    stepNumber: 4,
                    description: 'Cancel the common factor of \\( \\cos\\theta \\).',
                    workingLatex: '= \\sin\\theta = \\text{RHS}',
                    explanation: 'The \\( \\cos\\theta \\) in the numerator cancels with the \\( \\cos\\theta \\) in the denominator (valid wherever \\( \\cos\\theta \\neq 0 \\)). We are left with \\( \\sin\\theta \\), which is the right-hand side, so the identity is proved.'
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
                    description: 'State the Pythagorean identity.',
                    workingLatex: '\\sin^2\\theta + \\cos^2\\theta = 1',
                    explanation: 'This identity links \\( \\sin\\theta \\) and \\( \\cos\\theta \\), so it lets us find one from the other. It holds for every angle \\( \\theta \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute the given value of \\( \\sin\\theta \\).',
                    workingLatex: '\\left(\\frac{3}{5}\\right)^2 + \\cos^2\\theta = 1',
                    explanation: 'Replacing \\( \\sin\\theta \\) with \\( \\frac{3}{5} \\) gives a single equation in \\( \\cos\\theta \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Square the fraction.',
                    workingLatex: '\\frac{9}{25} + \\cos^2\\theta = 1',
                    explanation: '\\( \\left(\\frac{3}{5}\\right)^2 = \\frac{3^2}{5^2} = \\frac{9}{25} \\). Square the numerator and the denominator separately.'
                },
                {
                    stepNumber: 4,
                    description: 'Isolate \\( \\cos^2\\theta \\).',
                    workingLatex: '\\cos^2\\theta = 1 - \\frac{9}{25}',
                    explanation: 'Subtract \\( \\frac{9}{25} \\) from both sides to get \\( \\cos^2\\theta \\) on its own.'
                },
                {
                    stepNumber: 5,
                    description: 'Simplify the right-hand side.',
                    workingLatex: '\\cos^2\\theta = \\frac{25}{25} - \\frac{9}{25} = \\frac{16}{25}',
                    explanation: 'Write \\( 1 \\) as \\( \\frac{25}{25} \\) so the denominators match, then subtract the numerators.'
                },
                {
                    stepNumber: 6,
                    description: 'Take the positive square root.',
                    workingLatex: '\\cos\\theta = \\sqrt{\\frac{16}{25}} = \\frac{4}{5}',
                    explanation: 'Square-rooting both sides gives \\( \\cos\\theta = \\pm\\frac{4}{5} \\). Because \\( \\theta \\) is acute (in the first quadrant), \\( \\cos\\theta \\) is positive, so we take the \\( + \\) root.'
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
                    description: 'Write down the Pythagorean identity.',
                    workingLatex: '\\sin^2\\theta + \\cos^2\\theta = 1',
                    explanation: 'This is the tool for converting between \\( \\sin\\theta \\) and \\( \\cos\\theta \\) when we know one of them.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute the known value of \\( \\cos\\theta \\).',
                    workingLatex: '\\sin^2\\theta + \\left(\\frac{5}{13}\\right)^2 = 1',
                    explanation: 'Plug in \\( \\cos\\theta = \\frac{5}{13} \\) so that the only unknown is \\( \\sin\\theta \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Square the fraction.',
                    workingLatex: '\\sin^2\\theta + \\frac{25}{169} = 1',
                    explanation: '\\( \\left(\\frac{5}{13}\\right)^2 = \\frac{25}{169} \\): square numerator and denominator separately.'
                },
                {
                    stepNumber: 4,
                    description: 'Isolate \\( \\sin^2\\theta \\).',
                    workingLatex: '\\sin^2\\theta = 1 - \\frac{25}{169} = \\frac{169 - 25}{169} = \\frac{144}{169}',
                    explanation: 'Subtract \\( \\frac{25}{169} \\) from both sides; write \\( 1 \\) as \\( \\frac{169}{169} \\) so the fractions share a denominator.'
                },
                {
                    stepNumber: 5,
                    description: 'Take the positive square root.',
                    workingLatex: '\\sin\\theta = \\sqrt{\\frac{144}{169}} = \\frac{12}{13}',
                    explanation: '\\( \\sqrt{144} = 12 \\) and \\( \\sqrt{169} = 13 \\). The negative root is rejected because \\( \\theta \\) is acute, so \\( \\sin\\theta > 0 \\).'
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
                    description: 'Square the given value of \\( \\sin x \\).',
                    workingLatex: '\\sin^2 x = \\left(\\frac{\\sqrt{5}}{3}\\right)^2 = \\frac{(\\sqrt{5})^2}{3^2} = \\frac{5}{9}',
                    explanation: 'When squaring a fraction, square the numerator and the denominator. Squaring undoes the square root, so \\( (\\sqrt{5})^2 = 5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the Pythagorean identity.',
                    workingLatex: '\\frac{5}{9} + \\cos^2 x = 1',
                    explanation: 'Using \\( \\sin^2 x + \\cos^2 x = 1 \\) with the value found in step 1 leaves a single equation in \\( \\cos^2 x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Isolate \\( \\cos^2 x \\).',
                    workingLatex: '\\cos^2 x = 1 - \\frac{5}{9} = \\frac{9}{9} - \\frac{5}{9} = \\frac{4}{9}',
                    explanation: 'Write \\( 1 \\) as \\( \\frac{9}{9} \\) so the fractions share a denominator, then subtract.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the positive square root.',
                    workingLatex: '\\cos x = \\sqrt{\\frac{4}{9}} = \\frac{2}{3}',
                    explanation: '\\( \\sqrt{4} = 2 \\) and \\( \\sqrt{9} = 3 \\). We take the positive root because \\( x \\) is acute, which means \\( \\cos x > 0 \\).'
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
                    description: 'Square the value of \\( \\sin x \\).',
                    workingLatex: '\\sin^2 x = \\left(\\frac{1}{4}\\right)^2 = \\frac{1}{16}',
                    explanation: 'We need \\( \\sin^2 x \\) so we can use the Pythagorean identity to find \\( \\cos x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into \\( \\sin^2 x + \\cos^2 x = 1 \\).',
                    workingLatex: '\\frac{1}{16} + \\cos^2 x = 1',
                    explanation: 'Replacing \\( \\sin^2 x \\) with its numerical value leaves one unknown.'
                },
                {
                    stepNumber: 3,
                    description: 'Isolate \\( \\cos^2 x \\).',
                    workingLatex: '\\cos^2 x = 1 - \\frac{1}{16} = \\frac{16}{16} - \\frac{1}{16} = \\frac{15}{16}',
                    explanation: 'Subtract \\( \\frac{1}{16} \\) from both sides; write 1 as \\( \\frac{16}{16} \\) to share a denominator.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the positive square root.',
                    workingLatex: '\\cos x = \\sqrt{\\frac{15}{16}} = \\frac{\\sqrt{15}}{4}',
                    explanation: '\\( \\sqrt{16} = 4 \\) and \\( \\sqrt{15} \\) is left as a surd because 15 has no square factor. Positive root since \\( x \\) is acute.'
                },
                {
                    stepNumber: 5,
                    description: 'Use the quotient identity \\( \\tan x = \\dfrac{\\sin x}{\\cos x} \\).',
                    workingLatex: '\\tan x = \\frac{\\frac{1}{4}}{\\frac{\\sqrt{15}}{4}}',
                    explanation: 'This is the definition of \\( \\tan x \\). Substitute the values of \\( \\sin x \\) and \\( \\cos x \\) we now have.'
                },
                {
                    stepNumber: 6,
                    description: 'Simplify the compound fraction.',
                    workingLatex: '\\tan x = \\frac{1}{4} \\times \\frac{4}{\\sqrt{15}} = \\frac{1}{\\sqrt{15}}',
                    explanation: 'Dividing by a fraction is the same as multiplying by its reciprocal. The two factors of 4 cancel.'
                },
                {
                    stepNumber: 7,
                    description: 'Rationalise the denominator.',
                    workingLatex: '\\tan x = \\frac{1}{\\sqrt{15}} \\times \\frac{\\sqrt{15}}{\\sqrt{15}} = \\frac{\\sqrt{15}}{15}',
                    explanation: 'A-Level convention is to remove surds from the denominator. Multiplying top and bottom by \\( \\sqrt{15} \\) does not change the value but tidies the form.'
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
                    description: 'Square the value of \\( \\cos x \\).',
                    workingLatex: '\\cos^2 x = \\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}',
                    explanation: 'We need \\( \\cos^2 x \\) to feed into the Pythagorean identity.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into \\( \\sin^2 x + \\cos^2 x = 1 \\).',
                    workingLatex: '\\sin^2 x + \\frac{4}{9} = 1',
                    explanation: 'Plug in the value from step 1 and rearrange for the unknown \\( \\sin^2 x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Isolate \\( \\sin^2 x \\).',
                    workingLatex: '\\sin^2 x = 1 - \\frac{4}{9} = \\frac{9}{9} - \\frac{4}{9} = \\frac{5}{9}',
                    explanation: 'Subtract \\( \\frac{4}{9} \\) from both sides.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the positive square root.',
                    workingLatex: '\\sin x = \\sqrt{\\frac{5}{9}} = \\frac{\\sqrt{5}}{3}',
                    explanation: '\\( x \\) is acute so \\( \\sin x > 0 \\). \\( \\sqrt{9} = 3 \\); \\( \\sqrt{5} \\) stays as a surd.'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the quotient identity for \\( \\tan x \\).',
                    workingLatex: '\\tan x = \\frac{\\sin x}{\\cos x} = \\frac{\\frac{\\sqrt{5}}{3}}{\\frac{2}{3}}',
                    explanation: 'Use the definition of \\( \\tan x \\) and substitute the values from steps 4 and the question.'
                },
                {
                    stepNumber: 6,
                    description: 'Simplify the compound fraction.',
                    workingLatex: '\\tan x = \\frac{\\sqrt{5}}{3} \\times \\frac{3}{2} = \\frac{\\sqrt{5}}{2}',
                    explanation: 'Dividing by \\( \\frac{2}{3} \\) is the same as multiplying by \\( \\frac{3}{2} \\). The 3 in numerator and denominator cancels.'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{\\sin^2\\theta}{1 - \\sin^2\\theta}',
                    explanation: 'We will simplify the LHS by rewriting the denominator using the Pythagorean identity.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange the Pythagorean identity.',
                    workingLatex: '\\sin^2\\theta + \\cos^2\\theta = 1 \\implies 1 - \\sin^2\\theta = \\cos^2\\theta',
                    explanation: 'Subtracting \\( \\sin^2\\theta \\) from both sides of the Pythagorean identity converts the denominator into a single function.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute into the LHS.',
                    workingLatex: '= \\frac{\\sin^2\\theta}{\\cos^2\\theta}',
                    explanation: 'Replace \\( 1 - \\sin^2\\theta \\) with \\( \\cos^2\\theta \\). Now we have \\( \\sin^2 \\) over \\( \\cos^2 \\), which is the shape of \\( \\tan^2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Rewrite as a single squared fraction.',
                    workingLatex: '= \\left(\\frac{\\sin\\theta}{\\cos\\theta}\\right)^2',
                    explanation: 'Since \\( \\frac{a^2}{b^2} = \\left(\\frac{a}{b}\\right)^2 \\), we can pull the square out across the whole fraction.'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the quotient identity.',
                    workingLatex: '= \\tan^2\\theta = \\text{RHS}',
                    explanation: 'By definition \\( \\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta} \\), so its square is \\( \\tan^2\\theta \\). LHS = RHS, so the identity is proved.'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = (1 - \\sin x)(1 + \\sin x)',
                    explanation: 'The brackets have the form \\( (a-b)(a+b) \\), which is a difference of two squares.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand using difference of two squares.',
                    workingLatex: '= 1^2 - (\\sin x)^2 = 1 - \\sin^2 x',
                    explanation: 'With \\( a=1 \\) and \\( b=\\sin x \\), the rule \\( (a-b)(a+b) = a^2 - b^2 \\) gives \\( 1 - \\sin^2 x \\). This avoids having to FOIL out four terms by hand.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= \\cos^2 x = \\text{RHS}',
                    explanation: 'Rearranging \\( \\sin^2 x + \\cos^2 x = 1 \\) gives \\( 1 - \\sin^2 x = \\cos^2 x \\), which is the required right-hand side.'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{1 - \\cos^2\\theta}{\\cos^2\\theta}',
                    explanation: 'We will rewrite the numerator using the Pythagorean identity so the whole fraction reduces to \\( \\tan^2\\theta \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange the Pythagorean identity.',
                    workingLatex: '\\sin^2\\theta + \\cos^2\\theta = 1 \\implies 1 - \\cos^2\\theta = \\sin^2\\theta',
                    explanation: 'Subtracting \\( \\cos^2\\theta \\) from both sides isolates \\( \\sin^2\\theta \\) on the right.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute into the numerator.',
                    workingLatex: '= \\frac{\\sin^2\\theta}{\\cos^2\\theta}',
                    explanation: 'Replacing the numerator now gives \\( \\sin^2 \\) over \\( \\cos^2 \\), which is the shape of \\( \\tan^2\\theta \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the quotient identity.',
                    workingLatex: '= \\left(\\frac{\\sin\\theta}{\\cos\\theta}\\right)^2 = \\tan^2\\theta = \\text{RHS}',
                    explanation: 'Since \\( \\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta} \\), squaring both sides gives \\( \\tan^2\\theta = \\dfrac{\\sin^2\\theta}{\\cos^2\\theta} \\). LHS equals RHS, so the identity is proved.'
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
                    workingLatex: '\\text{LHS} = \\sin^2 x + \\cos^2 x + \\tan^2 x',
                    explanation: 'Look for groups of terms inside the LHS that match a known identity. The first two terms are exactly the Pythagorean pair.'
                },
                {
                    stepNumber: 2,
                    description: 'Group the Pythagorean pair.',
                    workingLatex: '= (\\sin^2 x + \\cos^2 x) + \\tan^2 x',
                    explanation: 'Bracketing the first two terms makes it explicit that we are about to apply \\( \\sin^2 x + \\cos^2 x = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Replace \\( \\sin^2 x + \\cos^2 x \\) with 1.',
                    workingLatex: '= 1 + \\tan^2 x = \\text{RHS}',
                    explanation: 'Applying the Pythagorean identity collapses the first two terms to 1, leaving exactly the right-hand side.'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\cos^2\\theta - \\sin^2\\theta',
                    explanation: 'The RHS is in terms of \\( \\cos^2\\theta \\) only, so we plan to eliminate \\( \\sin^2\\theta \\) using the Pythagorean identity.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange the Pythagorean identity.',
                    workingLatex: '\\sin^2\\theta + \\cos^2\\theta = 1 \\implies \\sin^2\\theta = 1 - \\cos^2\\theta',
                    explanation: 'Subtract \\( \\cos^2\\theta \\) from both sides so we can substitute for \\( \\sin^2\\theta \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute into the LHS.',
                    workingLatex: '= \\cos^2\\theta - (1 - \\cos^2\\theta)',
                    explanation: 'Replace \\( \\sin^2\\theta \\). The brackets keep the \\( -\\sin^2\\theta \\) sign intact during the substitution.'
                },
                {
                    stepNumber: 4,
                    description: 'Distribute the minus sign.',
                    workingLatex: '= \\cos^2\\theta - 1 + \\cos^2\\theta',
                    explanation: 'A common slip is to drop the sign on the second term — the minus outside flips both terms inside the bracket.'
                },
                {
                    stepNumber: 5,
                    description: 'Collect like terms.',
                    workingLatex: '= 2\\cos^2\\theta - 1 = \\text{RHS}',
                    explanation: 'The two \\( \\cos^2\\theta \\) terms add to \\( 2\\cos^2\\theta \\). The result matches the right-hand side.'
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
        questionText: 'Show that \\( \\dfrac{1 - \\cos^2 x}{1 + \\cos x} \\equiv 1 - \\cos x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'difference of squares', 'simplify fraction'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{1 - \\cos^2 x}{1 + \\cos x}',
                    explanation: 'The numerator has the form \\( a^2 - b^2 \\), so we can factorise it using difference of two squares to expose a common factor with the denominator.'
                },
                {
                    stepNumber: 2,
                    description: 'Factor the numerator as a difference of two squares.',
                    workingLatex: '1 - \\cos^2 x = (1 - \\cos x)(1 + \\cos x)',
                    explanation: 'Using \\( a^2 - b^2 = (a-b)(a+b) \\) with \\( a = 1 \\) and \\( b = \\cos x \\). This deliberately mirrors the denominator so a factor will cancel.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute the factored numerator.',
                    workingLatex: '= \\frac{(1 - \\cos x)(1 + \\cos x)}{1 + \\cos x}',
                    explanation: 'The numerator and denominator share the factor \\( (1 + \\cos x) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Cancel the common factor.',
                    workingLatex: '= 1 - \\cos x = \\text{RHS}',
                    explanation: 'Cancellation is valid wherever \\( 1 + \\cos x \\neq 0 \\), i.e. \\( x \\neq 180^\\circ \\) (and equivalents). The result matches the right-hand side.'
                }
            ],
            finalAnswer: '\\( \\dfrac{1 - \\cos^2 x}{1 + \\cos x} \\equiv 1 - \\cos x \\) (shown)'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{1 - \\sin^2\\theta}{1 - \\sin\\theta}',
                    explanation: 'The numerator looks like \\( a^2 - b^2 \\), so factorising it should expose a factor that cancels with the denominator.'
                },
                {
                    stepNumber: 2,
                    description: 'Factor the numerator as a difference of two squares.',
                    workingLatex: '1 - \\sin^2\\theta = (1 - \\sin\\theta)(1 + \\sin\\theta)',
                    explanation: 'Apply \\( a^2 - b^2 = (a-b)(a+b) \\) with \\( a = 1 \\) and \\( b = \\sin\\theta \\). The factor \\( (1 - \\sin\\theta) \\) is now visible.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute into the fraction.',
                    workingLatex: '= \\frac{(1 - \\sin\\theta)(1 + \\sin\\theta)}{1 - \\sin\\theta}',
                    explanation: 'The numerator and denominator now share the factor \\( (1 - \\sin\\theta) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Cancel the common factor.',
                    workingLatex: '= 1 + \\sin\\theta = \\text{RHS}',
                    explanation: 'Cancelling \\( (1 - \\sin\\theta) \\) (valid where it is non-zero) leaves the right-hand side.'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = 3\\sin^2 x + 2\\cos^2 x',
                    explanation: 'The trick is to peel off a copy of \\( \\sin^2 x + \\cos^2 x \\) so that we can use the Pythagorean identity.'
                },
                {
                    stepNumber: 2,
                    description: 'Split \\( 3\\sin^2 x \\) as \\( 2\\sin^2 x + \\sin^2 x \\).',
                    workingLatex: '= 2\\sin^2 x + \\sin^2 x + 2\\cos^2 x',
                    explanation: 'Splitting the coefficient lets us match the \\( 2\\cos^2 x \\) term and form a pair we can factorise.'
                },
                {
                    stepNumber: 3,
                    description: 'Factor 2 out of the matching pair.',
                    workingLatex: '= 2(\\sin^2 x + \\cos^2 x) + \\sin^2 x',
                    explanation: 'Take 2 out of \\( 2\\sin^2 x + 2\\cos^2 x \\) to expose the Pythagorean identity inside the brackets.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= 2(1) + \\sin^2 x = 2 + \\sin^2 x = \\text{RHS}',
                    explanation: 'Replace \\( \\sin^2 x + \\cos^2 x \\) with 1. The remaining \\( \\sin^2 x \\) term is unchanged. This matches the right-hand side.'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = 5\\cos^2\\theta - 3\\sin^2\\theta',
                    explanation: 'The RHS contains only \\( \\cos^2\\theta \\), so we will eliminate \\( \\sin^2\\theta \\) using the Pythagorean identity.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange the Pythagorean identity.',
                    workingLatex: '\\sin^2\\theta = 1 - \\cos^2\\theta',
                    explanation: 'Subtracting \\( \\cos^2\\theta \\) from both sides of \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\) gives this form.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute into the LHS.',
                    workingLatex: '= 5\\cos^2\\theta - 3(1 - \\cos^2\\theta)',
                    explanation: 'Replace \\( \\sin^2\\theta \\). Keep the bracket so the \\( -3 \\) is distributed correctly in the next step.'
                },
                {
                    stepNumber: 4,
                    description: 'Distribute the \\( -3 \\).',
                    workingLatex: '= 5\\cos^2\\theta - 3 + 3\\cos^2\\theta',
                    explanation: '\\( -3 \\times 1 = -3 \\) and \\( -3 \\times (-\\cos^2\\theta) = +3\\cos^2\\theta \\). Watch the sign on the second product — two negatives make a positive.'
                },
                {
                    stepNumber: 5,
                    description: 'Collect like terms.',
                    workingLatex: '= 8\\cos^2\\theta - 3 = \\text{RHS}',
                    explanation: 'The \\( \\cos^2\\theta \\) terms add: \\( 5\\cos^2\\theta + 3\\cos^2\\theta = 8\\cos^2\\theta \\). The constant \\( -3 \\) is unchanged. This matches the right-hand side.'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = 4\\sin^2 x - 2\\cos^2 x',
                    explanation: 'The RHS uses only \\( \\sin^2 x \\), so we eliminate \\( \\cos^2 x \\) using the Pythagorean identity.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange the Pythagorean identity.',
                    workingLatex: '\\cos^2 x = 1 - \\sin^2 x',
                    explanation: 'Subtract \\( \\sin^2 x \\) from both sides of \\( \\sin^2 x + \\cos^2 x = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute into the LHS.',
                    workingLatex: '= 4\\sin^2 x - 2(1 - \\sin^2 x)',
                    explanation: 'Bracket the substituted expression so the \\( -2 \\) outside is distributed correctly in the next step.'
                },
                {
                    stepNumber: 4,
                    description: 'Distribute the \\( -2 \\).',
                    workingLatex: '= 4\\sin^2 x - 2 + 2\\sin^2 x',
                    explanation: '\\( -2 \\times 1 = -2 \\) and \\( -2 \\times (-\\sin^2 x) = +2\\sin^2 x \\). The double negative flips the second sign.'
                },
                {
                    stepNumber: 5,
                    description: 'Collect like terms.',
                    workingLatex: '= 6\\sin^2 x - 2 = \\text{RHS}',
                    explanation: '\\( 4\\sin^2 x + 2\\sin^2 x = 6\\sin^2 x \\). This is the right-hand side.'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = (\\sin x + \\cos x)^2',
                    explanation: 'Squaring a binomial gives three terms. We will expand and then recognise the Pythagorean pair.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the square.',
                    workingLatex: '= \\sin^2 x + 2\\sin x \\cos x + \\cos^2 x',
                    explanation: 'Using \\( (a+b)^2 = a^2 + 2ab + b^2 \\) with \\( a = \\sin x \\) and \\( b = \\cos x \\). The cross-term has coefficient 2.'
                },
                {
                    stepNumber: 3,
                    description: 'Group the Pythagorean pair.',
                    workingLatex: '= (\\sin^2 x + \\cos^2 x) + 2\\sin x \\cos x',
                    explanation: 'Re-ordering and bracketing makes the \\( \\sin^2 + \\cos^2 \\) pair visible.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= 1 + 2\\sin x \\cos x = \\text{RHS}',
                    explanation: 'Replace \\( \\sin^2 x + \\cos^2 x \\) with 1. The result is the right-hand side.'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = (\\sin\\theta - \\cos\\theta)^2',
                    explanation: 'A subtraction inside a square gives a minus sign on the cross-term when we expand.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the square.',
                    workingLatex: '= \\sin^2\\theta - 2\\sin\\theta\\cos\\theta + \\cos^2\\theta',
                    explanation: 'Using \\( (a-b)^2 = a^2 - 2ab + b^2 \\) with \\( a = \\sin\\theta \\) and \\( b = \\cos\\theta \\). Mind the minus on the middle term.'
                },
                {
                    stepNumber: 3,
                    description: 'Group the Pythagorean pair.',
                    workingLatex: '= (\\sin^2\\theta + \\cos^2\\theta) - 2\\sin\\theta\\cos\\theta',
                    explanation: 'Bracketing the \\( \\sin^2 + \\cos^2 \\) terms readies them for the Pythagorean identity.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= 1 - 2\\sin\\theta\\cos\\theta = \\text{RHS}',
                    explanation: 'Replace the bracket with 1. This matches the right-hand side.'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{\\sin^2\\theta + \\sin\\theta\\cos\\theta}{\\cos\\theta}',
                    explanation: 'Two terms in the numerator over a single denominator: we can split this into two separate fractions.'
                },
                {
                    stepNumber: 2,
                    description: 'Split into two fractions.',
                    workingLatex: '= \\frac{\\sin^2\\theta}{\\cos\\theta} + \\frac{\\sin\\theta\\cos\\theta}{\\cos\\theta}',
                    explanation: 'Using \\( \\dfrac{a+b}{c} = \\dfrac{a}{c} + \\dfrac{b}{c} \\). Each piece has the same denominator \\( \\cos\\theta \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Cancel \\( \\cos\\theta \\) in the second fraction.',
                    workingLatex: '= \\frac{\\sin^2\\theta}{\\cos\\theta} + \\sin\\theta',
                    explanation: 'The second fraction has \\( \\cos\\theta \\) on both top and bottom.'
                },
                {
                    stepNumber: 4,
                    description: 'Split the first fraction as \\( \\sin\\theta \\cdot \\dfrac{\\sin\\theta}{\\cos\\theta} \\).',
                    workingLatex: '= \\sin\\theta \\cdot \\frac{\\sin\\theta}{\\cos\\theta} + \\sin\\theta',
                    explanation: 'Writing \\( \\sin^2\\theta \\) as \\( \\sin\\theta \\cdot \\sin\\theta \\) pulls one factor of \\( \\sin\\theta \\) out front, leaving \\( \\dfrac{\\sin\\theta}{\\cos\\theta} \\) — the shape of \\( \\tan\\theta \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the quotient identity.',
                    workingLatex: '= \\sin\\theta\\tan\\theta + \\sin\\theta = \\text{RHS}',
                    explanation: '\\( \\dfrac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta \\), so the first term becomes \\( \\sin\\theta\\tan\\theta \\). This is the right-hand side.'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{\\tan x}{\\sin x}',
                    explanation: 'Rewriting \\( \\tan x \\) in terms of \\( \\sin x \\) and \\( \\cos x \\) will expose a cancellation.'
                },
                {
                    stepNumber: 2,
                    description: 'Replace \\( \\tan x \\) using the quotient identity.',
                    workingLatex: '= \\frac{\\frac{\\sin x}{\\cos x}}{\\sin x}',
                    explanation: 'Using \\( \\tan x = \\dfrac{\\sin x}{\\cos x} \\). The expression is now a fraction divided by \\( \\sin x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Rewrite division as multiplication by the reciprocal.',
                    workingLatex: '= \\frac{\\sin x}{\\cos x} \\times \\frac{1}{\\sin x}',
                    explanation: 'Dividing by \\( \\sin x \\) is the same as multiplying by \\( \\dfrac{1}{\\sin x} \\). This straightens out the compound fraction.'
                },
                {
                    stepNumber: 4,
                    description: 'Cancel the common factor of \\( \\sin x \\).',
                    workingLatex: '= \\frac{1}{\\cos x} = \\text{RHS}',
                    explanation: 'The \\( \\sin x \\) in the numerator of the first fraction cancels with the \\( \\sin x \\) in the denominator of the second. This is the right-hand side.'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\sin^4 x - \\cos^4 x',
                    explanation: 'Rewrite as a difference of two squares: \\( \\sin^4 x = (\\sin^2 x)^2 \\) and \\( \\cos^4 x = (\\cos^2 x)^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factor using difference of two squares.',
                    workingLatex: '= (\\sin^2 x - \\cos^2 x)(\\sin^2 x + \\cos^2 x)',
                    explanation: 'Apply \\( a^2 - b^2 = (a-b)(a+b) \\) with \\( a = \\sin^2 x \\) and \\( b = \\cos^2 x \\). The second factor is exactly the Pythagorean identity.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= (\\sin^2 x - \\cos^2 x)(1)',
                    explanation: 'Replace \\( \\sin^2 x + \\cos^2 x \\) with 1.'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify.',
                    workingLatex: '= \\sin^2 x - \\cos^2 x = \\text{RHS}',
                    explanation: 'Multiplying by 1 leaves the first factor unchanged. The result matches the right-hand side.'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{\\sin^2 x}{\\cos x} + \\cos x',
                    explanation: 'To add these we need a common denominator. The natural choice is \\( \\cos x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rewrite \\( \\cos x \\) over the common denominator.',
                    workingLatex: '= \\frac{\\sin^2 x}{\\cos x} + \\frac{\\cos x \\cdot \\cos x}{\\cos x} = \\frac{\\sin^2 x}{\\cos x} + \\frac{\\cos^2 x}{\\cos x}',
                    explanation: 'Multiplying \\( \\cos x \\) by \\( \\dfrac{\\cos x}{\\cos x} \\) does not change its value but gives it a denominator of \\( \\cos x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Combine over the common denominator.',
                    workingLatex: '= \\frac{\\sin^2 x + \\cos^2 x}{\\cos x}',
                    explanation: 'Same denominator means we can add the numerators directly.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= \\frac{1}{\\cos x} = \\text{RHS}',
                    explanation: 'The numerator is exactly \\( \\sin^2 x + \\cos^2 x = 1 \\). This matches the right-hand side.'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{\\cos^2\\theta}{\\sin\\theta} + \\sin\\theta',
                    explanation: 'To combine these into a single fraction, give \\( \\sin\\theta \\) the same denominator as the first term.'
                },
                {
                    stepNumber: 2,
                    description: 'Rewrite \\( \\sin\\theta \\) over a common denominator.',
                    workingLatex: '= \\frac{\\cos^2\\theta}{\\sin\\theta} + \\frac{\\sin^2\\theta}{\\sin\\theta}',
                    explanation: 'Multiplying \\( \\sin\\theta \\) by \\( \\dfrac{\\sin\\theta}{\\sin\\theta} \\) gives \\( \\dfrac{\\sin^2\\theta}{\\sin\\theta} \\) — same value, useful form.'
                },
                {
                    stepNumber: 3,
                    description: 'Combine over the common denominator.',
                    workingLatex: '= \\frac{\\cos^2\\theta + \\sin^2\\theta}{\\sin\\theta}',
                    explanation: 'Add the numerators since the denominators match.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= \\frac{1}{\\sin\\theta} = \\text{RHS}',
                    explanation: '\\( \\cos^2\\theta + \\sin^2\\theta = 1 \\). This is the right-hand side.'
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
                    description: 'Disprove the claim with a counter-example.',
                    workingLatex: 'x = 90^\\circ: \\sin 90^\\circ = 1, \\quad \\tan 90^\\circ \\text{ is undefined}',
                    explanation: 'A single counter-example is enough to show the claim is false. At \\( x = 90^\\circ \\), \\( \\sin x \\) equals 1 but \\( \\tan x \\) is not even defined, so the two functions cannot be identically equal.'
                },
                {
                    stepNumber: 2,
                    description: 'Start solving \\( \\sin x = \\tan x \\) by rewriting \\( \\tan x \\).',
                    workingLatex: '\\sin x = \\frac{\\sin x}{\\cos x}',
                    explanation: 'Use the quotient identity \\( \\tan x = \\dfrac{\\sin x}{\\cos x} \\). This requires \\( \\cos x \\neq 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Bring everything to one side.',
                    workingLatex: '\\sin x - \\frac{\\sin x}{\\cos x} = 0',
                    explanation: 'Subtract \\( \\dfrac{\\sin x}{\\cos x} \\) from both sides so we can factorise.'
                },
                {
                    stepNumber: 4,
                    description: 'Factor out \\( \\sin x \\).',
                    workingLatex: '\\sin x\\left(1 - \\frac{1}{\\cos x}\\right) = 0',
                    explanation: 'Both terms share a factor of \\( \\sin x \\). Critical: do NOT divide both sides by \\( \\sin x \\) — that would lose the solutions where \\( \\sin x = 0 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\sin x = 0 \\quad \\text{or} \\quad 1 - \\frac{1}{\\cos x} = 0',
                    explanation: 'A product equals zero only if at least one factor equals zero. Solve each case separately.'
                },
                {
                    stepNumber: 6,
                    description: 'Solve \\( \\sin x = 0 \\) in \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: 'x = 0^\\circ, \\, 180^\\circ, \\, 360^\\circ',
                    explanation: '\\( \\sin x \\) is zero on the \\( x \\)-axis: at \\( 0^\\circ \\), \\( 180^\\circ \\) and again at \\( 360^\\circ \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Solve \\( 1 - \\dfrac{1}{\\cos x} = 0 \\).',
                    workingLatex: '\\frac{1}{\\cos x} = 1 \\implies \\cos x = 1 \\implies x = 0^\\circ, \\, 360^\\circ',
                    explanation: '\\( \\cos x = 1 \\) only at the endpoints of the interval. Both are already in our list from step 6, so they add no new solutions.'
                },
                {
                    stepNumber: 8,
                    description: 'Combine the two solution sets.',
                    workingLatex: 'x = 0^\\circ, \\, 180^\\circ, \\, 360^\\circ',
                    explanation: 'The union of \\( \\{0^\\circ, 180^\\circ, 360^\\circ\\} \\) and \\( \\{0^\\circ, 360^\\circ\\} \\) is \\( \\{0^\\circ, 180^\\circ, 360^\\circ\\} \\). The student\'s claim that \\( \\sin x = \\tan x \\) for all \\( x \\) is therefore false; the equation holds only at these three angles.'
                }
            ],
            finalAnswer: '\\( x = 0^\\circ, \\, 180^\\circ, \\, 360^\\circ \\). The identity does not hold for all \\( x \\).'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{1}{1 - \\sin\\theta} + \\frac{1}{1 + \\sin\\theta}',
                    explanation: 'The two denominators are \\( 1 - \\sin\\theta \\) and \\( 1 + \\sin\\theta \\); their product is the natural common denominator.'
                },
                {
                    stepNumber: 2,
                    description: 'Combine over the common denominator.',
                    workingLatex: '= \\frac{(1 + \\sin\\theta) + (1 - \\sin\\theta)}{(1 - \\sin\\theta)(1 + \\sin\\theta)}',
                    explanation: 'Multiply each fraction top and bottom by the other denominator: the first becomes \\( \\dfrac{1+\\sin\\theta}{(1-\\sin\\theta)(1+\\sin\\theta)} \\), the second \\( \\dfrac{1-\\sin\\theta}{(1-\\sin\\theta)(1+\\sin\\theta)} \\). Then add.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the numerator.',
                    workingLatex: '= \\frac{2}{(1 - \\sin\\theta)(1 + \\sin\\theta)}',
                    explanation: 'The \\( +\\sin\\theta \\) and \\( -\\sin\\theta \\) cancel, leaving \\( 1 + 1 = 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Expand the denominator using difference of two squares.',
                    workingLatex: '= \\frac{2}{1 - \\sin^2\\theta}',
                    explanation: '\\( (1 - \\sin\\theta)(1 + \\sin\\theta) = 1^2 - (\\sin\\theta)^2 = 1 - \\sin^2\\theta \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the Pythagorean identity.',
                    workingLatex: '= \\frac{2}{\\cos^2\\theta} = \\text{RHS}',
                    explanation: '\\( 1 - \\sin^2\\theta = \\cos^2\\theta \\). This is the right-hand side.'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = 2\\sin^2 x - 3\\cos^2 x + 2',
                    explanation: 'The RHS uses only \\( \\sin^2 x \\), so we eliminate \\( \\cos^2 x \\) using the Pythagorean identity.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( \\cos^2 x = 1 - \\sin^2 x \\).',
                    workingLatex: '= 2\\sin^2 x - 3(1 - \\sin^2 x) + 2',
                    explanation: 'Bracket the substitution so the coefficient \\( -3 \\) is distributed correctly.'
                },
                {
                    stepNumber: 3,
                    description: 'Distribute the \\( -3 \\).',
                    workingLatex: '= 2\\sin^2 x - 3 + 3\\sin^2 x + 2',
                    explanation: '\\( -3 \\times 1 = -3 \\); \\( -3 \\times (-\\sin^2 x) = +3\\sin^2 x \\). The double negative flips the sign of the second term.'
                },
                {
                    stepNumber: 4,
                    description: 'Collect like terms.',
                    workingLatex: '= 5\\sin^2 x - 1 = \\text{RHS}',
                    explanation: '\\( 2\\sin^2 x + 3\\sin^2 x = 5\\sin^2 x \\) and \\( -3 + 2 = -1 \\). This matches the right-hand side.'
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
        questionText: 'Show that \\( (2\\cos x - 1)(\\cos x + 2) \\equiv 3\\cos x - 2\\sin^2 x \\). \n\n \n\n Hint: expand the left-hand side and use \\( \\sin^2 x + \\cos^2 x = 1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig identities', 'expand brackets', 'Pythagorean identity'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = (2\\cos x - 1)(\\cos x + 2)',
                    explanation: 'Expand the brackets first, then convert \\( \\cos^2 x \\) into a \\( \\sin^2 x \\) form to match the RHS.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand using FOIL.',
                    workingLatex: '= 2\\cos x \\cdot \\cos x + 2\\cos x \\cdot 2 + (-1)\\cdot\\cos x + (-1)\\cdot 2',
                    explanation: 'Multiply each term of the first bracket by each term of the second. Showing all four products avoids sign slips.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify each product.',
                    workingLatex: '= 2\\cos^2 x + 4\\cos x - \\cos x - 2',
                    explanation: 'Compute the four products: \\( 2\\cos^2 x \\), \\( 4\\cos x \\), \\( -\\cos x \\), \\( -2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Collect like terms.',
                    workingLatex: '= 2\\cos^2 x + 3\\cos x - 2',
                    explanation: '\\( 4\\cos x - \\cos x = 3\\cos x \\). The expression is now a quadratic in \\( \\cos x \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Replace \\( \\cos^2 x \\) using the Pythagorean identity.',
                    workingLatex: '= 2(1 - \\sin^2 x) + 3\\cos x - 2',
                    explanation: 'Use \\( \\cos^2 x = 1 - \\sin^2 x \\) to introduce the \\( \\sin^2 x \\) that appears on the RHS.'
                },
                {
                    stepNumber: 6,
                    description: 'Distribute the 2.',
                    workingLatex: '= 2 - 2\\sin^2 x + 3\\cos x - 2',
                    explanation: '\\( 2\\times 1 = 2 \\) and \\( 2\\times(-\\sin^2 x) = -2\\sin^2 x \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Cancel the constants.',
                    workingLatex: '= 3\\cos x - 2\\sin^2 x = \\text{RHS}',
                    explanation: 'The \\( +2 \\) and \\( -2 \\) cancel. The result is the right-hand side.'
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
                    description: 'Use the quotient identity to relate \\( \\sin\\theta \\) and \\( \\cos\\theta \\).',
                    workingLatex: '\\frac{\\sin\\theta}{\\cos\\theta} = 2',
                    explanation: 'Replace \\( \\tan\\theta \\) using \\( \\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta} \\). This gives one equation in two unknowns; combining with the Pythagorean identity will pin them down.'
                },
                {
                    stepNumber: 2,
                    description: 'Express \\( \\sin\\theta \\) in terms of \\( \\cos\\theta \\).',
                    workingLatex: '\\sin\\theta = 2\\cos\\theta',
                    explanation: 'Multiply both sides by \\( \\cos\\theta \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute into the Pythagorean identity.',
                    workingLatex: '(2\\cos\\theta)^2 + \\cos^2\\theta = 1',
                    explanation: 'Replace \\( \\sin\\theta \\) in \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\) so the equation now involves only \\( \\cos\\theta \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Expand and combine.',
                    workingLatex: '4\\cos^2\\theta + \\cos^2\\theta = 1 \\implies 5\\cos^2\\theta = 1',
                    explanation: '\\( (2\\cos\\theta)^2 = 4\\cos^2\\theta \\). Adding the like terms gives \\( 5\\cos^2\\theta = 1 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for \\( \\cos^2\\theta \\) and take the positive root.',
                    workingLatex: '\\cos^2\\theta = \\frac{1}{5} \\implies \\cos\\theta = \\frac{1}{\\sqrt{5}}',
                    explanation: 'Divide both sides by 5 and square-root. Positive root since \\( \\theta \\) is acute.'
                },
                {
                    stepNumber: 6,
                    description: 'Rationalise the denominator.',
                    workingLatex: '\\cos\\theta = \\frac{1}{\\sqrt{5}} \\times \\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{\\sqrt{5}}{5}',
                    explanation: 'Multiplying top and bottom by \\( \\sqrt{5} \\) clears the surd from the denominator.'
                },
                {
                    stepNumber: 7,
                    description: 'Find \\( \\sin\\theta \\) using the relation from step 2.',
                    workingLatex: '\\sin\\theta = 2\\cos\\theta = 2 \\times \\frac{\\sqrt{5}}{5} = \\frac{2\\sqrt{5}}{5}',
                    explanation: 'Substitute the value of \\( \\cos\\theta \\) into \\( \\sin\\theta = 2\\cos\\theta \\).'
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
                    description: 'Start from the left-hand side.',
                    workingLatex: '\\text{LHS} = \\frac{\\sin^3 x + \\sin x\\cos^2 x}{\\cos x}',
                    explanation: 'Both terms in the numerator contain a factor of \\( \\sin x \\), which suggests factoring.'
                },
                {
                    stepNumber: 2,
                    description: 'Factor \\( \\sin x \\) from the numerator.',
                    workingLatex: '= \\frac{\\sin x(\\sin^2 x + \\cos^2 x)}{\\cos x}',
                    explanation: '\\( \\sin^3 x = \\sin x \\cdot \\sin^2 x \\), so removing one \\( \\sin x \\) leaves \\( \\sin^2 x \\) inside. The other term gives \\( \\cos^2 x \\) inside.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the Pythagorean identity inside the bracket.',
                    workingLatex: '= \\frac{\\sin x \\cdot 1}{\\cos x}',
                    explanation: '\\( \\sin^2 x + \\cos^2 x = 1 \\), so the bracket collapses to 1.'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify using the quotient identity.',
                    workingLatex: '= \\frac{\\sin x}{\\cos x} = \\tan x = \\text{RHS}',
                    explanation: '\\( \\dfrac{\\sin x}{\\cos x} \\) is the definition of \\( \\tan x \\). This is the right-hand side.'
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
                    explanation: 'These are all four values in \\( [0^\\circ, 360^\\circ] \\).'
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
                    explanation: 'These are the three values in \\( [0^\\circ, 360^\\circ] \\).'
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
                    explanation: 'These are the two solutions in \\( [0^\\circ, 360^\\circ] \\); no further values would lie inside this range.'
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
                    explanation: 'These are the two solutions in \\( [0^\\circ, 360^\\circ] \\).'
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
                    explanation: 'Four solutions in \\( [0^\\circ, 360^\\circ] \\), evenly spaced \\( 90^\\circ \\) apart.'
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
                    explanation: 'Four solutions in \\( [0^\\circ, 360^\\circ] \\).'
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
                    explanation: 'Three solutions in \\( [0^\\circ, 360^\\circ] \\).'
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
                    explanation: 'Three solutions in \\( [0^\\circ, 360^\\circ] \\).'
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
                    explanation: 'Four solutions in \\( [0^\\circ, 360^\\circ] \\), spaced \\( 60^\\circ \\) then \\( 120^\\circ \\) apart.'
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
                    explanation: 'Four solutions in \\( [0^\\circ, 360^\\circ] \\), to 1 decimal place where non-exact.'
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
                    explanation: 'Adding another \\( 180^\\circ \\) would exceed \\( 360^\\circ \\).'
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
                    explanation: 'Two solutions in \\( [0^\\circ, 360^\\circ] \\), each to 1 decimal place.'
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
                    explanation: 'Three solutions in \\( [0, 2\\pi] \\).'
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
                    explanation: 'Since \\( u = 2x \\), \\( x = u/2 \\). Each \\( u \\)-solution gives one \\( x \\)-solution in the original interval.'
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
                    explanation: 'Four solutions in \\( [0, 2\\pi] \\).'
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
                    explanation: 'These three angles satisfy the original equation in the given interval.'
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
                    explanation: 'Four solutions in \\( [0^\\circ, 360^\\circ] \\), to 1 d.p. where non-exact.'
                }
            ],
            finalAnswer: '\\( x = 0^\\circ, \\, 113.6^\\circ, \\, 246.4^\\circ, \\, 360^\\circ \\)'
        }
    },
];
