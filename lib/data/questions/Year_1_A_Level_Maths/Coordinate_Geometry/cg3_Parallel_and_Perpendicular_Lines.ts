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

    // ─── TYPE A: Identify parallel lines (Q1–4) ───────────────────────────────

    {
        id: 'cg3-001',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 01',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'State which of the following lines are parallel to \\( y = 4x - 3 \\).\n\na) \\( 2y = 8x + 5 \\)\nb) \\( y - 4x + 1 = 0 \\)\nc) \\( 8y + 32x = 1 \\)\nd) \\( \\frac{1}{2}(y + 2) = 2x \\)\ne) \\( -12y - 3 = -48x \\)\nf) \\( 4y = x \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['parallel lines', 'gradient', 'identify'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'A line is parallel to \\( y = 4x - 3 \\) if and only if its gradient is \\( 4 \\). Rearrange each into \\( y = mx + c \\) form.',
                    workingLatex: '\\text{a) } 2y = 8x + 5 \\implies y = 4x + 2.5 \\quad m = 4 \\checkmark',
                    explanation: 'Divide every term by \\( 2 \\) to isolate \\( y \\). The coefficient of \\( x \\) is the gradient.'
                },
                {
                    stepNumber: 2,
                    description: '',
                    workingLatex: '\\text{b) } y = 4x - 1 \\quad m = 4 \\checkmark',
                    explanation: 'Move \\( -4x + 1 \\) to the right-hand side: \\( y = 4x - 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: '',
                    workingLatex: '\\text{c) } 8y = -32x + 1 \\implies y = -4x + \\tfrac{1}{8} \\quad m = -4 \\times',
                    explanation: 'Subtract \\( 32x \\) from both sides, then divide by \\( 8 \\). Gradient is \\( -4 \\), not \\( 4 \\), so not parallel.'
                },
                {
                    stepNumber: 4,
                    description: '',
                    workingLatex: '\\text{d) } \\tfrac{1}{2}y + 1 = 2x \\implies y = 4x - 2 \\quad m = 4 \\checkmark',
                    explanation: 'Distribute the \\( \\tfrac{1}{2} \\) on the left to get \\( \\tfrac{1}{2}y + 1 = 2x \\), then multiply through by \\( 2 \\) to clear the fraction.'
                },
                {
                    stepNumber: 5,
                    description: '',
                    workingLatex: '\\text{e) } -12y = -48x + 3 \\implies y = 4x - \\tfrac{1}{4} \\quad m = 4 \\checkmark',
                    explanation: 'Divide every term by \\( -12 \\). Be careful with signs: \\( \\tfrac{-48}{-12} = 4 \\) and \\( \\tfrac{3}{-12} = -\\tfrac{1}{4} \\).'
                },
                {
                    stepNumber: 6,
                    description: '',
                    workingLatex: '\\text{f) } y = \\tfrac{1}{4}x \\quad m = \\tfrac{1}{4} \\times',
                    explanation: 'Divide both sides by \\( 4 \\). Gradient is \\( \\tfrac{1}{4} \\), not \\( 4 \\) — a common slip is to mix up \\( 4y = x \\) with \\( y = 4x \\).'
                }
            ],
            finalAnswer: 'Lines a), b), d) and e) are parallel to \\(y = 4x - 3\\).'
        }
    },

    {
        id: 'cg3-002',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 02',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'State whether each pair of lines is parallel, perpendicular, or neither.\n\na) \\( y = 3x + 1 \\) and \\( y = 3x - 5 \\)\nb) \\( y = 2x + 4 \\) and \\( y = -\\dfrac{1}{2}x + 1 \\)\nc) \\( y = 5x - 2 \\) and \\( y = -5x + 2 \\)\nd) \\( 2x - 4y + 3 = 0 \\) and \\( x - 2y - 1 = 0 \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['parallel', 'perpendicular', 'identify', 'gradient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compare gradients. Two lines are parallel if \\( m_1 = m_2 \\); perpendicular if \\( m_1 \\times m_2 = -1 \\).',
                    workingLatex: '\\text{a) } m_1 = 3,\\ m_2 = 3 \\implies \\textbf{parallel}',
                    explanation: 'Both lines are already in \\( y = mx + c \\) form, so the gradients can be read straight off. Equal gradients (and different intercepts) means parallel.'
                },
                {
                    stepNumber: 2,
                    description: '',
                    workingLatex: '\\text{b) } m_1 = 2,\\ m_2 = -\\tfrac{1}{2},\\ 2 \\times (-\\tfrac{1}{2}) = -1 \\implies \\textbf{perpendicular}',
                    explanation: '\\( -\\tfrac{1}{2} \\) is the negative reciprocal of \\( 2 \\), so the product of gradients is \\( -1 \\) — the perpendicularity condition.'
                },
                {
                    stepNumber: 3,
                    description: '',
                    workingLatex: '\\text{c) } m_1 = 5,\\ m_2 = -5,\\ 5 \\times (-5) = -25 \\ne -1 \\implies \\textbf{neither}',
                    explanation: 'A common mistake is to assume that opposite signs alone imply perpendicularity. For perpendicular lines you need the negative \\emph{reciprocal} (here \\( -\\tfrac{1}{5} \\)), not just the negative.'
                },
                {
                    stepNumber: 4,
                    description: 'Rearrange part d): both give \\( m = \\frac{1}{2} \\).',
                    workingLatex: '2x - 4y + 3 = 0 \\implies y = \\tfrac{1}{2}x + \\tfrac{3}{4}; \\quad x - 2y - 1 = 0 \\implies y = \\tfrac{1}{2}x - \\tfrac{1}{2} \\implies \\textbf{parallel}',
                    explanation: 'Isolate \\( y \\) in each equation by moving the \\( x \\) and constant terms across, then divide by the coefficient of \\( y \\). Equal gradients with different intercepts confirm parallel.'
                }
            ],
            finalAnswer: 'a) Parallel; b) Perpendicular; c) Neither; d) Parallel'
        }
    },

    {
        id: 'cg3-003',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 03',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'State whether each pair of lines is parallel, perpendicular, or neither.\n\na) \\( 3x + y - 4 = 0 \\) and \\( 6x + 2y + 1 = 0 \\)\nb) \\( 4x - y + 2 = 0 \\) and \\( x + 4y - 8 = 0 \\)\nc) \\( 2x + 5y - 10 = 0 \\) and \\( 5x - 2y + 3 = 0 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['parallel', 'perpendicular', 'ax + by + c = 0', 'identify'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange to find gradients.',
                    workingLatex: '\\text{a) } y = -3x + 4 \\text{ and } y = -3x - \\tfrac{1}{2} \\implies m_1 = m_2 = -3 \\implies \\textbf{parallel}',
                    explanation: 'For the general form \\( Ax + By + C = 0 \\) the gradient is \\( -\\tfrac{A}{B} \\). Both lines give \\( m = -3 \\), so they are parallel.'
                },
                {
                    stepNumber: 2,
                    description: '',
                    workingLatex: '\\text{b) } y = 4x + 2 \\text{ and } y = -\\tfrac{1}{4}x + 2 \\implies 4 \\times (-\\tfrac{1}{4}) = -1 \\implies \\textbf{perpendicular}',
                    explanation: '\\( -\\tfrac{1}{4} \\) is the negative reciprocal of \\( 4 \\), so the product is \\( -1 \\). Note both lines pass through \\( (0, 2) \\), so they meet at a right angle there.'
                },
                {
                    stepNumber: 3,
                    description: '',
                    workingLatex: '\\text{c) } y = -\\tfrac{2}{5}x + 2 \\text{ and } y = \\tfrac{5}{2}x + \\tfrac{3}{2} \\implies (-\\tfrac{2}{5}) \\times \\tfrac{5}{2} = -1 \\implies \\textbf{perpendicular}',
                    explanation: 'The gradients \\( -\\tfrac{2}{5} \\) and \\( \\tfrac{5}{2} \\) are negative reciprocals (flip the fraction and swap sign), so their product is \\( -1 \\).'
                }
            ],
            finalAnswer: 'a) Parallel; b) Perpendicular; c) Perpendicular'
        }
    },

    {
        id: 'cg3-004',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 04',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Find the value of \\( k \\) so that the line \\( kx + 3y - 5 = 0 \\) is parallel to \\( y = 4x - 2 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['parallel', 'find k', 'gradient condition'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange \\( kx + 3y - 5 = 0 \\) to find its gradient.',
                    workingLatex: '3y = -kx + 5 \\implies y = -\\dfrac{k}{3}x + \\dfrac{5}{3}',
                    explanation: 'Move the \\( x \\) and constant terms to the right, then divide through by the coefficient of \\( y \\). The coefficient of \\( x \\) is the gradient, here \\( -\\tfrac{k}{3} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'For parallel lines, set gradients equal: \\( -\\dfrac{k}{3} = 4 \\).',
                    workingLatex: '-\\dfrac{k}{3} = 4 \\implies k = -12',
                    explanation: 'Multiply both sides by \\( -3 \\). Watch the sign — multiplying by a negative flips the right-hand side from \\( 4 \\) to \\( -12 \\).'
                }
            ],
            finalAnswer: '\\(k = -12\\)'
        }
    },

    // ─── TYPE B: Find equation of parallel line through a point (Q5–12) ───────

    {
        id: 'cg3-005',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 05',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Find the equation of the line parallel to \\( y = 3x - 1 \\) that passes through \\( (2, 8) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['parallel lines', 'find equation', 'y = mx + c'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The gradient of the parallel line is \\( m = 3 \\). Write \\( y = 3x + c \\).',
                    workingLatex: 'y = 3x + c',
                    explanation: 'Parallel lines share the same gradient.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( (2, 8) \\) to find \\( c \\).',
                    workingLatex: '8 = 3(2) + c \\implies c = 2',
                    explanation: 'The line must pass through \\( (2, 8) \\), so these coordinates satisfy the equation. Solve for \\( c \\) to pin down the \\( y \\)-intercept.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the equation.',
                    workingLatex: 'y = 3x + 2',
                    explanation: 'Substitute the gradient and \\( c \\) back into \\( y = mx + c \\).'
                }
            ],
            finalAnswer: '\\(y = 3x + 2\\)'
        }
    },

    {
        id: 'cg3-006',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 06',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Find the equation of the line parallel to \\( y = -2x + 5 \\) passing through \\( (3, 1) \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['parallel lines', 'find equation', 'ax + by + c = 0'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The gradient is \\( m = -2 \\). Use \\( y = -2x + c \\) and substitute \\( (3, 1) \\).',
                    workingLatex: '1 = -2(3) + c \\implies c = 7',
                    explanation: 'Parallel lines share gradients, so \\( m = -2 \\). Plug the given point in to solve for \\( c \\): \\( 1 = -6 + c \\) gives \\( c = 7 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange \\( y = -2x + 7 \\) into \\( ax + by + c = 0 \\).',
                    workingLatex: '2x + y - 7 = 0',
                    explanation: 'Move every term to one side. Conventionally we take the coefficient of \\( x \\) positive, so add \\( 2x \\) and subtract \\( 7 \\) from both sides.'
                }
            ],
            finalAnswer: '\\(2x + y - 7 = 0\\)'
        }
    },

    {
        id: 'cg3-007',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 07',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Line \\( L \\) passes through \\( (0, 5) \\) and is parallel to \\( 3x - 6y + 4 = 0 \\). Find the equation of \\( L \\) in the form \\( y = mx + c \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['parallel lines', 'rearrange', 'find equation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange \\( 3x - 6y + 4 = 0 \\) to find its gradient.',
                    workingLatex: '6y = 3x + 4 \\implies y = \\dfrac{1}{2}x + \\dfrac{2}{3}',
                    explanation: 'Gradient is \\( m = \\frac{1}{2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Since \\( L \\) passes through \\( (0, 5) \\), the \\( y \\)-intercept is 5.',
                    workingLatex: 'y = \\dfrac{1}{2}x + 5',
                    explanation: 'When \\( x = 0 \\), \\( y = c \\), so \\( c = 5 \\) directly.'
                }
            ],
            finalAnswer: '\\(y = \\dfrac{1}{2}x + 5\\)'
        }
    },

    {
        id: 'cg3-008',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 08',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Find the equation of the line parallel to \\( 5x + 2y - 6 = 0 \\) that passes through \\( (4, -3) \\). Give your answer in the form \\( ax + by + c = 0 \\), where \\( a \\), \\( b \\) and \\( c \\) are integers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['parallel lines', 'ax + by + c = 0', 'rearrange'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient of the given line.',
                    workingLatex: '2y = -5x + 6 \\implies y = -\\dfrac{5}{2}x + 3 \\implies m = -\\dfrac{5}{2}',
                    explanation: 'Move the \\( 5x \\) and \\( -6 \\) across, then divide by \\( 2 \\). The parallel line will share this gradient.'
                },
                {
                    stepNumber: 2,
                    description: 'Use \\( y = -\\frac{5}{2}x + c \\) with point \\( (4, -3) \\).',
                    workingLatex: '-3 = -\\dfrac{5}{2}(4) + c \\implies -3 = -10 + c \\implies c = 7',
                    explanation: 'Substitute the point into the parallel line equation. \\( -\\tfrac{5}{2} \\times 4 = -10 \\), then add \\( 10 \\) to both sides.'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange \\( y = -\\frac{5}{2}x + 7 \\): multiply by 2.',
                    workingLatex: '2y = -5x + 14 \\implies 5x + 2y - 14 = 0',
                    explanation: 'Multiplying by \\( 2 \\) clears the fraction so the coefficients are integers, as required by the question.'
                }
            ],
            finalAnswer: '\\(5x + 2y - 14 = 0\\)'
        }
    },

    {
        id: 'cg3-009',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 09',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Find the equation of the line parallel to \\( 4x - 3y + 9 = 0 \\) passing through \\( (-3, 2) \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['parallel lines', 'ax + by + c = 0', 'negative coordinates'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find gradient: \\( 3y = 4x + 9 \\implies m = \\frac{4}{3} \\).',
                    workingLatex: 'm = \\dfrac{4}{3}',
                    explanation: 'Rearrange the given line into \\( y = mx + c \\) form by isolating \\( y \\). The parallel line will have the same gradient.'
                },
                {
                    stepNumber: 2,
                    description: 'Use \\( y = \\frac{4}{3}x + c \\) with \\( (-3, 2) \\).',
                    workingLatex: '2 = \\dfrac{4}{3}(-3) + c \\implies 2 = -4 + c \\implies c = 6',
                    explanation: 'Substituting \\( x = -3 \\) into \\( \\tfrac{4}{3}x \\) gives \\( -4 \\) (the \\( 3 \\)s cancel). Then \\( c = 2 + 4 = 6 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange \\( y = \\frac{4}{3}x + 6 \\): multiply by 3.',
                    workingLatex: '3y = 4x + 18 \\implies 4x - 3y + 18 = 0',
                    explanation: 'Multiplying by \\( 3 \\) clears the fraction. Then bring everything to one side, keeping the \\( x \\)-coefficient positive.'
                }
            ],
            finalAnswer: '\\(4x - 3y + 18 = 0\\)'
        }
    },

    {
        id: 'cg3-010',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 10',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Line \\( P \\) passes through \\( (6, -1) \\) and is parallel to the line joining \\( (0, 3) \\) and \\( (4, 11) \\). Find the equation of \\( P \\) in the form \\( y = mx + c \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['parallel lines', 'gradient from two points', 'find equation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient of the line joining \\( (0, 3) \\) and \\( (4, 11) \\).',
                    workingLatex: 'm = \\dfrac{11 - 3}{4 - 0} = \\dfrac{8}{4} = 2',
                    explanation: 'Use the gradient formula \\( m = \\frac{y_2 - y_1}{x_2 - x_1} \\). \\( P \\) is parallel to this line, so it shares the gradient.'
                },
                {
                    stepNumber: 2,
                    description: 'Use \\( y = 2x + c \\) with \\( (6, -1) \\).',
                    workingLatex: '-1 = 2(6) + c \\implies c = -13',
                    explanation: 'Substitute the point on \\( P \\). \\( c = -1 - 12 = -13 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the equation.',
                    workingLatex: 'y = 2x - 13',
                    explanation: 'Combine the gradient and \\( y \\)-intercept to give the final equation.'
                }
            ],
            finalAnswer: '\\(y = 2x - 13\\)'
        }
    },

    {
        id: 'cg3-011',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 11',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Find the equation of the line parallel to \\( \\dfrac{x}{3} + \\dfrac{y}{2} = 1 \\) that passes through \\( (6, 5) \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['parallel lines', 'intercept form', 'ax + by + c = 0'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the given line to find its gradient.',
                    workingLatex: '\\dfrac{x}{3} + \\dfrac{y}{2} = 1 \\implies 2x + 3y = 6 \\implies y = -\\dfrac{2}{3}x + 2',
                    explanation: 'Multiply through by 6 to clear fractions, then isolate \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The parallel line has gradient \\( m = -\\frac{2}{3} \\). Substitute \\( (6, 5) \\).',
                    workingLatex: '5 = -\\dfrac{2}{3}(6) + c \\implies 5 = -4 + c \\implies c = 9',
                    explanation: '\\( -\\tfrac{2}{3} \\times 6 = -4 \\) (the \\( 3 \\)s cancel). Then add \\( 4 \\) to both sides to find \\( c \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange \\( y = -\\frac{2}{3}x + 9 \\): multiply by 3.',
                    workingLatex: '3y = -2x + 27 \\implies 2x + 3y - 27 = 0',
                    explanation: 'Multiply by \\( 3 \\) to clear the fraction, then move all terms to one side to get the required integer-coefficient form.'
                }
            ],
            finalAnswer: '\\(2x + 3y - 27 = 0\\)'
        }
    },

    {
        id: 'cg3-012',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 12',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Two parallel lines each have gradient \\( \\frac{3}{2} \\). One passes through \\( (2, 4) \\) and the other through \\( (6, 3) \\). Find the equations of both lines in the form \\( ax + by + c = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['parallel lines', 'find both equations', 'ax + by + c = 0'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Line 1 through \\( (2, 4) \\) with \\( m = \\frac{3}{2} \\):',
                    workingLatex: '4 = \\dfrac{3}{2}(2) + c \\implies c = 1 \\implies y = \\dfrac{3}{2}x + 1 \\implies 3x - 2y + 2 = 0',
                    explanation: 'Substitute the point to find \\( c \\), then multiply through by \\( 2 \\) and rearrange to \\( ax + by + c = 0 \\) form. Multiplying \\( y = \\tfrac{3}{2}x + 1 \\) by \\( 2 \\) gives \\( 2y = 3x + 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Line 2 through \\( (6, 3) \\) with \\( m = \\frac{3}{2} \\):',
                    workingLatex: '3 = \\dfrac{3}{2}(6) + c \\implies c = -6 \\implies y = \\dfrac{3}{2}x - 6 \\implies 3x - 2y - 12 = 0',
                    explanation: 'Same method: \\( \\tfrac{3}{2}(6) = 9 \\), so \\( c = 3 - 9 = -6 \\). Multiply by \\( 2 \\) and rearrange to integer form.'
                }
            ],
            finalAnswer: 'Line 1: \\(3x - 2y + 2 = 0\\); Line 2: \\(3x - 2y - 12 = 0\\)'
        }
    },

    // ─── TYPE C: Find equation of perpendicular line through a point (Q13–22) ─

    {
        id: 'cg3-013',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 13',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Find the equation of the line perpendicular to \\( y = 2x - 1 \\) that passes through \\( (4, 3) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['perpendicular lines', 'find equation', 'y = mx + c'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The gradient of \\( y = 2x - 1 \\) is \\( 2 \\). The perpendicular gradient is \\( -\\dfrac{1}{2} \\).',
                    workingLatex: 'm_\\perp = -\\dfrac{1}{2}',
                    explanation: 'Perpendicular gradients multiply to \\( -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( (4, 3) \\) into \\( y = -\\frac{1}{2}x + c \\).',
                    workingLatex: '3 = -\\dfrac{1}{2}(4) + c \\implies c = 5',
                    explanation: '\\( -\\tfrac{1}{2} \\times 4 = -2 \\), so \\( c = 3 + 2 = 5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the equation.',
                    workingLatex: 'y = -\\dfrac{1}{2}x + 5',
                    explanation: 'Put the gradient and \\( y \\)-intercept together.'
                }
            ],
            finalAnswer: '\\(y = -\\dfrac{1}{2}x + 5\\)'
        }
    },

    {
        id: 'cg3-014',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 14',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Find the equation of the line perpendicular to \\( y = -\\dfrac{1}{3}x + 4 \\) that passes through \\( (1, -2) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['perpendicular lines', 'fractional gradient', 'find equation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The given gradient is \\( -\\frac{1}{3} \\). Perpendicular gradient is \\( 3 \\).',
                    workingLatex: 'm_\\perp = -1 \\div \\left(-\\dfrac{1}{3}\\right) = 3',
                    explanation: 'The perpendicular gradient is the negative reciprocal. Dividing \\( -1 \\) by a negative gives a positive — flipping the fraction \\( -\\tfrac{1}{3} \\) and changing sign gives \\( +3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( (1, -2) \\) into \\( y = 3x + c \\).',
                    workingLatex: '-2 = 3(1) + c \\implies c = -5',
                    explanation: 'Substitute the given point. \\( c = -2 - 3 = -5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the equation.',
                    workingLatex: 'y = 3x - 5',
                    explanation: 'Combine gradient and intercept.'
                }
            ],
            finalAnswer: '\\(y = 3x - 5\\)'
        }
    },

    {
        id: 'cg3-015',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 15',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Find the equation of the line perpendicular to \\( 4x - y + 3 = 0 \\) that passes through \\( (8, 1) \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['perpendicular lines', 'ax + by + c = 0', 'rearrange'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange \\( 4x - y + 3 = 0 \\): \\( y = 4x + 3 \\), so \\( m = 4 \\).',
                    workingLatex: 'm_\\perp = -\\dfrac{1}{4}',
                    explanation: 'The negative reciprocal of \\( 4 \\) is \\( -\\tfrac{1}{4} \\), which is the gradient of any line perpendicular to the given one.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( (8, 1) \\) into \\( y = -\\frac{1}{4}x + c \\).',
                    workingLatex: '1 = -\\dfrac{1}{4}(8) + c \\implies 1 = -2 + c \\implies c = 3',
                    explanation: '\\( -\\tfrac{1}{4} \\times 8 = -2 \\), so adding \\( 2 \\) to both sides gives \\( c = 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange \\( y = -\\frac{1}{4}x + 3 \\): multiply by 4.',
                    workingLatex: '4y = -x + 12 \\implies x + 4y - 12 = 0',
                    explanation: 'Multiplying by \\( 4 \\) clears the fraction. Bring everything to one side, keeping the \\( x \\)-coefficient positive.'
                }
            ],
            finalAnswer: '\\(x + 4y - 12 = 0\\)'
        }
    },

    {
        id: 'cg3-016',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 16',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Find the equation of the line perpendicular to \\( 3x + 5y - 2 = 0 \\) that passes through \\( (-5, 4) \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['perpendicular lines', 'ax + by + c = 0', 'clearing fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange: \\( 5y = -3x + 2 \\implies y = -\\frac{3}{5}x + \\frac{2}{5} \\), so \\( m = -\\frac{3}{5} \\).',
                    workingLatex: 'm_\\perp = -1 \\div \\left(-\\dfrac{3}{5}\\right) = \\dfrac{5}{3}',
                    explanation: 'Flip the fraction \\( -\\tfrac{3}{5} \\) and change sign to get the perpendicular gradient \\( \\tfrac{5}{3} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( (-5, 4) \\) into \\( y = \\frac{5}{3}x + c \\).',
                    workingLatex: '4 = \\dfrac{5}{3}(-5) + c \\implies 4 = -\\dfrac{25}{3} + c \\implies c = \\dfrac{37}{3}',
                    explanation: 'Convert \\( 4 \\) to thirds: \\( 4 = \\tfrac{12}{3} \\), so \\( c = \\tfrac{12}{3} + \\tfrac{25}{3} = \\tfrac{37}{3} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange \\( y = \\frac{5}{3}x + \\frac{37}{3} \\): multiply by 3.',
                    workingLatex: '3y = 5x + 37 \\implies 5x - 3y + 37 = 0',
                    explanation: 'Multiplying by \\( 3 \\) clears both fractions in one step. Then rearrange to the required integer form.'
                }
            ],
            finalAnswer: '\\(5x - 3y + 37 = 0\\)'
        }
    },

    {
        id: 'cg3-017',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 17',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Find the equation of the line perpendicular to \\( 2x + 6y - 3 = 0 \\) passing through \\( (3, -4) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['perpendicular lines', 'y = mx + c'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange: \\( 6y = -2x + 3 \\implies m = -\\frac{1}{3} \\).',
                    workingLatex: 'm_\\perp = 3',
                    explanation: 'Dividing through by \\( 6 \\) gives gradient \\( -\\tfrac{2}{6} = -\\tfrac{1}{3} \\). The negative reciprocal is \\( 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( (3, -4) \\) into \\( y = 3x + c \\).',
                    workingLatex: '-4 = 3(3) + c \\implies c = -13',
                    explanation: 'Plug in the point: \\( c = -4 - 9 = -13 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the equation.',
                    workingLatex: 'y = 3x - 13',
                    explanation: 'Combine the gradient and \\( y \\)-intercept.'
                }
            ],
            finalAnswer: '\\(y = 3x - 13\\)'
        }
    },

    {
        id: 'cg3-018',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 18',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Line \\( M \\) is perpendicular to the line joining \\( A(1, 5) \\) and \\( B(4, 11) \\), and passes through the midpoint of \\( AB \\). Find the equation of \\( M \\) in the form \\( y = mx + c \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['perpendicular bisector', 'midpoint', 'gradient from two points'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient of \\( AB \\).',
                    workingLatex: 'm_{AB} = \\dfrac{11 - 5}{4 - 1} = \\dfrac{6}{3} = 2',
                    explanation: 'Apply the gradient formula \\( m = \\frac{y_2 - y_1}{x_2 - x_1} \\) to the two given points.'
                },
                {
                    stepNumber: 2,
                    description: 'The perpendicular gradient is \\( m_\\perp = -\\frac{1}{2} \\).',
                    workingLatex: 'm_\\perp = -\\dfrac{1}{2}',
                    explanation: 'Negative reciprocal of \\( 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the midpoint of \\( AB \\).',
                    workingLatex: 'M = \\left(\\dfrac{1+4}{2},\\ \\dfrac{5+11}{2}\\right) = (2.5,\\ 8)',
                    explanation: 'The midpoint is the average of the endpoint coordinates. \\( M \\) must pass through this point.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( (2.5, 8) \\) into \\( y = -\\frac{1}{2}x + c \\).',
                    workingLatex: '8 = -\\dfrac{1}{2}(2.5) + c \\implies c = 9.25',
                    explanation: '\\( -\\tfrac{1}{2} \\times 2.5 = -1.25 \\), so \\( c = 8 + 1.25 = 9.25 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Write the equation.',
                    workingLatex: 'y = -\\dfrac{1}{2}x + \\dfrac{37}{4}',
                    explanation: '\\( 9.25 = \\frac{37}{4} \\).'
                }
            ],
            finalAnswer: '\\(y = -\\dfrac{1}{2}x + \\dfrac{37}{4}\\)'
        }
    },

    {
        id: 'cg3-019',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 19',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Find the value of \\( k \\) such that the line \\( kx - 2y + 5 = 0 \\) is perpendicular to \\( y = 4x - 1 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['perpendicular lines', 'find k', 'gradient condition'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange \\( kx - 2y + 5 = 0 \\): \\( y = \\frac{k}{2}x + \\frac{5}{2} \\), gradient \\( = \\frac{k}{2} \\).',
                    workingLatex: 'm_1 = \\dfrac{k}{2}',
                    explanation: 'Move \\( kx + 5 \\) across (sign flips), then divide by \\( 2 \\). Coefficient of \\( x \\) is the gradient.'
                },
                {
                    stepNumber: 2,
                    description: 'For perpendicularity: \\( \\frac{k}{2} \\times 4 = -1 \\).',
                    workingLatex: '2k = -1 \\implies k = -\\dfrac{1}{2}',
                    explanation: 'Multiplying the gradients gives \\( \\tfrac{4k}{2} = 2k \\). Setting this equal to \\( -1 \\) and dividing by \\( 2 \\) gives \\( k = -\\tfrac{1}{2} \\).'
                }
            ],
            finalAnswer: '\\(k = -\\dfrac{1}{2}\\)'
        }
    },

    {
        id: 'cg3-020',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 20',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Find the equation of the line that is perpendicular to \\( 6x - 4y + 1 = 0 \\) and passes through the point \\( (3, 7) \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['perpendicular lines', 'ax + by + c = 0'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange: \\( 4y = 6x + 1 \\implies y = \\frac{3}{2}x + \\frac{1}{4} \\), so \\( m = \\frac{3}{2} \\).',
                    workingLatex: 'm_\\perp = -\\dfrac{2}{3}',
                    explanation: 'Negative reciprocal of \\( \\tfrac{3}{2} \\): flip to \\( \\tfrac{2}{3} \\), change sign.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( (3, 7) \\) into \\( y = -\\frac{2}{3}x + c \\).',
                    workingLatex: '7 = -\\dfrac{2}{3}(3) + c \\implies c = 9',
                    explanation: '\\( -\\tfrac{2}{3} \\times 3 = -2 \\), so \\( c = 7 + 2 = 9 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange \\( y = -\\frac{2}{3}x + 9 \\): multiply by 3.',
                    workingLatex: '3y = -2x + 27 \\implies 2x + 3y - 27 = 0',
                    explanation: 'Multiplying by \\( 3 \\) clears the fraction; then collect all terms on one side.'
                }
            ],
            finalAnswer: '\\(2x + 3y - 27 = 0\\)'
        }
    },

    {
        id: 'cg3-021',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 21',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Line \\( Q \\) passes through \\( (a, b) \\) and is perpendicular to \\( 5x - 2y = 10 \\). Find an equation for \\( Q \\) in terms of \\( a \\) and \\( b \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['perpendicular lines', 'general point', 'express in terms of'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the given line: \\( y = \\frac{5}{2}x - 5 \\), so \\( m = \\frac{5}{2} \\).',
                    workingLatex: 'm_\\perp = -\\dfrac{2}{5}',
                    explanation: 'Negative reciprocal of \\( \\tfrac{5}{2} \\) is \\( -\\tfrac{2}{5} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Use point \\( (a, b) \\) and gradient \\( -\\frac{2}{5} \\).',
                    workingLatex: 'y - b = -\\dfrac{2}{5}(x - a)',
                    explanation: 'Point-slope form. This is the cleanest starting form when the point is given as algebraic letters rather than numbers.'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply through by 5 and rearrange.',
                    workingLatex: '5y - 5b = -2x + 2a \\implies 2x + 5y = 2a + 5b',
                    explanation: 'Multiplying by \\( 5 \\) clears the fraction. Then bring the \\( x \\)-term to the left to give a tidy form with integer coefficients of \\( x \\) and \\( y \\).'
                }
            ],
            finalAnswer: '\\(2x + 5y = 2a + 5b\\)'
        }
    },

    {
        id: 'cg3-022',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 22',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'The line \\( L_1 \\) has equation \\( y = \\dfrac{2}{3}x + 1 \\). Line \\( L_2 \\) is perpendicular to \\( L_1 \\) and intersects the \\( x \\)-axis at \\( x = 6 \\). Find the equation of \\( L_2 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['perpendicular lines', 'x-intercept', 'find equation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The gradient of \\( L_2 \\) is the negative reciprocal of \\( \\frac{2}{3} \\).',
                    workingLatex: 'm_\\perp = -\\dfrac{3}{2}',
                    explanation: 'Flip the fraction and change sign.'
                },
                {
                    stepNumber: 2,
                    description: '\\( L_2 \\) passes through \\( (6, 0) \\) (intersects \\( x \\)-axis at \\( x = 6 \\)).',
                    workingLatex: '0 = -\\dfrac{3}{2}(6) + c \\implies c = 9',
                    explanation: 'On the \\( x \\)-axis \\( y = 0 \\). Substitute \\( (6, 0) \\): \\( -\\tfrac{3}{2} \\times 6 = -9 \\), so \\( c = 9 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the equation.',
                    workingLatex: 'y = -\\dfrac{3}{2}x + 9',
                    explanation: 'Combine the gradient and intercept.'
                }
            ],
            finalAnswer: '\\(y = -\\dfrac{3}{2}x + 9\\)'
        }
    },

    // ─── TYPE D: Perpendicular bisector (Q23–26) ─────────────────────────────

    {
        id: 'cg3-023',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 23',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Find the equation of the perpendicular bisector of the line segment joining \\( A(2, 6) \\) and \\( B(8, 2) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['perpendicular bisector', 'midpoint', 'perpendicular'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the midpoint of \\( AB \\).',
                    workingLatex: 'M = \\left(\\dfrac{2+8}{2},\\ \\dfrac{6+2}{2}\\right) = (5,\\ 4)',
                    explanation: 'The perpendicular bisector must pass through the midpoint of \\( AB \\). Average the coordinates.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the gradient of \\( AB \\).',
                    workingLatex: 'm_{AB} = \\dfrac{2 - 6}{8 - 2} = \\dfrac{-4}{6} = -\\dfrac{2}{3}',
                    explanation: 'Apply the gradient formula. Simplify \\( -\\tfrac{4}{6} \\) by cancelling a factor of \\( 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Perpendicular gradient:',
                    workingLatex: 'm_\\perp = \\dfrac{3}{2}',
                    explanation: 'Negative reciprocal of \\( -\\tfrac{2}{3} \\) is \\( \\tfrac{3}{2} \\) (flip and change sign — two negatives cancel).'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute midpoint \\( (5, 4) \\) into \\( y = \\frac{3}{2}x + c \\).',
                    workingLatex: '4 = \\dfrac{3}{2}(5) + c \\implies c = 4 - \\dfrac{15}{2} = -\\dfrac{7}{2}',
                    explanation: '\\( \\tfrac{3}{2} \\times 5 = \\tfrac{15}{2} \\). Then \\( 4 - \\tfrac{15}{2} = \\tfrac{8}{2} - \\tfrac{15}{2} = -\\tfrac{7}{2} \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Write the equation.',
                    workingLatex: 'y = \\dfrac{3}{2}x - \\dfrac{7}{2}',
                    explanation: 'Combine gradient and \\( y \\)-intercept.'
                }
            ],
            finalAnswer: '\\(y = \\dfrac{3}{2}x - \\dfrac{7}{2}\\)'
        }
    },

    {
        id: 'cg3-024',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 24',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Find the equation of the perpendicular bisector of the segment joining \\( P(-2, 1) \\) and \\( Q(4, 7) \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['perpendicular bisector', 'ax + by + c = 0'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Midpoint of \\( PQ \\):',
                    workingLatex: 'M = \\left(\\dfrac{-2+4}{2},\\ \\dfrac{1+7}{2}\\right) = (1,\\ 4)',
                    explanation: 'Average the \\( x \\)- and \\( y \\)-coordinates. The perpendicular bisector must pass through this point.'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient of \\( PQ \\):',
                    workingLatex: 'm_{PQ} = \\dfrac{7 - 1}{4 - (-2)} = \\dfrac{6}{6} = 1',
                    explanation: 'Watch the double negative: \\( 4 - (-2) = 6 \\), not \\( 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Perpendicular gradient: \\( m_\\perp = -1 \\).',
                    workingLatex: 'y = -x + c',
                    explanation: 'Negative reciprocal of \\( 1 \\) is \\( -1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( (1, 4) \\).',
                    workingLatex: '4 = -1 + c \\implies c = 5 \\implies y = -x + 5',
                    explanation: 'Substitute the midpoint to find \\( c \\): \\( c = 4 + 1 = 5 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Rearrange.',
                    workingLatex: 'x + y - 5 = 0',
                    explanation: 'Add \\( x \\) and subtract \\( 5 \\) from both sides to put it in the required form.'
                }
            ],
            finalAnswer: '\\(x + y - 5 = 0\\)'
        }
    },

    {
        id: 'cg3-025',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 25',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'The perpendicular bisector of segment \\( CD \\) has equation \\( y = 2x - 3 \\). If \\( C = (1, 4) \\), find the coordinates of \\( D \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['perpendicular bisector', 'reverse problem', 'find endpoint'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The perpendicular bisector has gradient 2, so \\( CD \\) has gradient \\( -\\frac{1}{2} \\).',
                    workingLatex: 'm_{CD} = -\\dfrac{1}{2}',
                    explanation: '\\( CD \\) is perpendicular to its bisector, so its gradient is the negative reciprocal of \\( 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The midpoint of \\( CD \\) lies on \\( y = 2x - 3 \\). Let midpoint be \\( M(h, k) \\) with \\( k = 2h - 3 \\).',
                    workingLatex: 'k = 2h - 3',
                    explanation: 'Every perpendicular bisector passes through the midpoint of its segment, so \\( M \\) lies on the given line.'
                },
                {
                    stepNumber: 3,
                    description: 'The gradient from \\( C(1,4) \\) to \\( M(h,k) \\) equals \\( -\\frac{1}{2} \\):',
                    workingLatex: '\\dfrac{k - 4}{h - 1} = -\\dfrac{1}{2} \\implies 2(k - 4) = -(h - 1)',
                    explanation: 'Cross-multiplying eliminates the fraction. This second equation lets us pin down \\( M \\) together with the first one.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( k = 2h - 3 \\):',
                    workingLatex: '2(2h - 3 - 4) = -(h - 1) \\implies 2(2h - 7) = -h + 1 \\implies 4h - 14 = -h + 1 \\implies 5h = 15 \\implies h = 3,\\ k = 3',
                    explanation: 'Substitute the line equation into the gradient equation to eliminate \\( k \\), expand both sides, then solve the linear equation for \\( h \\). Then \\( k = 2(3) - 3 = 3 \\). Midpoint \\( M = (3, 3) \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find \\( D \\): \\( D = 2M - C \\).',
                    workingLatex: 'D = (2(3) - 1,\\ 2(3) - 4) = (5,\\ 2)',
                    explanation: 'Since \\( M \\) is the midpoint of \\( CD \\), \\( M = \\tfrac{1}{2}(C + D) \\), so \\( D = 2M - C \\) coordinate-wise.'
                }
            ],
            finalAnswer: '\\(D = (5, 2)\\)'
        }
    },

    {
        id: 'cg3-026',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 26',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Find the equation of the perpendicular bisector of the segment joining \\( A(0, -3) \\) and \\( B(6, 5) \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['perpendicular bisector', 'ax + by + c = 0'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Midpoint:',
                    workingLatex: 'M = \\left(3,\\ 1\\right)',
                    explanation: 'Averaging coordinates: \\( \\tfrac{0+6}{2} = 3 \\) and \\( \\tfrac{-3+5}{2} = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient of \\( AB \\):',
                    workingLatex: 'm_{AB} = \\dfrac{5-(-3)}{6-0} = \\dfrac{8}{6} = \\dfrac{4}{3}',
                    explanation: 'Watch the double negative: \\( 5 - (-3) = 8 \\). Then simplify \\( \\tfrac{8}{6} \\) by cancelling a factor of \\( 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Perpendicular gradient:',
                    workingLatex: 'm_\\perp = -\\dfrac{3}{4}',
                    explanation: 'Negative reciprocal of \\( \\tfrac{4}{3} \\): flip the fraction and change sign.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( M(3,1) \\) into \\( y = -\\frac{3}{4}x + c \\):',
                    workingLatex: '1 = -\\dfrac{9}{4} + c \\implies c = \\dfrac{13}{4}',
                    explanation: '\\( -\\tfrac{3}{4} \\times 3 = -\\tfrac{9}{4} \\). Then \\( c = 1 + \\tfrac{9}{4} = \\tfrac{4}{4} + \\tfrac{9}{4} = \\tfrac{13}{4} \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Multiply through by 4 and rearrange:',
                    workingLatex: '4y = -3x + 13 \\implies 3x + 4y - 13 = 0',
                    explanation: 'Multiplying by \\( 4 \\) clears both fractions in one stroke. Then move \\( -3x + 13 \\) to the left.'
                }
            ],
            finalAnswer: '\\(3x + 4y - 13 = 0\\)'
        }
    },

    // ─── TYPE E: Triangle / geometry problems (Q27–31) ───────────────────────

    {
        id: 'cg3-027',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 27',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Triangle \\( PQR \\) has vertices \\( P(0, 4) \\), \\( Q(4, 0) \\) and \\( R(6, 2) \\).\n\n(a) Find the equations of sides \\( PQ \\) and \\( QR \\) in the form \\( y = mx + c \\).\n\n(b) Show that \\( PQ \\) and \\( QR \\) are perpendicular.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['triangle', 'perpendicular', 'show that', 'coordinate geometry'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Gradient of \\( PQ \\):',
                    workingLatex: 'm_{PQ} = \\dfrac{0 - 4}{4 - 0} = -1; \\quad y = -x + 4',
                    explanation: 'Use \\( m = \\frac{y_2 - y_1}{x_2 - x_1} \\). Since \\( P(0,4) \\) gives the \\( y \\)-intercept directly, the equation is \\( y = -x + 4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient of \\( QR \\):',
                    workingLatex: 'm_{QR} = \\dfrac{2 - 0}{6 - 4} = 1; \\quad y - 0 = 1(x - 4) \\implies y = x - 4',
                    explanation: 'Same gradient formula, then use point-slope through \\( Q(4, 0) \\) to find the equation.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Product of gradients:',
                    workingLatex: '(-1) \\times 1 = -1 \\implies PQ \\perp QR \\checkmark',
                    explanation: 'Two non-vertical lines are perpendicular if and only if the product of their gradients is \\( -1 \\).'
                }
            ],
            finalAnswer: '(a) \\(PQ: y = -x + 4\\); \\(QR: y = x - 4\\); (b) Shown — product of gradients \\(= -1\\).'
        }
    },

    {
        id: 'cg3-028',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 28',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Triangle \\( ABC \\) has vertices \\( A(0, 0) \\), \\( B(4, 2) \\) and \\( C(2, 6) \\).\n\n(a) Find the equations of \\( AB \\), \\( BC \\) and \\( AC \\) in the form \\( y = mx + c \\).\n\n(b) What type of triangle is \\( ABC \\)? Justify your answer.',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: ['triangle', 'perpendicular', 'classify triangle', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Gradient of \\( AB \\):',
                    workingLatex: 'm_{AB} = \\dfrac{2-0}{4-0} = \\dfrac{1}{2}; \\quad y = \\dfrac{1}{2}x',
                    explanation: 'Since \\( A \\) is the origin, the line through \\( A \\) with gradient \\( \\tfrac{1}{2} \\) has zero \\( y \\)-intercept.'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient of \\( BC \\):',
                    workingLatex: 'm_{BC} = \\dfrac{6-2}{2-4} = \\dfrac{4}{-2} = -2; \\quad y = -2x + 10',
                    explanation: 'Use point-slope through \\( B(4, 2) \\): \\( y - 2 = -2(x - 4) \\). Check: at \\( x=4 \\), \\( y=-8+10=2 \\checkmark \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Gradient of \\( AC \\):',
                    workingLatex: 'm_{AC} = \\dfrac{6-0}{2-0} = 3; \\quad y = 3x',
                    explanation: '\\( A \\) is the origin, so again the line through \\( A \\) is \\( y = 3x \\).'
                },
                {
                    stepNumber: 4,
                    description: '(b) Check perpendicularity: \\( m_{AB} \\times m_{BC} = \\frac{1}{2} \\times (-2) = -1 \\).',
                    workingLatex: 'm_{AB} \\times m_{BC} = -1 \\implies AB \\perp BC',
                    explanation: 'Triangle \\( ABC \\) is right-angled at \\( B \\).'
                }
            ],
            finalAnswer: '(a) \\(AB: y=\\frac{1}{2}x\\); \\(BC: y=-2x+10\\); \\(AC: y=3x\\); (b) Right-angled at \\(B\\) (since \\(AB \\perp BC\\)).'
        }
    },

    {
        id: 'cg3-029',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 29',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Point \\( A = (2, 5) \\). The line \\( L \\) has equation \\( y = 3x - 4 \\). Find the equation of the line through \\( A \\) perpendicular to \\( L \\), and find where it meets \\( L \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['perpendicular lines', 'intersection', 'simultaneous equations'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Perpendicular gradient: \\( m_\\perp = -\\frac{1}{3} \\).',
                    workingLatex: 'y - 5 = -\\dfrac{1}{3}(x - 2) \\implies y = -\\dfrac{1}{3}x + \\dfrac{17}{3}',
                    explanation: 'Negative reciprocal of \\( 3 \\). Apply point-slope form through \\( A(2, 5) \\); expanding gives \\( y = -\\tfrac{1}{3}x + \\tfrac{2}{3} + 5 = -\\tfrac{1}{3}x + \\tfrac{17}{3} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find intersection with \\( y = 3x - 4 \\):',
                    workingLatex: '3x - 4 = -\\dfrac{1}{3}x + \\dfrac{17}{3}',
                    explanation: 'Set the two \\( y \\)-expressions equal — at the intersection point both lines share the same \\( (x, y) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply through by 3:',
                    workingLatex: '9x - 12 = -x + 17 \\implies 10x = 29 \\implies x = 2.9,\\ y = 3(2.9) - 4 = 4.7',
                    explanation: 'Multiplying by \\( 3 \\) clears the fractions. Then collect \\( x \\)-terms and substitute back into either line to find \\( y \\).'
                }
            ],
            finalAnswer: 'Perpendicular: \\(y = -\\dfrac{1}{3}x + \\dfrac{17}{3}\\); meets \\(L\\) at \\((2.9, 4.7)\\)'
        }
    },

    {
        id: 'cg3-030',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 30',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Two lines are given: \\( L_1: 2x - y + 4 = 0 \\) and \\( L_2: x + 2y - 3 = 0 \\).\n\n(a) Show that \\( L_1 \\) and \\( L_2 \\) are perpendicular.\n\n(b) Find their point of intersection.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['perpendicular', 'show that', 'intersection', 'simultaneous equations'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Rearrange each line.',
                    workingLatex: 'L_1:\\ y = 2x + 4 \\implies m_1 = 2; \\quad L_2:\\ y = -\\dfrac{1}{2}x + \\dfrac{3}{2} \\implies m_2 = -\\dfrac{1}{2}',
                    explanation: 'Isolate \\( y \\) in each equation to read off gradients.'
                },
                {
                    stepNumber: 2,
                    description: 'Product of gradients:',
                    workingLatex: '2 \\times \\left(-\\dfrac{1}{2}\\right) = -1 \\implies L_1 \\perp L_2 \\checkmark',
                    explanation: 'Two non-vertical lines are perpendicular if and only if the product of gradients is \\( -1 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Solve simultaneously. From \\( L_2 \\): \\( x = 3 - 2y \\). Substitute into \\( L_1 \\):',
                    workingLatex: '2(3 - 2y) - y + 4 = 0 \\implies 6 - 4y - y + 4 = 0 \\implies 5y = 10 \\implies y = 2,\\ x = -1',
                    explanation: 'Substitution eliminates \\( x \\). Expanding gives \\( 10 - 5y = 0 \\), so \\( y = 2 \\). Then \\( x = 3 - 4 = -1 \\).'
                }
            ],
            finalAnswer: '(a) Shown — gradients multiply to \\(-1\\); (b) Intersection at \\((-1, 2)\\)'
        }
    },

    // ─── TYPE F: Multi-part exam-style questions (Q31–35) ────────────────────

    {
        id: 'cg3-031',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 31',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Line \\( L_1 \\) passes through \\( A(1, 3) \\) and \\( B(5, 11) \\).\n\n(a) Find the equation of \\( L_1 \\) in the form \\( y = mx + c \\).\n\n(b) Line \\( L_2 \\) is parallel to \\( L_1 \\) and passes through \\( C(3, -2) \\). Find the equation of \\( L_2 \\).\n\n(c) Line \\( L_3 \\) is perpendicular to \\( L_1 \\) and passes through \\( B \\). Find the equation of \\( L_3 \\).',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: ['parallel', 'perpendicular', 'multi-part', 'find equation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Gradient of \\( L_1 \\):',
                    workingLatex: 'm = \\dfrac{11-3}{5-1} = 2; \\quad 3 = 2(1) + c \\implies c = 1 \\implies y = 2x + 1',
                    explanation: 'Apply the gradient formula to \\( A \\) and \\( B \\). Then substitute \\( A(1, 3) \\) into \\( y = 2x + c \\) to find the intercept.'
                },
                {
                    stepNumber: 2,
                    description: '(b) \\( L_2 \\) has gradient 2, passes through \\( C(3, -2) \\):',
                    workingLatex: '-2 = 2(3) + c \\implies c = -8 \\implies y = 2x - 8',
                    explanation: 'Parallel lines share gradients. Substitute \\( C \\): \\( c = -2 - 6 = -8 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(c) \\( L_3 \\) has gradient \\( -\\frac{1}{2} \\), passes through \\( B(5, 11) \\):',
                    workingLatex: '11 = -\\dfrac{1}{2}(5) + c \\implies c = \\dfrac{27}{2} \\implies y = -\\dfrac{1}{2}x + \\dfrac{27}{2}',
                    explanation: 'Perpendicular gradient is the negative reciprocal of \\( 2 \\). Then \\( c = 11 + \\tfrac{5}{2} = \\tfrac{22}{2} + \\tfrac{5}{2} = \\tfrac{27}{2} \\).'
                }
            ],
            finalAnswer: '(a) \\(y = 2x + 1\\); (b) \\(y = 2x - 8\\); (c) \\(y = -\\dfrac{1}{2}x + \\dfrac{27}{2}\\)'
        }
    },

    {
        id: 'cg3-032',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 32',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'The line \\( L \\) has equation \\( 3x + 4y - 24 = 0 \\).\n\n(a) Find where \\( L \\) crosses the axes.\n\n(b) Find the equation of the line parallel to \\( L \\) that passes through \\( (4, -1) \\). Give your answer in the form \\( ax + by + c = 0 \\).\n\n(c) Find the equation of the line perpendicular to \\( L \\) that passes through \\( (0, 0) \\). Give your answer in the form \\( y = mx \\).',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: ['parallel', 'perpendicular', 'intercepts', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) \\( x \\)-intercept (set \\( y=0 \\)): \\( 3x = 24 \\implies x = 8 \\). \\( y \\)-intercept (set \\( x=0 \\)): \\( 4y = 24 \\implies y = 6 \\).',
                    workingLatex: 'x\\text{-intercept}: (8, 0); \\quad y\\text{-intercept}: (0, 6)',
                    explanation: 'Setting one variable to zero gives the intercept on the other axis directly.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Gradient of \\( L \\): \\( m = -\\frac{3}{4} \\). Parallel line through \\( (4, -1) \\):',
                    workingLatex: '-1 = -\\dfrac{3}{4}(4) + c \\implies c = 2 \\implies y = -\\dfrac{3}{4}x + 2 \\implies 3x + 4y - 8 = 0',
                    explanation: 'From \\( 4y = -3x + 24 \\), the gradient is \\( -\\tfrac{3}{4} \\). Substitute the point, then multiply by \\( 4 \\) and rearrange to integer form.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Perpendicular gradient: \\( m_\\perp = \\frac{4}{3} \\). Through \\( (0, 0) \\):',
                    workingLatex: 'y = \\dfrac{4}{3}x',
                    explanation: 'Through the origin, \\( c = 0 \\), giving the required form \\( y = mx \\) directly.'
                }
            ],
            finalAnswer: '(a) \\((8,0)\\) and \\((0,6)\\); (b) \\(3x+4y-8=0\\); (c) \\(y=\\dfrac{4}{3}x\\)'
        }
    },

    {
        id: 'cg3-033',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 33',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'The vertices of a quadrilateral are \\( A(0, 2) \\), \\( B(4, 4) \\), \\( C(6, 0) \\) and \\( D(2, -2) \\).\n\n(a) Find the gradients of all four sides.\n\n(b) Show that \\( ABCD \\) is a rectangle.',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: ['rectangle', 'parallel', 'perpendicular', 'quadrilateral', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Gradient of each side:',
                    workingLatex: 'm_{AB} = \\dfrac{4-2}{4-0} = \\dfrac{1}{2}, \\quad m_{BC} = \\dfrac{0-4}{6-4} = -2',
                    explanation: 'Apply the gradient formula \\( m = \\frac{y_2 - y_1}{x_2 - x_1} \\) to each pair of vertices in turn.'
                },
                {
                    stepNumber: 2,
                    description: '',
                    workingLatex: 'm_{CD} = \\dfrac{-2-0}{2-6} = \\dfrac{-2}{-4} = \\dfrac{1}{2}, \\quad m_{DA} = \\dfrac{2-(-2)}{0-2} = -2',
                    explanation: 'Watch the double negatives. For \\( m_{CD} \\) both numerator and denominator are negative, giving a positive result. For \\( m_{DA} \\), \\( 2 - (-2) = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) \\( AB \\parallel CD \\) (both gradient \\( \\frac{1}{2} \\)) and \\( BC \\parallel DA \\) (both gradient \\( -2 \\)), so \\( ABCD \\) is a parallelogram.',
                    workingLatex: 'm_{AB} \\times m_{BC} = \\dfrac{1}{2} \\times (-2) = -1',
                    explanation: 'Adjacent sides are perpendicular, so the parallelogram is a rectangle. ✓'
                }
            ],
            finalAnswer: '(a) \\(m_{AB}=m_{CD}=\\frac{1}{2}\\), \\(m_{BC}=m_{DA}=-2\\); (b) Opposite sides parallel and adjacent sides perpendicular ⟹ rectangle.'
        }
    },

    {
        id: 'cg3-034',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 34',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Line \\( L_1 \\) has equation \\( y = \\dfrac{1}{2}x + 3 \\). Line \\( L_2 \\) is perpendicular to \\( L_1 \\) and passes through \\( (4, 1) \\).\n\n(a) Find the equation of \\( L_2 \\) in the form \\( ax + by + c = 0 \\).\n\n(b) Find the coordinates of the point where \\( L_1 \\) and \\( L_2 \\) intersect.\n\n(c) Find the exact distance between the point \\( (4, 1) \\) and the intersection point.',
        marks: 9,
        examStyle: false,
        yearCreated: 2026,
        tags: ['perpendicular', 'intersection', 'distance', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Perpendicular gradient: \\( m_\\perp = -2 \\). Through \\( (4, 1) \\):',
                    workingLatex: '1 = -2(4) + c \\implies c = 9 \\implies y = -2x + 9 \\implies 2x + y - 9 = 0',
                    explanation: 'Negative reciprocal of \\( \\tfrac{1}{2} \\) is \\( -2 \\). Substitute the given point to find \\( c \\), then rearrange to the required form.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Solve \\( y = \\frac{1}{2}x + 3 \\) and \\( y = -2x + 9 \\) simultaneously:',
                    workingLatex: '\\dfrac{1}{2}x + 3 = -2x + 9 \\implies \\dfrac{5}{2}x = 6 \\implies x = \\dfrac{12}{5},\\ y = -2\\left(\\dfrac{12}{5}\\right)+9 = \\dfrac{21}{5}',
                    explanation: 'Set the \\( y \\)-expressions equal. Collecting \\( x \\)-terms: \\( \\tfrac{1}{2}x + 2x = \\tfrac{5}{2}x \\). Then divide by \\( \\tfrac{5}{2} \\), i.e. multiply by \\( \\tfrac{2}{5} \\).'
                },
                {
                    stepNumber: 3,
                    description: '(c) Distance from \\( (4, 1) \\) to \\( \\left(\\frac{12}{5}, \\frac{21}{5}\\right) \\):',
                    workingLatex: 'd = \\sqrt{\\left(4 - \\dfrac{12}{5}\\right)^2 + \\left(1 - \\dfrac{21}{5}\\right)^2} = \\sqrt{\\left(\\dfrac{8}{5}\\right)^2 + \\left(-\\dfrac{16}{5}\\right)^2} = \\sqrt{\\dfrac{64 + 256}{25}} = \\sqrt{\\dfrac{320}{25}} = \\dfrac{8\\sqrt{5}}{5}',
                    explanation: 'Apply the distance formula (Pythagoras on the coordinate differences). Convert to common fifths: \\( 4 = \\tfrac{20}{5} \\) and \\( 1 = \\tfrac{5}{5} \\). \\( \\sqrt{320} = \\sqrt{64 \\times 5} = 8\\sqrt{5} \\).'
                }
            ],
            finalAnswer: '(a) \\(2x+y-9=0\\); (b) \\(\\left(\\dfrac{12}{5}, \\dfrac{21}{5}\\right)\\); (c) \\(\\dfrac{8\\sqrt{5}}{5}\\)'
        }
    },

    {
        id: 'cg3-035',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 35',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Points \\( A(2, 7) \\), \\( B(8, 5) \\) and \\( C(k, 1) \\) are given.\n\n(a) Find the equation of the perpendicular bisector of \\( AB \\).\n\n(b) Given that \\( C \\) lies on the perpendicular bisector of \\( AB \\), find the value of \\( k \\).\n\n(c) Find the exact distance \\( AC \\).',
        marks: 9,
        examStyle: false,
        yearCreated: 2026,
        tags: ['perpendicular bisector', 'find k', 'distance', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Midpoint of \\( AB \\):',
                    workingLatex: 'M = \\left(\\dfrac{2+8}{2},\\ \\dfrac{7+5}{2}\\right) = (5,\\ 6)',
                    explanation: 'Average the endpoint coordinates. The perpendicular bisector must pass through this midpoint.'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient of \\( AB \\):',
                    workingLatex: 'm_{AB} = \\dfrac{5-7}{8-2} = -\\dfrac{1}{3} \\implies m_\\perp = 3',
                    explanation: 'Use the gradient formula, then take the negative reciprocal: flip \\( -\\tfrac{1}{3} \\) and change sign to get \\( 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Perpendicular bisector through \\( M(5,6) \\) with gradient 3:',
                    workingLatex: '6 = 3(5) + c \\implies c = -9 \\implies y = 3x - 9',
                    explanation: 'Substitute the midpoint to find \\( c \\): \\( c = 6 - 15 = -9 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(b) Substitute \\( C(k, 1) \\) into \\( y = 3x - 9 \\):',
                    workingLatex: '1 = 3k - 9 \\implies 3k = 10 \\implies k = \\dfrac{10}{3}',
                    explanation: 'Since \\( C \\) lies on the bisector its coordinates satisfy the equation. Solve the resulting linear equation in \\( k \\).'
                },
                {
                    stepNumber: 5,
                    description: '(c) \\( A = (2, 7) \\), \\( C = \\left(\\frac{10}{3}, 1\\right) \\):',
                    workingLatex: 'AC = \\sqrt{\\left(\\dfrac{10}{3}-2\\right)^2 + (1-7)^2} = \\sqrt{\\left(\\dfrac{4}{3}\\right)^2 + 36} = \\sqrt{\\dfrac{16}{9} + \\dfrac{324}{9}} = \\sqrt{\\dfrac{340}{9}} = \\dfrac{2\\sqrt{85}}{3}',
                    explanation: 'Distance formula. Convert \\( 36 \\) to ninths so the surds combine: \\( 36 = \\tfrac{324}{9} \\). Finally \\( \\sqrt{340} = \\sqrt{4 \\times 85} = 2\\sqrt{85} \\), and \\( \\sqrt{9} = 3 \\).'
                }
            ],
            finalAnswer: '(a) \\(y = 3x - 9\\); (b) \\(k = \\dfrac{10}{3}\\); (c) \\(AC = \\dfrac{2\\sqrt{85}}{3}\\)'
        }
    },

    // ─── Q36–70: Additional Parallel & Perpendicular Lines ──────────────────

    {
        id: 'cg3-036', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 36', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Find the equation of the line parallel to \\( y = 4x - 1 \\) that passes through \\( (2, 3) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Same gradient', workingLatex: 'm = 4', explanation: 'Parallel lines share gradients, so the new line also has gradient \\( 4 \\).' },
            { stepNumber: 2, description: 'Point-slope', workingLatex: 'y - 3 = 4(x - 2) \\implies y = 4x - 5', explanation: 'Apply \\( y - y_1 = m(x - x_1) \\) through \\( (2, 3) \\), then expand and simplify.' }
        ], finalAnswer: '\\(y = 4x - 5\\)' }
    },
    {
        id: 'cg3-037', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 37', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Find the equation of the line perpendicular to \\( y = 3x + 2 \\) passing through \\( (6, 1) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Perpendicular gradient', workingLatex: 'm = -\\frac{1}{3}', explanation: 'Negative reciprocal of 3.' },
            { stepNumber: 2, description: 'Equation', workingLatex: 'y - 1 = -\\frac{1}{3}(x - 6) \\implies y = -\\frac{1}{3}x + 3', explanation: 'Expand: \\( -\\tfrac{1}{3}(x - 6) = -\\tfrac{1}{3}x + 2 \\), then add \\( 1 \\) to both sides.' }
        ], finalAnswer: '\\(y = -\\frac{1}{3}x + 3\\)' }
    },
    {
        id: 'cg3-038', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 38', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Determine whether the lines \\( y = \\frac{2}{5}x + 1 \\) and \\( 2x - 5y + 10 = 0 \\) are parallel, perpendicular, or neither.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find gradients', workingLatex: 'm_1 = \\frac{2}{5}; \\quad 5y = 2x + 10 \\implies m_2 = \\frac{2}{5}', explanation: 'Equal gradients.' }
        ], finalAnswer: 'Parallel' }
    },
    {
        id: 'cg3-039', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 39', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Find the value of \\( k \\) if the lines \\( y = kx + 3 \\) and \\( y = -2x + 5 \\) are perpendicular.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Product of gradients = -1', workingLatex: 'k \\times (-2) = -1 \\implies k = \\frac{1}{2}', explanation: 'Perpendicular lines have gradients whose product is \\( -1 \\). Dividing both sides by \\( -2 \\) gives \\( k = \\tfrac{1}{2} \\).' }
        ], finalAnswer: '\\(k = \\frac{1}{2}\\)' }
    },
    {
        id: 'cg3-040', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 40', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'The line \\( L_1 \\) has equation \\( 3x + 4y = 12 \\). Find the equation of the line parallel to \\( L_1 \\) passing through the origin.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradient of L1', workingLatex: '4y = -3x + 12 \\implies m = -\\frac{3}{4}', explanation: 'Isolate \\( y \\) by subtracting \\( 3x \\) and dividing by \\( 4 \\). Coefficient of \\( x \\) is the gradient.' },
            { stepNumber: 2, description: 'Through origin', workingLatex: 'y = -\\frac{3}{4}x', explanation: 'Through the origin, the \\( y \\)-intercept is \\( 0 \\), so \\( c = 0 \\).' }
        ], finalAnswer: '\\(y = -\\frac{3}{4}x\\)' }
    },
    {
        id: 'cg3-041', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 41', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Find the equation of the line perpendicular to \\( 2x - 5y + 10 = 0 \\) passing through \\( (4, -1) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradient of given line', workingLatex: '5y = 2x + 10 \\implies m = \\frac{2}{5}', explanation: 'Move \\( -2x - 10 \\) to the right and divide by \\( 5 \\) to read off the gradient.' },
            { stepNumber: 2, description: 'Perpendicular gradient and equation', workingLatex: 'm_{\\perp} = -\\frac{5}{2}; \\quad y + 1 = -\\frac{5}{2}(x - 4) \\implies y = -\\frac{5}{2}x + 9', explanation: 'Negative reciprocal of \\( \\tfrac{2}{5} \\) is \\( -\\tfrac{5}{2} \\). Expand: \\( -\\tfrac{5}{2}(x - 4) = -\\tfrac{5}{2}x + 10 \\), then subtract \\( 1 \\).' }
        ], finalAnswer: '\\(y = -\\frac{5}{2}x + 9\\)' }
    },
    {
        id: 'cg3-042', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 42', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Show that the lines \\( y = 5x - 3 \\) and \\( x + 5y = 20 \\) are perpendicular.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find gradients and check product', workingLatex: 'm_1 = 5; \\quad 5y = -x + 20 \\implies m_2 = -\\frac{1}{5}; \\quad 5 \\times (-\\frac{1}{5}) = -1 \\checkmark', explanation: 'The first line is already in \\( y = mx + c \\) form. Rearrange the second by dividing by \\( 5 \\). The product of the gradients is \\( -1 \\), confirming perpendicularity.' }
        ], finalAnswer: 'Product of gradients is \\(-1\\), so perpendicular.' }
    },
    {
        id: 'cg3-043', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 43', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Find the value of \\( p \\) such that the lines \\( px + 3y = 6 \\) and \\( 2x - y = 4 \\) are parallel.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradients', workingLatex: 'm_1 = -\\frac{p}{3}; \\quad m_2 = 2', explanation: 'From \\( px + 3y = 6 \\): \\( 3y = -px + 6 \\), so \\( m_1 = -\\tfrac{p}{3} \\). From \\( 2x - y = 4 \\): \\( y = 2x - 4 \\), so \\( m_2 = 2 \\).' },
            { stepNumber: 2, description: 'Set equal for parallel', workingLatex: '-\\frac{p}{3} = 2 \\implies p = -6', explanation: 'Multiply both sides by \\( -3 \\); the sign flips, giving \\( p = -6 \\).' }
        ], finalAnswer: '\\(p = -6\\)' }
    },
    {
        id: 'cg3-044', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 44', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'The line \\( L \\) passes through \\( A(1, 5) \\) and \\( B(3, -1) \\). Find the equation of the line through \\( (4, 2) \\) perpendicular to \\( L \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradient of L', workingLatex: 'm_L = \\frac{-1-5}{3-1} = -3', explanation: 'Apply the gradient formula to \\( A \\) and \\( B \\): \\( \\tfrac{-6}{2} = -3 \\).' },
            { stepNumber: 2, description: 'Perpendicular and equation', workingLatex: 'm_{\\perp} = \\frac{1}{3}; \\quad y - 2 = \\frac{1}{3}(x - 4) \\implies y = \\frac{1}{3}x + \\frac{2}{3}', explanation: 'Negative reciprocal of \\( -3 \\) is \\( \\tfrac{1}{3} \\). Expand: \\( \\tfrac{1}{3}(x - 4) = \\tfrac{1}{3}x - \\tfrac{4}{3} \\), then add \\( 2 = \\tfrac{6}{3} \\) to get \\( +\\tfrac{2}{3} \\).' }
        ], finalAnswer: '\\(y = \\frac{1}{3}x + \\frac{2}{3}\\)' }
    },
    {
        id: 'cg3-045', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 45', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Find the foot of the perpendicular from \\( P(3, 7) \\) to the line \\( y = 2x + 1 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Perpendicular from P has gradient -1/2', workingLatex: 'y - 7 = -\\frac{1}{2}(x - 3) \\implies y = -\\frac{1}{2}x + \\frac{17}{2}', explanation: 'The perpendicular gradient is the negative reciprocal of \\( 2 \\). Use point-slope form through \\( P(3, 7) \\).' },
            { stepNumber: 2, description: 'Solve simultaneously', workingLatex: '2x + 1 = -\\frac{1}{2}x + \\frac{17}{2} \\implies \\frac{5}{2}x = \\frac{15}{2} \\implies x = 3,\\ y = 7', explanation: 'Setting the two equations equal finds their intersection. Quick check: \\( y = 2(3) + 1 = 7 \\), so \\( P \\) itself lies on the line — the foot of the perpendicular from a point on the line is that point.' }
        ], finalAnswer: '\\(P(3, 7)\\) lies on the line, so the foot of the perpendicular is \\(P\\) itself.' }
    },
    {
        id: 'cg3-046', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 46', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Find the foot of the perpendicular from \\( P(4, 5) \\) to the line \\( y = x + 1 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Perpendicular from P', workingLatex: 'm_{\\perp} = -1; \\quad y - 5 = -(x - 4) \\implies y = -x + 9', explanation: 'The line \\( y = x + 1 \\) has gradient \\( 1 \\), so the perpendicular has gradient \\( -1 \\). Point-slope form through \\( P(4, 5) \\).' },
            { stepNumber: 2, description: 'Solve with y = x + 1', workingLatex: 'x + 1 = -x + 9 \\implies 2x = 8 \\implies x = 4,\\ y = 5', explanation: 'Setting the equations equal gives the foot of the perpendicular. Note that \\( P(4, 5) \\) satisfies \\( y = x + 1 \\), so \\( P \\) lies on the line and the foot is \\( P \\) itself.' }
        ], finalAnswer: '\\((4, 5)\\)' }
    },
    {
        id: 'cg3-047', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 47', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Find the foot of the perpendicular from \\( P(1, 6) \\) to the line \\( y = 3x - 2 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Perpendicular from P', workingLatex: 'm_{\\perp} = -\\frac{1}{3}; \\quad y - 6 = -\\frac{1}{3}(x - 1) \\implies y = -\\frac{1}{3}x + \\frac{19}{3}', explanation: 'Negative reciprocal of \\( 3 \\). Expand and add: \\( \\tfrac{1}{3} + 6 = \\tfrac{1}{3} + \\tfrac{18}{3} = \\tfrac{19}{3} \\).' },
            { stepNumber: 2, description: 'Solve simultaneously', workingLatex: '3x - 2 = -\\frac{1}{3}x + \\frac{19}{3} \\implies \\frac{10}{3}x = \\frac{25}{3} \\implies x = \\frac{5}{2}, y = \\frac{11}{2}', explanation: 'Add \\( \\tfrac{1}{3}x \\) to both sides: \\( 3x + \\tfrac{1}{3}x = \\tfrac{10}{3}x \\). Then \\( \\tfrac{25}{3} \\div \\tfrac{10}{3} = \\tfrac{5}{2} \\). Substitute back into \\( y = 3x - 2 \\) to get \\( y = \\tfrac{15}{2} - 2 = \\tfrac{11}{2} \\).' }
        ], finalAnswer: '\\(\\left(\\frac{5}{2}, \\frac{11}{2}\\right)\\)' }
    },
    {
        id: 'cg3-048', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 48', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'The line \\( L_1: y = -\\frac{3}{4}x + 6 \\) meets the x-axis at \\( A \\). Find the equation of the line through \\( A \\) perpendicular to \\( L_1 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find A (y = 0)', workingLatex: '0 = -\\frac{3}{4}x + 6 \\implies x = 8, \\quad A = (8, 0)', explanation: 'At the \\( x \\)-axis, \\( y = 0 \\). Solve for \\( x \\): \\( \\tfrac{3}{4}x = 6 \\), so \\( x = 8 \\).' },
            { stepNumber: 2, description: 'Perpendicular gradient and equation', workingLatex: 'm_{\\perp} = \\frac{4}{3}; \\quad y = \\frac{4}{3}(x - 8) = \\frac{4}{3}x - \\frac{32}{3}', explanation: 'Negative reciprocal of \\( -\\tfrac{3}{4} \\) is \\( \\tfrac{4}{3} \\). Since the line passes through \\( A(8, 0) \\), use point-slope with \\( y_1 = 0 \\).' }
        ], finalAnswer: '\\(y = \\frac{4}{3}x - \\frac{32}{3}\\)' }
    },
    {
        id: 'cg3-049', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 49', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Find the values of \\( k \\) for which \\( kx + 2y = 5 \\) is perpendicular to \\( 3x - 4y = 1 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradients', workingLatex: 'm_1 = -\\frac{k}{2}; \\quad m_2 = \\frac{3}{4}', explanation: 'From \\( kx + 2y = 5 \\): \\( y = -\\tfrac{k}{2}x + \\tfrac{5}{2} \\). From \\( 3x - 4y = 1 \\): \\( 4y = 3x - 1 \\), so \\( m_2 = \\tfrac{3}{4} \\).' },
            { stepNumber: 2, description: 'Product = -1', workingLatex: '-\\frac{k}{2} \\times \\frac{3}{4} = -1 \\implies \\frac{3k}{8} = 1 \\implies k = \\frac{8}{3}', explanation: 'Multiplying gives \\( -\\tfrac{3k}{8} = -1 \\), so \\( \\tfrac{3k}{8} = 1 \\). Multiply both sides by \\( \\tfrac{8}{3} \\).' }
        ], finalAnswer: '\\(k = \\frac{8}{3}\\)' }
    },
    {
        id: 'cg3-050', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 50', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'A triangle has vertices \\( A(0, 0) \\), \\( B(6, 0) \\), \\( C(2, 4) \\). Find the equation of the altitude from \\( C \\) to \\( AB \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'AB is horizontal (y = 0)', workingLatex: 'm_{AB} = 0', explanation: 'Both \\( A \\) and \\( B \\) have \\( y = 0 \\), so \\( AB \\) lies along the \\( x \\)-axis.' },
            { stepNumber: 2, description: 'Altitude from C is vertical', workingLatex: 'x = 2', explanation: 'Perpendicular to a horizontal line is vertical.' }
        ], finalAnswer: '\\(x = 2\\)' }
    },
    {
        id: 'cg3-051', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 51', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Find the equation of the altitude from \\( A(0, 0) \\) to \\( BC \\) where \\( B(6, 0) \\) and \\( C(2, 4) \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradient of BC', workingLatex: 'm_{BC} = \\frac{4-0}{2-6} = -1', explanation: 'Apply the gradient formula: \\( \\tfrac{4}{-4} = -1 \\). The altitude from \\( A \\) is perpendicular to \\( BC \\).' },
            { stepNumber: 2, description: 'Perpendicular gradient and altitude', workingLatex: 'm_{\\perp} = 1; \\quad y = x', explanation: 'Through origin with gradient 1.' }
        ], finalAnswer: '\\(y = x\\)' }
    },
    {
        id: 'cg3-052', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 52', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Find the perpendicular distance from \\( (2, -1) \\) to the line \\( 4x + 3y - 7 = 0 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Distance formula', workingLatex: 'd = \\frac{|4(2) + 3(-1) - 7|}{\\sqrt{16+9}} = \\frac{|8-3-7|}{5} = \\frac{2}{5}', explanation: 'The perpendicular distance from \\( (x_0, y_0) \\) to \\( ax + by + c = 0 \\) is \\( \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}} \\). The absolute value handles either side of the line.' }
        ], finalAnswer: '\\(\\frac{2}{5}\\)' }
    },
    {
        id: 'cg3-053', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 53', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'The lines \\( y = 2x + c \\) and \\( y = 2x + d \\) are 3 units apart. Find \\( |c - d| \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Distance between parallel lines', workingLatex: 'd = \\frac{|c - d|}{\\sqrt{1 + 4}} = \\frac{|c-d|}{\\sqrt{5}}', explanation: 'Rewrite as 2x - y + c = 0 and 2x - y + d = 0.' },
            { stepNumber: 2, description: 'Solve', workingLatex: '\\frac{|c-d|}{\\sqrt{5}} = 3 \\implies |c - d| = 3\\sqrt{5}', explanation: 'Multiply both sides by \\( \\sqrt{5} \\) to isolate \\( |c - d| \\).' }
        ], finalAnswer: '\\(|c - d| = 3\\sqrt{5}\\)' }
    },
    {
        id: 'cg3-054', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 54', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Find the equation of the line through \\( (5, -3) \\) parallel to \\( 2x + 7y = 14 \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradient', workingLatex: 'm = -\\frac{2}{7}', explanation: 'From \\( 2x + 7y = 14 \\): \\( 7y = -2x + 14 \\), so the gradient is \\( -\\tfrac{2}{7} \\). Parallel lines share this.' },
            { stepNumber: 2, description: 'Equation', workingLatex: 'y + 3 = -\\frac{2}{7}(x - 5) \\implies 7y + 21 = -2x + 10 \\implies 2x + 7y + 11 = 0', explanation: 'Use point-slope through \\( (5, -3) \\), multiply by \\( 7 \\) to clear the fraction, then collect everything on one side.' }
        ], finalAnswer: '\\(2x + 7y + 11 = 0\\)' }
    },
    {
        id: 'cg3-055', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 55', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Two perpendicular lines meet at \\( (3, 4) \\). One has gradient 2. Find the equations of both lines.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Line 1', workingLatex: 'y - 4 = 2(x - 3) \\implies y = 2x - 2', explanation: 'Use point-slope through \\( (3, 4) \\) with gradient \\( 2 \\), then expand: \\( 2(x-3) = 2x - 6 \\), then add \\( 4 \\).' },
            { stepNumber: 2, description: 'Line 2 (perpendicular)', workingLatex: 'y - 4 = -\\frac{1}{2}(x - 3) \\implies y = -\\frac{1}{2}x + \\frac{11}{2}', explanation: 'Negative reciprocal of \\( 2 \\) is \\( -\\tfrac{1}{2} \\). Expand and add: \\( \\tfrac{3}{2} + 4 = \\tfrac{3}{2} + \\tfrac{8}{2} = \\tfrac{11}{2} \\).' }
        ], finalAnswer: '\\(y = 2x - 2\\) and \\(y = -\\frac{1}{2}x + \\frac{11}{2}\\)' }
    },
    {
        id: 'cg3-056', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 56', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Show that the quadrilateral with vertices \\( A(0,1) \\), \\( B(4,3) \\), \\( C(3,5) \\), \\( D(-1,3) \\) is a rectangle.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradient of AB', workingLatex: 'm_{AB} = \\frac{2}{4} = \\frac{1}{2}', explanation: '\\( m_{AB} = \\tfrac{3 - 1}{4 - 0} = \\tfrac{2}{4} = \\tfrac{1}{2} \\).' },
            { stepNumber: 2, description: 'Gradient of BC', workingLatex: 'm_{BC} = \\frac{2}{-1} = -2', explanation: '\\( m_{BC} = \\tfrac{5 - 3}{3 - 4} = \\tfrac{2}{-1} = -2 \\).' },
            { stepNumber: 3, description: 'Check perpendicular', workingLatex: '\\frac{1}{2} \\times (-2) = -1 \\checkmark', explanation: 'AB perp BC.' },
            { stepNumber: 4, description: 'Check parallel opposite sides', workingLatex: 'm_{CD} = \\frac{-2}{-4} = \\frac{1}{2} = m_{AB}; \\quad m_{DA} = \\frac{-2}{1} = -2 = m_{BC}', explanation: 'Opposite sides parallel and adjacent sides perpendicular: rectangle.' }
        ], finalAnswer: 'Opposite sides parallel, adjacent sides perpendicular: ABCD is a rectangle.' }
    },
    {
        id: 'cg3-057', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 57', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'The line \\( L \\) passes through \\( (0, 5) \\) perpendicular to \\( y = -\\frac{2}{3}x + 4 \\). Where does \\( L \\) cross the x-axis?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'L has gradient 3/2', workingLatex: 'y = \\frac{3}{2}x + 5', explanation: 'Negative reciprocal of \\( -\\tfrac{2}{3} \\) is \\( \\tfrac{3}{2} \\). Since the line passes through \\( (0, 5) \\), \\( c = 5 \\) directly.' },
            { stepNumber: 2, description: 'Set y = 0', workingLatex: '0 = \\frac{3}{2}x + 5 \\implies x = -\\frac{10}{3}', explanation: 'At the \\( x \\)-axis, \\( y = 0 \\). Solve \\( \\tfrac{3}{2}x = -5 \\), giving \\( x = -\\tfrac{10}{3} \\).' }
        ], finalAnswer: '\\(\\left(-\\frac{10}{3}, 0\\right)\\)' }
    },
    {
        id: 'cg3-058', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 58', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Find the equation of the perpendicular bisector of the segment from \\( (1, -3) \\) to \\( (5, 1) \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Midpoint', workingLatex: 'M = (3, -1)', explanation: 'Average coordinates: \\( \\tfrac{1+5}{2} = 3 \\), \\( \\tfrac{-3+1}{2} = -1 \\).' },
            { stepNumber: 2, description: 'Gradient of segment', workingLatex: 'm = \\frac{4}{4} = 1', explanation: '\\( m = \\tfrac{1 - (-3)}{5 - 1} = \\tfrac{4}{4} = 1 \\).' },
            { stepNumber: 3, description: 'Perpendicular bisector', workingLatex: 'm_{\\perp} = -1; \\quad y + 1 = -(x - 3) \\implies y = -x + 2', explanation: 'Negative reciprocal of \\( 1 \\) is \\( -1 \\). Point-slope through the midpoint, then expand: \\( -(x-3) = -x + 3 \\), and subtract \\( 1 \\) from both sides.' }
        ], finalAnswer: '\\(y = -x + 2\\)' }
    },
    {
        id: 'cg3-059', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 59', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'The line \\( y = mx + 3 \\) is parallel to the line joining \\( (1, 2) \\) and \\( (4, 8) \\). Find \\( m \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradient of line through points', workingLatex: 'm = \\frac{8-2}{4-1} = 2', explanation: 'Parallel means same gradient.' }
        ], finalAnswer: '\\(m = 2\\)' }
    },
    {
        id: 'cg3-060', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 60', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Three lines have equations \\( L_1: y = 3x \\), \\( L_2: y = -\\frac{1}{3}x + 4 \\), \\( L_3: y = 3x - 5 \\). Which pairs are parallel? Which are perpendicular?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Compare gradients', workingLatex: 'm_1 = 3, m_2 = -\\frac{1}{3}, m_3 = 3', explanation: 'Read each gradient straight from the \\( y = mx + c \\) form.' },
            { stepNumber: 2, description: 'Parallel', workingLatex: 'L_1 \\parallel L_3 \\text{ (both gradient 3)}', explanation: 'Equal gradients with different intercepts means the lines are parallel.' },
            { stepNumber: 3, description: 'Perpendicular', workingLatex: 'L_1 \\perp L_2 \\text{ and } L_2 \\perp L_3 \\text{ (product = -1)}', explanation: '\\( 3 \\times (-\\tfrac{1}{3}) = -1 \\), so \\( L_2 \\) is perpendicular to both \\( L_1 \\) and \\( L_3 \\).' }
        ], finalAnswer: '\\(L_1\\) parallel \\(L_3\\); \\(L_1 \\perp L_2\\); \\(L_2 \\perp L_3\\)' }
    },
    {
        id: 'cg3-061', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 61', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Find the reflection of the point \\( (5, 2) \\) in the line \\( y = x \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Reflection in y = x', workingLatex: '(5, 2) \\to (2, 5)', explanation: 'Swap coordinates.' }
        ], finalAnswer: '\\((2, 5)\\)' }
    },
    {
        id: 'cg3-062', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 62', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Find the value of \\( a \\) if the line \\( ax + 6y = 12 \\) is perpendicular to \\( 2x + 3y = 9 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradients', workingLatex: 'm_1 = -\\frac{a}{6}; \\quad m_2 = -\\frac{2}{3}', explanation: 'Rearrange each line into \\( y = mx + c \\) form to read off the gradients.' },
            { stepNumber: 2, description: 'Product = -1', workingLatex: '\\left(-\\frac{a}{6}\\right) \\times \\left(-\\frac{2}{3}\\right) = -1 \\implies \\frac{a}{9} = -1 \\implies a = -9', explanation: 'Two non-vertical lines are perpendicular if and only if their gradients multiply to \\( -1 \\). Be careful with the double negative — \\( (-)(-)=+ \\) so the product is \\( +\\tfrac{a}{9} \\).' }
        ], finalAnswer: '\\(a = -9\\)' }
    },
    {
        id: 'cg3-063', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 63', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'A rhombus has vertices at \\( (0, 3) \\), \\( (4, 0) \\), \\( (0, -3) \\), \\( (-4, 0) \\). Show that its diagonals are perpendicular.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Diagonal gradients', workingLatex: 'm_1 = \\frac{3-(-3)}{0-0} = \\text{undefined (vertical)}; \\quad m_2 = \\frac{0-0}{4-(-4)} = 0 \\text{ (horizontal)}', explanation: 'Vertical and horizontal lines are perpendicular.' }
        ], finalAnswer: 'One diagonal is vertical, the other horizontal: they are perpendicular.' }
    },
    {
        id: 'cg3-064', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 64', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Find the area of the triangle formed by \\( y = 2x \\), \\( y = -\\frac{1}{2}x + 5 \\), and the x-axis.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Intersection of the two lines', workingLatex: '2x = -\\frac{1}{2}x + 5 \\implies \\frac{5}{2}x = 5 \\implies x = 2, y = 4', explanation: 'Equate the two \\( y \\)-expressions to find where the lines meet. This is the apex of the triangle.' },
            { stepNumber: 2, description: 'x-intercepts', workingLatex: 'y = 2x: x = 0; \\quad y = -\\frac{1}{2}x + 5: x = 10', explanation: 'Set \\( y = 0 \\) in each line. \\( y = 2x \\) passes through the origin; \\( y = -\\tfrac{1}{2}x + 5 \\) crosses the \\( x \\)-axis at \\( x = 10 \\). These give the base of the triangle on the \\( x \\)-axis.' },
            { stepNumber: 3, description: 'Area', workingLatex: '\\text{Area} = \\frac{1}{2} \\times 10 \\times 4 = 20', explanation: 'Base along x-axis = 10, height = 4.' }
        ], finalAnswer: '\\(20\\) square units' }
    },
    {
        id: 'cg3-065', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 65', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'The perpendicular from \\( A(0, 4) \\) to \\( y = 2x - 3 \\) meets the line at \\( B \\). Find the coordinates of \\( B \\) and the length \\( AB \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Perpendicular from A', workingLatex: 'y - 4 = -\\frac{1}{2}(x - 0) \\implies y = -\\frac{1}{2}x + 4', explanation: 'Negative reciprocal of \\( 2 \\) is \\( -\\tfrac{1}{2} \\). Point-slope through \\( A(0, 4) \\); since \\( x_1 = 0 \\) the \\( y \\)-intercept is \\( 4 \\) directly.' },
            { stepNumber: 2, description: 'Solve with y = 2x - 3', workingLatex: '2x - 3 = -\\frac{1}{2}x + 4 \\implies \\frac{5}{2}x = 7 \\implies x = \\frac{14}{5}, y = \\frac{13}{5}', explanation: 'Equate the two lines. Collect \\( x \\)-terms: \\( 2x + \\tfrac{1}{2}x = \\tfrac{5}{2}x \\); the constants give \\( 7 \\). Multiply by \\( \\tfrac{2}{5} \\) to find \\( x \\), then back-substitute.' },
            { stepNumber: 3, description: 'Distance', workingLatex: 'AB = \\sqrt{\\frac{196}{25} + \\frac{49}{25}} = \\sqrt{\\frac{245}{25}} = \\frac{7\\sqrt{5}}{5}', explanation: 'Apply the distance formula: \\( \\left(\\tfrac{14}{5}\\right)^2 = \\tfrac{196}{25} \\) and \\( \\left(\\tfrac{13}{5} - 4\\right)^2 = \\left(-\\tfrac{7}{5}\\right)^2 = \\tfrac{49}{25} \\). Then \\( \\sqrt{245} = \\sqrt{49 \\times 5} = 7\\sqrt{5} \\).' }
        ], finalAnswer: '\\(B = \\left(\\frac{14}{5}, \\frac{13}{5}\\right)\\); \\(AB = \\frac{7\\sqrt{5}}{5}\\)' }
    },
    {
        id: 'cg3-066', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 66', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'The line \\( L_1 \\) has equation \\( 5x - y = 10 \\). The line \\( L_2 \\) is parallel to \\( L_1 \\) and passes through \\( (-1, 3) \\). Find where \\( L_2 \\) crosses the y-axis.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradient', workingLatex: 'm = 5', explanation: 'From \\( 5x - y = 10 \\): \\( y = 5x - 10 \\), so the gradient is \\( 5 \\). Parallel lines share gradients.' },
            { stepNumber: 2, description: 'L2 equation', workingLatex: 'y - 3 = 5(x + 1) \\implies y = 5x + 8', explanation: 'Point-slope through \\( (-1, 3) \\). Expand: \\( 5(x+1) = 5x + 5 \\), then add \\( 3 \\). y-intercept is \\( 8 \\).' }
        ], finalAnswer: '\\((0, 8)\\)' }
    },
    {
        id: 'cg3-067', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 67', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Two lines are \\( L_1: y = ax + 3 \\) and \\( L_2: y = (2a+1)x - 5 \\). Find \\( a \\) if they are: (a) parallel; (b) perpendicular.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Parallel: equal gradients', workingLatex: 'a = 2a + 1 \\implies a = -1', explanation: 'Setting the gradients equal: subtract \\( a \\) from both sides to get \\( 0 = a + 1 \\).' },
            { stepNumber: 2, description: '(b) Perpendicular: product = -1', workingLatex: 'a(2a+1) = -1 \\implies 2a^2 + a + 1 = 0', explanation: 'Set the product of gradients equal to \\( -1 \\). Expand and move all terms to one side to form a quadratic.' },
            { stepNumber: 3, description: 'Discriminant', workingLatex: '\\Delta = 1 - 8 = -7 < 0', explanation: 'No real solutions, so they cannot be perpendicular for any real a.' }
        ], finalAnswer: '(a) \\(a = -1\\); (b) No real value of \\(a\\).' }
    },
    {
        id: 'cg3-068', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 68', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Find the equation of the line through the intersection of \\( y = x + 2 \\) and \\( y = 3x - 4 \\) that is perpendicular to \\( y = x + 2 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find intersection', workingLatex: 'x + 2 = 3x - 4 \\implies x = 3, y = 5', explanation: 'Equate the two \\( y \\)-expressions: \\( 2x = 6 \\), so \\( x = 3 \\). Substitute back: \\( y = 3 + 2 = 5 \\).' },
            { stepNumber: 2, description: 'Perpendicular to y = x + 2', workingLatex: 'm_{\\perp} = -1; \\quad y - 5 = -(x - 3) \\implies y = -x + 8', explanation: 'Negative reciprocal of \\( 1 \\) is \\( -1 \\). Point-slope through \\( (3, 5) \\), then expand and simplify.' }
        ], finalAnswer: '\\(y = -x + 8\\)' }
    },
    {
        id: 'cg3-069', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 69', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'A line through \\( (2, 1) \\) is perpendicular to the line joining \\( (-1, 4) \\) and \\( (3, -2) \\). Find where it meets the y-axis.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradient of line through points', workingLatex: 'm = \\frac{-2-4}{3-(-1)} = -\\frac{3}{2}', explanation: 'Apply the gradient formula. Watch the double negative in the denominator: \\( 3 - (-1) = 4 \\). Then \\( \\tfrac{-6}{4} = -\\tfrac{3}{2} \\).' },
            { stepNumber: 2, description: 'Perpendicular through (2,1)', workingLatex: 'm_{\\perp} = \\frac{2}{3}; \\quad y - 1 = \\frac{2}{3}(x - 2) \\implies y = \\frac{2}{3}x - \\frac{1}{3}', explanation: 'Negative reciprocal of \\( -\\tfrac{3}{2} \\) is \\( \\tfrac{2}{3} \\). Expand: \\( \\tfrac{2}{3}(x-2) = \\tfrac{2}{3}x - \\tfrac{4}{3} \\), then add \\( 1 = \\tfrac{3}{3} \\) to get \\( -\\tfrac{1}{3} \\).' },
            { stepNumber: 3, description: 'y-intercept', workingLatex: 'x = 0: y = -\\frac{1}{3}', explanation: 'Substitute \\( x = 0 \\) into the line equation.' }
        ], finalAnswer: '\\(\\left(0, -\\frac{1}{3}\\right)\\)' }
    },
    {
        id: 'cg3-070', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 70', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'A triangle has vertices \\( P(1, 1) \\), \\( Q(5, 3) \\), \\( R(3, 7) \\). Find: (a) the equation of the altitude from \\( R \\); (b) the equation of the altitude from \\( P \\); (c) the orthocentre.',
        marks: 8, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Gradient of PQ', workingLatex: 'm_{PQ} = \\frac{2}{4} = \\frac{1}{2}; \\quad m_{\\perp} = -2', explanation: 'The altitude from \\( R \\) is perpendicular to \\( PQ \\). Negative reciprocal of \\( \\tfrac{1}{2} \\) is \\( -2 \\).' },
            { stepNumber: 2, description: 'Altitude from R', workingLatex: 'y - 7 = -2(x - 3) \\implies y = -2x + 13', explanation: 'Point-slope through \\( R(3, 7) \\). Expand: \\( -2(x-3) = -2x + 6 \\), then add \\( 7 \\).' },
            { stepNumber: 3, description: '(b) Gradient of QR', workingLatex: 'm_{QR} = \\frac{4}{-2} = -2; \\quad m_{\\perp} = \\frac{1}{2}', explanation: '\\( m_{QR} = \\tfrac{7 - 3}{3 - 5} = \\tfrac{4}{-2} = -2 \\). The altitude from \\( P \\) is perpendicular to \\( QR \\), giving gradient \\( \\tfrac{1}{2} \\).' },
            { stepNumber: 4, description: 'Altitude from P', workingLatex: 'y - 1 = \\frac{1}{2}(x - 1) \\implies y = \\frac{1}{2}x + \\frac{1}{2}', explanation: 'Point-slope through \\( P(1, 1) \\). Expand: \\( \\tfrac{1}{2}(x - 1) = \\tfrac{1}{2}x - \\tfrac{1}{2} \\), then add \\( 1 \\).' },
            { stepNumber: 5, description: '(c) Solve altitudes', workingLatex: '-2x + 13 = \\frac{1}{2}x + \\frac{1}{2} \\implies -\\frac{5}{2}x = -\\frac{25}{2} \\implies x = 5, y = 3', explanation: 'The orthocentre is the common intersection of the altitudes. Setting them equal and collecting \\( x \\)-terms: \\( -2x - \\tfrac{1}{2}x = -\\tfrac{5}{2}x \\). Then substitute back to find \\( y \\).' }
        ], finalAnswer: '(a) \\(y = -2x + 13\\); (b) \\(y = \\frac{1}{2}x + \\frac{1}{2}\\); (c) Orthocentre = \\((5, 3)\\)' }
    },
];
