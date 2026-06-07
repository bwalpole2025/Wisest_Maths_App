import { Question } from "@/lib/types";

function sample(f: (x: number) => number, xMin: number, xMax: number, n = 180): Array<[number, number]> {
    const pts: Array<[number, number]> = [];
    for (let i = 0; i < n; i++) {
        const x = xMin + (i / (n - 1)) * (xMax - xMin);
        pts.push([x, f(x)]);
    }
    return pts;
}

// Sample y = tan x in degrees, split around asymptotes, clipped to ±yClip.
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

const sinDeg = (xDeg: number) => Math.sin((xDeg * Math.PI) / 180);
const cosDeg = (xDeg: number) => Math.cos((xDeg * Math.PI) / 180);

const sinCurve = (xMin = 0, xMax = 360) => ({
    points: sample((x) => sinDeg(x), xMin, xMax, 180),
    color: '#1d4ed8',
    label: 'y = \\sin x',
    labelAt: [xMin + 30, 1.15] as [number, number]
});

const cosCurve = (xMin = 0, xMax = 360) => ({
    points: sample((x) => cosDeg(x), xMin, xMax, 180),
    color: '#1d4ed8',
    label: 'y = \\cos x',
    labelAt: [xMin + 30, 1.15] as [number, number]
});

export const questions: Question[] = [
    /* ──────────── CHALLENGE A (10) ──────────────────────────────────
     * Challenge-level problems combining phase shifts, Pythagoras,
     * factorisation and quadratic substitution.                       */
    {
        id: 't5-001',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 01',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText: 'Solve \\( \\sin(2x - 30^\\circ) = \\tfrac{\\sqrt{3}}{2} \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'sin(kx+c)', 'phase shift', 'multiple angle'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( u = 2x - 30^\\circ \\) and find the interval for \\(u\\).',
                    workingLatex: '-30^\\circ \\leq u \\leq 690^\\circ',
                    explanation: 'Substituting unifies the argument with the familiar form \\( \\sin u = k \\). The new interval is found by tracking the endpoints: when \\(x = 0\\), \\(u = -30\\); when \\(x = 360\\), \\(u = 2(360) - 30 = 690\\). A common slip is to leave the interval as \\([0^\\circ, 360^\\circ]\\) — that loses half the solutions, because the doubling from the coefficient \\(2\\) means the new interval spans two full periods of sine.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the reference angle.',
                    workingLatex: '\\sin^{-1}\\!\\left(\\tfrac{\\sqrt{3}}{2}\\right) = 60^\\circ',
                    explanation: 'Standard exact value: \\( \\sin 60^\\circ = \\tfrac{\\sqrt{3}}{2} \\). The reference angle is always taken from the positive value; signs are handled by the quadrant rules.'
                },
                {
                    stepNumber: 3,
                    description: 'List all solutions of \\( \\sin u = \\tfrac{\\sqrt{3}}{2} \\) in \\([-30^\\circ, 690^\\circ]\\).',
                    workingLatex: 'u = 60^\\circ,\\ 120^\\circ,\\ 420^\\circ,\\ 480^\\circ',
                    explanation: 'Sine is positive in Q1 and Q2, giving \\(60^\\circ\\) and \\(180^\\circ - 60^\\circ = 120^\\circ\\) in the first period. Add \\(360^\\circ\\) to each for the second period: \\(420^\\circ,\\ 480^\\circ\\). All four lie inside the shifted interval. Check the negative end too: \\(u = -300^\\circ\\) would also satisfy \\( \\sin u = \\tfrac{\\sqrt{3}}{2} \\), but it sits below \\(-30^\\circ\\) so is outside the interval.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -35, xMax: 695, yMin: -1.35, yMax: 1.35,
                        xTicks: [-30, 60, 120, 180, 360, 420, 480, 540, 690],
                        yTicks: [-1, 0, Math.sqrt(3) / 2, 1],
                        yTickLabels: ['-1', '0', '\\tfrac{\\sqrt{3}}{2}', '1'],
                        xLabel: 'u (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), -30, 690, 360), color: '#1d4ed8', label: 'y = \\sin u', labelAt: [-25, 1.15] }],
                        lines: [{ from: [-30, Math.sqrt(3) / 2], to: [690, Math.sqrt(3) / 2], color: '#dc2626', dashed: true, label: 'y = \\tfrac{\\sqrt{3}}{2}', labelAt: [615, 1.0] }],
                        points: [
                            { at: [60, Math.sqrt(3) / 2], label: '60°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [120, Math.sqrt(3) / 2], label: '120°', labelAnchor: 'se', color: '#dc2626' },
                            { at: [420, Math.sqrt(3) / 2], label: '420°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [480, Math.sqrt(3) / 2], label: '480°', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                },
                {
                    stepNumber: 4,
                    description: 'Reverse the substitution: \\( x = (u + 30^\\circ)/2 \\).',
                    workingLatex: 'x = 45^\\circ,\\ 75^\\circ,\\ 225^\\circ,\\ 255^\\circ',
                    explanation: 'Solve \\(u = 2x - 30^\\circ\\) for \\(x\\): add \\(30^\\circ\\), then halve. Order matters — applying the operations in the wrong order (e.g. halving before adding) gives the wrong x-values. All four results lie in \\([0^\\circ, 360^\\circ]\\), confirming they are valid solutions of the original equation.'
                }
            ],
            finalAnswer: '\\(x = 45^\\circ,\\ 75^\\circ,\\ 225^\\circ,\\ 255^\\circ\\)'
        }
    },
    {
        id: 't5-002',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 02',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText: 'Solve \\( \\tan(2x + 60^\\circ) = \\sqrt{3} \\) for \\( 0^\\circ \\leq x \\leq 180^\\circ \\). Give exact answers.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'tan(kx+c)', 'phase shift', 'multiple angle'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( u = 2x + 60^\\circ \\) and find the interval for \\(u\\).',
                    workingLatex: '60^\\circ \\leq u \\leq 420^\\circ',
                    explanation: 'Substituting reduces the equation to the familiar form \\( \\tan u = k \\). The endpoints transform together with \\(x\\): when \\(x = 0\\), \\(u = 60\\); when \\(x = 180\\), \\(u = 2(180) + 60 = 420\\). The new interval still has length \\(360^\\circ\\) because the coefficient is \\(2\\) and the original interval has length \\(180^\\circ\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the reference angle.',
                    workingLatex: '\\tan^{-1}(\\sqrt{3}) = 60^\\circ',
                    explanation: 'Standard exact value: \\( \\tan 60^\\circ = \\sqrt{3} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'List all solutions of \\( \\tan u = \\sqrt{3} \\) in \\([60^\\circ, 420^\\circ]\\).',
                    workingLatex: 'u = 60^\\circ,\\ 240^\\circ,\\ 420^\\circ',
                    explanation: 'Tangent has period \\(180^\\circ\\), so we extend the principal value by repeatedly adding \\(180^\\circ\\): \\(60^\\circ \\to 240^\\circ \\to 420^\\circ\\). All three values land inside the shifted interval; the next term \\(600^\\circ\\) would be too large.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 60, xMax: 420, yMin: -5, yMax: 5,
                        xTicks: [60, 90, 180, 240, 270, 360, 420],
                        yTicks: [-4, -2, 0, Math.sqrt(3), 4],
                        yTickLabels: ['-4', '-2', '0', '\\sqrt{3}', '4'],
                        xLabel: 'u (degrees)', yLabel: 'y',
                        curves: sampleTan(60, 420, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = tan u' : undefined, labelAt: i === 0 ? [70, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [60, Math.sqrt(3)], to: [420, Math.sqrt(3)], color: '#dc2626', dashed: true, label: 'y = \\sqrt{3}', labelAt: [365, 2.2] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [60, Math.sqrt(3)], label: '60°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [240, Math.sqrt(3)], label: '240°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [420, Math.sqrt(3)], label: '420°', labelAnchor: 'sw', color: '#dc2626' }
                        ]
                    }
                },
                {
                    stepNumber: 4,
                    description: 'Reverse the substitution: \\( x = (u - 60^\\circ)/2 \\).',
                    workingLatex: 'x = 0^\\circ,\\ 90^\\circ,\\ 180^\\circ',
                    explanation: 'Solve \\(u = 2x + 60^\\circ\\) for \\(x\\): subtract \\(60^\\circ\\), then halve. All three results lie in \\([0^\\circ, 180^\\circ]\\). Worth a sanity check: \\( \\tan(2 \\cdot 90^\\circ + 60^\\circ) = \\tan 240^\\circ = \\sqrt{3} \\). \\(\\checkmark\\)'
                }
            ],
            finalAnswer: '\\(x = 0^\\circ,\\ 90^\\circ,\\ 180^\\circ\\)'
        }
    },
    {
        id: 't5-003',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 03',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText: 'Solve \\( \\sin x \\tan x = 3\\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'Pythagoras', 'identity', 'clear denominator'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\tan x \\) using its definition.',
                    workingLatex: '\\sin x \\cdot \\dfrac{\\sin x}{\\cos x} = 3\\cos x',
                    explanation: 'Use the identity \\( \\tan x = \\sin x / \\cos x \\). This implicitly restricts the domain to \\(\\cos x \\neq 0\\), i.e. \\(x \\neq 90^\\circ, 270^\\circ\\) — keep this restriction in mind throughout.'
                },
                {
                    stepNumber: 2,
                    description: 'Combine the sines on the left.',
                    workingLatex: '\\dfrac{\\sin^2 x}{\\cos x} = 3\\cos x',
                    explanation: '\\( \\sin x \\cdot \\sin x = \\sin^2 x \\). Keeping the equation in this fractional form makes the next move (clear the denominator) obvious.'
                },
                {
                    stepNumber: 3,
                    description: 'Clear the denominator by multiplying both sides by \\( \\cos x \\).',
                    workingLatex: '\\sin^2 x = 3\\cos^2 x',
                    explanation: 'Multiplying through by \\(\\cos x\\) is safe because we already noted \\(\\cos x \\neq 0\\). The equation now contains only squares of trig functions, perfect for the Pythagorean identity.'
                },
                {
                    stepNumber: 4,
                    description: 'Eliminate \\( \\sin^2 x \\) using \\( \\sin^2 x = 1 - \\cos^2 x \\).',
                    workingLatex: '1 - \\cos^2 x = 3\\cos^2 x',
                    explanation: 'Reducing to a single trig function (cosine) lets us treat the equation algebraically. We could equally have eliminated \\(\\cos^2 x\\) instead — the algebra would still resolve.'
                },
                {
                    stepNumber: 5,
                    description: 'Collect terms and isolate \\( \\cos^2 x \\).',
                    workingLatex: '4\\cos^2 x = 1 \\;\\Longrightarrow\\; \\cos^2 x = \\tfrac{1}{4}',
                    explanation: 'Add \\(\\cos^2 x\\) to both sides, then divide by 4.'
                },
                {
                    stepNumber: 6,
                    description: 'Take both square roots.',
                    workingLatex: '\\cos x = \\pm \\tfrac{1}{2}',
                    explanation: 'Both signs must be considered — discarding the negative root is a common slip and loses two of the four solutions. Both values lie in \\([-1, 1]\\) and are non-zero, so both are admissible. \\(\\checkmark\\)'
                },
                {
                    stepNumber: 7,
                    description: 'Solve each branch.',
                    workingLatex: 'x = 60^\\circ,\\ 300^\\circ \\quad \\text{and} \\quad x = 120^\\circ,\\ 240^\\circ',
                    explanation: 'Reference \\(60^\\circ\\) in both cases. Cosine positive in Q1 and Q4 gives \\(60^\\circ,\\ 300^\\circ\\); cosine negative in Q2 and Q3 gives \\(180^\\circ - 60^\\circ = 120^\\circ\\) and \\(180^\\circ + 60^\\circ = 240^\\circ\\). The diagram below sketches \\( y = \\cos x \\) and the two horizontal lines.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 60, 90, 120, 180, 240, 270, 300, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [cosCurve()],
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
        id: 't5-004',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 04',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText: 'Show that \\( 4\\sin^2 x - 8\\sin x + 1 = 0 \\) has solutions in \\([0^\\circ, 360^\\circ]\\); find them to 1 d.p.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig equations', 'quadratic in sin', 'discriminant', 'quadratic formula'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( s = \\sin x \\) to expose the quadratic structure.',
                    workingLatex: '4s^2 - 8s + 1 = 0',
                    explanation: 'Replacing \\(\\sin x\\) with \\(s\\) makes it obvious we are dealing with an ordinary quadratic, so all the standard quadratic techniques (discriminant, factorising, the formula) apply.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the discriminant.',
                    workingLatex: '\\Delta = (-8)^2 - 4 \\cdot 4 \\cdot 1 = 64 - 16 = 48',
                    explanation: 'With coefficients \\(a = 4,\\ b = -8,\\ c = 1\\). Computing the discriminant first tells us whether real values of \\(s\\) (and hence \\(\\sin x\\)) exist at all — without that check, we might apply the quadratic formula only to discover no admissible root.'
                },
                {
                    stepNumber: 3,
                    description: 'Conclude that real roots exist.',
                    workingLatex: '\\Delta = 48 > 0',
                    explanation: 'Since \\(\\Delta > 0\\), the quadratic has two distinct real roots in \\(s\\). However, we still need to check each root lies in \\([-1, 1]\\) before claiming solutions of the original equation exist.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 's = \\dfrac{8 \\pm \\sqrt{48}}{8}',
                    explanation: 'Standard form: \\(s = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a} = \\dfrac{8 \\pm \\sqrt{48}}{8}\\). Note the sign: \\(-(-8) = 8\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Simplify the surd.',
                    workingLatex: '\\sqrt{48} = \\sqrt{16 \\cdot 3} = 4\\sqrt{3} \\;\\Longrightarrow\\; s = \\dfrac{8 \\pm 4\\sqrt{3}}{8} = 1 \\pm \\tfrac{\\sqrt{3}}{2}',
                    explanation: 'Factor the perfect square out of the radicand: \\(48 = 16 \\cdot 3\\). Dividing numerator and denominator by \\(4\\) gives the clean exact form \\( 1 \\pm \\tfrac{\\sqrt{3}}{2} \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Substitute back \\(\\sin x\\) for \\(s\\); evaluate both roots and reject the impossible one.',
                    workingLatex: '\\sin x \\approx 1.866 \\text{ (reject)} \\quad \\text{or} \\quad \\sin x \\approx 0.1340',
                    explanation: 'Numerically: \\(1 + \\tfrac{\\sqrt{3}}{2} \\approx 1.866\\) and \\(1 - \\tfrac{\\sqrt{3}}{2} \\approx 0.1340\\). Since \\(|\\sin x| \\leq 1\\) the upper root is impossible. The lower root is admissible, confirming that solutions to the original equation exist. \\(\\checkmark\\)'
                },
                {
                    stepNumber: 7,
                    description: 'Find the reference angle.',
                    workingLatex: '\\sin^{-1}(0.1340) \\approx 7.70^\\circ',
                    explanation: 'Use a calculator and keep the unrounded value — rounding too early causes drift in the second-quadrant solution.'
                },
                {
                    stepNumber: 8,
                    description: 'Apply quadrant rules.',
                    workingLatex: 'x \\approx 7.7^\\circ \\text{ (Q1)},\\ 180^\\circ - 7.70^\\circ = 172.3^\\circ \\text{ (Q2)}',
                    explanation: 'Sine positive in Q1 and Q2. Round only at the end.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 7.7, 90, 172.3, 180, 270, 360],
                        yTicks: [-1, 0, 0.134, 1],
                        yTickLabels: ['-1', '0', '0.134', '1'],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [sinCurve()],
                        lines: [{ from: [0, 0.134], to: [360, 0.134], color: '#dc2626', dashed: true, label: 'y \\approx 0.134', labelAt: [275, 0.3] }],
                        points: [
                            { at: [7.7, 0.134], label: '7.7°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [172.3, 0.134], label: '172.3°', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 7.7^\\circ,\\ 172.3^\\circ\\)'
        }
    },
    {
        id: 't5-005',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 05',
        difficulty: 'Challenge',
        answerType: 'exactValue',
        answerMeta: { exactForm: true },
        questionText: 'Solve \\( \\cos x\\,(\\cos x + 1) = \\sin^2 x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'Pythagoras', 'quadratic in cos', 'factorise'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the left-hand side.',
                    workingLatex: '\\cos^2 x + \\cos x = \\sin^2 x',
                    explanation: 'Distribute \\( \\cos x \\) over the bracket. Expanding before doing anything else makes the structure of the equation visible.'
                },
                {
                    stepNumber: 2,
                    description: 'Replace \\( \\sin^2 x \\) using the Pythagorean identity.',
                    workingLatex: '\\cos^2 x + \\cos x = 1 - \\cos^2 x',
                    explanation: 'From \\( \\sin^2 x + \\cos^2 x = 1 \\) we get \\( \\sin^2 x = 1 - \\cos^2 x \\). Reducing to a single trig function is the standard move for equations mixing \\(\\sin^2\\) and \\(\\cos^2\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Move every term to one side.',
                    workingLatex: '2\\cos^2 x + \\cos x - 1 = 0',
                    explanation: 'Add \\(\\cos^2 x\\) and subtract \\(1\\) from both sides. The result is a quadratic in \\(\\cos x\\), which we can attack with standard quadratic techniques.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise the quadratic in \\( \\cos x \\). Let \\( c = \\cos x \\).',
                    workingLatex: '(2\\cos x - 1)(\\cos x + 1) = 0',
                    explanation: 'Check by expanding: \\( (2c-1)(c+1) = 2c^2 + 2c - c - 1 = 2c^2 + c - 1 \\). \\(\\checkmark\\) The zero-product principle now gives two cases.'
                },
                {
                    stepNumber: 5,
                    description: 'Case 1: \\( \\cos x = \\tfrac{1}{2} \\).',
                    workingLatex: 'x = 60^\\circ,\\ 300^\\circ',
                    explanation: 'Reference angle \\(\\cos^{-1}(\\tfrac{1}{2}) = 60^\\circ\\); cosine positive in Q1 and Q4, giving \\(60^\\circ\\) and \\(360^\\circ - 60^\\circ = 300^\\circ\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Case 2: \\( \\cos x = -1 \\).',
                    workingLatex: 'x = 180^\\circ',
                    explanation: 'Cosine attains its minimum value of \\(-1\\) only at \\(180^\\circ\\) in \\([0^\\circ, 360^\\circ]\\) — no quadrant analysis needed for this special value. The diagram below shows \\( y = \\cos x \\) meeting \\( y = \\tfrac{1}{2} \\) twice and touching \\( y = -1 \\) once.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 60, 90, 180, 270, 300, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [cosCurve()],
                        lines: [
                            { from: [0, 0.5], to: [360, 0.5], color: '#dc2626', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [305, 0.65] },
                            { from: [0, -1], to: [360, -1], color: '#16a34a', dashed: true, label: 'y = -1', labelAt: [305, -1.2] }
                        ],
                        points: [
                            { at: [60, 0.5], label: '60°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [300, 0.5], label: '300°', labelAnchor: 'se', color: '#dc2626' },
                            { at: [180, -1], label: '180°', labelAnchor: 'sw', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 60^\\circ,\\ 180^\\circ,\\ 300^\\circ\\)'
        }
    },
    {
        id: 't5-006',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 06',
        difficulty: 'Challenge',
        answerType: 'exactValue',
        answerMeta: { exactForm: true },
        questionText: 'Solve \\( \\tan^2 x - \\tan x = 6 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'quadratic in tan', 'factorise'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange into standard quadratic form.',
                    workingLatex: '\\tan^2 x - \\tan x - 6 = 0',
                    explanation: 'Subtract \\(6\\) from both sides so the right-hand side is \\(0\\). This is now a standard-form quadratic in the variable \\(\\tan x\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise. Let \\( t = \\tan x \\).',
                    workingLatex: '(\\tan x - 3)(\\tan x + 2) = 0',
                    explanation: 'Look for factor pair of \\(-6\\) that adds to \\(-1\\): \\(-3\\) and \\(+2\\). Check by expanding: \\( (t-3)(t+2) = t^2 + 2t - 3t - 6 = t^2 - t - 6 \\). \\(\\checkmark\\)'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\tan x = 3 \\quad \\text{or} \\quad \\tan x = -2',
                    explanation: 'A product is zero exactly when one of its factors is zero. Two separate cases, both giving two solutions in \\([0^\\circ, 360^\\circ]\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Case 1: solve \\( \\tan x = 3 \\) — reference angle.',
                    workingLatex: '\\tan^{-1}(3) \\approx 71.57^\\circ',
                    explanation: 'No exact value here, so use a calculator. Keep the unrounded value to avoid drift in the second solution.'
                },
                {
                    stepNumber: 5,
                    description: 'Apply quadrant rules: tangent positive in Q1 and Q3.',
                    workingLatex: 'x \\approx 71.6^\\circ,\\ 180^\\circ + 71.57^\\circ = 251.6^\\circ',
                    explanation: 'Tangent has period \\(180^\\circ\\), so the second solution is the first plus \\(180^\\circ\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Case 2: solve \\( \\tan x = -2 \\) — reference angle.',
                    workingLatex: '\\tan^{-1}(2) \\approx 63.43^\\circ',
                    explanation: 'For the reference angle we always use the positive value; signs are then handled by quadrant rules. A common slip is to use \\(\\tan^{-1}(-2)\\) directly, which a calculator returns as a negative angle outside \\([0^\\circ, 360^\\circ]\\).'
                },
                {
                    stepNumber: 7,
                    description: 'Apply quadrant rules: tangent negative in Q2 and Q4.',
                    workingLatex: 'x \\approx 180^\\circ - 63.43^\\circ = 116.6^\\circ,\\ 360^\\circ - 63.43^\\circ = 296.6^\\circ',
                    explanation: 'Sketch \\( y = \\tan x \\) and read off the four intersections with the two horizontal lines.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -5, yMax: 5,
                        xTicks: [0, 71.6, 90, 116.6, 180, 251.6, 270, 296.6, 360],
                        yTicks: [-4, -2, 0, 2, 3, 4],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = tan x' : undefined, labelAt: i === 0 ? [10, 4.5] as [number, number] : undefined })),
                        lines: [
                            { from: [0, 3], to: [360, 3], color: '#dc2626', dashed: true, label: 'y = 3', labelAt: [320, 3.4] },
                            { from: [0, -2], to: [360, -2], color: '#16a34a', dashed: true, label: 'y = -2', labelAt: [320, -2.4] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [71.6, 3], label: '71.6°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [251.6, 3], label: '251.6°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [116.6, -2], label: '116.6°', labelAnchor: 'se', color: '#16a34a' },
                            { at: [296.6, -2], label: '296.6°', labelAnchor: 'se', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 71.6^\\circ,\\ 116.6^\\circ,\\ 251.6^\\circ,\\ 296.6^\\circ\\)'
        }
    },
    {
        id: 't5-007',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 07',
        difficulty: 'Challenge',
        answerType: 'exactValue',
        answerMeta: { exactForm: true },
        questionText: 'Solve \\( (2\\sin x - 1)(\\sin x + \\cos x) = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'factorise', 'tan x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '2\\sin x - 1 = 0 \\quad \\text{or} \\quad \\sin x + \\cos x = 0',
                    explanation: 'A product is zero exactly when one of its factors is zero. The left bracket is a simple linear equation in \\(\\sin x\\); the right bracket needs a tangent conversion.'
                },
                {
                    stepNumber: 2,
                    description: 'Case 1: isolate \\( \\sin x \\).',
                    workingLatex: '2\\sin x = 1 \\;\\Longrightarrow\\; \\sin x = \\tfrac{1}{2}',
                    explanation: 'Add \\(1\\), divide by \\(2\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve \\( \\sin x = \\tfrac{1}{2} \\) in \\([0^\\circ, 360^\\circ]\\).',
                    workingLatex: 'x = 30^\\circ,\\ 150^\\circ',
                    explanation: 'Reference angle \\(\\sin^{-1}(\\tfrac{1}{2}) = 30^\\circ\\); sine positive in Q1 and Q2, giving \\(30^\\circ\\) and \\(180^\\circ - 30^\\circ = 150^\\circ\\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 30, 90, 150, 180, 270, 360],
                        yTicks: [-1, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [sinCurve()],
                        lines: [{ from: [0, 0.5], to: [360, 0.5], color: '#dc2626', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [305, 0.65] }],
                        points: [
                            { at: [30, 0.5], label: '30°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [150, 0.5], label: '150°', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                },
                {
                    stepNumber: 4,
                    description: 'Case 2: divide \\( \\sin x + \\cos x = 0 \\) by \\( \\cos x \\).',
                    workingLatex: '\\tan x + 1 = 0 \\;\\Longrightarrow\\; \\tan x = -1',
                    explanation: 'Use the identity \\(\\tan x = \\sin x / \\cos x\\) after division. Safety check: if \\(\\cos x = 0\\) then the original bracket gives \\(\\sin x = 0\\), but then \\(\\sin^2 x + \\cos^2 x = 0 \\neq 1\\), a contradiction — so no solutions are lost when we divide.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve \\( \\tan x = -1 \\).',
                    workingLatex: 'x = 135^\\circ,\\ 315^\\circ',
                    explanation: 'Reference angle \\(\\tan^{-1}(1) = 45^\\circ\\); tangent negative in Q2 and Q4, giving \\(180^\\circ - 45^\\circ = 135^\\circ\\) and \\(360^\\circ - 45^\\circ = 315^\\circ\\). Combine with Case 1 to get all four solutions.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -5, yMax: 5,
                        xTicks: [0, 90, 135, 180, 270, 315, 360],
                        yTicks: [-4, -2, -1, 0, 2, 4],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = tan x' : undefined, labelAt: i === 0 ? [10, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [0, -1], to: [360, -1], color: '#16a34a', dashed: true, label: 'y = -1', labelAt: [305, -1.4] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [135, -1], label: '135°', labelAnchor: 'sw', color: '#16a34a' },
                            { at: [315, -1], label: '315°', labelAnchor: 'sw', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 30^\\circ,\\ 135^\\circ,\\ 150^\\circ,\\ 315^\\circ\\)'
        }
    },
    {
        id: 't5-008',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 08',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText: 'Solve \\( \\cos x + \\sin x \\tan x = 2 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'identity', 'Pythagoras'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\tan x \\) using its definition.',
                    workingLatex: '\\cos x + \\sin x \\cdot \\dfrac{\\sin x}{\\cos x} = 2',
                    explanation: 'Identity \\( \\tan x = \\sin x / \\cos x \\). The equation implicitly requires \\(\\cos x \\neq 0\\); track this restriction.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the second term.',
                    workingLatex: '\\cos x + \\dfrac{\\sin^2 x}{\\cos x} = 2',
                    explanation: '\\( \\sin x \\cdot \\sin x = \\sin^2 x \\). The equation now has the form (algebra)+(fraction)=constant.'
                },
                {
                    stepNumber: 3,
                    description: 'Combine the left-hand side over a common denominator.',
                    workingLatex: '\\dfrac{\\cos^2 x + \\sin^2 x}{\\cos x} = 2',
                    explanation: 'Multiply \\(\\cos x\\) by \\(\\cos x / \\cos x\\) so both terms share the denominator \\(\\cos x\\). This exposes the Pythagorean pair in the numerator.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the Pythagorean identity to the numerator.',
                    workingLatex: '\\dfrac{1}{\\cos x} = 2',
                    explanation: 'The numerator \\(\\sin^2 x + \\cos^2 x\\) collapses to \\(1\\) — a satisfying simplification that turns the problem into a basic linear equation in \\(1/\\cos x\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Take reciprocals.',
                    workingLatex: '\\cos x = \\tfrac{1}{2}',
                    explanation: 'Valid because both sides are non-zero (\\(2 \\neq 0\\) and we already noted \\(\\cos x \\neq 0\\)).'
                },
                {
                    stepNumber: 6,
                    description: 'Solve \\( \\cos x = \\tfrac{1}{2} \\) in \\([0^\\circ, 360^\\circ]\\).',
                    workingLatex: 'x = 60^\\circ,\\ 300^\\circ',
                    explanation: 'Reference \\(\\cos^{-1}(\\tfrac{1}{2}) = 60^\\circ\\); cosine positive in Q1 and Q4. Both solutions have \\(\\cos x \\neq 0\\), so the implicit restriction is satisfied. \\(\\checkmark\\)',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 60, 90, 180, 270, 300, 360],
                        yTicks: [-1, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [cosCurve()],
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
        id: 't5-009',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 09',
        difficulty: 'Challenge',
        answerType: 'exactValue',
        answerMeta: { exactForm: true },
        questionText: 'Solve \\( \\cos^2 x - 5\\sin x - 5 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'Pythagoras', 'quadratic in sin', 'factorise'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\cos^2 x \\) using the Pythagorean identity.',
                    workingLatex: '(1 - \\sin^2 x) - 5\\sin x - 5 = 0',
                    explanation: '\\(\\cos^2 x = 1 - \\sin^2 x\\). Reducing to a single trig function (here, sine) is the standard move when an equation mixes \\(\\sin\\) and \\(\\cos^2\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and simplify the constants.',
                    workingLatex: '-\\sin^2 x - 5\\sin x - 4 = 0',
                    explanation: 'Combine \\(1 - 5 = -4\\). The leading coefficient is negative, which is awkward — multiplying through by \\(-1\\) tidies the form.'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply through by \\(-1\\).',
                    workingLatex: '\\sin^2 x + 5\\sin x + 4 = 0',
                    explanation: 'Now in standard quadratic form with a positive leading coefficient, ready to factorise.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise. Let \\( s = \\sin x \\).',
                    workingLatex: '(\\sin x + 1)(\\sin x + 4) = 0',
                    explanation: 'Look for factor pair of \\(+4\\) that adds to \\(+5\\): \\(+1\\) and \\(+4\\). Check by expanding: \\( (s+1)(s+4) = s^2 + 5s + 4 \\). \\(\\checkmark\\)'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\sin x = -1 \\quad \\text{or} \\quad \\sin x = -4',
                    explanation: 'Two cases. The first is admissible (sine attains \\(-1\\)); the second is not.'
                },
                {
                    stepNumber: 6,
                    description: 'Reject \\( \\sin x = -4 \\).',
                    workingLatex: '|\\sin x| \\leq 1 \\;\\Longrightarrow\\; \\sin x = -4 \\text{ has no real } x',
                    explanation: 'Sine is bounded between \\(-1\\) and \\(1\\), so this root is impossible. Forgetting to check this bound and trying to use \\(\\sin^{-1}(-4)\\) on a calculator is a common slip — the calculator will return a domain error.'
                },
                {
                    stepNumber: 7,
                    description: 'Solve \\( \\sin x = -1 \\) in \\([0^\\circ, 360^\\circ]\\).',
                    workingLatex: 'x = 270^\\circ',
                    explanation: 'Sine reaches its minimum value of \\(-1\\) only at \\(270^\\circ\\) — no quadrant rule is needed for this special value.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [sinCurve()],
                        lines: [{ from: [0, -1], to: [360, -1], color: '#dc2626', dashed: true, label: 'y = -1', labelAt: [305, -1.2] }],
                        points: [
                            { at: [270, -1], label: '270°', labelAnchor: 'sw', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 270^\\circ\\)'
        }
    },
    {
        id: 't5-010',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 10',
        difficulty: 'Challenge',
        answerType: 'exactValue',
        answerMeta: { exactForm: true },
        questionText: 'Solve \\( 2\\sin x \\cos x = \\sqrt{3}\\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'factorise', 'sin', 'cos'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Bring everything to one side.',
                    workingLatex: '2\\sin x \\cos x - \\sqrt{3}\\cos x = 0',
                    explanation: 'Both terms share a factor of \\(\\cos x\\), so we should factor rather than divide. Dividing by \\(\\cos x\\) would lose every solution where \\(\\cos x = 0\\) — a classic mistake.'
                },
                {
                    stepNumber: 2,
                    description: 'Factor out the common \\( \\cos x \\).',
                    workingLatex: '\\cos x \\,(2\\sin x - \\sqrt{3}) = 0',
                    explanation: 'Pull \\(\\cos x\\) out front. The zero-product principle now gives two independent cases.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\cos x = 0 \\quad \\text{or} \\quad 2\\sin x - \\sqrt{3} = 0',
                    explanation: 'A product is zero exactly when one of its factors is zero.'
                },
                {
                    stepNumber: 4,
                    description: 'Case 1: solve \\( \\cos x = 0 \\) in \\([0^\\circ, 360^\\circ]\\).',
                    workingLatex: 'x = 90^\\circ,\\ 270^\\circ',
                    explanation: 'Standard zeros of cosine. These are the angles where the cosine curve crosses the x-axis.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [cosCurve()],
                        lines: [{ from: [0, 0], to: [360, 0], color: '#dc2626', dashed: true, label: 'y = 0', labelAt: [320, 0.15] }],
                        points: [
                            { at: [90, 0], label: '90°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [270, 0], label: '270°', labelAnchor: 'sw', color: '#dc2626' }
                        ]
                    }
                },
                {
                    stepNumber: 5,
                    description: 'Case 2: isolate \\( \\sin x \\).',
                    workingLatex: '2\\sin x = \\sqrt{3} \\;\\Longrightarrow\\; \\sin x = \\tfrac{\\sqrt{3}}{2}',
                    explanation: 'Add \\(\\sqrt{3}\\), divide by \\(2\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Solve \\( \\sin x = \\tfrac{\\sqrt{3}}{2} \\) in \\([0^\\circ, 360^\\circ]\\).',
                    workingLatex: 'x = 60^\\circ,\\ 120^\\circ',
                    explanation: 'Reference angle \\(\\sin^{-1}(\\tfrac{\\sqrt{3}}{2}) = 60^\\circ\\); sine positive in Q1 and Q2, giving \\(60^\\circ\\) and \\(180^\\circ - 60^\\circ = 120^\\circ\\). Combining both cases gives four distinct solutions.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 60, 90, 120, 180, 270, 360],
                        yTicks: [-1, 0, Math.sqrt(3) / 2, 1],
                        yTickLabels: ['-1', '0', '\\tfrac{\\sqrt{3}}{2}', '1'],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [sinCurve()],
                        lines: [{ from: [0, Math.sqrt(3) / 2], to: [360, Math.sqrt(3) / 2], color: '#16a34a', dashed: true, label: 'y = \\tfrac{\\sqrt{3}}{2}', labelAt: [285, 1.0] }],
                        points: [
                            { at: [60, Math.sqrt(3) / 2], label: '60°', labelAnchor: 'sw', color: '#16a34a' },
                            { at: [120, Math.sqrt(3) / 2], label: '120°', labelAnchor: 'se', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 60^\\circ,\\ 90^\\circ,\\ 120^\\circ,\\ 270^\\circ\\)'
        }
    },

    /* ──────────── STANDARD (12) ───────────────────────────────────── */
    {
        id: 't5-011',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 11',
        difficulty: 'Standard',
        answerType: 'exactValue',
        answerMeta: { exactForm: true },
        questionText: 'Solve \\( 2\\sin^2 x - \\sin x = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'factorise', 'sin'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Spot the common factor.',
                    workingLatex: '2\\sin^2 x - \\sin x = \\sin x \\,(2\\sin x - 1)',
                    explanation: 'Both terms contain a factor of \\(\\sin x\\), so we should factor rather than divide. Dividing by \\(\\sin x\\) is a classic mistake: it silently loses every solution where \\(\\sin x = 0\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\sin x = 0 \\quad \\text{or} \\quad 2\\sin x - 1 = 0',
                    explanation: 'A product is zero exactly when one of its factors is zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Case 1: solve \\( \\sin x = 0 \\) in \\([0^\\circ, 360^\\circ]\\).',
                    workingLatex: 'x = 0^\\circ,\\ 180^\\circ,\\ 360^\\circ',
                    explanation: 'Standard zeros of sine. Do not forget the endpoint \\(360^\\circ\\) — it is easy to miss if you only think of the principal zero at \\(0^\\circ\\) and the next zero at \\(180^\\circ\\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 30, 90, 150, 180, 270, 360],
                        yTicks: [-1, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [sinCurve()],
                        lines: [
                            { from: [0, 0], to: [360, 0], color: '#dc2626', dashed: true, label: 'y = 0', labelAt: [320, 0.15] },
                            { from: [0, 0.5], to: [360, 0.5], color: '#16a34a', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [305, 0.65] }
                        ],
                        points: [
                            { at: [0, 0], label: '0°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [180, 0], label: '180°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [360, 0], label: '360°', labelAnchor: 'se', color: '#dc2626' },
                            { at: [30, 0.5], label: '30°', labelAnchor: 'sw', color: '#16a34a' },
                            { at: [150, 0.5], label: '150°', labelAnchor: 'se', color: '#16a34a' }
                        ]
                    }
                },
                {
                    stepNumber: 4,
                    description: 'Case 2: isolate \\( \\sin x \\) and solve.',
                    workingLatex: '2\\sin x = 1 \\;\\Longrightarrow\\; \\sin x = \\tfrac{1}{2} \\;\\Longrightarrow\\; x = 30^\\circ,\\ 150^\\circ',
                    explanation: 'Reference angle \\(\\sin^{-1}(\\tfrac{1}{2}) = 30^\\circ\\); sine positive in Q1 and Q2 (shown in green on the diagram above). Combine with Case 1 to obtain all five solutions.'
                }
            ],
            finalAnswer: '\\(x = 0^\\circ,\\ 30^\\circ,\\ 150^\\circ,\\ 180^\\circ,\\ 360^\\circ\\)'
        }
    },
    {
        id: 't5-012',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 12',
        difficulty: 'Standard',
        answerType: 'exactValue',
        answerMeta: { exactForm: true },
        questionText: 'Solve \\( \\cos^2 x = \\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'factorise', 'cos'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Move every term to one side.',
                    workingLatex: '\\cos^2 x - \\cos x = 0',
                    explanation: 'Bring all terms to the LHS so the equation equals zero — a prerequisite for factoring.'
                },
                {
                    stepNumber: 2,
                    description: 'Factor out the common \\( \\cos x \\).',
                    workingLatex: '\\cos x \\,(\\cos x - 1) = 0',
                    explanation: 'Both terms share a factor of \\(\\cos x\\). Dividing instead of factoring would silently discard every solution where \\(\\cos x = 0\\) — a classic mistake.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\cos x = 0 \\quad \\text{or} \\quad \\cos x = 1',
                    explanation: 'A product is zero exactly when one of its factors is zero. Two cases.'
                },
                {
                    stepNumber: 4,
                    description: 'Case 1: solve \\( \\cos x = 0 \\) in \\([0^\\circ, 360^\\circ]\\).',
                    workingLatex: 'x = 90^\\circ,\\ 270^\\circ',
                    explanation: 'Standard zeros of cosine — angles where the cosine curve crosses the x-axis.'
                },
                {
                    stepNumber: 5,
                    description: 'Case 2: solve \\( \\cos x = 1 \\) in \\([0^\\circ, 360^\\circ]\\).',
                    workingLatex: 'x = 0^\\circ,\\ 360^\\circ',
                    explanation: 'Cosine reaches its maximum value of \\(1\\) at the endpoints of \\([0^\\circ, 360^\\circ]\\). The diagram below shows \\( y = \\cos x \\) meeting both horizontal lines.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [cosCurve()],
                        lines: [
                            { from: [0, 0], to: [360, 0], color: '#dc2626', dashed: true, label: 'y = 0', labelAt: [320, 0.15] },
                            { from: [0, 1], to: [360, 1], color: '#16a34a', dashed: true, label: 'y = 1', labelAt: [305, 1.18] }
                        ],
                        points: [
                            { at: [90, 0], label: '90°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [270, 0], label: '270°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [0, 1], label: '0°', labelAnchor: 'se', color: '#16a34a' },
                            { at: [360, 1], label: '360°', labelAnchor: 'se', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 0^\\circ,\\ 90^\\circ,\\ 270^\\circ,\\ 360^\\circ\\)'
        }
    },
    {
        id: 't5-013',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 13',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText: 'Solve \\( \\tan^2 x = 3 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'tan', 'difference of squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take both square roots.',
                    workingLatex: '\\tan x = \\pm \\sqrt{3}',
                    explanation: 'Both signs must be considered when taking a square root. Forgetting the negative branch is a classic slip that loses half the solutions.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the reference angle.',
                    workingLatex: '\\tan^{-1}(\\sqrt{3}) = 60^\\circ',
                    explanation: 'Use the positive value to find the reference angle; signs are handled by quadrant rules.'
                },
                {
                    stepNumber: 3,
                    description: 'Case 1: solve \\( \\tan x = \\sqrt{3} \\).',
                    workingLatex: 'x = 60^\\circ,\\ 240^\\circ',
                    explanation: 'Tangent positive in Q1 and Q3, giving \\(60^\\circ\\) and \\(60^\\circ + 180^\\circ = 240^\\circ\\) (tangent has period \\(180^\\circ\\)).'
                },
                {
                    stepNumber: 4,
                    description: 'Case 2: solve \\( \\tan x = -\\sqrt{3} \\).',
                    workingLatex: 'x = 120^\\circ,\\ 300^\\circ',
                    explanation: 'Tangent negative in Q2 and Q4, giving \\(180^\\circ - 60^\\circ = 120^\\circ\\) and \\(360^\\circ - 60^\\circ = 300^\\circ\\). The diagram below shows the four intersections.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -5, yMax: 5,
                        xTicks: [0, 60, 90, 120, 180, 240, 270, 300, 360],
                        yTicks: [-4, -Math.sqrt(3), 0, Math.sqrt(3), 4],
                        yTickLabels: ['-4', '-\\sqrt{3}', '0', '\\sqrt{3}', '4'],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = tan x' : undefined, labelAt: i === 0 ? [30, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [0, Math.sqrt(3)], to: [360, Math.sqrt(3)], color: '#dc2626', dashed: true, label: 'y = \\sqrt{3}', labelAt: [305, 2.1] },
                            { from: [0, -Math.sqrt(3)], to: [360, -Math.sqrt(3)], color: '#16a34a', dashed: true, label: 'y = -\\sqrt{3}', labelAt: [290, -2.3] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [60, Math.sqrt(3)], label: '60°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [240, Math.sqrt(3)], label: '240°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [120, -Math.sqrt(3)], label: '120°', labelAnchor: 'sw', color: '#16a34a' },
                            { at: [300, -Math.sqrt(3)], label: '300°', labelAnchor: 'sw', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 60^\\circ,\\ 120^\\circ,\\ 240^\\circ,\\ 300^\\circ\\)'
        }
    },
    {
        id: 't5-014',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 14',
        difficulty: 'Standard',
        answerType: 'exactValue',
        answerMeta: { exactForm: true },
        questionText: 'Solve \\( 2\\cos^2 x + 3\\cos x + 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'quadratic in cos', 'factorise'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the form: quadratic in \\( \\cos x \\). Let \\( c = \\cos x \\).',
                    workingLatex: '2c^2 + 3c + 1 = 0',
                    explanation: 'Substituting \\(c = \\cos x\\) makes the structure obvious: it is just a standard quadratic in \\(c\\). Anything we can do to a quadratic — factor, use the formula, complete the square — we can do here.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: '(2c + 1)(c + 1) = 0',
                    explanation: 'Look for factor pair of \\(2 \\cdot 1 = 2\\) that adds to \\(3\\): \\(1\\) and \\(2\\). Split the middle term: \\(2c^2 + 2c + c + 1 = 2c(c+1) + (c+1) = (2c+1)(c+1)\\). \\(\\checkmark\\)'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\cos x = -\\tfrac{1}{2} \\quad \\text{or} \\quad \\cos x = -1',
                    explanation: 'Each root lies in \\([-1, 1]\\), so both are admissible. (If a root fell outside this range it would have to be rejected.)'
                },
                {
                    stepNumber: 4,
                    description: 'Case 1: solve \\( \\cos x = -\\tfrac{1}{2} \\).',
                    workingLatex: 'x = 120^\\circ,\\ 240^\\circ',
                    explanation: 'Reference angle \\(\\cos^{-1}(\\tfrac{1}{2}) = 60^\\circ\\); cosine negative in Q2 and Q3, giving \\(180^\\circ - 60^\\circ = 120^\\circ\\) and \\(180^\\circ + 60^\\circ = 240^\\circ\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Case 2: solve \\( \\cos x = -1 \\).',
                    workingLatex: 'x = 180^\\circ',
                    explanation: 'Cosine reaches its minimum value of \\(-1\\) only at \\(180^\\circ\\) in \\([0^\\circ, 360^\\circ]\\) — no quadrant analysis needed. The diagram below shows \\( y = \\cos x \\) meeting both horizontal lines.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 120, 180, 240, 270, 360],
                        yTicks: [-1, -0.5, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [cosCurve()],
                        lines: [
                            { from: [0, -0.5], to: [360, -0.5], color: '#dc2626', dashed: true, label: 'y = -\\tfrac{1}{2}', labelAt: [290, -0.7] },
                            { from: [0, -1], to: [360, -1], color: '#16a34a', dashed: true, label: 'y = -1', labelAt: [305, -1.2] }
                        ],
                        points: [
                            { at: [120, -0.5], label: '120°', labelAnchor: 'se', color: '#dc2626' },
                            { at: [240, -0.5], label: '240°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [180, -1], label: '180°', labelAnchor: 'sw', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 120^\\circ,\\ 180^\\circ,\\ 240^\\circ\\)'
        }
    },
    {
        id: 't5-015',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 15',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText: 'Solve \\( 2\\sin^2 x - 5\\cos x - 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'Pythagoras', 'quadratic in cos'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\sin^2 x \\) using the Pythagorean identity.',
                    workingLatex: '2(1 - \\cos^2 x) - 5\\cos x - 1 = 0',
                    explanation: '\\(\\sin^2 x = 1 - \\cos^2 x\\). The aim is to reduce the equation to a single trig function — here cosine — which we can then treat algebraically.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the bracket.',
                    workingLatex: '2 - 2\\cos^2 x - 5\\cos x - 1 = 0',
                    explanation: 'Distribute the factor of \\(2\\) over the bracket.'
                },
                {
                    stepNumber: 3,
                    description: 'Combine constants and multiply through by \\(-1\\).',
                    workingLatex: '2\\cos^2 x + 5\\cos x - 1 = 0',
                    explanation: 'Combine \\(2 - 1 = 1\\) and rearrange so the leading coefficient is positive. The result is a standard quadratic in \\(\\cos x\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Try to factor; this one does not factor cleanly, so use the quadratic formula.',
                    workingLatex: '\\cos x = \\dfrac{-5 \\pm \\sqrt{5^2 - 4 \\cdot 2 \\cdot (-1)}}{2 \\cdot 2} = \\dfrac{-5 \\pm \\sqrt{33}}{4}',
                    explanation: 'Coefficients \\(a = 2,\\ b = 5,\\ c = -1\\); discriminant \\(\\Delta = 25 + 8 = 33\\), which is not a perfect square, so the roots are irrational.'
                },
                {
                    stepNumber: 5,
                    description: 'Evaluate numerically.',
                    workingLatex: '\\cos x \\approx 0.1862 \\quad \\text{or} \\quad \\cos x \\approx -2.686',
                    explanation: 'Using \\(\\sqrt{33} \\approx 5.745\\): \\((-5 + 5.745)/4 \\approx 0.186\\); \\((-5 - 5.745)/4 \\approx -2.686\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Reject the impossible root.',
                    workingLatex: '\\cos x \\approx -2.686 \\text{ (reject)} \\quad \\text{since} \\quad |\\cos x| \\leq 1',
                    explanation: 'Always check both roots lie in \\([-1, 1]\\) before continuing — using \\(\\cos^{-1}\\) on an out-of-range value will produce a calculator error.'
                },
                {
                    stepNumber: 7,
                    description: 'Find the reference angle.',
                    workingLatex: '\\cos^{-1}(0.1862) \\approx 79.27^\\circ',
                    explanation: 'Keep the unrounded value to avoid drift when computing the second solution.'
                },
                {
                    stepNumber: 8,
                    description: 'Apply quadrant rules: cosine positive in Q1 and Q4.',
                    workingLatex: 'x \\approx 79.3^\\circ,\\ 360^\\circ - 79.27^\\circ = 280.7^\\circ',
                    explanation: 'Two solutions, each rounded to 1 d.p. only at the very end.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 79.3, 90, 180, 270, 280.7, 360],
                        yTicks: [-1, 0, 0.1862, 1],
                        yTickLabels: ['-1', '0', '0.186', '1'],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [cosCurve()],
                        lines: [{ from: [0, 0.1862], to: [360, 0.1862], color: '#dc2626', dashed: true, label: 'y \\approx 0.186', labelAt: [275, 0.32] }],
                        points: [
                            { at: [79.3, 0.1862], label: '79.3°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [280.7, 0.1862], label: '280.7°', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 79.3^\\circ,\\ 280.7^\\circ\\)'
        }
    },
    {
        id: 't5-016',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 16',
        difficulty: 'Standard',
        answerType: 'exactValue',
        answerMeta: { exactForm: true },
        questionText: 'Solve \\( 5\\sin^2 x + 2\\sin x - 3 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p. where not exact.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'quadratic in sin', 'factorise'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the quadratic in \\( \\sin x \\). Let \\( s = \\sin x \\).',
                    workingLatex: '5s^2 + 2s - 3 = 0',
                    explanation: 'The substitution \\(s = \\sin x\\) makes the structure clearer: an ordinary quadratic in \\(s\\). Anything we can do to a quadratic — factor, formula, complete the square — we can do here.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: '(5s - 3)(s + 1) = 0',
                    explanation: 'Look for a factor pair of \\(5 \\cdot (-3) = -15\\) that adds to \\(2\\): \\(5\\) and \\(-3\\). Split the middle term: \\(5s^2 + 5s - 3s - 3 = 5s(s+1) - 3(s+1) = (5s-3)(s+1)\\). \\(\\checkmark\\)'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\sin x = \\tfrac{3}{5} = 0.6 \\quad \\text{or} \\quad \\sin x = -1',
                    explanation: 'Both roots lie in \\([-1, 1]\\), so both are admissible.'
                },
                {
                    stepNumber: 4,
                    description: 'Case 1: solve \\( \\sin x = 0.6 \\).',
                    workingLatex: '\\sin^{-1}(0.6) \\approx 36.87^\\circ \\;\\Longrightarrow\\; x \\approx 36.9^\\circ,\\ 143.1^\\circ',
                    explanation: 'Reference angle from a calculator. Sine positive in Q1 and Q2, so \\(36.87^\\circ\\) and \\(180^\\circ - 36.87^\\circ = 143.13^\\circ\\). Round to 1 d.p. at the end.'
                },
                {
                    stepNumber: 5,
                    description: 'Case 2: solve \\( \\sin x = -1 \\).',
                    workingLatex: 'x = 270^\\circ',
                    explanation: 'Sine reaches its minimum value of \\(-1\\) only at \\(270^\\circ\\) in \\([0^\\circ, 360^\\circ]\\) — exact, no quadrant analysis needed.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 36.9, 90, 143.1, 180, 270, 360],
                        yTicks: [-1, 0, 0.6, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [sinCurve()],
                        lines: [
                            { from: [0, 0.6], to: [360, 0.6], color: '#dc2626', dashed: true, label: 'y = 0.6', labelAt: [305, 0.75] },
                            { from: [0, -1], to: [360, -1], color: '#16a34a', dashed: true, label: 'y = -1', labelAt: [305, -1.2] }
                        ],
                        points: [
                            { at: [36.9, 0.6], label: '36.9°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [143.1, 0.6], label: '143.1°', labelAnchor: 'se', color: '#dc2626' },
                            { at: [270, -1], label: '270°', labelAnchor: 'sw', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 36.9^\\circ,\\ 143.1^\\circ,\\ 270^\\circ\\)'
        }
    },
    {
        id: 't5-017',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 17',
        difficulty: 'Standard',
        answerType: 'exactValue',
        answerMeta: { exactForm: true },
        questionText: 'Solve \\( \\sin x \\cos x = \\sin x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'factorise'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Move everything to one side.',
                    workingLatex: '\\sin x \\cos x - \\sin x = 0',
                    explanation: 'Subtract \\(\\sin x\\) from both sides so the equation equals zero — a prerequisite for factoring.'
                },
                {
                    stepNumber: 2,
                    description: 'Factor out the common \\( \\sin x \\).',
                    workingLatex: '\\sin x \\,(\\cos x - 1) = 0',
                    explanation: 'Both terms share a factor of \\(\\sin x\\). Dividing the original equation by \\(\\sin x\\) is tempting but a classic mistake — it would silently lose every solution where \\(\\sin x = 0\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\sin x = 0 \\quad \\text{or} \\quad \\cos x - 1 = 0',
                    explanation: 'A product is zero exactly when one factor is zero.'
                },
                {
                    stepNumber: 4,
                    description: 'Case 1: solve \\( \\sin x = 0 \\) in \\([0^\\circ, 360^\\circ]\\).',
                    workingLatex: 'x = 0^\\circ,\\ 180^\\circ,\\ 360^\\circ',
                    explanation: 'Standard zeros of sine; include both endpoints.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [sinCurve()],
                        lines: [{ from: [0, 0], to: [360, 0], color: '#dc2626', dashed: true, label: 'y = 0', labelAt: [320, 0.15] }],
                        points: [
                            { at: [0, 0], label: '0°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [180, 0], label: '180°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [360, 0], label: '360°', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                },
                {
                    stepNumber: 5,
                    description: 'Case 2: solve \\( \\cos x = 1 \\) in \\([0^\\circ, 360^\\circ]\\).',
                    workingLatex: 'x = 0^\\circ,\\ 360^\\circ',
                    explanation: 'Cosine reaches its maximum value of \\(1\\) at the endpoints. Notice that both solutions already appeared in Case 1, so they contribute no new values to the final solution set — but listing them confirms the union of cases is complete.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 180, 270, 360],
                        yTicks: [-1, 0, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [cosCurve()],
                        lines: [{ from: [0, 1], to: [360, 1], color: '#16a34a', dashed: true, label: 'y = 1', labelAt: [305, 1.18] }],
                        points: [
                            { at: [0, 1], label: '0°', labelAnchor: 'se', color: '#16a34a' },
                            { at: [360, 1], label: '360°', labelAnchor: 'se', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 0^\\circ,\\ 180^\\circ,\\ 360^\\circ\\)'
        }
    },
    {
        id: 't5-018',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 18',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText: 'Solve \\( 4\\sin^2 x + 4\\cos x = 5 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'Pythagoras', 'quadratic in cos', 'perfect square'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\sin^2 x \\) using the Pythagorean identity.',
                    workingLatex: '4(1 - \\cos^2 x) + 4\\cos x = 5',
                    explanation: '\\(\\sin^2 x = 1 - \\cos^2 x\\). Reducing to a single trig function (cosine) lets us treat the equation as a standard quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and collect.',
                    workingLatex: '4 - 4\\cos^2 x + 4\\cos x = 5',
                    explanation: 'Distribute the \\(4\\) over the bracket.'
                },
                {
                    stepNumber: 3,
                    description: 'Move everything to one side and tidy the sign.',
                    workingLatex: '4\\cos^2 x - 4\\cos x + 1 = 0',
                    explanation: '\\(-4\\cos^2 x + 4\\cos x - 1 = 0\\), then multiply by \\(-1\\) so the leading coefficient is positive.'
                },
                {
                    stepNumber: 4,
                    description: 'Recognise the perfect square.',
                    workingLatex: '(2\\cos x - 1)^2 = 0',
                    explanation: 'Check: \\((2c)^2 - 2 \\cdot (2c) \\cdot 1 + 1^2 = 4c^2 - 4c + 1\\). \\(\\checkmark\\) A perfect-square quadratic has a repeated root.'
                },
                {
                    stepNumber: 5,
                    description: 'Take square roots and isolate \\(\\cos x\\).',
                    workingLatex: '2\\cos x - 1 = 0 \\;\\Longrightarrow\\; \\cos x = \\tfrac{1}{2}',
                    explanation: 'Only one value of \\(\\cos x\\) — but each value of \\(\\cos x\\) in \\((-1, 1)\\) still gives two solutions in \\([0^\\circ, 360^\\circ]\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Solve \\( \\cos x = \\tfrac{1}{2} \\) in \\([0^\\circ, 360^\\circ]\\).',
                    workingLatex: 'x = 60^\\circ,\\ 300^\\circ',
                    explanation: 'Reference \\(\\cos^{-1}(\\tfrac{1}{2}) = 60^\\circ\\); cosine positive in Q1 and Q4, giving \\(60^\\circ\\) and \\(360^\\circ - 60^\\circ = 300^\\circ\\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 60, 90, 180, 270, 300, 360],
                        yTicks: [-1, 0, 0.5, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [cosCurve()],
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
        id: 't5-019',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 19',
        difficulty: 'Standard',
        answerType: 'exactValue',
        answerMeta: { exactForm: true },
        questionText: 'Solve \\( 6\\tan^2 x - \\tan x - 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'quadratic in tan', 'factorise'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the quadratic in \\( \\tan x \\). Let \\( t = \\tan x \\).',
                    workingLatex: '6t^2 - t - 1 = 0',
                    explanation: 'Substituting \\(t = \\tan x\\) reveals an ordinary quadratic. The equation is undefined at \\(x = 90^\\circ, 270^\\circ\\), but those are not candidate solutions since the quadratic has no infinite root.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: '(3t + 1)(2t - 1) = 0',
                    explanation: 'Look for factor pair of \\(6 \\cdot (-1) = -6\\) that adds to \\(-1\\): \\(-3\\) and \\(+2\\). Check: \\((3t+1)(2t-1) = 6t^2 - 3t + 2t - 1 = 6t^2 - t - 1\\). \\(\\checkmark\\)'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\tan x = -\\tfrac{1}{3} \\quad \\text{or} \\quad \\tan x = \\tfrac{1}{2}',
                    explanation: 'Two separate cases, each contributing two solutions in \\([0^\\circ, 360^\\circ]\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Case 1: solve \\( \\tan x = -\\tfrac{1}{3} \\).',
                    workingLatex: '\\tan^{-1}(\\tfrac{1}{3}) \\approx 18.43^\\circ;\\ x \\approx 161.6^\\circ,\\ 341.6^\\circ',
                    explanation: 'Use the positive value for the reference angle, then apply quadrant rules: tan negative in Q2 and Q4, giving \\(180^\\circ - 18.43^\\circ = 161.57^\\circ\\) and \\(360^\\circ - 18.43^\\circ = 341.57^\\circ\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Case 2: solve \\( \\tan x = \\tfrac{1}{2} \\).',
                    workingLatex: '\\tan^{-1}(\\tfrac{1}{2}) \\approx 26.57^\\circ;\\ x \\approx 26.6^\\circ,\\ 206.6^\\circ',
                    explanation: 'Tan positive in Q1 and Q3, giving \\(26.57^\\circ\\) and \\(180^\\circ + 26.57^\\circ = 206.57^\\circ\\). The diagram below sketches \\( y = \\tan x \\) and the two horizontal lines.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -5, yMax: 5,
                        xTicks: [0, 26.6, 90, 161.6, 180, 206.6, 270, 341.6, 360],
                        yTicks: [-4, -2, -1 / 3, 0, 1 / 2, 2, 4],
                        yTickLabels: ['-4', '-2', '-\\tfrac{1}{3}', '0', '\\tfrac{1}{2}', '2', '4'],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = tan x' : undefined, labelAt: i === 0 ? [30, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [0, 1 / 2], to: [360, 1 / 2], color: '#dc2626', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [290, 0.95] },
                            { from: [0, -1 / 3], to: [360, -1 / 3], color: '#16a34a', dashed: true, label: 'y = -\\tfrac{1}{3}', labelAt: [285, -0.78] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [26.6, 0.5], label: '26.6°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [206.6, 0.5], label: '206.6°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [161.6, -1 / 3], label: '161.6°', labelAnchor: 'se', color: '#16a34a' },
                            { at: [341.6, -1 / 3], label: '341.6°', labelAnchor: 'se', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 26.6^\\circ,\\ 161.6^\\circ,\\ 206.6^\\circ,\\ 341.6^\\circ\\)'
        }
    },
    {
        id: 't5-020',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 20',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText: 'Solve \\( 2\\cos 2x = 1 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'cos(kx)', 'multiple angle'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Isolate \\( \\cos 2x \\).',
                    workingLatex: '\\cos 2x = \\tfrac{1}{2}',
                    explanation: 'Divide both sides by 2. The equation is now in the familiar form \\(\\cos(\\text{multiple of } x) = k\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( u = 2x \\) and find the interval for \\(u\\).',
                    workingLatex: '0^\\circ \\leq u \\leq 720^\\circ',
                    explanation: 'When \\(x = 0\\), \\(u = 0\\); when \\(x = 360\\), \\(u = 720\\). Doubling the interval is essential — failing to do this is the most common slip and loses half the solutions, since cosine completes two full cycles as \\(u\\) goes from \\(0^\\circ\\) to \\(720^\\circ\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the reference angle.',
                    workingLatex: '\\cos^{-1}(\\tfrac{1}{2}) = 60^\\circ',
                    explanation: 'Standard exact value.'
                },
                {
                    stepNumber: 4,
                    description: 'List all solutions of \\( \\cos u = \\tfrac{1}{2} \\) in \\([0^\\circ, 720^\\circ]\\).',
                    workingLatex: 'u = 60^\\circ,\\ 300^\\circ,\\ 420^\\circ,\\ 660^\\circ',
                    explanation: 'In the first period, cosine positive in Q1 and Q4: \\(60^\\circ\\) and \\(360^\\circ - 60^\\circ = 300^\\circ\\). Add \\(360^\\circ\\) to each for the second period: \\(420^\\circ,\\ 660^\\circ\\). All four lie in the interval.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 725, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 60, 180, 300, 360, 420, 540, 660, 720],
                        yTicks: [-1, 0, 0.5, 1],
                        xLabel: 'u (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => cosDeg(x), 0, 720, 360), color: '#1d4ed8', label: 'y = \\cos u', labelAt: [40, 1.15] }],
                        lines: [{ from: [0, 0.5], to: [720, 0.5], color: '#dc2626', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [650, 0.65] }],
                        points: [
                            { at: [60, 0.5], label: '60°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [300, 0.5], label: '300°', labelAnchor: 'se', color: '#dc2626' },
                            { at: [420, 0.5], label: '420°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [660, 0.5], label: '660°', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                },
                {
                    stepNumber: 5,
                    description: 'Reverse the substitution: \\( x = u/2 \\).',
                    workingLatex: 'x = 30^\\circ,\\ 150^\\circ,\\ 210^\\circ,\\ 330^\\circ',
                    explanation: 'Halve each value of \\(u\\). All four lie in \\([0^\\circ, 360^\\circ]\\), the original required interval.'
                }
            ],
            finalAnswer: '\\(x = 30^\\circ,\\ 150^\\circ,\\ 210^\\circ,\\ 330^\\circ\\)'
        }
    },
    {
        id: 't5-021',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 21',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText: 'Solve \\( \\sin(x + 60^\\circ) = \\tfrac{1}{2} \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'sin', 'phase shift'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( u = x + 60^\\circ \\) and find the interval for \\(u\\).',
                    workingLatex: '60^\\circ \\leq u \\leq 420^\\circ',
                    explanation: 'When \\(x = 0\\), \\(u = 60\\); when \\(x = 360\\), \\(u = 420\\). The width of the interval is unchanged because the coefficient of \\(x\\) is \\(1\\); only the endpoints shift.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the reference angle.',
                    workingLatex: '\\sin^{-1}(\\tfrac{1}{2}) = 30^\\circ',
                    explanation: 'Standard exact value.'
                },
                {
                    stepNumber: 3,
                    description: 'List candidate solutions over a full period and beyond.',
                    workingLatex: '\\sin u = \\tfrac{1}{2}: \\ u = 30^\\circ,\\ 150^\\circ,\\ 390^\\circ,\\ 510^\\circ,\\ldots',
                    explanation: 'Sine positive in Q1 and Q2: \\(30^\\circ\\) and \\(150^\\circ\\). Add \\(360^\\circ\\) to each for the next period. Generating extras and filtering is safer than trying to compute the right set in one shot.'
                },
                {
                    stepNumber: 4,
                    description: 'Keep only the values in \\([60^\\circ, 420^\\circ]\\).',
                    workingLatex: 'u = 150^\\circ,\\ 390^\\circ',
                    explanation: '\\(30^\\circ\\) is below the lower endpoint and \\(510^\\circ\\) is above the upper endpoint, so both are discarded. The candidate \\(30^\\circ\\) is the trap here — forgetting to check the lower bound and keeping it would give an incorrect \\(x = -30^\\circ\\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 55, xMax: 425, yMin: -1.35, yMax: 1.35,
                        xTicks: [60, 90, 150, 180, 270, 360, 390, 420],
                        yTicks: [-1, 0, 0.5, 1],
                        xLabel: 'u (degrees)', yLabel: 'y',
                        curves: [{ points: sample((x) => sinDeg(x), 60, 420, 180), color: '#1d4ed8', label: 'y = \\sin u', labelAt: [70, 1.15] }],
                        lines: [{ from: [60, 0.5], to: [420, 0.5], color: '#dc2626', dashed: true, label: 'y = \\tfrac{1}{2}', labelAt: [355, 0.65] }],
                        points: [
                            { at: [150, 0.5], label: '150°', labelAnchor: 'se', color: '#dc2626' },
                            { at: [390, 0.5], label: '390°', labelAnchor: 'sw', color: '#dc2626' }
                        ]
                    }
                },
                {
                    stepNumber: 5,
                    description: 'Reverse the substitution: \\( x = u - 60^\\circ \\).',
                    workingLatex: 'x = 90^\\circ,\\ 330^\\circ',
                    explanation: 'Subtract \\(60^\\circ\\) from each \\(u\\). Both lie in \\([0^\\circ, 360^\\circ]\\).'
                }
            ],
            finalAnswer: '\\(x = 90^\\circ,\\ 330^\\circ\\)'
        }
    },
    {
        id: 't5-022',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 22',
        difficulty: 'Standard',
        answerType: 'expression',
        questionText: 'Solve \\( 2\\sin x - 3\\cos x = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'tan', 'homogeneous'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Check that dividing by \\( \\cos x \\) is safe.',
                    workingLatex: '\\text{If } \\cos x = 0,\\ \\sin x = \\pm 1 \\;\\Rightarrow\\; 2(\\pm 1) - 0 = \\pm 2 \\neq 0',
                    explanation: 'At \\(x = 90^\\circ\\) and \\(270^\\circ\\) the LHS is \\(\\pm 2\\), not \\(0\\), so neither is a solution. We can safely divide through by \\(\\cos x\\) without losing solutions.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide both sides by \\( \\cos x \\) to convert to tan.',
                    workingLatex: '2\\tan x - 3 = 0',
                    explanation: '\\( \\sin x / \\cos x = \\tan x \\); the constant \\(3\\cos x / \\cos x = 3\\). Converting to a single trig function (tangent) is the standard move for homogeneous-style equations \\(a\\sin x = b\\cos x\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Isolate \\( \\tan x \\).',
                    workingLatex: '\\tan x = \\tfrac{3}{2}',
                    explanation: 'Add 3 and divide by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Reference angle.',
                    workingLatex: '\\tan^{-1}(1.5) \\approx 56.31^\\circ',
                    explanation: 'Use a calculator; keep the unrounded value to avoid drift in the second solution.'
                },
                {
                    stepNumber: 5,
                    description: 'Apply quadrant rules: tangent positive in Q1 and Q3.',
                    workingLatex: 'x \\approx 56.3^\\circ,\\ 180^\\circ + 56.31^\\circ = 236.3^\\circ',
                    explanation: 'Tangent has period \\(180^\\circ\\), so the second solution is the first plus \\(180^\\circ\\). Round to 1 d.p. at the end.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -5, yMax: 5,
                        xTicks: [0, 56.3, 90, 180, 236.3, 270, 360],
                        yTicks: [-4, -2, 0, 1.5, 4],
                        yTickLabels: ['-4', '-2', '0', '\\tfrac{3}{2}', '4'],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = tan x' : undefined, labelAt: i === 0 ? [30, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [0, 1.5], to: [360, 1.5], color: '#dc2626', dashed: true, label: 'y = \\tfrac{3}{2}', labelAt: [305, 1.95] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [56.3, 1.5], label: '56.3°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [236.3, 1.5], label: '236.3°', labelAnchor: 'sw', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 56.3^\\circ,\\ 236.3^\\circ\\)'
        }
    },

    /* ──────────── CHALLENGE (8) ───────────────────────────────────── */
    {
        id: 't5-023',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 23',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText: 'Solve \\( 5\\cos^2 x - 6\\sin x + 4 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'Pythagoras', 'quadratic formula'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\cos^2 x \\) using the Pythagorean identity.',
                    workingLatex: '5(1 - \\sin^2 x) - 6\\sin x + 4 = 0',
                    explanation: '\\(\\cos^2 x = 1 - \\sin^2 x\\). The aim is to reduce the equation to a single trig function (sine) so we can treat it as a standard quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the bracket.',
                    workingLatex: '5 - 5\\sin^2 x - 6\\sin x + 4 = 0',
                    explanation: 'Distribute the factor of \\(5\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Combine constants and tidy the sign.',
                    workingLatex: '5\\sin^2 x + 6\\sin x - 9 = 0',
                    explanation: '\\(5 + 4 = 9\\), so \\(-5\\sin^2 x - 6\\sin x + 9 = 0\\); multiply by \\(-1\\) for a positive leading coefficient.'
                },
                {
                    stepNumber: 4,
                    description: 'Try to factor; the quadratic does not factor over the integers, so apply the formula. Let \\( s = \\sin x \\).',
                    workingLatex: '\\sin x = \\dfrac{-6 \\pm \\sqrt{6^2 - 4 \\cdot 5 \\cdot (-9)}}{2 \\cdot 5} = \\dfrac{-6 \\pm \\sqrt{216}}{10}',
                    explanation: 'Coefficients \\(a = 5,\\ b = 6,\\ c = -9\\); discriminant \\(\\Delta = 36 + 180 = 216\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Simplify the surd.',
                    workingLatex: '\\sqrt{216} = \\sqrt{36 \\cdot 6} = 6\\sqrt{6} \\;\\Longrightarrow\\; \\sin x = \\dfrac{-6 \\pm 6\\sqrt{6}}{10} = \\dfrac{-3 \\pm 3\\sqrt{6}}{5}',
                    explanation: 'Factor the perfect square out of the radicand: \\(216 = 36 \\cdot 6\\). Cancel the common factor of \\(2\\) from numerator and denominator.'
                },
                {
                    stepNumber: 6,
                    description: 'Evaluate numerically.',
                    workingLatex: '\\sin x \\approx 0.8697 \\quad \\text{or} \\quad \\sin x \\approx -2.0697',
                    explanation: 'Using \\(\\sqrt{6} \\approx 2.449\\): \\((-3 + 3 \\cdot 2.449)/5 \\approx 0.870\\); \\((-3 - 3 \\cdot 2.449)/5 \\approx -2.070\\).'
                },
                {
                    stepNumber: 7,
                    description: 'Reject the impossible root.',
                    workingLatex: '\\sin x \\approx -2.07 \\text{ (reject)} \\quad \\text{since} \\quad |\\sin x| \\leq 1',
                    explanation: 'Sine is bounded between \\(-1\\) and \\(1\\), so the lower root has no real \\(x\\). The upper root is admissible.'
                },
                {
                    stepNumber: 8,
                    description: 'Find the reference angle.',
                    workingLatex: '\\sin^{-1}(0.8697) \\approx 60.43^\\circ',
                    explanation: 'Calculator value; keep unrounded for the second solution.'
                },
                {
                    stepNumber: 9,
                    description: 'Apply quadrant rules: sine positive in Q1 and Q2.',
                    workingLatex: 'x \\approx 60.4^\\circ,\\ 180^\\circ - 60.43^\\circ = 119.6^\\circ',
                    explanation: 'Round to 1 d.p. at the end.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 60.4, 90, 119.6, 180, 270, 360],
                        yTicks: [-1, 0, 0.8697, 1],
                        yTickLabels: ['-1', '0', '0.870', '1'],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [sinCurve()],
                        lines: [{ from: [0, 0.8697], to: [360, 0.8697], color: '#dc2626', dashed: true, label: 'y \\approx 0.870', labelAt: [275, 1.02] }],
                        points: [
                            { at: [60.4, 0.8697], label: '60.4°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [119.6, 0.8697], label: '119.6°', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 60.4^\\circ,\\ 119.6^\\circ\\)'
        }
    },
    {
        id: 't5-024',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 24',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText: 'Show that \\( 3\\cos^2 x + 4\\sin x = 5 \\) has no solutions for any real \\( x \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig equations', 'Pythagoras', 'discriminant', 'no solutions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\cos^2 x \\) using the Pythagorean identity.',
                    workingLatex: '3(1 - \\sin^2 x) + 4\\sin x = 5',
                    explanation: '\\(\\cos^2 x = 1 - \\sin^2 x\\). Reducing to a single trig function (sine) lets us test for real roots via the discriminant.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the bracket.',
                    workingLatex: '3 - 3\\sin^2 x + 4\\sin x = 5',
                    explanation: 'Distribute the \\(3\\) over the bracket.'
                },
                {
                    stepNumber: 3,
                    description: 'Move all terms to one side; tidy the sign.',
                    workingLatex: '3\\sin^2 x - 4\\sin x + 2 = 0',
                    explanation: '\\(-3\\sin^2 x + 4\\sin x - 2 = 0\\), then multiply by \\(-1\\). Now in standard quadratic form with positive leading coefficient.'
                },
                {
                    stepNumber: 4,
                    description: 'Compute the discriminant. Let \\( s = \\sin x \\).',
                    workingLatex: '\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 3 \\cdot 2 = 16 - 24 = -8',
                    explanation: 'For \\(as^2 + bs + c\\) with \\(a = 3,\\ b = -4,\\ c = 2\\), compute the discriminant to test for real roots.'
                },
                {
                    stepNumber: 5,
                    description: 'Interpret the sign of the discriminant.',
                    workingLatex: '\\Delta = -8 < 0',
                    explanation: 'A negative discriminant means the quadratic in \\(s\\) has no real roots — there is no real value of \\(\\sin x\\) satisfying the equation.'
                },
                {
                    stepNumber: 6,
                    description: 'Conclude.',
                    workingLatex: '\\sin x \\text{ has no real value} \\;\\Longrightarrow\\; \\text{no real } x',
                    explanation: 'Since \\(\\sin x\\) is real for every real \\(x\\), and we have shown that no real value of \\(\\sin x\\) satisfies the equation, no real \\(x\\) can either.'
                }
            ],
            finalAnswer: 'No solutions.'
        }
    },
    {
        id: 't5-025',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 25',
        difficulty: 'Challenge',
        answerType: 'exactValue',
        answerMeta: { exactForm: true },
        questionText: 'Solve \\( \\tan^2 x - (1 + \\sqrt{3})\\tan x + \\sqrt{3} = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'quadratic in tan', 'factorise', 'exact'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the quadratic in \\( \\tan x \\). Let \\( t = \\tan x \\).',
                    workingLatex: 't^2 - (1 + \\sqrt{3})t + \\sqrt{3} = 0',
                    explanation: 'Substituting reveals an ordinary quadratic. The middle coefficient \\(1 + \\sqrt{3}\\) is a sum and the constant \\(\\sqrt{3}\\) is a product — a strong hint that the roots are \\(1\\) and \\(\\sqrt{3}\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise using the sum-and-product structure.',
                    workingLatex: '(\\tan x - 1)(\\tan x - \\sqrt{3}) = 0',
                    explanation: 'If roots are \\(1\\) and \\(\\sqrt{3}\\), the quadratic factors as \\((t-1)(t-\\sqrt{3})\\). Check: \\( (t-1)(t-\\sqrt{3}) = t^2 - \\sqrt{3}t - t + \\sqrt{3} = t^2 - (1+\\sqrt{3})t + \\sqrt{3} \\). \\(\\checkmark\\)'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\tan x = 1 \\quad \\text{or} \\quad \\tan x = \\sqrt{3}',
                    explanation: 'Two separate cases, each contributing two solutions in \\([0^\\circ, 360^\\circ]\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Case 1: solve \\( \\tan x = 1 \\).',
                    workingLatex: 'x = 45^\\circ,\\ 225^\\circ',
                    explanation: 'Reference angle \\(\\tan^{-1}(1) = 45^\\circ\\); tan positive in Q1 and Q3, giving \\(45^\\circ\\) and \\(45^\\circ + 180^\\circ = 225^\\circ\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Case 2: solve \\( \\tan x = \\sqrt{3} \\).',
                    workingLatex: 'x = 60^\\circ,\\ 240^\\circ',
                    explanation: 'Reference angle \\(\\tan^{-1}(\\sqrt{3}) = 60^\\circ\\); tan positive in Q1 and Q3, giving \\(60^\\circ\\) and \\(60^\\circ + 180^\\circ = 240^\\circ\\). The diagram below shows all four intersections.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -5, yMax: 5,
                        xTicks: [0, 45, 60, 90, 180, 225, 240, 270, 360],
                        yTicks: [-4, -2, 0, 1, Math.sqrt(3), 4],
                        yTickLabels: ['-4', '-2', '0', '1', '\\sqrt{3}', '4'],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = tan x' : undefined, labelAt: i === 0 ? [10, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#dc2626', dashed: true, label: 'y = 1', labelAt: [320, 1.4] },
                            { from: [0, Math.sqrt(3)], to: [360, Math.sqrt(3)], color: '#16a34a', dashed: true, label: 'y = \\sqrt{3}', labelAt: [305, 2.2] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [45, 1], label: '45°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [225, 1], label: '225°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [60, Math.sqrt(3)], label: '60°', labelAnchor: 'se', color: '#16a34a' },
                            { at: [240, Math.sqrt(3)], label: '240°', labelAnchor: 'se', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 45^\\circ,\\ 60^\\circ,\\ 225^\\circ,\\ 240^\\circ\\)'
        }
    },
    {
        id: 't5-026',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 26',
        difficulty: 'Challenge',
        answerType: 'exactValue',
        answerMeta: { exactForm: true },
        questionText: 'Solve \\( (\\sin x - \\cos x)(3\\sin x + \\cos x) = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p. where not exact.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'factorise', 'tan'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\sin x - \\cos x = 0 \\quad \\text{or} \\quad 3\\sin x + \\cos x = 0',
                    explanation: 'A product is zero exactly when one of its factors is zero. Each bracket has the homogeneous form \\(a\\sin x + b\\cos x = 0\\), which converts cleanly to a tan equation after dividing by \\(\\cos x\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Check that dividing by \\( \\cos x \\) is safe.',
                    workingLatex: '\\text{If } \\cos x = 0 \\text{ then each bracket would force } \\sin x = 0',
                    explanation: 'But \\(\\sin^2 + \\cos^2 = 1\\) means \\(\\sin x\\) and \\(\\cos x\\) cannot both be zero — contradiction. So \\(\\cos x \\neq 0\\) at any solution and we may safely divide.'
                },
                {
                    stepNumber: 3,
                    description: 'Case 1: divide \\( \\sin x - \\cos x = 0 \\) by \\( \\cos x \\).',
                    workingLatex: '\\tan x - 1 = 0 \\;\\Longrightarrow\\; \\tan x = 1',
                    explanation: 'Using \\(\\sin x / \\cos x = \\tan x\\) and \\(\\cos x / \\cos x = 1\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( \\tan x = 1 \\).',
                    workingLatex: 'x = 45^\\circ,\\ 225^\\circ',
                    explanation: 'Reference angle \\(\\tan^{-1}(1) = 45^\\circ\\); tan positive in Q1 and Q3.'
                },
                {
                    stepNumber: 5,
                    description: 'Case 2: divide \\( 3\\sin x + \\cos x = 0 \\) by \\( \\cos x \\).',
                    workingLatex: '3\\tan x + 1 = 0 \\;\\Longrightarrow\\; \\tan x = -\\tfrac{1}{3}',
                    explanation: 'Same idea; subtract 1, divide by 3.'
                },
                {
                    stepNumber: 6,
                    description: 'Solve \\( \\tan x = -\\tfrac{1}{3} \\).',
                    workingLatex: '\\tan^{-1}(\\tfrac{1}{3}) \\approx 18.43^\\circ;\\ x \\approx 161.6^\\circ,\\ 341.6^\\circ',
                    explanation: 'Use the positive value for the reference angle. Tan negative in Q2 and Q4: \\(180^\\circ - 18.43^\\circ = 161.57^\\circ\\) and \\(360^\\circ - 18.43^\\circ = 341.57^\\circ\\). The diagram below shows all four intersections.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -5, yMax: 5,
                        xTicks: [0, 45, 90, 161.6, 180, 225, 270, 341.6, 360],
                        yTicks: [-4, -2, -1 / 3, 0, 1, 2, 4],
                        yTickLabels: ['-4', '-2', '-\\tfrac{1}{3}', '0', '1', '2', '4'],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = tan x' : undefined, labelAt: i === 0 ? [10, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#dc2626', dashed: true, label: 'y = 1', labelAt: [320, 1.4] },
                            { from: [0, -1 / 3], to: [360, -1 / 3], color: '#16a34a', dashed: true, label: 'y = -\\tfrac{1}{3}', labelAt: [290, -0.78] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [45, 1], label: '45°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [225, 1], label: '225°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [161.6, -1 / 3], label: '161.6°', labelAnchor: 'se', color: '#16a34a' },
                            { at: [341.6, -1 / 3], label: '341.6°', labelAnchor: 'se', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 45^\\circ,\\ 161.6^\\circ,\\ 225^\\circ,\\ 341.6^\\circ\\)'
        }
    },
    {
        id: 't5-027',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 27',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText: 'Solve \\( \\sin^2 x - 3\\sin x \\cos x + 2\\cos^2 x = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p. where not exact.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'homogeneous quadratic', 'tan'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the homogeneous structure.',
                    workingLatex: '\\sin^2 x - 3\\sin x \\cos x + 2\\cos^2 x = 0',
                    explanation: 'Every term has total degree \\(2\\) in \\(\\sin x\\) and \\(\\cos x\\): \\(\\sin^2 x,\\ \\sin x \\cos x,\\ \\cos^2 x\\). Such homogeneous equations become quadratics in \\(\\tan x\\) after dividing by \\(\\cos^2 x\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Check that dividing by \\( \\cos^2 x \\) is safe.',
                    workingLatex: '\\text{If } \\cos x = 0 \\text{ then } \\sin^2 x = 1 \\;\\Rightarrow\\; \\text{LHS} = 1 - 0 + 0 = 1 \\neq 0',
                    explanation: 'At \\(x = 90^\\circ\\) and \\(270^\\circ\\) the LHS equals \\(1\\), so these are not solutions. Dividing by \\(\\cos^2 x\\) therefore loses nothing.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide through by \\( \\cos^2 x \\).',
                    workingLatex: '\\tan^2 x - 3\\tan x + 2 = 0',
                    explanation: 'Each term \\( \\sin^k x \\cos^{2-k} x \\) divided by \\(\\cos^2 x\\) becomes \\(\\tan^k x\\). The result is a quadratic in \\(\\tan x\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise. Let \\( t = \\tan x \\).',
                    workingLatex: '(\\tan x - 1)(\\tan x - 2) = 0',
                    explanation: 'Factor pair of \\(2\\) that adds to \\(-3\\): \\(-1\\) and \\(-2\\). Check: \\( (t-1)(t-2) = t^2 - 3t + 2 \\). \\(\\checkmark\\)'
                },
                {
                    stepNumber: 5,
                    description: 'Case 1: solve \\( \\tan x = 1 \\).',
                    workingLatex: 'x = 45^\\circ,\\ 225^\\circ',
                    explanation: 'Reference angle \\(\\tan^{-1}(1) = 45^\\circ\\); tan positive in Q1 and Q3.'
                },
                {
                    stepNumber: 6,
                    description: 'Case 2: solve \\( \\tan x = 2 \\).',
                    workingLatex: '\\tan^{-1}(2) \\approx 63.43^\\circ;\\ x \\approx 63.4^\\circ,\\ 243.4^\\circ',
                    explanation: 'Tan positive in Q1 and Q3, so \\(63.43^\\circ\\) and \\(63.43^\\circ + 180^\\circ = 243.43^\\circ\\).',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -5, yMax: 5,
                        xTicks: [0, 45, 63.4, 90, 180, 225, 243.4, 270, 360],
                        yTicks: [-4, -2, 0, 1, 2, 4],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = tan x' : undefined, labelAt: i === 0 ? [10, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#dc2626', dashed: true, label: 'y = 1', labelAt: [320, 1.4] },
                            { from: [0, 2], to: [360, 2], color: '#16a34a', dashed: true, label: 'y = 2', labelAt: [320, 2.4] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [45, 1], label: '45°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [225, 1], label: '225°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [63.4, 2], label: '63.4°', labelAnchor: 'sw', color: '#16a34a' },
                            { at: [243.4, 2], label: '243.4°', labelAnchor: 'sw', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 45^\\circ,\\ 63.4^\\circ,\\ 225^\\circ,\\ 243.4^\\circ\\)'
        }
    },
    {
        id: 't5-028',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 28',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText: 'Solve \\( 3\\sin^2 x = 2 + 5\\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'Pythagoras', 'quadratic formula'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\sin^2 x \\) using the Pythagorean identity.',
                    workingLatex: '3(1 - \\cos^2 x) = 2 + 5\\cos x',
                    explanation: '\\(\\sin^2 x = 1 - \\cos^2 x\\). Aim for a quadratic in \\(\\cos x\\) so we can attack it algebraically.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the bracket.',
                    workingLatex: '3 - 3\\cos^2 x = 2 + 5\\cos x',
                    explanation: 'Distribute the factor of \\(3\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Move every term to one side; tidy the sign.',
                    workingLatex: '3\\cos^2 x + 5\\cos x - 1 = 0',
                    explanation: '\\(3 - 3\\cos^2 x - 2 - 5\\cos x = 0\\). Multiply by \\(-1\\) so the leading coefficient is positive.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the quadratic formula. Let \\( c = \\cos x \\).',
                    workingLatex: '\\cos x = \\dfrac{-5 \\pm \\sqrt{5^2 - 4 \\cdot 3 \\cdot (-1)}}{2 \\cdot 3} = \\dfrac{-5 \\pm \\sqrt{37}}{6}',
                    explanation: 'Coefficients \\(a = 3,\\ b = 5,\\ c = -1\\); discriminant \\(\\Delta = 25 + 12 = 37\\) — not a perfect square, so the roots are irrational.'
                },
                {
                    stepNumber: 5,
                    description: 'Evaluate numerically.',
                    workingLatex: '\\cos x \\approx 0.1806 \\quad \\text{or} \\quad \\cos x \\approx -1.847',
                    explanation: 'Using \\(\\sqrt{37} \\approx 6.083\\): \\((-5 + 6.083)/6 \\approx 0.181\\); \\((-5 - 6.083)/6 \\approx -1.847\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Reject the impossible root.',
                    workingLatex: '\\cos x \\approx -1.847 \\text{ (reject)} \\quad \\text{since} \\quad |\\cos x| \\leq 1',
                    explanation: 'Always sanity-check that each root lies in \\([-1, 1]\\) before plugging it into \\(\\cos^{-1}\\).'
                },
                {
                    stepNumber: 7,
                    description: 'Find the reference angle.',
                    workingLatex: '\\cos^{-1}(0.1806) \\approx 79.59^\\circ',
                    explanation: 'Keep the unrounded value; rounding now causes drift in the second solution.'
                },
                {
                    stepNumber: 8,
                    description: 'Apply quadrant rules: cosine positive in Q1 and Q4.',
                    workingLatex: 'x \\approx 79.6^\\circ,\\ 360^\\circ - 79.59^\\circ = 280.4^\\circ',
                    explanation: 'Round to 1 d.p. at the end.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 79.6, 90, 180, 270, 280.4, 360],
                        yTicks: [-1, 0, 0.1806, 1],
                        yTickLabels: ['-1', '0', '0.181', '1'],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [cosCurve()],
                        lines: [{ from: [0, 0.1806], to: [360, 0.1806], color: '#dc2626', dashed: true, label: 'y \\approx 0.181', labelAt: [275, 0.32] }],
                        points: [
                            { at: [79.6, 0.1806], label: '79.6°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [280.4, 0.1806], label: '280.4°', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 79.6^\\circ,\\ 280.4^\\circ\\)'
        }
    },
    {
        id: 't5-029',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 29',
        difficulty: 'Challenge',
        answerType: 'expression',
        questionText: 'Solve \\( 8\\sin^2 x - 6\\sin x - 9 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['trig equations', 'quadratic in sin', 'quadratic formula'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the quadratic in \\( \\sin x \\). Let \\( s = \\sin x \\).',
                    workingLatex: '8s^2 - 6s - 9 = 0',
                    explanation: 'Substituting \\(s = \\sin x\\) reveals a standard quadratic; the coefficients do not factor cleanly so we will use the quadratic formula.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the discriminant.',
                    workingLatex: '\\Delta = (-6)^2 - 4 \\cdot 8 \\cdot (-9) = 36 + 288 = 324',
                    explanation: 'With \\(a = 8,\\ b = -6,\\ c = -9\\). Note \\(\\Delta = 324 = 18^2\\) is a perfect square — the roots will be rational.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quadratic formula.',
                    workingLatex: '\\sin x = \\dfrac{6 \\pm \\sqrt{324}}{16} = \\dfrac{6 \\pm 18}{16}',
                    explanation: 'Note the sign: \\(-(-6) = 6\\) in the numerator.'
                },
                {
                    stepNumber: 4,
                    description: 'Compute both roots.',
                    workingLatex: '\\sin x = \\tfrac{24}{16} = 1.5 \\quad \\text{or} \\quad \\sin x = -\\tfrac{12}{16} = -0.75',
                    explanation: 'Simplify each fraction.'
                },
                {
                    stepNumber: 5,
                    description: 'Reject the impossible root.',
                    workingLatex: '\\sin x = 1.5 \\text{ (reject)} \\quad \\text{since} \\quad |\\sin x| \\leq 1',
                    explanation: 'Always check bounds before applying \\(\\sin^{-1}\\) to a value greater than \\(1\\) — your calculator will return an error.'
                },
                {
                    stepNumber: 6,
                    description: 'Find the reference angle.',
                    workingLatex: '\\sin^{-1}(0.75) \\approx 48.59^\\circ',
                    explanation: 'Use the positive value \\(0.75\\) for the reference angle; signs are handled by quadrant rules. Keep unrounded.'
                },
                {
                    stepNumber: 7,
                    description: 'Apply quadrant rules: sine negative in Q3 and Q4.',
                    workingLatex: 'x \\approx 180^\\circ + 48.59^\\circ = 228.6^\\circ,\\ 360^\\circ - 48.59^\\circ = 311.4^\\circ',
                    explanation: 'Sine is negative below the x-axis, in the third and fourth quadrants. Round to 1 d.p. at the end.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: -5, xMax: 365, yMin: -1.35, yMax: 1.35,
                        xTicks: [0, 90, 180, 228.6, 270, 311.4, 360],
                        yTicks: [-1, -0.75, 0, 1],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: [sinCurve()],
                        lines: [{ from: [0, -0.75], to: [360, -0.75], color: '#dc2626', dashed: true, label: 'y = -0.75', labelAt: [290, -0.95] }],
                        points: [
                            { at: [228.6, -0.75], label: '228.6°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [311.4, -0.75], label: '311.4°', labelAnchor: 'se', color: '#dc2626' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 228.6^\\circ,\\ 311.4^\\circ\\)'
        }
    },
    {
        id: 't5-030',
        topicRef: 't5',
        topicTitle: 'Trigonometric Equations 2 — 30',
        difficulty: 'Challenge',
        answerType: 'exactValue',
        answerMeta: { exactForm: true },
        questionText: 'Solve \\( 2\\sin^2 x - \\sin x \\cos x - \\cos^2 x = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p. where not exact.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'homogeneous quadratic', 'tan', 'factorise'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the homogeneous structure.',
                    workingLatex: '2\\sin^2 x - \\sin x \\cos x - \\cos^2 x = 0',
                    explanation: 'Every term has total degree \\(2\\) in \\(\\sin x\\) and \\(\\cos x\\): \\(\\sin^2 x,\\ \\sin x \\cos x,\\ \\cos^2 x\\). The standard technique for homogeneous equations is to divide through by \\(\\cos^2 x\\) to convert into a quadratic in \\(\\tan x\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Check that dividing by \\( \\cos^2 x \\) is safe.',
                    workingLatex: '\\text{If } \\cos x = 0 \\text{ then } \\sin^2 x = 1 \\;\\Rightarrow\\; \\text{LHS} = 2 - 0 - 0 = 2 \\neq 0',
                    explanation: 'At \\(x = 90^\\circ\\) and \\(270^\\circ\\), the LHS evaluates to \\(2\\), not \\(0\\). So neither is a solution, and we may divide by \\(\\cos^2 x\\) without losing anything.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide through by \\( \\cos^2 x \\).',
                    workingLatex: '2\\tan^2 x - \\tan x - 1 = 0',
                    explanation: 'Each term divides cleanly: \\( \\sin^2 x / \\cos^2 x = \\tan^2 x \\); \\( \\sin x \\cos x / \\cos^2 x = \\tan x \\); \\( \\cos^2 x / \\cos^2 x = 1 \\). The result is a standard quadratic in \\(\\tan x\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise. Let \\( t = \\tan x \\).',
                    workingLatex: '(2\\tan x + 1)(\\tan x - 1) = 0',
                    explanation: 'Factor pair of \\(2 \\cdot (-1) = -2\\) that adds to \\(-1\\): \\(-2\\) and \\(+1\\). Check: \\( (2t+1)(t-1) = 2t^2 - 2t + t - 1 = 2t^2 - t - 1 \\). \\(\\checkmark\\)'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the zero-product principle.',
                    workingLatex: '\\tan x = -\\tfrac{1}{2} \\quad \\text{or} \\quad \\tan x = 1',
                    explanation: 'Two separate cases, each contributing two solutions in \\([0^\\circ, 360^\\circ]\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Case 1: solve \\( \\tan x = 1 \\).',
                    workingLatex: 'x = 45^\\circ,\\ 225^\\circ',
                    explanation: 'Reference angle \\(\\tan^{-1}(1) = 45^\\circ\\); tan positive in Q1 and Q3.'
                },
                {
                    stepNumber: 7,
                    description: 'Case 2: solve \\( \\tan x = -\\tfrac{1}{2} \\).',
                    workingLatex: '\\tan^{-1}(\\tfrac{1}{2}) \\approx 26.57^\\circ;\\ x \\approx 153.4^\\circ,\\ 333.4^\\circ',
                    explanation: 'Use the positive value for the reference angle. Tan negative in Q2 and Q4: \\(180^\\circ - 26.57^\\circ = 153.43^\\circ\\) and \\(360^\\circ - 26.57^\\circ = 333.43^\\circ\\). The diagram below shows all four intersections.',
                    diagram: {
                        dropLinesForPoints: true,
                        xMin: 0, xMax: 360, yMin: -5, yMax: 5,
                        xTicks: [0, 45, 90, 153.4, 180, 225, 270, 333.4, 360],
                        yTicks: [-4, -2, -0.5, 0, 1, 2, 4],
                        yTickLabels: ['-4', '-2', '-\\tfrac{1}{2}', '0', '1', '2', '4'],
                        xLabel: 'x (degrees)', yLabel: 'y',
                        curves: sampleTan(0, 360, [90, 270], 5).map((seg, i) => ({ points: seg, color: '#1d4ed8', label: i === 0 ? 'y = tan x' : undefined, labelAt: i === 0 ? [10, 4] as [number, number] : undefined })),
                        lines: [
                            { from: [0, 1], to: [360, 1], color: '#dc2626', dashed: true, label: 'y = 1', labelAt: [320, 1.4] },
                            { from: [0, -0.5], to: [360, -0.5], color: '#16a34a', dashed: true, label: 'y = -\\tfrac{1}{2}', labelAt: [290, -0.1] },
                            { from: [90, -5], to: [90, 5], color: '#9ca3af', dashed: true },
                            { from: [270, -5], to: [270, 5], color: '#9ca3af', dashed: true }
                        ],
                        points: [
                            { at: [45, 1], label: '45°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [225, 1], label: '225°', labelAnchor: 'sw', color: '#dc2626' },
                            { at: [153.4, -0.5], label: '153.4°', labelAnchor: 'se', color: '#16a34a' },
                            { at: [333.4, -0.5], label: '333.4°', labelAnchor: 'se', color: '#16a34a' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\(x = 45^\\circ,\\ 153.4^\\circ,\\ 225^\\circ,\\ 333.4^\\circ\\)'
        }
    }
];
