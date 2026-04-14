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


    // ── TYPE A: Properties and key features of y = a^x ──────────────────────
    {
        id: 'el1-001',
        topicRef: 'el1',
        topicTitle: 'Exponentials 01',
        difficulty: 'Foundation',
        questionText: 'State two key features that all graphs of the form \\( y = a^x \\) (where \\( a > 1 \\)) have in common.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'graph features', 'y = a^x', 'key facts'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'All exponential graphs pass through the point \\( (0, 1) \\).',
                    workingLatex: 'a^0 = 1 \\text{ for any } a > 0',
                    explanation: 'Any positive number raised to the power zero equals 1.'
                },
                {
                    stepNumber: 2,
                    description: 'The graph has a horizontal asymptote at \\( y = 0 \\).',
                    workingLatex: '\\text{As } x \\to -\\infty,\\quad y \\to 0',
                    explanation: 'The curve gets closer and closer to the \\( x \\)-axis but never touches it.'
                }
            ],
            finalAnswer: '(1) All pass through \\( (0, 1) \\). (2) The \\( x \\)-axis (\\( y = 0 \\)) is an asymptote.'
        }
    },
    {
        id: 'el1-002',
        topicRef: 'el1',
        topicTitle: 'Exponentials 02',
        difficulty: 'Foundation',
        questionText: 'Describe the difference in shape between the graph of \\( y = 4^x \\) and the graph of \\( y = 2^x \\) for \\( x > 0 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'graph comparison', 'steepness', 'a > 1'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Both graphs are increasing and pass through \\( (0, 1) \\).',
                    workingLatex: '4^0 = 1 \\quad \\text{and} \\quad 2^0 = 1',
                    explanation: 'They share the same \\( y \\)-intercept.'
                },
                {
                    stepNumber: 2,
                    description: 'Since \\( 4 > 2 \\), the graph of \\( y = 4^x \\) grows more steeply (faster) than \\( y = 2^x \\) for \\( x > 0 \\).',
                    workingLatex: '4^x > 2^x \\text{ for all } x > 0',
                    explanation: 'A larger base means a faster rate of increase.'
                }
            ],
            finalAnswer: 'Both pass through \\( (0,1) \\) and are increasing, but \\( y = 4^x \\) is steeper (grows faster) than \\( y = 2^x \\) for \\( x > 0 \\).'
        }
    },
    {
        id: 'el1-003',
        topicRef: 'el1',
        topicTitle: 'Exponentials 03',
        difficulty: 'Foundation',
        questionText: 'Describe the graph of \\( y = \\left(\\dfrac{1}{3}\\right)^x \\). In particular, state its \\( y \\)-intercept, whether it is increasing or decreasing, and the equation of its asymptote.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', '0 < a < 1', 'decreasing', 'asymptote', 'graph features'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the \\( y \\)-intercept by setting \\( x = 0 \\).',
                    workingLatex: '\\left(\\frac{1}{3}\\right)^0 = 1',
                    explanation: '\\( y \\)-intercept is \\( (0, 1) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Since the base \\( \\frac{1}{3} < 1 \\), the function is decreasing.',
                    workingLatex: '\\text{As } x \\text{ increases, } \\left(\\frac{1}{3}\\right)^x \\text{ decreases towards } 0',
                    explanation: 'Raising a fraction to a larger power makes it smaller.'
                },
                {
                    stepNumber: 3,
                    description: 'The asymptote is the \\( x \\)-axis.',
                    workingLatex: '\\text{As } x \\to \\infty,\\quad y \\to 0',
                    explanation: 'The graph approaches but never reaches \\( y = 0 \\).'
                }
            ],
            finalAnswer: '\\( y \\)-intercept \\( (0, 1) \\); decreasing; asymptote \\( y = 0 \\).'
        }
    },
    {
        id: 'el1-004',
        topicRef: 'el1',
        topicTitle: 'Exponentials 04',
        difficulty: 'Foundation',
        questionText: 'Explain why \\( y = \\left(\\dfrac{1}{5}\\right)^x \\) can also be written as \\( y = 5^{-x} \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'negative exponents', 'equivalent forms'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the rule for negative exponents.',
                    workingLatex: '\\left(\\frac{1}{5}\\right)^x = \\frac{1}{5^x} = 5^{-x}',
                    explanation: '\\( \\frac{1}{a^x} = a^{-x} \\) by the laws of indices.'
                }
            ],
            finalAnswer: '\\( \\left(\\frac{1}{5}\\right)^x = 5^{-x} \\) because raising the reciprocal to the power \\( x \\) is the same as raising 5 to the power \\( -x \\).'
        }
    },
    {
        id: 'el1-005',
        topicRef: 'el1',
        topicTitle: 'Exponentials 05',
        difficulty: 'Foundation',
        questionText: 'Describe the transformation that maps \\( y = 3^x \\) onto \\( y = 3^{-x} \\). What does this tell you about the relationship between the graphs of \\( y = 3^x \\) and \\( y = \\left(\\frac{1}{3}\\right)^x \\)?',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'reflection', 'transformation', 'equivalent graphs'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replacing \\( x \\) with \\( -x \\) reflects the graph in the \\( y \\)-axis.',
                    workingLatex: 'y = 3^{-x} \\text{ is a reflection of } y = 3^x \\text{ in the } y\\text{-axis}',
                    explanation: 'This is the standard horizontal reflection transformation.'
                },
                {
                    stepNumber: 2,
                    description: 'Note that \\( 3^{-x} = \\left(\\frac{1}{3}\\right)^x \\).',
                    workingLatex: '3^{-x} = \\frac{1}{3^x} = \\left(\\frac{1}{3}\\right)^x',
                    explanation: 'So the two graphs are identical.'
                }
            ],
            finalAnswer: 'Reflection in the \\( y \\)-axis. The graphs of \\( y = 3^x \\) and \\( y = \\left(\\frac{1}{3}\\right)^x \\) are reflections of each other in the \\( y \\)-axis.'
        }
    },
    // ── TYPE B: Evaluating and sketching y = a^x ────────────────────────────
    {
        id: 'el1-006',
        topicRef: 'el1',
        topicTitle: 'Exponentials 06',
        difficulty: 'Foundation',
        questionText: 'For the function \\( f(x) = 2^x \\), evaluate \\( f(0) \\), \\( f(3) \\), \\( f(-2) \\), and \\( f\\!\\left(\\frac{1}{2}\\right) \\). Give exact answers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'evaluate', '2^x', 'exact values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Evaluate \\( f(0) \\).',
                    workingLatex: 'f(0) = 2^0 = 1',
                    explanation: 'Any base to the power zero is 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate \\( f(3) \\).',
                    workingLatex: 'f(3) = 2^3 = 8',
                    explanation: '\\( 2 \\times 2 \\times 2 = 8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate \\( f(-2) \\).',
                    workingLatex: 'f(-2) = 2^{-2} = \\frac{1}{4}',
                    explanation: '\\( 2^{-2} = \\frac{1}{2^2} = \\frac{1}{4} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate \\( f\\!\\left(\\frac{1}{2}\\right) \\).',
                    workingLatex: 'f\\!\\left(\\frac{1}{2}\\right) = 2^{\\frac{1}{2}} = \\sqrt{2}',
                    explanation: 'A power of \\( \\frac{1}{2} \\) means square root.'
                }
            ],
            finalAnswer: '\\( f(0) = 1,\\ f(3) = 8,\\ f(-2) = \\frac{1}{4},\\ f\\!\\left(\\frac{1}{2}\\right) = \\sqrt{2} \\)'
        }
    },
    {
        id: 'el1-007',
        topicRef: 'el1',
        topicTitle: 'Exponentials 07',
        difficulty: 'Foundation',
        questionText: 'On the same axes, sketch the graphs of \\( y = 5^x \\) and \\( y = 5^{-x} \\) for \\( -3 \\leq x \\leq 3 \\). Label the \\( y \\)-intercept and asymptote of each graph.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'sketch', '5^x', 'reflection', 'asymptote'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Both graphs pass through \\( (0, 1) \\).',
                    workingLatex: '5^0 = 1 \\quad \\text{and} \\quad 5^{-0} = 1',
                    explanation: 'Common \\( y \\)-intercept at \\( (0, 1) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Sketch \\( y = 5^x \\): increasing, steeply rising for \\( x > 0 \\), approaching \\( y = 0 \\) as \\( x \\to -\\infty \\).',
                    workingLatex: '\\text{Asymptote: } y = 0 \\text{ (left side)}',
                    explanation: 'Standard increasing exponential curve.'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch \\( y = 5^{-x} \\): decreasing, mirror image of \\( y = 5^x \\) in the \\( y \\)-axis.',
                    workingLatex: '\\text{Asymptote: } y = 0 \\text{ (right side)}',
                    explanation: 'The two graphs are reflections of each other in the \\( y \\)-axis.'
                }
            ],
            finalAnswer: 'Both curves pass through \\( (0,1) \\) with asymptote \\( y=0 \\). \\( y=5^x \\) increases; \\( y=5^{-x} \\) decreases (its mirror image).'
        }
    },
    {
        id: 'el1-008',
        topicRef: 'el1',
        topicTitle: 'Exponentials 08',
        difficulty: 'Foundation',
        questionText: 'The function \\( f(x) = 1.8^x \\). \n\n (a) State the coordinates of the point where the graph crosses the \\( y \\)-axis. \n\n (b) Is the graph increasing or decreasing? \n\n (c) Sketch the graph.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'a > 1', 'y-intercept', 'increasing', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Set \\( x = 0 \\).',
                    workingLatex: 'f(0) = 1.8^0 = 1 \\Rightarrow (0,\\ 1)',
                    explanation: 'All exponential graphs of the form \\( a^x \\) cross the \\( y \\)-axis at 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Since the base \\( 1.8 > 1 \\), the graph is increasing.',
                    workingLatex: 'a = 1.8 > 1 \\Rightarrow \\text{increasing}',
                    explanation: 'As \\( x \\) increases, \\( 1.8^x \\) grows.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Sketch a smooth upward curve through \\( (0,1) \\), rising to the right and approaching \\( y=0 \\) to the left.',
                    workingLatex: '\\text{Asymptote: } y = 0; \\quad \\text{passes through } (-1,\\ \\tfrac{1}{1.8}) \\text{ and } (1,\\ 1.8)',
                    explanation: 'Typical shape of \\( y = a^x \\) for \\( a > 1 \\).'
                }
            ],
            finalAnswer: '(a) \\( (0, 1) \\). (b) Increasing. (c) Smooth upward curve with asymptote \\( y = 0 \\).'
        }
    },
    // ── TYPE C: The number e and the exponential function y = e^x ───────────
    {
        id: 'el1-009',
        topicRef: 'el1',
        topicTitle: 'Exponentials 09',
        difficulty: 'Foundation',
        questionText: 'State the approximate value of \\( e \\) and explain what is special about the function \\( y = e^x \\) in terms of its gradient.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'e', 'gradient', 'self-derivative'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The value of \\( e \\).',
                    workingLatex: 'e \\approx 2.718',
                    explanation: '\\( e \\) is an irrational number approximately equal to 2.718.'
                },
                {
                    stepNumber: 2,
                    description: 'The special gradient property.',
                    workingLatex: '\\frac{d}{dx}(e^x) = e^x',
                    explanation: 'For the function \\( y = e^x \\), the gradient (derivative) at every point equals the value of the function itself. This is unique to \\( e \\).'
                }
            ],
            finalAnswer: '\\( e \\approx 2.718 \\). The gradient of \\( y = e^x \\) equals \\( e^x \\) at every point — i.e., its own value.'
        }
    },
    {
        id: 'el1-010',
        topicRef: 'el1',
        topicTitle: 'Exponentials 10',
        difficulty: 'Foundation',
        questionText: 'Find the gradient of \\( y = e^{3x} \\) at the point where \\( x = 0 \\). Give an exact answer.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'gradient', 'e^kx', 'differentiate'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the form \\( y = e^{kx} \\) with \\( k = 3 \\).',
                    workingLatex: 'y = e^{3x}, \\quad k = 3',
                    explanation: 'This is in the standard form \\( y = e^{kx} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The gradient of \\( y = e^{kx} \\) is \\( ke^{kx} \\).',
                    workingLatex: '\\frac{dy}{dx} = 3e^{3x}',
                    explanation: 'Multiply the function by \\( k \\) to get the gradient.'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate at \\( x = 0 \\).',
                    workingLatex: '3e^{3 \\times 0} = 3e^0 = 3 \\times 1 = 3',
                    explanation: '\\( e^0 = 1 \\).'
                }
            ],
            finalAnswer: 'Gradient \\( = 3 \\)'
        }
    },
    {
        id: 'el1-011',
        topicRef: 'el1',
        topicTitle: 'Exponentials 11',
        difficulty: 'Foundation',
        questionText: 'Find the gradient of \\( y = 4e^{2x} \\) at the points \\( x = 0 \\) and \\( x = 1 \\). Give exact answers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'gradient', 'Ae^kx', 'evaluate'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify \\( A = 4 \\) and \\( k = 2 \\).',
                    workingLatex: 'y = 4e^{2x}, \\quad A = 4, \\quad k = 2',
                    explanation: 'In the form \\( y = Ae^{kx} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write the gradient formula.',
                    workingLatex: '\\frac{dy}{dx} = kAe^{kx} = 2 \\times 4 \\times e^{2x} = 8e^{2x}',
                    explanation: 'Multiply \\( A \\) by \\( k \\) to get the coefficient of the derivative.'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate at \\( x = 0 \\).',
                    workingLatex: '8e^{0} = 8',
                    explanation: '\\( e^0 = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate at \\( x = 1 \\).',
                    workingLatex: '8e^{2 \\times 1} = 8e^2',
                    explanation: 'Leave as an exact value.'
                }
            ],
            finalAnswer: 'At \\( x = 0 \\): gradient \\( = 8 \\). At \\( x = 1 \\): gradient \\( = 8e^2 \\).'
        }
    },
    {
        id: 'el1-012',
        topicRef: 'el1',
        topicTitle: 'Exponentials 12',
        difficulty: 'Foundation',
        questionText: 'Find the gradient of \\( f(x) = 7e^{5x} \\) at the points \\( x = 0 \\) and \\( x = 2 \\). Leave your answers as exact values.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'gradient', 'Ae^kx', 'exact values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify \\( A = 7 \\) and \\( k = 5 \\).',
                    workingLatex: 'f(x) = 7e^{5x}',
                    explanation: 'Standard form \\( Ae^{kx} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The gradient is \\( kAe^{kx} \\).',
                    workingLatex: "f'(x) = 5 \\times 7 \\times e^{5x} = 35e^{5x}",
                    explanation: 'Multiply the exponent by the coefficient.'
                },
                {
                    stepNumber: 3,
                    description: 'Gradient at \\( x = 0 \\).',
                    workingLatex: "f'(0) = 35e^{0} = 35",
                    explanation: '\\( e^0 = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Gradient at \\( x = 2 \\).',
                    workingLatex: "f'(2) = 35e^{10}",
                    explanation: 'Exact value.'
                }
            ],
            finalAnswer: 'At \\( x = 0 \\): gradient \\( = 35 \\). At \\( x = 2 \\): gradient \\( = 35e^{10} \\).'
        }
    },
    {
        id: 'el1-013',
        topicRef: 'el1',
        topicTitle: 'Exponentials 13',
        difficulty: 'Foundation',
        questionText: 'Find the gradient of \\( y = 3e^{-2x} \\) at the points \\( x = 1 \\) and \\( x = -1 \\). Leave your answers as exact values.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'gradient', 'negative exponent', 'Ae^kx'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Here \\( A = 3 \\) and \\( k = -2 \\).',
                    workingLatex: 'y = 3e^{-2x}',
                    explanation: 'The exponent is negative, so the function is decreasing.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the gradient formula.',
                    workingLatex: '\\frac{dy}{dx} = (-2)(3)e^{-2x} = -6e^{-2x}',
                    explanation: 'Multiply \\( k \\) by \\( A \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Gradient at \\( x = 1 \\).',
                    workingLatex: '-6e^{-2} = -\\frac{6}{e^2}',
                    explanation: 'The gradient is negative (decreasing function).'
                },
                {
                    stepNumber: 4,
                    description: 'Gradient at \\( x = -1 \\).',
                    workingLatex: '-6e^{-2(-1)} = -6e^{2}',
                    explanation: 'Substituting \\( x = -1 \\).'
                }
            ],
            finalAnswer: 'At \\( x = 1 \\): gradient \\( = -\\dfrac{6}{e^2} \\). At \\( x = -1 \\): gradient \\( = -6e^2 \\).'
        }
    },
    {
        id: 'el1-014',
        topicRef: 'el1',
        topicTitle: 'Exponentials 14',
        difficulty: 'Foundation',
        questionText: 'Find the gradient of \\( y = 6e^{4x} \\) at the points \\( x = -1 \\) and \\( x = 0.5 \\). Leave your answers as exact values.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'gradient', 'Ae^kx', 'evaluate'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify \\( A = 6 \\), \\( k = 4 \\).',
                    workingLatex: 'y = 6e^{4x}',
                    explanation: 'Standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient formula.',
                    workingLatex: '\\frac{dy}{dx} = 4 \\times 6 \\times e^{4x} = 24e^{4x}',
                    explanation: 'Multiply the coefficient by the exponent.'
                },
                {
                    stepNumber: 3,
                    description: 'Gradient at \\( x = -1 \\).',
                    workingLatex: '24e^{-4} = \\frac{24}{e^4}',
                    explanation: 'Substitute \\( x = -1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Gradient at \\( x = 0.5 \\).',
                    workingLatex: '24e^{4 \\times 0.5} = 24e^{2}',
                    explanation: 'Substitute \\( x = 0.5 \\).'
                }
            ],
            finalAnswer: 'At \\( x = -1 \\): gradient \\( = \\dfrac{24}{e^4} \\). At \\( x = 0.5 \\): gradient \\( = 24e^2 \\).'
        }
    },
    {
        id: 'el1-015',
        topicRef: 'el1',
        topicTitle: 'Exponentials 15',
        difficulty: 'Foundation',
        questionText: 'Find the gradient of \\( g(t) = 2.5e^{3t} \\) at the points \\( t = 0 \\) and \\( t = 4 \\). Leave your answers as exact values.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'gradient', 'Ae^kt', 'different variable'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify \\( A = 2.5 \\) and \\( k = 3 \\).',
                    workingLatex: 'g(t) = 2.5e^{3t}',
                    explanation: 'The variable is \\( t \\) instead of \\( x \\) — the same rule applies.'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient formula.',
                    workingLatex: "g'(t) = 3 \\times 2.5 \\times e^{3t} = 7.5e^{3t}",
                    explanation: '\\( kA = 3 \\times 2.5 = 7.5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Gradient at \\( t = 0 \\).',
                    workingLatex: "g'(0) = 7.5e^0 = 7.5",
                    explanation: '\\( e^0 = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Gradient at \\( t = 4 \\).',
                    workingLatex: "g'(4) = 7.5e^{12}",
                    explanation: 'Exact value.'
                }
            ],
            finalAnswer: 'At \\( t = 0 \\): gradient \\( = 7.5 \\). At \\( t = 4 \\): gradient \\( = 7.5e^{12} \\).'
        }
    },
    // ── TYPE D: Matching equations to graphs ────────────────────────────────
    {
        id: 'el1-016',
        topicRef: 'el1',
        topicTitle: 'Exponentials 16',
        difficulty: 'Foundation',
        questionText: 'Three graphs are shown. Match each of the following functions to the correct graph: \\( y = e^x \\), \\( y = 2e^x \\), \\( y = e^{2x} \\). Justify your answers.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'graph matching', 'e^x', 'transformations'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'All three pass through or near \\( (0,1) \\) — but \\( y = 2e^x \\) passes through \\( (0, 2) \\).',
                    workingLatex: 'y = 2e^0 = 2; \\quad y = e^0 = 1; \\quad y = e^0 = 1',
                    explanation: 'The graph with \\( y \\)-intercept 2 is \\( y = 2e^x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Between \\( y = e^x \\) and \\( y = e^{2x} \\): both pass through \\( (0,1) \\), but \\( y = e^{2x} \\) grows much faster.',
                    workingLatex: 'e^{2x} = (e^x)^2 \\text{ so it grows faster for } x > 0',
                    explanation: 'The steeper graph is \\( y = e^{2x} \\); the shallower one is \\( y = e^x \\).'
                }
            ],
            finalAnswer: 'Graph with \\( y \\)-intercept 2 → \\( y = 2e^x \\). Steepest remaining graph → \\( y = e^{2x} \\). Remaining → \\( y = e^x \\).'
        }
    },
    {
        id: 'el1-017',
        topicRef: 'el1',
        topicTitle: 'Exponentials 17',
        difficulty: 'Foundation',
        questionText: 'Describe the transformation that maps \\( y = e^x \\) onto \\( y = e^x + 3 \\). State the \\( y \\)-intercept and asymptote of \\( y = e^x + 3 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'vertical translation', 'transformation', 'e^x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Adding 3 outside the function shifts the graph up by 3 units.',
                    workingLatex: 'y = e^x \\to y = e^x + 3 \\quad \\text{(translation } +3 \\text{ in } y\\text{-direction)}',
                    explanation: 'This is a vertical translation.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'x = 0: \\quad y = e^0 + 3 = 1 + 3 = 4',
                    explanation: '\\( y \\)-intercept is \\( (0, 4) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'The asymptote shifts up too.',
                    workingLatex: '\\text{As } x \\to -\\infty, \\quad e^x \\to 0 \\Rightarrow y \\to 3',
                    explanation: 'The original asymptote \\( y = 0 \\) shifts to \\( y = 3 \\).'
                }
            ],
            finalAnswer: 'Vertical translation \\( +3 \\). \\( y \\)-intercept \\( (0, 4) \\); asymptote \\( y = 3 \\).'
        }
    },
    {
        id: 'el1-018',
        topicRef: 'el1',
        topicTitle: 'Exponentials 18',
        difficulty: 'Foundation',
        questionText: 'Describe the transformation that maps \\( y = e^x \\) onto \\( y = e^{x-2} \\). State the \\( y \\)-intercept and the asymptote of \\( y = e^{x-2} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'horizontal translation', 'transformation', 'e^x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replacing \\( x \\) with \\( x - 2 \\) shifts the graph 2 units to the right.',
                    workingLatex: 'y = e^x \\to y = e^{x-2} \\quad \\text{(translation } +2 \\text{ in } x\\text{-direction)}',
                    explanation: 'This is a horizontal translation of \\( +2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'x = 0: \\quad y = e^{0-2} = e^{-2} = \\frac{1}{e^2}',
                    explanation: 'The \\( y \\)-intercept is at \\( \\left(0, \\frac{1}{e^2}\\right) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'The asymptote remains \\( y = 0 \\) (horizontal translation does not move the asymptote).',
                    workingLatex: '\\text{As } x \\to -\\infty, \\quad y \\to 0',
                    explanation: 'The asymptote is unchanged.'
                }
            ],
            finalAnswer: 'Horizontal translation \\( +2 \\). \\( y \\)-intercept \\( \\left(0, \\dfrac{1}{e^2}\\right) \\); asymptote \\( y = 0 \\).'
        }
    },
    {
        id: 'el1-019',
        topicRef: 'el1',
        topicTitle: 'Exponentials 19',
        difficulty: 'Foundation',
        questionText: 'For the function \\( y = 3e^x \\): \n\n (a) State the \\( y \\)-intercept. \n\n (b) Describe the transformation from \\( y = e^x \\). \n\n (c) Find the gradient of \\( y = 3e^x \\) at \\( x = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'vertical stretch', 'gradient at origin', 'e^x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Set \\( x = 0 \\).',
                    workingLatex: 'y = 3e^0 = 3 \\Rightarrow (0,\\ 3)',
                    explanation: '\\( y \\)-intercept is \\( (0, 3) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Multiplying by 3 stretches vertically by scale factor 3.',
                    workingLatex: 'y = e^x \\to y = 3e^x \\quad \\text{(vertical stretch, scale factor 3)}',
                    explanation: 'Every \\( y \\)-value is multiplied by 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Gradient of \\( y = 3e^x \\) is \\( 3e^x \\) (since \\( k = 1 \\)).',
                    workingLatex: '\\frac{dy}{dx}\\Big|_{x=0} = 3e^0 = 3',
                    explanation: 'The gradient equals the function value everywhere for \\( y = 3e^x \\).'
                }
            ],
            finalAnswer: '(a) \\( (0, 3) \\). (b) Vertical stretch by scale factor 3. (c) Gradient \\( = 3 \\).'
        }
    },
    {
        id: 'el1-020',
        topicRef: 'el1',
        topicTitle: 'Exponentials 20',
        difficulty: 'Foundation',
        questionText: 'On the same axes, sketch \\( y = e^x \\), \\( y = e^x - 1 \\), and \\( y = -e^x \\). Label all \\( y \\)-intercepts and asymptotes.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'sketch', 'multiple transformations', 'e^x', 'reflection'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '\\( y = e^x \\): passes through \\( (0,1) \\), increasing, asymptote \\( y = 0 \\).',
                    workingLatex: 'y\\text{-intercept: } (0,1); \\quad \\text{asymptote: } y = 0',
                    explanation: 'Standard exponential.'
                },
                {
                    stepNumber: 2,
                    description: '\\( y = e^x - 1 \\): same shape, shifted down 1 unit. Passes through \\( (0, 0) \\); asymptote \\( y = -1 \\).',
                    workingLatex: 'y\\text{-intercept: } (0,0); \\quad \\text{asymptote: } y = -1',
                    explanation: 'Vertical translation of \\( -1 \\). Note it crosses the origin!'
                },
                {
                    stepNumber: 3,
                    description: '\\( y = -e^x \\): reflection of \\( y = e^x \\) in the \\( x \\)-axis. Passes through \\( (0,-1) \\); decreasing; asymptote \\( y = 0 \\) (approached from below).',
                    workingLatex: 'y\\text{-intercept: } (0,-1); \\quad \\text{asymptote: } y = 0',
                    explanation: 'The curve lies entirely below the \\( x \\)-axis.'
                }
            ],
            finalAnswer: '\\( y=e^x \\): \\( (0,1) \\), asymptote \\( y=0 \\). \\( y=e^x-1 \\): \\( (0,0) \\), asymptote \\( y=-1 \\). \\( y=-e^x \\): \\( (0,-1) \\), asymptote \\( y=0 \\).'
        }
    },
    // ── TYPE E: Find A and k from given information ──────────────────────────
    {
        id: 'el1-021',
        topicRef: 'el1',
        topicTitle: 'Exponentials 21',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = Ae^{kx} \\) has gradient \\( 6e^{3x} \\). Find the values of \\( A \\) and \\( k \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'find A and k', 'gradient', 'Ae^kx'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The gradient of \\( y = Ae^{kx} \\) is \\( kAe^{kx} \\).',
                    workingLatex: '\\frac{dy}{dx} = kAe^{kx}',
                    explanation: 'Standard differentiation rule for this form.'
                },
                {
                    stepNumber: 2,
                    description: 'Match with the given gradient \\( 6e^{3x} \\).',
                    workingLatex: 'kA = 6 \\quad \\text{and} \\quad k = 3',
                    explanation: 'Equate the exponents and the coefficients.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( A \\).',
                    workingLatex: 'A = \\frac{6}{k} = \\frac{6}{3} = 2',
                    explanation: '\\( kA = 6 \\) and \\( k = 3 \\Rightarrow A = 2 \\).'
                }
            ],
            finalAnswer: '\\( k = 3,\\ A = 2 \\), so \\( y = 2e^{3x} \\).'
        }
    },
    {
        id: 'el1-022',
        topicRef: 'el1',
        topicTitle: 'Exponentials 22',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = Ae^{kx} \\) has gradient \\( 20e^{4x} \\). Find \\( A \\) and \\( k \\), then find the exact \\( y \\)-coordinates when \\( x = 0 \\) and \\( x = 3 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'find A and k', 'evaluate y-coordinates', 'Ae^kx'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Gradient of \\( y = Ae^{kx} \\) is \\( kAe^{kx} \\).',
                    workingLatex: 'kAe^{kx} = 20e^{4x}',
                    explanation: 'Match the two expressions.'
                },
                {
                    stepNumber: 2,
                    description: 'Match the exponent: \\( k = 4 \\). Match the coefficient: \\( kA = 20 \\Rightarrow A = 5 \\).',
                    workingLatex: 'k = 4, \\quad A = 5',
                    explanation: 'So \\( y = 5e^{4x} \\).'
                },
                {
                    stepNumber: 3,
                    description: '\\( y \\)-coordinate at \\( x = 0 \\).',
                    workingLatex: 'y = 5e^0 = 5',
                    explanation: 'The \\( y \\)-intercept.'
                },
                {
                    stepNumber: 4,
                    description: '\\( y \\)-coordinate at \\( x = 3 \\).',
                    workingLatex: 'y = 5e^{12}',
                    explanation: 'Exact value.'
                }
            ],
            finalAnswer: '\\( A = 5,\\ k = 4 \\). At \\( x = 0 \\): \\( y = 5 \\). At \\( x = 3 \\): \\( y = 5e^{12} \\).'
        }
    },
    {
        id: 'el1-023',
        topicRef: 'el1',
        topicTitle: 'Exponentials 23',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = Ae^{kx} \\) passes through \\( (0, 4) \\) and has gradient \\( 12 \\) at \\( x = 0 \\). Find \\( A \\) and \\( k \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'find A and k', 'initial conditions', 'gradient at x=0'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the point \\( (0, 4) \\) to find \\( A \\).',
                    workingLatex: 'Ae^{k \\times 0} = Ae^0 = A = 4',
                    explanation: 'At \\( x = 0 \\), \\( y = A \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Use the gradient at \\( x = 0 \\) to find \\( k \\).',
                    workingLatex: 'kAe^{0} = kA = k \\times 4 = 12 \\Rightarrow k = 3',
                    explanation: 'Gradient at \\( x = 0 \\) is \\( kA \\).'
                }
            ],
            finalAnswer: '\\( A = 4,\\ k = 3 \\), so \\( y = 4e^{3x} \\).'
        }
    },
    {
        id: 'el1-024',
        topicRef: 'el1',
        topicTitle: 'Exponentials 24',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = Ae^{kx} \\) passes through \\( (0, 6) \\) and the gradient at \\( x = 0 \\) is \\( -18 \\). Find \\( A \\) and \\( k \\), and state whether the function is increasing or decreasing.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'find A and k', 'negative gradient', 'decreasing'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'From the \\( y \\)-intercept: \\( A = 6 \\).',
                    workingLatex: 'y(0) = Ae^0 = A = 6',
                    explanation: 'At \\( x = 0 \\), \\( e^0 = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient at \\( x = 0 \\) is \\( kA = -18 \\).',
                    workingLatex: 'k \\times 6 = -18 \\Rightarrow k = -3',
                    explanation: 'A negative \\( k \\) means the function is decreasing.'
                },
                {
                    stepNumber: 3,
                    description: 'State the nature.',
                    workingLatex: 'k = -3 < 0 \\Rightarrow \\text{decreasing}',
                    explanation: 'Since \\( k < 0 \\), the function decays exponentially.'
                }
            ],
            finalAnswer: '\\( A = 6,\\ k = -3 \\), so \\( y = 6e^{-3x} \\). The function is decreasing.'
        }
    },
    {
        id: 'el1-025',
        topicRef: 'el1',
        topicTitle: 'Exponentials 25',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = Ae^{kx} \\) has gradient \\( 15e^{5x} \\) at point \\( x = 2 \\). Find \\( A \\) and \\( k \\), and hence find the exact \\( y \\)-coordinates at \\( x = 4 \\) and \\( x = 10 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'find A and k', 'evaluate', 'Ae^kx'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The gradient function is \\( kAe^{kx} = 15e^{5x} \\).',
                    workingLatex: 'k = 5, \\quad kA = 15 \\Rightarrow A = 3',
                    explanation: 'Match coefficients and exponents.'
                },
                {
                    stepNumber: 2,
                    description: 'So \\( y = 3e^{5x} \\).',
                    workingLatex: 'y = 3e^{5x}',
                    explanation: 'The equation of the exponential function.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( y \\) at \\( x = 4 \\).',
                    workingLatex: 'y = 3e^{20}',
                    explanation: '\\( 5 \\times 4 = 20 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\) at \\( x = 10 \\).',
                    workingLatex: 'y = 3e^{50}',
                    explanation: '\\( 5 \\times 10 = 50 \\).'
                }
            ],
            finalAnswer: '\\( A = 3,\\ k = 5 \\). At \\( x = 4 \\): \\( y = 3e^{20} \\). At \\( x = 10 \\): \\( y = 3e^{50} \\).'
        }
    },
    // ── TYPE F: Sketching y = Ae^kx with transformations ────────────────────
    {
        id: 'el1-026',
        topicRef: 'el1',
        topicTitle: 'Exponentials 26',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = 2e^{-x} \\), labelling the \\( y \\)-intercept and asymptote. Describe the two transformations from \\( y = e^x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'sketch', 'transformation', 'decreasing', 'Ae^kx'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Transformation 1: replace \\( x \\) with \\( -x \\) to get \\( y = e^{-x} \\).',
                    workingLatex: 'y = e^x \\to y = e^{-x} \\quad \\text{(reflection in } y\\text{-axis)}',
                    explanation: 'Produces a decreasing exponential.'
                },
                {
                    stepNumber: 2,
                    description: 'Transformation 2: multiply by 2 to get \\( y = 2e^{-x} \\).',
                    workingLatex: 'y = e^{-x} \\to y = 2e^{-x} \\quad \\text{(vertical stretch, scale factor 2)}',
                    explanation: 'Doubles all \\( y \\)-values.'
                },
                {
                    stepNumber: 3,
                    description: 'Label the \\( y \\)-intercept and asymptote.',
                    workingLatex: 'y\\text{-intercept: } (0,\\ 2); \\quad \\text{asymptote: } y = 0',
                    explanation: '\\( 2e^0 = 2 \\). As \\( x \\to \\infty, y \\to 0 \\).'
                }
            ],
            finalAnswer: '\\( y \\)-intercept \\( (0, 2) \\); asymptote \\( y = 0 \\). Transformations: reflection in \\( y \\)-axis, then vertical stretch factor 2.'
        }
    },
    {
        id: 'el1-027',
        topicRef: 'el1',
        topicTitle: 'Exponentials 27',
        difficulty: 'Foundation',
        questionText: 'For the graph of \\( y = 5e^{2x} - 3 \\): \n\n (a) State the asymptote. \n\n (b) Find the \\( y \\)-intercept. \n\n (c) State the range of the function.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'vertical translation', 'asymptote', 'range', 'y-intercept'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): As \\( x \\to -\\infty \\), \\( 5e^{2x} \\to 0 \\), so \\( y \\to -3 \\).',
                    workingLatex: '\\text{Asymptote: } y = -3',
                    explanation: 'The \\( -3 \\) shifts the asymptote from \\( y=0 \\) to \\( y=-3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Set \\( x = 0 \\).',
                    workingLatex: 'y = 5e^0 - 3 = 5 - 3 = 2 \\Rightarrow (0,\\ 2)',
                    explanation: '\\( e^0 = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Since \\( 5e^{2x} > 0 \\) always, we have \\( y > -3 \\) always.',
                    workingLatex: 'y > -3 \\quad \\text{(i.e., range is } (-3, \\infty))',
                    explanation: 'The function never reaches its asymptote.'
                }
            ],
            finalAnswer: '(a) \\( y = -3 \\). (b) \\( (0, 2) \\). (c) \\( y > -3 \\).'
        }
    },
    {
        id: 'el1-028',
        topicRef: 'el1',
        topicTitle: 'Exponentials 28',
        difficulty: 'Foundation',
        questionText: 'The function \\( f(x) = Ae^{kx} \\) models the temperature (°C) of a liquid cooling over time \\( x \\) (minutes). At \\( x = 0 \\) the temperature is 80°C, and the rate of cooling at \\( x = 0 \\) is \\( -8 \\) °C/min. Find \\( A \\) and \\( k \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'modelling', 'find A and k', 'cooling', 'real world'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use \\( f(0) = 80 \\) to find \\( A \\).',
                    workingLatex: 'f(0) = Ae^0 = A = 80',
                    explanation: 'The initial temperature gives \\( A \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The rate of cooling is the gradient. At \\( x = 0 \\), gradient = \\( kA = -8 \\).',
                    workingLatex: 'k \\times 80 = -8 \\Rightarrow k = -\\frac{1}{10} = -0.1',
                    explanation: 'A negative gradient means the temperature is falling.'
                }
            ],
            finalAnswer: '\\( A = 80,\\ k = -0.1 \\), so \\( f(x) = 80e^{-0.1x} \\).'
        }
    },
    {
        id: 'el1-029',
        topicRef: 'el1',
        topicTitle: 'Exponentials 29',
        difficulty: 'Foundation',
        questionText: 'A population is modelled by \\( P = 500e^{0.04t} \\), where \\( t \\) is time in years. \n\n (a) State the initial population. \n\n (b) Find the rate of growth of the population at \\( t = 0 \\). \n\n (c) Is the population increasing or decreasing? Give a reason.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'population growth', 'modelling', 'gradient', 'real world'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Set \\( t = 0 \\).',
                    workingLatex: 'P(0) = 500e^0 = 500',
                    explanation: 'Initial population is 500.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Rate of growth = gradient = \\( kA e^{kt} \\). At \\( t = 0 \\):',
                    workingLatex: '0.04 \\times 500 \\times e^0 = 20 \\text{ individuals/year}',
                    explanation: 'The population grows at 20 per year initially.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Since \\( k = 0.04 > 0 \\), the population is increasing.',
                    workingLatex: 'k > 0 \\Rightarrow P \\text{ increases as } t \\text{ increases}',
                    explanation: 'A positive exponent means exponential growth.'
                }
            ],
            finalAnswer: '(a) 500. (b) 20 individuals/year. (c) Increasing, because \\( k = 0.04 > 0 \\).'
        }
    },
    {
        id: 'el1-030',
        topicRef: 'el1',
        topicTitle: 'Exponentials 30',
        difficulty: 'Foundation',
        questionText: 'Find the gradient of \\( y = 8e^{-3x} \\) at the points \\( x = -2 \\) and \\( x = 0.5 \\). Leave your answers as exact values.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'gradient', 'negative k', 'Ae^kx'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify \\( A = 8 \\) and \\( k = -3 \\).',
                    workingLatex: 'y = 8e^{-3x}',
                    explanation: 'Decreasing exponential.'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient formula.',
                    workingLatex: '\\frac{dy}{dx} = (-3)(8)e^{-3x} = -24e^{-3x}',
                    explanation: '\\( kA = -24 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Gradient at \\( x = -2 \\).',
                    workingLatex: '-24e^{-3(-2)} = -24e^{6}',
                    explanation: 'Substitute \\( x = -2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Gradient at \\( x = 0.5 \\).',
                    workingLatex: '-24e^{-3(0.5)} = -24e^{-1.5} = -\\frac{24}{e^{1.5}}',
                    explanation: 'Substitute \\( x = 0.5 \\).'
                }
            ],
            finalAnswer: 'At \\( x = -2 \\): gradient \\( = -24e^6 \\). At \\( x = 0.5 \\): gradient \\( = -\\dfrac{24}{e^{3/2}} \\).'
        }
    },
    // ── TYPE G: Multi-part exam-style ───────────────────────────────────────
    {
        id: 'el1-031',
        topicRef: 'el1',
        topicTitle: 'Exponentials 31',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = Ae^{kx} \\) passes through the points \\( (0, 3) \\) and has gradient \\( 9 \\) at \\( x = 0 \\). \n\n (a) Find the values of \\( A \\) and \\( k \\). \n\n (b) Write down the gradient function. \n\n (c) Find the exact gradient at \\( x = 2 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'find A and k', 'gradient function', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): From the \\( y \\)-intercept \\( (0, 3) \\).',
                    workingLatex: 'A = 3',
                    explanation: '\\( y(0) = A = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'From gradient \\( = 9 \\) at \\( x = 0 \\): \\( kA = 9 \\).',
                    workingLatex: 'k \\times 3 = 9 \\Rightarrow k = 3',
                    explanation: 'So \\( y = 3e^{3x} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Gradient function.',
                    workingLatex: '\\frac{dy}{dx} = 9e^{3x}',
                    explanation: '\\( kA = 9 \\), multiplied by \\( e^{3x} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Part (c): Gradient at \\( x = 2 \\).',
                    workingLatex: '9e^{6}',
                    explanation: '\\( 3 \\times 2 = 6 \\).'
                }
            ],
            finalAnswer: '(a) \\( A = 3,\\ k = 3 \\). (b) \\( \\frac{dy}{dx} = 9e^{3x} \\). (c) Gradient \\( = 9e^6 \\).'
        }
    },
    {
        id: 'el1-032',
        topicRef: 'el1',
        topicTitle: 'Exponentials 32',
        difficulty: 'Foundation',
        questionText: '(a) On the same axes, sketch the graphs of \\( y = e^x \\) and \\( y = 4 - e^x \\) for \\( -2 \\leq x \\leq 2 \\). Label the intercepts of each graph. \n\n \n\n (b) Find the coordinates of the point where the two graphs intersect.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'sketch', 'intersection', 'e^x', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Key features of \\( y = e^x \\).',
                    workingLatex: 'y\\text{-intercept: }(0,1); \\quad \\text{asymptote: }y=0',
                    explanation: 'Standard increasing exponential.'
                },
                {
                    stepNumber: 2,
                    description: 'Key features of \\( y = 4 - e^x \\).',
                    workingLatex: 'y\\text{-intercept: }(0,\\ 4-1)=(0,3); \\quad x\\text{-intercept: }e^x=4 \\Rightarrow x = \\ln 4',
                    explanation: '\\( y = 0 \\Rightarrow e^x = 4 \\Rightarrow x = \\ln 4 \\approx 1.39 \\). Asymptote as \\( x \\to -\\infty \\): \\( y \\to 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Set the equations equal.',
                    workingLatex: 'e^x = 4 - e^x \\Rightarrow 2e^x = 4 \\Rightarrow e^x = 2 \\Rightarrow x = \\ln 2',
                    explanation: 'Solve for \\( x \\) by collecting \\( e^x \\) terms.'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\) at the intersection.',
                    workingLatex: 'y = e^{\\ln 2} = 2 \\Rightarrow \\text{intersection at } (\\ln 2,\\ 2)',
                    explanation: '\\( e^{\\ln 2} = 2 \\).'
                }
            ],
            finalAnswer: '(b) Intersection at \\( (\\ln 2,\\ 2) \\).'
        }
    },
    {
        id: 'el1-033',
        topicRef: 'el1',
        topicTitle: 'Exponentials 33',
        difficulty: 'Foundation',
        questionText: 'The mass \\( M \\) grams of a radioactive substance at time \\( t \\) hours is modelled by \\( M = 120e^{-0.05t} \\). \n\n (a) Find the initial mass. \n\n (b) Find the rate of decay at \\( t = 0 \\). \n\n (c) Find the exact mass when \\( t = 20 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'radioactive decay', 'modelling', 'gradient', 'real world'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Set \\( t = 0 \\).',
                    workingLatex: 'M(0) = 120e^0 = 120 \\text{ g}',
                    explanation: 'The initial mass is 120 g.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Rate of decay = gradient. \\( \\frac{dM}{dt} = kA e^{kt} \\). At \\( t = 0 \\):',
                    workingLatex: 'kA = (-0.05)(120) = -6 \\text{ g/hour}',
                    explanation: 'Negative because the mass is decreasing.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Substitute \\( t = 20 \\).',
                    workingLatex: 'M(20) = 120e^{-0.05 \\times 20} = 120e^{-1} = \\frac{120}{e}',
                    explanation: '\\( -0.05 \\times 20 = -1 \\).'
                }
            ],
            finalAnswer: '(a) 120 g. (b) \\( -6 \\) g/hour. (c) \\( M = \\dfrac{120}{e} \\) g.'
        }
    },
    {
        id: 'el1-034',
        topicRef: 'el1',
        topicTitle: 'Exponentials 34',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = Ae^{kx} \\) has gradient \\( 12e^{2x} \\) at the point \\( x = 2 \\). Find \\( A \\) and \\( k \\), and hence find the exact \\( y \\)-coordinates when \\( x = 4 \\) and \\( x = 12 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'find A and k', 'evaluate', 'multi-part', 'Ae^kx'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The gradient of \\( y = Ae^{kx} \\) is \\( kAe^{kx} \\). Match with \\( 12e^{2x} \\).',
                    workingLatex: 'k = 2, \\quad kA = 12 \\Rightarrow A = 6',
                    explanation: 'Equate exponents and coefficients.'
                },
                {
                    stepNumber: 2,
                    description: 'So \\( y = 6e^{2x} \\).',
                    workingLatex: 'y = 6e^{2x}',
                    explanation: 'The equation of the curve.'
                },
                {
                    stepNumber: 3,
                    description: '\\( y \\)-coordinate at \\( x = 4 \\).',
                    workingLatex: 'y = 6e^{8}',
                    explanation: '\\( 2 \\times 4 = 8 \\).'
                },
                {
                    stepNumber: 4,
                    description: '\\( y \\)-coordinate at \\( x = 12 \\).',
                    workingLatex: 'y = 6e^{24}',
                    explanation: '\\( 2 \\times 12 = 24 \\).'
                }
            ],
            finalAnswer: '\\( A = 6,\\ k = 2 \\). At \\( x = 4 \\): \\( y = 6e^8 \\). At \\( x = 12 \\): \\( y = 6e^{24} \\).'
        }
    },
    {
        id: 'el1-035',
        topicRef: 'el1',
        topicTitle: 'Exponentials 35',
        difficulty: 'Foundation',
        questionText: '(a) Sketch the graph of \\( y = 3e^{2x} - 6 \\), labelling the \\( y \\)-intercept, any \\( x \\)-intercept, and the asymptote. \n\n \n\n (b) State the range of the function. \n\n \n\n (c) Find the gradient of the curve at \\( x = 0 \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['exponentials', 'sketch', 'y-intercept', 'x-intercept', 'asymptote', 'range', 'gradient', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Find the asymptote.',
                    workingLatex: '\\text{As } x \\to -\\infty, \\quad 3e^{2x} \\to 0 \\Rightarrow y \\to -6',
                    explanation: 'Asymptote: \\( y = -6 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'x = 0: \\quad y = 3e^0 - 6 = 3 - 6 = -3 \\Rightarrow (0,\\ -3)',
                    explanation: '\\( e^0 = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( x \\)-intercept (where \\( y = 0 \\)).',
                    workingLatex: '3e^{2x} = 6 \\Rightarrow e^{2x} = 2 \\Rightarrow 2x = \\ln 2 \\Rightarrow x = \\frac{\\ln 2}{2}',
                    explanation: 'Takes logarithms to solve for \\( x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch: increasing curve from asymptote \\( y = -6 \\), crossing \\( x \\)-axis at \\( x = \\frac{\\ln 2}{2} \\approx 0.35 \\), \\( y \\)-intercept at \\( -3 \\).',
                    workingLatex: '\\text{x-intercept: } \\left(\\tfrac{\\ln 2}{2},\\ 0\\right)',
                    explanation: 'Label all three key points/lines.'
                },
                {
                    stepNumber: 5,
                    description: 'Part (b): Since \\( 3e^{2x} > 0 \\) always, \\( y > -6 \\) always.',
                    workingLatex: '\\text{Range: } y > -6',
                    explanation: 'The function never reaches its asymptote.'
                },
                {
                    stepNumber: 6,
                    description: 'Part (c): Gradient function.',
                    workingLatex: '\\frac{dy}{dx} = 2 \\times 3 \\times e^{2x} = 6e^{2x}',
                    explanation: '\\( kA = 2 \\times 3 = 6 \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Gradient at \\( x = 0 \\).',
                    workingLatex: '6e^{0} = 6',
                    explanation: 'The curve has gradient 6 at the \\( y \\)-intercept.'
                }
            ],
            finalAnswer: '(a) Asymptote \\( y=-6 \\), \\( y \\)-intercept \\( (0,-3) \\), \\( x \\)-intercept \\( \\left(\\frac{\\ln 2}{2}, 0\\right) \\). (b) \\( y > -6 \\). (c) Gradient \\( = 6 \\).'
        }
    },

    // ─── Q36–70: Additional Exponentials Questions ──────────────────────

    {
        id: 'el1-036', topicRef: 'el1', topicTitle: 'Exponentials 36', difficulty: 'Foundation',
        questionText: 'Evaluate \\( 2^5 \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Calculate', workingLatex: '2^5 = 32', explanation: '2 multiplied by itself 5 times.' }
        ], finalAnswer: '32' }
    },
    {
        id: 'el1-037', topicRef: 'el1', topicTitle: 'Exponentials 37', difficulty: 'Foundation',
        questionText: 'Simplify \\( 3^2 \\times 3^4 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Add indices', workingLatex: '3^{2+4} = 3^6 = 729', explanation: 'Same base: add powers.' }
        ], finalAnswer: '3^6 = 729' }
    },
    {
        id: 'el1-038', topicRef: 'el1', topicTitle: 'Exponentials 38', difficulty: 'Foundation',
        questionText: 'Simplify \\( \\frac{5^7}{5^3} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Subtract indices', workingLatex: '5^{7-3} = 5^4 = 625', explanation: '' }
        ], finalAnswer: '5^4 = 625' }
    },
    {
        id: 'el1-039', topicRef: 'el1', topicTitle: 'Exponentials 39', difficulty: 'Foundation',
        questionText: 'Evaluate \\( 4^{-2} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Negative index', workingLatex: '4^{-2} = \\frac{1}{4^2} = \\frac{1}{16}', explanation: '' }
        ], finalAnswer: '\\frac{1}{16}' }
    },
    {
        id: 'el1-040', topicRef: 'el1', topicTitle: 'Exponentials 40', difficulty: 'Foundation',
        questionText: 'Evaluate \\( 8^{\\frac{2}{3}} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Fractional index', workingLatex: '8^{2/3} = (8^{1/3})^2 = 2^2 = 4', explanation: 'Cube root of 8 is 2, then square.' }
        ], finalAnswer: '4' }
    },
    {
        id: 'el1-041', topicRef: 'el1', topicTitle: 'Exponentials 41', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = 2^x \\) for \\( -3 \\leq x \\leq 3 \\). State the y-intercept and asymptote.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Key features', workingLatex: 'y\\text{-int: } (0, 1); \\quad \\text{asymptote: } y = 0', explanation: 'Exponential growth; always positive.' }
        ], finalAnswer: 'y-int (0,1); asymptote y = 0' }
    },
    {
        id: 'el1-042', topicRef: 'el1', topicTitle: 'Exponentials 42', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = 3^{-x} \\). Describe the transformation from \\( y = 3^x \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Reflection in y-axis', workingLatex: 'y = 3^{-x} = \\left(\\frac{1}{3}\\right)^x', explanation: 'Exponential decay.' }
        ], finalAnswer: 'Reflection in y-axis; exponential decay' }
    },
    {
        id: 'el1-043', topicRef: 'el1', topicTitle: 'Exponentials 43', difficulty: 'Foundation',
        questionText: 'Solve \\( 2^x = 16 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write 16 as power of 2', workingLatex: '2^x = 2^4 \\implies x = 4', explanation: '' }
        ], finalAnswer: 'x = 4' }
    },
    {
        id: 'el1-044', topicRef: 'el1', topicTitle: 'Exponentials 44', difficulty: 'Foundation',
        questionText: 'Solve \\( 3^x = \\frac{1}{27} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write as power of 3', workingLatex: '3^x = 3^{-3} \\implies x = -3', explanation: '27 = 3^3, so 1/27 = 3^{-3}.' }
        ], finalAnswer: 'x = -3' }
    },
    {
        id: 'el1-045', topicRef: 'el1', topicTitle: 'Exponentials 45', difficulty: 'Foundation',
        questionText: 'Solve \\( 5^{2x} = 125 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write 125 as power of 5', workingLatex: '5^{2x} = 5^3 \\implies 2x = 3 \\implies x = \\frac{3}{2}', explanation: '' }
        ], finalAnswer: 'x = \\frac{3}{2}' }
    },
    {
        id: 'el1-046', topicRef: 'el1', topicTitle: 'Exponentials 46', difficulty: 'Foundation',
        questionText: 'The value of an investment is modelled by \\( V = 1000 \\times 1.05^t \\) where \\( t \\) is years. Find the value after 10 years.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute t = 10', workingLatex: 'V = 1000 \\times 1.05^{10} = 1000 \\times 1.6289 = 1628.89', explanation: '' }
        ], finalAnswer: '1628.89 pounds' }
    },
    {
        id: 'el1-047', topicRef: 'el1', topicTitle: 'Exponentials 47', difficulty: 'Foundation',
        questionText: 'Write \\( e^3 \\) to 3 significant figures.',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Calculator', workingLatex: 'e^3 = 20.1', explanation: '' }
        ], finalAnswer: '20.1' }
    },
    {
        id: 'el1-048', topicRef: 'el1', topicTitle: 'Exponentials 48', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = e^x \\) and \\( y = e^{-x} \\) on the same axes. State their point of intersection.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Intersection', workingLatex: 'e^x = e^{-x} \\implies e^{2x} = 1 \\implies x = 0, y = 1', explanation: '' }
        ], finalAnswer: 'Intersection at (0, 1)' }
    },
    {
        id: 'el1-049', topicRef: 'el1', topicTitle: 'Exponentials 49', difficulty: 'Foundation',
        questionText: 'Simplify \\( e^{2x} \\times e^{3x} \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Add indices', workingLatex: 'e^{2x+3x} = e^{5x}', explanation: '' }
        ], finalAnswer: 'e^{5x}' }
    },
    {
        id: 'el1-050', topicRef: 'el1', topicTitle: 'Exponentials 50', difficulty: 'Foundation',
        questionText: 'Simplify \\( \\frac{e^{4x}}{e^x} \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Subtract indices', workingLatex: 'e^{4x-x} = e^{3x}', explanation: '' }
        ], finalAnswer: 'e^{3x}' }
    },
    {
        id: 'el1-051', topicRef: 'el1', topicTitle: 'Exponentials 51', difficulty: 'Foundation',
        questionText: 'A population of bacteria doubles every 3 hours. Starting with 500 bacteria, find the population after 12 hours.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Number of doublings', workingLatex: '12 \\div 3 = 4 \\text{ doublings}', explanation: '' },
            { stepNumber: 2, description: 'Calculate', workingLatex: 'P = 500 \\times 2^4 = 500 \\times 16 = 8000', explanation: '' }
        ], finalAnswer: '8000 bacteria' }
    },
    {
        id: 'el1-052', topicRef: 'el1', topicTitle: 'Exponentials 52', difficulty: 'Foundation',
        questionText: 'Solve \\( 4^x = 8 \\). Give your answer as a fraction.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write both as powers of 2', workingLatex: '(2^2)^x = 2^3 \\implies 2^{2x} = 2^3 \\implies 2x = 3 \\implies x = \\frac{3}{2}', explanation: '' }
        ], finalAnswer: 'x = \\frac{3}{2}' }
    },
    {
        id: 'el1-053', topicRef: 'el1', topicTitle: 'Exponentials 53', difficulty: 'Foundation',
        questionText: 'Solve \\( 9^x = 27 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write as powers of 3', workingLatex: '(3^2)^x = 3^3 \\implies 3^{2x} = 3^3 \\implies x = \\frac{3}{2}', explanation: '' }
        ], finalAnswer: 'x = \\frac{3}{2}' }
    },
    {
        id: 'el1-054', topicRef: 'el1', topicTitle: 'Exponentials 54', difficulty: 'Foundation',
        questionText: 'Describe the transformation that maps \\( y = e^x \\) to \\( y = e^x + 3 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Translation', workingLatex: '\\text{Translation 3 units up}', explanation: 'Asymptote moves from y = 0 to y = 3.' }
        ], finalAnswer: 'Translation 3 units up; new asymptote y = 3' }
    },
    {
        id: 'el1-055', topicRef: 'el1', topicTitle: 'Exponentials 55', difficulty: 'Foundation',
        questionText: 'Describe the transformation that maps \\( y = e^x \\) to \\( y = e^{x-2} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Translation', workingLatex: '\\text{Translation 2 units right}', explanation: '' }
        ], finalAnswer: 'Translation 2 units right' }
    },
    {
        id: 'el1-056', topicRef: 'el1', topicTitle: 'Exponentials 56', difficulty: 'Foundation',
        questionText: 'Describe the transformation that maps \\( y = e^x \\) to \\( y = 2e^x \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Stretch', workingLatex: '\\text{Vertical stretch, scale factor 2}', explanation: 'y-intercept moves from 1 to 2.' }
        ], finalAnswer: 'Vertical stretch scale factor 2' }
    },
    {
        id: 'el1-057', topicRef: 'el1', topicTitle: 'Exponentials 57', difficulty: 'Foundation',
        questionText: 'A radioactive substance decays so that the mass \\( m \\) grams after \\( t \\) years is \\( m = 200e^{-0.1t} \\). Find the mass after 5 years.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute', workingLatex: 'm = 200e^{-0.5} = 200 \\times 0.6065 = 121.3 \\text{ g}', explanation: '' }
        ], finalAnswer: '121.3 g' }
    },
    {
        id: 'el1-058', topicRef: 'el1', topicTitle: 'Exponentials 58', difficulty: 'Foundation',
        questionText: 'Solve \\( e^x = 5 \\). Give your answer in terms of \\( \\ln \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take ln of both sides', workingLatex: 'x = \\ln 5', explanation: '' }
        ], finalAnswer: 'x = ln 5' }
    },
    {
        id: 'el1-059', topicRef: 'el1', topicTitle: 'Exponentials 59', difficulty: 'Foundation',
        questionText: 'Solve \\( e^{2x} = 7 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take ln', workingLatex: '2x = \\ln 7 \\implies x = \\frac{\\ln 7}{2}', explanation: '' }
        ], finalAnswer: 'x = \\frac{\\ln 7}{2}' }
    },
    {
        id: 'el1-060', topicRef: 'el1', topicTitle: 'Exponentials 60', difficulty: 'Foundation',
        questionText: 'Solve \\( 3e^x - 6 = 0 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: 'e^x = 2 \\implies x = \\ln 2', explanation: '' }
        ], finalAnswer: 'x = ln 2' }
    },
    {
        id: 'el1-061', topicRef: 'el1', topicTitle: 'Exponentials 61', difficulty: 'Foundation',
        questionText: 'Evaluate \\( 27^{\\frac{1}{3}} + 16^{\\frac{1}{4}} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Evaluate each', workingLatex: '3 + 2 = 5', explanation: 'Cube root of 27 is 3; fourth root of 16 is 2.' }
        ], finalAnswer: '5' }
    },
    {
        id: 'el1-062', topicRef: 'el1', topicTitle: 'Exponentials 62', difficulty: 'Foundation',
        questionText: 'Simplify \\( (2^3)^4 \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Multiply indices', workingLatex: '2^{12} = 4096', explanation: '' }
        ], finalAnswer: '2^{12} = 4096' }
    },
    {
        id: 'el1-063', topicRef: 'el1', topicTitle: 'Exponentials 63', difficulty: 'Foundation',
        questionText: 'The graph of \\( y = a \\times b^x \\) passes through \\( (0, 3) \\) and \\( (2, 48) \\). Find \\( a \\) and \\( b \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'At x = 0', workingLatex: 'a \\times b^0 = 3 \\implies a = 3', explanation: '' },
            { stepNumber: 2, description: 'At x = 2', workingLatex: '3b^2 = 48 \\implies b^2 = 16 \\implies b = 4', explanation: 'Positive since exponential.' }
        ], finalAnswer: 'a = 3, b = 4' }
    },
    {
        id: 'el1-064', topicRef: 'el1', topicTitle: 'Exponentials 64', difficulty: 'Foundation',
        questionText: 'Solve \\( 2^{x+1} = 32 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write 32 as power of 2', workingLatex: '2^{x+1} = 2^5 \\implies x + 1 = 5 \\implies x = 4', explanation: '' }
        ], finalAnswer: 'x = 4' }
    },
    {
        id: 'el1-065', topicRef: 'el1', topicTitle: 'Exponentials 65', difficulty: 'Foundation',
        questionText: 'The temperature \\( T \\) of a cooling object is modelled by \\( T = 20 + 80e^{-0.05t} \\). Find: (a) the initial temperature; (b) the temperature after 20 minutes; (c) the long-term temperature.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) t = 0', workingLatex: 'T = 20 + 80 = 100^\\circ', explanation: '' },
            { stepNumber: 2, description: '(b) t = 20', workingLatex: 'T = 20 + 80e^{-1} = 20 + 29.4 = 49.4^\\circ', explanation: '' },
            { stepNumber: 3, description: '(c) As t -> infinity', workingLatex: 'e^{-0.05t} \\to 0 \\implies T \\to 20^\\circ', explanation: 'Room temperature.' }
        ], finalAnswer: '(a) 100 degrees (b) 49.4 degrees (c) 20 degrees' }
    },
    {
        id: 'el1-066', topicRef: 'el1', topicTitle: 'Exponentials 66', difficulty: 'Foundation',
        questionText: 'Simplify \\( \\frac{e^{3x} \\times e^{2x}}{e^{4x}} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Index laws', workingLatex: '\\frac{e^{5x}}{e^{4x}} = e^{x}', explanation: '' }
        ], finalAnswer: 'e^x' }
    },
    {
        id: 'el1-067', topicRef: 'el1', topicTitle: 'Exponentials 67', difficulty: 'Foundation',
        questionText: 'Solve \\( e^{2x} - 5e^x + 6 = 0 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let u = e^x', workingLatex: 'u^2 - 5u + 6 = 0 \\implies (u-2)(u-3) = 0', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'e^x = 2 \\implies x = \\ln 2; \\quad e^x = 3 \\implies x = \\ln 3', explanation: '' }
        ], finalAnswer: 'x = ln 2 or x = ln 3' }
    },
    {
        id: 'el1-068', topicRef: 'el1', topicTitle: 'Exponentials 68', difficulty: 'Foundation',
        questionText: 'Solve \\( e^{2x} - 7e^x + 10 = 0 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let u = e^x', workingLatex: '(u-2)(u-5) = 0 \\implies u = 2 \\text{ or } u = 5', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x = \\ln 2 \\text{ or } x = \\ln 5', explanation: '' }
        ], finalAnswer: 'x = ln 2 or x = ln 5' }
    },
    {
        id: 'el1-069', topicRef: 'el1', topicTitle: 'Exponentials 69', difficulty: 'Foundation',
        questionText: 'Write \\( y = 3 \\times 2^x \\) in the form \\( y = ae^{kx} \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rewrite 2^x', workingLatex: '2^x = e^{x \\ln 2}', explanation: 'Since 2 = e^{ln 2}.' },
            { stepNumber: 2, description: 'Combine', workingLatex: 'y = 3e^{(\\ln 2)x}', explanation: 'So a = 3, k = ln 2.' }
        ], finalAnswer: 'y = 3e^{(ln 2)x}; a = 3, k = ln 2' }
    },
    {
        id: 'el1-070', topicRef: 'el1', topicTitle: 'Exponentials 70', difficulty: 'Foundation',
        questionText: 'A car depreciates in value according to \\( V = 15000 \\times 0.85^t \\) where \\( t \\) is years. (a) Find the value after 3 years. (b) Find when the value drops below 5000.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Substitute t = 3', workingLatex: 'V = 15000 \\times 0.85^3 = 15000 \\times 0.6141 = 9211', explanation: '' },
            { stepNumber: 2, description: '(b) Solve', workingLatex: '0.85^t = \\frac{5000}{15000} = \\frac{1}{3}', explanation: '' },
            { stepNumber: 3, description: 'Take logs', workingLatex: 't = \\frac{\\ln(1/3)}{\\ln 0.85} = \\frac{-1.099}{-0.1625} = 6.76', explanation: '' }
        ], finalAnswer: '(a) 9211 pounds (b) After approximately 6.76 years' }
    },
];
