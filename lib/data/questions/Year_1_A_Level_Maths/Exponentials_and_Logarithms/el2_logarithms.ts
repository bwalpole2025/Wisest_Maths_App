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

    // ── TYPE A: Definition – writing in log/index notation ──────────────────
    {
        id: 'el2-001',
        topicRef: 'el2',
        topicTitle: 'Logarithms 01',
        difficulty: 'Foundation',
        questionText: 'Write the following using logarithm notation: \\( 3^4 = 81 \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'definition', 'index to log notation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the rule: if \\( a^c = b \\) then \\( \\log_a b = c \\).',
                    workingLatex: '3^4 = 81 \\Rightarrow \\log_3 81 = 4',
                    explanation: 'The base is 3, the power is 4, and the result is 81.'
                }
            ],
            finalAnswer: '\\( \\log_3 81 = 4 \\)'
        }
    },
    {
        id: 'el2-002',
        topicRef: 'el2',
        topicTitle: 'Logarithms 02',
        difficulty: 'Foundation',
        questionText: 'Write the following using logarithm notation: \\( 5^3 = 125 \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'definition', 'index to log notation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply \\( a^c = b \\Leftrightarrow \\log_a b = c \\).',
                    workingLatex: '5^3 = 125 \\Rightarrow \\log_5 125 = 3',
                    explanation: 'Base 5, power 3, result 125.'
                }
            ],
            finalAnswer: '\\( \\log_5 125 = 3 \\)'
        }
    },
    {
        id: 'el2-003',
        topicRef: 'el2',
        topicTitle: 'Logarithms 03',
        difficulty: 'Foundation',
        questionText: 'Write the following using logarithm notation: \\( 7^2 = 49 \\), \\( 4^{-2} = \\dfrac{1}{16} \\), and \\( 27^{\\frac{1}{3}} = 3 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'definition', 'negative and fractional powers', 'index to log'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert \\( 7^2 = 49 \\).',
                    workingLatex: '\\log_7 49 = 2',
                    explanation: 'Base 7, power 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Convert \\( 4^{-2} = \\frac{1}{16} \\).',
                    workingLatex: '\\log_4 \\frac{1}{16} = -2',
                    explanation: 'The negative power gives a fractional result.'
                },
                {
                    stepNumber: 3,
                    description: 'Convert \\( 27^{\\frac{1}{3}} = 3 \\).',
                    workingLatex: '\\log_{27} 3 = \\frac{1}{3}',
                    explanation: 'A power of \\( \\frac{1}{3} \\) is a cube root.'
                }
            ],
            finalAnswer: '\\( \\log_7 49 = 2 \\); \\( \\log_4 \\frac{1}{16} = -2 \\); \\( \\log_{27} 3 = \\frac{1}{3} \\)'
        }
    },
    {
        id: 'el2-004',
        topicRef: 'el2',
        topicTitle: 'Logarithms 04',
        difficulty: 'Foundation',
        questionText: 'Write the following using index notation (do not evaluate): \\( \\log_4 m = 3 \\), \\( \\ln p = 7 \\), and \\( \\log k = 5 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'definition', 'log to index notation', 'ln', 'log base 10'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert \\( \\log_4 m = 3 \\).',
                    workingLatex: '4^3 = m',
                    explanation: 'Base 4 raised to power 3 equals \\( m \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Convert \\( \\ln p = 7 \\). Recall \\( \\ln \\) means \\( \\log_e \\).',
                    workingLatex: 'e^7 = p',
                    explanation: 'The natural log has base \\( e \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Convert \\( \\log k = 5 \\). Recall \\( \\log \\) without a base means \\( \\log_{10} \\).',
                    workingLatex: '10^5 = k',
                    explanation: 'Base 10 is assumed when no base is written.'
                }
            ],
            finalAnswer: '\\( 4^3 = m \\); \\( e^7 = p \\); \\( 10^5 = k \\)'
        }
    },
    {
        id: 'el2-005',
        topicRef: 'el2',
        topicTitle: 'Logarithms 05',
        difficulty: 'Foundation',
        questionText: 'Write the following using index notation: \\( \\log_a b = n \\), \\( \\ln q = r \\), and \\( \\log_6 w = z \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'definition', 'general form', 'log to index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '\\( \\log_a b = n \\).',
                    workingLatex: 'a^n = b',
                    explanation: 'General form of the log-to-index conversion.'
                },
                {
                    stepNumber: 2,
                    description: '\\( \\ln q = r \\).',
                    workingLatex: 'e^r = q',
                    explanation: '\\( \\ln \\) has base \\( e \\).'
                },
                {
                    stepNumber: 3,
                    description: '\\( \\log_6 w = z \\).',
                    workingLatex: '6^z = w',
                    explanation: 'Base 6 raised to \\( z \\) gives \\( w \\).'
                }
            ],
            finalAnswer: '\\( a^n = b \\); \\( e^r = q \\); \\( 6^z = w \\)'
        }
    },
    // ── TYPE B: Evaluating logarithms ───────────────────────────────────────
    {
        id: 'el2-006',
        topicRef: 'el2',
        topicTitle: 'Logarithms 06',
        difficulty: 'Foundation',
        questionText: 'Find the value of each of the following: \n\n (a) \\( \\log_2 32 \\) \\quad (b) \\( \\log_3 81 \\) \\quad (c) \\( \\log_5 5 \\) \\quad (d) \\( \\log_7 1 \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'evaluate', 'integer values', 'log_a a = 1', 'log_a 1 = 0'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): What power do you raise 2 to in order to get 32?',
                    workingLatex: '2^5 = 32 \\Rightarrow \\log_2 32 = 5',
                    explanation: '\\( 2^1=2, 2^2=4, 2^3=8, 2^4=16, 2^5=32 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( 3^4 = 81 \\).',
                    workingLatex: '\\log_3 81 = 4',
                    explanation: '\\( 3^4 = 81 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): \\( \\log_a a = 1 \\) for any valid base.',
                    workingLatex: '\\log_5 5 = 1',
                    explanation: 'Any number raised to the power 1 equals itself.'
                },
                {
                    stepNumber: 4,
                    description: 'Part (d): \\( \\log_a 1 = 0 \\) for any valid base.',
                    workingLatex: '\\log_7 1 = 0',
                    explanation: '\\( 7^0 = 1 \\).'
                }
            ],
            finalAnswer: '(a) 5 \\quad (b) 4 \\quad (c) 1 \\quad (d) 0'
        }
    },
    {
        id: 'el2-007',
        topicRef: 'el2',
        topicTitle: 'Logarithms 07',
        difficulty: 'Foundation',
        questionText: 'Find the value of each of the following: \n\n (a) \\( \\log_4 64 \\) \\quad (b) \\( \\log_6 36 \\) \\quad (c) \\( \\log_3 \\dfrac{1}{9} \\) \\quad (d) \\( \\log_2 \\dfrac{1}{8} \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'evaluate', 'negative logs', 'reciprocals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): \\( 4^3 = 64 \\).',
                    workingLatex: '\\log_4 64 = 3',
                    explanation: '\\( 4^3 = 64 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( 6^2 = 36 \\).',
                    workingLatex: '\\log_6 36 = 2',
                    explanation: '\\( 6^2 = 36 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): \\( \\frac{1}{9} = 3^{-2} \\).',
                    workingLatex: '\\log_3 \\frac{1}{9} = -2',
                    explanation: 'A negative logarithm comes from a reciprocal.'
                },
                {
                    stepNumber: 4,
                    description: 'Part (d): \\( \\frac{1}{8} = 2^{-3} \\).',
                    workingLatex: '\\log_2 \\frac{1}{8} = -3',
                    explanation: '\\( 2^{-3} = \\frac{1}{8} \\).'
                }
            ],
            finalAnswer: '(a) 3 \\quad (b) 2 \\quad (c) \\( -2 \\) \\quad (d) \\( -3 \\)'
        }
    },
    {
        id: 'el2-008',
        topicRef: 'el2',
        topicTitle: 'Logarithms 08',
        difficulty: 'Foundation',
        questionText: 'Find the value of each of the following: \n\n (a) \\( \\log_9 3 \\) \\quad (b) \\( \\log_8 2 \\) \\quad (c) \\( \\log_{16} 4 \\) \\quad (d) \\( \\log_{32} 2 \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'evaluate', 'fractional logs', 'roots'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): \\( 3 = 9^{1/2} \\) (square root of 9).',
                    workingLatex: '\\log_9 3 = \\frac{1}{2}',
                    explanation: '\\( 9^{1/2} = \\sqrt{9} = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( 2 = 8^{1/3} \\) (cube root of 8).',
                    workingLatex: '\\log_8 2 = \\frac{1}{3}',
                    explanation: '\\( 8^{1/3} = \\sqrt[3]{8} = 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): \\( 4 = 16^{1/2} \\).',
                    workingLatex: '\\log_{16} 4 = \\frac{1}{2}',
                    explanation: '\\( \\sqrt{16} = 4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Part (d): \\( 2 = 32^{1/5} \\) (fifth root of 32).',
                    workingLatex: '\\log_{32} 2 = \\frac{1}{5}',
                    explanation: '\\( 32^{1/5} = \\sqrt[5]{32} = 2 \\) since \\( 2^5 = 32 \\).'
                }
            ],
            finalAnswer: '(a) \\( \\frac{1}{2} \\) \\quad (b) \\( \\frac{1}{3} \\) \\quad (c) \\( \\frac{1}{2} \\) \\quad (d) \\( \\frac{1}{5} \\)'
        }
    },
    {
        id: 'el2-009',
        topicRef: 'el2',
        topicTitle: 'Logarithms 09',
        difficulty: 'Foundation',
        questionText: 'Use a calculator to find each of the following, rounding to 3 decimal places: \n\n (a) \\( \\log 50 \\) \\quad (b) \\( \\log 0.4 \\) \\quad (c) \\( \\ln 5 \\) \\quad (d) \\( \\ln 100 \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'calculator', 'log base 10', 'ln', 'decimal answers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): \\( \\log 50 = \\log_{10} 50 \\).',
                    workingLatex: '\\log 50 = 1.699',
                    explanation: '\\( 10^{1.699} \\approx 50 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( \\log 0.4 \\) — result is negative since \\( 0.4 < 1 \\).',
                    workingLatex: '\\log 0.4 = -0.398',
                    explanation: '\\( 10^{-0.398} \\approx 0.4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): \\( \\ln 5 \\).',
                    workingLatex: '\\ln 5 = 1.609',
                    explanation: '\\( e^{1.609} \\approx 5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Part (d): \\( \\ln 100 \\).',
                    workingLatex: '\\ln 100 = 4.605',
                    explanation: '\\( e^{4.605} \\approx 100 \\).'
                }
            ],
            finalAnswer: '(a) \\( 1.699 \\) \\quad (b) \\( -0.398 \\) \\quad (c) \\( 1.609 \\) \\quad (d) \\( 4.605 \\)'
        }
    },
    {
        id: 'el2-010',
        topicRef: 'el2',
        topicTitle: 'Logarithms 10',
        difficulty: 'Foundation',
        questionText: 'Find the value of \\( x \\) (where \\( x > 0 \\)) in each of the following: \n\n (a) \\( \\log_x 64 = 3 \\) \\quad (b) \\( \\log_x 100 = 2 \\) \\quad (c) \\( \\log_x 625 = 4 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'find the base', 'index notation', 'solve for x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Convert to index form: \\( x^3 = 64 \\).',
                    workingLatex: 'x = \\sqrt[3]{64} = 4',
                    explanation: '\\( 4^3 = 64 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( x^2 = 100 \\).',
                    workingLatex: 'x = \\sqrt{100} = 10',
                    explanation: '\\( 10^2 = 100 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): \\( x^4 = 625 \\).',
                    workingLatex: 'x = \\sqrt[4]{625} = 5',
                    explanation: '\\( 5^4 = 625 \\).'
                }
            ],
            finalAnswer: '(a) \\( x = 4 \\) \\quad (b) \\( x = 10 \\) \\quad (c) \\( x = 5 \\)'
        }
    },
    {
        id: 'el2-011',
        topicRef: 'el2',
        topicTitle: 'Logarithms 11',
        difficulty: 'Foundation',
        questionText: 'Find the value of \\( x \\) (where \\( x > 0 \\)) by writing each equation in index notation: \n\n (a) \\( \\log_3 x = 4 \\) \\quad (b) \\( \\log_5 x = 3 \\) \\quad (c) \\( \\log_2 x = 6 \\) \\quad (d) \\( \\log_4 x = -1 \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'find x', 'index notation', 'negative logs'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): \\( \\log_3 x = 4 \\Rightarrow x = 3^4 \\).',
                    workingLatex: 'x = 81',
                    explanation: '\\( 3^4 = 81 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( \\log_5 x = 3 \\Rightarrow x = 5^3 \\).',
                    workingLatex: 'x = 125',
                    explanation: '\\( 5^3 = 125 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): \\( \\log_2 x = 6 \\Rightarrow x = 2^6 \\).',
                    workingLatex: 'x = 64',
                    explanation: '\\( 2^6 = 64 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Part (d): \\( \\log_4 x = -1 \\Rightarrow x = 4^{-1} \\).',
                    workingLatex: 'x = \\frac{1}{4}',
                    explanation: '\\( 4^{-1} = \\frac{1}{4} \\).'
                }
            ],
            finalAnswer: '(a) 81 \\quad (b) 125 \\quad (c) 64 \\quad (d) \\( \\frac{1}{4} \\)'
        }
    },
    // ── TYPE C: Key log facts – log_a 1 = 0, log_a a = 1 ───────────────────
    {
        id: 'el2-012',
        topicRef: 'el2',
        topicTitle: 'Logarithms 12',
        difficulty: 'Foundation',
        questionText: 'Without a calculator, explain why \\( \\log_5 1 = 0 \\) and \\( \\log_5 5 = 1 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'key facts', 'log_a 1 = 0', 'log_a a = 1'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '\\( \\log_5 1 = 0 \\) because \\( 5^0 = 1 \\).',
                    workingLatex: '5^0 = 1 \\Rightarrow \\log_5 1 = 0',
                    explanation: 'Any positive base raised to the power zero gives 1.'
                },
                {
                    stepNumber: 2,
                    description: '\\( \\log_5 5 = 1 \\) because \\( 5^1 = 5 \\).',
                    workingLatex: '5^1 = 5 \\Rightarrow \\log_5 5 = 1',
                    explanation: 'Any base raised to the power 1 equals itself.'
                }
            ],
            finalAnswer: '\\( \\log_5 1 = 0 \\) (since \\( 5^0=1 \\)) and \\( \\log_5 5 = 1 \\) (since \\( 5^1=5 \\)).'
        }
    },
    {
        id: 'el2-013',
        topicRef: 'el2',
        topicTitle: 'Logarithms 13',
        difficulty: 'Foundation',
        questionText: 'State the values of: \\( \\ln e \\), \\( \\ln 1 \\), and \\( \\ln e^5 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'natural log', 'ln e = 1', 'ln 1 = 0', 'ln e^n = n'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '\\( \\ln e = \\log_e e = 1 \\).',
                    workingLatex: '\\ln e = 1',
                    explanation: 'Because \\( e^1 = e \\).'
                },
                {
                    stepNumber: 2,
                    description: '\\( \\ln 1 = 0 \\).',
                    workingLatex: '\\ln 1 = 0',
                    explanation: 'Because \\( e^0 = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: '\\( \\ln e^5 = 5 \\).',
                    workingLatex: '\\ln e^5 = 5',
                    explanation: 'Using the inverse property: \\( \\ln(e^x) = x \\).'
                }
            ],
            finalAnswer: '\\( \\ln e = 1 \\); \\( \\ln 1 = 0 \\); \\( \\ln e^5 = 5 \\).'
        }
    },
    // ── TYPE D: Inverse functions – solving e^x = k and ln x = k ────────────
    {
        id: 'el2-014',
        topicRef: 'el2',
        topicTitle: 'Logarithms 14',
        difficulty: 'Foundation',
        questionText: 'Solve \\( e^x = 7 \\), giving (i) an exact solution and (ii) a solution correct to 3 significant figures.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'solve e^x = k', 'natural log', 'exact and decimal'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '\\ln e^x = \\ln 7 \\Rightarrow x = \\ln 7',
                    explanation: '\\( \\ln \\) and \\( e \\) are inverse functions, so \\( \\ln e^x = x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate to 3 s.f.',
                    workingLatex: 'x = \\ln 7 \\approx 1.95',
                    explanation: 'Using a calculator.'
                }
            ],
            finalAnswer: '(i) \\( x = \\ln 7 \\) \\quad (ii) \\( x \\approx 1.95 \\)'
        }
    },
    {
        id: 'el2-015',
        topicRef: 'el2',
        topicTitle: 'Logarithms 15',
        difficulty: 'Foundation',
        questionText: 'Solve each equation, giving (i) an exact solution and (ii) a solution to 3 s.f.: \n\n (a) \\( e^x = 15 \\) \\quad (b) \\( e^x = 0.3 \\) \\quad (c) \\( 3e^x = 24 \\)',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'solve e^x = k', 'rearrange first', 'natural log'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Apply \\( \\ln \\) to both sides.',
                    workingLatex: 'x = \\ln 15 \\approx 2.71',
                    explanation: 'Direct application of \\( \\ln \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( e^x = 0.3 \\). Since \\( 0.3 < 1 \\), the answer is negative.',
                    workingLatex: 'x = \\ln 0.3 \\approx -1.20',
                    explanation: '\\( \\ln \\) of a number between 0 and 1 is negative.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Divide by 3 first.',
                    workingLatex: 'e^x = 8 \\Rightarrow x = \\ln 8 \\approx 2.08',
                    explanation: 'Isolate \\( e^x \\) before taking \\( \\ln \\).'
                }
            ],
            finalAnswer: '(a) \\( x = \\ln 15 \\approx 2.71 \\) \\quad (b) \\( x = \\ln 0.3 \\approx -1.20 \\) \\quad (c) \\( x = \\ln 8 \\approx 2.08 \\)'
        }
    },
    {
        id: 'el2-016',
        topicRef: 'el2',
        topicTitle: 'Logarithms 16',
        difficulty: 'Foundation',
        questionText: 'Solve each equation, giving (i) an exact solution and (ii) a solution to 3 s.f.: \n\n (a) \\( e^x = 430 \\) \\quad (b) \\( 4e^x = 36 \\) \\quad (c) \\( e^x = 0.05 \\)',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'solve e^x = k', 'rearrange first', 'natural log'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): \\( x = \\ln 430 \\).',
                    workingLatex: 'x = \\ln 430 \\approx 6.06',
                    explanation: 'Direct application.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Divide both sides by 4 to get \\( e^x = 9 \\).',
                    workingLatex: 'x = \\ln 9 \\approx 2.20',
                    explanation: 'Rearrange before applying \\( \\ln \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): \\( e^x = 0.05 \\). Result is negative.',
                    workingLatex: 'x = \\ln 0.05 \\approx -3.00',
                    explanation: '\\( \\ln(0.05) = \\ln(\\frac{1}{20}) \\approx -2.996 \\).'
                }
            ],
            finalAnswer: '(a) \\( x = \\ln 430 \\approx 6.06 \\) \\quad (b) \\( x = \\ln 9 \\approx 2.20 \\) \\quad (c) \\( x = \\ln 0.05 \\approx -3.00 \\)'
        }
    },
    {
        id: 'el2-017',
        topicRef: 'el2',
        topicTitle: 'Logarithms 17',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln x = 4 \\), giving (i) an exact solution and (ii) a solution to 3 s.f.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'solve ln x = k', 'inverse of ln'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply \\( e \\) to both sides to undo the \\( \\ln \\).',
                    workingLatex: 'e^{\\ln x} = e^4 \\Rightarrow x = e^4',
                    explanation: '\\( e \\) and \\( \\ln \\) are inverse functions.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate to 3 s.f.',
                    workingLatex: 'x = e^4 \\approx 54.6',
                    explanation: '\\( e^4 \\approx 54.598 \\).'
                }
            ],
            finalAnswer: '(i) \\( x = e^4 \\) \\quad (ii) \\( x \\approx 54.6 \\)'
        }
    },
    {
        id: 'el2-018',
        topicRef: 'el2',
        topicTitle: 'Logarithms 18',
        difficulty: 'Foundation',
        questionText: 'Solve each equation, giving (i) an exact solution and (ii) a solution to 3 s.f.: \n\n (a) \\( \\ln x = 6 \\) \\quad (b) \\( \\ln x = 0.8 \\) \\quad (c) \\( 4\\ln x = 20 \\)',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'solve ln x = k', 'rearrange first', 'exact and decimal'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Raise \\( e \\) to both sides.',
                    workingLatex: 'x = e^6 \\approx 403',
                    explanation: '\\( e^6 \\approx 403.4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( x = e^{0.8} \\).',
                    workingLatex: 'x = e^{0.8} \\approx 2.23',
                    explanation: '\\( e^{0.8} \\approx 2.2255 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Divide by 4 first to get \\( \\ln x = 5 \\).',
                    workingLatex: 'x = e^5 \\approx 148',
                    explanation: '\\( e^5 \\approx 148.4 \\).'
                }
            ],
            finalAnswer: '(a) \\( x = e^6 \\approx 403 \\) \\quad (b) \\( x = e^{0.8} \\approx 2.23 \\) \\quad (c) \\( x = e^5 \\approx 148 \\)'
        }
    },
    {
        id: 'el2-019',
        topicRef: 'el2',
        topicTitle: 'Logarithms 19',
        difficulty: 'Foundation',
        questionText: 'Solve each equation, giving (i) an exact solution and (ii) a solution to 3 s.f.: \n\n (a) \\( \\ln x = -2 \\) \\quad (b) \\( 5\\ln x = 30 \\) \\quad (c) \\( \\ln 3x = 7 \\)',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'solve ln x = k', 'ln(kx)', 'rearrange'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): \\( \\ln x = -2 \\Rightarrow x = e^{-2} \\).',
                    workingLatex: 'x = e^{-2} = \\frac{1}{e^2} \\approx 0.135',
                    explanation: 'A negative result for \\( \\ln x \\) means \\( 0 < x < 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( 5\\ln x = 30 \\Rightarrow \\ln x = 6 \\Rightarrow x = e^6 \\).',
                    workingLatex: 'x = e^6 \\approx 403',
                    explanation: 'Divide by 5 first.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): \\( \\ln 3x = 7 \\Rightarrow 3x = e^7 \\Rightarrow x = \\dfrac{e^7}{3} \\).',
                    workingLatex: 'x = \\frac{e^7}{3} \\approx 365',
                    explanation: 'Raise \\( e \\) to both sides, then divide by 3.'
                }
            ],
            finalAnswer: '(a) \\( x = e^{-2} \\approx 0.135 \\) \\quad (b) \\( x = e^6 \\approx 403 \\) \\quad (c) \\( x = \\dfrac{e^7}{3} \\approx 365 \\)'
        }
    },
    {
        id: 'el2-020',
        topicRef: 'el2',
        topicTitle: 'Logarithms 20',
        difficulty: 'Foundation',
        questionText: 'Solve each equation, giving (i) an exact solution and (ii) a solution to 3 s.f.: \n\n (a) \\( \\ln(x - 1) = 3 \\) \\quad (b) \\( \\ln(2x + 1) = 5 \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'solve ln(f(x)) = k', 'rearrange', 'exact and decimal'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Raise \\( e \\) to both sides.',
                    workingLatex: 'x - 1 = e^3 \\Rightarrow x = e^3 + 1 \\approx 21.1',
                    explanation: '\\( e^3 \\approx 20.09 \\), so \\( x \\approx 21.1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Raise \\( e \\) to both sides.',
                    workingLatex: '2x + 1 = e^5 \\Rightarrow 2x = e^5 - 1 \\Rightarrow x = \\frac{e^5 - 1}{2} \\approx 73.7',
                    explanation: '\\( e^5 \\approx 148.41 \\), so \\( \\frac{148.41 - 1}{2} \\approx 73.7 \\).'
                }
            ],
            finalAnswer: '(a) \\( x = e^3 + 1 \\approx 21.1 \\) \\quad (b) \\( x = \\dfrac{e^5-1}{2} \\approx 73.7 \\)'
        }
    },
    // ── TYPE E: Inverse property – a^{log_a x} = x and log_a(a^x) = x ───────
    {
        id: 'el2-021',
        topicRef: 'el2',
        topicTitle: 'Logarithms 21',
        difficulty: 'Foundation',
        questionText: 'Without a calculator, simplify: \n\n (a) \\( e^{\\ln 9} \\) \\quad (b) \\( \\ln(e^{12}) \\) \\quad (c) \\( e^{\\ln x} \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'inverse property', 'e and ln cancel', 'simplify'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): \\( e \\) and \\( \\ln \\) are inverse functions.',
                    workingLatex: 'e^{\\ln 9} = 9',
                    explanation: '\\( e^{\\ln a} = a \\) for any \\( a > 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( \\ln(e^{12}) = 12 \\).',
                    workingLatex: '\\ln(e^{12}) = 12',
                    explanation: '\\( \\ln(e^x) = x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): \\( e^{\\ln x} = x \\).',
                    workingLatex: 'e^{\\ln x} = x',
                    explanation: 'The general inverse property.'
                }
            ],
            finalAnswer: '(a) 9 \\quad (b) 12 \\quad (c) \\( x \\)'
        }
    },
    {
        id: 'el2-022',
        topicRef: 'el2',
        topicTitle: 'Logarithms 22',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = \\ln x \\) is a reflection of \\( y = e^x \\) in the line \\( y = x \\). \n\n (a) State the coordinates where \\( y = \\ln x \\) crosses the \\( x \\)-axis. \n\n (b) State the equation of the asymptote of \\( y = \\ln x \\). \n\n (c) State the domain of \\( y = \\ln x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'graph of ln x', 'asymptote', 'domain', 'x-intercept'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): \\( \\ln x = 0 \\Rightarrow x = e^0 = 1 \\).',
                    workingLatex: '(1,\\ 0)',
                    explanation: 'The graph crosses the \\( x \\)-axis at \\( x = 1 \\) since \\( \\ln 1 = 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): As \\( x \\to 0^+ \\), \\( \\ln x \\to -\\infty \\). The asymptote is the \\( y \\)-axis.',
                    workingLatex: 'x = 0',
                    explanation: 'The graph approaches but never touches \\( x = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): \\( \\ln x \\) is only defined for positive \\( x \\).',
                    workingLatex: 'x > 0',
                    explanation: 'You cannot take the logarithm of zero or a negative number.'
                }
            ],
            finalAnswer: '(a) \\( (1, 0) \\). (b) \\( x = 0 \\). (c) \\( x > 0 \\).'
        }
    },
    // ── TYPE F: Writing y in terms of x using log relations ─────────────────
    {
        id: 'el2-023',
        topicRef: 'el2',
        topicTitle: 'Logarithms 23',
        difficulty: 'Foundation',
        questionText: 'Given that \\( \\log_3 x = 2 \\) and \\( \\log_3 y = 6 \\), write \\( y \\) in terms of \\( x \\) using index notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'write y in terms of x', 'index notation', 'problem solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert \\( \\log_3 x = 2 \\) to index form.',
                    workingLatex: 'x = 3^2 \\Rightarrow 3 = x^{1/2}',
                    explanation: 'Express 3 in terms of \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Convert \\( \\log_3 y = 6 \\) to index form.',
                    workingLatex: 'y = 3^6',
                    explanation: 'Express \\( y \\) using base 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( 3 = x^{1/2} \\) into \\( y = 3^6 \\).',
                    workingLatex: 'y = \\left(x^{1/2}\\right)^6 = x^3',
                    explanation: 'Use the laws of indices: \\( (x^{1/2})^6 = x^3 \\).'
                }
            ],
            finalAnswer: '\\( y = x^3 \\)'
        }
    },
    {
        id: 'el2-024',
        topicRef: 'el2',
        topicTitle: 'Logarithms 24',
        difficulty: 'Foundation',
        questionText: 'Given that \\( \\log_2 x = 4 \\) and \\( \\log_2 y = 12 \\), write \\( y \\) in terms of \\( x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'write y in terms of x', 'index notation', 'problem solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'From \\( \\log_2 x = 4 \\): \\( x = 2^4 \\Rightarrow 2 = x^{1/4} \\).',
                    workingLatex: '2 = x^{1/4}',
                    explanation: 'Raise both sides to the power \\( \\frac{1}{4} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'From \\( \\log_2 y = 12 \\): \\( y = 2^{12} \\).',
                    workingLatex: 'y = 2^{12}',
                    explanation: 'Index form.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( 2 = x^{1/4} \\).',
                    workingLatex: 'y = \\left(x^{1/4}\\right)^{12} = x^{3}',
                    explanation: '\\( \\frac{12}{4} = 3 \\).'
                }
            ],
            finalAnswer: '\\( y = x^3 \\)'
        }
    },
    {
        id: 'el2-025',
        topicRef: 'el2',
        topicTitle: 'Logarithms 25',
        difficulty: 'Foundation',
        questionText: 'Given that \\( \\ln x = 3 \\) and \\( \\ln y = 9 \\), write \\( y \\) in terms of \\( x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'ln', 'write y in terms of x', 'problem solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'From \\( \\ln x = 3 \\): \\( x = e^3 \\Rightarrow e = x^{1/3} \\).',
                    workingLatex: 'e = x^{1/3}',
                    explanation: 'Raise both sides to \\( \\frac{1}{3} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'From \\( \\ln y = 9 \\): \\( y = e^9 \\).',
                    workingLatex: 'y = e^9',
                    explanation: 'Index form.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( e = x^{1/3} \\).',
                    workingLatex: 'y = \\left(x^{1/3}\\right)^9 = x^3',
                    explanation: '\\( \\frac{9}{3} = 3 \\).'
                }
            ],
            finalAnswer: '\\( y = x^3 \\)'
        }
    },
    {
        id: 'el2-026',
        topicRef: 'el2',
        topicTitle: 'Logarithms 26',
        difficulty: 'Foundation',
        questionText: 'Given that \\( \\ln x = 4 \\) and \\( \\ln y = 2 \\), write \\( y \\) in terms of \\( x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'ln', 'write y in terms of x', 'fractional power'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'From \\( \\ln x = 4 \\): \\( x = e^4 \\Rightarrow e = x^{1/4} \\).',
                    workingLatex: 'e = x^{1/4}',
                    explanation: 'Raise both sides to \\( \\frac{1}{4} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'From \\( \\ln y = 2 \\): \\( y = e^2 \\).',
                    workingLatex: 'y = e^2',
                    explanation: 'Index form.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( e = x^{1/4} \\).',
                    workingLatex: 'y = \\left(x^{1/4}\\right)^2 = x^{1/2} = \\sqrt{x}',
                    explanation: '\\( \\frac{2}{4} = \\frac{1}{2} \\).'
                }
            ],
            finalAnswer: '\\( y = \\sqrt{x} \\)'
        }
    },
    // ── TYPE G: Mixed solving – rearrange then apply log/exp ────────────────
    {
        id: 'el2-027',
        topicRef: 'el2',
        topicTitle: 'Logarithms 27',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 7e^x = 35 \\). Give (i) an exact solution and (ii) a solution to 3 s.f.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'solve exponential', 'rearrange', 'exact and decimal'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide both sides by 7.',
                    workingLatex: 'e^x = 5',
                    explanation: 'Isolate the exponential term.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: 'x = \\ln 5 \\approx 1.61',
                    explanation: '\\( \\ln 5 \\approx 1.609 \\).'
                }
            ],
            finalAnswer: '(i) \\( x = \\ln 5 \\) \\quad (ii) \\( x \\approx 1.61 \\)'
        }
    },
    {
        id: 'el2-028',
        topicRef: 'el2',
        topicTitle: 'Logarithms 28',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 6\\ln x = 42 \\). Give (i) an exact solution and (ii) a solution to 3 s.f.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'solve ln equation', 'rearrange', 'exact and decimal'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide both sides by 6.',
                    workingLatex: '\\ln x = 7',
                    explanation: 'Isolate the \\( \\ln x \\) term.'
                },
                {
                    stepNumber: 2,
                    description: 'Raise \\( e \\) to both sides.',
                    workingLatex: 'x = e^7 \\approx 1097',
                    explanation: '\\( e^7 \\approx 1096.6 \\).'
                }
            ],
            finalAnswer: '(i) \\( x = e^7 \\) \\quad (ii) \\( x \\approx 1097 \\)'
        }
    },
    {
        id: 'el2-029',
        topicRef: 'el2',
        topicTitle: 'Logarithms 29',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln(5x) = 3 \\). Give (i) an exact solution and (ii) a solution to 3 s.f.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'ln(kx)', 'solve', 'exact and decimal'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Raise \\( e \\) to both sides.',
                    workingLatex: '5x = e^3',
                    explanation: '\\( e^{\\ln(5x)} = 5x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Divide by 5.',
                    workingLatex: 'x = \\frac{e^3}{5} \\approx 4.02',
                    explanation: '\\( e^3 \\approx 20.09 \\Rightarrow \\frac{20.09}{5} \\approx 4.02 \\).'
                }
            ],
            finalAnswer: '(i) \\( x = \\dfrac{e^3}{5} \\) \\quad (ii) \\( x \\approx 4.02 \\)'
        }
    },
    {
        id: 'el2-030',
        topicRef: 'el2',
        topicTitle: 'Logarithms 30',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2e^{x+1} = 14 \\). Give (i) an exact solution and (ii) a solution to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'solve e^(x+c) = k', 'rearrange', 'exact and decimal'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide both sides by 2.',
                    workingLatex: 'e^{x+1} = 7',
                    explanation: 'Isolate the exponential.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\ln \\).',
                    workingLatex: 'x + 1 = \\ln 7',
                    explanation: '\\( \\ln e^{x+1} = x+1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Subtract 1.',
                    workingLatex: 'x = \\ln 7 - 1 \\approx 0.946',
                    explanation: '\\( \\ln 7 \\approx 1.946 \\).'
                }
            ],
            finalAnswer: '(i) \\( x = \\ln 7 - 1 \\) \\quad (ii) \\( x \\approx 0.946 \\)'
        }
    },
    // ── TYPE H: Multi-part exam-style ───────────────────────────────────────
    {
        id: 'el2-031',
        topicRef: 'el2',
        topicTitle: 'Logarithms 31',
        difficulty: 'Foundation',
        questionText: '(a) Sketch the graph of \\( y = \\ln x \\), labelling the \\( x \\)-intercept and the asymptote. \n\n \n\n (b) On the same axes, sketch \\( y = \\ln(x - 2) \\). State its \\( x \\)-intercept and asymptote.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'graph of ln x', 'horizontal translation', 'sketch', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Key features of \\( y = \\ln x \\).',
                    workingLatex: 'x\\text{-intercept: } (1, 0); \\quad \\text{asymptote: } x = 0',
                    explanation: '\\( \\ln 1 = 0 \\); as \\( x \\to 0^+ \\), \\( \\ln x \\to -\\infty \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( y = \\ln(x-2) \\) is \\( y = \\ln x \\) shifted 2 units to the right.',
                    workingLatex: 'x\\text{-intercept: set } \\ln(x-2)=0 \\Rightarrow x-2=1 \\Rightarrow x=3 \\Rightarrow (3,0)',
                    explanation: 'The \\( x \\)-intercept shifts from 1 to 3.'
                },
                {
                    stepNumber: 3,
                    description: 'The asymptote also shifts right by 2.',
                    workingLatex: '\\text{Asymptote: } x = 2',
                    explanation: '\\( \\ln(x-2) \\) is undefined when \\( x \\leq 2 \\).'
                }
            ],
            finalAnswer: '(b) \\( x \\)-intercept \\( (3, 0) \\); asymptote \\( x = 2 \\).'
        }
    },
    {
        id: 'el2-032',
        topicRef: 'el2',
        topicTitle: 'Logarithms 32',
        difficulty: 'Foundation',
        questionText: 'The number of bacteria \\( N \\) in a culture after \\( t \\) hours satisfies \\( N = 200e^{0.3t} \\). \n\n (a) Find the initial number of bacteria. \n\n (b) Find the exact time when the number of bacteria reaches 2000. \n\n (c) Give the time to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'exponential model', 'solve for t', 'exact and decimal', 'real world'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Set \\( t = 0 \\).',
                    workingLatex: 'N(0) = 200e^0 = 200',
                    explanation: 'Initial count is 200 bacteria.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Set \\( N = 2000 \\) and solve for \\( t \\).',
                    workingLatex: '200e^{0.3t} = 2000 \\Rightarrow e^{0.3t} = 10',
                    explanation: 'Divide by 200.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '0.3t = \\ln 10 \\Rightarrow t = \\frac{\\ln 10}{0.3}',
                    explanation: 'Exact solution.'
                },
                {
                    stepNumber: 4,
                    description: 'Part (c): Evaluate to 3 s.f.',
                    workingLatex: 't = \\frac{\\ln 10}{0.3} \\approx 7.68 \\text{ hours}',
                    explanation: '\\( \\ln 10 \\approx 2.303 \\Rightarrow \\frac{2.303}{0.3} \\approx 7.68 \\).'
                }
            ],
            finalAnswer: '(a) 200. (b) \\( t = \\dfrac{\\ln 10}{0.3} \\). (c) \\( t \\approx 7.68 \\) hours.'
        }
    },
    {
        id: 'el2-033',
        topicRef: 'el2',
        topicTitle: 'Logarithms 33',
        difficulty: 'Foundation',
        questionText: 'A radioactive substance decays according to \\( M = 500e^{-0.04t} \\), where \\( M \\) is the mass in grams and \\( t \\) is the time in years. \n\n (a) State the initial mass. \n\n (b) Find the exact time for the mass to halve. \n\n (c) Give the half-life to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'exponential decay', 'half-life', 'solve for t', 'real world'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Initial mass at \\( t = 0 \\).',
                    workingLatex: 'M(0) = 500e^0 = 500 \\text{ g}',
                    explanation: 'The initial mass is 500 g.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Set \\( M = 250 \\) (half of 500).',
                    workingLatex: '500e^{-0.04t} = 250 \\Rightarrow e^{-0.04t} = 0.5',
                    explanation: 'Divide by 500.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '-0.04t = \\ln 0.5 = -\\ln 2 \\Rightarrow t = \\frac{\\ln 2}{0.04}',
                    explanation: 'Divide by \\( -0.04 \\). The half-life formula.'
                },
                {
                    stepNumber: 4,
                    description: 'Part (c): Evaluate.',
                    workingLatex: 't = \\frac{\\ln 2}{0.04} \\approx 17.3 \\text{ years}',
                    explanation: '\\( \\ln 2 \\approx 0.6931 \\Rightarrow \\frac{0.6931}{0.04} \\approx 17.3 \\).'
                }
            ],
            finalAnswer: '(a) 500 g. (b) \\( t = \\dfrac{\\ln 2}{0.04} \\). (c) \\( t \\approx 17.3 \\) years.'
        }
    },
    {
        id: 'el2-034',
        topicRef: 'el2',
        topicTitle: 'Logarithms 34',
        difficulty: 'Foundation',
        questionText: '(a) Solve \\( e^{2x} = 50 \\), giving an exact answer and a decimal answer to 3 s.f. \n\n \n\n (b) Solve \\( \\ln(x^2) = 6 \\), giving exact answers.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'solve e^(kx)', 'ln(x^2)', 'exact and decimal', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Apply \\( \\ln \\) to both sides.',
                    workingLatex: '2x = \\ln 50 \\Rightarrow x = \\frac{\\ln 50}{2}',
                    explanation: 'Exact solution.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate to 3 s.f.',
                    workingLatex: 'x = \\frac{\\ln 50}{2} \\approx \\frac{3.912}{2} \\approx 1.96',
                    explanation: '\\( \\ln 50 \\approx 3.912 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): \\( \\ln(x^2) = 6 \\Rightarrow x^2 = e^6 \\).',
                    workingLatex: 'x^2 = e^6',
                    explanation: 'Raise \\( e \\) to both sides.'
                },
                {
                    stepNumber: 4,
                    description: 'Take both square roots.',
                    workingLatex: 'x = \\pm e^3',
                    explanation: 'Both positive and negative values are valid since \\( \\ln(x^2) \\) is defined for \\( x \\neq 0 \\).'
                }
            ],
            finalAnswer: '(a) \\( x = \\dfrac{\\ln 50}{2} \\approx 1.96 \\). (b) \\( x = \\pm e^3 \\).'
        }
    },
    {
        id: 'el2-035',
        topicRef: 'el2',
        topicTitle: 'Logarithms 35',
        difficulty: 'Foundation',
        questionText: '(a) Given that \\( \\log_5 x = p \\) and \\( \\log_5 y = 4p \\), write \\( y \\) in terms of \\( x \\). \n\n \n\n (b) Given that \\( \\ln x = 2 \\) and \\( \\ln y = -4 \\), write \\( y \\) in terms of \\( x \\). \n\n \n\n (c) Solve \\( e^{3x-1} = 8 \\), giving an exact answer.',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithms', 'write y in terms of x', 'solve e^(ax+b)', 'multi-part', 'problem solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): From \\( \\log_5 x = p \\): \\( x = 5^p \\Rightarrow 5 = x^{1/p} \\).',
                    workingLatex: '5 = x^{1/p}',
                    explanation: 'Express the base in terms of \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'From \\( \\log_5 y = 4p \\): \\( y = 5^{4p} \\). Substitute \\( 5 = x^{1/p} \\).',
                    workingLatex: 'y = \\left(x^{1/p}\\right)^{4p} = x^4',
                    explanation: '\\( \\frac{4p}{p} = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): From \\( \\ln x = 2 \\): \\( x = e^2 \\Rightarrow e = x^{1/2} \\).',
                    workingLatex: 'e = x^{1/2} = \\sqrt{x}',
                    explanation: 'Raise both sides of \\( x = e^2 \\) to \\( \\frac{1}{2} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'From \\( \\ln y = -4 \\): \\( y = e^{-4} \\). Substitute.',
                    workingLatex: 'y = \\left(x^{1/2}\\right)^{-4} = x^{-2} = \\frac{1}{x^2}',
                    explanation: '\\( \\frac{-4}{2} = -2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Part (c): Apply \\( \\ln \\) to both sides.',
                    workingLatex: '3x - 1 = \\ln 8',
                    explanation: '\\( \\ln e^{3x-1} = 3x - 1 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '3x = \\ln 8 + 1 \\Rightarrow x = \\frac{\\ln 8 + 1}{3}',
                    explanation: 'Exact answer. Note: \\( \\ln 8 = 3\\ln 2 \\), so \\( x = \\frac{3\\ln 2 + 1}{3} = \\ln 2 + \\frac{1}{3} \\).'
                }
            ],
            finalAnswer: '(a) \\( y = x^4 \\). (b) \\( y = \\dfrac{1}{x^2} \\). (c) \\( x = \\dfrac{\\ln 8 + 1}{3} \\).'
        }
    },

    // ─── Q36–70: Additional Logarithms Questions ──────────────────────

    {
        id: 'el2-036', topicRef: 'el2', topicTitle: 'Logarithms 36', difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\log_2 32 \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the power', workingLatex: '2^5 = 32 \\implies \\log_2 32 = 5', explanation: '' }
        ], finalAnswer: '5' }
    },
    {
        id: 'el2-037', topicRef: 'el2', topicTitle: 'Logarithms 37', difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\log_3 81 \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the power', workingLatex: '3^4 = 81 \\implies \\log_3 81 = 4', explanation: '' }
        ], finalAnswer: '4' }
    },
    {
        id: 'el2-038', topicRef: 'el2', topicTitle: 'Logarithms 38', difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\log_{10} 0.001 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write as power of 10', workingLatex: '0.001 = 10^{-3} \\implies \\log_{10} 0.001 = -3', explanation: '' }
        ], finalAnswer: '-3' }
    },
    {
        id: 'el2-039', topicRef: 'el2', topicTitle: 'Logarithms 39', difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\log_5 \\frac{1}{25} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write as power', workingLatex: '\\frac{1}{25} = 5^{-2} \\implies \\log_5 \\frac{1}{25} = -2', explanation: '' }
        ], finalAnswer: '-2' }
    },
    {
        id: 'el2-040', topicRef: 'el2', topicTitle: 'Logarithms 40', difficulty: 'Foundation',
        questionText: 'Write \\( 3^4 = 81 \\) in logarithmic form.',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Convert', workingLatex: '\\log_3 81 = 4', explanation: '' }
        ], finalAnswer: 'log_3 81 = 4' }
    },
    {
        id: 'el2-041', topicRef: 'el2', topicTitle: 'Logarithms 41', difficulty: 'Foundation',
        questionText: 'Write \\( \\log_2 64 = 6 \\) in exponential form.',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Convert', workingLatex: '2^6 = 64', explanation: '' }
        ], finalAnswer: '2^6 = 64' }
    },
    {
        id: 'el2-042', topicRef: 'el2', topicTitle: 'Logarithms 42', difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\log_4 1 \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Any base to power 0 is 1', workingLatex: '4^0 = 1 \\implies \\log_4 1 = 0', explanation: '' }
        ], finalAnswer: '0' }
    },
    {
        id: 'el2-043', topicRef: 'el2', topicTitle: 'Logarithms 43', difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\log_7 7 \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'log_a a = 1', workingLatex: '7^1 = 7 \\implies \\log_7 7 = 1', explanation: '' }
        ], finalAnswer: '1' }
    },
    {
        id: 'el2-044', topicRef: 'el2', topicTitle: 'Logarithms 44', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_2 x = 5 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Convert to exponential', workingLatex: 'x = 2^5 = 32', explanation: '' }
        ], finalAnswer: 'x = 32' }
    },
    {
        id: 'el2-045', topicRef: 'el2', topicTitle: 'Logarithms 45', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_3 x = -2 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Convert to exponential', workingLatex: 'x = 3^{-2} = \\frac{1}{9}', explanation: '' }
        ], finalAnswer: 'x = 1/9' }
    },
    {
        id: 'el2-046', topicRef: 'el2', topicTitle: 'Logarithms 46', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_x 49 = 2 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Convert', workingLatex: 'x^2 = 49 \\implies x = 7', explanation: 'Positive base only.' }
        ], finalAnswer: 'x = 7' }
    },
    {
        id: 'el2-047', topicRef: 'el2', topicTitle: 'Logarithms 47', difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\ln e^4 \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'ln and e are inverses', workingLatex: '\\ln e^4 = 4', explanation: '' }
        ], finalAnswer: '4' }
    },
    {
        id: 'el2-048', topicRef: 'el2', topicTitle: 'Logarithms 48', difficulty: 'Foundation',
        questionText: 'Evaluate \\( e^{\\ln 3} \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'e and ln are inverses', workingLatex: 'e^{\\ln 3} = 3', explanation: '' }
        ], finalAnswer: '3' }
    },
    {
        id: 'el2-049', topicRef: 'el2', topicTitle: 'Logarithms 49', difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln x = 2 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Exponentiate', workingLatex: 'x = e^2 \\approx 7.39', explanation: '' }
        ], finalAnswer: 'x = e^2' }
    },
    {
        id: 'el2-050', topicRef: 'el2', topicTitle: 'Logarithms 50', difficulty: 'Foundation',
        questionText: 'Solve \\( 2^x = 10 \\). Give your answer to 3 s.f.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take logs', workingLatex: 'x \\ln 2 = \\ln 10 \\implies x = \\frac{\\ln 10}{\\ln 2} = 3.32', explanation: '' }
        ], finalAnswer: 'x = 3.32' }
    },
    {
        id: 'el2-051', topicRef: 'el2', topicTitle: 'Logarithms 51', difficulty: 'Foundation',
        questionText: 'Solve \\( 5^x = 20 \\). Give your answer to 3 s.f.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take logs', workingLatex: 'x = \\frac{\\ln 20}{\\ln 5} = \\frac{3.00}{1.609} = 1.86', explanation: '' }
        ], finalAnswer: 'x = 1.86' }
    },
    {
        id: 'el2-052', topicRef: 'el2', topicTitle: 'Logarithms 52', difficulty: 'Foundation',
        questionText: 'Solve \\( 3^{2x-1} = 15 \\). Give your answer to 3 s.f.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take logs', workingLatex: '(2x-1)\\ln 3 = \\ln 15', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: '2x - 1 = \\frac{\\ln 15}{\\ln 3} = 2.465 \\implies x = 1.73', explanation: '' }
        ], finalAnswer: 'x = 1.73' }
    },
    {
        id: 'el2-053', topicRef: 'el2', topicTitle: 'Logarithms 53', difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\log_8 2 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write 2 as power of 8', workingLatex: '8^{1/3} = 2 \\implies \\log_8 2 = \\frac{1}{3}', explanation: '' }
        ], finalAnswer: '1/3' }
    },
    {
        id: 'el2-054', topicRef: 'el2', topicTitle: 'Logarithms 54', difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\log_9 3 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write 3 as power of 9', workingLatex: '9^{1/2} = 3 \\implies \\log_9 3 = \\frac{1}{2}', explanation: '' }
        ], finalAnswer: '1/2' }
    },
    {
        id: 'el2-055', topicRef: 'el2', topicTitle: 'Logarithms 55', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\ln x \\). State the x-intercept and asymptote.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Key features', workingLatex: 'x\\text{-int: } (1, 0); \\quad \\text{asymptote: } x = 0', explanation: 'Defined for x > 0 only.' }
        ], finalAnswer: 'x-int (1,0); asymptote x = 0' }
    },
    {
        id: 'el2-056', topicRef: 'el2', topicTitle: 'Logarithms 56', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\log_{10} x \\) and \\( y = 10^x \\) on the same axes. What is the relationship?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Inverse functions', workingLatex: '\\text{Reflections of each other in } y = x', explanation: '' }
        ], finalAnswer: 'Inverse functions; reflections in y = x' }
    },
    {
        id: 'el2-057', topicRef: 'el2', topicTitle: 'Logarithms 57', difficulty: 'Foundation',
        questionText: 'Solve \\( e^{2x} = 8 \\). Give exact answer.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take ln', workingLatex: '2x = \\ln 8 = 3\\ln 2 \\implies x = \\frac{3\\ln 2}{2}', explanation: '' }
        ], finalAnswer: 'x = (3 ln 2)/2' }
    },
    {
        id: 'el2-058', topicRef: 'el2', topicTitle: 'Logarithms 58', difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln(2x + 1) = 3 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Exponentiate', workingLatex: '2x + 1 = e^3 \\implies x = \\frac{e^3 - 1}{2}', explanation: '' }
        ], finalAnswer: 'x = (e^3 - 1)/2' }
    },
    {
        id: 'el2-059', topicRef: 'el2', topicTitle: 'Logarithms 59', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_2(x+3) + \\log_2(x-1) = 3 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine logs', workingLatex: '\\log_2[(x+3)(x-1)] = 3', explanation: '' },
            { stepNumber: 2, description: 'Convert', workingLatex: '(x+3)(x-1) = 8 \\implies x^2 + 2x - 11 = 0', explanation: '' },
            { stepNumber: 3, description: 'Solve', workingLatex: 'x = \\frac{-2 + \\sqrt{48}}{2} = -1 + 2\\sqrt{3} \\approx 2.46', explanation: 'Reject negative root (need x > 1).' }
        ], finalAnswer: 'x = -1 + 2\\sqrt{3}' }
    },
    {
        id: 'el2-060', topicRef: 'el2', topicTitle: 'Logarithms 60', difficulty: 'Foundation',
        questionText: 'Simplify \\( \\log_a a^5 \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Power rule', workingLatex: '\\log_a a^5 = 5', explanation: '' }
        ], finalAnswer: '5' }
    },
    {
        id: 'el2-061', topicRef: 'el2', topicTitle: 'Logarithms 61', difficulty: 'Foundation',
        questionText: 'If \\( \\log_3 x = 2 \\) and \\( \\log_3 y = 4 \\), find \\( \\log_3(xy) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Addition law', workingLatex: '\\log_3(xy) = \\log_3 x + \\log_3 y = 2 + 4 = 6', explanation: '' }
        ], finalAnswer: '6' }
    },
    {
        id: 'el2-062', topicRef: 'el2', topicTitle: 'Logarithms 62', difficulty: 'Foundation',
        questionText: 'Solve \\( 10^{x-1} = 500 \\). Give answer to 3 s.f.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log10', workingLatex: 'x - 1 = \\log_{10} 500 = 2.699 \\implies x = 3.70', explanation: '' }
        ], finalAnswer: 'x = 3.70' }
    },
    {
        id: 'el2-063', topicRef: 'el2', topicTitle: 'Logarithms 63', difficulty: 'Foundation',
        questionText: 'Express \\( 2\\log a + 3\\log b \\) as a single logarithm.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Power then product', workingLatex: '\\log a^2 + \\log b^3 = \\log(a^2 b^3)', explanation: '' }
        ], finalAnswer: 'log(a^2 b^3)' }
    },
    {
        id: 'el2-064', topicRef: 'el2', topicTitle: 'Logarithms 64', difficulty: 'Foundation',
        questionText: 'Express \\( \\log 12 - \\log 4 + \\log 3 \\) as a single logarithm and evaluate.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine', workingLatex: '\\log\\frac{12 \\times 3}{4} = \\log 9', explanation: '' }
        ], finalAnswer: 'log 9' }
    },
    {
        id: 'el2-065', topicRef: 'el2', topicTitle: 'Logarithms 65', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_5 x + \\log_5 4 = 2 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine', workingLatex: '\\log_5(4x) = 2 \\implies 4x = 25 \\implies x = \\frac{25}{4}', explanation: '' }
        ], finalAnswer: 'x = 25/4' }
    },
    {
        id: 'el2-066', topicRef: 'el2', topicTitle: 'Logarithms 66', difficulty: 'Foundation',
        questionText: 'Given \\( \\log_2 3 = 1.585 \\), find \\( \\log_2 12 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write 12 = 4 x 3', workingLatex: '\\log_2 12 = \\log_2 4 + \\log_2 3 = 2 + 1.585 = 3.585', explanation: '' }
        ], finalAnswer: '3.585' }
    },
    {
        id: 'el2-067', topicRef: 'el2', topicTitle: 'Logarithms 67', difficulty: 'Foundation',
        questionText: 'Solve \\( e^x + e^{-x} = 3 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let u = e^x', workingLatex: 'u + \\frac{1}{u} = 3 \\implies u^2 - 3u + 1 = 0', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'u = \\frac{3 \\pm \\sqrt{5}}{2}', explanation: '' },
            { stepNumber: 3, description: 'Take ln', workingLatex: 'x = \\ln\\left(\\frac{3 + \\sqrt{5}}{2}\\right) \\text{ or } x = \\ln\\left(\\frac{3 - \\sqrt{5}}{2}\\right)', explanation: 'Both positive so both valid.' }
        ], finalAnswer: 'x = ln((3 + sqrt5)/2) or x = ln((3 - sqrt5)/2)' }
    },
    {
        id: 'el2-068', topicRef: 'el2', topicTitle: 'Logarithms 68', difficulty: 'Foundation',
        questionText: 'The Richter scale: an earthquake of magnitude \\( M \\) has energy \\( E = 10^{1.5M+4.8} \\) joules. Find M when \\( E = 10^{12} \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set equal', workingLatex: '1.5M + 4.8 = 12 \\implies 1.5M = 7.2 \\implies M = 4.8', explanation: '' }
        ], finalAnswer: 'M = 4.8' }
    },
    {
        id: 'el2-069', topicRef: 'el2', topicTitle: 'Logarithms 69', difficulty: 'Foundation',
        questionText: 'Use the change of base formula to evaluate \\( \\log_3 20 \\) to 3 s.f.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Change of base', workingLatex: '\\log_3 20 = \\frac{\\ln 20}{\\ln 3} = \\frac{3.00}{1.099} = 2.73', explanation: '' }
        ], finalAnswer: '2.73' }
    },
    {
        id: 'el2-070', topicRef: 'el2', topicTitle: 'Logarithms 70', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_2 x + \\log_4 x = 6 \\). [Hint: use change of base.]',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Change base of log_4 x', workingLatex: '\\log_4 x = \\frac{\\log_2 x}{\\log_2 4} = \\frac{\\log_2 x}{2}', explanation: '' },
            { stepNumber: 2, description: 'Substitute', workingLatex: '\\log_2 x + \\frac{\\log_2 x}{2} = 6 \\implies \\frac{3}{2}\\log_2 x = 6', explanation: '' },
            { stepNumber: 3, description: 'Solve', workingLatex: '\\log_2 x = 4 \\implies x = 16', explanation: '' }
        ], finalAnswer: 'x = 16' }
    },
];
