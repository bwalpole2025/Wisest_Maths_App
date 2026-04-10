import { Question } from "@/lib/types";

/**
 * Topic: Laws of Indices
 * Ref:   a12
 *
 * Add your questions to the array below.
 * ID convention: "a12-001", "a12-002", etc.
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
    {
        id: 'a14-01',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 01',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - 2x - 3 \\). Find where \\( f(x) = 0 \\) and show the coordinates of the turning point and axis intercepts.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'roots', 'turning point', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise to find the roots where \\( f(x) = 0 \\).',
                    workingLatex: '\\( (x - 3)(x + 1) = 0 \\Rightarrow x = 3,\\; -1 \\)',
                    explanation: 'These are the x-intercepts.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the y-intercept.',
                    workingLatex: '\\( f(0) = -3 \\)',
                    explanation: 'Cuts y-axis at \\( (0, -3) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Complete the square to find the minimum.',
                    workingLatex: '\\( (x - 1)^2 - 4 \\)',
                    explanation: 'Minimum at \\( (1, -4) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[scale=0.7]\\draw[->] (-3,0)--(5,0) node[right]{\\(x\\)};\\draw[->] (0,-5)--(0,3) node[above]{\\(y\\)};\\draw[domain=-2:4,smooth,thick,blue] plot(\\x,{(\\x)^2-2*\\x-3});\\fill (-1,0) circle(2pt) node[above left]{\\(-1\\)};\\fill (3,0) circle(2pt) node[above right]{\\(3\\)};\\fill (0,-3) circle(2pt) node[right]{\\(-3\\)};\\fill (1,-4) circle(2pt) node[below]{\\((1,-4)\\)};\\end{tikzpicture}',
                    explanation: 'U-shape through the marked points.'
                }
            ],
            finalAnswer: 'Roots \\( x = -1, 3 \\); y-intercept \\( (0,-3) \\); minimum \\( (1,-4) \\).'
        }
    },
    {
        id: 'a14-02',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 02',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 + 4x - 5 \\). Solve \\( f(x) = 0 \\) and label intercepts and turning point.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'roots', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( (x + 5)(x - 1) = 0 \\Rightarrow x = -5,\\; 1 \\)',
                    explanation: 'Roots.'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = -5 \\)',
                    explanation: 'At \\( (0, -5) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( (x + 2)^2 - 9 \\)',
                    explanation: 'Minimum \\( (-2, -9) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.6,yscale=0.35]\\draw[->] (-7,0)--(3,0) node[right]{\\(x\\)};\\draw[->] (0,-10)--(0,3) node[above]{\\(y\\)};\\draw[domain=-6:2,smooth,thick,blue] plot(\\x,{(\\x)^2+4*\\x-5});\\fill (-5,0) circle(3pt) node[above left]{\\(-5\\)};\\fill (1,0) circle(3pt) node[above right]{\\(1\\)};\\fill (0,-5) circle(3pt) node[right]{\\(-5\\)};\\fill (-2,-9) circle(3pt) node[below]{\\((-2,-9)\\)};\\end{tikzpicture}',
                    explanation: 'U-shaped curve.'
                }
            ],
            finalAnswer: 'Roots \\( x = -5, 1 \\); y-intercept \\( (0,-5) \\); minimum \\( (-2,-9) \\).'
        }
    },
    {
        id: 'a14-03',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 03',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - 6x + 8 \\). Find all \\( x \\) for which \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( (x - 2)(x - 4) = 0 \\)',
                    explanation: 'Roots \\( x = 2, 4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 8 \\)',
                    explanation: 'At \\( (0, 8) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( (x - 3)^2 - 1 \\)',
                    explanation: 'Minimum \\( (3, -1) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.7,yscale=0.4]\\draw[->] (-1,0)--(6,0) node[right]{\\(x\\)};\\draw[->] (0,-2)--(0,10) node[above]{\\(y\\)};\\draw[domain=0.5:5.5,smooth,thick,blue] plot(\\x,{(\\x)^2-6*\\x+8});\\fill (2,0) circle(3pt) node[below]{\\(2\\)};\\fill (4,0) circle(3pt) node[below]{\\(4\\)};\\fill (0,8) circle(3pt) node[right]{\\(8\\)};\\fill (3,-1) circle(3pt) node[below]{\\((3,-1)\\)};\\end{tikzpicture}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = 2, 4 \\); y-intercept \\( (0,8) \\); minimum \\( (3,-1) \\).'
        }
    },
    {
        id: 'a14-04',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 04',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 + 2x - 8 \\). Find the values of \\( x \\) where \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( (x + 4)(x - 2) = 0 \\)',
                    explanation: 'Roots \\( x = -4, 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = -8 \\)',
                    explanation: 'At \\( (0, -8) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( (x + 1)^2 - 9 \\)',
                    explanation: 'Minimum \\( (-1, -9) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.6,yscale=0.35]\\draw[->] (-6,0)--(4,0) node[right]{\\(x\\)};\\draw[->] (0,-10)--(0,3) node[above]{\\(y\\)};\\draw[domain=-5:3,smooth,thick,blue] plot(\\x,{(\\x)^2+2*\\x-8});\\fill (-4,0) circle(3pt) node[above]{\\(-4\\)};\\fill (2,0) circle(3pt) node[above]{\\(2\\)};\\fill (0,-8) circle(3pt) node[right]{\\(-8\\)};\\fill (-1,-9) circle(3pt) node[below]{\\((-1,-9)\\)};\\end{tikzpicture}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -4, 2 \\); minimum \\( (-1,-9) \\).'
        }
    },
    {
        id: 'a14-05',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 05',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = -x^2 + 4x + 5 \\). Solve \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'n-shape', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise: \\( -(x^2 - 4x - 5) = -(x - 5)(x + 1) \\).',
                    workingLatex: '\\( x = 5,\\; -1 \\)',
                    explanation: 'Roots.'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 5 \\)',
                    explanation: 'At \\( (0, 5) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( -(x - 2)^2 + 9 \\)',
                    explanation: 'Maximum \\( (2, 9) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.6,yscale=0.35]\\draw[->] (-3,0)--(7,0) node[right]{\\(x\\)};\\draw[->] (0,-2)--(0,11) node[above]{\\(y\\)};\\draw[domain=-2:6,smooth,thick,blue] plot(\\x,{-(\\x)^2+4*\\x+5});\\fill (-1,0) circle(3pt) node[below]{\\(-1\\)};\\fill (5,0) circle(3pt) node[below]{\\(5\\)};\\fill (0,5) circle(3pt) node[left]{\\(5\\)};\\fill (2,9) circle(3pt) node[above]{\\((2,9)\\)};\\end{tikzpicture}',
                    explanation: 'N-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -1, 5 \\); maximum \\( (2,9) \\).'
        }
    },
    {
        id: 'a14-06',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 06',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - 9 \\). Find where \\( f(x) = 0 \\).',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'difference of two squares', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Difference of squares.',
                    workingLatex: '\\( (x - 3)(x + 3) = 0 \\)',
                    explanation: 'Roots \\( x = \\pm 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept and minimum at \\( x = 0 \\).',
                    workingLatex: '\\( (0, -9) \\)',
                    explanation: 'The axis of symmetry is the y-axis.'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.6,yscale=0.35]\\draw[->] (-5,0)--(5,0) node[right]{\\(x\\)};\\draw[->] (0,-10)--(0,3) node[above]{\\(y\\)};\\draw[domain=-4:4,smooth,thick,blue] plot(\\x,{(\\x)^2-9});\\fill (-3,0) circle(3pt) node[above left]{\\(-3\\)};\\fill (3,0) circle(3pt) node[above right]{\\(3\\)};\\fill (0,-9) circle(3pt) node[right]{\\((0,-9)\\)};\\end{tikzpicture}',
                    explanation: 'Symmetric about the y-axis.'
                }
            ],
            finalAnswer: 'Roots \\( x = \\pm 3 \\); minimum \\( (0,-9) \\).'
        }
    },
    {
        id: 'a14-07',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 07',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - 4x + 4 \\). Find the value(s) of \\( x \\) for which \\( f(x) = 0 \\).',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'repeated root', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Perfect square.',
                    workingLatex: '\\( (x - 2)^2 = 0 \\)',
                    explanation: 'Repeated root at \\( x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 4 \\)',
                    explanation: 'At \\( (0, 4) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.8,yscale=0.5]\\draw[->] (-1,0)--(5,0) node[right]{\\(x\\)};\\draw[->] (0,-1)--(0,6) node[above]{\\(y\\)};\\draw[domain=0:4,smooth,thick,blue] plot(\\x,{(\\x)^2-4*\\x+4});\\fill (2,0) circle(3pt) node[below]{\\(2\\)};\\fill (0,4) circle(3pt) node[left]{\\(4\\)};\\end{tikzpicture}',
                    explanation: 'Curve touches x-axis at the repeated root.'
                }
            ],
            finalAnswer: 'Repeated root \\( x = 2 \\); minimum \\( (2, 0) \\).'
        }
    },
    {
        id: 'a14-08',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 08',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = (x - 1)(x + 4) \\). Find where \\( f(x) = 0 \\) and show the turning point.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'factorised form', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Roots from factorised form.',
                    workingLatex: '\\( x = 1,\\; -4 \\)',
                    explanation: 'Zeros of each bracket.'
                },
                {
                    stepNumber: 2,
                    description: 'Line of symmetry midway between roots.',
                    workingLatex: '\\( x = -\\tfrac{3}{2} \\)',
                    explanation: 'Turning point x-coordinate.'
                },
                {
                    stepNumber: 3,
                    description: 'Minimum y-value.',
                    workingLatex: '\\( \\left(-\\tfrac{5}{2}\\right)\\left(\\tfrac{5}{2}\\right) = -\\tfrac{25}{4} \\)',
                    explanation: 'Minimum \\( \\left(-\\tfrac{3}{2}, -\\tfrac{25}{4}\\right) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.6,yscale=0.4]\\draw[->] (-6,0)--(3,0) node[right]{\\(x\\)};\\draw[->] (0,-8)--(0,3) node[above]{\\(y\\)};\\draw[domain=-5:2,smooth,thick,blue] plot(\\x,{(\\x-1)*(\\x+4)});\\fill (-4,0) circle(3pt) node[above]{\\(-4\\)};\\fill (1,0) circle(3pt) node[above]{\\(1\\)};\\fill (0,-4) circle(3pt) node[right]{\\(-4\\)};\\fill (-1.5,-6.25) circle(3pt) node[below]{\\(\\left(-\\tfrac{3}{2},-\\tfrac{25}{4}\\right)\\)};\\end{tikzpicture}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -4, 1 \\); minimum \\( \\left(-\\tfrac{3}{2},-\\tfrac{25}{4}\\right) \\).'
        }
    },
    {
        id: 'a14-09',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 09',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = (x + 2)(x - 6) \\). Solve \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'factorised form', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Roots from brackets.',
                    workingLatex: '\\( x = -2,\\; 6 \\)',
                    explanation: 'Set each factor to zero.'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( (2)(-6) = -12 \\)',
                    explanation: 'At \\( (0, -12) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Midpoint of roots.',
                    workingLatex: '\\( x = 2 \\)',
                    explanation: 'Line of symmetry.'
                },
                {
                    stepNumber: 4,
                    description: 'Minimum y-value.',
                    workingLatex: '\\( (4)(-4) = -16 \\)',
                    explanation: 'Minimum \\( (2, -16) \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.5,yscale=0.22]\\draw[->] (-4,0)--(8,0) node[right]{\\(x\\)};\\draw[->] (0,-18)--(0,3) node[above]{\\(y\\)};\\draw[domain=-3:7,smooth,thick,blue] plot(\\x,{(\\x+2)*(\\x-6)});\\fill (-2,0) circle(4pt) node[above]{\\(-2\\)};\\fill (6,0) circle(4pt) node[above]{\\(6\\)};\\fill (0,-12) circle(4pt) node[right]{\\(-12\\)};\\fill (2,-16) circle(4pt) node[below]{\\((2,-16)\\)};\\end{tikzpicture}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -2, 6 \\); minimum \\( (2,-16) \\).'
        }
    },
    {
        id: 'a14-10',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 10',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 + 6x + 5 \\). Find where \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( (x + 1)(x + 5) = 0 \\)',
                    explanation: 'Roots \\( x = -1, -5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 5 \\)',
                    explanation: 'At \\( (0, 5) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( (x + 3)^2 - 4 \\)',
                    explanation: 'Minimum \\( (-3, -4) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.6,yscale=0.5]\\draw[->] (-7,0)--(2,0) node[right]{\\(x\\)};\\draw[->] (0,-5)--(0,6) node[above]{\\(y\\)};\\draw[domain=-6:1,smooth,thick,blue] plot(\\x,{(\\x)^2+6*\\x+5});\\fill (-5,0) circle(3pt) node[above]{\\(-5\\)};\\fill (-1,0) circle(3pt) node[above]{\\(-1\\)};\\fill (0,5) circle(3pt) node[right]{\\(5\\)};\\fill (-3,-4) circle(3pt) node[below]{\\((-3,-4)\\)};\\end{tikzpicture}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -5, -1 \\); minimum \\( (-3,-4) \\).'
        }
    },
    {
        id: 'a14-11',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 11',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - x - 12 \\). Find \\( x \\) where \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( (x - 4)(x + 3) = 0 \\)',
                    explanation: 'Roots \\( x = 4, -3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = -12 \\)',
                    explanation: 'At \\( (0, -12) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( \\left(x - \\tfrac{1}{2}\\right)^2 - \\tfrac{49}{4} \\)',
                    explanation: 'Minimum \\( \\left(\\tfrac{1}{2}, -\\tfrac{49}{4}\\right) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.5,yscale=0.25]\\draw[->] (-5,0)--(6,0) node[right]{\\(x\\)};\\draw[->] (0,-14)--(0,3) node[above]{\\(y\\)};\\draw[domain=-4:5,smooth,thick,blue] plot(\\x,{(\\x)^2-\\x-12});\\fill (-3,0) circle(4pt) node[above]{\\(-3\\)};\\fill (4,0) circle(4pt) node[above]{\\(4\\)};\\fill (0,-12) circle(4pt) node[right]{\\(-12\\)};\\fill (0.5,-12.25) circle(4pt) node[below]{\\(\\left(\\tfrac{1}{2},-\\tfrac{49}{4}\\right)\\)};\\end{tikzpicture}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -3, 4 \\); minimum \\( \\left(\\tfrac{1}{2},-\\tfrac{49}{4}\\right) \\).'
        }
    },
    {
        id: 'a14-12',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 12',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = -x^2 + 2x + 3 \\). Find where \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'n-shape', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( -(x - 3)(x + 1) = 0 \\)',
                    explanation: 'Roots \\( x = 3, -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 3 \\)',
                    explanation: 'At \\( (0, 3) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( -(x - 1)^2 + 4 \\)',
                    explanation: 'Maximum \\( (1, 4) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.8,yscale=0.6]\\draw[->] (-2,0)--(4,0) node[right]{\\(x\\)};\\draw[->] (0,-1)--(0,5) node[above]{\\(y\\)};\\draw[domain=-1.2:3.2,smooth,thick,blue] plot(\\x,{-(\\x)^2+2*\\x+3});\\fill (-1,0) circle(2pt) node[below]{\\(-1\\)};\\fill (3,0) circle(2pt) node[below]{\\(3\\)};\\fill (0,3) circle(2pt) node[left]{\\(3\\)};\\fill (1,4) circle(2pt) node[above]{\\((1,4)\\)};\\end{tikzpicture}',
                    explanation: 'N-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -1, 3 \\); maximum \\( (1,4) \\).'
        }
    },
    {
        id: 'a14-13',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 13',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 + 2x + 1 \\). Find where \\( f(x) = 0 \\).',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'repeated root', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Perfect square.',
                    workingLatex: '\\( (x + 1)^2 = 0 \\)',
                    explanation: 'Repeated root at \\( x = -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 1 \\)',
                    explanation: 'At \\( (0, 1) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.8,yscale=0.8]\\draw[->] (-3,0)--(2,0) node[right]{\\(x\\)};\\draw[->] (0,-0.5)--(0,4) node[above]{\\(y\\)};\\draw[domain=-2.5:0.5,smooth,thick,blue] plot(\\x,{(\\x)^2+2*\\x+1});\\fill (-1,0) circle(2pt) node[below]{\\(-1\\)};\\fill (0,1) circle(2pt) node[right]{\\(1\\)};\\end{tikzpicture}',
                    explanation: 'Touches x-axis at repeated root.'
                }
            ],
            finalAnswer: 'Repeated root \\( x = -1 \\); minimum \\( (-1, 0) \\).'
        }
    },
    {
        id: 'a14-14',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 14',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = 2x^2 - 8 \\). Find where \\( f(x) = 0 \\).',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set equal to zero.',
                    workingLatex: '\\( 2x^2 = 8 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2 \\)',
                    explanation: 'Roots.'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = -8 \\)',
                    explanation: 'Also the minimum.'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.7,yscale=0.3]\\draw[->] (-4,0)--(4,0) node[right]{\\(x\\)};\\draw[->] (0,-10)--(0,3) node[above]{\\(y\\)};\\draw[domain=-3:3,smooth,thick,blue] plot(\\x,{2*(\\x)^2-8});\\fill (-2,0) circle(3pt) node[above left]{\\(-2\\)};\\fill (2,0) circle(3pt) node[above right]{\\(2\\)};\\fill (0,-8) circle(3pt) node[right]{\\((0,-8)\\)};\\end{tikzpicture}',
                    explanation: 'U-shape, symmetric about y-axis.'
                }
            ],
            finalAnswer: 'Roots \\( x = \\pm 2 \\); minimum \\( (0,-8) \\).'
        }
    },
    {
        id: 'a14-15',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 15',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - 3x \\). Find where \\( f(x) = 0 \\).',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( x(x - 3) = 0 \\)',
                    explanation: 'Roots \\( x = 0, 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Line of symmetry.',
                    workingLatex: '\\( x = \\tfrac{3}{2} \\)',
                    explanation: 'Midpoint of roots.'
                },
                {
                    stepNumber: 3,
                    description: 'Minimum value.',
                    workingLatex: '\\( \\tfrac{9}{4} - \\tfrac{9}{2} = -\\tfrac{9}{4} \\)',
                    explanation: 'Minimum \\( \\left(\\tfrac{3}{2}, -\\tfrac{9}{4}\\right) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.9,yscale=0.8]\\draw[->] (-1,0)--(4,0) node[right]{\\(x\\)};\\draw[->] (0,-3)--(0,3) node[above]{\\(y\\)};\\draw[domain=-0.5:3.5,smooth,thick,blue] plot(\\x,{(\\x)^2-3*\\x});\\fill (0,0) circle(2pt) node[above left]{\\(0\\)};\\fill (3,0) circle(2pt) node[above right]{\\(3\\)};\\fill (1.5,-2.25) circle(2pt) node[below]{\\(\\left(\\tfrac{3}{2},-\\tfrac{9}{4}\\right)\\)};\\end{tikzpicture}',
                    explanation: 'U-shape passing through the origin.'
                }
            ],
            finalAnswer: 'Roots \\( x = 0, 3 \\); minimum \\( \\left(\\tfrac{3}{2},-\\tfrac{9}{4}\\right) \\).'
        }
    },
    {
        id: 'a14-16',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 16',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 + 4x \\). Find where \\( f(x) = 0 \\).',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( x(x + 4) = 0 \\)',
                    explanation: 'Roots \\( x = 0, -4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Completed square.',
                    workingLatex: '\\( (x + 2)^2 - 4 \\)',
                    explanation: 'Minimum \\( (-2, -4) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.7,yscale=0.6]\\draw[->] (-5,0)--(2,0) node[right]{\\(x\\)};\\draw[->] (0,-5)--(0,3) node[above]{\\(y\\)};\\draw[domain=-4.5:0.5,smooth,thick,blue] plot(\\x,{(\\x)^2+4*\\x});\\fill (-4,0) circle(2pt) node[above]{\\(-4\\)};\\fill (0,0) circle(2pt) node[above right]{\\(0\\)};\\fill (-2,-4) circle(2pt) node[below]{\\((-2,-4)\\)};\\end{tikzpicture}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -4, 0 \\); minimum \\( (-2,-4) \\).'
        }
    },
    {
        id: 'a14-17',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 17',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = -x^2 + 6x - 8 \\). Solve \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'n-shape', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise: \\( -(x^2 - 6x + 8) = -(x - 2)(x - 4) \\).',
                    workingLatex: '\\( x = 2,\\; 4 \\)',
                    explanation: 'Roots.'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = -8 \\)',
                    explanation: 'At \\( (0, -8) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( -(x - 3)^2 + 1 \\)',
                    explanation: 'Maximum \\( (3, 1) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.6,yscale=0.35]\\draw[->] (-1,0)--(6,0) node[right]{\\(x\\)};\\draw[->] (0,-10)--(0,3) node[above]{\\(y\\)};\\draw[domain=0:6,smooth,thick,blue] plot(\\x,{-(\\x)^2+6*\\x-8});\\fill (2,0) circle(3pt) node[above]{\\(2\\)};\\fill (4,0) circle(3pt) node[above]{\\(4\\)};\\fill (0,-8) circle(3pt) node[right]{\\(-8\\)};\\fill (3,1) circle(3pt) node[above]{\\((3,1)\\)};\\end{tikzpicture}',
                    explanation: 'N-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = 2, 4 \\); maximum \\( (3,1) \\).'
        }
    },
    {
        id: 'a14-18',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 18',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - 2x - 15 \\). Find where \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( (x - 5)(x + 3) = 0 \\)',
                    explanation: 'Roots \\( x = 5, -3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = -15 \\)',
                    explanation: 'At \\( (0, -15) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( (x - 1)^2 - 16 \\)',
                    explanation: 'Minimum \\( (1, -16) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.45,yscale=0.18]\\draw[->] (-5,0)--(7,0) node[right]{\\(x\\)};\\draw[->] (0,-18)--(0,3) node[above]{\\(y\\)};\\draw[domain=-4:6,smooth,thick,blue] plot(\\x,{(\\x)^2-2*\\x-15});\\fill (-3,0) circle(5pt) node[above]{\\(-3\\)};\\fill (5,0) circle(5pt) node[above]{\\(5\\)};\\fill (0,-15) circle(5pt) node[right]{\\(-15\\)};\\fill (1,-16) circle(5pt) node[below]{\\((1,-16)\\)};\\end{tikzpicture}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -3, 5 \\); minimum \\( (1,-16) \\).'
        }
    },
    {
        id: 'a14-19',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 19',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 + 2x - 3 \\). Find where \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( (x + 3)(x - 1) = 0 \\)',
                    explanation: 'Roots \\( x = -3, 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = -3 \\)',
                    explanation: 'At \\( (0, -3) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( (x + 1)^2 - 4 \\)',
                    explanation: 'Minimum \\( (-1, -4) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.8,yscale=0.5]\\draw[->] (-4,0)--(3,0) node[right]{\\(x\\)};\\draw[->] (0,-5)--(0,3) node[above]{\\(y\\)};\\draw[domain=-3.5:1.5,smooth,thick,blue] plot(\\x,{(\\x)^2+2*\\x-3});\\fill (-3,0) circle(2pt) node[above]{\\(-3\\)};\\fill (1,0) circle(2pt) node[above]{\\(1\\)};\\fill (0,-3) circle(2pt) node[right]{\\(-3\\)};\\fill (-1,-4) circle(2pt) node[below]{\\((-1,-4)\\)};\\end{tikzpicture}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -3, 1 \\); minimum \\( (-1,-4) \\).'
        }
    },
    {
        id: 'a14-20',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 20',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - 10x + 21 \\). Find where \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( (x - 3)(x - 7) = 0 \\)',
                    explanation: 'Roots \\( x = 3, 7 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 21 \\)',
                    explanation: 'At \\( (0, 21) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( (x - 5)^2 - 4 \\)',
                    explanation: 'Minimum \\( (5, -4) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.5,yscale=0.18]\\draw[->] (-1,0)--(9,0) node[right]{\\(x\\)};\\draw[->] (0,-6)--(0,23) node[above]{\\(y\\)};\\draw[domain=1:9,smooth,thick,blue] plot(\\x,{(\\x)^2-10*\\x+21});\\fill (3,0) circle(5pt) node[above]{\\(3\\)};\\fill (7,0) circle(5pt) node[above]{\\(7\\)};\\fill (0,21) circle(5pt) node[right]{\\(21\\)};\\fill (5,-4) circle(5pt) node[below]{\\((5,-4)\\)};\\end{tikzpicture}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = 3, 7 \\); minimum \\( (5,-4) \\).'
        }
    },
    {
        id: 'a14-21',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 21',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = 16 - x^2 \\). Find where \\( f(x) = 0 \\).',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'n-shape', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set equal to zero.',
                    workingLatex: '\\( x^2 = 16 \\Rightarrow x = \\pm 4 \\)',
                    explanation: 'Roots.'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept and maximum.',
                    workingLatex: '\\( (0, 16) \\)',
                    explanation: 'Axis of symmetry is y-axis.'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.5,yscale=0.18]\\draw[->] (-6,0)--(6,0) node[right]{\\(x\\)};\\draw[->] (0,-2)--(0,18) node[above]{\\(y\\)};\\draw[domain=-5:5,smooth,thick,blue] plot(\\x,{16-(\\x)^2});\\fill (-4,0) circle(5pt) node[below]{\\(-4\\)};\\fill (4,0) circle(5pt) node[below]{\\(4\\)};\\fill (0,16) circle(5pt) node[right]{\\((0,16)\\)};\\end{tikzpicture}',
                    explanation: 'N-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = \\pm 4 \\); maximum \\( (0,16) \\).'
        }
    },
    {
        id: 'a14-22',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 22',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = (x - 2)^2 - 9 \\). Solve \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'completed square', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Read off vertex.',
                    workingLatex: '\\( (2, -9) \\)',
                    explanation: 'Minimum from completed-square form.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( f(x) = 0 \\).',
                    workingLatex: '\\( (x - 2)^2 = 9 \\Rightarrow x = 5,\\; -1 \\)',
                    explanation: 'Roots.'
                },
                {
                    stepNumber: 3,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 4 - 9 = -5 \\)',
                    explanation: 'At \\( (0, -5) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.6,yscale=0.35]\\draw[->] (-3,0)--(7,0) node[right]{\\(x\\)};\\draw[->] (0,-10)--(0,3) node[above]{\\(y\\)};\\draw[domain=-2:6,smooth,thick,blue] plot(\\x,{(\\x-2)^2-9});\\fill (-1,0) circle(3pt) node[above]{\\(-1\\)};\\fill (5,0) circle(3pt) node[above]{\\(5\\)};\\fill (0,-5) circle(3pt) node[right]{\\(-5\\)};\\fill (2,-9) circle(3pt) node[below]{\\((2,-9)\\)};\\end{tikzpicture}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -1, 5 \\); minimum \\( (2,-9) \\).'
        }
    },
    {
        id: 'a14-23',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 23',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = (x + 3)^2 - 4 \\). Solve \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'completed square', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Vertex from form.',
                    workingLatex: '\\( (-3, -4) \\)',
                    explanation: 'Minimum.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( f(x) = 0 \\).',
                    workingLatex: '\\( (x + 3)^2 = 4 \\Rightarrow x = -1,\\; -5 \\)',
                    explanation: 'Roots.'
                },
                {
                    stepNumber: 3,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 9 - 4 = 5 \\)',
                    explanation: 'At \\( (0, 5) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.6,yscale=0.5]\\draw[->] (-7,0)--(2,0) node[right]{\\(x\\)};\\draw[->] (0,-5)--(0,6) node[above]{\\(y\\)};\\draw[domain=-6:0.5,smooth,thick,blue] plot(\\x,{(\\x+3)^2-4});\\fill (-5,0) circle(2pt) node[above]{\\(-5\\)};\\fill (-1,0) circle(2pt) node[above]{\\(-1\\)};\\fill (0,5) circle(2pt) node[right]{\\(5\\)};\\fill (-3,-4) circle(2pt) node[below]{\\((-3,-4)\\)};\\end{tikzpicture}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -5, -1 \\); minimum \\( (-3,-4) \\).'
        }
    },
    {
        id: 'a14-24',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 24',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - 5x + 6 \\). Find where \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( (x - 2)(x - 3) = 0 \\)',
                    explanation: 'Roots \\( x = 2, 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 6 \\)',
                    explanation: 'At \\( (0, 6) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( \\left(x - \\tfrac{5}{2}\\right)^2 - \\tfrac{1}{4} \\)',
                    explanation: 'Minimum \\( \\left(\\tfrac{5}{2}, -\\tfrac{1}{4}\\right) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.8,yscale=0.5]\\draw[->] (-1,0)--(5,0) node[right]{\\(x\\)};\\draw[->] (0,-1)--(0,7) node[above]{\\(y\\)};\\draw[domain=0:5,smooth,thick,blue] plot(\\x,{(\\x)^2-5*\\x+6});\\fill (2,0) circle(2pt) node[below]{\\(2\\)};\\fill (3,0) circle(2pt) node[below]{\\(3\\)};\\fill (0,6) circle(2pt) node[right]{\\(6\\)};\\fill (2.5,-0.25) circle(2pt) node[below]{\\(\\left(\\tfrac{5}{2},-\\tfrac{1}{4}\\right)\\)};\\end{tikzpicture}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = 2, 3 \\); minimum \\( \\left(\\tfrac{5}{2},-\\tfrac{1}{4}\\right) \\).'
        }
    },
    {
        id: 'a14-25',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 25',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = -x^2 - 2x + 8 \\). Solve \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'n-shape', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise: \\( -(x^2 + 2x - 8) = -(x + 4)(x - 2) \\).',
                    workingLatex: '\\( x = -4,\\; 2 \\)',
                    explanation: 'Roots.'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 8 \\)',
                    explanation: 'At \\( (0, 8) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( -(x + 1)^2 + 9 \\)',
                    explanation: 'Maximum \\( (-1, 9) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.6,yscale=0.35]\\draw[->] (-6,0)--(4,0) node[right]{\\(x\\)};\\draw[->] (0,-2)--(0,11) node[above]{\\(y\\)};\\draw[domain=-5:3,smooth,thick,blue] plot(\\x,{-(\\x)^2-2*\\x+8});\\fill (-4,0) circle(3pt) node[below]{\\(-4\\)};\\fill (2,0) circle(3pt) node[below]{\\(2\\)};\\fill (0,8) circle(3pt) node[right]{\\(8\\)};\\fill (-1,9) circle(3pt) node[above]{\\((-1,9)\\)};\\end{tikzpicture}',
                    explanation: 'N-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -4, 2 \\); maximum \\( (-1,9) \\).'
        }
    },
    {
        id: 'a14-26',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 26',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - 7x + 10 \\). Find where \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise.',
                    workingLatex: '\\( (x - 2)(x - 5) = 0 \\)',
                    explanation: 'Roots \\( x = 2, 5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 10 \\)',
                    explanation: 'At \\( (0, 10) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( \\left(x - \\tfrac{7}{2}\\right)^2 - \\tfrac{9}{4} \\)',
                    explanation: 'Minimum \\( \\left(\\tfrac{7}{2}, -\\tfrac{9}{4}\\right) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.6,yscale=0.3]\\draw[->] (-1,0)--(7,0) node[right]{\\(x\\)};\\draw[->] (0,-4)--(0,12) node[above]{\\(y\\)};\\draw[domain=0:7,smooth,thick,blue] plot(\\x,{(\\x)^2-7*\\x+10});\\fill (2,0) circle(3pt) node[above]{\\(2\\)};\\fill (5,0) circle(3pt) node[above]{\\(5\\)};\\fill (0,10) circle(3pt) node[right]{\\(10\\)};\\fill (3.5,-2.25) circle(3pt) node[below]{\\(\\left(\\tfrac{7}{2},-\\tfrac{9}{4}\\right)\\)};\\end{tikzpicture}',
                    explanation: 'U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = 2, 5 \\); minimum \\( \\left(\\tfrac{7}{2},-\\tfrac{9}{4}\\right) \\).'
        }
    },
    {
        id: 'a14-27',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 27',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 - 25 \\). Find where \\( f(x) = 0 \\).',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'difference of two squares', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Difference of two squares.',
                    workingLatex: '\\( (x - 5)(x + 5) = 0 \\)',
                    explanation: 'Roots \\( x = \\pm 5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Minimum on y-axis.',
                    workingLatex: '\\( (0, -25) \\)',
                    explanation: 'Also the y-intercept.'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.4,yscale=0.12]\\draw[->] (-7,0)--(7,0) node[right]{\\(x\\)};\\draw[->] (0,-28)--(0,5) node[above]{\\(y\\)};\\draw[domain=-6:6,smooth,thick,blue] plot(\\x,{(\\x)^2-25});\\fill (-5,0) circle(6pt) node[above left]{\\(-5\\)};\\fill (5,0) circle(6pt) node[above right]{\\(5\\)};\\fill (0,-25) circle(6pt) node[right]{\\((0,-25)\\)};\\end{tikzpicture}',
                    explanation: 'U-shape symmetric about y-axis.'
                }
            ],
            finalAnswer: 'Roots \\( x = \\pm 5 \\); minimum \\( (0,-25) \\).'
        }
    },
    {
        id: 'a14-28',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 28',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = x^2 + 8x + 16 \\). Find where \\( f(x) = 0 \\).',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'repeated root', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Perfect square.',
                    workingLatex: '\\( (x + 4)^2 = 0 \\)',
                    explanation: 'Repeated root at \\( x = -4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = 16 \\)',
                    explanation: 'At \\( (0, 16) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.5,yscale=0.18]\\draw[->] (-8,0)--(2,0) node[right]{\\(x\\)};\\draw[->] (0,-2)--(0,18) node[above]{\\(y\\)};\\draw[domain=-8:0,smooth,thick,blue] plot(\\x,{(\\x+4)^2});\\fill (-4,0) circle(5pt) node[above]{\\(-4\\)};\\fill (0,16) circle(5pt) node[right]{\\((0,16)\\)};\\end{tikzpicture}',
                    explanation: 'Touches x-axis at repeated root.'
                }
            ],
            finalAnswer: 'Repeated root \\( x = -4 \\); minimum \\( (-4, 0) \\).'
        }
    },
    {
        id: 'a14-29',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 29',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = 2x^2 - 4x - 6 \\). Find where \\( f(x) = 0 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'non-monic', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factor out 2.',
                    workingLatex: '\\( 2(x^2 - 2x - 3) = 2(x - 3)(x + 1) \\)',
                    explanation: 'Roots \\( x = 3, -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept.',
                    workingLatex: '\\( f(0) = -6 \\)',
                    explanation: 'At \\( (0, -6) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Completed square.',
                    workingLatex: '\\( 2(x - 1)^2 - 8 \\)',
                    explanation: 'Minimum \\( (1, -8) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.7,yscale=0.3]\\draw[->] (-3,0)--(5,0) node[right]{\\(x\\)};\\draw[->] (0,-10)--(0,3) node[above]{\\(y\\)};\\draw[domain=-2:4,smooth,thick,blue] plot(\\x,{2*(\\x)^2-4*\\x-6});\\fill (-1,0) circle(3pt) node[above]{\\(-1\\)};\\fill (3,0) circle(3pt) node[above]{\\(3\\)};\\fill (0,-6) circle(3pt) node[right]{\\(-6\\)};\\fill (1,-8) circle(3pt) node[below]{\\((1,-8)\\)};\\end{tikzpicture}',
                    explanation: 'Steeper U-shape.'
                }
            ],
            finalAnswer: 'Roots \\( x = -1, 3 \\); minimum \\( (1,-8) \\).'
        }
    },
    {
        id: 'a14-30',
        topicRef: 'a14',
        topicTitle: 'Sketching Quadratics with TikZ 30',
        difficulty: 'Foundation',
        questionText: 'Sketch \\( y = f(x) \\) where \\( f(x) = -x^2 + 9 \\). Find where \\( f(x) = 0 \\).',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['sketching quadratics', 'n-shape', 'tikz'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set \\( f(x) = 0 \\).',
                    workingLatex: '\\( x^2 = 9 \\Rightarrow x = \\pm 3 \\)',
                    explanation: 'Roots.'
                },
                {
                    stepNumber: 2,
                    description: 'y-intercept and maximum.',
                    workingLatex: '\\( (0, 9) \\)',
                    explanation: 'Axis of symmetry is y-axis.'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch (TikZ):',
                    workingLatex: '\\begin{tikzpicture}[xscale=0.6,yscale=0.3]\\draw[->] (-5,0)--(5,0) node[right]{\\(x\\)};\\draw[->] (0,-2)--(0,11) node[above]{\\(y\\)};\\draw[domain=-4:4,smooth,thick,blue] plot(\\x,{-(\\x)^2+9});\\fill (-3,0) circle(3pt) node[below]{\\(-3\\)};\\fill (3,0) circle(3pt) node[below]{\\(3\\)};\\fill (0,9) circle(3pt) node[right]{\\((0,9)\\)};\\end{tikzpicture}',
                    explanation: 'N-shape symmetric about y-axis.'
                }
            ],
            finalAnswer: 'Roots \\( x = \\pm 3 \\); maximum \\( (0,9) \\).'
        }
    }
];
