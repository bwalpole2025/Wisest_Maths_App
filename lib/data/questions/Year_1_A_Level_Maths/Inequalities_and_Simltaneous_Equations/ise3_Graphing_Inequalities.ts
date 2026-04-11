import { Question } from "@/lib/types";

/**
 * Topic: The Discriminant
 * Ref:   a3
 */
export const questions: Question[] = [
    // ─── TYPE A: True/False — does a point satisfy the inequality? (Q1–Q7) ───────
    {
        id: 'ISE3-001',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 01',
        difficulty: 'Foundation',
        questionText: 'State whether the point \\((1, 2)\\) lies inside or outside the region that satisfies \\( y > 2x - 1 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'point test', 'linear'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=4, ymin=-2, ymax=6,
    xtick={-1,...,4}, ytick={-2,...,6},
    width=6cm, height=6cm
  ]
  \\addplot[dashed, thick, domain=-1:4] {2*x - 1} node[right] {$y = 2x-1$};
  \\addplot[fill=gray!30, fill opacity=0.4, domain=-1:4] {6} \\closedcycle;
  \\addplot[mark=*, mark size=2pt] coordinates {(1,2)} node[above right] {$(1,2)$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute the point \\((1, 2)\\) into the inequality.',
                    workingLatex: 'y > 2x - 1 \\Rightarrow 2 > 2(1) - 1 = 1',
                    explanation: 'Replace x with 1 and y with 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Check whether the statement is true.',
                    workingLatex: '2 > 1 \\checkmark',
                    explanation: 'The inequality holds, so the point is inside the region.'
                }
            ],
            finalAnswer: 'Inside the region'
        }
    },
    {
        id: 'ISE3-002',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 02',
        difficulty: 'Foundation',
        questionText: 'State whether the point \\((3, 1)\\) lies inside or outside the region that satisfies \\( x + y < 5 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'point test', 'linear'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=6, ymin=-1, ymax=6,
    xtick={0,...,6}, ytick={0,...,6},
    width=6cm, height=6cm
  ]
  \\addplot[dashed, thick, domain=-1:6] {5 - x} node[right] {$x+y=5$};
  \\addplot[mark=*, mark size=2pt] coordinates {(3,1)} node[above right] {$(3,1)$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\((3, 1)\\) into \\( x + y < 5 \\).',
                    workingLatex: '3 + 1 = 4 < 5',
                    explanation: '4 is less than 5, so the inequality is satisfied.'
                }
            ],
            finalAnswer: 'Inside the region'
        }
    },
    {
        id: 'ISE3-003',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 03',
        difficulty: 'Foundation',
        questionText: 'State whether the point \\((4, 3)\\) lies inside or outside the region that satisfies \\( 2x + y \\leq 9 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'point test', 'linear'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=6, ymin=-1, ymax=10,
    xtick={0,...,6}, ytick={0,2,...,10},
    width=6cm, height=6cm
  ]
  \\addplot[solid, thick, domain=-1:5] {9 - 2*x} node[right] {$2x+y=9$};
  \\addplot[mark=*, mark size=2pt] coordinates {(4,3)} node[above right] {$(4,3)$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\((4, 3)\\) into \\( 2x + y \\leq 9 \\).',
                    workingLatex: '2(4) + 3 = 11',
                    explanation: 'Compute the left-hand side.'
                },
                {
                    stepNumber: 2,
                    description: 'Check the inequality.',
                    workingLatex: '11 \\leq 9 \\text{ is FALSE}',
                    explanation: '11 is greater than 9, so the point does not satisfy the inequality.'
                }
            ],
            finalAnswer: 'Outside the region'
        }
    },
    {
        id: 'ISE3-004',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 04',
        difficulty: 'Foundation',
        questionText: 'Determine whether the point \\((-1, 4)\\) satisfies \\( y \\leq 3x + 7 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'point test', 'linear'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-3, xmax=3, ymin=-1, ymax=8,
    xtick={-3,...,3}, ytick={0,...,8},
    width=6cm, height=6cm
  ]
  \\addplot[solid, thick, domain=-3:1] {3*x + 7} node[right] {$y=3x+7$};
  \\addplot[mark=*, mark size=2pt] coordinates {(-1,4)} node[above right] {$(-1,4)$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\((-1, 4)\\) into \\( y \\leq 3x + 7 \\).',
                    workingLatex: '4 \\leq 3(-1) + 7 = 4',
                    explanation: 'The right-hand side equals 4.'
                },
                {
                    stepNumber: 2,
                    description: 'The inequality 4 ≤ 4 is true (the point is ON the boundary).',
                    workingLatex: '4 \\leq 4 \\checkmark',
                    explanation: 'Equality satisfies a ≤ inequality, so the point is on the boundary of the region.'
                }
            ],
            finalAnswer: 'On the boundary — satisfies the inequality'
        }
    },
    {
        id: 'ISE3-005',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 05',
        difficulty: 'Foundation',
        questionText: 'State whether the point \\((2, 5)\\) satisfies both \\( y < 3x \\) and \\( x + y > 6 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'point test', 'two inequalities'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=5, ymin=-1, ymax=8,
    xtick={0,...,5}, ytick={0,...,8},
    width=6cm, height=6cm
  ]
  \\addplot[dashed, thick, domain=0:5] {3*x} node[right] {$y=3x$};
  \\addplot[dashed, thick, domain=-1:5] {6 - x} node[right] {$x+y=6$};
  \\addplot[mark=*, mark size=2pt] coordinates {(2,5)} node[above right] {$(2,5)$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Test \\( y < 3x \\) at \\((2,5)\\).',
                    workingLatex: '5 < 3(2) = 6 \\checkmark',
                    explanation: '5 is less than 6, so the first inequality is satisfied.'
                },
                {
                    stepNumber: 2,
                    description: 'Test \\( x + y > 6 \\) at \\((2,5)\\).',
                    workingLatex: '2 + 5 = 7 > 6 \\checkmark',
                    explanation: '7 is greater than 6, so the second inequality is also satisfied.'
                }
            ],
            finalAnswer: 'Yes — both inequalities are satisfied'
        }
    },
    {
        id: 'ISE3-006',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 06',
        difficulty: 'Foundation',
        questionText: 'Determine whether \\((0, 0)\\) lies in the region satisfying \\( y > x + 1 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'point test', 'origin test'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-3, xmax=3, ymin=-2, ymax=5,
    xtick={-3,...,3}, ytick={-2,...,5},
    width=6cm, height=6cm
  ]
  \\addplot[dashed, thick, domain=-3:3] {x + 1} node[right] {$y=x+1$};
  \\addplot[mark=*, mark size=2pt] coordinates {(0,0)} node[below right] {$(0,0)$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute the origin into \\( y > x + 1 \\).',
                    workingLatex: '0 > 0 + 1 = 1',
                    explanation: 'Is 0 > 1? No.'
                },
                {
                    stepNumber: 2,
                    description: 'The statement is false.',
                    workingLatex: '0 > 1 \\text{ is FALSE}',
                    explanation: 'The origin does not satisfy the inequality, so it lies outside the region.'
                }
            ],
            finalAnswer: 'Outside the region'
        }
    },
    {
        id: 'ISE3-007',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 07',
        difficulty: 'Foundation',
        questionText: 'Determine whether the point \\((1, 3)\\) satisfies all three inequalities: \\( x + 2y > 4 \\), \\( y \\leq 4 \\), and \\( x > 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'point test', 'three inequalities'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=5, ymin=-1, ymax=6,
    xtick={0,...,5}, ytick={0,...,6},
    width=6cm, height=6cm
  ]
  \\addplot[dashed, thick, domain=-1:5] {(4 - x)/2} node[right] {$x+2y=4$};
  \\addplot[solid, thick, domain=-1:5] {4} node[right] {$y=4$};
  \\addplot[mark=*, mark size=2pt] coordinates {(1,3)} node[above right] {$(1,3)$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Test \\( x + 2y > 4 \\).',
                    workingLatex: '1 + 2(3) = 7 > 4 \\checkmark',
                    explanation: 'First inequality satisfied.'
                },
                {
                    stepNumber: 2,
                    description: 'Test \\( y \\leq 4 \\).',
                    workingLatex: '3 \\leq 4 \\checkmark',
                    explanation: 'Second inequality satisfied.'
                },
                {
                    stepNumber: 3,
                    description: 'Test \\( x > 0 \\).',
                    workingLatex: '1 > 0 \\checkmark',
                    explanation: 'Third inequality satisfied.'
                }
            ],
            finalAnswer: 'Yes — the point satisfies all three inequalities'
        }
    },

    // ─── TYPE B: Shade the region for two or three LINEAR inequalities (Q8–Q21) ──
    {
        id: 'ISE3-008',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 08',
        difficulty: 'Foundation',
        questionText: 'On a diagram, draw and label the region \\( R \\) that satisfies all three inequalities: \\( x + y < 6 \\), \\( y > 1 \\), and \\( x > 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'linear', 'three inequalities'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=7, ymin=-1, ymax=7,
    xtick={0,...,7}, ytick={0,...,7},
    width=7cm, height=7cm
  ]
  % Boundaries
  \\addplot[dashed, thick, domain=0:6] {6 - x} node[above right] {$x+y=6$};
  \\addplot[dashed, thick, domain=0:7] {1} node[right] {$y=1$};
  % Shading the region R (above y=1, below x+y=6, right of x=0)
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(0,1)(5,1)(0,6)} \\closedcycle;
  \\node at (axis cs:1.5,2.5) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw the line \\( x + y = 6 \\) as a dashed line (strict inequality).',
                    workingLatex: 'y = 6 - x',
                    explanation: 'Passes through (0,6) and (6,0).'
                },
                {
                    stepNumber: 2,
                    description: 'Draw \\( y = 1 \\) as a dashed line and \\( x = 0 \\) (the y-axis) as a dashed line.',
                    workingLatex: 'y = 1,\\quad x = 0',
                    explanation: 'All inequalities are strict, so all boundaries are dashed.'
                },
                {
                    stepNumber: 3,
                    description: 'Test the origin: \\( 0+0 < 6 \\) ✓, \\( 0 > 1 \\) ✗. The origin fails y > 1, so shade above y = 1.',
                    workingLatex: '\\text{Region: above } y=1,\\text{ below } x+y=6,\\text{ right of } x=0',
                    explanation: 'The region is the triangle with vertices (0,1), (5,1), (0,6) — exclusive of boundaries.'
                }
            ],
            finalAnswer: 'Triangular region above \\(y=1\\), below \\(x+y=6\\), to the right of \\(x=0\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-009',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 09',
        difficulty: 'Foundation',
        questionText: 'On a diagram, draw and label the region \\( R \\) that satisfies: \\( y \\leq 5 \\), \\( x \\geq 1 \\), and \\( x + y \\leq 7 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'linear', 'three inequalities'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=8, ymin=-1, ymax=7,
    xtick={0,...,8}, ytick={0,...,7},
    width=7cm, height=7cm
  ]
  \\addplot[solid, thick, domain=1:8] {5} node[right] {$y=5$};
  \\addplot[solid, thick, domain=-1:7] {7 - x} node[above right] {$x+y=7$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(1,5)(2,5)(7,0)(1,0)} \\closedcycle;
  \\draw[solid, thick] (axis cs:1,-1) -- (axis cs:1,7) node[above] {$x=1$};
  \\node at (axis cs:2.5,2.5) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw \\( y = 5 \\) as a solid line (≤), \\( x = 1 \\) as a solid line (≥), and \\( x + y = 7 \\) as a solid line (≤).',
                    workingLatex: 'y = 5,\\quad x = 1,\\quad x + y = 7',
                    explanation: 'All inequalities are non-strict, so all lines are solid and the boundary is included.'
                },
                {
                    stepNumber: 2,
                    description: 'Test a point inside, e.g. (2, 3): \\( 3 \\leq 5\\) ✓, \\( 2 \\geq 1\\) ✓, \\( 2+3=5\\leq 7\\) ✓.',
                    workingLatex: '(2,3) \\text{ satisfies all three}',
                    explanation: 'Shade the region containing (2,3).'
                },
                {
                    stepNumber: 3,
                    description: 'The region is a quadrilateral with vertices (1,5), (2,5), (7,0), (1,0).',
                    workingLatex: '\\text{Vertices: }(1,0),(7,0),(2,5),(1,5)',
                    explanation: 'Label this region R.'
                }
            ],
            finalAnswer: 'Quadrilateral region; vertices \\((1,0),(7,0),(2,5),(1,5)\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-010',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 10',
        difficulty: 'Foundation',
        questionText: 'On a diagram, shade the region satisfying \\( y > x - 2 \\), \\( y < 4 \\), and \\( x \\geq 0 \\). Label it \\( R \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'mixed strict and non-strict'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=7, ymin=-3, ymax=5,
    xtick={0,...,7}, ytick={-3,...,5},
    width=7cm, height=7cm
  ]
  \\addplot[dashed, thick, domain=-1:6] {x - 2} node[right] {$y=x-2$};
  \\addplot[dashed, thick, domain=0:7] {4} node[right] {$y=4$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(0,-2)(6,4)(0,4)} \\closedcycle;
  \\node at (axis cs:1.5,2) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw \\( y = x - 2 \\) as a dashed line and \\( y = 4 \\) as a dashed line (both strict). Draw \\( x = 0 \\) as a solid line (non-strict).',
                    workingLatex: 'y = x - 2 \\text{ (dashed)},\\quad y = 4 \\text{ (dashed)},\\quad x = 0 \\text{ (solid)}',
                    explanation: 'Strict inequalities use dashed lines; ≥ uses a solid line.'
                },
                {
                    stepNumber: 2,
                    description: 'Test (1, 2): \\(2 > 1-2=-1\\) ✓, \\(2 < 4\\) ✓, \\(1 \\geq 0\\) ✓.',
                    workingLatex: '(1,2) \\text{ satisfies all three}',
                    explanation: 'Shade the region containing (1,2).'
                }
            ],
            finalAnswer: 'Triangular region above \\(y=x-2\\), below \\(y=4\\), right of \\(x=0\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-011',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 11',
        difficulty: 'Foundation',
        questionText: 'On a diagram, shade the region satisfying \\( 3x + y \\leq 9 \\), \\( x \\geq 0 \\), and \\( y \\geq 0 \\). Label it \\( R \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'first quadrant', 'linear programming'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=5, ymin=-1, ymax=10,
    xtick={0,...,5}, ytick={0,2,...,10},
    width=6cm, height=7cm
  ]
  \\addplot[solid, thick, domain=0:3] {9 - 3*x} node[right] {$3x+y=9$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(0,0)(3,0)(0,9)} \\closedcycle;
  \\node at (axis cs:0.8,2) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw \\( 3x + y = 9 \\) as a solid line, passing through (0,9) and (3,0).',
                    workingLatex: '3x + y = 9',
                    explanation: 'Non-strict inequality — solid boundary.'
                },
                {
                    stepNumber: 2,
                    description: 'Test the origin: \\(3(0)+0=0 \\leq 9\\) ✓. The region is on the origin side.',
                    workingLatex: '0 \\leq 9 \\checkmark',
                    explanation: 'Shade the triangular region in the first quadrant bounded by the three lines.'
                }
            ],
            finalAnswer: 'Triangle with vertices \\((0,0),(3,0),(0,9)\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-012',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 12',
        difficulty: 'Foundation',
        questionText: 'Shade the region satisfying \\( y \\geq 2x - 3 \\), \\( y \\leq 5 \\), and \\( x \\leq 4 \\). Label it \\( R \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'linear'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-2, xmax=6, ymin=-4, ymax=7,
    xtick={-2,...,6}, ytick={-4,...,7},
    width=7cm, height=7cm
  ]
  \\addplot[solid, thick, domain=-1:5] {2*x - 3} node[right] {$y=2x-3$};
  \\addplot[solid, thick, domain=-2:6] {5} node[right] {$y=5$};
  \\draw[solid, thick] (axis cs:4,-4) -- (axis cs:4,7) node[above] {$x=4$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(-1,-5)(4,5)(4,5)(-1,5)} \\closedcycle;
  \\node at (axis cs:1,3) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'All three inequalities are non-strict (≥ or ≤), so draw all boundaries as solid lines.',
                    workingLatex: 'y = 2x-3,\\quad y = 5,\\quad x = 4',
                    explanation: 'Solid lines include the boundary in the region.'
                },
                {
                    stepNumber: 2,
                    description: 'Test (0, 0): \\(0 \\geq -3\\) ✓, \\(0 \\leq 5\\) ✓, \\(0 \\leq 4\\) ✓.',
                    workingLatex: '(0,0) \\text{ satisfies all three}',
                    explanation: 'The origin lies inside the region.'
                },
                {
                    stepNumber: 3,
                    description: 'The region is bounded above by y = 5, to the right by x = 4, and below by y = 2x - 3.',
                    workingLatex: '\\text{Shade the region containing }(0,0)',
                    explanation: 'Label the region R.'
                }
            ],
            finalAnswer: 'Region above \\(y=2x-3\\), below \\(y=5\\), left of \\(x=4\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-013',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 13',
        difficulty: 'Foundation',
        questionText: 'Shade the region that satisfies \\( x + y > 3 \\), \\( 2x - y < 4 \\), and \\( y < 5 \\). Label it \\( R \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'three inequalities'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-2, xmax=6, ymin=-2, ymax=6,
    xtick={-2,...,6}, ytick={-2,...,6},
    width=7cm, height=7cm
  ]
  \\addplot[dashed, thick, domain=-2:6] {3 - x} node[right] {$x+y=3$};
  \\addplot[dashed, thick, domain=-2:6] {2*x - 4} node[right] {$2x-y=4$};
  \\addplot[dashed, thick, domain=-2:6] {5} node[right] {$y=5$};
  \\node at (axis cs:1.5,4) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'All three are strict inequalities — draw all lines dashed.',
                    workingLatex: 'y = 3-x,\\quad y = 2x-4,\\quad y = 5',
                    explanation: 'Dashed lines for strict inequalities.'
                },
                {
                    stepNumber: 2,
                    description: 'Test (1,4): \\(1+4=5>3\\) ✓, \\(2(1)-4=-2<4\\) ✓, \\(4<5\\) ✓.',
                    workingLatex: '(1,4) \\text{ satisfies all}',
                    explanation: 'Shade the region containing (1,4).'
                }
            ],
            finalAnswer: 'Region above \\(x+y=3\\), above \\(2x-y=4\\) (i.e. \\(y > 2x-4\\)), and below \\(y=5\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-014',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 14',
        difficulty: 'Foundation',
        questionText: 'On a graph, shade and label the region \\( R \\) satisfying \\( x \\leq 5 \\), \\( y \\leq 6 \\), and \\( x + y \\geq 4 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'linear'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-2, xmax=7, ymin=-2, ymax=8,
    xtick={-2,...,7}, ytick={-2,...,8},
    width=7cm, height=7cm
  ]
  \\draw[solid, thick] (axis cs:5,-2) -- (axis cs:5,8) node[above] {$x=5$};
  \\addplot[solid, thick, domain=-2:7] {6} node[right] {$y=6$};
  \\addplot[solid, thick, domain=-2:7] {4 - x} node[right] {$x+y=4$};
  \\node at (axis cs:3,5) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw solid lines for all three (non-strict inequalities).',
                    workingLatex: 'x = 5,\\quad y = 6,\\quad x + y = 4',
                    explanation: 'All boundaries are included.'
                },
                {
                    stepNumber: 2,
                    description: 'Test (3, 5): \\(3\\leq5\\) ✓, \\(5\\leq6\\) ✓, \\(3+5=8\\geq4\\) ✓.',
                    workingLatex: '(3,5) \\text{ satisfies all}',
                    explanation: 'Shade region containing (3,5).'
                }
            ],
            finalAnswer: 'Region left of \\(x=5\\), below \\(y=6\\), above \\(x+y=4\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-015',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 15',
        difficulty: 'Foundation',
        questionText: 'Shade and label region \\( R \\) satisfying \\( y > \\frac{1}{2}x \\), \\( x + y < 8 \\), and \\( y > 1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'fractional gradient'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=9, ymin=-1, ymax=9,
    xtick={0,...,9}, ytick={0,...,9},
    width=7cm, height=7cm
  ]
  \\addplot[dashed, thick, domain=0:9] {0.5*x} node[right] {$y=\\frac{1}{2}x$};
  \\addplot[dashed, thick, domain=-1:9] {8 - x} node[right] {$x+y=8$};
  \\addplot[dashed, thick, domain=-1:9] {1} node[right] {$y=1$};
  \\node at (axis cs:3,4) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'All three are strict — draw all boundaries dashed.',
                    workingLatex: 'y = \\tfrac{1}{2}x,\\quad y = 8-x,\\quad y = 1',
                    explanation: 'Dashed lines for strict inequalities.'
                },
                {
                    stepNumber: 2,
                    description: 'Test (3,4): \\(4>1.5\\) ✓, \\(7<8\\) ✓, \\(4>1\\) ✓.',
                    workingLatex: '(3,4) \\text{ satisfies all}',
                    explanation: 'Shade the region containing (3,4), which is above y = ½x, below x+y=8, and above y=1.'
                }
            ],
            finalAnswer: 'Region above \\(y=\\tfrac{1}{2}x\\), below \\(x+y=8\\), above \\(y=1\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-016',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 16',
        difficulty: 'Foundation',
        questionText: 'Shade the region satisfying \\( y \\leq -x + 6 \\), \\( y \\geq x - 2 \\), and \\( y \\geq 0 \\). Label it \\( R \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'symmetric region'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=8, ymin=-1, ymax=7,
    xtick={0,...,8}, ytick={0,...,7},
    width=7cm, height=7cm
  ]
  \\addplot[solid, thick, domain=-1:7] {-x + 6} node[right] {$y=-x+6$};
  \\addplot[solid, thick, domain=-1:7] {x - 2} node[right] {$y=x-2$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(2,0)(6,0)(4,2)} \\closedcycle;
  \\node at (axis cs:4,1) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw all three as solid lines (non-strict inequalities).',
                    workingLatex: 'y = -x+6,\\quad y = x-2,\\quad y = 0',
                    explanation: 'Boundaries are included in the region.'
                },
                {
                    stepNumber: 2,
                    description: 'Find intersection of y = -x+6 and y = x-2: x = 4, y = 2.',
                    workingLatex: '-x+6 = x-2 \\Rightarrow 2x=8 \\Rightarrow x=4,\\; y=2',
                    explanation: 'This gives a vertex of the region.'
                },
                {
                    stepNumber: 3,
                    description: 'Test (4,1): \\(1\\leq2\\) ✓, \\(1\\geq-1\\) ✓, \\(1\\geq0\\) ✓. Region is triangle (2,0),(6,0),(4,2).',
                    workingLatex: '\\text{Triangle with vertices }(2,0),(6,0),(4,2)',
                    explanation: 'Shade and label R.'
                }
            ],
            finalAnswer: 'Triangular region with vertices \\((2,0),(6,0),(4,2)\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-017',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 17',
        difficulty: 'Foundation',
        questionText: 'Shade the region satisfying \\( 2x + 3y \\leq 12 \\), \\( x \\geq 0 \\), and \\( y \\geq 0 \\). Label it \\( R \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'first quadrant'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=7, ymin=-1, ymax=5,
    xtick={0,...,7}, ytick={0,...,5},
    width=7cm, height=6cm
  ]
  \\addplot[solid, thick, domain=0:6] {(12 - 2*x)/3} node[right] {$2x+3y=12$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(0,0)(6,0)(0,4)} \\closedcycle;
  \\node at (axis cs:1.5,1.2) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw \\(2x+3y=12\\) through (6,0) and (0,4) as a solid line.',
                    workingLatex: '(6,0) \\text{ and } (0,4)',
                    explanation: 'Intercepts found by setting each variable to zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Test origin: \\(0 \\leq 12\\) ✓. Region is on the origin side in the first quadrant.',
                    workingLatex: '0 \\leq 12 \\checkmark',
                    explanation: 'Shade the triangular region (0,0),(6,0),(0,4) and label R.'
                }
            ],
            finalAnswer: 'Triangle with vertices \\((0,0),(6,0),(0,4)\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-018',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 18',
        difficulty: 'Foundation',
        questionText: 'On a diagram, shade and label the region \\( R \\) satisfying \\( y < 2x + 1 \\), \\( y > -x + 4 \\), and \\( x < 3 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'three inequalities'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-2, xmax=5, ymin=-1, ymax=7,
    xtick={-2,...,5}, ytick={0,...,7},
    width=7cm, height=7cm
  ]
  \\addplot[dashed, thick, domain=-2:3] {2*x + 1} node[right] {$y=2x+1$};
  \\addplot[dashed, thick, domain=-2:5] {-x + 4} node[right] {$y=-x+4$};
  \\draw[dashed, thick] (axis cs:3,-1) -- (axis cs:3,7) node[above] {$x=3$};
  \\node at (axis cs:2,3.5) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw all three as dashed lines (strict inequalities).',
                    workingLatex: 'y = 2x+1,\\quad y = -x+4,\\quad x = 3',
                    explanation: 'Boundaries are not included.'
                },
                {
                    stepNumber: 2,
                    description: 'Find where y = 2x+1 and y = -x+4 intersect.',
                    workingLatex: '2x+1 = -x+4 \\Rightarrow 3x=3 \\Rightarrow x=1,\\;y=3',
                    explanation: 'Vertex at (1,3).'
                },
                {
                    stepNumber: 3,
                    description: 'Test (2,4): \\(4<5\\) ✓, \\(4>2\\) ✓, \\(2<3\\) ✓. Shade this region and label R.',
                    workingLatex: '(2,4) \\text{ satisfies all}',
                    explanation: 'Region is above y=-x+4, below y=2x+1, and left of x=3.'
                }
            ],
            finalAnswer: 'Triangular region with vertex \\((1,3)\\), bounded by the three dashed lines; label \\(R\\)'
        }
    },
    {
        id: 'ISE3-019',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 19',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\( R \\) that satisfies \\( x + 2y \\geq 6 \\), \\( 3x - y \\leq 9 \\), and \\( x \\leq 4 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'linear'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=5, ymin=-2, ymax=7,
    xtick={0,...,5}, ytick={-2,...,7},
    width=7cm, height=7cm
  ]
  \\addplot[solid, thick, domain=-1:5] {(6 - x)/2} node[right] {$x+2y=6$};
  \\addplot[solid, thick, domain=-1:5] {3*x - 9} node[right] {$3x-y=9$};
  \\draw[solid, thick] (axis cs:4,-2) -- (axis cs:4,7) node[above] {$x=4$};
  \\node at (axis cs:2,3.5) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw all three as solid lines.',
                    workingLatex: 'x+2y=6,\\quad 3x-y=9,\\quad x=4',
                    explanation: 'Non-strict inequalities — boundaries included.'
                },
                {
                    stepNumber: 2,
                    description: 'Test (2,4): \\(2+8=10\\geq6\\) ✓, \\(6-4=2\\leq9\\) ✓, \\(2\\leq4\\) ✓.',
                    workingLatex: '(2,4) \\text{ satisfies all}',
                    explanation: 'Shade the region containing (2,4) and label R.'
                }
            ],
            finalAnswer: 'Region above \\(x+2y=6\\), above \\(3x-y=9\\) (i.e. \\(y\\geq3x-9\\)), left of \\(x=4\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-020',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 20',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\( R \\) satisfying \\( y \\leq 4 \\), \\( y \\geq 0 \\), \\( x \\geq -1 \\), and \\( x + y \\leq 5 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'four inequalities'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-2, xmax=6, ymin=-1, ymax=6,
    xtick={-2,...,6}, ytick={0,...,6},
    width=7cm, height=7cm
  ]
  \\addplot[solid, thick, domain=-2:6] {4} node[right] {$y=4$};
  \\addplot[solid, thick, domain=-2:6] {5 - x} node[right] {$x+y=5$};
  \\draw[solid, thick] (axis cs:-1,-1) -- (axis cs:-1,6) node[above] {$x=-1$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(-1,0)(5,0)(1,4)(-1,4)} \\closedcycle;
  \\node at (axis cs:1.5,2) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw all four boundaries as solid lines.',
                    workingLatex: 'y=4,\\quad y=0,\\quad x=-1,\\quad x+y=5',
                    explanation: 'All non-strict inequalities.'
                },
                {
                    stepNumber: 2,
                    description: 'The region is a quadrilateral. Vertices: (-1,0),(5,0),(1,4),(-1,4).',
                    workingLatex: '\\text{Vertices: }(-1,0),(5,0),(1,4),(-1,4)',
                    explanation: 'x+y=5 meets y=4 at (1,4); x=-1 meets y=0 at (-1,0).'
                }
            ],
            finalAnswer: 'Quadrilateral with vertices \\((-1,0),(5,0),(1,4),(-1,4)\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-021',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 21',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\( R \\) satisfying \\( 4x + y \\leq 8 \\), \\( y \\geq x \\), and \\( y \\geq 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'linear'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=4, ymin=-1, ymax=9,
    xtick={0,...,4}, ytick={0,...,9},
    width=6cm, height=7cm
  ]
  \\addplot[solid, thick, domain=-1:2.5] {8 - 4*x} node[right] {$4x+y=8$};
  \\addplot[solid, thick, domain=-1:4] {x} node[right] {$y=x$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(0,0)(1.6,1.6)(0,8)} \\closedcycle;
  \\node at (axis cs:0.5,3) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find where 4x+y=8 and y=x intersect.',
                    workingLatex: '4x + x = 8 \\Rightarrow 5x = 8 \\Rightarrow x = 1.6,\\; y = 1.6',
                    explanation: 'Vertex at (1.6, 1.6).'
                },
                {
                    stepNumber: 2,
                    description: 'Test (0,4): \\(0+4\\leq8\\) ✓, \\(4\\geq0\\) ✓, \\(4\\geq0\\) ✓.',
                    workingLatex: '(0,4) \\text{ satisfies all}',
                    explanation: 'Shade the triangular region (0,0),(1.6,1.6),(0,8).'
                }
            ],
            finalAnswer: 'Triangular region with vertices \\((0,0),(1.6,1.6),(0,8)\\); label \\(R\\)'
        }
    },

    // ─── TYPE C: Region involving a CURVE boundary (quadratic) (Q22–Q30) ──────────
    {
        id: 'ISE3-022',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 22',
        difficulty: 'Foundation',
        questionText: 'Shade the region satisfying \\( y > x^2 \\) and \\( y < 4 \\). Label it \\( R \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'curve boundary', 'parabola', 'linear'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-3, xmax=3, ymin=-1, ymax=5,
    xtick={-3,...,3}, ytick={0,...,5},
    width=7cm, height=7cm
  ]
  \\addplot[dashed, thick, domain=-2.5:2.5, samples=100] {x^2} node[right] {$y=x^2$};
  \\addplot[dashed, thick, domain=-3:3] {4} node[right] {$y=4$};
  \\addplot[fill=gray!30, fill opacity=0.5, domain=-2:2, samples=100] {x^2} \\closedcycle;
  \\node at (axis cs:0,2.5) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw the parabola \\( y = x^2 \\) as a dashed curve and the line \\( y = 4 \\) as a dashed line.',
                    workingLatex: 'y = x^2 \\text{ (dashed)},\\quad y = 4 \\text{ (dashed)}',
                    explanation: 'Both are strict inequalities so boundaries are not included.'
                },
                {
                    stepNumber: 2,
                    description: 'They intersect at \\( x^2 = 4 \\Rightarrow x = \\pm 2 \\).',
                    workingLatex: 'x = -2 \\text{ and } x = 2',
                    explanation: 'These are the left and right boundary points of R.'
                },
                {
                    stepNumber: 3,
                    description: 'Test (0, 2): \\(2 > 0\\) ✓ and \\(2 < 4\\) ✓. Shade the region between the parabola and y = 4.',
                    workingLatex: '(0,2) \\text{ satisfies both}',
                    explanation: 'The region is above y = x² and below y = 4.'
                }
            ],
            finalAnswer: 'Region between the parabola \\(y=x^2\\) and the line \\(y=4\\), for \\(-2 < x < 2\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-023',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 23',
        difficulty: 'Foundation',
        questionText: 'Shade the region satisfying \\( y \\leq x^2 + 1 \\) and \\( y \\geq 2 \\). Label it \\( R \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'curve boundary', 'parabola'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-3, xmax=3, ymin=-1, ymax=6,
    xtick={-3,...,3}, ytick={0,...,6},
    width=7cm, height=7cm
  ]
  \\addplot[solid, thick, domain=-2.5:2.5, samples=100] {x^2 + 1} node[right] {$y=x^2+1$};
  \\addplot[solid, thick, domain=-3:3] {2} node[right] {$y=2$};
  \\node at (axis cs:0,1.5) {};
  \\node at (axis cs:1.5,2.5) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw \\( y = x^2 + 1 \\) as a solid curve and \\( y = 2 \\) as a solid line.',
                    workingLatex: 'x^2 + 1 = 2 \\Rightarrow x^2 = 1 \\Rightarrow x = \\pm 1',
                    explanation: 'Curves intersect at (±1, 2).'
                },
                {
                    stepNumber: 2,
                    description: 'We want \\( y \\leq x^2 + 1 \\) (on or below the parabola) AND \\( y \\geq 2 \\) (on or above the line).',
                    workingLatex: '2 \\leq y \\leq x^2 + 1',
                    explanation: 'Only possible when x² + 1 ≥ 2, i.e. x ≤ -1 or x ≥ 1.'
                },
                {
                    stepNumber: 3,
                    description: 'Test (2, 3): \\(3\\leq4+1=5\\) ✓ and \\(3\\geq2\\) ✓. This gives two symmetric regions.',
                    workingLatex: 'x \\leq -1 \\text{ or } x \\geq 1',
                    explanation: 'The region lies between y=2 and the parabola on either side.'
                }
            ],
            finalAnswer: 'Two symmetric regions between \\(y=2\\) and \\(y=x^2+1\\), for \\(|x|\\geq1\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-024',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 24',
        difficulty: 'Foundation',
        questionText: 'Shade the region satisfying \\( y > x^2 - 4 \\) and \\( y < x + 2 \\). Label it \\( R \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'curve and line boundary', 'parabola'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-4, xmax=4, ymin=-5, ymax=6,
    xtick={-4,...,4}, ytick={-5,...,6},
    width=7cm, height=8cm
  ]
  \\addplot[dashed, thick, domain=-3:3, samples=100] {x^2 - 4} node[right] {$y=x^2-4$};
  \\addplot[dashed, thick, domain=-4:4] {x + 2} node[right] {$y=x+2$};
  \\node at (axis cs:0,0) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find where the parabola and line intersect.',
                    workingLatex: 'x^2 - 4 = x + 2 \\Rightarrow x^2 - x - 6 = 0 \\Rightarrow (x-3)(x+2) = 0',
                    explanation: 'Intersections at x = -2 and x = 3.'
                },
                {
                    stepNumber: 2,
                    description: 'Both boundaries are dashed (strict inequalities).',
                    workingLatex: 'y = x^2-4 \\text{ (dashed)},\\quad y = x+2 \\text{ (dashed)}',
                    explanation: 'Boundaries are not included in R.'
                },
                {
                    stepNumber: 3,
                    description: 'Test (0, 0): \\(0 > -4\\) ✓, \\(0 < 2\\) ✓. Shade the region between the curves for \\(-2 < x < 3\\).',
                    workingLatex: '-2 < x < 3',
                    explanation: 'The region is above the parabola and below the line between x = -2 and x = 3.'
                }
            ],
            finalAnswer: 'Region between \\(y=x^2-4\\) and \\(y=x+2\\) for \\(-2 < x < 3\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-025',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 25',
        difficulty: 'Foundation',
        questionText: 'Shade the region satisfying \\( y \\geq x^2 - 2x - 3 \\) and \\( y \\leq 5 \\). Label it \\( R \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'parabola', 'linear boundary'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-3, xmax=5, ymin=-5, ymax=7,
    xtick={-3,...,5}, ytick={-5,...,7},
    width=7cm, height=8cm
  ]
  \\addplot[solid, thick, domain=-2:4, samples=100] {x^2 - 2*x - 3} node[right] {$y=x^2-2x-3$};
  \\addplot[solid, thick, domain=-3:5] {5} node[right] {$y=5$};
  \\node at (axis cs:1,2) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find intersections of y = x²-2x-3 and y = 5.',
                    workingLatex: 'x^2-2x-3 = 5 \\Rightarrow x^2-2x-8=0 \\Rightarrow (x-4)(x+2)=0',
                    explanation: 'Intersections at x = -2 and x = 4.'
                },
                {
                    stepNumber: 2,
                    description: 'Both boundaries are solid lines (non-strict inequalities).',
                    workingLatex: 'y = x^2-2x-3 \\text{ (solid)},\\quad y=5 \\text{ (solid)}',
                    explanation: 'Boundaries are included.'
                },
                {
                    stepNumber: 3,
                    description: 'Test (1,0): \\(0 \\geq 1-2-3=-4\\) ✓, \\(0\\leq5\\) ✓. Region is between the parabola and y=5.',
                    workingLatex: '-2 \\leq x \\leq 4',
                    explanation: 'Shade and label R.'
                }
            ],
            finalAnswer: 'Region above \\(y=x^2-2x-3\\) and below \\(y=5\\) for \\(-2\\leq x\\leq4\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-026',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 26',
        difficulty: 'Foundation',
        questionText: 'Shade the region satisfying \\( y > x^2 - 3x \\) and \\( y < 2x \\). Label it \\( R \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'parabola', 'line through origin'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-2, xmax=7, ymin=-4, ymax=12,
    xtick={-2,...,7}, ytick={-4,-2,...,12},
    width=7cm, height=8cm
  ]
  \\addplot[dashed, thick, domain=-1:6, samples=100] {x^2 - 3*x} node[right] {$y=x^2-3x$};
  \\addplot[dashed, thick, domain=-2:7] {2*x} node[right] {$y=2x$};
  \\node at (axis cs:3,4) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find intersections: \\( x^2 - 3x = 2x \\).',
                    workingLatex: 'x^2 - 5x = 0 \\Rightarrow x(x-5) = 0 \\Rightarrow x=0,\\; x=5',
                    explanation: 'Curves meet at (0,0) and (5,10).'
                },
                {
                    stepNumber: 2,
                    description: 'Both boundaries are dashed.',
                    workingLatex: 'y = x^2-3x \\text{ (dashed)},\\quad y = 2x \\text{ (dashed)}',
                    explanation: 'Strict inequalities.'
                },
                {
                    stepNumber: 3,
                    description: 'Test (3, 4): \\(4 > 9-9=0\\) ✓, \\(4 < 6\\) ✓. Shade between curves for \\(0 < x < 5\\).',
                    workingLatex: '0 < x < 5',
                    explanation: 'Region is above the parabola and below the line y=2x.'
                }
            ],
            finalAnswer: 'Region between \\(y=x^2-3x\\) and \\(y=2x\\) for \\(0<x<5\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-027',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 27',
        difficulty: 'Foundation',
        questionText: 'Shade the region satisfying \\( y \\leq 6 + x - x^2 \\) and \\( y \\geq 0 \\). Label it \\( R \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'inverted parabola', 'x-axis boundary'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-3, xmax=5, ymin=-2, ymax=8,
    xtick={-3,...,5}, ytick={-2,...,8},
    width=7cm, height=7cm
  ]
  \\addplot[solid, thick, domain=-3:4, samples=100] {6 + x - x^2} node[right] {$y=6+x-x^2$};
  \\addplot[fill=gray!30, fill opacity=0.5, domain=-2:3, samples=100] {max(0, 6 + x - x^2)} \\closedcycle;
  \\node at (axis cs:0.5,3) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise \\( 6+x-x^2 = -(x^2-x-6) = -(x-3)(x+2) \\).',
                    workingLatex: '6+x-x^2 = 0 \\Rightarrow x = 3 \\text{ or } x = -2',
                    explanation: 'Parabola crosses x-axis at (-2,0) and (3,0). Opens downward.'
                },
                {
                    stepNumber: 2,
                    description: 'Both boundaries are solid (non-strict).',
                    workingLatex: 'y = 6+x-x^2 \\text{ (solid)},\\quad y = 0 \\text{ (solid)}',
                    explanation: 'Boundaries are included in R.'
                },
                {
                    stepNumber: 3,
                    description: 'Region is above y=0 and below the n-shaped parabola, between x=-2 and x=3.',
                    workingLatex: '-2 \\leq x \\leq 3',
                    explanation: 'Shade and label R.'
                }
            ],
            finalAnswer: 'Region under the parabola \\(y=6+x-x^2\\) and above \\(y=0\\), for \\(-2\\leq x\\leq3\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-028',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 28',
        difficulty: 'Foundation',
        questionText: 'Shade the region satisfying \\( y > x^2 - 1 \\) and \\( x + y < 5 \\). Label it \\( R \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'parabola and line', 'strict inequalities'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-4, xmax=4, ymin=-2, ymax=6,
    xtick={-4,...,4}, ytick={-2,...,6},
    width=7cm, height=7cm
  ]
  \\addplot[dashed, thick, domain=-3:3, samples=100] {x^2 - 1} node[right] {$y=x^2-1$};
  \\addplot[dashed, thick, domain=-4:4] {5 - x} node[right] {$x+y=5$};
  \\node at (axis cs:0,2) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find intersections: \\( x^2 - 1 = 5 - x \\).',
                    workingLatex: 'x^2 + x - 6 = 0 \\Rightarrow (x+3)(x-2) = 0 \\Rightarrow x=-3,\\; x=2',
                    explanation: 'Intersection points at (-3,8) and (2,3).'
                },
                {
                    stepNumber: 2,
                    description: 'Both boundaries are dashed (strict inequalities).',
                    workingLatex: 'y = x^2-1 \\text{ (dashed)},\\quad y = 5-x \\text{ (dashed)}',
                    explanation: 'Boundaries not included.'
                },
                {
                    stepNumber: 3,
                    description: 'Test (0,2): \\(2>-1\\) ✓, \\(2<5\\) ✓. Shade region above parabola and below line.',
                    workingLatex: '-3 < x < 2',
                    explanation: 'Region between the curves for -3 < x < 2.'
                }
            ],
            finalAnswer: 'Region above \\(y=x^2-1\\) and below \\(x+y=5\\) for \\(-3<x<2\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-029',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 29',
        difficulty: 'Foundation',
        questionText: 'Shade the region satisfying \\( y < 4 - x^2 \\) and \\( y > x - 2 \\). Label it \\( R \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'inverted parabola and line'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-4, xmax=4, ymin=-4, ymax=5,
    xtick={-4,...,4}, ytick={-4,...,5},
    width=7cm, height=7cm
  ]
  \\addplot[dashed, thick, domain=-3:3, samples=100] {4 - x^2} node[right] {$y=4-x^2$};
  \\addplot[dashed, thick, domain=-4:4] {x - 2} node[right] {$y=x-2$};
  \\node at (axis cs:0,1) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find intersections: \\( 4 - x^2 = x - 2 \\).',
                    workingLatex: 'x^2 + x - 6 = 0 \\Rightarrow (x+3)(x-2)=0 \\Rightarrow x=-3,\\;x=2',
                    explanation: 'Intersections at (-3,-5) and (2,0).'
                },
                {
                    stepNumber: 2,
                    description: 'Test (0, 1): \\(1 < 4\\) ✓, \\(1 > -2\\) ✓. Region is between the curves.',
                    workingLatex: '-3 < x < 2',
                    explanation: 'The region is above y=x-2 and below the inverted parabola y=4-x².'
                }
            ],
            finalAnswer: 'Region above \\(y=x-2\\) and below \\(y=4-x^2\\) for \\(-3<x<2\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-030',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 30',
        difficulty: 'Foundation',
        questionText: 'Shade the region satisfying \\( y \\geq x^2 + 2x - 3 \\) and \\( y \\leq 2x + 1 \\). Label it \\( R \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'parabola and line', 'non-strict'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-5, xmax=4, ymin=-5, ymax=8,
    xtick={-5,...,4}, ytick={-5,...,8},
    width=7cm, height=8cm
  ]
  \\addplot[solid, thick, domain=-4:3, samples=100] {x^2 + 2*x - 3} node[right] {$y=x^2+2x-3$};
  \\addplot[solid, thick, domain=-5:4] {2*x + 1} node[right] {$y=2x+1$};
  \\node at (axis cs:-1,1) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find intersections: \\( x^2+2x-3 = 2x+1 \\).',
                    workingLatex: 'x^2 - 4 = 0 \\Rightarrow (x-2)(x+2)=0 \\Rightarrow x=-2,\\;x=2',
                    explanation: 'Intersections at (-2,-3) and (2,5).'
                },
                {
                    stepNumber: 2,
                    description: 'Both boundaries are solid (non-strict).',
                    workingLatex: '\\text{Solid curves for } \\geq \\text{ and } \\leq',
                    explanation: 'Boundaries are included in R.'
                },
                {
                    stepNumber: 3,
                    description: 'Test (0,0): \\(0\\geq-3\\) ✓, \\(0\\leq1\\) ✓. Region is between the curves for -2 ≤ x ≤ 2.',
                    workingLatex: '-2 \\leq x \\leq 2',
                    explanation: 'Shade and label R.'
                }
            ],
            finalAnswer: 'Region between \\(y=x^2+2x-3\\) and \\(y=2x+1\\) for \\(-2\\leq x\\leq2\\); label \\(R\\)'
        }
    },

    // ─── TYPE D: Applied / contextual (Q31–Q35) ───────────────────────────────────
    {
        id: 'ISE3-031',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 31',
        difficulty: 'Foundation',
        questionText: 'A farmer has 40 metres of fencing to build a rectangular pen, with one side against a wall (no fence needed on that side). She makes \\( x \\) pens of length and \\( y \\) pens of width. Write the constraint as an inequality in \\( x \\) and \\( y \\), given that she needs at least 5 m of width. Represent both constraints on a graph and label the feasible region \\( R \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'applied', 'linear programming', 'contextual'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$ (length)}, ylabel={$y$ (width)},
    xmin=-1, xmax=32, ymin=-1, ymax=22,
    xtick={0,5,...,30}, ytick={0,5,...,20},
    width=7cm, height=7cm
  ]
  % x + 2y <= 40
  \\addplot[solid, thick, domain=0:30] {(40 - x)/2} node[right] {$x+2y=40$};
  % y >= 5
  \\addplot[solid, thick, domain=0:32] {5} node[right] {$y=5$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(0,5)(30,5)(0,20)} \\closedcycle;
  \\node at (axis cs:8,10) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'With one side against the wall, the fencing covers length x and two widths: \\( x + 2y \\leq 40 \\).',
                    workingLatex: 'x + 2y \\leq 40',
                    explanation: 'Total fencing = length + 2 × width ≤ 40 m.'
                },
                {
                    stepNumber: 2,
                    description: 'The minimum width constraint gives \\( y \\geq 5 \\).',
                    workingLatex: 'y \\geq 5',
                    explanation: 'She needs at least 5 m of width.'
                },
                {
                    stepNumber: 3,
                    description: 'Also \\( x \\geq 0 \\) and \\( y \\geq 0 \\) for physical dimensions.',
                    workingLatex: 'x \\geq 0,\\; y \\geq 0',
                    explanation: 'Lengths must be non-negative.'
                },
                {
                    stepNumber: 4,
                    description: 'Draw solid lines for all constraints and shade the feasible region.',
                    workingLatex: '\\text{Region: } x+2y\\leq40,\\; y\\geq5,\\; x\\geq0',
                    explanation: 'Label region R.'
                }
            ],
            finalAnswer: 'Feasible region \\(R\\): triangle with vertices \\((0,5),(30,5),(0,20)\\)'
        }
    },
    {
        id: 'ISE3-032',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 32',
        difficulty: 'Foundation',
        questionText: 'A school tuck shop sells sandwiches (\\( x \\)) and drinks (\\( y \\)). A sandwich costs £2 and a drink costs £1. They must spend at most £20 on stock, sell at least 3 sandwiches, and at least 4 drinks. Write the three constraints and shade the feasible region \\( R \\) on a graph.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'applied', 'linear programming'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$ (sandwiches)}, ylabel={$y$ (drinks)},
    xmin=-1, xmax=12, ymin=-1, ymax=22,
    xtick={0,...,12}, ytick={0,4,...,20},
    width=7cm, height=7cm
  ]
  \\addplot[solid, thick, domain=0:10] {20 - 2*x} node[right] {$2x+y=20$};
  \\draw[solid, thick] (axis cs:3,-1) -- (axis cs:3,22) node[above] {$x=3$};
  \\addplot[solid, thick, domain=0:12] {4} node[right] {$y=4$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(3,4)(8.5,4)(3,14)} \\closedcycle;
  \\node at (axis cs:4.5,8) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Budget constraint: \\( 2x + y \\leq 20 \\).',
                    workingLatex: '2x + y \\leq 20',
                    explanation: '£2 per sandwich and £1 per drink, total ≤ £20.'
                },
                {
                    stepNumber: 2,
                    description: 'Minimum sandwiches: \\( x \\geq 3 \\). Minimum drinks: \\( y \\geq 4 \\).',
                    workingLatex: 'x \\geq 3,\\quad y \\geq 4',
                    explanation: 'At least 3 sandwiches and 4 drinks must be stocked.'
                },
                {
                    stepNumber: 3,
                    description: 'Draw solid lines and shade the feasible region.',
                    workingLatex: '\\text{Vertices: }(3,4),(8.5,4),(3,14)',
                    explanation: 'Lines 2x+y=20 and x=3 meet at (3,14); 2x+y=20 and y=4 meet at (8,4).'
                }
            ],
            finalAnswer: 'Feasible region \\(R\\) with vertices \\((3,14),(8,4),(3,4)\\)'
        }
    },
    {
        id: 'ISE3-033',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 33',
        difficulty: 'Foundation',
        questionText: 'A garden designer plans a rectangular lawn of width \\( x \\) m and length \\( y \\) m. The perimeter must be at most 30 m, the length must be at least twice the width, and both dimensions must be positive. Shade the feasible region \\( R \\) on a graph.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'applied', 'linear programming', 'perimeter'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$ (width)}, ylabel={$y$ (length)},
    xmin=-1, xmax=8, ymin=-1, ymax=16,
    xtick={0,...,8}, ytick={0,2,...,16},
    width=6cm, height=7cm
  ]
  % 2x + 2y <= 30, i.e. x + y <= 15
  \\addplot[solid, thick, domain=0:8] {15 - x} node[right] {$x+y=15$};
  % y >= 2x
  \\addplot[solid, thick, domain=0:7] {2*x} node[right] {$y=2x$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(0,0)(5,10)(0,15)} \\closedcycle;
  \\node at (axis cs:1.5,8) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Perimeter constraint: \\(2x + 2y \\leq 30 \\Rightarrow x + y \\leq 15\\).',
                    workingLatex: 'x + y \\leq 15',
                    explanation: 'Perimeter = 2(length + width).'
                },
                {
                    stepNumber: 2,
                    description: 'Length at least twice width: \\( y \\geq 2x \\).',
                    workingLatex: 'y \\geq 2x',
                    explanation: 'Length must be at least twice the width.'
                },
                {
                    stepNumber: 3,
                    description: 'Also \\(x > 0, y > 0\\). Intersect x+y=15 and y=2x: x=5, y=10.',
                    workingLatex: '2x + x = 15 \\Rightarrow x=5,\\; y=10',
                    explanation: 'Vertex at (5,10). Region is triangle (0,0),(5,10),(0,15).'
                }
            ],
            finalAnswer: 'Feasible region \\(R\\): triangle with vertices \\((0,0),(5,10),(0,15)\\)'
        }
    },
    {
        id: 'ISE3-034',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 34',
        difficulty: 'Foundation',
        questionText: 'Determine which region, \\( A \\) or \\( B \\), has the greater area, where:\n\\( A \\): \\( x \\geq 0,\\; y \\geq 0,\\; x + y \\leq 6 \\)\n\\( B \\): \\( x \\geq 1,\\; y \\geq 1,\\; 2x + y \\leq 10 \\)',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'compare regions', 'area'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=10, ymin=-1, ymax=10,
    xtick={0,...,10}, ytick={0,...,10},
    width=7cm, height=7cm
  ]
  % Region A
  \\addplot[fill=blue!20, fill opacity=0.5] coordinates {(0,0)(6,0)(0,6)} \\closedcycle;
  \\addplot[solid, blue, thick, domain=0:6] {6-x} node[right] {$A: x+y=6$};
  % Region B
  \\addplot[fill=red!20, fill opacity=0.5] coordinates {(1,1)(4.5,1)(1,8)} \\closedcycle;
  \\addplot[solid, red, thick, domain=1:5] {10-2*x} node[right] {$B: 2x+y=10$};
  \\node[blue] at (axis cs:1.5,1.5) {$A$};
  \\node[red] at (axis cs:2,5) {$B$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find vertices of region A.',
                    workingLatex: 'A: (0,0),\\;(6,0),\\;(0,6)',
                    explanation: 'Right triangle with legs of length 6.'
                },
                {
                    stepNumber: 2,
                    description: 'Area of A = ½ × base × height.',
                    workingLatex: '\\text{Area}_A = \\tfrac{1}{2} \\times 6 \\times 6 = 18 \\text{ units}^2',
                    explanation: 'Right triangle with base = height = 6.'
                },
                {
                    stepNumber: 3,
                    description: 'Find vertices of region B: x≥1, y≥1, 2x+y≤10. Intersect 2x+y=10 with y=1: x=4.5. With x=1: y=8.',
                    workingLatex: 'B: (1,1),\\;(4.5,1),\\;(1,8)',
                    explanation: 'Right triangle with legs 3.5 and 7.'
                },
                {
                    stepNumber: 4,
                    description: 'Area of B.',
                    workingLatex: '\\text{Area}_B = \\tfrac{1}{2} \\times 3.5 \\times 7 = 12.25 \\text{ units}^2',
                    explanation: 'Region A has greater area (18 > 12.25).'
                }
            ],
            finalAnswer: 'Region \\(A\\) has greater area (18 units² vs 12.25 units²)'
        }
    },
    {
        id: 'ISE3-035',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 35',
        difficulty: 'Foundation',
        questionText: 'A potter makes mugs (\\( x \\)) and bowls (\\( y \\)). Each mug takes 2 hours to make and each bowl takes 3 hours. She has at most 24 hours available. She wants to make at least 4 mugs and at least 2 bowls. Draw and shade the feasible region \\( R \\) on a graph, and state the coordinates of all vertices of \\( R \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'applied', 'linear programming', 'vertices'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$ (mugs)}, ylabel={$y$ (bowls)},
    xmin=-1, xmax=14, ymin=-1, ymax=10,
    xtick={0,...,14}, ytick={0,...,10},
    width=7cm, height=7cm
  ]
  % 2x + 3y <= 24
  \\addplot[solid, thick, domain=0:12] {(24 - 2*x)/3} node[right] {$2x+3y=24$};
  % x >= 4
  \\draw[solid, thick] (axis cs:4,-1) -- (axis cs:4,10) node[above] {$x=4$};
  % y >= 2
  \\addplot[solid, thick, domain=0:14] {2} node[right] {$y=2$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(4,2)(9,2)(4,16/3)} \\closedcycle;
  \\node at (axis cs:5.5,3.5) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the three constraints.',
                    workingLatex: '2x + 3y \\leq 24,\\quad x \\geq 4,\\quad y \\geq 2',
                    explanation: 'Time constraint and minimum production requirements.'
                },
                {
                    stepNumber: 2,
                    description: 'Find vertex 1: intersection of x=4 and y=2.',
                    workingLatex: '(4, 2)',
                    explanation: 'Minimum of both mugs and bowls.'
                },
                {
                    stepNumber: 3,
                    description: 'Find vertex 2: intersection of y=2 and 2x+3y=24.',
                    workingLatex: '2x + 6 = 24 \\Rightarrow x = 9 \\Rightarrow (9, 2)',
                    explanation: 'Maximum mugs when bowls are at minimum.'
                },
                {
                    stepNumber: 4,
                    description: 'Find vertex 3: intersection of x=4 and 2x+3y=24.',
                    workingLatex: '8 + 3y = 24 \\Rightarrow y = \\tfrac{16}{3} \\approx 5.3 \\Rightarrow (4,\\, \\tfrac{16}{3})',
                    explanation: 'Maximum bowls when mugs are at minimum.'
                }
            ],
            finalAnswer: 'Vertices of \\(R\\): \\((4,2),\\;(9,2),\\;\\left(4,\\,\\tfrac{16}{3}\\right)\\)'
        }
    },
    const graphingInequalitiesQuestionsB = [

    // ─── TYPE A: True/False point tests — more varied inequalities (Q36–Q42) ──────
    {
        id: 'ISE3-036',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 36',
        difficulty: 'Foundation',
        questionText: 'State whether the point \\((2, -1)\\) satisfies \\( 3x - 2y > 5 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'point test', 'linear'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=5, ymin=-3, ymax=4,
    xtick={0,...,5}, ytick={-3,...,4},
    width=6cm, height=6cm
  ]
  \\addplot[dashed, thick, domain=-1:4] {(3*x - 5)/2} node[right] {$3x-2y=5$};
  \\addplot[mark=*, mark size=2pt] coordinates {(2,-1)} node[above right] {$(2,-1)$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\((2,-1)\\) into \\(3x - 2y > 5\\).',
                    workingLatex: '3(2) - 2(-1) = 6 + 2 = 8',
                    explanation: 'Evaluate the left-hand side.'
                },
                {
                    stepNumber: 2,
                    description: 'Check the inequality.',
                    workingLatex: '8 > 5 \\checkmark',
                    explanation: 'The statement is true, so the point lies inside the region.'
                }
            ],
            finalAnswer: 'Yes — the point satisfies the inequality (inside the region)'
        }
    },
    {
        id: 'ISE3-037',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 37',
        difficulty: 'Foundation',
        questionText: 'Does the point \\((-2, 3)\\) lie in the region satisfying \\( y < 2x + 8 \\)?',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'point test', 'linear'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-5, xmax=3, ymin=-1, ymax=8,
    xtick={-5,...,3}, ytick={0,...,8},
    width=6cm, height=6cm
  ]
  \\addplot[dashed, thick, domain=-5:2] {2*x + 8} node[right] {$y=2x+8$};
  \\addplot[mark=*, mark size=2pt] coordinates {(-2,3)} node[above right] {$(-2,3)$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\((-2, 3)\\) into \\(y < 2x + 8\\).',
                    workingLatex: '3 < 2(-2) + 8 = 4',
                    explanation: 'Evaluate the right-hand side.'
                },
                {
                    stepNumber: 2,
                    description: 'Is 3 < 4?',
                    workingLatex: '3 < 4 \\checkmark',
                    explanation: 'Yes — the point is inside the region.'
                }
            ],
            finalAnswer: 'Yes — the point satisfies the inequality'
        }
    },
    {
        id: 'ISE3-038',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 38',
        difficulty: 'Foundation',
        questionText: 'Does the point \\((5, 2)\\) satisfy \\( y \\geq -x + 6 \\)?',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'point test', 'boundary'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=7, ymin=-2, ymax=7,
    xtick={0,...,7}, ytick={-2,...,7},
    width=6cm, height=6cm
  ]
  \\addplot[solid, thick, domain=-1:7] {-x + 6} node[right] {$y=-x+6$};
  \\addplot[mark=*, mark size=2pt] coordinates {(5,2)} node[above right] {$(5,2)$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\((5,2)\\) into \\(y \\geq -x + 6\\).',
                    workingLatex: '2 \\geq -(5) + 6 = 1',
                    explanation: 'Evaluate the right-hand side.'
                },
                {
                    stepNumber: 2,
                    description: 'Is 2 ≥ 1?',
                    workingLatex: '2 \\geq 1 \\checkmark',
                    explanation: 'Yes — the point satisfies the inequality.'
                }
            ],
            finalAnswer: 'Yes — the point is inside the region'
        }
    },
    {
        id: 'ISE3-039',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 39',
        difficulty: 'Foundation',
        questionText: 'State whether \\((0, 5)\\) satisfies all of: \\( x + y \\leq 7 \\), \\( y \\leq 6 \\), \\( x \\geq -1 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'point test', 'three inequalities'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-2, xmax=8, ymin=-1, ymax=8,
    xtick={-2,...,8}, ytick={0,...,8},
    width=6cm, height=6cm
  ]
  \\addplot[solid, thick, domain=-2:8] {7 - x} node[right] {$x+y=7$};
  \\addplot[solid, thick, domain=-2:8] {6} node[right] {$y=6$};
  \\draw[solid, thick] (axis cs:-1,-1) -- (axis cs:-1,8) node[above] {$x=-1$};
  \\addplot[mark=*, mark size=2pt] coordinates {(0,5)} node[right] {$(0,5)$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Test \\(x + y \\leq 7\\): \\(0+5=5\\leq7\\) ✓',
                    workingLatex: '5 \\leq 7 \\checkmark',
                    explanation: 'First condition satisfied.'
                },
                {
                    stepNumber: 2,
                    description: 'Test \\(y \\leq 6\\): \\(5\\leq6\\) ✓',
                    workingLatex: '5 \\leq 6 \\checkmark',
                    explanation: 'Second condition satisfied.'
                },
                {
                    stepNumber: 3,
                    description: 'Test \\(x \\geq -1\\): \\(0\\geq-1\\) ✓',
                    workingLatex: '0 \\geq -1 \\checkmark',
                    explanation: 'All three conditions satisfied.'
                }
            ],
            finalAnswer: 'Yes — \\((0,5)\\) satisfies all three inequalities'
        }
    },
    {
        id: 'ISE3-040',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 40',
        difficulty: 'Foundation',
        questionText: 'Does the point \\((3, 8)\\) lie in the region satisfying \\( y < x^2 \\)?',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'point test', 'curve boundary'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-4, xmax=4, ymin=-1, ymax=12,
    xtick={-4,...,4}, ytick={0,2,...,12},
    width=6cm, height=7cm
  ]
  \\addplot[dashed, thick, domain=-3.5:3.5, samples=80] {x^2} node[right] {$y=x^2$};
  \\addplot[mark=*, mark size=2pt] coordinates {(3,8)} node[right] {$(3,8)$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\((3,8)\\) into \\(y < x^2\\).',
                    workingLatex: '8 < 3^2 = 9',
                    explanation: 'Is 8 less than 9?'
                },
                {
                    stepNumber: 2,
                    description: 'Check the inequality.',
                    workingLatex: '8 < 9 \\checkmark',
                    explanation: 'True — the point is below the parabola, so it lies inside the region.'
                }
            ],
            finalAnswer: 'Yes — \\((3,8)\\) satisfies \\(y < x^2\\)'
        }
    },
    {
        id: 'ISE3-041',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 41',
        difficulty: 'Foundation',
        questionText: 'Does the point \\((1, 2)\\) lie inside the region satisfying \\( y > x^2 - x - 2 \\)?',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'point test', 'parabola'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-2, xmax=4, ymin=-3, ymax=5,
    xtick={-2,...,4}, ytick={-3,...,5},
    width=6cm, height=6cm
  ]
  \\addplot[dashed, thick, domain=-2:3.5, samples=80] {x^2 - x - 2} node[right] {$y=x^2-x-2$};
  \\addplot[mark=*, mark size=2pt] coordinates {(1,2)} node[right] {$(1,2)$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\((1,2)\\) into \\(y > x^2 - x - 2\\).',
                    workingLatex: '2 > 1 - 1 - 2 = -2',
                    explanation: 'Evaluate the right-hand side at x = 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Is 2 > -2?',
                    workingLatex: '2 > -2 \\checkmark',
                    explanation: 'Yes — the point is above the parabola, satisfying the inequality.'
                }
            ],
            finalAnswer: 'Yes — \\((1,2)\\) is inside the region'
        }
    },
    {
        id: 'ISE3-042',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 42',
        difficulty: 'Foundation',
        questionText: 'Determine whether \\((4, 1)\\) satisfies both \\( y \\leq x - 2 \\) and \\( y \\geq 4 - x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'point test', 'two linear boundaries'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=7, ymin=-2, ymax=5,
    xtick={0,...,7}, ytick={-2,...,5},
    width=6cm, height=6cm
  ]
  \\addplot[solid, thick, domain=-1:7] {x - 2} node[right] {$y=x-2$};
  \\addplot[solid, thick, domain=-1:7] {4 - x} node[right] {$y=4-x$};
  \\addplot[mark=*, mark size=2pt] coordinates {(4,1)} node[right] {$(4,1)$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Test \\(y \\leq x - 2\\): \\(1 \\leq 4-2=2\\) ✓',
                    workingLatex: '1 \\leq 2 \\checkmark',
                    explanation: 'First condition satisfied.'
                },
                {
                    stepNumber: 2,
                    description: 'Test \\(y \\geq 4 - x\\): \\(1 \\geq 4-4=0\\) ✓',
                    workingLatex: '1 \\geq 0 \\checkmark',
                    explanation: 'Second condition satisfied.'
                }
            ],
            finalAnswer: 'Yes — \\((4,1)\\) satisfies both inequalities'
        }
    },

    // ─── TYPE B: Two/three linear inequalities — fresh setups (Q43–Q56) ───────────
    {
        id: 'ISE3-043',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 43',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( y > 2 \\), \\( x > 1 \\), and \\( x + y < 7 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'triangle', 'strict'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=8, ymin=-1, ymax=8,
    xtick={0,...,8}, ytick={0,...,8},
    width=7cm, height=7cm
  ]
  \\addplot[dashed, thick, domain=0:8] {2} node[right] {$y=2$};
  \\draw[dashed, thick] (axis cs:1,-1) -- (axis cs:1,8) node[above] {$x=1$};
  \\addplot[dashed, thick, domain=0:7] {7 - x} node[above right] {$x+y=7$};
  \\addplot[fill=gray!30, fill opacity=0.4] coordinates {(1,2)(5,2)(1,6)} \\closedcycle;
  \\node at (axis cs:2,3.5) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'All three inequalities are strict — draw all three lines dashed.',
                    workingLatex: 'y=2 \\text{ (dashed)},\\quad x=1 \\text{ (dashed)},\\quad x+y=7 \\text{ (dashed)}',
                    explanation: 'Strict inequalities exclude the boundary.'
                },
                {
                    stepNumber: 2,
                    description: 'Find vertices of the region: (1,2), (5,2), and (1,6).',
                    workingLatex: 'x+y=7 \\cap y=2: x=5;\\quad x+y=7 \\cap x=1: y=6',
                    explanation: 'Corners of the triangle.'
                },
                {
                    stepNumber: 3,
                    description: 'Test (2,3): \\(3>2\\) ✓, \\(2>1\\) ✓, \\(5<7\\) ✓. Shade and label R.',
                    workingLatex: '(2,3) \\text{ satisfies all}',
                    explanation: 'Triangle above y=2, right of x=1, below x+y=7.'
                }
            ],
            finalAnswer: 'Triangular region with vertices \\((1,2),(5,2),(1,6)\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-044',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 44',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( y \\leq 3x \\), \\( y \\geq 0 \\), and \\( x \\leq 4 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'through origin'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=5, ymin=-1, ymax=13,
    xtick={0,...,5}, ytick={0,3,...,12},
    width=6cm, height=7cm
  ]
  \\addplot[solid, thick, domain=0:4] {3*x} node[right] {$y=3x$};
  \\draw[solid, thick] (axis cs:4,-1) -- (axis cs:4,13) node[above] {$x=4$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(0,0)(4,0)(4,12)} \\closedcycle;
  \\node at (axis cs:2.5,4) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw solid lines for all (non-strict inequalities).',
                    workingLatex: 'y=3x,\\quad y=0,\\quad x=4',
                    explanation: 'Boundaries are included.'
                },
                {
                    stepNumber: 2,
                    description: 'Test (2,4): \\(4\\leq6\\) ✓, \\(4\\geq0\\) ✓, \\(2\\leq4\\) ✓.',
                    workingLatex: '(2,4) \\text{ satisfies all}',
                    explanation: 'Triangle with vertices (0,0),(4,0),(4,12).'
                }
            ],
            finalAnswer: 'Triangular region with vertices \\((0,0),(4,0),(4,12)\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-045',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 45',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( 2y - x \\geq 2 \\), \\( y \\leq 5 \\), and \\( x \\geq 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'three linear'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=9, ymin=-1, ymax=7,
    xtick={0,...,9}, ytick={0,...,7},
    width=7cm, height=6cm
  ]
  \\addplot[solid, thick, domain=0:9] {(x + 2)/2} node[right] {$2y-x=2$};
  \\addplot[solid, thick, domain=-1:9] {5} node[right] {$y=5$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(0,1)(8,5)(0,5)} \\closedcycle;
  \\node at (axis cs:2,4) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\(2y - x \\geq 2\\) as \\(y \\geq \\frac{x+2}{2}\\). Draw all three solid lines.',
                    workingLatex: 'y = \\tfrac{x+2}{2},\\quad y=5,\\quad x=0',
                    explanation: 'Non-strict — solid lines.'
                },
                {
                    stepNumber: 2,
                    description: 'Intersection of y=(x+2)/2 and y=5: x=8. So vertices are (0,1),(8,5),(0,5).',
                    workingLatex: '\\tfrac{x+2}{2}=5 \\Rightarrow x=8',
                    explanation: 'Triangular region.'
                },
                {
                    stepNumber: 3,
                    description: 'Test (1,4): \\(8-1=7\\geq2\\) ✓, \\(4\\leq5\\) ✓, \\(1\\geq0\\) ✓. Shade and label R.',
                    workingLatex: '(1,4) \\text{ satisfies all}',
                    explanation: 'Region above the slanted line, below y=5, and right of x=0.'
                }
            ],
            finalAnswer: 'Triangular region with vertices \\((0,1),(8,5),(0,5)\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-046',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 46',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( x - y < 3 \\), \\( x < 5 \\), and \\( y > -1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'strict', 'three linear'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-2, xmax=7, ymin=-3, ymax=5,
    xtick={-2,...,7}, ytick={-3,...,5},
    width=7cm, height=6cm
  ]
  \\addplot[dashed, thick, domain=-2:6] {x - 3} node[right] {$x-y=3$};
  \\draw[dashed, thick] (axis cs:5,-3) -- (axis cs:5,5) node[above] {$x=5$};
  \\addplot[dashed, thick, domain=-2:7] {-1} node[right] {$y=-1$};
  \\node at (axis cs:2,1.5) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'All three are strict — draw all boundaries dashed.',
                    workingLatex: 'x-y=3,\\quad x=5,\\quad y=-1',
                    explanation: 'Boundaries are not included.'
                },
                {
                    stepNumber: 2,
                    description: 'Test (0,0): \\(0-0=0<3\\) ✓, \\(0<5\\) ✓, \\(0>-1\\) ✓.',
                    workingLatex: '(0,0) \\text{ satisfies all}',
                    explanation: 'Origin is inside the region.'
                },
                {
                    stepNumber: 3,
                    description: 'Region is above y = x-3, left of x = 5, and above y = -1.',
                    workingLatex: '\\text{Shade region containing }(0,0)',
                    explanation: 'Label R.'
                }
            ],
            finalAnswer: 'Region above \\(y=x-3\\), left of \\(x=5\\), above \\(y=-1\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-047',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 47',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( y \\leq 2x + 4 \\), \\( y \\leq -x + 7 \\), and \\( y \\geq 1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'two slanted lines'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-3, xmax=6, ymin=-1, ymax=8,
    xtick={-3,...,6}, ytick={0,...,8},
    width=7cm, height=7cm
  ]
  \\addplot[solid, thick, domain=-3:3] {2*x + 4} node[right] {$y=2x+4$};
  \\addplot[solid, thick, domain=-1:6] {-x + 7} node[right] {$y=-x+7$};
  \\addplot[solid, thick, domain=-3:6] {1} node[right] {$y=1$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(-1.5,1)(2,1)(1,6)(-1.5,1)} \\closedcycle;
  \\node at (axis cs:0.5,3) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find intersections: y=2x+4 and y=-x+7: x=1, y=6. y=2x+4 and y=1: x=-1.5. y=-x+7 and y=1: x=6.',
                    workingLatex: '2x+4=-x+7 \\Rightarrow 3x=3 \\Rightarrow x=1,\\;y=6',
                    explanation: 'Vertices of the triangular region.'
                },
                {
                    stepNumber: 2,
                    description: 'Test (0,3): \\(3\\leq4\\) ✓, \\(3\\leq7\\) ✓, \\(3\\geq1\\) ✓.',
                    workingLatex: '(0,3) \\text{ satisfies all}',
                    explanation: 'Shade and label R.'
                }
            ],
            finalAnswer: 'Triangular region with vertices \\((-1.5,1),(6,1),(1,6)\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-048',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 48',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( 5x + 2y \\leq 20 \\), \\( x \\geq 0 \\), and \\( y \\geq 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'first quadrant', 'linear programming'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=5, ymin=-1, ymax=12,
    xtick={0,...,5}, ytick={0,2,...,12},
    width=6cm, height=7cm
  ]
  \\addplot[solid, thick, domain=0:4] {(20 - 5*x)/2} node[right] {$5x+2y=20$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(0,0)(4,0)(0,10)} \\closedcycle;
  \\node at (axis cs:1,3) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find intercepts: when x=0, y=10; when y=0, x=4.',
                    workingLatex: '(0,10) \\text{ and } (4,0)',
                    explanation: 'Draw solid line through these intercepts.'
                },
                {
                    stepNumber: 2,
                    description: 'Test origin: \\(0\\leq20\\) ✓. Shade the triangular region in the first quadrant.',
                    workingLatex: '\\text{Triangle: }(0,0),(4,0),(0,10)',
                    explanation: 'Label R.'
                }
            ],
            finalAnswer: 'Triangular region with vertices \\((0,0),(4,0),(0,10)\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-049',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 49',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( y \\geq x - 1 \\), \\( y \\leq -2x + 8 \\), and \\( y \\geq 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'triangle'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=6, ymin=-1, ymax=9,
    xtick={0,...,6}, ytick={0,...,9},
    width=7cm, height=7cm
  ]
  \\addplot[solid, thick, domain=-1:6] {x - 1} node[right] {$y=x-1$};
  \\addplot[solid, thick, domain=-1:5] {-2*x + 8} node[right] {$y=-2x+8$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(1,0)(4,0)(3,2)} \\closedcycle;
  \\node at (axis cs:2.5,1) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find intersections: y=x-1 and y=-2x+8: x=3, y=2. Both lines cross y=0 at x=1 and x=4.',
                    workingLatex: 'x-1=0 \\Rightarrow x=1;\\quad -2x+8=0 \\Rightarrow x=4',
                    explanation: 'Vertices: (1,0), (4,0), (3,2).'
                },
                {
                    stepNumber: 2,
                    description: 'Test (2,1): \\(1\\geq1\\) ✓, \\(1\\leq4\\) ✓, \\(1\\geq0\\) ✓. Shade and label R.',
                    workingLatex: '(2,1) \\text{ satisfies all}',
                    explanation: 'Small triangular region between the two lines above y=0.'
                }
            ],
            finalAnswer: 'Triangular region with vertices \\((1,0),(4,0),(3,2)\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-050',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 50',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( y < 3 \\), \\( x < 3 \\), \\( x > -2 \\), and \\( y > -2 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'rectangular region', 'four strict inequalities'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-4, xmax=5, ymin=-4, ymax=5,
    xtick={-4,...,5}, ytick={-4,...,5},
    width=7cm, height=7cm
  ]
  \\addplot[dashed, thick, domain=-4:5] {3} node[right] {$y=3$};
  \\addplot[dashed, thick, domain=-4:5] {-2} node[right] {$y=-2$};
  \\draw[dashed, thick] (axis cs:3,-4) -- (axis cs:3,5) node[above] {$x=3$};
  \\draw[dashed, thick] (axis cs:-2,-4) -- (axis cs:-2,5) node[above] {$x=-2$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(-2,-2)(3,-2)(3,3)(-2,3)} \\closedcycle;
  \\node at (axis cs:0.5,0.5) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'All four are strict inequalities — draw all four lines dashed.',
                    workingLatex: 'x=3,\\;x=-2,\\;y=3,\\;y=-2',
                    explanation: 'Boundaries are not included in R.'
                },
                {
                    stepNumber: 2,
                    description: 'The region is a square with corners (-2,-2),(3,-2),(3,3),(-2,3).',
                    workingLatex: '\\text{Square with side length } 5',
                    explanation: 'Label R inside the square.'
                }
            ],
            finalAnswer: 'Square region with corners \\((-2,-2),(3,-2),(3,3),(-2,3)\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-051',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 51',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( y \\leq \\frac{x}{2} + 3 \\), \\( y \\geq 1 \\), and \\( x \\leq 4 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'fractional gradient'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-5, xmax=6, ymin=-1, ymax=7,
    xtick={-5,...,6}, ytick={0,...,7},
    width=7cm, height=6cm
  ]
  \\addplot[solid, thick, domain=-5:5] {x/2 + 3} node[right] {$y=\\frac{x}{2}+3$};
  \\addplot[solid, thick, domain=-5:6] {1} node[right] {$y=1$};
  \\draw[solid, thick] (axis cs:4,-1) -- (axis cs:4,7) node[above] {$x=4$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(-4,1)(4,1)(4,5)(-4,1)} \\closedcycle;
  \\node at (axis cs:0,2.5) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw all three as solid lines.',
                    workingLatex: 'y=\\tfrac{x}{2}+3,\\quad y=1,\\quad x=4',
                    explanation: 'Non-strict inequalities.'
                },
                {
                    stepNumber: 2,
                    description: 'Line y=x/2+3 meets y=1 at x=-4, meets x=4 at y=5.',
                    workingLatex: '\\tfrac{x}{2}+3=1 \\Rightarrow x=-4;\\quad \\tfrac{4}{2}+3=5',
                    explanation: 'Vertices: (-4,1),(4,1),(4,5).'
                },
                {
                    stepNumber: 3,
                    description: 'Test (0,2): \\(2\\leq3\\) ✓, \\(2\\geq1\\) ✓, \\(0\\leq4\\) ✓. Shade and label R.',
                    workingLatex: '(0,2) \\text{ satisfies all}',
                    explanation: 'Triangular region.'
                }
            ],
            finalAnswer: 'Triangular region with vertices \\((-4,1),(4,1),(4,5)\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-052',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 52',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( 3x + 4y \\leq 24 \\), \\( x \\geq 2 \\), and \\( y \\geq 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'region shading', 'linear programming'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=9, ymin=-1, ymax=7,
    xtick={0,...,9}, ytick={0,...,7},
    width=7cm, height=6cm
  ]
  \\addplot[solid, thick, domain=0:8] {(24 - 3*x)/4} node[right] {$3x+4y=24$};
  \\draw[solid, thick] (axis cs:2,-1) -- (axis cs:2,7) node[above] {$x=2$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(2,0)(8,0)(2,4.5)} \\closedcycle;
  \\node at (axis cs:3.5,1.5) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Draw 3x+4y=24 through (0,6) and (8,0). Draw x=2 as a solid vertical line.',
                    workingLatex: '(0,6),(8,0)',
                    explanation: 'Intercepts of 3x+4y=24.'
                },
                {
                    stepNumber: 2,
                    description: 'Line 3x+4y=24 meets x=2 at y=4.5. Vertices: (2,0),(8,0),(2,4.5).',
                    workingLatex: '3(2)+4y=24 \\Rightarrow y=4.5',
                    explanation: 'Triangle in the region x≥2, y≥0, below the line.'
                },
                {
                    stepNumber: 3,
                    description: 'Test (4,2): \\(12+8=20\\leq24\\) ✓, \\(4\\geq2\\) ✓, \\(2\\geq0\\) ✓.',
                    workingLatex: '(4,2) \\text{ satisfies all}',
                    explanation: 'Shade and label R.'
                }
            ],
            finalAnswer: 'Triangular region with vertices \\((2,0),(8,0),(2,4.5)\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-053',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 53',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( y > x \\), \\( y < 6 \\), \\( x > -3 \\), and \\( y > 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'four strict inequalities', 'diagonal boundary'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-4, xmax=7, ymin=-1, ymax=7,
    xtick={-4,...,7}, ytick={0,...,7},
    width=7cm, height=7cm
  ]
  \\addplot[dashed, thick, domain=-4:6] {x} node[right] {$y=x$};
  \\addplot[dashed, thick, domain=-4:7] {6} node[right] {$y=6$};
  \\draw[dashed, thick] (axis cs:-3,-1) -- (axis cs:-3,7) node[above] {$x=-3$};
  \\addplot[fill=gray!30, fill opacity=0.4] coordinates {(-3,0)(0,0)(6,6)(-3,6)} \\closedcycle;
  \\node at (axis cs:0,4) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'All four are strict — draw all dashed.',
                    workingLatex: 'y=x,\\; y=6,\\; x=-3,\\; y=0',
                    explanation: 'Boundaries not included.'
                },
                {
                    stepNumber: 2,
                    description: 'Test (0,3): \\(3>0\\) ✓, \\(3<6\\) ✓, \\(0>-3\\) ✓, \\(3>0\\) ✓.',
                    workingLatex: '(0,3) \\text{ satisfies all}',
                    explanation: 'Shade the quadrilateral above y=x (and above y=0), below y=6, right of x=-3.'
                }
            ],
            finalAnswer: 'Quadrilateral bounded by \\(y=x, y=6, x=-3, y=0\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-054',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 54',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( y \\leq 4x - x^2 \\) and \\( y \\geq x \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'parabola and line', 'n-shaped parabola'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=5, ymin=-2, ymax=6,
    xtick={0,...,5}, ytick={-2,...,6},
    width=7cm, height=7cm
  ]
  \\addplot[solid, thick, domain=0:4, samples=80] {4*x - x^2} node[right] {$y=4x-x^2$};
  \\addplot[solid, thick, domain=-1:5] {x} node[right] {$y=x$};
  \\addplot[fill=gray!30, fill opacity=0.5, domain=0:3, samples=80] {4*x - x^2} \\closedcycle;
  \\node at (axis cs:2,2.5) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find intersections: \\(4x - x^2 = x\\).',
                    workingLatex: '3x - x^2 = 0 \\Rightarrow x(3-x)=0 \\Rightarrow x=0,\\;x=3',
                    explanation: 'Curves meet at (0,0) and (3,3).'
                },
                {
                    stepNumber: 2,
                    description: 'Draw the n-shaped parabola y=4x-x² as a solid curve and y=x as a solid line.',
                    workingLatex: '\\text{Parabola: vertex at }(2,4)',
                    explanation: 'Non-strict inequalities — solid boundaries.'
                },
                {
                    stepNumber: 3,
                    description: 'Test (2,3): \\(3\\leq8-4=4\\) ✓, \\(3\\geq2\\) ✓. Shade between the curves.',
                    workingLatex: '0 \\leq x \\leq 3',
                    explanation: 'Region above y=x and below the parabola.'
                }
            ],
            finalAnswer: 'Region between \\(y=x\\) and \\(y=4x-x^2\\) for \\(0\\leq x\\leq3\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-055',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 55',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( y \\geq x^2 - 4x + 3 \\) and \\( y \\leq 3 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'parabola and horizontal line', 'non-strict'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=6, ymin=-2, ymax=5,
    xtick={0,...,6}, ytick={-2,...,5},
    width=7cm, height=7cm
  ]
  \\addplot[solid, thick, domain=-0.5:4.5, samples=80] {x^2 - 4*x + 3} node[right] {$y=x^2-4x+3$};
  \\addplot[solid, thick, domain=-1:6] {3} node[right] {$y=3$};
  \\addplot[fill=gray!30, fill opacity=0.5, domain=0:4, samples=80] {min(3, x^2 - 4*x + 3)} \\closedcycle;
  \\node at (axis cs:2,1) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise: \\(x^2-4x+3=(x-1)(x-3)\\). Parabola has roots at x=1 and x=3, vertex at (2,-1).',
                    workingLatex: 'x^2-4x+3=3 \\Rightarrow x^2-4x=0 \\Rightarrow x(x-4)=0',
                    explanation: 'Parabola meets y=3 at x=0 and x=4.'
                },
                {
                    stepNumber: 2,
                    description: 'Both boundaries are solid. Test (2,0): \\(0\\geq-1\\) ✓, \\(0\\leq3\\) ✓.',
                    workingLatex: '(2,0) \\text{ satisfies both}',
                    explanation: 'Region is above the parabola and below y=3, for 0≤x≤4.'
                }
            ],
            finalAnswer: 'Region above \\(y=x^2-4x+3\\) and below \\(y=3\\), for \\(0\\leq x\\leq4\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-056',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 56',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( y < 6x - x^2 - 5 \\) and \\( y > 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'n-shaped parabola', 'x-axis boundary'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=7, ymin=-2, ymax=5,
    xtick={0,...,7}, ytick={-2,...,5},
    width=7cm, height=6cm
  ]
  \\addplot[dashed, thick, domain=0.5:5.5, samples=80] {6*x - x^2 - 5} node[right] {$y=6x-x^2-5$};
  \\addplot[dashed, thick, domain=-1:7] {0} node[right] {};
  \\node at (axis cs:3,1.5) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise: \\(6x-x^2-5=-(x^2-6x+5)=-(x-1)(x-5)\\).',
                    workingLatex: '6x-x^2-5=0 \\Rightarrow x=1 \\text{ or } x=5',
                    explanation: 'n-shaped parabola crosses x-axis at x=1 and x=5.'
                },
                {
                    stepNumber: 2,
                    description: 'Both inequalities are strict — dashed boundaries.',
                    workingLatex: 'y = 6x-x^2-5 \\text{ (dashed)},\\quad y=0 \\text{ (dashed)}',
                    explanation: 'Boundaries not included.'
                },
                {
                    stepNumber: 3,
                    description: 'Test (3,2): \\(2 < 18-9-5=4\\) ✓, \\(2>0\\) ✓. Shade region between x-axis and parabola.',
                    workingLatex: '1 < x < 5',
                    explanation: 'Region above y=0 and below the parabola for 1 < x < 5.'
                }
            ],
            finalAnswer: 'Region between \\(y=0\\) and \\(y=6x-x^2-5\\) for \\(1<x<5\\); label \\(R\\)'
        }
    },

    // ─── TYPE C: Two curve boundaries / curve meets curve (Q57–Q63) ──────────────
    {
        id: 'ISE3-057',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 57',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( y \\geq x^2 \\) and \\( y \\leq x + 2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'parabola and line', 'enclosed region'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-3, xmax=3, ymin=-1, ymax=5,
    xtick={-3,...,3}, ytick={0,...,5},
    width=7cm, height=7cm
  ]
  \\addplot[solid, thick, domain=-2.5:2.5, samples=80] {x^2} node[right] {$y=x^2$};
  \\addplot[solid, thick, domain=-3:3] {x + 2} node[right] {$y=x+2$};
  \\node at (axis cs:0,1.5) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find intersections: \\(x^2 = x+2\\).',
                    workingLatex: 'x^2 - x - 2 = 0 \\Rightarrow (x-2)(x+1)=0 \\Rightarrow x=-1,\\;x=2',
                    explanation: 'Intersection points at (-1,1) and (2,4).'
                },
                {
                    stepNumber: 2,
                    description: 'Both boundaries are solid (non-strict). Region is above y=x² and below y=x+2.',
                    workingLatex: '-1 \\leq x \\leq 2',
                    explanation: 'Test (0,1): \\(1\\geq0\\) ✓, \\(1\\leq2\\) ✓.'
                }
            ],
            finalAnswer: 'Region between \\(y=x^2\\) and \\(y=x+2\\) for \\(-1\\leq x\\leq2\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-058',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 58',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( y > x^2 - 2x \\) and \\( y < 3 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'parabola and horizontal line', 'strict'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-2, xmax=5, ymin=-2, ymax=5,
    xtick={-2,...,5}, ytick={-2,...,5},
    width=7cm, height=7cm
  ]
  \\addplot[dashed, thick, domain=-1.5:3.5, samples=80] {x^2 - 2*x} node[right] {$y=x^2-2x$};
  \\addplot[dashed, thick, domain=-2:5] {3} node[right] {$y=3$};
  \\node at (axis cs:1,1.5) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find intersections with y=3: \\(x^2-2x=3\\).',
                    workingLatex: 'x^2-2x-3=0 \\Rightarrow (x-3)(x+1)=0 \\Rightarrow x=-1,\\;x=3',
                    explanation: 'Parabola meets y=3 at (-1,3) and (3,3).'
                },
                {
                    stepNumber: 2,
                    description: 'Both strict — dashed. Region is above parabola and below y=3 for -1 < x < 3.',
                    workingLatex: '(1,0): 0>-1 \\checkmark,\\; 0<3 \\checkmark',
                    explanation: 'Test confirms (1,0) is inside R.'
                }
            ],
            finalAnswer: 'Region above \\(y=x^2-2x\\) and below \\(y=3\\) for \\(-1<x<3\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-059',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 59',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( y \\leq 8 - x^2 \\) and \\( y \\geq x^2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'two parabolas', 'enclosed region'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-4, xmax=4, ymin=-1, ymax=9,
    xtick={-4,...,4}, ytick={0,...,9},
    width=7cm, height=7cm
  ]
  \\addplot[solid, thick, domain=-3:3, samples=80] {8 - x^2} node[right] {$y=8-x^2$};
  \\addplot[solid, thick, domain=-3:3, samples=80] {x^2} node[right] {$y=x^2$};
  \\node at (axis cs:0,4) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find intersections: \\(x^2 = 8 - x^2\\).',
                    workingLatex: '2x^2 = 8 \\Rightarrow x^2=4 \\Rightarrow x=\\pm2',
                    explanation: 'Parabolas meet at (-2,4) and (2,4).'
                },
                {
                    stepNumber: 2,
                    description: 'Both solid (non-strict). Region is between the parabolas for -2 ≤ x ≤ 2.',
                    workingLatex: 'x^2 \\leq y \\leq 8-x^2',
                    explanation: 'Test (0,4): \\(4\\leq8\\) ✓, \\(4\\geq0\\) ✓.'
                }
            ],
            finalAnswer: 'Region between \\(y=x^2\\) and \\(y=8-x^2\\) for \\(-2\\leq x\\leq2\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-060',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 60',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( y > x^2 + x - 6 \\) and \\( y < 2x + 4 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'parabola and line', 'strict'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-5, xmax=5, ymin=-8, ymax=10,
    xtick={-5,...,5}, ytick={-8,-4,...,10},
    width=7cm, height=8cm
  ]
  \\addplot[dashed, thick, domain=-4:4, samples=80] {x^2 + x - 6} node[right] {$y=x^2+x-6$};
  \\addplot[dashed, thick, domain=-5:5] {2*x + 4} node[right] {$y=2x+4$};
  \\node at (axis cs:0,0) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find intersections: \\(x^2+x-6 = 2x+4\\).',
                    workingLatex: 'x^2-x-10=0 \\Rightarrow x=\\frac{1\\pm\\sqrt{41}}{2}\\approx -2.70,\\;3.70',
                    explanation: 'Use the quadratic formula.'
                },
                {
                    stepNumber: 2,
                    description: 'Both strict — dashed. Test (0,0): \\(0>-6\\) ✓, \\(0<4\\) ✓.',
                    workingLatex: '(0,0) \\text{ satisfies both}',
                    explanation: 'Region between the line and parabola for approx -2.70 < x < 3.70.'
                }
            ],
            finalAnswer: 'Region above \\(y=x^2+x-6\\) and below \\(y=2x+4\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-061',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 61',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( y \\leq 9 - x^2 \\), \\( y \\geq 0 \\), and \\( x \\geq 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'parabola', 'first quadrant'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=4, ymin=-1, ymax=10,
    xtick={0,...,4}, ytick={0,...,10},
    width=6cm, height=7cm
  ]
  \\addplot[solid, thick, domain=0:3, samples=80] {9 - x^2} node[right] {$y=9-x^2$};
  \\addplot[fill=gray!30, fill opacity=0.5, domain=0:3, samples=80] {9 - x^2} \\closedcycle;
  \\node at (axis cs:1,4) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Parabola y=9-x² meets x-axis at x=3 (for x≥0) and y-axis at (0,9).',
                    workingLatex: '9 - x^2 = 0 \\Rightarrow x = 3',
                    explanation: 'Boundary of region in first quadrant.'
                },
                {
                    stepNumber: 2,
                    description: 'All boundaries solid. Region is under the parabola, in the first quadrant.',
                    workingLatex: '0 \\leq x \\leq 3,\\quad 0 \\leq y \\leq 9-x^2',
                    explanation: 'Shade and label R.'
                }
            ],
            finalAnswer: 'Region under \\(y=9-x^2\\) in the first quadrant, for \\(0\\leq x\\leq3\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-062',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 62',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( y \\geq x^2 - 6x + 8 \\) and \\( y \\leq x \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'parabola and line', 'non-strict'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=7, ymin=-2, ymax=6,
    xtick={0,...,7}, ytick={-2,...,6},
    width=7cm, height=7cm
  ]
  \\addplot[solid, thick, domain=0:6, samples=80] {x^2 - 6*x + 8} node[right] {$y=x^2-6x+8$};
  \\addplot[solid, thick, domain=-1:7] {x} node[right] {$y=x$};
  \\node at (axis cs:4,2) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find intersections: \\(x^2-6x+8=x\\).',
                    workingLatex: 'x^2-7x+8=0 \\Rightarrow x=\\frac{7\\pm\\sqrt{17}}{2}\\approx 1.44,\\;5.56',
                    explanation: 'Use the quadratic formula.'
                },
                {
                    stepNumber: 2,
                    description: 'Test (4,2): \\(2\\geq16-24+8=0\\) ✓, \\(2\\leq4\\) ✓.',
                    workingLatex: '(4,2) \\text{ satisfies both}',
                    explanation: 'Region is above the parabola and below the line.'
                }
            ],
            finalAnswer: 'Region above \\(y=x^2-6x+8\\) and below \\(y=x\\); label \\(R\\)'
        }
    },
    {
        id: 'ISE3-063',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 63',
        difficulty: 'Foundation',
        questionText: 'Shade and label the region \\(R\\) satisfying \\( y > 2x^2 - 8 \\) and \\( y < 2x + 4 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'non-monic parabola', 'line', 'strict'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-4, xmax=4, ymin=-9, ymax=10,
    xtick={-4,...,4}, ytick={-8,-4,...,10},
    width=7cm, height=8cm
  ]
  \\addplot[dashed, thick, domain=-3:3, samples=80] {2*x^2 - 8} node[right] {$y=2x^2-8$};
  \\addplot[dashed, thick, domain=-4:4] {2*x + 4} node[right] {$y=2x+4$};
  \\node at (axis cs:0,0) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find intersections: \\(2x^2-8=2x+4\\).',
                    workingLatex: '2x^2-2x-12=0 \\Rightarrow x^2-x-6=0 \\Rightarrow (x-3)(x+2)=0',
                    explanation: 'Intersections at x = -2 and x = 3.'
                },
                {
                    stepNumber: 2,
                    description: 'Both strict — dashed. Test (0,0): \\(0>-8\\) ✓, \\(0<4\\) ✓.',
                    workingLatex: '-2 < x < 3',
                    explanation: 'Region above the parabola and below the line for -2 < x < 3.'
                }
            ],
            finalAnswer: 'Region above \\(y=2x^2-8\\) and below \\(y=2x+4\\) for \\(-2<x<3\\); label \\(R\\)'
        }
    },

    // ─── TYPE D: Applied / contextual (Q64–Q70) ───────────────────────────────────
    {
        id: 'ISE3-064',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 64',
        difficulty: 'Foundation',
        questionText: 'A market stall sells apples (\\(x\\)) at £1 each and oranges (\\(y\\)) at £2 each. The stall wants to take at least £16 in revenue, sell at least 3 apples, and sell no more than 10 oranges. Write the three inequalities and shade the feasible region \\(R\\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'applied', 'linear programming'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$ (apples)}, ylabel={$y$ (oranges)},
    xmin=-1, xmax=18, ymin=-1, ymax=12,
    xtick={0,3,...,18}, ytick={0,2,...,12},
    width=7cm, height=7cm
  ]
  \\addplot[solid, thick, domain=0:16] {(16 - x)/2} node[right] {$x+2y=16$};
  \\draw[solid, thick] (axis cs:3,-1) -- (axis cs:3,12) node[above] {$x=3$};
  \\addplot[solid, thick, domain=0:18] {10} node[right] {$y=10$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(3,10)(-4,10)(3,6.5)} \\closedcycle;
  \\node at (axis cs:5,8) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Revenue ≥ £16: \\(x + 2y \\geq 16\\).',
                    workingLatex: 'x + 2y \\geq 16',
                    explanation: '£1 per apple and £2 per orange.'
                },
                {
                    stepNumber: 2,
                    description: 'At least 3 apples: \\(x \\geq 3\\). At most 10 oranges: \\(y \\leq 10\\).',
                    workingLatex: 'x \\geq 3,\\quad y \\leq 10',
                    explanation: 'Two further constraints.'
                },
                {
                    stepNumber: 3,
                    description: 'Draw solid lines and shade the feasible region above x+2y=16, right of x=3, and below y=10.',
                    workingLatex: '\\text{Vertices: }(3,10),(3,6.5),\\text{ and unbounded right}',
                    explanation: 'Label R.'
                }
            ],
            finalAnswer: 'Feasible region \\(R\\): above \\(x+2y=16\\), right of \\(x=3\\), below \\(y=10\\)'
        }
    },
    {
        id: 'ISE3-065',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 65',
        difficulty: 'Foundation',
        questionText: 'A transport company ships small boxes (\\(x\\)) and large boxes (\\(y\\)). Each small box weighs 5 kg and each large box weighs 10 kg. The van can carry at most 100 kg. The company must carry at least 2 small boxes. Shade the feasible region \\(R\\) for \\(x\\) and \\(y\\), and state the vertices.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'applied', 'weight constraint'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$ (small)}, ylabel={$y$ (large)},
    xmin=-1, xmax=22, ymin=-1, ymax=12,
    xtick={0,2,...,22}, ytick={0,2,...,12},
    width=7cm, height=7cm
  ]
  \\addplot[solid, thick, domain=0:20] {(100 - 5*x)/10} node[right] {$5x+10y=100$};
  \\draw[solid, thick] (axis cs:2,-1) -- (axis cs:2,12) node[above] {$x=2$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(2,0)(20,0)(2,9)} \\closedcycle;
  \\node at (axis cs:7,3) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Weight constraint: \\(5x + 10y \\leq 100\\), i.e. \\(x + 2y \\leq 20\\).',
                    workingLatex: 'x + 2y \\leq 20',
                    explanation: 'Total weight must not exceed 100 kg.'
                },
                {
                    stepNumber: 2,
                    description: 'Minimum small boxes: \\(x \\geq 2\\). Also \\(x \\geq 0, y \\geq 0\\).',
                    workingLatex: 'x \\geq 2,\\quad y \\geq 0',
                    explanation: 'Physical constraints.'
                },
                {
                    stepNumber: 3,
                    description: 'Vertices: x=2, y=0: (2,0). x=20, y=0: (20,0). x=2 meets x+2y=20: y=9, so (2,9).',
                    workingLatex: '\\text{Vertices: }(2,0),(20,0),(2,9)',
                    explanation: 'Triangular feasible region.'
                }
            ],
            finalAnswer: 'Feasible region \\(R\\) with vertices \\((2,0),(20,0),(2,9)\\)'
        }
    },
    {
        id: 'ISE3-066',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 66',
        difficulty: 'Foundation',
        questionText: 'Determine which region, \\(A\\) or \\(B\\), has the greater area, where:\n\\(A\\): \\(x\\geq0,\\; y\\geq0,\\; x+y\\leq8\\)\n\\(B\\): \\(x\\geq0,\\; y\\geq0,\\; 3x+y\\leq12\\)',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'compare regions', 'area'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=9, ymin=-1, ymax=13,
    xtick={0,...,9}, ytick={0,...,13},
    width=7cm, height=7cm
  ]
  \\addplot[fill=blue!20, fill opacity=0.5] coordinates {(0,0)(8,0)(0,8)} \\closedcycle;
  \\addplot[solid, blue, thick, domain=0:8] {8-x} node[above right] {$A: x+y=8$};
  \\addplot[fill=red!20, fill opacity=0.5] coordinates {(0,0)(4,0)(0,12)} \\closedcycle;
  \\addplot[solid, red, thick, domain=0:4] {12-3*x} node[right] {$B: 3x+y=12$};
  \\node[blue] at (axis cs:2,2) {$A$};
  \\node[red] at (axis cs:0.8,6) {$B$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Area of region A (triangle with legs 8 and 8).',
                    workingLatex: '\\text{Area}_A = \\tfrac{1}{2} \\times 8 \\times 8 = 32 \\text{ units}^2',
                    explanation: 'Right triangle with vertices (0,0),(8,0),(0,8).'
                },
                {
                    stepNumber: 2,
                    description: 'Area of region B (triangle with legs 4 and 12).',
                    workingLatex: '\\text{Area}_B = \\tfrac{1}{2} \\times 4 \\times 12 = 24 \\text{ units}^2',
                    explanation: 'Right triangle with vertices (0,0),(4,0),(0,12).'
                },
                {
                    stepNumber: 3,
                    description: 'Compare: 32 > 24.',
                    workingLatex: '\\text{Area}_A > \\text{Area}_B',
                    explanation: 'Region A has the greater area.'
                }
            ],
            finalAnswer: 'Region \\(A\\) has greater area (32 units² vs 24 units²)'
        }
    },
    {
        id: 'ISE3-067',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 67',
        difficulty: 'Foundation',
        questionText: 'A printer can print leaflets (\\(x\\)) and posters (\\(y\\)). Each leaflet takes 1 minute and each poster takes 4 minutes. The printer has at most 40 minutes. The order requires at least 5 leaflets and at least 2 posters. Draw and shade the feasible region \\(R\\) and state all vertex coordinates.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'applied', 'linear programming', 'vertices'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$ (leaflets)}, ylabel={$y$ (posters)},
    xmin=-1, xmax=42, ymin=-1, ymax=10,
    xtick={0,5,...,40}, ytick={0,...,10},
    width=7cm, height=6cm
  ]
  \\addplot[solid, thick, domain=0:40] {(40 - x)/4} node[right] {$x+4y=40$};
  \\draw[solid, thick] (axis cs:5,-1) -- (axis cs:5,10) node[above] {$x=5$};
  \\addplot[solid, thick, domain=0:42] {2} node[right] {$y=2$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(5,2)(32,2)(5,8.75)} \\closedcycle;
  \\node at (axis cs:14,4) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Time constraint: \\(x + 4y \\leq 40\\). Minimum leaflets: \\(x \\geq 5\\). Minimum posters: \\(y \\geq 2\\).',
                    workingLatex: 'x+4y\\leq40,\\quad x\\geq5,\\quad y\\geq2',
                    explanation: 'Three constraints.'
                },
                {
                    stepNumber: 2,
                    description: 'Vertex 1: x=5 and y=2 → (5,2).',
                    workingLatex: '(5,2)',
                    explanation: 'Minimum of both.'
                },
                {
                    stepNumber: 3,
                    description: 'Vertex 2: y=2 and x+4y=40 → x=32 → (32,2).',
                    workingLatex: 'x + 8 = 40 \\Rightarrow x=32',
                    explanation: 'Maximum leaflets at minimum posters.'
                },
                {
                    stepNumber: 4,
                    description: 'Vertex 3: x=5 and x+4y=40 → y=8.75 → (5,8.75).',
                    workingLatex: '5 + 4y = 40 \\Rightarrow y=8.75',
                    explanation: 'Maximum posters at minimum leaflets.'
                }
            ],
            finalAnswer: 'Vertices of \\(R\\): \\((5,2),\\;(32,2),\\;(5,8.75)\\)'
        }
    },
    {
        id: 'ISE3-068',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 68',
        difficulty: 'Foundation',
        questionText: 'A garden has a lawn region satisfying \\( y > 0 \\), \\( y < -x^2 + 6x \\), and \\( x < 5 \\). Find the coordinates of the vertices of the region and shade it on a diagram.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'applied', 'n-shaped parabola', 'contextual'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-1, xmax=7, ymin=-1, ymax=10,
    xtick={0,...,7}, ytick={0,...,10},
    width=7cm, height=7cm
  ]
  \\addplot[dashed, thick, domain=0:6, samples=80] {-x^2 + 6*x} node[right] {$y=-x^2+6x$};
  \\draw[dashed, thick] (axis cs:5,-1) -- (axis cs:5,10) node[above] {$x=5$};
  \\addplot[fill=gray!30, fill opacity=0.4, domain=0:5, samples=80] {max(0,-x^2+6*x)} \\closedcycle;
  \\node at (axis cs:2.5,4) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Parabola y = -x²+6x has roots at x=0 and x=6, vertex at (3,9).',
                    workingLatex: '-x^2+6x = 0 \\Rightarrow x(6-x)=0 \\Rightarrow x=0,\\;x=6',
                    explanation: 'n-shaped parabola.'
                },
                {
                    stepNumber: 2,
                    description: 'Parabola meets x=5 at y = -25+30 = 5.',
                    workingLatex: '-(5)^2+6(5)=5',
                    explanation: 'Point (5,5) on the parabola.'
                },
                {
                    stepNumber: 3,
                    description: 'All strict — dashed boundaries. Region is above y=0, below parabola, left of x=5.',
                    workingLatex: '\\text{Key points: }(0,0),(5,0),(5,5),(3,9)\\text{ on boundary}',
                    explanation: 'Shade and label R.'
                }
            ],
            finalAnswer: 'Region bounded by \\(y=0\\), \\(x=5\\), and \\(y=-x^2+6x\\); key points \\((0,0),(5,0),(5,5)\\)'
        }
    },
    {
        id: 'ISE3-069',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 69',
        difficulty: 'Foundation',
        questionText: 'A farmer has two fields of total area at most 50 hectares. Field 1 has area \\(x\\) ha and field 2 has area \\(y\\) ha. He needs field 1 to be at least twice the size of field 2, and each field must be at least 5 ha. Draw and shade the feasible region \\(R\\) and state the vertices.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'applied', 'linear programming', 'vertices'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$ (field 1, ha)}, ylabel={$y$ (field 2, ha)},
    xmin=-2, xmax=45, ymin=-1, ymax=25,
    xtick={0,10,...,40}, ytick={0,5,...,25},
    width=7cm, height=6cm
  ]
  \\addplot[solid, thick, domain=0:45] {50 - x} node[right] {$x+y=50$};
  \\addplot[solid, thick, domain=0:45] {x/2} node[right] {$x=2y$};
  \\addplot[solid, thick, domain=0:45] {5} node[right] {$y=5$};
  \\draw[solid, thick] (axis cs:5,-1) -- (axis cs:5,25) node[above] {$x=5$};
  \\addplot[fill=gray!30, fill opacity=0.5] coordinates {(10,5)(40,5)(10,5)} \\closedcycle;
  \\node at (axis cs:22,6) {$R$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Constraints: \\(x+y\\leq50\\), \\(x\\geq2y\\), \\(x\\geq5\\), \\(y\\geq5\\).',
                    workingLatex: 'x+y\\leq50,\\;x\\geq2y,\\;x\\geq5,\\;y\\geq5',
                    explanation: 'Four constraints.'
                },
                {
                    stepNumber: 2,
                    description: 'Vertex where x=2y and y=5: x=10 → (10,5).',
                    workingLatex: 'x=2(5)=10 \\Rightarrow (10,5)',
                    explanation: 'Minimum feasible point.'
                },
                {
                    stepNumber: 3,
                    description: 'Vertex where y=5 and x+y=50: x=45 → (45,5).',
                    workingLatex: 'x=45,\\;y=5',
                    explanation: 'Maximum x at minimum y.'
                },
                {
                    stepNumber: 4,
                    description: 'Vertex where x=2y and x+y=50: \\(2y+y=50\\) → y=50/3≈16.7, x=100/3≈33.3.',
                    workingLatex: '3y=50 \\Rightarrow y=\\tfrac{50}{3},\\;x=\\tfrac{100}{3}',
                    explanation: 'Third vertex.'
                }
            ],
            finalAnswer: 'Vertices of \\(R\\): \\((10,5),\\;(45,5),\\;\\left(\\tfrac{100}{3},\\tfrac{50}{3}\\right)\\)'
        }
    },
    {
        id: 'ISE3-070',
        topicRef: 'ISE3',
        topicTitle: 'Graphing Inequalities 70',
        difficulty: 'Foundation',
        questionText: 'Determine whether the regions \\(A\\) and \\(B\\) overlap, where:\n\\(A\\): \\(y > x + 1\\) and \\(y < 5\\)\n\\(B\\): \\(y < x - 1\\) and \\(y > -2\\)\nIf they do overlap, shade the overlapping region \\(R\\) on a diagram.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['graphing inequalities', 'overlapping regions', 'two separate regions'],
        tikzDiagram: `\\begin{tikzpicture}
  \\begin{axis}[
    axis lines=center, xlabel={$x$}, ylabel={$y$},
    xmin=-4, xmax=8, ymin=-3, ymax=6,
    xtick={-4,...,8}, ytick={-3,...,6},
    width=8cm, height=7cm
  ]
  % Region A
  \\addplot[fill=blue!20, fill opacity=0.5, domain=-4:4] {min(5, x+1)} \\closedcycle;
  \\addplot[dashed, blue, thick, domain=-4:8] {x+1} node[right] {$y=x+1$};
  \\addplot[dashed, blue, thick, domain=-4:8] {5} node[right] {$y=5$};
  % Region B
  \\addplot[fill=red!20, fill opacity=0.5, domain=0:8] {x-1} \\closedcycle;
  \\addplot[dashed, red, thick, domain=-4:8] {x-1} node[right] {$y=x-1$};
  \\addplot[dashed, red, thick, domain=-4:8] {-2} node[right] {$y=-2$};
  \\node[blue] at (axis cs:-2,3) {$A$};
  \\node[red] at (axis cs:5,-1) {$B$};
  \\end{axis}
\\end{tikzpicture}`,
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Region A requires y > x+1 (above the line y=x+1) AND y < 5.',
                    workingLatex: 'x+1 < y < 5',
                    explanation: 'Region A is above y=x+1 and below y=5.'
                },
                {
                    stepNumber: 2,
                    description: 'Region B requires y < x-1 (below the line y=x-1) AND y > -2.',
                    workingLatex: '-2 < y < x-1',
                    explanation: 'Region B is below y=x-1 and above y=-2.'
                },
                {
                    stepNumber: 3,
                    description: 'For both: need y > x+1 AND y < x-1. But x+1 > x-1 always, so y > x+1 and y < x-1 is impossible.',
                    workingLatex: 'y > x+1 \\text{ and } y < x-1 \\Rightarrow \\text{contradiction}',
                    explanation: 'There is no value of y that can be simultaneously greater than x+1 and less than x-1.'
                }
            ],
            finalAnswer: 'The regions \\(A\\) and \\(B\\) do not overlap — there is no solution satisfying both sets of inequalities.'
        }
    }
];

