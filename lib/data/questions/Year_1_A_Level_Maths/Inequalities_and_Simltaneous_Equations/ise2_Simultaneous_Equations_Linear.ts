import { Question } from "@/lib/types";

/**
 * Topic: The Discriminant
 * Ref:   a3
 */
export const questions: Question[] = [

    // ── Type A: Both linear — elimination method (Q1–Q12) ────────────────────

    {
        id: 'ise2-001',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 01',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 5x + 2y = 16 \\) and \\( 3x - 2y = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'linear', 'elimination', 'add equations'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Label the equations and notice the \\( y \\)-coefficients already match in magnitude.',
                    workingLatex: '\\textcircled{1}\\; 5x + 2y = 16 \\qquad \\textcircled{2}\\; 3x - 2y = 0',
                    explanation: 'The \\( y \\)-coefficients are \\( +2 \\) and \\( -2 \\), so adding eliminates \\( y \\) immediately.'
                },
                {
                    stepNumber: 2,
                    description: 'Add equations \\( \\textcircled{1} \\) and \\( \\textcircled{2} \\) to eliminate \\( y \\).',
                    workingLatex: '(5x + 2y) + (3x - 2y) = 16 + 0 \\implies 8x = 16 \\implies x = 2',
                    explanation: 'The \\( y \\) terms cancel out.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( x = 2 \\) into equation \\( \\textcircled{2} \\) to find \\( y \\).',
                    workingLatex: '3(2) - 2y = 0 \\implies 6 = 2y \\implies y = 3',
                    explanation: 'Choose the simpler equation to substitute back into.'
                },
                {
                    stepNumber: 4,
                    description: 'Check in equation \\( \\textcircled{1} \\).',
                    workingLatex: '5(2) + 2(3) = 10 + 6 = 16 \\checkmark',
                    explanation: 'Both values satisfy the first equation.'
                }
            ],
            finalAnswer: ' x = 2,\\; y = 3 '
        }
    },

    {
        id: 'ise2-002',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 02',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 4x + y = 14 \\) and \\( 2x - 3y = -8 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'linear', 'elimination', 'multiply one equation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Label the equations.',
                    workingLatex: '\\textcircled{1}\\; 4x + y = 14 \\qquad \\textcircled{2}\\; 2x - 3y = -8',
                    explanation: 'Equation \\( \\textcircled{1} \\) has \\( y \\) with coefficient \\( +1 \\), so multiplying \\( \\textcircled{1} \\) by 3 will make the \\( y \\)-coefficients \\( +3 \\) and \\( -3 \\). Adding then eliminates \\( y \\) cleanly.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply equation \\( \\textcircled{1} \\) by 3.',
                    workingLatex: '\\textcircled{3}\\; 12x + 3y = 42',
                    explanation: 'Multiplying every term by the same non-zero constant preserves the solution set — the new equation has identical solutions to the original.'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( \\textcircled{3} \\) and \\( \\textcircled{2} \\) to eliminate \\( y \\).',
                    workingLatex: '(12x + 3y) + (2x - 3y) = 42 + (-8) \\implies 14x = 34 \\implies x = \\tfrac{17}{7}',
                    explanation: 'The \\( y \\) terms cancel because their coefficients are opposite. A non-integer solution is perfectly valid — not every linear system has whole-number answers.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( x = \\tfrac{17}{7} \\) into equation \\( \\textcircled{1} \\) to find \\( y \\).',
                    workingLatex: 'y = 14 - 4 \\times \\tfrac{17}{7} = \\tfrac{98}{7} - \\tfrac{68}{7} = \\tfrac{30}{7}',
                    explanation: 'Back-substitute into the simpler equation. Use a common denominator: \\( 14 = \\tfrac{98}{7} \\), then subtract numerators.'
                },
                {
                    stepNumber: 5,
                    description: 'Check in equation \\( \\textcircled{2} \\).',
                    workingLatex: '2 \\times \\tfrac{17}{7} - 3 \\times \\tfrac{30}{7} = \\tfrac{34 - 90}{7} = \\tfrac{-56}{7} = -8 \\checkmark',
                    explanation: 'Always verify by substituting into the OTHER equation (not the one used for back-substitution) — this catches arithmetic slips.'
                }
            ],
            finalAnswer: ' x = \\dfrac{17}{7},\\; y = \\dfrac{30}{7} '
        }
    },

    {
        id: 'ise2-003',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 03',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 3x + 4y = 10 \\) and \\( 5x - 2y = 8 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'linear', 'elimination', 'multiply one equation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Label the equations.',
                    workingLatex: '\\textcircled{1}\\; 3x + 4y = 10 \\qquad \\textcircled{2}\\; 5x - 2y = 8',
                    explanation: 'Multiply \\( \\textcircled{2} \\) by 2 to match the \\( y \\)-coefficient.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply equation \\( \\textcircled{2} \\) by 2.',
                    workingLatex: '\\textcircled{3}\\; 10x - 4y = 16',
                    explanation: 'Now \\( y \\)-coefficients are \\( +4 \\) and \\( -4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( \\textcircled{1} \\) and \\( \\textcircled{3} \\) to eliminate \\( y \\).',
                    workingLatex: '(3x + 4y) + (10x - 4y) = 10 + 16 \\implies 13x = 26 \\implies x = 2',
                    explanation: 'The \\( y \\) terms cancel.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( x = 2 \\) into \\( \\textcircled{2} \\).',
                    workingLatex: '5(2) - 2y = 8 \\implies 10 - 2y = 8 \\implies y = 1',
                    explanation: 'Solve for \\( y \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check in \\( \\textcircled{1} \\).',
                    workingLatex: '3(2) + 4(1) = 6 + 4 = 10 \\checkmark',
                    explanation: 'The solution satisfies the first equation.'
                }
            ],
            finalAnswer: ' x = 2,\\; y = 1 '
        }
    },

    {
        id: 'ise2-004',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 04',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 7x - 3y = 11 \\) and \\( 4x + 5y = 33 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'linear', 'elimination', 'multiply both equations'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Label the equations.',
                    workingLatex: '\\textcircled{1}\\; 7x - 3y = 11 \\qquad \\textcircled{2}\\; 4x + 5y = 33',
                    explanation: 'Neither pair of coefficients matches, so we scale both equations to align the \\( y \\)-coefficients. Multiply \\( \\textcircled{1} \\) by 5 and \\( \\textcircled{2} \\) by 3 so the \\( y \\)-coefficients become \\( -15 \\) and \\( +15 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Scale both equations.',
                    workingLatex: '\\textcircled{3}\\; 35x - 15y = 55 \\qquad \\textcircled{4}\\; 12x + 15y = 99',
                    explanation: 'Scaling preserves the solution set of each equation. The \\( y \\)-coefficients are now opposite in sign, so adding will eliminate \\( y \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( \\textcircled{3} \\) and \\( \\textcircled{4} \\) to eliminate \\( y \\).',
                    workingLatex: '(35x - 15y) + (12x + 15y) = 55 + 99 \\implies 47x = 154 \\implies x = \\tfrac{154}{47}',
                    explanation: 'The \\( y \\) terms cancel. The fact that the answer is fractional is not an error — these particular coefficients simply do not produce integer solutions.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( x = \\tfrac{154}{47} \\) into \\( \\textcircled{1} \\) and solve for \\( y \\).',
                    workingLatex: '7 \\times \\tfrac{154}{47} - 3y = 11 \\implies \\tfrac{1078}{47} - 3y = \\tfrac{517}{47} \\implies 3y = \\tfrac{561}{47} \\implies y = \\tfrac{187}{47}',
                    explanation: 'Convert 11 to a fraction with denominator 47 (\\( 11 = \\tfrac{517}{47} \\)) before subtracting, then divide by 3. Sign track carefully when moving the \\( 3y \\) term across.'
                },
                {
                    stepNumber: 5,
                    description: 'Check in equation \\( \\textcircled{2} \\).',
                    workingLatex: '4 \\times \\tfrac{154}{47} + 5 \\times \\tfrac{187}{47} = \\tfrac{616 + 935}{47} = \\tfrac{1551}{47} = 33 \\checkmark',
                    explanation: 'Substitute both values into the equation NOT used for back-substitution to confirm correctness.'
                }
            ],
            finalAnswer: ' x = \\dfrac{154}{47},\\; y = \\dfrac{187}{47} '
        }
    },

    {
        id: 'ise2-005',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 05',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 2x + 5y = 19 \\) and \\( 6x - y = 1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'linear', 'elimination', 'multiply one equation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Label the equations.',
                    workingLatex: '\\textcircled{1}\\; 2x + 5y = 19 \\qquad \\textcircled{2}\\; 6x - y = 1',
                    explanation: 'Multiply \\( \\textcircled{2} \\) by 5 to match the \\( y \\)-coefficient.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply \\( \\textcircled{2} \\) by 5.',
                    workingLatex: '\\textcircled{3}\\; 30x - 5y = 5',
                    explanation: '\\( y \\)-coefficients are now \\( +5 \\) and \\( -5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( \\textcircled{1} \\) and \\( \\textcircled{3} \\).',
                    workingLatex: '(2x + 5y) + (30x - 5y) = 19 + 5 \\implies 32x = 24 \\implies x = \\tfrac{3}{4}',
                    explanation: 'The \\( y \\) terms cancel.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( x = \\tfrac{3}{4} \\) into \\( \\textcircled{2} \\).',
                    workingLatex: '6 \\times \\tfrac{3}{4} - y = 1 \\implies \\tfrac{9}{2} - y = 1 \\implies y = \\tfrac{7}{2}',
                    explanation: 'Solve for \\( y \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check in \\( \\textcircled{1} \\).',
                    workingLatex: '2 \\times \\tfrac{3}{4} + 5 \\times \\tfrac{7}{2} = \\tfrac{3}{2} + \\tfrac{35}{2} = \\tfrac{38}{2} = 19 \\checkmark',
                    explanation: 'Verified.'
                }
            ],
            finalAnswer: ' x = \\dfrac{3}{4},\\; y = \\dfrac{7}{2} '
        }
    },

    {
        id: 'ise2-006',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 06',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 5x + 3y = 7 \\) and \\( 2x - y = -8 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'linear', 'elimination', 'negative solution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Label the equations.',
                    workingLatex: '\\textcircled{1}\\; 5x + 3y = 7 \\qquad \\textcircled{2}\\; 2x - y = -8',
                    explanation: 'The \\( y \\)-coefficients are \\( +3 \\) and \\( -1 \\). Multiplying \\( \\textcircled{2} \\) by 3 makes them \\( +3 \\) and \\( -3 \\), so adding will eliminate \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply \\( \\textcircled{2} \\) by 3.',
                    workingLatex: '\\textcircled{3}\\; 6x - 3y = -24',
                    explanation: 'Multiplying every term by 3 keeps \\( \\textcircled{2} \\) true (linear combinations preserve solutions).'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( \\textcircled{1} \\) and \\( \\textcircled{3} \\) to eliminate \\( y \\).',
                    workingLatex: '(5x + 3y) + (6x - 3y) = 7 + (-24) \\implies 11x = -17 \\implies x = -\\tfrac{17}{11}',
                    explanation: 'The \\( y \\) terms cancel because their coefficients sum to zero. Negative and fractional values are valid solutions — keep going.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( x = -\\tfrac{17}{11} \\) into \\( \\textcircled{2} \\) to find \\( y \\).',
                    workingLatex: '2 \\times \\left(-\\tfrac{17}{11}\\right) - y = -8 \\implies -\\tfrac{34}{11} - y = -\\tfrac{88}{11} \\implies y = \\tfrac{54}{11}',
                    explanation: 'Equation \\( \\textcircled{2} \\) is simpler (\\( y \\) has coefficient \\( -1 \\)). Rewrite \\( -8 \\) as \\( -\\tfrac{88}{11} \\) so both sides share a denominator.'
                },
                {
                    stepNumber: 5,
                    description: 'Check in equation \\( \\textcircled{1} \\).',
                    workingLatex: '5 \\times \\left(-\\tfrac{17}{11}\\right) + 3 \\times \\tfrac{54}{11} = \\tfrac{-85 + 162}{11} = \\tfrac{77}{11} = 7 \\checkmark',
                    explanation: 'Substituting into the OTHER equation confirms both values are correct.'
                }
            ],
            finalAnswer: ' x = -\\dfrac{17}{11},\\; y = \\dfrac{54}{11} '
        }
    },

    {
        id: 'ise2-007',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 07',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 3x + 2y = 12 \\) and \\( x - 4y = -4 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'linear', 'elimination', 'integer solution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Label the equations.',
                    workingLatex: '\\textcircled{1}\\; 3x + 2y = 12 \\qquad \\textcircled{2}\\; x - 4y = -4',
                    explanation: 'Equation \\( \\textcircled{2} \\) has \\( x \\) with coefficient \\( +1 \\), so substitution is clean: rearrange \\( \\textcircled{2} \\) for \\( x \\) and substitute into \\( \\textcircled{1} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange \\( \\textcircled{2} \\) to express \\( x \\) in terms of \\( y \\).',
                    workingLatex: 'x = 4y - 4',
                    explanation: 'Add \\( 4y \\) to both sides. Keeping \\( x \\) isolated lets us substitute it cleanly into the other equation.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute into \\( \\textcircled{1} \\) and solve for \\( y \\).',
                    workingLatex: '3(4y - 4) + 2y = 12 \\implies 12y - 12 + 2y = 12 \\implies 14y = 24 \\implies y = \\tfrac{12}{7}',
                    explanation: 'Distribute the \\( 3 \\) carefully across both terms inside the bracket, then collect like terms. A fractional answer is perfectly valid.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( y = \\tfrac{12}{7} \\) back into the rearranged equation.',
                    workingLatex: 'x = 4 \\times \\tfrac{12}{7} - 4 = \\tfrac{48}{7} - \\tfrac{28}{7} = \\tfrac{20}{7}',
                    explanation: 'Use a common denominator when subtracting (\\( 4 = \\tfrac{28}{7} \\)).'
                },
                {
                    stepNumber: 5,
                    description: 'Check in equation \\( \\textcircled{1} \\).',
                    workingLatex: '3 \\times \\tfrac{20}{7} + 2 \\times \\tfrac{12}{7} = \\tfrac{60 + 24}{7} = \\tfrac{84}{7} = 12 \\checkmark',
                    explanation: 'Always verify by substituting into the OTHER equation — the one not used to express \\( x \\) in terms of \\( y \\).'
                }
            ],
            finalAnswer: ' x = \\dfrac{20}{7},\\; y = \\dfrac{12}{7} '
        }
    },

    {
        id: 'ise2-008',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 08',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 4x - 3y = -1 \\) and \\( 3x + y = 9 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'linear', 'elimination', 'integer solution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Label the equations.',
                    workingLatex: '\\textcircled{1}\\; 4x - 3y = -1 \\qquad \\textcircled{2}\\; 3x + y = 9',
                    explanation: 'Multiply \\( \\textcircled{2} \\) by 3 to match the \\( y \\)-coefficient in \\( \\textcircled{1} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply \\( \\textcircled{2} \\) by 3.',
                    workingLatex: '\\textcircled{3}\\; 9x + 3y = 27',
                    explanation: '\\( y \\)-coefficients: \\( -3 \\) and \\( +3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( \\textcircled{1} \\) and \\( \\textcircled{3} \\).',
                    workingLatex: '13x = 26 \\implies x = 2',
                    explanation: 'The \\( y \\) terms cancel.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( x = 2 \\) into \\( \\textcircled{2} \\).',
                    workingLatex: '3(2) + y = 9 \\implies y = 3',
                    explanation: 'Solve for \\( y \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check in \\( \\textcircled{1} \\).',
                    workingLatex: '4(2) - 3(3) = 8 - 9 = -1 \\checkmark',
                    explanation: 'Solution verified.'
                }
            ],
            finalAnswer: ' x = 2,\\; y = 3 '
        }
    },

    {
        id: 'ise2-009',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 09',
        difficulty: 'Foundation',
        questionText: 'Find the point of intersection of the lines \\( y = 3x - 1 \\) and \\( y = -x + 7 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'linear', 'intersection', 'y = mx + c'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the right-hand sides equal (since both equal \\( y \\)).',
                    workingLatex: '3x - 1 = -x + 7',
                    explanation: 'At the intersection point the \\( y \\)-values are equal.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '4x = 8 \\implies x = 2',
                    explanation: 'Collect \\( x \\) terms on the left and constants on the right.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( y \\) using the first equation.',
                    workingLatex: 'y = 3(2) - 1 = 5',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Check in the second equation.',
                    workingLatex: 'y = -2 + 7 = 5 \\checkmark',
                    explanation: 'Both equations give \\( y = 5 \\) at \\( x = 2 \\).'
                }
            ],
            finalAnswer: 'Point of intersection:  (2,\\ 5) '
        }
    },

    {
        id: 'ise2-010',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 10',
        difficulty: 'Foundation',
        questionText: 'Find the point of intersection of the lines \\( y = -2x + 10 \\) and \\( y = 4x - 2 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'linear', 'intersection', 'y = mx + c'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the expressions for \\( y \\) equal.',
                    workingLatex: '-2x + 10 = 4x - 2',
                    explanation: 'Both expressions equal \\( y \\) at the intersection.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '12 = 6x \\implies x = 2',
                    explanation: 'Add \\( 2x \\) and add 2 to both sides.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( y \\).',
                    workingLatex: 'y = 4(2) - 2 = 6',
                    explanation: 'Use the second equation.'
                },
                {
                    stepNumber: 4,
                    description: 'Check in the first equation.',
                    workingLatex: 'y = -2(2) + 10 = 6 \\checkmark',
                    explanation: 'Verified.'
                }
            ],
            finalAnswer: 'Point of intersection:  (2,\\ 6) '
        }
    },

    {
        id: 'ise2-011',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 11',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 3x - 4y + 1 = 0 \\) and \\( 5x + 2y - 11 = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'linear', 'rearrange first', 'elimination'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange both equations into standard form.',
                    workingLatex: '\\textcircled{1}\\; 3x - 4y = -1 \\qquad \\textcircled{2}\\; 5x + 2y = 11',
                    explanation: 'Move the constant to the right-hand side in each.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply \\( \\textcircled{2} \\) by 2 to match \\( y \\)-coefficients.',
                    workingLatex: '\\textcircled{3}\\; 10x + 4y = 22',
                    explanation: '\\( y \\)-coefficients: \\( -4 \\) and \\( +4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( \\textcircled{1} \\) and \\( \\textcircled{3} \\).',
                    workingLatex: '13x = 21 \\implies x = \\tfrac{21}{13}',
                    explanation: 'The \\( y \\) terms cancel.'
                },
                {
                    stepNumber: 4,
                    description: 'Use \\( \\textcircled{2} \\) to find \\( y \\).',
                    workingLatex: '5 \\times \\tfrac{21}{13} + 2y = 11 \\implies 2y = 11 - \\tfrac{105}{13} = \\tfrac{143-105}{13} = \\tfrac{38}{13} \\implies y = \\tfrac{19}{13}',
                    explanation: 'Substitute and solve for \\( y \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check in \\( \\textcircled{1} \\).',
                    workingLatex: '3 \\times \\tfrac{21}{13} - 4 \\times \\tfrac{19}{13} = \\tfrac{63 - 76}{13} = \\tfrac{-13}{13} = -1 \\checkmark',
                    explanation: 'Solution verified.'
                }
            ],
            finalAnswer: ' x = \\dfrac{21}{13},\\; y = \\dfrac{19}{13} '
        }
    },

    {
        id: 'ise2-012',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 12',
        difficulty: 'Foundation',
        questionText: 'Three paths in a park are modelled by the equations \\( A: 2x + y = 8 \\), \\( B: x - y = 1 \\), \\( C: x + 3y = 12 \\). Benches are placed at each intersection. Find the coordinates of all benches.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'linear', 'real-world', 'three lines', 'intersections'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find intersection of \\( A \\) and \\( B \\): \\( 2x + y = 8 \\) and \\( x - y = 1 \\).',
                    workingLatex: '\\text{Add: } 3x = 9 \\implies x = 3,\\quad y = 3 - 1 = 2',
                    explanation: 'Adding eliminates \\( y \\) directly.'
                },
                {
                    stepNumber: 2,
                    description: 'Find intersection of \\( A \\) and \\( C \\): \\( 2x + y = 8 \\) and \\( x + 3y = 12 \\).',
                    workingLatex: '\\times 3: 6x + 3y = 24; \\quad \\text{subtract }C: 5x = 12 \\implies x = \\tfrac{12}{5},\\quad y = 8 - 2 \\times \\tfrac{12}{5} = \\tfrac{16}{5}',
                    explanation: 'Multiply \\( A \\) by 3 and subtract \\( C \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find intersection of \\( B \\) and \\( C \\): \\( x - y = 1 \\) and \\( x + 3y = 12 \\).',
                    workingLatex: '\\text{Subtract }B\\text{ from }C: 4y = 11 \\implies y = \\tfrac{11}{4},\\quad x = 1 + \\tfrac{11}{4} = \\tfrac{15}{4}',
                    explanation: 'Subtracting eliminates \\( x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'State all three bench coordinates.',
                    workingLatex: 'A \\cap B = (3, 2),\\quad A \\cap C = \\left(\\tfrac{12}{5}, \\tfrac{16}{5}\\right),\\quad B \\cap C = \\left(\\tfrac{15}{4}, \\tfrac{11}{4}\\right)',
                    explanation: 'Three distinct intersection points.'
                }
            ],
            finalAnswer: 'Benches at  (3,\\ 2) ,  \\left(\\tfrac{12}{5},\\ \\tfrac{16}{5}\\right) , and  \\left(\\tfrac{15}{4},\\ \\tfrac{11}{4}\\right) .'
        }
    },

    // ── Type B: One linear, one quadratic — substitution (Q13–Q24) ───────────

    {
        id: 'ise2-013',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 13',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = x + 3 \\) and \\( y = x^2 - 3 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'substitution', 'quadratic', 'linear and quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The linear equation already expresses \\( y \\) in terms of \\( x \\). Substitute into the quadratic.',
                    workingLatex: 'x + 3 = x^2 - 3',
                    explanation: 'Replace \\( y \\) in the quadratic equation with \\( x + 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to form a quadratic equation.',
                    workingLatex: 'x^2 - x - 6 = 0',
                    explanation: 'Bring all terms to one side: \\( x^2 - x - 3 - 3 = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(x - 3)(x + 2) = 0 \\implies x = 3 \\text{ or } x = -2',
                    explanation: 'We need two numbers that multiply to \\(-6\\) and add to \\(-1\\): these are \\(-3\\) and \\(2\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the corresponding \\( y \\)-values using \\( y = x + 3 \\).',
                    workingLatex: 'x = 3 \\Rightarrow y = 6; \\quad x = -2 \\Rightarrow y = 1',
                    explanation: 'Substitute each \\( x \\)-value into the linear equation.'
                },
                {
                    stepNumber: 5,
                    description: 'Check both pairs in the quadratic.',
                    workingLatex: 'x=3: 9-3=6\\checkmark \\quad x=-2: 4-3=1\\checkmark',
                    explanation: 'Both solutions verified.'
                }
            ],
            finalAnswer: ' x = 3,\\; y = 6  and  x = -2,\\; y = 1 '
        }
    },

    {
        id: 'ise2-014',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 14',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 2x - 1 \\) and \\( y = x^2 - 2x + 3 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'substitution', 'quadratic', 'linear and quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = 2x - 1 \\) into the quadratic.',
                    workingLatex: '2x - 1 = x^2 - 2x + 3',
                    explanation: 'Replace \\( y \\) in the second equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: 'x^2 - 4x + 4 = 0',
                    explanation: 'Bring all terms to one side.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(x - 2)^2 = 0 \\implies x = 2',
                    explanation: 'A perfect square — the line is tangent to the curve, so there is exactly one solution.'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\).',
                    workingLatex: 'y = 2(2) - 1 = 3',
                    explanation: 'Substitute \\( x = 2 \\) into the linear equation.'
                }
            ],
            finalAnswer: ' x = 2,\\; y = 3  (the line is tangent to the curve at this point)'
        }
    },

    {
        id: 'ise2-015',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 15',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( x + y = 5 \\) and \\( x^2 + y^2 = 17 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'substitution', 'circle', 'linear and quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation.',
                    workingLatex: 'y = 5 - x',
                    explanation: 'Express \\( y \\) in terms of \\( x \\) from the linear equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the quadratic equation.',
                    workingLatex: 'x^2 + (5 - x)^2 = 17 \\implies x^2 + 25 - 10x + x^2 = 17 \\implies 2x^2 - 10x + 8 = 0',
                    explanation: 'Expand \\( (5-x)^2 \\) and collect terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide through by 2 and factorise.',
                    workingLatex: 'x^2 - 5x + 4 = 0 \\implies (x-1)(x-4) = 0',
                    explanation: 'Numbers multiplying to 4 and adding to \\(-5\\): \\(-1\\) and \\(-4\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the \\( y \\)-values.',
                    workingLatex: 'x = 1 \\Rightarrow y = 4; \\quad x = 4 \\Rightarrow y = 1',
                    explanation: 'Substitute each \\( x \\)-value into \\( y = 5 - x \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check in \\( x^2 + y^2 = 17 \\).',
                    workingLatex: '1 + 16 = 17 \\checkmark \\quad \\text{and} \\quad 16 + 1 = 17 \\checkmark',
                    explanation: 'Both pairs satisfy the circle equation.'
                }
            ],
            finalAnswer: ' x = 1,\\; y = 4  and  x = 4,\\; y = 1 '
        }
    },

    {
        id: 'ise2-016',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 16',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 3x - 5 \\) and \\( x^2 + y^2 = 25 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'substitution', 'circle', 'linear and quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = 3x - 5 \\) into the circle equation.',
                    workingLatex: 'x^2 + (3x-5)^2 = 25',
                    explanation: 'Replace \\( y \\) in the second equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and simplify.',
                    workingLatex: 'x^2 + 9x^2 - 30x + 25 = 25 \\implies 10x^2 - 30x = 0 \\implies 10x(x - 3) = 0',
                    explanation: 'Expand, then collect terms and factorise.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = 0 \\text{ or } x = 3',
                    explanation: 'Two solutions from the factorisation.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the \\( y \\)-values.',
                    workingLatex: 'x=0 \\Rightarrow y = -5; \\quad x=3 \\Rightarrow y = 4',
                    explanation: 'Substitute into \\( y = 3x - 5 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check in \\( x^2 + y^2 = 25 \\).',
                    workingLatex: '0 + 25 = 25 \\checkmark \\quad 9 + 16 = 25 \\checkmark',
                    explanation: 'Both solutions verified.'
                }
            ],
            finalAnswer: ' x = 0,\\; y = -5  and  x = 3,\\; y = 4 '
        }
    },

    {
        id: 'ise2-017',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 17',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 2x - y = 1 \\) and \\( x^2 + y^2 = 10 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'substitution', 'circle', 'linear and quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation.',
                    workingLatex: 'y = 2x - 1',
                    explanation: 'Isolate \\( y \\) in the linear equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the circle equation.',
                    workingLatex: 'x^2 + (2x-1)^2 = 10 \\implies x^2 + 4x^2 - 4x + 1 = 10 \\implies 5x^2 - 4x - 9 = 0',
                    explanation: 'Expand and collect terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(5x - 9)(x + 1) = 0 \\implies x = \\tfrac{9}{5} \\text{ or } x = -1',
                    explanation: 'Check: \\( 5 \\times (-9) = -45 \\) and \\( -9 + 5 = -4 \\). \\( \\checkmark \\)'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\)-values.',
                    workingLatex: 'x = \\tfrac{9}{5} \\Rightarrow y = \\tfrac{13}{5}; \\quad x = -1 \\Rightarrow y = -3',
                    explanation: 'Use \\( y = 2x - 1 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check \\( x = -1, y = -3 \\) in the circle.',
                    workingLatex: '1 + 9 = 10 \\checkmark',
                    explanation: 'Solution verified.'
                }
            ],
            finalAnswer: ' x = \\dfrac{9}{5},\\; y = \\dfrac{13}{5}  and  x = -1,\\; y = -3 '
        }
    },

    {
        id: 'ise2-018',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 18',
        difficulty: 'Foundation',
        questionText: 'Find the points of intersection of the curve \\( y = x^2 + 3x - 4 \\) and the line \\( y = 2x + 2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'substitution', 'quadratic', 'intersection', 'points of intersection'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the expressions for \\( y \\) equal.',
                    workingLatex: 'x^2 + 3x - 4 = 2x + 2',
                    explanation: 'At an intersection point both equations give the same \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: 'x^2 + x - 6 = 0',
                    explanation: 'Bring all terms to one side.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(x + 3)(x - 2) = 0 \\implies x = -3 \\text{ or } x = 2',
                    explanation: 'Numbers multiplying to \\(-6\\) and adding to \\(1\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\)-values using \\( y = 2x + 2 \\).',
                    workingLatex: 'x = -3 \\Rightarrow y = -4; \\quad x = 2 \\Rightarrow y = 6',
                    explanation: 'Substitute each \\( x \\)-value into the linear equation.'
                }
            ],
            finalAnswer: 'Points of intersection:  (-3,\\ -4)  and  (2,\\ 6) '
        }
    },

    {
        id: 'ise2-019',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 19',
        difficulty: 'Foundation',
        questionText: 'Find the points of intersection of \\( x^2 + y^2 = 45 \\) and \\( x + 2y = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'substitution', 'circle', 'points of intersection'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation.',
                    workingLatex: 'x = -2y',
                    explanation: 'Express \\( x \\) in terms of \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the circle equation.',
                    workingLatex: '(-2y)^2 + y^2 = 45 \\implies 4y^2 + y^2 = 45 \\implies 5y^2 = 45 \\implies y^2 = 9',
                    explanation: 'Expand and simplify.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( y \\).',
                    workingLatex: 'y = 3 \\text{ or } y = -3',
                    explanation: 'Take both square roots.'
                },
                {
                    stepNumber: 4,
                    description: 'Find corresponding \\( x \\)-values.',
                    workingLatex: 'y = 3 \\Rightarrow x = -6; \\quad y = -3 \\Rightarrow x = 6',
                    explanation: 'Use \\( x = -2y \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check in the circle.',
                    workingLatex: '36 + 9 = 45 \\checkmark',
                    explanation: 'Both pairs satisfy the circle equation.'
                }
            ],
            finalAnswer: ' (-6,\\ 3)  and  (6,\\ -3) '
        }
    },

    {
        id: 'ise2-020',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 20',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = x^2 - 5x + 4 \\) and \\( y = x - 1 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'substitution', 'quadratic', 'two intersections'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = x - 1 \\) into the quadratic.',
                    workingLatex: 'x - 1 = x^2 - 5x + 4',
                    explanation: 'Replace \\( y \\) in the first equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: 'x^2 - 6x + 5 = 0',
                    explanation: 'Bring all terms to one side.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(x - 1)(x - 5) = 0 \\implies x = 1 \\text{ or } x = 5',
                    explanation: 'Numbers multiplying to 5 and adding to \\(-6\\): \\(-1\\) and \\(-5\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\)-values using \\( y = x - 1 \\).',
                    workingLatex: 'x = 1 \\Rightarrow y = 0; \\quad x = 5 \\Rightarrow y = 4',
                    explanation: 'Substitute into the linear equation.'
                }
            ],
            finalAnswer: ' x = 1,\\; y = 0  and  x = 5,\\; y = 4 '
        }
    },

    {
        id: 'ise2-021',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 21',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( xy = 8 \\) and \\( y - x = 2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'substitution', 'product equation', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation.',
                    workingLatex: 'y = x + 2',
                    explanation: 'Express \\( y \\) in terms of \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into \\( xy = 8 \\).',
                    workingLatex: 'x(x + 2) = 8 \\implies x^2 + 2x - 8 = 0',
                    explanation: 'Expand and rearrange.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(x + 4)(x - 2) = 0 \\implies x = -4 \\text{ or } x = 2',
                    explanation: 'Numbers multiplying to \\(-8\\) and adding to \\(2\\): \\(4\\) and \\(-2\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\)-values.',
                    workingLatex: 'x = -4 \\Rightarrow y = -2; \\quad x = 2 \\Rightarrow y = 4',
                    explanation: 'Use \\( y = x + 2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check in \\( xy = 8 \\).',
                    workingLatex: '(-4)(-2) = 8 \\checkmark \\quad 2 \\times 4 = 8 \\checkmark',
                    explanation: 'Both solutions verified.'
                }
            ],
            finalAnswer: ' x = -4,\\; y = -2  and  x = 2,\\; y = 4 '
        }
    },

    {
        id: 'ise2-022',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 22',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 2x^2 - x - 3 \\) and \\( y = 3x - 1 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'substitution', 'quadratic', 'linear and quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = 3x - 1 \\) into the quadratic.',
                    workingLatex: '3x - 1 = 2x^2 - x - 3',
                    explanation: 'Replace \\( y \\) in the first equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: '2x^2 - 4x - 2 = 0 \\implies x^2 - 2x - 1 = 0',
                    explanation: 'Divide through by 2.'
                },
                {
                    stepNumber: 3,
                    description: 'Use the quadratic formula.',
                    workingLatex: 'x = \\frac{2 \\pm \\sqrt{4 + 4}}{2} = \\frac{2 \\pm 2\\sqrt{2}}{2} = 1 \\pm \\sqrt{2}',
                    explanation: '\\( a=1, b=-2, c=-1 \\implies \\Delta = 4 + 4 = 8 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the \\( y \\)-values.',
                    workingLatex: 'y = 3(1 \\pm \\sqrt{2}) - 1 = 2 \\pm 3\\sqrt{2}',
                    explanation: 'Use \\( y = 3x - 1 \\).'
                }
            ],
            finalAnswer: ' x = 1 + \\sqrt{2},\\; y = 2 + 3\\sqrt{2}  and  x = 1 - \\sqrt{2},\\; y = 2 - 3\\sqrt{2} '
        }
    },

    {
        id: 'ise2-023',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 23',
        difficulty: 'Foundation',
        questionText: 'Find the points of intersection of the line \\( 3x - y + 2 = 0 \\) and the curve \\( y = x^2 + 2x - 1 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'substitution', 'quadratic', 'rearrange', 'intersection'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation for \\( y \\).',
                    workingLatex: 'y = 3x + 2',
                    explanation: 'Add \\( y \\) to both sides and subtract \\( 3x \\) and \\( 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the curve equation.',
                    workingLatex: '3x + 2 = x^2 + 2x - 1 \\implies x^2 - x - 3 = 0',
                    explanation: 'Rearrange to standard quadratic form.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\frac{1 \\pm \\sqrt{1 + 12}}{2} = \\frac{1 \\pm \\sqrt{13}}{2}',
                    explanation: '\\( \\Delta = 1 + 12 = 13 \\); does not factorise over the integers.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the \\( y \\)-values.',
                    workingLatex: 'y = 3 \\times \\frac{1 \\pm \\sqrt{13}}{2} + 2 = \\frac{7 \\pm 3\\sqrt{13}}{2}',
                    explanation: 'Substitute into \\( y = 3x + 2 \\).'
                }
            ],
            finalAnswer: ' \\left(\\dfrac{1+\\sqrt{13}}{2},\\ \\dfrac{7+3\\sqrt{13}}{2}\\right)  and  \\left(\\dfrac{1-\\sqrt{13}}{2},\\ \\dfrac{7-3\\sqrt{13}}{2}\\right) '
        }
    },

    {
        id: 'ise2-024',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 24',
        difficulty: 'Foundation',
        questionText: 'a) Solve the simultaneous equations \\( x^2 + y^2 = 20 \\) and \\( y = 2x - 10 \\).\n\nb) State what your answer tells you geometrically about the line and the circle.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'substitution', 'circle', 'geometry', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = 2x - 10 \\) into the circle equation.',
                    workingLatex: 'x^2 + (2x-10)^2 = 20 \\implies x^2 + 4x^2 - 40x + 100 = 20',
                    explanation: 'Expand \\( (2x-10)^2 = 4x^2 - 40x + 100 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '5x^2 - 40x + 80 = 0 \\implies x^2 - 8x + 16 = 0',
                    explanation: 'Divide through by 5.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(x - 4)^2 = 0 \\implies x = 4',
                    explanation: 'Perfect square — only one solution.'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\).',
                    workingLatex: 'y = 2(4) - 10 = -2',
                    explanation: 'Substitute \\( x = 4 \\) into the linear equation.'
                },
                {
                    stepNumber: 5,
                    description: 'Part b: interpret geometrically.',
                    workingLatex: '\\text{One solution } \\Rightarrow \\text{ the line is tangent to the circle at } (4, -2)',
                    explanation: 'A repeated root from the quadratic means the line touches the circle at exactly one point.'
                }
            ],
            finalAnswer: 'a)  x = 4,\\; y = -2  \\quad b) The line is tangent to the circle at the point  (4, -2) .'
        }
    },

    // ── Type C: Determine number of intersections (Q25–Q28) ───────────────────

    {
        id: 'ise2-025',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 25',
        difficulty: 'Foundation',
        questionText: 'Without solving fully, determine whether the line \\( y = 2x + 5 \\) and the curve \\( y = x^2 - x + 2 \\) intersect at zero, one, or two points.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'discriminant', 'number of intersections', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the equations equal and rearrange.',
                    workingLatex: '2x + 5 = x^2 - x + 2 \\implies x^2 - 3x - 3 = 0',
                    explanation: 'Bring all terms to one side.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the discriminant \\( \\Delta = b^2 - 4ac \\).',
                    workingLatex: '\\Delta = (-3)^2 - 4(1)(-3) = 9 + 12 = 21',
                    explanation: 'Here \\( a=1, b=-3, c=-3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Interpret the discriminant.',
                    workingLatex: '\\Delta = 21 > 0 \\implies \\text{two distinct real intersections}',
                    explanation: 'A positive discriminant means two distinct real roots, hence two points of intersection.'
                }
            ],
            finalAnswer: 'The line and curve intersect at \\textbf{two} points (since  \\Delta = 21 > 0 ).'
        }
    },

    {
        id: 'ise2-026',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 26',
        difficulty: 'Foundation',
        questionText: 'Without solving fully, determine whether the line \\( y = 4x - 5 \\) and the curve \\( y = x^2 + 2x + 3 \\) intersect, and if so how many times.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'discriminant', 'number of intersections', 'no real solutions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set equal and rearrange.',
                    workingLatex: '4x - 5 = x^2 + 2x + 3 \\implies x^2 - 2x + 8 = 0',
                    explanation: 'Bring all terms to one side.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the discriminant.',
                    workingLatex: '\\Delta = (-2)^2 - 4(1)(8) = 4 - 32 = -28',
                    explanation: '\\( a=1, b=-2, c=8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Interpret.',
                    workingLatex: '\\Delta = -28 < 0 \\implies \\text{no real intersections}',
                    explanation: 'A negative discriminant means no real roots — the line does not meet the curve.'
                }
            ],
            finalAnswer: 'The line and curve do \\textbf{not intersect} (since  \\Delta = -28 < 0 ).'
        }
    },

    {
        id: 'ise2-027',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 27',
        difficulty: 'Foundation',
        questionText: 'Without solving fully, determine whether the line \\( y = 6x - 9 \\) and the curve \\( y = x^2 + 3 \\) intersect at zero, one, or two points, and state the geometric significance.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'discriminant', 'tangent', 'one intersection'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set equal and rearrange.',
                    workingLatex: '6x - 9 = x^2 + 3 \\implies x^2 - 6x + 12 = 0',
                    explanation: 'Bring all terms to one side.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the discriminant.',
                    workingLatex: '\\Delta = 36 - 48 = -12',
                    explanation: '\\( a=1, b=-6, c=12 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Interpret.',
                    workingLatex: '\\Delta = -12 < 0 \\implies \\text{no real intersections}',
                    explanation: 'The line does not touch or cross the curve at any real point.'
                }
            ],
            finalAnswer: 'No intersections ( \\Delta < 0 ): the line misses the curve entirely.'
        }
    },

    {
        id: 'ise2-028',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 28',
        difficulty: 'Foundation',
        questionText: 'Without solving fully, determine whether the line \\( y = 5x - 4 \\) and the curve \\( y = x^2 + 2x + 1 \\) intersect at zero, one, or two points.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'discriminant', 'tangent', 'one intersection'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set equal and rearrange.',
                    workingLatex: '5x - 4 = x^2 + 2x + 1 \\implies x^2 - 3x + 5 = 0',
                    explanation: 'Bring all terms to one side.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the discriminant.',
                    workingLatex: '\\Delta = 9 - 20 = -11',
                    explanation: '\\( a=1, b=-3, c=5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Interpret.',
                    workingLatex: '\\Delta = -11 < 0 \\implies \\text{no real intersections}',
                    explanation: 'The line and curve do not meet.'
                }
            ],
            finalAnswer: 'No intersections ( \\Delta = -11 < 0 ).'
        }
    },

    // ── Type D: Multi-part exam-style (Q29–Q35) ───────────────────────────────

    {
        id: 'ise2-029',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 29',
        difficulty: 'Foundation',
        questionText: 'A straight line has equation \\( y = kx + 2 \\). Find the values of \\( k \\) for which the line is tangent to the curve \\( y = x^2 - 4x + 6 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'discriminant', 'tangent', 'unknown parameter', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the expressions for \\( y \\) equal.',
                    workingLatex: 'kx + 2 = x^2 - 4x + 6 \\implies x^2 - (4+k)x + 4 = 0',
                    explanation: 'Rearrange to a quadratic in \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'For tangency, the discriminant must equal zero.',
                    workingLatex: '\\Delta = (4+k)^2 - 16 = 0',
                    explanation: 'A tangent line meets the curve at exactly one point \\( \\Leftrightarrow \\Delta = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( k \\).',
                    workingLatex: '(4+k)^2 = 16 \\implies 4 + k = \\pm 4',
                    explanation: 'Take square roots of both sides.'
                },
                {
                    stepNumber: 4,
                    description: 'Find both values.',
                    workingLatex: 'k = 0 \\text{ or } k = -8',
                    explanation: '\\( 4 + k = 4 \\Rightarrow k = 0 \\); \\quad \\( 4 + k = -4 \\Rightarrow k = -8 \\).'
                }
            ],
            finalAnswer: ' k = 0  or  k = -8 '
        }
    },

    {
        id: 'ise2-030',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 30',
        difficulty: 'Foundation',
        questionText: 'Two positive numbers \\( x \\) and \\( y \\) satisfy \\( x + y = 10 \\) and \\( xy = 24 \\). Find the two numbers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'product equation', 'real-world', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'From the linear equation, express \\( y \\) in terms of \\( x \\).',
                    workingLatex: 'y = 10 - x',
                    explanation: 'Rearrange the first equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into \\( xy = 24 \\).',
                    workingLatex: 'x(10 - x) = 24 \\implies 10x - x^2 = 24 \\implies x^2 - 10x + 24 = 0',
                    explanation: 'Expand and rearrange.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(x - 4)(x - 6) = 0 \\implies x = 4 \\text{ or } x = 6',
                    explanation: 'Numbers multiplying to 24 and adding to \\(-10\\): \\(-4\\) and \\(-6\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find corresponding \\( y \\)-values.',
                    workingLatex: 'x = 4 \\Rightarrow y = 6; \\quad x = 6 \\Rightarrow y = 4',
                    explanation: 'The two numbers are 4 and 6 (the same pair, just swapped).'
                }
            ],
            finalAnswer: 'The two numbers are  4  and  6 .'
        }
    },

    {
        id: 'ise2-031',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 31',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 3x + y = 7 \\) and \\( x^2 - y = 1 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'substitution', 'quadratic', 'linear and quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'From the linear equation, isolate \\( y \\).',
                    workingLatex: 'y = 7 - 3x',
                    explanation: 'Rearrange equation \\( \\textcircled{1} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the quadratic equation.',
                    workingLatex: 'x^2 - (7 - 3x) = 1 \\implies x^2 + 3x - 8 = 0',
                    explanation: 'Replace \\( y \\) and simplify.'
                },
                {
                    stepNumber: 3,
                    description: 'Use the quadratic formula.',
                    workingLatex: 'x = \\frac{-3 \\pm \\sqrt{9 + 32}}{2} = \\frac{-3 \\pm \\sqrt{41}}{2}',
                    explanation: '\\( \\Delta = 9 + 32 = 41 \\); cannot factorise over the integers.'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\) for each solution.',
                    workingLatex: 'y = 7 - 3 \\times \\frac{-3 \\pm \\sqrt{41}}{2} = \\frac{14 + 9 \\mp 3\\sqrt{41}}{2} = \\frac{23 \\mp 3\\sqrt{41}}{2}',
                    explanation: 'Substitute each \\( x \\) into \\( y = 7 - 3x \\).'
                }
            ],
            finalAnswer: ' x = \\dfrac{-3+\\sqrt{41}}{2},\\; y = \\dfrac{23-3\\sqrt{41}}{2}  and  x = \\dfrac{-3-\\sqrt{41}}{2},\\; y = \\dfrac{23+3\\sqrt{41}}{2} '
        }
    },

    {
        id: 'ise2-032',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 32',
        difficulty: 'Foundation',
        questionText: 'A rectangle has perimeter 26 cm and area 42 cm².\n\na) Let the length be \\( x \\) cm and width \\( y \\) cm. Write down two equations in \\( x \\) and \\( y \\).\n\nb) Hence find the dimensions of the rectangle.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'real-world', 'rectangle', 'product equation', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: write equations from perimeter and area.',
                    workingLatex: '2x + 2y = 26 \\implies x + y = 13 \\qquad xy = 42',
                    explanation: 'Perimeter \\( = 2(x+y) \\); area \\( = xy \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part b: from the linear equation, express \\( y \\) in terms of \\( x \\).',
                    workingLatex: 'y = 13 - x',
                    explanation: 'Rearrange the perimeter equation.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute into the area equation.',
                    workingLatex: 'x(13 - x) = 42 \\implies x^2 - 13x + 42 = 0',
                    explanation: 'Expand and rearrange.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise.',
                    workingLatex: '(x - 6)(x - 7) = 0 \\implies x = 6 \\text{ or } x = 7',
                    explanation: 'Numbers multiplying to 42 and adding to \\(-13\\): \\(-6\\) and \\(-7\\).'
                },
                {
                    stepNumber: 5,
                    description: 'State the dimensions.',
                    workingLatex: 'x = 7,\\ y = 6 \\quad \\text{(or equivalently } x=6, y=7\\text{)}',
                    explanation: 'Both give the same rectangle: 7 cm by 6 cm.'
                }
            ],
            finalAnswer: 'a)  x + y = 13  and  xy = 42  \\quad b) Dimensions:  7  cm by  6  cm.'
        }
    },

    {
        id: 'ise2-033',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 33',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( x^2 + y^2 = 34 \\) and \\( x - y = -2 \\), and state the geometric meaning of your answer.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'substitution', 'circle', 'geometry', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation.',
                    workingLatex: 'x = y - 2',
                    explanation: 'Express \\( x \\) in terms of \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the circle equation.',
                    workingLatex: '(y-2)^2 + y^2 = 34 \\implies y^2 - 4y + 4 + y^2 = 34 \\implies 2y^2 - 4y - 30 = 0',
                    explanation: 'Expand and collect terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by 2 and factorise.',
                    workingLatex: 'y^2 - 2y - 15 = 0 \\implies (y - 5)(y + 3) = 0',
                    explanation: 'Numbers multiplying to \\(-15\\) and adding to \\(-2\\): \\(-5\\) and \\(3\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( x \\)-values.',
                    workingLatex: 'y = 5 \\Rightarrow x = 3; \\quad y = -3 \\Rightarrow x = -5',
                    explanation: 'Use \\( x = y - 2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'State the geometric meaning.',
                    workingLatex: '\\text{Two intersection points } (3, 5) \\text{ and } (-5, -3)',
                    explanation: 'The line \\( x - y = -2 \\) is a chord of the circle \\( x^2 + y^2 = 34 \\), crossing it at two points.'
                }
            ],
            finalAnswer: ' (3,\\ 5)  and  (-5,\\ -3) . The line is a chord of the circle  x^2 + y^2 = 34 .'
        }
    },

    {
        id: 'ise2-034',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 34',
        difficulty: 'Foundation',
        questionText: 'a) Solve the simultaneous equations \\( y = x^2 + 2x - 8 \\) and \\( y + 3x = 4 \\).\n\nb) Interpret your answer geometrically.\n\nc) Find the length of the chord joining the two points of intersection.',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'quadratic', 'chord', 'length', 'geometry', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: rearrange the linear equation.',
                    workingLatex: 'y = 4 - 3x',
                    explanation: 'Isolate \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the quadratic.',
                    workingLatex: '4 - 3x = x^2 + 2x - 8 \\implies x^2 + 5x - 12 = 0',
                    explanation: 'Rearrange to standard form.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve using the quadratic formula.',
                    workingLatex: 'x = \\frac{-5 \\pm \\sqrt{25 + 48}}{2} = \\frac{-5 \\pm \\sqrt{73}}{2}',
                    explanation: '\\( \\Delta = 25 + 48 = 73 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find corresponding \\( y \\)-values.',
                    workingLatex: 'y = 4 - 3x = 4 - 3 \\times \\frac{-5 \\pm \\sqrt{73}}{2} = \\frac{23 \\mp 3\\sqrt{73}}{2}',
                    explanation: 'Substitute each \\( x \\) into \\( y = 4 - 3x \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Part b: geometric interpretation.',
                    workingLatex: '\\text{Two points of intersection} \\Rightarrow \\text{line is a secant to the parabola}',
                    explanation: 'The line cuts the parabola at two distinct points.'
                },
                {
                    stepNumber: 6,
                    description: 'Part c: find the chord length.',
                    workingLatex: '\\Delta x = \\sqrt{73}, \\quad \\Delta y = -3 \\times \\sqrt{73} / 1 = -3\\sqrt{73}/1',
                    explanation: 'The difference in \\( x \\) between the two roots is \\( \\sqrt{73} \\); difference in \\( y = -3 \\Delta x \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Apply the distance formula.',
                    workingLatex: 'd = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2} = \\sqrt{73 + 9 \\times 73} = \\sqrt{10 \\times 73} = \\sqrt{730}',
                    explanation: '\\( \\Delta y = -3\\Delta x \\) so \\( (\\Delta y)^2 = 9 \\times 73 \\).'
                }
            ],
            finalAnswer: 'a)  x = \\dfrac{-5 \\pm \\sqrt{73}}{2}  with corresponding  y  values \\quad b) Secant line to the parabola \\quad c) Chord length  = \\sqrt{730} '
        }
    },

    {
        id: 'ise2-035',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 35',
        difficulty: 'Foundation',
        questionText: 'A circle has equation \\( x^2 + y^2 = 50 \\). A line has equation \\( y = x + 2 \\).\n\na) Find the coordinates of the two points where the line meets the circle.\n\nb) Find the midpoint of the chord joining these two points.\n\nc) Show that the radius to the midpoint is perpendicular to the chord.',
        marks: 10,
        examStyle: false,
        yearCreated: 2026,
        tags: ['simultaneous equations', 'circle', 'chord', 'midpoint', 'perpendicular', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: substitute \\( y = x + 2 \\) into the circle equation.',
                    workingLatex: 'x^2 + (x+2)^2 = 50 \\implies x^2 + x^2 + 4x + 4 = 50 \\implies 2x^2 + 4x - 46 = 0',
                    explanation: 'Substituting the line into the circle reduces both variables to one — every intersection point must satisfy this single quadratic in \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Divide through by 2 to simplify.',
                    workingLatex: 'x^2 + 2x - 23 = 0',
                    explanation: 'Dividing every term by 2 keeps the equation equivalent. The constant \\(-23\\) is not a product of integer factors summing to \\(2\\), so use the quadratic formula.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quadratic formula with \\( a = 1,\\ b = 2,\\ c = -23 \\).',
                    workingLatex: 'x = \\dfrac{-2 \\pm \\sqrt{4 + 92}}{2} = \\dfrac{-2 \\pm \\sqrt{96}}{2} = -1 \\pm 2\\sqrt{6}',
                    explanation: '\\( \\Delta = b^2 - 4ac = 4 + 92 = 96 \\). Simplify \\( \\sqrt{96} = \\sqrt{16 \\cdot 6} = 4\\sqrt{6} \\), then divide by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the corresponding \\( y \\)-values from \\( y = x + 2 \\).',
                    workingLatex: 'x = -1 + 2\\sqrt{6} \\Rightarrow y = 1 + 2\\sqrt{6};\\quad x = -1 - 2\\sqrt{6} \\Rightarrow y = 1 - 2\\sqrt{6}',
                    explanation: 'Adding 2 to each \\( x \\)-value gives the matching \\( y \\)-value on the line.'
                },
                {
                    stepNumber: 5,
                    description: 'Part b: find the midpoint of the chord.',
                    workingLatex: 'M = \\left(\\dfrac{(-1+2\\sqrt{6})+(-1-2\\sqrt{6})}{2},\\ \\dfrac{(1+2\\sqrt{6})+(1-2\\sqrt{6})}{2}\\right) = (-1,\\ 1)',
                    explanation: 'Average the \\( x \\)- and \\( y \\)-coordinates of the endpoints. The \\( \\pm 2\\sqrt{6} \\) terms cancel exactly, leaving rational coordinates.'
                },
                {
                    stepNumber: 6,
                    description: 'Part c: find the gradient of the chord.',
                    workingLatex: 'm_{\\text{chord}} = 1 \\quad (\\text{slope of } y = x+2)',
                    explanation: 'The chord lies along the line \\( y = x + 2 \\), whose gradient is the coefficient of \\( x \\), namely 1.'
                },
                {
                    stepNumber: 7,
                    description: 'Find the gradient of the radius from the origin to \\( M(-1,\\ 1) \\).',
                    workingLatex: 'm_{\\text{radius}} = \\dfrac{1 - 0}{-1 - 0} = -1',
                    explanation: 'The circle \\( x^2 + y^2 = 50 \\) is centred at the origin, so the radius to \\( M \\) goes from \\( (0,0) \\) to \\( (-1, 1) \\). Apply the gradient formula \\( \\tfrac{y_2 - y_1}{x_2 - x_1} \\).'
                },
                {
                    stepNumber: 8,
                    description: 'Check perpendicularity.',
                    workingLatex: 'm_{\\text{chord}} \\times m_{\\text{radius}} = 1 \\times (-1) = -1 \\checkmark',
                    explanation: 'Two non-vertical lines are perpendicular iff the product of their gradients is \\( -1 \\). This confirms that the radius bisecting a chord is perpendicular to that chord — a key circle theorem. \\( \\square \\)'
                }
            ],
            finalAnswer: 'a)  (-1+2\\sqrt{6},\\; 1+2\\sqrt{6})  and  (-1-2\\sqrt{6},\\; 1-2\\sqrt{6})  \\quad b) Midpoint  (-1,\\ 1)  \\quad c) Gradients multiply to -1, so radius  \\perp  chord.  \\square '
        }
    },

    // ─── Q36–70: Additional Simultaneous Equations ──────────────────────

    {
        id: 'ise2-036', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 36', difficulty: 'Foundation',
        questionText: 'Solve: \\( 2x + y = 7 \\) and \\( x - y = 2 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Add the equations to eliminate \\( y \\).', workingLatex: '(2x + y) + (x - y) = 7 + 2 \\implies 3x = 9 \\implies x = 3', explanation: 'The \\( y \\)-coefficients are \\( +1 \\) and \\( -1 \\), so adding eliminates \\( y \\) immediately — no scaling needed.' },
            { stepNumber: 2, description: 'Substitute \\( x = 3 \\) into the first equation.', workingLatex: '2(3) + y = 7 \\implies y = 1', explanation: 'Back-substitute into either original equation. Quick check in the second: \\( 3 - 1 = 2 \\checkmark \\).' }
        ], finalAnswer: 'x = 3, y = 1' }
    },
    {
        id: 'ise2-037', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 37', difficulty: 'Foundation',
        questionText: 'Solve: \\( 3x + 2y = 12 \\) and \\( x + 2y = 8 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Subtract the second equation from the first to eliminate \\( y \\).', workingLatex: '(3x + 2y) - (x + 2y) = 12 - 8 \\implies 2x = 4 \\implies x = 2', explanation: 'The \\( y \\)-coefficients match (\\( +2 \\) in both), so subtracting cancels \\( y \\). Be careful with signs on the right-hand side: \\( 12 - 8 = 4 \\), not \\( 12 + 8 \\).' },
            { stepNumber: 2, description: 'Substitute \\( x = 2 \\) into the second equation.', workingLatex: '2 + 2y = 8 \\implies 2y = 6 \\implies y = 3', explanation: 'Choose the simpler equation for back-substitution. Verify in the first: \\( 6 + 6 = 12 \\checkmark \\).' }
        ], finalAnswer: 'x = 2, y = 3' }
    },
    {
        id: 'ise2-038', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 38', difficulty: 'Foundation',
        questionText: 'Solve: \\( 4x - 3y = 5 \\) and \\( 2x + 3y = 13 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Add the equations to eliminate \\( y \\).', workingLatex: '(4x - 3y) + (2x + 3y) = 5 + 13 \\implies 6x = 18 \\implies x = 3', explanation: 'The \\( y \\)-coefficients are \\( -3 \\) and \\( +3 \\) — opposite, so adding cancels them straight away.' },
            { stepNumber: 2, description: 'Substitute \\( x = 3 \\) into the second equation.', workingLatex: '2(3) + 3y = 13 \\implies 3y = 7 \\implies y = \\tfrac{7}{3}', explanation: 'A non-integer answer is perfectly valid. Quick check in the first equation: \\( 12 - 7 = 5 \\checkmark \\).' }
        ], finalAnswer: 'x = 3, y = \\frac{7}{3}' }
    },
    {
        id: 'ise2-039', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 39', difficulty: 'Foundation',
        questionText: 'Solve: \\( 5x + 4y = 22 \\) and \\( 3x - 4y = 2 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Add the equations to eliminate \\( y \\).', workingLatex: '(5x + 4y) + (3x - 4y) = 22 + 2 \\implies 8x = 24 \\implies x = 3', explanation: 'The \\( y \\)-coefficients are \\( +4 \\) and \\( -4 \\), so adding the equations cancels \\( y \\) without any scaling.' },
            { stepNumber: 2, description: 'Substitute \\( x = 3 \\) into the first equation.', workingLatex: '5(3) + 4y = 22 \\implies 4y = 7 \\implies y = \\tfrac{7}{4}', explanation: 'A non-integer answer is fine. Quick check in the second: \\( 9 - 7 = 2 \\checkmark \\).' }
        ], finalAnswer: 'x = 3, y = \\frac{7}{4}' }
    },
    {
        id: 'ise2-040', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 40', difficulty: 'Foundation',
        questionText: 'Solve: \\( x + 3y = 10 \\) and \\( 2x - y = 6 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'From the second equation, rearrange for \\( y \\) and substitute into the first.', workingLatex: 'y = 2x - 6 \\implies x + 3(2x - 6) = 10 \\implies 7x = 28 \\implies x = 4', explanation: 'The \\( y \\) in equation 2 has coefficient \\( -1 \\), so substitution is the cleanest route. Distribute the 3 carefully across both terms: \\( 3(2x - 6) = 6x - 18 \\).' },
            { stepNumber: 2, description: 'Find \\( y \\) using \\( y = 2x - 6 \\).', workingLatex: 'y = 2(4) - 6 = 2', explanation: 'Back-substitute into the rearranged equation. Verify in the first: \\( 4 + 6 = 10 \\checkmark \\).' }
        ], finalAnswer: 'x = 4, y = 2' }
    },
    {
        id: 'ise2-041', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 41', difficulty: 'Foundation',
        questionText: 'Solve: \\( \\frac{x}{2} + y = 5 \\) and \\( x - 2y = 4 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Multiply the first equation by 2 to clear the fraction.', workingLatex: '2 \\times \\left(\\tfrac{x}{2} + y\\right) = 2 \\times 5 \\implies x + 2y = 10', explanation: 'Clearing fractions before eliminating is almost always cleaner than working with fractions throughout. Multiplying every term by 2 preserves equality.' },
            { stepNumber: 2, description: 'Add the new first equation to the second to eliminate \\( y \\).', workingLatex: '(x + 2y) + (x - 2y) = 10 + 4 \\implies 2x = 14 \\implies x = 7,\\; y = \\tfrac{3}{2}', explanation: 'The \\( y \\)-terms cancel. Back-substitute into \\( x + 2y = 10 \\): \\( 2y = 3 \\), so \\( y = \\tfrac{3}{2} \\).' }
        ], finalAnswer: 'x = 7, y = \\frac{3}{2}' }
    },
    {
        id: 'ise2-042', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 42', difficulty: 'Foundation',
        questionText: 'Two numbers add to 20 and differ by 6. Find the numbers.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Translate the words into two linear equations.', workingLatex: 'x + y = 20; \\quad x - y = 6', explanation: '"Add to 20" gives the sum; "differ by 6" gives the difference (taking the larger minus the smaller).' },
            { stepNumber: 2, description: 'Add the equations to eliminate \\( y \\).', workingLatex: '(x + y) + (x - y) = 20 + 6 \\implies 2x = 26 \\implies x = 13,\\; y = 7', explanation: 'Adding cancels \\( y \\) directly. Back-substitute \\( x = 13 \\) into \\( x + y = 20 \\) to get \\( y = 7 \\). Check: \\( 13 - 7 = 6 \\checkmark \\).' }
        ], finalAnswer: '13 and 7' }
    },
    {
        id: 'ise2-043', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 43', difficulty: 'Foundation',
        questionText: 'Solve: \\( 3x + 5y = 21 \\) and \\( 2x + 3y = 13 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Scale to align \\( y \\)-coefficients: multiply eq1 by 3 and eq2 by 5.', workingLatex: '3(3x + 5y) = 63 \\implies 9x + 15y = 63; \\quad 5(2x + 3y) = 65 \\implies 10x + 15y = 65', explanation: 'Multiply each whole equation by an integer to make the \\( y \\)-coefficients both equal 15. Scaling preserves the solution set of each equation.' },
            { stepNumber: 2, description: 'Subtract to eliminate \\( y \\), then back-substitute.', workingLatex: '(10x + 15y) - (9x + 15y) = 65 - 63 \\implies x = 2,\\; y = 3', explanation: 'Watch signs carefully when subtracting. Back-substituting \\( x = 2 \\) into \\( 2x + 3y = 13 \\) gives \\( 3y = 9 \\), so \\( y = 3 \\).' }
        ], finalAnswer: 'x = 2, y = 3' }
    },
    {
        id: 'ise2-044', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 44', difficulty: 'Foundation',
        questionText: 'A cinema sells adult tickets at \\( \\pounds 8 \\) and child tickets at \\( \\pounds 5 \\). 50 tickets are sold for \\( \\pounds 310 \\). How many of each?',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Define variables and write two equations.', workingLatex: 'a + c = 50; \\quad 8a + 5c = 310', explanation: 'Let \\( a \\) be the number of adult tickets and \\( c \\) the number of child tickets. The total count gives one equation; the total revenue gives the other.' },
            { stepNumber: 2, description: 'Substitute \\( c = 50 - a \\) into the revenue equation.', workingLatex: '8a + 5(50 - a) = 310 \\implies 8a + 250 - 5a = 310 \\implies 3a = 60 \\implies a = 20', explanation: 'Substitution is cleanest because \\( a + c = 50 \\) has unit coefficients. Distribute the 5 and collect like terms.' },
            { stepNumber: 3, description: 'Find \\( c \\).', workingLatex: 'c = 50 - 20 = 30', explanation: 'Verify the revenue: \\( 8 \\times 20 + 5 \\times 30 = 160 + 150 = 310 \\checkmark \\).' }
        ], finalAnswer: '20 adult, 30 child' }
    },
    {
        id: 'ise2-045', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 45', difficulty: 'Foundation',
        questionText: 'Solve: \\( y = x^2 \\) and \\( y = 2x + 3 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the two expressions for \\( y \\) equal and rearrange.', workingLatex: 'x^2 = 2x + 3 \\implies x^2 - 2x - 3 = 0', explanation: 'At any intersection both equations give the same \\( y \\). Move all terms to one side to form a quadratic in \\( x \\).' },
            { stepNumber: 2, description: 'Factorise the quadratic.', workingLatex: '(x - 3)(x + 1) = 0 \\implies x = 3 \\text{ or } x = -1', explanation: 'Find two numbers multiplying to \\( -3 \\) and summing to \\( -2 \\): they are \\( -3 \\) and \\( +1 \\).' },
            { stepNumber: 3, description: 'Find the corresponding \\( y \\)-values.', workingLatex: 'x = 3:\\; y = 9; \\quad x = -1:\\; y = 1', explanation: 'Substitute each \\( x \\)-value into \\( y = x^2 \\) (or equivalently the line). Both endpoints must satisfy both equations.' }
        ], finalAnswer: '(3, 9) and (-1, 1)' }
    },
    {
        id: 'ise2-046', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 46', difficulty: 'Foundation',
        questionText: 'Solve: \\( y = x^2 - 4 \\) and \\( y = 3x \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the two expressions for \\( y \\) equal and rearrange.', workingLatex: 'x^2 - 4 = 3x \\implies x^2 - 3x - 4 = 0', explanation: 'Both equations give the same \\( y \\) at any intersection, so equate them. Move everything to one side to form a quadratic.' },
            { stepNumber: 2, description: 'Factorise.', workingLatex: '(x - 4)(x + 1) = 0 \\implies x = 4 \\text{ or } x = -1', explanation: 'Numbers multiplying to \\( -4 \\) and summing to \\( -3 \\) are \\( -4 \\) and \\( +1 \\).' },
            { stepNumber: 3, description: 'Find the matching \\( y \\)-values.', workingLatex: 'x = 4:\\; y = 12; \\quad x = -1:\\; y = -3', explanation: 'Substitute each \\( x \\)-value into \\( y = 3x \\) (the simpler equation). Check in the curve: \\( 16 - 4 = 12 \\) and \\( 1 - 4 = -3 \\) \\(\\checkmark\\).' }
        ], finalAnswer: '(4, 12) and (-1, -3)' }
    },
    {
        id: 'ise2-047', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 47', difficulty: 'Foundation',
        questionText: 'Solve: \\( x + y = 5 \\) and \\( x^2 + y^2 = 13 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'From the linear equation, express \\( y \\) in terms of \\( x \\) and substitute.', workingLatex: 'y = 5 - x \\implies x^2 + (5 - x)^2 = 13', explanation: 'Substituting from the linear equation reduces the circle equation to a single-variable quadratic.' },
            { stepNumber: 2, description: 'Expand and simplify.', workingLatex: 'x^2 + 25 - 10x + x^2 = 13 \\implies 2x^2 - 10x + 12 = 0 \\implies x^2 - 5x + 6 = 0', explanation: 'Expand \\( (5 - x)^2 = 25 - 10x + x^2 \\), then divide through by 2 to keep coefficients small.' },
            { stepNumber: 3, description: 'Factorise and pair with the matching \\( y \\)-values.', workingLatex: '(x - 2)(x - 3) = 0 \\implies x = 2, y = 3 \\text{ or } x = 3, y = 2', explanation: 'Numbers multiplying to 6 and summing to \\( -5 \\) are \\( -2 \\) and \\( -3 \\). Use \\( y = 5 - x \\) to find the matching \\( y \\)-coordinate.' }
        ], finalAnswer: '(2, 3) and (3, 2)' }
    },
    {
        id: 'ise2-048', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 48', difficulty: 'Foundation',
        questionText: 'Solve: \\( 2x - 3y = 1 \\) and \\( 4x + y = 15 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'From the second equation, rearrange \\( y = 15 - 4x \\) and substitute.', workingLatex: '2x - 3(15 - 4x) = 1 \\implies 2x - 45 + 12x = 1 \\implies 14x = 46 \\implies x = \\tfrac{23}{7}', explanation: 'The second equation has \\( y \\) with coefficient \\( +1 \\), so substitution is cleanest. Distribute the \\( -3 \\) carefully — sign errors here are common.' },
            { stepNumber: 2, description: 'Find \\( y \\) using \\( y = 15 - 4x \\).', workingLatex: 'y = 15 - 4 \\times \\tfrac{23}{7} = \\tfrac{105 - 92}{7} = \\tfrac{13}{7}', explanation: 'Convert 15 to \\( \\tfrac{105}{7} \\) before subtracting. Always back-substitute into the rearranged equation.' }
        ], finalAnswer: 'x = \\frac{23}{7}, y = \\frac{13}{7}' }
    },
    {
        id: 'ise2-049', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 49', difficulty: 'Foundation',
        questionText: 'Solve: \\( y = x^2 + 1 \\) and \\( y = 5 - x \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the two expressions for \\( y \\) equal.', workingLatex: 'x^2 + 1 = 5 - x \\implies x^2 + x - 4 = 0', explanation: 'Equating the two expressions for \\( y \\) gives a quadratic in \\( x \\) whose roots are the \\( x \\)-coordinates of the intersection points.' },
            { stepNumber: 2, description: 'Apply the quadratic formula since the quadratic does not factorise over the integers.', workingLatex: 'x = \\dfrac{-1 \\pm \\sqrt{1 + 16}}{2} = \\dfrac{-1 \\pm \\sqrt{17}}{2}', explanation: '\\( \\Delta = b^2 - 4ac = 1 + 16 = 17 \\), not a perfect square, so the solutions are irrational.' },
            { stepNumber: 3, description: 'Find the corresponding \\( y \\)-values from \\( y = 5 - x \\).', workingLatex: 'y = 5 - \\dfrac{-1 \\pm \\sqrt{17}}{2} = \\dfrac{11 \\mp \\sqrt{17}}{2}', explanation: 'Write 5 with a denominator of 2 and combine. The \\( \\mp \\) symbol mirrors the original \\( \\pm \\) because we subtract.' }
        ], finalAnswer: 'x = \\frac{-1 \\pm \\sqrt{17}}{2}, \\; y = \\frac{11 \\mp \\sqrt{17}}{2}' }
    },
    {
        id: 'ise2-050', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 50', difficulty: 'Foundation',
        questionText: 'The sum of two numbers is 15 and their product is 54. Find the two numbers.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Translate the words into equations.', workingLatex: 'x + y = 15; \\quad xy = 54', explanation: 'Let \\( x \\) and \\( y \\) be the two numbers. "Sum" gives a linear equation; "product" gives a quadratic relation.' },
            { stepNumber: 2, description: 'From the linear equation, substitute \\( y = 15 - x \\) into the product equation.', workingLatex: 'x(15 - x) = 54 \\implies 15x - x^2 = 54 \\implies x^2 - 15x + 54 = 0', explanation: 'Expand and rearrange to a quadratic in \\( x \\). The two roots will be the two numbers themselves.' },
            { stepNumber: 3, description: 'Factorise.', workingLatex: '(x - 6)(x - 9) = 0 \\implies x = 6 \\text{ or } x = 9', explanation: 'Numbers multiplying to 54 and summing to \\( -15 \\) are \\( -6 \\) and \\( -9 \\). The two solutions just swap which number is "\\( x \\)" and which is "\\( y \\)".' }
        ], finalAnswer: '6 and 9' }
    },
    {
        id: 'ise2-051', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 51', difficulty: 'Foundation',
        questionText: 'Solve: \\( 3x - 2y = 4 \\) and \\( 6x - 4y = 8 \\). What do you notice?',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Compare the two equations: equation 2 is exactly equation 1 multiplied by 2.', workingLatex: '2 \\times (3x - 2y) = 2 \\times 4 \\implies 6x - 4y = 8 \\quad \\text{(identical to eq2)}', explanation: 'When one equation is a non-zero scalar multiple of the other, the two equations describe the SAME line. Every point on that line satisfies both.' },
            { stepNumber: 2, description: 'State the conclusion.', workingLatex: '\\text{Infinitely many solutions: any } (x, y) \\text{ on } y = \\tfrac{3x - 4}{2}', explanation: 'There is no unique solution because the system is dependent — geometrically, the two lines coincide.' }
        ], finalAnswer: 'Infinitely many solutions (the two equations describe the same line)' }
    },
    {
        id: 'ise2-052', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 52', difficulty: 'Foundation',
        questionText: 'Solve: \\( 2x + 3y = 7 \\) and \\( 4x + 6y = 10 \\). What do you notice?',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Multiply the first equation by 2 and compare with the second.', workingLatex: '2 \\times (2x + 3y) = 14 \\implies 4x + 6y = 14, \\text{ but eq2 says } 4x + 6y = 10', explanation: 'The left-hand sides match exactly but the right-hand sides do not. This is a contradiction — no \\( (x, y) \\) can satisfy both equations simultaneously.' },
            { stepNumber: 2, description: 'Interpret geometrically.', workingLatex: '14 \\neq 10 \\implies \\text{lines are parallel and distinct}', explanation: 'The two lines have the same gradient (same ratio of coefficients) but different intercepts, so they never meet.' }
        ], finalAnswer: 'No solution (the lines are parallel and distinct)' }
    },
    {
        id: 'ise2-053', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 53', difficulty: 'Foundation',
        questionText: 'Solve: \\( y = 2x^2 - 3 \\) and \\( y = 5x \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the two expressions for \\( y \\) equal and rearrange.', workingLatex: '2x^2 - 3 = 5x \\implies 2x^2 - 5x - 3 = 0', explanation: 'Equating the two expressions for \\( y \\) gives a quadratic in \\( x \\) whose roots are the \\( x \\)-coordinates of the intersection points.' },
            { stepNumber: 2, description: 'Factorise.', workingLatex: '(2x + 1)(x - 3) = 0 \\implies x = -\\tfrac{1}{2} \\text{ or } x = 3', explanation: 'Use the AC method: find factors of \\( 2 \\times (-3) = -6 \\) that sum to \\( -5 \\), namely \\( -6 \\) and \\( +1 \\). Splitting \\( -5x \\) and grouping gives the bracketed factorisation.' },
            { stepNumber: 3, description: 'Find the corresponding \\( y \\)-values from \\( y = 5x \\).', workingLatex: 'x = -\\tfrac{1}{2}:\\; y = -\\tfrac{5}{2}; \\quad x = 3:\\; y = 15', explanation: 'Substitute each \\( x \\)-value into the simpler equation. Check in the curve: \\( 2(9) - 3 = 15 \\checkmark \\).' }
        ], finalAnswer: '(-\\frac{1}{2}, -\\frac{5}{2}) and (3, 15)' }
    },
    {
        id: 'ise2-054', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 54', difficulty: 'Foundation',
        questionText: 'Find the value(s) of \\( k \\) such that \\( y = kx - 3 \\) is tangent to \\( y = x^2 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the expressions for \\( y \\) equal and rearrange to a quadratic in \\( x \\).', workingLatex: 'x^2 = kx - 3 \\implies x^2 - kx + 3 = 0', explanation: 'At any intersection point, both equations give the same \\( y \\). Bringing all terms to one side gives a quadratic whose roots are the \\( x \\)-coordinates of the intersections.' },
            { stepNumber: 2, description: 'Apply the tangency condition: the discriminant must equal zero.', workingLatex: '\\Delta = (-k)^2 - 4(1)(3) = k^2 - 12 = 0', explanation: 'A tangent line meets the curve at exactly one point, which corresponds to a repeated root of the quadratic — equivalently \\( \\Delta = 0 \\).' },
            { stepNumber: 3, description: 'Solve for \\( k \\).', workingLatex: 'k^2 = 12 \\implies k = \\pm 2\\sqrt{3}', explanation: 'Take square roots, remembering both signs. \\( \\sqrt{12} = \\sqrt{4 \\cdot 3} = 2\\sqrt{3} \\).' }
        ], finalAnswer: 'k = \\pm 2\\sqrt{3}' }
    },
    {
        id: 'ise2-055', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 55', difficulty: 'Foundation',
        questionText: 'Solve: \\( x + 2y = 8 \\) and \\( xy = 6 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'From the linear equation, express \\( x = 8 - 2y \\) and substitute into the product equation.', workingLatex: '(8 - 2y)y = 6 \\implies 8y - 2y^2 = 6 \\implies 2y^2 - 8y + 6 = 0 \\implies y^2 - 4y + 3 = 0', explanation: 'Substitution turns a linear-plus-product system into a single quadratic in \\( y \\). Divide by 2 to keep coefficients small.' },
            { stepNumber: 2, description: 'Factorise and pair with the matching \\( x \\)-values.', workingLatex: '(y - 1)(y - 3) = 0 \\implies y = 1,\\ x = 6 \\text{ or } y = 3,\\ x = 2', explanation: 'Numbers multiplying to 3 and summing to \\( -4 \\) are \\( -1 \\) and \\( -3 \\). Use \\( x = 8 - 2y \\) for the matching \\( x \\)-coordinate.' }
        ], finalAnswer: '(6, 1) and (2, 3)' }
    },
    {
        id: 'ise2-056', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 56', difficulty: 'Foundation',
        questionText: 'Solve: \\( 7x + 2y = 20 \\) and \\( 3x + 5y = 21 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Scale to align \\( y \\)-coefficients: multiply eq1 by 5 and eq2 by 2.', workingLatex: '5(7x + 2y) = 100 \\implies 35x + 10y = 100; \\quad 2(3x + 5y) = 42 \\implies 6x + 10y = 42', explanation: 'Multiplying both equations preserves their solutions and produces a common \\( y \\)-coefficient of 10. Subtracting will then eliminate \\( y \\).' },
            { stepNumber: 2, description: 'Subtract to eliminate \\( y \\) and back-substitute.', workingLatex: '(35x + 10y) - (6x + 10y) = 100 - 42 \\implies 29x = 58 \\implies x = 2,\\; y = 3', explanation: 'Sign-track carefully: \\( 35x - 6x = 29x \\) and \\( 100 - 42 = 58 \\). Back-substitute \\( x = 2 \\) into \\( 7x + 2y = 20 \\): \\( 2y = 6 \\), so \\( y = 3 \\).' }
        ], finalAnswer: 'x = 2, y = 3' }
    },
    {
        id: 'ise2-057', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 57', difficulty: 'Foundation',
        questionText: 'A rectangle has perimeter 28 cm. Its length is 4 cm more than its width. Find the dimensions.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Translate the words into two equations.', workingLatex: '2l + 2w = 28; \\quad l = w + 4', explanation: 'Perimeter \\( = 2(l + w) \\); "4 cm more than width" gives \\( l = w + 4 \\). Two equations in two unknowns.' },
            { stepNumber: 2, description: 'Substitute \\( l = w + 4 \\) into the perimeter equation.', workingLatex: '2(w + 4) + 2w = 28 \\implies 4w + 8 = 28 \\implies 4w = 20 \\implies w = 5,\\; l = 9', explanation: 'Substitution is cleanest here because one equation already isolates \\( l \\). Distribute the 2, collect terms, then back-substitute for \\( l \\).' }
        ], finalAnswer: 'Width 5 cm, length 9 cm' }
    },
    {
        id: 'ise2-058', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 58', difficulty: 'Foundation',
        questionText: 'Solve: \\( y = x^2 - 2x \\) and \\( y + x = 4 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'From the linear equation, \\( y = 4 - x \\). Substitute into the quadratic.', workingLatex: '4 - x = x^2 - 2x \\implies x^2 - x - 4 = 0', explanation: 'Rearrange the linear equation first so that the substitution into the quadratic only involves one variable.' },
            { stepNumber: 2, description: 'Apply the quadratic formula.', workingLatex: 'x = \\dfrac{1 \\pm \\sqrt{1 + 16}}{2} = \\dfrac{1 \\pm \\sqrt{17}}{2}', explanation: '\\( \\Delta = 1 + 16 = 17 \\), not a perfect square, so the answer is irrational. Both roots correspond to real intersection points.' },
            { stepNumber: 3, description: 'Find the corresponding \\( y \\)-values from \\( y = 4 - x \\).', workingLatex: 'y = 4 - \\dfrac{1 \\pm \\sqrt{17}}{2} = \\dfrac{7 \\mp \\sqrt{17}}{2}', explanation: 'Express 4 with denominator 2 (\\( 4 = \\tfrac{8}{2} \\)) and combine. The sign flips because we subtract.' }
        ], finalAnswer: 'x = \\frac{1 \\pm \\sqrt{17}}{2}, \\; y = \\frac{7 \\mp \\sqrt{17}}{2}' }
    },
    {
        id: 'ise2-059', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 59', difficulty: 'Foundation',
        questionText: 'Solve: \\( \\frac{x}{3} + \\frac{y}{4} = 1 \\) and \\( \\frac{x}{2} - \\frac{y}{3} = 1 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Clear fractions by multiplying each equation by its LCM of denominators.', workingLatex: '12 \\times (\\tfrac{x}{3} + \\tfrac{y}{4}) = 12 \\implies 4x + 3y = 12;\\quad 6 \\times (\\tfrac{x}{2} - \\tfrac{y}{3}) = 6 \\implies 3x - 2y = 6', explanation: 'Always clear fractions before eliminating — keeps the arithmetic clean and avoids stray denominators.' },
            { stepNumber: 2, description: 'Scale to align \\( y \\)-coefficients and add to eliminate \\( y \\).', workingLatex: '2(4x + 3y) + 3(3x - 2y) = 24 + 18 \\implies 8x + 6y + 9x - 6y = 42 \\implies 17x = 42 \\implies x = \\tfrac{42}{17}', explanation: 'Multiplying eq1 by 2 and eq2 by 3 makes the \\( y \\)-coefficients \\( +6 \\) and \\( -6 \\). Adding cancels \\( y \\).' },
            { stepNumber: 3, description: 'Back-substitute into \\( 4x + 3y = 12 \\) to find \\( y \\).', workingLatex: '3y = 12 - 4 \\times \\tfrac{42}{17} = \\tfrac{204 - 168}{17} = \\tfrac{36}{17} \\implies y = \\tfrac{12}{17}', explanation: 'Convert 12 to \\( \\tfrac{204}{17} \\) before subtracting. Then divide by 3.' }
        ], finalAnswer: 'x = \\frac{42}{17}, y = \\frac{12}{17}' }
    },
    {
        id: 'ise2-060', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 60', difficulty: 'Foundation',
        questionText: 'Find the coordinates where \\( y = x^2 + 2x - 5 \\) meets \\( y = 2x + 3 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the two expressions for \\( y \\) equal and simplify.', workingLatex: 'x^2 + 2x - 5 = 2x + 3 \\implies x^2 = 8 \\implies x = \\pm 2\\sqrt{2}', explanation: 'The \\( 2x \\) terms cancel on each side, leaving \\( x^2 = 8 \\). Take both square roots: \\( \\sqrt{8} = 2\\sqrt{2} \\).' },
            { stepNumber: 2, description: 'Find the corresponding \\( y \\)-values from \\( y = 2x + 3 \\).', workingLatex: 'x = 2\\sqrt{2}:\\; y = 4\\sqrt{2} + 3; \\quad x = -2\\sqrt{2}:\\; y = 3 - 4\\sqrt{2}', explanation: 'Substitute each \\( x \\)-value into the linear equation. The two intersection points are symmetric about the \\( y \\)-axis offset by the line\'s slope.' }
        ], finalAnswer: '(2\\sqrt{2}, 4\\sqrt{2}+3) and (-2\\sqrt{2}, 3-4\\sqrt{2})' }
    },
    {
        id: 'ise2-061', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 61', difficulty: 'Foundation',
        questionText: 'Solve: \\( 5x - 2y = 11 \\) and \\( 3x + 4y = 1 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Multiply eq1 by 2 to align \\( y \\)-coefficients, then add to eq2.', workingLatex: '2(5x - 2y) = 22 \\implies 10x - 4y = 22; \\quad (10x - 4y) + (3x + 4y) = 22 + 1 \\implies 13x = 23 \\implies x = \\tfrac{23}{13}', explanation: 'Doubling eq1 makes the \\( y \\)-coefficients \\( -4 \\) and \\( +4 \\), so adding eliminates \\( y \\).' },
            { stepNumber: 2, description: 'Back-substitute into \\( 3x + 4y = 1 \\) to find \\( y \\).', workingLatex: '4y = 1 - 3 \\times \\tfrac{23}{13} = \\tfrac{13 - 69}{13} = -\\tfrac{56}{13} \\implies y = -\\tfrac{14}{13}', explanation: 'Convert 1 to \\( \\tfrac{13}{13} \\) before subtracting. Divide by 4 to isolate \\( y \\).' }
        ], finalAnswer: 'x = \\frac{23}{13}, y = -\\frac{14}{13}' }
    },
    {
        id: 'ise2-062', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 62', difficulty: 'Foundation',
        questionText: 'The line \\( y = mx + 1 \\) is tangent to \\( y = x^2 + 2 \\). Find the possible values of \\( m \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the expressions for \\( y \\) equal and rearrange.', workingLatex: 'x^2 + 2 = mx + 1 \\implies x^2 - mx + 1 = 0', explanation: 'At any intersection both expressions for \\( y \\) must agree. Collecting on one side gives a quadratic whose roots are the \\( x \\)-coordinates of the intersection points.' },
            { stepNumber: 2, description: 'Apply the tangency condition: discriminant equals zero.', workingLatex: '\\Delta = (-m)^2 - 4(1)(1) = m^2 - 4 = 0', explanation: 'Tangency means exactly one solution, so the quadratic has a repeated root — equivalently \\( \\Delta = 0 \\).' },
            { stepNumber: 3, description: 'Solve for \\( m \\).', workingLatex: 'm^2 = 4 \\implies m = \\pm 2', explanation: 'Take both square roots. The two values correspond to the two distinct tangent lines passing through \\( (0,\\ 1) \\) and touching the parabola.' }
        ], finalAnswer: 'm = \\pm 2' }
    },
    {
        id: 'ise2-063', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 63', difficulty: 'Foundation',
        questionText: 'Solve: \\( x^2 + y^2 = 25 \\) and \\( y = x + 1 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute \\( y = x + 1 \\) into the circle equation.', workingLatex: 'x^2 + (x + 1)^2 = 25 \\implies x^2 + x^2 + 2x + 1 = 25 \\implies 2x^2 + 2x - 24 = 0 \\implies x^2 + x - 12 = 0', explanation: 'Substitution turns the circle equation into a single-variable quadratic. Expand \\( (x+1)^2 \\) carefully and divide through by 2 to keep coefficients small.' },
            { stepNumber: 2, description: 'Factorise and pair with the matching \\( y \\)-values.', workingLatex: '(x + 4)(x - 3) = 0 \\implies x = -4,\\ y = -3 \\text{ or } x = 3,\\ y = 4', explanation: 'Numbers multiplying to \\( -12 \\) and summing to \\( 1 \\) are \\( +4 \\) and \\( -3 \\). Use \\( y = x + 1 \\) for the corresponding \\( y \\)-coordinate. Check in the circle: \\( 16 + 9 = 25 \\checkmark \\).' }
        ], finalAnswer: '(-4, -3) and (3, 4)' }
    },
    {
        id: 'ise2-064', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 64', difficulty: 'Foundation',
        questionText: 'Three coffees and two teas cost \\( \\pounds 9.50 \\). Two coffees and three teas cost \\( \\pounds 8.50 \\). Find the price of each.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Define variables and write the two equations.', workingLatex: '3c + 2t = 9.50; \\quad 2c + 3t = 8.50', explanation: 'Let \\( c \\) be the price of a coffee and \\( t \\) the price of a tea. Each scenario gives a linear equation.' },
            { stepNumber: 2, description: 'Scale to align \\( t \\)-coefficients (multiply eq1 by 3 and eq2 by 2), then subtract.', workingLatex: '3(3c + 2t) - 2(2c + 3t) = 28.50 - 17.00 \\implies 9c + 6t - 4c - 6t = 11.50 \\implies 5c = 11.50 \\implies c = 2.30', explanation: 'Watch signs when subtracting: the \\( -6t \\) and \\( +6t \\) cancel. Then divide by 5.' },
            { stepNumber: 3, description: 'Back-substitute into \\( 3c + 2t = 9.50 \\) to find \\( t \\).', workingLatex: 't = \\dfrac{9.50 - 3 \\times 2.30}{2} = \\dfrac{9.50 - 6.90}{2} = 1.30', explanation: 'Verify in the second equation: \\( 2(2.30) + 3(1.30) = 4.60 + 3.90 = 8.50 \\checkmark \\).' }
        ], finalAnswer: 'Coffee \\pounds 2.30, tea \\pounds 1.30' }
    },
    {
        id: 'ise2-065', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 65', difficulty: 'Foundation',
        questionText: 'Solve: \\( y = x^2 - 3x + 2 \\) and \\( y = x - 1 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the two expressions for \\( y \\) equal and rearrange.', workingLatex: 'x^2 - 3x + 2 = x - 1 \\implies x^2 - 4x + 3 = 0', explanation: 'Equate the two expressions for \\( y \\) and move all terms to one side to form a quadratic in \\( x \\).' },
            { stepNumber: 2, description: 'Factorise and find the \\( y \\)-values.', workingLatex: '(x - 1)(x - 3) = 0 \\implies x = 1,\\ y = 0 \\text{ or } x = 3,\\ y = 2', explanation: 'Numbers multiplying to 3 and summing to \\( -4 \\) are \\( -1 \\) and \\( -3 \\). Substitute each \\( x \\) into the line \\( y = x - 1 \\).' }
        ], finalAnswer: '(1, 0) and (3, 2)' }
    },
    {
        id: 'ise2-066', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 66', difficulty: 'Foundation',
        questionText: 'Solve: \\( x - y = 2 \\) and \\( x^2 - y^2 = 12 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise the difference of squares using the linear equation.', workingLatex: 'x^2 - y^2 = (x - y)(x + y) = 12 \\implies 2(x + y) = 12 \\implies x + y = 6', explanation: 'Recognising \\( x^2 - y^2 \\) as a difference of two squares turns the quadratic system into two linear equations. Substituting \\( x - y = 2 \\) directly is much faster than expanding everything.' },
            { stepNumber: 2, description: 'Solve the resulting linear pair.', workingLatex: '(x - y) + (x + y) = 2 + 6 \\implies 2x = 8 \\implies x = 4,\\; y = 2', explanation: 'Adding the two linear equations eliminates \\( y \\). Then \\( y = 6 - 4 = 2 \\). Check: \\( 16 - 4 = 12 \\checkmark \\).' }
        ], finalAnswer: 'x = 4, y = 2' }
    },
    {
        id: 'ise2-067', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 67', difficulty: 'Foundation',
        questionText: 'Find where \\( y = 4 - x^2 \\) meets \\( y = 4 - 2x \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the two expressions for \\( y \\) equal and simplify.', workingLatex: '4 - x^2 = 4 - 2x \\implies -x^2 + 2x = 0 \\implies x(x - 2) = 0', explanation: 'The constant 4 cancels on each side. Factor out the common \\( x \\) — this is the classic "zero product" route, avoiding the quadratic formula.' },
            { stepNumber: 2, description: 'Find the corresponding \\( y \\)-values from \\( y = 4 - 2x \\).', workingLatex: 'x = 0:\\; y = 4; \\quad x = 2:\\; y = 0', explanation: 'Each root gives one intersection point. Both points satisfy the curve too: \\( 4 - 0 = 4 \\) and \\( 4 - 4 = 0 \\) \\(\\checkmark\\).' }
        ], finalAnswer: '(0, 4) and (2, 0)' }
    },
    {
        id: 'ise2-068', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 68', difficulty: 'Foundation',
        questionText: 'Solve: \\( 2x + 3y + z = 9 \\), \\( x + y + z = 4 \\), \\( 3x + 2y - z = 5 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Add equation 2 and equation 3 to eliminate \\( z \\).', workingLatex: '(x + y + z) + (3x + 2y - z) = 4 + 5 \\implies 4x + 3y = 9 \\quad \\textcircled{4}', explanation: 'The \\( z \\) terms have coefficients \\( +1 \\) and \\( -1 \\), so adding cancels \\( z \\) immediately and leaves a linear equation in \\( x \\) and \\( y \\) only.' },
            { stepNumber: 2, description: 'Add equation 1 and equation 3 to eliminate \\( z \\) again.', workingLatex: '(2x + 3y + z) + (3x + 2y - z) = 9 + 5 \\implies 5x + 5y = 14 \\implies x + y = \\tfrac{14}{5} \\quad \\textcircled{5}', explanation: 'A second pairing that eliminates \\( z \\). Now equations \\( \\textcircled{4} \\) and \\( \\textcircled{5} \\) form a 2×2 system in \\( x \\) and \\( y \\) only.' },
            { stepNumber: 3, description: 'Solve the 2×2 system and back-substitute for \\( z \\).', workingLatex: 'x = \\tfrac{14}{5} - y \\implies 4\\left(\\tfrac{14}{5} - y\\right) + 3y = 9 \\implies y = \\tfrac{11}{5},\\; x = \\tfrac{3}{5},\\; z = 4 - \\tfrac{3}{5} - \\tfrac{11}{5} = \\tfrac{6}{5}', explanation: 'Substitute \\( y = \\tfrac{11}{5} = 2.2 \\), \\( x = \\tfrac{3}{5} = 0.6 \\), then use equation 2 (\\( x + y + z = 4 \\)) to find \\( z = \\tfrac{6}{5} = 1.2 \\). Verify all three equations.' }
        ], finalAnswer: 'x = 0.6, y = 2.2, z = 1.2' }
    },
    {
        id: 'ise2-069', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 69', difficulty: 'Foundation',
        questionText: 'Solve: \\( y = x^2 \\) and \\( x + y = 6 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute \\( y = x^2 \\) into the linear equation.', workingLatex: 'x + x^2 = 6 \\implies x^2 + x - 6 = 0 \\implies (x + 3)(x - 2) = 0', explanation: 'Substitute the simpler expression for \\( y \\) into the other equation. Factor: numbers multiplying to \\( -6 \\) and summing to \\( 1 \\) are \\( +3 \\) and \\( -2 \\).' },
            { stepNumber: 2, description: 'Find the corresponding \\( y \\)-values from \\( y = x^2 \\).', workingLatex: 'x = 2:\\; y = 4; \\quad x = -3:\\; y = 9', explanation: 'Squaring gives a positive \\( y \\) in both cases. Check in the linear equation: \\( 2 + 4 = 6 \\) and \\( -3 + 9 = 6 \\) \\(\\checkmark\\).' }
        ], finalAnswer: '(2, 4) and (-3, 9)' }
    },
    {
        id: 'ise2-070', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 70', difficulty: 'Foundation',
        questionText: 'The line \\( y = 2x + k \\) meets the curve \\( y = x^2 + 3 \\) at exactly one point. Find \\( k \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the expressions for \\( y \\) equal and rearrange.', workingLatex: 'x^2 + 3 = 2x + k \\implies x^2 - 2x + (3 - k) = 0', explanation: 'Equating the two expressions for \\( y \\) gives a quadratic in \\( x \\). The number of intersections equals the number of real roots.' },
            { stepNumber: 2, description: 'Tangency requires the discriminant to equal zero.', workingLatex: '\\Delta = (-2)^2 - 4(1)(3 - k) = 4 - 12 + 4k = 4k - 8 = 0 \\implies k = 2', explanation: '"Exactly one point" means a repeated root, so \\( \\Delta = 0 \\). Solve the resulting linear equation in \\( k \\).' }
        ], finalAnswer: 'k = 2' }
    },
];
