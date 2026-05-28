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

    // ── TYPE A: Basic equations using graph sketch (0° to 360°) ─────────────
    {
        id: 't4-001',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 01',
        difficulty: 'Foundation',
        questionText: 'By sketching a graph, solve \\( \\sin x = 0.6 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'graph sketch', 'sin', 'basic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use a calculator to find the principal value.',
                    workingLatex: 'x = \\sin^{-1}(0.6) = 36.9^\\circ \\text{ (1 d.p.)}',
                    explanation: 'This is the first solution, in the first quadrant.'
                },
                {
                    stepNumber: 2,
                    description: 'Sketch \\( y = \\sin x \\) over \\( [0^\\circ, 360^\\circ] \\) and draw the horizontal line \\( y = 0.6 \\). The line crosses the curve twice.',
                    workingLatex: '\\text{Second solution: } 180^\\circ - 36.9^\\circ = 143.1^\\circ',
                    explanation: 'By symmetry of the sine graph about \\( x = 90^\\circ \\), the second solution is \\( 180^\\circ \\) minus the first.'
                }
            ],
            finalAnswer: ' x = 36.9^\\circ  and  x = 143.1^\\circ '
        }
    },
    {
        id: 't4-002',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 02',
        difficulty: 'Foundation',
        questionText: 'By sketching a graph, solve \\( \\cos x = 0.45 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'graph sketch', 'cos', 'basic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the principal value using a calculator.',
                    workingLatex: 'x = \\cos^{-1}(0.45) = 63.3^\\circ \\text{ (1 d.p.)}',
                    explanation: 'First solution is in the first quadrant where cosine is positive.'
                },
                {
                    stepNumber: 2,
                    description: 'Sketch \\( y = \\cos x \\) and draw \\( y = 0.45 \\). Use the symmetry of the cosine graph about \\( x = 180^\\circ \\).',
                    workingLatex: '\\text{Second solution: } 360^\\circ - 63.3^\\circ = 296.7^\\circ',
                    explanation: 'Cosine is also positive in the fourth quadrant, so the second solution is \\( 360^\\circ \\) minus the first.'
                }
            ],
            finalAnswer: ' x = 63.3^\\circ  and  x = 296.7^\\circ '
        }
    },
    {
        id: 't4-003',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 03',
        difficulty: 'Foundation',
        questionText: 'By sketching a graph, solve \\( \\tan x = 3 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'graph sketch', 'tan', 'basic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the principal value.',
                    workingLatex: 'x = \\tan^{-1}(3) = 71.6^\\circ \\text{ (1 d.p.)}',
                    explanation: 'First solution in the first quadrant.'
                },
                {
                    stepNumber: 2,
                    description: 'The tan graph has period \\( 180^\\circ \\), so add \\( 180^\\circ \\) to find the next solution.',
                    workingLatex: '71.6^\\circ + 180^\\circ = 251.6^\\circ',
                    explanation: 'Tan is also positive in the third quadrant.'
                }
            ],
            finalAnswer: ' x = 71.6^\\circ  and  x = 251.6^\\circ '
        }
    },
    {
        id: 't4-004',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 04',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin x = -0.5 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'negative value', 'sin', 'exact answers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the reference angle: \\( \\sin^{-1}(0.5) = 30^\\circ \\).',
                    workingLatex: '\\text{Reference angle} = 30^\\circ',
                    explanation: '\\( \\sin 30^\\circ = 0.5 \\), so we use \\( 30^\\circ \\) as the reference angle.'
                },
                {
                    stepNumber: 2,
                    description: 'Since \\( \\sin x \\) is negative, solutions lie in the 3rd and 4th quadrants.',
                    workingLatex: 'x = 180^\\circ + 30^\\circ = 210^\\circ \\quad \\text{and} \\quad x = 360^\\circ - 30^\\circ = 330^\\circ',
                    explanation: 'Sine is negative in the 3rd (\\( 180^\\circ + \\theta \\)) and 4th (\\( 360^\\circ - \\theta \\)) quadrants.'
                }
            ],
            finalAnswer: ' x = 210^\\circ  and  x = 330^\\circ '
        }
    },
    {
        id: 't4-005',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 05',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\cos x = -\\dfrac{\\sqrt{3}}{2} \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'negative cos', 'exact values', 'surd'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise the reference angle: \\( \\cos 30^\\circ = \\frac{\\sqrt{3}}{2} \\).',
                    workingLatex: '\\text{Reference angle} = 30^\\circ',
                    explanation: 'This is an exact value from the standard triangles.'
                },
                {
                    stepNumber: 2,
                    description: 'Cosine is negative in the 2nd and 3rd quadrants.',
                    workingLatex: 'x = 180^\\circ - 30^\\circ = 150^\\circ \\quad \\text{and} \\quad x = 180^\\circ + 30^\\circ = 210^\\circ',
                    explanation: 'In the 2nd quadrant: \\( 180^\\circ - \\theta \\). In the 3rd quadrant: \\( 180^\\circ + \\theta \\).'
                }
            ],
            finalAnswer: ' x = 150^\\circ  and  x = 210^\\circ '
        }
    },
    {
        id: 't4-006',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 06',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\tan x = -1 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'negative tan', 'exact values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the reference angle: \\( \\tan^{-1}(1) = 45^\\circ \\).',
                    workingLatex: '\\text{Reference angle} = 45^\\circ',
                    explanation: '\\( \\tan 45^\\circ = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Tan is negative in the 2nd and 4th quadrants.',
                    workingLatex: 'x = 180^\\circ - 45^\\circ = 135^\\circ \\quad \\text{and} \\quad x = 360^\\circ - 45^\\circ = 315^\\circ',
                    explanation: 'These are the two quadrants where sin and cos have opposite signs, making tan negative.'
                }
            ],
            finalAnswer: ' x = 135^\\circ  and  x = 315^\\circ '
        }
    },
    // ── TYPE B: CAST diagram – 0° to 360° ───────────────────────────────────
    {
        id: 't4-007',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 07',
        difficulty: 'Foundation',
        questionText: 'Use a CAST diagram to find all solutions to \\( \\cos x = 0.72 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'CAST diagram', 'cos', 'positive'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the reference angle.',
                    workingLatex: '\\cos^{-1}(0.72) = 43.9^\\circ \\text{ (1 d.p.)}',
                    explanation: 'This is the acute angle in the CAST diagram.'
                },
                {
                    stepNumber: 2,
                    description: 'Cosine is positive in the 1st and 4th quadrants (A and C regions).',
                    workingLatex: 'x = 43.9^\\circ \\quad \\text{and} \\quad x = 360^\\circ - 43.9^\\circ = 316.1^\\circ',
                    explanation: 'Place \\( 43.9^\\circ \\) from the horizontal in each of the C and A quadrants.'
                }
            ],
            finalAnswer: ' x = 43.9^\\circ  and  x = 316.1^\\circ '
        }
    },
    {
        id: 't4-008',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 08',
        difficulty: 'Foundation',
        questionText: 'Use a CAST diagram to find all solutions to \\( \\sin x = -0.35 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'CAST diagram', 'sin', 'negative'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Ignore the negative sign and find the reference angle.',
                    workingLatex: '\\sin^{-1}(0.35) = 20.5^\\circ \\text{ (1 d.p.)}',
                    explanation: 'We use \\( 20.5^\\circ \\) as the reference angle in the CAST diagram.'
                },
                {
                    stepNumber: 2,
                    description: 'Sine is negative in the 3rd and 4th quadrants (T and C regions).',
                    workingLatex: 'x = 180^\\circ + 20.5^\\circ = 200.5^\\circ \\quad \\text{and} \\quad x = 360^\\circ - 20.5^\\circ = 339.5^\\circ',
                    explanation: 'Measure the reference angle from the horizontal in the 3rd and 4th quadrants.'
                }
            ],
            finalAnswer: ' x = 200.5^\\circ  and  x = 339.5^\\circ '
        }
    },
    {
        id: 't4-009',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 09',
        difficulty: 'Foundation',
        questionText: 'Use a CAST diagram to find all solutions to \\( \\tan x = -4.2 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'CAST diagram', 'tan', 'negative'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Ignore the sign and find the reference angle.',
                    workingLatex: '\\tan^{-1}(4.2) = 76.6^\\circ \\text{ (1 d.p.)}',
                    explanation: 'Place \\( 76.6^\\circ \\) in the CAST diagram.'
                },
                {
                    stepNumber: 2,
                    description: 'Tan is negative in the 2nd and 4th quadrants (S and C regions).',
                    workingLatex: 'x = 180^\\circ - 76.6^\\circ = 103.4^\\circ \\quad \\text{and} \\quad x = 360^\\circ - 76.6^\\circ = 283.4^\\circ',
                    explanation: 'Measure \\( 76.6^\\circ \\) from the horizontal in the S and C quadrants.'
                }
            ],
            finalAnswer: ' x = 103.4^\\circ  and  x = 283.4^\\circ '
        }
    },
    {
        id: 't4-010',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 10',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 3\\sin x - 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'rearrange first', 'sin', 'CAST diagram'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange to isolate \\( \\sin x \\).',
                    workingLatex: '\\sin x = \\frac{1}{3} = 0.333\\ldots',
                    explanation: 'Add 1 to both sides then divide by 3.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the reference angle.',
                    workingLatex: '\\sin^{-1}\\!\\left(\\frac{1}{3}\\right) = 19.5^\\circ \\text{ (1 d.p.)}',
                    explanation: 'First solution in the first quadrant.'
                },
                {
                    stepNumber: 3,
                    description: 'Sine is positive in the 1st and 2nd quadrants.',
                    workingLatex: 'x = 19.5^\\circ \\quad \\text{and} \\quad x = 180^\\circ - 19.5^\\circ = 160.5^\\circ',
                    explanation: 'Use the CAST diagram: second solution from the S quadrant.'
                }
            ],
            finalAnswer: ' x = 19.5^\\circ  and  x = 160.5^\\circ '
        }
    },
    {
        id: 't4-011',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 11',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 5\\cos x + 2 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'rearrange first', 'cos', 'negative', 'CAST diagram'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange.',
                    workingLatex: '\\cos x = -\\frac{2}{5} = -0.4',
                    explanation: 'Subtract 2 and divide by 5.'
                },
                {
                    stepNumber: 2,
                    description: 'Reference angle: \\( \\cos^{-1}(0.4) = 66.4^\\circ \\).',
                    workingLatex: '\\text{Reference angle} = 66.4^\\circ',
                    explanation: 'Use the positive value for the CAST diagram.'
                },
                {
                    stepNumber: 3,
                    description: 'Cosine is negative in the 2nd and 3rd quadrants.',
                    workingLatex: 'x = 180^\\circ - 66.4^\\circ = 113.6^\\circ \\quad \\text{and} \\quad x = 180^\\circ + 66.4^\\circ = 246.4^\\circ',
                    explanation: 'S and T quadrants give negative cosine.'
                }
            ],
            finalAnswer: ' x = 113.6^\\circ  and  x = 246.4^\\circ '
        }
    },
    // ── TYPE C: Extended intervals using graph / CAST ────────────────────────
    {
        id: 't4-012',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 12',
        difficulty: 'Foundation',
        questionText: 'Find all solutions to \\( \\sin x = 0.55 \\) for \\( 0^\\circ \\leq x \\leq 720^\\circ \\). Give your answers to 1 decimal place.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'extended interval', 'sin', '720 degrees'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the reference angle.',
                    workingLatex: '\\sin^{-1}(0.55) = 33.4^\\circ \\text{ (1 d.p.)}',
                    explanation: 'First solution in \\( [0^\\circ, 360^\\circ] \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Second solution in \\( [0^\\circ, 360^\\circ] \\) (sine positive in 2nd quadrant).',
                    workingLatex: '180^\\circ - 33.4^\\circ = 146.6^\\circ',
                    explanation: 'Two solutions in the first period.'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( 360^\\circ \\) to each to find solutions in the second period.',
                    workingLatex: '33.4^\\circ + 360^\\circ = 393.4^\\circ \\quad \\text{and} \\quad 146.6^\\circ + 360^\\circ = 506.6^\\circ',
                    explanation: 'The sine graph repeats every \\( 360^\\circ \\).'
                }
            ],
            finalAnswer: ' x = 33.4^\\circ,\\ 146.6^\\circ,\\ 393.4^\\circ,\\ 506.6^\\circ '
        }
    },
    {
        id: 't4-013',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 13',
        difficulty: 'Foundation',
        questionText: 'Find all solutions to \\( \\tan x = 5.1 \\) for \\( 0^\\circ \\leq x \\leq 720^\\circ \\). Give your answers to 1 decimal place.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'extended interval', 'tan', '720 degrees'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the first solution.',
                    workingLatex: '\\tan^{-1}(5.1) = 78.9^\\circ \\text{ (1 d.p.)}',
                    explanation: 'First solution in \\( (0^\\circ, 90^\\circ) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Add \\( 180^\\circ \\) repeatedly (period of tan is \\( 180^\\circ \\)).',
                    workingLatex: '78.9^\\circ + 180^\\circ = 258.9^\\circ; \\quad 258.9^\\circ + 180^\\circ = 438.9^\\circ; \\quad 438.9^\\circ + 180^\\circ = 618.9^\\circ',
                    explanation: 'Four solutions in \\( [0^\\circ, 720^\\circ] \\).'
                }
            ],
            finalAnswer: ' x = 78.9^\\circ,\\ 258.9^\\circ,\\ 438.9^\\circ,\\ 618.9^\\circ '
        }
    },
    {
        id: 't4-014',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 14',
        difficulty: 'Foundation',
        questionText: 'Find all solutions to \\( \\cos x = -0.6 \\) for \\( -180^\\circ \\leq x \\leq 180^\\circ \\). Give your answers to 1 decimal place.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'negative interval', 'cos', 'negative value'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Reference angle: \\( \\cos^{-1}(0.6) = 53.1^\\circ \\).',
                    workingLatex: '\\text{Reference angle} = 53.1^\\circ',
                    explanation: 'Cosine is negative in 2nd and 3rd quadrants.'
                },
                {
                    stepNumber: 2,
                    description: 'Solutions in \\( [0^\\circ, 360^\\circ] \\): \\( 180^\\circ - 53.1^\\circ \\) and \\( 180^\\circ + 53.1^\\circ \\).',
                    workingLatex: 'x = 126.9^\\circ \\quad \\text{and} \\quad x = 233.1^\\circ',
                    explanation: 'Two solutions in the standard interval.'
                },
                {
                    stepNumber: 3,
                    description: 'Check which are in \\( [-180^\\circ, 180^\\circ] \\). \\( 126.9^\\circ \\) is in range. \\( 233.1^\\circ \\) is not, so subtract \\( 360^\\circ \\): \\( 233.1^\\circ - 360^\\circ = -126.9^\\circ \\).',
                    workingLatex: 'x = -126.9^\\circ \\quad \\text{and} \\quad x = 126.9^\\circ',
                    explanation: 'Using the even symmetry of cosine: \\( \\cos(-x) = \\cos x \\).'
                }
            ],
            finalAnswer: ' x = -126.9^\\circ  and  x = 126.9^\\circ '
        }
    },
    {
        id: 't4-015',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 15',
        difficulty: 'Foundation',
        questionText: 'Find all solutions to \\( \\sin x = 0.91 \\) for \\( -360^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 3 significant figures.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'negative interval', 'sin', '3 sig fig'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the reference angle.',
                    workingLatex: '\\sin^{-1}(0.91) = 65.5^\\circ \\text{ (3 s.f.)}',
                    explanation: 'First positive solution.'
                },
                {
                    stepNumber: 2,
                    description: 'Second solution in \\( [0^\\circ, 360^\\circ] \\).',
                    workingLatex: '180^\\circ - 65.5^\\circ = 114.5^\\circ',
                    explanation: 'Sine is positive in the 1st and 2nd quadrants.'
                },
                {
                    stepNumber: 3,
                    description: 'For the negative half \\( [-360^\\circ, 0^\\circ] \\), subtract \\( 360^\\circ \\).',
                    workingLatex: '65.5^\\circ - 360^\\circ = -294^\\circ \\quad \\text{and} \\quad 114.5^\\circ - 360^\\circ = -245^\\circ',
                    explanation: 'Using periodicity: subtracting \\( 360^\\circ \\) gives the equivalent solutions in the negative range.'
                }
            ],
            finalAnswer: ' x = -294^\\circ,\\ -245^\\circ,\\ 65.5^\\circ,\\ 115^\\circ  (3 s.f.)'
        }
    },
    // ── TYPE D: Equations of the form sin(kx) = n ───────────────────────────
    {
        id: 't4-016',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 16',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin 2x = 0.5 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'sin kx', 'change interval', 'exact values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply the interval by 2: look for solutions with \\( 0^\\circ \\leq 2x \\leq 720^\\circ \\).',
                    workingLatex: '0^\\circ \\leq 2x \\leq 720^\\circ',
                    explanation: 'We solve for \\( 2x \\) first, then divide.'
                },
                {
                    stepNumber: 2,
                    description: 'Find values of \\( 2x \\) where \\( \\sin(2x) = 0.5 \\). Reference angle: \\( \\sin^{-1}(0.5) = 30^\\circ \\).',
                    workingLatex: '2x = 30^\\circ,\\ 150^\\circ \\quad \\text{(in 0° to 360°)}',
                    explanation: 'Sine is positive in 1st and 2nd quadrants.'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( 360^\\circ \\) to find solutions in \\( (360^\\circ, 720^\\circ] \\).',
                    workingLatex: '2x = 390^\\circ,\\ 510^\\circ',
                    explanation: 'Two more solutions in the second cycle.'
                },
                {
                    stepNumber: 4,
                    description: 'Divide all solutions by 2.',
                    workingLatex: 'x = 15^\\circ,\\ 75^\\circ,\\ 195^\\circ,\\ 255^\\circ',
                    explanation: 'Divide each value of \\( 2x \\) by 2.'
                }
            ],
            finalAnswer: ' x = 15^\\circ,\\ 75^\\circ,\\ 195^\\circ,\\ 255^\\circ '
        }
    },
    {
        id: 't4-017',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 17',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\cos 3x = -0.5 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'cos kx', 'change interval', 'negative', 'exact values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Change the interval: \\( 0^\\circ \\leq 3x \\leq 1080^\\circ \\).',
                    workingLatex: '0^\\circ \\leq 3x \\leq 1080^\\circ',
                    explanation: 'Multiply the original interval by 3.'
                },
                {
                    stepNumber: 2,
                    description: 'Reference angle: \\( \\cos^{-1}(0.5) = 60^\\circ \\). Cosine is negative in 2nd and 3rd quadrants.',
                    workingLatex: '3x = 120^\\circ,\\ 240^\\circ \\quad \\text{(first cycle)}',
                    explanation: '\\( 180^\\circ - 60^\\circ = 120^\\circ \\) and \\( 180^\\circ + 60^\\circ = 240^\\circ \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( 360^\\circ \\) for subsequent cycles (up to \\( 1080^\\circ \\)).',
                    workingLatex: '3x = 480^\\circ,\\ 600^\\circ,\\ 840^\\circ,\\ 960^\\circ',
                    explanation: 'Two solutions per cycle, three cycles in total.'
                },
                {
                    stepNumber: 4,
                    description: 'Divide all by 3.',
                    workingLatex: 'x = 40^\\circ,\\ 80^\\circ,\\ 160^\\circ,\\ 200^\\circ,\\ 280^\\circ,\\ 320^\\circ',
                    explanation: 'Six solutions in the original interval.'
                }
            ],
            finalAnswer: ' x = 40^\\circ,\\ 80^\\circ,\\ 160^\\circ,\\ 200^\\circ,\\ 280^\\circ,\\ 320^\\circ '
        }
    },
    {
        id: 't4-018',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 18',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\tan 2x = 1 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'tan kx', 'change interval', 'exact values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'New interval: \\( 0^\\circ \\leq 2x \\leq 720^\\circ \\).',
                    workingLatex: '0^\\circ \\leq 2x \\leq 720^\\circ',
                    explanation: 'Multiply by 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Reference angle: \\( \\tan^{-1}(1) = 45^\\circ \\). Tan is positive in 1st and 3rd quadrants.',
                    workingLatex: '2x = 45^\\circ,\\ 225^\\circ \\quad \\text{(first period)}',
                    explanation: 'Two solutions in the first \\( 180^\\circ \\) period of tan.'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( 180^\\circ \\) (period of tan) to get solutions in subsequent periods.',
                    workingLatex: '2x = 405^\\circ,\\ 585^\\circ',
                    explanation: 'Two more solutions.'
                },
                {
                    stepNumber: 4,
                    description: 'Divide by 2.',
                    workingLatex: 'x = 22.5^\\circ,\\ 112.5^\\circ,\\ 202.5^\\circ,\\ 292.5^\\circ',
                    explanation: 'Four solutions in the original interval.'
                }
            ],
            finalAnswer: ' x = 22.5^\\circ,\\ 112.5^\\circ,\\ 202.5^\\circ,\\ 292.5^\\circ '
        }
    },
    {
        id: 't4-019',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 19',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\cos 2x = 0.8 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'cos kx', 'change interval', '1 dp'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'New interval for \\( 2x \\): \\( 0^\\circ \\leq 2x \\leq 720^\\circ \\).',
                    workingLatex: '0^\\circ \\leq 2x \\leq 720^\\circ',
                    explanation: 'Multiply the interval limits by 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Find values of \\( 2x \\). Reference angle: \\( \\cos^{-1}(0.8) = 36.9^\\circ \\).',
                    workingLatex: '2x = 36.9^\\circ,\\ 323.1^\\circ \\quad \\text{(first period)}',
                    explanation: 'Cosine positive in 1st and 4th quadrants.'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( 360^\\circ \\) for second period.',
                    workingLatex: '2x = 396.9^\\circ,\\ 683.1^\\circ',
                    explanation: 'Two further solutions within \\( [0^\\circ, 720^\\circ] \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Divide by 2.',
                    workingLatex: 'x = 18.4^\\circ,\\ 161.6^\\circ,\\ 198.4^\\circ,\\ 341.6^\\circ',
                    explanation: 'All four solutions to 1 d.p.'
                }
            ],
            finalAnswer: ' x = 18.4^\\circ,\\ 161.6^\\circ,\\ 198.4^\\circ,\\ 341.6^\\circ '
        }
    },
    {
        id: 't4-020',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 20',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin\\!\\left(\\dfrac{x}{2}\\right) = -\\dfrac{\\sqrt{2}}{2} \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'sin kx', 'fractional coefficient', 'exact values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'New interval: \\( 0^\\circ \\leq \\frac{x}{2} \\leq 180^\\circ \\).',
                    workingLatex: '0^\\circ \\leq \\frac{x}{2} \\leq 180^\\circ',
                    explanation: 'Multiply the interval by \\( \\frac{1}{2} \\) (or equivalently, the coefficient is \\( \\frac{1}{2} \\)).'
                },
                {
                    stepNumber: 2,
                    description: 'Reference angle: \\( \\sin^{-1}\\!\\left(\\frac{\\sqrt{2}}{2}\\right) = 45^\\circ \\). Sine is negative in 3rd and 4th quadrants.',
                    workingLatex: '\\frac{x}{2} = 180^\\circ + 45^\\circ = 225^\\circ \\quad \\text{or} \\quad \\frac{x}{2} = 360^\\circ - 45^\\circ = 315^\\circ',
                    explanation: 'But both \\( 225^\\circ \\) and \\( 315^\\circ \\) exceed the new upper limit of \\( 180^\\circ \\), so there are no solutions in \\( [0^\\circ, 180^\\circ] \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Conclusion: there are no solutions in the given interval since \\( \\sin(\\frac{x}{2}) \\) can only be negative for \\( \\frac{x}{2} \\in (180^\\circ, 360^\\circ) \\), which is outside our reduced interval.',
                    workingLatex: '\\text{No solutions in } 0^\\circ \\leq x \\leq 360^\\circ',
                    explanation: 'This is an important result — always verify solutions lie within the required interval.'
                }
            ],
            finalAnswer: 'No solutions in  0^\\circ \\leq x \\leq 360^\\circ .'
        }
    },
    // ── TYPE E: Equations of the form sin(x + c) = n ────────────────────────
    {
        id: 't4-021',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 21',
        difficulty: 'Foundation',
        questionText: 'Find all solutions to \\( \\cos(x - 40^\\circ) = 0.5 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'cos(x+c)', 'change interval', 'phase shift'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Adjust the interval by subtracting \\( 40^\\circ \\): \\( -40^\\circ \\leq x - 40^\\circ \\leq 320^\\circ \\).',
                    workingLatex: '-40^\\circ \\leq x - 40^\\circ \\leq 320^\\circ',
                    explanation: 'Subtract \\( 40^\\circ \\) from each part of the interval.'
                },
                {
                    stepNumber: 2,
                    description: 'Find values of \\( (x - 40^\\circ) \\) where \\( \\cos = 0.5 \\). Reference angle: \\( \\cos^{-1}(0.5) = 60^\\circ \\).',
                    workingLatex: 'x - 40^\\circ = 60^\\circ \\quad \\text{and} \\quad x - 40^\\circ = -60^\\circ',
                    explanation: 'Cosine is positive in 1st and 4th quadrants. In the adjusted interval, \\( -60^\\circ \\) is also in range.'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( 40^\\circ \\) to each solution.',
                    workingLatex: 'x = 100^\\circ \\quad \\text{and} \\quad x = -20^\\circ',
                    explanation: '\\( -20^\\circ \\) is outside \\( [0^\\circ, 360^\\circ] \\), so check: \\( 360^\\circ - 60^\\circ = 300^\\circ \\Rightarrow x = 340^\\circ \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Also check \\( x - 40^\\circ = 300^\\circ \\) (in the 4th quadrant, positive side).',
                    workingLatex: 'x = 300^\\circ + 40^\\circ = 340^\\circ',
                    explanation: 'This is within \\( [0^\\circ, 360^\\circ] \\).'
                }
            ],
            finalAnswer: ' x = 100^\\circ  and  x = 340^\\circ '
        }
    },
    {
        id: 't4-022',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 22',
        difficulty: 'Foundation',
        questionText: 'Find all solutions to \\( \\sin(x + 50^\\circ) = 0.7 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'sin(x+c)', 'phase shift', 'CAST'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Adjust interval: \\( 50^\\circ \\leq x + 50^\\circ \\leq 410^\\circ \\).',
                    workingLatex: '50^\\circ \\leq x + 50^\\circ \\leq 410^\\circ',
                    explanation: 'Add \\( 50^\\circ \\) to each part.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the reference angle: \\( \\sin^{-1}(0.7) = 44.4^\\circ \\) (1 d.p.).',
                    workingLatex: 'x + 50^\\circ = 44.4^\\circ \\text{ (not in range)} \\quad \\text{and} \\quad x + 50^\\circ = 180^\\circ - 44.4^\\circ = 135.6^\\circ',
                    explanation: '\\( 44.4^\\circ \\) is below the lower bound of \\( 50^\\circ \\). The 2nd quadrant solution \\( 135.6^\\circ \\) is in range.'
                },
                {
                    stepNumber: 3,
                    description: 'Look for more solutions: \\( 44.4^\\circ + 360^\\circ = 404.4^\\circ \\) is in range.',
                    workingLatex: 'x + 50^\\circ = 404.4^\\circ',
                    explanation: 'Adding \\( 360^\\circ \\) brings the first solution into the adjusted interval.'
                },
                {
                    stepNumber: 4,
                    description: 'Subtract \\( 50^\\circ \\) from each solution.',
                    workingLatex: 'x = 135.6^\\circ - 50^\\circ = 85.6^\\circ \\quad \\text{and} \\quad x = 404.4^\\circ - 50^\\circ = 354.4^\\circ',
                    explanation: 'Two solutions in \\( [0^\\circ, 360^\\circ] \\).'
                }
            ],
            finalAnswer: ' x = 85.6^\\circ  and  x = 354.4^\\circ '
        }
    },
    {
        id: 't4-023',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 23',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\tan(x + 60^\\circ) = -1 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'tan(x+c)', 'phase shift', 'exact values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Adjust interval: \\( 60^\\circ \\leq x + 60^\\circ \\leq 420^\\circ \\).',
                    workingLatex: '60^\\circ \\leq x + 60^\\circ \\leq 420^\\circ',
                    explanation: 'Add \\( 60^\\circ \\) throughout.'
                },
                {
                    stepNumber: 2,
                    description: 'Reference angle: \\( \\tan^{-1}(1) = 45^\\circ \\). Tan is negative in 2nd and 4th quadrants.',
                    workingLatex: 'x + 60^\\circ = 135^\\circ,\\ 315^\\circ,\\ 495^\\circ',
                    explanation: '\\( 135^\\circ \\) and \\( 315^\\circ \\) are in \\( [0^\\circ, 360^\\circ] \\); add \\( 180^\\circ \\): \\( 315 + 180 = 495^\\circ \\leq 420^\\circ \\)? No — check: \\( 495^\\circ > 420^\\circ \\), so only \\( 135^\\circ \\) and \\( 315^\\circ \\) are valid.'
                },
                {
                    stepNumber: 3,
                    description: 'Subtract \\( 60^\\circ \\) from valid solutions.',
                    workingLatex: 'x = 135^\\circ - 60^\\circ = 75^\\circ \\quad \\text{and} \\quad x = 315^\\circ - 60^\\circ = 255^\\circ',
                    explanation: 'Both are in \\( [0^\\circ, 360^\\circ] \\).'
                }
            ],
            finalAnswer: ' x = 75^\\circ  and  x = 255^\\circ '
        }
    },
    {
        id: 't4-024',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 24',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin(x - 30^\\circ) = -\\dfrac{1}{2} \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'sin(x-c)', 'phase shift', 'exact values', 'negative'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Adjust the interval: \\( -30^\\circ \\leq x - 30^\\circ \\leq 330^\\circ \\).',
                    workingLatex: '-30^\\circ \\leq x - 30^\\circ \\leq 330^\\circ',
                    explanation: 'Subtract \\( 30^\\circ \\) from each bound.'
                },
                {
                    stepNumber: 2,
                    description: 'Reference angle: \\( \\sin^{-1}(0.5) = 30^\\circ \\). Sine is negative in 3rd and 4th quadrants.',
                    workingLatex: 'x - 30^\\circ = 180^\\circ + 30^\\circ = 210^\\circ \\quad \\text{and} \\quad x - 30^\\circ = 360^\\circ - 30^\\circ = 330^\\circ',
                    explanation: 'Both \\( 210^\\circ \\) and \\( 330^\\circ \\) are within the adjusted interval \\( [-30^\\circ, 330^\\circ] \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Also check \\( x - 30^\\circ = -30^\\circ \\) (4th quadrant solution at \\( 360^\\circ - 30^\\circ \\) shifted by \\( -360^\\circ \\)): \\( -30^\\circ \\) — check \\( \\sin(-30^\\circ) = -0.5 \\). Yes, valid.',
                    workingLatex: 'x - 30^\\circ = -30^\\circ \\Rightarrow x = 0^\\circ',
                    explanation: 'Check: \\( \\sin(0^\\circ - 30^\\circ) = \\sin(-30^\\circ) = -0.5 \\). \\checkmark But \\( x=0^\\circ \\) is a boundary point — include it.'
                },
                {
                    stepNumber: 4,
                    description: 'Add \\( 30^\\circ \\) to solutions.',
                    workingLatex: 'x = 240^\\circ \\quad \\text{and} \\quad x = 360^\\circ',
                    explanation: '\\( 330^\\circ + 30^\\circ = 360^\\circ \\) is the upper boundary; include it. \\( x = 0^\\circ \\) is already found. Primary solutions: \\( x = 240^\\circ \\) and \\( x = 360^\\circ \\).'
                }
            ],
            finalAnswer: ' x = 240^\\circ  and  x = 360^\\circ '
        }
    },
    // ── TYPE F: Using trig identities to solve equations ────────────────────
    {
        id: 't4-025',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 25',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\sin^2 x - \\sin x - 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'quadratic in sin', 'factorise', 'identities'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise this as a quadratic in \\( \\sin x \\). Let \\( s = \\sin x \\).',
                    workingLatex: '2s^2 - s - 1 = 0',
                    explanation: 'The substitution makes the factorisation clearer.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise.',
                    workingLatex: '(2s + 1)(s - 1) = 0',
                    explanation: 'Check: \\( 2s^2 - 2s + s - 1 = 2s^2 - s - 1 \\). \\checkmark'
                },
                {
                    stepNumber: 3,
                    description: 'Solve each factor.',
                    workingLatex: '\\sin x = -\\frac{1}{2} \\quad \\text{or} \\quad \\sin x = 1',
                    explanation: '\\( 2s + 1 = 0 \\Rightarrow s = -\\frac{1}{2} \\); \\( s - 1 = 0 \\Rightarrow s = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( \\sin x = 1 \\): \\( x = 90^\\circ \\).',
                    workingLatex: 'x = 90^\\circ',
                    explanation: 'Only one solution in \\( [0^\\circ, 360^\\circ] \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve \\( \\sin x = -\\frac{1}{2} \\): solutions in 3rd and 4th quadrants.',
                    workingLatex: 'x = 180^\\circ + 30^\\circ = 210^\\circ \\quad \\text{and} \\quad x = 360^\\circ - 30^\\circ = 330^\\circ',
                    explanation: 'Reference angle is \\( 30^\\circ \\) since \\( \\sin 30^\\circ = \\frac{1}{2} \\).'
                }
            ],
            finalAnswer: ' x = 90^\\circ,\\ 210^\\circ,\\ 330^\\circ '
        }
    },
    {
        id: 't4-026',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 26',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\cos^2 x + \\cos x - 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'quadratic in cos', 'factorise'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( c = \\cos x \\) and factorise \\( 2c^2 + c - 1 \\).',
                    workingLatex: '(2c - 1)(c + 1) = 0',
                    explanation: 'Check: \\( 2c^2 + 2c - c - 1 = 2c^2 + c - 1 \\). \\checkmark'
                },
                {
                    stepNumber: 2,
                    description: 'Solve each factor.',
                    workingLatex: '\\cos x = \\frac{1}{2} \\quad \\text{or} \\quad \\cos x = -1',
                    explanation: '\\( 2c - 1 = 0 \\Rightarrow c = \\frac{1}{2} \\); \\( c + 1 = 0 \\Rightarrow c = -1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve \\( \\cos x = \\frac{1}{2} \\).',
                    workingLatex: 'x = 60^\\circ \\quad \\text{and} \\quad x = 300^\\circ',
                    explanation: 'Cosine is positive in 1st and 4th quadrants.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( \\cos x = -1 \\).',
                    workingLatex: 'x = 180^\\circ',
                    explanation: 'The only value in \\( [0^\\circ, 360^\\circ] \\) where \\( \\cos x = -1 \\).'
                }
            ],
            finalAnswer: ' x = 60^\\circ,\\ 180^\\circ,\\ 300^\\circ '
        }
    },
    {
        id: 't4-027',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 27',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 3\\tan^2 x - \\tan x - 2 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 decimal place where not exact.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'quadratic in tan', 'factorise'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( t = \\tan x \\) and factorise \\( 3t^2 - t - 2 \\).',
                    workingLatex: '(3t + 2)(t - 1) = 0',
                    explanation: 'Check: \\( 3t^2 - 3t + 2t - 2 = 3t^2 - t - 2 \\). \\checkmark'
                },
                {
                    stepNumber: 2,
                    description: 'Solve each factor.',
                    workingLatex: '\\tan x = -\\frac{2}{3} \\quad \\text{or} \\quad \\tan x = 1',
                    explanation: '\\( 3t + 2 = 0 \\Rightarrow t = -\\frac{2}{3} \\); \\( t - 1 = 0 \\Rightarrow t = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve \\( \\tan x = 1 \\): exact solutions.',
                    workingLatex: 'x = 45^\\circ \\quad \\text{and} \\quad x = 225^\\circ',
                    explanation: 'Tan positive in 1st and 3rd quadrants.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( \\tan x = -\\frac{2}{3} \\): reference angle \\( \\tan^{-1}\\!(\\frac{2}{3}) = 33.7^\\circ \\).',
                    workingLatex: 'x = 180^\\circ - 33.7^\\circ = 146.3^\\circ \\quad \\text{and} \\quad x = 360^\\circ - 33.7^\\circ = 326.3^\\circ',
                    explanation: 'Tan negative in 2nd and 4th quadrants.'
                }
            ],
            finalAnswer: ' x = 45^\\circ,\\ 146.3^\\circ,\\ 225^\\circ,\\ 326.3^\\circ '
        }
    },
    {
        id: 't4-028',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 28',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 4\\sin x = 3\\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give your answers to 1 decimal place.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'divide by cos', 'convert to tan', 'mixed trig'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide both sides by \\( \\cos x \\) to get an equation in \\( \\tan x \\).',
                    workingLatex: '\\frac{4\\sin x}{\\cos x} = 3 \\Rightarrow 4\\tan x = 3',
                    explanation: 'This is valid provided \\( \\cos x \\neq 0 \\). We can check \\( \\cos x = 0 \\) separately — it gives \\( 0 = \\pm 3 \\), which is impossible, so no solutions are lost.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( \\tan x = \\frac{3}{4} = 0.75 \\).',
                    workingLatex: '\\tan^{-1}(0.75) = 36.9^\\circ',
                    explanation: 'Reference angle.'
                },
                {
                    stepNumber: 3,
                    description: 'Tan is positive in 1st and 3rd quadrants.',
                    workingLatex: 'x = 36.9^\\circ \\quad \\text{and} \\quad x = 36.9^\\circ + 180^\\circ = 216.9^\\circ',
                    explanation: 'Both solutions in \\( [0^\\circ, 360^\\circ] \\).'
                }
            ],
            finalAnswer: ' x = 36.9^\\circ  and  x = 216.9^\\circ '
        }
    },
    {
        id: 't4-029',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 29',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin^2 x = \\cos^2 x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'identities', 'quadratic', 'exact values'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange: \\( \\sin^2 x - \\cos^2 x = 0 \\).',
                    workingLatex: '(\\sin x - \\cos x)(\\sin x + \\cos x) = 0',
                    explanation: 'Difference of two squares factorisation.'
                },
                {
                    stepNumber: 2,
                    description: 'Case 1: \\( \\sin x = \\cos x \\Rightarrow \\tan x = 1 \\).',
                    workingLatex: 'x = 45^\\circ \\quad \\text{and} \\quad x = 225^\\circ',
                    explanation: 'Tan is positive in 1st and 3rd quadrants.'
                },
                {
                    stepNumber: 3,
                    description: 'Case 2: \\( \\sin x = -\\cos x \\Rightarrow \\tan x = -1 \\).',
                    workingLatex: 'x = 135^\\circ \\quad \\text{and} \\quad x = 315^\\circ',
                    explanation: 'Tan is negative in 2nd and 4th quadrants.'
                }
            ],
            finalAnswer: ' x = 45^\\circ,\\ 135^\\circ,\\ 225^\\circ,\\ 315^\\circ '
        }
    },
    {
        id: 't4-030',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 30',
        difficulty: 'Foundation',
        questionText: 'Show that \\( 2\\sin^2 x + 3\\cos x - 3 = 0 \\) can be written as \\( 2\\cos^2 x - 3\\cos x + 1 = 0 \\), and hence solve it for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'Pythagorean identity', 'quadratic in cos', 'show and solve'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\sin^2 x \\) with \\( 1 - \\cos^2 x \\).',
                    workingLatex: '2(1 - \\cos^2 x) + 3\\cos x - 3 = 0',
                    explanation: 'Using the Pythagorean identity.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and simplify.',
                    workingLatex: '2 - 2\\cos^2 x + 3\\cos x - 3 = 0 \\Rightarrow -2\\cos^2 x + 3\\cos x - 1 = 0',
                    explanation: 'Collect constants.'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply through by \\( -1 \\).',
                    workingLatex: '2\\cos^2 x - 3\\cos x + 1 = 0',
                    explanation: 'This matches the required form.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise.',
                    workingLatex: '(2\\cos x - 1)(\\cos x - 1) = 0',
                    explanation: 'Check: \\( 2c^2 - 2c - c + 1 = 2c^2 - 3c + 1 \\). \\checkmark'
                },
                {
                    stepNumber: 5,
                    description: 'Solve each factor.',
                    workingLatex: '\\cos x = \\frac{1}{2} \\Rightarrow x = 60^\\circ, 300^\\circ \\quad \\text{and} \\quad \\cos x = 1 \\Rightarrow x = 0^\\circ, 360^\\circ',
                    explanation: 'All solutions in \\( [0^\\circ, 360^\\circ] \\).'
                }
            ],
            finalAnswer: ' x = 0^\\circ,\\ 60^\\circ,\\ 300^\\circ,\\ 360^\\circ '
        }
    },
    // ── TYPE G: Mixed and multi-part exam-style ──────────────────────────────
    {
        id: 't4-031',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 31',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 5\\sin x\\tan x - 3\\tan x = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give any non-exact answers to 1 decimal place.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'factorise', 'tan x', 'common factor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factor out \\( \\tan x \\) — do NOT divide by it (would lose solutions).',
                    workingLatex: '\\tan x(5\\sin x - 3) = 0',
                    explanation: '\\( \\tan x \\) is a common factor.'
                },
                {
                    stepNumber: 2,
                    description: 'Case 1: \\( \\tan x = 0 \\).',
                    workingLatex: 'x = 0^\\circ,\\ 180^\\circ,\\ 360^\\circ',
                    explanation: 'Tan is zero at multiples of \\( 180^\\circ \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Case 2: \\( 5\\sin x - 3 = 0 \\Rightarrow \\sin x = \\frac{3}{5} = 0.6 \\).',
                    workingLatex: 'x = \\sin^{-1}(0.6) = 36.9^\\circ',
                    explanation: 'Reference angle.'
                },
                {
                    stepNumber: 4,
                    description: 'Sine positive in 1st and 2nd quadrants.',
                    workingLatex: 'x = 36.9^\\circ \\quad \\text{and} \\quad x = 180^\\circ - 36.9^\\circ = 143.1^\\circ',
                    explanation: 'Two more solutions.'
                }
            ],
            finalAnswer: ' x = 0^\\circ,\\ 36.9^\\circ,\\ 143.1^\\circ,\\ 180^\\circ,\\ 360^\\circ '
        }
    },
    {
        id: 't4-032',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 32',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin 2x = \\cos 30^\\circ \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give exact answers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'sin kx', 'exact value right-hand side'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Evaluate the right-hand side.',
                    workingLatex: '\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}',
                    explanation: 'Standard exact value.'
                },
                {
                    stepNumber: 2,
                    description: 'Change the interval: \\( 0^\\circ \\leq 2x \\leq 720^\\circ \\).',
                    workingLatex: '\\sin 2x = \\frac{\\sqrt{3}}{2}',
                    explanation: 'Solve for \\( 2x \\) over the extended interval.'
                },
                {
                    stepNumber: 3,
                    description: 'Reference angle: \\( \\sin^{-1}\\!\\left(\\frac{\\sqrt{3}}{2}\\right) = 60^\\circ \\). Sine positive in 1st and 2nd quadrants.',
                    workingLatex: '2x = 60^\\circ,\\ 120^\\circ,\\ 420^\\circ,\\ 480^\\circ',
                    explanation: 'Two per period, two periods in \\( [0^\\circ, 720^\\circ] \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Divide by 2.',
                    workingLatex: 'x = 30^\\circ,\\ 60^\\circ,\\ 210^\\circ,\\ 240^\\circ',
                    explanation: 'Four exact solutions.'
                }
            ],
            finalAnswer: ' x = 30^\\circ,\\ 60^\\circ,\\ 210^\\circ,\\ 240^\\circ '
        }
    },
    {
        id: 't4-033',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 33',
        difficulty: 'Foundation',
        questionText: '(a) Show that \\( 4\\cos^2 x - \\cos x - 3 = 0 \\) can be written as \\( 4\\sin^2 x + \\cos x - 1 = 0 \\). \n\n \n\n (b) Hence solve \\( 4\\cos^2 x - \\cos x - 3 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'show and solve', 'Pythagorean identity', 'quadratic in cos', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Factorise \\( 4\\cos^2 x - \\cos x - 3 \\).',
                    workingLatex: '(4\\cos x + 3)(\\cos x - 1) = 0',
                    explanation: 'Actually, let us go via identity. Replace \\( \\cos^2 x = 1 - \\sin^2 x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( \\cos^2 x = 1 - \\sin^2 x \\) into the original.',
                    workingLatex: '4(1 - \\sin^2 x) - \\cos x - 3 = 0 \\Rightarrow 4 - 4\\sin^2 x - \\cos x - 3 = 0',
                    explanation: 'Expand and simplify.'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange.',
                    workingLatex: '1 - 4\\sin^2 x - \\cos x = 0 \\Rightarrow 4\\sin^2 x + \\cos x - 1 = 0',
                    explanation: 'Multiply through by \\( -1 \\). Part (a) shown.'
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): Solve the original by factorising \\( 4c^2 - c - 3 \\) where \\( c = \\cos x \\).',
                    workingLatex: '(4c + 3)(c - 1) = 0',
                    explanation: 'Check: \\( 4c^2 - 4c + 3c - 3 = 4c^2 - c - 3 \\). \\checkmark'
                },
                {
                    stepNumber: 5,
                    description: 'Solve each factor.',
                    workingLatex: '\\cos x = -\\frac{3}{4} \\quad \\text{or} \\quad \\cos x = 1',
                    explanation: 'Two cases.'
                },
                {
                    stepNumber: 6,
                    description: 'Solve \\( \\cos x = 1 \\): \\( x = 0^\\circ \\) and \\( x = 360^\\circ \\).',
                    workingLatex: 'x = 0^\\circ,\\ 360^\\circ',
                    explanation: 'The only values in \\( [0^\\circ, 360^\\circ] \\) where cosine equals 1.'
                },
                {
                    stepNumber: 7,
                    description: 'Solve \\( \\cos x = -\\frac{3}{4} \\): reference angle \\( \\cos^{-1}(0.75) = 41.4^\\circ \\) (1 d.p.).',
                    workingLatex: 'x = 180^\\circ - 41.4^\\circ = 138.6^\\circ \\quad \\text{and} \\quad x = 180^\\circ + 41.4^\\circ = 221.4^\\circ',
                    explanation: 'Cosine negative in 2nd and 3rd quadrants.'
                }
            ],
            finalAnswer: ' x = 0^\\circ,\\ 138.6^\\circ,\\ 221.4^\\circ,\\ 360^\\circ '
        }
    },
    {
        id: 't4-034',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 34',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 6\\cos^2 x + \\cos x\\tan x = 5 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give any non-exact answers to 1 decimal place.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'tan identity', 'quadratic in sin', 'identities', 'multi-step'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replace \\( \\tan x \\) with \\( \\frac{\\sin x}{\\cos x} \\).',
                    workingLatex: '6\\cos^2 x + \\cos x \\cdot \\frac{\\sin x}{\\cos x} = 5',
                    explanation: 'Substituting the definition of tan.'
                },
                {
                    stepNumber: 2,
                    description: 'Cancel \\( \\cos x \\) in the second term.',
                    workingLatex: '6\\cos^2 x + \\sin x = 5',
                    explanation: '\\( \\cos x \\cdot \\frac{\\sin x}{\\cos x} = \\sin x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Replace \\( \\cos^2 x \\) with \\( 1 - \\sin^2 x \\).',
                    workingLatex: '6(1 - \\sin^2 x) + \\sin x = 5',
                    explanation: 'Pythagorean identity.'
                },
                {
                    stepNumber: 4,
                    description: 'Rearrange to a quadratic in \\( \\sin x \\).',
                    workingLatex: '6 - 6\\sin^2 x + \\sin x - 5 = 0 \\Rightarrow 6\\sin^2 x - \\sin x - 1 = 0',
                    explanation: 'Multiply through by \\( -1 \\) and rearrange.'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise.',
                    workingLatex: '(3\\sin x + 1)(2\\sin x - 1) = 0',
                    explanation: 'Check: \\( 6\\sin^2 x - 3\\sin x + 2\\sin x - 1 = 6\\sin^2 x - \\sin x - 1 \\). \\checkmark'
                },
                {
                    stepNumber: 6,
                    description: 'Solve \\( \\sin x = \\frac{1}{2} \\).',
                    workingLatex: 'x = 30^\\circ \\quad \\text{and} \\quad x = 150^\\circ',
                    explanation: 'Sine positive in 1st and 2nd quadrants; exact values.'
                },
                {
                    stepNumber: 7,
                    description: 'Solve \\( \\sin x = -\\frac{1}{3} \\). Reference angle: \\( \\sin^{-1}(\\frac{1}{3}) = 19.5^\\circ \\) (1 d.p.).',
                    workingLatex: 'x = 180^\\circ + 19.5^\\circ = 199.5^\\circ \\quad \\text{and} \\quad x = 360^\\circ - 19.5^\\circ = 340.5^\\circ',
                    explanation: 'Sine negative in 3rd and 4th quadrants.'
                }
            ],
            finalAnswer: ' x = 30^\\circ,\\ 150^\\circ,\\ 199.5^\\circ,\\ 340.5^\\circ '
        }
    },
    {
        id: 't4-035',
        topicRef: 't4',
        topicTitle: 'Trigonometric Equations 35',
        difficulty: 'Foundation',
        questionText: '(a) Show that \\( 9\\sin^2 2x + 3\\cos 2x = 7 \\) can be written as \\( 9\\cos^2 2x - 3\\cos 2x - 2 = 0 \\). \n\n \n\n (b) Hence solve \\( 9\\sin^2 2x + 3\\cos 2x = 7 \\) for \\( 0^\\circ \\leq x \\leq 180^\\circ \\). Give any non-exact answers to 1 decimal place.',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: ['trig equations', 'show and solve', 'cos 2x', 'quadratic', 'Pythagorean identity', 'multi-part'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Replace \\( \\sin^2 2x \\) with \\( 1 - \\cos^2 2x \\).',
                    workingLatex: '9(1 - \\cos^2 2x) + 3\\cos 2x = 7',
                    explanation: 'Pythagorean identity applied to the argument \\( 2x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and rearrange.',
                    workingLatex: '9 - 9\\cos^2 2x + 3\\cos 2x - 7 = 0 \\Rightarrow 2 - 9\\cos^2 2x + 3\\cos 2x = 0',
                    explanation: 'Collect constants.'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply through by \\( -1 \\).',
                    workingLatex: '9\\cos^2 2x - 3\\cos 2x - 2 = 0',
                    explanation: 'Part (a) shown.'
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): Let \\( u = \\cos 2x \\) and factorise \\( 9u^2 - 3u - 2 \\).',
                    workingLatex: '(3u - 2)(3u + 1) = 0',
                    explanation: 'Check: \\( 9u^2 + 3u - 6u - 2 = 9u^2 - 3u - 2 \\). \\checkmark'
                },
                {
                    stepNumber: 5,
                    description: 'Solve each factor.',
                    workingLatex: '\\cos 2x = \\frac{2}{3} \\quad \\text{or} \\quad \\cos 2x = -\\frac{1}{3}',
                    explanation: 'Two possible values of \\( \\cos 2x \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Change the interval for \\( 2x \\): \\( 0^\\circ \\leq 2x \\leq 360^\\circ \\).',
                    workingLatex: '0^\\circ \\leq 2x \\leq 360^\\circ',
                    explanation: 'Multiply the original interval \\( [0^\\circ, 180^\\circ] \\) by 2.'
                },
                {
                    stepNumber: 7,
                    description: 'Solve \\( \\cos 2x = \\frac{2}{3} \\). Reference angle: \\( \\cos^{-1}(\\frac{2}{3}) = 48.2^\\circ \\) (1 d.p.). Cosine positive in 1st and 4th quadrants.',
                    workingLatex: '2x = 48.2^\\circ \\Rightarrow x = 24.1^\\circ \\quad \\text{and} \\quad 2x = 311.8^\\circ \\Rightarrow x = 155.9^\\circ',
                    explanation: 'Divide by 2 to get \\( x \\).'
                },
                {
                    stepNumber: 8,
                    description: 'Solve \\( \\cos 2x = -\\frac{1}{3} \\). Reference angle: \\( \\cos^{-1}(\\frac{1}{3}) = 70.5^\\circ \\) (1 d.p.). Cosine negative in 2nd and 3rd quadrants.',
                    workingLatex: '2x = 109.5^\\circ \\Rightarrow x = 54.7^\\circ \\quad \\text{and} \\quad 2x = 250.5^\\circ \\Rightarrow x = 125.2^\\circ',
                    explanation: 'Four solutions in total.'
                }
            ],
            finalAnswer: ' x = 24.1^\\circ,\\ 54.7^\\circ,\\ 125.2^\\circ,\\ 155.9^\\circ '
        }
    },

    // ─── Q36–70: Additional Trigonometric Equations ──────────────────────

    {
        id: 't4-036', topicRef: 't4', topicTitle: 'Trigonometric Equations 36', difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin x = 0.6 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Reference angle', workingLatex: 'x = \\sin^{-1}(0.6) = 36.9^\\circ', explanation: '' },
            { stepNumber: 2, description: 'Second solution', workingLatex: 'x = 180 - 36.9 = 143.1^\\circ', explanation: 'Sin positive in Q1 and Q2.' }
        ], finalAnswer: 'x = 36.9, 143.1 degrees' }
    },
    {
        id: 't4-037', topicRef: 't4', topicTitle: 'Trigonometric Equations 37', difficulty: 'Foundation',
        questionText: 'Solve \\( \\cos x = -0.4 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Reference angle', workingLatex: '\\cos^{-1}(0.4) = 66.4^\\circ', explanation: '' },
            { stepNumber: 2, description: 'Cos negative in Q2 and Q3', workingLatex: 'x = 180 - 66.4 = 113.6^\\circ; \\quad x = 180 + 66.4 = 246.4^\\circ', explanation: '' }
        ], finalAnswer: 'x = 113.6, 246.4 degrees' }
    },
    {
        id: 't4-038', topicRef: 't4', topicTitle: 'Trigonometric Equations 38', difficulty: 'Foundation',
        questionText: 'Solve \\( \\tan x = 2.5 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Reference angle', workingLatex: 'x = \\tan^{-1}(2.5) = 68.2^\\circ', explanation: '' },
            { stepNumber: 2, description: 'Add 180 for second solution', workingLatex: 'x = 68.2 + 180 = 248.2^\\circ', explanation: 'Tan repeats every 180.' }
        ], finalAnswer: 'x = 68.2, 248.2 degrees' }
    },
    {
        id: 't4-039', topicRef: 't4', topicTitle: 'Trigonometric Equations 39', difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\sin x + 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: '\\sin x = -\\frac{1}{2}', explanation: '' },
            { stepNumber: 2, description: 'Sin negative in Q3 and Q4', workingLatex: 'x = 210^\\circ, 330^\\circ', explanation: 'Reference angle 30.' }
        ], finalAnswer: 'x = 210, 330 degrees' }
    },
    {
        id: 't4-040', topicRef: 't4', topicTitle: 'Trigonometric Equations 40', difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\cos x - \\sqrt{3} = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: '\\cos x = \\frac{\\sqrt{3}}{2}', explanation: '' },
            { stepNumber: 2, description: 'Solutions', workingLatex: 'x = 30^\\circ, 330^\\circ', explanation: 'Cos positive in Q1 and Q4.' }
        ], finalAnswer: 'x = 30, 330 degrees' }
    },
    {
        id: 't4-041', topicRef: 't4', topicTitle: 'Trigonometric Equations 41', difficulty: 'Foundation',
        questionText: 'Solve \\( \\tan x + 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange and solve', workingLatex: '\\tan x = -1 \\implies x = 135^\\circ, 315^\\circ', explanation: '' }
        ], finalAnswer: 'x = 135, 315 degrees' }
    },
    {
        id: 't4-042', topicRef: 't4', topicTitle: 'Trigonometric Equations 42', difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin 2x = \\frac{1}{2} \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let u = 2x, range 0 to 720', workingLatex: '\\sin u = \\frac{1}{2} \\implies u = 30, 150, 390, 510', explanation: '' },
            { stepNumber: 2, description: 'Divide by 2', workingLatex: 'x = 15^\\circ, 75^\\circ, 195^\\circ, 255^\\circ', explanation: '' }
        ], finalAnswer: 'x = 15, 75, 195, 255 degrees' }
    },
    {
        id: 't4-043', topicRef: 't4', topicTitle: 'Trigonometric Equations 43', difficulty: 'Foundation',
        questionText: 'Solve \\( \\cos 3x = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let u = 3x, range 0 to 1080', workingLatex: '\\cos u = 0 \\implies u = 90, 270, 450, 630, 810, 990', explanation: '' },
            { stepNumber: 2, description: 'Divide by 3', workingLatex: 'x = 30, 90, 150, 210, 270, 330', explanation: '' }
        ], finalAnswer: 'x = 30, 90, 150, 210, 270, 330 degrees' }
    },
    {
        id: 't4-044', topicRef: 't4', topicTitle: 'Trigonometric Equations 44', difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\sin^2 x - \\sin x = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise', workingLatex: '\\sin x(2\\sin x - 1) = 0', explanation: '' },
            { stepNumber: 2, description: 'Solve each factor', workingLatex: '\\sin x = 0: x = 0, 180, 360; \\quad \\sin x = \\frac{1}{2}: x = 30, 150', explanation: '' }
        ], finalAnswer: 'x = 0, 30, 150, 180, 360 degrees' }
    },
    {
        id: 't4-045', topicRef: 't4', topicTitle: 'Trigonometric Equations 45', difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\cos^2 x - \\cos x - 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise', workingLatex: '(2\\cos x + 1)(\\cos x - 1) = 0', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: '\\cos x = -\\frac{1}{2}: x = 120, 240; \\quad \\cos x = 1: x = 0, 360', explanation: '' }
        ], finalAnswer: 'x = 0, 120, 240, 360 degrees' }
    },
    {
        id: 't4-046', topicRef: 't4', topicTitle: 'Trigonometric Equations 46', difficulty: 'Foundation',
        questionText: 'Solve \\( \\tan 2x = \\sqrt{3} \\) for \\( 0^\\circ \\leq x \\leq 180^\\circ \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let u = 2x, range 0 to 360', workingLatex: '\\tan u = \\sqrt{3} \\implies u = 60, 240', explanation: '' },
            { stepNumber: 2, description: 'Divide by 2', workingLatex: 'x = 30^\\circ, 120^\\circ', explanation: '' }
        ], finalAnswer: 'x = 30, 120 degrees' }
    },
    {
        id: 't4-047', topicRef: 't4', topicTitle: 'Trigonometric Equations 47', difficulty: 'Foundation',
        questionText: 'Solve \\( 3\\sin x = 2\\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Divide by cos x', workingLatex: '\\tan x = \\frac{2}{3}', explanation: '' },
            { stepNumber: 2, description: 'Solutions', workingLatex: 'x = 33.7^\\circ, 213.7^\\circ', explanation: '' }
        ], finalAnswer: 'x = 33.7, 213.7 degrees' }
    },
    {
        id: 't4-048', topicRef: 't4', topicTitle: 'Trigonometric Equations 48', difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin x = \\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Divide by cos x', workingLatex: '\\tan x = 1 \\implies x = 45^\\circ, 225^\\circ', explanation: '' }
        ], finalAnswer: 'x = 45, 225 degrees' }
    },
    {
        id: 't4-049', topicRef: 't4', topicTitle: 'Trigonometric Equations 49', difficulty: 'Foundation',
        questionText: 'Solve \\( 4\\sin^2 x = 3 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: '\\sin^2 x = \\frac{3}{4} \\implies \\sin x = \\pm \\frac{\\sqrt{3}}{2}', explanation: '' },
            { stepNumber: 2, description: 'Solutions', workingLatex: 'x = 60, 120, 240, 300', explanation: '' }
        ], finalAnswer: 'x = 60, 120, 240, 300 degrees' }
    },
    {
        id: 't4-050', topicRef: 't4', topicTitle: 'Trigonometric Equations 50', difficulty: 'Foundation',
        questionText: 'Solve \\( 5\\cos^2 x + 2\\cos x - 3 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise', workingLatex: '(5\\cos x - 3)(\\cos x + 1) = 0', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: '\\cos x = \\frac{3}{5} = 0.6: x = 53.1, 306.9; \\quad \\cos x = -1: x = 180', explanation: '' }
        ], finalAnswer: 'x = 53.1, 180, 306.9 degrees' }
    },
    {
        id: 't4-051', topicRef: 't4', topicTitle: 'Trigonometric Equations 51', difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin(x + 30^\\circ) = \\frac{\\sqrt{3}}{2} \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let u = x + 30, range 30 to 390', workingLatex: '\\sin u = \\frac{\\sqrt{3}}{2} \\implies u = 60, 120', explanation: '' },
            { stepNumber: 2, description: 'Subtract 30', workingLatex: 'x = 30^\\circ, 90^\\circ', explanation: 'Both in range.' }
        ], finalAnswer: 'x = 30, 90 degrees' }
    },
    {
        id: 't4-052', topicRef: 't4', topicTitle: 'Trigonometric Equations 52', difficulty: 'Foundation',
        questionText: 'Solve \\( \\cos(x - 45^\\circ) = \\frac{1}{2} \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let u = x - 45, range -45 to 315', workingLatex: '\\cos u = \\frac{1}{2} \\implies u = 60, 300', explanation: '' },
            { stepNumber: 2, description: 'Add 45', workingLatex: 'x = 105^\\circ, 345^\\circ', explanation: '' }
        ], finalAnswer: 'x = 105, 345 degrees' }
    },
    {
        id: 't4-053', topicRef: 't4', topicTitle: 'Trigonometric Equations 53', difficulty: 'Foundation',
        questionText: 'Solve \\( 6\\sin^2 x - \\sin x - 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise', workingLatex: '(3\\sin x + 1)(2\\sin x - 1) = 0', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: '\\sin x = -\\frac{1}{3}: x = 199.5, 340.5; \\quad \\sin x = \\frac{1}{2}: x = 30, 150', explanation: '' }
        ], finalAnswer: 'x = 30, 150, 199.5, 340.5 degrees' }
    },
    {
        id: 't4-054', topicRef: 't4', topicTitle: 'Trigonometric Equations 54', difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin x \\cos x = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Either factor is zero', workingLatex: '\\sin x = 0: x = 0, 180, 360; \\quad \\cos x = 0: x = 90, 270', explanation: '' }
        ], finalAnswer: 'x = 0, 90, 180, 270, 360 degrees' }
    },
    {
        id: 't4-055', topicRef: 't4', topicTitle: 'Trigonometric Equations 55', difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\sin x \\cos x = \\sin x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: '\\sin x(2\\cos x - 1) = 0', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: '\\sin x = 0: x = 0, 180, 360; \\quad \\cos x = \\frac{1}{2}: x = 60, 300', explanation: '' }
        ], finalAnswer: 'x = 0, 60, 180, 300, 360 degrees' }
    },
    {
        id: 't4-056', topicRef: 't4', topicTitle: 'Trigonometric Equations 56', difficulty: 'Foundation',
        questionText: 'Solve \\( \\tan^2 x - 3 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: '\\tan x = \\pm \\sqrt{3}', explanation: '' },
            { stepNumber: 2, description: 'Solutions', workingLatex: 'x = 60, 120, 240, 300', explanation: '' }
        ], finalAnswer: 'x = 60, 120, 240, 300 degrees' }
    },
    {
        id: 't4-057', topicRef: 't4', topicTitle: 'Trigonometric Equations 57', difficulty: 'Foundation',
        questionText: 'Solve \\( 3\\sin^2 x + \\sin x - 2 = 0 \\) for \\( 0 \\leq x \\leq 2\\pi \\). Give answers in radians.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise', workingLatex: '(3\\sin x - 2)(\\sin x + 1) = 0', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: '\\sin x = \\frac{2}{3}: x = 0.730, \\pi - 0.730 = 2.412; \\quad \\sin x = -1: x = \\frac{3\\pi}{2}', explanation: '' }
        ], finalAnswer: 'x = 0.730, 2.41, 3pi/2 radians' }
    },
    {
        id: 't4-058', topicRef: 't4', topicTitle: 'Trigonometric Equations 58', difficulty: 'Foundation',
        questionText: 'Solve \\( \\cos 2x = \\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use identity cos 2x = 2cos^2 x - 1', workingLatex: '2\\cos^2 x - 1 = \\cos x \\implies 2\\cos^2 x - \\cos x - 1 = 0', explanation: '' },
            { stepNumber: 2, description: 'Factorise', workingLatex: '(2\\cos x + 1)(\\cos x - 1) = 0', explanation: '' },
            { stepNumber: 3, description: 'Solutions', workingLatex: 'x = 0, 120, 240, 360', explanation: '' }
        ], finalAnswer: 'x = 0, 120, 240, 360 degrees' }
    },
    {
        id: 't4-059', topicRef: 't4', topicTitle: 'Trigonometric Equations 59', difficulty: 'Foundation',
        questionText: 'Solve \\( 4\\cos^2 x - 4\\cos x + 1 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Perfect square', workingLatex: '(2\\cos x - 1)^2 = 0 \\implies \\cos x = \\frac{1}{2}', explanation: '' },
            { stepNumber: 2, description: 'Solutions', workingLatex: 'x = 60^\\circ, 300^\\circ', explanation: '' }
        ], finalAnswer: 'x = 60, 300 degrees' }
    },
    {
        id: 't4-060', topicRef: 't4', topicTitle: 'Trigonometric Equations 60', difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin x + \\cos x = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: '\\sin x = -\\cos x \\implies \\tan x = -1', explanation: '' },
            { stepNumber: 2, description: 'Solutions', workingLatex: 'x = 135^\\circ, 315^\\circ', explanation: '' }
        ], finalAnswer: 'x = 135, 315 degrees' }
    },
    {
        id: 't4-061', topicRef: 't4', topicTitle: 'Trigonometric Equations 61', difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin(2x + 30^\\circ) = 0.5 \\) for \\( 0^\\circ \\leq x \\leq 180^\\circ \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let u = 2x + 30, range 30 to 390', workingLatex: '\\sin u = 0.5 \\implies u = 30, 150', explanation: '' },
            { stepNumber: 2, description: 'Solve for x', workingLatex: '2x + 30 = 30 \\implies x = 0; \\quad 2x + 30 = 150 \\implies x = 60', explanation: '' }
        ], finalAnswer: 'x = 0, 60 degrees' }
    },
    {
        id: 't4-062', topicRef: 't4', topicTitle: 'Trigonometric Equations 62', difficulty: 'Foundation',
        questionText: 'Find all values of \\( x \\) in \\( [0, 2\\pi] \\) for which \\( 2\\sin^2 x = 1 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: '\\sin x = \\pm \\frac{1}{\\sqrt{2}}', explanation: '' },
            { stepNumber: 2, description: 'Solutions in radians', workingLatex: 'x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}', explanation: '' }
        ], finalAnswer: 'x = pi/4, 3pi/4, 5pi/4, 7pi/4' }
    },
    {
        id: 't4-063', topicRef: 't4', topicTitle: 'Trigonometric Equations 63', difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\sin x = 3\\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Divide by cos x', workingLatex: '\\tan x = \\frac{3}{2} = 1.5', explanation: '' },
            { stepNumber: 2, description: 'Solutions', workingLatex: 'x = 56.3^\\circ, 236.3^\\circ', explanation: '' }
        ], finalAnswer: 'x = 56.3, 236.3 degrees' }
    },
    {
        id: 't4-064', topicRef: 't4', topicTitle: 'Trigonometric Equations 64', difficulty: 'Foundation',
        questionText: 'Solve \\( \\cos^2 x = \\cos x \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: '\\cos x(\\cos x - 1) = 0', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: '\\cos x = 0: x = 90, 270; \\quad \\cos x = 1: x = 0, 360', explanation: '' }
        ], finalAnswer: 'x = 0, 90, 270, 360 degrees' }
    },
    {
        id: 't4-065', topicRef: 't4', topicTitle: 'Trigonometric Equations 65', difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\sin^2 x + 3\\cos x = 3 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Replace sin^2 with 1 - cos^2', workingLatex: '2(1-\\cos^2 x) + 3\\cos x = 3 \\implies 2\\cos^2 x - 3\\cos x + 1 = 0', explanation: '' },
            { stepNumber: 2, description: 'Factorise', workingLatex: '(2\\cos x - 1)(\\cos x - 1) = 0', explanation: '' },
            { stepNumber: 3, description: 'Solve', workingLatex: '\\cos x = \\frac{1}{2}: x = 60, 300; \\quad \\cos x = 1: x = 0, 360', explanation: '' }
        ], finalAnswer: 'x = 0, 60, 300, 360 degrees' }
    },
    {
        id: 't4-066', topicRef: 't4', topicTitle: 'Trigonometric Equations 66', difficulty: 'Foundation',
        questionText: 'How many solutions does \\( \\sin 4x = 0.3 \\) have for \\( 0^\\circ \\leq x \\leq 360^\\circ \\)?',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '4 complete cycles, 2 solutions per cycle', workingLatex: '4 \\times 2 = 8', explanation: '' }
        ], finalAnswer: '8 solutions' }
    },
    {
        id: 't4-067', topicRef: 't4', topicTitle: 'Trigonometric Equations 67', difficulty: 'Foundation',
        questionText: 'Solve \\( \\sin x = \\frac{\\sqrt{3}}{2} \\) for \\( -180^\\circ \\leq x \\leq 180^\\circ \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Solutions', workingLatex: 'x = 60^\\circ, 120^\\circ', explanation: 'Both in range.' }
        ], finalAnswer: 'x = 60, 120 degrees' }
    },
    {
        id: 't4-068', topicRef: 't4', topicTitle: 'Trigonometric Equations 68', difficulty: 'Foundation',
        questionText: 'Solve \\( \\cos x = -\\frac{1}{\\sqrt{2}} \\) for \\( -\\pi \\leq x \\leq \\pi \\). Give answers in terms of \\( \\pi \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Solutions', workingLatex: 'x = \\pm \\frac{3\\pi}{4}', explanation: 'Cos = -1/sqrt(2) at 135 and -135 degrees.' }
        ], finalAnswer: 'x = -3pi/4, 3pi/4' }
    },
    {
        id: 't4-069', topicRef: 't4', topicTitle: 'Trigonometric Equations 69', difficulty: 'Foundation',
        questionText: 'Solve \\( \\tan(x + 60^\\circ) = 1 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let u = x + 60, range 60 to 420', workingLatex: '\\tan u = 1 \\implies u = 45, 225, 405', explanation: '' },
            { stepNumber: 2, description: 'u = 45 gives x = -15 (out of range). u = 225 gives x = 165. u = 405 gives x = 345.', workingLatex: 'x = 165^\\circ, 345^\\circ', explanation: '' }
        ], finalAnswer: 'x = 165, 345 degrees' }
    },
    {
        id: 't4-070', topicRef: 't4', topicTitle: 'Trigonometric Equations 70', difficulty: 'Foundation',
        questionText: 'Solve \\( 5\\sin^2 x + 4\\cos x - 4 = 0 \\) for \\( 0^\\circ \\leq x \\leq 360^\\circ \\). Give answers to 1 d.p. where necessary.',
        marks: 6, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Replace sin^2 with 1 - cos^2', workingLatex: '5(1 - \\cos^2 x) + 4\\cos x - 4 = 0 \\implies 5\\cos^2 x - 4\\cos x - 1 = 0', explanation: '' },
            { stepNumber: 2, description: 'Factorise', workingLatex: '(5\\cos x + 1)(\\cos x - 1) = 0', explanation: '' },
            { stepNumber: 3, description: 'Solve', workingLatex: '\\cos x = -\\frac{1}{5} = -0.2: x = 101.5, 258.5; \\quad \\cos x = 1: x = 0, 360', explanation: '' }
        ], finalAnswer: 'x = 0, 101.5, 258.5, 360 degrees' }
    },
];
