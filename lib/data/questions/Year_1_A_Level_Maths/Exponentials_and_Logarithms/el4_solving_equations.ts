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
                    explanation: 'Logarithm is the inverse operation of an exponential, so taking logs is how we get the unknown \\( x \\) out of the exponent. Whatever you do to one side you must do to the other to keep the equation balanced.'
                },
                {
                    stepNumber: 2,
                    description: 'Use the power law to bring \\( x \\) down.',
                    workingLatex: 'x \\log 5 = \\log 40',
                    explanation: 'The power law \\( \\log(a^n) = n\\log a \\) is the whole reason we took logs — it converts the exponent \\( x \\) into a coefficient, turning the equation into a linear one in \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by \\( \\log 5 \\) and evaluate.',
                    workingLatex: 'x = \\frac{\\log 40}{\\log 5} \\approx \\frac{1.6021}{0.6990} \\approx 2.29',
                    explanation: 'Now \\( x \\) is a simple multiple of \\( \\log 5 \\), so divide to isolate it. Sanity check: \\( 5^2 = 25 \\) and \\( 5^3 = 125 \\), so \\( x \\approx 2.29 \\) sits sensibly between.'
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
                    explanation: 'Logs are the inverse of exponentials, so applying \\( \\log \\) is what lets us extract the unknown from the exponent. The equation stays balanced because the same operation is done to both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law.',
                    workingLatex: 'x\\log 3 = \\log 70',
                    explanation: 'The power law \\( \\log(a^n) = n\\log a \\) drops the exponent down to become a coefficient. The equation is now linear in \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\frac{\\log 70}{\\log 3} \\approx \\frac{1.8451}{0.4771} \\approx 3.87',
                    explanation: 'Divide both sides by \\( \\log 3 \\) to isolate \\( x \\). Sanity check: \\( 3^3 = 27 \\) and \\( 3^4 = 81 \\), so \\( x \\approx 3.87 \\) is in the right ballpark.'
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
                    explanation: 'Logs reverse exponentials, which is what we need to free the unknown \\( x \\) from the exponent. The method works just as well when the base is less than 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law.',
                    workingLatex: 'x\\log(0.6) = \\log(0.1)',
                    explanation: 'The power law brings \\( x \\) down to a coefficient. Note that \\( \\log 0.1 = -1 \\) since \\( 10^{-1} = 0.1 \\), and \\( \\log 0.6 \\) is also negative because \\( 0.6 < 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\frac{\\log(0.1)}{\\log(0.6)} = \\frac{-1}{-0.2218} \\approx 4.51',
                    explanation: 'Both logs are negative, and a negative divided by a negative is positive — that matches our expectation, since \\( 0.6 \\) raised to a positive power gets smaller. Always sign-check at the end.'
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
                    explanation: 'Applying \\( \\log \\) is the inverse of an exponential — it lets us pull the whole exponent \\( 3x \\) down where we can manipulate it algebraically.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law.',
                    workingLatex: '3x\\log 2 = 2',
                    explanation: 'The power law brings the entire exponent \\( 3x \\) down as a factor. The right side simplifies neatly because \\( \\log_{10} 100 = 2 \\) exactly.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\frac{2}{3\\log 2} = \\frac{2}{3 \\times 0.3010} \\approx \\frac{2}{0.9031} \\approx 2.21',
                    explanation: 'Divide both sides by \\( 3\\log 2 \\) to isolate \\( x \\). Check: \\( 2^{3 \\times 2.21} = 2^{6.63} \\approx 99 \\), close to 100, so the answer is reasonable.'
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
                    explanation: 'Taking logs is the inverse of an exponential — it lets us pull the exponent down so \\( x \\) is no longer locked above the base.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law.',
                    workingLatex: '(x-1)\\log 4 = \\log 30',
                    explanation: 'The power law \\( \\log(a^n) = n\\log a \\) brings the whole exponent down — including the \\( -1 \\). Keep the bracket around \\( (x-1) \\) so the subtraction isn\'t lost.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x - 1 \\), then for \\( x \\).',
                    workingLatex: 'x - 1 = \\frac{\\log 30}{\\log 4} \\approx \\frac{1.4771}{0.6021} \\approx 2.453 \\Rightarrow x \\approx 3.45',
                    explanation: 'Divide by \\( \\log 4 \\) to get \\( x-1 \\), then add 1. Check: \\( 4^{2.45} \\approx 30 \\) ✓.'
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
                    explanation: 'Taking logs is the inverse of an exponential, which is what we need in order to extract the unknown \\( x \\) from the exponent.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law.',
                    workingLatex: '(2x+1)\\log 6 = \\log 200',
                    explanation: 'The power law brings the entire exponent \\( (2x+1) \\) down as a factor. Keep it bracketed so neither term is dropped.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by \\( \\log 6 \\).',
                    workingLatex: '2x + 1 = \\frac{\\log 200}{\\log 6} \\approx \\frac{2.3010}{0.7782} \\approx 2.957',
                    explanation: 'Isolate the linear expression in \\( x \\) by dividing both sides by \\( \\log 6 \\), then evaluate the fraction.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '2x = 1.957 \\Rightarrow x \\approx 0.979',
                    explanation: 'Subtract 1, then divide by 2. Check: \\( 6^{2(0.979)+1} = 6^{2.958} \\approx 200 \\) ✓.'
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
                    explanation: 'When \\( x \\) appears in two different exponents, taking logs is the inverse step that brings both down to the same level so we can solve a linear equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law to each side.',
                    workingLatex: 'x\\log 5 = (x+3)\\log 2',
                    explanation: 'The power law converts each exponent into a coefficient. Bracket \\( (x+3) \\) on the right so the \\( +3 \\) isn\'t lost when expanding.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and collect \\( x \\) terms on one side.',
                    workingLatex: 'x\\log 5 = x\\log 2 + 3\\log 2 \\Rightarrow x\\log 5 - x\\log 2 = 3\\log 2',
                    explanation: 'Treat \\( \\log 5 \\) and \\( \\log 2 \\) as constants. Move all \\( x \\)-terms to one side so we can factorise.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise and solve.',
                    workingLatex: 'x(\\log 5 - \\log 2) = 3\\log 2 \\Rightarrow x = \\frac{3\\log 2}{\\log 5 - \\log 2} = \\frac{3\\log 2}{\\log 2.5} \\approx \\frac{0.9031}{0.3979} \\approx 2.27',
                    explanation: 'Factor out \\( x \\) then divide. Using the quotient law \\( \\log 5 - \\log 2 = \\log(5/2) = \\log 2.5 \\) makes the arithmetic cleaner because we evaluate one log instead of two.'
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
                    explanation: 'With \\( x \\) appearing inside two different exponents, taking logs is the inverse step needed to bring both \\( x \\)-exponents down to coefficient level.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the left side.',
                    workingLatex: 'x\\log 3 + 2\\log 3 = x\\log 7',
                    explanation: 'Distribute \\( \\log 3 \\) over \\( (x+2) \\). Now both sides are linear in \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Collect \\( x \\) terms.',
                    workingLatex: '2\\log 3 = x\\log 7 - x\\log 3 = x(\\log 7 - \\log 3)',
                    explanation: 'Move \\( x\\log 3 \\) to the right so the \\( x \\)-terms are on one side and the constant on the other, then factor out \\( x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\frac{2\\log 3}{\\log 7 - \\log 3} = \\frac{2\\log 3}{\\log(7/3)} \\approx \\frac{0.9542}{0.3679} \\approx 2.59',
                    explanation: 'Divide to isolate \\( x \\). Combining \\( \\log 7 - \\log 3 = \\log(7/3) \\) via the quotient law is optional but makes the denominator a single log for cleaner calculation.'
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
                    explanation: 'Rewriting in index form is the inverse move of taking a log — it undoes the logarithm so we can work with \\( 4x \\) directly. The base of the log becomes the base of the power, and the right-hand side becomes the exponent.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate \\( 3^4 \\).',
                    workingLatex: '81 = 4x',
                    explanation: '\\( 3^4 = 81 \\). Evaluating the constant first turns the equation into a simple linear one.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\frac{81}{4} = 20.25',
                    explanation: 'Divide both sides by 4. Check: \\( \\log_3(4 \\times 20.25) = \\log_3 81 = 4 \\) ✓.'
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
                    explanation: 'Index form is the inverse of log form: \\( \\log_a b = c \\Leftrightarrow a^c = b \\). This removes the logarithm so we can solve for \\( x \\) directly.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate and solve.',
                    workingLatex: '125 = x + 2 \\Rightarrow x = 123',
                    explanation: '\\( 5^3 = 125 \\); subtract 2 to isolate \\( x \\). Validity check: \\( x+2 = 125 > 0 \\), so the log argument is positive ✓.'
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
                    explanation: 'Converting to index form removes the logarithm — it is the inverse of taking a log. The base of the log becomes the base of the power.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate \\( 4^{2.5} = 4^{5/2} \\).',
                    workingLatex: '4^{5/2} = (\\sqrt{4})^5 = 2^5 = 32',
                    explanation: 'A fractional power \\( \\tfrac{5}{2} \\) means take the square root (denominator) and raise to the 5th (numerator). Doing the root first keeps the numbers small.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '32 = 3 - x \\Rightarrow x = 3 - 32 = -29',
                    explanation: 'Rearrange to isolate \\( x \\). Validity check: \\( 3 - (-29) = 32 > 0 \\), so the log argument is positive ✓. Don\'t reject \\( x = -29 \\) just for being negative — only the log\'s argument needs to be positive.'
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
                    explanation: 'Always isolate the log term before exponentiating — otherwise the coefficient gets in the way of the cancellation.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( 10^{\\square} \\) to both sides (the inverse of \\( \\log_{10} \\)).',
                    workingLatex: '10^{\\log_{10}(x)} = 10^{0.6}',
                    explanation: 'Raising 10 to the power of each side undoes the \\( \\log_{10} \\), because exponential and log with the same base are inverse functions.'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate.',
                    workingLatex: 'x = 10^{0.6} \\approx 3.98',
                    explanation: 'The left side simplifies to \\( x \\) by cancellation. Check: \\( 5\\log_{10}(3.98) \\approx 5 \\times 0.5999 \\approx 3 \\) ✓.'
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
                    explanation: 'Always isolate the exponential before applying \\( \\ln \\) — otherwise the constant blocks the clean cancellation.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: 'x = \\ln 15',
                    explanation: '\\( \\ln \\) is the inverse of \\( e^{\\square} \\), so \\( \\ln(e^x) = x \\) by direct cancellation. This is how we free \\( x \\) from the exponent.'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate to 3 s.f.',
                    workingLatex: 'x = \\ln 15 \\approx 2.71',
                    explanation: 'Use a calculator for the decimal. Check: \\( 4e^{2.71} \\approx 4 \\times 15 = 60 \\) ✓.'
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
                    explanation: 'Always isolate the exponential term before applying \\( \\ln \\). If you took logs while the \\( +3 \\) was still there, \\( \\ln \\) of a sum would not simplify.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '0.5x = \\ln 7',
                    explanation: '\\( \\ln \\) is the inverse of \\( e^{\\square} \\), so \\( \\ln(e^{0.5x}) = 0.5x \\) by cancellation. The whole exponent comes through unchanged.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = 2\\ln 7',
                    explanation: 'Multiply both sides by 2 to undo the \\( 0.5 \\) coefficient. Leaving the answer as \\( 2\\ln 7 \\) keeps it exact.'
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
                    explanation: 'Move the exponential to one side and divide by 2 to leave it bare. The exponential must be alone before we apply \\( \\ln \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: 'x - 1 = \\ln 4',
                    explanation: '\\( \\ln \\) is the inverse of \\( e^{\\square} \\), so \\( \\ln(e^{x-1}) = x-1 \\). The whole exponent comes down as is.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = 1 + \\ln 4',
                    explanation: 'Add 1 to both sides. Could also be written as \\( 1 + 2\\ln 2 \\) using the power law, but \\( 1 + \\ln 4 \\) is simpler.'
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
                    explanation: 'Exponentiating with base \\( e \\) is the inverse of \\( \\ln \\), so it cancels the logarithm and frees the argument \\( 3x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify and solve.',
                    workingLatex: '3x = e^5 \\Rightarrow x = \\frac{e^5}{3}',
                    explanation: '\\( e^{\\ln(3x)} = 3x \\) by inverse cancellation, then divide by 3. Validity check: \\( 3x = e^5 > 0 \\), so the log argument is valid ✓.'
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
                    explanation: 'Isolate the logarithm first — the coefficient 4 must be removed before exponentiating so the inverse cancellation works cleanly.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( e^{\\square} \\) to both sides.',
                    workingLatex: '2x - 1 = e^3',
                    explanation: '\\( e^{\\square} \\) is the inverse of \\( \\ln \\), so \\( e^{\\ln(2x-1)} = 2x-1 \\). This frees the argument from the log.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '2x = e^3 + 1 \\Rightarrow x = \\frac{e^3 + 1}{2}',
                    explanation: 'Add 1, then divide by 2. Validity check: \\( e^3 + 1 > 0 \\) so \\( 2x - 1 > 0 \\), meaning the log argument is positive ✓.'
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
                    explanation: '\\( \\ln \\) is the inverse of \\( e^{\\square} \\), so it brings the exponent \\( 3x \\) down directly. This is exactly how we isolate the unknown.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( \\ln 27 \\) in terms of \\( \\ln 3 \\).',
                    workingLatex: '\\ln 27 = \\ln(3^3) = 3\\ln 3',
                    explanation: 'Spotting that \\( 27 = 3^3 \\) lets the power law convert \\( \\ln 27 \\) into a multiple of \\( \\ln 3 \\), which matches the form the question asks for.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '3x = 3\\ln 3 \\Rightarrow x = \\ln 3',
                    explanation: 'Divide both sides by 3. The factor of 3 cancels neatly, giving a clean exact answer.'
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
                    explanation: '\\( \\ln \\) and \\( e^{\\square} \\) are inverse operations, so \\( \\ln(e^{2x-1}) = 2x - 1 \\) by cancellation — the whole exponent comes down.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( \\ln 9 \\) in terms of \\( \\ln 3 \\).',
                    workingLatex: '\\ln 9 = \\ln(3^2) = 2\\ln 3',
                    explanation: 'Since \\( 9 = 3^2 \\), the power law converts \\( \\ln 9 \\) into \\( 2\\ln 3 \\), matching the form requested by the question.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '2x - 1 = 2\\ln 3 \\Rightarrow x = \\frac{1 + 2\\ln 3}{2}',
                    explanation: 'Add 1 to both sides, then divide by 2. Leaving the answer as a single fraction keeps it tidy and exact.'
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
                    explanation: 'The product law \\( \\ln a + \\ln b = \\ln(ab) \\) merges two log terms into one, so we have a single logarithm to invert.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( e^{\\square} \\) to both sides.',
                    workingLatex: '5x = e^7',
                    explanation: 'Exponentiating with base \\( e \\) is the inverse of \\( \\ln \\), so \\( e^{\\ln(5x)} = 5x \\) by cancellation.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\frac{e^7}{5}',
                    explanation: 'Divide both sides by 5. Validity check: \\( 5x = e^7 > 0 \\) so \\( x > 0 \\), making the original \\( \\ln x \\) valid ✓.'
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
                    explanation: 'The product law \\( \\ln a + \\ln b = \\ln(ab) \\) lets us merge into one log: \\( 4x \\cdot 3x = 12x^2 \\). Now a single \\( e^{\\square} \\) will free the argument.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( e^{\\square} \\) to both sides.',
                    workingLatex: '12x^2 = e^{10}',
                    explanation: 'Exponentiating is the inverse of \\( \\ln \\), so the log on the left cancels to leave its argument \\( 12x^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\), taking the positive root only.',
                    workingLatex: 'x^2 = \\frac{e^{10}}{12} \\Rightarrow x = \\sqrt{\\frac{e^{10}}{12}} = \\frac{e^5}{\\sqrt{12}} = \\frac{e^5}{2\\sqrt{3}}',
                    explanation: 'Although squaring loses sign information, the original \\( \\ln(4x) \\) and \\( \\ln(3x) \\) require \\( x > 0 \\), so we reject the negative root. Note \\( \\sqrt{e^{10}} = e^5 \\) and \\( \\sqrt{12} = 2\\sqrt{3} \\).'
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
                    explanation: 'The quotient law \\( \\ln a - \\ln b = \\ln(a/b) \\) merges two log terms into one, ready to invert in a single step.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( e^{\\square} \\) to both sides.',
                    workingLatex: '\\frac{x-3}{2x} = e^0 = 1',
                    explanation: 'Exponentiating undoes \\( \\ln \\). The right side becomes \\( e^0 = 1 \\), giving a simple rational equation.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve the resulting equation.',
                    workingLatex: 'x - 3 = 2x \\Rightarrow -3 = x',
                    explanation: 'Multiply both sides by \\( 2x \\) to clear the fraction, then rearrange. This gives a candidate value for \\( x \\) which we must check.'
                },
                {
                    stepNumber: 4,
                    description: 'Check validity: \\( x = -3 \\) gives \\( \\ln(-3-3) \\) — argument is negative. Reject.',
                    workingLatex: '\\text{No valid solution}',
                    explanation: 'Both \\( x-3 \\) and \\( 2x \\) must be positive for the original logs to be defined. \\( x = -3 \\) gives \\( x - 3 = -6 \\) and \\( 2x = -6 \\), both negative — so this candidate is rejected and the equation has no solution.'
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
                    explanation: 'Treat \\( \\ln x \\) as a single quantity and add the coefficients: \\( 3 + 5 = 8 \\). This is just like collecting \\( 3y + 5y = 8y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Divide both sides by 8.',
                    workingLatex: '\\ln x = \\frac{1}{4}',
                    explanation: 'Always isolate the logarithm before exponentiating — the coefficient blocks the cancellation otherwise.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( e^{\\square} \\) to both sides.',
                    workingLatex: 'x = e^{1/4}',
                    explanation: '\\( e^{\\square} \\) is the inverse of \\( \\ln \\), so \\( e^{\\ln x} = x \\) by cancellation. The result is positive, satisfying the domain of \\( \\ln x \\) ✓.'
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
                    description: 'Note that \\( e^{2x} = (e^x)^2 \\) and substitute \\( y = e^x \\).',
                    workingLatex: 'y^2 - 5y + 6 = 0',
                    explanation: 'The substitution \\( y = e^x \\) hides the exponential and reveals a familiar quadratic. We use this because \\( e^{2x} = (e^x)^2 = y^2 \\), so the equation becomes algebraic in \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: '(y-2)(y-3) = 0 \\Rightarrow y = 2 \\text{ or } y = 3',
                    explanation: 'We need two numbers that multiply to \\( +6 \\) and add to \\( -5 \\): namely \\( -2 \\) and \\( -3 \\), giving the factors \\( (y-2)(y-3) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Replace \\( y \\) with \\( e^x \\) and apply \\( \\ln \\).',
                    workingLatex: 'e^x = 2 \\Rightarrow x = \\ln 2 \\qquad e^x = 3 \\Rightarrow x = \\ln 3',
                    explanation: 'Both \\( y = 2 \\) and \\( y = 3 \\) are positive, so both are valid (since \\( e^x > 0 \\) for all real \\( x \\), we must always reject any non-positive \\( y \\)). Taking \\( \\ln \\) of both equations gives the two solutions.'
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
                    explanation: 'The substitution \\( y = e^x \\) converts the exponential equation into a standard quadratic. Always remember the implicit restriction \\( y > 0 \\), since \\( e^x \\) is always positive.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: '(y-3)(y-4) = 0 \\Rightarrow y = 3 \\text{ or } y = 4',
                    explanation: 'We need two numbers that multiply to \\( +12 \\) and add to \\( -7 \\): namely \\( -3 \\) and \\( -4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Undo the substitution.',
                    workingLatex: 'e^x = 3 \\Rightarrow x = \\ln 3 \\qquad e^x = 4 \\Rightarrow x = \\ln 4',
                    explanation: 'Both roots are positive, so both are valid. Apply \\( \\ln \\) (the inverse of \\( e^{\\square} \\)) to each to find \\( x \\).'
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
                    explanation: 'Since \\( e^{2x} = (e^x)^2 \\), the substitution \\( y = e^x \\) turns the exponential equation into a quadratic in \\( y \\). Remember \\( y > 0 \\) — any non-positive root must be rejected.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: '(2y - 1)(y - 3) = 0 \\Rightarrow y = \\frac{1}{2} \\text{ or } y = 3',
                    explanation: 'Check by expanding: \\( (2y-1)(y-3) = 2y^2 - 6y - y + 3 = 2y^2 - 7y + 3 \\) ✓.'
                },
                {
                    stepNumber: 3,
                    description: 'Undo the substitution. Both values of \\( y \\) are positive, so both are valid.',
                    workingLatex: 'e^x = \\frac{1}{2} \\Rightarrow x = \\ln\\frac{1}{2} = -\\ln 2 \\qquad e^x = 3 \\Rightarrow x = \\ln 3',
                    explanation: 'Both roots are positive so both survive the \\( y > 0 \\) check. Using the power law, \\( \\ln\\tfrac{1}{2} = \\ln(2^{-1}) = -\\ln 2 \\), giving a cleaner exact form.'
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
                    explanation: 'The substitution \\( y = e^x \\) (with \\( y > 0 \\)) turns the exponential equation into a quadratic. We will need to check that any roots satisfy \\( y > 0 \\) before undoing the substitution.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: '(3y + 1)(y + 3) = 0 \\Rightarrow y = -\\frac{1}{3} \\text{ or } y = -3',
                    explanation: 'Expand to check: \\( (3y+1)(y+3) = 3y^2 + 9y + y + 3 = 3y^2 + 10y + 3 \\) ✓.'
                },
                {
                    stepNumber: 3,
                    description: 'Check validity of each solution.',
                    workingLatex: 'e^x = -\\frac{1}{3} \\text{ — impossible} \\qquad e^x = -3 \\text{ — impossible}',
                    explanation: 'Both roots are negative, but \\( e^x > 0 \\) for every real \\( x \\), so both must be rejected. This is exactly why the \\( y > 0 \\) restriction matters — the original equation has no real solutions.'
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
                    explanation: 'Rewriting 9 as \\( 3^2 \\) gives the same base on both sides. When two equal exponentials share a base, their exponents must match — no need to take logs.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( x = 2y \\) into the second equation.',
                    workingLatex: '2(2y) + y = 5 \\Rightarrow 5y = 5 \\Rightarrow y = 1',
                    explanation: 'Substitution converts the system into a single linear equation in \\( y \\), which solves cleanly.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( x \\).',
                    workingLatex: 'x = 2y = 2',
                    explanation: 'Back-substitute \\( y = 1 \\) into \\( x = 2y \\). Check: \\( 3^2 = 9 = 9^1 \\) ✓ and \\( 2(2) + 1 = 5 \\) ✓.'
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
                    explanation: 'Move \\( \\log_2 y \\) to the left, then apply \\( \\log a - \\log b = \\log(a/b) \\) to combine into a single logarithm — easier to invert in one step.'
                },
                {
                    stepNumber: 2,
                    description: 'Convert to index form.',
                    workingLatex: '\\frac{x}{y} = 2^1 = 2 \\Rightarrow x = 2y',
                    explanation: 'Index form is the inverse of log form, so it removes the logarithm and gives a simple algebraic relationship between \\( x \\) and \\( y \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( x = 2y \\) into the second equation.',
                    workingLatex: '2y = 3y - 4 \\Rightarrow y = 4',
                    explanation: 'Now we have a single linear equation in \\( y \\), which gives \\( y = 4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( x \\).',
                    workingLatex: 'x = 2(4) = 8',
                    explanation: 'Back-substitute \\( y = 4 \\). Both \\( x = 8 > 0 \\) and \\( y = 4 > 0 \\), so the log arguments are valid ✓.'
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
                    explanation: 'At the initial time \\( t = 0 \\) the exponential factor is \\( e^0 = 1 \\), so \\( P \\) equals the coefficient in front. The initial population is 120 rabbits.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( P = 300 \\) and solve for \\( t \\).',
                    workingLatex: '120e^{0.04t} = 300 \\Rightarrow e^{0.04t} = \\frac{300}{120} = 2.5',
                    explanation: 'Isolate the exponential by dividing through by 120 — the coefficient must be removed before applying \\( \\ln \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '0.04t = \\ln(2.5)',
                    explanation: '\\( \\ln \\) is the inverse of \\( e^{\\square} \\), so it brings the exponent \\( 0.04t \\) down. This is exactly the step that releases \\( t \\) from the exponent.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( t \\).',
                    workingLatex: 't = \\frac{\\ln(2.5)}{0.04} \\approx \\frac{0.9163}{0.04} \\approx 22.9',
                    explanation: 'Divide by the coefficient \\( 0.04 \\) to isolate \\( t \\). Sanity check: a slow growth rate of 4% per year takes a long time to roughly triple the population, so ~23 years is reasonable.'
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
                    explanation: 'At \\( t = 0 \\) the exponential is \\( e^0 = 1 \\), so the temperature equals \\( 80 + 20 = 100^\\circ\\!\\text{C} \\). The \\( +20 \\) acts as the ambient (room) temperature the drink decays towards.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( T = 40 \\).',
                    workingLatex: '80e^{-0.05t} + 20 = 40 \\Rightarrow 80e^{-0.05t} = 20 \\Rightarrow e^{-0.05t} = 0.25',
                    explanation: 'Subtract 20 then divide by 80 to isolate the exponential. Both constants must be removed before applying \\( \\ln \\) so the inverse cancellation works cleanly.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '-0.05t = \\ln(0.25) = \\ln\\!\\left(\\frac{1}{4}\\right) = -\\ln 4',
                    explanation: '\\( \\ln \\) is the inverse of \\( e^{\\square} \\), so the exponent comes down. Rewriting \\( \\ln(0.25) = \\ln(4^{-1}) = -\\ln 4 \\) via the power law gives a tidier exact form.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( t \\).',
                    workingLatex: 't = \\frac{\\ln 4}{0.05} \\approx \\frac{1.3863}{0.05} \\approx 27.7',
                    explanation: 'The two negatives on the left cancel when dividing, leaving a positive value for \\( t \\) — physically sensible since cooling takes a positive amount of time.'
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
                    explanation: 'Move all terms to one side so we have the standard form \\( = 0 \\). This sets up the quadratic-in-\\( e^x \\) structure.'
                },
                {
                    stepNumber: 2,
                    description: 'Let \\( y = e^x \\) and factorise \\( y^2 - 4y - 5 \\).',
                    workingLatex: '(y-5)(y+1) = 0',
                    explanation: 'Two numbers multiplying to \\( -5 \\) and adding to \\( -4 \\) are \\( -5 \\) and \\( +1 \\). Replacing \\( y \\) by \\( e^x \\) gives \\( (e^x - 5)(e^x + 1) = 0 \\) as required ✓.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Solve each factor.',
                    workingLatex: 'e^x = 5 \\Rightarrow x = \\ln 5 \\qquad e^x = -1 \\Rightarrow \\text{no real solution}',
                    explanation: 'Since \\( e^x > 0 \\) for every real \\( x \\), the root \\( e^x = -1 \\) must be rejected. Only the positive root \\( e^x = 5 \\) gives a valid solution \\( x = \\ln 5 \\).'
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
        questionText: '(a) Show that \\( \\log_3(x+6) - \\log_3 x = 2 \\) leads to \\( 9x = x + 6 \\).\n\n (b) Hence solve \\( \\log_3(x+6) - \\log_3 x = 2 \\), giving your answer as an exact value.',
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
                    explanation: 'The quotient law \\( \\log a - \\log b = \\log(a/b) \\) merges the two log terms into a single logarithm, which we can then invert in one step.'
                },
                {
                    stepNumber: 2,
                    description: 'Convert to index form.',
                    workingLatex: '\\frac{x+6}{x} = 3^2 = 9',
                    explanation: 'Index form is the inverse of log form, so this removes the logarithm. \\( \\log_a b = c \\Leftrightarrow a^c = b \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply both sides by \\( x \\).',
                    workingLatex: 'x + 6 = 9x',
                    explanation: 'Clear the fraction to get the required form ✓.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Solve for \\( x \\).',
                    workingLatex: '6 = 8x \\Rightarrow x = \\frac{6}{8} = \\frac{3}{4}',
                    explanation: 'Subtract \\( x \\) from both sides, then divide by 8 to isolate \\( x \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check validity: \\( x = \\frac{3}{4} > 0 \\) \\checkmark',
                    workingLatex: '\\log_3\\!\\left(\\frac{3}{4} + 6\\right) - \\log_3\\!\\left(\\frac{3}{4}\\right) = \\log_3\\!\\left(\\frac{27}{4} \\times \\frac{4}{3}\\right) = \\log_3 9 = 2 \\checkmark',
                    explanation: 'Both log arguments \\( x \\) and \\( x+6 \\) are positive at \\( x = \\tfrac{3}{4} \\), and substituting back recovers the original equation — so the solution is valid.'
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
                    explanation: 'At \\( t = 0 \\) the decay factor is \\( 0.85^0 = 1 \\), so the initial value equals the coefficient: £18 000.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( V < 6000 \\) and solve.',
                    workingLatex: '18000 \\times 0.85^t < 6000 \\Rightarrow 0.85^t < \\frac{1}{3}',
                    explanation: 'Divide both sides by 18 000 (a positive number, so the inequality direction is preserved) to isolate the exponential.'
                },
                {
                    stepNumber: 3,
                    description: 'Take \\( \\log \\) of both sides.',
                    workingLatex: 't\\log(0.85) < \\log\\!\\left(\\frac{1}{3}\\right)',
                    explanation: 'Logs are the inverse of exponentials and \\( \\log \\) is monotonically increasing on \\( (0, \\infty) \\), so the inequality direction is preserved when we take logs of two positive sides. The power law then brings the exponent \\( t \\) down.'
                },
                {
                    stepNumber: 4,
                    description: 'Divide by \\( \\log(0.85) \\). Note: \\( \\log(0.85) < 0 \\) so the inequality reverses.',
                    workingLatex: 't > \\frac{\\log(1/3)}{\\log(0.85)} = \\frac{-0.4771}{-0.0706} \\approx 6.76',
                    explanation: 'Crucial pitfall: \\( 0.85 < 1 \\) means \\( \\log(0.85) \\) is negative, so dividing by it flips the inequality from \\( < \\) to \\( > \\). Always check the sign of what you divide an inequality by.'
                },
                {
                    stepNumber: 5,
                    description: 'Interpret the result.',
                    workingLatex: 't = 7 \\text{ complete years}',
                    explanation: 'We need the smallest whole number of years with \\( t > 6.76 \\); the first complete year that satisfies this is \\( t = 7 \\).'
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
                    explanation: 'The \\( \\ln \\) function is one-to-one (strictly increasing), so if \\( \\ln A = \\ln B \\) then \\( A = B \\). This is what removes the logs without needing to exponentiate.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange into standard quadratic form.',
                    workingLatex: '2x^2 - 2x - 8 = 0 \\Rightarrow x^2 - x - 4 = 0',
                    explanation: 'Move every term to one side, then divide by the common factor 2 to keep coefficients small.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve using the quadratic formula.',
                    workingLatex: 'x = \\frac{1 \\pm \\sqrt{1 + 16}}{2} = \\frac{1 \\pm \\sqrt{17}}{2}',
                    explanation: 'With \\( a=1, b=-1, c=-4 \\) the discriminant is \\( b^2 - 4ac = 1 + 16 = 17 \\), giving two real candidates. Each must still be checked against the log domain.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Check \\( x = \\frac{1 + \\sqrt{17}}{2} \\approx 2.56 \\): argument \\( x^2 - 2x \\approx 6.55 - 5.12 \\approx 1.43 > 0 \\) \\checkmark',
                    workingLatex: 'x = \\frac{1+\\sqrt{17}}{2} \\text{ is valid}',
                    explanation: 'Both \\( x^2 - 2x \\) and \\( 8 - x^2 \\) must be positive for the original \\( \\ln \\) terms. For \\( x \\approx 2.56 \\) we have \\( 8 - x^2 \\approx 8 - 6.55 = 1.45 > 0 \\) too, so this root is valid.'
                },
                {
                    stepNumber: 5,
                    description: 'Check \\( x = \\frac{1 - \\sqrt{17}}{2} \\approx -1.56 \\): argument \\( x^2 - 2x \\approx 2.43 + 3.12 \\approx 5.55 > 0 \\) \\checkmark',
                    workingLatex: 'x = \\frac{1-\\sqrt{17}}{2} \\text{ is also valid}',
                    explanation: 'For \\( x \\approx -1.56 \\), \\( 8 - x^2 \\approx 8 - 2.43 \\approx 5.57 > 0 \\) as well. So both candidates satisfy the domain restrictions and both are accepted.'
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
            { stepNumber: 1, description: 'Match bases', workingLatex: '2^x = 2^6 \\implies x = 6', explanation: 'Recognising \\( 64 = 2^6 \\) lets us avoid logs entirely: with equal bases, the exponents must be equal.' }
        ], finalAnswer: 'x = 6' }
    },
    {
        id: 'el4-037', topicRef: 'el4', topicTitle: 'Solving Equations 37', difficulty: 'Foundation',
        questionText: 'Solve \\( 3^x = 7 \\). Give your answer to 3 s.f.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take logs', workingLatex: 'x = \\frac{\\ln 7}{\\ln 3} = \\frac{1.946}{1.099} = 1.77', explanation: 'Taking \\( \\ln \\) of both sides of \\( 3^x = 7 \\) gives \\( x\\ln 3 = \\ln 7 \\); divide by \\( \\ln 3 \\) to isolate \\( x \\). Sanity check: \\( 3^1 = 3 \\) and \\( 3^2 = 9 \\), so \\( x \\approx 1.77 \\) fits.' }
        ], finalAnswer: 'x = 1.77' }
    },
    {
        id: 'el4-038', topicRef: 'el4', topicTitle: 'Solving Equations 38', difficulty: 'Foundation',
        questionText: 'Solve \\( 5^{x-1} = 25 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Match bases', workingLatex: '5^{x-1} = 5^2 \\implies x - 1 = 2 \\implies x = 3', explanation: 'Since \\( 25 = 5^2 \\), both sides share the base 5, so we can equate the exponents directly without needing logs.' }
        ], finalAnswer: 'x = 3' }
    },
    {
        id: 'el4-039', topicRef: 'el4', topicTitle: 'Solving Equations 39', difficulty: 'Foundation',
        questionText: 'Solve \\( e^{3x} = 20 \\). Give exact answer.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take ln', workingLatex: '3x = \\ln 20 \\implies x = \\frac{\\ln 20}{3}', explanation: '\\( \\ln \\) is the inverse of \\( e^{\\square} \\), so taking \\( \\ln \\) brings the exponent \\( 3x \\) down; divide by 3 to isolate \\( x \\).' }
        ], finalAnswer: 'x = (ln 20)/3' }
    },
    {
        id: 'el4-040', topicRef: 'el4', topicTitle: 'Solving Equations 40', difficulty: 'Foundation',
        questionText: 'Solve \\( 4e^x - 12 = 0 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: 'e^x = 3 \\implies x = \\ln 3', explanation: 'Add 12 then divide by 4 to isolate the exponential, then apply \\( \\ln \\) (the inverse of \\( e^{\\square} \\)) to bring the exponent down.' }
        ], finalAnswer: 'x = ln 3' }
    },
    {
        id: 'el4-041', topicRef: 'el4', topicTitle: 'Solving Equations 41', difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln(2x - 1) = 4 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Exponentiate', workingLatex: '2x - 1 = e^4 \\implies x = \\frac{e^4 + 1}{2}', explanation: 'Apply \\( e^{\\square} \\) to both sides — the inverse of \\( \\ln \\) — to free the argument \\( 2x - 1 \\), then rearrange for \\( x \\). Note \\( 2x - 1 = e^4 > 0 \\) so the log domain is satisfied.' }
        ], finalAnswer: 'x = (e^4 + 1)/2' }
    },
    {
        id: 'el4-042', topicRef: 'el4', topicTitle: 'Solving Equations 42', difficulty: 'Foundation',
        questionText: 'Solve \\( 2^{2x} - 5 \\times 2^x + 4 = 0 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let u = 2^x', workingLatex: 'u^2 - 5u + 4 = 0 \\implies (u-1)(u-4) = 0', explanation: 'Since \\( 2^{2x} = (2^x)^2 \\), the substitution \\( u = 2^x \\) (with \\( u > 0 \\) since \\( 2^x > 0 \\)) converts the equation into a standard quadratic in \\( u \\).' },
            { stepNumber: 2, description: 'Solve', workingLatex: '2^x = 1 \\implies x = 0; \\quad 2^x = 4 \\implies x = 2', explanation: 'Both roots \\( u = 1 \\) and \\( u = 4 \\) are positive so both are valid. Solve each by recognising powers of 2 (or by taking \\( \\log_2 \\)).' }
        ], finalAnswer: 'x = 0 or x = 2' }
    },
    {
        id: 'el4-043', topicRef: 'el4', topicTitle: 'Solving Equations 43', difficulty: 'Foundation',
        questionText: 'Solve \\( e^{2x} - 4e^x + 3 = 0 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let u = e^x', workingLatex: '(u-1)(u-3) = 0', explanation: 'The substitution \\( u = e^x \\) (\\( u > 0 \\)) turns the equation into \\( u^2 - 4u + 3 = 0 \\), which factorises since \\( -1 \\) and \\( -3 \\) multiply to \\( +3 \\) and add to \\( -4 \\).' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x = \\ln 1 = 0 \\text{ or } x = \\ln 3', explanation: 'Both roots \\( u = 1 \\) and \\( u = 3 \\) are positive so both are valid. Apply \\( \\ln \\) to each to recover \\( x \\).' }
        ], finalAnswer: 'x = 0 or x = ln 3' }
    },
    {
        id: 'el4-044', topicRef: 'el4', topicTitle: 'Solving Equations 44', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_2(x + 3) = 4 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Convert', workingLatex: 'x + 3 = 2^4 = 16 \\implies x = 13', explanation: 'Index form is the inverse of log form: \\( \\log_a b = c \\Leftrightarrow a^c = b \\). Subtract 3 then check \\( x + 3 = 16 > 0 \\) ✓.' }
        ], finalAnswer: 'x = 13' }
    },
    {
        id: 'el4-045', topicRef: 'el4', topicTitle: 'Solving Equations 45', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_3 x + \\log_3(x + 6) = 3 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine', workingLatex: '\\log_3[x(x+6)] = 3 \\implies x^2 + 6x = 27', explanation: 'The product law \\( \\log a + \\log b = \\log(ab) \\) merges the two logs into one, then converting to index form gives \\( x(x+6) = 3^3 = 27 \\).' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x^2 + 6x - 27 = 0 \\implies (x+9)(x-3) = 0 \\implies x = 3', explanation: 'Both \\( \\log_3 x \\) and \\( \\log_3(x+6) \\) require \\( x > 0 \\), so reject \\( x = -9 \\) and keep \\( x = 3 \\).' }
        ], finalAnswer: 'x = 3' }
    },
    {
        id: 'el4-046', topicRef: 'el4', topicTitle: 'Solving Equations 46', difficulty: 'Foundation',
        questionText: 'Solve \\( 7^x = 3^{x+2} \\). Give answer to 3 s.f.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take ln', workingLatex: 'x\\ln 7 = (x+2)\\ln 3', explanation: 'With \\( x \\) in two different exponents, taking \\( \\ln \\) (the inverse of \\( e^{\\square} \\)) brings both exponents down so the equation becomes linear in \\( x \\).' },
            { stepNumber: 2, description: 'Expand and solve', workingLatex: 'x(\\ln 7 - \\ln 3) = 2\\ln 3 \\implies x = \\frac{2\\ln 3}{\\ln 7 - \\ln 3} = \\frac{2.197}{0.847} = 2.59', explanation: 'Expand, then collect \\( x \\)-terms on one side and factor. Using \\( \\ln 7 - \\ln 3 = \\ln(7/3) \\) via the quotient law would also work and keeps the denominator a single log.' }
        ], finalAnswer: 'x = 2.59' }
    },
    {
        id: 'el4-047', topicRef: 'el4', topicTitle: 'Solving Equations 47', difficulty: 'Foundation',
        questionText: 'Solve \\( 2 \\times 3^x = 5 \\times 2^x \\). Give answer to 3 s.f.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: '\\frac{3^x}{2^x} = \\frac{5}{2} \\implies \\left(\\frac{3}{2}\\right)^x = 2.5', explanation: 'Dividing collapses both exponentials into a single base \\( 3/2 \\), since \\( 3^x/2^x = (3/2)^x \\). Now there is only one exponential to handle.' },
            { stepNumber: 2, description: 'Take ln', workingLatex: 'x = \\frac{\\ln 2.5}{\\ln 1.5} = \\frac{0.916}{0.405} = 2.26', explanation: 'Take \\( \\ln \\) of both sides — the inverse of the exponential — and use the power law to bring \\( x \\) down, then divide.' }
        ], finalAnswer: 'x = 2.26' }
    },
    {
        id: 'el4-048', topicRef: 'el4', topicTitle: 'Solving Equations 48', difficulty: 'Foundation',
        questionText: 'Solve \\( e^x - 6e^{-x} = 1 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Multiply by e^x', workingLatex: 'e^{2x} - e^x - 6 = 0', explanation: 'Multiplying through by \\( e^x \\) (which is always positive, so safe) clears the \\( e^{-x} \\) term and reveals the hidden quadratic in \\( e^x \\).' },
            { stepNumber: 2, description: 'Let u = e^x', workingLatex: '(u-3)(u+2) = 0 \\implies u = 3', explanation: 'Substitute \\( u = e^x \\) (\\( u > 0 \\)) and factorise. Reject \\( u = -2 \\) because \\( e^x > 0 \\) for all real \\( x \\) — this validity check is essential.' },
            { stepNumber: 3, description: 'Solve', workingLatex: 'x = \\ln 3', explanation: 'Apply \\( \\ln \\) — the inverse of \\( e^{\\square} \\) — to \\( e^x = 3 \\).' }
        ], finalAnswer: 'x = ln 3' }
    },
    {
        id: 'el4-049', topicRef: 'el4', topicTitle: 'Solving Equations 49', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_5(2x - 1) - \\log_5(x + 2) = 1 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine', workingLatex: '\\log_5\\frac{2x-1}{x+2} = 1 \\implies \\frac{2x-1}{x+2} = 5', explanation: 'Use the quotient law to merge into one log, then convert to index form (\\( 5^1 = 5 \\)) to remove the logarithm.' },
            { stepNumber: 2, description: 'Solve', workingLatex: '2x - 1 = 5(x+2) \\implies 2x - 1 = 5x + 10 \\implies -3x = 11 \\implies x = -\\frac{11}{3}', explanation: 'Multiply out and rearrange. Always check the log domain: at \\( x = -\\tfrac{11}{3} \\), \\( 2x - 1 = -\\tfrac{25}{3} < 0 \\), so the original \\( \\log_5(2x-1) \\) is undefined and the candidate must be rejected.' }
        ], finalAnswer: 'No solution' }
    },
    {
        id: 'el4-050', topicRef: 'el4', topicTitle: 'Solving Equations 50', difficulty: 'Foundation',
        questionText: 'A population grows according to \\( P = 500e^{0.03t} \\). Find \\( t \\) when \\( P = 1000 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute', workingLatex: 'e^{0.03t} = 2 \\implies 0.03t = \\ln 2 \\implies t = \\frac{\\ln 2}{0.03} = 23.1', explanation: 'Setting \\( P = 1000 \\) gives \\( 500e^{0.03t} = 1000 \\), so \\( e^{0.03t} = 2 \\). Apply \\( \\ln \\) — the inverse of \\( e^{\\square} \\) — to bring the exponent down, then divide by 0.03.' }
        ], finalAnswer: 't = 23.1 years' }
    },
    {
        id: 'el4-051', topicRef: 'el4', topicTitle: 'Solving Equations 51', difficulty: 'Foundation',
        questionText: 'Solve \\( 4^x = 2^{x+3} \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write 4 as 2^2', workingLatex: '2^{2x} = 2^{x+3} \\implies 2x = x + 3 \\implies x = 3', explanation: 'Rewriting \\( 4 = 2^2 \\) gives matching bases on both sides. With equal positive bases, the exponents must be equal — no logs needed.' }
        ], finalAnswer: 'x = 3' }
    },
    {
        id: 'el4-052', topicRef: 'el4', topicTitle: 'Solving Equations 52', difficulty: 'Foundation',
        questionText: 'Solve \\( 9^x = 3^{x+4} \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write 9 as 3^2', workingLatex: '3^{2x} = 3^{x+4} \\implies 2x = x + 4 \\implies x = 4', explanation: 'Writing \\( 9 = 3^2 \\) gives the same base on both sides, so the exponents must be equal. This avoids the need for logs entirely.' }
        ], finalAnswer: 'x = 4' }
    },
    {
        id: 'el4-053', topicRef: 'el4', topicTitle: 'Solving Equations 53', difficulty: 'Foundation',
        questionText: 'Solve \\( 5e^{2x} - 3e^x = 2 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let u = e^x', workingLatex: '5u^2 - 3u - 2 = 0 \\implies (5u + 2)(u - 1) = 0', explanation: 'Since \\( e^{2x} = (e^x)^2 \\), the substitution \\( u = e^x \\) (\\( u > 0 \\)) converts the equation into a quadratic. Check the factorisation: \\( 5u^2 - 5u + 2u - 2 = 5u^2 - 3u - 2 \\) ✓.' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'u = 1 \\implies x = 0', explanation: 'Reject \\( u = -\\tfrac{2}{5} \\) because \\( e^x > 0 \\) always. The valid root \\( u = 1 \\) gives \\( e^x = 1 \\Rightarrow x = 0 \\).' }
        ], finalAnswer: 'x = 0' }
    },
    {
        id: 'el4-054', topicRef: 'el4', topicTitle: 'Solving Equations 54', difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln x + \\ln(x - 2) = \\ln 15 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine', workingLatex: 'x(x-2) = 15 \\implies x^2 - 2x - 15 = 0', explanation: 'Apply the product law on the left, then use \\( \\ln A = \\ln B \\Rightarrow A = B \\) (because \\( \\ln \\) is one-to-one) to remove the logs.' },
            { stepNumber: 2, description: 'Solve', workingLatex: '(x-5)(x+3) = 0 \\implies x = 5', explanation: 'Both \\( \\ln x \\) and \\( \\ln(x-2) \\) require \\( x > 2 \\), so reject \\( x = -3 \\) and keep \\( x = 5 \\).' }
        ], finalAnswer: 'x = 5' }
    },
    {
        id: 'el4-055', topicRef: 'el4', topicTitle: 'Solving Equations 55', difficulty: 'Foundation',
        questionText: 'The half-life of a substance is 10 hours. If \\( m = m_0 e^{-kt} \\), find \\( k \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'At t = 10, m = m_0/2', workingLatex: '\\frac{1}{2} = e^{-10k} \\implies -10k = \\ln \\frac{1}{2} \\implies k = \\frac{\\ln 2}{10}', explanation: 'After one half-life the mass is halved, so \\( m_0/2 = m_0 e^{-10k} \\) gives \\( e^{-10k} = 1/2 \\). Apply \\( \\ln \\) (the inverse of \\( e^{\\square} \\)) and use \\( \\ln(1/2) = -\\ln 2 \\) so the negatives cancel.' }
        ], finalAnswer: 'k = (ln 2)/10 = 0.0693' }
    },
    {
        id: 'el4-056', topicRef: 'el4', topicTitle: 'Solving Equations 56', difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\log_3 x = \\log_3(5x + 6) \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Power rule on LHS', workingLatex: '\\log_3 x^2 = \\log_3(5x+6) \\implies x^2 = 5x + 6', explanation: 'Use the power law \\( n\\log a = \\log a^n \\) to merge the LHS into a single log, then equate arguments because \\( \\log_3 \\) is one-to-one.' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x^2 - 5x - 6 = 0 \\implies (x-6)(x+1) = 0 \\implies x = 6', explanation: 'The original \\( \\log_3 x \\) requires \\( x > 0 \\), so reject \\( x = -1 \\) and keep \\( x = 6 \\).' }
        ], finalAnswer: 'x = 6' }
    },
    {
        id: 'el4-057', topicRef: 'el4', topicTitle: 'Solving Equations 57', difficulty: 'Foundation',
        questionText: 'Solve \\( 3^{x+1} = 4^{x-1} \\). Give answer to 3 s.f.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take ln', workingLatex: '(x+1)\\ln 3 = (x-1)\\ln 4', explanation: 'With \\( x \\) in two different exponents, taking \\( \\ln \\) is the inverse step that brings both exponents down — turning the equation into a linear one in \\( x \\).' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x\\ln 3 + \\ln 3 = x\\ln 4 - \\ln 4 \\implies x(\\ln 3 - \\ln 4) = -\\ln 4 - \\ln 3', explanation: 'Expand the brackets, then collect \\( x \\)-terms on one side and constants on the other before factoring.' },
            { stepNumber: 3, description: 'Calculate', workingLatex: 'x = \\frac{-(\\ln 4 + \\ln 3)}{\\ln 3 - \\ln 4} = \\frac{\\ln 12}{\\ln(4/3)} = 8.64', explanation: 'Apply the product law \\( \\ln 4 + \\ln 3 = \\ln 12 \\) and quotient law \\( \\ln 4 - \\ln 3 = \\ln(4/3) \\) — combining logs makes the arithmetic simpler. The two minus signs cancel.' }
        ], finalAnswer: 'x = 8.64' }
    },
    {
        id: 'el4-058', topicRef: 'el4', topicTitle: 'Solving Equations 58', difficulty: 'Foundation',
        questionText: 'Solve \\( e^x + 2e^{-x} = 3 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Multiply by e^x', workingLatex: 'e^{2x} - 3e^x + 2 = 0 \\implies (e^x - 1)(e^x - 2) = 0', explanation: 'Multiplying by \\( e^x \\) (always positive, so safe) eliminates the \\( e^{-x} \\) term and reveals a quadratic in \\( e^x \\), which factorises easily.' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x = 0 \\text{ or } x = \\ln 2', explanation: 'Both \\( e^x = 1 \\) and \\( e^x = 2 \\) are positive so both are valid. Apply \\( \\ln \\) to each: \\( \\ln 1 = 0 \\) and \\( \\ln 2 \\) is the exact form of the other root.' }
        ], finalAnswer: 'x = 0 or x = ln 2' }
    },
    {
        id: 'el4-059', topicRef: 'el4', topicTitle: 'Solving Equations 59', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log(x + 5) + \\log(x - 2) = \\log 18 \\). (Base 10)',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine', workingLatex: '(x+5)(x-2) = 18 \\implies x^2 + 3x - 28 = 0', explanation: 'Apply the product law to merge the logs into one, then equate arguments (\\( \\log \\) is one-to-one). Expand and rearrange into standard quadratic form.' },
            { stepNumber: 2, description: 'Solve', workingLatex: '(x+7)(x-4) = 0 \\implies x = 4', explanation: 'Both \\( \\log(x+5) \\) and \\( \\log(x-2) \\) require \\( x > 2 \\), so reject \\( x = -7 \\) and keep \\( x = 4 \\).' }
        ], finalAnswer: 'x = 4' }
    },
    {
        id: 'el4-060', topicRef: 'el4', topicTitle: 'Solving Equations 60', difficulty: 'Foundation',
        questionText: 'Solve \\( 2^x + 2^{x+2} = 40 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factor', workingLatex: '2^x(1 + 2^2) = 40 \\implies 5 \\times 2^x = 40 \\implies 2^x = 8', explanation: 'Use the index law \\( 2^{x+2} = 2^x \\cdot 2^2 \\) so we can factor out the common \\( 2^x \\). This is much cleaner than taking logs of a sum.' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x = 3', explanation: 'Recognise \\( 8 = 2^3 \\), so by matching bases \\( x = 3 \\). No logs required.' }
        ], finalAnswer: 'x = 3' }
    },
    {
        id: 'el4-061', topicRef: 'el4', topicTitle: 'Solving Equations 61', difficulty: 'Foundation',
        questionText: 'Solve \\( 3^{x+1} - 3^x = 18 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factor', workingLatex: '3^x(3 - 1) = 18 \\implies 2 \\times 3^x = 18 \\implies 3^x = 9', explanation: 'Write \\( 3^{x+1} = 3 \\cdot 3^x \\) to expose the common factor \\( 3^x \\). This avoids needing logs.' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x = 2', explanation: 'Recognise \\( 9 = 3^2 \\), so matching bases gives \\( x = 2 \\) directly.' }
        ], finalAnswer: 'x = 2' }
    },
    {
        id: 'el4-062', topicRef: 'el4', topicTitle: 'Solving Equations 62', difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln(x^2) = 6 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Exponentiate to remove the log', workingLatex: 'x^2 = e^6', explanation: 'Apply \\( e^{\\square} \\) — the inverse of \\( \\ln \\) — to both sides. Note that \\( \\ln(x^2) \\) is defined whenever \\( x \\neq 0 \\), so both signs of \\( x \\) are possible.' },
            { stepNumber: 2, description: 'Take the square root, keeping both signs', workingLatex: 'x = \\pm\\sqrt{e^6} = \\pm e^3', explanation: 'Pitfall: the power law \\( \\ln(x^2) = 2\\ln x \\) only holds for \\( x > 0 \\), so we must not use it here without care. Working directly from \\( x^2 = e^6 \\) gives both \\( x = e^3 \\) and \\( x = -e^3 \\), and both satisfy the original equation since \\( (-e^3)^2 = e^6 \\) too.' }
        ], finalAnswer: 'x = e^3 or x = -e^3' }
    },
    {
        id: 'el4-063', topicRef: 'el4', topicTitle: 'Solving Equations 63', difficulty: 'Foundation',
        questionText: 'An investment of \\( \\pounds 2000 \\) grows to \\( \\pounds 3000 \\) at 4% compound interest. Find the number of years.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set up', workingLatex: '2000 \\times 1.04^n = 3000 \\implies 1.04^n = 1.5', explanation: 'The compound interest model is \\( P \\times (1 + r)^n \\). Set this equal to 3000 and divide by the initial 2000 to isolate the exponential factor.' },
            { stepNumber: 2, description: 'Take logs', workingLatex: 'n = \\frac{\\ln 1.5}{\\ln 1.04} = \\frac{0.405}{0.0392} = 10.3', explanation: 'Taking \\( \\ln \\) of both sides — the inverse of an exponential — brings the exponent \\( n \\) down via the power law. Since the answer 10.3 isn\'t a whole year, we round up to 11 because the investment must have completed enough years to exceed £3000.' }
        ], finalAnswer: '11 years (round up)' }
    },
    {
        id: 'el4-064', topicRef: 'el4', topicTitle: 'Solving Equations 64', difficulty: 'Foundation',
        questionText: 'Solve simultaneously: \\( \\log_2 x + \\log_2 y = 5 \\) and \\( \\log_2 x - \\log_2 y = 1 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Add equations', workingLatex: '2\\log_2 x = 6 \\implies \\log_2 x = 3 \\implies x = 8', explanation: 'Treat \\( \\log_2 x \\) and \\( \\log_2 y \\) as two unknowns. Adding the equations eliminates \\( \\log_2 y \\); converting to index form (\\( 2^3 = 8 \\)) is the inverse of the log and gives \\( x \\) directly.' },
            { stepNumber: 2, description: 'Subtract', workingLatex: '2\\log_2 y = 4 \\implies y = 4', explanation: 'Subtracting the second equation from the first eliminates \\( \\log_2 x \\), giving \\( \\log_2 y = 2 \\), so \\( y = 2^2 = 4 \\). Both \\( x, y > 0 \\), so the original logs are well-defined ✓.' }
        ], finalAnswer: 'x = 8, y = 4' }
    },
    {
        id: 'el4-065', topicRef: 'el4', topicTitle: 'Solving Equations 65', difficulty: 'Foundation',
        questionText: 'Solve \\( e^{2x} + 3e^x - 10 = 0 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let u = e^x', workingLatex: '(u+5)(u-2) = 0 \\implies u = 2', explanation: 'The substitution \\( u = e^x \\) (\\( u > 0 \\)) gives the quadratic \\( u^2 + 3u - 10 = 0 \\). Reject \\( u = -5 \\) because \\( e^x \\) cannot be negative.' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x = \\ln 2', explanation: 'Apply \\( \\ln \\) — the inverse of \\( e^{\\square} \\) — to the valid root \\( e^x = 2 \\).' }
        ], finalAnswer: 'x = ln 2' }
    },
    {
        id: 'el4-066', topicRef: 'el4', topicTitle: 'Solving Equations 66', difficulty: 'Foundation',
        questionText: 'Solve \\( (\\log x)^2 = \\log x^4 \\). (Base 10)',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Simplify RHS', workingLatex: '(\\log x)^2 = 4\\log x', explanation: 'Use the power law \\( \\log x^4 = 4\\log x \\) on the right. Note: be careful — \\( (\\log x)^2 \\) on the left is the log squared, not the log of \\( x^2 \\), so do not collapse it further.' },
            { stepNumber: 2, description: 'Rearrange', workingLatex: '(\\log x)^2 - 4\\log x = 0 \\implies \\log x(\\log x - 4) = 0', explanation: 'Treat \\( \\log x \\) as a single quantity and factor it out — like solving \\( u^2 - 4u = u(u-4) = 0 \\).' },
            { stepNumber: 3, description: 'Solve', workingLatex: '\\log x = 0: x = 1; \\quad \\log x = 4: x = 10000', explanation: 'Convert each case to index form: \\( \\log x = 0 \\Rightarrow x = 10^0 = 1 \\), and \\( \\log x = 4 \\Rightarrow x = 10^4 = 10000 \\). Both are positive, so both are valid ✓.' }
        ], finalAnswer: 'x = 1 or x = 10000' }
    },
    {
        id: 'el4-067', topicRef: 'el4', topicTitle: 'Solving Equations 67', difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\ln(x + 1) - \\ln x = \\ln 4 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine', workingLatex: '\\ln\\frac{(x+1)^2}{x} = \\ln 4 \\implies \\frac{(x+1)^2}{x} = 4', explanation: 'Use the power law \\( 2\\ln(x+1) = \\ln(x+1)^2 \\) and the quotient law to merge into a single logarithm. Since \\( \\ln \\) is one-to-one, equate the arguments.' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x^2 + 2x + 1 = 4x \\implies x^2 - 2x + 1 = 0 \\implies (x-1)^2 = 0', explanation: 'Expand, rearrange, and recognise a perfect square. The repeated root \\( x = 1 \\) satisfies \\( x > 0 \\), so the log arguments are valid ✓.' }
        ], finalAnswer: 'x = 1' }
    },
    {
        id: 'el4-068', topicRef: 'el4', topicTitle: 'Solving Equations 68', difficulty: 'Foundation',
        questionText: 'A cooling object has temperature \\( T = 25 + 60e^{-0.04t} \\). Find when \\( T = 40 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute', workingLatex: '15 = 60e^{-0.04t} \\implies e^{-0.04t} = 0.25', explanation: 'Set \\( T = 40 \\), then subtract 25 (the ambient temperature) and divide by 60 to isolate the exponential before applying \\( \\ln \\).' },
            { stepNumber: 2, description: 'Take ln', workingLatex: '-0.04t = \\ln 0.25 = -1.386 \\implies t = 34.7 \\text{ min}', explanation: '\\( \\ln \\) is the inverse of \\( e^{\\square} \\), so the exponent comes down. The two negatives cancel when dividing by \\( -0.04 \\), giving a sensibly positive time.' }
        ], finalAnswer: 't = 34.7 minutes' }
    },
    {
        id: 'el4-069', topicRef: 'el4', topicTitle: 'Solving Equations 69', difficulty: 'Foundation',
        questionText: 'Find the exact solution of \\( 3^x = 2 \\times 5^x \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: '\\left(\\frac{3}{5}\\right)^x = 2', explanation: 'Dividing \\( 3^x / 5^x = (3/5)^x \\) collapses the two exponentials into one, isolating a single exponential with base \\( 3/5 \\).' },
            { stepNumber: 2, description: 'Take ln', workingLatex: 'x = \\frac{\\ln 2}{\\ln(3/5)} = \\frac{\\ln 2}{\\ln 3 - \\ln 5}', explanation: 'Apply \\( \\ln \\) (the inverse of an exponential) to bring \\( x \\) down via the power law. The quotient law \\( \\ln(3/5) = \\ln 3 - \\ln 5 \\) gives the alternative form. Note: \\( \\ln(3/5) < 0 \\), so \\( x < 0 \\) — consistent with needing to raise a number less than 1 to a negative power to get a result greater than 1.' }
        ], finalAnswer: 'x = ln 2 / (ln 3 - ln 5)' }
    },
    {
        id: 'el4-070', topicRef: 'el4', topicTitle: 'Solving Equations 70', difficulty: 'Foundation',
        questionText: 'Solve \\( e^{2x} - 5e^x = -6 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: 'e^{2x} - 5e^x + 6 = 0', explanation: 'Move all terms to one side to get standard quadratic-in-\\( e^x \\) form before substituting.' },
            { stepNumber: 2, description: 'Let u = e^x', workingLatex: '(u-2)(u-3) = 0 \\implies u = 2 \\text{ or } u = 3', explanation: 'Since \\( e^{2x} = (e^x)^2 \\), the substitution \\( u = e^x \\) (\\( u > 0 \\)) gives \\( u^2 - 5u + 6 = 0 \\). Both roots are positive, so both are valid.' },
            { stepNumber: 3, description: 'Solve', workingLatex: 'x = \\ln 2 \\text{ or } x = \\ln 3', explanation: 'Apply \\( \\ln \\) — the inverse of \\( e^{\\square} \\) — to each case to recover \\( x \\).' }
        ], finalAnswer: 'x = ln 2 or x = ln 3' }
    },
];
