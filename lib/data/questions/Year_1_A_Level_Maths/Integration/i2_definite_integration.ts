import { Question } from "@/lib/types";


export const questions: Question[] = [
    {
        id: 'i2-001',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 01',
        difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\displaystyle\\int_1^3 (2x + 5)\\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'linear', 'limits'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate term by term.',
                    workingLatex: '\\int (2x + 5)\\, \\mathrm{d}x = x^2 + 5x',
                    explanation: 'Apply the power rule to each term. No \\( +C \\) is needed for a definite integral — if we wrote \\( F(x) + C \\) then the \\( +C \\) would cancel in the subtraction \\( F(b) - F(a) \\), so it never affects the answer.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the upper limit \\( x = 3 \\).',
                    workingLatex: '(3)^2 + 5(3) = 9 + 15 = 24',
                    explanation: 'Substitute \\( x = 3 \\) into the integrated expression.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the lower limit \\( x = 1 \\).',
                    workingLatex: '(1)^2 + 5(1) = 1 + 5 = 6',
                    explanation: 'Substitute \\( x = 1 \\) into the integrated expression.'
                },
                {
                    stepNumber: 4,
                    description: 'Subtract lower from upper.',
                    workingLatex: '24 - 6 = 18',
                    explanation: 'The definite integral equals \\( F(b) - F(a) \\), upper minus lower. Reversing the order would flip the sign, so always subtract the lower-limit value from the upper-limit value.'
                }
            ],
            finalAnswer: '\\(18\\)'
        }
    },
    {
        id: 'i2-002',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 02',
        difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\displaystyle\\int_0^2 (3x^2 - 4x + 1)\\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'quadratic', 'limits'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate term by term.',
                    workingLatex: '\\int (3x^2 - 4x + 1)\\, \\mathrm{d}x = x^3 - 2x^2 + x',
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( x = 2 \\).',
                    workingLatex: '(2)^3 - 2(2)^2 + 2 = 8 - 8 + 2 = 2',
                    explanation: 'Upper limit substitution.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( x = 0 \\).',
                    workingLatex: '0 - 0 + 0 = 0',
                    explanation: 'Lower limit substitution gives zero.'
                },
                {
                    stepNumber: 4,
                    description: 'Subtract.',
                    workingLatex: '2 - 0 = 2',
                    explanation: 'The value of the definite integral.'
                }
            ],
            finalAnswer: '\\(2\\)'
        }
    },
    {
        id: 'i2-003',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 03',
        difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\displaystyle\\int_1^4 \\sqrt{x}\\, \\mathrm{d}x \\), giving an exact answer.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'fractional index', 'exact answer'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( \\sqrt{x} = x^{1/2} \\) and integrate.',
                    workingLatex: '\\int x^{1/2}\\, \\mathrm{d}x = \\dfrac{x^{3/2}}{3/2} = \\dfrac{2}{3}x^{3/2}',
                    explanation: 'Use the power rule with \\( n = \\tfrac{1}{2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( x = 4 \\).',
                    workingLatex: '\\dfrac{2}{3}(4)^{3/2} = \\dfrac{2}{3} \\times 8 = \\dfrac{16}{3}',
                    explanation: '\\( 4^{3/2} = (\\sqrt{4})^3 = 2^3 = 8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( x = 1 \\).',
                    workingLatex: '\\dfrac{2}{3}(1)^{3/2} = \\dfrac{2}{3}',
                    explanation: '\\( 1^{3/2} = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Subtract.',
                    workingLatex: '\\dfrac{16}{3} - \\dfrac{2}{3} = \\dfrac{14}{3}',
                    explanation: 'Exact value of the integral.'
                }
            ],
            finalAnswer: '\\(\\dfrac{14}{3}\\)'
        }
    },
    {
        id: 'i2-004',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 04',
        difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\displaystyle\\int_1^2 \\dfrac{4}{x^2}\\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'negative index', 'limits'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\dfrac{4}{x^2} = 4x^{-2} \\) and integrate.',
                    workingLatex: '\\int 4x^{-2}\\, \\mathrm{d}x = \\dfrac{4x^{-1}}{-1} = -\\dfrac{4}{x}',
                    explanation: 'Apply the power rule with \\( n = -2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( x = 2 \\).',
                    workingLatex: '-\\dfrac{4}{2} = -2',
                    explanation: 'Upper limit substitution.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( x = 1 \\).',
                    workingLatex: '-\\dfrac{4}{1} = -4',
                    explanation: 'Lower limit substitution.'
                },
                {
                    stepNumber: 4,
                    description: 'Subtract.',
                    workingLatex: '-2 - (-4) = 2',
                    explanation: 'Upper minus lower limit value.'
                }
            ],
            finalAnswer: '\\(2\\)'
        }
    },
    {
        id: 'i2-005',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 05',
        difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\displaystyle\\int_{-1}^{2} (x^2 + 3)\\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'negative lower limit', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate.',
                    workingLatex: '\\int (x^2 + 3)\\, \\mathrm{d}x = \\dfrac{x^3}{3} + 3x',
                    explanation: 'Power rule applied to each term.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( x = 2 \\).',
                    workingLatex: '\\dfrac{8}{3} + 6 = \\dfrac{8}{3} + \\dfrac{18}{3} = \\dfrac{26}{3}',
                    explanation: 'Upper limit gives \\( \\tfrac{26}{3} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( x = -1 \\).',
                    workingLatex: '\\dfrac{(-1)^3}{3} + 3(-1) = -\\dfrac{1}{3} - 3 = -\\dfrac{10}{3}',
                    explanation: 'Take care with negatives when cubing.'
                },
                {
                    stepNumber: 4,
                    description: 'Subtract.',
                    workingLatex: '\\dfrac{26}{3} - \\left(-\\dfrac{10}{3}\\right) = \\dfrac{36}{3} = 12',
                    explanation: 'Subtracting a negative adds the value.'
                }
            ],
            finalAnswer: '\\(12\\)'
        }
    },
    {
        id: 'i2-006',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 06',
        difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\displaystyle\\int_0^3 (4x^3 - 6x)\\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'polynomial', 'limits'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate.',
                    workingLatex: '\\int (4x^3 - 6x)\\, \\mathrm{d}x = x^4 - 3x^2',
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( x = 3 \\).',
                    workingLatex: '(3)^4 - 3(3)^2 = 81 - 27 = 54',
                    explanation: 'Upper limit substitution.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( x = 0 \\).',
                    workingLatex: '0 - 0 = 0',
                    explanation: 'Lower limit substitution.'
                },
                {
                    stepNumber: 4,
                    description: 'Subtract.',
                    workingLatex: '54 - 0 = 54',
                    explanation: 'Value of the definite integral.'
                }
            ],
            finalAnswer: '\\(54\\)'
        }
    },
    {
        id: 'i2-007',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 07',
        difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\displaystyle\\int_1^4 \\left(x + \\dfrac{1}{\\sqrt{x}}\\right)\\mathrm{d}x \\), giving an exact answer.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'fractional index', 'exact answer'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\dfrac{1}{\\sqrt{x}} = x^{-1/2} \\) and integrate.',
                    workingLatex: '\\int \\left(x + x^{-1/2}\\right)\\mathrm{d}x = \\dfrac{x^2}{2} + 2x^{1/2}',
                    explanation: '\\( \\int x^{-1/2}\\,\\mathrm{d}x = \\dfrac{x^{1/2}}{1/2} = 2\\sqrt{x} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( x = 4 \\).',
                    workingLatex: '\\dfrac{16}{2} + 2\\sqrt{4} = 8 + 4 = 12',
                    explanation: 'Upper limit substitution.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( x = 1 \\).',
                    workingLatex: '\\dfrac{1}{2} + 2\\sqrt{1} = \\dfrac{1}{2} + 2 = \\dfrac{5}{2}',
                    explanation: 'Lower limit substitution.'
                },
                {
                    stepNumber: 4,
                    description: 'Subtract.',
                    workingLatex: '12 - \\dfrac{5}{2} = \\dfrac{19}{2}',
                    explanation: 'Exact answer as a fraction.'
                }
            ],
            finalAnswer: '\\(\\dfrac{19}{2}\\)'
        }
    },
    {
        id: 'i2-008',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 08',
        difficulty: 'Foundation',
        questionText: 'By first expanding, evaluate \\( \\displaystyle\\int_0^3 (x+2)(x-1)\\, \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'expand brackets', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the brackets.',
                    workingLatex: '(x+2)(x-1) = x^2 + x - 2',
                    explanation: 'Multiply out before integrating.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: '\\int (x^2 + x - 2)\\, \\mathrm{d}x = \\dfrac{x^3}{3} + \\dfrac{x^2}{2} - 2x',
                    explanation: 'Power rule on each term.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( x = 3 \\).',
                    workingLatex: '9 + \\dfrac{9}{2} - 6 = 3 + \\dfrac{9}{2} = \\dfrac{15}{2}',
                    explanation: '\\( \\dfrac{27}{3} + \\dfrac{9}{2} - 6 = 9 + 4.5 - 6 = 7.5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Apply \\( x = 0 \\) and subtract.',
                    workingLatex: '\\dfrac{15}{2} - 0 = \\dfrac{15}{2}',
                    explanation: 'Lower limit gives zero.'
                }
            ],
            finalAnswer: '\\(\\dfrac{15}{2}\\)'
        }
    },
    {
        id: 'i2-009',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 09',
        difficulty: 'Foundation',
        questionText: 'By first expanding, evaluate \\( \\displaystyle\\int_1^2 x^2(2x - 3)\\, \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'expand brackets', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand.',
                    workingLatex: 'x^2(2x-3) = 2x^3 - 3x^2',
                    explanation: 'Multiply each term inside the bracket by \\( x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: '\\int (2x^3 - 3x^2)\\, \\mathrm{d}x = \\dfrac{x^4}{2} - x^3',
                    explanation: 'Power rule on each term.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( x = 2 \\).',
                    workingLatex: '\\dfrac{16}{2} - 8 = 8 - 8 = 0',
                    explanation: 'Upper limit substitution.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply \\( x = 1 \\) and subtract.',
                    workingLatex: '\\dfrac{1}{2} - 1 = -\\dfrac{1}{2} \\implies 0 - \\left(-\\dfrac{1}{2}\\right) = \\dfrac{1}{2}',
                    explanation: 'Subtracting a negative value.'
                }
            ],
            finalAnswer: '\\(\\dfrac{1}{2}\\)'
        }
    },
    {
        id: 'i2-010',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 10',
        difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\displaystyle\\int_1^3 (2x+1)^2\\, \\mathrm{d}x \\) by first expanding the bracket.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'expand brackets', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand \\( (2x+1)^2 \\).',
                    workingLatex: '(2x+1)^2 = 4x^2 + 4x + 1',
                    explanation: 'Use \\( (a+b)^2 = a^2 + 2ab + b^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: '\\int (4x^2 + 4x + 1)\\, \\mathrm{d}x = \\dfrac{4x^3}{3} + 2x^2 + x',
                    explanation: 'Power rule on each term.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( x = 3 \\).',
                    workingLatex: '\\dfrac{4(27)}{3} + 2(9) + 3 = 36 + 18 + 3 = 57',
                    explanation: 'Upper limit substitution.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply \\( x = 1 \\) and subtract.',
                    workingLatex: '\\dfrac{4}{3} + 2 + 1 = \\dfrac{13}{3} \\implies 57 - \\dfrac{13}{3} = \\dfrac{171 - 13}{3} = \\dfrac{158}{3}',
                    explanation: 'Subtract to find the definite integral.'
                }
            ],
            finalAnswer: '\\(\\dfrac{158}{3}\\)'
        }
    },
    {
        id: 'i2-011',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 11',
        difficulty: 'Foundation',
        questionText: 'Find the value of \\( a \\), where \\( a > 0 \\), given that \\( \\displaystyle\\int_0^a (6x^2 + 2)\\, \\mathrm{d}x = 20 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'unknown limit', 'equation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate.',
                    workingLatex: '\\int (6x^2 + 2)\\, \\mathrm{d}x = 2x^3 + 2x',
                    explanation: 'Apply the power rule term by term; treat \\( a \\) as a numerical upper limit. No \\( +C \\) is needed here because the constant cancels in \\( F(a) - F(0) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply limits.',
                    workingLatex: '\\left[2x^3 + 2x\\right]_0^a = (2a^3 + 2a) - 0 = 2a^3 + 2a',
                    explanation: 'Substitute the upper limit \\( x = a \\) and then the lower limit \\( x = 0 \\) and subtract. The lower limit contributes zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Set equal to 20 and simplify.',
                    workingLatex: '2a^3 + 2a = 20 \\implies a^3 + a = 10',
                    explanation: 'Divide both sides by 2 to give a cleaner cubic in \\( a \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve by inspection.',
                    workingLatex: 'a = 2: \\; 2^3 + 2 = 8 + 2 = 10 \\;\\checkmark',
                    explanation: 'Test small positive integers. \\( a = 2 \\) satisfies \\( a^3 + a = 10 \\), so \\( a = 2 \\). Since \\( a > 0 \\) is required and \\( a^3 + a \\) is strictly increasing, this is the only valid solution.'
                }
            ],
            finalAnswer: '\\(a = 2\\)'
        }
    },
    {
        id: 'i2-012',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 12',
        difficulty: 'Foundation',
        questionText: 'Find the value of \\( a \\), where \\( a > 0 \\), given that \\( \\displaystyle\\int_0^a (4x + 3)\\, \\mathrm{d}x = 22 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'unknown limit', 'quadratic equation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate.',
                    workingLatex: '\\int (4x + 3)\\, \\mathrm{d}x = 2x^2 + 3x',
                    explanation: 'Power rule on each term.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply limits.',
                    workingLatex: '\\left[2x^2 + 3x\\right]_0^a = 2a^2 + 3a',
                    explanation: 'Lower limit gives zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Set equal to 22.',
                    workingLatex: '2a^2 + 3a = 22 \\implies 2a^2 + 3a - 22 = 0',
                    explanation: 'Rearrange to a standard quadratic.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise and solve, taking \\( a > 0 \\).',
                    workingLatex: '(2a + 11)(a - 2) = 0 \\implies a = 2 \\text{ (since } a > 0)',
                    explanation: '\\( a = -\\tfrac{11}{2} \\) is rejected as \\( a > 0 \\).'
                }
            ],
            finalAnswer: '\\(a = 2\\)'
        }
    },
    {
        id: 'i2-013',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 13',
        difficulty: 'Foundation',
        questionText: 'Find the possible values of \\( k \\) that satisfy \\( \\displaystyle\\int_1^3 (kx + 2)\\, \\mathrm{d}x = 12 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'unknown constant', 'linear'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate, treating \\( k \\) as a constant.',
                    workingLatex: '\\int (kx + 2)\\, \\mathrm{d}x = \\dfrac{kx^2}{2} + 2x',
                    explanation: 'Treat \\( k \\) as a numerical constant throughout.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply limits.',
                    workingLatex: '\\left[\\dfrac{kx^2}{2} + 2x\\right]_1^3 = \\left(\\dfrac{9k}{2} + 6\\right) - \\left(\\dfrac{k}{2} + 2\\right) = 4k + 4',
                    explanation: 'Subtract upper minus lower.'
                },
                {
                    stepNumber: 3,
                    description: 'Set equal to 12.',
                    workingLatex: '4k + 4 = 12 \\implies 4k = 8',
                    explanation: 'Simple linear equation in \\( k \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve.',
                    workingLatex: 'k = 2',
                    explanation: 'Unique value of \\( k \\).'
                }
            ],
            finalAnswer: '\\(k = 2\\)'
        }
    },
    {
        id: 'i2-014',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 14',
        difficulty: 'Foundation',
        questionText: 'Find the possible values of \\( A \\) that satisfy \\( \\displaystyle\\int_0^2 (x^2 + Ax)\\, \\mathrm{d}x = 6 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'unknown constant', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate.',
                    workingLatex: '\\int (x^2 + Ax)\\, \\mathrm{d}x = \\dfrac{x^3}{3} + \\dfrac{Ax^2}{2}',
                    explanation: 'Treat \\( A \\) as a constant.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply limits 0 to 2.',
                    workingLatex: '\\left[\\dfrac{x^3}{3} + \\dfrac{Ax^2}{2}\\right]_0^2 = \\dfrac{8}{3} + 2A - 0',
                    explanation: 'Lower limit gives zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Set equal to 6.',
                    workingLatex: '\\dfrac{8}{3} + 2A = 6 \\implies 2A = 6 - \\dfrac{8}{3} = \\dfrac{10}{3}',
                    explanation: 'Rearrange for \\( A \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve.',
                    workingLatex: 'A = \\dfrac{5}{3}',
                    explanation: 'Divide both sides by 2.'
                }
            ],
            finalAnswer: '\\(A = \\dfrac{5}{3}\\)'
        }
    },
    {
        id: 'i2-015',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 15',
        difficulty: 'Foundation',
        questionText: 'Find all possible values of \\( A \\) satisfying \\( \\displaystyle\\int_0^3 (x^2 + 2Ax + A^2)\\, \\mathrm{d}x = 30 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'unknown constant', 'quadratic in A'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate.',
                    workingLatex: '\\int (x^2 + 2Ax + A^2)\\, \\mathrm{d}x = \\dfrac{x^3}{3} + Ax^2 + A^2 x',
                    explanation: 'Treat \\( A \\) as a constant.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply limits 0 to 3.',
                    workingLatex: '\\left[\\dfrac{x^3}{3} + Ax^2 + A^2 x\\right]_0^3 = 9 + 9A + 3A^2',
                    explanation: '\\( \\tfrac{27}{3} + 9A + 3A^2 = 9 + 9A + 3A^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Set equal to 30 and rearrange.',
                    workingLatex: '9 + 9A + 3A^2 = 30 \\implies 3A^2 + 9A - 21 = 0 \\implies A^2 + 3A - 7 = 0',
                    explanation: 'Divide through by 3.'
                },
                {
                    stepNumber: 4,
                    description: 'Use the quadratic formula.',
                    workingLatex: 'A = \\dfrac{-3 \\pm \\sqrt{9 + 28}}{2} = \\dfrac{-3 \\pm \\sqrt{37}}{2}',
                    explanation: 'Both values are valid solutions.'
                }
            ],
            finalAnswer: '\\(A = \\dfrac{-3 + \\sqrt{37}}{2}\\) or \\(A = \\dfrac{-3 - \\sqrt{37}}{2}\\)'
        }
    },
    {
        id: 'i2-016',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 16',
        difficulty: 'Foundation',
        questionText: 'Find the area enclosed between the curve \\( y = x^2 \\), the \\( x \\)-axis and the lines \\( x = 0 \\) and \\( x = 3 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['area under curve', 'definite integration', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up the definite integral for the area.',
                    workingLatex: '\\text{Area} = \\int_0^3 x^2\\, \\mathrm{d}x',
                    explanation: 'The curve lies above the \\( x \\)-axis for \\( x \\geq 0 \\), so the integral gives the area directly.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: '\\int x^2\\, \\mathrm{d}x = \\dfrac{x^3}{3}',
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply limits.',
                    workingLatex: '\\left[\\dfrac{x^3}{3}\\right]_0^3 = \\dfrac{27}{3} - 0 = 9',
                    explanation: 'Upper limit minus lower limit.'
                }
            ],
            finalAnswer: '\\(9\\) square units'
        }
    },
    {
        id: 'i2-017',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 17',
        difficulty: 'Foundation',
        questionText: 'Find the exact area enclosed between the curve \\( y = 3x^2 + 1 \\), the \\( x \\)-axis and the lines \\( x = 1 \\) and \\( x = 4 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['area under curve', 'definite integration', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up the integral.',
                    workingLatex: '\\text{Area} = \\int_1^4 (3x^2 + 1)\\, \\mathrm{d}x',
                    explanation: 'The function is positive throughout this interval.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: '\\int (3x^2 + 1)\\, \\mathrm{d}x = x^3 + x',
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply limits.',
                    workingLatex: '\\left[x^3 + x\\right]_1^4 = (64 + 4) - (1 + 1) = 68 - 2 = 66',
                    explanation: 'Evaluate at 4 and subtract evaluation at 1.'
                }
            ],
            finalAnswer: '\\(66\\) square units'
        }
    },
    {
        id: 'i2-018',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 18',
        difficulty: 'Foundation',
        questionText: 'Find the area enclosed between the curve \\( y = \\sqrt{x} \\), the \\( x \\)-axis and the lines \\( x = 1 \\) and \\( x = 9 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['area under curve', 'fractional index', 'exact answer'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( \\sqrt{x} = x^{1/2} \\) and set up the integral.',
                    workingLatex: '\\text{Area} = \\int_1^9 x^{1/2}\\, \\mathrm{d}x',
                    explanation: 'The function is positive for \\( x > 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: '\\int x^{1/2}\\, \\mathrm{d}x = \\dfrac{2}{3}x^{3/2}',
                    explanation: 'Power rule with \\( n = \\tfrac{1}{2} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply limits.',
                    workingLatex: '\\left[\\dfrac{2}{3}x^{3/2}\\right]_1^9 = \\dfrac{2}{3}(27) - \\dfrac{2}{3}(1) = 18 - \\dfrac{2}{3} = \\dfrac{52}{3}',
                    explanation: '\\( 9^{3/2} = (\\sqrt{9})^3 = 27 \\); \\( 1^{3/2} = 1 \\).'
                }
            ],
            finalAnswer: '\\(\\dfrac{52}{3}\\) square units'
        }
    },
    {
        id: 'i2-019',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 19',
        difficulty: 'Foundation',
        questionText: 'The curve \\( y = x^2 - 4 \\) intersects the \\( x \\)-axis at \\( x = -2 \\) and \\( x = 2 \\). Find the area enclosed between the curve and the \\( x \\)-axis.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['area under curve', 'below x-axis', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Note that \\( y = x^2 - 4 \\leq 0 \\) between \\( x = -2 \\) and \\( x = 2 \\), so the integral will be negative.',
                    workingLatex: '\\int_{-2}^{2}(x^2 - 4)\\, \\mathrm{d}x',
                    explanation: 'Area below the \\( x \\)-axis must be made positive at the end.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: '\\int (x^2 - 4)\\, \\mathrm{d}x = \\dfrac{x^3}{3} - 4x',
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply limits.',
                    workingLatex: '\\left[\\dfrac{x^3}{3} - 4x\\right]_{-2}^{2} = \\left(\\dfrac{8}{3} - 8\\right) - \\left(-\\dfrac{8}{3} + 8\\right) = -\\dfrac{16}{3} - \\dfrac{16}{3} = -\\dfrac{32}{3}',
                    explanation: 'Evaluate at both limits and subtract.'
                },
                {
                    stepNumber: 4,
                    description: 'Make the area positive.',
                    workingLatex: '\\text{Area} = \\left|-\\dfrac{32}{3}\\right| = \\dfrac{32}{3}',
                    explanation: 'Area is always positive.'
                }
            ],
            finalAnswer: '\\(\\dfrac{32}{3}\\) square units'
        }
    },
    {
        id: 'i2-020',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 20',
        difficulty: 'Foundation',
        questionText: 'Find the area enclosed by the curve \\( y = (x-1)(x-3) \\) and the \\( x \\)-axis.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['area under curve', 'below x-axis', 'quadratic', 'factorised'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find where the curve crosses the \\( x \\)-axis.',
                    workingLatex: '(x-1)(x-3) = 0 \\implies x = 1 \\text{ and } x = 3',
                    explanation: 'The curve dips below the \\( x \\)-axis between these roots.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and integrate.',
                    workingLatex: '\\int_1^3 (x^2 - 4x + 3)\\, \\mathrm{d}x = \\left[\\dfrac{x^3}{3} - 2x^2 + 3x\\right]_1^3',
                    explanation: 'Expand the product before integrating.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply limits.',
                    workingLatex: '(9 - 18 + 9) - \\left(\\dfrac{1}{3} - 2 + 3\\right) = 0 - \\dfrac{4}{3} = -\\dfrac{4}{3}',
                    explanation: 'The integral is negative as the curve is below the \\( x \\)-axis.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the absolute value.',
                    workingLatex: '\\text{Area} = \\dfrac{4}{3}',
                    explanation: 'Area must be positive.'
                }
            ],
            finalAnswer: '\\(\\dfrac{4}{3}\\) square units'
        }
    },
    {
        id: 'i2-021',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 21',
        difficulty: 'Foundation',
        questionText: 'Find the area enclosed by the curve \\( y = x(x-2)(x+1) \\) and the \\( x \\)-axis between \\( x = 0 \\) and \\( x = 2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['area under curve', 'cubic', 'below x-axis'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand \\( y = x(x-2)(x+1) \\).',
                    workingLatex: 'x(x-2)(x+1) = x(x^2 - x - 2) = x^3 - x^2 - 2x',
                    explanation: 'Expand step by step.'
                },
                {
                    stepNumber: 2,
                    description: 'Note that for \\( 0 \\leq x \\leq 2 \\) the curve is at or below the \\( x \\)-axis (it crosses at \\( x=0 \\) and \\( x=2 \\)).',
                    workingLatex: '\\int_0^2 (x^3 - x^2 - 2x)\\, \\mathrm{d}x = \\left[\\dfrac{x^4}{4} - \\dfrac{x^3}{3} - x^2\\right]_0^2',
                    explanation: 'The integral will be negative; take the absolute value for area.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply limits.',
                    workingLatex: '\\left(4 - \\dfrac{8}{3} - 4\\right) - 0 = -\\dfrac{8}{3}',
                    explanation: 'Upper limit gives \\( 4 - \\tfrac{8}{3} - 4 = -\\tfrac{8}{3} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Take the absolute value.',
                    workingLatex: '\\text{Area} = \\dfrac{8}{3}',
                    explanation: 'Area is positive.'
                }
            ],
            finalAnswer: '\\(\\dfrac{8}{3}\\) square units'
        }
    },
    {
        id: 'i2-022',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 22',
        difficulty: 'Foundation',
        questionText: 'Find the total area between the graph of \\( y = x^3 - x \\) and the \\( x \\)-axis between \\( x = -1 \\) and \\( x = 1 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['area under curve', 'cubic', 'above and below x-axis', 'total area'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find roots of \\( y = x^3 - x = x(x-1)(x+1) \\).',
                    workingLatex: 'x = -1,\\; 0,\\; 1',
                    explanation: 'The curve changes sign at each root — split the integral.'
                },
                {
                    stepNumber: 2,
                    description: 'Area from \\( -1 \\) to \\( 0 \\) (curve above \\( x \\)-axis here).',
                    workingLatex: '\\int_{-1}^{0}(x^3 - x)\\, \\mathrm{d}x = \\left[\\dfrac{x^4}{4} - \\dfrac{x^2}{2}\\right]_{-1}^{0} = 0 - \\left(\\dfrac{1}{4} - \\dfrac{1}{2}\\right) = \\dfrac{1}{4}',
                    explanation: 'Positive area here.'
                },
                {
                    stepNumber: 3,
                    description: 'Area from \\( 0 \\) to \\( 1 \\) (curve below \\( x \\)-axis).',
                    workingLatex: '\\int_{0}^{1}(x^3 - x)\\, \\mathrm{d}x = \\left[\\dfrac{x^4}{4} - \\dfrac{x^2}{2}\\right]_0^1 = \\dfrac{1}{4} - \\dfrac{1}{2} = -\\dfrac{1}{4}',
                    explanation: 'Negative, so area is \\( \\tfrac{1}{4} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Total area = sum of absolute values.',
                    workingLatex: '\\dfrac{1}{4} + \\dfrac{1}{4} = \\dfrac{1}{2}',
                    explanation: 'Add both areas (both taken as positive).'
                }
            ],
            finalAnswer: '\\(\\dfrac{1}{2}\\) square units'
        }
    },
    {
        id: 'i2-023',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 23',
        difficulty: 'Foundation',
        questionText: 'Find the total shaded area enclosed between the curve \\( y = x^2 - 1 \\) and the \\( x \\)-axis between \\( x = -2 \\) and \\( x = 2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['area under curve', 'above and below x-axis', 'total area', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find where the curve crosses the \\( x \\)-axis.',
                    workingLatex: 'x^2 - 1 = 0 \\implies x = \\pm 1',
                    explanation: 'The curve is below the \\( x \\)-axis for \\( -1 < x < 1 \\) and above it outside this interval.'
                },
                {
                    stepNumber: 2,
                    description: 'Area above the \\( x \\)-axis: \\( x \\in [-2,-1] \\) and \\( x \\in [1,2] \\). By symmetry, compute one piece and double.',
                    workingLatex: '\\int_1^2 (x^2 - 1)\\, \\mathrm{d}x = \\left[\\dfrac{x^3}{3} - x\\right]_1^2 = \\left(\\dfrac{8}{3} - 2\\right) - \\left(\\dfrac{1}{3} - 1\\right) = \\dfrac{7}{3} - 1 = \\dfrac{4}{3}',
                    explanation: 'On \\([1,2]\\) the curve is above the \\( x \\)-axis, so the integral equals the signed area directly. By the even symmetry of \\( y = x^2 - 1 \\), the area from \\(-2\\) to \\(-1\\) is also \\( \\tfrac{4}{3} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Area below the \\( x \\)-axis: \\( x \\in [-1,1] \\).',
                    workingLatex: '\\int_{-1}^{1}(x^2 - 1)\\, \\mathrm{d}x = \\left[\\dfrac{x^3}{3} - x\\right]_{-1}^{1} = \\left(\\dfrac{1}{3}-1\\right) - \\left(-\\dfrac{1}{3}+1\\right) = -\\dfrac{2}{3} - \\dfrac{2}{3} = -\\dfrac{4}{3}',
                    explanation: 'Negative; area is \\( \\tfrac{4}{3} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Total area.',
                    workingLatex: '\\dfrac{4}{3} + \\dfrac{4}{3} + \\dfrac{4}{3} = 4',
                    explanation: 'Three equal pieces of \\( \\tfrac{4}{3} \\) each.'
                }
            ],
            finalAnswer: '\\(4\\) square units'
        }
    },
    {
        id: 'i2-024',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 24',
        difficulty: 'Foundation',
        questionText: 'Find the area enclosed by the curve \\( y = 4 - x^2 \\) and the \\( x \\)-axis.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['area under curve', 'quadratic', 'above x-axis'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find where the curve meets the \\( x \\)-axis.',
                    workingLatex: '4 - x^2 = 0 \\implies x = \\pm 2',
                    explanation: 'The parabola is above the \\( x \\)-axis between \\( x = -2 \\) and \\( x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: '\\int_{-2}^{2}(4 - x^2)\\, \\mathrm{d}x = \\left[4x - \\dfrac{x^3}{3}\\right]_{-2}^{2}',
                    explanation: 'Curve is above the \\( x \\)-axis here — no sign change needed.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply limits.',
                    workingLatex: '\\left(8 - \\dfrac{8}{3}\\right) - \\left(-8 + \\dfrac{8}{3}\\right) = \\dfrac{16}{3} + \\dfrac{16}{3} = \\dfrac{32}{3}',
                    explanation: 'Evaluate at 2 and \\(-2\\), then subtract.'
                }
            ],
            finalAnswer: '\\(\\dfrac{32}{3}\\) square units'
        }
    },
    {
        id: 'i2-025',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 25',
        difficulty: 'Foundation',
        questionText: 'Find the area enclosed between the curve \\( y = (x+1)(3-x) \\) and the \\( x \\)-axis.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['area under curve', 'quadratic', 'above x-axis'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find roots: the curve meets the \\( x \\)-axis at \\( x = -1 \\) and \\( x = 3 \\).',
                    workingLatex: '(x+1)(3-x) = 0 \\implies x = -1,\\; x = 3',
                    explanation: 'Parabola opens downward — curve is above \\( x \\)-axis between roots.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and integrate.',
                    workingLatex: '\\int_{-1}^{3}(3 + 2x - x^2)\\, \\mathrm{d}x = \\left[3x + x^2 - \\dfrac{x^3}{3}\\right]_{-1}^{3}',
                    explanation: '\\( (x+1)(3-x) = 3 + 2x - x^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( x = 3 \\).',
                    workingLatex: '9 + 9 - 9 = 9',
                    explanation: 'Upper limit.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply \\( x = -1 \\) and subtract.',
                    workingLatex: '-3 + 1 + \\dfrac{1}{3} = -\\dfrac{5}{3} \\implies 9 - \\left(-\\dfrac{5}{3}\\right) = \\dfrac{32}{3}',
                    explanation: 'Subtract lower from upper.'
                }
            ],
            finalAnswer: '\\(\\dfrac{32}{3}\\) square units'
        }
    },
    {
        id: 'i2-026',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 26',
        difficulty: 'Foundation',
        questionText: 'The curve \\( y = x^3 - 4x \\) crosses the \\( x \\)-axis at \\( x = 0 \\), \\( x = 2 \\) and \\( x = -2 \\). Find the total area enclosed between the curve and the \\( x \\)-axis between \\( x = -2 \\) and \\( x = 2 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['area under curve', 'cubic', 'total area', 'above and below x-axis'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'For \\( -2 \\leq x \\leq 0 \\), the curve is above the \\( x \\)-axis; for \\( 0 \\leq x \\leq 2 \\), it is below.',
                    workingLatex: '\\text{Split: } \\int_{-2}^{0}(x^3-4x)\\,\\mathrm{d}x \\text{ and } \\int_{0}^{2}(x^3-4x)\\,\\mathrm{d}x',
                    explanation: 'Use the sketch or test values to determine sign of \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate \\( x^3 - 4x \\).',
                    workingLatex: '\\int (x^3 - 4x)\\, \\mathrm{d}x = \\dfrac{x^4}{4} - 2x^2',
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 3,
                    description: 'Area from \\( -2 \\) to \\( 0 \\).',
                    workingLatex: '\\left[\\dfrac{x^4}{4} - 2x^2\\right]_{-2}^{0} = 0 - (4 - 8) = 4',
                    explanation: 'Lower limit gives \\( 4 - 8 = -4 \\); subtract to get \\( 0 - (-4) = 4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Area from \\( 0 \\) to \\( 2 \\), take absolute value.',
                    workingLatex: '\\left[\\dfrac{x^4}{4} - 2x^2\\right]_0^2 = (4 - 8) - 0 = -4 \\implies |{-4}| = 4',
                    explanation: 'Negative result means area below \\( x \\)-axis; take absolute value.'
                },
                {
                    stepNumber: 5,
                    description: 'Total area.',
                    workingLatex: '4 + 4 = 8',
                    explanation: 'Add the two areas.'
                }
            ],
            finalAnswer: '\\(8\\) square units'
        }
    },
    {
        id: 'i2-027',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 27',
        difficulty: 'Foundation',
        questionText: 'Find the exact area of the region enclosed between the curve \\( y = \\dfrac{1}{x^2} \\), the \\( x \\)-axis and the lines \\( x = 1 \\) and \\( x = 3 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['area under curve', 'negative index', 'exact answer'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\dfrac{1}{x^2} = x^{-2} \\) and set up the integral.',
                    workingLatex: '\\text{Area} = \\int_1^3 x^{-2}\\, \\mathrm{d}x',
                    explanation: 'The function is positive for \\( x > 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: '\\int x^{-2}\\, \\mathrm{d}x = -x^{-1} = -\\dfrac{1}{x}',
                    explanation: 'Power rule with \\( n = -2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply limits.',
                    workingLatex: '\\left[-\\dfrac{1}{x}\\right]_1^3 = -\\dfrac{1}{3} - (-1) = -\\dfrac{1}{3} + 1 = \\dfrac{2}{3}',
                    explanation: 'Upper limit minus lower limit.'
                }
            ],
            finalAnswer: '\\(\\dfrac{2}{3}\\) square units'
        }
    },
    {
        id: 'i2-028',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 28',
        difficulty: 'Foundation',
        questionText: 'Integrate \\( f(x) = 2x - x^2 \\) between \\( x = 0 \\) and \\( x = 1 \\), and find the area enclosed between this curve and the \\( x \\)-axis between these limits.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['area under curve', 'quadratic', 'above x-axis'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Note that \\( y = 2x - x^2 = x(2-x) \\geq 0 \\) for \\( 0 \\leq x \\leq 2 \\), so the curve is above the axis.',
                    workingLatex: '\\text{Area} = \\int_0^1 (2x - x^2)\\, \\mathrm{d}x',
                    explanation: 'No sign complication here.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: '\\int (2x - x^2)\\, \\mathrm{d}x = x^2 - \\dfrac{x^3}{3}',
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply limits.',
                    workingLatex: '\\left[x^2 - \\dfrac{x^3}{3}\\right]_0^1 = 1 - \\dfrac{1}{3} - 0 = \\dfrac{2}{3}',
                    explanation: 'Evaluate at \\( x = 1 \\) and subtract \\( x = 0 \\).'
                }
            ],
            finalAnswer: '\\(\\dfrac{2}{3}\\) square units'
        }
    },
    {
        id: 'i2-029',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 29',
        difficulty: 'Foundation',
        questionText: 'A particle moves along a straight line. Its velocity, \\( v \\) m/s, at time \\( t \\) seconds is given by \\( v = 6t - t^2 \\). The particle starts from rest at \\( t = 0 \\).\n\n(a) Find the distance travelled between \\( t = 0 \\) and \\( t = 6 \\).\n\n(b) Find the distance travelled between \\( t = 0 \\) and \\( t = 3 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'kinematics', 'velocity', 'distance'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find when \\( v = 0 \\) to identify any sign changes.',
                    workingLatex: '6t - t^2 = t(6 - t) = 0 \\implies t = 0 \\text{ or } t = 6',
                    explanation: 'Velocity is zero (particle at rest) at these times. For \\( 0 < t < 6 \\), \\( v > 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(a) Distance \\( t = 0 \\) to \\( t = 6 \\): velocity is positive throughout, so integrate directly.',
                    workingLatex: '\\int_0^6 (6t - t^2)\\, \\mathrm{d}t = \\left[3t^2 - \\dfrac{t^3}{3}\\right]_0^6 = (108 - 72) - 0 = 36',
                    explanation: 'No need to split the integral as \\( v \\geq 0 \\) throughout.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Distance \\( t = 0 \\) to \\( t = 3 \\).',
                    workingLatex: '\\int_0^3 (6t - t^2)\\, \\mathrm{d}t = \\left[3t^2 - \\dfrac{t^3}{3}\\right]_0^3 = (27 - 9) - 0 = 18',
                    explanation: 'Evaluate at \\( t = 3 \\).'
                }
            ],
            finalAnswer: '(a) \\(36\\) m \\quad (b) \\(18\\) m'
        }
    },
    {
        id: 'i2-030',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 30',
        difficulty: 'Foundation',
        questionText: 'A particle moves so that its velocity \\( v \\) m/s at time \\( t \\) s is given by \\( v = t^2 - 5t + 4 \\).\n\n(a) Find the times when the particle is at rest.\n\n(b) Find the total distance travelled between \\( t = 0 \\) and \\( t = 4 \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'kinematics', 'total distance', 'sign change'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Set \\( v = 0 \\).',
                    workingLatex: 't^2 - 5t + 4 = (t-1)(t-4) = 0 \\implies t = 1 \\text{ and } t = 4',
                    explanation: 'Particle is at rest at \\( t = 1 \\) s and \\( t = 4 \\) s.'
                },
                {
                    stepNumber: 2,
                    description: 'Determine sign of \\( v \\) on each sub-interval.',
                    workingLatex: '0 < t < 1: v > 0;\\quad 1 < t < 4: v < 0',
                    explanation: 'The velocity changes sign at \\( t = 1 \\) — must split the integral.'
                },
                {
                    stepNumber: 3,
                    description: 'Distance from \\( t = 0 \\) to \\( t = 1 \\) (moving forward).',
                    workingLatex: '\\int_0^1 (t^2 - 5t + 4)\\, \\mathrm{d}t = \\left[\\dfrac{t^3}{3} - \\dfrac{5t^2}{2} + 4t\\right]_0^1 = \\dfrac{1}{3} - \\dfrac{5}{2} + 4 = \\dfrac{11}{6}',
                    explanation: '\\( \\tfrac{1}{3} - \\tfrac{5}{2} + 4 = \\tfrac{2}{6} - \\tfrac{15}{6} + \\tfrac{24}{6} = \\tfrac{11}{6} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Distance from \\( t = 1 \\) to \\( t = 4 \\) (velocity negative — take absolute value of the integral).',
                    workingLatex: '\\int_1^4 (t^2 - 5t + 4)\\, \\mathrm{d}t = \\left(\\dfrac{64}{3} - 40 + 16\\right) - \\left(\\dfrac{1}{3} - \\dfrac{5}{2} + 4\\right) = -\\dfrac{8}{3} - \\dfrac{11}{6} = -\\dfrac{27}{6} = -\\dfrac{9}{2} \\implies \\text{distance} = \\dfrac{9}{2}',
                    explanation: 'Because \\( v < 0 \\) on this interval, the integral is negative — it gives signed displacement, not distance. The actual distance travelled is the absolute value, \\( \\tfrac{9}{2} \\) m.'
                },
                {
                    stepNumber: 5,
                    description: 'Total distance.',
                    workingLatex: '\\dfrac{11}{6} + \\dfrac{9}{2} = \\dfrac{11}{6} + \\dfrac{27}{6} = \\dfrac{38}{6} = \\dfrac{19}{3}',
                    explanation: 'Add the two distances.'
                }
            ],
            finalAnswer: '(a) \\(t = 1\\) s and \\(t = 4\\) s \\quad (b) \\(\\dfrac{19}{3}\\) m'
        }
    },
    {
        id: 'i2-031',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 31',
        difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\displaystyle\\int_4^9 \\dfrac{x - \\sqrt{x}}{\\sqrt{x}}\\, \\mathrm{d}x \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'simplify first', 'fractional index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide each term of the numerator by \\( \\sqrt{x} \\).',
                    workingLatex: '\\dfrac{x - \\sqrt{x}}{\\sqrt{x}} = \\dfrac{x}{x^{1/2}} - \\dfrac{x^{1/2}}{x^{1/2}} = x^{1/2} - 1',
                    explanation: 'Simplify before integrating.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: '\\int (x^{1/2} - 1)\\, \\mathrm{d}x = \\dfrac{2}{3}x^{3/2} - x',
                    explanation: 'Power rule for \\( x^{1/2} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( x = 9 \\).',
                    workingLatex: '\\dfrac{2}{3}(27) - 9 = 18 - 9 = 9',
                    explanation: '\\( 9^{3/2} = 27 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Apply \\( x = 4 \\) and subtract.',
                    workingLatex: '\\dfrac{2}{3}(8) - 4 = \\dfrac{16}{3} - 4 = \\dfrac{4}{3} \\implies 9 - \\dfrac{4}{3} = \\dfrac{23}{3}',
                    explanation: '\\( 4^{3/2} = 8 \\).'
                }
            ],
            finalAnswer: '\\(\\dfrac{23}{3}\\)'
        }
    },
    {
        id: 'i2-032',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 32',
        difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\displaystyle\\int_1^4 \\dfrac{3x^2 + 2}{\\sqrt{x}}\\, \\mathrm{d}x \\), giving an exact answer.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'simplify first', 'fractional index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide each term by \\( x^{1/2} \\).',
                    workingLatex: '\\dfrac{3x^2 + 2}{x^{1/2}} = 3x^{3/2} + 2x^{-1/2}',
                    explanation: 'Rewrite using index laws before integrating.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: '\\int (3x^{3/2} + 2x^{-1/2})\\, \\mathrm{d}x = \\dfrac{3x^{5/2}}{5/2} + \\dfrac{2x^{1/2}}{1/2} = \\dfrac{6}{5}x^{5/2} + 4x^{1/2}',
                    explanation: 'Power rule on each term.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( x = 4 \\).',
                    workingLatex: '\\dfrac{6}{5}(32) + 4(2) = \\dfrac{192}{5} + 8 = \\dfrac{232}{5}',
                    explanation: '\\( 4^{5/2} = (\\sqrt{4})^5 = 2^5 = 32 \\); \\( 4^{1/2} = 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Apply \\( x = 1 \\) and subtract.',
                    workingLatex: '\\dfrac{6}{5}(1) + 4(1) = \\dfrac{6}{5} + 4 = \\dfrac{26}{5} \\implies \\dfrac{232}{5} - \\dfrac{26}{5} = \\dfrac{206}{5}',
                    explanation: '\\( 1^{5/2} = 1 \\) and \\( 1^{1/2} = 1 \\).'
                }
            ],
            finalAnswer: '\\(\\dfrac{206}{5}\\)'
        }
    },
    {
        id: 'i2-033',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 33',
        difficulty: 'Foundation',
        questionText: 'The diagram shows the curve \\( y = x^2 - 2x \\) and the line \\( y = 0 \\).\n\n(a) Find the coordinates of the points where the curve meets the \\( x \\)-axis.\n\n(b) Hence find the area enclosed between the curve and the \\( x \\)-axis.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['area under curve', 'quadratic', 'below x-axis', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Set \\( y = 0 \\) and factorise.',
                    workingLatex: 'x^2 - 2x = x(x - 2) = 0 \\implies x = 0 \\text{ and } x = 2',
                    explanation: 'Points: \\( (0,0) \\) and \\( (2,0) \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Note the curve lies below the \\( x \\)-axis between the roots. Set up the integral.',
                    workingLatex: '\\int_0^2 (x^2 - 2x)\\, \\mathrm{d}x = \\left[\\dfrac{x^3}{3} - x^2\\right]_0^2',
                    explanation: 'Integrate and apply limits.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply limits.',
                    workingLatex: '\\left(\\dfrac{8}{3} - 4\\right) - 0 = \\dfrac{8}{3} - \\dfrac{12}{3} = -\\dfrac{4}{3}',
                    explanation: 'Negative result confirms curve is below the \\( x \\)-axis.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the absolute value.',
                    workingLatex: '\\text{Area} = \\left|-\\dfrac{4}{3}\\right| = \\dfrac{4}{3}',
                    explanation: 'Area is always positive.'
                }
            ],
            finalAnswer: '(a) \\((0,0)\\) and \\((2,0)\\) \\quad (b) \\(\\dfrac{4}{3}\\) square units'
        }
    },
    {
        id: 'i2-034',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 34',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) has equation \\( y = 3x^2 - 12x \\) and crosses the \\( x \\)-axis at the origin and at \\( x = a \\).\n\n(a) Find the value of \\( a \\).\n\n(b) Find the exact area enclosed between \\( C \\) and the \\( x \\)-axis.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['area under curve', 'quadratic', 'below x-axis', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Set \\( y = 0 \\).',
                    workingLatex: '3x^2 - 12x = 3x(x - 4) = 0 \\implies x = 0 \\text{ or } x = 4',
                    explanation: 'So \\( a = 4 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Note that the curve is below the \\( x \\)-axis for \\( 0 < x < 4 \\). Integrate.',
                    workingLatex: '\\int_0^4 (3x^2 - 12x)\\, \\mathrm{d}x = \\left[x^3 - 6x^2\\right]_0^4',
                    explanation: 'Power rule on each term.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply limits.',
                    workingLatex: '(64 - 96) - 0 = -32',
                    explanation: 'Negative: the enclosed region is below the \\( x \\)-axis.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the absolute value.',
                    workingLatex: '\\text{Area} = 32',
                    explanation: 'Area must be positive.'
                }
            ],
            finalAnswer: '(a) \\(a = 4\\) \\quad (b) \\(32\\) square units'
        }
    },
    {
        id: 'i2-035',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 35',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) has equation \\( y = x^3 - 6x^2 + 9x \\).\n\n(a) Show that \\( C \\) touches the \\( x \\)-axis at \\( x = 3 \\) and crosses it at \\( x = 0 \\).\n\n(b) Find the area enclosed between \\( C \\) and the \\( x \\)-axis between \\( x = 0 \\) and \\( x = 3 \\).\n\n(c) An object moves along a line with velocity \\( v = x^3 - 6x^2 + 9x \\) m/s at time \\( x \\) s. Explain why the object does not change direction between \\( x = 0 \\) and \\( x = 3 \\), and find the total distance travelled in this interval.',
        marks: 10,
        examStyle: true,
        yearCreated: 2026,
        tags: ['area under curve', 'cubic', 'kinematics', 'exam style', 'show that'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Factorise \\( y = x^3 - 6x^2 + 9x \\).',
                    workingLatex: 'y = x(x^2 - 6x + 9) = x(x-3)^2',
                    explanation: '\\( x^2 - 6x + 9 = (x-3)^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Show the behaviour at each root.',
                    workingLatex: 'x = 0: \\text{ single root, so } C \\text{ crosses the } x\\text{-axis.}\\newline x = 3: \\text{ repeated root, so } C \\text{ touches the } x\\text{-axis.}',
                    explanation: 'A double (repeated) root means the curve just touches the axis — it does not cross.'
                },
                {
                    stepNumber: 3,
                    description: '(b) The curve is above the \\( x \\)-axis for \\( 0 < x < 3 \\) since \\( y = x(x-3)^2 \\geq 0 \\). Integrate.',
                    workingLatex: '\\int_0^3 x(x-3)^2\\, \\mathrm{d}x = \\int_0^3 (x^3 - 6x^2 + 9x)\\, \\mathrm{d}x = \\left[\\dfrac{x^4}{4} - 2x^3 + \\dfrac{9x^2}{2}\\right]_0^3',
                    explanation: 'Expand then integrate.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply limits.',
                    workingLatex: '\\left(\\dfrac{81}{4} - 54 + \\dfrac{81}{2}\\right) - 0 = \\dfrac{81}{4} + \\dfrac{162}{4} - \\dfrac{216}{4} = \\dfrac{27}{4}',
                    explanation: '\\( \\tfrac{81}{4} - 54 + \\tfrac{81}{2} = \\tfrac{81 + 162 - 216}{4} = \\tfrac{27}{4} \\).'
                },
                {
                    stepNumber: 5,
                    description: '(c) Since \\( v = x(x-3)^2 \\geq 0 \\) for all \\( x \\in [0,3] \\), the velocity is never negative — the object never reverses direction. Total distance = area under \\( v \\)-\\( t \\) graph.',
                    workingLatex: '\\text{Distance} = \\int_0^3 x(x-3)^2\\, \\mathrm{d}x = \\dfrac{27}{4} \\text{ m}',
                    explanation: 'Distance equals the definite integral since \\( v \\geq 0 \\) throughout.'
                }
            ],
            finalAnswer: '(b) \\(\\dfrac{27}{4}\\) square units \\quad (c) Object does not reverse as \\(v \\geq 0\\) for \\(x \\in [0,3]\\); distance \\(= \\dfrac{27}{4}\\) m'
        }
    },
    {
        id: 'i2-036',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 36',
        difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\displaystyle\\int_1^4 3x^2 \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'power rule'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate.', workingLatex: '\\int 3x^2 \\, \\mathrm{d}x = x^3', explanation: 'Power rule: \\( \\int 3x^2\\,\\mathrm{d}x = 3\\cdot\\dfrac{x^3}{3} = x^3 \\). No \\( +C \\) is needed because the constant cancels in \\( F(b) - F(a) \\).' },
                { stepNumber: 2, description: 'Apply limits.', workingLatex: '[x^3]_1^4 = 64 - 1 = 63', explanation: 'Evaluate \\( F(4) - F(1) \\). Always subtract lower-limit value from upper-limit value — swapping them would flip the sign.' }
            ],
            finalAnswer: '\\( 63 \\)'
        }
    },
    {
        id: 'i2-037',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 37',
        difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\displaystyle\\int_0^3 (4x - 1) \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'linear'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate.', workingLatex: '\\int (4x - 1) \\, \\mathrm{d}x = 2x^2 - x', explanation: 'Apply the power rule term by term. The constant of integration is dropped since it cancels when we subtract \\( F(b) - F(a) \\).' },
                { stepNumber: 2, description: 'Apply limits.', workingLatex: '[2x^2 - x]_0^3 = (18 - 3) - 0 = 15', explanation: 'Evaluate the antiderivative at \\( x = 3 \\) and \\( x = 0 \\), then subtract the lower-limit value from the upper.' }
            ],
            finalAnswer: '\\( 15 \\)'
        }
    },
    {
        id: 'i2-038',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 38',
        difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\displaystyle\\int_2^5 6x \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'linear'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate.', workingLatex: '\\int 6x \\, \\mathrm{d}x = 3x^2', explanation: 'Power rule: \\( \\int 6x\\,\\mathrm{d}x = 6\\cdot\\dfrac{x^2}{2} = 3x^2 \\). No \\( +C \\) needed for a definite integral.' },
                { stepNumber: 2, description: 'Apply limits.', workingLatex: '[3x^2]_2^5 = 75 - 12 = 63', explanation: 'Compute \\( 3(5)^2 - 3(2)^2 = 75 - 12 \\). Upper minus lower — never the other way round.' }
            ],
            finalAnswer: '\\( 63 \\)'
        }
    },
    {
        id: 'i2-039',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 39',
        difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\displaystyle\\int_{-1}^{2} (x^2 + 3) \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'negative limit'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate.', workingLatex: '\\int (x^2 + 3) \\, \\mathrm{d}x = \\frac{x^3}{3} + 3x', explanation: 'Apply the power rule term by term. The constant of integration cancels in \\( F(b) - F(a) \\), so we omit it.' },
                { stepNumber: 2, description: 'Apply limits.', workingLatex: '\\left(\\frac{8}{3} + 6\\right) - \\left(-\\frac{1}{3} - 3\\right) = \\frac{26}{3} + \\frac{10}{3} = 12', explanation: 'Substitute \\( x = 2 \\) then \\( x = -1 \\) and subtract. Be careful with signs at the negative limit: \\( (-1)^3 = -1 \\), and subtracting a negative becomes addition.' }
            ],
            finalAnswer: '\\( 12 \\)'
        }
    },
    {
        id: 'i2-040',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 40',
        difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\displaystyle\\int_0^1 (5x^4 + 2x) \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'polynomial'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate.', workingLatex: '\\int (5x^4 + 2x) \\, \\mathrm{d}x = x^5 + x^2', explanation: '\\( 5x^4 \\to 5\\cdot\\dfrac{x^5}{5} = x^5 \\) and \\( 2x \\to x^2 \\). No \\( +C \\) — it would cancel in the subtraction \\( F(b) - F(a) \\).' },
                { stepNumber: 2, description: 'Apply limits.', workingLatex: '[x^5 + x^2]_0^1 = (1 + 1) - 0 = 2', explanation: 'Evaluate at \\( x = 1 \\) then \\( x = 0 \\). The lower-limit contribution is zero, so the integral equals \\( F(1) \\).' }
            ],
            finalAnswer: '\\( 2 \\)'
        }
    },
    {
        id: 'i2-041',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 41',
        difficulty: 'Standard',
        questionText: 'Evaluate \\( \\displaystyle\\int_1^4 2\\sqrt{x} \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'root', 'rewrite'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite and integrate.', workingLatex: '\\int 2x^{\\frac{1}{2}} \\, \\mathrm{d}x = \\frac{4}{3} x^{\\frac{3}{2}}', explanation: 'Use \\( \\sqrt{x} = x^{1/2} \\), then apply the power rule with \\( n = \\tfrac{1}{2} \\): \\( 2\\cdot\\dfrac{x^{3/2}}{3/2} = \\dfrac{4}{3}x^{3/2} \\).' },
                { stepNumber: 2, description: 'Apply limits.', workingLatex: '\\frac{4}{3}(8) - \\frac{4}{3}(1) = \\frac{32}{3} - \\frac{4}{3} = \\frac{28}{3}', explanation: '\\( 4^{3/2} = (\\sqrt{4})^3 = 8 \\) and \\( 1^{3/2} = 1 \\). Subtract \\( F(1) \\) from \\( F(4) \\).' }
            ],
            finalAnswer: '\\( \\dfrac{28}{3} \\)'
        }
    },
    {
        id: 'i2-042',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 42',
        difficulty: 'Standard',
        questionText: 'Evaluate \\( \\displaystyle\\int_1^3 \\frac{4}{x^2} \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'negative index'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite and integrate.', workingLatex: '\\int 4x^{-2} \\, \\mathrm{d}x = -\\frac{4}{x}', explanation: 'Power rule with \\( n = -2 \\): \\( 4\\cdot\\dfrac{x^{-1}}{-1} = -\\dfrac{4}{x} \\). The \\( +C \\) is dropped because it cancels in the final subtraction.' },
                { stepNumber: 2, description: 'Apply limits.', workingLatex: '-\\frac{4}{3} - (-4) = -\\frac{4}{3} + 4 = \\frac{8}{3}', explanation: 'Compute \\( F(3) - F(1) \\). Subtracting a negative becomes addition.' }
            ],
            finalAnswer: '\\( \\dfrac{8}{3} \\)'
        }
    },
    {
        id: 'i2-043',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 43',
        difficulty: 'Standard',
        questionText: 'Find the area under \\( y = x^2 + 1 \\) between \\( x = 0 \\) and \\( x = 3 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'area under curve'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Evaluate.', workingLatex: '\\left[\\frac{x^3}{3} + x\\right]_0^3 = 9 + 3 = 12', explanation: 'The curve \\( y = x^2 + 1 \\) is positive for all real \\( x \\), so the definite integral equals the signed area, which here is the actual area. Integrate, then compute \\( F(3) - F(0) \\).' }
            ],
            finalAnswer: '\\( 12 \\) square units'
        }
    },
    {
        id: 'i2-044',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 44',
        difficulty: 'Standard',
        questionText: 'Find the area between \\( y = 6x - x^2 \\) and the \\( x \\)-axis.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['definite integration', 'area', 'find limits', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Find roots.', workingLatex: '6x - x^2 = 0 \\implies x(6-x) = 0 \\implies x = 0, 6', explanation: 'The roots give the bounds of the enclosed region. Between them, the downward-opening parabola lies above the \\( x \\)-axis, so the integral gives the area directly.' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\left[3x^2 - \\frac{x^3}{3}\\right]_0^6 = 108 - 72 = 36', explanation: 'A definite integral equals signed area between curve and \\( x \\)-axis. The curve is above the axis on \\([0,6]\\), so this value is the actual area.' }
            ],
            finalAnswer: '\\( 36 \\) square units'
        }
    },
    {
        id: 'i2-045',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 45',
        difficulty: 'Standard',
        questionText: 'Evaluate \\( \\displaystyle\\int_{-2}^{1} (3x^2 - 2x) \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'negative limit'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Evaluate.', workingLatex: '[x^3 - x^2]_{-2}^{1} = (1 - 1) - (-8 - 4) = 0 + 12 = 12', explanation: 'Antiderivative is \\( x^3 - x^2 \\). Substitute upper limit \\( x = 1 \\) and lower limit \\( x = -2 \\), then subtract. Take care with \\( (-2)^3 = -8 \\) — cubing a negative gives a negative.' }
            ],
            finalAnswer: '\\( 12 \\)'
        }
    },
    {
        id: 'i2-046',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 46',
        difficulty: 'Standard',
        questionText: 'Evaluate \\( \\displaystyle\\int_1^9 \\frac{3}{\\sqrt{x}} \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'root'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate.', workingLatex: '\\int 3x^{-\\frac{1}{2}} \\, \\mathrm{d}x = 6\\sqrt{x}', explanation: 'Rewrite \\( \\dfrac{3}{\\sqrt{x}} = 3x^{-1/2} \\), then use the power rule: \\( 3\\cdot\\dfrac{x^{1/2}}{1/2} = 6x^{1/2} = 6\\sqrt{x} \\).' },
                { stepNumber: 2, description: 'Apply limits.', workingLatex: '6(3) - 6(1) = 12', explanation: '\\( \\sqrt{9} = 3 \\) and \\( \\sqrt{1} = 1 \\). Subtract the lower-limit value from the upper.' }
            ],
            finalAnswer: '\\( 12 \\)'
        }
    },
    {
        id: 'i2-047',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 47',
        difficulty: 'Standard',
        questionText: 'Find the area under \\( y = 4 - x^2 \\) above the \\( x \\)-axis.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['definite integration', 'area', 'find limits', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Find roots.', workingLatex: '4 - x^2 = 0 \\implies x = \\pm 2', explanation: 'The roots \\( x = \\pm 2 \\) are the natural bounds — between them the parabola is above the \\( x \\)-axis, so the integral over \\([-2, 2]\\) gives the area directly without sign correction.' },
                { stepNumber: 2, description: 'Evaluate.', workingLatex: '\\left[4x - \\frac{x^3}{3}\\right]_{-2}^{2} = \\frac{16}{3} + \\frac{16}{3} = \\frac{32}{3}', explanation: 'Compute \\( F(2) - F(-2) = \\left(8 - \\tfrac{8}{3}\\right) - \\left(-8 + \\tfrac{8}{3}\\right) = \\tfrac{16}{3} + \\tfrac{16}{3} \\).' }
            ],
            finalAnswer: '\\( \\dfrac{32}{3} \\) square units'
        }
    },
    {
        id: 'i2-048',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 48',
        difficulty: 'Standard',
        questionText: 'Evaluate \\( \\displaystyle\\int_0^2 x(x + 3) \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'expand first'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand and integrate.', workingLatex: '\\left[\\frac{x^3}{3} + \\frac{3x^2}{2}\\right]_0^2 = \\frac{8}{3} + 6 = \\frac{26}{3}', explanation: 'Expand \\( x(x+3) = x^2 + 3x \\), apply the power rule to each term (no \\( +C \\) needed), then compute \\( F(2) - F(0) \\). The lower limit gives zero.' }
            ],
            finalAnswer: '\\( \\dfrac{26}{3} \\)'
        }
    },
    {
        id: 'i2-049',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 49',
        difficulty: 'Standard',
        questionText: 'Evaluate \\( \\displaystyle\\int_1^4 \\left( x + \\frac{1}{x^2} \\right) \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'mixed terms'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate and evaluate.', workingLatex: '\\left[\\frac{x^2}{2} - \\frac{1}{x}\\right]_1^4 = \\left(8 - \\frac{1}{4}\\right) - \\left(\\frac{1}{2} - 1\\right) = \\frac{31}{4} + \\frac{1}{2} = \\frac{33}{4}', explanation: 'Rewrite \\( \\dfrac{1}{x^2} = x^{-2} \\) so \\( \\int x^{-2}\\,\\mathrm{d}x = -\\dfrac{1}{x} \\). Then compute \\( F(4) - F(1) \\), being careful with signs of the negative-power term.' }
            ],
            finalAnswer: '\\( \\dfrac{33}{4} \\)'
        }
    },
    {
        id: 'i2-050',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 50',
        difficulty: 'Standard',
        questionText: 'Evaluate \\( \\displaystyle\\int_0^1 (2x + 1)^2 \\, \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'expand first'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand.', workingLatex: '(2x+1)^2 = 4x^2 + 4x + 1', explanation: 'Use \\( (a+b)^2 = a^2 + 2ab + b^2 \\) before integrating — the power rule only applies to single powers of \\( x \\), not to squared binomials.' },
                { stepNumber: 2, description: 'Evaluate.', workingLatex: '\\left[\\frac{4x^3}{3} + 2x^2 + x\\right]_0^1 = \\frac{4}{3} + 2 + 1 = \\frac{13}{3}', explanation: 'Integrate term by term, then compute \\( F(1) - F(0) \\). The lower-limit contribution is zero.' }
            ],
            finalAnswer: '\\( \\dfrac{13}{3} \\)'
        }
    },
    {
        id: 'i2-051',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 51',
        difficulty: 'Standard',
        questionText: 'Find the area enclosed between \\( y = x^2 - 4x \\) and the \\( x \\)-axis.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['definite integration', 'area', 'below axis', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Roots.', workingLatex: 'x(x-4) = 0 \\implies x = 0, 4', explanation: 'The roots give the bounds of the enclosed region. The upward-opening parabola dips below the \\( x \\)-axis between its roots.' },
                { stepNumber: 2, description: 'Curve is below axis.', workingLatex: '\\int_0^4 (x^2-4x)\\,\\mathrm{d}x = \\left[\\frac{x^3}{3}-2x^2\\right]_0^4 = \\frac{64}{3}-32 = -\\frac{32}{3}', explanation: 'A definite integral gives signed area: regions below the \\( x \\)-axis contribute negatively. The negative value here confirms the curve is below the axis on \\([0,4]\\).' },
                { stepNumber: 3, description: 'Area.', workingLatex: '\\text{Area} = \\frac{32}{3}', explanation: 'Take the absolute value because area is always positive. If the curve had crossed the axis inside the interval, we would split at the crossing and take \\(|\\cdot|\\) of each piece before adding.' }
            ],
            finalAnswer: '\\( \\dfrac{32}{3} \\) square units'
        }
    },
    {
        id: 'i2-052',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 52',
        difficulty: 'Standard',
        questionText: 'Evaluate \\( \\displaystyle\\int_1^8 \\frac{2}{\\sqrt[3]{x}} \\, \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'cube root'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite and integrate.', workingLatex: '\\int 2x^{-\\frac{1}{3}}\\,\\mathrm{d}x = 3x^{\\frac{2}{3}}', explanation: 'Rewrite \\( \\dfrac{2}{\\sqrt[3]{x}} = 2x^{-1/3} \\), then apply the power rule with \\( n = -\\tfrac{1}{3} \\): \\( 2\\cdot\\dfrac{x^{2/3}}{2/3} = 3x^{2/3} \\).' },
                { stepNumber: 2, description: 'Apply limits.', workingLatex: '3(4) - 3(1) = 9', explanation: '\\( 8^{\\frac{2}{3}} = (\\sqrt[3]{8})^2 = 2^2 = 4 \\) and \\( 1^{2/3} = 1 \\). Subtract \\( F(1) \\) from \\( F(8) \\).' }
            ],
            finalAnswer: '\\( 9 \\)'
        }
    },
    {
        id: 'i2-053',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 53',
        difficulty: 'Standard',
        questionText: 'Find the area bounded by \\( y = \\sqrt{x} \\), the \\( x \\)-axis, and \\( x = 9 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['definite integration', 'area', 'root', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate.', workingLatex: '\\left[\\frac{2}{3}x^{\\frac{3}{2}}\\right]_0^9 = \\frac{2}{3}(27) = 18', explanation: 'The natural lower bound is \\( x = 0 \\), where \\( y = \\sqrt{x} \\) meets the \\( x \\)-axis. The curve is above the axis on \\([0,9]\\), so the integral gives the area directly. \\( 9^{3/2} = (\\sqrt{9})^3 = 27 \\).' }
            ],
            finalAnswer: '\\( 18 \\) square units'
        }
    },
    {
        id: 'i2-054',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 54',
        difficulty: 'Standard',
        questionText: 'Evaluate \\( \\displaystyle\\int_{-1}^{3} (x-1)(x+2) \\, \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'expand first'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand.', workingLatex: '(x-1)(x+2) = x^2 + x - 2', explanation: 'Multiply out the brackets so the power rule can be applied term by term.' },
                { stepNumber: 2, description: 'Evaluate.', workingLatex: '\\left[\\frac{x^3}{3}+\\frac{x^2}{2}-2x\\right]_{-1}^{3} = \\frac{15}{2} - \\frac{13}{6} = \\frac{16}{3}', explanation: 'At \\( x = 3 \\): \\( 9 + \\tfrac{9}{2} - 6 = \\tfrac{15}{2} \\). At \\( x = -1 \\): \\( -\\tfrac{1}{3} + \\tfrac{1}{2} + 2 = \\tfrac{13}{6} \\). Subtract upper minus lower.' }
            ],
            finalAnswer: '\\( \\dfrac{16}{3} \\)'
        }
    },
    {
        id: 'i2-055',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 55',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int_1^4 \\frac{x^2 + 1}{\\sqrt{x}} \\, \\mathrm{d}x \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['definite integration', 'simplify first', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Simplify.', workingLatex: 'x^{\\frac{3}{2}} + x^{-\\frac{1}{2}}', explanation: 'Divide each numerator term by \\( x^{1/2} \\): \\( \\dfrac{x^2}{x^{1/2}} = x^{3/2} \\) and \\( \\dfrac{1}{x^{1/2}} = x^{-1/2} \\). The integrand must be a sum of powers of \\( x \\) before the power rule can be applied.' },
                { stepNumber: 2, description: 'Integrate and evaluate.', workingLatex: '\\left[\\frac{2}{5}x^{\\frac{5}{2}} + 2x^{\\frac{1}{2}}\\right]_1^4 = \\left(\\frac{64}{5}+4\\right)-\\left(\\frac{2}{5}+2\\right) = \\frac{62}{5}+2 = \\frac{72}{5}', explanation: '\\( 4^{5/2} = (\\sqrt{4})^5 = 32 \\) and \\( 4^{1/2} = 2 \\). Compute \\( F(4) - F(1) \\).' }
            ],
            finalAnswer: '\\( \\dfrac{72}{5} \\)'
        }
    },
    {
        id: 'i2-056',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 56',
        difficulty: 'Standard',
        questionText: 'Given that \\( \\displaystyle\\int_0^k 2x \\, \\mathrm{d}x = 18 \\), find \\( k \\) where \\( k > 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'unknown limit'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate and solve.', workingLatex: '[x^2]_0^k = k^2 = 18 \\implies k = 3\\sqrt{2}', explanation: '\\( \\int 2x\\,\\mathrm{d}x = x^2 \\); evaluating between 0 and \\( k \\) gives \\( k^2 \\). Solve \\( k^2 = 18 \\) and take the positive root since \\( k > 0 \\). Simplify the surd: \\( \\sqrt{18} = 3\\sqrt{2} \\).' }
            ],
            finalAnswer: '\\( k = 3\\sqrt{2} \\)'
        }
    },
    {
        id: 'i2-057',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 57',
        difficulty: 'Standard',
        questionText: 'Given that \\( \\displaystyle\\int_1^k 3x^2 \\, \\mathrm{d}x = 26 \\), find \\( k \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['definite integration', 'unknown limit', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate and solve.', workingLatex: '[x^3]_1^k = k^3 - 1 = 26 \\implies k^3 = 27 \\implies k = 3', explanation: 'Antiderivative is \\( x^3 \\). Evaluating from 1 to \\( k \\) gives \\( k^3 - 1 \\) (upper limit minus lower limit — never reverse the order). Solve the cubic equation in \\( k \\).' }
            ],
            finalAnswer: '\\( k = 3 \\)'
        }
    },
    {
        id: 'i2-058',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 58',
        difficulty: 'Standard',
        questionText: 'Find the area enclosed between \\( y = x^2 \\) and \\( y = 4 \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['definite integration', 'area between curves', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Intersections.', workingLatex: 'x^2 = 4 \\implies x = \\pm 2', explanation: 'Equate the two \\( y \\)-values to find where the curves cross — these are the limits of the enclosed region.' },
                { stepNumber: 2, description: 'Top minus bottom.', workingLatex: '\\int_{-2}^{2}(4-x^2)\\,\\mathrm{d}x = \\left[4x-\\frac{x^3}{3}\\right]_{-2}^{2} = \\frac{32}{3}', explanation: 'For area between two curves, integrate (upper − lower) across the intersection bounds. On \\((-2, 2)\\), the line \\( y = 4 \\) lies above the parabola \\( y = x^2 \\), so we integrate \\( 4 - x^2 \\).' }
            ],
            finalAnswer: '\\( \\dfrac{32}{3} \\) square units'
        }
    },
    {
        id: 'i2-059',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 59',
        difficulty: 'Standard',
        questionText: 'Find the area between \\( y = x^2 \\) and \\( y = x \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['definite integration', 'area between curves', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Intersections.', workingLatex: 'x^2 = x \\implies x(x-1)=0 \\implies x=0,1', explanation: 'Set the two equations equal to find the \\( x \\)-values where the curves cross. These give the integration limits.' },
                { stepNumber: 2, description: 'Top minus bottom.', workingLatex: '\\int_0^1(x-x^2)\\,\\mathrm{d}x = \\left[\\frac{x^2}{2}-\\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2}-\\frac{1}{3}=\\frac{1}{6}', explanation: 'For \\( 0 < x < 1 \\), test \\( x = \\tfrac{1}{2} \\): \\( y = \\tfrac{1}{2} \\) on the line and \\( \\tfrac{1}{4} \\) on the parabola, so the line is on top. Integrate (upper − lower) = \\( x - x^2 \\).' }
            ],
            finalAnswer: '\\( \\dfrac{1}{6} \\) square units'
        }
    },
    {
        id: 'i2-060',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 60',
        difficulty: 'Standard',
        questionText: 'Evaluate \\( \\displaystyle\\int_1^4 \\left(\\sqrt{x} - \\frac{1}{\\sqrt{x}}\\right) \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'roots'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate and evaluate.', workingLatex: '\\left[\\frac{2}{3}x^{\\frac{3}{2}}-2x^{\\frac{1}{2}}\\right]_1^4 = \\left(\\frac{16}{3}-4\\right)-\\left(\\frac{2}{3}-2\\right) = \\frac{4}{3}+\\frac{4}{3}=\\frac{8}{3}', explanation: 'Rewrite \\( \\sqrt{x} = x^{1/2} \\) and \\( \\dfrac{1}{\\sqrt{x}} = x^{-1/2} \\), then apply the power rule to each. Compute \\( F(4) - F(1) \\) — subtracting a negative becomes addition.' }
            ],
            finalAnswer: '\\( \\dfrac{8}{3} \\)'
        }
    },
    {
        id: 'i2-061',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 61',
        difficulty: 'Standard',
        questionText: 'Show that \\( \\displaystyle\\int_0^2 (3x^2 + 2x + 1) \\, \\mathrm{d}x = 14 \\).',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['definite integration', 'show that', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Evaluate.', workingLatex: '[x^3+x^2+x]_0^2 = 8+4+2 = 14 \\, \\checkmark', explanation: 'Integrate term by term (no \\( +C \\) needed for a definite integral) and compute \\( F(2) - F(0) \\). The result matches the given value, completing the proof.' }
            ],
            finalAnswer: 'Shown: \\( 14 \\)'
        }
    },
    {
        id: 'i2-062',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 62',
        difficulty: 'Standard',
        questionText: 'Find the area between \\( y = x^3 - 4x \\) and the \\( x \\)-axis for \\( 0 \\le x \\le 2 \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['definite integration', 'area', 'below axis', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Curve is below axis for \\( 0 < x < 2 \\).', workingLatex: '\\int_0^2(x^3-4x)\\,\\mathrm{d}x = \\left[\\frac{x^4}{4}-2x^2\\right]_0^2 = 4-8 = -4', explanation: 'Test \\( x = 1 \\): \\( y = 1 - 4 = -3 < 0 \\), confirming the curve is below the \\( x \\)-axis on \\((0, 2)\\). The integral is therefore negative — it gives signed area, not actual area.' },
                { stepNumber: 2, description: 'Area.', workingLatex: '\\text{Area} = 4', explanation: 'Take the absolute value of the integral because area is positive. Note the curve does not cross the axis between 0 and 2, so no splitting is needed.' }
            ],
            finalAnswer: '\\( 4 \\) square units'
        }
    },
    {
        id: 'i2-063',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 63',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int_1^2 \\frac{x^4 + x^2}{x^2} \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'simplify first'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Simplify to \\( x^2 + 1 \\).', workingLatex: '\\left[\\frac{x^3}{3}+x\\right]_1^2 = \\frac{14}{3}-\\frac{4}{3} = \\frac{10}{3}', explanation: 'Divide each numerator term by \\( x^2 \\): \\( \\dfrac{x^4 + x^2}{x^2} = x^2 + 1 \\). Then integrate and compute \\( F(2) - F(1) \\).' }
            ],
            finalAnswer: '\\( \\dfrac{10}{3} \\)'
        }
    },
    {
        id: 'i2-064',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 64',
        difficulty: 'Standard',
        questionText: 'Find the area between \\( y = 6 - x^2 \\) and \\( y = 2 \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['definite integration', 'area between curves', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Intersections.', workingLatex: '6-x^2=2 \\implies x = \\pm 2', explanation: 'Set the two equations equal to locate where the curve meets the horizontal line. These give the bounds of integration.' },
                { stepNumber: 2, description: 'Evaluate.', workingLatex: '\\int_{-2}^{2}(4-x^2)\\,\\mathrm{d}x = \\frac{32}{3}', explanation: 'For area between two curves, integrate (upper − lower) between the intersections. On \\((-2, 2)\\), the parabola \\( y = 6 - x^2 \\) lies above the line \\( y = 2 \\), so the integrand is \\( (6 - x^2) - 2 = 4 - x^2 \\).' }
            ],
            finalAnswer: '\\( \\dfrac{32}{3} \\) square units'
        }
    },
    {
        id: 'i2-065',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 65',
        difficulty: 'Standard',
        questionText: 'Given that \\( \\displaystyle\\int_0^a 3x^2 \\, \\mathrm{d}x = 8 \\), find \\( a \\) where \\( a > 0 \\).',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['definite integration', 'unknown limit', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Solve.', workingLatex: '[x^3]_0^a = a^3 = 8 \\implies a = 2', explanation: 'The antiderivative of \\( 3x^2 \\) is \\( x^3 \\); evaluated from 0 to \\( a \\) it equals \\( a^3 \\). Solve the cubic, taking the positive root since \\( a > 0 \\).' }
            ],
            finalAnswer: '\\( a = 2 \\)'
        }
    },
    {
        id: 'i2-066',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 66',
        difficulty: 'Standard',
        questionText: 'Find the area between \\( y = x^2 \\) and \\( y = 2x \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['definite integration', 'area between curves', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Intersections.', workingLatex: 'x^2=2x \\implies x(x-2)=0 \\implies x=0,2', explanation: 'Set the two equations equal to find where they cross — these are the limits of the enclosed region.' },
                { stepNumber: 2, description: 'Evaluate.', workingLatex: '\\int_0^2(2x-x^2)\\,\\mathrm{d}x = \\left[x^2-\\frac{x^3}{3}\\right]_0^2 = 4-\\frac{8}{3}=\\frac{4}{3}', explanation: 'On \\((0, 2)\\), test \\( x = 1 \\): \\( y = 2 \\) on the line and \\( y = 1 \\) on the parabola, so the line is above. Integrate (upper − lower) = \\( 2x - x^2 \\) across the bounds.' }
            ],
            finalAnswer: '\\( \\dfrac{4}{3} \\) square units'
        }
    },
    {
        id: 'i2-067',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 67',
        difficulty: 'Standard',
        questionText: 'Evaluate \\( \\displaystyle\\int_0^4 \\left(3\\sqrt{x} - 2\\right) \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['definite integration', 'root'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Evaluate.', workingLatex: '\\left[2x^{\\frac{3}{2}} - 2x\\right]_0^4 = (16 - 8) - 0 = 8', explanation: 'Rewrite \\( 3\\sqrt{x} = 3x^{1/2} \\). Power rule gives \\( 3\\cdot\\dfrac{x^{3/2}}{3/2} = 2x^{3/2} \\). At \\( x = 4 \\): \\( 2(8) - 2(4) = 8 \\); at \\( x = 0 \\): \\( 0 \\).' }
            ],
            finalAnswer: '\\( 8 \\)'
        }
    },
    {
        id: 'i2-068',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 68',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int_{-1}^{2} (x+1)(x-2) \\, \\mathrm{d}x \\) and interpret your answer geometrically.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['definite integration', 'area', 'interpretation', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand.', workingLatex: 'x^2 - x - 2', explanation: 'Multiply out the brackets so the power rule applies term by term. Roots are \\( x = -1, 2 \\) — the upward parabola dips below the \\( x \\)-axis between them.' },
                { stepNumber: 2, description: 'Evaluate.', workingLatex: '\\left[\\frac{x^3}{3}-\\frac{x^2}{2}-2x\\right]_{-1}^{2} = -\\frac{9}{2}', explanation: 'At \\( x = 2 \\): \\( \\tfrac{8}{3} - 2 - 4 = -\\tfrac{10}{3} \\). At \\( x = -1 \\): \\( -\\tfrac{1}{3} - \\tfrac{1}{2} + 2 = \\tfrac{7}{6} \\). Subtract: \\( -\\tfrac{10}{3} - \\tfrac{7}{6} = -\\tfrac{27}{6} = -\\tfrac{9}{2} \\).' },
                { stepNumber: 3, description: 'Interpretation: the curve is below the \\( x \\)-axis between the roots.', workingLatex: '\\text{Area} = \\frac{9}{2} \\text{ square units}', explanation: 'Because the curve is below the \\( x \\)-axis on \\((-1, 2)\\), the integral is negative — it gives signed area. The actual area is the absolute value, \\( \\tfrac{9}{2} \\).' }
            ],
            finalAnswer: '\\( -\\dfrac{9}{2} \\); area \\( = \\dfrac{9}{2} \\) square units'
        }
    },
    {
        id: 'i2-069',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 69',
        difficulty: 'Standard',
        questionText: 'Find the area between \\( y = x^2 - 1 \\) and \\( y = 3 \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['definite integration', 'area between curves', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Intersections.', workingLatex: 'x^2 - 1 = 3 \\implies x^2 = 4 \\implies x = \\pm 2', explanation: 'Set the curve and the horizontal line equal to find where they meet. These give the integration bounds.' },
                { stepNumber: 2, description: 'Top minus bottom.', workingLatex: '\\int_{-2}^{2}(4-x^2)\\,\\mathrm{d}x = \\frac{32}{3}', explanation: 'Between intersections, integrate (upper − lower). The line \\( y = 3 \\) is above the parabola \\( y = x^2 - 1 \\) on \\((-2, 2)\\), so the integrand is \\( 3 - (x^2 - 1) = 4 - x^2 \\).' }
            ],
            finalAnswer: '\\( \\dfrac{32}{3} \\) square units'
        }
    },
    {
        id: 'i2-070',
        topicRef: 'i2',
        topicTitle: 'Definite Integration 70',
        difficulty: 'Standard',
        questionText: 'The region \\( R \\) is bounded by \\( y = x^2 + 2 \\), the \\( x \\)-axis, and the lines \\( x = 1 \\) and \\( x = 3 \\). Find the area of \\( R \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['definite integration', 'area', 'bounded region', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Evaluate.', workingLatex: '\\left[\\frac{x^3}{3}+2x\\right]_1^3 = 15 - \\frac{7}{3} = \\frac{38}{3}', explanation: 'The curve \\( y = x^2 + 2 \\geq 2 > 0 \\), so it lies above the \\( x \\)-axis throughout \\([1, 3]\\). The definite integral therefore gives the area directly. Compute \\( F(3) - F(1) \\).' }
            ],
            finalAnswer: '\\( \\dfrac{38}{3} \\) square units'
        }
    }
];



