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

    // TYPE A (Q1–5): Using log_a(xy) = log_a x + log_a y
    {
        id: 'el3-001',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 01',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Write \\( \\log_3 5 + \\log_3 4 \\) as a single logarithm.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'product rule', 'single logarithm'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the product law: \\( \\log_a x + \\log_a y = \\log_a(xy) \\).',
                    workingLatex: '\\log_3 5 + \\log_3 4 = \\log_3(5 \\times 4)',
                    explanation: 'The product law \\( \\log_a x + \\log_a y = \\log_a(xy) \\) lets us combine a sum of logs with the same base into a single log of the product. Crucially, this is multiplication inside the log — not \\( \\log_a(x+y) \\), which is a common error.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the product.',
                    workingLatex: '\\log_3(20)',
                    explanation: '5 × 4 = 20.'
                }
            ],
            finalAnswer: '\\( \\log_3 20 \\)'
        }
    },
    {
        id: 'el3-002',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 02',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Write \\( \\log_2 6 + \\log_2 3 \\) as a single logarithm.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'product rule', 'single logarithm'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the product law \\( \\log_a x + \\log_a y = \\log_a(xy) \\).',
                    workingLatex: '\\log_2 6 + \\log_2 3 = \\log_2(6 \\times 3)',
                    explanation: 'The two logs have the same base, so the product law applies.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply the arguments.',
                    workingLatex: '\\log_2(18)',
                    explanation: '6 × 3 = 18.'
                }
            ],
            finalAnswer: '\\( \\log_2 18 \\)'
        }
    },
    {
        id: 'el3-003',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 03',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Write \\( \\ln 7 + \\ln 4 \\) as a single logarithm.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'product rule', 'natural log'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the product law. Both terms are natural logarithms (base \\( e \\)).',
                    workingLatex: '\\ln 7 + \\ln 4 = \\ln(7 \\times 4)',
                    explanation: 'The product law works for any base, including \\( e \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '\\ln(28)',
                    explanation: '7 × 4 = 28.'
                }
            ],
            finalAnswer: '\\( \\ln 28 \\)'
        }
    },
    // TYPE B (Q4–7): Using log_a(x/y) = log_a x − log_a y
    {
        id: 'el3-004',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 04',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Write \\( \\log_5 40 - \\log_5 8 \\) as a single logarithm.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'quotient rule', 'single logarithm'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the quotient law: \\( \\log_a x - \\log_a y = \\log_a\\!\\left(\\dfrac{x}{y}\\right) \\).',
                    workingLatex: '\\log_5 40 - \\log_5 8 = \\log_5\\!\\left(\\frac{40}{8}\\right)',
                    explanation: 'Subtracting logs is equivalent to dividing the arguments.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the fraction.',
                    workingLatex: '\\log_5(5)',
                    explanation: '40 ÷ 8 = 5.'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate using \\( \\log_a a = 1 \\).',
                    workingLatex: '\\log_5 5 = 1',
                    explanation: 'Any log of its own base equals 1.'
                }
            ],
            finalAnswer: '\\( 1 \\)'
        }
    },
    {
        id: 'el3-005',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 05',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Write \\( \\log_3 54 - \\log_3 6 \\) as a single logarithm in its simplest form.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'quotient rule', 'evaluate'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the quotient law.',
                    workingLatex: '\\log_3 54 - \\log_3 6 = \\log_3\\!\\left(\\frac{54}{6}\\right)',
                    explanation: 'Subtracting logs with the same base means dividing the arguments.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify and evaluate.',
                    workingLatex: '\\log_3 9 = \\log_3 3^2 = 2',
                    explanation: '54 ÷ 6 = 9 = 3², so \\( \\log_3 9 = 2 \\).'
                }
            ],
            finalAnswer: '\\( 2 \\)'
        }
    },
    {
        id: 'el3-006',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 06',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Write \\( \\ln 30 - \\ln 5 \\) as a single natural logarithm.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'quotient rule', 'natural log'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the quotient law to the natural logs.',
                    workingLatex: '\\ln 30 - \\ln 5 = \\ln\\!\\left(\\frac{30}{5}\\right)',
                    explanation: 'Same rule applies regardless of whether the base is \\( e \\) or any other number.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '\\ln(6)',
                    explanation: '30 ÷ 5 = 6.'
                }
            ],
            finalAnswer: '\\( \\ln 6 \\)'
        }
    },
    // TYPE C (Q7–10): Using log_a(x^n) = n log_a x
    {
        id: 'el3-007',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 07',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Write \\( 4\\log_2 3 \\) as a single logarithm.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'power rule', 'single logarithm'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the power law: \\( n\\log_a x = \\log_a(x^n) \\).',
                    workingLatex: '4\\log_2 3 = \\log_2(3^4)',
                    explanation: 'The coefficient becomes the exponent of the argument.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate the power.',
                    workingLatex: '\\log_2(81)',
                    explanation: '3⁴ = 81.'
                }
            ],
            finalAnswer: '\\( \\log_2 81 \\)'
        }
    },
    {
        id: 'el3-008',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 08',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Write \\( \\dfrac{1}{2}\\log_{10} 49 \\) as a single logarithm in its simplest form.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'power rule', 'fractional power'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the power law.',
                    workingLatex: '\\frac{1}{2}\\log_{10} 49 = \\log_{10}(49^{1/2})',
                    explanation: 'The coefficient \\( \\frac{1}{2} \\) becomes the exponent.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the power — a half-power is a square root.',
                    workingLatex: '\\log_{10}(\\sqrt{49}) = \\log_{10} 7',
                    explanation: '\\( 49^{1/2} = 7 \\).'
                }
            ],
            finalAnswer: '\\( \\log_{10} 7 \\)'
        }
    },
    {
        id: 'el3-009',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 09',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Write \\( 3\\ln 2 \\) as a single natural logarithm.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'power rule', 'natural log'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the power law.',
                    workingLatex: '3\\ln 2 = \\ln(2^3)',
                    explanation: 'The coefficient 3 becomes the exponent of the argument.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate \\( 2^3 \\).',
                    workingLatex: '\\ln(8)',
                    explanation: '2³ = 8.'
                }
            ],
            finalAnswer: '\\( \\ln 8 \\)'
        }
    },
    {
        id: 'el3-010',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 10',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Write \\( -2\\log_5 3 \\) as a single logarithm.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'power rule', 'negative coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the power law, noting the coefficient is negative.',
                    workingLatex: '-2\\log_5 3 = \\log_5(3^{-2})',
                    explanation: 'A negative coefficient gives a negative exponent.'
                },
                {
                    stepNumber: 2,
                    description: 'Write with a positive exponent using index laws.',
                    workingLatex: '\\log_5\\!\\left(\\frac{1}{9}\\right)',
                    explanation: '\\( 3^{-2} = \\dfrac{1}{3^2} = \\dfrac{1}{9} \\).'
                }
            ],
            finalAnswer: '\\( \\log_5\\!\\left(\\dfrac{1}{9}\\right) \\)'
        }
    },
    // TYPE D (Q11–14): Combining all three laws — simplify expressions into a single log
    {
        id: 'el3-011',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 11',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Write \\( \\log_4 3 + \\log_4 5 - \\log_4 15 \\) as a single logarithm.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'product rule', 'quotient rule', 'combine'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Combine the first two terms using the product law.',
                    workingLatex: '\\log_4 3 + \\log_4 5 = \\log_4(15)',
                    explanation: '3 × 5 = 15.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the quotient law to the result and the remaining term.',
                    workingLatex: '\\log_4(15) - \\log_4(15) = \\log_4\\!\\left(\\frac{15}{15}\\right)',
                    explanation: 'Now use the quotient law.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: '\\log_4(1) = 0',
                    explanation: '\\( \\log_a 1 = 0 \\) for any valid base.'
                }
            ],
            finalAnswer: '\\( 0 \\)'
        }
    },
    {
        id: 'el3-012',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 12',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Write \\( 2\\log_{10} 5 + \\log_{10} 4 \\) as a single logarithm.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'power rule', 'product rule', 'combine'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the power law to the first term.',
                    workingLatex: '2\\log_{10} 5 = \\log_{10}(5^2) = \\log_{10}(25)',
                    explanation: '5² = 25.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the product law.',
                    workingLatex: '\\log_{10}(25) + \\log_{10}(4) = \\log_{10}(25 \\times 4)',
                    explanation: 'Now add the two log terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate.',
                    workingLatex: '\\log_{10}(100) = 2',
                    explanation: '25 × 4 = 100 and \\( \\log_{10} 100 = 2 \\).'
                }
            ],
            finalAnswer: '\\( 2 \\)'
        }
    },
    {
        id: 'el3-013',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 13',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Write \\( \\log_2 12 - 2\\log_2 3 + \\log_2 6 \\) as a single logarithm.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'power rule', 'quotient rule', 'product rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the power law to the middle term.',
                    workingLatex: '2\\log_2 3 = \\log_2(3^2) = \\log_2 9',
                    explanation: '3² = 9.'
                },
                {
                    stepNumber: 2,
                    description: 'Rewrite the expression.',
                    workingLatex: '\\log_2 12 - \\log_2 9 + \\log_2 6',
                    explanation: 'Now apply the quotient and product laws in order.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quotient law to the first two terms.',
                    workingLatex: '\\log_2\\!\\left(\\frac{12}{9}\\right) + \\log_2 6 = \\log_2\\!\\left(\\frac{4}{3}\\right) + \\log_2 6',
                    explanation: '12 ÷ 9 = 4/3.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the product law.',
                    workingLatex: '\\log_2\\!\\left(\\frac{4}{3} \\times 6\\right) = \\log_2(8) = 3',
                    explanation: '\\( \\frac{4}{3} \\times 6 = 8 \\) and \\( 2^3 = 8 \\).'
                }
            ],
            finalAnswer: '\\( 3 \\)'
        }
    },
    {
        id: 'el3-014',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 14',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Write \\( 3\\ln 2 - \\ln 4 \\) as a single natural logarithm.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'power rule', 'quotient rule', 'natural log'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the power law.',
                    workingLatex: '3\\ln 2 = \\ln(2^3) = \\ln 8',
                    explanation: '2³ = 8.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the quotient law.',
                    workingLatex: '\\ln 8 - \\ln 4 = \\ln\\!\\left(\\frac{8}{4}\\right) = \\ln 2',
                    explanation: '8 ÷ 4 = 2.'
                }
            ],
            finalAnswer: '\\( \\ln 2 \\)'
        }
    },
    // TYPE E (Q15–18): Expanding a single log using the laws in reverse
    {
        id: 'el3-015',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 15',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Express \\( \\log_a\\!\\left(\\dfrac{x^3}{y}\\right) \\) in terms of \\( \\log_a x \\) and \\( \\log_a y \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'expand', 'algebraic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the quotient law.',
                    workingLatex: '\\log_a\\!\\left(\\frac{x^3}{y}\\right) = \\log_a(x^3) - \\log_a(y)',
                    explanation: 'The fraction inside the log splits into subtraction.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law to \\( \\log_a(x^3) \\).',
                    workingLatex: '3\\log_a x - \\log_a y',
                    explanation: 'The power 3 comes down as a coefficient.'
                }
            ],
            finalAnswer: '\\( 3\\log_a x - \\log_a y \\)'
        }
    },
    {
        id: 'el3-016',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 16',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Express \\( \\ln(x^2 y) \\) in terms of \\( \\ln x \\) and \\( \\ln y \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'expand', 'natural log', 'algebraic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the product law.',
                    workingLatex: '\\ln(x^2 y) = \\ln(x^2) + \\ln(y)',
                    explanation: 'The product inside the log splits into addition.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law to \\( \\ln(x^2) \\).',
                    workingLatex: '2\\ln x + \\ln y',
                    explanation: 'The power 2 comes down as a coefficient.'
                }
            ],
            finalAnswer: '\\( 2\\ln x + \\ln y \\)'
        }
    },
    {
        id: 'el3-017',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 17',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Express \\( \\log_{10}\\!\\left(\\dfrac{100}{x^4}\\right) \\) in a simplified form using \\( \\log_{10} x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'expand', 'evaluate', 'power rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the quotient law.',
                    workingLatex: '\\log_{10}\\!\\left(\\frac{100}{x^4}\\right) = \\log_{10}(100) - \\log_{10}(x^4)',
                    explanation: 'The fraction splits into subtraction of logs.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate \\( \\log_{10}(100) \\).',
                    workingLatex: '\\log_{10}(100) = 2',
                    explanation: '\\( 10^2 = 100 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the power law to \\( \\log_{10}(x^4) \\).',
                    workingLatex: '2 - 4\\log_{10} x',
                    explanation: 'The power 4 comes down as a coefficient.'
                }
            ],
            finalAnswer: '\\( 2 - 4\\log_{10} x \\)'
        }
    },
    {
        id: 'el3-018',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 18',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Express \\( \\ln\\!\\left(\\dfrac{\\sqrt{x}}{e^2}\\right) \\) in a simplified form.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'expand', 'natural log', 'fractional power'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the quotient law.',
                    workingLatex: '\\ln\\!\\left(\\frac{\\sqrt{x}}{e^2}\\right) = \\ln(\\sqrt{x}) - \\ln(e^2)',
                    explanation: 'Numerator and denominator split into subtraction.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( \\sqrt{x} = x^{1/2} \\) and apply the power law.',
                    workingLatex: '\\frac{1}{2}\\ln x - \\ln(e^2)',
                    explanation: 'A square root is a half-power.'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate \\( \\ln(e^2) \\) using \\( \\ln(e^n) = n \\).',
                    workingLatex: '\\frac{1}{2}\\ln x - 2',
                    explanation: '\\( \\ln(e^2) = 2 \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{1}{2}\\ln x - 2 \\)'
        }
    },
    // TYPE F (Q19–22): Solving equations using the laws of logs
    {
        id: 'el3-019',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 19',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Solve \\( \\log_3 x + \\log_3 4 = \\log_3 28 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'solve', 'product rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the product law to combine the left-hand side.',
                    workingLatex: '\\log_3(4x) = \\log_3 28',
                    explanation: 'Both sides are now a single log with the same base.'
                },
                {
                    stepNumber: 2,
                    description: 'Since the logs are equal, the arguments must be equal.',
                    workingLatex: '4x = 28',
                    explanation: 'If \\( \\log_a A = \\log_a B \\), then \\( A = B \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = 7',
                    explanation: 'Divide both sides by 4.'
                }
            ],
            finalAnswer: '\\( x = 7 \\)'
        }
    },
    {
        id: 'el3-020',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 20',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Solve \\( \\log_2 x - \\log_2 5 = \\log_2 6 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'solve', 'quotient rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the quotient law on the left-hand side.',
                    workingLatex: '\\log_2\\!\\left(\\frac{x}{5}\\right) = \\log_2 6',
                    explanation: 'Combining the two log terms using the quotient law.'
                },
                {
                    stepNumber: 2,
                    description: 'Equate the arguments.',
                    workingLatex: '\\frac{x}{5} = 6',
                    explanation: 'If the logs are equal with the same base, the arguments are equal.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve.',
                    workingLatex: 'x = 30',
                    explanation: 'Multiply both sides by 5.'
                }
            ],
            finalAnswer: '\\( x = 30 \\)'
        }
    },
    {
        id: 'el3-021',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 21',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Solve \\( 2\\log_5 x = \\log_5 36 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'solve', 'power rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the power law to the left side.',
                    workingLatex: '\\log_5(x^2) = \\log_5 36',
                    explanation: 'The coefficient 2 becomes the exponent of \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Equate arguments.',
                    workingLatex: 'x^2 = 36',
                    explanation: 'Logs with the same base and equal values have equal arguments.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve, noting \\( x > 0 \\) since you cannot take the log of a negative number.',
                    workingLatex: 'x = 6',
                    explanation: '\\( x = \\pm 6 \\) from the square root, but \\( x > 0 \\) so \\( x = 6 \\).'
                }
            ],
            finalAnswer: '\\( x = 6 \\)'
        }
    },
    {
        id: 'el3-022',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 22',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Solve \\( \\log_4 x + \\log_4(x - 3) = 1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'solve', 'product rule', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the product law to combine the left-hand side.',
                    workingLatex: '\\log_4[x(x-3)] = 1',
                    explanation: 'Adding logs with the same base multiplies the arguments.'
                },
                {
                    stepNumber: 2,
                    description: 'Convert the right-hand side: \\( 1 = \\log_4 4 \\).',
                    workingLatex: '\\log_4[x(x-3)] = \\log_4 4',
                    explanation: 'Writing 1 as a log so both sides have the same form.'
                },
                {
                    stepNumber: 3,
                    description: 'Equate arguments and expand.',
                    workingLatex: 'x(x-3) = 4 \\Rightarrow x^2 - 3x - 4 = 0',
                    explanation: 'This gives a quadratic to solve.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise and solve, rejecting invalid solutions.',
                    workingLatex: '(x-4)(x+1) = 0 \\Rightarrow x = 4 \\text{ or } x = -1',
                    explanation: 'Reject \\( x = -1 \\) since you cannot take a log of a negative number.'
                }
            ],
            finalAnswer: '\\( x = 4 \\)'
        }
    },
    // TYPE G (Q23–26): Using logs to solve exponential equations
    {
        id: 'el3-023',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 23',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Solve \\( 3^x = 50 \\), giving your answer to 3 significant figures.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'exponential equation', 'take logs'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: '\\log_{10}(3^x) = \\log_{10} 50',
                    explanation: 'Taking the same log of both sides preserves the equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law to bring \\( x \\) down.',
                    workingLatex: 'x\\log_{10} 3 = \\log_{10} 50',
                    explanation: 'The power law allows us to move the unknown from the exponent.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\frac{\\log_{10} 50}{\\log_{10} 3} \\approx 3.56',
                    explanation: 'Using a calculator: \\( \\frac{1.69897}{0.47712} \\approx 3.56 \\).'
                }
            ],
            finalAnswer: '\\( x \\approx 3.56 \\)'
        }
    },
    {
        id: 'el3-024',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 24',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Solve \\( 5^{2x} = 80 \\), giving your answer to 3 significant figures.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'exponential equation', 'take logs'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: '\\log_{10}(5^{2x}) = \\log_{10} 80',
                    explanation: 'Applying the same log operation to each side.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law.',
                    workingLatex: '2x\\log_{10} 5 = \\log_{10} 80',
                    explanation: 'The exponent \\( 2x \\) comes down as a coefficient.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\frac{\\log_{10} 80}{2\\log_{10} 5} \\approx \\frac{1.9031}{1.3979} \\approx 1.36',
                    explanation: 'Divide by \\( 2\\log_{10} 5 \\) and evaluate.'
                }
            ],
            finalAnswer: '\\( x \\approx 1.36 \\)'
        }
    },
    {
        id: 'el3-025',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 25',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Solve \\( 4^x = 7^{x-1} \\), giving your answer to 3 significant figures.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'exponential equation', 'different bases'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: '\\log(4^x) = \\log(7^{x-1})',
                    explanation: 'Apply the same log to both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law to each side.',
                    workingLatex: 'x\\log 4 = (x-1)\\log 7',
                    explanation: 'The exponents come down as coefficients.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand the right side and collect \\( x \\) terms.',
                    workingLatex: 'x\\log 4 = x\\log 7 - \\log 7 \\Rightarrow x\\log 4 - x\\log 7 = -\\log 7',
                    explanation: 'Rearrange to get all \\( x \\) terms on one side.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise and solve.',
                    workingLatex: 'x(\\log 4 - \\log 7) = -\\log 7 \\Rightarrow x = \\frac{-\\log 7}{\\log 4 - \\log 7} = \\frac{\\log 7}{\\log 7 - \\log 4} \\approx \\frac{0.8451}{0.2430} \\approx 3.48',
                    explanation: 'Factorise \\( x \\) then divide; evaluate using a calculator.'
                }
            ],
            finalAnswer: '\\( x \\approx 3.48 \\)'
        }
    },
    {
        id: 'el3-026',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 26',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Solve \\( 2^{x+3} = 5^x \\), giving your answer to 3 significant figures.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'exponential equation', 'different bases'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log \\) of both sides.',
                    workingLatex: '\\log(2^{x+3}) = \\log(5^x)',
                    explanation: 'Same operation applied to both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law.',
                    workingLatex: '(x+3)\\log 2 = x\\log 5',
                    explanation: 'Both exponents come down.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and collect \\( x \\) terms.',
                    workingLatex: 'x\\log 2 + 3\\log 2 = x\\log 5 \\Rightarrow 3\\log 2 = x\\log 5 - x\\log 2 = x(\\log 5 - \\log 2)',
                    explanation: 'Rearrange so \\( x \\) is on one side.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\frac{3\\log 2}{\\log 5 - \\log 2} = \\frac{3\\log 2}{\\log(5/2)} \\approx \\frac{0.9031}{0.3979} \\approx 2.27',
                    explanation: 'Using the quotient law in reverse: \\( \\log 5 - \\log 2 = \\log 2.5 \\).'
                }
            ],
            finalAnswer: '\\( x \\approx 2.27 \\)'
        }
    },
    // TYPE H (Q27–30): Changing the base / evaluating using the change of base formula
    {
        id: 'el3-027',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 27',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Using the change of base formula \\( \\log_a b = \\dfrac{\\log_{10} b}{\\log_{10} a} \\), evaluate \\( \\log_4 20 \\) to 3 significant figures.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'change of base', 'evaluate'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the change of base formula with base 10.',
                    workingLatex: '\\log_4 20 = \\frac{\\log_{10} 20}{\\log_{10} 4}',
                    explanation: 'Converts the unfamiliar base 4 log into base 10 logs.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate using a calculator.',
                    workingLatex: '\\frac{\\log_{10} 20}{\\log_{10} 4} = \\frac{1.3010}{0.6021} \\approx 2.16',
                    explanation: 'Divide the two log values.'
                }
            ],
            finalAnswer: '\\( \\log_4 20 \\approx 2.16 \\)'
        }
    },
    {
        id: 'el3-028',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 28',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Evaluate \\( \\log_6 100 \\) to 3 significant figures, using the change of base formula.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'change of base', 'evaluate'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the change of base formula.',
                    workingLatex: '\\log_6 100 = \\frac{\\log_{10} 100}{\\log_{10} 6}',
                    explanation: 'Converting to base 10.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: '\\frac{2}{\\log_{10} 6} = \\frac{2}{0.7782} \\approx 2.57',
                    explanation: '\\( \\log_{10} 100 = 2 \\).'
                }
            ],
            finalAnswer: '\\( \\log_6 100 \\approx 2.57 \\)'
        }
    },
    {
        id: 'el3-029',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 29',
        difficulty: 'Foundation',
        answerType: 'exactValue',
        answerMeta: { exactForm: true },
        questionText: 'Solve \\( \\log_x 64 = 3 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'unknown base', 'index form'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the equation in index form.',
                    workingLatex: 'x^3 = 64',
                    explanation: '\\( \\log_a b = c \\Leftrightarrow a^c = b \\). Here the base is \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\sqrt[3]{64} = 4',
                    explanation: '4³ = 64.'
                }
            ],
            finalAnswer: '\\( x = 4 \\)'
        }
    },
    {
        id: 'el3-030',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 30',
        difficulty: 'Foundation',
        answerType: 'exactValue',
        answerMeta: { exactForm: true },
        questionText: 'Solve \\( \\log_x 125 = \\dfrac{3}{2} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'unknown base', 'index form', 'fractional power'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write in index form.',
                    workingLatex: 'x^{3/2} = 125',
                    explanation: '\\( \\log_x 125 = \\frac{3}{2} \\) means \\( x^{3/2} = 125 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Raise both sides to the power \\( \\frac{2}{3} \\) to isolate \\( x \\).',
                    workingLatex: 'x = 125^{2/3}',
                    explanation: 'The reciprocal power cancels the \\( \\frac{3}{2} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate.',
                    workingLatex: 'x = (\\sqrt[3]{125})^2 = 5^2 = 25',
                    explanation: 'Cube root of 125 is 5, and 5² = 25.'
                }
            ],
            finalAnswer: '\\( x = 25 \\)'
        }
    },
    // TYPE I (Q31–35): Exam-style multi-part questions
    {
        id: 'el3-031',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 31',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: '(a) Write \\( \\log_3 6 + \\log_3 7 - \\log_3 14 \\) as a single integer.\n\n (b) Hence, or otherwise, solve \\( \\log_3 6 + \\log_3 7 = \\log_3(2y + 14) \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'combine', 'solve', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Apply the product law to the first two terms.',
                    workingLatex: '\\log_3 6 + \\log_3 7 = \\log_3(42)',
                    explanation: '6 × 7 = 42.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the quotient law.',
                    workingLatex: '\\log_3(42) - \\log_3(14) = \\log_3\\!\\left(\\frac{42}{14}\\right) = \\log_3 3 = 1',
                    explanation: '42 ÷ 14 = 3 and \\( \\log_3 3 = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Use the result from part (a): \\( \\log_3 6 + \\log_3 7 = \\log_3 42 \\).',
                    workingLatex: '\\log_3 42 = \\log_3(2y + 14)',
                    explanation: 'The combined left side equals \\( \\log_3 42 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Equate arguments.',
                    workingLatex: '42 = 2y + 14 \\Rightarrow 2y = 28 \\Rightarrow y = 14',
                    explanation: 'Solve the linear equation.'
                }
            ],
            finalAnswer: '(a) \\( 1 \\) \\quad (b) \\( y = 14 \\)'
        }
    },
    {
        id: 'el3-032',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 32',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: '(a) Show that \\( \\log_a(x^3 y^2) = 3\\log_a x + 2\\log_a y \\).\n\n (b) Given that \\( \\log_5 x = 2 \\) and \\( \\log_5 y = 3 \\), find the value of \\( \\log_5(x^3 y^2) \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'expand', 'evaluate', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Apply the product law.',
                    workingLatex: '\\log_a(x^3 y^2) = \\log_a(x^3) + \\log_a(y^2)',
                    explanation: 'Product inside a log splits into addition.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law to each term.',
                    workingLatex: '= 3\\log_a x + 2\\log_a y',
                    explanation: 'The powers 3 and 2 become coefficients. This completes part (a).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Substitute the given values.',
                    workingLatex: '\\log_5(x^3 y^2) = 3\\log_5 x + 2\\log_5 y = 3(2) + 2(3)',
                    explanation: 'Using the result of part (a) with \\( \\log_5 x = 2 \\) and \\( \\log_5 y = 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate.',
                    workingLatex: '= 6 + 6 = 12',
                    explanation: 'Simple arithmetic.'
                }
            ],
            finalAnswer: '(b) \\( \\log_5(x^3 y^2) = 12 \\)'
        }
    },
    {
        id: 'el3-033',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 33',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'Solve \\( \\log_2(3x + 5) - \\log_2(x - 1) = 3 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'solve', 'quotient rule', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Combine the left side using the quotient law.',
                    workingLatex: '\\log_2\\!\\left(\\frac{3x+5}{x-1}\\right) = 3',
                    explanation: 'Subtracting logs is equivalent to dividing their arguments.'
                },
                {
                    stepNumber: 2,
                    description: 'Write 3 as \\( \\log_2(2^3) = \\log_2 8 \\).',
                    workingLatex: '\\log_2\\!\\left(\\frac{3x+5}{x-1}\\right) = \\log_2 8',
                    explanation: 'Expressing the right side as a log to the same base.'
                },
                {
                    stepNumber: 3,
                    description: 'Equate arguments.',
                    workingLatex: '\\frac{3x+5}{x-1} = 8',
                    explanation: 'Logs equal ⟹ arguments equal.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve the resulting linear equation.',
                    workingLatex: '3x + 5 = 8(x-1) = 8x - 8 \\Rightarrow 13 = 5x \\Rightarrow x = \\frac{13}{5}',
                    explanation: 'Expand, then rearrange and divide.'
                },
                {
                    stepNumber: 5,
                    description: 'Check validity: \\( x - 1 = \\frac{8}{5} > 0 \\) \\checkmark',
                    workingLatex: 'x = \\frac{13}{5} = 2.6',
                    explanation: 'Both logarithm arguments must be positive. Both are satisfied.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{13}{5} \\)'
        }
    },
    {
        id: 'el3-034',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 34',
        difficulty: 'Foundation',
        answerType: 'expression',
        questionText: 'The population \\( P \\) of a city after \\( t \\) years satisfies \\( P = 500\\,000 \\times 1.03^t \\).\n\n (a) Find the population when \\( t = 0 \\).\n\n (b) Find the value of \\( t \\) when the population first exceeds \\( 700\\,000 \\). Give your answer to 3 significant figures.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'exponential model', 'take logs', 'real-world', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\).',
                    workingLatex: 'P = 500\\,000 \\times 1.03^0 = 500\\,000 \\times 1 = 500\\,000',
                    explanation: 'Any number raised to the power 0 is 1.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( P = 700\\,000 \\) and solve for \\( t \\).',
                    workingLatex: '500\\,000 \\times 1.03^t = 700\\,000 \\Rightarrow 1.03^t = \\frac{700\\,000}{500\\,000} = 1.4',
                    explanation: 'Divide both sides by 500 000.'
                },
                {
                    stepNumber: 3,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: 't\\log_{10}(1.03) = \\log_{10}(1.4)',
                    explanation: 'Apply the power law to move \\( t \\) from the exponent.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( t \\).',
                    workingLatex: 't = \\frac{\\log_{10}(1.4)}{\\log_{10}(1.03)} \\approx \\frac{0.14613}{0.01284} \\approx 11.4',
                    explanation: 'Divide the two values; the population exceeds 700 000 after about 11.4 years, so at \\( t = 12 \\) (next complete year).'
                }
            ],
            finalAnswer: '(a) \\( 500\\,000 \\) \\quad (b) \\( t \\approx 11.4 \\) years'
        }
    },
    {
        id: 'el3-035',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms 35',
        difficulty: 'Foundation',
        answerType: 'exactValue',
        answerMeta: { exactForm: true },
        questionText: '(a) Given that \\( y = \\log_3(x^2 + 5x) - \\log_3(x) \\), express \\( y \\) as a single logarithm.\n\n (b) Find the value of \\( x \\) when \\( y = 2 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['laws of logarithms', 'simplify', 'solve', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Apply the quotient law.',
                    workingLatex: 'y = \\log_3\\!\\left(\\frac{x^2+5x}{x}\\right)',
                    explanation: 'Subtracting logs with the same base means dividing the arguments.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the numerator and cancel.',
                    workingLatex: 'y = \\log_3\\!\\left(\\frac{x(x+5)}{x}\\right) = \\log_3(x+5)',
                    explanation: 'Cancel the common factor of \\( x \\) (valid since \\( x > 0 \\)).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Set \\( y = 2 \\).',
                    workingLatex: '\\log_3(x+5) = 2',
                    explanation: 'Substitute \\( y = 2 \\) into the simplified expression.'
                },
                {
                    stepNumber: 4,
                    description: 'Convert to index form and solve.',
                    workingLatex: 'x + 5 = 3^2 = 9 \\Rightarrow x = 4',
                    explanation: '\\( \\log_3(x+5) = 2 \\Leftrightarrow x+5 = 3^2 \\).'
                }
            ],
            finalAnswer: '(a) \\( y = \\log_3(x+5) \\) \\quad (b) \\( x = 4 \\)'
        }
    },

    // ─── Q36–70: Additional Laws of Logarithms ──────────────────────

    {
        id: 'el3-036', topicRef: 'el3', topicTitle: 'Laws of Logarithms 36', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Simplify \\( \\log 6 + \\log 5 \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Product rule', workingLatex: '\\log(6 \\times 5) = \\log 30', explanation: 'The product law \\( \\log x + \\log y = \\log(xy) \\) combines two logs of the same base into a single log of the product. Remember this works because logs convert multiplication into addition — not \\( \\log(x+y) \\).' }
        ], finalAnswer: 'log 30' }
    },
    {
        id: 'el3-037', topicRef: 'el3', topicTitle: 'Laws of Logarithms 37', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Simplify \\( \\log 48 - \\log 6 \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Quotient rule', workingLatex: '\\log\\frac{48}{6} = \\log 8', explanation: 'The quotient law \\( \\log x - \\log y = \\log(x/y) \\) turns subtraction of two same-base logs into a single log of the quotient. Here \\( 48 \\div 6 = 8 \\).' }
        ], finalAnswer: 'log 8' }
    },
    {
        id: 'el3-038', topicRef: 'el3', topicTitle: 'Laws of Logarithms 38', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Simplify \\( 3\\log 2 \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Power rule', workingLatex: '\\log 2^3 = \\log 8', explanation: 'The power law \\( n\\log x = \\log(x^n) \\) lets a coefficient in front of a log become an exponent inside it. Note that the coefficient becomes an exponent, not a factor — \\( 3\\log 2 \\ne \\log 6 \\).' }
        ], finalAnswer: 'log 8' }
    },
    {
        id: 'el3-039', topicRef: 'el3', topicTitle: 'Laws of Logarithms 39', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Write \\( \\log 2 + \\log 3 + \\log 5 \\) as a single logarithm.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Product rule', workingLatex: '\\log(2 \\times 3 \\times 5) = \\log 30', explanation: 'Apply the product law twice (or extend it to three terms): a sum of logs with the same base becomes a single log of the product of the arguments.' }
        ], finalAnswer: 'log 30' }
    },
    {
        id: 'el3-040', topicRef: 'el3', topicTitle: 'Laws of Logarithms 40', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Write \\( 2\\log 3 + \\log 4 \\) as a single logarithm.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Power then product', workingLatex: '\\log 9 + \\log 4 = \\log 36', explanation: 'First use the power law to absorb the coefficient: \\( 2\\log 3 = \\log 3^2 = \\log 9 \\). Then the product law combines \\( \\log 9 + \\log 4 = \\log(9 \\times 4) = \\log 36 \\).' }
        ], finalAnswer: 'log 36' }
    },
    {
        id: 'el3-041', topicRef: 'el3', topicTitle: 'Laws of Logarithms 41', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Write \\( \\log 50 - 2\\log 5 \\) as a single logarithm.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Power then quotient', workingLatex: '\\log 50 - \\log 25 = \\log\\frac{50}{25} = \\log 2', explanation: 'Use the power law first: \\( 2\\log 5 = \\log 5^2 = \\log 25 \\). Then the quotient law turns the subtraction into a single log: \\( \\log 50 - \\log 25 = \\log(50/25) = \\log 2 \\).' }
        ], finalAnswer: 'log 2' }
    },
    {
        id: 'el3-042', topicRef: 'el3', topicTitle: 'Laws of Logarithms 42', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Express \\( \\log\\frac{x^3}{y^2} \\) in terms of \\( \\log x \\) and \\( \\log y \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Expand', workingLatex: '\\log x^3 - \\log y^2 = 3\\log x - 2\\log y', explanation: 'Use the quotient law in reverse to split the fraction into a difference of logs, then the power law brings the exponents 3 and 2 down as coefficients.' }
        ], finalAnswer: '3 log x - 2 log y' }
    },
    {
        id: 'el3-043', topicRef: 'el3', topicTitle: 'Laws of Logarithms 43', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Express \\( \\log\\sqrt{x} \\) in terms of \\( \\log x \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Power rule', workingLatex: '\\log x^{1/2} = \\frac{1}{2}\\log x', explanation: 'A square root is the same as a half-power: \\( \\sqrt{x} = x^{1/2} \\). The power law then brings the \\( \\tfrac{1}{2} \\) down as a coefficient.' }
        ], finalAnswer: '(1/2) log x' }
    },
    {
        id: 'el3-044', topicRef: 'el3', topicTitle: 'Laws of Logarithms 44', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Given \\( \\log 2 = 0.301 \\) and \\( \\log 3 = 0.477 \\), find \\( \\log 12 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '12 = 4 x 3 = 2^2 x 3', workingLatex: '\\log 12 = 2\\log 2 + \\log 3 = 0.602 + 0.477 = 1.079', explanation: 'Factorise 12 into primes we know logs for: \\( 12 = 2^2 \\times 3 \\). The product law gives \\( \\log 12 = \\log 2^2 + \\log 3 \\), and the power law turns \\( \\log 2^2 \\) into \\( 2\\log 2 \\).' }
        ], finalAnswer: '1.079' }
    },
    {
        id: 'el3-045', topicRef: 'el3', topicTitle: 'Laws of Logarithms 45', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Given \\( \\log 2 = 0.301 \\) and \\( \\log 3 = 0.477 \\), find \\( \\log 1.5 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '1.5 = 3/2', workingLatex: '\\log 1.5 = \\log 3 - \\log 2 = 0.477 - 0.301 = 0.176', explanation: 'Rewrite 1.5 as the fraction \\( \\tfrac{3}{2} \\) so the quotient law applies: \\( \\log(3/2) = \\log 3 - \\log 2 \\). Then substitute the given values.' }
        ], finalAnswer: '0.176' }
    },
    {
        id: 'el3-046', topicRef: 'el3', topicTitle: 'Laws of Logarithms 46', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Solve \\( \\log x + \\log(x + 3) = 1 \\). (Base 10)',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine', workingLatex: '\\log[x(x+3)] = 1 \\implies x(x+3) = 10', explanation: 'The product law combines \\( \\log x + \\log(x+3) \\) into one log. Since the base is 10 and \\( \\log_{10} 10 = 1 \\), rewriting 1 as \\( \\log 10 \\) and equating arguments gives \\( x(x+3) = 10 \\).' },
            { stepNumber: 2, description: 'Solve quadratic', workingLatex: 'x^2 + 3x - 10 = 0 \\implies (x+5)(x-2) = 0', explanation: 'Expand and rearrange to standard form, then factorise into two brackets that multiply to give \\( -10 \\) and add to give \\( 3 \\).' },
            { stepNumber: 3, description: 'Check validity', workingLatex: 'x = 2 \\text{ (reject } x = -5 \\text{ as log of negative)}', explanation: 'Log arguments must be strictly positive. At \\( x = -5 \\), both \\( \\log x \\) and \\( \\log(x+3) \\) are undefined, so only \\( x = 2 \\) is valid.' }
        ], finalAnswer: 'x = 2' }
    },
    {
        id: 'el3-047', topicRef: 'el3', topicTitle: 'Laws of Logarithms 47', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Solve \\( \\log_2 x - \\log_2(x - 3) = 2 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine', workingLatex: '\\log_2\\frac{x}{x-3} = 2 \\implies \\frac{x}{x-3} = 4', explanation: 'The quotient law combines the two logs into one. Rewriting 2 as \\( \\log_2 2^2 = \\log_2 4 \\) and equating arguments turns the log equation into an algebraic one.' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x = 4x - 12 \\implies 3x = 12 \\implies x = 4', explanation: 'Multiply both sides by \\( (x-3) \\) to clear the fraction, then rearrange. Check the answer is valid: \\( x - 3 = 1 > 0 \\), so the log argument is positive.' }
        ], finalAnswer: 'x = 4' }
    },
    {
        id: 'el3-048', topicRef: 'el3', topicTitle: 'Laws of Logarithms 48', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Write \\( \\ln a + 2\\ln b - 3\\ln c \\) as a single logarithm.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply laws', workingLatex: '\\ln\\frac{ab^2}{c^3}', explanation: 'Reverse the power law to absorb each coefficient into the argument: \\( 2\\ln b = \\ln b^2 \\) and \\( 3\\ln c = \\ln c^3 \\). Then the product law merges added logs into a single log of the product, and the quotient law turns subtraction into division.' }
        ], finalAnswer: 'ln(ab^2/c^3)' }
    },
    {
        id: 'el3-049', topicRef: 'el3', topicTitle: 'Laws of Logarithms 49', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Show that \\( \\log_a b = \\frac{1}{\\log_b a} \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Change of base', workingLatex: '\\log_a b = \\frac{\\ln b}{\\ln a}; \\quad \\log_b a = \\frac{\\ln a}{\\ln b}', explanation: 'The change of base formula \\( \\log_a b = \\dfrac{\\log_k b}{\\log_k a} \\) lets us rewrite both expressions using a common base — natural log is the cleanest choice.' },
            { stepNumber: 2, description: 'Product', workingLatex: '\\frac{\\ln b}{\\ln a} \\times \\frac{\\ln a}{\\ln b} = 1 \\checkmark', explanation: 'The two fractions are reciprocals of each other, so their product is 1. This confirms \\( \\log_a b = \\dfrac{1}{\\log_b a} \\).' }
        ], finalAnswer: 'Shown' }
    },
    {
        id: 'el3-050', topicRef: 'el3', topicTitle: 'Laws of Logarithms 50', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Solve \\( 2\\ln x = \\ln(x + 6) \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Power rule on LHS', workingLatex: '\\ln x^2 = \\ln(x+6) \\implies x^2 = x + 6', explanation: 'The power law moves the coefficient 2 up to become an exponent: \\( 2\\ln x = \\ln x^2 \\). With \\( \\ln \\) of equal expressions on both sides, the arguments must be equal.' },
            { stepNumber: 2, description: 'Solve quadratic', workingLatex: 'x^2 - x - 6 = 0 \\implies (x-3)(x+2) = 0', explanation: 'Rearrange to standard form and factorise: two numbers multiplying to \\( -6 \\) and summing to \\( -1 \\) are \\( -3 \\) and \\( +2 \\).' },
            { stepNumber: 3, description: 'Check', workingLatex: 'x = 3 \\text{ (reject } x = -2\\text{)}', explanation: 'Reject \\( x = -2 \\) because \\( \\ln x \\) is undefined for negative \\( x \\) — log arguments must be strictly positive.' }
        ], finalAnswer: 'x = 3' }
    },
    {
        id: 'el3-051', topicRef: 'el3', topicTitle: 'Laws of Logarithms 51', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Simplify \\( \\frac{\\log 8}{\\log 2} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Change of base (or use log 8 = log 2^3)', workingLatex: '\\frac{3\\log 2}{\\log 2} = 3', explanation: 'By the power law \\( \\log 8 = \\log 2^3 = 3\\log 2 \\), so the \\( \\log 2 \\) factors cancel. This is also the change of base formula in action: \\( \\dfrac{\\log 8}{\\log 2} = \\log_2 8 = 3 \\).' }
        ], finalAnswer: '3' }
    },
    {
        id: 'el3-052', topicRef: 'el3', topicTitle: 'Laws of Logarithms 52', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Simplify \\( \\log_2 8 + \\log_2 4 - \\log_2 16 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Evaluate each', workingLatex: '3 + 2 - 4 = 1', explanation: 'Each log evaluates exactly because the arguments are powers of 2: \\( \\log_2 8 = 3 \\), \\( \\log_2 4 = 2 \\), \\( \\log_2 16 = 4 \\). Alternatively combine first using product and quotient laws: \\( \\log_2(8 \\times 4 / 16) = \\log_2 2 = 1 \\).' }
        ], finalAnswer: '1' }
    },
    {
        id: 'el3-053', topicRef: 'el3', topicTitle: 'Laws of Logarithms 53', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Express \\( \\log(x^2 - 1) - \\log(x + 1) \\) as a single simplified logarithm.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Quotient rule', workingLatex: '\\log\\frac{x^2-1}{x+1} = \\log\\frac{(x-1)(x+1)}{x+1} = \\log(x-1)', explanation: 'The quotient law combines the two logs into a single log of the fraction. The numerator is a difference of two squares: \\( x^2 - 1 = (x-1)(x+1) \\), so the \\( (x+1) \\) factor cancels (valid provided \\( x + 1 > 0 \\)).' }
        ], finalAnswer: 'log(x - 1)' }
    },
    {
        id: 'el3-054', topicRef: 'el3', topicTitle: 'Laws of Logarithms 54', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Solve \\( \\log_3(2x + 1) = 3 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Convert', workingLatex: '2x + 1 = 3^3 = 27 \\implies x = 13', explanation: 'Use the definition of a logarithm: \\( \\log_a b = c \\Leftrightarrow a^c = b \\). So \\( \\log_3(2x+1) = 3 \\) means \\( 2x+1 = 3^3 = 27 \\); subtract 1 and halve.' }
        ], finalAnswer: 'x = 13' }
    },
    {
        id: 'el3-055', topicRef: 'el3', topicTitle: 'Laws of Logarithms 55', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Solve \\( \\log_5(x^2) = 4 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Convert', workingLatex: 'x^2 = 5^4 = 625 \\implies x = \\pm 25', explanation: 'Use the definition of a logarithm: \\( \\log_5(x^2) = 4 \\Leftrightarrow x^2 = 5^4 = 625 \\). Taking square roots gives two solutions, \\( x = \\pm 25 \\).' },
            { stepNumber: 2, description: 'Check', workingLatex: '\\text{Both valid since } x^2 > 0 \\text{ for both}', explanation: 'The log argument here is \\( x^2 \\), which is positive for both \\( x = 25 \\) and \\( x = -25 \\), so both solutions are valid. (Be careful: if the stem had been \\( 2\\log_5 x = 4 \\), only \\( x = 25 \\) would survive because \\( \\log_5 x \\) requires \\( x > 0 \\).)' }
        ], finalAnswer: 'x = 25 or x = -25' }
    },
    {
        id: 'el3-056', topicRef: 'el3', topicTitle: 'Laws of Logarithms 56', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Show that \\( \\log_a x^n = n\\log_a x \\) using the definition of logarithm.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let log_a x = k, so a^k = x', workingLatex: 'x^n = (a^k)^n = a^{kn}', explanation: 'Set \\( k = \\log_a x \\), which by the definition of a logarithm means \\( a^k = x \\). Raising both sides to the \\( n \\)th power uses the index law \\( (a^k)^n = a^{kn} \\).' },
            { stepNumber: 2, description: 'Take log_a', workingLatex: '\\log_a x^n = kn = n\\log_a x', explanation: 'Taking \\( \\log_a \\) of both sides of \\( a^{kn} = x^n \\) gives \\( \\log_a x^n = kn \\). Substitute back \\( k = \\log_a x \\) to obtain the power law.' }
        ], finalAnswer: 'Shown' }
    },
    {
        id: 'el3-057', topicRef: 'el3', topicTitle: 'Laws of Logarithms 57', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Solve \\( \\log_2 x + \\log_2(x + 2) = 3 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine', workingLatex: '\\log_2[x(x+2)] = 3 \\implies x^2 + 2x = 8', explanation: 'The product law combines the left side into a single log. Then \\( 3 = \\log_2 2^3 = \\log_2 8 \\), so equating arguments gives \\( x(x+2) = 8 \\).' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x^2 + 2x - 8 = 0 \\implies (x+4)(x-2) = 0 \\implies x = 2', explanation: 'Rearrange and factorise. Reject \\( x = -4 \\) since \\( \\log_2 x \\) is undefined for negative \\( x \\); only \\( x = 2 \\) gives positive arguments in both logs.' }
        ], finalAnswer: 'x = 2' }
    },
    {
        id: 'el3-058', topicRef: 'el3', topicTitle: 'Laws of Logarithms 58', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Given \\( \\log_a 2 = p \\) and \\( \\log_a 5 = q \\), express \\( \\log_a 20 \\) in terms of \\( p \\) and \\( q \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '20 = 4 x 5 = 2^2 x 5', workingLatex: '\\log_a 20 = 2\\log_a 2 + \\log_a 5 = 2p + q', explanation: 'Factorise 20 in terms of the known bases: \\( 20 = 2^2 \\times 5 \\). The product law splits the log into a sum, and the power law turns \\( \\log_a 2^2 \\) into \\( 2\\log_a 2 \\).' }
        ], finalAnswer: '2p + q' }
    },
    {
        id: 'el3-059', topicRef: 'el3', topicTitle: 'Laws of Logarithms 59', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Solve \\( \\log(x + 1) - \\log x = \\log 3 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine LHS', workingLatex: '\\log\\frac{x+1}{x} = \\log 3 \\implies \\frac{x+1}{x} = 3', explanation: 'The quotient law combines the left-hand side into a single log. With logs of the same base on both sides, the arguments must be equal.' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x + 1 = 3x \\implies x = \\frac{1}{2}', explanation: 'Multiply both sides by \\( x \\) to clear the fraction, then solve linearly. Both \\( x \\) and \\( x+1 \\) are positive at \\( x = \\tfrac{1}{2} \\), so the answer is valid.' }
        ], finalAnswer: 'x = 1/2' }
    },
    {
        id: 'el3-060', topicRef: 'el3', topicTitle: 'Laws of Logarithms 60', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Simplify \\( \\log_3 27 + \\log_3 9 - \\log_3 3 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Evaluate', workingLatex: '3 + 2 - 1 = 4', explanation: 'Each argument is a power of 3, so the logs evaluate directly: \\( \\log_3 27 = 3 \\), \\( \\log_3 9 = 2 \\), \\( \\log_3 3 = 1 \\). Or combine using product and quotient laws: \\( \\log_3(27 \\times 9 / 3) = \\log_3 81 = 4 \\).' }
        ], finalAnswer: '4' }
    },
    {
        id: 'el3-061', topicRef: 'el3', topicTitle: 'Laws of Logarithms 61', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'If \\( \\ln a = 2 \\) and \\( \\ln b = 5 \\), find \\( \\ln(a^2 b) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Expand', workingLatex: '2\\ln a + \\ln b = 4 + 5 = 9', explanation: 'Use the product law to split \\( \\ln(a^2 b) \\) into \\( \\ln a^2 + \\ln b \\), then the power law brings the exponent down: \\( \\ln a^2 = 2\\ln a \\). Substitute the given values.' }
        ], finalAnswer: '9' }
    },
    {
        id: 'el3-062', topicRef: 'el3', topicTitle: 'Laws of Logarithms 62', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Solve \\( 2^{x+3} = 5^{x-1} \\). Give answer to 3 s.f.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take ln', workingLatex: '(x+3)\\ln 2 = (x-1)\\ln 5', explanation: 'Take \\( \\ln \\) of both sides and apply the power law to bring each exponent down as a coefficient. This is the standard trick for getting \\( x \\) out of an exponent.' },
            { stepNumber: 2, description: 'Expand', workingLatex: 'x\\ln 2 + 3\\ln 2 = x\\ln 5 - \\ln 5', explanation: 'Distribute the brackets on both sides so the \\( x \\) terms are separated from the constants.' },
            { stepNumber: 3, description: 'Solve for x', workingLatex: 'x(\\ln 2 - \\ln 5) = -\\ln 5 - 3\\ln 2 \\implies x = \\frac{\\ln 5 + 3\\ln 2}{\\ln 5 - \\ln 2} = \\frac{3.688}{0.916} = 4.03', explanation: 'Gather \\( x \\) terms on one side, factor out \\( x \\), then divide. Flipping the sign of numerator and denominator gives the tidier form with positive values.' }
        ], finalAnswer: 'x = 4.03' }
    },
    {
        id: 'el3-063', topicRef: 'el3', topicTitle: 'Laws of Logarithms 63', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Prove that \\( \\log_a b \\times \\log_b c = \\log_a c \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Change of base', workingLatex: '\\frac{\\ln b}{\\ln a} \\times \\frac{\\ln c}{\\ln b} = \\frac{\\ln c}{\\ln a} = \\log_a c', explanation: 'Rewrite each log using the change of base formula with natural log. The \\( \\ln b \\) appears in the numerator of one fraction and the denominator of the other, so it cancels — leaving \\( \\dfrac{\\ln c}{\\ln a} = \\log_a c \\).' }
        ], finalAnswer: 'Proven' }
    },
    {
        id: 'el3-064', topicRef: 'el3', topicTitle: 'Laws of Logarithms 64', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Express \\( \\log\\left(\\frac{100x^3}{y}\\right) \\) in terms of \\( \\log x \\) and \\( \\log y \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Expand', workingLatex: '\\log 100 + 3\\log x - \\log y = 2 + 3\\log x - \\log y', explanation: 'Split the fraction using the quotient law, then split the product in the numerator using the product law, and finally bring exponents down using the power law. Since the base is 10, \\( \\log 100 = 2 \\).' }
        ], finalAnswer: '2 + 3 log x - log y' }
    },
    {
        id: 'el3-065', topicRef: 'el3', topicTitle: 'Laws of Logarithms 65', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Solve \\( \\log_4 x + \\log_4(x - 6) = 2 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine', workingLatex: '\\log_4[x(x-6)] = 2 \\implies x^2 - 6x = 16', explanation: 'The product law merges the two logs into one. Since \\( 2 = \\log_4 4^2 = \\log_4 16 \\), equating arguments gives \\( x(x-6) = 16 \\).' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x^2 - 6x - 16 = 0 \\implies (x-8)(x+2) = 0 \\implies x = 8', explanation: 'Factorise the quadratic and reject \\( x = -2 \\) since it makes both \\( \\log_4 x \\) and \\( \\log_4(x-6) \\) undefined. At \\( x = 8 \\), both arguments are positive.' }
        ], finalAnswer: 'x = 8' }
    },
    {
        id: 'el3-066', topicRef: 'el3', topicTitle: 'Laws of Logarithms 66', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Write \\( \\frac{1}{2}\\log 9 + \\frac{1}{3}\\log 8 \\) as a single logarithm.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Power rule', workingLatex: '\\log 9^{1/2} + \\log 8^{1/3} = \\log 3 + \\log 2 = \\log 6', explanation: 'Use the power law in reverse to absorb the fractional coefficients into the arguments: \\( \\tfrac{1}{2}\\log 9 = \\log 9^{1/2} = \\log 3 \\) and \\( \\tfrac{1}{3}\\log 8 = \\log 8^{1/3} = \\log 2 \\). Then the product law combines them: \\( \\log 3 + \\log 2 = \\log 6 \\).' }
        ], finalAnswer: 'log 6' }
    },
    {
        id: 'el3-067', topicRef: 'el3', topicTitle: 'Laws of Logarithms 67', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Given \\( \\log_a 2 = x \\), express \\( \\log_a 32 \\) in terms of \\( x \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '32 = 2^5', workingLatex: '\\log_a 32 = 5\\log_a 2 = 5x', explanation: 'Spot that \\( 32 = 2^5 \\), then the power law gives \\( \\log_a 2^5 = 5\\log_a 2 \\). Substitute \\( \\log_a 2 = x \\).' }
        ], finalAnswer: '5x' }
    },
    {
        id: 'el3-068', topicRef: 'el3', topicTitle: 'Laws of Logarithms 68', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Solve \\( \\ln(3x) - \\ln(x - 1) = \\ln 5 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine LHS', workingLatex: '\\ln\\frac{3x}{x-1} = \\ln 5 \\implies \\frac{3x}{x-1} = 5', explanation: 'The quotient law combines the two natural logs into one. With \\( \\ln \\) of equal expressions on both sides, the arguments must be equal.' },
            { stepNumber: 2, description: 'Solve', workingLatex: '3x = 5x - 5 \\implies 2x = 5 \\implies x = 2.5', explanation: 'Multiply both sides by \\( (x-1) \\), rearrange and solve. Check validity: at \\( x = 2.5 \\) both \\( 3x \\) and \\( x-1 = 1.5 \\) are positive, so the answer is valid.' }
        ], finalAnswer: 'x = 2.5' }
    },
    {
        id: 'el3-069', topicRef: 'el3', topicTitle: 'Laws of Logarithms 69', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Show that \\( \\log_2 3 \\times \\log_3 4 \\times \\log_4 8 = 3 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Chain rule', workingLatex: '\\log_2 3 \\times \\log_3 4 \\times \\log_4 8 = \\log_2 8 = 3', explanation: 'Apply the chain identity \\( \\log_a b \\times \\log_b c = \\log_a c \\) twice — derived from change of base, where intermediate log terms cancel. The chain telescopes from base 2 to argument 8, and \\( \\log_2 8 = 3 \\) because \\( 2^3 = 8 \\).' }
        ], finalAnswer: 'Shown: equals 3' }
    },
    {
        id: 'el3-070', topicRef: 'el3', topicTitle: 'Laws of Logarithms 70', difficulty: 'Foundation', answerType: 'expression',
        questionText: 'Solve \\( (\\log x)^2 - 5\\log x + 6 = 0 \\). (Base 10)',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let u = log x', workingLatex: 'u^2 - 5u + 6 = 0 \\implies (u-2)(u-3) = 0', explanation: 'Substitute \\( u = \\log x \\) to turn the equation into a standard quadratic. This is the "hidden quadratic" trick — the equation is quadratic in \\( \\log x \\), not in \\( x \\).' },
            { stepNumber: 2, description: 'Solve', workingLatex: '\\log x = 2 \\implies x = 100; \\quad \\log x = 3 \\implies x = 1000', explanation: 'Back-substitute each \\( u \\) value and convert from log to index form: \\( \\log_{10} x = u \\Leftrightarrow x = 10^u \\). Both solutions are positive, so both are valid.' }
        ], finalAnswer: 'x = 100 or x = 1000' }
    },
];
