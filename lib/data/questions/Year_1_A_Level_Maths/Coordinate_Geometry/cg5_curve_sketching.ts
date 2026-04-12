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
            finalAnswer: 'a) Bottom-left to top-right \\quad b) n-shape \\quad c) Top-left to bottom-right \\quad d) u-shape'
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
            finalAnswer: 'A  \\leftrightarrow y = 2x^4 , \\quad B  \\leftrightarrow y = -3x^5 , \\quad C  \\leftrightarrow y = -4x^2 , \\quad D  \\leftrightarrow y = 0.5x^3 '
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
                    explanation: 'The curve crosses all three roots (no repeated factors), rising from bottom-left to top-right overall.'
                }
            ],
            finalAnswer: 'Cubic crossing  x -axis at  x = -3,\\ 0,\\ 2 ; passes through origin; positive leading coefficient.'
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
                    explanation: 'The curve crosses each root cleanly, with \\( y \\)-intercept at 15.'
                }
            ],
            finalAnswer: 'Cubic crossing  x -axis at  -1, 3, 5 ;  y -intercept at  (0, 15) .'
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
                    explanation: 'Negative leading coefficient flips the orientation compared to a standard cubic.'
                }
            ],
            finalAnswer: 'Cubic crossing  x -axis at  x = -2,\\ 0,\\ 4 ; passes through origin; top-left to bottom-right shape.'
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
                    explanation: 'The curve crosses all three roots and rises to the right.'
                }
            ],
            finalAnswer: 'a)  x(x+3)(x-2)  \\quad b) Cubic crossing at  x = -3,\\ 0,\\ 2 ; positive shape.'
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
                    explanation: 'The curve crosses all three roots cleanly.'
                }
            ],
            finalAnswer: 'Cubic crossing  x -axis at  x = -\\tfrac{1}{2},\\ 2,\\ 4 ;  y -intercept at  (0, 8) .'
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
                    explanation: 'The graph is symmetric about the origin (odd function) and crosses at \\( -2, 0, 2 \\).'
                }
            ],
            finalAnswer: 'a)  2x(x-2)(x+2)  \\quad b) Cubic crossing at  x = -2,\\ 0,\\ 2 ; passes through origin.'
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
                    explanation: 'The curve bounces off the axis at \\( x = 0 \\) and cuts through at \\( x = 3 \\).'
                }
            ],
            finalAnswer: 'Cubic touching  x -axis at  x = 0  (double root) and crossing at  x = 3 ;  y -intercept at origin.'
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
                    explanation: 'The curve dips down to touch the axis at \\( -2 \\) and rises to cross at \\( x = 1 \\).'
                }
            ],
            finalAnswer: 'Cubic touching  x -axis at  x = -2 , crossing at  x = 1 ;  y -intercept at  (0, -4) .'
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
                    explanation: 'The triple root gives an inflection-type crossing, not a sharp cut.'
                }
            ],
            finalAnswer: 'Cubic with triple root at  x = 3 ;  y -intercept at  (0, 27) ; top-left to bottom-right overall shape.'
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
                    explanation: 'The curve enters from top-left, crosses at \\( -4 \\), rises to touch the origin, then falls away to the right.'
                }
            ],
            finalAnswer: 'Cubic crossing at  x = -4 , touching at  x = 0 ; passes through origin; top-left to bottom-right shape.'
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
                    explanation: 'The curve crosses the origin, climbs to a local maximum, dips to touch \\( x = 5 \\) and rises again.'
                }
            ],
            finalAnswer: 'Cubic crossing at  x = 0 , touching at  x = 5 ;  y -intercept at origin; positive shape.'
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
                    explanation: 'Positive leading coefficient: bottom-left to top-right.'
                }
            ],
            finalAnswer: 'a)  2x(x-3)^2  \\quad b) Crosses at  x = 0 , touches at  x = 3 ; positive cubic shape.'
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
                    explanation: 'The curve rises from bottom-left, crosses and undulates through all four roots, and rises again to the right.'
                }
            ],
            finalAnswer: 'Quartic crossing at  x = -1,\\ 0,\\ 1,\\ 3 ;  y -intercept at origin; u-shape overall.'
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
                    explanation: 'The curve falls from top-left, crossing and undulating through the four roots, then falls to the right.'
                }
            ],
            finalAnswer: 'Quartic crossing at  x = -3,\\ 0,\\ 1,\\ 4 ;  y -intercept at origin; n-shape overall.'
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
                    explanation: 'The curve enters from bottom-left, crosses at \\( -2 \\), touches origin, then crosses at \\( 3 \\) and rises.'
                }
            ],
            finalAnswer: 'Quartic touching at  x = 0 , crossing at  x = -2  and  x = 3 ;  y -intercept at origin.'
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
                    explanation: 'The entire curve sits on or above the \\( x \\)-axis (since \\( y \\geq 0 \\) for all \\( x \\)).'
                }
            ],
            finalAnswer: 'Quartic touching  x -axis at  x = -1  and  x = 2 ;  y -intercept at  (0, 4) ; curve lies above  x -axis.'
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
                    explanation: 'Substitute \\( x = 0 \\) into the original factored form.'
                }
            ],
            finalAnswer: 'Quartic crossing at  x = \\pm 2,\\ \\pm 3 ;  y -intercept at  (0, 36) ; u-shape overall; symmetric about the  y -axis.'
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
                    explanation: 'The curve rises from bottom-left, crosses at \\( -1 \\) and \\( 0 \\), bounces off \\( x = 2 \\), then rises to the right.'
                }
            ],
            finalAnswer: 'Quartic crossing at  x = -1,\\ 0 , touching at  x = 2 ;  y -intercept at origin; u-shape.'
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
                    explanation: 'The curve is entirely on or below the \\( x \\)-axis (since \\( y \\leq 0 \\) for all \\( x \\)).'
                }
            ],
            finalAnswer: 'Quartic touching  x -axis at  x = 0  and  x = 4 ; curve lies on or below  x -axis; n-shape.'
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
                    explanation: 'The curve rises from bottom-left and bottom-right, crossing at \\( \\pm 1 \\) and \\( \\pm 2 \\).'
                }
            ],
            finalAnswer: 'a)  (x-1)(x+1)(x-2)(x+2)  \\quad b) Quartic crossing at  \\pm 1, \\pm 2 ;  y -intercept  (0, 4) ; u-shape.'
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
                    explanation: 'By symmetry, \\( (-1, -4) \\) lies on the lower-left branch.'
                }
            ],
            finalAnswer: 'Asymptotes  x = 0,\\ y = 0 ; passes through  (1, 4)  and  (-1, -4) ; two branches in top-right and bottom-left quadrants.'
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
                    explanation: 'This lies in the top-left quadrant.'
                }
            ],
            finalAnswer: 'Asymptotes  x = 0,\\ y = 0 ; passes through  (1, -5)  and  (-1, 5) ; branches in top-left and bottom-right.'
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
                    explanation: 'Both branches approach the asymptotes as \\( x \\to 0 \\) and as \\( x \\to \\pm\\infty \\).'
                }
            ],
            finalAnswer: 'Asymptotes  x = 0,\\ y = 0 ; passes through  (\\pm 1, 3) ; both branches above  x -axis; symmetric about  y -axis.'
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
                    explanation: 'The entire graph lies below the \\( x \\)-axis.'
                }
            ],
            finalAnswer: 'Asymptotes  x = 0,\\ y = 0 ; passes through  (\\pm 1, -2) ; both branches below  x -axis.'
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
                    explanation: 'Both have the same asymptotes, but the \\( 1/x^2 \\) curve approaches zero faster.'
                }
            ],
            finalAnswer: 'Both curves pass through  (1,6)  and have asymptotes  x=0, y=0 . The graph of  y = \\frac{6}{x^2}  decreases more steeply for  x > 1 .'
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
            finalAnswer: ' 5x^{-3} \\to R , \\quad  -1/x^2 \\to S , \\quad  7/x^4 \\to P , \\quad  -4x^{-5} \\to Q '
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
                    description: 'Count intersections from the sketch.',
                    workingLatex: '\\text{The reciprocal curve and the parabola intersect in } 2 \\text{ points (by symmetry)}',
                    explanation: 'For \\( x > 0 \\) there is one intersection; by symmetry there is also one for \\( x < 0 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'State the conclusion.',
                    workingLatex: '\\Rightarrow 2 \\text{ real solutions}',
                    explanation: 'Each intersection of the graphs corresponds to one real solution of the equation.'
                }
            ],
            finalAnswer: 'The equation has  2  real solutions.'
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
                    explanation: 'The curve bounces off the axis at \\( x = -1 \\) and cuts through at \\( x = 4 \\).'
                }
            ],
            finalAnswer: 'Cubic touching at  x = -1 , crossing at  x = 4 ;  y -intercept at  (0, 4) ; top-left to bottom-right shape.'
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
                    explanation: 'The curve crosses the \\( x \\)-axis at two points, dips to \\( -16 \\) at the origin.'
                }
            ],
            finalAnswer: 'Quartic crossing at  x = \\pm 2 ;  y -intercept at  (0, -16) ; u-shape.'
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
                    explanation: 'Positive cubic shape (bottom-left to top-right).'
                },
                {
                    stepNumber: 5,
                    description: 'Part c: count distinct real roots.',
                    workingLatex: 'x = 0 \\text{ (once)}, \\quad x = 2 \\text{ (once, even though doubled)}',
                    explanation: 'There are 2 distinct real roots: \\( x = 0 \\) and \\( x = 2 \\).'
                }
            ],
            finalAnswer: 'a)  x(x-2)^2  \\quad b) Crosses at  x = 0 , touches at  x = 2  \\quad c) 2 distinct real roots.'
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
                    explanation: 'Substitute \\( x = 0 \\) into the factorised equation.'
                }
            ],
            finalAnswer: 'a)  f(x) = (x+2)(x-1)^2(x-4)  \\quad b)  y -intercept at  (0, -8) .'
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
                    explanation: 'Both solutions confirmed.'
                }
            ],
            finalAnswer: 'b) 2 real solutions:  x = 1  and  x = -1 .'
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
                    explanation: 'Positive leading coefficient (\\( x^4 \\)), u-shape overall. Crosses at \\( x = 1, 2, 3, 4 \\); \\( y \\)-intercept at \\( 24 \\).'
                }
            ],
            finalAnswer: 'a) Roots:  1, 2, 3, 4  \\quad b)  y = (x-1)(x-2)(x-3)(x-4)  \\quad c) Quartic crossing at  x = 1,2,3,4 ;  y -intercept at  (0, 24) ; u-shape.'
        }
    },

    // ─── Q36–70: Additional Curve Sketching Questions ──────────────────────

    {
        id: 'cg5-036', topicRef: 'cg5', topicTitle: 'Curve Sketching 36', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^2 - 4 \\), showing the intercepts with both axes.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'y-intercept: set x = 0', workingLatex: 'y = -4', explanation: '' },
            { stepNumber: 2, description: 'x-intercepts: set y = 0', workingLatex: 'x^2 = 4 \\implies x = \\pm 2', explanation: '' },
            { stepNumber: 3, description: 'Shape', workingLatex: '\\text{U-shape, vertex at } (0, -4)', explanation: '' }
        ], finalAnswer: 'U-shape; roots at (-2,0) and (2,0); y-intercept (0,-4)' }
    },
    {
        id: 'cg5-037', topicRef: 'cg5', topicTitle: 'Curve Sketching 37', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = (x-1)(x+3) \\), showing all intercepts and the vertex.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'x-intercepts', workingLatex: 'x = 1 \\text{ and } x = -3', explanation: '' },
            { stepNumber: 2, description: 'y-intercept', workingLatex: 'y = (-1)(3) = -3', explanation: '' },
            { stepNumber: 3, description: 'Vertex (midpoint of roots)', workingLatex: 'x = \\frac{1+(-3)}{2} = -1; \\quad y = (-2)(2) = -4', explanation: '' }
        ], finalAnswer: 'U-shape; roots (1,0), (-3,0); vertex (-1,-4); y-int (0,-3)' }
    },
    {
        id: 'cg5-038', topicRef: 'cg5', topicTitle: 'Curve Sketching 38', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = -x^2 + 6x - 5 \\), showing the vertex and all intercepts.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise', workingLatex: 'y = -(x-1)(x-5)', explanation: 'Roots at x = 1, 5.' },
            { stepNumber: 2, description: 'Vertex', workingLatex: 'x = 3; \\quad y = -9 + 18 - 5 = 4', explanation: '' },
            { stepNumber: 3, description: 'y-intercept', workingLatex: 'y = -5', explanation: '' }
        ], finalAnswer: 'n-shape; roots (1,0), (5,0); vertex (3,4); y-int (0,-5)' }
    },
    {
        id: 'cg5-039', topicRef: 'cg5', topicTitle: 'Curve Sketching 39', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\frac{1}{x} \\) for \\( x > 0 \\) and \\( x < 0 \\), showing the asymptotes.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Asymptotes', workingLatex: 'x = 0 \\text{ (vertical)}, \\quad y = 0 \\text{ (horizontal)}', explanation: '' },
            { stepNumber: 2, description: 'Behaviour', workingLatex: 'x > 0: \\text{curve in 1st quadrant}; \\quad x < 0: \\text{curve in 3rd quadrant}', explanation: '' }
        ], finalAnswer: 'Rectangular hyperbola with asymptotes x = 0 and y = 0' }
    },
    {
        id: 'cg5-040', topicRef: 'cg5', topicTitle: 'Curve Sketching 40', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^3 \\), showing the shape and any key points.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Key features', workingLatex: '\\text{Through origin; point of inflection at } (0,0)', explanation: 'S-shaped curve, negative for x < 0, positive for x > 0.' }
        ], finalAnswer: 'S-shaped cubic through the origin' }
    },
    {
        id: 'cg5-041', topicRef: 'cg5', topicTitle: 'Curve Sketching 41', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^3 - 3x \\), showing all stationary points and intercepts.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Intercepts: y = x(x^2-3)', workingLatex: 'x = 0, \\pm\\sqrt{3}', explanation: '' },
            { stepNumber: 2, description: 'Stationary points: dy/dx = 3x^2 - 3 = 0', workingLatex: 'x = \\pm 1; \\quad (1,-2) \\text{ and } (-1, 2)', explanation: '' }
        ], finalAnswer: 'Cubic; roots at 0, \\pm\\sqrt{3}; max (-1,2); min (1,-2)' }
    },
    {
        id: 'cg5-042', topicRef: 'cg5', topicTitle: 'Curve Sketching 42', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\frac{1}{x-2} \\), clearly showing the asymptotes.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Asymptotes', workingLatex: 'x = 2 \\text{ (vertical)}, \\quad y = 0 \\text{ (horizontal)}', explanation: '' },
            { stepNumber: 2, description: 'y-intercept', workingLatex: 'y = \\frac{1}{-2} = -\\frac{1}{2}', explanation: '' }
        ], finalAnswer: 'Translated reciprocal; asymptotes x = 2, y = 0; y-int (0, -1/2)' }
    },
    {
        id: 'cg5-043', topicRef: 'cg5', topicTitle: 'Curve Sketching 43', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = (x-2)^2(x+1) \\), showing all intercepts.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'x-intercepts', workingLatex: 'x = 2 \\text{ (repeated)}, \\quad x = -1', explanation: 'Touches at x = 2, crosses at x = -1.' },
            { stepNumber: 2, description: 'y-intercept', workingLatex: 'y = 4(-1+1) = 4(1) \\implies y = (4)(1) = 4', explanation: 'Wait: y = (-2)^2(0+1) = 4(1) = 4. Actually y = (0-2)^2(0+1) = 4.' }
        ], finalAnswer: 'Cubic; touches x-axis at (2,0); crosses at (-1,0); y-int (0,4)' }
    },
    {
        id: 'cg5-044', topicRef: 'cg5', topicTitle: 'Curve Sketching 44', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\sqrt{x} \\) for \\( x \\geq 0 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Key features', workingLatex: '\\text{Starts at origin, increases, domain } x \\geq 0', explanation: 'Concave curve getting flatter.' }
        ], finalAnswer: 'Starts at (0,0), increases and flattens; defined for x >= 0' }
    },
    {
        id: 'cg5-045', topicRef: 'cg5', topicTitle: 'Curve Sketching 45', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = 2^x \\), showing the asymptote and y-intercept.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'y-intercept', workingLatex: 'y = 2^0 = 1', explanation: '' },
            { stepNumber: 2, description: 'Asymptote', workingLatex: 'y = 0 \\text{ (horizontal, as } x \\to -\\infty)', explanation: 'Exponential growth.' }
        ], finalAnswer: 'Exponential curve; y-int (0,1); asymptote y = 0; increases rapidly' }
    },
    {
        id: 'cg5-046', topicRef: 'cg5', topicTitle: 'Curve Sketching 46', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^2 + 2x + 5 \\), explaining why it does not cross the x-axis.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Complete the square', workingLatex: 'y = (x+1)^2 + 4', explanation: 'Minimum value is 4 > 0.' },
            { stepNumber: 2, description: 'Discriminant', workingLatex: '\\Delta = 4 - 20 = -16 < 0', explanation: 'No real roots.' }
        ], finalAnswer: 'U-shape; vertex (-1, 4); y-int (0,5); no x-intercepts' }
    },
    {
        id: 'cg5-047', topicRef: 'cg5', topicTitle: 'Curve Sketching 47', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = |x - 3| \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'V-shape with vertex at x = 3', workingLatex: '\\text{Vertex at } (3, 0); \\quad y\\text{-int: } |0-3| = 3', explanation: '' }
        ], finalAnswer: 'V-shape; vertex (3,0); y-int (0,3); symmetric about x = 3' }
    },
    {
        id: 'cg5-048', topicRef: 'cg5', topicTitle: 'Curve Sketching 48', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^4 - 4x^2 \\), showing all intercepts and stationary points.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise', workingLatex: 'y = x^2(x^2-4) = x^2(x-2)(x+2)', explanation: 'Roots: x = 0 (repeated), x = \\pm 2.' },
            { stepNumber: 2, description: 'Stationary points: dy/dx = 4x^3 - 8x = 4x(x^2-2) = 0', workingLatex: 'x = 0, \\pm\\sqrt{2}; \\quad y(0) = 0, \\quad y(\\pm\\sqrt{2}) = 4-8 = -4', explanation: '' }
        ], finalAnswer: 'W-shape; roots at 0, \\pm 2; local max (0,0); local min (\\pm\\sqrt{2}, -4)' }
    },
    {
        id: 'cg5-049', topicRef: 'cg5', topicTitle: 'Curve Sketching 49', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\frac{2x}{x+1} \\), showing the asymptotes and intercepts.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Asymptotes', workingLatex: 'x = -1 \\text{ (vertical)}; \\quad y = 2 \\text{ (horizontal, since } \\frac{2x}{x} \\to 2)', explanation: '' },
            { stepNumber: 2, description: 'Intercepts', workingLatex: 'x = 0: y = 0; \\quad y = 0: x = 0', explanation: 'Origin is the only intercept.' }
        ], finalAnswer: 'Through origin; asymptotes x = -1 and y = 2' }
    },
    {
        id: 'cg5-050', topicRef: 'cg5', topicTitle: 'Curve Sketching 50', difficulty: 'Foundation',
        questionText: 'The graph of \\( y = f(x) \\) passes through \\( (0, 3) \\) and has a maximum at \\( (2, 7) \\). Sketch \\( y = f(x) + 2 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Vertical translation up 2', workingLatex: '(0, 3) \\to (0, 5); \\quad (2, 7) \\to (2, 9)', explanation: 'Add 2 to all y-values.' }
        ], finalAnswer: 'Same shape, shifted up 2; passes through (0,5); max at (2,9)' }
    },
    {
        id: 'cg5-051', topicRef: 'cg5', topicTitle: 'Curve Sketching 51', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = (x+2)^3 \\), stating the point of inflection.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Translation of y = x^3', workingLatex: '\\text{Point of inflection at } (-2, 0)', explanation: 'Shifted 2 left.' },
            { stepNumber: 2, description: 'y-intercept', workingLatex: 'y = 8', explanation: '' }
        ], finalAnswer: 'Cubic S-shape; inflection (-2,0); y-int (0,8)' }
    },
    {
        id: 'cg5-052', topicRef: 'cg5', topicTitle: 'Curve Sketching 52', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = -\\frac{1}{x} \\), showing the asymptotes.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Reflection of y = 1/x in x-axis', workingLatex: '\\text{Asymptotes: } x = 0, y = 0; \\text{ curves in 2nd and 4th quadrants}', explanation: '' }
        ], finalAnswer: 'Hyperbola in 2nd and 4th quadrants; asymptotes x = 0, y = 0' }
    },
    {
        id: 'cg5-053', topicRef: 'cg5', topicTitle: 'Curve Sketching 53', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^2 - 6x + 9 \\), identifying the nature of the root.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise', workingLatex: 'y = (x-3)^2', explanation: 'Repeated root at x = 3.' },
            { stepNumber: 2, description: 'Key features', workingLatex: '\\text{Touches x-axis at } (3,0); \\quad y\\text{-int } (0,9)', explanation: '' }
        ], finalAnswer: 'U-shape; touches x-axis at (3,0); vertex (3,0); y-int (0,9)' }
    },
    {
        id: 'cg5-054', topicRef: 'cg5', topicTitle: 'Curve Sketching 54', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\frac{1}{x^2} \\), showing the asymptotes.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Key features', workingLatex: '\\text{Always positive; asymptotes } x = 0 \\text{ and } y = 0', explanation: 'Symmetric about y-axis.' }
        ], finalAnswer: 'Both branches in 1st and 2nd quadrants; asymptotes x = 0, y = 0' }
    },
    {
        id: 'cg5-055', topicRef: 'cg5', topicTitle: 'Curve Sketching 55', difficulty: 'Foundation',
        questionText: 'Given \\( y = f(x) \\) with roots at -1, 2, 5 and y-intercept 10, sketch \\( y = f(x+1) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Shift left by 1', workingLatex: '\\text{New roots: } -2, 1, 4; \\quad \\text{new y-int: } f(1) = 0', explanation: '' }
        ], finalAnswer: 'Same shape shifted 1 left; roots at -2, 1, 4' }
    },
    {
        id: 'cg5-056', topicRef: 'cg5', topicTitle: 'Curve Sketching 56', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = 3 - x^2 \\), showing the vertex and intercepts.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Key features', workingLatex: '\\text{n-shape; vertex } (0,3); \\quad x = \\pm\\sqrt{3}', explanation: '' }
        ], finalAnswer: 'n-shape; vertex (0,3); roots (\\pm\\sqrt{3}, 0); y-int (0,3)' }
    },
    {
        id: 'cg5-057', topicRef: 'cg5', topicTitle: 'Curve Sketching 57', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x(x-2)(x+3) \\), showing all intercepts.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'x-intercepts', workingLatex: 'x = 0, 2, -3', explanation: '' },
            { stepNumber: 2, description: 'y-intercept', workingLatex: 'y = 0', explanation: 'Origin.' },
            { stepNumber: 3, description: 'End behaviour', workingLatex: 'x \\to +\\infty: y \\to +\\infty; \\quad x \\to -\\infty: y \\to -\\infty', explanation: 'Positive cubic.' }
        ], finalAnswer: 'Cubic through (-3,0), (0,0), (2,0); positive leading coefficient' }
    },
    {
        id: 'cg5-058', topicRef: 'cg5', topicTitle: 'Curve Sketching 58', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\frac{x+1}{x-1} \\), showing the asymptotes and intercepts.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Asymptotes', workingLatex: 'x = 1 \\text{ (vertical)}; \\quad y = 1 \\text{ (horizontal)}', explanation: '' },
            { stepNumber: 2, description: 'Intercepts', workingLatex: 'x = 0: y = -1; \\quad y = 0: x = -1', explanation: '' }
        ], finalAnswer: 'Asymptotes x = 1, y = 1; intercepts (-1,0), (0,-1)' }
    },
    {
        id: 'cg5-059', topicRef: 'cg5', topicTitle: 'Curve Sketching 59', difficulty: 'Foundation',
        questionText: 'The curve \\( y = f(x) \\) has a minimum at \\( (1, -3) \\) and passes through \\( (0, 0) \\). Sketch \\( y = -f(x) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Reflect in x-axis', workingLatex: '(1, -3) \\to (1, 3); \\quad (0, 0) \\to (0, 0)', explanation: 'Minimum becomes maximum.' }
        ], finalAnswer: 'Reflected curve; max at (1,3); through origin' }
    },
    {
        id: 'cg5-060', topicRef: 'cg5', topicTitle: 'Curve Sketching 60', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = e^{-x} \\), showing the asymptote and intercept.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Key features', workingLatex: 'y\\text{-int: } (0,1); \\quad \\text{asymptote } y = 0; \\quad \\text{decreasing}', explanation: '' }
        ], finalAnswer: 'Decreasing exponential; y-int (0,1); asymptote y = 0' }
    },
    {
        id: 'cg5-061', topicRef: 'cg5', topicTitle: 'Curve Sketching 61', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^2(x-3) \\), showing where the curve touches or crosses the x-axis.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Roots', workingLatex: 'x = 0 \\text{ (repeated — touches)}, \\quad x = 3 \\text{ (crosses)}', explanation: '' },
            { stepNumber: 2, description: 'y-intercept', workingLatex: 'y = 0', explanation: '' }
        ], finalAnswer: 'Cubic; touches x-axis at origin, crosses at (3,0)' }
    },
    {
        id: 'cg5-062', topicRef: 'cg5', topicTitle: 'Curve Sketching 62', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\frac{4}{x+2} + 1 \\), showing the asymptotes and intercepts.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Asymptotes', workingLatex: 'x = -2 \\text{ (vertical)}; \\quad y = 1 \\text{ (horizontal)}', explanation: '' },
            { stepNumber: 2, description: 'y-intercept', workingLatex: 'y = \\frac{4}{2} + 1 = 3', explanation: '' },
            { stepNumber: 3, description: 'x-intercept', workingLatex: '0 = \\frac{4}{x+2} + 1 \\implies x = -6', explanation: '' }
        ], finalAnswer: 'Translated reciprocal; asymptotes x = -2, y = 1; intercepts (-6,0), (0,3)' }
    },
    {
        id: 'cg5-063', topicRef: 'cg5', topicTitle: 'Curve Sketching 63', difficulty: 'Foundation',
        questionText: 'Given \\( y = f(x) \\) with a maximum at \\( (3, 5) \\), sketch \\( y = f(2x) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Horizontal compression by factor 2', workingLatex: '(3, 5) \\to (\\frac{3}{2}, 5)', explanation: 'x-coordinates halved, y unchanged.' }
        ], finalAnswer: 'Same height, compressed horizontally; max at (3/2, 5)' }
    },
    {
        id: 'cg5-064', topicRef: 'cg5', topicTitle: 'Curve Sketching 64', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = |2x - 4| \\), showing the vertex and intercepts.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Vertex where 2x - 4 = 0', workingLatex: 'x = 2; \\quad \\text{vertex } (2, 0)', explanation: '' },
            { stepNumber: 2, description: 'y-intercept', workingLatex: 'y = |0-4| = 4', explanation: '' }
        ], finalAnswer: 'V-shape; vertex (2,0); y-int (0,4); gradient \\pm 2' }
    },
    {
        id: 'cg5-065', topicRef: 'cg5', topicTitle: 'Curve Sketching 65', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = -x^3 + 3x \\), showing the stationary points and intercepts.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Intercepts', workingLatex: 'y = -x(x^2-3); \\quad x = 0, \\pm\\sqrt{3}', explanation: '' },
            { stepNumber: 2, description: 'Stationary points', workingLatex: 'dy/dx = -3x^2 + 3 = 0 \\implies x = \\pm 1', explanation: '' },
            { stepNumber: 3, description: 'Values', workingLatex: '(-1, -2) \\text{ min}; \\quad (1, 2) \\text{ max}', explanation: '' }
        ], finalAnswer: 'Negative cubic; roots 0, \\pm\\sqrt{3}; max (1,2); min (-1,-2)' }
    },
    {
        id: 'cg5-066', topicRef: 'cg5', topicTitle: 'Curve Sketching 66', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\ln x \\), showing the x-intercept and asymptote.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Key features', workingLatex: 'x\\text{-int: } (1, 0); \\quad \\text{asymptote } x = 0; \\quad \\text{domain } x > 0', explanation: '' }
        ], finalAnswer: 'Increasing curve; x-int (1,0); asymptote x = 0' }
    },
    {
        id: 'cg5-067', topicRef: 'cg5', topicTitle: 'Curve Sketching 67', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = (x-1)^2(x+2) \\), showing all intercepts and where the curve touches the axis.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Roots', workingLatex: 'x = 1 \\text{ (touches)}, \\quad x = -2 \\text{ (crosses)}', explanation: '' },
            { stepNumber: 2, description: 'y-intercept', workingLatex: 'y = 1 \\times 2 = 2', explanation: '' }
        ], finalAnswer: 'Cubic; touches at (1,0); crosses at (-2,0); y-int (0,2)' }
    },
    {
        id: 'cg5-068', topicRef: 'cg5', topicTitle: 'Curve Sketching 68', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\sin x \\) for \\( 0 \\leq x \\leq 2\\pi \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Key features', workingLatex: '\\text{Starts at 0, max 1 at } \\frac{\\pi}{2}, \\text{ back to 0 at } \\pi, \\text{ min -1 at } \\frac{3\\pi}{2}', explanation: '' }
        ], finalAnswer: 'Sine wave from 0 to 2pi; max 1, min -1' }
    },
    {
        id: 'cg5-069', topicRef: 'cg5', topicTitle: 'Curve Sketching 69', difficulty: 'Foundation',
        questionText: 'Given the graph of \\( y = f(x) \\) passes through \\( (-1, 0) \\), \\( (0, 2) \\), \\( (3, 0) \\), sketch \\( y = 2f(x) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Vertical stretch by factor 2', workingLatex: '(-1, 0) \\to (-1, 0); \\quad (0, 2) \\to (0, 4); \\quad (3, 0) \\to (3, 0)', explanation: 'x-intercepts unchanged, other y-values doubled.' }
        ], finalAnswer: 'Same roots; y-int now (0,4); stretched vertically by 2' }
    },
    {
        id: 'cg5-070', topicRef: 'cg5', topicTitle: 'Curve Sketching 70', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^3 - 6x^2 + 9x \\), showing all intercepts, stationary points, and the point of inflection.',
        marks: 6, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise', workingLatex: 'y = x(x-3)^2', explanation: 'Roots: x = 0 (crosses), x = 3 (touches).' },
            { stepNumber: 2, description: 'Stationary points', workingLatex: 'dy/dx = 3x^2 - 12x + 9 = 3(x-1)(x-3) = 0', explanation: 'x = 1 and x = 3.' },
            { stepNumber: 3, description: 'Values', workingLatex: 'y(1) = 1 - 6 + 9 = 4; \\quad y(3) = 0', explanation: 'Max at (1,4); min at (3,0).' },
            { stepNumber: 4, description: 'Inflection', workingLatex: 'd^2y/dx^2 = 6x - 12 = 0 \\implies x = 2; \\quad y(2) = 2', explanation: '' }
        ], finalAnswer: 'Cubic; roots 0, 3 (repeated); max (1,4); min (3,0); inflection (2,2)' }
    },
];
