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
                    description: 'Draw a diagram showing the components of the acceleration vector.',
                    workingLatex: '',
                    explanation: 'The vector has horizontal component 3 and vertical component 4.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the magnitude using Pythagoras\' theorem.',
                    workingLatex: '|\\mathbf{a}| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\text{ ms}^{-2}',
                    explanation: 'The exact magnitude is 5 ms⁻².',
                },
                {
                    stepNumber: 3,
                    description: 'Find the angle with the horizontal using trigonometry.',
                    workingLatex: '\\tan\\theta = \\frac{4}{3} \\implies \\theta = \\tan^{-1}\\!\\left(\\frac{4}{3}\\right) = 53.1° \\text{ (3 s.f.)}',
                    explanation: 'The acceleration acts at 53.1° above the horizontal.',
                },
            ],
            finalAnswer: '\\( |\\mathbf{a}| = 5 \\) ms\\(^{-2}\\), angle = 53.1° above the horizontal.',
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
                    description: 'Draw a diagram. The drone moves west (negative i) and north (positive j).',
                    workingLatex: '',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Find the speed (magnitude of velocity).',
                    workingLatex: '|\\mathbf{v}| = \\sqrt{(-5)^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13 \\text{ ms}^{-1}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Find the bearing. The angle west of north is:',
                    workingLatex: '\\alpha = \\tan^{-1}\\!\\left(\\frac{5}{12}\\right) = 22.6°',
                    explanation: 'The drone moves west of north, so the bearing is \\( 360° - 22.6° = 337° \\).',
                },
            ],
            finalAnswer: 'Speed = 13 ms\\(^{-1}\\). Bearing = 337°.',
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
                    description: 'Apply Pythagoras\' theorem to each vector.',
                    workingLatex:
                        '\\text{a) } |\\mathbf{a}| = \\sqrt{2^2 + 5^2} = \\sqrt{4 + 25} = \\sqrt{29} \\text{ ms}^{-2}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: '',
                    workingLatex:
                        '\\text{b) } |\\mathbf{b}| = \\sqrt{(-3)^2 + 1^2} = \\sqrt{9 + 1} = \\sqrt{10} \\text{ ms}^{-2}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: '',
                    workingLatex:
                        '\\text{c) } |\\mathbf{c}| = \\sqrt{4^2 + (-3)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5 \\text{ ms}^{-2}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: '',
                    workingLatex:
                        '\\text{d) } |\\mathbf{d}| = \\sqrt{(-1)^2 + (-7)^2} = \\sqrt{1 + 49} = \\sqrt{50} = 5\\sqrt{2} \\text{ ms}^{-2}',
                    explanation: '',
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
                    description: 'Draw a diagram showing the velocity components.',
                    workingLatex: '',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the speed.',
                    workingLatex: '|\\mathbf{v}| = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10 \\text{ ms}^{-1}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Find the angle of projection.',
                    workingLatex: '\\tan\\theta = \\frac{6}{8} = \\frac{3}{4} \\implies \\theta = \\tan^{-1}\\!\\left(\\frac{3}{4}\\right) = 36.9° \\text{ (3 s.f.)}',
                    explanation: 'The ball is projected at 36.9° above the horizontal.',
                },
            ],
            finalAnswer: 'Speed = 10 ms\\(^{-1}\\). Angle of projection = 36.9° (3 s.f.).',
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
                    description: 'Draw a diagram. The negative j-component means the stone moves downwards.',
                    workingLatex: '',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Find the exact speed.',
                    workingLatex: '|\\mathbf{v}| = \\sqrt{5^2 + (-2)^2} = \\sqrt{25 + 4} = \\sqrt{29} \\text{ ms}^{-1}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Find the angle below the horizontal.',
                    workingLatex: '\\tan\\theta = \\frac{2}{5} \\implies \\theta = \\tan^{-1}\\!\\left(\\frac{2}{5}\\right) = 21.8° \\text{ (3 s.f.)}',
                    explanation: 'The velocity is directed 21.8° below the horizontal.',
                },
            ],
            finalAnswer: 'Speed = \\( \\sqrt{29} \\) ms\\(^{-1}\\). Angle = 21.8° below the horizontal (3 s.f.).',
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
            'A ship travels 120 km on a bearing of 060°. Express the ship\'s displacement from its starting position as a column vector. Give each component to 2 d.p.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'bearing', 'displacement', 'column vector', 'trigonometry'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw a diagram. A bearing of 060° is 60° clockwise from north.',
                    workingLatex: '',
                    explanation: 'Take east as the positive x-direction and north as the positive y-direction.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the east (x) component using sine (bearing measured from north).',
                    workingLatex: 'x = 120 \\sin 60° = 120 \\times \\frac{\\sqrt{3}}{2} = 103.92 \\text{ (2 d.p.)}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Find the north (y) component using cosine.',
                    workingLatex: 'y = 120 \\cos 60° = 120 \\times \\frac{1}{2} = 60.00',
                    explanation: 'Both components are positive (north-east displacement).',
                },
                {
                    stepNumber: 4,
                    description: 'Write as a column vector.',
                    workingLatex: '\\mathbf{d} = \\begin{pmatrix} 103.92 \\\\ 60.00 \\end{pmatrix} \\text{ km}',
                    explanation: '',
                },
            ],
            finalAnswer: '\\( \\mathbf{d} = \\begin{pmatrix} 103.92 \\\\ 60.00 \\end{pmatrix} \\) km',
        },
    },
    {
        id: 'v3-007',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 07',
        difficulty: 'Foundation',
        questionText:
            'A hiker walks 8 km on a bearing of 230°. Express the hiker\'s displacement from the start as a column vector. Give each component to 2 d.p.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'bearing', 'displacement', 'column vector', 'trigonometry'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw a diagram. Bearing 230° is in the south-west direction. The angle measured from south going west is 230° − 180° = 50°.',
                    workingLatex: '',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Find the east (x) component. The hiker moves west, so x is negative.',
                    workingLatex: 'x = -8 \\sin 50° = -8 \\times 0.766\\ldots = -6.13 \\text{ (2 d.p.)}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Find the north (y) component. The hiker moves south, so y is negative.',
                    workingLatex: 'y = -8 \\cos 50° = -8 \\times 0.6427\\ldots = -5.14 \\text{ (2 d.p.)}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Write as a column vector.',
                    workingLatex: '\\mathbf{d} = \\begin{pmatrix} -6.13 \\\\ -5.14 \\end{pmatrix} \\text{ km}',
                    explanation: 'Both components are negative as expected for a south-west displacement.',
                },
            ],
            finalAnswer: '\\( \\mathbf{d} = \\begin{pmatrix} -6.13 \\\\ -5.14 \\end{pmatrix} \\) km',
        },
    },
    {
        id: 'v3-008',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 08',
        difficulty: 'Foundation',
        questionText:
            'A roller coaster is accelerating at 25 ms\\(^{-2}\\) at an angle of 40° below the positive horizontal. Express this acceleration as a vector of the form \\( \\mathbf{a} = x\\mathbf{i} + y\\mathbf{j} \\). Give values to 2 d.p.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'acceleration', 'components', 'trigonometry'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw a diagram. The acceleration is 40° below the horizontal.',
                    workingLatex: '',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Find the horizontal component.',
                    workingLatex: 'x = 25 \\cos 40° = 25 \\times 0.766\\ldots = 19.15',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Find the vertical component (negative because it is below the horizontal).',
                    workingLatex: 'y = -25 \\sin 40° = -25 \\times 0.6427\\ldots = -16.07',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Write the vector.',
                    workingLatex: '\\mathbf{a} = (19.15\\mathbf{i} - 16.07\\mathbf{j}) \\text{ ms}^{-2}',
                    explanation: '',
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
                    description: 'Find the direction angle of \\( \\mathbf{v}_1 \\).',
                    workingLatex:
                        '\\alpha_1 = \\tan^{-1}\\!\\left(\\frac{-2}{3}\\right) = -33.69°',
                    explanation: 'The vector points into the fourth quadrant (right and down).',
                },
                {
                    stepNumber: 2,
                    description: 'Find the direction angle of \\( \\mathbf{v}_2 \\).',
                    workingLatex:
                        '\\alpha_2 = \\tan^{-1}\\!\\left(\\frac{3}{1}\\right) = 71.57°',
                    explanation: 'The vector points into the first quadrant (right and up).',
                },
                {
                    stepNumber: 3,
                    description: 'The acute angle between the two vectors is the difference of their direction angles.',
                    workingLatex:
                        '\\theta = 71.57° - (-33.69°) = 105.26°',
                    explanation: 'This is obtuse. The acute angle between the lines is \\( 180° - 105.26° = 74.74° \\).',
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
            'A yacht sails 50 km on a bearing of 315°. Express the yacht\'s displacement from its starting position as a column vector. Give each component to 2 d.p.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'bearing', 'displacement', 'column vector', 'trigonometry'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw a diagram. Bearing 315° is 45° west of north (i.e. north-west direction).',
                    workingLatex: '',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Find the east (x) component. The yacht moves west so x is negative.',
                    workingLatex: 'x = -50 \\sin 45° = -50 \\times \\frac{\\sqrt{2}}{2} = -35.36 \\text{ (2 d.p.)}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Find the north (y) component.',
                    workingLatex: 'y = 50 \\cos 45° = 50 \\times \\frac{\\sqrt{2}}{2} = 35.36 \\text{ (2 d.p.)}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Write as a column vector.',
                    workingLatex: '\\mathbf{d} = \\begin{pmatrix} -35.36 \\\\ 35.36 \\end{pmatrix} \\text{ km}',
                    explanation: '',
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
            'The velocity of a fish swimming in the horizontal plane is modelled by the vector \\( \\mathbf{v} = 3t(\\mathbf{i} - 2\\mathbf{j}) \\) ms\\(^{-1}\\), where \\( t \\) is the time in seconds.\n\na) State the fish\'s velocity after 2 seconds.\n\nb) Calculate the fish\'s exact speed after 3 seconds.\n\nc) Find the angle that \\( \\mathbf{v} \\) makes with \\( \\mathbf{i} \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'time-dependent', 'velocity', 'speed', 'fish'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Substitute \\( t = 2 \\) into \\( \\mathbf{v} = 3t(\\mathbf{i} - 2\\mathbf{j}) \\).',
                    workingLatex: '\\mathbf{v} = 3(2)(\\mathbf{i} - 2\\mathbf{j}) = (6\\mathbf{i} - 12\\mathbf{j}) \\text{ ms}^{-1}',
                    explanation: 'Expand: \\( 3t \\mathbf{i} - 6t \\mathbf{j} \\), then put \\( t = 2 \\).',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Find the velocity at \\( t = 3 \\).',
                    workingLatex: '\\mathbf{v} = 3(3)(\\mathbf{i} - 2\\mathbf{j}) = (9\\mathbf{i} - 18\\mathbf{j})',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Calculate the speed (magnitude).',
                    workingLatex: '|\\mathbf{v}| = \\sqrt{9^2 + (-18)^2} = \\sqrt{81 + 324} = \\sqrt{405} = 9\\sqrt{5} \\text{ ms}^{-1}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Part (c): The direction vector is \\( (\\mathbf{i} - 2\\mathbf{j}) \\) which does not depend on \\( t \\).',
                    workingLatex: '\\tan\\theta = \\frac{2}{1} = 2 \\implies \\theta = \\tan^{-1}(2) = 63.4° \\text{ below } \\mathbf{i} \\text{ (3 s.f.)}',
                    explanation: 'The angle with \\( \\mathbf{i} \\) is 63.4° at any time \\( t > 0 \\).',
                },
            ],
            finalAnswer:
                'a) \\( (6\\mathbf{i} - 12\\mathbf{j}) \\) ms\\(^{-1}\\). b) \\( 9\\sqrt{5} \\) ms\\(^{-1}\\). c) 63.4° below \\( \\mathbf{i} \\) (3 s.f.).',
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
                    description: 'Part (a): Substitute \\( t = 1.5 \\).',
                    workingLatex:
                        '\\mathbf{s} = 2(1.5)^2(-\\mathbf{i} + 7\\mathbf{j}) = 2(2.25)(-\\mathbf{i} + 7\\mathbf{j}) = 4.5(-\\mathbf{i} + 7\\mathbf{j}) = (-4.5\\mathbf{i} + 31.5\\mathbf{j}) \\text{ m}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): The direction is constant — use the direction vector \\( (-1, 7) \\).',
                    workingLatex:
                        '\\tan\\theta = \\frac{7}{1} = 7 \\implies \\theta = \\tan^{-1}(7) = 81.9° \\text{ (3 s.f.)}',
                    explanation: 'The firework\'s path makes an angle of 81.9° with the horizontal.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Find the j-component at \\( t = 2.5 \\).',
                    workingLatex:
                        '\\text{j-component} = 2(2.5)^2 \\times 7 = 2(6.25)(7) = 87.5 \\text{ m}',
                    explanation: 'The firework is 87.5 m above the ground when it explodes.',
                },
            ],
            finalAnswer:
                'a) \\( (-4.5\\mathbf{i} + 31.5\\mathbf{j}) \\) m. b) 81.9° to the horizontal. c) 87.5 m.',
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
                    description: 'Part (a): Substitute \\( t = 0 \\).',
                    workingLatex: '\\mathbf{r} = (0 + 1)\\mathbf{i} + (0 - 4)\\mathbf{j} = (\\mathbf{i} - 4\\mathbf{j}) \\text{ km}',
                    explanation: 'At \\( t = 0 \\), the boat is 1 km east and 4 km south of the harbour.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Substitute \\( t = 3 \\).',
                    workingLatex: '\\mathbf{r} = (9 + 1)\\mathbf{i} + (9 - 4)\\mathbf{j} = (10\\mathbf{i} + 5\\mathbf{j}) \\text{ km}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Find the distance from the harbour (the origin).',
                    workingLatex: '|\\mathbf{r}| = \\sqrt{10^2 + 5^2} = \\sqrt{100 + 25} = \\sqrt{125} = 5\\sqrt{5} \\approx 11.2 \\text{ km (3 s.f.)}',
                    explanation: '',
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
                    description: 'Part (a): Substitute \\( t = 1 \\).',
                    workingLatex: '\\mathbf{v} = 4(1)\\mathbf{i} + (6 - 2(1))\\mathbf{j} = (4\\mathbf{i} + 4\\mathbf{j}) \\text{ ms}^{-1}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): The car moves parallel to \\( \\mathbf{i} \\) when the j-component is zero.',
                    workingLatex: '6 - 2t = 0 \\implies t = 3 \\text{ seconds}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Find the velocity at \\( t = 2 \\).',
                    workingLatex: '\\mathbf{v} = 8\\mathbf{i} + 2\\mathbf{j}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Find the speed.',
                    workingLatex: '|\\mathbf{v}| = \\sqrt{8^2 + 2^2} = \\sqrt{64 + 4} = \\sqrt{68} = 2\\sqrt{17} \\text{ ms}^{-1}',
                    explanation: '',
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
            'A helicopter\'s position is modelled by \\( \\mathbf{r} = (20t)\\mathbf{i} + (t^2 + 10t)\\mathbf{j} \\) m, where \\( \\mathbf{i} \\) is horizontal and \\( \\mathbf{j} \\) is vertical (pointing upwards), and \\( t \\) is in seconds.\n\na) Find the height of the helicopter at \\( t = 5 \\).\n\nb) Find the distance of the helicopter from its starting point at \\( t = 5 \\).\n\nc) At what time is the helicopter 200 m above the ground?',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'time-dependent', 'position', 'height', 'helicopter', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): The height is the j-component. Substitute \\( t = 5 \\).',
                    workingLatex: '\\text{Height} = 5^2 + 10(5) = 25 + 50 = 75 \\text{ m}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Find the full position at \\( t = 5 \\).',
                    workingLatex: '\\mathbf{r} = 100\\mathbf{i} + 75\\mathbf{j}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Find the distance from the origin.',
                    workingLatex: '|\\mathbf{r}| = \\sqrt{100^2 + 75^2} = \\sqrt{10000 + 5625} = \\sqrt{15625} = 125 \\text{ m}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Part (c): Set the j-component equal to 200.',
                    workingLatex: 't^2 + 10t = 200 \\implies t^2 + 10t - 200 = 0',
                    explanation: '',
                },
                {
                    stepNumber: 5,
                    description: 'Solve the quadratic.',
                    workingLatex: 't = \\frac{-10 \\pm \\sqrt{100 + 800}}{2} = \\frac{-10 \\pm \\sqrt{900}}{2} = \\frac{-10 \\pm 30}{2}',
                    explanation: 'Taking the positive root: \\( t = \\frac{-10 + 30}{2} = 10 \\) seconds.',
                },
            ],
            finalAnswer:
                'a) 75 m. b) 125 m. c) \\( t = 10 \\) seconds.',
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
            'An aircraft tries to fly due north at 600 km/h, but there is a wind from the west at 75 km/h. The aircraft\'s actual course is modelled by the resultant of these two vectors. Calculate:\n\na) the actual bearing the plane is flying on, to the nearest degree.\n\nb) the aircraft\'s resultant speed in km/h (to 2 d.p.).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'resultant', 'aircraft', 'wind', 'bearing', 'Pythagoras'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw a diagram. The aircraft velocity is 600 km/h due north. The wind blows from the west, pushing the aircraft east at 75 km/h. These are perpendicular.',
                    workingLatex: '',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Find the angle east of north.',
                    workingLatex: '\\tan\\theta = \\frac{75}{600} = 0.125 \\implies \\theta = \\tan^{-1}(0.125) = 7.1° \\approx 7°',
                    explanation: 'The bearing is 007°.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Find the resultant speed using Pythagoras.',
                    workingLatex: '|\\mathbf{r}| = \\sqrt{600^2 + 75^2} = \\sqrt{360000 + 5625} = \\sqrt{365625} = 604.67 \\text{ km/h (2 d.p.)}',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) Bearing 007°. b) 604.67 km/h.',
        },
    },
    {
        id: 'v3-017',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 17',
        difficulty: 'Foundation',
        questionText:
            'Two tug boats are pulling a ship with an angle of 40° between them. One tug boat exerts a force of 8 kN and is modelled with vector \\( \\mathbf{a} \\). The other exerts a force of 15 kN and is modelled with vector \\( \\mathbf{b} \\). The resultant force on the ship, \\( \\mathbf{r} \\), is the resultant vector of these two forces. Calculate the size of the resultant force.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'resultant', 'cosine rule', 'forces', 'tug boats'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw the vectors end to end. The angle between the vectors is 40°, so the angle inside the triangle opposite \\( \\mathbf{r} \\) is \\( 180° - 40° = 140° \\).',
                    workingLatex: '',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Use the cosine rule to find \\( |\\mathbf{r}| \\).',
                    workingLatex:
                        '|\\mathbf{r}|^2 = 8^2 + 15^2 - 2(8)(15)\\cos 140°',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate.',
                    workingLatex:
                        '|\\mathbf{r}|^2 = 64 + 225 - 240\\cos 140° = 289 - 240(-0.766\\ldots) = 289 + 183.85\\ldots = 472.85\\ldots',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Take the square root.',
                    workingLatex: '|\\mathbf{r}| = \\sqrt{472.85\\ldots} = 21.7 \\text{ kN (3 s.f.)}',
                    explanation: '',
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
            'Two lumberjacks are pulling ropes attached to a tree stump. The angle between the ropes is 100°. One lumberjack exerts a force of 250 N and the other exerts a force of 210 N. The resultant force \\( \\mathbf{f} \\) is modelled by the resultant of these two vectors. Calculate the magnitude of \\( \\mathbf{f} \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'resultant', 'cosine rule', 'forces', 'lumberjacks'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The angle between the two force vectors is 100°. In the vector triangle, the angle opposite the resultant is \\( 180° - 100° = 80° \\).',
                    workingLatex: '',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Apply the cosine rule.',
                    workingLatex: '|\\mathbf{f}|^2 = 250^2 + 210^2 - 2(250)(210)\\cos 80°',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate.',
                    workingLatex:
                        '|\\mathbf{f}|^2 = 62500 + 44100 - 105000\\cos 80° = 106600 - 105000(0.1736\\ldots) = 106600 - 18228\\ldots = 88372\\ldots',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Take the square root.',
                    workingLatex: '|\\mathbf{f}| = \\sqrt{88372\\ldots} = 297 \\text{ N (3 s.f.)}',
                    explanation: '',
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
            'Ray is attempting to paddle his canoe due north at 4 ms\\(^{-1}\\), but there is a current travelling west at 3 ms\\(^{-1}\\). Ray\'s actual course is modelled by the resultant of these two vectors. Calculate:\n\na) the actual bearing Ray is travelling on.\n\nb) Ray\'s resultant speed in ms\\(^{-1}\\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'resultant', 'canoe', 'current', 'bearing', 'Pythagoras'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw a diagram. Ray paddles north (4 ms⁻¹) and the current pushes west (3 ms⁻¹). These are perpendicular.',
                    workingLatex: '',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Find the angle west of north.',
                    workingLatex: '\\tan\\theta = \\frac{3}{4} \\implies \\theta = \\tan^{-1}\\!\\left(\\frac{3}{4}\\right) = 36.9° \\text{ (3 s.f.)}',
                    explanation: 'The bearing is \\( 360° - 36.9° = 323° \\) (to the nearest degree).',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Find the resultant speed.',
                    workingLatex: '|\\mathbf{r}| = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5 \\text{ ms}^{-1}',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) Bearing 323°. b) 5 ms\\(^{-1}\\).',
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
                    description: 'Draw the vector triangle. The angle opposite \\( \\mathbf{R} \\) is \\( 180° - 65° = 115° \\).',
                    workingLatex: '',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Use the cosine rule.',
                    workingLatex:
                        '|\\mathbf{R}|^2 = 180^2 + 120^2 - 2(180)(120)\\cos 115°',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate.',
                    workingLatex:
                        '|\\mathbf{R}|^2 = 32400 + 14400 - 43200\\cos 115° = 46800 - 43200(-0.4226\\ldots) = 46800 + 18256\\ldots = 65056\\ldots',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Take the square root.',
                    workingLatex: '|\\mathbf{R}| = \\sqrt{65056\\ldots} = 255 \\text{ N (3 s.f.)}',
                    explanation: '',
                },
                {
                    stepNumber: 5,
                    description: 'Part (b): Use the sine rule to find the angle \\( \\alpha \\) between \\( \\mathbf{R} \\) and \\( \\mathbf{F}_1 \\).',
                    workingLatex:
                        '\\frac{\\sin\\alpha}{120} = \\frac{\\sin 115°}{255} \\implies \\sin\\alpha = \\frac{120 \\sin 115°}{255} = \\frac{120 \\times 0.9063\\ldots}{255} = 0.4265\\ldots',
                    explanation: '',
                },
                {
                    stepNumber: 6,
                    description: 'Find the angle.',
                    workingLatex: '\\alpha = \\sin^{-1}(0.4265\\ldots) = 25.2° \\text{ (3 s.f.)}',
                    explanation: '',
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
            'A park is modelled as a quadrilateral EFGH, with sides given by the following vectors:\n\\( \\overrightarrow{EF} = 2\\mathbf{i} + 3\\mathbf{j} \\), \\( \\overrightarrow{FG} = \\mathbf{i} - \\frac{1}{2}\\mathbf{j} \\), \\( \\overrightarrow{GH} = -\\mathbf{i} - \\frac{3}{2}\\mathbf{j} \\) and \\( \\overrightarrow{HE} = -2\\mathbf{i} - \\mathbf{j} \\).\n\nShow that the park is a trapezium.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'geometric', 'trapezium', 'parallel', 'park'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'For the park to be a trapezium, exactly one pair of opposite sides must be parallel. Two vectors are parallel if one is a scalar multiple of the other.',
                    workingLatex: '',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Check whether \\( \\overrightarrow{EF} \\) is parallel to \\( \\overrightarrow{HG} \\). Note \\( \\overrightarrow{HG} = -\\overrightarrow{GH} = \\mathbf{i} + \\frac{3}{2}\\mathbf{j} \\).',
                    workingLatex:
                        '\\overrightarrow{EF} = 2\\mathbf{i} + 3\\mathbf{j} = 2\\left(\\mathbf{i} + \\frac{3}{2}\\mathbf{j}\\right) = 2\\,\\overrightarrow{HG}',
                    explanation: '\\( \\overrightarrow{EF} \\) is a scalar multiple of \\( \\overrightarrow{HG} \\), so EF is parallel to GH. ✓',
                },
                {
                    stepNumber: 3,
                    description: 'Check whether \\( \\overrightarrow{FG} \\) is parallel to \\( \\overrightarrow{EH} \\). Note \\( \\overrightarrow{EH} = -\\overrightarrow{HE} = 2\\mathbf{i} + \\mathbf{j} \\).',
                    workingLatex:
                        '\\overrightarrow{FG} = \\mathbf{i} - \\frac{1}{2}\\mathbf{j}, \\quad \\overrightarrow{EH} = 2\\mathbf{i} + \\mathbf{j}',
                    explanation: 'For parallel: \\( \\frac{1}{2} = \\frac{-1/2}{1} = -\\frac{1}{2} \\). Since \\( \\frac{1}{2} \\neq -\\frac{1}{2} \\), these are not parallel. ✗',
                },
                {
                    stepNumber: 4,
                    description: 'Conclusion.',
                    workingLatex: '',
                    explanation: 'Exactly one pair of opposite sides (EF and GH) is parallel, so EFGH is a trapezium. □',
                },
            ],
            finalAnswer: 'EF is parallel to GH (since \\( \\overrightarrow{EF} = 2\\,\\overrightarrow{HG} \\)), but FG is not parallel to EH. Therefore the park is a trapezium. □',
        },
    },
    {
        id: 'v3-022',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 22',
        difficulty: 'Foundation',
        questionText:
            'The quadrilateral ABCD is used to model a garden. The vertices have coordinates A(1, 2), B(9, 1), C(7, 7) and D(2, 8). There is a straight path that crosses the garden. Its start point divides \\( \\overrightarrow{AB} \\) in the ratio 3:1, and it ends at the midpoint of \\( \\overrightarrow{CD} \\).\n\nThe path is modelled by vector \\( \\mathbf{p} = \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\). Calculate \\( x \\) and \\( y \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'geometric', 'garden', 'path', 'ratio', 'midpoint'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the start point. It divides AB in the ratio 3:1, so it is \\( \\frac{3}{4} \\) of the way from A to B.',
                    workingLatex:
                        '\\text{Start} = \\text{A} + \\frac{3}{4}\\overrightarrow{AB} = \\begin{pmatrix}1\\\\2\\end{pmatrix} + \\frac{3}{4}\\begin{pmatrix}8\\\\-1\\end{pmatrix} = \\begin{pmatrix}1\\\\2\\end{pmatrix} + \\begin{pmatrix}6\\\\-0.75\\end{pmatrix} = \\begin{pmatrix}7\\\\1.25\\end{pmatrix}',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Find the end point — the midpoint of CD.',
                    workingLatex:
                        '\\text{End} = \\frac{1}{2}(\\text{C} + \\text{D}) = \\frac{1}{2}\\left(\\begin{pmatrix}7\\\\7\\end{pmatrix} + \\begin{pmatrix}2\\\\8\\end{pmatrix}\\right) = \\frac{1}{2}\\begin{pmatrix}9\\\\15\\end{pmatrix} = \\begin{pmatrix}4.5\\\\7.5\\end{pmatrix}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Find the path vector.',
                    workingLatex:
                        '\\mathbf{p} = \\text{End} - \\text{Start} = \\begin{pmatrix}4.5\\\\7.5\\end{pmatrix} - \\begin{pmatrix}7\\\\1.25\\end{pmatrix} = \\begin{pmatrix}-2.5\\\\6.25\\end{pmatrix}',
                    explanation: '',
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
            'The position vectors of the vertices of the parallelogram PQRS are:\n\\( \\overrightarrow{OP} = 2\\mathbf{i} + 3\\mathbf{j} \\), \\( \\overrightarrow{OQ} = 7\\mathbf{i} + 4\\mathbf{j} \\), \\( \\overrightarrow{OR} = 6\\mathbf{i} + \\mathbf{j} \\) and \\( \\overrightarrow{OS} = \\mathbf{i} + 5\\mathbf{j} \\).\n\nNote: \\( O \\) is the origin, not a vertex of the parallelogram. \\( \\overrightarrow{PQ} \\) and \\( \\overrightarrow{SR} \\) are opposite sides.\n\nWhat are the exact lengths of this parallelogram\'s diagonals?',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'geometric', 'parallelogram', 'diagonals', 'magnitude'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The diagonals of PQRS are PR and QS. Find \\( \\overrightarrow{PR} \\).',
                    workingLatex:
                        '\\overrightarrow{PR} = \\overrightarrow{OR} - \\overrightarrow{OP} = (6\\mathbf{i} + \\mathbf{j}) - (2\\mathbf{i} + 3\\mathbf{j}) = 4\\mathbf{i} - 2\\mathbf{j}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Find the length of PR.',
                    workingLatex:
                        '|\\overrightarrow{PR}| = \\sqrt{4^2 + (-2)^2} = \\sqrt{16 + 4} = \\sqrt{20} = 2\\sqrt{5}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( \\overrightarrow{QS} \\).',
                    workingLatex:
                        '\\overrightarrow{QS} = \\overrightarrow{OS} - \\overrightarrow{OQ} = (\\mathbf{i} + 5\\mathbf{j}) - (7\\mathbf{i} + 4\\mathbf{j}) = -6\\mathbf{i} + \\mathbf{j}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Find the length of QS.',
                    workingLatex:
                        '|\\overrightarrow{QS}| = \\sqrt{(-6)^2 + 1^2} = \\sqrt{36 + 1} = \\sqrt{37}',
                    explanation: '',
                },
            ],
            finalAnswer: 'The diagonals have lengths \\( 2\\sqrt{5} \\) and \\( \\sqrt{37} \\).',
        },
    },
    {
        id: 'v3-024',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 24',
        difficulty: 'Foundation',
        questionText:
            'The routes from Appleton to Bridgford (\\( \\overrightarrow{AB} \\)) and to Crofton (\\( \\overrightarrow{AC} \\)) are modelled by the vectors \\( \\mathbf{p} \\) and \\( \\mathbf{q} \\) respectively. Xena\'s house lies between Bridgford and Crofton such that her position, X, divides BC in the ratio 3:4.\n\nFind the vector \\( \\overrightarrow{AX} \\) in terms of \\( \\mathbf{p} \\) and \\( \\mathbf{q} \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'geometric', 'routes', 'ratio', 'towns'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( \\overrightarrow{AX} = \\overrightarrow{AB} + \\overrightarrow{BX} \\). We know \\( \\overrightarrow{AB} = \\mathbf{p} \\), so we need \\( \\overrightarrow{BX} \\).',
                    workingLatex: '\\overrightarrow{AX} = \\overrightarrow{AB} + \\overrightarrow{BX}',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'X divides BC in the ratio 3:4, so \\( \\overrightarrow{BX} = \\frac{3}{7}\\overrightarrow{BC} \\).',
                    workingLatex: '\\overrightarrow{BX} = \\frac{3}{7}\\overrightarrow{BC}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( \\overrightarrow{BC} \\) in terms of \\( \\mathbf{p} \\) and \\( \\mathbf{q} \\).',
                    workingLatex:
                        '\\overrightarrow{BC} = \\overrightarrow{BA} + \\overrightarrow{AC} = -\\overrightarrow{AB} + \\overrightarrow{AC} = -\\mathbf{p} + \\mathbf{q}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Substitute back.',
                    workingLatex:
                        '\\overrightarrow{AX} = \\mathbf{p} + \\frac{3}{7}(-\\mathbf{p} + \\mathbf{q}) = \\mathbf{p} - \\frac{3}{7}\\mathbf{p} + \\frac{3}{7}\\mathbf{q} = \\frac{4}{7}\\mathbf{p} + \\frac{3}{7}\\mathbf{q}',
                    explanation: '',
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
            'In the diagram below, W divides QR in the ratio \\( a:b \\).\n\nGiven that \\( \\overrightarrow{PW} = \\frac{3}{5}\\mathbf{s} + \\frac{2}{5}\\mathbf{t} \\), where \\( \\overrightarrow{PQ} = \\mathbf{s} \\) and \\( \\overrightarrow{PR} = \\mathbf{t} \\), find \\( a \\) and \\( b \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'geometric', 'ratio', 'division'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Express \\( \\overrightarrow{PW} \\) using the route P → Q → W.',
                    workingLatex:
                        '\\overrightarrow{PW} = \\overrightarrow{PQ} + \\overrightarrow{QW}',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'W divides QR in the ratio \\( a:b \\), so \\( \\overrightarrow{QW} = \\frac{a}{a+b}\\overrightarrow{QR} \\).',
                    workingLatex:
                        '\\overrightarrow{QR} = \\overrightarrow{QP} + \\overrightarrow{PR} = -\\mathbf{s} + \\mathbf{t}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Substitute into the expression for \\( \\overrightarrow{PW} \\).',
                    workingLatex:
                        '\\overrightarrow{PW} = \\mathbf{s} + \\frac{a}{a+b}(-\\mathbf{s} + \\mathbf{t}) = \\left(1 - \\frac{a}{a+b}\\right)\\mathbf{s} + \\frac{a}{a+b}\\mathbf{t} = \\frac{b}{a+b}\\mathbf{s} + \\frac{a}{a+b}\\mathbf{t}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Compare coefficients with \\( \\frac{3}{5}\\mathbf{s} + \\frac{2}{5}\\mathbf{t} \\).',
                    workingLatex:
                        '\\frac{b}{a+b} = \\frac{3}{5} \\quad \\text{and} \\quad \\frac{a}{a+b} = \\frac{2}{5}',
                    explanation: 'From the second equation: \\( a + b = 5k \\) and \\( a = 2k \\), so \\( b = 3k \\). Hence \\( a:b = 2:3 \\).',
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
            'A swimmer is attempting to swim due east across a river at 2 ms\\(^{-1}\\). The river current flows due south at 1.5 ms\\(^{-1}\\). The swimmer\'s actual motion is modelled by the resultant of these two vectors.\n\na) Find the swimmer\'s resultant speed.\n\nb) Find the bearing on which the swimmer actually travels, to the nearest degree.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'resultant', 'swimmer', 'current', 'bearing', 'Pythagoras'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw a diagram. The swimmer goes east (2 ms⁻¹) and the current pushes south (1.5 ms⁻¹). These are perpendicular.',
                    workingLatex: '',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Find the resultant speed.',
                    workingLatex: '|\\mathbf{r}| = \\sqrt{2^2 + 1.5^2} = \\sqrt{4 + 2.25} = \\sqrt{6.25} = 2.5 \\text{ ms}^{-1}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Find the bearing. The angle south of east:',
                    workingLatex: '\\tan\\theta = \\frac{1.5}{2} \\implies \\theta = \\tan^{-1}(0.75) = 36.9°',
                    explanation: 'The direction is 36.9° south of east. The bearing is \\( 090° + 36.9° = 127° \\) (to the nearest degree).',
                },
            ],
            finalAnswer: 'a) 2.5 ms\\(^{-1}\\). b) Bearing 127°.',
        },
    },
    {
        id: 'v3-027',
        topicRef: 'v3',
        topicTitle: 'Modelling with Vectors 27',
        difficulty: 'Foundation',
        questionText:
            'A field is modelled as a parallelogram ABCD, where \\( \\overrightarrow{AB} = 5\\mathbf{i} + 2\\mathbf{j} \\) and \\( \\overrightarrow{AD} = \\mathbf{i} + 4\\mathbf{j} \\). All units are in metres.\n\na) Find \\( \\overrightarrow{AC} \\).\n\nb) Find the exact length of the diagonal AC.\n\nc) Find the exact length of the diagonal BD.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'geometric', 'parallelogram', 'field', 'diagonals'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): In a parallelogram, \\( \\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{BC} \\). Since ABCD is a parallelogram, \\( \\overrightarrow{BC} = \\overrightarrow{AD} \\).',
                    workingLatex:
                        '\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{AD} = (5\\mathbf{i} + 2\\mathbf{j}) + (\\mathbf{i} + 4\\mathbf{j}) = 6\\mathbf{i} + 6\\mathbf{j}',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Find the length of AC.',
                    workingLatex:
                        '|\\overrightarrow{AC}| = \\sqrt{6^2 + 6^2} = \\sqrt{72} = 6\\sqrt{2} \\text{ m}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Find \\( \\overrightarrow{BD} \\).',
                    workingLatex:
                        '\\overrightarrow{BD} = \\overrightarrow{BA} + \\overrightarrow{AD} = -(5\\mathbf{i} + 2\\mathbf{j}) + (\\mathbf{i} + 4\\mathbf{j}) = -4\\mathbf{i} + 2\\mathbf{j}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Find the length of BD.',
                    workingLatex:
                        '|\\overrightarrow{BD}| = \\sqrt{(-4)^2 + 2^2} = \\sqrt{16 + 4} = \\sqrt{20} = 2\\sqrt{5} \\text{ m}',
                    explanation: '',
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
            'A kayaker tries to paddle due east at 5 ms\\(^{-1}\\) across a river. The current flows at 2 ms\\(^{-1}\\) on a bearing of 200°. The kayaker\'s actual velocity is modelled by the resultant of these two vectors. Find:\n\na) the resultant speed of the kayaker (to 2 d.p.).\n\nb) the bearing on which the kayaker actually travels (to the nearest degree).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'resultant', 'kayaker', 'current', 'bearing', 'components'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Express both velocities as column vectors (east = x, north = y). Kayaker: \\( \\begin{pmatrix} 5 \\\\ 0 \\end{pmatrix} \\). Current on bearing 200°:',
                    workingLatex:
                        '\\text{Current} = \\begin{pmatrix} 2\\sin 200° \\\\ 2\\cos 200° \\end{pmatrix} = \\begin{pmatrix} -0.684 \\\\ -1.879 \\end{pmatrix} \\text{ (3 d.p.)}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Find the resultant.',
                    workingLatex:
                        '\\mathbf{r} = \\begin{pmatrix} 5 + (-0.684) \\\\ 0 + (-1.879) \\end{pmatrix} = \\begin{pmatrix} 4.316 \\\\ -1.879 \\end{pmatrix}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (a): Find the resultant speed.',
                    workingLatex:
                        '|\\mathbf{r}| = \\sqrt{4.316^2 + (-1.879)^2} = \\sqrt{18.63 + 3.53} = \\sqrt{22.16} = 4.71 \\text{ ms}^{-1} \\text{ (2 d.p.)}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): The resultant is east and south. Angle south of east:',
                    workingLatex:
                        '\\theta = \\tan^{-1}\\!\\left(\\frac{1.879}{4.316}\\right) = 23.5°',
                    explanation: 'Bearing = \\( 090° + 23.5° = 114° \\) (to the nearest degree).',
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
            'A particle\'s displacement from the origin at time \\( t \\) seconds is modelled by \\( \\mathbf{s} = (t^2 - 4t)\\mathbf{i} + (2t + 1)\\mathbf{j} \\) m.\n\na) Find the displacement at \\( t = 0 \\).\n\nb) At what time does the particle cross the j-axis (i.e. when is the i-component zero)?\n\nc) Find the exact distance of the particle from the origin at \\( t = 5 \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'modelling', 'time-dependent', 'displacement', 'particle', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Substitute \\( t = 0 \\).',
                    workingLatex:
                        '\\mathbf{s} = (0 - 0)\\mathbf{i} + (0 + 1)\\mathbf{j} = \\mathbf{j} \\text{ m}',
                    explanation: 'The particle starts at position \\( (0, 1) \\).',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Set the i-component to zero.',
                    workingLatex:
                        't^2 - 4t = 0 \\implies t(t - 4) = 0 \\implies t = 0 \\text{ or } t = 4',
                    explanation: 'The particle crosses the j-axis at \\( t = 0 \\) and \\( t = 4 \\) seconds.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Find the position at \\( t = 5 \\).',
                    workingLatex:
                        '\\mathbf{s} = (25 - 20)\\mathbf{i} + (10 + 1)\\mathbf{j} = 5\\mathbf{i} + 11\\mathbf{j}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Find the distance from the origin.',
                    workingLatex:
                        '|\\mathbf{s}| = \\sqrt{5^2 + 11^2} = \\sqrt{25 + 121} = \\sqrt{146} \\text{ m}',
                    explanation: '',
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
                    description: 'Part (a): For equilibrium, the resultant force must be zero: \\( \\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{F}_3 = \\mathbf{0} \\).',
                    workingLatex:
                        '(4 + (-2) + a)\\mathbf{i} + (3 + 5 + b)\\mathbf{j} = \\mathbf{0}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Equate components to zero.',
                    workingLatex:
                        '\\text{i: } 2 + a = 0 \\implies a = -2 \\qquad \\text{j: } 8 + b = 0 \\implies b = -8',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Find the magnitude of \\( \\mathbf{F}_3 = (-2\\mathbf{i} - 8\\mathbf{j}) \\) N.',
                    workingLatex:
                        '|\\mathbf{F}_3| = \\sqrt{(-2)^2 + (-8)^2} = \\sqrt{4 + 64} = \\sqrt{68} = 2\\sqrt{17} \\text{ N}',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) \\( a = -2 \\), \\( b = -8 \\). b) \\( |\\mathbf{F}_3| = 2\\sqrt{17} \\) N.',
        },
    },
];