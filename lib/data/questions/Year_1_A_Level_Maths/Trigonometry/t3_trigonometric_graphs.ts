import { Question } from "@/lib/types";

function sample(f: (x: number) => number, xMin: number, xMax: number, n = 120): Array<[number, number]> {
    const pts: Array<[number, number]> = [];
    for (let i = 0; i < n; i++) {
        const x = xMin + (i / (n - 1)) * (xMax - xMin);
        pts.push([x, f(x)]);
    }
    return pts;
}

// Sample a tan-style curve while avoiding the asymptotes by splitting around them.
function sampleTanDeg(f: (x: number) => number, xMin: number, xMax: number, asymptotes: number[], yClip = 5, nPerSegment = 80): Array<Array<[number, number]>> {
    const bounds = [xMin, ...asymptotes.filter(a => a > xMin && a < xMax), xMax];
    const segments: Array<Array<[number, number]>> = [];
    for (let s = 0; s < bounds.length - 1; s++) {
        const a = bounds[s] + 1.5;
        const b = bounds[s + 1] - 1.5;
        if (b <= a) continue;
        const seg: Array<[number, number]> = [];
        for (let i = 0; i < nPerSegment; i++) {
            const x = a + (i / (nPerSegment - 1)) * (b - a);
            const y = f(x);
            if (Math.abs(y) <= yClip) seg.push([x, y]);
        }
        if (seg.length > 0) segments.push(seg);
    }
    return segments;
}

const D = Math.PI / 180;

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
    // ── TYPE B/C: Reflections, combined transformations, and equation reading ─
    {
        id: 't3-011',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 11',
        difficulty: 'Standard',
        questionText: 'On the same axes, sketch \\( y = -\\sin x \\) and \\( y = \\sin(-x) \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). State how the two graphs compare and explain why, by referring to the symmetry of \\( y = \\sin x \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'reflection', 'sin x', 'symmetry'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Interpret \\( y = -\\sin x \\) as a transformation of \\( y = \\sin x \\).',
                    workingLatex: '-\\sin x = -f(x)',
                    explanation: 'Multiplying the output by \\( -1 \\) reflects \\( y = \\sin x \\) in the \\( x \\)-axis. The maximum at \\( (90^\\circ, 1) \\) becomes a minimum at \\( (90^\\circ, -1) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Interpret \\( y = \\sin(-x) \\) as a transformation of \\( y = \\sin x \\).',
                    workingLatex: '\\sin(-x) = f(-x)',
                    explanation: 'Replacing \\( x \\) with \\( -x \\) reflects \\( y = \\sin x \\) in the \\( y \\)-axis.'
                },
                {
                    stepNumber: 3,
                    description: 'Use the odd symmetry of sine to compare them.',
                    workingLatex: '\\sin(-x) \\equiv -\\sin x',
                    explanation: 'Sine is an odd function: its graph has 180°-rotational symmetry about the origin. So reflecting in the \\( y \\)-axis gives the same curve as reflecting in the \\( x \\)-axis. The two graphs are identical.'
                },
                {
                    stepNumber: 4,
                    description: 'Check at a convenient \\( x \\)-value.',
                    workingLatex: '-\\sin 90^\\circ = -1,\\quad \\sin(-90^\\circ) = -1',
                    explanation: 'Both functions agree at \\( x = 90^\\circ \\). They also share zeros at \\( x = 0^\\circ, 180^\\circ, 360^\\circ \\) and both reach \\( +1 \\) at \\( x = 270^\\circ \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Sketch both curves on the same axes.',
                    workingLatex: '\\text{Coincident curves: min } (90^\\circ,\\ -1),\\ \\text{max } (270^\\circ,\\ 1)',
                    explanation: 'Because the two equations represent the same function, only one curve is visible. Plotting both confirms the identity \\( \\sin(-x) = -\\sin x \\).',
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
                            { points: sample((x) => -Math.sin(x * D), 0, 360, 180), color: '#dc2626', label: 'y = -\\sin x', labelAt: [50, -1.2] },
                            { points: sample((x) => Math.sin(-x * D), 0, 360, 180), color: '#2563eb', label: 'y = \\sin(-x)', labelAt: [300, 1.25], width: 1 }
                        ],
                        points: [
                            { at: [90, -1], label: 'min (90°, -1)', labelAnchor: 's' },
                            { at: [270, 1], label: 'max (270°, 1)', labelAnchor: 'n' }
                        ]
                    }
                }
            ],
            finalAnswer: 'The graphs are identical: \\( \\sin(-x) \\equiv -\\sin x \\) because sine is an odd function.'
        }
    },
    {
        id: 't3-012',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 12',
        difficulty: 'Standard',
        questionText: 'On the same axes, sketch \\( y = \\cos(-x) \\) and \\( y = -\\cos x \\) for \\( -180^\\circ \\leq x \\leq 180^\\circ \\). Use your sketches to verify graphically that \\( \\cos(-x) \\equiv \\cos x \\) but \\( -\\cos x \\not\\equiv \\cos x \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'reflection', 'cos x', 'even function'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify each transformation.',
                    workingLatex: 'y = \\cos(-x):\\ \\text{reflect in } y\\text{-axis};\\quad y = -\\cos x:\\ \\text{reflect in } x\\text{-axis}',
                    explanation: 'Negating the input flips the graph horizontally; negating the output flips it vertically.'
                },
                {
                    stepNumber: 2,
                    description: 'Recall cosine is even.',
                    workingLatex: '\\cos(-x) = \\cos x',
                    explanation: 'The graph of cosine is symmetric about the \\( y \\)-axis, so reflecting in the \\( y \\)-axis leaves it unchanged.'
                },
                {
                    stepNumber: 3,
                    description: 'Compare \\( -\\cos x \\) to \\( \\cos x \\) at key points.',
                    workingLatex: '\\cos 0 = 1\\ \\Rightarrow\\ -\\cos 0 = -1; \\quad \\cos 180^\\circ = -1\\ \\Rightarrow\\ -\\cos 180^\\circ = 1',
                    explanation: 'Maxima and minima swap places, so the two curves differ. They cross where \\( \\cos x = -\\cos x \\), i.e. where \\( \\cos x = 0 \\) (\\( x = \\pm 90^\\circ \\)).'
                },
                {
                    stepNumber: 4,
                    description: 'State the comparison clearly.',
                    workingLatex: '\\cos(-x) \\equiv \\cos x;\\ -\\cos x \\text{ is a different graph, reflected in the } x\\text{-axis}',
                    explanation: 'On the sketch, \\( y = \\cos(-x) \\) lies exactly on top of \\( y = \\cos x \\), confirming the even-function identity. \\( y = -\\cos x \\) is an upside-down cosine.',
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
                            { points: sample((x) => Math.cos(-x * D), -180, 180, 180), color: '#2563eb', label: 'y = \\cos(-x) = \\cos x', labelAt: [-170, 1.25] },
                            { points: sample((x) => -Math.cos(x * D), -180, 180, 180), color: '#dc2626', label: 'y = -\\cos x', labelAt: [-60, -1.25] }
                        ],
                        points: [
                            { at: [0, 1], label: '(0°, 1)', labelAnchor: 'n' },
                            { at: [0, -1], label: '(0°, -1)', labelAnchor: 's' },
                            { at: [90, 0], label: '(90°, 0)', labelAnchor: 'sw' },
                            { at: [-90, 0], label: '(-90°, 0)', labelAnchor: 'se' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( \\cos(-x) \\equiv \\cos x \\) (curves coincide). \\( -\\cos x \\) is the reflection of \\( \\cos x \\) in the \\( x \\)-axis.'
        }
    },
    {
        id: 't3-013',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 13',
        difficulty: 'Standard',
        questionText: 'Sketch \\( y = \\tan(-x) \\) on \\( -180^\\circ \\leq x \\leq 180^\\circ \\), showing all asymptotes and \\( x \\)-intercepts. Explain how your sketch confirms that \\( \\tan(-x) \\equiv -\\tan x \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'tan x', 'reflection', 'odd function'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start from \\( y = \\tan x \\).',
                    workingLatex: '\\text{Asymptotes at } x = \\pm 90^\\circ;\\ \\text{zeros at } x = -180^\\circ, 0^\\circ, 180^\\circ',
                    explanation: 'These are the standard features of tangent on this interval.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the reflection \\( x \\to -x \\).',
                    workingLatex: 'y = \\tan(-x):\\ \\text{reflect } y = \\tan x \\text{ in the } y\\text{-axis}',
                    explanation: 'A point \\( (a, \\tan a) \\) on \\( \\tan x \\) moves to \\( (-a, \\tan a) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Use the quotient identity to simplify \\( \\tan(-x) \\).',
                    workingLatex: '\\tan(-x) = \\dfrac{\\sin(-x)}{\\cos(-x)} = \\dfrac{-\\sin x}{\\cos x} = -\\tan x',
                    explanation: 'Sine is odd and cosine is even; their quotient is therefore odd. So the \\( y \\)-axis reflection of \\( \\tan x \\) coincides with its \\( x \\)-axis reflection.'
                },
                {
                    stepNumber: 4,
                    description: 'List the features of the sketch.',
                    workingLatex: '\\text{Zeros: } -180^\\circ, 0^\\circ, 180^\\circ.\\ \\text{Asymptotes: } x = -90^\\circ, 90^\\circ',
                    explanation: 'Asymptotes of \\( \\tan x \\) at \\( \\pm 90^\\circ \\) map to \\( \\mp 90^\\circ \\) — the same set. Zeros map to themselves up to sign. The branches now slope downwards through the origin instead of upwards.',
                    diagram: {
                        xMin: -180,
                        xMax: 180,
                        yMin: -5,
                        yMax: 5,
                        xTicks: [-180, -90, 0, 90, 180],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: sampleTanDeg((x) => -Math.tan(x * D), -180, 180, [-90, 90], 5, 60).map((seg, i) => ({ points: seg, color: '#2563eb', label: i === 0 ? 'y = \\tan(-x) = -\\tan x' : undefined, labelAt: i === 0 ? [-170, 4.3] as [number, number] : undefined })),
                        lines: [
                            { from: [-90, -5], to: [-90, 5], color: '#94a3b8', dashed: true, label: 'x=-90°', labelAt: [-85, 4.3] },
                            { from: [90, -5], to: [90, 5], color: '#94a3b8', dashed: true, label: 'x=90°', labelAt: [95, 4.3] }
                        ],
                        points: [
                            { at: [0, 0], label: '(0°, 0)', labelAnchor: 'sw' },
                            { at: [-180, 0], label: '(-180°, 0)', labelAnchor: 'se' },
                            { at: [180, 0], label: '(180°, 0)', labelAnchor: 'sw' }
                        ]
                    }
                }
            ],
            finalAnswer: 'The graph of \\( y = \\tan(-x) \\) is the \\( y \\)-axis reflection of \\( \\tan x \\); algebraically it equals \\( -\\tan x \\), confirming \\( \\tan(-x) \\equiv -\\tan x \\).'
        }
    },
    {
        id: 't3-014',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 14',
        difficulty: 'Standard',
        questionText: 'The curve \\( y = f(x) \\) is \\( y = \\sin x \\). Describe, in order, a sequence of transformations that maps \\( y = f(x) \\) onto \\( y = \\tfrac{1}{2}\\sin(3x) + 2 \\). State the range of the final curve and its period.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'combined transformations', 'sin x', 'range'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the inside change.',
                    workingLatex: '\\sin x \\to \\sin(3x)',
                    explanation: 'Replacing \\( x \\) with \\( 3x \\) is a horizontal stretch with scale factor \\( \\tfrac{1}{3} \\). The period shortens from \\( 360^\\circ \\) to \\( 120^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the outside multiplier.',
                    workingLatex: '\\sin(3x) \\to \\tfrac{1}{2}\\sin(3x)',
                    explanation: 'Multiplying by \\( \\tfrac{1}{2} \\) is a vertical stretch with scale factor \\( \\tfrac{1}{2} \\). The amplitude halves from 1 to \\( \\tfrac{1}{2} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the additive constant.',
                    workingLatex: '\\tfrac{1}{2}\\sin(3x) \\to \\tfrac{1}{2}\\sin(3x) + 2',
                    explanation: 'Adding 2 outside the function translates the graph up by 2 units. The order matters only for the additive shift, which must come last (after outside multipliers).'
                },
                {
                    stepNumber: 4,
                    description: 'Compute the new period.',
                    workingLatex: '\\text{Period} = \\dfrac{360^\\circ}{3} = 120^\\circ',
                    explanation: 'Only the horizontal stretch affects the period.'
                },
                {
                    stepNumber: 5,
                    description: 'Compute the range.',
                    workingLatex: '-1 \\leq \\sin(3x) \\leq 1\\ \\Rightarrow\\ \\tfrac{3}{2} \\leq \\tfrac{1}{2}\\sin(3x) + 2 \\leq \\tfrac{5}{2}',
                    explanation: 'Scale the inequality by \\( \\tfrac{1}{2} \\) and add 2 to each part.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 3,
                        xTicks: [0, 60, 120, 180, 240, 300, 360],
                        yTicks: [-1, 0, 1, 1.5, 2, 2.5, 3],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.sin(x * D), 0, 360, 180), color: '#94a3b8', label: 'y = \\sin x', labelAt: [300, -1.2] },
                            { points: sample((x) => 0.5 * Math.sin(3 * x * D) + 2, 0, 360, 240), color: '#2563eb', label: 'y = \\tfrac{1}{2}\\sin(3x) + 2', labelAt: [180, 2.8] }
                        ],
                        points: [
                            { at: [30, 2.5], label: 'max', labelAnchor: 'n' },
                            { at: [90, 1.5], label: 'min', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Horizontal stretch s.f. \\( \\tfrac{1}{3} \\), then vertical stretch s.f. \\( \\tfrac{1}{2} \\), then translation \\( +2 \\) in the \\( y \\)-direction. Period \\( = 120^\\circ \\); range \\( \\tfrac{3}{2} \\leq y \\leq \\tfrac{5}{2} \\).'
        }
    },
    {
        id: 't3-015',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 15',
        difficulty: 'Standard',
        questionText: 'By sketching \\( y = 2\\sin x \\) and \\( y = 1 \\) on the same axes, find all values of \\( x \\) in \\( 0^\\circ \\leq x \\leq 360^\\circ \\) for which the two graphs intersect. Give exact answers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'intersection', 'sin x', 'exact values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the two expressions equal.',
                    workingLatex: '2\\sin x = 1\\ \\Rightarrow\\ \\sin x = \\tfrac{1}{2}',
                    explanation: 'Divide both sides by 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the principal value.',
                    workingLatex: 'x_1 = \\sin^{-1}\\left(\\tfrac{1}{2}\\right) = 30^\\circ',
                    explanation: '\\( 30^\\circ \\) is the standard exact angle whose sine is \\( \\tfrac{1}{2} \\) — recall the 30-60-90 triangle.'
                },
                {
                    stepNumber: 3,
                    description: 'Use symmetry of sine about \\( x = 90^\\circ \\).',
                    workingLatex: 'x_2 = 180^\\circ - 30^\\circ = 150^\\circ',
                    explanation: 'Within \\( [0^\\circ, 360^\\circ] \\), sine attains each value in \\( (0, 1) \\) exactly twice: once on the way up and once on the way down.'
                },
                {
                    stepNumber: 4,
                    description: 'Check there are no further solutions.',
                    workingLatex: '\\sin x = \\tfrac{1}{2} \\text{ requires } \\sin x > 0',
                    explanation: 'In \\( (180^\\circ, 360^\\circ) \\) sine is negative, so no further intersection.'
                },
                {
                    stepNumber: 5,
                    description: 'Sketch the two curves and mark the intersections.',
                    workingLatex: 'x = 30^\\circ,\\ 150^\\circ',
                    explanation: 'Notice \\( y = 2\\sin x \\) reaches 2 at \\( x = 90^\\circ \\), so the horizontal line \\( y = 1 \\) does indeed cut it twice in the first half-period.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0,
                        xMax: 360,
                        yMin: -2.5,
                        yMax: 2.5,
                        xTicks: [0, 30, 90, 150, 180, 270, 360],
                        yTicks: [-2, -1, 0, 1, 2],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => 2 * Math.sin(x * D), 0, 360, 180), color: '#2563eb', label: 'y = 2\\sin x', labelAt: [60, 2.2] }
                        ],
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#dc2626', dashed: true, label: 'y = 1', labelAt: [310, 1.25] }
                        ],
                        points: [
                            { at: [30, 1], label: '30°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [150, 1], label: '150°', labelAnchor: 'ne', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( x = 30^\\circ \\) and \\( x = 150^\\circ \\).'
        }
    },
    {
        id: 't3-016',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 16',
        difficulty: 'Challenge',
        questionText: 'Sketch the graph of \\( y = 1 - 2\\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). State the range of the function and find the exact \\( x \\)-coordinates where the curve crosses the \\( x \\)-axis.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig graphs', 'combined transformations', 'cos x', 'range', 'roots'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite to highlight the structure.',
                    workingLatex: 'y = -2\\cos x + 1',
                    explanation: 'This is \\( \\cos x \\) after a vertical stretch (s.f. 2), a reflection in the \\( x \\)-axis, and an upward translation by 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the maximum and minimum.',
                    workingLatex: '\\cos x \\in [-1,1]\\ \\Rightarrow\\ -2\\cos x \\in [-2, 2]\\ \\Rightarrow\\ 1 - 2\\cos x \\in [-1, 3]',
                    explanation: 'Apply the multiplier and the translation to the standard range of cosine.'
                },
                {
                    stepNumber: 3,
                    description: 'Find where it meets the \\( x \\)-axis.',
                    workingLatex: '1 - 2\\cos x = 0\\ \\Rightarrow\\ \\cos x = \\tfrac{1}{2}',
                    explanation: 'Solve \\( y = 0 \\) for \\( x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( \\cos x = \\tfrac{1}{2} \\) on \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: 'x = 60^\\circ \\text{ or } 360^\\circ - 60^\\circ = 300^\\circ',
                    explanation: 'Cosine is symmetric about \\( x = 180^\\circ \\); both solutions lie in the interval.'
                },
                {
                    stepNumber: 5,
                    description: 'Identify key points: min at \\( x = 0^\\circ, 360^\\circ \\), max at \\( x = 180^\\circ \\).',
                    workingLatex: '(0^\\circ, -1),\\ (180^\\circ, 3),\\ (360^\\circ, -1)',
                    explanation: 'The reflection swaps the roles of cosine\'s max and min — the curve starts low at \\( x = 0 \\) and peaks at \\( x = 180^\\circ \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Sketch the curve using the key points and roots.',
                    workingLatex: '\\text{Range: } -1 \\leq y \\leq 3;\\ \\text{roots at } 60^\\circ, 300^\\circ',
                    explanation: 'Connect \\( (0^\\circ, -1) \\to (60^\\circ, 0) \\to (180^\\circ, 3) \\to (300^\\circ, 0) \\to (360^\\circ, -1) \\) smoothly using cosine\'s shape.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 3.5,
                        xTicks: [0, 60, 90, 180, 270, 300, 360],
                        yTicks: [-1, 0, 1, 2, 3],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => 1 - 2 * Math.cos(x * D), 0, 360, 180), color: '#2563eb', label: 'y = 1 - 2\\cos x', labelAt: [200, 3.2] }
                        ],
                        points: [
                            { at: [0, -1], label: '(0°, -1)', labelAnchor: 'sw' },
                            { at: [60, 0], label: '60°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [180, 3], label: '(180°, 3) max', labelAnchor: 'n' },
                            { at: [300, 0], label: '300°', labelAnchor: 'se', color: '#dc2626' },
                            { at: [360, -1], label: '(360°, -1)', labelAnchor: 'se' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Range: \\( -1 \\leq y \\leq 3 \\). Crosses \\( x \\)-axis at \\( x = 60^\\circ \\) and \\( x = 300^\\circ \\).'
        }
    },
    {
        id: 't3-017',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 17',
        difficulty: 'Challenge',
        questionText: 'State the locations of the first four vertical asymptotes of \\( y = \\tan(2x) \\) in the interval \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Compare your answer to the asymptotes of \\( y = \\tan x \\) on the same interval.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig graphs', 'tan', 'asymptotes', 'period'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Locate the asymptotes of \\( \\tan(2x) \\).',
                    workingLatex: '\\tan(2x) \\text{ is undefined when } \\cos(2x) = 0',
                    explanation: 'Since \\( \\tan \\theta = \\sin \\theta / \\cos \\theta \\), asymptotes occur where the denominator vanishes.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( \\cos(2x) = 0 \\) for \\( x \\).',
                    workingLatex: '2x = 90^\\circ + 180^\\circ k \\ \\Rightarrow\\ x = 45^\\circ + 90^\\circ k,\\ k \\in \\mathbb{Z}',
                    explanation: 'Cosine vanishes at odd multiples of \\( 90^\\circ \\); divide by 2 to get \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'List the first four asymptotes in \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: 'k = 0, 1, 2, 3 \\Rightarrow\\ x = 45^\\circ,\\ 135^\\circ,\\ 225^\\circ,\\ 315^\\circ',
                    explanation: 'These are evenly spaced \\( 90^\\circ \\) apart — half the spacing of \\( \\tan x \\), as expected from the doubled frequency.'
                },
                {
                    stepNumber: 4,
                    description: 'Compare with \\( \\tan x \\).',
                    workingLatex: 'y = \\tan x \\text{ has asymptotes at } x = 90^\\circ,\\ 270^\\circ',
                    explanation: 'On \\( [0^\\circ, 360^\\circ] \\) the standard tangent graph has only two asymptotes. \\( \\tan(2x) \\) has four — twice as many — because its period (\\( 90^\\circ \\)) is half that of \\( \\tan x \\) (\\( 180^\\circ \\)).'
                },
                {
                    stepNumber: 5,
                    description: 'Sketch \\( y = \\tan(2x) \\) showing the four asymptotes.',
                    workingLatex: '\\text{Four branches between consecutive asymptotes; each rises from } -\\infty \\text{ to } +\\infty',
                    explanation: 'Each branch passes through a zero at \\( x = 0^\\circ, 90^\\circ, 180^\\circ, 270^\\circ, 360^\\circ \\).',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -5,
                        yMax: 5,
                        xTicks: [0, 45, 90, 135, 180, 225, 270, 315, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: sampleTanDeg((x) => Math.tan(2 * x * D), 0, 360, [45, 135, 225, 315], 5, 50).map((seg, i) => ({ points: seg, color: '#2563eb', label: i === 0 ? 'y = \\tan(2x)' : undefined, labelAt: i === 0 ? [10, 4.3] as [number, number] : undefined })),
                        lines: [
                            { from: [45, -5], to: [45, 5], color: '#94a3b8', dashed: true, label: 'x=45°', labelAt: [48, 4.5] },
                            { from: [135, -5], to: [135, 5], color: '#94a3b8', dashed: true, label: 'x=135°', labelAt: [138, 4.5] },
                            { from: [225, -5], to: [225, 5], color: '#94a3b8', dashed: true, label: 'x=225°', labelAt: [228, 4.5] },
                            { from: [315, -5], to: [315, 5], color: '#94a3b8', dashed: true, label: 'x=315°', labelAt: [318, 4.5] }
                        ]
                    }
                }
            ],
            finalAnswer: 'Asymptotes at \\( x = 45^\\circ, 135^\\circ, 225^\\circ, 315^\\circ \\) — twice as many as \\( \\tan x \\) (which has only \\( 90^\\circ \\) and \\( 270^\\circ \\)).'
        }
    },
    {
        id: 't3-018',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 18',
        difficulty: 'Challenge',
        questionText: 'The curve \\( y = a\\cos(bx) + c \\) has maximum value 4, minimum value \\( -2 \\), and period \\( 120^\\circ \\). Given that \\( a, b, c \\) are positive, find their values and sketch the curve for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig graphs', 'find equation', 'amplitude', 'period', 'cos x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the max and min to find amplitude and vertical shift.',
                    workingLatex: 'a = \\dfrac{\\text{max} - \\text{min}}{2} = \\dfrac{4 - (-2)}{2} = 3',
                    explanation: 'Amplitude is half the peak-to-trough distance.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the vertical shift.',
                    workingLatex: 'c = \\dfrac{\\text{max} + \\text{min}}{2} = \\dfrac{4 + (-2)}{2} = 1',
                    explanation: '\\( c \\) is the midline — the average of max and min.'
                },
                {
                    stepNumber: 3,
                    description: 'Use the period to find \\( b \\).',
                    workingLatex: '\\text{Period} = \\dfrac{360^\\circ}{b} = 120^\\circ \\ \\Rightarrow\\ b = 3',
                    explanation: 'For \\( \\cos(bx) \\) the period equals \\( 360^\\circ / b \\). Solve for the positive value.'
                },
                {
                    stepNumber: 4,
                    description: 'Write the equation and verify.',
                    workingLatex: 'y = 3\\cos(3x) + 1',
                    explanation: 'Check: max when \\( \\cos(3x) = 1 \\) gives \\( y = 4 \\); min when \\( \\cos(3x) = -1 \\) gives \\( y = -2 \\); period \\( = 360^\\circ / 3 = 120^\\circ \\). All conditions hold.'
                },
                {
                    stepNumber: 5,
                    description: 'Locate key features on \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: '\\text{Max at } x = 0^\\circ, 120^\\circ, 240^\\circ, 360^\\circ;\\ \\text{Min at } x = 60^\\circ, 180^\\circ, 300^\\circ',
                    explanation: '\\( \\cos(3x) = 1 \\) when \\( 3x = 0, 360, 720, 1080 \\); \\( \\cos(3x) = -1 \\) when \\( 3x = 180, 540, 900 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Sketch three complete cycles.',
                    workingLatex: 'a = 3,\\ b = 3,\\ c = 1',
                    explanation: 'The curve oscillates between 4 and -2 about the midline \\( y = 1 \\), completing 3 cycles in the interval.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -3,
                        yMax: 5,
                        xTicks: [0, 60, 120, 180, 240, 300, 360],
                        yTicks: [-2, -1, 0, 1, 2, 3, 4],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => 3 * Math.cos(3 * x * D) + 1, 0, 360, 240), color: '#2563eb', label: 'y = 3\\cos(3x) + 1', labelAt: [180, 4.5] }
                        ],
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#94a3b8', dashed: true, label: 'midline y=1', labelAt: [300, 1.3] }
                        ],
                        points: [
                            { at: [0, 4], label: 'max 4', labelAnchor: 'n' },
                            { at: [60, -2], label: 'min -2', labelAnchor: 's' },
                            { at: [120, 4], label: 'max', labelAnchor: 'n' },
                            { at: [180, -2], label: 'min', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( a = 3,\\ b = 3,\\ c = 1 \\), so \\( y = 3\\cos(3x) + 1 \\).'
        }
    },
    {
        id: 't3-019',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 19',
        difficulty: 'Challenge',
        questionText: 'Sketch the graph of \\( y = \\sin\\left(x + \\dfrac{\\pi}{4}\\right) \\) for \\( 0 \\leq x \\leq 2\\pi \\) (radians). State the phase shift, the range, and the \\( x \\)-values at which the curve crosses the \\( x \\)-axis.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig graphs', 'radians', 'phase shift', 'sin x', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the transformation.',
                    workingLatex: '\\sin x \\to \\sin\\left(x + \\dfrac{\\pi}{4}\\right)',
                    explanation: 'Adding \\( \\tfrac{\\pi}{4} \\) inside translates the graph \\( \\tfrac{\\pi}{4} \\) to the left.'
                },
                {
                    stepNumber: 2,
                    description: 'State the phase shift and range.',
                    workingLatex: '\\text{Phase shift: } -\\dfrac{\\pi}{4};\\ \\text{Range: } -1 \\leq y \\leq 1',
                    explanation: 'A horizontal shift does not change the range, only the position of the curve.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the zeros.',
                    workingLatex: '\\sin\\left(x + \\dfrac{\\pi}{4}\\right) = 0 \\Rightarrow x + \\dfrac{\\pi}{4} = n\\pi',
                    explanation: 'Sine is zero at integer multiples of \\( \\pi \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( x \\) in \\( [0, 2\\pi] \\).',
                    workingLatex: 'x = n\\pi - \\dfrac{\\pi}{4}',
                    explanation: 'Take \\( n = 1, 2 \\) to land in the interval. \\( n = 0 \\) gives \\( -\\tfrac{\\pi}{4} \\), outside the range; \\( n = 3 \\) gives \\( \\tfrac{11\\pi}{4} \\), also outside.'
                },
                {
                    stepNumber: 5,
                    description: 'Compute the two zeros.',
                    workingLatex: 'x = \\dfrac{3\\pi}{4} \\text{ and } x = \\dfrac{7\\pi}{4}',
                    explanation: 'These are the only zeros in \\( [0, 2\\pi] \\). The curve also has \\( y \\)-intercept \\( \\sin(\\pi/4) = \\tfrac{\\sqrt{2}}{2} \\) at \\( x = 0 \\), and ends at \\( y = \\sin(2\\pi + \\pi/4) = \\tfrac{\\sqrt{2}}{2} \\) at \\( x = 2\\pi \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Sketch using the key points.',
                    workingLatex: '\\text{Max at } x = \\dfrac{\\pi}{4};\\ \\text{Min at } x = \\dfrac{5\\pi}{4}',
                    explanation: 'Maxima occur when \\( x + \\tfrac{\\pi}{4} = \\tfrac{\\pi}{2} \\) so \\( x = \\tfrac{\\pi}{4} \\); minima when \\( x + \\tfrac{\\pi}{4} = \\tfrac{3\\pi}{2} \\) so \\( x = \\tfrac{5\\pi}{4} \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0,
                        xMax: 2 * Math.PI,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, Math.PI / 4, 3 * Math.PI / 4, Math.PI, 5 * Math.PI / 4, 7 * Math.PI / 4, 2 * Math.PI],
                        xTickLabels: ['0', '\\tfrac{\\pi}{4}', '\\tfrac{3\\pi}{4}', '\\pi', '\\tfrac{5\\pi}{4}', '\\tfrac{7\\pi}{4}', '2\\pi'],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (radians)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.sin(x + Math.PI / 4), 0, 2 * Math.PI, 180), color: '#2563eb', label: 'y = \\sin(x + \\pi/4)', labelAt: [4.5, 1.25] }
                        ],
                        points: [
                            { at: [Math.PI / 4, 1], label: 'max', labelAnchor: 'n' },
                            { at: [3 * Math.PI / 4, 0], label: '3\\pi/4', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [5 * Math.PI / 4, -1], label: 'min', labelAnchor: 's' },
                            { at: [7 * Math.PI / 4, 0], label: '7\\pi/4', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Phase shift \\( -\\tfrac{\\pi}{4} \\); range \\( -1 \\leq y \\leq 1 \\); zeros at \\( x = \\tfrac{3\\pi}{4} \\) and \\( x = \\tfrac{7\\pi}{4} \\).'
        }
    },
    {
        id: 't3-020',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 20',
        difficulty: 'Challenge',
        questionText: 'Find the range of \\( y = 5 - 3\\sin(2x) \\) and determine the \\( x \\)-values in \\( 0^\\circ \\leq x \\leq 360^\\circ \\) at which the maximum and minimum values are attained.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig graphs', 'range', 'combined transformations', 'sin', 'maxima minima'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Start with the standard range of sine.',
                    workingLatex: '-1 \\leq \\sin(2x) \\leq 1',
                    explanation: 'Replacing \\( x \\) with \\( 2x \\) changes the period but not the range.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply by \\( -3 \\) — note the inequality flips.',
                    workingLatex: '-3 \\leq -3\\sin(2x) \\leq 3',
                    explanation: 'Multiplying by a negative number reverses the inequality, but since the bounds are symmetric the set is the same: \\( [-3, 3] \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add 5 to all parts.',
                    workingLatex: '2 \\leq 5 - 3\\sin(2x) \\leq 8',
                    explanation: 'The vertical shift moves the entire range up by 5.'
                },
                {
                    stepNumber: 4,
                    description: 'Max occurs when \\( \\sin(2x) = -1 \\).',
                    workingLatex: '2x = 270^\\circ + 360^\\circ k\\ \\Rightarrow\\ x = 135^\\circ + 180^\\circ k',
                    explanation: 'The leading \\( -3 \\) means the maximum of \\( y \\) lines up with the minimum of sine.'
                },
                {
                    stepNumber: 5,
                    description: 'List the \\( x \\)-values for the maximum.',
                    workingLatex: 'x = 135^\\circ,\\ 315^\\circ',
                    explanation: 'Only \\( k = 0 \\) and \\( k = 1 \\) land in \\( [0^\\circ, 360^\\circ] \\). At each, \\( y = 5 - 3(-1) = 8 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Min occurs when \\( \\sin(2x) = 1 \\).',
                    workingLatex: '2x = 90^\\circ + 360^\\circ k\\ \\Rightarrow\\ x = 45^\\circ + 180^\\circ k',
                    explanation: 'Similarly, \\( k = 0, 1 \\) give the in-range \\( x \\)-values.'
                },
                {
                    stepNumber: 7,
                    description: 'State all values and the range.',
                    workingLatex: 'x_{\\min} = 45^\\circ, 225^\\circ;\\ x_{\\max} = 135^\\circ, 315^\\circ',
                    explanation: 'At \\( x = 45^\\circ, 225^\\circ \\) we have \\( y = 5 - 3(1) = 2 \\) (minimum). At \\( x = 135^\\circ, 315^\\circ \\) we have \\( y = 8 \\) (maximum).',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: 0,
                        yMax: 9,
                        xTicks: [0, 45, 90, 135, 180, 225, 270, 315, 360],
                        yTicks: [0, 2, 5, 8],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => 5 - 3 * Math.sin(2 * x * D), 0, 360, 240), color: '#2563eb', label: 'y = 5 - 3\\sin(2x)', labelAt: [180, 8.5] }
                        ],
                        lines: [
                            { from: [0, 5], to: [360, 5], color: '#94a3b8', dashed: true, label: 'midline y=5', labelAt: [310, 5.3] }
                        ],
                        points: [
                            { at: [45, 2], label: 'min (45°, 2)', labelAnchor: 's' },
                            { at: [135, 8], label: 'max (135°, 8)', labelAnchor: 'n' },
                            { at: [225, 2], label: 'min (225°, 2)', labelAnchor: 's' },
                            { at: [315, 8], label: 'max (315°, 8)', labelAnchor: 'n' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Range: \\( 2 \\leq y \\leq 8 \\). Max value 8 at \\( x = 135^\\circ, 315^\\circ \\); min value 2 at \\( x = 45^\\circ, 225^\\circ \\).'
        }
    },
    {
        id: 't3-021',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 21',
        difficulty: 'Standard',
        questionText: 'By sketching a suitable graph, find the number of solutions of the equation \\( \\sin x = 0.4 \\) in the interval \\( 0 \\leq x \\leq 4\\pi \\). State the solutions to 3 significant figures.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'sin x', 'number of solutions', 'radians'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the period of the sine curve.',
                    workingLatex: '\\text{Period of } \\sin x = 2\\pi',
                    explanation: 'In radians the sine function completes one full cycle every \\( 2\\pi \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Count how many periods fit in the interval.',
                    workingLatex: '\\dfrac{4\\pi}{2\\pi} = 2 \\text{ complete periods}',
                    explanation: 'Since \\( 0.4 \\) lies strictly between \\( 0 \\) and \\( 1 \\), the horizontal line \\( y = 0.4 \\) crosses the sine curve twice per period — once on the way up, once on the way down.'
                },
                {
                    stepNumber: 3,
                    description: 'Deduce the number of solutions.',
                    workingLatex: '2 \\times 2 = 4 \\text{ solutions}',
                    explanation: 'Two intersection points per period, multiplied by two periods.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the principal value.',
                    workingLatex: 'x_1 = \\arcsin(0.4) \\approx 0.4115 \\text{ rad}',
                    explanation: 'The first crossing in \\( [0, 2\\pi] \\) is the principal value from a calculator (set to radians).'
                },
                {
                    stepNumber: 5,
                    description: 'Use symmetry and periodicity for the rest.',
                    workingLatex: 'x_2 = \\pi - x_1,\\ x_3 = 2\\pi + x_1,\\ x_4 = 3\\pi - x_1',
                    explanation: 'Within each \\( 2\\pi \\)-period the second solution is the reflection \\( \\pi - x_1 \\); the next period adds \\( 2\\pi \\) to each.'
                },
                {
                    stepNumber: 6,
                    description: 'Give the four solutions to 3 s.f.',
                    workingLatex: 'x \\approx 0.412,\\ 2.73,\\ 6.69,\\ 9.02',
                    explanation: 'Read off from the graph: each horizontal crossing of \\( y = 0.4 \\) corresponds to one solution.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0,
                        xMax: 4 * Math.PI,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, Math.PI / 2, Math.PI, 3 * Math.PI / 2, 2 * Math.PI, 5 * Math.PI / 2, 3 * Math.PI, 7 * Math.PI / 2, 4 * Math.PI],
                        xTickLabels: ['0', '\\tfrac{\\pi}{2}', '\\pi', '\\tfrac{3\\pi}{2}', '2\\pi', '\\tfrac{5\\pi}{2}', '3\\pi', '\\tfrac{7\\pi}{2}', '4\\pi'],
                        yTicks: [-1, 0, 0.4, 1],
                        xLabel: 'x (radians)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.sin(x), 0, 4 * Math.PI, 240), color: '#2563eb', label: 'y = \\sin x', labelAt: [10, 1.25] }
                        ],
                        lines: [
                            { from: [0, 0.4], to: [4 * Math.PI, 0.4], color: '#dc2626', dashed: true, label: 'y = 0.4', labelAt: [11, 0.55] }
                        ],
                        points: [
                            { at: [0.4115, 0.4], label: '0.412', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [Math.PI - 0.4115, 0.4], label: '2.73', labelAnchor: 'se', color: '#dc2626' },
                            { at: [2 * Math.PI + 0.4115, 0.4], label: '6.69', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [3 * Math.PI - 0.4115, 0.4], label: '9.02', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '4 solutions: \\( x \\approx 0.412,\\ 2.73,\\ 6.69,\\ 9.02 \\) radians.'
        }
    },
    {
        id: 't3-022',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 22',
        difficulty: 'Standard',
        questionText: 'The depth of water in metres at a harbour entrance is modelled by \\( d(t) = 5 + 3\\cos\\!\\left(\\dfrac{\\pi t}{6}\\right) \\), where \\( t \\) is the number of hours after midnight. (a) State the maximum and minimum depth. (b) Find the time of the first low tide after midnight. (c) State the period of the tide.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'modelling', 'cos x', 'period', 'tides'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): use the range of cosine.',
                    workingLatex: '-1 \\leq \\cos\\!\\left(\\tfrac{\\pi t}{6}\\right) \\leq 1 \\Rightarrow 2 \\leq d(t) \\leq 8',
                    explanation: 'Multiplying by 3 gives \\( [-3, 3] \\); adding 5 shifts to \\( [2, 8] \\). The vertical stretch and shift do not change the period.'
                },
                {
                    stepNumber: 2,
                    description: 'State maximum and minimum depths.',
                    workingLatex: 'd_{\\max} = 8\\ \\text{m},\\quad d_{\\min} = 2\\ \\text{m}',
                    explanation: 'Maximum occurs when the cosine equals \\( +1 \\); minimum when it equals \\( -1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): low tide occurs when \\( \\cos\\!\\left(\\tfrac{\\pi t}{6}\\right) = -1 \\).',
                    workingLatex: '\\tfrac{\\pi t}{6} = \\pi\\ \\text{(first time after } t = 0\\text{)}',
                    explanation: 'At \\( t = 0 \\) the cosine is \\( +1 \\) (high tide); the next time it reaches \\( -1 \\) is when its argument equals \\( \\pi \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( t \\).',
                    workingLatex: 't = 6 \\Rightarrow \\text{06:00 (6\\ \\text{a.m.})}',
                    explanation: 'Multiply both sides by \\( 6/\\pi \\). So the first low tide occurs 6 hours after midnight.'
                },
                {
                    stepNumber: 5,
                    description: 'Part (c): apply the period formula.',
                    workingLatex: '\\text{Period} = \\dfrac{2\\pi}{\\pi/6} = 12 \\ \\text{hours}',
                    explanation: 'For \\( \\cos(bt) \\) the period is \\( 2\\pi / b \\). The model therefore predicts two complete tide cycles per day, as expected.',
                    diagram: {
                        xMin: 0,
                        xMax: 24,
                        yMin: 0,
                        yMax: 9,
                        xTicks: [0, 6, 12, 18, 24],
                        yTicks: [0, 2, 5, 8],
                        xLabel: 't (hours after midnight)',
                        yLabel: 'd (metres)',
                        curves: [
                            { points: sample((t) => 5 + 3 * Math.cos(Math.PI * t / 6), 0, 24, 200), color: '#2563eb', label: 'd = 5 + 3\\cos(\\pi t/6)', labelAt: [13, 8.5] }
                        ],
                        lines: [
                            { from: [0, 5], to: [24, 5], color: '#94a3b8', dashed: true, label: 'midline d = 5', labelAt: [19, 5.3] }
                        ],
                        points: [
                            { at: [0, 8], label: 'high (0, 8)', labelAnchor: 'n' },
                            { at: [6, 2], label: 'low (6, 2)', labelAnchor: 's' },
                            { at: [12, 8], label: 'high (12, 8)', labelAnchor: 'n' },
                            { at: [18, 2], label: 'low (18, 2)', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: '(a) Max 8 m, min 2 m. (b) First low tide at 06:00. (c) Period = 12 hours.'
        }
    },
    {
        id: 't3-023',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 23',
        difficulty: 'Standard',
        questionText: 'A curve has equation \\( y = \\cos(3x + 60^\\circ) \\). (a) State its period. (b) Find the three smallest positive values of \\( x \\) for which \\( y = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'cos x', 'period', 'zeros', 'combined transformations'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): apply the period formula.',
                    workingLatex: '\\text{Period} = \\dfrac{360^\\circ}{3} = 120^\\circ',
                    explanation: 'For \\( \\cos(bx + c) \\) the period is \\( 360^\\circ / b \\); the phase shift inside does not affect the period.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): set the function to zero.',
                    workingLatex: '\\cos(3x + 60^\\circ) = 0',
                    explanation: 'We need every \\( x \\) where the curve crosses the \\( x \\)-axis.'
                },
                {
                    stepNumber: 3,
                    description: 'Use the fact that \\( \\cos\\theta = 0 \\) at \\( \\theta = 90^\\circ + 180^\\circ n \\).',
                    workingLatex: '3x + 60^\\circ = 90^\\circ + 180^\\circ n',
                    explanation: 'Cosine is zero at every odd multiple of \\( 90^\\circ \\); this is faster than thinking case-by-case.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = 10^\\circ + 60^\\circ n',
                    explanation: 'Subtract \\( 60^\\circ \\) then divide by 3. Now substitute integer values of \\( n \\) and pick the smallest positive ones.'
                },
                {
                    stepNumber: 5,
                    description: 'List the three smallest positive solutions.',
                    workingLatex: 'n = 0 \\Rightarrow x = 10^\\circ;\\ n = 1 \\Rightarrow 70^\\circ;\\ n = 2 \\Rightarrow 130^\\circ',
                    explanation: 'These zeros are spaced by \\( 60^\\circ \\), which is half the period — consistent with cosine.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0,
                        xMax: 180,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 10, 40, 70, 100, 130, 160, 180],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.cos((3 * x + 60) * D), 0, 180, 240), color: '#16a34a', label: 'y = \\cos(3x + 60°)', labelAt: [110, 1.25] }
                        ],
                        points: [
                            { at: [10, 0], label: '10°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [70, 0], label: '70°', labelAnchor: 'se', color: '#dc2626' },
                            { at: [130, 0], label: '130°', labelAnchor: 'sw', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '(a) Period \\( = 120^\\circ \\). (b) \\( x = 10^\\circ,\\ 70^\\circ,\\ 130^\\circ \\).'
        }
    },
    {
        id: 't3-024',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 24',
        difficulty: 'Challenge',
        questionText: 'A sinusoidal curve has amplitude 4 and minimum value 0. The curve passes through the points \\( (0^\\circ, 4) \\) and \\( (45^\\circ, 8) \\) and is rising at \\( x = 0 \\). Find an equation for the curve in the form \\( y = a\\sin(bx) + d \\), giving the values of \\( a \\), \\( b \\) and \\( d \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig graphs', 'find equation', 'sin x', 'amplitude', 'period'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use amplitude and min to fix \\( a \\) and \\( d \\).',
                    workingLatex: 'a = 4,\\ \\text{midline } d = \\tfrac{\\text{max}+\\text{min}}{2} = \\tfrac{8+0}{2} = 4',
                    explanation: 'Amplitude is the given \\( |a| \\); since the curve is rising at \\( x = 0 \\), take the positive value \\( a = 4 \\). The midline is the average of the max (\\( 0 + 2 \\cdot \\text{amp} = 8 \\)) and the min.'
                },
                {
                    stepNumber: 2,
                    description: 'Check the \\( y \\)-intercept against \\( y = 4\\sin(bx) + 4 \\).',
                    workingLatex: 'y(0) = 4\\sin 0 + 4 = 4\\ \\checkmark',
                    explanation: 'The first data point \\( (0^\\circ, 4) \\) is satisfied for any value of \\( b \\), so it does not yet pin down \\( b \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute the second point to determine \\( b \\).',
                    workingLatex: '8 = 4\\sin(45^\\circ b) + 4\\ \\Rightarrow\\ \\sin(45^\\circ b) = 1',
                    explanation: 'The curve reaches its maximum at \\( x = 45^\\circ \\), so the argument of sine must equal \\( 90^\\circ \\) (the first place sine attains \\( 1 \\)).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( b \\).',
                    workingLatex: '45^\\circ b = 90^\\circ \\Rightarrow b = 2',
                    explanation: 'Choosing the smallest positive solution gives \\( b = 2 \\); larger values would give shorter periods that contradict the "first" maximum being at \\( 45^\\circ \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Verify with both data points.',
                    workingLatex: 'y(0) = 4, \\ y(45^\\circ) = 4\\sin 90^\\circ + 4 = 8\\ \\checkmark',
                    explanation: 'Both anchor points are satisfied, and the curve is indeed rising at \\( x = 0 \\) since \\( \\sin(2x) \\) increases from 0 there.'
                },
                {
                    stepNumber: 6,
                    description: 'Write the equation and state the period.',
                    workingLatex: 'y = 4\\sin(2x) + 4,\\ \\text{period} = 180^\\circ',
                    explanation: 'A vertical stretch by 4, an inside doubling (halving the period), and an upward shift of 4 produce the sketch below.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1,
                        yMax: 9,
                        xTicks: [0, 45, 90, 135, 180, 225, 270, 315, 360],
                        yTicks: [0, 4, 8],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => 4 * Math.sin(2 * x * D) + 4, 0, 360, 240), color: '#2563eb', label: 'y = 4\\sin(2x) + 4', labelAt: [225, 8.5] }
                        ],
                        lines: [
                            { from: [0, 4], to: [360, 4], color: '#94a3b8', dashed: true, label: 'midline y = 4', labelAt: [310, 4.4] }
                        ],
                        points: [
                            { at: [0, 4], label: '(0°, 4)', labelAnchor: 'sw' },
                            { at: [45, 8], label: '(45°, 8)', labelAnchor: 'n' },
                            { at: [135, 0], label: '(135°, 0)', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( y = 4\\sin(2x) + 4 \\); i.e., \\( a = 4,\\ b = 2,\\ d = 4 \\).'
        }
    },
    // ── TYPE G: Reading values and symmetry ─────────────────────────────────
    {
        id: 't3-025',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 25',
        difficulty: 'Challenge',
        questionText: 'A curve has equation \\( y = a\\cos\\!\\big(b(x - c)\\big) + d \\). Its maximum value is 7, its minimum value is \\( -1 \\), its period is \\( 240^\\circ \\), and it attains its maximum at \\( x = 30^\\circ \\). Find the values of \\( a \\), \\( b \\), \\( c \\), and \\( d \\) and sketch the curve on \\( [0^\\circ, 360^\\circ] \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig graphs', 'find equation', 'cos x', 'amplitude', 'period', 'phase shift'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the amplitude \\( a \\) and midline \\( d \\).',
                    workingLatex: 'a = \\tfrac{\\text{max}-\\text{min}}{2} = \\tfrac{7-(-1)}{2} = 4;\\ \\ d = \\tfrac{\\text{max}+\\text{min}}{2} = 3',
                    explanation: 'These two formulas are equivalent to "vertical stretch + vertical shift". Take \\( a > 0 \\); the phase \\( c \\) absorbs any reflection.'
                },
                {
                    stepNumber: 2,
                    description: 'Use the period to find \\( b \\).',
                    workingLatex: '\\text{period} = \\tfrac{360^\\circ}{b} = 240^\\circ \\Rightarrow b = \\tfrac{360}{240} = \\tfrac{3}{2}',
                    explanation: 'Solve \\( 360/b = 240 \\) for \\( b \\). The period of cosine is divided by the inside factor \\( b \\); here \\( b < 1 \\) gives a longer period of \\( 240^\\circ \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Use the location of the maximum to find \\( c \\).',
                    workingLatex: '\\cos\\!\\big(\\tfrac{3}{2}(x - c)\\big) = 1 \\text{ at } x = 30^\\circ',
                    explanation: 'The maximum of cosine occurs when its argument is zero. So \\( \\tfrac{3}{2}(30 - c) = 0 \\), giving \\( c = 30 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( c \\).',
                    workingLatex: 'c = 30^\\circ',
                    explanation: 'A horizontal translation \\( c = 30^\\circ \\) to the right places the cosine peak at \\( x = 30^\\circ \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Verify with a second feature.',
                    workingLatex: 'x = 30 + \\tfrac{240}{2} = 150^\\circ \\Rightarrow y_{\\min} = -1\\ \\checkmark',
                    explanation: 'The first minimum after the peak occurs half a period later, at \\( x = 150^\\circ \\), giving \\( y = -1 \\) as required.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -2,
                        yMax: 8,
                        xTicks: [0, 30, 90, 150, 210, 270, 330, 360],
                        yTicks: [-1, 3, 7],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => 4 * Math.cos(1.5 * (x - 30) * D) + 3, 0, 360, 240), color: '#16a34a', label: 'y = 4\\cos(1.5(x - 30°)) + 3', labelAt: [200, 7.5] }
                        ],
                        lines: [
                            { from: [0, 3], to: [360, 3], color: '#94a3b8', dashed: true, label: 'midline y = 3', labelAt: [305, 3.4] }
                        ],
                        points: [
                            { at: [30, 7], label: 'max (30°, 7)', labelAnchor: 'n' },
                            { at: [150, -1], label: 'min (150°, -1)', labelAnchor: 's' },
                            { at: [270, 7], label: 'max (270°, 7)', labelAnchor: 'n' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( a = 4,\\ b = \\tfrac{3}{2},\\ c = 30^\\circ,\\ d = 3 \\); i.e., \\( y = 4\\cos\\!\\big(\\tfrac{3}{2}(x - 30^\\circ)\\big) + 3 \\).'
        }
    },
    {
        id: 't3-026',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 26',
        difficulty: 'Challenge',
        questionText: 'Find the set of values of \\( k \\) for which the equation \\( 2\\cos x + 1 = k \\) has exactly two solutions in the interval \\( 0^\\circ < x < 360^\\circ \\). Use a sketch to justify your answer.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig graphs', 'cos x', 'number of solutions', 'range'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Determine the range of the left-hand side.',
                    workingLatex: '-1 \\leq \\cos x \\leq 1 \\Rightarrow -1 \\leq 2\\cos x + 1 \\leq 3',
                    explanation: 'Multiply by 2 then add 1; the range of \\( 2\\cos x + 1 \\) is \\( [-1, 3] \\). If \\( k \\) lies outside this range, there are no solutions.'
                },
                {
                    stepNumber: 2,
                    description: 'Examine where the horizontal line \\( y = k \\) meets the curve.',
                    workingLatex: 'y = 2\\cos x + 1 \\text{ has max at } x = 0^\\circ,360^\\circ; \\text{ min at } x = 180^\\circ',
                    explanation: 'Within the open interval \\( (0^\\circ, 360^\\circ) \\) the curve descends from below 3 to \\( -1 \\) at \\( 180^\\circ \\) and rises symmetrically back. Each horizontal line therefore meets it in pairs by symmetry — except at the turning point at \\( 180^\\circ \\) where it just touches.'
                },
                {
                    stepNumber: 3,
                    description: 'Identify the boundary cases.',
                    workingLatex: 'k = -1: \\text{ only } x = 180^\\circ;\\ k = 3: \\text{ no solutions in } (0^\\circ, 360^\\circ)',
                    explanation: 'At \\( k = -1 \\) the line is tangent to the minimum — one solution. At \\( k = 3 \\) the maxima sit at the endpoints which are excluded.'
                },
                {
                    stepNumber: 4,
                    description: 'Conclude.',
                    workingLatex: '-1 < k < 3',
                    explanation: 'For every \\( k \\) strictly between \\( -1 \\) and \\( 3 \\), the horizontal line cuts the descending and ascending halves of the curve once each — giving exactly two solutions.'
                },
                {
                    stepNumber: 5,
                    description: 'Sketch to confirm.',
                    workingLatex: '\\text{Two intersection points for } k = 2;\\ \\text{one for } k = -1;\\ \\text{none for } k = 4',
                    explanation: 'The diagram below shows \\( y = 2\\cos x + 1 \\) and three test horizontal lines, illustrating the boundary behaviour.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -2,
                        yMax: 5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 2, 3, 4],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => 2 * Math.cos(x * D) + 1, 0, 360, 240), color: '#16a34a', label: 'y = 2\\cos x + 1', labelAt: [200, 3.6] }
                        ],
                        lines: [
                            { from: [0, 2], to: [360, 2], color: '#2563eb', dashed: true, label: 'y = 2 \\;\\;\\text{two solutions}', labelAt: [200, 2.35] },
                            { from: [0, -1], to: [360, -1], color: '#dc2626', dashed: true, label: 'y = -1 \\;\\;\\text{one solution}', labelAt: [200, -0.7] },
                            { from: [0, 4], to: [360, 4], color: '#a855f7', dashed: true, label: 'y = 4 \\;\\;\\text{no solution}', labelAt: [200, 4.3] }
                        ],
                        points: [
                            { at: [180, -1], label: 'min', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( -1 < k < 3 \\) (i.e., \\( k \\in (-1, 3) \\)).'
        }
    },
    {
        id: 't3-027',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 27',
        difficulty: 'Standard',
        questionText: 'A curve has equation \\( y = \\sin(bx) \\) where \\( b \\) is a positive constant. The smallest positive value of \\( x \\) for which \\( y = 0 \\) is \\( x = 60^\\circ \\). Find the value of \\( b \\) and state the period of the curve.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'find b', 'sin x', 'period', 'zeros'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recall when \\( \\sin\\theta \\) is zero.',
                    workingLatex: '\\sin\\theta = 0 \\iff \\theta = 0,\\ 180^\\circ,\\ 360^\\circ,\\ \\dots',
                    explanation: 'Sine is zero at integer multiples of \\( 180^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply this to \\( \\sin(bx) \\).',
                    workingLatex: 'bx = 180^\\circ \\text{ for the first positive zero}',
                    explanation: 'The smallest positive zero after \\( x = 0 \\) occurs when the argument first equals \\( 180^\\circ \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( x = 60^\\circ \\).',
                    workingLatex: 'b \\times 60^\\circ = 180^\\circ',
                    explanation: 'Use the given information that the first positive zero is at \\( x = 60^\\circ \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( b \\).',
                    workingLatex: 'b = 3',
                    explanation: 'Divide both sides by \\( 60^\\circ \\). Since \\( b > 0 \\), this is the only positive solution.'
                },
                {
                    stepNumber: 5,
                    description: 'State the period.',
                    workingLatex: '\\text{Period} = \\dfrac{360^\\circ}{3} = 120^\\circ',
                    explanation: 'The horizontal stretch factor is \\( \\tfrac{1}{3} \\); the period is divided by 3.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 60, 120, 180, 240, 300, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.sin(3 * x * D), 0, 360, 240), color: '#2563eb', label: 'y = \\sin(3x)', labelAt: [240, 1.25] }
                        ],
                        points: [
                            { at: [60, 0], label: '(60°, 0)', labelAnchor: 'ne', color: '#dc2626' },
                            { at: [120, 0], label: '120°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [180, 0], label: '180°', labelAnchor: 'ne', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( b = 3 \\); period \\( = 120^\\circ \\).'
        }
    },
    {
        id: 't3-028',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 28',
        difficulty: 'Challenge',
        questionText: 'Sketch the graph of \\( y = -2\\sin(2x) + 1 \\) on the interval \\( 0^\\circ \\leq x \\leq 360^\\circ \\). State the period, amplitude, range, and find all four \\( x \\)-intercepts in this interval.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig graphs', 'combined transformations', 'sin x', 'reflection', 'x-intercepts'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Read off period and amplitude.',
                    workingLatex: '\\text{Amplitude} = |-2| = 2;\\ \\text{Period} = \\dfrac{360^\\circ}{2} = 180^\\circ',
                    explanation: 'Amplitude comes from the coefficient on sine; inside multiplier 2 halves the period. The negative coefficient also reflects the curve in the \\( x \\)-axis.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the range.',
                    workingLatex: '-1 \\leq \\sin(2x) \\leq 1 \\Rightarrow -2 \\leq -2\\sin(2x) \\leq 2 \\Rightarrow -1 \\leq y \\leq 3',
                    explanation: 'Multiplying by \\( -2 \\) flips and stretches the range to \\( [-2, 2] \\); adding 1 shifts it up to \\( [-1, 3] \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Set \\( y = 0 \\) and solve.',
                    workingLatex: '-2\\sin(2x) + 1 = 0 \\Rightarrow \\sin(2x) = \\tfrac{1}{2}',
                    explanation: 'Isolate \\( \\sin(2x) \\) by rearranging.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( \\sin(2x) = 1/2 \\) for \\( 2x \\in [0^\\circ, 720^\\circ] \\).',
                    workingLatex: '2x = 30^\\circ,\\ 150^\\circ,\\ 390^\\circ,\\ 510^\\circ',
                    explanation: 'Within one period \\( [0^\\circ, 360^\\circ] \\) the solutions are \\( 30^\\circ \\) and \\( 180^\\circ - 30^\\circ = 150^\\circ \\). Add \\( 360^\\circ \\) to each to fill the doubled interval.'
                },
                {
                    stepNumber: 5,
                    description: 'Divide by 2 to get \\( x \\).',
                    workingLatex: 'x = 15^\\circ,\\ 75^\\circ,\\ 195^\\circ,\\ 255^\\circ',
                    explanation: 'Four \\( x \\)-intercepts, as expected: two per period times two periods of \\( y \\) in \\( [0^\\circ, 360^\\circ] \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Starts at } (0^\\circ, 1),\\ \\text{first min at } (45^\\circ, -1),\\ \\text{first max at } (135^\\circ, 3)',
                    explanation: 'The reflection means the curve falls first to its minimum, then rises through the midline to its maximum, mirroring the standard sine pattern.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0,
                        xMax: 360,
                        yMin: -2,
                        yMax: 4,
                        xTicks: [0, 15, 45, 75, 135, 195, 225, 255, 315, 360],
                        yTicks: [-1, 0, 1, 3],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => -2 * Math.sin(2 * x * D) + 1, 0, 360, 240), color: '#2563eb', label: 'y = -2\\sin(2x) + 1', labelAt: [230, 3.5] }
                        ],
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#94a3b8', dashed: true, label: 'midline y = 1', labelAt: [310, 1.3] }
                        ],
                        points: [
                            { at: [15, 0], label: '15°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [75, 0], label: '75°', labelAnchor: 'se', color: '#dc2626' },
                            { at: [195, 0], label: '195°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [255, 0], label: '255°', labelAnchor: 'se', color: '#dc2626' },
                            { at: [45, -1], label: 'min', labelAnchor: 's' },
                            { at: [135, 3], label: 'max', labelAnchor: 'n' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Amplitude 2; period \\( 180^\\circ \\); range \\( -1 \\leq y \\leq 3 \\). \\( x \\)-intercepts at \\( 15^\\circ,\\ 75^\\circ,\\ 195^\\circ,\\ 255^\\circ \\).'
        }
    },
    // ── TYPE H: Identify the graph from its equation ────────────────────────
    {
        id: 't3-029',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 29',
        difficulty: 'Challenge',
        questionText: 'Sketch the graph of \\( y = 2\\tan(x + 30^\\circ) \\) on the interval \\( -150^\\circ \\leq x \\leq 150^\\circ \\). State the equations of the asymptotes in this interval and the coordinates of the \\( x \\)-intercept and the \\( y \\)-intercept.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig graphs', 'tan x', 'asymptotes', 'combined transformations', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the transformation.',
                    workingLatex: '\\tan x \\to 2\\tan(x + 30^\\circ)',
                    explanation: 'Shift the parent \\( \\tan x \\) graph \\( 30^\\circ \\) to the left, then stretch vertically by a factor of 2. The vertical stretch does not move asymptotes.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the asymptotes by setting the argument equal to \\( 90^\\circ + 180^\\circ k \\).',
                    workingLatex: 'x + 30^\\circ = 90^\\circ + 180^\\circ k \\Rightarrow x = 60^\\circ + 180^\\circ k',
                    explanation: 'Tan is undefined where its argument is an odd multiple of \\( 90^\\circ \\). The transformed asymptotes are the parent asymptotes shifted left by \\( 30^\\circ \\).'
                },
                {
                    stepNumber: 3,
                    description: 'List the asymptotes in the given interval.',
                    workingLatex: 'k = -1: x = -120^\\circ;\\ k = 0: x = 60^\\circ',
                    explanation: 'Other values of \\( k \\) fall outside \\( [-150^\\circ, 150^\\circ] \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the \\( x \\)-intercept (set \\( y = 0 \\)).',
                    workingLatex: '2\\tan(x + 30^\\circ) = 0 \\Rightarrow x + 30^\\circ = 180^\\circ k \\Rightarrow x = -30^\\circ',
                    explanation: 'The only solution in \\( (-120^\\circ, 60^\\circ) \\) (the middle branch) is \\( x = -30^\\circ \\). Note \\( x = 150^\\circ \\) (from \\( k=1 \\)) is at the boundary on a different branch.'
                },
                {
                    stepNumber: 5,
                    description: 'Find the \\( y \\)-intercept (set \\( x = 0 \\)).',
                    workingLatex: 'y(0) = 2\\tan 30^\\circ = 2 \\times \\tfrac{1}{\\sqrt{3}} = \\tfrac{2\\sqrt{3}}{3}',
                    explanation: 'Use the exact value \\( \\tan 30^\\circ = \\tfrac{1}{\\sqrt 3} \\); rationalise the denominator.'
                },
                {
                    stepNumber: 6,
                    description: 'Sketch the three branches between the asymptotes.',
                    workingLatex: '\\text{Each branch goes from } -\\infty \\text{ to } +\\infty \\text{ between consecutive asymptotes.}',
                    explanation: 'The vertical stretch factor 2 means \\( y \\) climbs twice as fast as the parent. The middle branch passes through \\( (-30^\\circ, 0) \\) and \\( (0, \\tfrac{2\\sqrt{3}}{3}) \\).',
                    diagram: {
                        xMin: -150,
                        xMax: 150,
                        yMin: -5,
                        yMax: 5,
                        xTicks: [-150, -120, -90, -30, 0, 60, 90, 150],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: sampleTanDeg((x) => 2 * Math.tan((x + 30) * D), -150, 150, [-120, 60], 5, 80).map((seg, i) => ({ points: seg, color: '#a855f7', label: i === 1 ? 'y = 2\\tan(x + 30°)' : undefined, labelAt: i === 1 ? [30, 4.2] as [number, number] : undefined })),
                        lines: [
                            { from: [-120, -5], to: [-120, 5], color: '#dc2626', dashed: true, label: 'x = -120°', labelAt: [-117, -4.5] },
                            { from: [60, -5], to: [60, 5], color: '#dc2626', dashed: true, label: 'x = 60°', labelAt: [63, -4.5] }
                        ],
                        points: [
                            { at: [-30, 0], label: '(-30°, 0)', labelAnchor: 'sw' },
                            { at: [0, 2 / Math.sqrt(3)], label: '(0, 2/\\sqrt{3})', labelAnchor: 'e' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Asymptotes: \\( x = -120^\\circ \\) and \\( x = 60^\\circ \\). \\( x \\)-intercept \\( (-30^\\circ, 0) \\); \\( y \\)-intercept \\( \\big(0,\\ \\tfrac{2\\sqrt{3}}{3}\\big) \\).'
        }
    },
    {
        id: 't3-030',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 30',
        difficulty: 'Standard',
        questionText: 'A curve has equation \\( y = a\\cos(bx) + c \\), where \\( a > 0 \\) and \\( b > 0 \\). Its maximum value is 5, its minimum value is \\( -3 \\), and its first minimum for \\( x > 0 \\) occurs at \\( x = 90^\\circ \\). Find the values of \\( a \\), \\( b \\) and \\( c \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'find equation', 'cos x', 'amplitude', 'period'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compute the amplitude \\( a \\).',
                    workingLatex: 'a = \\tfrac{\\text{max} - \\text{min}}{2} = \\tfrac{5 - (-3)}{2} = 4',
                    explanation: 'Half the distance between the maximum and the minimum.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the vertical shift \\( c \\).',
                    workingLatex: 'c = \\tfrac{\\text{max} + \\text{min}}{2} = \\tfrac{5 + (-3)}{2} = 1',
                    explanation: 'The midline is at \\( y = 1 \\), i.e., the curve oscillates symmetrically about \\( y = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Use the location of the first minimum to fix \\( b \\).',
                    workingLatex: '\\cos(b \\times 90^\\circ) = -1 \\Rightarrow b \\times 90^\\circ = 180^\\circ',
                    explanation: 'Cosine takes its minimum value \\( -1 \\) first at argument \\( 180^\\circ \\). The leading factor \\( a > 0 \\) means the minimum of the curve aligns with the minimum of cosine.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( b \\).',
                    workingLatex: 'b = 2',
                    explanation: 'Divide both sides by \\( 90^\\circ \\). With \\( b > 0 \\), this is the unique positive value.'
                },
                {
                    stepNumber: 5,
                    description: 'State the equation and verify against the data.',
                    workingLatex: 'y = 4\\cos(2x) + 1,\\ \\text{period} = 180^\\circ',
                    explanation: 'Check: at \\( x = 0 \\), \\( y = 4 + 1 = 5 \\) (max ✓); at \\( x = 90^\\circ \\), \\( y = 4(-1) + 1 = -3 \\) (min ✓).',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -4,
                        yMax: 6,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-3, 1, 5],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => 4 * Math.cos(2 * x * D) + 1, 0, 360, 240), color: '#16a34a', label: 'y = 4\\cos(2x) + 1', labelAt: [225, 5.6] }
                        ],
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#94a3b8', dashed: true, label: 'midline y = 1', labelAt: [305, 1.4] }
                        ],
                        points: [
                            { at: [0, 5], label: 'max (0°, 5)', labelAnchor: 'n' },
                            { at: [90, -3], label: 'min (90°, -3)', labelAnchor: 's' },
                            { at: [180, 5], label: 'max (180°, 5)', labelAnchor: 'n' },
                            { at: [270, -3], label: 'min (270°, -3)', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( a = 4,\\ b = 2,\\ c = 1 \\); i.e., \\( y = 4\\cos(2x) + 1 \\).'
        }
    },
    // ── TYPE I: Multi-part exam-style questions ─────────────────────────────
    {
        id: 't3-031',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 31',
        difficulty: 'Standard',
        questionText: 'Starting with \\( y = \\cos x \\), the following transformations are applied in this order:\n\n(i) reflection in the \\( x \\)-axis,\n(ii) horizontal stretch with scale factor 2,\n(iii) translation by \\( -1 \\) in the \\( y \\)-direction.\n\nWrite down the equation of the resulting curve and sketch it on \\( 0^\\circ \\leq x \\leq 720^\\circ \\), marking the coordinates of all maxima, minima and the \\( y \\)-intercept.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'sequence of transformations', 'cos x', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply (i) reflection in the \\( x \\)-axis.',
                    workingLatex: 'y = \\cos x \\;\\longrightarrow\\; y = -\\cos x',
                    explanation: 'A reflection in the \\( x \\)-axis sends \\( y \\) to \\( -y \\), so it multiplies the whole right-hand side by \\( -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply (ii) horizontal stretch by scale factor 2.',
                    workingLatex: 'y = -\\cos x \\;\\longrightarrow\\; y = -\\cos\\!\\left(\\tfrac{1}{2}x\\right)',
                    explanation: 'A horizontal stretch with factor 2 replaces \\( x \\) by \\( \\tfrac{1}{2}x \\); the period doubles from \\( 360^\\circ \\) to \\( 720^\\circ \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply (iii) translation by \\( -1 \\) in the \\( y \\)-direction.',
                    workingLatex: 'y = -\\cos\\!\\left(\\tfrac{1}{2}x\\right) - 1',
                    explanation: 'A vertical translation by \\( -1 \\) subtracts 1 from the whole expression — the midline drops from \\( y = 0 \\) to \\( y = -1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'x = 0:\\; y = -\\cos 0 - 1 = -1 - 1 = -2',
                    explanation: 'Substitute \\( x = 0 \\); since \\( \\cos 0 = 1 \\) this gives \\( y = -2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find the maxima and minima on \\( [0^\\circ, 720^\\circ] \\).',
                    workingLatex: '\\text{Max when } \\cos\\!\\left(\\tfrac{x}{2}\\right) = -1 \\Rightarrow x = 360^\\circ;\\quad \\text{Min when } \\cos\\!\\left(\\tfrac{x}{2}\\right) = 1 \\Rightarrow x = 0^\\circ, 720^\\circ',
                    explanation: 'The \\( -\\cos \\) is largest when \\( \\cos \\) is smallest. The new period is \\( 720^\\circ \\), so within \\( [0^\\circ, 720^\\circ] \\) there is exactly one maximum (at the centre) and two minima (at the endpoints).'
                },
                {
                    stepNumber: 6,
                    description: 'State the coordinates and sketch.',
                    workingLatex: '\\text{Max: } (360^\\circ,\\ 0);\\quad \\text{Min: } (0^\\circ,\\ -2),\\ (720^\\circ,\\ -2)',
                    explanation: 'Maximum value is \\( 1 - 1 = 0 \\); minimum value is \\( -1 - 1 = -2 \\).',
                    diagram: {
                        xMin: 0,
                        xMax: 720,
                        yMin: -2.5,
                        yMax: 0.5,
                        xTicks: [0, 180, 360, 540, 720],
                        yTicks: [-2, -1, 0],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => -Math.cos(0.5 * x * D) - 1, 0, 720, 240), color: '#2563eb', label: 'y = -\\cos(x/2) - 1', labelAt: [500, -0.25] }
                        ],
                        points: [
                            { at: [0, -2], label: '(0°, -2)', labelAnchor: 'ne' },
                            { at: [360, 0], label: 'max (360°, 0)', labelAnchor: 'n' },
                            { at: [720, -2], label: '(720°, -2)', labelAnchor: 'nw' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Resulting curve: \\( y = -\\cos\\!\\left(\\tfrac{1}{2}x\\right) - 1 \\). Maximum \\( (360^\\circ, 0) \\); minima \\( (0^\\circ, -2) \\) and \\( (720^\\circ, -2) \\); \\( y \\)-intercept \\( (0^\\circ, -2) \\).'
        }
    },
    {
        id: 't3-032',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 32',
        difficulty: 'Challenge',
        questionText: 'Show, by sketching \\( y = \\cos(x - 90^\\circ) \\) and \\( y = \\sin x \\) on the same axes for \\( 0^\\circ \\leq x \\leq 360^\\circ \\), that the two curves are identical.\n\nExplain the result by describing how \\( y = \\cos x \\) is transformed to give \\( y = \\cos(x - 90^\\circ) \\), and verify the identity at \\( x = 30^\\circ \\) and \\( x = 210^\\circ \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig graphs', 'horizontal translation', 'equivalent curves', 'cos x', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Describe the transformation \\( \\cos x \\to \\cos(x - 90^\\circ) \\).',
                    workingLatex: 'y = \\cos(x - 90^\\circ)',
                    explanation: 'Replacing \\( x \\) by \\( x - 90^\\circ \\) translates the graph of \\( \\cos x \\) by \\( +90^\\circ \\) (i.e. \\( 90^\\circ \\) to the right).'
                },
                {
                    stepNumber: 2,
                    description: 'Plot the key points of \\( y = \\cos(x - 90^\\circ) \\) on \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: '(0^\\circ, 0),\\ (90^\\circ, 1),\\ (180^\\circ, 0),\\ (270^\\circ, -1),\\ (360^\\circ, 0)',
                    explanation: 'Take the standard cosine reference points \\( (0,1), (90,0), (180,-1), (270,0), (360,1) \\) and add \\( 90^\\circ \\) to each \\( x \\)-coordinate (then wrap into the visible interval where needed).'
                },
                {
                    stepNumber: 3,
                    description: 'Compare with \\( y = \\sin x \\).',
                    workingLatex: '\\sin x: \\; (0^\\circ, 0),\\ (90^\\circ, 1),\\ (180^\\circ, 0),\\ (270^\\circ, -1),\\ (360^\\circ, 0)',
                    explanation: 'The key points coincide exactly, so the two curves are identical on this interval (and, by periodicity, everywhere).'
                },
                {
                    stepNumber: 4,
                    description: 'Verify at \\( x = 30^\\circ \\).',
                    workingLatex: '\\cos(30^\\circ - 90^\\circ) = \\cos(-60^\\circ) = \\cos 60^\\circ = \\tfrac{1}{2};\\quad \\sin 30^\\circ = \\tfrac{1}{2}',
                    explanation: 'Use \\( \\cos(-\\theta) = \\cos \\theta \\) (cosine is even). Both sides agree.'
                },
                {
                    stepNumber: 5,
                    description: 'Verify at \\( x = 210^\\circ \\).',
                    workingLatex: '\\cos(210^\\circ - 90^\\circ) = \\cos 120^\\circ = -\\tfrac{1}{2};\\quad \\sin 210^\\circ = -\\tfrac{1}{2}',
                    explanation: 'Both values match, confirming the identity at a second test point in a different quadrant.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 30, 90, 180, 210, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.cos((x - 90) * D), 0, 360, 180), color: '#94a3b8', label: 'y = \\cos(x - 90°)', labelAt: [60, 1.25], width: 4 },
                            { points: sample((x) => Math.sin(x * D), 0, 360, 180), color: '#2563eb', label: 'y = \\sin x', labelAt: [240, -1.25] }
                        ],
                        points: [
                            { at: [30, 0.5], label: '(30°, 1/2)', labelAnchor: 'nw' },
                            { at: [90, 1], label: 'max', labelAnchor: 'n' },
                            { at: [210, -0.5], label: '(210°, -1/2)', labelAnchor: 'sw' },
                            { at: [270, -1], label: 'min', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( \\cos(x - 90^\\circ) \\equiv \\sin x \\); the curves coincide because shifting cosine right by a quarter period turns it into sine.'
        }
    },
    {
        id: 't3-033',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 33',
        difficulty: 'Standard',
        questionText: 'A sound wave is modelled by \\( y = \\sin(880\\pi t) \\), where \\( t \\) is time in seconds and \\( y \\) is the displacement (arbitrary units).\n\n(a) State the period of the wave, in seconds.\n\n(b) Hence find the frequency, in hertz (Hz).\n\n(c) Sketch one complete cycle of the wave, starting from \\( t = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'period', 'frequency', 'modelling', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the angular frequency.',
                    workingLatex: 'y = \\sin(\\omega t) \\text{ with } \\omega = 880\\pi',
                    explanation: 'For \\( y = \\sin(\\omega t) \\) in radians, the coefficient of \\( t \\) is the angular frequency \\( \\omega \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): apply the period formula \\( T = \\tfrac{2\\pi}{\\omega} \\).',
                    workingLatex: 'T = \\dfrac{2\\pi}{880\\pi} = \\dfrac{1}{440} \\text{ s}',
                    explanation: 'In radians, sine repeats every \\( 2\\pi \\); dividing by the angular frequency gives the period in seconds.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): the frequency is the reciprocal of the period.',
                    workingLatex: 'f = \\dfrac{1}{T} = 440 \\text{ Hz}',
                    explanation: 'Frequency in hertz counts how many complete cycles occur per second. (This is concert pitch A.)'
                },
                {
                    stepNumber: 4,
                    description: 'Part (c): mark the key points of one cycle from \\( t = 0 \\).',
                    workingLatex: '(0, 0),\\ \\left(\\tfrac{1}{1760}, 1\\right),\\ \\left(\\tfrac{1}{880}, 0\\right),\\ \\left(\\tfrac{3}{1760}, -1\\right),\\ \\left(\\tfrac{1}{440}, 0\\right)',
                    explanation: 'A sine cycle hits its peak a quarter of a period in, crosses zero at the half-period, troughs at three-quarters, then returns to zero.'
                },
                {
                    stepNumber: 5,
                    description: 'Sketch over \\( 0 \\leq t \\leq \\tfrac{1}{440} \\).',
                    workingLatex: '\\text{Amplitude } 1,\\ \\text{period } \\tfrac{1}{440}\\text{ s}',
                    explanation: 'A standard sine shape compressed into one short interval.',
                    diagram: {
                        xMin: 0,
                        xMax: 1 / 440,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 1 / 1760, 1 / 880, 3 / 1760, 1 / 440],
                        xTickLabels: ['0', '\\tfrac{1}{1760}', '\\tfrac{1}{880}', '\\tfrac{3}{1760}', '\\tfrac{1}{440}'],
                        yTicks: [-1, 0, 1],
                        xLabel: 't (seconds)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((t) => Math.sin(880 * Math.PI * t), 0, 1 / 440, 180), color: '#2563eb', label: 'y = \\sin(880\\pi t)', labelAt: [1.3 / 880, 1.25] }
                        ],
                        points: [
                            { at: [1 / 1760, 1], label: 'peak', labelAnchor: 'n' },
                            { at: [3 / 1760, -1], label: 'trough', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: '(a) Period \\( = \\tfrac{1}{440} \\) s. (b) Frequency \\( = 440 \\) Hz.'
        }
    },
    {
        id: 't3-034',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 34',
        difficulty: 'Challenge',
        questionText: '(a) Using the graph of \\( y = \\sin x \\), state all values of \\( x \\) in \\( 0^\\circ \\leq x \\leq 720^\\circ \\) at which the curve has a turning point, and classify each as a maximum or minimum.\n\n(b) Repeat for \\( y = -\\cos\\!\\left(\\tfrac{1}{2}x\\right) \\) on the same interval.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig graphs', 'turning points', 'transformations', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): the maxima of \\( \\sin x \\) occur where \\( \\sin x = 1 \\).',
                    workingLatex: '\\sin x = 1 \\Rightarrow x = 90^\\circ,\\ 450^\\circ',
                    explanation: '\\( \\sin x = 1 \\) at \\( 90^\\circ + 360^\\circ k \\); inside \\( [0^\\circ, 720^\\circ] \\) the values are \\( 90^\\circ \\) and \\( 450^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Minima of \\( \\sin x \\) occur where \\( \\sin x = -1 \\).',
                    workingLatex: '\\sin x = -1 \\Rightarrow x = 270^\\circ,\\ 630^\\circ',
                    explanation: 'Same logic, shifted by half a period.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): determine the period of \\( y = -\\cos\\!\\left(\\tfrac{1}{2}x\\right) \\).',
                    workingLatex: '\\text{Period} = \\tfrac{360^\\circ}{1/2} = 720^\\circ',
                    explanation: 'The horizontal stretch by factor 2 doubles the period, so exactly one complete cycle fits in \\( [0^\\circ, 720^\\circ] \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find where \\( y = -\\cos\\!\\left(\\tfrac{1}{2}x\\right) \\) attains its maximum value \\( +1 \\).',
                    workingLatex: '\\cos\\!\\left(\\tfrac{x}{2}\\right) = -1 \\Rightarrow \\tfrac{x}{2} = 180^\\circ \\Rightarrow x = 360^\\circ',
                    explanation: 'The negative sign flips cosine, so the max of \\( -\\cos \\) occurs where \\( \\cos \\) is at its minimum.'
                },
                {
                    stepNumber: 5,
                    description: 'Find where it attains its minimum value \\( -1 \\).',
                    workingLatex: '\\cos\\!\\left(\\tfrac{x}{2}\\right) = 1 \\Rightarrow \\tfrac{x}{2} = 0^\\circ,\\ 360^\\circ \\Rightarrow x = 0^\\circ,\\ 720^\\circ',
                    explanation: 'These are the endpoints — they are turning points because they occur at the period boundaries where the curve has horizontal tangent.'
                },
                {
                    stepNumber: 6,
                    description: 'Collect both answers.',
                    workingLatex: '\\text{(a) Max: } 90^\\circ, 450^\\circ;\\ \\text{Min: } 270^\\circ, 630^\\circ.\\quad \\text{(b) Max: } 360^\\circ;\\ \\text{Min: } 0^\\circ, 720^\\circ.',
                    explanation: 'Notice (b) has only three turning points because the new period is the whole interval.',
                    diagram: {
                        xMin: 0,
                        xMax: 720,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 90, 270, 360, 450, 630, 720],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.sin(x * D), 0, 720, 240), color: '#2563eb', label: 'y = \\sin x', labelAt: [120, 1.25] },
                            { points: sample((x) => -Math.cos(0.5 * x * D), 0, 720, 240), color: '#dc2626', label: 'y = -\\cos(x/2)', labelAt: [500, 1.25] }
                        ],
                        points: [
                            { at: [90, 1], label: 'max', labelAnchor: 'n' },
                            { at: [270, -1], label: 'min', labelAnchor: 's' },
                            { at: [360, 1], label: 'max', labelAnchor: 'n' },
                            { at: [450, 1], label: 'max', labelAnchor: 'n' },
                            { at: [630, -1], label: 'min', labelAnchor: 's' },
                            { at: [0, -1], label: 'min', labelAnchor: 's' },
                            { at: [720, -1], label: 'min', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: '(a) Maxima at \\( x = 90^\\circ, 450^\\circ \\); minima at \\( x = 270^\\circ, 630^\\circ \\). (b) Maximum at \\( x = 360^\\circ \\); minima at \\( x = 0^\\circ \\) and \\( x = 720^\\circ \\).'
        }
    },
    {
        id: 't3-035',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 35',
        difficulty: 'Standard',
        questionText: 'Sketch \\( y = \\tan\\!\\left(\\tfrac{1}{2}x\\right) \\) for \\( -360^\\circ \\leq x \\leq 360^\\circ \\).\n\nState the equations of all asymptotes, the coordinates of all \\( x \\)-intercepts in the interval, and the period. Compare the period with that of \\( y = \\tan x \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'tan x', 'horizontal stretch', 'asymptotes', 'period'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the transformation.',
                    workingLatex: 'y = \\tan x \\;\\longrightarrow\\; y = \\tan\\!\\left(\\tfrac{1}{2}x\\right)',
                    explanation: 'Replacing \\( x \\) by \\( \\tfrac{1}{2}x \\) is a horizontal stretch with scale factor 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the new period.',
                    workingLatex: '\\text{Period} = \\tfrac{180^\\circ}{1/2} = 360^\\circ',
                    explanation: 'The period of \\( \\tan(bx) \\) is \\( 180^\\circ / b \\). With \\( b = \\tfrac{1}{2} \\) the period doubles from \\( 180^\\circ \\) to \\( 360^\\circ \\) — twice that of \\( \\tan x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the asymptotes by solving \\( \\tfrac{x}{2} = 90^\\circ + 180^\\circ n \\).',
                    workingLatex: 'x = 180^\\circ + 360^\\circ n',
                    explanation: 'Tangent is undefined when its argument is an odd multiple of \\( 90^\\circ \\). Multiplying through by 2 gives the asymptote locations.'
                },
                {
                    stepNumber: 4,
                    description: 'List asymptotes inside \\( [-360^\\circ, 360^\\circ] \\).',
                    workingLatex: 'x = -180^\\circ,\\ 180^\\circ',
                    explanation: 'Taking \\( n = -1, 0 \\) gives the two vertical lines in range. (\\( n = 1 \\) gives \\( 540^\\circ \\), out of range.)'
                },
                {
                    stepNumber: 5,
                    description: 'Find the \\( x \\)-intercepts by solving \\( \\tfrac{x}{2} = 180^\\circ n \\).',
                    workingLatex: 'x = 360^\\circ n \\Rightarrow x = -360^\\circ,\\ 0^\\circ,\\ 360^\\circ',
                    explanation: 'Tangent is zero where its argument is an integer multiple of \\( 180^\\circ \\); within the given range three zeros appear, including the endpoints.'
                },
                {
                    stepNumber: 6,
                    description: 'Sketch with asymptotes and zeros marked.',
                    workingLatex: '\\text{Period of } \\tan(x/2) = 360^\\circ = 2 \\times \\text{Period of } \\tan x',
                    explanation: 'The stretched curve completes one branch every \\( 360^\\circ \\) instead of every \\( 180^\\circ \\).',
                    diagram: {
                        xMin: -360,
                        xMax: 360,
                        yMin: -5,
                        yMax: 5,
                        xTicks: [-360, -180, 0, 180, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: sampleTanDeg((x) => Math.tan(0.5 * x * D), -360, 360, [-180, 180], 5, 60).map((seg, i) => ({ points: seg, color: '#2563eb', label: i === 0 ? 'y = \\tan(x/2)' : undefined, labelAt: i === 0 ? [-350, 4.3] as [number, number] : undefined })),
                        lines: [
                            { from: [-180, -5], to: [-180, 5], color: '#94a3b8', dashed: true, label: 'x=-180°', labelAt: [-175, 4.3] },
                            { from: [180, -5], to: [180, 5], color: '#94a3b8', dashed: true, label: 'x=180°', labelAt: [185, 4.3] }
                        ],
                        points: [
                            { at: [-360, 0], label: '(-360°, 0)', labelAnchor: 'sw' },
                            { at: [0, 0], label: '(0°, 0)', labelAnchor: 'sw' },
                            { at: [360, 0], label: '(360°, 0)', labelAnchor: 'sw' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Period \\( = 360^\\circ \\) (double that of \\( \\tan x \\)); asymptotes \\( x = \\pm 180^\\circ \\); zeros at \\( x = -360^\\circ, 0^\\circ, 360^\\circ \\).'
        }
    },
    {
        id: 't3-036',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 36',
        difficulty: 'Challenge',
        questionText: 'A curve has equation \\( y = a\\cos(bx) + c \\), where \\( a > 0 \\) and \\( b > 0 \\). It has period \\( 360^\\circ \\), and on \\( [0^\\circ, 360^\\circ] \\) its maximum value is \\( 5 \\) occurring at \\( x = 0^\\circ \\), and its minimum value is \\( -1 \\) occurring at \\( x = 180^\\circ \\).\n\nFind \\( a \\), \\( b \\) and \\( c \\), and sketch the curve on \\( [0^\\circ, 360^\\circ] \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig graphs', 'find parameters', 'amplitude', 'midline', 'cos x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the period to determine \\( b \\).',
                    workingLatex: '\\tfrac{360^\\circ}{b} = 360^\\circ \\Rightarrow b = 1',
                    explanation: 'For \\( y = a\\cos(bx) + c \\), the period is \\( 360^\\circ / b \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write the midline as the average of the max and min.',
                    workingLatex: 'c = \\tfrac{5 + (-1)}{2} = 2',
                    explanation: 'The vertical shift \\( c \\) sits halfway between the maximum and minimum values.'
                },
                {
                    stepNumber: 3,
                    description: 'Compute the amplitude.',
                    workingLatex: 'a = \\tfrac{5 - (-1)}{2} = 3',
                    explanation: 'Amplitude is half the peak-to-trough distance; since \\( a > 0 \\) we take the positive value.'
                },
                {
                    stepNumber: 4,
                    description: 'Check the location of the maximum.',
                    workingLatex: '\\text{At } x = 0:\\; y = 3\\cos 0 + 2 = 3 + 2 = 5 \\checkmark',
                    explanation: 'With \\( a > 0 \\) the cosine attains its maximum at \\( x = 0 \\), matching the data.'
                },
                {
                    stepNumber: 5,
                    description: 'Check the location of the minimum.',
                    workingLatex: '\\text{At } x = 180^\\circ:\\; y = 3\\cos 180^\\circ + 2 = -3 + 2 = -1 \\checkmark',
                    explanation: 'Both conditions are satisfied, so the equation is determined.',
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
                            { points: sample((x) => 3 * Math.cos(x * D) + 2, 0, 360, 180), color: '#2563eb', label: 'y = 3\\cos x + 2', labelAt: [60, 5.3] }
                        ],
                        lines: [
                            { from: [0, 2], to: [360, 2], color: '#94a3b8', dashed: true, label: 'midline y = 2', labelAt: [10, 2.4] }
                        ],
                        points: [
                            { at: [0, 5], label: 'max (0°, 5)', labelAnchor: 'n' },
                            { at: [180, -1], label: 'min (180°, -1)', labelAnchor: 's' },
                            { at: [360, 5], label: '(360°, 5)', labelAnchor: 'n' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( a = 3,\\ b = 1,\\ c = 2 \\); curve: \\( y = 3\\cos x + 2 \\).'
        }
    },
    {
        id: 't3-037',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 37',
        difficulty: 'Standard',
        questionText: 'Sketch \\( y = \\cos(x + 120^\\circ) \\) for \\( -180^\\circ \\leq x \\leq 180^\\circ \\).\n\nState the coordinates of the \\( y \\)-intercept, all \\( x \\)-intercepts, the maximum point and the minimum point in this interval.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'horizontal translation', 'cos x', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Interpret the transformation.',
                    workingLatex: 'y = \\cos(x + 120^\\circ)',
                    explanation: 'Replacing \\( x \\) by \\( x + 120^\\circ \\) shifts the cosine graph \\( 120^\\circ \\) to the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'x = 0:\\; y = \\cos 120^\\circ = -\\tfrac{1}{2}',
                    explanation: 'Direct substitution; this is the standard exact value of \\( \\cos 120^\\circ \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the maximum: \\( \\cos(x + 120^\\circ) = 1 \\Rightarrow x + 120^\\circ = 360^\\circ n \\).',
                    workingLatex: 'x = -120^\\circ \\text{ (taking } n = 0\\text{)}',
                    explanation: 'The other solutions \\( x = 240^\\circ \\) and \\( x = -480^\\circ \\) lie outside \\( [-180^\\circ, 180^\\circ] \\), so only \\( -120^\\circ \\) is in range.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the minimum: \\( \\cos(x + 120^\\circ) = -1 \\Rightarrow x + 120^\\circ = 180^\\circ + 360^\\circ n \\).',
                    workingLatex: 'x = 60^\\circ',
                    explanation: 'Again only one value lies in range.'
                },
                {
                    stepNumber: 5,
                    description: 'Find the \\( x \\)-intercepts: \\( \\cos(x + 120^\\circ) = 0 \\Rightarrow x + 120^\\circ = 90^\\circ + 180^\\circ n \\).',
                    workingLatex: 'x = -30^\\circ,\\ 150^\\circ',
                    explanation: 'Taking \\( n = 0, 1 \\) gives the two zeros inside the interval. \\( n = -1 \\) gives \\( -210^\\circ \\), out of range.',
                    diagram: {
                        xMin: -180,
                        xMax: 180,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [-180, -120, -30, 0, 60, 150, 180],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.cos((x + 120) * D), -180, 180, 180), color: '#16a34a', label: 'y = \\cos(x + 120°)', labelAt: [-30, 1.25] }
                        ],
                        points: [
                            { at: [-120, 1], label: 'max (-120°, 1)', labelAnchor: 'n' },
                            { at: [-30, 0], label: '(-30°, 0)', labelAnchor: 'sw' },
                            { at: [0, -0.5], label: '(0°, -1/2)', labelAnchor: 'sw' },
                            { at: [60, -1], label: 'min (60°, -1)', labelAnchor: 's' },
                            { at: [150, 0], label: '(150°, 0)', labelAnchor: 'sw' }
                        ]
                    }
                }
            ],
            finalAnswer: 'y-intercept \\( (0^\\circ, -\\tfrac{1}{2}) \\); zeros \\( (-30^\\circ, 0) \\) and \\( (150^\\circ, 0) \\); maximum \\( (-120^\\circ, 1) \\); minimum \\( (60^\\circ, -1) \\).'
        }
    },
    {
        id: 't3-038',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 38',
        difficulty: 'Challenge',
        questionText: 'Use the graph of \\( y = \\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\) to explain graphically why \\( \\cos(360^\\circ - x) = \\cos x \\) for all real \\( x \\).\n\nVerify the identity by direct calculation at \\( x = 60^\\circ \\) and \\( x = 120^\\circ \\).\n\nOn the same axes, sketch \\( y = \\cos(360^\\circ - x) \\) to confirm that it lies exactly on top of \\( y = \\cos x \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig graphs', 'symmetry', 'cos x', 'identities'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the symmetry of the cosine curve.',
                    workingLatex: '\\cos(-\\theta) = \\cos \\theta',
                    explanation: 'The cosine graph is symmetric about the \\( y \\)-axis (even function); reflecting in the \\( y \\)-axis leaves it unchanged.'
                },
                {
                    stepNumber: 2,
                    description: 'Rewrite \\( \\cos(360^\\circ - x) \\) using the period.',
                    workingLatex: '\\cos(360^\\circ - x) = \\cos(-x + 360^\\circ) = \\cos(-x)',
                    explanation: 'Subtracting (or adding) a full period of \\( 360^\\circ \\) leaves cosine unchanged because the curve repeats every \\( 360^\\circ \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the even-function property.',
                    workingLatex: '\\cos(-x) = \\cos x',
                    explanation: 'Combining steps 1–2: \\( \\cos(360^\\circ - x) = \\cos(-x) = \\cos x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Verify at \\( x = 60^\\circ \\).',
                    workingLatex: '\\cos(360^\\circ - 60^\\circ) = \\cos 300^\\circ = \\tfrac{1}{2} = \\cos 60^\\circ',
                    explanation: 'Standard exact value; the equality holds.'
                },
                {
                    stepNumber: 5,
                    description: 'Verify at \\( x = 120^\\circ \\).',
                    workingLatex: '\\cos(360^\\circ - 120^\\circ) = \\cos 240^\\circ = -\\tfrac{1}{2} = \\cos 120^\\circ',
                    explanation: 'Again the values agree, confirming the identity in a second quadrant.'
                },
                {
                    stepNumber: 6,
                    description: 'Sketch both curves to confirm they coincide.',
                    workingLatex: '\\text{Graph of } y = \\cos(360^\\circ - x) \\equiv \\text{graph of } y = \\cos x',
                    explanation: 'The graph of \\( \\cos(360^\\circ - x) \\) is obtained by reflecting \\( \\cos x \\) in the line \\( x = 180^\\circ \\); for the symmetric cosine curve this leaves the picture unchanged.',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -1.5,
                        yMax: 1.5,
                        xTicks: [0, 60, 120, 180, 240, 300, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.cos(x * D), 0, 360, 180), color: '#94a3b8', label: 'y = \\cos x', labelAt: [40, 1.25], width: 5 },
                            { points: sample((x) => Math.cos((360 - x) * D), 0, 360, 180), color: '#dc2626', label: 'y = \\cos(360° - x)', labelAt: [200, 1.25] }
                        ],
                        points: [
                            { at: [60, 0.5], label: '(60°, 1/2)', labelAnchor: 'nw' },
                            { at: [300, 0.5], label: '(300°, 1/2)', labelAnchor: 'ne' },
                            { at: [120, -0.5], label: '(120°, -1/2)', labelAnchor: 'sw' },
                            { at: [240, -0.5], label: '(240°, -1/2)', labelAnchor: 'se' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( \\cos(360^\\circ - x) = \\cos(-x) = \\cos x \\) by periodicity and the even-function symmetry of cosine; verified at \\( x = 60^\\circ \\) and \\( x = 120^\\circ \\).'
        }
    },
    {
        id: 't3-039',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 39',
        difficulty: 'Standard',
        questionText: 'A curve has equation \\( y = a\\sin(bx) \\), where \\( a > 0 \\) and \\( b > 0 \\). Its range is \\( -3 \\leq y \\leq 3 \\), and the distance between two consecutive \\( x \\)-intercepts is \\( 60^\\circ \\).\n\nFind \\( a \\) and \\( b \\) and sketch the curve for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'find parameters', 'amplitude', 'period', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Read the amplitude from the range.',
                    workingLatex: '\\text{Range } [-3, 3] \\Rightarrow |a| = 3',
                    explanation: 'The maximum value of \\( a\\sin(bx) \\) is \\( |a| \\) and the minimum is \\( -|a| \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Take the positive value of \\( a \\).',
                    workingLatex: 'a = 3',
                    explanation: 'The problem specifies \\( a > 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Relate the distance between consecutive zeros to the period.',
                    workingLatex: '\\text{Distance between consecutive zeros} = \\tfrac{1}{2} \\times \\text{period}',
                    explanation: 'Zeros of a sine curve occur twice per period — every half period.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for the period and then for \\( b \\).',
                    workingLatex: '\\tfrac{T}{2} = 60^\\circ \\Rightarrow T = 120^\\circ;\\quad b = \\tfrac{360^\\circ}{120^\\circ} = 3',
                    explanation: 'Apply the period formula \\( T = 360^\\circ / b \\) and rearrange.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the equation and sketch.',
                    workingLatex: 'y = 3\\sin(3x)',
                    explanation: 'Three complete cycles fit inside \\( [0^\\circ, 360^\\circ] \\), peaking at \\( y = 3 \\) and troughing at \\( y = -3 \\).',
                    diagram: {
                        xMin: 0,
                        xMax: 360,
                        yMin: -3.5,
                        yMax: 3.5,
                        xTicks: [0, 60, 120, 180, 240, 300, 360],
                        yTicks: [-3, 0, 3],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => 3 * Math.sin(3 * x * D), 0, 360, 240), color: '#2563eb', label: 'y = 3\\sin(3x)', labelAt: [240, 3.3] }
                        ],
                        points: [
                            { at: [30, 3], label: 'max', labelAnchor: 'n' },
                            { at: [90, -3], label: 'min', labelAnchor: 's' },
                            { at: [60, 0], label: '60°', labelAnchor: 'sw' },
                            { at: [120, 0], label: '120°', labelAnchor: 'sw' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( a = 3 \\) and \\( b = 3 \\); equation \\( y = 3\\sin(3x) \\).'
        }
    },
    {
        id: 't3-040',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 40',
        difficulty: 'Challenge',
        questionText: 'The curve \\( y = 2\\cos(2x) + 1 \\) is defined for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).\n\n(a) State the range of the function.\n\n(b) Show, by considering the equation, that the curve crosses the \\( x \\)-axis exactly four times in this interval, and find the exact values of those \\( x \\)-coordinates.\n\n(c) Sketch the curve, indicating the \\( x \\)-intercepts and the \\( y \\)-intercept.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig graphs', 'cos x', 'roots', 'range', 'exact values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): use \\( -1 \\leq \\cos(2x) \\leq 1 \\).',
                    workingLatex: '-2 \\leq 2\\cos(2x) \\leq 2 \\Rightarrow -1 \\leq 2\\cos(2x) + 1 \\leq 3',
                    explanation: 'Multiply through by 2, then add 1, to find the range.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): set \\( y = 0 \\) and isolate \\( \\cos(2x) \\).',
                    workingLatex: '2\\cos(2x) + 1 = 0 \\Rightarrow \\cos(2x) = -\\tfrac{1}{2}',
                    explanation: 'A simple rearrangement.'
                },
                {
                    stepNumber: 3,
                    description: 'Extend the interval for \\( 2x \\).',
                    workingLatex: '0^\\circ \\leq x \\leq 360^\\circ \\Rightarrow 0^\\circ \\leq 2x \\leq 720^\\circ',
                    explanation: 'Whenever the angle has a coefficient, multiply the bounds by the same factor to get the search interval for the inner angle.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( \\cos \\theta = -\\tfrac{1}{2} \\) on \\( [0^\\circ, 720^\\circ] \\).',
                    workingLatex: '\\theta = 120^\\circ,\\ 240^\\circ,\\ 480^\\circ,\\ 600^\\circ',
                    explanation: 'The principal solutions are \\( 120^\\circ \\) and \\( 240^\\circ \\); add \\( 360^\\circ \\) to each to obtain the next pair within \\( [0^\\circ, 720^\\circ] \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Divide each by 2 to recover \\( x \\).',
                    workingLatex: 'x = 60^\\circ,\\ 120^\\circ,\\ 240^\\circ,\\ 300^\\circ',
                    explanation: 'All four values lie in \\( [0^\\circ, 360^\\circ] \\), so the curve has exactly four \\( x \\)-intercepts as required.'
                },
                {
                    stepNumber: 6,
                    description: 'Part (c): find the \\( y \\)-intercept and sketch.',
                    workingLatex: 'x = 0:\\; y = 2\\cos 0 + 1 = 3',
                    explanation: 'The curve starts at its maximum, dips through \\( 60^\\circ \\) and \\( 120^\\circ \\), troughs at \\( y = -1 \\) when \\( 2x = 180^\\circ \\) (i.e. \\( x = 90^\\circ \\)), and continues two more cycles.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0,
                        xMax: 360,
                        yMin: -2,
                        yMax: 4,
                        xTicks: [0, 60, 120, 180, 240, 300, 360],
                        yTicks: [-1, 0, 1, 3],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => 2 * Math.cos(2 * x * D) + 1, 0, 360, 240), color: '#2563eb', label: 'y = 2\\cos(2x) + 1', labelAt: [200, 3.5] }
                        ],
                        points: [
                            { at: [0, 3], label: '(0°, 3)', labelAnchor: 'ne' },
                            { at: [60, 0], label: '60°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [120, 0], label: '120°', labelAnchor: 'ne', color: '#dc2626' },
                            { at: [240, 0], label: '240°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [300, 0], label: '300°', labelAnchor: 'ne', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '(a) Range \\( -1 \\leq y \\leq 3 \\). (b) Four \\( x \\)-intercepts at \\( x = 60^\\circ, 120^\\circ, 240^\\circ, 300^\\circ \\).'
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
                        dropLinesForPoints: true,
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
        questionText: 'Sketch \\( y = 1 - \\sin x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). State the range, the \\( x \\)-intercept(s), and the coordinates of the maximum and minimum points.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'sin x', 'transformation', 'range', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the transformations.',
                    workingLatex: 'y = 1 - \\sin x \\;=\\; -\\sin x + 1',
                    explanation: 'Two transformations of \\( y = \\sin x \\): first a reflection in the \\( x \\)-axis (\\( -\\sin x \\)), then a vertical translation up by \\( 1 \\). The amplitude (\\( 1 \\)) and the period (\\( 360^\\circ \\)) are unchanged; only the midline shifts.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the range.',
                    workingLatex: '-1 \\leq \\sin x \\leq 1 \\implies 0 \\leq 1 - \\sin x \\leq 2',
                    explanation: 'Starting from \\( -1 \\leq \\sin x \\leq 1 \\), multiply by \\( -1 \\) (the inequality flips: \\( -1 \\leq -\\sin x \\leq 1 \\)) and add \\( 1 \\). The range is \\( [0, 2] \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the maximum and minimum points.',
                    workingLatex: '\\text{Max when } \\sin x = -1 \\Rightarrow x = 270^\\circ;\\quad \\text{Min when } \\sin x = 1 \\Rightarrow x = 90^\\circ',
                    explanation: 'A reflection swaps maxima and minima of \\( \\sin x \\): the original max at \\( x = 90^\\circ \\) becomes the new minimum, and the original min at \\( x = 270^\\circ \\) becomes the new maximum.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the \\( x \\)-intercept(s).',
                    workingLatex: '1 - \\sin x = 0 \\Rightarrow \\sin x = 1 \\Rightarrow x = 90^\\circ',
                    explanation: 'The curve touches the \\( x \\)-axis exactly once in \\( [0^\\circ, 360^\\circ] \\), at the single minimum point. There the curve is tangent to the axis rather than crossing it.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0,
                        xMax: 360,
                        yMin: -0.5,
                        yMax: 2.5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [0, 1, 2],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => 1 - Math.sin(x * D), 0, 360, 240), color: '#2563eb', label: 'y = 1 - \\sin x', labelAt: [200, 2.2] }
                        ],
                        points: [
                            { at: [0, 1], label: '(0°, 1)', labelAnchor: 'ne' },
                            { at: [90, 0], label: '\\text{min} (90°, 0)', labelAnchor: 's' },
                            { at: [270, 2], label: '\\text{max} (270°, 2)', labelAnchor: 'n' },
                            { at: [360, 1], label: '(360°, 1)', labelAnchor: 'nw' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Range \\( [0, 2] \\); single \\( x \\)-intercept (tangent) at \\( (90^\\circ, 0) \\); minimum at \\( (90^\\circ, 0) \\); maximum at \\( (270^\\circ, 2) \\).'
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
        questionText: 'Sketch \\( y = 3\\sin(2x) \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). State the amplitude, the period, the range, and the coordinates of all \\( x \\)-intercepts in this interval.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'sin x', 'amplitude', 'period', 'sketch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify amplitude and period.',
                    workingLatex: '\\text{Amplitude} = 3;\\quad \\text{Period} = \\frac{360^\\circ}{2} = 180^\\circ',
                    explanation: 'In \\( y = a\\sin(bx) \\), the coefficient \\( a = 3 \\) stretches the curve vertically — so the amplitude is \\( 3 \\). The coefficient \\( b = 2 \\) compresses horizontally by factor \\( \\tfrac{1}{2} \\), so the period halves from \\( 360^\\circ \\) to \\( 180^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'State the range.',
                    workingLatex: '-1 \\leq \\sin(2x) \\leq 1 \\implies -3 \\leq 3\\sin(2x) \\leq 3',
                    explanation: 'Multiplying every part of \\( -1 \\leq \\sin(2x) \\leq 1 \\) by \\( 3 \\) gives the range \\( [-3, 3] \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( x \\)-intercepts.',
                    workingLatex: '3\\sin(2x) = 0 \\Rightarrow \\sin(2x) = 0 \\Rightarrow 2x = 0^\\circ, 180^\\circ, 360^\\circ, 540^\\circ, 720^\\circ',
                    explanation: 'Sine is zero at every multiple of \\( 180^\\circ \\). Because \\( 2x \\) ranges over \\( [0^\\circ, 720^\\circ] \\) when \\( x \\in [0^\\circ, 360^\\circ] \\), there are five such values, giving \\( x = 0^\\circ, 90^\\circ, 180^\\circ, 270^\\circ, 360^\\circ \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Summarise and sketch.',
                    workingLatex: '\\text{Five } x\\text{-intercepts: } (0^\\circ, 0), (90^\\circ, 0), (180^\\circ, 0), (270^\\circ, 0), (360^\\circ, 0)',
                    explanation: 'The curve oscillates twice as fast as \\( \\sin x \\) and reaches \\( \\pm 3 \\) instead of \\( \\pm 1 \\). The maxima sit halfway between consecutive zeros (at \\( 45^\\circ \\) and \\( 225^\\circ \\)); the minima at \\( 135^\\circ \\) and \\( 315^\\circ \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0,
                        xMax: 360,
                        yMin: -4,
                        yMax: 4,
                        xTicks: [0, 45, 90, 135, 180, 225, 270, 315, 360],
                        yTicks: [-3, 0, 3],
                        xLabel: 'x (degrees)',
                        yLabel: 'y',
                        curves: [
                            { points: sample((x) => 3 * Math.sin(2 * x * D), 0, 360, 240), color: '#2563eb', label: 'y = 3\\sin(2x)', labelAt: [200, 3.5] }
                        ],
                        points: [
                            { at: [0, 0], label: '(0°, 0)', labelAnchor: 'sw' },
                            { at: [90, 0], label: '(90°, 0)', labelAnchor: 's' },
                            { at: [180, 0], label: '(180°, 0)', labelAnchor: 's' },
                            { at: [270, 0], label: '(270°, 0)', labelAnchor: 's' },
                            { at: [360, 0], label: '(360°, 0)', labelAnchor: 'se' },
                            { at: [45, 3], label: '\\text{max} (45°, 3)', labelAnchor: 'n' },
                            { at: [225, 3], label: '\\text{max} (225°, 3)', labelAnchor: 'n' },
                            { at: [135, -3], label: '\\text{min} (135°, -3)', labelAnchor: 's' },
                            { at: [315, -3], label: '\\text{min} (315°, -3)', labelAnchor: 's' }
                        ]
                    }
                }
            ],
            finalAnswer: 'Amplitude \\( 3 \\); period \\( 180^\\circ \\); range \\( [-3, 3] \\); \\( x \\)-intercepts at \\( x = 0^\\circ, 90^\\circ, 180^\\circ, 270^\\circ, 360^\\circ \\).'
        }
    },
    {
        id: 't3-065',
        topicRef: 't3',
        topicTitle: 'Trigonometric Graphs 65',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\cos(x + 90^\\circ) \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\) and explain, using graph transformations, why this curve is identical to \\( y = -\\sin x \\). Verify your result by checking the value at \\( x = 0^\\circ \\) and \\( x = 90^\\circ \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig graphs', 'transformations', 'cos x', 'sin x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the transformation.',
                    workingLatex: 'y = \\cos(x + 90^\\circ) \\text{ is } y = \\cos x \\text{ translated left by } 90^\\circ',
                    explanation: 'Replacing \\( x \\) with \\( x + 90^\\circ \\) shifts the whole curve in the \\( -x \\) direction by \\( 90^\\circ \\). The shape, amplitude and period of \\( \\cos x \\) are unchanged.'
                },
                {
                    stepNumber: 2,
                    description: 'Read off key values from the shifted cosine curve.',
                    workingLatex: 'x = 0^\\circ: \\cos(90^\\circ) = 0 \\quad x = 90^\\circ: \\cos(180^\\circ) = -1 \\quad x = 180^\\circ: \\cos(270^\\circ) = 0 \\quad x = 270^\\circ: \\cos(360^\\circ) = 1',
                    explanation: 'Substitute each \\( x \\) into \\( \\cos(x + 90^\\circ) \\) using the standard \\( \\cos \\) values at \\( 90^\\circ, 180^\\circ, 270^\\circ, 360^\\circ \\). This gives a curve passing through \\( (0,0) \\), down to \\( (90^\\circ, -1) \\), back through \\( (180^\\circ, 0) \\), up to \\( (270^\\circ, 1) \\) — exactly the shape of \\( -\\sin x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Compare with \\( y = -\\sin x \\).',
                    workingLatex: 'y = -\\sin x: \\; x = 0^\\circ \\to 0, \\; 90^\\circ \\to -1, \\; 180^\\circ \\to 0, \\; 270^\\circ \\to 1, \\; 360^\\circ \\to 0',
                    explanation: 'The curve \\( y = -\\sin x \\) is the reflection of \\( y = \\sin x \\) in the \\( x \\)-axis. Reading the four key values gives exactly the same sequence as the cosine-shifted curve above, so the two graphs coincide point-by-point.'
                },
                {
                    stepNumber: 4,
                    description: 'Conclude and verify at two points.',
                    workingLatex: '\\cos(x + 90^\\circ) \\equiv -\\sin x; \\quad \\text{at } x = 0^\\circ: \\cos 90^\\circ = 0 = -\\sin 0^\\circ; \\quad \\text{at } x = 90^\\circ: \\cos 180^\\circ = -1 = -\\sin 90^\\circ',
                    explanation: 'Both checks confirm equality. A left-shift of \\( \\cos x \\) by \\( 90^\\circ \\) produces exactly \\( -\\sin x \\) — the cosine curve "becomes" a reflected sine curve.',
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
