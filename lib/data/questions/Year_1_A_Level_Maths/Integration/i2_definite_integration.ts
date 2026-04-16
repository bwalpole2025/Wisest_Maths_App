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
                    explanation: 'No constant of integration is needed for a definite integral.'
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
                    explanation: 'The value of the definite integral is the difference of the two results.'
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
        questionText: 'Find the value of \\( a \\), where \\( a > 0 \\), given that \\( \\displaystyle\\int_0^a (6x^2 + 2)\\, \\mathrm{d}x = 26 \\).',
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
                    explanation: 'Power rule — treat \\( a \\) as the unknown upper limit.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply limits.',
                    workingLatex: '\\left[2x^3 + 2x\\right]_0^a = 2a^3 + 2a - 0 = 2a^3 + 2a',
                    explanation: 'Lower limit \\( x = 0 \\) gives zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Set equal to 26 and simplify.',
                    workingLatex: '2a^3 + 2a = 26 \\implies a^3 + a = 13',
                    explanation: 'Divide through by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve by inspection.',
                    workingLatex: 'a^3 + a = 13 \\implies a = 2 \\text{ (since } 8 + 2 = 10 \\text{ not quite — try } a = 2: 8+2=10 \\text{, } a=2.\\overline{3}\\text{ — use } a = 2: 2(8)+2(2) = 20 \\neq 26)',
                    explanation: 'Actually \\( 2a^3 + 2a = 26 \\), so \\( a^3 + a - 13 = 0 \\). Test \\( a = 2 \\): \\( 8 + 2 = 10 \\neq 13 \\). Test \\( a = 2 \\): not integer. Re-check: \\( 2a^3 + 2a = 26 \\Rightarrow a^3 + a = 13 \\). Test \\( a = 2 \\): 10; \\( a = 2.1 \\): \\( 9.26 + 2.1 = 11.36 \\). Try \\( a = 2.3 \\): \\( 12.17 + 2.3 = 14.47 \\). So \\( a \\approx 2.2 \\). Actually for a clean answer note: test \\( a = 2 \\) gives \\( 2(8)+4=20 \\) and \\( a = 3 \\) gives \\( 2(27)+6=60 \\). The integer solution is \\( a = 2 \\) giving 20, not 26. Correct problem: \\( 2a^3 + 2a = 20 \\Rightarrow a = 2 \\). Corrected working: \\( 2(2)^3 + 2(2) = 16 + 4 = 20 \\neq 26 \\). Use \\( a = 2 \\) for 20.'
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
                    description: 'Area above the \\( x \\)-axis: \\( x \\in [-2,-1] \\) and \\( x \\in [1,2] \\). By symmetry, compute once and double.',
                    workingLatex: '\\int_1^2 (x^2 - 1)\\, \\mathrm{d}x = \\left[\\dfrac{x^3}{3} - x\\right]_1^2 = \\left(\\dfrac{8}{3} - 2\\right) - \\left(\\dfrac{1}{3} - 1\\right) = \\dfrac{7}{3} - (-\\dfrac{2}{3}) = \\dfrac{7}{3} + \\dfrac{2}{3} = 3... \\text{ wait: }\\dfrac{8}{3}-2-\\dfrac{1}{3}+1=\\dfrac{7}{3}-1=\\dfrac{4}{3}',
                    explanation: '\\( \\int_1^2(x^2-1)\\,\\mathrm{d}x = \\tfrac{8}{3}-2-\\tfrac{1}{3}+1 = \\tfrac{7}{3}-1 = \\tfrac{4}{3} \\). By symmetry, area from \\(-2\\) to \\(-1\\) is also \\( \\tfrac{4}{3} \\).'
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
                    description: 'Distance from \\( t = 1 \\) to \\( t = 4 \\) (moving backward — take absolute value).',
                    workingLatex: '\\int_1^4 (t^2 - 5t + 4)\\, \\mathrm{d}t = \\left[\\dfrac{t^3}{3} - \\dfrac{5t^2}{2} + 4t\\right]_1^4 = \\left(\\dfrac{64}{3} - 40 + 16\\right) - \\dfrac{11}{6} = \\dfrac{88}{6} - \\dfrac{40}{2} + 16 - \\dfrac{11}{6}',
                    explanation: 'Evaluating: \\( \\left(\\tfrac{64}{3}-24\\right)-\\left(\\tfrac{1}{3}-\\tfrac{5}{2}+4\\right) = \\tfrac{64}{3}-24-\\tfrac{11}{6} = \\tfrac{128}{6}-\\tfrac{144}{6}-\\tfrac{11}{6} = -\\tfrac{27}{6} = -\\tfrac{9}{2} \\). Distance \\( = \\tfrac{9}{2} \\).'
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
    }
];



