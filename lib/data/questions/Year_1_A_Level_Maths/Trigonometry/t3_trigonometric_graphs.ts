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
                    description: 'Recall the period of the sine function.',
                    workingLatex: '\\text{Period of } \\sin x = 360^\\circ',
                    explanation: 'The sine curve completes one full cycle every \\( 360^\\circ \\); after that the values repeat exactly. From the unit-circle definition, rotating by an additional \\( 360^\\circ \\) returns the point to its starting position.'
                },
                {
                    stepNumber: 2,
                    description: 'Read off the maximum and minimum.',
                    workingLatex: '\\text{Max} = 1, \\quad \\text{Min} = -1',
                    explanation: 'These come directly from the unit circle: \\( \\sin \\theta \\) is the \\( y \\)-coordinate of the rotating point, which lives between \\( -1 \\) and \\( 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Compute the amplitude.',
                    workingLatex: '\\text{Amplitude} = \\tfrac{1 - (-1)}{2} = 1',
                    explanation: 'Amplitude is half the distance between the maximum and minimum. A common slip is to call the max value itself "the amplitude" — true here only because there is no vertical shift.'
                },
                {
                    stepNumber: 4,
                    description: 'Locate the maximum in \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: '\\sin 90^\\circ = 1 \\Rightarrow \\text{max at } (90^\\circ,\\ 1)',
                    explanation: '\\( \\sin x \\) reaches its peak when the unit-circle point is straight up; this happens exactly once in the interval.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [4.5, 0.0785], [9, 0.1564], [13.5, 0.2334], [18, 0.309], [22.5, 0.3827], [27, 0.454], [31.5, 0.5225], [36, 0.5878], [40.5, 0.6494], [45, 0.7071], [49.5, 0.7604], [54, 0.809], [58.5, 0.8526], [63, 0.891], [67.5, 0.9239], [72, 0.9511], [76.5, 0.9724], [81, 0.9877], [85.5, 0.9969], [90, 1], [94.5, 0.9969], [99, 0.9877], [103.5, 0.9724], [108, 0.9511], [112.5, 0.9239], [117, 0.891], [121.5, 0.8526], [126, 0.809], [130.5, 0.7604], [135, 0.7071], [139.5, 0.6494], [144, 0.5878], [148.5, 0.5225], [153, 0.454], [157.5, 0.3827], [162, 0.309], [166.5, 0.2334], [171, 0.1564], [175.5, 0.0785], [180, 0], [184.5, -0.0785], [189, -0.1564], [193.5, -0.2334], [198, -0.309], [202.5, -0.3827], [207, -0.454], [211.5, -0.5225], [216, -0.5878], [220.5, -0.6494], [225, -0.7071], [229.5, -0.7604], [234, -0.809], [238.5, -0.8526], [243, -0.891], [247.5, -0.9239], [252, -0.9511], [256.5, -0.9724], [261, -0.9877], [265.5, -0.9969], [270, -1], [274.5, -0.9969], [279, -0.9877], [283.5, -0.9724], [288, -0.9511], [292.5, -0.9239], [297, -0.891], [301.5, -0.8526], [306, -0.809], [310.5, -0.7604], [315, -0.7071], [319.5, -0.6494], [324, -0.5878], [328.5, -0.5225], [333, -0.454], [337.5, -0.3827], [342, -0.309], [346.5, -0.2334], [351, -0.1564], [355.5, -0.0785], [360, 0]], color: '#2563eb', label: 'y = \\sin x', labelAt: [300, 1.25] }
                        ],
                        points: [
                            { at: [90, 1], label: '(90°, 1) max', labelAnchor: 'n' },
                            { at: [0, 0], label: '(0°, 0)', labelAnchor: 'sw' },
                            { at: [180, 0], label: '(180°, 0)', labelAnchor: 'sw' },
                            { at: [360, 0], label: '(360°, 0)', labelAnchor: 'sw' },
                            { at: [270, -1], label: '(270°, -1) min', labelAnchor: 's' }
                        ]
                    }
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
                    explanation: 'Cosine, like sine, returns to its starting value after a full revolution of the unit circle.'
                },
                {
                    stepNumber: 2,
                    description: 'Read off the extremes and deduce the amplitude.',
                    workingLatex: '\\text{Max} = 1, \\quad \\text{Min} = -1 \\Rightarrow \\text{Amplitude} = 1',
                    explanation: 'The curve oscillates between \\( \\pm 1 \\); amplitude is half this range.'
                },
                {
                    stepNumber: 3,
                    description: 'Set \\( \\cos x = 0 \\) and write the general solution.',
                    workingLatex: '\\cos x = 0 \\Rightarrow x = 90^\\circ + 180^\\circ n',
                    explanation: 'Cosine is zero whenever the unit-circle point lies on the \\( y \\)-axis, i.e., at \\( 90^\\circ \\) plus half-turns.'
                },
                {
                    stepNumber: 4,
                    description: 'Pick the values inside \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: 'x = 90^\\circ \\text{ and } x = 270^\\circ',
                    explanation: 'Setting \\( n = 0 \\) and \\( n = 1 \\) gives the two crossings; \\( n = -1 \\) and \\( n = 2 \\) fall outside.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 1], [4.5, 0.9969], [9, 0.9877], [13.5, 0.9724], [18, 0.9511], [22.5, 0.9239], [27, 0.891], [31.5, 0.8526], [36, 0.809], [40.5, 0.7604], [45, 0.7071], [49.5, 0.6494], [54, 0.5878], [58.5, 0.5225], [63, 0.454], [67.5, 0.3827], [72, 0.309], [76.5, 0.2334], [81, 0.1564], [85.5, 0.0785], [90, 0], [94.5, -0.0785], [99, -0.1564], [103.5, -0.2334], [108, -0.309], [112.5, -0.3827], [117, -0.454], [121.5, -0.5225], [126, -0.5878], [130.5, -0.6494], [135, -0.7071], [139.5, -0.7604], [144, -0.809], [148.5, -0.8526], [153, -0.891], [157.5, -0.9239], [162, -0.9511], [166.5, -0.9724], [171, -0.9877], [175.5, -0.9969], [180, -1], [184.5, -0.9969], [189, -0.9877], [193.5, -0.9724], [198, -0.9511], [202.5, -0.9239], [207, -0.891], [211.5, -0.8526], [216, -0.809], [220.5, -0.7604], [225, -0.7071], [229.5, -0.6494], [234, -0.5878], [238.5, -0.5225], [243, -0.454], [247.5, -0.3827], [252, -0.309], [256.5, -0.2334], [261, -0.1564], [265.5, -0.0785], [270, 0], [274.5, 0.0785], [279, 0.1564], [283.5, 0.2334], [288, 0.309], [292.5, 0.3827], [297, 0.454], [301.5, 0.5225], [306, 0.5878], [310.5, 0.6494], [315, 0.7071], [319.5, 0.7604], [324, 0.809], [328.5, 0.8526], [333, 0.891], [337.5, 0.9239], [342, 0.9511], [346.5, 0.9724], [351, 0.9877], [355.5, 0.9969], [360, 1]], color: '#16a34a', label: 'y = \\cos x', labelAt: [300, 1.25] }
                        ],
                        points: [
                            { at: [0, 1], label: '(0°, 1)', labelAnchor: 'nw' },
                            { at: [90, 0], label: '(90°, 0)', labelAnchor: 'ne' },
                            { at: [180, -1], label: '(180°, -1)', labelAnchor: 's' },
                            { at: [270, 0], label: '(270°, 0)', labelAnchor: 'nw' },
                            { at: [360, 1], label: '(360°, 1)', labelAnchor: 'ne' }
                        ]
                    }
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
                    description: 'Recall the period of the tangent function.',
                    workingLatex: '\\text{Period of } \\tan x = 180^\\circ',
                    explanation: 'Tangent repeats every \\( 180^\\circ \\) because \\( \\tan(x + 180^\\circ) = \\tan x \\). This is half the period of sine and cosine.'
                },
                {
                    stepNumber: 2,
                    description: 'Use \\( \\tan x = \\dfrac{\\sin x}{\\cos x} \\) to find the asymptotes.',
                    workingLatex: '\\tan x \\text{ undefined when } \\cos x = 0',
                    explanation: 'A vertical asymptote occurs wherever the denominator is zero, since the function value diverges there.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve \\( \\cos x = 0 \\) in \\( 0^\\circ < x < 360^\\circ \\).',
                    workingLatex: '\\cos x = 0 \\Rightarrow x = 90^\\circ \\text{ or } 270^\\circ',
                    explanation: 'These are the only two values of \\( x \\) strictly inside the interval where cosine vanishes.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -5,
                        yMax: 5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [2.07, 0.0361], [4.14, 0.0724], [6.21, 0.1088], [8.28, 0.1455], [10.35, 0.1826], [12.42, 0.2202], [14.49, 0.2584], [16.56, 0.2973], [18.63, 0.3371], [20.7, 0.3778], [22.77, 0.4197], [24.84, 0.4629], [26.91, 0.5075], [28.98, 0.5538], [31.05, 0.602], [33.12, 0.6523], [35.19, 0.7051], [37.26, 0.7606], [39.33, 0.8192], [41.4, 0.8815], [43.47, 0.9478], [45.53, 1.0188], [47.6, 1.0953], [49.67, 1.1781], [51.74, 1.2682], [53.81, 1.367], [55.88, 1.4761], [57.95, 1.5974], [60.02, 1.7337], [62.09, 1.8881], [64.16, 2.0652], [66.23, 2.2708], [68.3, 2.5132], [70.37, 2.804], [72.44, 3.1604], [74.51, 3.6087], [76.58, 4.1915], [78.65, 4.9824]], color: '#dc2626' },
                            { points: [[103.14, -4.2849], [105.16, -3.691], [107.18, -3.2341], [109.2, -2.8709], [111.23, -2.5745], [113.25, -2.3276], [115.27, -2.1181], [117.3, -1.9378], [119.32, -1.7807], [121.34, -1.6421], [123.36, -1.5187], [125.39, -1.4078], [127.41, -1.3075], [129.43, -1.216], [131.45, -1.1321], [133.48, -1.0546], [135.5, -0.9827], [137.52, -0.9156], [139.55, -0.8527], [141.57, -0.7935], [143.59, -0.7375], [145.61, -0.6844], [147.64, -0.6337], [149.66, -0.5853], [151.68, -0.5389], [153.7, -0.4941], [155.73, -0.4509], [157.75, -0.4091], [159.77, -0.3685], [161.8, -0.3289], [163.82, -0.2902], [165.84, -0.2523], [167.86, -0.215], [169.89, -0.1784], [171.91, -0.1422], [173.93, -0.1063], [175.95, -0.0707], [177.98, -0.0353], [180, 0], [182.02, 0.0353], [184.05, 0.0707], [186.07, 0.1063], [188.09, 0.1422], [190.11, 0.1784], [192.14, 0.215], [194.16, 0.2523], [196.18, 0.2902], [198.2, 0.3289], [200.23, 0.3685], [202.25, 0.4091], [204.27, 0.4509], [206.3, 0.4941], [208.32, 0.5389], [210.34, 0.5853], [212.36, 0.6337], [214.39, 0.6844], [216.41, 0.7375], [218.43, 0.7935], [220.45, 0.8527], [222.48, 0.9156], [224.5, 0.9827], [226.52, 1.0546], [228.55, 1.1321], [230.57, 1.216], [232.59, 1.3075], [234.61, 1.4078], [236.64, 1.5187], [238.66, 1.6421], [240.68, 1.7807], [242.7, 1.9378], [244.73, 2.1181], [246.75, 2.3276], [248.77, 2.5745], [250.8, 2.8709], [252.82, 3.2341], [254.84, 3.691], [256.86, 4.2849]], color: '#dc2626' },
                            { points: [[281.35, -4.9824], [283.42, -4.1915], [285.49, -3.6087], [287.56, -3.1604], [289.63, -2.804], [291.7, -2.5132], [293.77, -2.2708], [295.84, -2.0652], [297.91, -1.8881], [299.98, -1.7337], [302.05, -1.5974], [304.12, -1.4761], [306.19, -1.367], [308.26, -1.2682], [310.33, -1.1781], [312.4, -1.0953], [314.47, -1.0188], [316.53, -0.9478], [318.6, -0.8815], [320.67, -0.8192], [322.74, -0.7606], [324.81, -0.7051], [326.88, -0.6523], [328.95, -0.602], [331.02, -0.5538], [333.09, -0.5075], [335.16, -0.4629], [337.23, -0.4197], [339.3, -0.3778], [341.37, -0.3371], [343.44, -0.2973], [345.51, -0.2584], [347.58, -0.2202], [349.65, -0.1826], [351.72, -0.1455], [353.79, -0.1088], [355.86, -0.0724], [357.93, -0.0361], [360, 0]], color: '#dc2626' }
                        ],
                        lines: [
                            { from: [90, -5], to: [90, 5], color: '#94a3b8', dashed: true, label: 'x = 90°', labelAt: [95, 4.3] },
                            { from: [270, -5], to: [270, 5], color: '#94a3b8', dashed: true, label: 'x = 270°', labelAt: [275, 4.3] }
                        ]
                    }
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
                    description: 'Set \\( x = 0 \\) to find the \\( y \\)-intercept.',
                    workingLatex: '\\cos 0^\\circ = 1',
                    explanation: 'The unit-circle point at angle \\( 0 \\) is \\( (1, 0) \\), and cosine reads off the \\( x \\)-coordinate.'
                },
                {
                    stepNumber: 2,
                    description: 'Write the intercept as a coordinate pair.',
                    workingLatex: '\\text{y-intercept: } (0^\\circ,\\ 1)',
                    explanation: 'Cosine starts at its peak.'
                },
                {
                    stepNumber: 3,
                    description: 'Identify the value of \\( x \\) for the minimum.',
                    workingLatex: '\\cos x = -1 \\Rightarrow x = 180^\\circ',
                    explanation: 'The minimum of cosine occurs when the unit-circle point reaches \\( (-1, 0) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'State the minimum point.',
                    workingLatex: '\\text{Min at } (180^\\circ,\\ -1)',
                    explanation: 'Pair the input with the output.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 1], [4.5, 0.9969], [9, 0.9877], [13.5, 0.9724], [18, 0.9511], [22.5, 0.9239], [27, 0.891], [31.5, 0.8526], [36, 0.809], [40.5, 0.7604], [45, 0.7071], [49.5, 0.6494], [54, 0.5878], [58.5, 0.5225], [63, 0.454], [67.5, 0.3827], [72, 0.309], [76.5, 0.2334], [81, 0.1564], [85.5, 0.0785], [90, 0], [94.5, -0.0785], [99, -0.1564], [103.5, -0.2334], [108, -0.309], [112.5, -0.3827], [117, -0.454], [121.5, -0.5225], [126, -0.5878], [130.5, -0.6494], [135, -0.7071], [139.5, -0.7604], [144, -0.809], [148.5, -0.8526], [153, -0.891], [157.5, -0.9239], [162, -0.9511], [166.5, -0.9724], [171, -0.9877], [175.5, -0.9969], [180, -1], [184.5, -0.9969], [189, -0.9877], [193.5, -0.9724], [198, -0.9511], [202.5, -0.9239], [207, -0.891], [211.5, -0.8526], [216, -0.809], [220.5, -0.7604], [225, -0.7071], [229.5, -0.6494], [234, -0.5878], [238.5, -0.5225], [243, -0.454], [247.5, -0.3827], [252, -0.309], [256.5, -0.2334], [261, -0.1564], [265.5, -0.0785], [270, 0], [274.5, 0.0785], [279, 0.1564], [283.5, 0.2334], [288, 0.309], [292.5, 0.3827], [297, 0.454], [301.5, 0.5225], [306, 0.5878], [310.5, 0.6494], [315, 0.7071], [319.5, 0.7604], [324, 0.809], [328.5, 0.8526], [333, 0.891], [337.5, 0.9239], [342, 0.9511], [346.5, 0.9724], [351, 0.9877], [355.5, 0.9969], [360, 1]], color: '#16a34a', label: 'y = \\cos x', labelAt: [300, 1.25] }
                        ],
                        points: [
                            { at: [0, 1], label: '(0°, 1) y-int', labelAnchor: 'ne' },
                            { at: [180, -1], label: '(180°, -1) min', labelAnchor: 's' }
                        ]
                    }
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
                    description: 'Set the function to zero.',
                    workingLatex: '\\sin x = 0',
                    explanation: 'Graph–axis crossings are exactly the zeros of \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write the general solution.',
                    workingLatex: 'x = 180^\\circ n, \\quad n \\in \\mathbb{Z}',
                    explanation: 'Sine vanishes at every integer multiple of \\( 180^\\circ \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Restrict \\( n \\) so \\( 180^\\circ n \\in [-360^\\circ, 360^\\circ] \\).',
                    workingLatex: 'n \\in \\{-2, -1, 0, 1, 2\\}',
                    explanation: 'These five integers give values of \\( x \\) within the closed interval.'
                },
                {
                    stepNumber: 4,
                    description: 'List the \\( x \\)-intercepts.',
                    workingLatex: 'x = -360^\\circ,\\ -180^\\circ,\\ 0^\\circ,\\ 180^\\circ,\\ 360^\\circ',
                    explanation: 'Five crossings, symmetric about the origin.',
                    diagram: {
                        xMin: -360,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [-360, -270, -180, -90, 0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[-360, 0], [-355, 0.0872], [-350, 0.1736], [-345, 0.2588], [-340, 0.342], [-335, 0.4226], [-330, 0.5], [-325, 0.5736], [-320, 0.6428], [-315, 0.7071], [-310, 0.766], [-305, 0.8192], [-300, 0.866], [-295, 0.9063], [-290, 0.9397], [-285, 0.9659], [-280, 0.9848], [-275, 0.9962], [-270, 1], [-265, 0.9962], [-260, 0.9848], [-255, 0.9659], [-250, 0.9397], [-245, 0.9063], [-240, 0.866], [-235, 0.8192], [-230, 0.766], [-225, 0.7071], [-220, 0.6428], [-215, 0.5736], [-210, 0.5], [-205, 0.4226], [-200, 0.342], [-195, 0.2588], [-190, 0.1736], [-185, 0.0872], [-180, 0], [-175, -0.0872], [-170, -0.1736], [-165, -0.2588], [-160, -0.342], [-155, -0.4226], [-150, -0.5], [-145, -0.5736], [-140, -0.6428], [-135, -0.7071], [-130, -0.766], [-125, -0.8192], [-120, -0.866], [-115, -0.9063], [-110, -0.9397], [-105, -0.9659], [-100, -0.9848], [-95, -0.9962], [-90, -1], [-85, -0.9962], [-80, -0.9848], [-75, -0.9659], [-70, -0.9397], [-65, -0.9063], [-60, -0.866], [-55, -0.8192], [-50, -0.766], [-45, -0.7071], [-40, -0.6428], [-35, -0.5736], [-30, -0.5], [-25, -0.4226], [-20, -0.342], [-15, -0.2588], [-10, -0.1736], [-5, -0.0872], [0, 0], [5, 0.0872], [10, 0.1736], [15, 0.2588], [20, 0.342], [25, 0.4226], [30, 0.5], [35, 0.5736], [40, 0.6428], [45, 0.7071], [50, 0.766], [55, 0.8192], [60, 0.866], [65, 0.9063], [70, 0.9397], [75, 0.9659], [80, 0.9848], [85, 0.9962], [90, 1], [95, 0.9962], [100, 0.9848], [105, 0.9659], [110, 0.9397], [115, 0.9063], [120, 0.866], [125, 0.8192], [130, 0.766], [135, 0.7071], [140, 0.6428], [145, 0.5736], [150, 0.5], [155, 0.4226], [160, 0.342], [165, 0.2588], [170, 0.1736], [175, 0.0872], [180, 0], [185, -0.0872], [190, -0.1736], [195, -0.2588], [200, -0.342], [205, -0.4226], [210, -0.5], [215, -0.5736], [220, -0.6428], [225, -0.7071], [230, -0.766], [235, -0.8192], [240, -0.866], [245, -0.9063], [250, -0.9397], [255, -0.9659], [260, -0.9848], [265, -0.9962], [270, -1], [275, -0.9962], [280, -0.9848], [285, -0.9659], [290, -0.9397], [295, -0.9063], [300, -0.866], [305, -0.8192], [310, -0.766], [315, -0.7071], [320, -0.6428], [325, -0.5736], [330, -0.5], [335, -0.4226], [340, -0.342], [345, -0.2588], [350, -0.1736], [355, -0.0872], [360, 0]], color: '#2563eb', label: 'y = \\sin x', labelAt: [240, 1.25] }
                        ],
                        points: [
                            { at: [-360, 0], label: '-360°', labelAnchor: 'sw' },
                            { at: [-180, 0], label: '-180°', labelAnchor: 'sw' },
                            { at: [0, 0], label: '0°', labelAnchor: 'sw' },
                            { at: [180, 0], label: '180°', labelAnchor: 'sw' },
                            { at: [360, 0], label: '360°', labelAnchor: 'sw' }
                        ]
                    }
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
                    description: 'Identify the change applied to the output.',
                    workingLatex: '\\sin x \\longrightarrow \\sin x + 2',
                    explanation: 'A constant has been added on the outside of the function; changes outside affect \\( y \\), not \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Name the transformation.',
                    workingLatex: '\\text{Translation by } \\begin{pmatrix} 0 \\\\ 2 \\end{pmatrix}',
                    explanation: 'Adding 2 outside shifts every point upward by 2 units; the shape is unchanged.'
                },
                {
                    stepNumber: 3,
                    description: 'Shift the maximum.',
                    workingLatex: '\\text{Max} = 1 + 2 = 3',
                    explanation: 'The original peak \\( y = 1 \\) becomes \\( 1 + 2 = 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Shift the minimum.',
                    workingLatex: '\\text{Min} = -1 + 2 = 1',
                    explanation: 'Same shift applied to the trough.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 3.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1, 2, 3],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [4.5, 0.0785], [9, 0.1564], [13.5, 0.2334], [18, 0.309], [22.5, 0.3827], [27, 0.454], [31.5, 0.5225], [36, 0.5878], [40.5, 0.6494], [45, 0.7071], [49.5, 0.7604], [54, 0.809], [58.5, 0.8526], [63, 0.891], [67.5, 0.9239], [72, 0.9511], [76.5, 0.9724], [81, 0.9877], [85.5, 0.9969], [90, 1], [94.5, 0.9969], [99, 0.9877], [103.5, 0.9724], [108, 0.9511], [112.5, 0.9239], [117, 0.891], [121.5, 0.8526], [126, 0.809], [130.5, 0.7604], [135, 0.7071], [139.5, 0.6494], [144, 0.5878], [148.5, 0.5225], [153, 0.454], [157.5, 0.3827], [162, 0.309], [166.5, 0.2334], [171, 0.1564], [175.5, 0.0785], [180, 0], [184.5, -0.0785], [189, -0.1564], [193.5, -0.2334], [198, -0.309], [202.5, -0.3827], [207, -0.454], [211.5, -0.5225], [216, -0.5878], [220.5, -0.6494], [225, -0.7071], [229.5, -0.7604], [234, -0.809], [238.5, -0.8526], [243, -0.891], [247.5, -0.9239], [252, -0.9511], [256.5, -0.9724], [261, -0.9877], [265.5, -0.9969], [270, -1], [274.5, -0.9969], [279, -0.9877], [283.5, -0.9724], [288, -0.9511], [292.5, -0.9239], [297, -0.891], [301.5, -0.8526], [306, -0.809], [310.5, -0.7604], [315, -0.7071], [319.5, -0.6494], [324, -0.5878], [328.5, -0.5225], [333, -0.454], [337.5, -0.3827], [342, -0.309], [346.5, -0.2334], [351, -0.1564], [355.5, -0.0785], [360, 0]], color: '#94a3b8', label: 'y = \\sin x', labelAt: [300, -0.8] },
                            { points: [[0, 2], [4.5, 2.0785], [9, 2.1564], [13.5, 2.2334], [18, 2.309], [22.5, 2.3827], [27, 2.454], [31.5, 2.5225], [36, 2.5878], [40.5, 2.6494], [45, 2.7071], [49.5, 2.7604], [54, 2.809], [58.5, 2.8526], [63, 2.891], [67.5, 2.9239], [72, 2.9511], [76.5, 2.9724], [81, 2.9877], [85.5, 2.9969], [90, 3], [94.5, 2.9969], [99, 2.9877], [103.5, 2.9724], [108, 2.9511], [112.5, 2.9239], [117, 2.891], [121.5, 2.8526], [126, 2.809], [130.5, 2.7604], [135, 2.7071], [139.5, 2.6494], [144, 2.5878], [148.5, 2.5225], [153, 2.454], [157.5, 2.3827], [162, 2.309], [166.5, 2.2334], [171, 2.1564], [175.5, 2.0785], [180, 2], [184.5, 1.9215], [189, 1.8436], [193.5, 1.7666], [198, 1.691], [202.5, 1.6173], [207, 1.546], [211.5, 1.4775], [216, 1.4122], [220.5, 1.3506], [225, 1.2929], [229.5, 1.2396], [234, 1.191], [238.5, 1.1474], [243, 1.109], [247.5, 1.0761], [252, 1.0489], [256.5, 1.0276], [261, 1.0123], [265.5, 1.0031], [270, 1], [274.5, 1.0031], [279, 1.0123], [283.5, 1.0276], [288, 1.0489], [292.5, 1.0761], [297, 1.109], [301.5, 1.1474], [306, 1.191], [310.5, 1.2396], [315, 1.2929], [319.5, 1.3506], [324, 1.4122], [328.5, 1.4775], [333, 1.546], [337.5, 1.6173], [342, 1.691], [346.5, 1.7666], [351, 1.8436], [355.5, 1.9215], [360, 2]], color: '#2563eb', label: 'y = \\sin x + 2', labelAt: [250, 3.2] }
                        ],
                        points: [
                            { at: [90, 3], label: 'max (90°, 3)', labelAnchor: 'n' },
                            { at: [270, 1], label: 'min (270°, 1)', labelAnchor: 's' }
                        ]
                    }
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
                    description: 'Read off the change outside the function.',
                    workingLatex: '\\cos x \\longrightarrow \\cos x - 4',
                    explanation: 'Subtracting 4 from the output shifts every \\( y \\)-value downward by 4.'
                },
                {
                    stepNumber: 2,
                    description: 'State the translation.',
                    workingLatex: '\\text{Translation by } \\begin{pmatrix} 0 \\\\ -4 \\end{pmatrix}',
                    explanation: 'Downward shifts are negative in the second slot of the vector.'
                },
                {
                    stepNumber: 3,
                    description: 'Compute the new maximum.',
                    workingLatex: '\\text{Max} = 1 - 4 = -3',
                    explanation: 'Cosine peaks at \\( 1 \\); subtract 4.'
                },
                {
                    stepNumber: 4,
                    description: 'Compute the new minimum.',
                    workingLatex: '\\text{Min} = -1 - 4 = -5',
                    explanation: 'Cosine troughs at \\( -1 \\); subtract 4.'
                },
                {
                    stepNumber: 5,
                    description: 'Combine into a range statement.',
                    workingLatex: '-5 \\leq y \\leq -3',
                    explanation: 'The curve now sits entirely below the \\( x \\)-axis.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -5.5,
                        yMax: 0,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-5, -4, -3],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, -3], [4.5, -3.0031], [9, -3.0123], [13.5, -3.0276], [18, -3.0489], [22.5, -3.0761], [27, -3.109], [31.5, -3.1474], [36, -3.191], [40.5, -3.2396], [45, -3.2929], [49.5, -3.3506], [54, -3.4122], [58.5, -3.4775], [63, -3.546], [67.5, -3.6173], [72, -3.691], [76.5, -3.7666], [81, -3.8436], [85.5, -3.9215], [90, -4], [94.5, -4.0785], [99, -4.1564], [103.5, -4.2334], [108, -4.309], [112.5, -4.3827], [117, -4.454], [121.5, -4.5225], [126, -4.5878], [130.5, -4.6494], [135, -4.7071], [139.5, -4.7604], [144, -4.809], [148.5, -4.8526], [153, -4.891], [157.5, -4.9239], [162, -4.9511], [166.5, -4.9724], [171, -4.9877], [175.5, -4.9969], [180, -5], [184.5, -4.9969], [189, -4.9877], [193.5, -4.9724], [198, -4.9511], [202.5, -4.9239], [207, -4.891], [211.5, -4.8526], [216, -4.809], [220.5, -4.7604], [225, -4.7071], [229.5, -4.6494], [234, -4.5878], [238.5, -4.5225], [243, -4.454], [247.5, -4.3827], [252, -4.309], [256.5, -4.2334], [261, -4.1564], [265.5, -4.0785], [270, -4], [274.5, -3.9215], [279, -3.8436], [283.5, -3.7666], [288, -3.691], [292.5, -3.6173], [297, -3.546], [301.5, -3.4775], [306, -3.4122], [310.5, -3.3506], [315, -3.2929], [319.5, -3.2396], [324, -3.191], [328.5, -3.1474], [333, -3.109], [337.5, -3.0761], [342, -3.0489], [346.5, -3.0276], [351, -3.0123], [355.5, -3.0031], [360, -3]], color: '#16a34a', label: 'y = \\cos x - 4', labelAt: [250, -2.7] }
                        ],
                        points: [
                            { at: [0, -3], label: 'max (0°, -3)', labelAnchor: 'n' },
                            { at: [180, -5], label: 'min (180°, -5)', labelAnchor: 's' },
                            { at: [360, -3], label: '(360°, -3)', labelAnchor: 'n' }
                        ]
                    }
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
                    description: 'Sketch the parent \\( y = \\cos x \\) over the interval.',
                    workingLatex: 'y\\text{-intercept: } (0^\\circ,\\ 1)',
                    explanation: 'Cosine starts at \\( 1 \\), reaches \\( -1 \\) at \\( \\pm 180^\\circ \\), and returns to \\( 1 \\) at \\( \\pm 360^\\circ \\). The curve is symmetric about the \\( y \\)-axis.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the vertical shift \\( +3 \\).',
                    workingLatex: '\\cos x \\longrightarrow \\cos x + 3',
                    explanation: 'Every point on the parent moves up 3 units; the wave shape is unchanged.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the new \\( y \\)-intercept.',
                    workingLatex: '\\cos 0^\\circ + 3 = 1 + 3 = 4',
                    explanation: 'Substitute \\( x = 0 \\) into the shifted function.'
                },
                {
                    stepNumber: 4,
                    description: 'Compute the new range.',
                    workingLatex: '2 \\leq y \\leq 4',
                    explanation: 'Apply the \\( +3 \\) shift to both extremes: \\( -1 + 3 = 2 \\) and \\( 1 + 3 = 4 \\).',
                    diagram: {
                        xMin: -360,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 4.5,
                        xTicks: [-360, -270, -180, -90, 0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1, 2, 3, 4],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[-360, 1], [-354, 0.9945], [-348, 0.9781], [-342, 0.9511], [-336, 0.9135], [-330, 0.866], [-324, 0.809], [-318, 0.7431], [-312, 0.6691], [-306, 0.5878], [-300, 0.5], [-294, 0.4067], [-288, 0.309], [-282, 0.2079], [-276, 0.1045], [-270, 0], [-264, -0.1045], [-258, -0.2079], [-252, -0.309], [-246, -0.4067], [-240, -0.5], [-234, -0.5878], [-228, -0.6691], [-222, -0.7431], [-216, -0.809], [-210, -0.866], [-204, -0.9135], [-198, -0.9511], [-192, -0.9781], [-186, -0.9945], [-180, -1], [-174, -0.9945], [-168, -0.9781], [-162, -0.9511], [-156, -0.9135], [-150, -0.866], [-144, -0.809], [-138, -0.7431], [-132, -0.6691], [-126, -0.5878], [-120, -0.5], [-114, -0.4067], [-108, -0.309], [-102, -0.2079], [-96, -0.1045], [-90, 0], [-84, 0.1045], [-78, 0.2079], [-72, 0.309], [-66, 0.4067], [-60, 0.5], [-54, 0.5878], [-48, 0.6691], [-42, 0.7431], [-36, 0.809], [-30, 0.866], [-24, 0.9135], [-18, 0.9511], [-12, 0.9781], [-6, 0.9945], [0, 1], [6, 0.9945], [12, 0.9781], [18, 0.9511], [24, 0.9135], [30, 0.866], [36, 0.809], [42, 0.7431], [48, 0.6691], [54, 0.5878], [60, 0.5], [66, 0.4067], [72, 0.309], [78, 0.2079], [84, 0.1045], [90, 0], [96, -0.1045], [102, -0.2079], [108, -0.309], [114, -0.4067], [120, -0.5], [126, -0.5878], [132, -0.6691], [138, -0.7431], [144, -0.809], [150, -0.866], [156, -0.9135], [162, -0.9511], [168, -0.9781], [174, -0.9945], [180, -1], [186, -0.9945], [192, -0.9781], [198, -0.9511], [204, -0.9135], [210, -0.866], [216, -0.809], [222, -0.7431], [228, -0.6691], [234, -0.5878], [240, -0.5], [246, -0.4067], [252, -0.309], [258, -0.2079], [264, -0.1045], [270, 0], [276, 0.1045], [282, 0.2079], [288, 0.309], [294, 0.4067], [300, 0.5], [306, 0.5878], [312, 0.6691], [318, 0.7431], [324, 0.809], [330, 0.866], [336, 0.9135], [342, 0.9511], [348, 0.9781], [354, 0.9945], [360, 1]], color: '#94a3b8', label: 'y = \\cos x', labelAt: [300, -0.8] },
                            { points: [[-360, 4], [-354, 3.9945], [-348, 3.9781], [-342, 3.9511], [-336, 3.9135], [-330, 3.866], [-324, 3.809], [-318, 3.7431], [-312, 3.6691], [-306, 3.5878], [-300, 3.5], [-294, 3.4067], [-288, 3.309], [-282, 3.2079], [-276, 3.1045], [-270, 3], [-264, 2.8955], [-258, 2.7921], [-252, 2.691], [-246, 2.5933], [-240, 2.5], [-234, 2.4122], [-228, 2.3309], [-222, 2.2569], [-216, 2.191], [-210, 2.134], [-204, 2.0865], [-198, 2.0489], [-192, 2.0219], [-186, 2.0055], [-180, 2], [-174, 2.0055], [-168, 2.0219], [-162, 2.0489], [-156, 2.0865], [-150, 2.134], [-144, 2.191], [-138, 2.2569], [-132, 2.3309], [-126, 2.4122], [-120, 2.5], [-114, 2.5933], [-108, 2.691], [-102, 2.7921], [-96, 2.8955], [-90, 3], [-84, 3.1045], [-78, 3.2079], [-72, 3.309], [-66, 3.4067], [-60, 3.5], [-54, 3.5878], [-48, 3.6691], [-42, 3.7431], [-36, 3.809], [-30, 3.866], [-24, 3.9135], [-18, 3.9511], [-12, 3.9781], [-6, 3.9945], [0, 4], [6, 3.9945], [12, 3.9781], [18, 3.9511], [24, 3.9135], [30, 3.866], [36, 3.809], [42, 3.7431], [48, 3.6691], [54, 3.5878], [60, 3.5], [66, 3.4067], [72, 3.309], [78, 3.2079], [84, 3.1045], [90, 3], [96, 2.8955], [102, 2.7921], [108, 2.691], [114, 2.5933], [120, 2.5], [126, 2.4122], [132, 2.3309], [138, 2.2569], [144, 2.191], [150, 2.134], [156, 2.0865], [162, 2.0489], [168, 2.0219], [174, 2.0055], [180, 2], [186, 2.0055], [192, 2.0219], [198, 2.0489], [204, 2.0865], [210, 2.134], [216, 2.191], [222, 2.2569], [228, 2.3309], [234, 2.4122], [240, 2.5], [246, 2.5933], [252, 2.691], [258, 2.7921], [264, 2.8955], [270, 3], [276, 3.1045], [282, 3.2079], [288, 3.309], [294, 3.4067], [300, 3.5], [306, 3.5878], [312, 3.6691], [318, 3.7431], [324, 3.809], [330, 3.866], [336, 3.9135], [342, 3.9511], [348, 3.9781], [354, 3.9945], [360, 4]], color: '#16a34a', label: 'y = \\cos x + 3', labelAt: [240, 4.2] }
                        ],
                        points: [
                            { at: [0, 1], label: '(0°, 1)', labelAnchor: 'sw' },
                            { at: [0, 4], label: '(0°, 4)', labelAnchor: 'ne' }
                        ]
                    }
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
                    description: 'Identify the inside change.',
                    workingLatex: '\\sin x \\longrightarrow \\sin(x - 30^\\circ)',
                    explanation: '\\( x \\) is replaced by \\( x - 30^\\circ \\); changes inside the function affect the input.'
                },
                {
                    stepNumber: 2,
                    description: 'Name the translation.',
                    workingLatex: '\\text{Translation by } \\begin{pmatrix} 30 \\\\ 0 \\end{pmatrix}',
                    explanation: 'Replacing \\( x \\) with \\( x - 30 \\) shifts the graph \\( 30^\\circ \\) to the right. The sign inside is opposite to the direction of motion — a frequent slip.'
                },
                {
                    stepNumber: 3,
                    description: 'Set the function to zero and solve for the argument.',
                    workingLatex: '\\sin(x - 30^\\circ) = 0 \\Rightarrow x - 30^\\circ = 0^\\circ,\\ 180^\\circ,\\ 360^\\circ',
                    explanation: 'Use the zeros of sine, listed at multiples of \\( 180^\\circ \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Add \\( 30^\\circ \\) to each.',
                    workingLatex: 'x = 30^\\circ,\\ 210^\\circ,\\ 390^\\circ',
                    explanation: 'Solve for \\( x \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Discard solutions outside the interval.',
                    workingLatex: 'x = 30^\\circ \\text{ and } x = 210^\\circ',
                    explanation: '\\( 390^\\circ > 360^\\circ \\), so it is rejected.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, -0.5], [4.5, -0.4305], [9, -0.3584], [13.5, -0.284], [18, -0.2079], [22.5, -0.1305], [27, -0.0523], [31.5, 0.0262], [36, 0.1045], [40.5, 0.1822], [45, 0.2588], [49.5, 0.3338], [54, 0.4067], [58.5, 0.4772], [63, 0.5446], [67.5, 0.6088], [72, 0.6691], [76.5, 0.7254], [81, 0.7771], [85.5, 0.8241], [90, 0.866], [94.5, 0.9026], [99, 0.9336], [103.5, 0.9588], [108, 0.9781], [112.5, 0.9914], [117, 0.9986], [121.5, 0.9997], [126, 0.9945], [130.5, 0.9833], [135, 0.9659], [139.5, 0.9426], [144, 0.9135], [148.5, 0.8788], [153, 0.8387], [157.5, 0.7934], [162, 0.7431], [166.5, 0.6884], [171, 0.6293], [175.5, 0.5664], [180, 0.5], [184.5, 0.4305], [189, 0.3584], [193.5, 0.284], [198, 0.2079], [202.5, 0.1305], [207, 0.0523], [211.5, -0.0262], [216, -0.1045], [220.5, -0.1822], [225, -0.2588], [229.5, -0.3338], [234, -0.4067], [238.5, -0.4772], [243, -0.5446], [247.5, -0.6088], [252, -0.6691], [256.5, -0.7254], [261, -0.7771], [265.5, -0.8241], [270, -0.866], [274.5, -0.9026], [279, -0.9336], [283.5, -0.9588], [288, -0.9781], [292.5, -0.9914], [297, -0.9986], [301.5, -0.9997], [306, -0.9945], [310.5, -0.9833], [315, -0.9659], [319.5, -0.9426], [324, -0.9135], [328.5, -0.8788], [333, -0.8387], [337.5, -0.7934], [342, -0.7431], [346.5, -0.6884], [351, -0.6293], [355.5, -0.5664], [360, -0.5]], color: '#2563eb', label: 'y = \\sin(x - 30°)', labelAt: [240, 1.25] }
                        ],
                        points: [
                            { at: [30, 0], label: '(30°, 0)', labelAnchor: 'sw' },
                            { at: [210, 0], label: '(210°, 0)', labelAnchor: 'sw' },
                            { at: [120, 1], label: 'max (120°, 1)', labelAnchor: 'n' },
                            { at: [300, -1], label: 'min (300°, -1)', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Translation \\( 30^\\circ \\) to the right. \\( x \\)-intercepts at \\( x = 30^\\circ \\) and \\( x = 210^\\circ \\).'
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
                    description: 'Identify the inside change.',
                    workingLatex: '\\cos x \\longrightarrow \\cos(x + 90^\\circ)',
                    explanation: 'A change inside the function moves the input, hence the graph horizontally.'
                },
                {
                    stepNumber: 2,
                    description: 'State the translation.',
                    workingLatex: '\\text{Translation by } \\begin{pmatrix} -90 \\\\ 0 \\end{pmatrix}',
                    explanation: 'Replacing \\( x \\) with \\( x + 90 \\) shifts the graph \\( 90^\\circ \\) to the left.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( x = 0 \\) to find the \\( y \\)-intercept.',
                    workingLatex: 'y = \\cos(0^\\circ + 90^\\circ) = \\cos 90^\\circ',
                    explanation: 'The \\( y \\)-intercept is just the output at \\( x = 0 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate \\( \\cos 90^\\circ \\).',
                    workingLatex: '\\cos 90^\\circ = 0',
                    explanation: 'Cosine is zero at \\( 90^\\circ \\); the curve passes through the origin.',
                    diagram: {
                        xMin: -180,
                        xMax: 180,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [-180, -90, 0, 90, 180],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[-180, 0], [-175.5, 0.0785], [-171, 0.1564], [-166.5, 0.2334], [-162, 0.309], [-157.5, 0.3827], [-153, 0.454], [-148.5, 0.5225], [-144, 0.5878], [-139.5, 0.6494], [-135, 0.7071], [-130.5, 0.7604], [-126, 0.809], [-121.5, 0.8526], [-117, 0.891], [-112.5, 0.9239], [-108, 0.9511], [-103.5, 0.9724], [-99, 0.9877], [-94.5, 0.9969], [-90, 1], [-85.5, 0.9969], [-81, 0.9877], [-76.5, 0.9724], [-72, 0.9511], [-67.5, 0.9239], [-63, 0.891], [-58.5, 0.8526], [-54, 0.809], [-49.5, 0.7604], [-45, 0.7071], [-40.5, 0.6494], [-36, 0.5878], [-31.5, 0.5225], [-27, 0.454], [-22.5, 0.3827], [-18, 0.309], [-13.5, 0.2334], [-9, 0.1564], [-4.5, 0.0785], [0, 0], [4.5, -0.0785], [9, -0.1564], [13.5, -0.2334], [18, -0.309], [22.5, -0.3827], [27, -0.454], [31.5, -0.5225], [36, -0.5878], [40.5, -0.6494], [45, -0.7071], [49.5, -0.7604], [54, -0.809], [58.5, -0.8526], [63, -0.891], [67.5, -0.9239], [72, -0.9511], [76.5, -0.9724], [81, -0.9877], [85.5, -0.9969], [90, -1], [94.5, -0.9969], [99, -0.9877], [103.5, -0.9724], [108, -0.9511], [112.5, -0.9239], [117, -0.891], [121.5, -0.8526], [126, -0.809], [130.5, -0.7604], [135, -0.7071], [139.5, -0.6494], [144, -0.5878], [148.5, -0.5225], [153, -0.454], [157.5, -0.3827], [162, -0.309], [166.5, -0.2334], [171, -0.1564], [175.5, -0.0785], [180, 0]], color: '#16a34a', label: 'y = \\cos(x + 90°)', labelAt: [100, 1.25] }
                        ],
                        points: [
                            { at: [0, 0], label: '(0°, 0)', labelAnchor: 'sw' },
                            { at: [-90, 1], label: '(-90°, 1)', labelAnchor: 'n' },
                            { at: [90, -1], label: '(90°, -1)', labelAnchor: 's' }
                        ]
                    }
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
                    description: 'Sketch the parent \\( y = \\sin x \\).',
                    workingLatex: '(0^\\circ, 0), \\quad \\text{max } (90^\\circ, 1), \\quad \\text{min } (-90^\\circ, -1)',
                    explanation: 'Standard sine wave through the origin, period \\( 360^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the inside change.',
                    workingLatex: '\\sin x \\longrightarrow \\sin(x + 60^\\circ)',
                    explanation: 'Replacing \\( x \\) with \\( x + 60 \\) shifts the graph \\( 60^\\circ \\) to the left.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( y \\)-intercept of the parent.',
                    workingLatex: '\\sin 0^\\circ = 0',
                    explanation: 'Sine of zero is zero.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the \\( y \\)-intercept of the shifted graph.',
                    workingLatex: '\\sin 60^\\circ = \\tfrac{\\sqrt{3}}{2} \\approx 0.866',
                    explanation: 'Substitute \\( x = 0 \\) and use the standard exact value.'
                },
                {
                    stepNumber: 5,
                    description: 'State both intercepts.',
                    workingLatex: '(0^\\circ,\\ 0) \\text{ and } (0^\\circ,\\ \\tfrac{\\sqrt{3}}{2})',
                    explanation: 'The shifted curve crosses the \\( y \\)-axis higher than the parent because it is already in its rising portion at \\( x = 0 \\).',
                    diagram: {
                        xMin: -180,
                        xMax: 180,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [-180, -90, 0, 90, 180],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[-180, 0], [-175.5, -0.0785], [-171, -0.1564], [-166.5, -0.2334], [-162, -0.309], [-157.5, -0.3827], [-153, -0.454], [-148.5, -0.5225], [-144, -0.5878], [-139.5, -0.6494], [-135, -0.7071], [-130.5, -0.7604], [-126, -0.809], [-121.5, -0.8526], [-117, -0.891], [-112.5, -0.9239], [-108, -0.9511], [-103.5, -0.9724], [-99, -0.9877], [-94.5, -0.9969], [-90, -1], [-85.5, -0.9969], [-81, -0.9877], [-76.5, -0.9724], [-72, -0.9511], [-67.5, -0.9239], [-63, -0.891], [-58.5, -0.8526], [-54, -0.809], [-49.5, -0.7604], [-45, -0.7071], [-40.5, -0.6494], [-36, -0.5878], [-31.5, -0.5225], [-27, -0.454], [-22.5, -0.3827], [-18, -0.309], [-13.5, -0.2334], [-9, -0.1564], [-4.5, -0.0785], [0, 0], [4.5, 0.0785], [9, 0.1564], [13.5, 0.2334], [18, 0.309], [22.5, 0.3827], [27, 0.454], [31.5, 0.5225], [36, 0.5878], [40.5, 0.6494], [45, 0.7071], [49.5, 0.7604], [54, 0.809], [58.5, 0.8526], [63, 0.891], [67.5, 0.9239], [72, 0.9511], [76.5, 0.9724], [81, 0.9877], [85.5, 0.9969], [90, 1], [94.5, 0.9969], [99, 0.9877], [103.5, 0.9724], [108, 0.9511], [112.5, 0.9239], [117, 0.891], [121.5, 0.8526], [126, 0.809], [130.5, 0.7604], [135, 0.7071], [139.5, 0.6494], [144, 0.5878], [148.5, 0.5225], [153, 0.454], [157.5, 0.3827], [162, 0.309], [166.5, 0.2334], [171, 0.1564], [175.5, 0.0785], [180, 0]], color: '#94a3b8', label: 'y = \\sin x', labelAt: [130, -0.7] },
                            { points: [[-180, -0.866], [-175.5, -0.9026], [-171, -0.9336], [-166.5, -0.9588], [-162, -0.9781], [-157.5, -0.9914], [-153, -0.9986], [-148.5, -0.9997], [-144, -0.9945], [-139.5, -0.9833], [-135, -0.9659], [-130.5, -0.9426], [-126, -0.9135], [-121.5, -0.8788], [-117, -0.8387], [-112.5, -0.7934], [-108, -0.7431], [-103.5, -0.6884], [-99, -0.6293], [-94.5, -0.5664], [-90, -0.5], [-85.5, -0.4305], [-81, -0.3584], [-76.5, -0.284], [-72, -0.2079], [-67.5, -0.1305], [-63, -0.0523], [-58.5, 0.0262], [-54, 0.1045], [-49.5, 0.1822], [-45, 0.2588], [-40.5, 0.3338], [-36, 0.4067], [-31.5, 0.4772], [-27, 0.5446], [-22.5, 0.6088], [-18, 0.6691], [-13.5, 0.7254], [-9, 0.7771], [-4.5, 0.8241], [0, 0.866], [4.5, 0.9026], [9, 0.9336], [13.5, 0.9588], [18, 0.9781], [22.5, 0.9914], [27, 0.9986], [31.5, 0.9997], [36, 0.9945], [40.5, 0.9833], [45, 0.9659], [49.5, 0.9426], [54, 0.9135], [58.5, 0.8788], [63, 0.8387], [67.5, 0.7934], [72, 0.7431], [76.5, 0.6884], [81, 0.6293], [85.5, 0.5664], [90, 0.5], [94.5, 0.4305], [99, 0.3584], [103.5, 0.284], [108, 0.2079], [112.5, 0.1305], [117, 0.0523], [121.5, -0.0262], [126, -0.1045], [130.5, -0.1822], [135, -0.2588], [139.5, -0.3338], [144, -0.4067], [148.5, -0.4772], [153, -0.5446], [157.5, -0.6088], [162, -0.6691], [166.5, -0.7254], [171, -0.7771], [175.5, -0.8241], [180, -0.866]], color: '#2563eb', label: 'y = \\sin(x + 60°)', labelAt: [105, 1.25] }
                        ],
                        points: [
                            { at: [0, 0], label: '(0°, 0)', labelAnchor: 'sw' },
                            { at: [0, 0.866], label: '(0°, √3/2)', labelAnchor: 'ne' }
                        ]
                    }
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
                    description: 'Express a rightward translation algebraically.',
                    workingLatex: 'y = \\tan(x - 45^\\circ)',
                    explanation: 'A shift right by \\( c \\) replaces \\( x \\) with \\( x - c \\); the sign inside is reversed.'
                },
                {
                    stepNumber: 2,
                    description: 'Recall the asymptotes of \\( \\tan x \\) in this interval.',
                    workingLatex: 'x = 90^\\circ \\text{ and } x = 270^\\circ',
                    explanation: 'Tangent has asymptotes where cosine is zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Shift each asymptote right by \\( 45^\\circ \\).',
                    workingLatex: '90^\\circ + 45^\\circ = 135^\\circ, \\quad 270^\\circ + 45^\\circ = 315^\\circ',
                    explanation: 'Vertical asymptotes are features of the graph, so they translate with it.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -5,
                        yMax: 5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, -1], [2.03, -0.9315], [4.06, -0.8674], [6.09, -0.8072], [8.12, -0.7502], [10.15, -0.6963], [12.18, -0.6449], [14.21, -0.5958], [16.24, -0.5488], [18.27, -0.5035], [20.3, -0.4599], [22.33, -0.4176], [24.36, -0.3766], [26.39, -0.3367], [28.42, -0.2977], [30.45, -0.2595], [32.48, -0.222], [34.52, -0.1851], [36.55, -0.1486], [38.58, -0.1126], [40.61, -0.0768], [42.64, -0.0413], [44.67, -0.0058], [46.7, 0.0296], [48.73, 0.0651], [50.76, 0.1008], [52.79, 0.1368], [54.82, 0.1731], [56.85, 0.2098], [58.88, 0.2471], [60.91, 0.285], [62.94, 0.3238], [64.97, 0.3634], [67, 0.404], [69.03, 0.4459], [71.06, 0.489], [73.09, 0.5337], [75.12, 0.5802], [77.15, 0.6286], [79.18, 0.6791], [81.21, 0.7322], [83.24, 0.7881], [85.27, 0.8472], [87.3, 0.91], [89.33, 0.977], [91.36, 1.0488], [93.39, 1.1261], [95.42, 1.2098], [97.45, 1.3011], [99.48, 1.4012], [101.52, 1.5117], [103.55, 1.6348], [105.58, 1.773], [107.61, 1.9297], [109.64, 2.1094], [111.67, 2.3183], [113.7, 2.5645], [115.73, 2.8599], [117.76, 3.222], [119.79, 3.6775], [121.82, 4.2696]], color: '#dc2626' },
                            { points: [[148.14, -4.2849], [150.16, -3.691], [152.18, -3.2341], [154.2, -2.8709], [156.23, -2.5745], [158.25, -2.3276], [160.27, -2.1181], [162.3, -1.9378], [164.32, -1.7807], [166.34, -1.6421], [168.36, -1.5187], [170.39, -1.4078], [172.41, -1.3075], [174.43, -1.216], [176.45, -1.1321], [178.48, -1.0546], [180.5, -0.9827], [182.52, -0.9156], [184.55, -0.8527], [186.57, -0.7935], [188.59, -0.7375], [190.61, -0.6844], [192.64, -0.6337], [194.66, -0.5853], [196.68, -0.5389], [198.7, -0.4941], [200.73, -0.4509], [202.75, -0.4091], [204.77, -0.3685], [206.8, -0.3289], [208.82, -0.2902], [210.84, -0.2523], [212.86, -0.215], [214.89, -0.1784], [216.91, -0.1422], [218.93, -0.1063], [220.95, -0.0707], [222.98, -0.0353], [225, 0], [227.02, 0.0353], [229.05, 0.0707], [231.07, 0.1063], [233.09, 0.1422], [235.11, 0.1784], [237.14, 0.215], [239.16, 0.2523], [241.18, 0.2902], [243.2, 0.3289], [245.23, 0.3685], [247.25, 0.4091], [249.27, 0.4509], [251.3, 0.4941], [253.32, 0.5389], [255.34, 0.5853], [257.36, 0.6337], [259.39, 0.6844], [261.41, 0.7375], [263.43, 0.7935], [265.45, 0.8527], [267.48, 0.9156], [269.5, 0.9827], [271.52, 1.0546], [273.55, 1.1321], [275.57, 1.216], [277.59, 1.3075], [279.61, 1.4078], [281.64, 1.5187], [283.66, 1.6421], [285.68, 1.7807], [287.7, 1.9378], [289.73, 2.1181], [291.75, 2.3276], [293.77, 2.5745], [295.8, 2.8709], [297.82, 3.2341], [299.84, 3.691], [301.86, 4.2849]], color: '#dc2626' },
                            { points: [[326.62, -4.8627], [328.14, -4.2844], [329.66, -3.824], [331.17, -3.4482], [332.69, -3.1354], [334.21, -2.8705], [335.72, -2.6431], [337.24, -2.4454], [338.76, -2.2717], [340.28, -2.1178], [341.79, -1.9803], [343.31, -1.8564], [344.83, -1.7442], [346.34, -1.6418], [347.86, -1.548], [349.38, -1.4616], [350.9, -1.3816], [352.41, -1.3073], [353.93, -1.2379], [355.45, -1.173], [356.97, -1.112], [358.48, -1.0544], [360, -1]], color: '#dc2626' }
                        ],
                        lines: [
                            { from: [135, -5], to: [135, 5], color: '#94a3b8', dashed: true, label: 'x=135°', labelAt: [140, 4.3] },
                            { from: [315, -5], to: [315, 5], color: '#94a3b8', dashed: true, label: 'x=315°', labelAt: [320, 4.3] }
                        ],
                        points: [
                            { at: [45, 0], label: '(45°, 0)', labelAnchor: 'sw' },
                            { at: [225, 0], label: '(225°, 0)', labelAnchor: 'sw' }
                        ]
                    }
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
                    description: 'Identify the change outside the function.',
                    workingLatex: '\\sin x \\longrightarrow 3\\sin x',
                    explanation: 'Multiplying the output by 3 scales every \\( y \\)-value by 3.'
                },
                {
                    stepNumber: 2,
                    description: 'Name the transformation.',
                    workingLatex: '\\text{Vertical stretch, scale factor } 3',
                    explanation: 'A factor outside the function rescales the \\( y \\)-direction. The shape and zeros of the curve are unchanged.'
                },
                {
                    stepNumber: 3,
                    description: 'Read off the new amplitude.',
                    workingLatex: '\\text{Amplitude} = 3',
                    explanation: 'The amplitude equals \\( |a| \\) for \\( y = a\\sin x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'State the new range.',
                    workingLatex: '-3 \\leq y \\leq 3',
                    explanation: 'The curve now reaches \\( \\pm 3 \\); zeros stay where sine is zero.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -3.5,
                        yMax: 3.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-3, -2, -1, 0, 1, 2, 3],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [4.5, 0.0785], [9, 0.1564], [13.5, 0.2334], [18, 0.309], [22.5, 0.3827], [27, 0.454], [31.5, 0.5225], [36, 0.5878], [40.5, 0.6494], [45, 0.7071], [49.5, 0.7604], [54, 0.809], [58.5, 0.8526], [63, 0.891], [67.5, 0.9239], [72, 0.9511], [76.5, 0.9724], [81, 0.9877], [85.5, 0.9969], [90, 1], [94.5, 0.9969], [99, 0.9877], [103.5, 0.9724], [108, 0.9511], [112.5, 0.9239], [117, 0.891], [121.5, 0.8526], [126, 0.809], [130.5, 0.7604], [135, 0.7071], [139.5, 0.6494], [144, 0.5878], [148.5, 0.5225], [153, 0.454], [157.5, 0.3827], [162, 0.309], [166.5, 0.2334], [171, 0.1564], [175.5, 0.0785], [180, 0], [184.5, -0.0785], [189, -0.1564], [193.5, -0.2334], [198, -0.309], [202.5, -0.3827], [207, -0.454], [211.5, -0.5225], [216, -0.5878], [220.5, -0.6494], [225, -0.7071], [229.5, -0.7604], [234, -0.809], [238.5, -0.8526], [243, -0.891], [247.5, -0.9239], [252, -0.9511], [256.5, -0.9724], [261, -0.9877], [265.5, -0.9969], [270, -1], [274.5, -0.9969], [279, -0.9877], [283.5, -0.9724], [288, -0.9511], [292.5, -0.9239], [297, -0.891], [301.5, -0.8526], [306, -0.809], [310.5, -0.7604], [315, -0.7071], [319.5, -0.6494], [324, -0.5878], [328.5, -0.5225], [333, -0.454], [337.5, -0.3827], [342, -0.309], [346.5, -0.2334], [351, -0.1564], [355.5, -0.0785], [360, 0]], color: '#94a3b8', label: 'y = \\sin x', labelAt: [310, -0.7] },
                            { points: [[0, 0], [4.5, 0.2354], [9, 0.4693], [13.5, 0.7003], [18, 0.9271], [22.5, 1.1481], [27, 1.362], [31.5, 1.5675], [36, 1.7634], [40.5, 1.9483], [45, 2.1213], [49.5, 2.2812], [54, 2.4271], [58.5, 2.5579], [63, 2.673], [67.5, 2.7716], [72, 2.8532], [76.5, 2.9171], [81, 2.9631], [85.5, 2.9908], [90, 3], [94.5, 2.9908], [99, 2.9631], [103.5, 2.9171], [108, 2.8532], [112.5, 2.7716], [117, 2.673], [121.5, 2.5579], [126, 2.4271], [130.5, 2.2812], [135, 2.1213], [139.5, 1.9483], [144, 1.7634], [148.5, 1.5675], [153, 1.362], [157.5, 1.1481], [162, 0.9271], [166.5, 0.7003], [171, 0.4693], [175.5, 0.2354], [180, 0], [184.5, -0.2354], [189, -0.4693], [193.5, -0.7003], [198, -0.9271], [202.5, -1.1481], [207, -1.362], [211.5, -1.5675], [216, -1.7634], [220.5, -1.9483], [225, -2.1213], [229.5, -2.2812], [234, -2.4271], [238.5, -2.5579], [243, -2.673], [247.5, -2.7716], [252, -2.8532], [256.5, -2.9171], [261, -2.9631], [265.5, -2.9908], [270, -3], [274.5, -2.9908], [279, -2.9631], [283.5, -2.9171], [288, -2.8532], [292.5, -2.7716], [297, -2.673], [301.5, -2.5579], [306, -2.4271], [310.5, -2.2812], [315, -2.1213], [319.5, -1.9483], [324, -1.7634], [328.5, -1.5675], [333, -1.362], [337.5, -1.1481], [342, -0.9271], [346.5, -0.7003], [351, -0.4693], [355.5, -0.2354], [360, 0]], color: '#2563eb', label: 'y = 3\\sin x', labelAt: [260, 3.2] }
                        ],
                        points: [
                            { at: [90, 3], label: 'max (90°, 3)', labelAnchor: 'n' },
                            { at: [270, -3], label: 'min (270°, -3)', labelAnchor: 's' }
                        ]
                    }
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
                    description: 'Decompose the transformation.',
                    workingLatex: 'y = \\cos x \\longrightarrow y = 2\\cos x \\longrightarrow y = -2\\cos x',
                    explanation: 'First scale by 2, then reflect in the \\( x \\)-axis. The two steps can be performed in either order — the negative sign converts max to min.'
                },
                {
                    stepNumber: 2,
                    description: 'After the stretch alone.',
                    workingLatex: '2\\cos x \\in [-2,\\ 2]',
                    explanation: 'Doubling each \\( y \\)-value gives a range from \\( -2 \\) to \\( 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the reflection.',
                    workingLatex: '-2\\cos x \\in [-2,\\ 2]',
                    explanation: 'Reflection flips signs but does not change the set of values reached. What was the max becomes the min and vice versa.'
                },
                {
                    stepNumber: 4,
                    description: 'Locate the new key points.',
                    workingLatex: '\\cos 0^\\circ = 1 \\Rightarrow -2\\cos 0^\\circ = -2; \\quad \\cos 180^\\circ = -1 \\Rightarrow -2\\cos 180^\\circ = 2',
                    explanation: 'Where cosine peaks, \\( -2\\cos x \\) bottoms out, and vice versa.',
                    diagram: {
                        xMin: -360,
                        xMax: 360,
                        yMin: -2.5,
                        yMax: 2.5,
                        xTicks: [-360, -270, -180, -90, 0, 90, 180, 270, 360],
                        yTicks: [-2, -1, 0, 1, 2],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[-360, 1], [-354, 0.9945], [-348, 0.9781], [-342, 0.9511], [-336, 0.9135], [-330, 0.866], [-324, 0.809], [-318, 0.7431], [-312, 0.6691], [-306, 0.5878], [-300, 0.5], [-294, 0.4067], [-288, 0.309], [-282, 0.2079], [-276, 0.1045], [-270, 0], [-264, -0.1045], [-258, -0.2079], [-252, -0.309], [-246, -0.4067], [-240, -0.5], [-234, -0.5878], [-228, -0.6691], [-222, -0.7431], [-216, -0.809], [-210, -0.866], [-204, -0.9135], [-198, -0.9511], [-192, -0.9781], [-186, -0.9945], [-180, -1], [-174, -0.9945], [-168, -0.9781], [-162, -0.9511], [-156, -0.9135], [-150, -0.866], [-144, -0.809], [-138, -0.7431], [-132, -0.6691], [-126, -0.5878], [-120, -0.5], [-114, -0.4067], [-108, -0.309], [-102, -0.2079], [-96, -0.1045], [-90, 0], [-84, 0.1045], [-78, 0.2079], [-72, 0.309], [-66, 0.4067], [-60, 0.5], [-54, 0.5878], [-48, 0.6691], [-42, 0.7431], [-36, 0.809], [-30, 0.866], [-24, 0.9135], [-18, 0.9511], [-12, 0.9781], [-6, 0.9945], [0, 1], [6, 0.9945], [12, 0.9781], [18, 0.9511], [24, 0.9135], [30, 0.866], [36, 0.809], [42, 0.7431], [48, 0.6691], [54, 0.5878], [60, 0.5], [66, 0.4067], [72, 0.309], [78, 0.2079], [84, 0.1045], [90, 0], [96, -0.1045], [102, -0.2079], [108, -0.309], [114, -0.4067], [120, -0.5], [126, -0.5878], [132, -0.6691], [138, -0.7431], [144, -0.809], [150, -0.866], [156, -0.9135], [162, -0.9511], [168, -0.9781], [174, -0.9945], [180, -1], [186, -0.9945], [192, -0.9781], [198, -0.9511], [204, -0.9135], [210, -0.866], [216, -0.809], [222, -0.7431], [228, -0.6691], [234, -0.5878], [240, -0.5], [246, -0.4067], [252, -0.309], [258, -0.2079], [264, -0.1045], [270, 0], [276, 0.1045], [282, 0.2079], [288, 0.309], [294, 0.4067], [300, 0.5], [306, 0.5878], [312, 0.6691], [318, 0.7431], [324, 0.809], [330, 0.866], [336, 0.9135], [342, 0.9511], [348, 0.9781], [354, 0.9945], [360, 1]], color: '#94a3b8', label: 'y = \\cos x', labelAt: [300, -1.7] },
                            { points: [[-360, -2], [-354, -1.989], [-348, -1.9563], [-342, -1.9021], [-336, -1.8271], [-330, -1.7321], [-324, -1.618], [-318, -1.4863], [-312, -1.3383], [-306, -1.1756], [-300, -1], [-294, -0.8135], [-288, -0.618], [-282, -0.4158], [-276, -0.2091], [-270, 0], [-264, 0.2091], [-258, 0.4158], [-252, 0.618], [-246, 0.8135], [-240, 1], [-234, 1.1756], [-228, 1.3383], [-222, 1.4863], [-216, 1.618], [-210, 1.7321], [-204, 1.8271], [-198, 1.9021], [-192, 1.9563], [-186, 1.989], [-180, 2], [-174, 1.989], [-168, 1.9563], [-162, 1.9021], [-156, 1.8271], [-150, 1.7321], [-144, 1.618], [-138, 1.4863], [-132, 1.3383], [-126, 1.1756], [-120, 1], [-114, 0.8135], [-108, 0.618], [-102, 0.4158], [-96, 0.2091], [-90, 0], [-84, -0.2091], [-78, -0.4158], [-72, -0.618], [-66, -0.8135], [-60, -1], [-54, -1.1756], [-48, -1.3383], [-42, -1.4863], [-36, -1.618], [-30, -1.7321], [-24, -1.8271], [-18, -1.9021], [-12, -1.9563], [-6, -1.989], [0, -2], [6, -1.989], [12, -1.9563], [18, -1.9021], [24, -1.8271], [30, -1.7321], [36, -1.618], [42, -1.4863], [48, -1.3383], [54, -1.1756], [60, -1], [66, -0.8135], [72, -0.618], [78, -0.4158], [84, -0.2091], [90, 0], [96, 0.2091], [102, 0.4158], [108, 0.618], [114, 0.8135], [120, 1], [126, 1.1756], [132, 1.3383], [138, 1.4863], [144, 1.618], [150, 1.7321], [156, 1.8271], [162, 1.9021], [168, 1.9563], [174, 1.989], [180, 2], [186, 1.989], [192, 1.9563], [198, 1.9021], [204, 1.8271], [210, 1.7321], [216, 1.618], [222, 1.4863], [228, 1.3383], [234, 1.1756], [240, 1], [246, 0.8135], [252, 0.618], [258, 0.4158], [264, 0.2091], [270, 0], [276, -0.2091], [282, -0.4158], [288, -0.618], [294, -0.8135], [300, -1], [306, -1.1756], [312, -1.3383], [318, -1.4863], [324, -1.618], [330, -1.7321], [336, -1.8271], [342, -1.9021], [348, -1.9563], [354, -1.989], [360, -2]], color: '#dc2626', label: 'y = -2\\cos x', labelAt: [240, 2.2] }
                        ],
                        points: [
                            { at: [0, -2], label: '(0°, -2)', labelAnchor: 's' },
                            { at: [180, 2], label: '(180°, 2)', labelAnchor: 'n' }
                        ]
                    }
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
                    description: 'Identify the change.',
                    workingLatex: '\\sin x \\longrightarrow -\\sin x',
                    explanation: 'Multiplying the output by \\( -1 \\) flips every \\( y \\)-value about the \\( x \\)-axis.'
                },
                {
                    stepNumber: 2,
                    description: 'Name the transformation.',
                    workingLatex: '\\text{Reflection in the } x\\text{-axis}',
                    explanation: 'Negating the function reflects in the horizontal axis. Original maxima become minima and vice versa.'
                },
                {
                    stepNumber: 3,
                    description: 'Locate where the parent has its maximum.',
                    workingLatex: '\\sin 90^\\circ = 1',
                    explanation: 'The parent peaks at \\( x = 90^\\circ \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Compute the corresponding new minimum.',
                    workingLatex: '-\\sin 90^\\circ = -1 \\Rightarrow (90^\\circ,\\ -1)',
                    explanation: 'After reflection, the peak of \\( \\sin x \\) becomes the trough of \\( -\\sin x \\).',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [4.5, 0.0785], [9, 0.1564], [13.5, 0.2334], [18, 0.309], [22.5, 0.3827], [27, 0.454], [31.5, 0.5225], [36, 0.5878], [40.5, 0.6494], [45, 0.7071], [49.5, 0.7604], [54, 0.809], [58.5, 0.8526], [63, 0.891], [67.5, 0.9239], [72, 0.9511], [76.5, 0.9724], [81, 0.9877], [85.5, 0.9969], [90, 1], [94.5, 0.9969], [99, 0.9877], [103.5, 0.9724], [108, 0.9511], [112.5, 0.9239], [117, 0.891], [121.5, 0.8526], [126, 0.809], [130.5, 0.7604], [135, 0.7071], [139.5, 0.6494], [144, 0.5878], [148.5, 0.5225], [153, 0.454], [157.5, 0.3827], [162, 0.309], [166.5, 0.2334], [171, 0.1564], [175.5, 0.0785], [180, 0], [184.5, -0.0785], [189, -0.1564], [193.5, -0.2334], [198, -0.309], [202.5, -0.3827], [207, -0.454], [211.5, -0.5225], [216, -0.5878], [220.5, -0.6494], [225, -0.7071], [229.5, -0.7604], [234, -0.809], [238.5, -0.8526], [243, -0.891], [247.5, -0.9239], [252, -0.9511], [256.5, -0.9724], [261, -0.9877], [265.5, -0.9969], [270, -1], [274.5, -0.9969], [279, -0.9877], [283.5, -0.9724], [288, -0.9511], [292.5, -0.9239], [297, -0.891], [301.5, -0.8526], [306, -0.809], [310.5, -0.7604], [315, -0.7071], [319.5, -0.6494], [324, -0.5878], [328.5, -0.5225], [333, -0.454], [337.5, -0.3827], [342, -0.309], [346.5, -0.2334], [351, -0.1564], [355.5, -0.0785], [360, 0]], color: '#94a3b8', label: 'y = \\sin x', labelAt: [310, 1.2] },
                            { points: [[0, 0], [4.5, -0.0785], [9, -0.1564], [13.5, -0.2334], [18, -0.309], [22.5, -0.3827], [27, -0.454], [31.5, -0.5225], [36, -0.5878], [40.5, -0.6494], [45, -0.7071], [49.5, -0.7604], [54, -0.809], [58.5, -0.8526], [63, -0.891], [67.5, -0.9239], [72, -0.9511], [76.5, -0.9724], [81, -0.9877], [85.5, -0.9969], [90, -1], [94.5, -0.9969], [99, -0.9877], [103.5, -0.9724], [108, -0.9511], [112.5, -0.9239], [117, -0.891], [121.5, -0.8526], [126, -0.809], [130.5, -0.7604], [135, -0.7071], [139.5, -0.6494], [144, -0.5878], [148.5, -0.5225], [153, -0.454], [157.5, -0.3827], [162, -0.309], [166.5, -0.2334], [171, -0.1564], [175.5, -0.0785], [180, 0], [184.5, 0.0785], [189, 0.1564], [193.5, 0.2334], [198, 0.309], [202.5, 0.3827], [207, 0.454], [211.5, 0.5225], [216, 0.5878], [220.5, 0.6494], [225, 0.7071], [229.5, 0.7604], [234, 0.809], [238.5, 0.8526], [243, 0.891], [247.5, 0.9239], [252, 0.9511], [256.5, 0.9724], [261, 0.9877], [265.5, 0.9969], [270, 1], [274.5, 0.9969], [279, 0.9877], [283.5, 0.9724], [288, 0.9511], [292.5, 0.9239], [297, 0.891], [301.5, 0.8526], [306, 0.809], [310.5, 0.7604], [315, 0.7071], [319.5, 0.6494], [324, 0.5878], [328.5, 0.5225], [333, 0.454], [337.5, 0.3827], [342, 0.309], [346.5, 0.2334], [351, 0.1564], [355.5, 0.0785], [360, 0]], color: '#dc2626', label: 'y = -\\sin x', labelAt: [310, -1.2] }
                        ],
                        points: [
                            { at: [90, -1], label: 'min (90°, -1)', labelAnchor: 's' },
                            { at: [270, 1], label: 'max (270°, 1)', labelAnchor: 'n' }
                        ]
                    }
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
                    description: 'Identify the inside change.',
                    workingLatex: '\\sin x \\longrightarrow \\sin 2x',
                    explanation: '\\( x \\) is replaced by \\( 2x \\); inside changes affect the horizontal direction.'
                },
                {
                    stepNumber: 2,
                    description: 'Name the transformation.',
                    workingLatex: '\\text{Horizontal stretch, scale factor } \\tfrac{1}{2}',
                    explanation: 'Replacing \\( x \\) with \\( nx \\) (here \\( n = 2 \\)) compresses horizontally — the scale factor is \\( 1/n \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Compute the new period.',
                    workingLatex: '\\text{Period} = \\tfrac{360^\\circ}{2} = 180^\\circ',
                    explanation: 'The period of \\( \\sin(nx) \\) is \\( 360^\\circ / n \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Count complete cycles in \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: '\\tfrac{360^\\circ}{180^\\circ} = 2 \\text{ cycles}',
                    explanation: 'Two full oscillations fit in the standard interval.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [4.5, 0.0785], [9, 0.1564], [13.5, 0.2334], [18, 0.309], [22.5, 0.3827], [27, 0.454], [31.5, 0.5225], [36, 0.5878], [40.5, 0.6494], [45, 0.7071], [49.5, 0.7604], [54, 0.809], [58.5, 0.8526], [63, 0.891], [67.5, 0.9239], [72, 0.9511], [76.5, 0.9724], [81, 0.9877], [85.5, 0.9969], [90, 1], [94.5, 0.9969], [99, 0.9877], [103.5, 0.9724], [108, 0.9511], [112.5, 0.9239], [117, 0.891], [121.5, 0.8526], [126, 0.809], [130.5, 0.7604], [135, 0.7071], [139.5, 0.6494], [144, 0.5878], [148.5, 0.5225], [153, 0.454], [157.5, 0.3827], [162, 0.309], [166.5, 0.2334], [171, 0.1564], [175.5, 0.0785], [180, 0], [184.5, -0.0785], [189, -0.1564], [193.5, -0.2334], [198, -0.309], [202.5, -0.3827], [207, -0.454], [211.5, -0.5225], [216, -0.5878], [220.5, -0.6494], [225, -0.7071], [229.5, -0.7604], [234, -0.809], [238.5, -0.8526], [243, -0.891], [247.5, -0.9239], [252, -0.9511], [256.5, -0.9724], [261, -0.9877], [265.5, -0.9969], [270, -1], [274.5, -0.9969], [279, -0.9877], [283.5, -0.9724], [288, -0.9511], [292.5, -0.9239], [297, -0.891], [301.5, -0.8526], [306, -0.809], [310.5, -0.7604], [315, -0.7071], [319.5, -0.6494], [324, -0.5878], [328.5, -0.5225], [333, -0.454], [337.5, -0.3827], [342, -0.309], [346.5, -0.2334], [351, -0.1564], [355.5, -0.0785], [360, 0]], color: '#94a3b8', label: 'y = \\sin x', labelAt: [300, -1.2] },
                            { points: [[0, 0], [3, 0.1045], [6, 0.2079], [9, 0.309], [12, 0.4067], [15, 0.5], [18, 0.5878], [21, 0.6691], [24, 0.7431], [27, 0.809], [30, 0.866], [33, 0.9135], [36, 0.9511], [39, 0.9781], [42, 0.9945], [45, 1], [48, 0.9945], [51, 0.9781], [54, 0.9511], [57, 0.9135], [60, 0.866], [63, 0.809], [66, 0.7431], [69, 0.6691], [72, 0.5878], [75, 0.5], [78, 0.4067], [81, 0.309], [84, 0.2079], [87, 0.1045], [90, 0], [93, -0.1045], [96, -0.2079], [99, -0.309], [102, -0.4067], [105, -0.5], [108, -0.5878], [111, -0.6691], [114, -0.7431], [117, -0.809], [120, -0.866], [123, -0.9135], [126, -0.9511], [129, -0.9781], [132, -0.9945], [135, -1], [138, -0.9945], [141, -0.9781], [144, -0.9511], [147, -0.9135], [150, -0.866], [153, -0.809], [156, -0.7431], [159, -0.6691], [162, -0.5878], [165, -0.5], [168, -0.4067], [171, -0.309], [174, -0.2079], [177, -0.1045], [180, 0], [183, 0.1045], [186, 0.2079], [189, 0.309], [192, 0.4067], [195, 0.5], [198, 0.5878], [201, 0.6691], [204, 0.7431], [207, 0.809], [210, 0.866], [213, 0.9135], [216, 0.9511], [219, 0.9781], [222, 0.9945], [225, 1], [228, 0.9945], [231, 0.9781], [234, 0.9511], [237, 0.9135], [240, 0.866], [243, 0.809], [246, 0.7431], [249, 0.6691], [252, 0.5878], [255, 0.5], [258, 0.4067], [261, 0.309], [264, 0.2079], [267, 0.1045], [270, 0], [273, -0.1045], [276, -0.2079], [279, -0.309], [282, -0.4067], [285, -0.5], [288, -0.5878], [291, -0.6691], [294, -0.7431], [297, -0.809], [300, -0.866], [303, -0.9135], [306, -0.9511], [309, -0.9781], [312, -0.9945], [315, -1], [318, -0.9945], [321, -0.9781], [324, -0.9511], [327, -0.9135], [330, -0.866], [333, -0.809], [336, -0.7431], [339, -0.6691], [342, -0.5878], [345, -0.5], [348, -0.4067], [351, -0.309], [354, -0.2079], [357, -0.1045], [360, 0]], color: '#2563eb', label: 'y = \\sin 2x', labelAt: [300, 1.25] }
                        ],
                        points: [
                            { at: [45, 1], label: 'max', labelAnchor: 'n' },
                            { at: [225, 1], label: 'max', labelAnchor: 'n' },
                            { at: [135, -1], label: 'min', labelAnchor: 's' },
                            { at: [315, -1], label: 'min', labelAnchor: 's' }
                        ]
                    }
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
                    description: 'Apply the period formula.',
                    workingLatex: '\\text{Period} = \\tfrac{360^\\circ}{3} = 120^\\circ',
                    explanation: 'For \\( y = \\cos(nx) \\), the period is \\( 360^\\circ / n \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the maxima of \\( \\cos 3x \\): \\( \\cos 3x = 1 \\) when \\( 3x = 0, 360, 720, 1080 \\).',
                    workingLatex: 'x = 0^\\circ,\\ 120^\\circ,\\ 240^\\circ,\\ 360^\\circ',
                    explanation: 'Divide by 3 to get the \\( x \\)-values of the four maxima in the interval.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the minima: \\( 3x = 180, 540, 900 \\).',
                    workingLatex: 'x = 60^\\circ,\\ 180^\\circ,\\ 300^\\circ',
                    explanation: 'Three minima in the interval.'
                },
                {
                    stepNumber: 4,
                    description: 'Count complete cycles.',
                    workingLatex: '\\tfrac{360^\\circ}{120^\\circ} = 3',
                    explanation: 'Three full cosine cycles in \\( [0^\\circ, 360^\\circ] \\).',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 1], [4.5, 0.9969], [9, 0.9877], [13.5, 0.9724], [18, 0.9511], [22.5, 0.9239], [27, 0.891], [31.5, 0.8526], [36, 0.809], [40.5, 0.7604], [45, 0.7071], [49.5, 0.6494], [54, 0.5878], [58.5, 0.5225], [63, 0.454], [67.5, 0.3827], [72, 0.309], [76.5, 0.2334], [81, 0.1564], [85.5, 0.0785], [90, 0], [94.5, -0.0785], [99, -0.1564], [103.5, -0.2334], [108, -0.309], [112.5, -0.3827], [117, -0.454], [121.5, -0.5225], [126, -0.5878], [130.5, -0.6494], [135, -0.7071], [139.5, -0.7604], [144, -0.809], [148.5, -0.8526], [153, -0.891], [157.5, -0.9239], [162, -0.9511], [166.5, -0.9724], [171, -0.9877], [175.5, -0.9969], [180, -1], [184.5, -0.9969], [189, -0.9877], [193.5, -0.9724], [198, -0.9511], [202.5, -0.9239], [207, -0.891], [211.5, -0.8526], [216, -0.809], [220.5, -0.7604], [225, -0.7071], [229.5, -0.6494], [234, -0.5878], [238.5, -0.5225], [243, -0.454], [247.5, -0.3827], [252, -0.309], [256.5, -0.2334], [261, -0.1564], [265.5, -0.0785], [270, 0], [274.5, 0.0785], [279, 0.1564], [283.5, 0.2334], [288, 0.309], [292.5, 0.3827], [297, 0.454], [301.5, 0.5225], [306, 0.5878], [310.5, 0.6494], [315, 0.7071], [319.5, 0.7604], [324, 0.809], [328.5, 0.8526], [333, 0.891], [337.5, 0.9239], [342, 0.9511], [346.5, 0.9724], [351, 0.9877], [355.5, 0.9969], [360, 1]], color: '#94a3b8', label: 'y = \\cos x', labelAt: [300, -1.2] },
                            { points: [[0, 1], [2, 0.9945], [4, 0.9781], [6, 0.9511], [8, 0.9135], [10, 0.866], [12, 0.809], [14, 0.7431], [16, 0.6691], [18, 0.5878], [20, 0.5], [22, 0.4067], [24, 0.309], [26, 0.2079], [28, 0.1045], [30, 0], [32, -0.1045], [34, -0.2079], [36, -0.309], [38, -0.4067], [40, -0.5], [42, -0.5878], [44, -0.6691], [46, -0.7431], [48, -0.809], [50, -0.866], [52, -0.9135], [54, -0.9511], [56, -0.9781], [58, -0.9945], [60, -1], [62, -0.9945], [64, -0.9781], [66, -0.9511], [68, -0.9135], [70, -0.866], [72, -0.809], [74, -0.7431], [76, -0.6691], [78, -0.5878], [80, -0.5], [82, -0.4067], [84, -0.309], [86, -0.2079], [88, -0.1045], [90, 0], [92, 0.1045], [94, 0.2079], [96, 0.309], [98, 0.4067], [100, 0.5], [102, 0.5878], [104, 0.6691], [106, 0.7431], [108, 0.809], [110, 0.866], [112, 0.9135], [114, 0.9511], [116, 0.9781], [118, 0.9945], [120, 1], [122, 0.9945], [124, 0.9781], [126, 0.9511], [128, 0.9135], [130, 0.866], [132, 0.809], [134, 0.7431], [136, 0.6691], [138, 0.5878], [140, 0.5], [142, 0.4067], [144, 0.309], [146, 0.2079], [148, 0.1045], [150, 0], [152, -0.1045], [154, -0.2079], [156, -0.309], [158, -0.4067], [160, -0.5], [162, -0.5878], [164, -0.6691], [166, -0.7431], [168, -0.809], [170, -0.866], [172, -0.9135], [174, -0.9511], [176, -0.9781], [178, -0.9945], [180, -1], [182, -0.9945], [184, -0.9781], [186, -0.9511], [188, -0.9135], [190, -0.866], [192, -0.809], [194, -0.7431], [196, -0.6691], [198, -0.5878], [200, -0.5], [202, -0.4067], [204, -0.309], [206, -0.2079], [208, -0.1045], [210, 0], [212, 0.1045], [214, 0.2079], [216, 0.309], [218, 0.4067], [220, 0.5], [222, 0.5878], [224, 0.6691], [226, 0.7431], [228, 0.809], [230, 0.866], [232, 0.9135], [234, 0.9511], [236, 0.9781], [238, 0.9945], [240, 1], [242, 0.9945], [244, 0.9781], [246, 0.9511], [248, 0.9135], [250, 0.866], [252, 0.809], [254, 0.7431], [256, 0.6691], [258, 0.5878], [260, 0.5], [262, 0.4067], [264, 0.309], [266, 0.2079], [268, 0.1045], [270, 0], [272, -0.1045], [274, -0.2079], [276, -0.309], [278, -0.4067], [280, -0.5], [282, -0.5878], [284, -0.6691], [286, -0.7431], [288, -0.809], [290, -0.866], [292, -0.9135], [294, -0.9511], [296, -0.9781], [298, -0.9945], [300, -1], [302, -0.9945], [304, -0.9781], [306, -0.9511], [308, -0.9135], [310, -0.866], [312, -0.809], [314, -0.7431], [316, -0.6691], [318, -0.5878], [320, -0.5], [322, -0.4067], [324, -0.309], [326, -0.2079], [328, -0.1045], [330, 0], [332, 0.1045], [334, 0.2079], [336, 0.309], [338, 0.4067], [340, 0.5], [342, 0.5878], [344, 0.6691], [346, 0.7431], [348, 0.809], [350, 0.866], [352, 0.9135], [354, 0.9511], [356, 0.9781], [358, 0.9945], [360, 1]], color: '#16a34a', label: 'y = \\cos 3x', labelAt: [250, 1.25] }
                        ],
                        points: [
                            { at: [0, 1], label: '(0°, 1)', labelAnchor: 'ne' },
                            { at: [60, -1], label: '(60°, -1)', labelAnchor: 's' },
                            { at: [120, 1], label: '(120°, 1)', labelAnchor: 'n' },
                            { at: [180, -1], label: '(180°, -1)', labelAnchor: 's' }
                        ]
                    }
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
                    description: 'Apply the period formula to \\( \\tan 2x \\).',
                    workingLatex: '\\text{Period} = \\tfrac{180^\\circ}{2} = 90^\\circ',
                    explanation: 'The period of \\( \\tan(nx) \\) is \\( 180^\\circ/n \\) — half that of \\( \\tan x \\) here.'
                },
                {
                    stepNumber: 2,
                    description: 'Find where \\( \\tan 2x \\) is undefined.',
                    workingLatex: '\\cos 2x = 0 \\Rightarrow 2x = 90^\\circ + 180^\\circ n',
                    explanation: 'Set the denominator of \\( \\tan 2x = \\sin 2x / \\cos 2x \\) to zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = 45^\\circ + 90^\\circ n',
                    explanation: 'Divide by 2; asymptotes are spaced every \\( 90^\\circ \\).'
                },
                {
                    stepNumber: 4,
                    description: 'List the asymptotes inside \\( [-180^\\circ, 180^\\circ] \\).',
                    workingLatex: 'x = -135^\\circ,\\ -45^\\circ,\\ 45^\\circ,\\ 135^\\circ',
                    explanation: 'Taking \\( n = -2, -1, 0, 1 \\) gives the four asymptotes — twice as many as for \\( \\tan x \\), reflecting the doubled frequency.',
                    diagram: {
                        xMin: -180,
                        xMax: 180,
                        yMin: -5,
                        yMax: 5,
                        xTicks: [-180, -90, 0, 90, 180],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[-180, 0], [-177.93, 0.0361], [-175.86, 0.0724], [-173.79, 0.1088], [-171.72, 0.1455], [-169.65, 0.1826], [-167.58, 0.2202], [-165.51, 0.2584], [-163.44, 0.2973], [-161.37, 0.3371], [-159.3, 0.3778], [-157.23, 0.4197], [-155.16, 0.4629], [-153.09, 0.5075], [-151.02, 0.5538], [-148.95, 0.602], [-146.88, 0.6523], [-144.81, 0.7051], [-142.74, 0.7606], [-140.67, 0.8192], [-138.6, 0.8815], [-136.53, 0.9478], [-134.47, 1.0188], [-132.4, 1.0953], [-130.33, 1.1781], [-128.26, 1.2682], [-126.19, 1.367], [-124.12, 1.4761], [-122.05, 1.5974], [-119.98, 1.7337], [-117.91, 1.8881], [-115.84, 2.0652], [-113.77, 2.2708], [-111.7, 2.5132], [-109.63, 2.804], [-107.56, 3.1604], [-105.49, 3.6087], [-103.42, 4.1915], [-101.35, 4.9824]], color: '#94a3b8' },
                            { points: [[-76.86, -4.2849], [-74.84, -3.691], [-72.82, -3.2341], [-70.8, -2.8709], [-68.77, -2.5745], [-66.75, -2.3276], [-64.73, -2.1181], [-62.7, -1.9378], [-60.68, -1.7807], [-58.66, -1.6421], [-56.64, -1.5187], [-54.61, -1.4078], [-52.59, -1.3075], [-50.57, -1.216], [-48.55, -1.1321], [-46.52, -1.0546], [-44.5, -0.9827], [-42.48, -0.9156], [-40.45, -0.8527], [-38.43, -0.7935], [-36.41, -0.7375], [-34.39, -0.6844], [-32.36, -0.6337], [-30.34, -0.5853], [-28.32, -0.5389], [-26.3, -0.4941], [-24.27, -0.4509], [-22.25, -0.4091], [-20.23, -0.3685], [-18.2, -0.3289], [-16.18, -0.2902], [-14.16, -0.2523], [-12.14, -0.215], [-10.11, -0.1784], [-8.09, -0.1422], [-6.07, -0.1063], [-4.05, -0.0707], [-2.02, -0.0353], [0, 0], [2.02, 0.0353], [4.05, 0.0707], [6.07, 0.1063], [8.09, 0.1422], [10.11, 0.1784], [12.14, 0.215], [14.16, 0.2523], [16.18, 0.2902], [18.2, 0.3289], [20.23, 0.3685], [22.25, 0.4091], [24.27, 0.4509], [26.3, 0.4941], [28.32, 0.5389], [30.34, 0.5853], [32.36, 0.6337], [34.39, 0.6844], [36.41, 0.7375], [38.43, 0.7935], [40.45, 0.8527], [42.48, 0.9156], [44.5, 0.9827], [46.52, 1.0546], [48.55, 1.1321], [50.57, 1.216], [52.59, 1.3075], [54.61, 1.4078], [56.64, 1.5187], [58.66, 1.6421], [60.68, 1.7807], [62.7, 1.9378], [64.73, 2.1181], [66.75, 2.3276], [68.77, 2.5745], [70.8, 2.8709], [72.82, 3.2341], [74.84, 3.691], [76.86, 4.2849]], color: '#94a3b8' },
                            { points: [[101.35, -4.9824], [103.42, -4.1915], [105.49, -3.6087], [107.56, -3.1604], [109.63, -2.804], [111.7, -2.5132], [113.77, -2.2708], [115.84, -2.0652], [117.91, -1.8881], [119.98, -1.7337], [122.05, -1.5974], [124.12, -1.4761], [126.19, -1.367], [128.26, -1.2682], [130.33, -1.1781], [132.4, -1.0953], [134.47, -1.0188], [136.53, -0.9478], [138.6, -0.8815], [140.67, -0.8192], [142.74, -0.7606], [144.81, -0.7051], [146.88, -0.6523], [148.95, -0.602], [151.02, -0.5538], [153.09, -0.5075], [155.16, -0.4629], [157.23, -0.4197], [159.3, -0.3778], [161.37, -0.3371], [163.44, -0.2973], [165.51, -0.2584], [167.58, -0.2202], [169.65, -0.1826], [171.72, -0.1455], [173.79, -0.1088], [175.86, -0.0724], [177.93, -0.0361], [180, 0]], color: '#94a3b8' },
                            { points: [[-180, 0], [-178.48, 0.053], [-176.97, 0.1063], [-175.45, 0.1602], [-173.93, 0.2151], [-172.41, 0.2712], [-170.9, 0.3289], [-169.38, 0.3887], [-167.86, 0.451], [-166.34, 0.5164], [-164.83, 0.5854], [-163.31, 0.6589], [-161.79, 0.7376], [-160.28, 0.8228], [-158.76, 0.9158], [-157.24, 1.0182], [-155.72, 1.1324], [-154.21, 1.2611], [-152.69, 1.4082], [-151.17, 1.5791], [-149.66, 1.7812], [-148.14, 2.0255], [-146.62, 2.3285], [-145.1, 2.7169], [-143.59, 3.236], [-142.07, 3.97]], color: '#dc2626' },
                            { points: [[-127.86, -3.9292], [-125.81, -3.011], [-123.77, -2.4184], [-121.72, -2.0006], [-119.67, -1.6875], [-117.63, -1.4418], [-115.58, -1.2421], [-113.53, -1.075], [-111.49, -0.9318], [-109.44, -0.8064], [-107.4, -0.6948], [-105.35, -0.5937], [-103.3, -0.5009], [-101.26, -0.4145], [-99.21, -0.333], [-97.16, -0.2554], [-95.12, -0.1805], [-93.07, -0.1076], [-91.02, -0.0357], [-88.98, 0.0357], [-86.93, 0.1076], [-84.88, 0.1805], [-82.84, 0.2554], [-80.79, 0.333], [-78.74, 0.4145], [-76.7, 0.5009], [-74.65, 0.5937], [-72.6, 0.6948], [-70.56, 0.8064], [-68.51, 0.9318], [-66.47, 1.075], [-64.42, 1.2421], [-62.37, 1.4418], [-60.33, 1.6875], [-58.28, 2.0006], [-56.23, 2.4184], [-54.19, 3.011], [-52.14, 3.9292]], color: '#dc2626' },
                            { points: [[-37.86, -3.9292], [-35.81, -3.011], [-33.77, -2.4184], [-31.72, -2.0006], [-29.67, -1.6875], [-27.63, -1.4418], [-25.58, -1.2421], [-23.53, -1.075], [-21.49, -0.9318], [-19.44, -0.8064], [-17.4, -0.6948], [-15.35, -0.5937], [-13.3, -0.5009], [-11.26, -0.4145], [-9.21, -0.333], [-7.16, -0.2554], [-5.12, -0.1805], [-3.07, -0.1076], [-1.02, -0.0357], [1.02, 0.0357], [3.07, 0.1076], [5.12, 0.1805], [7.16, 0.2554], [9.21, 0.333], [11.26, 0.4145], [13.3, 0.5009], [15.35, 0.5937], [17.4, 0.6948], [19.44, 0.8064], [21.49, 0.9318], [23.53, 1.075], [25.58, 1.2421], [27.63, 1.4418], [29.67, 1.6875], [31.72, 2.0006], [33.77, 2.4184], [35.81, 3.011], [37.86, 3.9292]], color: '#dc2626' },
                            { points: [[52.14, -3.9292], [54.19, -3.011], [56.23, -2.4184], [58.28, -2.0006], [60.33, -1.6875], [62.37, -1.4418], [64.42, -1.2421], [66.47, -1.075], [68.51, -0.9318], [70.56, -0.8064], [72.6, -0.6948], [74.65, -0.5937], [76.7, -0.5009], [78.74, -0.4145], [80.79, -0.333], [82.84, -0.2554], [84.88, -0.1805], [86.93, -0.1076], [88.98, -0.0357], [91.02, 0.0357], [93.07, 0.1076], [95.12, 0.1805], [97.16, 0.2554], [99.21, 0.333], [101.26, 0.4145], [103.3, 0.5009], [105.35, 0.5937], [107.4, 0.6948], [109.44, 0.8064], [111.49, 0.9318], [113.53, 1.075], [115.58, 1.2421], [117.63, 1.4418], [119.67, 1.6875], [121.72, 2.0006], [123.77, 2.4184], [125.81, 3.011], [127.86, 3.9292]], color: '#dc2626' },
                            { points: [[142.07, -3.97], [143.59, -3.236], [145.1, -2.7169], [146.62, -2.3285], [148.14, -2.0255], [149.66, -1.7812], [151.17, -1.5791], [152.69, -1.4082], [154.21, -1.2611], [155.72, -1.1324], [157.24, -1.0182], [158.76, -0.9158], [160.28, -0.8228], [161.79, -0.7376], [163.31, -0.6589], [164.83, -0.5854], [166.34, -0.5164], [167.86, -0.451], [169.38, -0.3887], [170.9, -0.3289], [172.41, -0.2712], [173.93, -0.2151], [175.45, -0.1602], [176.97, -0.1063], [178.48, -0.053], [180, 0]], color: '#dc2626' }
                        ],
                        lines: [
                            { from: [-135, -5], to: [-135, 5], color: '#94a3b8', dashed: true },
                            { from: [-90, -5], to: [-90, 5], color: '#cbd5e1', dashed: true },
                            { from: [-45, -5], to: [-45, 5], color: '#94a3b8', dashed: true },
                            { from: [45, -5], to: [45, 5], color: '#94a3b8', dashed: true },
                            { from: [90, -5], to: [90, 5], color: '#cbd5e1', dashed: true },
                            { from: [135, -5], to: [135, 5], color: '#94a3b8', dashed: true }
                        ]
                    }
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
                    description: 'Translate scale factor into algebra.',
                    workingLatex: '\\text{Horizontal stretch s.f. } \\tfrac{1}{n} \\;\\Leftrightarrow\\; x \\to nx',
                    explanation: 'A horizontal stretch by factor \\( 1/n \\) is equivalent to replacing \\( x \\) with \\( nx \\). Here \\( n = 4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write the new equation.',
                    workingLatex: 'y = \\sin 4x',
                    explanation: 'Substitute \\( n = 4 \\) into the rule.'
                },
                {
                    stepNumber: 3,
                    description: 'Compute the period.',
                    workingLatex: '\\text{Period} = \\tfrac{360^\\circ}{4} = 90^\\circ',
                    explanation: 'The period of \\( \\sin(nx) \\) is \\( 360^\\circ/n \\).',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [2, 0.1392], [4, 0.2756], [6, 0.4067], [8, 0.5299], [10, 0.6428], [12, 0.7431], [14, 0.829], [16, 0.8988], [18, 0.9511], [20, 0.9848], [22, 0.9994], [24, 0.9945], [26, 0.9703], [28, 0.9272], [30, 0.866], [32, 0.788], [34, 0.6947], [36, 0.5878], [38, 0.4695], [40, 0.342], [42, 0.2079], [44, 0.0698], [46, -0.0698], [48, -0.2079], [50, -0.342], [52, -0.4695], [54, -0.5878], [56, -0.6947], [58, -0.788], [60, -0.866], [62, -0.9272], [64, -0.9703], [66, -0.9945], [68, -0.9994], [70, -0.9848], [72, -0.9511], [74, -0.8988], [76, -0.829], [78, -0.7431], [80, -0.6428], [82, -0.5299], [84, -0.4067], [86, -0.2756], [88, -0.1392], [90, 0], [92, 0.1392], [94, 0.2756], [96, 0.4067], [98, 0.5299], [100, 0.6428], [102, 0.7431], [104, 0.829], [106, 0.8988], [108, 0.9511], [110, 0.9848], [112, 0.9994], [114, 0.9945], [116, 0.9703], [118, 0.9272], [120, 0.866], [122, 0.788], [124, 0.6947], [126, 0.5878], [128, 0.4695], [130, 0.342], [132, 0.2079], [134, 0.0698], [136, -0.0698], [138, -0.2079], [140, -0.342], [142, -0.4695], [144, -0.5878], [146, -0.6947], [148, -0.788], [150, -0.866], [152, -0.9272], [154, -0.9703], [156, -0.9945], [158, -0.9994], [160, -0.9848], [162, -0.9511], [164, -0.8988], [166, -0.829], [168, -0.7431], [170, -0.6428], [172, -0.5299], [174, -0.4067], [176, -0.2756], [178, -0.1392], [180, 0], [182, 0.1392], [184, 0.2756], [186, 0.4067], [188, 0.5299], [190, 0.6428], [192, 0.7431], [194, 0.829], [196, 0.8988], [198, 0.9511], [200, 0.9848], [202, 0.9994], [204, 0.9945], [206, 0.9703], [208, 0.9272], [210, 0.866], [212, 0.788], [214, 0.6947], [216, 0.5878], [218, 0.4695], [220, 0.342], [222, 0.2079], [224, 0.0698], [226, -0.0698], [228, -0.2079], [230, -0.342], [232, -0.4695], [234, -0.5878], [236, -0.6947], [238, -0.788], [240, -0.866], [242, -0.9272], [244, -0.9703], [246, -0.9945], [248, -0.9994], [250, -0.9848], [252, -0.9511], [254, -0.8988], [256, -0.829], [258, -0.7431], [260, -0.6428], [262, -0.5299], [264, -0.4067], [266, -0.2756], [268, -0.1392], [270, 0], [272, 0.1392], [274, 0.2756], [276, 0.4067], [278, 0.5299], [280, 0.6428], [282, 0.7431], [284, 0.829], [286, 0.8988], [288, 0.9511], [290, 0.9848], [292, 0.9994], [294, 0.9945], [296, 0.9703], [298, 0.9272], [300, 0.866], [302, 0.788], [304, 0.6947], [306, 0.5878], [308, 0.4695], [310, 0.342], [312, 0.2079], [314, 0.0698], [316, -0.0698], [318, -0.2079], [320, -0.342], [322, -0.4695], [324, -0.5878], [326, -0.6947], [328, -0.788], [330, -0.866], [332, -0.9272], [334, -0.9703], [336, -0.9945], [338, -0.9994], [340, -0.9848], [342, -0.9511], [344, -0.8988], [346, -0.829], [348, -0.7431], [350, -0.6428], [352, -0.5299], [354, -0.4067], [356, -0.2756], [358, -0.1392], [360, 0]], color: '#2563eb', label: 'y = \\sin 4x', labelAt: [290, 1.25] }
                        ]
                    }
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
                    description: 'First identify the outside multiplier.',
                    workingLatex: 'y = \\cos x \\longrightarrow y = 2\\cos x',
                    explanation: 'Multiplication by 2 gives a vertical stretch, scale factor 2. Amplitude doubles to 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Then identify the additive constant.',
                    workingLatex: 'y = 2\\cos x \\longrightarrow y = 2\\cos x + 1',
                    explanation: 'Adding 1 outside shifts the graph up by 1.'
                },
                {
                    stepNumber: 3,
                    description: 'State the order: stretch then translate.',
                    workingLatex: '\\text{Stretch } \\times 2 \\text{, then translate } +1 \\text{ up}',
                    explanation: 'When two outside operations are applied, work from the function outward; the stretch is applied to \\( \\cos x \\) before the shift.'
                },
                {
                    stepNumber: 4,
                    description: 'Compute the new maximum.',
                    workingLatex: '\\text{Max} = 2(1) + 1 = 3',
                    explanation: 'Substitute the parent maximum \\( \\cos x = 1 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Compute the new minimum.',
                    workingLatex: '\\text{Min} = 2(-1) + 1 = -1',
                    explanation: 'Substitute the parent minimum \\( \\cos x = -1 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Write the range.',
                    workingLatex: '-1 \\leq y \\leq 3',
                    explanation: 'Combine the two extremes.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 3.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1, 2, 3],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 1], [4.5, 0.9969], [9, 0.9877], [13.5, 0.9724], [18, 0.9511], [22.5, 0.9239], [27, 0.891], [31.5, 0.8526], [36, 0.809], [40.5, 0.7604], [45, 0.7071], [49.5, 0.6494], [54, 0.5878], [58.5, 0.5225], [63, 0.454], [67.5, 0.3827], [72, 0.309], [76.5, 0.2334], [81, 0.1564], [85.5, 0.0785], [90, 0], [94.5, -0.0785], [99, -0.1564], [103.5, -0.2334], [108, -0.309], [112.5, -0.3827], [117, -0.454], [121.5, -0.5225], [126, -0.5878], [130.5, -0.6494], [135, -0.7071], [139.5, -0.7604], [144, -0.809], [148.5, -0.8526], [153, -0.891], [157.5, -0.9239], [162, -0.9511], [166.5, -0.9724], [171, -0.9877], [175.5, -0.9969], [180, -1], [184.5, -0.9969], [189, -0.9877], [193.5, -0.9724], [198, -0.9511], [202.5, -0.9239], [207, -0.891], [211.5, -0.8526], [216, -0.809], [220.5, -0.7604], [225, -0.7071], [229.5, -0.6494], [234, -0.5878], [238.5, -0.5225], [243, -0.454], [247.5, -0.3827], [252, -0.309], [256.5, -0.2334], [261, -0.1564], [265.5, -0.0785], [270, 0], [274.5, 0.0785], [279, 0.1564], [283.5, 0.2334], [288, 0.309], [292.5, 0.3827], [297, 0.454], [301.5, 0.5225], [306, 0.5878], [310.5, 0.6494], [315, 0.7071], [319.5, 0.7604], [324, 0.809], [328.5, 0.8526], [333, 0.891], [337.5, 0.9239], [342, 0.9511], [346.5, 0.9724], [351, 0.9877], [355.5, 0.9969], [360, 1]], color: '#94a3b8', label: 'y = \\cos x', labelAt: [300, -1.2] },
                            { points: [[0, 3], [4.5, 2.9938], [9, 2.9754], [13.5, 2.9447], [18, 2.9021], [22.5, 2.8478], [27, 2.782], [31.5, 2.7053], [36, 2.618], [40.5, 2.5208], [45, 2.4142], [49.5, 2.2989], [54, 2.1756], [58.5, 2.045], [63, 1.908], [67.5, 1.7654], [72, 1.618], [76.5, 1.4669], [81, 1.3129], [85.5, 1.1569], [90, 1], [94.5, 0.8431], [99, 0.6871], [103.5, 0.5331], [108, 0.382], [112.5, 0.2346], [117, 0.092], [121.5, -0.045], [126, -0.1756], [130.5, -0.2989], [135, -0.4142], [139.5, -0.5208], [144, -0.618], [148.5, -0.7053], [153, -0.782], [157.5, -0.8478], [162, -0.9021], [166.5, -0.9447], [171, -0.9754], [175.5, -0.9938], [180, -1], [184.5, -0.9938], [189, -0.9754], [193.5, -0.9447], [198, -0.9021], [202.5, -0.8478], [207, -0.782], [211.5, -0.7053], [216, -0.618], [220.5, -0.5208], [225, -0.4142], [229.5, -0.2989], [234, -0.1756], [238.5, -0.045], [243, 0.092], [247.5, 0.2346], [252, 0.382], [256.5, 0.5331], [261, 0.6871], [265.5, 0.8431], [270, 1], [274.5, 1.1569], [279, 1.3129], [283.5, 1.4669], [288, 1.618], [292.5, 1.7654], [297, 1.908], [301.5, 2.045], [306, 2.1756], [310.5, 2.2989], [315, 2.4142], [319.5, 2.5208], [324, 2.618], [328.5, 2.7053], [333, 2.782], [337.5, 2.8478], [342, 2.9021], [346.5, 2.9447], [351, 2.9754], [355.5, 2.9938], [360, 3]], color: '#16a34a', label: 'y = 2\\cos x + 1', labelAt: [240, 3.2] }
                        ],
                        points: [
                            { at: [0, 3], label: 'max (0°, 3)', labelAnchor: 'n' },
                            { at: [180, -1], label: 'min (180°, -1)', labelAnchor: 's' }
                        ]
                    }
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
                    description: 'Start from \\( -1 \\leq \\sin x \\leq 1 \\).',
                    workingLatex: '-1 \\leq \\sin x \\leq 1',
                    explanation: 'This is the range of the parent sine function.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply by 3 (vertical stretch).',
                    workingLatex: '-3 \\leq 3\\sin x \\leq 3',
                    explanation: 'Multiplying by a positive constant preserves the inequality direction.'
                },
                {
                    stepNumber: 3,
                    description: 'Subtract 2 (vertical translation).',
                    workingLatex: '-5 \\leq 3\\sin x - 2 \\leq 1',
                    explanation: 'Subtracting the same number from all three parts of the inequality preserves it.'
                },
                {
                    stepNumber: 4,
                    description: 'State the range.',
                    workingLatex: '-5 \\leq y \\leq 1',
                    explanation: 'Combine the two extreme values into a range.'
                },
                {
                    stepNumber: 5,
                    description: 'Locate the maximum.',
                    workingLatex: '\\sin x = 1 \\text{ at } x = 90^\\circ \\Rightarrow y = 3(1) - 2 = 1',
                    explanation: 'Sine reaches 1 at \\( x = 90^\\circ \\); substitute back.'
                },
                {
                    stepNumber: 6,
                    description: 'Locate the minimum.',
                    workingLatex: '\\sin x = -1 \\text{ at } x = 270^\\circ \\Rightarrow y = 3(-1) - 2 = -5',
                    explanation: 'Sine reaches \\( -1 \\) at \\( x = 270^\\circ \\); substitute back.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -5.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-5, -3, -1, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, -2], [4.5, -1.7646], [9, -1.5307], [13.5, -1.2997], [18, -1.0729], [22.5, -0.8519], [27, -0.638], [31.5, -0.4325], [36, -0.2366], [40.5, -0.0517], [45, 0.1213], [49.5, 0.2812], [54, 0.4271], [58.5, 0.5579], [63, 0.673], [67.5, 0.7716], [72, 0.8532], [76.5, 0.9171], [81, 0.9631], [85.5, 0.9908], [90, 1], [94.5, 0.9908], [99, 0.9631], [103.5, 0.9171], [108, 0.8532], [112.5, 0.7716], [117, 0.673], [121.5, 0.5579], [126, 0.4271], [130.5, 0.2812], [135, 0.1213], [139.5, -0.0517], [144, -0.2366], [148.5, -0.4325], [153, -0.638], [157.5, -0.8519], [162, -1.0729], [166.5, -1.2997], [171, -1.5307], [175.5, -1.7646], [180, -2], [184.5, -2.2354], [189, -2.4693], [193.5, -2.7003], [198, -2.9271], [202.5, -3.1481], [207, -3.362], [211.5, -3.5675], [216, -3.7634], [220.5, -3.9483], [225, -4.1213], [229.5, -4.2812], [234, -4.4271], [238.5, -4.5579], [243, -4.673], [247.5, -4.7716], [252, -4.8532], [256.5, -4.9171], [261, -4.9631], [265.5, -4.9908], [270, -5], [274.5, -4.9908], [279, -4.9631], [283.5, -4.9171], [288, -4.8532], [292.5, -4.7716], [297, -4.673], [301.5, -4.5579], [306, -4.4271], [310.5, -4.2812], [315, -4.1213], [319.5, -3.9483], [324, -3.7634], [328.5, -3.5675], [333, -3.362], [337.5, -3.1481], [342, -2.9271], [346.5, -2.7003], [351, -2.4693], [355.5, -2.2354], [360, -2]], color: '#2563eb', label: 'y = 3\\sin x - 2', labelAt: [240, 1.3] }
                        ],
                        points: [
                            { at: [90, 1], label: 'max (90°, 1)', labelAnchor: 'n' },
                            { at: [270, -5], label: 'min (270°, -5)', labelAnchor: 's' }
                        ]
                    }
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
                    description: 'Apply the horizontal translation first.',
                    workingLatex: 'y = \\sin(x - 45^\\circ)',
                    explanation: 'The vector \\( \\begin{pmatrix} 45 \\\\ 0 \\end{pmatrix} \\) shifts \\( 45^\\circ \\) to the right, so replace \\( x \\) with \\( x - 45 \\). A common slip is to forget to reverse the sign inside.'
                },
                {
                    stepNumber: 2,
                    description: 'Then apply the vertical stretch.',
                    workingLatex: 'y = 4\\sin(x - 45^\\circ)',
                    explanation: 'Multiplying the function by 4 stretches every \\( y \\)-value by a factor of 4; amplitude becomes 4.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -4.5,
                        yMax: 4.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, -2.8284], [4.5, -2.5978], [9, -2.3511], [13.5, -2.09], [18, -1.816], [22.5, -1.5307], [27, -1.2361], [31.5, -0.9338], [36, -0.6257], [40.5, -0.3138], [45, 0], [49.5, 0.3138], [54, 0.6257], [58.5, 0.9338], [63, 1.2361], [67.5, 1.5307], [72, 1.816], [76.5, 2.09], [81, 2.3511], [85.5, 2.5978], [90, 2.8284], [94.5, 3.0416], [99, 3.2361], [103.5, 3.4106], [108, 3.564], [112.5, 3.6955], [117, 3.8042], [121.5, 3.8895], [126, 3.9508], [130.5, 3.9877], [135, 4], [139.5, 3.9877], [144, 3.9508], [148.5, 3.8895], [153, 3.8042], [157.5, 3.6955], [162, 3.564], [166.5, 3.4106], [171, 3.2361], [175.5, 3.0416], [180, 2.8284], [184.5, 2.5978], [189, 2.3511], [193.5, 2.09], [198, 1.816], [202.5, 1.5307], [207, 1.2361], [211.5, 0.9338], [216, 0.6257], [220.5, 0.3138], [225, 0], [229.5, -0.3138], [234, -0.6257], [238.5, -0.9338], [243, -1.2361], [247.5, -1.5307], [252, -1.816], [256.5, -2.09], [261, -2.3511], [265.5, -2.5978], [270, -2.8284], [274.5, -3.0416], [279, -3.2361], [283.5, -3.4106], [288, -3.564], [292.5, -3.6955], [297, -3.8042], [301.5, -3.8895], [306, -3.9508], [310.5, -3.9877], [315, -4], [319.5, -3.9877], [324, -3.9508], [328.5, -3.8895], [333, -3.8042], [337.5, -3.6955], [342, -3.564], [346.5, -3.4106], [351, -3.2361], [355.5, -3.0416], [360, -2.8284]], color: '#2563eb', label: 'y = 4\\sin(x - 45°)', labelAt: [220, 4.2] }
                        ],
                        points: [
                            { at: [135, 4], label: 'max (135°, 4)', labelAnchor: 'n' },
                            { at: [315, -4], label: 'min (315°, -4)', labelAnchor: 's' },
                            { at: [45, 0], label: '(45°, 0)', labelAnchor: 'sw' },
                            { at: [225, 0], label: '(225°, 0)', labelAnchor: 'sw' }
                        ]
                    }
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
                    description: 'Part (a): read the amplitude from the coefficient.',
                    workingLatex: '|2| = 2',
                    explanation: 'For \\( y = a\\sin(\\dots) \\), the amplitude is \\( |a| \\).'
                },
                {
                    stepNumber: 2,
                    description: 'State the amplitude.',
                    workingLatex: '\\text{Amplitude} = 2',
                    explanation: 'Vertical stretch alone changes the amplitude.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): identify the coefficient of \\( x \\) inside.',
                    workingLatex: '\\text{Coefficient of } x = 1',
                    explanation: 'Horizontal translations do not affect the period; only an inside coefficient on \\( x \\) would.'
                },
                {
                    stepNumber: 4,
                    description: 'State the period.',
                    workingLatex: '\\text{Period} = \\tfrac{360^\\circ}{1} = 360^\\circ',
                    explanation: 'Same period as the parent.'
                },
                {
                    stepNumber: 5,
                    description: 'Part (c): substitute \\( x = 0 \\) for the \\( y \\)-intercept.',
                    workingLatex: 'y = 2\\sin(0^\\circ + 30^\\circ) = 2\\sin 30^\\circ',
                    explanation: 'Compute the value of the function at \\( x = 0 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Evaluate.',
                    workingLatex: '2 \\times \\tfrac{1}{2} = 1',
                    explanation: 'Use the exact value \\( \\sin 30^\\circ = 1/2 \\).',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -2.5,
                        yMax: 2.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-2, -1, 0, 1, 2],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 1], [4.5, 1.1328], [9, 1.2586], [13.5, 1.3767], [18, 1.4863], [22.5, 1.5867], [27, 1.6773], [31.5, 1.7576], [36, 1.8271], [40.5, 1.8853], [45, 1.9319], [49.5, 1.9665], [54, 1.989], [58.5, 1.9993], [63, 1.9973], [67.5, 1.9829], [72, 1.9563], [76.5, 1.9176], [81, 1.8672], [85.5, 1.8052], [90, 1.7321], [94.5, 1.6483], [99, 1.5543], [103.5, 1.4507], [108, 1.3383], [112.5, 1.2175], [117, 1.0893], [121.5, 0.9543], [126, 0.8135], [130.5, 0.6676], [135, 0.5176], [139.5, 0.3645], [144, 0.2091], [148.5, 0.0524], [153, -0.1047], [157.5, -0.2611], [162, -0.4158], [166.5, -0.568], [171, -0.7167], [175.5, -0.861], [180, -1], [184.5, -1.1328], [189, -1.2586], [193.5, -1.3767], [198, -1.4863], [202.5, -1.5867], [207, -1.6773], [211.5, -1.7576], [216, -1.8271], [220.5, -1.8853], [225, -1.9319], [229.5, -1.9665], [234, -1.989], [238.5, -1.9993], [243, -1.9973], [247.5, -1.9829], [252, -1.9563], [256.5, -1.9176], [261, -1.8672], [265.5, -1.8052], [270, -1.7321], [274.5, -1.6483], [279, -1.5543], [283.5, -1.4507], [288, -1.3383], [292.5, -1.2175], [297, -1.0893], [301.5, -0.9543], [306, -0.8135], [310.5, -0.6676], [315, -0.5176], [319.5, -0.3645], [324, -0.2091], [328.5, -0.0524], [333, 0.1047], [337.5, 0.2611], [342, 0.4158], [346.5, 0.568], [351, 0.7167], [355.5, 0.861], [360, 1]], color: '#2563eb', label: 'y = 2\\sin(x + 30°)', labelAt: [220, 2.2] }
                        ],
                        points: [
                            { at: [0, 1], label: 'y-int (0°, 1)', labelAnchor: 'ne' },
                            { at: [60, 2], label: 'max', labelAnchor: 'n' },
                            { at: [240, -2], label: 'min', labelAnchor: 's' }
                        ]
                    }
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
                    description: 'Part (a): read the amplitude.',
                    workingLatex: '|5| = 5',
                    explanation: 'The coefficient of \\( \\cos \\) gives the amplitude.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): apply the period formula.',
                    workingLatex: '\\tfrac{360^\\circ}{2} = 180^\\circ',
                    explanation: 'Inside coefficient of 2 halves the period.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): use the amplitude and absence of vertical shift.',
                    workingLatex: '-5 \\leq y \\leq 5',
                    explanation: 'No constant is added or subtracted, so the curve sits between \\( \\pm 5 \\).',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -5.5,
                        yMax: 5.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-5, 0, 5],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 5], [3, 4.9726], [6, 4.8907], [9, 4.7553], [12, 4.5677], [15, 4.3301], [18, 4.0451], [21, 3.7157], [24, 3.3457], [27, 2.9389], [30, 2.5], [33, 2.0337], [36, 1.5451], [39, 1.0396], [42, 0.5226], [45, 0], [48, -0.5226], [51, -1.0396], [54, -1.5451], [57, -2.0337], [60, -2.5], [63, -2.9389], [66, -3.3457], [69, -3.7157], [72, -4.0451], [75, -4.3301], [78, -4.5677], [81, -4.7553], [84, -4.8907], [87, -4.9726], [90, -5], [93, -4.9726], [96, -4.8907], [99, -4.7553], [102, -4.5677], [105, -4.3301], [108, -4.0451], [111, -3.7157], [114, -3.3457], [117, -2.9389], [120, -2.5], [123, -2.0337], [126, -1.5451], [129, -1.0396], [132, -0.5226], [135, 0], [138, 0.5226], [141, 1.0396], [144, 1.5451], [147, 2.0337], [150, 2.5], [153, 2.9389], [156, 3.3457], [159, 3.7157], [162, 4.0451], [165, 4.3301], [168, 4.5677], [171, 4.7553], [174, 4.8907], [177, 4.9726], [180, 5], [183, 4.9726], [186, 4.8907], [189, 4.7553], [192, 4.5677], [195, 4.3301], [198, 4.0451], [201, 3.7157], [204, 3.3457], [207, 2.9389], [210, 2.5], [213, 2.0337], [216, 1.5451], [219, 1.0396], [222, 0.5226], [225, 0], [228, -0.5226], [231, -1.0396], [234, -1.5451], [237, -2.0337], [240, -2.5], [243, -2.9389], [246, -3.3457], [249, -3.7157], [252, -4.0451], [255, -4.3301], [258, -4.5677], [261, -4.7553], [264, -4.8907], [267, -4.9726], [270, -5], [273, -4.9726], [276, -4.8907], [279, -4.7553], [282, -4.5677], [285, -4.3301], [288, -4.0451], [291, -3.7157], [294, -3.3457], [297, -2.9389], [300, -2.5], [303, -2.0337], [306, -1.5451], [309, -1.0396], [312, -0.5226], [315, 0], [318, 0.5226], [321, 1.0396], [324, 1.5451], [327, 2.0337], [330, 2.5], [333, 2.9389], [336, 3.3457], [339, 3.7157], [342, 4.0451], [345, 4.3301], [348, 4.5677], [351, 4.7553], [354, 4.8907], [357, 4.9726], [360, 5]], color: '#16a34a', label: 'y = 5\\cos 2x', labelAt: [260, 5.2] }
                        ],
                        points: [
                            { at: [0, 5], label: 'max', labelAnchor: 'n' },
                            { at: [90, -5], label: 'min', labelAnchor: 's' },
                            { at: [180, 5], label: 'max', labelAnchor: 'n' },
                            { at: [270, -5], label: 'min', labelAnchor: 's' }
                        ]
                    }
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
                    description: 'Identify the axis of symmetry on the sine graph.',
                    workingLatex: '\\text{Line of symmetry at } x = 90^\\circ',
                    explanation: 'Within \\( [0^\\circ, 180^\\circ] \\) the sine curve is symmetric about its peak at \\( x = 90^\\circ \\); this symmetry extends periodically.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the distance of each input from the axis.',
                    workingLatex: '|90^\\circ - x| \\text{ and } |90^\\circ - (180^\\circ - x)| = |x - 90^\\circ|',
                    explanation: 'Both \\( x \\) and \\( 180^\\circ - x \\) are the same distance from \\( x = 90^\\circ \\), on opposite sides.'
                },
                {
                    stepNumber: 3,
                    description: 'Conclude from symmetry that the outputs match.',
                    workingLatex: '\\sin(180^\\circ - x) = \\sin x',
                    explanation: 'Points equidistant from the axis of symmetry have equal heights, so the function values are identical.',
                    diagram: {
                        xMin: 0,
                        xMax: 180,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 30, 60, 90, 120, 150, 180],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [2.25, 0.0393], [4.5, 0.0785], [6.75, 0.1175], [9, 0.1564], [11.25, 0.1951], [13.5, 0.2334], [15.75, 0.2714], [18, 0.309], [20.25, 0.3461], [22.5, 0.3827], [24.75, 0.4187], [27, 0.454], [29.25, 0.4886], [31.5, 0.5225], [33.75, 0.5556], [36, 0.5878], [38.25, 0.6191], [40.5, 0.6494], [42.75, 0.6788], [45, 0.7071], [47.25, 0.7343], [49.5, 0.7604], [51.75, 0.7853], [54, 0.809], [56.25, 0.8315], [58.5, 0.8526], [60.75, 0.8725], [63, 0.891], [65.25, 0.9081], [67.5, 0.9239], [69.75, 0.9382], [72, 0.9511], [74.25, 0.9625], [76.5, 0.9724], [78.75, 0.9808], [81, 0.9877], [83.25, 0.9931], [85.5, 0.9969], [87.75, 0.9992], [90, 1], [92.25, 0.9992], [94.5, 0.9969], [96.75, 0.9931], [99, 0.9877], [101.25, 0.9808], [103.5, 0.9724], [105.75, 0.9625], [108, 0.9511], [110.25, 0.9382], [112.5, 0.9239], [114.75, 0.9081], [117, 0.891], [119.25, 0.8725], [121.5, 0.8526], [123.75, 0.8315], [126, 0.809], [128.25, 0.7853], [130.5, 0.7604], [132.75, 0.7343], [135, 0.7071], [137.25, 0.6788], [139.5, 0.6494], [141.75, 0.6191], [144, 0.5878], [146.25, 0.5556], [148.5, 0.5225], [150.75, 0.4886], [153, 0.454], [155.25, 0.4187], [157.5, 0.3827], [159.75, 0.3461], [162, 0.309], [164.25, 0.2714], [166.5, 0.2334], [168.75, 0.1951], [171, 0.1564], [173.25, 0.1175], [175.5, 0.0785], [177.75, 0.0393], [180, 0]], color: '#2563eb', label: 'y = \\sin x', labelAt: [130, 1.25] }
                        ],
                        lines: [
                            { from: [90, -1.5], to: [90, 1.5], color: '#dc2626', dashed: true, label: 'x = 90°', labelAt: [95, -1.2] }
                        ],
                        points: [
                            { at: [90, 1], label: 'axis of symmetry', labelAnchor: 'n' },
                            { at: [40, 0.6428], label: 'x', labelAnchor: 'sw' },
                            { at: [140, 0.6428], label: '180° - x', labelAnchor: 'se' }
                        ]
                    }
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
                    description: 'Use the even symmetry of cosine: \\( \\cos(-x) = \\cos x \\).',
                    workingLatex: '\\cos(-40^\\circ) = \\cos 40^\\circ',
                    explanation: 'The cosine graph is symmetric about the \\( y \\)-axis, so reflecting the input across zero leaves the output unchanged.'
                },
                {
                    stepNumber: 2,
                    description: 'Write the value.',
                    workingLatex: '\\cos(-40^\\circ) = 0.766',
                    explanation: 'Substitute the given value.'
                },
                {
                    stepNumber: 3,
                    description: 'For \\( \\cos 320^\\circ \\), use the identity \\( \\cos(360^\\circ - x) = \\cos x \\).',
                    workingLatex: '\\cos 320^\\circ = \\cos(360^\\circ - 40^\\circ) = \\cos 40^\\circ',
                    explanation: 'The cosine graph is symmetric about \\( x = 0 \\) (and by periodicity about any multiple of \\( 360^\\circ \\)). So \\( 320^\\circ \\) and \\( -40^\\circ \\) (one full turn apart) give the same value.'
                },
                {
                    stepNumber: 4,
                    description: 'State the answer.',
                    workingLatex: '\\cos 320^\\circ = 0.766',
                    explanation: 'Both values agree with the given \\( \\cos 40^\\circ \\).',
                    diagram: {
                        xMin: -90,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [-90, 0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[-90, 0], [-85.5, 0.0785], [-81, 0.1564], [-76.5, 0.2334], [-72, 0.309], [-67.5, 0.3827], [-63, 0.454], [-58.5, 0.5225], [-54, 0.5878], [-49.5, 0.6494], [-45, 0.7071], [-40.5, 0.7604], [-36, 0.809], [-31.5, 0.8526], [-27, 0.891], [-22.5, 0.9239], [-18, 0.9511], [-13.5, 0.9724], [-9, 0.9877], [-4.5, 0.9969], [0, 1], [4.5, 0.9969], [9, 0.9877], [13.5, 0.9724], [18, 0.9511], [22.5, 0.9239], [27, 0.891], [31.5, 0.8526], [36, 0.809], [40.5, 0.7604], [45, 0.7071], [49.5, 0.6494], [54, 0.5878], [58.5, 0.5225], [63, 0.454], [67.5, 0.3827], [72, 0.309], [76.5, 0.2334], [81, 0.1564], [85.5, 0.0785], [90, 0], [94.5, -0.0785], [99, -0.1564], [103.5, -0.2334], [108, -0.309], [112.5, -0.3827], [117, -0.454], [121.5, -0.5225], [126, -0.5878], [130.5, -0.6494], [135, -0.7071], [139.5, -0.7604], [144, -0.809], [148.5, -0.8526], [153, -0.891], [157.5, -0.9239], [162, -0.9511], [166.5, -0.9724], [171, -0.9877], [175.5, -0.9969], [180, -1], [184.5, -0.9969], [189, -0.9877], [193.5, -0.9724], [198, -0.9511], [202.5, -0.9239], [207, -0.891], [211.5, -0.8526], [216, -0.809], [220.5, -0.7604], [225, -0.7071], [229.5, -0.6494], [234, -0.5878], [238.5, -0.5225], [243, -0.454], [247.5, -0.3827], [252, -0.309], [256.5, -0.2334], [261, -0.1564], [265.5, -0.0785], [270, 0], [274.5, 0.0785], [279, 0.1564], [283.5, 0.2334], [288, 0.309], [292.5, 0.3827], [297, 0.454], [301.5, 0.5225], [306, 0.5878], [310.5, 0.6494], [315, 0.7071], [319.5, 0.7604], [324, 0.809], [328.5, 0.8526], [333, 0.891], [337.5, 0.9239], [342, 0.9511], [346.5, 0.9724], [351, 0.9877], [355.5, 0.9969], [360, 1]], color: '#16a34a', label: 'y = \\cos x', labelAt: [300, 1.25] }
                        ],
                        points: [
                            { at: [40, 0.766], label: '40°', labelAnchor: 'n' },
                            { at: [-40, 0.766], label: '-40°', labelAnchor: 'n' },
                            { at: [320, 0.766], label: '320°', labelAnchor: 'n' }
                        ]
                    }
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
                    description: 'Use the identity \\( \\sin(180^\\circ - x) = \\sin x \\).',
                    workingLatex: '\\sin 155^\\circ = \\sin(180^\\circ - 25^\\circ) = \\sin 25^\\circ',
                    explanation: 'Sine is symmetric about \\( x = 90^\\circ \\), so inputs equidistant from that line give equal outputs.'
                },
                {
                    stepNumber: 2,
                    description: 'Write the value.',
                    workingLatex: '\\sin 155^\\circ = 0.423',
                    explanation: 'Substitute the given numerical value.'
                },
                {
                    stepNumber: 3,
                    description: 'Use \\( \\sin(-x) = -\\sin x \\) (odd function).',
                    workingLatex: '\\sin(-25^\\circ) = -\\sin 25^\\circ',
                    explanation: 'The sine graph has rotational symmetry about the origin: reflecting through the origin negates the output.'
                },
                {
                    stepNumber: 4,
                    description: 'Compute.',
                    workingLatex: '-\\sin 25^\\circ = -0.423',
                    explanation: 'Negate the given value.',
                    diagram: {
                        xMin: -90,
                        xMax: 200,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [-90, 0, 90, 180],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[-90, -1], [-86.38, -0.998], [-82.75, -0.992], [-79.12, -0.982], [-75.5, -0.9681], [-71.88, -0.9504], [-68.25, -0.9288], [-64.62, -0.9035], [-61, -0.8746], [-57.38, -0.8422], [-53.75, -0.8064], [-50.12, -0.7674], [-46.5, -0.7254], [-42.88, -0.6804], [-39.25, -0.6327], [-35.62, -0.5825], [-32, -0.5299], [-28.38, -0.4752], [-24.75, -0.4187], [-21.12, -0.3604], [-17.5, -0.3007], [-13.88, -0.2398], [-10.25, -0.1779], [-6.62, -0.1154], [-3, -0.0523], [0.62, 0.0109], [4.25, 0.0741], [7.88, 0.137], [11.5, 0.1994], [15.12, 0.2609], [18.75, 0.3214], [22.38, 0.3807], [26, 0.4384], [29.62, 0.4943], [33.25, 0.5483], [36.88, 0.6001], [40.5, 0.6494], [44.12, 0.6962], [47.75, 0.7402], [51.38, 0.7812], [55, 0.8192], [58.62, 0.8538], [62.25, 0.885], [65.88, 0.9127], [69.5, 0.9367], [73.12, 0.9569], [76.75, 0.9734], [80.38, 0.9859], [84, 0.9945], [87.62, 0.9991], [91.25, 0.9998], [94.88, 0.9964], [98.5, 0.989], [102.12, 0.9777], [105.75, 0.9625], [109.38, 0.9434], [113, 0.9205], [116.62, 0.894], [120.25, 0.8638], [123.88, 0.8303], [127.5, 0.7934], [131.12, 0.7533], [134.75, 0.7102], [138.38, 0.6643], [142, 0.6157], [145.62, 0.5646], [149.25, 0.5113], [152.88, 0.4559], [156.5, 0.3987], [160.12, 0.34], [163.75, 0.2798], [167.38, 0.2186], [171, 0.1564], [174.62, 0.0937], [178.25, 0.0305], [181.88, -0.0327], [185.5, -0.0958], [189.12, -0.1586], [192.75, -0.2207], [196.38, -0.2819], [200, -0.342]], color: '#2563eb', label: 'y = \\sin x', labelAt: [150, 1.25] }
                        ],
                        points: [
                            { at: [25, 0.4226], label: '25°', labelAnchor: 'n' },
                            { at: [155, 0.4226], label: '155°', labelAnchor: 'n' },
                            { at: [-25, -0.4226], label: '-25°', labelAnchor: 's' }
                        ]
                    }
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
                    workingLatex: '\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = 0.5',
                    explanation: 'Reflect \\( 30^\\circ \\) about the line \\( x = 90^\\circ \\) to get \\( 150^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Record the first new point.',
                    workingLatex: '(150^\\circ,\\ 0.5)',
                    explanation: 'Same \\( y \\)-value, different \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Shift either point by one period \\( -360^\\circ \\).',
                    workingLatex: '\\sin(30^\\circ - 360^\\circ) = \\sin(-330^\\circ) = 0.5',
                    explanation: 'Sine has period \\( 360^\\circ \\), so the value is unchanged.'
                },
                {
                    stepNumber: 4,
                    description: 'Record the second new point.',
                    workingLatex: '(-330^\\circ,\\ 0.5)',
                    explanation: 'Inside the target interval.'
                },
                {
                    stepNumber: 5,
                    description: 'Shift \\( 150^\\circ \\) by \\( -360^\\circ \\) for a third point.',
                    workingLatex: '\\sin(150^\\circ - 360^\\circ) = \\sin(-210^\\circ) = 0.5',
                    explanation: 'Apply periodicity to the reflected point.',
                    diagram: {
                        xMin: -360,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [-360, -270, -180, -90, 0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[-360, 0], [-355, 0.0872], [-350, 0.1736], [-345, 0.2588], [-340, 0.342], [-335, 0.4226], [-330, 0.5], [-325, 0.5736], [-320, 0.6428], [-315, 0.7071], [-310, 0.766], [-305, 0.8192], [-300, 0.866], [-295, 0.9063], [-290, 0.9397], [-285, 0.9659], [-280, 0.9848], [-275, 0.9962], [-270, 1], [-265, 0.9962], [-260, 0.9848], [-255, 0.9659], [-250, 0.9397], [-245, 0.9063], [-240, 0.866], [-235, 0.8192], [-230, 0.766], [-225, 0.7071], [-220, 0.6428], [-215, 0.5736], [-210, 0.5], [-205, 0.4226], [-200, 0.342], [-195, 0.2588], [-190, 0.1736], [-185, 0.0872], [-180, 0], [-175, -0.0872], [-170, -0.1736], [-165, -0.2588], [-160, -0.342], [-155, -0.4226], [-150, -0.5], [-145, -0.5736], [-140, -0.6428], [-135, -0.7071], [-130, -0.766], [-125, -0.8192], [-120, -0.866], [-115, -0.9063], [-110, -0.9397], [-105, -0.9659], [-100, -0.9848], [-95, -0.9962], [-90, -1], [-85, -0.9962], [-80, -0.9848], [-75, -0.9659], [-70, -0.9397], [-65, -0.9063], [-60, -0.866], [-55, -0.8192], [-50, -0.766], [-45, -0.7071], [-40, -0.6428], [-35, -0.5736], [-30, -0.5], [-25, -0.4226], [-20, -0.342], [-15, -0.2588], [-10, -0.1736], [-5, -0.0872], [0, 0], [5, 0.0872], [10, 0.1736], [15, 0.2588], [20, 0.342], [25, 0.4226], [30, 0.5], [35, 0.5736], [40, 0.6428], [45, 0.7071], [50, 0.766], [55, 0.8192], [60, 0.866], [65, 0.9063], [70, 0.9397], [75, 0.9659], [80, 0.9848], [85, 0.9962], [90, 1], [95, 0.9962], [100, 0.9848], [105, 0.9659], [110, 0.9397], [115, 0.9063], [120, 0.866], [125, 0.8192], [130, 0.766], [135, 0.7071], [140, 0.6428], [145, 0.5736], [150, 0.5], [155, 0.4226], [160, 0.342], [165, 0.2588], [170, 0.1736], [175, 0.0872], [180, 0], [185, -0.0872], [190, -0.1736], [195, -0.2588], [200, -0.342], [205, -0.4226], [210, -0.5], [215, -0.5736], [220, -0.6428], [225, -0.7071], [230, -0.766], [235, -0.8192], [240, -0.866], [245, -0.9063], [250, -0.9397], [255, -0.9659], [260, -0.9848], [265, -0.9962], [270, -1], [275, -0.9962], [280, -0.9848], [285, -0.9659], [290, -0.9397], [295, -0.9063], [300, -0.866], [305, -0.8192], [310, -0.766], [315, -0.7071], [320, -0.6428], [325, -0.5736], [330, -0.5], [335, -0.4226], [340, -0.342], [345, -0.2588], [350, -0.1736], [355, -0.0872], [360, 0]], color: '#2563eb', label: 'y = \\sin x', labelAt: [240, 1.25] }
                        ],
                        points: [
                            { at: [30, 0.5], label: '(30°, 0.5)', labelAnchor: 'n' },
                            { at: [150, 0.5], label: '(150°, 0.5)', labelAnchor: 'n' },
                            { at: [-330, 0.5], label: '(-330°, 0.5)', labelAnchor: 'n' },
                            { at: [-210, 0.5], label: '(-210°, 0.5)', labelAnchor: 'n' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( (150^\\circ, 0.5),\\ (-330^\\circ, 0.5),\\ (-210^\\circ, 0.5) \\) (other answers possible).'
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
                    description: 'State the relation between max, min, amplitude and shift.',
                    workingLatex: 'A = \\tfrac{\\text{max} - \\text{min}}{2}, \\quad B = \\tfrac{\\text{max} + \\text{min}}{2}',
                    explanation: 'The maximum of \\( A\\sin x + B \\) is \\( A + B \\) and the minimum is \\( -A + B \\). Adding gives \\( 2B \\); subtracting gives \\( 2A \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the amplitude.',
                    workingLatex: 'A = \\tfrac{7 - 1}{2} = 3',
                    explanation: 'Half the distance between max and min.'
                },
                {
                    stepNumber: 3,
                    description: 'Compute the vertical shift.',
                    workingLatex: 'B = \\tfrac{7 + 1}{2} = 4',
                    explanation: 'The midline is the average of max and min, hence \\( y = B \\).',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: 0,
                        yMax: 8,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [1, 4, 7],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 4], [4.5, 4.2354], [9, 4.4693], [13.5, 4.7003], [18, 4.9271], [22.5, 5.1481], [27, 5.362], [31.5, 5.5675], [36, 5.7634], [40.5, 5.9483], [45, 6.1213], [49.5, 6.2812], [54, 6.4271], [58.5, 6.5579], [63, 6.673], [67.5, 6.7716], [72, 6.8532], [76.5, 6.9171], [81, 6.9631], [85.5, 6.9908], [90, 7], [94.5, 6.9908], [99, 6.9631], [103.5, 6.9171], [108, 6.8532], [112.5, 6.7716], [117, 6.673], [121.5, 6.5579], [126, 6.4271], [130.5, 6.2812], [135, 6.1213], [139.5, 5.9483], [144, 5.7634], [148.5, 5.5675], [153, 5.362], [157.5, 5.1481], [162, 4.9271], [166.5, 4.7003], [171, 4.4693], [175.5, 4.2354], [180, 4], [184.5, 3.7646], [189, 3.5307], [193.5, 3.2997], [198, 3.0729], [202.5, 2.8519], [207, 2.638], [211.5, 2.4325], [216, 2.2366], [220.5, 2.0517], [225, 1.8787], [229.5, 1.7188], [234, 1.5729], [238.5, 1.4421], [243, 1.327], [247.5, 1.2284], [252, 1.1468], [256.5, 1.0829], [261, 1.0369], [265.5, 1.0092], [270, 1], [274.5, 1.0092], [279, 1.0369], [283.5, 1.0829], [288, 1.1468], [292.5, 1.2284], [297, 1.327], [301.5, 1.4421], [306, 1.5729], [310.5, 1.7188], [315, 1.8787], [319.5, 2.0517], [324, 2.2366], [328.5, 2.4325], [333, 2.638], [337.5, 2.8519], [342, 3.0729], [346.5, 3.2997], [351, 3.5307], [355.5, 3.7646], [360, 4]], color: '#2563eb', label: 'y = 3\\sin x + 4', labelAt: [240, 7.5] }
                        ],
                        lines: [
                            { from: [0, 4], to: [360, 4], color: '#94a3b8', dashed: true, label: 'midline y=4', labelAt: [310, 4.3] }
                        ],
                        points: [
                            { at: [90, 7], label: 'max (90°, 7)', labelAnchor: 'n' },
                            { at: [270, 1], label: 'min (270°, 1)', labelAnchor: 's' }
                        ]
                    }
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
                    description: 'Apply the amplitude formula.',
                    workingLatex: 'A = \\tfrac{\\text{max} - \\text{min}}{2} = \\tfrac{2 - (-8)}{2} = \\tfrac{10}{2}',
                    explanation: 'Half the distance between maximum and minimum.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: 'A = 5',
                    explanation: 'Standard arithmetic.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the midline formula.',
                    workingLatex: 'B = \\tfrac{\\text{max} + \\text{min}}{2} = \\tfrac{2 + (-8)}{2}',
                    explanation: 'Midline is the average of max and min.'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify.',
                    workingLatex: 'B = -3',
                    explanation: 'Standard arithmetic.'
                },
                {
                    stepNumber: 5,
                    description: 'State the midline.',
                    workingLatex: 'y = -3',
                    explanation: 'The midline is the horizontal line \\( y = B \\) about which the curve oscillates.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -9,
                        yMax: 3,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-8, -3, 2],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 2], [4.5, 1.9846], [9, 1.9384], [13.5, 1.8618], [18, 1.7553], [22.5, 1.6194], [27, 1.455], [31.5, 1.2632], [36, 1.0451], [40.5, 0.802], [45, 0.5355], [49.5, 0.2472], [54, -0.0611], [58.5, -0.3875], [63, -0.73], [67.5, -1.0866], [72, -1.4549], [76.5, -1.8328], [81, -2.2178], [85.5, -2.6077], [90, -3], [94.5, -3.3923], [99, -3.7822], [103.5, -4.1672], [108, -4.5451], [112.5, -4.9134], [117, -5.27], [121.5, -5.6125], [126, -5.9389], [130.5, -6.2472], [135, -6.5355], [139.5, -6.802], [144, -7.0451], [148.5, -7.2632], [153, -7.455], [157.5, -7.6194], [162, -7.7553], [166.5, -7.8618], [171, -7.9384], [175.5, -7.9846], [180, -8], [184.5, -7.9846], [189, -7.9384], [193.5, -7.8618], [198, -7.7553], [202.5, -7.6194], [207, -7.455], [211.5, -7.2632], [216, -7.0451], [220.5, -6.802], [225, -6.5355], [229.5, -6.2472], [234, -5.9389], [238.5, -5.6125], [243, -5.27], [247.5, -4.9134], [252, -4.5451], [256.5, -4.1672], [261, -3.7822], [265.5, -3.3923], [270, -3], [274.5, -2.6077], [279, -2.2178], [283.5, -1.8328], [288, -1.4549], [292.5, -1.0866], [297, -0.73], [301.5, -0.3875], [306, -0.0611], [310.5, 0.2472], [315, 0.5355], [319.5, 0.802], [324, 1.0451], [328.5, 1.2632], [333, 1.455], [337.5, 1.6194], [342, 1.7553], [346.5, 1.8618], [351, 1.9384], [355.5, 1.9846], [360, 2]], color: '#16a34a', label: 'y = 5\\cos x - 3', labelAt: [240, 2.6] }
                        ],
                        lines: [
                            { from: [0, -3], to: [360, -3], color: '#94a3b8', dashed: true, label: 'midline y=-3', labelAt: [300, -2.5] }
                        ],
                        points: [
                            { at: [0, 2], label: 'max (0°, 2)', labelAnchor: 'n' },
                            { at: [180, -8], label: 'min (180°, -8)', labelAnchor: 's' }
                        ]
                    }
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
        questionText: '(a) Sketch the graph of \\( f(x) = \\cos x \\) for \\( -360^\\circ \\leq x \\leq 360^\\circ \\), marking clearly the coordinates of all intercepts and turning points. \\n\\n \\n\\n (b) On the same axes, sketch \\( g(x) = \\cos(x - 180^\\circ) \\). \\n\\n \\n\\n (c) Write \\( g(x) \\) in its simplest form.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'sketch', 'horizontal translation', 'cos x', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): list the maxima of \\( \\cos x \\).',
                    workingLatex: '(-360^\\circ, 1),\\ (0^\\circ, 1),\\ (360^\\circ, 1)',
                    explanation: 'Cosine peaks at every integer multiple of \\( 360^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'List the minima.',
                    workingLatex: '(-180^\\circ, -1),\\ (180^\\circ, -1)',
                    explanation: 'Cosine reaches its minimum half a period away from each maximum.'
                },
                {
                    stepNumber: 3,
                    description: 'List the \\( x \\)-intercepts.',
                    workingLatex: 'x = \\pm 90^\\circ,\\ \\pm 270^\\circ',
                    explanation: 'Cosine equals zero at odd multiples of \\( 90^\\circ \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): apply the horizontal translation to obtain \\( g(x) \\).',
                    workingLatex: 'g(x) = \\cos(x - 180^\\circ)',
                    explanation: 'This is \\( f(x) \\) shifted \\( 180^\\circ \\) to the right.'
                },
                {
                    stepNumber: 5,
                    description: 'Update the key points of \\( g(x) \\).',
                    workingLatex: '\\text{Maxima: } (-180^\\circ, 1), (180^\\circ, 1); \\quad \\text{Minima: } (0^\\circ, -1), (\\pm 360^\\circ, -1)',
                    explanation: 'Add \\( 180^\\circ \\) to every \\( x \\)-coordinate of \\( f \\)\\u2019s key points.'
                },
                {
                    stepNumber: 6,
                    description: 'Part (c): apply the cosine angle-subtraction identity.',
                    workingLatex: '\\cos(x - 180^\\circ) = \\cos x \\cos 180^\\circ + \\sin x \\sin 180^\\circ',
                    explanation: 'Use \\( \\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Substitute the standard values \\( \\cos 180^\\circ = -1, \\sin 180^\\circ = 0 \\).',
                    workingLatex: '= \\cos x \\cdot (-1) + \\sin x \\cdot 0 = -\\cos x',
                    explanation: 'A shift of half a period flips cosine.',
                    diagram: {
                        xMin: -360,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [-360, -270, -180, -90, 0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[-360, 1], [-354, 0.9945], [-348, 0.9781], [-342, 0.9511], [-336, 0.9135], [-330, 0.866], [-324, 0.809], [-318, 0.7431], [-312, 0.6691], [-306, 0.5878], [-300, 0.5], [-294, 0.4067], [-288, 0.309], [-282, 0.2079], [-276, 0.1045], [-270, 0], [-264, -0.1045], [-258, -0.2079], [-252, -0.309], [-246, -0.4067], [-240, -0.5], [-234, -0.5878], [-228, -0.6691], [-222, -0.7431], [-216, -0.809], [-210, -0.866], [-204, -0.9135], [-198, -0.9511], [-192, -0.9781], [-186, -0.9945], [-180, -1], [-174, -0.9945], [-168, -0.9781], [-162, -0.9511], [-156, -0.9135], [-150, -0.866], [-144, -0.809], [-138, -0.7431], [-132, -0.6691], [-126, -0.5878], [-120, -0.5], [-114, -0.4067], [-108, -0.309], [-102, -0.2079], [-96, -0.1045], [-90, 0], [-84, 0.1045], [-78, 0.2079], [-72, 0.309], [-66, 0.4067], [-60, 0.5], [-54, 0.5878], [-48, 0.6691], [-42, 0.7431], [-36, 0.809], [-30, 0.866], [-24, 0.9135], [-18, 0.9511], [-12, 0.9781], [-6, 0.9945], [0, 1], [6, 0.9945], [12, 0.9781], [18, 0.9511], [24, 0.9135], [30, 0.866], [36, 0.809], [42, 0.7431], [48, 0.6691], [54, 0.5878], [60, 0.5], [66, 0.4067], [72, 0.309], [78, 0.2079], [84, 0.1045], [90, 0], [96, -0.1045], [102, -0.2079], [108, -0.309], [114, -0.4067], [120, -0.5], [126, -0.5878], [132, -0.6691], [138, -0.7431], [144, -0.809], [150, -0.866], [156, -0.9135], [162, -0.9511], [168, -0.9781], [174, -0.9945], [180, -1], [186, -0.9945], [192, -0.9781], [198, -0.9511], [204, -0.9135], [210, -0.866], [216, -0.809], [222, -0.7431], [228, -0.6691], [234, -0.5878], [240, -0.5], [246, -0.4067], [252, -0.309], [258, -0.2079], [264, -0.1045], [270, 0], [276, 0.1045], [282, 0.2079], [288, 0.309], [294, 0.4067], [300, 0.5], [306, 0.5878], [312, 0.6691], [318, 0.7431], [324, 0.809], [330, 0.866], [336, 0.9135], [342, 0.9511], [348, 0.9781], [354, 0.9945], [360, 1]], color: '#94a3b8', label: 'f(x) = \\cos x', labelAt: [300, -1.2] },
                            { points: [[-360, -1], [-354, -0.9945], [-348, -0.9781], [-342, -0.9511], [-336, -0.9135], [-330, -0.866], [-324, -0.809], [-318, -0.7431], [-312, -0.6691], [-306, -0.5878], [-300, -0.5], [-294, -0.4067], [-288, -0.309], [-282, -0.2079], [-276, -0.1045], [-270, 0], [-264, 0.1045], [-258, 0.2079], [-252, 0.309], [-246, 0.4067], [-240, 0.5], [-234, 0.5878], [-228, 0.6691], [-222, 0.7431], [-216, 0.809], [-210, 0.866], [-204, 0.9135], [-198, 0.9511], [-192, 0.9781], [-186, 0.9945], [-180, 1], [-174, 0.9945], [-168, 0.9781], [-162, 0.9511], [-156, 0.9135], [-150, 0.866], [-144, 0.809], [-138, 0.7431], [-132, 0.6691], [-126, 0.5878], [-120, 0.5], [-114, 0.4067], [-108, 0.309], [-102, 0.2079], [-96, 0.1045], [-90, 0], [-84, -0.1045], [-78, -0.2079], [-72, -0.309], [-66, -0.4067], [-60, -0.5], [-54, -0.5878], [-48, -0.6691], [-42, -0.7431], [-36, -0.809], [-30, -0.866], [-24, -0.9135], [-18, -0.9511], [-12, -0.9781], [-6, -0.9945], [0, -1], [6, -0.9945], [12, -0.9781], [18, -0.9511], [24, -0.9135], [30, -0.866], [36, -0.809], [42, -0.7431], [48, -0.6691], [54, -0.5878], [60, -0.5], [66, -0.4067], [72, -0.309], [78, -0.2079], [84, -0.1045], [90, 0], [96, 0.1045], [102, 0.2079], [108, 0.309], [114, 0.4067], [120, 0.5], [126, 0.5878], [132, 0.6691], [138, 0.7431], [144, 0.809], [150, 0.866], [156, 0.9135], [162, 0.9511], [168, 0.9781], [174, 0.9945], [180, 1], [186, 0.9945], [192, 0.9781], [198, 0.9511], [204, 0.9135], [210, 0.866], [216, 0.809], [222, 0.7431], [228, 0.6691], [234, 0.5878], [240, 0.5], [246, 0.4067], [252, 0.309], [258, 0.2079], [264, 0.1045], [270, 0], [276, -0.1045], [282, -0.2079], [288, -0.309], [294, -0.4067], [300, -0.5], [306, -0.5878], [312, -0.6691], [318, -0.7431], [324, -0.809], [330, -0.866], [336, -0.9135], [342, -0.9511], [348, -0.9781], [354, -0.9945], [360, -1]], color: '#16a34a', label: 'g(x) = \\cos(x - 180°)', labelAt: [240, 1.25] }
                        ],
                        points: [
                            { at: [0, 1], label: '(0°, 1)', labelAnchor: 'n' },
                            { at: [180, 1], label: '(180°, 1)', labelAnchor: 'n' },
                            { at: [-180, 1], label: '(-180°, 1)', labelAnchor: 'n' },
                            { at: [0, -1], label: '(0°, -1)', labelAnchor: 's' }
                        ]
                    }
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
        questionText: '(a) Sketch \\( f(x) = \\tan x \\) for \\( -90^\\circ < x < 270^\\circ \\), marking asymptotes clearly. \\n\\n \\n\\n (b) Translate the graph \\( 90^\\circ \\) to the left and sketch it on the same axes. \\n\\n \\n\\n (c) Write down the equation of the translated graph.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'tan x', 'horizontal translation', 'asymptotes', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): identify the asymptotes of \\( \\tan x \\) inside the open interval.',
                    workingLatex: 'x = 90^\\circ',
                    explanation: 'Tangent has asymptotes at \\( 90^\\circ + 180^\\circ n \\); the only one strictly inside \\( (-90^\\circ, 270^\\circ) \\) is \\( x = 90^\\circ \\) (the endpoints \\( -90^\\circ \\) and \\( 270^\\circ \\) are excluded asymptotes themselves).'
                },
                {
                    stepNumber: 2,
                    description: 'Note the zeros and shape.',
                    workingLatex: '\\tan 0^\\circ = 0,\\ \\tan 180^\\circ = 0',
                    explanation: 'Tangent passes through zero at every integer multiple of \\( 180^\\circ \\), increasing monotonically between asymptotes from \\( -\\infty \\) to \\( +\\infty \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): translate \\( 90^\\circ \\) to the left.',
                    workingLatex: '\\text{Subtract } 90^\\circ \\text{ from every key } x',
                    explanation: 'Each asymptote and zero shifts left by \\( 90^\\circ \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Locate the new asymptotes.',
                    workingLatex: 'x = 0^\\circ \\text{ and } x = 180^\\circ',
                    explanation: 'From \\( 90^\\circ - 90^\\circ \\) and \\( 270^\\circ - 90^\\circ \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Part (c): a leftward shift of \\( 90^\\circ \\) replaces \\( x \\) by \\( x + 90^\\circ \\).',
                    workingLatex: 'y = \\tan(x + 90^\\circ)',
                    explanation: 'Inside changes invert in sign relative to the direction.',
                    diagram: {
                        xMin: -90,
                        xMax: 270,
                        yMin: -5,
                        yMax: 5,
                        xTicks: [-90, 0, 90, 180, 270],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[-77.8, -4.6234], [-75.76, -3.9408], [-73.73, -3.4258], [-71.69, -3.0225], [-69.66, -2.6974], [-67.62, -2.4292], [-65.59, -2.2036], [-63.56, -2.0107], [-61.52, -1.8435], [-59.49, -1.6969], [-57.45, -1.5669], [-55.42, -1.4507], [-53.39, -1.3458], [-51.35, -1.2505], [-49.32, -1.1634], [-47.28, -1.0831], [-45.25, -1.0088], [-43.22, -0.9396], [-41.18, -0.8749], [-39.15, -0.8141], [-37.11, -0.7567], [-35.08, -0.7023], [-33.05, -0.6505], [-31.01, -0.6011], [-28.98, -0.5538], [-26.94, -0.5083], [-24.91, -0.4644], [-22.88, -0.4219], [-20.84, -0.3807], [-18.81, -0.3406], [-16.77, -0.3014], [-14.74, -0.2631], [-12.7, -0.2254], [-10.67, -0.1884], [-8.64, -0.1519], [-6.6, -0.1157], [-4.57, -0.0799], [-2.53, -0.0443], [-0.5, -0.0087], [1.53, 0.0268], [3.57, 0.0624], [5.6, 0.0981], [7.64, 0.1341], [9.67, 0.1704], [11.7, 0.2072], [13.74, 0.2445], [15.77, 0.2825], [17.81, 0.3212], [19.84, 0.3608], [21.88, 0.4015], [23.91, 0.4433], [25.94, 0.4865], [27.98, 0.5312], [30.01, 0.5776], [32.05, 0.626], [34.08, 0.6765], [36.11, 0.7296], [38.15, 0.7854], [40.18, 0.8445], [42.22, 0.9073], [44.25, 0.9742], [46.28, 1.0459], [48.32, 1.1231], [50.35, 1.2067], [52.39, 1.2979], [54.42, 1.3978], [56.45, 1.5082], [58.49, 1.6311], [60.52, 1.7691], [62.56, 1.9256], [64.59, 2.1051], [66.62, 2.3136], [68.66, 2.5595], [70.69, 2.8545], [72.73, 3.216], [74.76, 3.6708], [76.8, 4.262]], color: '#94a3b8' },
                            { points: [[103.2, -4.262], [105.24, -3.6708], [107.27, -3.216], [109.31, -2.8545], [111.34, -2.5595], [113.38, -2.3136], [115.41, -2.1051], [117.44, -1.9256], [119.48, -1.7691], [121.51, -1.6311], [123.55, -1.5082], [125.58, -1.3978], [127.61, -1.2979], [129.65, -1.2067], [131.68, -1.1231], [133.72, -1.0459], [135.75, -0.9742], [137.78, -0.9073], [139.82, -0.8445], [141.85, -0.7854], [143.89, -0.7296], [145.92, -0.6765], [147.95, -0.626], [149.99, -0.5776], [152.02, -0.5312], [154.06, -0.4865], [156.09, -0.4433], [158.12, -0.4015], [160.16, -0.3608], [162.19, -0.3212], [164.23, -0.2825], [166.26, -0.2445], [168.3, -0.2072], [170.33, -0.1704], [172.36, -0.1341], [174.4, -0.0981], [176.43, -0.0624], [178.47, -0.0268], [180.5, 0.0087], [182.53, 0.0443], [184.57, 0.0799], [186.6, 0.1157], [188.64, 0.1519], [190.67, 0.1884], [192.7, 0.2254], [194.74, 0.2631], [196.77, 0.3014], [198.81, 0.3406], [200.84, 0.3807], [202.88, 0.4219], [204.91, 0.4644], [206.94, 0.5083], [208.98, 0.5538], [211.01, 0.6011], [213.05, 0.6505], [215.08, 0.7023], [217.11, 0.7567], [219.15, 0.8141], [221.18, 0.8749], [223.22, 0.9396], [225.25, 1.0088], [227.28, 1.0831], [229.32, 1.1634], [231.35, 1.2505], [233.39, 1.3458], [235.42, 1.4507], [237.45, 1.5669], [239.49, 1.6969], [241.52, 1.8435], [243.56, 2.0107], [245.59, 2.2036], [247.62, 2.4292], [249.66, 2.6974], [251.69, 3.0225], [253.73, 3.4258], [255.76, 3.9408], [257.8, 4.6234]], color: '#94a3b8' },
                            { points: [[-90, 0], [-87.93, 0.0361], [-85.86, 0.0724], [-83.79, 0.1088], [-81.72, 0.1455], [-79.65, 0.1826], [-77.58, 0.2202], [-75.51, 0.2584], [-73.44, 0.2973], [-71.37, 0.3371], [-69.3, 0.3778], [-67.23, 0.4197], [-65.16, 0.4629], [-63.09, 0.5075], [-61.02, 0.5538], [-58.95, 0.602], [-56.88, 0.6523], [-54.81, 0.7051], [-52.74, 0.7606], [-50.67, 0.8192], [-48.6, 0.8815], [-46.53, 0.9478], [-44.47, 1.0188], [-42.4, 1.0953], [-40.33, 1.1781], [-38.26, 1.2682], [-36.19, 1.367], [-34.12, 1.4761], [-32.05, 1.5974], [-29.98, 1.7337], [-27.91, 1.8881], [-25.84, 2.0652], [-23.77, 2.2708], [-21.7, 2.5132], [-19.63, 2.804], [-17.56, 3.1604], [-15.49, 3.6087], [-13.42, 4.1915], [-11.35, 4.9824]], color: '#dc2626' },
                            { points: [[13.14, -4.2849], [15.16, -3.691], [17.18, -3.2341], [19.2, -2.8709], [21.23, -2.5745], [23.25, -2.3276], [25.27, -2.1181], [27.3, -1.9378], [29.32, -1.7807], [31.34, -1.6421], [33.36, -1.5187], [35.39, -1.4078], [37.41, -1.3075], [39.43, -1.216], [41.45, -1.1321], [43.48, -1.0546], [45.5, -0.9827], [47.52, -0.9156], [49.55, -0.8527], [51.57, -0.7935], [53.59, -0.7375], [55.61, -0.6844], [57.64, -0.6337], [59.66, -0.5853], [61.68, -0.5389], [63.7, -0.4941], [65.73, -0.4509], [67.75, -0.4091], [69.77, -0.3685], [71.8, -0.3289], [73.82, -0.2902], [75.84, -0.2523], [77.86, -0.215], [79.89, -0.1784], [81.91, -0.1422], [83.93, -0.1063], [85.95, -0.0707], [87.98, -0.0353], [90, 0], [92.02, 0.0353], [94.05, 0.0707], [96.07, 0.1063], [98.09, 0.1422], [100.11, 0.1784], [102.14, 0.215], [104.16, 0.2523], [106.18, 0.2902], [108.2, 0.3289], [110.23, 0.3685], [112.25, 0.4091], [114.27, 0.4509], [116.3, 0.4941], [118.32, 0.5389], [120.34, 0.5853], [122.36, 0.6337], [124.39, 0.6844], [126.41, 0.7375], [128.43, 0.7935], [130.45, 0.8527], [132.48, 0.9156], [134.5, 0.9827], [136.52, 1.0546], [138.55, 1.1321], [140.57, 1.216], [142.59, 1.3075], [144.61, 1.4078], [146.64, 1.5187], [148.66, 1.6421], [150.68, 1.7807], [152.7, 1.9378], [154.73, 2.1181], [156.75, 2.3276], [158.77, 2.5745], [160.8, 2.8709], [162.82, 3.2341], [164.84, 3.691], [166.86, 4.2849]], color: '#dc2626' },
                            { points: [[191.35, -4.9824], [193.42, -4.1915], [195.49, -3.6087], [197.56, -3.1604], [199.63, -2.804], [201.7, -2.5132], [203.77, -2.2708], [205.84, -2.0652], [207.91, -1.8881], [209.98, -1.7337], [212.05, -1.5974], [214.12, -1.4761], [216.19, -1.367], [218.26, -1.2682], [220.33, -1.1781], [222.4, -1.0953], [224.47, -1.0188], [226.53, -0.9478], [228.6, -0.8815], [230.67, -0.8192], [232.74, -0.7606], [234.81, -0.7051], [236.88, -0.6523], [238.95, -0.602], [241.02, -0.5538], [243.09, -0.5075], [245.16, -0.4629], [247.23, -0.4197], [249.3, -0.3778], [251.37, -0.3371], [253.44, -0.2973], [255.51, -0.2584], [257.58, -0.2202], [259.65, -0.1826], [261.72, -0.1455], [263.79, -0.1088], [265.86, -0.0724], [267.93, -0.0361], [270, 0]], color: '#dc2626' }
                        ],
                        lines: [
                            { from: [90, -5], to: [90, 5], color: '#cbd5e1', dashed: true, label: 'x=90° (orig)', labelAt: [95, -4.5] },
                            { from: [0, -5], to: [0, 5], color: '#94a3b8', dashed: true, label: 'x=0° (new)', labelAt: [5, 4.3] },
                            { from: [180, -5], to: [180, 5], color: '#94a3b8', dashed: true, label: 'x=180° (new)', labelAt: [185, 4.3] }
                        ]
                    }
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
        questionText: '(a) On the same axes, sketch \\( y = \\sin x \\) and \\( y = \\sin 3x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). \\n\\n \\n\\n (b) State the number of solutions to \\( \\sin x = \\sin 3x \\) in the open interval \\( 0^\\circ < x < 360^\\circ \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'horizontal compression', 'sin x', 'intersections', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): \\( y = \\sin x \\) has period \\( 360^\\circ \\).',
                    workingLatex: '\\text{Max } (90^\\circ, 1),\\ \\text{Min } (270^\\circ, -1)',
                    explanation: 'One complete cycle in the interval.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): \\( y = \\sin 3x \\) has period \\( 120^\\circ \\).',
                    workingLatex: '\\text{Maxima: } 30^\\circ, 150^\\circ, 270^\\circ; \\quad \\text{Minima: } 90^\\circ, 210^\\circ, 330^\\circ',
                    explanation: 'Three full cycles fit in \\( [0^\\circ, 360^\\circ] \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): rearrange \\( \\sin 3x - \\sin x = 0 \\).',
                    workingLatex: '\\sin 3x - \\sin x = 0',
                    explanation: 'Bring the two terms to one side so we can apply a sum-to-product identity.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the identity \\( \\sin A - \\sin B = 2\\cos\\tfrac{A+B}{2}\\sin\\tfrac{A-B}{2} \\).',
                    workingLatex: '2\\cos 2x \\sin x = 0',
                    explanation: 'With \\( A = 3x \\) and \\( B = x \\) we get \\( \\tfrac{A+B}{2} = 2x \\) and \\( \\tfrac{A-B}{2} = x \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Set each factor to zero in \\( 0^\\circ < x < 360^\\circ \\).',
                    workingLatex: '\\sin x = 0 \\Rightarrow x = 180^\\circ',
                    explanation: '\\( x = 0^\\circ \\) and \\( 360^\\circ \\) are excluded by the open interval, leaving only the single solution.'
                },
                {
                    stepNumber: 6,
                    description: 'Solve \\( \\cos 2x = 0 \\).',
                    workingLatex: '2x = 90^\\circ, 270^\\circ, 450^\\circ, 630^\\circ \\Rightarrow x = 45^\\circ, 135^\\circ, 225^\\circ, 315^\\circ',
                    explanation: 'Cosine is zero at odd multiples of \\( 90^\\circ \\); dividing by 2 gives four values inside the interval.'
                },
                {
                    stepNumber: 7,
                    description: 'Count all solutions.',
                    workingLatex: 'x = 45^\\circ, 135^\\circ, 180^\\circ, 225^\\circ, 315^\\circ \\quad (5 \\text{ solutions})',
                    explanation: 'Combining both factor sets gives five distinct intersections in the open interval.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [4.5, 0.0785], [9, 0.1564], [13.5, 0.2334], [18, 0.309], [22.5, 0.3827], [27, 0.454], [31.5, 0.5225], [36, 0.5878], [40.5, 0.6494], [45, 0.7071], [49.5, 0.7604], [54, 0.809], [58.5, 0.8526], [63, 0.891], [67.5, 0.9239], [72, 0.9511], [76.5, 0.9724], [81, 0.9877], [85.5, 0.9969], [90, 1], [94.5, 0.9969], [99, 0.9877], [103.5, 0.9724], [108, 0.9511], [112.5, 0.9239], [117, 0.891], [121.5, 0.8526], [126, 0.809], [130.5, 0.7604], [135, 0.7071], [139.5, 0.6494], [144, 0.5878], [148.5, 0.5225], [153, 0.454], [157.5, 0.3827], [162, 0.309], [166.5, 0.2334], [171, 0.1564], [175.5, 0.0785], [180, 0], [184.5, -0.0785], [189, -0.1564], [193.5, -0.2334], [198, -0.309], [202.5, -0.3827], [207, -0.454], [211.5, -0.5225], [216, -0.5878], [220.5, -0.6494], [225, -0.7071], [229.5, -0.7604], [234, -0.809], [238.5, -0.8526], [243, -0.891], [247.5, -0.9239], [252, -0.9511], [256.5, -0.9724], [261, -0.9877], [265.5, -0.9969], [270, -1], [274.5, -0.9969], [279, -0.9877], [283.5, -0.9724], [288, -0.9511], [292.5, -0.9239], [297, -0.891], [301.5, -0.8526], [306, -0.809], [310.5, -0.7604], [315, -0.7071], [319.5, -0.6494], [324, -0.5878], [328.5, -0.5225], [333, -0.454], [337.5, -0.3827], [342, -0.309], [346.5, -0.2334], [351, -0.1564], [355.5, -0.0785], [360, 0]], color: '#2563eb', label: 'y = \\sin x', labelAt: [310, 1.2] },
                            { points: [[0, 0], [2, 0.1045], [4, 0.2079], [6, 0.309], [8, 0.4067], [10, 0.5], [12, 0.5878], [14, 0.6691], [16, 0.7431], [18, 0.809], [20, 0.866], [22, 0.9135], [24, 0.9511], [26, 0.9781], [28, 0.9945], [30, 1], [32, 0.9945], [34, 0.9781], [36, 0.9511], [38, 0.9135], [40, 0.866], [42, 0.809], [44, 0.7431], [46, 0.6691], [48, 0.5878], [50, 0.5], [52, 0.4067], [54, 0.309], [56, 0.2079], [58, 0.1045], [60, 0], [62, -0.1045], [64, -0.2079], [66, -0.309], [68, -0.4067], [70, -0.5], [72, -0.5878], [74, -0.6691], [76, -0.7431], [78, -0.809], [80, -0.866], [82, -0.9135], [84, -0.9511], [86, -0.9781], [88, -0.9945], [90, -1], [92, -0.9945], [94, -0.9781], [96, -0.9511], [98, -0.9135], [100, -0.866], [102, -0.809], [104, -0.7431], [106, -0.6691], [108, -0.5878], [110, -0.5], [112, -0.4067], [114, -0.309], [116, -0.2079], [118, -0.1045], [120, 0], [122, 0.1045], [124, 0.2079], [126, 0.309], [128, 0.4067], [130, 0.5], [132, 0.5878], [134, 0.6691], [136, 0.7431], [138, 0.809], [140, 0.866], [142, 0.9135], [144, 0.9511], [146, 0.9781], [148, 0.9945], [150, 1], [152, 0.9945], [154, 0.9781], [156, 0.9511], [158, 0.9135], [160, 0.866], [162, 0.809], [164, 0.7431], [166, 0.6691], [168, 0.5878], [170, 0.5], [172, 0.4067], [174, 0.309], [176, 0.2079], [178, 0.1045], [180, 0], [182, -0.1045], [184, -0.2079], [186, -0.309], [188, -0.4067], [190, -0.5], [192, -0.5878], [194, -0.6691], [196, -0.7431], [198, -0.809], [200, -0.866], [202, -0.9135], [204, -0.9511], [206, -0.9781], [208, -0.9945], [210, -1], [212, -0.9945], [214, -0.9781], [216, -0.9511], [218, -0.9135], [220, -0.866], [222, -0.809], [224, -0.7431], [226, -0.6691], [228, -0.5878], [230, -0.5], [232, -0.4067], [234, -0.309], [236, -0.2079], [238, -0.1045], [240, 0], [242, 0.1045], [244, 0.2079], [246, 0.309], [248, 0.4067], [250, 0.5], [252, 0.5878], [254, 0.6691], [256, 0.7431], [258, 0.809], [260, 0.866], [262, 0.9135], [264, 0.9511], [266, 0.9781], [268, 0.9945], [270, 1], [272, 0.9945], [274, 0.9781], [276, 0.9511], [278, 0.9135], [280, 0.866], [282, 0.809], [284, 0.7431], [286, 0.6691], [288, 0.5878], [290, 0.5], [292, 0.4067], [294, 0.309], [296, 0.2079], [298, 0.1045], [300, 0], [302, -0.1045], [304, -0.2079], [306, -0.309], [308, -0.4067], [310, -0.5], [312, -0.5878], [314, -0.6691], [316, -0.7431], [318, -0.809], [320, -0.866], [322, -0.9135], [324, -0.9511], [326, -0.9781], [328, -0.9945], [330, -1], [332, -0.9945], [334, -0.9781], [336, -0.9511], [338, -0.9135], [340, -0.866], [342, -0.809], [344, -0.7431], [346, -0.6691], [348, -0.5878], [350, -0.5], [352, -0.4067], [354, -0.309], [356, -0.2079], [358, -0.1045], [360, 0]], color: '#dc2626', label: 'y = \\sin 3x', labelAt: [250, -1.2] }
                        ],
                        points: [
                            { at: [45, 0.7071], label: '45°', labelAnchor: 'n' },
                            { at: [135, 0.7071], label: '135°', labelAnchor: 'n' },
                            { at: [180, 0], label: '180°', labelAnchor: 'sw' },
                            { at: [225, -0.7071], label: '225°', labelAnchor: 's' },
                            { at: [315, -0.7071], label: '315°', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: '(b) 5 solutions in \\( 0^\\circ < x < 360^\\circ \\).'
        }
    },
    {
        id: 't3-034',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 34',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = a\\sin(bx) + c \\) has amplitude 4, period \\( 90^\\circ \\), and passes through \\( (0^\\circ, -1) \\). \\n\\n \\n\\n Find the values of \\( a \\), \\( b \\), and \\( c \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'find parameters', 'amplitude', 'period', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the amplitude to find \\( a \\).',
                    workingLatex: '|a| = 4 \\Rightarrow a = 4',
                    explanation: 'For \\( y = a\\sin(\\dots) + c \\), the amplitude is \\( |a| \\). Take the positive root unless the question requires the reflected version.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the period formula.',
                    workingLatex: '\\tfrac{360^\\circ}{b} = 90^\\circ',
                    explanation: 'The period of \\( \\sin(bx) \\) is \\( 360^\\circ/b \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( b \\).',
                    workingLatex: 'b = \\tfrac{360^\\circ}{90^\\circ} = 4',
                    explanation: 'Standard arithmetic.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute the point \\( (0^\\circ, -1) \\) and the known values of \\( a, b \\).',
                    workingLatex: '-1 = 4\\sin(4 \\cdot 0^\\circ) + c = 4(0) + c',
                    explanation: '\\( \\sin 0^\\circ = 0 \\), so the sine term vanishes at \\( x = 0 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for \\( c \\).',
                    workingLatex: 'c = -1',
                    explanation: 'Read off directly.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -5.5,
                        yMax: 3.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-5, -1, 3],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, -1], [2, -0.4433], [4, 0.1025], [6, 0.6269], [8, 1.1197], [10, 1.5712], [12, 1.9726], [14, 2.3162], [16, 2.5952], [18, 2.8042], [20, 2.9392], [22, 2.9976], [24, 2.9781], [26, 2.8812], [28, 2.7087], [30, 2.4641], [32, 2.152], [34, 1.7786], [36, 1.3511], [38, 0.8779], [40, 0.3681], [42, -0.1684], [44, -0.721], [46, -1.279], [48, -1.8316], [50, -2.3681], [52, -2.8779], [54, -3.3511], [56, -3.7786], [58, -4.152], [60, -4.4641], [62, -4.7087], [64, -4.8812], [66, -4.9781], [68, -4.9976], [70, -4.9392], [72, -4.8042], [74, -4.5952], [76, -4.3162], [78, -3.9726], [80, -3.5712], [82, -3.1197], [84, -2.6269], [86, -2.1025], [88, -1.5567], [90, -1], [92, -0.4433], [94, 0.1025], [96, 0.6269], [98, 1.1197], [100, 1.5712], [102, 1.9726], [104, 2.3162], [106, 2.5952], [108, 2.8042], [110, 2.9392], [112, 2.9976], [114, 2.9781], [116, 2.8812], [118, 2.7087], [120, 2.4641], [122, 2.152], [124, 1.7786], [126, 1.3511], [128, 0.8779], [130, 0.3681], [132, -0.1684], [134, -0.721], [136, -1.279], [138, -1.8316], [140, -2.3681], [142, -2.8779], [144, -3.3511], [146, -3.7786], [148, -4.152], [150, -4.4641], [152, -4.7087], [154, -4.8812], [156, -4.9781], [158, -4.9976], [160, -4.9392], [162, -4.8042], [164, -4.5952], [166, -4.3162], [168, -3.9726], [170, -3.5712], [172, -3.1197], [174, -2.6269], [176, -2.1025], [178, -1.5567], [180, -1], [182, -0.4433], [184, 0.1025], [186, 0.6269], [188, 1.1197], [190, 1.5712], [192, 1.9726], [194, 2.3162], [196, 2.5952], [198, 2.8042], [200, 2.9392], [202, 2.9976], [204, 2.9781], [206, 2.8812], [208, 2.7087], [210, 2.4641], [212, 2.152], [214, 1.7786], [216, 1.3511], [218, 0.8779], [220, 0.3681], [222, -0.1684], [224, -0.721], [226, -1.279], [228, -1.8316], [230, -2.3681], [232, -2.8779], [234, -3.3511], [236, -3.7786], [238, -4.152], [240, -4.4641], [242, -4.7087], [244, -4.8812], [246, -4.9781], [248, -4.9976], [250, -4.9392], [252, -4.8042], [254, -4.5952], [256, -4.3162], [258, -3.9726], [260, -3.5712], [262, -3.1197], [264, -2.6269], [266, -2.1025], [268, -1.5567], [270, -1], [272, -0.4433], [274, 0.1025], [276, 0.6269], [278, 1.1197], [280, 1.5712], [282, 1.9726], [284, 2.3162], [286, 2.5952], [288, 2.8042], [290, 2.9392], [292, 2.9976], [294, 2.9781], [296, 2.8812], [298, 2.7087], [300, 2.4641], [302, 2.152], [304, 1.7786], [306, 1.3511], [308, 0.8779], [310, 0.3681], [312, -0.1684], [314, -0.721], [316, -1.279], [318, -1.8316], [320, -2.3681], [322, -2.8779], [324, -3.3511], [326, -3.7786], [328, -4.152], [330, -4.4641], [332, -4.7087], [334, -4.8812], [336, -4.9781], [338, -4.9976], [340, -4.9392], [342, -4.8042], [344, -4.5952], [346, -4.3162], [348, -3.9726], [350, -3.5712], [352, -3.1197], [354, -2.6269], [356, -2.1025], [358, -1.5567], [360, -1]], color: '#2563eb', label: 'y = 4\\sin(4x) - 1', labelAt: [240, 3.2] }
                        ],
                        points: [
                            { at: [0, -1], label: 'y-int (0, -1)', labelAnchor: 'sw' }
                        ]
                    }
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
        questionText: '(a) Describe fully the two transformations that map \\( y = \\cos x \\) onto \\( y = -3\\cos 2x \\). \\n\\n \\n\\n (b) State the amplitude, period, and range of \\( y = -3\\cos 2x \\). \\n\\n \\n\\n (c) Find the coordinates of the first maximum point of \\( y = -3\\cos 2x \\) for \\( x > 0^\\circ \\).',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'combined transformations', 'cos x', 'maximum', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): identify the inside change.',
                    workingLatex: '\\cos x \\longrightarrow \\cos 2x',
                    explanation: 'Replacing \\( x \\) with \\( 2x \\) compresses the graph horizontally by scale factor \\( \\tfrac{1}{2} \\), halving the period to \\( 180^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the outside change.',
                    workingLatex: '\\cos 2x \\longrightarrow -3\\cos 2x',
                    explanation: 'Multiplying by \\( -3 \\) is a vertical stretch by factor 3 combined with reflection in the \\( x \\)-axis.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): state the amplitude.',
                    workingLatex: '|-3| = 3',
                    explanation: 'Amplitude is the absolute value of the leading coefficient.'
                },
                {
                    stepNumber: 4,
                    description: 'State the period.',
                    workingLatex: '\\tfrac{360^\\circ}{2} = 180^\\circ',
                    explanation: 'Apply the period formula with \\( b = 2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'State the range.',
                    workingLatex: '-3 \\leq y \\leq 3',
                    explanation: 'Amplitude 3 with no vertical shift.'
                },
                {
                    stepNumber: 6,
                    description: 'Part (c): maximise \\( y = -3\\cos 2x \\).',
                    workingLatex: '\\text{Max when } \\cos 2x = -1',
                    explanation: 'A factor \\( -3 \\) is largest when \\( \\cos 2x \\) is smallest, i.e., \\( -1 \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Solve \\( \\cos 2x = -1 \\) for smallest positive \\( x \\).',
                    workingLatex: '2x = 180^\\circ \\Rightarrow x = 90^\\circ',
                    explanation: 'Cosine first reaches \\( -1 \\) at \\( 180^\\circ \\), giving \\( x = 90^\\circ \\).'
                },
                {
                    stepNumber: 8,
                    description: 'Compute the \\( y \\)-value.',
                    workingLatex: 'y = -3(-1) = 3 \\Rightarrow (90^\\circ,\\ 3)',
                    explanation: 'Substitute back to confirm the maximum value of 3 is attained.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -3.5,
                        yMax: 3.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-3, 0, 3],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, -3], [3, -2.9836], [6, -2.9344], [9, -2.8532], [12, -2.7406], [15, -2.5981], [18, -2.4271], [21, -2.2294], [24, -2.0074], [27, -1.7634], [30, -1.5], [33, -1.2202], [36, -0.9271], [39, -0.6237], [42, -0.3136], [45, 0], [48, 0.3136], [51, 0.6237], [54, 0.9271], [57, 1.2202], [60, 1.5], [63, 1.7634], [66, 2.0074], [69, 2.2294], [72, 2.4271], [75, 2.5981], [78, 2.7406], [81, 2.8532], [84, 2.9344], [87, 2.9836], [90, 3], [93, 2.9836], [96, 2.9344], [99, 2.8532], [102, 2.7406], [105, 2.5981], [108, 2.4271], [111, 2.2294], [114, 2.0074], [117, 1.7634], [120, 1.5], [123, 1.2202], [126, 0.9271], [129, 0.6237], [132, 0.3136], [135, 0], [138, -0.3136], [141, -0.6237], [144, -0.9271], [147, -1.2202], [150, -1.5], [153, -1.7634], [156, -2.0074], [159, -2.2294], [162, -2.4271], [165, -2.5981], [168, -2.7406], [171, -2.8532], [174, -2.9344], [177, -2.9836], [180, -3], [183, -2.9836], [186, -2.9344], [189, -2.8532], [192, -2.7406], [195, -2.5981], [198, -2.4271], [201, -2.2294], [204, -2.0074], [207, -1.7634], [210, -1.5], [213, -1.2202], [216, -0.9271], [219, -0.6237], [222, -0.3136], [225, 0], [228, 0.3136], [231, 0.6237], [234, 0.9271], [237, 1.2202], [240, 1.5], [243, 1.7634], [246, 2.0074], [249, 2.2294], [252, 2.4271], [255, 2.5981], [258, 2.7406], [261, 2.8532], [264, 2.9344], [267, 2.9836], [270, 3], [273, 2.9836], [276, 2.9344], [279, 2.8532], [282, 2.7406], [285, 2.5981], [288, 2.4271], [291, 2.2294], [294, 2.0074], [297, 1.7634], [300, 1.5], [303, 1.2202], [306, 0.9271], [309, 0.6237], [312, 0.3136], [315, 0], [318, -0.3136], [321, -0.6237], [324, -0.9271], [327, -1.2202], [330, -1.5], [333, -1.7634], [336, -2.0074], [339, -2.2294], [342, -2.4271], [345, -2.5981], [348, -2.7406], [351, -2.8532], [354, -2.9344], [357, -2.9836], [360, -3]], color: '#16a34a', label: 'y = -3\\cos 2x', labelAt: [260, 3.2] }
                        ],
                        points: [
                            { at: [0, -3], label: '(0°, -3)', labelAnchor: 's' },
                            { at: [90, 3], label: 'max (90°, 3)', labelAnchor: 'n' },
                            { at: [180, -3], label: '(180°, -3)', labelAnchor: 's' },
                            { at: [270, 3], label: '(270°, 3)', labelAnchor: 'n' }
                        ]
                    }
                }
            ],
            finalAnswer: '(b) Amplitude \\( = 3 \\), Period \\( = 180^\\circ \\), Range \\( = [-3, 3] \\). (c) First maximum at \\( (90^\\circ, 3) \\).'
        }
    },
    {
        id: 't3-036',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 36',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\sin x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). State the period and amplitude.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'sin x', 'period', 'amplitude', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the period.',
                    workingLatex: '\\text{Period} = 360^\\circ',
                    explanation: 'Sine returns to its starting value after one full revolution.'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the amplitude from the unit-circle definition.',
                    workingLatex: '\\text{Max} = 1,\\ \\text{Min} = -1 \\Rightarrow \\text{Amplitude} = 1',
                    explanation: 'Sine ranges between \\( \\pm 1 \\); amplitude is half this range.'
                },
                {
                    stepNumber: 3,
                    description: 'Mark the key points.',
                    workingLatex: '(0^\\circ, 0),\\ (90^\\circ, 1),\\ (180^\\circ, 0),\\ (270^\\circ, -1),\\ (360^\\circ, 0)',
                    explanation: 'Five reference points are enough to sketch a smooth standard sine wave.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [4.5, 0.0785], [9, 0.1564], [13.5, 0.2334], [18, 0.309], [22.5, 0.3827], [27, 0.454], [31.5, 0.5225], [36, 0.5878], [40.5, 0.6494], [45, 0.7071], [49.5, 0.7604], [54, 0.809], [58.5, 0.8526], [63, 0.891], [67.5, 0.9239], [72, 0.9511], [76.5, 0.9724], [81, 0.9877], [85.5, 0.9969], [90, 1], [94.5, 0.9969], [99, 0.9877], [103.5, 0.9724], [108, 0.9511], [112.5, 0.9239], [117, 0.891], [121.5, 0.8526], [126, 0.809], [130.5, 0.7604], [135, 0.7071], [139.5, 0.6494], [144, 0.5878], [148.5, 0.5225], [153, 0.454], [157.5, 0.3827], [162, 0.309], [166.5, 0.2334], [171, 0.1564], [175.5, 0.0785], [180, 0], [184.5, -0.0785], [189, -0.1564], [193.5, -0.2334], [198, -0.309], [202.5, -0.3827], [207, -0.454], [211.5, -0.5225], [216, -0.5878], [220.5, -0.6494], [225, -0.7071], [229.5, -0.7604], [234, -0.809], [238.5, -0.8526], [243, -0.891], [247.5, -0.9239], [252, -0.9511], [256.5, -0.9724], [261, -0.9877], [265.5, -0.9969], [270, -1], [274.5, -0.9969], [279, -0.9877], [283.5, -0.9724], [288, -0.9511], [292.5, -0.9239], [297, -0.891], [301.5, -0.8526], [306, -0.809], [310.5, -0.7604], [315, -0.7071], [319.5, -0.6494], [324, -0.5878], [328.5, -0.5225], [333, -0.454], [337.5, -0.3827], [342, -0.309], [346.5, -0.2334], [351, -0.1564], [355.5, -0.0785], [360, 0]], color: '#2563eb', label: 'y = \\sin x', labelAt: [300, 1.25] }
                        ],
                        points: [
                            { at: [0, 0], label: '(0°, 0)', labelAnchor: 'sw' },
                            { at: [90, 1], label: 'max', labelAnchor: 'n' },
                            { at: [180, 0], label: '(180°, 0)', labelAnchor: 'sw' },
                            { at: [270, -1], label: 'min', labelAnchor: 's' },
                            { at: [360, 0], label: '(360°, 0)', labelAnchor: 'sw' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Period \\( = 360^\\circ \\), Amplitude \\( = 1 \\)'
        }
    },
    {
        id: 't3-037',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 37',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). State the period and amplitude.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'cos x', 'period', 'amplitude', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the period.',
                    workingLatex: '\\text{Period} = 360^\\circ',
                    explanation: 'Cosine repeats after one full revolution, same as sine.'
                },
                {
                    stepNumber: 2,
                    description: 'State the amplitude.',
                    workingLatex: '\\text{Amplitude} = 1',
                    explanation: 'Cosine oscillates between \\( -1 \\) and \\( 1 \\), with amplitude equal to half this range.'
                },
                {
                    stepNumber: 3,
                    description: 'Mark the key points to sketch.',
                    workingLatex: '(0^\\circ, 1),\\ (90^\\circ, 0),\\ (180^\\circ, -1),\\ (270^\\circ, 0),\\ (360^\\circ, 1)',
                    explanation: 'Starting at the peak distinguishes cosine from sine; the rest follows the same wave shape.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 1], [4.5, 0.9969], [9, 0.9877], [13.5, 0.9724], [18, 0.9511], [22.5, 0.9239], [27, 0.891], [31.5, 0.8526], [36, 0.809], [40.5, 0.7604], [45, 0.7071], [49.5, 0.6494], [54, 0.5878], [58.5, 0.5225], [63, 0.454], [67.5, 0.3827], [72, 0.309], [76.5, 0.2334], [81, 0.1564], [85.5, 0.0785], [90, 0], [94.5, -0.0785], [99, -0.1564], [103.5, -0.2334], [108, -0.309], [112.5, -0.3827], [117, -0.454], [121.5, -0.5225], [126, -0.5878], [130.5, -0.6494], [135, -0.7071], [139.5, -0.7604], [144, -0.809], [148.5, -0.8526], [153, -0.891], [157.5, -0.9239], [162, -0.9511], [166.5, -0.9724], [171, -0.9877], [175.5, -0.9969], [180, -1], [184.5, -0.9969], [189, -0.9877], [193.5, -0.9724], [198, -0.9511], [202.5, -0.9239], [207, -0.891], [211.5, -0.8526], [216, -0.809], [220.5, -0.7604], [225, -0.7071], [229.5, -0.6494], [234, -0.5878], [238.5, -0.5225], [243, -0.454], [247.5, -0.3827], [252, -0.309], [256.5, -0.2334], [261, -0.1564], [265.5, -0.0785], [270, 0], [274.5, 0.0785], [279, 0.1564], [283.5, 0.2334], [288, 0.309], [292.5, 0.3827], [297, 0.454], [301.5, 0.5225], [306, 0.5878], [310.5, 0.6494], [315, 0.7071], [319.5, 0.7604], [324, 0.809], [328.5, 0.8526], [333, 0.891], [337.5, 0.9239], [342, 0.9511], [346.5, 0.9724], [351, 0.9877], [355.5, 0.9969], [360, 1]], color: '#16a34a', label: 'y = \\cos x', labelAt: [300, 1.25] }
                        ],
                        points: [
                            { at: [0, 1], label: '(0°, 1)', labelAnchor: 'ne' },
                            { at: [90, 0], label: '(90°, 0)', labelAnchor: 'ne' },
                            { at: [180, -1], label: 'min', labelAnchor: 's' },
                            { at: [270, 0], label: '(270°, 0)', labelAnchor: 'nw' },
                            { at: [360, 1], label: '(360°, 1)', labelAnchor: 'ne' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Period \\( = 360^\\circ \\), Amplitude \\( = 1 \\)'
        }
    },
    {
        id: 't3-038',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 38',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\tan x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). State the period and the equations of the asymptotes.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'tan x', 'period', 'asymptotes', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the period.',
                    workingLatex: '\\text{Period} = 180^\\circ',
                    explanation: 'Tangent repeats every \\( 180^\\circ \\), half the period of sine and cosine.'
                },
                {
                    stepNumber: 2,
                    description: 'Locate the asymptotes.',
                    workingLatex: 'x = 90^\\circ \\text{ and } x = 270^\\circ',
                    explanation: 'Tangent is undefined where cosine is zero, giving these two vertical lines in the interval.'
                },
                {
                    stepNumber: 3,
                    description: 'Note the zeros.',
                    workingLatex: 'x = 0^\\circ,\\ 180^\\circ,\\ 360^\\circ',
                    explanation: 'Tangent passes through zero where sine is zero, between the asymptotes.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -5,
                        yMax: 5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [2.07, 0.0361], [4.14, 0.0724], [6.21, 0.1088], [8.28, 0.1455], [10.35, 0.1826], [12.42, 0.2202], [14.49, 0.2584], [16.56, 0.2973], [18.63, 0.3371], [20.7, 0.3778], [22.77, 0.4197], [24.84, 0.4629], [26.91, 0.5075], [28.98, 0.5538], [31.05, 0.602], [33.12, 0.6523], [35.19, 0.7051], [37.26, 0.7606], [39.33, 0.8192], [41.4, 0.8815], [43.47, 0.9478], [45.53, 1.0188], [47.6, 1.0953], [49.67, 1.1781], [51.74, 1.2682], [53.81, 1.367], [55.88, 1.4761], [57.95, 1.5974], [60.02, 1.7337], [62.09, 1.8881], [64.16, 2.0652], [66.23, 2.2708], [68.3, 2.5132], [70.37, 2.804], [72.44, 3.1604], [74.51, 3.6087], [76.58, 4.1915], [78.65, 4.9824]], color: '#dc2626' },
                            { points: [[103.14, -4.2849], [105.16, -3.691], [107.18, -3.2341], [109.2, -2.8709], [111.23, -2.5745], [113.25, -2.3276], [115.27, -2.1181], [117.3, -1.9378], [119.32, -1.7807], [121.34, -1.6421], [123.36, -1.5187], [125.39, -1.4078], [127.41, -1.3075], [129.43, -1.216], [131.45, -1.1321], [133.48, -1.0546], [135.5, -0.9827], [137.52, -0.9156], [139.55, -0.8527], [141.57, -0.7935], [143.59, -0.7375], [145.61, -0.6844], [147.64, -0.6337], [149.66, -0.5853], [151.68, -0.5389], [153.7, -0.4941], [155.73, -0.4509], [157.75, -0.4091], [159.77, -0.3685], [161.8, -0.3289], [163.82, -0.2902], [165.84, -0.2523], [167.86, -0.215], [169.89, -0.1784], [171.91, -0.1422], [173.93, -0.1063], [175.95, -0.0707], [177.98, -0.0353], [180, 0], [182.02, 0.0353], [184.05, 0.0707], [186.07, 0.1063], [188.09, 0.1422], [190.11, 0.1784], [192.14, 0.215], [194.16, 0.2523], [196.18, 0.2902], [198.2, 0.3289], [200.23, 0.3685], [202.25, 0.4091], [204.27, 0.4509], [206.3, 0.4941], [208.32, 0.5389], [210.34, 0.5853], [212.36, 0.6337], [214.39, 0.6844], [216.41, 0.7375], [218.43, 0.7935], [220.45, 0.8527], [222.48, 0.9156], [224.5, 0.9827], [226.52, 1.0546], [228.55, 1.1321], [230.57, 1.216], [232.59, 1.3075], [234.61, 1.4078], [236.64, 1.5187], [238.66, 1.6421], [240.68, 1.7807], [242.7, 1.9378], [244.73, 2.1181], [246.75, 2.3276], [248.77, 2.5745], [250.8, 2.8709], [252.82, 3.2341], [254.84, 3.691], [256.86, 4.2849]], color: '#dc2626' },
                            { points: [[281.35, -4.9824], [283.42, -4.1915], [285.49, -3.6087], [287.56, -3.1604], [289.63, -2.804], [291.7, -2.5132], [293.77, -2.2708], [295.84, -2.0652], [297.91, -1.8881], [299.98, -1.7337], [302.05, -1.5974], [304.12, -1.4761], [306.19, -1.367], [308.26, -1.2682], [310.33, -1.1781], [312.4, -1.0953], [314.47, -1.0188], [316.53, -0.9478], [318.6, -0.8815], [320.67, -0.8192], [322.74, -0.7606], [324.81, -0.7051], [326.88, -0.6523], [328.95, -0.602], [331.02, -0.5538], [333.09, -0.5075], [335.16, -0.4629], [337.23, -0.4197], [339.3, -0.3778], [341.37, -0.3371], [343.44, -0.2973], [345.51, -0.2584], [347.58, -0.2202], [349.65, -0.1826], [351.72, -0.1455], [353.79, -0.1088], [355.86, -0.0724], [357.93, -0.0361], [360, 0]], color: '#dc2626' }
                        ],
                        lines: [
                            { from: [90, -5], to: [90, 5], color: '#94a3b8', dashed: true, label: 'x=90°', labelAt: [95, 4.3] },
                            { from: [270, -5], to: [270, 5], color: '#94a3b8', dashed: true, label: 'x=270°', labelAt: [275, 4.3] }
                        ],
                        points: [
                            { at: [0, 0], label: '(0°, 0)', labelAnchor: 'sw' },
                            { at: [180, 0], label: '(180°, 0)', labelAnchor: 'sw' },
                            { at: [360, 0], label: '(360°, 0)', labelAnchor: 'sw' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Period \\( = 180^\\circ \\); asymptotes at \\( x = 90^\\circ \\) and \\( x = 270^\\circ \\)'
        }
    },
    {
        id: 't3-039',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 39',
        difficulty: 'Foundation',
        questionText: 'Write down the amplitude and period of \\( y = 3\\sin x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'amplitude', 'period', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Read off the leading coefficient.',
                    workingLatex: '\\text{Coefficient of } \\sin x = 3',
                    explanation: 'For \\( y = a\\sin x \\), the amplitude is \\( |a| \\).'
                },
                {
                    stepNumber: 2,
                    description: 'State the amplitude.',
                    workingLatex: '\\text{Amplitude} = 3',
                    explanation: 'A vertical stretch by 3 triples the amplitude.'
                },
                {
                    stepNumber: 3,
                    description: 'State the period.',
                    workingLatex: '\\text{Period} = 360^\\circ',
                    explanation: 'There is no horizontal stretch, so the period is unchanged from the parent.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -3.5,
                        yMax: 3.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-3, 0, 3],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [4.5, 0.2354], [9, 0.4693], [13.5, 0.7003], [18, 0.9271], [22.5, 1.1481], [27, 1.362], [31.5, 1.5675], [36, 1.7634], [40.5, 1.9483], [45, 2.1213], [49.5, 2.2812], [54, 2.4271], [58.5, 2.5579], [63, 2.673], [67.5, 2.7716], [72, 2.8532], [76.5, 2.9171], [81, 2.9631], [85.5, 2.9908], [90, 3], [94.5, 2.9908], [99, 2.9631], [103.5, 2.9171], [108, 2.8532], [112.5, 2.7716], [117, 2.673], [121.5, 2.5579], [126, 2.4271], [130.5, 2.2812], [135, 2.1213], [139.5, 1.9483], [144, 1.7634], [148.5, 1.5675], [153, 1.362], [157.5, 1.1481], [162, 0.9271], [166.5, 0.7003], [171, 0.4693], [175.5, 0.2354], [180, 0], [184.5, -0.2354], [189, -0.4693], [193.5, -0.7003], [198, -0.9271], [202.5, -1.1481], [207, -1.362], [211.5, -1.5675], [216, -1.7634], [220.5, -1.9483], [225, -2.1213], [229.5, -2.2812], [234, -2.4271], [238.5, -2.5579], [243, -2.673], [247.5, -2.7716], [252, -2.8532], [256.5, -2.9171], [261, -2.9631], [265.5, -2.9908], [270, -3], [274.5, -2.9908], [279, -2.9631], [283.5, -2.9171], [288, -2.8532], [292.5, -2.7716], [297, -2.673], [301.5, -2.5579], [306, -2.4271], [310.5, -2.2812], [315, -2.1213], [319.5, -1.9483], [324, -1.7634], [328.5, -1.5675], [333, -1.362], [337.5, -1.1481], [342, -0.9271], [346.5, -0.7003], [351, -0.4693], [355.5, -0.2354], [360, 0]], color: '#2563eb', label: 'y = 3\\sin x', labelAt: [300, 3.2] }
                        ],
                        points: [
                            { at: [90, 3], label: 'max', labelAnchor: 'n' },
                            { at: [270, -3], label: 'min', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Amplitude \\( = 3 \\), Period \\( = 360^\\circ \\)'
        }
    },
    {
        id: 't3-040',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 40',
        difficulty: 'Foundation',
        questionText: 'Write down the amplitude and period of \\( y = \\cos 2x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'amplitude', 'period', 'cos x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the amplitude.',
                    workingLatex: '\\text{Amplitude} = 1',
                    explanation: 'No coefficient is multiplying \\( \\cos \\) outside, so the amplitude is unchanged.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the period formula.',
                    workingLatex: '\\text{Period} = \\tfrac{360^\\circ}{2} = 180^\\circ',
                    explanation: 'The coefficient of \\( x \\) inside is 2, halving the period.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 1], [3, 0.9945], [6, 0.9781], [9, 0.9511], [12, 0.9135], [15, 0.866], [18, 0.809], [21, 0.7431], [24, 0.6691], [27, 0.5878], [30, 0.5], [33, 0.4067], [36, 0.309], [39, 0.2079], [42, 0.1045], [45, 0], [48, -0.1045], [51, -0.2079], [54, -0.309], [57, -0.4067], [60, -0.5], [63, -0.5878], [66, -0.6691], [69, -0.7431], [72, -0.809], [75, -0.866], [78, -0.9135], [81, -0.9511], [84, -0.9781], [87, -0.9945], [90, -1], [93, -0.9945], [96, -0.9781], [99, -0.9511], [102, -0.9135], [105, -0.866], [108, -0.809], [111, -0.7431], [114, -0.6691], [117, -0.5878], [120, -0.5], [123, -0.4067], [126, -0.309], [129, -0.2079], [132, -0.1045], [135, 0], [138, 0.1045], [141, 0.2079], [144, 0.309], [147, 0.4067], [150, 0.5], [153, 0.5878], [156, 0.6691], [159, 0.7431], [162, 0.809], [165, 0.866], [168, 0.9135], [171, 0.9511], [174, 0.9781], [177, 0.9945], [180, 1], [183, 0.9945], [186, 0.9781], [189, 0.9511], [192, 0.9135], [195, 0.866], [198, 0.809], [201, 0.7431], [204, 0.6691], [207, 0.5878], [210, 0.5], [213, 0.4067], [216, 0.309], [219, 0.2079], [222, 0.1045], [225, 0], [228, -0.1045], [231, -0.2079], [234, -0.309], [237, -0.4067], [240, -0.5], [243, -0.5878], [246, -0.6691], [249, -0.7431], [252, -0.809], [255, -0.866], [258, -0.9135], [261, -0.9511], [264, -0.9781], [267, -0.9945], [270, -1], [273, -0.9945], [276, -0.9781], [279, -0.9511], [282, -0.9135], [285, -0.866], [288, -0.809], [291, -0.7431], [294, -0.6691], [297, -0.5878], [300, -0.5], [303, -0.4067], [306, -0.309], [309, -0.2079], [312, -0.1045], [315, 0], [318, 0.1045], [321, 0.2079], [324, 0.309], [327, 0.4067], [330, 0.5], [333, 0.5878], [336, 0.6691], [339, 0.7431], [342, 0.809], [345, 0.866], [348, 0.9135], [351, 0.9511], [354, 0.9781], [357, 0.9945], [360, 1]], color: '#16a34a', label: 'y = \\cos 2x', labelAt: [290, 1.25] }
                        ],
                        points: [
                            { at: [0, 1], label: 'max', labelAnchor: 'ne' },
                            { at: [90, -1], label: 'min', labelAnchor: 's' },
                            { at: [180, 1], label: 'max', labelAnchor: 'n' },
                            { at: [270, -1], label: 'min', labelAnchor: 's' },
                            { at: [360, 1], label: 'max', labelAnchor: 'ne' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Amplitude \\( = 1 \\), Period \\( = 180^\\circ \\)'
        }
    },
    {
        id: 't3-041',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 41',
        difficulty: 'Foundation',
        questionText: 'State the amplitude, period and range of \\( y = 4\\sin 3x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'amplitude', 'period', 'range', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the outside coefficient.',
                    workingLatex: '\\text{Amplitude} = |4| = 4',
                    explanation: 'The amplitude of \\( y = a\\sin(bx) \\) is \\( |a| \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the period formula.',
                    workingLatex: '\\text{Period} = \\tfrac{360^\\circ}{3} = 120^\\circ',
                    explanation: 'Inside coefficient of 3 compresses the period by a factor of 3.'
                },
                {
                    stepNumber: 3,
                    description: 'State the range.',
                    workingLatex: '-4 \\leq y \\leq 4',
                    explanation: 'With amplitude 4 and no vertical shift, the curve oscillates between \\( \\pm 4 \\).',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -4.5,
                        yMax: 4.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-4, 0, 4],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [2, 0.4181], [4, 0.8316], [6, 1.2361], [8, 1.6269], [10, 2], [12, 2.3511], [14, 2.6765], [16, 2.9726], [18, 3.2361], [20, 3.4641], [22, 3.6542], [24, 3.8042], [26, 3.9126], [28, 3.9781], [30, 4], [32, 3.9781], [34, 3.9126], [36, 3.8042], [38, 3.6542], [40, 3.4641], [42, 3.2361], [44, 2.9726], [46, 2.6765], [48, 2.3511], [50, 2], [52, 1.6269], [54, 1.2361], [56, 0.8316], [58, 0.4181], [60, 0], [62, -0.4181], [64, -0.8316], [66, -1.2361], [68, -1.6269], [70, -2], [72, -2.3511], [74, -2.6765], [76, -2.9726], [78, -3.2361], [80, -3.4641], [82, -3.6542], [84, -3.8042], [86, -3.9126], [88, -3.9781], [90, -4], [92, -3.9781], [94, -3.9126], [96, -3.8042], [98, -3.6542], [100, -3.4641], [102, -3.2361], [104, -2.9726], [106, -2.6765], [108, -2.3511], [110, -2], [112, -1.6269], [114, -1.2361], [116, -0.8316], [118, -0.4181], [120, 0], [122, 0.4181], [124, 0.8316], [126, 1.2361], [128, 1.6269], [130, 2], [132, 2.3511], [134, 2.6765], [136, 2.9726], [138, 3.2361], [140, 3.4641], [142, 3.6542], [144, 3.8042], [146, 3.9126], [148, 3.9781], [150, 4], [152, 3.9781], [154, 3.9126], [156, 3.8042], [158, 3.6542], [160, 3.4641], [162, 3.2361], [164, 2.9726], [166, 2.6765], [168, 2.3511], [170, 2], [172, 1.6269], [174, 1.2361], [176, 0.8316], [178, 0.4181], [180, 0], [182, -0.4181], [184, -0.8316], [186, -1.2361], [188, -1.6269], [190, -2], [192, -2.3511], [194, -2.6765], [196, -2.9726], [198, -3.2361], [200, -3.4641], [202, -3.6542], [204, -3.8042], [206, -3.9126], [208, -3.9781], [210, -4], [212, -3.9781], [214, -3.9126], [216, -3.8042], [218, -3.6542], [220, -3.4641], [222, -3.2361], [224, -2.9726], [226, -2.6765], [228, -2.3511], [230, -2], [232, -1.6269], [234, -1.2361], [236, -0.8316], [238, -0.4181], [240, 0], [242, 0.4181], [244, 0.8316], [246, 1.2361], [248, 1.6269], [250, 2], [252, 2.3511], [254, 2.6765], [256, 2.9726], [258, 3.2361], [260, 3.4641], [262, 3.6542], [264, 3.8042], [266, 3.9126], [268, 3.9781], [270, 4], [272, 3.9781], [274, 3.9126], [276, 3.8042], [278, 3.6542], [280, 3.4641], [282, 3.2361], [284, 2.9726], [286, 2.6765], [288, 2.3511], [290, 2], [292, 1.6269], [294, 1.2361], [296, 0.8316], [298, 0.4181], [300, 0], [302, -0.4181], [304, -0.8316], [306, -1.2361], [308, -1.6269], [310, -2], [312, -2.3511], [314, -2.6765], [316, -2.9726], [318, -3.2361], [320, -3.4641], [322, -3.6542], [324, -3.8042], [326, -3.9126], [328, -3.9781], [330, -4], [332, -3.9781], [334, -3.9126], [336, -3.8042], [338, -3.6542], [340, -3.4641], [342, -3.2361], [344, -2.9726], [346, -2.6765], [348, -2.3511], [350, -2], [352, -1.6269], [354, -1.2361], [356, -0.8316], [358, -0.4181], [360, 0]], color: '#2563eb', label: 'y = 4\\sin 3x', labelAt: [260, 4.2] }
                        ],
                        points: [
                            { at: [30, 4], label: 'max', labelAnchor: 'n' },
                            { at: [90, -4], label: 'min', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Amplitude \\( = 4 \\), Period \\( = 120^\\circ \\), Range \\( = [-4, 4] \\)'
        }
    },
    {
        id: 't3-042',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 42',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\sin x + 2 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). State the range.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'vertical translation', 'sin x', 'range', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the vertical translation.',
                    workingLatex: '\\sin x \\longrightarrow \\sin x + 2',
                    explanation: 'Adding 2 outside the function shifts every \\( y \\)-value upward by 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the shift to the range.',
                    workingLatex: '-1 + 2 \\leq y \\leq 1 + 2',
                    explanation: 'Translate both bounds of the parent range.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: '1 \\leq y \\leq 3',
                    explanation: 'The shifted graph oscillates between 1 and 3 about the midline \\( y = 2 \\).',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: 0,
                        yMax: 3.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [1, 2, 3],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 2], [4.5, 2.0785], [9, 2.1564], [13.5, 2.2334], [18, 2.309], [22.5, 2.3827], [27, 2.454], [31.5, 2.5225], [36, 2.5878], [40.5, 2.6494], [45, 2.7071], [49.5, 2.7604], [54, 2.809], [58.5, 2.8526], [63, 2.891], [67.5, 2.9239], [72, 2.9511], [76.5, 2.9724], [81, 2.9877], [85.5, 2.9969], [90, 3], [94.5, 2.9969], [99, 2.9877], [103.5, 2.9724], [108, 2.9511], [112.5, 2.9239], [117, 2.891], [121.5, 2.8526], [126, 2.809], [130.5, 2.7604], [135, 2.7071], [139.5, 2.6494], [144, 2.5878], [148.5, 2.5225], [153, 2.454], [157.5, 2.3827], [162, 2.309], [166.5, 2.2334], [171, 2.1564], [175.5, 2.0785], [180, 2], [184.5, 1.9215], [189, 1.8436], [193.5, 1.7666], [198, 1.691], [202.5, 1.6173], [207, 1.546], [211.5, 1.4775], [216, 1.4122], [220.5, 1.3506], [225, 1.2929], [229.5, 1.2396], [234, 1.191], [238.5, 1.1474], [243, 1.109], [247.5, 1.0761], [252, 1.0489], [256.5, 1.0276], [261, 1.0123], [265.5, 1.0031], [270, 1], [274.5, 1.0031], [279, 1.0123], [283.5, 1.0276], [288, 1.0489], [292.5, 1.0761], [297, 1.109], [301.5, 1.1474], [306, 1.191], [310.5, 1.2396], [315, 1.2929], [319.5, 1.3506], [324, 1.4122], [328.5, 1.4775], [333, 1.546], [337.5, 1.6173], [342, 1.691], [346.5, 1.7666], [351, 1.8436], [355.5, 1.9215], [360, 2]], color: '#2563eb', label: 'y = \\sin x + 2', labelAt: [250, 3.3] }
                        ],
                        lines: [
                            { from: [0, 2], to: [360, 2], color: '#94a3b8', dashed: true, label: 'midline y=2', labelAt: [300, 2.2] }
                        ],
                        points: [
                            { at: [90, 3], label: 'max', labelAnchor: 'n' },
                            { at: [270, 1], label: 'min', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Range \\( = [1, 3] \\)'
        }
    },
    {
        id: 't3-043',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 43',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = -\\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Describe the transformation from \\( y = \\cos x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'reflection', 'cos x', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the change.',
                    workingLatex: '\\cos x \\longrightarrow -\\cos x',
                    explanation: 'Multiplication by \\( -1 \\) negates every \\( y \\)-value.'
                },
                {
                    stepNumber: 2,
                    description: 'Name the transformation.',
                    workingLatex: '\\text{Reflection in the } x\\text{-axis}',
                    explanation: 'A negation outside the function reflects the graph in the horizontal axis.'
                },
                {
                    stepNumber: 3,
                    description: 'Compute the new key points.',
                    workingLatex: '(0^\\circ, -1),\\ (90^\\circ, 0),\\ (180^\\circ, 1),\\ (270^\\circ, 0),\\ (360^\\circ, -1)',
                    explanation: 'The starting and ending values flip from \\( 1 \\) to \\( -1 \\); the maximum moves to \\( x = 180^\\circ \\).',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, -1], [4.5, -0.9969], [9, -0.9877], [13.5, -0.9724], [18, -0.9511], [22.5, -0.9239], [27, -0.891], [31.5, -0.8526], [36, -0.809], [40.5, -0.7604], [45, -0.7071], [49.5, -0.6494], [54, -0.5878], [58.5, -0.5225], [63, -0.454], [67.5, -0.3827], [72, -0.309], [76.5, -0.2334], [81, -0.1564], [85.5, -0.0785], [90, 0], [94.5, 0.0785], [99, 0.1564], [103.5, 0.2334], [108, 0.309], [112.5, 0.3827], [117, 0.454], [121.5, 0.5225], [126, 0.5878], [130.5, 0.6494], [135, 0.7071], [139.5, 0.7604], [144, 0.809], [148.5, 0.8526], [153, 0.891], [157.5, 0.9239], [162, 0.9511], [166.5, 0.9724], [171, 0.9877], [175.5, 0.9969], [180, 1], [184.5, 0.9969], [189, 0.9877], [193.5, 0.9724], [198, 0.9511], [202.5, 0.9239], [207, 0.891], [211.5, 0.8526], [216, 0.809], [220.5, 0.7604], [225, 0.7071], [229.5, 0.6494], [234, 0.5878], [238.5, 0.5225], [243, 0.454], [247.5, 0.3827], [252, 0.309], [256.5, 0.2334], [261, 0.1564], [265.5, 0.0785], [270, 0], [274.5, -0.0785], [279, -0.1564], [283.5, -0.2334], [288, -0.309], [292.5, -0.3827], [297, -0.454], [301.5, -0.5225], [306, -0.5878], [310.5, -0.6494], [315, -0.7071], [319.5, -0.7604], [324, -0.809], [328.5, -0.8526], [333, -0.891], [337.5, -0.9239], [342, -0.9511], [346.5, -0.9724], [351, -0.9877], [355.5, -0.9969], [360, -1]], color: '#dc2626', label: 'y = -\\cos x', labelAt: [300, 1.25] }
                        ],
                        points: [
                            { at: [0, -1], label: '(0°, -1)', labelAnchor: 's' },
                            { at: [180, 1], label: 'max', labelAnchor: 'n' },
                            { at: [360, -1], label: '(360°, -1)', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Reflection in the \\( x \\)-axis. The curve starts at \\( -1 \\), reaches max \\( 1 \\) at \\( 180^\\circ \\).'
        }
    },
    {
        id: 't3-044',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 44',
        difficulty: 'Foundation',
        questionText: 'Describe the transformation that maps \\( y = \\sin x \\) to \\( y = \\sin(x - 30^\\circ) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'horizontal translation', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the inside change.',
                    workingLatex: '\\sin x \\longrightarrow \\sin(x - 30^\\circ)',
                    explanation: 'Replacing \\( x \\) with \\( x - 30^\\circ \\) is an inside change affecting the horizontal direction.'
                },
                {
                    stepNumber: 2,
                    description: 'Name the translation.',
                    workingLatex: '\\text{Translation by } \\begin{pmatrix} 30 \\\\ 0 \\end{pmatrix}',
                    explanation: 'The subtraction inside shifts the graph \\( 30^\\circ \\) to the right; the sign inside is opposite to the direction of motion.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, -0.5], [4.5, -0.4305], [9, -0.3584], [13.5, -0.284], [18, -0.2079], [22.5, -0.1305], [27, -0.0523], [31.5, 0.0262], [36, 0.1045], [40.5, 0.1822], [45, 0.2588], [49.5, 0.3338], [54, 0.4067], [58.5, 0.4772], [63, 0.5446], [67.5, 0.6088], [72, 0.6691], [76.5, 0.7254], [81, 0.7771], [85.5, 0.8241], [90, 0.866], [94.5, 0.9026], [99, 0.9336], [103.5, 0.9588], [108, 0.9781], [112.5, 0.9914], [117, 0.9986], [121.5, 0.9997], [126, 0.9945], [130.5, 0.9833], [135, 0.9659], [139.5, 0.9426], [144, 0.9135], [148.5, 0.8788], [153, 0.8387], [157.5, 0.7934], [162, 0.7431], [166.5, 0.6884], [171, 0.6293], [175.5, 0.5664], [180, 0.5], [184.5, 0.4305], [189, 0.3584], [193.5, 0.284], [198, 0.2079], [202.5, 0.1305], [207, 0.0523], [211.5, -0.0262], [216, -0.1045], [220.5, -0.1822], [225, -0.2588], [229.5, -0.3338], [234, -0.4067], [238.5, -0.4772], [243, -0.5446], [247.5, -0.6088], [252, -0.6691], [256.5, -0.7254], [261, -0.7771], [265.5, -0.8241], [270, -0.866], [274.5, -0.9026], [279, -0.9336], [283.5, -0.9588], [288, -0.9781], [292.5, -0.9914], [297, -0.9986], [301.5, -0.9997], [306, -0.9945], [310.5, -0.9833], [315, -0.9659], [319.5, -0.9426], [324, -0.9135], [328.5, -0.8788], [333, -0.8387], [337.5, -0.7934], [342, -0.7431], [346.5, -0.6884], [351, -0.6293], [355.5, -0.5664], [360, -0.5]], color: '#2563eb', label: 'y = \\sin(x - 30°)', labelAt: [240, 1.25] }
                        ],
                        points: [
                            { at: [30, 0], label: '(30°, 0)', labelAnchor: 'sw' },
                            { at: [120, 1], label: 'max (120°, 1)', labelAnchor: 'n' },
                            { at: [300, -1], label: 'min (300°, -1)', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Translation of \\( 30^\\circ \\) to the right (vector \\( \\begin{pmatrix} 30 \\\\ 0 \\end{pmatrix} \\)).'
        }
    },
    {
        id: 't3-045',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 45',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = 2\\sin(x + 45^\\circ) \\) has what amplitude, period and phase shift?',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'combined transformations', 'amplitude', 'period', 'phase shift', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Read the amplitude.',
                    workingLatex: '|2| = 2',
                    explanation: 'The leading coefficient gives the amplitude.'
                },
                {
                    stepNumber: 2,
                    description: 'Read the coefficient of \\( x \\) inside.',
                    workingLatex: '\\text{Coefficient of } x = 1',
                    explanation: 'No horizontal scaling.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the period formula.',
                    workingLatex: '\\text{Period} = \\tfrac{360^\\circ}{1} = 360^\\circ',
                    explanation: 'Same period as the parent sine.'
                },
                {
                    stepNumber: 4,
                    description: 'Interpret the inside additive constant.',
                    workingLatex: '+45^\\circ \\Rightarrow \\text{shift } 45^\\circ \\text{ to the left}',
                    explanation: 'Adding inside shifts the graph in the negative \\( x \\)-direction (i.e., left). A common slip is to send it right.',
                    diagram: {
                        xMin: -90,
                        xMax: 360,
                        yMin: -2.5,
                        yMax: 2.5,
                        xTicks: [-90, 0, 90, 180, 270, 360],
                        yTicks: [-2, 0, 2],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[-90, -1.4142], [-85.5, -1.2989], [-81, -1.1756], [-76.5, -1.045], [-72, -0.908], [-67.5, -0.7654], [-63, -0.618], [-58.5, -0.4669], [-54, -0.3129], [-49.5, -0.1569], [-45, 0], [-40.5, 0.1569], [-36, 0.3129], [-31.5, 0.4669], [-27, 0.618], [-22.5, 0.7654], [-18, 0.908], [-13.5, 1.045], [-9, 1.1756], [-4.5, 1.2989], [0, 1.4142], [4.5, 1.5208], [9, 1.618], [13.5, 1.7053], [18, 1.782], [22.5, 1.8478], [27, 1.9021], [31.5, 1.9447], [36, 1.9754], [40.5, 1.9938], [45, 2], [49.5, 1.9938], [54, 1.9754], [58.5, 1.9447], [63, 1.9021], [67.5, 1.8478], [72, 1.782], [76.5, 1.7053], [81, 1.618], [85.5, 1.5208], [90, 1.4142], [94.5, 1.2989], [99, 1.1756], [103.5, 1.045], [108, 0.908], [112.5, 0.7654], [117, 0.618], [121.5, 0.4669], [126, 0.3129], [130.5, 0.1569], [135, 0], [139.5, -0.1569], [144, -0.3129], [148.5, -0.4669], [153, -0.618], [157.5, -0.7654], [162, -0.908], [166.5, -1.045], [171, -1.1756], [175.5, -1.2989], [180, -1.4142], [184.5, -1.5208], [189, -1.618], [193.5, -1.7053], [198, -1.782], [202.5, -1.8478], [207, -1.9021], [211.5, -1.9447], [216, -1.9754], [220.5, -1.9938], [225, -2], [229.5, -1.9938], [234, -1.9754], [238.5, -1.9447], [243, -1.9021], [247.5, -1.8478], [252, -1.782], [256.5, -1.7053], [261, -1.618], [265.5, -1.5208], [270, -1.4142], [274.5, -1.2989], [279, -1.1756], [283.5, -1.045], [288, -0.908], [292.5, -0.7654], [297, -0.618], [301.5, -0.4669], [306, -0.3129], [310.5, -0.1569], [315, 0], [319.5, 0.1569], [324, 0.3129], [328.5, 0.4669], [333, 0.618], [337.5, 0.7654], [342, 0.908], [346.5, 1.045], [351, 1.1756], [355.5, 1.2989], [360, 1.4142]], color: '#2563eb', label: 'y = 2\\sin(x + 45°)', labelAt: [250, 2.3] }
                        ],
                        points: [
                            { at: [45, 2], label: 'max', labelAnchor: 'n' },
                            { at: [225, -2], label: 'min', labelAnchor: 's' },
                            { at: [0, 1.4142], label: 'y-int (0°, √2)', labelAnchor: 'sw' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Amplitude \\( = 2 \\), Period \\( = 360^\\circ \\), Phase shift \\( = 45^\\circ \\) to the left.'
        }
    },
    {
        id: 't3-046',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 46',
        difficulty: 'Foundation',
        questionText: 'How many solutions does \\( \\sin x = 0.5 \\) have for \\( 0^\\circ \\leq x \\leq 360^\\circ \\)?',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'solutions', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Visualise: the horizontal line \\( y = 0.5 \\) cuts the sine curve.',
                    workingLatex: '\\sin x = 0.5',
                    explanation: 'Each intersection corresponds to a solution.'
                },
                {
                    stepNumber: 2,
                    description: 'Recall the principal solution.',
                    workingLatex: '\\sin^{-1}(0.5) = 30^\\circ',
                    explanation: 'Standard exact value.'
                },
                {
                    stepNumber: 3,
                    description: 'Use \\( \\sin(180^\\circ - x) = \\sin x \\) for the second solution.',
                    workingLatex: 'x = 180^\\circ - 30^\\circ = 150^\\circ',
                    explanation: 'The line \\( y = 0.5 \\) crosses the sine curve once on each side of \\( x = 90^\\circ \\) in this interval.'
                },
                {
                    stepNumber: 4,
                    description: 'Count the solutions.',
                    workingLatex: '2 \\text{ solutions}',
                    explanation: '\\( x = 30^\\circ \\) and \\( x = 150^\\circ \\) are the only solutions in \\( [0^\\circ, 360^\\circ] \\).',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 0.5, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [4.5, 0.0785], [9, 0.1564], [13.5, 0.2334], [18, 0.309], [22.5, 0.3827], [27, 0.454], [31.5, 0.5225], [36, 0.5878], [40.5, 0.6494], [45, 0.7071], [49.5, 0.7604], [54, 0.809], [58.5, 0.8526], [63, 0.891], [67.5, 0.9239], [72, 0.9511], [76.5, 0.9724], [81, 0.9877], [85.5, 0.9969], [90, 1], [94.5, 0.9969], [99, 0.9877], [103.5, 0.9724], [108, 0.9511], [112.5, 0.9239], [117, 0.891], [121.5, 0.8526], [126, 0.809], [130.5, 0.7604], [135, 0.7071], [139.5, 0.6494], [144, 0.5878], [148.5, 0.5225], [153, 0.454], [157.5, 0.3827], [162, 0.309], [166.5, 0.2334], [171, 0.1564], [175.5, 0.0785], [180, 0], [184.5, -0.0785], [189, -0.1564], [193.5, -0.2334], [198, -0.309], [202.5, -0.3827], [207, -0.454], [211.5, -0.5225], [216, -0.5878], [220.5, -0.6494], [225, -0.7071], [229.5, -0.7604], [234, -0.809], [238.5, -0.8526], [243, -0.891], [247.5, -0.9239], [252, -0.9511], [256.5, -0.9724], [261, -0.9877], [265.5, -0.9969], [270, -1], [274.5, -0.9969], [279, -0.9877], [283.5, -0.9724], [288, -0.9511], [292.5, -0.9239], [297, -0.891], [301.5, -0.8526], [306, -0.809], [310.5, -0.7604], [315, -0.7071], [319.5, -0.6494], [324, -0.5878], [328.5, -0.5225], [333, -0.454], [337.5, -0.3827], [342, -0.309], [346.5, -0.2334], [351, -0.1564], [355.5, -0.0785], [360, 0]], color: '#2563eb', label: 'y = \\sin x', labelAt: [300, 1.25] }
                        ],
                        lines: [
                            { from: [0, 0.5], to: [360, 0.5], color: '#dc2626', dashed: true, label: 'y = 0.5', labelAt: [300, 0.6] }
                        ],
                        points: [
                            { at: [30, 0.5], label: '(30°, 0.5)', labelAnchor: 'n' },
                            { at: [150, 0.5], label: '(150°, 0.5)', labelAnchor: 'n' }
                        ]
                    }
                }
            ],
            finalAnswer: '2 solutions (at \\( x = 30^\\circ \\) and \\( x = 150^\\circ \\))'
        }
    },
    {
        id: 't3-047',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 47',
        difficulty: 'Foundation',
        questionText: 'How many solutions does \\( \\cos x = -0.5 \\) have for \\( 0^\\circ \\leq x \\leq 720^\\circ \\)?',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'solutions', 'cos x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the solutions in one period \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: '\\cos x = -0.5 \\Rightarrow x = 120^\\circ,\\ 240^\\circ',
                    explanation: '\\( \\cos^{-1}(-0.5) = 120^\\circ \\); cosine is negative in the second and third quadrants.'
                },
                {
                    stepNumber: 2,
                    description: 'Add one period to extend to the next cycle.',
                    workingLatex: 'x = 120^\\circ + 360^\\circ = 480^\\circ, \\quad 240^\\circ + 360^\\circ = 600^\\circ',
                    explanation: 'Cosine has period \\( 360^\\circ \\), so each solution repeats.'
                },
                {
                    stepNumber: 3,
                    description: 'Check inclusion in \\( [0^\\circ, 720^\\circ] \\).',
                    workingLatex: 'x = 120^\\circ,\\ 240^\\circ,\\ 480^\\circ,\\ 600^\\circ',
                    explanation: 'All four solutions lie inside the interval.'
                },
                {
                    stepNumber: 4,
                    description: 'Count.',
                    workingLatex: '4 \\text{ solutions}',
                    explanation: 'Two per period times two periods.',
                    diagram: {
                        xMin: 0,
                        xMax: 720,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360, 450, 540, 630, 720],
                        yTicks: [-1, -0.5, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 1], [5, 0.9962], [10, 0.9848], [15, 0.9659], [20, 0.9397], [25, 0.9063], [30, 0.866], [35, 0.8192], [40, 0.766], [45, 0.7071], [50, 0.6428], [55, 0.5736], [60, 0.5], [65, 0.4226], [70, 0.342], [75, 0.2588], [80, 0.1736], [85, 0.0872], [90, 0], [95, -0.0872], [100, -0.1736], [105, -0.2588], [110, -0.342], [115, -0.4226], [120, -0.5], [125, -0.5736], [130, -0.6428], [135, -0.7071], [140, -0.766], [145, -0.8192], [150, -0.866], [155, -0.9063], [160, -0.9397], [165, -0.9659], [170, -0.9848], [175, -0.9962], [180, -1], [185, -0.9962], [190, -0.9848], [195, -0.9659], [200, -0.9397], [205, -0.9063], [210, -0.866], [215, -0.8192], [220, -0.766], [225, -0.7071], [230, -0.6428], [235, -0.5736], [240, -0.5], [245, -0.4226], [250, -0.342], [255, -0.2588], [260, -0.1736], [265, -0.0872], [270, 0], [275, 0.0872], [280, 0.1736], [285, 0.2588], [290, 0.342], [295, 0.4226], [300, 0.5], [305, 0.5736], [310, 0.6428], [315, 0.7071], [320, 0.766], [325, 0.8192], [330, 0.866], [335, 0.9063], [340, 0.9397], [345, 0.9659], [350, 0.9848], [355, 0.9962], [360, 1], [365, 0.9962], [370, 0.9848], [375, 0.9659], [380, 0.9397], [385, 0.9063], [390, 0.866], [395, 0.8192], [400, 0.766], [405, 0.7071], [410, 0.6428], [415, 0.5736], [420, 0.5], [425, 0.4226], [430, 0.342], [435, 0.2588], [440, 0.1736], [445, 0.0872], [450, 0], [455, -0.0872], [460, -0.1736], [465, -0.2588], [470, -0.342], [475, -0.4226], [480, -0.5], [485, -0.5736], [490, -0.6428], [495, -0.7071], [500, -0.766], [505, -0.8192], [510, -0.866], [515, -0.9063], [520, -0.9397], [525, -0.9659], [530, -0.9848], [535, -0.9962], [540, -1], [545, -0.9962], [550, -0.9848], [555, -0.9659], [560, -0.9397], [565, -0.9063], [570, -0.866], [575, -0.8192], [580, -0.766], [585, -0.7071], [590, -0.6428], [595, -0.5736], [600, -0.5], [605, -0.4226], [610, -0.342], [615, -0.2588], [620, -0.1736], [625, -0.0872], [630, 0], [635, 0.0872], [640, 0.1736], [645, 0.2588], [650, 0.342], [655, 0.4226], [660, 0.5], [665, 0.5736], [670, 0.6428], [675, 0.7071], [680, 0.766], [685, 0.8192], [690, 0.866], [695, 0.9063], [700, 0.9397], [705, 0.9659], [710, 0.9848], [715, 0.9962], [720, 1]], color: '#16a34a', label: 'y = \\cos x', labelAt: [600, 1.25] }
                        ],
                        lines: [
                            { from: [0, -0.5], to: [720, -0.5], color: '#dc2626', dashed: true, label: 'y = -0.5', labelAt: [640, -0.4] }
                        ],
                        points: [
                            { at: [120, -0.5], label: '120°', labelAnchor: 's' },
                            { at: [240, -0.5], label: '240°', labelAnchor: 's' },
                            { at: [480, -0.5], label: '480°', labelAnchor: 's' },
                            { at: [600, -0.5], label: '600°', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: '4 solutions'
        }
    },
    {
        id: 't3-048',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 48',
        difficulty: 'Foundation',
        questionText: 'State the period of \\( y = \\tan 2x \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'tan x', 'period'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recall the period of \\( \\tan x \\).',
                    workingLatex: '\\text{Period of } \\tan x = 180^\\circ',
                    explanation: 'Tangent repeats every \\( 180^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Divide by the coefficient of \\( x \\).',
                    workingLatex: '\\tfrac{180^\\circ}{2} = 90^\\circ',
                    explanation: 'For \\( \\tan(nx) \\), the period is \\( 180^\\circ/n \\).',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -5,
                        yMax: 5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [1.52, 0.053], [3.03, 0.1063], [4.55, 0.1602], [6.07, 0.2151], [7.59, 0.2712], [9.1, 0.3289], [10.62, 0.3887], [12.14, 0.451], [13.66, 0.5164], [15.17, 0.5854], [16.69, 0.6589], [18.21, 0.7376], [19.72, 0.8228], [21.24, 0.9158], [22.76, 1.0182], [24.28, 1.1324], [25.79, 1.2611], [27.31, 1.4082], [28.83, 1.5791], [30.34, 1.7812], [31.86, 2.0255], [33.38, 2.3285], [34.9, 2.7169], [36.41, 3.236], [37.93, 3.97]], color: '#dc2626' },
                            { points: [[52.14, -3.9292], [54.19, -3.011], [56.23, -2.4184], [58.28, -2.0006], [60.33, -1.6875], [62.37, -1.4418], [64.42, -1.2421], [66.47, -1.075], [68.51, -0.9318], [70.56, -0.8064], [72.6, -0.6948], [74.65, -0.5937], [76.7, -0.5009], [78.74, -0.4145], [80.79, -0.333], [82.84, -0.2554], [84.88, -0.1805], [86.93, -0.1076], [88.98, -0.0357], [91.02, 0.0357], [93.07, 0.1076], [95.12, 0.1805], [97.16, 0.2554], [99.21, 0.333], [101.26, 0.4145], [103.3, 0.5009], [105.35, 0.5937], [107.4, 0.6948], [109.44, 0.8064], [111.49, 0.9318], [113.53, 1.075], [115.58, 1.2421], [117.63, 1.4418], [119.67, 1.6875], [121.72, 2.0006], [123.77, 2.4184], [125.81, 3.011], [127.86, 3.9292]], color: '#dc2626' },
                            { points: [[142.14, -3.9292], [144.19, -3.011], [146.23, -2.4184], [148.28, -2.0006], [150.33, -1.6875], [152.37, -1.4418], [154.42, -1.2421], [156.47, -1.075], [158.51, -0.9318], [160.56, -0.8064], [162.6, -0.6948], [164.65, -0.5937], [166.7, -0.5009], [168.74, -0.4145], [170.79, -0.333], [172.84, -0.2554], [174.88, -0.1805], [176.93, -0.1076], [178.98, -0.0357], [181.02, 0.0357], [183.07, 0.1076], [185.12, 0.1805], [187.16, 0.2554], [189.21, 0.333], [191.26, 0.4145], [193.3, 0.5009], [195.35, 0.5937], [197.4, 0.6948], [199.44, 0.8064], [201.49, 0.9318], [203.53, 1.075], [205.58, 1.2421], [207.63, 1.4418], [209.67, 1.6875], [211.72, 2.0006], [213.77, 2.4184], [215.81, 3.011], [217.86, 3.9292]], color: '#dc2626' },
                            { points: [[232.14, -3.9292], [234.19, -3.011], [236.23, -2.4184], [238.28, -2.0006], [240.33, -1.6875], [242.37, -1.4418], [244.42, -1.2421], [246.47, -1.075], [248.51, -0.9318], [250.56, -0.8064], [252.6, -0.6948], [254.65, -0.5937], [256.7, -0.5009], [258.74, -0.4145], [260.79, -0.333], [262.84, -0.2554], [264.88, -0.1805], [266.93, -0.1076], [268.98, -0.0357], [271.02, 0.0357], [273.07, 0.1076], [275.12, 0.1805], [277.16, 0.2554], [279.21, 0.333], [281.26, 0.4145], [283.3, 0.5009], [285.35, 0.5937], [287.4, 0.6948], [289.44, 0.8064], [291.49, 0.9318], [293.53, 1.075], [295.58, 1.2421], [297.63, 1.4418], [299.67, 1.6875], [301.72, 2.0006], [303.77, 2.4184], [305.81, 3.011], [307.86, 3.9292]], color: '#dc2626' },
                            { points: [[322.07, -3.97], [323.59, -3.236], [325.1, -2.7169], [326.62, -2.3285], [328.14, -2.0255], [329.66, -1.7812], [331.17, -1.5791], [332.69, -1.4082], [334.21, -1.2611], [335.72, -1.1324], [337.24, -1.0182], [338.76, -0.9158], [340.28, -0.8228], [341.79, -0.7376], [343.31, -0.6589], [344.83, -0.5854], [346.34, -0.5164], [347.86, -0.451], [349.38, -0.3887], [350.9, -0.3289], [352.41, -0.2712], [353.93, -0.2151], [355.45, -0.1602], [356.97, -0.1063], [358.48, -0.053], [360, 0]], color: '#dc2626' }
                        ],
                        lines: [
                            { from: [45, -5], to: [45, 5], color: '#94a3b8', dashed: true },
                            { from: [135, -5], to: [135, 5], color: '#94a3b8', dashed: true },
                            { from: [225, -5], to: [225, 5], color: '#94a3b8', dashed: true },
                            { from: [315, -5], to: [315, 5], color: '#94a3b8', dashed: true }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( 90^\\circ \\)'
        }
    },
    {
        id: 't3-049',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 49',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = 2\\cos x - 1 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). State the maximum, minimum and range.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'combined transformations', 'cos x', 'range', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the parent range.',
                    workingLatex: '-1 \\leq \\cos x \\leq 1',
                    explanation: 'Cosine oscillates between these bounds.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply by 2 (vertical stretch).',
                    workingLatex: '-2 \\leq 2\\cos x \\leq 2',
                    explanation: 'Doubling preserves the inequality direction.'
                },
                {
                    stepNumber: 3,
                    description: 'Subtract 1 (vertical translation).',
                    workingLatex: '-3 \\leq 2\\cos x - 1 \\leq 1',
                    explanation: 'Subtract 1 from all three parts.'
                },
                {
                    stepNumber: 4,
                    description: 'State the maximum and minimum.',
                    workingLatex: '\\text{Max} = 2(1) - 1 = 1, \\quad \\text{Min} = 2(-1) - 1 = -3',
                    explanation: 'Substitute the parent extremes.'
                },
                {
                    stepNumber: 5,
                    description: 'State the range.',
                    workingLatex: '-3 \\leq y \\leq 1',
                    explanation: 'Combine into a single inequality. The midline is \\( y = -1 \\).',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -3.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-3, -1, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 1], [4.5, 0.9938], [9, 0.9754], [13.5, 0.9447], [18, 0.9021], [22.5, 0.8478], [27, 0.782], [31.5, 0.7053], [36, 0.618], [40.5, 0.5208], [45, 0.4142], [49.5, 0.2989], [54, 0.1756], [58.5, 0.045], [63, -0.092], [67.5, -0.2346], [72, -0.382], [76.5, -0.5331], [81, -0.6871], [85.5, -0.8431], [90, -1], [94.5, -1.1569], [99, -1.3129], [103.5, -1.4669], [108, -1.618], [112.5, -1.7654], [117, -1.908], [121.5, -2.045], [126, -2.1756], [130.5, -2.2989], [135, -2.4142], [139.5, -2.5208], [144, -2.618], [148.5, -2.7053], [153, -2.782], [157.5, -2.8478], [162, -2.9021], [166.5, -2.9447], [171, -2.9754], [175.5, -2.9938], [180, -3], [184.5, -2.9938], [189, -2.9754], [193.5, -2.9447], [198, -2.9021], [202.5, -2.8478], [207, -2.782], [211.5, -2.7053], [216, -2.618], [220.5, -2.5208], [225, -2.4142], [229.5, -2.2989], [234, -2.1756], [238.5, -2.045], [243, -1.908], [247.5, -1.7654], [252, -1.618], [256.5, -1.4669], [261, -1.3129], [265.5, -1.1569], [270, -1], [274.5, -0.8431], [279, -0.6871], [283.5, -0.5331], [288, -0.382], [292.5, -0.2346], [297, -0.092], [301.5, 0.045], [306, 0.1756], [310.5, 0.2989], [315, 0.4142], [319.5, 0.5208], [324, 0.618], [328.5, 0.7053], [333, 0.782], [337.5, 0.8478], [342, 0.9021], [346.5, 0.9447], [351, 0.9754], [355.5, 0.9938], [360, 1]], color: '#16a34a', label: 'y = 2\\cos x - 1', labelAt: [240, 1.3] }
                        ],
                        lines: [
                            { from: [0, -1], to: [360, -1], color: '#94a3b8', dashed: true, label: 'midline y=-1', labelAt: [300, -0.8] }
                        ],
                        points: [
                            { at: [0, 1], label: 'max (0°, 1)', labelAnchor: 'n' },
                            { at: [180, -3], label: 'min (180°, -3)', labelAnchor: 's' },
                            { at: [360, 1], label: '(360°, 1)', labelAnchor: 'n' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Max \\( = 1 \\), Min \\( = -3 \\), Range \\( = [-3, 1] \\)'
        }
    },
    {
        id: 't3-050',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 50',
        difficulty: 'Foundation',
        questionText: 'The graph shows \\( y = a\\sin bx + c \\). It has amplitude 3, period \\( 120^\\circ \\) and is shifted up by 1. Find \\( a \\), \\( b \\) and \\( c \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'find parameters', 'amplitude', 'period'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the amplitude to find \\( a \\).',
                    workingLatex: 'a = 3',
                    explanation: 'The amplitude is \\( |a| \\); take the positive root.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the period formula.',
                    workingLatex: '\\tfrac{360^\\circ}{b} = 120^\\circ',
                    explanation: 'For \\( y = a\\sin(bx) + c \\), the period is \\( 360^\\circ/b \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( b \\).',
                    workingLatex: 'b = \\tfrac{360^\\circ}{120^\\circ} = 3',
                    explanation: 'Standard arithmetic.'
                },
                {
                    stepNumber: 4,
                    description: 'Identify the vertical shift.',
                    workingLatex: 'c = 1',
                    explanation: '"Shifted up by 1" means \\( c = 1 \\) (additive constant outside).',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -3.5,
                        yMax: 4.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-2, 1, 4],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 1], [2, 1.3136], [4, 1.6237], [6, 1.9271], [8, 2.2202], [10, 2.5], [12, 2.7634], [14, 3.0074], [16, 3.2294], [18, 3.4271], [20, 3.5981], [22, 3.7406], [24, 3.8532], [26, 3.9344], [28, 3.9836], [30, 4], [32, 3.9836], [34, 3.9344], [36, 3.8532], [38, 3.7406], [40, 3.5981], [42, 3.4271], [44, 3.2294], [46, 3.0074], [48, 2.7634], [50, 2.5], [52, 2.2202], [54, 1.9271], [56, 1.6237], [58, 1.3136], [60, 1], [62, 0.6864], [64, 0.3763], [66, 0.0729], [68, -0.2202], [70, -0.5], [72, -0.7634], [74, -1.0074], [76, -1.2294], [78, -1.4271], [80, -1.5981], [82, -1.7406], [84, -1.8532], [86, -1.9344], [88, -1.9836], [90, -2], [92, -1.9836], [94, -1.9344], [96, -1.8532], [98, -1.7406], [100, -1.5981], [102, -1.4271], [104, -1.2294], [106, -1.0074], [108, -0.7634], [110, -0.5], [112, -0.2202], [114, 0.0729], [116, 0.3763], [118, 0.6864], [120, 1], [122, 1.3136], [124, 1.6237], [126, 1.9271], [128, 2.2202], [130, 2.5], [132, 2.7634], [134, 3.0074], [136, 3.2294], [138, 3.4271], [140, 3.5981], [142, 3.7406], [144, 3.8532], [146, 3.9344], [148, 3.9836], [150, 4], [152, 3.9836], [154, 3.9344], [156, 3.8532], [158, 3.7406], [160, 3.5981], [162, 3.4271], [164, 3.2294], [166, 3.0074], [168, 2.7634], [170, 2.5], [172, 2.2202], [174, 1.9271], [176, 1.6237], [178, 1.3136], [180, 1], [182, 0.6864], [184, 0.3763], [186, 0.0729], [188, -0.2202], [190, -0.5], [192, -0.7634], [194, -1.0074], [196, -1.2294], [198, -1.4271], [200, -1.5981], [202, -1.7406], [204, -1.8532], [206, -1.9344], [208, -1.9836], [210, -2], [212, -1.9836], [214, -1.9344], [216, -1.8532], [218, -1.7406], [220, -1.5981], [222, -1.4271], [224, -1.2294], [226, -1.0074], [228, -0.7634], [230, -0.5], [232, -0.2202], [234, 0.0729], [236, 0.3763], [238, 0.6864], [240, 1], [242, 1.3136], [244, 1.6237], [246, 1.9271], [248, 2.2202], [250, 2.5], [252, 2.7634], [254, 3.0074], [256, 3.2294], [258, 3.4271], [260, 3.5981], [262, 3.7406], [264, 3.8532], [266, 3.9344], [268, 3.9836], [270, 4], [272, 3.9836], [274, 3.9344], [276, 3.8532], [278, 3.7406], [280, 3.5981], [282, 3.4271], [284, 3.2294], [286, 3.0074], [288, 2.7634], [290, 2.5], [292, 2.2202], [294, 1.9271], [296, 1.6237], [298, 1.3136], [300, 1], [302, 0.6864], [304, 0.3763], [306, 0.0729], [308, -0.2202], [310, -0.5], [312, -0.7634], [314, -1.0074], [316, -1.2294], [318, -1.4271], [320, -1.5981], [322, -1.7406], [324, -1.8532], [326, -1.9344], [328, -1.9836], [330, -2], [332, -1.9836], [334, -1.9344], [336, -1.8532], [338, -1.7406], [340, -1.5981], [342, -1.4271], [344, -1.2294], [346, -1.0074], [348, -0.7634], [350, -0.5], [352, -0.2202], [354, 0.0729], [356, 0.3763], [358, 0.6864], [360, 1]], color: '#2563eb', label: 'y = 3\\sin 3x + 1', labelAt: [240, 4.2] }
                        ],
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#94a3b8', dashed: true, label: 'midline y=1', labelAt: [310, 1.3] }
                        ],
                        points: [
                            { at: [30, 4], label: 'max', labelAnchor: 'n' },
                            { at: [90, -2], label: 'min', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( a = 3,\\ b = 3,\\ c = 1 \\)'
        }
    },
    {
        id: 't3-051',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 51',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin x = -1 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'solutions', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the value \\( -1 \\) as the minimum of sine.',
                    workingLatex: '\\min \\sin x = -1',
                    explanation: 'Sine reaches \\( -1 \\) exactly once per period.'
                },
                {
                    stepNumber: 2,
                    description: 'Identify where this minimum occurs in the interval.',
                    workingLatex: 'x = 270^\\circ',
                    explanation: 'In \\( [0^\\circ, 360^\\circ] \\), the sine curve dips to its minimum at \\( x = 270^\\circ \\).',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [4.5, 0.0785], [9, 0.1564], [13.5, 0.2334], [18, 0.309], [22.5, 0.3827], [27, 0.454], [31.5, 0.5225], [36, 0.5878], [40.5, 0.6494], [45, 0.7071], [49.5, 0.7604], [54, 0.809], [58.5, 0.8526], [63, 0.891], [67.5, 0.9239], [72, 0.9511], [76.5, 0.9724], [81, 0.9877], [85.5, 0.9969], [90, 1], [94.5, 0.9969], [99, 0.9877], [103.5, 0.9724], [108, 0.9511], [112.5, 0.9239], [117, 0.891], [121.5, 0.8526], [126, 0.809], [130.5, 0.7604], [135, 0.7071], [139.5, 0.6494], [144, 0.5878], [148.5, 0.5225], [153, 0.454], [157.5, 0.3827], [162, 0.309], [166.5, 0.2334], [171, 0.1564], [175.5, 0.0785], [180, 0], [184.5, -0.0785], [189, -0.1564], [193.5, -0.2334], [198, -0.309], [202.5, -0.3827], [207, -0.454], [211.5, -0.5225], [216, -0.5878], [220.5, -0.6494], [225, -0.7071], [229.5, -0.7604], [234, -0.809], [238.5, -0.8526], [243, -0.891], [247.5, -0.9239], [252, -0.9511], [256.5, -0.9724], [261, -0.9877], [265.5, -0.9969], [270, -1], [274.5, -0.9969], [279, -0.9877], [283.5, -0.9724], [288, -0.9511], [292.5, -0.9239], [297, -0.891], [301.5, -0.8526], [306, -0.809], [310.5, -0.7604], [315, -0.7071], [319.5, -0.6494], [324, -0.5878], [328.5, -0.5225], [333, -0.454], [337.5, -0.3827], [342, -0.309], [346.5, -0.2334], [351, -0.1564], [355.5, -0.0785], [360, 0]], color: '#2563eb', label: 'y = \\sin x', labelAt: [300, 1.25] }
                        ],
                        lines: [
                            { from: [0, -1], to: [360, -1], color: '#dc2626', dashed: true, label: 'y = -1', labelAt: [310, -0.85] }
                        ],
                        points: [
                            { at: [270, -1], label: 'min (270°, -1)', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( x = 270^\\circ \\)'
        }
    },
    {
        id: 't3-052',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 52',
        difficulty: 'Foundation',
        questionText: 'How many times does the line \\( y = 0.8 \\) intersect \\( y = \\sin 3x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\)?',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'intersections', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the period of \\( \\sin 3x \\).',
                    workingLatex: '\\text{Period} = \\tfrac{360^\\circ}{3} = 120^\\circ',
                    explanation: 'Tripling the input frequency triples the cycles within the same interval.'
                },
                {
                    stepNumber: 2,
                    description: 'Count complete cycles in \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: '3 \\text{ cycles}',
                    explanation: 'Three full oscillations fit in the standard interval.'
                },
                {
                    stepNumber: 3,
                    description: 'Solutions per cycle for \\( \\sin \\theta = 0.8 \\).',
                    workingLatex: '2 \\text{ solutions per cycle}',
                    explanation: 'A horizontal line \\( y = c \\) with \\( |c| < 1 \\) cuts each full cycle of sine twice.'
                },
                {
                    stepNumber: 4,
                    description: 'Total intersections.',
                    workingLatex: '3 \\times 2 = 6',
                    explanation: 'Multiply cycles by solutions per cycle.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 0.8, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [2, 0.1045], [4, 0.2079], [6, 0.309], [8, 0.4067], [10, 0.5], [12, 0.5878], [14, 0.6691], [16, 0.7431], [18, 0.809], [20, 0.866], [22, 0.9135], [24, 0.9511], [26, 0.9781], [28, 0.9945], [30, 1], [32, 0.9945], [34, 0.9781], [36, 0.9511], [38, 0.9135], [40, 0.866], [42, 0.809], [44, 0.7431], [46, 0.6691], [48, 0.5878], [50, 0.5], [52, 0.4067], [54, 0.309], [56, 0.2079], [58, 0.1045], [60, 0], [62, -0.1045], [64, -0.2079], [66, -0.309], [68, -0.4067], [70, -0.5], [72, -0.5878], [74, -0.6691], [76, -0.7431], [78, -0.809], [80, -0.866], [82, -0.9135], [84, -0.9511], [86, -0.9781], [88, -0.9945], [90, -1], [92, -0.9945], [94, -0.9781], [96, -0.9511], [98, -0.9135], [100, -0.866], [102, -0.809], [104, -0.7431], [106, -0.6691], [108, -0.5878], [110, -0.5], [112, -0.4067], [114, -0.309], [116, -0.2079], [118, -0.1045], [120, 0], [122, 0.1045], [124, 0.2079], [126, 0.309], [128, 0.4067], [130, 0.5], [132, 0.5878], [134, 0.6691], [136, 0.7431], [138, 0.809], [140, 0.866], [142, 0.9135], [144, 0.9511], [146, 0.9781], [148, 0.9945], [150, 1], [152, 0.9945], [154, 0.9781], [156, 0.9511], [158, 0.9135], [160, 0.866], [162, 0.809], [164, 0.7431], [166, 0.6691], [168, 0.5878], [170, 0.5], [172, 0.4067], [174, 0.309], [176, 0.2079], [178, 0.1045], [180, 0], [182, -0.1045], [184, -0.2079], [186, -0.309], [188, -0.4067], [190, -0.5], [192, -0.5878], [194, -0.6691], [196, -0.7431], [198, -0.809], [200, -0.866], [202, -0.9135], [204, -0.9511], [206, -0.9781], [208, -0.9945], [210, -1], [212, -0.9945], [214, -0.9781], [216, -0.9511], [218, -0.9135], [220, -0.866], [222, -0.809], [224, -0.7431], [226, -0.6691], [228, -0.5878], [230, -0.5], [232, -0.4067], [234, -0.309], [236, -0.2079], [238, -0.1045], [240, 0], [242, 0.1045], [244, 0.2079], [246, 0.309], [248, 0.4067], [250, 0.5], [252, 0.5878], [254, 0.6691], [256, 0.7431], [258, 0.809], [260, 0.866], [262, 0.9135], [264, 0.9511], [266, 0.9781], [268, 0.9945], [270, 1], [272, 0.9945], [274, 0.9781], [276, 0.9511], [278, 0.9135], [280, 0.866], [282, 0.809], [284, 0.7431], [286, 0.6691], [288, 0.5878], [290, 0.5], [292, 0.4067], [294, 0.309], [296, 0.2079], [298, 0.1045], [300, 0], [302, -0.1045], [304, -0.2079], [306, -0.309], [308, -0.4067], [310, -0.5], [312, -0.5878], [314, -0.6691], [316, -0.7431], [318, -0.809], [320, -0.866], [322, -0.9135], [324, -0.9511], [326, -0.9781], [328, -0.9945], [330, -1], [332, -0.9945], [334, -0.9781], [336, -0.9511], [338, -0.9135], [340, -0.866], [342, -0.809], [344, -0.7431], [346, -0.6691], [348, -0.5878], [350, -0.5], [352, -0.4067], [354, -0.309], [356, -0.2079], [358, -0.1045], [360, 0]], color: '#2563eb', label: 'y = \\sin 3x', labelAt: [260, 1.25] }
                        ],
                        lines: [
                            { from: [0, 0.8], to: [360, 0.8], color: '#dc2626', dashed: true, label: 'y = 0.8', labelAt: [310, 0.9] }
                        ]
                    }
                }
            ],
            finalAnswer: '6 intersections'
        }
    },
    {
        id: 't3-053',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 53',
        difficulty: 'Foundation',
        questionText: 'Describe the transformations that map \\( y = \\cos x \\) to \\( y = 3\\cos(2x) + 1 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'combined transformations', 'cos x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'First, the inside change \\( x \\to 2x \\).',
                    workingLatex: '\\cos x \\longrightarrow \\cos 2x',
                    explanation: 'Horizontal compression by scale factor \\( \\tfrac{1}{2} \\); the period halves to \\( 180^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Then, the outside multiplier of 3.',
                    workingLatex: '\\cos 2x \\longrightarrow 3\\cos 2x',
                    explanation: 'Vertical stretch by scale factor 3; the amplitude is 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Finally, the additive constant of \\( +1 \\).',
                    workingLatex: '3\\cos 2x \\longrightarrow 3\\cos 2x + 1',
                    explanation: 'Translation \\( +1 \\) in the \\( y \\)-direction. Order matters in description but inside vs outside transformations commute among themselves.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -2.5,
                        yMax: 4.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-2, 1, 4],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 4], [3, 3.9836], [6, 3.9344], [9, 3.8532], [12, 3.7406], [15, 3.5981], [18, 3.4271], [21, 3.2294], [24, 3.0074], [27, 2.7634], [30, 2.5], [33, 2.2202], [36, 1.9271], [39, 1.6237], [42, 1.3136], [45, 1], [48, 0.6864], [51, 0.3763], [54, 0.0729], [57, -0.2202], [60, -0.5], [63, -0.7634], [66, -1.0074], [69, -1.2294], [72, -1.4271], [75, -1.5981], [78, -1.7406], [81, -1.8532], [84, -1.9344], [87, -1.9836], [90, -2], [93, -1.9836], [96, -1.9344], [99, -1.8532], [102, -1.7406], [105, -1.5981], [108, -1.4271], [111, -1.2294], [114, -1.0074], [117, -0.7634], [120, -0.5], [123, -0.2202], [126, 0.0729], [129, 0.3763], [132, 0.6864], [135, 1], [138, 1.3136], [141, 1.6237], [144, 1.9271], [147, 2.2202], [150, 2.5], [153, 2.7634], [156, 3.0074], [159, 3.2294], [162, 3.4271], [165, 3.5981], [168, 3.7406], [171, 3.8532], [174, 3.9344], [177, 3.9836], [180, 4], [183, 3.9836], [186, 3.9344], [189, 3.8532], [192, 3.7406], [195, 3.5981], [198, 3.4271], [201, 3.2294], [204, 3.0074], [207, 2.7634], [210, 2.5], [213, 2.2202], [216, 1.9271], [219, 1.6237], [222, 1.3136], [225, 1], [228, 0.6864], [231, 0.3763], [234, 0.0729], [237, -0.2202], [240, -0.5], [243, -0.7634], [246, -1.0074], [249, -1.2294], [252, -1.4271], [255, -1.5981], [258, -1.7406], [261, -1.8532], [264, -1.9344], [267, -1.9836], [270, -2], [273, -1.9836], [276, -1.9344], [279, -1.8532], [282, -1.7406], [285, -1.5981], [288, -1.4271], [291, -1.2294], [294, -1.0074], [297, -0.7634], [300, -0.5], [303, -0.2202], [306, 0.0729], [309, 0.3763], [312, 0.6864], [315, 1], [318, 1.3136], [321, 1.6237], [324, 1.9271], [327, 2.2202], [330, 2.5], [333, 2.7634], [336, 3.0074], [339, 3.2294], [342, 3.4271], [345, 3.5981], [348, 3.7406], [351, 3.8532], [354, 3.9344], [357, 3.9836], [360, 4]], color: '#16a34a', label: 'y = 3\\cos 2x + 1', labelAt: [260, 4.2] }
                        ],
                        points: [
                            { at: [0, 4], label: 'max', labelAnchor: 'n' },
                            { at: [90, -2], label: 'min', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Horizontal compression scale factor \\( \\tfrac{1}{2} \\), vertical stretch scale factor 3, translation \\( +1 \\) upward.'
        }
    },
    {
        id: 't3-054',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 54',
        difficulty: 'Foundation',
        questionText: 'Find the coordinates of the first maximum of \\( y = 5\\sin(x - 90^\\circ) \\) for \\( x > 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'sin x', 'maximum'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Sine reaches its maximum value when its input equals \\( 90^\\circ + 360^\\circ n \\).',
                    workingLatex: '\\sin \\theta = 1 \\Leftrightarrow \\theta = 90^\\circ + 360^\\circ n',
                    explanation: 'Use the general solution of \\( \\sin \\theta = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set the inside expression equal to \\( 90^\\circ \\).',
                    workingLatex: 'x - 90^\\circ = 90^\\circ',
                    explanation: 'Take \\( n = 0 \\) to get the first positive solution.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = 180^\\circ',
                    explanation: 'Add \\( 90^\\circ \\) to both sides.'
                },
                {
                    stepNumber: 4,
                    description: 'Compute the corresponding \\( y \\)-value.',
                    workingLatex: 'y = 5\\sin 90^\\circ = 5(1) = 5',
                    explanation: 'The amplitude is 5, so the maximum value is \\( y = 5 \\).',
                    diagram: {
                        xMin: 0,
                        xMax: 540,
                        yMin: -5.5,
                        yMax: 5.5,
                        xTicks: [0, 90, 180, 270, 360, 450, 540],
                        yTicks: [-5, 0, 5],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, -5], [4.5, -4.9846], [9, -4.9384], [13.5, -4.8618], [18, -4.7553], [22.5, -4.6194], [27, -4.455], [31.5, -4.2632], [36, -4.0451], [40.5, -3.802], [45, -3.5355], [49.5, -3.2472], [54, -2.9389], [58.5, -2.6125], [63, -2.27], [67.5, -1.9134], [72, -1.5451], [76.5, -1.1672], [81, -0.7822], [85.5, -0.3923], [90, 0], [94.5, 0.3923], [99, 0.7822], [103.5, 1.1672], [108, 1.5451], [112.5, 1.9134], [117, 2.27], [121.5, 2.6125], [126, 2.9389], [130.5, 3.2472], [135, 3.5355], [139.5, 3.802], [144, 4.0451], [148.5, 4.2632], [153, 4.455], [157.5, 4.6194], [162, 4.7553], [166.5, 4.8618], [171, 4.9384], [175.5, 4.9846], [180, 5], [184.5, 4.9846], [189, 4.9384], [193.5, 4.8618], [198, 4.7553], [202.5, 4.6194], [207, 4.455], [211.5, 4.2632], [216, 4.0451], [220.5, 3.802], [225, 3.5355], [229.5, 3.2472], [234, 2.9389], [238.5, 2.6125], [243, 2.27], [247.5, 1.9134], [252, 1.5451], [256.5, 1.1672], [261, 0.7822], [265.5, 0.3923], [270, 0], [274.5, -0.3923], [279, -0.7822], [283.5, -1.1672], [288, -1.5451], [292.5, -1.9134], [297, -2.27], [301.5, -2.6125], [306, -2.9389], [310.5, -3.2472], [315, -3.5355], [319.5, -3.802], [324, -4.0451], [328.5, -4.2632], [333, -4.455], [337.5, -4.6194], [342, -4.7553], [346.5, -4.8618], [351, -4.9384], [355.5, -4.9846], [360, -5], [364.5, -4.9846], [369, -4.9384], [373.5, -4.8618], [378, -4.7553], [382.5, -4.6194], [387, -4.455], [391.5, -4.2632], [396, -4.0451], [400.5, -3.802], [405, -3.5355], [409.5, -3.2472], [414, -2.9389], [418.5, -2.6125], [423, -2.27], [427.5, -1.9134], [432, -1.5451], [436.5, -1.1672], [441, -0.7822], [445.5, -0.3923], [450, 0], [454.5, 0.3923], [459, 0.7822], [463.5, 1.1672], [468, 1.5451], [472.5, 1.9134], [477, 2.27], [481.5, 2.6125], [486, 2.9389], [490.5, 3.2472], [495, 3.5355], [499.5, 3.802], [504, 4.0451], [508.5, 4.2632], [513, 4.455], [517.5, 4.6194], [522, 4.7553], [526.5, 4.8618], [531, 4.9384], [535.5, 4.9846], [540, 5]], color: '#2563eb', label: 'y = 5\\sin(x - 90°)', labelAt: [380, 5.2] }
                        ],
                        points: [
                            { at: [180, 5], label: 'max (180°, 5)', labelAnchor: 'n' },
                            { at: [360, -5], label: 'min', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( (180^\\circ,\\ 5) \\)'
        }
    },
    {
        id: 't3-055',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 55',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = |\\sin x| \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). State its period.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'modulus', 'sin x', 'period', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recall the effect of the modulus.',
                    workingLatex: '|\\sin x| = \\begin{cases} \\sin x & \\sin x \\geq 0 \\\\ -\\sin x & \\sin x < 0 \\end{cases}',
                    explanation: 'Where sine is positive, the graph is unchanged; where it is negative, it is reflected above the \\( x \\)-axis.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply this to \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: '[0^\\circ, 180^\\circ]: |\\sin x| = \\sin x;\\quad [180^\\circ, 360^\\circ]: |\\sin x| = -\\sin x',
                    explanation: 'The trough between \\( 180^\\circ \\) and \\( 360^\\circ \\) becomes a bump.'
                },
                {
                    stepNumber: 3,
                    description: 'Identify the new period.',
                    workingLatex: '\\text{Period} = 180^\\circ',
                    explanation: 'Two identical bumps appear in \\( [0^\\circ, 360^\\circ] \\), so the period halves.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -0.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [0, 0.5, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [3, 0.0523], [6, 0.1045], [9, 0.1564], [12, 0.2079], [15, 0.2588], [18, 0.309], [21, 0.3584], [24, 0.4067], [27, 0.454], [30, 0.5], [33, 0.5446], [36, 0.5878], [39, 0.6293], [42, 0.6691], [45, 0.7071], [48, 0.7431], [51, 0.7771], [54, 0.809], [57, 0.8387], [60, 0.866], [63, 0.891], [66, 0.9135], [69, 0.9336], [72, 0.9511], [75, 0.9659], [78, 0.9781], [81, 0.9877], [84, 0.9945], [87, 0.9986], [90, 1], [93, 0.9986], [96, 0.9945], [99, 0.9877], [102, 0.9781], [105, 0.9659], [108, 0.9511], [111, 0.9336], [114, 0.9135], [117, 0.891], [120, 0.866], [123, 0.8387], [126, 0.809], [129, 0.7771], [132, 0.7431], [135, 0.7071], [138, 0.6691], [141, 0.6293], [144, 0.5878], [147, 0.5446], [150, 0.5], [153, 0.454], [156, 0.4067], [159, 0.3584], [162, 0.309], [165, 0.2588], [168, 0.2079], [171, 0.1564], [174, 0.1045], [177, 0.0523], [180, 0], [183, 0.0523], [186, 0.1045], [189, 0.1564], [192, 0.2079], [195, 0.2588], [198, 0.309], [201, 0.3584], [204, 0.4067], [207, 0.454], [210, 0.5], [213, 0.5446], [216, 0.5878], [219, 0.6293], [222, 0.6691], [225, 0.7071], [228, 0.7431], [231, 0.7771], [234, 0.809], [237, 0.8387], [240, 0.866], [243, 0.891], [246, 0.9135], [249, 0.9336], [252, 0.9511], [255, 0.9659], [258, 0.9781], [261, 0.9877], [264, 0.9945], [267, 0.9986], [270, 1], [273, 0.9986], [276, 0.9945], [279, 0.9877], [282, 0.9781], [285, 0.9659], [288, 0.9511], [291, 0.9336], [294, 0.9135], [297, 0.891], [300, 0.866], [303, 0.8387], [306, 0.809], [309, 0.7771], [312, 0.7431], [315, 0.7071], [318, 0.6691], [321, 0.6293], [324, 0.5878], [327, 0.5446], [330, 0.5], [333, 0.454], [336, 0.4067], [339, 0.3584], [342, 0.309], [345, 0.2588], [348, 0.2079], [351, 0.1564], [354, 0.1045], [357, 0.0523], [360, 0]], color: '#2563eb', label: 'y = |\\sin x|', labelAt: [270, 1.25] }
                        ],
                        points: [
                            { at: [90, 1], label: 'max', labelAnchor: 'n' },
                            { at: [270, 1], label: 'max', labelAnchor: 'n' },
                            { at: [0, 0], label: 'zero', labelAnchor: 'sw' },
                            { at: [180, 0], label: 'zero', labelAnchor: 'sw' },
                            { at: [360, 0], label: 'zero', labelAnchor: 'sw' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Two non-negative bumps; period \\( = 180^\\circ \\).'
        }
    },
    {
        id: 't3-056',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 56',
        difficulty: 'Foundation',
        questionText: 'For what values of \\( x \\) in \\( [0^\\circ, 360^\\circ] \\) is \\( \\sin x > \\cos x \\)?',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'inequalities', 'sin x', 'cos x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find when the two graphs are equal.',
                    workingLatex: '\\sin x = \\cos x',
                    explanation: 'The inequality switches sign at the points of intersection.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide by \\( \\cos x \\) (valid except where \\( \\cos x = 0 \\)).',
                    workingLatex: '\\tan x = 1',
                    explanation: 'Convert to a single trigonometric ratio.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve \\( \\tan x = 1 \\) in \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: 'x = 45^\\circ,\\ 225^\\circ',
                    explanation: 'Standard solutions of \\( \\tan x = 1 \\), spaced by the tangent period \\( 180^\\circ \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Test a value between the crossings, e.g., \\( x = 90^\\circ \\).',
                    workingLatex: '\\sin 90^\\circ = 1 > 0 = \\cos 90^\\circ',
                    explanation: 'Sine is larger between \\( 45^\\circ \\) and \\( 225^\\circ \\).'
                },
                {
                    stepNumber: 5,
                    description: 'State the solution set.',
                    workingLatex: '45^\\circ < x < 225^\\circ',
                    explanation: 'Open interval because the inequality is strict.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [4.5, 0.0785], [9, 0.1564], [13.5, 0.2334], [18, 0.309], [22.5, 0.3827], [27, 0.454], [31.5, 0.5225], [36, 0.5878], [40.5, 0.6494], [45, 0.7071], [49.5, 0.7604], [54, 0.809], [58.5, 0.8526], [63, 0.891], [67.5, 0.9239], [72, 0.9511], [76.5, 0.9724], [81, 0.9877], [85.5, 0.9969], [90, 1], [94.5, 0.9969], [99, 0.9877], [103.5, 0.9724], [108, 0.9511], [112.5, 0.9239], [117, 0.891], [121.5, 0.8526], [126, 0.809], [130.5, 0.7604], [135, 0.7071], [139.5, 0.6494], [144, 0.5878], [148.5, 0.5225], [153, 0.454], [157.5, 0.3827], [162, 0.309], [166.5, 0.2334], [171, 0.1564], [175.5, 0.0785], [180, 0], [184.5, -0.0785], [189, -0.1564], [193.5, -0.2334], [198, -0.309], [202.5, -0.3827], [207, -0.454], [211.5, -0.5225], [216, -0.5878], [220.5, -0.6494], [225, -0.7071], [229.5, -0.7604], [234, -0.809], [238.5, -0.8526], [243, -0.891], [247.5, -0.9239], [252, -0.9511], [256.5, -0.9724], [261, -0.9877], [265.5, -0.9969], [270, -1], [274.5, -0.9969], [279, -0.9877], [283.5, -0.9724], [288, -0.9511], [292.5, -0.9239], [297, -0.891], [301.5, -0.8526], [306, -0.809], [310.5, -0.7604], [315, -0.7071], [319.5, -0.6494], [324, -0.5878], [328.5, -0.5225], [333, -0.454], [337.5, -0.3827], [342, -0.309], [346.5, -0.2334], [351, -0.1564], [355.5, -0.0785], [360, 0]], color: '#2563eb', label: 'y = \\sin x', labelAt: [260, 1.25] },
                            { points: [[0, 1], [4.5, 0.9969], [9, 0.9877], [13.5, 0.9724], [18, 0.9511], [22.5, 0.9239], [27, 0.891], [31.5, 0.8526], [36, 0.809], [40.5, 0.7604], [45, 0.7071], [49.5, 0.6494], [54, 0.5878], [58.5, 0.5225], [63, 0.454], [67.5, 0.3827], [72, 0.309], [76.5, 0.2334], [81, 0.1564], [85.5, 0.0785], [90, 0], [94.5, -0.0785], [99, -0.1564], [103.5, -0.2334], [108, -0.309], [112.5, -0.3827], [117, -0.454], [121.5, -0.5225], [126, -0.5878], [130.5, -0.6494], [135, -0.7071], [139.5, -0.7604], [144, -0.809], [148.5, -0.8526], [153, -0.891], [157.5, -0.9239], [162, -0.9511], [166.5, -0.9724], [171, -0.9877], [175.5, -0.9969], [180, -1], [184.5, -0.9969], [189, -0.9877], [193.5, -0.9724], [198, -0.9511], [202.5, -0.9239], [207, -0.891], [211.5, -0.8526], [216, -0.809], [220.5, -0.7604], [225, -0.7071], [229.5, -0.6494], [234, -0.5878], [238.5, -0.5225], [243, -0.454], [247.5, -0.3827], [252, -0.309], [256.5, -0.2334], [261, -0.1564], [265.5, -0.0785], [270, 0], [274.5, 0.0785], [279, 0.1564], [283.5, 0.2334], [288, 0.309], [292.5, 0.3827], [297, 0.454], [301.5, 0.5225], [306, 0.5878], [310.5, 0.6494], [315, 0.7071], [319.5, 0.7604], [324, 0.809], [328.5, 0.8526], [333, 0.891], [337.5, 0.9239], [342, 0.9511], [346.5, 0.9724], [351, 0.9877], [355.5, 0.9969], [360, 1]], color: '#16a34a', label: 'y = \\cos x', labelAt: [260, -1.25] }
                        ],
                        points: [
                            { at: [45, 0.7071], label: '45°', labelAnchor: 'n' },
                            { at: [225, -0.7071], label: '225°', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( 45^\\circ < x < 225^\\circ \\)'
        }
    },
    {
        id: 't3-057',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 57',
        difficulty: 'Foundation',
        questionText: 'Write down the equation of the graph obtained by reflecting \\( y = \\sin x \\) in the y-axis.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'reflection', 'sin x', 'odd function'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Reflecting in the \\( y \\)-axis replaces \\( x \\) with \\( -x \\).',
                    workingLatex: 'y = \\sin(-x)',
                    explanation: 'A reflection in the \\( y \\)-axis negates the input.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the odd-function property \\( \\sin(-x) = -\\sin x \\).',
                    workingLatex: '\\sin(-x) = -\\sin x',
                    explanation: 'Sine is an odd function: its graph has rotational symmetry about the origin.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the simplified equation.',
                    workingLatex: 'y = -\\sin x',
                    explanation: 'Equivalent to reflecting \\( y = \\sin x \\) in the \\( x \\)-axis as well — a useful identity.',
                    diagram: {
                        xMin: -360,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [-360, -270, -180, -90, 0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[-360, 0], [-354, 0.1045], [-348, 0.2079], [-342, 0.309], [-336, 0.4067], [-330, 0.5], [-324, 0.5878], [-318, 0.6691], [-312, 0.7431], [-306, 0.809], [-300, 0.866], [-294, 0.9135], [-288, 0.9511], [-282, 0.9781], [-276, 0.9945], [-270, 1], [-264, 0.9945], [-258, 0.9781], [-252, 0.9511], [-246, 0.9135], [-240, 0.866], [-234, 0.809], [-228, 0.7431], [-222, 0.6691], [-216, 0.5878], [-210, 0.5], [-204, 0.4067], [-198, 0.309], [-192, 0.2079], [-186, 0.1045], [-180, 0], [-174, -0.1045], [-168, -0.2079], [-162, -0.309], [-156, -0.4067], [-150, -0.5], [-144, -0.5878], [-138, -0.6691], [-132, -0.7431], [-126, -0.809], [-120, -0.866], [-114, -0.9135], [-108, -0.9511], [-102, -0.9781], [-96, -0.9945], [-90, -1], [-84, -0.9945], [-78, -0.9781], [-72, -0.9511], [-66, -0.9135], [-60, -0.866], [-54, -0.809], [-48, -0.7431], [-42, -0.6691], [-36, -0.5878], [-30, -0.5], [-24, -0.4067], [-18, -0.309], [-12, -0.2079], [-6, -0.1045], [0, 0], [6, 0.1045], [12, 0.2079], [18, 0.309], [24, 0.4067], [30, 0.5], [36, 0.5878], [42, 0.6691], [48, 0.7431], [54, 0.809], [60, 0.866], [66, 0.9135], [72, 0.9511], [78, 0.9781], [84, 0.9945], [90, 1], [96, 0.9945], [102, 0.9781], [108, 0.9511], [114, 0.9135], [120, 0.866], [126, 0.809], [132, 0.7431], [138, 0.6691], [144, 0.5878], [150, 0.5], [156, 0.4067], [162, 0.309], [168, 0.2079], [174, 0.1045], [180, 0], [186, -0.1045], [192, -0.2079], [198, -0.309], [204, -0.4067], [210, -0.5], [216, -0.5878], [222, -0.6691], [228, -0.7431], [234, -0.809], [240, -0.866], [246, -0.9135], [252, -0.9511], [258, -0.9781], [264, -0.9945], [270, -1], [276, -0.9945], [282, -0.9781], [288, -0.9511], [294, -0.9135], [300, -0.866], [306, -0.809], [312, -0.7431], [318, -0.6691], [324, -0.5878], [330, -0.5], [336, -0.4067], [342, -0.309], [348, -0.2079], [354, -0.1045], [360, 0]], color: '#94a3b8', label: 'y = \\sin x', labelAt: [290, 1.2] },
                            { points: [[-360, 0], [-354, -0.1045], [-348, -0.2079], [-342, -0.309], [-336, -0.4067], [-330, -0.5], [-324, -0.5878], [-318, -0.6691], [-312, -0.7431], [-306, -0.809], [-300, -0.866], [-294, -0.9135], [-288, -0.9511], [-282, -0.9781], [-276, -0.9945], [-270, -1], [-264, -0.9945], [-258, -0.9781], [-252, -0.9511], [-246, -0.9135], [-240, -0.866], [-234, -0.809], [-228, -0.7431], [-222, -0.6691], [-216, -0.5878], [-210, -0.5], [-204, -0.4067], [-198, -0.309], [-192, -0.2079], [-186, -0.1045], [-180, 0], [-174, 0.1045], [-168, 0.2079], [-162, 0.309], [-156, 0.4067], [-150, 0.5], [-144, 0.5878], [-138, 0.6691], [-132, 0.7431], [-126, 0.809], [-120, 0.866], [-114, 0.9135], [-108, 0.9511], [-102, 0.9781], [-96, 0.9945], [-90, 1], [-84, 0.9945], [-78, 0.9781], [-72, 0.9511], [-66, 0.9135], [-60, 0.866], [-54, 0.809], [-48, 0.7431], [-42, 0.6691], [-36, 0.5878], [-30, 0.5], [-24, 0.4067], [-18, 0.309], [-12, 0.2079], [-6, 0.1045], [0, 0], [6, -0.1045], [12, -0.2079], [18, -0.309], [24, -0.4067], [30, -0.5], [36, -0.5878], [42, -0.6691], [48, -0.7431], [54, -0.809], [60, -0.866], [66, -0.9135], [72, -0.9511], [78, -0.9781], [84, -0.9945], [90, -1], [96, -0.9945], [102, -0.9781], [108, -0.9511], [114, -0.9135], [120, -0.866], [126, -0.809], [132, -0.7431], [138, -0.6691], [144, -0.5878], [150, -0.5], [156, -0.4067], [162, -0.309], [168, -0.2079], [174, -0.1045], [180, 0], [186, 0.1045], [192, 0.2079], [198, 0.309], [204, 0.4067], [210, 0.5], [216, 0.5878], [222, 0.6691], [228, 0.7431], [234, 0.809], [240, 0.866], [246, 0.9135], [252, 0.9511], [258, 0.9781], [264, 0.9945], [270, 1], [276, 0.9945], [282, 0.9781], [288, 0.9511], [294, 0.9135], [300, 0.866], [306, 0.809], [312, 0.7431], [318, 0.6691], [324, 0.5878], [330, 0.5], [336, 0.4067], [342, 0.309], [348, 0.2079], [354, 0.1045], [360, 0]], color: '#dc2626', label: 'y = -\\sin x', labelAt: [290, -1.25] }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( y = -\\sin x \\)'
        }
    },
    {
        id: 't3-058',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 58',
        difficulty: 'Foundation',
        questionText: 'Write down the equation of the graph obtained by reflecting \\( y = \\cos x \\) in the y-axis.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'reflection', 'cos x', 'even function'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Reflecting in the \\( y \\)-axis replaces \\( x \\) with \\( -x \\).',
                    workingLatex: 'y = \\cos(-x)',
                    explanation: 'Same rule as before.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the even-function property \\( \\cos(-x) = \\cos x \\).',
                    workingLatex: '\\cos(-x) = \\cos x',
                    explanation: 'Cosine is even: its graph is symmetric about the \\( y \\)-axis.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'y = \\cos x',
                    explanation: 'The graph is unchanged — reflecting an even function in the \\( y \\)-axis returns the same curve.',
                    diagram: {
                        xMin: -360,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [-360, -270, -180, -90, 0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[-360, 1], [-354, 0.9945], [-348, 0.9781], [-342, 0.9511], [-336, 0.9135], [-330, 0.866], [-324, 0.809], [-318, 0.7431], [-312, 0.6691], [-306, 0.5878], [-300, 0.5], [-294, 0.4067], [-288, 0.309], [-282, 0.2079], [-276, 0.1045], [-270, 0], [-264, -0.1045], [-258, -0.2079], [-252, -0.309], [-246, -0.4067], [-240, -0.5], [-234, -0.5878], [-228, -0.6691], [-222, -0.7431], [-216, -0.809], [-210, -0.866], [-204, -0.9135], [-198, -0.9511], [-192, -0.9781], [-186, -0.9945], [-180, -1], [-174, -0.9945], [-168, -0.9781], [-162, -0.9511], [-156, -0.9135], [-150, -0.866], [-144, -0.809], [-138, -0.7431], [-132, -0.6691], [-126, -0.5878], [-120, -0.5], [-114, -0.4067], [-108, -0.309], [-102, -0.2079], [-96, -0.1045], [-90, 0], [-84, 0.1045], [-78, 0.2079], [-72, 0.309], [-66, 0.4067], [-60, 0.5], [-54, 0.5878], [-48, 0.6691], [-42, 0.7431], [-36, 0.809], [-30, 0.866], [-24, 0.9135], [-18, 0.9511], [-12, 0.9781], [-6, 0.9945], [0, 1], [6, 0.9945], [12, 0.9781], [18, 0.9511], [24, 0.9135], [30, 0.866], [36, 0.809], [42, 0.7431], [48, 0.6691], [54, 0.5878], [60, 0.5], [66, 0.4067], [72, 0.309], [78, 0.2079], [84, 0.1045], [90, 0], [96, -0.1045], [102, -0.2079], [108, -0.309], [114, -0.4067], [120, -0.5], [126, -0.5878], [132, -0.6691], [138, -0.7431], [144, -0.809], [150, -0.866], [156, -0.9135], [162, -0.9511], [168, -0.9781], [174, -0.9945], [180, -1], [186, -0.9945], [192, -0.9781], [198, -0.9511], [204, -0.9135], [210, -0.866], [216, -0.809], [222, -0.7431], [228, -0.6691], [234, -0.5878], [240, -0.5], [246, -0.4067], [252, -0.309], [258, -0.2079], [264, -0.1045], [270, 0], [276, 0.1045], [282, 0.2079], [288, 0.309], [294, 0.4067], [300, 0.5], [306, 0.5878], [312, 0.6691], [318, 0.7431], [324, 0.809], [330, 0.866], [336, 0.9135], [342, 0.9511], [348, 0.9781], [354, 0.9945], [360, 1]], color: '#16a34a', label: 'y = \\cos x', labelAt: [260, 1.25] }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( y = \\cos x \\) (unchanged)'
        }
    },
    {
        id: 't3-059',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 59',
        difficulty: 'Foundation',
        questionText: 'Find the smallest positive value of \\( x \\) for which \\( \\sin 2x = 1 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'sin x', 'equations'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the inside expression to the principal solution.',
                    workingLatex: '\\sin 2x = 1 \\Leftrightarrow 2x = 90^\\circ + 360^\\circ n',
                    explanation: 'Sine equals 1 when its argument is \\( 90^\\circ \\) plus any multiple of \\( 360^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Take \\( n = 0 \\) for the smallest positive solution.',
                    workingLatex: '2x = 90^\\circ',
                    explanation: 'Smaller \\( n \\) gives a non-positive \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = 45^\\circ',
                    explanation: 'Divide by 2.',
                    diagram: {
                        xMin: 0,
                        xMax: 180,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 45, 90, 135, 180],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [2.25, 0.0785], [4.5, 0.1564], [6.75, 0.2334], [9, 0.309], [11.25, 0.3827], [13.5, 0.454], [15.75, 0.5225], [18, 0.5878], [20.25, 0.6494], [22.5, 0.7071], [24.75, 0.7604], [27, 0.809], [29.25, 0.8526], [31.5, 0.891], [33.75, 0.9239], [36, 0.9511], [38.25, 0.9724], [40.5, 0.9877], [42.75, 0.9969], [45, 1], [47.25, 0.9969], [49.5, 0.9877], [51.75, 0.9724], [54, 0.9511], [56.25, 0.9239], [58.5, 0.891], [60.75, 0.8526], [63, 0.809], [65.25, 0.7604], [67.5, 0.7071], [69.75, 0.6494], [72, 0.5878], [74.25, 0.5225], [76.5, 0.454], [78.75, 0.3827], [81, 0.309], [83.25, 0.2334], [85.5, 0.1564], [87.75, 0.0785], [90, 0], [92.25, -0.0785], [94.5, -0.1564], [96.75, -0.2334], [99, -0.309], [101.25, -0.3827], [103.5, -0.454], [105.75, -0.5225], [108, -0.5878], [110.25, -0.6494], [112.5, -0.7071], [114.75, -0.7604], [117, -0.809], [119.25, -0.8526], [121.5, -0.891], [123.75, -0.9239], [126, -0.9511], [128.25, -0.9724], [130.5, -0.9877], [132.75, -0.9969], [135, -1], [137.25, -0.9969], [139.5, -0.9877], [141.75, -0.9724], [144, -0.9511], [146.25, -0.9239], [148.5, -0.891], [150.75, -0.8526], [153, -0.809], [155.25, -0.7604], [157.5, -0.7071], [159.75, -0.6494], [162, -0.5878], [164.25, -0.5225], [166.5, -0.454], [168.75, -0.3827], [171, -0.309], [173.25, -0.2334], [175.5, -0.1564], [177.75, -0.0785], [180, 0]], color: '#2563eb', label: 'y = \\sin 2x', labelAt: [135, 1.25] }
                        ],
                        points: [
                            { at: [45, 1], label: '(45°, 1) max', labelAnchor: 'n' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( x = 45^\\circ \\)'
        }
    },
    {
        id: 't3-060',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 60',
        difficulty: 'Foundation',
        questionText: 'The maximum value of \\( y = a - b\\cos x \\) is 7 and the minimum is 1. Find \\( a \\) and \\( b \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'find parameters', 'cos x', 'max and min'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The maximum of \\( a - b\\cos x \\) occurs when \\( \\cos x = -1 \\) (assuming \\( b > 0 \\)).',
                    workingLatex: '\\text{Max} = a - b(-1) = a + b = 7',
                    explanation: 'Subtracting a more negative number gives a larger result.'
                },
                {
                    stepNumber: 2,
                    description: 'The minimum occurs when \\( \\cos x = 1 \\).',
                    workingLatex: '\\text{Min} = a - b(1) = a - b = 1',
                    explanation: 'Subtracting a positive number gives a smaller result.'
                },
                {
                    stepNumber: 3,
                    description: 'Add the two equations.',
                    workingLatex: '2a = 8 \\Rightarrow a = 4',
                    explanation: 'Eliminates \\( b \\) by addition.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute back to find \\( b \\).',
                    workingLatex: '4 + b = 7 \\Rightarrow b = 3',
                    explanation: 'Use either equation; both give the same value.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: 0,
                        yMax: 8,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [1, 4, 7],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 1], [4.5, 1.0092], [9, 1.0369], [13.5, 1.0829], [18, 1.1468], [22.5, 1.2284], [27, 1.327], [31.5, 1.4421], [36, 1.5729], [40.5, 1.7188], [45, 1.8787], [49.5, 2.0517], [54, 2.2366], [58.5, 2.4325], [63, 2.638], [67.5, 2.8519], [72, 3.0729], [76.5, 3.2997], [81, 3.5307], [85.5, 3.7646], [90, 4], [94.5, 4.2354], [99, 4.4693], [103.5, 4.7003], [108, 4.9271], [112.5, 5.1481], [117, 5.362], [121.5, 5.5675], [126, 5.7634], [130.5, 5.9483], [135, 6.1213], [139.5, 6.2812], [144, 6.4271], [148.5, 6.5579], [153, 6.673], [157.5, 6.7716], [162, 6.8532], [166.5, 6.9171], [171, 6.9631], [175.5, 6.9908], [180, 7], [184.5, 6.9908], [189, 6.9631], [193.5, 6.9171], [198, 6.8532], [202.5, 6.7716], [207, 6.673], [211.5, 6.5579], [216, 6.4271], [220.5, 6.2812], [225, 6.1213], [229.5, 5.9483], [234, 5.7634], [238.5, 5.5675], [243, 5.362], [247.5, 5.1481], [252, 4.9271], [256.5, 4.7003], [261, 4.4693], [265.5, 4.2354], [270, 4], [274.5, 3.7646], [279, 3.5307], [283.5, 3.2997], [288, 3.0729], [292.5, 2.8519], [297, 2.638], [301.5, 2.4325], [306, 2.2366], [310.5, 2.0517], [315, 1.8787], [319.5, 1.7188], [324, 1.5729], [328.5, 1.4421], [333, 1.327], [337.5, 1.2284], [342, 1.1468], [346.5, 1.0829], [351, 1.0369], [355.5, 1.0092], [360, 1]], color: '#2563eb', label: 'y = 4 - 3\\cos x', labelAt: [240, 7.5] }
                        ],
                        points: [
                            { at: [0, 1], label: 'min (0°, 1)', labelAnchor: 's' },
                            { at: [180, 7], label: 'max (180°, 7)', labelAnchor: 'n' },
                            { at: [360, 1], label: '(360°, 1)', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( a = 4,\\ b = 3 \\)'
        }
    },
    {
        id: 't3-061',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 61',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\sin x \\) and \\( y = \\sin 2x \\) on the same axes for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). How many points of intersection are there?',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'intersections', 'sin x', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the two functions equal.',
                    workingLatex: '\\sin x = \\sin 2x',
                    explanation: 'Intersections occur exactly where the outputs agree.'
                },
                {
                    stepNumber: 2,
                    description: 'Use the double-angle identity \\( \\sin 2x = 2\\sin x \\cos x \\).',
                    workingLatex: '\\sin x = 2\\sin x \\cos x',
                    explanation: 'Replace \\( \\sin 2x \\) by its double-angle expansion.'
                },
                {
                    stepNumber: 3,
                    description: 'Factor out \\( \\sin x \\).',
                    workingLatex: '\\sin x (1 - 2\\cos x) = 0',
                    explanation: 'Bring everything to one side and factor; this avoids dividing by something that could be zero.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( \\sin x = 0 \\).',
                    workingLatex: 'x = 0^\\circ,\\ 180^\\circ,\\ 360^\\circ',
                    explanation: 'Three values in the closed interval.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve \\( \\cos x = \\tfrac{1}{2} \\).',
                    workingLatex: 'x = 60^\\circ,\\ 300^\\circ',
                    explanation: '\\( \\cos^{-1}(0.5) = 60^\\circ \\); cosine is positive in the first and fourth quadrants.'
                },
                {
                    stepNumber: 6,
                    description: 'Count the distinct solutions.',
                    workingLatex: '5 \\text{ points}',
                    explanation: 'Three from \\( \\sin x = 0 \\) and two from \\( \\cos x = 1/2 \\), all distinct.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [4.5, 0.0785], [9, 0.1564], [13.5, 0.2334], [18, 0.309], [22.5, 0.3827], [27, 0.454], [31.5, 0.5225], [36, 0.5878], [40.5, 0.6494], [45, 0.7071], [49.5, 0.7604], [54, 0.809], [58.5, 0.8526], [63, 0.891], [67.5, 0.9239], [72, 0.9511], [76.5, 0.9724], [81, 0.9877], [85.5, 0.9969], [90, 1], [94.5, 0.9969], [99, 0.9877], [103.5, 0.9724], [108, 0.9511], [112.5, 0.9239], [117, 0.891], [121.5, 0.8526], [126, 0.809], [130.5, 0.7604], [135, 0.7071], [139.5, 0.6494], [144, 0.5878], [148.5, 0.5225], [153, 0.454], [157.5, 0.3827], [162, 0.309], [166.5, 0.2334], [171, 0.1564], [175.5, 0.0785], [180, 0], [184.5, -0.0785], [189, -0.1564], [193.5, -0.2334], [198, -0.309], [202.5, -0.3827], [207, -0.454], [211.5, -0.5225], [216, -0.5878], [220.5, -0.6494], [225, -0.7071], [229.5, -0.7604], [234, -0.809], [238.5, -0.8526], [243, -0.891], [247.5, -0.9239], [252, -0.9511], [256.5, -0.9724], [261, -0.9877], [265.5, -0.9969], [270, -1], [274.5, -0.9969], [279, -0.9877], [283.5, -0.9724], [288, -0.9511], [292.5, -0.9239], [297, -0.891], [301.5, -0.8526], [306, -0.809], [310.5, -0.7604], [315, -0.7071], [319.5, -0.6494], [324, -0.5878], [328.5, -0.5225], [333, -0.454], [337.5, -0.3827], [342, -0.309], [346.5, -0.2334], [351, -0.1564], [355.5, -0.0785], [360, 0]], color: '#2563eb', label: 'y = \\sin x', labelAt: [310, 1.25] },
                            { points: [[0, 0], [3, 0.1045], [6, 0.2079], [9, 0.309], [12, 0.4067], [15, 0.5], [18, 0.5878], [21, 0.6691], [24, 0.7431], [27, 0.809], [30, 0.866], [33, 0.9135], [36, 0.9511], [39, 0.9781], [42, 0.9945], [45, 1], [48, 0.9945], [51, 0.9781], [54, 0.9511], [57, 0.9135], [60, 0.866], [63, 0.809], [66, 0.7431], [69, 0.6691], [72, 0.5878], [75, 0.5], [78, 0.4067], [81, 0.309], [84, 0.2079], [87, 0.1045], [90, 0], [93, -0.1045], [96, -0.2079], [99, -0.309], [102, -0.4067], [105, -0.5], [108, -0.5878], [111, -0.6691], [114, -0.7431], [117, -0.809], [120, -0.866], [123, -0.9135], [126, -0.9511], [129, -0.9781], [132, -0.9945], [135, -1], [138, -0.9945], [141, -0.9781], [144, -0.9511], [147, -0.9135], [150, -0.866], [153, -0.809], [156, -0.7431], [159, -0.6691], [162, -0.5878], [165, -0.5], [168, -0.4067], [171, -0.309], [174, -0.2079], [177, -0.1045], [180, 0], [183, 0.1045], [186, 0.2079], [189, 0.309], [192, 0.4067], [195, 0.5], [198, 0.5878], [201, 0.6691], [204, 0.7431], [207, 0.809], [210, 0.866], [213, 0.9135], [216, 0.9511], [219, 0.9781], [222, 0.9945], [225, 1], [228, 0.9945], [231, 0.9781], [234, 0.9511], [237, 0.9135], [240, 0.866], [243, 0.809], [246, 0.7431], [249, 0.6691], [252, 0.5878], [255, 0.5], [258, 0.4067], [261, 0.309], [264, 0.2079], [267, 0.1045], [270, 0], [273, -0.1045], [276, -0.2079], [279, -0.309], [282, -0.4067], [285, -0.5], [288, -0.5878], [291, -0.6691], [294, -0.7431], [297, -0.809], [300, -0.866], [303, -0.9135], [306, -0.9511], [309, -0.9781], [312, -0.9945], [315, -1], [318, -0.9945], [321, -0.9781], [324, -0.9511], [327, -0.9135], [330, -0.866], [333, -0.809], [336, -0.7431], [339, -0.6691], [342, -0.5878], [345, -0.5], [348, -0.4067], [351, -0.309], [354, -0.2079], [357, -0.1045], [360, 0]], color: '#dc2626', label: 'y = \\sin 2x', labelAt: [310, -1.25] }
                        ],
                        points: [
                            { at: [0, 0], label: '0°', labelAnchor: 'sw' },
                            { at: [60, 0.866], label: '60°', labelAnchor: 'n' },
                            { at: [180, 0], label: '180°', labelAnchor: 'sw' },
                            { at: [300, -0.866], label: '300°', labelAnchor: 's' },
                            { at: [360, 0], label: '360°', labelAnchor: 'sw' }
                        ]
                    }
                }
            ],
            finalAnswer: '5 points of intersection'
        }
    },
    {
        id: 't3-062',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 62',
        difficulty: 'Foundation',
        questionText: 'State the range of \\( y = 3 - 2\\sin x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'range', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from the parent range.',
                    workingLatex: '-1 \\leq \\sin x \\leq 1',
                    explanation: 'Sine bounds.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply by \\( -2 \\) (note the inequality flips).',
                    workingLatex: '-2 \\leq -2\\sin x \\leq 2',
                    explanation: 'Multiplying by a negative number reverses the inequality. Be careful: the new lower bound is \\( -2(1) = -2 \\) and the upper bound is \\( -2(-1) = 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add 3.',
                    workingLatex: '1 \\leq 3 - 2\\sin x \\leq 5',
                    explanation: 'Adding the same constant preserves the inequality direction.'
                },
                {
                    stepNumber: 4,
                    description: 'State the range.',
                    workingLatex: '1 \\leq y \\leq 5',
                    explanation: 'Equivalent to \\( [1, 5] \\).',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: 0,
                        yMax: 6,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [1, 3, 5],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 3], [4.5, 2.8431], [9, 2.6871], [13.5, 2.5331], [18, 2.382], [22.5, 2.2346], [27, 2.092], [31.5, 1.955], [36, 1.8244], [40.5, 1.7011], [45, 1.5858], [49.5, 1.4792], [54, 1.382], [58.5, 1.2947], [63, 1.218], [67.5, 1.1522], [72, 1.0979], [76.5, 1.0553], [81, 1.0246], [85.5, 1.0062], [90, 1], [94.5, 1.0062], [99, 1.0246], [103.5, 1.0553], [108, 1.0979], [112.5, 1.1522], [117, 1.218], [121.5, 1.2947], [126, 1.382], [130.5, 1.4792], [135, 1.5858], [139.5, 1.7011], [144, 1.8244], [148.5, 1.955], [153, 2.092], [157.5, 2.2346], [162, 2.382], [166.5, 2.5331], [171, 2.6871], [175.5, 2.8431], [180, 3], [184.5, 3.1569], [189, 3.3129], [193.5, 3.4669], [198, 3.618], [202.5, 3.7654], [207, 3.908], [211.5, 4.045], [216, 4.1756], [220.5, 4.2989], [225, 4.4142], [229.5, 4.5208], [234, 4.618], [238.5, 4.7053], [243, 4.782], [247.5, 4.8478], [252, 4.9021], [256.5, 4.9447], [261, 4.9754], [265.5, 4.9938], [270, 5], [274.5, 4.9938], [279, 4.9754], [283.5, 4.9447], [288, 4.9021], [292.5, 4.8478], [297, 4.782], [301.5, 4.7053], [306, 4.618], [310.5, 4.5208], [315, 4.4142], [319.5, 4.2989], [324, 4.1756], [328.5, 4.045], [333, 3.908], [337.5, 3.7654], [342, 3.618], [346.5, 3.4669], [351, 3.3129], [355.5, 3.1569], [360, 3]], color: '#2563eb', label: 'y = 3 - 2\\sin x', labelAt: [240, 5.5] }
                        ],
                        points: [
                            { at: [90, 1], label: 'min', labelAnchor: 's' },
                            { at: [270, 5], label: 'max', labelAnchor: 'n' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Range \\( = [1, 5] \\)'
        }
    },
    {
        id: 't3-063',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 63',
        difficulty: 'Foundation',
        questionText: 'Find the period and asymptotes of \\( y = \\tan(x - 45^\\circ) \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'tan x', 'period', 'asymptotes', 'horizontal translation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the period.',
                    workingLatex: '\\text{Period} = 180^\\circ',
                    explanation: 'Horizontal translations do not change the period — only inside scalings on \\( x \\) do.'
                },
                {
                    stepNumber: 2,
                    description: 'Locate the parent asymptotes in the interval.',
                    workingLatex: 'x = 90^\\circ,\\ 270^\\circ',
                    explanation: 'These are the asymptotes of \\( \\tan x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Shift each right by \\( 45^\\circ \\).',
                    workingLatex: '90^\\circ + 45^\\circ = 135^\\circ, \\quad 270^\\circ + 45^\\circ = 315^\\circ',
                    explanation: 'A rightward translation moves all features — including asymptotes — by the same amount.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -5,
                        yMax: 5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, -1], [2.03, -0.9315], [4.06, -0.8674], [6.09, -0.8072], [8.12, -0.7502], [10.15, -0.6963], [12.18, -0.6449], [14.21, -0.5958], [16.24, -0.5488], [18.27, -0.5035], [20.3, -0.4599], [22.33, -0.4176], [24.36, -0.3766], [26.39, -0.3367], [28.42, -0.2977], [30.45, -0.2595], [32.48, -0.222], [34.52, -0.1851], [36.55, -0.1486], [38.58, -0.1126], [40.61, -0.0768], [42.64, -0.0413], [44.67, -0.0058], [46.7, 0.0296], [48.73, 0.0651], [50.76, 0.1008], [52.79, 0.1368], [54.82, 0.1731], [56.85, 0.2098], [58.88, 0.2471], [60.91, 0.285], [62.94, 0.3238], [64.97, 0.3634], [67, 0.404], [69.03, 0.4459], [71.06, 0.489], [73.09, 0.5337], [75.12, 0.5802], [77.15, 0.6286], [79.18, 0.6791], [81.21, 0.7322], [83.24, 0.7881], [85.27, 0.8472], [87.3, 0.91], [89.33, 0.977], [91.36, 1.0488], [93.39, 1.1261], [95.42, 1.2098], [97.45, 1.3011], [99.48, 1.4012], [101.52, 1.5117], [103.55, 1.6348], [105.58, 1.773], [107.61, 1.9297], [109.64, 2.1094], [111.67, 2.3183], [113.7, 2.5645], [115.73, 2.8599], [117.76, 3.222], [119.79, 3.6775], [121.82, 4.2696]], color: '#dc2626' },
                            { points: [[148.14, -4.2849], [150.16, -3.691], [152.18, -3.2341], [154.2, -2.8709], [156.23, -2.5745], [158.25, -2.3276], [160.27, -2.1181], [162.3, -1.9378], [164.32, -1.7807], [166.34, -1.6421], [168.36, -1.5187], [170.39, -1.4078], [172.41, -1.3075], [174.43, -1.216], [176.45, -1.1321], [178.48, -1.0546], [180.5, -0.9827], [182.52, -0.9156], [184.55, -0.8527], [186.57, -0.7935], [188.59, -0.7375], [190.61, -0.6844], [192.64, -0.6337], [194.66, -0.5853], [196.68, -0.5389], [198.7, -0.4941], [200.73, -0.4509], [202.75, -0.4091], [204.77, -0.3685], [206.8, -0.3289], [208.82, -0.2902], [210.84, -0.2523], [212.86, -0.215], [214.89, -0.1784], [216.91, -0.1422], [218.93, -0.1063], [220.95, -0.0707], [222.98, -0.0353], [225, 0], [227.02, 0.0353], [229.05, 0.0707], [231.07, 0.1063], [233.09, 0.1422], [235.11, 0.1784], [237.14, 0.215], [239.16, 0.2523], [241.18, 0.2902], [243.2, 0.3289], [245.23, 0.3685], [247.25, 0.4091], [249.27, 0.4509], [251.3, 0.4941], [253.32, 0.5389], [255.34, 0.5853], [257.36, 0.6337], [259.39, 0.6844], [261.41, 0.7375], [263.43, 0.7935], [265.45, 0.8527], [267.48, 0.9156], [269.5, 0.9827], [271.52, 1.0546], [273.55, 1.1321], [275.57, 1.216], [277.59, 1.3075], [279.61, 1.4078], [281.64, 1.5187], [283.66, 1.6421], [285.68, 1.7807], [287.7, 1.9378], [289.73, 2.1181], [291.75, 2.3276], [293.77, 2.5745], [295.8, 2.8709], [297.82, 3.2341], [299.84, 3.691], [301.86, 4.2849]], color: '#dc2626' },
                            { points: [[326.62, -4.8627], [328.14, -4.2844], [329.66, -3.824], [331.17, -3.4482], [332.69, -3.1354], [334.21, -2.8705], [335.72, -2.6431], [337.24, -2.4454], [338.76, -2.2717], [340.28, -2.1178], [341.79, -1.9803], [343.31, -1.8564], [344.83, -1.7442], [346.34, -1.6418], [347.86, -1.548], [349.38, -1.4616], [350.9, -1.3816], [352.41, -1.3073], [353.93, -1.2379], [355.45, -1.173], [356.97, -1.112], [358.48, -1.0544], [360, -1]], color: '#dc2626' }
                        ],
                        lines: [
                            { from: [135, -5], to: [135, 5], color: '#94a3b8', dashed: true, label: 'x=135°', labelAt: [140, 4.3] },
                            { from: [315, -5], to: [315, 5], color: '#94a3b8', dashed: true, label: 'x=315°', labelAt: [320, 4.3] }
                        ],
                        points: [
                            { at: [45, 0], label: '(45°, 0)', labelAnchor: 'sw' },
                            { at: [225, 0], label: '(225°, 0)', labelAnchor: 'sw' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Period \\( = 180^\\circ \\); asymptotes at \\( x = 135^\\circ \\) and \\( x = 315^\\circ \\).'
        }
    },
    {
        id: 't3-064',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 64',
        difficulty: 'Foundation',
        questionText: 'A function is defined as \\( f(x) = 2\\sin x + 3\\cos x \\). Find the maximum value of \\( f(x) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'R-formula', 'sin x', 'cos x', 'maximum'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Express \\( a\\sin x + b\\cos x \\) in the form \\( R\\sin(x + \\alpha) \\).',
                    workingLatex: 'R\\sin(x + \\alpha) = R\\cos\\alpha \\sin x + R\\sin\\alpha \\cos x',
                    explanation: 'Expand the right-hand side using the sine angle-addition identity.'
                },
                {
                    stepNumber: 2,
                    description: 'Match coefficients with the given function.',
                    workingLatex: 'R\\cos\\alpha = 2, \\quad R\\sin\\alpha = 3',
                    explanation: 'Compare \\( \\sin x \\) and \\( \\cos x \\) terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Square and add to find \\( R \\).',
                    workingLatex: 'R^2 = 2^2 + 3^2 = 13 \\Rightarrow R = \\sqrt{13}',
                    explanation: 'Uses \\( \\cos^2\\alpha + \\sin^2\\alpha = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'The maximum of \\( R\\sin(x + \\alpha) \\) is \\( R \\).',
                    workingLatex: '\\max f(x) = \\sqrt{13} \\approx 3.61',
                    explanation: 'Sine maxes out at 1, so the maximum value of the whole expression is \\( R \\).',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -4.5,
                        yMax: 4.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-3, 0, 3],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 3], [3, 3.1006], [6, 3.1926], [9, 3.2759], [12, 3.3503], [15, 3.4154], [18, 3.4712], [21, 3.5175], [24, 3.5541], [27, 3.581], [30, 3.5981], [33, 3.6053], [36, 3.6026], [39, 3.5901], [42, 3.5677], [45, 3.5355], [48, 3.4937], [51, 3.4423], [54, 3.3814], [57, 3.3113], [60, 3.2321], [63, 3.144], [66, 3.0473], [69, 2.9423], [72, 2.8292], [75, 2.7083], [78, 2.58], [81, 2.4447], [84, 2.3026], [87, 2.1543], [90, 2], [93, 1.8403], [96, 1.6755], [99, 1.5061], [102, 1.3326], [105, 1.1554], [108, 0.9751], [111, 0.7921], [114, 0.6069], [117, 0.42], [120, 0.2321], [123, 0.0434], [126, -0.1453], [129, -0.3337], [132, -0.5211], [135, -0.7071], [138, -0.8912], [141, -1.0728], [144, -1.2515], [147, -1.4267], [150, -1.5981], [153, -1.765], [156, -1.9272], [159, -2.084], [162, -2.2351], [165, -2.3801], [168, -2.5186], [171, -2.6502], [174, -2.7745], [177, -2.8912], [180, -3], [183, -3.1006], [186, -3.1926], [189, -3.2759], [192, -3.3503], [195, -3.4154], [198, -3.4712], [201, -3.5175], [204, -3.5541], [207, -3.581], [210, -3.5981], [213, -3.6053], [216, -3.6026], [219, -3.5901], [222, -3.5677], [225, -3.5355], [228, -3.4937], [231, -3.4423], [234, -3.3814], [237, -3.3113], [240, -3.2321], [243, -3.144], [246, -3.0473], [249, -2.9423], [252, -2.8292], [255, -2.7083], [258, -2.58], [261, -2.4447], [264, -2.3026], [267, -2.1543], [270, -2], [273, -1.8403], [276, -1.6755], [279, -1.5061], [282, -1.3326], [285, -1.1554], [288, -0.9751], [291, -0.7921], [294, -0.6069], [297, -0.42], [300, -0.2321], [303, -0.0434], [306, 0.1453], [309, 0.3337], [312, 0.5211], [315, 0.7071], [318, 0.8912], [321, 1.0728], [324, 1.2515], [327, 1.4267], [330, 1.5981], [333, 1.765], [336, 1.9272], [339, 2.084], [342, 2.2351], [345, 2.3801], [348, 2.5186], [351, 2.6502], [354, 2.7745], [357, 2.8912], [360, 3]], color: '#2563eb', label: 'y = 2\\sin x + 3\\cos x', labelAt: [220, 4.2] }
                        ],
                        points: [
                            { at: [33.6901, 3.6056], label: 'max ≈ √13', labelAnchor: 'n' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( \\sqrt{13} \\approx 3.61 \\)'
        }
    },
    {
        id: 't3-065',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 65',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\cos(x + 90^\\circ) \\) and explain why it looks the same as another standard trig graph.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'identities', 'cos x', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the cosine angle-addition identity.',
                    workingLatex: '\\cos(x + 90^\\circ) = \\cos x \\cos 90^\\circ - \\sin x \\sin 90^\\circ',
                    explanation: 'Use \\( \\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute the exact values \\( \\cos 90^\\circ = 0, \\sin 90^\\circ = 1 \\).',
                    workingLatex: '= \\cos x \\cdot 0 - \\sin x \\cdot 1 = -\\sin x',
                    explanation: 'The first term vanishes and the second simplifies.'
                },
                {
                    stepNumber: 3,
                    description: 'Conclude.',
                    workingLatex: '\\cos(x + 90^\\circ) = -\\sin x',
                    explanation: 'Shifting cosine \\( 90^\\circ \\) to the left produces \\( -\\sin x \\); the two graphs are literally identical.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [4.5, -0.0785], [9, -0.1564], [13.5, -0.2334], [18, -0.309], [22.5, -0.3827], [27, -0.454], [31.5, -0.5225], [36, -0.5878], [40.5, -0.6494], [45, -0.7071], [49.5, -0.7604], [54, -0.809], [58.5, -0.8526], [63, -0.891], [67.5, -0.9239], [72, -0.9511], [76.5, -0.9724], [81, -0.9877], [85.5, -0.9969], [90, -1], [94.5, -0.9969], [99, -0.9877], [103.5, -0.9724], [108, -0.9511], [112.5, -0.9239], [117, -0.891], [121.5, -0.8526], [126, -0.809], [130.5, -0.7604], [135, -0.7071], [139.5, -0.6494], [144, -0.5878], [148.5, -0.5225], [153, -0.454], [157.5, -0.3827], [162, -0.309], [166.5, -0.2334], [171, -0.1564], [175.5, -0.0785], [180, 0], [184.5, 0.0785], [189, 0.1564], [193.5, 0.2334], [198, 0.309], [202.5, 0.3827], [207, 0.454], [211.5, 0.5225], [216, 0.5878], [220.5, 0.6494], [225, 0.7071], [229.5, 0.7604], [234, 0.809], [238.5, 0.8526], [243, 0.891], [247.5, 0.9239], [252, 0.9511], [256.5, 0.9724], [261, 0.9877], [265.5, 0.9969], [270, 1], [274.5, 0.9969], [279, 0.9877], [283.5, 0.9724], [288, 0.9511], [292.5, 0.9239], [297, 0.891], [301.5, 0.8526], [306, 0.809], [310.5, 0.7604], [315, 0.7071], [319.5, 0.6494], [324, 0.5878], [328.5, 0.5225], [333, 0.454], [337.5, 0.3827], [342, 0.309], [346.5, 0.2334], [351, 0.1564], [355.5, 0.0785], [360, 0]], color: '#16a34a', label: 'y = \\cos(x + 90°)', labelAt: [240, 1.25] },
                            { points: [[0, 0], [4.5, -0.0785], [9, -0.1564], [13.5, -0.2334], [18, -0.309], [22.5, -0.3827], [27, -0.454], [31.5, -0.5225], [36, -0.5878], [40.5, -0.6494], [45, -0.7071], [49.5, -0.7604], [54, -0.809], [58.5, -0.8526], [63, -0.891], [67.5, -0.9239], [72, -0.9511], [76.5, -0.9724], [81, -0.9877], [85.5, -0.9969], [90, -1], [94.5, -0.9969], [99, -0.9877], [103.5, -0.9724], [108, -0.9511], [112.5, -0.9239], [117, -0.891], [121.5, -0.8526], [126, -0.809], [130.5, -0.7604], [135, -0.7071], [139.5, -0.6494], [144, -0.5878], [148.5, -0.5225], [153, -0.454], [157.5, -0.3827], [162, -0.309], [166.5, -0.2334], [171, -0.1564], [175.5, -0.0785], [180, 0], [184.5, 0.0785], [189, 0.1564], [193.5, 0.2334], [198, 0.309], [202.5, 0.3827], [207, 0.454], [211.5, 0.5225], [216, 0.5878], [220.5, 0.6494], [225, 0.7071], [229.5, 0.7604], [234, 0.809], [238.5, 0.8526], [243, 0.891], [247.5, 0.9239], [252, 0.9511], [256.5, 0.9724], [261, 0.9877], [265.5, 0.9969], [270, 1], [274.5, 0.9969], [279, 0.9877], [283.5, 0.9724], [288, 0.9511], [292.5, 0.9239], [297, 0.891], [301.5, 0.8526], [306, 0.809], [310.5, 0.7604], [315, 0.7071], [319.5, 0.6494], [324, 0.5878], [328.5, 0.5225], [333, 0.454], [337.5, 0.3827], [342, 0.309], [346.5, 0.2334], [351, 0.1564], [355.5, 0.0785], [360, 0]], color: '#dc2626', label: 'y = -\\sin x (dashed)', labelAt: [240, -1.25], width: 1 }
                        ],
                        points: [
                            { at: [0, 0], label: '(0°, 0)', labelAnchor: 'sw' },
                            { at: [90, -1], label: 'min', labelAnchor: 's' },
                            { at: [270, 1], label: 'max', labelAnchor: 'n' }
                        ]
                    }
                }
            ],
            finalAnswer: 'The graph is identical to \\( y = -\\sin x \\).'
        }
    },
    {
        id: 't3-066',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 66',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = \\sin x \\) is stretched vertically by factor 4 and translated 2 units down. Write the equation.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'combined transformations', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the vertical stretch first.',
                    workingLatex: 'y = 4\\sin x',
                    explanation: 'Multiplying \\( \\sin x \\) by 4 stretches every \\( y \\)-value by a factor of 4.'
                },
                {
                    stepNumber: 2,
                    description: 'Then translate down by 2.',
                    workingLatex: 'y = 4\\sin x - 2',
                    explanation: 'Subtracting 2 outside the function shifts the graph two units downward.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -6.5,
                        yMax: 2.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-6, -2, 2],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, -2], [4.5, -1.6862], [9, -1.3743], [13.5, -1.0662], [18, -0.7639], [22.5, -0.4693], [27, -0.184], [31.5, 0.09], [36, 0.3511], [40.5, 0.5978], [45, 0.8284], [49.5, 1.0416], [54, 1.2361], [58.5, 1.4106], [63, 1.564], [67.5, 1.6955], [72, 1.8042], [76.5, 1.8895], [81, 1.9508], [85.5, 1.9877], [90, 2], [94.5, 1.9877], [99, 1.9508], [103.5, 1.8895], [108, 1.8042], [112.5, 1.6955], [117, 1.564], [121.5, 1.4106], [126, 1.2361], [130.5, 1.0416], [135, 0.8284], [139.5, 0.5978], [144, 0.3511], [148.5, 0.09], [153, -0.184], [157.5, -0.4693], [162, -0.7639], [166.5, -1.0662], [171, -1.3743], [175.5, -1.6862], [180, -2], [184.5, -2.3138], [189, -2.6257], [193.5, -2.9338], [198, -3.2361], [202.5, -3.5307], [207, -3.816], [211.5, -4.09], [216, -4.3511], [220.5, -4.5978], [225, -4.8284], [229.5, -5.0416], [234, -5.2361], [238.5, -5.4106], [243, -5.564], [247.5, -5.6955], [252, -5.8042], [256.5, -5.8895], [261, -5.9508], [265.5, -5.9877], [270, -6], [274.5, -5.9877], [279, -5.9508], [283.5, -5.8895], [288, -5.8042], [292.5, -5.6955], [297, -5.564], [301.5, -5.4106], [306, -5.2361], [310.5, -5.0416], [315, -4.8284], [319.5, -4.5978], [324, -4.3511], [328.5, -4.09], [333, -3.816], [337.5, -3.5307], [342, -3.2361], [346.5, -2.9338], [351, -2.6257], [355.5, -2.3138], [360, -2]], color: '#2563eb', label: 'y = 4\\sin x - 2', labelAt: [220, 2.3] }
                        ],
                        points: [
                            { at: [90, 2], label: 'max (90°, 2)', labelAnchor: 'n' },
                            { at: [270, -6], label: 'min (270°, -6)', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( y = 4\\sin x - 2 \\)'
        }
    },
    {
        id: 't3-067',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 67',
        difficulty: 'Foundation',
        questionText: 'For \\( 0^\\circ \\leq x \\leq 360^\\circ \\), how many solutions does \\( 2\\sin 3x = 1 \\) have?',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'solutions', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange to isolate the sine term.',
                    workingLatex: '\\sin 3x = \\tfrac{1}{2}',
                    explanation: 'Divide both sides by 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the range of \\( 3x \\).',
                    workingLatex: 'x \\in [0^\\circ, 360^\\circ] \\Rightarrow 3x \\in [0^\\circ, 1080^\\circ]',
                    explanation: 'Multiply the bounds by 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Count solutions of \\( \\sin \\theta = \\tfrac{1}{2} \\) per period of \\( 360^\\circ \\).',
                    workingLatex: '2 \\text{ per cycle (at } 30^\\circ, 150^\\circ\\text{)}',
                    explanation: 'In each full \\( 360^\\circ \\) cycle, the equation has exactly two solutions.'
                },
                {
                    stepNumber: 4,
                    description: 'Compute number of complete cycles in \\( 3x \\)\\u2019s interval.',
                    workingLatex: '\\tfrac{1080^\\circ}{360^\\circ} = 3 \\text{ cycles}',
                    explanation: 'Three full periods fit in the extended interval.'
                },
                {
                    stepNumber: 5,
                    description: 'Multiply.',
                    workingLatex: '3 \\times 2 = 6 \\text{ solutions}',
                    explanation: 'Two per cycle, three cycles.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -2.5,
                        yMax: 2.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-2, -1, 0, 1, 2],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [2, 0.2091], [4, 0.4158], [6, 0.618], [8, 0.8135], [10, 1], [12, 1.1756], [14, 1.3383], [16, 1.4863], [18, 1.618], [20, 1.7321], [22, 1.8271], [24, 1.9021], [26, 1.9563], [28, 1.989], [30, 2], [32, 1.989], [34, 1.9563], [36, 1.9021], [38, 1.8271], [40, 1.7321], [42, 1.618], [44, 1.4863], [46, 1.3383], [48, 1.1756], [50, 1], [52, 0.8135], [54, 0.618], [56, 0.4158], [58, 0.2091], [60, 0], [62, -0.2091], [64, -0.4158], [66, -0.618], [68, -0.8135], [70, -1], [72, -1.1756], [74, -1.3383], [76, -1.4863], [78, -1.618], [80, -1.7321], [82, -1.8271], [84, -1.9021], [86, -1.9563], [88, -1.989], [90, -2], [92, -1.989], [94, -1.9563], [96, -1.9021], [98, -1.8271], [100, -1.7321], [102, -1.618], [104, -1.4863], [106, -1.3383], [108, -1.1756], [110, -1], [112, -0.8135], [114, -0.618], [116, -0.4158], [118, -0.2091], [120, 0], [122, 0.2091], [124, 0.4158], [126, 0.618], [128, 0.8135], [130, 1], [132, 1.1756], [134, 1.3383], [136, 1.4863], [138, 1.618], [140, 1.7321], [142, 1.8271], [144, 1.9021], [146, 1.9563], [148, 1.989], [150, 2], [152, 1.989], [154, 1.9563], [156, 1.9021], [158, 1.8271], [160, 1.7321], [162, 1.618], [164, 1.4863], [166, 1.3383], [168, 1.1756], [170, 1], [172, 0.8135], [174, 0.618], [176, 0.4158], [178, 0.2091], [180, 0], [182, -0.2091], [184, -0.4158], [186, -0.618], [188, -0.8135], [190, -1], [192, -1.1756], [194, -1.3383], [196, -1.4863], [198, -1.618], [200, -1.7321], [202, -1.8271], [204, -1.9021], [206, -1.9563], [208, -1.989], [210, -2], [212, -1.989], [214, -1.9563], [216, -1.9021], [218, -1.8271], [220, -1.7321], [222, -1.618], [224, -1.4863], [226, -1.3383], [228, -1.1756], [230, -1], [232, -0.8135], [234, -0.618], [236, -0.4158], [238, -0.2091], [240, 0], [242, 0.2091], [244, 0.4158], [246, 0.618], [248, 0.8135], [250, 1], [252, 1.1756], [254, 1.3383], [256, 1.4863], [258, 1.618], [260, 1.7321], [262, 1.8271], [264, 1.9021], [266, 1.9563], [268, 1.989], [270, 2], [272, 1.989], [274, 1.9563], [276, 1.9021], [278, 1.8271], [280, 1.7321], [282, 1.618], [284, 1.4863], [286, 1.3383], [288, 1.1756], [290, 1], [292, 0.8135], [294, 0.618], [296, 0.4158], [298, 0.2091], [300, 0], [302, -0.2091], [304, -0.4158], [306, -0.618], [308, -0.8135], [310, -1], [312, -1.1756], [314, -1.3383], [316, -1.4863], [318, -1.618], [320, -1.7321], [322, -1.8271], [324, -1.9021], [326, -1.9563], [328, -1.989], [330, -2], [332, -1.989], [334, -1.9563], [336, -1.9021], [338, -1.8271], [340, -1.7321], [342, -1.618], [344, -1.4863], [346, -1.3383], [348, -1.1756], [350, -1], [352, -0.8135], [354, -0.618], [356, -0.4158], [358, -0.2091], [360, 0]], color: '#2563eb', label: 'y = 2\\sin 3x', labelAt: [260, 2.3] }
                        ],
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#dc2626', dashed: true, label: 'y = 1', labelAt: [310, 1.2] }
                        ]
                    }
                }
            ],
            finalAnswer: '6 solutions'
        }
    },
    {
        id: 't3-068',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 68',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = 1 + \\tan x \\) for \\( -90^\\circ < x < 90^\\circ \\). State where it crosses the axes.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'tan x', 'intercepts', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the \\( y \\)-intercept by setting \\( x = 0 \\).',
                    workingLatex: 'y = 1 + \\tan 0^\\circ = 1 + 0 = 1',
                    explanation: 'Tangent of zero is zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Record the \\( y \\)-intercept.',
                    workingLatex: '(0^\\circ,\\ 1)',
                    explanation: 'Standard coordinate pair.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( x \\)-intercept by setting \\( y = 0 \\).',
                    workingLatex: '1 + \\tan x = 0 \\Rightarrow \\tan x = -1',
                    explanation: 'Subtract 1 from both sides.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve in the interval \\( (-90^\\circ, 90^\\circ) \\).',
                    workingLatex: 'x = -45^\\circ',
                    explanation: '\\( \\tan(-45^\\circ) = -1 \\); this is the only solution inside one period \\( (-90^\\circ, 90^\\circ) \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Record the \\( x \\)-intercept.',
                    workingLatex: '(-45^\\circ,\\ 0)',
                    explanation: 'The curve crosses the \\( x \\)-axis once in the given interval.',
                    diagram: {
                        xMin: -90,
                        xMax: 90,
                        yMin: -4,
                        yMax: 5,
                        xTicks: [-90, -45, 0, 45, 90],
                        yTicks: [-3, 0, 1, 3],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[-79.89, -4.607], [-77.87, -3.6508], [-75.84, -2.9644], [-73.82, -2.4466], [-71.8, -2.0411], [-69.78, -1.7143], [-67.75, -1.4447], [-65.73, -1.2179], [-63.71, -1.024], [-61.69, -0.8561], [-59.66, -0.7088], [-57.64, -0.5782], [-55.62, -0.4614], [-53.6, -0.3561], [-51.57, -0.2605], [-49.55, -0.1729], [-47.53, -0.0924], [-45.51, -0.0178], [-43.48, 0.0516], [-41.46, 0.1165], [-39.44, 0.1775], [-37.42, 0.235], [-35.39, 0.2895], [-33.37, 0.3414], [-31.35, 0.3908], [-29.33, 0.4382], [-27.3, 0.4838], [-25.28, 0.5277], [-23.26, 0.5702], [-21.24, 0.6114], [-19.21, 0.6515], [-17.19, 0.6906], [-15.17, 0.7289], [-13.15, 0.7664], [-11.12, 0.8034], [-9.1, 0.8398], [-7.08, 0.8758], [-5.06, 0.9115], [-3.03, 0.947], [-1.01, 0.9823], [1.01, 1.0177], [3.03, 1.053], [5.06, 1.0885], [7.08, 1.1242], [9.1, 1.1602], [11.12, 1.1966], [13.15, 1.2336], [15.17, 1.2711], [17.19, 1.3094], [19.21, 1.3485], [21.24, 1.3886], [23.26, 1.4298], [25.28, 1.4723], [27.3, 1.5162], [29.33, 1.5618], [31.35, 1.6092], [33.37, 1.6586], [35.39, 1.7105], [37.42, 1.765], [39.44, 1.8225], [41.46, 1.8835], [43.48, 1.9484], [45.51, 2.0178], [47.53, 2.0924], [49.55, 2.1729], [51.57, 2.2605], [53.6, 2.3561], [55.62, 2.4614], [57.64, 2.5782], [59.66, 2.7088], [61.69, 2.8561], [63.71, 3.024], [65.73, 3.2179], [67.75, 3.4447], [69.78, 3.7143], [71.8, 4.0411], [73.82, 4.4466], [75.84, 4.9644]], color: '#dc2626', label: 'y = 1 + \\tan x', labelAt: [60, 4.3] }
                        ],
                        lines: [
                            { from: [-90, -4], to: [-90, 5], color: '#94a3b8', dashed: true },
                            { from: [90, -4], to: [90, 5], color: '#94a3b8', dashed: true }
                        ],
                        points: [
                            { at: [0, 1], label: 'y-int (0°, 1)', labelAnchor: 'sw' },
                            { at: [-45, 0], label: 'x-int (-45°, 0)', labelAnchor: 'ne' }
                        ]
                    }
                }
            ],
            finalAnswer: 'y-intercept \\( (0^\\circ, 1) \\); x-intercept \\( (-45^\\circ, 0) \\)'
        }
    },
    {
        id: 't3-069',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 69',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = a\\cos(bx) + c \\) has maximum 5, minimum -1 and period \\( 90^\\circ \\). Find \\( a \\), \\( b \\) and \\( c \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'find parameters', 'amplitude', 'period', 'midline'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compute the amplitude.',
                    workingLatex: 'a = \\tfrac{\\text{max} - \\text{min}}{2} = \\tfrac{5 - (-1)}{2} = 3',
                    explanation: 'Half the distance between max and min.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the vertical shift.',
                    workingLatex: 'c = \\tfrac{\\text{max} + \\text{min}}{2} = \\tfrac{5 + (-1)}{2} = 2',
                    explanation: 'Average of max and min — the midline value.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the period formula.',
                    workingLatex: '\\tfrac{360^\\circ}{b} = 90^\\circ',
                    explanation: 'The period of \\( \\cos(bx) \\) is \\( 360^\\circ/b \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( b \\).',
                    workingLatex: 'b = \\tfrac{360^\\circ}{90^\\circ} = 4',
                    explanation: 'Standard arithmetic.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -2,
                        yMax: 6,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 2, 5],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 5], [2, 4.9708], [4, 4.8838], [6, 4.7406], [8, 4.5441], [10, 4.2981], [12, 4.0074], [14, 3.6776], [16, 3.3151], [18, 2.9271], [20, 2.5209], [22, 2.1047], [24, 1.6864], [26, 1.2742], [28, 0.8762], [30, 0.5], [32, 0.153], [34, -0.158], [36, -0.4271], [38, -0.6488], [40, -0.8191], [42, -0.9344], [44, -0.9927], [46, -0.9927], [48, -0.9344], [50, -0.8191], [52, -0.6488], [54, -0.4271], [56, -0.158], [58, 0.153], [60, 0.5], [62, 0.8762], [64, 1.2742], [66, 1.6864], [68, 2.1047], [70, 2.5209], [72, 2.9271], [74, 3.3151], [76, 3.6776], [78, 4.0074], [80, 4.2981], [82, 4.5441], [84, 4.7406], [86, 4.8838], [88, 4.9708], [90, 5], [92, 4.9708], [94, 4.8838], [96, 4.7406], [98, 4.5441], [100, 4.2981], [102, 4.0074], [104, 3.6776], [106, 3.3151], [108, 2.9271], [110, 2.5209], [112, 2.1047], [114, 1.6864], [116, 1.2742], [118, 0.8762], [120, 0.5], [122, 0.153], [124, -0.158], [126, -0.4271], [128, -0.6488], [130, -0.8191], [132, -0.9344], [134, -0.9927], [136, -0.9927], [138, -0.9344], [140, -0.8191], [142, -0.6488], [144, -0.4271], [146, -0.158], [148, 0.153], [150, 0.5], [152, 0.8762], [154, 1.2742], [156, 1.6864], [158, 2.1047], [160, 2.5209], [162, 2.9271], [164, 3.3151], [166, 3.6776], [168, 4.0074], [170, 4.2981], [172, 4.5441], [174, 4.7406], [176, 4.8838], [178, 4.9708], [180, 5], [182, 4.9708], [184, 4.8838], [186, 4.7406], [188, 4.5441], [190, 4.2981], [192, 4.0074], [194, 3.6776], [196, 3.3151], [198, 2.9271], [200, 2.5209], [202, 2.1047], [204, 1.6864], [206, 1.2742], [208, 0.8762], [210, 0.5], [212, 0.153], [214, -0.158], [216, -0.4271], [218, -0.6488], [220, -0.8191], [222, -0.9344], [224, -0.9927], [226, -0.9927], [228, -0.9344], [230, -0.8191], [232, -0.6488], [234, -0.4271], [236, -0.158], [238, 0.153], [240, 0.5], [242, 0.8762], [244, 1.2742], [246, 1.6864], [248, 2.1047], [250, 2.5209], [252, 2.9271], [254, 3.3151], [256, 3.6776], [258, 4.0074], [260, 4.2981], [262, 4.5441], [264, 4.7406], [266, 4.8838], [268, 4.9708], [270, 5], [272, 4.9708], [274, 4.8838], [276, 4.7406], [278, 4.5441], [280, 4.2981], [282, 4.0074], [284, 3.6776], [286, 3.3151], [288, 2.9271], [290, 2.5209], [292, 2.1047], [294, 1.6864], [296, 1.2742], [298, 0.8762], [300, 0.5], [302, 0.153], [304, -0.158], [306, -0.4271], [308, -0.6488], [310, -0.8191], [312, -0.9344], [314, -0.9927], [316, -0.9927], [318, -0.9344], [320, -0.8191], [322, -0.6488], [324, -0.4271], [326, -0.158], [328, 0.153], [330, 0.5], [332, 0.8762], [334, 1.2742], [336, 1.6864], [338, 2.1047], [340, 2.5209], [342, 2.9271], [344, 3.3151], [346, 3.6776], [348, 4.0074], [350, 4.2981], [352, 4.5441], [354, 4.7406], [356, 4.8838], [358, 4.9708], [360, 5]], color: '#16a34a', label: 'y = 3\\cos 4x + 2', labelAt: [260, 5.5] }
                        ],
                        lines: [
                            { from: [0, 2], to: [360, 2], color: '#94a3b8', dashed: true, label: 'midline y=2', labelAt: [310, 2.2] }
                        ],
                        points: [
                            { at: [0, 5], label: 'max', labelAnchor: 'n' },
                            { at: [45, -1], label: 'min', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( a = 3,\\ b = 4,\\ c = 2 \\)'
        }
    },
    {
        id: 't3-070',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 70',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\sin x \\) and \\( y = \\cos x \\) on the same axes for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Find all values of \\( x \\) where \\( \\sin x = \\cos x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'intersections', 'sin x', 'cos x', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the two functions equal.',
                    workingLatex: '\\sin x = \\cos x',
                    explanation: 'Intersections occur where the outputs agree.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide both sides by \\( \\cos x \\) (valid since the solutions are not at \\( \\cos x = 0 \\)).',
                    workingLatex: '\\tan x = 1',
                    explanation: 'Convert to a single trigonometric ratio.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the principal solution.',
                    workingLatex: '\\tan^{-1}(1) = 45^\\circ',
                    explanation: 'Standard exact value.'
                },
                {
                    stepNumber: 4,
                    description: 'Add the period of tangent to find further solutions.',
                    workingLatex: 'x = 45^\\circ + 180^\\circ n',
                    explanation: 'Tangent repeats every \\( 180^\\circ \\).'
                },
                {
                    stepNumber: 5,
                    description: 'List solutions in \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: 'x = 45^\\circ,\\ 225^\\circ',
                    explanation: '\\( n = 0 \\) and \\( n = 1 \\) give the two solutions inside the interval.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: [[0, 0], [4.5, 0.0785], [9, 0.1564], [13.5, 0.2334], [18, 0.309], [22.5, 0.3827], [27, 0.454], [31.5, 0.5225], [36, 0.5878], [40.5, 0.6494], [45, 0.7071], [49.5, 0.7604], [54, 0.809], [58.5, 0.8526], [63, 0.891], [67.5, 0.9239], [72, 0.9511], [76.5, 0.9724], [81, 0.9877], [85.5, 0.9969], [90, 1], [94.5, 0.9969], [99, 0.9877], [103.5, 0.9724], [108, 0.9511], [112.5, 0.9239], [117, 0.891], [121.5, 0.8526], [126, 0.809], [130.5, 0.7604], [135, 0.7071], [139.5, 0.6494], [144, 0.5878], [148.5, 0.5225], [153, 0.454], [157.5, 0.3827], [162, 0.309], [166.5, 0.2334], [171, 0.1564], [175.5, 0.0785], [180, 0], [184.5, -0.0785], [189, -0.1564], [193.5, -0.2334], [198, -0.309], [202.5, -0.3827], [207, -0.454], [211.5, -0.5225], [216, -0.5878], [220.5, -0.6494], [225, -0.7071], [229.5, -0.7604], [234, -0.809], [238.5, -0.8526], [243, -0.891], [247.5, -0.9239], [252, -0.9511], [256.5, -0.9724], [261, -0.9877], [265.5, -0.9969], [270, -1], [274.5, -0.9969], [279, -0.9877], [283.5, -0.9724], [288, -0.9511], [292.5, -0.9239], [297, -0.891], [301.5, -0.8526], [306, -0.809], [310.5, -0.7604], [315, -0.7071], [319.5, -0.6494], [324, -0.5878], [328.5, -0.5225], [333, -0.454], [337.5, -0.3827], [342, -0.309], [346.5, -0.2334], [351, -0.1564], [355.5, -0.0785], [360, 0]], color: '#2563eb', label: 'y = \\sin x', labelAt: [300, 1.25] },
                            { points: [[0, 1], [4.5, 0.9969], [9, 0.9877], [13.5, 0.9724], [18, 0.9511], [22.5, 0.9239], [27, 0.891], [31.5, 0.8526], [36, 0.809], [40.5, 0.7604], [45, 0.7071], [49.5, 0.6494], [54, 0.5878], [58.5, 0.5225], [63, 0.454], [67.5, 0.3827], [72, 0.309], [76.5, 0.2334], [81, 0.1564], [85.5, 0.0785], [90, 0], [94.5, -0.0785], [99, -0.1564], [103.5, -0.2334], [108, -0.309], [112.5, -0.3827], [117, -0.454], [121.5, -0.5225], [126, -0.5878], [130.5, -0.6494], [135, -0.7071], [139.5, -0.7604], [144, -0.809], [148.5, -0.8526], [153, -0.891], [157.5, -0.9239], [162, -0.9511], [166.5, -0.9724], [171, -0.9877], [175.5, -0.9969], [180, -1], [184.5, -0.9969], [189, -0.9877], [193.5, -0.9724], [198, -0.9511], [202.5, -0.9239], [207, -0.891], [211.5, -0.8526], [216, -0.809], [220.5, -0.7604], [225, -0.7071], [229.5, -0.6494], [234, -0.5878], [238.5, -0.5225], [243, -0.454], [247.5, -0.3827], [252, -0.309], [256.5, -0.2334], [261, -0.1564], [265.5, -0.0785], [270, 0], [274.5, 0.0785], [279, 0.1564], [283.5, 0.2334], [288, 0.309], [292.5, 0.3827], [297, 0.454], [301.5, 0.5225], [306, 0.5878], [310.5, 0.6494], [315, 0.7071], [319.5, 0.7604], [324, 0.809], [328.5, 0.8526], [333, 0.891], [337.5, 0.9239], [342, 0.9511], [346.5, 0.9724], [351, 0.9877], [355.5, 0.9969], [360, 1]], color: '#16a34a', label: 'y = \\cos x', labelAt: [300, -1.25] }
                        ],
                        points: [
                            { at: [45, 0.7071], label: '(45°, √2/2)', labelAnchor: 'n' },
                            { at: [225, -0.7071], label: '(225°, -√2/2)', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( x = 45^\\circ \\) and \\( x = 225^\\circ \\)'
        }
    },
];
