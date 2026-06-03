import { Question } from "@/lib/types";

function sample(f: (x: number) => number, xMin: number, xMax: number, n = 60): Array<[number, number]> {
    const pts: Array<[number, number]> = [];
    for (let i = 0; i < n; i++) {
        const x = xMin + (i / (n - 1)) * (xMax - xMin);
        pts.push([x, f(x)]);
    }
    return pts;
}

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
    // TYPE A (Q1–6): Converting y = ax^n to linear form log y = n log x + log a
    {
        id: 'el6-001',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 01',
        difficulty: 'Foundation',
        questionText: 'A relationship between \\( x \\) and \\( y \\) is believed to follow \\( y = ax^n \\).\n\n Show that taking \\( \\log_{10} \\) of both sides gives a straight-line equation of the form \\( \\log y = n\\log x + \\log a \\), and state what the gradient and vertical intercept represent.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'linearise', 'y = ax^n', 'log y vs log x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides of \\( y = ax^n \\).',
                    workingLatex: '\\log y = \\log(ax^n)',
                    explanation: 'Applying the same log operation to both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Use the product law and power law.',
                    workingLatex: '\\log y = \\log a + \\log(x^n) = \\log a + n\\log x',
                    explanation: '\\( \\log(ax^n) = \\log a + \\log(x^n) = \\log a + n\\log x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write in \\( Y = mX + c \\) straight-line form.',
                    workingLatex: '\\underbrace{\\log y}_{Y} = \\underbrace{n}_{m}\\underbrace{\\log x}_{X} + \\underbrace{\\log a}_{c}',
                    explanation: 'Plotting \\( \\log y \\) against \\( \\log x \\) gives a straight line with gradient \\( n \\) and vertical intercept \\( \\log a \\).'
                }
            ],
            finalAnswer: '\\( \\log y = n\\log x + \\log a \\). Gradient \\( = n \\); vertical intercept \\( = \\log a \\).'
        }
    },
    {
        id: 'el6-002',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 02',
        difficulty: 'Foundation',
        questionText: 'A straight-line graph is obtained by plotting \\( \\log_{10} y \\) against \\( \\log_{10} x \\). The gradient is 3 and the vertical intercept is 0.5.\n\n Find the values of \\( a \\) and \\( n \\) in the relationship \\( y = ax^n \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = ax^n', 'find a and n', 'log y vs log x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The gradient of \\( \\log y \\) against \\( \\log x \\) equals \\( n \\).',
                    workingLatex: 'n = 3',
                    explanation: 'For \\( y = ax^n \\), the linearised form is \\( \\log y = n\\log x + \\log a \\), so gradient = \\( n \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The vertical intercept equals \\( \\log a \\).',
                    workingLatex: '\\log a = 0.5 \\Rightarrow a = 10^{0.5} = \\sqrt{10} \\approx 3.16',
                    explanation: 'Apply \\( 10^{\\square} \\) to find \\( a \\).'
                }
            ],
            finalAnswer: '\\( n = 3 \\), \\( a = 10^{0.5} \\approx 3.16 \\)'
        }
    },
    {
        id: 'el6-003',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 03',
        difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log_{10} y \\) against \\( \\log_{10} x \\) passes through the points \\( (0, 1.2) \\) and \\( (2, 3.2) \\).\n\n Find the values of \\( a \\) and \\( n \\) in the equation \\( y = ax^n \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = ax^n', 'find a and n', 'two points'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient of the straight line.',
                    workingLatex: 'n = \\frac{3.2 - 1.2}{2 - 0} = \\frac{2.0}{2} = 1',
                    explanation: 'Gradient = \\( \\Delta(\\log y) / \\Delta(\\log x) \\) = \\( n \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The vertical intercept (where \\( \\log x = 0 \\)) gives \\( \\log a \\).',
                    workingLatex: '\\log a = 1.2 \\Rightarrow a = 10^{1.2} \\approx 15.8',
                    explanation: 'The point \\( (0, 1.2) \\) is on the \\( \\log y \\)-axis, so this is the intercept.'
                }
            ],
            finalAnswer: '\\( n = 1 \\), \\( a \\approx 15.8 \\)'
        }
    },
    {
        id: 'el6-004',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 04',
        difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log_{10} y \\) against \\( \\log_{10} x \\) passes through \\( (1, 2.6) \\) and \\( (3, 4.0) \\).\n\n Find \\( a \\) and \\( n \\) in \\( y = ax^n \\). Give your answers to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = ax^n', 'find a and n', 'two points'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient \\( n \\).',
                    workingLatex: 'n = \\frac{4.0 - 2.6}{3 - 1} = \\frac{1.4}{2} = 0.7',
                    explanation: 'Gradient = change in \\( \\log y \\) / change in \\( \\log x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the vertical intercept using point \\( (1, 2.6) \\).',
                    workingLatex: '\\log a = 2.6 - 0.7 \\times 1 = 1.9 \\Rightarrow a = 10^{1.9} \\approx 79.4',
                    explanation: 'Rearrange \\( \\log y = n\\log x + \\log a \\) using one of the points.'
                }
            ],
            finalAnswer: '\\( n = 0.7 \\), \\( a \\approx 79.4 \\)'
        }
    },
    {
        id: 'el6-005',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 05',
        difficulty: 'Foundation',
        questionText: 'The table below shows values of \\( x \\) and \\( y \\) that are thought to satisfy \\( y = ax^n \\).\n\n\\(\\begin{array}{|c|c|c|c|c|}\\hline x & 4 & 9 & 16 & 25 \\\\ \\hline y & 24 & 81 & 192 & 375 \\\\ \\hline \\end{array}\\)\n\nBy plotting \\( \\log y \\) against \\( \\log x \\), find \\( a \\) and \\( n \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = ax^n', 'table of values', 'log y vs log x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert the data to \\( \\log x \\) and \\( \\log y \\). Using \\( x = 4, y = 24 \\) and \\( x = 25, y = 375 \\):',
                    workingLatex: '\\log 4 \\approx 0.602, \\; \\log 24 \\approx 1.380 \\qquad \\log 25 \\approx 1.398, \\; \\log 375 \\approx 2.574',
                    explanation: 'Taking \\( \\log_{10} \\) of each data value.'
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the gradient \\( n \\).',
                    workingLatex: 'n = \\frac{2.574 - 1.380}{1.398 - 0.602} = \\frac{1.194}{0.796} \\approx 1.50',
                    explanation: 'Gradient = change in \\( \\log y \\) / change in \\( \\log x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( \\log a \\) using the intercept.',
                    workingLatex: '\\log a = 1.380 - 1.50 \\times 0.602 = 1.380 - 0.903 = 0.477 \\Rightarrow a = 10^{0.477} \\approx 3',
                    explanation: 'Substitute one point into \\( \\log y = n\\log x + \\log a \\).'
                }
            ],
            finalAnswer: '\\( n \\approx 1.5 \\), \\( a \\approx 3 \\), so \\( y \\approx 3x^{1.5} \\)'
        }
    },
    {
        id: 'el6-006',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 06',
        difficulty: 'Foundation',
        questionText: 'The radius \\( r \\) cm and height \\( h \\) cm of several cylinders are thought to satisfy \\( h = ar^n \\). A graph of \\( \\log h \\) against \\( \\log r \\) gives a straight line with gradient \\( -2 \\) and vertical intercept \\( 3 \\).\n\n Write down the relationship between \\( h \\) and \\( r \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = ax^n', 'find a and n', 'negative power'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Read off \\( n \\) from the gradient.',
                    workingLatex: 'n = -2',
                    explanation: 'Gradient of \\( \\log h \\) vs \\( \\log r \\) equals the power \\( n \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( a \\) from the vertical intercept.',
                    workingLatex: '\\log a = 3 \\Rightarrow a = 10^3 = 1000',
                    explanation: 'The vertical intercept of the linearised graph equals \\( \\log a \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the relationship.',
                    workingLatex: 'h = 1000r^{-2} = \\frac{1000}{r^2}',
                    explanation: 'Substitute \\( a = 1000 \\) and \\( n = -2 \\).'
                }
            ],
            finalAnswer: '\\( h = \\dfrac{1000}{r^2} \\)'
        }
    },
    // TYPE B (Q7–12): Converting y = kb^x to linear form log y = x log b + log k
    {
        id: 'el6-007',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 07',
        difficulty: 'Foundation',
        questionText: 'A relationship between \\( x \\) and \\( y \\) is believed to follow \\( y = kb^x \\).\n\n Show that taking \\( \\log_{10} \\) of both sides gives a straight-line equation of the form \\( \\log y = x\\log b + \\log k \\), and state what the gradient and vertical intercept represent.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'linearise', 'y = kb^x', 'log y vs x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: '\\log y = \\log(kb^x)',
                    explanation: 'Same log applied to both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the product and power laws.',
                    workingLatex: '\\log y = \\log k + \\log(b^x) = \\log k + x\\log b',
                    explanation: '\\( \\log(kb^x) = \\log k + x\\log b \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Identify the straight-line form.',
                    workingLatex: '\\underbrace{\\log y}_{Y} = \\underbrace{\\log b}_{m}\\,\\underbrace{x}_{X} + \\underbrace{\\log k}_{c}',
                    explanation: 'Plotting \\( \\log y \\) against \\( x \\) gives a straight line with gradient \\( \\log b \\) and vertical intercept \\( \\log k \\).'
                }
            ],
            finalAnswer: '\\( \\log y = x\\log b + \\log k \\). Gradient \\( = \\log b \\); vertical intercept \\( = \\log k \\).'
        }
    },
    {
        id: 'el6-008',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 08',
        difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log_{10} y \\) against \\( x \\) is a straight line with gradient \\( 0.3 \\) and vertical intercept \\( 1.7 \\).\n\n Find the values of \\( k \\) and \\( b \\) in the equation \\( y = kb^x \\). Give your answers to 3 s.f.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = kb^x', 'find k and b', 'log y vs x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The gradient equals \\( \\log b \\).',
                    workingLatex: '\\log b = 0.3 \\Rightarrow b = 10^{0.3} \\approx 2.00',
                    explanation: 'Apply \\( 10^{\\square} \\) to find \\( b \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The vertical intercept equals \\( \\log k \\).',
                    workingLatex: '\\log k = 1.7 \\Rightarrow k = 10^{1.7} \\approx 50.1',
                    explanation: 'Apply \\( 10^{\\square} \\) to find \\( k \\).'
                }
            ],
            finalAnswer: '\\( b \\approx 2.00 \\), \\( k \\approx 50.1 \\)'
        }
    },
    {
        id: 'el6-009',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 09',
        difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log_{10} y \\) against \\( x \\) passes through the points \\( (0, 2) \\) and \\( (5, 3.5) \\).\n\n Find \\( k \\) and \\( b \\) in \\( y = kb^x \\). Give your answers to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = kb^x', 'find k and b', 'two points'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient \\( \\log b \\).',
                    workingLatex: '\\log b = \\frac{3.5 - 2}{5 - 0} = \\frac{1.5}{5} = 0.3 \\Rightarrow b = 10^{0.3} \\approx 2.00',
                    explanation: 'Gradient = change in \\( \\log y \\) / change in \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The vertical intercept gives \\( \\log k \\).',
                    workingLatex: '\\log k = 2 \\Rightarrow k = 10^2 = 100',
                    explanation: 'The point \\( (0, 2) \\) is on the \\( \\log y \\)-axis, so it is the intercept.'
                }
            ],
            finalAnswer: '\\( b \\approx 2.00 \\), \\( k = 100 \\)'
        }
    },
    {
        id: 'el6-010',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 10',
        difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log_{10} y \\) against \\( x \\) passes through \\( (2, 1.4) \\) and \\( (6, 2.8) \\).\n\n Find \\( k \\) and \\( b \\) in \\( y = kb^x \\). Give your answers to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = kb^x', 'find k and b', 'two points'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient \\( \\log b \\).',
                    workingLatex: '\\log b = \\frac{2.8 - 1.4}{6 - 2} = \\frac{1.4}{4} = 0.35 \\Rightarrow b = 10^{0.35} \\approx 2.24',
                    explanation: 'Gradient = \\( \\Delta(\\log y) / \\Delta x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( \\log k \\) using point \\( (2, 1.4) \\).',
                    workingLatex: '1.4 = 0.35 \\times 2 + \\log k \\Rightarrow \\log k = 1.4 - 0.7 = 0.7 \\Rightarrow k = 10^{0.7} \\approx 5.01',
                    explanation: 'Substitute into \\( \\log y = x\\log b + \\log k \\).'
                }
            ],
            finalAnswer: '\\( b \\approx 2.24 \\), \\( k \\approx 5.01 \\)'
        }
    },
    {
        id: 'el6-011',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 11',
        difficulty: 'Foundation',
        questionText: 'The equation \\( y = kb^x \\) can also be written as \\( y = ke^{cx} \\) for some constant \\( c \\).\n\n A graph of \\( \\ln y \\) against \\( x \\) has gradient \\( 0.4 \\) and vertical intercept \\( 3 \\).\n\n Write down the values of \\( k \\) and \\( c \\) in \\( y = ke^{cx} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = ke^cx', 'ln y vs x', 'find k and c'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Linearise \\( y = ke^{cx} \\) using \\( \\ln \\).',
                    workingLatex: '\\ln y = cx + \\ln k',
                    explanation: '\\( \\ln(ke^{cx}) = \\ln k + cx \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Read off the gradient \\( c \\) and intercept \\( \\ln k \\).',
                    workingLatex: 'c = 0.4 \\qquad \\ln k = 3 \\Rightarrow k = e^3 \\approx 20.1',
                    explanation: 'Gradient = \\( c \\); intercept = \\( \\ln k \\).'
                }
            ],
            finalAnswer: '\\( c = 0.4 \\), \\( k = e^3 \\approx 20.1 \\)'
        }
    },
    {
        id: 'el6-012',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 12',
        difficulty: 'Foundation',
        questionText: 'A graph of \\( \\ln y \\) against \\( x \\) passes through \\( (0, 1.5) \\) and \\( (4, 3.9) \\).\n\n Find \\( k \\) and \\( c \\) in \\( y = ke^{cx} \\). Give your answers to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = ke^cx', 'ln y vs x', 'find k and c'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient \\( c \\).',
                    workingLatex: 'c = \\frac{3.9 - 1.5}{4 - 0} = \\frac{2.4}{4} = 0.6',
                    explanation: 'Gradient of \\( \\ln y \\) against \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The vertical intercept is \\( \\ln k \\).',
                    workingLatex: '\\ln k = 1.5 \\Rightarrow k = e^{1.5} \\approx 4.48',
                    explanation: 'Point \\( (0, 1.5) \\) is on the \\( \\ln y \\)-axis.'
                }
            ],
            finalAnswer: '\\( c = 0.6 \\), \\( k \\approx 4.48 \\)'
        }
    },
    // TYPE C (Q13–17): Reading values from given tables and plotting log graphs
    {
        id: 'el6-013',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 13',
        difficulty: 'Foundation',
        questionText: 'The table below gives values of \\( t \\) and \\( y \\) which satisfy \\( y = kb^t \\).\n\n\n\n \\(\\begin{array}{|c|c|c|c|c|}\\hline t & 1 & 3 & 5 & 7 \\\\\\hline y & 6 & 30 & 150 & 750 \\\\\\hline\\end{array}\\)\n\n\n\n (a) Copy and complete the table of \\( \\log_{10} y \\) values.\n\n (b) State the gradient and vertical intercept of the graph of \\( \\log y \\) against \\( t \\).\n\n (c) Hence find \\( k \\) and \\( b \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = kb^t', 'table', 'find k and b'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Compute \\( \\log_{10} y \\) for each value.',
                    workingLatex: '\\log 6 \\approx 0.778, \\quad \\log 30 \\approx 1.477, \\quad \\log 150 \\approx 2.176, \\quad \\log 750 \\approx 2.875',
                    explanation: 'Use a calculator to find each log value to 3 d.p.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Find the gradient using two points, e.g. \\( (1, 0.778) \\) and \\( (7, 2.875) \\).',
                    workingLatex: '\\log b = \\frac{2.875 - 0.778}{7 - 1} = \\frac{2.097}{6} \\approx 0.350',
                    explanation: 'Gradient = \\( \\log b \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the vertical intercept (where \\( t = 0 \\)).',
                    workingLatex: '\\log k = 0.778 - 0.350 \\times 1 = 0.428',
                    explanation: 'Substitute into \\( \\log y = t\\log b + \\log k \\).'
                },
                {
                    stepNumber: 4,
                    description: '(c) Find \\( k \\) and \\( b \\).',
                    workingLatex: 'b = 10^{0.350} \\approx 2.24 \\qquad k = 10^{0.428} \\approx 2.68',
                    explanation: 'Apply \\( 10^{\\square} \\) to each log value.'
                }
            ],
            finalAnswer: '(b) Gradient \\( \\approx 0.350 \\), intercept \\( \\approx 0.428 \\) \\quad (c) \\( k \\approx 2.68 \\), \\( b \\approx 2.24 \\)'
        }
    },
    {
        id: 'el6-014',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 14',
        difficulty: 'Foundation',
        questionText: 'The table below gives values of \\( x \\) and \\( y \\) which satisfy \\( y = ax^n \\).\n\n\n\n \\(\\begin{array}{|c|c|c|c|c|}\\hline x & 2 & 4 & 8 & 16 \\\\\\hline y & 12 & 34 & 96 & 271 \\\\\\hline\\end{array}\\)\n\n\n\n (a) Complete the table of \\( \\log x \\) and \\( \\log y \\) values.\n\n (b) Find the gradient and vertical intercept of \\( \\log y \\) against \\( \\log x \\).\n\n (c) Find \\( a \\) and \\( n \\) to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = ax^n', 'table', 'find a and n'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Compute \\( \\log x \\) and \\( \\log y \\).',
                    workingLatex: '\\begin{array}{c|c|c|c|c} \\log x & 0.301 & 0.602 & 0.903 & 1.204 \\\\ \\log y & 1.079 & 1.531 & 1.982 & 2.433 \\end{array}',
                    explanation: 'Take \\( \\log_{10} \\) of each value.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Calculate the gradient using the first and last points.',
                    workingLatex: 'n = \\frac{2.433 - 1.079}{1.204 - 0.301} = \\frac{1.354}{0.903} \\approx 1.50',
                    explanation: 'Gradient of \\( \\log y \\) vs \\( \\log x \\) = \\( n \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the intercept.',
                    workingLatex: '\\log a = 1.079 - 1.50 \\times 0.301 = 1.079 - 0.452 = 0.627',
                    explanation: 'Substitute the first point.'
                },
                {
                    stepNumber: 4,
                    description: '(c) Find \\( a \\) and \\( n \\).',
                    workingLatex: 'n \\approx 1.50, \\quad a = 10^{0.627} \\approx 4.24',
                    explanation: '\\( 10^{0.627} \\approx 4.24 \\).'
                }
            ],
            finalAnswer: '(c) \\( n \\approx 1.50 \\), \\( a \\approx 4.24 \\), so \\( y \\approx 4.24x^{1.5} \\)'
        }
    },
    {
        id: 'el6-015',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 15',
        difficulty: 'Foundation',
        questionText: 'The activity \\( x \\) (Bq) of a radioactive substance at time \\( t \\) (days) satisfies \\( x = kb^t \\). The measurements are:\n\n\n\n \\(\\begin{array}{|c|c|c|c|c|}\\hline t & 10 & 20 & 40 & 80 \\\\\\hline x & 500 & 250 & 62.5 & 15.6 \\\\\\hline\\end{array}\\)\n\n\n\n (a) Find \\( \\log_{10} x \\) for each value of \\( t \\).\n\n (b) Plot \\( \\log x \\) against \\( t \\) and draw a line of best fit.\n\n (c) Find \\( k \\) and \\( b \\). Give your answers to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = kb^t', 'radioactive decay', 'table', 'find k and b'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Compute \\( \\log x \\) for each value.',
                    workingLatex: '\\log 500 \\approx 2.699, \\quad \\log 250 \\approx 2.398, \\quad \\log 62.5 \\approx 1.796, \\quad \\log 15.6 \\approx 1.193',
                    explanation: 'Use a calculator.'
                },
                {
                    stepNumber: 2,
                    description: '(c) Gradient using points \\( (10, 2.699) \\) and \\( (80, 1.193) \\).',
                    workingLatex: '\\log b = \\frac{1.193 - 2.699}{80 - 10} = \\frac{-1.506}{70} \\approx -0.02151',
                    explanation: 'Gradient = \\( \\log b \\); negative as this is decay.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( \\log k \\) from the intercept.',
                    workingLatex: '\\log k = 2.699 - (-0.02151)(10) = 2.699 + 0.2151 = 2.914 \\Rightarrow k = 10^{2.914} \\approx 821',
                    explanation: 'Substitute the first point into \\( \\log x = t\\log b + \\log k \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( b \\).',
                    workingLatex: 'b = 10^{-0.02151} \\approx 0.951',
                    explanation: '\\( b < 1 \\) confirms this is decay.'
                }
            ],
            finalAnswer: '(c) \\( k \\approx 821 \\), \\( b \\approx 0.951 \\)'
        }
    },
    // TYPE D (Q16–20): Using the model to predict values / find x from y
    {
        id: 'el6-016',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 16',
        difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( \\log x \\) gives a straight line with equation \\( \\log y = 2\\log x + 0.6 \\).\n\n (a) Find \\( y \\) when \\( x = 5 \\).\n\n (b) Find \\( x \\) when \\( y = 200 \\). Give your answers to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'predict', 'find x from y', 'log y vs log x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'First identify \\( a \\) and \\( n \\).',
                    workingLatex: 'n = 2, \\quad a = 10^{0.6} \\approx 3.98, \\quad \\text{so } y \\approx 3.98x^2',
                    explanation: 'Reading gradient and intercept from the line equation.'
                },
                {
                    stepNumber: 2,
                    description: '(a) Substitute \\( x = 5 \\).',
                    workingLatex: 'y \\approx 3.98 \\times 25 = 99.5',
                    explanation: 'Or substitute into the log equation: \\( \\log y = 2\\log 5 + 0.6 = 2(0.699) + 0.6 = 1.998 \\Rightarrow y = 10^{1.998} \\approx 99.5 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Set \\( y = 200 \\) and solve.',
                    workingLatex: '\\log 200 = 2\\log x + 0.6 \\Rightarrow 2.301 = 2\\log x + 0.6 \\Rightarrow \\log x = \\frac{1.701}{2} = 0.8505 \\Rightarrow x = 10^{0.8505} \\approx 7.09',
                    explanation: 'Substitute \\( \\log y = \\log 200 \\) and solve for \\( \\log x \\).'
                }
            ],
            finalAnswer: '(a) \\( y \\approx 99.5 \\) \\quad (b) \\( x \\approx 7.09 \\)'
        }
    },
    {
        id: 'el6-017',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 17',
        difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( x \\) gives the equation \\( \\log y = 0.2x + 1.3 \\).\n\n (a) Find \\( y \\) when \\( x = 3 \\).\n\n (b) Find \\( x \\) when \\( y = 1000 \\). Give your answers to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = kb^x', 'predict', 'find x from y'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( x = 3 \\).',
                    workingLatex: '\\log y = 0.2(3) + 1.3 = 0.6 + 1.3 = 1.9 \\Rightarrow y = 10^{1.9} \\approx 79.4',
                    explanation: 'Direct substitution into the linearised equation.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( y = 1000 \\).',
                    workingLatex: '\\log(1000) = 0.2x + 1.3 \\Rightarrow 3 = 0.2x + 1.3 \\Rightarrow 0.2x = 1.7 \\Rightarrow x = 8.5',
                    explanation: '\\( \\log 1000 = 3 \\). Solve the resulting linear equation.'
                }
            ],
            finalAnswer: '(a) \\( y \\approx 79.4 \\) \\quad (b) \\( x = 8.5 \\)'
        }
    },
    {
        id: 'el6-018',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 18',
        difficulty: 'Foundation',
        questionText: 'The number of subscribers \\( S \\) to a blog after \\( t \\) weeks satisfies \\( S = at^b \\). A graph of \\( \\log S \\) against \\( \\log t \\) is a straight line passing through \\( (0.5, 2.1) \\) and \\( (1.5, 3.3) \\).\n\n (a) Find \\( a \\) and \\( b \\).\n\n (b) Predict the number of subscribers after 20 weeks.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = ax^n', 'predict', 'subscribers model'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Find the gradient \\( b \\).',
                    workingLatex: 'b = \\frac{3.3 - 2.1}{1.5 - 0.5} = \\frac{1.2}{1.0} = 1.2',
                    explanation: 'Gradient = \\( n = b \\) in this model.'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( \\log a \\) using point \\( (0.5, 2.1) \\).',
                    workingLatex: '2.1 = 1.2 \\times 0.5 + \\log a \\Rightarrow \\log a = 2.1 - 0.6 = 1.5 \\Rightarrow a = 10^{1.5} \\approx 31.6',
                    explanation: 'Substitute into \\( \\log S = b\\log t + \\log a \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Predict at \\( t = 20 \\).',
                    workingLatex: 'S = 31.6 \\times 20^{1.2} \\approx 31.6 \\times 36.41 \\approx 1150',
                    explanation: '\\( 20^{1.2} \\approx 36.41 \\); evaluate using a calculator. Equivalently, \\( \\log S = 1.2\\log 20 + 1.5 = 1.2(1.301) + 1.5 = 3.061 \\Rightarrow S \\approx 10^{3.061} \\approx 1150 \\).'
                }
            ],
            finalAnswer: '(a) \\( b = 1.2 \\), \\( a \\approx 31.6 \\) \\quad (b) \\approx 1150 \\text{ subscribers}'
        }
    },
    {
        id: 'el6-019',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 19',
        difficulty: 'Foundation',
        questionText: 'The value £\\( V \\) of a machine \\( t \\) years after purchase satisfies \\( V = pq^t \\). A graph of \\( \\log V \\) against \\( t \\) passes through \\( (0, 4.3) \\) and \\( (10, 3.1) \\).\n\n (a) Find \\( p \\) and \\( q \\) to 3 s.f.\n\n (b) Find the value of the machine after 7 years.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = kb^x', 'depreciation', 'predict'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Vertical intercept gives \\( \\log p \\).',
                    workingLatex: '\\log p = 4.3 \\Rightarrow p = 10^{4.3} \\approx 19\\,953',
                    explanation: 'Point \\( (0, 4.3) \\) is on the \\( \\log V \\)-axis.'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient gives \\( \\log q \\).',
                    workingLatex: '\\log q = \\frac{3.1 - 4.3}{10 - 0} = \\frac{-1.2}{10} = -0.12 \\Rightarrow q = 10^{-0.12} \\approx 0.759',
                    explanation: 'Gradient = \\( \\log q \\); negative since this is depreciation.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Substitute \\( t = 7 \\).',
                    workingLatex: '\\log V = -0.12(7) + 4.3 = -0.84 + 4.3 = 3.46 \\Rightarrow V = 10^{3.46} \\approx £2884',
                    explanation: 'Use the linearised equation directly: substitute \\( t = 7 \\) and apply \\( 10^{\\square} \\). Equivalently, \\( V = 19\\,953 \\times 0.759^{7} \\approx 19\\,953 \\times 0.145 \\approx £2890 \\) (small difference due to rounding \\( q \\)).'
                }
            ],
            finalAnswer: '(a) \\( p \\approx 19\\,953 \\), \\( q \\approx 0.759 \\) \\quad (b) \\approx £2884'
        }
    },
    {
        id: 'el6-020',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 20',
        difficulty: 'Foundation',
        questionText: 'The pressure \\( P \\) (Pa) and volume \\( V \\) (m³) of a gas satisfy \\( P = kV^n \\). A graph of \\( \\log P \\) against \\( \\log V \\) has gradient \\( -1.4 \\) and passes through the point \\( (0.5, 3.8) \\).\n\n (a) Find \\( k \\) and \\( n \\).\n\n (b) Find \\( P \\) when \\( V = 0.2 \\). Give your answer to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = ax^n', 'find k and n', 'predict'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Gradient = \\( n \\).',
                    workingLatex: 'n = -1.4',
                    explanation: 'Read directly from the gradient.'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( \\log k \\) using point \\( (0.5, 3.8) \\).',
                    workingLatex: '3.8 = -1.4(0.5) + \\log k \\Rightarrow \\log k = 3.8 + 0.7 = 4.5 \\Rightarrow k = 10^{4.5} \\approx 31\\,623',
                    explanation: 'Substitute into the linearised equation.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Substitute \\( V = 0.2 \\).',
                    workingLatex: '\\log P = -1.4\\log(0.2) + 4.5 = -1.4(-0.699) + 4.5 = 0.979 + 4.5 = 5.479 \\Rightarrow P = 10^{5.479} \\approx 301\\,000',
                    explanation: '\\( \\log 0.2 = \\log(1/5) = -\\log 5 \\approx -0.699 \\).'
                }
            ],
            finalAnswer: '(a) \\( n = -1.4 \\), \\( k \\approx 31\\,623 \\) \\quad (b) \\( P \\approx 301\\,000 \\) Pa'
        }
    },
    // TYPE E (Q21–24): Sketching log-linearised graphs
    {
        id: 'el6-021',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 21',
        difficulty: 'Foundation',
        questionText: 'The relationship between \\( x \\) and \\( y \\) is \\( y = 5 \\times 4^x \\).\n\n (a) Show that a graph of \\( \\log y \\) against \\( x \\) will be a straight line.\n\n (b) State the gradient and vertical intercept of this straight line.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = kb^x', 'linearise', 'state gradient and intercept'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Take \\( \\log_{10} \\) of \\( y = 5 \\times 4^x \\).',
                    workingLatex: '\\log y = \\log 5 + x\\log 4',
                    explanation: 'Using the product law and power law.'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the straight-line form.',
                    workingLatex: '\\log y = (\\log 4)x + \\log 5',
                    explanation: 'This is \\( Y = mX + c \\) where \\( Y = \\log y \\) and \\( X = x \\). Since \\( m \\) and \\( c \\) are constants, this is a straight line. \\checkmark'
                },
                {
                    stepNumber: 3,
                    description: '(b) State gradient and intercept.',
                    workingLatex: '\\text{Gradient} = \\log 4 \\approx 0.602 \\qquad \\text{Intercept} = \\log 5 \\approx 0.699',
                    explanation: 'Evaluate numerically.'
                }
            ],
            finalAnswer: '(b) Gradient \\( = \\log 4 \\approx 0.602 \\); vertical intercept \\( = \\log 5 \\approx 0.699 \\)'
        }
    },
    {
        id: 'el6-022',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 22',
        difficulty: 'Foundation',
        questionText: 'The height \\( h \\) (m) and mass \\( m \\) (kg) of several trees satisfy \\( h = 2m^{0.4} \\).\n\n (a) Write the equation in linear form suitable for plotting \\( \\log h \\) against \\( \\log m \\).\n\n (b) State the gradient and vertical intercept.\n\n (c) Describe the graph of \\( h \\) against \\( m \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = ax^n', 'linearise', 'describe original graph'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Take \\( \\log \\) of both sides.',
                    workingLatex: '\\log h = 0.4\\log m + \\log 2',
                    explanation: 'Using the power law and product law.'
                },
                {
                    stepNumber: 2,
                    description: '(b) State gradient and intercept.',
                    workingLatex: '\\text{Gradient} = 0.4 \\qquad \\text{Intercept} = \\log 2 \\approx 0.301',
                    explanation: 'Read directly from the linearised equation.'
                },
                {
                    stepNumber: 3,
                    description: '(c) The original graph \\( h = 2m^{0.4} \\) is a curve.',
                    workingLatex: 'h = 2m^{0.4} \\text{ — a power curve passing through } (1, 2)',
                    explanation: 'Since \\( 0 < n < 1 \\), the curve is concave (increasing but at a decreasing rate).'
                }
            ],
            finalAnswer: '(a) \\( \\log h = 0.4\\log m + \\log 2 \\) \\quad (b) Gradient \\( 0.4 \\); intercept \\( \\approx 0.301 \\) \\quad (c) An increasing concave power curve.'
        }
    },
    {
        id: 'el6-023',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 23',
        difficulty: 'Foundation',
        questionText: 'A tank is being filled with water. After \\( s \\) seconds the height \\( h \\) mm of water satisfies \\( h = 3 \\times 2^s \\).\n\n (a) Write this in linear form for a graph of \\( \\log h \\) against \\( s \\).\n\n (b) Explain which graph — \\( h \\) against \\( s \\) or \\( \\log h \\) against \\( s \\) — is more useful for calculations.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = kb^x', 'linearise', 'which graph is more useful'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Take \\( \\log \\) of \\( h = 3 \\times 2^s \\).',
                    workingLatex: '\\log h = s\\log 2 + \\log 3',
                    explanation: '\\( \\log(3 \\times 2^s) = \\log 3 + s\\log 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Compare the two graphs.',
                    workingLatex: '\\log h \\text{ vs } s \\text{ is a straight line; } h \\text{ vs } s \\text{ is an exponential curve.}',
                    explanation: 'A straight line is easier to work with: gradient and intercept can be read off directly, and the line of best fit is more reliable. Reading values off a straight line is more accurate than off a curve.'
                }
            ],
            finalAnswer: '(a) \\( \\log h = s\\log 2 + \\log 3 \\) \\quad (b) The graph of \\( \\log h \\) against \\( s \\) is more useful — it is a straight line, making values and the line of best fit easier to determine.'
        }
    },
    {
        id: 'el6-024',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 24',
        difficulty: 'Foundation',
        questionText: 'The population \\( p \\) of bacteria after \\( t \\) hours satisfies \\( p = 50e^{0.3t} \\).\n\n (a) Write this in linear form for a graph of \\( \\ln p \\) against \\( t \\).\n\n (b) State the gradient and vertical intercept of the straight-line graph.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = ke^ct', 'ln y vs x', 'linearise'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Take \\( \\ln \\) of both sides.',
                    workingLatex: '\\ln p = \\ln(50e^{0.3t}) = \\ln 50 + 0.3t',
                    explanation: 'Using the product law: \\( \\ln(50e^{0.3t}) = \\ln 50 + \\ln(e^{0.3t}) = \\ln 50 + 0.3t \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Identify gradient and intercept.',
                    workingLatex: '\\text{Gradient} = 0.3 \\qquad \\text{Intercept} = \\ln 50 \\approx 3.91',
                    explanation: 'Gradient = coefficient of \\( t \\); intercept = \\( \\ln k \\).'
                }
            ],
            finalAnswer: '(a) \\( \\ln p = 0.3t + \\ln 50 \\) \\quad (b) Gradient \\( = 0.3 \\); intercept \\( = \\ln 50 \\approx 3.91 \\)'
        }
    },
    // TYPE F (Q25–28): Two models on the same log graph — finding intersection
    {
        id: 'el6-025',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 25',
        difficulty: 'Foundation',
        questionText: 'Two populations are modelled by \\( \\ln P \\) against \\( t \\) graphs.\n\n Population A: \\( \\ln P = 0.2t + 4 \\)\n\n Population B: \\( \\ln P = -0.1t + 7 \\)\n\n (a) Find the time \\( t \\) when the populations are equal.\n\n (b) Find the common population at this time. Give your answer to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'two models', 'intersection', 'ln y vs x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) The populations are equal when the lines intersect.',
                    workingLatex: '0.2t + 4 = -0.1t + 7',
                    explanation: 'Set the two expressions for \\( \\ln P \\) equal.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\( t \\).',
                    workingLatex: '0.3t = 3 \\Rightarrow t = 10',
                    explanation: 'Collect \\( t \\) terms and divide.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Find the common \\( \\ln P \\) and then \\( P \\).',
                    workingLatex: '\\ln P = 0.2(10) + 4 = 6 \\Rightarrow P = e^6 \\approx 403',
                    explanation: 'Substitute \\( t = 10 \\) into either equation.'
                }
            ],
            finalAnswer: '(a) \\( t = 10 \\) \\quad (b) \\( P = e^6 \\approx 403 \\)'
        }
    },
    {
        id: 'el6-026',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 26',
        difficulty: 'Foundation',
        questionText: 'Two rival blogs have subscriber counts modelled as follows (where \\( t \\) is days):\n\n Blog A (growing): \\( \\log S = 0.08t + 2 \\)\n\n Blog B (declining): \\( \\log S = -0.04t + 3.5 \\)\n\n (a) Find the number of subscribers each blog starts with.\n\n (b) Find the day on which both blogs have the same number of subscribers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'two models', 'intersection', 'log y vs x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) At \\( t = 0 \\), find each initial subscriber count.',
                    workingLatex: '\\text{Blog A: } \\log S = 2 \\Rightarrow S = 100 \\qquad \\text{Blog B: } \\log S = 3.5 \\Rightarrow S = 10^{3.5} \\approx 3162',
                    explanation: 'Substitute \\( t = 0 \\) into each equation.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set the two equations equal.',
                    workingLatex: '0.08t + 2 = -0.04t + 3.5 \\Rightarrow 0.12t = 1.5 \\Rightarrow t = 12.5',
                    explanation: 'Equal \\( \\log S \\) values mean equal \\( S \\) values.'
                }
            ],
            finalAnswer: '(a) Blog A: 100 subscribers; Blog B: \\approx 3162 subscribers \\quad (b) Day 12.5 (i.e. during day 13)'
        }
    },
    {
        id: 'el6-027',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 27',
        difficulty: 'Foundation',
        questionText: 'Two animal populations on an island are modelled by \\( \\ln N \\) against \\( t \\) (years) graphs:\n\n Deer: \\( \\ln N = 0.15t + 5 \\)\n\n Wolves: \\( \\ln N = 0.25t + 3 \\)\n\n (a) Find the initial population of each species.\n\n (b) Find the year \\( t \\) when the wolf population overtakes the deer population.\n\n (c) Find the combined population at this point. Give your answer to the nearest whole number.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'two models', 'intersection', 'combined population'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) At \\( t = 0 \\).',
                    workingLatex: '\\text{Deer: } N = e^5 \\approx 148 \\qquad \\text{Wolves: } N = e^3 \\approx 20',
                    explanation: 'Substitute \\( t = 0 \\) into each equation.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( \\ln N \\) values equal.',
                    workingLatex: '0.15t + 5 = 0.25t + 3 \\Rightarrow 2 = 0.1t \\Rightarrow t = 20',
                    explanation: 'The wolves overtake the deer when the lines intersect.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Find each population at \\( t = 20 \\).',
                    workingLatex: '\\ln N = 0.15(20) + 5 = 8 \\Rightarrow N = e^8 \\approx 2981',
                    explanation: 'Both models give the same \\( N \\) at the intersection.'
                },
                {
                    stepNumber: 4,
                    description: 'Combined population.',
                    workingLatex: '2 \\times e^8 \\approx 2 \\times 2981 = 5962',
                    explanation: 'Both species have the same population at the intersection.'
                }
            ],
            finalAnswer: '(a) Deer \\approx 148, Wolves \\approx 20 \\quad (b) \\( t = 20 \\) years \\quad (c) \\approx 5962'
        }
    },
    {
        id: 'el6-028',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 28',
        difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( \\log x \\) is a straight line passing through \\( (0.4, 1.0) \\) and \\( (1.2, 2.6) \\).\n\n (a) Find the equation of the line.\n\n (b) Hence write down the equation relating \\( y \\) and \\( x \\) in the form \\( y = ax^n \\).\n\n (c) Find \\( y \\) when \\( x = 50 \\). Give your answer to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = ax^n', 'find equation of line', 'predict'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Find the gradient.',
                    workingLatex: 'n = \\frac{2.6 - 1.0}{1.2 - 0.4} = \\frac{1.6}{0.8} = 2',
                    explanation: 'Gradient = \\( n \\) in \\( y = ax^n \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the intercept.',
                    workingLatex: '\\log a = 1.0 - 2(0.4) = 1.0 - 0.8 = 0.2',
                    explanation: 'Substitute point \\( (0.4, 1.0) \\) into \\( \\log y = n\\log x + \\log a \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the line equation.',
                    workingLatex: '\\log y = 2\\log x + 0.2',
                    explanation: 'Straight-line equation in log form.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Convert back to original form.',
                    workingLatex: 'a = 10^{0.2} \\approx 1.58 \\Rightarrow y \\approx 1.58x^2',
                    explanation: 'Apply \\( 10^{\\square} \\) to the intercept.'
                },
                {
                    stepNumber: 5,
                    description: '(c) Substitute \\( x = 50 \\).',
                    workingLatex: 'y \\approx 1.58 \\times 50^2 = 1.58 \\times 2500 = 3950',
                    explanation: 'Or use \\( \\log y = 2\\log 50 + 0.2 = 2(1.699) + 0.2 = 3.598 \\Rightarrow y = 10^{3.598} \\approx 3960 \\).'
                }
            ],
            finalAnswer: '(a) \\( \\log y = 2\\log x + 0.2 \\) \\quad (b) \\( y \\approx 1.58x^2 \\) \\quad (c) \\( y \\approx 3950 \\)'
        }
    },
    // TYPE G (Q29–32): Limitations and interpretation
    {
        id: 'el6-029',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 29',
        difficulty: 'Foundation',
        questionText: 'A model \\( y = 10 \\times 3^x \\) is used to predict the number of users \\( y \\) of a social network after \\( x \\) months.\n\n (a) Write the model in the form \\( \\log y = mx + c \\).\n\n (b) Describe one limitation of this model over a long time period.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'linearise', 'limitation', 'y = kb^x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Take \\( \\log \\) of both sides.',
                    workingLatex: '\\log y = x\\log 3 + \\log 10 = (\\log 3)x + 1',
                    explanation: '\\( \\log 10 = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Describe the limitation.',
                    workingLatex: '\\text{As } x \\to \\infty, \\; y \\to \\infty',
                    explanation: 'The model predicts unlimited user growth. In reality, the number of users is capped by the world\'s population and growth slows as the market saturates.'
                }
            ],
            finalAnswer: '(a) \\( \\log y = (\\log 3)x + 1 \\) \\quad (b) The model predicts unlimited growth, which is unrealistic — user numbers would saturate once the available population is reached.'
        }
    },
    {
        id: 'el6-030',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 30',
        difficulty: 'Foundation',
        questionText: 'A student plots \\( \\log y \\) against \\( \\log x \\) for a data set and obtains a straight line. They conclude the data follows \\( y = ax^n \\).\n\n Another student plots \\( \\log y \\) against \\( x \\) for the same data and also obtains a straight line. They conclude the data follows \\( y = kb^x \\).\n\n (a) Explain how both students can be correct.\n\n (b) Describe how you would distinguish between the two models experimentally.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'compare models', 'interpret', 'distinguish'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Both linearisations can sometimes give approximate straight lines for finite data sets with noise.',
                    workingLatex: '\\text{If } y = ax^n: \\log y = n\\log x + \\log a \\qquad \\text{If } y = kb^x: \\log y = x\\log b + \\log k',
                    explanation: 'For limited data ranges, either model might appear linear.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Plot both graphs and assess goodness of fit.',
                    workingLatex: '\\text{Plot } \\log y \\text{ vs } \\log x \\text{ AND } \\log y \\text{ vs } x; \\text{ the better straight line identifies the model.}',
                    explanation: 'The model whose linearised graph fits the data more closely (e.g. has points closer to the line of best fit) is the more appropriate model. The residuals should be examined.'
                }
            ],
            finalAnswer: '(a) With limited data, both transforms may approximate a straight line. (b) Plot both linearised graphs and choose the one whose points lie closer to a straight line of best fit.'
        }
    },
    // TYPE H (Q31–35): Exam-style multi-part questions
    {
        id: 'el6-031',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 31',
        difficulty: 'Foundation',
        questionText: 'The number of employees \\( p \\) in a company \\( t \\) years after it was founded is modelled by \\( p = at^b \\). The table of values below is given:\n\n\n\n \\(\\begin{array}{|c|c|c|c|c|c|}\\hline t & 2 & 5 & 10 & 20 & 40 \\\\\\hline p & 15 & 28 & 45 & 72 & 114 \\\\\\hline\\end{array}\\)\n\n\n\n (a) Copy and complete a table of \\( \\log t \\) and \\( \\log p \\) values to 3 d.p.\n\n (b) Plot a linear graph and draw a line of best fit.\n\n (c) Find the values of \\( a \\) and \\( b \\).\n\n (d) Predict the number of employees after 60 years.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = ax^n', 'table', 'find a and b', 'predict', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Compute \\( \\log t \\) and \\( \\log p \\).',
                    workingLatex: '\\begin{array}{c|c|c|c|c|c} \\log t & 0.301 & 0.699 & 1.000 & 1.301 & 1.602 \\\\ \\log p & 1.176 & 1.447 & 1.653 & 1.857 & 2.057 \\end{array}',
                    explanation: 'Take \\( \\log_{10} \\) of each value of \\( t \\) and \\( p \\).'
                },
                {
                    stepNumber: 2,
                    description: '(c) Gradient using first and last points.',
                    workingLatex: 'b = \\frac{2.057 - 1.176}{1.602 - 0.301} = \\frac{0.881}{1.301} \\approx 0.677',
                    explanation: 'Gradient = \\( b \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( \\log a \\).',
                    workingLatex: '\\log a = 1.176 - 0.677(0.301) = 1.176 - 0.204 = 0.972 \\Rightarrow a = 10^{0.972} \\approx 9.38',
                    explanation: 'Substitute the first data point.'
                },
                {
                    stepNumber: 4,
                    description: '(d) Predict at \\( t = 60 \\).',
                    workingLatex: 'p = 9.38 \\times 60^{0.677} \\approx 9.38 \\times 15.99 \\approx 150',
                    explanation: '\\( 60^{0.677} \\approx 15.99 \\); evaluate using a calculator. Equivalently, \\( \\log p = 0.677\\log 60 + 0.972 = 0.677(1.778) + 0.972 \\approx 2.176 \\Rightarrow p \\approx 10^{2.176} \\approx 150 \\).'
                }
            ],
            finalAnswer: '(c) \\( b \\approx 0.677 \\), \\( a \\approx 9.38 \\) \\quad (d) \\approx 150 \\text{ employees}'
        }
    },
    {
        id: 'el6-032',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 32',
        difficulty: 'Foundation',
        questionText: 'The value £\\( V \\) of a piece of equipment \\( t \\) years old is modelled by \\( V = pq^t \\). A graph of \\( \\log V \\) against \\( t \\) has gradient \\( -\\frac{1}{5} \\) and passes through \\( (0, 4) \\).\n\n (a) Find \\( p \\) and \\( q \\) to 3 s.f.\n\n (b) Find the age at which the equipment is worth less than £1000.\n\n (c) Write an equation for the linear graph and state the axes that should be plotted.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = kb^x', 'depreciation', 'solve for t', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Vertical intercept gives \\( \\log p \\).',
                    workingLatex: '\\log p = 4 \\Rightarrow p = 10^4 = 10\\,000',
                    explanation: 'The intercept of \\( \\log V \\) axis.'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient gives \\( \\log q \\).',
                    workingLatex: '\\log q = -0.2 \\Rightarrow q = 10^{-0.2} \\approx 0.631',
                    explanation: 'Gradient = \\( \\log q \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Set \\( V = 1000 \\) and use the linear graph.',
                    workingLatex: '\\log(1000) = -0.2t + 4 \\Rightarrow 3 = -0.2t + 4 \\Rightarrow 0.2t = 1 \\Rightarrow t = 5',
                    explanation: 'Substitute \\( \\log V = 3 \\) into the line equation.'
                },
                {
                    stepNumber: 4,
                    description: '(c) The linear equation.',
                    workingLatex: '\\log V = -0.2t + 4 \\quad \\text{Plot } \\log V \\text{ against } t',
                    explanation: 'Plot \\( \\log_{10} V \\) on the vertical axis and \\( t \\) on the horizontal axis.'
                }
            ],
            finalAnswer: '(a) \\( p = 10\\,000 \\), \\( q \\approx 0.631 \\) \\quad (b) After \\( t = 5 \\) years \\quad (c) \\( \\log V = -0.2t + 4 \\); plot \\( \\log V \\) against \\( t \\)'
        }
    },
    {
        id: 'el6-033',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 33',
        difficulty: 'Foundation',
        questionText: 'The number of bacteria \\( p \\) (in thousands) in a petri dish after \\( t \\) days satisfies \\( p = at^b \\). Observations give:\n\n\n\n \\(\\begin{array}{|c|c|c|c|c|}\\hline t & 1 & 3 & 6 & 9 \\\\\\hline p & 2 & 14 & 44 & 88 \\\\\\hline\\end{array}\\)\n\n\n\n (a) Plot a linear graph of \\( \\log p \\) against \\( \\log t \\) using the data.\n\n (b) Find \\( a \\) and \\( b \\) to 3 s.f.\n\n (c) Predict the number of bacteria after 15 days.\n\n (d) Describe one reason why the model may not be appropriate after many days.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = ax^n', 'bacteria', 'table', 'limitation', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Compute \\( \\log t \\) and \\( \\log p \\).',
                    workingLatex: '\\begin{array}{c|c|c|c|c} \\log t & 0 & 0.477 & 0.778 & 0.954 \\\\ \\log p & 0.301 & 1.146 & 1.643 & 1.944 \\end{array}',
                    explanation: 'Take \\( \\log_{10} \\) of each value.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Gradient using first and last points.',
                    workingLatex: 'b = \\frac{1.944 - 0.301}{0.954 - 0} = \\frac{1.643}{0.954} \\approx 1.72',
                    explanation: 'Gradient = \\( b \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( \\log a \\) at \\( \\log t = 0 \\).',
                    workingLatex: '\\log a = 0.301 \\Rightarrow a = 10^{0.301} \\approx 2.00',
                    explanation: 'When \\( \\log t = 0 \\) (i.e. \\( t = 1 \\)), \\( \\log p = \\log a \\).'
                },
                {
                    stepNumber: 4,
                    description: '(c) Predict at \\( t = 15 \\).',
                    workingLatex: 'p = 2.00 \\times 15^{1.72} \\approx 2.00 \\times 105.4 \\approx 211 \\text{ thousand}',
                    explanation: '\\( 15^{1.72} \\approx 105.4 \\); evaluate using a calculator. Equivalently, \\( \\log p = 1.72\\log 15 + 0.301 \\approx 1.72(1.176) + 0.301 \\approx 2.324 \\Rightarrow p \\approx 10^{2.324} \\approx 211 \\) thousand.'
                },
                {
                    stepNumber: 5,
                    description: '(d) Describe a limitation.',
                    workingLatex: 'p \\to \\infty \\text{ as } t \\to \\infty',
                    explanation: 'Nutrients in the petri dish would eventually be exhausted, limiting growth. The model ignores resource constraints.'
                }
            ],
            finalAnswer: '(b) \\( b \\approx 1.72 \\), \\( a \\approx 2.00 \\) \\quad (c) \\approx 211\\,000 \\text{ bacteria} \\quad (d) Nutrient depletion would slow/stop growth — the model allows unlimited increase.'
        }
    },
    {
        id: 'el6-034',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 34',
        difficulty: 'Foundation',
        questionText: 'A scientist measures the speed \\( v \\) (m/s) of a chemical reaction at temperature \\( T \\) (K). She believes \\( v = aT^n \\). A graph of \\( \\log v \\) against \\( \\log T \\) gives a straight line with equation \\( \\log v = 2.5\\log T - 5.4 \\).\n\n (a) Find \\( a \\) and \\( n \\) to 3 s.f.\n\n (b) Find \\( v \\) when \\( T = 400 \\) K.\n\n (c) Find \\( T \\) when \\( v = 80 \\). Give your answer to 3 s.f.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'y = ax^n', 'given line equation', 'find a and n', 'predict', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Read off \\( n \\) and find \\( a \\).',
                    workingLatex: 'n = 2.5 \\qquad \\log a = -5.4 \\Rightarrow a = 10^{-5.4} \\approx 3.98 \\times 10^{-6}',
                    explanation: 'Gradient = \\( n \\); intercept = \\( \\log a \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( T = 400 \\).',
                    workingLatex: '\\log v = 2.5\\log(400) - 5.4 = 2.5(2.602) - 5.4 = 6.505 - 5.4 = 1.105 \\Rightarrow v = 10^{1.105} \\approx 12.7 \\text{ m/s}',
                    explanation: '\\( \\log 400 \\approx 2.602 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(c) Set \\( v = 80 \\) and solve.',
                    workingLatex: '\\log 80 = 2.5\\log T - 5.4 \\Rightarrow 1.903 = 2.5\\log T - 5.4 \\Rightarrow 2.5\\log T = 7.303 \\Rightarrow \\log T = 2.921 \\Rightarrow T = 10^{2.921} \\approx 834 \\text{ K}',
                    explanation: '\\( \\log 80 \\approx 1.903 \\). Solve for \\( \\log T \\) then apply \\( 10^{\\square} \\).'
                }
            ],
            finalAnswer: '(a) \\( n = 2.5 \\), \\( a \\approx 3.98 \\times 10^{-6} \\) \\quad (b) \\( v \\approx 12.7 \\) m/s \\quad (c) \\( T \\approx 834 \\) K'
        }
    },
    {
        id: 'el6-035',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 35',
        difficulty: 'Foundation',
        questionText: 'The populations (in thousands) of rabbits \\( R \\) and foxes \\( F \\) on an island are modelled by straight-line graphs of \\( \\ln N \\) against \\( t \\) (years):\n\n Rabbits: \\( \\ln R = -0.08t + 8 \\)\n\n Foxes: \\( \\ln F = 0.12t + 4 \\)\n\n (a) Find the initial population of each species. Give your answers to 3 s.f.\n\n (b) Find the year \\( t \\) when both populations are equal.\n\n (c) Find the combined population at this time. Give your answer to 3 s.f.\n\n (d) Explain why the rabbit model may not be appropriate for large \\( t \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['logarithmic graphs', 'two models', 'ln y vs x', 'intersection', 'combined population', 'limitation', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Initial populations at \\( t = 0 \\).',
                    workingLatex: '\\ln R = 8 \\Rightarrow R = e^8 \\approx 2981 \\text{ thousand} \\qquad \\ln F = 4 \\Rightarrow F = e^4 \\approx 54.6 \\text{ thousand}',
                    explanation: 'Substitute \\( t = 0 \\) into each equation.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set the two \\( \\ln N \\) expressions equal.',
                    workingLatex: '-0.08t + 8 = 0.12t + 4 \\Rightarrow 4 = 0.2t \\Rightarrow t = 20',
                    explanation: 'Equal \\( \\ln N \\) values imply equal \\( N \\) values.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Find the common population at \\( t = 20 \\).',
                    workingLatex: '\\ln N = -0.08(20) + 8 = -1.6 + 8 = 6.4 \\Rightarrow N = e^{6.4} \\approx 601 \\text{ thousand}',
                    explanation: 'Substitute \\( t = 20 \\) into either equation.'
                },
                {
                    stepNumber: 4,
                    description: 'Combined population.',
                    workingLatex: '2 \\times 601 \\approx 1202 \\text{ thousand} \\approx 1\\,200\\,000',
                    explanation: 'Both populations are equal at this point.'
                },
                {
                    stepNumber: 5,
                    description: '(d) Limitation of the rabbit model.',
                    workingLatex: '\\text{As } t \\to \\infty, \\; \\ln R \\to -\\infty, \\text{ so } R \\to 0',
                    explanation: 'The model predicts the rabbit population tends to zero. In reality, if foxes decline too, the rabbits might recover. The model ignores predator–prey interactions and other ecological factors.'
                }
            ],
            finalAnswer: '(a) Rabbits \\approx 2\\,981\\,000; Foxes \\approx 54\\,600 \\quad (b) \\( t = 20 \\) years \\quad (c) \\approx 1\\,202\\,000 \\quad (d) The model predicts \\( R \\to 0 \\), which may be unrealistic — it ignores ecological interactions that could allow recovery.'
        }
    },

    // ─── Q36–70: Additional Using Logarithmic Graphs ──────────────────────

    {
        id: 'el6-036', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 36', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( \\log x \\) is a straight line with gradient 2 and y-intercept 0.5. Write down the equation connecting \\( y \\) and \\( x \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Line equation', workingLatex: '\\log y = 2\\log x + 0.5', explanation: 'A \\( \\log y \\) vs \\( \\log x \\) plot has the form \\( \\log y = n\\log x + \\log a \\), so read the gradient as \\( n \\) and the vertical intercept as \\( \\log a \\).' },
            { stepNumber: 2, description: 'Convert', workingLatex: '\\log y = \\log x^2 + \\log 10^{0.5} \\implies y = \\sqrt{10} \\cdot x^2 \\approx 3.16x^2', explanation: 'Apply \\( 10^{\\square} \\) to both sides: the power law turns \\( 2\\log x \\) into \\( \\log x^2 \\), and the constant \\( 0.5 \\) becomes \\( 10^{0.5} = \\sqrt{10} \\). So \\( a = 10^{0.5} \\approx 3.16 \\) and \\( n = 2 \\).' }
        ], finalAnswer: 'y = \\sqrt{10} \\cdot x^2' }
    },
    {
        id: 'el6-037', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 37', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( x \\) is a straight line with gradient 0.2 and y-intercept 1. Find \\( k \\) and \\( b \\) in \\( y = kb^x \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Line equation', workingLatex: '\\log y = 0.2x + 1', explanation: 'For \\( y = kb^x \\), taking \\( \\log_{10} \\) gives \\( \\log y = (\\log b)x + \\log k \\). Note this is \\( \\log y \\) vs \\( x \\) (not \\( \\log x \\)) — so gradient is \\( \\log b \\) and intercept is \\( \\log k \\).' },
            { stepNumber: 2, description: 'Convert', workingLatex: 'k = 10^1 = 10; \\quad b = 10^{0.2} \\approx 1.585', explanation: 'Recover \\( k \\) and \\( b \\) by applying \\( 10^{\\square} \\) to the intercept and gradient respectively.' }
        ], finalAnswer: 'k = 10, b = 1.585' }
    },
    {
        id: 'el6-038', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 38', difficulty: 'Foundation',
        questionText: 'Explain why plotting \\( \\log y \\) against \\( \\log x \\) for data following \\( y = ax^n \\) gives a straight line.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log of both sides', workingLatex: '\\log y = \\log(ax^n) = \\log a + n\\log x', explanation: 'Use the product law \\( \\log(ax^n) = \\log a + \\log(x^n) \\), then the power law \\( \\log(x^n) = n\\log x \\). The variable \\( x \\) is "trapped" inside an exponent, but taking logs brings it down as a coefficient.' },
            { stepNumber: 2, description: 'This is linear', workingLatex: '\\log y = n\\log x + \\log a', explanation: 'Compare with \\( Y = mX + c \\) where \\( Y = \\log y \\), \\( X = \\log x \\), \\( m = n \\), \\( c = \\log a \\). Since \\( a \\) and \\( n \\) are constants, both \\( m \\) and \\( c \\) are constants — so the plot of \\( \\log y \\) against \\( \\log x \\) is a straight line.' }
        ], finalAnswer: 'Linear form: log y = n log x + log a; gradient n, intercept log a' }
    },
    {
        id: 'el6-039', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 39', difficulty: 'Foundation',
        questionText: 'Explain why plotting \\( \\log y \\) against \\( x \\) for data following \\( y = kb^x \\) gives a straight line.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log', workingLatex: '\\log y = \\log k + x\\log b', explanation: 'Apply \\( \\log_{10} \\) to both sides of \\( y = kb^x \\), then use the product and power laws. The crucial step: \\( \\log(b^x) = x\\log b \\) — this brings \\( x \\) out of the exponent, making it appear linearly.' },
            { stepNumber: 2, description: 'Linear in x', workingLatex: '\\text{Gradient} = \\log b, \\quad \\text{intercept} = \\log k', explanation: 'Note the axes: this is \\( \\log y \\) against \\( x \\), not \\( \\log x \\). The gradient is \\( \\log b \\) (not \\( b \\) itself) and the intercept is \\( \\log k \\).' }
        ], finalAnswer: 'Linear form: log y = (log b)x + log k' }
    },
    {
        id: 'el6-040', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 40', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\ln y \\) against \\( x \\) has gradient 0.5 and passes through \\( (0, 2) \\). Find the equation in the form \\( y = ke^{cx} \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Line equation', workingLatex: '\\ln y = 0.5x + 2', explanation: 'For \\( y = ke^{cx} \\), taking natural logs gives \\( \\ln y = cx + \\ln k \\); so gradient \\( = c \\) and intercept \\( = \\ln k \\). Here \\( \\ln \\) is consistent throughout because the model uses base \\( e \\).' },
            { stepNumber: 2, description: 'Exponentiate', workingLatex: 'y = e^{0.5x + 2} = e^2 \\cdot e^{0.5x} \\approx 7.39e^{0.5x}', explanation: 'Apply \\( e^{\\square} \\) to both sides, then split using \\( e^{a+b} = e^a e^b \\). So \\( k = e^{2} \\approx 7.39 \\) and \\( c = 0.5 \\).' }
        ], finalAnswer: 'y = e^2 \\cdot e^{0.5x}; k = e^2, c = 0.5' }
    },
    {
        id: 'el6-041', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 41', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( \\log x \\) passes through \\( (0.5, 1.2) \\) and \\( (2.0, 3.0) \\). Find \\( a \\) and \\( n \\) in \\( y = ax^n \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradient', workingLatex: 'n = \\frac{3.0 - 1.2}{2.0 - 0.5} = \\frac{1.8}{1.5} = 1.2', explanation: 'Gradient \\( = \\Delta(\\log y)/\\Delta(\\log x) \\), which equals \\( n \\) in the linearised form \\( \\log y = n\\log x + \\log a \\).' },
            { stepNumber: 2, description: 'Find log a', workingLatex: '1.2 = 1.2(0.5) + \\log a \\implies \\log a = 0.6 \\implies a = 10^{0.6} = 3.98', explanation: 'Substitute either point into \\( \\log y = n\\log x + \\log a \\) and solve for \\( \\log a \\), then apply \\( 10^{\\square} \\) to recover \\( a \\).' }
        ], finalAnswer: 'n = 1.2, a = 3.98' }
    },
    {
        id: 'el6-042', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 42', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( x \\) passes through \\( (0, 1.5) \\) and \\( (4, 3.5) \\). Find \\( k \\) and \\( b \\) in \\( y = kb^x \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradient', workingLatex: '\\log b = \\frac{3.5 - 1.5}{4} = 0.5 \\implies b = 10^{0.5} = \\sqrt{10} \\approx 3.16', explanation: 'For \\( y = kb^x \\), gradient \\( = \\log b \\) — be careful: the gradient is not \\( b \\) itself. Apply \\( 10^{\\square} \\) to recover \\( b \\).' },
            { stepNumber: 2, description: 'k from intercept', workingLatex: 'k = 10^{1.5} \\approx 31.6', explanation: 'Since one of the points is \\( (0, 1.5) \\), this is directly on the \\( \\log y \\)-axis — so the intercept \\( = \\log k = 1.5 \\), giving \\( k = 10^{1.5} \\).' }
        ], finalAnswer: 'k = 31.6, b = 3.16' }
    },
    {
        id: 'el6-043', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 43', difficulty: 'Foundation',
        questionText: 'Data: \\( x = 2, y = 20 \\); \\( x = 5, y = 125 \\). Verify these satisfy \\( y = ax^n \\) and find \\( a \\) and \\( n \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take logs', workingLatex: '\\log 20 = 1.301, \\log 2 = 0.301; \\quad \\log 125 = 2.097, \\log 5 = 0.699', explanation: 'Convert each data point to \\( (\\log x, \\log y) \\) form so we can work with the linearised equation \\( \\log y = n\\log x + \\log a \\).' },
            { stepNumber: 2, description: 'Gradient', workingLatex: 'n = \\frac{2.097 - 1.301}{0.699 - 0.301} = \\frac{0.796}{0.398} = 2.0', explanation: 'Compute the gradient of the \\( \\log y \\) vs \\( \\log x \\) line through the two points — this equals \\( n \\).' },
            { stepNumber: 3, description: 'Find a', workingLatex: '\\log a = 1.301 - 2(0.301) = 0.699 \\implies a = 5', explanation: 'Substitute the first point into \\( \\log y = n\\log x + \\log a \\) and solve. Quick check: \\( y = 5x^2 \\) gives \\( 5(2)^2 = 20 \\) and \\( 5(5)^2 = 125 \\) — both match.' }
        ], finalAnswer: 'y = 5x^2' }
    },
    {
        id: 'el6-044', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 44', difficulty: 'Foundation',
        questionText: 'Data: \\( x = 1, y = 6 \\); \\( x = 3, y = 54 \\). These satisfy \\( y = kb^x \\). Find \\( k \\) and \\( b \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set up equations', workingLatex: '6 = kb; \\quad 54 = kb^3', explanation: 'Substitute each data point into \\( y = kb^x \\) to get two simultaneous equations.' },
            { stepNumber: 2, description: 'Divide', workingLatex: '\\frac{54}{6} = b^2 \\implies b = 3', explanation: 'Dividing the equations cancels \\( k \\), leaving a single equation in \\( b \\). Take the positive root since \\( b > 0 \\) for the model to make sense.' },
            { stepNumber: 3, description: 'Find k', workingLatex: 'k = \\frac{6}{3} = 2', explanation: 'Substitute \\( b = 3 \\) back into the first equation to find \\( k \\).' }
        ], finalAnswer: 'k = 2, b = 3; y = 2 \\times 3^x' }
    },
    {
        id: 'el6-045', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 45', difficulty: 'Foundation',
        questionText: 'The equation \\( \\log y = 0.3x + 1.2 \\) relates \\( x \\) and \\( y \\). Find \\( y \\) when \\( x = 5 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute', workingLatex: '\\log y = 0.3(5) + 1.2 = 2.7', explanation: 'Direct substitution into the linearised equation gives \\( \\log y \\). We have not yet got \\( y \\) itself — only its log.' },
            { stepNumber: 2, description: 'Find y', workingLatex: 'y = 10^{2.7} = 501', explanation: 'Undo the \\( \\log_{10} \\) by applying \\( 10^{\\square} \\) to both sides.' }
        ], finalAnswer: 'y = 501' }
    },
    {
        id: 'el6-046', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 46', difficulty: 'Foundation',
        questionText: 'The equation \\( \\log y = 1.5\\log x + 0.8 \\) relates \\( x \\) and \\( y \\). Find \\( y \\) when \\( x = 4 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute', workingLatex: '\\log y = 1.5\\log 4 + 0.8 = 1.5(0.602) + 0.8 = 1.703', explanation: 'Plug \\( x = 4 \\) into the equation, using \\( \\log 4 \\approx 0.602 \\). The result is \\( \\log y \\), not \\( y \\).' },
            { stepNumber: 2, description: 'Find y', workingLatex: 'y = 10^{1.703} \\approx 50.5', explanation: 'Apply \\( 10^{\\square} \\) to recover \\( y \\).' }
        ], finalAnswer: 'y \\approx 50.5' }
    },
    {
        id: 'el6-047', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 47', difficulty: 'Foundation',
        questionText: 'Given \\( \\ln y = 2x + 3 \\), express \\( y \\) in the form \\( y = Ae^{Bx} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Exponentiate', workingLatex: 'y = e^{2x+3} = e^3 \\cdot e^{2x}', explanation: 'Apply \\( e^{\\square} \\) to both sides (the inverse of \\( \\ln \\)), then split using \\( e^{a+b} = e^a e^b \\). This separates the constant factor \\( A = e^3 \\) from the exponential factor \\( e^{Bx} \\).' }
        ], finalAnswer: 'y = e^3 e^{2x}; A = e^3, B = 2' }
    },
    {
        id: 'el6-048', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 48', difficulty: 'Foundation',
        questionText: 'A straight line on a \\( \\log y \\) vs \\( \\log x \\) graph has equation \\( \\log y = -2\\log x + 3 \\). Write \\( y \\) as a function of \\( x \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Convert', workingLatex: '\\log y = \\log x^{-2} + \\log 10^3 = \\log\\frac{1000}{x^2}', explanation: 'Use the power law to rewrite \\( -2\\log x \\) as \\( \\log x^{-2} \\), and \\( 3 \\) as \\( \\log 10^{3} \\). Then combine using the product law. A negative gradient on \\( \\log y \\) vs \\( \\log x \\) means \\( y \\) decreases as \\( x \\) increases.' }
        ], finalAnswer: 'y = 1000/x^2' }
    },
    {
        id: 'el6-049', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 49', difficulty: 'Foundation',
        questionText: 'A relationship \\( y = 3 \\times 2^x \\) is plotted as \\( \\log y \\) against \\( x \\). Find the gradient and y-intercept of the resulting line.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log', workingLatex: '\\log y = \\log 3 + x\\log 2 = 0.477 + 0.301x', explanation: 'Apply \\( \\log_{10} \\) and use the product/power laws. Rearrange to \\( \\log y = (\\log 2)x + \\log 3 \\): the gradient is \\( \\log 2 \\approx 0.301 \\) (not \\( 2 \\)) and the intercept is \\( \\log 3 \\approx 0.477 \\) (not \\( 3 \\)).' }
        ], finalAnswer: 'Gradient = 0.301, y-intercept = 0.477' }
    },
    {
        id: 'el6-050', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 50', difficulty: 'Foundation',
        questionText: 'A relationship \\( y = 5x^3 \\) is plotted as \\( \\log y \\) against \\( \\log x \\). Find the gradient and y-intercept.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log', workingLatex: '\\log y = 3\\log x + \\log 5 = 3\\log x + 0.699', explanation: 'For a power model \\( y = ax^n \\), the gradient is exactly \\( n = 3 \\) (no log needed) because \\( \\log(x^3) = 3\\log x \\). The intercept is \\( \\log a = \\log 5 \\approx 0.699 \\).' }
        ], finalAnswer: 'Gradient = 3, y-intercept = 0.699' }
    },
    {
        id: 'el6-051', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 51', difficulty: 'Foundation',
        questionText: 'A student plots \\( \\log y \\) against \\( \\log x \\) and gets gradient 0.5 and intercept 1. What is the relationship?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Form equation', workingLatex: '\\log y = 0.5\\log x + 1 \\implies y = 10 \\cdot x^{0.5} = 10\\sqrt{x}', explanation: 'A straight line on \\( \\log y \\) vs \\( \\log x \\) signals a power model \\( y = ax^{n} \\) with \\( n = \\) gradient \\( = 0.5 \\) and \\( a = 10^{\\text{intercept}} = 10^{1} = 10 \\). Note \\( x^{0.5} = \\sqrt{x} \\).' }
        ], finalAnswer: 'y = 10 sqrt(x)' }
    },
    {
        id: 'el6-052', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 52', difficulty: 'Foundation',
        questionText: 'A student plots \\( \\log y \\) against \\( x \\) and gets a straight line. Another plots \\( \\log y \\) against \\( \\log x \\) and gets a curve. What type of relationship does the data follow?',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Analyse', workingLatex: 'y = kb^x', explanation: 'A straight line on \\( \\log y \\) vs \\( x \\) is the signature of an exponential model \\( y = kb^{x} \\); a straight line on \\( \\log y \\) vs \\( \\log x \\) is the signature of a power model \\( y = ax^{n} \\). The first axis combination is linear here, the second is not — so the data is exponential, not power.' }
        ], finalAnswer: 'Exponential: y = kb^x' }
    },
    {
        id: 'el6-053', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 53', difficulty: 'Foundation',
        questionText: 'Given the line \\( \\log y = -0.5\\log x + 2 \\), find \\( x \\) when \\( y = 50 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute', workingLatex: '\\log 50 = -0.5\\log x + 2 \\implies 1.699 = -0.5\\log x + 2', explanation: 'Replace \\( \\log y \\) with \\( \\log 50 \\approx 1.699 \\). The equation becomes linear in \\( \\log x \\), which is much easier than solving for \\( x \\) directly.' },
            { stepNumber: 2, description: 'Solve', workingLatex: '\\log x = \\frac{2 - 1.699}{0.5} = 0.602 \\implies x = 4', explanation: 'Rearrange to isolate \\( \\log x \\), then apply \\( 10^{\\square} \\) to recover \\( x \\). Note \\( 10^{0.602} \\approx 4 \\) since \\( \\log 4 \\approx 0.602 \\).' }
        ], finalAnswer: 'x = 4' }
    },
    {
        id: 'el6-054', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 54', difficulty: 'Foundation',
        questionText: 'Given \\( \\log y = 0.4x + 0.8 \\), find \\( x \\) when \\( y = 1000 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute', workingLatex: '3 = 0.4x + 0.8 \\implies x = \\frac{2.2}{0.4} = 5.5', explanation: '\\( \\log 1000 = 3 \\) because \\( 10^{3} = 1000 \\). Substitute and solve the linear equation for \\( x \\) directly — no need to convert back to the original exponential form.' }
        ], finalAnswer: 'x = 5.5' }
    },
    {
        id: 'el6-055', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 55', difficulty: 'Foundation',
        questionText: 'The speed \\( v \\) and distance \\( d \\) of planets satisfy \\( v = kd^n \\). A plot of \\( \\log v \\) against \\( \\log d \\) gives gradient \\( -0.5 \\) and intercept \\( 2.1 \\). Find \\( k \\) and \\( n \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Read off', workingLatex: 'n = -0.5; \\quad k = 10^{2.1} = 126', explanation: 'For a power model on \\( \\log v \\) vs \\( \\log d \\) axes, gradient \\( = n \\) directly, and the intercept is \\( \\log k \\) — so apply \\( 10^{\\square} \\) to the intercept to recover \\( k \\). The negative \\( n \\) here means \\( v \\) decreases as \\( d \\) increases (consistent with Kepler-style planetary motion).' }
        ], finalAnswer: 'n = -0.5, k = 126' }
    },
    {
        id: 'el6-056', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 56', difficulty: 'Foundation',
        questionText: 'A relationship \\( y = 4e^{-0.3x} \\) is plotted as \\( \\ln y \\) against \\( x \\). State the gradient and intercept.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take ln', workingLatex: '\\ln y = \\ln 4 - 0.3x = -0.3x + 1.386', explanation: 'Because the model uses base \\( e \\), \\( \\ln \\) gives a particularly clean linearisation: \\( \\ln(e^{-0.3x}) = -0.3x \\) directly. The gradient is just the coefficient of \\( x \\) in the exponent, and the intercept is \\( \\ln k \\).' }
        ], finalAnswer: 'Gradient = -0.3, intercept = ln 4 = 1.386' }
    },
    {
        id: 'el6-057', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 57', difficulty: 'Foundation',
        questionText: 'Two points on a \\( \\ln y \\) vs \\( x \\) graph are \\( (2, 3.4) \\) and \\( (8, 6.4) \\). Find \\( k \\) and \\( c \\) in \\( y = ke^{cx} \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradient c', workingLatex: 'c = \\frac{6.4 - 3.4}{8 - 2} = 0.5', explanation: 'For \\( y = ke^{cx} \\), the linearised form is \\( \\ln y = cx + \\ln k \\), so the gradient of \\( \\ln y \\) vs \\( x \\) equals \\( c \\) directly (no further log/exp needed).' },
            { stepNumber: 2, description: 'Find ln k', workingLatex: '3.4 = 0.5(2) + \\ln k \\implies \\ln k = 2.4 \\implies k = e^{2.4} = 11.0', explanation: 'Substitute either point into the linearised equation, solve for \\( \\ln k \\), then apply \\( e^{\\square} \\) (not \\( 10^{\\square} \\), because we used \\( \\ln \\)).' }
        ], finalAnswer: 'k = 11.0, c = 0.5' }
    },
    {
        id: 'el6-058', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 58', difficulty: 'Foundation',
        questionText: 'A decay process has data: \\( t = 0, y = 100 \\); \\( t = 10, y = 37 \\). Find the equation \\( y = Ae^{-kt} \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'A = 100 (from t=0)', workingLatex: 'A = 100', explanation: 'At \\( t = 0 \\), \\( e^{-k(0)} = e^{0} = 1 \\), so \\( y(0) = A \\). The initial value gives \\( A \\) directly.' },
            { stepNumber: 2, description: 'Find k', workingLatex: '37 = 100e^{-10k} \\implies k = \\frac{-\\ln 0.37}{10} = 0.0994', explanation: 'Divide both sides by \\( 100 \\), then take \\( \\ln \\) of both sides to bring the exponent down: \\( -10k = \\ln 0.37 \\). Solve for \\( k \\); the negative sign of the original exponent absorbs the negative log to give a positive \\( k \\).' }
        ], finalAnswer: 'y = 100e^{-0.0994t}' }
    },
    {
        id: 'el6-059', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 59', difficulty: 'Foundation',
        questionText: 'Which graph type would you plot to test if data follows: (a) \\( y = ax^n \\); (b) \\( y = kb^x \\); (c) \\( y = ke^{cx} \\)?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify', workingLatex: '(a) \\log y \\text{ vs } \\log x; \\quad (b) \\log y \\text{ vs } x; \\quad (c) \\ln y \\text{ vs } x', explanation: 'For a power model, log both variables (\\( x \\) is in the base, so its log must appear). For an exponential model, only log \\( y \\) (\\( x \\) is in the exponent, so it comes down as a coefficient). Use \\( \\ln \\) when the base is \\( e \\) — it cancels cleanly with \\( e^{cx} \\).' }
        ], finalAnswer: '(a) log y vs log x; (b) log y vs x; (c) ln y vs x' }
    },
    {
        id: 'el6-060', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 60', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( \\log x \\) gives gradient 3 and passes through \\( (1, 2) \\). Find the equation and evaluate \\( y \\) when \\( x = 10 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Equation', workingLatex: '\\log y = 3\\log x + c; \\quad 2 = 3(1) + c \\implies c = -1', explanation: 'Plug the known point \\( (\\log x, \\log y) = (1, 2) \\) into \\( \\log y = 3\\log x + c \\) and solve for the intercept \\( c = \\log a \\). Here \\( \\log a = -1 \\), so \\( a = 10^{-1} = 0.1 \\).' },
            { stepNumber: 2, description: 'So y = 0.1x^3', workingLatex: 'x = 10: y = 0.1 \\times 1000 = 100', explanation: 'Substitute back into \\( y = 0.1x^{3} \\). At \\( x = 10 \\), \\( x^{3} = 1000 \\), so \\( y = 100 \\).' }
        ], finalAnswer: 'y = 0.1x^3; y(10) = 100' }
    },
    {
        id: 'el6-061', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 61', difficulty: 'Foundation',
        questionText: 'Convert \\( y = 7 \\times 5^x \\) into the form \\( \\log y = mx + c \\) and state \\( m \\) and \\( c \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log', workingLatex: '\\log y = x\\log 5 + \\log 7 = 0.699x + 0.845', explanation: 'Apply \\( \\log_{10} \\) and split using product/power laws. The coefficient of \\( x \\) becomes \\( m = \\log 5 \\approx 0.699 \\) (not \\( 5 \\)) — a common slip is forgetting to log the base of the exponential.' }
        ], finalAnswer: 'm = 0.699, c = 0.845' }
    },
    {
        id: 'el6-062', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 62', difficulty: 'Foundation',
        questionText: 'Convert \\( y = 8x^{2.5} \\) into the form \\( \\log y = n\\log x + \\log a \\) and state \\( n \\) and \\( \\log a \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log', workingLatex: '\\log y = 2.5\\log x + \\log 8 = 2.5\\log x + 0.903', explanation: 'For a power model, the power \\( n \\) appears directly as the gradient (no log applied to it) — contrast with the exponential case where the base needs logging. Here \\( n = 2.5 \\) and \\( \\log a = \\log 8 \\approx 0.903 \\).' }
        ], finalAnswer: 'n = 2.5, log a = 0.903' }
    },
    {
        id: 'el6-063', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 63', difficulty: 'Foundation',
        questionText: 'The line \\( \\log y = 2\\log x + 0.3 \\) intersects the line \\( \\log y = 3 \\). Find the value of \\( x \\) at the intersection.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set equal', workingLatex: '3 = 2\\log x + 0.3 \\implies \\log x = 1.35 \\implies x = 22.4', explanation: 'Equate the two expressions for \\( \\log y \\), solve the resulting linear equation for \\( \\log x \\), then apply \\( 10^{\\square} \\) to recover \\( x \\).' }
        ], finalAnswer: 'x = 22.4' }
    },
    {
        id: 'el6-064', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 64', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log P \\) against \\( \\log V \\) for a gas gives a straight line with gradient \\( -1.4 \\) and intercept 2.5. Find \\( P \\) when \\( V = 10 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Equation', workingLatex: '\\log P = -1.4\\log 10 + 2.5 = -1.4 + 2.5 = 1.1', explanation: 'Substitute \\( \\log V = \\log 10 = 1 \\) into the linearised equation. \\( \\log 10 \\) is exactly \\( 1 \\) in base 10 — a useful shortcut.' },
            { stepNumber: 2, description: 'Find P', workingLatex: 'P = 10^{1.1} = 12.6', explanation: 'Apply \\( 10^{\\square} \\) to recover \\( P \\) from \\( \\log P \\).' }
        ], finalAnswer: 'P = 12.6' }
    },
    {
        id: 'el6-065', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 65', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( x \\) has equation \\( \\log y = -0.15x + 4 \\). Find the half-life (when y = half initial value).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Initial value at x=0', workingLatex: '\\log y_0 = 4 \\implies y_0 = 10000', explanation: 'The vertical intercept gives the initial value: at \\( x = 0 \\), \\( \\log y = 4 \\), so \\( y_{0} = 10^{4} \\).' },
            { stepNumber: 2, description: 'Half value', workingLatex: '\\log 5000 = -0.15x + 4 \\implies 3.699 = -0.15x + 4 \\implies x = 2.01', explanation: 'Set \\( y = y_{0}/2 = 5000 \\), take \\( \\log \\) (\\( \\log 5000 \\approx 3.699 \\)), and solve the linear equation. The negative gradient confirms decay.' }
        ], finalAnswer: 'Half-life = 2.01 units' }
    },
    {
        id: 'el6-066', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 66', difficulty: 'Foundation',
        questionText: 'Show that \\( y = 2x^3 \\) and \\( y = 8x \\) intersect when \\( x = 2 \\) by using logarithmic methods.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log of both', workingLatex: '\\log 2 + 3\\log x = \\log 8 + \\log x', explanation: 'Set \\( 2x^{3} = 8x \\) and take \\( \\log \\) of both sides. The product law splits each side into a constant plus a log term, and the power law brings the exponent down as a coefficient — turning a polynomial equation into a linear one in \\( \\log x \\).' },
            { stepNumber: 2, description: 'Solve', workingLatex: '2\\log x = \\log 8 - \\log 2 = \\log 4 \\implies \\log x = \\log 2 \\implies x = 2', explanation: 'Collect the \\( \\log x \\) terms, use the quotient law to combine the constants (\\( \\log 8 - \\log 2 = \\log 4 \\)), and recognise \\( \\log 4 = 2\\log 2 \\), giving \\( \\log x = \\log 2 \\), so \\( x = 2 \\).' }
        ], finalAnswer: 'x = 2 (verified)' }
    },
    {
        id: 'el6-067', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 67', difficulty: 'Foundation',
        questionText: 'The time \\( t \\) (s) for a pendulum to swing depends on length \\( l \\) (m): \\( t = al^n \\). A plot of \\( \\log t \\) vs \\( \\log l \\) gives gradient 0.5 and intercept 0.3. Find \\( a \\) and \\( n \\), and find \\( t \\) when \\( l = 4 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Read off', workingLatex: 'n = 0.5, \\quad a = 10^{0.3} = 2.0', explanation: 'Power model on \\( \\log t \\) vs \\( \\log l \\): gradient \\( = n \\) directly, intercept \\( = \\log a \\). Apply \\( 10^{\\square} \\) to recover \\( a \\). This matches the physical relationship \\( T \\propto \\sqrt{l} \\) for a pendulum.' },
            { stepNumber: 2, description: 'Find t at l=4', workingLatex: 't = 2\\sqrt{4} = 4 \\text{ s}', explanation: 'Substitute into \\( t = 2l^{0.5} = 2\\sqrt{l} \\). At \\( l = 4 \\), \\( \\sqrt{4} = 2 \\), so \\( t = 4 \\) s.' }
        ], finalAnswer: 'a = 2, n = 0.5; t(4) = 4 s' }
    },
    {
        id: 'el6-068', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 68', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\ln N \\) against \\( t \\) has equation \\( \\ln N = 0.2t + 5 \\). Find: (a) the initial value; (b) the doubling time.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) t = 0', workingLatex: '\\ln N = 5 \\implies N = e^5 = 148.4', explanation: 'Substitute \\( t = 0 \\). Apply \\( e^{\\square} \\) (not \\( 10^{\\square} \\)) because the graph uses \\( \\ln \\), not \\( \\log_{10} \\). Keeping the base consistent is the key trap to avoid.' },
            { stepNumber: 2, description: '(b) When N doubles', workingLatex: '\\ln(2N_0) = 0.2t + 5 \\implies \\ln 2 = 0.2(t - 0) \\implies t = \\frac{\\ln 2}{0.2} = 3.47', explanation: 'Doubling means \\( \\ln(2N_{0}) - \\ln N_{0} = \\ln 2 \\); on the linearised graph this is a rise of \\( \\ln 2 \\), so the time taken is \\( \\ln 2 / \\text{gradient} \\). For any exponential, doubling time is constant.' }
        ], finalAnswer: '(a) 148.4 (b) 3.47 time units' }
    },
    {
        id: 'el6-069', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 69', difficulty: 'Foundation',
        questionText: 'Two models are proposed for data: Model A \\( y = ax^n \\) and Model B \\( y = kb^x \\). Plotting \\( \\log y \\) vs \\( \\log x \\) gives a curve but \\( \\log y \\) vs \\( x \\) gives a line. Which model fits?',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Analysis', workingLatex: '\\text{Model B fits: } y = kb^x', explanation: 'A power model gives a line on \\( \\log y \\) vs \\( \\log x \\); an exponential model gives a line on \\( \\log y \\) vs \\( x \\). Here the second linearisation is the straight one, so the data is exponential.' }
        ], finalAnswer: 'Model B: y = kb^x' }
    },
    {
        id: 'el6-070', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 70', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( \\log x \\) passes through \\( (0, 1.5) \\) and \\( (2, 4.5) \\). Find the equation \\( y = ax^n \\), then find: (a) \\( y \\) when \\( x = 100 \\); (b) \\( x \\) when \\( y = 1000 \\).',
        marks: 6, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find n', workingLatex: 'n = \\frac{4.5 - 1.5}{2 - 0} = 1.5', explanation: 'Gradient \\( = \\Delta(\\log y)/\\Delta(\\log x) = n \\).' },
            { stepNumber: 2, description: 'Find a', workingLatex: '\\log a = 1.5 \\implies a = 10^{1.5} \\approx 31.6', explanation: 'The first point \\( (0, 1.5) \\) lies on the \\( \\log y \\)-axis (where \\( \\log x = 0 \\)), so it gives \\( \\log a \\) directly.' },
            { stepNumber: 3, description: '(a) x = 100', workingLatex: 'y = 31.6 \\times 100^{1.5} = 31.6 \\times 1000 = 31600', explanation: '\\( 100^{1.5} = (10^{2})^{1.5} = 10^{3} = 1000 \\). A clean integer power makes this easy without a calculator.' },
            { stepNumber: 4, description: '(b) y = 1000', workingLatex: '1000 = 31.6x^{1.5} \\implies x^{1.5} = 31.6 \\implies x = 31.6^{2/3} = 10.0', explanation: 'Isolate \\( x^{1.5} \\), then raise to the power \\( 2/3 \\) (the reciprocal of \\( 1.5 \\)) to solve for \\( x \\). Since \\( 31.6 \\approx 10^{1.5} \\), we get \\( x \\approx (10^{1.5})^{2/3} = 10 \\).' }
        ], finalAnswer: 'y = 31.6x^{1.5}; (a) 31600 (b) x = 10' }
    },

    // TYPE H (Q71–75): Sketching simple exponential and logarithm graphs
    {
        id: 'el6-071',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 71',
        difficulty: 'Foundation',
        questionText: 'Sketch the curve \\( y = e^{x} \\), labelling the \\( y \\)-intercept and any asymptote.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the key features.',
                    workingLatex: 'y\\text{-intercept: } e^{0} = 1 \\quad \\text{asymptote: } y = 0 \\text{ as } x \\to -\\infty',
                    explanation: 'Any exponential \\( y = a^{x} \\) with \\( a > 1 \\) passes through \\( (0,\\,1) \\) since \\( a^{0} = 1 \\), and tends to \\( 0 \\) (but never reaches it) as \\( x \\to -\\infty \\), giving a horizontal asymptote at \\( y = 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Sketch the curve.',
                    workingLatex: 'y = e^{x} \\text{ is increasing for all } x; \\quad y > 0 \\text{ everywhere}',
                    explanation: 'The curve is always positive and increases without bound — steeply for \\( x > 0 \\), shallowly for \\( x < 0 \\). At \\( x = 1 \\) it reaches \\( e \\approx 2.72 \\).',
                    diagram: {
                        xMin: -3, xMax: 2.5, yMin: -1, yMax: 8,
                        xTicks: [-2, -1, 1, 2], yTicks: [1, 2, 4, 6],
                        curves: [{ points: sample((x) => Math.exp(x), -3, 2.5), color: "#1d4ed8", label: "y = e^{x}", labelAt: [-2.6, 5.5] }],
                        lines: [{ from: [-3, 0], to: [2.5, 0], color: "#888", dashed: true, label: "y = 0", labelAt: [-2.8, 0.4] }],
                        points: [{ at: [0, 1], label: "(0,\\,1)", labelAnchor: "se" }, { at: [1, Math.E], label: "(1,\\,e)", labelAnchor: "nw", r: 3.5 }],
                    }
                }
            ],
            finalAnswer: 'Increasing curve through \\((0, 1)\\) and \\((1, e)\\), with horizontal asymptote \\( y = 0 \\).'
        }
    },
    {
        id: 'el6-072',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 72',
        difficulty: 'Foundation',
        questionText: 'Sketch the curve \\( y = \\ln x \\), labelling the \\( x \\)-intercept and any asymptote.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the key features.',
                    workingLatex: 'x\\text{-intercept: } \\ln 1 = 0 \\quad \\text{asymptote: } x = 0 \\text{ as } x \\to 0^{+}',
                    explanation: 'The natural log is the inverse of \\( e^{x} \\): it is only defined for \\( x > 0 \\), passes through \\( (1,\\,0) \\) since \\( \\ln 1 = 0 \\), and goes to \\( -\\infty \\) as \\( x \\to 0^{+} \\), giving a vertical asymptote at \\( x = 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Sketch the curve.',
                    workingLatex: 'y = \\ln x \\text{ is increasing for all } x > 0; \\quad \\ln e = 1',
                    explanation: 'Growth is slow once past \\( x = 1 \\) — for example \\( \\ln e \\approx 1 \\), \\( \\ln 10 \\approx 2.30 \\). The curve is the reflection of \\( y = e^{x} \\) in the line \\( y = x \\).',
                    diagram: {
                        xMin: -0.5, xMax: 6, yMin: -3, yMax: 2.5,
                        xTicks: [1, 2, 3, 4, 5], yTicks: [-2, -1, 1, 2],
                        curves: [{ points: sample((x) => Math.log(x), 0.07, 6, 80), color: "#1d4ed8", label: "y = \\ln x", labelAt: [4.6, 2] }],
                        lines: [{ from: [0, -3], to: [0, 2.5], color: "#888", dashed: true, label: "x = 0", labelAt: [0.15, -2.5] }],
                        points: [{ at: [1, 0], label: "(1,\\,0)", labelAnchor: "se" }, { at: [Math.E, 1], label: "(e,\\,1)", labelAnchor: "nw", r: 3.5 }],
                    }
                }
            ],
            finalAnswer: 'Increasing curve through \\((1, 0)\\) and \\((e, 1)\\), with vertical asymptote \\( x = 0 \\); defined only for \\( x > 0 \\).'
        }
    },
    {
        id: 'el6-073',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 73',
        difficulty: 'Foundation',
        questionText: 'On the same axes, sketch \\( y = e^{x} \\) and \\( y = e^{-x} \\). State the relationship between the two curves.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the key features of each.',
                    workingLatex: 'y = e^{x}:\\ (0,\\,1),\\ \\text{increasing} \\qquad y = e^{-x}:\\ (0,\\,1),\\ \\text{decreasing}',
                    explanation: 'Both pass through \\( (0,\\,1) \\) because \\( e^{0} = 1 \\). \\( e^{x} \\) grows as \\( x \\) increases; \\( e^{-x} \\) decays as \\( x \\) increases (because the exponent gets more negative).'
                },
                {
                    stepNumber: 2,
                    description: 'Relate them by symmetry.',
                    workingLatex: 'e^{-x} = e^{(-1)\\cdot x}',
                    explanation: 'Replacing \\( x \\) with \\( -x \\) reflects the curve in the \\( y \\)-axis, so \\( y = e^{-x} \\) is the mirror image of \\( y = e^{x} \\) about the \\( y \\)-axis. Both have horizontal asymptote \\( y = 0 \\).',
                    diagram: {
                        xMin: -3, xMax: 3, yMin: -1, yMax: 8,
                        xTicks: [-2, -1, 1, 2], yTicks: [1, 2, 4, 6],
                        curves: [
                            { points: sample((x) => Math.exp(x), -3, 3), color: "#1d4ed8", label: "y = e^{x}", labelAt: [1.5, 6] },
                            { points: sample((x) => Math.exp(-x), -3, 3), color: "#dc2626", label: "y = e^{-x}", labelAt: [-2.8, 6] },
                        ],
                        lines: [{ from: [-3, 0], to: [3, 0], color: "#888", dashed: true, label: "y = 0", labelAt: [2.4, 0.4] }],
                        points: [{ at: [0, 1], label: "(0,\\,1)", labelAnchor: "se" }],
                    }
                }
            ],
            finalAnswer: 'Both curves pass through \\((0, 1)\\) with asymptote \\( y = 0 \\); \\( y = e^{-x} \\) is the reflection of \\( y = e^{x} \\) in the \\( y \\)-axis.'
        }
    },
    {
        id: 'el6-074',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 74',
        difficulty: 'Foundation',
        questionText: 'Sketch the curve \\( y = e^{x} - 1 \\), labelling the \\( x \\)- and \\( y \\)-intercepts and the asymptote.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the transformation.',
                    workingLatex: 'y = e^{x} - 1 \\text{ is a vertical translation of } y = e^{x} \\text{ down by } 1',
                    explanation: 'Subtracting a constant from \\( y \\) shifts the whole curve down by that amount; the shape and steepness are unchanged, only the vertical position changes.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the new intercepts and asymptote.',
                    workingLatex: 'y\\text{-int: } e^{0} - 1 = 0 \\quad x\\text{-int: } e^{x} = 1 \\Rightarrow x = 0 \\quad \\text{asymptote: } y = -1',
                    explanation: 'The curve now passes through the origin since both intercepts coincide at \\( (0,\\,0) \\). The horizontal asymptote shifts from \\( y = 0 \\) down to \\( y = -1 \\).',
                    diagram: {
                        xMin: -3, xMax: 2.5, yMin: -2, yMax: 7,
                        xTicks: [-2, -1, 1, 2], yTicks: [-1, 1, 2, 4, 6],
                        curves: [{ points: sample((x) => Math.exp(x) - 1, -3, 2.5), color: "#1d4ed8", label: "y = e^{x} - 1", labelAt: [-2.8, 4.5] }],
                        lines: [{ from: [-3, -1], to: [2.5, -1], color: "#888", dashed: true, label: "y = -1", labelAt: [-2.8, -0.6] }],
                        points: [{ at: [0, 0], label: "(0,\\,0)", labelAnchor: "se" }],
                    }
                }
            ],
            finalAnswer: 'Curve through the origin \\((0, 0)\\) with horizontal asymptote \\( y = -1 \\); the standard exponential shifted down by \\( 1 \\).'
        }
    },
    {
        id: 'el6-075',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 75',
        difficulty: 'Standard',
        questionText: 'Sketch the curve \\( y = \\ln(x + 2) \\), labelling the \\( x \\)-intercept, \\( y \\)-intercept and any asymptote.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the transformation.',
                    workingLatex: 'y = \\ln(x + 2) \\text{ is a horizontal translation of } y = \\ln x \\text{ to the left by } 2',
                    explanation: 'Replacing \\( x \\) with \\( x + 2 \\) shifts the curve in the \\( -x \\) direction by \\( 2 \\). The vertical asymptote moves with it from \\( x = 0 \\) to \\( x = -2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the intercepts.',
                    workingLatex: 'x\\text{-int: } \\ln(x+2) = 0 \\Rightarrow x + 2 = 1 \\Rightarrow x = -1 \\qquad y\\text{-int: } \\ln 2 \\approx 0.69',
                    explanation: 'For the \\( x \\)-intercept, set \\( y = 0 \\) and use \\( \\ln 1 = 0 \\). For the \\( y \\)-intercept, evaluate at \\( x = 0 \\), giving \\( \\ln 2 \\).',
                    diagram: {
                        xMin: -3, xMax: 5, yMin: -3, yMax: 2.5,
                        xTicks: [-2, -1, 1, 2, 3, 4], yTicks: [-2, -1, 1, 2],
                        curves: [{ points: sample((x) => Math.log(x + 2), -1.93, 5, 80), color: "#1d4ed8", label: "y = \\ln(x+2)", labelAt: [3, 1.9] }],
                        lines: [{ from: [-2, -3], to: [-2, 2.5], color: "#888", dashed: true, label: "x = -2", labelAt: [-1.85, -2.5] }],
                        points: [{ at: [-1, 0], label: "(-1,\\,0)", labelAnchor: "se" }, { at: [0, Math.log(2)], label: "(0,\\,\\ln 2)", labelAnchor: "nw", r: 3.5 }],
                    }
                }
            ],
            finalAnswer: 'Curve through \\((-1, 0)\\) and \\((0, \\ln 2)\\), with vertical asymptote \\( x = -2 \\); the standard \\( \\ln \\) shifted left by \\( 2 \\).'
        }
    },
    {
        id: 'el6-076',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 76',
        difficulty: 'Foundation',
        questionText: 'Sketch the curve \\( y = 2^{x} \\), labelling the \\( y \\)-intercept and any asymptote.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the key features.',
                    workingLatex: 'y\\text{-int: } 2^{0} = 1 \\quad \\text{asymptote: } y = 0 \\text{ as } x \\to -\\infty',
                    explanation: 'Any exponential \\( y = a^{x} \\) with \\( a > 1 \\) has the same general shape: passes through \\( (0,\\,1) \\) and tends to \\( 0 \\) as \\( x \\to -\\infty \\). The base \\( 2 < e \\), so \\( 2^{x} \\) grows more slowly than \\( e^{x} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Sketch the curve.',
                    workingLatex: '2^{1} = 2, \\quad 2^{2} = 4, \\quad 2^{-1} = \\tfrac{1}{2}',
                    explanation: 'Plot a few values and join with a smooth increasing curve. Always positive, never crosses the \\( x \\)-axis.',
                    diagram: {
                        xMin: -3, xMax: 3, yMin: -1, yMax: 8,
                        xTicks: [-2, -1, 1, 2], yTicks: [1, 2, 4, 6],
                        curves: [{ points: sample((x) => Math.pow(2, x), -3, 3), color: "#1d4ed8", label: "y = 2^{x}", labelAt: [-2.8, 5.5] }],
                        lines: [{ from: [-3, 0], to: [3, 0], color: "#888", dashed: true, label: "y = 0", labelAt: [2.4, 0.4] }],
                        points: [{ at: [0, 1], label: "(0,\\,1)", labelAnchor: "se" }, { at: [1, 2], label: "(1,\\,2)", labelAnchor: "nw", r: 3.5 }],
                    }
                }
            ],
            finalAnswer: 'Increasing curve through \\((0, 1)\\) and \\((1, 2)\\), with horizontal asymptote \\( y = 0 \\).'
        }
    },
    {
        id: 'el6-077',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 77',
        difficulty: 'Foundation',
        questionText: 'Sketch the curve \\( y = \\log_{10} x \\), labelling the \\( x \\)-intercept and any asymptote.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the key features.',
                    workingLatex: 'x\\text{-int: } \\log_{10} 1 = 0 \\quad \\text{asymptote: } x = 0 \\quad \\log_{10} 10 = 1',
                    explanation: 'Any log \\( y = \\log_{a} x \\) with \\( a > 1 \\) passes through \\( (1,\\,0) \\) and has vertical asymptote \\( x = 0 \\). Growth is slower than \\( \\ln x \\) since \\( \\log_{10} = \\ln/\\ln 10 \\) and \\( \\ln 10 \\approx 2.30 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Sketch the curve.',
                    workingLatex: '\\log_{10} 10 = 1, \\quad \\log_{10} 100 = 2, \\quad \\log_{10} 0.1 = -1',
                    explanation: 'Defined only for \\( x > 0 \\). Note how slowly the curve climbs once past \\( x = 1 \\) — it takes a tenfold increase in \\( x \\) to add \\( 1 \\) to \\( y \\).',
                    diagram: {
                        xMin: -1, xMax: 11, yMin: -2, yMax: 1.5,
                        xTicks: [1, 2, 4, 6, 8, 10], yTicks: [-1, 1],
                        curves: [{ points: sample((x) => Math.log10(x), 0.07, 11, 90), color: "#1d4ed8", label: "y = \\log_{10} x", labelAt: [7, 1.1] }],
                        lines: [{ from: [0, -2], to: [0, 1.5], color: "#888", dashed: true, label: "x = 0", labelAt: [0.25, -1.7] }],
                        points: [{ at: [1, 0], label: "(1,\\,0)", labelAnchor: "se" }, { at: [10, 1], label: "(10,\\,1)", labelAnchor: "nw", r: 3.5 }],
                    }
                }
            ],
            finalAnswer: 'Increasing curve through \\((1, 0)\\) and \\((10, 1)\\), with vertical asymptote \\( x = 0 \\).'
        }
    },
    {
        id: 'el6-078',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 78',
        difficulty: 'Foundation',
        questionText: 'Sketch the curve \\( y = -e^{x} \\), labelling the \\( y \\)-intercept and any asymptote.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the transformation.',
                    workingLatex: 'y = -e^{x} \\text{ is a reflection of } y = e^{x} \\text{ in the } x\\text{-axis}',
                    explanation: 'Multiplying \\( y \\) by \\( -1 \\) flips the curve about the \\( x \\)-axis: every positive output becomes a negative output of the same magnitude.'
                },
                {
                    stepNumber: 2,
                    description: 'Find intercepts and asymptote.',
                    workingLatex: 'y\\text{-int: } -e^{0} = -1 \\quad \\text{asymptote: } y = 0 \\text{ as } x \\to -\\infty',
                    explanation: 'Now \\( y \\) is always negative, decreasing without bound as \\( x \\) increases. The asymptote \\( y = 0 \\) is approached from below.',
                    diagram: {
                        xMin: -3, xMax: 2.5, yMin: -8, yMax: 1,
                        xTicks: [-2, -1, 1, 2], yTicks: [-6, -4, -2, -1],
                        curves: [{ points: sample((x) => -Math.exp(x), -3, 2.5), color: "#1d4ed8", label: "y = -e^{x}", labelAt: [-2.8, -5.5] }],
                        lines: [{ from: [-3, 0], to: [2.5, 0], color: "#888", dashed: true, label: "y = 0", labelAt: [2.4, 0.3] }],
                        points: [{ at: [0, -1], label: "(0,\\,-1)", labelAnchor: "se" }],
                    }
                }
            ],
            finalAnswer: 'Decreasing curve through \\((0, -1)\\), always negative, with horizontal asymptote \\( y = 0 \\).'
        }
    },
    {
        id: 'el6-079',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 79',
        difficulty: 'Standard',
        questionText: 'Sketch the curve \\( y = e^{2x} \\), labelling the \\( y \\)-intercept and any asymptote. Compare its steepness with \\( y = e^{x} \\) at \\( x = 1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the transformation.',
                    workingLatex: 'y = e^{2x} \\text{ is a horizontal compression of } y = e^{x} \\text{ by factor } \\tfrac{1}{2}',
                    explanation: 'Replacing \\( x \\) with \\( 2x \\) compresses the curve horizontally by \\( \\tfrac{1}{2} \\), so growth happens twice as fast: \\( e^{2x} \\) at \\( x = 1 \\) equals \\( e^{x} \\) at \\( x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find intercepts and asymptote.',
                    workingLatex: 'y\\text{-int: } e^{0} = 1 \\quad \\text{asymptote: } y = 0 \\quad e^{2(1)} = e^{2} \\approx 7.39',
                    explanation: 'The \\( y \\)-intercept and asymptote are unchanged from \\( y = e^{x} \\); only the rate of growth changes. At \\( x = 1 \\), this curve has already reached \\( e^{2} \\), where \\( e^{x} \\) only reaches \\( e \\approx 2.72 \\).',
                    diagram: {
                        xMin: -2, xMax: 1.5, yMin: -1, yMax: 8,
                        xTicks: [-1, 1], yTicks: [1, 2, 4, 6],
                        curves: [{ points: sample((x) => Math.exp(2 * x), -2, 1.5), color: "#1d4ed8", label: "y = e^{2x}", labelAt: [-1.8, 5.5] }],
                        lines: [{ from: [-2, 0], to: [1.5, 0], color: "#888", dashed: true, label: "y = 0", labelAt: [1.3, 0.4] }],
                        points: [{ at: [0, 1], label: "(0,\\,1)", labelAnchor: "se" }, { at: [1, Math.exp(2)], label: "(1,\\,e^{2})", labelAnchor: "nw", r: 3.5 }],
                    }
                }
            ],
            finalAnswer: 'Increasing curve through \\((0, 1)\\) and \\((1, e^{2})\\), with horizontal asymptote \\( y = 0 \\); grows twice as fast as \\( y = e^{x} \\).'
        }
    },
    {
        id: 'el6-080',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 80',
        difficulty: 'Foundation',
        questionText: 'Sketch the curve \\( y = e^{x} + 2 \\), labelling the \\( y \\)-intercept and any asymptote.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the transformation.',
                    workingLatex: 'y = e^{x} + 2 \\text{ is } y = e^{x} \\text{ translated up by } 2',
                    explanation: 'Adding a constant to \\( y \\) shifts the whole curve vertically; the shape and steepness are unchanged.'
                },
                {
                    stepNumber: 2,
                    description: 'Find intercepts and asymptote.',
                    workingLatex: 'y\\text{-int: } e^{0} + 2 = 3 \\quad \\text{asymptote: } y = 2 \\text{ as } x \\to -\\infty',
                    explanation: 'There is no \\( x \\)-intercept since \\( e^{x} > 0 \\) for all \\( x \\), so \\( y \\geq 2 \\) always. The horizontal asymptote shifts up from \\( y = 0 \\) to \\( y = 2 \\).',
                    diagram: {
                        xMin: -3, xMax: 2, yMin: -1, yMax: 9,
                        xTicks: [-2, -1, 1, 2], yTicks: [2, 3, 5, 7],
                        curves: [{ points: sample((x) => Math.exp(x) + 2, -3, 2), color: "#1d4ed8", label: "y = e^{x} + 2", labelAt: [-2.8, 6.5] }],
                        lines: [{ from: [-3, 2], to: [2, 2], color: "#888", dashed: true, label: "y = 2", labelAt: [1.7, 2.4] }],
                        points: [{ at: [0, 3], label: "(0,\\,3)", labelAnchor: "se" }],
                    }
                }
            ],
            finalAnswer: 'Increasing curve through \\((0, 3)\\) with horizontal asymptote \\( y = 2 \\); no \\( x \\)-intercept.'
        }
    },
    {
        id: 'el6-081',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 81',
        difficulty: 'Standard',
        questionText: 'Sketch the curve \\( y = e^{-x} + 1 \\), labelling the \\( y \\)-intercept and any asymptote.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the transformation.',
                    workingLatex: 'y = e^{-x} + 1 \\text{ is } y = e^{-x} \\text{ translated up by } 1',
                    explanation: 'Start from the standard decay curve \\( y = e^{-x} \\) (reflection of \\( e^{x} \\) in the \\( y \\)-axis), then shift everything up by \\( 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find intercepts and asymptote.',
                    workingLatex: 'y\\text{-int: } e^{0} + 1 = 2 \\quad \\text{asymptote: } y = 1 \\text{ as } x \\to \\infty',
                    explanation: 'The curve decreases from large positive values on the left towards \\( y = 1 \\) on the right. There is no \\( x \\)-intercept since \\( e^{-x} > 0 \\) gives \\( y > 1 \\) always.',
                    diagram: {
                        xMin: -2, xMax: 4, yMin: -1, yMax: 9,
                        xTicks: [-1, 1, 2, 3], yTicks: [1, 2, 4, 6, 8],
                        curves: [{ points: sample((x) => Math.exp(-x) + 1, -2, 4), color: "#1d4ed8", label: "y = e^{-x} + 1", labelAt: [-1.8, 6.5] }],
                        lines: [{ from: [-2, 1], to: [4, 1], color: "#888", dashed: true, label: "y = 1", labelAt: [3.4, 1.4] }],
                        points: [{ at: [0, 2], label: "(0,\\,2)", labelAnchor: "se" }],
                    }
                }
            ],
            finalAnswer: 'Decreasing curve through \\((0, 2)\\) with horizontal asymptote \\( y = 1 \\); no \\( x \\)-intercept.'
        }
    },
    {
        id: 'el6-082',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 82',
        difficulty: 'Standard',
        questionText: 'Sketch the curve \\( y = \\ln(2x) \\), labelling the \\( x \\)-intercept and any asymptote.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the transformation.',
                    workingLatex: '\\ln(2x) = \\ln 2 + \\ln x',
                    explanation: 'Using the product law of logs, \\( \\ln(2x) \\) is just \\( \\ln x \\) shifted vertically up by the constant \\( \\ln 2 \\approx 0.693 \\). The shape and asymptote of \\( \\ln x \\) are unchanged.'
                },
                {
                    stepNumber: 2,
                    description: 'Find intercept and asymptote.',
                    workingLatex: 'x\\text{-int: } \\ln(2x) = 0 \\Rightarrow 2x = 1 \\Rightarrow x = \\tfrac{1}{2} \\quad \\text{asymptote: } x = 0',
                    explanation: 'The vertical asymptote stays at \\( x = 0 \\) because the transformation acts on \\( y \\), not on \\( x \\). The \\( x \\)-intercept moves to \\( x = \\tfrac{1}{2} \\) since \\( 2x = 1 \\) there.',
                    diagram: {
                        xMin: -0.5, xMax: 6, yMin: -3, yMax: 3,
                        xTicks: [1, 2, 3, 4, 5], yTicks: [-2, -1, 1, 2],
                        curves: [{ points: sample((x) => Math.log(2 * x), 0.04, 6, 90), color: "#1d4ed8", label: "y = \\ln(2x)", labelAt: [4.4, 2.5] }],
                        lines: [{ from: [0, -3], to: [0, 3], color: "#888", dashed: true, label: "x = 0", labelAt: [0.15, -2.5] }],
                        points: [{ at: [0.5, 0], label: "(\\tfrac{1}{2},\\,0)", labelAnchor: "se" }, { at: [1, Math.log(2)], label: "(1,\\,\\ln 2)", labelAnchor: "nw", r: 3.5 }],
                    }
                }
            ],
            finalAnswer: 'Increasing curve through \\((\\tfrac{1}{2}, 0)\\) and \\((1, \\ln 2)\\), with vertical asymptote \\( x = 0 \\); equivalent to \\( \\ln x \\) shifted up by \\( \\ln 2 \\).'
        }
    },
    {
        id: 'el6-083',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 83',
        difficulty: 'Foundation',
        questionText: 'Sketch the curve \\( y = \\ln x + 1 \\), labelling the \\( x \\)-intercept and any asymptote.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the transformation.',
                    workingLatex: 'y = \\ln x + 1 \\text{ is } y = \\ln x \\text{ translated up by } 1',
                    explanation: 'Vertical translation by \\( +1 \\); shape and vertical asymptote at \\( x = 0 \\) are unchanged.'
                },
                {
                    stepNumber: 2,
                    description: 'Find intercept and asymptote.',
                    workingLatex: 'x\\text{-int: } \\ln x + 1 = 0 \\Rightarrow \\ln x = -1 \\Rightarrow x = e^{-1} = \\tfrac{1}{e} \\quad \\text{asymptote: } x = 0',
                    explanation: 'Solve \\( y = 0 \\) by taking \\( e^{\\square} \\) of both sides; this gives \\( x = 1/e \\approx 0.368 \\). The \\( x \\)-intercept shifts left from \\( 1 \\) since the curve has moved up.',
                    diagram: {
                        xMin: -0.5, xMax: 6, yMin: -3, yMax: 3,
                        xTicks: [1, 2, 3, 4, 5], yTicks: [-2, -1, 1, 2],
                        curves: [{ points: sample((x) => Math.log(x) + 1, 0.06, 6, 80), color: "#1d4ed8", label: "y = \\ln x + 1", labelAt: [4, 2.5] }],
                        lines: [{ from: [0, -3], to: [0, 3], color: "#888", dashed: true, label: "x = 0", labelAt: [0.15, -2.5] }],
                        points: [{ at: [1 / Math.E, 0], label: "(\\tfrac{1}{e},\\,0)", labelAnchor: "se" }, { at: [1, 1], label: "(1,\\,1)", labelAnchor: "nw", r: 3.5 }],
                    }
                }
            ],
            finalAnswer: 'Increasing curve through \\((\\tfrac{1}{e}, 0)\\) and \\((1, 1)\\), with vertical asymptote \\( x = 0 \\).'
        }
    },
    {
        id: 'el6-084',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 84',
        difficulty: 'Standard',
        questionText: 'Sketch the curve \\( y = \\ln(-x) \\), stating its domain and labelling any asymptote and intercept.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Determine the domain.',
                    workingLatex: '-x > 0 \\implies x < 0',
                    explanation: 'A logarithm requires a positive argument, so \\( -x > 0 \\) forces \\( x < 0 \\). The curve only exists to the left of the \\( y \\)-axis.'
                },
                {
                    stepNumber: 2,
                    description: 'Recognise the transformation and find features.',
                    workingLatex: 'y = \\ln(-x) \\text{ is a reflection of } y = \\ln x \\text{ in the } y\\text{-axis}',
                    explanation: 'Replacing \\( x \\) with \\( -x \\) reflects the standard \\( \\ln x \\) curve in the \\( y \\)-axis. The asymptote stays at \\( x = 0 \\); the \\( x \\)-intercept moves from \\( (1,\\,0) \\) to \\( (-1,\\,0) \\) since \\( \\ln(-(-1)) = \\ln 1 = 0 \\).',
                    diagram: {
                        xMin: -6, xMax: 0.5, yMin: -3, yMax: 2.5,
                        xTicks: [-5, -4, -3, -2, -1], yTicks: [-2, -1, 1, 2],
                        curves: [{ points: sample((x) => Math.log(-x), -6, -0.07, 80), color: "#1d4ed8", label: "y = \\ln(-x)", labelAt: [-5.7, 2] }],
                        lines: [{ from: [0, -3], to: [0, 2.5], color: "#888", dashed: true, label: "x = 0", labelAt: [-0.45, -2.5] }],
                        points: [{ at: [-1, 0], label: "(-1,\\,0)", labelAnchor: "sw" }, { at: [-Math.E, 1], label: "(-e,\\,1)", labelAnchor: "ne", r: 3.5 }],
                    }
                }
            ],
            finalAnswer: 'Defined only for \\( x < 0 \\); curve through \\((-1, 0)\\) and \\((-e, 1)\\), with vertical asymptote \\( x = 0 \\); reflection of \\( \\ln x \\) in the \\( y \\)-axis.'
        }
    },
    {
        id: 'el6-085',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 85',
        difficulty: 'Standard',
        questionText: 'Sketch the curve \\( y = 3 - e^{x} \\), labelling the \\( x \\)- and \\( y \\)-intercepts and the asymptote.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the transformations.',
                    workingLatex: 'y = 3 - e^{x} = -e^{x} + 3',
                    explanation: 'Two transformations of \\( y = e^{x} \\): reflect in the \\( x \\)-axis (the \\( -e^{x} \\) part), then translate up by \\( 3 \\). The asymptote at \\( y = 0 \\) reflects to itself, then shifts up to \\( y = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find intercepts and asymptote.',
                    workingLatex: 'y\\text{-int: } 3 - e^{0} = 2 \\quad x\\text{-int: } e^{x} = 3 \\Rightarrow x = \\ln 3 \\approx 1.10 \\quad \\text{asymptote: } y = 3',
                    explanation: 'For the \\( x \\)-intercept, solve \\( y = 0 \\) and take \\( \\ln \\) of both sides. The curve approaches \\( y = 3 \\) from below as \\( x \\to -\\infty \\) and decreases without bound as \\( x \\to \\infty \\).',
                    diagram: {
                        xMin: -3, xMax: 2.5, yMin: -8, yMax: 4,
                        xTicks: [-2, -1, 1, 2], yTicks: [-6, -4, -2, 2, 3],
                        curves: [{ points: sample((x) => 3 - Math.exp(x), -3, 2.5), color: "#1d4ed8", label: "y = 3 - e^{x}", labelAt: [-2.8, 1.7] }],
                        lines: [{ from: [-3, 3], to: [2.5, 3], color: "#888", dashed: true, label: "y = 3", labelAt: [2.0, 3.4] }],
                        points: [{ at: [0, 2], label: "(0,\\,2)", labelAnchor: "se" }, { at: [Math.log(3), 0], label: "(\\ln 3,\\,0)", labelAnchor: "nw", r: 3.5 }],
                    }
                }
            ],
            finalAnswer: 'Decreasing curve through \\((0, 2)\\) and \\((\\ln 3, 0)\\), with horizontal asymptote \\( y = 3 \\); a reflection-and-shift of \\( y = e^{x} \\).'
        }
    },
    {
        id: 'el6-086',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 86',
        difficulty: 'Foundation',
        questionText: 'Sketch the curve \\( y = e^{x - 1} \\), labelling the \\( y \\)-intercept and any asymptote.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the transformation.',
                    workingLatex: 'y = e^{x-1} \\text{ is } y = e^{x} \\text{ translated right by } 1',
                    explanation: 'Replacing \\( x \\) with \\( x - 1 \\) shifts the curve in the \\( +x \\) direction by \\( 1 \\). The asymptote at \\( y = 0 \\) is unchanged because it is horizontal.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the intercepts.',
                    workingLatex: 'y\\text{-int: } e^{0-1} = e^{-1} = \\tfrac{1}{e} \\approx 0.368 \\quad \\text{asymptote: } y = 0',
                    explanation: 'No \\( x \\)-intercept since \\( e^{x-1} > 0 \\) always. The curve still passes through the point one unit right of the original \\( (0,\\,1) \\): namely \\( (1,\\,1) \\).',
                    diagram: {
                        xMin: -2, xMax: 3, yMin: -1, yMax: 8,
                        xTicks: [-1, 1, 2], yTicks: [1, 2, 4, 6],
                        curves: [{ points: sample((x) => Math.exp(x - 1), -2, 3), color: "#1d4ed8", label: "y = e^{x-1}", labelAt: [-1.8, 5.5] }],
                        lines: [{ from: [-2, 0], to: [3, 0], color: "#888", dashed: true, label: "y = 0", labelAt: [2.4, 0.4] }],
                        points: [{ at: [0, 1 / Math.E], label: "(0,\\,\\tfrac{1}{e})", labelAnchor: "se" }, { at: [1, 1], label: "(1,\\,1)", labelAnchor: "nw", r: 3.5 }],
                    }
                }
            ],
            finalAnswer: 'Increasing curve through \\((0, \\tfrac{1}{e})\\) and \\((1, 1)\\), with horizontal asymptote \\( y = 0 \\).'
        }
    },
    {
        id: 'el6-087',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 87',
        difficulty: 'Foundation',
        questionText: 'Sketch the curve \\( y = \\ln(x - 1) \\), labelling the \\( x \\)-intercept and any asymptote.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the transformation.',
                    workingLatex: 'y = \\ln(x - 1) \\text{ is } y = \\ln x \\text{ translated right by } 1',
                    explanation: 'Replacing \\( x \\) with \\( x - 1 \\) shifts the whole curve in the \\( +x \\) direction by \\( 1 \\). The vertical asymptote shifts with it from \\( x = 0 \\) to \\( x = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find intercept and asymptote.',
                    workingLatex: 'x\\text{-int: } \\ln(x-1) = 0 \\Rightarrow x - 1 = 1 \\Rightarrow x = 2 \\quad \\text{asymptote: } x = 1 \\quad \\text{domain: } x > 1',
                    explanation: 'Defined only for \\( x > 1 \\) because the log requires a positive argument. The intercept moves from \\( (1,\\,0) \\) to \\( (2,\\,0) \\).',
                    diagram: {
                        xMin: 0, xMax: 6, yMin: -3, yMax: 2.5,
                        xTicks: [1, 2, 3, 4, 5], yTicks: [-2, -1, 1, 2],
                        curves: [{ points: sample((x) => Math.log(x - 1), 1.07, 6, 80), color: "#1d4ed8", label: "y = \\ln(x-1)", labelAt: [4, 2] }],
                        lines: [{ from: [1, -3], to: [1, 2.5], color: "#888", dashed: true, label: "x = 1", labelAt: [1.15, -2.5] }],
                        points: [{ at: [2, 0], label: "(2,\\,0)", labelAnchor: "se" }, { at: [1 + Math.E, 1], label: "(1+e,\\,1)", labelAnchor: "nw", r: 3.5 }],
                    }
                }
            ],
            finalAnswer: 'Increasing curve through \\((2, 0)\\) and \\((1+e, 1)\\), with vertical asymptote \\( x = 1 \\); defined only for \\( x > 1 \\).'
        }
    },
    {
        id: 'el6-088',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 88',
        difficulty: 'Standard',
        questionText: 'Sketch the curve \\( y = 2\\ln x \\), labelling the \\( x \\)-intercept and any asymptote. Compare with \\( y = \\ln x \\) at \\( x = e \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the transformation.',
                    workingLatex: 'y = 2\\ln x \\text{ is a vertical stretch of } y = \\ln x \\text{ by factor } 2',
                    explanation: 'Multiplying \\( y \\) by \\( 2 \\) stretches every output to twice its value; the shape is the same but the curve climbs faster. The vertical asymptote at \\( x = 0 \\) is unaffected by a vertical stretch.'
                },
                {
                    stepNumber: 2,
                    description: 'Find intercept and asymptote.',
                    workingLatex: 'x\\text{-int: } 2\\ln x = 0 \\Rightarrow \\ln x = 0 \\Rightarrow x = 1 \\quad \\text{asymptote: } x = 0 \\quad 2\\ln e = 2',
                    explanation: 'The \\( x \\)-intercept is unchanged at \\( (1,\\,0) \\) — multiplying \\( 0 \\) by anything is still \\( 0 \\). At \\( x = e \\) this curve reaches \\( 2 \\), where \\( \\ln x \\) only reaches \\( 1 \\).',
                    diagram: {
                        xMin: -0.5, xMax: 6, yMin: -3, yMax: 4,
                        xTicks: [1, 2, 3, 4, 5], yTicks: [-2, -1, 1, 2, 3],
                        curves: [
                            { points: sample((x) => 2 * Math.log(x), 0.06, 6, 80), color: "#1d4ed8", label: "y = 2\\ln x", labelAt: [4, 3.5] },
                            { points: sample((x) => Math.log(x), 0.06, 6, 80), color: "#dc2626", label: "y = \\ln x", labelAt: [4, 1.4] },
                        ],
                        lines: [{ from: [0, -3], to: [0, 4], color: "#888", dashed: true, label: "x = 0", labelAt: [0.15, -2.5] }],
                        points: [{ at: [1, 0], label: "(1,\\,0)", labelAnchor: "se" }, { at: [Math.E, 2], label: "(e,\\,2)", labelAnchor: "nw", r: 3.5 }],
                    }
                }
            ],
            finalAnswer: 'Increasing curve through \\((1, 0)\\) and \\((e, 2)\\), with vertical asymptote \\( x = 0 \\); twice as tall as \\( y = \\ln x \\) for every \\( x > 0 \\).'
        }
    },
    {
        id: 'el6-089',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 89',
        difficulty: 'Foundation',
        questionText: 'Sketch the curve \\( y = 2^{-x} \\), labelling the \\( y \\)-intercept and any asymptote.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite as a decay.',
                    workingLatex: '2^{-x} = \\left(\\tfrac{1}{2}\\right)^{x}',
                    explanation: 'A negative exponent inverts the base, so \\( 2^{-x} \\) is the same as \\( (1/2)^{x} \\) — a decaying exponential with base less than \\( 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find intercept and asymptote.',
                    workingLatex: 'y\\text{-int: } 2^{0} = 1 \\quad \\text{asymptote: } y = 0 \\text{ as } x \\to \\infty',
                    explanation: 'Passes through \\( (0,\\,1) \\) and decays towards the \\( x \\)-axis as \\( x \\) increases. At \\( x = 1 \\) it reaches \\( \\tfrac{1}{2} \\); at \\( x = -1 \\) it climbs to \\( 2 \\).',
                    diagram: {
                        xMin: -3, xMax: 3, yMin: -1, yMax: 8,
                        xTicks: [-2, -1, 1, 2], yTicks: [1, 2, 4, 6],
                        curves: [{ points: sample((x) => Math.pow(2, -x), -3, 3), color: "#1d4ed8", label: "y = 2^{-x}", labelAt: [-2.8, 5.5] }],
                        lines: [{ from: [-3, 0], to: [3, 0], color: "#888", dashed: true, label: "y = 0", labelAt: [2.4, 0.4] }],
                        points: [{ at: [0, 1], label: "(0,\\,1)", labelAnchor: "se" }, { at: [1, 0.5], label: "(1,\\,\\tfrac{1}{2})", labelAnchor: "nw", r: 3.5 }],
                    }
                }
            ],
            finalAnswer: 'Decreasing curve through \\((0, 1)\\) and \\((1, \\tfrac{1}{2})\\), with horizontal asymptote \\( y = 0 \\).'
        }
    },
    {
        id: 'el6-090',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 90',
        difficulty: 'Standard',
        questionText: 'On the same axes, sketch \\( y = \\ln x \\) and \\( y = \\log_{10} x \\). Which curve climbs faster and why?',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify shared and distinct features.',
                    workingLatex: '\\text{Both pass through } (1,\\,0); \\quad \\text{both have asymptote } x = 0',
                    explanation: 'Every \\( y = \\log_{a} x \\) with \\( a > 1 \\) has the same \\( x \\)-intercept \\( (1,\\,0) \\) and the same vertical asymptote \\( x = 0 \\); only the rate of growth differs.'
                },
                {
                    stepNumber: 2,
                    description: 'Compare growth rates using change-of-base.',
                    workingLatex: '\\log_{10} x = \\frac{\\ln x}{\\ln 10} \\approx \\frac{\\ln x}{2.30}',
                    explanation: '\\( \\log_{10} x \\) is just \\( \\ln x \\) scaled vertically by \\( 1/\\ln 10 \\approx 0.434 \\), so it climbs slower. At \\( x = e \\), \\( \\ln x = 1 \\) but \\( \\log_{10} x \\approx 0.434 \\).',
                    diagram: {
                        xMin: -0.5, xMax: 11, yMin: -2, yMax: 2.8,
                        xTicks: [1, 2, 4, 6, 8, 10], yTicks: [-1, 1, 2],
                        curves: [
                            { points: sample((x) => Math.log(x), 0.07, 11, 90), color: "#1d4ed8", label: "y = \\ln x", labelAt: [6.5, 2.3] },
                            { points: sample((x) => Math.log10(x), 0.07, 11, 90), color: "#dc2626", label: "y = \\log_{10} x", labelAt: [6.5, 1.15] },
                        ],
                        lines: [{ from: [0, -2], to: [0, 2.8], color: "#888", dashed: true, label: "x = 0", labelAt: [0.25, -1.7] }],
                        points: [{ at: [1, 0], label: "(1,\\,0)", labelAnchor: "se" }],
                    }
                }
            ],
            finalAnswer: 'Both pass through \\((1, 0)\\) with asymptote \\( x = 0 \\); \\( y = \\ln x \\) climbs faster because \\( \\log_{10} x = \\frac{\\ln x}{\\ln 10} \\) and \\( \\ln 10 \\approx 2.30 > 1 \\).'
        }
    },
];
