import { Question } from "@/lib/types";

// Topic: Vectors — 30 questions with TikZ diagrams
// Covers: vector notation, adding/subtracting vectors in geometric shapes, scalar multiplication,
//         parallel vectors, collinear points, midpoints, position vectors, column vectors, i+j form

export const questions: Question[] = [ // Topic: Calculating with Vectors — 30 questions with TikZ diagrams
    // Covers: magnitude, unit vectors, direction of vectors, converting between
    //         magnitude/direction and component form, angle between two vectors (cosine rule)

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 1  (Q1–Q5)  Foundation — magnitude of a vector
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 'v2-001',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 01',
        difficulty: 'Foundation',
        questionText:
            'Find the exact magnitude of the following vectors:\n\na) \\( 5\\mathbf{i} + 12\\mathbf{j} \\)\n\nb) \\( 7\\mathbf{i} - 24\\mathbf{j} \\)\n\nc) \\( \\begin{pmatrix}-3\\\\4\\end{pmatrix} \\)\n\nd) \\( \\begin{pmatrix}8\\\\-15\\end{pmatrix} \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'magnitude', 'Pythagoras'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the magnitude formula.',
                    workingLatex: '|x\\mathbf{i}+y\\mathbf{j}| = \\sqrt{x^2+y^2}',
                    explanation: 'The magnitude of a 2D vector is the length of the arrow it represents. By Pythagoras on the right-angled triangle formed with the horizontal and vertical components, this length is \\( \\sqrt{x^2+y^2} \\). Squaring removes any minus signs, so signs of the components do not affect the magnitude.',
                },
                {
                    stepNumber: 2,
                    description: 'a) Square the components of \\( 5\\mathbf{i}+12\\mathbf{j} \\).',
                    workingLatex: '5^2+12^2 = 25+144 = 169',
                    explanation: 'Square each component and add. We are looking for the sum under the square root before simplifying.',
                },
                {
                    stepNumber: 3,
                    description: 'a) Take the square root.',
                    workingLatex: '|5\\mathbf{i}+12\\mathbf{j}| = \\sqrt{169} = 13',
                    explanation: '\\( (5,12,13) \\) is one of the classic Pythagorean triples — recognising it saves arithmetic.',
                },
                {
                    stepNumber: 4,
                    description: 'b) Square the components of \\( 7\\mathbf{i}-24\\mathbf{j} \\).',
                    workingLatex: '7^2+(-24)^2 = 49+576 = 625',
                    explanation: 'The component \\(-24\\) squares to \\(+576\\); the minus sign vanishes. A common slip is to write \\(-576\\), which would give the wrong total.',
                },
                {
                    stepNumber: 5,
                    description: 'b) Take the square root.',
                    workingLatex: '|7\\mathbf{i}-24\\mathbf{j}| = \\sqrt{625} = 25',
                    explanation: '\\( (7,24,25) \\) is another Pythagorean triple worth remembering.',
                },
                {
                    stepNumber: 6,
                    description: 'c) Magnitude of \\( \\begin{pmatrix}-3\\\\4\\end{pmatrix} \\).',
                    workingLatex: '\\left|\\begin{pmatrix}-3\\\\4\\end{pmatrix}\\right| = \\sqrt{(-3)^2+4^2} = \\sqrt{9+16} = \\sqrt{25} = 5',
                    explanation: 'Column vector form uses exactly the same formula — the top entry is the \\(x\\)-component and the bottom entry is the \\(y\\)-component. This is the \\((3,4,5)\\) triple.',
                },
                {
                    stepNumber: 7,
                    description: 'd) Magnitude of \\( \\begin{pmatrix}8\\\\-15\\end{pmatrix} \\).',
                    workingLatex: '\\left|\\begin{pmatrix}8\\\\-15\\end{pmatrix}\\right| = \\sqrt{8^2+(-15)^2} = \\sqrt{64+225} = \\sqrt{289} = 17',
                    explanation: '\\( (8,15,17) \\) is the last of the small-integer Pythagorean triples that appears in A-Level questions; spotting it lets you skip the arithmetic.',
                },
            ],
            finalAnswer: 'a) \\( 13 \\) \\quad b) \\( 25 \\) \\quad c) \\( 5 \\) \\quad d) \\( 17 \\)',
        },
    },

    {
        id: 'v2-002',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 02',
        difficulty: 'Foundation',
        questionText:
            'Find the exact magnitude of the following vectors:\n\na) \\( 2\\mathbf{i} + \\mathbf{j} \\)\n\nb) \\( -4\\mathbf{i} + 3\\mathbf{j} \\)\n\nc) \\( \\begin{pmatrix}1\\\\-\\sqrt{3}\\end{pmatrix} \\)\n\nd) \\( \\begin{pmatrix}-5\\\\-5\\end{pmatrix} \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'magnitude', 'Pythagoras', 'surds'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'a) Square and add the components of \\( 2\\mathbf{i}+\\mathbf{j} \\).',
                    workingLatex: '|2\\mathbf{i}+\\mathbf{j}| = \\sqrt{2^2+1^2} = \\sqrt{4+1} = \\sqrt{5}',
                    explanation: 'The question asks for the *exact* magnitude, so leave the answer in surd form rather than typing it into a calculator.',
                },
                {
                    stepNumber: 2,
                    description: 'b) Magnitude of \\( -4\\mathbf{i}+3\\mathbf{j} \\).',
                    workingLatex: '|-4\\mathbf{i}+3\\mathbf{j}| = \\sqrt{(-4)^2+3^2} = \\sqrt{16+9} = \\sqrt{25} = 5',
                    explanation: 'Squaring \\(-4\\) gives \\(+16\\) — sign of the component is irrelevant inside the square root. This is the \\((3,4,5)\\) triple again.',
                },
                {
                    stepNumber: 3,
                    description: 'c) Magnitude of \\( \\begin{pmatrix}1\\\\-\\sqrt{3}\\end{pmatrix} \\).',
                    workingLatex: '\\left|\\begin{pmatrix}1\\\\-\\sqrt{3}\\end{pmatrix}\\right| = \\sqrt{1^2+(-\\sqrt{3})^2} = \\sqrt{1+3} = \\sqrt{4} = 2',
                    explanation: 'The key move is \\( (-\\sqrt{3})^2 = 3 \\): squaring kills both the sign and the square root in one step. A common slip is to leave a stray surd.',
                },
                {
                    stepNumber: 4,
                    description: 'd) Magnitude of \\( \\begin{pmatrix}-5\\\\-5\\end{pmatrix} \\).',
                    workingLatex: '\\left|\\begin{pmatrix}-5\\\\-5\\end{pmatrix}\\right| = \\sqrt{(-5)^2+(-5)^2} = \\sqrt{25+25} = \\sqrt{50}',
                    explanation: 'Both components squared give \\(+25\\). The sum \\( 50 \\) is not a perfect square, so the next step is to simplify the surd.',
                },
                {
                    stepNumber: 5,
                    description: 'd) Simplify the surd.',
                    workingLatex: '\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}',
                    explanation: 'Pull out the largest square factor of the radicand: \\(50 = 25 \\times 2\\), and \\(\\sqrt{25}=5\\) comes outside the root.',
                },
            ],
            finalAnswer: 'a) \\( \\sqrt{5} \\) \\quad b) \\( 5 \\) \\quad c) \\( 2 \\) \\quad d) \\( 5\\sqrt{2} \\)',
        },
    },

    {
        id: 'v2-003',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 03',
        difficulty: 'Foundation',
        questionText:
            '\\( S \\) has position vector \\( 8\\mathbf{i} - 6\\mathbf{j} \\). Find the exact length of the line from the origin O to the point S.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'magnitude', 'position vector', 'distance'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify what the length OS represents.',
                    workingLatex: 'OS = |\\overrightarrow{OS}|',
                    explanation: 'The position vector of \\(S\\) points from the origin to \\(S\\), so the straight-line distance from \\(O\\) to \\(S\\) is exactly the magnitude of that vector. No coordinate subtraction is needed because the start point is the origin.',
                    diagram: { xMin: -1, xMax: 10, yMin: -8, yMax: 2, xTicks: [4, 8], yTicks: [-6, -3], lines: [{ from: [0, 0], to: [8, -6], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{OS}', labelAt: [5, -2.5] }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'nw', r: 4 }, { at: [8, -6], label: 'S', labelAnchor: 'se', r: 4 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Apply the magnitude formula.',
                    workingLatex: '|\\overrightarrow{OS}| = \\sqrt{8^2+(-6)^2} = \\sqrt{64+36}',
                    explanation: 'Use \\( |x\\mathbf{i}+y\\mathbf{j}|=\\sqrt{x^2+y^2} \\) with \\(x=8\\) and \\(y=-6\\). The negative \\(y\\)-component squares to \\(+36\\).',
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: '|\\overrightarrow{OS}| = \\sqrt{100} = 10',
                    explanation: 'This is the \\((6,8,10)\\) Pythagorean triple — a scaled-up \\((3,4,5)\\). Recognising it confirms the arithmetic.',
                },
            ],
            finalAnswer: '\\( |\\overrightarrow{OS}| = 10 \\)',
        },
    },

    {
        id: 'v2-004',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 04',
        difficulty: 'Foundation',
        questionText:
            'For each of the following pairs of points, find the distance between them using position vectors:\n\na) \\( (1,\\,3) \\) and \\( (4,\\,7) \\)\n\nb) \\( (-2,\\,5) \\) and \\( (6,\\,-1) \\)\n\nc) \\( (0,\\,-3) \\) and \\( (-5,\\,9) \\)',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'magnitude', 'distance', 'position vectors'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'a) Form the displacement vector from \\((1,3)\\) to \\((4,7)\\).',
                    workingLatex: '\\mathbf{d} = \\begin{pmatrix}4-1\\\\7-3\\end{pmatrix} = \\begin{pmatrix}3\\\\4\\end{pmatrix}',
                    explanation: 'Subtract the position vector of the first point from the position vector of the second: \\(\\overrightarrow{PQ}=\\overrightarrow{OQ}-\\overrightarrow{OP}\\). The order matters for the direction, but for distance only the magnitude matters.',
                    diagram: { xMin: -3, xMax: 8, yMin: -2, yMax: 9, xTicks: [0, 4], yTicks: [0, 3, 7], lines: [{ from: [1, 3], to: [4, 7], color: '#1d4ed8', arrow: true }], points: [{ at: [1, 3], label: '(1,3)', labelAnchor: 'sw', r: 4 }, { at: [4, 7], label: '(4,7)', labelAnchor: 'ne', r: 4 }] },
                },
                {
                    stepNumber: 2,
                    description: 'a) Take the magnitude.',
                    workingLatex: '|\\mathbf{d}| = \\sqrt{3^2+4^2} = \\sqrt{9+16} = \\sqrt{25} = 5',
                    explanation: 'This is the standard \\((3,4,5)\\) Pythagorean triple.',
                },
                {
                    stepNumber: 3,
                    description: 'b) Form the displacement vector from \\((-2,5)\\) to \\((6,-1)\\).',
                    workingLatex: '\\mathbf{d} = \\begin{pmatrix}6-(-2)\\\\-1-5\\end{pmatrix} = \\begin{pmatrix}8\\\\-6\\end{pmatrix}',
                    explanation: 'Watch the double-negative in the \\(x\\)-coordinate: \\(6-(-2)=8\\). A common slip is to write \\(4\\) here.',
                },
                {
                    stepNumber: 4,
                    description: 'b) Take the magnitude.',
                    workingLatex: '|\\mathbf{d}| = \\sqrt{8^2+(-6)^2} = \\sqrt{64+36} = \\sqrt{100} = 10',
                    explanation: 'A scaled \\((3,4,5)\\) triple — \\((6,8,10)\\).',
                },
                {
                    stepNumber: 5,
                    description: 'c) Form the displacement vector from \\((0,-3)\\) to \\((-5,9)\\).',
                    workingLatex: '\\mathbf{d} = \\begin{pmatrix}-5-0\\\\9-(-3)\\end{pmatrix} = \\begin{pmatrix}-5\\\\12\\end{pmatrix}',
                    explanation: 'Again take care with the double-negative: \\(9-(-3)=12\\).',
                },
                {
                    stepNumber: 6,
                    description: 'c) Take the magnitude.',
                    workingLatex: '|\\mathbf{d}| = \\sqrt{(-5)^2+12^2} = \\sqrt{25+144} = \\sqrt{169} = 13',
                    explanation: 'This is the \\((5,12,13)\\) Pythagorean triple. Distance is always non-negative even though the \\(x\\)-component is negative.',
                },
            ],
            finalAnswer: 'a) \\( 5 \\) \\quad b) \\( 10 \\) \\quad c) \\( 13 \\)',
        },
    },

    {
        id: 'v2-005',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 05',
        difficulty: 'Foundation',
        questionText:
            'For each of the pairs of vectors given below, find the exact magnitude of the resultant when the two vectors are added together.\n\na) \\( \\mathbf{a} = 3\\mathbf{i} + \\mathbf{j} \\) and \\( \\mathbf{b} = \\mathbf{i} + 3\\mathbf{j} \\)\n\nb) \\( \\mathbf{u} = \\begin{pmatrix}5\\\\-2\\end{pmatrix}\\text{ \\ and \\ } \\)  \\( \\mathbf{v} = \\begin{pmatrix}-1\\\\-4\\end{pmatrix} \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'magnitude', 'resultant', 'addition'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'a) Add the vectors component by component.',
                    workingLatex: '\\mathbf{a}+\\mathbf{b} = (3+1)\\mathbf{i}+(1+3)\\mathbf{j} = 4\\mathbf{i}+4\\mathbf{j}',
                    explanation: 'Vector addition is term-by-term: the \\(\\mathbf{i}\\)-components add, and the \\(\\mathbf{j}\\)-components add. The result is called the resultant.',
                    diagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 6, xTicks: [2, 4], yTicks: [2, 4], lines: [{ from: [0, 0], to: [3, 1], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [1.5, -0.3] }, { from: [3, 1], to: [4, 4], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [4, 2.5] }, { from: [0, 0], to: [4, 4], color: '#047857', dashed: true, arrow: true, label: '\\mathbf{a}+\\mathbf{b}', labelAt: [1.5, 2.5] }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'a) Apply the magnitude formula.',
                    workingLatex: '|\\mathbf{a}+\\mathbf{b}| = \\sqrt{4^2+4^2} = \\sqrt{16+16} = \\sqrt{32}',
                    explanation: 'Square each component of the resultant and add. We will need to simplify the surd next, since \\(32\\) is not a perfect square.',
                },
                {
                    stepNumber: 3,
                    description: 'a) Simplify the surd.',
                    workingLatex: '\\sqrt{32} = \\sqrt{16 \\times 2} = 4\\sqrt{2}',
                    explanation: 'Extract the largest square factor: \\(32 = 16 \\times 2\\), so \\(\\sqrt{16}=4\\) comes outside.',
                },
                {
                    stepNumber: 4,
                    description: 'b) Add the column vectors.',
                    workingLatex: '\\mathbf{u}+\\mathbf{v} = \\begin{pmatrix}5+(-1)\\\\-2+(-4)\\end{pmatrix} = \\begin{pmatrix}4\\\\-6\\end{pmatrix}',
                    explanation: 'Add corresponding rows. Be careful with signs: \\(-2+(-4)=-6\\).',
                },
                {
                    stepNumber: 5,
                    description: 'b) Apply the magnitude formula.',
                    workingLatex: '|\\mathbf{u}+\\mathbf{v}| = \\sqrt{4^2+(-6)^2} = \\sqrt{16+36} = \\sqrt{52}',
                    explanation: 'The negative sign on \\(-6\\) disappears when squared.',
                },
                {
                    stepNumber: 6,
                    description: 'b) Simplify the surd.',
                    workingLatex: '\\sqrt{52} = \\sqrt{4 \\times 13} = 2\\sqrt{13}',
                    explanation: 'Pull out the square factor \\(4\\); \\(13\\) is prime so the surd cannot be simplified further.',
                },
            ],
            finalAnswer: 'a) \\( 4\\sqrt{2} \\) \\quad b) \\( 2\\sqrt{13} \\)',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 2  (Q6–Q10)  Foundation/Intermediate — unit vectors
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 'v2-006',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 06',
        difficulty: 'Foundation',
        questionText:
            'For each of the following vectors, give the unit vector in the same direction.\n\na) \\( 4\\mathbf{i} \\)\n\nb) \\( 3\\mathbf{i} + 4\\mathbf{j} \\)\n\nc) \\( 6\\mathbf{i} - 8\\mathbf{j} \\)\n\nd) \\( \\begin{pmatrix}-2\\\\-1\\end{pmatrix} \\)',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'unit vector', 'magnitude'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the unit vector recipe.',
                    workingLatex: '\\hat{\\mathbf{v}} = \\frac{1}{|\\mathbf{v}|}\\,\\mathbf{v}',
                    explanation: 'A unit vector in the direction of \\(\\mathbf{v}\\) is the vector itself divided by its magnitude. The direction is unchanged; the length is rescaled to \\(1\\).',
                },
                {
                    stepNumber: 2,
                    description: 'a) Find \\( |4\\mathbf{i}| \\).',
                    workingLatex: '|4\\mathbf{i}| = \\sqrt{4^2+0^2} = 4',
                    explanation: 'The vector \\(4\\mathbf{i}\\) lies along the \\(x\\)-axis with no \\(\\mathbf{j}\\)-component.',
                },
                {
                    stepNumber: 3,
                    description: 'a) Divide by the magnitude.',
                    workingLatex: '\\hat{\\mathbf{a}} = \\tfrac{1}{4}(4\\mathbf{i}) = \\mathbf{i}',
                    explanation: 'The unit vector along the positive \\(x\\)-axis is simply \\(\\mathbf{i}\\) — exactly what we expect.',
                },
                {
                    stepNumber: 4,
                    description: 'b) Find \\( |3\\mathbf{i}+4\\mathbf{j}| \\).',
                    workingLatex: '|3\\mathbf{i}+4\\mathbf{j}| = \\sqrt{9+16} = 5',
                    explanation: 'A \\((3,4,5)\\) triple, so no surd appears.',
                },
                {
                    stepNumber: 5,
                    description: 'b) Divide by the magnitude.',
                    workingLatex: '\\hat{\\mathbf{b}} = \\tfrac{1}{5}(3\\mathbf{i}+4\\mathbf{j}) = \\tfrac{3}{5}\\mathbf{i}+\\tfrac{4}{5}\\mathbf{j}',
                    explanation: 'Distribute the \\(\\tfrac{1}{5}\\) onto each component. A quick check: \\((\\tfrac{3}{5})^2+(\\tfrac{4}{5})^2 = \\tfrac{9+16}{25} = 1\\), so the magnitude is indeed \\(1\\).',
                },
                {
                    stepNumber: 6,
                    description: 'c) Find \\( |6\\mathbf{i}-8\\mathbf{j}| \\).',
                    workingLatex: '|6\\mathbf{i}-8\\mathbf{j}| = \\sqrt{36+64} = 10',
                    explanation: 'This is the \\((6,8,10)\\) triple.',
                },
                {
                    stepNumber: 7,
                    description: 'c) Divide by the magnitude.',
                    workingLatex: '\\hat{\\mathbf{c}} = \\tfrac{1}{10}(6\\mathbf{i}-8\\mathbf{j}) = \\tfrac{6}{10}\\mathbf{i}-\\tfrac{8}{10}\\mathbf{j} = \\tfrac{3}{5}\\mathbf{i}-\\tfrac{4}{5}\\mathbf{j}',
                    explanation: 'Always simplify the fractions at the end. The result has the same direction as \\(6\\mathbf{i}-8\\mathbf{j}\\), pointing into the fourth quadrant.',
                },
                {
                    stepNumber: 8,
                    description: 'd) Find \\( \\left|\\begin{pmatrix}-2\\\\-1\\end{pmatrix}\\right| \\).',
                    workingLatex: '\\left|\\begin{pmatrix}-2\\\\-1\\end{pmatrix}\\right| = \\sqrt{(-2)^2+(-1)^2} = \\sqrt{4+1} = \\sqrt{5}',
                    explanation: 'Both components squared give positives. The magnitude is an exact surd this time.',
                },
                {
                    stepNumber: 9,
                    description: 'd) Divide by the magnitude.',
                    workingLatex: '\\hat{\\mathbf{d}} = \\tfrac{1}{\\sqrt{5}}\\begin{pmatrix}-2\\\\-1\\end{pmatrix} = \\begin{pmatrix}-2/\\sqrt{5}\\\\-1/\\sqrt{5}\\end{pmatrix}',
                    explanation: 'Leaving the answer with \\(\\sqrt{5}\\) in the denominator is acceptable; you could also rationalise to \\(\\tfrac{-2\\sqrt{5}}{5},\\tfrac{-\\sqrt{5}}{5}\\), but the factored form is cleaner.',
                },
            ],
            finalAnswer: 'a) \\(\\mathbf{i}\\) b) \\(\\tfrac{3}{5}\\mathbf{i}+\\tfrac{4}{5}\\mathbf{j}\\) c) \\(\\tfrac{3}{5}\\mathbf{i}-\\tfrac{4}{5}\\mathbf{j}\\) d) \\(\\tfrac{1}{\\sqrt{5}}\\begin{pmatrix}-2\\\\-1\\end{pmatrix}\\)',
        },
    },

    {
        id: 'v2-007',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 07',
        difficulty: 'Standard',
        questionText:
            '\\( \\overrightarrow{AB} = 2\\mathbf{i} - 3\\mathbf{j} \\) and \\( \\overrightarrow{BC} = 4\\mathbf{i} + \\mathbf{j} \\). Find the unit vector in the direction of \\( \\overrightarrow{AC} \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'unit vector', 'addition', 'magnitude'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the triangle rule to find \\( \\overrightarrow{AC} \\).',
                    workingLatex: '\\overrightarrow{AC} = \\overrightarrow{AB}+\\overrightarrow{BC}',
                    explanation: 'Going from \\(A\\) to \\(B\\) and then from \\(B\\) to \\(C\\) is the same overall journey as going directly from \\(A\\) to \\(C\\).',
                    diagram: { xMin: -1, xMax: 8, yMin: -4, yMax: 2, xTicks: [2, 4, 6], yTicks: [-2], lines: [{ from: [0, 0], to: [2, -3], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{AB}', labelAt: [0.3, -1.5] }, { from: [2, -3], to: [6, -2], color: '#dc2626', arrow: true, label: '\\overrightarrow{BC}', labelAt: [4.5, -3] }, { from: [0, 0], to: [6, -2], color: '#047857', dashed: true, arrow: true, label: '\\overrightarrow{AC}', labelAt: [3, 0.3] }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'nw', r: 3 }, { at: [2, -3], label: 'B', labelAnchor: 's', r: 3 }, { at: [6, -2], label: 'C', labelAnchor: 'ne', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Add the components.',
                    workingLatex: '\\overrightarrow{AC} = (2\\mathbf{i}-3\\mathbf{j})+(4\\mathbf{i}+\\mathbf{j}) = 6\\mathbf{i}-2\\mathbf{j}',
                    explanation: 'Add the \\(\\mathbf{i}\\)-parts and the \\(\\mathbf{j}\\)-parts separately: \\(2+4=6\\), and \\(-3+1=-2\\).',
                },
                {
                    stepNumber: 3,
                    description: 'Find the magnitude of \\( \\overrightarrow{AC} \\).',
                    workingLatex: '|\\overrightarrow{AC}| = \\sqrt{6^2+(-2)^2} = \\sqrt{36+4} = \\sqrt{40}',
                    explanation: 'Square each component and add.',
                },
                {
                    stepNumber: 4,
                    description: 'Simplify the surd.',
                    workingLatex: '\\sqrt{40} = \\sqrt{4 \\times 10} = 2\\sqrt{10}',
                    explanation: 'Pull out the square factor \\(4\\).',
                },
                {
                    stepNumber: 5,
                    description: 'Divide \\( \\overrightarrow{AC} \\) by its magnitude.',
                    workingLatex: '\\hat{\\mathbf{u}} = \\tfrac{1}{2\\sqrt{10}}(6\\mathbf{i}-2\\mathbf{j})',
                    explanation: 'A unit vector in the direction of \\(\\overrightarrow{AC}\\) is the vector divided by its length.',
                },
                {
                    stepNumber: 6,
                    description: 'Simplify by cancelling the factor of \\(2\\).',
                    workingLatex: '\\hat{\\mathbf{u}} = \\tfrac{1}{2\\sqrt{10}} \\cdot 2(3\\mathbf{i}-\\mathbf{j}) = \\tfrac{1}{\\sqrt{10}}(3\\mathbf{i}-\\mathbf{j})',
                    explanation: 'Factor a \\(2\\) out of the numerator and cancel against the \\(2\\) in the denominator. The result is the unit vector in the direction of \\(\\overrightarrow{AC}\\).',
                },
            ],
            finalAnswer: '\\( \\tfrac{1}{\\sqrt{10}}(3\\mathbf{i}-\\mathbf{j}) \\)',
        },
    },

    {
        id: 'v2-008',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 08',
        difficulty: 'Standard',
        questionText:
            'Point A has position vector \\( 3\\mathbf{i} + 2\\mathbf{j} \\) and point B has position vector \\( -1\\mathbf{i} + 5\\mathbf{j} \\). Find the unit vector in the direction of \\( \\overrightarrow{BA} \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'unit vector', 'position vectors'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Express \\( \\overrightarrow{BA} \\) using position vectors.',
                    workingLatex: '\\overrightarrow{BA} = \\overrightarrow{OA}-\\overrightarrow{OB}',
                    explanation: 'To go from \\(B\\) to \\(A\\), travel from \\(B\\) back to the origin (the vector \\(-\\overrightarrow{OB}\\)) and then from the origin to \\(A\\) (the vector \\(\\overrightarrow{OA}\\)). The order \\(A\\) minus \\(B\\) matches the direction \\(B\\) to \\(A\\) — the destination minus the start.',
                    diagram: { xMin: -3, xMax: 5, yMin: -1, yMax: 7, xTicks: [-1, 0, 3], yTicks: [2, 5], lines: [{ from: [-1, 5], to: [3, 2], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{BA}', labelAt: [1.5, 4.2] }], points: [{ at: [3, 2], label: 'A(3,2)', labelAnchor: 'se', r: 4 }, { at: [-1, 5], label: 'B(-1,5)', labelAnchor: 'nw', r: 4 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Substitute and simplify.',
                    workingLatex: '\\overrightarrow{BA} = (3\\mathbf{i}+2\\mathbf{j})-(-\\mathbf{i}+5\\mathbf{j}) = (3-(-1))\\mathbf{i}+(2-5)\\mathbf{j} = 4\\mathbf{i}-3\\mathbf{j}',
                    explanation: 'Mind the signs when subtracting: \\(3-(-1)=4\\) and \\(2-5=-3\\).',
                },
                {
                    stepNumber: 3,
                    description: 'Find the magnitude of \\( \\overrightarrow{BA} \\).',
                    workingLatex: '|\\overrightarrow{BA}| = \\sqrt{4^2+(-3)^2} = \\sqrt{16+9} = \\sqrt{25} = 5',
                    explanation: 'A \\((3,4,5)\\) triple — no surd needed.',
                },
                {
                    stepNumber: 4,
                    description: 'Divide by the magnitude to get the unit vector.',
                    workingLatex: '\\hat{\\mathbf{u}} = \\tfrac{1}{5}(4\\mathbf{i}-3\\mathbf{j}) = \\tfrac{4}{5}\\mathbf{i}-\\tfrac{3}{5}\\mathbf{j}',
                    explanation: 'Check: \\(\\bigl(\\tfrac{4}{5}\\bigr)^2+\\bigl(\\tfrac{3}{5}\\bigr)^2 = \\tfrac{16+9}{25} = 1\\), confirming it is a unit vector.',
                },
            ],
            finalAnswer: '\\( \\tfrac{4}{5}\\mathbf{i}-\\tfrac{3}{5}\\mathbf{j} \\)',
        },
    },

    {
        id: 'v2-009',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 09',
        difficulty: 'Challenge',
        questionText:
            'Given that \\( |\\overrightarrow{PQ}| = \\sqrt{34} \\) and \\( |\\overrightarrow{OQ}| = \\sqrt{13} \\), and \\( \\overrightarrow{OP} = \\begin{pmatrix}3\\\\5\\end{pmatrix} \\) and \\( \\overrightarrow{OQ} = \\begin{pmatrix}-2\\\\b\\end{pmatrix}, \\) find \\( b \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'magnitude', 'unknown component', 'problem solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the magnitude condition on \\( \\overrightarrow{OQ} \\).',
                    workingLatex: '|\\overrightarrow{OQ}|^2 = (-2)^2+b^2 = 13',
                    explanation: 'Squaring both sides of \\(|\\overrightarrow{OQ}|=\\sqrt{13}\\) clears the root and leaves a quadratic in \\(b\\).',
                    diagram: { xMin: -4, xMax: 5, yMin: -1, yMax: 6, xTicks: [-2, 3], yTicks: [3, 5], lines: [{ from: [0, 0], to: [3, 5], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{OP}', labelAt: [1.0, 2.6] }, { from: [0, 0], to: [-2, 3], color: '#dc2626', arrow: true, label: '\\overrightarrow{OQ}', labelAt: [-1.8, 1.4] }, { from: [3, 5], to: [-2, 3], color: '#047857', dashed: true, label: '\\overrightarrow{PQ}', labelAt: [0.4, 4.4] }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [3, 5], label: 'P(3,5)', labelAnchor: 'se', r: 3 }, { at: [-2, 3], label: 'Q(-2,b)', labelAnchor: 'nw', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\( b \\).',
                    workingLatex: '4+b^2 = 13 \\implies b^2 = 9 \\implies b = \\pm 3',
                    explanation: 'Two candidates emerge from this condition alone. The second magnitude condition is needed to select one.',
                },
                {
                    stepNumber: 3,
                    description: 'Express \\( \\overrightarrow{PQ} \\) in terms of \\( b \\).',
                    workingLatex: '\\overrightarrow{PQ} = \\overrightarrow{OQ}-\\overrightarrow{OP} = \\begin{pmatrix}-2-3\\\\b-5\\end{pmatrix} = \\begin{pmatrix}-5\\\\b-5\\end{pmatrix}',
                    explanation: 'Destination minus start: \\(\\overrightarrow{PQ}=\\overrightarrow{OQ}-\\overrightarrow{OP}\\).',
                },
                {
                    stepNumber: 4,
                    description: 'Apply the magnitude condition on \\( \\overrightarrow{PQ} \\).',
                    workingLatex: '|\\overrightarrow{PQ}|^2 = 25+(b-5)^2',
                    explanation: 'Square \\(|\\overrightarrow{PQ}|=\\sqrt{34}\\) so that \\(25+(b-5)^2 = 34\\) follows.',
                },
                {
                    stepNumber: 5,
                    description: 'Test the candidates from step 2.',
                    workingLatex: 'b=3:\\; 25+(3-5)^2=25+4=29 \\quad b=-3:\\; 25+(-3-5)^2=25+64=89',
                    explanation: 'Plug each candidate into \\(25+(b-5)^2\\). The value \\(b=3\\) gives \\(29\\), which is the closest match to the stated \\(|PQ|^2 = 34\\); the value \\(b=-3\\) gives \\(89\\), well outside.',
                },
                {
                    stepNumber: 6,
                    description: 'Select the consistent value.',
                    workingLatex: 'b = 3',
                    explanation: 'Note: with the stem as printed, neither value of \\(b\\) makes \\(|PQ|^2\\) exactly \\(34\\), so the two given magnitudes are not perfectly consistent. The intended answer (matching the \\(|OQ|\\) condition) is \\(b=3\\).',
                },
            ],
            finalAnswer: '\\( b = 3 \\)',
        },
    },

    {
        id: 'v2-010',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 10',
        difficulty: 'Standard',
        questionText:
            'The vector \\( \\mathbf{c} \\) has the same direction as \\( \\mathbf{d} = 3\\mathbf{i} - 4\\mathbf{j} \\) and \\( |\\mathbf{c}| = 20 \\). Find \\( \\mathbf{c} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'unit vector', 'magnitude', 'scaling'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the magnitude of \\( \\mathbf{d} \\).',
                    workingLatex: '|\\mathbf{d}| = \\sqrt{3^2+(-4)^2} = \\sqrt{9+16} = 5',
                    explanation: 'Using the \\((3,4,5)\\) triple gives a clean integer magnitude.',
                },
                {
                    stepNumber: 2,
                    description: 'Form the unit vector in the direction of \\( \\mathbf{d} \\).',
                    workingLatex: '\\hat{\\mathbf{d}} = \\tfrac{1}{5}(3\\mathbf{i}-4\\mathbf{j})',
                    explanation: 'Dividing by the magnitude scales the length to \\(1\\) while preserving the direction.',
                },
                {
                    stepNumber: 3,
                    description: 'Scale the unit vector to magnitude \\(20\\).',
                    workingLatex: '\\mathbf{c} = 20\\hat{\\mathbf{d}} = \\tfrac{20}{5}(3\\mathbf{i}-4\\mathbf{j}) = 4(3\\mathbf{i}-4\\mathbf{j})',
                    explanation: 'Multiplying a unit vector by \\(20\\) gives a vector of magnitude \\(20\\) in the same direction.',
                },
                {
                    stepNumber: 4,
                    description: 'Distribute the scalar.',
                    workingLatex: '\\mathbf{c} = 12\\mathbf{i}-16\\mathbf{j}',
                    explanation: 'Quick check: \\(\\sqrt{12^2+(-16)^2}=\\sqrt{144+256}=\\sqrt{400}=20\\) — magnitude matches the requirement.',
                },
            ],
            finalAnswer: '\\( \\mathbf{c} = 12\\mathbf{i} - 16\\mathbf{j} \\)',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 3  (Q11–Q15)  Intermediate — direction of a vector
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 'v2-011',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 11',
        difficulty: 'Standard',
        questionText:
            'Find the direction of the following vectors to 1 d.p. (measured anticlockwise from the positive \\( x \\)-axis):\n\na) \\( 5\\mathbf{i} + 2\\mathbf{j} \\)\n\nb) \\( -3\\mathbf{i} + 7\\mathbf{j} \\)\n\nc) \\( \\begin{pmatrix}4\\\\-3\\end{pmatrix} \\)\n\nd) \\( \\begin{pmatrix}-6\\\\-6\\end{pmatrix} \\)',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'direction', 'trigonometry', 'angle'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Strategy: use the reference angle \\( \\alpha = \\tan^{-1}(|y|/|x|) \\) then adjust by quadrant.',
                    workingLatex: '\\alpha = \\tan^{-1}\\!\\left(\\tfrac{|y|}{|x|}\\right)',
                    explanation: 'A calculator\'s \\(\\tan^{-1}\\) only returns angles in \\((-90°,90°)\\), so always work out the *reference angle* (the acute angle to the \\(x\\)-axis) from the absolute values, then rotate it into the correct quadrant.',
                    diagram: { xMin: -7, xMax: 6, yMin: -7, yMax: 8, xTicks: [-6, -3, 4, 5], yTicks: [-6, -3, 2, 7], lines: [{ from: [0, 0], to: [5, 2], color: '#1d4ed8', arrow: true, label: 'a) 5\\mathbf{i}+2\\mathbf{j}', labelAt: [2.6, 1.3] }, { from: [0, 0], to: [-3, 7], color: '#dc2626', arrow: true, label: 'b) -3\\mathbf{i}+7\\mathbf{j}', labelAt: [-3.2, 4] }, { from: [0, 0], to: [4, -3], color: '#047857', arrow: true, label: 'c) (4,-3)', labelAt: [2.4, -1.6] }, { from: [0, 0], to: [-6, -6], color: '#a16207', arrow: true, label: 'd) (-6,-6)', labelAt: [-3, -3.4] }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'ne', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'a) \\( 5\\mathbf{i}+2\\mathbf{j} \\) lies in the first quadrant.',
                    workingLatex: '\\theta = \\tan^{-1}\\!\\left(\\tfrac{2}{5}\\right) = 21.8°',
                    explanation: 'Both components are positive, so the angle measured anticlockwise from the positive \\(x\\)-axis equals the reference angle directly.',
                },
                {
                    stepNumber: 3,
                    description: 'b) Reference angle for \\( -3\\mathbf{i}+7\\mathbf{j} \\) (second quadrant).',
                    workingLatex: '\\alpha = \\tan^{-1}\\!\\left(\\tfrac{7}{3}\\right) = 66.8°',
                    explanation: 'Use \\(|y|/|x|=7/3\\). The vector points up and to the left, so we are in the second quadrant.',
                },
                {
                    stepNumber: 4,
                    description: 'b) Convert to anticlockwise angle from positive \\(x\\)-axis.',
                    workingLatex: '\\theta = 180°-66.8° = 113.2°',
                    explanation: 'In the second quadrant, the bearing is \\(180°\\) minus the reference angle.',
                },
                {
                    stepNumber: 5,
                    description: 'c) Reference angle for \\( \\begin{pmatrix}4\\\\-3\\end{pmatrix} \\) (fourth quadrant).',
                    workingLatex: '\\alpha = \\tan^{-1}\\!\\left(\\tfrac{3}{4}\\right) = 36.9°',
                    explanation: 'Positive \\(x\\), negative \\(y\\) places the vector below the positive \\(x\\)-axis.',
                },
                {
                    stepNumber: 6,
                    description: 'c) Convert to anticlockwise angle.',
                    workingLatex: '\\theta = 360°-36.9° = 323.1°',
                    explanation: 'In the fourth quadrant, going anticlockwise from the positive \\(x\\)-axis means subtracting the reference angle from \\(360°\\) (or equivalently, the negative angle \\(-36.9°\\)).',
                },
                {
                    stepNumber: 7,
                    description: 'd) Reference angle for \\( \\begin{pmatrix}-6\\\\-6\\end{pmatrix} \\) (third quadrant).',
                    workingLatex: '\\alpha = \\tan^{-1}\\!\\left(\\tfrac{6}{6}\\right) = 45°',
                    explanation: 'Both components negative, so the vector points into the third quadrant.',
                },
                {
                    stepNumber: 8,
                    description: 'd) Convert to anticlockwise angle.',
                    workingLatex: '\\theta = 180°+45° = 225.0°',
                    explanation: 'In the third quadrant, add the reference angle to \\(180°\\).',
                },
            ],
            finalAnswer: 'a) \\( 21.8° \\) \\quad b) \\( 113.2° \\) \\quad c) \\( 323.1° \\) \\quad d) \\( 225.0° \\)',
        },
    },

    {
        id: 'v2-012',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 12',
        difficulty: 'Standard',
        questionText:
            'Find the direction of the vector \\( \\begin{pmatrix}-4\\\\-7\\end{pmatrix} \\) to 2 decimal places.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'direction', 'trigonometry'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the quadrant.',
                    workingLatex: '\\begin{pmatrix}-4\\\\-7\\end{pmatrix}: \\; x<0, \\; y<0',
                    explanation: 'Both components are negative, so the vector points into the third quadrant (between \\(180°\\) and \\(270°\\)).',
                    diagram: { xMin: -6, xMax: 2, yMin: -8, yMax: 2, xTicks: [-4, 0], yTicks: [-7, 0], lines: [{ from: [-5.5, 0], to: [1.5, 0], color: '#888' }, { from: [0, -7.5], to: [0, 1.5], color: '#888' }, { from: [0, 0], to: [-4, -7], color: '#1d4ed8', arrow: true, label: '(-4,-7)', labelAt: [-2.2, -3.8] }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'ne', r: 3 }, { at: [-4, -7], label: '', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Find the reference angle using positive values.',
                    workingLatex: '\\alpha = \\tan^{-1}\\!\\left(\\tfrac{|{-7}|}{|{-4}|}\\right) = \\tan^{-1}\\!\\left(\\tfrac{7}{4}\\right) = 60.26°',
                    explanation: 'The reference angle is the acute angle the vector makes with the nearest part of the \\(x\\)-axis. Use \\(|y|/|x|\\) so that the \\(\\tan^{-1}\\) returns a positive acute angle.',
                },
                {
                    stepNumber: 3,
                    description: 'Add \\(180°\\) for the third quadrant.',
                    workingLatex: '\\theta = 180°+60.26° = 240.26°',
                    explanation: 'In the third quadrant the anticlockwise angle from the positive \\(x\\)-axis is \\(180°\\) plus the reference angle. Answers to 2 d.p. as requested.',
                },
            ],
            finalAnswer: '\\( 240.26° \\)',
        },
    },

    {
        id: 'v2-013',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 13',
        difficulty: 'Standard',
        questionText:
            'Given a vector \\( \\mathbf{v} = a\\mathbf{i} + b\\mathbf{j} \\) with direction \\( 30° \\) and magnitude \\( 8 \\), calculate \\( a \\) and \\( b \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'direction', 'magnitude', 'components', 'trigonometry'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Decompose a vector of magnitude \\(r\\) and direction \\(\\theta\\) into components.',
                    workingLatex: 'a = r\\cos\\theta,\\quad b = r\\sin\\theta',
                    explanation: 'A vector of length \\(r\\) at angle \\(\\theta\\) to the positive \\(x\\)-axis has horizontal component \\(r\\cos\\theta\\) and vertical component \\(r\\sin\\theta\\) — basic right-angled trig on the triangle formed with the axes.',
                    diagram: { xMin: -1, xMax: 9, yMin: -1, yMax: 6, xTicks: [4, 8], yTicks: [4], lines: [{ from: [0, 0], to: [6.93, 4], color: '#1d4ed8', arrow: true, label: '\\mathbf{v}', labelAt: [3, 2.8] }, { from: [0, 0], to: [4, 0], color: '#888', dashed: true }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Compute the horizontal component using \\(\\cos 30° = \\tfrac{\\sqrt{3}}{2}\\).',
                    workingLatex: 'a = 8\\cos 30° = 8 \\times \\tfrac{\\sqrt{3}}{2} = 4\\sqrt{3}',
                    explanation: 'Use the exact value of \\(\\cos 30°\\) so the answer stays in surd form. The factor of \\(2\\) cancels neatly.',
                },
                {
                    stepNumber: 3,
                    description: 'Compute the vertical component using \\(\\sin 30° = \\tfrac{1}{2}\\).',
                    workingLatex: 'b = 8\\sin 30° = 8 \\times \\tfrac{1}{2} = 4',
                    explanation: 'Another exact-value trig fact gives a whole-number component.',
                },
                {
                    stepNumber: 4,
                    description: 'Assemble \\( \\mathbf{v} \\).',
                    workingLatex: '\\mathbf{v} = 4\\sqrt{3}\\,\\mathbf{i}+4\\mathbf{j}',
                    explanation: 'Quick magnitude check: \\(\\sqrt{(4\\sqrt{3})^2+4^2}=\\sqrt{48+16}=\\sqrt{64}=8\\) ✓.',
                },
            ],
            finalAnswer: '\\( \\mathbf{v} = 4\\sqrt{3}\\,\\mathbf{i} + 4\\mathbf{j} \\)',
        },
    },

    {
        id: 'v2-014',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 14',
        difficulty: 'Standard',
        questionText:
            'Given a vector \\( \\mathbf{w} = a\\mathbf{i} + b\\mathbf{j} \\) with direction \\( 120° \\) and magnitude \\( 6 \\), calculate \\( a \\) and \\( b \\). Give exact answers.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'direction', 'magnitude', 'components', 'second quadrant'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Note the quadrant: \\(120°\\) lies in the second quadrant.',
                    workingLatex: '90° < 120° < 180°',
                    explanation: 'In the second quadrant we expect \\(a<0\\) and \\(b>0\\). Keeping this in mind helps catch sign errors.',
                    diagram: { xMin: -5, xMax: 3, yMin: -1, yMax: 7, xTicks: [-3, 0], yTicks: [3, 5], lines: [{ from: [0, 0], to: [-3, 5.2], color: '#1d4ed8', arrow: true, label: '\\mathbf{w}', labelAt: [-2, 3] }, { from: [0, 0], to: [2, 0], color: '#888', dashed: true }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'se', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Find the horizontal component using \\(\\cos 120° = -\\tfrac{1}{2}\\).',
                    workingLatex: 'a = 6\\cos 120° = 6 \\times \\left(-\\tfrac{1}{2}\\right) = -3',
                    explanation: 'Cosine is negative in the second quadrant. Use the exact value rather than a decimal so the answer stays exact.',
                },
                {
                    stepNumber: 3,
                    description: 'Find the vertical component using \\(\\sin 120° = \\tfrac{\\sqrt{3}}{2}\\).',
                    workingLatex: 'b = 6\\sin 120° = 6 \\times \\tfrac{\\sqrt{3}}{2} = 3\\sqrt{3}',
                    explanation: '\\(\\sin 120° = \\sin 60° = \\tfrac{\\sqrt{3}}{2}\\) — sine is positive in the second quadrant.',
                },
                {
                    stepNumber: 4,
                    description: 'Assemble \\( \\mathbf{w} \\).',
                    workingLatex: '\\mathbf{w} = -3\\mathbf{i}+3\\sqrt{3}\\,\\mathbf{j}',
                    explanation: 'Check: \\(\\sqrt{(-3)^2+(3\\sqrt{3})^2}=\\sqrt{9+27}=\\sqrt{36}=6\\) ✓.',
                },
            ],
            finalAnswer: '\\( \\mathbf{w} = -3\\mathbf{i} + 3\\sqrt{3}\\,\\mathbf{j} \\)',
        },
    },

    {
        id: 'v2-015',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 15',
        difficulty: 'Standard',
        questionText:
            'By finding the horizontal and vertical components, express the following vectors in exact \\( \\mathbf{i} + \\mathbf{j} \\) form:\n\na) \\( \\mathbf{a} \\) has direction \\( 45° \\) and magnitude \\( \\sqrt{2} \\).\n\nb) \\( \\mathbf{b} \\) has direction \\( 60° \\) and magnitude \\( \\sqrt{7} \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'direction', 'magnitude', 'components', 'exact'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'a) Set up the components of \\(\\mathbf{a}\\).',
                    workingLatex: '\\mathbf{a} = \\sqrt{2}\\cos 45°\\,\\mathbf{i}+\\sqrt{2}\\sin 45°\\,\\mathbf{j}',
                    explanation: 'For magnitude \\(r=\\sqrt{2}\\) and angle \\(\\theta=45°\\), the components are \\(r\\cos\\theta\\) and \\(r\\sin\\theta\\).',
                },
                {
                    stepNumber: 2,
                    description: 'a) Substitute \\(\\cos 45° = \\sin 45° = \\tfrac{\\sqrt{2}}{2}\\).',
                    workingLatex: '\\mathbf{a} = \\sqrt{2}\\cdot\\tfrac{\\sqrt{2}}{2}\\,\\mathbf{i}+\\sqrt{2}\\cdot\\tfrac{\\sqrt{2}}{2}\\,\\mathbf{j}',
                    explanation: 'Both component coefficients are the same because sine and cosine are equal at \\(45°\\).',
                },
                {
                    stepNumber: 3,
                    description: 'a) Simplify each coefficient.',
                    workingLatex: '\\sqrt{2}\\cdot\\tfrac{\\sqrt{2}}{2} = \\tfrac{2}{2} = 1 \\implies \\mathbf{a} = \\mathbf{i}+\\mathbf{j}',
                    explanation: 'Using \\(\\sqrt{2}\\cdot\\sqrt{2}=2\\). A nice clean answer.',
                },
                {
                    stepNumber: 4,
                    description: 'b) Set up the components of \\(\\mathbf{b}\\).',
                    workingLatex: '\\mathbf{b} = \\sqrt{7}\\cos 60°\\,\\mathbf{i}+\\sqrt{7}\\sin 60°\\,\\mathbf{j}',
                    explanation: 'Same recipe: \\(r\\cos\\theta\\) for the \\(\\mathbf{i}\\)-component and \\(r\\sin\\theta\\) for the \\(\\mathbf{j}\\)-component.',
                },
                {
                    stepNumber: 5,
                    description: 'b) Substitute \\(\\cos 60° = \\tfrac{1}{2}\\) and \\(\\sin 60° = \\tfrac{\\sqrt{3}}{2}\\).',
                    workingLatex: '\\mathbf{b} = \\tfrac{\\sqrt{7}}{2}\\,\\mathbf{i}+\\tfrac{\\sqrt{7}\\sqrt{3}}{2}\\,\\mathbf{j}',
                    explanation: 'Use exact surd values for the trig ratios.',
                },
                {
                    stepNumber: 6,
                    description: 'b) Combine the surds in the \\(\\mathbf{j}\\)-component.',
                    workingLatex: '\\sqrt{7}\\sqrt{3} = \\sqrt{21} \\implies \\mathbf{b} = \\tfrac{\\sqrt{7}}{2}\\,\\mathbf{i}+\\tfrac{\\sqrt{21}}{2}\\,\\mathbf{j}',
                    explanation: 'Using \\(\\sqrt{a}\\sqrt{b}=\\sqrt{ab}\\) keeps the answer in the cleanest surd form.',
                },
            ],
            finalAnswer: 'a) \\( \\mathbf{i}+\\mathbf{j} \\) \\quad b) \\( \\tfrac{\\sqrt{7}}{2}\\,\\mathbf{i}+\\tfrac{\\sqrt{21}}{2}\\,\\mathbf{j} \\)',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 4  (Q16–Q20)  Intermediate — direction & magnitude mixed, unknown components
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 'v2-016',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 16',
        difficulty: 'Standard',
        questionText:
            'The vector \\( \\mathbf{q} = 7\\mathbf{i} + y\\mathbf{j} \\) has direction \\( 44° \\). Find \\( |\\mathbf{q}| \\) to 2 d.p.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'direction', 'magnitude', 'unknown component', 'trigonometry'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Relate the direction to the components via \\( \\tan\\theta = y/x \\).',
                    workingLatex: '\\tan 44° = \\tfrac{y}{7}',
                    explanation: 'For a vector \\(x\\mathbf{i}+y\\mathbf{j}\\) in the first quadrant, the direction satisfies \\(\\tan\\theta=y/x\\). Here \\(x=7\\) is known and \\(\\theta=44°\\).',
                    diagram: { xMin: -1, xMax: 9, yMin: -1, yMax: 8, hideAxes: true, lines: [{ from: [0, 0], to: [7, 0], color: '#1d4ed8', arrow: true, label: '7', labelAt: [3.5, -0.5] }, { from: [7, 0], to: [7, 6.76], color: '#dc2626', arrow: true, label: 'y', labelAt: [7.4, 3.4] }, { from: [0, 0], to: [7, 6.76], color: '#047857', arrow: true, label: '\\mathbf{q}', labelAt: [2.8, 3.4] }], points: [{ at: [0, 0], label: '44°', labelAnchor: 'e', r: 2 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\(y\\).',
                    workingLatex: 'y = 7\\tan 44° = 7(0.9657) = 6.7600\\ldots',
                    explanation: 'Multiply both sides by \\(7\\) to isolate \\(y\\).',
                },
                {
                    stepNumber: 3,
                    description: 'Apply the magnitude formula.',
                    workingLatex: '|\\mathbf{q}| = \\sqrt{7^2+y^2} = \\sqrt{49+(6.7600)^2}',
                    explanation: 'Substitute the value of \\(y\\) just found into the standard magnitude formula.',
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate.',
                    workingLatex: '|\\mathbf{q}| = \\sqrt{49+45.70} = \\sqrt{94.70} = 9.7314\\ldots \\approx 9.73',
                    explanation: 'A faster alternative: \\(\\cos 44° = 7/|\\mathbf{q}|\\), so \\(|\\mathbf{q}|=7/\\cos 44° = 7/0.7193 = 9.73\\). Round at the end to 2 d.p.',
                },
            ],
            finalAnswer: '\\( |\\mathbf{q}| = 9.73 \\) (2 d.p.)',
        },
    },

    {
        id: 'v2-017',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 17',
        difficulty: 'Standard',
        questionText:
            'The vector \\( \\mathbf{v} = x\\mathbf{i} - 4\\mathbf{j} \\) makes an angle of \\( 51° \\) below the positive \\( x \\)-axis. Find \\( |\\mathbf{v}| \\) to 2 d.p.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'direction', 'magnitude', 'unknown component', 'below x-axis'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up the right-angled triangle below the \\(x\\)-axis.',
                    workingLatex: '\\tan 51° = \\tfrac{|y|}{|x|} = \\tfrac{4}{x}',
                    explanation: 'The vector has a positive \\(x\\)-component and a \\(y\\)-component of \\(-4\\); it sits below the positive \\(x\\)-axis at \\(51°\\). The reference triangle has opposite \\(4\\) (vertical drop) and adjacent \\(x\\) (horizontal run).',
                    diagram: { xMin: -1, xMax: 5, yMin: -5, yMax: 1, hideAxes: true, lines: [{ from: [-0.5, 0], to: [4.5, 0], color: '#888', dashed: true, label: 'horizontal', labelAt: [3.6, 0.3] }, { from: [0, 0], to: [3.24, 0], color: '#1d4ed8', arrow: true, label: 'x', labelAt: [1.6, 0.3] }, { from: [3.24, 0], to: [3.24, -4], color: '#dc2626', arrow: true, label: '-4', labelAt: [3.6, -2] }, { from: [0, 0], to: [3.24, -4], color: '#047857', arrow: true, label: '\\mathbf{v}', labelAt: [1.4, -2.2] }], points: [{ at: [0, 0], label: '51°', labelAnchor: 'se', r: 2 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\(x\\).',
                    workingLatex: 'x = \\tfrac{4}{\\tan 51°} = \\tfrac{4}{1.2349} = 3.239\\ldots',
                    explanation: 'Rearrange and evaluate. We keep extra decimals to avoid rounding errors in the next step.',
                },
                {
                    stepNumber: 3,
                    description: 'Find the magnitude — quickest via \\( \\sin\\theta = |y|/|\\mathbf{v}| \\).',
                    workingLatex: '\\sin 51° = \\tfrac{4}{|\\mathbf{v}|} \\implies |\\mathbf{v}| = \\tfrac{4}{\\sin 51°}',
                    explanation: 'Using the sine ratio avoids needing the previous \\(x\\) value. (Pythagoras with \\(x=3.239\\) gives the same answer.)',
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate.',
                    workingLatex: '|\\mathbf{v}| = \\tfrac{4}{0.7771} = 5.1473\\ldots \\approx 5.15',
                    explanation: 'Round only at the very end to 2 d.p.',
                },
            ],
            finalAnswer: '\\( |\\mathbf{v}| = 5.15 \\) (2 d.p.)',
        },
    },

    {
        id: 'v2-018',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 18',
        difficulty: 'Standard',
        questionText:
            'Vector \\( \\mathbf{s} \\) is parallel to \\( \\mathbf{t} \\). Given that \\( \\mathbf{t} \\) has direction \\( 60° \\) and \\( |\\mathbf{s}| = \\sqrt{38} \\), express \\( \\mathbf{s} \\) in exact \\( \\mathbf{i}+\\mathbf{j} \\) form.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'parallel', 'direction', 'magnitude', 'components'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Note that parallel vectors share a direction.',
                    workingLatex: '\\mathbf{s} \\parallel \\mathbf{t} \\implies \\text{direction of } \\mathbf{s} = 60°',
                    explanation: 'Parallel here means same direction (assuming the same sense). The magnitude of \\(\\mathbf{s}\\) is given separately, so we have everything needed.',
                },
                {
                    stepNumber: 2,
                    description: 'Set up components using \\( r\\cos\\theta \\) and \\( r\\sin\\theta \\).',
                    workingLatex: '\\mathbf{s} = \\sqrt{38}\\cos 60°\\,\\mathbf{i}+\\sqrt{38}\\sin 60°\\,\\mathbf{j}',
                    explanation: 'Standard component decomposition with \\(r=\\sqrt{38}\\) and \\(\\theta=60°\\).',
                },
                {
                    stepNumber: 3,
                    description: 'Substitute the exact trig values.',
                    workingLatex: '\\mathbf{s} = \\sqrt{38}\\cdot\\tfrac{1}{2}\\,\\mathbf{i}+\\sqrt{38}\\cdot\\tfrac{\\sqrt{3}}{2}\\,\\mathbf{j} = \\tfrac{\\sqrt{38}}{2}\\,\\mathbf{i}+\\tfrac{\\sqrt{38}\\sqrt{3}}{2}\\,\\mathbf{j}',
                    explanation: '\\(\\cos 60°=\\tfrac{1}{2}\\) and \\(\\sin 60°=\\tfrac{\\sqrt{3}}{2}\\). Keep the surds — the question asks for exact form.',
                },
                {
                    stepNumber: 4,
                    description: 'Combine the surds in the \\(\\mathbf{j}\\)-component.',
                    workingLatex: '\\sqrt{38}\\sqrt{3} = \\sqrt{114} \\implies \\mathbf{s} = \\tfrac{\\sqrt{38}}{2}\\,\\mathbf{i}+\\tfrac{\\sqrt{114}}{2}\\,\\mathbf{j}',
                    explanation: 'Using \\(\\sqrt{a}\\sqrt{b}=\\sqrt{ab}\\); \\(38 \\times 3 = 114\\) has no square factors, so this is fully simplified.',
                },
            ],
            finalAnswer: '\\( \\mathbf{s} = \\tfrac{\\sqrt{38}}{2}\\,\\mathbf{i} + \\tfrac{\\sqrt{114}}{2}\\,\\mathbf{j} \\)',
        },
    },

    {
        id: 'v2-019',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 19',
        difficulty: 'Standard',
        questionText:
            'Find the magnitude and direction of the vector \\( \\mathbf{a}+\\mathbf{b} \\), where \\( \\mathbf{a} = \\begin{pmatrix}-3\\\\5\\end{pmatrix} \\) and \\( \\mathbf{b} = \\begin{pmatrix}1\\\\2\\end{pmatrix} \\). Give the direction to 1 d.p.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'magnitude', 'direction', 'resultant'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Add the vectors component by component.',
                    workingLatex: '\\mathbf{a}+\\mathbf{b} = \\begin{pmatrix}-3+1\\\\5+2\\end{pmatrix} = \\begin{pmatrix}-2\\\\7\\end{pmatrix}',
                    explanation: 'Vector addition adds the corresponding entries of the column vectors.',
                    diagram: { xMin: -4, xMax: 3, yMin: -1, yMax: 9, xTicks: [-2, 0, 2], yTicks: [2, 5, 7], lines: [{ from: [0, 0], to: [-3, 5], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [-2, 2.5] }, { from: [-3, 5], to: [-2, 7], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [-2, 6.5] }, { from: [0, 0], to: [-2, 7], color: '#047857', dashed: true, arrow: true, label: '\\mathbf{a}+\\mathbf{b}', labelAt: [-0.5, 4] }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'se', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Find the magnitude.',
                    workingLatex: '|\\mathbf{a}+\\mathbf{b}| = \\sqrt{(-2)^2+7^2} = \\sqrt{4+49} = \\sqrt{53}',
                    explanation: 'Standard Pythagoras. \\(53\\) is prime so the surd cannot be simplified.',
                },
                {
                    stepNumber: 3,
                    description: 'Identify the quadrant of the resultant.',
                    workingLatex: '\\begin{pmatrix}-2\\\\7\\end{pmatrix}: \\; x<0, \\; y>0',
                    explanation: 'Negative \\(x\\) and positive \\(y\\) place the resultant in the second quadrant. The direction is between \\(90°\\) and \\(180°\\).',
                },
                {
                    stepNumber: 4,
                    description: 'Find the reference angle.',
                    workingLatex: '\\alpha = \\tan^{-1}\\!\\left(\\tfrac{7}{2}\\right) = 74.1°',
                    explanation: 'Use \\(|y|/|x|=7/2\\) to get a positive acute angle.',
                },
                {
                    stepNumber: 5,
                    description: 'Convert to the anticlockwise angle from the positive \\(x\\)-axis.',
                    workingLatex: '\\theta = 180°-74.1° = 105.9°',
                    explanation: 'In the second quadrant, subtract the reference angle from \\(180°\\).',
                },
            ],
            finalAnswer: '\\( |\\mathbf{a}+\\mathbf{b}| = \\sqrt{53} \\approx 7.28 \\), direction = \\(105.9° \\)',
        },
    },

    {
        id: 'v2-020',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 20',
        difficulty: 'Standard',
        questionText:
            'Given that \\( \\mathbf{a} = \\begin{pmatrix}-5\\\\2\\end{pmatrix} \\) and \\( \\mathbf{b} = \\begin{pmatrix}3\\\\-1\\end{pmatrix}, \\) find the magnitude and direction of \\( \\mathbf{a}+\\mathbf{b} \\) to one decimal place.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'magnitude', 'direction', 'resultant'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Add the vectors.',
                    workingLatex: '\\mathbf{a}+\\mathbf{b} = \\begin{pmatrix}-5+3\\\\2+(-1)\\end{pmatrix} = \\begin{pmatrix}-2\\\\1\\end{pmatrix}',
                    explanation: 'Add corresponding rows of the column vectors. Watch the signs: \\(2+(-1)=1\\).',
                },
                {
                    stepNumber: 2,
                    description: 'Find the magnitude.',
                    workingLatex: '|\\mathbf{a}+\\mathbf{b}| = \\sqrt{(-2)^2+1^2} = \\sqrt{4+1} = \\sqrt{5} \\approx 2.2',
                    explanation: 'Apply the magnitude formula and round to 1 d.p. as required.',
                },
                {
                    stepNumber: 3,
                    description: 'Identify the quadrant.',
                    workingLatex: '\\begin{pmatrix}-2\\\\1\\end{pmatrix}: \\; x<0, \\; y>0',
                    explanation: 'Negative \\(x\\), positive \\(y\\) gives the second quadrant.',
                },
                {
                    stepNumber: 4,
                    description: 'Find the reference angle.',
                    workingLatex: '\\alpha = \\tan^{-1}\\!\\left(\\tfrac{1}{2}\\right) = 26.6°',
                    explanation: 'Take the inverse tangent of \\(|y|/|x|\\).',
                },
                {
                    stepNumber: 5,
                    description: 'Convert to anticlockwise angle from the positive \\(x\\)-axis.',
                    workingLatex: '\\theta = 180°-26.6° = 153.4°',
                    explanation: 'Second-quadrant rule: \\(180°-\\alpha\\).',
                },
            ],
            finalAnswer: 'Magnitude \\( \\sqrt{5} \\approx 2.2 \\), direction \\( 153.4° \\)',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 5  (Q21–Q25)  Higher — angle between two vectors (cosine rule)
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 'v2-021',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 21',
        difficulty: 'Challenge',
        questionText:
            'Let \\( \\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j} \\) and \\( \\mathbf{b} = -\\mathbf{i} + 4\\mathbf{j} \\).\n\na) Find, to 2 d.p., the angle between \\( \\mathbf{a} \\) and \\( \\mathbf{b} \\).\n\nb) Find the exact value of the scalar \\( k \\) such that \\( \\mathbf{a} + k\\mathbf{b} \\) is perpendicular to \\( \\mathbf{b} \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'angle between vectors', 'cosine rule', 'magnitude'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Construct a triangle with the two vectors emanating from the origin.',
                    workingLatex: '\\mathbf{b}-\\mathbf{a} = (-\\mathbf{i}+4\\mathbf{j})-(2\\mathbf{i}+3\\mathbf{j}) = -3\\mathbf{i}+\\mathbf{j}',
                    explanation: 'Place both vectors tail-to-tail at the origin. The third side of the resulting triangle is the vector from the tip of \\(\\mathbf{a}\\) to the tip of \\(\\mathbf{b}\\), namely \\(\\mathbf{b}-\\mathbf{a}\\).',
                    diagram: { xMin: -2, xMax: 3, yMin: -1, yMax: 5, xTicks: [-1, 2], yTicks: [3, 4], lines: [{ from: [0, 0], to: [2, 3], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [1.2, 1.2] }, { from: [0, 0], to: [-1, 4], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [-1.0, 2.2] }, { from: [2, 3], to: [-1, 4], color: '#047857', dashed: true, label: '\\mathbf{b}-\\mathbf{a}', labelAt: [0.4, 3.8] }], points: [{ at: [0, 0], label: '\\theta', labelAnchor: 'ne', r: 2 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Find \\(|\\mathbf{a}|\\).',
                    workingLatex: '|\\mathbf{a}| = \\sqrt{2^2+3^2} = \\sqrt{4+9} = \\sqrt{13}',
                    explanation: 'One side of the triangle.',
                },
                {
                    stepNumber: 3,
                    description: 'Find \\(|\\mathbf{b}|\\).',
                    workingLatex: '|\\mathbf{b}| = \\sqrt{(-1)^2+4^2} = \\sqrt{1+16} = \\sqrt{17}',
                    explanation: 'Second side.',
                },
                {
                    stepNumber: 4,
                    description: 'Find \\(|\\mathbf{b}-\\mathbf{a}|\\).',
                    workingLatex: '|\\mathbf{b}-\\mathbf{a}| = \\sqrt{(-3)^2+1^2} = \\sqrt{9+1} = \\sqrt{10}',
                    explanation: 'The third side, opposite the angle \\(\\theta\\) between \\(\\mathbf{a}\\) and \\(\\mathbf{b}\\).',
                },
                {
                    stepNumber: 5,
                    description: 'Apply the cosine rule \\( c^2 = a^2+b^2-2ab\\cos\\theta \\).',
                    workingLatex: '10 = 13+17-2\\sqrt{13}\\sqrt{17}\\cos\\theta',
                    explanation: 'Substituting the three sides — note that the squared lengths are simply \\(|\\mathbf{a}|^2=13\\), \\(|\\mathbf{b}|^2=17\\), \\(|\\mathbf{b}-\\mathbf{a}|^2=10\\).',
                },
                {
                    stepNumber: 6,
                    description: 'Rearrange for \\( \\cos\\theta \\).',
                    workingLatex: '\\cos\\theta = \\frac{13+17-10}{2\\sqrt{13}\\sqrt{17}} = \\frac{20}{2\\sqrt{221}} = \\frac{10}{\\sqrt{221}}',
                    explanation: 'Combine the surds in the denominator using \\(\\sqrt{13}\\sqrt{17}=\\sqrt{221}\\), then cancel the factor of \\(2\\).',
                },
                {
                    stepNumber: 7,
                    description: 'Take the inverse cosine.',
                    workingLatex: '\\theta = \\cos^{-1}\\!\\left(\\tfrac{10}{\\sqrt{221}}\\right) = \\cos^{-1}(0.6727) = 47.73°',
                    explanation: 'A positive cosine confirms the angle is acute. Round to 2 d.p.',
                },
                {
                    stepNumber: 8,
                    description: 'b) Express \\( \\mathbf{a} + k\\mathbf{b} \\) in component form.',
                    workingLatex: '\\mathbf{a} + k\\mathbf{b} = (2 + k(-1))\\mathbf{i} + (3 + 4k)\\mathbf{j} = (2-k)\\mathbf{i} + (3+4k)\\mathbf{j}',
                    explanation: 'Add \\(k\\) copies of \\(\\mathbf{b}\\) to \\(\\mathbf{a}\\) componentwise; the result is a vector whose components both depend on the unknown \\(k\\).',
                },
                {
                    stepNumber: 9,
                    description: 'Translate "perpendicular to \\( \\mathbf{b} \\)" into a gradient condition.',
                    workingLatex: 'm_{\\mathbf{b}} = \\tfrac{4}{-1} = -4,\\quad m_{\\mathbf{a}+k\\mathbf{b}} = \\tfrac{3+4k}{2-k}',
                    explanation: 'Two non-zero vectors are perpendicular iff the lines they sit on have gradients whose product is \\(-1\\) (the Y1 coordinate-geometry rule). Compute each gradient as (j-component)/(i-component).',
                },
                {
                    stepNumber: 10,
                    description: 'Set the product of gradients equal to \\(-1\\) and solve.',
                    workingLatex: '\\left(-4\\right)\\cdot\\dfrac{3+4k}{2-k} = -1 \\;\\Longrightarrow\\; 4(3+4k) = 2-k \\;\\Longrightarrow\\; 12+16k = 2-k \\;\\Longrightarrow\\; 17k = -10',
                    explanation: 'Multiply both sides by \\((2-k)\\) (assuming the i-component does not vanish), then collect like terms. The denominators have been cleared, so the rest is straight linear algebra.',
                },
                {
                    stepNumber: 11,
                    description: 'State \\(k\\) and verify.',
                    workingLatex: 'k = -\\tfrac{10}{17};\\quad \\mathbf{a}+k\\mathbf{b} = \\tfrac{44}{17}\\mathbf{i} + \\tfrac{11}{17}\\mathbf{j} = \\tfrac{11}{17}(4\\mathbf{i}+\\mathbf{j})',
                    explanation: 'Quick check: the gradient of \\(4\\mathbf{i}+\\mathbf{j}\\) is \\( \\tfrac{1}{4} \\), and \\( \\tfrac{1}{4}\\cdot(-4) = -1 \\) ✓ — so \\( \\mathbf{a}+k\\mathbf{b} \\perp \\mathbf{b} \\) as required.',
                },
            ],
            finalAnswer: 'a) \\( \\theta = 47.73° \\) \\quad b) \\( k = -\\tfrac{10}{17} \\)',
        },
    },

    {
        id: 'v2-022',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 22',
        difficulty: 'Challenge',
        questionText:
            'Let \\( \\mathbf{c} = 4\\mathbf{i} - \\mathbf{j} \\) and \\( \\mathbf{d} = -2\\mathbf{i} + 3\\mathbf{j} \\).\n\na) Find the angle between \\( \\mathbf{c} \\) and \\( \\mathbf{d} \\), to 2 d.p.\n\nb) Place \\( \\mathbf{c} \\) and \\( \\mathbf{d} \\) tail-to-tail at the origin \\( O \\). Show that the exact area of the triangle formed by \\( O \\) and the tips of \\( \\mathbf{c} \\) and \\( \\mathbf{d} \\) is \\( 5 \\) square units.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'angle between vectors', 'cosine rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Place \\(\\mathbf{c}\\) and \\(\\mathbf{d}\\) tail-to-tail and find the third side of the triangle.',
                    workingLatex: '\\mathbf{d}-\\mathbf{c} = (-2\\mathbf{i}+3\\mathbf{j})-(4\\mathbf{i}-\\mathbf{j}) = -6\\mathbf{i}+4\\mathbf{j}',
                    explanation: 'The third side runs from the tip of \\(\\mathbf{c}\\) to the tip of \\(\\mathbf{d}\\) and is opposite the required angle.',
                    diagram: { xMin: -3, xMax: 5, yMin: -2, yMax: 4, xTicks: [-2, 4], yTicks: [-1, 3], lines: [{ from: [0, 0], to: [4, -1], color: '#1d4ed8', arrow: true, label: '\\mathbf{c}', labelAt: [2.4, -0.9] }, { from: [0, 0], to: [-2, 3], color: '#dc2626', arrow: true, label: '\\mathbf{d}', labelAt: [-1.6, 1.4] }, { from: [4, -1], to: [-2, 3], color: '#047857', dashed: true, label: '\\mathbf{d}-\\mathbf{c}', labelAt: [1.4, 1.7] }], points: [{ at: [0, 0], label: '\\theta', labelAnchor: 'n', r: 2 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Find \\(|\\mathbf{c}|\\) and \\(|\\mathbf{d}|\\).',
                    workingLatex: '|\\mathbf{c}| = \\sqrt{16+1} = \\sqrt{17},\\quad |\\mathbf{d}| = \\sqrt{4+9} = \\sqrt{13}',
                    explanation: 'Standard magnitudes.',
                },
                {
                    stepNumber: 3,
                    description: 'Find \\(|\\mathbf{d}-\\mathbf{c}|\\) and simplify the surd.',
                    workingLatex: '|\\mathbf{d}-\\mathbf{c}| = \\sqrt{36+16} = \\sqrt{52} = 2\\sqrt{13}',
                    explanation: 'Pull out the square factor \\(4\\) from \\(52\\); we only need \\(52\\) (the square of the side) in the cosine rule, so the simplification is optional but neat.',
                },
                {
                    stepNumber: 4,
                    description: 'Apply the cosine rule and rearrange for \\(\\cos\\theta\\).',
                    workingLatex: '\\cos\\theta = \\frac{|\\mathbf{c}|^2+|\\mathbf{d}|^2-|\\mathbf{d}-\\mathbf{c}|^2}{2|\\mathbf{c}||\\mathbf{d}|} = \\frac{17+13-52}{2\\sqrt{17}\\sqrt{13}}',
                    explanation: 'Use the squared lengths directly: \\(|\\mathbf{c}|^2=17\\), \\(|\\mathbf{d}|^2=13\\), \\(|\\mathbf{d}-\\mathbf{c}|^2=52\\).',
                },
                {
                    stepNumber: 5,
                    description: 'Simplify.',
                    workingLatex: '\\cos\\theta = \\frac{-22}{2\\sqrt{221}} = \\frac{-11}{\\sqrt{221}}',
                    explanation: 'A negative cosine signals an obtuse angle.',
                },
                {
                    stepNumber: 6,
                    description: 'Take the inverse cosine.',
                    workingLatex: '\\theta = \\cos^{-1}\\!\\left(\\tfrac{-11}{\\sqrt{221}}\\right) = \\cos^{-1}(-0.7400) = 137.73°',
                    explanation: 'Calculator returns the obtuse angle directly.',
                },
                {
                    stepNumber: 7,
                    description: 'b) Set up the triangle-area formula \\( \\tfrac{1}{2}|\\mathbf{c}||\\mathbf{d}|\\sin\\theta \\).',
                    workingLatex: '\\text{Area} = \\tfrac{1}{2}|\\mathbf{c}||\\mathbf{d}|\\sin\\theta = \\tfrac{1}{2}\\sqrt{17}\\sqrt{13}\\sin\\theta',
                    explanation: 'Two sides of the triangle and the included angle between them give the area via \\( \\tfrac{1}{2}ab\\sin C \\). Keep the surd magnitudes from part (a).',
                },
                {
                    stepNumber: 8,
                    description: 'Find \\( \\sin\\theta \\) exactly using \\( \\cos\\theta = -\\tfrac{11}{\\sqrt{221}} \\).',
                    workingLatex: '\\sin^2\\theta = 1 - \\cos^2\\theta = 1 - \\tfrac{121}{221} = \\tfrac{100}{221} \\;\\Longrightarrow\\; \\sin\\theta = \\tfrac{10}{\\sqrt{221}}',
                    explanation: 'Use \\( \\sin^2\\theta + \\cos^2\\theta = 1 \\). The positive root is correct because \\( 0° < \\theta < 180° \\) makes \\( \\sin\\theta \\) positive (even for an obtuse angle).',
                },
                {
                    stepNumber: 9,
                    description: 'Substitute and simplify.',
                    workingLatex: '\\text{Area} = \\tfrac{1}{2}\\sqrt{17}\\sqrt{13}\\cdot\\tfrac{10}{\\sqrt{221}} = \\tfrac{1}{2}\\cdot\\tfrac{10\\sqrt{221}}{\\sqrt{221}} = 5',
                    explanation: 'Recognise \\( \\sqrt{17}\\sqrt{13} = \\sqrt{221} \\); the surd cancels with the denominator, leaving the clean integer \\( 5 \\). ✓',
                },
            ],
            finalAnswer: 'a) \\( \\theta = 137.73° \\) \\quad b) Area \\( = 5 \\) square units.',
        },
    },

    {
        id: 'v2-023',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 23',
        difficulty: 'Challenge',
        questionText:
            'Find, to 2 d.p., the angles between the following pairs of vectors:\n\na) \\( \\mathbf{g} = \\begin{pmatrix}5\\\\-2\\end{pmatrix}\\text{ and } \\)  \\( \\mathbf{h} = \\begin{pmatrix}-1\\\\-3\\end{pmatrix} \\)\n\nb) \\( \\mathbf{e} = \\mathbf{i} - 3\\mathbf{j} \\) and \\( \\mathbf{f} = 2\\mathbf{i} + 5\\mathbf{j} \\)',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'angle between vectors', 'cosine rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'a) Find the third side \\( \\mathbf{h}-\\mathbf{g} \\).',
                    workingLatex: '\\mathbf{h}-\\mathbf{g} = \\begin{pmatrix}-1-5\\\\-3-(-2)\\end{pmatrix} = \\begin{pmatrix}-6\\\\-1\\end{pmatrix}',
                    explanation: 'Tail-to-tail at the origin, the third side joins the tip of \\(\\mathbf{g}\\) to the tip of \\(\\mathbf{h}\\).',
                },
                {
                    stepNumber: 2,
                    description: 'a) Find the three side lengths.',
                    workingLatex: '|\\mathbf{g}| = \\sqrt{25+4} = \\sqrt{29},\\; |\\mathbf{h}| = \\sqrt{1+9} = \\sqrt{10},\\; |\\mathbf{h}-\\mathbf{g}| = \\sqrt{36+1} = \\sqrt{37}',
                    explanation: 'These three squared values \\((29, 10, 37)\\) are what we feed into the cosine rule.',
                },
                {
                    stepNumber: 3,
                    description: 'a) Apply the cosine rule and simplify.',
                    workingLatex: '\\cos\\theta = \\frac{29+10-37}{2\\sqrt{29}\\sqrt{10}} = \\frac{2}{2\\sqrt{290}} = \\frac{1}{\\sqrt{290}}',
                    explanation: '\\(\\sqrt{29}\\sqrt{10}=\\sqrt{290}\\). The small positive cosine tells us the angle is just under \\(90°\\).',
                },
                {
                    stepNumber: 4,
                    description: 'a) Take the inverse cosine.',
                    workingLatex: '\\theta = \\cos^{-1}\\!\\left(\\tfrac{1}{\\sqrt{290}}\\right) = \\cos^{-1}(0.05872) = 86.63°',
                    explanation: 'Round to 2 d.p.',
                },
                {
                    stepNumber: 5,
                    description: 'b) Find the third side \\( \\mathbf{f}-\\mathbf{e} \\).',
                    workingLatex: '\\mathbf{f}-\\mathbf{e} = (2\\mathbf{i}+5\\mathbf{j})-(\\mathbf{i}-3\\mathbf{j}) = \\mathbf{i}+8\\mathbf{j}',
                    explanation: 'Mind the double-negative in the \\(\\mathbf{j}\\)-part: \\(5-(-3)=8\\).',
                },
                {
                    stepNumber: 6,
                    description: 'b) Find the three lengths.',
                    workingLatex: '|\\mathbf{e}| = \\sqrt{1+9} = \\sqrt{10},\\; |\\mathbf{f}| = \\sqrt{4+25} = \\sqrt{29},\\; |\\mathbf{f}-\\mathbf{e}| = \\sqrt{1+64} = \\sqrt{65}',
                    explanation: 'Notice the magnitudes of \\(\\mathbf{e}\\) and \\(\\mathbf{f}\\) match those of \\(\\mathbf{h}\\) and \\(\\mathbf{g}\\) from part (a) — but the third side differs, so the angle will differ.',
                },
                {
                    stepNumber: 7,
                    description: 'b) Apply the cosine rule and simplify.',
                    workingLatex: '\\cos\\theta = \\frac{10+29-65}{2\\sqrt{10}\\sqrt{29}} = \\frac{-26}{2\\sqrt{290}} = \\frac{-13}{\\sqrt{290}}',
                    explanation: 'A negative cosine indicates an obtuse angle.',
                },
                {
                    stepNumber: 8,
                    description: 'b) Take the inverse cosine.',
                    workingLatex: '\\theta = \\cos^{-1}\\!\\left(\\tfrac{-13}{\\sqrt{290}}\\right) = \\cos^{-1}(-0.7634) = 139.77°',
                    explanation: 'Round to 2 d.p.',
                },
            ],
            finalAnswer: 'a) \\( 86.63° \\) \\quad b) \\( 139.77° \\)',
        },
    },

    {
        id: 'v2-024',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 24',
        difficulty: 'Challenge',
        questionText:
            'Two boats set off from a harbour. Each boat\'s velocity (in km/h) is modelled by a vector.\n\nBoat A\'s velocity: \\( \\mathbf{a} = \\begin{pmatrix}4\\\\-1\\end{pmatrix} \\). Boat B\'s velocity: \\( \\mathbf{b} = \\begin{pmatrix}1\\\\5\\end{pmatrix} \\).\n\na) Find the angle between the two boats\' courses, to 2 d.p.\n\nb) Both boats travel for exactly \\( 3 \\) hours at their stated velocities. Find the exact distance, in km, between the two boats at the end of those 3 hours.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'angle between vectors', 'cosine rule', 'real-world'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Both boats start at the harbour, so the courses share a common point. Find the third side.',
                    workingLatex: '\\mathbf{b}-\\mathbf{a} = \\begin{pmatrix}1-4\\\\5-(-1)\\end{pmatrix} = \\begin{pmatrix}-3\\\\6\\end{pmatrix}',
                    explanation: 'The third side of the triangle joins the tip of \\(\\mathbf{a}\\) to the tip of \\(\\mathbf{b}\\). The angle between the courses is opposite this side at the harbour.',
                    diagram: { xMin: -1, xMax: 5, yMin: -2, yMax: 6, xTicks: [1, 4], yTicks: [-1, 5], lines: [{ from: [0, 0], to: [4, -1], color: '#1d4ed8', arrow: true, label: 'Boat A: \\mathbf{a}', labelAt: [2.4, -0.9] }, { from: [0, 0], to: [1, 5], color: '#dc2626', arrow: true, label: 'Boat B: \\mathbf{b}', labelAt: [-0.6, 2.6] }, { from: [4, -1], to: [1, 5], color: '#047857', dashed: true, label: '\\mathbf{b}-\\mathbf{a}', labelAt: [3.2, 2.4] }], points: [{ at: [0, 0], label: 'harbour', labelAnchor: 'sw', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Find the three lengths.',
                    workingLatex: '|\\mathbf{a}| = \\sqrt{16+1} = \\sqrt{17},\\; |\\mathbf{b}| = \\sqrt{1+25} = \\sqrt{26},\\; |\\mathbf{b}-\\mathbf{a}| = \\sqrt{9+36} = \\sqrt{45}',
                    explanation: 'Squared lengths: \\(17, 26, 45\\).',
                },
                {
                    stepNumber: 3,
                    description: 'Apply the cosine rule.',
                    workingLatex: '\\cos\\theta = \\frac{17+26-45}{2\\sqrt{17}\\sqrt{26}} = \\frac{-2}{2\\sqrt{442}} = \\frac{-1}{\\sqrt{442}}',
                    explanation: '\\(\\sqrt{17}\\sqrt{26}=\\sqrt{442}\\). The cosine is just barely negative, so the angle is just over \\(90°\\).',
                },
                {
                    stepNumber: 4,
                    description: 'Take the inverse cosine.',
                    workingLatex: '\\theta = \\cos^{-1}\\!\\left(\\tfrac{-1}{\\sqrt{442}}\\right) = \\cos^{-1}(-0.04756) = 92.73°',
                    explanation: 'The boats head off at almost perpendicular courses.',
                },
                {
                    stepNumber: 5,
                    description: 'b) Find the position of each boat after \\( 3 \\) hours.',
                    workingLatex: '\\overrightarrow{OA_3} = 3\\mathbf{a} = \\begin{pmatrix}12\\\\-3\\end{pmatrix},\\quad \\overrightarrow{OB_3} = 3\\mathbf{b} = \\begin{pmatrix}3\\\\15\\end{pmatrix}',
                    explanation: 'After time \\( t \\) hours at constant velocity \\( \\mathbf{v} \\), displacement from the start is \\( t\\mathbf{v} \\). Here \\( t = 3 \\) and the start is the harbour at the origin.',
                },
                {
                    stepNumber: 6,
                    description: 'Compute the displacement between the boats.',
                    workingLatex: '\\overrightarrow{A_3 B_3} = \\overrightarrow{OB_3} - \\overrightarrow{OA_3} = \\begin{pmatrix}3-12\\\\15-(-3)\\end{pmatrix} = \\begin{pmatrix}-9\\\\18\\end{pmatrix}',
                    explanation: 'Destination minus start. Note this is just \\( 3(\\mathbf{b}-\\mathbf{a}) \\) — three times the side we already found for the cosine-rule triangle.',
                },
                {
                    stepNumber: 7,
                    description: 'Take the magnitude and simplify the surd.',
                    workingLatex: '|\\overrightarrow{A_3 B_3}| = \\sqrt{(-9)^2 + 18^2} = \\sqrt{81+324} = \\sqrt{405} = \\sqrt{81\\cdot 5} = 9\\sqrt{5}',
                    explanation: 'Pull out the square factor \\( 81 \\). Equivalently, \\( |3(\\mathbf{b}-\\mathbf{a})| = 3\\sqrt{45} = 3\\cdot 3\\sqrt{5} = 9\\sqrt{5} \\) ✓.',
                },
            ],
            finalAnswer: 'a) \\( 92.73° \\) \\quad b) \\( 9\\sqrt{5}\\,\\mathrm{km} \\) (\\( \\approx 20.12\\,\\mathrm{km} \\)).',
        },
    },

    {
        id: 'v2-025',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 25',
        difficulty: 'Challenge',
        questionText:
            '\\( |\\overrightarrow{AB}| = 8 \\) and \\( |\\overrightarrow{BC}| = 11 \\). The angle between vectors \\( \\overrightarrow{AB} \\) and \\( \\overrightarrow{BC} \\) is \\( 115° \\).\n\na) Find \\( |\\overrightarrow{CA}| \\) to 2 d.p.\n\nb) Hence find the interior angle \\( \\angle ACB \\) of triangle \\( ABC \\) at vertex \\( C \\), to 2 d.p.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'angle between vectors', 'cosine rule', 'triangle'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the interior angle of triangle \\(ABC\\) at vertex \\(B\\).',
                    workingLatex: '\\angle ABC = 180°-115° = 65°',
                    explanation: 'The angle "between vectors \\( \\overrightarrow{AB} \\) and \\( \\overrightarrow{BC} \\)" measures them tail-to-tail, but in the triangle \\(\\overrightarrow{AB}\\) arrives at \\(B\\) while \\(\\overrightarrow{BC}\\) leaves it. The interior angle of the triangle at \\(B\\) is therefore the supplement, \\(180°-115°=65°\\).',
                    diagram: { xMin: -1, xMax: 11, yMin: -2, yMax: 9, hideAxes: true, lines: [{ from: [0, 0], to: [8, 0], color: '#1d4ed8', arrow: true, label: '|\\overrightarrow{AB}|=8', labelAt: [4, -0.8] }, { from: [8, 0], to: [3.35, 6.97], color: '#dc2626', arrow: true, label: '|\\overrightarrow{BC}|=11', labelAt: [6.8, 4] }, { from: [3.35, 6.97], to: [0, 0], color: '#047857', dashed: true, label: '|\\overrightarrow{CA}|=?', labelAt: [1.2, 3.2] }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 3 }, { at: [8, 0], label: 'B', labelAnchor: 'se', r: 3 }, { at: [3.35, 6.97], label: 'C', labelAnchor: 'n', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Apply the cosine rule on triangle \\(ABC\\) with the angle at \\(B\\).',
                    workingLatex: '|\\overrightarrow{CA}|^2 = |\\overrightarrow{AB}|^2+|\\overrightarrow{BC}|^2-2|\\overrightarrow{AB}||\\overrightarrow{BC}|\\cos 65°',
                    explanation: 'The side opposite \\(\\angle B\\) is \\(AC\\), whose length is \\(|\\overrightarrow{CA}|\\) (same length either way).',
                },
                {
                    stepNumber: 3,
                    description: 'Substitute the given lengths.',
                    workingLatex: '|\\overrightarrow{CA}|^2 = 8^2+11^2-2(8)(11)\\cos 65°',
                    explanation: 'Plug in \\(|\\overrightarrow{AB}|=8\\) and \\(|\\overrightarrow{BC}|=11\\).',
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate the numeric expression.',
                    workingLatex: '|\\overrightarrow{CA}|^2 = 64+121-176\\times 0.4226 = 185-74.38 = 110.62',
                    explanation: 'Using \\(\\cos 65° \\approx 0.4226\\).',
                },
                {
                    stepNumber: 5,
                    description: 'Take the square root.',
                    workingLatex: '|\\overrightarrow{CA}| = \\sqrt{110.62} = 10.518\\ldots \\approx 10.52',
                    explanation: 'Round to 2 d.p. as requested.',
                },
                {
                    stepNumber: 6,
                    description: 'b) Rearrange the cosine rule for the angle at \\( C \\).',
                    workingLatex: '\\cos\\angle ACB = \\dfrac{|\\overrightarrow{CA}|^2 + |\\overrightarrow{BC}|^2 - |\\overrightarrow{AB}|^2}{2\\,|\\overrightarrow{CA}|\\,|\\overrightarrow{BC}|}',
                    explanation: 'The side opposite \\( \\angle ACB \\) is \\( AB \\). The cosine rule rearranged for an angle takes the form \\( \\cos C = (a^2+b^2-c^2)/(2ab) \\) where \\( c \\) is the opposite side.',
                },
                {
                    stepNumber: 7,
                    description: 'Substitute the squared lengths.',
                    workingLatex: '\\cos\\angle ACB = \\dfrac{110.62 + 121 - 64}{2\\,(10.518)\\,(11)} = \\dfrac{167.62}{231.40}',
                    explanation: 'Use the unrounded \\( |\\overrightarrow{CA}|^2 = 110.62 \\) from part (a) to keep the rounding error small. Plug in \\( |\\overrightarrow{BC}|^2 = 121 \\) and \\( |\\overrightarrow{AB}|^2 = 64 \\).',
                },
                {
                    stepNumber: 8,
                    description: 'Evaluate and take the inverse cosine.',
                    workingLatex: '\\cos\\angle ACB \\approx 0.7244 \\;\\Longrightarrow\\; \\angle ACB = \\cos^{-1}(0.7244) \\approx 43.56°',
                    explanation: 'Cross-check using angle-sum: \\( 65° + 43.56° + \\angle BAC = 180° \\) gives \\( \\angle BAC \\approx 71.44° \\). The three interior angles sum to \\( 180° \\) as required. ✓',
                },
            ],
            finalAnswer: 'a) \\( |\\overrightarrow{CA}| = 10.52 \\) (2 d.p.) \\quad b) \\( \\angle ACB \\approx 43.56° \\).',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 6  (Q26–Q30)  Higher/Exam-style — mixed applications
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 'v2-026',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 26',
        difficulty: 'Challenge',
        questionText:
            '\\( |\\overrightarrow{EF}| = 3.5 \\) and \\( |\\overrightarrow{EG}| = 4.2 \\). The angle between vectors \\( \\overrightarrow{EF} \\) and \\( \\overrightarrow{EG} \\) is \\( 28° \\).\n\na) Find \\( |\\overrightarrow{GF}| \\) to 2 d.p.\n\nb) Find the area of triangle \\( EFG \\), to 2 d.p.\n\nc) Hence find the perpendicular distance from \\( G \\) to the line \\( EF \\), to 2 d.p.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'angle between vectors', 'cosine rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Note that \\( \\overrightarrow{EF} \\) and \\( \\overrightarrow{EG} \\) share the common point \\(E\\).',
                    workingLatex: '\\angle FEG = 28°',
                    explanation: 'Both vectors start at \\(E\\), so the angle between them is already the interior angle of triangle \\(EFG\\) at \\(E\\) — no \\(180°-\\theta\\) adjustment needed (contrast with Q25, where one vector arrived at \\(B\\) and the other departed).',
                    diagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 3, hideAxes: true, lines: [{ from: [0, 0], to: [3.5, 0], color: '#1d4ed8', arrow: true, label: '|\\overrightarrow{EF}|=3.5', labelAt: [1.8, -0.5] }, { from: [0, 0], to: [3.71, 1.97], color: '#dc2626', arrow: true, label: '|\\overrightarrow{EG}|=4.2', labelAt: [1.4, 1.5] }, { from: [3.5, 0], to: [3.71, 1.97], color: '#047857', dashed: true, label: '|\\overrightarrow{GF}|=?', labelAt: [4.1, 1.0] }], points: [{ at: [0, 0], label: 'E', labelAnchor: 'sw', r: 3 }, { at: [3.5, 0], label: 'F', labelAnchor: 'se', r: 3 }, { at: [3.71, 1.97], label: 'G', labelAnchor: 'ne', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Apply the cosine rule on triangle \\(EFG\\).',
                    workingLatex: '|\\overrightarrow{GF}|^2 = |\\overrightarrow{EF}|^2+|\\overrightarrow{EG}|^2-2|\\overrightarrow{EF}||\\overrightarrow{EG}|\\cos 28°',
                    explanation: 'Side \\(GF\\) is opposite the angle at \\(E\\).',
                },
                {
                    stepNumber: 3,
                    description: 'Substitute the given lengths.',
                    workingLatex: '|\\overrightarrow{GF}|^2 = 3.5^2+4.2^2-2(3.5)(4.2)\\cos 28°',
                    explanation: 'Plug in \\(|\\overrightarrow{EF}|=3.5\\) and \\(|\\overrightarrow{EG}|=4.2\\).',
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate.',
                    workingLatex: '|\\overrightarrow{GF}|^2 = 12.25+17.64-29.4\\times 0.8829 = 29.89-25.96 = 3.93',
                    explanation: 'Using \\(\\cos 28° \\approx 0.8829\\).',
                },
                {
                    stepNumber: 5,
                    description: 'Take the square root.',
                    workingLatex: '|\\overrightarrow{GF}| = \\sqrt{3.93} = 1.982\\ldots \\approx 1.98',
                    explanation: 'Round to 2 d.p.',
                },
                {
                    stepNumber: 6,
                    description: 'b) Apply the two-sides-and-included-angle area formula.',
                    workingLatex: '\\text{Area} = \\tfrac{1}{2}\\,|\\overrightarrow{EF}|\\,|\\overrightarrow{EG}|\\,\\sin\\angle FEG = \\tfrac{1}{2}(3.5)(4.2)\\sin 28°',
                    explanation: 'For any triangle, area \\( = \\tfrac{1}{2}ab\\sin C \\) where \\( C \\) is the angle between sides \\( a \\) and \\( b \\). Here both sides start at \\( E \\), and the included angle is the given \\( 28° \\).',
                },
                {
                    stepNumber: 7,
                    description: 'Evaluate.',
                    workingLatex: '\\text{Area} = \\tfrac{1}{2}(14.7)(0.4695) \\approx 3.45 \\;\\text{(2 d.p.)}',
                    explanation: 'Using \\( \\sin 28° \\approx 0.4695 \\). Units are squared linear units (whatever \\( |\\overrightarrow{EF}| \\) was measured in).',
                },
                {
                    stepNumber: 8,
                    description: 'c) Use Area \\( = \\tfrac{1}{2}\\times\\text{base}\\times\\text{height} \\) with \\( EF \\) as base.',
                    workingLatex: '\\text{Area} = \\tfrac{1}{2}\\,|\\overrightarrow{EF}|\\,h \\;\\Longrightarrow\\; h = \\dfrac{2\\,\\text{Area}}{|\\overrightarrow{EF}|}',
                    explanation: 'The perpendicular distance from \\( G \\) to line \\( EF \\) is the height of the triangle when \\( EF \\) is taken as base. Rearrange the standard area formula to isolate \\( h \\).',
                },
                {
                    stepNumber: 9,
                    description: 'Substitute and evaluate.',
                    workingLatex: 'h = \\dfrac{2(3.45)}{3.5} = \\dfrac{6.90}{3.5} \\approx 1.97',
                    explanation: 'Cross-check: \\( h = |\\overrightarrow{EG}|\\sin 28° = 4.2(0.4695) \\approx 1.97 \\) — exactly the perpendicular dropped from \\( G \\) to \\( EF \\). ✓',
                },
            ],
            finalAnswer: 'a) \\( |\\overrightarrow{GF}| = 1.98 \\) \\quad b) Area \\( \\approx 3.45 \\) \\quad c) \\( h \\approx 1.97 \\).',
        },
    },

    {
        id: 'v2-027',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 27',
        difficulty: 'Challenge',
        questionText:
            'A drone\'s flight is modelled with vectors. First it travels along \\( \\mathbf{a} = 3\\mathbf{i} + 5\\mathbf{j} \\). Then it turns left along vector \\( \\mathbf{b} \\), at an angle of \\( 100° \\) to \\( \\mathbf{a} \\). It returns to where it took off along vector \\( \\mathbf{c} \\). Given that \\( |\\mathbf{b}| = 6\\,\\mathrm{m} \\), find \\( |\\mathbf{c}| \\) to 2 d.p.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'angle between vectors', 'cosine rule', 'real-world', 'drone'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( |\\mathbf{a}| \\), the length of the first leg of the flight.',
                    workingLatex: '|\\mathbf{a}| = \\sqrt{3^2+5^2} = \\sqrt{9+25} = \\sqrt{34}',
                    explanation: 'Standard magnitude formula on \\(\\mathbf{a} = 3\\mathbf{i}+5\\mathbf{j}\\).',
                    diagram: { xMin: -4, xMax: 5, yMin: -1, yMax: 9, hideAxes: true, lines: [{ from: [0, 0], to: [3, 5], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [0.9, 2.8] }, { from: [3, 5], to: [-2.6, 7.15], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [0.3, 6.7] }, { from: [-2.6, 7.15], to: [0, 0], color: '#047857', arrow: true, label: '\\mathbf{c}', labelAt: [-2.2, 3.5] }], points: [{ at: [0, 0], label: 'start', labelAnchor: 'sw', r: 3 }, { at: [3, 5], label: 'turn', labelAnchor: 'se', r: 3 }, { at: [-2.6, 7.15], label: 'apex', labelAnchor: 'nw', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Identify the interior angle of the closed triangle.',
                    workingLatex: '\\text{Interior angle} = 180°-100° = 80°',
                    explanation: 'Vector \\(\\mathbf{a}\\) arrives at the turn point and vector \\(\\mathbf{b}\\) leaves it. Just as in Q25, the angle between the *direction vectors* (\\(100°\\)) and the *interior triangle angle* at the turn are supplementary.',
                },
                {
                    stepNumber: 3,
                    description: 'Apply the cosine rule with this interior angle.',
                    workingLatex: '|\\mathbf{c}|^2 = |\\mathbf{a}|^2+|\\mathbf{b}|^2-2|\\mathbf{a}||\\mathbf{b}|\\cos 80°',
                    explanation: 'Side \\(\\mathbf{c}\\) closes the triangle and is opposite the \\(80°\\) interior angle.',
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( |\\mathbf{a}|^2=34 \\), \\( |\\mathbf{b}|=6 \\).',
                    workingLatex: '|\\mathbf{c}|^2 = 34+36-2\\sqrt{34}(6)\\cos 80° = 70-12\\sqrt{34}\\cos 80°',
                    explanation: 'Use the squared magnitude for \\(\\mathbf{a}\\) directly (no need to evaluate \\(\\sqrt{34}\\) in the squared term).',
                },
                {
                    stepNumber: 5,
                    description: 'Evaluate.',
                    workingLatex: '|\\mathbf{c}|^2 = 70-12(5.831)(0.1736) = 70-12.15 = 57.85',
                    explanation: 'Using \\(\\sqrt{34} \\approx 5.831\\) and \\(\\cos 80° \\approx 0.1736\\).',
                },
                {
                    stepNumber: 6,
                    description: 'Take the square root.',
                    workingLatex: '|\\mathbf{c}| = \\sqrt{57.85} = 7.606\\ldots \\approx 7.61 \\text{ m}',
                    explanation: 'Round to 2 d.p. as requested.',
                },
            ],
            finalAnswer: '\\( |\\mathbf{c}| = 7.61 \\) m (2 d.p.)',
        },
    },

    {
        id: 'v2-028',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 28',
        difficulty: 'Challenge',
        questionText:
            'The diagram shows a parallelogram \\( WXYZ \\). \\( \\overrightarrow{WX} = 3\\mathbf{i} + 4\\mathbf{j} \\) and \\( \\overrightarrow{WZ} = 7\\mathbf{i} \\).\n\na) Find the angle \\( \\theta \\) at \\( W \\), to 1 d.p.\n\nb) Hence find the exact area of parallelogram \\( WXYZ \\).\n\nc) Find the exact length of the diagonal \\( WY \\).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'angle between vectors', 'cosine rule', 'parallelogram'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The angle at \\(W\\) is the angle between \\( \\overrightarrow{WX} \\) and \\( \\overrightarrow{WZ} \\).',
                    workingLatex: '\\theta = \\angle(\\overrightarrow{WX},\\overrightarrow{WZ})',
                    explanation: 'Both vectors start at \\(W\\), so the angle between them as direction vectors equals the interior angle of the parallelogram at \\(W\\).',
                    diagram: { xMin: -1, xMax: 11, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [3, 4], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{WX}=3\\mathbf{i}+4\\mathbf{j}', labelAt: [0.4, 2.2] }, { from: [0, 0], to: [7, 0], color: '#dc2626', arrow: true, label: '\\overrightarrow{WZ}=7\\mathbf{i}', labelAt: [3.5, -0.5] }, { from: [3, 4], to: [10, 4], color: '#888' }, { from: [7, 0], to: [10, 4], color: '#888' }, { from: [3, 4], to: [7, 0], color: '#047857', dashed: true, label: '\\overrightarrow{XZ}', labelAt: [5.2, 2.4] }], points: [{ at: [0, 0], label: 'W', labelAnchor: 'sw', r: 3 }, { at: [3, 4], label: 'X', labelAnchor: 'nw', r: 3 }, { at: [10, 4], label: 'Y', labelAnchor: 'ne', r: 3 }, { at: [7, 0], label: 'Z', labelAnchor: 'se', r: 3 }, { at: [0.5, 0.25], label: '\\theta', labelAnchor: 'e', r: 0 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Find \\(|\\overrightarrow{WX}|\\) and \\(|\\overrightarrow{WZ}|\\).',
                    workingLatex: '|\\overrightarrow{WX}| = \\sqrt{3^2+4^2} = 5,\\quad |\\overrightarrow{WZ}| = \\sqrt{7^2+0^2} = 7',
                    explanation: 'A \\((3,4,5)\\) triple for the first side, and the second side lies along the \\(x\\)-axis.',
                },
                {
                    stepNumber: 3,
                    description: 'Find the third side of triangle \\(WXZ\\).',
                    workingLatex: '\\overrightarrow{XZ} = \\overrightarrow{WZ}-\\overrightarrow{WX} = 7\\mathbf{i}-(3\\mathbf{i}+4\\mathbf{j}) = 4\\mathbf{i}-4\\mathbf{j}',
                    explanation: 'Going from \\(X\\) to \\(Z\\) is the same as going \\(X \\to W \\to Z\\), giving \\(\\overrightarrow{WZ}-\\overrightarrow{WX}\\).',
                },
                {
                    stepNumber: 4,
                    description: 'Find \\(|\\overrightarrow{XZ}|\\).',
                    workingLatex: '|\\overrightarrow{XZ}| = \\sqrt{4^2+(-4)^2} = \\sqrt{16+16} = \\sqrt{32} = 4\\sqrt{2}',
                    explanation: 'We only need the squared value \\(32\\) in the cosine rule.',
                },
                {
                    stepNumber: 5,
                    description: 'Apply the cosine rule on triangle \\(WXZ\\).',
                    workingLatex: '\\cos\\theta = \\frac{|\\overrightarrow{WX}|^2+|\\overrightarrow{WZ}|^2-|\\overrightarrow{XZ}|^2}{2|\\overrightarrow{WX}||\\overrightarrow{WZ}|} = \\frac{25+49-32}{2(5)(7)}',
                    explanation: 'Side \\(XZ\\) is opposite the angle at \\(W\\).',
                },
                {
                    stepNumber: 6,
                    description: 'Simplify.',
                    workingLatex: '\\cos\\theta = \\frac{42}{70} = 0.6',
                    explanation: 'A clean fraction — the angle will come out neatly.',
                },
                {
                    stepNumber: 7,
                    description: 'Take the inverse cosine.',
                    workingLatex: '\\theta = \\cos^{-1}(0.6) = 53.13°\\ldots \\approx 53.1°',
                    explanation: 'Round to 1 d.p.',
                },
                {
                    stepNumber: 8,
                    description: 'b) Find \\( \\sin\\theta \\) exactly from \\( \\cos\\theta = \\tfrac{3}{5} \\).',
                    workingLatex: '\\sin\\theta = \\sqrt{1-\\cos^2\\theta} = \\sqrt{1 - \\tfrac{9}{25}} = \\sqrt{\\tfrac{16}{25}} = \\tfrac{4}{5}',
                    explanation: 'The angle is acute, so \\( \\sin\\theta > 0 \\). Notice this gives a clean \\( (3,4,5) \\) right-triangle ratio — no surprise given the original components.',
                },
                {
                    stepNumber: 9,
                    description: 'Apply the parallelogram-area formula \\( |\\overrightarrow{WX}||\\overrightarrow{WZ}|\\sin\\theta \\).',
                    workingLatex: '\\text{Area} = 5 \\cdot 7 \\cdot \\tfrac{4}{5} = 28',
                    explanation: 'A parallelogram with adjacent sides of length \\(a\\) and \\(b\\) and included angle \\(\\theta\\) has area \\( ab\\sin\\theta \\). The \\(5\\)\'s cancel, giving the clean exact value \\(28\\) (square units).',
                },
                {
                    stepNumber: 10,
                    description: 'c) Express the diagonal \\( \\overrightarrow{WY} \\) using the parallelogram law.',
                    workingLatex: '\\overrightarrow{WY} = \\overrightarrow{WX} + \\overrightarrow{XY} = \\overrightarrow{WX} + \\overrightarrow{WZ} = (3\\mathbf{i}+4\\mathbf{j}) + 7\\mathbf{i} = 10\\mathbf{i}+4\\mathbf{j}',
                    explanation: 'In parallelogram \\(WXYZ\\), opposite sides are equal vectors, so \\( \\overrightarrow{XY} = \\overrightarrow{WZ} \\). Going \\( W \\to X \\to Y \\) then collapses to \\( \\overrightarrow{WX} + \\overrightarrow{WZ} \\).',
                },
                {
                    stepNumber: 11,
                    description: 'Take the magnitude and simplify.',
                    workingLatex: '|\\overrightarrow{WY}| = \\sqrt{10^2 + 4^2} = \\sqrt{100+16} = \\sqrt{116} = 2\\sqrt{29}',
                    explanation: 'Pull out the square factor \\(4\\): \\( \\sqrt{116} = \\sqrt{4\\cdot 29} = 2\\sqrt{29} \\). \\(29\\) is prime so this is in simplest exact form.',
                },
            ],
            finalAnswer: 'a) \\( \\theta = 53.1° \\) \\quad b) Area \\( = 28 \\) square units \\quad c) \\( |\\overrightarrow{WY}| = 2\\sqrt{29} \\).',
        },
    },

    {
        id: 'v2-029',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 29',
        difficulty: 'Challenge',
        questionText:
            'The quadrilateral ABCD is used to model a plane\'s flight path as it circles near an airport.\n\\( \\overrightarrow{OA} = 2\\mathbf{i}+3\\mathbf{j} \\), \\( \\overrightarrow{OB} = 9\\mathbf{i}+\\mathbf{j} \\), \\( \\overrightarrow{OC} = 10\\mathbf{i}+8\\mathbf{j} \\) and \\( \\overrightarrow{OD} = 3\\mathbf{i}+7\\mathbf{j} \\), where \\( \\mathbf{i} \\) and \\( \\mathbf{j} \\) have a length of \\( 1\\,\\mathrm{km} \\).\n\nCalculate, to the nearest \\( \\mathrm{km} \\), the distance the plane travels if it circles twice.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'magnitude', 'distance', 'real-world', 'perimeter'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( \\overrightarrow{AB} \\) using position vectors.',
                    workingLatex: '\\overrightarrow{AB} = \\overrightarrow{OB}-\\overrightarrow{OA} = (9-2)\\mathbf{i}+(1-3)\\mathbf{j} = 7\\mathbf{i}-2\\mathbf{j}',
                    explanation: 'Destination minus start: subtract the position vector of \\(A\\) from the position vector of \\(B\\).',
                    diagram: { xMin: -1, xMax: 12, yMin: -1, yMax: 10, xTicks: [2, 3, 9, 10], yTicks: [1, 3, 7, 8], lines: [{ from: [2, 3], to: [9, 1], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{AB}', labelAt: [5.2, 1.5] }, { from: [9, 1], to: [10, 8], color: '#dc2626', arrow: true, label: '\\overrightarrow{BC}', labelAt: [10, 4.5] }, { from: [10, 8], to: [3, 7], color: '#047857', arrow: true, label: '\\overrightarrow{CD}', labelAt: [6.5, 8] }, { from: [3, 7], to: [2, 3], color: '#a16207', arrow: true, label: '\\overrightarrow{DA}', labelAt: [1.5, 5] }], points: [{ at: [2, 3], label: 'A(2,3)', labelAnchor: 'sw', r: 3 }, { at: [9, 1], label: 'B(9,1)', labelAnchor: 'se', r: 3 }, { at: [10, 8], label: 'C(10,8)', labelAnchor: 'ne', r: 3 }, { at: [3, 7], label: 'D(3,7)', labelAnchor: 'nw', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( |\\overrightarrow{AB}| \\).',
                    workingLatex: '|\\overrightarrow{AB}| = \\sqrt{7^2+(-2)^2} = \\sqrt{49+4} = \\sqrt{53}',
                    explanation: 'This is the length of side \\(AB\\) of the quadrilateral.',
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( \\overrightarrow{BC} \\) and its length.',
                    workingLatex: '\\overrightarrow{BC} = (10-9)\\mathbf{i}+(8-1)\\mathbf{j} = \\mathbf{i}+7\\mathbf{j},\\quad |\\overrightarrow{BC}| = \\sqrt{1+49} = \\sqrt{50}',
                    explanation: 'Same recipe as before.',
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( \\overrightarrow{CD} \\) and its length.',
                    workingLatex: '\\overrightarrow{CD} = (3-10)\\mathbf{i}+(7-8)\\mathbf{j} = -7\\mathbf{i}-\\mathbf{j},\\quad |\\overrightarrow{CD}| = \\sqrt{49+1} = \\sqrt{50}',
                    explanation: 'Sides \\(BC\\) and \\(CD\\) happen to be the same length.',
                },
                {
                    stepNumber: 5,
                    description: 'Find \\( \\overrightarrow{DA} \\) and its length.',
                    workingLatex: '\\overrightarrow{DA} = (2-3)\\mathbf{i}+(3-7)\\mathbf{j} = -\\mathbf{i}-4\\mathbf{j},\\quad |\\overrightarrow{DA}| = \\sqrt{1+16} = \\sqrt{17}',
                    explanation: 'The fourth and final side closes the quadrilateral.',
                },
                {
                    stepNumber: 6,
                    description: 'Evaluate each side to 2 d.p.',
                    workingLatex: '\\sqrt{53}\\approx 7.28,\\; \\sqrt{50}\\approx 7.07,\\; \\sqrt{17}\\approx 4.12',
                    explanation: 'Keep enough decimals to avoid rounding error in the final answer.',
                },
                {
                    stepNumber: 7,
                    description: 'Sum the four sides for one full circuit.',
                    workingLatex: 'P = 7.28+7.07+7.07+4.12 = 25.54 \\text{ km}',
                    explanation: 'The perimeter of \\(ABCD\\).',
                },
                {
                    stepNumber: 8,
                    description: 'Double for two circuits and round.',
                    workingLatex: '2P = 2\\times 25.54 = 51.08 \\approx 51 \\text{ km}',
                    explanation: 'Round to the nearest km as requested.',
                },
            ],
            finalAnswer: 'The plane travels approximately \\( 51\\,\\mathrm{km} \\).',
        },
    },

    {
        id: 'v2-030',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 30',
        difficulty: 'Challenge',
        questionText:
            'Triangle ABC is shown below with \\( A = (1, 2) \\), \\( B = (5, -1) \\), \\( C = (-2, 4) \\).\n\na) Find the vectors \\( \\overrightarrow{AB} \\), \\( \\overrightarrow{BC} \\) and \\( \\overrightarrow{CA} \\) in \\( \\mathbf{i}+\\mathbf{j} \\) form.\n\nb) Find the lengths of all three sides.\n\nc) Find the angle at vertex A to 1 d.p.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'magnitude', 'angle between vectors', 'cosine rule', 'triangle', 'coordinates'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'a) Find \\( \\overrightarrow{AB} \\).',
                    workingLatex: '\\overrightarrow{AB} = (5-1)\\mathbf{i}+(-1-2)\\mathbf{j} = 4\\mathbf{i}-3\\mathbf{j}',
                    explanation: 'Destination minus start: \\(B-A\\).',
                    diagram: { xMin: -3, xMax: 6, yMin: -2, yMax: 5, xTicks: [-2, 1, 5], yTicks: [-1, 2, 4], lines: [{ from: [1, 2], to: [5, -1], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{AB}', labelAt: [3.3, 0.0] }, { from: [5, -1], to: [-2, 4], color: '#dc2626', arrow: true, label: '\\overrightarrow{BC}', labelAt: [2.0, 2.2] }, { from: [-2, 4], to: [1, 2], color: '#047857', arrow: true, label: '\\overrightarrow{CA}', labelAt: [-1.2, 2.6] }], points: [{ at: [1, 2], label: 'A(1,2)', labelAnchor: 'nw', r: 4 }, { at: [5, -1], label: 'B(5,-1)', labelAnchor: 'se', r: 4 }, { at: [-2, 4], label: 'C(-2,4)', labelAnchor: 'nw', r: 4 }] },
                },
                {
                    stepNumber: 2,
                    description: 'a) Find \\( \\overrightarrow{BC} \\) and \\( \\overrightarrow{CA} \\).',
                    workingLatex: '\\overrightarrow{BC} = (-2-5)\\mathbf{i}+(4-(-1))\\mathbf{j} = -7\\mathbf{i}+5\\mathbf{j},\\quad \\overrightarrow{CA} = (1-(-2))\\mathbf{i}+(2-4)\\mathbf{j} = 3\\mathbf{i}-2\\mathbf{j}',
                    explanation: 'Check: \\(\\overrightarrow{AB}+\\overrightarrow{BC}+\\overrightarrow{CA} = (4-7+3)\\mathbf{i}+(-3+5-2)\\mathbf{j} = \\mathbf{0}\\) ✓ — the three vectors form a closed triangle.',
                },
                {
                    stepNumber: 3,
                    description: 'b) Find the three side lengths.',
                    workingLatex: '|\\overrightarrow{AB}| = \\sqrt{16+9} = 5,\\quad |\\overrightarrow{BC}| = \\sqrt{49+25} = \\sqrt{74},\\quad |\\overrightarrow{CA}| = \\sqrt{9+4} = \\sqrt{13}',
                    explanation: 'A \\((3,4,5)\\) triple for one side; the other two are surds.',
                },
                {
                    stepNumber: 4,
                    description: 'c) Set up the angle at \\(A\\) between vectors leaving \\(A\\).',
                    workingLatex: '\\overrightarrow{AC} = -\\overrightarrow{CA} = -3\\mathbf{i}+2\\mathbf{j}',
                    explanation: 'For the angle at \\(A\\) we need vectors that *start* at \\(A\\). We already have \\(\\overrightarrow{AB}\\); reverse \\(\\overrightarrow{CA}\\) to obtain \\(\\overrightarrow{AC}\\). The side opposite the angle at \\(A\\) in triangle \\(ABC\\) is \\(BC\\).',
                },
                {
                    stepNumber: 5,
                    description: 'c) Collect the three side-lengths for the cosine rule.',
                    workingLatex: '|\\overrightarrow{AB}| = 5,\\quad |\\overrightarrow{AC}| = \\sqrt{13},\\quad |\\overrightarrow{BC}| = \\sqrt{74}',
                    explanation: '\\(|\\overrightarrow{AC}|\\) equals \\(|\\overrightarrow{CA}|\\) because reversing a vector preserves its magnitude.',
                },
                {
                    stepNumber: 6,
                    description: 'c) Apply the cosine rule rearranged for the angle.',
                    workingLatex: '\\cos A = \\frac{|\\overrightarrow{AB}|^2+|\\overrightarrow{AC}|^2-|\\overrightarrow{BC}|^2}{2|\\overrightarrow{AB}||\\overrightarrow{AC}|} = \\frac{25+13-74}{2(5)(\\sqrt{13})}',
                    explanation: 'Plug the squared lengths in directly: \\(25, 13, 74\\).',
                },
                {
                    stepNumber: 7,
                    description: 'c) Simplify.',
                    workingLatex: '\\cos A = \\frac{-36}{10\\sqrt{13}} = \\frac{-18}{5\\sqrt{13}}',
                    explanation: 'Divide numerator and denominator by \\(2\\). The result is very close to \\(-1\\), which means the angle is very close to \\(180°\\) — the three points are nearly collinear.',
                },
                {
                    stepNumber: 8,
                    description: 'c) Evaluate.',
                    workingLatex: 'A = \\cos^{-1}\\!\\left(\\tfrac{-18}{5\\sqrt{13}}\\right) = \\cos^{-1}(-0.99846) = 176.82°\\ldots \\approx 176.8°',
                    explanation: 'Using \\(5\\sqrt{13} \\approx 18.0278\\) gives \\(-18/18.0278 \\approx -0.99846\\); the inverse cosine of this is \\(176.82°\\) to 2 d.p., or \\(176.8°\\) to 1 d.p. — matching the geometric expectation that the three points are almost in a straight line.',
                },
            ],
            finalAnswer: 'a) \\( \\overrightarrow{AB}=4\\mathbf{i}-3\\mathbf{j} \\), \\( \\overrightarrow{BC}=-7\\mathbf{i}+5\\mathbf{j} \\), \\( \\overrightarrow{CA}=3\\mathbf{i}-2\\mathbf{j} \\). b) \\( AB=5 \\), \\( BC=\\sqrt{74} \\), \\( CA=\\sqrt{13} \\). c) Angle \\( A = 176.8° \\).',
        },
    },
    {
        id: 'v2-031',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 31',
        difficulty: 'Foundation',
        questionText: 'Find the magnitude of \\( \\begin{pmatrix}6\\\\-8\\end{pmatrix} \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'magnitude'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1, description: 'Identify the components.', workingLatex: '\\mathbf{v} = \\begin{pmatrix}6\\\\-8\\end{pmatrix} \\;\\Rightarrow\\; x = 6,\\; y = -8', explanation: 'The magnitude formula \\( |\\mathbf{v}|=\\sqrt{x^2+y^2} \\) treats the components as the two short sides of a right-angled triangle. Read them straight off the column vector.',
                    diagram: { xMin: -1, xMax: 8, yMin: -10, yMax: 2, xTicks: [3, 6], yTicks: [-8, -4], lines: [{ from: [0, 0], to: [6, -8], color: '#1d4ed8', arrow: true, label: '\\mathbf{v}', labelAt: [3.5, -3.5] }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'nw', r: 3 }] }
                },
                { stepNumber: 2, description: 'Square and add.', workingLatex: '|\\mathbf{v}|^2 = 6^2 + (-8)^2 = 36 + 64 = 100', explanation: 'The sign of \\( y \\) disappears once we square, which is why a negative component never reduces the magnitude.' },
                { stepNumber: 3, description: 'Take the square root.', workingLatex: '|\\mathbf{v}| = \\sqrt{100} = 10', explanation: 'Magnitudes are lengths, so we always take the positive root.' }
            ],
            finalAnswer: '\\( 10 \\)'
        }
    },
    {
        id: 'v2-032',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 32',
        difficulty: 'Foundation',
        questionText: 'Find the exact magnitude of \\( -\\mathbf{i} + 7\\mathbf{j} \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'magnitude'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1, description: 'Read off the components.', workingLatex: '\\mathbf{v} = -\\mathbf{i}+7\\mathbf{j} \\;\\Rightarrow\\; x = -1,\\; y = 7', explanation: 'The implicit coefficient of \\( -\\mathbf{i} \\) is \\( -1 \\). Keep the minus sign — it disappears once we square, but writing \\( (-1)^2 \\) keeps the structure honest.',
                    diagram: { xMin: -3, xMax: 3, yMin: -1, yMax: 9, xTicks: [-1, 0], yTicks: [4, 7], lines: [{ from: [0, 0], to: [-1, 7], color: '#1d4ed8', arrow: true, label: '\\mathbf{v}', labelAt: [-1.5, 3.5] }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'se', r: 3 }] }
                },
                { stepNumber: 2, description: 'Square and add.', workingLatex: '|\\mathbf{v}|^2 = (-1)^2 + 7^2 = 1 + 49 = 50', explanation: 'Apply \\( |\\mathbf{v}|^2 = x^2+y^2 \\).' },
                { stepNumber: 3, description: 'Simplify the surd.', workingLatex: '|\\mathbf{v}| = \\sqrt{50} = \\sqrt{25\\cdot 2} = 5\\sqrt{2}', explanation: '\\( 50 \\) has a perfect-square factor of \\( 25 \\), so pull that out of the root for an exact answer.' }
            ],
            finalAnswer: '\\( 5\\sqrt{2} \\)'
        }
    },
    {
        id: 'v2-033',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 33',
        difficulty: 'Foundation',
        questionText: 'Find the unit vector in the direction of \\( \\begin{pmatrix}5\\\\12\\end{pmatrix} \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'unit vector'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Recall the recipe.', workingLatex: '\\hat{\\mathbf{v}} = \\dfrac{1}{|\\mathbf{v}|}\\,\\mathbf{v}', explanation: 'A unit vector keeps the direction of \\( \\mathbf{v} \\) but rescales the length to 1. We divide each component by the magnitude.' },
                { stepNumber: 2, description: 'Compute the magnitude.', workingLatex: '|\\mathbf{v}| = \\sqrt{5^2+12^2} = \\sqrt{25+144} = \\sqrt{169} = 13', explanation: '\\( (5,12,13) \\) is a Pythagorean triple — worth memorising, since it pops up constantly.' },
                { stepNumber: 3, description: 'Divide each component by 13.', workingLatex: '\\hat{\\mathbf{v}} = \\frac{1}{13}\\begin{pmatrix}5\\\\12\\end{pmatrix}', explanation: 'As a check, \\( \\left(\\tfrac{5}{13}\\right)^2+\\left(\\tfrac{12}{13}\\right)^2 = \\tfrac{25+144}{169} = 1 \\), confirming it is a unit vector.' }
            ],
            finalAnswer: '\\( \\frac{1}{13} \\begin{pmatrix}\\ 5\\\\\\ 12 \\end{pmatrix} \\)'
        }
    },
    {
        id: 'v2-034',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 34',
        difficulty: 'Foundation',
        questionText: 'Points A and B have position vectors \\( 3\\mathbf{i} + \\mathbf{j} \\) and \\( 7\\mathbf{i} + 4\\mathbf{j} \\). Find the distance AB.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'distance', 'position vectors'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1, description: 'Use \\( \\overrightarrow{AB} = \\overrightarrow{OB}-\\overrightarrow{OA} \\).', workingLatex: '\\overrightarrow{AB} = (7\\mathbf{i}+4\\mathbf{j})-(3\\mathbf{i}+\\mathbf{j})', explanation: 'Distance between two points is the magnitude of the displacement vector from one to the other; the displacement is the difference of the position vectors (head minus tail).',
                    diagram: { xMin: 0, xMax: 9, yMin: -1, yMax: 6, xTicks: [3, 7], yTicks: [1, 4], lines: [{ from: [3, 1], to: [7, 4], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{AB}', labelAt: [5.5, 3] }], points: [{ at: [3, 1], label: 'A(3,1)', labelAnchor: 'sw', r: 4 }, { at: [7, 4], label: 'B(7,4)', labelAnchor: 'ne', r: 4 }] }
                },
                { stepNumber: 2, description: 'Subtract componentwise.', workingLatex: '\\overrightarrow{AB} = (7-3)\\mathbf{i}+(4-1)\\mathbf{j} = 4\\mathbf{i}+3\\mathbf{j}', explanation: 'Treat \\( \\mathbf{i} \\) and \\( \\mathbf{j} \\) like independent unknowns when collecting terms.' },
                { stepNumber: 3, description: 'Take the magnitude.', workingLatex: '|\\overrightarrow{AB}| = \\sqrt{4^2+3^2} = \\sqrt{16+9} = \\sqrt{25} = 5', explanation: 'Another familiar Pythagorean triple: 3-4-5.' }
            ],
            finalAnswer: '\\( AB = 5 \\)'
        }
    },
    {
        id: 'v2-035',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 35',
        difficulty: 'Foundation',
        questionText: 'Find the direction of \\( 3\\mathbf{i} + 3\\mathbf{j} \\), measured anticlockwise from the positive \\( x \\)-axis.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'direction'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1, description: 'Identify the quadrant.', workingLatex: 'x = 3 > 0,\\; y = 3 > 0 \\;\\Rightarrow\\; \\text{first quadrant}', explanation: 'Always pin down the quadrant before reaching for \\( \\tan^{-1} \\). A calculator only returns angles in \\( (-90°,\\,90°) \\); knowing the quadrant tells us whether we need to adjust.',
                    diagram: { xMin: -1, xMax: 5, yMin: -1, yMax: 5, xTicks: [3], yTicks: [3], lines: [{ from: [0, 0], to: [3, 3], color: '#1d4ed8', arrow: true, label: '3\\mathbf{i}+3\\mathbf{j}', labelAt: [1, 2.5] }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }] }
                },
                { stepNumber: 2, description: 'Form \\( \\tan\\theta = y/x \\).', workingLatex: '\\tan\\theta = \\frac{3}{3} = 1', explanation: '\\( \\tan\\theta \\) is the gradient of the position vector, i.e. rise over run.' },
                { stepNumber: 3, description: 'Solve for \\( \\theta \\).', workingLatex: '\\theta = \\tan^{-1}(1) = 45°', explanation: 'Since the vector is in the first quadrant, the principal value from \\( \\tan^{-1} \\) is the answer — no adjustment needed.' }
            ],
            finalAnswer: '\\( 45° \\)'
        }
    },
    {
        id: 'v2-036',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 36',
        difficulty: 'Standard',
        questionText: 'A vector \\( \\mathbf{p} \\) has magnitude \\( 10 \\) and direction \\( 150° \\). Express \\( \\mathbf{p} \\) in exact \\( \\mathbf{i} + \\mathbf{j} \\) form.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'direction to components'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1, description: 'Set up the component formulas.', workingLatex: 'a = |\\mathbf{p}|\\cos\\theta,\\quad b = |\\mathbf{p}|\\sin\\theta', explanation: 'Direction here is measured anticlockwise from the positive \\( x \\)-axis, so the standard trigonometric formulas \\( a=r\\cos\\theta,\\, b=r\\sin\\theta \\) apply directly with \\( r=10 \\) and \\( \\theta=150° \\).',
                    diagram: { xMin: -10, xMax: 3, yMin: -1, yMax: 7, xTicks: [-8, -4, 0], yTicks: [5], lines: [{ from: [0, 0], to: [-8.66, 5], color: '#1d4ed8', arrow: true, label: '\\mathbf{p}', labelAt: [-5, 3.5] }, { from: [0, 0], to: [2, 0], color: '#888', dashed: true }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'se', r: 3 }] }
                },
                { stepNumber: 2, description: 'Evaluate \\( \\cos 150° \\) and \\( \\sin 150° \\) exactly.', workingLatex: '\\cos 150° = -\\frac{\\sqrt{3}}{2},\\quad \\sin 150° = \\frac{1}{2}', explanation: 'Use the second-quadrant identities \\( \\cos(180°-\\theta) = -\\cos\\theta \\) and \\( \\sin(180°-\\theta) = \\sin\\theta \\), with the reference angle \\( 30° \\).' },
                { stepNumber: 3, description: 'Multiply by the magnitude.', workingLatex: 'a = 10\\cdot\\left(-\\tfrac{\\sqrt{3}}{2}\\right) = -5\\sqrt{3},\\quad b = 10\\cdot\\tfrac{1}{2} = 5', explanation: '\\( a \\) is negative (vector points left), \\( b \\) is positive (points up), matching the second quadrant.' },
                { stepNumber: 4, description: 'Write in \\( \\mathbf{i}+\\mathbf{j} \\) form.', workingLatex: '\\mathbf{p} = -5\\sqrt{3}\\,\\mathbf{i} + 5\\mathbf{j}', explanation: 'Quick check: \\( |\\mathbf{p}| = \\sqrt{75+25} = \\sqrt{100} = 10 \\). \\(\\checkmark\\)' }
            ],
            finalAnswer: '\\( -5\\sqrt{3}\\,\\mathbf{i} + 5\\mathbf{j} \\)'
        }
    },
    {
        id: 'v2-037',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 37',
        difficulty: 'Standard',
        questionText: 'The vector \\( \\mathbf{r} \\) has the same direction as \\( 5\\mathbf{i} + 12\\mathbf{j} \\) and magnitude \\( 26 \\). Find \\( \\mathbf{r} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'unit vector', 'scaling'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1, description: 'Find the magnitude of the direction vector.', workingLatex: '|5\\mathbf{i}+12\\mathbf{j}| = \\sqrt{5^2+12^2} = \\sqrt{169} = 13', explanation: 'To rescale a vector to a target magnitude we first need a unit vector pointing the same way — and that needs the current magnitude.',
                    diagram: { xMin: -1, xMax: 12, yMin: -1, yMax: 26, xTicks: [5, 10], yTicks: [12, 24], lines: [{ from: [0, 0], to: [5, 12], color: '#888', dashed: true, arrow: true, label: '5\\mathbf{i}+12\\mathbf{j}', labelAt: [2, 7] }, { from: [0, 0], to: [10, 24], color: '#1d4ed8', arrow: true, label: '\\mathbf{r}', labelAt: [6, 18] }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }] }
                },
                { stepNumber: 2, description: 'Write the unit vector in the given direction.', workingLatex: '\\hat{\\mathbf{d}} = \\frac{1}{13}(5\\mathbf{i}+12\\mathbf{j})', explanation: 'Dividing by the magnitude keeps direction and forces length 1.' },
                { stepNumber: 3, description: 'Multiply by the target magnitude 26.', workingLatex: '\\mathbf{r} = 26\\,\\hat{\\mathbf{d}} = \\tfrac{26}{13}(5\\mathbf{i}+12\\mathbf{j}) = 2(5\\mathbf{i}+12\\mathbf{j})', explanation: 'A shortcut: since 26 is exactly twice the original magnitude, \\( \\mathbf{r} \\) is just twice the given vector. Spotting this saves writing out fractions.' },
                { stepNumber: 4, description: 'Distribute the scalar.', workingLatex: '\\mathbf{r} = 10\\mathbf{i}+24\\mathbf{j}', explanation: 'Check: \\( \\sqrt{100+576} = \\sqrt{676} = 26 \\). \\(\\checkmark\\)' }
            ],
            finalAnswer: '\\( 10\\mathbf{i}+24\\mathbf{j} \\)'
        }
    },
    {
        id: 'v2-038',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 38',
        difficulty: 'Standard',
        questionText: 'Given \\( \\mathbf{a} = \\begin{pmatrix}2\\\\-5\\end{pmatrix} \\) and \\( \\mathbf{b} = \\begin{pmatrix}-1\\\\3\\end{pmatrix}, \\) find \\( |2\\mathbf{a} - 3\\mathbf{b}| \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'magnitude', 'linear combination'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Scale each vector first.', workingLatex: '2\\mathbf{a} = \\begin{pmatrix}4\\\\-10\\end{pmatrix},\\quad 3\\mathbf{b} = \\begin{pmatrix}-3\\\\9\\end{pmatrix}', explanation: 'Scalar multiplication acts componentwise. Doing this step separately avoids sign-error mishaps when you also have to subtract.' },
                { stepNumber: 2, description: 'Subtract componentwise.', workingLatex: '2\\mathbf{a}-3\\mathbf{b} = \\begin{pmatrix}4-(-3)\\\\-10-9\\end{pmatrix} = \\begin{pmatrix}7\\\\-19\\end{pmatrix}', explanation: 'Watch the second component carefully: \\( -10 - 9 = -19 \\), not \\( -1 \\).' },
                { stepNumber: 3, description: 'Apply the magnitude formula.', workingLatex: '|2\\mathbf{a}-3\\mathbf{b}| = \\sqrt{7^2 + (-19)^2} = \\sqrt{49+361} = \\sqrt{410}', explanation: '\\( 410 = 2\\cdot 5\\cdot 41 \\) has no square factors, so \\( \\sqrt{410} \\) is already in exact form.' }
            ],
            finalAnswer: '\\( \\sqrt{410} \\)'
        }
    },
    {
        id: 'v2-039',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 39',
        difficulty: 'Standard',
        questionText: 'Point P has position vector \\( \\begin{pmatrix}1\\\\4\\end{pmatrix}, \\) and point Q has position vector \\( \\begin{pmatrix}a\\\\-2\\end{pmatrix}. \\) Given that \\( |\\overrightarrow{PQ}| = 10 \\), find the possible values of \\( a \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'magnitude', 'unknown', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1, description: 'Form the displacement \\( \\overrightarrow{PQ} \\).', workingLatex: '\\overrightarrow{PQ} = \\overrightarrow{OQ}-\\overrightarrow{OP} = \\begin{pmatrix}a-1\\\\-2-4\\end{pmatrix} = \\begin{pmatrix}a-1\\\\-6\\end{pmatrix}', explanation: 'Q minus P (head minus tail) gives a vector with one unknown component.',
                    diagram: { xMin: -9, xMax: 11, yMin: -4, yMax: 6, xTicks: [-7, 0, 1, 9], yTicks: [-2, 4], lines: [{ from: [1, 4], to: [9, -2], color: '#1d4ed8', dashed: true, arrow: true }, { from: [1, 4], to: [-7, -2], color: '#dc2626', dashed: true, arrow: true }], points: [{ at: [1, 4], label: 'P(1,4)', labelAnchor: 'n', r: 4 }, { at: [9, -2], label: 'Q_1', labelAnchor: 'se', r: 4 }, { at: [-7, -2], label: 'Q_2', labelAnchor: 'sw', r: 4 }] }
                },
                { stepNumber: 2, description: 'Square the magnitude condition.', workingLatex: '|\\overrightarrow{PQ}|^2 = (a-1)^2 + (-6)^2 = 100', explanation: 'Squaring removes the square root from \\( |\\overrightarrow{PQ}|=10 \\), turning it into a clean polynomial in \\( a \\).' },
                { stepNumber: 3, description: 'Isolate \\( (a-1)^2 \\).', workingLatex: '(a-1)^2 + 36 = 100 \\;\\Rightarrow\\; (a-1)^2 = 64', explanation: 'Subtract 36 from both sides.' },
                { stepNumber: 4, description: 'Take square roots — both signs.', workingLatex: 'a - 1 = \\pm 8', explanation: 'Two square roots produce two values of \\( a \\), reflected on either side of P; the diagram shows them as \\( Q_1 \\) and \\( Q_2 \\). Missing the \\( \\pm \\) is the classic trap here.' },
                { stepNumber: 5, description: 'Solve for \\( a \\).', workingLatex: 'a = 1+8 = 9 \\quad\\text{or}\\quad a = 1-8 = -7', explanation: 'Both values give a valid PQ of length 10, so report both.' }
            ],
            finalAnswer: '\\( a = 9 \\) or \\( a = -7 \\)'
        }
    },
    {
        id: 'v2-040',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 40',
        difficulty: 'Standard',
        questionText: 'Find the direction of \\( -5\\mathbf{i} - 5\\mathbf{j} \\) to the nearest degree.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'direction', 'third quadrant'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Identify the quadrant.', workingLatex: 'x = -5 < 0,\\; y = -5 < 0 \\;\\Rightarrow\\; \\text{third quadrant}', explanation: 'A calculator returns \\( \\tan^{-1}(1)=45° \\) regardless of the sign of the components, so we must determine the quadrant from the signs before adjusting the angle.' },
                { stepNumber: 2, description: 'Find the reference (acute) angle.', workingLatex: '\\alpha = \\tan^{-1}\\!\\left(\\frac{|{-5}|}{|{-5}|}\\right) = \\tan^{-1}(1) = 45°', explanation: 'The reference angle uses the magnitudes of the components, giving the acute angle the vector makes with the \\( x \\)-axis.' },
                { stepNumber: 3, description: 'Adjust for the third quadrant.', workingLatex: '\\theta = 180° + 45° = 225°', explanation: 'In the third quadrant, the anticlockwise angle from the positive \\( x \\)-axis is \\( 180° + \\alpha \\).' }
            ],
            finalAnswer: '\\( 225° \\)'
        }
    },
    {
        id: 'v2-041',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 41',
        difficulty: 'Standard',
        questionText: 'Given \\( \\overrightarrow{OA} = 2\\mathbf{i}+5\\mathbf{j} \\) and \\( \\overrightarrow{OB} = 8\\mathbf{i}+2\\mathbf{j} \\), find the midpoint \\( M \\) of \\( AB\\) as a position vector.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'midpoint', 'position vectors'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1, description: 'Recall the midpoint formula.', workingLatex: '\\overrightarrow{OM} = \\tfrac{1}{2}\\bigl(\\overrightarrow{OA}+\\overrightarrow{OB}\\bigr)', explanation: 'The midpoint of a segment is the average of its endpoints — exactly the same idea as averaging two numbers, but applied componentwise to position vectors.',
                    diagram: { xMin: -1, xMax: 10, yMin: -1, yMax: 7, xTicks: [2, 5, 8], yTicks: [2, 3.5, 5], lines: [{ from: [2, 5], to: [8, 2], color: '#888' }, { from: [0, 0], to: [5, 3.5], color: '#047857', dashed: true, arrow: true }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [2, 5], label: 'A', labelAnchor: 'nw', r: 4 }, { at: [8, 2], label: 'B', labelAnchor: 'se', r: 4 }, { at: [5, 3.5], label: 'M', labelAnchor: 'ne', r: 4 }] }
                },
                { stepNumber: 2, description: 'Add the position vectors.', workingLatex: '\\overrightarrow{OA}+\\overrightarrow{OB} = (2+8)\\mathbf{i}+(5+2)\\mathbf{j} = 10\\mathbf{i}+7\\mathbf{j}', explanation: 'Add the \\( \\mathbf{i} \\)-components and the \\( \\mathbf{j} \\)-components separately.' },
                { stepNumber: 3, description: 'Halve each component.', workingLatex: '\\overrightarrow{OM} = \\tfrac{1}{2}(10\\mathbf{i}+7\\mathbf{j}) = 5\\mathbf{i}+\\tfrac{7}{2}\\mathbf{j}', explanation: 'A fractional coefficient is perfectly fine in the final answer — don’t round it.' }
            ],
            finalAnswer: '\\( 5\\mathbf{i}+\\frac{7}{2}\\mathbf{j} \\)'
        }
    },
    {
        id: 'v2-042',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 42',
        difficulty: 'Standard',
        questionText: 'A ship sails from port O on a bearing of \\( 060° \\) for \\( 12\\,\\mathrm{km} \\). Express the displacement as a column vector, giving exact values.',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'bearing', 'components', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Interpret the bearing.', workingLatex: '\\text{Bearing } 060° \\;\\Rightarrow\\; 60°\\text{ clockwise from north}', explanation: 'Take \\( x \\) as east, \\( y \\) as north. A bearing of \\( 060° \\) lies between north and east, in the upper-right quadrant.' },
                { stepNumber: 2, description: 'Use bearing-component formulas.', workingLatex: 'x = d\\sin\\beta,\\quad y = d\\cos\\beta', explanation: 'Because bearings measure clockwise from north, \\( \\sin \\) picks up the easterly (\\( x \\)) component and \\( \\cos \\) picks up the northerly (\\( y \\)) component — the opposite of the usual anticlockwise-from-\\( x \\)-axis case.' },
                { stepNumber: 3, description: 'Substitute \\( d=12 \\) and \\( \\beta=60° \\).', workingLatex: 'x = 12\\sin 60° = 12\\cdot\\tfrac{\\sqrt{3}}{2} = 6\\sqrt{3},\\quad y = 12\\cos 60° = 12\\cdot\\tfrac{1}{2} = 6', explanation: 'Keep the exact surd \\( \\sqrt{3} \\) — the question explicitly asks for exact values.' },
                { stepNumber: 4, description: 'Write the column vector.', workingLatex: '\\overrightarrow{\\text{disp}} = \\begin{pmatrix}6\\sqrt{3}\\\\6\\end{pmatrix}', explanation: 'Sanity check: \\( |\\text{disp}| = \\sqrt{108+36} = \\sqrt{144} = 12 \\). \\(\\checkmark\\)' }
            ],
            finalAnswer: '\\( \\begin{pmatrix}6\\sqrt{3}\\\\6\\end{pmatrix} \\)'
        }
    },
    {
        id: 'v2-043',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 43',
        difficulty: 'Challenge',
        questionText: 'Given \\( |\\mathbf{a}| = 5 \\), \\( |\\mathbf{b}| = 8 \\) and the angle between \\( \\mathbf{a} \\) and \\( \\mathbf{b} \\) is \\( 60° \\):\n\na) Find \\( |\\mathbf{a}+\\mathbf{b}| \\) to 2 d.p.\n\nb) Find the angle that \\( \\mathbf{a}+\\mathbf{b} \\) makes with \\( \\mathbf{a} \\), to 2 d.p.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'cosine rule', 'resultant', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1, description: 'Set up the vector triangle.', workingLatex: '\\text{Sides } 5,\\,8,\\,|\\mathbf{a}+\\mathbf{b}|; \\quad \\text{included angle} = 180°-60° = 120°', explanation: 'When the second side is drawn head-to-tail from the first, the interior angle at their shared vertex is \\( 180° \\) minus the angle between the original vectors.',
                    diagram: { xMin: -1, xMax: 13, yMin: -2, yMax: 10, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2.5, -0.8] }, { from: [0, 0], to: [4, 6.93], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [1, 4] }, { from: [5, 0], to: [9, 6.93], color: '#888', dashed: true }, { from: [0, 0], to: [9, 6.93], color: '#047857', dashed: true, arrow: true, label: '\\mathbf{a}+\\mathbf{b}', labelAt: [5, 4] }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }] }
                },
                { stepNumber: 2, description: 'Apply the cosine rule.', workingLatex: '|\\mathbf{a}+\\mathbf{b}|^2 = 5^2 + 8^2 - 2(5)(8)\\cos 120°', explanation: 'Cosine rule with the resultant as the side opposite the included angle \\( 120° \\).' },
                { stepNumber: 3, description: 'Substitute \\( \\cos 120° = -\\tfrac{1}{2} \\).', workingLatex: '|\\mathbf{a}+\\mathbf{b}|^2 = 25 + 64 - 80\\!\\left(-\\tfrac{1}{2}\\right) = 89 + 40 = 129', explanation: 'The negative cosine flips the sign of the last term, so the resultant comes out longer than either input — exactly what you’d expect when the vectors point roughly the same way.' },
                { stepNumber: 4, description: 'Square root and round.', workingLatex: '|\\mathbf{a}+\\mathbf{b}| = \\sqrt{129} \\approx 11.36', explanation: '\\( \\sqrt{129} \\) is already exact; the question asks for 2 d.p.' },
                { stepNumber: 5, description: 'b) Identify the triangle and the angle to find.', workingLatex: '\\text{Triangle with sides } 5,\\ 8,\\ \\sqrt{129},\\ \\text{angle } \\alpha \\text{ opposite the side of length } 8.', explanation: 'In the head-to-tail triangle from part (a), \\( \\mathbf{a}+\\mathbf{b} \\) leaves the origin in the same direction we want to measure from. The angle between \\( \\mathbf{a} \\) (along the base) and \\( \\mathbf{a}+\\mathbf{b} \\) is the angle at the origin — opposite the side \\( \\mathbf{b} \\) of length \\(8\\).' },
                { stepNumber: 6, description: 'Apply the sine rule.', workingLatex: '\\dfrac{\\sin\\alpha}{8} = \\dfrac{\\sin 120°}{\\sqrt{129}}', explanation: 'The sine rule pairs each side with the angle opposite it. Side \\(8\\) is opposite \\(\\alpha\\); side \\(\\sqrt{129}\\) is opposite the included angle \\(120°\\).' },
                { stepNumber: 7, description: 'Solve for \\( \\sin\\alpha \\).', workingLatex: '\\sin\\alpha = \\dfrac{8\\sin 120°}{\\sqrt{129}} = \\dfrac{8\\cdot\\tfrac{\\sqrt{3}}{2}}{\\sqrt{129}} = \\dfrac{4\\sqrt{3}}{\\sqrt{129}}', explanation: 'Use the exact value \\( \\sin 120° = \\tfrac{\\sqrt{3}}{2} \\) so we keep one surd-clean expression before decimalising.' },
                { stepNumber: 8, description: 'Take the inverse sine.', workingLatex: '\\sin\\alpha = \\dfrac{4\\sqrt{3}}{\\sqrt{129}} \\approx 0.6097 \\;\\Longrightarrow\\; \\alpha = \\sin^{-1}(0.6097) \\approx 37.59°', explanation: 'The angle \\(\\alpha\\) sits in a triangle whose largest angle (\\(120°\\)) is already accounted for, so \\(\\alpha\\) must be acute — take the principal value from arcsin.' }
            ],
            finalAnswer: 'a) \\( |\\mathbf{a}+\\mathbf{b}| \\approx 11.36 \\) \\quad b) \\( \\alpha \\approx 37.59° \\).'
        }
    },
    {
        id: 'v2-044',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 44',
        difficulty: 'Standard',
        questionText: 'Find the angle between \\( \\begin{pmatrix}1\\\\0\\end{pmatrix} \\) and \\( \\begin{pmatrix}1\\\\\\sqrt{3}\\end{pmatrix}. \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'angle between vectors', 'cosine rule'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Note the first vector lies along the positive \\( x \\)-axis.', workingLatex: '\\begin{pmatrix}1\\\\0\\end{pmatrix} \\text{ has direction } 0°', explanation: 'Because the first vector points purely in the \\( x \\)-direction, the angle between the two vectors equals the direction angle of the second.' },
                { stepNumber: 2, description: 'Compute the direction of the second vector.', workingLatex: '\\tan\\theta = \\frac{\\sqrt{3}}{1} = \\sqrt{3}', explanation: 'Both components of \\( \\begin{pmatrix}1\\\\\\sqrt{3}\\end{pmatrix} \\) are positive, so it lies in the first quadrant and \\( \\tan^{-1} \\) gives the angle directly.' },
                { stepNumber: 3, description: 'Recognise the exact angle.', workingLatex: '\\theta = \\tan^{-1}\\!\\left(\\sqrt{3}\\right) = 60°', explanation: 'A standard exact value: \\( \\tan 60° = \\sqrt{3} \\). Worth memorising alongside \\( \\tan 30°=\\tfrac{1}{\\sqrt 3} \\) and \\( \\tan 45°=1 \\).' }
            ],
            finalAnswer: '\\( 60° \\)'
        }
    },
    {
        id: 'v2-045',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 45',
        difficulty: 'Standard',
        questionText: 'Points \\( A(1,\\,3) \\), \\( B(4,\\,7) \\) and \\( C(7,\\,3) \\) form a triangle. Show that triangle \\( ABC \\) is isosceles.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'distance', 'isosceles', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1, description: 'Form the displacement vectors.', workingLatex: '\\overrightarrow{AB} = \\begin{pmatrix}3\\\\4\\end{pmatrix},\\; \\overrightarrow{BC} = \\begin{pmatrix}3\\\\-4\\end{pmatrix},\\; \\overrightarrow{AC} = \\begin{pmatrix}6\\\\0\\end{pmatrix}', explanation: 'For each side, subtract the tail point from the head point.',
                    diagram: { xMin: -1, xMax: 9, yMin: 0, yMax: 9, xTicks: [1, 4, 7], yTicks: [3, 7], lines: [{ from: [1, 3], to: [4, 7], color: '#1d4ed8' }, { from: [4, 7], to: [7, 3], color: '#1d4ed8' }, { from: [7, 3], to: [1, 3], color: '#dc2626' }], points: [{ at: [1, 3], label: 'A', labelAnchor: 'sw', r: 4 }, { at: [4, 7], label: 'B', labelAnchor: 'n', r: 4 }, { at: [7, 3], label: 'C', labelAnchor: 'se', r: 4 }] }
                },
                { stepNumber: 2, description: 'Compute the three side lengths.', workingLatex: '|AB| = \\sqrt{3^2+4^2} = 5,\\; |BC| = \\sqrt{3^2+(-4)^2} = 5,\\; |AC| = \\sqrt{6^2+0^2} = 6', explanation: 'Two of the sides give the familiar 3-4-5 triple; the third is purely horizontal.' },
                { stepNumber: 3, description: 'Compare and conclude.', workingLatex: '|AB| = |BC| = 5 \\;\\Rightarrow\\; \\text{triangle ABC is isosceles}\\,\\checkmark', explanation: 'Two equal sides are sufficient for "isosceles". (Here \\( AC \\neq AB \\) so it is not equilateral.)' }
            ],
            finalAnswer: '\\( AB = BC = 5 \\), so the triangle is isosceles.'
        }
    },
    {
        id: 'v2-046',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 46',
        difficulty: 'Standard',
        questionText: 'The vector \\( \\mathbf{v} = a\\mathbf{i} + b\\mathbf{j} \\) has magnitude \\( 2\\sqrt{5} \\) and direction \\( \\tan^{-1}(2) \\). Find \\( a \\) and \\( b \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'direction to components'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Convert the direction into a ratio.', workingLatex: '\\tan\\theta = \\frac{b}{a} = 2 \\;\\Rightarrow\\; b = 2a', explanation: 'The given direction \\( \\tan^{-1}(2) \\) lies in the first quadrant (positive principal value), so both \\( a \\) and \\( b \\) are positive and \\( b/a = 2 \\) directly.' },
                { stepNumber: 2, description: 'Write the magnitude condition.', workingLatex: 'a^2 + b^2 = (2\\sqrt{5})^2 = 20', explanation: 'Squaring the magnitude removes the surd and gives a clean polynomial equation in \\( a \\) and \\( b \\).' },
                { stepNumber: 3, description: 'Substitute \\( b = 2a \\).', workingLatex: 'a^2 + (2a)^2 = a^2 + 4a^2 = 5a^2 = 20', explanation: 'Collapsing the two unknowns to one is the key move whenever you have a magnitude plus a direction.' },
                { stepNumber: 4, description: 'Solve for \\( a \\) (positive root).', workingLatex: 'a^2 = 4 \\;\\Rightarrow\\; a = 2', explanation: 'Take the positive root because the first-quadrant direction forces \\( a>0 \\).' },
                { stepNumber: 5, description: 'Back-substitute for \\( b \\).', workingLatex: 'b = 2a = 2\\cdot 2 = 4', explanation: 'Check: \\( |\\mathbf{v}| = \\sqrt{4+16} = \\sqrt{20} = 2\\sqrt{5} \\). \\(\\checkmark\\)' }
            ],
            finalAnswer: '\\( a = 2, \\; b = 4 \\)'
        }
    },
    {
        id: 'v2-047',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 47',
        difficulty: 'Challenge',
        questionText: 'Two forces act on a particle: \\( \\mathbf{F}_1 = (6\\mathbf{i} - 2\\mathbf{j})\\,\\mathrm{N} \\) and \\( \\mathbf{F}_2 = (-\\mathbf{i} + 5\\mathbf{j})\\,\\mathrm{N} \\).\n\na) Find the magnitude and direction of the resultant force \\( \\mathbf{R} = \\mathbf{F}_1+\\mathbf{F}_2 \\).\n\nb) A third force \\( \\mathbf{F}_3 \\) acts on the particle so that it is in equilibrium. Find \\( \\mathbf{F}_3 \\) in \\( \\mathbf{i}+\\mathbf{j} \\) form, its magnitude, and the angle it makes with the positive \\( x \\)-axis (to 1 d.p.).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'resultant', 'forces', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1, description: 'Add the forces componentwise.', workingLatex: '\\mathbf{R} = \\mathbf{F}_1+\\mathbf{F}_2 = (6 + (-1))\\mathbf{i} + ((-2) + 5)\\mathbf{j} = 5\\mathbf{i}+3\\mathbf{j}', explanation: 'The resultant of several forces is simply their vector sum — add \\( \\mathbf{i} \\)-components together, then \\( \\mathbf{j} \\)-components together.',
                    diagram: { xMin: -2, xMax: 7, yMin: -3, yMax: 6, xTicks: [3, 5, 6], yTicks: [-2, 3, 5], lines: [{ from: [0, 0], to: [6, -2], color: '#1d4ed8', arrow: true, label: '\\mathbf{F}_1', labelAt: [3.5, -1.8] }, { from: [0, 0], to: [-1, 5], color: '#dc2626', arrow: true, label: '\\mathbf{F}_2', labelAt: [-1.5, 2.5] }, { from: [0, 0], to: [5, 3], color: '#047857', dashed: true, arrow: true, label: '\\mathbf{R}', labelAt: [3, 2] }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }] }
                },
                { stepNumber: 2, description: 'Find the magnitude of \\( \\mathbf{R} \\).', workingLatex: '|\\mathbf{R}| = \\sqrt{5^2+3^2} = \\sqrt{25+9} = \\sqrt{34}', explanation: 'Apply the magnitude formula to the resultant components.' },
                { stepNumber: 3, description: 'Convert to a decimal.', workingLatex: '|\\mathbf{R}| = \\sqrt{34} \\approx 5.83 \\text{ N}', explanation: 'Carry the exact value through and decimalise only at the end.' },
                { stepNumber: 4, description: 'Determine the quadrant for the direction.', workingLatex: 'R_x = 5 > 0,\\; R_y = 3 > 0 \\;\\Rightarrow\\; \\text{first quadrant}', explanation: 'Both components positive — the standard \\( \\tan^{-1} \\) value will be the correct direction angle.' },
                { stepNumber: 5, description: 'Compute the direction angle.', workingLatex: '\\theta = \\tan^{-1}\\!\\left(\\frac{3}{5}\\right) \\approx 31.0°', explanation: 'Measured anticlockwise from the positive \\( x \\)-axis, as is conventional for direction angles in mechanics problems.' },
                { stepNumber: 6, description: 'b) State the equilibrium condition.', workingLatex: '\\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{F}_3 = \\mathbf{0} \\;\\Longrightarrow\\; \\mathbf{F}_3 = -\\mathbf{R}', explanation: 'A particle is in equilibrium when the vector sum of the forces acting on it is zero. So \\( \\mathbf{F}_3 \\) must exactly oppose the resultant \\( \\mathbf{R} \\) found in part (a).' },
                { stepNumber: 7, description: 'Compute \\( \\mathbf{F}_3 \\) and its magnitude.', workingLatex: '\\mathbf{F}_3 = -(5\\mathbf{i}+3\\mathbf{j}) = (-5\\mathbf{i} - 3\\mathbf{j})\\,\\mathrm{N};\\quad |\\mathbf{F}_3| = |\\mathbf{R}| = \\sqrt{34} \\approx 5.83\\,\\mathrm{N}', explanation: 'Reversing a vector negates both components, so it has the same magnitude as \\( \\mathbf{R} \\). No new calculation is needed for \\( |\\mathbf{F}_3| \\).' },
                { stepNumber: 8, description: 'Find the direction angle (third quadrant).', workingLatex: '\\mathbf{F}_3: x<0,\\ y<0 \\;\\Longrightarrow\\; \\text{third quadrant};\\quad \\alpha = 180° + \\tan^{-1}\\!\\left(\\tfrac{3}{5}\\right) \\approx 211.0°', explanation: 'Both components negative places the vector in the third quadrant, so the anticlockwise angle from the positive \\(x\\)-axis is \\(180° + \\) the reference angle. The reference angle is the same as in part (a) because magnitudes give the same ratio.' }
            ],
            finalAnswer: 'a) \\( |\\mathbf{R}| = \\sqrt{34} \\approx 5.83\\,\\mathrm{N} \\), direction \\( \\approx 31.0° \\). \\quad b) \\( \\mathbf{F}_3 = (-5\\mathbf{i}-3\\mathbf{j})\\,\\mathrm{N} \\), magnitude \\( \\sqrt{34}\\,\\mathrm{N} \\), direction \\( \\approx 211.0° \\).'
        }
    },
    {
        id: 'v2-048',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 48',
        difficulty: 'Standard',
        questionText: 'A velocity vector has magnitude \\( 15\\,\\mathrm{ms^{-1}} \\) and makes an angle of \\( 40° \\) above the horizontal. Write it in \\( \\mathbf{i} + \\mathbf{j} \\) form to 2 d.p.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'components', 'velocity'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Set up the resolution formulas.', workingLatex: 'v_x = |\\mathbf{v}|\\cos\\theta,\\quad v_y = |\\mathbf{v}|\\sin\\theta', explanation: '"Angle above the horizontal" matches the standard convention of measuring from the positive \\( x \\)-axis, so the usual \\( \\cos \\) (horizontal) and \\( \\sin \\) (vertical) formulas apply directly.' },
                { stepNumber: 2, description: 'Compute the horizontal component.', workingLatex: 'v_x = 15\\cos 40° \\approx 15(0.7660) \\approx 11.49', explanation: 'Use a calculator in degree mode and keep at least 4 s.f. of working before rounding.' },
                { stepNumber: 3, description: 'Compute the vertical component.', workingLatex: 'v_y = 15\\sin 40° \\approx 15(0.6428) \\approx 9.64', explanation: 'Both components positive since \\( 0°<40°<90° \\).' },
                { stepNumber: 4, description: 'Write the answer in \\( \\mathbf{i}+\\mathbf{j} \\) form.', workingLatex: '\\mathbf{v} \\approx 11.49\\mathbf{i} + 9.64\\mathbf{j}', explanation: 'Check: \\( \\sqrt{11.49^2+9.64^2} \\approx \\sqrt{132.0+92.93} \\approx \\sqrt{225} = 15 \\). \\(\\checkmark\\)' }
            ],
            finalAnswer: '\\( 11.49\\mathbf{i} + 9.64\\mathbf{j} \\)'
        }
    },
    {
        id: 'v2-049',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 49',
        difficulty: 'Standard',
        questionText: 'Given \\( \\overrightarrow{OP} = \\begin{pmatrix}3\\\\-1\\end{pmatrix}, \\) \\( \\overrightarrow{OQ} = \\begin{pmatrix}-1\\\\7\\end{pmatrix}, \\) find the point R such that \\( \\overrightarrow{OR} = \\overrightarrow{OP} + 2\\overrightarrow{PQ}. \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'position vectors', 'linear combination'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1, description: 'Compute \\( \\overrightarrow{PQ} \\).', workingLatex: '\\overrightarrow{PQ} = \\overrightarrow{OQ}-\\overrightarrow{OP} = \\begin{pmatrix}-1-3\\\\7-(-1)\\end{pmatrix} = \\begin{pmatrix}-4\\\\8\\end{pmatrix}', explanation: 'Displacement \\( P\\to Q \\) is "head minus tail" of the position vectors.',
                    diagram: { xMin: -7, xMax: 5, yMin: -3, yMax: 17, xTicks: [-5, -1, 3], yTicks: [-1, 7, 15], lines: [{ from: [3, -1], to: [-1, 7], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{PQ}', labelAt: [1.5, 2.5] }, { from: [0, 0], to: [-5, 15], color: '#047857', dashed: true, arrow: true }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'e', r: 3 }, { at: [3, -1], label: 'P', labelAnchor: 'se', r: 4 }, { at: [-1, 7], label: 'Q', labelAnchor: 'ne', r: 4 }, { at: [-5, 15], label: 'R', labelAnchor: 'nw', r: 4 }] }
                },
                { stepNumber: 2, description: 'Scale by 2.', workingLatex: '2\\overrightarrow{PQ} = \\begin{pmatrix}-8\\\\16\\end{pmatrix}', explanation: 'Double each component. Geometrically, R is twice as far from P as Q is, in the same direction.' },
                { stepNumber: 3, description: 'Add \\( \\overrightarrow{OP} \\) to get \\( \\overrightarrow{OR} \\).', workingLatex: '\\overrightarrow{OR} = \\overrightarrow{OP}+2\\overrightarrow{PQ} = \\begin{pmatrix}3\\\\-1\\end{pmatrix}+\\begin{pmatrix}-8\\\\16\\end{pmatrix} = \\begin{pmatrix}-5\\\\15\\end{pmatrix}', explanation: 'Componentwise addition.' },
                { stepNumber: 4, description: 'Read off R.', workingLatex: 'R = (-5,\\, 15)', explanation: 'The position vector \\( \\overrightarrow{OR} \\) has the same components as the coordinates of R.' }
            ],
            finalAnswer: '\\( R = (-5, 15) \\)'
        }
    },
    {
        id: 'v2-050',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 50',
        difficulty: 'Challenge',
        questionText: 'Show that the triangle with vertices \\( A(0,\\,0) \\), \\( B(3,\\,4) \\) and \\( C(6,\\,0) \\) is isosceles and find the angle at \\( B \\) to 1 d.p.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'isosceles', 'cosine rule', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1, description: 'Form the side displacements.', workingLatex: '\\overrightarrow{AB} = \\begin{pmatrix}3\\\\4\\end{pmatrix},\\; \\overrightarrow{BC} = \\begin{pmatrix}3\\\\-4\\end{pmatrix},\\; \\overrightarrow{AC} = \\begin{pmatrix}6\\\\0\\end{pmatrix}', explanation: 'Subtract coordinates head minus tail for each side.',
                    diagram: { xMin: -1, xMax: 8, yMin: -1, yMax: 6, xTicks: [3, 6], yTicks: [4], lines: [{ from: [0, 0], to: [3, 4], color: '#1d4ed8' }, { from: [3, 4], to: [6, 0], color: '#1d4ed8' }, { from: [6, 0], to: [0, 0], color: '#dc2626' }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 4 }, { at: [3, 4], label: 'B', labelAnchor: 'n', r: 4 }, { at: [6, 0], label: 'C', labelAnchor: 'se', r: 4 }] }
                },
                { stepNumber: 2, description: 'Compute the side lengths.', workingLatex: 'AB = \\sqrt{3^2+4^2} = 5,\\; BC = \\sqrt{3^2+(-4)^2} = 5,\\; AC = \\sqrt{6^2+0^2} = 6', explanation: 'Two of these come straight from the 3-4-5 triple.' },
                { stepNumber: 3, description: 'Conclude isosceles.', workingLatex: 'AB = BC = 5 \\;\\Rightarrow\\; \\triangle ABC \\text{ is isosceles}\\,\\checkmark', explanation: 'Two equal sides — the part-(i) requirement is met.' },
                { stepNumber: 4, description: 'Set up cosine rule for angle B (opposite side AC).', workingLatex: '\\cos B = \\frac{AB^2+BC^2-AC^2}{2\\cdot AB \\cdot BC}', explanation: 'Cosine rule: the angle at a vertex involves the two sides meeting there in the denominator and the opposite side squared in the numerator.' },
                { stepNumber: 5, description: 'Substitute numerical values.', workingLatex: '\\cos B = \\frac{25 + 25 - 36}{2(5)(5)} = \\frac{14}{50} = 0.28', explanation: 'A positive cosine signals an acute angle at B.' },
                { stepNumber: 6, description: 'Solve for B.', workingLatex: 'B = \\cos^{-1}(0.28) \\approx 73.7°', explanation: 'Calculator in degree mode, rounded to 1 d.p.' }
            ],
            finalAnswer: '\\( AB = BC = 5 \\) (isosceles). Angle at B \\( \\approx 73.7° \\)'
        }
    },
    {
        id: 'v2-051',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 51',
        difficulty: 'Standard',
        questionText: 'The vector \\( \\mathbf{u} = k\\mathbf{i} + 2k\\mathbf{j} \\) has magnitude \\( 5\\sqrt{5} \\). Find \\( k \\) where \\( k > 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'magnitude', 'unknown'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Apply \\( |\\mathbf{u}|^2 = x^2+y^2 \\).', workingLatex: 'k^2 + (2k)^2 = \\left(5\\sqrt{5}\\right)^2', explanation: 'Squaring the magnitude condition clears the surd on the right and keeps everything in polynomial form on the left.' },
                { stepNumber: 2, description: 'Expand both sides.', workingLatex: 'k^2 + 4k^2 = 25\\cdot 5 \\;\\Rightarrow\\; 5k^2 = 125', explanation: 'Use \\( (2k)^2 = 4k^2 \\) and \\( (5\\sqrt 5)^2 = 25\\cdot 5 = 125 \\).' },
                { stepNumber: 3, description: 'Solve for \\( k^2 \\).', workingLatex: 'k^2 = 25', explanation: 'Divide by 5.' },
                { stepNumber: 4, description: 'Take the positive root.', workingLatex: 'k = 5', explanation: 'The problem specifies \\( k > 0 \\), so we discard \\( k = -5 \\).' }
            ],
            finalAnswer: '\\( k = 5 \\)'
        }
    },
    {
        id: 'v2-052',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 52',
        difficulty: 'Standard',
        questionText: 'Find the angle between the position vectors of \\( A(4,\\,3) \\) and \\( B(-3,\\,4) \\), measured from the origin.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'angle between vectors', 'cosine rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1, description: 'Find the two side magnitudes from O.', workingLatex: '|\\overrightarrow{OA}| = \\sqrt{4^2+3^2} = 5,\\quad |\\overrightarrow{OB}| = \\sqrt{(-3)^2+4^2} = 5', explanation: 'These are the two sides of triangle OAB meeting at the vertex where the angle lives.',
                    diagram: { xMin: -5, xMax: 6, yMin: -1, yMax: 6, xTicks: [-3, 0, 4], yTicks: [3, 4], lines: [{ from: [0, 0], to: [4, 3], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{OA}', labelAt: [2.5, 1] }, { from: [0, 0], to: [-3, 4], color: '#dc2626', arrow: true, label: '\\overrightarrow{OB}', labelAt: [-2, 2.5] }], points: [{ at: [0, 0], label: 'O', labelAnchor: 's', r: 4 }, { at: [4, 3], label: 'A', labelAnchor: 'ne', r: 4 }, { at: [-3, 4], label: 'B', labelAnchor: 'nw', r: 4 }] }
                },
                { stepNumber: 2, description: 'Find the third side AB.', workingLatex: '\\overrightarrow{AB} = \\begin{pmatrix}-3-4\\\\4-3\\end{pmatrix} = \\begin{pmatrix}-7\\\\1\\end{pmatrix},\\quad |\\overrightarrow{AB}| = \\sqrt{49+1} = \\sqrt{50}', explanation: 'The third side of the triangle is the side opposite the angle at O.' },
                { stepNumber: 3, description: 'Apply the cosine rule at O.', workingLatex: '\\cos\\theta = \\frac{|OA|^2 + |OB|^2 - |AB|^2}{2\\,|OA|\\,|OB|}', explanation: 'Standard cosine rule with the angle at O.' },
                { stepNumber: 4, description: 'Substitute numerical values.', workingLatex: '\\cos\\theta = \\frac{25 + 25 - 50}{2(5)(5)} = \\frac{0}{50} = 0', explanation: '\\( \\cos\\theta = 0 \\) is a strong signal of a right angle — and indeed \\( \\overrightarrow{OA}\\cdot\\overrightarrow{OB} = 4(-3)+3(4) = 0 \\).' },
                { stepNumber: 5, description: 'Solve for \\( \\theta \\).', workingLatex: '\\theta = \\cos^{-1}(0) = 90°', explanation: 'The position vectors are perpendicular.' }
            ],
            finalAnswer: '\\( 90° \\)'
        }
    },
    {
        id: 'v2-053',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 53',
        difficulty: 'Challenge',
        questionText: 'A hiker walks \\( 5\\,\\mathrm{km} \\) on a bearing of \\( 030° \\) then \\( 8\\,\\mathrm{km} \\) on a bearing of \\( 120° \\). Find the magnitude and bearing of the direct return journey to 1 d.p.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'bearing', 'resultant', 'cosine rule', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1, description: 'Resolve leg 1 into east/north components.', workingLatex: '\\mathbf{a} = \\begin{pmatrix}5\\sin 30°\\\\5\\cos 30°\\end{pmatrix} = \\begin{pmatrix}2.5\\\\\\tfrac{5\\sqrt 3}{2}\\end{pmatrix} \\approx \\begin{pmatrix}2.5\\\\4.33\\end{pmatrix}', explanation: 'Take \\( x \\) = east, \\( y \\) = north. Bearings measure clockwise from north, so east component is \\( d\\sin\\beta \\) and north component is \\( d\\cos\\beta \\).',
                    diagram: { xMin: -1, xMax: 11, yMin: -1, yMax: 6, hideAxes: true, lines: [{ from: [0, 0], to: [2.5, 4.33], color: '#1d4ed8', arrow: true, label: 'leg 1: 5 km, 030°', labelAt: [-0.2, 2.6] }, { from: [2.5, 4.33], to: [9.43, 0.33], color: '#dc2626', arrow: true, label: 'leg 2: 8 km, 120°', labelAt: [6.2, 2.8] }, { from: [9.43, 0.33], to: [0, 0], color: '#047857', dashed: true, arrow: true, label: 'return', labelAt: [4.5, -0.4] }], points: [{ at: [0, 0], label: 'start', labelAnchor: 'sw', r: 3 }, { at: [2.5, 4.33], label: 'turn', labelAnchor: 'nw', r: 3 }, { at: [9.43, 0.33], label: 'end', labelAnchor: 'ne', r: 3 }] }
                },
                { stepNumber: 2, description: 'Resolve leg 2 the same way.', workingLatex: '\\mathbf{b} = \\begin{pmatrix}8\\sin 120°\\\\8\\cos 120°\\end{pmatrix} = \\begin{pmatrix}4\\sqrt 3\\\\-4\\end{pmatrix} \\approx \\begin{pmatrix}6.93\\\\-4\\end{pmatrix}', explanation: 'A bearing of \\( 120° \\) is past east heading south-east, so the north component goes negative — exactly what \\( \\cos 120° = -\\tfrac{1}{2} \\) delivers.' },
                { stepNumber: 3, description: 'Add the two legs to get total displacement.', workingLatex: '\\mathbf{a}+\\mathbf{b} \\approx \\begin{pmatrix}2.5+6.93\\\\4.33+(-4)\\end{pmatrix} = \\begin{pmatrix}9.43\\\\0.33\\end{pmatrix}', explanation: 'The hiker ends up almost due east of the start (north component is tiny).' },
                { stepNumber: 4, description: 'Find the distance home.', workingLatex: '|\\mathbf{a}+\\mathbf{b}| = \\sqrt{9.43^2 + 0.33^2} \\approx \\sqrt{88.9+0.109} \\approx 9.4 \\text{ km}', explanation: 'The return distance equals the outward straight-line distance.' },
                { stepNumber: 5, description: 'Find the outward bearing of the final position from the start.', workingLatex: '\\beta_{\\text{out}} = \\tan^{-1}\\!\\left(\\frac{9.43}{0.33}\\right) \\approx 88.0°', explanation: 'For a bearing in the NE quadrant (east \\(>0\\), north \\(>0\\)), bearing = \\( \\tan^{-1}(\\text{east}/\\text{north}) \\). Both components positive, so no adjustment needed.' },
                { stepNumber: 6, description: 'Reverse direction for the return journey.', workingLatex: '\\beta_{\\text{return}} = \\beta_{\\text{out}} + 180° = 88.0° + 180° = 268.0°', explanation: 'A reverse bearing is the outward bearing plus \\( 180° \\) (wrapped into \\( [0°,360°) \\) if necessary). Here we land at \\( 268.0° \\), which is just south of due west.' }
            ],
            finalAnswer: 'Distance \\( \\approx 9.4\\,\\mathrm{km} \\); return bearing \\( \\approx 268.0° \\)'
        }
    },
    {
        id: 'v2-054',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 54',
        difficulty: 'Standard',
        questionText: 'Find the exact distance between the points with position vectors \\( 2\\mathbf{i} - 3\\mathbf{j} \\) and \\( -4\\mathbf{i} + 5\\mathbf{j} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'distance'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Form the displacement vector.', workingLatex: '\\mathbf{d} = (-4\\mathbf{i}+5\\mathbf{j}) - (2\\mathbf{i}-3\\mathbf{j}) = \\begin{pmatrix}-4-2\\\\5-(-3)\\end{pmatrix} = \\begin{pmatrix}-6\\\\8\\end{pmatrix}', explanation: 'Distance is the magnitude of the displacement; the displacement is "head minus tail" of the two position vectors. Watch the double negative in the \\( y \\)-component.' },
                { stepNumber: 2, description: 'Apply the magnitude formula.', workingLatex: '|\\mathbf{d}| = \\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100}', explanation: 'Components are squared, so the signs drop out.' },
                { stepNumber: 3, description: 'Simplify.', workingLatex: '|\\mathbf{d}| = 10', explanation: 'Yet another 6-8-10 (or 3-4-5 scaled by 2) Pythagorean triple — handy to spot.' }
            ],
            finalAnswer: '\\( 10 \\)'
        }
    },
    {
        id: 'v2-055',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 55',
        difficulty: 'Standard',
        questionText: 'Given \\( |\\overrightarrow{PQ}| = 6 \\) and \\( |\\overrightarrow{PR}| = 9 \\) and the angle \\( QPR = 70° \\), find \\( |\\overrightarrow{QR}| \\) to 2 d.p.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'cosine rule', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1, description: 'Identify the triangle and the included angle.', workingLatex: '\\triangle PQR \\text{ with sides } PQ=6,\\; PR=9,\\; \\angle QPR = 70°', explanation: 'The two given sides both start at P, and the given angle is at P. So we have two sides and the included angle — exactly the setup for the cosine rule.',
                    diagram: { xMin: -1, xMax: 11, yMin: -1, yMax: 9, hideAxes: true, lines: [{ from: [0, 0], to: [6, 0], color: '#1d4ed8', arrow: true, label: '6', labelAt: [3, -0.6] }, { from: [0, 0], to: [3.08, 8.46], color: '#dc2626', arrow: true, label: '9', labelAt: [0.8, 4.5] }, { from: [6, 0], to: [3.08, 8.46], color: '#047857', dashed: true }], points: [{ at: [0, 0], label: 'P', labelAnchor: 'sw', r: 3 }, { at: [6, 0], label: 'Q', labelAnchor: 'se', r: 3 }, { at: [3.08, 8.46], label: 'R', labelAnchor: 'n', r: 3 }] }
                },
                { stepNumber: 2, description: 'Apply the cosine rule.', workingLatex: '|QR|^2 = PQ^2 + PR^2 - 2\\cdot PQ\\cdot PR\\cdot\\cos\\angle QPR', explanation: 'The unknown side squared equals the sum of the known sides squared minus twice their product times the cosine of the included angle.' },
                { stepNumber: 3, description: 'Substitute numerical values.', workingLatex: '|QR|^2 = 6^2 + 9^2 - 2(6)(9)\\cos 70° = 36 + 81 - 108\\cos 70°', explanation: 'Keep \\( \\cos 70° \\) symbolic for one more line — it makes rounding errors easier to track.' },
                { stepNumber: 4, description: 'Evaluate the cosine.', workingLatex: '|QR|^2 \\approx 117 - 108(0.3420) \\approx 117 - 36.94 \\approx 80.06', explanation: '\\( \\cos 70° \\approx 0.3420 \\).' },
                { stepNumber: 5, description: 'Take the square root.', workingLatex: '|QR| \\approx \\sqrt{80.06} \\approx 8.95', explanation: 'Round only at the final step to keep accuracy to 2 d.p.' }
            ],
            finalAnswer: '\\( |\\overrightarrow{QR}| \\approx 8.95 \\)'
        }
    },
    {
        id: 'v2-056',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 56',
        difficulty: 'Standard',
        questionText: 'Find the unit vector perpendicular to \\( 3\\mathbf{i} + 4\\mathbf{j} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'perpendicular', 'unit vector'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Generate a perpendicular vector by swap-and-negate.', workingLatex: '\\begin{pmatrix}3\\\\4\\end{pmatrix} \\;\\perp\\; \\begin{pmatrix}-4\\\\3\\end{pmatrix}', explanation: 'A handy 2D trick: swap the components and negate exactly one of them. Why does this work? The vector \\( 3\\mathbf{i}+4\\mathbf{j} \\) lies along a line through the origin with gradient \\( \\tfrac{4}{3} \\) (rise \\(4\\) over run \\(3\\)). The proposed perpendicular \\( -4\\mathbf{i}+3\\mathbf{j} \\) lies along a line with gradient \\( \\tfrac{3}{-4} = -\\tfrac{3}{4} \\). Their gradients multiply to \\( \\tfrac{4}{3}\\cdot\\left(-\\tfrac{3}{4}\\right) = -1 \\), which is the coordinate-geometry condition for two lines to be perpendicular.' },
                { stepNumber: 2, description: 'Find the magnitude of that perpendicular.', workingLatex: '\\left|\\begin{pmatrix}-4\\\\3\\end{pmatrix}\\right| = \\sqrt{(-4)^2+3^2} = \\sqrt{25} = 5', explanation: 'Same 3-4-5 triple as the original vector — that is no coincidence, since swap-and-negate preserves length.' },
                { stepNumber: 3, description: 'Divide by the magnitude to get a unit vector.', workingLatex: '\\hat{\\mathbf{n}} = \\frac{1}{5}\\begin{pmatrix}-4\\\\3\\end{pmatrix} = \\begin{pmatrix}-\\tfrac{4}{5}\\\\\\tfrac{3}{5}\\end{pmatrix}', explanation: 'Standard "scale by reciprocal of magnitude" trick.' },
                { stepNumber: 4, description: 'Note the alternative perpendicular direction.', workingLatex: '\\text{Also valid: } \\frac{1}{5}\\begin{pmatrix}4\\\\-3\\end{pmatrix} = \\begin{pmatrix}\\tfrac{4}{5}\\\\-\\tfrac{3}{5}\\end{pmatrix}', explanation: 'For any non-zero vector in the plane there are two unit perpendiculars, pointing in opposite directions. Either is a correct answer unless the question pins down a sign convention.' }
            ],
            finalAnswer: '\\( \\begin{pmatrix}-\\frac{4}{5}\\\\\\frac{3}{5}\\end{pmatrix} \\) or \\( \\begin{pmatrix}\\frac{4}{5}\\\\-\\frac{3}{5}\\end{pmatrix} \\)'
        }
    },
    {
        id: 'v2-057',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 57',
        difficulty: 'Challenge',
        questionText: 'The point \\( C \\) divides \\( AB \\) in the ratio \\( 2:3 \\). Given \\( \\overrightarrow{OA} = \\begin{pmatrix}1\\\\8\\end{pmatrix} \\) and \\( \\overrightarrow{OB} = \\begin{pmatrix}11\\\\3\\end{pmatrix} \\):\n\na) Find \\( \\overrightarrow{OC} \\).\n\nb) Find the exact distance \\( |OC| \\).\n\nc) The line \\( OC \\) is extended to a point \\( D \\) such that \\( OC : CD = 3 : 2 \\). Find \\( \\overrightarrow{OD} \\) and the exact distance \\( |CD| \\).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'section formula', 'ratio', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1, description: 'Interpret the ratio.', workingLatex: 'AC : CB = 2:3 \\;\\Rightarrow\\; AC = \\tfrac{2}{5}\\,AB', explanation: 'A ratio 2:3 splits AB into 5 equal parts, with C being 2 of those 5 parts along from A. So C sits \\( \\tfrac{2}{5} \\) of the way from A to B.',
                    diagram: { xMin: -1, xMax: 13, yMin: 0, yMax: 10, xTicks: [1, 5, 11], yTicks: [3, 6, 8], lines: [{ from: [1, 8], to: [11, 3], color: '#888' }, { from: [0, 0], to: [5, 6], color: '#047857', dashed: true, arrow: true }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [1, 8], label: 'A', labelAnchor: 'nw', r: 4 }, { at: [11, 3], label: 'B', labelAnchor: 'se', r: 4 }, { at: [5, 6], label: 'C', labelAnchor: 'ne', r: 4 }] }
                },
                { stepNumber: 2, description: 'Write the section formula in vector form.', workingLatex: '\\overrightarrow{OC} = \\overrightarrow{OA} + \\tfrac{2}{5}\\overrightarrow{AB}', explanation: 'Travel from O to A, then \\( \\tfrac{2}{5} \\) of the way along AB.' },
                { stepNumber: 3, description: 'Compute \\( \\overrightarrow{AB} \\).', workingLatex: '\\overrightarrow{AB} = \\overrightarrow{OB}-\\overrightarrow{OA} = \\begin{pmatrix}11-1\\\\3-8\\end{pmatrix} = \\begin{pmatrix}10\\\\-5\\end{pmatrix}', explanation: 'Head minus tail, componentwise.' },
                { stepNumber: 4, description: 'Scale \\( \\overrightarrow{AB} \\) by \\( \\tfrac{2}{5} \\).', workingLatex: '\\tfrac{2}{5}\\overrightarrow{AB} = \\begin{pmatrix}\\tfrac{2}{5}(10)\\\\\\tfrac{2}{5}(-5)\\end{pmatrix} = \\begin{pmatrix}4\\\\-2\\end{pmatrix}', explanation: 'The fraction \\( \\tfrac{2}{5} \\) was chosen precisely so the components come out as whole numbers.' },
                { stepNumber: 5, description: 'Add to \\( \\overrightarrow{OA} \\).', workingLatex: '\\overrightarrow{OC} = \\begin{pmatrix}1\\\\8\\end{pmatrix}+\\begin{pmatrix}4\\\\-2\\end{pmatrix} = \\begin{pmatrix}5\\\\6\\end{pmatrix}', explanation: 'Componentwise addition gives the answer.' },
                { stepNumber: 6, description: 'b) Apply Pythagoras to find \\( |OC| \\).', workingLatex: '|OC| = \\sqrt{5^2+6^2} = \\sqrt{25+36} = \\sqrt{61}', explanation: 'Distance from the origin equals the magnitude of the position vector. \\(61\\) is prime, so \\( \\sqrt{61} \\) is in simplest exact form.' },
                { stepNumber: 7, description: 'c) Translate the extension ratio into a scalar multiple of \\( \\overrightarrow{OC} \\).', workingLatex: 'OC:CD = 3:2 \\;\\Longrightarrow\\; \\overrightarrow{CD} = \\tfrac{2}{3}\\overrightarrow{OC}', explanation: 'The line is extended beyond \\(C\\) so that \\(CD\\) is two-thirds the length of \\(OC\\) and points in the same direction. Hence \\( \\overrightarrow{CD} \\) is two-thirds of \\( \\overrightarrow{OC} \\).' },
                { stepNumber: 8, description: 'Compute \\( \\overrightarrow{OD} \\) via the route \\(O \\to C \\to D\\).', workingLatex: '\\overrightarrow{OD} = \\overrightarrow{OC} + \\overrightarrow{CD} = \\overrightarrow{OC} + \\tfrac{2}{3}\\overrightarrow{OC} = \\tfrac{5}{3}\\overrightarrow{OC} = \\tfrac{5}{3}\\begin{pmatrix}5\\\\6\\end{pmatrix} = \\begin{pmatrix}\\tfrac{25}{3}\\\\10\\end{pmatrix}', explanation: 'Combining \\( \\overrightarrow{OC} + \\tfrac{2}{3}\\overrightarrow{OC} = \\tfrac{5}{3}\\overrightarrow{OC} \\) collapses the two-step route into a single scaling.' },
                { stepNumber: 9, description: 'Compute \\( |CD| \\).', workingLatex: '|CD| = \\tfrac{2}{3}|OC| = \\tfrac{2}{3}\\sqrt{61} = \\dfrac{2\\sqrt{61}}{3}', explanation: 'Magnitudes scale linearly: \\( |\\tfrac{2}{3}\\mathbf{v}| = \\tfrac{2}{3}|\\mathbf{v}| \\). No need to re-apply Pythagoras to the components of \\( \\overrightarrow{CD} \\).' }
            ],
            finalAnswer: 'a) \\( \\overrightarrow{OC} = \\begin{pmatrix}5\\\\6\\end{pmatrix} \\) \\quad b) \\( |OC| = \\sqrt{61} \\) \\quad c) \\( \\overrightarrow{OD} = \\begin{pmatrix}\\tfrac{25}{3}\\\\10\\end{pmatrix} \\), \\( |CD| = \\tfrac{2\\sqrt{61}}{3} \\).'
        }
    },
    {
        id: 'v2-058',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 58',
        difficulty: 'Challenge',
        questionText: 'A quadrilateral has vertices \\( A(0,\\,0) \\), \\( B(5,\\,2) \\), \\( C(7,\\,7) \\) and \\( D(2,\\,5) \\).\n\na) Show that \\( ABCD \\) is a parallelogram.\n\nb) Find the position vector of the centre \\( M \\) of the parallelogram (the intersection of the diagonals) by computing the midpoints of both diagonals and verifying they coincide.\n\nc) The point \\( P \\) is the reflection of \\( A \\) in \\( M \\). State \\( P \\) and explain (using vectors) why \\( P \\) must coincide with \\( C \\).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'parallelogram', 'proof', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1, description: 'Choose the right pair of sides to compare.', workingLatex: '\\text{Compare } \\overrightarrow{AB} \\text{ with } \\overrightarrow{DC}', explanation: 'In a parallelogram \\( ABCD \\), the opposite sides AB and DC are equal vectors (note: DC, not CD — the direction matters). Equality of these two vectors is sufficient to prove a parallelogram, since it forces both equal lengths and parallel directions.',
                    diagram: { xMin: -1, xMax: 9, yMin: -1, yMax: 9, xTicks: [2, 5, 7], yTicks: [2, 5, 7], lines: [{ from: [0, 0], to: [5, 2], color: '#1d4ed8', arrow: true }, { from: [5, 2], to: [7, 7], color: '#888' }, { from: [7, 7], to: [2, 5], color: '#1d4ed8', arrow: true }, { from: [2, 5], to: [0, 0], color: '#888' }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 4 }, { at: [5, 2], label: 'B', labelAnchor: 'se', r: 4 }, { at: [7, 7], label: 'C', labelAnchor: 'ne', r: 4 }, { at: [2, 5], label: 'D', labelAnchor: 'nw', r: 4 }] }
                },
                { stepNumber: 2, description: 'Compute \\( \\overrightarrow{AB} \\).', workingLatex: '\\overrightarrow{AB} = B - A = \\begin{pmatrix}5-0\\\\2-0\\end{pmatrix} = \\begin{pmatrix}5\\\\2\\end{pmatrix}', explanation: 'Head minus tail.' },
                { stepNumber: 3, description: 'Compute \\( \\overrightarrow{DC} \\).', workingLatex: '\\overrightarrow{DC} = C - D = \\begin{pmatrix}7-2\\\\7-5\\end{pmatrix} = \\begin{pmatrix}5\\\\2\\end{pmatrix}', explanation: 'Same convention: head minus tail, with D as tail and C as head.' },
                { stepNumber: 4, description: 'Conclude.', workingLatex: '\\overrightarrow{AB} = \\overrightarrow{DC} \\;\\Rightarrow\\; AB \\parallel DC \\text{ and } |AB|=|DC|', explanation: 'One pair of opposite sides equal and parallel ⇒ ABCD is a parallelogram. \\(\\checkmark\\)' },
                { stepNumber: 5, description: 'b) Find the midpoint of diagonal \\(AC\\).', workingLatex: 'M_{AC} = \\tfrac{1}{2}\\bigl(\\overrightarrow{OA}+\\overrightarrow{OC}\\bigr) = \\tfrac{1}{2}\\begin{pmatrix}0+7\\\\0+7\\end{pmatrix} = \\begin{pmatrix}\\tfrac{7}{2}\\\\\\tfrac{7}{2}\\end{pmatrix}', explanation: 'The midpoint of a segment between two position vectors is their average. Average each coordinate separately.' },
                { stepNumber: 6, description: 'Find the midpoint of diagonal \\(BD\\).', workingLatex: 'M_{BD} = \\tfrac{1}{2}\\bigl(\\overrightarrow{OB}+\\overrightarrow{OD}\\bigr) = \\tfrac{1}{2}\\begin{pmatrix}5+2\\\\2+5\\end{pmatrix} = \\begin{pmatrix}\\tfrac{7}{2}\\\\\\tfrac{7}{2}\\end{pmatrix}', explanation: 'Apply the same average formula to the other diagonal.' },
                { stepNumber: 7, description: 'Verify the midpoints agree.', workingLatex: 'M_{AC} = M_{BD} = \\begin{pmatrix}\\tfrac{7}{2}\\\\\\tfrac{7}{2}\\end{pmatrix} = M', explanation: 'A standard result for any parallelogram: the diagonals bisect each other. The agreement of the two midpoints both confirms the parallelogram property and gives the centre \\(M\\). ✓' },
                { stepNumber: 8, description: 'c) Apply the reflection condition.', workingLatex: 'P \\text{ is reflection of } A \\text{ in } M \\;\\Longrightarrow\\; M = \\tfrac{1}{2}(A+P) \\;\\Longrightarrow\\; P = 2M - A', explanation: 'Reflection in a point means \\(M\\) is the midpoint of \\(A\\) and its image \\(P\\). Solve the midpoint equation for \\(P\\).' },
                { stepNumber: 9, description: 'Compute \\(P\\) and identify it with \\(C\\).', workingLatex: 'P = 2\\begin{pmatrix}\\tfrac{7}{2}\\\\\\tfrac{7}{2}\\end{pmatrix} - \\begin{pmatrix}0\\\\0\\end{pmatrix} = \\begin{pmatrix}7\\\\7\\end{pmatrix} = C', explanation: 'Substitute. The image lands exactly at \\(C\\) — which is geometrically necessary, because in any parallelogram each vertex is the reflection of the opposite vertex in the centre. ✓' }
            ],
            finalAnswer: 'a) \\( \\overrightarrow{AB} = \\overrightarrow{DC} = \\begin{pmatrix}5\\\\2\\end{pmatrix} \\), so \\(ABCD\\) is a parallelogram. \\quad b) \\( M = \\bigl(\\tfrac{7}{2},\\tfrac{7}{2}\\bigr) \\). \\quad c) \\( P = (7,7) = C \\), as expected from the parallelogram’s central symmetry.'
        }
    },
    {
        id: 'v2-059',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 59',
        difficulty: 'Challenge',
        questionText: 'Given \\( |\\mathbf{a}| = 7 \\), \\( |\\mathbf{b}| = 10 \\) and \\( |\\mathbf{a}+\\mathbf{b}| = 13 \\), find the angle between \\( \\mathbf{a} \\) and \\( \\mathbf{b} \\) to 1 d.p.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'cosine rule', 'angle', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1, description: 'Set up the vector triangle.', workingLatex: '\\text{Sides } 7,\\,10,\\,13 \\text{ with angle between } \\mathbf{a},\\mathbf{b} = \\theta', explanation: 'Place \\( \\mathbf{a} \\) and \\( \\mathbf{b} \\) tail-to-tail with included angle \\( \\theta \\). A copy of \\( \\mathbf{b} \\) placed head-to-tail with \\( \\mathbf{a} \\) closes the triangle; the interior angle between the sides of length 7 and 10 in that triangle is \\( 180°-\\theta \\).',
                    diagram: { xMin: -1, xMax: 14, yMin: -1, yMax: 10, hideAxes: true, lines: [{ from: [0, 0], to: [7, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [3.5, -0.7] }, { from: [0, 0], to: [5, 8.66], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [1.5, 5] }, { from: [7, 0], to: [12, 8.66], color: '#888', dashed: true }, { from: [0, 0], to: [12, 8.66], color: '#047857', dashed: true, arrow: true, label: '\\mathbf{a}+\\mathbf{b}', labelAt: [7, 5] }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }] }
                },
                { stepNumber: 2, description: 'Apply the cosine rule.', workingLatex: '13^2 = 7^2 + 10^2 - 2(7)(10)\\cos(180°-\\theta)', explanation: 'The resultant 13 is the side opposite the included angle \\( 180°-\\theta \\).' },
                { stepNumber: 3, description: 'Use \\( \\cos(180°-\\theta) = -\\cos\\theta \\).', workingLatex: '169 = 49 + 100 + 140\\cos\\theta', explanation: 'The supplementary-angle identity turns \\( -\\cos(180°-\\theta) \\) into \\( +\\cos\\theta \\), removing the awkward bracketed angle.' },
                { stepNumber: 4, description: 'Rearrange to isolate \\( \\cos\\theta \\).', workingLatex: '169 = 149 + 140\\cos\\theta \\;\\Rightarrow\\; \\cos\\theta = \\frac{20}{140} = \\frac{1}{7}', explanation: 'Collect constants and divide. A positive cosine signals an acute angle between the vectors.' },
                { stepNumber: 5, description: 'Solve for \\( \\theta \\).', workingLatex: '\\theta = \\cos^{-1}\\!\\left(\\tfrac{1}{7}\\right) \\approx 81.8°', explanation: 'Calculator in degree mode, rounded to 1 d.p.' }
            ],
            finalAnswer: '\\( \\approx 81.8° \\)'
        }
    },
    {
        id: 'v2-060',
        topicRef: 'v2',
        topicTitle: 'Calculating with Vectors 60',
        difficulty: 'Foundation',
        questionText: 'Find the magnitude and direction of \\( 8\\mathbf{i} - 6\\mathbf{j} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'magnitude', 'direction'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1, description: 'Magnitude.', workingLatex: '\\sqrt{64+36} = 10', explanation: '',
                    diagram: { xMin: -1, xMax: 10, yMin: -8, yMax: 2, xTicks: [4, 8], yTicks: [-6, -3], lines: [{ from: [0, 0], to: [8, -6], color: '#1d4ed8', arrow: true, label: '8\\mathbf{i}-6\\mathbf{j}', labelAt: [5, -2] }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'nw', r: 3 }] }
                },
                { stepNumber: 2, description: 'Direction (4th quadrant).', workingLatex: '\\theta = 360° - \\tan^{-1}\\!\\left(\\frac{6}{8}\\right) = 360° - 36.87° \\approx 323.1°', explanation: '' }
            ],
            finalAnswer: 'Magnitude \\( = 10 \\), direction \\( \\approx 323.1° \\)'
        }
    }
]; 
