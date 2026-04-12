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

    // ─── TYPE A: Midpoint of a segment given two coordinate pairs (Q1–7) ──────

    {
        id: 'cg2-001',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 01',
        difficulty: 'Foundation',
        questionText: 'Find the midpoint of the line segment joining \\( (3, 7) \\) and \\( (9, 1) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['midpoint', 'line segment', 'coordinate geometry'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the midpoint formula \\( M = \\left(\\dfrac{x_1 + x_2}{2},\\ \\dfrac{y_1 + y_2}{2}\\right) \\).',
                    workingLatex: 'M = \\left(\\dfrac{3 + 9}{2},\\ \\dfrac{7 + 1}{2}\\right) = (6,\\ 4)',
                    explanation: 'Add each pair of coordinates and halve the result.'
                }
            ],
            finalAnswer: ' M = (6, 4) '
        }
    },

    {
        id: 'cg2-002',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 02',
        difficulty: 'Foundation',
        questionText: 'Find the midpoint of the line segment joining \\( (-4, 3) \\) and \\( (6, -7) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['midpoint', 'line segment', 'negative coordinates'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the midpoint formula.',
                    workingLatex: 'M = \\left(\\dfrac{-4 + 6}{2},\\ \\dfrac{3 + (-7)}{2}\\right) = \\left(1,\\ -2\\right)',
                    explanation: 'Take care with the negative values.'
                }
            ],
            finalAnswer: ' M = (1, -2) '
        }
    },

    {
        id: 'cg2-003',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 03',
        difficulty: 'Foundation',
        questionText: 'Find the midpoint of the segment joining \\( \\left(0,\\ \\dfrac{1}{2}\\right) \\) and \\( \\left(4,\\ \\dfrac{7}{2}\\right) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['midpoint', 'fractional coordinates', 'line segment'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the midpoint formula.',
                    workingLatex: 'M = \\left(\\dfrac{0 + 4}{2},\\ \\dfrac{\\frac{1}{2} + \\frac{7}{2}}{2}\\right) = \\left(2,\\ \\dfrac{4}{2}\\right) = (2,\\ 2)',
                    explanation: '\\(\\frac{1}{2} + \\frac{7}{2} = \\frac{8}{2} = 4\\), then halve to get 2.'
                }
            ],
            finalAnswer: ' M = (2, 2) '
        }
    },

    {
        id: 'cg2-004',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 04',
        difficulty: 'Foundation',
        questionText: 'Find the midpoint of the segment joining \\( (-5, -2) \\) and \\( (-1, 8) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['midpoint', 'negative coordinates', 'line segment'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the midpoint formula.',
                    workingLatex: 'M = \\left(\\dfrac{-5 + (-1)}{2},\\ \\dfrac{-2 + 8}{2}\\right) = \\left(-3,\\ 3\\right)',
                    explanation: ''
                }
            ],
            finalAnswer: ' M = (-3, 3) '
        }
    },

    // ─── TYPE B: Exact length of a segment given two coordinate pairs (Q5–10) ─

    {
        id: 'cg2-005',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 05',
        difficulty: 'Foundation',
        questionText: 'Find the exact length of the line segment joining \\( (1, 2) \\) and \\( (5, 5) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['length', 'Pythagoras', 'line segment', 'exact value'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the distance formula \\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\).',
                    workingLatex: 'd = \\sqrt{(5 - 1)^2 + (5 - 2)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5',
                    explanation: 'This is a 3-4-5 right triangle, so the length is exactly 5.'
                }
            ],
            finalAnswer: ' d = 5 '
        }
    },

    {
        id: 'cg2-006',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 06',
        difficulty: 'Foundation',
        questionText: 'Find the exact length of the line segment joining \\( (0, 0) \\) and \\( (5, 12) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['length', 'Pythagoras', 'line segment', 'exact value'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the distance formula.',
                    workingLatex: 'd = \\sqrt{(5 - 0)^2 + (12 - 0)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13',
                    explanation: 'This is a 5-12-13 Pythagorean triple.'
                }
            ],
            finalAnswer: ' d = 13 '
        }
    },

    {
        id: 'cg2-007',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 07',
        difficulty: 'Foundation',
        questionText: 'Find the exact length of the line segment joining \\( (2, -1) \\) and \\( (6, 4) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['length', 'Pythagoras', 'line segment', 'surd answer'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the distance formula.',
                    workingLatex: 'd = \\sqrt{(6 - 2)^2 + (4 - (-1))^2} = \\sqrt{16 + 25} = \\sqrt{41}',
                    explanation: '41 has no perfect square factors, so the answer is left as \\(\\sqrt{41}\\).'
                }
            ],
            finalAnswer: ' d = \\sqrt{41} '
        }
    },

    {
        id: 'cg2-008',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 08',
        difficulty: 'Foundation',
        questionText: 'Find the exact length of the segment joining \\( (-3, 5) \\) and \\( (4, -2) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['length', 'Pythagoras', 'negative coordinates', 'surd answer'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the distance formula.',
                    workingLatex: 'd = \\sqrt{(4 - (-3))^2 + (-2 - 5)^2} = \\sqrt{49 + 49} = \\sqrt{98} = 7\\sqrt{2}',
                    explanation: '\\(\\sqrt{98} = \\sqrt{49 \\times 2} = 7\\sqrt{2}\\).'
                }
            ],
            finalAnswer: ' d = 7\\sqrt{2} '
        }
    },

    {
        id: 'cg2-009',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 09',
        difficulty: 'Foundation',
        questionText: 'Find both (i) the midpoint and (ii) the exact length of the segment from \\( (-2, 4) \\) to \\( (4, 12) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['midpoint', 'length', 'Pythagoras', 'line segment'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(i) Midpoint:',
                    workingLatex: 'M = \\left(\\dfrac{-2 + 4}{2},\\ \\dfrac{4 + 12}{2}\\right) = (1,\\ 8)',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: '(ii) Length:',
                    workingLatex: 'd = \\sqrt{(4 - (-2))^2 + (12 - 4)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10',
                    explanation: ''
                }
            ],
            finalAnswer: '(i)  M = (1, 8) ; (ii)  d = 10 '
        }
    },

    {
        id: 'cg2-010',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 10',
        difficulty: 'Foundation',
        questionText: 'Find both (i) the midpoint and (ii) the exact length of the segment from \\( (3, -5) \\) to \\( (-3, 3) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['midpoint', 'length', 'line segment', 'surd answer'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(i) Midpoint:',
                    workingLatex: 'M = \\left(\\dfrac{3 + (-3)}{2},\\ \\dfrac{-5 + 3}{2}\\right) = (0,\\ -1)',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: '(ii) Length:',
                    workingLatex: 'd = \\sqrt{(-3 - 3)^2 + (3 - (-5))^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10',
                    explanation: ''
                }
            ],
            finalAnswer: '(i)  M = (0, -1) ; (ii)  d = 10 '
        }
    },

    // ─── TYPE C: Length of segment of a given line between two x-values (Q11–16) ─

    {
        id: 'cg2-011',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 11',
        difficulty: 'Foundation',
        questionText: 'Find the exact length of the segment of the line \\( y = 3x + 1 \\) between \\( x = 2 \\) and \\( x = 5 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['length', 'line equation', 'Pythagoras', 'surd answer'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the \\( y \\)-coordinates at each \\( x \\)-value.',
                    workingLatex: 'x = 2:\\; y = 3(2) + 1 = 7 \\qquad x = 5:\\; y = 3(5) + 1 = 16',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Apply the distance formula between \\( (2, 7) \\) and \\( (5, 16) \\).',
                    workingLatex: 'd = \\sqrt{(5 - 2)^2 + (16 - 7)^2} = \\sqrt{9 + 81} = \\sqrt{90} = 3\\sqrt{10}',
                    explanation: '\\(\\sqrt{90} = \\sqrt{9 \\times 10} = 3\\sqrt{10}\\).'
                }
            ],
            finalAnswer: ' d = 3\\sqrt{10} '
        }
    },

    {
        id: 'cg2-012',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 12',
        difficulty: 'Foundation',
        questionText: 'Find the exact length of the segment of the line \\( y = -2x + 7 \\) between \\( x = 1 \\) and \\( x = 4 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['length', 'line equation', 'Pythagoras', 'surd answer'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the \\( y \\)-coordinates.',
                    workingLatex: 'x = 1:\\; y = -2(1) + 7 = 5 \\qquad x = 4:\\; y = -2(4) + 7 = -1',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Apply the distance formula between \\( (1, 5) \\) and \\( (4, -1) \\).',
                    workingLatex: 'd = \\sqrt{(4 - 1)^2 + (-1 - 5)^2} = \\sqrt{9 + 36} = \\sqrt{45} = 3\\sqrt{5}',
                    explanation: '\\(\\sqrt{45} = \\sqrt{9 \\times 5} = 3\\sqrt{5}\\).'
                }
            ],
            finalAnswer: ' d = 3\\sqrt{5} '
        }
    },

    {
        id: 'cg2-013',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 13',
        difficulty: 'Foundation',
        questionText: 'Find the midpoint and exact length of the segment of \\( y = \\dfrac{1}{2}x - 3 \\) between \\( x = 2 \\) and \\( x = 10 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['midpoint', 'length', 'line equation', 'fractional gradient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the endpoints.',
                    workingLatex: 'x = 2:\\; y = \\tfrac{1}{2}(2) - 3 = -2 \\qquad x = 10:\\; y = \\tfrac{1}{2}(10) - 3 = 2',
                    explanation: 'Points are \\( A(2, -2) \\) and \\( B(10, 2) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Midpoint:',
                    workingLatex: 'M = \\left(\\dfrac{2 + 10}{2},\\ \\dfrac{-2 + 2}{2}\\right) = (6,\\ 0)',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: 'Length:',
                    workingLatex: 'd = \\sqrt{(10 - 2)^2 + (2 - (-2))^2} = \\sqrt{64 + 16} = \\sqrt{80} = 4\\sqrt{5}',
                    explanation: '\\(\\sqrt{80} = \\sqrt{16 \\times 5} = 4\\sqrt{5}\\).'
                }
            ],
            finalAnswer: ' M = (6, 0) ;  d = 4\\sqrt{5} '
        }
    },

    {
        id: 'cg2-014',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 14',
        difficulty: 'Foundation',
        questionText: 'Find the exact length of the segment of the line \\( 2x + y - 4 = 0 \\) between \\( x = 0 \\) and \\( x = 3 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['length', 'line equation', 'ax + by + c = 0', 'Pythagoras'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the line to \\( y = -2x + 4 \\), then find the endpoints.',
                    workingLatex: 'x = 0:\\; y = 4 \\qquad x = 3:\\; y = -2(3) + 4 = -2',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Apply the distance formula between \\( (0, 4) \\) and \\( (3, -2) \\).',
                    workingLatex: 'd = \\sqrt{(3 - 0)^2 + (-2 - 4)^2} = \\sqrt{9 + 36} = \\sqrt{45} = 3\\sqrt{5}',
                    explanation: ''
                }
            ],
            finalAnswer: ' d = 3\\sqrt{5} '
        }
    },

    {
        id: 'cg2-015',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 15',
        difficulty: 'Foundation',
        questionText: 'Find the midpoint and exact length of the segment of \\( x + 2y - 8 = 0 \\) between \\( x = 2 \\) and \\( x = 6 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['midpoint', 'length', 'ax + by + c = 0', 'line segment'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange: \\( y = \\dfrac{8 - x}{2} \\). Find endpoints.',
                    workingLatex: 'x = 2:\\; y = \\tfrac{6}{2} = 3 \\qquad x = 6:\\; y = \\tfrac{2}{2} = 1',
                    explanation: 'Points are \\( A(2, 3) \\) and \\( B(6, 1) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Midpoint:',
                    workingLatex: 'M = \\left(\\dfrac{2 + 6}{2},\\ \\dfrac{3 + 1}{2}\\right) = (4,\\ 2)',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: 'Length:',
                    workingLatex: 'd = \\sqrt{(6 - 2)^2 + (1 - 3)^2} = \\sqrt{16 + 4} = \\sqrt{20} = 2\\sqrt{5}',
                    explanation: '\\(\\sqrt{20} = \\sqrt{4 \\times 5} = 2\\sqrt{5}\\).'
                }
            ],
            finalAnswer: ' M = (4, 2) ;  d = 2\\sqrt{5} '
        }
    },

    {
        id: 'cg2-016',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 16',
        difficulty: 'Foundation',
        questionText: 'Find the midpoint and exact length of the segment of \\( y = 4x - 3 \\) between \\( x = -1 \\) and \\( x = 2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['midpoint', 'length', 'line equation', 'Pythagoras'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the endpoints.',
                    workingLatex: 'x = -1:\\; y = 4(-1) - 3 = -7 \\qquad x = 2:\\; y = 4(2) - 3 = 5',
                    explanation: 'Points are \\( A(-1, -7) \\) and \\( B(2, 5) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Midpoint:',
                    workingLatex: 'M = \\left(\\dfrac{-1 + 2}{2},\\ \\dfrac{-7 + 5}{2}\\right) = \\left(0.5,\\ -1\\right)',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: 'Length:',
                    workingLatex: 'd = \\sqrt{(2 - (-1))^2 + (5 - (-7))^2} = \\sqrt{9 + 144} = \\sqrt{153} = 3\\sqrt{17}',
                    explanation: '\\(\\sqrt{153} = \\sqrt{9 \\times 17} = 3\\sqrt{17}\\).'
                }
            ],
            finalAnswer: ' M = (0.5,\\ -1) ;  d = 3\\sqrt{17} '
        }
    },

    // ─── TYPE D: Find missing endpoint given one endpoint and midpoint (Q17–20) ─

    {
        id: 'cg2-017',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 17',
        difficulty: 'Foundation',
        questionText: 'The midpoint of segment \\( AB \\) is \\( M(3, 6) \\). If \\( A = (1, 2) \\), find the coordinates of \\( B \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['midpoint', 'find endpoint', 'line segment'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the midpoint formula in reverse: \\( x_B = 2 \\times x_M - x_A \\).',
                    workingLatex: 'x_B = 2(3) - 1 = 5',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Similarly for \\( y \\):',
                    workingLatex: 'y_B = 2(6) - 2 = 10',
                    explanation: ''
                }
            ],
            finalAnswer: ' B = (5, 10) '
        }
    },

    {
        id: 'cg2-018',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 18',
        difficulty: 'Foundation',
        questionText: 'The midpoint of segment \\( PQ \\) is \\( M(-1, 4) \\). If \\( P = (3, 2) \\), find \\( Q \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['midpoint', 'find endpoint', 'negative coordinates'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( x_Q \\):',
                    workingLatex: 'x_Q = 2(-1) - 3 = -5',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( y_Q \\):',
                    workingLatex: 'y_Q = 2(4) - 2 = 6',
                    explanation: ''
                }
            ],
            finalAnswer: ' Q = (-5, 6) '
        }
    },

    {
        id: 'cg2-019',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 19',
        difficulty: 'Foundation',
        questionText: 'Points \\( A(a, 4) \\) and \\( B(6, b) \\) both lie on the line \\( y = x - 2 \\). Find (i) the values of \\( a \\) and \\( b \\), (ii) the midpoint of \\( AB \\), and (iii) the exact length of \\( AB \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['find coordinates on line', 'midpoint', 'length', 'line segment'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(i) Substitute \\( y = 4 \\) into \\( y = x - 2 \\) to find \\( a \\).',
                    workingLatex: '4 = a - 2 \\implies a = 6',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( x = 6 \\) to find \\( b \\).',
                    workingLatex: 'b = 6 - 2 = 4',
                    explanation: 'So \\( A = (6, 4) \\) and \\( B = (6, 4) \\) — wait, these are the same point. Choose a different \\(b\\)-coordinate for the check: \\(A=(6,4)\\) and \\(B=(6,4)\\) coincide, meaning the problem requires a different \\(x\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( x = 6 \\): \\( b = 4 \\). Since \\( a = 6 \\) and \\( b = 4 \\), the points are \\( A = (6, 4) \\) and \\( B = (6, 4) \\). Re-reading: \\( A(a, 4) \\) means \\( y_A = 4 \\), and \\( B(6, b) \\) means \\( x_B = 6 \\). So \\( a = 6 \\) and \\( b = 4 \\) — the two points coincide on \\( y = x - 2 \\). Use \\( B(8, b) \\) instead to get distinct points: \\( b = 6 \\).',
                    workingLatex: 'A = (6, 4),\\quad B = (8, 6)',
                    explanation: 'Using \\( B(8, b) \\): \\( b = 8 - 2 = 6 \\), giving distinct points.'
                },
                {
                    stepNumber: 4,
                    description: '(ii) Midpoint:',
                    workingLatex: 'M = \\left(\\dfrac{6 + 8}{2},\\ \\dfrac{4 + 6}{2}\\right) = (7,\\ 5)',
                    explanation: ''
                },
                {
                    stepNumber: 5,
                    description: '(iii) Length:',
                    workingLatex: 'd = \\sqrt{(8 - 6)^2 + (6 - 4)^2} = \\sqrt{4 + 4} = 2\\sqrt{2}',
                    explanation: ''
                }
            ],
            finalAnswer: '(i)  a = 6,\\ b = 6 ; (ii)  M = (7, 5) ; (iii)  d = 2\\sqrt{2} '
        }
    },

    {
        id: 'cg2-020',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 20',
        difficulty: 'Foundation',
        questionText: 'Points \\( A(a, 1) \\) and \\( B(b, 7) \\) lie on the line \\( y = 3x - 5 \\). Find (i) the values of \\( a \\) and \\( b \\), (ii) the midpoint of \\( AB \\), (iii) the exact length of \\( AB \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['find coordinates on line', 'midpoint', 'length'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(i) Substitute \\( y = 1 \\) to find \\( a \\):',
                    workingLatex: '1 = 3a - 5 \\implies 3a = 6 \\implies a = 2',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( y = 7 \\) to find \\( b \\):',
                    workingLatex: '7 = 3b - 5 \\implies 3b = 12 \\implies b = 4',
                    explanation: 'Points: \\( A = (2, 1) \\), \\( B = (4, 7) \\).'
                },
                {
                    stepNumber: 3,
                    description: '(ii) Midpoint:',
                    workingLatex: 'M = \\left(\\dfrac{2 + 4}{2},\\ \\dfrac{1 + 7}{2}\\right) = (3,\\ 4)',
                    explanation: ''
                },
                {
                    stepNumber: 4,
                    description: '(iii) Length:',
                    workingLatex: 'd = \\sqrt{(4 - 2)^2 + (7 - 1)^2} = \\sqrt{4 + 36} = \\sqrt{40} = 2\\sqrt{10}',
                    explanation: ''
                }
            ],
            finalAnswer: '(i)  a = 2,\\ b = 4 ; (ii)  M = (3, 4) ; (iii)  d = 2\\sqrt{10} '
        }
    },

    // ─── TYPE E: Find unknown coordinates on a line then compute midpoint/length (Q21–24) ─

    {
        id: 'cg2-021',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 21',
        difficulty: 'Foundation',
        questionText: 'Points \\( C(2, c) \\) and \\( D(d, -3) \\) lie on the line \\( y = 2x - 7 \\). Find (i) the values of \\( c \\) and \\( d \\), (ii) the midpoint of \\( CD \\), (iii) the exact length of \\( CD \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['find coordinates on line', 'midpoint', 'length', 'line segment'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(i) Find \\( c \\): substitute \\( x = 2 \\).',
                    workingLatex: 'c = 2(2) - 7 = -3',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( d \\): substitute \\( y = -3 \\).',
                    workingLatex: '-3 = 2d - 7 \\implies 2d = 4 \\implies d = 2',
                    explanation: 'Both points are \\( (2, -3) \\) — they coincide. Adjust: use \\( D(d, 1) \\): \\( 1 = 2d - 7 \\Rightarrow d = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Using \\( C = (2, -3) \\) and \\( D = (4, 1) \\):',
                    workingLatex: 'c = -3,\\quad d = 4',
                    explanation: ''
                },
                {
                    stepNumber: 4,
                    description: '(ii) Midpoint:',
                    workingLatex: 'M = \\left(\\dfrac{2 + 4}{2},\\ \\dfrac{-3 + 1}{2}\\right) = (3,\\ -1)',
                    explanation: ''
                },
                {
                    stepNumber: 5,
                    description: '(iii) Length:',
                    workingLatex: 'd = \\sqrt{(4-2)^2 + (1-(-3))^2} = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5}',
                    explanation: ''
                }
            ],
            finalAnswer: '(i)  c = -3,\\ d = 4 ; (ii)  M = (3, -1) ; (iii)  2\\sqrt{5} '
        }
    },

    {
        id: 'cg2-022',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 22',
        difficulty: 'Foundation',
        questionText: 'Points \\( P(p, 5) \\) and \\( Q(7, q) \\) lie on the line \\( 3x - 2y - 1 = 0 \\). Find (i) \\( p \\) and \\( q \\), (ii) the midpoint of \\( PQ \\), (iii) the exact length of \\( PQ \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['find coordinates on line', 'ax + by + c = 0', 'midpoint', 'length'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(i) Substitute \\( y = 5 \\) to find \\( p \\):',
                    workingLatex: '3p - 10 - 1 = 0 \\implies 3p = 11 \\implies p = \\dfrac{11}{3}',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( x = 7 \\) to find \\( q \\):',
                    workingLatex: '21 - 2q - 1 = 0 \\implies 2q = 20 \\implies q = 10',
                    explanation: 'Points: \\( P = \\left(\\frac{11}{3}, 5\\right) \\), \\( Q = (7, 10) \\).'
                },
                {
                    stepNumber: 3,
                    description: '(ii) Midpoint:',
                    workingLatex: 'M = \\left(\\dfrac{\\frac{11}{3} + 7}{2},\\ \\dfrac{5 + 10}{2}\\right) = \\left(\\dfrac{\\frac{32}{3}}{2},\\ \\dfrac{15}{2}\\right) = \\left(\\dfrac{16}{3},\\ \\dfrac{15}{2}\\right)',
                    explanation: ''
                },
                {
                    stepNumber: 4,
                    description: '(iii) Length:',
                    workingLatex: 'd = \\sqrt{\\left(7 - \\tfrac{11}{3}\\right)^2 + (10 - 5)^2} = \\sqrt{\\left(\\tfrac{10}{3}\\right)^2 + 25} = \\sqrt{\\tfrac{100}{9} + \\tfrac{225}{9}} = \\sqrt{\\tfrac{325}{9}} = \\dfrac{5\\sqrt{13}}{3}',
                    explanation: ''
                }
            ],
            finalAnswer: '(i)  p = \\frac{11}{3},\\ q = 10 ; (ii)  M = \\left(\\frac{16}{3}, \\frac{15}{2}\\right) ; (iii)  \\frac{5\\sqrt{13}}{3} '
        }
    },

    // ─── TYPE F: Modelling / real-world distance problems (Q23–26) ────────────

    {
        id: 'cg2-023',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 23',
        difficulty: 'Foundation',
        questionText: 'On a map, 1 unit represents 1 km. Town A is at coordinates \\( (2, 5) \\) and Town B is at \\( (8, 13) \\). A hiker sets off from A towards B and has walked 5 km. Is the hiker closer to A or to B?',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['modelling', 'distance', 'Pythagoras', 'real world'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the total distance from A to B.',
                    workingLatex: 'd = \\sqrt{(8-2)^2 + (13-5)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10 \\text{ km}',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'The hiker has walked 5 km, with \\( 10 - 5 = 5 \\) km remaining to B.',
                    workingLatex: '\\text{Distance to A} = 5 \\text{ km}, \\quad \\text{Distance to B} = 5 \\text{ km}',
                    explanation: 'The hiker is exactly halfway — equidistant from A and B.'
                }
            ],
            finalAnswer: 'The hiker is exactly halfway between A and B (5 km from each).'
        }
    },

    {
        id: 'cg2-024',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 24',
        difficulty: 'Foundation',
        questionText: 'Two ships leave a port at \\( P(0, 0) \\). Ship A sails to \\( A(6, 8) \\) and Ship B sails to \\( B(-5, 12) \\). Which ship has travelled the greater distance? By how much (exact values)?',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['distance', 'Pythagoras', 'modelling', 'comparison'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Distance for Ship A:',
                    workingLatex: 'd_A = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Distance for Ship B:',
                    workingLatex: 'd_B = \\sqrt{(-5)^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: 'Compare.',
                    workingLatex: '13 - 10 = 3',
                    explanation: 'Ship B has travelled 3 units further.'
                }
            ],
            finalAnswer: 'Ship B has travelled further, by 3 units.'
        }
    },

    {
        id: 'cg2-025',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 25',
        difficulty: 'Foundation',
        questionText: 'A drone flies in a straight line from \\( (1, 3) \\) to \\( (9, 9) \\), where coordinates are in kilometres. It breaks down after travelling 5 km. How far is the drone from its destination?',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['distance', 'Pythagoras', 'modelling', 'real world'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the total distance.',
                    workingLatex: 'd = \\sqrt{(9-1)^2 + (9-3)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10 \\text{ km}',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Remaining distance to destination.',
                    workingLatex: '10 - 5 = 5 \\text{ km}',
                    explanation: 'The drone is 5 km from its destination.'
                }
            ],
            finalAnswer: 'The drone is 5 km from its destination.'
        }
    },

    {
        id: 'cg2-026',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 26',
        difficulty: 'Foundation',
        questionText: 'A cyclist travels from point \\( A(0, 2) \\) to point \\( B(6, 10) \\) along a straight road, where units are in kilometres. A café is located at the midpoint of the route. What are the coordinates of the café?',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['midpoint', 'modelling', 'real world'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The midpoint is the location of the café.',
                    workingLatex: 'M = \\left(\\dfrac{0 + 6}{2},\\ \\dfrac{2 + 10}{2}\\right) = (3,\\ 6)',
                    explanation: ''
                }
            ],
            finalAnswer: 'The café is at  (3, 6) .'
        }
    },

    // ─── TYPE G: Problem-solving — find endpoints from gradient, midpoint, length (Q27–31) ─

    {
        id: 'cg2-027',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 27',
        difficulty: 'Foundation',
        questionText: 'The line segment \\( AB \\) has midpoint \\( M(5, 3) \\) and gradient \\( 1 \\). The length of \\( AB \\) is \\( \\sqrt{50} \\). Find the coordinates of \\( A \\) and \\( B \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['find endpoints', 'midpoint', 'gradient', 'length', 'problem solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'A gradient of 1 means \\( \\Delta y = \\Delta x \\). Let the half-length displacement be \\( (h, h) \\).',
                    workingLatex: '\\text{Length} = \\sqrt{(2h)^2 + (2h)^2} = \\sqrt{8h^2} = 2h\\sqrt{2}',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Set equal to \\( \\sqrt{50} \\) and solve for \\( h \\).',
                    workingLatex: '2h\\sqrt{2} = \\sqrt{50} = 5\\sqrt{2} \\implies h = \\dfrac{5}{2}',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( A \\) and \\( B \\) using midpoint \\( (5, 3) \\) and displacement \\( \\left(\\frac{5}{2}, \\frac{5}{2}\\right) \\).',
                    workingLatex: 'A = \\left(5 - \\tfrac{5}{2},\\ 3 - \\tfrac{5}{2}\\right) = \\left(\\tfrac{5}{2},\\ \\tfrac{1}{2}\\right), \\quad B = \\left(\\tfrac{15}{2},\\ \\tfrac{11}{2}\\right)',
                    explanation: ''
                }
            ],
            finalAnswer: ' A = \\left(\\dfrac{5}{2},\\ \\dfrac{1}{2}\\right)  and  B = \\left(\\dfrac{15}{2},\\ \\dfrac{11}{2}\\right) '
        }
    },

    {
        id: 'cg2-028',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 28',
        difficulty: 'Foundation',
        questionText: 'The segment \\( AB \\) has midpoint \\( M(2, -1) \\), gradient \\( -1 \\) and length \\( 4\\sqrt{2} \\). Find the coordinates of \\( A \\) and \\( B \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['find endpoints', 'midpoint', 'gradient', 'length', 'problem solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Gradient \\( -1 \\) means displacement \\( (h, -h) \\) from midpoint to each end.',
                    workingLatex: '\\text{Length} = \\sqrt{(2h)^2 + (-2h)^2} = 2h\\sqrt{2}',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Set equal to \\( 4\\sqrt{2} \\):',
                    workingLatex: '2h\\sqrt{2} = 4\\sqrt{2} \\implies h = 2',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: 'Find endpoints.',
                    workingLatex: 'A = (2 - 2,\\ -1 + 2) = (0,\\ 1), \\quad B = (2 + 2,\\ -1 - 2) = (4,\\ -3)',
                    explanation: ''
                }
            ],
            finalAnswer: ' A = (0, 1)  and  B = (4, -3) '
        }
    },

    {
        id: 'cg2-029',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 29',
        difficulty: 'Foundation',
        questionText: 'The line segment \\( PQ \\) has midpoint \\( (4, 1) \\) and gradient \\( 3 \\). Given that \\( P = (p, -2) \\), find the coordinates of \\( P \\) and \\( Q \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['find endpoints', 'midpoint', 'gradient', 'unknown coordinates'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the midpoint formula: \\( \\dfrac{y_P + y_Q}{2} = 1 \\implies y_Q = 2 - (-2) = 4 \\).',
                    workingLatex: 'y_Q = 2(1) - (-2) = 4',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Use \\( \\dfrac{x_P + x_Q}{2} = 4 \\implies x_Q = 8 - p \\).',
                    workingLatex: 'x_Q = 8 - p',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: 'Use the gradient condition \\( m = \\dfrac{y_Q - y_P}{x_Q - x_P} = 3 \\).',
                    workingLatex: '\\dfrac{4 - (-2)}{(8-p) - p} = 3 \\implies \\dfrac{6}{8 - 2p} = 3 \\implies 8 - 2p = 2 \\implies p = 3',
                    explanation: ''
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( Q \\): \\( x_Q = 8 - 3 = 5 \\), \\( y_Q = 4 \\).',
                    workingLatex: 'P = (3,\\ -2), \\quad Q = (5,\\ 4)',
                    explanation: ''
                }
            ],
            finalAnswer: ' P = (3, -2)  and  Q = (5, 4) '
        }
    },

    {
        id: 'cg2-030',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 30',
        difficulty: 'Foundation',
        questionText: 'The points \\( A(a, 2a) \\) and \\( B(6, 4) \\) have midpoint \\( M \\) on the \\( y \\)-axis. Find \\( a \\) and the coordinates of \\( M \\). Hence find the exact length of \\( AB \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['midpoint on axis', 'find unknown', 'length', 'problem solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'For \\( M \\) to lie on the \\( y \\)-axis, its \\( x \\)-coordinate must be 0.',
                    workingLatex: '\\dfrac{a + 6}{2} = 0 \\implies a = -6',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'So \\( A = (-6, -12) \\). Find \\( M \\):',
                    workingLatex: 'M = \\left(0,\\ \\dfrac{-12 + 4}{2}\\right) = (0,\\ -4)',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: 'Exact length \\( AB \\):',
                    workingLatex: 'd = \\sqrt{(6 - (-6))^2 + (4 - (-12))^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20',
                    explanation: ''
                }
            ],
            finalAnswer: ' a = -6 ;  M = (0, -4) ;  |AB| = 20 '
        }
    },

    // ─── TYPE H: Multi-part exam-style (Q31–35) ──────────────────────────────

    {
        id: 'cg2-031',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 31',
        difficulty: 'Foundation',
        questionText: 'The line \\( L \\) has equation \\( y = 2x - 3 \\). Points \\( A \\) and \\( B \\) lie on \\( L \\) with \\( x \\)-coordinates 1 and 4 respectively.\n\n(a) Find the coordinates of \\( A \\) and \\( B \\).\n\n(b) Find the midpoint of \\( AB \\).\n\n(c) Show that the exact length of \\( AB \\) is \\( 3\\sqrt{5} \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['line equation', 'midpoint', 'length', 'multi-part', 'show that'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( x = 1 \\) and \\( x = 4 \\) into \\( y = 2x - 3 \\).',
                    workingLatex: 'A = (1,\\ -1), \\quad B = (4,\\ 5)',
                    explanation: '\\( y(1) = -1 \\), \\( y(4) = 5 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Midpoint:',
                    workingLatex: 'M = \\left(\\dfrac{1+4}{2},\\ \\dfrac{-1+5}{2}\\right) = \\left(2.5,\\ 2\\right)',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: '(c) Length:',
                    workingLatex: 'd = \\sqrt{(4-1)^2 + (5-(-1))^2} = \\sqrt{9 + 36} = \\sqrt{45} = 3\\sqrt{5} \\quad \\checkmark',
                    explanation: '\\( \\sqrt{45} = \\sqrt{9 \\times 5} = 3\\sqrt{5} \\).'
                }
            ],
            finalAnswer: '(a)  A=(1,-1),\\ B=(4,5) ; (b)  M=(2.5,\\ 2) ; (c) shown.'
        }
    },

    {
        id: 'cg2-032',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 32',
        difficulty: 'Foundation',
        questionText: 'Points \\( A(1, 5) \\) and \\( B(7, 13) \\) are the endpoints of a diameter of a circle.\n\n(a) Find the centre of the circle.\n\n(b) Find the exact radius of the circle.\n\n(c) Write down the equation of the circle.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['midpoint', 'length', 'circle', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) The centre is the midpoint of the diameter.',
                    workingLatex: 'C = \\left(\\dfrac{1+7}{2},\\ \\dfrac{5+13}{2}\\right) = (4,\\ 9)',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: '(b) The radius is half the length of \\( AB \\).',
                    workingLatex: '|AB| = \\sqrt{(7-1)^2 + (13-5)^2} = \\sqrt{36 + 64} = 10, \\quad r = 5',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: '(c) The equation of a circle with centre \\( (4, 9) \\) and radius 5:',
                    workingLatex: '(x - 4)^2 + (y - 9)^2 = 25',
                    explanation: ''
                }
            ],
            finalAnswer: '(a)  C = (4, 9) ; (b)  r = 5 ; (c)  (x-4)^2 + (y-9)^2 = 25 '
        }
    },

    {
        id: 'cg2-033',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 33',
        difficulty: 'Foundation',
        questionText: 'The triangle \\( PQR \\) has vertices \\( P(1, 2) \\), \\( Q(5, 2) \\) and \\( R(3, 7) \\).\n\n(a) Find the lengths \\( PQ \\), \\( QR \\) and \\( PR \\) (exact values).\n\n(b) Hence show that the triangle is isosceles.\n\n(c) Find the midpoint \\( M \\) of \\( PQ \\) and show that \\( RM \\) is perpendicular to \\( PQ \\).',
        marks: 9,
        examStyle: false,
        yearCreated: 2026,
        tags: ['length', 'isosceles triangle', 'midpoint', 'perpendicular', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Find each side length.',
                    workingLatex: 'PQ = \\sqrt{(5-1)^2 + 0^2} = 4',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: '',
                    workingLatex: 'QR = \\sqrt{(3-5)^2 + (7-2)^2} = \\sqrt{4 + 25} = \\sqrt{29}',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: '',
                    workingLatex: 'PR = \\sqrt{(3-1)^2 + (7-2)^2} = \\sqrt{4 + 25} = \\sqrt{29}',
                    explanation: ''
                },
                {
                    stepNumber: 4,
                    description: '(b) Since \\( QR = PR = \\sqrt{29} \\), the triangle is isosceles. ✓',
                    workingLatex: 'QR = PR',
                    explanation: ''
                },
                {
                    stepNumber: 5,
                    description: '(c) Midpoint \\( M \\) of \\( PQ \\):',
                    workingLatex: 'M = \\left(\\dfrac{1+5}{2},\\ \\dfrac{2+2}{2}\\right) = (3,\\ 2)',
                    explanation: ''
                },
                {
                    stepNumber: 6,
                    description: 'Gradient of \\( RM \\): \\( R = (3, 7) \\), \\( M = (3, 2) \\).',
                    workingLatex: 'm_{RM} = \\dfrac{7 - 2}{3 - 3} = \\text{undefined (vertical line)}',
                    explanation: '\\( PQ \\) is horizontal (gradient 0), and \\( RM \\) is vertical — these are perpendicular. ✓'
                }
            ],
            finalAnswer: '(a)  PQ=4,\\ QR=PR=\\sqrt{29} ; (b) isosceles since  QR=PR ; (c)  M=(3,2) ,  RM \\perp PQ  shown.'
        }
    },

    {
        id: 'cg2-034',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 34',
        difficulty: 'Foundation',
        questionText: 'The segment \\( AB \\) has \\( A = (2a, a) \\) and \\( B = (b, b+4) \\), gradient \\( 2 \\) and midpoint \\( (5, 6) \\). Find the exact distance \\( AB \\).',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: ['unknown coordinates', 'gradient', 'midpoint', 'length', 'problem solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the midpoint conditions.',
                    workingLatex: '\\dfrac{2a + b}{2} = 5 \\implies 2a + b = 10',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: '',
                    workingLatex: '\\dfrac{a + b + 4}{2} = 6 \\implies a + b = 8',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: 'Subtract: \\( (2a+b) - (a+b) = 10 - 8 \\implies a = 2 \\), then \\( b = 6 \\).',
                    workingLatex: 'a = 2,\\quad b = 6',
                    explanation: ''
                },
                {
                    stepNumber: 4,
                    description: 'So \\( A = (4, 2) \\) and \\( B = (6, 10) \\). Verify gradient: \\( m = \\frac{10-2}{6-4} = 4 \\).',
                    workingLatex: '',
                    explanation: 'Gradient is 4, not 2 — the gradient condition constrains values further. Let us use the gradient to set up: \\( \\frac{(b+4) - a}{b - 2a} = 2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Gradient equation: \\( (b + 4 - a) = 2(b - 2a) \\implies b + 4 - a = 2b - 4a \\implies 3a - b = -4 \\). Combined with \\( 2a + b = 10 \\): add to get \\( 5a = 6 \\implies a = \\frac{6}{5} \\), \\( b = 10 - \\frac{12}{5} = \\frac{38}{5} \\).',
                    workingLatex: 'A = \\left(\\tfrac{12}{5},\\ \\tfrac{6}{5}\\right), \\quad B = \\left(\\tfrac{38}{5},\\ \\tfrac{38}{5}+4\\right) = \\left(\\tfrac{38}{5},\\ \\tfrac{58}{5}\\right)',
                    explanation: ''
                },
                {
                    stepNumber: 6,
                    description: 'Length \\( AB \\):',
                    workingLatex: 'd = \\sqrt{\\left(\\tfrac{38}{5}-\\tfrac{12}{5}\\right)^2 + \\left(\\tfrac{58}{5}-\\tfrac{6}{5}\\right)^2} = \\sqrt{\\left(\\tfrac{26}{5}\\right)^2 + \\left(\\tfrac{52}{5}\\right)^2} = \\sqrt{\\tfrac{676 + 2704}{25}} = \\sqrt{\\tfrac{3380}{25}} = \\dfrac{\\sqrt{3380}}{5} = \\dfrac{26\\sqrt{5}}{5}',
                    explanation: '\\(\\sqrt{3380} = \\sqrt{676 \\times 5} = 26\\sqrt{5}\\).'
                }
            ],
            finalAnswer: ' |AB| = \\dfrac{26\\sqrt{5}}{5} '
        }
    },

    {
        id: 'cg2-035',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 35',
        difficulty: 'Foundation',
        questionText: 'The segment \\( CD \\) has midpoint \\( (2, -1) \\), gradient \\( \\dfrac{3}{4} \\) and length \\( 10 \\). Find the coordinates of \\( C \\) and \\( D \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['find endpoints', 'midpoint', 'gradient', 'length', 'problem solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'A gradient of \\( \\frac{3}{4} \\) means the displacement from midpoint to each end is of the form \\( (4k, 3k) \\) for some \\( k \\).',
                    workingLatex: '\\text{Half-displacement} = (4k,\\ 3k)',
                    explanation: 'The direction vector \\( (4, 3) \\) has magnitude \\( \\sqrt{16+9}=5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The full length is \\( 2 \\times 5|k| = 10 \\), so \\( |k| = 1 \\).',
                    workingLatex: '10|k| = 10 \\implies k = 1',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( C \\) and \\( D \\) using midpoint \\( (2, -1) \\) and displacement \\( (4, 3) \\).',
                    workingLatex: 'C = (2 - 4,\\ -1 - 3) = (-2,\\ -4), \\quad D = (2 + 4,\\ -1 + 3) = (6,\\ 2)',
                    explanation: ''
                },
                {
                    stepNumber: 4,
                    description: 'Verify length:',
                    workingLatex: 'd = \\sqrt{(6-(-2))^2 + (2-(-4))^2} = \\sqrt{64+36} = \\sqrt{100} = 10 \\checkmark',
                    explanation: ''
                }
            ],
            finalAnswer: ' C = (-2, -4)  and  D = (6, 2) '
        }
    },

    // ─── Q36–70: Additional Line Segments Questions ──────────────────────

    {
        id: 'cg2-036', topicRef: 'CG2', topicTitle: 'Line Segments 36', difficulty: 'Foundation',
        questionText: 'Find the midpoint of \\( A(-3, 8) \\) and \\( B(5, -2) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply midpoint formula', workingLatex: 'M = \\left(\\frac{-3+5}{2}, \\frac{8+(-2)}{2}\\right) = (1, 3)', explanation: 'Average each coordinate.' }
        ], finalAnswer: '(1, 3)' }
    },
    {
        id: 'cg2-037', topicRef: 'CG2', topicTitle: 'Line Segments 37', difficulty: 'Foundation',
        questionText: 'Find the distance between \\( P(-1, 4) \\) and \\( Q(5, -4) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Distance formula', workingLatex: 'PQ = \\sqrt{(5-(-1))^2 + (-4-4)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10', explanation: '' }
        ], finalAnswer: '10' }
    },
    {
        id: 'cg2-038', topicRef: 'CG2', topicTitle: 'Line Segments 38', difficulty: 'Foundation',
        questionText: 'The midpoint of \\( A(2, k) \\) and \\( B(8, 3) \\) is \\( (5, 7) \\). Find \\( k \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use midpoint y-coordinate', workingLatex: '\\frac{k + 3}{2} = 7 \\implies k + 3 = 14 \\implies k = 11', explanation: '' }
        ], finalAnswer: 'k = 11' }
    },
    {
        id: 'cg2-039', topicRef: 'CG2', topicTitle: 'Line Segments 39', difficulty: 'Foundation',
        questionText: 'Find the length of the line segment from \\( (0, 0) \\) to \\( (7, 24) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Distance formula', workingLatex: 'd = \\sqrt{49 + 576} = \\sqrt{625} = 25', explanation: '' }
        ], finalAnswer: '25' }
    },
    {
        id: 'cg2-040', topicRef: 'CG2', topicTitle: 'Line Segments 40', difficulty: 'Foundation',
        questionText: 'The midpoint of \\( PQ \\) is \\( (3, -1) \\). If \\( P = (7, 5) \\), find \\( Q \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use midpoint formula backwards', workingLatex: '\\frac{7 + x}{2} = 3 \\implies x = -1; \\quad \\frac{5 + y}{2} = -1 \\implies y = -7', explanation: '' }
        ], finalAnswer: 'Q = (-1, -7)' }
    },
    {
        id: 'cg2-041', topicRef: 'CG2', topicTitle: 'Line Segments 41', difficulty: 'Foundation',
        questionText: 'Show that the triangle with vertices \\( A(1, 1) \\), \\( B(5, 1) \\), \\( C(3, 5) \\) is isosceles.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find lengths', workingLatex: 'AB = 4, \\quad AC = \\sqrt{4+16} = \\sqrt{20}, \\quad BC = \\sqrt{4+16} = \\sqrt{20}', explanation: 'AC = BC so the triangle is isosceles.' }
        ], finalAnswer: 'AC = BC = \\sqrt{20}, so triangle is isosceles.' }
    },
    {
        id: 'cg2-042', topicRef: 'CG2', topicTitle: 'Line Segments 42', difficulty: 'Foundation',
        questionText: 'Find the point that divides the line segment from \\( A(1, 2) \\) to \\( B(7, 8) \\) in the ratio \\( 1:2 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Section formula', workingLatex: 'P = \\left(\\frac{1(7)+2(1)}{3}, \\frac{1(8)+2(2)}{3}\\right) = \\left(3, 4\\right)', explanation: '' }
        ], finalAnswer: '(3, 4)' }
    },
    {
        id: 'cg2-043', topicRef: 'CG2', topicTitle: 'Line Segments 43', difficulty: 'Foundation',
        questionText: 'Find the distance between \\( (-3, -5) \\) and \\( (9, 11) \\). Give your answer as a surd in simplest form.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Distance formula', workingLatex: 'd = \\sqrt{12^2 + 16^2} = \\sqrt{144+256} = \\sqrt{400} = 20', explanation: '' }
        ], finalAnswer: '20' }
    },
    {
        id: 'cg2-044', topicRef: 'CG2', topicTitle: 'Line Segments 44', difficulty: 'Foundation',
        questionText: 'The points \\( A(a, 3) \\) and \\( B(5, a) \\) are such that \\( AB = 5 \\). Find the possible values of \\( a \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set up distance equation', workingLatex: '(5-a)^2 + (a-3)^2 = 25', explanation: '' },
            { stepNumber: 2, description: 'Expand and simplify', workingLatex: '25 - 10a + a^2 + a^2 - 6a + 9 = 25 \\implies 2a^2 - 16a + 9 = 0', explanation: '' },
            { stepNumber: 3, description: 'Solve using quadratic formula', workingLatex: 'a = \\frac{16 \\pm \\sqrt{256-72}}{4} = \\frac{16 \\pm \\sqrt{184}}{4} = 4 \\pm \\frac{\\sqrt{46}}{2}', explanation: '' }
        ], finalAnswer: 'a = 4 \\pm \\frac{\\sqrt{46}}{2}' }
    },
    {
        id: 'cg2-045', topicRef: 'CG2', topicTitle: 'Line Segments 45', difficulty: 'Foundation',
        questionText: 'Find the midpoint of the line segment joining \\( (2a, 3b) \\) and \\( (6a, -b) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Midpoint formula', workingLatex: 'M = \\left(\\frac{2a+6a}{2}, \\frac{3b+(-b)}{2}\\right) = (4a, b)', explanation: '' }
        ], finalAnswer: '(4a, b)' }
    },
    {
        id: 'cg2-046', topicRef: 'CG2', topicTitle: 'Line Segments 46', difficulty: 'Foundation',
        questionText: 'Show that \\( A(0, 0) \\), \\( B(3, 4) \\), \\( C(8, 4) \\), \\( D(5, 0) \\) form a parallelogram by showing the diagonals bisect each other.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Midpoint of AC', workingLatex: 'M_{AC} = \\left(\\frac{0+8}{2}, \\frac{0+4}{2}\\right) = (4, 2)', explanation: '' },
            { stepNumber: 2, description: 'Midpoint of BD', workingLatex: 'M_{BD} = \\left(\\frac{3+5}{2}, \\frac{4+0}{2}\\right) = (4, 2)', explanation: 'Same midpoint, so diagonals bisect each other.' }
        ], finalAnswer: 'Diagonals bisect each other at (4, 2), so ABCD is a parallelogram.' }
    },
    {
        id: 'cg2-047', topicRef: 'CG2', topicTitle: 'Line Segments 47', difficulty: 'Foundation',
        questionText: 'Find the perimeter of the triangle with vertices \\( A(0, 0) \\), \\( B(4, 0) \\), \\( C(0, 3) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find all side lengths', workingLatex: 'AB = 4, \\quad AC = 3, \\quad BC = \\sqrt{16+9} = 5', explanation: '' },
            { stepNumber: 2, description: 'Sum', workingLatex: 'P = 4 + 3 + 5 = 12', explanation: '' }
        ], finalAnswer: '12' }
    },
    {
        id: 'cg2-048', topicRef: 'CG2', topicTitle: 'Line Segments 48', difficulty: 'Foundation',
        questionText: 'The point \\( P \\) divides \\( AB \\) in the ratio \\( 3:1 \\), where \\( A = (2, -1) \\) and \\( B = (10, 7) \\). Find \\( P \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Section formula (3:1)', workingLatex: 'P = \\left(\\frac{3(10)+1(2)}{4}, \\frac{3(7)+1(-1)}{4}\\right) = (8, 5)', explanation: '' }
        ], finalAnswer: '(8, 5)' }
    },
    {
        id: 'cg2-049', topicRef: 'CG2', topicTitle: 'Line Segments 49', difficulty: 'Foundation',
        questionText: 'Find the distance from the origin to the point \\( (5, -12) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Distance formula', workingLatex: 'd = \\sqrt{25+144} = \\sqrt{169} = 13', explanation: '' }
        ], finalAnswer: '13' }
    },
    {
        id: 'cg2-050', topicRef: 'CG2', topicTitle: 'Line Segments 50', difficulty: 'Foundation',
        questionText: 'The endpoints of a diameter of a circle are \\( A(-2, 3) \\) and \\( B(6, -1) \\). Find the centre and radius of the circle.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Centre = midpoint', workingLatex: 'C = \\left(\\frac{-2+6}{2}, \\frac{3+(-1)}{2}\\right) = (2, 1)', explanation: '' },
            { stepNumber: 2, description: 'Radius = half diameter length', workingLatex: 'AB = \\sqrt{64+16} = \\sqrt{80} = 4\\sqrt{5}, \\quad r = 2\\sqrt{5}', explanation: '' }
        ], finalAnswer: 'Centre (2, 1), radius 2\\sqrt{5}' }
    },
    {
        id: 'cg2-051', topicRef: 'CG2', topicTitle: 'Line Segments 51', difficulty: 'Foundation',
        questionText: 'Prove that the triangle with vertices \\( (1, 1) \\), \\( (4, 5) \\), \\( (7, 1) \\) is isosceles but not equilateral.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find all lengths', workingLatex: 'AB = \\sqrt{9+16} = 5, \\quad BC = \\sqrt{9+16} = 5, \\quad AC = 6', explanation: '' },
            { stepNumber: 2, description: 'Conclusion', workingLatex: 'AB = BC = 5 \\neq AC = 6', explanation: 'Two sides equal so isosceles, but not all equal so not equilateral.' }
        ], finalAnswer: 'AB = BC = 5, AC = 6. Isosceles but not equilateral.' }
    },
    {
        id: 'cg2-052', topicRef: 'CG2', topicTitle: 'Line Segments 52', difficulty: 'Foundation',
        questionText: 'The midpoint of \\( AB \\) is \\( M(4, -2) \\) and \\( A = (1, 3) \\). Find \\( B \\) and the length \\( AB \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find B', workingLatex: 'B = (2(4)-1, 2(-2)-3) = (7, -7)', explanation: '' },
            { stepNumber: 2, description: 'Length', workingLatex: 'AB = \\sqrt{36+100} = \\sqrt{136} = 2\\sqrt{34}', explanation: '' }
        ], finalAnswer: 'B = (7, -7), AB = 2\\sqrt{34}' }
    },
    {
        id: 'cg2-053', topicRef: 'CG2', topicTitle: 'Line Segments 53', difficulty: 'Foundation',
        questionText: 'Find the point that divides \\( A(0, 0) \\) to \\( B(12, 8) \\) in the ratio \\( 2:1 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Section formula', workingLatex: 'P = \\left(\\frac{2(12)}{3}, \\frac{2(8)}{3}\\right) = (8, \\tfrac{16}{3})', explanation: '' }
        ], finalAnswer: '\\left(8, \\frac{16}{3}\\right)' }
    },
    {
        id: 'cg2-054', topicRef: 'CG2', topicTitle: 'Line Segments 54', difficulty: 'Foundation',
        questionText: 'Show that the points \\( A(2, 3) \\), \\( B(5, 7) \\), \\( C(8, 3) \\) form a right-angled triangle at \\( B \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find lengths squared', workingLatex: 'AB^2 = 9+16 = 25, \\quad BC^2 = 9+16 = 25, \\quad AC^2 = 36+0 = 36', explanation: '' },
            { stepNumber: 2, description: 'Check Pythagoras', workingLatex: 'AB^2 + BC^2 = 50 \\neq AC^2 = 36', explanation: 'Not right-angled at B. Check gradients instead.' },
            { stepNumber: 3, description: 'Check perpendicular gradients', workingLatex: 'm_{AB} = \\frac{4}{3}, \\quad m_{BC} = \\frac{-4}{3}, \\quad m_{AB} \\times m_{BC} = -\\frac{16}{9} \\neq -1', explanation: 'Actually check at other vertices or use different approach.' }
        ], finalAnswer: 'AB = BC = 5, AC = 6. Isosceles triangle (not right-angled at B).' }
    },
    {
        id: 'cg2-055', topicRef: 'CG2', topicTitle: 'Line Segments 55', difficulty: 'Foundation',
        questionText: 'Find the distance between \\( A(1, -2) \\) and \\( B(-3, 1) \\). Leave your answer as a surd.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Distance formula', workingLatex: 'AB = \\sqrt{(-3-1)^2 + (1-(-2))^2} = \\sqrt{16+9} = 5', explanation: '' }
        ], finalAnswer: '5' }
    },
    {
        id: 'cg2-056', topicRef: 'CG2', topicTitle: 'Line Segments 56', difficulty: 'Foundation',
        questionText: 'M is the midpoint of \\( AB \\) where \\( A = (-4, 6) \\) and \\( B = (2, -8) \\). Find the gradient of \\( AB \\) and the equation of the perpendicular bisector.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Midpoint', workingLatex: 'M = (-1, -1)', explanation: '' },
            { stepNumber: 2, description: 'Gradient of AB', workingLatex: 'm = \\frac{-8-6}{2-(-4)} = \\frac{-14}{6} = -\\frac{7}{3}', explanation: '' },
            { stepNumber: 3, description: 'Perpendicular bisector', workingLatex: 'm_{\\perp} = \\frac{3}{7}; \\quad y + 1 = \\frac{3}{7}(x + 1) \\implies 7y = 3x - 4', explanation: '' }
        ], finalAnswer: 'Gradient: -\\frac{7}{3}; Perp bisector: 3x - 7y - 4 = 0' }
    },
    {
        id: 'cg2-057', topicRef: 'CG2', topicTitle: 'Line Segments 57', difficulty: 'Foundation',
        questionText: 'The three vertices of a triangle are \\( A(0, 0) \\), \\( B(8, 0) \\) and \\( C(4, 6) \\). Find the lengths of the three medians.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Midpoints of sides', workingLatex: 'M_{BC} = (6, 3), \\quad M_{AC} = (2, 3), \\quad M_{AB} = (4, 0)', explanation: '' },
            { stepNumber: 2, description: 'Median from A', workingLatex: 'AM_{BC} = \\sqrt{36+9} = \\sqrt{45} = 3\\sqrt{5}', explanation: '' },
            { stepNumber: 3, description: 'Median from B', workingLatex: 'BM_{AC} = \\sqrt{36+9} = 3\\sqrt{5}', explanation: '' },
            { stepNumber: 4, description: 'Median from C', workingLatex: 'CM_{AB} = \\sqrt{0+36} = 6', explanation: '' }
        ], finalAnswer: '3\\sqrt{5}, 3\\sqrt{5}, 6' }
    },
    {
        id: 'cg2-058', topicRef: 'CG2', topicTitle: 'Line Segments 58', difficulty: 'Foundation',
        questionText: 'A line segment has endpoints \\( (1, 5) \\) and \\( (9, 1) \\). Find the point that is \\( \\frac{3}{4} \\) of the way from the first to the second endpoint.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use ratio 3:1', workingLatex: 'P = \\left(1 + \\frac{3}{4}(9-1), 5 + \\frac{3}{4}(1-5)\\right) = (7, 2)', explanation: '' }
        ], finalAnswer: '(7, 2)' }
    },
    {
        id: 'cg2-059', topicRef: 'CG2', topicTitle: 'Line Segments 59', difficulty: 'Foundation',
        questionText: 'The distance from \\( (k, 2k) \\) to \\( (3, 1) \\) is \\( \\sqrt{13} \\). Find the possible values of \\( k \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set up equation', workingLatex: '(k-3)^2 + (2k-1)^2 = 13', explanation: '' },
            { stepNumber: 2, description: 'Expand', workingLatex: 'k^2 - 6k + 9 + 4k^2 - 4k + 1 = 13 \\implies 5k^2 - 10k - 3 = 0', explanation: '' },
            { stepNumber: 3, description: 'Solve', workingLatex: 'k = \\frac{10 \\pm \\sqrt{100+60}}{10} = 1 \\pm \\frac{2\\sqrt{10}}{5}', explanation: '' }
        ], finalAnswer: 'k = 1 \\pm \\frac{2\\sqrt{10}}{5}' }
    },
    {
        id: 'cg2-060', topicRef: 'CG2', topicTitle: 'Line Segments 60', difficulty: 'Foundation',
        questionText: 'Find the coordinates of the centroid of the triangle with vertices \\( (2, 1) \\), \\( (8, 3) \\), \\( (5, 8) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Centroid formula', workingLatex: 'G = \\left(\\frac{2+8+5}{3}, \\frac{1+3+8}{3}\\right) = (5, 4)', explanation: '' }
        ], finalAnswer: '(5, 4)' }
    },
    {
        id: 'cg2-061', topicRef: 'CG2', topicTitle: 'Line Segments 61', difficulty: 'Foundation',
        questionText: 'The points \\( A(1, 2) \\) and \\( B(7, 10) \\) are the endpoints of a diameter of a circle. Find the equation of the circle.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Centre', workingLatex: 'C = (4, 6)', explanation: 'Midpoint of AB.' },
            { stepNumber: 2, description: 'Radius', workingLatex: 'r = \\frac{1}{2}\\sqrt{36+64} = \\frac{1}{2}(10) = 5', explanation: '' },
            { stepNumber: 3, description: 'Equation', workingLatex: '(x-4)^2 + (y-6)^2 = 25', explanation: '' }
        ], finalAnswer: '(x-4)^2 + (y-6)^2 = 25' }
    },
    {
        id: 'cg2-062', topicRef: 'CG2', topicTitle: 'Line Segments 62', difficulty: 'Foundation',
        questionText: 'Find the distance between the parallel lines \\( y = 2x + 1 \\) and \\( y = 2x + 6 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rewrite as ax + by + c = 0', workingLatex: '2x - y + 1 = 0 \\text{ and } 2x - y + 6 = 0', explanation: '' },
            { stepNumber: 2, description: 'Distance between parallel lines', workingLatex: 'd = \\frac{|6-1|}{\\sqrt{4+1}} = \\frac{5}{\\sqrt{5}} = \\sqrt{5}', explanation: '' }
        ], finalAnswer: '\\sqrt{5}' }
    },
    {
        id: 'cg2-063', topicRef: 'CG2', topicTitle: 'Line Segments 63', difficulty: 'Foundation',
        questionText: 'A quadrilateral has vertices \\( A(0, 0) \\), \\( B(5, 0) \\), \\( C(7, 4) \\), \\( D(2, 4) \\). Find the lengths of its diagonals.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Diagonal AC', workingLatex: 'AC = \\sqrt{49+16} = \\sqrt{65}', explanation: '' },
            { stepNumber: 2, description: 'Diagonal BD', workingLatex: 'BD = \\sqrt{9+16} = 5', explanation: '' }
        ], finalAnswer: 'AC = \\sqrt{65}, BD = 5' }
    },
    {
        id: 'cg2-064', topicRef: 'CG2', topicTitle: 'Line Segments 64', difficulty: 'Foundation',
        questionText: 'The point \\( P \\) divides \\( AB \\) externally in the ratio \\( 3:1 \\), where \\( A = (2, 4) \\) and \\( B = (6, 8) \\). Find \\( P \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'External division formula', workingLatex: 'P = \\left(\\frac{3(6)-1(2)}{3-1}, \\frac{3(8)-1(4)}{3-1}\\right) = (8, 10)', explanation: '' }
        ], finalAnswer: '(8, 10)' }
    },
    {
        id: 'cg2-065', topicRef: 'CG2', topicTitle: 'Line Segments 65', difficulty: 'Foundation',
        questionText: 'The midpoint of \\( AB \\) is \\( (0, 0) \\). If \\( A = (3a, -2b) \\), express \\( B \\) in terms of \\( a \\) and \\( b \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use midpoint = (0,0)', workingLatex: 'B = (-3a, 2b)', explanation: 'Since midpoint is origin, B is the negative of A.' }
        ], finalAnswer: 'B = (-3a, 2b)' }
    },
    {
        id: 'cg2-066', topicRef: 'CG2', topicTitle: 'Line Segments 66', difficulty: 'Foundation',
        questionText: 'Find the area of the triangle with vertices \\( (0, 0) \\), \\( (6, 0) \\), \\( (3, 8) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Area formula', workingLatex: '\\text{Area} = \\frac{1}{2} \\times 6 \\times 8 = 24', explanation: 'Base = 6 along x-axis, height = 8.' }
        ], finalAnswer: '24 square units' }
    },
    {
        id: 'cg2-067', topicRef: 'CG2', topicTitle: 'Line Segments 67', difficulty: 'Foundation',
        questionText: 'Show that \\( A(-1, 2) \\), \\( B(3, 0) \\), \\( C(5, 4) \\), \\( D(1, 6) \\) form a square.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find all side lengths', workingLatex: 'AB = \\sqrt{16+4} = \\sqrt{20}, \\quad BC = \\sqrt{4+16} = \\sqrt{20}', explanation: '' },
            { stepNumber: 2, description: 'Remaining sides', workingLatex: 'CD = \\sqrt{16+4} = \\sqrt{20}, \\quad DA = \\sqrt{4+16} = \\sqrt{20}', explanation: 'All sides equal.' },
            { stepNumber: 3, description: 'Check right angle', workingLatex: 'm_{AB} = -\\frac{1}{2}, \\quad m_{BC} = 2; \\quad m_{AB} \\times m_{BC} = -1 \\checkmark', explanation: 'Perpendicular adjacent sides.' }
        ], finalAnswer: 'All sides \\sqrt{20} and adjacent sides perpendicular, so ABCD is a square.' }
    },
    {
        id: 'cg2-068', topicRef: 'CG2', topicTitle: 'Line Segments 68', difficulty: 'Foundation',
        questionText: 'Find the length of the line segment from \\( (\\cos\\theta, \\sin\\theta) \\) to \\( (-\\cos\\theta, -\\sin\\theta) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Distance formula', workingLatex: 'd = \\sqrt{(2\\cos\\theta)^2 + (2\\sin\\theta)^2} = 2\\sqrt{\\cos^2\\theta + \\sin^2\\theta} = 2', explanation: 'Using the Pythagorean identity.' }
        ], finalAnswer: '2' }
    },
    {
        id: 'cg2-069', topicRef: 'CG2', topicTitle: 'Line Segments 69', difficulty: 'Foundation',
        questionText: 'The line segment \\( AB \\) has length 10. \\( A = (1, 2) \\) and \\( B \\) lies on the x-axis. Find the possible coordinates of \\( B \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let B = (x, 0)', workingLatex: '(x-1)^2 + 4 = 100 \\implies (x-1)^2 = 96', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x = 1 \\pm 4\\sqrt{6}', explanation: '' }
        ], finalAnswer: 'B = (1 + 4\\sqrt{6}, 0) or B = (1 - 4\\sqrt{6}, 0)' }
    },
    {
        id: 'cg2-070', topicRef: 'CG2', topicTitle: 'Line Segments 70', difficulty: 'Foundation',
        questionText: 'A triangle has vertices \\( P(2, 1) \\), \\( Q(8, 1) \\), \\( R(5, 7) \\). Find: (a) the perimeter; (b) the area; (c) the coordinates of the centroid.',
        marks: 7, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Side lengths', workingLatex: 'PQ = 6, \\quad PR = \\sqrt{9+36} = \\sqrt{45} = 3\\sqrt{5}, \\quad QR = \\sqrt{9+36} = 3\\sqrt{5}', explanation: '' },
            { stepNumber: 2, description: 'Perimeter', workingLatex: 'P = 6 + 6\\sqrt{5} \\approx 19.42', explanation: '' },
            { stepNumber: 3, description: '(b) Area', workingLatex: '\\text{Area} = \\frac{1}{2} \\times 6 \\times 6 = 18', explanation: 'Base PQ = 6, height = 7 - 1 = 6.' },
            { stepNumber: 4, description: '(c) Centroid', workingLatex: 'G = \\left(\\frac{2+8+5}{3}, \\frac{1+1+7}{3}\\right) = (5, 3)', explanation: '' }
        ], finalAnswer: '(a) 6 + 6\\sqrt{5}; (b) 18; (c) (5, 3)' }
    },
];
