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

    // TYPE A (Q1–6): Solving a^x = b by taking logs of both sides
    {
        id: 'el4-001',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 01',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 5^x = 40 \\), giving your answer to 3 significant figures.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'take logs', 'exponential equation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: '\\log 5^x = \\log 40',
                    explanation: 'Applying the same operation to both sides keeps the equation balanced.'
                },
                {
                    stepNumber: 2,
                    description: 'Use the power law to bring \\( x \\) down.',
                    workingLatex: 'x \\log 5 = \\log 40',
                    explanation: '\\( \\log(a^n) = n\\log a \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by \\( \\log 5 \\) and evaluate.',
                    workingLatex: 'x = \\frac{\\log 40}{\\log 5} \\approx \\frac{1.6021}{0.6990} \\approx 2.29',
                    explanation: 'Use a calculator to find the decimal value.'
                }
            ],
            finalAnswer: '\\( x \\approx 2.29 \\)'
        }
    },
    {
        id: 'el4-002',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 02',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 3^x = 70 \\), giving your answer to 3 significant figures.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'take logs', 'exponential equation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: '\\log(3^x) = \\log 70',
                    explanation: 'Log of both sides preserves the equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law.',
                    workingLatex: 'x\\log 3 = \\log 70',
                    explanation: 'The exponent \\( x \\) becomes a coefficient.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\frac{\\log 70}{\\log 3} \\approx \\frac{1.8451}{0.4771} \\approx 3.87',
                    explanation: 'Evaluate using a calculator.'
                }
            ],
            finalAnswer: '\\( x \\approx 3.87 \\)'
        }
    },
    {
        id: 'el4-003',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 03',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 0.6^x = 0.1 \\), giving your answer to 3 significant figures.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'take logs', 'base less than 1'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: '\\log(0.6^x) = \\log(0.1)',
                    explanation: 'Applying log to both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law.',
                    workingLatex: 'x\\log(0.6) = \\log(0.1)',
                    explanation: '\\( \\log 0.1 = -1 \\) since \\( 10^{-1} = 0.1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\frac{\\log(0.1)}{\\log(0.6)} = \\frac{-1}{-0.2218} \\approx 4.51',
                    explanation: 'Both logs are negative so \\( x \\) is positive.'
                }
            ],
            finalAnswer: '\\( x \\approx 4.51 \\)'
        }
    },
    {
        id: 'el4-004',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 04',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2^{3x} = 100 \\), giving your answer to 3 significant figures.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'take logs', 'coefficient of exponent'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: '\\log(2^{3x}) = \\log 100',
                    explanation: 'Applying log to both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law.',
                    workingLatex: '3x\\log 2 = 2',
                    explanation: '\\( \\log_{10} 100 = 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\frac{2}{3\\log 2} = \\frac{2}{3 \\times 0.3010} \\approx \\frac{2}{0.9031} \\approx 2.21',
                    explanation: 'Divide by \\( 3\\log 2 \\) and evaluate.'
                }
            ],
            finalAnswer: '\\( x \\approx 2.21 \\)'
        }
    },
    {
        id: 'el4-005',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 05',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 4^{x-1} = 30 \\), giving your answer to 3 significant figures.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'take logs', 'shifted exponent'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: '\\log(4^{x-1}) = \\log 30',
                    explanation: 'Applying the same log to both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law.',
                    workingLatex: '(x-1)\\log 4 = \\log 30',
                    explanation: 'The entire exponent \\( (x-1) \\) comes down as a factor.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x - 1 \\), then for \\( x \\).',
                    workingLatex: 'x - 1 = \\frac{\\log 30}{\\log 4} \\approx \\frac{1.4771}{0.6021} \\approx 2.453 \\Rightarrow x \\approx 3.45',
                    explanation: 'Add 1 to find \\( x \\).'
                }
            ],
            finalAnswer: '\\( x \\approx 3.45 \\)'
        }
    },
    {
        id: 'el4-006',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 06',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 6^{2x+1} = 200 \\), giving your answer to 3 significant figures.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'take logs', 'linear exponent'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: '\\log(6^{2x+1}) = \\log 200',
                    explanation: 'Same operation applied to both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law.',
                    workingLatex: '(2x+1)\\log 6 = \\log 200',
                    explanation: 'The whole exponent \\( (2x+1) \\) comes down.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by \\( \\log 6 \\).',
                    workingLatex: '2x + 1 = \\frac{\\log 200}{\\log 6} \\approx \\frac{2.3010}{0.7782} \\approx 2.957',
                    explanation: 'Evaluate the right side using a calculator.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '2x = 1.957 \\Rightarrow x \\approx 0.979',
                    explanation: 'Subtract 1 then divide by 2.'
                }
            ],
            finalAnswer: '\\( x \\approx 0.979 \\)'
        }
    },
    // TYPE B (Q7–10): Equations with a^x on both sides (different bases)
    {
        id: 'el4-007',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 07',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 5^x = 2^{x+3} \\), giving your answer to 3 significant figures.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'different bases', 'collect x terms'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log \\) of both sides.',
                    workingLatex: '\\log(5^x) = \\log(2^{x+3})',
                    explanation: 'Applying the same log to both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law to each side.',
                    workingLatex: 'x\\log 5 = (x+3)\\log 2',
                    explanation: 'Both exponents come down as factors.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and collect \\( x \\) terms on one side.',
                    workingLatex: 'x\\log 5 = x\\log 2 + 3\\log 2 \\Rightarrow x\\log 5 - x\\log 2 = 3\\log 2',
                    explanation: 'Rearrange so \\( x \\) terms are on the left.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise and solve.',
                    workingLatex: 'x(\\log 5 - \\log 2) = 3\\log 2 \\Rightarrow x = \\frac{3\\log 2}{\\log 5 - \\log 2} = \\frac{3\\log 2}{\\log 2.5} \\approx \\frac{0.9031}{0.3979} \\approx 2.27',
                    explanation: 'Using the quotient law: \\( \\log 5 - \\log 2 = \\log 2.5 \\).'
                }
            ],
            finalAnswer: '\\( x \\approx 2.27 \\)'
        }
    },
    {
        id: 'el4-008',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 08',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 3^{x+2} = 7^x \\), giving your answer to 3 significant figures.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'different bases', 'collect x terms'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log \\) of both sides and apply the power law.',
                    workingLatex: '(x+2)\\log 3 = x\\log 7',
                    explanation: 'Logs of powers bring the exponents down.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the left side.',
                    workingLatex: 'x\\log 3 + 2\\log 3 = x\\log 7',
                    explanation: 'Expand \\( (x+2)\\log 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Collect \\( x \\) terms.',
                    workingLatex: '2\\log 3 = x\\log 7 - x\\log 3 = x(\\log 7 - \\log 3)',
                    explanation: 'Move \\( x\\log 3 \\) to the right.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\frac{2\\log 3}{\\log 7 - \\log 3} = \\frac{2\\log 3}{\\log(7/3)} \\approx \\frac{0.9542}{0.3679} \\approx 2.59',
                    explanation: 'Evaluate using a calculator.'
                }
            ],
            finalAnswer: '\\( x \\approx 2.59 \\)'
        }
    },
    // TYPE C (Q9–12): Solving log_a(x) = k (convert to index form)
    {
        id: 'el4-009',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 09',
        difficulty: 'Foundation',
        questionText: 'Find the value of \\( x \\) given that \\( \\log_3(4x) = 4 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'index form', 'log equals constant'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write in index form using \\( \\log_a b = c \\Leftrightarrow a^c = b \\).',
                    workingLatex: '3^4 = 4x',
                    explanation: 'Base is 3, power is 4, argument is \\( 4x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate \\( 3^4 \\).',
                    workingLatex: '81 = 4x',
                    explanation: '3⁴ = 81.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\frac{81}{4} = 20.25',
                    explanation: 'Divide both sides by 4.'
                }
            ],
            finalAnswer: '\\( x = 20.25 \\)'
        }
    },
    {
        id: 'el4-010',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 10',
        difficulty: 'Foundation',
        questionText: 'Find the value of \\( x \\) given that \\( \\log_5(x + 2) = 3 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'index form', 'linear argument'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert to index form.',
                    workingLatex: '5^3 = x + 2',
                    explanation: 'Base 5, power 3, argument \\( x+2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate and solve.',
                    workingLatex: '125 = x + 2 \\Rightarrow x = 123',
                    explanation: '5³ = 125; subtract 2.'
                }
            ],
            finalAnswer: '\\( x = 123 \\)'
        }
    },
    {
        id: 'el4-011',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 11',
        difficulty: 'Foundation',
        questionText: 'Find the value of \\( x \\) given that \\( \\log_4(3 - x) = 2.5 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'index form', 'fractional power'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write in index form.',
                    workingLatex: '4^{2.5} = 3 - x',
                    explanation: 'Base 4, power 2.5, argument \\( 3-x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate \\( 4^{2.5} = 4^{5/2} \\).',
                    workingLatex: '4^{5/2} = (\\sqrt{4})^5 = 2^5 = 32',
                    explanation: 'A power of \\( \\frac{5}{2} \\) means square root then raise to the 5th.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '32 = 3 - x \\Rightarrow x = 3 - 32 = -29',
                    explanation: 'Subtract 32 from both sides and rearrange.'
                }
            ],
            finalAnswer: '\\( x = -29 \\)'
        }
    },
    {
        id: 'el4-012',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 12',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 5\\log_{10}(x) = 3 \\), giving your answer to 3 significant figures.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'index form', 'coefficient of log'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide both sides by 5.',
                    workingLatex: '\\log_{10}(x) = \\frac{3}{5} = 0.6',
                    explanation: 'Isolate the log term first.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( 10^{\\square} \\) to both sides (the inverse of \\( \\log_{10} \\)).',
                    workingLatex: '10^{\\log_{10}(x)} = 10^{0.6}',
                    explanation: 'Exponentials and logs with the same base cancel.'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate.',
                    workingLatex: 'x = 10^{0.6} \\approx 3.98',
                    explanation: 'Use a calculator.'
                }
            ],
            finalAnswer: '\\( x \\approx 3.98 \\)'
        }
    },
    // TYPE D (Q13–17): Solving equations with e^x and ln x
    {
        id: 'el4-013',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 13',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 4e^x = 60 \\), giving (i) an exact answer and (ii) an answer to 3 s.f.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'natural log', 'exact and decimal'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide both sides by 4.',
                    workingLatex: 'e^x = 15',
                    explanation: 'Isolate the exponential term.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: 'x = \\ln 15',
                    explanation: '\\( \\ln \\) and \\( e \\) are inverse functions: \\( \\ln(e^x) = x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate to 3 s.f.',
                    workingLatex: 'x = \\ln 15 \\approx 2.71',
                    explanation: 'Use a calculator.'
                }
            ],
            finalAnswer: '(i) \\( x = \\ln 15 \\) \\quad (ii) \\( x \\approx 2.71 \\)'
        }
    },
    {
        id: 'el4-014',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 14',
        difficulty: 'Foundation',
        questionText: 'Solve \\( e^{0.5x} + 3 = 10 \\), giving your answer as an exact value.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'natural log', 'exact value', 'rearrange first'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 3 from both sides to isolate the exponential.',
                    workingLatex: 'e^{0.5x} = 7',
                    explanation: 'Always isolate the exponential before applying ln.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '0.5x = \\ln 7',
                    explanation: '\\( \\ln(e^{0.5x}) = 0.5x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = 2\\ln 7',
                    explanation: 'Multiply both sides by 2.'
                }
            ],
            finalAnswer: '\\( x = 2\\ln 7 \\)'
        }
    },
    {
        id: 'el4-015',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 15',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 8 - 2e^{x-1} = 0 \\), giving your answer as an exact value.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'natural log', 'exact value', 'rearrange'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange to isolate the exponential.',
                    workingLatex: '2e^{x-1} = 8 \\Rightarrow e^{x-1} = 4',
                    explanation: 'Add \\( 2e^{x-1} \\) then divide by 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: 'x - 1 = \\ln 4',
                    explanation: '\\( \\ln(e^{x-1}) = x-1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = 1 + \\ln 4',
                    explanation: 'Add 1 to both sides.'
                }
            ],
            finalAnswer: '\\( x = 1 + \\ln 4 \\)'
        }
    },
    {
        id: 'el4-016',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 16',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln(3x) = 5 \\), giving your answer as an exact value.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'natural log', 'exact value'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply \\( e^{\\square} \\) to both sides to remove the \\( \\ln \\).',
                    workingLatex: 'e^{\\ln(3x)} = e^5',
                    explanation: 'Exponential and logarithm are inverse functions.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify and solve.',
                    workingLatex: '3x = e^5 \\Rightarrow x = \\frac{e^5}{3}',
                    explanation: '\\( e^{\\ln(3x)} = 3x \\).'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{e^5}{3} \\)'
        }
    },
    {
        id: 'el4-017',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 17',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 4\\ln(2x - 1) = 12 \\), giving your answer as an exact value.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'natural log', 'exact value', 'coefficient of ln'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide both sides by 4.',
                    workingLatex: '\\ln(2x-1) = 3',
                    explanation: 'Isolate the logarithm first.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( e^{\\square} \\) to both sides.',
                    workingLatex: '2x - 1 = e^3',
                    explanation: '\\( e^{\\ln(2x-1)} = 2x-1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '2x = e^3 + 1 \\Rightarrow x = \\frac{e^3 + 1}{2}',
                    explanation: 'Add 1 then divide by 2.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{e^3 + 1}{2} \\)'
        }
    },
    // TYPE E (Q18–21): Give answers in terms of ln
    {
        id: 'el4-018',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 18',
        difficulty: 'Foundation',
        questionText: 'Solve \\( e^{3x} = 27 \\), giving your answer in terms of \\( \\ln 3 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'in terms of ln', 'exact value'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '3x = \\ln 27',
                    explanation: '\\( \\ln(e^{3x}) = 3x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( \\ln 27 \\) in terms of \\( \\ln 3 \\).',
                    workingLatex: '\\ln 27 = \\ln(3^3) = 3\\ln 3',
                    explanation: 'Using the power law for logarithms.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '3x = 3\\ln 3 \\Rightarrow x = \\ln 3',
                    explanation: 'Divide both sides by 3.'
                }
            ],
            finalAnswer: '\\( x = \\ln 3 \\)'
        }
    },
    {
        id: 'el4-019',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 19',
        difficulty: 'Foundation',
        questionText: 'Solve \\( e^{2x - 1} = 9 \\), giving your answer in terms of \\( \\ln 3 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'in terms of ln', 'exact value'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '2x - 1 = \\ln 9',
                    explanation: '\\( \\ln(e^{2x-1}) = 2x - 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( \\ln 9 \\) in terms of \\( \\ln 3 \\).',
                    workingLatex: '\\ln 9 = \\ln(3^2) = 2\\ln 3',
                    explanation: 'Power law: \\( \\ln(3^2) = 2\\ln 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '2x - 1 = 2\\ln 3 \\Rightarrow x = \\frac{1 + 2\\ln 3}{2}',
                    explanation: 'Add 1 then divide by 2.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{1 + 2\\ln 3}{2} \\)'
        }
    },
    // TYPE F (Q20–23): Solving with logs on both sides (using laws to combine)
    {
        id: 'el4-020',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 20',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln 5 + \\ln x = 7 \\), giving your answer as an exact value.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'product rule', 'natural log'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the product law to combine the left side.',
                    workingLatex: '\\ln(5x) = 7',
                    explanation: '\\( \\ln 5 + \\ln x = \\ln(5x) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( e^{\\square} \\) to both sides.',
                    workingLatex: '5x = e^7',
                    explanation: '\\( e^{\\ln(5x)} = 5x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\frac{e^7}{5}',
                    explanation: 'Divide both sides by 5.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{e^7}{5} \\)'
        }
    },
    {
        id: 'el4-021',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 21',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln(4x) + \\ln(3x) = 10 \\), giving your answer as an exact value.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'product rule', 'exact value'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Combine the left side using the product law.',
                    workingLatex: '\\ln(12x^2) = 10',
                    explanation: '\\( \\ln(4x) + \\ln(3x) = \\ln(4x \\cdot 3x) = \\ln(12x^2) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( e^{\\square} \\) to both sides.',
                    workingLatex: '12x^2 = e^{10}',
                    explanation: 'Remove the \\( \\ln \\) using its inverse.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\), taking the positive root only.',
                    workingLatex: 'x^2 = \\frac{e^{10}}{12} \\Rightarrow x = \\sqrt{\\frac{e^{10}}{12}} = \\frac{e^5}{\\sqrt{12}} = \\frac{e^5}{2\\sqrt{3}}',
                    explanation: '\\( x > 0 \\) since \\( \\ln(4x) \\) requires \\( x > 0 \\).'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{e^5}{2\\sqrt{3}} \\)'
        }
    },
    {
        id: 'el4-022',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 22',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln(x - 3) - \\ln(2x) = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'quotient rule', 'ln equals zero'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the quotient law.',
                    workingLatex: '\\ln\\!\\left(\\frac{x-3}{2x}\\right) = 0',
                    explanation: 'Subtracting logs divides the arguments.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( e^{\\square} \\) to both sides.',
                    workingLatex: '\\frac{x-3}{2x} = e^0 = 1',
                    explanation: '\\( e^0 = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve the resulting equation.',
                    workingLatex: 'x - 3 = 2x \\Rightarrow -3 = x',
                    explanation: 'Multiply both sides by \\( 2x \\), then rearrange.'
                },
                {
                    stepNumber: 4,
                    description: 'Check validity: \\( x = -3 \\) gives \\( \\ln(-3-3) \\) — argument is negative. Reject.',
                    workingLatex: '\\text{No valid solution}',
                    explanation: 'Both \\( x-3 \\) and \\( 2x \\) must be positive. \\( x = -3 \\) fails both conditions.'
                }
            ],
            finalAnswer: 'No solution (the value \\( x = -3 \\) is invalid as the log arguments would be negative).'
        }
    },
    {
        id: 'el4-023',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 23',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 3\\ln x + 5\\ln x = 2 \\), giving your answer as an exact value.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'collect log terms', 'exact value'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Collect the \\( \\ln x \\) terms on the left.',
                    workingLatex: '8\\ln x = 2',
                    explanation: '3 + 5 = 8.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide both sides by 8.',
                    workingLatex: '\\ln x = \\frac{1}{4}',
                    explanation: 'Isolate the logarithm.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( e^{\\square} \\) to both sides.',
                    workingLatex: 'x = e^{1/4}',
                    explanation: '\\( e^{\\ln x} = x \\).'
                }
            ],
            finalAnswer: '\\( x = e^{1/4} \\)'
        }
    },
    // TYPE G (Q24–27): Quadratics in e^x
    {
        id: 'el4-024',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 24',
        difficulty: 'Foundation',
        questionText: 'Find the exact solutions of \\( e^{2x} - 5e^x + 6 = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'quadratic in e^x', 'substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply through by \\( e^x \\) to remove \\( e^{-x} \\)... or note \\( e^{2x} = (e^x)^2 \\) and substitute \\( y = e^x \\).',
                    workingLatex: 'y^2 - 5y + 6 = 0',
                    explanation: 'Setting \\( y = e^x \\) turns this into a standard quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: '(y-2)(y-3) = 0 \\Rightarrow y = 2 \\text{ or } y = 3',
                    explanation: 'Two values of -2 and -3 multiply to 6, add to -5.'
                },
                {
                    stepNumber: 3,
                    description: 'Replace \\( y \\) with \\( e^x \\) and apply \\( \\ln \\).',
                    workingLatex: 'e^x = 2 \\Rightarrow x = \\ln 2 \\qquad e^x = 3 \\Rightarrow x = \\ln 3',
                    explanation: '\\( e^x > 0 \\) always, so both values of \\( y \\) are valid.'
                }
            ],
            finalAnswer: '\\( x = \\ln 2 \\) or \\( x = \\ln 3 \\)'
        }
    },
    {
        id: 'el4-025',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 25',
        difficulty: 'Foundation',
        questionText: 'Find the exact solutions of \\( e^{2x} - 7e^x + 12 = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'quadratic in e^x', 'substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( y = e^x \\) so \\( e^{2x} = y^2 \\).',
                    workingLatex: 'y^2 - 7y + 12 = 0',
                    explanation: 'Substitution reduces this to a standard quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: '(y-3)(y-4) = 0 \\Rightarrow y = 3 \\text{ or } y = 4',
                    explanation: '-3 and -4 multiply to 12 and add to -7.'
                },
                {
                    stepNumber: 3,
                    description: 'Undo the substitution.',
                    workingLatex: 'e^x = 3 \\Rightarrow x = \\ln 3 \\qquad e^x = 4 \\Rightarrow x = \\ln 4',
                    explanation: 'Apply \\( \\ln \\) to each case.'
                }
            ],
            finalAnswer: '\\( x = \\ln 3 \\) or \\( x = \\ln 4 \\)'
        }
    },
    {
        id: 'el4-026',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 26',
        difficulty: 'Foundation',
        questionText: 'Find the exact solutions of \\( 2e^{2x} - 7e^x + 3 = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'quadratic in e^x', 'does not factorise trivially'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( y = e^x \\).',
                    workingLatex: '2y^2 - 7y + 3 = 0',
                    explanation: 'Substitution gives a quadratic in \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: '(2y - 1)(y - 3) = 0 \\Rightarrow y = \\frac{1}{2} \\text{ or } y = 3',
                    explanation: 'Check: \\( (2y-1)(y-3) = 2y^2 - 6y - y + 3 = 2y^2 - 7y + 3 \\) \\checkmark'
                },
                {
                    stepNumber: 3,
                    description: 'Undo the substitution. Both values of \\( y \\) are positive, so both are valid.',
                    workingLatex: 'e^x = \\frac{1}{2} \\Rightarrow x = \\ln\\frac{1}{2} = -\\ln 2 \\qquad e^x = 3 \\Rightarrow x = \\ln 3',
                    explanation: '\\( \\ln\\frac{1}{2} = \\ln(2^{-1}) = -\\ln 2 \\).'
                }
            ],
            finalAnswer: '\\( x = -\\ln 2 \\) or \\( x = \\ln 3 \\)'
        }
    },
    {
        id: 'el4-027',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 27',
        difficulty: 'Foundation',
        questionText: 'Find the exact solutions of \\( 3e^{2x} + 10e^x + 3 = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'quadratic in e^x', 'reject negative'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( y = e^x \\).',
                    workingLatex: '3y^2 + 10y + 3 = 0',
                    explanation: 'Standard substitution.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: '(3y + 1)(y + 3) = 0 \\Rightarrow y = -\\frac{1}{3} \\text{ or } y = -3',
                    explanation: 'Check: \\( (3y+1)(y+3) = 3y^2 + 9y + y + 3 = 3y^2 + 10y + 3 \\) \\checkmark'
                },
                {
                    stepNumber: 3,
                    description: 'Check validity of each solution.',
                    workingLatex: 'e^x = -\\frac{1}{3} \\text{ — impossible} \\qquad e^x = -3 \\text{ — impossible}',
                    explanation: '\\( e^x > 0 \\) for all real \\( x \\), so neither negative value is achievable.'
                }
            ],
            finalAnswer: 'No real solutions.'
        }
    },
    // TYPE H (Q28–30): Solving simultaneous equations with logs/exponentials
    {
        id: 'el4-028',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 28',
        difficulty: 'Foundation',
        questionText: 'Solve simultaneously: \\( 3^x = 9^y \\) and \\( 2x + y = 5 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'simultaneous', 'index form'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( 9^y = (3^2)^y = 3^{2y} \\). Since \\( 3^x = 3^{2y} \\), the exponents must be equal.',
                    workingLatex: 'x = 2y',
                    explanation: 'When bases are equal, exponents are equal.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( x = 2y \\) into the second equation.',
                    workingLatex: '2(2y) + y = 5 \\Rightarrow 5y = 5 \\Rightarrow y = 1',
                    explanation: 'Replace \\( x \\) with \\( 2y \\) and solve.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( x \\).',
                    workingLatex: 'x = 2y = 2',
                    explanation: 'Substitute \\( y = 1 \\) back.'
                }
            ],
            finalAnswer: '\\( x = 2, \\; y = 1 \\)'
        }
    },
    {
        id: 'el4-029',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 29',
        difficulty: 'Foundation',
        questionText: 'Solve simultaneously: \\( \\log_2 x = 1 + \\log_2 y \\) and \\( x = 3y - 4 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'simultaneous', 'quotient rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the first equation using the quotient law.',
                    workingLatex: '\\log_2 x - \\log_2 y = 1 \\Rightarrow \\log_2\\!\\left(\\frac{x}{y}\\right) = 1',
                    explanation: 'Subtract \\( \\log_2 y \\) from both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Convert to index form.',
                    workingLatex: '\\frac{x}{y} = 2^1 = 2 \\Rightarrow x = 2y',
                    explanation: 'Base 2, power 1, argument \\( x/y \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( x = 2y \\) into the second equation.',
                    workingLatex: '2y = 3y - 4 \\Rightarrow y = 4',
                    explanation: 'Solve the linear equation.'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( x \\).',
                    workingLatex: 'x = 2(4) = 8',
                    explanation: 'Substitute \\( y = 4 \\) back.'
                }
            ],
            finalAnswer: '\\( x = 8, \\; y = 4 \\)'
        }
    },
    // TYPE I (Q30–33): Modelling with logarithms — exponential growth and decay
    {
        id: 'el4-030',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 30',
        difficulty: 'Foundation',
        questionText: 'A population of rabbits is modelled by \\( P = 120e^{0.04t} \\), where \\( P \\) is the population and \\( t \\) is the time in years.\n\n (a) Find the initial population.\n\n (b) Find the value of \\( t \\) when the population reaches 300. Give your answer to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'exponential growth model', 'real-world'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\).',
                    workingLatex: 'P = 120e^{0.04 \\times 0} = 120e^0 = 120',
                    explanation: '\\( e^0 = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( P = 300 \\) and solve for \\( t \\).',
                    workingLatex: '120e^{0.04t} = 300 \\Rightarrow e^{0.04t} = \\frac{300}{120} = 2.5',
                    explanation: 'Divide both sides by 120.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '0.04t = \\ln(2.5)',
                    explanation: '\\( \\ln(e^{0.04t}) = 0.04t \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( t \\).',
                    workingLatex: 't = \\frac{\\ln(2.5)}{0.04} \\approx \\frac{0.9163}{0.04} \\approx 22.9',
                    explanation: 'Divide by 0.04 and evaluate.'
                }
            ],
            finalAnswer: '(a) \\( P = 120 \\) \\quad (b) \\( t \\approx 22.9 \\) years'
        }
    },
    {
        id: 'el4-031',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 31',
        difficulty: 'Foundation',
        questionText: 'The temperature \\( T \\) (°C) of a cooling drink is modelled by \\( T = 80e^{-0.05t} + 20 \\), where \\( t \\) is the time in minutes.\n\n (a) State the initial temperature.\n\n (b) Find the time at which the drink reaches 40°C. Give your answer to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'exponential decay model', 'real-world'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\).',
                    workingLatex: 'T = 80e^0 + 20 = 80 + 20 = 100',
                    explanation: '\\( e^0 = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( T = 40 \\).',
                    workingLatex: '80e^{-0.05t} + 20 = 40 \\Rightarrow 80e^{-0.05t} = 20 \\Rightarrow e^{-0.05t} = 0.25',
                    explanation: 'Subtract 20, then divide by 80.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '-0.05t = \\ln(0.25) = \\ln\\!\\left(\\frac{1}{4}\\right) = -\\ln 4',
                    explanation: '\\( \\ln(0.25) = \\ln(4^{-1}) = -\\ln 4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( t \\).',
                    workingLatex: 't = \\frac{\\ln 4}{0.05} \\approx \\frac{1.3863}{0.05} \\approx 27.7',
                    explanation: 'The negative signs cancel.'
                }
            ],
            finalAnswer: '(a) \\( 100\\,^\\circ\\!\\text{C} \\) \\quad (b) \\( t \\approx 27.7 \\) minutes'
        }
    },
    // TYPE J (Q32–35): Exam-style multi-part
    {
        id: 'el4-032',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 32',
        difficulty: 'Foundation',
        questionText: '(a) Show that the equation \\( e^{2x} - 4e^x = 5 \\) can be written as \\( (e^x - 5)(e^x + 1) = 0 \\).\n\n (b) Hence solve \\( e^{2x} - 4e^x = 5 \\), giving any exact solutions.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'quadratic in e^x', 'show that', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Rearrange: subtract 5 from both sides.',
                    workingLatex: 'e^{2x} - 4e^x - 5 = 0',
                    explanation: 'Standard form of the quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Let \\( y = e^x \\) and factorise \\( y^2 - 4y - 5 \\).',
                    workingLatex: '(y-5)(y+1) = 0',
                    explanation: '-5 and +1 multiply to -5 and add to -4. So \\( (e^x - 5)(e^x + 1) = 0 \\). \\checkmark'
                },
                {
                    stepNumber: 3,
                    description: '(b) Solve each factor.',
                    workingLatex: 'e^x = 5 \\Rightarrow x = \\ln 5 \\qquad e^x = -1 \\Rightarrow \\text{no real solution}',
                    explanation: '\\( e^x > 0 \\) always, so \\( e^x = -1 \\) has no solution.'
                }
            ],
            finalAnswer: '\\( x = \\ln 5 \\)'
        }
    },
    {
        id: 'el4-033',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 33',
        difficulty: 'Foundation',
        questionText: '(a) Show that \\( \\log_3(x+6) - \\log_3 x = 2 \\) can be written as \\( x^2 + 6x - 1 = 0 \\)... or correctly leads to \\( 9x = x + 6 \\).\n\n (b) Hence solve \\( \\log_3(x+6) - \\log_3 x = 2 \\), giving your answer as an exact value.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'quotient rule', 'show that', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Apply the quotient law.',
                    workingLatex: '\\log_3\\!\\left(\\frac{x+6}{x}\\right) = 2',
                    explanation: 'Combining the log terms.'
                },
                {
                    stepNumber: 2,
                    description: 'Convert to index form.',
                    workingLatex: '\\frac{x+6}{x} = 3^2 = 9',
                    explanation: 'Base 3, power 2.'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply both sides by \\( x \\).',
                    workingLatex: 'x + 6 = 9x',
                    explanation: 'This is the required form. \\checkmark'
                },
                {
                    stepNumber: 4,
                    description: '(b) Solve for \\( x \\).',
                    workingLatex: '6 = 8x \\Rightarrow x = \\frac{6}{8} = \\frac{3}{4}',
                    explanation: 'Subtract \\( x \\), then divide by 8.'
                },
                {
                    stepNumber: 5,
                    description: 'Check validity: \\( x = \\frac{3}{4} > 0 \\) \\checkmark',
                    workingLatex: '\\log_3\\!\\left(\\frac{3}{4} + 6\\right) - \\log_3\\!\\left(\\frac{3}{4}\\right) = \\log_3\\!\\left(\\frac{27}{4} \\times \\frac{4}{3}\\right) = \\log_3 9 = 2 \\checkmark',
                    explanation: 'Both log arguments are positive and the equation is satisfied.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{3}{4} \\)'
        }
    },
    {
        id: 'el4-034',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 34',
        difficulty: 'Foundation',
        questionText: 'The value \\( V \\) (£) of a car after \\( t \\) years is modelled by \\( V = 18000 \\times 0.85^t \\).\n\n (a) Write down the initial value of the car.\n\n (b) Find the number of complete years for the car to first be worth less than £6000.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'exponential decay model', 'real-world', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\).',
                    workingLatex: 'V = 18000 \\times 0.85^0 = 18000',
                    explanation: 'The initial value is £18 000.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( V < 6000 \\) and solve.',
                    workingLatex: '18000 \\times 0.85^t < 6000 \\Rightarrow 0.85^t < \\frac{1}{3}',
                    explanation: 'Divide both sides by 18 000.'
                },
                {
                    stepNumber: 3,
                    description: 'Take \\( \\log \\) of both sides.',
                    workingLatex: 't\\log(0.85) < \\log\\!\\left(\\frac{1}{3}\\right)',
                    explanation: 'Apply log to both sides.'
                },
                {
                    stepNumber: 4,
                    description: 'Divide by \\( \\log(0.85) \\). Note: \\( \\log(0.85) < 0 \\) so the inequality reverses.',
                    workingLatex: 't > \\frac{\\log(1/3)}{\\log(0.85)} = \\frac{-0.4771}{-0.0706} \\approx 6.76',
                    explanation: 'Dividing by a negative number reverses the inequality sign.'
                },
                {
                    stepNumber: 5,
                    description: 'Interpret the result.',
                    workingLatex: 't = 7 \\text{ complete years}',
                    explanation: 'The first complete year for which \\( t > 6.76 \\) is \\( t = 7 \\).'
                }
            ],
            finalAnswer: '(a) £18 000 \\quad (b) After \\( 7 \\) complete years'
        }
    },
    {
        id: 'el4-035',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms 35',
        difficulty: 'Foundation',
        questionText: '(a) Solve \\( \\ln(x^2 - 2x) = \\ln(8 - x^2) \\).\n\n (b) Verify that both solutions are valid by checking that the logarithm arguments are positive.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['solving log equations', 'equate arguments', 'validity check', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Since both sides are \\( \\ln \\) of the same base, equate the arguments.',
                    workingLatex: 'x^2 - 2x = 8 - x^2',
                    explanation: 'If \\( \\ln A = \\ln B \\) then \\( A = B \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange into standard quadratic form.',
                    workingLatex: '2x^2 - 2x - 8 = 0 \\Rightarrow x^2 - x - 4... \\text{ wait: } 2x^2 - 2x - 8 = 0 \\Rightarrow x^2 - x - 4 = 0',
                    explanation: 'Move all terms to one side and divide by 2.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve using the quadratic formula.',
                    workingLatex: 'x = \\frac{1 \\pm \\sqrt{1 + 16}}{2} = \\frac{1 \\pm \\sqrt{17}}{2}',
                    explanation: '\\( a=1, b=-1, c=-4 \\): discriminant \\( = 1 + 16 = 17 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(b) Check \\( x = \\frac{1 + \\sqrt{17}}{2} \\approx 2.56 \\): argument \\( x^2 - 2x \\approx 6.55 - 5.12 \\approx 1.43 > 0 \\) \\checkmark',
                    workingLatex: 'x = \\frac{1+\\sqrt{17}}{2} \\text{ is valid}',
                    explanation: 'The argument is positive.'
                },
                {
                    stepNumber: 5,
                    description: 'Check \\( x = \\frac{1 - \\sqrt{17}}{2} \\approx -1.56 \\): argument \\( x^2 - 2x \\approx 2.43 + 3.12 \\approx 5.55 > 0 \\) \\checkmark',
                    workingLatex: 'x = \\frac{1-\\sqrt{17}}{2} \\text{ is also valid}',
                    explanation: 'Both arguments are positive for this value too.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{1 + \\sqrt{17}}{2} \\) or \\( x = \\dfrac{1 - \\sqrt{17}}{2} \\)'
        }
    },

    // ─── Q36–70: Additional Solving Equations ──────────────────────

    {
        id: 'el4-036', topicRef: 'el4', topicTitle: 'Solving Equations 36', difficulty: 'Foundation',
        questionText: 'Solve \\( 2^x = 64 \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Match bases', workingLatex: '2^x = 2^6 \\implies x = 6', explanation: '' }
        ], finalAnswer: 'x = 6' }
    },
    {
        id: 'el4-037', topicRef: 'el4', topicTitle: 'Solving Equations 37', difficulty: 'Foundation',
        questionText: 'Solve \\( 3^x = 7 \\). Give your answer to 3 s.f.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take logs', workingLatex: 'x = \\frac{\\ln 7}{\\ln 3} = \\frac{1.946}{1.099} = 1.77', explanation: '' }
        ], finalAnswer: 'x = 1.77' }
    },
    {
        id: 'el4-038', topicRef: 'el4', topicTitle: 'Solving Equations 38', difficulty: 'Foundation',
        questionText: 'Solve \\( 5^{x-1} = 25 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Match bases', workingLatex: '5^{x-1} = 5^2 \\implies x - 1 = 2 \\implies x = 3', explanation: '' }
        ], finalAnswer: 'x = 3' }
    },
    {
        id: 'el4-039', topicRef: 'el4', topicTitle: 'Solving Equations 39', difficulty: 'Foundation',
        questionText: 'Solve \\( e^{3x} = 20 \\). Give exact answer.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take ln', workingLatex: '3x = \\ln 20 \\implies x = \\frac{\\ln 20}{3}', explanation: '' }
        ], finalAnswer: 'x = (ln 20)/3' }
    },
    {
        id: 'el4-040', topicRef: 'el4', topicTitle: 'Solving Equations 40', difficulty: 'Foundation',
        questionText: 'Solve \\( 4e^x - 12 = 0 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: 'e^x = 3 \\implies x = \\ln 3', explanation: '' }
        ], finalAnswer: 'x = ln 3' }
    },
    {
        id: 'el4-041', topicRef: 'el4', topicTitle: 'Solving Equations 41', difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln(2x - 1) = 4 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Exponentiate', workingLatex: '2x - 1 = e^4 \\implies x = \\frac{e^4 + 1}{2}', explanation: '' }
        ], finalAnswer: 'x = (e^4 + 1)/2' }
    },
    {
        id: 'el4-042', topicRef: 'el4', topicTitle: 'Solving Equations 42', difficulty: 'Foundation',
        questionText: 'Solve \\( 2^{2x} - 5 \\times 2^x + 4 = 0 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let u = 2^x', workingLatex: 'u^2 - 5u + 4 = 0 \\implies (u-1)(u-4) = 0', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: '2^x = 1 \\implies x = 0; \\quad 2^x = 4 \\implies x = 2', explanation: '' }
        ], finalAnswer: 'x = 0 or x = 2' }
    },
    {
        id: 'el4-043', topicRef: 'el4', topicTitle: 'Solving Equations 43', difficulty: 'Foundation',
        questionText: 'Solve \\( e^{2x} - 4e^x + 3 = 0 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let u = e^x', workingLatex: '(u-1)(u-3) = 0', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x = \\ln 1 = 0 \\text{ or } x = \\ln 3', explanation: '' }
        ], finalAnswer: 'x = 0 or x = ln 3' }
    },
    {
        id: 'el4-044', topicRef: 'el4', topicTitle: 'Solving Equations 44', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_2(x + 3) = 4 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Convert', workingLatex: 'x + 3 = 2^4 = 16 \\implies x = 13', explanation: '' }
        ], finalAnswer: 'x = 13' }
    },
    {
        id: 'el4-045', topicRef: 'el4', topicTitle: 'Solving Equations 45', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_3 x + \\log_3(x + 6) = 3 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine', workingLatex: '\\log_3[x(x+6)] = 3 \\implies x^2 + 6x = 27', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x^2 + 6x - 27 = 0 \\implies (x+9)(x-3) = 0 \\implies x = 3', explanation: 'Reject x = -9.' }
        ], finalAnswer: 'x = 3' }
    },
    {
        id: 'el4-046', topicRef: 'el4', topicTitle: 'Solving Equations 46', difficulty: 'Foundation',
        questionText: 'Solve \\( 7^x = 3^{x+2} \\). Give answer to 3 s.f.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take ln', workingLatex: 'x\\ln 7 = (x+2)\\ln 3', explanation: '' },
            { stepNumber: 2, description: 'Expand and solve', workingLatex: 'x(\\ln 7 - \\ln 3) = 2\\ln 3 \\implies x = \\frac{2\\ln 3}{\\ln 7 - \\ln 3} = \\frac{2.197}{0.847} = 2.59', explanation: '' }
        ], finalAnswer: 'x = 2.59' }
    },
    {
        id: 'el4-047', topicRef: 'el4', topicTitle: 'Solving Equations 47', difficulty: 'Foundation',
        questionText: 'Solve \\( 2 \\times 3^x = 5 \\times 2^x \\). Give answer to 3 s.f.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: '\\frac{3^x}{2^x} = \\frac{5}{2} \\implies \\left(\\frac{3}{2}\\right)^x = 2.5', explanation: '' },
            { stepNumber: 2, description: 'Take ln', workingLatex: 'x = \\frac{\\ln 2.5}{\\ln 1.5} = \\frac{0.916}{0.405} = 2.26', explanation: '' }
        ], finalAnswer: 'x = 2.26' }
    },
    {
        id: 'el4-048', topicRef: 'el4', topicTitle: 'Solving Equations 48', difficulty: 'Foundation',
        questionText: 'Solve \\( e^x - 6e^{-x} = 1 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Multiply by e^x', workingLatex: 'e^{2x} - e^x - 6 = 0', explanation: '' },
            { stepNumber: 2, description: 'Let u = e^x', workingLatex: '(u-3)(u+2) = 0 \\implies u = 3', explanation: 'Reject u = -2 since e^x > 0.' },
            { stepNumber: 3, description: 'Solve', workingLatex: 'x = \\ln 3', explanation: '' }
        ], finalAnswer: 'x = ln 3' }
    },
    {
        id: 'el4-049', topicRef: 'el4', topicTitle: 'Solving Equations 49', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_5(2x - 1) - \\log_5(x + 2) = 1 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine', workingLatex: '\\log_5\\frac{2x-1}{x+2} = 1 \\implies \\frac{2x-1}{x+2} = 5', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: '2x - 1 = 5x + 10 \\implies -3x = 11 \\implies x = -\\frac{11}{3}', explanation: 'Check: 2(-11/3)-1 < 0, so invalid. No solution.' }
        ], finalAnswer: 'No solution' }
    },
    {
        id: 'el4-050', topicRef: 'el4', topicTitle: 'Solving Equations 50', difficulty: 'Foundation',
        questionText: 'A population grows according to \\( P = 500e^{0.03t} \\). Find \\( t \\) when \\( P = 1000 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute', workingLatex: 'e^{0.03t} = 2 \\implies 0.03t = \\ln 2 \\implies t = \\frac{\\ln 2}{0.03} = 23.1', explanation: '' }
        ], finalAnswer: 't = 23.1 years' }
    },
    {
        id: 'el4-051', topicRef: 'el4', topicTitle: 'Solving Equations 51', difficulty: 'Foundation',
        questionText: 'Solve \\( 4^x = 2^{x+3} \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write 4 as 2^2', workingLatex: '2^{2x} = 2^{x+3} \\implies 2x = x + 3 \\implies x = 3', explanation: '' }
        ], finalAnswer: 'x = 3' }
    },
    {
        id: 'el4-052', topicRef: 'el4', topicTitle: 'Solving Equations 52', difficulty: 'Foundation',
        questionText: 'Solve \\( 9^x = 3^{x+4} \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write 9 as 3^2', workingLatex: '3^{2x} = 3^{x+4} \\implies 2x = x + 4 \\implies x = 4', explanation: '' }
        ], finalAnswer: 'x = 4' }
    },
    {
        id: 'el4-053', topicRef: 'el4', topicTitle: 'Solving Equations 53', difficulty: 'Foundation',
        questionText: 'Solve \\( 5e^{2x} - 3e^x = 2 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let u = e^x', workingLatex: '5u^2 - 3u - 2 = 0 \\implies (5u + 2)(u - 1) = 0', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'u = 1 \\implies x = 0', explanation: 'Reject u = -2/5 since e^x > 0.' }
        ], finalAnswer: 'x = 0' }
    },
    {
        id: 'el4-054', topicRef: 'el4', topicTitle: 'Solving Equations 54', difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln x + \\ln(x - 2) = \\ln 15 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine', workingLatex: 'x(x-2) = 15 \\implies x^2 - 2x - 15 = 0', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: '(x-5)(x+3) = 0 \\implies x = 5', explanation: 'Reject x = -3.' }
        ], finalAnswer: 'x = 5' }
    },
    {
        id: 'el4-055', topicRef: 'el4', topicTitle: 'Solving Equations 55', difficulty: 'Foundation',
        questionText: 'The half-life of a substance is 10 hours. If \\( m = m_0 e^{-kt} \\), find \\( k \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'At t = 10, m = m_0/2', workingLatex: '\\frac{1}{2} = e^{-10k} \\implies -10k = \\ln \\frac{1}{2} \\implies k = \\frac{\\ln 2}{10}', explanation: '' }
        ], finalAnswer: 'k = (ln 2)/10 = 0.0693' }
    },
    {
        id: 'el4-056', topicRef: 'el4', topicTitle: 'Solving Equations 56', difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\log_3 x = \\log_3(5x + 6) \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Power rule on LHS', workingLatex: '\\log_3 x^2 = \\log_3(5x+6) \\implies x^2 = 5x + 6', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x^2 - 5x - 6 = 0 \\implies (x-6)(x+1) = 0 \\implies x = 6', explanation: 'Reject x = -1.' }
        ], finalAnswer: 'x = 6' }
    },
    {
        id: 'el4-057', topicRef: 'el4', topicTitle: 'Solving Equations 57', difficulty: 'Foundation',
        questionText: 'Solve \\( 3^{x+1} = 4^{x-1} \\). Give answer to 3 s.f.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take ln', workingLatex: '(x+1)\\ln 3 = (x-1)\\ln 4', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x\\ln 3 + \\ln 3 = x\\ln 4 - \\ln 4 \\implies x(\\ln 3 - \\ln 4) = -\\ln 4 - \\ln 3', explanation: '' },
            { stepNumber: 3, description: 'Calculate', workingLatex: 'x = \\frac{-(\\ln 4 + \\ln 3)}{\\ln 3 - \\ln 4} = \\frac{\\ln 12}{\\ln(4/3)} = 8.64', explanation: '' }
        ], finalAnswer: 'x = 8.64' }
    },
    {
        id: 'el4-058', topicRef: 'el4', topicTitle: 'Solving Equations 58', difficulty: 'Foundation',
        questionText: 'Solve \\( e^x + 2e^{-x} = 3 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Multiply by e^x', workingLatex: 'e^{2x} - 3e^x + 2 = 0 \\implies (e^x - 1)(e^x - 2) = 0', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x = 0 \\text{ or } x = \\ln 2', explanation: '' }
        ], finalAnswer: 'x = 0 or x = ln 2' }
    },
    {
        id: 'el4-059', topicRef: 'el4', topicTitle: 'Solving Equations 59', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log(x + 5) + \\log(x - 2) = \\log 18 \\). (Base 10)',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine', workingLatex: '(x+5)(x-2) = 18 \\implies x^2 + 3x - 28 = 0', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: '(x+7)(x-4) = 0 \\implies x = 4', explanation: 'Reject x = -7.' }
        ], finalAnswer: 'x = 4' }
    },
    {
        id: 'el4-060', topicRef: 'el4', topicTitle: 'Solving Equations 60', difficulty: 'Foundation',
        questionText: 'Solve \\( 2^x + 2^{x+2} = 40 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factor', workingLatex: '2^x(1 + 2^2) = 40 \\implies 5 \\times 2^x = 40 \\implies 2^x = 8', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x = 3', explanation: '' }
        ], finalAnswer: 'x = 3' }
    },
    {
        id: 'el4-061', topicRef: 'el4', topicTitle: 'Solving Equations 61', difficulty: 'Foundation',
        questionText: 'Solve \\( 3^{x+1} - 3^x = 18 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factor', workingLatex: '3^x(3 - 1) = 18 \\implies 2 \\times 3^x = 18 \\implies 3^x = 9', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x = 2', explanation: '' }
        ], finalAnswer: 'x = 2' }
    },
    {
        id: 'el4-062', topicRef: 'el4', topicTitle: 'Solving Equations 62', difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln(x^2) = 6 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Power rule', workingLatex: '2\\ln x = 6 \\implies \\ln x = 3 \\implies x = e^3', explanation: '' }
        ], finalAnswer: 'x = e^3' }
    },
    {
        id: 'el4-063', topicRef: 'el4', topicTitle: 'Solving Equations 63', difficulty: 'Foundation',
        questionText: 'An investment of \\( \\pounds 2000 \\) grows to \\( \\pounds 3000 \\) at 4% compound interest. Find the number of years.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set up', workingLatex: '2000 \\times 1.04^n = 3000 \\implies 1.04^n = 1.5', explanation: '' },
            { stepNumber: 2, description: 'Take logs', workingLatex: 'n = \\frac{\\ln 1.5}{\\ln 1.04} = \\frac{0.405}{0.0392} = 10.3', explanation: '' }
        ], finalAnswer: '11 years (round up)' }
    },
    {
        id: 'el4-064', topicRef: 'el4', topicTitle: 'Solving Equations 64', difficulty: 'Foundation',
        questionText: 'Solve simultaneously: \\( \\log_2 x + \\log_2 y = 5 \\) and \\( \\log_2 x - \\log_2 y = 1 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Add equations', workingLatex: '2\\log_2 x = 6 \\implies \\log_2 x = 3 \\implies x = 8', explanation: '' },
            { stepNumber: 2, description: 'Subtract', workingLatex: '2\\log_2 y = 4 \\implies y = 4', explanation: '' }
        ], finalAnswer: 'x = 8, y = 4' }
    },
    {
        id: 'el4-065', topicRef: 'el4', topicTitle: 'Solving Equations 65', difficulty: 'Foundation',
        questionText: 'Solve \\( e^{2x} + 3e^x - 10 = 0 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let u = e^x', workingLatex: '(u+5)(u-2) = 0 \\implies u = 2', explanation: 'Reject u = -5.' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x = \\ln 2', explanation: '' }
        ], finalAnswer: 'x = ln 2' }
    },
    {
        id: 'el4-066', topicRef: 'el4', topicTitle: 'Solving Equations 66', difficulty: 'Foundation',
        questionText: 'Solve \\( (\\log x)^2 = \\log x^4 \\). (Base 10)',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Simplify RHS', workingLatex: '(\\log x)^2 = 4\\log x', explanation: '' },
            { stepNumber: 2, description: 'Rearrange', workingLatex: '(\\log x)^2 - 4\\log x = 0 \\implies \\log x(\\log x - 4) = 0', explanation: '' },
            { stepNumber: 3, description: 'Solve', workingLatex: '\\log x = 0: x = 1; \\quad \\log x = 4: x = 10000', explanation: '' }
        ], finalAnswer: 'x = 1 or x = 10000' }
    },
    {
        id: 'el4-067', topicRef: 'el4', topicTitle: 'Solving Equations 67', difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\ln(x + 1) - \\ln x = \\ln 4 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine', workingLatex: '\\ln\\frac{(x+1)^2}{x} = \\ln 4 \\implies \\frac{(x+1)^2}{x} = 4', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x^2 + 2x + 1 = 4x \\implies x^2 - 2x + 1 = 0 \\implies (x-1)^2 = 0', explanation: '' }
        ], finalAnswer: 'x = 1' }
    },
    {
        id: 'el4-068', topicRef: 'el4', topicTitle: 'Solving Equations 68', difficulty: 'Foundation',
        questionText: 'A cooling object has temperature \\( T = 25 + 60e^{-0.04t} \\). Find when \\( T = 40 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute', workingLatex: '15 = 60e^{-0.04t} \\implies e^{-0.04t} = 0.25', explanation: '' },
            { stepNumber: 2, description: 'Take ln', workingLatex: '-0.04t = \\ln 0.25 = -1.386 \\implies t = 34.7 \\text{ min}', explanation: '' }
        ], finalAnswer: 't = 34.7 minutes' }
    },
    {
        id: 'el4-069', topicRef: 'el4', topicTitle: 'Solving Equations 69', difficulty: 'Foundation',
        questionText: 'Find the exact solution of \\( 3^x = 2 \\times 5^x \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: '\\left(\\frac{3}{5}\\right)^x = 2', explanation: '' },
            { stepNumber: 2, description: 'Take ln', workingLatex: 'x = \\frac{\\ln 2}{\\ln(3/5)} = \\frac{\\ln 2}{\\ln 3 - \\ln 5}', explanation: '' }
        ], finalAnswer: 'x = ln 2 / (ln 3 - ln 5)' }
    },
    {
        id: 'el4-070', topicRef: 'el4', topicTitle: 'Solving Equations 70', difficulty: 'Foundation',
        questionText: 'Solve \\( e^{2x} - 5e^x = -6 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: 'e^{2x} - 5e^x + 6 = 0', explanation: '' },
            { stepNumber: 2, description: 'Let u = e^x', workingLatex: '(u-2)(u-3) = 0 \\implies u = 2 \\text{ or } u = 3', explanation: '' },
            { stepNumber: 3, description: 'Solve', workingLatex: 'x = \\ln 2 \\text{ or } x = \\ln 3', explanation: '' }
        ], finalAnswer: 'x = ln 2 or x = ln 3' }
    },
];
