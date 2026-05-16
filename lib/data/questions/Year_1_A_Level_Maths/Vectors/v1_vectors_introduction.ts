import { Question } from "@/lib/types";

// Topic: Vectors — 30 questions with TikZ diagrams
// Covers: vector notation, adding/subtracting vectors in geometric shapes, scalar multiplication,
//         parallel vectors, collinear points, midpoints, position vectors, column vectors, i+j form

export const questions: Question[] = [

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 1  (Q1–Q5)  Foundation — basic vector addition/subtraction in shapes
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 'v1-001',
        topicRef: 'v1',
        topicTitle: 'Vectors 01',
        difficulty: 'Challenge',
        questionText:
            'In triangle \\(PQR,\\) \\( \\overrightarrow{PQ} = \\mathbf{a} \\) and \\( \\overrightarrow{PR} = \\mathbf{b}.\\) \\(M\\) is the midpoint of \\(QR\\) and the point \\(N\\) lies on \\(PM\\) such that \\(PN:NM = 2:1.\\)\n\na) Find \\( \\overrightarrow{PM} \\) and \\( \\overrightarrow{PN} \\) in terms of \\( \\mathbf{a} \\) and \\( \\mathbf{b}.\\)\n\nb) Show that the points \\(Q,\\) \\(N\\) and the midpoint \\(K\\) of \\(PR\\) are collinear, and find the ratio \\(QN:NK.\\)',
        questionDiagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [4, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2, -0.5] }, { from: [0, 0], to: [2, 3.5], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [0.5, 2] }, { from: [4, 0], to: [2, 3.5], color: '#888' }], points: [{ at: [0, 0], label: 'P', labelAnchor: 'sw', r: 3 }, { at: [4, 0], label: 'Q', labelAnchor: 'se', r: 3 }, { at: [2, 3.5], label: 'R', labelAnchor: 'n', r: 3 }, { at: [3, 1.75], label: 'M', labelAnchor: 'e', r: 3 }, { at: [2, 1.17], label: 'N', labelAnchor: 'w', r: 3 }, { at: [1, 1.75], label: 'K', labelAnchor: 'w', r: 3 }] },
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'triangle', 'midpoint', 'centroid', 'collinear', 'proof'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Express \\( \\overrightarrow{QR} \\) using the route Q → P → R.',
                    workingLatex: '\\overrightarrow{QR} = \\overrightarrow{QP}+\\overrightarrow{PR} = -\\mathbf{a}+\\mathbf{b}',
                    explanation: 'To reach R from Q we first reverse the arrow PQ (so \\( \\overrightarrow{QP}=-\\mathbf{a} \\)) and then travel along PR. Adding the displacements nose-to-tail gives \\( \\overrightarrow{QR}=-\\mathbf{a}+\\mathbf{b}.\\)',
                    diagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [4, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2, -0.5] }, { from: [0, 0], to: [2, 3.5], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [0.5, 2] }, { from: [4, 0], to: [2, 3.5], color: '#888' }, { from: [0, 0], to: [3, 1.75], color: '#047857', dashed: true, arrow: true, label: '\\overrightarrow{PM}', labelAt: [1.6, 1.2] }], points: [{ at: [0, 0], label: 'P', labelAnchor: 'sw', r: 3 }, { at: [4, 0], label: 'Q', labelAnchor: 'se', r: 3 }, { at: [2, 3.5], label: 'R', labelAnchor: 'n', r: 3 }, { at: [3, 1.75], label: 'M', labelAnchor: 'e', r: 3 }, { at: [2, 1.17], label: 'N', labelAnchor: 'w', r: 3 }, { at: [1, 1.75], label: 'K', labelAnchor: 'w', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'a) Reach M (midpoint of QR) via P → Q → M.',
                    workingLatex: '\\overrightarrow{PM} = \\overrightarrow{PQ}+\\tfrac{1}{2}\\overrightarrow{QR} = \\mathbf{a}+\\tfrac{1}{2}(-\\mathbf{a}+\\mathbf{b})',
                    explanation: 'Because M is the midpoint of QR, \\( \\overrightarrow{QM}=\\tfrac{1}{2}\\overrightarrow{QR}.\\) We then travel PQ first, then half of QR — a classic two-leg route. Always check the direction of the "half" leg before halving.',
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the expression for \\( \\overrightarrow{PM}.\\)',
                    workingLatex: '\\overrightarrow{PM} = \\mathbf{a}-\\tfrac{1}{2}\\mathbf{a}+\\tfrac{1}{2}\\mathbf{b} = \\tfrac{1}{2}\\mathbf{a}+\\tfrac{1}{2}\\mathbf{b}',
                    explanation: 'Distribute the \\( \\tfrac{1}{2} \\) over the bracket and collect like terms. \\( \\mathbf{a} \\) is treated as a single object, so coefficients of \\( \\mathbf{a} \\) and \\( \\mathbf{b} \\) are gathered separately.',
                },
                {
                    stepNumber: 4,
                    description: 'a) Use the ratio \\(PN:NM = 2:1\\) to locate N on PM.',
                    workingLatex: '\\overrightarrow{PN} = \\tfrac{2}{3}\\overrightarrow{PM}',
                    explanation: 'Splitting PM into three equal parts, PN takes the first two. So \\( \\overrightarrow{PN} \\) is two-thirds of the full vector \\( \\overrightarrow{PM}.\\)',
                },
                {
                    stepNumber: 5,
                    description: 'Substitute and simplify to find \\( \\overrightarrow{PN}.\\)',
                    workingLatex: '\\overrightarrow{PN} = \\tfrac{2}{3}\\!\\left(\\tfrac{1}{2}\\mathbf{a}+\\tfrac{1}{2}\\mathbf{b}\\right) = \\tfrac{1}{3}\\mathbf{a}+\\tfrac{1}{3}\\mathbf{b}',
                    explanation: 'Multiply the scalar \\( \\tfrac{2}{3} \\) through each term. The result \\( \\tfrac{1}{3}(\\mathbf{a}+\\mathbf{b}) \\) already hints that N is the centroid of the triangle.',
                },
                {
                    stepNumber: 6,
                    description: 'b) Compute \\( \\overrightarrow{QN} \\) using position vectors from P.',
                    workingLatex: '\\overrightarrow{QN} = \\overrightarrow{PN}-\\overrightarrow{PQ} = \\left(\\tfrac{1}{3}\\mathbf{a}+\\tfrac{1}{3}\\mathbf{b}\\right)-\\mathbf{a}',
                    explanation: 'Subtraction of position vectors (taken from the same base point P) gives the displacement \\( \\overrightarrow{QN} = \\overrightarrow{PN}-\\overrightarrow{PQ}.\\)',
                },
                {
                    stepNumber: 7,
                    description: 'Simplify \\( \\overrightarrow{QN}.\\)',
                    workingLatex: '\\overrightarrow{QN} = -\\tfrac{2}{3}\\mathbf{a}+\\tfrac{1}{3}\\mathbf{b}',
                    explanation: 'Combine the \\( \\mathbf{a} \\) coefficients: \\( \\tfrac{1}{3}-1=-\\tfrac{2}{3}.\\) The \\( \\mathbf{b} \\) coefficient is unchanged.',
                },
                {
                    stepNumber: 8,
                    description: 'Locate K (the midpoint of PR) and compute \\( \\overrightarrow{NK}.\\)',
                    workingLatex: '\\overrightarrow{PK}=\\tfrac{1}{2}\\mathbf{b},\\quad \\overrightarrow{NK} = \\overrightarrow{PK}-\\overrightarrow{PN} = \\tfrac{1}{2}\\mathbf{b}-\\tfrac{1}{3}\\mathbf{a}-\\tfrac{1}{3}\\mathbf{b}',
                    explanation: 'K is halfway along PR, so \\( \\overrightarrow{PK}=\\tfrac{1}{2}\\overrightarrow{PR}=\\tfrac{1}{2}\\mathbf{b}.\\) Then subtract the position of N from the position of K (both measured from P).',
                    diagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [4, 0], to: [2, 1.17], color: '#dc2626', arrow: true, label: '\\overrightarrow{QN}', labelAt: [2.7, 0.4] }, { from: [2, 1.17], to: [1, 1.75], color: '#16a34a', arrow: true, label: '\\overrightarrow{NK}', labelAt: [1.2, 1.6] }, { from: [0, 0], to: [4, 0], color: '#bbb' }, { from: [4, 0], to: [2, 3.5], color: '#bbb' }, { from: [0, 0], to: [2, 3.5], color: '#bbb' }], points: [{ at: [0, 0], label: 'P', labelAnchor: 'sw', r: 3 }, { at: [4, 0], label: 'Q', labelAnchor: 'se', r: 3 }, { at: [2, 3.5], label: 'R', labelAnchor: 'n', r: 3 }, { at: [2, 1.17], label: 'N', labelAnchor: 'se', r: 3 }, { at: [1, 1.75], label: 'K', labelAnchor: 'w', r: 3 }] },
                },
                {
                    stepNumber: 9,
                    description: 'Simplify \\( \\overrightarrow{NK} \\) and factor to compare with \\( \\overrightarrow{QN}.\\)',
                    workingLatex: '\\overrightarrow{NK} = -\\tfrac{1}{3}\\mathbf{a}+\\tfrac{1}{6}\\mathbf{b} = \\tfrac{1}{2}\\!\\left(-\\tfrac{2}{3}\\mathbf{a}+\\tfrac{1}{3}\\mathbf{b}\\right)',
                    explanation: 'Collect coefficients: \\( \\mathbf{b} \\) gives \\( \\tfrac{1}{2}-\\tfrac{1}{3}=\\tfrac{1}{6}.\\) Factoring out \\( \\tfrac{1}{2} \\) reveals the same internal vector as \\( \\overrightarrow{QN}.\\)',
                },
                {
                    stepNumber: 10,
                    description: 'Conclude that Q, N, K are collinear.',
                    workingLatex: '\\overrightarrow{NK} = \\tfrac{1}{2}\\overrightarrow{QN}',
                    explanation: 'Because \\( \\overrightarrow{NK} \\) is a scalar multiple of \\( \\overrightarrow{QN} \\) and they share the point N, the three points lie on one line with \\( QN:NK = 2:1.\\) (N is in fact the centroid of triangle PQR — the medians meet there in a 2:1 ratio from each vertex.) ∎',
                },
            ],
            finalAnswer: 'a) \\( \\overrightarrow{PM} = \\tfrac{1}{2}(\\mathbf{a}+\\mathbf{b}),\\) \\( \\overrightarrow{PN} = \\tfrac{1}{3}(\\mathbf{a}+\\mathbf{b}).\\)  b) Q, N, K are collinear with QN:NK = 2:1.',
        },
    },

    {
        id: 'v1-002',
        topicRef: 'v1',
        topicTitle: 'Vectors 02',
        difficulty: 'Challenge',
        questionText:
            'For the rectangle \\(ABCD,\\) \\( \\overrightarrow{AB} = \\mathbf{p} \\) and \\( \\overrightarrow{AD} = \\mathbf{q}.\\) The point \\(E\\) lies on \\(AB\\) with \\(AE:EB = 1:3\\) and the point \\(F\\) lies on \\(DC\\) with \\(DF:FC = 3:1.\\)\n\na) Find \\( \\overrightarrow{AE},\\) \\( \\overrightarrow{AF} \\) and \\( \\overrightarrow{EF} \\) in terms of \\( \\mathbf{p} \\) and \\( \\mathbf{q}.\\)\n\nb) The diagonals \\(AC\\) and \\(BD\\) intersect at \\(X,\\) and the line \\(EF\\) crosses \\(AC\\) at \\(Y.\\) Show that \\(AY:YC = 1:1\\) — i.e. \\(Y\\) is the centre \\(X\\) of the rectangle.',
        questionDiagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [4, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{p}', labelAt: [2, -0.5] }, { from: [0, 0], to: [0, 3], color: '#dc2626', arrow: true, label: '\\mathbf{q}', labelAt: [-0.7, 1.5] }, { from: [4, 0], to: [4, 3], color: '#888' }, { from: [0, 3], to: [4, 3], color: '#888' }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 3 }, { at: [4, 0], label: 'B', labelAnchor: 'se', r: 3 }, { at: [4, 3], label: 'C', labelAnchor: 'ne', r: 3 }, { at: [0, 3], label: 'D', labelAnchor: 'nw', r: 3 }, { at: [1, 0], label: 'E', labelAnchor: 's', r: 3 }, { at: [3, 3], label: 'F', labelAnchor: 'n', r: 3 }] },
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'rectangle', 'ratio', 'intersection', 'collinear', 'proof'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'a) Locate E using \\(AE:EB = 1:3.\\)',
                    workingLatex: '\\overrightarrow{AE} = \\tfrac{1}{4}\\overrightarrow{AB} = \\tfrac{1}{4}\\mathbf{p}',
                    explanation: 'The ratio \\(1:3\\) splits AB into 4 equal segments, with E one part along from A. So \\( \\overrightarrow{AE} \\) is a quarter of \\( \\overrightarrow{AB}.\\)',
                    diagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [4, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{p}', labelAt: [2, -0.5] }, { from: [0, 0], to: [0, 3], color: '#dc2626', arrow: true, label: '\\mathbf{q}', labelAt: [-0.7, 1.5] }, { from: [4, 0], to: [4, 3], color: '#888' }, { from: [0, 3], to: [4, 3], color: '#888' }, { from: [1, 0], to: [3, 3], color: '#047857', dashed: true, arrow: true, label: '\\overrightarrow{EF}', labelAt: [1.5, 1.7] }, { from: [0, 0], to: [4, 3], color: '#a16207', dashed: true }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 3 }, { at: [4, 0], label: 'B', labelAnchor: 'se', r: 3 }, { at: [4, 3], label: 'C', labelAnchor: 'ne', r: 3 }, { at: [0, 3], label: 'D', labelAnchor: 'nw', r: 3 }, { at: [1, 0], label: 'E', labelAnchor: 's', r: 3 }, { at: [3, 3], label: 'F', labelAnchor: 'n', r: 3 }, { at: [2, 1.5], label: 'X', labelAnchor: 'sw', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Locate F using \\(DF:FC = 3:1\\) and the route A → D → F.',
                    workingLatex: '\\overrightarrow{AF} = \\overrightarrow{AD}+\\overrightarrow{DF} = \\mathbf{q}+\\tfrac{3}{4}\\mathbf{p}',
                    explanation: 'In a rectangle \\( \\overrightarrow{DC}=\\overrightarrow{AB}=\\mathbf{p}.\\) Since F is 3 parts out of 4 along DC from D, \\( \\overrightarrow{DF}=\\tfrac{3}{4}\\mathbf{p}.\\) Add the two legs to reach F from A.',
                },
                {
                    stepNumber: 3,
                    description: 'Compute \\( \\overrightarrow{EF} \\) as a difference of position vectors from A.',
                    workingLatex: '\\overrightarrow{EF} = \\overrightarrow{AF}-\\overrightarrow{AE} = \\left(\\mathbf{q}+\\tfrac{3}{4}\\mathbf{p}\\right)-\\tfrac{1}{4}\\mathbf{p} = \\tfrac{1}{2}\\mathbf{p}+\\mathbf{q}',
                    explanation: 'Subtracting position vectors taken from the same base point gives the displacement between the two endpoints.',
                },
                {
                    stepNumber: 4,
                    description: 'b) Parameterise the two lines that meet at Y.',
                    workingLatex: '\\text{Line }EF:\\ \\overrightarrow{AE}+t\\,\\overrightarrow{EF};\\quad \\text{Line }AC:\\ s\\,\\overrightarrow{AC}=s(\\mathbf{p}+\\mathbf{q})',
                    explanation: 'Any point on EF can be reached by starting at E and travelling a fraction \\(t\\) of the way to F; any point on AC is a fraction \\(s\\) of the way from A to C. Y lies on both lines, so the parameters can be chosen to make the two expressions equal.',
                },
                {
                    stepNumber: 5,
                    description: 'Equate the two expressions for the point Y.',
                    workingLatex: '\\tfrac{1}{4}\\mathbf{p}+t\\!\\left(\\tfrac{1}{2}\\mathbf{p}+\\mathbf{q}\\right) = s\\mathbf{p}+s\\mathbf{q}',
                    explanation: 'Both expressions describe the same point Y, so the right-hand side equals the left-hand side as vectors.',
                },
                {
                    stepNumber: 6,
                    description: 'Compare coefficients of \\( \\mathbf{p} \\) and \\( \\mathbf{q} \\) separately.',
                    workingLatex: '\\mathbf{p}:\\ \\tfrac{1}{4}+\\tfrac{1}{2}t = s.\\quad \\mathbf{q}:\\ t = s',
                    explanation: 'Because \\( \\mathbf{p} \\) and \\( \\mathbf{q} \\) are non-parallel (adjacent sides of a rectangle), no \\( \\mathbf{p} \\)-term can be replaced by a \\( \\mathbf{q} \\)-term. Coefficients of each must balance separately.',
                },
                {
                    stepNumber: 7,
                    description: 'Solve the simultaneous equations.',
                    workingLatex: '\\tfrac{1}{4}+\\tfrac{1}{2}t=t \\;\\Longrightarrow\\; \\tfrac{1}{4}=\\tfrac{1}{2}t \\;\\Longrightarrow\\; t=\\tfrac{1}{2},\\ s=\\tfrac{1}{2}',
                    explanation: 'Substituting \\( s=t \\) (from the \\( \\mathbf{q} \\) equation) into the \\( \\mathbf{p} \\) equation removes \\(s\\) and gives a single-variable equation for \\(t.\\)',
                },
                {
                    stepNumber: 8,
                    description: 'State the position of Y on AC and conclude.',
                    workingLatex: '\\overrightarrow{AY} = s\\overrightarrow{AC} = \\tfrac{1}{2}(\\mathbf{p}+\\mathbf{q}) = \\tfrac{1}{2}\\overrightarrow{AC}',
                    explanation: '\\(s=\\tfrac{1}{2}\\) means Y is the midpoint of AC, so \\(AY:YC=1:1\\) and Y coincides with the centre X. ∎',
                },
            ],
            finalAnswer: 'a) \\( \\overrightarrow{AE}=\\tfrac{1}{4}\\mathbf{p},\\) \\( \\overrightarrow{AF}=\\tfrac{3}{4}\\mathbf{p}+\\mathbf{q},\\) \\( \\overrightarrow{EF}=\\tfrac{1}{2}\\mathbf{p}+\\mathbf{q}.\\) b) Y is the midpoint of AC, so AY:YC = 1:1 and Y = X.',
        },
    },

    {
        id: 'v1-003',
        topicRef: 'v1',
        topicTitle: 'Vectors 03',
        difficulty: 'Challenge',
        questionText:
            '\\(WXYZ\\) is any quadrilateral with \\( \\overrightarrow{WX} = \\mathbf{a},\\) \\( \\overrightarrow{XY} = \\mathbf{b} \\) and \\( \\overrightarrow{YZ} = \\mathbf{c}.\\) Let \\(P,\\) \\(Q,\\) \\(R,\\) \\(S\\) be the midpoints of \\(WX,\\) \\(XY,\\) \\(YZ\\) and \\(ZW\\) respectively (Varignon\'s configuration).\n\na) Find \\( \\overrightarrow{WZ},\\) and hence \\( \\overrightarrow{SZ} \\) and \\( \\overrightarrow{SW},\\) in terms of \\( \\mathbf{a},\\mathbf{b},\\mathbf{c}.\\)\n\nb) Show that \\(PQRS\\) is a parallelogram by proving \\( \\overrightarrow{PQ} = \\overrightarrow{SR}.\\)',
        questionDiagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [3, 1], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [1.5, -0.3] }, { from: [3, 1], to: [5, 3.5], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [4.5, 2] }, { from: [5, 3.5], to: [2, 3], color: '#047857', arrow: true, label: '\\mathbf{c}', labelAt: [3.8, 3.8] }, { from: [2, 3], to: [0, 0], color: '#888' }], points: [{ at: [0, 0], label: 'W', labelAnchor: 'sw', r: 3 }, { at: [3, 1], label: 'X', labelAnchor: 'se', r: 3 }, { at: [5, 3.5], label: 'Y', labelAnchor: 'ne', r: 3 }, { at: [2, 3], label: 'Z', labelAnchor: 'nw', r: 3 }, { at: [1.5, 0.5], label: 'P', labelAnchor: 's', r: 3 }, { at: [4, 2.25], label: 'Q', labelAnchor: 'e', r: 3 }, { at: [3.5, 3.25], label: 'R', labelAnchor: 'n', r: 3 }, { at: [1, 1.5], label: 'S', labelAnchor: 'w', r: 3 }] },
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'quadrilateral', 'midpoint', 'parallelogram', 'Varignon', 'proof'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'a) Chain the given sides to reach Z from W.',
                    workingLatex: '\\overrightarrow{WZ} = \\overrightarrow{WX}+\\overrightarrow{XY}+\\overrightarrow{YZ} = \\mathbf{a}+\\mathbf{b}+\\mathbf{c}',
                    explanation: 'Travel W → X → Y → Z. Each intermediate vector cancels in the picture; only the start and end points matter. This is the triangle/polygon law of vector addition extended to four points.',
                    diagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [3, 1], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [1.5, -0.3] }, { from: [3, 1], to: [5, 3.5], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [4.5, 2] }, { from: [5, 3.5], to: [2, 3], color: '#047857', arrow: true, label: '\\mathbf{c}', labelAt: [3.8, 3.8] }, { from: [2, 3], to: [0, 0], color: '#888' }, { from: [1.5, 0.5], to: [4, 2.25], color: '#a16207', dashed: true }, { from: [4, 2.25], to: [3.5, 3.25], color: '#a16207', dashed: true }, { from: [3.5, 3.25], to: [1, 1.5], color: '#a16207', dashed: true }, { from: [1, 1.5], to: [1.5, 0.5], color: '#a16207', dashed: true }], points: [{ at: [0, 0], label: 'W', labelAnchor: 'sw', r: 3 }, { at: [3, 1], label: 'X', labelAnchor: 'se', r: 3 }, { at: [5, 3.5], label: 'Y', labelAnchor: 'ne', r: 3 }, { at: [2, 3], label: 'Z', labelAnchor: 'nw', r: 3 }, { at: [1.5, 0.5], label: 'P', labelAnchor: 's', r: 3 }, { at: [4, 2.25], label: 'Q', labelAnchor: 'e', r: 3 }, { at: [3.5, 3.25], label: 'R', labelAnchor: 'n', r: 3 }, { at: [1, 1.5], label: 'S', labelAnchor: 'w', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Reverse to obtain \\( \\overrightarrow{ZW}.\\)',
                    workingLatex: '\\overrightarrow{ZW} = -\\overrightarrow{WZ} = -(\\mathbf{a}+\\mathbf{b}+\\mathbf{c})',
                    explanation: 'Reversing a vector negates it. We need ZW because S is given as the midpoint of ZW and the natural "from S" direction starts at Z.',
                },
                {
                    stepNumber: 3,
                    description: 'Use the midpoint S of ZW to write \\( \\overrightarrow{SW}.\\)',
                    workingLatex: '\\overrightarrow{SW} = \\tfrac{1}{2}\\overrightarrow{ZW} = -\\tfrac{1}{2}(\\mathbf{a}+\\mathbf{b}+\\mathbf{c})',
                    explanation: 'S is exactly halfway from Z to W, so the displacement S → W is half of the displacement Z → W.',
                },
                {
                    stepNumber: 4,
                    description: 'Obtain \\( \\overrightarrow{SZ} \\) by reversing \\( \\overrightarrow{SW}.\\)',
                    workingLatex: '\\overrightarrow{SZ} = -\\overrightarrow{SW} = \\tfrac{1}{2}(\\mathbf{a}+\\mathbf{b}+\\mathbf{c})',
                    explanation: 'Since S is the midpoint of ZW, S → Z is the reverse of S → W. Equivalently \\( \\overrightarrow{SZ}=\\tfrac{1}{2}\\overrightarrow{WZ}.\\)',
                },
                {
                    stepNumber: 5,
                    description: 'b) Compute \\( \\overrightarrow{PQ} \\) using midpoints of adjacent sides.',
                    workingLatex: '\\overrightarrow{PQ} = \\overrightarrow{PX}+\\overrightarrow{XQ} = \\tfrac{1}{2}\\mathbf{a}+\\tfrac{1}{2}\\mathbf{b} = \\tfrac{1}{2}(\\mathbf{a}+\\mathbf{b})',
                    explanation: 'P is the midpoint of WX, so \\( \\overrightarrow{PX}=\\tfrac{1}{2}\\overrightarrow{WX}=\\tfrac{1}{2}\\mathbf{a}.\\) Q is the midpoint of XY, so \\( \\overrightarrow{XQ}=\\tfrac{1}{2}\\mathbf{b}.\\) Adding them nose-to-tail gives PQ.',
                },
                {
                    stepNumber: 6,
                    description: 'Find \\( \\overrightarrow{ZR} \\) (half of \\( \\overrightarrow{ZY} \\)).',
                    workingLatex: '\\overrightarrow{ZR} = \\tfrac{1}{2}\\overrightarrow{ZY} = -\\tfrac{1}{2}\\mathbf{c}',
                    explanation: 'R is the midpoint of YZ, so the displacement Z → R is half of Z → Y. Since \\( \\overrightarrow{YZ}=\\mathbf{c},\\) we have \\( \\overrightarrow{ZY}=-\\mathbf{c}.\\)',
                },
                {
                    stepNumber: 7,
                    description: 'Compute \\( \\overrightarrow{SR} \\) via the route S → Z → R.',
                    workingLatex: '\\overrightarrow{SR} = \\overrightarrow{SZ}+\\overrightarrow{ZR} = \\tfrac{1}{2}(\\mathbf{a}+\\mathbf{b}+\\mathbf{c})-\\tfrac{1}{2}\\mathbf{c} = \\tfrac{1}{2}(\\mathbf{a}+\\mathbf{b})',
                    explanation: 'The \\( \\tfrac{1}{2}\\mathbf{c} \\) terms cancel. We deliberately routed through Z because both SZ and ZR are simple multiples already in hand.',
                },
                {
                    stepNumber: 8,
                    description: 'Compare \\( \\overrightarrow{PQ} \\) and \\( \\overrightarrow{SR} \\) to finish.',
                    workingLatex: '\\overrightarrow{PQ} = \\overrightarrow{SR} = \\tfrac{1}{2}(\\mathbf{a}+\\mathbf{b})',
                    explanation: 'PQ and SR are equal vectors — same length, same direction — so they are parallel and equal. A quadrilateral with one pair of equal-and-parallel opposite sides is a parallelogram (Varignon\'s theorem in action). ∎',
                },
            ],
            finalAnswer: 'a) \\( \\overrightarrow{WZ}=\\mathbf{a}+\\mathbf{b}+\\mathbf{c},\\) \\( \\overrightarrow{SW}=-\\tfrac{1}{2}(\\mathbf{a}+\\mathbf{b}+\\mathbf{c}),\\) \\( \\overrightarrow{SZ}=\\tfrac{1}{2}(\\mathbf{a}+\\mathbf{b}+\\mathbf{c}).\\)  b) \\( \\overrightarrow{PQ}=\\overrightarrow{SR}=\\tfrac{1}{2}(\\mathbf{a}+\\mathbf{b}),\\) so PQRS is a parallelogram.',
        },
    },

    {
        id: 'v1-004',
        topicRef: 'v1',
        topicTitle: 'Vectors 04',
        difficulty: 'Foundation',
        questionText:
            'In the triangle \\(XYZ,\\) the vector \\( \\mathbf{p} \\) represents \\( \\overrightarrow{XZ} \\) and the vector \\( \\mathbf{q} \\) represents \\( \\overrightarrow{YX}.\\) Express the following in terms of \\( \\mathbf{p} \\) and \\( \\mathbf{q} :\\)\n\na) \\( \\overrightarrow{XY} \\)\n\nb) \\( \\overrightarrow{YZ} \\)\n\nc) \\( \\overrightarrow{ZY} \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'triangle', 'reverse direction'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'a) Reverse the given vector \\( \\overrightarrow{YX} \\) to obtain \\( \\overrightarrow{XY}.\\)',
                    workingLatex: '\\overrightarrow{XY} = -\\overrightarrow{YX} = -\\mathbf{q}',
                    explanation: 'Going from X to Y is the exact opposite trip of going from Y to X — same length, opposite direction — so the vector picks up a minus sign.',
                    diagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 1], to: [4, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{p}', labelAt: [2, -0.3] }, { from: [2, 4], to: [0, 1], color: '#dc2626', arrow: true, label: '\\mathbf{q}', labelAt: [-0.5, 2.8] }, { from: [2, 4], to: [4, 0], color: '#888', dashed: true }], points: [{ at: [0, 1], label: 'X', labelAnchor: 'w', r: 3 }, { at: [2, 4], label: 'Y', labelAnchor: 'n', r: 3 }, { at: [4, 0], label: 'Z', labelAnchor: 'se', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'b) Travel Y → X → Z to build \\( \\overrightarrow{YZ}.\\)',
                    workingLatex: '\\overrightarrow{YZ} = \\overrightarrow{YX} + \\overrightarrow{XZ} = \\mathbf{q} + \\mathbf{p}',
                    explanation: 'Nose-to-tail addition: the intermediate point X cancels and only the start (Y) and end (Z) matter. Both contributing vectors are already in our basis.',
                },
                {
                    stepNumber: 3,
                    description: 'c) Reverse \\( \\overrightarrow{YZ} \\) to obtain \\( \\overrightarrow{ZY}.\\)',
                    workingLatex: '\\overrightarrow{ZY} = -\\overrightarrow{YZ} = -(\\mathbf{q}+\\mathbf{p}) = -\\mathbf{p}-\\mathbf{q}',
                    explanation: 'Negate the whole expression. Distributing the minus across the bracket changes the sign of every term.',
                },
            ],
            finalAnswer: 'a) \\(-\\mathbf{q}\\)\\quad b) \\(\\mathbf{q}+\\mathbf{p}\\)\\quad c) \\(-\\mathbf{p}-\\mathbf{q}\\)',
        },
    },

    {
        id: 'v1-005',
        topicRef: 'v1',
        topicTitle: 'Vectors 05',
        difficulty: 'Challenge',
        questionText:
            '\\(ABCD\\) is a parallelogram with \\( \\overrightarrow{AB} = \\mathbf{m} \\) and \\( \\overrightarrow{BC} = \\mathbf{n}.\\) The diagonals \\(AC\\) and \\(BD\\) intersect at \\(M.\\)\n\na) By writing \\(M\\) as both \\( \\overrightarrow{AM}=\\lambda\\overrightarrow{AC} \\) and \\( \\overrightarrow{BM}=\\mu\\overrightarrow{BD} \\) for scalars \\( \\lambda,\\mu,\\) find \\( \\lambda \\) and \\( \\mu,\\) and hence prove that the diagonals of a parallelogram bisect each other.\n\nb) The point \\(E\\) lies on the side \\(BC\\) with \\(BE:EC = 1:2,\\) and the line \\(AE\\) is extended to meet the line \\(DC\\) at \\(F.\\) Find \\( \\overrightarrow{AF} \\) in terms of \\( \\mathbf{m} \\) and \\( \\mathbf{n}.\\)',
        questionDiagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [4, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{m}', labelAt: [2, -0.5] }, { from: [4, 0], to: [5.5, 3], color: '#dc2626', arrow: true, label: '\\mathbf{n}', labelAt: [5.2, 1.5] }, { from: [0, 0], to: [1.5, 3], color: '#888' }, { from: [1.5, 3], to: [5.5, 3], color: '#888' }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 3 }, { at: [4, 0], label: 'B', labelAnchor: 'se', r: 3 }, { at: [5.5, 3], label: 'C', labelAnchor: 'ne', r: 3 }, { at: [1.5, 3], label: 'D', labelAnchor: 'nw', r: 3 }, { at: [4.5, 1], label: 'E', labelAnchor: 'e', r: 3 }] },
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'parallelogram', 'intersection', 'diagonals', 'ratio', 'proof'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up vectors with A as the base point.',
                    workingLatex: '\\overrightarrow{AB}=\\mathbf{m},\\ \\overrightarrow{AD}=\\overrightarrow{BC}=\\mathbf{n},\\ \\overrightarrow{AC}=\\mathbf{m}+\\mathbf{n}',
                    explanation: 'Opposite sides of a parallelogram are equal vectors, so \\( \\overrightarrow{AD}=\\overrightarrow{BC}=\\mathbf{n}.\\) The full diagonal AC is reached by going A → B → C, i.e. \\( \\mathbf{m}+\\mathbf{n}.\\)',
                    diagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [4, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{m}', labelAt: [2, -0.5] }, { from: [4, 0], to: [5.5, 3], color: '#dc2626', arrow: true, label: '\\mathbf{n}', labelAt: [5.2, 1.5] }, { from: [0, 0], to: [1.5, 3], color: '#888' }, { from: [1.5, 3], to: [5.5, 3], color: '#888' }, { from: [0, 0], to: [5.5, 3], color: '#888', dashed: true }, { from: [4, 0], to: [1.5, 3], color: '#888', dashed: true }, { from: [0, 0], to: [4.5, 1], color: '#047857', dashed: true, arrow: true, label: '\\overrightarrow{AF}', labelAt: [3.0, 0.2] }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 3 }, { at: [4, 0], label: 'B', labelAnchor: 's', r: 3 }, { at: [5.5, 3], label: 'C', labelAnchor: 'ne', r: 3 }, { at: [1.5, 3], label: 'D', labelAnchor: 'nw', r: 3 }, { at: [2.75, 1.5], label: 'M', labelAnchor: 'sw', r: 3 }, { at: [4.5, 1], label: 'E', labelAnchor: 'e', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Compute the other diagonal \\( \\overrightarrow{BD}.\\)',
                    workingLatex: '\\overrightarrow{BD} = \\overrightarrow{AD}-\\overrightarrow{AB} = \\mathbf{n}-\\mathbf{m}',
                    explanation: 'BD is the second diagonal. Subtract the position vectors of B and D (both measured from A) to get the displacement B → D.',
                },
                {
                    stepNumber: 3,
                    description: 'a) Express the intersection point M two different ways.',
                    workingLatex: '\\overrightarrow{AM} = \\lambda\\,\\overrightarrow{AC} = \\overrightarrow{AB}+\\mu\\,\\overrightarrow{BD}',
                    explanation: 'Because M lies on diagonal AC, \\( \\overrightarrow{AM}=\\lambda\\overrightarrow{AC} \\) for some scalar \\(\\lambda.\\) Because M also lies on diagonal BD, we can reach it from A by going to B first, then a fraction \\(\\mu\\) along BD.',
                },
                {
                    stepNumber: 4,
                    description: 'Substitute the basis expressions and expand.',
                    workingLatex: '\\lambda(\\mathbf{m}+\\mathbf{n}) = \\mathbf{m}+\\mu(\\mathbf{n}-\\mathbf{m})',
                    explanation: 'Replace \\( \\overrightarrow{AC} \\) and \\( \\overrightarrow{BD} \\) with their basis forms so both sides are written purely in \\( \\mathbf{m},\\mathbf{n}.\\)',
                },
                {
                    stepNumber: 5,
                    description: 'Compare coefficients of \\( \\mathbf{m} \\) and \\( \\mathbf{n}.\\)',
                    workingLatex: '\\mathbf{m}:\\ \\lambda = 1-\\mu.\\quad \\mathbf{n}:\\ \\lambda = \\mu',
                    explanation: '\\( \\mathbf{m} \\) and \\( \\mathbf{n} \\) are non-parallel, so the only way the two sides can be equal as vectors is if the coefficients of each basis vector match independently.',
                },
                {
                    stepNumber: 6,
                    description: 'Solve the simultaneous equations.',
                    workingLatex: '\\mu = 1-\\mu \\;\\Longrightarrow\\; \\mu = \\tfrac{1}{2},\\ \\lambda = \\tfrac{1}{2}',
                    explanation: 'Substitute \\( \\lambda=\\mu \\) into \\( \\lambda=1-\\mu \\) to get a single equation in \\( \\mu.\\) Both scalars equal \\( \\tfrac{1}{2},\\) confirming M is the midpoint of both diagonals — they bisect each other. ∎',
                },
                {
                    stepNumber: 7,
                    description: 'b) Locate E on BC using \\(BE:EC=1:2.\\)',
                    workingLatex: '\\overrightarrow{BE} = \\tfrac{1}{3}\\overrightarrow{BC} = \\tfrac{1}{3}\\mathbf{n}',
                    explanation: 'The ratio splits BC into three equal parts, with E one part along from B.',
                },
                {
                    stepNumber: 8,
                    description: 'Express \\( \\overrightarrow{AE} \\) via the route A → B → E.',
                    workingLatex: '\\overrightarrow{AE} = \\overrightarrow{AB}+\\overrightarrow{BE} = \\mathbf{m}+\\tfrac{1}{3}\\mathbf{n}',
                    explanation: 'Add the two legs nose-to-tail. AE is the direction we will extend to reach F.',
                },
                {
                    stepNumber: 9,
                    description: 'Parameterise line AE and line DC.',
                    workingLatex: '\\text{Line }AE:\\ t\\,\\overrightarrow{AE};\\quad \\text{Line }DC:\\ \\overrightarrow{AD}+s\\,\\overrightarrow{DC}=\\mathbf{n}+s\\mathbf{m}',
                    explanation: 'A general point on line AE is a scalar multiple \\(t\\) of \\( \\overrightarrow{AE}.\\) A general point on line DC starts at D and travels a multiple \\(s\\) of \\( \\overrightarrow{DC}=\\mathbf{m}.\\) F is on both lines, so the two expressions can be equated.',
                },
                {
                    stepNumber: 10,
                    description: 'Equate the two expressions.',
                    workingLatex: 't\\!\\left(\\mathbf{m}+\\tfrac{1}{3}\\mathbf{n}\\right) = s\\mathbf{m}+\\mathbf{n}',
                    explanation: 'F is the unique point common to both lines, so the two parameter expressions for F must be the same vector from A.',
                },
                {
                    stepNumber: 11,
                    description: 'Compare coefficients and solve for \\(t.\\)',
                    workingLatex: '\\mathbf{n}:\\ \\tfrac{t}{3}=1 \\;\\Longrightarrow\\; t=3.\\quad \\mathbf{m}:\\ t=s \\;\\Longrightarrow\\; s=3',
                    explanation: 'The \\( \\mathbf{n} \\)-coefficient gives \\(t\\) immediately. The \\( \\mathbf{m} \\) equation then gives \\(s,\\) confirming the system is consistent.',
                },
                {
                    stepNumber: 12,
                    description: 'Substitute \\(t=3\\) to find \\( \\overrightarrow{AF}.\\)',
                    workingLatex: '\\overrightarrow{AF} = 3\\overrightarrow{AE} = 3\\mathbf{m}+\\mathbf{n}',
                    explanation: 'Since \\(s=3,\\) we also see \\( \\overrightarrow{DF}=3\\mathbf{m},\\) which is \\(2\\mathbf{m}\\) beyond C on the line DC — F is beyond C along the extension of side DC.',
                },
            ],
            finalAnswer: 'a) \\( \\lambda=\\mu=\\tfrac{1}{2},\\) so M is the midpoint of both diagonals — the diagonals bisect each other.  b) \\( \\overrightarrow{AF} = 3\\mathbf{m}+\\mathbf{n}.\\)',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 2  (Q6–Q10)  Foundation/Intermediate — midpoints, scalar multiples
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 'v1-006',
        topicRef: 'v1',
        topicTitle: 'Vectors 06',
        difficulty: 'Foundation',
        questionText:
            'State whether each of the following is a scalar, a vector, or neither.\n\na) A car travelling north-east at 60 km/h.\n\nb) The temperature of a room is 21°C.\n\nc) An acceleration of 3 m/s² upwards.\n\nd) A mass of 5 kg.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'scalars', 'definitions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'a) A car travelling north-east at 60 km/h — vector.',
                    workingLatex: '\\text{Vector (velocity)}',
                    explanation: 'The quantity has a magnitude (60 km/h) AND a direction (north-east), so it is a vector. The name for a velocity with direction attached is "velocity".',
                },
                {
                    stepNumber: 2,
                    description: 'b) Temperature of 21°C — scalar.',
                    workingLatex: '\\text{Scalar}',
                    explanation: 'Temperature is a magnitude with no direction associated to it. Saying "21°C towards the north" makes no sense, so it must be a scalar.',
                },
                {
                    stepNumber: 3,
                    description: 'c) Acceleration of 3 m/s² upwards — vector.',
                    workingLatex: '\\text{Vector}',
                    explanation: 'The word "upwards" specifies a direction, and 3 m/s² is the magnitude. Whenever the problem pins down a direction alongside a size, the quantity is a vector.',
                },
                {
                    stepNumber: 4,
                    description: 'd) Mass of 5 kg — scalar.',
                    workingLatex: '\\text{Scalar}',
                    explanation: 'Mass is a property of an object that has no direction. Watch out: weight (the gravitational force) IS a vector, but mass is not.',
                },
            ],
            finalAnswer: 'a) Vector b) Scalar c) Vector d) Scalar',
        },
    },

    {
        id: 'v1-007',
        topicRef: 'v1',
        topicTitle: 'Vectors 07',
        difficulty: 'Challenge',
        questionText:
            'In triangle \\(ABC,\\) \\(M\\) is the midpoint of \\(BC\\) and \\(N\\) is the midpoint of \\(AC.\\) The medians \\(AM\\) and \\(BN\\) intersect at \\(G.\\) Take \\( \\overrightarrow{AB} = \\mathbf{a} \\) and \\( \\overrightarrow{AC} = \\mathbf{b}.\\)\n\na) Find \\( \\overrightarrow{AM} \\) and \\( \\overrightarrow{BN} \\) in terms of \\( \\mathbf{a} \\) and \\( \\mathbf{b}.\\)\n\nb) Writing \\( \\overrightarrow{AG}=\\lambda\\overrightarrow{AM} \\) and \\( \\overrightarrow{BG}=\\mu\\overrightarrow{BN},\\) find \\( \\lambda \\) and \\( \\mu,\\) and hence prove that the medians divide each other in the ratio \\(2:1.\\)',
        questionDiagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [4, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2, -0.5] }, { from: [0, 0], to: [2, 4], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [0.5, 2.2] }, { from: [4, 0], to: [2, 4], color: '#888' }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 3 }, { at: [4, 0], label: 'B', labelAnchor: 'se', r: 3 }, { at: [2, 4], label: 'C', labelAnchor: 'n', r: 3 }, { at: [3, 2], label: 'M', labelAnchor: 'e', r: 3 }, { at: [1, 2], label: 'N', labelAnchor: 'w', r: 3 }, { at: [2, 1.33], label: 'G', labelAnchor: 's', r: 3 }] },
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'triangle', 'midpoint', 'medians', 'centroid', 'proof'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'a) Find \\( \\overrightarrow{BC} \\) via the route B → A → C.',
                    workingLatex: '\\overrightarrow{BC} = \\overrightarrow{BA}+\\overrightarrow{AC} = -\\mathbf{a}+\\mathbf{b}',
                    explanation: 'Reverse the AB arrow to get \\( \\overrightarrow{BA}=-\\mathbf{a},\\) then add \\( \\overrightarrow{AC}=\\mathbf{b}.\\) BC will be halved on the next line to find the midpoint.',
                    diagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [4, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2, -0.5] }, { from: [0, 0], to: [2, 4], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [0.5, 2.2] }, { from: [4, 0], to: [2, 4], color: '#888' }, { from: [0, 0], to: [3, 2], color: '#047857', dashed: true, arrow: true, label: '\\overrightarrow{AM}', labelAt: [1.4, 1.4] }, { from: [4, 0], to: [1, 2], color: '#a16207', dashed: true, arrow: true, label: '\\overrightarrow{BN}', labelAt: [2.6, 0.7] }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 3 }, { at: [4, 0], label: 'B', labelAnchor: 'se', r: 3 }, { at: [2, 4], label: 'C', labelAnchor: 'n', r: 3 }, { at: [3, 2], label: 'M', labelAnchor: 'e', r: 3 }, { at: [1, 2], label: 'N', labelAnchor: 'w', r: 3 }, { at: [2, 1.33], label: 'G', labelAnchor: 's', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Reach M from A via A → B → M.',
                    workingLatex: '\\overrightarrow{AM} = \\overrightarrow{AB}+\\tfrac{1}{2}\\overrightarrow{BC} = \\mathbf{a}+\\tfrac{1}{2}(-\\mathbf{a}+\\mathbf{b})',
                    explanation: 'Halve BC to land on its midpoint M. Travel AB first, then half of BC.',
                },
                {
                    stepNumber: 3,
                    description: 'Simplify \\( \\overrightarrow{AM}.\\)',
                    workingLatex: '\\overrightarrow{AM} = \\mathbf{a}-\\tfrac{1}{2}\\mathbf{a}+\\tfrac{1}{2}\\mathbf{b} = \\tfrac{1}{2}\\mathbf{a}+\\tfrac{1}{2}\\mathbf{b}',
                    explanation: 'Distribute the \\( \\tfrac{1}{2} \\) and collect like terms.',
                },
                {
                    stepNumber: 4,
                    description: 'N is the midpoint of AC, so \\( \\overrightarrow{AN}=\\tfrac{1}{2}\\mathbf{b}.\\) Compute \\( \\overrightarrow{BN}.\\)',
                    workingLatex: '\\overrightarrow{BN} = \\overrightarrow{AN}-\\overrightarrow{AB} = \\tfrac{1}{2}\\mathbf{b}-\\mathbf{a}',
                    explanation: 'Subtract position vectors taken from A to get the displacement B → N.',
                },
                {
                    stepNumber: 5,
                    description: 'b) Express G two ways: along AM, and via B then along BN.',
                    workingLatex: '\\overrightarrow{AG} = \\lambda\\overrightarrow{AM} = \\overrightarrow{AB}+\\mu\\overrightarrow{BN}',
                    explanation: 'G lies on AM (so \\(\\lambda\\) of the way from A to M) and on BN (so reaching it from A means first travelling AB, then \\(\\mu\\) of BN).',
                },
                {
                    stepNumber: 6,
                    description: 'Substitute the basis expressions.',
                    workingLatex: '\\lambda\\!\\left(\\tfrac{1}{2}\\mathbf{a}+\\tfrac{1}{2}\\mathbf{b}\\right) = \\mathbf{a}+\\mu\\!\\left(\\tfrac{1}{2}\\mathbf{b}-\\mathbf{a}\\right)',
                    explanation: 'Replace each named vector with its \\( \\mathbf{a},\\mathbf{b} \\) form, so both sides are written in the same basis.',
                },
                {
                    stepNumber: 7,
                    description: 'Compare coefficients of \\( \\mathbf{a} \\) and \\( \\mathbf{b}.\\)',
                    workingLatex: '\\mathbf{a}:\\ \\tfrac{1}{2}\\lambda = 1-\\mu.\\quad \\mathbf{b}:\\ \\tfrac{1}{2}\\lambda = \\tfrac{1}{2}\\mu',
                    explanation: '\\( \\mathbf{a},\\mathbf{b} \\) are non-parallel, so the coefficients of each must match independently.',
                },
                {
                    stepNumber: 8,
                    description: 'Use the \\( \\mathbf{b} \\) equation to deduce \\( \\lambda=\\mu.\\)',
                    workingLatex: '\\tfrac{1}{2}\\lambda = \\tfrac{1}{2}\\mu \\;\\Longrightarrow\\; \\lambda=\\mu',
                    explanation: 'Cancel the common factor \\( \\tfrac{1}{2}.\\)',
                },
                {
                    stepNumber: 9,
                    description: 'Solve the \\( \\mathbf{a} \\) equation for \\( \\lambda.\\)',
                    workingLatex: '\\tfrac{1}{2}\\lambda = 1-\\lambda \\;\\Longrightarrow\\; \\tfrac{3}{2}\\lambda = 1 \\;\\Longrightarrow\\; \\lambda = \\tfrac{2}{3}',
                    explanation: 'Add \\( \\lambda \\) to both sides to collect like terms. So \\( \\mu=\\lambda=\\tfrac{2}{3} \\): G divides each median in the ratio \\(2:1\\) from the vertex (the centroid). ∎',
                },
            ],
            finalAnswer: 'a) \\( \\overrightarrow{AM}=\\tfrac{1}{2}(\\mathbf{a}+\\mathbf{b}),\\) \\( \\overrightarrow{BN}=-\\mathbf{a}+\\tfrac{1}{2}\\mathbf{b}.\\)  b) \\( \\lambda=\\mu=\\tfrac{2}{3},\\) so each median divides the other in the ratio 2:1 at G (the centroid).',
        },
    },

    {
        id: 'v1-008',
        topicRef: 'v1',
        topicTitle: 'Vectors 08',
        difficulty: 'Standard',
        questionText:
            'In triangle \\(DEF,\\) \\(J\\) is the midpoint of \\(ED\\) and \\(L\\) is the midpoint of \\(FD.\\) \\( \\overrightarrow{EF} = \\mathbf{f} \\) and \\( \\overrightarrow{ED} = \\mathbf{d}.\\) Prove that \\( \\overrightarrow{JL} = \\tfrac{1}{2}\\mathbf{f}.\\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'triangle', 'midpoint', 'proof'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Locate J as the midpoint of ED.',
                    workingLatex: '\\overrightarrow{EJ} = \\tfrac{1}{2}\\overrightarrow{ED} = \\tfrac{1}{2}\\mathbf{d}',
                    explanation: 'J halves ED, so the displacement E → J is half of E → D. We will eventually reach L from J via E.',
                    diagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{f}', labelAt: [2.5, -0.5] }, { from: [0, 0], to: [2, 4], color: '#dc2626', arrow: true, label: '\\mathbf{d}', labelAt: [0.5, 2.2] }, { from: [5, 0], to: [2, 4], color: '#888' }, { from: [1, 2], to: [3.5, 2], color: '#047857', dashed: true, arrow: true }], points: [{ at: [0, 0], label: 'E', labelAnchor: 'sw', r: 3 }, { at: [5, 0], label: 'F', labelAnchor: 'se', r: 3 }, { at: [2, 4], label: 'D', labelAnchor: 'n', r: 3 }, { at: [1, 2], label: 'J', labelAnchor: 'w', r: 3 }, { at: [3.5, 2], label: 'L', labelAnchor: 'e', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( \\overrightarrow{FD} \\) via the route F → E → D.',
                    workingLatex: '\\overrightarrow{FD} = \\overrightarrow{FE}+\\overrightarrow{ED} = -\\mathbf{f}+\\mathbf{d}',
                    explanation: 'Reverse \\( \\overrightarrow{EF} \\) to get \\( \\overrightarrow{FE}=-\\mathbf{f},\\) then add \\( \\overrightarrow{ED}=\\mathbf{d}.\\)',
                },
                {
                    stepNumber: 3,
                    description: 'Locate L (midpoint of FD) using \\( \\overrightarrow{FL}=\\tfrac{1}{2}\\overrightarrow{FD}.\\)',
                    workingLatex: '\\overrightarrow{FL} = \\tfrac{1}{2}(-\\mathbf{f}+\\mathbf{d})',
                    explanation: 'L halves FD, so the displacement F → L is half of \\( \\overrightarrow{FD}.\\)',
                },
                {
                    stepNumber: 4,
                    description: 'Compute \\( \\overrightarrow{EL} \\) via E → F → L.',
                    workingLatex: '\\overrightarrow{EL} = \\overrightarrow{EF}+\\overrightarrow{FL} = \\mathbf{f}+\\tfrac{1}{2}(-\\mathbf{f}+\\mathbf{d}) = \\tfrac{1}{2}\\mathbf{f}+\\tfrac{1}{2}\\mathbf{d}',
                    explanation: 'Add the two legs nose-to-tail, then distribute the \\( \\tfrac{1}{2} \\) and collect like terms.',
                },
                {
                    stepNumber: 5,
                    description: 'Compute \\( \\overrightarrow{JL} \\) via J → E → L.',
                    workingLatex: '\\overrightarrow{JL} = \\overrightarrow{JE}+\\overrightarrow{EL} = -\\tfrac{1}{2}\\mathbf{d}+\\tfrac{1}{2}\\mathbf{f}+\\tfrac{1}{2}\\mathbf{d}',
                    explanation: 'Reverse EJ to get \\( \\overrightarrow{JE}=-\\tfrac{1}{2}\\mathbf{d}.\\) Then add the previously found EL.',
                },
                {
                    stepNumber: 6,
                    description: 'Simplify to finish the proof.',
                    workingLatex: '\\overrightarrow{JL} = \\tfrac{1}{2}\\mathbf{f}',
                    explanation: 'The \\( \\mathbf{d} \\) terms cancel, leaving the required result. (This is the midpoint theorem: the line segment joining midpoints of two sides of a triangle is parallel to the third side and half its length.) ∎',
                },
            ],
            finalAnswer: '\\( \\overrightarrow{JL} = \\tfrac{1}{2}\\mathbf{f} \\) — proven.',
        },
    },

    {
        id: 'v1-009',
        topicRef: 'v1',
        topicTitle: 'Vectors 09',
        difficulty: 'Challenge',
        questionText:
            'The non-zero vectors \\( \\mathbf{a} \\) and \\( \\mathbf{b} \\) are non-parallel. Given that \\( (3\\lambda - 2)\\mathbf{a} + (\\mu + 1)\\mathbf{b} \\) is parallel to \\( 4\\mathbf{a} - 6\\mathbf{b},\\) and that\n\\[\n\\lambda + \\mu = 7,\n\\]\nfind the values of \\( \\lambda \\) and \\( \\mu.\\)',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'parallel', 'simultaneous equations', 'unknowns'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Translate "parallel" into a scalar-multiple equation.',
                    workingLatex: '(3\\lambda-2)\\mathbf{a}+(\\mu+1)\\mathbf{b} = k(4\\mathbf{a}-6\\mathbf{b})',
                    explanation: 'Two vectors are parallel iff one is a scalar multiple of the other. Introduce a fresh scalar \\(k\\) for that multiple — this is what "parallel" means algebraically.',
                },
                {
                    stepNumber: 2,
                    description: 'Compare coefficients of \\( \\mathbf{a} \\) and \\( \\mathbf{b} \\) (non-parallel basis).',
                    workingLatex: '\\mathbf{a}:\\ 3\\lambda-2 = 4k.\\quad \\mathbf{b}:\\ \\mu+1 = -6k',
                    explanation: 'Because \\( \\mathbf{a},\\mathbf{b} \\) are non-parallel, no \\(\\mathbf{a}\\)-term can be absorbed by a \\(\\mathbf{b}\\)-term. The coefficients on each side must match independently.',
                },
                {
                    stepNumber: 3,
                    description: 'Eliminate \\(k\\) by expressing it from each equation and equating.',
                    workingLatex: 'k = \\dfrac{3\\lambda-2}{4} = -\\dfrac{\\mu+1}{6}',
                    explanation: 'From the \\( \\mathbf{a} \\) line \\( k=(3\\lambda-2)/4,\\) from the \\( \\mathbf{b} \\) line \\( k=-(\\mu+1)/6.\\) Setting them equal removes \\(k\\) from the system.',
                },
                {
                    stepNumber: 4,
                    description: 'Cross-multiply to clear fractions.',
                    workingLatex: '6(3\\lambda-2) = -4(\\mu+1)',
                    explanation: 'Multiply both sides by 24 (equivalently cross-multiply) to eliminate the denominators.',
                },
                {
                    stepNumber: 5,
                    description: 'Expand and simplify to a clean equation in \\( \\lambda \\) and \\( \\mu.\\)',
                    workingLatex: '18\\lambda - 12 = -4\\mu - 4 \\;\\Longrightarrow\\; 18\\lambda + 4\\mu = 8 \\;\\Longrightarrow\\; 9\\lambda + 2\\mu = 4',
                    explanation: 'Distribute, move all terms to one side, then divide through by 2 to keep coefficients small.',
                },
                {
                    stepNumber: 6,
                    description: 'Combine with the constraint \\( \\lambda+\\mu=7 \\) by substitution.',
                    workingLatex: '\\mu = 7-\\lambda \\;\\Longrightarrow\\; 9\\lambda + 2(7-\\lambda) = 4',
                    explanation: 'Solve the constraint for \\(\\mu\\) and substitute into the parallel-derived equation to get a single-variable equation in \\( \\lambda.\\)',
                },
                {
                    stepNumber: 7,
                    description: 'Solve for \\( \\lambda.\\)',
                    workingLatex: '9\\lambda+14-2\\lambda = 4 \\;\\Longrightarrow\\; 7\\lambda = -10 \\;\\Longrightarrow\\; \\lambda = -\\tfrac{10}{7}',
                    explanation: 'Expand the bracket, collect like terms, and isolate \\( \\lambda.\\)',
                },
                {
                    stepNumber: 8,
                    description: 'Back-substitute to find \\( \\mu.\\)',
                    workingLatex: '\\mu = 7-\\lambda = 7+\\tfrac{10}{7} = \\tfrac{49}{7}+\\tfrac{10}{7} = \\tfrac{59}{7}',
                    explanation: 'Convert \\(7\\) to sevenths before adding so the arithmetic is bookkeeping-clean.',
                },
                {
                    stepNumber: 9,
                    description: 'Sanity check via the scalar \\(k.\\)',
                    workingLatex: '3\\lambda-2 = -\\tfrac{44}{7},\\ \\mu+1=\\tfrac{66}{7};\\quad \\tfrac{-44/7}{4} = -\\tfrac{11}{7},\\ \\tfrac{66/7}{-6} = -\\tfrac{11}{7}',
                    explanation: 'Both ratios give the same \\(k=-\\tfrac{11}{7},\\) confirming our \\( (\\lambda,\\mu) \\) is consistent.',
                },
            ],
            finalAnswer: '\\( \\lambda = -\\tfrac{10}{7},\\quad \\mu = \\tfrac{59}{7}.\\)',
        },
    },

    {
        id: 'v1-010',
        topicRef: 'v1',
        topicTitle: 'Vectors 10',
        difficulty: 'Standard',
        questionText:
            'Group the following into sets of parallel vectors:\n\n\\( 3\\mathbf{a}+\\mathbf{b},\\quad 6\\mathbf{a}+2\\mathbf{b},\\quad 2\\mathbf{a}-\\mathbf{b},\\quad -4\\mathbf{a}+2\\mathbf{b},\\quad -9\\mathbf{a}-3\\mathbf{b},\\quad \\tfrac{1}{2}\\mathbf{b}-\\mathbf{a} \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'parallel', 'scalar multiples', 'grouping'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Pick the simplest vector and test the others against it.',
                    workingLatex: '\\text{Reference: }3\\mathbf{a}+\\mathbf{b}.\\ \\text{Ratio of coefficients }\\mathbf{a}:\\mathbf{b}\\ \\text{is }3:1.',
                    explanation: 'Two vectors are parallel iff their \\( \\mathbf{a}:\\mathbf{b} \\) coefficient ratios are equal (and both basis vectors are non-zero non-parallel). Choosing one to compare everything else against keeps the bookkeeping simple.',
                },
                {
                    stepNumber: 2,
                    description: 'Identify the first parallel group as scalar multiples of \\(3\\mathbf{a}+\\mathbf{b}.\\)',
                    workingLatex: '6\\mathbf{a}+2\\mathbf{b} = 2(3\\mathbf{a}+\\mathbf{b}),\\quad -9\\mathbf{a}-3\\mathbf{b} = -3(3\\mathbf{a}+\\mathbf{b})',
                    explanation: 'Both \\(6\\mathbf{a}+2\\mathbf{b}\\) and \\(-9\\mathbf{a}-3\\mathbf{b}\\) factor out cleanly to give scalar multiples of \\(3\\mathbf{a}+\\mathbf{b},\\) so they belong to the first group.',
                },
                {
                    stepNumber: 3,
                    description: 'Test the remaining vectors against \\(2\\mathbf{a}-\\mathbf{b}\\) (ratio \\(2:-1\\)).',
                    workingLatex: '-4\\mathbf{a}+2\\mathbf{b} = -2(2\\mathbf{a}-\\mathbf{b}),\\quad \\tfrac{1}{2}\\mathbf{b}-\\mathbf{a} = -\\tfrac{1}{2}(2\\mathbf{a}-\\mathbf{b})',
                    explanation: 'Both factor out as multiples of \\(2\\mathbf{a}-\\mathbf{b}.\\) That gives the second parallel group.',
                },
                {
                    stepNumber: 4,
                    description: 'Confirm the two groups are NOT parallel to each other.',
                    workingLatex: '3:1 \\neq 2:-1',
                    explanation: 'The two groups have different coefficient ratios, so they are mutually non-parallel. Together they partition all six vectors into exactly two parallel classes.',
                },
            ],
            finalAnswer: 'Group 1: \\(3\\mathbf{a}+\\mathbf{b},\\; 6\\mathbf{a}+2\\mathbf{b},\\; -9\\mathbf{a}-3\\mathbf{b}.\\) Group 2: \\(2\\mathbf{a}-\\mathbf{b},\\; -4\\mathbf{a}+2\\mathbf{b},\\; \\tfrac{1}{2}\\mathbf{b}-\\mathbf{a}.\\)',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 3  (Q11–Q15)  Intermediate — parallel proofs, shapes with labelled vectors
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 'v1-011',
        topicRef: 'v1',
        topicTitle: 'Vectors 11',
        difficulty: 'Standard',
        questionText:
            '\\(ABCD\\) is a parallelogram. \\( \\overrightarrow{BA} = \\mathbf{n} \\) and \\( \\overrightarrow{BD} = \\mathbf{m}.\\) Find \\( \\overrightarrow{BC} \\) in terms of \\( \\mathbf{n} \\) and \\( \\mathbf{m}.\\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'parallelogram', 'diagonal'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the parallelogram property \\( \\overrightarrow{BC} = \\overrightarrow{AD}.\\)',
                    workingLatex: '\\overrightarrow{BC} = \\overrightarrow{AD}',
                    explanation: 'Opposite sides of a parallelogram are equal as vectors. So finding AD will finish the job — and AD is reachable in our basis.',
                    diagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [4, 0], to: [0, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{n}', labelAt: [2, -0.5] }, { from: [4, 0], to: [1.5, 3], color: '#dc2626', arrow: true, label: '\\mathbf{m}', labelAt: [2.2, 1.8] }, { from: [0, 0], to: [1.5, 3], color: '#888' }, { from: [1.5, 3], to: [5.5, 3], color: '#888' }, { from: [4, 0], to: [5.5, 3], color: '#888' }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 3 }, { at: [4, 0], label: 'B', labelAnchor: 'se', r: 3 }, { at: [5.5, 3], label: 'C', labelAnchor: 'ne', r: 3 }, { at: [1.5, 3], label: 'D', labelAnchor: 'nw', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( \\overrightarrow{AD} \\) via the route A → B → D.',
                    workingLatex: '\\overrightarrow{AD} = \\overrightarrow{AB} + \\overrightarrow{BD}',
                    explanation: 'Travel from A to B first, then along the given diagonal BD. Nose-to-tail addition lands us at D.',
                },
                {
                    stepNumber: 3,
                    description: 'Reverse \\( \\overrightarrow{BA} \\) to obtain \\( \\overrightarrow{AB}.\\)',
                    workingLatex: '\\overrightarrow{AB} = -\\overrightarrow{BA} = -\\mathbf{n}',
                    explanation: 'BA is given as \\(\\mathbf{n};\\) flipping the arrow negates the vector.',
                },
                {
                    stepNumber: 4,
                    description: 'Substitute and conclude.',
                    workingLatex: '\\overrightarrow{AD} = -\\mathbf{n} + \\mathbf{m},\\quad \\overrightarrow{BC} = \\mathbf{m} - \\mathbf{n}',
                    explanation: 'AD = −n + m; by the parallelogram property BC equals AD, which we rewrite as m − n.',
                },
            ],
            finalAnswer: '\\( \\overrightarrow{BC} = \\mathbf{m} - \\mathbf{n} \\)',
        },
    },

    {
        id: 'v1-012',
        topicRef: 'v1',
        topicTitle: 'Vectors 12',
        difficulty: 'Standard',
        questionText:
            '\\( \\overrightarrow{XY} = \\mathbf{a},\\) \\( \\overrightarrow{XZ} = \\mathbf{b}.\\) \\(P\\) is the midpoint of \\(YZ\\) and \\(Q\\) is the midpoint of \\(XY.\\) Show that \\( \\overrightarrow{PQ} \\) is parallel to \\( \\overrightarrow{XZ}.\\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'triangle', 'midpoint', 'parallel proof'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( \\overrightarrow{YZ} \\) via Y → X → Z.',
                    workingLatex: '\\overrightarrow{YZ} = \\overrightarrow{YX}+\\overrightarrow{XZ} = -\\mathbf{a} + \\mathbf{b}',
                    explanation: 'Reverse XY to get \\( \\overrightarrow{YX}=-\\mathbf{a},\\) then add XZ. Nose-to-tail.',
                    diagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [4, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2, -0.5] }, { from: [0, 0], to: [2, 4], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [0.5, 2.2] }, { from: [4, 0], to: [2, 4], color: '#888' }, { from: [3, 2], to: [2, 0], color: '#047857', dashed: true, arrow: true }], points: [{ at: [0, 0], label: 'X', labelAnchor: 'sw', r: 3 }, { at: [4, 0], label: 'Y', labelAnchor: 'se', r: 3 }, { at: [2, 4], label: 'Z', labelAnchor: 'n', r: 3 }, { at: [3, 2], label: 'P', labelAnchor: 'e', r: 3 }, { at: [2, 0], label: 'Q', labelAnchor: 's', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Reach P (midpoint of YZ) from X via X → Y → P.',
                    workingLatex: '\\overrightarrow{XP} = \\overrightarrow{XY}+\\tfrac{1}{2}\\overrightarrow{YZ} = \\mathbf{a}+\\tfrac{1}{2}(-\\mathbf{a}+\\mathbf{b})',
                    explanation: 'Travel XY first, then half of YZ to land on the midpoint. Halving applies to YZ in its full direction.',
                },
                {
                    stepNumber: 3,
                    description: 'Simplify \\( \\overrightarrow{XP}.\\)',
                    workingLatex: '\\overrightarrow{XP} = \\tfrac{1}{2}\\mathbf{a}+\\tfrac{1}{2}\\mathbf{b}',
                    explanation: 'Distribute the half across the bracket and combine the \\( \\mathbf{a} \\) terms.',
                },
                {
                    stepNumber: 4,
                    description: 'Locate Q (midpoint of XY).',
                    workingLatex: '\\overrightarrow{XQ} = \\tfrac{1}{2}\\overrightarrow{XY} = \\tfrac{1}{2}\\mathbf{a}',
                    explanation: 'Q halves XY, so the displacement X → Q is half of \\( \\overrightarrow{XY}=\\mathbf{a}.\\)',
                },
                {
                    stepNumber: 5,
                    description: 'Compute \\( \\overrightarrow{PQ} \\) by subtracting position vectors from X.',
                    workingLatex: '\\overrightarrow{PQ} = \\overrightarrow{XQ}-\\overrightarrow{XP} = \\tfrac{1}{2}\\mathbf{a}-\\left(\\tfrac{1}{2}\\mathbf{a}+\\tfrac{1}{2}\\mathbf{b}\\right) = -\\tfrac{1}{2}\\mathbf{b}',
                    explanation: 'Subtract position vectors taken from the same base point X. The \\(\\mathbf{a}\\) terms cancel.',
                },
                {
                    stepNumber: 6,
                    description: 'Identify the scalar multiple to finish the parallel proof.',
                    workingLatex: '\\overrightarrow{PQ} = -\\tfrac{1}{2}\\,\\overrightarrow{XZ}',
                    explanation: 'PQ is \\( -\\tfrac{1}{2} \\) times \\( \\overrightarrow{XZ}=\\mathbf{b},\\) i.e. a scalar multiple of XZ — therefore PQ ∥ XZ. ∎',
                },
            ],
            finalAnswer: '\\( \\overrightarrow{PQ} = -\\tfrac{1}{2}\\mathbf{b},\\) a scalar multiple of \\(\\overrightarrow{XZ},\\) so they are parallel.',
        },
    },

    {
        id: 'v1-013',
        topicRef: 'v1',
        topicTitle: 'Vectors 13',
        difficulty: 'Standard',
        questionText:
            'Given that \\( \\overrightarrow{TU} = \\mathbf{v} - \\mathbf{w} \\) and \\( \\overrightarrow{ST} = 2\\mathbf{v} + \\mathbf{w},\\) show that \\( \\overrightarrow{US} \\) is parallel to \\( \\mathbf{v}.\\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'parallel proof', 'reverse'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Plan the route U → T → S.',
                    workingLatex: '\\overrightarrow{US} = \\overrightarrow{UT} + \\overrightarrow{TS}',
                    explanation: 'Neither of the given vectors goes in the direction we want, so we will reverse them. T is the natural intermediate point because both given vectors involve T.',
                },
                {
                    stepNumber: 2,
                    description: 'Reverse \\( \\overrightarrow{TU} \\) to get \\( \\overrightarrow{UT}.\\)',
                    workingLatex: '\\overrightarrow{UT} = -\\overrightarrow{TU} = -(\\mathbf{v}-\\mathbf{w}) = -\\mathbf{v}+\\mathbf{w}',
                    explanation: 'Negate the given vector and distribute the minus inside the bracket.',
                },
                {
                    stepNumber: 3,
                    description: 'Reverse \\( \\overrightarrow{ST} \\) to get \\( \\overrightarrow{TS}.\\)',
                    workingLatex: '\\overrightarrow{TS} = -\\overrightarrow{ST} = -(2\\mathbf{v}+\\mathbf{w}) = -2\\mathbf{v}-\\mathbf{w}',
                    explanation: 'Same idea — negate and distribute.',
                },
                {
                    stepNumber: 4,
                    description: 'Add the two legs and simplify.',
                    workingLatex: '\\overrightarrow{US} = (-\\mathbf{v}+\\mathbf{w})+(-2\\mathbf{v}-\\mathbf{w}) = -3\\mathbf{v}',
                    explanation: 'The \\(\\mathbf{w}\\) terms cancel, leaving \\(-3\\mathbf{v}.\\) Because this is a scalar multiple of \\(\\mathbf{v},\\) US is parallel to \\(\\mathbf{v}.\\) ∎',
                },
            ],
            finalAnswer: '\\( \\overrightarrow{US} = -3\\mathbf{v},\\) so \\( \\overrightarrow{US} \\) is parallel to \\( \\mathbf{v}.\\)',
        },
    },

    {
        id: 'v1-014',
        topicRef: 'v1',
        topicTitle: 'Vectors 14',
        difficulty: 'Standard',
        questionText:
            'In the rectangle \\(ABCD,\\) \\(E\\) is the midpoint of \\(AD\\) and \\(F\\) divides \\(DC\\) in the ratio \\(2:1.\\) If \\( \\overrightarrow{AB} = \\mathbf{b} \\) and \\( \\overrightarrow{AD} = \\mathbf{d},\\) find:\n\na) \\( \\overrightarrow{DF} \\)\n\nb) \\( \\overrightarrow{BE} \\)\n\nc) \\( \\overrightarrow{EF} \\)',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'rectangle', 'midpoint', 'ratio'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'a) F divides DC in the ratio 2:1, with \\( \\overrightarrow{DC}=\\overrightarrow{AB}=\\mathbf{b}.\\)',
                    workingLatex: '\\overrightarrow{DF} = \\tfrac{2}{3}\\overrightarrow{DC} = \\tfrac{2}{3}\\mathbf{b}',
                    explanation: 'In a rectangle DC and AB are equal vectors. The ratio 2:1 splits DC into 3 equal parts, with F two parts along from D.',
                    diagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{b}', labelAt: [2.5, -0.5] }, { from: [0, 0], to: [0, 3.5], color: '#dc2626', arrow: true, label: '\\mathbf{d}', labelAt: [-0.7, 1.8] }, { from: [5, 0], to: [5, 3.5], color: '#888' }, { from: [0, 3.5], to: [5, 3.5], color: '#888' }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 3 }, { at: [5, 0], label: 'B', labelAnchor: 'se', r: 3 }, { at: [5, 3.5], label: 'C', labelAnchor: 'ne', r: 3 }, { at: [0, 3.5], label: 'D', labelAnchor: 'nw', r: 3 }, { at: [0, 1.75], label: 'E', labelAnchor: 'w', r: 3 }, { at: [3.33, 3.5], label: 'F', labelAnchor: 'n', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'b) Compute \\( \\overrightarrow{BE} \\) via the route B → A → E.',
                    workingLatex: '\\overrightarrow{BE} = \\overrightarrow{BA}+\\overrightarrow{AE} = -\\mathbf{b}+\\tfrac{1}{2}\\mathbf{d}',
                    explanation: 'Reverse AB to get BA = −b. E is the midpoint of AD, so AE = ½d.',
                },
                {
                    stepNumber: 3,
                    description: 'c) Compute \\( \\overrightarrow{EF} \\) via the route E → A → D → F.',
                    workingLatex: '\\overrightarrow{EF} = \\overrightarrow{EA}+\\overrightarrow{AD}+\\overrightarrow{DF} = -\\tfrac{1}{2}\\mathbf{d}+\\mathbf{d}+\\tfrac{2}{3}\\mathbf{b}',
                    explanation: 'Choose a path that uses sides already in our basis. EA reverses the half-length AE; AD is the full d; DF is from part (a).',
                },
                {
                    stepNumber: 4,
                    description: 'Combine the \\( \\mathbf{d} \\) terms.',
                    workingLatex: '\\overrightarrow{EF} = \\tfrac{2}{3}\\mathbf{b} + \\tfrac{1}{2}\\mathbf{d}',
                    explanation: 'The two d coefficients combine: \\( -\\tfrac{1}{2}+1=\\tfrac{1}{2}.\\) The b term is already alone.',
                },
            ],
            finalAnswer: 'a) \\(\\tfrac{2}{3}\\mathbf{b}\\)\\quad b) \\(-\\mathbf{b}+\\tfrac{1}{2}\\mathbf{d}\\)\\quad c) \\(\\tfrac{2}{3}\\mathbf{b}+\\tfrac{1}{2}\\mathbf{d}\\)',
        },
    },

    {
        id: 'v1-015',
        topicRef: 'v1',
        topicTitle: 'Vectors 15',
        difficulty: 'Standard',
        questionText:
            'Given that \\( \\overrightarrow{XY} = 3\\mathbf{a} - 4\\mathbf{b} + 2\\mathbf{c} \\) and \\( \\overrightarrow{XZ} = \\mathbf{a} - 2\\mathbf{b} - 2\\mathbf{c},\\) show that \\( \\overrightarrow{YZ} \\) is parallel to \\( \\mathbf{a} - \\mathbf{b} + 2\\mathbf{c}.\\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'parallel proof', 'three components'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( \\overrightarrow{YZ} \\) via the route Y → X → Z.',
                    workingLatex: '\\overrightarrow{YZ} = \\overrightarrow{YX}+\\overrightarrow{XZ} = -\\overrightarrow{XY} + \\overrightarrow{XZ}',
                    explanation: 'Travel Y → X (reversing XY) then X → Z. Nose-to-tail. The minus on XY is how the reversal is encoded.',
                },
                {
                    stepNumber: 2,
                    description: 'Substitute the given expressions.',
                    workingLatex: '\\overrightarrow{YZ} = -(3\\mathbf{a}-4\\mathbf{b}+2\\mathbf{c}) + (\\mathbf{a}-2\\mathbf{b}-2\\mathbf{c})',
                    explanation: 'Plug in XY and XZ. The minus sign in front of the first bracket flips every term inside.',
                },
                {
                    stepNumber: 3,
                    description: 'Distribute and collect like terms.',
                    workingLatex: '\\overrightarrow{YZ} = -3\\mathbf{a}+4\\mathbf{b}-2\\mathbf{c}+\\mathbf{a}-2\\mathbf{b}-2\\mathbf{c} = -2\\mathbf{a}+2\\mathbf{b}-4\\mathbf{c}',
                    explanation: 'Gather coefficients of \\( \\mathbf{a},\\mathbf{b},\\mathbf{c} \\) separately.',
                },
                {
                    stepNumber: 4,
                    description: 'Factor out the common scalar to compare directions.',
                    workingLatex: '\\overrightarrow{YZ} = -2(\\mathbf{a}-\\mathbf{b}+2\\mathbf{c})',
                    explanation: 'YZ is \\(-2\\) times \\( \\mathbf{a}-\\mathbf{b}+2\\mathbf{c},\\) so YZ is parallel to \\( \\mathbf{a}-\\mathbf{b}+2\\mathbf{c}.\\) ∎',
                },
            ],
            finalAnswer: '\\( \\overrightarrow{YZ} = -2(\\mathbf{a}-\\mathbf{b}+2\\mathbf{c}),\\) so it is parallel to \\( \\mathbf{a}-\\mathbf{b}+2\\mathbf{c}.\\)',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 4  (Q16–Q20)  Intermediate/Higher — collinear points
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 'v1-016',
        topicRef: 'v1',
        topicTitle: 'Vectors 16',
        difficulty: 'Standard',
        questionText:
            '\\( \\overrightarrow{OA} = \\mathbf{a},\\) \\( \\overrightarrow{OB} = \\mathbf{b},\\) \\( \\overrightarrow{OC} = 3\\mathbf{b} - 2\\mathbf{a}.\\) Show that \\(A,\\) \\(B\\) and \\(C\\) are collinear.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'collinear', 'proof'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compute \\( \\overrightarrow{AB} \\) by subtracting position vectors.',
                    workingLatex: '\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA} = \\mathbf{b} - \\mathbf{a}',
                    explanation: 'For points referenced from a common origin O, the displacement A → B is the difference of position vectors.',
                    diagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [2, 3], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [0.5, 1.8] }, { from: [0, 0], to: [3, 1], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [1.8, -0.2] }, { from: [3, 1], to: [5, -0.5], color: '#888', dashed: true }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [2, 3], label: 'A', labelAnchor: 'n', r: 3 }, { at: [3, 1], label: 'B', labelAnchor: 'se', r: 3 }, { at: [5, -0.5], label: 'C', labelAnchor: 'se', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Compute \\( \\overrightarrow{BC} \\) the same way.',
                    workingLatex: '\\overrightarrow{BC} = \\overrightarrow{OC} - \\overrightarrow{OB} = (3\\mathbf{b}-2\\mathbf{a}) - \\mathbf{b} = 2\\mathbf{b} - 2\\mathbf{a}',
                    explanation: 'Substitute the given position vectors, then collect like terms.',
                },
                {
                    stepNumber: 3,
                    description: 'Factor \\( \\overrightarrow{BC} \\) to expose the scalar multiple.',
                    workingLatex: '\\overrightarrow{BC} = 2(\\mathbf{b}-\\mathbf{a}) = 2\\overrightarrow{AB}',
                    explanation: 'BC is exactly twice AB. Two parallel vectors that share a common point (here, B) force the three points to lie on the same line. ∎',
                },
            ],
            finalAnswer: '\\( \\overrightarrow{BC} = 2\\overrightarrow{AB},\\) so A, B and C are collinear.',
        },
    },

    {
        id: 'v1-017',
        topicRef: 'v1',
        topicTitle: 'Vectors 17',
        difficulty: 'Standard',
        questionText:
            '\\( \\overrightarrow{XY} = \\mathbf{t} + \\mathbf{u},\\) \\( \\overrightarrow{AY} = -\\mathbf{t},\\) \\( \\overrightarrow{AZ} = \\mathbf{u}.\\) Show that \\(X,\\) \\(Y\\) and \\(Z\\) are collinear.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'collinear', 'proof'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Reverse \\( \\overrightarrow{AY} \\) to obtain \\( \\overrightarrow{YA}.\\)',
                    workingLatex: '\\overrightarrow{YA} = -\\overrightarrow{AY} = -(-\\mathbf{t}) = \\mathbf{t}',
                    explanation: 'The reversal flips the sign, turning \\(-\\mathbf{t}\\) into \\(+\\mathbf{t}.\\)',
                },
                {
                    stepNumber: 2,
                    description: 'Compute \\( \\overrightarrow{YZ} \\) via the route Y → A → Z.',
                    workingLatex: '\\overrightarrow{YZ} = \\overrightarrow{YA} + \\overrightarrow{AZ} = \\mathbf{t} + \\mathbf{u}',
                    explanation: 'Nose-to-tail addition: from Y, walk to A using the reversed vector, then from A to Z using the given vector.',
                },
                {
                    stepNumber: 3,
                    description: 'Compare \\( \\overrightarrow{XY} \\) and \\( \\overrightarrow{YZ}.\\)',
                    workingLatex: '\\overrightarrow{XY} = \\mathbf{t}+\\mathbf{u} = \\overrightarrow{YZ}',
                    explanation: 'The two vectors are equal — scalar multiple with \\(k=1.\\) Together with the shared point Y, this places X, Y and Z on one line (with Y the midpoint of XZ). ∎',
                },
            ],
            finalAnswer: '\\(\\overrightarrow{YZ} = \\overrightarrow{XY},\\) so X, Y, Z are collinear (Y is the midpoint of XZ).',
        },
    },

    {
        id: 'v1-018',
        topicRef: 'v1',
        topicTitle: 'Vectors 18',
        difficulty: 'Challenge',
        questionText:
            '\\( \\overrightarrow{AP} = \\mathbf{m},\\) \\( \\overrightarrow{AQ} = \\mathbf{m} + 2\\mathbf{n},\\) \\( \\overrightarrow{AR} = \\mathbf{m} + 6\\mathbf{n}.\\) Show that \\(P,\\) \\(Q\\) and \\(R\\) are collinear.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'collinear', 'proof'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compute \\( \\overrightarrow{PQ} \\) from the given position vectors.',
                    workingLatex: '\\overrightarrow{PQ} = \\overrightarrow{AQ} - \\overrightarrow{AP} = (\\mathbf{m}+2\\mathbf{n})-\\mathbf{m} = 2\\mathbf{n}',
                    explanation: 'Both AP and AQ are measured from A; their difference is the displacement P → Q. The \\( \\mathbf{m} \\) terms cancel.',
                },
                {
                    stepNumber: 2,
                    description: 'Compute \\( \\overrightarrow{QR} \\) similarly.',
                    workingLatex: '\\overrightarrow{QR} = \\overrightarrow{AR} - \\overrightarrow{AQ} = (\\mathbf{m}+6\\mathbf{n})-(\\mathbf{m}+2\\mathbf{n}) = 4\\mathbf{n}',
                    explanation: 'Distribute the minus across the second bracket: the \\( \\mathbf{m} \\) terms cancel and the \\( \\mathbf{n} \\) coefficients combine to give \\(4.\\)',
                },
                {
                    stepNumber: 3,
                    description: 'Express one displacement as a scalar multiple of the other.',
                    workingLatex: '\\overrightarrow{QR} = 2\\overrightarrow{PQ}',
                    explanation: 'Scalar multiple ⇒ parallel. P, Q and R share the common point Q (which lies on both segments), so the three points are collinear. ∎',
                },
            ],
            finalAnswer: '\\(\\overrightarrow{QR} = 2\\overrightarrow{PQ},\\) so P, Q, R lie on a straight line.',
        },
    },

    {
        id: 'v1-019',
        topicRef: 'v1',
        topicTitle: 'Vectors 19',
        difficulty: 'Challenge',
        questionText:
            '\\( \\overrightarrow{PQ} = -(\\mathbf{m}+\\tfrac{9}{2}\\mathbf{n}),\\) \\( \\overrightarrow{PR} = \\mathbf{m} - \\tfrac{3}{2}\\mathbf{n},\\) \\( \\overrightarrow{PS} = 2\\mathbf{m}.\\) Show that \\(Q,\\) \\(R\\) and \\(S\\) are collinear.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'collinear', 'proof', 'problem solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compute \\( \\overrightarrow{QR} \\) using position vectors from P.',
                    workingLatex: '\\overrightarrow{QR} = \\overrightarrow{PR}-\\overrightarrow{PQ}',
                    explanation: 'For points labelled relative to the same base point P, the displacement Q → R is the difference of position vectors.',
                },
                {
                    stepNumber: 2,
                    description: 'Substitute and simplify.',
                    workingLatex: '\\overrightarrow{QR} = (\\mathbf{m}-\\tfrac{3}{2}\\mathbf{n})-(-(\\mathbf{m}+\\tfrac{9}{2}\\mathbf{n})) = (\\mathbf{m}-\\tfrac{3}{2}\\mathbf{n})+(\\mathbf{m}+\\tfrac{9}{2}\\mathbf{n}) = 2\\mathbf{m}+3\\mathbf{n}',
                    explanation: 'The double-negative on \\( \\overrightarrow{PQ} \\) becomes addition. Combine \\( \\mathbf{n} \\) coefficients: \\(-\\tfrac{3}{2}+\\tfrac{9}{2}=3.\\)',
                },
                {
                    stepNumber: 3,
                    description: 'Compute \\( \\overrightarrow{RS}.\\)',
                    workingLatex: '\\overrightarrow{RS} = \\overrightarrow{PS}-\\overrightarrow{PR} = 2\\mathbf{m}-(\\mathbf{m}-\\tfrac{3}{2}\\mathbf{n}) = \\mathbf{m}+\\tfrac{3}{2}\\mathbf{n}',
                    explanation: 'Same difference idea. Distribute the minus across the bracket: the \\(\\mathbf{n}\\) sign flips.',
                },
                {
                    stepNumber: 4,
                    description: 'Spot the scalar multiple.',
                    workingLatex: '\\overrightarrow{QR} = 2(\\mathbf{m}+\\tfrac{3}{2}\\mathbf{n}) = 2\\,\\overrightarrow{RS}',
                    explanation: 'QR is twice RS, so they are parallel. R is the shared point (it sits on both segments), so Q, R, S are collinear. ∎',
                },
            ],
            finalAnswer: '\\(\\overrightarrow{QR} = 2\\overrightarrow{RS},\\) so Q, R, S are collinear.',
        },
    },

    {
        id: 'v1-020',
        topicRef: 'v1',
        topicTitle: 'Vectors 20',
        difficulty: 'Challenge',
        questionText:
            '\\(ABCD\\) is a quadrilateral. \\(X\\) is the midpoint of the line \\(AC.\\)\n\\( \\overrightarrow{DA} = \\mathbf{a}-\\mathbf{b},\\) \\( \\overrightarrow{AB} = 3\\mathbf{a}-2\\mathbf{b} \\) and \\( \\overrightarrow{XC} = \\mathbf{a}.\\)\nIs \\(DXB\\) a straight line? Give reasons for your answer.',
        questionDiagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0.5, 3], to: [1.5, 1], color: '#dc2626', arrow: true }, { from: [1.5, 1], to: [5, 0.5], color: '#1d4ed8', arrow: true }, { from: [1.5, 1], to: [3.5, 2.5], color: '#888' }, { from: [3.5, 2.5], to: [5, 0.5], color: '#888' }, { from: [3.5, 2.5], to: [0.5, 3], color: '#888' }], points: [{ at: [0.5, 3], label: 'D', labelAnchor: 'nw', r: 3 }, { at: [1.5, 1], label: 'A', labelAnchor: 'sw', r: 3 }, { at: [5, 0.5], label: 'B', labelAnchor: 'se', r: 3 }, { at: [3.5, 2.5], label: 'C', labelAnchor: 'ne', r: 3 }, { at: [2.5, 1.75], label: 'X', labelAnchor: 'sw', r: 3 }] },
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'collinear', 'midpoint', 'problem solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the midpoint property of X to find \\( \\overrightarrow{AX}.\\)',
                    workingLatex: '\\overrightarrow{AC} = 2\\overrightarrow{XC} = 2\\mathbf{a} \\;\\Longrightarrow\\; \\overrightarrow{AX} = \\tfrac{1}{2}\\overrightarrow{AC} = \\mathbf{a}',
                    explanation: 'X is the midpoint of AC, so the full diagonal AC is twice the half-vector XC; AX is the other half.',
                },
                {
                    stepNumber: 2,
                    description: 'Compute \\( \\overrightarrow{DX} \\) via the route D → A → X.',
                    workingLatex: '\\overrightarrow{DX} = \\overrightarrow{DA}+\\overrightarrow{AX} = (\\mathbf{a}-\\mathbf{b})+\\mathbf{a} = 2\\mathbf{a}-\\mathbf{b}',
                    explanation: 'Nose-to-tail addition of the given DA with the half-diagonal AX.',
                },
                {
                    stepNumber: 3,
                    description: 'Compute \\( \\overrightarrow{XB} \\) via the route X → A → B.',
                    workingLatex: '\\overrightarrow{XB} = \\overrightarrow{XA}+\\overrightarrow{AB} = -\\mathbf{a}+(3\\mathbf{a}-2\\mathbf{b}) = 2\\mathbf{a}-2\\mathbf{b}',
                    explanation: 'Reverse AX to get XA = −a, then add AB.',
                },
                {
                    stepNumber: 4,
                    description: 'Set up the scalar-multiple test for parallelism.',
                    workingLatex: '\\overrightarrow{XB} = k\\,\\overrightarrow{DX} \\;\\Longleftrightarrow\\; 2\\mathbf{a}-2\\mathbf{b} = k(2\\mathbf{a}-\\mathbf{b})',
                    explanation: 'If DXB is a straight line, then XB must be a scalar multiple of DX (they share X). Compare coefficients on each side.',
                },
                {
                    stepNumber: 5,
                    description: 'Compare coefficients of \\( \\mathbf{a} \\) and \\( \\mathbf{b}.\\)',
                    workingLatex: '\\mathbf{a}:\\ 2 = 2k \\;\\Longrightarrow\\; k=1.\\quad \\mathbf{b}:\\ -2 = -k \\;\\Longrightarrow\\; k=2',
                    explanation: 'The two equations demand different values of \\(k.\\) No single scalar makes both sides match.',
                },
                {
                    stepNumber: 6,
                    description: 'Conclude.',
                    workingLatex: 'k=1 \\ \\text{and}\\ k=2 \\ \\text{cannot both hold} \\;\\Longrightarrow\\; \\overrightarrow{XB} \\not\\parallel \\overrightarrow{DX}',
                    explanation: 'The contradiction means no scalar multiple exists. Therefore DX and XB are not parallel, and DXB is NOT a straight line. ∎',
                },
            ],
            finalAnswer: 'No. \\(\\overrightarrow{DX} = 2\\mathbf{a}-\\mathbf{b}\\) and \\(\\overrightarrow{XB}=2\\mathbf{a}-2\\mathbf{b}\\) are not scalar multiples, so DXB is not a straight line.',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 5  (Q21–Q25)  Position vectors, i+j form, column vectors
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 'v1-021',
        topicRef: 'v1',
        topicTitle: 'Vectors 21',
        difficulty: 'Challenge',
        questionText:
            'On a map, a library \\(L\\) is at \\((1, 4)\\) and a park \\(P\\) is at \\((5, 2).\\) The town hall \\(H\\) is the point such that \\( \\overrightarrow{LH} = 2\\overrightarrow{LP},\\) and a cafe \\(C\\) lies on segment \\(LP\\) with \\(LC:CP = 3:1.\\)\n\na) Find the coordinates of \\(H\\) and \\(C.\\)\n\nb) A new memorial \\(M\\) is to be placed so that \\(LCHM\\) forms a parallelogram (with vertices in that order). Find the coordinates of \\(M,\\) and find \\( |\\overrightarrow{LM}| \\) in surd form.',
        questionDiagram: { xMin: -1, xMax: 11, yMin: -1, yMax: 6, xTicks: [1, 5], yTicks: [2, 4], lines: [{ from: [1, 4], to: [5, 2], color: '#9ca3af', dashed: true }], points: [{ at: [1, 4], label: 'L(1,4)', labelAnchor: 'nw', r: 4 }, { at: [4, 2.5], label: 'C', labelAnchor: 'n', r: 4 }, { at: [5, 2], label: 'P(5,2)', labelAnchor: 'sw', r: 4 }] },
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'position vectors', 'column vectors', 'ratio', 'parallelogram', 'magnitude'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the given coordinates as position vectors.',
                    workingLatex: '\\overrightarrow{OL}=\\begin{pmatrix}1\\\\4\\end{pmatrix},\\quad \\overrightarrow{OP}=\\begin{pmatrix}5\\\\2\\end{pmatrix}',
                    explanation: 'Convert each labelled coordinate point into a column vector based at the origin. This lets us add and subtract them as algebra.',
                    diagram: { xMin: -1, xMax: 11, yMin: -1, yMax: 6, xTicks: [1, 5, 9], yTicks: [2, 4], lines: [{ from: [1, 4], to: [5, 2], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{LP}', labelAt: [2.5, 3.5] }, { from: [1, 4], to: [9, 0], color: '#dc2626', dashed: true, arrow: true, label: '\\overrightarrow{LH}', labelAt: [6, 2.5] }], points: [{ at: [1, 4], label: 'L(1,4)', labelAnchor: 'nw', r: 4 }, { at: [5, 2], label: 'P(5,2)', labelAnchor: 'n', r: 4 }, { at: [9, 0], label: 'H(9,0)', labelAnchor: 'se', r: 4 }, { at: [4, 2.5], label: 'C', labelAnchor: 'n', r: 4 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Compute \\( \\overrightarrow{LP} \\) by subtracting components.',
                    workingLatex: '\\overrightarrow{LP} = \\overrightarrow{OP}-\\overrightarrow{OL} = \\begin{pmatrix}5-1\\\\2-4\\end{pmatrix} = \\begin{pmatrix}4\\\\-2\\end{pmatrix}',
                    explanation: 'Subtract componentwise to get the displacement L → P.',
                },
                {
                    stepNumber: 3,
                    description: 'a) Use \\( \\overrightarrow{LH}=2\\overrightarrow{LP} \\) to locate H.',
                    workingLatex: '\\overrightarrow{OH} = \\overrightarrow{OL}+2\\overrightarrow{LP} = \\begin{pmatrix}1\\\\4\\end{pmatrix}+\\begin{pmatrix}8\\\\-4\\end{pmatrix} = \\begin{pmatrix}9\\\\0\\end{pmatrix}',
                    explanation: 'Reach H from O by going to L first, then twice along LP. Hence \\( H=(9,0).\\)',
                },
                {
                    stepNumber: 4,
                    description: 'Locate C using \\(LC:CP = 3:1.\\)',
                    workingLatex: '\\overrightarrow{LC} = \\tfrac{3}{4}\\overrightarrow{LP} = \\tfrac{3}{4}\\begin{pmatrix}4\\\\-2\\end{pmatrix} = \\begin{pmatrix}3\\\\-\\tfrac{3}{2}\\end{pmatrix}',
                    explanation: 'The ratio splits LP into 4 parts; C is 3 parts along from L. Multiply each component by \\( \\tfrac{3}{4}.\\)',
                },
                {
                    stepNumber: 5,
                    description: 'Add to find C\'s position vector.',
                    workingLatex: '\\overrightarrow{OC} = \\overrightarrow{OL}+\\overrightarrow{LC} = \\begin{pmatrix}1\\\\4\\end{pmatrix}+\\begin{pmatrix}3\\\\-\\tfrac{3}{2}\\end{pmatrix} = \\begin{pmatrix}4\\\\\\tfrac{5}{2}\\end{pmatrix}',
                    explanation: 'So \\( C=(4,\\tfrac{5}{2}).\\)',
                },
                {
                    stepNumber: 6,
                    description: 'b) Use the parallelogram property \\( \\overrightarrow{LM}=\\overrightarrow{CH}.\\)',
                    workingLatex: '\\overrightarrow{CH} = \\overrightarrow{OH}-\\overrightarrow{OC} = \\begin{pmatrix}9\\\\0\\end{pmatrix}-\\begin{pmatrix}4\\\\\\tfrac{5}{2}\\end{pmatrix} = \\begin{pmatrix}5\\\\-\\tfrac{5}{2}\\end{pmatrix}',
                    explanation: 'In a parallelogram LCHM with vertices in that order, the side LM is parallel and equal to side CH (opposite sides of a parallelogram).',
                },
                {
                    stepNumber: 7,
                    description: 'Locate M.',
                    workingLatex: '\\overrightarrow{OM} = \\overrightarrow{OL}+\\overrightarrow{LM} = \\begin{pmatrix}1\\\\4\\end{pmatrix}+\\begin{pmatrix}5\\\\-\\tfrac{5}{2}\\end{pmatrix} = \\begin{pmatrix}6\\\\\\tfrac{3}{2}\\end{pmatrix}',
                    explanation: 'Add LM to OL to get OM. Hence \\( M=(6,\\tfrac{3}{2}).\\)',
                },
                {
                    stepNumber: 8,
                    description: 'Compute \\( |\\overrightarrow{LM}| \\) by Pythagoras on the components.',
                    workingLatex: '|\\overrightarrow{LM}| = \\sqrt{5^2+\\left(-\\tfrac{5}{2}\\right)^2} = \\sqrt{25+\\tfrac{25}{4}}',
                    explanation: 'The magnitude of a 2-D vector \\((a,b)\\) is \\(\\sqrt{a^2+b^2}\\) — a direct application of Pythagoras.',
                },
                {
                    stepNumber: 9,
                    description: 'Simplify the surd.',
                    workingLatex: '|\\overrightarrow{LM}| = \\sqrt{\\tfrac{100+25}{4}} = \\sqrt{\\tfrac{125}{4}} = \\tfrac{\\sqrt{125}}{2} = \\tfrac{5\\sqrt{5}}{2}',
                    explanation: 'Express the sum over a common denominator, take square roots of numerator and denominator separately, and pull out the perfect square factor \\(25\\) from \\(125.\\)',
                },
            ],
            finalAnswer: 'a) \\( H = (9,0),\\ C = (4,\\tfrac{5}{2}).\\)  b) \\( M = (6,\\tfrac{3}{2}) ;\\) \\( |\\overrightarrow{LM}| = \\tfrac{5\\sqrt{5}}{2}.\\)',
        },
    },

    {
        id: 'v1-022',
        topicRef: 'v1',
        topicTitle: 'Vectors 22',
        difficulty: 'Challenge',
        questionText:
            'The points \\(A(2, 5)\\) and \\(B(6, 1)\\) lie on a coordinate grid. A third point \\( C(t+1,\\ 2t-1) \\) is variable as the parameter \\( t \\) changes.\n\na) Find \\( \\overrightarrow{AB} \\) and \\( \\overrightarrow{AC} \\) in \\( \\mathbf{i}+\\mathbf{j} \\) form.\n\nb) Find the value of \\( t \\) for which \\(A,\\) \\(B\\) and \\(C\\) are collinear, and state the corresponding coordinates of \\(C.\\)\n\nc) For that value of \\( t,\\) determine the ratio \\(AC:CB\\) and state whether \\(C\\) lies on the segment \\(AB\\) or on its extension.',
        questionDiagram: { xMin: -1, xMax: 9, yMin: -2, yMax: 8, xTicks: [2, 6], yTicks: [1, 5], lines: [{ from: [2, 5], to: [6, 1], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{AB}', labelAt: [4.5, 3.5] }, { from: [0.5, -2], to: [4.5, 6], color: '#9ca3af', dashed: true, label: 'C(t+1, 2t-1)', labelAt: [4.6, 6.0] }], points: [{ at: [2, 5], label: 'A(2,5)', labelAnchor: 'nw', r: 4 }, { at: [6, 1], label: 'B(6,1)', labelAnchor: 'se', r: 4 }, { at: [10 / 3, 11 / 3], label: 'C', labelAnchor: 'sw', r: 4 }] },
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'collinear', 'parameter', 'ratio', 'i and j', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'a) Compute \\( \\overrightarrow{AB} \\) componentwise.',
                    workingLatex: '\\overrightarrow{AB} = (6-2)\\mathbf{i}+(1-5)\\mathbf{j} = 4\\mathbf{i}-4\\mathbf{j}',
                    explanation: 'Subtract \\(x\\)- and \\(y\\)-coordinates of the endpoints to get the displacement A → B.',
                    diagram: { xMin: -1, xMax: 9, yMin: -2, yMax: 7, xTicks: [2, 4, 6], yTicks: [-1, 1, 5], lines: [{ from: [2, 5], to: [6, 1], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{AB}', labelAt: [4.5, 3.5] }, { from: [2, 5], to: [3.33, 3.67], color: '#dc2626', dashed: true, arrow: true, label: '\\overrightarrow{AC}', labelAt: [2.4, 4.2] }], points: [{ at: [2, 5], label: 'A(2,5)', labelAnchor: 'nw', r: 4 }, { at: [6, 1], label: 'B(6,1)', labelAnchor: 'se', r: 4 }, { at: [3.33, 3.67], label: 'C', labelAnchor: 'sw', r: 4 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Compute \\( \\overrightarrow{AC} \\) (a vector depending on \\(t\\)).',
                    workingLatex: '\\overrightarrow{AC} = (t+1-2)\\mathbf{i}+(2t-1-5)\\mathbf{j} = (t-1)\\mathbf{i}+(2t-6)\\mathbf{j}',
                    explanation: 'Same subtraction, but with the variable coordinates of C. The result is a parametric vector — its components depend on \\(t.\\)',
                },
                {
                    stepNumber: 3,
                    description: 'b) Set up the collinearity condition.',
                    workingLatex: '(t-1)\\mathbf{i}+(2t-6)\\mathbf{j} = k(4\\mathbf{i}-4\\mathbf{j})',
                    explanation: 'A, B, C are collinear iff AC is a scalar multiple of AB. Introduce a fresh scalar \\(k\\) for that multiple.',
                },
                {
                    stepNumber: 4,
                    description: 'Compare \\( \\mathbf{i} \\) and \\( \\mathbf{j} \\) coefficients.',
                    workingLatex: '\\mathbf{i}:\\ t-1 = 4k.\\quad \\mathbf{j}:\\ 2t-6 = -4k',
                    explanation: 'Since \\( \\mathbf{i},\\mathbf{j} \\) are non-parallel basis vectors, the coefficients on each side must match independently. This gives two equations in two unknowns \\(t,k.\\)',
                },
                {
                    stepNumber: 5,
                    description: 'Add the equations to eliminate \\(k.\\)',
                    workingLatex: '(t-1)+(2t-6) = 4k+(-4k) = 0 \\;\\Longrightarrow\\; 3t-7=0 \\;\\Longrightarrow\\; t = \\tfrac{7}{3}',
                    explanation: 'Adding kills the \\(k\\) terms, leaving a single equation in \\(t.\\)',
                },
                {
                    stepNumber: 6,
                    description: 'Compute C\'s coordinates by substitution.',
                    workingLatex: 'C = \\left(\\tfrac{7}{3}+1,\\ 2\\!\\cdot\\!\\tfrac{7}{3}-1\\right) = \\left(\\tfrac{10}{3},\\ \\tfrac{11}{3}\\right)',
                    explanation: 'Plug \\(t=\\tfrac{7}{3}\\) into the formula \\(C=(t+1,\\,2t-1).\\)',
                },
                {
                    stepNumber: 7,
                    description: 'Compute \\(k\\) from the \\( \\mathbf{i} \\) equation.',
                    workingLatex: 'k = \\dfrac{t-1}{4} = \\dfrac{\\tfrac{7}{3}-1}{4} = \\dfrac{\\tfrac{4}{3}}{4} = \\tfrac{1}{3}',
                    explanation: 'A useful sanity check: the \\( \\mathbf{j} \\) equation gives \\(k=-\\tfrac{2t-6}{4}=-\\tfrac{2(7/3)-6}{4}=\\tfrac{1}{3},\\) confirming the system is consistent.',
                },
                {
                    stepNumber: 8,
                    description: 'c) Translate \\(k=\\tfrac{1}{3}\\) into the ratio along segment AB.',
                    workingLatex: '\\overrightarrow{AC} = \\tfrac{1}{3}\\overrightarrow{AB} \\;\\Longrightarrow\\; AC:AB = 1:3',
                    explanation: 'AC is one-third of AB in the same direction, so C is one-third of the way from A to B.',
                },
                {
                    stepNumber: 9,
                    description: 'Convert AC:AB into AC:CB.',
                    workingLatex: 'AC:CB = 1:(3-1) = 1:2',
                    explanation: 'Since C divides AB internally in ratio \\(1:3\\) from A, the leftover CB takes the other two parts. Because \\(0<k<1,\\) C is strictly between A and B on the segment.',
                },
            ],
            finalAnswer: 'a) \\( \\overrightarrow{AB}=4\\mathbf{i}-4\\mathbf{j},\\) \\( \\overrightarrow{AC}=(t-1)\\mathbf{i}+(2t-6)\\mathbf{j}.\\)  b) \\( t = \\tfrac{7}{3},\\) giving \\( C = (\\tfrac{10}{3}, \\tfrac{11}{3}).\\)  c) \\( AC:CB = 1:2 ;\\) C lies on segment AB.',
        },
    },

    {
        id: 'v1-023',
        topicRef: 'v1',
        topicTitle: 'Vectors 23',
        difficulty: 'Foundation',
        questionText:
            'Given that \\( \\mathbf{a} = \\begin{pmatrix}3\\\\-1\\end{pmatrix},\\) \\( \\mathbf{b} = \\begin{pmatrix}-2\\\\4\\end{pmatrix},\\) and \\( \\mathbf{c} = \\begin{pmatrix}1\\\\-3\\end{pmatrix},\\) calculate:\n\na) \\( \\mathbf{a}+\\mathbf{b}+\\mathbf{c} \\)\n\nb) \\( \\mathbf{c}-2\\mathbf{b} \\)\n\nc) \\( 3\\mathbf{a}-\\mathbf{b}+2\\mathbf{c} \\)',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'column vectors', 'arithmetic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'a) Add the three vectors component-by-component.',
                    workingLatex: '\\mathbf{a}+\\mathbf{b}+\\mathbf{c} = \\begin{pmatrix}3+(-2)+1\\\\-1+4+(-3)\\end{pmatrix} = \\begin{pmatrix}2\\\\0\\end{pmatrix}',
                    explanation: 'Column-vector addition is purely componentwise: \\(x\\)-coords go with \\(x\\)-coords, \\(y\\)-coords with \\(y\\)-coords. Watch the signs.',
                },
                {
                    stepNumber: 2,
                    description: 'b) Scale \\( \\mathbf{b} \\) first, then subtract.',
                    workingLatex: '2\\mathbf{b} = 2\\begin{pmatrix}-2\\\\4\\end{pmatrix} = \\begin{pmatrix}-4\\\\8\\end{pmatrix}',
                    explanation: 'Multiplying a column vector by a scalar multiplies every component by that scalar.',
                },
                {
                    stepNumber: 3,
                    description: 'Subtract \\(2\\mathbf{b}\\) from \\( \\mathbf{c}.\\)',
                    workingLatex: '\\mathbf{c}-2\\mathbf{b} = \\begin{pmatrix}1\\\\-3\\end{pmatrix}-\\begin{pmatrix}-4\\\\8\\end{pmatrix} = \\begin{pmatrix}1-(-4)\\\\-3-8\\end{pmatrix} = \\begin{pmatrix}5\\\\-11\\end{pmatrix}',
                    explanation: 'Component subtraction: \\(1-(-4)=5,\\) \\(-3-8=-11.\\)',
                },
                {
                    stepNumber: 4,
                    description: 'c) Scale each vector first.',
                    workingLatex: '3\\mathbf{a} = \\begin{pmatrix}9\\\\-3\\end{pmatrix},\\quad -\\mathbf{b} = \\begin{pmatrix}2\\\\-4\\end{pmatrix},\\quad 2\\mathbf{c} = \\begin{pmatrix}2\\\\-6\\end{pmatrix}',
                    explanation: 'Distribute the scalar across each component. \\(-\\mathbf{b}\\) flips the sign of both entries of \\( \\mathbf{b}.\\)',
                },
                {
                    stepNumber: 5,
                    description: 'Add the three scaled vectors.',
                    workingLatex: '3\\mathbf{a}-\\mathbf{b}+2\\mathbf{c} = \\begin{pmatrix}9+2+2\\\\-3-4-6\\end{pmatrix} = \\begin{pmatrix}13\\\\-13\\end{pmatrix}',
                    explanation: 'Sum the three columns componentwise.',
                },
            ],
            finalAnswer: 'a) \\(\\begin{pmatrix}2\\\\0\\end{pmatrix}\\)\\quad b) \\(\\begin{pmatrix}5\\\\-11\\end{pmatrix}\\)\\quad c) \\(\\begin{pmatrix}13\\\\-13\\end{pmatrix}\\)',
        },
    },

    {
        id: 'v1-024',
        topicRef: 'v1',
        topicTitle: 'Vectors 24',
        difficulty: 'Standard',
        questionText:
            '\\(C\\) has position vector \\( -3\\mathbf{i}+2\\mathbf{j} \\) and \\(D\\) has position vector \\( 5\\mathbf{i}-4\\mathbf{j}.\\)\n\na) What are the Cartesian coordinates of \\(C\\) and \\(D?\\)\n\nb) Write the vectors \\( \\overrightarrow{CD} \\) and \\( \\overrightarrow{DC} \\) in \\( \\mathbf{i}+\\mathbf{j} \\) form.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'position vectors', 'i and j', 'coordinates'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'a) Read the Cartesian coordinates directly off the position vectors.',
                    workingLatex: 'C = (-3,\\ 2),\\quad D = (5,\\ -4)',
                    explanation: 'A position vector \\(x\\mathbf{i}+y\\mathbf{j}\\) corresponds to the point \\((x,y).\\) Just read off the coefficients of \\( \\mathbf{i} \\) and \\( \\mathbf{j}.\\)',
                    diagram: { xMin: -5, xMax: 7, yMin: -6, yMax: 4, xTicks: [-3, 5], yTicks: [-4, 2], lines: [{ from: [-3, 2], to: [5, -4], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{CD}', labelAt: [2, -0.5] }], points: [{ at: [-3, 2], label: 'C', labelAnchor: 'nw', r: 4 }, { at: [5, -4], label: 'D', labelAnchor: 'se', r: 4 }] },
                },
                {
                    stepNumber: 2,
                    description: 'b) Compute \\( \\overrightarrow{CD} \\) as the difference of position vectors.',
                    workingLatex: '\\overrightarrow{CD} = \\overrightarrow{OD}-\\overrightarrow{OC} = (5\\mathbf{i}-4\\mathbf{j})-(-3\\mathbf{i}+2\\mathbf{j})',
                    explanation: 'Subtract C\'s position vector from D\'s to get the displacement C → D.',
                },
                {
                    stepNumber: 3,
                    description: 'Distribute the minus and simplify.',
                    workingLatex: '\\overrightarrow{CD} = 5\\mathbf{i}-4\\mathbf{j}+3\\mathbf{i}-2\\mathbf{j} = 8\\mathbf{i}-6\\mathbf{j}',
                    explanation: 'The minus flips both signs inside the second bracket. Combine like terms in \\( \\mathbf{i} \\) and \\( \\mathbf{j}.\\)',
                },
                {
                    stepNumber: 4,
                    description: 'Reverse to obtain \\( \\overrightarrow{DC}.\\)',
                    workingLatex: '\\overrightarrow{DC} = -\\overrightarrow{CD} = -8\\mathbf{i}+6\\mathbf{j}',
                    explanation: 'Going from D to C is the exact reverse trip of going from C to D — negate every component.',
                },
            ],
            finalAnswer: 'a) C(−3,2), D(5,−4). b) \\(\\overrightarrow{CD}=8\\mathbf{i}-6\\mathbf{j},\\) \\(\\overrightarrow{DC}=-8\\mathbf{i}+6\\mathbf{j}.\\)',
        },
    },

    {
        id: 'v1-025',
        topicRef: 'v1',
        topicTitle: 'Vectors 25',
        difficulty: 'Standard',
        questionText:
            'Given that \\( \\mathbf{p} = \\begin{pmatrix}-1\\\\-2\\end{pmatrix},\\) \\( \\mathbf{q} = \\begin{pmatrix}3\\\\-2\\end{pmatrix},\\) and \\( \\mathbf{r} = \\begin{pmatrix}-4\\\\5\\end{pmatrix},\\) show that \\( \\mathbf{p}+3\\mathbf{q}+\\mathbf{r} \\) is parallel to \\( 4\\mathbf{i}-3\\mathbf{j}.\\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'column vectors', 'parallel', 'i and j'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Scale \\( \\mathbf{q} \\) by 3.',
                    workingLatex: '3\\mathbf{q} = 3\\begin{pmatrix}3\\\\-2\\end{pmatrix} = \\begin{pmatrix}9\\\\-6\\end{pmatrix}',
                    explanation: 'Multiply each component by the scalar 3.',
                },
                {
                    stepNumber: 2,
                    description: 'Add the three column vectors componentwise.',
                    workingLatex: '\\mathbf{p}+3\\mathbf{q}+\\mathbf{r} = \\begin{pmatrix}-1+9+(-4)\\\\-2+(-6)+5\\end{pmatrix} = \\begin{pmatrix}4\\\\-3\\end{pmatrix}',
                    explanation: 'Stack the columns and add row-by-row. Track signs carefully.',
                },
                {
                    stepNumber: 3,
                    description: 'Convert \\( 4\\mathbf{i}-3\\mathbf{j} \\) to column form and compare.',
                    workingLatex: '4\\mathbf{i}-3\\mathbf{j} = \\begin{pmatrix}4\\\\-3\\end{pmatrix} = 1\\cdot\\begin{pmatrix}4\\\\-3\\end{pmatrix}',
                    explanation: 'The two vectors are identical — a scalar multiple with \\(k=1.\\) Hence \\( \\mathbf{p}+3\\mathbf{q}+\\mathbf{r} \\) is parallel to (indeed equal to) \\( 4\\mathbf{i}-3\\mathbf{j}.\\) ∎',
                },
            ],
            finalAnswer: '\\( \\mathbf{p}+3\\mathbf{q}+\\mathbf{r} = \\begin{pmatrix}4\\\\-3\\end{pmatrix} = 4\\mathbf{i}-3\\mathbf{j},\\) confirming it is parallel.',
        },
    },

    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 6  (Q26–Q30)  Higher — multi-step proofs, shapes, exam-style
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 'v1-026',
        topicRef: 'v1',
        topicTitle: 'Vectors 26',
        difficulty: 'Challenge',
        questionText:
            'In triangle \\(OAB,\\) \\( \\overrightarrow{OA} = \\mathbf{a} \\) and \\( \\overrightarrow{OB} = \\mathbf{b}.\\) \\(M\\) is the midpoint of \\(AB\\) and \\(N\\) is the midpoint of \\(OB.\\)\n\na) Find \\( \\overrightarrow{OM} \\) in terms of \\( \\mathbf{a} \\) and \\( \\mathbf{b}.\\)\n\nb) Find \\( \\overrightarrow{AN} \\) in terms of \\( \\mathbf{a} \\) and \\( \\mathbf{b}.\\)\n\nc) Show that \\( \\overrightarrow{MN} \\) is parallel to \\( \\overrightarrow{OA}.\\)',
        questionDiagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2.5, -0.5] }, { from: [0, 0], to: [2, 4], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [0.5, 2.2] }, { from: [5, 0], to: [2, 4], color: '#888' }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [5, 0], label: 'A', labelAnchor: 'se', r: 3 }, { at: [2, 4], label: 'B', labelAnchor: 'n', r: 3 }, { at: [3.5, 2], label: 'M', labelAnchor: 'e', r: 3 }, { at: [1, 2], label: 'N', labelAnchor: 'w', r: 3 }] },
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'triangle', 'midpoint', 'parallel proof'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'a) Build \\( \\overrightarrow{AB} \\) before halving.',
                    workingLatex: '\\overrightarrow{AB} = \\overrightarrow{OB}-\\overrightarrow{OA} = -\\mathbf{a}+\\mathbf{b}',
                    explanation: 'Standard difference-of-position-vectors. We will halve this to find the midpoint M.',
                    diagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2.5, -0.5] }, { from: [0, 0], to: [2, 4], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [0.5, 2.2] }, { from: [5, 0], to: [2, 4], color: '#888' }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [5, 0], label: 'A', labelAnchor: 'se', r: 3 }, { at: [2, 4], label: 'B', labelAnchor: 'n', r: 3 }, { at: [3.5, 2], label: 'M', labelAnchor: 'e', r: 3 }, { at: [1, 2], label: 'N', labelAnchor: 'w', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Reach M from O via O → A → M.',
                    workingLatex: '\\overrightarrow{OM} = \\overrightarrow{OA}+\\tfrac{1}{2}\\overrightarrow{AB} = \\mathbf{a}+\\tfrac{1}{2}(-\\mathbf{a}+\\mathbf{b}) = \\tfrac{1}{2}\\mathbf{a}+\\tfrac{1}{2}\\mathbf{b}',
                    explanation: 'Walk OA first, then half of AB. Distribute \\( \\tfrac{1}{2} \\) and collect like terms.',
                },
                {
                    stepNumber: 3,
                    description: 'b) Locate N as the midpoint of OB.',
                    workingLatex: '\\overrightarrow{ON} = \\tfrac{1}{2}\\overrightarrow{OB} = \\tfrac{1}{2}\\mathbf{b}',
                    explanation: 'N halves OB, so the displacement O → N is half of \\( \\overrightarrow{OB}.\\)',
                },
                {
                    stepNumber: 4,
                    description: 'Compute \\( \\overrightarrow{AN} \\) via A → O → N.',
                    workingLatex: '\\overrightarrow{AN} = \\overrightarrow{AO}+\\overrightarrow{ON} = -\\mathbf{a}+\\tfrac{1}{2}\\mathbf{b}',
                    explanation: 'Reverse OA to get AO = −a, then add ON. Nose-to-tail.',
                },
                {
                    stepNumber: 5,
                    description: 'c) Compute \\( \\overrightarrow{MN} \\) by subtracting position vectors from O.',
                    workingLatex: '\\overrightarrow{MN} = \\overrightarrow{ON}-\\overrightarrow{OM} = \\tfrac{1}{2}\\mathbf{b}-\\left(\\tfrac{1}{2}\\mathbf{a}+\\tfrac{1}{2}\\mathbf{b}\\right) = -\\tfrac{1}{2}\\mathbf{a}',
                    explanation: 'The \\( \\mathbf{b} \\) terms cancel, leaving a pure multiple of \\( \\mathbf{a}.\\)',
                },
                {
                    stepNumber: 6,
                    description: 'Identify the scalar multiple to finish.',
                    workingLatex: '\\overrightarrow{MN} = -\\tfrac{1}{2}\\,\\overrightarrow{OA}',
                    explanation: 'MN is a (negative) scalar multiple of \\( \\overrightarrow{OA}=\\mathbf{a},\\) so MN ∥ OA. ∎',
                },
            ],
            finalAnswer: 'a) \\(\\tfrac{1}{2}(\\mathbf{a}+\\mathbf{b})\\) b) \\(-\\mathbf{a}+\\tfrac{1}{2}\\mathbf{b}\\) c) \\(\\overrightarrow{MN}=-\\tfrac{1}{2}\\mathbf{a},\\) parallel to \\(\\overrightarrow{OA}.\\)',
        },
    },

    {
        id: 'v1-027',
        topicRef: 'v1',
        topicTitle: 'Vectors 27',
        difficulty: 'Challenge',
        questionText:
            'In the diagram, \\( \\overrightarrow{OB} = 4\\mathbf{a},\\) \\( \\overrightarrow{AB} = 2\\mathbf{b},\\) \\( \\overrightarrow{BD} = 4\\mathbf{a} - \\mathbf{b},\\) and \\( \\overrightarrow{DC} = -\\tfrac{5}{2}\\mathbf{b} - \\mathbf{a}.\\) Show that \\(OAC\\) is a straight line.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'collinear', 'proof', 'diagram'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Reverse AB to get BA, then build \\( \\overrightarrow{OA}.\\)',
                    workingLatex: '\\overrightarrow{BA} = -\\overrightarrow{AB} = -2\\mathbf{b};\\quad \\overrightarrow{OA} = \\overrightarrow{OB}+\\overrightarrow{BA} = 4\\mathbf{a}-2\\mathbf{b}',
                    explanation: 'Route O → B → A. The given AB is reversed, then added to OB.',
                },
                {
                    stepNumber: 2,
                    description: 'Build \\( \\overrightarrow{OC} \\) by chaining the given vectors.',
                    workingLatex: '\\overrightarrow{OC} = \\overrightarrow{OB}+\\overrightarrow{BD}+\\overrightarrow{DC} = 4\\mathbf{a}+(4\\mathbf{a}-\\mathbf{b})+\\left(-\\tfrac{5}{2}\\mathbf{b}-\\mathbf{a}\\right)',
                    explanation: 'Walk O → B → D → C using the three given vectors. The intermediate points B and D drop out of the final answer.',
                },
                {
                    stepNumber: 3,
                    description: 'Collect like terms in \\( \\mathbf{a} \\) and \\( \\mathbf{b}.\\)',
                    workingLatex: '\\overrightarrow{OC} = (4+4-1)\\mathbf{a}+\\left(-1-\\tfrac{5}{2}\\right)\\mathbf{b} = 7\\mathbf{a}-\\tfrac{7}{2}\\mathbf{b}',
                    explanation: '\\( \\mathbf{a} \\) coefficients: \\(4+4-1=7.\\) \\( \\mathbf{b} \\) coefficients: \\(-1-\\tfrac{5}{2}=-\\tfrac{7}{2}.\\)',
                },
                {
                    stepNumber: 4,
                    description: 'Factor out a common scalar.',
                    workingLatex: '\\overrightarrow{OC} = \\tfrac{7}{4}(4\\mathbf{a}-2\\mathbf{b})',
                    explanation: 'Spotting that 7 = (7/4)·4 and 7/2 = (7/4)·2 reveals the common factor that aligns with \\( \\overrightarrow{OA}=4\\mathbf{a}-2\\mathbf{b}.\\)',
                },
                {
                    stepNumber: 5,
                    description: 'Compare directly with \\( \\overrightarrow{OA} \\) to finish.',
                    workingLatex: '\\overrightarrow{OC} = \\tfrac{7}{4}\\,\\overrightarrow{OA}',
                    explanation: 'OC is a scalar multiple of OA, and both start at O — so O, A, C lie on the same straight line. ∎',
                },
            ],
            finalAnswer: '\\(\\overrightarrow{OC} = \\tfrac{7}{4}\\overrightarrow{OA},\\) so O, A, C lie on a straight line.',
        },
    },

    {
        id: 'v1-028',
        topicRef: 'v1',
        topicTitle: 'Vectors 28',
        difficulty: 'Challenge',
        questionText:
            'In a trapezium \\(OABC,\\) \\( \\overrightarrow{OA} = \\mathbf{a},\\) \\( \\overrightarrow{OC} = \\mathbf{c},\\) and \\( \\overrightarrow{AB} = k\\mathbf{c} \\) where \\(AB\\) is parallel to \\(OC.\\) \\(P\\) is the midpoint of \\(OA\\) and \\(Q\\) is the midpoint of \\(BC.\\)\n\nShow that \\( \\overrightarrow{PQ} = \\tfrac{1}{2}(1+k)\\mathbf{c}.\\)',
        questionDiagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2.5, -0.5] }, { from: [0, 0], to: [1, 3], color: '#dc2626', arrow: true, label: '\\mathbf{c}', labelAt: [-0.5, 1.5] }, { from: [5, 0], to: [4, 3], color: '#888' }, { from: [1, 3], to: [4, 3], color: '#888' }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [5, 0], label: 'A', labelAnchor: 'se', r: 3 }, { at: [4, 3], label: 'B', labelAnchor: 'ne', r: 3 }, { at: [1, 3], label: 'C', labelAnchor: 'nw', r: 3 }, { at: [2.5, 0], label: 'P', labelAnchor: 's', r: 3 }, { at: [4.5, 1.5], label: 'Q', labelAnchor: 'e', r: 3 }] },
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'trapezium', 'midpoint', 'proof'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Locate B via the route O → A → B.',
                    workingLatex: '\\overrightarrow{OB} = \\overrightarrow{OA}+\\overrightarrow{AB} = \\mathbf{a}+k\\mathbf{c}',
                    explanation: 'B is reached from O by walking along OA and then along AB. AB is parallel to OC (the parallel sides of the trapezium), so it is a scalar multiple of \\( \\mathbf{c}.\\)',
                    diagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2.5, -0.5] }, { from: [0, 0], to: [1, 3], color: '#dc2626', arrow: true, label: '\\mathbf{c}', labelAt: [-0.5, 1.5] }, { from: [5, 0], to: [4, 3], color: '#888' }, { from: [1, 3], to: [4, 3], color: '#888' }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [5, 0], label: 'A', labelAnchor: 'se', r: 3 }, { at: [4, 3], label: 'B', labelAnchor: 'ne', r: 3 }, { at: [1, 3], label: 'C', labelAnchor: 'nw', r: 3 }, { at: [2.5, 0], label: 'P', labelAnchor: 's', r: 3 }, { at: [4.5, 1.5], label: 'Q', labelAnchor: 'e', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'P is the midpoint of OA.',
                    workingLatex: '\\overrightarrow{OP} = \\tfrac{1}{2}\\,\\overrightarrow{OA} = \\tfrac{1}{2}\\mathbf{a}',
                    explanation: 'Half of OA places P exactly at the middle of side OA.',
                },
                {
                    stepNumber: 3,
                    description: 'Compute \\( \\overrightarrow{BC} \\) before halving.',
                    workingLatex: '\\overrightarrow{BC} = \\overrightarrow{OC}-\\overrightarrow{OB} = \\mathbf{c}-(\\mathbf{a}+k\\mathbf{c}) = -\\mathbf{a}+(1-k)\\mathbf{c}',
                    explanation: 'Subtract position vectors. The minus distributes across the bracket: \\( \\mathbf{c} \\) coefficient becomes \\(1-k.\\)',
                },
                {
                    stepNumber: 4,
                    description: 'Reach Q (midpoint of BC) via O → B → Q.',
                    workingLatex: '\\overrightarrow{OQ} = \\overrightarrow{OB}+\\tfrac{1}{2}\\overrightarrow{BC} = (\\mathbf{a}+k\\mathbf{c})+\\tfrac{1}{2}(-\\mathbf{a}+(1-k)\\mathbf{c})',
                    explanation: 'Walk OB first, then half of BC. Distribute the \\( \\tfrac{1}{2} \\) across the bracket on the next line.',
                },
                {
                    stepNumber: 5,
                    description: 'Simplify the expression for \\( \\overrightarrow{OQ}.\\)',
                    workingLatex: '\\overrightarrow{OQ} = \\mathbf{a}-\\tfrac{1}{2}\\mathbf{a}+k\\mathbf{c}+\\tfrac{1-k}{2}\\mathbf{c} = \\tfrac{1}{2}\\mathbf{a}+\\tfrac{1+k}{2}\\mathbf{c}',
                    explanation: 'Combine \\( \\mathbf{a} \\) coefficients: \\(1-\\tfrac{1}{2}=\\tfrac{1}{2}.\\) Combine \\( \\mathbf{c} \\) coefficients: \\(k+\\tfrac{1-k}{2}=\\tfrac{2k+1-k}{2}=\\tfrac{1+k}{2}.\\)',
                },
                {
                    stepNumber: 6,
                    description: 'Compute \\( \\overrightarrow{PQ} \\) by subtracting position vectors from O.',
                    workingLatex: '\\overrightarrow{PQ} = \\overrightarrow{OQ}-\\overrightarrow{OP} = \\tfrac{1}{2}\\mathbf{a}+\\tfrac{1+k}{2}\\mathbf{c}-\\tfrac{1}{2}\\mathbf{a} = \\tfrac{1}{2}(1+k)\\mathbf{c}',
                    explanation: 'The \\( \\mathbf{a} \\) terms cancel exactly. This is the required result. ∎',
                },
            ],
            finalAnswer: '\\( \\overrightarrow{PQ} = \\tfrac{1}{2}(1+k)\\mathbf{c} \\) — proven.',
        },
    },

    {
        id: 'v1-029',
        topicRef: 'v1',
        topicTitle: 'Vectors 29',
        difficulty: 'Challenge',
        questionText:
            'In triangle \\(OAB,\\) \\( \\overrightarrow{OA}=\\mathbf{a} \\) and \\( \\overrightarrow{OB}=\\mathbf{b}.\\) The point \\(P\\) divides \\(OA\\) in the ratio \\(1:3\\) and the point \\(Q\\) divides \\(AB\\) in the ratio \\(1:1.\\)\n\na) Find \\( \\overrightarrow{OP} \\) and \\( \\overrightarrow{OQ}.\\)\n\nb) Show that \\( \\overrightarrow{PQ} = \\tfrac{1}{4}\\mathbf{a}+\\tfrac{1}{2}\\mathbf{b}.\\)',
        questionDiagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2.5, -0.5] }, { from: [0, 0], to: [2, 4], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [0.5, 2.2] }, { from: [5, 0], to: [2, 4], color: '#888' }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [5, 0], label: 'A', labelAnchor: 'se', r: 3 }, { at: [2, 4], label: 'B', labelAnchor: 'n', r: 3 }, { at: [1.25, 0], label: 'P', labelAnchor: 's', r: 3 }, { at: [3.5, 2], label: 'Q', labelAnchor: 'e', r: 3 }] },
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'triangle', 'ratio', 'midpoint', 'proof'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'a) Locate P using the ratio \\(OP:PA = 1:3.\\)',
                    workingLatex: '\\overrightarrow{OP} = \\tfrac{1}{4}\\overrightarrow{OA} = \\tfrac{1}{4}\\mathbf{a}',
                    explanation: 'The ratio splits OA into 4 equal segments with P one part along from O.',
                    diagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2.5, -0.5] }, { from: [0, 0], to: [2, 4], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [0.5, 2.2] }, { from: [5, 0], to: [2, 4], color: '#888' }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [5, 0], label: 'A', labelAnchor: 'se', r: 3 }, { at: [2, 4], label: 'B', labelAnchor: 'n', r: 3 }, { at: [1.25, 0], label: 'P', labelAnchor: 's', r: 3 }, { at: [3.5, 2], label: 'Q', labelAnchor: 'e', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'Compute \\( \\overrightarrow{AB} \\) before locating Q.',
                    workingLatex: '\\overrightarrow{AB} = \\overrightarrow{OB}-\\overrightarrow{OA} = -\\mathbf{a}+\\mathbf{b}',
                    explanation: 'Difference of position vectors from O.',
                },
                {
                    stepNumber: 3,
                    description: 'Q is the midpoint of AB; reach Q via O → A → Q.',
                    workingLatex: '\\overrightarrow{OQ} = \\overrightarrow{OA}+\\tfrac{1}{2}\\overrightarrow{AB} = \\mathbf{a}+\\tfrac{1}{2}(-\\mathbf{a}+\\mathbf{b}) = \\tfrac{1}{2}\\mathbf{a}+\\tfrac{1}{2}\\mathbf{b}',
                    explanation: 'Halve AB to find its midpoint Q. Distribute and collect like terms.',
                },
                {
                    stepNumber: 4,
                    description: 'b) Compute \\( \\overrightarrow{PQ} \\) by subtracting position vectors from O.',
                    workingLatex: '\\overrightarrow{PQ} = \\overrightarrow{OQ}-\\overrightarrow{OP} = \\left(\\tfrac{1}{2}\\mathbf{a}+\\tfrac{1}{2}\\mathbf{b}\\right)-\\tfrac{1}{4}\\mathbf{a} = \\tfrac{1}{4}\\mathbf{a}+\\tfrac{1}{2}\\mathbf{b}',
                    explanation: 'Combine \\( \\mathbf{a} \\) coefficients: \\(\\tfrac{1}{2}-\\tfrac{1}{4}=\\tfrac{1}{4}.\\) The \\( \\mathbf{b} \\) coefficient is unchanged. This matches the required form. ∎',
                },
            ],
            finalAnswer: 'a) \\(\\overrightarrow{OP}=\\tfrac{1}{4}\\mathbf{a},\\) \\(\\overrightarrow{OQ}=\\tfrac{1}{2}\\mathbf{a}+\\tfrac{1}{2}\\mathbf{b}.\\) b) \\(\\overrightarrow{PQ}=\\tfrac{1}{4}\\mathbf{a}+\\tfrac{1}{2}\\mathbf{b}\\) — proven.',
        },
    },

    {
        id: 'v1-030',
        topicRef: 'v1',
        topicTitle: 'Vectors 30',
        difficulty: 'Challenge',
        questionText:
            '\\(OABC\\) is a parallelogram. \\( \\overrightarrow{OA} = \\mathbf{a} \\) and \\( \\overrightarrow{OC} = \\mathbf{c}.\\) \\(M\\) is the midpoint of \\(AB\\) and \\(N\\) divides \\(OC\\) in the ratio \\(2:1.\\)\n\na) Express \\( \\overrightarrow{OM} \\) and \\( \\overrightarrow{ON} \\) in terms of \\( \\mathbf{a} \\) and \\( \\mathbf{c}.\\)\n\nb) Show that \\( \\overrightarrow{NM} \\) is parallel to \\( 6\\mathbf{a}-\\mathbf{c}.\\)',
        questionDiagram: { xMin: -1, xMax: 8, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2.5, -0.5] }, { from: [0, 0], to: [1.5, 3.5], color: '#dc2626', arrow: true, label: '\\mathbf{c}', labelAt: [-0.5, 1.8] }, { from: [5, 0], to: [6.5, 3.5], color: '#888' }, { from: [1.5, 3.5], to: [6.5, 3.5], color: '#888' }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [5, 0], label: 'A', labelAnchor: 'se', r: 3 }, { at: [6.5, 3.5], label: 'B', labelAnchor: 'ne', r: 3 }, { at: [1.5, 3.5], label: 'C', labelAnchor: 'nw', r: 3 }, { at: [5.75, 1.75], label: 'M', labelAnchor: 'e', r: 3 }, { at: [1, 2.33], label: 'N', labelAnchor: 'w', r: 3 }] },
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'parallelogram', 'midpoint', 'ratio', 'parallel proof'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the parallelogram identification \\( \\overrightarrow{AB}=\\overrightarrow{OC}=\\mathbf{c}.\\)',
                    workingLatex: '\\overrightarrow{AB} = \\mathbf{c},\\quad \\overrightarrow{OB} = \\overrightarrow{OA}+\\overrightarrow{AB} = \\mathbf{a}+\\mathbf{c}',
                    explanation: 'In a parallelogram OABC (vertices in that order), opposite sides AB and OC are equal as vectors. So AB equals OC = c.',
                    diagram: { xMin: -1, xMax: 8, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2.5, -0.5] }, { from: [0, 0], to: [1.5, 3.5], color: '#dc2626', arrow: true, label: '\\mathbf{c}', labelAt: [-0.5, 1.8] }, { from: [5, 0], to: [6.5, 3.5], color: '#888' }, { from: [1.5, 3.5], to: [6.5, 3.5], color: '#888' }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [5, 0], label: 'A', labelAnchor: 'se', r: 3 }, { at: [6.5, 3.5], label: 'B', labelAnchor: 'ne', r: 3 }, { at: [1.5, 3.5], label: 'C', labelAnchor: 'nw', r: 3 }, { at: [5.75, 1.75], label: 'M', labelAnchor: 'e', r: 3 }, { at: [1, 2.33], label: 'N', labelAnchor: 'w', r: 3 }] },
                },
                {
                    stepNumber: 2,
                    description: 'a) M is the midpoint of AB.',
                    workingLatex: '\\overrightarrow{OM} = \\overrightarrow{OA}+\\tfrac{1}{2}\\overrightarrow{AB} = \\mathbf{a}+\\tfrac{1}{2}\\mathbf{c}',
                    explanation: 'Walk OA, then half of AB to land on the midpoint.',
                },
                {
                    stepNumber: 3,
                    description: 'N divides OC in the ratio 2:1 from O.',
                    workingLatex: '\\overrightarrow{ON} = \\tfrac{2}{3}\\overrightarrow{OC} = \\tfrac{2}{3}\\mathbf{c}',
                    explanation: 'The ratio splits OC into 3 parts; N is two parts along from O.',
                },
                {
                    stepNumber: 4,
                    description: 'b) Compute \\( \\overrightarrow{NM} \\) by subtracting position vectors from O.',
                    workingLatex: '\\overrightarrow{NM} = \\overrightarrow{OM}-\\overrightarrow{ON} = \\left(\\mathbf{a}+\\tfrac{1}{2}\\mathbf{c}\\right)-\\tfrac{2}{3}\\mathbf{c}',
                    explanation: 'Subtract position vectors to get the displacement N → M.',
                },
                {
                    stepNumber: 5,
                    description: 'Combine the \\( \\mathbf{c} \\) coefficients.',
                    workingLatex: '\\overrightarrow{NM} = \\mathbf{a}+\\left(\\tfrac{1}{2}-\\tfrac{2}{3}\\right)\\mathbf{c} = \\mathbf{a}-\\tfrac{1}{6}\\mathbf{c}',
                    explanation: 'Common denominator 6: \\( \\tfrac{1}{2}=\\tfrac{3}{6} \\) and \\( \\tfrac{2}{3}=\\tfrac{4}{6},\\) giving \\( \\tfrac{3}{6}-\\tfrac{4}{6}=-\\tfrac{1}{6}.\\)',
                },
                {
                    stepNumber: 6,
                    description: 'Factor to identify the parallel partner.',
                    workingLatex: '\\overrightarrow{NM} = \\tfrac{1}{6}(6\\mathbf{a}-\\mathbf{c})',
                    explanation: 'NM is a scalar multiple of \\(6\\mathbf{a}-\\mathbf{c},\\) so NM is parallel to \\(6\\mathbf{a}-\\mathbf{c}.\\) ∎',
                },
            ],
            finalAnswer: 'a) \\(\\overrightarrow{OM}=\\mathbf{a}+\\tfrac{1}{2}\\mathbf{c},\\) \\(\\overrightarrow{ON}=\\tfrac{2}{3}\\mathbf{c}.\\) b) \\(\\overrightarrow{NM}=\\tfrac{1}{6}(6\\mathbf{a}-\\mathbf{c}),\\) parallel to \\(6\\mathbf{a}-\\mathbf{c}.\\)',
        },
    },
    {
        id: 'v1-031',
        topicRef: 'v1',
        topicTitle: 'Vectors 31',
        difficulty: 'Challenge',
        questionText: 'In triangle \\(OAB,\\) \\( \\overrightarrow{OA} = \\mathbf{a} \\) and \\( \\overrightarrow{OB} = \\mathbf{b}.\\) \\(M\\) is the midpoint of \\(AB\\) and the point \\(P\\) lies on \\(OM\\) extended such that \\( \\overrightarrow{OP} = \\tfrac{3}{2}\\overrightarrow{OM}.\\) The line \\(BP\\) meets \\(OA\\) at \\(Q.\\)\n\na) Find \\( \\overrightarrow{OP} \\) in terms of \\( \\mathbf{a} \\) and \\( \\mathbf{b}.\\)\n\nb) Find \\( \\overrightarrow{OQ},\\) and hence find the ratio \\(OQ:QA.\\)',
        questionDiagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 6, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2.5, -0.5] }, { from: [0, 0], to: [2, 4], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [0.5, 2.2] }, { from: [5, 0], to: [2, 4], color: '#888' }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [5, 0], label: 'A', labelAnchor: 's', r: 3 }, { at: [2, 4], label: 'B', labelAnchor: 'n', r: 3 }, { at: [3.5, 2], label: 'M', labelAnchor: 'w', r: 3 }, { at: [5.25, 3], label: 'P', labelAnchor: 'e', r: 3 }] },
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'triangle', 'midpoint', 'intersection', 'ratio', 'proof'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Build \\( \\overrightarrow{AB} \\) before locating M.', workingLatex: '\\overrightarrow{AB} = \\overrightarrow{OB}-\\overrightarrow{OA} = \\mathbf{b}-\\mathbf{a}', explanation: 'Standard difference of position vectors. We will halve AB to find the midpoint M.',
                    diagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 6, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2.5, -0.5] }, { from: [0, 0], to: [2, 4], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [0.5, 2.2] }, { from: [5, 0], to: [2, 4], color: '#888' }, { from: [0, 0], to: [3.5, 2], color: '#047857', dashed: true, arrow: true, label: '\\overrightarrow{OM}', labelAt: [1.6, 1.5] }, { from: [0, 0], to: [5.25, 3], color: '#a16207', dashed: true, arrow: true, label: '\\overrightarrow{OP}', labelAt: [4, 1.8] }, { from: [2, 4], to: [5.25, 3], color: '#888', dashed: true }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [5, 0], label: 'A', labelAnchor: 's', r: 3 }, { at: [2, 4], label: 'B', labelAnchor: 'n', r: 3 }, { at: [3.5, 2], label: 'M', labelAnchor: 'w', r: 3 }, { at: [5.25, 3], label: 'P', labelAnchor: 'e', r: 3 }] } },
                { stepNumber: 2, description: 'Reach M from O via O → A → M (halving AB).', workingLatex: '\\overrightarrow{OM} = \\overrightarrow{OA}+\\tfrac{1}{2}\\overrightarrow{AB} = \\mathbf{a}+\\tfrac{1}{2}(\\mathbf{b}-\\mathbf{a}) = \\tfrac{1}{2}(\\mathbf{a}+\\mathbf{b})', explanation: 'Distribute the \\( \\tfrac{1}{2} \\) across the bracket and collect like terms. OM is symmetric in a and b — typical for a midpoint vector.' },
                { stepNumber: 3, description: 'a) Scale OM by 3/2 to reach P.', workingLatex: '\\overrightarrow{OP} = \\tfrac{3}{2}\\cdot\\tfrac{1}{2}(\\mathbf{a}+\\mathbf{b}) = \\tfrac{3}{4}(\\mathbf{a}+\\mathbf{b})', explanation: 'P is given as \\( \\tfrac{3}{2}\\overrightarrow{OM},\\) so multiply OM by \\( \\tfrac{3}{2}.\\) Combine the two fractions: \\( \\tfrac{3}{2}\\cdot\\tfrac{1}{2}=\\tfrac{3}{4}.\\)' },
                { stepNumber: 4, description: 'b) Express Q two different ways.', workingLatex: '\\overrightarrow{OQ} = s\\mathbf{a};\\quad \\overrightarrow{OQ} = \\overrightarrow{OB}+t\\,\\overrightarrow{BP}', explanation: 'Q lies on line OA, so \\( \\overrightarrow{OQ} \\) is a scalar multiple of \\( \\mathbf{a}.\\) Q also lies on line BP, so we can reach it from B by going some fraction \\(t\\) along BP (after travelling OB).' },
                { stepNumber: 5, description: 'Compute \\( \\overrightarrow{BP}.\\)', workingLatex: '\\overrightarrow{BP} = \\overrightarrow{OP}-\\overrightarrow{OB} = \\tfrac{3}{4}\\mathbf{a}+\\tfrac{3}{4}\\mathbf{b}-\\mathbf{b} = \\tfrac{3}{4}\\mathbf{a}-\\tfrac{1}{4}\\mathbf{b}', explanation: 'Difference of position vectors. The \\( \\mathbf{b} \\) coefficients combine: \\( \\tfrac{3}{4}-1=-\\tfrac{1}{4}.\\)' },
                { stepNumber: 6, description: 'Substitute and equate the two expressions for Q.', workingLatex: 's\\mathbf{a} = \\mathbf{b}+t\\!\\left(\\tfrac{3}{4}\\mathbf{a}-\\tfrac{1}{4}\\mathbf{b}\\right) = \\tfrac{3}{4}t\\,\\mathbf{a}+\\left(1-\\tfrac{1}{4}t\\right)\\mathbf{b}', explanation: 'Expand the bracket and collect coefficients of \\( \\mathbf{a} \\) and \\( \\mathbf{b}.\\)' },
                { stepNumber: 7, description: 'Compare coefficients of \\( \\mathbf{a} \\) and \\( \\mathbf{b} \\) (non-parallel basis).', workingLatex: '\\mathbf{a}:\\ s = \\tfrac{3}{4}t.\\quad \\mathbf{b}:\\ 0 = 1-\\tfrac{1}{4}t', explanation: 'The left-hand side has no \\( \\mathbf{b} \\) term, so the right-hand \\( \\mathbf{b} \\) coefficient must be zero.' },
                { stepNumber: 8, description: 'Solve for \\(t\\) and then \\(s.\\)', workingLatex: '1-\\tfrac{1}{4}t=0 \\;\\Longrightarrow\\; t = 4;\\quad s = \\tfrac{3}{4}\\cdot 4 = 3', explanation: '\\(t=4\\) means we travel four times BP to reach Q from B. The corresponding \\(s=3\\) places Q on the OA line at three times OA.' },
                { stepNumber: 9, description: 'State \\( \\overrightarrow{OQ} \\) and the required ratio.', workingLatex: '\\overrightarrow{OQ} = 3\\mathbf{a},\\quad \\overrightarrow{QA} = \\overrightarrow{OA}-\\overrightarrow{OQ} = -2\\mathbf{a}', explanation: 'Q lies on the extension of OA beyond A (since \\(s>1\\)). The lengths along the line are 3 (for OQ) and 2 (for QA), giving \\(OQ:QA = 3:2.\\) ∎' }
            ],
            finalAnswer: 'a) \\( \\overrightarrow{OP} = \\tfrac{3}{4}(\\mathbf{a}+\\mathbf{b}).\\)  b) \\( \\overrightarrow{OQ} = 3\\mathbf{a} ;\\) Q lies on OA extended with \\( OQ:QA = 3:2.\\)'
        }
    },
    {
        id: 'v1-032',
        topicRef: 'v1',
        topicTitle: 'Vectors 32',
        difficulty: 'Challenge',
        questionText: '\\(PQRS\\) is a parallelogram with \\( \\overrightarrow{PQ} = \\mathbf{u} \\) and \\( \\overrightarrow{PS} = \\mathbf{v}.\\) \\(T\\) is the point on side \\(QR\\) with \\(QT:TR = 1:3\\) and \\(U\\) is the point on side \\(RS\\) with \\(RU:US = 2:1.\\)\n\na) Find \\( \\overrightarrow{PT} \\) and \\( \\overrightarrow{PU} \\) in terms of \\( \\mathbf{u} \\) and \\( \\mathbf{v}.\\)\n\nb) The line \\(TU\\) is extended to meet \\(PQ\\) extended at the point \\(V.\\) Find \\( \\overrightarrow{PV},\\) and hence determine the ratio \\(PQ:QV.\\)',
        questionDiagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [4, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{u}', labelAt: [2, -0.5] }, { from: [0, 0], to: [1.5, 3], color: '#dc2626', arrow: true, label: '\\mathbf{v}', labelAt: [-0.5, 1.5] }, { from: [4, 0], to: [5.5, 3], color: '#888' }, { from: [1.5, 3], to: [5.5, 3], color: '#888' }], points: [{ at: [0, 0], label: 'P', labelAnchor: 'sw', r: 3 }, { at: [4, 0], label: 'Q', labelAnchor: 's', r: 3 }, { at: [5.5, 3], label: 'R', labelAnchor: 'ne', r: 3 }, { at: [1.5, 3], label: 'S', labelAnchor: 'nw', r: 3 }, { at: [4.375, 0.75], label: 'T', labelAnchor: 'e', r: 3 }, { at: [2.83, 3], label: 'U', labelAnchor: 'n', r: 3 }] },
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'parallelogram', 'ratio', 'intersection', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'a) Locate T on QR using \\(QT:TR=1:3\\) (and \\( \\overrightarrow{QR}=\\overrightarrow{PS}=\\mathbf{v} \\)).', workingLatex: '\\overrightarrow{PT} = \\overrightarrow{PQ}+\\overrightarrow{QT} = \\mathbf{u}+\\tfrac{1}{4}\\mathbf{v}', explanation: 'In a parallelogram QR = PS = v. The ratio splits QR into 4 parts; T is one part along from Q. So \\( \\overrightarrow{QT}=\\tfrac{1}{4}\\mathbf{v}.\\)',
                    diagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [4, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{u}', labelAt: [2, -0.5] }, { from: [0, 0], to: [1.5, 3], color: '#dc2626', arrow: true, label: '\\mathbf{v}', labelAt: [-0.5, 1.5] }, { from: [4, 0], to: [5.5, 3], color: '#888' }, { from: [1.5, 3], to: [5.5, 3], color: '#888' }, { from: [2.83, 3], to: [4.89, 0], color: '#047857', dashed: true, arrow: true, label: 'TU extended', labelAt: [3.0, 1.4] }], points: [{ at: [0, 0], label: 'P', labelAnchor: 'sw', r: 3 }, { at: [4, 0], label: 'Q', labelAnchor: 's', r: 3 }, { at: [5.5, 3], label: 'R', labelAnchor: 'ne', r: 3 }, { at: [1.5, 3], label: 'S', labelAnchor: 'nw', r: 3 }, { at: [4.375, 0.75], label: 'T', labelAnchor: 'e', r: 3 }, { at: [2.83, 3], label: 'U', labelAnchor: 'n', r: 3 }, { at: [4.89, 0], label: 'V', labelAnchor: 'se', r: 3 }] } },
                { stepNumber: 2, description: 'Locate U on RS using \\(RU:US=2:1.\\) Note \\( \\overrightarrow{SR}=\\overrightarrow{PQ}=\\mathbf{u}.\\)', workingLatex: '\\overrightarrow{SU} = \\tfrac{1}{3}\\overrightarrow{SR} = \\tfrac{1}{3}\\mathbf{u}', explanation: 'U is 2 parts from R and 1 part from S, so going from S to U covers 1 part out of 3 along SR.' },
                { stepNumber: 3, description: 'Express \\( \\overrightarrow{PU} \\) via the route P → S → U.', workingLatex: '\\overrightarrow{PU} = \\overrightarrow{PS}+\\overrightarrow{SU} = \\mathbf{v}+\\tfrac{1}{3}\\mathbf{u} = \\tfrac{1}{3}\\mathbf{u}+\\mathbf{v}', explanation: 'Walk PS first, then SU.' },
                { stepNumber: 4, description: 'b) Compute \\( \\overrightarrow{TU}.\\)', workingLatex: '\\overrightarrow{TU} = \\overrightarrow{PU}-\\overrightarrow{PT} = \\left(\\tfrac{1}{3}\\mathbf{u}+\\mathbf{v}\\right)-\\left(\\mathbf{u}+\\tfrac{1}{4}\\mathbf{v}\\right) = -\\tfrac{2}{3}\\mathbf{u}+\\tfrac{3}{4}\\mathbf{v}', explanation: 'Combine \\( \\mathbf{u} \\) coefficients: \\( \\tfrac{1}{3}-1=-\\tfrac{2}{3}.\\) Combine \\( \\mathbf{v} \\) coefficients: \\(1-\\tfrac{1}{4}=\\tfrac{3}{4}.\\)' },
                { stepNumber: 5, description: 'Express V two ways: along line PQ, and via T then along TU.', workingLatex: '\\overrightarrow{PV} = \\lambda\\mathbf{u};\\quad \\overrightarrow{PV} = \\overrightarrow{PT}+\\mu\\,\\overrightarrow{TU}', explanation: 'V is on line PQ (so a scalar multiple of \\(\\mathbf{u}\\)) and on line TU (reached from T by going \\(\\mu\\) along TU).' },
                { stepNumber: 6, description: 'Substitute and expand.', workingLatex: '\\lambda\\mathbf{u} = \\mathbf{u}+\\tfrac{1}{4}\\mathbf{v}+\\mu\\!\\left(-\\tfrac{2}{3}\\mathbf{u}+\\tfrac{3}{4}\\mathbf{v}\\right)', explanation: 'Replace each named vector with its \\( \\mathbf{u},\\mathbf{v} \\) form, ready to collect coefficients.' },
                { stepNumber: 7, description: 'Compare coefficients of \\( \\mathbf{u} \\) and \\( \\mathbf{v}.\\)', workingLatex: '\\mathbf{v}:\\ 0 = \\tfrac{1}{4}+\\tfrac{3}{4}\\mu.\\quad \\mathbf{u}:\\ \\lambda = 1-\\tfrac{2}{3}\\mu', explanation: 'The LHS has no \\( \\mathbf{v} \\) term, so the right-hand \\( \\mathbf{v} \\) coefficient must vanish.' },
                { stepNumber: 8, description: 'Solve for \\( \\mu \\) then \\( \\lambda.\\)', workingLatex: '\\mu = -\\tfrac{1}{3};\\quad \\lambda = 1-\\tfrac{2}{3}\\!\\cdot\\!\\left(-\\tfrac{1}{3}\\right) = 1+\\tfrac{2}{9} = \\tfrac{11}{9}', explanation: 'A negative \\( \\mu \\) means V is on the opposite side of T from U — TU was "extended" past T. Substitute back to get \\( \\lambda.\\)' },
                { stepNumber: 9, description: 'State \\( \\overrightarrow{PV} \\) and translate into the requested ratio.', workingLatex: '\\overrightarrow{PV} = \\tfrac{11}{9}\\mathbf{u};\\quad \\overrightarrow{QV} = \\overrightarrow{PV}-\\overrightarrow{PQ} = \\tfrac{2}{9}\\mathbf{u}', explanation: 'V sits at \\( \\lambda=\\tfrac{11}{9} \\) along PQ from P, with Q at \\( \\lambda=1.\\) Hence PQ:QV = 1 : \\( \\tfrac{2}{9} \\) = 9:2 along the line.' }
            ],
            finalAnswer: 'a) \\( \\overrightarrow{PT} = \\mathbf{u}+\\tfrac{1}{4}\\mathbf{v},\\) \\( \\overrightarrow{PU} = \\tfrac{1}{3}\\mathbf{u}+\\mathbf{v}.\\)  b) \\( \\overrightarrow{PV} = \\tfrac{11}{9}\\mathbf{u},\\) so PQ:QV = 9:2.'
        }
    },
    {
        id: 'v1-033',
        topicRef: 'v1',
        topicTitle: 'Vectors 33',
        difficulty: 'Foundation',
        questionText: 'Write \\( 3\\begin{pmatrix}2\\\\-1\\end{pmatrix} + 2\\begin{pmatrix}-4\\\\5\\end{pmatrix} \\) as a single column vector.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'column vectors', 'scalar multiplication'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Distribute the scalars into each column.', workingLatex: '3\\begin{pmatrix}2\\\\-1\\end{pmatrix}+2\\begin{pmatrix}-4\\\\5\\end{pmatrix} = \\begin{pmatrix}6\\\\-3\\end{pmatrix}+\\begin{pmatrix}-8\\\\10\\end{pmatrix}', explanation: 'Multiply each component of the first vector by 3 and each component of the second by 2.' },
                { stepNumber: 2, description: 'Add componentwise.', workingLatex: '= \\begin{pmatrix}6+(-8)\\\\-3+10\\end{pmatrix} = \\begin{pmatrix}-2\\\\7\\end{pmatrix}', explanation: 'Sum the columns row-by-row to get the final column vector.' }
            ],
            finalAnswer: '\\( \\begin{pmatrix}-2\\\\7\\end{pmatrix} \\)'
        }
    },
    {
        id: 'v1-034',
        topicRef: 'v1',
        topicTitle: 'Vectors 34',
        difficulty: 'Foundation',
        questionText: 'The position vector of \\(A\\) is \\( 5\\mathbf{i} - 2\\mathbf{j} \\) and the position vector of \\(B\\) is \\( -\\mathbf{i} + 4\\mathbf{j}.\\) Find \\( \\overrightarrow{AB} \\) as a column vector.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'position vectors', 'column vectors'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Convert the given i+j vectors to column form.', workingLatex: '\\overrightarrow{OA} = \\begin{pmatrix}5\\\\-2\\end{pmatrix},\\quad \\overrightarrow{OB} = \\begin{pmatrix}-1\\\\4\\end{pmatrix}', explanation: 'Read the coefficient of \\( \\mathbf{i} \\) as the top entry and the coefficient of \\( \\mathbf{j} \\) as the bottom entry.',
                    diagram: { xMin: -3, xMax: 7, yMin: -4, yMax: 6, xTicks: [-1, 5], yTicks: [-2, 4], lines: [{ from: [5, -2], to: [-1, 4], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{AB}', labelAt: [2.5, 1.5] }], points: [{ at: [5, -2], label: 'A', labelAnchor: 'se', r: 4 }, { at: [-1, 4], label: 'B', labelAnchor: 'nw', r: 4 }] } },
                { stepNumber: 2, description: 'Subtract componentwise to get \\( \\overrightarrow{AB}.\\)', workingLatex: '\\overrightarrow{AB} = \\overrightarrow{OB}-\\overrightarrow{OA} = \\begin{pmatrix}-1-5\\\\4-(-2)\\end{pmatrix} = \\begin{pmatrix}-6\\\\6\\end{pmatrix}', explanation: 'For two points sharing the origin O, the displacement A → B is the difference of their position vectors.' }
            ],
            finalAnswer: '\\( \\begin{pmatrix}-6\\\\6\\end{pmatrix} \\)'
        }
    },
    {
        id: 'v1-035',
        topicRef: 'v1',
        topicTitle: 'Vectors 35',
        difficulty: 'Challenge',
        questionText: '\\( \\mathbf{a} \\) and \\( \\mathbf{b} \\) are non-parallel non-zero vectors.\n\nGiven that the vector \\( (\\alpha+2)\\mathbf{a} + (\\beta-1)\\mathbf{b} \\) is equal to the vector \\( 5\\mathbf{a} - (\\alpha\\beta)\\mathbf{b},\\) and that the vector \\( (\\alpha-1)\\mathbf{a} + 4\\mathbf{b} \\) is parallel to \\( 3\\mathbf{a} - 2\\mathbf{b},\\) find all possible pairs \\( (\\alpha, \\beta).\\)',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'parallel', 'simultaneous equations', 'unknowns', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'First condition: equate coefficients of \\( \\mathbf{a} \\) on both sides.', workingLatex: '\\mathbf{a}:\\ \\alpha+2 = 5 \\;\\Longrightarrow\\; \\alpha = 3', explanation: 'Two vectors are equal iff their coefficients of each (non-parallel) basis vector match. The \\( \\mathbf{a} \\) equation immediately pins \\( \\alpha.\\)' },
                { stepNumber: 2, description: 'Equate coefficients of \\( \\mathbf{b}.\\)', workingLatex: '\\mathbf{b}:\\ \\beta - 1 = -\\alpha\\beta', explanation: 'This is the second matching equation. Now substitute the known \\( \\alpha.\\)' },
                { stepNumber: 3, description: 'Substitute \\( \\alpha = 3 \\) and solve for \\( \\beta.\\)', workingLatex: '\\beta - 1 = -3\\beta \\;\\Longrightarrow\\; 4\\beta = 1 \\;\\Longrightarrow\\; \\beta = \\tfrac{1}{4}', explanation: 'Add \\(3\\beta\\) to both sides to collect like terms, then divide by 4.' },
                { stepNumber: 4, description: 'Second condition: substitute \\( \\alpha = 3 \\) into the parallel-target vector.', workingLatex: '(\\alpha-1)\\mathbf{a}+4\\mathbf{b} = 2\\mathbf{a}+4\\mathbf{b}', explanation: 'With \\(\\alpha=3,\\) we get \\(\\alpha-1=2.\\)' },
                { stepNumber: 5, description: 'Write down the parallel condition with scalar \\(k.\\)', workingLatex: '2\\mathbf{a}+4\\mathbf{b} = k(3\\mathbf{a}-2\\mathbf{b})', explanation: 'For two vectors to be parallel, one must be a scalar multiple of the other.' },
                { stepNumber: 6, description: 'Compare coefficients of \\( \\mathbf{a} \\) and \\( \\mathbf{b}.\\)', workingLatex: '\\mathbf{a}:\\ 2 = 3k \\;\\Longrightarrow\\; k = \\tfrac{2}{3}.\\quad \\mathbf{b}:\\ 4 = -2k \\;\\Longrightarrow\\; k = -2', explanation: 'The two equations demand different values of \\(k.\\) No single scalar can satisfy both simultaneously.' },
                { stepNumber: 7, description: 'Conclude that no pair satisfies both conditions.', workingLatex: 'k=\\tfrac{2}{3}\\neq -2 \\;\\Longrightarrow\\; \\text{contradiction}', explanation: 'The first condition forces \\( (\\alpha,\\beta)=(3,\\tfrac{1}{4}) \\) uniquely, but those values fail the second condition. Hence the system has no solution. ∎' }
            ],
            finalAnswer: 'No solution: the equation forces \\( (\\alpha,\\beta) = (3, \\tfrac{1}{4}),\\) but with these values \\( (\\alpha-1)\\mathbf{a}+4\\mathbf{b} = 2\\mathbf{a}+4\\mathbf{b} \\) is NOT parallel to \\( 3\\mathbf{a}-2\\mathbf{b} \\) (the scalar ratios disagree).'
        }
    },
    {
        id: 'v1-036',
        topicRef: 'v1',
        topicTitle: 'Vectors 36',
        difficulty: 'Challenge',
        questionText: '\\(ABCD\\) is a rhombus with \\( \\overrightarrow{AB} = \\mathbf{p} \\) and \\( \\overrightarrow{AD} = \\mathbf{q}.\\) The diagonals \\(AC\\) and \\(BD\\) intersect at the centre \\(O.\\) The point \\(E\\) lies on \\(AC\\) with \\(AE:EC = 1:3.\\)\n\na) Express \\( \\overrightarrow{AO},\\) \\( \\overrightarrow{AE} \\) and \\( \\overrightarrow{BE} \\) in terms of \\( \\mathbf{p} \\) and \\( \\mathbf{q}.\\)\n\nb) The line \\(BE\\) is extended to meet \\(AD\\) (extended if necessary) at \\(F.\\) By writing \\( \\overrightarrow{AF}=s\\mathbf{q} \\) and \\( \\overrightarrow{BF}=t\\overrightarrow{BE},\\) find \\( s \\) and \\( t.\\)',
        questionDiagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [4, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{p}', labelAt: [2, -0.5] }, { from: [0, 0], to: [1.5, 3], color: '#dc2626', arrow: true, label: '\\mathbf{q}', labelAt: [-0.5, 1.5] }, { from: [4, 0], to: [5.5, 3], color: '#888' }, { from: [1.5, 3], to: [5.5, 3], color: '#888' }, { from: [0, 0], to: [5.5, 3], color: '#888' }, { from: [4, 0], to: [1.5, 3], color: '#888' }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 3 }, { at: [4, 0], label: 'B', labelAnchor: 'se', r: 3 }, { at: [5.5, 3], label: 'C', labelAnchor: 'ne', r: 3 }, { at: [1.5, 3], label: 'D', labelAnchor: 'nw', r: 3 }, { at: [2.75, 1.5], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [1.375, 0.75], label: 'E', labelAnchor: 'sw', r: 3 }] },
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'rhombus', 'diagonals', 'intersection', 'ratio', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'a) Build \\( \\overrightarrow{AC},\\) the full diagonal.', workingLatex: '\\overrightarrow{AC} = \\overrightarrow{AB}+\\overrightarrow{BC} = \\mathbf{p}+\\mathbf{q}', explanation: 'In any rhombus (a special parallelogram), opposite sides are equal vectors, so \\( \\overrightarrow{BC}=\\overrightarrow{AD}=\\mathbf{q}.\\) Route A → B → C gives the full diagonal.',
                    diagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [4, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{p}', labelAt: [2, -0.5] }, { from: [0, 0], to: [1.5, 3], color: '#dc2626', arrow: true, label: '\\mathbf{q}', labelAt: [-0.5, 1.5] }, { from: [4, 0], to: [5.5, 3], color: '#888' }, { from: [1.5, 3], to: [5.5, 3], color: '#888' }, { from: [0, 0], to: [5.5, 3], color: '#047857', dashed: true, label: 'AC', labelAt: [4, 1.0] }, { from: [4, 0], to: [1.5, 3], color: '#a16207', dashed: true, label: 'BD', labelAt: [2.2, 2.0] }, { from: [4, 0], to: [-1, 2], color: '#9333ea', dashed: true, arrow: true, label: 'BE→F', labelAt: [1.0, 0.7] }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 3 }, { at: [4, 0], label: 'B', labelAnchor: 'se', r: 3 }, { at: [5.5, 3], label: 'C', labelAnchor: 'ne', r: 3 }, { at: [1.5, 3], label: 'D', labelAnchor: 'nw', r: 3 }, { at: [2.75, 1.5], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [1.375, 0.75], label: 'E', labelAnchor: 'sw', r: 3 }] } },
                { stepNumber: 2, description: 'Locate O, the midpoint of AC (and BD).', workingLatex: '\\overrightarrow{AO} = \\tfrac{1}{2}\\overrightarrow{AC} = \\tfrac{1}{2}(\\mathbf{p}+\\mathbf{q})', explanation: 'In a rhombus (and any parallelogram) the diagonals bisect each other, so AO is half of AC.' },
                { stepNumber: 3, description: 'Locate E using \\(AE:EC=1:3.\\)', workingLatex: '\\overrightarrow{AE} = \\tfrac{1}{4}\\overrightarrow{AC} = \\tfrac{1}{4}(\\mathbf{p}+\\mathbf{q})', explanation: 'The ratio splits AC into 4 parts; E is one part along from A.' },
                { stepNumber: 4, description: 'Compute \\( \\overrightarrow{BE}.\\)', workingLatex: '\\overrightarrow{BE} = \\overrightarrow{AE}-\\overrightarrow{AB} = \\tfrac{1}{4}\\mathbf{p}+\\tfrac{1}{4}\\mathbf{q}-\\mathbf{p} = -\\tfrac{3}{4}\\mathbf{p}+\\tfrac{1}{4}\\mathbf{q}', explanation: 'Difference of position vectors from A. The \\( \\mathbf{p} \\) coefficient becomes \\( \\tfrac{1}{4}-1=-\\tfrac{3}{4}.\\)' },
                { stepNumber: 5, description: 'b) Express F two ways: on line AD, and on line BE from B.', workingLatex: '\\overrightarrow{AF} = s\\mathbf{q};\\quad \\overrightarrow{AF} = \\overrightarrow{AB}+t\\,\\overrightarrow{BE} = \\mathbf{p}+t\\!\\left(-\\tfrac{3}{4}\\mathbf{p}+\\tfrac{1}{4}\\mathbf{q}\\right)', explanation: 'F is on line AD (which is the direction \\(\\mathbf{q}\\)) and on line BE. Both expressions describe the same point.' },
                { stepNumber: 6, description: 'Expand and equate.', workingLatex: 's\\mathbf{q} = \\left(1-\\tfrac{3}{4}t\\right)\\mathbf{p}+\\tfrac{1}{4}t\\,\\mathbf{q}', explanation: 'Distribute the \\(t\\) across the bracket and collect coefficients.' },
                { stepNumber: 7, description: 'Compare coefficients of \\( \\mathbf{p} \\) and \\( \\mathbf{q}.\\)', workingLatex: '\\mathbf{p}:\\ 0 = 1-\\tfrac{3}{4}t.\\quad \\mathbf{q}:\\ s = \\tfrac{1}{4}t', explanation: 'The left-hand side has no \\(\\mathbf{p}\\) term, so the right-hand \\(\\mathbf{p}\\) coefficient must vanish.' },
                { stepNumber: 8, description: 'Solve for \\(t,\\) then \\(s.\\)', workingLatex: 't = \\tfrac{4}{3},\\quad s = \\tfrac{1}{4}\\cdot\\tfrac{4}{3} = \\tfrac{1}{3}', explanation: 'F lies inside segment AD (since \\(0<s<1\\)) with \\(AF:FD = \\tfrac{1}{3} : \\tfrac{2}{3} = 1:2.\\) On line BE, F sits beyond E (since \\(t>1\\)), with \\(BE:EF = 1 : \\tfrac{1}{3} = 3:1.\\)' }
            ],
            finalAnswer: 'a) \\( \\overrightarrow{AO}=\\tfrac{1}{2}(\\mathbf{p}+\\mathbf{q}),\\ \\overrightarrow{AE}=\\tfrac{1}{4}(\\mathbf{p}+\\mathbf{q}),\\ \\overrightarrow{BE}=-\\tfrac{3}{4}\\mathbf{p}+\\tfrac{1}{4}\\mathbf{q}.\\)  b) \\( s = \\tfrac{1}{3},\\ t = \\tfrac{4}{3}.\\)'
        }
    },
    {
        id: 'v1-037',
        topicRef: 'v1',
        topicTitle: 'Vectors 37',
        difficulty: 'Standard',
        questionText: 'In triangle \\(ABC,\\) \\(M\\) is the midpoint of \\(AB\\) and \\(N\\) is the midpoint of \\(AC.\\) \\( \\overrightarrow{AB} = \\mathbf{b} \\) and \\( \\overrightarrow{AC} = \\mathbf{c}.\\) Show that \\( \\overrightarrow{MN} = \\tfrac{1}{2}\\overrightarrow{BC}.\\)',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'midpoint', 'parallel proof', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Reach N from M via the route M → A → N.', workingLatex: '\\overrightarrow{MN} = \\overrightarrow{MA}+\\overrightarrow{AN}', explanation: 'A is the natural intermediate point because both midpoint segments involve A. Reverse AM to get MA, then add AN.',
                    diagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{b}', labelAt: [2.5, -0.5] }, { from: [0, 0], to: [2, 4], color: '#dc2626', arrow: true, label: '\\mathbf{c}', labelAt: [0.5, 2.2] }, { from: [5, 0], to: [2, 4], color: '#888' }, { from: [2.5, 0], to: [1, 2], color: '#047857', dashed: true, arrow: true }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 3 }, { at: [5, 0], label: 'B', labelAnchor: 'se', r: 3 }, { at: [2, 4], label: 'C', labelAnchor: 'n', r: 3 }, { at: [2.5, 0], label: 'M', labelAnchor: 's', r: 3 }, { at: [1, 2], label: 'N', labelAnchor: 'w', r: 3 }] } },
                { stepNumber: 2, description: 'Substitute MA = −½b and AN = ½c.', workingLatex: '\\overrightarrow{MN} = -\\tfrac{1}{2}\\mathbf{b}+\\tfrac{1}{2}\\mathbf{c} = \\tfrac{1}{2}(-\\mathbf{b}+\\mathbf{c})', explanation: 'M is the midpoint of AB so AM = ½b and MA = −½b. N is the midpoint of AC so AN = ½c.' },
                { stepNumber: 3, description: 'Compute \\( \\overrightarrow{BC} \\) and compare.', workingLatex: '\\overrightarrow{BC} = -\\mathbf{b}+\\mathbf{c} \\;\\Longrightarrow\\; \\overrightarrow{MN} = \\tfrac{1}{2}\\overrightarrow{BC}', explanation: 'MN is exactly half of BC, with the same direction — the classical midpoint theorem. ∎' }
            ],
            finalAnswer: '\\( \\overrightarrow{MN} = \\tfrac{1}{2}\\overrightarrow{BC} \\)'
        }
    },
    {
        id: 'v1-038',
        topicRef: 'v1',
        topicTitle: 'Vectors 38',
        difficulty: 'Standard',
        questionText: 'Given \\( \\overrightarrow{OA} = 3\\mathbf{i} - \\mathbf{j} \\) and \\( \\overrightarrow{OB} = -\\mathbf{i} + 7\\mathbf{j},\\) find the position vector of the point that divides \\(AB\\) in the ratio \\(1:3.\\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'section formula', 'ratio'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Compute \\( \\overrightarrow{AB} \\) as a difference of position vectors.', workingLatex: '\\overrightarrow{AB} = \\overrightarrow{OB}-\\overrightarrow{OA} = (-\\mathbf{i}+7\\mathbf{j})-(3\\mathbf{i}-\\mathbf{j}) = -4\\mathbf{i}+8\\mathbf{j}', explanation: 'Subtract componentwise: \\(-1-3=-4\\) and \\(7-(-1)=8.\\)',
                    diagram: { xMin: -3, xMax: 5, yMin: -2, yMax: 9, xTicks: [-1, 2, 3], yTicks: [-1, 1, 7], lines: [{ from: [3, -1], to: [-1, 7], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{AB}', labelAt: [0.5, 4] }], points: [{ at: [3, -1], label: 'A(3,-1)', labelAnchor: 'se', r: 4 }, { at: [-1, 7], label: 'B(-1,7)', labelAnchor: 'nw', r: 4 }, { at: [2, 1], label: 'C(2,1)', labelAnchor: 'sw', r: 4 }] } },
                { stepNumber: 2, description: 'Use the ratio AC:CB = 1:3 to write \\( \\overrightarrow{AC}=\\tfrac{1}{4}\\overrightarrow{AB}.\\)', workingLatex: '\\overrightarrow{AC} = \\tfrac{1}{4}\\overrightarrow{AB} = \\tfrac{1}{4}(-4\\mathbf{i}+8\\mathbf{j}) = -\\mathbf{i}+2\\mathbf{j}', explanation: 'AC:CB = 1:3 means AC is one part out of four — quarter of the full AB.' },
                { stepNumber: 3, description: 'Compute the position vector of C.', workingLatex: '\\overrightarrow{OC} = \\overrightarrow{OA}+\\overrightarrow{AC} = (3\\mathbf{i}-\\mathbf{j})+(-\\mathbf{i}+2\\mathbf{j}) = 2\\mathbf{i}+\\mathbf{j}', explanation: 'Walk OA, then AC to reach C. Combine like terms in \\( \\mathbf{i} \\) and \\( \\mathbf{j}.\\) So C = (2, 1).' }
            ],
            finalAnswer: '\\( 2\\mathbf{i}+\\mathbf{j} \\)'
        }
    },
    {
        id: 'v1-039',
        topicRef: 'v1',
        topicTitle: 'Vectors 39',
        difficulty: 'Foundation',
        questionText: 'Write \\( 4\\mathbf{i} - 3\\mathbf{j} \\) as a column vector, and \\( \\begin{pmatrix}7\\\\2\\end{pmatrix} \\) in \\( \\mathbf{i}+\\mathbf{j} \\) form.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'notation', 'conversion'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Convert i+j form to column form.', workingLatex: '4\\mathbf{i}-3\\mathbf{j} = \\begin{pmatrix}4\\\\-3\\end{pmatrix}', explanation: 'Take the coefficient of \\( \\mathbf{i} \\) as the top entry, coefficient of \\( \\mathbf{j} \\) as the bottom entry.' },
                { stepNumber: 2, description: 'Convert column form to i+j form.', workingLatex: '\\begin{pmatrix}7\\\\2\\end{pmatrix} = 7\\mathbf{i}+2\\mathbf{j}', explanation: 'Read the top entry as the \\( \\mathbf{i} \\)-coefficient and the bottom as the \\( \\mathbf{j} \\)-coefficient.' }
            ],
            finalAnswer: '\\( \\begin{pmatrix}4\\\\-3\\end{pmatrix} \\) and \\( 7\\mathbf{i}+2\\mathbf{j} \\)'
        }
    },
    {
        id: 'v1-040',
        topicRef: 'v1',
        topicTitle: 'Vectors 40',
        difficulty: 'Standard',
        questionText: 'In triangle \\(OAB,\\) \\( \\overrightarrow{OA} = \\mathbf{a},\\) \\( \\overrightarrow{OB} = \\mathbf{b}.\\) The point \\(P\\) divides \\(OA\\) in the ratio \\(2:1\\) and \\(Q\\) divides \\(OB\\) in the ratio \\(2:1.\\) Show that \\(PQ\\) is parallel to \\(AB.\\)',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'parallel proof', 'ratio', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Locate P using \\(OP:PA = 2:1.\\)', workingLatex: '\\overrightarrow{OP} = \\tfrac{2}{3}\\overrightarrow{OA} = \\tfrac{2}{3}\\mathbf{a}', explanation: 'The ratio splits OA into 3 parts with P two parts from O.',
                    diagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2.5, -0.5] }, { from: [0, 0], to: [2, 4], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [0.5, 2.2] }, { from: [5, 0], to: [2, 4], color: '#888' }, { from: [3.33, 0], to: [1.33, 2.67], color: '#047857', dashed: true, arrow: true }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [5, 0], label: 'A', labelAnchor: 'se', r: 3 }, { at: [2, 4], label: 'B', labelAnchor: 'n', r: 3 }, { at: [3.33, 0], label: 'P', labelAnchor: 's', r: 3 }, { at: [1.33, 2.67], label: 'Q', labelAnchor: 'w', r: 3 }] } },
                { stepNumber: 2, description: 'Locate Q similarly.', workingLatex: '\\overrightarrow{OQ} = \\tfrac{2}{3}\\mathbf{b}', explanation: 'Same logic on OB.' },
                { stepNumber: 3, description: 'Compute \\( \\overrightarrow{PQ}.\\)', workingLatex: '\\overrightarrow{PQ} = \\overrightarrow{OQ}-\\overrightarrow{OP} = \\tfrac{2}{3}\\mathbf{b}-\\tfrac{2}{3}\\mathbf{a} = \\tfrac{2}{3}(\\mathbf{b}-\\mathbf{a})', explanation: 'Factor the common \\( \\tfrac{2}{3}.\\)' },
                { stepNumber: 4, description: 'Compare with \\( \\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}.\\)', workingLatex: '\\overrightarrow{PQ} = \\tfrac{2}{3}\\,\\overrightarrow{AB}', explanation: 'PQ is a scalar multiple of AB, so PQ ∥ AB. ∎' }
            ],
            finalAnswer: '\\( \\overrightarrow{PQ} = \\tfrac{2}{3}\\overrightarrow{AB},\\) so PQ is parallel to AB.'
        }
    },
    {
        id: 'v1-041',
        topicRef: 'v1',
        topicTitle: 'Vectors 41',
        difficulty: 'Standard',
        questionText: 'In the trapezium \\(ABCD,\\) \\(AB\\) is parallel to \\(DC\\) and \\(DC = 2AB.\\) \\( \\overrightarrow{AB} = \\mathbf{p} \\) and \\( \\overrightarrow{AD} = \\mathbf{q}.\\) Find:\n\na) \\( \\overrightarrow{DC} \\)\n\nb) \\( \\overrightarrow{BC} \\)\n\nc) \\( \\overrightarrow{AC} \\)',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'trapezium', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'a) Identify the relationship between \\( \\overrightarrow{DC} \\) and \\( \\overrightarrow{AB}.\\)', workingLatex: 'DC \\parallel AB \\text{ and } DC = 2AB', explanation: 'A trapezium has exactly one pair of parallel sides — here AB and DC. Because they are parallel and the diagram shows them oriented the same way (both running left-to-right from the A/D side to the B/C side), \\( \\overrightarrow{DC} \\) points in the same sense as \\( \\overrightarrow{AB},\\) not the opposite sense.',
                    diagram: { xMin: -1, xMax: 8, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [3, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{p}', labelAt: [1.5, -0.5] }, { from: [0, 0], to: [1, 3], color: '#dc2626', arrow: true, label: '\\mathbf{q}', labelAt: [-0.5, 1.5] }, { from: [1, 3], to: [7, 3], color: '#888' }, { from: [3, 0], to: [7, 3], color: '#888', dashed: true }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 3 }, { at: [3, 0], label: 'B', labelAnchor: 'se', r: 3 }, { at: [7, 3], label: 'C', labelAnchor: 'ne', r: 3 }, { at: [1, 3], label: 'D', labelAnchor: 'nw', r: 3 }] } },
                { stepNumber: 2, description: 'Write \\( \\overrightarrow{DC} \\) as a scalar multiple of \\( \\overrightarrow{AB}.\\)', workingLatex: '\\overrightarrow{DC} = 2\\overrightarrow{AB} = 2\\mathbf{p}', explanation: 'Same direction and twice the length translates directly to scalar 2 on the vector. If the diagram had shown DC running the opposite way it would have been \\(-2\\mathbf{p}\\) — always cross-check the arrow directions before assigning the sign.' },
                { stepNumber: 3, description: 'b) Set up \\( \\overrightarrow{BC} \\) as a sum of known legs.', workingLatex: '\\overrightarrow{BC} = \\overrightarrow{BA}+\\overrightarrow{AD}+\\overrightarrow{DC}', explanation: 'There is no direct vector given from B to C, so we travel via known points. The chain B → A → D → C uses three legs whose vectors are either given or just derived. Reversing AB gives \\( \\overrightarrow{BA} = -\\mathbf{p}.\\)' },
                { stepNumber: 4, description: 'Substitute each leg.', workingLatex: '\\overrightarrow{BC} = -\\mathbf{p}+\\mathbf{q}+2\\mathbf{p}', explanation: '\\( \\overrightarrow{BA} = -\\mathbf{p},\\) \\( \\overrightarrow{AD} = \\mathbf{q},\\) and \\( \\overrightarrow{DC} = 2\\mathbf{p} \\) from part (a). Watch the minus sign on the reversed leg — the most common slip on this style of question is to drop it.' },
                { stepNumber: 5, description: 'Collect like terms.', workingLatex: '\\overrightarrow{BC} = (-1+2)\\mathbf{p}+\\mathbf{q} = \\mathbf{p}+\\mathbf{q}', explanation: 'Add the coefficients of \\( \\mathbf{p}:\\) \\(-1+2=1.\\) The \\( \\mathbf{q} \\) term stands alone with coefficient 1.' },
                { stepNumber: 6, description: 'c) Choose the shorter route A → D → C for \\( \\overrightarrow{AC}.\\)', workingLatex: '\\overrightarrow{AC} = \\overrightarrow{AD}+\\overrightarrow{DC}', explanation: 'Two legs are enough because A and D are joined directly, and we already have \\( \\overrightarrow{DC}.\\) Going via B would also work (\\( \\mathbf{p}+(\\mathbf{p}+\\mathbf{q}) \\)) but uses three terms instead of two.' },
                { stepNumber: 7, description: 'Substitute and simplify.', workingLatex: '\\overrightarrow{AC} = \\mathbf{q}+2\\mathbf{p}', explanation: 'No like terms to collect — leave the answer with \\( \\mathbf{p} \\) and \\( \\mathbf{q} \\) terms in either order; \\( 2\\mathbf{p}+\\mathbf{q} \\) is equally acceptable.' }
            ],
            finalAnswer: 'a) \\( 2\\mathbf{p} \\) \\quad b) \\( \\mathbf{p}+\\mathbf{q} \\) \\quad c) \\( \\mathbf{q}+2\\mathbf{p} \\)'
        }
    },
    {
        id: 'v1-042',
        topicRef: 'v1',
        topicTitle: 'Vectors 42',
        difficulty: 'Standard',
        questionText: 'Show that the points \\(A,\\) \\(B\\) and \\(C\\) with position vectors \\( \\mathbf{i}+2\\mathbf{j},\\) \\( 3\\mathbf{i}+6\\mathbf{j} \\) and \\( 5\\mathbf{i}+10\\mathbf{j} \\) are collinear.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'collinear', 'proof'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'State the strategy for proving collinearity.', workingLatex: '\\text{Show } \\overrightarrow{AC} = k\\,\\overrightarrow{AB} \\text{ for some scalar } k', explanation: 'Three points are collinear iff one displacement vector between two of them is a scalar multiple of another, AND the displacements share a common point. We will use A as the common point, so the two displacements to compare are \\( \\overrightarrow{AB} \\) and \\( \\overrightarrow{AC}.\\)',
                    diagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 12, xTicks: [1, 3, 5], yTicks: [2, 6, 10], lines: [{ from: [0, 0], to: [1, 2], color: '#888', dashed: true }, { from: [1, 2], to: [3, 6], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{AB}', labelAt: [1.4, 4.5] }, { from: [3, 6], to: [5, 10], color: '#dc2626', arrow: true, label: '\\overrightarrow{BC}', labelAt: [3.4, 8.4] }], points: [{ at: [1, 2], label: 'A(1,2)', labelAnchor: 'se', r: 4 }, { at: [3, 6], label: 'B(3,6)', labelAnchor: 'se', r: 4 }, { at: [5, 10], label: 'C(5,10)', labelAnchor: 'sw', r: 4 }, { at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }] }
                },
                { stepNumber: 2, description: 'Compute \\( \\overrightarrow{AB} \\) by subtracting position vectors.', workingLatex: '\\overrightarrow{AB} = \\overrightarrow{OB}-\\overrightarrow{OA} = (3-1)\\mathbf{i}+(6-2)\\mathbf{j} = 2\\mathbf{i}+4\\mathbf{j}', explanation: 'The displacement from A to B is found by subtracting their position vectors componentwise. Order matters — \\( \\overrightarrow{OB}-\\overrightarrow{OA},\\) not the other way round.' },
                { stepNumber: 3, description: 'Compute \\( \\overrightarrow{AC} \\) similarly.', workingLatex: '\\overrightarrow{AC} = \\overrightarrow{OC}-\\overrightarrow{OA} = (5-1)\\mathbf{i}+(10-2)\\mathbf{j} = 4\\mathbf{i}+8\\mathbf{j}', explanation: 'Same subtraction, this time from A to C. We use A as the anchor in both displacements so the parallel test below will also confirm a shared point.' },
                { stepNumber: 4, description: 'Test whether \\( \\overrightarrow{AC} \\) is a scalar multiple of \\( \\overrightarrow{AB}.\\)', workingLatex: '\\overrightarrow{AC} = 4\\mathbf{i}+8\\mathbf{j} = 2(2\\mathbf{i}+4\\mathbf{j}) = 2\\,\\overrightarrow{AB}', explanation: 'Both components scale by the same factor 2, so \\( \\overrightarrow{AC} \\) is parallel to \\( \\overrightarrow{AB}.\\) If the two component-ratios had disagreed (e.g. one was 2 and the other 3), the vectors would not be parallel and the points would not be collinear.' },
                { stepNumber: 5, description: 'Conclude.', workingLatex: '\\overrightarrow{AC} = 2\\,\\overrightarrow{AB} \\text{ and they share point } A \\;\\Longrightarrow\\; A,\\,B,\\,C \\text{ collinear} \\;\\;\\blacksquare', explanation: 'The shared point is essential: two parallel displacements at different locations would describe parallel lines, not a single straight line. Because both displacements start at A, they lie on the same line through A.' }
            ],
            finalAnswer: '\\( \\overrightarrow{AC} = 2\\overrightarrow{AB},\\) so A, B, C are collinear.'
        }
    },
    {
        id: 'v1-043',
        topicRef: 'v1',
        topicTitle: 'Vectors 43',
        difficulty: 'Foundation',
        questionText: 'Find the vector \\( \\overrightarrow{AB} \\) given \\( A = (3, 7) \\) and \\( B = (-1, 2).\\) Write your answer as a column vector.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'column vectors', 'coordinates'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Apply \\( \\overrightarrow{AB} = \\overrightarrow{OB}-\\overrightarrow{OA}.\\)', workingLatex: '\\overrightarrow{AB} = \\overrightarrow{OB}-\\overrightarrow{OA} = \\begin{pmatrix}-1\\\\2\\end{pmatrix}-\\begin{pmatrix}3\\\\7\\end{pmatrix}', explanation: 'The displacement from A to B is the position vector of B minus the position vector of A — "endpoint minus start". A common slip is to do it the other way; the result would point from B back to A.',
                    diagram: { xMin: -3, xMax: 6, yMin: 0, yMax: 9, xTicks: [-1, 3], yTicks: [2, 7], lines: [{ from: [3, 7], to: [-1, 2], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{AB}', labelAt: [0.5, 5] }], points: [{ at: [3, 7], label: 'A(3,7)', labelAnchor: 'ne', r: 4 }, { at: [-1, 2], label: 'B(-1,2)', labelAnchor: 'sw', r: 4 }] } },
                { stepNumber: 2, description: 'Subtract componentwise.', workingLatex: '\\overrightarrow{AB} = \\begin{pmatrix}-1-3\\\\2-7\\end{pmatrix} = \\begin{pmatrix}-4\\\\-5\\end{pmatrix}', explanation: 'Subtract the x-components and the y-components separately. The negative entries make sense: B is below and to the left of A, so the displacement points down-and-left.' }
            ],
            finalAnswer: '\\( \\begin{pmatrix}-4\\\\-5\\end{pmatrix} \\)'
        }
    },
    {
        id: 'v1-044',
        topicRef: 'v1',
        topicTitle: 'Vectors 44',
        difficulty: 'Standard',
        questionText: 'In triangle \\(OAB,\\) \\( \\overrightarrow{OA} = \\mathbf{a} \\) and \\( \\overrightarrow{OB} = \\mathbf{b}.\\) \\(P\\) is the point on \\(OA\\) such that \\(OP:PA = 3:1.\\) \\(Q\\) is the point on \\(AB\\) such that \\(AQ:QB = 1:2.\\) Find \\( \\overrightarrow{PQ} \\) in terms of \\( \\mathbf{a} \\) and \\( \\mathbf{b}.\\)',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'ratio', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Locate P on OA using the ratio \\( OP:PA = 3:1.\\)', workingLatex: '\\overrightarrow{OP} = \\tfrac{3}{4}\\overrightarrow{OA} = \\tfrac{3}{4}\\mathbf{a}', explanation: 'The ratio 3:1 splits OA into 4 equal parts with P three parts from O. So OP is three-quarters of OA.',
                    diagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2.5, -0.5] }, { from: [0, 0], to: [2, 4], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [0.5, 2.2] }, { from: [5, 0], to: [2, 4], color: '#888' }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [5, 0], label: 'A', labelAnchor: 'se', r: 3 }, { at: [2, 4], label: 'B', labelAnchor: 'n', r: 3 }, { at: [3.75, 0], label: 'P', labelAnchor: 's', r: 3 }, { at: [4, 1.33], label: 'Q', labelAnchor: 'e', r: 3 }] } },
                { stepNumber: 2, description: 'Set up \\( \\overrightarrow{OQ} \\) using the route O → A → Q.', workingLatex: '\\overrightarrow{OQ} = \\overrightarrow{OA}+\\overrightarrow{AQ}', explanation: 'Q sits on segment AB and the ratio is given from A, so it is natural to travel from O to A first, then move a fraction of AB to reach Q.' },
                { stepNumber: 3, description: 'Express \\( \\overrightarrow{AQ} \\) as a fraction of \\( \\overrightarrow{AB}.\\)', workingLatex: '\\overrightarrow{AQ} = \\tfrac{1}{3}\\overrightarrow{AB} = \\tfrac{1}{3}(\\mathbf{b}-\\mathbf{a})', explanation: 'The ratio \\(AQ:QB = 1:2\\) splits AB into 3 parts with Q one part from A, giving AQ = (1/3)AB. The displacement AB = OB − OA = b − a.' },
                { stepNumber: 4, description: 'Substitute and simplify \\( \\overrightarrow{OQ}.\\)', workingLatex: '\\overrightarrow{OQ} = \\mathbf{a}+\\tfrac{1}{3}(\\mathbf{b}-\\mathbf{a}) = \\mathbf{a}-\\tfrac{1}{3}\\mathbf{a}+\\tfrac{1}{3}\\mathbf{b} = \\tfrac{2}{3}\\mathbf{a}+\\tfrac{1}{3}\\mathbf{b}', explanation: 'Expand the bracket and collect the \\( \\mathbf{a} \\) coefficients: \\(1-\\tfrac{1}{3}=\\tfrac{2}{3}.\\)' },
                { stepNumber: 5, description: 'Compute \\( \\overrightarrow{PQ} \\) by subtracting position vectors.', workingLatex: '\\overrightarrow{PQ} = \\overrightarrow{OQ}-\\overrightarrow{OP} = \\left(\\tfrac{2}{3}\\mathbf{a}+\\tfrac{1}{3}\\mathbf{b}\\right)-\\tfrac{3}{4}\\mathbf{a}', explanation: 'The displacement from P to Q is "endpoint Q minus start P" — just like with coordinate points.' },
                { stepNumber: 6, description: 'Combine the \\( \\mathbf{a} \\) coefficients over a common denominator.', workingLatex: '\\overrightarrow{PQ} = \\left(\\tfrac{2}{3}-\\tfrac{3}{4}\\right)\\mathbf{a}+\\tfrac{1}{3}\\mathbf{b} = \\left(\\tfrac{8}{12}-\\tfrac{9}{12}\\right)\\mathbf{a}+\\tfrac{1}{3}\\mathbf{b} = -\\tfrac{1}{12}\\mathbf{a}+\\tfrac{1}{3}\\mathbf{b}', explanation: 'LCD of 3 and 4 is 12. The negative coefficient on \\( \\mathbf{a} \\) is correct — Q is slightly closer to O along the \\( \\mathbf{a} \\) direction than P is.' }
            ],
            finalAnswer: '\\( \\overrightarrow{PQ} = -\\tfrac{1}{12}\\mathbf{a}+\\tfrac{1}{3}\\mathbf{b} \\)'
        }
    },
    {
        id: 'v1-045',
        topicRef: 'v1',
        topicTitle: 'Vectors 45',
        difficulty: 'Foundation',
        questionText: 'Simplify:\n\na) \\( \\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CD} \\)\n\nb) \\( \\overrightarrow{PQ} + \\overrightarrow{QR} - \\overrightarrow{SR} \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'simplify', 'triangle law'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'a) Apply the triangle/chain law to the first two terms.', workingLatex: '\\overrightarrow{AB}+\\overrightarrow{BC} = \\overrightarrow{AC}', explanation: 'When two vectors are "nose-to-tail" — the second starts where the first ends — they combine into a single vector from the very start to the very end. Here both meet at B.' },
                { stepNumber: 2, description: 'Apply the chain law again with \\( \\overrightarrow{CD}.\\)', workingLatex: '\\overrightarrow{AC}+\\overrightarrow{CD} = \\overrightarrow{AD}', explanation: 'AC ends at C and CD starts at C, so we can chain them again. The chain telescopes — any string of nose-to-tail displacements collapses to start-point → end-point.' },
                { stepNumber: 3, description: 'b) Rewrite the subtracted vector by reversing its direction.', workingLatex: '-\\overrightarrow{SR} = \\overrightarrow{RS}', explanation: 'Negating a vector flips its sense: from S → R becomes from R → S. This is the standard trick when a chain has a "wrong-way" leg — turn the minus sign into a reversed arrow so the chain becomes nose-to-tail.' },
                { stepNumber: 4, description: 'Substitute and chain.', workingLatex: '\\overrightarrow{PQ}+\\overrightarrow{QR}-\\overrightarrow{SR} = \\overrightarrow{PQ}+\\overrightarrow{QR}+\\overrightarrow{RS}', explanation: 'Now all three legs are nose-to-tail (P → Q → R → S), so the chain law applies directly.' },
                { stepNumber: 5, description: 'Collapse the chain.', workingLatex: '\\overrightarrow{PQ}+\\overrightarrow{QR}+\\overrightarrow{RS} = \\overrightarrow{PR}+\\overrightarrow{RS} = \\overrightarrow{PS}', explanation: 'PQ + QR collapses to PR, then PR + RS collapses to PS.' }
            ],
            finalAnswer: 'a) \\( \\overrightarrow{AD} \\) \\quad b) \\( \\overrightarrow{PS} \\)'
        }
    },
    {
        id: 'v1-046',
        topicRef: 'v1',
        topicTitle: 'Vectors 46',
        difficulty: 'Standard',
        questionText: 'In the hexagon \\(ABCDEF,\\) \\( \\overrightarrow{AB} = \\mathbf{p} \\) and \\( \\overrightarrow{AF} = \\mathbf{q}.\\) The hexagon is regular. Express \\( \\overrightarrow{AD} \\) in terms of \\( \\mathbf{p} \\) and \\( \\mathbf{q}.\\)',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'hexagon', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Recognise the structure of a regular hexagon.', workingLatex: '\\text{Regular hexagon } ABCDEF \\text{ with centre } O \\text{ splits into 6 equilateral triangles}', explanation: 'A regular hexagon ABCDEF has a centre O at equal distance from every vertex, with the six triangles OAB, OBC, OCD, ODE, OEF, OFA all equilateral and congruent. A is diametrically opposite D, so AD passes through O and \\( \\overrightarrow{AD} = 2\\overrightarrow{AO}.\\)',
                    diagram: { xMin: -2, xMax: 4, yMin: -1, yMax: 4.2, hideAxes: true, lines: [{ from: [0, 0], to: [2, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{p}', labelAt: [1, -0.4] }, { from: [0, 0], to: [-1, 1.732], color: '#dc2626', arrow: true, label: '\\mathbf{q}', labelAt: [-0.9, 0.7] }, { from: [2, 0], to: [3, 1.732], color: '#888' }, { from: [3, 1.732], to: [2, 3.464], color: '#888' }, { from: [2, 3.464], to: [0, 3.464], color: '#888' }, { from: [0, 3.464], to: [-1, 1.732], color: '#888' }, { from: [0, 0], to: [2, 3.464], color: '#047857', dashed: true, arrow: true, label: '\\overrightarrow{AD}', labelAt: [0.6, 2.0] }, { from: [0, 0], to: [1, 1.732], color: '#a16207', dashed: true, label: 'AO', labelAt: [0.7, 0.6] }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 3 }, { at: [2, 0], label: 'B', labelAnchor: 'se', r: 3 }, { at: [3, 1.732], label: 'C', labelAnchor: 'e', r: 3 }, { at: [2, 3.464], label: 'D', labelAnchor: 'ne', r: 3 }, { at: [0, 3.464], label: 'E', labelAnchor: 'nw', r: 3 }, { at: [-1, 1.732], label: 'F', labelAnchor: 'w', r: 3 }, { at: [1, 1.732], label: 'O', labelAnchor: 's', r: 3 }] } },
                { stepNumber: 2, description: 'Express \\( \\overrightarrow{AO} \\) in terms of \\( \\mathbf{p} \\) and \\( \\mathbf{q}.\\)', workingLatex: '\\overrightarrow{AO} = \\overrightarrow{AB}+\\overrightarrow{AF} = \\mathbf{p}+\\mathbf{q}', explanation: 'In the equilateral triangle OAB sitting next to triangle OAF, the parallelogram law gives AO as the diagonal of the rhombus ABOF (with sides p and q). Equivalently, \\( \\overrightarrow{AO}=\\overrightarrow{AB}+\\overrightarrow{BO},\\) and \\( \\overrightarrow{BO}=\\overrightarrow{AF}=\\mathbf{q} \\) by symmetry.' },
                { stepNumber: 3, description: 'Double \\( \\overrightarrow{AO} \\) to reach D.', workingLatex: '\\overrightarrow{AD} = 2\\overrightarrow{AO} = 2(\\mathbf{p}+\\mathbf{q})', explanation: 'D is the vertex diametrically opposite A, with O exactly halfway between them, so AD is twice AO.' },
                { stepNumber: 4, description: 'Expand the bracket.', workingLatex: '\\overrightarrow{AD} = 2\\mathbf{p}+2\\mathbf{q}', explanation: 'Either form (factored or expanded) is acceptable as a final answer.' }
            ],
            finalAnswer: '\\( \\overrightarrow{AD} = 2\\mathbf{p}+2\\mathbf{q} \\)'
        }
    },
    {
        id: 'v1-047',
        topicRef: 'v1',
        topicTitle: 'Vectors 47',
        difficulty: 'Standard',
        questionText: 'Given \\( \\overrightarrow{OA} = \\begin{pmatrix}4\\\\1\\end{pmatrix} \\) and \\( \\overrightarrow{OB} = \\begin{pmatrix}2\\\\5\\end{pmatrix},\\) find the position vector of the midpoint of \\(AB.\\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'midpoint', 'column vectors'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'State the midpoint formula for position vectors.', workingLatex: '\\overrightarrow{OM} = \\tfrac{1}{2}\\left(\\overrightarrow{OA}+\\overrightarrow{OB}\\right)', explanation: 'The midpoint of segment AB has position vector equal to the average of the two endpoints\' position vectors. This is the vector analogue of the coordinate midpoint formula \\( \\left(\\tfrac{x_A+x_B}{2},\\tfrac{y_A+y_B}{2}\\right).\\)' },
                { stepNumber: 2, description: 'Add the column vectors.', workingLatex: '\\overrightarrow{OA}+\\overrightarrow{OB} = \\begin{pmatrix}4\\\\1\\end{pmatrix}+\\begin{pmatrix}2\\\\5\\end{pmatrix} = \\begin{pmatrix}6\\\\6\\end{pmatrix}', explanation: 'Add componentwise: \\(4+2=6\\) and \\(1+5=6.\\)' },
                { stepNumber: 3, description: 'Halve to get the midpoint.', workingLatex: '\\overrightarrow{OM} = \\tfrac{1}{2}\\begin{pmatrix}6\\\\6\\end{pmatrix} = \\begin{pmatrix}3\\\\3\\end{pmatrix}', explanation: 'Multiplying a column vector by a scalar multiplies every entry by that scalar.' }
            ],
            finalAnswer: '\\( \\begin{pmatrix}3\\\\3\\end{pmatrix} \\)'
        }
    },
    {
        id: 'v1-048',
        topicRef: 'v1',
        topicTitle: 'Vectors 48',
        difficulty: 'Standard',
        questionText: '\\( \\overrightarrow{OA} = 2\\mathbf{a},\\) \\( \\overrightarrow{OB} = 3\\mathbf{b}.\\) \\(C\\) lies on \\(AB\\) such that \\(AC:CB = 2:3.\\) Find \\( \\overrightarrow{OC} \\) in terms of \\( \\mathbf{a} \\) and \\( \\mathbf{b}.\\)',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'ratio', 'section formula', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Convert the ratio into a fraction of \\( \\overrightarrow{AB}.\\)', workingLatex: 'AC:CB = 2:3 \\;\\Longrightarrow\\; \\overrightarrow{AC} = \\tfrac{2}{5}\\overrightarrow{AB}', explanation: 'The ratio 2:3 splits AB into 5 equal parts with C two parts from A, so AC is two-fifths of the total displacement AB.' },
                { stepNumber: 2, description: 'Set up \\( \\overrightarrow{OC} \\) via the route O → A → C.', workingLatex: '\\overrightarrow{OC} = \\overrightarrow{OA}+\\overrightarrow{AC} = \\overrightarrow{OA}+\\tfrac{2}{5}\\overrightarrow{AB}', explanation: 'Travel from O to A (a known leg) then move 2/5 of the way along AB to reach C.' },
                { stepNumber: 3, description: 'Compute \\( \\overrightarrow{AB} \\) by subtracting position vectors.', workingLatex: '\\overrightarrow{AB} = \\overrightarrow{OB}-\\overrightarrow{OA} = 3\\mathbf{b}-2\\mathbf{a}', explanation: 'Endpoint minus start, as always for displacements between two known position vectors.' },
                { stepNumber: 4, description: 'Substitute into the section-formula expression.', workingLatex: '\\overrightarrow{OC} = 2\\mathbf{a}+\\tfrac{2}{5}(3\\mathbf{b}-2\\mathbf{a})', explanation: 'Replace \\( \\overrightarrow{OA} \\) with \\(2\\mathbf{a}\\) and \\( \\overrightarrow{AB} \\) with \\(3\\mathbf{b}-2\\mathbf{a}.\\)' },
                { stepNumber: 5, description: 'Expand the bracket.', workingLatex: '\\overrightarrow{OC} = 2\\mathbf{a}+\\tfrac{6}{5}\\mathbf{b}-\\tfrac{4}{5}\\mathbf{a}', explanation: '\\( \\tfrac{2}{5}\\times 3\\mathbf{b}=\\tfrac{6}{5}\\mathbf{b} \\) and \\( \\tfrac{2}{5}\\times(-2\\mathbf{a})=-\\tfrac{4}{5}\\mathbf{a}.\\)' },
                { stepNumber: 6, description: 'Collect the \\( \\mathbf{a} \\) coefficients.', workingLatex: '\\overrightarrow{OC} = \\left(2-\\tfrac{4}{5}\\right)\\mathbf{a}+\\tfrac{6}{5}\\mathbf{b} = \\tfrac{6}{5}\\mathbf{a}+\\tfrac{6}{5}\\mathbf{b}', explanation: 'Write 2 as \\(\\tfrac{10}{5}\\) so \\(\\tfrac{10}{5}-\\tfrac{4}{5}=\\tfrac{6}{5}.\\)' }
            ],
            finalAnswer: '\\( \\overrightarrow{OC} = \\tfrac{6}{5}\\mathbf{a}+\\tfrac{6}{5}\\mathbf{b} \\)'
        }
    },
    {
        id: 'v1-049',
        topicRef: 'v1',
        topicTitle: 'Vectors 49',
        difficulty: 'Challenge',
        questionText: 'Given \\( \\mathbf{a} = \\begin{pmatrix}5\\\\-3\\end{pmatrix} \\) and \\( \\mathbf{b} = \\begin{pmatrix}-2\\\\1\\end{pmatrix},\\) find scalars \\( \\lambda \\) and \\( \\mu \\) such that\n\\[\n\\lambda\\mathbf{a}+\\mu\\mathbf{b} = \\begin{pmatrix}4\\\\-3\\end{pmatrix}.\n\\]\nHence find the magnitude \\( |\\lambda\\mathbf{a}+\\mu\\mathbf{b}| \\) in surd form.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'column vectors', 'simultaneous equations', 'magnitude', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Write \\( \\lambda\\mathbf{a}+\\mu\\mathbf{b} \\) as a column vector.', workingLatex: '\\lambda\\begin{pmatrix}5\\\\-3\\end{pmatrix}+\\mu\\begin{pmatrix}-2\\\\1\\end{pmatrix} = \\begin{pmatrix}5\\lambda-2\\mu\\\\-3\\lambda+\\mu\\end{pmatrix}', explanation: 'Scalar multiples scale each entry; sums add entry-by-entry. This gives a single column vector with each component a linear expression in \\( \\lambda \\) and \\( \\mu.\\)' },
                { stepNumber: 2, description: 'Equate to the target column to obtain two simultaneous equations.', workingLatex: '\\begin{aligned} 5\\lambda-2\\mu &= 4 \\quad\\text{(i)}\\\\ -3\\lambda+\\mu &= -3 \\quad\\text{(ii)} \\end{aligned}', explanation: 'Two column vectors are equal iff their components agree, giving one equation per component. With two unknowns and two equations, the system has a unique solution provided \\( \\mathbf{a} \\) and \\( \\mathbf{b} \\) are not parallel — which is the case here.' },
                { stepNumber: 3, description: 'Rearrange (ii) to make \\( \\mu \\) the subject.', workingLatex: '\\mu = 3\\lambda-3', explanation: 'Add \\(3\\lambda\\) to both sides of (ii). Substitution is convenient here because (ii) has \\( \\mu \\) with coefficient 1.' },
                { stepNumber: 4, description: 'Substitute into (i) and solve for \\( \\lambda.\\)', workingLatex: '5\\lambda-2(3\\lambda-3) = 4 \\;\\Longrightarrow\\; 5\\lambda-6\\lambda+6 = 4 \\;\\Longrightarrow\\; -\\lambda = -2 \\;\\Longrightarrow\\; \\lambda = 2', explanation: 'Distribute the \\(-2\\) over the bracket carefully — the sign on the \\(-3\\) flips to \\(+6.\\)' },
                { stepNumber: 5, description: 'Back-substitute to find \\( \\mu.\\)', workingLatex: '\\mu = 3(2)-3 = 3', explanation: 'Quick verification: \\( 2\\begin{pmatrix}5\\\\-3\\end{pmatrix}+3\\begin{pmatrix}-2\\\\1\\end{pmatrix} = \\begin{pmatrix}10-6\\\\-6+3\\end{pmatrix} = \\begin{pmatrix}4\\\\-3\\end{pmatrix}.\\) ✓' },
                { stepNumber: 6, description: 'Compute the magnitude of the target vector via Pythagoras.', workingLatex: '\\left|\\begin{pmatrix}4\\\\-3\\end{pmatrix}\\right| = \\sqrt{4^2+(-3)^2} = \\sqrt{16+9} = \\sqrt{25} = 5', explanation: 'The magnitude of a column vector is the square root of the sum of the squares of its entries. The negative sign on the y-component is squared away, so it does not affect the magnitude. Although the question asks for surd form, this particular case lands on the 3-4-5 Pythagorean triple, giving a clean integer answer.' }
            ],
            finalAnswer: '\\( \\lambda = 2,\\ \\mu = 3 ;\\) magnitude \\( = 5.\\)'
        }
    },
    {
        id: 'v1-050',
        topicRef: 'v1',
        topicTitle: 'Vectors 50',
        difficulty: 'Standard',
        questionText: 'In triangle \\(OAB,\\) \\( \\overrightarrow{OA} = \\mathbf{a} \\) and \\( \\overrightarrow{OB} = \\mathbf{b}.\\) A median of a triangle is a line segment from a vertex to the midpoint of the opposite side. \\(G\\) is the centroid (intersection of the three medians). Show that \\( \\overrightarrow{OG} = \\tfrac{1}{3}(\\mathbf{a}+\\mathbf{b}).\\)',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'centroid', 'proof', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Identify the median from O: it goes to M, the midpoint of AB.', workingLatex: 'M = \\text{midpoint of } AB \\;\\Longrightarrow\\; \\overrightarrow{OM} = \\tfrac{1}{2}\\left(\\overrightarrow{OA}+\\overrightarrow{OB}\\right) = \\tfrac{1}{2}(\\mathbf{a}+\\mathbf{b})', explanation: 'A median from O goes to the midpoint of the opposite side AB. The midpoint position vector is the average of the two endpoint position vectors.',
                    diagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2.5, -0.5] }, { from: [0, 0], to: [2, 4], color: '#dc2626', arrow: true, label: '\\mathbf{b}', labelAt: [0.5, 2.2] }, { from: [5, 0], to: [2, 4], color: '#888' }, { from: [0, 0], to: [3.5, 2], color: '#888', dashed: true }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [5, 0], label: 'A', labelAnchor: 'se', r: 3 }, { at: [2, 4], label: 'B', labelAnchor: 'n', r: 3 }, { at: [3.5, 2], label: 'M', labelAnchor: 'e', r: 3 }, { at: [2.33, 1.33], label: 'G', labelAnchor: 'sw', r: 3 }] } },
                { stepNumber: 2, description: 'Use the standard centroid property: G divides each median in the ratio 2:1 from the vertex.', workingLatex: '\\overrightarrow{OG} = \\tfrac{2}{3}\\overrightarrow{OM}', explanation: 'A well-known result of triangle geometry is that the three medians of any triangle intersect at a single point G (the centroid), and G is two-thirds of the way along each median measured from the vertex. So G is two-thirds of the way from O to M.' },
                { stepNumber: 3, description: 'Substitute and simplify.', workingLatex: '\\overrightarrow{OG} = \\tfrac{2}{3}\\cdot\\tfrac{1}{2}(\\mathbf{a}+\\mathbf{b}) = \\tfrac{1}{3}(\\mathbf{a}+\\mathbf{b})', explanation: '\\( \\tfrac{2}{3}\\times\\tfrac{1}{2}=\\tfrac{1}{3}.\\) The factor of \\( \\tfrac{1}{3} \\) is the symmetric one-third-each share of the three position vectors — in fact \\( \\overrightarrow{OG} = \\tfrac{1}{3}(\\overrightarrow{OO}+\\overrightarrow{OA}+\\overrightarrow{OB}) \\) is the general centroid formula, with \\( \\overrightarrow{OO}=\\mathbf{0}.\\)' },
                { stepNumber: 4, description: 'Conclude.', workingLatex: '\\overrightarrow{OG} = \\tfrac{1}{3}(\\mathbf{a}+\\mathbf{b}) \\;\\;\\blacksquare', explanation: 'The required identity is established.' }
            ],
            finalAnswer: '\\( \\overrightarrow{OG} = \\tfrac{1}{3}(\\mathbf{a}+\\mathbf{b}) \\) — proven.'
        }
    },
    {
        id: 'v1-051',
        topicRef: 'v1',
        topicTitle: 'Vectors 51',
        difficulty: 'Standard',
        questionText: 'In the quadrilateral \\(ABCD,\\) \\( \\overrightarrow{AB} = \\mathbf{p} \\) and \\( \\overrightarrow{AD} = \\mathbf{q}.\\) Given that \\( \\overrightarrow{BC} = 2\\mathbf{q},\\) find \\( \\overrightarrow{AC} \\) in terms of \\( \\mathbf{p} \\) and \\( \\mathbf{q}.\\)',
        questionDiagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 6, hideAxes: true, lines: [{ from: [0, 0], to: [3, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{p}', labelAt: [1.5, -0.4] }, { from: [0, 0], to: [1, 2.5], color: '#dc2626', arrow: true, label: '\\mathbf{q}', labelAt: [0.2, 1.3] }, { from: [3, 0], to: [5, 5], color: '#888' }, { from: [1, 2.5], to: [5, 5], color: '#888' }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 3 }, { at: [3, 0], label: 'B', labelAnchor: 'se', r: 3 }, { at: [5, 5], label: 'C', labelAnchor: 'ne', r: 3 }, { at: [1, 2.5], label: 'D', labelAnchor: 'w', r: 3 }] },
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'quadrilateral'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Identify a route from A to C using the given displacements.', workingLatex: '\\overrightarrow{AC} = \\overrightarrow{AB}+\\overrightarrow{BC}', explanation: 'Travelling A → B → C is the natural route: both \\( \\overrightarrow{AB} \\) and \\( \\overrightarrow{BC} \\) are given directly.' },
                { stepNumber: 2, description: 'Substitute the given vectors.', workingLatex: '\\overrightarrow{AC} = \\mathbf{p}+2\\mathbf{q}',
                    diagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 6, hideAxes: true, lines: [{ from: [0, 0], to: [3, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{p}', labelAt: [1.5, -0.4] }, { from: [0, 0], to: [1, 2.5], color: '#dc2626', arrow: true, label: '\\mathbf{q}', labelAt: [0.2, 1.3] }, { from: [3, 0], to: [5, 5], color: '#dc2626', arrow: true, label: '2\\mathbf{q}', labelAt: [4.5, 2.5] }, { from: [1, 2.5], to: [5, 5], color: '#888' }, { from: [0, 0], to: [5, 5], color: '#047857', dashed: true, arrow: true, label: '\\overrightarrow{AC}', labelAt: [2.4, 2.9] }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 3 }, { at: [3, 0], label: 'B', labelAnchor: 'se', r: 3 }, { at: [5, 5], label: 'C', labelAnchor: 'ne', r: 3 }, { at: [1, 2.5], label: 'D', labelAnchor: 'w', r: 3 }] },
                    explanation: 'Nose-to-tail addition: travel \\( \\mathbf{p} \\) from A to B, then \\(2\\mathbf{q} \\) from B to C.'
                }
            ],
            finalAnswer: '\\( \\overrightarrow{AC} = \\mathbf{p}+2\\mathbf{q} \\)'
        }
    },
    {
        id: 'v1-052',
        topicRef: 'v1',
        topicTitle: 'Vectors 52',
        difficulty: 'Standard',
        questionText: 'The points \\(P,\\) \\(Q\\) and \\(R\\) have position vectors \\( \\begin{pmatrix}1\\\\3\\end{pmatrix},\\) \\( \\begin{pmatrix}4\\\\9\\end{pmatrix} \\) and \\( \\begin{pmatrix}6\\\\13\\end{pmatrix}.\\) Show that \\(P,\\) \\(Q,\\) \\(R\\) are collinear.',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'collinear', 'proof', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'State the collinearity test using a shared point P.', workingLatex: '\\text{Show } \\overrightarrow{PR} = k\\,\\overrightarrow{PQ} \\text{ for some scalar } k', explanation: 'Two displacement vectors from the same point P are parallel iff one is a scalar multiple of the other. Parallel displacements from a shared point lie on a single straight line, so this would force P, Q, R to be collinear.',
                    diagram: { xMin: -1, xMax: 8, yMin: -1, yMax: 15, xTicks: [1, 4, 6], yTicks: [3, 9, 13], lines: [{ from: [1, 3], to: [4, 9], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{PQ}', labelAt: [1.7, 6.0] }, { from: [4, 9], to: [6, 13], color: '#dc2626', arrow: true, label: '\\overrightarrow{QR}', labelAt: [4.4, 11.4] }], points: [{ at: [1, 3], label: 'P(1,3)', labelAnchor: 'se', r: 4 }, { at: [4, 9], label: 'Q(4,9)', labelAnchor: 'se', r: 4 }, { at: [6, 13], label: 'R(6,13)', labelAnchor: 'sw', r: 4 }] } },
                { stepNumber: 2, description: 'Compute \\( \\overrightarrow{PQ}.\\)', workingLatex: '\\overrightarrow{PQ} = \\begin{pmatrix}4\\\\9\\end{pmatrix}-\\begin{pmatrix}1\\\\3\\end{pmatrix} = \\begin{pmatrix}3\\\\6\\end{pmatrix}', explanation: 'Endpoint minus start, componentwise.' },
                { stepNumber: 3, description: 'Compute \\( \\overrightarrow{PR}.\\)', workingLatex: '\\overrightarrow{PR} = \\begin{pmatrix}6\\\\13\\end{pmatrix}-\\begin{pmatrix}1\\\\3\\end{pmatrix} = \\begin{pmatrix}5\\\\10\\end{pmatrix}', explanation: 'Same subtraction, this time R minus P.' },
                { stepNumber: 4, description: 'Test for a common scalar factor.', workingLatex: '\\begin{pmatrix}5\\\\10\\end{pmatrix} = \\tfrac{5}{3}\\begin{pmatrix}3\\\\6\\end{pmatrix} \\;\\Longrightarrow\\; \\overrightarrow{PR} = \\tfrac{5}{3}\\overrightarrow{PQ}', explanation: 'Check both components scale by the same factor: \\(5\\div 3 = \\tfrac{5}{3}\\) and \\(10\\div 6 = \\tfrac{5}{3}.\\) Equal, so PR is parallel to PQ.' },
                { stepNumber: 5, description: 'Conclude.', workingLatex: '\\overrightarrow{PR} = \\tfrac{5}{3}\\overrightarrow{PQ} \\text{ and they share } P \\;\\Longrightarrow\\; P,\\,Q,\\,R \\text{ collinear} \\;\\;\\blacksquare', explanation: 'Shared start-point plus parallel displacements forces all three points onto the same line through P.' }
            ],
            finalAnswer: '\\( \\overrightarrow{PR} = \\tfrac{5}{3}\\overrightarrow{PQ},\\) so P, Q, R are collinear.'
        }
    },
    {
        id: 'v1-053',
        topicRef: 'v1',
        topicTitle: 'Vectors 53',
        difficulty: 'Challenge',
        questionText: '\\(A\\) is at \\((1, 5)\\) and \\( \\overrightarrow{AB} = \\begin{pmatrix}3\\\\-2\\end{pmatrix}.\\)\n\na) Find the coordinates of \\(B\\) and the exact magnitude \\( |\\overrightarrow{AB}|.\\)\n\nb) The point \\(C\\) lies on the line \\(AB\\) extended beyond \\(B\\) such that \\( |\\overrightarrow{AC}| = 3|\\overrightarrow{AB}|.\\) Find the coordinates of \\(C.\\)\n\nc) The point \\(D\\) is the reflection of \\(A\\) in \\(B.\\) Find \\(D,\\) and find a scalar \\( \\lambda \\) such that \\( \\overrightarrow{AD} = \\lambda\\overrightarrow{AC}.\\) Hence state the ratio \\(AD:AC.\\)',
        questionDiagram: { xMin: -1, xMax: 12, yMin: -2, yMax: 7, xTicks: [1], yTicks: [5], lines: [{ from: [1, 5], to: [4, 3], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{AB}', labelAt: [2.0, 4.4] }, { from: [4, 3], to: [10, -1], color: '#9ca3af', dashed: true }], points: [{ at: [1, 5], label: 'A(1,5)', labelAnchor: 'nw', r: 4 }, { at: [4, 3], label: 'B', labelAnchor: 'ne', r: 4 }, { at: [7, 1], label: 'D', labelAnchor: 'ne', r: 4 }, { at: [10, -1], label: 'C', labelAnchor: 'se', r: 4 }] },
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'coordinates', 'collinear', 'magnitude', 'reflection', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'a) Find B by adding the displacement \\( \\overrightarrow{AB} \\) to the coordinates of A.', workingLatex: 'B = A + \\overrightarrow{AB} = (1, 5) + (3, -2) = (4, 3)', explanation: 'Position vector arithmetic: B\'s position vector equals A\'s position vector plus the displacement from A to B.',
                    diagram: { xMin: -1, xMax: 12, yMin: -2, yMax: 7, xTicks: [1, 4, 7, 10], yTicks: [-1, 3, 5], lines: [{ from: [1, 5], to: [4, 3], color: '#1d4ed8', arrow: true, label: '\\overrightarrow{AB}', labelAt: [2.0, 4.4] }, { from: [4, 3], to: [10, -1], color: '#dc2626', dashed: true, arrow: true, label: 'BC', labelAt: [7, 1.4] }], points: [{ at: [1, 5], label: 'A(1,5)', labelAnchor: 'nw', r: 4 }, { at: [4, 3], label: 'B(4,3)', labelAnchor: 'ne', r: 4 }, { at: [10, -1], label: 'C(10,-1)', labelAnchor: 'se', r: 4 }, { at: [7, 1], label: 'D(7,1)', labelAnchor: 'ne', r: 4 }] } },
                { stepNumber: 2, description: 'Compute the magnitude \\( |\\overrightarrow{AB}| \\) using Pythagoras.', workingLatex: '|\\overrightarrow{AB}| = \\sqrt{3^2+(-2)^2} = \\sqrt{9+4} = \\sqrt{13}', explanation: 'Magnitude is the square root of the sum of the squares of the components. Leave the answer in exact surd form unless the question asks for a decimal.' },
                { stepNumber: 3, description: 'b) Translate the length condition into a vector equation.', workingLatex: '|\\overrightarrow{AC}| = 3|\\overrightarrow{AB}| \\text{ and same direction (extended beyond } B) \\;\\Longrightarrow\\; \\overrightarrow{AC} = 3\\,\\overrightarrow{AB}', explanation: 'Same direction means the scalar is positive; three times the length means the scalar has magnitude 3. So \\( \\overrightarrow{AC} = +3\\,\\overrightarrow{AB}.\\) If C had been beyond A on the opposite side instead, the scalar would have been \\(-3.\\)' },
                { stepNumber: 4, description: 'Compute \\( \\overrightarrow{AC} \\) and add to A.', workingLatex: '\\overrightarrow{AC} = 3\\begin{pmatrix}3\\\\-2\\end{pmatrix} = \\begin{pmatrix}9\\\\-6\\end{pmatrix} \\;\\Longrightarrow\\; C = (1+9,\\ 5-6) = (10,\\ -1)', explanation: 'Scale the column vector componentwise, then add to A to get C.' },
                { stepNumber: 5, description: 'c) Use the reflection property to write \\( \\overrightarrow{AD} \\) in terms of \\( \\overrightarrow{AB}.\\)', workingLatex: 'D \\text{ is reflection of } A \\text{ in } B \\;\\Longrightarrow\\; B \\text{ is midpoint of } AD \\;\\Longrightarrow\\; \\overrightarrow{AD} = 2\\,\\overrightarrow{AB}', explanation: 'Reflection in a point means that point is the midpoint of the original and its image. So going from A to D is exactly twice going from A to B.' },
                { stepNumber: 6, description: 'Compute D.', workingLatex: '\\overrightarrow{AD} = 2\\begin{pmatrix}3\\\\-2\\end{pmatrix} = \\begin{pmatrix}6\\\\-4\\end{pmatrix} \\;\\Longrightarrow\\; D = (1+6,\\ 5-4) = (7,\\ 1)', explanation: 'Quick check: B should be the midpoint of AD, and indeed \\( \\tfrac{1}{2}((1,5)+(7,1)) = (4,3) = B.\\) ✓' },
                { stepNumber: 7, description: 'Express \\( \\overrightarrow{AD} \\) as a scalar multiple of \\( \\overrightarrow{AC}.\\)', workingLatex: '\\overrightarrow{AD} = 2\\overrightarrow{AB} \\text{ and } \\overrightarrow{AC} = 3\\overrightarrow{AB} \\;\\Longrightarrow\\; \\overrightarrow{AD} = \\tfrac{2}{3}\\overrightarrow{AC}', explanation: 'Both are scalar multiples of the same base vector \\( \\overrightarrow{AB},\\) so eliminating it gives a direct ratio between AD and AC. Hence \\( \\lambda = \\tfrac{2}{3}.\\)' },
                { stepNumber: 8, description: 'State the length ratio.', workingLatex: 'AD:AC = 2:3', explanation: 'Reading off the scalar 2/3: AD is two parts for every three parts of AC.' }
            ],
            finalAnswer: 'a) \\( B = (4, 3),\\ |\\overrightarrow{AB}| = \\sqrt{13}.\\)  b) \\( C = (10, -1).\\)  c) \\( D = (7, 1),\\ \\lambda = \\tfrac{2}{3},\\ AD:AC = 2:3.\\)'
        }
    },
    {
        id: 'v1-054',
        topicRef: 'v1',
        topicTitle: 'Vectors 54',
        difficulty: 'Standard',
        questionText: 'In the pentagon \\(OABCD,\\) \\( \\overrightarrow{OA} = \\mathbf{a},\\) \\( \\overrightarrow{OD} = \\mathbf{d} \\) and \\( \\overrightarrow{AB} = \\overrightarrow{DC} = \\mathbf{d}.\\) Find \\( \\overrightarrow{BC} \\) in terms of \\( \\mathbf{a} \\) and \\( \\mathbf{d}.\\)',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'pentagon', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Find \\( \\overrightarrow{OB} \\) via the chain O → A → B.', workingLatex: '\\overrightarrow{OB} = \\overrightarrow{OA}+\\overrightarrow{AB} = \\mathbf{a}+\\mathbf{d}', explanation: 'B is reached from A by the given displacement \\( \\overrightarrow{AB}=\\mathbf{d}.\\) Adding to \\( \\overrightarrow{OA} \\) gives B\'s position vector from O.',
                    diagram: { xMin: -1, xMax: 6, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [4, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2, -0.5] }, { from: [0, 0], to: [1.5, 3], color: '#dc2626', arrow: true, label: '\\mathbf{d}', labelAt: [-0.5, 1.5] }, { from: [4, 0], to: [5.5, 3], color: '#888' }, { from: [1.5, 3], to: [3, 3], color: '#888' }, { from: [5.5, 3], to: [3, 3], color: '#047857', dashed: true, arrow: true, label: '\\overrightarrow{BC}', labelAt: [4.2, 3.2] }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [4, 0], label: 'A', labelAnchor: 'se', r: 3 }, { at: [5.5, 3], label: 'B', labelAnchor: 'ne', r: 3 }, { at: [3, 3], label: 'C', labelAnchor: 'n', r: 3 }, { at: [1.5, 3], label: 'D', labelAnchor: 'nw', r: 3 }] } },
                { stepNumber: 2, description: 'Find \\( \\overrightarrow{OC} \\) via the chain O → D → C.', workingLatex: '\\overrightarrow{OC} = \\overrightarrow{OD}+\\overrightarrow{DC} = \\mathbf{d}+\\mathbf{d} = 2\\mathbf{d}', explanation: 'Both \\( \\overrightarrow{OD} \\) and \\( \\overrightarrow{DC} \\) are given as \\( \\mathbf{d},\\) so OC is just \\(2\\mathbf{d}.\\)' },
                { stepNumber: 3, description: 'Compute \\( \\overrightarrow{BC} \\) by subtracting position vectors.', workingLatex: '\\overrightarrow{BC} = \\overrightarrow{OC}-\\overrightarrow{OB} = 2\\mathbf{d}-(\\mathbf{a}+\\mathbf{d})', explanation: 'Endpoint C minus start B, just like with coordinates.' },
                { stepNumber: 4, description: 'Expand and simplify.', workingLatex: '\\overrightarrow{BC} = 2\\mathbf{d}-\\mathbf{a}-\\mathbf{d} = \\mathbf{d}-\\mathbf{a}', explanation: 'Distribute the minus over the bracket, then collect the \\( \\mathbf{d} \\) terms: \\(2\\mathbf{d}-\\mathbf{d}=\\mathbf{d}.\\) Either \\( \\mathbf{d}-\\mathbf{a} \\) or \\( -\\mathbf{a}+\\mathbf{d} \\) is a fine final form.' }
            ],
            finalAnswer: '\\( \\overrightarrow{BC} = \\mathbf{d}-\\mathbf{a} \\)'
        }
    },
    {
        id: 'v1-055',
        topicRef: 'v1',
        topicTitle: 'Vectors 55',
        difficulty: 'Standard',
        questionText: 'Given \\( \\overrightarrow{AB} = 2\\mathbf{i}-5\\mathbf{j} \\) and \\( \\overrightarrow{CB} = -3\\mathbf{i}+\\mathbf{j},\\) find \\( \\overrightarrow{AC}.\\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'addition', 'subtraction'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Set up \\( \\overrightarrow{AC} \\) by routing through B.', workingLatex: '\\overrightarrow{AC} = \\overrightarrow{AB}+\\overrightarrow{BC}', explanation: 'A and C are not joined directly by any given vector, so we go via B using the triangle/chain law.' },
                { stepNumber: 2, description: 'Convert the given \\( \\overrightarrow{CB} \\) to \\( \\overrightarrow{BC} \\) by reversing direction.', workingLatex: '\\overrightarrow{BC} = -\\overrightarrow{CB} = -(-3\\mathbf{i}+\\mathbf{j}) = 3\\mathbf{i}-\\mathbf{j}', explanation: 'Negating a vector flips its sense. Every sign inside the bracket flips on distribution; missing this is the most common slip on this type of question.' },
                { stepNumber: 3, description: 'Substitute and add componentwise.', workingLatex: '\\overrightarrow{AC} = (2\\mathbf{i}-5\\mathbf{j})+(3\\mathbf{i}-\\mathbf{j}) = (2+3)\\mathbf{i}+(-5-1)\\mathbf{j} = 5\\mathbf{i}-6\\mathbf{j}', explanation: 'Collect \\( \\mathbf{i} \\) and \\( \\mathbf{j} \\) coefficients separately.' }
            ],
            finalAnswer: '\\( \\overrightarrow{AC} = 5\\mathbf{i}-6\\mathbf{j} \\)'
        }
    },
    {
        id: 'v1-056',
        topicRef: 'v1',
        topicTitle: 'Vectors 56',
        difficulty: 'Standard',
        questionText: 'In triangle \\(OAB,\\) \\( \\overrightarrow{OA} = 6\\mathbf{a} \\) and \\( \\overrightarrow{OB} = 6\\mathbf{b}.\\) \\(M\\) is the midpoint of \\(OA\\) and \\(N\\) divides \\(AB\\) in the ratio \\(2:1.\\) Show that \\(O,\\) \\(N\\) and the midpoint of \\(MB\\) are collinear.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'collinear', 'ratio', 'proof', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Find \\( \\overrightarrow{OM} \\) using "M is midpoint of OA".', workingLatex: '\\overrightarrow{OM} = \\tfrac{1}{2}\\overrightarrow{OA} = \\tfrac{1}{2}(6\\mathbf{a}) = 3\\mathbf{a}', explanation: 'M lies halfway along OA from O, so \\( \\overrightarrow{OM} \\) is half of \\( \\overrightarrow{OA}.\\)',
                    diagram: { xMin: -1, xMax: 8, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [7, 0], color: '#1d4ed8', arrow: true, label: '6\\mathbf{a}', labelAt: [3.5, -0.5] }, { from: [0, 0], to: [2, 4], color: '#dc2626', arrow: true, label: '6\\mathbf{b}', labelAt: [0.5, 2.2] }, { from: [7, 0], to: [2, 4], color: '#888' }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [7, 0], label: 'A', labelAnchor: 'se', r: 3 }, { at: [2, 4], label: 'B', labelAnchor: 'n', r: 3 }, { at: [3.5, 0], label: 'M', labelAnchor: 's', r: 3 }] } },
                { stepNumber: 2, description: 'Find \\( \\overrightarrow{ON} \\) using "N divides AB in the ratio 2:1".', workingLatex: '\\overrightarrow{ON} = \\overrightarrow{OA}+\\tfrac{2}{3}\\overrightarrow{AB} = 6\\mathbf{a}+\\tfrac{2}{3}(6\\mathbf{b}-6\\mathbf{a}) = 2\\mathbf{a}+4\\mathbf{b}', explanation: '\\(AN:NB = 2:1\\) places N two-thirds of the way along AB from A. So \\( \\overrightarrow{AN}=\\tfrac{2}{3}\\overrightarrow{AB},\\) and \\( \\overrightarrow{AB} = \\overrightarrow{OB}-\\overrightarrow{OA} = 6\\mathbf{b}-6\\mathbf{a}.\\)' },
                { stepNumber: 3, description: 'Find the position vector of K, the midpoint of MB.', workingLatex: '\\overrightarrow{OK} = \\tfrac{1}{2}\\left(\\overrightarrow{OM}+\\overrightarrow{OB}\\right) = \\tfrac{1}{2}(3\\mathbf{a}+6\\mathbf{b}) = \\tfrac{3}{2}\\mathbf{a}+3\\mathbf{b}', explanation: 'Midpoint formula averages the two endpoints\' position vectors.' },
                { stepNumber: 4, description: 'Test whether \\( \\overrightarrow{ON} \\) and \\( \\overrightarrow{OK} \\) are scalar multiples of each other.', workingLatex: '\\overrightarrow{ON} = 2\\mathbf{a}+4\\mathbf{b} = \\tfrac{4}{3}\\left(\\tfrac{3}{2}\\mathbf{a}+3\\mathbf{b}\\right) = \\tfrac{4}{3}\\overrightarrow{OK}', explanation: 'Both component ratios give the same factor: \\( \\mathbf{a}\\text{-ratio} = 2\\div\\tfrac{3}{2} = \\tfrac{4}{3} \\) and \\( \\mathbf{b}\\text{-ratio} = 4\\div 3 = \\tfrac{4}{3}.\\) Hence \\( \\overrightarrow{ON} \\) is parallel to \\( \\overrightarrow{OK},\\) and since both start at O the points O, N and K are collinear. ∎' }
            ],
            finalAnswer: '\\( \\overrightarrow{ON} = 2\\mathbf{a}+4\\mathbf{b} = \\tfrac{4}{3}\\overrightarrow{OK},\\) so O, N and the midpoint of MB are collinear.'
        }
    },
    {
        id: 'v1-057',
        topicRef: 'v1',
        topicTitle: 'Vectors 57',
        difficulty: 'Challenge',
        questionText: '\\(ABCD\\) is a square with \\( \\overrightarrow{AB} = \\mathbf{p} \\) and \\( \\overrightarrow{AD} = \\mathbf{q} \\) (so \\( |\\mathbf{p}|=|\\mathbf{q}|=s,\\) the side length). \\(E\\) is the midpoint of \\(CD\\) and \\(F\\) divides \\(BC\\) in the ratio \\(1:2\\) from \\(B.\\)\n\na) Express \\( \\overrightarrow{AE},\\) \\( \\overrightarrow{AF} \\) and \\( \\overrightarrow{EF} \\) in terms of \\( \\mathbf{p} \\) and \\( \\mathbf{q}.\\)\n\nb) Find \\( |\\overrightarrow{EF}|^2 \\) in terms of \\( s,\\) assuming the square\'s sides \\( \\mathbf{p} \\) and \\( \\mathbf{q} \\) are perpendicular (so \\( \\mathbf{p}\\cdot\\mathbf{q}=0 \\) in the standard Y1 working with \\( |\\mathbf{a}\\pm\\mathbf{b}|^2 = |\\mathbf{a}|^2+|\\mathbf{b}|^2 \\) when perpendicular).\n\nc) The line \\(AF\\) is extended to meet line \\(DE\\) at \\(G.\\) Find \\( \\overrightarrow{AG} \\) in terms of \\( \\mathbf{p} \\) and \\( \\mathbf{q}.\\)',
        questionDiagram: { xMin: -1, xMax: 5, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [4, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{p}', labelAt: [2, -0.5] }, { from: [0, 0], to: [0, 4], color: '#dc2626', arrow: true, label: '\\mathbf{q}', labelAt: [-0.6, 2] }, { from: [4, 0], to: [4, 4], color: '#888' }, { from: [0, 4], to: [4, 4], color: '#888' }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 3 }, { at: [4, 0], label: 'B', labelAnchor: 'se', r: 3 }, { at: [4, 4], label: 'C', labelAnchor: 'ne', r: 3 }, { at: [0, 4], label: 'D', labelAnchor: 'nw', r: 3 }, { at: [2, 4], label: 'E', labelAnchor: 'n', r: 3 }, { at: [4, 1.33], label: 'F', labelAnchor: 'e', r: 3 }] },
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'square', 'ratio', 'intersection', 'magnitude', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'a) Identify the auxiliary side-vectors of the square.', workingLatex: '\\overrightarrow{DC} = \\overrightarrow{AB} = \\mathbf{p},\\quad \\overrightarrow{BC} = \\overrightarrow{AD} = \\mathbf{q}', explanation: 'In a square (or any parallelogram) opposite sides are equal as vectors. We will need DC and BC when locating E and F.',
                    diagram: { xMin: -1, xMax: 5, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [4, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{p}', labelAt: [2, -0.5] }, { from: [0, 0], to: [0, 4], color: '#dc2626', arrow: true, label: '\\mathbf{q}', labelAt: [-0.6, 2] }, { from: [4, 0], to: [4, 4], color: '#888' }, { from: [0, 4], to: [4, 4], color: '#888' }, { from: [2, 4], to: [4, 1.33], color: '#047857', dashed: true, arrow: true, label: '\\overrightarrow{EF}', labelAt: [3.4, 2.8] }, { from: [0, 0], to: [4.5, 1.5], color: '#a16207', dashed: true, arrow: true, label: '\\overrightarrow{AF}\\text{ extended}', labelAt: [3.2, 0.4] }], points: [{ at: [0, 0], label: 'A', labelAnchor: 'sw', r: 3 }, { at: [4, 0], label: 'B', labelAnchor: 'se', r: 3 }, { at: [4, 4], label: 'C', labelAnchor: 'ne', r: 3 }, { at: [0, 4], label: 'D', labelAnchor: 'nw', r: 3 }, { at: [2, 4], label: 'E', labelAnchor: 'n', r: 3 }, { at: [4, 1.33], label: 'F', labelAnchor: 'e', r: 3 }] } },
                { stepNumber: 2, description: 'Find \\( \\overrightarrow{AE} \\) via the route A → D → E.', workingLatex: '\\overrightarrow{AE} = \\overrightarrow{AD}+\\overrightarrow{DE} = \\mathbf{q}+\\tfrac{1}{2}\\mathbf{p}', explanation: 'E is the midpoint of DC, so \\( \\overrightarrow{DE} = \\tfrac{1}{2}\\overrightarrow{DC} = \\tfrac{1}{2}\\mathbf{p}.\\) Then chain via D.' },
                { stepNumber: 3, description: 'Find \\( \\overrightarrow{AF} \\) via the route A → B → F.', workingLatex: '\\overrightarrow{AF} = \\overrightarrow{AB}+\\overrightarrow{BF} = \\mathbf{p}+\\tfrac{1}{3}\\mathbf{q}', explanation: '"F divides BC in ratio 1:2 from B" means \\(BF:FC = 1:2,\\) so F is one-third of the way from B to C. So \\( \\overrightarrow{BF}=\\tfrac{1}{3}\\overrightarrow{BC}=\\tfrac{1}{3}\\mathbf{q}.\\)' },
                { stepNumber: 4, description: 'Compute \\( \\overrightarrow{EF} \\) by subtracting position vectors.', workingLatex: '\\overrightarrow{EF} = \\overrightarrow{AF}-\\overrightarrow{AE} = \\left(\\mathbf{p}+\\tfrac{1}{3}\\mathbf{q}\\right)-\\left(\\mathbf{q}+\\tfrac{1}{2}\\mathbf{p}\\right)', explanation: 'Endpoint F minus start E, where both are measured from A.' },
                { stepNumber: 5, description: 'Collect like terms.', workingLatex: '\\overrightarrow{EF} = \\left(1-\\tfrac{1}{2}\\right)\\mathbf{p}+\\left(\\tfrac{1}{3}-1\\right)\\mathbf{q} = \\tfrac{1}{2}\\mathbf{p}-\\tfrac{2}{3}\\mathbf{q}', explanation: 'Combine the \\( \\mathbf{p} \\) and \\( \\mathbf{q} \\) coefficients over common denominators. The \\( \\mathbf{q} \\) coefficient is negative because going from E (high on the square) to F (low on the right edge) involves moving against the \\( \\mathbf{q} \\) direction.' },
                { stepNumber: 6, description: 'b) Use perpendicularity to expand \\( |\\overrightarrow{EF}|^2.\\)', workingLatex: '|\\overrightarrow{EF}|^2 = \\left|\\tfrac{1}{2}\\mathbf{p}-\\tfrac{2}{3}\\mathbf{q}\\right|^2 = \\left(\\tfrac{1}{2}\\right)^2|\\mathbf{p}|^2 + \\left(\\tfrac{2}{3}\\right)^2|\\mathbf{q}|^2', explanation: 'Because \\( \\mathbf{p}\\cdot\\mathbf{q}=0,\\) the expansion \\(|\\alpha\\mathbf{p}+\\beta\\mathbf{q}|^2 = \\alpha^2|\\mathbf{p}|^2 + 2\\alpha\\beta\\,\\mathbf{p}\\cdot\\mathbf{q} + \\beta^2|\\mathbf{q}|^2 \\) collapses with the middle term vanishing. This is just Pythagoras: the components along perpendicular directions add in quadrature.' },
                { stepNumber: 7, description: 'Substitute \\( |\\mathbf{p}|=|\\mathbf{q}|=s \\) and simplify.', workingLatex: '|\\overrightarrow{EF}|^2 = \\tfrac{s^2}{4}+\\tfrac{4s^2}{9} = \\dfrac{9s^2+16s^2}{36} = \\dfrac{25s^2}{36}', explanation: 'Common denominator 36 gives a clean simplification, and \\(25/36\\) is the square of \\(5/6,\\) so \\( |\\overrightarrow{EF}|=\\tfrac{5s}{6}.\\)' },
                { stepNumber: 8, description: 'c) Parameterise G on line AF.', workingLatex: '\\overrightarrow{AG} = \\lambda\\,\\overrightarrow{AF} = \\lambda\\mathbf{p}+\\tfrac{\\lambda}{3}\\mathbf{q}', explanation: 'Every point on line AF has position vector a scalar multiple of \\( \\overrightarrow{AF} \\) from A. The unknown scalar \\( \\lambda \\) tells us how far along we go.' },
                { stepNumber: 9, description: 'Parameterise G on line DE.', workingLatex: '\\overrightarrow{AG} = \\overrightarrow{AD}+\\mu\\,\\overrightarrow{DE} = \\mathbf{q}+\\tfrac{\\mu}{2}\\mathbf{p}', explanation: 'A line through D in the direction \\( \\overrightarrow{DE} \\) is reached from A by first going to D, then sliding by \\( \\mu \\) copies of \\( \\overrightarrow{DE}.\\) Here \\( \\overrightarrow{DE}=\\tfrac{1}{2}\\mathbf{p}.\\)' },
                { stepNumber: 10, description: 'Equate the two expressions for \\( \\overrightarrow{AG} \\) and compare coefficients.', workingLatex: '\\lambda\\mathbf{p}+\\tfrac{\\lambda}{3}\\mathbf{q} = \\tfrac{\\mu}{2}\\mathbf{p}+\\mathbf{q} \\;\\Longrightarrow\\; \\lambda = \\tfrac{\\mu}{2},\\quad \\tfrac{\\lambda}{3}=1', explanation: 'Since \\( \\mathbf{p} \\) and \\( \\mathbf{q} \\) are not parallel, their coefficients on the two sides must individually agree.' },
                { stepNumber: 11, description: 'Solve for \\( \\lambda \\) and \\( \\mu.\\)', workingLatex: '\\tfrac{\\lambda}{3}=1 \\;\\Longrightarrow\\; \\lambda = 3.\\quad \\lambda=\\tfrac{\\mu}{2} \\;\\Longrightarrow\\; \\mu = 6', explanation: '\\( \\lambda=3 \\) means G is three times as far from A as F is (along the AF line), placing G well beyond F.' },
                { stepNumber: 12, description: 'Compute \\( \\overrightarrow{AG}.\\)', workingLatex: '\\overrightarrow{AG} = 3\\,\\overrightarrow{AF} = 3(\\mathbf{p}+\\tfrac{1}{3}\\mathbf{q}) = 3\\mathbf{p}+\\mathbf{q}', explanation: 'Cross-check via the DE route: \\( \\overrightarrow{AG}=\\mathbf{q}+\\tfrac{6}{2}\\mathbf{p}=\\mathbf{q}+3\\mathbf{p} = 3\\mathbf{p}+\\mathbf{q}.\\) ✓' }
            ],
            finalAnswer: 'a) \\( \\overrightarrow{AE}=\\tfrac{1}{2}\\mathbf{p}+\\mathbf{q},\\ \\overrightarrow{AF}=\\mathbf{p}+\\tfrac{1}{3}\\mathbf{q},\\ \\overrightarrow{EF}=\\tfrac{1}{2}\\mathbf{p}-\\tfrac{2}{3}\\mathbf{q}.\\)  b) \\( |\\overrightarrow{EF}|^2 = \\tfrac{25}{36}s^2,\\) so \\( |\\overrightarrow{EF}|=\\tfrac{5s}{6}.\\)  c) \\( \\overrightarrow{AG} = 3\\mathbf{p}+\\mathbf{q}.\\)'
        }
    },
    {
        id: 'v1-058',
        topicRef: 'v1',
        topicTitle: 'Vectors 58',
        difficulty: 'Standard',
        questionText: 'Find the value of \\( k \\) such that \\( \\begin{pmatrix}k\\\\6\\end{pmatrix} \\) is parallel to \\( \\begin{pmatrix}2\\\\-3\\end{pmatrix}.\\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['vectors', 'parallel', 'unknown'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'State the condition for two vectors to be parallel.', workingLatex: '\\begin{pmatrix}k\\\\6\\end{pmatrix} \\parallel \\begin{pmatrix}2\\\\-3\\end{pmatrix} \\iff \\begin{pmatrix}k\\\\6\\end{pmatrix} = t\\begin{pmatrix}2\\\\-3\\end{pmatrix} \\text{ for some } t', explanation: 'Two non-zero vectors are parallel iff one is a scalar multiple of the other. Equivalently, their components have a common ratio.' },
                { stepNumber: 2, description: 'Use the known component (y) to find the scalar.', workingLatex: '6 = t(-3) \\;\\Longrightarrow\\; t = -2', explanation: 'The y-component fixes t because both y-entries are known. The fact that t is negative means the two parallel vectors point in opposite senses.' },
                { stepNumber: 3, description: 'Apply the same scalar to the x-component to find k.', workingLatex: 'k = t(2) = (-2)(2) = -4', explanation: 'Equivalent shortcut: equate the component ratios \\( \\tfrac{k}{2} = \\tfrac{6}{-3} = -2,\\) giving \\(k = -4\\) directly.' }
            ],
            finalAnswer: '\\( k = -4 \\)'
        }
    },
    {
        id: 'v1-059',
        topicRef: 'v1',
        topicTitle: 'Vectors 59',
        difficulty: 'Standard',
        questionText: 'Given \\( \\overrightarrow{OA} = \\begin{pmatrix}2\\\\-1\\end{pmatrix},\\) \\( \\overrightarrow{OB} = \\begin{pmatrix}8\\\\5\\end{pmatrix},\\) find the point \\(P\\) on \\(AB\\) such that \\( \\overrightarrow{AP} = \\tfrac{2}{3}\\overrightarrow{AB}.\\)',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'ratio', 'position vectors', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Compute \\( \\overrightarrow{AB} \\) by subtracting position vectors.', workingLatex: '\\overrightarrow{AB} = \\overrightarrow{OB}-\\overrightarrow{OA} = \\begin{pmatrix}8\\\\5\\end{pmatrix}-\\begin{pmatrix}2\\\\-1\\end{pmatrix} = \\begin{pmatrix}6\\\\6\\end{pmatrix}', explanation: 'Endpoint B minus start A, componentwise. Watch the double-negative on the y-coordinate: \\(5-(-1)=6.\\)' },
                { stepNumber: 2, description: 'Scale by 2/3 to obtain \\( \\overrightarrow{AP}.\\)', workingLatex: '\\overrightarrow{AP} = \\tfrac{2}{3}\\overrightarrow{AB} = \\tfrac{2}{3}\\begin{pmatrix}6\\\\6\\end{pmatrix} = \\begin{pmatrix}4\\\\4\\end{pmatrix}', explanation: 'Multiplying a column vector by 2/3 multiplies each entry by 2/3. Both entries are 6, so both become 4.' },
                { stepNumber: 3, description: 'Add to \\( \\overrightarrow{OA} \\) to land at P.', workingLatex: '\\overrightarrow{OP} = \\overrightarrow{OA}+\\overrightarrow{AP} = \\begin{pmatrix}2\\\\-1\\end{pmatrix}+\\begin{pmatrix}4\\\\4\\end{pmatrix} = \\begin{pmatrix}6\\\\3\\end{pmatrix}', explanation: 'Travel from O to A, then move \\( \\overrightarrow{AP} \\) to reach P.' },
                { stepNumber: 4, description: 'Read off the coordinates of P.', workingLatex: 'P = (6,\\ 3)', explanation: 'Sanity check: the ratio AP:AB = 2:3 means P is two-thirds of the way from A to B. The midpoint of AB would be at (5, 2); P=(6,3) lies further from A and toward B, consistent with 2/3 > 1/2.' }
            ],
            finalAnswer: '\\( P = (6, 3) \\)'
        }
    },
    {
        id: 'v1-060',
        topicRef: 'v1',
        topicTitle: 'Vectors 60',
        difficulty: 'Standard',
        questionText: '\\(OABC\\) is a parallelogram. \\( \\overrightarrow{OA} = \\mathbf{a} \\) and \\( \\overrightarrow{OC} = \\mathbf{c}.\\) \\(D\\) is the midpoint of \\(OA,\\) and \\(E\\) is the midpoint of \\(AB.\\)\n\na) Find \\( \\overrightarrow{OE} \\) in terms of \\( \\mathbf{a} \\) and \\( \\mathbf{c}.\\)\n\nb) Show that \\(DE\\) is parallel to \\(OB.\\)',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['vectors', 'parallelogram', 'ratio', 'parallel proof', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Find \\( \\overrightarrow{OD},\\) since D is the midpoint of OA.', workingLatex: '\\overrightarrow{OD} = \\tfrac{1}{2}\\overrightarrow{OA} = \\tfrac{1}{2}\\mathbf{a}', explanation: 'D sits halfway along OA, so its position vector from O is half of OA.',
                    diagram: { xMin: -1, xMax: 7, yMin: -1, yMax: 5, hideAxes: true, lines: [{ from: [0, 0], to: [5, 0], color: '#1d4ed8', arrow: true, label: '\\mathbf{a}', labelAt: [2.5, -0.5] }, { from: [0, 0], to: [1.5, 3.5], color: '#dc2626', arrow: true, label: '\\mathbf{c}', labelAt: [-0.5, 1.8] }, { from: [5, 0], to: [6.5, 3.5], color: '#888' }, { from: [1.5, 3.5], to: [6.5, 3.5], color: '#888' }, { from: [2.5, 0], to: [5.75, 1.75], color: '#047857', dashed: true, arrow: true, label: '\\overrightarrow{DE}', labelAt: [3.8, 1.3] }], points: [{ at: [0, 0], label: 'O', labelAnchor: 'sw', r: 3 }, { at: [5, 0], label: 'A', labelAnchor: 'se', r: 3 }, { at: [6.5, 3.5], label: 'B', labelAnchor: 'ne', r: 3 }, { at: [1.5, 3.5], label: 'C', labelAnchor: 'nw', r: 3 }, { at: [2.5, 0], label: 'D', labelAnchor: 's', r: 3 }, { at: [5.75, 1.75], label: 'E', labelAnchor: 'e', r: 3 }] } },
                { stepNumber: 2, description: 'a) Find \\( \\overrightarrow{OE} \\) via the route O → A → E.', workingLatex: '\\overrightarrow{OE} = \\overrightarrow{OA}+\\tfrac{1}{2}\\overrightarrow{AB} = \\mathbf{a}+\\tfrac{1}{2}\\mathbf{c}', explanation: 'E is the midpoint of AB. In parallelogram OABC, \\( \\overrightarrow{AB}=\\overrightarrow{OC}=\\mathbf{c},\\) so \\( \\overrightarrow{AE}=\\tfrac{1}{2}\\mathbf{c}.\\) Walk OA, then half of AB.' },
                { stepNumber: 3, description: 'Locate B.', workingLatex: '\\overrightarrow{OB} = \\overrightarrow{OA}+\\overrightarrow{AB} = \\mathbf{a}+\\mathbf{c}', explanation: 'Travel along OA then along AB. Opposite sides of the parallelogram are equal as vectors, so \\( \\overrightarrow{AB}=\\overrightarrow{OC}=\\mathbf{c}.\\)' },
                { stepNumber: 4, description: 'b) Compute \\( \\overrightarrow{DE} \\) by subtracting position vectors.', workingLatex: '\\overrightarrow{DE} = \\overrightarrow{OE}-\\overrightarrow{OD} = \\left(\\mathbf{a}+\\tfrac{1}{2}\\mathbf{c}\\right)-\\tfrac{1}{2}\\mathbf{a} = \\tfrac{1}{2}\\mathbf{a}+\\tfrac{1}{2}\\mathbf{c}', explanation: 'Endpoint E minus start D. Combine the \\( \\mathbf{a} \\) coefficients: \\(1-\\tfrac{1}{2}=\\tfrac{1}{2}.\\)' },
                { stepNumber: 5, description: 'Factor out the common scalar to expose the parallel relationship.', workingLatex: '\\overrightarrow{DE} = \\tfrac{1}{2}(\\mathbf{a}+\\mathbf{c}) = \\tfrac{1}{2}\\overrightarrow{OB}', explanation: 'DE is exactly half of OB, so DE is parallel to OB (and half its length). ∎' }
            ],
            finalAnswer: 'a) \\( \\overrightarrow{OE} = \\mathbf{a}+\\tfrac{1}{2}\\mathbf{c}.\\) b) \\( \\overrightarrow{DE} = \\tfrac{1}{2}\\overrightarrow{OB},\\) so DE is parallel to OB.'
        }
    }
];