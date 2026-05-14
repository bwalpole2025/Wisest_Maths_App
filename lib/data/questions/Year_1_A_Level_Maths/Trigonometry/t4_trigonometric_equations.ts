import { Question } from "@/lib/types";

function sample(f: (x: number) => number, xMin: number, xMax: number, n = 100): Array<[number, number]> {
    const pts: Array<[number, number]> = [];
    for (let i = 0; i < n; i++) {
        const x = xMin + (i / (n - 1)) * (xMax - xMin);
        pts.push([x, f(x)]);
    }
    return pts;
}

// Sample a tan curve while avoiding the asymptotes by splitting around them.
function sampleTan(xMin: number, xMax: number, asymptotes: number[], yClip = 5, nPerSegment = 60): Array<Array<[number, number]>> {
    const bounds = [xMin, ...asymptotes.filter(a => a > xMin && a < xMax), xMax];
    const segments: Array<Array<[number, number]>> = [];
    for (let s = 0; s < bounds.length - 1; s++) {
        const a = bounds[s] + 0.5;
        const b = bounds[s + 1] - 0.5;
        if (b <= a) continue;
        const seg: Array<[number, number]> = [];
        for (let i = 0; i < nPerSegment; i++) {
            const x = a + (i / (nPerSegment - 1)) * (b - a);
            const y = Math.tan((x * Math.PI) / 180);
            if (Math.abs(y) <= yClip) seg.push([x, y]);
        }
        if (seg.length > 0) segments.push(seg);
    }
    return segments;
}

// Sample any function while skipping asymptotes (e.g. for f(x) involving tan x).
function sampleSplit(f: (xDeg: number) => number, xMin: number, xMax: number, asymptotes: number[], yClip = 5, nPerSegment = 60): Array<Array<[number, number]>> {
    const inside = asymptotes.filter(a => a > xMin && a < xMax);
    const bounds = [xMin, ...inside, xMax];
    const segments: Array<Array<[number, number]>> = [];
    for (let s = 0; s < bounds.length - 1; s++) {
        const skipStart = s > 0;
        const skipEnd = s < bounds.length - 2;
        const a = bounds[s] + (skipStart ? 0.6 : 0);
        const b = bounds[s + 1] - (skipEnd ? 0.6 : 0);
        if (b <= a) continue;
        const seg: Array<[number, number]> = [];
        for (let i = 0; i < nPerSegment; i++) {
            const x = a + (i / (nPerSegment - 1)) * (b - a);
            const y = f(x);
            if (Number.isFinite(y) && Math.abs(y) <= yClip) seg.push([x, y]);
        }
        if (seg.length > 0) segments.push(seg);
    }
    return segments;
}

const sinDeg = (xDeg: number) => Math.sin((xDeg * Math.PI) / 180);
const cosDeg = (xDeg: number) => Math.cos((xDeg * Math.PI) / 180);

// Sample points along a circular arc of radius r between two angles (in degrees).
function arcDeg(r: number, fromDeg: number, toDeg: number, n = 40): Array<[number, number]> {
    const pts: Array<[number, number]> = [];
    for (let i = 0; i < n; i++) {
        const t = fromDeg + (i / (n - 1)) * (toDeg - fromDeg);
        pts.push([r * cosDeg(t), r * sinDeg(t)]);
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

    // ── TYPE A: Basic equations using graph sketch (0° to 360°) ─────────────
    {
        id: 't4-001',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 01',
        difficulty: 'Foundation',
        questionText: 'By sketching a graph, solve \\( \\sin x = 0.6 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'graph sketch', 'sin', 'basic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take inverse sine to find the principal value.',
                    workingLatex: 'x_1 = \\sin^{-1}(0.6)',
                    explanation: 'The calculator returns the unique angle in \\( [-90^\\circ, 90^\\circ] \\) whose sine is \\( 0.6 \\). Make sure your calculator is in degree mode.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate to 1 d.p.',
                    workingLatex: 'x_1 = 36.9^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 36.8699^\\circ \\); rounding the second decimal (\\(8\\)) up gives \\( 36.9^\\circ \\). This is the first quadrant solution.'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch \\( y = \\sin x \\) and the line \\( y = 0.6 \\) over the interval.',
                    workingLatex: '\\text{Two intersections in } [0^\\circ, 360^\\circ]',
                    explanation: 'The sine curve rises to \\(1\\) at \\(90^\\circ\\) and falls back through \\(180^\\circ\\); the line \\( y = 0.6 \\) crosses on the way up and on the way down, so we expect exactly two solutions.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -1.2, yMax: 1.2,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), 0, 360, 100), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [50, 1.1] }],
                        lines: [{ from: [0, 0.6], to: [360, 0.6], color: '#dc2626', dashed: true, label: 'y = 0.6', labelAt: [300, 0.75] }],
                        points: [
                            { at: [36.9, 0.6], label: '36.9°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [143.1, 0.6], label: '143.1°', labelAnchor: 'ne', color: '#dc2626' }
                        ]
                    }
                },
                {
                    stepNumber: 4,
                    description: 'Use the symmetry of the sine graph about \\( x = 90^\\circ \\) for the second solution.',
                    workingLatex: 'x_2 = 180^\\circ - 36.9^\\circ = 143.1^\\circ',
                    explanation: 'Sine satisfies \\( \\sin(180^\\circ - \\theta) = \\sin \\theta \\), so if \\( 36.9^\\circ \\) is a solution then so is \\( 180^\\circ - 36.9^\\circ \\). Both lie in \\( [0^\\circ, 360^\\circ] \\), so we are done.'
                }
            ],
            finalAnswer: '\\(x = 36.9^\\circ\\) and \\(x = 143.1^\\circ\\)'
        }
    },
    {
        id: 't4-002',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 02',
        difficulty: 'Foundation',
        questionText: 'By sketching a graph, solve \\( \\cos x = 0.45 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'graph sketch', 'cos', 'basic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the principal value with inverse cosine.',
                    workingLatex: 'x_1 = \\cos^{-1}(0.45)',
                    explanation: 'The calculator returns the unique angle in \\( [0^\\circ, 180^\\circ] \\) whose cosine is \\( 0.45 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate to 1 d.p.',
                    workingLatex: 'x_1 = 63.3^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 63.2563^\\circ \\); rounding the second decimal (\\(5\\)) up gives \\( 63.3^\\circ \\). This is the first quadrant solution.'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch \\( y = \\cos x \\) and the line \\( y = 0.45 \\).',
                    workingLatex: '\\text{Two intersections in } [0^\\circ, 360^\\circ]',
                    explanation: 'The cosine curve starts at \\(1\\), drops to \\(-1\\) at \\(180^\\circ\\), and returns to \\(1\\) at \\(360^\\circ\\). The line \\( y = 0.45 \\) cuts the curve once on the way down and once on the way back up.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -1.2, yMax: 1.2,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 360, 100), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [40, 1.1] }],
                        lines: [{ from: [0, 0.45], to: [360, 0.45], color: '#dc2626', dashed: true, label: 'y = 0.45', labelAt: [310, 0.6] }],
                        points: [
                            { at: [63.3, 0.45], label: '63.3°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [296.7, 0.45], label: '296.7°', labelAnchor: 'ne', color: '#dc2626' }
                        ]
                    }
                },
                {
                    stepNumber: 4,
                    description: 'Use the symmetry of cosine about \\( x = 180^\\circ \\) for the second solution.',
                    workingLatex: 'x_2 = 360^\\circ - 63.3^\\circ = 296.7^\\circ',
                    explanation: 'Cosine satisfies \\( \\cos(360^\\circ - \\theta) = \\cos \\theta \\), giving a second solution in the 4th quadrant. Both solutions lie in the required interval.'
                }
            ],
            finalAnswer: '\\(x = 63.3^\\circ\\) and \\(x = 296.7^\\circ\\)'
        }
    },
    {
        id: 't4-003',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 03',
        difficulty: 'Foundation',
        questionText: 'By sketching a graph, solve \\( \\tan x = 3 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'graph sketch', 'tan', 'basic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take inverse tangent to find the principal value.',
                    workingLatex: 'x_1 = \\tan^{-1}(3)',
                    explanation: 'The calculator returns the unique angle in \\( (-90^\\circ, 90^\\circ) \\) whose tangent is \\( 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate to 1 d.p.',
                    workingLatex: 'x_1 = 71.6^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 71.5651^\\circ \\); rounding the second decimal (\\(5\\)) up gives \\( 71.6^\\circ \\). This is the first quadrant solution.'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch \\( y = \\tan x \\) over \\( [0^\\circ, 360^\\circ] \\), noting the asymptotes at \\( 90^\\circ \\) and \\( 270^\\circ \\).',
                    workingLatex: '\\text{Two intersections in } [0^\\circ, 360^\\circ]',
                    explanation: 'Tangent has period \\(180^\\circ\\), so the line \\( y = 3 \\) cuts the curve once between each pair of asymptotes — twice in our interval.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -5, yMax: 5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = tan x' : undefined, labelAt: i === 0 ? [30, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [0, 3], to: [360, 3], color: '#dc2626', dashed: true, label: 'y = 3', labelAt: [320, 3.5] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [71.6, 3], label: '71.6°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [251.6, 3], label: '251.6°', labelAnchor: 'nw', color: '#dc2626' }
                        ]
                    }
                },
                {
                    stepNumber: 4,
                    description: 'Add the period of tangent to find the second solution.',
                    workingLatex: 'x_2 = 71.6^\\circ + 180^\\circ = 251.6^\\circ',
                    explanation: 'Tangent has period \\( 180^\\circ \\), so \\( \\tan(\\theta + 180^\\circ) = \\tan \\theta \\). The second solution is in the 3rd quadrant.'
                }
            ],
            finalAnswer: '\\(x = 71.6^\\circ\\) and \\(x = 251.6^\\circ\\)'
        }
    },
    {
        id: 't4-004',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 04',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin x = -0.5 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'negative value', 'sin', 'exact answers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the reference angle using the positive value.',
                    workingLatex: '\\sin^{-1}(0.5) = 30^\\circ',
                    explanation: 'For the CAST diagram we use the acute angle whose sine has magnitude \\( 0.5 \\). From standard exact values, \\( \\sin 30^\\circ = \\tfrac{1}{2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the quadrants where \\( \\sin x < 0 \\).',
                    workingLatex: '\\sin x < 0 \\text{ in the 3rd and 4th quadrants}',
                    explanation: 'Sine equals the \\( y \\)-coordinate on the unit circle, which is negative below the \\(x\\)-axis (quadrants 3 and 4).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quadrant formulas \\( 180^\\circ + \\theta \\) and \\( 360^\\circ - \\theta \\).',
                    workingLatex: 'x = 180^\\circ + 30^\\circ = 210^\\circ \\quad \\text{and} \\quad x = 360^\\circ - 30^\\circ = 330^\\circ',
                    explanation: 'In the 3rd quadrant the solution is \\( 180^\\circ + \\) (reference); in the 4th quadrant it is \\( 360^\\circ - \\) (reference).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -1.2, yMax: 1.2,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), 0, 360, 100), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [50, 1.1] }],
                        lines: [{ from: [0, -0.5], to: [360, -0.5], color: '#dc2626', dashed: true, label: 'y = -0.5', labelAt: [290, -0.7] }],
                        points: [
                            { at: [210, -0.5], label: '210°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [330, -0.5], label: '330°', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 210^\\circ\\) and \\(x = 330^\\circ\\)'
        }
    },
    {
        id: 't4-005',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 05',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\cos x = -\\dfrac{\\sqrt{3}}{2} \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'negative cos', 'exact values', 'surd'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the reference angle from the standard exact value.',
                    workingLatex: '\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}',
                    explanation: 'This is one of the special angles from the 30-60-90 triangle. The reference angle is \\( 30^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the quadrants where \\( \\cos x < 0 \\).',
                    workingLatex: '\\cos x < 0 \\text{ in the 2nd and 3rd quadrants}',
                    explanation: 'Cosine is the \\( x \\)-coordinate on the unit circle, which is negative to the left of the \\(y\\)-axis (quadrants 2 and 3).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply quadrant formulas \\( 180^\\circ - \\theta \\) and \\( 180^\\circ + \\theta \\).',
                    workingLatex: 'x = 180^\\circ - 30^\\circ = 150^\\circ \\quad \\text{and} \\quad x = 180^\\circ + 30^\\circ = 210^\\circ',
                    explanation: 'In the 2nd quadrant: \\( 180^\\circ - \\) (ref). In the 3rd quadrant: \\( 180^\\circ + \\) (ref).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -1.2, yMax: 1.2,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 360, 100), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [40, 1.1] }],
                        lines: [{ from: [0, -0.866], to: [360, -0.866], color: '#dc2626', dashed: true, label: 'y = -√3/2', labelAt: [270, -1.05] }],
                        points: [
                            { at: [150, -0.866], label: '150°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [210, -0.866], label: '210°', labelAnchor: 'ne', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 150^\\circ\\) and \\(x = 210^\\circ\\)'
        }
    },
    {
        id: 't4-006',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 06',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\tan x = -1 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'negative tan', 'exact values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the reference angle.',
                    workingLatex: '\\tan 45^\\circ = 1 \\Rightarrow \\text{reference angle} = 45^\\circ',
                    explanation: 'From the 45-45-90 triangle. We use the positive value for the reference angle.'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the quadrants where \\( \\tan x < 0 \\).',
                    workingLatex: '\\tan x < 0 \\text{ in the 2nd and 4th quadrants}',
                    explanation: 'Tangent is \\( \\sin x / \\cos x \\); it is negative where sine and cosine have opposite signs — the 2nd and 4th quadrants.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply quadrant formulas.',
                    workingLatex: 'x = 180^\\circ - 45^\\circ = 135^\\circ \\quad \\text{and} \\quad x = 360^\\circ - 45^\\circ = 315^\\circ',
                    explanation: 'In the 2nd quadrant: \\( 180^\\circ - 45^\\circ \\). In the 4th quadrant: \\( 360^\\circ - 45^\\circ \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -5, yMax: 5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = tan x' : undefined, labelAt: i === 0 ? [30, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [0, -1], to: [360, -1], color: '#dc2626', dashed: true, label: 'y = -1', labelAt: [320, -1.6] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [135, -1], label: '135°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [315, -1], label: '315°', labelAnchor: 'sw', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 135^\\circ\\) and \\(x = 315^\\circ\\)'
        }
    },
    // ── TYPE B: CAST diagram – 0° to 360° ───────────────────────────────────
    {
        id: 't4-007',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 07',
        difficulty: 'Foundation',
        questionText: 'Use a CAST diagram to find all solutions to \\( \\cos x = 0.72 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'CAST diagram', 'cos', 'positive'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the reference angle from the positive value.',
                    workingLatex: '\\cos^{-1}(0.72) = 43.9^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 43.9455^\\circ \\); rounding gives \\( 43.9^\\circ \\). This is the acute angle that goes into the CAST diagram.'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the quadrants where \\( \\cos x > 0 \\).',
                    workingLatex: '\\cos x > 0 \\text{ in the 1st (A) and 4th (C) quadrants}',
                    explanation: 'In the CAST diagram, A means All positive and C means Cos positive. The highlighted arcs below mark the A and C quadrants — the solutions lie along the blue radii.',
                    diagram: {
                        xMin: -1.85, xMax: 1.85, yMin: -1.25, yMax: 1.25,
                        hideAxes: true,
                        curves: [
                            { points: arcDeg(1, 0, 360, 80), color: '#111', width: 1.4 },
                            { points: arcDeg(1, 0, 90, 30), color: '#dc2626', width: 4 },
                            { points: arcDeg(1, 270, 360, 30), color: '#dc2626', width: 4 },
                            { points: arcDeg(0.35, 0, 43.9, 20), color: '#dc2626', width: 1.6 },
                            { points: arcDeg(0.35, 316.1, 360, 20), color: '#dc2626', width: 1.6 },
                        ],
                        lines: [
                            { from: [-1.55, 0], to: [1.55, 0], color: '#666', arrow: true },
                            { from: [0, -1.18], to: [0, 1.18], color: '#666', arrow: true },
                            { from: [0, 0], to: [cosDeg(43.9), sinDeg(43.9)], color: '#1d4ed8', arrow: true },
                            { from: [0, 0], to: [cosDeg(316.1), sinDeg(316.1)], color: '#1d4ed8', arrow: true },
                        ],
                        points: [
                            { at: [0.85, 0.85], label: '\\mathbf{A}', labelAnchor: 'center', r: 0 },
                            { at: [-0.85, 0.85], label: '\\mathbf{S}', labelAnchor: 'center', r: 0 },
                            { at: [-0.85, -0.85], label: '\\mathbf{T}', labelAnchor: 'center', r: 0 },
                            { at: [0.85, -0.85], label: '\\mathbf{C}', labelAnchor: 'center', r: 0 },
                            { at: [cosDeg(43.9) * 1.20, sinDeg(43.9) * 1.18], label: '43.9^\\circ', labelAnchor: 'n', r: 0 },
                            { at: [cosDeg(316.1) * 1.20, sinDeg(316.1) * 1.18], label: '316.1^\\circ', labelAnchor: 's', r: 0 },
                            { at: [0.48, 0.19], label: '43.9^\\circ', labelAnchor: 'center', r: 0 },
                            { at: [0.48, -0.19], label: '43.9^\\circ', labelAnchor: 'center', r: 0 },
                        ],
                    },
                },
                {
                    stepNumber: 3,
                    description: 'Place the reference angle in each valid quadrant.',
                    workingLatex: 'x = 43.9^\\circ \\quad \\text{and} \\quad x = 360^\\circ - 43.9^\\circ = 316.1^\\circ',
                    explanation: '1st quadrant: angle \\(=\\) reference. 4th quadrant: angle \\(=\\) \\( 360^\\circ - \\) (reference).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -1.2, yMax: 1.2,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 360, 100), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [40, 1.1] }],
                        lines: [{ from: [0, 0.72], to: [360, 0.72], color: '#dc2626', dashed: true, label: 'y = 0.72', labelAt: [290, 0.88] }],
                        points: [
                            { at: [43.9, 0.72], label: '43.9°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [316.1, 0.72], label: '316.1°', labelAnchor: 'ne', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 43.9^\\circ\\) and \\(x = 316.1^\\circ\\)'
        }
    },
    {
        id: 't4-008',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 08',
        difficulty: 'Foundation',
        questionText: 'Use a CAST diagram to find all solutions to \\( \\sin x = -0.35 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'CAST diagram', 'sin', 'negative'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take the magnitude and find the reference angle.',
                    workingLatex: '\\sin^{-1}(0.35) = 20.5^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 20.4872^\\circ \\); rounding gives \\( 20.5^\\circ \\). The CAST method always uses the positive reference angle.'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the quadrants where \\( \\sin x < 0 \\).',
                    workingLatex: '\\sin x < 0 \\text{ in the 3rd (T) and 4th (C) quadrants}',
                    explanation: 'In CAST, T means Tan positive and C means Cos positive, but in both of those quadrants sine is negative. The highlighted arcs below mark the T and C quadrants — the solutions lie along the blue radii.',
                    diagram: {
                        xMin: -1.85, xMax: 1.85, yMin: -1.25, yMax: 1.25,
                        hideAxes: true,
                        curves: [
                            { points: arcDeg(1, 0, 360, 80), color: '#111', width: 1.4 },
                            { points: arcDeg(1, 180, 270, 30), color: '#dc2626', width: 4 },
                            { points: arcDeg(1, 270, 360, 30), color: '#dc2626', width: 4 },
                            { points: arcDeg(0.5, 180, 200.5, 20), color: '#dc2626', width: 1.6 },
                            { points: arcDeg(0.5, 339.5, 360, 20), color: '#dc2626', width: 1.6 },
                        ],
                        lines: [
                            { from: [-1.55, 0], to: [1.55, 0], color: '#666', arrow: true },
                            { from: [0, -1.18], to: [0, 1.18], color: '#666', arrow: true },
                            { from: [0, 0], to: [cosDeg(200.5), sinDeg(200.5)], color: '#1d4ed8', arrow: true },
                            { from: [0, 0], to: [cosDeg(339.5), sinDeg(339.5)], color: '#1d4ed8', arrow: true },
                        ],
                        points: [
                            { at: [0.85, 0.85], label: '\\mathbf{A}', labelAnchor: 'center', r: 0 },
                            { at: [-0.85, 0.85], label: '\\mathbf{S}', labelAnchor: 'center', r: 0 },
                            { at: [-0.85, -0.85], label: '\\mathbf{T}', labelAnchor: 'center', r: 0 },
                            { at: [0.85, -0.85], label: '\\mathbf{C}', labelAnchor: 'center', r: 0 },
                            { at: [cosDeg(200.5) * 1.20, sinDeg(200.5) * 1.18], label: '200.5^\\circ', labelAnchor: 's', r: 0 },
                            { at: [cosDeg(339.5) * 1.20, sinDeg(339.5) * 1.18], label: '339.5^\\circ', labelAnchor: 's', r: 0 },
                            { at: [-0.62, -0.16], label: '20.5^\\circ', labelAnchor: 'w', r: 0 },
                            { at: [0.62, -0.16], label: '20.5^\\circ', labelAnchor: 'e', r: 0 },
                        ],
                    },
                },
                {
                    stepNumber: 3,
                    description: 'Apply quadrant formulas.',
                    workingLatex: 'x = 180^\\circ + 20.5^\\circ = 200.5^\\circ \\quad \\text{and} \\quad x = 360^\\circ - 20.5^\\circ = 339.5^\\circ',
                    explanation: '3rd quadrant: \\( 180^\\circ + \\) (ref). 4th quadrant: \\( 360^\\circ - \\) (ref).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -1.2, yMax: 1.2,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), 0, 360, 100), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [50, 1.1] }],
                        lines: [{ from: [0, -0.35], to: [360, -0.35], color: '#dc2626', dashed: true, label: 'y = -0.35', labelAt: [285, -0.55] }],
                        points: [
                            { at: [200.5, -0.35], label: '200.5°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [339.5, -0.35], label: '339.5°', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 200.5^\\circ\\) and \\(x = 339.5^\\circ\\)'
        }
    },
    {
        id: 't4-009',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 09',
        difficulty: 'Foundation',
        questionText: 'Use a CAST diagram to find all solutions to \\( \\tan x = -4.2 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'CAST diagram', 'tan', 'negative'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take the magnitude and find the reference angle.',
                    workingLatex: '\\tan^{-1}(4.2) = 76.6^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 76.6075^\\circ \\); rounding gives \\( 76.6^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the quadrants where \\( \\tan x < 0 \\).',
                    workingLatex: '\\tan x < 0 \\text{ in the 2nd (S) and 4th (C) quadrants}',
                    explanation: 'Tan is negative where sin and cos have opposite signs. The highlighted arcs below mark the S and C quadrants — the solutions lie along the blue radii.',
                    diagram: {
                        xMin: -1.85, xMax: 1.85, yMin: -1.25, yMax: 1.25,
                        hideAxes: true,
                        curves: [
                            { points: arcDeg(1, 0, 360, 80), color: '#111', width: 1.4 },
                            { points: arcDeg(1, 90, 180, 30), color: '#dc2626', width: 4 },
                            { points: arcDeg(1, 270, 360, 30), color: '#dc2626', width: 4 },
                            { points: arcDeg(0.32, 103.4, 180, 20), color: '#dc2626', width: 1.6 },
                            { points: arcDeg(0.32, 283.4, 360, 20), color: '#dc2626', width: 1.6 },
                        ],
                        lines: [
                            { from: [-1.55, 0], to: [1.55, 0], color: '#666', arrow: true },
                            { from: [0, -1.18], to: [0, 1.18], color: '#666', arrow: true },
                            { from: [0, 0], to: [cosDeg(103.4), sinDeg(103.4)], color: '#1d4ed8', arrow: true },
                            { from: [0, 0], to: [cosDeg(283.4), sinDeg(283.4)], color: '#1d4ed8', arrow: true },
                        ],
                        points: [
                            { at: [0.85, 0.85], label: '\\mathbf{A}', labelAnchor: 'center', r: 0 },
                            { at: [-0.85, 0.85], label: '\\mathbf{S}', labelAnchor: 'center', r: 0 },
                            { at: [-0.85, -0.85], label: '\\mathbf{T}', labelAnchor: 'center', r: 0 },
                            { at: [0.85, -0.85], label: '\\mathbf{C}', labelAnchor: 'center', r: 0 },
                            { at: [cosDeg(103.4) * 1.20, sinDeg(103.4) * 1.18], label: '103.4^\\circ', labelAnchor: 'n', r: 0 },
                            { at: [cosDeg(283.4) * 1.20, sinDeg(283.4) * 1.18], label: '283.4^\\circ', labelAnchor: 's', r: 0 },
                            { at: [-0.43, 0.20], label: '76.6^\\circ', labelAnchor: 'center', r: 0 },
                            { at: [0.43, -0.20], label: '76.6^\\circ', labelAnchor: 'center', r: 0 },
                        ],
                    },
                },
                {
                    stepNumber: 3,
                    description: 'Apply quadrant formulas.',
                    workingLatex: 'x = 180^\\circ - 76.6^\\circ = 103.4^\\circ \\quad \\text{and} \\quad x = 360^\\circ - 76.6^\\circ = 283.4^\\circ',
                    explanation: '2nd quadrant: \\( 180^\\circ - \\) (ref). 4th quadrant: \\( 360^\\circ - \\) (ref).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -6, yMax: 6,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-5, -2.5, 0, 2.5, 5],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 6).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = tan x' : undefined, labelAt: i === 0 ? [30, 5] as [number, number] : undefined })),
                        lines: [
                            { from: [0, -4.2], to: [360, -4.2], color: '#dc2626', dashed: true, label: 'y = -4.2', labelAt: [310, -5.2] },
                            { from: [90, -6], to: [90, 6], color: '#9ca3af', dashed: true },
                            { from: [270, -6], to: [270, 6], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [103.4, -4.2], label: '103.4°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [283.4, -4.2], label: '283.4°', labelAnchor: 'sw', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 103.4^\\circ\\) and \\(x = 283.4^\\circ\\)'
        }
    },
    {
        id: 't4-010',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 10',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 3\\sin x - 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'rearrange first', 'sin', 'CAST diagram'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Isolate \\( \\sin x \\) by adding 1 and dividing by 3.',
                    workingLatex: '3\\sin x = 1',
                    explanation: 'Move the constant across.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide by 3.',
                    workingLatex: '\\sin x = \\tfrac{1}{3}',
                    explanation: 'Keeping the fraction exact for the moment avoids accumulating rounding error.'
                },
                {
                    stepNumber: 3,
                    description: 'Take the inverse sine to find the reference angle.',
                    workingLatex: '\\sin^{-1}\\!\\left(\\tfrac{1}{3}\\right) = 19.5^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 19.4712^\\circ \\); rounding gives \\( 19.5^\\circ \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sine is positive in the 1st (A) and 2nd (S) quadrants.',
                    workingLatex: 'x = 19.5^\\circ \\quad \\text{and} \\quad x = 180^\\circ - 19.5^\\circ = 160.5^\\circ',
                    explanation: '1st quadrant: angle equals the reference. 2nd quadrant: \\( 180^\\circ - \\) (ref).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -1.2, yMax: 1.2,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), 0, 360, 100), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [50, 1.1] }],
                        lines: [{ from: [0, 1 / 3], to: [360, 1 / 3], color: '#dc2626', dashed: true, label: 'y = 1/3', labelAt: [300, 0.5] }],
                        points: [
                            { at: [19.5, 1 / 3], label: '19.5°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [160.5, 1 / 3], label: '160.5°', labelAnchor: 'ne', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 19.5^\\circ\\) and \\(x = 160.5^\\circ\\)'
        }
    },
    {
        id: 't4-011',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 11',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 5\\cos x + 2 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'rearrange first', 'cos', 'negative', 'CAST diagram'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 2 from both sides.',
                    workingLatex: '5\\cos x = -2',
                    explanation: 'Move the constant across.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide by 5.',
                    workingLatex: '\\cos x = -\\tfrac{2}{5} = -0.4',
                    explanation: 'Isolating \\( \\cos x \\) puts the equation in standard form.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the reference angle using the magnitude.',
                    workingLatex: '\\cos^{-1}(0.4) = 66.4^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 66.4218^\\circ \\); rounding gives \\( 66.4^\\circ \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Cosine is negative in the 2nd (S) and 3rd (T) quadrants.',
                    workingLatex: 'x = 180^\\circ - 66.4^\\circ = 113.6^\\circ \\quad \\text{and} \\quad x = 180^\\circ + 66.4^\\circ = 246.4^\\circ',
                    explanation: '2nd quadrant: \\( 180^\\circ - \\) (ref). 3rd quadrant: \\( 180^\\circ + \\) (ref).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -1.2, yMax: 1.2,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 360, 100), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [40, 1.1] }],
                        lines: [{ from: [0, -0.4], to: [360, -0.4], color: '#dc2626', dashed: true, label: 'y = -0.4', labelAt: [290, -0.6] }],
                        points: [
                            { at: [113.6, -0.4], label: '113.6°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [246.4, -0.4], label: '246.4°', labelAnchor: 'ne', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 113.6^\\circ\\) and \\(x = 246.4^\\circ\\)'
        }
    },
    // ── TYPE C: Extended intervals using graph / CAST ────────────────────────
    {
        id: 't4-012',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 12',
        difficulty: 'Foundation',
        questionText: 'Find all solutions to \\( \\sin x = 0.55 \\) for \\( 0^\\circ \\leq x \\leq 720^\\circ \\). Give your answers to 1 decimal place.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'extended interval', 'sin', '720 degrees'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take inverse sine to find the reference angle.',
                    workingLatex: '\\sin^{-1}(0.55) = 33.4^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 33.3670^\\circ \\); rounding gives \\( 33.4^\\circ \\). This is the first quadrant solution.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the 2nd quadrant solution in \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: '180^\\circ - 33.4^\\circ = 146.6^\\circ',
                    explanation: 'Sine is also positive in the 2nd quadrant.'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( 360^\\circ \\) to each to get solutions in the second period.',
                    workingLatex: '33.4^\\circ + 360^\\circ = 393.4^\\circ \\quad \\text{and} \\quad 146.6^\\circ + 360^\\circ = 506.6^\\circ',
                    explanation: 'Sine has period \\( 360^\\circ \\), so adding \\( 360^\\circ \\) to a solution gives another solution.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 720, yMin: -1.2, yMax: 1.2,
                        xTicks: [0, 180, 360, 540, 720],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), 0, 720, 140), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [60, 1.1] }],
                        lines: [{ from: [0, 0.55], to: [720, 0.55], color: '#dc2626', dashed: true, label: 'y = 0.55', labelAt: [600, 0.75] }],
                        points: [
                            { at: [33.4, 0.55], label: '33.4°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [146.6, 0.55], label: '146.6°', labelAnchor: 'ne', color: '#dc2626' },
                            { at: [393.4, 0.55], label: '393.4°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [506.6, 0.55], label: '506.6°', labelAnchor: 'ne', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 33.4^\\circ,\\ 146.6^\\circ,\\ 393.4^\\circ,\\ 506.6^\\circ\\)'
        }
    },
    {
        id: 't4-013',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 13',
        difficulty: 'Foundation',
        questionText: 'Find all solutions to \\( \\tan x = 5.1 \\) for \\( 0^\\circ \\leq x \\leq 720^\\circ \\). Give your answers to 1 decimal place.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'extended interval', 'tan', '720 degrees'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the principal value.',
                    workingLatex: '\\tan^{-1}(5.1) = 78.9^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 78.8908^\\circ \\); rounding gives \\( 78.9^\\circ \\). This is the only solution in \\( (0^\\circ, 90^\\circ) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Tangent has period \\( 180^\\circ \\); add multiples of \\( 180^\\circ \\).',
                    workingLatex: '78.9^\\circ + 180^\\circ = 258.9^\\circ',
                    explanation: 'Each \\( +180^\\circ \\) yields the next solution because \\( \\tan(\\theta + 180^\\circ) = \\tan \\theta \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Continue adding \\( 180^\\circ \\) until you leave the interval.',
                    workingLatex: '258.9^\\circ + 180^\\circ = 438.9^\\circ \\quad \\text{and} \\quad 438.9^\\circ + 180^\\circ = 618.9^\\circ',
                    explanation: '\\( 618.9^\\circ + 180^\\circ = 798.9^\\circ > 720^\\circ \\), so we stop here. Four solutions in total.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 720, yMin: -6, yMax: 8,
                        xTicks: [0, 180, 360, 540, 720],
                        yTicks: [-4, 0, 4, 8],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 720, [90, 270, 450, 630], 8).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = tan x' : undefined, labelAt: i === 0 ? [50, 7] as [number, number] : undefined })),
                        lines: [
                            { from: [0, 5.1], to: [720, 5.1], color: '#dc2626', dashed: true, label: 'y = 5.1', labelAt: [600, 5.9] },
                            { from: [90, -6], to: [90, 8], color: '#9ca3af', dashed: true },
                            { from: [270, -6], to: [270, 8], color: '#9ca3af', dashed: true },
                            { from: [450, -6], to: [450, 8], color: '#9ca3af', dashed: true },
                            { from: [630, -6], to: [630, 8], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [78.9, 5.1], label: '78.9°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [258.9, 5.1], label: '258.9°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [438.9, 5.1], label: '438.9°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [618.9, 5.1], label: '618.9°', labelAnchor: 'nw', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 78.9^\\circ,\\ 258.9^\\circ,\\ 438.9^\\circ,\\ 618.9^\\circ\\)'
        }
    },
    {
        id: 't4-014',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 14',
        difficulty: 'Foundation',
        questionText: 'Find all solutions to \\( \\cos x = -0.6 \\) for \\( -180^\\circ \\leq x \\leq 180^\\circ \\). Give your answers to 1 decimal place.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'negative interval', 'cos', 'negative value'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the reference angle from the magnitude.',
                    workingLatex: '\\cos^{-1}(0.6) = 53.1^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 53.1301^\\circ \\); rounding gives \\( 53.1^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Use the even symmetry \\( \\cos(-x) = \\cos x \\).',
                    workingLatex: 'x = \\pm(180^\\circ - 53.1^\\circ) = \\pm 126.9^\\circ',
                    explanation: 'In \\( [0^\\circ, 180^\\circ] \\), cosine equals \\( -0.6 \\) at \\( 180^\\circ - 53.1^\\circ = 126.9^\\circ \\); by even symmetry, also at \\( -126.9^\\circ \\). Both lie in \\( [-180^\\circ, 180^\\circ] \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -180, xMax: 180, yMin: -1.2, yMax: 1.2,
                        xTicks: [-180, -90, 0, 90, 180],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), -180, 180, 100), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [-160, 1.1] }],
                        lines: [{ from: [-180, -0.6], to: [180, -0.6], color: '#dc2626', dashed: true, label: 'y = -0.6', labelAt: [120, -0.8] }],
                        points: [
                            { at: [-126.9, -0.6], label: '-126.9°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [126.9, -0.6], label: '126.9°', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = -126.9^\\circ\\) and \\(x = 126.9^\\circ\\)'
        }
    },
    {
        id: 't4-015',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 15',
        difficulty: 'Foundation',
        questionText: 'Find all solutions to \\( \\sin x = 0.91 \\) for \\( -360^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 3 significant figures.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'negative interval', 'sin', '3 sig fig'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the principal value.',
                    workingLatex: '\\sin^{-1}(0.91) = 65.5057^\\circ',
                    explanation: 'Keep extra decimals during working; we will round only at the end. To 3 s.f. this is \\( 65.5^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the 2nd quadrant solution in \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: '180^\\circ - 65.5057^\\circ = 114.4943^\\circ',
                    explanation: 'Sine is also positive in the 2nd quadrant. To 3 s.f. this rounds to \\( 114^\\circ \\) (the 4th digit is \\(4\\), so round down).'
                },
                {
                    stepNumber: 3,
                    description: 'For the negative half of the interval, subtract \\( 360^\\circ \\).',
                    workingLatex: '65.5057^\\circ - 360^\\circ = -294.4943^\\circ \\quad \\text{and} \\quad 114.4943^\\circ - 360^\\circ = -245.5057^\\circ',
                    explanation: 'Sine has period \\( 360^\\circ \\); shifting by \\( -360^\\circ \\) gives equivalent solutions in \\( [-360^\\circ, 0^\\circ] \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Round each value to 3 significant figures.',
                    workingLatex: 'x = -294^\\circ,\\ -246^\\circ,\\ 65.5^\\circ,\\ 114^\\circ',
                    explanation: '\\( -245.5057 \\to -246 \\) (4th digit is \\(5\\) so round away from zero); \\( -294.4943 \\to -294 \\); \\( 65.5057 \\to 65.5 \\); \\( 114.4943 \\to 114 \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -360, xMax: 360, yMin: -1.2, yMax: 1.2,
                        xTicks: [-360, -180, 0, 180, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), -360, 360, 140), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [-320, 1.1] }],
                        lines: [{ from: [-360, 0.91], to: [360, 0.91], color: '#dc2626', dashed: true, label: 'y = 0.91', labelAt: [220, 1.05] }],
                        points: [
                            { at: [-294, 0.91], label: '-294°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [-246, 0.91], label: '-246°', labelAnchor: 'ne', color: '#dc2626' },
                            { at: [65.5, 0.91], label: '65.5°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [114, 0.91], label: '114°', labelAnchor: 'ne', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = -294^\\circ,\\ -246^\\circ,\\ 65.5^\\circ,\\ 114^\\circ\\) (3 s.f.)'
        }
    },
    // ── TYPE D: Equations of the form sin(kx) = n ───────────────────────────
    {
        id: 't4-016',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 16',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin 2x = 0.5 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'sin kx', 'change interval', 'exact values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( u = 2x \\) and rewrite the interval.',
                    workingLatex: '0^\\circ \\leq u \\leq 720^\\circ',
                    explanation: 'Multiplying \\( 0 \\leq x \\leq 360^\\circ \\) by 2 doubles the interval for \\( u \\). We will solve \\( \\sin u = 0.5 \\) here, then divide back.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the reference angle.',
                    workingLatex: '\\sin^{-1}(0.5) = 30^\\circ',
                    explanation: 'Standard exact value from the 30-60-90 triangle.'
                },
                {
                    stepNumber: 3,
                    description: 'List the 1st-period solutions for \\( u \\).',
                    workingLatex: 'u = 30^\\circ,\\ 150^\\circ',
                    explanation: 'Sine is positive in the 1st and 2nd quadrants; \\( 180^\\circ - 30^\\circ = 150^\\circ \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Add \\( 360^\\circ \\) for the 2nd-period solutions.',
                    workingLatex: 'u = 390^\\circ,\\ 510^\\circ',
                    explanation: 'Both still lie inside \\( [0^\\circ, 720^\\circ] \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Divide every value of \\( u \\) by 2 to recover \\( x \\).',
                    workingLatex: 'x = 15^\\circ,\\ 75^\\circ,\\ 195^\\circ,\\ 255^\\circ',
                    explanation: 'Four solutions in the original interval. Always double-check at least one: \\( \\sin(2 \\times 15^\\circ) = \\sin 30^\\circ = 0.5\\ \\checkmark \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 720, yMin: -1.2, yMax: 1.2,
                        xTicks: [0, 180, 360, 540, 720],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'u = 2x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((u) => sinDeg(u), 0, 720, 140), color: '#1d4ed8', label: 'y = \\sin u', labelAt: [60, 1.1] }],
                        lines: [{ from: [0, 0.5], to: [720, 0.5], color: '#dc2626', dashed: true, label: 'y = 0.5', labelAt: [600, 0.7] }],
                        points: [
                            { at: [30, 0.5], label: 'u=30°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [150, 0.5], label: 'u=150°', labelAnchor: 'ne', color: '#dc2626' },
                            { at: [390, 0.5], label: 'u=390°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [510, 0.5], label: 'u=510°', labelAnchor: 'ne', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 15^\\circ,\\ 75^\\circ,\\ 195^\\circ,\\ 255^\\circ\\)'
        }
    },
    {
        id: 't4-017',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 17',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\cos 3x = -0.5 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'cos kx', 'change interval', 'negative', 'exact values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( u = 3x \\) and rewrite the interval.',
                    workingLatex: '0^\\circ \\leq u \\leq 1080^\\circ',
                    explanation: 'Multiplying \\( 0 \\leq x \\leq 360^\\circ \\) by 3 tripled the interval for \\( u \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the reference angle.',
                    workingLatex: '\\cos^{-1}(0.5) = 60^\\circ',
                    explanation: 'Standard exact value.'
                },
                {
                    stepNumber: 3,
                    description: 'Cosine is negative in the 2nd and 3rd quadrants — write 1st-period solutions.',
                    workingLatex: 'u = 120^\\circ,\\ 240^\\circ',
                    explanation: '\\( 180^\\circ - 60^\\circ = 120^\\circ \\) and \\( 180^\\circ + 60^\\circ = 240^\\circ \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Add \\( 360^\\circ \\) repeatedly for further periods.',
                    workingLatex: 'u = 480^\\circ,\\ 600^\\circ,\\ 840^\\circ,\\ 960^\\circ',
                    explanation: '\\( 120 + 360 = 480 \\), \\( 240 + 360 = 600 \\), \\( 480 + 360 = 840 \\), \\( 600 + 360 = 960 \\). All inside \\( [0^\\circ, 1080^\\circ] \\). The next pair would be \\( 1200 \\) and \\( 1320 \\), both out.'
                },
                {
                    stepNumber: 5,
                    description: 'Divide every value of \\( u \\) by 3.',
                    workingLatex: 'x = 40^\\circ,\\ 80^\\circ,\\ 160^\\circ,\\ 200^\\circ,\\ 280^\\circ,\\ 320^\\circ',
                    explanation: 'Six exact solutions in the original interval. The diagram below shows the curve \\( y = \\cos 3x \\) (which oscillates three times across \\( [0^\\circ, 360^\\circ] \\)) meeting the line \\( y = -\\tfrac{1}{2} \\) at exactly these six x-values.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 40, 80, 160, 200, 280, 320, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(3 * x), 0, 360, 360), color: '#1d4ed8', label: 'y = \\cos 3x', labelAt: [10, 1.15] }],
                        lines: [
                            { from: [0, -0.5], to: [360, -0.5], color: '#dc2626', dashed: true, label: 'y = -\\tfrac{1}{2}', labelAt: [305, -0.7] },
                            { from: [40, 0], to: [40, -0.5], color: '#888', dashed: true },
                            { from: [80, 0], to: [80, -0.5], color: '#888', dashed: true },
                            { from: [160, 0], to: [160, -0.5], color: '#888', dashed: true },
                            { from: [200, 0], to: [200, -0.5], color: '#888', dashed: true },
                            { from: [280, 0], to: [280, -0.5], color: '#888', dashed: true },
                            { from: [320, 0], to: [320, -0.5], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [40, -0.5], label: '40^\\circ', labelAnchor: 'sw', r: 3 },
                            { at: [80, -0.5], label: '80^\\circ', labelAnchor: 'se', r: 3 },
                            { at: [160, -0.5], label: '160^\\circ', labelAnchor: 'sw', r: 3 },
                            { at: [200, -0.5], label: '200^\\circ', labelAnchor: 'se', r: 3 },
                            { at: [280, -0.5], label: '280^\\circ', labelAnchor: 'sw', r: 3 },
                            { at: [320, -0.5], label: '320^\\circ', labelAnchor: 'se', r: 3 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 40^\\circ,\\ 80^\\circ,\\ 160^\\circ,\\ 200^\\circ,\\ 280^\\circ,\\ 320^\\circ\\)'
        }
    },
    {
        id: 't4-018',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 18',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\tan 2x = 1 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'tan kx', 'change interval', 'exact values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( u = 2x \\); new interval for \\( u \\).',
                    workingLatex: '0^\\circ \\leq u \\leq 720^\\circ',
                    explanation: 'Multiply the original limits by 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the reference angle.',
                    workingLatex: '\\tan^{-1}(1) = 45^\\circ',
                    explanation: 'Exact value from the isosceles right-angled triangle.'
                },
                {
                    stepNumber: 3,
                    description: 'Tan has period \\( 180^\\circ \\); list all \\( u \\)-solutions.',
                    workingLatex: 'u = 45^\\circ,\\ 225^\\circ,\\ 405^\\circ,\\ 585^\\circ',
                    explanation: 'Starting from \\( 45^\\circ \\), keep adding \\( 180^\\circ \\) until you exceed \\( 720^\\circ \\). The next, \\( 765^\\circ \\), is out.'
                },
                {
                    stepNumber: 4,
                    description: 'Divide every value of \\( u \\) by 2.',
                    workingLatex: 'x = 22.5^\\circ,\\ 112.5^\\circ,\\ 202.5^\\circ,\\ 292.5^\\circ',
                    explanation: 'Four exact solutions in the original interval. The diagram below plots \\( y = \\tan 2x \\), which has period \\(90^\\circ\\) and asymptotes at \\( 45^\\circ, 135^\\circ, 225^\\circ, 315^\\circ \\); the line \\( y = 1 \\) cuts it once in each of the four branches.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -5, yMax: 5,
                        xTicks: [0, 45, 90, 135, 180, 225, 270, 315, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 720, [90, 270, 450, 630], 5).map((seg, i) => ({
                            points: seg.map(([u, y]) => [u / 2, y] as [number, number]),
                            color: '#1d4ed8',
                            label: i === 0 ? 'y = \\tan 2x' : undefined,
                            labelAt: i === 0 ? [10, 4] as [number, number] : undefined
                        })),
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#16a34a', dashed: true, label: 'y = 1', labelAt: [320, 1.6] },
                            { from: [45, -5], to: [45, 5], color: '#9ca3af', dashed: true },
                            { from: [135, -5], to: [135, 5], color: '#9ca3af', dashed: true },
                            { from: [225, -5], to: [225, 5], color: '#9ca3af', dashed: true },
                            { from: [315, -5], to: [315, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [22.5, 1], label: '22.5^\\circ', labelAnchor: 'nw', r: 3 },
                            { at: [112.5, 1], label: '112.5^\\circ', labelAnchor: 'nw', r: 3 },
                            { at: [202.5, 1], label: '202.5^\\circ', labelAnchor: 'nw', r: 3 },
                            { at: [292.5, 1], label: '292.5^\\circ', labelAnchor: 'nw', r: 3 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 22.5^\\circ,\\ 112.5^\\circ,\\ 202.5^\\circ,\\ 292.5^\\circ\\)'
        }
    },
    {
        id: 't4-019',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 19',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\cos 2x = 0.8 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'cos kx', 'change interval', '1 dp'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( u = 2x \\); new interval.',
                    workingLatex: '0^\\circ \\leq u \\leq 720^\\circ',
                    explanation: 'Multiply original interval limits by 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the reference angle.',
                    workingLatex: '\\cos^{-1}(0.8) = 36.9^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 36.8699^\\circ \\); rounding gives \\( 36.9^\\circ \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Cosine is positive in the 1st and 4th quadrants — 1st-period solutions.',
                    workingLatex: 'u = 36.9^\\circ,\\ 360^\\circ - 36.9^\\circ = 323.1^\\circ',
                    explanation: '4th quadrant uses the \\( 360^\\circ - \\theta \\) rule.'
                },
                {
                    stepNumber: 4,
                    description: 'Add \\( 360^\\circ \\) for 2nd-period solutions.',
                    workingLatex: 'u = 396.9^\\circ,\\ 683.1^\\circ',
                    explanation: 'Both inside \\( [0^\\circ, 720^\\circ] \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Divide every value of \\( u \\) by 2.',
                    workingLatex: 'x = 18.4^\\circ,\\ 161.6^\\circ,\\ 198.4^\\circ,\\ 341.6^\\circ',
                    explanation: '\\( 36.9/2 = 18.45 \\to 18.4 \\) (with full-precision 36.8699/2 = 18.4350 → 18.4); \\( 323.1/2 = 161.55 \\to 161.6 \\); \\( 396.9/2 = 198.45 \\to 198.4 \\); \\( 683.1/2 = 341.55 \\to 341.6 \\). Four solutions to 1 d.p. The diagram below shows the curve \\( y = \\cos 2x \\) (which completes two cycles across \\( [0^\\circ, 360^\\circ] \\)) crossing \\( y = 0.8 \\) at exactly these four x-values.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(2 * x), 0, 360, 240), color: '#1d4ed8', label: 'y = \\cos 2x', labelAt: [10, 1.15] }],
                        lines: [
                            { from: [0, 0.8], to: [360, 0.8], color: '#16a34a', dashed: true, label: 'y = 0.8', labelAt: [305, 0.95] },
                            { from: [18.4, 0], to: [18.4, 0.8], color: '#888', dashed: true },
                            { from: [161.6, 0], to: [161.6, 0.8], color: '#888', dashed: true },
                            { from: [198.4, 0], to: [198.4, 0.8], color: '#888', dashed: true },
                            { from: [341.6, 0], to: [341.6, 0.8], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [18.4, 0.8], label: '18.4^\\circ', labelAnchor: 'nw', r: 3 },
                            { at: [161.6, 0.8], label: '161.6^\\circ', labelAnchor: 'ne', r: 3 },
                            { at: [198.4, 0.8], label: '198.4^\\circ', labelAnchor: 'nw', r: 3 },
                            { at: [341.6, 0.8], label: '341.6^\\circ', labelAnchor: 'ne', r: 3 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 18.4^\\circ,\\ 161.6^\\circ,\\ 198.4^\\circ,\\ 341.6^\\circ\\)'
        }
    },
    {
        id: 't4-020',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 20',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin\\!\\left(\\dfrac{x}{2}\\right) = -\\dfrac{\\sqrt{2}}{2} \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'sin kx', 'fractional coefficient', 'exact values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( u = \\tfrac{x}{2} \\); rewrite the interval.',
                    workingLatex: '0^\\circ \\leq u \\leq 180^\\circ',
                    explanation: 'Multiplying the limits by \\( \\tfrac{1}{2} \\) halves the interval for \\( u \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the reference angle.',
                    workingLatex: '\\sin^{-1}\\!\\left(\\tfrac{\\sqrt{2}}{2}\\right) = 45^\\circ',
                    explanation: 'Standard exact value.'
                },
                {
                    stepNumber: 3,
                    description: 'Identify the quadrants for negative sine.',
                    workingLatex: 'u = 180^\\circ + 45^\\circ = 225^\\circ \\quad \\text{or} \\quad u = 360^\\circ - 45^\\circ = 315^\\circ',
                    explanation: 'Sine is negative in the 3rd and 4th quadrants.'
                },
                {
                    stepNumber: 4,
                    description: 'Check which \\( u \\)-values lie in the reduced interval \\( [0^\\circ, 180^\\circ] \\).',
                    workingLatex: '225^\\circ \\notin [0^\\circ, 180^\\circ] \\quad \\text{and} \\quad 315^\\circ \\notin [0^\\circ, 180^\\circ]',
                    explanation: 'Neither candidate solution lies in the new interval, so there are no valid \\( u \\). Visually, \\( \\sin u \\geq 0 \\) for all \\( u \\in [0^\\circ, 180^\\circ] \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 180, yMin: -1.2, yMax: 1.2,
                        xTicks: [0, 45, 90, 135, 180],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'u = x/2 (degrees)', yLabel: 'y',
                        curves: [{ points: sample((u) => sinDeg(u), 0, 180, 80), color: '#1d4ed8', label: 'y = \\sin u', labelAt: [30, 1.1] }],
                        lines: [{ from: [0, -Math.SQRT2 / 2], to: [180, -Math.SQRT2 / 2], color: '#dc2626', dashed: true, label: 'y = -√2/2', labelAt: [110, -0.85] }]
                    }
                },
                {
                    stepNumber: 5,
                    description: 'Conclude.',
                    workingLatex: '\\text{No solutions in } 0^\\circ \\leq x \\leq 360^\\circ',
                    explanation: 'Because \\( \\sin u \\) is non-negative on \\( [0^\\circ, 180^\\circ] \\), the equation \\( \\sin(x/2) = -\\tfrac{\\sqrt{2}}{2} \\) cannot be satisfied for any \\( x \\) in the given interval.'
                }
            ],
            finalAnswer: '\\(\\text{No solutions in } 0^\\circ \\leq x \\leq 360^\\circ.\\)'
        }
    },
    // ── TYPE E: Equations of the form sin(x + c) = n ────────────────────────
    {
        id: 't4-021',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 21',
        difficulty: 'Foundation',
        questionText: 'Find all solutions to \\( \\cos(x - 40^\\circ) = 0.5 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'cos(x+c)', 'change interval', 'phase shift'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( u = x - 40^\\circ \\); shift the interval.',
                    workingLatex: '-40^\\circ \\leq u \\leq 320^\\circ',
                    explanation: 'Subtract \\( 40^\\circ \\) from each bound of \\( 0^\\circ \\leq x \\leq 360^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the reference angle.',
                    workingLatex: '\\cos^{-1}(0.5) = 60^\\circ',
                    explanation: 'Exact value from the 30-60-90 triangle.'
                },
                {
                    stepNumber: 3,
                    description: 'List all \\( u \\)-values where \\( \\cos u = 0.5 \\) in the shifted interval.',
                    workingLatex: 'u = 60^\\circ,\\ -60^\\circ,\\ 300^\\circ',
                    explanation: 'Cosine is positive in the 1st and 4th quadrants, with \\( \\cos(\\pm 60^\\circ) = 0.5 \\) and \\( \\cos(300^\\circ) = 0.5 \\). Check each lies in \\( [-40^\\circ, 320^\\circ] \\): \\( -60^\\circ \\) is below \\( -40^\\circ \\), so discard.'
                },
                {
                    stepNumber: 4,
                    description: 'Keep only \\( u \\)-values inside the interval.',
                    workingLatex: 'u = 60^\\circ,\\ 300^\\circ',
                    explanation: '\\( -60^\\circ < -40^\\circ \\), so it is excluded. Both \\( 60^\\circ \\) and \\( 300^\\circ \\) lie in \\( [-40^\\circ, 320^\\circ] \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Recover \\( x = u + 40^\\circ \\).',
                    workingLatex: 'x = 100^\\circ \\quad \\text{and} \\quad x = 340^\\circ',
                    explanation: 'Two exact solutions, both in \\( [0^\\circ, 360^\\circ] \\). Check: \\( \\cos(100^\\circ - 40^\\circ) = \\cos 60^\\circ = 0.5 \\). \\checkmark The diagram below shows the curve \\( y = \\cos(x - 40^\\circ) \\) crossing the line \\( y = \\tfrac{1}{2} \\) at exactly these two x-values.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 100, 180, 270, 340, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x - 40), 0, 360, 180), color: '#1d4ed8', label: 'y = \\cos(x - 40^\\circ)', labelAt: [10, 1.15] }],
                        lines: [
                            { from: [0, 0.5], to: [360, 0.5], color: '#16a34a', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [305, 0.65] },
                            { from: [100, 0], to: [100, 0.5], color: '#888', dashed: true },
                            { from: [340, 0], to: [340, 0.5], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [100, 0.5], label: '(100^\\circ,\\, \\tfrac{1}{2})', labelAnchor: 'nw', r: 4 },
                            { at: [340, 0.5], label: '(340^\\circ,\\, \\tfrac{1}{2})', labelAnchor: 'ne', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 100^\\circ\\) and \\(x = 340^\\circ\\)'
        }
    },
    {
        id: 't4-022',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 22',
        difficulty: 'Foundation',
        questionText: 'Find all solutions to \\( \\sin(x + 50^\\circ) = 0.7 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'sin(x+c)', 'phase shift', 'CAST'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( u = x + 50^\\circ \\); shift the interval.',
                    workingLatex: '50^\\circ \\leq u \\leq 410^\\circ',
                    explanation: 'Add \\( 50^\\circ \\) to each bound.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the reference angle.',
                    workingLatex: '\\sin^{-1}(0.7) = 44.4^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 44.4270^\\circ \\); rounding gives \\( 44.4^\\circ \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Sine is positive in the 1st and 2nd quadrants; list 1st-period \\( u \\)-values.',
                    workingLatex: 'u = 44.4^\\circ \\quad \\text{or} \\quad u = 180^\\circ - 44.4^\\circ = 135.6^\\circ',
                    explanation: 'Then check the interval \\( [50^\\circ, 410^\\circ] \\): \\( 44.4^\\circ < 50^\\circ \\) so this is out; \\( 135.6^\\circ \\) is in.'
                },
                {
                    stepNumber: 4,
                    description: 'Add \\( 360^\\circ \\) to the missed value.',
                    workingLatex: 'u = 44.4^\\circ + 360^\\circ = 404.4^\\circ',
                    explanation: 'Now \\( 404.4^\\circ \\) lies in \\( [50^\\circ, 410^\\circ] \\). The other potential extension \\( 135.6^\\circ + 360^\\circ = 495.6^\\circ \\) is out.'
                },
                {
                    stepNumber: 5,
                    description: 'Recover \\( x = u - 50^\\circ \\).',
                    workingLatex: 'x = 135.6^\\circ - 50^\\circ = 85.6^\\circ \\quad \\text{and} \\quad x = 404.4^\\circ - 50^\\circ = 354.4^\\circ',
                    explanation: 'Both lie in \\( [0^\\circ, 360^\\circ] \\). Check: \\( \\sin(85.6^\\circ + 50^\\circ) = \\sin 135.6^\\circ \\approx 0.7 \\). \\checkmark The diagram below shows the curve \\( y = \\sin(x + 50^\\circ) \\) (a sine wave shifted \\(50^\\circ\\) to the left) crossing the line \\( y = 0.7 \\) at exactly these two x-values.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 85.6, 180, 270, 354.4, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x + 50), 0, 360, 180), color: '#1d4ed8', label: 'y = \\sin(x + 50^\\circ)', labelAt: [10, 1.15] }],
                        lines: [
                            { from: [0, 0.7], to: [360, 0.7], color: '#16a34a', dashed: true, label: 'y = 0.7', labelAt: [305, 0.85] },
                            { from: [85.6, 0], to: [85.6, 0.7], color: '#888', dashed: true },
                            { from: [354.4, 0], to: [354.4, 0.7], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [85.6, 0.7], label: '85.6^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [354.4, 0.7], label: '354.4^\\circ', labelAnchor: 'ne', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 85.6^\\circ\\) and \\(x = 354.4^\\circ\\)'
        }
    },
    {
        id: 't4-023',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 23',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\tan(x + 60^\\circ) = -1 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'tan(x+c)', 'phase shift', 'exact values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( u = x + 60^\\circ \\); shift the interval.',
                    workingLatex: '60^\\circ \\leq u \\leq 420^\\circ',
                    explanation: 'Add \\( 60^\\circ \\) throughout.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the reference angle.',
                    workingLatex: '\\tan^{-1}(1) = 45^\\circ',
                    explanation: 'We use the positive value for the reference angle.'
                },
                {
                    stepNumber: 3,
                    description: 'Tan is negative in the 2nd and 4th quadrants; list 1st-period candidates.',
                    workingLatex: 'u = 180^\\circ - 45^\\circ = 135^\\circ \\quad \\text{and} \\quad u = 360^\\circ - 45^\\circ = 315^\\circ',
                    explanation: 'Both are in \\( [60^\\circ, 420^\\circ] \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Add \\( 180^\\circ \\) (period of tan) and check.',
                    workingLatex: '135^\\circ + 180^\\circ = 315^\\circ \\quad \\checkmark \\quad ; \\quad 315^\\circ + 180^\\circ = 495^\\circ > 420^\\circ',
                    explanation: '\\( 315^\\circ \\) was already listed; the next, \\( 495^\\circ \\), is outside the interval. No new solutions.'
                },
                {
                    stepNumber: 5,
                    description: 'Recover \\( x = u - 60^\\circ \\).',
                    workingLatex: 'x = 135^\\circ - 60^\\circ = 75^\\circ \\quad \\text{and} \\quad x = 315^\\circ - 60^\\circ = 255^\\circ',
                    explanation: 'Both in \\( [0^\\circ, 360^\\circ] \\). The diagram below plots \\( y = \\tan(x + 60^\\circ) \\), which has asymptotes at \\( x = 30^\\circ, 210^\\circ \\); the line \\( y = -1 \\) cuts each of the three branches.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -5, yMax: 5,
                        xTicks: [0, 30, 75, 180, 210, 255, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(60, 420, [90, 270], 5).map((seg, i) => ({
                            points: seg.map(([u, y]) => [u - 60, y] as [number, number]),
                            color: '#1d4ed8',
                            label: i === 0 ? 'y = \\tan(x + 60^\\circ)' : undefined,
                            labelAt: i === 0 ? [10, 4] as [number, number] : undefined
                        })),
                        lines: [
                            { from: [0, -1], to: [360, -1], color: '#dc2626', dashed: true, label: 'y = -1', labelAt: [320, -1.6] },
                            { from: [30, -5], to: [30, 5], color: '#9ca3af', dashed: true },
                            { from: [210, -5], to: [210, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [75, -1], label: '75^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [255, -1], label: '255^\\circ', labelAnchor: 'sw', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 75^\\circ\\) and \\(x = 255^\\circ\\)'
        }
    },
    {
        id: 't4-024',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 24',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin(x - 30^\\circ) = -\\dfrac{1}{2} \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'sin(x-c)', 'phase shift', 'exact values', 'negative'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( u = x - 30^\\circ \\); shift the interval.',
                    workingLatex: '-30^\\circ \\leq u \\leq 330^\\circ',
                    explanation: 'Subtract \\( 30^\\circ \\) from each bound.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the reference angle.',
                    workingLatex: '\\sin^{-1}\\!\\left(\\tfrac{1}{2}\\right) = 30^\\circ',
                    explanation: 'Standard exact value.'
                },
                {
                    stepNumber: 3,
                    description: 'Sine is negative in the 3rd and 4th quadrants; list candidate \\( u \\)-values.',
                    workingLatex: 'u = 180^\\circ + 30^\\circ = 210^\\circ \\quad \\text{or} \\quad u = 360^\\circ - 30^\\circ = 330^\\circ \\quad \\text{or} \\quad u = -30^\\circ',
                    explanation: 'The 4th-quadrant solution is \\( 360^\\circ - 30^\\circ = 330^\\circ \\); subtracting \\( 360^\\circ \\) gives the equivalent \\( -30^\\circ \\), which is also inside the shifted interval.'
                },
                {
                    stepNumber: 4,
                    description: 'Check each candidate is in \\( [-30^\\circ, 330^\\circ] \\).',
                    workingLatex: 'u \\in \\{-30^\\circ,\\ 210^\\circ,\\ 330^\\circ\\}',
                    explanation: 'All three lie in the closed interval (\\(-30^\\circ\\) and \\(330^\\circ\\) are the endpoints).'
                },
                {
                    stepNumber: 5,
                    description: 'Recover \\( x = u + 30^\\circ \\).',
                    workingLatex: 'x = 0^\\circ,\\ 240^\\circ,\\ 360^\\circ',
                    explanation: 'All three lie in \\( [0^\\circ, 360^\\circ] \\). Check each: \\( \\sin(0^\\circ - 30^\\circ) = \\sin(-30^\\circ) = -\\tfrac{1}{2} \\); \\( \\sin(240^\\circ - 30^\\circ) = \\sin 210^\\circ = -\\tfrac{1}{2} \\); \\( \\sin(360^\\circ - 30^\\circ) = \\sin 330^\\circ = -\\tfrac{1}{2} \\). \\checkmark The diagram below shows the shifted sine curve meeting the line \\( y = -\\tfrac{1}{2} \\) at these three x-values (the endpoints \\( 0^\\circ \\) and \\( 360^\\circ \\) are both included since both are exactly at the level \\( -\\tfrac{1}{2} \\)).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 180, 240, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x - 30), 0, 360, 180), color: '#1d4ed8', label: 'y = \\sin(x - 30^\\circ)', labelAt: [10, 1.15] }],
                        lines: [
                            { from: [0, -0.5], to: [360, -0.5], color: '#dc2626', dashed: true, label: 'y = -\\tfrac{1}{2}', labelAt: [305, -0.7] },
                            { from: [0, 0], to: [0, -0.5], color: '#888', dashed: true },
                            { from: [240, 0], to: [240, -0.5], color: '#888', dashed: true },
                            { from: [360, 0], to: [360, -0.5], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [0, -0.5], label: '0^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [240, -0.5], label: '240^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [360, -0.5], label: '360^\\circ', labelAnchor: 'se', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 0^\\circ,\\ 240^\\circ,\\ 360^\\circ\\)'
        }
    },
    // ── TYPE F: Using trig identities to solve equations ────────────────────
    {
        id: 't4-025',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 25',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\sin^2 x - \\sin x - 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'quadratic in sin', 'factorise', 'identities'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the equation as a quadratic in \\( \\sin x \\); let \\( s = \\sin x \\).',
                    workingLatex: '2s^2 - s - 1 = 0',
                    explanation: 'The substitution \\( s = \\sin x \\) hides the trig and makes the structure obvious — same shape as \\( 2s^2 - s - 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(2s + 1)(s - 1) = 0',
                    explanation: 'Expanding: \\( 2s \\cdot s + 2s \\cdot (-1) + 1 \\cdot s + 1 \\cdot (-1) = 2s^2 - 2s + s - 1 = 2s^2 - s - 1 \\). \\checkmark'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '2s + 1 = 0 \\quad \\text{or} \\quad s - 1 = 0',
                    explanation: 'A product equals zero only if at least one factor is zero.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve each factor for \\( s = \\sin x \\).',
                    workingLatex: '\\sin x = -\\tfrac{1}{2} \\quad \\text{or} \\quad \\sin x = 1',
                    explanation: 'Two separate trig equations to solve.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve \\( \\sin x = 1 \\).',
                    workingLatex: 'x = 90^\\circ',
                    explanation: 'Sine attains its maximum value of 1 only at \\( 90^\\circ \\) in \\( [0^\\circ, 360^\\circ] \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Solve \\( \\sin x = -\\tfrac{1}{2} \\): reference angle is \\( 30^\\circ \\), sine negative in Q3 and Q4.',
                    workingLatex: 'x = 180^\\circ + 30^\\circ = 210^\\circ \\quad \\text{and} \\quad x = 360^\\circ - 30^\\circ = 330^\\circ',
                    explanation: '3rd quadrant: \\( 180^\\circ + \\) (ref). 4th quadrant: \\( 360^\\circ - \\) (ref).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -1.2, yMax: 1.2,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), 0, 360, 100), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [50, 1.1] }],
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#16a34a', dashed: true, label: 'y = 1', labelAt: [300, 1.1] },
                            { from: [0, -0.5], to: [360, -0.5], color: '#dc2626', dashed: true, label: 'y = -1/2', labelAt: [290, -0.7] }
                        ],
                        points: [
                            { at: [90, 1], label: '90°', labelAnchor: 'sw', color: '#16a34a' },
                            { at: [210, -0.5], label: '210°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [330, -0.5], label: '330°', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 90^\\circ,\\ 210^\\circ,\\ 330^\\circ\\)'
        }
    },
    {
        id: 't4-026',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 26',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\cos^2 x + \\cos x - 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'quadratic in cos', 'factorise'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( c = \\cos x \\); recognise as a quadratic in \\( c \\).',
                    workingLatex: '2c^2 + c - 1 = 0',
                    explanation: 'The substitution \\( c = \\cos x \\) makes the algebraic structure clear.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: '(2c - 1)(c + 1) = 0',
                    explanation: 'Expanding: \\( 2c \\cdot c + 2c \\cdot 1 - 1 \\cdot c - 1 \\cdot 1 = 2c^2 + 2c - c - 1 = 2c^2 + c - 1 \\). \\checkmark'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\cos x = \\tfrac{1}{2} \\quad \\text{or} \\quad \\cos x = -1',
                    explanation: 'Solve each factor: \\( 2c - 1 = 0 \\Rightarrow c = \\tfrac{1}{2} \\); \\( c + 1 = 0 \\Rightarrow c = -1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( \\cos x = \\tfrac{1}{2} \\): reference angle \\( 60^\\circ \\), cosine positive in Q1 and Q4.',
                    workingLatex: 'x = 60^\\circ \\quad \\text{and} \\quad x = 300^\\circ',
                    explanation: '\\( \\cos 60^\\circ = \\tfrac{1}{2} \\); also \\( 360^\\circ - 60^\\circ = 300^\\circ \\) by even symmetry of cosine.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve \\( \\cos x = -1 \\).',
                    workingLatex: 'x = 180^\\circ',
                    explanation: 'Cosine takes its minimum value of \\(-1\\) only at \\( 180^\\circ \\) in \\( [0^\\circ, 360^\\circ] \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -1.2, yMax: 1.2,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 360, 100), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [40, 1.1] }],
                        lines: [
                            { from: [0, 0.5], to: [360, 0.5], color: '#dc2626', dashed: true, label: 'y = 1/2', labelAt: [310, 0.65] },
                            { from: [0, -1], to: [360, -1], color: '#16a34a', dashed: true, label: 'y = -1', labelAt: [290, -1.15] }
                        ],
                        points: [
                            { at: [60, 0.5], label: '60°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [300, 0.5], label: '300°', labelAnchor: 'ne', color: '#dc2626' },
                            { at: [180, -1], label: '180°', labelAnchor: 'nw', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 60^\\circ,\\ 180^\\circ,\\ 300^\\circ\\)'
        }
    },
    {
        id: 't4-027',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 27',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 3\\tan^2 x - \\tan x - 2 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 decimal place where not exact.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'quadratic in tan', 'factorise'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( t = \\tan x \\); the equation becomes a quadratic.',
                    workingLatex: '3t^2 - t - 2 = 0',
                    explanation: 'Substitution clarifies the structure.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: '(3t + 2)(t - 1) = 0',
                    explanation: 'Expanding: \\( 3t \\cdot t + 3t \\cdot (-1) + 2 \\cdot t + 2 \\cdot (-1) = 3t^2 - 3t + 2t - 2 = 3t^2 - t - 2 \\). \\checkmark'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\tan x = -\\tfrac{2}{3} \\quad \\text{or} \\quad \\tan x = 1',
                    explanation: 'Two separate trig equations.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( \\tan x = 1 \\): reference angle \\( 45^\\circ \\), tan positive in Q1 and Q3.',
                    workingLatex: 'x = 45^\\circ \\quad \\text{and} \\quad x = 225^\\circ',
                    explanation: '1st quadrant: reference. 3rd quadrant: reference \\( + 180^\\circ \\).'
                },
                {
                    stepNumber: 5,
                    description: 'For \\( \\tan x = -\\tfrac{2}{3} \\): reference angle.',
                    workingLatex: '\\tan^{-1}\\!\\left(\\tfrac{2}{3}\\right) = 33.7^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 33.6901^\\circ \\); rounding gives \\( 33.7^\\circ \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Tan is negative in Q2 and Q4.',
                    workingLatex: 'x = 180^\\circ - 33.7^\\circ = 146.3^\\circ \\quad \\text{and} \\quad x = 360^\\circ - 33.7^\\circ = 326.3^\\circ',
                    explanation: '2nd quadrant: \\( 180^\\circ - \\) (ref). 4th quadrant: \\( 360^\\circ - \\) (ref). Four solutions in total. The diagram below shows the tan curve cutting both horizontal lines \\( y = 1 \\) and \\( y = -\\tfrac{2}{3} \\), giving the four x-values.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -5, yMax: 5,
                        xTicks: [0, 45, 90, 146.3, 180, 225, 270, 326.3, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({
                            points: seg,
                            color: '#1d4ed8',
                            label: i === 0 ? 'y = \\tan x' : undefined,
                            labelAt: i === 0 ? [10, 4] as [number, number] : undefined
                        })),
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#16a34a', dashed: true, label: 'y = 1', labelAt: [320, 1.6] },
                            { from: [0, -2 / 3], to: [360, -2 / 3], color: '#dc2626', dashed: true, label: 'y = -\\tfrac{2}{3}', labelAt: [320, -1.3] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [45, 1], label: '45^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [225, 1], label: '225^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [146.3, -2 / 3], label: '146.3^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [326.3, -2 / 3], label: '326.3^\\circ', labelAnchor: 'sw', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 45^\\circ,\\ 146.3^\\circ,\\ 225^\\circ,\\ 326.3^\\circ\\)'
        }
    },
    {
        id: 't4-028',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 28',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 4\\sin x = 3\\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'divide by cos', 'convert to tan', 'mixed trig'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide both sides by \\( \\cos x \\) (valid because \\( \\cos x = 0 \\) leads to \\( 0 = \\pm 3 \\), impossible).',
                    workingLatex: '\\frac{4\\sin x}{\\cos x} = 3',
                    explanation: 'Before dividing by a trig expression, always check that the divisor cannot be zero on any solution. Here, if \\( \\cos x = 0 \\) then the original equation reads \\( \\pm 4 = 0 \\), false — so no solutions are lost.'
                },
                {
                    stepNumber: 2,
                    description: 'Use the identity \\( \\sin x / \\cos x = \\tan x \\).',
                    workingLatex: '4\\tan x = 3',
                    explanation: 'Definition of tan.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( \\tan x \\).',
                    workingLatex: '\\tan x = \\tfrac{3}{4} = 0.75',
                    explanation: 'Divide both sides by 4.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the reference angle.',
                    workingLatex: '\\tan^{-1}(0.75) = 36.9^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 36.8699^\\circ \\); rounding gives \\( 36.9^\\circ \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Tan positive in Q1 and Q3.',
                    workingLatex: 'x = 36.9^\\circ \\quad \\text{and} \\quad x = 36.9^\\circ + 180^\\circ = 216.9^\\circ',
                    explanation: 'Adding \\( 180^\\circ \\) gives the 3rd-quadrant solution because tan has period \\( 180^\\circ \\). The diagram below shows \\( y = \\tan x \\) cutting \\( y = 0.75 \\) at exactly these two x-values.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -5, yMax: 5,
                        xTicks: [0, 36.9, 90, 180, 216.9, 270, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({
                            points: seg,
                            color: '#1d4ed8',
                            label: i === 0 ? 'y = \\tan x' : undefined,
                            labelAt: i === 0 ? [10, 4] as [number, number] : undefined
                        })),
                        lines: [
                            { from: [0, 0.75], to: [360, 0.75], color: '#16a34a', dashed: true, label: 'y = 0.75', labelAt: [315, 1.3] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [36.9, 0.75], label: '36.9^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [216.9, 0.75], label: '216.9^\\circ', labelAnchor: 'nw', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 36.9^\\circ\\) and \\(x = 216.9^\\circ\\)'
        }
    },
    {
        id: 't4-029',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 29',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin^2 x = \\cos^2 x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'identities', 'quadratic', 'exact values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Move everything to one side.',
                    workingLatex: '\\sin^2 x - \\cos^2 x = 0',
                    explanation: 'Subtract \\( \\cos^2 x \\) from both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Factor as a difference of two squares.',
                    workingLatex: '(\\sin x - \\cos x)(\\sin x + \\cos x) = 0',
                    explanation: 'Using \\( a^2 - b^2 = (a-b)(a+b) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the zero-product principle: two cases.',
                    workingLatex: '\\sin x = \\cos x \\quad \\text{or} \\quad \\sin x = -\\cos x',
                    explanation: 'Each factor in turn.'
                },
                {
                    stepNumber: 4,
                    description: 'Case 1: divide both sides by \\( \\cos x \\) (zero values check out).',
                    workingLatex: '\\tan x = 1 \\Rightarrow x = 45^\\circ,\\ 225^\\circ',
                    explanation: 'Tan positive in Q1 and Q3.'
                },
                {
                    stepNumber: 5,
                    description: 'Case 2: divide by \\( \\cos x \\).',
                    workingLatex: '\\tan x = -1 \\Rightarrow x = 135^\\circ,\\ 315^\\circ',
                    explanation: 'Tan negative in Q2 and Q4. The diagram below shows \\( y = \\tan x \\) meeting both \\( y = 1 \\) and \\( y = -1 \\), giving the four solutions.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -5, yMax: 5,
                        xTicks: [0, 45, 90, 135, 180, 225, 270, 315, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({
                            points: seg,
                            color: '#1d4ed8',
                            label: i === 0 ? 'y = \\tan x' : undefined,
                            labelAt: i === 0 ? [10, 4] as [number, number] : undefined
                        })),
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#16a34a', dashed: true, label: 'y = 1', labelAt: [320, 1.6] },
                            { from: [0, -1], to: [360, -1], color: '#dc2626', dashed: true, label: 'y = -1', labelAt: [320, -1.6] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [45, 1], label: '45^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [225, 1], label: '225^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [135, -1], label: '135^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [315, -1], label: '315^\\circ', labelAnchor: 'sw', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 45^\\circ,\\ 135^\\circ,\\ 225^\\circ,\\ 315^\\circ\\)'
        }
    },
    {
        id: 't4-030',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 30',
        difficulty: 'Foundation',
        questionText: 'Show that \\( 2\\sin^2 x + 3\\cos x - 3 = 0 \\) can be written as \\( 2\\cos^2 x - 3\\cos x + 1 = 0 \\), and hence solve it for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'Pythagorean identity', 'quadratic in cos', 'show and solve'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\sin^2 x \\) using the Pythagorean identity \\( \\sin^2 x + \\cos^2 x = 1 \\).',
                    workingLatex: '\\sin^2 x = 1 - \\cos^2 x',
                    explanation: 'Rearranging \\( \\sin^2 x + \\cos^2 x = 1 \\). This is the standard trick to convert a mixed quadratic into one variable.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the equation.',
                    workingLatex: '2(1 - \\cos^2 x) + 3\\cos x - 3 = 0',
                    explanation: 'Direct substitution.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand the bracket.',
                    workingLatex: '2 - 2\\cos^2 x + 3\\cos x - 3 = 0',
                    explanation: 'Distribute the 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Collect the constant terms.',
                    workingLatex: '-2\\cos^2 x + 3\\cos x - 1 = 0',
                    explanation: '\\( 2 - 3 = -1 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Multiply through by \\( -1 \\) to match the requested form.',
                    workingLatex: '2\\cos^2 x - 3\\cos x + 1 = 0',
                    explanation: 'Conventional to lead with a positive coefficient.'
                },
                {
                    stepNumber: 6,
                    description: 'Factorise (treating \\( \\cos x \\) as the variable).',
                    workingLatex: '(2\\cos x - 1)(\\cos x - 1) = 0',
                    explanation: 'Expanding: \\( 2c^2 - 2c - c + 1 = 2c^2 - 3c + 1 \\). \\checkmark'
                },
                {
                    stepNumber: 7,
                    description: 'Solve \\( \\cos x = \\tfrac{1}{2} \\).',
                    workingLatex: 'x = 60^\\circ,\\ 300^\\circ',
                    explanation: 'Reference angle \\(60^\\circ\\); cosine positive in Q1 and Q4.'
                },
                {
                    stepNumber: 8,
                    description: 'Solve \\( \\cos x = 1 \\).',
                    workingLatex: 'x = 0^\\circ,\\ 360^\\circ',
                    explanation: 'Cosine equals \\(1\\) at both endpoints of \\( [0^\\circ, 360^\\circ] \\). Combine: four solutions. The diagram below shows the cosine curve meeting \\( y = \\tfrac{1}{2} \\) at \\( 60^\\circ \\) and \\( 300^\\circ \\), and touching \\( y = 1 \\) only at the endpoints.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 60, 90, 180, 270, 300, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [40, 1.15] }],
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#16a34a', dashed: true, label: 'y = 1', labelAt: [305, 1.2] },
                            { from: [0, 0.5], to: [360, 0.5], color: '#dc2626', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [305, 0.65] },
                            { from: [60, 0], to: [60, 0.5], color: '#888', dashed: true },
                            { from: [300, 0], to: [300, 0.5], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [0, 1], label: '0^\\circ', labelAnchor: 'se', r: 4 },
                            { at: [60, 0.5], label: '60^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [300, 0.5], label: '300^\\circ', labelAnchor: 'ne', r: 4 },
                            { at: [360, 1], label: '360^\\circ', labelAnchor: 'sw', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 0^\\circ,\\ 60^\\circ,\\ 300^\\circ,\\ 360^\\circ\\)'
        }
    },
    // ── TYPE G: Mixed and multi-part exam-style ──────────────────────────────
    {
        id: 't4-031',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 31',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 5\\sin x\\tan x - 3\\tan x = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give any non-exact answers to 1 decimal place.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'factorise', 'tan x', 'common factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factor out the common factor \\( \\tan x \\).',
                    workingLatex: '\\tan x(5\\sin x - 3) = 0',
                    explanation: 'Never divide both sides by \\( \\tan x \\) — that would discard the solutions where \\( \\tan x = 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\tan x = 0 \\quad \\text{or} \\quad 5\\sin x - 3 = 0',
                    explanation: 'Two separate cases.'
                },
                {
                    stepNumber: 3,
                    description: 'Case 1: \\( \\tan x = 0 \\) — tan is zero at multiples of \\( 180^\\circ \\).',
                    workingLatex: 'x = 0^\\circ,\\ 180^\\circ,\\ 360^\\circ',
                    explanation: 'All three are in \\( [0^\\circ, 360^\\circ] \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Case 2: rearrange.',
                    workingLatex: '\\sin x = \\tfrac{3}{5} = 0.6',
                    explanation: 'Isolate \\( \\sin x \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find the reference angle.',
                    workingLatex: '\\sin^{-1}(0.6) = 36.9^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 36.8699^\\circ \\); rounding gives \\( 36.9^\\circ \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Sine positive in Q1 and Q2.',
                    workingLatex: 'x = 36.9^\\circ \\quad \\text{and} \\quad x = 180^\\circ - 36.9^\\circ = 143.1^\\circ',
                    explanation: 'Combining both cases: five solutions in total. The diagram below shows \\( y = \\sin x \\): the curve meets \\( y = 0.6 \\) at \\( 36.9^\\circ, 143.1^\\circ \\) (from Case 2), and it crosses \\( y = 0 \\) at \\( 0^\\circ, 180^\\circ, 360^\\circ \\) (from Case 1, where \\( \\tan x = 0 \\)).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 36.9, 90, 143.1, 180, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [50, 1.15] }],
                        lines: [
                            { from: [0, 0.6], to: [360, 0.6], color: '#16a34a', dashed: true, label: 'y = 0.6', labelAt: [305, 0.75] },
                            { from: [36.9, 0], to: [36.9, 0.6], color: '#888', dashed: true },
                            { from: [143.1, 0], to: [143.1, 0.6], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [0, 0], label: '0^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [36.9, 0.6], label: '36.9^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [143.1, 0.6], label: '143.1^\\circ', labelAnchor: 'ne', r: 4 },
                            { at: [180, 0], label: '180^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [360, 0], label: '360^\\circ', labelAnchor: 'se', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 0^\\circ,\\ 36.9^\\circ,\\ 143.1^\\circ,\\ 180^\\circ,\\ 360^\\circ\\)'
        }
    },
    {
        id: 't4-032',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 32',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin 2x = \\cos 30^\\circ \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'sin kx', 'exact value right-hand side'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Evaluate the right-hand side using a standard exact value.',
                    workingLatex: '\\cos 30^\\circ = \\tfrac{\\sqrt{3}}{2}',
                    explanation: 'From the 30-60-90 triangle.'
                },
                {
                    stepNumber: 2,
                    description: 'Rewrite the equation.',
                    workingLatex: '\\sin 2x = \\tfrac{\\sqrt{3}}{2}',
                    explanation: 'Substituted.'
                },
                {
                    stepNumber: 3,
                    description: 'Let \\( u = 2x \\); rewrite the interval.',
                    workingLatex: '0^\\circ \\leq u \\leq 720^\\circ',
                    explanation: 'Double the limits.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the reference angle.',
                    workingLatex: '\\sin^{-1}\\!\\left(\\tfrac{\\sqrt{3}}{2}\\right) = 60^\\circ',
                    explanation: 'Standard exact value.'
                },
                {
                    stepNumber: 5,
                    description: 'Sine positive in Q1 and Q2; list all \\( u \\)-solutions.',
                    workingLatex: 'u = 60^\\circ,\\ 120^\\circ,\\ 420^\\circ,\\ 480^\\circ',
                    explanation: 'In each period: \\( 60^\\circ \\) and \\( 180^\\circ - 60^\\circ = 120^\\circ \\). Add \\( 360^\\circ \\) for the second period.'
                },
                {
                    stepNumber: 6,
                    description: 'Divide every \\( u \\)-value by 2.',
                    workingLatex: 'x = 30^\\circ,\\ 60^\\circ,\\ 210^\\circ,\\ 240^\\circ',
                    explanation: 'Four exact solutions. The diagram below shows \\( y = \\sin 2x \\), which completes two cycles across \\( [0^\\circ, 360^\\circ] \\); the line \\( y = \\tfrac{\\sqrt{3}}{2} \\) cuts it at exactly these four x-values.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 30, 60, 90, 180, 210, 240, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(2 * x), 0, 360, 240), color: '#1d4ed8', label: 'y = \\sin 2x', labelAt: [10, 1.15] }],
                        lines: [
                            { from: [0, Math.sqrt(3) / 2], to: [360, Math.sqrt(3) / 2], color: '#16a34a', dashed: true, label: 'y = \\tfrac{\\sqrt{3}}{2}', labelAt: [300, 1.0] },
                            { from: [30, 0], to: [30, Math.sqrt(3) / 2], color: '#888', dashed: true },
                            { from: [60, 0], to: [60, Math.sqrt(3) / 2], color: '#888', dashed: true },
                            { from: [210, 0], to: [210, Math.sqrt(3) / 2], color: '#888', dashed: true },
                            { from: [240, 0], to: [240, Math.sqrt(3) / 2], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [30, Math.sqrt(3) / 2], label: '30^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [60, Math.sqrt(3) / 2], label: '60^\\circ', labelAnchor: 'ne', r: 4 },
                            { at: [210, Math.sqrt(3) / 2], label: '210^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [240, Math.sqrt(3) / 2], label: '240^\\circ', labelAnchor: 'ne', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 30^\\circ,\\ 60^\\circ,\\ 210^\\circ,\\ 240^\\circ\\)'
        }
    },
    {
        id: 't4-033',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 33',
        difficulty: 'Foundation',
        questionText: '(a) Show that \\( 4\\cos^2 x - \\cos x - 3 = 0 \\) can be written as \\( 4\\sin^2 x + \\cos x - 1 = 0 \\). \n\n \n\n (b) Hence solve \\( 4\\cos^2 x - \\cos x - 3 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'show and solve', 'Pythagorean identity', 'quadratic in cos', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): replace \\( \\cos^2 x \\) using the Pythagorean identity.',
                    workingLatex: '\\cos^2 x = 1 - \\sin^2 x',
                    explanation: 'Rearrangement of \\( \\sin^2 x + \\cos^2 x = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute.',
                    workingLatex: '4(1 - \\sin^2 x) - \\cos x - 3 = 0',
                    explanation: 'Plug in.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand.',
                    workingLatex: '4 - 4\\sin^2 x - \\cos x - 3 = 0',
                    explanation: 'Distribute the 4.'
                },
                {
                    stepNumber: 4,
                    description: 'Collect constants.',
                    workingLatex: '1 - 4\\sin^2 x - \\cos x = 0',
                    explanation: '\\( 4 - 3 = 1 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Multiply through by \\( -1 \\) and rearrange.',
                    workingLatex: '4\\sin^2 x + \\cos x - 1 = 0',
                    explanation: 'Part (a) shown.'
                },
                {
                    stepNumber: 6,
                    description: 'Part (b): factorise the original quadratic in \\( c = \\cos x \\).',
                    workingLatex: '(4\\cos x + 3)(\\cos x - 1) = 0',
                    explanation: 'Expanding: \\( 4c^2 - 4c + 3c - 3 = 4c^2 - c - 3 \\). \\checkmark'
                },
                {
                    stepNumber: 7,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\cos x = -\\tfrac{3}{4} \\quad \\text{or} \\quad \\cos x = 1',
                    explanation: 'Two cases.'
                },
                {
                    stepNumber: 8,
                    description: 'Solve \\( \\cos x = 1 \\).',
                    workingLatex: 'x = 0^\\circ,\\ 360^\\circ',
                    explanation: 'Cosine equals \\(1\\) at the endpoints of \\( [0^\\circ, 360^\\circ] \\).'
                },
                {
                    stepNumber: 9,
                    description: 'Find the reference angle for \\( \\cos x = -\\tfrac{3}{4} \\).',
                    workingLatex: '\\cos^{-1}(0.75) = 41.4^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 41.4096^\\circ \\); rounding gives \\( 41.4^\\circ \\).'
                },
                {
                    stepNumber: 10,
                    description: 'Cosine negative in Q2 and Q3.',
                    workingLatex: 'x = 180^\\circ - 41.4^\\circ = 138.6^\\circ \\quad \\text{and} \\quad x = 180^\\circ + 41.4^\\circ = 221.4^\\circ',
                    explanation: 'Combine: four solutions in total. The diagram below shows the cosine curve touching \\( y = 1 \\) only at the endpoints \\( 0^\\circ \\) and \\( 360^\\circ \\), and meeting \\( y = -\\tfrac{3}{4} \\) at \\( 138.6^\\circ \\) and \\( 221.4^\\circ \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 138.6, 180, 221.4, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [40, 1.15] }],
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#16a34a', dashed: true, label: 'y = 1', labelAt: [305, 1.2] },
                            { from: [0, -0.75], to: [360, -0.75], color: '#dc2626', dashed: true, label: 'y = -\\tfrac{3}{4}', labelAt: [305, -0.95] },
                            { from: [138.6, 0], to: [138.6, -0.75], color: '#888', dashed: true },
                            { from: [221.4, 0], to: [221.4, -0.75], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [0, 1], label: '0^\\circ', labelAnchor: 'se', r: 4 },
                            { at: [138.6, -0.75], label: '138.6^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [221.4, -0.75], label: '221.4^\\circ', labelAnchor: 'se', r: 4 },
                            { at: [360, 1], label: '360^\\circ', labelAnchor: 'sw', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 0^\\circ,\\ 138.6^\\circ,\\ 221.4^\\circ,\\ 360^\\circ\\)'
        }
    },
    {
        id: 't4-034',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 34',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 6\\cos^2 x + \\cos x\\tan x = 5 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give any non-exact answers to 1 decimal place.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'tan identity', 'quadratic in sin', 'identities', 'multi-step'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the identity \\( \\tan x = \\sin x / \\cos x \\).',
                    workingLatex: '6\\cos^2 x + \\cos x \\cdot \\tfrac{\\sin x}{\\cos x} = 5',
                    explanation: 'Substitute the definition of tan.'
                },
                {
                    stepNumber: 2,
                    description: 'Cancel \\( \\cos x \\) in the second term.',
                    workingLatex: '6\\cos^2 x + \\sin x = 5',
                    explanation: 'Provided \\( \\cos x \\neq 0 \\). Check: if \\( \\cos x = 0 \\), the original LHS contains an undefined \\( \\tan x \\), so those points are excluded anyway.'
                },
                {
                    stepNumber: 3,
                    description: 'Replace \\( \\cos^2 x \\) using the Pythagorean identity.',
                    workingLatex: '6(1 - \\sin^2 x) + \\sin x = 5',
                    explanation: 'Converts to a quadratic in \\( \\sin x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Expand and rearrange.',
                    workingLatex: '6 - 6\\sin^2 x + \\sin x - 5 = 0',
                    explanation: 'Bring everything to one side.'
                },
                {
                    stepNumber: 5,
                    description: 'Multiply by \\( -1 \\) and tidy.',
                    workingLatex: '6\\sin^2 x - \\sin x - 1 = 0',
                    explanation: 'Standard quadratic form.'
                },
                {
                    stepNumber: 6,
                    description: 'Factorise.',
                    workingLatex: '(3\\sin x + 1)(2\\sin x - 1) = 0',
                    explanation: 'Expanding: \\( 6s^2 - 3s + 2s - 1 = 6s^2 - s - 1 \\). \\checkmark'
                },
                {
                    stepNumber: 7,
                    description: 'Solve \\( \\sin x = \\tfrac{1}{2} \\).',
                    workingLatex: 'x = 30^\\circ,\\ 150^\\circ',
                    explanation: 'Standard exact values; sine positive in Q1 and Q2.'
                },
                {
                    stepNumber: 8,
                    description: 'For \\( \\sin x = -\\tfrac{1}{3} \\), find the reference angle.',
                    workingLatex: '\\sin^{-1}\\!\\left(\\tfrac{1}{3}\\right) = 19.5^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 19.4712^\\circ \\); rounding gives \\( 19.5^\\circ \\).'
                },
                {
                    stepNumber: 9,
                    description: 'Sine negative in Q3 and Q4.',
                    workingLatex: 'x = 180^\\circ + 19.5^\\circ = 199.5^\\circ \\quad \\text{and} \\quad x = 360^\\circ - 19.5^\\circ = 340.5^\\circ',
                    explanation: 'Four solutions in total. The diagram below shows the sine curve meeting \\( y = \\tfrac{1}{2} \\) at \\( 30^\\circ, 150^\\circ \\) and \\( y = -\\tfrac{1}{3} \\) at \\( 199.5^\\circ, 340.5^\\circ \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 30, 90, 150, 180, 199.5, 270, 340.5, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [50, 1.15] }],
                        lines: [
                            { from: [0, 0.5], to: [360, 0.5], color: '#16a34a', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [305, 0.65] },
                            { from: [0, -1 / 3], to: [360, -1 / 3], color: '#dc2626', dashed: true, label: 'y = -\\tfrac{1}{3}', labelAt: [305, -0.5] },
                            { from: [30, 0], to: [30, 0.5], color: '#888', dashed: true },
                            { from: [150, 0], to: [150, 0.5], color: '#888', dashed: true },
                            { from: [199.5, 0], to: [199.5, -1 / 3], color: '#888', dashed: true },
                            { from: [340.5, 0], to: [340.5, -1 / 3], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [30, 0.5], label: '30^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [150, 0.5], label: '150^\\circ', labelAnchor: 'ne', r: 4 },
                            { at: [199.5, -1 / 3], label: '199.5^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [340.5, -1 / 3], label: '340.5^\\circ', labelAnchor: 'se', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 30^\\circ,\\ 150^\\circ,\\ 199.5^\\circ,\\ 340.5^\\circ\\)'
        }
    },
    {
        id: 't4-035',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 35',
        difficulty: 'Foundation',
        questionText: '(a) Show that \\( 9\\sin^2 2x + 3\\cos 2x = 7 \\) can be written as \\( 9\\cos^2 2x - 3\\cos 2x - 2 = 0 \\). \n\n \n\n (b) Hence solve \\( 9\\sin^2 2x + 3\\cos 2x = 7 \\) for \\( 0^\\circ \\leq x \\leq 180^\\circ \\). Give any non-exact answers to 1 decimal place.',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'show and solve', 'cos 2x', 'quadratic', 'Pythagorean identity', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): replace \\( \\sin^2 2x \\) using the Pythagorean identity applied to argument \\( 2x \\).',
                    workingLatex: '\\sin^2 2x = 1 - \\cos^2 2x',
                    explanation: 'The Pythagorean identity holds for any single argument, including \\( 2x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute.',
                    workingLatex: '9(1 - \\cos^2 2x) + 3\\cos 2x = 7',
                    explanation: 'Direct substitution.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and rearrange.',
                    workingLatex: '9 - 9\\cos^2 2x + 3\\cos 2x - 7 = 0',
                    explanation: 'Bring 7 across.'
                },
                {
                    stepNumber: 4,
                    description: 'Collect constants.',
                    workingLatex: '2 - 9\\cos^2 2x + 3\\cos 2x = 0',
                    explanation: '\\( 9 - 7 = 2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Multiply through by \\( -1 \\) to match the requested form.',
                    workingLatex: '9\\cos^2 2x - 3\\cos 2x - 2 = 0',
                    explanation: 'Part (a) shown.'
                },
                {
                    stepNumber: 6,
                    description: 'Part (b): let \\( u = \\cos 2x \\) and factorise the quadratic in \\( u \\).',
                    workingLatex: '(3u - 2)(3u + 1) = 0',
                    explanation: 'Expanding: \\( 9u^2 + 3u - 6u - 2 = 9u^2 - 3u - 2 \\). \\checkmark'
                },
                {
                    stepNumber: 7,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\cos 2x = \\tfrac{2}{3} \\quad \\text{or} \\quad \\cos 2x = -\\tfrac{1}{3}',
                    explanation: 'Two cases for \\( \\cos 2x \\).'
                },
                {
                    stepNumber: 8,
                    description: 'Adjust the interval for \\( 2x \\).',
                    workingLatex: '0^\\circ \\leq 2x \\leq 360^\\circ',
                    explanation: 'Double the limits of the original interval \\( [0^\\circ, 180^\\circ] \\).'
                },
                {
                    stepNumber: 9,
                    description: 'For \\( \\cos 2x = \\tfrac{2}{3} \\): reference angle.',
                    workingLatex: '\\cos^{-1}\\!\\left(\\tfrac{2}{3}\\right) = 48.1897^\\circ',
                    explanation: 'Keep extra precision while dividing.'
                },
                {
                    stepNumber: 10,
                    description: 'Cosine positive in Q1 and Q4 — list \\( 2x \\)-values.',
                    workingLatex: '2x = 48.1897^\\circ,\\ 311.8103^\\circ',
                    explanation: '4th quadrant: \\( 360^\\circ - 48.1897^\\circ \\).'
                },
                {
                    stepNumber: 11,
                    description: 'Divide by 2 and round.',
                    workingLatex: 'x = 24.1^\\circ,\\ 155.9^\\circ',
                    explanation: '\\( 48.1897 / 2 = 24.0949 \\to 24.1^\\circ \\); \\( 311.8103 / 2 = 155.9052 \\to 155.9^\\circ \\).'
                },
                {
                    stepNumber: 12,
                    description: 'For \\( \\cos 2x = -\\tfrac{1}{3} \\): reference angle.',
                    workingLatex: '\\cos^{-1}\\!\\left(\\tfrac{1}{3}\\right) = 70.5288^\\circ',
                    explanation: 'Use the magnitude.'
                },
                {
                    stepNumber: 13,
                    description: 'Cosine negative in Q2 and Q3 — list \\( 2x \\)-values.',
                    workingLatex: '2x = 109.4712^\\circ,\\ 250.5288^\\circ',
                    explanation: '\\( 180^\\circ - 70.5288^\\circ \\) and \\( 180^\\circ + 70.5288^\\circ \\).'
                },
                {
                    stepNumber: 14,
                    description: 'Divide by 2 and round.',
                    workingLatex: 'x = 54.7^\\circ,\\ 125.3^\\circ',
                    explanation: '\\( 109.4712 / 2 = 54.7356 \\to 54.7^\\circ \\); \\( 250.5288 / 2 = 125.2644 \\to 125.3^\\circ \\) (the second decimal is \\(6\\), so round up). The diagram below plots \\( y = \\cos 2x \\) on \\( [0^\\circ, 180^\\circ] \\); the two horizontal lines \\( y = \\tfrac{2}{3} \\) and \\( y = -\\tfrac{1}{3} \\) cut the curve in four places, giving the four solutions.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -3, xMax: 183, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 24.1, 54.7, 90, 125.3, 155.9, 180],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(2 * x), 0, 180, 180), color: '#1d4ed8', label: 'y = \\cos 2x', labelAt: [5, 1.15] }],
                        lines: [
                            { from: [0, 2 / 3], to: [180, 2 / 3], color: '#16a34a', dashed: true, label: 'y = \\tfrac{2}{3}', labelAt: [150, 0.82] },
                            { from: [0, -1 / 3], to: [180, -1 / 3], color: '#dc2626', dashed: true, label: 'y = -\\tfrac{1}{3}', labelAt: [150, -0.5] },
                            { from: [24.1, 0], to: [24.1, 2 / 3], color: '#888', dashed: true },
                            { from: [155.9, 0], to: [155.9, 2 / 3], color: '#888', dashed: true },
                            { from: [54.7, 0], to: [54.7, -1 / 3], color: '#888', dashed: true },
                            { from: [125.3, 0], to: [125.3, -1 / 3], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [24.1, 2 / 3], label: '24.1^\\circ', labelAnchor: 'nw', r: 3 },
                            { at: [155.9, 2 / 3], label: '155.9^\\circ', labelAnchor: 'ne', r: 3 },
                            { at: [54.7, -1 / 3], label: '54.7^\\circ', labelAnchor: 'sw', r: 3 },
                            { at: [125.3, -1 / 3], label: '125.3^\\circ', labelAnchor: 'se', r: 3 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 24.1^\\circ,\\ 54.7^\\circ,\\ 125.3^\\circ,\\ 155.9^\\circ\\)'
        }
    },

    // ─── Q36–70: Additional Trigonometric Equations ──────────────────────

    {
        id: 't4-036',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 36',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin x = 0.6 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'sin', 'basic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take inverse sine to find the reference angle.',
                    workingLatex: 'x_1 = \\sin^{-1}(0.6) = 36.9^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 36.8699^\\circ \\); rounds to \\( 36.9^\\circ \\). This is the 1st-quadrant solution.'
                },
                {
                    stepNumber: 2,
                    description: 'Use symmetry for the 2nd solution.',
                    workingLatex: 'x_2 = 180^\\circ - 36.9^\\circ = 143.1^\\circ',
                    explanation: 'Sine is also positive in the 2nd quadrant; \\( \\sin(180^\\circ - \\theta) = \\sin \\theta \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -1.2, yMax: 1.2,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), 0, 360, 100), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [50, 1.1] }],
                        lines: [{ from: [0, 0.6], to: [360, 0.6], color: '#dc2626', dashed: true, label: 'y = 0.6', labelAt: [300, 0.75] }],
                        points: [
                            { at: [36.9, 0.6], label: '36.9°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [143.1, 0.6], label: '143.1°', labelAnchor: 'ne', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 36.9^\\circ,\\ 143.1^\\circ\\)'
        }
    },
    {
        id: 't4-037',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 37',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\cos x = -0.4 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'cos', 'negative'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the reference angle using the magnitude.',
                    workingLatex: '\\cos^{-1}(0.4) = 66.4^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 66.4218^\\circ \\); rounds to \\( 66.4^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Cosine is negative in Q2 and Q3.',
                    workingLatex: 'x = 180^\\circ - 66.4^\\circ = 113.6^\\circ \\quad \\text{and} \\quad x = 180^\\circ + 66.4^\\circ = 246.4^\\circ',
                    explanation: '2nd quadrant: \\( 180^\\circ - \\) (ref). 3rd quadrant: \\( 180^\\circ + \\) (ref).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -1.2, yMax: 1.2,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 360, 100), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [40, 1.1] }],
                        lines: [{ from: [0, -0.4], to: [360, -0.4], color: '#dc2626', dashed: true, label: 'y = -0.4', labelAt: [290, -0.6] }],
                        points: [
                            { at: [113.6, -0.4], label: '113.6°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [246.4, -0.4], label: '246.4°', labelAnchor: 'ne', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 113.6^\\circ,\\ 246.4^\\circ\\)'
        }
    },
    {
        id: 't4-038',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 38',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\tan x = 2.5 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'tan', 'basic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take inverse tan to find the principal value.',
                    workingLatex: 'x_1 = \\tan^{-1}(2.5) = 68.2^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\( 68.1986^\\circ \\); rounds to \\( 68.2^\\circ \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Tan has period \\( 180^\\circ \\); add \\( 180^\\circ \\).',
                    workingLatex: 'x_2 = 68.2^\\circ + 180^\\circ = 248.2^\\circ',
                    explanation: 'The next solution lies in the 3rd quadrant; tan is also positive there.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -5, yMax: 5,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = tan x' : undefined, labelAt: i === 0 ? [30, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [0, 2.5], to: [360, 2.5], color: '#dc2626', dashed: true, label: 'y = 2.5', labelAt: [320, 3] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [68.2, 2.5], label: '68.2°', labelAnchor: 'nw', color: '#dc2626' },
                            { at: [248.2, 2.5], label: '248.2°', labelAnchor: 'nw', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 68.2^\\circ,\\ 248.2^\\circ\\)'
        }
    },
    {
        id: 't4-039',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 39',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\sin x + 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'rearrange', 'sin', 'exact'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange to isolate \\( \\sin x \\).',
                    workingLatex: '\\sin x = -\\tfrac{1}{2}',
                    explanation: 'Subtract 1, then divide by 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Reference angle from the magnitude.',
                    workingLatex: '\\sin^{-1}\\!\\left(\\tfrac{1}{2}\\right) = 30^\\circ',
                    explanation: 'Standard exact value.'
                },
                {
                    stepNumber: 3,
                    description: 'Sine negative in Q3 and Q4.',
                    workingLatex: 'x = 180^\\circ + 30^\\circ = 210^\\circ \\quad \\text{and} \\quad x = 360^\\circ - 30^\\circ = 330^\\circ',
                    explanation: '3rd quadrant: \\(180^\\circ + 30^\\circ\\). 4th quadrant: \\(360^\\circ - 30^\\circ\\). The diagram below shows the sine curve meeting \\( y = -\\tfrac{1}{2} \\) at exactly these two x-values.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 180, 210, 270, 330, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [50, 1.15] }],
                        lines: [
                            { from: [0, -0.5], to: [360, -0.5], color: '#dc2626', dashed: true, label: 'y = -\\tfrac{1}{2}', labelAt: [305, -0.7] },
                            { from: [210, 0], to: [210, -0.5], color: '#888', dashed: true },
                            { from: [330, 0], to: [330, -0.5], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [210, -0.5], label: '210^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [330, -0.5], label: '330^\\circ', labelAnchor: 'se', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 210^\\circ,\\ 330^\\circ\\)'
        }
    },
    {
        id: 't4-040',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 40',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\cos x - \\sqrt{3} = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'rearrange', 'cos', 'exact'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange.',
                    workingLatex: '\\cos x = \\tfrac{\\sqrt{3}}{2}',
                    explanation: 'Add \\( \\sqrt{3} \\), then divide by 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Reference angle from the standard triangle.',
                    workingLatex: '\\cos 30^\\circ = \\tfrac{\\sqrt{3}}{2} \\Rightarrow \\text{ref angle} = 30^\\circ',
                    explanation: 'Recognised exact value.'
                },
                {
                    stepNumber: 3,
                    description: 'Cosine positive in Q1 and Q4.',
                    workingLatex: 'x = 30^\\circ \\quad \\text{and} \\quad x = 360^\\circ - 30^\\circ = 330^\\circ',
                    explanation: '1st quadrant: ref. 4th quadrant: \\(360^\\circ - 30^\\circ\\). The diagram below shows the cosine curve meeting \\( y = \\tfrac{\\sqrt{3}}{2} \\) at exactly these two x-values.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 30, 90, 180, 270, 330, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [40, 1.15] }],
                        lines: [
                            { from: [0, Math.sqrt(3) / 2], to: [360, Math.sqrt(3) / 2], color: '#16a34a', dashed: true, label: 'y = \\tfrac{\\sqrt{3}}{2}', labelAt: [300, 1.05] },
                            { from: [30, 0], to: [30, Math.sqrt(3) / 2], color: '#888', dashed: true },
                            { from: [330, 0], to: [330, Math.sqrt(3) / 2], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [30, Math.sqrt(3) / 2], label: '30^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [330, Math.sqrt(3) / 2], label: '330^\\circ', labelAnchor: 'ne', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 30^\\circ,\\ 330^\\circ\\)'
        }
    },
    {
        id: 't4-041',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 41',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\tan x + 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'tan', 'rearrange'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange.',
                    workingLatex: '\\tan x = -1',
                    explanation: 'Subtract 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Reference angle and quadrants.',
                    workingLatex: '\\tan^{-1}(1) = 45^\\circ; \\text{ tan negative in Q2 and Q4}',
                    explanation: 'Standard exact value.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply quadrant formulas.',
                    workingLatex: 'x = 180^\\circ - 45^\\circ = 135^\\circ \\quad \\text{and} \\quad x = 360^\\circ - 45^\\circ = 315^\\circ',
                    explanation: 'Two exact solutions. The diagram below shows \\( y = \\tan x \\) crossing \\( y = -1 \\) at exactly these two x-values, one in each branch between the asymptotes at \\( 90^\\circ \\) and \\( 270^\\circ \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -5, yMax: 5,
                        xTicks: [0, 90, 135, 180, 270, 315, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({
                            points: seg,
                            color: '#1d4ed8',
                            label: i === 0 ? 'y = \\tan x' : undefined,
                            labelAt: i === 0 ? [10, 4] as [number, number] : undefined
                        })),
                        lines: [
                            { from: [0, -1], to: [360, -1], color: '#dc2626', dashed: true, label: 'y = -1', labelAt: [320, -1.6] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [135, -1], label: '135^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [315, -1], label: '315^\\circ', labelAnchor: 'sw', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 135^\\circ,\\ 315^\\circ\\)'
        }
    },
    {
        id: 't4-042',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 42',
        difficulty: 'Standard',
        questionText: 'Solve \\( \\cos^2 x + \\sin x \\cos x = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'identities', 'factorise', 'tan x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take out the common factor of \\( \\cos x \\).',
                    workingLatex: '\\cos x \\,(\\cos x + \\sin x) = 0',
                    explanation: 'Both terms share a factor of \\( \\cos x \\), so we factor rather than divide (dividing by \\( \\cos x \\) would lose the \\( \\cos x = 0 \\) solutions).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\cos x = 0 \\quad \\text{or} \\quad \\cos x + \\sin x = 0',
                    explanation: 'A product is zero exactly when one of its factors is zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Case 1: \\( \\cos x = 0 \\).',
                    workingLatex: 'x = 90^\\circ,\\ 270^\\circ',
                    explanation: 'Standard zeros of cosine in \\( [0^\\circ, 360^\\circ] \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Case 2: divide \\( \\cos x + \\sin x = 0 \\) by \\( \\cos x \\).',
                    workingLatex: '1 + \\tan x = 0 \\;\\Longrightarrow\\; \\tan x = -1',
                    explanation: 'Use the identity \\( \\tan x = \\dfrac{\\sin x}{\\cos x} \\). Dividing by \\( \\cos x \\) is safe here because Step 3 already covered the case \\( \\cos x = 0 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve \\( \\tan x = -1 \\) and combine.',
                    workingLatex: 'x = 135^\\circ,\\ 315^\\circ',
                    explanation: 'Reference angle \\( 45^\\circ \\); tan is negative in Q2 and Q4. The diagram below sketches \\( y = \\tan x \\) and \\( y = -1 \\): their intersections give \\( x = 135^\\circ,\\ 315^\\circ \\), while the vertical asymptotes at \\( x = 90^\\circ,\\ 270^\\circ \\) correspond to the \\( \\cos x = 0 \\) solutions from Case 1.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -5, yMax: 5,
                        xTicks: [0, 90, 135, 180, 270, 315, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = tan x' : undefined, labelAt: i === 0 ? [30, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [0, -1], to: [360, -1], color: '#dc2626', dashed: true, label: 'y = -1', labelAt: [320, -1.6] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [135, -1], label: '135°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [315, -1], label: '315°', labelAnchor: 'sw', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 90^\\circ,\\ 135^\\circ,\\ 270^\\circ,\\ 315^\\circ\\)'
        }
    },
    {
        id: 't4-043',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 43',
        difficulty: 'Standard',
        questionText: 'Solve \\( \\sin^2 x = \\sin x \\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'identities', 'factorise', 'tan x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Bring everything to one side.',
                    workingLatex: '\\sin^2 x - \\sin x \\cos x = 0',
                    explanation: 'Never divide by \\( \\sin x \\) here — that would silently discard every solution where \\( \\sin x = 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Take out the common factor of \\( \\sin x \\).',
                    workingLatex: '\\sin x \\,(\\sin x - \\cos x) = 0',
                    explanation: 'Now apply the zero-product principle: \\( \\sin x = 0 \\) or \\( \\sin x - \\cos x = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Case 1: \\( \\sin x = 0 \\).',
                    workingLatex: 'x = 0^\\circ,\\ 180^\\circ,\\ 360^\\circ',
                    explanation: 'Standard zeros of sine — sketch \\( y = \\sin x \\) and read off where it meets \\( y = 0 \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [40, 1.15] }],
                        lines: [{ from: [0, 0], to: [360, 0], color: '#dc2626', dashed: true, label: 'y = 0', labelAt: [320, 0.15] }],
                        points: [
                            { at: [0, 0], label: '0^\\circ', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [180, 0], label: '180^\\circ', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [360, 0], label: '360^\\circ', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                },
                {
                    stepNumber: 4,
                    description: 'Case 2: divide \\( \\sin x - \\cos x = 0 \\) by \\( \\cos x \\).',
                    workingLatex: '\\tan x - 1 = 0 \\;\\Longrightarrow\\; \\tan x = 1',
                    explanation: 'Use \\( \\tan x = \\dfrac{\\sin x}{\\cos x} \\). If \\( \\cos x = 0 \\) then the original equation gives \\( 1 = 0 \\), impossible — no solutions are lost.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve \\( \\tan x = 1 \\) and combine.',
                    workingLatex: 'x = 45^\\circ,\\ 225^\\circ',
                    explanation: 'Reference angle \\( 45^\\circ \\); tan positive in Q1 and Q3. Sketch \\( y = \\tan x \\) and read off where it meets \\( y = 1 \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -5, yMax: 5,
                        xTicks: [0, 45, 90, 180, 225, 270, 360],
                        yTicks: [-4, -2, 0, 1, 2, 4],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = tan x' : undefined, labelAt: i === 0 ? [30, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#dc2626', dashed: true, label: 'y = 1', labelAt: [320, 1.5] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [45, 1], label: '45°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [225, 1], label: '225°', labelAnchor: 'sw', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 0^\\circ,\\ 45^\\circ,\\ 180^\\circ,\\ 225^\\circ,\\ 360^\\circ\\)'
        }
    },
    {
        id: 't4-044',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 44',
        difficulty: 'Standard',
        questionText: 'Solve \\( 3\\sin^2 x = \\cos^2 x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'identities', 'Pythagorean', 'sin'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Eliminate \\( \\cos^2 x \\) using \\( \\cos^2 x = 1 - \\sin^2 x \\).',
                    workingLatex: '3\\sin^2 x = 1 - \\sin^2 x',
                    explanation: 'This is the Pythagorean identity \\( \\sin^2 x + \\cos^2 x = 1 \\) rearranged. The aim is a single trig function.'
                },
                {
                    stepNumber: 2,
                    description: 'Collect like terms.',
                    workingLatex: '4\\sin^2 x = 1 \\;\\Longrightarrow\\; \\sin^2 x = \\tfrac{1}{4}',
                    explanation: 'Add \\( \\sin^2 x \\) to both sides, then divide by 4.'
                },
                {
                    stepNumber: 3,
                    description: 'Take both square roots.',
                    workingLatex: '\\sin x = \\pm \\tfrac{1}{2}',
                    explanation: 'Both signs must be considered; each gives two solutions in \\([0^\\circ, 360^\\circ]\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( \\sin x = \\tfrac{1}{2} \\) and \\( \\sin x = -\\tfrac{1}{2} \\).',
                    workingLatex: 'x = 30^\\circ,\\ 150^\\circ \\quad \\text{and} \\quad x = 210^\\circ,\\ 330^\\circ',
                    explanation: 'Reference angle \\( 30^\\circ \\); positive in Q1, Q2 and negative in Q3, Q4. Sketch \\( y = \\sin x \\) and read off where it meets \\( y = \\tfrac{1}{2} \\) and \\( y = -\\tfrac{1}{2} \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 30, 90, 150, 180, 210, 270, 330, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [40, 1.15] }],
                        lines: [
                            { from: [0, 0.5], to: [360, 0.5], color: '#dc2626', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [305, 0.65] },
                            { from: [0, -0.5], to: [360, -0.5], color: '#16a34a', dashed: true, label: 'y = -\\tfrac{1}{2}', labelAt: [305, -0.7] }
                        ],
                        points: [
                            { at: [30, 0.5], label: '30°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [150, 0.5], label: '150°', labelAnchor: 'se', color: '#dc2626' },
                            { at: [210, -0.5], label: '210°', labelAnchor: 'sw', color: '#16a34a' },
                            { at: [330, -0.5], label: '330°', labelAnchor: 'se', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 30^\\circ,\\ 150^\\circ,\\ 210^\\circ,\\ 330^\\circ\\)'
        }
    },
    {
        id: 't4-045',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 45',
        difficulty: 'Standard',
        questionText: 'Solve \\( 2\\sin^2 x = 3\\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'identities', 'Pythagorean', 'quadratic in cos'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\sin^2 x \\) using \\( \\sin^2 x = 1 - \\cos^2 x \\).',
                    workingLatex: '2(1 - \\cos^2 x) = 3\\cos x',
                    explanation: 'The equation mixes \\( \\sin^2 x \\) and \\( \\cos x \\); convert to a single trig function (cosine) using the Pythagorean identity.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and rearrange into a quadratic in \\( \\cos x \\).',
                    workingLatex: '2\\cos^2 x + 3\\cos x - 2 = 0',
                    explanation: '\\( 2 - 2\\cos^2 x = 3\\cos x \\Rightarrow -2\\cos^2 x - 3\\cos x + 2 = 0 \\), then multiply by \\( -1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise (treat \\( c = \\cos x \\)).',
                    workingLatex: '(2\\cos x - 1)(\\cos x + 2) = 0',
                    explanation: 'Check: \\( (2c-1)(c+2) = 2c^2 + 4c - c - 2 = 2c^2 + 3c - 2 \\). \\( \\checkmark \\)'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\cos x = \\tfrac{1}{2} \\quad \\text{or} \\quad \\cos x = -2 \\text{ (reject)}',
                    explanation: '\\( \\cos x \\in [-1,1] \\), so \\( \\cos x = -2 \\) has no solution.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve \\( \\cos x = \\tfrac{1}{2} \\).',
                    workingLatex: 'x = 60^\\circ,\\ 300^\\circ',
                    explanation: 'Reference angle \\( 60^\\circ \\); cosine positive in Q1 and Q4. Sketch \\( y = \\cos x \\) and read off where it meets \\( y = \\tfrac{1}{2} \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 60, 90, 180, 270, 300, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [40, 1.15] }],
                        lines: [{ from: [0, 0.5], to: [360, 0.5], color: '#dc2626', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [305, 0.65] }],
                        points: [
                            { at: [60, 0.5], label: '60°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [300, 0.5], label: '300°', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 60^\\circ,\\ 300^\\circ\\)'
        }
    },
    {
        id: 't4-046',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 46',
        difficulty: 'Standard',
        questionText: 'Solve \\( 4\\cos^2 x = 4\\sin x + 1 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'identities', 'Pythagorean', 'quadratic in sin'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\cos^2 x \\) using \\( \\cos^2 x = 1 - \\sin^2 x \\).',
                    workingLatex: '4(1 - \\sin^2 x) = 4\\sin x + 1',
                    explanation: 'Pythagorean identity. The aim is a single trig function (here, sine).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and rearrange into a quadratic in \\( \\sin x \\).',
                    workingLatex: '4\\sin^2 x + 4\\sin x - 3 = 0',
                    explanation: '\\( 4 - 4\\sin^2 x = 4\\sin x + 1 \\Rightarrow -4\\sin^2 x - 4\\sin x + 3 = 0 \\), then multiply by \\(-1\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise (treat \\( s = \\sin x \\)).',
                    workingLatex: '(2\\sin x - 1)(2\\sin x + 3) = 0',
                    explanation: 'Check: \\( (2s-1)(2s+3) = 4s^2 + 6s - 2s - 3 = 4s^2 + 4s - 3 \\). \\( \\checkmark \\)'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\sin x = \\tfrac{1}{2} \\quad \\text{or} \\quad \\sin x = -\\tfrac{3}{2} \\text{ (reject)}',
                    explanation: '\\( \\sin x \\in [-1,1] \\), so \\( \\sin x = -\\tfrac{3}{2} \\) has no solution.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve \\( \\sin x = \\tfrac{1}{2} \\).',
                    workingLatex: 'x = 30^\\circ,\\ 150^\\circ',
                    explanation: 'Reference angle \\( 30^\\circ \\); sine positive in Q1 and Q2. Sketch \\( y = \\sin x \\) and read off where it meets \\( y = \\tfrac{1}{2} \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 30, 90, 150, 180, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [40, 1.15] }],
                        lines: [{ from: [0, 0.5], to: [360, 0.5], color: '#dc2626', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [305, 0.65] }],
                        points: [
                            { at: [30, 0.5], label: '30°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [150, 0.5], label: '150°', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 30^\\circ,\\ 150^\\circ\\)'
        }
    },
    {
        id: 't4-047',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 47',
        difficulty: 'Standard',
        questionText: 'Solve \\( \\sin x \\tan x = \\sin x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'identities', 'tan x', 'factorise'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Bring everything to one side.',
                    workingLatex: '\\sin x \\tan x - \\sin x = 0',
                    explanation: 'Never divide by \\( \\sin x \\) — that would lose every solution where \\( \\sin x = 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Take out the common factor of \\( \\sin x \\).',
                    workingLatex: '\\sin x \\,(\\tan x - 1) = 0',
                    explanation: 'Factor first, then apply the zero-product principle.'
                },
                {
                    stepNumber: 3,
                    description: 'Case 1: \\( \\sin x = 0 \\).',
                    workingLatex: 'x = 0^\\circ,\\ 180^\\circ,\\ 360^\\circ',
                    explanation: 'Standard zeros of sine. (At each of these, \\( \\cos x \\neq 0 \\), so \\( \\tan x \\) is defined and the original equation holds: \\( 0 \\cdot \\tan x = 0 \\). \\( \\checkmark \\)) Sketch \\( y = \\sin x \\) and read off where it meets \\( y = 0 \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [40, 1.15] }],
                        lines: [{ from: [0, 0], to: [360, 0], color: '#dc2626', dashed: true, label: 'y = 0', labelAt: [320, 0.15] }],
                        points: [
                            { at: [0, 0], label: '0°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [180, 0], label: '180°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [360, 0], label: '360°', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                },
                {
                    stepNumber: 4,
                    description: 'Case 2: \\( \\tan x = 1 \\).',
                    workingLatex: 'x = 45^\\circ,\\ 225^\\circ',
                    explanation: 'Reference angle \\( 45^\\circ \\); tan positive in Q1 and Q3. Sketch \\( y = \\tan x \\) and read off where it meets \\( y = 1 \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -5, yMax: 5,
                        xTicks: [0, 45, 90, 180, 225, 270, 360],
                        yTicks: [-4, -2, 0, 1, 2, 4],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = tan x' : undefined, labelAt: i === 0 ? [30, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#dc2626', dashed: true, label: 'y = 1', labelAt: [320, 1.5] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [45, 1], label: '45°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [225, 1], label: '225°', labelAnchor: 'sw', color: '#dc2626' }
                        ]
                    }
                },
                {
                    stepNumber: 5,
                    description: 'Check that \\( x = 90^\\circ, 270^\\circ \\) are not solutions.',
                    workingLatex: '\\tan x \\text{ undefined at } 90^\\circ \\text{ and } 270^\\circ',
                    explanation: 'These points must be excluded from the domain of the original equation, since they are the asymptotes of \\( y = \\tan x \\).'
                }
            ],
            finalAnswer: '\\(x = 0^\\circ,\\ 45^\\circ,\\ 180^\\circ,\\ 225^\\circ,\\ 360^\\circ\\)'
        }
    },
    {
        id: 't4-048',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 48',
        difficulty: 'Standard',
        questionText: 'Solve \\( 6\\sin^2 x + \\cos x = 5 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p. where not exact.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'identities', 'Pythagorean', 'quadratic in cos'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\sin^2 x \\) using \\( \\sin^2 x = 1 - \\cos^2 x \\).',
                    workingLatex: '6(1 - \\cos^2 x) + \\cos x = 5',
                    explanation: 'Reduce the equation to a single trig function (cosine).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and rearrange into a quadratic in \\( \\cos x \\).',
                    workingLatex: '6\\cos^2 x - \\cos x - 1 = 0',
                    explanation: '\\( 6 - 6\\cos^2 x + \\cos x = 5 \\Rightarrow -6\\cos^2 x + \\cos x + 1 = 0 \\), then multiply by \\(-1\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise (treat \\( c = \\cos x \\)).',
                    workingLatex: '(3\\cos x + 1)(2\\cos x - 1) = 0',
                    explanation: 'Check: \\( (3c+1)(2c-1) = 6c^2 - 3c + 2c - 1 = 6c^2 - c - 1 \\). \\( \\checkmark \\)'
                },
                {
                    stepNumber: 4,
                    description: 'Case 1: \\( \\cos x = \\tfrac{1}{2} \\).',
                    workingLatex: 'x = 60^\\circ,\\ 300^\\circ',
                    explanation: 'Reference angle \\( 60^\\circ \\); cosine positive in Q1 and Q4.'
                },
                {
                    stepNumber: 5,
                    description: 'Case 2: \\( \\cos x = -\\tfrac{1}{3} \\).',
                    workingLatex: '\\cos^{-1}\\!\\left(\\tfrac{1}{3}\\right) = 70.5^\\circ;\\ x = 109.5^\\circ,\\ 250.5^\\circ',
                    explanation: 'Reference angle \\(70.53^\\circ\\); cosine negative in Q2 and Q3: \\(180^\\circ - 70.53^\\circ\\) and \\(180^\\circ + 70.53^\\circ\\). Sketch \\( y = \\cos x \\) and read off where it meets \\( y = \\tfrac{1}{2} \\) and \\( y = -\\tfrac{1}{3} \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 60, 109.5, 180, 250.5, 300, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [40, 1.15] }],
                        lines: [
                            { from: [0, 0.5], to: [360, 0.5], color: '#dc2626', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [305, 0.65] },
                            { from: [0, -1 / 3], to: [360, -1 / 3], color: '#16a34a', dashed: true, label: 'y = -\\tfrac{1}{3}', labelAt: [305, -0.5] }
                        ],
                        points: [
                            { at: [60, 0.5], label: '60°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [300, 0.5], label: '300°', labelAnchor: 'se', color: '#dc2626' },
                            { at: [109.5, -1 / 3], label: '109.5°', labelAnchor: 'se', color: '#16a34a' },
                            { at: [250.5, -1 / 3], label: '250.5°', labelAnchor: 'sw', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 60^\\circ,\\ 109.5^\\circ,\\ 250.5^\\circ,\\ 300^\\circ\\)'
        }
    },
    {
        id: 't4-049',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 49',
        difficulty: 'Challenge',
        questionText: 'Solve \\( (\\sin x + \\cos x)^2 = 1 + \\sin x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'identities', 'Pythagorean', 'expand and factorise'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the bracket on the left.',
                    workingLatex: '\\sin^2 x + 2\\sin x \\cos x + \\cos^2 x = 1 + \\sin x',
                    explanation: '\\( (a+b)^2 = a^2 + 2ab + b^2 \\) with \\( a = \\sin x,\\ b = \\cos x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\sin^2 x + \\cos^2 x = 1 \\) to the underlined pair.',
                    workingLatex: '1 + 2\\sin x \\cos x = 1 + \\sin x',
                    explanation: 'The Pythagorean identity collapses two of the three terms on the left.'
                },
                {
                    stepNumber: 3,
                    description: 'Cancel the \\( 1 \\) and bring everything to one side.',
                    workingLatex: '2\\sin x \\cos x - \\sin x = 0',
                    explanation: 'Subtract \\( 1 \\) from both sides; subtract \\( \\sin x \\). Never divide by \\( \\sin x \\) — that loses every solution where \\( \\sin x = 0 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Take out the common factor of \\( \\sin x \\).',
                    workingLatex: '\\sin x \\,(2\\cos x - 1) = 0',
                    explanation: 'A product is zero exactly when one of its factors is zero.'
                },
                {
                    stepNumber: 5,
                    description: 'Case 1: \\( \\sin x = 0 \\).',
                    workingLatex: 'x = 0^\\circ,\\ 180^\\circ,\\ 360^\\circ',
                    explanation: 'Standard zeros of sine — sketch \\( y = \\sin x \\) and read off where it meets \\( y = 0 \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [40, 1.15] }],
                        lines: [{ from: [0, 0], to: [360, 0], color: '#dc2626', dashed: true, label: 'y = 0', labelAt: [320, 0.15] }],
                        points: [
                            { at: [0, 0], label: '0°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [180, 0], label: '180°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [360, 0], label: '360°', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                },
                {
                    stepNumber: 6,
                    description: 'Case 2: \\( \\cos x = \\tfrac{1}{2} \\).',
                    workingLatex: 'x = 60^\\circ,\\ 300^\\circ',
                    explanation: 'Reference angle \\( 60^\\circ \\); cosine positive in Q1 and Q4. Sketch \\( y = \\cos x \\) and read off where it meets \\( y = \\tfrac{1}{2} \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 60, 90, 180, 270, 300, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [40, 1.15] }],
                        lines: [{ from: [0, 0.5], to: [360, 0.5], color: '#dc2626', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [305, 0.65] }],
                        points: [
                            { at: [60, 0.5], label: '60°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [300, 0.5], label: '300°', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 0^\\circ,\\ 60^\\circ,\\ 180^\\circ,\\ 300^\\circ,\\ 360^\\circ\\)'
        }
    },
    {
        id: 't4-050',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 50',
        difficulty: 'Challenge',
        questionText: 'Solve \\( (\\sin x + \\cos x)(\\sin x - \\cos x) = \\tfrac{1}{2} \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'identities', 'difference of squares', 'Pythagorean'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the difference of two squares.',
                    workingLatex: '\\sin^2 x - \\cos^2 x = \\tfrac{1}{2}',
                    explanation: '\\( (a+b)(a-b) = a^2 - b^2 \\) with \\( a = \\sin x,\\ b = \\cos x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Replace \\( \\sin^2 x \\) using \\( \\sin^2 x = 1 - \\cos^2 x \\) to get a single trig function.',
                    workingLatex: '(1 - \\cos^2 x) - \\cos^2 x = \\tfrac{1}{2}',
                    explanation: 'Pythagorean identity. We could equally have eliminated \\( \\cos^2 x \\) — the algebra works out the same.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify and isolate \\( \\cos^2 x \\).',
                    workingLatex: '1 - 2\\cos^2 x = \\tfrac{1}{2} \\;\\Longrightarrow\\; \\cos^2 x = \\tfrac{1}{4}',
                    explanation: 'Subtract \\( 1 \\) from both sides; divide by \\( -2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Take both square roots.',
                    workingLatex: '\\cos x = \\pm \\tfrac{1}{2}',
                    explanation: 'Both signs must be considered — squaring introduces neither extra nor lost solutions here because we never squared the original equation.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve \\( \\cos x = \\tfrac{1}{2} \\) and \\( \\cos x = -\\tfrac{1}{2} \\).',
                    workingLatex: 'x = 60^\\circ,\\ 300^\\circ \\quad \\text{and} \\quad x = 120^\\circ,\\ 240^\\circ',
                    explanation: 'Reference angle \\( 60^\\circ \\) in both cases; positive in Q1, Q4 and negative in Q2, Q3. Sketch \\( y = \\cos x \\) and read off where it meets \\( y = \\tfrac{1}{2} \\) and \\( y = -\\tfrac{1}{2} \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 60, 90, 120, 180, 240, 270, 300, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [40, 1.15] }],
                        lines: [
                            { from: [0, 0.5], to: [360, 0.5], color: '#dc2626', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [305, 0.65] },
                            { from: [0, -0.5], to: [360, -0.5], color: '#16a34a', dashed: true, label: 'y = -\\tfrac{1}{2}', labelAt: [305, -0.7] }
                        ],
                        points: [
                            { at: [60, 0.5], label: '60°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [300, 0.5], label: '300°', labelAnchor: 'se', color: '#dc2626' },
                            { at: [120, -0.5], label: '120°', labelAnchor: 'se', color: '#16a34a' },
                            { at: [240, -0.5], label: '240°', labelAnchor: 'sw', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 60^\\circ,\\ 120^\\circ,\\ 240^\\circ,\\ 300^\\circ\\)'
        }
    },
    {
        id: 't4-051',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 51',
        difficulty: 'Challenge',
        questionText: 'Solve \\( \\sin^3 x + \\sin x \\cos^2 x = \\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'identities', 'Pythagorean', 'tan x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factor the left-hand side.',
                    workingLatex: '\\sin x \\,(\\sin^2 x + \\cos^2 x) = \\cos x',
                    explanation: 'Both terms on the left share a factor of \\( \\sin x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\sin^2 x + \\cos^2 x = 1 \\).',
                    workingLatex: '\\sin x = \\cos x',
                    explanation: 'The bracket collapses to \\( 1 \\); the whole left-hand side reduces to just \\( \\sin x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by \\( \\cos x \\) to convert to tan.',
                    workingLatex: '\\tan x = 1',
                    explanation: 'No solutions are lost: if \\( \\cos x = 0 \\) then from \\( \\sin x = \\cos x \\) we would also need \\( \\sin x = 0 \\), but \\( \\sin^2 x + \\cos^2 x = 1 \\) makes that impossible.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( \\tan x = 1 \\) in \\([0^\\circ, 360^\\circ]\\).',
                    workingLatex: 'x = 45^\\circ,\\ 225^\\circ',
                    explanation: 'Reference angle \\( 45^\\circ \\); tan positive in Q1 and Q3. Sketch \\( y = \\tan x \\) and read off where it meets \\( y = 1 \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -5, yMax: 5,
                        xTicks: [0, 45, 90, 180, 225, 270, 360],
                        yTicks: [-4, -2, 0, 1, 2, 4],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = tan x' : undefined, labelAt: i === 0 ? [30, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#dc2626', dashed: true, label: 'y = 1', labelAt: [320, 1.5] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [45, 1], label: '45°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [225, 1], label: '225°', labelAnchor: 'sw', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 45^\\circ,\\ 225^\\circ\\)'
        }
    },
    {
        id: 't4-052',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 52',
        difficulty: 'Challenge',
        questionText: 'Solve \\( \\sin x + \\cos x = 1 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'identities', 'squaring', 'check for spurious'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Square both sides — but be aware this may introduce extraneous solutions.',
                    workingLatex: '(\\sin x + \\cos x)^2 = 1^2',
                    explanation: 'Squaring is reversible only when both sides have the same sign. Any candidate must be checked in the original equation at the end.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and apply \\( \\sin^2 x + \\cos^2 x = 1 \\).',
                    workingLatex: '1 + 2\\sin x \\cos x = 1',
                    explanation: 'The Pythagorean identity collapses \\( \\sin^2 x + \\cos^2 x \\) to \\( 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify and apply the zero-product principle.',
                    workingLatex: '\\sin x \\cos x = 0 \\;\\Longrightarrow\\; \\sin x = 0 \\text{ or } \\cos x = 0',
                    explanation: 'Subtract \\( 1 \\); divide by \\( 2 \\). A product is zero exactly when one factor is zero. Sketch \\( y = \\sin x \\) to read off the candidates from \\( \\sin x = 0 \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [40, 1.15] }],
                        lines: [{ from: [0, 0], to: [360, 0], color: '#dc2626', dashed: true, label: 'y = 0', labelAt: [320, 0.15] }],
                        points: [
                            { at: [0, 0], label: '0°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [180, 0], label: '180°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [360, 0], label: '360°', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                },
                {
                    stepNumber: 4,
                    description: 'List candidate angles.',
                    workingLatex: 'x = 0^\\circ,\\ 90^\\circ,\\ 180^\\circ,\\ 270^\\circ,\\ 360^\\circ',
                    explanation: 'Three from \\( \\sin x = 0 \\) (above) and two from \\( \\cos x = 0 \\) — sketch \\( y = \\cos x \\) to read off the latter.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [40, 1.15] }],
                        lines: [{ from: [0, 0], to: [360, 0], color: '#dc2626', dashed: true, label: 'y = 0', labelAt: [320, 0.15] }],
                        points: [
                            { at: [90, 0], label: '90°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [270, 0], label: '270°', labelAnchor: 'sw', color: '#dc2626' }
                        ]
                    }
                },
                {
                    stepNumber: 5,
                    description: 'Check every candidate in the ORIGINAL equation \\( \\sin x + \\cos x = 1 \\).',
                    workingLatex: '\\begin{aligned} 0^\\circ&: 0 + 1 = 1 \\;\\checkmark \\\\ 90^\\circ&: 1 + 0 = 1 \\;\\checkmark \\\\ 180^\\circ&: 0 + (-1) = -1 \\;\\times \\\\ 270^\\circ&: -1 + 0 = -1 \\;\\times \\\\ 360^\\circ&: 0 + 1 = 1 \\;\\checkmark \\end{aligned}',
                    explanation: 'Squaring also satisfies \\( \\sin x + \\cos x = -1 \\), which is why \\( 180^\\circ \\) and \\( 270^\\circ \\) appeared as candidates. They must be discarded.'
                }
            ],
            finalAnswer: '\\(x = 0^\\circ,\\ 90^\\circ,\\ 360^\\circ\\)'
        }
    },
    {
        id: 't4-053',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 53',
        difficulty: 'Challenge',
        questionText: 'Solve \\( \\cos^2 x - \\sin^2 x = \\sin x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'identities', 'Pythagorean', 'quadratic in sin'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\cos^2 x \\) using \\( \\cos^2 x = 1 - \\sin^2 x \\) to get a single trig function.',
                    workingLatex: '(1 - \\sin^2 x) - \\sin^2 x = \\sin x',
                    explanation: 'Pythagorean identity. We choose to keep sine because the right-hand side is already \\( \\sin x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the left-hand side.',
                    workingLatex: '1 - 2\\sin^2 x = \\sin x',
                    explanation: 'Combine the two \\( \\sin^2 x \\) terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange into a quadratic in \\( \\sin x \\).',
                    workingLatex: '2\\sin^2 x + \\sin x - 1 = 0',
                    explanation: 'Move every term to one side; multiply by \\( -1 \\) to give a positive leading coefficient.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise (treat \\( s = \\sin x \\)).',
                    workingLatex: '(2\\sin x - 1)(\\sin x + 1) = 0',
                    explanation: 'Check: \\( (2s-1)(s+1) = 2s^2 + 2s - s - 1 = 2s^2 + s - 1 \\). \\( \\checkmark \\)'
                },
                {
                    stepNumber: 5,
                    description: 'Case 1: \\( \\sin x = \\tfrac{1}{2} \\).',
                    workingLatex: 'x = 30^\\circ,\\ 150^\\circ',
                    explanation: 'Reference angle \\( 30^\\circ \\); sine positive in Q1 and Q2.'
                },
                {
                    stepNumber: 6,
                    description: 'Case 2: \\( \\sin x = -1 \\).',
                    workingLatex: 'x = 270^\\circ',
                    explanation: 'Sine attains \\( -1 \\) only at \\( 270^\\circ \\) in \\([0^\\circ, 360^\\circ]\\). Sketch \\( y = \\sin x \\) and read off where it meets \\( y = \\tfrac{1}{2} \\) and \\( y = -1 \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 30, 90, 150, 180, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [40, 1.15] }],
                        lines: [
                            { from: [0, 0.5], to: [360, 0.5], color: '#dc2626', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [305, 0.65] },
                            { from: [0, -1], to: [360, -1], color: '#16a34a', dashed: true, label: 'y = -1', labelAt: [305, -1.2] }
                        ],
                        points: [
                            { at: [30, 0.5], label: '30°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [150, 0.5], label: '150°', labelAnchor: 'se', color: '#dc2626' },
                            { at: [270, -1], label: '270°', labelAnchor: 'sw', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 30^\\circ,\\ 150^\\circ,\\ 270^\\circ\\)'
        }
    },
    {
        id: 't4-054',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 54',
        difficulty: 'Challenge',
        questionText: 'Solve \\( (1 - \\cos x)(1 + \\cos x) = \\sin x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'identities', 'difference of squares', 'Pythagorean'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the left-hand side using the difference of squares.',
                    workingLatex: '1 - \\cos^2 x = \\sin x',
                    explanation: '\\( (a-b)(a+b) = a^2 - b^2 \\) with \\( a = 1,\\ b = \\cos x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Replace \\( 1 - \\cos^2 x \\) using \\( \\sin^2 x + \\cos^2 x = 1 \\).',
                    workingLatex: '\\sin^2 x = \\sin x',
                    explanation: 'Pythagorean identity rearranged: \\( 1 - \\cos^2 x = \\sin^2 x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Bring to one side and factorise.',
                    workingLatex: '\\sin x \\,(\\sin x - 1) = 0',
                    explanation: 'Subtract \\( \\sin x \\); take out the common factor of \\( \\sin x \\). Never divide — that would lose the \\( \\sin x = 0 \\) case.'
                },
                {
                    stepNumber: 4,
                    description: 'Case 1: \\( \\sin x = 0 \\).',
                    workingLatex: 'x = 0^\\circ,\\ 180^\\circ,\\ 360^\\circ',
                    explanation: 'Standard zeros of sine.'
                },
                {
                    stepNumber: 5,
                    description: 'Case 2: \\( \\sin x = 1 \\).',
                    workingLatex: 'x = 90^\\circ',
                    explanation: 'Sine reaches its maximum of \\( 1 \\) only at \\( 90^\\circ \\) in \\([0^\\circ, 360^\\circ]\\). Sketch \\( y = \\sin x \\) and read off where it meets \\( y = 0 \\) and \\( y = 1 \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [40, 1.15] }],
                        lines: [
                            { from: [0, 0], to: [360, 0], color: '#dc2626', dashed: true, label: 'y = 0', labelAt: [320, 0.15] },
                            { from: [0, 1], to: [360, 1], color: '#16a34a', dashed: true, label: 'y = 1', labelAt: [305, 1.18] }
                        ],
                        points: [
                            { at: [0, 0], label: '0°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [180, 0], label: '180°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [360, 0], label: '360°', labelAnchor: 'se', color: '#dc2626' },
                            { at: [90, 1], label: '90°', labelAnchor: 'se', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 0^\\circ,\\ 90^\\circ,\\ 180^\\circ,\\ 360^\\circ\\)'
        }
    },
    {
        id: 't4-055',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 55',
        difficulty: 'Challenge',
        questionText: 'Solve \\( 2\\sin^2 x + 5\\sin x \\cos x + 2\\cos^2 x = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'identities', 'tan x', 'homogeneous quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Check that dividing by \\( \\cos^2 x \\) is safe.',
                    workingLatex: '\\text{If } \\cos x = 0 \\text{ then LHS } = 2\\sin^2 x = 2 \\neq 0',
                    explanation: 'At \\( x = 90^\\circ \\) and \\( 270^\\circ \\), \\( \\sin x = \\pm 1 \\) and \\( \\cos x = 0 \\), so the LHS is \\( 2 \\), not \\( 0 \\). No solutions are lost when we divide by \\( \\cos^2 x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Divide through by \\( \\cos^2 x \\) to get a quadratic in \\( \\tan x \\).',
                    workingLatex: '2\\tan^2 x + 5\\tan x + 2 = 0',
                    explanation: 'Use \\( \\tan x = \\dfrac{\\sin x}{\\cos x} \\), so \\( \\dfrac{\\sin^2 x}{\\cos^2 x} = \\tan^2 x \\) and \\( \\dfrac{\\sin x \\cos x}{\\cos^2 x} = \\tan x \\). The constant \\( 2\\cos^2 x \\) becomes \\( 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise (treat \\( t = \\tan x \\)).',
                    workingLatex: '(2\\tan x + 1)(\\tan x + 2) = 0',
                    explanation: 'Check: \\( (2t+1)(t+2) = 2t^2 + 4t + t + 2 = 2t^2 + 5t + 2 \\). \\( \\checkmark \\)'
                },
                {
                    stepNumber: 4,
                    description: 'Case 1: \\( \\tan x = -\\tfrac{1}{2} \\).',
                    workingLatex: '\\tan^{-1}\\!\\left(\\tfrac{1}{2}\\right) = 26.6^\\circ;\\ x = 153.4^\\circ,\\ 333.4^\\circ',
                    explanation: 'Reference angle \\( 26.57^\\circ \\); tan negative in Q2 and Q4: \\( 180^\\circ - 26.57^\\circ \\) and \\( 360^\\circ - 26.57^\\circ \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Case 2: \\( \\tan x = -2 \\).',
                    workingLatex: '\\tan^{-1}(2) = 63.4^\\circ;\\ x = 116.6^\\circ,\\ 296.6^\\circ',
                    explanation: 'Reference angle \\( 63.43^\\circ \\); tan negative in Q2 and Q4. Sketch \\( y = \\tan x \\) and read off where it meets \\( y = -\\tfrac{1}{2} \\) and \\( y = -2 \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -5, yMax: 5,
                        xTicks: [0, 90, 116.6, 153.4, 180, 270, 296.6, 333.4, 360],
                        yTicks: [-4, -2, -0.5, 0, 2, 4],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = tan x' : undefined, labelAt: i === 0 ? [30, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [0, -0.5], to: [360, -0.5], color: '#dc2626', dashed: true, label: 'y = -\\tfrac{1}{2}', labelAt: [305, -0.1] },
                            { from: [0, -2], to: [360, -2], color: '#16a34a', dashed: true, label: 'y = -2', labelAt: [305, -2.4] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [153.4, -0.5], label: '153.4°', labelAnchor: 'se', color: '#dc2626' },
                            { at: [333.4, -0.5], label: '333.4°', labelAnchor: 'se', color: '#dc2626' },
                            { at: [116.6, -2], label: '116.6°', labelAnchor: 'se', color: '#16a34a' },
                            { at: [296.6, -2], label: '296.6°', labelAnchor: 'se', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 116.6^\\circ,\\ 153.4^\\circ,\\ 296.6^\\circ,\\ 333.4^\\circ\\)'
        }
    },
    {
        id: 't4-056',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 56',
        difficulty: 'Challenge',
        questionText: 'Solve \\( 2\\cos x = 3\\sin x \\tan x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'identities', 'Pythagorean', 'tan x', 'clear denominator'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\tan x \\) as \\( \\sin x / \\cos x \\).',
                    workingLatex: '2\\cos x = \\dfrac{3\\sin^2 x}{\\cos x}',
                    explanation: 'Identity \\( \\tan x = \\dfrac{\\sin x}{\\cos x} \\). The equation now has \\( \\cos x \\) in a denominator, so \\( \\cos x \\neq 0 \\) (i.e. \\( x \\neq 90^\\circ, 270^\\circ \\)).'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply both sides by \\( \\cos x \\) to clear the fraction.',
                    workingLatex: '2\\cos^2 x = 3\\sin^2 x',
                    explanation: 'Valid because \\( \\cos x \\neq 0 \\) by the previous remark.'
                },
                {
                    stepNumber: 3,
                    description: 'Replace \\( \\sin^2 x \\) using \\( \\sin^2 x = 1 - \\cos^2 x \\).',
                    workingLatex: '2\\cos^2 x = 3(1 - \\cos^2 x)',
                    explanation: 'This converts the equation into a single trig function (cosine).'
                },
                {
                    stepNumber: 4,
                    description: 'Expand and isolate \\( \\cos^2 x \\).',
                    workingLatex: '5\\cos^2 x = 3 \\;\\Longrightarrow\\; \\cos^2 x = \\tfrac{3}{5}',
                    explanation: '\\( 2\\cos^2 x = 3 - 3\\cos^2 x \\Rightarrow 5\\cos^2 x = 3 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Take both square roots.',
                    workingLatex: '\\cos x = \\pm \\sqrt{\\tfrac{3}{5}} = \\pm \\tfrac{\\sqrt{15}}{5} \\approx \\pm 0.7746',
                    explanation: 'Both signs give two solutions in \\([0^\\circ, 360^\\circ]\\). Note \\( |\\cos x| < 1 \\), so both are admissible, and \\( \\cos x \\neq 0 \\). \\( \\checkmark \\)'
                },
                {
                    stepNumber: 6,
                    description: 'Solve for \\( x \\) (reference angle \\( \\cos^{-1}(0.7746) = 39.2^\\circ \\)).',
                    workingLatex: 'x = 39.2^\\circ,\\ 140.8^\\circ,\\ 219.2^\\circ,\\ 320.8^\\circ',
                    explanation: 'Positive cosine in Q1 (\\( 39.2^\\circ \\)) and Q4 (\\( 320.8^\\circ \\)); negative cosine in Q2 (\\( 140.8^\\circ \\)) and Q3 (\\( 219.2^\\circ \\)). Sketch \\( y = \\cos x \\) and read off where it meets \\( y = \\tfrac{\\sqrt{15}}{5} \\) and \\( y = -\\tfrac{\\sqrt{15}}{5} \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 39.2, 90, 140.8, 180, 219.2, 270, 320.8, 360],
                        yTicks: [-1, -0.7746, 0, 0.7746, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [40, 1.15] }],
                        lines: [
                            { from: [0, 0.7746], to: [360, 0.7746], color: '#dc2626', dashed: true, label: 'y = \\tfrac{\\sqrt{15}}{5}', labelAt: [290, 0.92] },
                            { from: [0, -0.7746], to: [360, -0.7746], color: '#16a34a', dashed: true, label: 'y = -\\tfrac{\\sqrt{15}}{5}', labelAt: [290, -0.95] }
                        ],
                        points: [
                            { at: [39.2, 0.7746], label: '39.2°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [320.8, 0.7746], label: '320.8°', labelAnchor: 'se', color: '#dc2626' },
                            { at: [140.8, -0.7746], label: '140.8°', labelAnchor: 'se', color: '#16a34a' },
                            { at: [219.2, -0.7746], label: '219.2°', labelAnchor: 'sw', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 39.2^\\circ,\\ 140.8^\\circ,\\ 219.2^\\circ,\\ 320.8^\\circ\\)'
        }
    },
    {
        id: 't4-057',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 57',
        difficulty: 'Challenge',
        questionText: 'Solve \\( (2\\sin x + 1)^2 + (2\\cos x - 1)^2 = 6 \\) for \\( 0 \\leq x \\leq 2\\pi \\). Give exact answers in radians.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'identities', 'Pythagorean', 'tan x', 'radians'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand both squared brackets.',
                    workingLatex: '(4\\sin^2 x + 4\\sin x + 1) + (4\\cos^2 x - 4\\cos x + 1) = 6',
                    explanation: '\\( (a+b)^2 = a^2 + 2ab + b^2 \\) and \\( (a-b)^2 = a^2 - 2ab + b^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Group the \\( \\sin^2 x \\) and \\( \\cos^2 x \\) terms.',
                    workingLatex: '4(\\sin^2 x + \\cos^2 x) + 4\\sin x - 4\\cos x + 2 = 6',
                    explanation: 'Reorder to expose the Pythagorean pair.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( \\sin^2 x + \\cos^2 x = 1 \\).',
                    workingLatex: '4 + 4\\sin x - 4\\cos x + 2 = 6',
                    explanation: 'Pythagorean identity collapses the bracket to \\( 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify.',
                    workingLatex: '4\\sin x - 4\\cos x = 0 \\;\\Longrightarrow\\; \\sin x = \\cos x',
                    explanation: 'Subtract \\( 6 \\) from both sides; divide by \\( 4 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Divide by \\( \\cos x \\) to convert to tan.',
                    workingLatex: '\\tan x = 1',
                    explanation: 'No solutions are lost: if \\( \\cos x = 0 \\) then \\( \\sin x = 0 \\) too, contradicting \\( \\sin^2 x + \\cos^2 x = 1 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Solve \\( \\tan x = 1 \\) in \\([0, 2\\pi]\\).',
                    workingLatex: 'x = \\tfrac{\\pi}{4},\\ \\tfrac{5\\pi}{4}',
                    explanation: 'Reference angle \\( \\tfrac{\\pi}{4} \\); tan positive in Q1 and Q3. Sketch \\( y = \\tan x \\) (in radians) and read off where it meets \\( y = 1 \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 2 * Math.PI, yMin: -5, yMax: 5,
                        xTicks: [0, Math.PI / 4, Math.PI / 2, Math.PI, 5 * Math.PI / 4, 3 * Math.PI / 2, 2 * Math.PI],
                        xTickLabels: ['0', '\\tfrac{\\pi}{4}', '\\tfrac{\\pi}{2}', '\\pi', '\\tfrac{5\\pi}{4}', '\\tfrac{3\\pi}{2}', '2\\pi'],
                        yTicks: [-4, -2, 0, 1, 2, 4],
                        xLabel: 'x (radians)', yLabel: 'y',
                        curves: [
                            { points: sample((x) => Math.tan(x), 0, Math.PI / 2 - 0.2, 60), color: '#1d4ed8', label: 'y = tan x', labelAt: [0.3, 4] },
                            { points: sample((x) => Math.tan(x), Math.PI / 2 + 0.2, 3 * Math.PI / 2 - 0.2, 80), color: '#1d4ed8' },
                            { points: sample((x) => Math.tan(x), 3 * Math.PI / 2 + 0.2, 2 * Math.PI, 60), color: '#1d4ed8' }
                        ],
                        lines: [
                            { from: [0, 1], to: [2 * Math.PI, 1], color: '#dc2626', dashed: true, label: 'y = 1', labelAt: [5.6, 1.5] },
                            { from: [Math.PI / 2, -5], to: [Math.PI / 2, 5], color: '#9ca3af', dashed: true },
                            { from: [3 * Math.PI / 2, -5], to: [3 * Math.PI / 2, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [Math.PI / 4, 1], label: '\\tfrac{\\pi}{4}', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [5 * Math.PI / 4, 1], label: '\\tfrac{5\\pi}{4}', labelAnchor: 'sw', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = \\tfrac{\\pi}{4},\\ \\tfrac{5\\pi}{4}\\)'
        }
    },
    {
        id: 't4-058',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 58',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\cos 2x = \\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'double angle', 'quadratic in cos'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the double-angle identity \\( \\cos 2x = 2\\cos^2 x - 1 \\).',
                    workingLatex: '2\\cos^2 x - 1 = \\cos x',
                    explanation: 'Convert to a single trig function.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to standard quadratic form.',
                    workingLatex: '2\\cos^2 x - \\cos x - 1 = 0',
                    explanation: 'Bring \\( \\cos x \\) over.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(2\\cos x + 1)(\\cos x - 1) = 0',
                    explanation: 'Expanding: \\( 2c^2 - 2c + c - 1 = 2c^2 - c - 1 \\). \\checkmark'
                },
                {
                    stepNumber: 4,
                    description: 'Case 1: \\( \\cos x = -\\tfrac{1}{2} \\).',
                    workingLatex: 'x = 120^\\circ,\\ 240^\\circ',
                    explanation: 'Reference \\(60^\\circ\\); cosine negative in Q2 and Q3.'
                },
                {
                    stepNumber: 5,
                    description: 'Case 2: \\( \\cos x = 1 \\).',
                    workingLatex: 'x = 0^\\circ,\\ 360^\\circ',
                    explanation: 'At the endpoints. The diagram below shows the cosine curve touching \\( y = 1 \\) at \\( 0^\\circ, 360^\\circ \\) and meeting \\( y = -\\tfrac{1}{2} \\) at \\( 120^\\circ, 240^\\circ \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 120, 180, 240, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [40, 1.15] }],
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#16a34a', dashed: true, label: 'y = 1', labelAt: [305, 1.2] },
                            { from: [0, -0.5], to: [360, -0.5], color: '#dc2626', dashed: true, label: 'y = -\\tfrac{1}{2}', labelAt: [305, -0.7] },
                            { from: [120, 0], to: [120, -0.5], color: '#888', dashed: true },
                            { from: [240, 0], to: [240, -0.5], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [0, 1], label: '0^\\circ', labelAnchor: 'se', r: 4 },
                            { at: [120, -0.5], label: '120^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [240, -0.5], label: '240^\\circ', labelAnchor: 'se', r: 4 },
                            { at: [360, 1], label: '360^\\circ', labelAnchor: 'sw', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 0^\\circ,\\ 120^\\circ,\\ 240^\\circ,\\ 360^\\circ\\)'
        }
    },
    {
        id: 't4-059',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 59',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 4\\cos^2 x - 4\\cos x + 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'perfect square'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise as a perfect square.',
                    workingLatex: '(2\\cos x - 1)^2 = 0',
                    explanation: 'Expanding: \\( 4c^2 - 4c + 1 \\). \\checkmark'
                },
                {
                    stepNumber: 2,
                    description: 'Take the square root (single value because of double root).',
                    workingLatex: '2\\cos x - 1 = 0 \\Rightarrow \\cos x = \\tfrac{1}{2}',
                    explanation: 'Only one case from a perfect square.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve.',
                    workingLatex: 'x = 60^\\circ,\\ 300^\\circ',
                    explanation: 'Reference \\(60^\\circ\\); cosine positive in Q1 and Q4. The diagram below shows the cosine curve meeting \\( y = \\tfrac{1}{2} \\) at exactly these two x-values (these come from the unique repeated root \\( \\cos x = \\tfrac{1}{2} \\)).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 60, 90, 180, 270, 300, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [40, 1.15] }],
                        lines: [
                            { from: [0, 0.5], to: [360, 0.5], color: '#16a34a', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [305, 0.65] },
                            { from: [60, 0], to: [60, 0.5], color: '#888', dashed: true },
                            { from: [300, 0], to: [300, 0.5], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [60, 0.5], label: '60^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [300, 0.5], label: '300^\\circ', labelAnchor: 'ne', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 60^\\circ,\\ 300^\\circ\\)'
        }
    },
    {
        id: 't4-060',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 60',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin x + \\cos x = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'convert to tan'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Move \\( \\cos x \\) over.',
                    workingLatex: '\\sin x = -\\cos x',
                    explanation: 'Prepare to divide by \\( \\cos x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Divide by \\( \\cos x \\) (zero values check: if \\( \\cos x = 0 \\), then \\( \\sin x = 0 \\) which is impossible).',
                    workingLatex: '\\tan x = -1',
                    explanation: 'Use the identity \\( \\sin / \\cos = \\tan \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve.',
                    workingLatex: 'x = 135^\\circ,\\ 315^\\circ',
                    explanation: 'Reference \\(45^\\circ\\); tan negative in Q2 and Q4. The diagram below shows \\( y = \\tan x \\) crossing \\( y = -1 \\) at exactly these two x-values.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -5, yMax: 5,
                        xTicks: [0, 90, 135, 180, 270, 315, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({
                            points: seg,
                            color: '#1d4ed8',
                            label: i === 0 ? 'y = \\tan x' : undefined,
                            labelAt: i === 0 ? [10, 4] as [number, number] : undefined
                        })),
                        lines: [
                            { from: [0, -1], to: [360, -1], color: '#dc2626', dashed: true, label: 'y = -1', labelAt: [320, -1.6] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [135, -1], label: '135^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [315, -1], label: '315^\\circ', labelAnchor: 'sw', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 135^\\circ,\\ 315^\\circ\\)'
        }
    },
    {
        id: 't4-061',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 61',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin(2x + 30^\\circ) = 0.5 \\) for \\( 0^\\circ \\leq x \\leq 180^\\circ \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'sin(kx+c)', 'phase shift'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( u = 2x + 30^\\circ \\); shift the interval.',
                    workingLatex: '30^\\circ \\leq u \\leq 390^\\circ',
                    explanation: 'When \\( x = 0 \\), \\( u = 30 \\). When \\( x = 180 \\), \\( u = 390 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( \\sin u = 0.5 \\); reference \\(30^\\circ\\).',
                    workingLatex: 'u = 30^\\circ,\\ 150^\\circ,\\ 390^\\circ',
                    explanation: 'In Q1: \\(30^\\circ\\); Q2: \\(180 - 30 = 150^\\circ\\); add \\(360^\\circ\\) for the 2nd period: \\(30 + 360 = 390^\\circ\\). All three lie in \\([30^\\circ, 390^\\circ]\\) (390 is the upper endpoint).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\): \\( x = (u - 30^\\circ)/2 \\).',
                    workingLatex: 'x = 0^\\circ,\\ 60^\\circ,\\ 180^\\circ',
                    explanation: '\\((30-30)/2 = 0\\); \\((150-30)/2 = 60\\); \\((390-30)/2 = 180\\). Check: \\( \\sin(2 \\cdot 180^\\circ + 30^\\circ) = \\sin 390^\\circ = \\sin 30^\\circ = 0.5 \\). \\(\\checkmark\\) The diagram below plots \\( y = \\sin(2x + 30^\\circ) \\) on \\( [0^\\circ, 180^\\circ] \\) and the line \\( y = 0.5 \\), intersecting at exactly the three solution x-values.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -3, xMax: 183, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 60, 90, 180],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(2 * x + 30), 0, 180, 180), color: '#1d4ed8', label: 'y = \\sin(2x + 30^\\circ)', labelAt: [5, 1.15] }],
                        lines: [
                            { from: [0, 0.5], to: [180, 0.5], color: '#16a34a', dashed: true, label: 'y = 0.5', labelAt: [150, 0.65] },
                            { from: [60, 0], to: [60, 0.5], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [0, 0.5], label: '0^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [60, 0.5], label: '60^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [180, 0.5], label: '180^\\circ', labelAnchor: 'se', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 0^\\circ,\\ 60^\\circ,\\ 180^\\circ\\)'
        }
    },
    {
        id: 't4-062',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 62',
        difficulty: 'Foundation',
        questionText: 'Find all values of \\( x \\) in \\( [0, 2\\pi] \\) for which \\( 2\\sin^2 x = 1 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'sin^2', 'radians'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide both sides by 2.',
                    workingLatex: '\\sin^2 x = \\tfrac{1}{2}',
                    explanation: 'Isolate \\( \\sin^2 x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Take both square roots.',
                    workingLatex: '\\sin x = \\pm \\tfrac{1}{\\sqrt{2}}',
                    explanation: 'Equivalent to \\( \\pm \\tfrac{\\sqrt{2}}{2} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find all \\(x\\) in \\([0, 2\\pi]\\) for both signs.',
                    workingLatex: 'x = \\tfrac{\\pi}{4},\\ \\tfrac{3\\pi}{4},\\ \\tfrac{5\\pi}{4},\\ \\tfrac{7\\pi}{4}',
                    explanation: 'These are the standard exact angles where \\( |\\sin x| = \\tfrac{1}{\\sqrt{2}} \\), one in each quadrant. The diagram below shows the sine curve (in radians) crossing \\( y = \\tfrac{\\sqrt{2}}{2} \\) at \\( \\tfrac{\\pi}{4}, \\tfrac{3\\pi}{4} \\) and \\( y = -\\tfrac{\\sqrt{2}}{2} \\) at \\( \\tfrac{5\\pi}{4}, \\tfrac{7\\pi}{4} \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -0.2, xMax: 2 * Math.PI + 0.2, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, Math.PI / 4, Math.PI / 2, 3 * Math.PI / 4, Math.PI, 5 * Math.PI / 4, 3 * Math.PI / 2, 7 * Math.PI / 4, 2 * Math.PI],
                        xTickLabels: ['0', '\\tfrac{\\pi}{4}', '\\tfrac{\\pi}{2}', '\\tfrac{3\\pi}{4}', '\\pi', '\\tfrac{5\\pi}{4}', '\\tfrac{3\\pi}{2}', '\\tfrac{7\\pi}{4}', '2\\pi'],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (radians)', yLabel: 'y',
                        curves: [{ points: sample((x) => Math.sin(x), 0, 2 * Math.PI, 180), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [0.3, 1.15] }],
                        lines: [
                            { from: [0, Math.SQRT1_2], to: [2 * Math.PI, Math.SQRT1_2], color: '#16a34a', dashed: true, label: 'y = \\tfrac{\\sqrt{2}}{2}', labelAt: [5.2, 0.85] },
                            { from: [0, -Math.SQRT1_2], to: [2 * Math.PI, -Math.SQRT1_2], color: '#dc2626', dashed: true, label: 'y = -\\tfrac{\\sqrt{2}}{2}', labelAt: [5.2, -0.6] },
                            { from: [Math.PI / 4, 0], to: [Math.PI / 4, Math.SQRT1_2], color: '#888', dashed: true },
                            { from: [3 * Math.PI / 4, 0], to: [3 * Math.PI / 4, Math.SQRT1_2], color: '#888', dashed: true },
                            { from: [5 * Math.PI / 4, 0], to: [5 * Math.PI / 4, -Math.SQRT1_2], color: '#888', dashed: true },
                            { from: [7 * Math.PI / 4, 0], to: [7 * Math.PI / 4, -Math.SQRT1_2], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [Math.PI / 4, Math.SQRT1_2], label: '\\tfrac{\\pi}{4}', labelAnchor: 'nw', r: 4 },
                            { at: [3 * Math.PI / 4, Math.SQRT1_2], label: '\\tfrac{3\\pi}{4}', labelAnchor: 'ne', r: 4 },
                            { at: [5 * Math.PI / 4, -Math.SQRT1_2], label: '\\tfrac{5\\pi}{4}', labelAnchor: 'sw', r: 4 },
                            { at: [7 * Math.PI / 4, -Math.SQRT1_2], label: '\\tfrac{7\\pi}{4}', labelAnchor: 'se', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = \\tfrac{\\pi}{4},\\ \\tfrac{3\\pi}{4},\\ \\tfrac{5\\pi}{4},\\ \\tfrac{7\\pi}{4}\\)'
        }
    },
    {
        id: 't4-063',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 63',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\sin x = 3\\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'convert to tan'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide both sides by \\( \\cos x \\) (no solutions lost; check: \\( \\cos x = 0 \\Rightarrow \\sin x = 0 \\), impossible).',
                    workingLatex: '\\tan x = \\tfrac{3}{2} = 1.5',
                    explanation: 'Use \\( \\sin / \\cos = \\tan \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Reference angle.',
                    workingLatex: '\\tan^{-1}(1.5) = 56.3^\\circ \\text{ (1 d.p.)}',
                    explanation: 'More precisely \\(56.3099^\\circ\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Tan positive in Q1 and Q3.',
                    workingLatex: 'x = 56.3^\\circ,\\ 236.3^\\circ',
                    explanation: '\\(56.3 + 180 = 236.3\\). The diagram below shows \\( y = \\tan x \\) crossing \\( y = 1.5 \\) at exactly these two x-values.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -5, yMax: 5,
                        xTicks: [0, 56.3, 90, 180, 236.3, 270, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({
                            points: seg,
                            color: '#1d4ed8',
                            label: i === 0 ? 'y = \\tan x' : undefined,
                            labelAt: i === 0 ? [10, 4] as [number, number] : undefined
                        })),
                        lines: [
                            { from: [0, 1.5], to: [360, 1.5], color: '#16a34a', dashed: true, label: 'y = 1.5', labelAt: [320, 2.1] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [56.3, 1.5], label: '56.3^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [236.3, 1.5], label: '236.3^\\circ', labelAnchor: 'nw', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 56.3^\\circ,\\ 236.3^\\circ\\)'
        }
    },
    {
        id: 't4-064',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 64',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\cos^2 x = \\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'factorise', 'do not divide'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Bring everything to one side.',
                    workingLatex: '\\cos^2 x - \\cos x = 0',
                    explanation: 'Subtract \\( \\cos x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factor out \\( \\cos x \\).',
                    workingLatex: '\\cos x(\\cos x - 1) = 0',
                    explanation: 'Common factor. Do not divide by \\( \\cos x \\) — losing solutions where \\( \\cos x = 0 \\) is a classic trap.'
                },
                {
                    stepNumber: 3,
                    description: 'Case 1: \\( \\cos x = 0 \\).',
                    workingLatex: 'x = 90^\\circ,\\ 270^\\circ',
                    explanation: 'Cosine vanishes at \\( 90^\\circ + 180^\\circ k \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Case 2: \\( \\cos x = 1 \\).',
                    workingLatex: 'x = 0^\\circ,\\ 360^\\circ',
                    explanation: 'Cosine equals \\(1\\) at the endpoints. The diagram below shows the cosine curve touching \\( y = 1 \\) at the endpoints and crossing \\( y = 0 \\) at \\( 90^\\circ \\) and \\( 270^\\circ \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [40, 1.15] }],
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#16a34a', dashed: true, label: 'y = 1', labelAt: [305, 1.2] },
                            { from: [0, 0], to: [360, 0], color: '#dc2626', dashed: true, label: 'y = 0', labelAt: [305, 0.15] }
                        ],
                        points: [
                            { at: [0, 1], label: '0^\\circ', labelAnchor: 'se', r: 4 },
                            { at: [90, 0], label: '90^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [270, 0], label: '270^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [360, 1], label: '360^\\circ', labelAnchor: 'sw', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 0^\\circ,\\ 90^\\circ,\\ 270^\\circ,\\ 360^\\circ\\)'
        }
    },
    {
        id: 't4-065',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 65',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\sin^2 x + 3\\cos x = 3 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'Pythagorean', 'quadratic in cos'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\sin^2 x \\) with \\( 1 - \\cos^2 x \\).',
                    workingLatex: '2(1 - \\cos^2 x) + 3\\cos x = 3',
                    explanation: 'Pythagorean identity.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and bring to one side.',
                    workingLatex: '-2\\cos^2 x + 3\\cos x - 1 = 0',
                    explanation: 'Expand and subtract 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply by \\( -1 \\).',
                    workingLatex: '2\\cos^2 x - 3\\cos x + 1 = 0',
                    explanation: 'Conventional positive leading coefficient.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise.',
                    workingLatex: '(2\\cos x - 1)(\\cos x - 1) = 0',
                    explanation: 'Expanding: \\( 2c^2 - 2c - c + 1 = 2c^2 - 3c + 1 \\). \\checkmark'
                },
                {
                    stepNumber: 5,
                    description: 'Solve each factor.',
                    workingLatex: '\\cos x = \\tfrac{1}{2}: x = 60^\\circ, 300^\\circ; \\quad \\cos x = 1: x = 0^\\circ, 360^\\circ',
                    explanation: 'Four solutions in total. The diagram below shows the cosine curve touching \\( y = 1 \\) only at the endpoints and meeting \\( y = \\tfrac{1}{2} \\) at \\( 60^\\circ \\) and \\( 300^\\circ \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 60, 90, 180, 270, 300, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [40, 1.15] }],
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#16a34a', dashed: true, label: 'y = 1', labelAt: [305, 1.2] },
                            { from: [0, 0.5], to: [360, 0.5], color: '#dc2626', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [305, 0.65] },
                            { from: [60, 0], to: [60, 0.5], color: '#888', dashed: true },
                            { from: [300, 0], to: [300, 0.5], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [0, 1], label: '0^\\circ', labelAnchor: 'se', r: 4 },
                            { at: [60, 0.5], label: '60^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [300, 0.5], label: '300^\\circ', labelAnchor: 'ne', r: 4 },
                            { at: [360, 1], label: '360^\\circ', labelAnchor: 'sw', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 0^\\circ,\\ 60^\\circ,\\ 300^\\circ,\\ 360^\\circ\\)'
        }
    },
    {
        id: 't4-066',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 66',
        difficulty: 'Foundation',
        questionText: 'How many solutions does \\( \\sin 4x = 0.3 \\) have for \\( 0^\\circ \\leq x \\leq 360^\\circ \\)?',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'counting solutions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the interval for the substituted variable.',
                    workingLatex: 'u = 4x \\Rightarrow 0^\\circ \\leq u \\leq 1440^\\circ',
                    explanation: 'Quadruple the original interval.'
                },
                {
                    stepNumber: 2,
                    description: 'Count complete periods of sine in \\([0^\\circ, 1440^\\circ]\\).',
                    workingLatex: '1440^\\circ \\div 360^\\circ = 4',
                    explanation: 'Four full cycles.'
                },
                {
                    stepNumber: 3,
                    description: 'Each cycle has exactly two solutions for \\( \\sin u = 0.3 \\) (because \\(|0.3| < 1\\)).',
                    workingLatex: '4 \\times 2 = 8',
                    explanation: 'In each period, one solution in the rising half (Q1) and one in the falling half (Q2). Each divides by 4 to give a distinct \\(x\\). The diagram below plots \\( y = \\sin 4x \\), which completes four cycles across \\( [0^\\circ, 360^\\circ] \\); you can count the eight points where the curve crosses \\( y = 0.3 \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(4 * x), 0, 360, 480), color: '#1d4ed8', label: 'y = \\sin 4x', labelAt: [10, 1.15] }],
                        lines: [
                            { from: [0, 0.3], to: [360, 0.3], color: '#16a34a', dashed: true, label: 'y = 0.3', labelAt: [305, 0.45] }
                        ]
                    }
                }
            ],
            finalAnswer: '8 solutions'
        }
    },
    {
        id: 't4-067',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 67',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin x = \\tfrac{\\sqrt{3}}{2} \\) for \\( -180^\\circ \\leq x \\leq 180^\\circ \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'sin', 'exact', 'negative interval'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Reference angle from the standard triangle.',
                    workingLatex: '\\sin 60^\\circ = \\tfrac{\\sqrt{3}}{2}',
                    explanation: 'Standard exact value.'
                },
                {
                    stepNumber: 2,
                    description: 'Sine positive in Q1 and Q2; list candidates.',
                    workingLatex: 'x = 60^\\circ,\\ 180^\\circ - 60^\\circ = 120^\\circ',
                    explanation: 'Both are in \\([-180^\\circ, 180^\\circ]\\). The next period would give \\(60-360=-300\\), out of range. The diagram below shows the sine curve on \\([-180^\\circ, 180^\\circ]\\) meeting \\( y = \\tfrac{\\sqrt{3}}{2} \\) at exactly these two x-values.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -185, xMax: 185, yMin: -1.35, yMax: 1.35,
                        xTicks: [-180, -90, 0, 60, 90, 120, 180],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), -180, 180, 180), color: '#1d4ed8', label: 'y = \\sin x', labelAt: [-170, 1.15] }],
                        lines: [
                            { from: [-180, Math.sqrt(3) / 2], to: [180, Math.sqrt(3) / 2], color: '#16a34a', dashed: true, label: 'y = \\tfrac{\\sqrt{3}}{2}', labelAt: [125, 1.05] },
                            { from: [60, 0], to: [60, Math.sqrt(3) / 2], color: '#888', dashed: true },
                            { from: [120, 0], to: [120, Math.sqrt(3) / 2], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [60, Math.sqrt(3) / 2], label: '60^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [120, Math.sqrt(3) / 2], label: '120^\\circ', labelAnchor: 'ne', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 60^\\circ,\\ 120^\\circ\\)'
        }
    },
    {
        id: 't4-068',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 68',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\cos x = -\\tfrac{1}{\\sqrt{2}} \\) for \\( -\\pi \\leq x \\leq \\pi \\). Give answers in terms of \\( \\pi \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'cos', 'radians', 'exact'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Reference angle in radians.',
                    workingLatex: '\\cos\\!\\left(\\tfrac{\\pi}{4}\\right) = \\tfrac{1}{\\sqrt{2}}',
                    explanation: 'Standard exact value.'
                },
                {
                    stepNumber: 2,
                    description: 'Cosine negative in Q2 and Q3.',
                    workingLatex: 'x = \\pi - \\tfrac{\\pi}{4} = \\tfrac{3\\pi}{4} \\quad \\text{or} \\quad x = -\\left(\\pi - \\tfrac{\\pi}{4}\\right) = -\\tfrac{3\\pi}{4}',
                    explanation: 'Use the even symmetry \\( \\cos(-x) = \\cos x \\) to fold the 3rd-quadrant solution into negative \\(x\\). Both lie in \\([-\\pi, \\pi]\\). The diagram below shows the cosine curve on \\([-\\pi, \\pi]\\) meeting \\( y = -\\tfrac{1}{\\sqrt{2}} \\) at exactly these two x-values.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -Math.PI - 0.2, xMax: Math.PI + 0.2, yMin: -1.35, yMax: 1.35,
                        xTicks: [-Math.PI, -3 * Math.PI / 4, -Math.PI / 2, -Math.PI / 4, 0, Math.PI / 4, Math.PI / 2, 3 * Math.PI / 4, Math.PI],
                        xTickLabels: ['-\\pi', '-\\tfrac{3\\pi}{4}', '-\\tfrac{\\pi}{2}', '-\\tfrac{\\pi}{4}', '0', '\\tfrac{\\pi}{4}', '\\tfrac{\\pi}{2}', '\\tfrac{3\\pi}{4}', '\\pi'],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (radians)', yLabel: 'y',
                        curves: [{ points: sample((x) => Math.cos(x), -Math.PI, Math.PI, 180), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [-3, 1.15] }],
                        lines: [
                            { from: [-Math.PI, -Math.SQRT1_2], to: [Math.PI, -Math.SQRT1_2], color: '#dc2626', dashed: true, label: 'y = -\\tfrac{1}{\\sqrt{2}}', labelAt: [2.0, -0.5] },
                            { from: [-3 * Math.PI / 4, 0], to: [-3 * Math.PI / 4, -Math.SQRT1_2], color: '#888', dashed: true },
                            { from: [3 * Math.PI / 4, 0], to: [3 * Math.PI / 4, -Math.SQRT1_2], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [-3 * Math.PI / 4, -Math.SQRT1_2], label: '-\\tfrac{3\\pi}{4}', labelAnchor: 'sw', r: 4 },
                            { at: [3 * Math.PI / 4, -Math.SQRT1_2], label: '\\tfrac{3\\pi}{4}', labelAnchor: 'se', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = -\\tfrac{3\\pi}{4},\\ \\tfrac{3\\pi}{4}\\)'
        }
    },
    {
        id: 't4-069',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 69',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\tan(x + 60^\\circ) = 1 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'tan(x+c)', 'phase shift'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( u = x + 60^\\circ \\); shift interval.',
                    workingLatex: '60^\\circ \\leq u \\leq 420^\\circ',
                    explanation: 'Add \\(60^\\circ\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( \\tan u = 1 \\); reference \\(45^\\circ\\).',
                    workingLatex: 'u = 45^\\circ,\\ 225^\\circ,\\ 405^\\circ',
                    explanation: 'Tan has period \\(180^\\circ\\); \\(45^\\circ\\) is below the lower bound \\(60^\\circ\\), but \\(225^\\circ\\) and \\(405^\\circ\\) are in range.'
                },
                {
                    stepNumber: 3,
                    description: 'Discard \\(u = 45^\\circ\\), subtract \\(60^\\circ\\) from the rest.',
                    workingLatex: 'x = 225^\\circ - 60^\\circ = 165^\\circ \\quad \\text{and} \\quad x = 405^\\circ - 60^\\circ = 345^\\circ',
                    explanation: 'Two solutions in \\([0^\\circ, 360^\\circ]\\). The diagram below plots \\( y = \\tan(x + 60^\\circ) \\) with asymptotes at \\( x = 30^\\circ \\) and \\( x = 210^\\circ \\); the line \\( y = 1 \\) cuts the curve at exactly these two x-values.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -5, yMax: 5,
                        xTicks: [0, 30, 90, 165, 180, 210, 270, 345, 360],
                        yTicks: [-4, -2, 0, 2, 4],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(60, 420, [90, 270], 5).map((seg, i) => ({
                            points: seg.map(([u, y]) => [u - 60, y] as [number, number]),
                            color: '#1d4ed8',
                            label: i === 0 ? 'y = \\tan(x + 60^\\circ)' : undefined,
                            labelAt: i === 0 ? [10, 4] as [number, number] : undefined
                        })),
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#16a34a', dashed: true, label: 'y = 1', labelAt: [320, 1.6] },
                            { from: [30, -5], to: [30, 5], color: '#9ca3af', dashed: true },
                            { from: [210, -5], to: [210, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [165, 1], label: '165^\\circ', labelAnchor: 'nw', r: 4 },
                            { at: [345, 1], label: '345^\\circ', labelAnchor: 'nw', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 165^\\circ,\\ 345^\\circ\\)'
        }
    },
    {
        id: 't4-070',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 70',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 5\\sin^2 x + 4\\cos x - 4 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p. where necessary.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'Pythagorean', 'quadratic in cos'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\sin^2 x \\) using the Pythagorean identity.',
                    workingLatex: '5(1 - \\cos^2 x) + 4\\cos x - 4 = 0',
                    explanation: 'Substitute \\( \\sin^2 x = 1 - \\cos^2 x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and collect.',
                    workingLatex: '-5\\cos^2 x + 4\\cos x + 1 = 0',
                    explanation: '\\( 5 - 4 = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply by \\(-1\\).',
                    workingLatex: '5\\cos^2 x - 4\\cos x - 1 = 0',
                    explanation: 'Conventional form.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise.',
                    workingLatex: '(5\\cos x + 1)(\\cos x - 1) = 0',
                    explanation: 'Expanding: \\( 5c^2 - 5c + c - 1 = 5c^2 - 4c - 1 \\). \\(\\checkmark\\)'
                },
                {
                    stepNumber: 5,
                    description: 'Case 1: \\( \\cos x = -\\tfrac{1}{5} = -0.2 \\).',
                    workingLatex: '\\cos^{-1}(0.2) = 78.5^\\circ; \\ x = 101.5^\\circ,\\ 258.5^\\circ',
                    explanation: 'More precisely \\(78.4630^\\circ\\); cosine negative in Q2 and Q3.'
                },
                {
                    stepNumber: 6,
                    description: 'Case 2: \\( \\cos x = 1 \\).',
                    workingLatex: 'x = 0^\\circ,\\ 360^\\circ',
                    explanation: 'At the endpoints. Four solutions in total. The diagram below shows the cosine curve touching \\( y = 1 \\) at the endpoints and meeting \\( y = -0.2 \\) at \\( 101.5^\\circ \\) and \\( 258.5^\\circ \\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 101.5, 180, 258.5, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 360, 180), color: '#1d4ed8', label: 'y = \\cos x', labelAt: [40, 1.15] }],
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#16a34a', dashed: true, label: 'y = 1', labelAt: [305, 1.2] },
                            { from: [0, -0.2], to: [360, -0.2], color: '#dc2626', dashed: true, label: 'y = -0.2', labelAt: [305, -0.4] },
                            { from: [101.5, 0], to: [101.5, -0.2], color: '#888', dashed: true },
                            { from: [258.5, 0], to: [258.5, -0.2], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [0, 1], label: '0^\\circ', labelAnchor: 'se', r: 4 },
                            { at: [101.5, -0.2], label: '101.5^\\circ', labelAnchor: 'sw', r: 4 },
                            { at: [258.5, -0.2], label: '258.5^\\circ', labelAnchor: 'se', r: 4 },
                            { at: [360, 1], label: '360^\\circ', labelAnchor: 'sw', r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 0^\\circ,\\ 101.5^\\circ,\\ 258.5^\\circ,\\ 360^\\circ\\)'
        }
    },
];
