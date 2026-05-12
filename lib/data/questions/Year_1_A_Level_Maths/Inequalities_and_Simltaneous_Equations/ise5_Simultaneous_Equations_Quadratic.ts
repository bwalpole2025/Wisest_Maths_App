import { Question } from "@/lib/types";

/**
 * Topic: Simultaneous Equations (Quadratic)
 * Ref:   ise5
 *
 * 50 questions — one linear and one quadratic equation in two unknowns,
 * solved by substitution. Mixed difficulty.
 */
export const questions: Question[] = [

    // ── Foundation (Q1–Q18) ──────────────────────────────────────────────

    // Q1–Q6: Linear + simple quadratic of the form y = x^2 (+...)

    {
        id: 'ise5-001',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 01',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = x + 1 \\) and \\( y = x^2 - 1 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Label the equations and choose a strategy.',
                    workingLatex: '\\textcircled{1}\\; y = x + 1 \\qquad \\textcircled{2}\\; y = x^2 - 1',
                    explanation: 'Both equations are already in the form "\\( y = \\) something". Setting the two right-hand sides equal removes \\( y \\) and gives a single quadratic in \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Equate the two expressions for \\( y \\).',
                    workingLatex: 'x + 1 = x^2 - 1',
                    explanation: 'Because \\( y \\) equals each right-hand side, those right-hand sides must equal each other at any point of intersection.'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange into the standard form \\( ax^2 + bx + c = 0 \\).',
                    workingLatex: 'x^2 - x - 2 = 0',
                    explanation: 'Move every term to one side so the quadratic equals zero, which is the form needed for factorising.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise and solve for \\( x \\).',
                    workingLatex: '(x - 2)(x + 1) = 0 \\implies x = 2 \\text{ or } x = -1',
                    explanation: 'Two distinct roots tell you the line cuts the curve in two points, so you expect two coordinate pairs.'
                },
                {
                    stepNumber: 5,
                    description: 'Substitute each \\( x \\) into the LINEAR equation \\( \\textcircled{1} \\) to find \\( y \\).',
                    workingLatex: 'x = 2 \\Rightarrow y = 3; \\qquad x = -1 \\Rightarrow y = 0',
                    explanation: 'Always substitute back into the linear equation — it cannot introduce extra (extraneous) solutions, whereas a quadratic substitution can.'
                },
                {
                    stepNumber: 6,
                    description: 'State the solution as coordinate pairs.',
                    workingLatex: '(x,\\, y) = (2,\\, 3) \\text{ and } (-1,\\, 0)',
                    explanation: 'The final answer must be pairs, not just \\( x \\)-values. Each \\( x \\) is matched with its own \\( y \\).'
                }
            ],
            finalAnswer: '\\((x, y) = (2, 3)\\) and \\((x, y) = (-1, 0)\\)'
        }
    },

    {
        id: 'ise5-002',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 02',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 2x + 3 \\) and \\( y = x^2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Equate the two expressions for \\( y \\).',
                    workingLatex: 'x^2 = 2x + 3',
                    explanation: 'Since both equations are solved for \\( y \\), the right-hand sides must agree wherever the graphs meet.'
                },
                {
                    stepNumber: 2,
                    description: 'Bring all terms to one side.',
                    workingLatex: 'x^2 - 2x - 3 = 0',
                    explanation: 'You want the quadratic in the standard form \\( ax^2 + bx + c = 0 \\) before factorising.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(x - 3)(x + 1) = 0 \\implies x = 3 \\text{ or } x = -1',
                    explanation: 'Look for two numbers that multiply to \\( -3 \\) and add to \\( -2 \\): \\( -3 \\) and \\( +1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find each \\( y \\) using the linear equation.',
                    workingLatex: 'x = 3 \\Rightarrow y = 2(3) + 3 = 9; \\qquad x = -1 \\Rightarrow y = 2(-1) + 3 = 1',
                    explanation: 'Use the linear equation to avoid the risk of generating spurious solutions.'
                },
                {
                    stepNumber: 5,
                    description: 'Verify in the quadratic equation.',
                    workingLatex: '3^2 = 9 \\checkmark; \\qquad (-1)^2 = 1 \\checkmark',
                    explanation: 'Both pairs satisfy \\( y = x^2 \\), so they are genuine intersection points.'
                }
            ],
            finalAnswer: '\\((x, y) = (3, 9)\\) and \\((x, y) = (-1, 1)\\)'
        }
    },

    {
        id: 'ise5-003',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 03',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = x - 3 \\) and \\( y = x^2 - 5x + 3 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Equate the right-hand sides.',
                    workingLatex: 'x - 3 = x^2 - 5x + 3',
                    explanation: 'Eliminate \\( y \\) by setting the two expressions for \\( y \\) equal.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to standard quadratic form.',
                    workingLatex: '0 = x^2 - 6x + 6',
                    explanation: 'Subtract \\( x - 3 \\) from both sides: \\( -5x - x = -6x \\) and \\( 3 - (-3) = 6 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Use the quadratic formula because this does not factorise.',
                    workingLatex: 'x = \\dfrac{6 \\pm \\sqrt{36 - 24}}{2} = \\dfrac{6 \\pm \\sqrt{12}}{2} = 3 \\pm \\sqrt{3}',
                    explanation: 'Simplify \\( \\sqrt{12} = 2\\sqrt{3} \\), then divide numerator and denominator by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute each \\( x \\) into \\( y = x - 3 \\).',
                    workingLatex: 'x = 3 + \\sqrt{3} \\Rightarrow y = \\sqrt{3}; \\qquad x = 3 - \\sqrt{3} \\Rightarrow y = -\\sqrt{3}',
                    explanation: 'The constants cancel cleanly because the line passes through \\( (3, 0) \\).'
                },
                {
                    stepNumber: 5,
                    description: 'State the two intersection points.',
                    workingLatex: '(3 + \\sqrt{3},\\, \\sqrt{3}) \\text{ and } (3 - \\sqrt{3},\\, -\\sqrt{3})',
                    explanation: 'Irrational answers are fine — leave them as exact surds rather than rounding.'
                }
            ],
            finalAnswer: '\\((x, y) = (3 + \\sqrt{3}, \\sqrt{3})\\) and \\((x, y) = (3 - \\sqrt{3}, -\\sqrt{3})\\)'
        }
    },

    {
        id: 'ise5-004',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 04',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 3x - 2 \\) and \\( y = x^2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'substitution', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Equate the two expressions for \\( y \\).',
                    workingLatex: 'x^2 = 3x - 2',
                    explanation: 'Both right-hand sides equal \\( y \\), so they must equal each other at the intersection.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: 'x^2 - 3x + 2 = 0',
                    explanation: 'Standard form with \\( a = 1 \\), \\( b = -3 \\), \\( c = 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(x - 1)(x - 2) = 0 \\implies x = 1 \\text{ or } x = 2',
                    explanation: 'Two numbers multiplying to \\( 2 \\) and summing to \\( -3 \\): \\( -1 \\) and \\( -2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find each corresponding \\( y \\).',
                    workingLatex: 'x = 1 \\Rightarrow y = 1; \\qquad x = 2 \\Rightarrow y = 4',
                    explanation: 'Use \\( y = 3x - 2 \\): for \\( x = 1 \\), \\( y = 1 \\); for \\( x = 2 \\), \\( y = 4 \\). Quickly check: \\( 1^2 = 1 \\) and \\( 2^2 = 4 \\) — both consistent with the quadratic.'
                }
            ],
            finalAnswer: '\\((x, y) = (1, 1)\\) and \\((x, y) = (2, 4)\\)'
        }
    },

    {
        id: 'ise5-005',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 05',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 4x \\) and \\( y = x^2 + 3 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'substitution', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Equate the two expressions for \\( y \\).',
                    workingLatex: 'x^2 + 3 = 4x',
                    explanation: 'Setting the right-hand sides equal eliminates \\( y \\) and gives a single quadratic in \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: 'x^2 - 4x + 3 = 0',
                    explanation: 'Subtract \\( 4x \\) from both sides.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(x - 1)(x - 3) = 0 \\implies x = 1 \\text{ or } x = 3',
                    explanation: 'A standard "find two numbers that multiply to 3, add to \\( -4 \\)" factorisation: \\( -1, -3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\) from the linear equation.',
                    workingLatex: 'x = 1 \\Rightarrow y = 4; \\qquad x = 3 \\Rightarrow y = 12',
                    explanation: 'Substitute back into \\( y = 4x \\) — the linear form is simpler and cannot create extra roots.'
                }
            ],
            finalAnswer: '\\((x, y) = (1, 4)\\) and \\((x, y) = (3, 12)\\)'
        }
    },

    {
        id: 'ise5-006',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 06',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 2x - 1 \\) and \\( y = x^2 - 4 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'substitution', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Equate the two expressions for \\( y \\).',
                    workingLatex: 'x^2 - 4 = 2x - 1',
                    explanation: 'Both sides equal \\( y \\), so they equal each other at any intersection point.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to standard form.',
                    workingLatex: 'x^2 - 2x - 3 = 0',
                    explanation: 'Move \\( 2x - 1 \\) to the left: \\( -4 - (-1) = -3 \\), \\( -(2x) = -2x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(x - 3)(x + 1) = 0 \\implies x = 3 \\text{ or } x = -1',
                    explanation: 'Numbers multiplying to \\( -3 \\) and summing to \\( -2 \\): \\( -3 \\) and \\( +1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute into the linear equation.',
                    workingLatex: 'x = 3 \\Rightarrow y = 5; \\qquad x = -1 \\Rightarrow y = -3',
                    explanation: 'Pair each \\( x \\) with its own \\( y \\) — a common pitfall is to mix them up.'
                }
            ],
            finalAnswer: '\\((x, y) = (3, 5)\\) and \\((x, y) = (-1, -3)\\)'
        }
    },

    // Q7–Q10: Linear given as x + y = k — rearrange first

    {
        id: 'ise5-007',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 07',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( x + y = 5 \\) and \\( y = x^2 - 1 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'rearrange linear', 'substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation to make \\( y \\) the subject.',
                    workingLatex: 'y = 5 - x',
                    explanation: 'Once \\( y \\) is the subject of the linear equation, you can substitute straight into the quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the quadratic.',
                    workingLatex: '5 - x = x^2 - 1',
                    explanation: 'Replace \\( y \\) in the second equation with \\( 5 - x \\) from the first.'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange to standard form.',
                    workingLatex: 'x^2 + x - 6 = 0',
                    explanation: 'Move every term to one side: \\( -1 - 5 = -6 \\), \\( -(-x) = +x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise.',
                    workingLatex: '(x + 3)(x - 2) = 0 \\implies x = -3 \\text{ or } x = 2',
                    explanation: 'Two numbers multiplying to \\( -6 \\) and summing to \\( 1 \\): \\( +3, -2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find each \\( y \\) from the linear equation.',
                    workingLatex: 'x = -3 \\Rightarrow y = 8; \\qquad x = 2 \\Rightarrow y = 3',
                    explanation: 'Always substitute back into \\( y = 5 - x \\) — using the quadratic could introduce extraneous solutions.'
                }
            ],
            finalAnswer: '\\((x, y) = (-3, 8)\\) and \\((x, y) = (2, 3)\\)'
        }
    },

    {
        id: 'ise5-008',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 08',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 2x + y = 7 \\) and \\( y = x^2 + 2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'rearrange linear', 'substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Make \\( y \\) the subject of the linear equation.',
                    workingLatex: 'y = 7 - 2x',
                    explanation: 'Subtract \\( 2x \\) from both sides to isolate \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the quadratic.',
                    workingLatex: '7 - 2x = x^2 + 2',
                    explanation: 'This produces a single quadratic in \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange.',
                    workingLatex: 'x^2 + 2x - 5 = 0',
                    explanation: 'Bring everything to the left-hand side: \\( 2 - 7 = -5 \\), \\( +2x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\dfrac{-2 \\pm \\sqrt{4 + 20}}{2} = \\dfrac{-2 \\pm \\sqrt{24}}{2} = -1 \\pm \\sqrt{6}',
                    explanation: 'Simplify \\( \\sqrt{24} = 2\\sqrt{6} \\) and cancel the factor of 2.'
                },
                {
                    stepNumber: 5,
                    description: 'Find the corresponding \\( y \\)-values.',
                    workingLatex: 'x = -1 + \\sqrt{6} \\Rightarrow y = 9 - 2\\sqrt{6}; \\qquad x = -1 - \\sqrt{6} \\Rightarrow y = 9 + 2\\sqrt{6}',
                    explanation: 'Use \\( y = 7 - 2x \\): \\( 7 - 2(-1 \\pm \\sqrt{6}) = 9 \\mp 2\\sqrt{6} \\).'
                }
            ],
            finalAnswer: '\\((x, y) = (-1 + \\sqrt{6}, 9 - 2\\sqrt{6})\\) and \\((x, y) = (-1 - \\sqrt{6}, 9 + 2\\sqrt{6})\\)'
        }
    },

    {
        id: 'ise5-009',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 09',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( x + y = 6 \\) and \\( y = x^2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'rearrange linear', 'substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation.',
                    workingLatex: 'y = 6 - x',
                    explanation: 'Make \\( y \\) the subject so it can be substituted into the quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute.',
                    workingLatex: '6 - x = x^2',
                    explanation: 'Replace \\( y \\) in \\( y = x^2 \\) with \\( 6 - x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Form a quadratic equation.',
                    workingLatex: 'x^2 + x - 6 = 0',
                    explanation: 'Move everything to one side; the constant becomes \\( -6 \\) and the \\( x \\) term becomes \\( +x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise.',
                    workingLatex: '(x + 3)(x - 2) = 0 \\implies x = -3 \\text{ or } x = 2',
                    explanation: 'Two numbers with product \\( -6 \\) and sum \\( 1 \\): \\( +3 \\) and \\( -2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find each \\( y \\) from \\( y = 6 - x \\).',
                    workingLatex: 'x = -3 \\Rightarrow y = 9; \\qquad x = 2 \\Rightarrow y = 4',
                    explanation: 'Always go back to the linear equation to keep the working safe and the pairing clear.'
                }
            ],
            finalAnswer: '\\((x, y) = (-3, 9)\\) and \\((x, y) = (2, 4)\\)'
        }
    },

    {
        id: 'ise5-010',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 10',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 3x + y = 1 \\) and \\( y = 2x^2 - x - 3 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'rearrange linear', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Make \\( y \\) the subject of the linear equation.',
                    workingLatex: 'y = 1 - 3x',
                    explanation: 'Subtract \\( 3x \\) from both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the quadratic.',
                    workingLatex: '1 - 3x = 2x^2 - x - 3',
                    explanation: 'Replace \\( y \\) in the quadratic with the linear expression.'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange to standard form.',
                    workingLatex: '2x^2 + 2x - 4 = 0 \\implies x^2 + x - 2 = 0',
                    explanation: 'Bring all terms to one side, then divide through by the common factor of 2 to simplify.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise.',
                    workingLatex: '(x + 2)(x - 1) = 0 \\implies x = -2 \\text{ or } x = 1',
                    explanation: 'Numbers multiplying to \\( -2 \\) and summing to \\( 1 \\) are \\( +2 \\) and \\( -1 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find each \\( y \\) from \\( y = 1 - 3x \\).',
                    workingLatex: 'x = -2 \\Rightarrow y = 7; \\qquad x = 1 \\Rightarrow y = -2',
                    explanation: 'Use the linear equation to avoid extraneous solutions.'
                }
            ],
            finalAnswer: '\\((x, y) = (-2, 7)\\) and \\((x, y) = (1, -2)\\)'
        }
    },

    // Q11–Q14: Circle x^2 + y^2 = r^2 with a linear

    {
        id: 'ise5-011',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 11',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = x + 1 \\) and \\( x^2 + y^2 = 25 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'circle', 'substitution', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The first equation already has \\( y \\) as the subject.',
                    workingLatex: 'y = x + 1',
                    explanation: 'Geometrically, this is a straight line. The second equation is a circle centred at the origin with radius 5.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the circle.',
                    workingLatex: 'x^2 + (x + 1)^2 = 25',
                    explanation: 'Replace \\( y \\) with \\( x + 1 \\). Remember to put the bracket round it before squaring.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and simplify.',
                    workingLatex: 'x^2 + x^2 + 2x + 1 = 25 \\implies 2x^2 + 2x - 24 = 0 \\implies x^2 + x - 12 = 0',
                    explanation: 'Expand the bracket \\( (x+1)^2 = x^2 + 2x + 1 \\), combine like terms, then divide by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise.',
                    workingLatex: '(x + 4)(x - 3) = 0 \\implies x = -4 \\text{ or } x = 3',
                    explanation: 'Numbers with product \\( -12 \\) and sum \\( 1 \\): \\( +4 \\) and \\( -3 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find each \\( y \\) from the linear equation.',
                    workingLatex: 'x = -4 \\Rightarrow y = -3; \\qquad x = 3 \\Rightarrow y = 4',
                    explanation: 'Quick sanity check: \\( (-4)^2 + (-3)^2 = 16 + 9 = 25 \\) and \\( 3^2 + 4^2 = 9 + 16 = 25 \\). Both lie on the circle.'
                }
            ],
            finalAnswer: '\\((x, y) = (-4, -3)\\) and \\((x, y) = (3, 4)\\)'
        }
    },

    {
        id: 'ise5-012',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 12',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 2x \\) and \\( x^2 + y^2 = 20 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'circle', 'substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = 2x \\) into the circle equation.',
                    workingLatex: 'x^2 + (2x)^2 = 20',
                    explanation: 'Square \\( 2x \\) to get \\( 4x^2 \\); make sure the whole \\( 2x \\) is squared, not just \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '5x^2 = 20 \\implies x^2 = 4 \\implies x = \\pm 2',
                    explanation: 'A simple quadratic with no linear term. Taking square roots gives two solutions.'
                },
                {
                    stepNumber: 3,
                    description: 'Find each \\( y \\) using \\( y = 2x \\).',
                    workingLatex: 'x = 2 \\Rightarrow y = 4; \\qquad x = -2 \\Rightarrow y = -4',
                    explanation: 'Pair each \\( x \\) with its own \\( y \\). The line through the origin produces symmetric points on the circle.'
                },
                {
                    stepNumber: 4,
                    description: 'Verify.',
                    workingLatex: '2^2 + 4^2 = 4 + 16 = 20 \\checkmark',
                    explanation: 'A quick check confirms both points lie on the circle.'
                }
            ],
            finalAnswer: '\\((x, y) = (2, 4)\\) and \\((x, y) = (-2, -4)\\)'
        }
    },

    {
        id: 'ise5-013',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 13',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( x + y = 7 \\) and \\( x^2 + y^2 = 25 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'circle', 'rearrange linear', 'substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation.',
                    workingLatex: 'y = 7 - x',
                    explanation: 'Make \\( y \\) the subject so you can substitute it into the circle.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute.',
                    workingLatex: 'x^2 + (7 - x)^2 = 25',
                    explanation: 'Put the linear expression in brackets and square the whole thing.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and simplify.',
                    workingLatex: 'x^2 + 49 - 14x + x^2 = 25 \\implies 2x^2 - 14x + 24 = 0 \\implies x^2 - 7x + 12 = 0',
                    explanation: 'Expand \\( (7-x)^2 = 49 - 14x + x^2 \\), gather terms, then divide by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise.',
                    workingLatex: '(x - 3)(x - 4) = 0 \\implies x = 3 \\text{ or } x = 4',
                    explanation: 'Two numbers with product 12 and sum \\( -7 \\): \\( -3 \\) and \\( -4 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find each \\( y \\) from \\( y = 7 - x \\).',
                    workingLatex: 'x = 3 \\Rightarrow y = 4; \\qquad x = 4 \\Rightarrow y = 3',
                    explanation: 'The two points are reflections of each other in the line \\( y = x \\), as expected from the symmetry of the system.'
                }
            ],
            finalAnswer: '\\((x, y) = (3, 4)\\) and \\((x, y) = (4, 3)\\)'
        }
    },

    {
        id: 'ise5-014',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 14',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = x - 1 \\) and \\( x^2 + y^2 = 13 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'circle', 'substitution', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute the linear into the circle.',
                    workingLatex: 'x^2 + (x - 1)^2 = 13',
                    explanation: 'Bracket the linear expression before squaring to avoid sign errors.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and simplify.',
                    workingLatex: 'x^2 + x^2 - 2x + 1 = 13 \\implies 2x^2 - 2x - 12 = 0 \\implies x^2 - x - 6 = 0',
                    explanation: '\\( (x-1)^2 = x^2 - 2x + 1 \\). After dividing by 2 the numbers become friendlier.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(x - 3)(x + 2) = 0 \\implies x = 3 \\text{ or } x = -2',
                    explanation: 'Product \\( -6 \\), sum \\( -1 \\): \\( -3 \\) and \\( +2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find each \\( y \\).',
                    workingLatex: 'x = 3 \\Rightarrow y = 2; \\qquad x = -2 \\Rightarrow y = -3',
                    explanation: 'Use \\( y = x - 1 \\). Check: \\( 3^2 + 2^2 = 13 \\checkmark \\) and \\( (-2)^2 + (-3)^2 = 13 \\checkmark \\).'
                }
            ],
            finalAnswer: '\\((x, y) = (3, 2)\\) and \\((x, y) = (-2, -3)\\)'
        }
    },

    // Q15–Q18: Quadratic in factorised or expanded form

    {
        id: 'ise5-015',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 15',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = x + 2 \\) and \\( y = (x - 1)(x + 3) \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'factorised form', 'substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the right-hand side of the quadratic.',
                    workingLatex: '(x - 1)(x + 3) = x^2 + 2x - 3',
                    explanation: 'Expanding first makes the algebra in the next step much cleaner.'
                },
                {
                    stepNumber: 2,
                    description: 'Equate the two expressions for \\( y \\).',
                    workingLatex: 'x + 2 = x^2 + 2x - 3',
                    explanation: 'Set the right-hand sides equal because both equal \\( y \\) at an intersection point.'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange.',
                    workingLatex: '0 = x^2 + x - 5',
                    explanation: '\\( 2x - x = x \\) and \\( -3 - 2 = -5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\dfrac{-1 \\pm \\sqrt{1 + 20}}{2} = \\dfrac{-1 \\pm \\sqrt{21}}{2}',
                    explanation: 'Discriminant \\( 1 - 4(1)(-5) = 21 \\), which is not a perfect square, so the answers are irrational.'
                },
                {
                    stepNumber: 5,
                    description: 'Find each corresponding \\( y \\).',
                    workingLatex: 'y = x + 2 = \\dfrac{3 \\pm \\sqrt{21}}{2}',
                    explanation: 'Add 2 to each \\( x \\)-value: \\( \\tfrac{-1 \\pm \\sqrt{21}}{2} + 2 = \\tfrac{3 \\pm \\sqrt{21}}{2} \\).'
                }
            ],
            finalAnswer: '\\((x, y) = \\left(\\dfrac{-1 + \\sqrt{21}}{2}, \\dfrac{3 + \\sqrt{21}}{2}\\right)\\) and \\(\\left(\\dfrac{-1 - \\sqrt{21}}{2}, \\dfrac{3 - \\sqrt{21}}{2}\\right)\\)'
        }
    },

    {
        id: 'ise5-016',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 16',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 2x + 1 \\) and \\( y = (x + 1)(x - 2) \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'factorised form', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the bracketed quadratic.',
                    workingLatex: '(x + 1)(x - 2) = x^2 - x - 2',
                    explanation: 'Use FOIL: \\( x \\cdot x + x \\cdot (-2) + 1 \\cdot x + 1 \\cdot (-2) = x^2 - x - 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set the two expressions for \\( y \\) equal.',
                    workingLatex: '2x + 1 = x^2 - x - 2',
                    explanation: 'Eliminate \\( y \\) by setting the right-hand sides equal.'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange.',
                    workingLatex: '0 = x^2 - 3x - 3',
                    explanation: '\\( -x - 2x = -3x \\) and \\( -2 - 1 = -3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\dfrac{3 \\pm \\sqrt{9 + 12}}{2} = \\dfrac{3 \\pm \\sqrt{21}}{2}',
                    explanation: 'Discriminant \\( 9 - 4(1)(-3) = 21 \\). Surd answers are perfectly acceptable.'
                },
                {
                    stepNumber: 5,
                    description: 'Find each corresponding \\( y \\) from \\( y = 2x + 1 \\).',
                    workingLatex: 'y = 2 \\cdot \\dfrac{3 \\pm \\sqrt{21}}{2} + 1 = 3 \\pm \\sqrt{21} + 1 = 4 \\pm \\sqrt{21}',
                    explanation: 'The factor of 2 cancels neatly with the denominator.'
                }
            ],
            finalAnswer: '\\((x, y) = \\left(\\dfrac{3 + \\sqrt{21}}{2}, 4 + \\sqrt{21}\\right)\\) and \\(\\left(\\dfrac{3 - \\sqrt{21}}{2}, 4 - \\sqrt{21}\\right)\\)'
        }
    },

    {
        id: 'ise5-017',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 17',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 5 - x \\) and \\( y = (x - 1)(x - 2) \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'factorised form', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the quadratic.',
                    workingLatex: '(x - 1)(x - 2) = x^2 - 3x + 2',
                    explanation: '\\( (-1)(-2) = +2 \\) and \\( -x - 2x = -3x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Equate the two expressions for \\( y \\).',
                    workingLatex: '5 - x = x^2 - 3x + 2',
                    explanation: 'Both right-hand sides equal \\( y \\), so they must equal one another.'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange.',
                    workingLatex: 'x^2 - 2x - 3 = 0',
                    explanation: '\\( -3x - (-x) = -2x \\), \\( 2 - 5 = -3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise.',
                    workingLatex: '(x - 3)(x + 1) = 0 \\implies x = 3 \\text{ or } x = -1',
                    explanation: 'Product \\( -3 \\), sum \\( -2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find each \\( y \\) from the linear equation.',
                    workingLatex: 'x = 3 \\Rightarrow y = 2; \\qquad x = -1 \\Rightarrow y = 6',
                    explanation: 'Use \\( y = 5 - x \\) — the linear equation cannot create false solutions.'
                }
            ],
            finalAnswer: '\\((x, y) = (3, 2)\\) and \\((x, y) = (-1, 6)\\)'
        }
    },

    {
        id: 'ise5-018',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 18',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 4 - x \\) and \\( y = (x + 2)(x - 1) \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'factorised form', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the quadratic.',
                    workingLatex: '(x + 2)(x - 1) = x^2 + x - 2',
                    explanation: '\\( 2 \\cdot (-1) = -2 \\) and \\( -x + 2x = x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set the right-hand sides equal.',
                    workingLatex: '4 - x = x^2 + x - 2',
                    explanation: 'Equate both expressions for \\( y \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange.',
                    workingLatex: 'x^2 + 2x - 6 = 0',
                    explanation: '\\( x - (-x) = 2x \\), \\( -2 - 4 = -6 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\dfrac{-2 \\pm \\sqrt{4 + 24}}{2} = \\dfrac{-2 \\pm \\sqrt{28}}{2} = -1 \\pm \\sqrt{7}',
                    explanation: 'Simplify \\( \\sqrt{28} = 2\\sqrt{7} \\) and cancel the 2.'
                },
                {
                    stepNumber: 5,
                    description: 'Find each \\( y \\) from \\( y = 4 - x \\).',
                    workingLatex: 'y = 4 - (-1 \\pm \\sqrt{7}) = 5 \\mp \\sqrt{7}',
                    explanation: 'The sign of the surd flips when subtracting.'
                }
            ],
            finalAnswer: '\\((x, y) = (-1 + \\sqrt{7}, 5 - \\sqrt{7})\\) and \\((-1 - \\sqrt{7}, 5 + \\sqrt{7})\\)'
        }
    },

    // ── Standard (Q19–Q38) ───────────────────────────────────────────────

    // Q19–Q22: Irrational solutions, give exact surd answers

    {
        id: 'ise5-019',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 19',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( y = x + 4 \\) and \\( y = x^2 + 2x - 1 \\), giving your answers as exact surds.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'surd answers', 'quadratic formula'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Equate the two expressions for \\( y \\).',
                    workingLatex: 'x + 4 = x^2 + 2x - 1',
                    explanation: 'Set the linear equal to the quadratic at any intersection point.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: 'x^2 + x - 5 = 0',
                    explanation: '\\( 2x - x = x \\) and \\( -1 - 4 = -5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\dfrac{-1 \\pm \\sqrt{1 + 20}}{2} = \\dfrac{-1 \\pm \\sqrt{21}}{2}',
                    explanation: 'Discriminant 21 is not a perfect square, so the roots are irrational. Leave them as surds rather than rounding.'
                },
                {
                    stepNumber: 4,
                    description: 'Find each \\( y \\) from \\( y = x + 4 \\).',
                    workingLatex: 'y = \\dfrac{-1 \\pm \\sqrt{21}}{2} + 4 = \\dfrac{7 \\pm \\sqrt{21}}{2}',
                    explanation: '\\( 4 = \\dfrac{8}{2} \\), so adding gives \\( \\dfrac{-1 + 8 \\pm \\sqrt{21}}{2} = \\dfrac{7 \\pm \\sqrt{21}}{2} \\).'
                }
            ],
            finalAnswer: '\\((x, y) = \\left(\\dfrac{-1 + \\sqrt{21}}{2}, \\dfrac{7 + \\sqrt{21}}{2}\\right)\\) and \\(\\left(\\dfrac{-1 - \\sqrt{21}}{2}, \\dfrac{7 - \\sqrt{21}}{2}\\right)\\)'
        }
    },

    {
        id: 'ise5-020',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 20',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( y = x - 2 \\) and \\( y = x^2 - 5 \\), giving answers as exact surds.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'surd answers', 'quadratic formula'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Equate the right-hand sides.',
                    workingLatex: 'x - 2 = x^2 - 5',
                    explanation: 'Set the two expressions for \\( y \\) equal at the points of intersection.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: 'x^2 - x - 3 = 0',
                    explanation: 'Bring all terms to one side: \\( -5 + 2 = -3 \\), \\( -x \\) appears with a sign change.'
                },
                {
                    stepNumber: 3,
                    description: 'Quadratic formula.',
                    workingLatex: 'x = \\dfrac{1 \\pm \\sqrt{1 + 12}}{2} = \\dfrac{1 \\pm \\sqrt{13}}{2}',
                    explanation: 'Discriminant \\( 1 + 12 = 13 \\). Not a perfect square, so leave as a surd.'
                },
                {
                    stepNumber: 4,
                    description: 'Find each \\( y \\).',
                    workingLatex: 'y = \\dfrac{1 \\pm \\sqrt{13}}{2} - 2 = \\dfrac{-3 \\pm \\sqrt{13}}{2}',
                    explanation: '\\( -2 = -\\dfrac{4}{2} \\), so \\( \\dfrac{1 - 4 \\pm \\sqrt{13}}{2} \\).'
                }
            ],
            finalAnswer: '\\((x, y) = \\left(\\dfrac{1 + \\sqrt{13}}{2}, \\dfrac{-3 + \\sqrt{13}}{2}\\right)\\) and \\(\\left(\\dfrac{1 - \\sqrt{13}}{2}, \\dfrac{-3 - \\sqrt{13}}{2}\\right)\\)'
        }
    },

    {
        id: 'ise5-021',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 21',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( y = 2x \\) and \\( y = x^2 - 3 \\), giving answers as exact surds.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'surd answers', 'quadratic formula'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Equate the expressions for \\( y \\).',
                    workingLatex: '2x = x^2 - 3',
                    explanation: 'Substituting eliminates \\( y \\) and gives a quadratic in \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: 'x^2 - 2x - 3 = 0',
                    explanation: 'Subtract \\( 2x \\) from both sides.'
                },
                {
                    stepNumber: 3,
                    description: 'This actually factorises.',
                    workingLatex: '(x - 3)(x + 1) = 0 \\implies x = 3 \\text{ or } x = -1',
                    explanation: 'Product \\( -3 \\), sum \\( -2 \\). Sometimes the "surd" version actually gives rational answers — always check whether the discriminant is a perfect square first.'
                },
                {
                    stepNumber: 4,
                    description: 'Find each \\( y \\) from \\( y = 2x \\).',
                    workingLatex: 'x = 3 \\Rightarrow y = 6; \\qquad x = -1 \\Rightarrow y = -2',
                    explanation: 'In this case the answers are integers, so no surds are needed in the final answer.'
                }
            ],
            finalAnswer: '\\((x, y) = (3, 6)\\) and \\((x, y) = (-1, -2)\\)'
        }
    },

    {
        id: 'ise5-022',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 22',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( y = 3 - 2x \\) and \\( y = x^2 + x - 4 \\), giving your answers as exact surds.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'surd answers', 'quadratic formula'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Equate the right-hand sides.',
                    workingLatex: '3 - 2x = x^2 + x - 4',
                    explanation: 'Both expressions equal \\( y \\), so they equal one another at any intersection.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: 'x^2 + 3x - 7 = 0',
                    explanation: '\\( x - (-2x) = 3x \\) and \\( -4 - 3 = -7 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Quadratic formula.',
                    workingLatex: 'x = \\dfrac{-3 \\pm \\sqrt{9 + 28}}{2} = \\dfrac{-3 \\pm \\sqrt{37}}{2}',
                    explanation: 'Discriminant \\( 9 + 28 = 37 \\), not a perfect square, so the roots are irrational.'
                },
                {
                    stepNumber: 4,
                    description: 'Find each \\( y \\).',
                    workingLatex: 'y = 3 - 2 \\cdot \\dfrac{-3 \\pm \\sqrt{37}}{2} = 3 - (-3 \\pm \\sqrt{37}) = 6 \\mp \\sqrt{37}',
                    explanation: 'The 2 in front cancels the denominator, then a sign flip occurs because of the minus.'
                }
            ],
            finalAnswer: '\\((x, y) = \\left(\\dfrac{-3 + \\sqrt{37}}{2}, 6 - \\sqrt{37}\\right)\\) and \\(\\left(\\dfrac{-3 - \\sqrt{37}}{2}, 6 + \\sqrt{37}\\right)\\)'
        }
    },

    // Q23–Q26: Discriminant zero — line tangent to curve

    {
        id: 'ise5-023',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 23',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( y = 2x - 1 \\) and \\( y = x^2 \\). Interpret your answer geometrically.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'tangent', 'discriminant'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Equate the expressions for \\( y \\).',
                    workingLatex: 'x^2 = 2x - 1',
                    explanation: 'Setting the two right-hand sides equal eliminates \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: 'x^2 - 2x + 1 = 0',
                    explanation: 'Move every term to the left.'
                },
                {
                    stepNumber: 3,
                    description: 'Compute the discriminant.',
                    workingLatex: 'b^2 - 4ac = (-2)^2 - 4(1)(1) = 4 - 4 = 0',
                    explanation: 'A discriminant of zero means the quadratic has exactly one (repeated) real root, so the line meets the curve at exactly one point.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve.',
                    workingLatex: '(x - 1)^2 = 0 \\implies x = 1',
                    explanation: 'The factorisation is a perfect square.'
                },
                {
                    stepNumber: 5,
                    description: 'Find \\( y \\).',
                    workingLatex: 'y = 2(1) - 1 = 1',
                    explanation: 'Substitute \\( x = 1 \\) into the linear equation.'
                },
                {
                    stepNumber: 6,
                    description: 'Geometric interpretation.',
                    workingLatex: '\\text{Discriminant } = 0 \\implies \\text{line is tangent to the curve at } (1, 1).',
                    explanation: 'Discriminant zero is the algebraic signature of tangency: the line touches the curve at one point without crossing it.'
                }
            ],
            finalAnswer: '\\((x, y) = (1, 1)\\); the line is tangent to the parabola at this point.'
        }
    },

    {
        id: 'ise5-024',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 24',
        difficulty: 'Standard',
        questionText: 'Show that the line \\( y = 4x - 4 \\) is a tangent to the curve \\( y = x^2 \\) and find the point of tangency.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['tangent', 'discriminant', 'simultaneous equations', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Equate the right-hand sides.',
                    workingLatex: 'x^2 = 4x - 4',
                    explanation: 'A tangent meets the curve at exactly one (repeated) point — we will check this via the discriminant.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to standard form.',
                    workingLatex: 'x^2 - 4x + 4 = 0',
                    explanation: 'Move everything to one side.'
                },
                {
                    stepNumber: 3,
                    description: 'Compute the discriminant.',
                    workingLatex: 'b^2 - 4ac = 16 - 16 = 0',
                    explanation: 'The discriminant is zero — confirming the line is tangent to the curve.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '(x - 2)^2 = 0 \\implies x = 2',
                    explanation: 'A perfect-square factorisation.'
                },
                {
                    stepNumber: 5,
                    description: 'Find \\( y \\).',
                    workingLatex: 'y = 4(2) - 4 = 4',
                    explanation: 'Substitute back into the linear equation.'
                }
            ],
            finalAnswer: 'Tangent at \\((x, y) = (2, 4)\\)'
        }
    },

    {
        id: 'ise5-025',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 25',
        difficulty: 'Standard',
        questionText: 'Show that the line \\( y = -2x + 1 \\) is tangent to the curve \\( y = -x^2 \\), and find the point of contact.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['tangent', 'discriminant', 'simultaneous equations'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the right-hand sides equal.',
                    workingLatex: '-x^2 = -2x + 1',
                    explanation: 'Both equal \\( y \\) at any point of contact, so the right-hand sides must agree there.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to standard form.',
                    workingLatex: 'x^2 - 2x + 1 = 0',
                    explanation: 'Multiply both sides by \\( -1 \\) (which reverses every sign) and bring all terms to the left so the leading coefficient is positive.'
                },
                {
                    stepNumber: 3,
                    description: 'Compute the discriminant.',
                    workingLatex: 'b^2 - 4ac = (-2)^2 - 4(1)(1) = 4 - 4 = 0',
                    explanation: 'A discriminant of zero is the algebraic signature of tangency — exactly one (repeated) real root, so the line touches the curve at one point.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve the (perfect-square) quadratic.',
                    workingLatex: '(x - 1)^2 = 0 \\implies x = 1',
                    explanation: 'The factorisation is a perfect square, giving the repeated root \\( x = 1 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find \\( y \\).',
                    workingLatex: 'y = -2(1) + 1 = -1',
                    explanation: 'Substitute \\( x = 1 \\) into the linear equation. Check on the curve: \\( -1^2 = -1 \\checkmark \\).'
                }
            ],
            finalAnswer: 'The line is tangent to the curve at \\((x, y) = (1, -1)\\).'
        }
    },

    {
        id: 'ise5-026',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 26',
        difficulty: 'Standard',
        questionText: 'Show that the line \\( y = 6x - 9 \\) is tangent to the curve \\( y = x^2 \\), and find the point of tangency.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['tangent', 'discriminant', 'simultaneous equations'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Equate the two expressions for \\( y \\).',
                    workingLatex: 'x^2 = 6x - 9',
                    explanation: 'Set the linear right-hand side equal to the quadratic right-hand side.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: 'x^2 - 6x + 9 = 0',
                    explanation: 'A standard form quadratic.'
                },
                {
                    stepNumber: 3,
                    description: 'Compute the discriminant.',
                    workingLatex: 'b^2 - 4ac = 36 - 36 = 0',
                    explanation: 'Discriminant zero confirms tangency — exactly one (repeated) root.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve.',
                    workingLatex: '(x - 3)^2 = 0 \\implies x = 3',
                    explanation: 'A perfect-square trinomial.'
                },
                {
                    stepNumber: 5,
                    description: 'Find \\( y \\).',
                    workingLatex: 'y = 6(3) - 9 = 9',
                    explanation: 'Substitute \\( x = 3 \\) into the linear equation.'
                }
            ],
            finalAnswer: 'The line is tangent at \\((x, y) = (3, 9)\\).'
        }
    },

    // Q27–Q30: Discriminant negative — no intersections

    {
        id: 'ise5-027',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 27',
        difficulty: 'Standard',
        questionText: 'Show that the line \\( y = x - 3 \\) does not meet the curve \\( y = x^2 + 1 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['discriminant', 'no real solutions', 'simultaneous equations'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Equate the two expressions for \\( y \\).',
                    workingLatex: 'x - 3 = x^2 + 1',
                    explanation: 'Eliminate \\( y \\) by setting the right-hand sides equal.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: 'x^2 - x + 4 = 0',
                    explanation: '\\( 1 + 3 = 4 \\), and moving \\( x \\) across gives \\( -x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Compute the discriminant.',
                    workingLatex: 'b^2 - 4ac = 1 - 16 = -15 < 0',
                    explanation: 'A negative discriminant means there are no real solutions, so the line and the curve do not intersect.'
                },
                {
                    stepNumber: 4,
                    description: 'Geometric interpretation.',
                    workingLatex: '\\text{Line misses the curve entirely.}',
                    explanation: 'The line passes "under" the parabola; the parabola has minimum value 1 (at \\( x = 0 \\)), but the line at \\( x = 0 \\) gives \\( y = -3 \\), and the line never rises fast enough to catch the parabola.'
                }
            ],
            finalAnswer: 'No real solutions — discriminant \\(= -15 < 0\\), so the line does not meet the curve.'
        }
    },

    {
        id: 'ise5-028',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 28',
        difficulty: 'Standard',
        questionText: 'Show that the line \\( y = 2x + 5 \\) does not intersect the circle \\( x^2 + y^2 = 1 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['discriminant', 'circle', 'no real solutions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute the line into the circle equation.',
                    workingLatex: 'x^2 + (2x + 5)^2 = 1',
                    explanation: 'Replace \\( y \\) in the circle equation with the linear expression so the system reduces to a single quadratic in \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and simplify.',
                    workingLatex: 'x^2 + 4x^2 + 20x + 25 = 1 \\implies 5x^2 + 20x + 24 = 0',
                    explanation: 'Expand \\( (2x+5)^2 = 4x^2 + 20x + 25 \\), then bring the \\( 1 \\) across to the left-hand side.'
                },
                {
                    stepNumber: 3,
                    description: 'Compute the discriminant.',
                    workingLatex: 'b^2 - 4ac = 20^2 - 4(5)(24) = 400 - 480 = -80',
                    explanation: 'A negative discriminant means the quadratic has no real solutions, so there is no real \\( x \\) at which the line meets the circle.'
                },
                {
                    stepNumber: 4,
                    description: 'Geometric interpretation.',
                    workingLatex: '\\text{discriminant } < 0 \\implies \\text{no intersection.}',
                    explanation: 'The perpendicular distance from the origin to the line \\( 2x - y + 5 = 0 \\) is \\( \\tfrac{5}{\\sqrt{5}} = \\sqrt{5} > 1 \\), which exceeds the radius — confirming the line lies entirely outside the unit circle.'
                }
            ],
            finalAnswer: 'No real intersection — discriminant \\(= -80 < 0\\), so the line does not meet the circle.'
        }
    },

    {
        id: 'ise5-029',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 29',
        difficulty: 'Standard',
        questionText: 'Show that the line \\( y = -x - 5 \\) does not meet the curve \\( y = x^2 - 3x + 2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['discriminant', 'no real solutions', 'simultaneous equations'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Equate the expressions for \\( y \\).',
                    workingLatex: '-x - 5 = x^2 - 3x + 2',
                    explanation: 'Set the two right-hand sides equal.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: 'x^2 - 2x + 7 = 0',
                    explanation: '\\( -3x - (-x) = -2x \\), \\( 2 - (-5) = 7 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Compute the discriminant.',
                    workingLatex: 'b^2 - 4ac = 4 - 28 = -24 < 0',
                    explanation: 'Negative discriminant — there are no real roots, so the line and curve do not meet.'
                }
            ],
            finalAnswer: 'No real intersection; discriminant \\(= -24 < 0\\).'
        }
    },

    {
        id: 'ise5-030',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 30',
        difficulty: 'Standard',
        questionText: 'Show that the line \\( y = 3x + 4 \\) does not intersect the curve \\( y = x^2 + x + 6 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['discriminant', 'no real solutions', 'simultaneous equations'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Equate the right-hand sides.',
                    workingLatex: '3x + 4 = x^2 + x + 6',
                    explanation: 'Eliminate \\( y \\) by setting the two expressions for \\( y \\) equal at any potential intersection.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to standard form.',
                    workingLatex: 'x^2 - 2x + 2 = 0',
                    explanation: 'Move everything to one side: \\( x - 3x = -2x \\) and \\( 6 - 4 = 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Compute the discriminant.',
                    workingLatex: 'b^2 - 4ac = (-2)^2 - 4(1)(2) = 4 - 8 = -4',
                    explanation: 'A negative discriminant means the quadratic has no real roots, so there is no real \\( x \\) at which the line meets the curve.'
                },
                {
                    stepNumber: 4,
                    description: 'Geometric interpretation.',
                    workingLatex: '\\text{discriminant } < 0 \\implies \\text{line misses the curve entirely.}',
                    explanation: 'Completing the square, \\( x^2 + x + 6 - (3x+4) = (x-1)^2 + 1 \\geq 1 > 0 \\) for every real \\( x \\), so the curve sits strictly above the line.'
                }
            ],
            finalAnswer: 'No real intersection — discriminant \\(= -4 < 0\\), so the line does not meet the curve.'
        }
    },

    // Q31–Q34: xy = k with a linear

    {
        id: 'ise5-031',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 31',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( x + y = 5 \\) and \\( xy = 6 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'hyperbola', 'xy product', 'substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation.',
                    workingLatex: 'y = 5 - x',
                    explanation: 'Make \\( y \\) the subject of the simpler equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into \\( xy = 6 \\).',
                    workingLatex: 'x(5 - x) = 6 \\implies 5x - x^2 = 6',
                    explanation: 'Distribute, then bring everything to one side.'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange and factorise.',
                    workingLatex: 'x^2 - 5x + 6 = 0 \\implies (x - 2)(x - 3) = 0 \\implies x = 2 \\text{ or } x = 3',
                    explanation: 'Two numbers with product 6 and sum \\( -5 \\): \\( -2, -3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find each \\( y \\) from \\( y = 5 - x \\).',
                    workingLatex: 'x = 2 \\Rightarrow y = 3; \\qquad x = 3 \\Rightarrow y = 2',
                    explanation: 'The system is symmetric in \\( x \\) and \\( y \\), so swapping their roles gives the other solution.'
                }
            ],
            finalAnswer: '\\((x, y) = (2, 3)\\) and \\((x, y) = (3, 2)\\)'
        }
    },

    {
        id: 'ise5-032',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 32',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( 2x + y = 7 \\) and \\( xy = 6 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'hyperbola', 'xy product', 'substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation.',
                    workingLatex: 'y = 7 - 2x',
                    explanation: 'Make \\( y \\) the subject.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into \\( xy = 6 \\).',
                    workingLatex: 'x(7 - 2x) = 6 \\implies 7x - 2x^2 = 6',
                    explanation: 'Distribute over the bracket.'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange and factorise.',
                    workingLatex: '2x^2 - 7x + 6 = 0 \\implies (2x - 3)(x - 2) = 0 \\implies x = \\dfrac{3}{2} \\text{ or } x = 2',
                    explanation: 'Multiply: \\( 2x \\cdot x = 2x^2 \\), \\( 2x \\cdot (-2) + (-3) \\cdot x = -4x - 3x = -7x \\), \\( (-3)(-2) = 6 \\). Check.'
                },
                {
                    stepNumber: 4,
                    description: 'Find each \\( y \\) from \\( y = 7 - 2x \\).',
                    workingLatex: 'x = \\dfrac{3}{2} \\Rightarrow y = 4; \\qquad x = 2 \\Rightarrow y = 3',
                    explanation: 'Quick check: \\( \\tfrac{3}{2} \\times 4 = 6 \\checkmark \\) and \\( 2 \\times 3 = 6 \\checkmark \\).'
                }
            ],
            finalAnswer: '\\((x, y) = \\left(\\dfrac{3}{2}, 4\\right)\\) and \\((x, y) = (2, 3)\\)'
        }
    },

    {
        id: 'ise5-033',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 33',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( x - y = 1 \\) and \\( xy = 12 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'hyperbola', 'xy product', 'substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange.',
                    workingLatex: 'x = y + 1',
                    explanation: 'Making \\( x \\) the subject is just as valid as making \\( y \\) the subject.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into \\( xy = 12 \\).',
                    workingLatex: '(y + 1)y = 12 \\implies y^2 + y - 12 = 0',
                    explanation: 'Expand and bring everything to one side.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(y + 4)(y - 3) = 0 \\implies y = -4 \\text{ or } y = 3',
                    explanation: 'Two numbers multiplying to \\( -12 \\) and summing to \\( 1 \\): \\( +4 \\) and \\( -3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find each \\( x \\) from \\( x = y + 1 \\).',
                    workingLatex: 'y = -4 \\Rightarrow x = -3; \\qquad y = 3 \\Rightarrow x = 4',
                    explanation: 'Sanity check the product: \\( (-3)(-4) = 12 \\checkmark \\) and \\( 4 \\times 3 = 12 \\checkmark \\).'
                }
            ],
            finalAnswer: '\\((x, y) = (-3, -4)\\) and \\((x, y) = (4, 3)\\)'
        }
    },

    {
        id: 'ise5-034',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 34',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( 3x + 2y = 12 \\) and \\( xy = 6 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'hyperbola', 'xy product', 'quadratic formula'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation.',
                    workingLatex: 'y = \\dfrac{12 - 3x}{2}',
                    explanation: 'Make \\( y \\) the subject.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into \\( xy = 6 \\).',
                    workingLatex: 'x \\cdot \\dfrac{12 - 3x}{2} = 6 \\implies x(12 - 3x) = 12',
                    explanation: 'Multiply both sides by 2 to clear the fraction.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and rearrange.',
                    workingLatex: '12x - 3x^2 = 12 \\implies 3x^2 - 12x + 12 = 0 \\implies x^2 - 4x + 4 = 0',
                    explanation: 'Divide through by 3 for cleaner numbers.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve.',
                    workingLatex: '(x - 2)^2 = 0 \\implies x = 2',
                    explanation: 'A perfect square — there is exactly one repeated solution, meaning the line is tangent to the rectangular hyperbola.'
                },
                {
                    stepNumber: 5,
                    description: 'Find \\( y \\).',
                    workingLatex: 'y = \\dfrac{12 - 6}{2} = 3',
                    explanation: 'Substitute \\( x = 2 \\) into the rearranged linear.'
                }
            ],
            finalAnswer: '\\((x, y) = (2, 3)\\); the line is tangent to the hyperbola \\(xy = 6\\) at this point.'
        }
    },

    // Q35–Q38: Geometric framings — circle intersections

    {
        id: 'ise5-035',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 35',
        difficulty: 'Standard',
        questionText: 'Find the points of intersection of the line \\( y = 2x - 1 \\) with the circle \\( x^2 + y^2 = 25 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'circle', 'substitution', 'intersection'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = 2x - 1 \\) into the circle.',
                    workingLatex: 'x^2 + (2x - 1)^2 = 25',
                    explanation: 'Bracket the linear expression before squaring to avoid sign errors.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand.',
                    workingLatex: 'x^2 + 4x^2 - 4x + 1 = 25 \\implies 5x^2 - 4x - 24 = 0',
                    explanation: '\\( (2x-1)^2 = 4x^2 - 4x + 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve the quadratic.',
                    workingLatex: 'x = \\dfrac{4 \\pm \\sqrt{16 + 480}}{10} = \\dfrac{4 \\pm \\sqrt{496}}{10}',
                    explanation: 'Discriminant \\( 16 + 480 = 496 = 16 \\times 31 \\), so \\( \\sqrt{496} = 4\\sqrt{31} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify.',
                    workingLatex: 'x = \\dfrac{4 \\pm 4\\sqrt{31}}{10} = \\dfrac{2 \\pm 2\\sqrt{31}}{5}',
                    explanation: 'Divide numerator and denominator by 2.'
                },
                {
                    stepNumber: 5,
                    description: 'Find each \\( y \\) from \\( y = 2x - 1 \\).',
                    workingLatex: 'y = 2 \\cdot \\dfrac{2 \\pm 2\\sqrt{31}}{5} - 1 = \\dfrac{4 \\pm 4\\sqrt{31}}{5} - \\dfrac{5}{5} = \\dfrac{-1 \\pm 4\\sqrt{31}}{5}',
                    explanation: 'Combine over a common denominator.'
                }
            ],
            finalAnswer: '\\((x, y) = \\left(\\dfrac{2 + 2\\sqrt{31}}{5}, \\dfrac{-1 + 4\\sqrt{31}}{5}\\right)\\) and \\(\\left(\\dfrac{2 - 2\\sqrt{31}}{5}, \\dfrac{-1 - 4\\sqrt{31}}{5}\\right)\\)'
        }
    },

    {
        id: 'ise5-036',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 36',
        difficulty: 'Standard',
        questionText: 'Find the points where the line \\( x + 2y = 5 \\) meets the circle \\( x^2 + y^2 = 10 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'circle', 'rearrange linear', 'intersection'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation.',
                    workingLatex: 'x = 5 - 2y',
                    explanation: 'Make \\( x \\) the subject.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the circle.',
                    workingLatex: '(5 - 2y)^2 + y^2 = 10',
                    explanation: 'Replace \\( x \\) with \\( 5 - 2y \\) in the circle equation.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and simplify.',
                    workingLatex: '25 - 20y + 4y^2 + y^2 = 10 \\implies 5y^2 - 20y + 15 = 0 \\implies y^2 - 4y + 3 = 0',
                    explanation: 'Divide through by 5 for friendlier numbers.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise.',
                    workingLatex: '(y - 1)(y - 3) = 0 \\implies y = 1 \\text{ or } y = 3',
                    explanation: 'Product 3, sum \\( -4 \\): \\( -1, -3 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find each \\( x \\) from \\( x = 5 - 2y \\).',
                    workingLatex: 'y = 1 \\Rightarrow x = 3; \\qquad y = 3 \\Rightarrow x = -1',
                    explanation: 'Sanity check: \\( 3^2 + 1^2 = 10 \\checkmark \\), \\( (-1)^2 + 3^2 = 10 \\checkmark \\).'
                }
            ],
            finalAnswer: '\\((x, y) = (3, 1)\\) and \\((x, y) = (-1, 3)\\)'
        }
    },

    {
        id: 'ise5-037',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 37',
        difficulty: 'Standard',
        questionText: 'Find the intersection points of the line \\( y = x \\) with the circle \\( (x - 2)^2 + (y - 1)^2 = 5 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'circle', 'shifted circle', 'intersection'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = x \\) into the circle.',
                    workingLatex: '(x - 2)^2 + (x - 1)^2 = 5',
                    explanation: 'Both \\( x \\) and \\( y \\) appear in the brackets — replacing \\( y \\) with \\( x \\) is straightforward.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand.',
                    workingLatex: 'x^2 - 4x + 4 + x^2 - 2x + 1 = 5 \\implies 2x^2 - 6x = 0',
                    explanation: 'Combine like terms and move the constant to the left.'
                },
                {
                    stepNumber: 3,
                    description: 'Factor and solve.',
                    workingLatex: '2x(x - 3) = 0 \\implies x = 0 \\text{ or } x = 3',
                    explanation: 'Factor out \\( 2x \\) from both terms.'
                },
                {
                    stepNumber: 4,
                    description: 'Find each \\( y \\) using \\( y = x \\).',
                    workingLatex: 'x = 0 \\Rightarrow y = 0; \\qquad x = 3 \\Rightarrow y = 3',
                    explanation: 'Verify: \\( (0-2)^2 + (0-1)^2 = 4 + 1 = 5 \\checkmark \\) and \\( (3-2)^2 + (3-1)^2 = 1 + 4 = 5 \\checkmark \\).'
                }
            ],
            finalAnswer: '\\((x, y) = (0, 0)\\) and \\((x, y) = (3, 3)\\)'
        }
    },

    {
        id: 'ise5-038',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 38',
        difficulty: 'Standard',
        questionText: 'Find the points of intersection of the line \\( y = -x + 4 \\) with the circle \\( x^2 + y^2 = 8 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'circle', 'tangent', 'discriminant'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute the line into the circle.',
                    workingLatex: 'x^2 + (-x + 4)^2 = 8',
                    explanation: 'Replace \\( y \\) with \\( -x + 4 \\) and square the whole thing.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand.',
                    workingLatex: 'x^2 + x^2 - 8x + 16 = 8 \\implies 2x^2 - 8x + 8 = 0 \\implies x^2 - 4x + 4 = 0',
                    explanation: '\\( (-x+4)^2 = x^2 - 8x + 16 \\). Divide by 2 to simplify.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve.',
                    workingLatex: '(x - 2)^2 = 0 \\implies x = 2',
                    explanation: 'A repeated root — the line is tangent to the circle.'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\).',
                    workingLatex: 'y = -2 + 4 = 2',
                    explanation: 'Substitute into the linear equation.'
                }
            ],
            finalAnswer: 'The line is tangent to the circle at \\((2, 2)\\).'
        }
    },

    // ── Challenge (Q39–Q50) ──────────────────────────────────────────────

    // Q39–Q42: Find k so line is tangent (discriminant = 0)

    {
        id: 'ise5-039',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 39',
        difficulty: 'Challenge',
        questionText: 'Find the value of \\( k \\) such that the line \\( y = 2x + k \\) is tangent to the curve \\( y = x^2 \\). State the point of contact.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['tangent', 'discriminant', 'find unknown', 'simultaneous equations'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up the simultaneous equations and equate.',
                    workingLatex: 'x^2 = 2x + k \\implies x^2 - 2x - k = 0',
                    explanation: 'For a tangent, the resulting quadratic in \\( x \\) must have a single (repeated) root — i.e. discriminant zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Set the discriminant to zero.',
                    workingLatex: 'b^2 - 4ac = 4 + 4k = 0 \\implies k = -1',
                    explanation: 'Tangency is the algebraic statement "discriminant = 0".'
                },
                {
                    stepNumber: 3,
                    description: 'Find the tangent point by solving the (now perfect-square) quadratic.',
                    workingLatex: 'x^2 - 2x + 1 = 0 \\implies (x - 1)^2 = 0 \\implies x = 1',
                    explanation: 'Substitute \\( k = -1 \\) back into the quadratic. The repeated root is the \\( x \\)-coordinate of the tangent point.'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\).',
                    workingLatex: 'y = 2(1) + (-1) = 1',
                    explanation: 'Substitute \\( x = 1 \\) into the linear (with \\( k = -1 \\)).'
                }
            ],
            finalAnswer: '\\(k = -1\\); the tangent point is \\((1, 1)\\).'
        }
    },

    {
        id: 'ise5-040',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 40',
        difficulty: 'Challenge',
        questionText: 'Find the values of \\( k \\) for which the line \\( y = x + k \\) is tangent to the circle \\( x^2 + y^2 = 8 \\). State each point of contact.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['tangent', 'discriminant', 'circle', 'find unknown'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute the line into the circle.',
                    workingLatex: 'x^2 + (x + k)^2 = 8',
                    explanation: 'Replace \\( y \\) with \\( x + k \\) in the circle.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and simplify.',
                    workingLatex: 'x^2 + x^2 + 2kx + k^2 = 8 \\implies 2x^2 + 2kx + (k^2 - 8) = 0',
                    explanation: 'A quadratic in \\( x \\) with coefficients depending on \\( k \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the tangency condition: discriminant zero.',
                    workingLatex: '(2k)^2 - 4(2)(k^2 - 8) = 0 \\implies 4k^2 - 8k^2 + 64 = 0 \\implies -4k^2 = -64 \\implies k = \\pm 4',
                    explanation: 'Two tangent lines exist — one above the circle and one below — corresponding to the two values of \\( k \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the tangent points. For \\( k = 4 \\):',
                    workingLatex: '2x^2 + 8x + 8 = 0 \\implies x^2 + 4x + 4 = 0 \\implies (x + 2)^2 = 0 \\implies x = -2, \\; y = 2',
                    explanation: 'A perfect-square trinomial with repeated root \\( x = -2 \\), giving the tangent point \\( (-2, 2) \\).'
                },
                {
                    stepNumber: 5,
                    description: 'For \\( k = -4 \\):',
                    workingLatex: '2x^2 - 8x + 8 = 0 \\implies (x - 2)^2 = 0 \\implies x = 2, \\; y = -2',
                    explanation: 'Tangent point \\( (2, -2) \\). The two tangent points are diametrically opposite on the circle.'
                }
            ],
            finalAnswer: '\\(k = 4\\); tangent at \\((-2, 2)\\). \\(k = -4\\); tangent at \\((2, -2)\\).'
        }
    },

    {
        id: 'ise5-041',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 41',
        difficulty: 'Challenge',
        questionText: 'The line \\( y = mx + 1 \\) is tangent to the curve \\( y = x^2 + 2 \\). Find the possible values of \\( m \\) and the corresponding points of contact.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['tangent', 'discriminant', 'find unknown', 'simultaneous equations'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Equate the two expressions.',
                    workingLatex: 'mx + 1 = x^2 + 2 \\implies x^2 - mx + 1 = 0',
                    explanation: 'Set the right-hand sides equal and rearrange into the standard quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the tangency condition.',
                    workingLatex: '(-m)^2 - 4(1)(1) = 0 \\implies m^2 = 4 \\implies m = \\pm 2',
                    explanation: 'Discriminant zero gives two valid gradients — there are exactly two lines through \\( (0, 1) \\) tangent to the parabola.'
                },
                {
                    stepNumber: 3,
                    description: 'For \\( m = 2 \\), find the tangent point.',
                    workingLatex: 'x^2 - 2x + 1 = 0 \\implies (x - 1)^2 = 0 \\implies x = 1, \\; y = 2(1) + 1 = 3',
                    explanation: 'Substitute and solve the perfect-square equation; tangent point \\( (1, 3) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'For \\( m = -2 \\):',
                    workingLatex: 'x^2 + 2x + 1 = 0 \\implies (x + 1)^2 = 0 \\implies x = -1, \\; y = -2(-1) + 1 = 3',
                    explanation: 'Tangent point \\( (-1, 3) \\). By symmetry of \\( y = x^2 + 2 \\) about the \\( y \\)-axis, the two tangent points have the same \\( y \\)-coordinate.'
                }
            ],
            finalAnswer: '\\(m = 2\\); tangent at \\((1, 3)\\). \\(m = -2\\); tangent at \\((-1, 3)\\).'
        }
    },

    {
        id: 'ise5-042',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 42',
        difficulty: 'Challenge',
        questionText: 'Find the range of values of \\( k \\) for which the line \\( y = 2x + k \\) meets the curve \\( y = x^2 + 1 \\) at two distinct points.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['discriminant', 'range of values', 'simultaneous equations', 'inequality'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Equate and rearrange.',
                    workingLatex: '2x + k = x^2 + 1 \\implies x^2 - 2x + (1 - k) = 0',
                    explanation: 'A quadratic in \\( x \\) whose coefficients depend on \\( k \\).'
                },
                {
                    stepNumber: 2,
                    description: 'For two distinct intersection points, demand discriminant > 0.',
                    workingLatex: '(-2)^2 - 4(1)(1 - k) > 0 \\implies 4 - 4 + 4k > 0 \\implies 4k > 0 \\implies k > 0',
                    explanation: 'Two distinct real roots correspond to two distinct intersection points. Discriminant > 0 is exactly this condition.'
                },
                {
                    stepNumber: 3,
                    description: 'Interpret.',
                    workingLatex: 'k > 0',
                    explanation: 'When \\( k = 0 \\) the line is tangent (one intersection); when \\( k < 0 \\) it misses the curve; when \\( k > 0 \\) it cuts twice.'
                }
            ],
            finalAnswer: '\\(k > 0\\)'
        }
    },

    // Q43–Q45: Two quadratics

    {
        id: 'ise5-043',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 43',
        difficulty: 'Challenge',
        questionText: 'Find the points of intersection of the curves \\( y = x^2 \\) and \\( y = 4 - x^2 \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'two quadratics', 'intersection'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the two expressions for \\( y \\) equal.',
                    workingLatex: 'x^2 = 4 - x^2 \\implies 2x^2 = 4 \\implies x^2 = 2',
                    explanation: 'Even though both equations are quadratic, the standard technique still works: equate the right-hand sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\pm \\sqrt{2}',
                    explanation: 'Take square roots, remembering both the positive and negative.'
                },
                {
                    stepNumber: 3,
                    description: 'Find each \\( y \\).',
                    workingLatex: 'y = x^2 = 2',
                    explanation: 'Either curve will give the same value of \\( y \\) for each \\( x \\) — that is the whole point of an intersection.'
                }
            ],
            finalAnswer: '\\((x, y) = (\\sqrt{2}, 2)\\) and \\((x, y) = (-\\sqrt{2}, 2)\\)'
        }
    },

    {
        id: 'ise5-044',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 44',
        difficulty: 'Challenge',
        questionText: 'Find the points of intersection of the parabolas \\( y = x^2 - 2x \\) and \\( y = -x^2 + 4x - 2 \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'two quadratics', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Equate the right-hand sides.',
                    workingLatex: 'x^2 - 2x = -x^2 + 4x - 2',
                    explanation: 'Set the two expressions for \\( y \\) equal.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: '2x^2 - 6x + 2 = 0 \\implies x^2 - 3x + 1 = 0',
                    explanation: 'Add \\( x^2 \\) and subtract \\( 4x - 2 \\); then divide through by 2.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\dfrac{3 \\pm \\sqrt{9 - 4}}{2} = \\dfrac{3 \\pm \\sqrt{5}}{2}',
                    explanation: 'Discriminant 5 is not a perfect square, so the roots are irrational.'
                },
                {
                    stepNumber: 4,
                    description: 'Find each \\( y \\) — use the simpler curve \\( y = x^2 - 2x = x(x - 2) \\).',
                    workingLatex: 'x = \\dfrac{3 + \\sqrt{5}}{2} \\Rightarrow x - 2 = \\dfrac{-1 + \\sqrt{5}}{2}, \\; y = \\dfrac{(3 + \\sqrt{5})(-1 + \\sqrt{5})}{4} = \\dfrac{-3 + 3\\sqrt{5} - \\sqrt{5} + 5}{4} = \\dfrac{2 + 2\\sqrt{5}}{4} = \\dfrac{1 + \\sqrt{5}}{2}',
                    explanation: 'Expand the product carefully, then simplify.'
                },
                {
                    stepNumber: 5,
                    description: 'Similarly for the other root.',
                    workingLatex: 'x = \\dfrac{3 - \\sqrt{5}}{2} \\Rightarrow y = \\dfrac{1 - \\sqrt{5}}{2}',
                    explanation: 'Replace \\( \\sqrt{5} \\) by \\( -\\sqrt{5} \\) throughout the previous computation.'
                }
            ],
            finalAnswer: '\\((x, y) = \\left(\\dfrac{3 + \\sqrt{5}}{2}, \\dfrac{1 + \\sqrt{5}}{2}\\right)\\) and \\(\\left(\\dfrac{3 - \\sqrt{5}}{2}, \\dfrac{1 - \\sqrt{5}}{2}\\right)\\)'
        }
    },

    {
        id: 'ise5-045',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 45',
        difficulty: 'Challenge',
        questionText: 'Find the points where the parabola \\( y = x^2 - 3 \\) meets the circle \\( x^2 + y^2 = 9 \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'parabola', 'circle', 'substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = x^2 - 3 \\) into the circle.',
                    workingLatex: 'x^2 + (x^2 - 3)^2 = 9',
                    explanation: 'Replace \\( y \\) in the circle equation. This is genuinely a quartic in \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand.',
                    workingLatex: 'x^2 + x^4 - 6x^2 + 9 = 9 \\implies x^4 - 5x^2 = 0',
                    explanation: 'Expand \\( (x^2 - 3)^2 = x^4 - 6x^2 + 9 \\) and cancel the constants.'
                },
                {
                    stepNumber: 3,
                    description: 'Factor.',
                    workingLatex: 'x^2(x^2 - 5) = 0 \\implies x = 0 \\text{ or } x = \\pm \\sqrt{5}',
                    explanation: 'Treat as a quadratic in \\( x^2 \\) — or factor out \\( x^2 \\) directly. Three distinct \\( x \\)-values (with \\( x = 0 \\) repeated).'
                },
                {
                    stepNumber: 4,
                    description: 'Find each \\( y \\) using \\( y = x^2 - 3 \\).',
                    workingLatex: 'x = 0 \\Rightarrow y = -3; \\qquad x = \\pm \\sqrt{5} \\Rightarrow y = 5 - 3 = 2',
                    explanation: 'Now we have three intersection points: \\( (0, -3) \\), \\( (\\sqrt{5}, 2) \\), \\( (-\\sqrt{5}, 2) \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Verify on the circle.',
                    workingLatex: '0^2 + (-3)^2 = 9 \\checkmark; \\qquad 5 + 4 = 9 \\checkmark',
                    explanation: 'All three points lie on the circle. The parabola is tangent to the circle at the bottom point and crosses it twice further up.'
                }
            ],
            finalAnswer: '\\((x, y) = (0, -3)\\), \\((\\sqrt{5}, 2)\\) and \\((-\\sqrt{5}, 2)\\)'
        }
    },

    // Q46–Q48: Word problems

    {
        id: 'ise5-046',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 46',
        difficulty: 'Challenge',
        questionText: 'A rectangle has perimeter 22 cm and area 28 cm\\(^2\\). Find the lengths of its sides.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['word problem', 'rectangle', 'simultaneous equations', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( x \\) and \\( y \\) denote the side lengths and write down the two given conditions.',
                    workingLatex: '2(x + y) = 22 \\implies x + y = 11; \\qquad xy = 28',
                    explanation: 'A rectangle of sides \\( x \\) and \\( y \\) has perimeter \\( 2(x+y) \\) and area \\( xy \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Make \\( y \\) the subject of the linear equation.',
                    workingLatex: 'y = 11 - x',
                    explanation: 'This lets you substitute into the area equation.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute and form a quadratic.',
                    workingLatex: 'x(11 - x) = 28 \\implies 11x - x^2 = 28 \\implies x^2 - 11x + 28 = 0',
                    explanation: 'Move everything to one side so the leading coefficient is positive.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise.',
                    workingLatex: '(x - 4)(x - 7) = 0 \\implies x = 4 \\text{ or } x = 7',
                    explanation: 'Product 28, sum \\( -11 \\): \\( -4, -7 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find the partner length.',
                    workingLatex: 'x = 4 \\Rightarrow y = 7; \\qquad x = 7 \\Rightarrow y = 4',
                    explanation: 'The two solutions correspond to the same rectangle with the role of "length" and "width" swapped.'
                }
            ],
            finalAnswer: 'The sides are \\(4\\) cm and \\(7\\) cm.'
        }
    },

    {
        id: 'ise5-047',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 47',
        difficulty: 'Challenge',
        questionText: 'The sum of two positive numbers is 12 and the sum of their squares is 80. Find the two numbers.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['word problem', 'simultaneous equations', 'quadratic', 'sum of squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let the numbers be \\( x \\) and \\( y \\), and translate the conditions.',
                    workingLatex: 'x + y = 12; \\qquad x^2 + y^2 = 80',
                    explanation: 'One linear, one quadratic — classic structure for substitution.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange the linear equation.',
                    workingLatex: 'y = 12 - x',
                    explanation: 'Make \\( y \\) the subject so it can be substituted into the quadratic.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute.',
                    workingLatex: 'x^2 + (12 - x)^2 = 80',
                    explanation: 'Bracket the linear expression before squaring.'
                },
                {
                    stepNumber: 4,
                    description: 'Expand and simplify.',
                    workingLatex: 'x^2 + 144 - 24x + x^2 = 80 \\implies 2x^2 - 24x + 64 = 0 \\implies x^2 - 12x + 32 = 0',
                    explanation: 'Divide through by 2 to simplify.'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise.',
                    workingLatex: '(x - 4)(x - 8) = 0 \\implies x = 4 \\text{ or } x = 8',
                    explanation: 'Product 32, sum \\( -12 \\): \\( -4 \\) and \\( -8 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Find each partner number.',
                    workingLatex: 'x = 4 \\Rightarrow y = 8; \\qquad x = 8 \\Rightarrow y = 4',
                    explanation: 'Both solutions describe the same unordered pair of numbers.'
                }
            ],
            finalAnswer: 'The two numbers are \\(4\\) and \\(8\\).'
        }
    },

    {
        id: 'ise5-048',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 48',
        difficulty: 'Challenge',
        questionText: 'A right-angled triangle has hypotenuse 13 cm and perimeter 30 cm. Find the lengths of the two shorter sides.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['word problem', 'right-angled triangle', 'simultaneous equations', 'Pythagoras'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let the two shorter sides be \\( x \\) and \\( y \\). Translate the conditions.',
                    workingLatex: 'x + y + 13 = 30 \\implies x + y = 17; \\qquad x^2 + y^2 = 13^2 = 169',
                    explanation: 'The perimeter equation is linear and Pythagoras gives the quadratic constraint.'
                },
                {
                    stepNumber: 2,
                    description: 'Make \\( y \\) the subject of the linear equation.',
                    workingLatex: 'y = 17 - x',
                    explanation: 'Ready for substitution.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute into Pythagoras.',
                    workingLatex: 'x^2 + (17 - x)^2 = 169',
                    explanation: 'Bracket before squaring.'
                },
                {
                    stepNumber: 4,
                    description: 'Expand and simplify.',
                    workingLatex: 'x^2 + 289 - 34x + x^2 = 169 \\implies 2x^2 - 34x + 120 = 0 \\implies x^2 - 17x + 60 = 0',
                    explanation: 'Divide through by 2.'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise.',
                    workingLatex: '(x - 5)(x - 12) = 0 \\implies x = 5 \\text{ or } x = 12',
                    explanation: 'Product 60, sum \\( -17 \\): \\( -5 \\) and \\( -12 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Find the partner side and check.',
                    workingLatex: 'x = 5 \\Rightarrow y = 12; \\qquad 5^2 + 12^2 = 25 + 144 = 169 \\checkmark',
                    explanation: 'This is the classic 5-12-13 Pythagorean triple. Both solutions describe the same triangle, just with the labels of the legs swapped.'
                }
            ],
            finalAnswer: 'The two shorter sides are \\(5\\) cm and \\(12\\) cm.'
        }
    },

    // Q49–Q50: Multi-part exam-style

    {
        id: 'ise5-049',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 49',
        difficulty: 'Challenge',
        questionText: 'The line \\( y = x + 2 \\) meets the curve \\( y = x^2 - 4x + 8 \\) at points \\( A \\) and \\( B \\). Find the coordinates of \\( A \\) and \\( B \\), and hence the length \\( AB \\) in exact form.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'length', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Equate the two expressions for \\( y \\).',
                    workingLatex: 'x + 2 = x^2 - 4x + 8',
                    explanation: 'Set the right-hand sides equal at the intersection points.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: 'x^2 - 5x + 6 = 0',
                    explanation: '\\( -4x - x = -5x \\), \\( 8 - 2 = 6 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(x - 2)(x - 3) = 0 \\implies x = 2 \\text{ or } x = 3',
                    explanation: 'Product 6, sum \\( -5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find each \\( y \\) and so the coordinates.',
                    workingLatex: 'x = 2 \\Rightarrow y = 4; \\qquad x = 3 \\Rightarrow y = 5',
                    explanation: 'So \\( A = (2, 4) \\) and \\( B = (3, 5) \\) (the labelling is arbitrary).'
                },
                {
                    stepNumber: 5,
                    description: 'Compute \\( AB \\) using the distance formula.',
                    workingLatex: 'AB = \\sqrt{(3 - 2)^2 + (5 - 4)^2} = \\sqrt{1 + 1} = \\sqrt{2}',
                    explanation: '\\( AB^2 = (\\Delta x)^2 + (\\Delta y)^2 \\). Leave the answer in exact surd form unless asked otherwise.'
                }
            ],
            finalAnswer: '\\(A = (2, 4)\\), \\(B = (3, 5)\\); \\(AB = \\sqrt{2}\\)'
        }
    },

    {
        id: 'ise5-050',
        topicRef: 'ise5',
        topicTitle: 'Simultaneous Equations (Quadratic) 50',
        difficulty: 'Challenge',
        questionText: 'The line \\( y = 2x + 1 \\) meets the circle \\( x^2 + y^2 = 10 \\) at points \\( P \\) and \\( Q \\). Find the coordinates of \\( P \\) and \\( Q \\), the midpoint \\( M \\) of \\( PQ \\), and the length \\( PQ \\) in exact form.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'circle', 'midpoint', 'length', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute the line into the circle.',
                    workingLatex: 'x^2 + (2x + 1)^2 = 10',
                    explanation: 'Replace \\( y \\) with \\( 2x + 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and simplify.',
                    workingLatex: 'x^2 + 4x^2 + 4x + 1 = 10 \\implies 5x^2 + 4x - 9 = 0',
                    explanation: '\\( (2x+1)^2 = 4x^2 + 4x + 1 \\), then move everything to one side.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(5x + 9)(x - 1) = 0 \\implies x = -\\dfrac{9}{5} \\text{ or } x = 1',
                    explanation: 'Check the expansion: \\( 5x \\cdot x = 5x^2 \\), \\( 5x \\cdot (-1) + 9 \\cdot x = -5x + 9x = 4x \\), \\( 9 \\cdot (-1) = -9 \\). Good.'
                },
                {
                    stepNumber: 4,
                    description: 'Find each \\( y \\) from \\( y = 2x + 1 \\).',
                    workingLatex: 'x = 1 \\Rightarrow y = 3; \\qquad x = -\\dfrac{9}{5} \\Rightarrow y = -\\dfrac{13}{5}',
                    explanation: '\\( 2 \\cdot (-\\tfrac{9}{5}) + 1 = -\\tfrac{18}{5} + \\tfrac{5}{5} = -\\tfrac{13}{5} \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Compute the midpoint \\( M \\) of \\( PQ \\).',
                    workingLatex: 'M = \\left( \\dfrac{1 + (-\\tfrac{9}{5})}{2}, \\dfrac{3 + (-\\tfrac{13}{5})}{2} \\right) = \\left( \\dfrac{-\\tfrac{4}{5}}{2}, \\dfrac{\\tfrac{2}{5}}{2} \\right) = \\left( -\\dfrac{2}{5}, \\dfrac{1}{5} \\right)',
                    explanation: 'Midpoint is the average of the coordinates. Combine over common denominators first.'
                },
                {
                    stepNumber: 6,
                    description: 'Compute \\( PQ \\) using the distance formula.',
                    workingLatex: 'PQ = \\sqrt{\\left(1 + \\tfrac{9}{5}\\right)^2 + \\left(3 + \\tfrac{13}{5}\\right)^2} = \\sqrt{\\left(\\tfrac{14}{5}\\right)^2 + \\left(\\tfrac{28}{5}\\right)^2} = \\sqrt{\\dfrac{196 + 784}{25}} = \\sqrt{\\dfrac{980}{25}} = \\dfrac{\\sqrt{980}}{5} = \\dfrac{14\\sqrt{5}}{5}',
                    explanation: 'Note \\( \\tfrac{28}{5} = 2 \\cdot \\tfrac{14}{5} \\), so the second component is twice the first — consistent with a line of gradient 2. Simplify \\( \\sqrt{980} = \\sqrt{196 \\cdot 5} = 14\\sqrt{5} \\).'
                }
            ],
            finalAnswer: '\\(P = (1, 3)\\), \\(Q = \\left(-\\dfrac{9}{5}, -\\dfrac{13}{5}\\right)\\); midpoint \\(M = \\left(-\\dfrac{2}{5}, \\dfrac{1}{5}\\right)\\); \\(PQ = \\dfrac{14\\sqrt{5}}{5}\\)'
        }
    },

];
