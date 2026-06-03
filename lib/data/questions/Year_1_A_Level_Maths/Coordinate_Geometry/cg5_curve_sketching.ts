import { Question } from "@/lib/types";

function sample(f: (x: number) => number, xMin: number, xMax: number, n = 60): Array<[number, number]> {
  const pts: Array<[number, number]> = [];
  for (let i = 0; i < n; i++) {
    const x = xMin + (i / (n - 1)) * (xMax - xMin);
    pts.push([x, f(x)]);
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

    // ── Type A: Identify graph shape from equation (Q1–Q5) ────────────────────

    {
        id: 'cg5-001',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 01',
        difficulty: 'Foundation',
        questionText: 'State the general shape of the graph of each of the following functions, giving a reason in each case.\n\na) \\( y = 4x^5 \\)\n\nb) \\( y = -2x^4 \\)\n\nc) \\( y = -7x^3 \\)\n\nd) \\( y = 3x^6 \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'polynomials', 'shape', 'odd power', 'even power'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'For \\( y = 4x^5 \\): odd power, positive coefficient.',
                    workingLatex: '\\text{Power } 5 \\text{ is odd, } k = 4 > 0',
                    explanation: 'Odd power with positive \\( k \\) gives a bottom-left to top-right shape.'
                },
                {
                    stepNumber: 2,
                    description: 'For \\( y = -2x^4 \\): even power, negative coefficient.',
                    workingLatex: '\\text{Power } 4 \\text{ is even, } k = -2 < 0',
                    explanation: 'Even power with negative \\( k \\) gives an n-shape (opening downward).'
                },
                {
                    stepNumber: 3,
                    description: 'For \\( y = -7x^3 \\): odd power, negative coefficient.',
                    workingLatex: '\\text{Power } 3 \\text{ is odd, } k = -7 < 0',
                    explanation: 'Odd power with negative \\( k \\) gives a top-left to bottom-right shape.'
                },
                {
                    stepNumber: 4,
                    description: 'For \\( y = 3x^6 \\): even power, positive coefficient.',
                    workingLatex: '\\text{Power } 6 \\text{ is even, } k = 3 > 0',
                    explanation: 'Even power with positive \\( k \\) gives a u-shape (opening upward).'
                }
            ],
            finalAnswer: 'a) Bottom-left to top-right; b) n-shape; c) Top-left to bottom-right; d) u-shape'
        }
    },

    {
        id: 'cg5-002',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 02',
        difficulty: 'Foundation',
        questionText: 'Four graphs are shown below, labelled A, B, C, and D. Match each graph to the correct function.\n\n- Graph A: u-shape entirely above the \\(x\\)-axis, passing through the origin.\n- Graph B: top-left to bottom-right, passing through the origin.\n- Graph C: n-shape entirely below the \\(x\\)-axis, passing through the origin.\n- Graph D: bottom-left to top-right, passing through the origin.\n\nFunctions: \\( y = 0.5x^3 \\), \\( y = -4x^2 \\), \\( y = 2x^4 \\), \\( y = -3x^5 \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'matching', 'shape', 'polynomials'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Graph A is a u-shape: even power, positive coefficient.',
                    workingLatex: 'y = 2x^4 \\quad (\\text{even, positive})',
                    explanation: '\\( x^4 \\) is even so gives a u/n-shape; positive coefficient means u-shape.'
                },
                {
                    stepNumber: 2,
                    description: 'Graph B is top-left to bottom-right: odd power, negative coefficient.',
                    workingLatex: 'y = -3x^5 \\quad (\\text{odd, negative})',
                    explanation: 'Odd power with negative \\( k \\) gives top-left to bottom-right.'
                },
                {
                    stepNumber: 3,
                    description: 'Graph C is n-shape: even power, negative coefficient.',
                    workingLatex: 'y = -4x^2 \\quad (\\text{even, negative})',
                    explanation: 'Even power with negative \\( k \\) gives an n-shape below the axis.'
                },
                {
                    stepNumber: 4,
                    description: 'Graph D is bottom-left to top-right: odd power, positive coefficient.',
                    workingLatex: 'y = 0.5x^3 \\quad (\\text{odd, positive})',
                    explanation: 'Odd power with positive \\( k \\) gives bottom-left to top-right.'
                }
            ],
            finalAnswer: '\\(A \\leftrightarrow y = 2x^4\\); \\(B \\leftrightarrow y = -3x^5\\); \\(C \\leftrightarrow y = -4x^2\\); \\(D \\leftrightarrow y = 0.5x^3\\)'
        }
    },

    // ── Type B: Sketch cubics — three distinct roots (Q3–Q8) ──────────────────

    {
        id: 'cg5-003',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 03',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = x(x - 2)(x + 3) \\), clearly showing where the curve meets the coordinate axes.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'cubic', 'factorised', 'roots', 'x-intercepts', 'y-intercept'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term by expanding partially.',
                    workingLatex: 'y = x \\cdot x \\cdot x + \\cdots = x^3 + \\cdots',
                    explanation: 'The highest power is \\( x^3 \\) with a positive coefficient, so the shape is bottom-left to top-right.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept by substituting \\( x = 0 \\).',
                    workingLatex: 'y = 0(0-2)(0+3) = 0',
                    explanation: 'The curve passes through the origin.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( x \\)-intercepts by setting each factor to zero.',
                    workingLatex: 'x = 0, \\quad x - 2 = 0 \\Rightarrow x = 2, \\quad x + 3 = 0 \\Rightarrow x = -3',
                    explanation: 'Three distinct roots at \\( x = -3, 0, 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Crosses } x\\text{-axis at } {-3,\\ 0,\\ 2};\\quad y\\text{-intercept at } 0',
                    explanation: 'The curve crosses all three roots (no repeated factors), rising from bottom-left to top-right overall.',
                    diagram: {
                        xMin: -4, xMax: 3, yMin: -15, yMax: 15,
                        xTicks: [-3, -2, -1, 1, 2], yTicks: [-10, -5, 5, 10],
                        curves: [{ points: sample((x) => x * (x - 2) * (x + 3), -4, 3, 80), color: "#1d4ed8", label: "y = x(x-2)(x+3)", labelAt: [-3.8, 13] }],
                        points: [
                            { at: [-3, 0], label: "(-3,\\,0)", labelAnchor: "sw" },
                            { at: [0, 0], label: "(0,\\,0)", labelAnchor: "ne" },
                            { at: [2, 0], label: "(2,\\,0)", labelAnchor: "se" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Cubic crossing \\(x\\)-axis at \\(x = -3, 0, 2\\); passes through origin; positive leading coefficient.'
        }
    },

    {
        id: 'cg5-004',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 04',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = (x + 1)(x - 3)(x - 5) \\), showing clearly where the curve meets the axes.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'cubic', 'factorised', 'roots', 'y-intercept'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Determine the overall shape.',
                    workingLatex: 'y = x^3 + \\cdots \\quad (\\text{positive leading coefficient})',
                    explanation: 'Bottom-left to top-right shape.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'y = (1)(-3)(-5) = 15',
                    explanation: 'Substitute \\( x = 0 \\): the three factors give \\( 1 \\times (-3) \\times (-5) = 15 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( x \\)-intercepts.',
                    workingLatex: 'x + 1 = 0 \\Rightarrow x = -1; \\quad x - 3 = 0 \\Rightarrow x = 3; \\quad x - 5 = 0 \\Rightarrow x = 5',
                    explanation: 'Three distinct roots at \\( x = -1, 3, 5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Crosses at } x = -1,\\ 3,\\ 5; \\quad y\\text{-intercept at } (0, 15)',
                    explanation: 'The curve crosses each root cleanly, with \\( y \\)-intercept at 15.',
                    diagram: {
                        xMin: -2, xMax: 6, yMin: -20, yMax: 25,
                        xTicks: [-1, 1, 2, 3, 4, 5], yTicks: [-15, -10, -5, 5, 10, 15, 20],
                        curves: [{ points: sample((x) => (x + 1) * (x - 3) * (x - 5), -2, 6, 80), color: "#1d4ed8", label: "y = (x+1)(x-3)(x-5)", labelAt: [-1.8, 22] }],
                        points: [
                            { at: [-1, 0], label: "(-1,\\,0)", labelAnchor: "sw" },
                            { at: [3, 0], label: "(3,\\,0)", labelAnchor: "sw" },
                            { at: [5, 0], label: "(5,\\,0)", labelAnchor: "se" },
                            { at: [0, 15], label: "(0,\\,15)", labelAnchor: "e" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Cubic crossing \\(x\\)-axis at \\(-1, 3, 5\\); \\(y\\)-intercept at \\((0, 15)\\).'
        }
    },

    {
        id: 'cg5-005',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 05',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = -x(x + 2)(x - 4) \\), showing where the curve meets the axes.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'cubic', 'negative leading coefficient', 'roots'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: 'y = -x \\cdot x \\cdot x + \\cdots = -x^3 + \\cdots',
                    explanation: 'Negative coefficient of \\( x^3 \\) means top-left to bottom-right shape.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'y = -(0)(2)(-4) = 0',
                    explanation: 'The curve passes through the origin.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( x \\)-intercepts.',
                    workingLatex: 'x = 0, \\quad x = -2, \\quad x = 4',
                    explanation: 'Each factor set to zero gives a distinct root.'
                },
                {
                    stepNumber: 4,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Crosses at } x = -2,\\ 0,\\ 4; \\quad \\text{top-left to bottom-right overall}',
                    explanation: 'Negative leading coefficient flips the orientation compared to a standard cubic.',
                    diagram: {
                        xMin: -3.5, xMax: 5, yMin: -20, yMax: 20,
                        xTicks: [-2, -1, 1, 2, 3, 4], yTicks: [-15, -10, -5, 5, 10, 15],
                        curves: [{ points: sample((x) => -x * (x + 2) * (x - 4), -3.5, 5, 80), color: "#1d4ed8", label: "y = -x(x+2)(x-4)", labelAt: [1, 18] }],
                        points: [
                            { at: [-2, 0], label: "(-2,\\,0)", labelAnchor: "nw" },
                            { at: [0, 0], label: "(0,\\,0)", labelAnchor: "se" },
                            { at: [4, 0], label: "(4,\\,0)", labelAnchor: "ne" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Cubic crossing \\(x\\)-axis at \\(x = -2, 0, 4\\); passes through origin; top-left to bottom-right shape.'
        }
    },

    {
        id: 'cg5-006',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 06',
        difficulty: 'Foundation',
        questionText: 'a) Factorise completely \\( x^3 + x^2 - 6x \\).\n\nb) Hence sketch the graph of \\( y = x^3 + x^2 - 6x \\), showing where it meets the coordinate axes.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'cubic', 'factorising', 'roots', 'hence'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: take out the common factor \\( x \\).',
                    workingLatex: 'x^3 + x^2 - 6x = x(x^2 + x - 6)',
                    explanation: 'Every term has a factor of \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic \\( x^2 + x - 6 \\).',
                    workingLatex: 'x^2 + x - 6 = (x + 3)(x - 2)',
                    explanation: 'We need two numbers that multiply to \\(-6\\) and add to \\(1\\): these are \\(3\\) and \\(-2\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the full factorisation.',
                    workingLatex: 'x(x + 3)(x - 2)',
                    explanation: 'Three linear factors, so three roots.'
                },
                {
                    stepNumber: 4,
                    description: 'Part b: find \\( x \\)-intercepts and \\( y \\)-intercept.',
                    workingLatex: 'x = 0,\\ -3,\\ 2; \\quad y(0) = 0',
                    explanation: 'All three roots are distinct; the \\( y \\)-intercept is at the origin.'
                },
                {
                    stepNumber: 5,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Positive }x^3\\text{ coefficient: bottom-left to top-right}',
                    explanation: 'The curve crosses all three roots and rises to the right.',
                    diagram: {
                        xMin: -4, xMax: 3, yMin: -15, yMax: 15,
                        xTicks: [-3, -2, -1, 1, 2], yTicks: [-10, -5, 5, 10],
                        curves: [{ points: sample((x) => x * (x + 3) * (x - 2), -4, 3, 80), color: "#1d4ed8", label: "y = x(x+3)(x-2)", labelAt: [-3.8, 13] }],
                        points: [
                            { at: [-3, 0], label: "(-3,\\,0)", labelAnchor: "sw" },
                            { at: [0, 0], label: "(0,\\,0)", labelAnchor: "ne" },
                            { at: [2, 0], label: "(2,\\,0)", labelAnchor: "se" },
                        ],
                    }
                }
            ],
            finalAnswer: 'a) \\(x(x+3)(x-2)\\); b) Cubic crossing at \\(x = -3, 0, 2\\); positive shape.'
        }
    },

    {
        id: 'cg5-007',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 07',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = (2x + 1)(x - 2)(x - 4) \\), showing where the curve meets the axes.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'cubic', 'fractional root', 'roots', 'y-intercept'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the leading coefficient.',
                    workingLatex: '2x \\cdot x \\cdot x = 2x^3 \\quad (\\text{positive})',
                    explanation: 'Positive leading coefficient: bottom-left to top-right shape.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'y = (1)(-2)(-4) = 8',
                    explanation: 'Substitute \\( x = 0 \\) into each factor.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( x \\)-intercepts.',
                    workingLatex: '2x + 1 = 0 \\Rightarrow x = -\\tfrac{1}{2}; \\quad x = 2; \\quad x = 4',
                    explanation: 'Three distinct roots including a fractional one.'
                },
                {
                    stepNumber: 4,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Crosses at } x = -\\tfrac{1}{2},\\ 2,\\ 4; \\quad y\\text{-intercept at } (0, 8)',
                    explanation: 'The curve crosses all three roots cleanly.',
                    diagram: {
                        xMin: -2, xMax: 5, yMin: -20, yMax: 20,
                        xTicks: [-1, 1, 2, 3, 4], yTicks: [-15, -10, -5, 5, 10, 15],
                        curves: [{ points: sample((x) => (2 * x + 1) * (x - 2) * (x - 4), -2, 5, 80), color: "#1d4ed8", label: "y = (2x+1)(x-2)(x-4)", labelAt: [-1.8, 18] }],
                        points: [
                            { at: [-0.5, 0], label: "(-\\tfrac{1}{2},\\,0)", labelAnchor: "sw" },
                            { at: [2, 0], label: "(2,\\,0)", labelAnchor: "sw" },
                            { at: [4, 0], label: "(4,\\,0)", labelAnchor: "se" },
                            { at: [0, 8], label: "(0,\\,8)", labelAnchor: "e" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Cubic crossing \\(x\\)-axis at \\(x = -\\tfrac{1}{2}, 2, 4\\); \\(y\\)-intercept at \\((0, 8)\\).'
        }
    },

    {
        id: 'cg5-008',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 08',
        difficulty: 'Foundation',
        questionText: 'a) Factorise completely \\( y = 2x^3 - 8x \\).\n\nb) Hence sketch the graph, showing where it meets the coordinate axes.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'cubic', 'factorising', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: take out the common factor.',
                    workingLatex: '2x^3 - 8x = 2x(x^2 - 4)',
                    explanation: 'Factor out \\( 2x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise \\( x^2 - 4 \\) as a difference of two squares.',
                    workingLatex: 'x^2 - 4 = (x-2)(x+2)',
                    explanation: '\\( a^2 - b^2 = (a-b)(a+b) \\) with \\( a = x, b = 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the full factorisation.',
                    workingLatex: '2x(x - 2)(x + 2)',
                    explanation: 'Three distinct linear factors.'
                },
                {
                    stepNumber: 4,
                    description: 'Part b: roots and \\( y \\)-intercept.',
                    workingLatex: 'x = 0,\\ 2,\\ -2; \\quad y(0) = 0',
                    explanation: 'Symmetrically placed roots at \\( \\pm 2 \\) and at the origin.'
                },
                {
                    stepNumber: 5,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Positive leading coefficient: bottom-left to top-right}',
                    explanation: 'The graph is symmetric about the origin (odd function) and crosses at \\( -2, 0, 2 \\).',
                    diagram: {
                        xMin: -3, xMax: 3, yMin: -15, yMax: 15,
                        xTicks: [-2, -1, 1, 2], yTicks: [-10, -5, 5, 10],
                        curves: [{ points: sample((x) => 2 * x * (x - 2) * (x + 2), -3, 3, 80), color: "#1d4ed8", label: "y = 2x(x-2)(x+2)", labelAt: [-2.8, 13] }],
                        points: [
                            { at: [-2, 0], label: "(-2,\\,0)", labelAnchor: "sw" },
                            { at: [0, 0], label: "(0,\\,0)", labelAnchor: "ne" },
                            { at: [2, 0], label: "(2,\\,0)", labelAnchor: "se" },
                        ],
                    }
                }
            ],
            finalAnswer: 'a) \\(2x(x-2)(x+2)\\); b) Cubic crossing at \\(x = -2, 0, 2\\); passes through origin.'
        }
    },

    // ── Type C: Cubics with repeated roots (Q9–Q14) ───────────────────────────

    {
        id: 'cg5-009',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 09',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = x^2(x - 3) \\), showing clearly where the curve meets the axes and describing the behaviour at each \\( x \\)-intercept.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'cubic', 'double root', 'repeated root', 'touch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the shape from the leading term.',
                    workingLatex: 'y = x^3 - 3x^2 \\implies \\text{positive }x^3',
                    explanation: 'Bottom-left to top-right overall shape.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'y = 0^2(0-3) = 0',
                    explanation: 'Passes through the origin.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( x \\)-intercepts and their nature.',
                    workingLatex: 'x^2 = 0 \\Rightarrow x = 0 \\;(\\text{double root}); \\quad x - 3 = 0 \\Rightarrow x = 3 \\;(\\text{single root})',
                    explanation: 'A double root means the curve touches the \\( x \\)-axis at \\( x = 0 \\) without crossing it.'
                },
                {
                    stepNumber: 4,
                    description: 'Describe the behaviour at each root.',
                    workingLatex: 'x = 0: \\text{ touches; } \\quad x = 3: \\text{ crosses}',
                    explanation: 'The curve bounces off the axis at \\( x = 0 \\) and cuts through at \\( x = 3 \\).',
                    diagram: {
                        xMin: -2, xMax: 4.5, yMin: -8, yMax: 8,
                        xTicks: [-1, 1, 2, 3, 4], yTicks: [-6, -4, -2, 2, 4, 6],
                        curves: [{ points: sample((x) => x * x * (x - 3), -2, 4.5, 80), color: "#1d4ed8", label: "y = x^2(x-3)", labelAt: [-1.8, 7] }],
                        points: [
                            { at: [0, 0], label: "(0,\\,0)", labelAnchor: "ne" },
                            { at: [3, 0], label: "(3,\\,0)", labelAnchor: "sw" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Cubic touching \\(x\\)-axis at \\(x = 0\\) (double root) and crossing at \\(x = 3\\); \\(y\\)-intercept at origin.'
        }
    },

    {
        id: 'cg5-010',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 10',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = (x + 2)^2(x - 1) \\), showing where the curve meets the axes.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'cubic', 'double root', 'repeated root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: 'x^2 \\cdot x = x^3 \\quad (\\text{positive coefficient})',
                    explanation: 'Bottom-left to top-right shape.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'y = (0+2)^2(0-1) = 4 \\times (-1) = -4',
                    explanation: 'The curve crosses the \\( y \\)-axis at \\( -4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( x \\)-intercepts.',
                    workingLatex: '(x+2)^2 = 0 \\Rightarrow x = -2 \\;(\\text{double}); \\quad x - 1 = 0 \\Rightarrow x = 1 \\;(\\text{single})',
                    explanation: 'The curve touches at \\( x = -2 \\) and crosses at \\( x = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Touches at } x = -2, \\text{ crosses at } x = 1, \\; y\\text{-intercept at } (0,-4)',
                    explanation: 'The curve dips down to touch the axis at \\( -2 \\) and rises to cross at \\( x = 1 \\).',
                    diagram: {
                        xMin: -4, xMax: 2.5, yMin: -8, yMax: 8,
                        xTicks: [-3, -2, -1, 1, 2], yTicks: [-6, -4, -2, 2, 4, 6],
                        curves: [{ points: sample((x) => (x + 2) * (x + 2) * (x - 1), -4, 2.5, 80), color: "#1d4ed8", label: "y = (x+2)^2(x-1)", labelAt: [-3.8, 7] }],
                        points: [
                            { at: [-2, 0], label: "(-2,\\,0)", labelAnchor: "nw" },
                            { at: [1, 0], label: "(1,\\,0)", labelAnchor: "sw" },
                            { at: [0, -4], label: "(0,\\,-4)", labelAnchor: "e" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Cubic touching \\(x\\)-axis at \\(x = -2\\), crossing at \\(x = 1\\); \\(y\\)-intercept at \\((0, -4)\\).'
        }
    },

    {
        id: 'cg5-011',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 11',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = (3 - x)^3 \\), showing where the curve meets the axes and describing the behaviour at the \\( x \\)-intercept.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'cubic', 'triple root', 'negative coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand to identify the leading term.',
                    workingLatex: '(3-x)^3 = 27 - 27x + 9x^2 - x^3',
                    explanation: 'The leading term is \\( -x^3 \\): negative coefficient, so top-left to bottom-right shape.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'y = (3-0)^3 = 27',
                    explanation: 'The curve crosses the \\( y \\)-axis at \\( 27 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( x \\)-intercept.',
                    workingLatex: '(3 - x)^3 = 0 \\Rightarrow x = 3 \\;(\\text{triple root})',
                    explanation: 'A triple root still crosses the \\( x \\)-axis, but the curve flattens out as it crosses.'
                },
                {
                    stepNumber: 4,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Enters top-left, passes through } (0, 27), \\text{ flattens and crosses at } x = 3',
                    explanation: 'The triple root gives an inflection-type crossing, not a sharp cut.',
                    diagram: {
                        xMin: -1, xMax: 6, yMin: -30, yMax: 35,
                        xTicks: [1, 2, 3, 4, 5], yTicks: [-20, -10, 10, 20, 30],
                        curves: [{ points: sample((x) => Math.pow(3 - x, 3), -1, 6, 80), color: "#1d4ed8", label: "y = (3-x)^3", labelAt: [3.5, 30] }],
                        points: [
                            { at: [3, 0], label: "(3,\\,0)", labelAnchor: "ne" },
                            { at: [0, 27], label: "(0,\\,27)", labelAnchor: "e" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Cubic with triple root at \\(x = 3\\); \\(y\\)-intercept at \\((0, 27)\\); top-left to bottom-right overall shape.'
        }
    },

    {
        id: 'cg5-012',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 12',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = -x^2(x + 4) \\), showing where the curve meets the axes and describing the behaviour at each \\( x \\)-intercept.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'cubic', 'double root', 'negative leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: '-x^2 \\cdot x = -x^3 \\quad (\\text{negative})',
                    explanation: 'Top-left to bottom-right overall shape.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'y = -(0)^2(0 + 4) = 0',
                    explanation: 'The curve passes through the origin.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( x \\)-intercepts.',
                    workingLatex: 'x^2 = 0 \\Rightarrow x = 0 \\;(\\text{double}); \\quad x + 4 = 0 \\Rightarrow x = -4 \\;(\\text{single})',
                    explanation: 'Touches at \\( x = 0 \\) and crosses at \\( x = -4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Crosses at } x = -4, \\text{ touches at } x = 0; \\text{ falls to bottom-right}',
                    explanation: 'The curve enters from top-left, crosses at \\( -4 \\), rises to touch the origin, then falls away to the right.',
                    diagram: {
                        xMin: -5.5, xMax: 2, yMin: -15, yMax: 15,
                        xTicks: [-4, -3, -2, -1, 1], yTicks: [-10, -5, 5, 10],
                        curves: [{ points: sample((x) => -x * x * (x + 4), -5.5, 2, 80), color: "#1d4ed8", label: "y = -x^2(x+4)", labelAt: [-2, 13] }],
                        points: [
                            { at: [-4, 0], label: "(-4,\\,0)", labelAnchor: "nw" },
                            { at: [0, 0], label: "(0,\\,0)", labelAnchor: "se" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Cubic crossing at \\(x = -4\\), touching at \\(x = 0\\); passes through origin; top-left to bottom-right shape.'
        }
    },

    {
        id: 'cg5-013',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 13',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = x(x - 5)^2 \\), showing all intercepts and describing the nature of each root.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'cubic', 'double root', 'touch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: 'x \\cdot x^2 = x^3 \\quad (\\text{positive})',
                    explanation: 'Bottom-left to top-right overall.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'y = 0 \\cdot (0-5)^2 = 0',
                    explanation: 'Passes through the origin.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( x \\)-intercepts.',
                    workingLatex: 'x = 0 \\;(\\text{single root}); \\quad (x-5)^2 = 0 \\Rightarrow x = 5 \\;(\\text{double root})',
                    explanation: 'Crosses at \\( x = 0 \\), touches at \\( x = 5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Crosses at } 0, \\text{ rises, touches at } 5 \\text{ (bouncing off)}, \\text{ then rises away}',
                    explanation: 'The curve crosses the origin, climbs to a local maximum, dips to touch \\( x = 5 \\) and rises again.',
                    diagram: {
                        xMin: -2, xMax: 7, yMin: -20, yMax: 30,
                        xTicks: [-1, 1, 2, 3, 4, 5, 6], yTicks: [-10, 10, 20],
                        curves: [{ points: sample((x) => x * (x - 5) * (x - 5), -2, 7, 80), color: "#1d4ed8", label: "y = x(x-5)^2", labelAt: [-1.8, 28] }],
                        points: [
                            { at: [0, 0], label: "(0,\\,0)", labelAnchor: "sw" },
                            { at: [5, 0], label: "(5,\\,0)", labelAnchor: "se" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Cubic crossing at \\(x = 0\\), touching at \\(x = 5\\); \\(y\\)-intercept at origin; positive shape.'
        }
    },

    {
        id: 'cg5-014',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 14',
        difficulty: 'Foundation',
        questionText: 'a) Factorise completely \\( 2x^3 - 12x^2 + 18x \\).\n\nb) Hence sketch the graph, showing where it meets the coordinate axes.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'cubic', 'double root', 'factorising'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: take out the common factor.',
                    workingLatex: '2x^3 - 12x^2 + 18x = 2x(x^2 - 6x + 9)',
                    explanation: 'Each term has a factor of \\( 2x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 6x + 9 = (x - 3)^2',
                    explanation: 'Perfect square: \\( (x-3)^2 = x^2 - 6x + 9 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the full factorisation.',
                    workingLatex: '2x(x - 3)^2',
                    explanation: 'One single root at \\( x = 0 \\), one double root at \\( x = 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Part b: find intercepts.',
                    workingLatex: 'x = 0 \\;(\\text{crosses}), \\quad x = 3 \\;(\\text{touches}); \\quad y(0) = 0',
                    explanation: 'Positive leading coefficient: bottom-left to top-right.',
                    diagram: {
                        xMin: -2, xMax: 5, yMin: -20, yMax: 30,
                        xTicks: [-1, 1, 2, 3, 4], yTicks: [-10, 10, 20],
                        curves: [{ points: sample((x) => 2 * x * (x - 3) * (x - 3), -2, 5, 80), color: "#1d4ed8", label: "y = 2x(x-3)^2", labelAt: [-1.8, 28] }],
                        points: [
                            { at: [0, 0], label: "(0,\\,0)", labelAnchor: "sw" },
                            { at: [3, 0], label: "(3,\\,0)", labelAnchor: "se" },
                        ],
                    }
                }
            ],
            finalAnswer: 'a) \\(2x(x-3)^2\\); b) Crosses at \\(x = 0\\), touches at \\(x = 3\\); positive cubic shape.'
        }
    },

    // ── Type D: Quartic sketching (Q15–Q22) ───────────────────────────────────

    {
        id: 'cg5-015',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 15',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = x(x - 1)(x + 1)(x - 3) \\), showing where the curve meets the axes.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'quartic', 'four roots', 'positive leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the degree and leading coefficient.',
                    workingLatex: 'x \\cdot x \\cdot x \\cdot x = x^4 \\quad (\\text{positive})',
                    explanation: 'Even degree, positive leading coefficient: u-shape overall.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'y = 0(-1)(1)(-3) = 0',
                    explanation: 'The curve passes through the origin.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( x \\)-intercepts.',
                    workingLatex: 'x = 0,\\ -1,\\ 1,\\ 3',
                    explanation: 'Four distinct real roots — the curve crosses the axis four times.'
                },
                {
                    stepNumber: 4,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Quartic crossing at } x = -1, 0, 1, 3; \\text{ u-shape overall}',
                    explanation: 'The curve rises from bottom-left, crosses and undulates through all four roots, and rises again to the right.',
                    diagram: {
                        xMin: -2, xMax: 4, yMin: -10, yMax: 15,
                        xTicks: [-1, 1, 2, 3], yTicks: [-8, -4, 4, 8, 12],
                        curves: [{ points: sample((x) => x * (x - 1) * (x + 1) * (x - 3), -2, 4, 100), color: "#1d4ed8", label: "y = x(x-1)(x+1)(x-3)", labelAt: [-1.9, 13] }],
                        points: [
                            { at: [-1, 0], label: "(-1,\\,0)", labelAnchor: "nw" },
                            { at: [0, 0], label: "(0,\\,0)", labelAnchor: "n" },
                            { at: [1, 0], label: "(1,\\,0)", labelAnchor: "ne" },
                            { at: [3, 0], label: "(3,\\,0)", labelAnchor: "se" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Quartic crossing at \\(x = -1, 0, 1, 3\\); \\(y\\)-intercept at origin; u-shape overall.'
        }
    },

    {
        id: 'cg5-016',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 16',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = -2x(x + 3)(x - 1)(x - 4) \\), showing where the curve meets the axes.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'quartic', 'negative leading coefficient', 'four roots'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: '-2x \\cdot x \\cdot x \\cdot x = -2x^4 \\quad (\\text{negative})',
                    explanation: 'Even degree, negative leading coefficient: n-shape overall (opens downward).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'y = -2(0)(3)(-1)(-4) = 0',
                    explanation: 'Passes through the origin.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( x \\)-intercepts.',
                    workingLatex: 'x = 0,\\ -3,\\ 1,\\ 4',
                    explanation: 'Four distinct roots.'
                },
                {
                    stepNumber: 4,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{n-shape crossing at } x = -3, 0, 1, 4',
                    explanation: 'The curve falls from top-left, crossing and undulating through the four roots, then falls to the right.',
                    diagram: {
                        xMin: -4, xMax: 5, yMin: -60, yMax: 60,
                        xTicks: [-3, -2, -1, 1, 2, 3, 4], yTicks: [-40, -20, 20, 40],
                        curves: [{ points: sample((x) => -2 * x * (x + 3) * (x - 1) * (x - 4), -3.6, 4.5, 120), color: "#1d4ed8", label: "y = -2x(x+3)(x-1)(x-4)", labelAt: [-3.8, 55] }],
                        points: [
                            { at: [-3, 0], label: "(-3,\\,0)", labelAnchor: "sw" },
                            { at: [0, 0], label: "(0,\\,0)", labelAnchor: "s" },
                            { at: [1, 0], label: "(1,\\,0)", labelAnchor: "sw" },
                            { at: [4, 0], label: "(4,\\,0)", labelAnchor: "se" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Quartic crossing at \\(x = -3, 0, 1, 4\\); \\(y\\)-intercept at origin; n-shape overall.'
        }
    },

    {
        id: 'cg5-017',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 17',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = x^2(x + 2)(x - 3) \\), showing all intercepts and the nature of each root.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'quartic', 'double root', 'touch', 'positive leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: 'x^2 \\cdot x \\cdot x = x^4 \\quad (\\text{positive})',
                    explanation: 'u-shape overall.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'y = 0^2(2)(-3) = 0',
                    explanation: 'Passes through the origin.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( x \\)-intercepts and their nature.',
                    workingLatex: 'x = 0 \\;(\\text{double, touches}); \\quad x = -2 \\;(\\text{crosses}); \\quad x = 3 \\;(\\text{crosses})',
                    explanation: 'The double root at \\( x = 0 \\) means the curve touches the axis there.'
                },
                {
                    stepNumber: 4,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Crosses at } -2 \\text{ and } 3, \\text{ touches at } 0',
                    explanation: 'The curve enters from bottom-left, crosses at \\( -2 \\), touches origin, then crosses at \\( 3 \\) and rises.',
                    diagram: {
                        xMin: -3, xMax: 4, yMin: -25, yMax: 30,
                        xTicks: [-2, -1, 1, 2, 3], yTicks: [-20, -10, 10, 20],
                        curves: [{ points: sample((x) => x * x * (x + 2) * (x - 3), -3, 4, 100), color: "#1d4ed8", label: "y = x^2(x+2)(x-3)", labelAt: [-2.9, 28] }],
                        points: [
                            { at: [-2, 0], label: "(-2,\\,0)", labelAnchor: "sw" },
                            { at: [0, 0], label: "(0,\\,0)", labelAnchor: "ne" },
                            { at: [3, 0], label: "(3,\\,0)", labelAnchor: "se" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Quartic touching at \\(x = 0\\), crossing at \\(x = -2\\) and \\(x = 3\\); \\(y\\)-intercept at origin.'
        }
    },

    {
        id: 'cg5-018',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 18',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = (x - 2)^2(x + 1)^2 \\), showing all intercepts and describing the behaviour at each.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'quartic', 'two double roots', 'touch'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: 'x^2 \\cdot x^2 = x^4 \\quad (\\text{positive})',
                    explanation: 'u-shape overall.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'y = (0-2)^2(0+1)^2 = 4 \\times 1 = 4',
                    explanation: 'Substitute \\( x = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( x \\)-intercepts.',
                    workingLatex: '(x-2)^2 = 0 \\Rightarrow x = 2 \\;(\\text{double}); \\quad (x+1)^2 = 0 \\Rightarrow x = -1 \\;(\\text{double})',
                    explanation: 'Both roots are double roots — the curve touches but does not cross the \\( x \\)-axis at both.'
                },
                {
                    stepNumber: 4,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Touches at } x = -1 \\text{ and } x = 2; \\; y\\text{-intercept at } (0, 4)',
                    explanation: 'The entire curve sits on or above the \\( x \\)-axis (since \\( y \\geq 0 \\) for all \\( x \\)).',
                    diagram: {
                        xMin: -2.5, xMax: 3.5, yMin: -3, yMax: 12,
                        xTicks: [-2, -1, 1, 2, 3], yTicks: [2, 4, 6, 8, 10],
                        curves: [{ points: sample((x) => (x - 2) * (x - 2) * (x + 1) * (x + 1), -2.5, 3.5, 100), color: "#1d4ed8", label: "y = (x-2)^2(x+1)^2", labelAt: [-2.4, 11] }],
                        points: [
                            { at: [-1, 0], label: "(-1,\\,0)", labelAnchor: "sw" },
                            { at: [2, 0], label: "(2,\\,0)", labelAnchor: "se" },
                            { at: [0, 4], label: "(0,\\,4)", labelAnchor: "e" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Quartic touching \\(x\\)-axis at \\(x = -1\\) and \\(x = 2\\); \\(y\\)-intercept at \\((0, 4)\\); curve lies above \\(x\\)-axis.'
        }
    },

    {
        id: 'cg5-019',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 19',
        difficulty: 'Foundation',
        questionText: 'a) Expand \\( (x^2 - 9)(x^2 - 4) \\).\n\nb) Hence sketch the graph of \\( y = (x^2 - 9)(x^2 - 4) \\), showing where it meets the axes.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'quartic', 'difference of two squares', 'symmetric'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: factorise each factor as a difference of two squares.',
                    workingLatex: '(x^2-9)(x^2-4) = (x-3)(x+3)(x-2)(x+2)',
                    explanation: '\\( x^2 - 9 = (x-3)(x+3) \\) and \\( x^2 - 4 = (x-2)(x+2) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand fully (optional, for identification).',
                    workingLatex: 'x^4 - 13x^2 + 36',
                    explanation: 'Leading term is \\( x^4 \\) (positive): u-shape overall.'
                },
                {
                    stepNumber: 3,
                    description: 'Part b: find the \\( x \\)-intercepts.',
                    workingLatex: 'x = \\pm 3,\\ \\pm 2',
                    explanation: 'Four distinct roots, symmetric about the \\( y \\)-axis.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'y = (-9)(-4) = 36',
                    explanation: 'Substitute \\( x = 0 \\) into the original factored form.',
                    diagram: {
                        xMin: -4, xMax: 4, yMin: -10, yMax: 45,
                        xTicks: [-3, -2, -1, 1, 2, 3], yTicks: [-5, 5, 10, 20, 30, 40],
                        curves: [{ points: sample((x) => (x * x - 9) * (x * x - 4), -4, 4, 100), color: "#1d4ed8", label: "y = (x^2-9)(x^2-4)", labelAt: [-3.9, 42] }],
                        points: [
                            { at: [-3, 0], label: "(-3,\\,0)", labelAnchor: "sw" },
                            { at: [-2, 0], label: "(-2,\\,0)", labelAnchor: "n" },
                            { at: [2, 0], label: "(2,\\,0)", labelAnchor: "n" },
                            { at: [3, 0], label: "(3,\\,0)", labelAnchor: "se" },
                            { at: [0, 36], label: "(0,\\,36)", labelAnchor: "e" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Quartic crossing at \\(x = \\pm 2, \\pm 3\\); \\(y\\)-intercept at \\((0, 36)\\); u-shape overall; symmetric about the \\(y\\)-axis.'
        }
    },

    {
        id: 'cg5-020',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 20',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = 3x(x - 2)^2(x + 1) \\), showing all intercepts and the nature of each.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'quartic', 'double root', 'positive leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: '3x \\cdot x^2 \\cdot x = 3x^4 \\quad (\\text{positive})',
                    explanation: 'u-shape overall.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'y = 3(0)(0-2)^2(0+1) = 0',
                    explanation: 'Passes through the origin.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( x \\)-intercepts.',
                    workingLatex: 'x = 0 \\;(\\text{crosses}); \\quad x = 2 \\;(\\text{double, touches}); \\quad x = -1 \\;(\\text{crosses})',
                    explanation: 'Three distinct \\( x \\)-values; \\( x = 2 \\) is a double root.'
                },
                {
                    stepNumber: 4,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Crosses at } x = -1, 0; \\text{ touches at } x = 2',
                    explanation: 'The curve rises from bottom-left, crosses at \\( -1 \\) and \\( 0 \\), bounces off \\( x = 2 \\), then rises to the right.',
                    diagram: {
                        xMin: -2, xMax: 3.5, yMin: -10, yMax: 30,
                        xTicks: [-1, 1, 2, 3], yTicks: [-5, 5, 10, 20],
                        curves: [{ points: sample((x) => 3 * x * (x - 2) * (x - 2) * (x + 1), -2, 3.5, 100), color: "#1d4ed8", label: "y = 3x(x-2)^2(x+1)", labelAt: [-1.9, 28] }],
                        points: [
                            { at: [-1, 0], label: "(-1,\\,0)", labelAnchor: "sw" },
                            { at: [0, 0], label: "(0,\\,0)", labelAnchor: "ne" },
                            { at: [2, 0], label: "(2,\\,0)", labelAnchor: "se" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Quartic crossing at \\(x = -1, 0\\), touching at \\(x = 2\\); \\(y\\)-intercept at origin; u-shape.'
        }
    },

    {
        id: 'cg5-021',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 21',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = -x^2(x - 4)^2 \\), showing all intercepts and the nature of each root.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'quartic', 'two double roots', 'negative leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: '-x^2 \\cdot x^2 = -x^4 \\quad (\\text{negative})',
                    explanation: 'Even degree, negative leading coefficient: n-shape (opens downward).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'y = -(0)^2(0-4)^2 = 0',
                    explanation: 'Passes through the origin.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( x \\)-intercepts.',
                    workingLatex: 'x = 0 \\;(\\text{double, touches}); \\quad x = 4 \\;(\\text{double, touches})',
                    explanation: 'Both roots are double: the curve touches the axis at both but does not cross.'
                },
                {
                    stepNumber: 4,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Touches at } x = 0 \\text{ and } x = 4; \\text{ lies below }x\\text{-axis between them}',
                    explanation: 'The curve is entirely on or below the \\( x \\)-axis (since \\( y \\leq 0 \\) for all \\( x \\)).',
                    diagram: {
                        xMin: -2, xMax: 6, yMin: -25, yMax: 5,
                        xTicks: [-1, 1, 2, 3, 4, 5], yTicks: [-20, -15, -10, -5],
                        curves: [{ points: sample((x) => -x * x * (x - 4) * (x - 4), -1.7, 5.7, 100), color: "#1d4ed8", label: "y = -x^2(x-4)^2", labelAt: [-1.9, 3] }],
                        points: [
                            { at: [0, 0], label: "(0,\\,0)", labelAnchor: "nw" },
                            { at: [4, 0], label: "(4,\\,0)", labelAnchor: "ne" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Quartic touching \\(x\\)-axis at \\(x = 0\\) and \\(x = 4\\); curve lies on or below \\(x\\)-axis; n-shape.'
        }
    },

    {
        id: 'cg5-022',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 22',
        difficulty: 'Foundation',
        questionText: 'a) Factorise \\( x^4 - 5x^2 + 4 \\) completely.\n\nb) Hence sketch the graph of \\( y = x^4 - 5x^2 + 4 \\), showing where it meets the axes.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'quartic', 'substitution', 'factorising', 'symmetric'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: let \\( u = x^2 \\).',
                    workingLatex: 'u^2 - 5u + 4 = (u-1)(u-4)',
                    explanation: 'Factors of 4 that add to \\(-5\\): \\(-1\\) and \\(-4\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Replace \\( u \\) with \\( x^2 \\) and factorise further.',
                    workingLatex: '(x^2 - 1)(x^2 - 4) = (x-1)(x+1)(x-2)(x+2)',
                    explanation: 'Each quadratic factor is a difference of two squares.'
                },
                {
                    stepNumber: 3,
                    description: 'Part b: find the \\( x \\)-intercepts.',
                    workingLatex: 'x = \\pm 1,\\ \\pm 2',
                    explanation: 'Four distinct roots, symmetric about the \\( y \\)-axis.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'y = 0 - 0 + 4 = 4',
                    explanation: 'Substitute \\( x = 0 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Describe the shape.',
                    workingLatex: 'x^4 \\text{ has positive coefficient: u-shape overall}',
                    explanation: 'The curve rises from bottom-left and bottom-right, crossing at \\( \\pm 1 \\) and \\( \\pm 2 \\).',
                    diagram: {
                        xMin: -3, xMax: 3, yMin: -3, yMax: 10,
                        xTicks: [-2, -1, 1, 2], yTicks: [-2, 2, 4, 6, 8],
                        curves: [{ points: sample((x) => x * x * x * x - 5 * x * x + 4, -3, 3, 100), color: "#1d4ed8", label: "y = x^4 - 5x^2 + 4", labelAt: [-2.9, 9] }],
                        points: [
                            { at: [-2, 0], label: "(-2,\\,0)", labelAnchor: "sw" },
                            { at: [-1, 0], label: "(-1,\\,0)", labelAnchor: "n" },
                            { at: [1, 0], label: "(1,\\,0)", labelAnchor: "n" },
                            { at: [2, 0], label: "(2,\\,0)", labelAnchor: "se" },
                            { at: [0, 4], label: "(0,\\,4)", labelAnchor: "e" },
                        ],
                    }
                }
            ],
            finalAnswer: 'a) \\((x-1)(x+1)(x-2)(x+2)\\); b) Quartic crossing at \\(\\pm 1, \\pm 2\\); \\(y\\)-intercept \\((0, 4)\\); u-shape.'
        }
    },

    // ── Type E: Reciprocal functions (Q23–Q29) ────────────────────────────────

    {
        id: 'cg5-023',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 23',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = \\dfrac{4}{x} \\), stating the equations of the asymptotes and the coordinates of the points where \\( x = 1 \\) and \\( x = -1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'reciprocal', 'asymptote', 'hyperbola', 'odd power'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the form: \\( y = kx^{-1} \\) with \\( k = 4 > 0 \\) and odd power.',
                    workingLatex: 'y = 4x^{-1}',
                    explanation: 'Odd power, positive \\( k \\): graph in top-right and bottom-left quadrants.'
                },
                {
                    stepNumber: 2,
                    description: 'State the asymptotes.',
                    workingLatex: 'x = 0 \\quad \\text{and} \\quad y = 0',
                    explanation: 'Reciprocal functions never touch the axes — these are the asymptotes.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the point where \\( x = 1 \\).',
                    workingLatex: 'y = \\frac{4}{1} = 4 \\implies (1, 4)',
                    explanation: 'Substitute \\( x = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the point where \\( x = -1 \\).',
                    workingLatex: 'y = \\frac{4}{-1} = -4 \\implies (-1, -4)',
                    explanation: 'By symmetry, \\( (-1, -4) \\) lies on the lower-left branch.',
                    diagram: {
                        xMin: -8, xMax: 8, yMin: -10, yMax: 10,
                        xTicks: [-4, -2, -1, 1, 2, 4], yTicks: [-8, -4, 4, 8],
                        curves: [
                            { points: sample((x) => 4 / x, -8, -0.4, 80), color: "#1d4ed8", label: "y = \\dfrac{4}{x}", labelAt: [-7.5, -8] },
                            { points: sample((x) => 4 / x, 0.4, 8, 80), color: "#1d4ed8" },
                        ],
                        points: [
                            { at: [1, 4], label: "(1,\\,4)", labelAnchor: "ne" },
                            { at: [-1, -4], label: "(-1,\\,-4)", labelAnchor: "sw" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Asymptotes \\(x = 0, y = 0\\); passes through \\((1, 4)\\) and \\((-1, -4)\\); two branches in top-right and bottom-left quadrants.'
        }
    },

    {
        id: 'cg5-024',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 24',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = -\\dfrac{5}{x} \\), stating the asymptotes and the coordinates where \\( x = 1 \\) and \\( x = -1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'reciprocal', 'negative', 'asymptote', 'odd power'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify: \\( y = -5x^{-1} \\), odd power, negative \\( k \\).',
                    workingLatex: 'k = -5 < 0, \\quad n = 1 \\text{ (odd)}',
                    explanation: 'Odd power, negative \\( k \\): graph in top-left and bottom-right quadrants.'
                },
                {
                    stepNumber: 2,
                    description: 'State the asymptotes.',
                    workingLatex: 'x = 0 \\quad \\text{and} \\quad y = 0',
                    explanation: 'Same asymptotes as all basic reciprocal functions.'
                },
                {
                    stepNumber: 3,
                    description: 'Point at \\( x = 1 \\).',
                    workingLatex: 'y = -\\frac{5}{1} = -5 \\implies (1, -5)',
                    explanation: 'This lies in the bottom-right quadrant.'
                },
                {
                    stepNumber: 4,
                    description: 'Point at \\( x = -1 \\).',
                    workingLatex: 'y = -\\frac{5}{-1} = 5 \\implies (-1, 5)',
                    explanation: 'This lies in the top-left quadrant.',
                    diagram: {
                        xMin: -8, xMax: 8, yMin: -12, yMax: 12,
                        xTicks: [-4, -2, -1, 1, 2, 4], yTicks: [-10, -5, 5, 10],
                        curves: [
                            { points: sample((x) => -5 / x, -8, -0.5, 80), color: "#1d4ed8", label: "y = -\\dfrac{5}{x}", labelAt: [-7.5, 10] },
                            { points: sample((x) => -5 / x, 0.5, 8, 80), color: "#1d4ed8" },
                        ],
                        points: [
                            { at: [1, -5], label: "(1,\\,-5)", labelAnchor: "se" },
                            { at: [-1, 5], label: "(-1,\\,5)", labelAnchor: "nw" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Asymptotes \\(x = 0, y = 0\\); passes through \\((1, -5)\\) and \\((-1, 5)\\); branches in top-left and bottom-right.'
        }
    },

    {
        id: 'cg5-025',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 25',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = \\dfrac{3}{x^2} \\), stating the asymptotes and the points where \\( x = 1 \\) and \\( x = -1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'reciprocal', 'even power', 'asymptote', 'positive'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify: \\( y = 3x^{-2} \\), even power, positive \\( k \\).',
                    workingLatex: 'k = 3 > 0, \\quad n = 2 \\text{ (even)}',
                    explanation: 'Even power, positive \\( k \\): both branches above the \\( x \\)-axis.'
                },
                {
                    stepNumber: 2,
                    description: 'State the asymptotes.',
                    workingLatex: 'x = 0 \\quad \\text{and} \\quad y = 0',
                    explanation: 'The curve approaches both axes but never touches them.'
                },
                {
                    stepNumber: 3,
                    description: 'Points at \\( x = \\pm 1 \\).',
                    workingLatex: 'y = \\frac{3}{1} = 3 \\implies (1, 3) \\text{ and } (-1, 3)',
                    explanation: 'Even power means \\( x \\) and \\( -x \\) give the same \\( y \\)-value: the graph is symmetric about the \\( y \\)-axis.'
                },
                {
                    stepNumber: 4,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Two branches, both above }x\\text{-axis, symmetric about }y\\text{-axis}',
                    explanation: 'Both branches approach the asymptotes as \\( x \\to 0 \\) and as \\( x \\to \\pm\\infty \\).',
                    diagram: {
                        xMin: -6, xMax: 6, yMin: -2, yMax: 10,
                        xTicks: [-4, -2, -1, 1, 2, 4], yTicks: [2, 4, 6, 8],
                        curves: [
                            { points: sample((x) => 3 / (x * x), -6, -0.6, 80), color: "#1d4ed8", label: "y = \\dfrac{3}{x^2}", labelAt: [-5.5, 8] },
                            { points: sample((x) => 3 / (x * x), 0.6, 6, 80), color: "#1d4ed8" },
                        ],
                        points: [
                            { at: [1, 3], label: "(1,\\,3)", labelAnchor: "ne" },
                            { at: [-1, 3], label: "(-1,\\,3)", labelAnchor: "nw" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Asymptotes \\(x = 0, y = 0\\); passes through \\((\\pm 1, 3)\\); both branches above \\(x\\)-axis; symmetric about \\(y\\)-axis.'
        }
    },

    {
        id: 'cg5-026',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 26',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = -\\dfrac{2}{x^4} \\), stating the asymptotes and the points where \\( x = 1 \\) and \\( x = -1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'reciprocal', 'even power', 'negative', 'asymptote'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify: \\( y = -2x^{-4} \\), even power, negative \\( k \\).',
                    workingLatex: 'k = -2 < 0, \\quad n = 4 \\text{ (even)}',
                    explanation: 'Even power, negative \\( k \\): both branches below the \\( x \\)-axis.'
                },
                {
                    stepNumber: 2,
                    description: 'State the asymptotes.',
                    workingLatex: 'x = 0 \\quad \\text{and} \\quad y = 0',
                    explanation: 'Standard asymptotes for all reciprocal functions of this type.'
                },
                {
                    stepNumber: 3,
                    description: 'Points at \\( x = \\pm 1 \\).',
                    workingLatex: 'y = -\\frac{2}{1^4} = -2 \\implies (1, -2) \\text{ and } (-1, -2)',
                    explanation: 'Both points at \\( y = -2 \\) by symmetry.'
                },
                {
                    stepNumber: 4,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Two branches, both below }x\\text{-axis, symmetric about }y\\text{-axis}',
                    explanation: 'The entire graph lies below the \\( x \\)-axis.',
                    diagram: {
                        xMin: -3, xMax: 3, yMin: -8, yMax: 2,
                        xTicks: [-2, -1, 1, 2], yTicks: [-6, -4, -2],
                        curves: [
                            { points: sample((x) => -2 / Math.pow(x, 4), -3, -0.65, 80), color: "#1d4ed8", label: "y = -\\dfrac{2}{x^4}", labelAt: [-2.9, 1] },
                            { points: sample((x) => -2 / Math.pow(x, 4), 0.65, 3, 80), color: "#1d4ed8" },
                        ],
                        points: [
                            { at: [1, -2], label: "(1,\\,-2)", labelAnchor: "se" },
                            { at: [-1, -2], label: "(-1,\\,-2)", labelAnchor: "sw" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Asymptotes \\(x = 0, y = 0\\); passes through \\((\\pm 1, -2)\\); both branches below \\(x\\)-axis.'
        }
    },

    {
        id: 'cg5-027',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 27',
        difficulty: 'Foundation',
        questionText: 'Sketch the graphs of \\( y = \\dfrac{6}{x} \\) and \\( y = \\dfrac{6}{x^2} \\) on the same axes, for \\( x > 0 \\). State one key difference between the two graphs in the first quadrant.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'reciprocal', 'compare', 'odd vs even power'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Sketch \\( y = \\frac{6}{x} \\) for \\( x > 0 \\).',
                    workingLatex: 'x = 1 \\Rightarrow y = 6; \\quad x = 2 \\Rightarrow y = 3; \\quad x = 6 \\Rightarrow y = 1',
                    explanation: 'This is a standard hyperbola branch in the first quadrant.'
                },
                {
                    stepNumber: 2,
                    description: 'Sketch \\( y = \\frac{6}{x^2} \\) for \\( x > 0 \\).',
                    workingLatex: 'x = 1 \\Rightarrow y = 6; \\quad x = 2 \\Rightarrow y = 1.5; \\quad x = 3 \\Rightarrow y = \\tfrac{2}{3}',
                    explanation: 'This curve falls more steeply because \\( x^2 \\) grows faster than \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Both pass through \\( (1, 6) \\); compare their rates of decrease.',
                    workingLatex: '\\frac{6}{x^2} < \\frac{6}{x} \\text{ for } x > 1',
                    explanation: 'The \\( x^{-2} \\) curve decreases more rapidly than the \\( x^{-1} \\) curve.'
                },
                {
                    stepNumber: 4,
                    description: 'State the key difference.',
                    workingLatex: 'y = \\frac{6}{x^2} \\text{ falls more steeply than } y = \\frac{6}{x} \\text{ for } x > 1',
                    explanation: 'Both have the same asymptotes, but the \\( 1/x^2 \\) curve approaches zero faster.',
                    diagram: {
                        xMin: 0, xMax: 7, yMin: 0, yMax: 12,
                        xTicks: [1, 2, 3, 4, 5, 6], yTicks: [2, 4, 6, 8, 10],
                        curves: [
                            { points: sample((x) => 6 / x, 0.55, 7, 80), color: "#1d4ed8", label: "y = \\dfrac{6}{x}", labelAt: [3.5, 4] },
                            { points: sample((x) => 6 / (x * x), 0.75, 7, 80), color: "#dc2626", label: "y = \\dfrac{6}{x^2}", labelAt: [2, 8] },
                        ],
                        points: [
                            { at: [1, 6], label: "(1,\\,6)", labelAnchor: "ne" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Both curves pass through \\((1,6)\\) and have asymptotes \\(x=0, y=0\\). The graph of \\(y = \\frac{6}{x^2}\\) decreases more steeply for \\(x > 1\\).'
        }
    },

    {
        id: 'cg5-028',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 28',
        difficulty: 'Foundation',
        questionText: 'Match each function below to the correct description of its graph.\n\nFunctions: \\( y = 5x^{-3} \\), \\( y = -\\dfrac{1}{x^2} \\), \\( y = \\dfrac{7}{x^4} \\), \\( y = -4x^{-5} \\)\n\nDescriptions:\n- P: both branches above the \\( x \\)-axis, side by side\n- Q: top-left and bottom-right quadrant branches\n- R: top-right and bottom-left quadrant branches\n- S: both branches below the \\( x \\)-axis, side by side',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'reciprocal', 'matching', 'even power', 'odd power'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '\\( y = 5x^{-3} \\): odd power (3), positive \\( k \\).',
                    workingLatex: '\\text{Odd, positive} \\Rightarrow \\text{top-right and bottom-left} \\Rightarrow R',
                    explanation: 'Odd power with positive coefficient gives the standard hyperbola orientation.'
                },
                {
                    stepNumber: 2,
                    description: '\\( y = -\\frac{1}{x^2} \\): even power (2), negative \\( k \\).',
                    workingLatex: '\\text{Even, negative} \\Rightarrow \\text{both branches below} \\Rightarrow S',
                    explanation: 'Even power means side-by-side branches; negative means below the axis.'
                },
                {
                    stepNumber: 3,
                    description: '\\( y = \\frac{7}{x^4} \\): even power (4), positive \\( k \\).',
                    workingLatex: '\\text{Even, positive} \\Rightarrow \\text{both branches above} \\Rightarrow P',
                    explanation: 'Even power means side-by-side; positive means above the axis.'
                },
                {
                    stepNumber: 4,
                    description: '\\( y = -4x^{-5} \\): odd power (5), negative \\( k \\).',
                    workingLatex: '\\text{Odd, negative} \\Rightarrow \\text{top-left and bottom-right} \\Rightarrow Q',
                    explanation: 'Odd power with negative coefficient flips the standard orientation.'
                }
            ],
            finalAnswer: '\\(5x^{-3} \\to R\\); \\(-1/x^2 \\to S\\); \\(7/x^4 \\to P\\); \\(-4x^{-5} \\to Q\\)'
        }
    },

    {
        id: 'cg5-029',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 29',
        difficulty: 'Foundation',
        questionText: 'a) Sketch the graphs of \\( y = \\dfrac{2}{x^2} \\) and \\( y = -x^2 + 3 \\) on the same axes.\n\nb) Hence state the number of real solutions to \\( \\dfrac{2}{x^2} = -x^2 + 3 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'reciprocal', 'intersections', 'simultaneous graphical'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Sketch \\( y = \\frac{2}{x^2} \\).',
                    workingLatex: '\\text{Even power, positive }k: \\text{ both branches above }x\\text{-axis; asymptotes } x=0, y=0',
                    explanation: 'Passes through \\( (1, 2) \\) and \\( (-1, 2) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Sketch \\( y = -x^2 + 3 \\).',
                    workingLatex: '\\text{Downward parabola; vertex at } (0, 3); \\text{ crosses }x\\text{-axis at } x = \\pm\\sqrt{3}',
                    explanation: 'This is an inverted parabola with \\( y \\)-intercept 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve the equation algebraically to confirm the count.',
                    workingLatex: '\\tfrac{2}{x^2} = -x^2 + 3 \\implies 2 = -x^4 + 3x^2 \\implies x^4 - 3x^2 + 2 = 0',
                    explanation: 'Multiply both sides by \\( x^2 \\) (valid since \\( x \\neq 0 \\) — the reciprocal curve excludes this) and rearrange. This is a quadratic in \\( x^2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise and solve.',
                    workingLatex: '(x^2 - 1)(x^2 - 2) = 0 \\implies x = \\pm 1,\\ \\pm\\sqrt{2}',
                    explanation: 'Each value of \\( x^2 \\) gives two real \\( x \\)-values, so there are four real solutions. Graphically, the parabola and the reciprocal curve cross twice on each side of the \\( y \\)-axis.'
                },
                {
                    stepNumber: 5,
                    description: 'State the conclusion.',
                    workingLatex: '\\Rightarrow 4 \\text{ real solutions}',
                    explanation: 'Each intersection of the graphs corresponds to one real solution of the equation.',
                    diagram: {
                        xMin: -3, xMax: 3, yMin: -4, yMax: 7,
                        xTicks: [-2, -1, 1, 2], yTicks: [-3, -2, -1, 1, 2, 3, 4, 5, 6],
                        curves: [
                            { points: sample((x) => 2 / (x * x), -3, -0.6, 80), color: "#1d4ed8", label: "y = \\dfrac{2}{x^2}", labelAt: [-2.9, 6] },
                            { points: sample((x) => 2 / (x * x), 0.6, 3, 80), color: "#1d4ed8" },
                            { points: sample((x) => -x * x + 3, -3, 3, 80), color: "#dc2626", label: "y = -x^2 + 3", labelAt: [1.5, 3] },
                        ],
                        points: [
                            { at: [1, 2], r: 3.5 },
                            { at: [-1, 2], r: 3.5 },
                            { at: [Math.SQRT2, 1], r: 3.5 },
                            { at: [-Math.SQRT2, 1], r: 3.5 },
                        ],
                    }
                }
            ],
            finalAnswer: 'The equation has \\(4\\) real solutions: \\(x = \\pm 1, \\pm\\sqrt{2}\\).'
        }
    },

    // ── Type F: Mixed and multi-part exam-style (Q30–Q35) ────────────────────

    {
        id: 'cg5-030',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 30',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = (4 - x)(x + 1)^2 \\), showing all intercepts and describing the behaviour at each root.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'cubic', 'double root', 'negative leading coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Determine the leading term.',
                    workingLatex: '(4-x)(x+1)^2 \\approx (-x)(x^2) = -x^3 \\quad (\\text{for large }|x|)',
                    explanation: 'Negative leading coefficient: top-left to bottom-right shape.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'y = (4)(1)^2 = 4',
                    explanation: 'Substitute \\( x = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( x \\)-intercepts and their nature.',
                    workingLatex: '4 - x = 0 \\Rightarrow x = 4 \\;(\\text{crosses}); \\quad (x+1)^2 = 0 \\Rightarrow x = -1 \\;(\\text{double, touches})',
                    explanation: 'Single root at \\( x = 4 \\), double root at \\( x = -1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Enters top-left, touches } (-1,0), \\text{ passes through } (0,4), \\text{ crosses } (4,0), \\text{ falls bottom-right}',
                    explanation: 'The curve bounces off the axis at \\( x = -1 \\) and cuts through at \\( x = 4 \\).',
                    diagram: {
                        xMin: -3, xMax: 6, yMin: -25, yMax: 25,
                        xTicks: [-2, -1, 1, 2, 3, 4, 5], yTicks: [-20, -10, 10, 20],
                        curves: [{ points: sample((x) => (4 - x) * (x + 1) * (x + 1), -3, 6, 100), color: "#1d4ed8", label: "y = (4-x)(x+1)^2", labelAt: [-2.9, 23] }],
                        points: [
                            { at: [-1, 0], label: "(-1,\\,0)", labelAnchor: "nw" },
                            { at: [4, 0], label: "(4,\\,0)", labelAnchor: "ne" },
                            { at: [0, 4], label: "(0,\\,4)", labelAnchor: "w" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Cubic touching at \\(x = -1\\), crossing at \\(x = 4\\); \\(y\\)-intercept at \\((0, 4)\\); top-left to bottom-right shape.'
        }
    },

    {
        id: 'cg5-031',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 31',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = x^4 - 16 \\), showing where it meets the coordinate axes.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'quartic', 'difference of two squares', 'y-intercept', 'roots'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the shape.',
                    workingLatex: 'x^4 \\text{ with positive coefficient: u-shape}',
                    explanation: 'Even degree, positive leading coefficient.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'y = 0 - 16 = -16',
                    explanation: 'Substitute \\( x = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( x \\)-intercepts by factorising.',
                    workingLatex: 'x^4 - 16 = (x^2 - 4)(x^2 + 4) = (x-2)(x+2)(x^2+4)',
                    explanation: '\\( x^2 + 4 = 0 \\) has no real solutions, so only real roots are \\( x = \\pm 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Crosses } x\\text{-axis at } \\pm 2; \\; y\\text{-intercept at } (0,-16)',
                    explanation: 'The curve crosses the \\( x \\)-axis at two points, dips to \\( -16 \\) at the origin.',
                    diagram: {
                        xMin: -3, xMax: 3, yMin: -25, yMax: 50,
                        xTicks: [-2, -1, 1, 2], yTicks: [-16, -10, 10, 20, 30, 40],
                        curves: [{ points: sample((x) => x * x * x * x - 16, -3, 3, 80), color: "#1d4ed8", label: "y = x^4 - 16", labelAt: [-2.9, 45] }],
                        points: [
                            { at: [-2, 0], label: "(-2,\\,0)", labelAnchor: "nw" },
                            { at: [2, 0], label: "(2,\\,0)", labelAnchor: "ne" },
                            { at: [0, -16], label: "(0,\\,-16)", labelAnchor: "e" },
                        ],
                    }
                }
            ],
            finalAnswer: 'Quartic crossing at \\(x = \\pm 2\\); \\(y\\)-intercept at \\((0, -16)\\); u-shape.'
        }
    },

    {
        id: 'cg5-032',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 32',
        difficulty: 'Foundation',
        questionText: 'a) Factorise completely \\( y = x^3 - 4x^2 + 4x \\).\n\nb) Sketch the graph, showing all intercepts and describing the nature of each root.\n\nc) Write down the number of distinct real roots of \\( x^3 - 4x^2 + 4x = 0 \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'cubic', 'double root', 'factorising', 'exam-style', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: take out the common factor \\( x \\).',
                    workingLatex: 'x^3 - 4x^2 + 4x = x(x^2 - 4x + 4)',
                    explanation: 'Every term contains \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 4x + 4 = (x - 2)^2',
                    explanation: 'Perfect square trinomial: \\( (x-2)^2 = x^2 - 4x + 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the full factorisation.',
                    workingLatex: 'x(x-2)^2',
                    explanation: 'Single root at \\( x = 0 \\), double root at \\( x = 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Part b: find intercepts.',
                    workingLatex: 'x = 0 \\;(\\text{crosses}); \\quad x = 2 \\;(\\text{double, touches}); \\quad y(0) = 0',
                    explanation: 'Positive cubic shape (bottom-left to top-right).',
                    diagram: {
                        xMin: -2, xMax: 4, yMin: -8, yMax: 10,
                        xTicks: [-1, 1, 2, 3], yTicks: [-6, -4, -2, 2, 4, 6, 8],
                        curves: [{ points: sample((x) => x * (x - 2) * (x - 2), -2, 4, 80), color: "#1d4ed8", label: "y = x(x-2)^2", labelAt: [-1.9, 9] }],
                        points: [
                            { at: [0, 0], label: "(0,\\,0)", labelAnchor: "sw" },
                            { at: [2, 0], label: "(2,\\,0)", labelAnchor: "se" },
                        ],
                    }
                },
                {
                    stepNumber: 5,
                    description: 'Part c: count distinct real roots.',
                    workingLatex: 'x = 0 \\text{ (once)}, \\quad x = 2 \\text{ (once, even though doubled)}',
                    explanation: 'There are 2 distinct real roots: \\( x = 0 \\) and \\( x = 2 \\).'
                }
            ],
            finalAnswer: 'a) \\(x(x-2)^2\\); b) Crosses at \\(x = 0\\), touches at \\(x = 2\\); c) 2 distinct real roots.'
        }
    },

    {
        id: 'cg5-033',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 33',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = f(x) \\) is a quartic with positive leading coefficient. It crosses the \\( x \\)-axis at \\( x = -2 \\), touches the \\( x \\)-axis at \\( x = 1 \\), and crosses again at \\( x = 4 \\).\n\na) Write down a possible equation for \\( f(x) \\) in factorised form.\n\nb) Find the \\( y \\)-intercept of this graph.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'quartic', 'construct equation', 'double root', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: use the root information to write the factors.',
                    workingLatex: 'f(x) = (x + 2)(x - 1)^2(x - 4)',
                    explanation: 'Cross at \\( -2 \\) and \\( 4 \\) gives single factors; touch at \\( 1 \\) gives a squared factor. The product of four linear factors gives degree 4 with positive leading coefficient.'
                },
                {
                    stepNumber: 2,
                    description: 'Check the leading coefficient.',
                    workingLatex: 'x \\cdot x^2 \\cdot x = x^4 \\quad (\\text{positive})',
                    explanation: 'Confirmed: positive leading coefficient.'
                },
                {
                    stepNumber: 3,
                    description: 'Part b: find the \\( y \\)-intercept.',
                    workingLatex: 'f(0) = (0+2)(0-1)^2(0-4) = 2 \\times 1 \\times (-4) = -8',
                    explanation: 'Substitute \\( x = 0 \\) into the factorised equation.',
                    diagram: {
                        xMin: -3, xMax: 5, yMin: -30, yMax: 30,
                        xTicks: [-2, -1, 1, 2, 3, 4], yTicks: [-20, -10, 10, 20],
                        curves: [{ points: sample((x) => (x + 2) * (x - 1) * (x - 1) * (x - 4), -3, 5, 100), color: "#1d4ed8", label: "y = (x+2)(x-1)^2(x-4)", labelAt: [-2.9, 28] }],
                        points: [
                            { at: [-2, 0], label: "(-2,\\,0)", labelAnchor: "sw" },
                            { at: [1, 0], label: "(1,\\,0)", labelAnchor: "n" },
                            { at: [4, 0], label: "(4,\\,0)", labelAnchor: "se" },
                            { at: [0, -8], label: "(0,\\,-8)", labelAnchor: "e" },
                        ],
                    }
                }
            ],
            finalAnswer: 'a) \\(f(x) = (x+2)(x-1)^2(x-4)\\); b) \\(y\\)-intercept at \\((0, -8)\\).'
        }
    },

    {
        id: 'cg5-034',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 34',
        difficulty: 'Foundation',
        questionText: 'a) On the same axes, sketch the graphs of \\( y = \\dfrac{1}{x^3} \\) and \\( y = x^3 \\).\n\nb) State the number of real solutions to \\( \\dfrac{1}{x^3} = x^3 \\), and find them.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'reciprocal', 'cubic', 'intersections', 'simultaneous graphical', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: sketch \\( y = x^3 \\).',
                    workingLatex: '\\text{Odd power, positive: bottom-left to top-right; passes through origin}',
                    explanation: 'Standard cubic shape through \\( (-1,-1), (0,0), (1,1) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Sketch \\( y = \\frac{1}{x^3} = x^{-3} \\).',
                    workingLatex: '\\text{Odd power, positive: top-right and bottom-left quadrants; asymptotes } x=0, y=0',
                    explanation: 'Passes through \\( (1,1) \\) and \\( (-1,-1) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part b: find intersections algebraically.',
                    workingLatex: '\\frac{1}{x^3} = x^3 \\implies x^6 = 1 \\implies x = \\pm 1',
                    explanation: 'Multiply both sides by \\( x^3 \\) (note \\( x \\neq 0 \\)), then solve \\( x^6 = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Check: \\( x = 1 \\) gives \\( y = 1 \\); \\( x = -1 \\) gives \\( y = -1 \\).',
                    workingLatex: '\\text{Intersections at } (1, 1) \\text{ and } (-1, -1)',
                    explanation: 'Both solutions confirmed.',
                    diagram: {
                        xMin: -2.5, xMax: 2.5, yMin: -4, yMax: 4,
                        xTicks: [-2, -1, 1, 2], yTicks: [-3, -2, -1, 1, 2, 3],
                        curves: [
                            { points: sample((x) => x * x * x, -1.5, 1.5, 80), color: "#1d4ed8", label: "y = x^3", labelAt: [1.4, 3] },
                            { points: sample((x) => 1 / (x * x * x), -2.5, -0.45, 80), color: "#dc2626", label: "y = \\dfrac{1}{x^3}", labelAt: [-2.4, -2.5] },
                            { points: sample((x) => 1 / (x * x * x), 0.45, 2.5, 80), color: "#dc2626" },
                        ],
                        points: [
                            { at: [1, 1], label: "(1,\\,1)", labelAnchor: "ne" },
                            { at: [-1, -1], label: "(-1,\\,-1)", labelAnchor: "sw" },
                        ],
                    }
                }
            ],
            finalAnswer: 'b) 2 real solutions: \\(x = 1\\) and \\(x = -1\\).'
        }
    },

    {
        id: 'cg5-035',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 35',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = x^4 - 10x^3 + 35x^2 - 50x + 24 \\) has four positive integer roots.\n\na) By trying small positive integers, find all four roots.\n\nb) Write the function in fully factorised form.\n\nc) Sketch the graph, showing all intercepts.',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: ['curve sketching', 'quartic', 'integer roots', 'factorising', 'problem solving', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: try \\( x = 1 \\).',
                    workingLatex: '1 - 10 + 35 - 50 + 24 = 0 \\checkmark',
                    explanation: '\\( x = 1 \\) is a root.'
                },
                {
                    stepNumber: 2,
                    description: 'Try \\( x = 2 \\).',
                    workingLatex: '16 - 80 + 140 - 100 + 24 = 0 \\checkmark',
                    explanation: '\\( x = 2 \\) is a root.'
                },
                {
                    stepNumber: 3,
                    description: 'Try \\( x = 3 \\).',
                    workingLatex: '81 - 270 + 315 - 150 + 24 = 0 \\checkmark',
                    explanation: '\\( x = 3 \\) is a root.'
                },
                {
                    stepNumber: 4,
                    description: 'By Vieta\'s formulas (sum of roots = 10), find the fourth root.',
                    workingLatex: '1 + 2 + 3 + r_4 = 10 \\implies r_4 = 4',
                    explanation: 'The sum of the roots of a monic quartic equals the negative of the \\( x^3 \\) coefficient: \\( -(-10) = 10 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Part b: write the factorised form.',
                    workingLatex: 'y = (x-1)(x-2)(x-3)(x-4)',
                    explanation: 'Verify by noting the product of roots \\( = 1 \\times 2 \\times 3 \\times 4 = 24 \\) matches the constant term. \\( \\checkmark \\)'
                },
                {
                    stepNumber: 6,
                    description: 'Part c: find the \\( y \\)-intercept and describe the sketch.',
                    workingLatex: 'y(0) = (-1)(-2)(-3)(-4) = 24',
                    explanation: 'Positive leading coefficient (\\( x^4 \\)), u-shape overall. Crosses at \\( x = 1, 2, 3, 4 \\); \\( y \\)-intercept at \\( 24 \\).',
                    diagram: {
                        xMin: -0.5, xMax: 5.5, yMin: -5, yMax: 30,
                        xTicks: [1, 2, 3, 4, 5], yTicks: [-4, -2, 5, 10, 15, 20, 25],
                        curves: [{ points: sample((x) => (x - 1) * (x - 2) * (x - 3) * (x - 4), -0.5, 5.5, 120), color: "#1d4ed8", label: "y = (x-1)(x-2)(x-3)(x-4)", labelAt: [-0.4, 28] }],
                        points: [
                            { at: [1, 0], label: "(1,\\,0)", labelAnchor: "sw" },
                            { at: [2, 0], label: "(2,\\,0)", labelAnchor: "n" },
                            { at: [3, 0], label: "(3,\\,0)", labelAnchor: "n" },
                            { at: [4, 0], label: "(4,\\,0)", labelAnchor: "se" },
                            { at: [0, 24], label: "(0,\\,24)", labelAnchor: "e" },
                        ],
                    }
                }
            ],
            finalAnswer: 'a) Roots: \\(1, 2, 3, 4\\); b) \\(y = (x-1)(x-2)(x-3)(x-4)\\); c) Quartic crossing at \\(x = 1,2,3,4\\); \\(y\\)-intercept at \\((0, 24)\\); u-shape.'
        }
    },

    // ─── Q36–70: Additional Curve Sketching Questions ──────────────────────

    {
        id: 'cg5-036', topicRef: 'cg5', topicTitle: 'Curve Sketching 36', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^2 - 4 \\), showing the intercepts with both axes.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'y-intercept: set x = 0', workingLatex: 'y = -4', explanation: 'Substituting \\( x = 0 \\) into \\( y = x^2 - 4 \\) gives the \\( y \\)-axis crossing.' },
            { stepNumber: 2, description: 'x-intercepts: set y = 0', workingLatex: 'x^2 = 4 \\implies x = \\pm 2', explanation: 'Take square roots of both sides — remember the \\( \\pm \\) because both \\( 2 \\) and \\( -2 \\) square to \\( 4 \\).' },
            { stepNumber: 3, description: 'Shape', workingLatex: '\\text{U-shape, vertex at } (0, -4)', explanation: 'Positive coefficient of \\( x^2 \\) gives a u-shape; the curve \\( y = x^2 - 4 \\) is \\( y = x^2 \\) shifted down by 4, so the vertex moves from \\( (0,0) \\) to \\( (0,-4) \\).',
                diagram: {
                    xMin: -4, xMax: 4, yMin: -6, yMax: 12,
                    xTicks: [-3, -2, -1, 1, 2, 3], yTicks: [-4, -2, 2, 4, 6, 8, 10],
                    curves: [{ points: sample((x) => x * x - 4, -4, 4, 80), color: "#1d4ed8", label: "y = x^2 - 4", labelAt: [-3.9, 11] }],
                    points: [
                        { at: [-2, 0], label: "(-2,\\,0)", labelAnchor: "nw" },
                        { at: [2, 0], label: "(2,\\,0)", labelAnchor: "ne" },
                        { at: [0, -4], label: "(0,\\,-4)", labelAnchor: "e" },
                    ],
                }
            }
        ], finalAnswer: 'U-shape; roots at \\((-2,0)\\) and \\((2,0)\\); \\(y\\)-intercept \\((0,-4)\\)' }
    },
    {
        id: 'cg5-037', topicRef: 'cg5', topicTitle: 'Curve Sketching 37', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = (x-1)(x+3) \\), showing all intercepts and the vertex.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'x-intercepts', workingLatex: 'x = 1 \\text{ and } x = -3', explanation: 'Setting \\( y = 0 \\), each factor must equal zero, giving the two roots directly from the factorised form.' },
            { stepNumber: 2, description: 'y-intercept', workingLatex: 'y = (-1)(3) = -3', explanation: 'Substitute \\( x = 0 \\) into the factorised form: \\( (0-1)(0+3) = (-1)(3) \\).' },
            { stepNumber: 3, description: 'Vertex (midpoint of roots)', workingLatex: 'x = \\frac{1+(-3)}{2} = -1; \\quad y = (-2)(2) = -4', explanation: 'A parabola is symmetric, so its vertex sits at the midpoint of the two roots. Substituting \\( x = -1 \\) back into the factored form gives the \\( y \\)-coordinate.',
                diagram: {
                    xMin: -5, xMax: 3, yMin: -6, yMax: 10,
                    xTicks: [-4, -3, -2, -1, 1, 2], yTicks: [-4, -2, 2, 4, 6, 8],
                    curves: [{ points: sample((x) => (x - 1) * (x + 3), -5, 3, 80), color: "#1d4ed8", label: "y = (x-1)(x+3)", labelAt: [-4.9, 9] }],
                    points: [
                        { at: [1, 0], label: "(1,\\,0)", labelAnchor: "ne" },
                        { at: [-3, 0], label: "(-3,\\,0)", labelAnchor: "nw" },
                        { at: [-1, -4], label: "(-1,\\,-4)", labelAnchor: "s" },
                        { at: [0, -3], label: "(0,\\,-3)", labelAnchor: "e" },
                    ],
                }
            }
        ], finalAnswer: 'U-shape; roots \\((1,0)\\), \\((-3,0)\\); vertex \\((-1,-4)\\); \\(y\\)-int \\((0,-3)\\)' }
    },
    {
        id: 'cg5-038', topicRef: 'cg5', topicTitle: 'Curve Sketching 38', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = -x^2 + 6x - 5 \\), showing the vertex and all intercepts.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise', workingLatex: 'y = -(x-1)(x-5)', explanation: 'Factor out \\(-1\\) to get \\( -(x^2 - 6x + 5) \\), then factorise the bracket: numbers multiplying to \\(5\\) and adding to \\(-6\\) are \\(-1\\) and \\(-5\\).' },
            { stepNumber: 2, description: 'Vertex', workingLatex: 'x = 3; \\quad y = -9 + 18 - 5 = 4', explanation: 'Negative coefficient of \\( x^2 \\) means the parabola opens downwards, so the vertex is the maximum. It sits on the axis of symmetry midway between the roots: \\( x = \\tfrac{1+5}{2} = 3 \\).' },
            { stepNumber: 3, description: 'y-intercept', workingLatex: 'y = -5', explanation: 'Substitute \\( x = 0 \\) into \\( y = -x^2 + 6x - 5 \\) to get the constant term \\(-5\\).',
                diagram: {
                    xMin: -1, xMax: 7, yMin: -8, yMax: 6,
                    xTicks: [1, 2, 3, 4, 5, 6], yTicks: [-6, -4, -2, 2, 4],
                    curves: [{ points: sample((x) => -x * x + 6 * x - 5, -1, 7, 80), color: "#1d4ed8", label: "y = -x^2 + 6x - 5", labelAt: [4, 5] }],
                    points: [
                        { at: [1, 0], label: "(1,\\,0)", labelAnchor: "sw" },
                        { at: [5, 0], label: "(5,\\,0)", labelAnchor: "se" },
                        { at: [3, 4], label: "(3,\\,4)", labelAnchor: "n" },
                        { at: [0, -5], label: "(0,\\,-5)", labelAnchor: "e" },
                    ],
                }
            }
        ], finalAnswer: 'n-shape; roots \\((1,0)\\), \\((5,0)\\); vertex \\((3,4)\\); \\(y\\)-int \\((0,-5)\\)' }
    },
    {
        id: 'cg5-039', topicRef: 'cg5', topicTitle: 'Curve Sketching 39', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\frac{1}{x} \\) for \\( x > 0 \\) and \\( x < 0 \\), showing the asymptotes.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Asymptotes', workingLatex: 'x = 0 \\text{ (vertical)}, \\quad y = 0 \\text{ (horizontal)}', explanation: 'The function is undefined at \\( x = 0 \\) (vertical asymptote), and as \\( |x| \\to \\infty \\) the value \\( \\tfrac{1}{x} \\to 0 \\), giving the horizontal asymptote.' },
            { stepNumber: 2, description: 'Behaviour', workingLatex: 'x > 0: \\text{curve in 1st quadrant}; \\quad x < 0: \\text{curve in 3rd quadrant}', explanation: 'Positive \\( x \\) gives positive \\( y \\) and negative \\( x \\) gives negative \\( y \\), so the two branches lie in opposite (diagonal) quadrants.',
                diagram: {
                    xMin: -5, xMax: 5, yMin: -5, yMax: 5,
                    xTicks: [-4, -2, -1, 1, 2, 4], yTicks: [-4, -2, -1, 1, 2, 4],
                    curves: [
                        { points: sample((x) => 1 / x, -5, -0.25, 80), color: "#1d4ed8", label: "y = \\dfrac{1}{x}", labelAt: [-4.8, -3.5] },
                        { points: sample((x) => 1 / x, 0.25, 5, 80), color: "#1d4ed8" },
                    ],
                }
            }
        ], finalAnswer: 'Rectangular hyperbola with asymptotes \\(x = 0\\) and \\(y = 0\\)' }
    },
    {
        id: 'cg5-040', topicRef: 'cg5', topicTitle: 'Curve Sketching 40', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^3 \\), showing the shape and any key points.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Key features', workingLatex: '\\text{Through origin; point of inflection at } (0,0)', explanation: 'S-shaped curve, negative for x < 0, positive for x > 0.',
                diagram: {
                    xMin: -2.5, xMax: 2.5, yMin: -10, yMax: 10,
                    xTicks: [-2, -1, 1, 2], yTicks: [-8, -4, 4, 8],
                    curves: [{ points: sample((x) => x * x * x, -2.5, 2.5, 80), color: "#1d4ed8", label: "y = x^3", labelAt: [-2.4, 9] }],
                    points: [
                        { at: [0, 0], label: "(0,\\,0)", labelAnchor: "se" },
                    ],
                }
            }
        ], finalAnswer: 'S-shaped cubic through the origin' }
    },
    {
        id: 'cg5-041', topicRef: 'cg5', topicTitle: 'Curve Sketching 41', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^3 - 3x \\), showing all stationary points and intercepts.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Intercepts: y = x(x^2-3)', workingLatex: 'x = 0, \\pm\\sqrt{3}', explanation: 'Factor out \\( x \\) then set each factor to zero. The quadratic \\( x^2 - 3 = 0 \\) gives \\( x = \\pm\\sqrt{3} \\).' },
            { stepNumber: 2, description: 'Stationary points: dy/dx = 3x^2 - 3 = 0', workingLatex: 'x = \\pm 1; \\quad (1,-2) \\text{ and } (-1, 2)', explanation: 'Differentiate and set \\( \\tfrac{dy}{dx} = 0 \\). Substitute \\( x = 1 \\) into \\( y = x^3 - 3x \\) to get \\( y = -2 \\) (minimum), and \\( x = -1 \\) to get \\( y = 2 \\) (maximum). Positive cubic, so the left turning point is the maximum.',
                diagram: {
                    xMin: -2.5, xMax: 2.5, yMin: -5, yMax: 5,
                    xTicks: [-2, -1, 1, 2], yTicks: [-4, -2, 2, 4],
                    curves: [{ points: sample((x) => x * x * x - 3 * x, -2.5, 2.5, 100), color: "#1d4ed8", label: "y = x^3 - 3x", labelAt: [-2.4, 4.5] }],
                    points: [
                        { at: [-Math.sqrt(3), 0], label: "(-\\sqrt{3},\\,0)", labelAnchor: "sw" },
                        { at: [0, 0], label: "(0,\\,0)", labelAnchor: "ne" },
                        { at: [Math.sqrt(3), 0], label: "(\\sqrt{3},\\,0)", labelAnchor: "se" },
                        { at: [-1, 2], label: "(-1,\\,2)", labelAnchor: "nw" },
                        { at: [1, -2], label: "(1,\\,-2)", labelAnchor: "se" },
                    ],
                }
            }
        ], finalAnswer: 'Cubic; roots at \\(0, \\pm\\sqrt{3}\\); max \\((-1,2)\\); min \\((1,-2)\\)' }
    },
    {
        id: 'cg5-042', topicRef: 'cg5', topicTitle: 'Curve Sketching 42', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\frac{1}{x-2} \\), clearly showing the asymptotes.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Asymptotes', workingLatex: 'x = 2 \\text{ (vertical)}, \\quad y = 0 \\text{ (horizontal)}', explanation: 'This is \\( y = \\tfrac{1}{x} \\) shifted 2 units right (replacing \\( x \\) with \\( x - 2 \\)), so the vertical asymptote moves from \\( x = 0 \\) to \\( x = 2 \\). The horizontal asymptote \\( y = 0 \\) is unchanged.' },
            { stepNumber: 2, description: 'y-intercept', workingLatex: 'y = \\frac{1}{-2} = -\\frac{1}{2}', explanation: 'Substitute \\( x = 0 \\) into \\( \\tfrac{1}{x - 2} \\) to get the crossing on the \\( y \\)-axis.',
                diagram: {
                    xMin: -4, xMax: 8, yMin: -5, yMax: 5,
                    xTicks: [-2, 1, 2, 3, 4, 6], yTicks: [-4, -2, -1, 1, 2, 4],
                    curves: [
                        { points: sample((x) => 1 / (x - 2), -4, 1.75, 80), color: "#1d4ed8", label: "y = \\dfrac{1}{x-2}", labelAt: [-3.9, -3.5] },
                        { points: sample((x) => 1 / (x - 2), 2.25, 8, 80), color: "#1d4ed8" },
                    ],
                    lines: [
                        { from: [2, -5], to: [2, 5], color: "#888", dashed: true, label: "x = 2", labelAt: [2.1, 4.5] },
                    ],
                    points: [
                        { at: [0, -0.5], label: "(0,\\,-\\tfrac{1}{2})", labelAnchor: "sw" },
                    ],
                }
            }
        ], finalAnswer: 'Translated reciprocal; asymptotes x = 2, y = 0; y-int (0, -1/2)' }
    },
    {
        id: 'cg5-043', topicRef: 'cg5', topicTitle: 'Curve Sketching 43', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = (x-2)^2(x+1) \\), showing all intercepts.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'x-intercepts', workingLatex: 'x = 2 \\text{ (repeated)}, \\quad x = -1', explanation: 'Setting each factor to zero: \\( (x-2)^2 = 0 \\) gives a double root \\( x = 2 \\) (so the curve touches the axis there), and \\( x + 1 = 0 \\) gives a single root \\( x = -1 \\) (the curve crosses).' },
            { stepNumber: 2, description: 'y-intercept', workingLatex: 'y = (0-2)^2(0+1) = 4 \\times 1 = 4', explanation: 'Substitute \\( x = 0 \\) into each factor: \\( (0-2)^2 = 4 \\) and \\( (0+1) = 1 \\), giving \\( y = 4 \\).',
                diagram: {
                    xMin: -2.5, xMax: 4, yMin: -3, yMax: 12,
                    xTicks: [-2, -1, 1, 2, 3], yTicks: [-2, 2, 4, 6, 8, 10],
                    curves: [{ points: sample((x) => (x - 2) * (x - 2) * (x + 1), -2.5, 4, 80), color: "#1d4ed8", label: "y = (x-2)^2(x+1)", labelAt: [-2.4, 11] }],
                    points: [
                        { at: [-1, 0], label: "(-1,\\,0)", labelAnchor: "sw" },
                        { at: [2, 0], label: "(2,\\,0)", labelAnchor: "se" },
                        { at: [0, 4], label: "(0,\\,4)", labelAnchor: "e" },
                    ],
                }
            }
        ], finalAnswer: 'Cubic; touches \\(x\\)-axis at \\((2,0)\\); crosses at \\((-1,0)\\); \\(y\\)-int \\((0,4)\\)' }
    },
    {
        id: 'cg5-044', topicRef: 'cg5', topicTitle: 'Curve Sketching 44', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\sqrt{x} \\) for \\( x \\geq 0 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Key features', workingLatex: '\\text{Starts at origin, increases, domain } x \\geq 0', explanation: 'Square roots are only defined for non-negative inputs, so the domain is \\( x \\geq 0 \\). The curve starts at \\( (0,0) \\), passes through \\( (1,1) \\) and \\( (4,2) \\), and gets less steep as \\( x \\) grows (concave, gradient \\( \\tfrac{1}{2\\sqrt{x}} \\) decreases).',
                diagram: {
                    xMin: -1, xMax: 9, yMin: -1, yMax: 4,
                    xTicks: [1, 2, 3, 4, 5, 6, 7, 8], yTicks: [1, 2, 3],
                    curves: [{ points: sample((x) => Math.sqrt(x), 0, 9, 80), color: "#1d4ed8", label: "y = \\sqrt{x}", labelAt: [6, 3.4] }],
                    points: [
                        { at: [0, 0], label: "(0,\\,0)", labelAnchor: "sw" },
                        { at: [1, 1], label: "(1,\\,1)", labelAnchor: "se" },
                        { at: [4, 2], label: "(4,\\,2)", labelAnchor: "se" },
                    ],
                }
            }
        ], finalAnswer: 'Starts at \\((0,0)\\), increases and flattens; defined for \\(x \\geq 0\\)' }
    },
    {
        id: 'cg5-045', topicRef: 'cg5', topicTitle: 'Curve Sketching 45', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = 2^x \\), showing the asymptote and y-intercept.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'y-intercept', workingLatex: 'y = 2^0 = 1', explanation: 'Any non-zero base raised to the power 0 is 1, so every exponential curve \\( y = a^x \\) passes through \\( (0, 1) \\).' },
            { stepNumber: 2, description: 'Asymptote', workingLatex: 'y = 0 \\text{ (horizontal, as } x \\to -\\infty)', explanation: 'As \\( x \\to -\\infty \\), \\( 2^x \\to 0 \\) but never reaches it, so \\( y = 0 \\) is a horizontal asymptote. As \\( x \\to +\\infty \\), \\( 2^x \\) grows without bound.',
                diagram: {
                    xMin: -4, xMax: 4, yMin: -1, yMax: 10,
                    xTicks: [-3, -2, -1, 1, 2, 3], yTicks: [2, 4, 6, 8],
                    curves: [{ points: sample((x) => Math.pow(2, x), -4, 4, 80), color: "#1d4ed8", label: "y = 2^x", labelAt: [1, 8] }],
                    points: [
                        { at: [0, 1], label: "(0,\\,1)", labelAnchor: "sw" },
                    ],
                }
            }
        ], finalAnswer: 'Exponential curve; \\(y\\)-int \\((0,1)\\); asymptote \\(y = 0\\); increases rapidly' }
    },
    {
        id: 'cg5-046', topicRef: 'cg5', topicTitle: 'Curve Sketching 46', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^2 + 2x + 5 \\), explaining why it does not cross the x-axis.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Complete the square', workingLatex: 'y = (x+1)^2 + 4', explanation: 'Half the coefficient of \\( x \\) is \\( 1 \\), so \\( x^2 + 2x = (x+1)^2 - 1 \\); adding 5 gives \\( (x+1)^2 + 4 \\). Since \\( (x+1)^2 \\geq 0 \\) always, the minimum value of \\( y \\) is \\( 4 \\), reached at \\( x = -1 \\).' },
            { stepNumber: 2, description: 'Discriminant', workingLatex: '\\Delta = 4 - 20 = -16 < 0', explanation: 'Using \\( b^2 - 4ac \\) with \\( a=1, b=2, c=5 \\). A negative discriminant means no real roots, confirming the curve sits entirely above the \\( x \\)-axis.',
                diagram: {
                    xMin: -5, xMax: 3, yMin: -2, yMax: 15,
                    xTicks: [-4, -3, -2, -1, 1, 2], yTicks: [2, 4, 6, 8, 10, 12],
                    curves: [{ points: sample((x) => x * x + 2 * x + 5, -5, 3, 80), color: "#1d4ed8", label: "y = x^2 + 2x + 5", labelAt: [-4.9, 14] }],
                    points: [
                        { at: [-1, 4], label: "(-1,\\,4)", labelAnchor: "sw" },
                        { at: [0, 5], label: "(0,\\,5)", labelAnchor: "e" },
                    ],
                }
            }
        ], finalAnswer: 'U-shape; vertex \\((-1, 4)\\); \\(y\\)-int \\((0,5)\\); no \\(x\\)-intercepts' }
    },
    {
        id: 'cg5-047', topicRef: 'cg5', topicTitle: 'Curve Sketching 47', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = |x - 3| \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'V-shape with vertex at x = 3', workingLatex: '\\text{Vertex at } (3, 0); \\quad y\\text{-int: } |0-3| = 3', explanation: 'The modulus reflects any negative output to positive, so \\( y = |x-3| \\) is \\( y = x - 3 \\) for \\( x \\geq 3 \\) and \\( y = -(x-3) \\) for \\( x < 3 \\). The vertex sits where the inside equals zero (\\( x = 3 \\)), giving a V-shape with gradient \\( \\pm 1 \\).',
                diagram: {
                    xMin: -2, xMax: 8, yMin: -1, yMax: 6,
                    xTicks: [-1, 1, 2, 3, 4, 5, 6, 7], yTicks: [1, 2, 3, 4, 5],
                    curves: [{ points: sample((x) => Math.abs(x - 3), -2, 8, 80), color: "#1d4ed8", label: "y = |x-3|", labelAt: [-1.9, 5.5] }],
                    points: [
                        { at: [3, 0], label: "(3,\\,0)", labelAnchor: "se" },
                        { at: [0, 3], label: "(0,\\,3)", labelAnchor: "e" },
                    ],
                }
            }
        ], finalAnswer: 'V-shape; vertex \\((3,0)\\); \\(y\\)-int \\((0,3)\\); symmetric about \\(x = 3\\)' }
    },
    {
        id: 'cg5-048', topicRef: 'cg5', topicTitle: 'Curve Sketching 48', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^4 - 4x^2 \\), showing all intercepts and stationary points.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise', workingLatex: 'y = x^2(x^2-4) = x^2(x-2)(x+2)', explanation: 'Take out the common factor \\( x^2 \\), then apply the difference of two squares to \\( x^2 - 4 \\). The double root at \\( x = 0 \\) means the curve touches the axis there, while \\( x = \\pm 2 \\) are single crossings.' },
            { stepNumber: 2, description: 'Stationary points: dy/dx = 4x^3 - 8x = 4x(x^2-2) = 0', workingLatex: '\\frac{dy}{dx} = 4x^3 - 8x = 4x(x^2-2) = 0 \\implies x = 0, \\pm\\sqrt{2}; \\quad y(0) = 0, \\quad y(\\pm\\sqrt{2}) = (\\sqrt{2})^4 - 4(\\sqrt{2})^2 = 4-8 = -4', explanation: 'Differentiating and factoring gives three stationary points. At \\( x = \\pm\\sqrt{2} \\): \\( y = (\\sqrt 2)^4 - 4(\\sqrt 2)^2 = 4 - 8 = -4 \\). Since the leading coefficient is positive (u-shape overall), the outer turning points are minima and the central one at the origin is a local maximum, giving a W-shape.',
                diagram: {
                    xMin: -3, xMax: 3, yMin: -6, yMax: 10,
                    xTicks: [-2, -1, 1, 2], yTicks: [-4, -2, 2, 4, 6, 8],
                    curves: [{ points: sample((x) => x * x * x * x - 4 * x * x, -3, 3, 100), color: "#1d4ed8", label: "y = x^4 - 4x^2", labelAt: [-2.9, 9] }],
                    points: [
                        { at: [-2, 0], label: "(-2,\\,0)", labelAnchor: "nw" },
                        { at: [0, 0], label: "(0,\\,0)", labelAnchor: "ne" },
                        { at: [2, 0], label: "(2,\\,0)", labelAnchor: "ne" },
                        { at: [-Math.SQRT2, -4], label: "(-\\sqrt{2},\\,-4)", labelAnchor: "sw" },
                        { at: [Math.SQRT2, -4], label: "(\\sqrt{2},\\,-4)", labelAnchor: "se" },
                    ],
                }
            }
        ], finalAnswer: 'W-shape; roots at \\(0, \\pm 2\\); local max \\((0,0)\\); local min \\((\\pm\\sqrt{2}, -4)\\)' }
    },
    {
        id: 'cg5-049', topicRef: 'cg5', topicTitle: 'Curve Sketching 49', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\frac{2x}{x+1} \\), showing the asymptotes and intercepts.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Asymptotes', workingLatex: 'x = -1 \\text{ (vertical)}; \\quad y = 2 \\text{ (horizontal, since } \\frac{2x}{x} \\to 2)', explanation: 'The denominator is zero when \\( x = -1 \\), giving the vertical asymptote. As \\( |x| \\to \\infty \\), the lower-order terms become negligible and the ratio tends to \\( \\tfrac{2x}{x} = 2 \\).' },
            { stepNumber: 2, description: 'Intercepts', workingLatex: 'x = 0: y = 0; \\quad y = 0: x = 0', explanation: 'Substituting \\( x = 0 \\) gives \\( y = 0 \\); setting \\( y = 0 \\) requires \\( 2x = 0 \\), so \\( x = 0 \\). Both intercepts coincide at the origin.',
                diagram: {
                    xMin: -7, xMax: 6, yMin: -6, yMax: 8,
                    xTicks: [-5, -3, -1, 1, 3, 5], yTicks: [-4, -2, 2, 4, 6],
                    curves: [
                        { points: sample((x) => (2 * x) / (x + 1), -7, -1.2, 80), color: "#1d4ed8", label: "y = \\dfrac{2x}{x+1}", labelAt: [-6.9, 7] },
                        { points: sample((x) => (2 * x) / (x + 1), -0.8, 6, 80), color: "#1d4ed8" },
                    ],
                    lines: [
                        { from: [-1, -6], to: [-1, 8], color: "#888", dashed: true, label: "x = -1", labelAt: [-1.4, 7] },
                        { from: [-7, 2], to: [6, 2], color: "#888", dashed: true, label: "y = 2", labelAt: [5, 2.3] },
                    ],
                    points: [
                        { at: [0, 0], label: "(0,\\,0)", labelAnchor: "se" },
                    ],
                }
            }
        ], finalAnswer: 'Through origin; asymptotes \\(x = -1\\) and \\(y = 2\\)' }
    },
    {
        id: 'cg5-050', topicRef: 'cg5', topicTitle: 'Curve Sketching 50', difficulty: 'Foundation',
        questionText: 'The graph of \\( y = f(x) \\) passes through \\( (0, 3) \\) and has a maximum at \\( (2, 7) \\). Sketch \\( y = f(x) + 2 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Vertical translation up 2', workingLatex: '(0, 3) \\to (0, 5); \\quad (2, 7) \\to (2, 9)', explanation: 'Replacing \\( f(x) \\) with \\( f(x) + 2 \\) shifts the entire graph upwards by 2 units, so every point keeps its \\( x \\)-coordinate and has 2 added to its \\( y \\)-coordinate. The shape and the location of the maximum (relative to the curve) are unchanged.' }
        ], finalAnswer: 'Same shape, shifted up 2; passes through \\((0,5)\\); max at \\((2,9)\\)' }
    },
    {
        id: 'cg5-051', topicRef: 'cg5', topicTitle: 'Curve Sketching 51', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = (x+2)^3 \\), stating the point of inflection.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Translation of y = x^3', workingLatex: '\\text{Point of inflection at } (-2, 0)', explanation: 'Replacing \\( x \\) with \\( x + 2 \\) shifts the graph 2 units to the left. The inflection point of \\( y = x^3 \\) at the origin therefore moves to \\( (-2, 0) \\), and this is also a triple root (the curve flattens then crosses the \\( x \\)-axis).' },
            { stepNumber: 2, description: 'y-intercept', workingLatex: 'y = 8', explanation: 'Substitute \\( x = 0 \\): \\( (0+2)^3 = 8 \\).',
                diagram: {
                    xMin: -5, xMax: 2, yMin: -25, yMax: 15,
                    xTicks: [-4, -3, -2, -1, 1], yTicks: [-20, -10, 5, 10],
                    curves: [{ points: sample((x) => Math.pow(x + 2, 3), -5, 2, 80), color: "#1d4ed8", label: "y = (x+2)^3", labelAt: [-4.9, 13] }],
                    points: [
                        { at: [-2, 0], label: "(-2,\\,0)", labelAnchor: "se" },
                        { at: [0, 8], label: "(0,\\,8)", labelAnchor: "e" },
                    ],
                }
            }
        ], finalAnswer: 'Cubic S-shape; inflection \\((-2,0)\\); \\(y\\)-int \\((0,8)\\)' }
    },
    {
        id: 'cg5-052', topicRef: 'cg5', topicTitle: 'Curve Sketching 52', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = -\\frac{1}{x} \\), showing the asymptotes.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Reflection of y = 1/x in x-axis', workingLatex: '\\text{Asymptotes: } x = 0, y = 0; \\text{ curves in 2nd and 4th quadrants}', explanation: 'Multiplying by \\(-1\\) reflects \\( y = \\tfrac{1}{x} \\) in the \\( x \\)-axis, flipping each branch. Positive \\( x \\) now gives negative \\( y \\) (4th quadrant) and negative \\( x \\) gives positive \\( y \\) (2nd quadrant). The asymptotes \\( x = 0 \\) and \\( y = 0 \\) are unchanged.',
                diagram: {
                    xMin: -5, xMax: 5, yMin: -5, yMax: 5,
                    xTicks: [-4, -2, -1, 1, 2, 4], yTicks: [-4, -2, -1, 1, 2, 4],
                    curves: [
                        { points: sample((x) => -1 / x, -5, -0.25, 80), color: "#1d4ed8", label: "y = -\\dfrac{1}{x}", labelAt: [-4.9, 3.5] },
                        { points: sample((x) => -1 / x, 0.25, 5, 80), color: "#1d4ed8" },
                    ],
                }
            }
        ], finalAnswer: 'Hyperbola in 2nd and 4th quadrants; asymptotes \\(x = 0, y = 0\\)' }
    },
    {
        id: 'cg5-053', topicRef: 'cg5', topicTitle: 'Curve Sketching 53', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^2 - 6x + 9 \\), identifying the nature of the root.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise', workingLatex: 'y = (x-3)^2', explanation: 'This is a perfect square trinomial: \\( (x-3)^2 = x^2 - 6x + 9 \\). The repeated factor means \\( x = 3 \\) is a double root.' },
            { stepNumber: 2, description: 'Key features', workingLatex: '\\text{Touches x-axis at } (3,0); \\quad y\\text{-int } (0,9)', explanation: 'A double root means the curve touches but does not cross the \\( x \\)-axis at \\( x = 3 \\). The vertex coincides with this touch point, and substituting \\( x = 0 \\) gives \\( y = 9 \\).',
                diagram: {
                    xMin: -1, xMax: 7, yMin: -2, yMax: 12,
                    xTicks: [1, 2, 3, 4, 5, 6], yTicks: [2, 4, 6, 8, 10],
                    curves: [{ points: sample((x) => (x - 3) * (x - 3), -1, 7, 80), color: "#1d4ed8", label: "y = (x-3)^2", labelAt: [-0.9, 11] }],
                    points: [
                        { at: [3, 0], label: "(3,\\,0)", labelAnchor: "se" },
                        { at: [0, 9], label: "(0,\\,9)", labelAnchor: "e" },
                    ],
                }
            }
        ], finalAnswer: 'U-shape; touches \\(x\\)-axis at \\((3,0)\\); vertex \\((3,0)\\); \\(y\\)-int \\((0,9)\\)' }
    },
    {
        id: 'cg5-054', topicRef: 'cg5', topicTitle: 'Curve Sketching 54', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\frac{1}{x^2} \\), showing the asymptotes.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Key features', workingLatex: '\\text{Always positive; asymptotes } x = 0 \\text{ and } y = 0', explanation: 'Since \\( x^2 > 0 \\) for all \\( x \\neq 0 \\), the output \\( \\tfrac{1}{x^2} \\) is always positive — both branches sit above the \\( x \\)-axis. Because \\( (-x)^2 = x^2 \\), the graph is symmetric about the \\( y \\)-axis, and the asymptotes are the two axes.',
                diagram: {
                    xMin: -5, xMax: 5, yMin: -1, yMax: 8,
                    xTicks: [-4, -2, -1, 1, 2, 4], yTicks: [2, 4, 6],
                    curves: [
                        { points: sample((x) => 1 / (x * x), -5, -0.4, 80), color: "#1d4ed8", label: "y = \\dfrac{1}{x^2}", labelAt: [-4.9, 7] },
                        { points: sample((x) => 1 / (x * x), 0.4, 5, 80), color: "#1d4ed8" },
                    ],
                }
            }
        ], finalAnswer: 'Both branches in 1st and 2nd quadrants; asymptotes \\(x = 0, y = 0\\)' }
    },
    {
        id: 'cg5-055', topicRef: 'cg5', topicTitle: 'Curve Sketching 55', difficulty: 'Foundation',
        questionText: 'Given \\( y = f(x) \\) with roots at -1, 2, 5 and y-intercept 10, sketch \\( y = f(x+1) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Shift left by 1', workingLatex: '\\text{New roots: } -2,\\ 1,\\ 4; \\quad \\text{new }y\\text{-intercept } = f(1)', explanation: 'Replacing \\( x \\) with \\( x + 1 \\) shifts the graph 1 unit to the left, so each root drops by 1: \\( -1 \\to -2 \\), \\( 2 \\to 1 \\), \\( 5 \\to 4 \\). The new \\( y \\)-intercept is the value of the original function at \\( x = 1 \\) (unknown from the data given — only that \\( f(0) = 10 \\)).' }
        ], finalAnswer: 'Same shape shifted 1 left; new roots at \\(-2, 1, 4\\); new \\(y\\)-intercept \\(= f(1)\\) (not determined by data given)' }
    },
    {
        id: 'cg5-056', topicRef: 'cg5', topicTitle: 'Curve Sketching 56', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = 3 - x^2 \\), showing the vertex and intercepts.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Key features', workingLatex: '\\text{n-shape; vertex } (0,3); \\quad x = \\pm\\sqrt{3}', explanation: 'Rewriting as \\( y = -x^2 + 3 \\): the negative leading coefficient gives an n-shape (opens downward), and the constant \\(+3\\) shifts \\( y = -x^2 \\) up by 3 so the maximum sits at \\( (0,3) \\). Setting \\( y = 0 \\) gives \\( x^2 = 3 \\Rightarrow x = \\pm\\sqrt{3} \\).',
                diagram: {
                    xMin: -3, xMax: 3, yMin: -5, yMax: 5,
                    xTicks: [-2, -1, 1, 2], yTicks: [-4, -2, 2, 4],
                    curves: [{ points: sample((x) => 3 - x * x, -3, 3, 80), color: "#1d4ed8", label: "y = 3 - x^2", labelAt: [-2.9, 4.5] }],
                    points: [
                        { at: [-Math.sqrt(3), 0], label: "(-\\sqrt{3},\\,0)", labelAnchor: "sw" },
                        { at: [Math.sqrt(3), 0], label: "(\\sqrt{3},\\,0)", labelAnchor: "se" },
                        { at: [0, 3], label: "(0,\\,3)", labelAnchor: "ne" },
                    ],
                }
            }
        ], finalAnswer: 'n-shape; vertex \\((0,3)\\); roots \\((\\pm\\sqrt{3}, 0)\\); \\(y\\)-int \\((0,3)\\)' }
    },
    {
        id: 'cg5-057', topicRef: 'cg5', topicTitle: 'Curve Sketching 57', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x(x-2)(x+3) \\), showing all intercepts.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'x-intercepts', workingLatex: 'x = 0, 2, -3', explanation: 'Set each factor of the factorised cubic to zero. Three distinct roots mean the curve crosses the \\( x \\)-axis three times.' },
            { stepNumber: 2, description: 'y-intercept', workingLatex: 'y = 0', explanation: 'Substituting \\( x = 0 \\) into \\( x(x-2)(x+3) \\) gives \\( 0 \\), so the curve passes through the origin.' },
            { stepNumber: 3, description: 'End behaviour', workingLatex: 'x \\to +\\infty: y \\to +\\infty; \\quad x \\to -\\infty: y \\to -\\infty', explanation: 'Expanding gives leading term \\( +x^3 \\). Positive coefficient of an odd power means bottom-left to top-right overall shape.',
                diagram: {
                    xMin: -4, xMax: 3, yMin: -15, yMax: 15,
                    xTicks: [-3, -2, -1, 1, 2], yTicks: [-10, -5, 5, 10],
                    curves: [{ points: sample((x) => x * (x - 2) * (x + 3), -4, 3, 80), color: "#1d4ed8", label: "y = x(x-2)(x+3)", labelAt: [-3.9, 13] }],
                    points: [
                        { at: [-3, 0], label: "(-3,\\,0)", labelAnchor: "sw" },
                        { at: [0, 0], label: "(0,\\,0)", labelAnchor: "ne" },
                        { at: [2, 0], label: "(2,\\,0)", labelAnchor: "se" },
                    ],
                }
            }
        ], finalAnswer: 'Cubic through \\((-3,0)\\), \\((0,0)\\), \\((2,0)\\); positive leading coefficient' }
    },
    {
        id: 'cg5-058', topicRef: 'cg5', topicTitle: 'Curve Sketching 58', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\frac{x+1}{x-1} \\), showing the asymptotes and intercepts.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Asymptotes', workingLatex: 'x = 1 \\text{ (vertical)}; \\quad y = 1 \\text{ (horizontal)}', explanation: 'The denominator is zero at \\( x = 1 \\), giving a vertical asymptote. For large \\( |x| \\) the ratio behaves like \\( \\tfrac{x}{x} = 1 \\), giving the horizontal asymptote \\( y = 1 \\).' },
            { stepNumber: 2, description: 'Intercepts', workingLatex: 'x = 0: y = -1; \\quad y = 0: x = -1', explanation: 'At \\( x = 0 \\): \\( y = \\tfrac{0+1}{0-1} = -1 \\). Setting the numerator equal to zero (the only way the fraction is zero) gives \\( x + 1 = 0 \\Rightarrow x = -1 \\).',
                diagram: {
                    xMin: -6, xMax: 8, yMin: -5, yMax: 6,
                    xTicks: [-4, -2, -1, 1, 2, 4, 6], yTicks: [-4, -2, -1, 1, 2, 4],
                    curves: [
                        { points: sample((x) => (x + 1) / (x - 1), -6, 0.75, 80), color: "#1d4ed8", label: "y = \\dfrac{x+1}{x-1}", labelAt: [-5.9, 5] },
                        { points: sample((x) => (x + 1) / (x - 1), 1.25, 8, 80), color: "#1d4ed8" },
                    ],
                    lines: [
                        { from: [1, -5], to: [1, 6], color: "#888", dashed: true, label: "x = 1", labelAt: [1.2, 5] },
                        { from: [-6, 1], to: [8, 1], color: "#888", dashed: true, label: "y = 1", labelAt: [7, 1.3] },
                    ],
                    points: [
                        { at: [-1, 0], label: "(-1,\\,0)", labelAnchor: "nw" },
                        { at: [0, -1], label: "(0,\\,-1)", labelAnchor: "sw" },
                    ],
                }
            }
        ], finalAnswer: 'Asymptotes \\(x = 1, y = 1\\); intercepts \\((-1,0)\\), \\((0,-1)\\)' }
    },
    {
        id: 'cg5-059', topicRef: 'cg5', topicTitle: 'Curve Sketching 59', difficulty: 'Foundation',
        questionText: 'The curve \\( y = f(x) \\) has a minimum at \\( (1, -3) \\) and passes through \\( (0, 0) \\). Sketch \\( y = -f(x) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Reflect in x-axis', workingLatex: '(1, -3) \\to (1, 3); \\quad (0, 0) \\to (0, 0)', explanation: 'The transformation \\( y = -f(x) \\) multiplies every \\( y \\)-value by \\(-1\\), which reflects the curve in the \\( x \\)-axis. \\( x \\)-coordinates stay the same, so the minimum at \\( (1, -3) \\) becomes a maximum at \\( (1, 3) \\), and the origin (where \\( y = 0 \\)) maps to itself.' }
        ], finalAnswer: 'Reflected curve; max at \\((1,3)\\); through origin' }
    },
    {
        id: 'cg5-060', topicRef: 'cg5', topicTitle: 'Curve Sketching 60', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = e^{-x} \\), showing the asymptote and intercept.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Key features', workingLatex: 'y\\text{-int: } (0,1); \\quad \\text{asymptote } y = 0; \\quad \\text{decreasing}', explanation: '\\( y = e^{-x} \\) is \\( y = e^x \\) reflected in the \\( y \\)-axis (because \\( x \\) is replaced by \\( -x \\)), so it decreases instead of increases. At \\( x = 0 \\), \\( y = 1 \\); as \\( x \\to +\\infty \\), \\( e^{-x} \\to 0 \\) but never reaches it, giving the asymptote \\( y = 0 \\).',
                diagram: {
                    xMin: -3, xMax: 4, yMin: -1, yMax: 10,
                    xTicks: [-2, -1, 1, 2, 3], yTicks: [2, 4, 6, 8],
                    curves: [{ points: sample((x) => Math.exp(-x), -3, 4, 80), color: "#1d4ed8", label: "y = e^{-x}", labelAt: [-2, 8] }],
                    points: [
                        { at: [0, 1], label: "(0,\\,1)", labelAnchor: "ne" },
                    ],
                }
            }
        ], finalAnswer: 'Decreasing exponential; \\(y\\)-int \\((0,1)\\); asymptote \\(y = 0\\)' }
    },
    {
        id: 'cg5-061', topicRef: 'cg5', topicTitle: 'Curve Sketching 61', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^2(x-3) \\), showing where the curve touches or crosses the x-axis.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Roots', workingLatex: 'x = 0 \\text{ (repeated — touches)}, \\quad x = 3 \\text{ (crosses)}', explanation: 'Setting \\( y = 0 \\): the factor \\( x^2 \\) gives a double root at \\( x = 0 \\) (curve touches but does not cross), and \\( x - 3 = 0 \\) gives a single root \\( x = 3 \\) (curve cuts through).' },
            { stepNumber: 2, description: 'y-intercept', workingLatex: 'y = 0', explanation: 'Substituting \\( x = 0 \\) gives \\( 0^2 \\cdot (-3) = 0 \\), so the curve passes through the origin.',
                diagram: {
                    xMin: -2, xMax: 4.5, yMin: -8, yMax: 8,
                    xTicks: [-1, 1, 2, 3, 4], yTicks: [-6, -4, -2, 2, 4, 6],
                    curves: [{ points: sample((x) => x * x * (x - 3), -2, 4.5, 80), color: "#1d4ed8", label: "y = x^2(x-3)", labelAt: [-1.9, 7] }],
                    points: [
                        { at: [0, 0], label: "(0,\\,0)", labelAnchor: "ne" },
                        { at: [3, 0], label: "(3,\\,0)", labelAnchor: "sw" },
                    ],
                }
            }
        ], finalAnswer: 'Cubic; touches \\(x\\)-axis at origin, crosses at \\((3,0)\\)' }
    },
    {
        id: 'cg5-062', topicRef: 'cg5', topicTitle: 'Curve Sketching 62', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\frac{4}{x+2} + 1 \\), showing the asymptotes and intercepts.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Asymptotes', workingLatex: 'x = -2 \\text{ (vertical)}; \\quad y = 1 \\text{ (horizontal)}', explanation: 'This is \\( y = \\tfrac{4}{x} \\) shifted 2 left (replace \\( x \\) with \\( x + 2 \\)) and 1 up. Each shift carries its asymptote: vertical \\( x = 0 \\) moves to \\( x = -2 \\), horizontal \\( y = 0 \\) moves to \\( y = 1 \\).' },
            { stepNumber: 2, description: 'y-intercept', workingLatex: 'y = \\frac{4}{2} + 1 = 3', explanation: 'Substitute \\( x = 0 \\) into \\( \\tfrac{4}{x+2} + 1 \\).' },
            { stepNumber: 3, description: 'x-intercept', workingLatex: '0 = \\frac{4}{x+2} + 1 \\implies x = -6', explanation: 'Rearrange: \\( \\tfrac{4}{x+2} = -1 \\), then multiply both sides by \\( x + 2 \\) to get \\( 4 = -(x+2) \\), so \\( x = -6 \\).',
                diagram: {
                    xMin: -10, xMax: 6, yMin: -5, yMax: 7,
                    xTicks: [-8, -6, -4, -2, 2, 4], yTicks: [-4, -2, 1, 3, 5],
                    curves: [
                        { points: sample((x) => 4 / (x + 2) + 1, -10, -2.25, 80), color: "#1d4ed8", label: "y = \\dfrac{4}{x+2} + 1", labelAt: [-9.9, 6] },
                        { points: sample((x) => 4 / (x + 2) + 1, -1.75, 6, 80), color: "#1d4ed8" },
                    ],
                    lines: [
                        { from: [-2, -5], to: [-2, 7], color: "#888", dashed: true, label: "x = -2", labelAt: [-1.8, 6] },
                        { from: [-10, 1], to: [6, 1], color: "#888", dashed: true, label: "y = 1", labelAt: [5, 1.3] },
                    ],
                    points: [
                        { at: [-6, 0], label: "(-6,\\,0)", labelAnchor: "sw" },
                        { at: [0, 3], label: "(0,\\,3)", labelAnchor: "e" },
                    ],
                }
            }
        ], finalAnswer: 'Translated reciprocal; asymptotes \\(x = -2, y = 1\\); intercepts \\((-6,0)\\), \\((0,3)\\)' }
    },
    {
        id: 'cg5-063', topicRef: 'cg5', topicTitle: 'Curve Sketching 63', difficulty: 'Foundation',
        questionText: 'Given \\( y = f(x) \\) with a maximum at \\( (3, 5) \\), sketch \\( y = f(2x) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Horizontal compression by factor 2', workingLatex: '(3, 5) \\to (\\tfrac{3}{2}, 5)', explanation: 'The transformation \\( y = f(2x) \\) replaces \\( x \\) with \\( 2x \\), which compresses the graph horizontally by a factor of 2 (each feature happens at half the \\( x \\)-value). \\( y \\)-coordinates are unchanged, so the maximum at \\( (3, 5) \\) becomes a maximum at \\( (\\tfrac{3}{2}, 5) \\).' }
        ], finalAnswer: 'Same height, compressed horizontally; max at \\((3/2, 5)\\)' }
    },
    {
        id: 'cg5-064', topicRef: 'cg5', topicTitle: 'Curve Sketching 64', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = |2x - 4| \\), showing the vertex and intercepts.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Vertex where 2x - 4 = 0', workingLatex: 'x = 2; \\quad \\text{vertex } (2, 0)', explanation: 'The modulus function has its corner where the expression inside equals zero. Setting \\( 2x - 4 = 0 \\) gives \\( x = 2 \\), and at that point \\( y = 0 \\).' },
            { stepNumber: 2, description: 'y-intercept', workingLatex: 'y = |0-4| = 4', explanation: 'Substitute \\( x = 0 \\): \\( |-4| = 4 \\). Either side of the vertex the graph is a straight line with gradient \\( \\pm 2 \\), giving the V-shape.',
                diagram: {
                    xMin: -2, xMax: 6, yMin: -1, yMax: 8,
                    xTicks: [-1, 1, 2, 3, 4, 5], yTicks: [2, 4, 6],
                    curves: [{ points: sample((x) => Math.abs(2 * x - 4), -2, 6, 80), color: "#1d4ed8", label: "y = |2x-4|", labelAt: [-1.9, 7.5] }],
                    points: [
                        { at: [2, 0], label: "(2,\\,0)", labelAnchor: "se" },
                        { at: [0, 4], label: "(0,\\,4)", labelAnchor: "e" },
                    ],
                }
            }
        ], finalAnswer: 'V-shape; vertex \\((2,0)\\); \\(y\\)-int \\((0,4)\\); gradient \\(\\pm 2\\)' }
    },
    {
        id: 'cg5-065', topicRef: 'cg5', topicTitle: 'Curve Sketching 65', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = -x^3 + 3x \\), showing the stationary points and intercepts.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Intercepts', workingLatex: 'y = -x(x^2-3); \\quad x = 0, \\pm\\sqrt{3}', explanation: 'Factor out \\(-x\\), then \\( x^2 - 3 = 0 \\) gives \\( x = \\pm\\sqrt{3} \\). Three distinct roots, with the curve passing through the origin.' },
            { stepNumber: 2, description: 'Stationary points', workingLatex: 'dy/dx = -3x^2 + 3 = 0 \\implies x = \\pm 1', explanation: 'Differentiate and set equal to zero. \\( 3x^2 = 3 \\Rightarrow x^2 = 1 \\), so \\( x = \\pm 1 \\).' },
            { stepNumber: 3, description: 'Values', workingLatex: '(-1, -2) \\text{ min}; \\quad (1, 2) \\text{ max}', explanation: 'Substitute back: \\( y(1) = -1 + 3 = 2 \\) and \\( y(-1) = 1 - 3 = -2 \\). Negative leading coefficient (top-left to bottom-right), so the right-hand turning point is the maximum and the left-hand one is the minimum.',
                diagram: {
                    xMin: -2.5, xMax: 2.5, yMin: -5, yMax: 5,
                    xTicks: [-2, -1, 1, 2], yTicks: [-4, -2, 2, 4],
                    curves: [{ points: sample((x) => -x * x * x + 3 * x, -2.5, 2.5, 100), color: "#1d4ed8", label: "y = -x^3 + 3x", labelAt: [-2.4, 4.5] }],
                    points: [
                        { at: [-Math.sqrt(3), 0], label: "(-\\sqrt{3},\\,0)", labelAnchor: "nw" },
                        { at: [0, 0], label: "(0,\\,0)", labelAnchor: "se" },
                        { at: [Math.sqrt(3), 0], label: "(\\sqrt{3},\\,0)", labelAnchor: "ne" },
                        { at: [1, 2], label: "(1,\\,2)", labelAnchor: "ne" },
                        { at: [-1, -2], label: "(-1,\\,-2)", labelAnchor: "sw" },
                    ],
                }
            }
        ], finalAnswer: 'Negative cubic; roots \\(0, \\pm\\sqrt{3}\\); max \\((1,2)\\); min \\((-1,-2)\\)' }
    },
    {
        id: 'cg5-066', topicRef: 'cg5', topicTitle: 'Curve Sketching 66', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\ln x \\), showing the x-intercept and asymptote.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Key features', workingLatex: 'x\\text{-int: } (1, 0); \\quad \\text{asymptote } x = 0; \\quad \\text{domain } x > 0', explanation: '\\( \\ln x \\) is defined only for \\( x > 0 \\), so the curve sits entirely to the right of the \\( y \\)-axis. \\( \\ln 1 = 0 \\), giving the \\( x \\)-intercept at \\( (1, 0) \\). As \\( x \\to 0^+ \\), \\( \\ln x \\to -\\infty \\), giving the vertical asymptote \\( x = 0 \\). The curve increases (more slowly as \\( x \\) grows).',
                diagram: {
                    xMin: -1, xMax: 8, yMin: -4, yMax: 3,
                    xTicks: [1, 2, 3, 4, 5, 6, 7], yTicks: [-3, -2, -1, 1, 2],
                    curves: [{ points: sample((x) => Math.log(x), 0.05, 8, 100), color: "#1d4ed8", label: "y = \\ln x", labelAt: [5, 2] }],
                    points: [
                        { at: [1, 0], label: "(1,\\,0)", labelAnchor: "sw" },
                    ],
                }
            }
        ], finalAnswer: 'Increasing curve; \\(x\\)-int \\((1,0)\\); asymptote \\(x = 0\\)' }
    },
    {
        id: 'cg5-067', topicRef: 'cg5', topicTitle: 'Curve Sketching 67', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = (x-1)^2(x+2) \\), showing all intercepts and where the curve touches the axis.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Roots', workingLatex: 'x = 1 \\text{ (touches)}, \\quad x = -2 \\text{ (crosses)}', explanation: 'The factor \\( (x-1)^2 \\) gives a double root at \\( x = 1 \\) (curve touches the axis), and \\( x + 2 \\) gives a single root at \\( x = -2 \\) (curve crosses).' },
            { stepNumber: 2, description: 'y-intercept', workingLatex: 'y = (0-1)^2(0+2) = 1 \\times 2 = 2', explanation: 'Substitute \\( x = 0 \\): \\( (-1)^2 = 1 \\) and \\( (0+2) = 2 \\). Positive leading coefficient gives a bottom-left to top-right cubic shape.',
                diagram: {
                    xMin: -3.5, xMax: 3, yMin: -5, yMax: 10,
                    xTicks: [-3, -2, -1, 1, 2], yTicks: [-4, -2, 2, 4, 6, 8],
                    curves: [{ points: sample((x) => (x - 1) * (x - 1) * (x + 2), -3.5, 3, 80), color: "#1d4ed8", label: "y = (x-1)^2(x+2)", labelAt: [-3.4, 9] }],
                    points: [
                        { at: [-2, 0], label: "(-2,\\,0)", labelAnchor: "sw" },
                        { at: [1, 0], label: "(1,\\,0)", labelAnchor: "se" },
                        { at: [0, 2], label: "(0,\\,2)", labelAnchor: "e" },
                    ],
                }
            }
        ], finalAnswer: 'Cubic; touches at \\((1,0)\\); crosses at \\((-2,0)\\); \\(y\\)-int \\((0,2)\\)' }
    },
    {
        id: 'cg5-068', topicRef: 'cg5', topicTitle: 'Curve Sketching 68', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\sin x \\) for \\( 0 \\leq x \\leq 2\\pi \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Key features', workingLatex: '\\text{Starts at 0, max 1 at } \\frac{\\pi}{2}, \\text{ back to 0 at } \\pi, \\text{ min -1 at } \\frac{3\\pi}{2}', explanation: 'One full period of \\( \\sin x \\) has length \\( 2\\pi \\). It crosses the \\( x \\)-axis at \\( 0, \\pi, 2\\pi \\), peaks at \\( y = 1 \\) when \\( x = \\tfrac{\\pi}{2} \\), and troughs at \\( y = -1 \\) when \\( x = \\tfrac{3\\pi}{2} \\).',
                diagram: {
                    xMin: -0.5, xMax: 2 * Math.PI + 0.5, yMin: -1.5, yMax: 1.8,
                    xTicks: [Math.PI / 2, Math.PI, (3 * Math.PI) / 2, 2 * Math.PI], yTicks: [-1, 1],
                    curves: [{ points: sample((x) => Math.sin(x), 0, 2 * Math.PI, 120), color: "#1d4ed8", label: "y = \\sin x", labelAt: [4, 1.5] }],
                    points: [
                        { at: [0, 0], label: "0", labelAnchor: "sw" },
                        { at: [Math.PI / 2, 1], label: "(\\tfrac{\\pi}{2},\\,1)", labelAnchor: "n" },
                        { at: [Math.PI, 0], label: "\\pi", labelAnchor: "n" },
                        { at: [(3 * Math.PI) / 2, -1], label: "(\\tfrac{3\\pi}{2},\\,-1)", labelAnchor: "s" },
                        { at: [2 * Math.PI, 0], label: "2\\pi", labelAnchor: "ne" },
                    ],
                }
            }
        ], finalAnswer: 'Sine wave from \\(0\\) to \\(2\\pi\\); max \\(1\\), min \\(-1\\)' }
    },
    {
        id: 'cg5-069', topicRef: 'cg5', topicTitle: 'Curve Sketching 69', difficulty: 'Foundation',
        questionText: 'Given the graph of \\( y = f(x) \\) passes through \\( (-1, 0) \\), \\( (0, 2) \\), \\( (3, 0) \\), sketch \\( y = 2f(x) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Vertical stretch by factor 2', workingLatex: '(-1, 0) \\to (-1, 0); \\quad (0, 2) \\to (0, 4); \\quad (3, 0) \\to (3, 0)', explanation: '\\( y = 2f(x) \\) multiplies every \\( y \\)-value by 2. Points on the \\( x \\)-axis stay fixed (since \\( 2 \\times 0 = 0 \\)), so the roots are unchanged; the \\( y \\)-intercept doubles from 2 to 4.' }
        ], finalAnswer: 'Same roots; \\(y\\)-int now \\((0,4)\\); stretched vertically by 2' }
    },
    {
        id: 'cg5-070', topicRef: 'cg5', topicTitle: 'Curve Sketching 70', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^3 - 6x^2 + 9x \\), showing all intercepts, stationary points, and the point of inflection.',
        marks: 6, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise', workingLatex: 'y = x(x-3)^2', explanation: 'Take out a common \\( x \\) to get \\( x(x^2 - 6x + 9) \\), and recognise \\( x^2 - 6x + 9 = (x-3)^2 \\) as a perfect square. The double factor means \\( x = 3 \\) is a double root.' },
            { stepNumber: 2, description: 'Stationary points', workingLatex: 'dy/dx = 3x^2 - 12x + 9 = 3(x-1)(x-3) = 0', explanation: 'Differentiate term by term and factor. Numbers multiplying to \\(3\\) and adding to \\(-4\\) (after dividing by 3 inside the bracket) are \\(-1\\) and \\(-3\\).' },
            { stepNumber: 3, description: 'Values', workingLatex: 'y(1) = 1 - 6 + 9 = 4; \\quad y(3) = 0', explanation: 'Substitute back into the original equation. Positive leading coefficient: the left stationary point \\( (1, 4) \\) is the maximum and the right one \\( (3, 0) \\) is the minimum (the double root sits exactly on the \\( x \\)-axis).' },
            { stepNumber: 4, description: 'Inflection', workingLatex: 'd^2y/dx^2 = 6x - 12 = 0 \\implies x = 2; \\quad y(2) = 2', explanation: 'A point of inflection occurs where the second derivative is zero and changes sign. \\( y(2) = 8 - 24 + 18 = 2 \\), so the inflection is at \\( (2, 2) \\), midway between the two turning points.',
                diagram: {
                    xMin: -1, xMax: 5, yMin: -3, yMax: 8,
                    xTicks: [1, 2, 3, 4], yTicks: [-2, 2, 4, 6],
                    curves: [{ points: sample((x) => x * x * x - 6 * x * x + 9 * x, -1, 5, 100), color: "#1d4ed8", label: "y = x^3 - 6x^2 + 9x", labelAt: [-0.9, 7] }],
                    points: [
                        { at: [0, 0], label: "(0,\\,0)", labelAnchor: "sw" },
                        { at: [3, 0], label: "(3,\\,0)", labelAnchor: "se" },
                        { at: [1, 4], label: "(1,\\,4)\\,\\text{max}", labelAnchor: "ne" },
                        { at: [2, 2], label: "(2,\\,2)\\,\\text{infl}", labelAnchor: "ne" },
                    ],
                }
            }
        ], finalAnswer: 'Cubic; roots \\(0, 3\\) (repeated); max \\((1,4)\\); min \\((3,0)\\); inflection \\((2,2)\\)' }
    },
];
