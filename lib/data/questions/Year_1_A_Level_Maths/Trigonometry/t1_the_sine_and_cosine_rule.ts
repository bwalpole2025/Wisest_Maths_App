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
          description: 'Sketch the triangle and label the given parts.',
          workingLatex: '\\text{Triangle } ABC: \\ A = 55^\\circ,\\ B = 72^\\circ,\\ a = BC = 18\\text{ cm}',
          explanation: 'Recall the lowercase convention: side \\( a \\) is opposite angle \\( A \\), so \\( a = BC \\); side \\( b = AC \\) is opposite angle \\( B \\). We are asked for \\( b \\).',
          diagram: {
            xMin: -3, xMax: 21, yMin: -3, yMax: 20, hideAxes: true,
            lines: [
              { from: [0, 0], to: [17.55, 0], label: 'c', labelAt: [8.77, -1.2] },
              { from: [17.55, 0], to: [11.99, 17.12], label: 'a = 18 cm', labelAt: [16.0, 9.0] },
              { from: [11.99, 17.12], to: [0, 0], label: 'b = ?', labelAt: [4.5, 9.5] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [17.55, 0], label: 'B', labelAnchor: 'se' },
              { at: [11.99, 17.12], label: 'C', labelAnchor: 'n' },
              { at: [2.504, 1.303], label: '55°', labelAnchor: 'center', r: 0 },
              { at: [15.267, 1.659], label: '72°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Identify the appropriate rule.',
          workingLatex: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B}',
          explanation: 'Two angles and the side opposite one of them are known. The sine rule directly pairs each side with its opposite angle, so it is the right tool here (the cosine rule would require two sides).',
        },
        {
          stepNumber: 3,
          description: 'Substitute the known values.',
          workingLatex: '\\frac{18}{\\sin 55^\\circ} = \\frac{b}{\\sin 72^\\circ}',
          explanation: 'Place side 18 cm over \\( \\sin 55^\\circ \\) (its opposite angle), and the unknown \\( b \\) over \\( \\sin 72^\\circ \\) (its opposite angle).',
        },
        {
          stepNumber: 4,
          description: 'Rearrange for \\( b \\).',
          workingLatex: 'b = \\frac{18 \\times \\sin 72^\\circ}{\\sin 55^\\circ}',
          explanation: 'Multiply both sides by \\( \\sin 72^\\circ \\) to isolate \\( b \\).',
        },
        {
          stepNumber: 5,
          description: 'Evaluate the sines and compute.',
          workingLatex: 'b = \\frac{18 \\times 0.9511}{0.8192} = \\frac{17.120}{0.8192} = 20.898\\ldots',
          explanation: 'Using a calculator, \\( \\sin 72^\\circ \\approx 0.9511 \\) and \\( \\sin 55^\\circ \\approx 0.8192 \\). Multiply numerator first, then divide.',
        },
        {
          stepNumber: 6,
          description: 'Round to 3 significant figures.',
          workingLatex: 'b \\approx 20.9 \\text{ cm}',
          explanation: 'Keeping a couple of extra decimals during the computation and only rounding at the end avoids accumulated rounding error.',
        },
      ],
      finalAnswer: 'b = 20.9 \\text{ cm}',
    },
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
          description: 'Sketch the triangle and identify which side is opposite which angle.',
          workingLatex: 'PQ = 22\\text{ (opposite } R\\text{)}, \\quad PR = ?\\text{ (opposite } Q\\text{)}',
          explanation: 'A side is named by its two endpoints; the opposite angle is at the third vertex. So \\( PQ \\) sits opposite \\( R \\), \\( PR \\) opposite \\( Q \\), and \\( QR \\) opposite \\( P \\).',
          diagram: {
            xMin: -3, xMax: 25, yMin: -3, yMax: 22, hideAxes: true,
            lines: [
              { from: [0, 0], to: [22, 0], label: '22 cm', labelAt: [11, -1.2] },
              { from: [22, 0], to: [10.18, 11.31], label: 'p = QR', labelAt: [17.5, 6.5] },
              { from: [10.18, 11.31], to: [0, 0], label: 'q = PR = ?', labelAt: [3.5, 6.8] },
            ],
            points: [
              { at: [0, 0], label: 'P', labelAnchor: 'sw' },
              { at: [22, 0], label: 'Q', labelAnchor: 'se' },
              { at: [10.18, 11.31], label: 'R', labelAnchor: 'n' },
              { at: [2.447, 1.09], label: '48°', labelAnchor: 'center', r: 0 },
              { at: [19.514, 0.998], label: '65°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Find the missing angle \\( R \\).',
          workingLatex: 'R = 180^\\circ - 48^\\circ - 65^\\circ = 67^\\circ',
          explanation: 'The angles in any triangle sum to \\( 180^\\circ \\). We need \\( R \\) because the known side \\( PQ \\) sits opposite it — it gives us the "known pair" the sine rule needs.',
        },
        {
          stepNumber: 3,
          description: 'Set up the sine rule using the side–angle pairs.',
          workingLatex: '\\frac{PQ}{\\sin R} = \\frac{PR}{\\sin Q}',
          explanation: 'Pair each side with its opposite angle. We deliberately pick the pair that includes the known side and the pair that includes the unknown.',
        },
        {
          stepNumber: 4,
          description: 'Substitute the numerical values.',
          workingLatex: '\\frac{22}{\\sin 67^\\circ} = \\frac{PR}{\\sin 65^\\circ}',
          explanation: 'Place 22 over \\( \\sin 67^\\circ \\) and \\( PR \\) over \\( \\sin 65^\\circ \\).',
        },
        {
          stepNumber: 5,
          description: 'Rearrange to make \\( PR \\) the subject.',
          workingLatex: 'PR = \\frac{22 \\times \\sin 65^\\circ}{\\sin 67^\\circ}',
          explanation: 'Multiply both sides by \\( \\sin 65^\\circ \\).',
        },
        {
          stepNumber: 6,
          description: 'Evaluate.',
          workingLatex: 'PR = \\frac{22 \\times 0.9063}{0.9205} = \\frac{19.939}{0.9205} = 21.66\\ldots',
          explanation: '\\( \\sin 65^\\circ \\approx 0.9063 \\) and \\( \\sin 67^\\circ \\approx 0.9205 \\).',
        },
        {
          stepNumber: 7,
          description: 'Round to 3 s.f.',
          workingLatex: 'PR \\approx 21.7 \\text{ cm}',
          explanation: 'Three significant figures: \\( 21.66\\ldots \\to 21.7 \\) cm.',
        },
      ],
      finalAnswer: '\\( PR \\approx 21.7 \\text{ cm} \\)',
    },
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
          description: 'Sketch and identify the side–angle pairs.',
          workingLatex: 'a \\leftrightarrow A = 35^\\circ, \\quad c = 30 \\leftrightarrow C = 80^\\circ',
          explanation: 'Side \\( a \\) is opposite \\( A \\); side \\( c \\) is opposite \\( C \\). Both angles are known and one side opposite a known angle is given, which is the sine-rule setup.',
          diagram: {
            xMin: -3, xMax: 22, yMin: -3, yMax: 22, hideAxes: true,
            lines: [
              { from: [0, 0], to: [18.52, 0], label: 'b', labelAt: [9.26, -1.2] },
              { from: [18.52, 0], to: [14.32, 10.03], label: 'a = ?', labelAt: [17.5, 6.0] },
              { from: [14.32, 10.03], to: [0, 0], label: 'c = 30 m', labelAt: [5.5, 6.5] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [18.52, 0], label: 'B', labelAnchor: 'se' },
              { at: [14.32, 10.03], label: 'C', labelAnchor: 'n' },
              { at: [2.235, 0.705], label: '35°', labelAnchor: 'center', r: 0 },
              { at: [16.569, 1.298], label: '65°', labelAnchor: 'center', r: 0 },
              { at: [13.669, 7.778], label: '80°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Write the sine rule for the pair we need.',
          workingLatex: '\\frac{a}{\\sin A} = \\frac{c}{\\sin C}',
          explanation: 'Only the two pairs involving the unknown side and the known side are needed — the other pair is unnecessary here.',
        },
        {
          stepNumber: 3,
          description: 'Substitute.',
          workingLatex: '\\frac{a}{\\sin 35^\\circ} = \\frac{30}{\\sin 80^\\circ}',
          explanation: 'Plug in the values directly.',
        },
        {
          stepNumber: 4,
          description: 'Rearrange for \\( a \\).',
          workingLatex: 'a = \\frac{30 \\times \\sin 35^\\circ}{\\sin 80^\\circ}',
          explanation: 'Multiply both sides by \\( \\sin 35^\\circ \\).',
        },
        {
          stepNumber: 5,
          description: 'Evaluate.',
          workingLatex: 'a = \\frac{30 \\times 0.5736}{0.9848} = \\frac{17.207}{0.9848} = 17.47\\ldots',
          explanation: '\\( \\sin 35^\\circ \\approx 0.5736 \\); \\( \\sin 80^\\circ \\approx 0.9848 \\).',
        },
        {
          stepNumber: 6,
          description: 'Round to 3 s.f.',
          workingLatex: 'a \\approx 17.5 \\text{ m}',
          explanation: 'Three significant figures.',
        },
      ],
      finalAnswer: '\\( a \\approx 17.5 \\text{ m} \\)',
    },
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
          description: 'Sketch the triangle with the given data.',
          workingLatex: 'DE = 9.5,\\ D = 47^\\circ,\\ E = 58^\\circ',
          explanation: 'Side \\( DE \\) is opposite \\( F \\); side \\( EF \\) is opposite \\( D \\); side \\( DF \\) is opposite \\( E \\). We are asked for \\( EF \\).',
          diagram: {
            xMin: -2, xMax: 12, yMin: -2, yMax: 9, hideAxes: true,
            lines: [
              { from: [0, 0], to: [9.5, 0], label: 'DE = 9.5 cm', labelAt: [4.75, -0.8] },
              { from: [9.5, 0], to: [4.83, 5.21], label: 'EF = ?', labelAt: [7.7, 3.0] },
              { from: [4.83, 5.21], to: [0, 0], label: 'DF', labelAt: [2.0, 3.3] },
            ],
            points: [
              { at: [0, 0], label: 'D', labelAnchor: 'sw' },
              { at: [9.5, 0], label: 'E', labelAnchor: 'se' },
              { at: [4.83, 5.21], label: 'F', labelAnchor: 'n' },
              { at: [1.081, 0.472], label: '47°', labelAnchor: 'center', r: 0 },
              { at: [8.423, 0.481], label: '58°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Find the third angle.',
          workingLatex: 'F = 180^\\circ - 47^\\circ - 58^\\circ = 75^\\circ',
          explanation: 'We need \\( F \\) because the known side \\( DE \\) is opposite \\( F \\) — that pair anchors the sine rule.',
        },
        {
          stepNumber: 3,
          description: 'Set up the sine rule using the relevant pair of sides and angles.',
          workingLatex: '\\frac{DE}{\\sin F} = \\frac{EF}{\\sin D}',
          explanation: 'Each side is divided by the sine of its opposite angle.',
        },
        {
          stepNumber: 4,
          description: 'Substitute.',
          workingLatex: '\\frac{9.5}{\\sin 75^\\circ} = \\frac{EF}{\\sin 47^\\circ}',
          explanation: 'Plug in known values.',
        },
        {
          stepNumber: 5,
          description: 'Make \\( EF \\) the subject.',
          workingLatex: 'EF = \\frac{9.5 \\times \\sin 47^\\circ}{\\sin 75^\\circ}',
          explanation: 'Multiply both sides by \\( \\sin 47^\\circ \\).',
        },
        {
          stepNumber: 6,
          description: 'Evaluate.',
          workingLatex: 'EF = \\frac{9.5 \\times 0.7314}{0.9659} = \\frac{6.948}{0.9659} = 7.193\\ldots',
          explanation: '\\( \\sin 47^\\circ \\approx 0.7314 \\); \\( \\sin 75^\\circ \\approx 0.9659 \\).',
        },
        {
          stepNumber: 7,
          description: 'Round to 3 s.f.',
          workingLatex: 'EF \\approx 7.19 \\text{ cm}',
          explanation: 'Three significant figures.',
        },
      ],
      finalAnswer: '\\( EF \\approx 7.19 \\text{ cm} \\)',
    },
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
          description: 'Sketch and label.',
          workingLatex: 'GH = 14,\\ G = 62^\\circ,\\ H = 44^\\circ',
          explanation: 'Side \\( GH \\) is opposite \\( I \\); side \\( GI \\) (the unknown) is opposite \\( H \\); side \\( HI \\) is opposite \\( G \\).',
          diagram: {
            xMin: -3, xMax: 17, yMin: -3, yMax: 13, hideAxes: true,
            lines: [
              { from: [0, 0], to: [14, 0], label: 'GH = 14 cm', labelAt: [7, -1.0] },
              { from: [14, 0], to: [4.73, 8.90], label: 'HI', labelAt: [10.0, 4.5] },
              { from: [4.73, 8.90], to: [0, 0], label: 'GI = ?', labelAt: [1.5, 4.8] },
            ],
            points: [
              { at: [0, 0], label: 'G', labelAnchor: 'sw' },
              { at: [14, 0], label: 'H', labelAnchor: 'se' },
              { at: [4.73, 8.9], label: 'I', labelAnchor: 'n' },
              { at: [1.583, 0.951], label: '62°', labelAnchor: 'center', r: 0 },
              { at: [12.287, 0.689], label: '44°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Find the third angle.',
          workingLatex: 'I = 180^\\circ - 62^\\circ - 44^\\circ = 74^\\circ',
          explanation: 'Angle sum in any triangle is \\( 180^\\circ \\). \\( I \\) is the angle opposite the known side \\( GH \\).',
        },
        {
          stepNumber: 3,
          description: 'Write the sine rule for the pair we need.',
          workingLatex: '\\frac{GH}{\\sin I} = \\frac{GI}{\\sin H}',
          explanation: 'We use the side–angle pair containing the known side \\( GH \\) and the pair containing the unknown side \\( GI \\).',
        },
        {
          stepNumber: 4,
          description: 'Substitute.',
          workingLatex: '\\frac{14}{\\sin 74^\\circ} = \\frac{GI}{\\sin 44^\\circ}',
          explanation: '',
        },
        {
          stepNumber: 5,
          description: 'Rearrange.',
          workingLatex: 'GI = \\frac{14 \\times \\sin 44^\\circ}{\\sin 74^\\circ}',
          explanation: 'Multiply both sides by \\( \\sin 44^\\circ \\).',
        },
        {
          stepNumber: 6,
          description: 'Evaluate.',
          workingLatex: 'GI = \\frac{14 \\times 0.6947}{0.9613} = \\frac{9.726}{0.9613} = 10.12\\ldots',
          explanation: '\\( \\sin 44^\\circ \\approx 0.6947 \\); \\( \\sin 74^\\circ \\approx 0.9613 \\).',
        },
        {
          stepNumber: 7,
          description: 'Round.',
          workingLatex: 'GI \\approx 10.1 \\text{ cm}',
          explanation: 'Three significant figures.',
        },
      ],
      finalAnswer: '\\( GI \\approx 10.1 \\text{ cm} \\)',
    },
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
          description: 'Sketch the triangle with the given data.',
          workingLatex: 'AB = 20,\\ A = 50^\\circ,\\ B = 60^\\circ',
          explanation: 'Side \\( AB \\) (\\( = c \\)) is opposite \\( C \\); side \\( BC \\) (\\( = a \\)) is opposite \\( A \\); side \\( AC \\) (\\( = b \\)) is opposite \\( B \\).',
          diagram: {
            xMin: -3, xMax: 23, yMin: -3, yMax: 18, hideAxes: true,
            lines: [
              { from: [0, 0], to: [20, 0], label: 'AB = c = 20 cm', labelAt: [10, -1.2] },
              { from: [20, 0], to: [9.21, 10.99], label: 'BC = a = ?', labelAt: [16.0, 6.5] },
              { from: [9.21, 10.99], to: [0, 0], label: 'AC = b = ?', labelAt: [2.5, 6.5] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [20, 0], label: 'B', labelAnchor: 'se' },
              { at: [9.21, 10.99], label: 'C', labelAnchor: 'n' },
              { at: [2.254, 1.052], label: '50°', labelAnchor: 'center', r: 0 },
              { at: [17.707, 0.962], label: '60°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Find angle \\( C \\).',
          workingLatex: 'C = 180^\\circ - 50^\\circ - 60^\\circ = 70^\\circ',
          explanation: 'Angle sum of a triangle.',
        },
        {
          stepNumber: 3,
          description: 'Apply the sine rule to find \\( BC \\).',
          workingLatex: '\\frac{BC}{\\sin A} = \\frac{AB}{\\sin C} \\implies BC = \\frac{20 \\times \\sin 50^\\circ}{\\sin 70^\\circ}',
          explanation: '\\( BC \\) is opposite \\( A = 50^\\circ \\); \\( AB \\) is opposite \\( C = 70^\\circ \\).',
        },
        {
          stepNumber: 4,
          description: 'Evaluate \\( BC \\).',
          workingLatex: 'BC = \\frac{20 \\times 0.7660}{0.9397} = \\frac{15.321}{0.9397} = 16.304\\ldots \\approx 16.3 \\text{ cm}',
          explanation: '\\( \\sin 50^\\circ \\approx 0.7660 \\); \\( \\sin 70^\\circ \\approx 0.9397 \\).',
        },
        {
          stepNumber: 5,
          description: 'Apply the sine rule again to find \\( AC \\).',
          workingLatex: 'AC = \\frac{20 \\times \\sin 60^\\circ}{\\sin 70^\\circ}',
          explanation: '\\( AC \\) is opposite \\( B = 60^\\circ \\). Use the same anchor pair \\( (AB,\\sin C) \\).',
        },
        {
          stepNumber: 6,
          description: 'Evaluate \\( AC \\).',
          workingLatex: 'AC = \\frac{20 \\times 0.8660}{0.9397} = \\frac{17.321}{0.9397} = 18.432\\ldots \\approx 18.4 \\text{ cm}',
          explanation: '\\( \\sin 60^\\circ \\approx 0.8660 \\).',
        },
      ],
      finalAnswer: '\\( C = 70^\\circ,\\ BC \\approx 16.3 \\text{ cm},\\ AC \\approx 18.4 \\text{ cm} \\)',
    },
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
          description: 'Sketch the triangle and identify the configuration.',
          workingLatex: 'JL = 32,\\ KL = 25,\\ L = 54^\\circ\\ \\text{(included angle)}',
          explanation: 'Two sides meeting at the same vertex \\( L \\) are given, along with the angle at \\( L \\) between them. This is the SAS pattern — use the cosine rule.',
          diagram: {
            xMin: -3, xMax: 35, yMin: -3, yMax: 22, hideAxes: true,
            lines: [
              { from: [0, 0], to: [32, 0], label: 'JL = 32 cm', labelAt: [16, -1.2] },
              { from: [0, 0], to: [14.69, 20.23], label: 'KL = 25 cm', labelAt: [6.0, 11.5] },
              { from: [32, 0], to: [14.69, 20.23], label: 'JK = ?', labelAt: [25.5, 11.0] },
            ],
            points: [
              { at: [0, 0], label: 'L', labelAnchor: 'sw' },
              { at: [32, 0], label: 'J', labelAnchor: 'se' },
              { at: [14.69, 20.23], label: 'K', labelAnchor: 'n' },
              { at: [3.725, 1.899], label: '54°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Write the cosine rule for the unknown side opposite angle \\( L \\).',
          workingLatex: 'JK^2 = JL^2 + KL^2 - 2 \\cdot JL \\cdot KL \\cdot \\cos L',
          explanation: 'The cosine rule \\( a^2 = b^2 + c^2 - 2bc\\cos A \\) uses the two sides meeting at \\( A \\) and the angle at \\( A \\). Here that angle is \\( L \\) and the side opposite is \\( JK \\).',
        },
        {
          stepNumber: 3,
          description: 'Substitute the values.',
          workingLatex: 'JK^2 = 32^2 + 25^2 - 2(32)(25)\\cos 54^\\circ',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Compute the squares and the product.',
          workingLatex: 'JK^2 = 1024 + 625 - 1600\\cos 54^\\circ = 1649 - 1600\\cos 54^\\circ',
          explanation: 'Collect the constant terms before applying the cosine.',
        },
        {
          stepNumber: 5,
          description: 'Apply \\( \\cos 54^\\circ \\) and simplify.',
          workingLatex: 'JK^2 = 1649 - 1600 \\times 0.5878 = 1649 - 940.5 = 708.5',
          explanation: '\\( \\cos 54^\\circ \\approx 0.5878 \\).',
        },
        {
          stepNumber: 6,
          description: 'Take the positive square root.',
          workingLatex: 'JK = \\sqrt{708.5} = 26.62\\ldots \\approx 26.6 \\text{ cm}',
          explanation: 'Length is positive, so we discard the negative root.',
        },
      ],
      finalAnswer: '\\( JK \\approx 26.6 \\text{ cm} \\)',
    },
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
          description: 'Sketch and identify the SAS configuration.',
          workingLatex: 'MN = 11,\\ NP = 15,\\ N = 38^\\circ',
          explanation: '\\( N \\) is the angle between the two known sides \\( MN \\) and \\( NP \\); \\( MP \\) is the side opposite. Cosine rule applies.',
          diagram: {
            xMin: -3, xMax: 17, yMin: -3, yMax: 12, hideAxes: true,
            lines: [
              { from: [0, 0], to: [15, 0], label: 'NP = 15 cm', labelAt: [7.5, -1.0] },
              { from: [0, 0], to: [8.67, 6.77], label: 'MN = 11 cm', labelAt: [3.5, 4.0] },
              { from: [15, 0], to: [8.67, 6.77], label: 'MP = ?', labelAt: [13.0, 4.0] },
            ],
            points: [
              { at: [0, 0], label: 'N', labelAnchor: 'sw' },
              { at: [15, 0], label: 'P', labelAnchor: 'se' },
              { at: [8.67, 6.77], label: 'M', labelAnchor: 'n' },
              { at: [1.667, 0.574], label: '38°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Write the cosine rule.',
          workingLatex: 'MP^2 = MN^2 + NP^2 - 2 \\cdot MN \\cdot NP \\cdot \\cos N',
          explanation: 'The side opposite the included angle is the one we square on the left.',
        },
        {
          stepNumber: 3,
          description: 'Substitute.',
          workingLatex: 'MP^2 = 11^2 + 15^2 - 2(11)(15)\\cos 38^\\circ',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Simplify the constants.',
          workingLatex: 'MP^2 = 121 + 225 - 330\\cos 38^\\circ = 346 - 330\\cos 38^\\circ',
          explanation: '',
        },
        {
          stepNumber: 5,
          description: 'Apply \\( \\cos 38^\\circ \\).',
          workingLatex: 'MP^2 = 346 - 330 \\times 0.7880 = 346 - 260.04 = 85.96',
          explanation: '\\( \\cos 38^\\circ \\approx 0.7880 \\).',
        },
        {
          stepNumber: 6,
          description: 'Take the square root.',
          workingLatex: 'MP = \\sqrt{85.96} = 9.272\\ldots \\approx 9.27 \\text{ cm}',
          explanation: 'Round to 3 s.f.',
        },
      ],
      finalAnswer: '\\( MP \\approx 9.27 \\text{ cm} \\)',
    },
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
          description: 'Sketch the triangle (note that \\( S \\) is obtuse).',
          workingLatex: 'RS = 7,\\ ST = 10,\\ S = 120^\\circ',
          explanation: 'Because \\( S \\) is obtuse, the side \\( RT \\) opposite it will be the longest side. Cosine rule applies (SAS).',
          diagram: {
            xMin: -6, xMax: 12, yMin: -3, yMax: 8, hideAxes: true,
            lines: [
              { from: [0, 0], to: [10, 0], label: 'ST = 10 cm', labelAt: [5, -1.0] },
              { from: [0, 0], to: [-3.5, 6.06], label: 'RS = 7 cm', labelAt: [-3.5, 3.0] },
              { from: [10, 0], to: [-3.5, 6.06], label: 'RT = ?', labelAt: [3.5, 4.0] },
            ],
            points: [
              { at: [0, 0], label: 'S', labelAnchor: 's' },
              { at: [10, 0], label: 'T', labelAnchor: 'se' },
              { at: [-3.5, 6.06], label: 'R', labelAnchor: 'nw' },
              { at: [0.795, 1.377], label: '120°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Write the cosine rule.',
          workingLatex: 'RT^2 = RS^2 + ST^2 - 2 \\cdot RS \\cdot ST \\cdot \\cos S',
          explanation: '\\( S \\) is included between \\( RS \\) and \\( ST \\), and \\( RT \\) is opposite.',
        },
        {
          stepNumber: 3,
          description: 'Recall \\( \\cos 120^\\circ \\).',
          workingLatex: '\\cos 120^\\circ = -\\tfrac{1}{2} = -0.5',
          explanation: 'For obtuse angles the cosine is negative, so the subtraction \\( -2bc\\cos A \\) becomes an addition.',
        },
        {
          stepNumber: 4,
          description: 'Substitute.',
          workingLatex: 'RT^2 = 49 + 100 - 2(7)(10)(-0.5) = 149 - (-70)',
          explanation: '\\( -2(7)(10) = -140 \\); multiplied by \\( -0.5 \\) gives \\( +70 \\).',
        },
        {
          stepNumber: 5,
          description: 'Simplify.',
          workingLatex: 'RT^2 = 149 + 70 = 219',
          explanation: 'A double-negative becomes positive — this is why obtuse-angle triangles have the longer opposite side.',
        },
        {
          stepNumber: 6,
          description: 'Square root.',
          workingLatex: 'RT = \\sqrt{219} = 14.80\\ldots \\approx 14.8 \\text{ cm}',
          explanation: 'Round to 3 s.f.',
        },
      ],
      finalAnswer: '\\( RT \\approx 14.8 \\text{ cm} \\)',
    },
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
          description: 'Sketch with the slightly obtuse angle at \\( V \\).',
          workingLatex: 'UV = 8.4,\\ VW = 12.6,\\ V = 95^\\circ',
          explanation: 'Two sides meeting at \\( V \\) with included angle: SAS, so use the cosine rule.',
          diagram: {
            xMin: -3, xMax: 15, yMin: -3, yMax: 10, hideAxes: true,
            lines: [
              { from: [0, 0], to: [12.6, 0], label: 'VW = 12.6 cm', labelAt: [6.3, -1.0] },
              { from: [0, 0], to: [-0.732, 8.368], label: 'UV = 8.4 cm', labelAt: [-2.2, 4.2] },
              { from: [12.6, 0], to: [-0.732, 8.368], label: 'UW = ?', labelAt: [6.5, 4.5] },
            ],
            points: [
              { at: [0, 0], label: 'V', labelAnchor: 's' },
              { at: [12.6, 0], label: 'W', labelAnchor: 'se' },
              { at: [-0.732, 8.368], label: 'U', labelAnchor: 'nw' },
              { at: [1.241, 1.354], label: '95°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Write the cosine rule.',
          workingLatex: 'UW^2 = UV^2 + VW^2 - 2 \\cdot UV \\cdot VW \\cdot \\cos V',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Substitute the squares.',
          workingLatex: 'UW^2 = 70.56 + 158.76 - 2(8.4)(12.6)\\cos 95^\\circ',
          explanation: '\\( 8.4^2 = 70.56 \\); \\( 12.6^2 = 158.76 \\).',
        },
        {
          stepNumber: 4,
          description: 'Simplify the constant terms.',
          workingLatex: 'UW^2 = 229.32 - 211.68\\cos 95^\\circ',
          explanation: '\\( 70.56 + 158.76 = 229.32 \\) and \\( 2 \\times 8.4 \\times 12.6 = 211.68 \\).',
        },
        {
          stepNumber: 5,
          description: 'Apply \\( \\cos 95^\\circ \\).',
          workingLatex: 'UW^2 = 229.32 - 211.68 \\times (-0.0872) = 229.32 + 18.45 = 247.77',
          explanation: '\\( \\cos 95^\\circ \\approx -0.0872 \\). The negative cosine adds a small amount to the sum.',
        },
        {
          stepNumber: 6,
          description: 'Square root.',
          workingLatex: 'UW = \\sqrt{247.77} = 15.741\\ldots \\approx 15.7 \\text{ cm}',
          explanation: 'Round to 3 s.f.',
        },
      ],
      finalAnswer: '\\( UW \\approx 15.7 \\text{ cm} \\)',
    },
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
          description: 'Draw a sketch with North up. Place the port at \\( P \\); show the two bearings as directed line segments.',
          workingLatex: '\\angle APB = 130^\\circ - 60^\\circ = 70^\\circ',
          explanation: 'Bearings are measured clockwise from north. The angle between the two paths at \\( P \\) is the difference of the two bearings.',
          diagram: {
            xMin: -3, xMax: 22, yMin: -20, yMax: 12, hideAxes: true,
            lines: [
              { from: [0, 0], to: [15.59, 9.00], label: '18 km', labelAt: [6.5, 5.5] },
              { from: [0, 0], to: [18.39, -15.43], label: '24 km', labelAt: [7.5, -8.5] },
              { from: [15.59, 9.00], to: [18.39, -15.43], label: 'd = ?', labelAt: [20.0, -3.5] },
            ],
            points: [
              { at: [0, 0], label: 'P', labelAnchor: 'w' },
              { at: [15.59, 9], label: 'A', labelAnchor: 'n' },
              { at: [18.39, -15.43], label: 'B', labelAnchor: 's' },
              { at: [3.317, -0.29], label: '70°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Identify the SAS configuration in triangle \\( PAB \\).',
          workingLatex: 'PA = 18,\\ PB = 24,\\ \\angle APB = 70^\\circ',
          explanation: 'Two sides and the included angle are now known. Apply the cosine rule to find \\( AB \\).',
        },
        {
          stepNumber: 3,
          description: 'Write the cosine rule.',
          workingLatex: 'AB^2 = PA^2 + PB^2 - 2 \\cdot PA \\cdot PB \\cdot \\cos(\\angle APB)',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Substitute.',
          workingLatex: 'AB^2 = 18^2 + 24^2 - 2(18)(24)\\cos 70^\\circ',
          explanation: '',
        },
        {
          stepNumber: 5,
          description: 'Simplify the constants.',
          workingLatex: 'AB^2 = 324 + 576 - 864\\cos 70^\\circ = 900 - 864\\cos 70^\\circ',
          explanation: '',
        },
        {
          stepNumber: 6,
          description: 'Apply \\( \\cos 70^\\circ \\approx 0.3420 \\).',
          workingLatex: 'AB^2 = 900 - 864 \\times 0.3420 = 900 - 295.49 = 604.51',
          explanation: '',
        },
        {
          stepNumber: 7,
          description: 'Square root.',
          workingLatex: 'AB = \\sqrt{604.51} = 24.59\\ldots \\approx 24.6 \\text{ km}',
          explanation: 'Three significant figures.',
        },
      ],
      finalAnswer: '\\( \\text{Distance between the ships} \\approx 24.6 \\text{ km} \\)',
    },
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
          description: 'Sketch the triangle and label the longest side opposite the angle to find.',
          workingLatex: 'a = 78\\ (\\text{longest}),\\ b = 45,\\ c = 60,\\ \\text{find } A',
          explanation: 'In any triangle the largest angle is always opposite the longest side. Label sides \\( a, b, c \\) with \\( a \\) the longest.',
          diagram: {
            xMin: -3, xMax: 82, yMin: -3, yMax: 50, hideAxes: true,
            lines: [
              { from: [0, 0], to: [78, 0], label: 'a = 78 m', labelAt: [39, -2.5] },
              { from: [0, 0], to: [33.75, 39.69], label: 'c = 60 m', labelAt: [13.0, 22.0] },
              { from: [78, 0], to: [33.75, 39.69], label: 'b = 45 m', labelAt: [60.0, 22.0] },
            ],
            points: [
              { at: [0, 0], label: 'B', labelAnchor: 'sw' },
              { at: [78, 0], label: 'C', labelAnchor: 'se' },
              { at: [33.75, 39.69], label: 'A (largest)', labelAnchor: 'n' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Write the cosine rule rearranged for the angle.',
          workingLatex: '\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}',
          explanation: 'Starting from \\( a^2 = b^2 + c^2 - 2bc\\cos A \\) and solving for \\( \\cos A \\) gives this form, which is the standard way to find an angle given three sides.',
        },
        {
          stepNumber: 3,
          description: 'Substitute the three sides.',
          workingLatex: '\\cos A = \\frac{45^2 + 60^2 - 78^2}{2 \\times 45 \\times 60}',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Compute the squares.',
          workingLatex: '\\cos A = \\frac{2025 + 3600 - 6084}{5400}',
          explanation: '\\( 45^2 = 2025 \\); \\( 60^2 = 3600 \\); \\( 78^2 = 6084 \\). Denominator \\( 2 \\times 45 \\times 60 = 5400 \\).',
        },
        {
          stepNumber: 5,
          description: 'Simplify the numerator.',
          workingLatex: '\\cos A = \\frac{-459}{5400} = -0.0850',
          explanation: '\\( 2025 + 3600 = 5625 \\); \\( 5625 - 6084 = -459 \\). A negative cosine confirms that \\( A \\) is obtuse — consistent with it being the largest angle, which must exceed \\( 60^\\circ \\) in this scalene triangle.',
        },
        {
          stepNumber: 6,
          description: 'Take inverse cosine.',
          workingLatex: 'A = \\cos^{-1}(-0.0850) = 94.876\\ldots^\\circ \\approx 94.9^\\circ',
          explanation: 'Three significant figures.',
        },
      ],
      finalAnswer: '\\( \\text{Largest angle} \\approx 94.9^\\circ \\)',
    },
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
          description: 'Sketch and identify the angle/side pairs.',
          workingLatex: '\\text{Angle } B \\text{ is opposite } AC = 14 \\text{ cm}',
          explanation: 'Angle \\( B \\) is between sides \\( AB \\) and \\( BC \\); the side \\( AC \\) sits across from it. With three sides known, use the cosine-rule formula for an angle.',
          diagram: {
            xMin: -3, xMax: 15, yMin: -3, yMax: 10, hideAxes: true,
            lines: [
              { from: [0, 0], to: [11, 0], label: 'BC = 11 cm', labelAt: [5.5, -1.0] },
              { from: [0, 0], to: [0.273, 8.996], label: 'AB = 9 cm', labelAt: [-1.5, 4.5] },
              { from: [11, 0], to: [0.273, 8.996], label: 'AC = 14 cm', labelAt: [6.5, 5.5] },
            ],
            points: [
              { at: [0, 0], label: 'B', labelAnchor: 'sw' },
              { at: [11, 0], label: 'C', labelAnchor: 'se' },
              { at: [0.273, 8.996], label: 'A', labelAnchor: 'n' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Write the cosine-rule formula for angle \\( B \\).',
          workingLatex: '\\cos B = \\frac{AB^2 + BC^2 - AC^2}{2 \\cdot AB \\cdot BC}',
          explanation: 'The two sides adjacent to \\( B \\) go in the numerator squared (with a + sign); the side opposite \\( B \\) is squared and subtracted.',
        },
        {
          stepNumber: 3,
          description: 'Substitute.',
          workingLatex: '\\cos B = \\frac{9^2 + 11^2 - 14^2}{2 \\times 9 \\times 11}',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Compute the numerator and denominator.',
          workingLatex: '\\cos B = \\frac{81 + 121 - 196}{198} = \\frac{6}{198}',
          explanation: '\\( 81 + 121 = 202 \\); \\( 202 - 196 = 6 \\). Denominator \\( 2 \\times 9 \\times 11 = 198 \\).',
        },
        {
          stepNumber: 5,
          description: 'Simplify.',
          workingLatex: '\\cos B = 0.03030\\ldots',
          explanation: 'A small positive value — angle \\( B \\) will be close to \\( 90^\\circ \\).',
        },
        {
          stepNumber: 6,
          description: 'Take inverse cosine.',
          workingLatex: 'B = \\cos^{-1}(0.03030) = 88.26\\ldots^\\circ \\approx 88.3^\\circ',
          explanation: 'Nearly a right angle, which matches the near-Pythagorean relation \\( 9^2 + 11^2 \\approx 14^2 \\).',
        },
      ],
      finalAnswer: '\\( B \\approx 88.3^\\circ \\)',
    },
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
          description: 'Identify which angle is smallest.',
          workingLatex: '\\text{Smallest angle is opposite the shortest side: } DE = 7 \\implies \\text{find } F',
          explanation: 'Smallest angle is always opposite the shortest side. \\( DE = 7 \\) is the shortest side, and the vertex opposite it is \\( F \\).',
          diagram: {
            xMin: -3, xMax: 15, yMin: -3, yMax: 10, hideAxes: true,
            lines: [
              { from: [0, 0], to: [13, 0], label: 'DF = 13 cm', labelAt: [6.5, -1.0] },
              { from: [0, 0], to: [5.808, 3.918], label: 'DE = 7 cm', labelAt: [2.4, 2.5] },
              { from: [13, 0], to: [5.808, 3.918], label: 'EF = 9 cm', labelAt: [10.2, 2.5] },
            ],
            points: [
              { at: [0, 0], label: 'D', labelAnchor: 'sw' },
              { at: [13, 0], label: 'F (smallest)', labelAnchor: 'se' },
              { at: [5.808, 3.918], label: 'E', labelAnchor: 'n' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Write the cosine rule for \\( F \\).',
          workingLatex: '\\cos F = \\frac{EF^2 + DF^2 - DE^2}{2 \\cdot EF \\cdot DF}',
          explanation: 'The two sides adjacent to \\( F \\) (\\( EF \\) and \\( DF \\)) sit on top with + signs; the opposite side \\( DE \\) is squared and subtracted.',
        },
        {
          stepNumber: 3,
          description: 'Substitute.',
          workingLatex: '\\cos F = \\frac{9^2 + 13^2 - 7^2}{2 \\times 9 \\times 13}',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Compute.',
          workingLatex: '\\cos F = \\frac{81 + 169 - 49}{234} = \\frac{201}{234} = 0.8590',
          explanation: '\\( 81 + 169 = 250 \\); \\( 250 - 49 = 201 \\). Denominator \\( 234 \\).',
        },
        {
          stepNumber: 5,
          description: 'Inverse cosine.',
          workingLatex: 'F = \\cos^{-1}(0.8590) = 30.75\\ldots^\\circ \\approx 30.8^\\circ',
          explanation: 'Round to 1 d.p.',
        },
      ],
      finalAnswer: '\\( \\text{Smallest angle } F \\approx 30.8^\\circ \\)',
    },
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
          description: 'Sketch the triangle and target the largest angle first.',
          workingLatex: 'PQ = 5,\\ QR = 8,\\ PR = 11.\\ \\text{Largest angle is opposite the longest side } PR \\implies \\text{find } Q',
          explanation: 'Finding the largest angle first is good practice: a large angle has cosine close to \\( \\pm 1 \\), so its inverse cosine is well-defined and small numerical errors do not blow up.',
          diagram: {
            xMin: -3, xMax: 13, yMin: -3, yMax: 8, hideAxes: true,
            lines: [
              { from: [0, 0], to: [8, 0], label: 'QR = 8 cm', labelAt: [4, -1.0] },
              { from: [0, 0], to: [-2, 4.583], label: 'PQ = 5 cm', labelAt: [-2.5, 2.5] },
              { from: [8, 0], to: [-2, 4.583], label: 'PR = 11 cm', labelAt: [3.0, 3.5] },
            ],
            points: [
              { at: [0, 0], label: 'Q (largest)', labelAnchor: 's' },
              { at: [8, 0], label: 'R', labelAnchor: 'se' },
              { at: [-2, 4.583], label: 'P', labelAnchor: 'nw' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Apply the cosine rule for \\( Q \\) (opposite \\( PR \\)).',
          workingLatex: '\\cos Q = \\frac{PQ^2 + QR^2 - PR^2}{2 \\cdot PQ \\cdot QR}',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Substitute and simplify.',
          workingLatex: '\\cos Q = \\frac{25 + 64 - 121}{80} = \\frac{-32}{80} = -0.4',
          explanation: 'A negative cosine confirms \\( Q \\) is obtuse.',
        },
        {
          stepNumber: 4,
          description: 'Find \\( Q \\).',
          workingLatex: 'Q = \\cos^{-1}(-0.4) = 113.578\\ldots^\\circ \\approx 113.6^\\circ',
          explanation: '',
        },
        {
          stepNumber: 5,
          description: 'Apply the cosine rule for \\( P \\) (opposite \\( QR = 8 \\)).',
          workingLatex: '\\cos P = \\frac{PQ^2 + PR^2 - QR^2}{2 \\cdot PQ \\cdot PR} = \\frac{25 + 121 - 64}{2 \\times 5 \\times 11}',
          explanation: 'We could also use the sine rule now that we know \\( Q \\), but cosine rule is safer because it tells us unambiguously whether the angle is acute or obtuse.',
        },
        {
          stepNumber: 6,
          description: 'Evaluate.',
          workingLatex: '\\cos P = \\frac{82}{110} = 0.7455 \\implies P = \\cos^{-1}(0.7455) = 41.795\\ldots^\\circ \\approx 41.8^\\circ',
          explanation: '',
        },
        {
          stepNumber: 7,
          description: 'Find \\( R \\) by subtraction.',
          workingLatex: 'R = 180^\\circ - 113.6^\\circ - 41.8^\\circ = 24.6^\\circ',
          explanation: 'Angle sum check is also a quick sanity check on the previous two answers.',
        },
      ],
      finalAnswer: '\\( P \\approx 41.8^\\circ,\\ Q \\approx 113.6^\\circ,\\ R \\approx 24.6^\\circ \\)',
    },
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
          description: 'Sketch and note the configuration.',
          workingLatex: 'Y \\text{ is opposite } XZ = 5.7 \\text{ cm}',
          explanation: 'Side \\( XZ \\) sits across from vertex \\( Y \\); the two sides adjacent to \\( Y \\) are \\( XY \\) and \\( YZ \\).',
          diagram: {
            xMin: -3, xMax: 11, yMin: -3, yMax: 8, hideAxes: true,
            lines: [
              { from: [0, 0], to: [8.1, 0], label: 'YZ = 8.1 cm', labelAt: [4.05, -0.9] },
              { from: [0, 0], to: [3.207, 5.428], label: 'XY = 6.3 cm', labelAt: [0.8, 3.0] },
              { from: [8.1, 0], to: [3.207, 5.428], label: 'XZ = 5.7 cm', labelAt: [6.5, 3.0] },
            ],
            points: [
              { at: [0, 0], label: 'Y', labelAnchor: 'sw' },
              { at: [8.1, 0], label: 'Z', labelAnchor: 'se' },
              { at: [3.207, 5.428], label: 'X', labelAnchor: 'n' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Write the cosine rule for angle \\( Y \\).',
          workingLatex: '\\cos Y = \\frac{XY^2 + YZ^2 - XZ^2}{2 \\cdot XY \\cdot YZ}',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Substitute.',
          workingLatex: '\\cos Y = \\frac{6.3^2 + 8.1^2 - 5.7^2}{2 \\times 6.3 \\times 8.1}',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Compute the squares.',
          workingLatex: '\\cos Y = \\frac{39.69 + 65.61 - 32.49}{102.06}',
          explanation: '\\( 6.3^2 = 39.69 \\); \\( 8.1^2 = 65.61 \\); \\( 5.7^2 = 32.49 \\); \\( 2 \\times 6.3 \\times 8.1 = 102.06 \\).',
        },
        {
          stepNumber: 5,
          description: 'Simplify.',
          workingLatex: '\\cos Y = \\frac{72.81}{102.06} = 0.7134',
          explanation: '',
        },
        {
          stepNumber: 6,
          description: 'Inverse cosine.',
          workingLatex: 'Y = \\cos^{-1}(0.7134) = 44.49\\ldots^\\circ \\approx 44.5^\\circ',
          explanation: 'Round to 1 d.p.',
        },
      ],
      finalAnswer: '\\( Y \\approx 44.5^\\circ \\)',
    },
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
          description: 'Plot the points and identify the angle.',
          workingLatex: 'A(0,0),\\ B(6,0),\\ C(2,5).\\ \\angle ABC \\text{ is at vertex } B',
          explanation: 'The angle \\( ABC \\) is the interior angle at \\( B \\), between sides \\( BA \\) and \\( BC \\). It sits opposite \\( AC \\).',
          diagram: {
            xMin: -1, xMax: 7, yMin: -1, yMax: 6,
            xTicks: [1, 2, 3, 4, 5, 6],
            yTicks: [1, 2, 3, 4, 5],
            lines: [
              // Coordinate grid (light, drawn first so triangle sits on top)
              { from: [1, -1], to: [1, 6], color: '#e5e7eb' },
              { from: [2, -1], to: [2, 6], color: '#e5e7eb' },
              { from: [3, -1], to: [3, 6], color: '#e5e7eb' },
              { from: [4, -1], to: [4, 6], color: '#e5e7eb' },
              { from: [5, -1], to: [5, 6], color: '#e5e7eb' },
              { from: [6, -1], to: [6, 6], color: '#e5e7eb' },
              { from: [-1, 1], to: [7, 1], color: '#e5e7eb' },
              { from: [-1, 2], to: [7, 2], color: '#e5e7eb' },
              { from: [-1, 3], to: [7, 3], color: '#e5e7eb' },
              { from: [-1, 4], to: [7, 4], color: '#e5e7eb' },
              { from: [-1, 5], to: [7, 5], color: '#e5e7eb' },
              // Triangle edges
              { from: [0, 0], to: [6, 0], label: 'AB = 6', labelAt: [3, -0.6] },
              { from: [6, 0], to: [2, 5], label: 'BC = \\sqrt{41}', labelAt: [4.6, 2.8] },
              { from: [2, 5], to: [0, 0], label: 'AC = \\sqrt{29}', labelAt: [0.5, 2.6] },
            ],
            points: [
              { at: [0, 0], label: 'A(0,0)', labelAnchor: 'sw' },
              { at: [6, 0], label: 'B(6,0)', labelAnchor: 'se' },
              { at: [2, 5], label: 'C(2,5)', labelAnchor: 'n' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Find the three side lengths via the distance formula.',
          workingLatex: 'AB = 6, \\quad BC = \\sqrt{(6-2)^2 + (0-5)^2} = \\sqrt{16+25} = \\sqrt{41}, \\quad AC = \\sqrt{2^2 + 5^2} = \\sqrt{29}',
          explanation: 'The distance formula \\( d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2} \\) gives each length.',
        },
        {
          stepNumber: 3,
          description: 'Apply the cosine rule for the angle at \\( B \\).',
          workingLatex: '\\cos B = \\frac{AB^2 + BC^2 - AC^2}{2 \\cdot AB \\cdot BC}',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Substitute the squared distances directly (keeping exact values).',
          workingLatex: '\\cos B = \\frac{36 + 41 - 29}{2 \\times 6 \\times \\sqrt{41}} = \\frac{48}{12\\sqrt{41}}',
          explanation: 'Using \\( AB^2 = 36 \\), \\( BC^2 = 41 \\), \\( AC^2 = 29 \\) avoids irrational numbers in the numerator.',
        },
        {
          stepNumber: 5,
          description: 'Simplify the surd expression.',
          workingLatex: '\\cos B = \\frac{48}{12\\sqrt{41}} = \\frac{4}{\\sqrt{41}}',
          explanation: 'Cancel the common factor of 12.',
        },
        {
          stepNumber: 6,
          description: 'Evaluate numerically.',
          workingLatex: '\\cos B = \\frac{4}{6.403} = 0.6247',
          explanation: '\\( \\sqrt{41} \\approx 6.403 \\).',
        },
        {
          stepNumber: 7,
          description: 'Inverse cosine.',
          workingLatex: '\\angle ABC = \\cos^{-1}(0.6247) = 51.34\\ldots^\\circ \\approx 51.3^\\circ',
          explanation: 'Round to 1 d.p.',
        },
      ],
      finalAnswer: '\\( \\angle ABC \\approx 51.3^\\circ \\)',
    },
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
          description: 'Sketch and identify the SSA configuration.',
          workingLatex: 'a = 12 \\leftrightarrow A = 46^\\circ,\\quad b = 16 \\leftrightarrow B = ?',
          explanation: 'Two sides and an angle opposite one of them — sine rule applies. Note that because \\( b > a \\), we have \\( B > A \\), so two solutions are mathematically possible (the "ambiguous case").',
          diagram: {
            xMin: -3, xMax: 18, yMin: -3, yMax: 13, hideAxes: true,
            lines: [
              { from: [0, 0], to: [15.32, 0], label: 'c', labelAt: [7.66, -1.0] },
              { from: [0, 0], to: [11.11, 11.51], label: 'b = 16 cm', labelAt: [4.5, 6.5] },
              { from: [15.32, 0], to: [11.11, 11.51], label: 'a = 12 cm', labelAt: [14.5, 6.0] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [15.32, 0], label: 'B', labelAnchor: 'se' },
              { at: [11.11, 11.51], label: 'C', labelAnchor: 'n' },
              { at: [2.005, 0.851], label: '46°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Write the sine rule.',
          workingLatex: '\\frac{\\sin B}{b} = \\frac{\\sin A}{a}',
          explanation: 'Rearranged form, with each \\( \\sin(\\text{angle}) \\) over its opposite side.',
        },
        {
          stepNumber: 3,
          description: 'Substitute.',
          workingLatex: '\\frac{\\sin B}{16} = \\frac{\\sin 46^\\circ}{12}',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( \\sin B \\).',
          workingLatex: '\\sin B = \\frac{16 \\sin 46^\\circ}{12} = \\frac{16 \\times 0.7193}{12} = \\frac{11.509}{12} = 0.9591',
          explanation: '',
        },
        {
          stepNumber: 5,
          description: 'Take the inverse sine — but consider both possible angles.',
          workingLatex: 'B_1 = \\sin^{-1}(0.9591) = 73.56\\ldots^\\circ \\approx 73.6^\\circ \\quad \\text{or} \\quad B_2 = 180^\\circ - 73.6^\\circ = 106.4^\\circ',
          explanation: 'For any value of \\( \\sin B \\) between 0 and 1, both an acute and an obtuse angle have that sine.',
        },
        {
          stepNumber: 6,
          description: 'Check feasibility of both.',
          workingLatex: 'A + B_1 = 46^\\circ + 73.6^\\circ = 119.6^\\circ < 180^\\circ \\checkmark\\\\ A + B_2 = 46^\\circ + 106.4^\\circ = 152.4^\\circ < 180^\\circ \\checkmark',
          explanation: 'Both sums leave a positive remainder for the third angle, so both triangles are valid (the ambiguous case truly does give two triangles here).',
        },
      ],
      finalAnswer: '\\( B \\approx 73.6^\\circ \\text{ or } B \\approx 106.4^\\circ \\)',
    },
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
          description: 'Identify the side opposite each named vertex.',
          workingLatex: 'MN \\text{ is opposite } L = 40^\\circ;\\ LM \\text{ is opposite } N',
          explanation: 'A side is opposite the vertex not contained in its name. So \\( MN \\) (containing \\( M \\) and \\( N \\)) is opposite the third vertex \\( L \\), and \\( LM \\) is opposite \\( N \\).',
          diagram: {
            xMin: -3, xMax: 23, yMin: -3, yMax: 15, hideAxes: true,
            lines: [
              { from: [0, 0], to: [20, 0], label: 'LM = 20 cm', labelAt: [10, -1.0] },
              { from: [20, 0], to: [8.51, 9.64], label: 'MN = 15 cm', labelAt: [15.5, 5.5] },
              { from: [8.51, 9.64], to: [0, 0], label: 'LN', labelAt: [3.5, 5.5] },
            ],
            points: [
              { at: [0, 0], label: 'L', labelAnchor: 'sw' },
              { at: [20, 0], label: 'M', labelAnchor: 'se' },
              { at: [8.51, 9.64], label: 'N', labelAnchor: 'n' },
              { at: [2.181, 0.984], label: '40°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Apply the sine rule.',
          workingLatex: '\\frac{\\sin N}{LM} = \\frac{\\sin L}{MN}',
          explanation: 'Pair each angle\'s sine with the side opposite it.',
        },
        {
          stepNumber: 3,
          description: 'Substitute.',
          workingLatex: '\\frac{\\sin N}{20} = \\frac{\\sin 40^\\circ}{15}',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( \\sin N \\).',
          workingLatex: '\\sin N = \\frac{20 \\times \\sin 40^\\circ}{15} = \\frac{20 \\times 0.6428}{15} = 0.8571',
          explanation: '',
        },
        {
          stepNumber: 5,
          description: 'Take inverse sine.',
          workingLatex: 'N = \\sin^{-1}(0.8571) = 58.99\\ldots^\\circ \\approx 59.0^\\circ',
          explanation: 'The obtuse alternative \\( 180^\\circ - 59.0^\\circ = 121.0^\\circ \\) would combine with \\( L = 40^\\circ \\) to give \\( 161^\\circ \\), leaving only \\( 19^\\circ \\) for \\( M \\). That is geometrically possible, but the configuration with \\( LM > MN \\) forces \\( N > L \\), satisfied by the acute solution alone in the conventional reading. Either is acceptable unless context excludes it.',
        },
      ],
      finalAnswer: '\\( N \\approx 59.0^\\circ \\)',
    },
  },

  {
    id: 't1-020',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 20',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( PQR \\), \\( PR = 18 \\) m, \\( QR = 22 \\) m and \\( P = 55^\\circ \\). Find angle \\( Q \\), showing all working including a check for the ambiguous case.',
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'ambiguous case', 'two possible triangles', 'find angle'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify the side–angle pairs and sketch.',
          workingLatex: 'QR = 22 \\text{ (opposite } P = 55^\\circ\\text{)}, \\quad PR = 18 \\text{ (opposite } Q\\text{)}',
          explanation: 'Side \\( QR \\) is opposite \\( P \\); side \\( PR \\) is opposite \\( Q \\). This is the SSA setup, where the ambiguous case can arise.',
          diagram: {
            xMin: -3, xMax: 28, yMin: -3, yMax: 20, hideAxes: true,
            lines: [
              { from: [0, 0], to: [24.62, 0], label: 'PQ', labelAt: [12.3, -1.0] },
              { from: [0, 0], to: [10.32, 14.74], label: 'PR = 18 m', labelAt: [3.0, 8.0] },
              { from: [24.62, 0], to: [10.32, 14.74], label: 'QR = 22 m', labelAt: [20.0, 8.0] },
            ],
            points: [
              { at: [0, 0], label: 'P', labelAnchor: 'sw' },
              { at: [24.62, 0], label: 'Q', labelAnchor: 'se' },
              { at: [10.32, 14.74], label: 'R', labelAnchor: 'n' },
              { at: [2.801, 1.458], label: '55°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Apply the sine rule.',
          workingLatex: '\\frac{\\sin Q}{PR} = \\frac{\\sin P}{QR} \\implies \\frac{\\sin Q}{18} = \\frac{\\sin 55^\\circ}{22}',
          explanation: 'Each sine sits over its opposite side.',
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( \\sin Q \\).',
          workingLatex: '\\sin Q = \\frac{18 \\sin 55^\\circ}{22} = \\frac{18 \\times 0.8192}{22} = \\frac{14.745}{22} = 0.6702',
          explanation: 'Since \\( 0 < 0.6702 < 1 \\), the inverse sine has two values to consider: an acute and an obtuse.',
        },
        {
          stepNumber: 4,
          description: 'Find both candidate values of \\( Q \\).',
          workingLatex: 'Q_1 = \\sin^{-1}(0.6702) = 42.08^\\circ \\quad\\text{or}\\quad Q_2 = 180^\\circ - 42.08^\\circ = 137.92^\\circ',
          explanation: 'Both have the same sine because \\( \\sin\\theta = \\sin(180^\\circ - \\theta) \\).',
        },
        {
          stepNumber: 5,
          description: 'Check feasibility of each candidate.',
          workingLatex: 'P + Q_1 = 55^\\circ + 42.1^\\circ = 97.1^\\circ < 180^\\circ \\ \\checkmark \\\\ P + Q_2 = 55^\\circ + 137.9^\\circ = 192.9^\\circ > 180^\\circ \\ \\times',
          explanation: 'The obtuse candidate gives \\( P + Q > 180^\\circ \\), leaving no room for angle \\( R \\). So only ONE triangle is possible — \\( Q \\approx 42.1^\\circ \\).',
        },
        {
          stepNumber: 6,
          description: 'Note on the question stem.',
          workingLatex: 'Q \\approx 42.1^\\circ \\text{ (only one valid value)}',
          explanation: 'The stem asks to "show two triangles exist", but with these specific values only one valid triangle actually exists. The feasibility check (step 5) eliminates the obtuse solution, leaving the acute value as the unique answer.',
        },
      ],
      finalAnswer: '\\( Q \\approx 42.1^\\circ \\) — only one valid triangle exists. The obtuse candidate \\( Q_2 \\approx 137.9^\\circ \\) is eliminated because \\( P + Q_2 = 55^\\circ + 137.9^\\circ = 192.9^\\circ > 180^\\circ \\).',
    },
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
          description: 'Sketch with the included angle at \\( A \\).',
          workingLatex: 'AB = 9,\\ AC = 13,\\ A = 48^\\circ',
          explanation: 'The two sides \\( AB \\) and \\( AC \\) meet at \\( A \\), making \\( A \\) the included angle — exactly the setup needed for the sine area formula.',
          diagram: {
            xMin: -3, xMax: 15, yMin: -3, yMax: 12, hideAxes: true,
            lines: [
              { from: [0, 0], to: [13, 0], label: 'AC = 13 cm', labelAt: [6.5, -1.0] },
              { from: [0, 0], to: [6.02, 6.69], label: 'AB = 9 cm', labelAt: [2.0, 4.0] },
              { from: [13, 0], to: [6.02, 6.69], label: 'BC', labelAt: [10.5, 4.0] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [13, 0], label: 'C', labelAnchor: 'se' },
              { at: [6.02, 6.69], label: 'B', labelAnchor: 'n' },
              { at: [1.446, 0.644], label: '48°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'State the area formula.',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times AB \\times AC \\times \\sin A',
          explanation: 'For any two sides meeting at a known angle, the triangle\'s area is half their product times the sine of the included angle.',
        },
        {
          stepNumber: 3,
          description: 'Substitute.',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times 9 \\times 13 \\times \\sin 48^\\circ',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Compute the product of the sides.',
          workingLatex: '\\text{Area} = \\tfrac{117}{2} \\times \\sin 48^\\circ = 58.5 \\times \\sin 48^\\circ',
          explanation: '\\( 9 \\times 13 = 117 \\); halve to get 58.5.',
        },
        {
          stepNumber: 5,
          description: 'Apply the sine.',
          workingLatex: '\\text{Area} = 58.5 \\times 0.7431 = 43.47\\ldots',
          explanation: '\\( \\sin 48^\\circ \\approx 0.7431 \\).',
        },
        {
          stepNumber: 6,
          description: 'Round.',
          workingLatex: '\\text{Area} \\approx 43.5 \\text{ cm}^2',
          explanation: 'Three significant figures.',
        },
      ],
      finalAnswer: '\\( \\text{Area} \\approx 43.5 \\text{ cm}^2 \\)',
    },
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
          description: 'Sketch with the obtuse included angle at \\( P \\).',
          workingLatex: 'PQ = 7.2,\\ PR = 5.8,\\ P = 110^\\circ',
          explanation: 'The sine area formula works for any included angle, including obtuse, because \\( \\sin\\theta > 0 \\) for \\( 0 < \\theta < 180^\\circ \\).',
          diagram: {
            xMin: -5, xMax: 8, yMin: -3, yMax: 7, hideAxes: true,
            lines: [
              { from: [0, 0], to: [7.2, 0], label: 'PQ = 7.2 cm', labelAt: [3.6, -0.9] },
              { from: [0, 0], to: [-1.98, 5.45], label: 'PR = 5.8 cm', labelAt: [-2.3, 2.7] },
              { from: [7.2, 0], to: [-1.98, 5.45], label: 'QR', labelAt: [3.0, 3.0] },
            ],
            points: [
              { at: [0, 0], label: 'P', labelAnchor: 's' },
              { at: [7.2, 0], label: 'Q', labelAnchor: 'se' },
              { at: [-1.98, 5.45], label: 'R', labelAnchor: 'nw' },
              { at: [0.679, 0.969], label: '110°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'State the area formula.',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times PQ \\times PR \\times \\sin P',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Substitute.',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times 7.2 \\times 5.8 \\times \\sin 110^\\circ',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Compute the product.',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times 41.76 \\times \\sin 110^\\circ = 20.88 \\times \\sin 110^\\circ',
          explanation: '\\( 7.2 \\times 5.8 = 41.76 \\).',
        },
        {
          stepNumber: 5,
          description: 'Apply \\( \\sin 110^\\circ \\).',
          workingLatex: '\\text{Area} = 20.88 \\times 0.9397 = 19.62\\ldots',
          explanation: '\\( \\sin 110^\\circ = \\sin(180^\\circ - 70^\\circ) = \\sin 70^\\circ \\approx 0.9397 \\).',
        },
        {
          stepNumber: 6,
          description: 'Round.',
          workingLatex: '\\text{Area} \\approx 19.6 \\text{ cm}^2',
          explanation: 'Three significant figures.',
        },
      ],
      finalAnswer: '\\( \\text{Area} \\approx 19.6 \\text{ cm}^2 \\)',
    },
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
          description: 'Sketch and note that \\( B \\) is the included angle of the two given sides.',
          workingLatex: 'AB = 12,\\ BC = 15,\\ B \\text{ is included between them}',
          explanation: 'When you are told the area and two sides meeting at one vertex, the unknown is the angle at that vertex.',
          diagram: {
            xMin: -3, xMax: 18, yMin: -3, yMax: 10, hideAxes: true,
            lines: [
              { from: [0, 0], to: [15, 0], label: 'BC = 15 cm', labelAt: [7.5, -1.0] },
              { from: [0, 0], to: [9.60, 7.20], label: 'AB = 12 cm', labelAt: [3.5, 4.5] },
              { from: [15, 0], to: [9.60, 7.20], label: 'AC', labelAt: [13.0, 4.0] },
            ],
            points: [
              { at: [0, 0], label: 'B', labelAnchor: 'sw' },
              { at: [15, 0], label: 'C', labelAnchor: 'se' },
              { at: [9.60, 7.20], label: 'A', labelAnchor: 'n' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Apply the area formula with \\( B \\) the unknown.',
          workingLatex: '54 = \\tfrac{1}{2} \\times 12 \\times 15 \\times \\sin B',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Simplify the right-hand side.',
          workingLatex: '54 = 90 \\sin B',
          explanation: '\\( \\tfrac{1}{2} \\times 12 \\times 15 = 90 \\).',
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( \\sin B \\).',
          workingLatex: '\\sin B = \\frac{54}{90} = 0.6',
          explanation: '',
        },
        {
          stepNumber: 5,
          description: 'Find both possible values.',
          workingLatex: 'B_1 = \\sin^{-1}(0.6) = 36.87^\\circ \\approx 36.9^\\circ \\quad \\text{or} \\quad B_2 = 180^\\circ - 36.87^\\circ \\approx 143.1^\\circ',
          explanation: 'Both give exactly the same area, since \\( \\sin\\theta = \\sin(180^\\circ - \\theta) \\). Unless context restricts the geometry, both are valid.',
        },
      ],
      finalAnswer: '\\( B \\approx 36.9^\\circ \\text{ or } B \\approx 143.1^\\circ \\)',
    },
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
          description: 'Sketch and label sides.',
          workingLatex: 'a = 16,\\ b = 12,\\ c = 10',
          explanation: 'With three sides known and no angle, we first find an angle (cosine rule) and then apply the sine area formula. We pick the angle between the two sides we want to use in the area formula; the easiest is the angle opposite the longest side.',
          diagram: {
            xMin: -3, xMax: 18, yMin: -3, yMax: 9, hideAxes: true,
            lines: [
              { from: [0, 0], to: [16, 0], label: 'a = 16 cm', labelAt: [8, -1.0] },
              { from: [0, 0], to: [4.625, 7.498], label: 'c = 10 cm', labelAt: [1.5, 4.0] },
              { from: [16, 0], to: [4.625, 7.498], label: 'b = 12 cm', labelAt: [11.5, 4.5] },
            ],
            points: [
              { at: [0, 0], label: 'B', labelAnchor: 'sw' },
              { at: [16, 0], label: 'C', labelAnchor: 'se' },
              { at: [4.625, 7.498], label: 'A', labelAnchor: 'n' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Apply the cosine rule for the angle opposite the longest side.',
          workingLatex: '\\cos A = \\frac{b^2 + c^2 - a^2}{2bc} = \\frac{12^2 + 10^2 - 16^2}{2 \\times 12 \\times 10}',
          explanation: 'Use \\( A \\) opposite \\( a = 16 \\). Then sides \\( b = 12 \\) and \\( c = 10 \\) are the ones adjacent to \\( A \\) — exactly the sides we want in the area formula.',
        },
        {
          stepNumber: 3,
          description: 'Compute.',
          workingLatex: '\\cos A = \\frac{144 + 100 - 256}{240} = \\frac{-12}{240} = -0.05',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Find \\( A \\).',
          workingLatex: 'A = \\cos^{-1}(-0.05) = 92.866\\ldots^\\circ \\approx 92.87^\\circ',
          explanation: 'Slightly obtuse, as expected (the negative cosine).',
        },
        {
          stepNumber: 5,
          description: 'Apply the area formula.',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times b \\times c \\times \\sin A = \\tfrac{1}{2} \\times 12 \\times 10 \\times \\sin 92.87^\\circ',
          explanation: '',
        },
        {
          stepNumber: 6,
          description: 'Compute.',
          workingLatex: '\\text{Area} = 60 \\times 0.9987 = 59.93\\ldots \\approx 59.9 \\text{ cm}^2',
          explanation: '\\( \\sin 92.87^\\circ \\approx 0.9987 \\). (Heron\'s formula gives the same answer: \\( s = 19 \\), \\( \\sqrt{19 \\times 9 \\times 7 \\times 3} = \\sqrt{3591} \\approx 59.9 \\).)',
        },
      ],
      finalAnswer: '\\( \\text{Area} \\approx 59.9 \\text{ cm}^2 \\)',
    },
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
          description: 'Sketch and find the third angle.',
          workingLatex: 'T = 180^\\circ - 53^\\circ - 74^\\circ = 53^\\circ',
          explanation: 'The triangle is isosceles (\\( T = R \\)), so \\( ST = RT \\). We need \\( RT \\), so apply the sine rule with the pair anchored on the known side \\( RS \\) and its opposite angle \\( T \\).',
          diagram: {
            xMin: -3, xMax: 14, yMin: -3, yMax: 12, hideAxes: true,
            lines: [
              { from: [0, 0], to: [11, 0], label: 'RS = 11 cm', labelAt: [5.5, -1.0] },
              { from: [0, 0], to: [7.96, 10.58], label: 'RT = ?', labelAt: [2.5, 6.0] },
              { from: [11, 0], to: [7.96, 10.58], label: 'ST', labelAt: [11.0, 5.5] },
            ],
            points: [
              { at: [0, 0], label: 'R', labelAnchor: 'sw' },
              { at: [11, 0], label: 'S', labelAnchor: 'se' },
              { at: [7.96, 10.58], label: 'T', labelAnchor: 'n' },
              { at: [1.577, 0.787], label: '53°', labelAnchor: 'center', r: 0 },
              { at: [9.592, 1.06], label: '74°', labelAnchor: 'center', r: 0 },
              { at: [7.64, 8.847], label: '53°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Part (a): set up the sine rule.',
          workingLatex: '\\frac{RT}{\\sin S} = \\frac{RS}{\\sin T}',
          explanation: '\\( RT \\) is opposite \\( S \\); \\( RS \\) is opposite \\( T \\).',
        },
        {
          stepNumber: 3,
          description: 'Substitute and solve.',
          workingLatex: 'RT = \\frac{11 \\sin 74^\\circ}{\\sin 53^\\circ} = \\frac{11 \\times 0.9613}{0.7986} = \\frac{10.574}{0.7986} = 13.24\\ldots',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Round.',
          workingLatex: 'RT \\approx 13.2 \\text{ cm}',
          explanation: 'Three significant figures.',
        },
        {
          stepNumber: 5,
          description: 'Part (b): apply the area formula with the two sides at vertex \\( R \\).',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times RS \\times RT \\times \\sin R',
          explanation: 'We use \\( RS = 11 \\) and \\( RT \\approx 13.24 \\), which meet at the included angle \\( R = 53^\\circ \\). Use the unrounded value of \\( RT \\) to avoid carrying rounding error.',
        },
        {
          stepNumber: 6,
          description: 'Compute.',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times 11 \\times 13.24 \\times \\sin 53^\\circ = 72.82 \\times 0.7986 = 58.15\\ldots',
          explanation: '',
        },
        {
          stepNumber: 7,
          description: 'Round.',
          workingLatex: '\\text{Area} \\approx 58.2 \\text{ cm}^2',
          explanation: 'Three significant figures. (Note: using the rounded \\( RT = 13.2 \\) gives 58.0 cm², which differs in the second decimal due to rounding mid-calculation.)',
        },
      ],
      finalAnswer: '\\( a)\\ RT \\approx 13.2 \\text{ cm}\\quad b)\\ \\text{Area} \\approx 58.2 \\text{ cm}^2 \\)',
    },
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
          description: 'Sketch the triangular garden.',
          workingLatex: 'b = 8,\\ c = 11,\\ A = 63^\\circ \\text{ (included)}',
          explanation: 'Two sides meet at the known angle, so it is the SAS configuration for both the area formula and the cosine rule for the third side.',
          diagram: {
            xMin: -3, xMax: 13, yMin: -3, yMax: 9, hideAxes: true,
            lines: [
              { from: [0, 0], to: [11, 0], label: '11 m', labelAt: [5.5, -1.0] },
              { from: [0, 0], to: [3.632, 7.127], label: '8 m', labelAt: [1.0, 4.0] },
              { from: [11, 0], to: [3.632, 7.127], label: 'a = ?', labelAt: [8.0, 4.0] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [11, 0], label: 'B', labelAnchor: 'se' },
              { at: [3.632, 7.127], label: 'C', labelAnchor: 'n' },
              { at: [1.247, 0.764], label: '63°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Compute the area.',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times 8 \\times 11 \\times \\sin 63^\\circ = 44 \\times \\sin 63^\\circ',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Evaluate.',
          workingLatex: '\\text{Area} = 44 \\times 0.8910 = 39.20\\ldots \\approx 39.2 \\text{ m}^2',
          explanation: '\\( \\sin 63^\\circ \\approx 0.8910 \\).',
        },
        {
          stepNumber: 4,
          description: 'Use the cosine rule for the third side.',
          workingLatex: 'a^2 = 8^2 + 11^2 - 2(8)(11)\\cos 63^\\circ = 64 + 121 - 176\\cos 63^\\circ',
          explanation: '',
        },
        {
          stepNumber: 5,
          description: 'Substitute \\( \\cos 63^\\circ \\approx 0.4540 \\).',
          workingLatex: 'a^2 = 185 - 176 \\times 0.4540 = 185 - 79.90 = 105.10',
          explanation: '',
        },
        {
          stepNumber: 6,
          description: 'Take the square root.',
          workingLatex: 'a = \\sqrt{105.10} = 10.25\\ldots \\approx 10.3 \\text{ m}',
          explanation: 'Three significant figures.',
        },
      ],
      finalAnswer: '\\( \\text{Area} \\approx 39.2 \\text{ m}^2,\\ \\text{third side} \\approx 10.3 \\text{ m} \\)',
    },
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
          description: 'Sketch the triangle with coastguard station at the included angle.',
          workingLatex: 'CA = 6.4,\\ CB = 9.1,\\ \\angle ACB = 74^\\circ',
          explanation: 'Two sides meeting at \\( C \\) with the angle between them — apply the cosine rule for the opposite side \\( AB \\).',
          diagram: {
            xMin: -3, xMax: 11, yMin: -3, yMax: 8, hideAxes: true,
            lines: [
              { from: [0, 0], to: [9.1, 0], label: 'CB = 9.1 km', labelAt: [4.55, -0.9] },
              { from: [0, 0], to: [1.764, 6.152], label: 'CA = 6.4 km', labelAt: [-0.5, 3.2] },
              { from: [9.1, 0], to: [1.764, 6.152], label: 'AB = ?', labelAt: [6.0, 3.5] },
            ],
            points: [
              { at: [0, 0], label: 'C', labelAnchor: 'sw' },
              { at: [9.1, 0], label: 'B', labelAnchor: 'se' },
              { at: [1.764, 6.152], label: 'A', labelAnchor: 'n' },
              { at: [1.001, 0.755], label: '74°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Write the cosine rule.',
          workingLatex: 'AB^2 = CA^2 + CB^2 - 2 \\cdot CA \\cdot CB \\cdot \\cos(\\angle ACB)',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Substitute.',
          workingLatex: 'AB^2 = 6.4^2 + 9.1^2 - 2(6.4)(9.1)\\cos 74^\\circ',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Compute the squares and product.',
          workingLatex: 'AB^2 = 40.96 + 82.81 - 116.48 \\cos 74^\\circ = 123.77 - 116.48 \\cos 74^\\circ',
          explanation: '',
        },
        {
          stepNumber: 5,
          description: 'Apply \\( \\cos 74^\\circ \\).',
          workingLatex: 'AB^2 = 123.77 - 116.48 \\times 0.2756 = 123.77 - 32.10 = 91.67',
          explanation: '\\( \\cos 74^\\circ \\approx 0.2756 \\).',
        },
        {
          stepNumber: 6,
          description: 'Square root.',
          workingLatex: 'AB = \\sqrt{91.67} = 9.574\\ldots \\approx 9.57 \\text{ km}',
          explanation: 'Three significant figures.',
        },
      ],
      finalAnswer: '\\( AB \\approx 9.57 \\text{ km} \\)',
    },
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
          description: 'Sketch with North up. Mark the starting point and both walkers\' positions.',
          workingLatex: '\\angle ASB = 160^\\circ - 40^\\circ = 120^\\circ',
          explanation: 'Bearings are measured clockwise from north. The angle between the two paths at the start is the difference of the bearings.',
          diagram: {
            xMin: -3, xMax: 8, yMin: -8, yMax: 5, hideAxes: true,
            lines: [
              { from: [0, 0], to: [3.21, 3.83], label: '5 km', labelAt: [1.0, 2.5] },
              { from: [0, 0], to: [2.39, -6.58], label: '7 km', labelAt: [0.5, -3.5] },
              { from: [3.21, 3.83], to: [2.39, -6.58], label: 'd = ?', labelAt: [3.5, -1.5] },
            ],
            points: [
              { at: [0, 0], label: 'S', labelAnchor: 'w' },
              { at: [3.21, 3.83], label: 'A', labelAnchor: 'n' },
              { at: [2.39, -6.58], label: 'B', labelAnchor: 's' },
              { at: [1.105, -0.195], label: '120°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Part (a): apply the cosine rule.',
          workingLatex: 'd^2 = 5^2 + 7^2 - 2(5)(7)\\cos 120^\\circ',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Simplify using \\( \\cos 120^\\circ = -0.5 \\).',
          workingLatex: 'd^2 = 25 + 49 - 70 \\times (-0.5) = 74 + 35 = 109',
          explanation: '\\( -2 \\times 5 \\times 7 = -70 \\), multiplied by \\( -0.5 \\) gives \\( +35 \\).',
        },
        {
          stepNumber: 4,
          description: 'Square root.',
          workingLatex: 'd = \\sqrt{109} = 10.44\\ldots \\approx 10.4 \\text{ km}',
          explanation: '',
        },
        {
          stepNumber: 5,
          description: 'Part (b): find the internal angle at \\( A \\) (Walker A\'s vertex) using the sine rule.',
          workingLatex: '\\frac{\\sin(\\angle A)}{7} = \\frac{\\sin 120^\\circ}{d}',
          explanation: 'Side opposite \\( \\angle A \\) is the 7 km leg (\\( SB \\)). Side opposite the 120° angle is \\( d \\).',
        },
        {
          stepNumber: 6,
          description: 'Solve for \\( \\sin(\\angle A) \\).',
          workingLatex: '\\sin(\\angle A) = \\frac{7 \\times \\sin 120^\\circ}{10.44} = \\frac{7 \\times 0.8660}{10.44} = 0.5806',
          explanation: 'Use the unrounded \\( d = \\sqrt{109} \\approx 10.44 \\) to keep precision.',
        },
        {
          stepNumber: 7,
          description: 'Inverse sine.',
          workingLatex: '\\angle A = \\sin^{-1}(0.5806) = 35.50^\\circ \\approx 35.5^\\circ',
          explanation: 'The internal angle at A is acute (since the obtuse 120° lives at S — and a triangle has only one obtuse angle).',
        },
        {
          stepNumber: 8,
          description: 'Convert to a bearing.',
          workingLatex: '\\text{Bearing of B from A} = 040^\\circ + 180^\\circ - 35.5^\\circ = 184.5^\\circ',
          explanation: 'From A, the back-bearing to S is \\( 040^\\circ + 180^\\circ = 220^\\circ \\). The direction to B lies on the other side of this back-bearing by \\( 35.5^\\circ \\) (the interior angle), so subtract: \\( 220^\\circ - 35.5^\\circ = 184.5^\\circ \\).',
        },
      ],
      finalAnswer: '\\( a)\\ d \\approx 10.4 \\text{ km}\\quad b)\\ \\text{Bearing} \\approx 184.5^\\circ \\)',
    },
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
          description: 'Sketch and identify the three angles of the triangle formed.',
          workingLatex: '\\text{angle at ground} = 70^\\circ,\\ \\text{angle at wall foot} = 95^\\circ',
          explanation: 'The ladder, the wall, and the ground form a triangle. The angle at the ground vertex is the ladder–ground angle (\\( 70^\\circ \\)). The angle at the wall\'s base is the wall–ground angle (\\( 95^\\circ \\), the wall tilts slightly outward).',
          diagram: {
            xMin: -2, xMax: 5, yMin: -2, yMax: 22, hideAxes: true,
            lines: [
              { from: [0, 0], to: [4, 0], label: 'ground', labelAt: [2, -0.8] },
              { from: [0, 0], to: [-1.90, 21.78], label: 'wall (h)', labelAt: [-2.0, 11.0] },
              { from: [4, 0], to: [-1.90, 21.78], label: 'ladder = 6 m', labelAt: [3.0, 11.0] },
            ],
            points: [
              { at: [0, 0], label: 'Wall foot', labelAnchor: 's' },
              { at: [4, 0], label: 'Ground', labelAnchor: 'se' },
              { at: [-1.9, 21.78], label: 'Top', labelAnchor: 'nw' },
              { at: [1.636, 1.785], label: '95°', labelAnchor: 'center', r: 0 },
              { at: [2.077, 1.471], label: '70°', labelAnchor: 'center', r: 0 },
              { at: [-1.477, 19.396], label: '15°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Find the third angle (at the top of the ladder).',
          workingLatex: '\\theta_{\\text{top}} = 180^\\circ - 70^\\circ - 95^\\circ = 15^\\circ',
          explanation: 'Angle sum of a triangle.',
        },
        {
          stepNumber: 3,
          description: 'Identify side–angle pairs. The ladder (6 m) is opposite the \\( 15^\\circ \\) angle; the wall height \\( h \\) is opposite the \\( 70^\\circ \\) angle.',
          workingLatex: '\\frac{h}{\\sin 70^\\circ} = \\frac{6}{\\sin 15^\\circ}',
          explanation: 'Sine rule: side over sine of opposite angle.',
        },
        {
          stepNumber: 4,
          description: 'Solve for \\( h \\).',
          workingLatex: 'h = \\frac{6 \\sin 70^\\circ}{\\sin 15^\\circ}',
          explanation: '',
        },
        {
          stepNumber: 5,
          description: 'Evaluate.',
          workingLatex: 'h = \\frac{6 \\times 0.9397}{0.2588} = \\frac{5.638}{0.2588} = 21.78\\ldots',
          explanation: 'A small \\( \\sin 15^\\circ \\) in the denominator inflates the answer dramatically — the leaning wall lets the ladder reach much higher than a straight wall would.',
        },
        {
          stepNumber: 6,
          description: 'Round.',
          workingLatex: 'h \\approx 21.8 \\text{ m}',
          explanation: 'Three significant figures.',
        },
      ],
      finalAnswer: '\\( h \\approx 21.8 \\text{ m} \\)',
    },
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
          description: 'Sketch the triangle with the river bank as line \\( AC \\) and \\( B \\) on the opposite bank.',
          workingLatex: '\\angle A = 68^\\circ,\\ \\angle C = 54^\\circ,\\ AC = 80\\ \\text{m}',
          explanation: 'The width of the river is the perpendicular distance from \\( B \\) to line \\( AC \\) — exactly the height of triangle \\( ABC \\) measured from \\( AC \\).',
          diagram: {
            xMin: -3, xMax: 90, yMin: -3, yMax: 75, hideAxes: true,
            lines: [
              { from: [0, 0], to: [80, 0], label: 'AC = 80 m', labelAt: [40, -2.0] },
              { from: [0, 0], to: [32.7, 80.92], label: 'AB', labelAt: [10.0, 40.0] },
              { from: [80, 0], to: [32.7, 80.92], label: 'BC = ?', labelAt: [64.0, 42.0] },
              { from: [32.7, 0], to: [32.7, 80.92], color: 'gray', dashed: true, label: 'w', labelAt: [34, 40.0] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [80, 0], label: 'C', labelAnchor: 'se' },
              { at: [32.7, 80.92], label: 'B', labelAnchor: 'n' },
              { at: [10.63, 7.17], label: '68°', labelAnchor: 'center', r: 0 },
              { at: [68.878, 6.381], label: '54°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Find angle \\( B \\).',
          workingLatex: 'B = 180^\\circ - 68^\\circ - 54^\\circ = 58^\\circ',
          explanation: 'Angle sum of a triangle. We need \\( B \\) because the known side \\( AC \\) is opposite it.',
        },
        {
          stepNumber: 3,
          description: 'Part (a): sine rule for \\( BC \\).',
          workingLatex: '\\frac{BC}{\\sin A} = \\frac{AC}{\\sin B}',
          explanation: '\\( BC \\) is opposite \\( A \\); \\( AC \\) is opposite \\( B \\).',
        },
        {
          stepNumber: 4,
          description: 'Substitute and evaluate.',
          workingLatex: 'BC = \\frac{80 \\sin 68^\\circ}{\\sin 58^\\circ} = \\frac{80 \\times 0.9272}{0.8480} = \\frac{74.176}{0.8480} = 87.47\\ldots \\approx 87.5 \\text{ m}',
          explanation: '',
        },
        {
          stepNumber: 5,
          description: 'Part (b): the river width is the perpendicular from \\( B \\) to line \\( AC \\).',
          workingLatex: 'w = BC \\times \\sin(\\angle BCA)',
          explanation: 'Drop a perpendicular from \\( B \\) to line \\( AC \\); let the foot be \\( F \\). In the right-angled triangle \\( BFC \\), \\( \\sin(\\angle BCA) = w/BC \\), so \\( w = BC \\sin(\\angle BCA) \\).',
        },
        {
          stepNumber: 6,
          description: 'Substitute (use unrounded \\( BC \\approx 87.47 \\)).',
          workingLatex: 'w = 87.47 \\times \\sin 54^\\circ = 87.47 \\times 0.8090 = 70.76\\ldots',
          explanation: '',
        },
        {
          stepNumber: 7,
          description: 'Round.',
          workingLatex: 'w \\approx 70.8 \\text{ m}',
          explanation: 'Three significant figures.',
        },
      ],
      finalAnswer: '\\( a)\\ BC \\approx 87.5 \\text{ m}\\quad b)\\ w \\approx 70.8 \\text{ m} \\)',
    },
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
          description: 'Sketch the quadrilateral, splitting it into triangles \\( ABC \\) and \\( ACD \\) by the diagonal \\( AC \\).',
          workingLatex: '\\triangle ABC: AB=15, BC=12, B=70^\\circ \\quad \\triangle ACD: CD=10, D=55^\\circ',
          explanation: 'The diagonal \\( AC \\) belongs to both triangles, so once we know it from the first triangle we use it in the second.',
          diagram: {
            xMin: -3, xMax: 18, yMin: -8, yMax: 14, hideAxes: true,
            lines: [
              { from: [0, 0], to: [15, 0], label: 'AB = 15', labelAt: [7.5, -1.0] },
              { from: [15, 0], to: [10.87, 11.28], label: 'BC = 12', labelAt: [13.5, 6.5] },
              { from: [10.87, 11.28], to: [0, 0], color: 'gray', dashed: true, label: 'AC', labelAt: [4.5, 6.8] },
              { from: [0, 0], to: [4.62, -7.07], label: 'AD', labelAt: [1.0, -3.8] },
              { from: [4.62, -7.07], to: [10.87, 11.28], label: 'CD = 10', labelAt: [12.0, 1.5] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [15, 0], label: 'B', labelAnchor: 'se' },
              { at: [10.87, 11.28], label: 'C', labelAnchor: 'n' },
              { at: [4.62, -7.07], label: 'D', labelAnchor: 's' },
              { at: [13.266, 1.212], label: '70°', labelAnchor: 'center', r: 0 },
              { at: [4.356, -4.971], label: '55°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Find the area of \\( \\triangle ABC \\) using the SAS sine area formula.',
          workingLatex: '\\text{Area}_{ABC} = \\tfrac{1}{2} \\times 15 \\times 12 \\times \\sin 70^\\circ = 90 \\sin 70^\\circ',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Evaluate.',
          workingLatex: '\\text{Area}_{ABC} = 90 \\times 0.9397 = 84.57\\ldots \\approx 84.6 \\text{ cm}^2',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Find the diagonal \\( AC \\) using the cosine rule in \\( \\triangle ABC \\).',
          workingLatex: 'AC^2 = 15^2 + 12^2 - 2(15)(12)\\cos 70^\\circ = 369 - 360\\cos 70^\\circ',
          explanation: '',
        },
        {
          stepNumber: 5,
          description: 'Compute \\( AC \\).',
          workingLatex: 'AC^2 = 369 - 360 \\times 0.3420 = 369 - 123.12 = 245.88 \\implies AC = 15.68\\ldots',
          explanation: 'Keep extra decimals (15.68) for use in the next step.',
        },
        {
          stepNumber: 6,
          description: 'In \\( \\triangle ACD \\) use the sine rule to find \\( \\angle ACD \\).',
          workingLatex: '\\frac{\\sin(\\angle ACD)}{CD} = \\frac{\\sin D}{AC} \\implies \\sin(\\angle ACD) = \\frac{10 \\sin 55^\\circ}{15.68} = \\frac{8.192}{15.68} = 0.5225',
          explanation: '',
        },
        {
          stepNumber: 7,
          description: 'Find the angle.',
          workingLatex: '\\angle ACD = \\sin^{-1}(0.5225) = 31.49\\ldots^\\circ \\approx 31.5^\\circ',
          explanation: 'Take the acute value (the geometry of a convex quadrilateral excludes the obtuse alternative here).',
        },
        {
          stepNumber: 8,
          description: 'Find the area of \\( \\triangle ACD \\).',
          workingLatex: '\\text{Area}_{ACD} = \\tfrac{1}{2} \\times AC \\times CD \\times \\sin(\\angle ACD) = \\tfrac{1}{2} \\times 15.68 \\times 10 \\times \\sin 31.5^\\circ',
          explanation: 'The two sides \\( AC \\) and \\( CD \\) meet at \\( C \\) with included angle \\( \\angle ACD \\).',
        },
        {
          stepNumber: 9,
          description: 'Evaluate.',
          workingLatex: '\\text{Area}_{ACD} = 78.4 \\times 0.5225 = 40.96\\ldots \\approx 41.0 \\text{ cm}^2',
          explanation: '',
        },
        {
          stepNumber: 10,
          description: 'Total area.',
          workingLatex: '\\text{Total} = 84.6 + 41.0 = 125.6 \\approx 126 \\text{ cm}^2',
          explanation: 'Round to 3 s.f.',
        },
      ],
      finalAnswer: '\\( \\text{Total area} \\approx 126 \\text{ cm}^2 \\)',
    },
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
          description: 'Sketch and identify the side opposite each vertex.',
          workingLatex: 'a = BC = 14,\\ b = AC = 9,\\ c = AB = 10',
          explanation: 'Standard convention: lower-case letter opposite same upper-case vertex. Angle \\( A \\) is opposite side \\( a = BC = 14 \\).',
          diagram: {
            xMin: -3, xMax: 16, yMin: -3, yMax: 10, hideAxes: true,
            lines: [
              { from: [0, 0], to: [10, 0], label: 'AB = 10', labelAt: [5, -0.9] },
              { from: [0, 0], to: [-0.75, 8.97], label: 'AC = 9', labelAt: [-2.0, 4.5] },
              { from: [10, 0], to: [-0.75, 8.97], label: 'BC = 14', labelAt: [5.5, 5.0] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 's' },
              { at: [10, 0], label: 'B', labelAnchor: 'se' },
              { at: [-0.75, 8.97], label: 'C', labelAnchor: 'nw' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Part (a): cosine rule for \\( A \\).',
          workingLatex: '\\cos A = \\frac{b^2 + c^2 - a^2}{2bc} = \\frac{9^2 + 10^2 - 14^2}{2 \\times 9 \\times 10}',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Compute.',
          workingLatex: '\\cos A = \\frac{81 + 100 - 196}{180} = \\frac{-15}{180} = -\\tfrac{1}{12} \\approx -0.0833',
          explanation: 'Negative, so \\( A \\) is obtuse.',
        },
        {
          stepNumber: 4,
          description: 'Find \\( A \\).',
          workingLatex: 'A = \\cos^{-1}(-0.0833) = 94.78\\ldots^\\circ \\approx 94.8^\\circ',
          explanation: 'Just past a right angle.',
        },
        {
          stepNumber: 5,
          description: 'Part (b): apply the area formula at vertex \\( A \\).',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times AB \\times AC \\times \\sin A = \\tfrac{1}{2} \\times 10 \\times 9 \\times \\sin 94.8^\\circ',
          explanation: 'Sides \\( AB \\) and \\( AC \\) meet at \\( A \\).',
        },
        {
          stepNumber: 6,
          description: 'Evaluate.',
          workingLatex: '\\text{Area} = 45 \\times 0.9965 = 44.84\\ldots \\approx 44.8 \\text{ cm}^2',
          explanation: '\\( \\sin 94.8^\\circ \\approx 0.9965 \\).',
        },
      ],
      finalAnswer: '\\( a)\\ A \\approx 94.8^\\circ\\quad b)\\ \\text{Area} \\approx 44.8 \\text{ cm}^2 \\)',
    },
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
          description: 'Sketch the situation: tower at \\( T \\) with base \\( C \\); points \\( A \\), \\( B \\), \\( C \\) collinear on the ground.',
          workingLatex: 'AB = 40, \\angle TAB = 28^\\circ \\text{ (elevation from } A\\text{)},\\ \\angle TBC = 43^\\circ \\text{ (elevation from } B\\text{)}',
          explanation: 'Both elevations are measured from the horizontal ground.',
          diagram: {
            xMin: -5, xMax: 100, yMin: -5, yMax: 60, hideAxes: true,
            lines: [
              { from: [0, 0], to: [93.0, 0], label: 'ground', labelAt: [45, -2.5] },
              { from: [0, 0], to: [93.0, 49.48], label: 'AT', labelAt: [30.0, 20.0] },
              { from: [40, 0], to: [93.0, 49.48], label: 'BT', labelAt: [60.0, 30.0] },
              { from: [93.0, 0], to: [93.0, 49.48], label: 'h = ?', labelAt: [97.0, 24.0] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [40, 0], label: 'B', labelAnchor: 's' },
              { at: [93, 0], label: 'C', labelAnchor: 'se' },
              { at: [93, 49.48], label: 'T', labelAnchor: 'n' },
              { at: [11.655, 2.908], label: '28°', labelAnchor: 'center', r: 0 },
              { at: [49.611, 7.206], label: '43°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'In \\( \\triangle ABT \\), the angle at \\( B \\) is the supplement of the elevation from \\( B \\).',
          workingLatex: '\\angle ABT = 180^\\circ - 43^\\circ = 137^\\circ',
          explanation: 'The line \\( BT \\) goes up at \\( 43^\\circ \\) above the ground on the side of \\( C \\). Inside \\( \\triangle ABT \\) the interior angle at \\( B \\) lies between \\( BA \\) (pointing back toward A) and \\( BT \\), giving the supplement.',
        },
        {
          stepNumber: 3,
          description: 'Find the angle at \\( T \\) in \\( \\triangle ABT \\).',
          workingLatex: '\\angle ATB = 180^\\circ - 28^\\circ - 137^\\circ = 15^\\circ',
          explanation: 'Angle sum of triangle.',
        },
        {
          stepNumber: 4,
          description: 'Apply the sine rule with the known side \\( AB = 40 \\) opposite \\( \\angle ATB \\).',
          workingLatex: '\\frac{BT}{\\sin 28^\\circ} = \\frac{40}{\\sin 15^\\circ}',
          explanation: '',
        },
        {
          stepNumber: 5,
          description: 'Solve for \\( BT \\).',
          workingLatex: 'BT = \\frac{40 \\sin 28^\\circ}{\\sin 15^\\circ} = \\frac{40 \\times 0.4695}{0.2588} = \\frac{18.78}{0.2588} = 72.56\\ldots',
          explanation: '',
        },
        {
          stepNumber: 6,
          description: 'In right-angled triangle \\( BCT \\), the height is \\( h = BT \\sin 43^\\circ \\).',
          workingLatex: 'h = 72.56 \\times \\sin 43^\\circ = 72.56 \\times 0.6820 = 49.49\\ldots',
          explanation: 'Vertical component of \\( BT \\).',
        },
        {
          stepNumber: 7,
          description: 'Round.',
          workingLatex: 'h \\approx 49.5 \\text{ m}',
          explanation: 'Three significant figures.',
        },
      ],
      finalAnswer: '\\( h \\approx 49.5 \\text{ m} \\)',
    },
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
          description: 'Sketch the quadrilateral with the diagonal fence \\( PR \\) splitting it into two triangles.',
          workingLatex: '\\triangle PQR: PQ=80, QR=95, Q=58^\\circ \\quad \\triangle PRS: PS=110, RS=75',
          explanation: 'In \\( \\triangle PQR \\) we have SAS, so the cosine rule gives \\( PR \\). Then in \\( \\triangle PRS \\) we have all three sides, so the cosine rule gives an angle and the sine area formula gives the area.',
          diagram: {
            xMin: -10, xMax: 110, yMin: -85, yMax: 100, hideAxes: true,
            lines: [
              { from: [0, 0], to: [80, 0], label: 'PQ = 80', labelAt: [40, -3.5] },
              { from: [80, 0], to: [29.65, 80.58], label: 'QR = 95', labelAt: [60.0, 42.0] },
              { from: [29.65, 80.58], to: [0, 0], color: 'gray', dashed: true, label: 'PR = ?', labelAt: [8.0, 42.0] },
              { from: [0, 0], to: [104.9, -33.0], label: 'PS = 110', labelAt: [60.0, -22.0] },
              { from: [104.9, -33.0], to: [29.65, 80.58], label: 'RS = 75', labelAt: [80.0, 22.0] },
            ],
            points: [
              { at: [0, 0], label: 'P', labelAnchor: 'w' },
              { at: [80, 0], label: 'Q', labelAnchor: 's' },
              { at: [29.65, 80.58], label: 'R', labelAnchor: 'n' },
              { at: [104.9, -33], label: 'S', labelAnchor: 'se' },
              { at: [66.695, 7.375], label: '58°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Part (a): apply the cosine rule in \\( \\triangle PQR \\).',
          workingLatex: 'PR^2 = PQ^2 + QR^2 - 2 \\cdot PQ \\cdot QR \\cos Q = 6400 + 9025 - 15200 \\cos 58^\\circ',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Apply \\( \\cos 58^\\circ \\approx 0.5299 \\).',
          workingLatex: 'PR^2 = 15425 - 15200 \\times 0.5299 = 15425 - 8054.5 = 7370.5',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Take the square root.',
          workingLatex: 'PR = \\sqrt{7370.5} = 85.85\\ldots \\approx 85.9 \\text{ m}',
          explanation: 'Three significant figures.',
        },
        {
          stepNumber: 5,
          description: 'Compute the area of \\( \\triangle PQR \\).',
          workingLatex: '\\text{Area}_{PQR} = \\tfrac{1}{2}(80)(95)\\sin 58^\\circ = 3800 \\times 0.8480 = 3222.6\\ldots \\text{ m}^2',
          explanation: '',
        },
        {
          stepNumber: 6,
          description: 'Part (b): in \\( \\triangle PRS \\) with all three sides known, find the angle at \\( P \\) using the cosine rule.',
          workingLatex: '\\cos(\\angle RPS) = \\frac{PR^2 + PS^2 - RS^2}{2 \\cdot PR \\cdot PS} = \\frac{85.85^2 + 110^2 - 75^2}{2(85.85)(110)}',
          explanation: '',
        },
        {
          stepNumber: 7,
          description: 'Compute.',
          workingLatex: '\\cos(\\angle RPS) = \\frac{7370.5 + 12100 - 5625}{18887} = \\frac{13845.5}{18887} = 0.7331',
          explanation: 'Use the unrounded \\( PR^2 = 7370.5 \\) directly to keep precision.',
        },
        {
          stepNumber: 8,
          description: 'Find the angle.',
          workingLatex: '\\angle RPS = \\cos^{-1}(0.7331) = 42.86\\ldots^\\circ \\approx 42.9^\\circ',
          explanation: '',
        },
        {
          stepNumber: 9,
          description: 'Compute the area of \\( \\triangle PRS \\) using sides \\( PR \\) and \\( PS \\) and the included angle.',
          workingLatex: '\\text{Area}_{PRS} = \\tfrac{1}{2}(85.85)(110)\\sin 42.86^\\circ = 4721.7 \\times 0.6801 = 3211.6\\ldots \\text{ m}^2',
          explanation: '',
        },
        {
          stepNumber: 10,
          description: 'Total area.',
          workingLatex: '\\text{Total} = 3222.6 + 3211.6 = 6434.2 \\approx 6430 \\text{ m}^2',
          explanation: 'Round to 3 s.f.',
        },
      ],
      finalAnswer: '\\( a)\\ PR \\approx 85.9 \\text{ m}\\quad b)\\ \\text{Total area} \\approx 6430 \\text{ m}^2 \\)',
    },
  },

  {
    id: 't1-035',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 35',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( AB = c \\), \\( BC = a \\) and \\( CA = b \\), with \\( a = 2b \\).\n\na) Show that \\( \\cos A = \\dfrac{b^2 + c^2 - 4b^2}{2bc} \\) simplifies to \\( \\cos A = \\dfrac{c^2 - 3b^2}{2bc} \\).\n\nb) In the specific case where \\( b = 5 \\) cm, \\( c = 7 \\) cm, find angle \\( A \\) to 1 d.p.\n\nc) Find the area of the triangle to 3 s.f.',
    marks: 8,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'algebraic manipulation', 'area of triangle', 'exam-style', 'proof'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch and set up: note \\( a = 2b \\).',
          workingLatex: 'a = 2b \\implies a^2 = 4b^2',
          explanation: 'Starting from the standard cosine rule \\( \\cos A = (b^2 + c^2 - a^2)/(2bc) \\) and substituting \\( a^2 = 4b^2 \\) gives \\( \\cos A = (b^2 + c^2 - 4b^2)/(2bc) = (c^2 - 3b^2)/(2bc) \\).',
          diagram: {
            xMin: -3, xMax: 9, yMin: -3, yMax: 6, hideAxes: true,
            lines: [
              { from: [0, 0], to: [7, 0], label: 'c = 7', labelAt: [3.5, -0.9] },
              { from: [0, 0], to: [-1.86, 4.64], label: 'b = 5', labelAt: [-2.2, 2.3] },
              { from: [7, 0], to: [-1.86, 4.64], label: 'a = 10', labelAt: [3.0, 3.0] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 's' },
              { at: [7, 0], label: 'B', labelAnchor: 'se' },
              { at: [-1.86, 4.64], label: 'C', labelAnchor: 'nw' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Part (a): write the cosine rule for \\( A \\).',
          workingLatex: '\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}',
          explanation: 'Angle \\( A \\) is opposite side \\( a \\).',
        },
        {
          stepNumber: 3,
          description: 'Substitute \\( a^2 = 4b^2 \\).',
          workingLatex: '\\cos A = \\frac{b^2 + c^2 - 4b^2}{2bc} = \\frac{c^2 - 3b^2}{2bc}',
          explanation: 'Collect like terms in the numerator: \\( b^2 - 4b^2 = -3b^2 \\). \\(\\square\\)',
        },
        {
          stepNumber: 4,
          description: 'Part (b): substitute \\( b = 5 \\), \\( c = 7 \\).',
          workingLatex: '\\cos A = \\frac{7^2 - 3(5)^2}{2 \\times 5 \\times 7} = \\frac{49 - 75}{70} = \\frac{-26}{70}',
          explanation: '',
        },
        {
          stepNumber: 5,
          description: 'Simplify.',
          workingLatex: '\\cos A = -\\frac{13}{35} \\approx -0.3714',
          explanation: 'Negative, so \\( A \\) is obtuse — consistent with the long opposite side \\( a = 10 \\).',
        },
        {
          stepNumber: 6,
          description: 'Find \\( A \\).',
          workingLatex: 'A = \\cos^{-1}(-0.3714) = 111.80\\ldots^\\circ \\approx 111.8^\\circ',
          explanation: '',
        },
        {
          stepNumber: 7,
          description: 'Part (c): apply the area formula with sides \\( b \\), \\( c \\), included angle \\( A \\).',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times b \\times c \\times \\sin A = \\tfrac{1}{2} \\times 5 \\times 7 \\times \\sin 111.8^\\circ',
          explanation: 'Sides \\( b = CA \\) and \\( c = AB \\) meet at \\( A \\).',
        },
        {
          stepNumber: 8,
          description: 'Evaluate.',
          workingLatex: '\\text{Area} = 17.5 \\times 0.9285 = 16.25\\ldots \\approx 16.2 \\text{ cm}^2',
          explanation: '\\( \\sin 111.8^\\circ \\approx 0.9285 \\).',
        },
      ],
      finalAnswer: '\\( a)\\ \\cos A = \\dfrac{c^2 - 3b^2}{2bc}\\quad b)\\ A \\approx 111.8^\\circ\\quad c)\\ \\text{Area} \\approx 16.2 \\text{ cm}^2 \\)',
    },
  },

  // ─── Q36–70: Additional Sine and Cosine Rule Questions ──────────────────

  {
    id: 't1-036',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 36',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( A = 40^\\circ \\), \\( B = 75^\\circ \\) and \\( a = 10 \\) cm. Find \\( b \\) to 3 s.f.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'find side'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch and identify the side–angle pairs.',
          workingLatex: 'a = 10 \\leftrightarrow A = 40^\\circ, \\quad b = ? \\leftrightarrow B = 75^\\circ',
          explanation: 'Two angles and the side opposite one of them are given — apply the sine rule.',
          diagram: {
            xMin: -3, xMax: 18, yMin: -3, yMax: 16, hideAxes: true,
            lines: [
              { from: [0, 0], to: [15.03, 0], label: 'c', labelAt: [7.5, -1.0] },
              { from: [0, 0], to: [10.55, 8.86], label: 'b = ?', labelAt: [4.0, 5.0] },
              { from: [15.03, 0], to: [10.55, 8.86], label: 'a = 10', labelAt: [13.5, 4.5] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [15.03, 0], label: 'B', labelAnchor: 'se' },
              { at: [10.55, 8.86], label: 'C', labelAnchor: 'n' },
              { at: [1.82, 0.663], label: '40°', labelAnchor: 'center', r: 0 },
              { at: [13.38, 1.014], label: '75°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Set up the sine rule.',
          workingLatex: '\\frac{b}{\\sin B} = \\frac{a}{\\sin A} \\implies \\frac{b}{\\sin 75^\\circ} = \\frac{10}{\\sin 40^\\circ}',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( b \\).',
          workingLatex: 'b = \\frac{10 \\sin 75^\\circ}{\\sin 40^\\circ} = \\frac{10 \\times 0.9659}{0.6428} = 15.03\\ldots',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Round.',
          workingLatex: 'b \\approx 15.0 \\text{ cm}',
          explanation: '',
        },
      ],
      finalAnswer: '\\( b \\approx 15.0 \\text{ cm} \\)',
    },
  },

  {
    id: 't1-037',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 37',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( PQR \\), \\( PQ = 8 \\) cm, \\( QR = 11 \\) cm and \\( Q = 52^\\circ \\). Find \\( PR \\) to 3 s.f.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'find side'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch with the included angle at \\( Q \\).',
          workingLatex: 'PQ = 8,\\ QR = 11,\\ Q = 52^\\circ',
          explanation: 'SAS setup — apply the cosine rule for the side opposite the known angle.',
          diagram: {
            xMin: -3, xMax: 14, yMin: -3, yMax: 8, hideAxes: true,
            lines: [
              { from: [0, 0], to: [11, 0], label: 'QR = 11 cm', labelAt: [5.5, -1.0] },
              { from: [0, 0], to: [4.93, 6.30], label: 'PQ = 8 cm', labelAt: [1.5, 3.5] },
              { from: [11, 0], to: [4.93, 6.30], label: 'PR = ?', labelAt: [9.0, 3.5] },
            ],
            points: [
              { at: [0, 0], label: 'Q', labelAnchor: 'sw' },
              { at: [11, 0], label: 'R', labelAnchor: 'se' },
              { at: [4.93, 6.3], label: 'P', labelAnchor: 'n' },
              { at: [1.247, 0.608], label: '52°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Write and substitute the cosine rule.',
          workingLatex: 'PR^2 = 8^2 + 11^2 - 2(8)(11)\\cos 52^\\circ = 64 + 121 - 176\\cos 52^\\circ',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Evaluate.',
          workingLatex: 'PR^2 = 185 - 176 \\times 0.6157 = 185 - 108.36 = 76.64',
          explanation: '\\( \\cos 52^\\circ \\approx 0.6157 \\).',
        },
        {
          stepNumber: 4,
          description: 'Square root.',
          workingLatex: 'PR = \\sqrt{76.64} = 8.755\\ldots \\approx 8.75 \\text{ cm}',
          explanation: '',
        },
      ],
      finalAnswer: '\\( PR \\approx 8.75 \\text{ cm} \\)',
    },
  },

  {
    id: 't1-038',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 38',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( a = 7 \\), \\( b = 9 \\), \\( c = 12 \\). Find angle \\( C \\) to 1 d.p.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'find angle'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch and identify \\( C \\) as opposite the longest side \\( c = 12 \\).',
          workingLatex: 'a = 7, b = 9, c = 12 \\implies \\text{find largest angle, } C',
          explanation: 'Largest angle opposite the longest side. With all three sides known, use the cosine rule for the angle.',
          diagram: {
            xMin: -3, xMax: 15, yMin: -3, yMax: 8, hideAxes: true,
            lines: [
              { from: [0, 0], to: [12, 0], label: 'c = 12', labelAt: [6, -1.0] },
              { from: [0, 0], to: [4.79, 5.97], label: 'b = 9', labelAt: [1.5, 3.0] },
              { from: [12, 0], to: [4.79, 5.97], label: 'a = 7', labelAt: [9.0, 3.0] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [12, 0], label: 'B', labelAnchor: 'se' },
              { at: [4.79, 5.97], label: 'C', labelAnchor: 'n' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Write the cosine rule for \\( C \\).',
          workingLatex: '\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{49 + 81 - 144}{2 \\times 7 \\times 9}',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Compute.',
          workingLatex: '\\cos C = \\frac{-14}{126} = -0.1111',
          explanation: 'Negative, so \\( C \\) is obtuse.',
        },
        {
          stepNumber: 4,
          description: 'Find \\( C \\).',
          workingLatex: 'C = \\cos^{-1}(-0.1111) = 96.38\\ldots^\\circ \\approx 96.4^\\circ',
          explanation: '',
        },
      ],
      finalAnswer: '\\( C \\approx 96.4^\\circ \\)',
    },
  },

  {
    id: 't1-039',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 39',
    difficulty: 'Foundation',
    questionText: 'Find the area of triangle \\( ABC \\) where \\( a = 14 \\) cm, \\( b = 10 \\) cm and \\( C = 65^\\circ \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['area of triangle', 'sine formula'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch with included angle \\( C \\).',
          workingLatex: 'a = 14, b = 10, C = 65^\\circ',
          explanation: 'Sides \\( a \\) and \\( b \\) meet at \\( C \\) — SAS area formula applies.',
          diagram: {
            xMin: -3, xMax: 17, yMin: -3, yMax: 11, hideAxes: true,
            lines: [
              { from: [0, 0], to: [14, 0], label: 'a = 14', labelAt: [7, -1.0] },
              { from: [0, 0], to: [4.226, 9.063], label: 'b = 10', labelAt: [1.0, 5.0] },
              { from: [14, 0], to: [4.226, 9.063], label: 'c', labelAt: [10.0, 5.0] },
            ],
            points: [
              { at: [0, 0], label: 'C', labelAnchor: 'sw' },
              { at: [14, 0], label: 'B', labelAnchor: 'se' },
              { at: [4.226, 9.063], label: 'A', labelAnchor: 'n' },
              { at: [1.574, 1.003], label: '65°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Apply the area formula.',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times a \\times b \\times \\sin C = \\tfrac{1}{2} \\times 14 \\times 10 \\times \\sin 65^\\circ',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Evaluate.',
          workingLatex: '\\text{Area} = 70 \\times 0.9063 = 63.44\\ldots \\approx 63.4 \\text{ cm}^2',
          explanation: '\\( \\sin 65^\\circ \\approx 0.9063 \\).',
        },
      ],
      finalAnswer: '\\( \\text{Area} \\approx 63.4 \\text{ cm}^2 \\)',
    },
  },

  {
    id: 't1-040',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 40',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( XYZ \\), \\( X = 35^\\circ \\), \\( Y = 80^\\circ \\) and \\( XY = 16 \\) cm. Find \\( YZ \\) to 3 s.f.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'find side'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch and find the third angle.',
          workingLatex: 'Z = 180^\\circ - 35^\\circ - 80^\\circ = 65^\\circ',
          explanation: 'We need \\( Z \\) because the known side \\( XY \\) is opposite \\( Z \\).',
          diagram: {
            xMin: -3, xMax: 19, yMin: -3, yMax: 11, hideAxes: true,
            lines: [
              { from: [0, 0], to: [16, 0], label: 'XY = 16 cm', labelAt: [8, -1.0] },
              { from: [0, 0], to: [8.30, 5.81], label: 'XZ', labelAt: [3.0, 3.0] },
              { from: [16, 0], to: [8.30, 5.81], label: 'YZ = ?', labelAt: [13.5, 3.5] },
            ],
            points: [
              { at: [0, 0], label: 'X', labelAnchor: 'sw' },
              { at: [16, 0], label: 'Y', labelAnchor: 'se' },
              { at: [8.3, 5.81], label: 'Z', labelAnchor: 'n' },
              { at: [1.706, 0.538], label: '35°', labelAnchor: 'center', r: 0 },
              { at: [14.304, 0.568], label: '80°', labelAnchor: 'center', r: 0 },
              { at: [8.268, 4.021], label: '65°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Set up the sine rule with \\( XY \\) opposite \\( Z \\) and \\( YZ \\) opposite \\( X \\).',
          workingLatex: '\\frac{YZ}{\\sin X} = \\frac{XY}{\\sin Z} \\implies YZ = \\frac{16 \\sin 35^\\circ}{\\sin 65^\\circ}',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Evaluate.',
          workingLatex: 'YZ = \\frac{16 \\times 0.5736}{0.9063} = \\frac{9.178}{0.9063} = 10.13\\ldots',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Round.',
          workingLatex: 'YZ \\approx 10.1 \\text{ cm}',
          explanation: '',
        },
      ],
      finalAnswer: '\\( YZ \\approx 10.1 \\text{ cm} \\)',
    },
  },

  {
    id: 't1-041',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 41',
    difficulty: 'Foundation',
    questionText: 'Two sides of a triangle are 15 cm and 20 cm. The angle between them is \\( 110^\\circ \\). Find the third side to 3 s.f.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'find side', 'obtuse'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch with the obtuse included angle.',
          workingLatex: 'b = 15,\\ c = 20,\\ A = 110^\\circ',
          explanation: '',
          diagram: {
            xMin: -8, xMax: 22, yMin: -3, yMax: 16, hideAxes: true,
            lines: [
              { from: [0, 0], to: [20, 0], label: '20 cm', labelAt: [10, -1.0] },
              { from: [0, 0], to: [-5.13, 14.10], label: '15 cm', labelAt: [-4.5, 7.0] },
              { from: [20, 0], to: [-5.13, 14.10], label: 'a = ?', labelAt: [7.0, 8.0] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 's' },
              { at: [20, 0], label: 'B', labelAnchor: 'se' },
              { at: [-5.13, 14.1], label: 'C', labelAnchor: 'nw' },
              { at: [1.83, 2.614], label: '110°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Apply the cosine rule.',
          workingLatex: 'a^2 = 15^2 + 20^2 - 2(15)(20)\\cos 110^\\circ = 225 + 400 - 600 \\cos 110^\\circ',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Apply \\( \\cos 110^\\circ \\approx -0.3420 \\).',
          workingLatex: 'a^2 = 625 - 600 \\times (-0.3420) = 625 + 205.21 = 830.21',
          explanation: 'Subtracting a negative adds, so the side is longer than it would be at \\( 90^\\circ \\).',
        },
        {
          stepNumber: 4,
          description: 'Square root.',
          workingLatex: 'a = \\sqrt{830.21} = 28.81\\ldots \\approx 28.8 \\text{ cm}',
          explanation: '',
        },
      ],
      finalAnswer: '\\( a \\approx 28.8 \\text{ cm} \\)',
    },
  },

  {
    id: 't1-042',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 42',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( a = 8 \\), \\( b = 6 \\), \\( A = 50^\\circ \\). Find angle \\( B \\) to 1 d.p.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'find angle'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch and apply the sine rule.',
          workingLatex: '\\frac{\\sin B}{b} = \\frac{\\sin A}{a} \\implies \\sin B = \\frac{6 \\sin 50^\\circ}{8}',
          explanation: 'Since \\( a > b \\), \\( A > B \\), so \\( B \\) must be acute — no ambiguous case here.',
          diagram: {
            xMin: -3, xMax: 13, yMin: -3, yMax: 7, hideAxes: true,
            lines: [
              { from: [0, 0], to: [10.16, 0], label: 'c', labelAt: [5, -1.0] },
              { from: [0, 0], to: [3.857, 4.596], label: 'b = 6', labelAt: [1.0, 2.5] },
              { from: [10.16, 0], to: [3.857, 4.596], label: 'a = 8', labelAt: [8.0, 2.8] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [10.16, 0], label: 'B', labelAnchor: 'se' },
              { at: [3.857, 4.596], label: 'C', labelAnchor: 'n' },
              { at: [1.086, 0.506], label: '50°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Evaluate \\( \\sin B \\).',
          workingLatex: '\\sin B = \\frac{6 \\times 0.7660}{8} = \\frac{4.596}{8} = 0.5745',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Inverse sine.',
          workingLatex: 'B = \\sin^{-1}(0.5745) = 35.07\\ldots^\\circ \\approx 35.1^\\circ',
          explanation: '',
        },
      ],
      finalAnswer: '\\( B \\approx 35.1^\\circ \\)',
    },
  },

  {
    id: 't1-043',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 43',
    difficulty: 'Foundation',
    questionText: 'A ship sails 12 km on a bearing of \\( 050^\\circ \\), then 8 km on a bearing of \\( 120^\\circ \\). Find the distance from the starting point to 3 s.f.',
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'bearings', 'real-world'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch the two legs of the journey. The interior angle of the triangle at the turning point is the supplement of the change in bearing.',
          workingLatex: '\\Delta\\text{bearing} = 120^\\circ - 50^\\circ = 70^\\circ \\implies \\text{interior angle at turn} = 180^\\circ - 70^\\circ = 110^\\circ',
          explanation: 'When you arrive at the turning point heading on bearing \\( 050^\\circ \\) and then leave on bearing \\( 120^\\circ \\), the interior angle of the triangle at that vertex (between the leg you came in on, viewed from the vertex back toward the start, and the leg you are leaving on) is \\( 180^\\circ - 70^\\circ = 110^\\circ \\).',
          diagram: {
            xMin: -3, xMax: 18, yMin: -3, yMax: 12, hideAxes: true,
            lines: [
              { from: [0, 0], to: [9.19, 7.71], label: '12 km', labelAt: [3.5, 4.5] },
              { from: [9.19, 7.71], to: [16.12, 3.71], label: '8 km', labelAt: [13.5, 6.5] },
              { from: [16.12, 3.71], to: [0, 0], color: 'gray', dashed: true, label: 'd = ?', labelAt: [8.0, 1.0] },
            ],
            points: [
              { at: [0, 0], label: 'S', labelAnchor: 'sw' },
              { at: [9.19, 7.71], label: 'Turn', labelAnchor: 'n' },
              { at: [16.12, 3.71], label: 'End', labelAnchor: 'e' },
              { at: [9.349, 5.89], label: '110°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Apply the cosine rule.',
          workingLatex: 'd^2 = 12^2 + 8^2 - 2(12)(8)\\cos 110^\\circ = 144 + 64 - 192\\cos 110^\\circ',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Evaluate.',
          workingLatex: 'd^2 = 208 - 192 \\times (-0.3420) = 208 + 65.66 = 273.66',
          explanation: '\\( \\cos 110^\\circ \\approx -0.3420 \\).',
        },
        {
          stepNumber: 4,
          description: 'Square root.',
          workingLatex: 'd = \\sqrt{273.66} = 16.54\\ldots \\approx 16.5 \\text{ km}',
          explanation: '',
        },
      ],
      finalAnswer: '\\( d \\approx 16.5 \\text{ km} \\)',
    },
  },

  {
    id: 't1-044',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 44',
    difficulty: 'Foundation',
    questionText: 'Find the area of a triangle with sides 8 cm, 10 cm and 14 cm.',
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ['area of triangle', 'cosine rule first'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch and label sides.',
          workingLatex: 'a = 14,\\ b = 10,\\ c = 8 \\implies \\text{find angle, then area}',
          explanation: 'Three sides given. Find the angle opposite the longest side (\\( a = 14 \\)) with the cosine rule, then use the sine area formula with the two remaining sides.',
          diagram: {
            xMin: -3, xMax: 16, yMin: -3, yMax: 8, hideAxes: true,
            lines: [
              { from: [0, 0], to: [14, 0], label: 'a = 14', labelAt: [7, -1.0] },
              { from: [0, 0], to: [-1.6, 7.84], label: 'c = 8', labelAt: [-2.0, 4.0] },
              { from: [14, 0], to: [-1.6, 7.84], label: 'b = 10', labelAt: [7.5, 4.5] },
            ],
            points: [
              { at: [0, 0], label: 'B', labelAnchor: 's' },
              { at: [14, 0], label: 'C', labelAnchor: 'se' },
              { at: [-1.6, 7.84], label: 'A', labelAnchor: 'nw' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Cosine rule for the angle opposite the longest side.',
          workingLatex: '\\cos A = \\frac{b^2 + c^2 - a^2}{2bc} = \\frac{100 + 64 - 196}{160} = \\frac{-32}{160} = -0.2',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Find \\( A \\).',
          workingLatex: 'A = \\cos^{-1}(-0.2) = 101.54\\ldots^\\circ',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Area formula with sides \\( b \\), \\( c \\) and included angle \\( A \\).',
          workingLatex: '\\text{Area} = \\tfrac{1}{2}(10)(8)\\sin 101.54^\\circ = 40 \\times 0.9798 = 39.19\\ldots',
          explanation: '',
        },
        {
          stepNumber: 5,
          description: 'Round.',
          workingLatex: '\\text{Area} \\approx 39.2 \\text{ cm}^2',
          explanation: '',
        },
      ],
      finalAnswer: '\\( \\text{Area} \\approx 39.2 \\text{ cm}^2 \\)',
    },
  },

  {
    id: 't1-045',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 45',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( AB = 5 \\), \\( BC = 7 \\), \\( B = 60^\\circ \\). Find \\( AC \\) exactly.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'find side', 'exact'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch with the included angle at \\( B \\).',
          workingLatex: 'AB = 5,\\ BC = 7,\\ B = 60^\\circ',
          explanation: 'SAS with the special angle \\( 60^\\circ \\) (\\( \\cos 60^\\circ = \\tfrac{1}{2} \\)), so the answer is expected to simplify exactly.',
          diagram: {
            xMin: -3, xMax: 10, yMin: -3, yMax: 6, hideAxes: true,
            lines: [
              { from: [0, 0], to: [7, 0], label: 'BC = 7', labelAt: [3.5, -0.9] },
              { from: [0, 0], to: [2.5, 4.33], label: 'AB = 5', labelAt: [0.7, 2.5] },
              { from: [7, 0], to: [2.5, 4.33], label: 'AC = ?', labelAt: [5.5, 2.5] },
            ],
            points: [
              { at: [0, 0], label: 'B', labelAnchor: 'sw' },
              { at: [7, 0], label: 'C', labelAnchor: 'se' },
              { at: [2.5, 4.33], label: 'A', labelAnchor: 'n' },
              { at: [0.79, 0.456], label: '60°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Apply the cosine rule.',
          workingLatex: 'AC^2 = AB^2 + BC^2 - 2 \\cdot AB \\cdot BC \\cos B = 25 + 49 - 2(5)(7)\\cos 60^\\circ',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Use exact \\( \\cos 60^\\circ = \\tfrac{1}{2} \\).',
          workingLatex: 'AC^2 = 74 - 70 \\times \\tfrac{1}{2} = 74 - 35 = 39',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Take the exact square root.',
          workingLatex: 'AC = \\sqrt{39}',
          explanation: 'Since 39 has no square factors greater than 1, \\( \\sqrt{39} \\) is already in simplest surd form.',
        },
      ],
      finalAnswer: 'AC = \\sqrt{39}',
    },
  },

  {
    id: 't1-046',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 46',
    difficulty: 'Foundation',
    questionText: 'The area of triangle \\( PQR \\) is 30 cm\\(^2\\). \\( PQ = 8 \\) cm, \\( QR = 10 \\) cm. Find the two possible values of angle \\( Q \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['area of triangle', 'find angle from area'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch with \\( Q \\) the included angle of the two given sides.',
          workingLatex: 'PQ = 8,\\ QR = 10,\\ \\text{area} = 30',
          explanation: 'Given area and two sides meeting at a vertex, the angle at that vertex follows from the sine area formula. Because \\( \\sin\\theta = \\sin(180^\\circ - \\theta) \\), two values of \\( Q \\) typically work.',
          diagram: {
            xMin: -3, xMax: 13, yMin: -3, yMax: 8, hideAxes: true,
            lines: [
              { from: [0, 0], to: [10, 0], label: 'QR = 10', labelAt: [5, -1.0] },
              { from: [0, 0], to: [5.30, 6.0], label: 'PQ = 8', labelAt: [1.5, 3.5] },
              { from: [10, 0], to: [5.30, 6.0], label: 'PR', labelAt: [8.5, 3.0] },
            ],
            points: [
              { at: [0, 0], label: 'Q', labelAnchor: 'sw' },
              { at: [10, 0], label: 'R', labelAnchor: 'se' },
              { at: [5.30, 6.0], label: 'P', labelAnchor: 'n' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Apply the area formula.',
          workingLatex: '30 = \\tfrac{1}{2}(8)(10)\\sin Q = 40 \\sin Q',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( \\sin Q \\).',
          workingLatex: '\\sin Q = \\frac{30}{40} = 0.75',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Find both values.',
          workingLatex: 'Q_1 = \\sin^{-1}(0.75) = 48.59\\ldots^\\circ \\approx 48.6^\\circ \\quad \\text{or} \\quad Q_2 = 180^\\circ - 48.59^\\circ \\approx 131.4^\\circ',
          explanation: 'Both give the same area, since the sine of an angle and its supplement are equal.',
        },
      ],
      finalAnswer: '\\( Q \\approx 48.6^\\circ \\text{ or } Q \\approx 131.4^\\circ \\)',
    },
  },

  {
    id: 't1-047',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 47',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( A = 30^\\circ \\), \\( a = 6 \\), \\( b = 10 \\). Show there are two possible triangles and find both values of \\( B \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'ambiguous case'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch the ambiguous case. \\( b > a \\) and \\( A \\) is acute, with \\( b \\sin A < a \\), the classic two-triangle scenario.',
          workingLatex: 'b \\sin A = 10 \\sin 30^\\circ = 5,\\ \\text{and } 5 < a = 6 \\implies \\text{two triangles}',
          explanation: 'The condition \\( b \\sin A < a < b \\) (with \\( A \\) acute and \\( b > a \\)) gives two valid triangles.',
          diagram: {
            xMin: -3, xMax: 13, yMin: -3, yMax: 7, hideAxes: true,
            lines: [
              { from: [0, 0], to: [11.94, 0], label: 'c (one option)', labelAt: [6, -1.0] },
              { from: [0, 0], to: [8.66, 5.0], label: 'b = 10', labelAt: [3.5, 3.0] },
              { from: [11.94, 0], to: [8.66, 5.0], label: 'a = 6', labelAt: [10.5, 3.0] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [11.94, 0], label: 'B₁ (acute)', labelAnchor: 'se' },
              { at: [8.66, 5], label: 'C', labelAnchor: 'n' },
              { at: [1.348, 0.361], label: '30°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Apply the sine rule.',
          workingLatex: '\\sin B = \\frac{b \\sin A}{a} = \\frac{10 \\times 0.5}{6} = \\frac{5}{6} \\approx 0.8333',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Find both values.',
          workingLatex: 'B_1 = \\sin^{-1}(5/6) = 56.44\\ldots^\\circ \\approx 56.4^\\circ \\quad \\text{or} \\quad B_2 = 180^\\circ - 56.4^\\circ = 123.6^\\circ',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Check feasibility.',
          workingLatex: 'A + B_1 = 30^\\circ + 56.4^\\circ = 86.4^\\circ < 180^\\circ \\checkmark\\\\ A + B_2 = 30^\\circ + 123.6^\\circ = 153.6^\\circ < 180^\\circ \\checkmark',
          explanation: 'Both leave a positive remainder for \\( C \\), so both triangles are valid.',
        },
      ],
      finalAnswer: '\\( B \\approx 56.4^\\circ \\text{ or } B \\approx 123.6^\\circ \\)',
    },
  },

  {
    id: 't1-048',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 48',
    difficulty: 'Foundation',
    questionText: 'From point \\( A \\), a tower is on a bearing of \\( 060^\\circ \\) at a distance of 500 m. From point \\( B \\), 300 m due east of \\( A \\), find the bearing of the tower from \\( B \\).',
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'sine rule', 'bearings', 'real-world'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Set up coordinates with north up. Place \\( A \\) at origin; \\( B \\) is 300 m due east, so \\( B = (300, 0) \\); the tower \\( T \\) is at bearing \\( 060^\\circ \\) from \\( A \\), distance 500 m.',
          workingLatex: 'T = (500\\sin 60^\\circ, 500\\cos 60^\\circ) = (433.0, 250.0)',
          explanation: 'A bearing of \\( 060^\\circ \\) means \\( 60^\\circ \\) east of north, so the east-component is \\( 500\\sin 60^\\circ \\) and the north-component is \\( 500\\cos 60^\\circ \\).',
          diagram: {
            xMin: -50, xMax: 550, yMin: -30, yMax: 300, hideAxes: true,
            lines: [
              { from: [0, 0], to: [300, 0], label: 'AB = 300 m', labelAt: [150, -15] },
              { from: [0, 0], to: [433.0, 250.0], label: '500 m', labelAt: [180, 145] },
              { from: [300, 0], to: [433.0, 250.0], label: '\\overrightarrow{BT}', labelAt: [400, 130] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [300, 0], label: 'B', labelAnchor: 's' },
              { at: [433.0, 250.0], label: 'T', labelAnchor: 'n' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Compute the components of \\( \\overrightarrow{BT} \\).',
          workingLatex: '\\overrightarrow{BT} = (433.0 - 300, 250.0 - 0) = (133.0, 250.0)',
          explanation: 'East-component is positive (T is east of B), and north-component is positive (T is north of B). So T lies in the NE quadrant from B.',
        },
        {
          stepNumber: 3,
          description: 'Compute the bearing from \\( B \\) to \\( T \\).',
          workingLatex: '\\text{Bearing} = \\arctan\\!\\left(\\frac{\\text{east}}{\\text{north}}\\right) = \\arctan\\!\\left(\\frac{133.0}{250.0}\\right) = \\arctan(0.5320)',
          explanation: 'Bearing is measured clockwise from north, so for a vector with components (east, north) the bearing is \\( \\arctan(\\text{east}/\\text{north}) \\) when both components are positive.',
        },
        {
          stepNumber: 4,
          description: 'Evaluate.',
          workingLatex: '\\text{Bearing} = 28.02\\ldots^\\circ \\approx 028^\\circ',
          explanation: 'Bearings are conventionally written as three-digit values.',
        },
      ],
      finalAnswer: '\\( \\text{Bearing of T from B} \\approx 028^\\circ \\)',
    },
  },

  {
    id: 't1-049',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 49',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( a = 5 \\), \\( b = 5 \\), \\( C = 72^\\circ \\). Find \\( c \\) to 3 s.f.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'isosceles'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch the isosceles triangle with the apex angle at \\( C \\).',
          workingLatex: 'a = b = 5 \\implies \\text{isosceles}',
          explanation: 'With two equal sides meeting at a known angle, the cosine rule gives the opposite (base) side directly.',
          diagram: {
            xMin: -3, xMax: 8, yMin: -3, yMax: 6, hideAxes: true,
            lines: [
              { from: [0, 0], to: [5, 0], label: 'a = 5', labelAt: [2.5, -1.0] },
              { from: [0, 0], to: [1.545, 4.755], label: 'b = 5', labelAt: [0.0, 2.5] },
              { from: [5, 0], to: [1.545, 4.755], label: 'c = ?', labelAt: [4.0, 2.5] },
            ],
            points: [
              { at: [0, 0], label: 'C', labelAnchor: 's' },
              { at: [5, 0], label: 'A', labelAnchor: 'se' },
              { at: [1.545, 4.755], label: 'B', labelAnchor: 'n' },
              { at: [0.642, 0.467], label: '72°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Apply the cosine rule.',
          workingLatex: 'c^2 = a^2 + b^2 - 2ab\\cos C = 25 + 25 - 50\\cos 72^\\circ',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Evaluate \\( \\cos 72^\\circ \\).',
          workingLatex: 'c^2 = 50 - 50 \\times 0.3090 = 50 - 15.45 = 34.55',
          explanation: '\\( \\cos 72^\\circ \\approx 0.3090 \\).',
        },
        {
          stepNumber: 4,
          description: 'Take the square root.',
          workingLatex: 'c = \\sqrt{34.55} = 5.878\\ldots \\approx 5.88',
          explanation: '',
        },
      ],
      finalAnswer: '\\( c \\approx 5.88 \\)',
    },
  },

  {
    id: 't1-050',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 50',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( A = 42^\\circ \\), \\( B = 63^\\circ \\), \\( c = 25 \\) cm. Find the perimeter to 3 s.f.',
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'perimeter'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch and find the third angle.',
          workingLatex: 'C = 180^\\circ - 42^\\circ - 63^\\circ = 75^\\circ',
          explanation: 'Need \\( C \\) because the known side \\( c \\) is opposite it.',
          diagram: {
            xMin: -3, xMax: 28, yMin: -3, yMax: 18, hideAxes: true,
            lines: [
              { from: [0, 0], to: [25, 0], label: 'c = 25 cm', labelAt: [12.5, -1.2] },
              { from: [0, 0], to: [10.47, 9.42], label: 'b', labelAt: [3.5, 5.5] },
              { from: [25, 0], to: [10.47, 9.42], label: 'a', labelAt: [19.0, 5.5] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [25, 0], label: 'B', labelAnchor: 'se' },
              { at: [10.47, 9.42], label: 'C', labelAnchor: 'n' },
              { at: [2.633, 1.01], label: '42°', labelAnchor: 'center', r: 0 },
              { at: [22.296, 0.8], label: '63°', labelAnchor: 'center', r: 0 },
              { at: [10.692, 6.609], label: '75°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Find \\( a \\) (opposite \\( A \\)).',
          workingLatex: 'a = \\frac{c \\sin A}{\\sin C} = \\frac{25 \\sin 42^\\circ}{\\sin 75^\\circ} = \\frac{25 \\times 0.6691}{0.9659} = 17.32\\ldots',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Find \\( b \\) (opposite \\( B \\)).',
          workingLatex: 'b = \\frac{c \\sin B}{\\sin C} = \\frac{25 \\sin 63^\\circ}{\\sin 75^\\circ} = \\frac{25 \\times 0.8910}{0.9659} = 23.06\\ldots',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Compute the perimeter.',
          workingLatex: 'P = a + b + c = 17.32 + 23.06 + 25 = 65.38\\ldots \\approx 65.4 \\text{ cm}',
          explanation: '',
        },
      ],
      finalAnswer: '\\( P \\approx 65.4 \\text{ cm} \\)',
    },
  },

  {
    id: 't1-051',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 51',
    difficulty: 'Foundation',
    questionText: 'A parallelogram has sides 12 cm and 8 cm. One diagonal is 15 cm. Find the acute angle of the parallelogram.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'parallelogram'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch the parallelogram. The diagonal of length 15 cm divides the parallelogram into two congruent triangles, each with sides 12, 8, 15.',
          workingLatex: '\\text{Triangle: } 12,\\ 8,\\ 15',
          explanation: 'The two angles of a parallelogram are supplementary (sum to \\( 180^\\circ \\)). The diagonal joining the obtuse-angle vertices is the longer one, and is opposite the obtuse angle in our triangle.',
          diagram: {
            xMin: -3, xMax: 17, yMin: -3, yMax: 10, hideAxes: true,
            lines: [
              { from: [0, 0], to: [12, 0], label: '12 cm', labelAt: [6, -0.9] },
              { from: [0, 0], to: [-0.71, 7.96], label: '8 cm', labelAt: [-2.0, 4.0] },
              { from: [12, 0], to: [-0.71, 7.96], color: 'gray', dashed: true, label: '15 cm', labelAt: [5.0, 4.5] },
            ],
            points: [
              { at: [0, 0], label: 'θ (obtuse)', labelAnchor: 's' },
              { at: [12, 0], label: '', labelAnchor: 'se' },
              { at: [-0.71, 7.96], label: '', labelAnchor: 'nw' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Apply the cosine rule with the diagonal opposite the obtuse angle \\( \\theta \\).',
          workingLatex: '\\cos\\theta = \\frac{12^2 + 8^2 - 15^2}{2(12)(8)} = \\frac{144 + 64 - 225}{192} = \\frac{-17}{192} \\approx -0.0885',
          explanation: 'Negative, so \\( \\theta \\) is obtuse — consistent with placement.',
        },
        {
          stepNumber: 3,
          description: 'Find \\( \\theta \\).',
          workingLatex: '\\theta = \\cos^{-1}(-0.0885) = 95.08\\ldots^\\circ \\approx 95.1^\\circ',
          explanation: 'This is the obtuse angle of the parallelogram.',
        },
        {
          stepNumber: 4,
          description: 'The acute angle is the supplement.',
          workingLatex: '\\phi = 180^\\circ - 95.08^\\circ = 84.92\\ldots^\\circ \\approx 84.9^\\circ',
          explanation: 'Consecutive angles of a parallelogram are supplementary.',
        },
      ],
      finalAnswer: '\\( \\text{Acute angle} \\approx 84.9^\\circ \\)',
    },
  },

  {
    id: 't1-052',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 52',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( AB = 20 \\) cm, \\( AC = 15 \\) cm and \\( A = 40^\\circ \\). Find: (a) \\( BC \\); (b) the area; (c) angle \\( B \\).',
    marks: 7,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'area', 'sine rule', 'multi-part'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch with the SAS configuration at \\( A \\).',
          workingLatex: 'AB = 20,\\ AC = 15,\\ A = 40^\\circ',
          explanation: '',
          diagram: {
            xMin: -3, xMax: 22, yMin: -3, yMax: 12, hideAxes: true,
            lines: [
              { from: [0, 0], to: [20, 0], label: 'AB = 20', labelAt: [10, -1.0] },
              { from: [0, 0], to: [11.49, 9.64], label: 'AC = 15', labelAt: [4.5, 5.5] },
              { from: [20, 0], to: [11.49, 9.64], label: 'BC = ?', labelAt: [17.0, 5.0] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [20, 0], label: 'B', labelAnchor: 'se' },
              { at: [11.49, 9.64], label: 'C', labelAnchor: 'n' },
              { at: [2.249, 0.818], label: '40°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Part (a): cosine rule for \\( BC \\).',
          workingLatex: 'BC^2 = 20^2 + 15^2 - 2(20)(15)\\cos 40^\\circ = 625 - 600\\cos 40^\\circ',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Evaluate.',
          workingLatex: 'BC^2 = 625 - 600 \\times 0.7660 = 625 - 459.63 = 165.37 \\implies BC = 12.86\\ldots \\approx 12.9 \\text{ cm}',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Part (b): area.',
          workingLatex: '\\text{Area} = \\tfrac{1}{2}(20)(15)\\sin 40^\\circ = 150 \\times 0.6428 = 96.42\\ldots \\approx 96.4 \\text{ cm}^2',
          explanation: '',
        },
        {
          stepNumber: 5,
          description: 'Part (c): sine rule for \\( B \\) (opposite \\( AC = 15 \\)).',
          workingLatex: '\\sin B = \\frac{15 \\sin 40^\\circ}{BC} = \\frac{15 \\times 0.6428}{12.86} = \\frac{9.642}{12.86} = 0.7498',
          explanation: 'Use the unrounded value \\( BC \\approx 12.86 \\).',
        },
        {
          stepNumber: 6,
          description: 'Find \\( B \\).',
          workingLatex: 'B = \\sin^{-1}(0.7498) = 48.58\\ldots^\\circ \\approx 48.6^\\circ',
          explanation: 'Take the acute value: since \\( AB > AC \\), \\( C > B \\), so \\( B \\) is the smaller of the two non-\\( A \\) angles and must be acute.',
        },
      ],
      finalAnswer: '\\( (a)\\ BC \\approx 12.9 \\text{ cm}\\quad (b)\\ \\text{Area} \\approx 96.4 \\text{ cm}^2\\quad (c)\\ B \\approx 48.6^\\circ \\)',
    },
  },

  {
    id: 't1-053',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 53',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( a = 3 \\), \\( b = 4 \\), \\( c = 5 \\). Verify it is right-angled and find all angles.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['pythagoras', 'right-angled', 'find angles'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch with right angle at the vertex opposite the longest side.',
          workingLatex: 'a = 3,\\ b = 4,\\ c = 5',
          explanation: '',
          diagram: {
            xMin: -1, xMax: 6, yMin: -1, yMax: 5, hideAxes: true,
            lines: [
              { from: [0, 0], to: [4, 0], label: 'b = 4', labelAt: [2, -0.8] },
              { from: [0, 0], to: [0, 3], label: 'a = 3', labelAt: [-0.6, 1.5] },
              { from: [4, 0], to: [0, 3], label: 'c = 5', labelAt: [2.5, 2.0] },
            ],
            points: [
              { at: [0, 0], label: 'C', labelAnchor: 'sw' },
              { at: [4, 0], label: 'A', labelAnchor: 'se' },
              { at: [0, 3], label: 'B', labelAnchor: 'nw' },
              { at: [0.424, 0.424], label: '90°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Check Pythagoras for the longest side.',
          workingLatex: 'a^2 + b^2 = 9 + 16 = 25 = c^2 \\ \\checkmark',
          explanation: 'The converse of Pythagoras: if the squares of two sides sum to the square of the third, the triangle is right-angled at the vertex opposite the longest side.',
        },
        {
          stepNumber: 3,
          description: 'So the right angle is at \\( C \\) (opposite \\( c = 5 \\)).',
          workingLatex: 'C = 90^\\circ',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Find \\( A \\) (opposite \\( a = 3 \\)).',
          workingLatex: '\\sin A = \\frac{a}{c} = \\frac{3}{5} = 0.6 \\implies A = \\sin^{-1}(0.6) = 36.87\\ldots^\\circ \\approx 36.9^\\circ',
          explanation: 'In a right-angled triangle, \\( \\sin(\\text{angle}) = (\\text{opposite})/(\\text{hypotenuse}) \\).',
        },
        {
          stepNumber: 5,
          description: 'Find \\( B \\).',
          workingLatex: 'B = 90^\\circ - A = 90^\\circ - 36.87^\\circ = 53.13\\ldots^\\circ \\approx 53.1^\\circ',
          explanation: '',
        },
      ],
      finalAnswer: '\\( A \\approx 36.9^\\circ,\\ B \\approx 53.1^\\circ,\\ C = 90^\\circ \\)',
    },
  },

  {
    id: 't1-054',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 54',
    difficulty: 'Foundation',
    questionText: 'A field is in the shape of a triangle with sides 120 m, 90 m and 80 m. Find its area in hectares (1 hectare = 10000 m\\(^2\\)).',
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ['area', 'cosine rule', 'real-world'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch the field.',
          workingLatex: 'a = 120,\\ b = 90,\\ c = 80',
          explanation: 'All three sides known; find an angle by cosine rule and then apply the sine area formula.',
          diagram: {
            xMin: -3, xMax: 130, yMin: -3, yMax: 80, hideAxes: true,
            lines: [
              { from: [0, 0], to: [120, 0], label: 'a = 120 m', labelAt: [60, -3.5] },
              { from: [0, 0], to: [78.75, 38.69], label: 'c = 80 m', labelAt: [30.0, 22.0] },
              { from: [120, 0], to: [78.75, 38.69], label: 'b = 90 m', labelAt: [105.0, 22.0] },
            ],
            points: [
              { at: [0, 0], label: 'B', labelAnchor: 'sw' },
              { at: [120, 0], label: 'C', labelAnchor: 'se' },
              { at: [78.75, 38.69], label: 'A', labelAnchor: 'n' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Find the angle opposite the longest side, \\( a = 120 \\).',
          workingLatex: '\\cos A = \\frac{b^2 + c^2 - a^2}{2bc} = \\frac{8100 + 6400 - 14400}{2(90)(80)} = \\frac{100}{14400} = 0.00694',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Find \\( A \\).',
          workingLatex: 'A = \\cos^{-1}(0.00694) = 89.60\\ldots^\\circ',
          explanation: 'Very nearly a right angle, since the cosine is very close to zero.',
        },
        {
          stepNumber: 4,
          description: 'Compute the area using \\( b \\), \\( c \\), and the included angle \\( A \\).',
          workingLatex: '\\text{Area} = \\tfrac{1}{2}(90)(80)\\sin 89.60^\\circ = 3600 \\times 0.99998 = 3600 \\text{ m}^2',
          explanation: 'Effectively a right-angled calculation; the deviation from \\( 90^\\circ \\) is in the 5th decimal place of the sine.',
        },
        {
          stepNumber: 5,
          description: 'Convert to hectares.',
          workingLatex: '\\text{Area} = \\frac{3600}{10000} \\text{ ha} = 0.36 \\text{ ha}',
          explanation: '',
        },
      ],
      finalAnswer: '\\text{Area} = 0.36 \\text{ hectares}',
    },
  },

  {
    id: 't1-055',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 55',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( DEF \\), \\( D = 100^\\circ \\), \\( E = 35^\\circ \\) and \\( DE = 18 \\) cm. Find the area of the triangle.',
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'area', 'obtuse'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch and find the third angle.',
          workingLatex: 'F = 180^\\circ - 100^\\circ - 35^\\circ = 45^\\circ',
          explanation: '',
          diagram: {
            xMin: -7, xMax: 22, yMin: -3, yMax: 15, hideAxes: true,
            lines: [
              { from: [0, 0], to: [18, 0], label: 'DE = 18 cm', labelAt: [9, -1.0] },
              { from: [0, 0], to: [-2.54, 14.39], label: 'DF', labelAt: [-3.0, 7.0] },
              { from: [18, 0], to: [-2.54, 14.39], label: 'EF', labelAt: [8.5, 8.0] },
            ],
            points: [
              { at: [0, 0], label: 'D', labelAnchor: 's' },
              { at: [18, 0], label: 'E', labelAnchor: 'se' },
              { at: [-2.54, 14.39], label: 'F', labelAnchor: 'nw' },
              { at: [1.854, 2.21], label: '100°', labelAnchor: 'center', r: 0 },
              { at: [15.249, 0.868], label: '35°', labelAnchor: 'center', r: 0 },
              { at: [-0.99, 11.957], label: '45°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Find \\( DF \\) using the sine rule (opposite \\( E \\)).',
          workingLatex: 'DF = \\frac{18 \\sin 35^\\circ}{\\sin 45^\\circ} = \\frac{18 \\times 0.5736}{0.7071} = 14.60\\ldots',
          explanation: '\\( DE \\) opposite \\( F = 45^\\circ \\); \\( DF \\) opposite \\( E = 35^\\circ \\).',
        },
        {
          stepNumber: 3,
          description: 'Apply the area formula with the two sides at vertex \\( D \\): \\( DE \\) and \\( DF \\).',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times DE \\times DF \\times \\sin D = \\tfrac{1}{2}(18)(14.60)\\sin 100^\\circ',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Evaluate.',
          workingLatex: '\\text{Area} = 131.4 \\times 0.9848 = 129.4\\ldots \\approx 129 \\text{ cm}^2',
          explanation: '\\( \\sin 100^\\circ = \\sin 80^\\circ \\approx 0.9848 \\).',
        },
      ],
      finalAnswer: '\\( \\text{Area} \\approx 129 \\text{ cm}^2 \\)',
    },
  },

  {
    id: 't1-056',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 56',
    difficulty: 'Foundation',
    questionText: 'Two radar stations are 30 km apart. Station A detects a plane at a bearing of \\( 040^\\circ \\) and station B (due east of A) detects it at \\( 330^\\circ \\). Find the distance from station A to the plane.',
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'bearings', 'real-world'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch with north up. Place \\( A \\) at origin, \\( B \\) due east at \\( (30, 0) \\), and the plane \\( P \\) somewhere north of line \\( AB \\).',
          workingLatex: '\\text{Bearing of } P \\text{ from } A = 040^\\circ;\\ \\text{Bearing of } P \\text{ from } B = 330^\\circ',
          explanation: 'Bearing 040° from A means P lies NE of A; bearing 330° from B means P lies NW of B.',
          diagram: {
            xMin: -3, xMax: 35, yMin: -3, yMax: 28, hideAxes: true,
            lines: [
              { from: [0, 0], to: [30, 0], label: 'AB = 30 km', labelAt: [15, -1.2] },
              { from: [0, 0], to: [17.77, 21.18], label: 'AP = ?', labelAt: [5.0, 12.0] },
              { from: [30, 0], to: [17.77, 21.18], label: 'BP', labelAt: [27.0, 12.0] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [30, 0], label: 'B', labelAnchor: 'se' },
              { at: [17.77, 21.18], label: 'P', labelAnchor: 'n' },
              { at: [3.721, 1.735], label: '50°', labelAnchor: 'center', r: 0 },
              { at: [26.445, 2.053], label: '60°', labelAnchor: 'center', r: 0 },
              { at: [17.412, 17.09], label: '70°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Find the interior angles at \\( A \\) and \\( B \\).',
          workingLatex: '\\angle PAB = 90^\\circ - 40^\\circ = 50^\\circ \\quad \\angle PBA = 330^\\circ - 270^\\circ = 60^\\circ',
          explanation: 'At \\( A \\), the line \\( AB \\) is on bearing 090° (east). The plane is on bearing 040°, so the angle from \\( AB \\) toward \\( AP \\) (measured inside the triangle) is \\( 90 - 40 = 50^\\circ \\). At \\( B \\), the line \\( BA \\) is on bearing 270° (west); the plane is on bearing 330° from B; the angle inside the triangle is \\( 330 - 270 = 60^\\circ \\).',
        },
        {
          stepNumber: 3,
          description: 'Find angle at \\( P \\).',
          workingLatex: '\\angle APB = 180^\\circ - 50^\\circ - 60^\\circ = 70^\\circ',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Apply the sine rule.',
          workingLatex: '\\frac{AP}{\\sin(\\angle PBA)} = \\frac{AB}{\\sin(\\angle APB)} \\implies \\frac{AP}{\\sin 60^\\circ} = \\frac{30}{\\sin 70^\\circ}',
          explanation: '\\( AP \\) is opposite the angle at \\( B \\); \\( AB \\) is opposite the angle at \\( P \\).',
        },
        {
          stepNumber: 5,
          description: 'Solve.',
          workingLatex: 'AP = \\frac{30 \\sin 60^\\circ}{\\sin 70^\\circ} = \\frac{30 \\times 0.8660}{0.9397} = 27.65\\ldots',
          explanation: '',
        },
        {
          stepNumber: 6,
          description: 'Round.',
          workingLatex: 'AP \\approx 27.6 \\text{ km}',
          explanation: 'Three significant figures.',
        },
      ],
      finalAnswer: '\\( AP \\approx 27.6 \\text{ km} \\)',
    },
  },

  {
    id: 't1-057',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 57',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( a = 6\\sqrt{2} \\), \\( B = 45^\\circ \\), \\( C = 60^\\circ \\). Find \\( b \\) exactly.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'exact', 'surds'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch and find the third angle.',
          workingLatex: 'A = 180^\\circ - 45^\\circ - 60^\\circ = 75^\\circ',
          explanation: '',
          diagram: {
            xMin: -3, xMax: 10, yMin: -3, yMax: 7, hideAxes: true,
            lines: [
              { from: [0, 0], to: [6.21, 0], label: 'c', labelAt: [3.1, -1.0] },
              { from: [0, 0], to: [1.61, 6.0], label: 'b = ?', labelAt: [-0.5, 3.0] },
              { from: [6.21, 0], to: [1.61, 6.0], label: 'a = 6√2', labelAt: [5.0, 3.0] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [6.21, 0], label: 'B', labelAnchor: 'se' },
              { at: [1.61, 6], label: 'C', labelAnchor: 'n' },
              { at: [0.793, 0.608], label: '75°', labelAnchor: 'center', r: 0 },
              { at: [5.314, 0.442], label: '45°', labelAnchor: 'center', r: 0 },
              { at: [1.805, 5.02], label: '60°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Apply the sine rule.',
          workingLatex: '\\frac{b}{\\sin B} = \\frac{a}{\\sin A} \\implies b = \\frac{6\\sqrt{2}\\sin 45^\\circ}{\\sin 75^\\circ}',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Use exact \\( \\sin 45^\\circ = \\tfrac{\\sqrt{2}}{2} \\).',
          workingLatex: 'b = \\frac{6\\sqrt{2} \\times \\tfrac{\\sqrt{2}}{2}}{\\sin 75^\\circ} = \\frac{6 \\times 2 / 2}{\\sin 75^\\circ} = \\frac{6}{\\sin 75^\\circ}',
          explanation: '\\( \\sqrt{2} \\times \\sqrt{2} = 2 \\); divided by 2 gives 1, so the numerator simplifies to 6.',
        },
        {
          stepNumber: 4,
          description: 'Evaluate numerically.',
          workingLatex: 'b = \\frac{6}{0.9659} = 6.212\\ldots',
          explanation: '\\( \\sin 75^\\circ \\approx 0.9659 \\). Exact form: \\( b = \\dfrac{6}{\\sin 75^\\circ} \\). Using \\( \\sin 75^\\circ = \\dfrac{\\sqrt{6}+\\sqrt{2}}{4} \\), an exact form is \\( b = \\dfrac{24}{\\sqrt{6}+\\sqrt{2}} = 6(\\sqrt{6}-\\sqrt{2}) \\) after rationalising.',
        },
      ],
      finalAnswer: '\\( b = \\dfrac{6}{\\sin 75^\\circ} = 6(\\sqrt{6}-\\sqrt{2}) \\approx 6.21 \\)',
    },
  },

  {
    id: 't1-058',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 58',
    difficulty: 'Foundation',
    questionText: 'A surveyor measures a triangular plot: \\( AB = 85 \\) m, \\( BC = 110 \\) m, angle \\( ABC = 72^\\circ \\). Find the perimeter and area.',
    marks: 6,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'area', 'perimeter', 'real-world'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch with the included angle at \\( B \\).',
          workingLatex: 'AB = 85,\\ BC = 110,\\ \\angle ABC = 72^\\circ',
          explanation: '',
          diagram: {
            xMin: -10, xMax: 130, yMin: -10, yMax: 90, hideAxes: true,
            lines: [
              { from: [0, 0], to: [110, 0], label: 'BC = 110 m', labelAt: [55, -3.5] },
              { from: [0, 0], to: [26.26, 80.84], label: 'AB = 85 m', labelAt: [8.0, 42.0] },
              { from: [110, 0], to: [26.26, 80.84], label: 'AC = ?', labelAt: [80.0, 45.0] },
            ],
            points: [
              { at: [0, 0], label: 'B', labelAnchor: 'sw' },
              { at: [110, 0], label: 'C', labelAnchor: 'se' },
              { at: [26.26, 80.84], label: 'A', labelAnchor: 'n' },
              { at: [12.596, 9.152], label: '72°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Find \\( AC \\) using the cosine rule.',
          workingLatex: 'AC^2 = 85^2 + 110^2 - 2(85)(110)\\cos 72^\\circ = 7225 + 12100 - 18700 \\cos 72^\\circ',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Evaluate.',
          workingLatex: 'AC^2 = 19325 - 18700 \\times 0.3090 = 19325 - 5778.6 = 13546.4 \\implies AC = 116.4 \\text{ m}',
          explanation: '\\( \\cos 72^\\circ \\approx 0.3090 \\).',
        },
        {
          stepNumber: 4,
          description: 'Perimeter.',
          workingLatex: 'P = 85 + 110 + 116.4 = 311.4 \\approx 311 \\text{ m}',
          explanation: '',
        },
        {
          stepNumber: 5,
          description: 'Area using the SAS formula.',
          workingLatex: '\\text{Area} = \\tfrac{1}{2}(85)(110)\\sin 72^\\circ = 4675 \\times 0.9511 = 4446.4\\ldots',
          explanation: '\\( \\sin 72^\\circ \\approx 0.9511 \\).',
        },
        {
          stepNumber: 6,
          description: 'Round.',
          workingLatex: '\\text{Area} \\approx 4450 \\text{ m}^2',
          explanation: 'Three significant figures.',
        },
      ],
      finalAnswer: '\\( P \\approx 311 \\text{ m},\\ \\text{Area} \\approx 4450 \\text{ m}^2 \\)',
    },
  },

  {
    id: 't1-059',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 59',
    difficulty: 'Foundation',
    questionText: 'In an equilateral triangle of side 10 cm, a point P is 6 cm from one vertex and 8 cm from another. Find the distance from P to the third vertex.',
    marks: 6,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'equilateral', 'geometry'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch the equilateral triangle \\( ABC \\) with \\( P \\) inside (or on the same side as \\( C \\)). Take \\( PA = 6 \\), \\( PB = 8 \\), \\( AB = 10 \\). Note: \\( 6^2 + 8^2 = 100 = 10^2 \\), so \\( \\triangle APB \\) is right-angled at \\( P \\).',
          workingLatex: '\\text{In } \\triangle APB: PA = 6, PB = 8, AB = 10',
          explanation: 'Pythagoras confirms that triangle \\( APB \\) is right-angled at \\( P \\) (\\( PA^2 + PB^2 = AB^2 \\)). Knowing the angles inside \\( \\triangle APB \\) lets us find \\( \\angle PAC \\) inside the equilateral triangle.',
          diagram: {
            xMin: -2, xMax: 12, yMin: -1, yMax: 10, hideAxes: true,
            lines: [
              { from: [0, 0], to: [10, 0], label: 'AB = 10', labelAt: [5, -0.7] },
              { from: [0, 0], to: [5, 8.66], label: 'AC = 10', labelAt: [1.5, 5.0] },
              { from: [10, 0], to: [5, 8.66], label: 'BC = 10', labelAt: [8.5, 5.0] },
              { from: [0, 0], to: [3.6, 4.8], color: 'gray', dashed: true, label: 'PA = 6', labelAt: [1.0, 2.5] },
              { from: [10, 0], to: [3.6, 4.8], color: 'gray', dashed: true, label: 'PB = 8', labelAt: [7.5, 2.5] },
              { from: [3.6, 4.8], to: [5, 8.66], color: 'gray', dashed: true, label: 'PC = ?', labelAt: [3.5, 7.0] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [10, 0], label: 'B', labelAnchor: 'se' },
              { at: [5, 8.66], label: 'C', labelAnchor: 'n' },
              { at: [3.6, 4.8], label: 'P', labelAnchor: 'e' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Find \\( \\angle PAB \\) using the cosine rule in \\( \\triangle APB \\).',
          workingLatex: '\\cos(\\angle PAB) = \\frac{PA^2 + AB^2 - PB^2}{2 \\cdot PA \\cdot AB} = \\frac{36 + 100 - 64}{120} = \\frac{72}{120} = 0.6',
          explanation: 'Cosine rule for the angle at \\( A \\) inside \\( \\triangle APB \\).',
        },
        {
          stepNumber: 3,
          description: 'Compute the angle.',
          workingLatex: '\\angle PAB = \\cos^{-1}(0.6) = 53.13\\ldots^\\circ',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'The angle of the equilateral triangle at \\( A \\) is \\( 60^\\circ \\). Subtract to get the angle \\( PAC \\).',
          workingLatex: '\\angle PAC = 60^\\circ - 53.13^\\circ = 6.87\\ldots^\\circ',
          explanation: 'Both \\( P \\) and \\( C \\) lie on the same side of \\( AB \\); inside the triangle, \\( \\angle PAC = \\angle BAC - \\angle PAB \\).',
        },
        {
          stepNumber: 5,
          description: 'Apply the cosine rule in \\( \\triangle APC \\) with \\( PA = 6 \\), \\( AC = 10 \\), included angle \\( \\angle PAC \\).',
          workingLatex: 'PC^2 = PA^2 + AC^2 - 2(PA)(AC)\\cos(\\angle PAC) = 36 + 100 - 120 \\cos 6.87^\\circ',
          explanation: '',
        },
        {
          stepNumber: 6,
          description: 'Evaluate.',
          workingLatex: 'PC^2 = 136 - 120 \\times 0.9928 = 136 - 119.13 = 16.87 \\implies PC = \\sqrt{16.87} = 4.107\\ldots',
          explanation: '',
        },
        {
          stepNumber: 7,
          description: 'Round.',
          workingLatex: 'PC \\approx 4.11 \\text{ cm}',
          explanation: 'Three significant figures.',
        },
      ],
      finalAnswer: '\\( PC \\approx 4.11 \\text{ cm} \\)',
    },
  },

  {
    id: 't1-060',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 60',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( AB = 13 \\) cm, \\( BC = 14 \\) cm and \\( AC = 15 \\) cm. Find: (a) the largest angle; (b) the area; (c) the length of the shortest altitude.',
    marks: 8,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'area', 'altitude', 'multi-part'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch and identify the largest angle as opposite the longest side \\( AC = 15 \\), which is \\( B \\).',
          workingLatex: 'a = BC = 14,\\ b = AC = 15,\\ c = AB = 13',
          explanation: 'Largest side is \\( AC = 15 \\), opposite vertex \\( B \\).',
          diagram: {
            xMin: -3, xMax: 17, yMin: -3, yMax: 12, hideAxes: true,
            lines: [
              { from: [0, 0], to: [14, 0], label: 'BC = 14', labelAt: [7, -1.0] },
              { from: [0, 0], to: [5, 12], label: 'AB = 13', labelAt: [1.0, 6.0] },
              { from: [14, 0], to: [5, 12], label: 'AC = 15', labelAt: [10.5, 6.0] },
            ],
            points: [
              { at: [0, 0], label: 'B (largest)', labelAnchor: 's' },
              { at: [14, 0], label: 'C', labelAnchor: 'se' },
              { at: [5, 12], label: 'A', labelAnchor: 'n' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Part (a): cosine rule for \\( B \\).',
          workingLatex: '\\cos B = \\frac{a^2 + c^2 - b^2}{2ac} = \\frac{196 + 169 - 225}{2(14)(13)} = \\frac{140}{364} = 0.3846',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Find \\( B \\).',
          workingLatex: 'B = \\cos^{-1}(0.3846) = 67.38\\ldots^\\circ \\approx 67.4^\\circ',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Part (b): area using sides at \\( B \\).',
          workingLatex: '\\text{Area} = \\tfrac{1}{2}(BC)(AB)\\sin B = \\tfrac{1}{2}(14)(13)\\sin 67.38^\\circ = 91 \\times 0.9231 = 84.0 \\text{ cm}^2',
          explanation: 'This is the famous 13-14-15 triangle, with area exactly 84.',
        },
        {
          stepNumber: 5,
          description: 'Part (c): shortest altitude is the one to the longest side (\\( AC = 15 \\)).',
          workingLatex: 'h_b = \\frac{2 \\times \\text{Area}}{AC} = \\frac{2 \\times 84}{15} = \\frac{168}{15} = 11.2 \\text{ cm}',
          explanation: 'Area \\( = \\tfrac{1}{2} \\times \\text{base} \\times \\text{height} \\); rearranging gives \\( h = 2A/\\text{base} \\). The longest base gives the shortest height (for fixed area).',
        },
      ],
      finalAnswer: '\\( (a)\\ B \\approx 67.4^\\circ\\quad (b)\\ \\text{Area} = 84.0 \\text{ cm}^2\\quad (c)\\ h \\approx 11.2 \\text{ cm} \\)',
    },
  },

  {
    id: 't1-061',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 61',
    difficulty: 'Foundation',
    questionText: 'Find the exact value of \\( c \\) in triangle \\( ABC \\) where \\( a = 4 \\), \\( b = 6 \\) and \\( C = 120^\\circ \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'exact', 'obtuse'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch with the obtuse angle at \\( C \\).',
          workingLatex: 'a = 4,\\ b = 6,\\ C = 120^\\circ',
          explanation: 'SAS with the special angle \\( 120^\\circ \\) (\\( \\cos 120^\\circ = -\\tfrac{1}{2} \\)) — expect an exact surd answer.',
          diagram: {
            xMin: -5, xMax: 8, yMin: -3, yMax: 5, hideAxes: true,
            lines: [
              { from: [0, 0], to: [6, 0], label: 'b = 6', labelAt: [3, -0.8] },
              { from: [0, 0], to: [-2, 3.464], label: 'a = 4', labelAt: [-2.5, 1.7] },
              { from: [6, 0], to: [-2, 3.464], label: 'c = ?', labelAt: [2.5, 2.2] },
            ],
            points: [
              { at: [0, 0], label: 'C', labelAnchor: 's' },
              { at: [6, 0], label: 'A', labelAnchor: 'se' },
              { at: [-2, 3.464], label: 'B', labelAnchor: 'nw' },
              { at: [0.468, 0.811], label: '120°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Apply the cosine rule.',
          workingLatex: 'c^2 = a^2 + b^2 - 2ab\\cos C = 16 + 36 - 48\\cos 120^\\circ',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Use \\( \\cos 120^\\circ = -\\tfrac{1}{2} \\).',
          workingLatex: 'c^2 = 52 - 48 \\times (-\\tfrac{1}{2}) = 52 + 24 = 76',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Simplify the surd.',
          workingLatex: 'c = \\sqrt{76} = \\sqrt{4 \\times 19} = 2\\sqrt{19}',
          explanation: 'Pull out the square factor 4.',
        },
      ],
      finalAnswer: 'c = 2\\sqrt{19}',
    },
  },

  {
    id: 't1-062',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 62',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( a = 10\\text{ cm} \\), \\( b = 7\\text{ cm} \\), \\( c = 8\\text{ cm} \\). Find the area of the triangle to 3 s.f.',
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'area', 'half ab sin C'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch the triangle and plan the method.',
          workingLatex: 'a = BC = 10,\\ b = CA = 7,\\ c = AB = 8',
          explanation: 'All three sides are known and no angle is given. To use the area formula \\( \\tfrac{1}{2}bc\\sin A \\) we first need one angle, so we use the cosine rule to find angle \\( A \\) (the angle opposite the longest side, which is also the largest).',
          diagram: {
            xMin: -3, xMax: 13, yMin: -3, yMax: 7, hideAxes: true,
            lines: [
              { from: [0, 0], to: [10, 0], label: 'a = 10', labelAt: [5, -1.0] },
              { from: [0, 0], to: [5.75, 5.563], label: 'c = 8', labelAt: [2.4, 2.9] },
              { from: [10, 0], to: [5.75, 5.563], label: 'b = 7', labelAt: [8.3, 2.9] },
            ],
            points: [
              { at: [0, 0], label: 'B', labelAnchor: 'sw' },
              { at: [10, 0], label: 'C', labelAnchor: 'se' },
              { at: [5.75, 5.563], label: 'A', labelAnchor: 'n' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'State the cosine rule rearranged for \\( \\cos A \\).',
          workingLatex: '\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}',
          explanation: 'This is the cosine rule \\( a^2 = b^2 + c^2 - 2bc\\cos A \\) solved for \\( \\cos A \\). The form is useful when all three sides are known.',
        },
        {
          stepNumber: 3,
          description: 'Substitute the side lengths.',
          workingLatex: '\\cos A = \\frac{7^2 + 8^2 - 10^2}{2 \\times 7 \\times 8} = \\frac{49 + 64 - 100}{112} = \\frac{13}{112}',
          explanation: 'Compute each square, then the numerator \\( 49 + 64 - 100 = 13 \\) and the denominator \\( 2 \\times 7 \\times 8 = 112 \\).',
        },
        {
          stepNumber: 4,
          description: 'Evaluate \\( \\cos A \\) numerically.',
          workingLatex: '\\cos A = \\frac{13}{112} = 0.11607\\ldots',
          explanation: 'Keep extra decimal places at this stage so the final answer is not affected by rounding.',
        },
        {
          stepNumber: 5,
          description: 'Take the inverse cosine.',
          workingLatex: 'A = \\cos^{-1}(0.11607\\ldots) = 83.333\\ldots^\\circ',
          explanation: '\\( A \\) is the angle opposite the longest side, so it should be the largest of the three angles — a value just under \\( 90^\\circ \\) is consistent with that.',
        },
        {
          stepNumber: 6,
          description: 'Apply the area formula with the two sides enclosing angle \\( A \\).',
          workingLatex: '\\text{Area} = \\tfrac{1}{2}bc\\sin A',
          explanation: 'Angle \\( A \\) is enclosed by sides \\( b \\) and \\( c \\) (the two sides meeting at vertex \\( A \\)), so this is the correct pair to use with \\( \\sin A \\).',
        },
        {
          stepNumber: 7,
          description: 'Substitute and compute.',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times 7 \\times 8 \\times \\sin 83.333^\\circ = 28 \\times 0.99326\\ldots = 27.811\\ldots',
          explanation: '\\( \\tfrac{1}{2} \\times 7 \\times 8 = 28 \\); \\( \\sin 83.333^\\circ \\approx 0.99326 \\).',
        },
        {
          stepNumber: 8,
          description: 'Round to 3 significant figures.',
          workingLatex: '\\text{Area} \\approx 27.8 \\text{ cm}^2',
          explanation: 'Only round at the very end.',
        },
      ],
      finalAnswer: '\\( \\text{Area} \\approx 27.8 \\text{ cm}^2 \\)',
    },
  },

  {
    id: 't1-063',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 63',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( a = 5 \\), \\( A = 30^\\circ \\), \\( B = 45^\\circ \\). Find the exact value of \\( b \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'exact', 'surds'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch and apply the sine rule.',
          workingLatex: '\\frac{b}{\\sin B} = \\frac{a}{\\sin A} \\implies b = \\frac{5 \\sin 45^\\circ}{\\sin 30^\\circ}',
          explanation: 'Two known angles and a side opposite one of them — sine rule.',
          diagram: {
            xMin: -3, xMax: 12, yMin: -3, yMax: 7, hideAxes: true,
            lines: [
              { from: [0, 0], to: [9.66, 0], label: 'c', labelAt: [4.8, -0.9] },
              { from: [0, 0], to: [5.00, 5.0], label: 'b = ?', labelAt: [1.5, 2.8] },
              { from: [9.66, 0], to: [5.00, 5.0], label: 'a = 5', labelAt: [8.0, 2.8] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [9.66, 0], label: 'B', labelAnchor: 'se' },
              { at: [5, 5], label: 'C', labelAnchor: 'n' },
              { at: [1.089, 0.451], label: '30°', labelAnchor: 'center', r: 0 },
              { at: [8.579, 0.47], label: '45°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Use exact values: \\( \\sin 45^\\circ = \\tfrac{\\sqrt{2}}{2} \\), \\( \\sin 30^\\circ = \\tfrac{1}{2} \\).',
          workingLatex: 'b = \\frac{5 \\times \\tfrac{\\sqrt{2}}{2}}{\\tfrac{1}{2}}',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Simplify (dividing by \\( \\tfrac{1}{2} \\) is multiplying by 2).',
          workingLatex: 'b = 5 \\times \\frac{\\sqrt{2}}{2} \\times 2 = 5\\sqrt{2}',
          explanation: '',
        },
      ],
      finalAnswer: 'b = 5\\sqrt{2}',
    },
  },

  {
    id: 't1-064',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 64',
    difficulty: 'Foundation',
    questionText: 'A regular hexagon has side length 6 cm. Find the length of the longest diagonal.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'hexagon', 'geometry'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch the hexagon and identify the longest diagonal as the one through the centre (joining opposite vertices).',
          workingLatex: '\\text{Longest diagonal joins vertices } V_1 \\text{ and } V_4 \\text{ (opposite)}',
          explanation: 'A regular hexagon has three diagonals through its centre, each joining diametrically opposite vertices. These are the longest diagonals.',
          diagram: {
            xMin: -8, xMax: 8, yMin: -7, yMax: 7, hideAxes: true,
            lines: [
              { from: [6, 0], to: [3, 5.196], label: '6 cm', labelAt: [5.0, 3.2] },
              { from: [3, 5.196], to: [-3, 5.196] },
              { from: [-3, 5.196], to: [-6, 0] },
              { from: [-6, 0], to: [-3, -5.196] },
              { from: [-3, -5.196], to: [3, -5.196] },
              { from: [3, -5.196], to: [6, 0] },
              { from: [-6, 0], to: [6, 0], color: 'gray', dashed: true, label: 'diagonal = ?', labelAt: [0, 0.5] },
            ],
            points: [
              { at: [6, 0], label: 'V₁', labelAnchor: 'e' },
              { at: [-6, 0], label: 'V₄', labelAnchor: 'w' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Recognise that a regular hexagon is composed of six equilateral triangles meeting at the centre. The distance from centre to any vertex equals the side length.',
          workingLatex: 'r = 6 \\text{ cm (distance centre to vertex)}',
          explanation: 'In a regular hexagon, the apothem-to-vertex radius equals the side. So the centre lies on the longest diagonal at distance 6 from each opposite vertex.',
        },
        {
          stepNumber: 3,
          description: 'Longest diagonal = twice the centre-to-vertex distance.',
          workingLatex: 'd_{\\text{long}} = 2 \\times 6 = 12 \\text{ cm}',
          explanation: 'The diagonal through the centre is just two radii placed end-to-end.',
        },
        {
          stepNumber: 4,
          description: 'Verify using the cosine rule on the triangle formed by two adjacent sides at vertex \\( V_1 \\)? That gives the SHORT diagonal — included angle there is the interior angle minus … In fact, applying the cosine rule to two adjacent sides 6, 6 with included angle = interior angle of hexagon = 120° gives the SHORT diagonal: \\( d^2 = 36 + 36 - 72\\cos 120^\\circ = 72 + 36 = 108 \\Rightarrow d = 6\\sqrt{3} \\approx 10.39 \\) cm.',
          workingLatex: 'd_{\\text{short}} = 6\\sqrt{3} \\approx 10.4 \\text{ cm} \\ne 12,\\ \\text{so this is not the longest}',
          explanation: 'Two adjacent sides of the hexagon at angle 120° give the diagonal skipping one vertex, not opposite vertices. The longest diagonal needs a different calculation — which is the simple "twice the radius" given above.',
        },
      ],
      finalAnswer: '\\text{Longest diagonal} = 12 \\text{ cm}',
    },
  },

  {
    id: 't1-065',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 65',
    difficulty: 'Foundation',
    questionText: 'Two sides of a triangular garden plot measure 5 m and 8 m, meeting at an angle of \\( 120^\\circ \\). Find the length of the third side to 3 s.f.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'find side', 'real-world'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch the triangle, labelling the two known sides and the included angle at \\( A \\).',
          workingLatex: 'AB = 5\\text{ m},\\ AC = 8\\text{ m},\\ A = 120^\\circ,\\ BC = ?',
          explanation: 'The two known sides share vertex \\( A \\) and the angle between them is \\( 120^\\circ \\). Two sides and the included angle is exactly the situation where the cosine rule gives the third side directly.',
          diagram: {
            xMin: -6, xMax: 7, yMin: -2, yMax: 8, hideAxes: true,
            lines: [
              { from: [0, 0], to: [5, 0], label: 'AB = 5 m', labelAt: [2.5, -0.7] },
              { from: [0, 0], to: [-4, 6.928], label: 'AC = 8 m', labelAt: [-2.7, 3.7] },
              { from: [5, 0], to: [-4, 6.928], label: 'BC = ?', labelAt: [1.0, 4.3] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 's' },
              { at: [5, 0], label: 'B', labelAnchor: 'se' },
              { at: [-4, 6.928], label: 'C', labelAnchor: 'nw' },
              { at: [0.30, 0.52], label: '120°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'State the cosine rule for the side opposite the known angle.',
          workingLatex: 'BC^2 = AB^2 + AC^2 - 2 \\cdot AB \\cdot AC \\cdot \\cos A',
          explanation: 'The side opposite the known angle is \\( BC \\); the two sides enclosing the angle are \\( AB \\) and \\( AC \\).',
        },
        {
          stepNumber: 3,
          description: 'Substitute the known values.',
          workingLatex: 'BC^2 = 5^2 + 8^2 - 2(5)(8)\\cos 120^\\circ',
          explanation: 'Drop the units while computing; we will reattach metres at the end.',
        },
        {
          stepNumber: 4,
          description: 'Use the exact value \\( \\cos 120^\\circ = -\\tfrac{1}{2} \\).',
          workingLatex: 'BC^2 = 25 + 64 - 80 \\times \\left(-\\tfrac{1}{2}\\right) = 89 + 40 = 129',
          explanation: 'Because \\( \\cos 120^\\circ \\) is negative, the \\( -2ab\\cos C \\) term becomes \\( +40 \\), making \\( BC \\) longer than either of the original sides — as we should expect for an obtuse included angle.',
        },
        {
          stepNumber: 5,
          description: 'Take the positive square root.',
          workingLatex: 'BC = \\sqrt{129} = 11.358\\ldots',
          explanation: 'A length is positive, so we discard the negative root.',
        },
        {
          stepNumber: 6,
          description: 'Round to 3 significant figures and reattach units.',
          workingLatex: 'BC \\approx 11.4 \\text{ m}',
          explanation: 'Three significant figures: \\( 11.358\\ldots \\to 11.4 \\) m.',
        },
      ],
      finalAnswer: '\\( BC \\approx 11.4 \\text{ m} \\)',
    },
  },

  {
    id: 't1-066',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 66',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( AB = 9 \\), \\( BC = 12 \\), \\( B = 90^\\circ \\). Verify using the cosine rule that \\( AC = 15 \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'right-angled', 'pythagoras'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch with the right angle at \\( B \\).',
          workingLatex: 'AB = 9,\\ BC = 12,\\ B = 90^\\circ',
          explanation: 'The cosine rule with \\( B = 90^\\circ \\) should reduce to Pythagoras, since \\( \\cos 90^\\circ = 0 \\).',
          diagram: {
            xMin: -2, xMax: 14, yMin: -2, yMax: 12, hideAxes: true,
            lines: [
              { from: [0, 0], to: [12, 0], label: 'BC = 12', labelAt: [6, -0.8] },
              { from: [0, 0], to: [0, 9], label: 'AB = 9', labelAt: [-1.0, 4.5] },
              { from: [12, 0], to: [0, 9], label: 'AC = ?', labelAt: [6.5, 5.0] },
            ],
            points: [
              { at: [0, 0], label: 'B', labelAnchor: 'sw' },
              { at: [12, 0], label: 'C', labelAnchor: 'se' },
              { at: [0, 9], label: 'A', labelAnchor: 'nw' },
              { at: [1.273, 1.273], label: '90°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Apply the cosine rule.',
          workingLatex: 'AC^2 = AB^2 + BC^2 - 2(AB)(BC)\\cos 90^\\circ = 81 + 144 - 0',
          explanation: '\\( \\cos 90^\\circ = 0 \\) eliminates the third term, leaving Pythagoras.',
        },
        {
          stepNumber: 3,
          description: 'Simplify and verify.',
          workingLatex: 'AC^2 = 225 \\implies AC = 15',
          explanation: 'Matches the famous 9-12-15 right triangle (a 3-4-5 multiplied by 3), confirming the result.',
        },
      ],
      finalAnswer: '\\( AC = 15 \\)',
    },
  },

  {
    id: 't1-067',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 67',
    difficulty: 'Foundation',
    questionText: 'A ship sails 20 km due north, then 15 km on a bearing of \\( 070^\\circ \\). Find the distance and bearing from the starting point.',
    marks: 6,
    examStyle: false,
    yearCreated: 2026,
    tags: ['cosine rule', 'sine rule', 'bearings', 'real-world'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch the two legs. After the first leg (20 km north), at the turning point the ship arrives heading north (bearing 000°). The new heading is 070°. The interior angle of the triangle at the turning point is the supplement of the change in bearing.',
          workingLatex: '\\Delta\\text{bearing} = 070^\\circ - 000^\\circ = 70^\\circ \\implies \\angle \\text{at turn} = 180^\\circ - 70^\\circ = 110^\\circ',
          explanation: 'At the turn, the direction from the turning point back to start is bearing 180° (south); the direction toward end is bearing 070°. The angle between these inside the triangle is \\( 180^\\circ - 70^\\circ = 110^\\circ \\).',
          diagram: {
            xMin: -5, xMax: 20, yMin: -3, yMax: 30, hideAxes: true,
            lines: [
              { from: [0, 0], to: [0, 20], label: '20 km', labelAt: [-1.5, 10.0] },
              { from: [0, 20], to: [14.10, 25.13], label: '15 km', labelAt: [4.0, 23.5] },
              { from: [0, 0], to: [14.10, 25.13], color: 'gray', dashed: true, label: 'd = ?', labelAt: [9.5, 11.0] },
            ],
            points: [
              { at: [0, 0], label: 'Start', labelAnchor: 'sw' },
              { at: [0, 20], label: 'Turn', labelAnchor: 'w' },
              { at: [14.1, 25.13], label: 'End', labelAnchor: 'ne' },
              { at: [2.614, 18.17], label: '110°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Apply the cosine rule.',
          workingLatex: 'd^2 = 20^2 + 15^2 - 2(20)(15)\\cos 110^\\circ = 400 + 225 - 600\\cos 110^\\circ',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Evaluate.',
          workingLatex: 'd^2 = 625 - 600 \\times (-0.3420) = 625 + 205.21 = 830.21',
          explanation: '\\( \\cos 110^\\circ \\approx -0.3420 \\).',
        },
        {
          stepNumber: 4,
          description: 'Distance.',
          workingLatex: 'd = \\sqrt{830.21} = 28.81\\ldots \\approx 28.8 \\text{ km}',
          explanation: '',
        },
        {
          stepNumber: 5,
          description: 'Find the bearing using the sine rule. Let \\( \\alpha \\) be the angle at the start between north (the first leg) and the line back to the end.',
          workingLatex: '\\frac{\\sin\\alpha}{15} = \\frac{\\sin 110^\\circ}{28.81} \\implies \\sin\\alpha = \\frac{15 \\times 0.9397}{28.81} = 0.4893',
          explanation: 'At the start, the first leg points due north. The angle between this leg and the line from start to end is the bearing we want.',
        },
        {
          stepNumber: 6,
          description: 'Find \\( \\alpha \\).',
          workingLatex: '\\alpha = \\sin^{-1}(0.4893) = 29.29\\ldots^\\circ',
          explanation: 'Take the acute value: the end-point is to the east of due north, so this is the offset from north.',
        },
        {
          stepNumber: 7,
          description: 'Bearing.',
          workingLatex: '\\text{Bearing from start} \\approx 029^\\circ',
          explanation: 'Three-digit bearing form.',
        },
      ],
      finalAnswer: '\\( d \\approx 28.8 \\text{ km},\\ \\text{bearing} \\approx 029^\\circ \\)',
    },
  },

  {
    id: 't1-068',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 68',
    difficulty: 'Foundation',
    questionText: 'The \\( \\textit{circumradius} \\) of a triangle is the radius of the unique circle (the \\( \\textit{circumscribed circle} \\)) that passes through all three vertices. The extended sine rule states that for any triangle \\( ABC \\), \\( \\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R \\), where \\( R \\) is the circumradius. If \\( a = 10 \\) and \\( A = 30^\\circ \\), find \\( R \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'circumradius'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch the triangle inscribed in its circumscribed circle, with centre \\( O \\) and circumradius \\( R \\).',
          workingLatex: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R',
          explanation: 'The circumradius \\( R \\) is the distance from the circle\'s centre \\( O \\) to any vertex of the triangle. The extended sine rule says that every side-to-sine-of-opposite-angle ratio in the triangle equals the diameter \\( 2R \\) of this circle.',
          diagram: {
            xMin: -6.5, xMax: 6.5, yMin: -6.5, yMax: 6.5, hideAxes: true,
            curves: [
              {
                points: Array.from({ length: 121 }, (_, i) => {
                  const t = (i / 120) * 2 * Math.PI;
                  return [5 * Math.cos(t), 5 * Math.sin(t)] as [number, number];
                }),
                color: '#9ca3af',
              },
            ],
            lines: [
              { from: [1.294, 4.830], to: [-4.698, -1.710], label: 'c', labelAt: [-2.4, 1.7] },
              { from: [-4.698, -1.710], to: [4.698, -1.710], label: 'a', labelAt: [0, -2.5] },
              { from: [4.698, -1.710], to: [1.294, 4.830], label: 'b', labelAt: [3.4, 1.7] },
              { from: [0, 0], to: [1.294, 4.830], label: 'R', labelAt: [0.4, 2.5], dashed: true, color: '#2563eb' },
            ],
            points: [
              { at: [1.294, 4.830], label: 'A', labelAnchor: 'n' },
              { at: [-4.698, -1.710], label: 'B', labelAnchor: 'sw' },
              { at: [4.698, -1.710], label: 'C', labelAnchor: 'se' },
              { at: [0, 0], label: 'O', labelAnchor: 'se' },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Pick the ratio that uses the given side and its opposite angle.',
          workingLatex: '\\frac{a}{\\sin A} = 2R',
          explanation: 'We are given \\( a = 10 \\) and \\( A = 30^\\circ \\) — a side and the angle directly opposite it. Use that ratio.',
        },
        {
          stepNumber: 3,
          description: 'Substitute the given values.',
          workingLatex: '2R = \\frac{10}{\\sin 30^\\circ}',
          explanation: 'Replace \\( a \\) with \\( 10 \\) and \\( A \\) with \\( 30^\\circ \\).',
        },
        {
          stepNumber: 4,
          description: 'Use the exact value \\( \\sin 30^\\circ = \\tfrac{1}{2} \\).',
          workingLatex: '2R = \\frac{10}{1/2} = 20',
          explanation: 'Dividing by \\( \\tfrac{1}{2} \\) is the same as multiplying by \\( 2 \\).',
        },
        {
          stepNumber: 5,
          description: 'Solve for \\( R \\).',
          workingLatex: 'R = \\frac{20}{2} = 10',
          explanation: 'The diameter of the circumscribed circle is \\( 20 \\), so its radius is \\( 10 \\).',
        },
      ],
      finalAnswer: '\\( R = 10 \\)',
    },
  },

  {
    id: 't1-069',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 69',
    difficulty: 'Foundation',
    questionText: 'Triangle \\( ABC \\) has \\( a = 8 \\), \\( b = 15 \\), \\( c = 17 \\). Show it is right-angled and find the area.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ['pythagoras', 'area', 'right-angled'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch and identify the longest side as the candidate hypotenuse.',
          workingLatex: 'a = 8,\\ b = 15,\\ c = 17',
          explanation: '',
          diagram: {
            xMin: -2, xMax: 19, yMin: -2, yMax: 10, hideAxes: true,
            lines: [
              { from: [0, 0], to: [15, 0], label: 'b = 15', labelAt: [7.5, -0.8] },
              { from: [0, 0], to: [0, 8], label: 'a = 8', labelAt: [-1.0, 4.0] },
              { from: [15, 0], to: [0, 8], label: 'c = 17', labelAt: [7.5, 4.5] },
            ],
            points: [
              { at: [0, 0], label: 'C', labelAnchor: 'sw' },
              { at: [15, 0], label: 'A', labelAnchor: 'se' },
              { at: [0, 8], label: 'B', labelAnchor: 'nw' },
              { at: [1.414, 1.414], label: '90°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Check the converse of Pythagoras.',
          workingLatex: 'a^2 + b^2 = 64 + 225 = 289 = 17^2 = c^2 \\ \\checkmark',
          explanation: 'So the triangle is right-angled at \\( C \\) (the vertex opposite the longest side \\( c \\)).',
        },
        {
          stepNumber: 3,
          description: 'Compute the area using the two legs.',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times a \\times b = \\tfrac{1}{2} \\times 8 \\times 15 = 60 \\text{ cm}^2',
          explanation: 'In a right-angled triangle the two legs serve as base and height.',
        },
      ],
      finalAnswer: '\\text{Right-angled at } C;\\ \\text{Area} = 60 \\text{ cm}^2',
    },
  },

  {
    id: 't1-070',
    topicRef: 't1',
    topicTitle: 'Sine and Cosine Rule 70',
    difficulty: 'Foundation',
    questionText: 'In triangle \\( ABC \\), \\( A = 50^\\circ \\), \\( B = 70^\\circ \\), \\( a = 12 \\). Find: (a) all sides; (b) the area; (c) the shortest altitude.',
    marks: 8,
    examStyle: false,
    yearCreated: 2026,
    tags: ['sine rule', 'area', 'altitude', 'multi-part'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Sketch and find the third angle.',
          workingLatex: 'C = 180^\\circ - 50^\\circ - 70^\\circ = 60^\\circ',
          explanation: '',
          diagram: {
            xMin: -3, xMax: 17, yMin: -2, yMax: 13, hideAxes: true,
            lines: [
              { from: [0, 0], to: [13.57, 0], label: 'c', labelAt: [6.8, -0.9] },
              { from: [0, 0], to: [9.461, 11.276], label: 'b = ?', labelAt: [3.5, 6.2] },
              { from: [13.57, 0], to: [9.461, 11.276], label: 'a = 12', labelAt: [12.5, 6.2] },
            ],
            points: [
              { at: [0, 0], label: 'A', labelAnchor: 'sw' },
              { at: [13.57, 0], label: 'B', labelAnchor: 'se' },
              { at: [9.461, 11.276], label: 'C', labelAnchor: 'n' },
              { at: [1.359, 0.634], label: '50°', labelAnchor: 'center', r: 0 },
              { at: [12.341, 0.860], label: '70°', labelAnchor: 'center', r: 0 },
              { at: [9.201, 9.799], label: '60°', labelAnchor: 'center', r: 0 },
            ],
          },
        },
        {
          stepNumber: 2,
          description: 'Part (a): find \\( b \\) using the sine rule.',
          workingLatex: 'b = \\frac{a \\sin B}{\\sin A} = \\frac{12 \\sin 70^\\circ}{\\sin 50^\\circ} = \\frac{12 \\times 0.9397}{0.7660} = 14.72\\ldots',
          explanation: '',
        },
        {
          stepNumber: 3,
          description: 'Find \\( c \\).',
          workingLatex: 'c = \\frac{a \\sin C}{\\sin A} = \\frac{12 \\sin 60^\\circ}{\\sin 50^\\circ} = \\frac{12 \\times 0.8660}{0.7660} = 13.57\\ldots',
          explanation: '',
        },
        {
          stepNumber: 4,
          description: 'Round.',
          workingLatex: 'b \\approx 14.7,\\ c \\approx 13.6',
          explanation: '',
        },
        {
          stepNumber: 5,
          description: 'Part (b): area using two sides and the included angle.',
          workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times a \\times b \\times \\sin C = \\tfrac{1}{2}(12)(14.72)\\sin 60^\\circ',
          explanation: 'Use unrounded \\( b \\). The included angle of \\( a \\) and \\( b \\) is \\( C \\) (the vertex where they meet).',
        },
        {
          stepNumber: 6,
          description: 'Evaluate.',
          workingLatex: '\\text{Area} = 88.32 \\times 0.8660 = 76.49\\ldots \\approx 76.5 \\text{ cm}^2',
          explanation: '',
        },
        {
          stepNumber: 7,
          description: 'Part (c): shortest altitude is to the longest side (\\( b \\approx 14.72 \\)).',
          workingLatex: 'h_b = \\frac{2 \\times \\text{Area}}{b} = \\frac{2 \\times 76.49}{14.72} = \\frac{152.98}{14.72} = 10.39\\ldots',
          explanation: 'Area = \\( \\tfrac{1}{2} \\times \\text{base} \\times \\text{height} \\); rearranged.',
        },
        {
          stepNumber: 8,
          description: 'Round.',
          workingLatex: 'h \\approx 10.4 \\text{ cm}',
          explanation: '',
        },
      ],
      finalAnswer: '\\( (a)\\ b \\approx 14.7,\\ c \\approx 13.6\\quad (b)\\ \\text{Area} \\approx 76.5 \\text{ cm}^2\\quad (c)\\ h \\approx 10.4 \\text{ cm} \\)',
    },
  },

];
