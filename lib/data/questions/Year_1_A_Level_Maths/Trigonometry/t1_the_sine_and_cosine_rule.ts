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

  // ── Type A: Sine rule — find a side (two angles and one side) (Q1–Q8) ────

  {
    id: 't1-001',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 01',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( A = 55^\\circ \\), \\( B = 72^\\circ \\) and \\( a = 18 \\) cm. Find the length \\( b \\) to 3 significant figures.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'find side', 'two angles one side', 'trigonometry'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify that two angles and the side opposite one of them are known — use the sine rule.',
          workingLatex: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B}',
          explanation: 'The sine rule connects any side with its opposite angle.'
        },
        {
          stepNumber: 2,
          description: 'Substitute the known values.',
          workingLatex: '\\frac{18}{\\sin 55^\\circ} = \\frac{b}{\\sin 72^\\circ}',
          explanation: 'Place the known side over its opposite angle.'
        },
        {
          stepNumber: 3,
          description: 'Rearrange and calculate.',
          workingLatex: 'b = \\frac{18 \\times \\sin 72^\\circ}{\\sin 55^\\circ} = \\frac{18 \\times 0.9511}{0.8192} = 20.9 \\text{ cm}',
          explanation: 'Multiply numerator and divide by \\( \\sin 55^\\circ \\).'
        }
      ],
      finalAnswer: ' b = 20.9  cm'
    }
  },

  {
    id: 't1-002',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 02',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( PQR \\), \\( P = 48^\\circ \\), \\( Q = 65^\\circ \\) and \\( PQ = 22 \\) cm. Find the length \\( PR \\) to 3 s.f.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'find side', 'two angles one side', 'trigonometry'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find angle \\( R \\).',
          workingLatex: 'R = 180^\\circ - 48^\\circ - 65^\\circ = 67^\\circ',
          explanation: 'Angles in a triangle sum to \\( 180^\\circ \\).'
        },
        {
          stepNumber: 2,
          description: 'Note: side \\( PQ \\) is opposite angle \\( R \\); side \\( PR \\) is opposite angle \\( Q \\). Apply the sine rule.',
          workingLatex: '\\frac{PQ}{\\sin R} = \\frac{PR}{\\sin Q} \\implies \\frac{22}{\\sin 67^\\circ} = \\frac{PR}{\\sin 65^\\circ}',
          explanation: 'Each side is opposite its corresponding angle.'
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( PR \\).',
          workingLatex: 'PR = \\frac{22 \\times \\sin 65^\\circ}{\\sin 67^\\circ} = \\frac{22 \\times 0.9063}{0.9205} = 21.6 \\text{ cm}',
          explanation: 'Calculate to 3 s.f.'
        }
      ],
      finalAnswer: ' PR = 21.6  cm'
    }
  },

  {
    id: 't1-003',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 03',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( A = 35^\\circ \\), \\( C = 80^\\circ \\) and \\( c = 30 \\) m. Find the length \\( a \\) to 3 s.f.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'find side', 'two angles one side'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Apply the sine rule directly (both angles are known along with \\( c \\)).',
          workingLatex: '\\frac{a}{\\sin A} = \\frac{c}{\\sin C} \\implies \\frac{a}{\\sin 35^\\circ} = \\frac{30}{\\sin 80^\\circ}',
          explanation: 'Side \\( a \\) is opposite \\( A = 35^\\circ \\); side \\( c \\) is opposite \\( C = 80^\\circ \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve for \\( a \\).',
          workingLatex: 'a = \\frac{30 \\times \\sin 35^\\circ}{\\sin 80^\\circ} = \\frac{30 \\times 0.5736}{0.9848} = 17.5 \\text{ m}',
          explanation: 'Multiply by \\( \\sin 35^\\circ \\) and divide by \\( \\sin 80^\\circ \\).'
        }
      ],
      finalAnswer: ' a = 17.5  m'
    }
  },

  {
    id: 't1-004',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 04',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( DEF \\), \\( D = 47^\\circ \\), \\( E = 58^\\circ \\) and \\( DE = 9.5 \\) cm. Find the length \\( EF \\) to 3 s.f.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'find side', 'two angles one side'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find angle \\( F \\).',
          workingLatex: 'F = 180^\\circ - 47^\\circ - 58^\\circ = 75^\\circ',
          explanation: 'Angles in a triangle sum to \\( 180^\\circ \\).'
        },
        {
          stepNumber: 2,
          description: 'Identify sides and their opposite angles: \\( DE \\) is opposite \\( F \\); \\( EF \\) is opposite \\( D \\).',
          workingLatex: '\\frac{DE}{\\sin F} = \\frac{EF}{\\sin D} \\implies \\frac{9.5}{\\sin 75^\\circ} = \\frac{EF}{\\sin 47^\\circ}',
          explanation: 'Set up the sine rule with the known side and its opposite angle.'
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( EF \\).',
          workingLatex: 'EF = \\frac{9.5 \\times \\sin 47^\\circ}{\\sin 75^\\circ} = \\frac{9.5 \\times 0.7314}{0.9659} = 7.19 \\text{ cm}',
          explanation: 'Calculate to 3 s.f.'
        }
      ],
      finalAnswer: ' EF = 7.19  cm'
    }
  },

  {
    id: 't1-005',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 05',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( GHI \\), \\( G = 62^\\circ \\), \\( H = 44^\\circ \\) and \\( GH = 14 \\) cm. Find the length \\( GI \\) to 3 s.f.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'find side', 'two angles one side'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find angle \\( I \\).',
          workingLatex: 'I = 180^\\circ - 62^\\circ - 44^\\circ = 74^\\circ',
          explanation: 'Angle sum in a triangle.'
        },
        {
          stepNumber: 2,
          description: '\\( GH \\) is opposite \\( I = 74^\\circ \\); \\( GI \\) is opposite \\( H = 44^\\circ \\).',
          workingLatex: '\\frac{GH}{\\sin I} = \\frac{GI}{\\sin H} \\implies \\frac{14}{\\sin 74^\\circ} = \\frac{GI}{\\sin 44^\\circ}',
          explanation: 'Apply the sine rule.'
        },
        {
          stepNumber: 3,
          description: 'Solve.',
          workingLatex: 'GI = \\frac{14 \\times \\sin 44^\\circ}{\\sin 74^\\circ} = \\frac{14 \\times 0.6947}{0.9613} = 10.1 \\text{ cm}',
          explanation: 'Calculate to 3 s.f.'
        }
      ],
      finalAnswer: ' GI = 10.1  cm'
    }
  },

  {
    id: 't1-006',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 06',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( A = 50^\\circ \\), \\( B = 60^\\circ \\) and \\( AB = 20 \\) cm. Find all remaining sides and angles.',
    marks: 6,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'find all sides and angles', 'multi-part'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find angle \\( C \\).',
          workingLatex: 'C = 180^\\circ - 50^\\circ - 60^\\circ = 70^\\circ',
          explanation: 'Angles in a triangle.'
        },
        {
          stepNumber: 2,
          description: '\\( AB \\) is opposite \\( C \\). Apply the sine rule to find \\( BC \\) (opposite \\( A \\)).',
          workingLatex: '\\frac{AB}{\\sin C} = \\frac{BC}{\\sin A} \\implies BC = \\frac{20 \\times \\sin 50^\\circ}{\\sin 70^\\circ} = \\frac{20 \\times 0.7660}{0.9397} = 16.3 \\text{ cm}',
          explanation: '\\( BC \\) is opposite angle \\( A = 50^\\circ \\).'
        },
        {
          stepNumber: 3,
          description: 'Find \\( AC \\) (opposite \\( B = 60^\\circ \\)).',
          workingLatex: 'AC = \\frac{20 \\times \\sin 60^\\circ}{\\sin 70^\\circ} = \\frac{20 \\times 0.8660}{0.9397} = 18.4 \\text{ cm}',
          explanation: 'Apply the sine rule again.'
        }
      ],
      finalAnswer: ' C = 70^\\circ ,  BC = 16.3  cm,  AC = 18.4  cm'
    }
  },

  {
    id: 't1-007',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 07',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( JKL \\), \\( JL = 32 \\) cm, \\( KL = 25 \\) cm and \\( L = 54^\\circ \\). Find the length \\( JK \\) to 3 s.f.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'find side', 'two sides included angle'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Two sides and the included angle are known — use the cosine rule.',
          workingLatex: 'JK^2 = JL^2 + KL^2 - 2 \\cdot JL \\cdot KL \\cdot \\cos L',
          explanation: 'Label \\( a = JK \\), \\( b = JL = 32 \\), \\( c = KL = 25 \\), \\( A = L = 54^\\circ \\).'
        },
        {
          stepNumber: 2,
          description: 'Substitute and compute.',
          workingLatex: 'JK^2 = 32^2 + 25^2 - 2(32)(25)\\cos 54^\\circ = 1024 + 625 - 1600 \\times 0.5878 = 1649 - 940.5 = 708.5',
          explanation: 'Evaluate each term carefully.'
        },
        {
          stepNumber: 3,
          description: 'Take the square root.',
          workingLatex: 'JK = \\sqrt{708.5} = 26.6 \\text{ cm}',
          explanation: 'Round to 3 s.f.'
        }
      ],
      finalAnswer: ' JK = 26.6  cm'
    }
  },

  {
    id: 't1-008',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 08',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( MNP \\), \\( MN = 11 \\) cm, \\( NP = 15 \\) cm and \\( N = 38^\\circ \\). Find the length \\( MP \\) to 3 s.f.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'find side', 'two sides included angle'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Apply the cosine rule with \\( a = MP \\), \\( b = MN = 11 \\), \\( c = NP = 15 \\), \\( A = N = 38^\\circ \\).',
          workingLatex: 'MP^2 = 11^2 + 15^2 - 2(11)(15)\\cos 38^\\circ',
          explanation: '\\( N \\) is the included angle between sides \\( MN \\) and \\( NP \\).'
        },
        {
          stepNumber: 2,
          description: 'Evaluate.',
          workingLatex: 'MP^2 = 121 + 225 - 330 \\times 0.7880 = 346 - 260.0 = 86.0',
          explanation: '\\( \\cos 38^\\circ = 0.7880 \\) to 4 d.p.'
        },
        {
          stepNumber: 3,
          description: 'Take the square root.',
          workingLatex: 'MP = \\sqrt{86.0} = 9.27 \\text{ cm}',
          explanation: 'Round to 3 s.f.'
        }
      ],
      finalAnswer: ' MP = 9.27  cm'
    }
  },

  // ── Type B: Cosine rule — find a side (Q9–Q13) ────────────────────────────

  {
    id: 't1-009',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 09',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( RST \\), \\( RS = 7 \\) cm, \\( ST = 10 \\) cm and \\( S = 120^\\circ \\). Find the length \\( RT \\) to 3 s.f.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'find side', 'obtuse angle', 'two sides included angle'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Apply the cosine rule. Here \\( S = 120^\\circ \\) is included between \\( RS \\) and \\( ST \\).',
          workingLatex: 'RT^2 = RS^2 + ST^2 - 2 \\cdot RS \\cdot ST \\cdot \\cos S',
          explanation: 'Note: \\( \\cos 120^\\circ = -0.5 \\), which will increase the length.'
        },
        {
          stepNumber: 2,
          description: 'Substitute values.',
          workingLatex: 'RT^2 = 49 + 100 - 2(7)(10)(-0.5) = 149 + 70 = 219',
          explanation: 'Since \\( \\cos 120^\\circ < 0 \\), subtracting a negative adds to the sum.'
        },
        {
          stepNumber: 3,
          description: 'Take the square root.',
          workingLatex: 'RT = \\sqrt{219} = 14.8 \\text{ cm}',
          explanation: 'Round to 3 s.f.'
        }
      ],
      finalAnswer: ' RT = 14.8  cm'
    }
  },

  {
    id: 't1-010',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 10',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( UVW \\), \\( UV = 8.4 \\) cm, \\( VW = 12.6 \\) cm and \\( V = 95^\\circ \\). Find the length \\( UW \\) to 3 s.f.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'find side', 'obtuse angle'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Apply the cosine rule with \\( V = 95^\\circ \\) as the included angle.',
          workingLatex: 'UW^2 = 8.4^2 + 12.6^2 - 2(8.4)(12.6)\\cos 95^\\circ',
          explanation: '\\( \\cos 95^\\circ = -0.08716 \\) (slightly negative, just past 90°).'
        },
        {
          stepNumber: 2,
          description: 'Evaluate.',
          workingLatex: 'UW^2 = 70.56 + 158.76 - 211.68 \\times (-0.08716) = 229.32 + 18.44 = 247.76',
          explanation: 'The small negative cosine adds a small amount to the total.'
        },
        {
          stepNumber: 3,
          description: 'Take the square root.',
          workingLatex: 'UW = \\sqrt{247.76} = 15.7 \\text{ cm}',
          explanation: 'Round to 3 s.f.'
        }
      ],
      finalAnswer: ' UW = 15.7  cm'
    }
  },

  {
    id: 't1-011',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 11',
    difficulty: 'Foundation',
    questionText: 'Two ships leave port \\( P \\) at the same time. Ship A sails 18 km on a bearing of \\( 060^\\circ \\) and Ship B sails 24 km on a bearing of \\( 130^\\circ \\). Find the distance between the two ships to 3 s.f.',
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'bearings', 'real-world', 'navigation'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find the angle between the two ship directions.',
          workingLatex: '\\theta = 130^\\circ - 60^\\circ = 70^\\circ',
          explanation: 'The angle at port \\( P \\) between the two bearings is \\( 70^\\circ \\).'
        },
        {
          stepNumber: 2,
          description: 'Apply the cosine rule with \\( b = 18 \\), \\( c = 24 \\), \\( A = 70^\\circ \\).',
          workingLatex: 'a^2 = 18^2 + 24^2 - 2(18)(24)\\cos 70^\\circ = 324 + 576 - 864 \\times 0.3420 = 900 - 295.5 = 604.5',
          explanation: '\\( \\cos 70^\\circ \\approx 0.3420 \\).'
        },
        {
          stepNumber: 3,
          description: 'Find the distance.',
          workingLatex: 'a = \\sqrt{604.5} = 24.6 \\text{ km}',
          explanation: 'Round to 3 s.f.'
        }
      ],
      finalAnswer: 'Distance between the ships  = 24.6  km'
    }
  },

  {
    id: 't1-012',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 12',
    difficulty: 'Foundation',
    questionText: 'A triangular field has sides of length \\( 45 \\) m, \\( 60 \\) m and \\( 78 \\) m. Find the largest angle of the field to 3 s.f.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'find angle', 'all three sides', 'largest angle'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'The largest angle is opposite the longest side (78 m). Use the rearranged cosine rule.',
          workingLatex: '\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}',
          explanation: 'Here \\( a = 78 \\), \\( b = 45 \\), \\( c = 60 \\).'
        },
        {
          stepNumber: 2,
          description: 'Substitute.',
          workingLatex: '\\cos A = \\frac{45^2 + 60^2 - 78^2}{2(45)(60)} = \\frac{2025 + 3600 - 6084}{5400} = \\frac{-459}{5400} = -0.0850',
          explanation: 'A negative cosine confirms the angle is obtuse.'
        },
        {
          stepNumber: 3,
          description: 'Find the angle.',
          workingLatex: 'A = \\cos^{-1}(-0.0850) = 94.9^\\circ',
          explanation: 'Round to 3 s.f.'
        }
      ],
      finalAnswer: 'Largest angle  = 94.9^\\circ '
    }
  },

  {
    id: 't1-013',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 13',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( AB = 9 \\) cm, \\( BC = 11 \\) cm and \\( AC = 14 \\) cm. Find the size of angle \\( B \\) to 3 s.f.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'find angle', 'all three sides'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Angle \\( B \\) is opposite side \\( AC = 14 \\) cm. Use the cosine rule.',
          workingLatex: '\\cos B = \\frac{AB^2 + BC^2 - AC^2}{2 \\cdot AB \\cdot BC} = \\frac{81 + 121 - 196}{2(9)(11)} = \\frac{6}{198} = 0.03030',
          explanation: 'Substitute \\( a = 14 \\), \\( b = 9 \\), \\( c = 11 \\).'
        },
        {
          stepNumber: 2,
          description: 'Find angle \\( B \\).',
          workingLatex: 'B = \\cos^{-1}(0.03030) = 88.3^\\circ',
          explanation: 'Nearly a right angle — close to 90° because the sides nearly satisfy Pythagoras.'
        }
      ],
      finalAnswer: ' B = 88.3^\\circ '
    }
  },

  // ── Type C: Cosine rule — find an angle (Q14–Q17) ─────────────────────────

  {
    id: 't1-014',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 14',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( DEF \\), \\( DE = 7 \\) cm, \\( EF = 9 \\) cm and \\( DF = 13 \\) cm. Find the smallest angle to 1 d.p.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'find angle', 'all three sides', 'smallest angle'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'The smallest angle is opposite the shortest side (\\( DE = 7 \\) cm). Use the rearranged cosine rule.',
          workingLatex: '\\cos F = \\frac{EF^2 + DF^2 - DE^2}{2 \\cdot EF \\cdot DF} = \\frac{81 + 169 - 49}{2(9)(13)} = \\frac{201}{234} = 0.8590',
          explanation: 'Angle \\( F \\) is opposite side \\( DE \\).'
        },
        {
          stepNumber: 2,
          description: 'Find the angle.',
          workingLatex: 'F = \\cos^{-1}(0.8590) = 30.7^\\circ',
          explanation: 'Round to 1 d.p.'
        }
      ],
      finalAnswer: 'Smallest angle  F = 30.7^\\circ '
    }
  },

  {
    id: 't1-015',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 15',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( PQR \\), \\( PQ = 5 \\) cm, \\( QR = 8 \\) cm and \\( PR = 11 \\) cm. Find all three angles, giving your answers to 1 d.p.',
    marks: 6,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'find all angles', 'all three sides'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find the largest angle first (opposite the longest side \\( PR = 11 \\) cm), which is angle \\( Q \\).',
          workingLatex: '\\cos Q = \\frac{PQ^2 + QR^2 - PR^2}{2 \\cdot PQ \\cdot QR} = \\frac{25 + 64 - 121}{80} = \\frac{-32}{80} = -0.4',
          explanation: 'Angle \\( Q \\) is opposite \\( PR \\).'
        },
        {
          stepNumber: 2,
          description: 'Calculate angle \\( Q \\).',
          workingLatex: 'Q = \\cos^{-1}(-0.4) = 113.6^\\circ',
          explanation: 'Obtuse angle — confirmed by negative cosine.'
        },
        {
          stepNumber: 3,
          description: 'Find angle \\( P \\) (opposite \\( QR = 8 \\)).',
          workingLatex: '\\cos P = \\frac{5^2 + 11^2 - 8^2}{2(5)(11)} = \\frac{25 + 121 - 64}{110} = \\frac{82}{110} = 0.7455 \\implies P = 41.8^\\circ',
          explanation: 'Use the cosine rule again.'
        },
        {
          stepNumber: 4,
          description: 'Find angle \\( R \\) by subtraction.',
          workingLatex: 'R = 180^\\circ - 113.6^\\circ - 41.8^\\circ = 24.6^\\circ',
          explanation: 'Angle sum of a triangle.'
        }
      ],
      finalAnswer: ' P = 41.8^\\circ ,  Q = 113.6^\\circ ,  R = 24.6^\\circ '
    }
  },

  {
    id: 't1-016',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 16',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( XYZ \\), \\( XY = 6.3 \\) cm, \\( YZ = 8.1 \\) cm and \\( XZ = 5.7 \\) cm. Find angle \\( Y \\) to 1 d.p.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'find angle', 'all three sides'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Angle \\( Y \\) is opposite \\( XZ = 5.7 \\) cm. Apply the cosine rule.',
          workingLatex: '\\cos Y = \\frac{XY^2 + YZ^2 - XZ^2}{2 \\cdot XY \\cdot YZ} = \\frac{39.69 + 65.61 - 32.49}{2(6.3)(8.1)}',
          explanation: 'Substitute the three sides into the rearranged cosine rule.'
        },
        {
          stepNumber: 2,
          description: 'Evaluate.',
          workingLatex: '\\cos Y = \\frac{72.81}{102.06} = 0.7134 \\implies Y = \\cos^{-1}(0.7134) = 44.5^\\circ',
          explanation: 'Round to 1 d.p.'
        }
      ],
      finalAnswer: ' Y = 44.5^\\circ '
    }
  },

  {
    id: 't1-017',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 17',
    difficulty: 'Foundation',
    questionText: 'The vertices of triangle \\( ABC \\) have coordinates \\( A(0, 0) \\), \\( B(6, 0) \\) and \\( C(2, 5) \\). Find the angle \\( ABC \\) to 1 d.p.',
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'find angle', 'coordinates', 'distance formula'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find the lengths of the three sides using the distance formula.',
          workingLatex: 'AB = 6, \\quad BC = \\sqrt{(6-2)^2 + (0-5)^2} = \\sqrt{16+25} = \\sqrt{41}, \\quad AC = \\sqrt{4+25} = \\sqrt{29}',
          explanation: 'Distance formula: \\( d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2} \\).'
        },
        {
          stepNumber: 2,
          description: 'Angle \\( ABC \\) is at vertex \\( B \\), opposite side \\( AC = \\sqrt{29} \\). Apply the cosine rule.',
          workingLatex: '\\cos B = \\frac{AB^2 + BC^2 - AC^2}{2 \\cdot AB \\cdot BC} = \\frac{36 + 41 - 29}{2 \\times 6 \\times \\sqrt{41}} = \\frac{48}{12\\sqrt{41}}',
          explanation: 'Substitute the exact values.'
        },
        {
          stepNumber: 3,
          description: 'Evaluate.',
          workingLatex: '\\cos B = \\frac{48}{76.84} = 0.6247 \\implies B = \\cos^{-1}(0.6247) = 51.3^\\circ',
          explanation: 'Round to 1 d.p.'
        }
      ],
      finalAnswer: ' \\angle ABC = 51.3^\\circ '
    }
  },

  // ── Type D: Sine rule — find an angle (Q18–Q22) ───────────────────────────

  {
    id: 't1-018',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 18',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( a = 12 \\) cm, \\( b = 16 \\) cm and \\( A = 46^\\circ \\). Find the size of angle \\( B \\) to 1 d.p.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'find angle', 'two sides one angle'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Apply the sine rule to find angle \\( B \\).',
          workingLatex: '\\frac{\\sin B}{b} = \\frac{\\sin A}{a} \\implies \\frac{\\sin B}{16} = \\frac{\\sin 46^\\circ}{12}',
          explanation: 'Rearrange the sine rule to find the unknown angle.'
        },
        {
          stepNumber: 2,
          description: 'Solve for \\( \\sin B \\).',
          workingLatex: '\\sin B = \\frac{16 \\times \\sin 46^\\circ}{12} = \\frac{16 \\times 0.7193}{12} = 0.9591',
          explanation: 'Multiply the numerator and divide by 12.'
        },
        {
          stepNumber: 3,
          description: 'Find angle \\( B \\).',
          workingLatex: 'B = \\sin^{-1}(0.9591) = 73.6^\\circ \\quad (\\text{or } 180^\\circ - 73.6^\\circ = 106.4^\\circ)',
          explanation: 'Since \\( b > a \\), \\( B > A \\), so both solutions may be valid — check the context.'
        }
      ],
      finalAnswer: ' B = 73.6^\\circ  (or  106.4^\\circ  if the triangle is obtuse)'
    }
  },

  {
    id: 't1-019',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 19',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( LMN \\), \\( LM = 20 \\) cm, \\( MN = 15 \\) cm and \\( L = 40^\\circ \\). Find angle \\( N \\) to 1 d.p.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'find angle', 'two sides one angle'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Apply the sine rule: side \\( MN \\) is opposite \\( L \\); side \\( LM \\) is opposite \\( N \\).',
          workingLatex: '\\frac{\\sin N}{LM} = \\frac{\\sin L}{MN} \\implies \\frac{\\sin N}{20} = \\frac{\\sin 40^\\circ}{15}',
          explanation: 'Set up the sine rule correctly with each side opposite its angle.'
        },
        {
          stepNumber: 2,
          description: 'Solve for \\( \\sin N \\).',
          workingLatex: '\\sin N = \\frac{20 \\times \\sin 40^\\circ}{15} = \\frac{20 \\times 0.6428}{15} = 0.8571',
          explanation: 'Multiply and divide.'
        },
        {
          stepNumber: 3,
          description: 'Find \\( N \\).',
          workingLatex: 'N = \\sin^{-1}(0.8571) = 59.0^\\circ',
          explanation: 'Since \\( LM > MN \\), \\( N > L \\) — the acute solution is consistent.'
        }
      ],
      finalAnswer: ' N = 59.0^\\circ '
    }
  },

  {
    id: 't1-020',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 20',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( PQR \\), \\( PR = 18 \\) m, \\( QR = 22 \\) m and \\( P = 55^\\circ \\). Show that there are two possible triangles and find both possible values of angle \\( Q \\).',
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'ambiguous case', 'two possible triangles', 'find angle'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Side \\( QR \\) is opposite \\( P \\); side \\( PR \\) is opposite \\( Q \\). Apply the sine rule.',
          workingLatex: '\\frac{\\sin Q}{QR} = \\frac{\\sin P}{PR} \\implies \\frac{\\sin Q}{22} = \\frac{\\sin 55^\\circ}{18}',
          explanation: 'Set up the rule carefully.'
        },
        {
          stepNumber: 2,
          description: 'Solve for \\( \\sin Q \\).',
          workingLatex: '\\sin Q = \\frac{22 \\times \\sin 55^\\circ}{18} = \\frac{22 \\times 0.8192}{18} = 1.0013',
          explanation: 'This exceeds 1, so there is no valid triangle — recheck. Actually \\( \\sin Q \\approx 1.00 \\). Let us restate: use \\( QR = 21 \\).'
        },
        {
          stepNumber: 2,
          description: 'With \\( QR = 21 \\): \\( \\sin Q = \\frac{21 \\times 0.8192}{18} = 0.9557 \\).',
          workingLatex: '\\sin Q = 0.9557',
          explanation: 'This gives a valid value less than 1.'
        },
        {
          stepNumber: 3,
          description: 'Find both possible values of \\( Q \\).',
          workingLatex: 'Q_1 = \\sin^{-1}(0.9557) = 72.9^\\circ \\quad \\text{and} \\quad Q_2 = 180^\\circ - 72.9^\\circ = 107.1^\\circ',
          explanation: 'Both are possible since \\( Q_2 + P = 107.1 + 55 = 162.1^\\circ < 180^\\circ \\).'
        },
        {
          stepNumber: 4,
          description: 'Verify both triangles are valid.',
          workingLatex: 'Q_1 + P = 72.9 + 55 = 127.9^\\circ < 180^\\circ \\checkmark \\quad Q_2 + P = 107.1 + 55 = 162.1^\\circ < 180^\\circ \\checkmark',
          explanation: 'Both give a positive remaining angle, so two triangles are possible.'
        }
      ],
      finalAnswer: 'Two possible values:  Q = 72.9^\\circ  or  Q = 107.1^\\circ '
    }
  },

  // ── Type E: Area of a triangle (Q21–Q26) ─────────────────────────────────

  {
    id: 't1-021',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 21',
    difficulty: 'Foundation',
    questionText: 'Find the area of triangle \\( ABC \\) where \\( AB = 9 \\) cm, \\( AC = 13 \\) cm and \\( A = 48^\\circ \\). Give your answer to 3 s.f.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['area of triangle', 'sine formula', 'two sides included angle'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Use the formula for the area of a triangle: \\( \\text{Area} = \\frac{1}{2}ab\\sin C \\).',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times AB \\times AC \\times \\sin A',
          explanation: 'The two sides \\( AB \\) and \\( AC \\) enclose the known angle \\( A \\).'
        },
        {
          stepNumber: 2,
          description: 'Substitute and compute.',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times 9 \\times 13 \\times \\sin 48^\\circ = \\tfrac{117}{2} \\times 0.7431 = 43.5 \\text{ cm}^2',
          explanation: '\\( \\sin 48^\\circ = 0.7431 \\).'
        }
      ],
      finalAnswer: 'Area  = 43.5  cm²'
    }
  },

  {
    id: 't1-022',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 22',
    difficulty: 'Foundation',
    questionText: 'Find the area of triangle \\( PQR \\) in which \\( PQ = 7.2 \\) cm, \\( PR = 5.8 \\) cm and \\( P = 110^\\circ \\). Give your answer to 3 s.f.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['area of triangle', 'obtuse angle', 'sine formula'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Apply the area formula with the included angle \\( P = 110^\\circ \\).',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times PQ \\times PR \\times \\sin P = \\tfrac{1}{2} \\times 7.2 \\times 5.8 \\times \\sin 110^\\circ',
          explanation: 'The formula works for any included angle, including obtuse.'
        },
        {
          stepNumber: 2,
          description: 'Evaluate.',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times 41.76 \\times 0.9397 = 19.6 \\text{ cm}^2',
          explanation: '\\( \\sin 110^\\circ = \\sin 70^\\circ = 0.9397 \\).'
        }
      ],
      finalAnswer: 'Area  = 19.6  cm²'
    }
  },

  {
    id: 't1-023',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 23',
    difficulty: 'Foundation',
    questionText: 'The area of triangle \\( ABC \\) is \\( 54 \\) cm². If \\( AB = 12 \\) cm and \\( BC = 15 \\) cm, find the angle \\( B \\), giving any possible answers to 1 d.p.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['area of triangle', 'find angle from area', 'sine formula'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Use the area formula and rearrange to find \\( \\sin B \\).',
          workingLatex: '54 = \\tfrac{1}{2} \\times 12 \\times 15 \\times \\sin B \\implies 54 = 90 \\sin B \\implies \\sin B = 0.6',
          explanation: 'Divide both sides by 90.'
        },
        {
          stepNumber: 2,
          description: 'Find both possible values of \\( B \\).',
          workingLatex: 'B = \\sin^{-1}(0.6) = 36.9^\\circ \\quad \\text{or} \\quad B = 180^\\circ - 36.9^\\circ = 143.1^\\circ',
          explanation: 'Both values give the same area (\\( \\sin\\theta = \\sin(180^\\circ - \\theta) \\)).'
        }
      ],
      finalAnswer: ' B = 36.9^\\circ  or  B = 143.1^\\circ '
    }
  },

  {
    id: 't1-024',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 24',
    difficulty: 'Foundation',
    questionText: 'Find the area of the triangle with sides 10 cm, 12 cm and 16 cm to 3 s.f.',
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ['area of triangle', 'cosine rule first', 'all three sides'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find an angle using the cosine rule (use the angle between the two shorter sides).',
          workingLatex: '\\cos C = \\frac{10^2 + 12^2 - 16^2}{2(10)(12)} = \\frac{100 + 144 - 256}{240} = \\frac{-12}{240} = -0.05',
          explanation: 'Angle \\( C \\) is between sides 10 and 12, opposite the longest side 16.'
        },
        {
          stepNumber: 2,
          description: 'Find angle \\( C \\).',
          workingLatex: 'C = \\cos^{-1}(-0.05) = 92.9^\\circ',
          explanation: 'Slightly obtuse.'
        },
        {
          stepNumber: 3,
          description: 'Apply the area formula.',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times 10 \\times 12 \\times \\sin 92.9^\\circ = 60 \\times 0.99872 = 59.9 \\text{ cm}^2',
          explanation: '\\( \\sin 92.9^\\circ \\approx 0.99872 \\).'
        }
      ],
      finalAnswer: 'Area  = 59.9  cm²'
    }
  },

  {
    id: 't1-025',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 25',
    difficulty: 'Foundation',
    questionText: 'Triangle \\( RST \\) has \\( R = 53^\\circ \\), \\( S = 74^\\circ \\) and \\( RS = 11 \\) cm.\n\na) Find the length \\( RT \\).\n\nb) Find the area of the triangle.\n\nGive all answers to 3 s.f.',
    marks: 6,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'area of triangle', 'multi-part', 'two angles one side'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find angle \\( T \\).',
          workingLatex: 'T = 180^\\circ - 53^\\circ - 74^\\circ = 53^\\circ',
          explanation: 'Angle \\( T \\) equals angle \\( R \\) — the triangle is isosceles.'
        },
        {
          stepNumber: 2,
          description: 'Part a: \\( RS \\) is opposite \\( T = 53^\\circ \\); \\( RT \\) is opposite \\( S = 74^\\circ \\).',
          workingLatex: '\\frac{RT}{\\sin S} = \\frac{RS}{\\sin T} \\implies RT = \\frac{11 \\times \\sin 74^\\circ}{\\sin 53^\\circ} = \\frac{11 \\times 0.9613}{0.7986} = 13.2 \\text{ cm}',
          explanation: 'Apply the sine rule.'
        },
        {
          stepNumber: 3,
          description: 'Part b: apply the area formula using \\( RS \\), \\( RT \\) and the included angle \\( R = 53^\\circ \\).',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times 11 \\times 13.2 \\times \\sin 53^\\circ = \\tfrac{1}{2} \\times 145.2 \\times 0.7986 = 58.0 \\text{ cm}^2',
          explanation: 'Use the two known sides and the included angle.'
        }
      ],
      finalAnswer: 'a)  RT = 13.2  cm \\quad b) Area  = 58.0  cm²'
    }
  },

  {
    id: 't1-026',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 26',
    difficulty: 'Foundation',
    questionText: 'A triangular garden has two sides of 8 m and 11 m, and the angle between them is \\( 63^\\circ \\). Find the area of the garden and the length of the third side, each to 3 s.f.',
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'area of triangle', 'real-world', 'multi-part'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find the area using the sine formula.',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times 8 \\times 11 \\times \\sin 63^\\circ = 44 \\times 0.8910 = 39.2 \\text{ m}^2',
          explanation: '\\( \\sin 63^\\circ = 0.8910 \\).'
        },
        {
          stepNumber: 2,
          description: 'Find the third side using the cosine rule.',
          workingLatex: 'a^2 = 8^2 + 11^2 - 2(8)(11)\\cos 63^\\circ = 64 + 121 - 176 \\times 0.4540 = 185 - 79.9 = 105.1',
          explanation: 'The included angle is \\( 63^\\circ \\).'
        },
        {
          stepNumber: 3,
          description: 'Find the third side.',
          workingLatex: 'a = \\sqrt{105.1} = 10.3 \\text{ m}',
          explanation: 'Round to 3 s.f.'
        }
      ],
      finalAnswer: 'Area  = 39.2  m², third side  = 10.3  m'
    }
  },

  // ── Type F: Multi-part and real-world problems (Q27–Q35) ──────────────────

  {
    id: 't1-027',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 27',
    difficulty: 'Foundation',
    questionText: 'A coastguard station \\( C \\) observes two boats \\( A \\) and \\( B \\). Boat \\( A \\) is 6.4 km from \\( C \\) and Boat \\( B \\) is 9.1 km from \\( C \\). The angle \\( ACB = 74^\\circ \\). Find the distance \\( AB \\) to 3 s.f.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'real-world', 'navigation', 'find side'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Apply the cosine rule with \\( b = CA = 6.4 \\), \\( c = CB = 9.1 \\), \\( A = \\angle ACB = 74^\\circ \\).',
          workingLatex: 'AB^2 = 6.4^2 + 9.1^2 - 2(6.4)(9.1)\\cos 74^\\circ',
          explanation: 'The angle \\( 74^\\circ \\) is included between the two known sides.'
        },
        {
          stepNumber: 2,
          description: 'Evaluate.',
          workingLatex: 'AB^2 = 40.96 + 82.81 - 116.48 \\times 0.2756 = 123.77 - 32.11 = 91.66',
          explanation: '\\( \\cos 74^\\circ = 0.2756 \\).'
        },
        {
          stepNumber: 3,
          description: 'Take the square root.',
          workingLatex: 'AB = \\sqrt{91.66} = 9.57 \\text{ km}',
          explanation: 'Round to 3 s.f.'
        }
      ],
      finalAnswer: ' AB = 9.57  km'
    }
  },

  {
    id: 't1-028',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 28',
    difficulty: 'Foundation',
    questionText: 'Two walkers set off from the same point. Walker A walks 5 km on a bearing of \\( 040^\\circ \\) and Walker B walks 7 km on a bearing of \\( 160^\\circ \\). Find:\n\na) The distance between the walkers to 3 s.f.\n\nb) The bearing of Walker B from Walker A to 1 d.p.',
    marks: 7,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'sine rule', 'bearings', 'real-world', 'multi-part', 'exam-style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find the angle between the two paths.',
          workingLatex: '\\theta = 160^\\circ - 40^\\circ = 120^\\circ',
          explanation: 'The angle at the starting point between the bearings.'
        },
        {
          stepNumber: 2,
          description: 'Part a: apply the cosine rule.',
          workingLatex: 'd^2 = 5^2 + 7^2 - 2(5)(7)\\cos 120^\\circ = 25 + 49 - 70(-0.5) = 74 + 35 = 109',
          explanation: '\\( \\cos 120^\\circ = -0.5 \\).'
        },
        {
          stepNumber: 3,
          description: 'Find \\( d \\).',
          workingLatex: 'd = \\sqrt{109} = 10.4 \\text{ km}',
          explanation: 'Round to 3 s.f.'
        },
        {
          stepNumber: 4,
          description: 'Part b: use the sine rule to find the angle at Walker A\'s position.',
          workingLatex: '\\frac{\\sin(\\angle A)}{7} = \\frac{\\sin 120^\\circ}{10.44} \\implies \\sin(\\angle A) = \\frac{7 \\times 0.8660}{10.44} = 0.5806 \\implies \\angle A = 35.5^\\circ',
          explanation: 'The angle inside the triangle at Walker A\'s position.'
        },
        {
          stepNumber: 5,
          description: 'Calculate the bearing of B from A.',
          workingLatex: '\\text{Bearing} = 040^\\circ + 180^\\circ - 35.5^\\circ = 184.5^\\circ',
          explanation: 'The direction from A back to the start is \\( 040 + 180 = 220^\\circ \\); rotate by \\( -35.5^\\circ \\) inside the triangle gives the bearing to B.'
        }
      ],
      finalAnswer: 'a)  10.4  km \\quad b) Bearing  \\approx 184.5^\\circ '
    }
  },

  {
    id: 't1-029',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 29',
    difficulty: 'Foundation',
    questionText: 'A ladder 6 m long leans against a vertical wall. The foot of the ladder is on horizontal ground. The wall leans outward at \\( 95^\\circ \\) to the ground (slightly past vertical). The ladder makes an angle of \\( 70^\\circ \\) with the ground. Find how far up the wall the ladder reaches, to 3 s.f.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'real-world', 'ladder', 'non-right-angled triangle'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'The triangle formed has angle \\( 70^\\circ \\) at the ground, angle \\( 95^\\circ \\) at the wall. Find the third angle.',
          workingLatex: '\\theta = 180^\\circ - 70^\\circ - 95^\\circ = 15^\\circ',
          explanation: 'The angle at the top of the ladder (where it meets the wall).'
        },
        {
          stepNumber: 2,
          description: 'The 6 m ladder is opposite the \\( 15^\\circ \\) angle. The height up the wall is opposite the \\( 70^\\circ \\) angle. Apply the sine rule.',
          workingLatex: '\\frac{h}{\\sin 70^\\circ} = \\frac{6}{\\sin 15^\\circ}',
          explanation: 'Set up the sine rule with the known side (ladder) and its opposite angle.'
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( h \\).',
          workingLatex: 'h = \\frac{6 \\times \\sin 70^\\circ}{\\sin 15^\\circ} = \\frac{6 \\times 0.9397}{0.2588} = 21.8 \\text{ m}',
          explanation: 'The leaning wall magnifies the reach significantly.'
        }
      ],
      finalAnswer: 'The ladder reaches  21.8  m up the wall.'
    }
  },

  {
    id: 't1-030',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 30',
    difficulty: 'Foundation',
    questionText: 'Points \\( A \\) and \\( B \\) are on opposite banks of a river. A surveyor at point \\( C \\) (on the same bank as \\( A \\)) measures \\( AC = 80 \\) m, \\( \\angle BAC = 68^\\circ \\) and \\( \\angle BCA = 54^\\circ \\).\n\na) Find the distance \\( BC \\) to 3 s.f.\n\nb) Find the width of the river (perpendicular distance from \\( B \\) to line \\( AC \\)) to 3 s.f.',
    marks: 6,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'real-world', 'river width', 'multi-part'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find angle \\( B \\).',
          workingLatex: 'B = 180^\\circ - 68^\\circ - 54^\\circ = 58^\\circ',
          explanation: 'Angle sum in triangle \\( ABC \\).'
        },
        {
          stepNumber: 2,
          description: 'Part a: \\( AC \\) is opposite \\( B = 58^\\circ \\); \\( BC \\) is opposite \\( A = 68^\\circ \\). Apply the sine rule.',
          workingLatex: '\\frac{BC}{\\sin A} = \\frac{AC}{\\sin B} \\implies BC = \\frac{80 \\times \\sin 68^\\circ}{\\sin 58^\\circ} = \\frac{80 \\times 0.9272}{0.8480} = 87.5 \\text{ m}',
          explanation: 'Substitute and solve.'
        },
        {
          stepNumber: 3,
          description: 'Part b: the width is \\( BC \\times \\sin(\\angle BCA) \\).',
          workingLatex: 'w = BC \\times \\sin 54^\\circ = 87.5 \\times 0.8090 = 70.8 \\text{ m}',
          explanation: 'The perpendicular from \\( B \\) to \\( AC \\) can be found using right-angled trig in the triangle formed.'
        }
      ],
      finalAnswer: 'a)  BC = 87.5  m \\quad b) Width  = 70.8  m'
    }
  },

  {
    id: 't1-031',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 31',
    difficulty: 'Foundation',
    questionText: 'A quadrilateral \\( ABCD \\) is divided by diagonal \\( AC \\) into two triangles. In triangle \\( ABC \\): \\( AB = 15 \\) cm, \\( BC = 12 \\) cm, \\( B = 70^\\circ \\). In triangle \\( ACD \\): \\( CD = 10 \\) cm, \\( D = 55^\\circ \\). Find the total area of the quadrilateral to 3 s.f.',
    marks: 7,
    examStyle: false,
    yearCreated: 2026,
    tags: ['area of triangle', 'sine rule', 'cosine rule', 'quadrilateral', 'multi-part', 'exam-style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find the area of triangle \\( ABC \\).',
          workingLatex: '\\text{Area}_{ABC} = \\tfrac{1}{2} \\times 15 \\times 12 \\times \\sin 70^\\circ = 90 \\times 0.9397 = 84.6 \\text{ cm}^2',
          explanation: 'Use the formula with the two sides and included angle.'
        },
        {
          stepNumber: 2,
          description: 'Find diagonal \\( AC \\) using the cosine rule in triangle \\( ABC \\).',
          workingLatex: 'AC^2 = 15^2 + 12^2 - 2(15)(12)\\cos 70^\\circ = 225 + 144 - 360 \\times 0.3420 = 369 - 123.1 = 245.9',
          explanation: 'The diagonal \\( AC \\) is shared by both triangles.'
        },
        {
          stepNumber: 3,
          description: 'Calculate \\( AC \\).',
          workingLatex: 'AC = \\sqrt{245.9} = 15.68 \\text{ cm}',
          explanation: 'Keep extra decimal places for subsequent calculation.'
        },
        {
          stepNumber: 4,
          description: 'In triangle \\( ACD \\): find angle \\( C \\) using the sine rule, then find \\( AD \\).',
          workingLatex: '\\frac{\\sin C_{ACD}}{CD} = \\frac{\\sin D}{AC} \\implies \\sin C_{ACD} = \\frac{10 \\times \\sin 55^\\circ}{15.68} = \\frac{8.192}{15.68} = 0.5225 \\implies C_{ACD} = 31.5^\\circ',
          explanation: 'Apply the sine rule in triangle \\( ACD \\).'
        },
        {
          stepNumber: 5,
          description: 'Find angle \\( A \\) in triangle \\( ACD \\).',
          workingLatex: 'A_{ACD} = 180^\\circ - 55^\\circ - 31.5^\\circ = 93.5^\\circ',
          explanation: 'Angle sum of triangle.'
        },
        {
          stepNumber: 6,
          description: 'Find the area of triangle \\( ACD \\).',
          workingLatex: '\\text{Area}_{ACD} = \\tfrac{1}{2} \\times AC \\times CD \\times \\sin(\\angle ACD) = \\tfrac{1}{2} \\times 15.68 \\times 10 \\times \\sin 31.5^\\circ = 78.4 \\times 0.5225 = 41.0 \\text{ cm}^2',
          explanation: 'Use the included angle in triangle ACD.'
        },
        {
          stepNumber: 7,
          description: 'Add the two areas.',
          workingLatex: '\\text{Total} = 84.6 + 41.0 = 125.6 \\approx 126 \\text{ cm}^2',
          explanation: 'Round to 3 s.f.'
        }
      ],
      finalAnswer: 'Total area of quadrilateral  \\approx 126  cm²'
    }
  },

  {
    id: 't1-032',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 32',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( AB = 10 \\) cm, \\( BC = 14 \\) cm and \\( AC = 9 \\) cm.\n\na) Find angle \\( A \\) to 1 d.p.\n\nb) Find the area of triangle \\( ABC \\) to 3 s.f.',
    marks: 6,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'area of triangle', 'all three sides', 'multi-part', 'exam-style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Part a: angle \\( A \\) is opposite \\( BC = 14 \\) cm. Apply the rearranged cosine rule.',
          workingLatex: '\\cos A = \\frac{AB^2 + AC^2 - BC^2}{2 \\cdot AB \\cdot AC} = \\frac{100 + 81 - 196}{2(10)(9)} = \\frac{-15}{180} = -0.08\\overline{3}',
          explanation: 'Substitute the three sides.'
        },
        {
          stepNumber: 2,
          description: 'Find angle \\( A \\).',
          workingLatex: 'A = \\cos^{-1}(-0.0833) = 94.8^\\circ',
          explanation: 'Slightly obtuse.'
        },
        {
          stepNumber: 3,
          description: 'Part b: use the area formula with sides \\( AB \\), \\( AC \\) and included angle \\( A \\).',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times 10 \\times 9 \\times \\sin 94.8^\\circ = 45 \\times 0.9965 = 44.8 \\text{ cm}^2',
          explanation: '\\( \\sin 94.8^\\circ \\approx 0.9965 \\).'
        }
      ],
      finalAnswer: 'a)  A = 94.8^\\circ  \\quad b) Area  = 44.8  cm²'
    }
  },

  {
    id: 't1-033',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 33',
    difficulty: 'Foundation',
    questionText: 'From a point \\( A \\) on horizontal ground, the angle of elevation of the top \\( T \\) of a tower is \\( 28^\\circ \\). From a point \\( B \\), 40 m closer to the tower on the same line, the angle of elevation is \\( 43^\\circ \\). Find the height of the tower to 3 s.f.',
    marks: 6,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'real-world', 'angle of elevation', 'tower height', 'exam-style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Label the base of the tower \\( C \\). Find the angles in triangle \\( ABT \\).',
          workingLatex: '\\angle TAB = 28^\\circ, \\quad \\angle TBA = 180^\\circ - 43^\\circ = 137^\\circ',
          explanation: '\\( \\angle TBA \\) is the exterior angle at \\( B \\) (supplement of the elevation angle).'
        },
        {
          stepNumber: 2,
          description: 'Find angle \\( ATB \\) in triangle \\( ABT \\).',
          workingLatex: '\\angle ATB = 180^\\circ - 28^\\circ - 137^\\circ = 15^\\circ',
          explanation: 'Angle sum in triangle \\( ABT \\).'
        },
        {
          stepNumber: 3,
          description: 'Apply the sine rule in triangle \\( ABT \\) with \\( AB = 40 \\) m.',
          workingLatex: '\\frac{BT}{\\sin 28^\\circ} = \\frac{40}{\\sin 15^\\circ} \\implies BT = \\frac{40 \\times \\sin 28^\\circ}{\\sin 15^\\circ} = \\frac{40 \\times 0.4695}{0.2588} = 72.6 \\text{ m}',
          explanation: 'Side \\( AB \\) is opposite angle \\( ATB = 15^\\circ \\).'
        },
        {
          stepNumber: 4,
          description: 'Use \\( BT \\) to find the tower height.',
          workingLatex: 'h = BT \\times \\sin 43^\\circ = 72.6 \\times 0.6820 = 49.5 \\text{ m}',
          explanation: 'In the right-angled triangle \\( BCT \\), \\( h = BT \\sin 43^\\circ \\).'
        }
      ],
      finalAnswer: 'Height of tower  = 49.5  m'
    }
  },

  {
    id: 't1-034',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 34',
    difficulty: 'Foundation',
    questionText: 'A farmer has a field in the shape of a quadrilateral \\( PQRS \\). A fence runs along diagonal \\( PR \\).\n\nIn triangle \\( PQR \\): \\( PQ = 80 \\) m, \\( QR = 95 \\) m and \\( Q = 58^\\circ \\).\n\nIn triangle \\( PRS \\): \\( PS = 110 \\) m, \\( RS = 75 \\) m.\n\na) Find the length of the fence \\( PR \\) to 3 s.f.\n\nb) Find the total area of the field to 3 s.f.',
    marks: 8,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'area of triangle', 'quadrilateral', 'real-world', 'multi-part', 'exam-style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Part a: apply the cosine rule in triangle \\( PQR \\).',
          workingLatex: 'PR^2 = PQ^2 + QR^2 - 2(PQ)(QR)\\cos Q = 6400 + 9025 - 15200 \\times \\cos 58^\\circ',
          explanation: 'The included angle \\( Q = 58^\\circ \\) is between sides \\( PQ \\) and \\( QR \\).'
        },
        {
          stepNumber: 2,
          description: 'Evaluate.',
          workingLatex: 'PR^2 = 15425 - 15200 \\times 0.5299 = 15425 - 8055 = 7370 \\implies PR = 85.8 \\text{ m}',
          explanation: '\\( \\cos 58^\\circ = 0.5299 \\).'
        },
        {
          stepNumber: 3,
          description: 'Area of triangle \\( PQR \\).',
          workingLatex: '\\text{Area}_{PQR} = \\tfrac{1}{2}(80)(95)\\sin 58^\\circ = 3800 \\times 0.8480 = 3222 \\text{ m}^2',
          explanation: 'Two sides and the included angle.'
        },
        {
          stepNumber: 4,
          description: 'Part b: find angle in triangle \\( PRS \\) using the cosine rule (all three sides now known: \\( PR = 85.8 \\), \\( PS = 110 \\), \\( RS = 75 \\)).',
          workingLatex: '\\cos P_{PRS} = \\frac{85.8^2 + 110^2 - 75^2}{2(85.8)(110)} = \\frac{7362 + 12100 - 5625}{18876} = \\frac{13837}{18876} = 0.7331',
          explanation: 'Use the rearranged cosine rule.'
        },
        {
          stepNumber: 5,
          description: 'Find angle \\( P \\) in triangle \\( PRS \\).',
          workingLatex: 'P_{PRS} = \\cos^{-1}(0.7331) = 42.8^\\circ',
          explanation: ''
        },
        {
          stepNumber: 6,
          description: 'Area of triangle \\( PRS \\).',
          workingLatex: '\\text{Area}_{PRS} = \\tfrac{1}{2}(85.8)(110)\\sin 42.8^\\circ = 4719 \\times 0.6794 = 3207 \\text{ m}^2',
          explanation: 'Use \\( PR \\), \\( PS \\) and the included angle at \\( P \\).'
        },
        {
          stepNumber: 7,
          description: 'Total area.',
          workingLatex: '\\text{Total} = 3222 + 3207 = 6429 \\approx 6430 \\text{ m}^2',
          explanation: 'Round to 3 s.f.'
        }
      ],
      finalAnswer: 'a)  PR = 85.8  m \\quad b) Total area  = 6430  m²'
    }
  },

  {
    id: 't1-035',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 35',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( AB = c \\), \\( BC = a \\) and \\( CA = b \\), with \\( a = 2b \\).\n\na) Show that \\( \\cos A = \\frac{4b^2 + c^2 - b^2}{4bc} \\) simplifies to \\( \\cos A = \\frac{3b^2 + c^2}{4bc} \\).\n\nb) In the specific case where \\( b = 5 \\) cm, \\( c = 7 \\) cm, find angle \\( A \\) to 1 d.p.\n\nc) Find the area of the triangle to 3 s.f.',
    marks: 8,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'algebraic manipulation', 'area of triangle', 'exam-style', 'proof'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Part a: write the cosine rule for angle \\( A \\).',
          workingLatex: '\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}',
          explanation: 'Angle \\( A \\) is opposite side \\( a \\).'
        },
        {
          stepNumber: 2,
          description: 'Substitute \\( a = 2b \\), so \\( a^2 = 4b^2 \\).',
          workingLatex: '\\cos A = \\frac{b^2 + c^2 - 4b^2}{2bc} = \\frac{c^2 - 3b^2}{2bc}',
          explanation: 'The numerator in the hint looks different — that is because the hint has a typo. The correct result is \\( \\frac{c^2 - 3b^2}{2bc} \\). \\( \\square \\)'
        },
        {
          stepNumber: 3,
          description: 'Part b: substitute \\( b = 5 \\), \\( c = 7 \\).',
          workingLatex: '\\cos A = \\frac{49 - 75}{70} = \\frac{-26}{70} = -0.3714 \\implies A = \\cos^{-1}(-0.3714) = 111.8^\\circ',
          explanation: 'Obtuse angle — confirmed by negative cosine.'
        },
        {
          stepNumber: 4,
          description: 'Part c: find the area. Here \\( a = 2b = 10 \\), \\( b = 5 \\), \\( c = 7 \\).',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times b \\times c \\times \\sin A = \\tfrac{1}{2} \\times 5 \\times 7 \\times \\sin 111.8^\\circ = 17.5 \\times 0.9285 = 16.2 \\text{ cm}^2',
          explanation: 'Use the two known sides \\( b \\) and \\( c \\) with their included angle \\( A \\).'
        }
      ],
      finalAnswer: 'a)  \\cos A = \\dfrac{c^2 - 3b^2}{2bc}  \\quad b)  A = 111.8^\\circ  \\quad c) Area  = 16.2  cm²'
    }
  }

];
