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

    // ── TYPE A: Properties of sin x, cos x, tan x ──────────────────────────
    {
        id: 't3-001',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 01',
        difficulty: 'Foundation',
        questionText: 'State the period, amplitude, and the coordinates of the maximum point in the interval \\( 0^\\circ \\leq x \\leq 360^\\circ \\) for the graph of \\( y = \\sin x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'sin x', 'period', 'amplitude', 'key features'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the period.',
                    workingLatex: '\\text{Period} = 360^\\circ',
                    explanation: 'The graph of \\( y = \\sin x \\) repeats every \\( 360^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'State the amplitude.',
                    workingLatex: '\\text{Amplitude} = 1',
                    explanation: 'The graph oscillates between \\( y = -1 \\) and \\( y = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the maximum point.',
                    workingLatex: '\\text{Maximum at } (90^\\circ,\\ 1)',
                    explanation: '\\( \\sin 90^\\circ = 1 \\) is the highest point in the given interval.'
                }
            ],
            finalAnswer: 'Period \\( = 360^\\circ \\), Amplitude \\( = 1 \\), Maximum at \\( (90^\\circ,\\ 1) \\)'
        }
    },
    {
        id: 't3-002',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 02',
        difficulty: 'Foundation',
        questionText: 'State the period, amplitude, and the coordinates where \\( y = \\cos x \\) crosses the \\( x \\)-axis in the interval \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'cos x', 'period', 'roots', 'key features'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the period of \\( y = \\cos x \\).',
                    workingLatex: '\\text{Period} = 360^\\circ',
                    explanation: 'Like \\( \\sin x \\), the cosine function has period \\( 360^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'State the amplitude.',
                    workingLatex: '\\text{Amplitude} = 1',
                    explanation: 'The graph oscillates between \\( -1 \\) and \\( 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find where \\( \\cos x = 0 \\) in \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: 'x = 90^\\circ \\text{ and } x = 270^\\circ',
                    explanation: '\\( \\cos 90^\\circ = 0 \\) and \\( \\cos 270^\\circ = 0 \\).'
                }
            ],
            finalAnswer: 'Period \\( = 360^\\circ \\), Amplitude \\( = 1 \\), crosses \\( x \\)-axis at \\( (90^\\circ, 0) \\) and \\( (270^\\circ, 0) \\)'
        }
    },
    {
        id: 't3-003',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 03',
        difficulty: 'Foundation',
        questionText: 'State the period of \\( y = \\tan x \\) and give the equations of the two asymptotes in the interval \\( 0^\\circ < x < 360^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'tan x', 'period', 'asymptotes'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the period of \\( y = \\tan x \\).',
                    workingLatex: '\\text{Period} = 180^\\circ',
                    explanation: 'The tan graph repeats every \\( 180^\\circ \\), unlike sin and cos which repeat every \\( 360^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the asymptotes in \\( 0^\\circ < x < 360^\\circ \\).',
                    workingLatex: 'x = 90^\\circ \\text{ and } x = 270^\\circ',
                    explanation: '\\( \\tan x \\) is undefined where \\( \\cos x = 0 \\), i.e., at \\( 90^\\circ \\) and \\( 270^\\circ \\) in this interval.'
                }
            ],
            finalAnswer: 'Period \\( = 180^\\circ \\); asymptotes at \\( x = 90^\\circ \\) and \\( x = 270^\\circ \\)'
        }
    },
    {
        id: 't3-004',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 04',
        difficulty: 'Foundation',
        questionText: 'State the coordinates of the \\( y \\)-intercept and the minimum point of \\( y = \\cos x \\) in the interval \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'cos x', 'y-intercept', 'minimum'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the \\( y \\)-intercept by setting \\( x = 0^\\circ \\).',
                    workingLatex: '\\cos 0^\\circ = 1 \\Rightarrow \\text{y-intercept: } (0^\\circ,\\ 1)',
                    explanation: 'The cosine graph starts at its maximum of 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the minimum of \\( y = \\cos x \\) in the given interval.',
                    workingLatex: '\\cos 180^\\circ = -1 \\Rightarrow \\text{minimum at } (180^\\circ,\\ -1)',
                    explanation: 'The lowest point occurs at \\( x = 180^\\circ \\).'
                }
            ],
            finalAnswer: '\\( y \\)-intercept: \\( (0^\\circ, 1) \\); minimum: \\( (180^\\circ, -1) \\)'
        }
    },
    {
        id: 't3-005',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 05',
        difficulty: 'Foundation',
        questionText: 'State all the values of \\( x \\) in the interval \\( -360^\\circ \\leq x \\leq 360^\\circ \\) where the graph of \\( y = \\sin x \\) crosses the \\( x \\)-axis.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'sin x', 'roots', 'key values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recall that \\( \\sin x = 0 \\) every \\( 180^\\circ \\).',
                    workingLatex: '\\sin x = 0 \\Rightarrow x = 180n^\\circ, \\quad n \\in \\mathbb{Z}',
                    explanation: 'The sine graph crosses the \\( x \\)-axis every \\( 180^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'List all solutions in \\( [-360^\\circ, 360^\\circ] \\).',
                    workingLatex: 'x = -360^\\circ,\\ -180^\\circ,\\ 0^\\circ,\\ 180^\\circ,\\ 360^\\circ',
                    explanation: 'Setting \\( n = -2, -1, 0, 1, 2 \\) gives all five crossing points.'
                }
            ],
            finalAnswer: '\\( x = -360^\\circ,\\ -180^\\circ,\\ 0^\\circ,\\ 180^\\circ,\\ 360^\\circ \\)'
        }
    },
    // ── TYPE B: Vertical translations ──────────────────────────────────────
    {
        id: 't3-006',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 06',
        difficulty: 'Foundation',
        questionText: 'Describe the transformation that maps \\( y = \\sin x \\) onto \\( y = \\sin x + 2 \\). State the maximum and minimum values of \\( y = \\sin x + 2 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'vertical translation', 'transformation', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the transformation.',
                    workingLatex: 'y = \\sin x + 2',
                    explanation: 'Adding 2 outside the function shifts the graph vertically upward by 2 units.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the new maximum.',
                    workingLatex: '\\text{Maximum} = 1 + 2 = 3',
                    explanation: 'The original maximum is 1; shifting up by 2 gives 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the new minimum.',
                    workingLatex: '\\text{Minimum} = -1 + 2 = 1',
                    explanation: 'The original minimum is \\( -1 \\); shifting up by 2 gives 1.'
                }
            ],
            finalAnswer: 'Translation of \\( +2 \\) in the \\( y \\)-direction. Maximum \\( = 3 \\), Minimum \\( = 1 \\).'
        }
    },
    {
        id: 't3-007',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 07',
        difficulty: 'Foundation',
        questionText: 'Describe the transformation that maps \\( y = \\cos x \\) onto \\( y = \\cos x - 4 \\). State the range of \\( y = \\cos x - 4 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'vertical translation', 'transformation', 'cos x', 'range'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the transformation.',
                    workingLatex: 'y = \\cos x - 4',
                    explanation: 'Subtracting 4 shifts the entire graph downward by 4 units.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the new maximum and minimum.',
                    workingLatex: '\\text{Max} = 1 - 4 = -3, \\quad \\text{Min} = -1 - 4 = -5',
                    explanation: 'Shift both endpoints of the original range by \\( -4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the range.',
                    workingLatex: '-5 \\leq y \\leq -3',
                    explanation: 'The graph now lies entirely below the \\( x \\)-axis.'
                }
            ],
            finalAnswer: 'Translation of \\( -4 \\) in the \\( y \\)-direction. Range: \\( -5 \\leq y \\leq -3 \\).'
        }
    },
    {
        id: 't3-008',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 08',
        difficulty: 'Foundation',
        questionText: 'On the same axes, sketch the graphs of \\( y = \\cos x \\) and \\( y = \\cos x + 3 \\) for \\( -360^\\circ \\leq x \\leq 360^\\circ \\). Label the \\( y \\)-intercepts of both curves.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'sketch', 'vertical translation', 'cos x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Sketch \\( y = \\cos x \\): starts at \\( (0^\\circ, 1) \\), maximum 1, minimum \\( -1 \\), period \\( 360^\\circ \\).',
                    workingLatex: 'y\\text{-intercept of } y = \\cos x: (0^\\circ,\\ 1)',
                    explanation: 'Draw the standard cosine wave between \\( y = -1 \\) and \\( y = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Sketch \\( y = \\cos x + 3 \\): same shape, shifted up 3 units.',
                    workingLatex: 'y\\text{-intercept of } y = \\cos x + 3: (0^\\circ,\\ 4)',
                    explanation: 'Every \\( y \\)-value increases by 3, so the \\( y \\)-intercept moves from 1 to 4.'
                },
                {
                    stepNumber: 3,
                    description: 'State the new range.',
                    workingLatex: '2 \\leq y \\leq 4',
                    explanation: 'The shifted graph oscillates between \\( -1+3=2 \\) and \\( 1+3=4 \\).'
                }
            ],
            finalAnswer: '\\( y = \\cos x \\) has \\( y \\)-intercept \\( (0^\\circ, 1) \\); \\( y = \\cos x + 3 \\) has \\( y \\)-intercept \\( (0^\\circ, 4) \\) and range \\( [2, 4] \\).'
        }
    },
    // ── TYPE C: Horizontal translations ────────────────────────────────────
    {
        id: 't3-009',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 09',
        difficulty: 'Foundation',
        questionText: 'Describe the transformation that maps \\( y = \\sin x \\) onto \\( y = \\sin(x - 30^\\circ) \\). State the new \\( x \\)-intercepts in the interval \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'horizontal translation', 'phase shift', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the transformation.',
                    workingLatex: 'y = \\sin(x - 30^\\circ)',
                    explanation: 'Replacing \\( x \\) with \\( x - 30^\\circ \\) translates the graph \\( 30^\\circ \\) to the right.'
                },
                {
                    stepNumber: 2,
                    description: 'Find where \\( \\sin(x - 30^\\circ) = 0 \\) in \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: 'x - 30^\\circ = 0^\\circ,\\ 180^\\circ,\\ 360^\\circ',
                    explanation: 'Set the argument equal to the zeros of sin.'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( 30^\\circ \\) to each.',
                    workingLatex: 'x = 30^\\circ,\\ 210^\\circ,\\ 390^\\circ',
                    explanation: '\\( 390^\\circ \\) is outside the interval, so \\( x = 30^\\circ \\) and \\( x = 210^\\circ \\) are the intercepts in range.'
                }
            ],
            finalAnswer: 'Translation \\( 30^\\circ \\) to the right. \\( x \\)-intercepts at \\( x = 30^\\circ \\) and \\( x = 210^\\circ \\) (and \\( x = 390^\\circ - 360^\\circ \\) wraps back).'
        }
    },
    {
        id: 't3-010',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 10',
        difficulty: 'Foundation',
        questionText: 'Describe the transformation that maps \\( y = \\cos x \\) onto \\( y = \\cos(x + 90^\\circ) \\). What is the \\( y \\)-intercept of \\( y = \\cos(x + 90^\\circ) \\)?',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'horizontal translation', 'cos x', 'phase shift'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the transformation.',
                    workingLatex: 'y = \\cos(x + 90^\\circ)',
                    explanation: 'Adding \\( 90^\\circ \\) inside the function translates the graph \\( 90^\\circ \\) to the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept by setting \\( x = 0^\\circ \\).',
                    workingLatex: '\\cos(0^\\circ + 90^\\circ) = \\cos 90^\\circ = 0',
                    explanation: 'Substitute \\( x = 0^\\circ \\) into the equation.'
                }
            ],
            finalAnswer: 'Translation \\( 90^\\circ \\) to the left. \\( y \\)-intercept: \\( (0^\\circ, 0) \\).'
        }
    },
    {
        id: 't3-011',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 11',
        difficulty: 'Foundation',
        questionText: 'Sketch the graphs of \\( y = \\sin x \\) and \\( y = \\sin(x + 60^\\circ) \\) on the same axes for \\( -180^\\circ \\leq x \\leq 180^\\circ \\). Mark clearly the \\( y \\)-intercept of each graph.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'horizontal translation', 'sketch', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Sketch \\( y = \\sin x \\): passes through the origin, maximum at \\( (90^\\circ, 1) \\), minimum at \\( (-90^\\circ, -1) \\).',
                    workingLatex: 'y\\text{-intercept: } (0^\\circ,\\ 0)',
                    explanation: 'Standard sine wave.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept of \\( y = \\sin(x + 60^\\circ) \\).',
                    workingLatex: '\\sin(0^\\circ + 60^\\circ) = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2} \\approx 0.866',
                    explanation: 'Set \\( x = 0^\\circ \\) in the shifted function.'
                },
                {
                    stepNumber: 3,
                    description: 'The shifted graph is \\( y = \\sin x \\) moved \\( 60^\\circ \\) to the left.',
                    workingLatex: 'y\\text{-intercept of } y=\\sin(x+60^\\circ): \\left(0^\\circ,\\ \\frac{\\sqrt{3}}{2}\\right)',
                    explanation: 'Every feature of the graph is moved \\( 60^\\circ \\) to the left.'
                }
            ],
            finalAnswer: '\\( y = \\sin x \\): \\( y \\)-intercept \\( (0^\\circ, 0) \\). \\( y = \\sin(x+60^\\circ) \\): \\( y \\)-intercept \\( (0^\\circ, \\frac{\\sqrt{3}}{2}) \\).'
        }
    },
    {
        id: 't3-012',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 12',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = \\tan x \\) is translated \\( 45^\\circ \\) to the right. Write down the equation of the resulting graph and state the positions of its asymptotes in the interval \\( 0^\\circ < x < 360^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'horizontal translation', 'tan x', 'asymptotes'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the equation of the translated graph.',
                    workingLatex: 'y = \\tan(x - 45^\\circ)',
                    explanation: 'A rightward shift of \\( 45^\\circ \\) means replacing \\( x \\) with \\( x - 45^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the new asymptotes. Original asymptotes at \\( 90^\\circ, 270^\\circ \\); shift each right by \\( 45^\\circ \\).',
                    workingLatex: '90^\\circ + 45^\\circ = 135^\\circ \\quad \\text{and} \\quad 270^\\circ + 45^\\circ = 315^\\circ',
                    explanation: 'Asymptotes shift by the same amount as the graph.'
                }
            ],
            finalAnswer: '\\( y = \\tan(x - 45^\\circ) \\); asymptotes at \\( x = 135^\\circ \\) and \\( x = 315^\\circ \\).'
        }
    },
    // ── TYPE D: Vertical stretches (amplitude changes) ──────────────────────
    {
        id: 't3-013',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 13',
        difficulty: 'Foundation',
        questionText: 'Describe the transformation that maps \\( y = \\sin x \\) onto \\( y = 3\\sin x \\). State the amplitude and range of \\( y = 3\\sin x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'vertical stretch', 'amplitude', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the transformation.',
                    workingLatex: 'y = 3\\sin x',
                    explanation: 'Multiplying the function by 3 stretches the graph vertically by a scale factor of 3.'
                },
                {
                    stepNumber: 2,
                    description: 'State the new amplitude.',
                    workingLatex: '\\text{Amplitude} = 3',
                    explanation: 'The amplitude equals the multiplying factor.'
                },
                {
                    stepNumber: 3,
                    description: 'State the new range.',
                    workingLatex: '-3 \\leq y \\leq 3',
                    explanation: 'The graph now reaches \\( y = 3 \\) and \\( y = -3 \\).'
                }
            ],
            finalAnswer: 'Vertical stretch, scale factor 3. Amplitude \\( = 3 \\), range \\( -3 \\leq y \\leq 3 \\).'
        }
    },
    {
        id: 't3-014',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 14',
        difficulty: 'Foundation',
        questionText: 'On the same axes, sketch \\( y = \\cos x \\) and \\( y = -2\\cos x \\) for \\( -360^\\circ \\leq x \\leq 360^\\circ \\). State the range of \\( y = -2\\cos x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'vertical stretch', 'reflection', 'cos x', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the two transformations applied to \\( y = \\cos x \\) to get \\( y = -2\\cos x \\).',
                    workingLatex: '\\text{Vertical stretch (scale factor 2) followed by reflection in the } x\\text{-axis}',
                    explanation: 'The factor of 2 doubles all \\( y \\)-values; the negative sign flips the graph.'
                },
                {
                    stepNumber: 2,
                    description: 'Sketch \\( y = \\cos x \\): starts at \\( (0^\\circ, 1) \\), period \\( 360^\\circ \\).',
                    workingLatex: '\\text{Max}=1,\\quad \\text{Min}=-1',
                    explanation: 'Standard cosine wave.'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch \\( y = -2\\cos x \\): starts at \\( (0^\\circ, -2) \\), same period.',
                    workingLatex: '\\text{Max}=2,\\quad \\text{Min}=-2',
                    explanation: 'The graph is reflected and stretched: where cosine is at its peak, \\( -2\\cos x \\) is at its trough.'
                }
            ],
            finalAnswer: 'Range of \\( y = -2\\cos x \\) is \\( -2 \\leq y \\leq 2 \\).'
        }
    },
    {
        id: 't3-015',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 15',
        difficulty: 'Foundation',
        questionText: 'Describe the transformation that maps \\( y = \\sin x \\) onto \\( y = -\\sin x \\). What are the coordinates of the minimum point of \\( y = -\\sin x \\) in \\( 0^\\circ \\leq x \\leq 360^\\circ \\)?',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'reflection', 'sin x', 'minimum'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the transformation.',
                    workingLatex: 'y = -\\sin x',
                    explanation: 'Multiplying by \\( -1 \\) reflects the graph in the \\( x \\)-axis.'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the minimum: where \\( \\sin x \\) has its maximum, \\( -\\sin x \\) has its minimum.',
                    workingLatex: '-\\sin 90^\\circ = -1 \\Rightarrow \\text{minimum at } (90^\\circ,\\ -1)',
                    explanation: '\\( \\sin x \\) reaches its maximum of 1 at \\( x = 90^\\circ \\), so \\( -\\sin x \\) reaches \\( -1 \\) there.'
                }
            ],
            finalAnswer: 'Reflection in the \\( x \\)-axis. Minimum at \\( (90^\\circ, -1) \\).'
        }
    },
    // ── TYPE E: Horizontal stretches (period changes) ───────────────────────
    {
        id: 't3-016',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 16',
        difficulty: 'Foundation',
        questionText: 'Describe the transformation that maps \\( y = \\sin x \\) onto \\( y = \\sin 2x \\). State the period of \\( y = \\sin 2x \\) and the number of complete cycles in \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'horizontal stretch', 'period', 'sin x', 'frequency'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the transformation.',
                    workingLatex: 'y = \\sin 2x',
                    explanation: 'Replacing \\( x \\) with \\( 2x \\) compresses the graph horizontally by a factor of 2 (or stretches by \\( \\frac{1}{2} \\)).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the new period.',
                    workingLatex: '\\text{Period} = \\frac{360^\\circ}{2} = 180^\\circ',
                    explanation: 'The period is divided by the coefficient of \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Count cycles in \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: '\\frac{360^\\circ}{180^\\circ} = 2 \\text{ complete cycles}',
                    explanation: 'Two full oscillations fit in the standard interval.'
                }
            ],
            finalAnswer: 'Horizontal compression by scale factor \\( \\frac{1}{2} \\). Period \\( = 180^\\circ \\); 2 complete cycles in \\( [0^\\circ, 360^\\circ] \\).'
        }
    },
    {
        id: 't3-017',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 17',
        difficulty: 'Foundation',
        questionText: 'State the period of \\( y = \\cos 3x \\) and sketch it on the same axes as \\( y = \\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'horizontal compression', 'period', 'cos x', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the period of \\( y = \\cos 3x \\).',
                    workingLatex: '\\text{Period} = \\frac{360^\\circ}{3} = 120^\\circ',
                    explanation: 'The period of \\( y = \\cos nx \\) is \\( \\frac{360^\\circ}{n} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Note there are 3 complete cycles in \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: '\\frac{360^\\circ}{120^\\circ} = 3',
                    explanation: 'Three full cosine waves in the standard interval.'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch: \\( y = \\cos 3x \\) has maxima at \\( x = 0^\\circ, 120^\\circ, 240^\\circ, 360^\\circ \\) and minima at \\( x = 60^\\circ, 180^\\circ, 300^\\circ \\).',
                    workingLatex: '\\text{Amplitude} = 1, \\quad \\text{Period} = 120^\\circ',
                    explanation: 'The shape is the same as \\( \\cos x \\) but three times as frequent.'
                }
            ],
            finalAnswer: 'Period of \\( y = \\cos 3x \\) is \\( 120^\\circ \\); three complete oscillations in \\( [0^\\circ, 360^\\circ] \\).'
        }
    },
    {
        id: 't3-018',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 18',
        difficulty: 'Foundation',
        questionText: 'Sketch the graphs of \\( y = \\tan x \\) and \\( y = \\tan 2x \\) on the same axes for \\( -180^\\circ \\leq x \\leq 180^\\circ \\). State the equations of the asymptotes of \\( y = \\tan 2x \\) in this interval.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'tan x', 'horizontal compression', 'asymptotes', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The period of \\( y = \\tan 2x \\) is halved.',
                    workingLatex: '\\text{Period of } y = \\tan 2x = \\frac{180^\\circ}{2} = 90^\\circ',
                    explanation: 'The coefficient 2 compresses the graph horizontally.'
                },
                {
                    stepNumber: 2,
                    description: 'Original asymptotes of \\( y = \\tan x \\) in \\( [-180^\\circ, 180^\\circ] \\) are \\( x = -90^\\circ \\) and \\( x = 90^\\circ \\). For \\( y = \\tan 2x \\), set \\( 2x = \\pm 90^\\circ, \\pm 270^\\circ \\).',
                    workingLatex: '2x = \\pm 90^\\circ \\Rightarrow x = \\pm 45^\\circ; \\quad 2x = \\pm 270^\\circ \\Rightarrow x = \\pm 135^\\circ',
                    explanation: 'Divide the old asymptote positions by 2.'
                },
                {
                    stepNumber: 3,
                    description: 'State all asymptotes of \\( y = \\tan 2x \\) in \\( [-180^\\circ, 180^\\circ] \\).',
                    workingLatex: 'x = -135^\\circ,\\ -45^\\circ,\\ 45^\\circ,\\ 135^\\circ',
                    explanation: 'Four asymptotes in the given interval (compared to two for \\( \\tan x \\)).'
                }
            ],
            finalAnswer: 'Asymptotes of \\( y = \\tan 2x \\) at \\( x = -135^\\circ, -45^\\circ, 45^\\circ, 135^\\circ \\).'
        }
    },
    {
        id: 't3-019',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 19',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = \\sin x \\) is stretched horizontally by scale factor \\( \\frac{1}{4} \\). Write down the equation of the new graph and state its period.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'horizontal stretch', 'period', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'A horizontal stretch by scale factor \\( \\frac{1}{4} \\) replaces \\( x \\) with \\( 4x \\).',
                    workingLatex: 'y = \\sin 4x',
                    explanation: 'Stretching horizontally by \\( \\frac{1}{n} \\) is equivalent to replacing \\( x \\) with \\( nx \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the period.',
                    workingLatex: '\\text{Period} = \\frac{360^\\circ}{4} = 90^\\circ',
                    explanation: 'The period is reduced by the stretch factor.'
                }
            ],
            finalAnswer: '\\( y = \\sin 4x \\); period \\( = 90^\\circ \\).'
        }
    },
    // ── TYPE F: Combined transformations ────────────────────────────────────
    {
        id: 't3-020',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 20',
        difficulty: 'Foundation',
        questionText: 'Describe fully the transformations that map \\( y = \\cos x \\) onto \\( y = 2\\cos x + 1 \\). State the range of \\( y = 2\\cos x + 1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'combined transformations', 'vertical stretch', 'vertical translation', 'cos x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify transformation 1: multiply by 2.',
                    workingLatex: 'y = \\cos x \\rightarrow y = 2\\cos x',
                    explanation: 'Vertical stretch by scale factor 2. Amplitude becomes 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Identify transformation 2: add 1.',
                    workingLatex: 'y = 2\\cos x \\rightarrow y = 2\\cos x + 1',
                    explanation: 'Vertical translation of \\( +1 \\) unit upward.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the range.',
                    workingLatex: '\\text{Max} = 2(1) + 1 = 3, \\quad \\text{Min} = 2(-1) + 1 = -1',
                    explanation: 'Scale the extremes then shift.'
                }
            ],
            finalAnswer: 'Vertical stretch scale factor 2, then vertical translation \\( +1 \\). Range: \\( -1 \\leq y \\leq 3 \\).'
        }
    },
    {
        id: 't3-021',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 21',
        difficulty: 'Foundation',
        questionText: 'Find the range of \\( y = 3\\sin x - 2 \\) and state the coordinates of its maximum and minimum points in \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'combined transformations', 'sin x', 'range', 'max and min'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start with \\( y = 3\\sin x \\): amplitude 3, range \\( [-3, 3] \\).',
                    workingLatex: '-3 \\leq 3\\sin x \\leq 3',
                    explanation: 'Vertical stretch by factor 3.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract 2 to get the range of \\( 3\\sin x - 2 \\).',
                    workingLatex: '-3 - 2 \\leq y \\leq 3 - 2 \\Rightarrow -5 \\leq y \\leq 1',
                    explanation: 'Shift the range down by 2.'
                },
                {
                    stepNumber: 3,
                    description: 'Maximum occurs where \\( \\sin x = 1 \\), i.e., \\( x = 90^\\circ \\).',
                    workingLatex: 'y_{\\max} = 3(1) - 2 = 1 \\Rightarrow (90^\\circ,\\ 1)',
                    explanation: 'Substitute \\( \\sin 90^\\circ = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Minimum occurs where \\( \\sin x = -1 \\), i.e., \\( x = 270^\\circ \\).',
                    workingLatex: 'y_{\\min} = 3(-1) - 2 = -5 \\Rightarrow (270^\\circ,\\ -5)',
                    explanation: 'Substitute \\( \\sin 270^\\circ = -1 \\).'
                }
            ],
            finalAnswer: 'Range: \\( -5 \\leq y \\leq 1 \\). Maximum \\( (90^\\circ, 1) \\), minimum \\( (270^\\circ, -5) \\).'
        }
    },
    {
        id: 't3-022',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 22',
        difficulty: 'Foundation',
        questionText: 'Write down the equation of the graph obtained when \\( y = \\sin x \\) is translated by the vector \\( \\begin{pmatrix} 45 \\\\ 0 \\end{pmatrix} \\) and then stretched vertically by scale factor 4.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'combined transformations', 'vector notation', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the horizontal translation of \\( +45^\\circ \\).',
                    workingLatex: 'y = \\sin(x - 45^\\circ)',
                    explanation: 'The vector \\( \\begin{pmatrix} 45 \\\\ 0 \\end{pmatrix} \\) shifts \\( 45^\\circ \\) to the right.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the vertical stretch of scale factor 4.',
                    workingLatex: 'y = 4\\sin(x - 45^\\circ)',
                    explanation: 'Multiply the function by 4.'
                }
            ],
            finalAnswer: '\\( y = 4\\sin(x - 45^\\circ) \\)'
        }
    },
    {
        id: 't3-023',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 23',
        difficulty: 'Foundation',
        questionText: 'For the graph \\( y = 2\\sin(x + 30^\\circ) \\): (a) state the amplitude, (b) state the period, (c) find the \\( y \\)-intercept.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'combined transformations', 'amplitude', 'y-intercept', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Read off the amplitude.',
                    workingLatex: '\\text{Amplitude} = 2',
                    explanation: 'The coefficient in front of \\( \\sin \\) gives the amplitude.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): State the period.',
                    workingLatex: '\\text{Period} = 360^\\circ',
                    explanation: 'The period is unchanged by horizontal translation or vertical stretch.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Find the \\( y \\)-intercept by setting \\( x = 0^\\circ \\).',
                    workingLatex: 'y = 2\\sin(0^\\circ + 30^\\circ) = 2\\sin 30^\\circ = 2 \\times \\frac{1}{2} = 1',
                    explanation: '\\( \\sin 30^\\circ = \\frac{1}{2} \\).'
                }
            ],
            finalAnswer: '(a) Amplitude \\( = 2 \\). (b) Period \\( = 360^\\circ \\). (c) \\( y \\)-intercept \\( = 1 \\), i.e., \\( (0^\\circ, 1) \\).'
        }
    },
    {
        id: 't3-024',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 24',
        difficulty: 'Foundation',
        questionText: 'For the graph \\( y = 5\\cos 2x \\): (a) state the amplitude, (b) state the period, (c) state the range.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'combined transformations', 'amplitude', 'period', 'range', 'cos x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Read the amplitude.',
                    workingLatex: '\\text{Amplitude} = 5',
                    explanation: 'The coefficient of \\( \\cos \\) is 5.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Find the period.',
                    workingLatex: '\\text{Period} = \\frac{360^\\circ}{2} = 180^\\circ',
                    explanation: 'The 2 inside halves the period.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): State the range.',
                    workingLatex: '-5 \\leq y \\leq 5',
                    explanation: 'The amplitude is 5, so \\( y \\) ranges from \\( -5 \\) to \\( 5 \\).'
                }
            ],
            finalAnswer: '(a) Amplitude \\( = 5 \\). (b) Period \\( = 180^\\circ \\). (c) \\( -5 \\leq y \\leq 5 \\).'
        }
    },
    // ── TYPE G: Reading values and symmetry ─────────────────────────────────
    {
        id: 't3-025',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 25',
        difficulty: 'Foundation',
        questionText: 'Using the graph of \\( y = \\sin x \\), explain why \\( \\sin(180^\\circ - x) = \\sin x \\) for all values of \\( x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'symmetry', 'sin x', 'sin(180 - x)'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recall the symmetry of the sine graph.',
                    workingLatex: 'y = \\sin x \\text{ is symmetric about } x = 90^\\circ',
                    explanation: 'The sine curve has a line of symmetry at its peak, \\( x = 90^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The values \\( x \\) and \\( 180^\\circ - x \\) are equidistant from \\( 90^\\circ \\) on either side.',
                    workingLatex: '90^\\circ - x \\quad \\text{vs} \\quad (180^\\circ - x) - 90^\\circ = 90^\\circ - x',
                    explanation: 'Both are the same distance from the axis of symmetry, so they have the same \\( y \\)-value.'
                }
            ],
            finalAnswer: 'The sine graph is symmetric about \\( x = 90^\\circ \\), so \\( \\sin x = \\sin(180^\\circ - x) \\) for all \\( x \\).'
        }
    },
    {
        id: 't3-026',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 26',
        difficulty: 'Foundation',
        questionText: 'Given that \\( \\cos 40^\\circ = 0.766 \\), use the symmetry of the cosine graph to write down the value of \\( \\cos 320^\\circ \\) and \\( \\cos(-40^\\circ) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'symmetry', 'cos x', 'related angles'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the symmetry \\( \\cos(-x) = \\cos x \\) (graph is symmetric about the \\( y \\)-axis).',
                    workingLatex: '\\cos(-40^\\circ) = \\cos 40^\\circ = 0.766',
                    explanation: 'The cosine graph is even: it looks the same on both sides of the \\( y \\)-axis.'
                },
                {
                    stepNumber: 2,
                    description: 'Use the period: \\( \\cos(360^\\circ - x) = \\cos x \\).',
                    workingLatex: '\\cos 320^\\circ = \\cos(360^\\circ - 40^\\circ) = \\cos 40^\\circ = 0.766',
                    explanation: '\\( 320^\\circ = 360^\\circ - 40^\\circ \\), and the cosine graph is symmetric about \\( x = 0^\\circ \\) (and about \\( x = 360^\\circ \\)).'
                }
            ],
            finalAnswer: '\\( \\cos 320^\\circ = 0.766 \\) and \\( \\cos(-40^\\circ) = 0.766 \\).'
        }
    },
    {
        id: 't3-027',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 27',
        difficulty: 'Foundation',
        questionText: 'Given that \\( \\sin 25^\\circ = 0.423 \\), write down the values of \\( \\sin 155^\\circ \\) and \\( \\sin(-25^\\circ) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'symmetry', 'sin x', 'related angles'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use \\( \\sin(180^\\circ - x) = \\sin x \\).',
                    workingLatex: '\\sin 155^\\circ = \\sin(180^\\circ - 25^\\circ) = \\sin 25^\\circ = 0.423',
                    explanation: 'Symmetry of the sine graph about \\( x = 90^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Use \\( \\sin(-x) = -\\sin x \\) (the sine graph has rotational symmetry about the origin).',
                    workingLatex: '\\sin(-25^\\circ) = -\\sin 25^\\circ = -0.423',
                    explanation: 'The sine function is odd.'
                }
            ],
            finalAnswer: '\\( \\sin 155^\\circ = 0.423 \\); \\( \\sin(-25^\\circ) = -0.423 \\).'
        }
    },
    {
        id: 't3-028',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 28',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = \\sin x \\) passes through the point \\( (30^\\circ,\\ 0.5) \\). Using the properties of the graph, write down three other points that also lie on the curve in the interval \\( -360^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'sin x', 'periodicity', 'symmetry'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the symmetry \\( \\sin(180^\\circ - x) = \\sin x \\).',
                    workingLatex: '\\sin(180^\\circ - 30^\\circ) = \\sin 150^\\circ = 0.5 \\Rightarrow (150^\\circ,\\ 0.5)',
                    explanation: 'Reflection symmetry about \\( x = 90^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Use periodicity to shift by \\( -360^\\circ \\).',
                    workingLatex: '\\sin(30^\\circ - 360^\\circ) = \\sin(-330^\\circ) = 0.5 \\Rightarrow (-330^\\circ,\\ 0.5)',
                    explanation: 'The graph repeats every \\( 360^\\circ \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Shift \\( 150^\\circ \\) by \\( -360^\\circ \\).',
                    workingLatex: '\\sin(150^\\circ - 360^\\circ) = \\sin(-210^\\circ) = 0.5 \\Rightarrow (-210^\\circ,\\ 0.5)',
                    explanation: 'Another point obtained by using periodicity.'
                }
            ],
            finalAnswer: '\\( (150^\\circ, 0.5),\\ (-330^\\circ, 0.5),\\ (-210^\\circ, 0.5) \\) (and others possible).'
        }
    },
    // ── TYPE H: Identify the graph from its equation ────────────────────────
    {
        id: 't3-029',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 29',
        difficulty: 'Foundation',
        questionText: 'A graph has equation \\( y = A\\sin x + B \\). Its maximum value is 7 and its minimum value is 1. Find the values of \\( A \\) and \\( B \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'find A and B', 'amplitude', 'vertical translation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the amplitude from the max and min.',
                    workingLatex: 'A = \\frac{\\text{max} - \\text{min}}{2} = \\frac{7 - 1}{2} = 3',
                    explanation: 'The amplitude is half the distance between maximum and minimum.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the vertical shift \\( B \\).',
                    workingLatex: 'B = \\frac{\\text{max} + \\text{min}}{2} = \\frac{7 + 1}{2} = 4',
                    explanation: 'The midline value is the average of maximum and minimum.'
                }
            ],
            finalAnswer: '\\( A = 3,\\ B = 4 \\)'
        }
    },
    {
        id: 't3-030',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 30',
        difficulty: 'Foundation',
        questionText: 'A graph has equation \\( y = A\\cos x + B \\). Its maximum value is 2 and its minimum value is \\( -8 \\). Find \\( A \\) and \\( B \\), and write down the equation of the midline.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'find A and B', 'amplitude', 'midline', 'cos x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the amplitude.',
                    workingLatex: 'A = \\frac{2 - (-8)}{2} = \\frac{10}{2} = 5',
                    explanation: 'Amplitude = half the total range.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the vertical shift.',
                    workingLatex: 'B = \\frac{2 + (-8)}{2} = \\frac{-6}{2} = -3',
                    explanation: 'Midline = average of max and min.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the equation of the midline.',
                    workingLatex: 'y = -3',
                    explanation: 'The midline is the horizontal line \\( y = B \\).'
                }
            ],
            finalAnswer: '\\( A = 5,\\ B = -3 \\); midline: \\( y = -3 \\).'
        }
    },
    // ── TYPE I: Multi-part exam-style questions ─────────────────────────────
    {
        id: 't3-031',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 31',
        difficulty: 'Foundation',
        questionText: '(a) Sketch the graph of \\( f(x) = \\cos x \\) for \\( -360^\\circ \\leq x \\leq 360^\\circ \\), marking clearly the coordinates of all intercepts and turning points. \n\n \n\n (b) On the same axes, sketch \\( g(x) = \\cos(x - 180^\\circ) \\). \n\n \n\n (c) Write \\( g(x) \\) in its simplest form.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'sketch', 'horizontal translation', 'cos x', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Key features of \\( y = \\cos x \\) in \\( [-360^\\circ, 360^\\circ] \\).',
                    workingLatex: '\\text{Maxima: } (-360^\\circ,1),\\,(0^\\circ,1),\\,(360^\\circ,1);\\quad \\text{Minima: } (-180^\\circ,-1),\\,(180^\\circ,-1)',
                    explanation: 'Also crosses \\( x \\)-axis at \\( \\pm 90^\\circ, \\pm 270^\\circ \\); \\( y \\)-intercept \\( (0^\\circ, 1) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( g(x) = \\cos(x - 180^\\circ) \\) is \\( y = \\cos x \\) shifted \\( 180^\\circ \\) to the right.',
                    workingLatex: '\\text{Maxima of } g: (-180^\\circ,1),(180^\\circ,1); \\quad \\text{Minima: }(0^\\circ,-1),(\\pm 360^\\circ,-1)',
                    explanation: 'Every feature of \\( \\cos x \\) moves \\( 180^\\circ \\) to the right.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Simplify \\( \\cos(x - 180^\\circ) \\).',
                    workingLatex: '\\cos(x - 180^\\circ) = -\\cos x',
                    explanation: 'Using the identity \\( \\cos(x - 180^\\circ) = -\\cos x \\) (shifting cosine by half a period flips it).'
                }
            ],
            finalAnswer: '(c) \\( g(x) = -\\cos x \\).'
        }
    },
    {
        id: 't3-032',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 32',
        difficulty: 'Foundation',
        questionText: '(a) Sketch \\( f(x) = \\tan x \\) for \\( -90^\\circ < x < 270^\\circ \\), marking asymptotes clearly. \n\n \n\n (b) Translate the graph \\( 90^\\circ \\) to the left and sketch it on the same axes. \n\n \n\n (c) Write down the equation of the translated graph.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'tan x', 'horizontal translation', 'asymptotes', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Sketch \\( y = \\tan x \\). Asymptotes at \\( x = 90^\\circ \\); goes from \\( -\\infty \\) to \\( +\\infty \\) in each interval. Passes through \\( (0^\\circ, 0) \\) and \\( (180^\\circ, 0) \\).',
                    workingLatex: '\\text{Asymptote: } x = 90^\\circ',
                    explanation: 'Only one asymptote inside the open interval \\( (-90^\\circ, 270^\\circ) \\) for \\( \\tan x \\) — also \\( x = 270^\\circ \\) is at the boundary.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Translate \\( 90^\\circ \\) to the left — shift every feature by \\( -90^\\circ \\).',
                    workingLatex: '\\text{New asymptotes: } x = 90^\\circ - 90^\\circ = 0^\\circ \\text{ and } x = 270^\\circ - 90^\\circ = 180^\\circ',
                    explanation: 'The asymptotes and zero-crossings all shift left by \\( 90^\\circ \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): A leftward shift of \\( 90^\\circ \\) replaces \\( x \\) with \\( x + 90^\\circ \\).',
                    workingLatex: 'y = \\tan(x + 90^\\circ)',
                    explanation: 'This is the equation of the translated graph.'
                }
            ],
            finalAnswer: '(c) \\( y = \\tan(x + 90^\\circ) \\); asymptotes at \\( x = 0^\\circ \\) and \\( x = 180^\\circ \\).'
        }
    },
    {
        id: 't3-033',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 33',
        difficulty: 'Foundation',
        questionText: '(a) On the same axes, sketch \\( y = \\sin x \\) and \\( y = \\sin 3x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). \n\n \n\n (b) State the number of solutions to \\( \\sin x = \\sin 3x \\) in the open interval \\( 0^\\circ < x < 360^\\circ \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'horizontal compression', 'sin x', 'intersections', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): \\( y = \\sin x \\) — period \\( 360^\\circ \\), one complete cycle.',
                    workingLatex: '\\text{Max at } (90^\\circ, 1),\\quad \\text{Min at } (270^\\circ, -1)',
                    explanation: 'Standard sine wave.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): \\( y = \\sin 3x \\) — period \\( \\frac{360^\\circ}{3} = 120^\\circ \\), three complete cycles.',
                    workingLatex: '\\text{Maxima at } 30^\\circ, 150^\\circ, 270^\\circ; \\quad \\text{Minima at } 90^\\circ, 210^\\circ, 330^\\circ',
                    explanation: 'Three full oscillations compressed into the same interval.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Count the intersections of the two graphs in \\( (0^\\circ, 360^\\circ) \\). The graphs cross wherever \\( \\sin x = \\sin 3x \\).',
                    workingLatex: '\\text{Intersections at approximately } x = 0^\\circ, 45^\\circ, 90^\\circ, 135^\\circ, 180^\\circ, 225^\\circ, 270^\\circ, 315^\\circ, 360^\\circ',
                    explanation: 'In the open interval \\( (0^\\circ, 360^\\circ) \\), excluding the endpoints: the two curves cross at \\( x = 45^\\circ, 90^\\circ, 135^\\circ, 180^\\circ, 225^\\circ, 270^\\circ, 315^\\circ \\) — a total of 7 solutions.'
                }
            ],
            finalAnswer: '(b) 7 solutions in \\( 0^\\circ < x < 360^\\circ \\).'
        }
    },
    {
        id: 't3-034',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 34',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = a\\sin(bx) + c \\) has amplitude 4, period \\( 90^\\circ \\), and passes through \\( (0^\\circ, -1) \\). \n\n \n\n Find the values of \\( a \\), \\( b \\), and \\( c \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'find parameters', 'amplitude', 'period', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the amplitude to find \\( a \\).',
                    workingLatex: 'a = 4',
                    explanation: 'The amplitude is \\( |a| \\), given as 4.'
                },
                {
                    stepNumber: 2,
                    description: 'Use the period to find \\( b \\).',
                    workingLatex: '\\frac{360^\\circ}{b} = 90^\\circ \\Rightarrow b = 4',
                    explanation: 'Period \\( = \\frac{360^\\circ}{b} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute the point \\( (0^\\circ, -1) \\) to find \\( c \\).',
                    workingLatex: '-1 = 4\\sin(4 \\times 0^\\circ) + c = 4(0) + c = c',
                    explanation: '\\( \\sin 0^\\circ = 0 \\), so \\( -1 = c \\).'
                }
            ],
            finalAnswer: '\\( a = 4,\\ b = 4,\\ c = -1 \\), giving \\( y = 4\\sin(4x) - 1 \\).'
        }
    },
    {
        id: 't3-035',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 35',
        difficulty: 'Foundation',
        questionText: '(a) Describe fully the two transformations that map \\( y = \\cos x \\) onto \\( y = -3\\cos 2x \\). \n\n \n\n (b) State the amplitude, period, and range of \\( y = -3\\cos 2x \\). \n\n \n\n (c) Find the coordinates of the first maximum point of \\( y = -3\\cos 2x \\) for \\( x > 0^\\circ \\).',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'combined transformations', 'cos x', 'maximum', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Transformation 1 — horizontal compression.',
                    workingLatex: 'y = \\cos x \\rightarrow y = \\cos 2x',
                    explanation: 'Replacing \\( x \\) with \\( 2x \\) compresses the graph horizontally by scale factor \\( \\frac{1}{2} \\), halving the period to \\( 180^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Transformation 2 — vertical stretch and reflection.',
                    workingLatex: 'y = \\cos 2x \\rightarrow y = -3\\cos 2x',
                    explanation: 'Multiplying by \\( -3 \\): vertical stretch by scale factor 3, then reflection in the \\( x \\)-axis (or simultaneously).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): State amplitude.',
                    workingLatex: '\\text{Amplitude} = |-3| = 3',
                    explanation: 'The amplitude is the absolute value of the multiplying factor.'
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): State period.',
                    workingLatex: '\\text{Period} = \\frac{360^\\circ}{2} = 180^\\circ',
                    explanation: 'The coefficient 2 halves the period.'
                },
                {
                    stepNumber: 5,
                    description: 'Part (b): State range.',
                    workingLatex: '-3 \\leq y \\leq 3',
                    explanation: 'The amplitude is 3 and there is no vertical shift.'
                },
                {
                    stepNumber: 6,
                    description: 'Part (c): Find the first maximum for \\( x > 0^\\circ \\). \\( y = -3\\cos 2x \\) is maximised when \\( \\cos 2x = -1 \\).',
                    workingLatex: '\\cos 2x = -1 \\Rightarrow 2x = 180^\\circ \\Rightarrow x = 90^\\circ',
                    explanation: '\\( \\cos 2x = -1 \\) first occurs at \\( 2x = 180^\\circ \\) for \\( x > 0^\\circ \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Calculate the \\( y \\)-coordinate of this maximum.',
                    workingLatex: 'y = -3(-1) = 3 \\Rightarrow \\text{maximum at } (90^\\circ,\\ 3)',
                    explanation: 'The maximum value of \\( y = -3\\cos 2x \\) is 3, reached at \\( x = 90^\\circ \\).'
                }
            ],
            finalAnswer: '(b) Amplitude \\( = 3 \\), Period \\( = 180^\\circ \\), Range \\( = [-3, 3] \\). (c) First maximum at \\( (90^\\circ, 3) \\).'
        }
    },

    // ─── Q36–70: Additional Trigonometric Graphs Questions ──────────────────

    {
        id: 't3-036', topicRef: 't3', topicTitle: 'Trigonometric Graphs 36', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\sin x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). State the period and amplitude.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Key features', workingLatex: '\\text{Period} = 360^\\circ, \\quad \\text{Amplitude} = 1', explanation: 'Standard sine curve: max 1 at 90, min -1 at 270, zeros at 0, 180, 360.' }
        ], finalAnswer: 'Period = 360 degrees, Amplitude = 1' }
    },
    {
        id: 't3-037', topicRef: 't3', topicTitle: 'Trigonometric Graphs 37', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). State the period and amplitude.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Key features', workingLatex: '\\text{Period} = 360^\\circ, \\quad \\text{Amplitude} = 1', explanation: 'Starts at 1, zero at 90, min -1 at 180, zero at 270, back to 1 at 360.' }
        ], finalAnswer: 'Period = 360 degrees, Amplitude = 1' }
    },
    {
        id: 't3-038', topicRef: 't3', topicTitle: 'Trigonometric Graphs 38', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\tan x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). State the period and the equations of the asymptotes.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Key features', workingLatex: '\\text{Period} = 180^\\circ, \\quad \\text{Asymptotes at } x = 90^\\circ, 270^\\circ', explanation: 'Tan has no amplitude; it goes to \\pm infinity.' }
        ], finalAnswer: 'Period = 180 degrees, Asymptotes at x = 90 and x = 270' }
    },
    {
        id: 't3-039', topicRef: 't3', topicTitle: 'Trigonometric Graphs 39', difficulty: 'Foundation',
        questionText: 'Write down the amplitude and period of \\( y = 3\\sin x \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Read off', workingLatex: '\\text{Amplitude} = 3, \\quad \\text{Period} = 360^\\circ', explanation: 'The 3 stretches vertically.' }
        ], finalAnswer: 'Amplitude = 3, Period = 360 degrees' }
    },
    {
        id: 't3-040', topicRef: 't3', topicTitle: 'Trigonometric Graphs 40', difficulty: 'Foundation',
        questionText: 'Write down the amplitude and period of \\( y = \\cos 2x \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Read off', workingLatex: '\\text{Amplitude} = 1, \\quad \\text{Period} = \\frac{360^\\circ}{2} = 180^\\circ', explanation: 'The 2 compresses horizontally.' }
        ], finalAnswer: 'Amplitude = 1, Period = 180 degrees' }
    },
    {
        id: 't3-041', topicRef: 't3', topicTitle: 'Trigonometric Graphs 41', difficulty: 'Foundation',
        questionText: 'State the amplitude, period and range of \\( y = 4\\sin 3x \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify', workingLatex: '\\text{Amplitude} = 4, \\quad \\text{Period} = \\frac{360^\\circ}{3} = 120^\\circ, \\quad \\text{Range} = [-4, 4]', explanation: '' }
        ], finalAnswer: 'Amplitude = 4, Period = 120 degrees, Range [-4, 4]' }
    },
    {
        id: 't3-042', topicRef: 't3', topicTitle: 'Trigonometric Graphs 42', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\sin x + 2 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). State the range.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Vertical translation up 2', workingLatex: '\\text{Range} = [1, 3]', explanation: 'Sine curve shifted up by 2.' }
        ], finalAnswer: 'Range = [1, 3]' }
    },
    {
        id: 't3-043', topicRef: 't3', topicTitle: 'Trigonometric Graphs 43', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = -\\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Describe the transformation from \\( y = \\cos x \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Reflection in x-axis', workingLatex: '\\text{Starts at } -1, \\text{ max } 1 \\text{ at } 180^\\circ', explanation: 'Every y-value negated.' }
        ], finalAnswer: 'Reflection in x-axis; starts at -1, reaches 1 at 180 degrees' }
    },
    {
        id: 't3-044', topicRef: 't3', topicTitle: 'Trigonometric Graphs 44', difficulty: 'Foundation',
        questionText: 'Describe the transformation that maps \\( y = \\sin x \\) to \\( y = \\sin(x - 30^\\circ) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Horizontal translation', workingLatex: '\\text{Translation } 30^\\circ \\text{ to the right}', explanation: 'Replace x with (x - 30) shifts right.' }
        ], finalAnswer: 'Translation 30 degrees to the right' }
    },
    {
        id: 't3-045', topicRef: 't3', topicTitle: 'Trigonometric Graphs 45', difficulty: 'Foundation',
        questionText: 'The graph of \\( y = 2\\sin(x + 45^\\circ) \\) has what amplitude, period and phase shift?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify', workingLatex: '\\text{Amplitude} = 2, \\quad \\text{Period} = 360^\\circ, \\quad \\text{Phase shift} = 45^\\circ \\text{ left}', explanation: '' }
        ], finalAnswer: 'Amplitude 2, Period 360 degrees, Phase shift 45 degrees left' }
    },
    {
        id: 't3-046', topicRef: 't3', topicTitle: 'Trigonometric Graphs 46', difficulty: 'Foundation',
        questionText: 'How many solutions does \\( \\sin x = 0.5 \\) have for \\( 0^\\circ \\leq x \\leq 360^\\circ \\)?',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'From the graph', workingLatex: 'x = 30^\\circ \\text{ and } x = 150^\\circ', explanation: 'The horizontal line y = 0.5 crosses the sine curve twice.' }
        ], finalAnswer: '2 solutions' }
    },
    {
        id: 't3-047', topicRef: 't3', topicTitle: 'Trigonometric Graphs 47', difficulty: 'Foundation',
        questionText: 'How many solutions does \\( \\cos x = -0.5 \\) have for \\( 0^\\circ \\leq x \\leq 720^\\circ \\)?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'In 0 to 360', workingLatex: 'x = 120^\\circ, 240^\\circ', explanation: '2 solutions per cycle.' },
            { stepNumber: 2, description: 'In 360 to 720', workingLatex: 'x = 480^\\circ, 600^\\circ', explanation: 'Add 360 to each.' }
        ], finalAnswer: '4 solutions' }
    },
    {
        id: 't3-048', topicRef: 't3', topicTitle: 'Trigonometric Graphs 48', difficulty: 'Foundation',
        questionText: 'State the period of \\( y = \\tan 2x \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Period', workingLatex: '\\frac{180^\\circ}{2} = 90^\\circ', explanation: '' }
        ], finalAnswer: '90 degrees' }
    },
    {
        id: 't3-049', topicRef: 't3', topicTitle: 'Trigonometric Graphs 49', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = 2\\cos x - 1 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). State the maximum, minimum and range.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Max and min', workingLatex: '\\text{Max} = 2(1) - 1 = 1; \\quad \\text{Min} = 2(-1) - 1 = -3', explanation: '' },
            { stepNumber: 2, description: 'Range', workingLatex: '[-3, 1]', explanation: 'Stretch by 2, then shift down 1.' }
        ], finalAnswer: 'Max = 1, Min = -3, Range [-3, 1]' }
    },
    {
        id: 't3-050', topicRef: 't3', topicTitle: 'Trigonometric Graphs 50', difficulty: 'Foundation',
        questionText: 'The graph shows \\( y = a\\sin bx + c \\). It has amplitude 3, period \\( 120^\\circ \\) and is shifted up by 1. Find \\( a \\), \\( b \\) and \\( c \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify', workingLatex: 'a = 3, \\quad b = \\frac{360}{120} = 3, \\quad c = 1', explanation: '' }
        ], finalAnswer: 'a = 3, b = 3, c = 1' }
    },
    {
        id: 't3-051', topicRef: 't3', topicTitle: 'Trigonometric Graphs 51', difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin x = -1 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'From graph', workingLatex: 'x = 270^\\circ', explanation: 'Minimum of sin curve.' }
        ], finalAnswer: 'x = 270 degrees' }
    },
    {
        id: 't3-052', topicRef: 't3', topicTitle: 'Trigonometric Graphs 52', difficulty: 'Foundation',
        questionText: 'How many times does the line \\( y = 0.8 \\) intersect \\( y = \\sin 3x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\)?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'sin 3x has 3 complete cycles in 360 degrees', workingLatex: '\\text{Each cycle has 2 intersections with } y = 0.8', explanation: '' },
            { stepNumber: 2, description: 'Total', workingLatex: '3 \\times 2 = 6', explanation: '' }
        ], finalAnswer: '6 intersections' }
    },
    {
        id: 't3-053', topicRef: 't3', topicTitle: 'Trigonometric Graphs 53', difficulty: 'Foundation',
        questionText: 'Describe the transformations that map \\( y = \\cos x \\) to \\( y = 3\\cos(2x) + 1 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify', workingLatex: '\\text{Vertical stretch factor 3, horizontal compression factor 2, translation up 1}', explanation: '' }
        ], finalAnswer: 'Stretch vertically by 3, compress horizontally by 2, translate up 1' }
    },
    {
        id: 't3-054', topicRef: 't3', topicTitle: 'Trigonometric Graphs 54', difficulty: 'Foundation',
        questionText: 'Find the coordinates of the first maximum of \\( y = 5\\sin(x - 90^\\circ) \\) for \\( x > 0 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Max of sin occurs at 90 degrees', workingLatex: 'x - 90 = 90 \\implies x = 180^\\circ', explanation: '' },
            { stepNumber: 2, description: 'y-value', workingLatex: 'y = 5(1) = 5', explanation: '' }
        ], finalAnswer: '(180, 5)' }
    },
    {
        id: 't3-055', topicRef: 't3', topicTitle: 'Trigonometric Graphs 55', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = |\\sin x| \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). State its period.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Reflect negative parts above x-axis', workingLatex: '\\text{Period} = 180^\\circ', explanation: 'The modulus makes it always positive, halving the period.' }
        ], finalAnswer: 'Repeated bumps; period = 180 degrees' }
    },
    {
        id: 't3-056', topicRef: 't3', topicTitle: 'Trigonometric Graphs 56', difficulty: 'Foundation',
        questionText: 'For what values of \\( x \\) in \\( [0^\\circ, 360^\\circ] \\) is \\( \\sin x > \\cos x \\)?',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'sin x = cos x when tan x = 1', workingLatex: 'x = 45^\\circ, 225^\\circ', explanation: '' },
            { stepNumber: 2, description: 'From graph', workingLatex: '\\sin x > \\cos x \\text{ for } 45^\\circ < x < 225^\\circ', explanation: '' }
        ], finalAnswer: '45 < x < 225 degrees' }
    },
    {
        id: 't3-057', topicRef: 't3', topicTitle: 'Trigonometric Graphs 57', difficulty: 'Foundation',
        questionText: 'Write down the equation of the graph obtained by reflecting \\( y = \\sin x \\) in the y-axis.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Replace x with -x', workingLatex: 'y = \\sin(-x) = -\\sin x', explanation: 'Since sin is an odd function.' }
        ], finalAnswer: 'y = -sin x' }
    },
    {
        id: 't3-058', topicRef: 't3', topicTitle: 'Trigonometric Graphs 58', difficulty: 'Foundation',
        questionText: 'Write down the equation of the graph obtained by reflecting \\( y = \\cos x \\) in the y-axis.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Replace x with -x', workingLatex: 'y = \\cos(-x) = \\cos x', explanation: 'Since cos is an even function — the graph is unchanged.' }
        ], finalAnswer: 'y = cos x (unchanged)' }
    },
    {
        id: 't3-059', topicRef: 't3', topicTitle: 'Trigonometric Graphs 59', difficulty: 'Foundation',
        questionText: 'Find the smallest positive value of \\( x \\) for which \\( \\sin 2x = 1 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Solve', workingLatex: '2x = 90^\\circ \\implies x = 45^\\circ', explanation: '' }
        ], finalAnswer: 'x = 45 degrees' }
    },
    {
        id: 't3-060', topicRef: 't3', topicTitle: 'Trigonometric Graphs 60', difficulty: 'Foundation',
        questionText: 'The maximum value of \\( y = a - b\\cos x \\) is 7 and the minimum is 1. Find \\( a \\) and \\( b \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set up equations', workingLatex: 'a + b = 7 \\quad (\\text{when } \\cos x = -1)', explanation: '' },
            { stepNumber: 2, description: 'Second equation', workingLatex: 'a - b = 1 \\quad (\\text{when } \\cos x = 1)', explanation: '' },
            { stepNumber: 3, description: 'Solve', workingLatex: '2a = 8 \\implies a = 4, \\quad b = 3', explanation: '' }
        ], finalAnswer: 'a = 4, b = 3' }
    },
    {
        id: 't3-061', topicRef: 't3', topicTitle: 'Trigonometric Graphs 61', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\sin x \\) and \\( y = \\sin 2x \\) on the same axes for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). How many points of intersection are there?',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'sin x = sin 2x means sin x = 2 sin x cos x', workingLatex: '\\sin x(1 - 2\\cos x) = 0', explanation: '' },
            { stepNumber: 2, description: 'Solutions', workingLatex: '\\sin x = 0: x = 0, 180, 360; \\quad \\cos x = \\frac{1}{2}: x = 60, 300', explanation: '' }
        ], finalAnswer: '5 points of intersection' }
    },
    {
        id: 't3-062', topicRef: 't3', topicTitle: 'Trigonometric Graphs 62', difficulty: 'Foundation',
        questionText: 'State the range of \\( y = 3 - 2\\sin x \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Calculate', workingLatex: '\\text{Min} = 3 - 2(1) = 1; \\quad \\text{Max} = 3 - 2(-1) = 5', explanation: '' }
        ], finalAnswer: 'Range = [1, 5]' }
    },
    {
        id: 't3-063', topicRef: 't3', topicTitle: 'Trigonometric Graphs 63', difficulty: 'Foundation',
        questionText: 'Find the period and asymptotes of \\( y = \\tan(x - 45^\\circ) \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Period', workingLatex: '180^\\circ', explanation: 'Same as tan x.' },
            { stepNumber: 2, description: 'Asymptotes shifted right by 45', workingLatex: 'x = 135^\\circ, 315^\\circ', explanation: 'Original at 90, 270; add 45.' }
        ], finalAnswer: 'Period = 180 degrees; asymptotes at x = 135, 315' }
    },
    {
        id: 't3-064', topicRef: 't3', topicTitle: 'Trigonometric Graphs 64', difficulty: 'Foundation',
        questionText: 'A function is defined as \\( f(x) = 2\\sin x + 3\\cos x \\). Find the maximum value of \\( f(x) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Maximum of a sin x + b cos x is sqrt(a^2 + b^2)', workingLatex: 'R = \\sqrt{4 + 9} = \\sqrt{13}', explanation: '' }
        ], finalAnswer: '\\sqrt{13} \\approx 3.61' }
    },
    {
        id: 't3-065', topicRef: 't3', topicTitle: 'Trigonometric Graphs 65', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\cos(x + 90^\\circ) \\) and explain why it looks the same as another standard trig graph.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use identity', workingLatex: '\\cos(x + 90^\\circ) = -\\sin x', explanation: 'The graph is identical to y = -sin x.' }
        ], finalAnswer: 'Same as y = -sin x' }
    },
    {
        id: 't3-066', topicRef: 't3', topicTitle: 'Trigonometric Graphs 66', difficulty: 'Foundation',
        questionText: 'The graph of \\( y = \\sin x \\) is stretched vertically by factor 4 and translated 2 units down. Write the equation.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply transformations', workingLatex: 'y = 4\\sin x - 2', explanation: '' }
        ], finalAnswer: 'y = 4 sin x - 2' }
    },
    {
        id: 't3-067', topicRef: 't3', topicTitle: 'Trigonometric Graphs 67', difficulty: 'Foundation',
        questionText: 'For \\( 0^\\circ \\leq x \\leq 360^\\circ \\), how many solutions does \\( 2\\sin 3x = 1 \\) have?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: '\\sin 3x = 0.5', explanation: '' },
            { stepNumber: 2, description: 'Range of 3x: 0 to 1080. sin = 0.5 gives 2 solutions per cycle.', workingLatex: '3 \\text{ cycles} \\times 2 = 6 \\text{ solutions}', explanation: '' }
        ], finalAnswer: '6 solutions' }
    },
    {
        id: 't3-068', topicRef: 't3', topicTitle: 'Trigonometric Graphs 68', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = 1 + \\tan x \\) for \\( -90^\\circ < x < 90^\\circ \\). State where it crosses the axes.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'y-intercept', workingLatex: 'y = 1 + 0 = 1', explanation: 'At x = 0.' },
            { stepNumber: 2, description: 'x-intercept', workingLatex: '\\tan x = -1 \\implies x = -45^\\circ', explanation: '' }
        ], finalAnswer: 'y-int (0, 1); x-int (-45, 0)' }
    },
    {
        id: 't3-069', topicRef: 't3', topicTitle: 'Trigonometric Graphs 69', difficulty: 'Foundation',
        questionText: 'The graph of \\( y = a\\cos(bx) + c \\) has maximum 5, minimum -1 and period \\( 90^\\circ \\). Find \\( a \\), \\( b \\) and \\( c \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Amplitude', workingLatex: 'a = \\frac{5 - (-1)}{2} = 3', explanation: '' },
            { stepNumber: 2, description: 'Vertical shift', workingLatex: 'c = \\frac{5 + (-1)}{2} = 2', explanation: '' },
            { stepNumber: 3, description: 'Period', workingLatex: '\\frac{360}{b} = 90 \\implies b = 4', explanation: '' }
        ], finalAnswer: 'a = 3, b = 4, c = 2' }
    },
    {
        id: 't3-070', topicRef: 't3', topicTitle: 'Trigonometric Graphs 70', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\sin x \\) and \\( y = \\cos x \\) on the same axes for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Find all values of \\( x \\) where \\( \\sin x = \\cos x \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set equal', workingLatex: '\\sin x = \\cos x \\implies \\tan x = 1', explanation: '' },
            { stepNumber: 2, description: 'Solutions', workingLatex: 'x = 45^\\circ, 225^\\circ', explanation: '' }
        ], finalAnswer: 'x = 45, 225 degrees' }
    },
];
