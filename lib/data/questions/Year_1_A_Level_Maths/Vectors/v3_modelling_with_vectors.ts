import { Question } from "@/lib/types";

// Topic: Modelling with Vectors — 30 questions
// Covers: displacement, velocity, forces, bearings, navigation, equilibrium,
//         resultant forces, resolving, real-world applications

// Topic: Vectors — 30 questions with TikZ diagrams
// Covers: vector notation, adding/subtracting vectors in geometric shapes, scalar multiplication,
//         parallel vectors, collinear points, midpoints, position vectors, column vectors, i+j form

export const questions: Question[] = [
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 1  (Q1–Q5)  Magnitude & direction of acceleration / velocity vectors
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 'v3-001',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 01',
        difficulty: 'Foundation',
        questionText:
            'The acceleration of a car is modelled by the vector \\( \\mathbf{a} = (3\\mathbf{i} + 4\\mathbf{j}) \\) ms\\(^{-2}\\), where \\( \\mathbf{i} \\) is horizontal and \\( \\mathbf{j} \\) is vertical.\n\na) Calculate the exact magnitude of the acceleration.\n\nb) Find the angle the acceleration makes with the horizontal.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'magnitude', 'direction', 'acceleration', 'Pythagoras', 'trigonometry'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Sketch the right-angled triangle of components.',
                    workingLatex: '',
                    explanation: 'Place the horizontal component (3) along \\( \\mathbf{i} \\) and the vertical component (4) along \\( \\mathbf{j} \\). The vector \\( \\mathbf{a} \\) is the hypotenuse of the right-angled triangle with legs 3 and 4, and the angle we want sits at the foot of the triangle, between \\( \\mathbf{a} \\) and the horizontal.',
                    diagram: { xMin: -1, xMax: 5, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [3, 0], color: '#1d4ed8', arrow: true, label: '3\\mathbf{i}', labelAt: [1.5, -0.4] }, { from: [3, 0], to: [3, 4], color: '#dc2626', arrow: true, label: '4\\mathbf{j}', labelAt: [3.4, 2] }, { from: [0, 0], to: [3, 4], color: '#047857', arrow: true, label: '\\mathbf{a}', labelAt: [1.0, 2.4] }], points: [{ at: [0, 0], label: '\\theta', labelAnchor: 'se', r: 2 }] }
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Apply Pythagoras to the components.',
                    workingLatex: '|\\mathbf{a}|^2 = 3^2 + 4^2',
                    explanation: 'For a 2D vector \\( x\\mathbf{i} + y\\mathbf{j} \\) the magnitude satisfies \\( |\\mathbf{a}|^2 = x^2 + y^2 \\). Substitute \\( x = 3 \\) and \\( y = 4 \\) directly — both are already positive so no sign care is needed yet.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the sum of squares.',
                    workingLatex: '|\\mathbf{a}|^2 = 9 + 16 = 25',
                    explanation: 'A clean 3-4-5 triangle. Recognising this saves you reaching for a calculator.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the positive square root for the magnitude.',
                    workingLatex: '|\\mathbf{a}| = \\sqrt{25} = 5 \\text{ ms}^{-2}',
                    explanation: 'A magnitude is always non-negative, so we keep only the positive root. The units come straight from \\( \\mathbf{a} \\) (ms\\(^{-2}\\)). This is exact — no rounding.'
                },
                {
                    stepNumber: 5,
                    description: 'Part (b): Set up the tangent ratio for the angle with the horizontal.',
                    workingLatex: '\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{4}{3}',
                    explanation: 'In the component triangle the side opposite \\( \\theta \\) is the vertical component (4), and the side adjacent is the horizontal component (3). Using tan avoids first calculating \\( |\\mathbf{a}| \\), keeping the arithmetic exact.'
                },
                {
                    stepNumber: 6,
                    description: 'Invert to find the angle.',
                    workingLatex: '\\theta = \\tan^{-1}\\!\\left(\\frac{4}{3}\\right) = 53.1° \\text{ (3 s.f.)}',
                    explanation: 'Make sure your calculator is in degree mode. Both components are positive, so the angle lies in the first quadrant — no quadrant adjustment needed.'
                },
            ],
            finalAnswer: '\\( |\\mathbf{a}| = 5 \\) ms\\(^{-2}\\), angle = \\(53.1°\\) above the horizontal.',
        },
    },
    {
        id: 'v3-002',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 02',
        difficulty: 'Foundation',
        questionText:
            'The velocity of a drone is modelled by the vector \\( \\mathbf{v} = (-5\\mathbf{i} + 12\\mathbf{j}) \\) ms\\(^{-1}\\), where \\( \\mathbf{i} \\) is due east and \\( \\mathbf{j} \\) is due north.\n\na) Calculate the exact speed of the drone.\n\nb) Find the bearing on which the drone is travelling, to the nearest degree.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'magnitude', 'direction', 'velocity', 'speed', 'bearing'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Sketch the components on a compass diagram.',
                    workingLatex: '',
                    explanation: 'The \\( \\mathbf{i} \\)-component is \\( -5 \\) so the drone moves 5 units due west; the \\( \\mathbf{j} \\)-component is \\( +12 \\) so it moves 12 units due north. The velocity vector points into the north-west quadrant.',
                    diagram: { xMin: -3, xMax: 1.5, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [0, 4], color: '#dc2626', arrow: true, label: '12\\mathbf{j}', labelAt: [0.45, 2] }, { from: [0, 4], to: [-1.667, 4], color: '#1d4ed8', arrow: true, label: '-5\\mathbf{i}', labelAt: [-0.85, 4.35] }, { from: [0, 0], to: [-1.667, 4], color: '#047857', arrow: true, label: '\\mathbf{v}', labelAt: [-1.15, 2] }], points: [{ at: [0, 0], label: '\\alpha', labelAnchor: 'nw', r: 2 }] }
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Apply Pythagoras to the components.',
                    workingLatex: '|\\mathbf{v}|^2 = (-5)^2 + 12^2',
                    explanation: 'Squaring kills the sign of the \\( \\mathbf{i} \\)-component, so a negative coordinate makes no difference to the magnitude. Square each component independently.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify and take the square root.',
                    workingLatex: '|\\mathbf{v}| = \\sqrt{25 + 144} = \\sqrt{169} = 13 \\text{ ms}^{-1}',
                    explanation: 'A classic 5-12-13 triple. Speed is the magnitude of velocity, so it carries velocity\'s units (ms\\(^{-1}\\)). This is exact.'
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): Identify which compass quadrant the drone is in.',
                    workingLatex: '',
                    explanation: 'The drone is west and north of its start, so the bearing lies between 270° (due west) and 360° (due north). Bearings go clockwise from north, so we need north minus the angle west of north.'
                },
                {
                    stepNumber: 5,
                    description: 'Find the acute angle west of north.',
                    workingLatex: '\\alpha = \\tan^{-1}\\!\\left(\\frac{5}{12}\\right) = 22.6°',
                    explanation: 'Measure from north (the \\( \\mathbf{j} \\)-axis). The "opposite" side is the 5 units of westward motion; the "adjacent" is the 12 units of northward motion. We use the magnitude of \\( -5 \\) here because we want the size of the angle.'
                },
                {
                    stepNumber: 6,
                    description: 'Convert to a bearing.',
                    workingLatex: '\\text{Bearing} = 360° - 22.6° = 337.4° \\approx 337°',
                    explanation: 'Going clockwise from north, you would sweep almost all the way round before reaching the drone\'s direction, hence the subtraction from 360°. Round to the nearest degree as the question asks.'
                },
            ],
            finalAnswer: 'Speed = \\(13\\) ms\\(^{-1}\\). Bearing = \\(337°\\).',
        },
    },
    {
        id: 'v3-003',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 03',
        difficulty: 'Foundation',
        questionText:
            'The acceleration of various particles is given by the vectors below. Calculate the exact magnitude of each particle\'s acceleration.\n\na) \\( \\mathbf{a} = (2\\mathbf{i} + 5\\mathbf{j}) \\) ms\\(^{-2}\\)\n\nb) \\( \\mathbf{b} = (-3\\mathbf{i} + \\mathbf{j}) \\) ms\\(^{-2}\\)\n\nc) \\( \\mathbf{c} = (4\\mathbf{i} - 3\\mathbf{j}) \\) ms\\(^{-2}\\)\n\nd) \\( \\mathbf{d} = (-\\mathbf{i} - 7\\mathbf{j}) \\) ms\\(^{-2}\\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'magnitude', 'acceleration', 'Pythagoras'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the magnitude rule that applies to every part.',
                    workingLatex: '|x\\mathbf{i} + y\\mathbf{j}| = \\sqrt{x^2 + y^2}',
                    explanation: 'Pythagoras on the components. Signs vanish under squaring, so a negative component contributes the same as its positive counterpart.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Square the components of \\( \\mathbf{a} \\).',
                    workingLatex: '|\\mathbf{a}| = \\sqrt{2^2 + 5^2} = \\sqrt{4 + 25} = \\sqrt{29} \\text{ ms}^{-2}',
                    explanation: '\\( 29 \\) has no square factors so \\( \\sqrt{29} \\) is already in simplest exact form.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Square the components of \\( \\mathbf{b} \\).',
                    workingLatex: '|\\mathbf{b}| = \\sqrt{(-3)^2 + 1^2} = \\sqrt{9 + 1} = \\sqrt{10} \\text{ ms}^{-2}',
                    explanation: 'The \\( \\mathbf{j} \\)-component is just \\( +1 \\), even though no coefficient is written in front of \\( \\mathbf{j} \\). The minus sign on \\( -3 \\) disappears once we square.'
                },
                {
                    stepNumber: 4,
                    description: 'Part (c): Square the components of \\( \\mathbf{c} \\).',
                    workingLatex: '|\\mathbf{c}| = \\sqrt{4^2 + (-3)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5 \\text{ ms}^{-2}',
                    explanation: 'Another 3-4-5 right triangle — the exact answer is a whole number.'
                },
                {
                    stepNumber: 5,
                    description: 'Part (d): Square the components of \\( \\mathbf{d} \\) and simplify the surd.',
                    workingLatex: '|\\mathbf{d}| = \\sqrt{(-1)^2 + (-7)^2} = \\sqrt{1 + 49} = \\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2} \\text{ ms}^{-2}',
                    explanation: 'Spot the square factor \\( 25 \\) inside \\( 50 \\) to simplify the surd. Leaving it as \\( \\sqrt{50} \\) would not be in simplest exact form.'
                },
            ],
            finalAnswer:
                'a) \\( \\sqrt{29} \\) ms\\(^{-2}\\), b) \\( \\sqrt{10} \\) ms\\(^{-2}\\), c) 5 ms\\(^{-2}\\), d) \\( 5\\sqrt{2} \\) ms\\(^{-2}\\).',
        },
    },
    {
        id: 'v3-004',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 04',
        difficulty: 'Foundation',
        questionText:
            'A ball is kicked with velocity \\( \\mathbf{v} = (8\\mathbf{i} + 6\\mathbf{j}) \\) ms\\(^{-1}\\), where \\( \\mathbf{i} \\) is horizontal and \\( \\mathbf{j} \\) is vertical (pointing upwards).\n\na) Calculate the speed of the ball.\n\nb) Find the angle of projection above the horizontal.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'magnitude', 'direction', 'velocity', 'projection'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Sketch the velocity triangle.',
                    workingLatex: '',
                    explanation: 'Horizontal leg \\( = 8 \\), vertical leg \\( = 6 \\), hypotenuse \\( = \\mathbf{v} \\). The angle of projection sits between \\( \\mathbf{v} \\) and the horizontal leg.',
                    diagram: { xMin: -1, xMax: 10, yMin: -1, yMax: 7, hideAxes: true, lines: [{ from: [0, 0], to: [8, 0], color: '#1d4ed8', arrow: true, label: '8\\mathbf{i}', labelAt: [4, -0.5] }, { from: [8, 0], to: [8, 6], color: '#dc2626', arrow: true, label: '6\\mathbf{j}', labelAt: [8.5, 3] }, { from: [0, 0], to: [8, 6], color: '#047857', arrow: true, label: '\\mathbf{v}', labelAt: [3.0, 3.4] }], points: [{ at: [0, 0], label: '\\theta', labelAnchor: 'se', r: 2 }] }
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Apply Pythagoras to the components.',
                    workingLatex: '|\\mathbf{v}|^2 = 8^2 + 6^2 = 64 + 36 = 100',
                    explanation: 'Both components are positive so there is no sign care needed. Working with squares first keeps the arithmetic clean.'
                },
                {
                    stepNumber: 3,
                    description: 'Take the square root.',
                    workingLatex: '|\\mathbf{v}| = \\sqrt{100} = 10 \\text{ ms}^{-1}',
                    explanation: 'A 6-8-10 right triangle (which is just 3-4-5 scaled by 2). Speed is exactly 10 ms\\(^{-1}\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): Set up the tangent ratio for the angle of projection.',
                    workingLatex: '\\tan\\theta = \\frac{\\text{vertical}}{\\text{horizontal}} = \\frac{6}{8} = \\frac{3}{4}',
                    explanation: 'Simplifying the ratio \\( \\tfrac{6}{8} \\) to \\( \\tfrac{3}{4} \\) is purely cosmetic — both give the same arctan value — but it is the standard final form.'
                },
                {
                    stepNumber: 5,
                    description: 'Take the inverse tan.',
                    workingLatex: '\\theta = \\tan^{-1}\\!\\left(\\frac{3}{4}\\right) = 36.9° \\text{ (3 s.f.)}',
                    explanation: 'The ball is in the first quadrant (rightwards and up), so no quadrant adjustment is needed. Check your calculator is set to degrees, not radians.'
                },
            ],
            finalAnswer: 'Speed = \\(10\\) ms\\(^{-1}\\). Angle of projection = \\(36.9° \\) (3 s.f.).',
        },
    },
    {
        id: 'v3-005',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 05',
        difficulty: 'Foundation',
        questionText:
            'A stone is thrown from a cliff. Its velocity is modelled by the vector \\( \\mathbf{v} = (5\\mathbf{i} - 2\\mathbf{j}) \\) ms\\(^{-1}\\), where \\( \\mathbf{i} \\) is horizontal and \\( \\mathbf{j} \\) is vertical (pointing upwards).\n\na) Find the exact speed of the stone.\n\nb) Find the angle the velocity makes below the horizontal.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'magnitude', 'direction', 'velocity'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Picture the velocity direction.',
                    workingLatex: '',
                    explanation: 'The \\( \\mathbf{i} \\)-component is positive (rightwards) and the \\( \\mathbf{j} \\)-component is negative (downwards), so \\( \\mathbf{v} \\) points into the lower-right quadrant. The angle we want is measured from the horizontal downward.',
                    diagram: { xMin: -1, xMax: 6, yMin: -3, yMax: 1.5, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '5\\mathbf{i}', labelAt: [2.5, 0.3] }, { from: [5, 0], to: [5, -2], color: '#dc2626', arrow: true, label: '-2\\mathbf{j}', labelAt: [5.45, -1] }, { from: [0, 0], to: [5, -2], color: '#047857', arrow: true, label: '\\mathbf{v}', labelAt: [2.7, -1.35] }], points: [{ at: [0, 0], label: '\\theta', labelAnchor: 'se', r: 2 }] }
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Apply Pythagoras to the components.',
                    workingLatex: '|\\mathbf{v}|^2 = 5^2 + (-2)^2 = 25 + 4 = 29',
                    explanation: 'Squaring the \\( -2 \\) gives \\( +4 \\), so the negative sign drops out as expected.'
                },
                {
                    stepNumber: 3,
                    description: 'Take the square root and check for surd simplification.',
                    workingLatex: '|\\mathbf{v}| = \\sqrt{29} \\text{ ms}^{-1}',
                    explanation: '\\( 29 \\) is prime, so \\( \\sqrt{29} \\) is already in simplest exact form. The question asks for the *exact* speed, so do not convert to a decimal.'
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): Set up the tangent ratio for the angle below the horizontal.',
                    workingLatex: '\\tan\\theta = \\frac{|{-2}|}{5} = \\frac{2}{5}',
                    explanation: 'The opposite side is the 2 units of downward motion (taken as a positive magnitude because we are measuring the angle\'s size); the adjacent is the 5 units along the horizontal.'
                },
                {
                    stepNumber: 5,
                    description: 'Take the inverse tan.',
                    workingLatex: '\\theta = \\tan^{-1}\\!\\left(\\frac{2}{5}\\right) = 21.8° \\text{ (3 s.f.)}',
                    explanation: 'The velocity makes an angle of 21.8° below the horizontal. State the direction (below) explicitly — a bare 21.8° would not pin down which side of the horizontal.'
                },
            ],
            finalAnswer: 'Speed = \\( \\sqrt{29} \\) ms\\(^{-1}\\). Angle = \\(21.8°\\) below the horizontal (3 s.f.).',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 2  (Q6–Q10)  Bearings & displacement as column vectors
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 'v3-006',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 06',
        difficulty: 'Foundation',
        questionText:
            'A ship travels \\(120\\) km on a bearing of \\(060°\\). Express the ship\'s displacement from its starting position as a column vector. Give each component to 2 d.p.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'bearing', 'displacement', 'column vector', 'trigonometry'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up axes and visualise the bearing.',
                    workingLatex: '',
                    explanation: 'Take east as the positive \\( x \\)-axis and north as the positive \\( y \\)-axis. A bearing of 060° is measured clockwise from north, so the displacement points 60° east of north — into the north-east quadrant. Both components will be positive.',
                    diagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 4, hideAxes: true, lines: [{ from: [0, 0], to: [0, 3], color: '#1d4ed8', arrow: true, label: 'y\\,(\\text{N})', labelAt: [-0.5, 1.5] }, { from: [0, 3], to: [5.196, 3], color: '#dc2626', arrow: true, label: 'x\\,(\\text{E})', labelAt: [2.6, 3.4] }, { from: [0, 0], to: [5.196, 3], color: '#047857', arrow: true, label: '120\\,\\text{km}', labelAt: [2.7, 1.15] }], points: [{ at: [0, 0], label: '60°', labelAnchor: 'ne', r: 2 }] }
                },
                {
                    stepNumber: 2,
                    description: 'Identify which trig ratio gives each component.',
                    workingLatex: '',
                    explanation: 'Because the bearing is measured from the *north* axis, the east (\\( x \\)) component is opposite the 60° angle and uses sine, while the north (\\( y \\)) component is adjacent and uses cosine. (This is the opposite of the usual "angle from \\( x \\)-axis" convention, so it is worth pausing to get right.)'
                },
                {
                    stepNumber: 3,
                    description: 'Compute the east (\\( x \\)) component.',
                    workingLatex: 'x = 120 \\sin 60° = 120 \\times \\frac{\\sqrt{3}}{2} = 60\\sqrt{3}',
                    explanation: 'Using the exact value \\( \\sin 60° = \\tfrac{\\sqrt{3}}{2} \\) lets us write \\( x = 60\\sqrt{3} \\) before rounding.'
                },
                {
                    stepNumber: 4,
                    description: 'Round to 2 d.p.',
                    workingLatex: 'x = 60\\sqrt{3} \\approx 103.92 \\text{ km}',
                    explanation: '\\( 60\\sqrt{3} = 103.9230\\ldots \\), which rounds to 103.92 to 2 d.p.'
                },
                {
                    stepNumber: 5,
                    description: 'Compute the north (\\( y \\)) component.',
                    workingLatex: 'y = 120 \\cos 60° = 120 \\times \\tfrac{1}{2} = 60.00 \\text{ km}',
                    explanation: '\\( \\cos 60° = \\tfrac{1}{2} \\) is exact, so the north component is exactly 60 km. Writing it as 60.00 keeps the 2 d.p. presentation consistent with part (a).'
                },
                {
                    stepNumber: 6,
                    description: 'Write the displacement as a column vector.',
                    workingLatex: '\\mathbf{d} = \\begin{pmatrix} 103.92 \\\\ 60.00 \\end{pmatrix} \\text{ km}',
                    explanation: 'Top entry is the east component, bottom entry is the north component (standard convention). Both are positive, as expected for a north-east displacement.'
                },
            ],
            finalAnswer: '\\( \\mathbf{d} = \\begin{pmatrix} 103.92 \\\\ 60.00 \\end{pmatrix}\\text{ km} \\)',
        },
    },
    {
        id: 'v3-007',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 07',
        difficulty: 'Foundation',
        questionText:
            'A hiker walks \\(8\\) km on a bearing of \\(230°\\). Express the hiker\'s displacement from the start as a column vector. Give each component to 2 d.p.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'bearing', 'displacement', 'column vector', 'trigonometry'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Locate the bearing on the compass.',
                    workingLatex: '',
                    explanation: 'Bearing 230° is between 180° (due south) and 270° (due west), so the hiker walks in the south-west quadrant. Both the east and north components will be negative.'
                },
                {
                    stepNumber: 2,
                    description: 'Find a useful acute reference angle.',
                    workingLatex: '230° - 180° = 50°',
                    explanation: 'Measuring 50° to the west of due south gives a right-angled triangle whose hypotenuse is the 8 km displacement. Resolving along the south and west sides will be cleanest with this 50° angle.',
                    diagram: { xMin: -4, xMax: 1.5, yMin: -3.5, yMax: 2, hideAxes: true, lines: [{ from: [0, 0], to: [0, 1.5], color: '#888', dashed: true, label: 'N', labelAt: [0.25, 1.4] }, { from: [0, 0], to: [0, -2.57], color: '#1d4ed8', arrow: true, label: 'y', labelAt: [0.3, -1.3] }, { from: [0, -2.57], to: [-3.06, -2.57], color: '#dc2626', arrow: true, label: 'x', labelAt: [-1.5, -2.95] }, { from: [0, 0], to: [-3.06, -2.57], color: '#047857', arrow: true, label: '8\\,\\text{km}', labelAt: [-1.85, -1.0] }], points: [{ at: [0, 0], label: '50°', labelAnchor: 'sw', r: 2 }] }
                },
                {
                    stepNumber: 3,
                    description: 'Compute the magnitude of the east (\\( x \\)) component.',
                    workingLatex: '|x| = 8 \\sin 50° \\approx 8 \\times 0.7660 = 6.13 \\text{ (2 d.p.)}',
                    explanation: 'With the angle measured from south, the west-leg is opposite the 50° angle, so use sine.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the correct sign — the hiker moves west, so \\( x \\) is negative.',
                    workingLatex: 'x = -6.13 \\text{ km}',
                    explanation: 'East is positive \\( x \\); the hiker is going west, so the \\( x \\)-component must be negative.'
                },
                {
                    stepNumber: 5,
                    description: 'Compute the magnitude of the north (\\( y \\)) component.',
                    workingLatex: '|y| = 8 \\cos 50° \\approx 8 \\times 0.6428 = 5.14 \\text{ (2 d.p.)}',
                    explanation: 'The south-leg is adjacent to the 50° angle, so use cosine.'
                },
                {
                    stepNumber: 6,
                    description: 'Apply the correct sign — the hiker moves south, so \\( y \\) is negative.',
                    workingLatex: 'y = -5.14 \\text{ km}',
                    explanation: 'North is positive \\( y \\); the hiker is heading south, so \\( y \\) is negative.'
                },
                {
                    stepNumber: 7,
                    description: 'Write the displacement as a column vector.',
                    workingLatex: '\\mathbf{d} = \\begin{pmatrix} -6.13 \\\\ -5.14 \\end{pmatrix} \\text{ km}',
                    explanation: 'Both components are negative, consistent with a south-west displacement. (As an alternative shortcut, you could write \\( x = 8 \\sin 230° \\) and \\( y = 8 \\cos 230° \\); the signs then come out automatically.)'
                },
            ],
            finalAnswer: '\\( \\mathbf{d} = \\begin{pmatrix} -6.13 \\\\ -5.14 \\end{pmatrix}\\text{ km} \\) ',
        },
    },
    {
        id: 'v3-008',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 08',
        difficulty: 'Foundation',
        questionText:
            'A roller coaster is accelerating at \\(25\\) ms\\(^{-2}\\) at an angle of \\(40°\\) below the positive horizontal. Express this acceleration as a vector of the form \\( \\mathbf{a} = x\\mathbf{i} + y\\mathbf{j} \\). Give values to 2 d.p.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'acceleration', 'components', 'trigonometry'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw the acceleration vector below the horizontal.',
                    workingLatex: '',
                    explanation: 'The acceleration points 40° below the positive horizontal, i.e. into the fourth quadrant. The horizontal component will be positive; the vertical component will be negative (because it points downwards).',
                    diagram: { xMin: -1, xMax: 5, yMin: -4, yMax: 1, hideAxes: true, lines: [{ from: [-0.5, 0], to: [4.5, 0], color: '#888', dashed: true, label: 'horizontal', labelAt: [3.6, 0.3] }, { from: [0, 0], to: [3.83, -3.21], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}\\,(25\\,\\text{ms}^{-2})', labelAt: [1.4, -2.2] }], points: [{ at: [0, 0], label: '40°', labelAnchor: 'se', r: 2 }] }
                },
                {
                    stepNumber: 2,
                    description: 'Compute the horizontal (\\( x \\)) component.',
                    workingLatex: 'x = 25 \\cos 40°',
                    explanation: 'The 40° angle is between the acceleration and the horizontal axis, so the horizontal component (adjacent to the angle) uses cosine.'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate.',
                    workingLatex: 'x = 25 \\times 0.7660\\ldots = 19.15 \\text{ (2 d.p.)}',
                    explanation: 'Keep an extra decimal or two while computing and only round at the end, to avoid compounding rounding error.'
                },
                {
                    stepNumber: 4,
                    description: 'Compute the magnitude of the vertical (\\( y \\)) component.',
                    workingLatex: '|y| = 25 \\sin 40° = 25 \\times 0.6428\\ldots = 16.07',
                    explanation: 'The vertical component (opposite the 40° angle) uses sine.'
                },
                {
                    stepNumber: 5,
                    description: 'Attach the correct sign.',
                    workingLatex: 'y = -16.07',
                    explanation: 'The acceleration is *below* the horizontal, so the \\( \\mathbf{j} \\)-component (taking up as positive) must be negative.'
                },
                {
                    stepNumber: 6,
                    description: 'Assemble the vector.',
                    workingLatex: '\\mathbf{a} = (19.15\\mathbf{i} - 16.07\\mathbf{j}) \\text{ ms}^{-2}',
                    explanation: 'A quick sanity check on the magnitude: \\( \\sqrt{19.15^2 + 16.07^2} \\approx \\sqrt{366.7 + 258.2} \\approx \\sqrt{625} = 25 \\). ✓'
                },
            ],
            finalAnswer: '\\( \\mathbf{a} = (19.15\\mathbf{i} - 16.07\\mathbf{j}) \\) ms\\(^{-2}\\)',
        },
    },
    {
        id: 'v3-009',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 09',
        difficulty: 'Foundation',
        questionText:
            'A simple mathematical model of a ball bouncing off the side of a pool table is constructed using vectors. The ball\'s velocity has vector \\( \\mathbf{v}_1 = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix} \\) before it hits the side, and vector \\( \\mathbf{v}_2 = \\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix} \\) afterwards. Find the acute angle \\( \\theta \\) between \\( \\mathbf{v}_1 \\) and \\( \\mathbf{v}_2 \\). Give your answer to 2 d.p.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'angle between vectors', 'velocity', 'pool table'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Decide on a strategy.',
                    workingLatex: '',
                    explanation: 'Find each vector\'s direction angle (measured from the positive \\( x \\)-axis), then take the difference. If the resulting angle is obtuse, subtract from 180° to get the acute angle between the *lines*.',
                    diagram: { xMin: -1, xMax: 4, yMin: -3, yMax: 4, hideAxes: true, lines: [{ from: [0, 0], to: [3, -2], color: '#1d4ed8', arrow: true, label: '\\mathbf{v}_1', labelAt: [3.3, -1.5] }, { from: [0, 0], to: [1, 3], color: '#dc2626', arrow: true, label: '\\mathbf{v}_2', labelAt: [1.35, 2.6] }], points: [{ at: [0, 0], label: '\\theta', labelAnchor: 'e', r: 2 }] }
                },
                {
                    stepNumber: 2,
                    description: 'Find the direction angle of \\( \\mathbf{v}_1 \\).',
                    workingLatex: '\\alpha_1 = \\tan^{-1}\\!\\left(\\frac{-2}{3}\\right) = -33.69°',
                    explanation: 'The components \\( (3, -2) \\) place \\( \\mathbf{v}_1 \\) in the fourth quadrant (right and down), so \\( \\tan^{-1} \\) returns a negative angle directly without quadrant adjustment.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the direction angle of \\( \\mathbf{v}_2 \\).',
                    workingLatex: '\\alpha_2 = \\tan^{-1}\\!\\left(\\frac{3}{1}\\right) = 71.57°',
                    explanation: 'The components \\( (1, 3) \\) are both positive, so \\( \\mathbf{v}_2 \\) is in the first quadrant and the \\( \\tan^{-1} \\) result is already correct.'
                },
                {
                    stepNumber: 4,
                    description: 'Subtract to find the angle between the two vectors.',
                    workingLatex: '\\alpha_2 - \\alpha_1 = 71.57° - (-33.69°) = 105.26°',
                    explanation: 'This is the angle you rotate (anticlockwise) to take \\( \\mathbf{v}_1 \\) onto \\( \\mathbf{v}_2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Convert to the acute angle.',
                    workingLatex: '\\theta = 180° - 105.26° = 74.74°',
                    explanation: '\\( 105.26° \\) is obtuse, but each "vector" is a directed line — the acute angle between the *lines* on which the vectors sit is what the question asks for. Since the vectors point apart by more than 90°, take the supplement.'
                },
            ],
            finalAnswer: 'The acute angle between \\( \\mathbf{v}_1 \\) and \\( \\mathbf{v}_2 \\) is 74.74°.',
        },
    },
    {
        id: 'v3-010',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 10',
        difficulty: 'Foundation',
        questionText:
            'A yacht sails \\(50\\) km on a bearing of \\(315°\\). Express the yacht\'s displacement from its starting position as a column vector. Give each component to 2 d.p.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'bearing', 'displacement', 'column vector', 'trigonometry'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Locate bearing 315° on the compass.',
                    workingLatex: '',
                    explanation: 'Bearing 315° is between 270° (due west) and 360° (due north), so the yacht heads north-west. The east component will be negative (yacht goes west) and the north component will be positive.',
                    diagram: { xMin: -4.5, xMax: 1.5, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [0, 3.54], color: '#1d4ed8', arrow: true, label: 'y\\,(\\text{N})', labelAt: [0.55, 1.7] }, { from: [0, 3.54], to: [-3.54, 3.54], color: '#dc2626', arrow: true, label: 'x\\,(\\text{W})', labelAt: [-1.8, 3.9] }, { from: [0, 0], to: [-3.54, 3.54], color: '#047857', arrow: true, label: '50\\,\\text{km}', labelAt: [-2.3, 1.5] }], points: [{ at: [0, 0], label: '45°', labelAnchor: 'nw', r: 2 }] }
                },
                {
                    stepNumber: 2,
                    description: 'Find the acute reference angle from north.',
                    workingLatex: '360° - 315° = 45°',
                    explanation: '315° is 45° short of a full turn, so the displacement is 45° to the west of due north.'
                },
                {
                    stepNumber: 3,
                    description: 'Compute the magnitude of the east (\\( x \\)) component.',
                    workingLatex: '|x| = 50 \\sin 45° = 50 \\times \\frac{\\sqrt{2}}{2} = 25\\sqrt{2} \\approx 35.36',
                    explanation: 'With the reference angle measured from north, the east-west leg is opposite the 45° angle, so use sine. The exact value \\( \\sin 45° = \\tfrac{\\sqrt{2}}{2} \\) keeps the working clean.'
                },
                {
                    stepNumber: 4,
                    description: 'Attach the correct sign (yacht moves west).',
                    workingLatex: 'x = -35.36 \\text{ km (2 d.p.)}',
                    explanation: 'Since the yacht sails to the west of its start, the \\( x \\)-component (east positive) is negative.'
                },
                {
                    stepNumber: 5,
                    description: 'Compute the north (\\( y \\)) component.',
                    workingLatex: 'y = 50 \\cos 45° = 50 \\times \\frac{\\sqrt{2}}{2} = 25\\sqrt{2} \\approx 35.36 \\text{ km}',
                    explanation: 'The north-south leg is adjacent to the 45° angle, so use cosine. The yacht moves north, so \\( y \\) is positive.'
                },
                {
                    stepNumber: 6,
                    description: 'Write the displacement as a column vector.',
                    workingLatex: '\\mathbf{d} = \\begin{pmatrix} -35.36 \\\\ 35.36 \\end{pmatrix} \\text{ km}',
                    explanation: 'Negative east, positive north — matches a NW heading. Note the magnitudes are equal because 45° splits the quadrant symmetrically.'
                },
            ],
            finalAnswer: '\\( \\mathbf{d} = \\begin{pmatrix} -35.36 \\\\ 35.36 \\end{pmatrix} \\) km',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 3  (Q11–Q15)  Time-dependent vector models
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 'v3-011',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 11',
        difficulty: 'Foundation',
        questionText:
            'The velocity of a fish swimming in the horizontal plane is modelled by the vector \\( \\mathbf{v} = 3t(\\mathbf{i} - 2\\mathbf{j}) \\) ms\\(^{-1}\\), where \\( t \\) is the time in seconds.\n\na) State the fish\'s velocity after \\(2\\) seconds.\n\nb) Calculate the fish\'s exact speed after \\(3 \\) seconds.\n\nc) Find the angle that \\( \\mathbf{v} \\) makes with \\( \\mathbf{i} \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'time-dependent', 'velocity', 'speed', 'fish'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Substitute \\( t = 2 \\) into the velocity model.',
                    workingLatex: '\\mathbf{v} = 3(2)(\\mathbf{i} - 2\\mathbf{j}) = 6(\\mathbf{i} - 2\\mathbf{j})',
                    explanation: 'Treat \\( 3t \\) as a scalar that scales the whole vector \\( (\\mathbf{i} - 2\\mathbf{j}) \\). Multiplying it by a positive number does not change direction, only length.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the bracket.',
                    workingLatex: '\\mathbf{v} = (6\\mathbf{i} - 12\\mathbf{j}) \\text{ ms}^{-1}',
                    explanation: 'Distribute the 6 across both terms inside the bracket. Always restore the units in the final line.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Substitute \\( t = 3 \\) to get the velocity at 3 s.',
                    workingLatex: '\\mathbf{v} = 3(3)(\\mathbf{i} - 2\\mathbf{j}) = 9(\\mathbf{i} - 2\\mathbf{j}) = (9\\mathbf{i} - 18\\mathbf{j})',
                    explanation: 'Same substitute-and-expand routine as in part (a), now with \\( 3t = 9 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Apply Pythagoras to the components.',
                    workingLatex: '|\\mathbf{v}|^2 = 9^2 + (-18)^2 = 81 + 324 = 405',
                    explanation: 'Speed is the magnitude of velocity. Squaring the \\( -18 \\) makes the sign irrelevant.'
                },
                {
                    stepNumber: 5,
                    description: 'Simplify the surd.',
                    workingLatex: '|\\mathbf{v}| = \\sqrt{405} = \\sqrt{81 \\times 5} = 9\\sqrt{5} \\text{ ms}^{-1}',
                    explanation: 'Spot the square factor \\( 81 \\). Leaving the answer as \\( \\sqrt{405} \\) would not be in simplest exact form.'
                },
                {
                    stepNumber: 6,
                    description: 'Part (c): Notice the direction is independent of \\( t \\).',
                    workingLatex: '\\mathbf{v} = 3t(\\mathbf{i} - 2\\mathbf{j})',
                    explanation: 'Because \\( 3t \\) is just a positive scalar (for \\( t > 0 \\)), every velocity vector at every time is parallel to the fixed direction vector \\( \\mathbf{i} - 2\\mathbf{j} \\). The angle with \\( \\mathbf{i} \\) is therefore constant.'
                },
                {
                    stepNumber: 7,
                    description: 'Compute the angle from the direction components.',
                    workingLatex: '\\tan\\theta = \\frac{|{-2}|}{1} = 2 \\implies \\theta = \\tan^{-1}(2) = 63.4° \\text{ (3 s.f.)}',
                    explanation: 'Take the size of the \\( \\mathbf{j} \\)-component (2) over the \\( \\mathbf{i} \\)-component (1). The negative sign indicates the vector points below the \\( \\mathbf{i} \\) axis, so the angle is *below* \\( \\mathbf{i} \\).'
                },
            ],
            finalAnswer:
                'a) \\( (6\\mathbf{i} - 12\\mathbf{j}) \\) ms\\(^{-1}\\). b) \\( 9\\sqrt{5} \\) ms\\(^{-1}\\). c) \\(63.4°\\)  below \\( \\mathbf{i} \\) (3 s.f.).',
        },
    },
    {
        id: 'v3-012',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 12',
        difficulty: 'Foundation',
        questionText:
            'A firework\'s displacement is modelled by the vector \\( \\mathbf{s} = 2t^2(-\\mathbf{i} + 7\\mathbf{j}) \\) m, where \\( t \\) is time in seconds, \\( \\mathbf{i} \\) is horizontal and \\( \\mathbf{j} \\) is vertical (pointing upwards).\n\na) Find the firework\'s displacement after 1.5 seconds.\n\nb) Calculate, to 3 s.f., the firework\'s angle to the horizontal.\n\nThe firework explodes after 2.5 seconds.\n\nc) What is the vertical distance from the ground when it goes off?',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'time-dependent', 'displacement', 'firework'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Substitute \\( t = 1.5 \\) into the scalar \\( 2t^2 \\).',
                    workingLatex: '2t^2 = 2 \\times (1.5)^2 = 2 \\times 2.25 = 4.5',
                    explanation: 'Evaluate the scalar coefficient first so the remaining step is just multiplying a constant by a vector.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply the scalar through the direction vector.',
                    workingLatex: '\\mathbf{s} = 4.5(-\\mathbf{i} + 7\\mathbf{j}) = (-4.5\\mathbf{i} + 31.5\\mathbf{j}) \\text{ m}',
                    explanation: 'Distribute \\( 4.5 \\) across both components: \\( 4.5 \\times -1 = -4.5 \\) and \\( 4.5 \\times 7 = 31.5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Use the fixed direction vector.',
                    workingLatex: '',
                    explanation: 'Because the scalar \\( 2t^2 \\) is positive for \\( t > 0 \\), the displacement always points in the same direction \\( (-1, 7) \\). The angle to the horizontal does not depend on \\( t \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Set up the tangent ratio.',
                    workingLatex: '\\tan\\theta = \\frac{|y|}{|x|} = \\frac{7}{1} = 7',
                    explanation: 'Use the magnitudes of the components, since we want the acute angle the path makes with the horizontal. The negative \\( x \\)-component tells us the firework leans backwards (to the left), but the angle to the horizontal is the same on either side.'
                },
                {
                    stepNumber: 5,
                    description: 'Take the inverse tan.',
                    workingLatex: '\\theta = \\tan^{-1}(7) = 81.9° \\text{ (3 s.f.)}',
                    explanation: 'A steep angle, as you would expect from a firework going almost straight up but tilted slightly left.'
                },
                {
                    stepNumber: 6,
                    description: 'Part (c): The vertical distance is the \\( \\mathbf{j} \\)-component at \\( t = 2.5 \\).',
                    workingLatex: '\\text{j-component} = 2(2.5)^2 \\times 7 = 2 \\times 6.25 \\times 7',
                    explanation: 'The full vector at \\( t = 2.5 \\) would be \\( 2(2.5)^2(-\\mathbf{i} + 7\\mathbf{j}) \\); the vertical distance above the ground is just the coefficient of \\( \\mathbf{j} \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Evaluate.',
                    workingLatex: '= 12.5 \\times 7 = 87.5 \\text{ m}',
                    explanation: 'The firework is 87.5 m above the ground at the moment of explosion.'
                },
            ],
            finalAnswer:
                'a) \\( (-4.5\\mathbf{i} + 31.5\\mathbf{j}) \\) m. b) \\(81.9°\\) to the horizontal. c) \\(87.5 m\\).',
        },
    },
    {
        id: 'v3-013',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 13',
        difficulty: 'Foundation',
        questionText:
            'The position of a boat relative to a harbour is modelled by the vector \\( \\mathbf{r} = (3t + 1)\\mathbf{i} + (t^2 - 4)\\mathbf{j} \\) km, where \\( t \\) is the time in hours, \\( \\mathbf{i} \\) is due east and \\( \\mathbf{j} \\) is due north.\n\na) Find the position of the boat at \\( t = 0 \\).\n\nb) Find the position of the boat at \\( t = 3 \\).\n\nc) Calculate the distance of the boat from the harbour at \\( t = 3 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'time-dependent', 'position', 'distance', 'boat'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Substitute \\( t = 0 \\) into each component.',
                    workingLatex: '\\mathbf{r} = (3(0) + 1)\\mathbf{i} + (0^2 - 4)\\mathbf{j}',
                    explanation: 'Work out the \\( \\mathbf{i} \\)-component and the \\( \\mathbf{j} \\)-component separately.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '\\mathbf{r} = (\\mathbf{i} - 4\\mathbf{j}) \\text{ km}',
                    explanation: 'At \\( t = 0 \\) the boat is 1 km east and 4 km south of the harbour. (The harbour is at the origin.)'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Substitute \\( t = 3 \\) into each component.',
                    workingLatex: '\\mathbf{r} = (3(3) + 1)\\mathbf{i} + (3^2 - 4)\\mathbf{j}',
                    explanation: 'Be careful with the \\( t^2 \\) term — squaring takes priority over the subtraction inside the bracket.'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify.',
                    workingLatex: '\\mathbf{r} = (10\\mathbf{i} + 5\\mathbf{j}) \\text{ km}',
                    explanation: 'After 3 hours the boat is 10 km east and 5 km north of the harbour.'
                },
                {
                    stepNumber: 5,
                    description: 'Part (c): Apply Pythagoras to the components.',
                    workingLatex: '|\\mathbf{r}|^2 = 10^2 + 5^2 = 100 + 25 = 125',
                    explanation: 'The distance from the harbour is the magnitude of the position vector, since the harbour sits at the origin of the \\( (\\mathbf{i}, \\mathbf{j}) \\) frame.'
                },
                {
                    stepNumber: 6,
                    description: 'Simplify the surd and give a decimal.',
                    workingLatex: '|\\mathbf{r}| = \\sqrt{125} = \\sqrt{25 \\times 5} = 5\\sqrt{5} \\approx 11.2 \\text{ km (3 s.f.)}',
                    explanation: 'Spot the square factor \\( 25 \\) inside \\( 125 \\). The exact answer is \\( 5\\sqrt{5} \\); rounding gives 11.2 km.'
                },
            ],
            finalAnswer:
                'a) \\( (\\mathbf{i} - 4\\mathbf{j}) \\) km. b) \\( (10\\mathbf{i} + 5\\mathbf{j}) \\) km. c) \\( 5\\sqrt{5} \\approx 11.2 \\) km.',
        },
    },
    {
        id: 'v3-014',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 14',
        difficulty: 'Foundation',
        questionText:
            'A toy car moves on a flat surface. Its velocity is modelled by \\( \\mathbf{v} = (4t\\mathbf{i} + (6 - 2t)\\mathbf{j}) \\) ms\\(^{-1}\\), where \\( t \\) is the time in seconds.\n\na) Find the velocity at \\( t = 1 \\).\n\nb) At what time is the car moving parallel to \\( \\mathbf{i} \\)?\n\nc) Find the exact speed of the car at \\( t = 2 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'time-dependent', 'velocity', 'parallel'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Substitute \\( t = 1 \\) into each component.',
                    workingLatex: '\\mathbf{v} = 4(1)\\mathbf{i} + (6 - 2(1))\\mathbf{j} = (4\\mathbf{i} + 4\\mathbf{j}) \\text{ ms}^{-1}',
                    explanation: 'Evaluate each bracket independently. Both components come out positive, so the car is moving into the first quadrant.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Identify the condition for motion parallel to \\( \\mathbf{i} \\).',
                    workingLatex: '',
                    explanation: 'A velocity is parallel to \\( \\mathbf{i} \\) precisely when its \\( \\mathbf{j} \\)-component vanishes — there must be no movement perpendicular to \\( \\mathbf{i} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Set the \\( \\mathbf{j} \\)-component to zero and solve.',
                    workingLatex: '6 - 2t = 0 \\implies 2t = 6 \\implies t = 3 \\text{ seconds}',
                    explanation: 'A single linear equation; \\( t = 3 \\) is the only solution. (Check: at \\( t = 3 \\), \\( \\mathbf{v} = 12\\mathbf{i} \\) — confirmed parallel to \\( \\mathbf{i} \\).)'
                },
                {
                    stepNumber: 4,
                    description: 'Part (c): Substitute \\( t = 2 \\).',
                    workingLatex: '\\mathbf{v} = 4(2)\\mathbf{i} + (6 - 2(2))\\mathbf{j} = 8\\mathbf{i} + 2\\mathbf{j}',
                    explanation: 'Same substitution routine as in part (a), now with \\( t = 2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Apply Pythagoras to find the speed.',
                    workingLatex: '|\\mathbf{v}|^2 = 8^2 + 2^2 = 64 + 4 = 68',
                    explanation: 'Speed is the magnitude of velocity.'
                },
                {
                    stepNumber: 6,
                    description: 'Simplify the surd.',
                    workingLatex: '|\\mathbf{v}| = \\sqrt{68} = \\sqrt{4 \\times 17} = 2\\sqrt{17} \\text{ ms}^{-1}',
                    explanation: 'Take out the square factor \\( 4 \\) from inside the root. \\( 17 \\) is prime, so the surd cannot be simplified further. The question asks for the *exact* speed, so leave the surd.'
                },
            ],
            finalAnswer:
                'a) \\( (4\\mathbf{i} + 4\\mathbf{j}) \\) ms\\(^{-1}\\). b) \\( t = 3 \\) s. c) \\( 2\\sqrt{17} \\) ms\\(^{-1}\\).',
        },
    },
    {
        id: 'v3-015',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 15',
        difficulty: 'Foundation',
        questionText:
            'A helicopter\'s position is modelled by \\( \\mathbf{r} = (20t)\\mathbf{i} + (t^2 + 10t)\\mathbf{j} \\) m, where \\( \\mathbf{i} \\) is horizontal and \\( \\mathbf{j} \\) is vertical (pointing upwards), and \\( t \\) is in seconds.\n\na) Find the height of the helicopter at \\( t = 5 \\).\n\nb) Find the distance of the helicopter from its starting point at \\( t = 5 \\).\n\nc) At what time is the helicopter \\( 200 \\) m above the ground?',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'time-dependent', 'position', 'height', 'helicopter', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Identify the height as the \\( \\mathbf{j} \\)-component.',
                    workingLatex: '',
                    explanation: 'Because \\( \\mathbf{j} \\) is the vertical direction, the height above the start is the coefficient of \\( \\mathbf{j} \\) in \\( \\mathbf{r} \\). The starting position is \\( \\mathbf{r}(0) = \\mathbf{0} \\), so "above the start" and "above the ground" coincide.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( t = 5 \\) into the \\( \\mathbf{j} \\)-component.',
                    workingLatex: '\\text{Height} = 5^2 + 10(5) = 25 + 50 = 75 \\text{ m}',
                    explanation: 'Mind the order of operations: \\( t^2 \\) is computed before adding \\( 10t \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Find the full position vector at \\( t = 5 \\).',
                    workingLatex: '\\mathbf{r} = 20(5)\\mathbf{i} + 75\\mathbf{j} = (100\\mathbf{i} + 75\\mathbf{j}) \\text{ m}',
                    explanation: 'The \\( \\mathbf{j} \\)-component is the height from part (a); the \\( \\mathbf{i} \\)-component is found by substituting \\( t = 5 \\) into \\( 20t \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Apply Pythagoras.',
                    workingLatex: '|\\mathbf{r}|^2 = 100^2 + 75^2 = 10000 + 5625 = 15625',
                    explanation: 'The starting point is the origin, so the distance from the start is just the magnitude of \\( \\mathbf{r} \\) at \\( t = 5 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Take the square root.',
                    workingLatex: '|\\mathbf{r}| = \\sqrt{15625} = 125 \\text{ m}',
                    explanation: '\\( 15625 = 125^2 \\) — a clean whole-number answer. (You can also notice the 75-100-125 triangle is just 3-4-5 scaled by 25.)'
                },
                {
                    stepNumber: 6,
                    description: 'Part (c): Set the \\( \\mathbf{j} \\)-component equal to 200.',
                    workingLatex: 't^2 + 10t = 200',
                    explanation: 'Height above the ground = 200 m means the vertical coordinate (the \\( \\mathbf{j} \\)-component) equals 200.'
                },
                {
                    stepNumber: 7,
                    description: 'Rearrange to standard quadratic form.',
                    workingLatex: 't^2 + 10t - 200 = 0',
                    explanation: 'Move everything to one side ready to apply the quadratic formula. (You could try to factorise, but the roots are not "nice" small integers — going straight to the formula is cleaner.)'
                },
                {
                    stepNumber: 8,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 't = \\frac{-10 \\pm \\sqrt{10^2 - 4(1)(-200)}}{2(1)} = \\frac{-10 \\pm \\sqrt{100 + 800}}{2}',
                    explanation: 'Coefficients \\( a = 1 \\), \\( b = 10 \\), \\( c = -200 \\). The two minus signs combine into \\( +800 \\) inside the surd.'
                },
                {
                    stepNumber: 9,
                    description: 'Simplify the discriminant and the surd.',
                    workingLatex: 't = \\frac{-10 \\pm \\sqrt{900}}{2} = \\frac{-10 \\pm 30}{2}',
                    explanation: '\\( \\sqrt{900} = 30 \\), an exact whole number.'
                },
                {
                    stepNumber: 10,
                    description: 'Pick the physically meaningful root.',
                    workingLatex: 't = \\frac{-10 + 30}{2} = 10 \\text{ seconds}',
                    explanation: 'The other root, \\( t = -20 \\), is negative and so corresponds to a time before the model started — reject it.'
                },
            ],
            finalAnswer:
                'a) \\( 75\\) m. b) \\(125 \\)m. c) \\( t = 10 \\) seconds.',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 4  (Q16–Q20)  Resultant forces / velocities (cosine & sine rule)
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 'v3-016',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 16',
        difficulty: 'Foundation',
        questionText:
            'An aircraft tries to fly due north at \\( 600 \\) km/h, but there is a wind from the west at \\( 75\\) km/h. The aircraft\'s actual course is modelled by the resultant of these two vectors. Calculate:\n\na) the actual bearing the plane is flying on, to the nearest degree.\n\nb) the aircraft\'s resultant speed in km/h (to 2 d.p.).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'resultant', 'aircraft', 'wind', 'bearing', 'Pythagoras'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up the resultant triangle.',
                    workingLatex: '',
                    explanation: 'The aircraft\'s own velocity is 600 km/h due north. A wind *from* the west blows *towards* the east, pushing the aircraft eastwards at 75 km/h. North and east are perpendicular, so the two velocities form a right-angled triangle whose hypotenuse is the resultant.',
                    diagram: { xMin: -1, xMax: 4, yMin: -1, yMax: 7, hideAxes: true, lines: [{ from: [0, 0], to: [0, 6], color: '#1d4ed8', arrow: true, label: '600\\,\\text{N}', labelAt: [-0.6, 3] }, { from: [0, 6], to: [3, 6], color: '#dc2626', arrow: true, label: '75\\,\\text{E}', labelAt: [1.5, 6.4] }, { from: [0, 0], to: [3, 6], color: '#047857', arrow: true, label: '\\mathbf{r}', labelAt: [1.9, 2.6] }], points: [{ at: [0, 0], label: '\\theta', labelAnchor: 'e', r: 2 }] }
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Form the tangent ratio for the angle east of north.',
                    workingLatex: '\\tan\\theta = \\frac{\\text{east}}{\\text{north}} = \\frac{75}{600} = 0.125',
                    explanation: 'Measure the angle from due north (since we want a bearing). The east-leg is opposite the angle, the north-leg is adjacent, so use tan.'
                },
                {
                    stepNumber: 3,
                    description: 'Take the inverse tan and round.',
                    workingLatex: '\\theta = \\tan^{-1}(0.125) = 7.125\\ldots° \\approx 7°',
                    explanation: 'Round to the nearest whole degree as the question asks.'
                },
                {
                    stepNumber: 4,
                    description: 'Convert to a bearing.',
                    workingLatex: '\\text{Bearing} = 007°',
                    explanation: 'Bearings are measured clockwise from north. The plane is only slightly east of north, so the bearing is barely above 000°. Write three digits (007°), as bearings conventionally have leading zeros.'
                },
                {
                    stepNumber: 5,
                    description: 'Part (b): Apply Pythagoras to the perpendicular components.',
                    workingLatex: '|\\mathbf{r}|^2 = 600^2 + 75^2 = 360000 + 5625 = 365625',
                    explanation: 'The resultant velocity is the hypotenuse of the right triangle formed by the perpendicular vectors.'
                },
                {
                    stepNumber: 6,
                    description: 'Take the square root and round.',
                    workingLatex: '|\\mathbf{r}| = \\sqrt{365625} = 604.6694\\ldots \\approx 604.67 \\text{ km/h (2 d.p.)}',
                    explanation: 'A useful sanity check: the resultant must exceed the larger component (600 km/h) but only slightly, because the wind component (75 km/h) is small compared to it. ✓'
                },
            ],
            finalAnswer: 'a) Bearing \\( 007°\\). b) \\(604.67 \\) km/h.',
        },
    },
    {
        id: 'v3-017',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 17',
        difficulty: 'Foundation',
        questionText:
            'Two tug boats are pulling a ship with an angle of \\(40°\\) between them. One tug boat exerts a force of \\( 8\\) kN and is modelled with vector \\( \\mathbf{a} \\). The other exerts a force of \\( 15\\) kN and is modelled with vector \\( \\mathbf{b} \\). The resultant force on the ship, \\( \\mathbf{r} \\), is the resultant vector of these two forces. Calculate the size of the resultant force.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'resultant', 'cosine rule', 'forces', 'tug boats'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw the vector triangle by laying \\( \\mathbf{b} \\) tip-to-tail after \\( \\mathbf{a} \\).',
                    workingLatex: '',
                    explanation: 'When \\( \\mathbf{a} \\) and \\( \\mathbf{b} \\) act from the same point with 40° between them, placing \\( \\mathbf{b} \\) so its tail starts at the tip of \\( \\mathbf{a} \\) closes the triangle whose third side is the resultant \\( \\mathbf{r} \\).',
                    diagram: { xMin: -5, xMax: 9, yMin: -1, yMax: 11, hideAxes: true, lines: [{ from: [0, 0], to: [8, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}\\,(8\\,\\text{kN})', labelAt: [4, -0.5] }, { from: [8, 0], to: [-3.49, 9.64], color: '#dc2626', arrow: true, label: '\\mathbf{b}\\,(15\\,\\text{kN})', labelAt: [3.0, 6.0] }, { from: [0, 0], to: [-3.49, 9.64], color: '#047857', arrow: true, label: '\\mathbf{r}', labelAt: [-3.0, 5.0] }], points: [{ at: [8, 0], label: '140°', labelAnchor: 'nw', r: 2 }] }
                },
                {
                    stepNumber: 2,
                    description: 'Find the interior angle of the triangle opposite \\( \\mathbf{r} \\).',
                    workingLatex: '180° - 40° = 140°',
                    explanation: 'In the tip-to-tail triangle, the original 40° between the force vectors becomes its supplement, because we have rotated \\( \\mathbf{b} \\) about its own start point.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the cosine rule to find \\( |\\mathbf{r}| \\).',
                    workingLatex: '|\\mathbf{r}|^2 = 8^2 + 15^2 - 2(8)(15)\\cos 140°',
                    explanation: 'The cosine rule, \\( c^2 = a^2 + b^2 - 2ab\\cos C \\), is the standard tool when you know two sides and the included angle of a triangle.'
                },
                {
                    stepNumber: 4,
                    description: 'Compute the squared terms and the cosine product.',
                    workingLatex: '|\\mathbf{r}|^2 = 64 + 225 - 240\\cos 140°',
                    explanation: '\\( 2 \\times 8 \\times 15 = 240 \\). Keep \\( \\cos 140° \\) symbolic for now — its value is negative because \\(140°\\) is obtuse.'
                },
                {
                    stepNumber: 5,
                    description: 'Substitute the numerical value of \\( \\cos 140° \\).',
                    workingLatex: '|\\mathbf{r}|^2 = 289 - 240(-0.7660\\ldots) = 289 + 183.85\\ldots = 472.85\\ldots',
                    explanation: 'Two minuses give a plus: subtracting a negative number adds. This is exactly why an obtuse included angle gives a larger resultant — the formula is responding to the cosine\'s sign.'
                },
                {
                    stepNumber: 6,
                    description: 'Take the square root.',
                    workingLatex: '|\\mathbf{r}| = \\sqrt{472.85\\ldots} = 21.74\\ldots \\approx 21.7 \\text{ kN (3 s.f.)}',
                    explanation: 'A sanity check: when the forces are tightly aligned (small angle between them) the resultant is close to their sum (\\( 8 + 15 = 23 \\)). With 40° between them, 21.7 kN is comfortably below that maximum but close to it. ✓'
                },
            ],
            finalAnswer: '\\( |\\mathbf{r}| = 21.7 \\) kN (3 s.f.).',
        },
    },
    {
        id: 'v3-018',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 18',
        difficulty: 'Foundation',
        questionText:
            'Two lumberjacks are pulling ropes attached to a tree stump. The angle between the ropes is \\( 100°\\). One lumberjack exerts a force of \\( 250\\) N and the other exerts a force of \\(210\\) N. The resultant force \\( \\mathbf{f} \\) is modelled by the resultant of these two vectors. Calculate the magnitude of \\( \\mathbf{f} \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'resultant', 'cosine rule', 'forces', 'lumberjacks'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw the tip-to-tail vector triangle.',
                    workingLatex: '',
                    explanation: 'Place the two force vectors tip-to-tail so the resultant \\( \\mathbf{f} \\) closes the triangle. The original 100° between the ropes becomes its supplement inside this triangle.',
                    diagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 6, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '250\\,\\text{N}', labelAt: [2.5, -0.5] }, { from: [5, 0], to: [5.73, 4.14], color: '#dc2626', arrow: true, label: '210\\,\\text{N}', labelAt: [6.2, 2.1] }, { from: [0, 0], to: [5.73, 4.14], color: '#047857', arrow: true, label: '\\mathbf{f}', labelAt: [2.4, 2.4] }], points: [{ at: [5, 0], label: '80°', labelAnchor: 'nw', r: 2 }] }
                },
                {
                    stepNumber: 2,
                    description: 'Find the angle opposite \\( \\mathbf{f} \\).',
                    workingLatex: '180° - 100° = 80°',
                    explanation: 'A standard parallelogram-of-forces trick: the angle between vectors when drawn from the same point becomes its supplement when one of them is translated tip-to-tail.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the cosine rule.',
                    workingLatex: '|\\mathbf{f}|^2 = 250^2 + 210^2 - 2(250)(210)\\cos 80°',
                    explanation: 'Two sides (250 N and 210 N) with their included angle (80°) — the cosine rule applies directly.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate the squared terms and the cosine product.',
                    workingLatex: '|\\mathbf{f}|^2 = 62500 + 44100 - 105000\\cos 80°',
                    explanation: '\\( 2 \\times 250 \\times 210 = 105000 \\). Because 80° is acute, \\( \\cos 80° \\) is positive but small.'
                },
                {
                    stepNumber: 5,
                    description: 'Substitute the numerical cosine.',
                    workingLatex: '|\\mathbf{f}|^2 = 106600 - 105000(0.1736\\ldots) = 106600 - 18228\\ldots = 88372\\ldots',
                    explanation: 'Subtracting (a positive value) shrinks the result, which agrees with the geometry: a wider angle between forces gives a *smaller* resultant than 250 + 210.'
                },
                {
                    stepNumber: 6,
                    description: 'Take the square root.',
                    workingLatex: '|\\mathbf{f}| = \\sqrt{88372\\ldots} = 297.27\\ldots \\approx 297 \\text{ N (3 s.f.)}',
                    explanation: 'Sanity check: \\( 297 \\) N is between \\( |250 - 210| = 40 \\) N (forces opposing) and \\( 250 + 210 = 460 \\) N (forces aligned). ✓'
                },
            ],
            finalAnswer: '\\( |\\mathbf{f}| = 297 \\) N (3 s.f.).',
        },
    },
    {
        id: 'v3-019',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 19',
        difficulty: 'Foundation',
        questionText:
            'Ray is attempting to paddle his canoe due north at \\(4\\) ms\\(^{-1}\\), but there is a current travelling west at \\(3\\) ms\\(^{-1}\\). Ray\'s actual course is modelled by the resultant of these two vectors. Calculate:\n\na) the actual bearing Ray is travelling on.\n\nb) Ray\'s resultant speed in ms\\(^{-1}\\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'resultant', 'canoe', 'current', 'bearing', 'Pythagoras'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up the resultant triangle.',
                    workingLatex: '',
                    explanation: 'Ray paddles 4 ms⁻¹ due north; the current carries him 3 ms⁻¹ due west. North and west are perpendicular, so the resultant is the hypotenuse of a right-angled triangle.',
                    diagram: { xMin: -4, xMax: 1.5, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [0, 4], color: '#1d4ed8', arrow: true, label: '4\\,\\text{N (paddle)}', labelAt: [0.65, 2] }, { from: [0, 4], to: [-3, 4], color: '#dc2626', arrow: true, label: '3\\,\\text{W (current)}', labelAt: [-1.5, 4.4] }, { from: [0, 0], to: [-3, 4], color: '#047857', arrow: true, label: '\\mathbf{r}', labelAt: [-1.3, 1.8] }], points: [{ at: [0, 0], label: '\\theta', labelAnchor: 'nw', r: 2 }] }
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Find the angle west of north using tan.',
                    workingLatex: '\\tan\\theta = \\frac{\\text{west}}{\\text{north}} = \\frac{3}{4}',
                    explanation: 'Measure the angle from north (we are finding a bearing). The west-leg (3) is opposite the angle; the north-leg (4) is adjacent.'
                },
                {
                    stepNumber: 3,
                    description: 'Take the inverse tan.',
                    workingLatex: '\\theta = \\tan^{-1}\\!\\left(\\frac{3}{4}\\right) = 36.9° \\text{ (3 s.f.)}',
                    explanation: 'Another 3-4-5 triangle; the angle is the same as in question 4.'
                },
                {
                    stepNumber: 4,
                    description: 'Convert "west of north" to a bearing.',
                    workingLatex: '\\text{Bearing} = 360° - 36.9° = 323° \\text{ (nearest degree)}',
                    explanation: 'Because bearings measure clockwise from north and Ray is moving west of north, his bearing lies between 270° and 360°. Subtract the acute angle from 360°.'
                },
                {
                    stepNumber: 5,
                    description: 'Part (b): Apply Pythagoras to find the resultant speed.',
                    workingLatex: '|\\mathbf{r}|^2 = 4^2 + 3^2 = 16 + 9 = 25',
                    explanation: 'Speed is the magnitude of the resultant velocity; the two perpendicular components combine via Pythagoras.'
                },
                {
                    stepNumber: 6,
                    description: 'Take the square root.',
                    workingLatex: '|\\mathbf{r}| = \\sqrt{25} = 5 \\text{ ms}^{-1}',
                    explanation: 'A clean 3-4-5 triple: the resultant speed is exactly 5 ms⁻¹.'
                },
            ],
            finalAnswer: 'a) Bearing \\( 323°\\). b) \\( 5 \\) ms\\(^{-1}\\).',
        },
    },
    {
        id: 'v3-020',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 20',
        difficulty: 'Foundation',
        questionText:
            'A crate is pulled across a floor by two ropes. The forces in the ropes are modelled by vectors \\( \\mathbf{F}_1 \\) and \\( \\mathbf{F}_2 \\). The magnitude of \\( \\mathbf{F}_1 \\) is 180 N and the magnitude of \\( \\mathbf{F}_2 \\) is 120 N. The angle between the two ropes is 65°. The resultant force is \\( \\mathbf{R} = \\mathbf{F}_1 + \\mathbf{F}_2 \\). Calculate:\n\na) the magnitude of the resultant force.\n\nb) the angle the resultant makes with \\( \\mathbf{F}_1 \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'resultant', 'cosine rule', 'sine rule', 'forces'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw the tip-to-tail vector triangle.',
                    workingLatex: '',
                    explanation: 'Lay \\( \\mathbf{F}_2 \\) tip-to-tail after \\( \\mathbf{F}_1 \\). The resultant \\( \\mathbf{R} \\) is the third side of the triangle.',
                    diagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [6, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{F}_1\\,(180\\,\\text{N})', labelAt: [3, -0.5] }, { from: [6, 0], to: [4.31, 3.625], color: '#dc2626', arrow: true, label: '\\mathbf{F}_2\\,(120\\,\\text{N})', labelAt: [5.6, 2.0] }, { from: [0, 0], to: [4.31, 3.625], color: '#047857', arrow: true, label: '\\mathbf{R}', labelAt: [1.8, 2.2] }], points: [{ at: [6, 0], label: '115°', labelAnchor: 'nw', r: 2 }] }
                },
                {
                    stepNumber: 2,
                    description: 'Find the interior angle of the triangle opposite \\( \\mathbf{R} \\).',
                    workingLatex: '180° - 65° = 115°',
                    explanation: 'The 65° between the two ropes (when drawn from the crate) becomes its supplement (115°) once \\( \\mathbf{F}_2 \\) has been translated to the tip of \\( \\mathbf{F}_1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (a): Apply the cosine rule.',
                    workingLatex: '|\\mathbf{R}|^2 = 180^2 + 120^2 - 2(180)(120)\\cos 115°',
                    explanation: 'Two sides with their included angle — cosine rule, no ambiguity.'
                },
                {
                    stepNumber: 4,
                    description: 'Compute the squared terms and the cosine product.',
                    workingLatex: '|\\mathbf{R}|^2 = 32400 + 14400 - 43200\\cos 115°',
                    explanation: '\\( 2 \\times 180 \\times 120 = 43200 \\). \\( \\cos 115° \\) is negative since 115° is obtuse.'
                },
                {
                    stepNumber: 5,
                    description: 'Substitute the numerical cosine.',
                    workingLatex: '|\\mathbf{R}|^2 = 46800 - 43200(-0.4226\\ldots) = 46800 + 18256\\ldots = 65056\\ldots',
                    explanation: 'Subtracting a negative gives a plus, increasing the result. This is consistent with the geometry: an obtuse interior angle in the triangle means the forces are more aligned than perpendicular.'
                },
                {
                    stepNumber: 6,
                    description: 'Take the square root.',
                    workingLatex: '|\\mathbf{R}| = \\sqrt{65056\\ldots} = 255.06\\ldots \\approx 255 \\text{ N (3 s.f.)}',
                    explanation: 'Resultant magnitude is 255 N. (Check: this is below \\( 180 + 120 = 300 \\) — the maximum if perfectly aligned — but well above 180 N alone. ✓)'
                },
                {
                    stepNumber: 7,
                    description: 'Part (b): Set up the sine rule for the angle between \\( \\mathbf{R} \\) and \\( \\mathbf{F}_1 \\).',
                    workingLatex: '\\frac{\\sin\\alpha}{120} = \\frac{\\sin 115°}{255}',
                    explanation: 'In the vector triangle, the angle \\( \\alpha \\) is opposite the side of length 120 (the magnitude of \\( \\mathbf{F}_2 \\)), and the 115° angle is opposite the side of length 255 (the magnitude of \\( \\mathbf{R} \\)). The sine rule pairs sides with their opposite angles.'
                },
                {
                    stepNumber: 8,
                    description: 'Rearrange and substitute.',
                    workingLatex: '\\sin\\alpha = \\frac{120 \\sin 115°}{255} = \\frac{120 \\times 0.9063\\ldots}{255} = 0.4265\\ldots',
                    explanation: 'Multiply both sides by 120 to isolate \\( \\sin\\alpha \\). Keep extra decimals through the calculation to limit rounding error.'
                },
                {
                    stepNumber: 9,
                    description: 'Take the inverse sine.',
                    workingLatex: '\\alpha = \\sin^{-1}(0.4265\\ldots) = 25.2° \\text{ (3 s.f.)}',
                    explanation: 'The acute solution from arcsin is the right one here, because in this triangle \\( \\alpha \\) must be acute (the obtuse angle is already accounted for by the 115°). ✓'
                },
            ],
            finalAnswer: 'a) \\( |\\mathbf{R}| = 255 \\) N (3 s.f.). b) \\( \\alpha = 25.2° \\) (3 s.f.).',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 5  (Q21–Q25)  Geometric modelling with vector sides
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 'v3-021',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 21',
        difficulty: 'Foundation',
        questionText:
            'A park is modelled as a quadrilateral \\(EFGH\\), with sides given by the following vectors:\n\\( \\overrightarrow{EF} = 2\\mathbf{i} + 3\\mathbf{j} \\), \\( \\overrightarrow{FG} = \\mathbf{i} - \\frac{1}{2}\\mathbf{j} \\), \\( \\overrightarrow{GH} = -\\mathbf{i} - \\frac{3}{2}\\mathbf{j} \\) and \\( \\overrightarrow{HE} = -2\\mathbf{i} - \\mathbf{j} \\).\n\nShow that the park is a trapezium.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'geometric', 'trapezium', 'parallel', 'park'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the definition of a trapezium.',
                    workingLatex: '',
                    explanation: 'A trapezium has exactly one pair of parallel opposite sides. Two vectors are parallel iff one is a (non-zero) scalar multiple of the other, so we will check both pairs of opposite sides for this property.',
                    diagram: { xMin: -1, xMax: 4, yMin: -1, yMax: 4, hideAxes: true, lines: [{ from: [0, 0], to: [2, 3], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{EF}', labelAt: [0.6, 1.7] }, { from: [2, 3], to: [3, 2.5], color: '#dc2626', arrow: true, label: '\\overrightarrow{FG}', labelAt: [2.5, 3.05] }, { from: [3, 2.5], to: [2, 1], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{GH}', labelAt: [2.95, 1.65] }, { from: [2, 1], to: [0, 0], color: '#dc2626', arrow: true, label: '\\overrightarrow{HE}', labelAt: [0.85, 0.3] }], points: [{ at: [0, 0], label: 'E', labelAnchor: 'sw', r: 2 }, { at: [2, 3], label: 'F', labelAnchor: 'n', r: 2 }, { at: [3, 2.5], label: 'G', labelAnchor: 'e', r: 2 }, { at: [2, 1], label: 'H', labelAnchor: 'se', r: 2 }] }
                },
                {
                    stepNumber: 2,
                    description: 'Identify the two pairs of opposite sides.',
                    workingLatex: '',
                    explanation: 'In quadrilateral EFGH, the two pairs of opposite sides are EF/GH and FG/HE. Care: to compare EF with GH meaningfully, we need them in the same orientation, so we will compare \\( \\overrightarrow{EF} \\) with \\( \\overrightarrow{HG} = -\\overrightarrow{GH} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Reverse \\( \\overrightarrow{GH} \\) so the comparison is well-oriented.',
                    workingLatex: '\\overrightarrow{HG} = -\\overrightarrow{GH} = \\mathbf{i} + \\tfrac{3}{2}\\mathbf{j}',
                    explanation: 'Flipping the direction of \\( \\overrightarrow{GH} \\) gives \\( \\overrightarrow{HG} \\), the side traced from H to G. Now \\( \\overrightarrow{EF} \\) and \\( \\overrightarrow{HG} \\) both go "the same way round" the parallel pair.'
                },
                {
                    stepNumber: 4,
                    description: 'Compare \\( \\overrightarrow{EF} \\) and \\( \\overrightarrow{HG} \\).',
                    workingLatex: '\\overrightarrow{EF} = 2\\mathbf{i} + 3\\mathbf{j} = 2\\!\\left(\\mathbf{i} + \\tfrac{3}{2}\\mathbf{j}\\right) = 2\\,\\overrightarrow{HG}',
                    explanation: 'Factor out 2 from each component of \\( \\overrightarrow{EF} \\) and recognise the bracket as \\( \\overrightarrow{HG} \\). So EF is parallel to GH (same direction, double the length). ✓'
                },
                {
                    stepNumber: 5,
                    description: 'Now reverse \\( \\overrightarrow{HE} \\) to compare \\( \\overrightarrow{FG} \\) with \\( \\overrightarrow{EH} \\).',
                    workingLatex: '\\overrightarrow{EH} = -\\overrightarrow{HE} = 2\\mathbf{i} + \\mathbf{j}',
                    explanation: 'Same trick as in step 3 — flip the side that "goes the wrong way" so both sides are parameterised consistently.'
                },
                {
                    stepNumber: 6,
                    description: 'Check whether \\( \\overrightarrow{FG} = k\\,\\overrightarrow{EH} \\) for some scalar \\( k \\).',
                    workingLatex: '\\overrightarrow{FG} = \\mathbf{i} - \\tfrac{1}{2}\\mathbf{j}, \\quad \\overrightarrow{EH} = 2\\mathbf{i} + \\mathbf{j}',
                    explanation: 'Match \\( \\mathbf{i} \\)-components: \\( 1 = 2k \\Rightarrow k = \\tfrac{1}{2} \\). Match \\( \\mathbf{j} \\)-components: \\( -\\tfrac{1}{2} = k(1) \\Rightarrow k = -\\tfrac{1}{2} \\).'
                },
                {
                    stepNumber: 7,
                    description: 'No single scalar works.',
                    workingLatex: 'k = \\tfrac{1}{2} \\neq -\\tfrac{1}{2}',
                    explanation: 'The two equations give incompatible values of \\( k \\), so no scalar makes \\( \\overrightarrow{FG} \\) and \\( \\overrightarrow{EH} \\) proportional. Hence FG is *not* parallel to HE. ✗'
                },
                {
                    stepNumber: 8,
                    description: 'Conclude.',
                    workingLatex: '',
                    explanation: 'Exactly one pair of opposite sides (EF and GH) is parallel, so the park EFGH is a trapezium. □'
                },
            ],
            finalAnswer: '\\(EF\\) is parallel to \\(GH\\) (since \\( \\overrightarrow{EF} = 2\\,\\overrightarrow{HG} \\)), but \\(FG\\) is not parallel to \\(EH\\). Therefore the park is a trapezium. □',
        },
    },
    {
        id: 'v3-022',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 22',
        difficulty: 'Foundation',
        questionText:
            'The quadrilateral \\(ABCD\\) is used to model a garden. The vertices have coordinates \\( A(1, 2), B(9, 1), C(7, 7)\\) and \\( D(2, 8)\\) . There is a straight path that crosses the garden. Its start point divides \\( \\overrightarrow{AB} \\) in the ratio \\(3:1\\), and it ends at the midpoint of \\( \\overrightarrow{CD} \\).\n\nThe path is modelled by vector \\( \\mathbf{p} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}. \\)  Calculate \\( x \\) and \\( y \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'geometric', 'garden', 'path', 'ratio', 'midpoint'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( \\overrightarrow{AB} \\) from the coordinates.',
                    workingLatex: '\\overrightarrow{AB} = \\text{B} - \\text{A} = \\begin{pmatrix}9\\\\1\\end{pmatrix} - \\begin{pmatrix}1\\\\2\\end{pmatrix} = \\begin{pmatrix}8\\\\-1\\end{pmatrix}',
                    explanation: 'Subtract A from B component-wise to get the displacement from A to B.',
                    diagram: { xMin: 0, xMax: 10, yMin: 0, yMax: 9, hideAxes: true, lines: [{ from: [1, 2], to: [9, 1], color: '#666', label: '\\mathit{AB}', labelAt: [5, 1.25] }, { from: [9, 1], to: [7, 7], color: '#666', label: '\\mathit{BC}', labelAt: [8.5, 4] }, { from: [7, 7], to: [2, 8], color: '#666', label: '\\mathit{CD}', labelAt: [4.5, 8.0] }, { from: [2, 8], to: [1, 2], color: '#666', label: '\\mathit{DA}', labelAt: [0.85, 5] }, { from: [7, 1.25], to: [4.5, 7.5], color: '#047857', arrow: true, label: '\\mathbf{p}', labelAt: [5.4, 4.5] }], points: [{ at: [1, 2], label: 'A', labelAnchor: 'sw', r: 2 }, { at: [9, 1], label: 'B', labelAnchor: 'se', r: 2 }, { at: [7, 7], label: 'C', labelAnchor: 'ne', r: 2 }, { at: [2, 8], label: 'D', labelAnchor: 'nw', r: 2 }, { at: [7, 1.25], label: '\\text{start}', labelAnchor: 's', r: 2, color: '#047857' }, { at: [4.5, 7.5], label: '\\text{end}', labelAnchor: 'n', r: 2, color: '#047857' }] }
                },
                {
                    stepNumber: 2,
                    description: 'Locate the start point of the path along AB.',
                    workingLatex: '',
                    explanation: 'A ratio of 3:1 from A to B places the start point three-quarters of the way along AB (because \\( \\tfrac{3}{3+1} = \\tfrac{3}{4} \\)).'
                },
                {
                    stepNumber: 3,
                    description: 'Compute the start point as a position vector.',
                    workingLatex: '\\text{Start} = \\text{A} + \\tfrac{3}{4}\\overrightarrow{AB} = \\begin{pmatrix}1\\\\2\\end{pmatrix} + \\tfrac{3}{4}\\begin{pmatrix}8\\\\-1\\end{pmatrix}',
                    explanation: 'Walking from A by \\( \\tfrac{3}{4} \\) of the way along AB.'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify the addition.',
                    workingLatex: '\\text{Start} = \\begin{pmatrix}1\\\\2\\end{pmatrix} + \\begin{pmatrix}6\\\\-0.75\\end{pmatrix} = \\begin{pmatrix}7\\\\1.25\\end{pmatrix}',
                    explanation: '\\( \\tfrac{3}{4} \\times 8 = 6 \\) and \\( \\tfrac{3}{4} \\times -1 = -0.75 \\). Add component-wise.'
                },
                {
                    stepNumber: 5,
                    description: 'Compute the end point — the midpoint of CD.',
                    workingLatex: '\\text{End} = \\tfrac{1}{2}(\\text{C} + \\text{D}) = \\tfrac{1}{2}\\!\\left(\\begin{pmatrix}7\\\\7\\end{pmatrix} + \\begin{pmatrix}2\\\\8\\end{pmatrix}\\right) = \\tfrac{1}{2}\\begin{pmatrix}9\\\\15\\end{pmatrix} = \\begin{pmatrix}4.5\\\\7.5\\end{pmatrix}',
                    explanation: 'Midpoint formula: average the position vectors of C and D.'
                },
                {
                    stepNumber: 6,
                    description: 'Find the path vector by subtracting the start from the end.',
                    workingLatex: '\\mathbf{p} = \\text{End} - \\text{Start} = \\begin{pmatrix}4.5\\\\7.5\\end{pmatrix} - \\begin{pmatrix}7\\\\1.25\\end{pmatrix}',
                    explanation: 'The displacement from start to end is end minus start, the same way \\( \\overrightarrow{AB} = B - A \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Component-wise subtraction.',
                    workingLatex: '\\mathbf{p} = \\begin{pmatrix}4.5 - 7\\\\7.5 - 1.25\\end{pmatrix} = \\begin{pmatrix}-2.5\\\\6.25\\end{pmatrix}',
                    explanation: 'Reading off, \\( x = -2.5 \\) and \\( y = 6.25 \\). Negative \\( x \\) means the path runs to the left (west); positive \\( y \\) means it runs upwards (north).'
                },
            ],
            finalAnswer: '\\( x = -2.5 \\), \\( y = 6.25 \\).',
        },
    },
    {
        id: 'v3-023',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 23',
        difficulty: 'Foundation',
        questionText:
            'The position vectors of the vertices of the parallelogram PQRS are:\n\\( \\overrightarrow{OP} = 2\\mathbf{i} + 3\\mathbf{j} \\), \\( \\overrightarrow{OQ} = 7\\mathbf{i} + 4\\mathbf{j} \\), \\( \\overrightarrow{OR} = 6\\mathbf{i} + \\mathbf{j} \\) and \\( \\overrightarrow{OS} = \\mathbf{i} \\).\n\nNote: \\( O \\) is the origin, not a vertex of the parallelogram. \\( \\overrightarrow{PQ} \\) and \\( \\overrightarrow{SR} \\) are opposite sides.\n\nWhat are the exact lengths of this parallelogram\'s diagonals?',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'geometric', 'parallelogram', 'diagonals', 'magnitude'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the diagonals.',
                    workingLatex: '',
                    explanation: 'In a quadrilateral PQRS with vertices labelled in order, the diagonals connect opposite vertices: P to R, and Q to S.',
                    diagram: { xMin: 0, xMax: 8, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [2, 3], to: [7, 4], color: '#666', label: 'PQ', labelAt: [4.5, 3.25] }, { from: [7, 4], to: [6, 1], color: '#666', label: 'QR', labelAt: [6.95, 2.5] }, { from: [6, 1], to: [1, 0], color: '#666', label: 'RS', labelAt: [3.5, 0.25] }, { from: [1, 0], to: [2, 3], color: '#666', label: 'SP', labelAt: [1.0, 1.5] }, { from: [2, 3], to: [6, 1], color: '#1d4ed8', dashed: true, label: 'PR', labelAt: [3.9, 2.35] }, { from: [7, 4], to: [1, 0], color: '#dc2626', dashed: true, label: 'QS', labelAt: [3.5, 2.35] }], points: [{ at: [2, 3], label: 'P', labelAnchor: 'nw', r: 2 }, { at: [7, 4], label: 'Q', labelAnchor: 'ne', r: 2 }, { at: [6, 1], label: 'R', labelAnchor: 'se', r: 2 }, { at: [1, 0], label: 'S', labelAnchor: 'sw', r: 2 }] }
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( \\overrightarrow{PR} \\) using position vectors.',
                    workingLatex: '\\overrightarrow{PR} = \\overrightarrow{OR} - \\overrightarrow{OP} = (6\\mathbf{i} + \\mathbf{j}) - (2\\mathbf{i} + 3\\mathbf{j})',
                    explanation: 'For any two points X, Y, \\( \\overrightarrow{XY} = \\overrightarrow{OY} - \\overrightarrow{OX} \\). This is the standard route through the origin.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: '\\overrightarrow{PR} = 4\\mathbf{i} - 2\\mathbf{j}',
                    explanation: 'Subtract component-wise: \\( 6 - 2 = 4 \\) and \\( 1 - 3 = -2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Apply Pythagoras to find \\( |\\overrightarrow{PR}| \\).',
                    workingLatex: '|\\overrightarrow{PR}|^2 = 4^2 + (-2)^2 = 16 + 4 = 20',
                    explanation: 'The length of the diagonal is the magnitude of its vector.'
                },
                {
                    stepNumber: 5,
                    description: 'Simplify the surd.',
                    workingLatex: '|\\overrightarrow{PR}| = \\sqrt{20} = \\sqrt{4 \\times 5} = 2\\sqrt{5}',
                    explanation: 'Extract the square factor 4. Leaving as \\( \\sqrt{20} \\) would not be in simplest exact form.'
                },
                {
                    stepNumber: 6,
                    description: 'Find \\( \\overrightarrow{QS} \\) using position vectors.',
                    workingLatex: '\\overrightarrow{QS} = \\overrightarrow{OS} - \\overrightarrow{OQ} = \\mathbf{i} - (7\\mathbf{i} + 4\\mathbf{j}) = -6\\mathbf{i} - 4\\mathbf{j}',
                    explanation: 'Same routine as for \\( \\overrightarrow{PR} \\) but for the other diagonal.'
                },
                {
                    stepNumber: 7,
                    description: 'Apply Pythagoras to find \\( |\\overrightarrow{QS}| \\).',
                    workingLatex: '|\\overrightarrow{QS}|^2 = (-6)^2 + (-4)^2 = 36 + 16 = 52',
                    explanation: 'The minus signs square away.'
                },
                {
                    stepNumber: 8,
                    description: 'Simplify the surd.',
                    workingLatex: '|\\overrightarrow{QS}| = \\sqrt{52} = \\sqrt{4 \\times 13} = 2\\sqrt{13}',
                    explanation: 'Extract the square factor 4.'
                },
            ],
            finalAnswer: 'The diagonals have lengths \\( 2\\sqrt{5} \\) and \\( 2\\sqrt{13} \\).',
        },
    },
    {
        id: 'v3-024',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 24',
        difficulty: 'Foundation',
        questionText:
            'The routes from Appleton to Bridgford (\\( \\overrightarrow{AB} \\)) and to Crofton (\\( \\overrightarrow{AC} \\)) are modelled by the vectors \\( \\mathbf{p} \\) and \\( \\mathbf{q} \\) respectively. Xena\'s house lies between Bridgford and Crofton such that her position, \\(X\\), divides \\(BC\\) in the ratio \\(3:4\\).\n\nFind the vector \\( \\overrightarrow{AX} \\) in terms of \\( \\mathbf{p} \\) and \\( \\mathbf{q} \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'geometric', 'routes', 'ratio', 'towns'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Choose a route from A to X.',
                    workingLatex: '\\overrightarrow{AX} = \\overrightarrow{AB} + \\overrightarrow{BX}',
                    explanation: 'Travel first along the known edge AB, then along the unknown segment BX. Any consistent path works — A → C → X would also do — but starting from B is natural because the ratio 3:4 is given on BC starting from B.',
                    diagram: { xMin: -1, xMax: 6, yMin: -2, yMax: 4, hideAxes: true, lines: [{ from: [0, 0], to: [4, 3], color: '#1d4ed8', arrow: true, label: '\\mathbf{p}', labelAt: [1.7, 1.8] }, { from: [0, 0], to: [5, -1], color: '#dc2626', arrow: true, label: '\\mathbf{q}', labelAt: [2.6, -0.85] }, { from: [4, 3], to: [5, -1], color: '#666', label: '3:4', labelAt: [5.05, 1.0] }, { from: [0, 0], to: [4.43, 1.29], color: '#047857', arrow: true, label: '\\overrightarrow{AX}', labelAt: [2.3, 0.55] }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 2 }, { at: [4, 3], label: 'B', labelAnchor: 'n', r: 2 }, { at: [5, -1], label: 'C', labelAnchor: 'e', r: 2 }, { at: [4.43, 1.29], label: 'X', labelAnchor: 'e', r: 2 }] }
                },
                {
                    stepNumber: 2,
                    description: 'Translate the ratio into a fraction of BC.',
                    workingLatex: '\\overrightarrow{BX} = \\tfrac{3}{7}\\overrightarrow{BC}',
                    explanation: 'BX:XC = 3:4 means BX is \\( \\tfrac{3}{3+4} = \\tfrac{3}{7} \\) of the way from B to C.'
                },
                {
                    stepNumber: 3,
                    description: 'Express \\( \\overrightarrow{BC} \\) in terms of \\( \\mathbf{p} \\) and \\( \\mathbf{q} \\).',
                    workingLatex: '\\overrightarrow{BC} = \\overrightarrow{BA} + \\overrightarrow{AC} = -\\overrightarrow{AB} + \\overrightarrow{AC} = -\\mathbf{p} + \\mathbf{q}',
                    explanation: 'Route B → A → C. The reverse of \\( \\overrightarrow{AB} \\) is \\( -\\overrightarrow{AB} = -\\mathbf{p} \\); then add \\( \\overrightarrow{AC} = \\mathbf{q} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Combine into \\( \\overrightarrow{AX} \\).',
                    workingLatex: '\\overrightarrow{AX} = \\mathbf{p} + \\tfrac{3}{7}(-\\mathbf{p} + \\mathbf{q})',
                    explanation: 'Substitute \\( \\overrightarrow{AB} = \\mathbf{p} \\) and \\( \\overrightarrow{BX} = \\tfrac{3}{7}(-\\mathbf{p} + \\mathbf{q}) \\) into the route equation from step 1.'
                },
                {
                    stepNumber: 5,
                    description: 'Expand the bracket.',
                    workingLatex: '\\overrightarrow{AX} = \\mathbf{p} - \\tfrac{3}{7}\\mathbf{p} + \\tfrac{3}{7}\\mathbf{q}',
                    explanation: 'Distribute \\( \\tfrac{3}{7} \\) across both terms inside the bracket.'
                },
                {
                    stepNumber: 6,
                    description: 'Combine the \\( \\mathbf{p} \\)-terms.',
                    workingLatex: '\\overrightarrow{AX} = \\left(1 - \\tfrac{3}{7}\\right)\\mathbf{p} + \\tfrac{3}{7}\\mathbf{q} = \\tfrac{4}{7}\\mathbf{p} + \\tfrac{3}{7}\\mathbf{q}',
                    explanation: '\\( 1 - \\tfrac{3}{7} = \\tfrac{4}{7} \\). Notice the coefficients \\( \\tfrac{4}{7} \\) and \\( \\tfrac{3}{7} \\) — they correspond to XC:BX = 4:3 (the "section formula" pattern: the weight on each endpoint equals the ratio of the *opposite* segment).'
                },
            ],
            finalAnswer: '\\( \\overrightarrow{AX} = \\frac{4}{7}\\mathbf{p} + \\frac{3}{7}\\mathbf{q} \\)',
        },
    },
    {
        id: 'v3-025',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 25',
        difficulty: 'Foundation',
        questionText:
            'In the diagram below, \\(W\\) divides \\(QR\\) in the ratio \\( a:b \\).\n\nGiven that \\( \\overrightarrow{PW} = \\frac{3}{5}\\mathbf{s} + \\frac{2}{5}\\mathbf{t} \\), where \\( \\overrightarrow{PQ} = \\mathbf{s} \\) and \\( \\overrightarrow{PR} = \\mathbf{t} \\), find \\( a \\) and \\( b \\).',
        questionDiagram: { xMin: -1, xMax: 6, yMin: -2, yMax: 4, hideAxes: true, lines: [{ from: [0, 0], to: [4, 3], color: '#1d4ed8', arrow: true, label: '\\mathbf{s}', labelAt: [1.7, 1.8] }, { from: [0, 0], to: [5, -1], color: '#dc2626', arrow: true, label: '\\mathbf{t}', labelAt: [2.6, -0.85] }, { from: [4, 3], to: [4.4, 1.4], color: '#666', label: 'a', labelAt: [4.5, 2.3] }, { from: [4.4, 1.4], to: [5, -1], color: '#666', label: 'b', labelAt: [5.0, 0.2] }], points: [{ at: [0, 0], label: 'P', labelAnchor: 'sw', r: 2 }, { at: [4, 3], label: 'Q', labelAnchor: 'n', r: 2 }, { at: [5, -1], label: 'R', labelAnchor: 'e', r: 2 }, { at: [4.4, 1.4], label: 'W', labelAnchor: 'e', r: 2 }] },
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'geometric', 'ratio', 'division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up a route from P to W via Q.',
                    workingLatex: '\\overrightarrow{PW} = \\overrightarrow{PQ} + \\overrightarrow{QW}',
                    explanation: 'Any path from P to W will work; going via Q is natural because the ratio is given on the segment QR which starts at Q.'
                },
                {
                    stepNumber: 2,
                    description: 'Express \\( \\overrightarrow{QW} \\) as a fraction of \\( \\overrightarrow{QR} \\).',
                    workingLatex: '\\overrightarrow{QW} = \\tfrac{a}{a+b}\\,\\overrightarrow{QR}',
                    explanation: 'W divides QR in the ratio QW:WR = \\( a:b \\), so QW is \\( \\tfrac{a}{a+b} \\) of the full length QR.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( \\overrightarrow{QR} \\) in terms of \\( \\mathbf{s} \\) and \\( \\mathbf{t} \\).',
                    workingLatex: '\\overrightarrow{QR} = \\overrightarrow{QP} + \\overrightarrow{PR} = -\\mathbf{s} + \\mathbf{t}',
                    explanation: 'Route Q → P → R. \\( \\overrightarrow{QP} = -\\overrightarrow{PQ} = -\\mathbf{s} \\) and \\( \\overrightarrow{PR} = \\mathbf{t} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute everything into the expression for \\( \\overrightarrow{PW} \\).',
                    workingLatex: '\\overrightarrow{PW} = \\mathbf{s} + \\tfrac{a}{a+b}(-\\mathbf{s} + \\mathbf{t})',
                    explanation: 'Now \\( \\overrightarrow{PW} \\) is expressed entirely in terms of \\( \\mathbf{s} \\), \\( \\mathbf{t} \\), and the unknown ratio.'
                },
                {
                    stepNumber: 5,
                    description: 'Collect the \\( \\mathbf{s} \\) and \\( \\mathbf{t} \\) terms.',
                    workingLatex: '\\overrightarrow{PW} = \\left(1 - \\tfrac{a}{a+b}\\right)\\mathbf{s} + \\tfrac{a}{a+b}\\mathbf{t} = \\tfrac{b}{a+b}\\mathbf{s} + \\tfrac{a}{a+b}\\mathbf{t}',
                    explanation: '\\( 1 - \\tfrac{a}{a+b} = \\tfrac{(a+b) - a}{a+b} = \\tfrac{b}{a+b} \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Compare coefficients with the given expression.',
                    workingLatex: '\\tfrac{b}{a+b} = \\tfrac{3}{5} \\qquad \\text{and} \\qquad \\tfrac{a}{a+b} = \\tfrac{2}{5}',
                    explanation: 'Because \\( \\mathbf{s} \\) and \\( \\mathbf{t} \\) are not parallel, the coefficient on each must match independently. (As a quick check: \\( \\tfrac{b}{a+b} + \\tfrac{a}{a+b} = 1 \\) and \\( \\tfrac{3}{5} + \\tfrac{2}{5} = 1 \\). ✓)'
                },
                {
                    stepNumber: 7,
                    description: 'Solve for the ratio.',
                    workingLatex: 'a:b = 2:3 \\implies a = 2, \\; b = 3',
                    explanation: 'From \\( \\tfrac{a}{a+b} = \\tfrac{2}{5} \\) we get \\( a:(a+b) = 2:5 \\), so \\( a:b = 2:3 \\). The smallest integer solution is \\( a = 2 \\), \\( b = 3 \\).'
                },
            ],
            finalAnswer: '\\( a = 2 \\), \\( b = 3 \\).',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 6  (Q26–Q30)  Mixed modelling problems
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 'v3-026',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 26',
        difficulty: 'Foundation',
        questionText:
            'A swimmer is attempting to swim due east across a river at \\( 2 \\) ms\\(^{-1}\\). The river current flows due south at \\(1.5\\) ms\\(^{-1}\\). The swimmer\'s actual motion is modelled by the resultant of these two vectors.\n\na) Find the swimmer\'s resultant speed.\n\nb) Find the bearing on which the swimmer actually travels, to the nearest degree.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'resultant', 'swimmer', 'current', 'bearing', 'Pythagoras'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up the resultant triangle.',
                    workingLatex: '',
                    explanation: 'The swimmer\'s velocity (2 ms⁻¹ east) and the current (1.5 ms⁻¹ south) are perpendicular, so the resultant is the hypotenuse of a right-angled triangle with legs 2 and 1.5.',
                    diagram: { xMin: -0.5, xMax: 3, yMin: -2, yMax: 0.5, hideAxes: true, lines: [{ from: [0, 0], to: [2, 0], color: '#1d4ed8', arrow: true, label: '2\\,\\text{E (swim)}', labelAt: [1, 0.25] }, { from: [2, 0], to: [2, -1.5], color: '#dc2626', arrow: true, label: '1.5\\,\\text{S}', labelAt: [2.4, -0.75] }, { from: [0, 0], to: [2, -1.5], color: '#047857', arrow: true, label: '\\mathbf{r}', labelAt: [0.7, -0.95] }], points: [{ at: [0, 0], label: '\\theta', labelAnchor: 'se', r: 2 }] }
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Apply Pythagoras to the perpendicular components.',
                    workingLatex: '|\\mathbf{r}|^2 = 2^2 + 1.5^2 = 4 + 2.25 = 6.25',
                    explanation: 'Speed is the magnitude of the resultant velocity.'
                },
                {
                    stepNumber: 3,
                    description: 'Take the square root.',
                    workingLatex: '|\\mathbf{r}| = \\sqrt{6.25} = 2.5 \\text{ ms}^{-1}',
                    explanation: '\\( 2.5^2 = 6.25 \\) so the answer is exactly 2.5 ms⁻¹. (Notice 1.5-2-2.5 is a 3-4-5 triple scaled by 0.5.)'
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): Identify the quadrant.',
                    workingLatex: '',
                    explanation: 'The resultant has a positive east component and a negative north component — it points into the south-east quadrant. The bearing therefore lies between 090° and 180°.'
                },
                {
                    stepNumber: 5,
                    description: 'Find the angle south of east using tan.',
                    workingLatex: '\\tan\\theta = \\frac{\\text{south}}{\\text{east}} = \\frac{1.5}{2} = 0.75',
                    explanation: 'Measure from due east (the swimmer\'s aim). The south-leg (1.5) is opposite the angle, the east-leg (2) is adjacent.'
                },
                {
                    stepNumber: 6,
                    description: 'Take the inverse tan.',
                    workingLatex: '\\theta = \\tan^{-1}(0.75) = 36.87° \\approx 36.9°',
                    explanation: 'The swimmer drifts 36.9° to the south of their intended eastward heading.'
                },
                {
                    stepNumber: 7,
                    description: 'Convert to a bearing.',
                    workingLatex: '\\text{Bearing} = 90° + 36.87° = 126.87° \\approx 127°',
                    explanation: 'Due east is bearing 090°. The angle is measured *south of east*, which is *clockwise* from east, hence add. Round to the nearest degree.'
                },
            ],
            finalAnswer: 'a) \\( 2.5\\) ms\\(^{-1}\\). b) Bearing \\( 127°\\).',
        },
    },
    {
        id: 'v3-027',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 27',
        difficulty: 'Foundation',
        questionText:
            'A field is modelled as a parallelogram \\(ABCD\\), where \\( \\overrightarrow{AB} = 5\\mathbf{i} + 2\\mathbf{j} \\) and \\( \\overrightarrow{AD} = \\mathbf{i} + 4\\mathbf{j} \\). All units are in metres.\n\na) Find \\( \\overrightarrow{AC} \\).\n\nb) Find the exact length of the diagonal \\(AC\\).\n\nc) Find the exact length of the diagonal \\(BD\\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'geometric', 'parallelogram', 'field', 'diagonals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Use the parallelogram property to find \\( \\overrightarrow{BC} \\).',
                    workingLatex: '\\overrightarrow{BC} = \\overrightarrow{AD} = \\mathbf{i} + 4\\mathbf{j}',
                    explanation: 'In parallelogram ABCD with sides labelled in order, opposite sides are equal vectors: \\( \\overrightarrow{BC} \\) (one of the two "vertical" sides) equals \\( \\overrightarrow{AD} \\) (the other).',
                    diagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 7, hideAxes: true, lines: [{ from: [0, 0], to: [5, 2], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{AB}', labelAt: [2.5, 0.7] }, { from: [0, 0], to: [1, 4], color: '#dc2626', arrow: true, label: '\\overrightarrow{AD}', labelAt: [0.2, 2.1] }, { from: [5, 2], to: [6, 6], color: '#dc2626', dashed: true, label: 'BC', labelAt: [6.0, 4] }, { from: [1, 4], to: [6, 6], color: '#1d4ed8', dashed: true, label: 'DC', labelAt: [3.5, 5.4] }, { from: [0, 0], to: [6, 6], color: '#047857', arrow: true, label: 'AC', labelAt: [3.2, 2.7] }, { from: [5, 2], to: [1, 4], color: '#7c3aed', arrow: true, label: 'BD', labelAt: [2.6, 3.4] }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 2 }, { at: [5, 2], label: 'B', labelAnchor: 'se', r: 2 }, { at: [6, 6], label: 'C', labelAnchor: 'ne', r: 2 }, { at: [1, 4], label: 'D', labelAnchor: 'nw', r: 2 }] }
                },
                {
                    stepNumber: 2,
                    description: 'Travel from A to C via B.',
                    workingLatex: '\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{BC} = (5\\mathbf{i} + 2\\mathbf{j}) + (\\mathbf{i} + 4\\mathbf{j})',
                    explanation: 'Tip-to-tail: from A, walk along AB to B, then along BC to C. Substitute the two known vectors.'
                },
                {
                    stepNumber: 3,
                    description: 'Add component-wise.',
                    workingLatex: '\\overrightarrow{AC} = 6\\mathbf{i} + 6\\mathbf{j}',
                    explanation: '\\( 5 + 1 = 6 \\) and \\( 2 + 4 = 6 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): Apply Pythagoras to \\( \\overrightarrow{AC} \\).',
                    workingLatex: '|\\overrightarrow{AC}|^2 = 6^2 + 6^2 = 36 + 36 = 72',
                    explanation: 'The length of the diagonal is the magnitude of its vector.'
                },
                {
                    stepNumber: 5,
                    description: 'Simplify the surd.',
                    workingLatex: '|\\overrightarrow{AC}| = \\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2} \\text{ m}',
                    explanation: 'Extract the square factor 36. Alternative shortcut: when both components are equal (here, 6 and 6), the magnitude is "side × \\( \\sqrt{2} \\)" — the diagonal of a square of side 6.'
                },
                {
                    stepNumber: 6,
                    description: 'Part (c): Find \\( \\overrightarrow{BD} \\) by routing through A.',
                    workingLatex: '\\overrightarrow{BD} = \\overrightarrow{BA} + \\overrightarrow{AD} = -\\overrightarrow{AB} + \\overrightarrow{AD}',
                    explanation: 'From B, walk back along BA (which is \\( -\\overrightarrow{AB} \\)) to A, then forward along AD to D.'
                },
                {
                    stepNumber: 7,
                    description: 'Substitute and simplify.',
                    workingLatex: '\\overrightarrow{BD} = -(5\\mathbf{i} + 2\\mathbf{j}) + (\\mathbf{i} + 4\\mathbf{j}) = -4\\mathbf{i} + 2\\mathbf{j}',
                    explanation: 'Distribute the minus sign across \\( \\overrightarrow{AB} \\), then add component-wise.'
                },
                {
                    stepNumber: 8,
                    description: 'Apply Pythagoras to find \\( |\\overrightarrow{BD}| \\).',
                    workingLatex: '|\\overrightarrow{BD}|^2 = (-4)^2 + 2^2 = 16 + 4 = 20',
                    explanation: 'The minus sign squares away.'
                },
                {
                    stepNumber: 9,
                    description: 'Simplify the surd.',
                    workingLatex: '|\\overrightarrow{BD}| = \\sqrt{20} = \\sqrt{4 \\times 5} = 2\\sqrt{5} \\text{ m}',
                    explanation: 'Extract the square factor 4.'
                },
            ],
            finalAnswer: 'a) \\( \\overrightarrow{AC} = 6\\mathbf{i} + 6\\mathbf{j} \\). b) \\( 6\\sqrt{2} \\) m. c) \\( 2\\sqrt{5} \\) m.',
        },
    },
    {
        id: 'v3-028',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 28',
        difficulty: 'Foundation',
        questionText:
            'A kayaker tries to paddle due east at \\(5\\) ms\\(^{-1}\\) across a river. The current flows at \\(2\\) ms\\(^{-1}\\) on a bearing of \\(200°\\). The kayaker\'s actual velocity is modelled by the resultant of these two vectors. Find:\n\na) the resultant speed of the kayaker (to 2 d.p.).\n\nb) the bearing on which the kayaker actually travels (to the nearest degree).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'resultant', 'kayaker', 'current', 'bearing', 'components'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Express the kayaker\'s velocity as a column vector.',
                    workingLatex: '\\mathbf{v}_{k} = \\begin{pmatrix} 5 \\\\ 0 \\end{pmatrix} \\text{ ms}^{-1}',
                    explanation: 'Take east as positive \\( x \\) and north as positive \\( y \\). Due east at 5 ms⁻¹ gives 5 in the east slot and 0 in the north slot.',
                    diagram: { xMin: -1, xMax: 6, yMin: -2.5, yMax: 1, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{v}_k\\,(5\\,\\text{E})', labelAt: [2.5, 0.3] }, { from: [5, 0], to: [4.316, -1.879], color: '#dc2626', arrow: true, label: '\\mathbf{v}_c\\,(2)', labelAt: [5.0, -0.95] }, { from: [0, 0], to: [4.316, -1.879], color: '#047857', arrow: true, label: '\\mathbf{r}', labelAt: [2.0, -1.35] }], points: [{ at: [0, 0], label: '\\theta', labelAnchor: 'se', r: 2 }] }
                },
                {
                    stepNumber: 2,
                    description: 'Resolve the current using the bearing.',
                    workingLatex: '\\mathbf{v}_{c} = \\begin{pmatrix} 2\\sin 200° \\\\ 2\\cos 200° \\end{pmatrix}',
                    explanation: 'When the angle is measured as a bearing (clockwise from north), the east component is \\( r\\sin\\theta \\) and the north component is \\( r\\cos\\theta \\). This is *opposite* to the usual "angle from \\( x \\)-axis" convention.'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the trig values.',
                    workingLatex: '\\mathbf{v}_{c} = \\begin{pmatrix} 2(-0.3420\\ldots) \\\\ 2(-0.9397\\ldots) \\end{pmatrix} = \\begin{pmatrix} -0.684 \\\\ -1.879 \\end{pmatrix} \\text{ (3 d.p.)}',
                    explanation: 'Bearing 200° is in the south-west quadrant (between south, 180°, and west, 270°), so both components are negative — as expected. Keep 3 d.p. through the working to limit rounding loss.'
                },
                {
                    stepNumber: 4,
                    description: 'Add the two velocity vectors to find the resultant.',
                    workingLatex: '\\mathbf{r} = \\mathbf{v}_{k} + \\mathbf{v}_{c} = \\begin{pmatrix} 5 + (-0.684) \\\\ 0 + (-1.879) \\end{pmatrix} = \\begin{pmatrix} 4.316 \\\\ -1.879 \\end{pmatrix}',
                    explanation: 'Add component-wise. The east component shrinks (the current opposes some of the eastward motion); the north component becomes negative (the current pulls the kayaker south).'
                },
                {
                    stepNumber: 5,
                    description: 'Part (a): Apply Pythagoras.',
                    workingLatex: '|\\mathbf{r}|^2 = 4.316^2 + (-1.879)^2 = 18.628 + 3.531 = 22.159',
                    explanation: 'Squaring the \\( y \\)-component kills its negative sign. Keep extra decimals before rounding at the end.'
                },
                {
                    stepNumber: 6,
                    description: 'Take the square root.',
                    workingLatex: '|\\mathbf{r}| = \\sqrt{22.159} = 4.707\\ldots \\approx 4.71 \\text{ ms}^{-1} \\text{ (2 d.p.)}',
                    explanation: 'A sanity check: the resultant is slightly less than 5 ms⁻¹, which makes sense because the current is mostly working against the kayaker.'
                },
                {
                    stepNumber: 7,
                    description: 'Part (b): Identify the quadrant of the resultant.',
                    workingLatex: '',
                    explanation: 'The resultant has positive east and negative north components, so it points into the south-east quadrant. Its bearing lies between 090° (due east) and 180° (due south).'
                },
                {
                    stepNumber: 8,
                    description: 'Find the angle south of east using tan.',
                    workingLatex: '\\theta = \\tan^{-1}\\!\\left(\\frac{1.879}{4.316}\\right) = \\tan^{-1}(0.4354\\ldots) = 23.5°',
                    explanation: 'Measure from due east. South-leg (1.879) is opposite the angle; east-leg (4.316) is adjacent.'
                },
                {
                    stepNumber: 9,
                    description: 'Convert to a bearing.',
                    workingLatex: '\\text{Bearing} = 90° + 23.5° = 113.5° \\approx 114°',
                    explanation: 'Add the angle to 090° (due east) because the deflection is south of east — clockwise from east. Round to the nearest degree.'
                },
            ],
            finalAnswer: 'a) 4.71 ms\\(^{-1}\\). b) Bearing 114°.',
        },
    },
    {
        id: 'v3-029',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 29',
        difficulty: 'Foundation',
        questionText:
            'A particle\'s displacement from the origin at time \\( t \\) seconds is modelled by \\( \\mathbf{s} = (t^2 - 4t)\\mathbf{i} + (2t + 1)\\mathbf{j} \\) m.\n\na) Find the displacement at \\( t = 0 \\).\n\nb) At what time does the particle cross the \\(j\\)-axis (i.e. when is the \\(i\\)-component zero)?\n\nc) Find the exact distance of the particle from the origin at \\( t = 5 \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'time-dependent', 'displacement', 'particle', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Substitute \\( t = 0 \\) into each component.',
                    workingLatex: '\\mathbf{s} = (0^2 - 4 \\cdot 0)\\mathbf{i} + (2 \\cdot 0 + 1)\\mathbf{j}',
                    explanation: 'Evaluate each bracket separately.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '\\mathbf{s} = 0\\mathbf{i} + 1\\mathbf{j} = \\mathbf{j} \\text{ m}',
                    explanation: 'The particle starts at position (0, 1), i.e. 1 m up the \\( \\mathbf{j} \\)-axis.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Set the i-component equal to zero.',
                    workingLatex: 't^2 - 4t = 0',
                    explanation: 'Crossing the \\( \\mathbf{j} \\)-axis means the \\( \\mathbf{i} \\)-coordinate is zero. (The condition for crossing each axis is that the *other* coordinate vanishes.)'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise.',
                    workingLatex: 't(t - 4) = 0',
                    explanation: 'Common factor of \\( t \\). Avoid dividing through by \\( t \\) here — that would lose the solution \\( t = 0 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for \\( t \\).',
                    workingLatex: 't = 0 \\text{ or } t = 4 \\text{ seconds}',
                    explanation: 'A product equals zero iff one of its factors is zero. Both solutions are physically meaningful — the particle starts on the \\( \\mathbf{j} \\)-axis (at \\( t = 0 \\)) and crosses it again at \\( t = 4 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Part (c): Substitute \\( t = 5 \\).',
                    workingLatex: '\\mathbf{s} = (5^2 - 4 \\cdot 5)\\mathbf{i} + (2 \\cdot 5 + 1)\\mathbf{j} = (25 - 20)\\mathbf{i} + 11\\mathbf{j} = 5\\mathbf{i} + 11\\mathbf{j}',
                    explanation: 'Evaluate each bracket. Mind order of operations: \\( t^2 \\) before \\( -4t \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Apply Pythagoras.',
                    workingLatex: '|\\mathbf{s}|^2 = 5^2 + 11^2 = 25 + 121 = 146',
                    explanation: 'Distance from the origin is the magnitude of the position vector.'
                },
                {
                    stepNumber: 8,
                    description: 'Take the square root.',
                    workingLatex: '|\\mathbf{s}| = \\sqrt{146} \\text{ m}',
                    explanation: '\\( 146 = 2 \\times 73 \\), and 73 is prime, so \\( \\sqrt{146} \\) is already in simplest exact form. The question asks for the *exact* distance, so leave the surd.'
                },
            ],
            finalAnswer: 'a) \\( \\mathbf{j} \\) m. b) \\( t = 0 \\) and \\( t = 4 \\) seconds. c) \\( \\sqrt{146} \\) m.',
        },
    },
    {
        id: 'v3-030',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 30',
        difficulty: 'Foundation',
        questionText:
            'Three forces act on a particle. The forces are modelled by the vectors \\( \\mathbf{F}_1 = (4\\mathbf{i} + 3\\mathbf{j}) \\) N, \\( \\mathbf{F}_2 = (-2\\mathbf{i} + 5\\mathbf{j}) \\) N and \\( \\mathbf{F}_3 = (a\\mathbf{i} + b\\mathbf{j}) \\) N.\n\nThe particle is in equilibrium.\n\na) Find the values of \\( a \\) and \\( b \\).\n\nb) Calculate the exact magnitude of \\( \\mathbf{F}_3 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'equilibrium', 'forces', 'resultant'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the equilibrium condition.',
                    workingLatex: '\\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{F}_3 = \\mathbf{0}',
                    explanation: 'A particle is in equilibrium when the *resultant* of all forces acting on it is the zero vector — i.e. the forces cancel out exactly. Geometrically, laying the three force vectors tip-to-tail closes a triangle that returns to the start point.',
                    diagram: { xMin: -1, xMax: 5, yMin: -1, yMax: 9, hideAxes: true, lines: [{ from: [0, 0], to: [4, 3], color: '#1d4ed8', arrow: true, label: '\\mathbf{F}_1', labelAt: [2.2, 1.2] }, { from: [4, 3], to: [2, 8], color: '#dc2626', arrow: true, label: '\\mathbf{F}_2', labelAt: [3.4, 5.5] }, { from: [2, 8], to: [0, 0], color: '#7c3aed', arrow: true, label: '\\mathbf{F}_3', labelAt: [0.5, 4] }], points: [{ at: [0, 0], label: '', labelAnchor: 'sw', r: 2 }] }
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Add the three force vectors component-wise.',
                    workingLatex: '\\big(4 + (-2) + a\\big)\\mathbf{i} + \\big(3 + 5 + b\\big)\\mathbf{j} = \\mathbf{0}',
                    explanation: 'Vector addition is done independently in each component direction.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the coefficients.',
                    workingLatex: '(2 + a)\\mathbf{i} + (8 + b)\\mathbf{j} = \\mathbf{0}',
                    explanation: 'Add the numerical parts inside each bracket. Combine \\( 4 + (-2) = 2 \\) and \\( 3 + 5 = 8 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Equate each component to zero.',
                    workingLatex: '2 + a = 0 \\qquad \\text{and} \\qquad 8 + b = 0',
                    explanation: 'The zero vector has zero in every component. Because \\( \\mathbf{i} \\) and \\( \\mathbf{j} \\) are linearly independent, each component must separately equal zero.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for \\( a \\) and \\( b \\).',
                    workingLatex: 'a = -2, \\quad b = -8',
                    explanation: 'Simple linear equations.'
                },
                {
                    stepNumber: 6,
                    description: 'Part (b): Write out \\( \\mathbf{F}_3 \\) with the values of \\( a \\) and \\( b \\).',
                    workingLatex: '\\mathbf{F}_3 = (-2\\mathbf{i} - 8\\mathbf{j}) \\text{ N}',
                    explanation: 'Just substitute back. \\( \\mathbf{F}_3 \\) must oppose \\( \\mathbf{F}_1 + \\mathbf{F}_2 = 2\\mathbf{i} + 8\\mathbf{j} \\) — and it does. ✓'
                },
                {
                    stepNumber: 7,
                    description: 'Apply Pythagoras.',
                    workingLatex: '|\\mathbf{F}_3|^2 = (-2)^2 + (-8)^2 = 4 + 64 = 68',
                    explanation: 'Squaring both components kills the negative signs.'
                },
                {
                    stepNumber: 8,
                    description: 'Simplify the surd.',
                    workingLatex: '|\\mathbf{F}_3| = \\sqrt{68} = \\sqrt{4 \\times 17} = 2\\sqrt{17} \\text{ N}',
                    explanation: 'Extract the square factor 4. \\( 17 \\) is prime, so the surd is now in simplest form. The question asks for the *exact* magnitude, so leave it as \\( 2\\sqrt{17} \\) N.'
                },
            ],
            finalAnswer: 'a) \\( a = -2 \\), \\( b = -8 \\). b) \\( |\\mathbf{F}_3| = 2\\sqrt{17} \\) N.',
        },
    },
];
