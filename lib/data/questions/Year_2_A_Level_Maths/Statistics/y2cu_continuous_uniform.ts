import { Question } from "@/lib/types";

/**
 * Year 2 — Statistics § Continuous Uniform Distribution
 * Ref: y2cu
 * 71 questions. Diagrams: Mafs figures (questionMafs / step.mafs).
 */
export const questions: Question[] = [
  {
    id: "y2cu-001",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) is uniformly distributed over the interval \\( [3,\\,7] \\), so \\( X\\sim U(3,7) \\). Write down the probability density function \\( f(x) \\) of \\( X \\), stating its value for \\( 3\\le x\\le 7 \\) and elsewhere.",
    questionMafs: `<Mafs viewBox={{ x: [2.28, 7.72], y: [-0.045, 0.3375] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polyline points={[[3,0],[3,0.25],[7,0.25],[7,0]]} color="var(--mafs-fg-accent)" />
  <Text x={3} y={-0.0247} attach="s">3</Text>
  <Text x={7} y={-0.0247} attach="s">7</Text>
  <Text x={2.676} y={0.25} attach="w">1/(7−3)</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "pdf", "definition"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the constant height of a uniform pdf", workingLatex: "f(x)=\\dfrac{1}{b-a}\\quad\\text{for }a\\le x\\le b", explanation: "For \\( X\\sim U(a,b) \\) the density is constant on \\( [a,b] \\), with height \\( \\dfrac{1}{b-a} \\) so the total area is \\( 1 \\)." },
        { stepNumber: 2, description: "Substitute \\( a=3,\\ b=7 \\)", workingLatex: "\\dfrac{1}{b-a}=\\dfrac{1}{7-3}=\\dfrac{1}{4}", explanation: "The width of the interval is \\( 7-3=4 \\), so the height of the pdf is \\( \\dfrac{1}{4} \\)." },
        { stepNumber: 3, description: "State the full piecewise pdf", workingLatex: "f(x)=\\begin{cases}\\dfrac{1}{4}, & 3\\le x\\le 7\\\\[4pt]0, & \\text{otherwise}\\end{cases}", explanation: "The density is \\( \\dfrac14 \\) across the interval and \\( 0 \\) everywhere outside it." }
      ],
      finalAnswer: "\\( f(x)=\\dfrac{1}{4} \\text{ for } 3\\le x\\le 7,\\ \\text{and } f(x)=0 \\text{ otherwise} \\)",
    },
  },
  {
    id: "y2cu-002",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The continuous random variable \\( X\\sim U(0,5) \\). Find the height of the probability density function \\( f(x) \\) on the interval \\( 0\\le x\\le 5 \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.9, 5.9], y: [-0.036, 0.27] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polyline points={[[0,0],[0,0.2],[5,0.2],[5,0]]} color="var(--mafs-fg-accent)" />
  <Text x={0} y={-0.0198} attach="s">0</Text>
  <Text x={5} y={-0.0198} attach="s">5</Text>
  <Text x={-0.405} y={0.2} attach="w">1/(5−0)</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "pdf", "height"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the formula for the height", workingLatex: "f(x)=\\dfrac{1}{b-a}", explanation: "On its interval, a continuous uniform pdf has constant height \\( \\dfrac{1}{b-a} \\)." },
        { stepNumber: 2, description: "Substitute \\( a=0,\\ b=5 \\)", workingLatex: "f(x)=\\dfrac{1}{5-0}=\\dfrac{1}{5}", explanation: "The interval has width \\( 5 \\), so the height is \\( \\dfrac{1}{5} \\)." }
      ],
      finalAnswer: "\\( f(x)=\\dfrac{1}{5} \\)",
    },
  },
  {
    id: "y2cu-003",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The continuous random variable \\( X\\sim U(2,8) \\). Find \\( P(3<X<5) \\).",
    questionMafs: `<Mafs viewBox={{ x: [0.92, 9.08], y: [-0.03, 0.225] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[3,0],[3,0.1667],[5,0.1667],[5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[2,0],[2,0.1667],[8,0.1667],[8,0]]} color="var(--mafs-fg-accent)" />
  <Text x={2} y={-0.0165} attach="s">2</Text>
  <Text x={8} y={-0.0165} attach="s">8</Text>
  <Text x={1.514} y={0.1667} attach="w">1/(8−2)</Text>
  <Text x={3} y={-0.0165} attach="s">3</Text>
  <Text x={5} y={-0.0165} attach="s">5</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "probability", "interval"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the interval-probability formula", workingLatex: "P(c<X<d)=\\dfrac{d-c}{b-a}", explanation: "A probability equals the area of the rectangle above \\( [c,d] \\): width \\( d-c \\) times height \\( \\dfrac{1}{b-a} \\)." },
        { stepNumber: 2, description: "Substitute \\( c=3,\\ d=5,\\ a=2,\\ b=8 \\)", workingLatex: "P(3<X<5)=\\dfrac{5-3}{8-2}=\\dfrac{2}{6}", explanation: "The shaded sub-interval has width \\( 2 \\) and the whole interval has width \\( 6 \\)." },
        { stepNumber: 3, description: "Simplify the fraction", workingLatex: "\\dfrac{2}{6}=\\dfrac{1}{3}", explanation: "Dividing numerator and denominator by \\( 2 \\) gives \\( \\dfrac13 \\)." }
      ],
      finalAnswer: "\\( P(3<X<5)=\\dfrac{1}{3} \\)",
    },
  },
  {
    id: "y2cu-004",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The continuous random variable \\( X\\sim U(0,10) \\). Find the mean \\( E(X) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "mean", "expectation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the mean of a uniform distribution", workingLatex: "E(X)=\\dfrac{a+b}{2}", explanation: "By symmetry the mean is the midpoint of the interval \\( [a,b] \\)." },
        { stepNumber: 2, description: "Substitute \\( a=0,\\ b=10 \\)", workingLatex: "E(X)=\\dfrac{0+10}{2}=\\dfrac{10}{2}=5", explanation: "The midpoint of \\( [0,10] \\) is \\( 5 \\)." }
      ],
      finalAnswer: "\\( E(X)=5 \\)",
    },
  },
  {
    id: "y2cu-005",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The continuous random variable \\( X\\sim U(1,9) \\). Find \\( P(X<4) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.44, 10.44], y: [-0.0225, 0.1688] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[1,0],[1,0.125],[4,0.125],[4,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[1,0],[1,0.125],[9,0.125],[9,0]]} color="var(--mafs-fg-accent)" />
  <Text x={1} y={-0.0124} attach="s">1</Text>
  <Text x={9} y={-0.0124} attach="s">9</Text>
  <Text x={0.352} y={0.125} attach="w">1/(9−1)</Text>
  <Text x={1} y={-0.0124} attach="s">1</Text>
  <Text x={4} y={-0.0124} attach="s">4</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "probability", "less than"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Interpret the probability as an area from \\( a \\) to \\( 4 \\)", workingLatex: "P(X<4)=P(1<X<4)=\\dfrac{d-c}{b-a}", explanation: "Since \\( X \\) cannot be below \\( a=1 \\), \\( P(X<4) \\) is the area of the rectangle above \\( [1,4] \\)." },
        { stepNumber: 2, description: "Substitute \\( c=1,\\ d=4,\\ a=1,\\ b=9 \\)", workingLatex: "P(X<4)=\\dfrac{4-1}{9-1}=\\dfrac{3}{8}", explanation: "The sub-interval width is \\( 3 \\) and the whole width is \\( 8 \\)." }
      ],
      finalAnswer: "\\( P(X<4)=\\dfrac{3}{8} \\)",
    },
  },
  {
    id: "y2cu-006",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The continuous random variable \\( X\\sim U(4,12) \\). Find the mean \\( E(X) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "mean", "expectation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the mean of a uniform distribution", workingLatex: "E(X)=\\dfrac{a+b}{2}", explanation: "The mean is the midpoint of the interval \\( [a,b] \\)." },
        { stepNumber: 2, description: "Substitute \\( a=4,\\ b=12 \\)", workingLatex: "E(X)=\\dfrac{4+12}{2}=\\dfrac{16}{2}=8", explanation: "The midpoint of \\( [4,12] \\) is \\( 8 \\)." }
      ],
      finalAnswer: "\\( E(X)=8 \\)",
    },
  },
  {
    id: "y2cu-007",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 07",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The continuous random variable \\( X\\sim U(0,8) \\). Find \\( P(X>5) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-1.44, 9.44], y: [-0.0225, 0.1688] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[5,0],[5,0.125],[8,0.125],[8,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[0,0],[0,0.125],[8,0.125],[8,0]]} color="var(--mafs-fg-accent)" />
  <Text x={0} y={-0.0124} attach="s">0</Text>
  <Text x={8} y={-0.0124} attach="s">8</Text>
  <Text x={-0.648} y={0.125} attach="w">1/(8−0)</Text>
  <Text x={5} y={-0.0124} attach="s">5</Text>
  <Text x={8} y={-0.0124} attach="s">8</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "probability", "greater than"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Interpret the probability as an area from \\( 5 \\) to \\( b \\)", workingLatex: "P(X>5)=P(5<X<8)=\\dfrac{d-c}{b-a}", explanation: "Since \\( X \\) cannot exceed \\( b=8 \\), \\( P(X>5) \\) is the area of the rectangle above \\( [5,8] \\)." },
        { stepNumber: 2, description: "Substitute \\( c=5,\\ d=8,\\ a=0,\\ b=8 \\)", workingLatex: "P(X>5)=\\dfrac{8-5}{8-0}=\\dfrac{3}{8}", explanation: "The sub-interval width is \\( 3 \\) and the whole width is \\( 8 \\)." }
      ],
      finalAnswer: "\\( P(X>5)=\\dfrac{3}{8} \\)",
    },
  },
  {
    id: "y2cu-008",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 08",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The continuous random variable \\( X\\sim U(2,6) \\). Write down the value of the probability density function \\( f(x) \\) for \\( 2\\le x\\le 6 \\).",
    questionMafs: `<Mafs viewBox={{ x: [1.28, 6.72], y: [-0.045, 0.3375] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polyline points={[[2,0],[2,0.25],[6,0.25],[6,0]]} color="var(--mafs-fg-accent)" />
  <Text x={2} y={-0.0247} attach="s">2</Text>
  <Text x={6} y={-0.0247} attach="s">6</Text>
  <Text x={1.676} y={0.25} attach="w">1/(6−2)</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "pdf", "height"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the formula for the height", workingLatex: "f(x)=\\dfrac{1}{b-a}", explanation: "A continuous uniform pdf has constant height \\( \\dfrac{1}{b-a} \\) on its interval." },
        { stepNumber: 2, description: "Substitute \\( a=2,\\ b=6 \\)", workingLatex: "f(x)=\\dfrac{1}{6-2}=\\dfrac{1}{4}", explanation: "The interval width is \\( 4 \\), so the height is \\( \\dfrac14 \\)." }
      ],
      finalAnswer: "\\( f(x)=\\dfrac{1}{4} \\)",
    },
  },
  {
    id: "y2cu-009",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 09",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The continuous random variable \\( X\\sim U(10,30) \\). Find \\( P(15<X<25) \\).",
    questionMafs: `<Mafs viewBox={{ x: [6.4, 33.6], y: [-0.009, 0.0675] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[15,0],[15,0.05],[25,0.05],[25,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[10,0],[10,0.05],[30,0.05],[30,0]]} color="var(--mafs-fg-accent)" />
  <Text x={10} y={-0.005} attach="s">10</Text>
  <Text x={30} y={-0.005} attach="s">30</Text>
  <Text x={8.38} y={0.05} attach="w">1/(30−10)</Text>
  <Text x={15} y={-0.005} attach="s">15</Text>
  <Text x={25} y={-0.005} attach="s">25</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "probability", "interval"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the interval-probability formula", workingLatex: "P(c<X<d)=\\dfrac{d-c}{b-a}", explanation: "The probability is the area of the rectangle above \\( [c,d] \\)." },
        { stepNumber: 2, description: "Substitute \\( c=15,\\ d=25,\\ a=10,\\ b=30 \\)", workingLatex: "P(15<X<25)=\\dfrac{25-15}{30-10}=\\dfrac{10}{20}", explanation: "The shaded width is \\( 10 \\) and the whole width is \\( 20 \\)." },
        { stepNumber: 3, description: "Simplify the fraction", workingLatex: "\\dfrac{10}{20}=\\dfrac{1}{2}", explanation: "Dividing top and bottom by \\( 10 \\) gives \\( \\dfrac12 \\)." }
      ],
      finalAnswer: "\\( P(15<X<25)=\\dfrac{1}{2} \\)",
    },
  },
  {
    id: "y2cu-010",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 10",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The continuous random variable \\( X\\sim U(-2,4) \\). Find the mean \\( E(X) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "mean", "expectation", "negative limit"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the mean of a uniform distribution", workingLatex: "E(X)=\\dfrac{a+b}{2}", explanation: "The mean is the midpoint of \\( [a,b] \\), even when \\( a \\) is negative." },
        { stepNumber: 2, description: "Substitute \\( a=-2,\\ b=4 \\)", workingLatex: "E(X)=\\dfrac{-2+4}{2}=\\dfrac{2}{2}=1", explanation: "The midpoint of \\( [-2,4] \\) is \\( 1 \\)." }
      ],
      finalAnswer: "\\( E(X)=1 \\)",
    },
  },
  {
    id: "y2cu-011",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 11",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The continuous random variable \\( X\\sim U(0,20) \\). Find \\( P(X>14) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-3.6, 23.6], y: [-0.009, 0.0675] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[14,0],[14,0.05],[20,0.05],[20,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[0,0],[0,0.05],[20,0.05],[20,0]]} color="var(--mafs-fg-accent)" />
  <Text x={0} y={-0.005} attach="s">0</Text>
  <Text x={20} y={-0.005} attach="s">20</Text>
  <Text x={-1.62} y={0.05} attach="w">1/(20−0)</Text>
  <Text x={14} y={-0.005} attach="s">14</Text>
  <Text x={20} y={-0.005} attach="s">20</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "probability", "greater than"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Interpret the probability as an area from \\( 14 \\) to \\( b \\)", workingLatex: "P(X>14)=P(14<X<20)=\\dfrac{d-c}{b-a}", explanation: "Since \\( X \\) cannot exceed \\( b=20 \\), \\( P(X>14) \\) is the area above \\( [14,20] \\)." },
        { stepNumber: 2, description: "Substitute \\( c=14,\\ d=20,\\ a=0,\\ b=20 \\)", workingLatex: "P(X>14)=\\dfrac{20-14}{20-0}=\\dfrac{6}{20}", explanation: "The sub-interval width is \\( 6 \\) and the whole width is \\( 20 \\)." },
        { stepNumber: 3, description: "Simplify the fraction", workingLatex: "\\dfrac{6}{20}=\\dfrac{3}{10}", explanation: "Dividing top and bottom by \\( 2 \\) gives \\( \\dfrac{3}{10} \\)." }
      ],
      finalAnswer: "\\( P(X>14)=\\dfrac{3}{10} \\)",
    },
  },
  {
    id: "y2cu-012",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 12",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) is uniformly distributed on the interval \\( [2, 10] \\), so \\( X \\sim U(2, 10) \\). Write down the height of the probability density function of \\( X \\).",
    questionMafs: `<Mafs viewBox={{ x: [0.56, 11.44], y: [-0.0225, 0.1688] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polyline points={[[2,0],[2,0.125],[10,0.125],[10,0]]} color="var(--mafs-fg-accent)" />
  <Text x={2} y={-0.0124} attach="s">2</Text>
  <Text x={10} y={-0.0124} attach="s">10</Text>
  <Text x={1.352} y={0.125} attach="w">1/(10−2)</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "pdf height", "definition"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall that for \\( X\\sim U(a,b) \\) the pdf is constant with height \\( \\dfrac{1}{b-a} \\) on \\( [a,b] \\).", workingLatex: "f(x) = \\frac{1}{b-a}, \\quad a \\le x \\le b", explanation: "A continuous uniform distribution spreads probability evenly, so the density is a constant rectangle of height \\( \\frac{1}{b-a} \\)." },
        { stepNumber: 2, description: "Substitute \\( a=2 \\) and \\( b=10 \\).", workingLatex: "f(x) = \\frac{1}{10-2} = \\frac{1}{8}", explanation: "The width of the interval is \\( 10-2=8 \\), so the height is \\( \\frac{1}{8}=0.125 \\)." }
      ],
      finalAnswer: "\\( f(x) = \\dfrac{1}{8} = 0.125 \\)",
      canonicalAnswer: "1/8",
    },
  },
  {
    id: "y2cu-013",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 13",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\sim U(3, 11) \\). Find \\( \\mathrm{E}(X) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "expectation", "mean"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the mean of a continuous uniform distribution on \\( [a,b] \\).", workingLatex: "\\mathrm{E}(X) = \\frac{a+b}{2}", explanation: "By symmetry the expected value of \\( U(a,b) \\) is the midpoint of the interval." },
        { stepNumber: 2, description: "Substitute \\( a=3 \\) and \\( b=11 \\).", workingLatex: "\\mathrm{E}(X) = \\frac{3+11}{2} = \\frac{14}{2} = 7", explanation: "Adding the endpoints gives \\( 14 \\); halving gives \\( 7 \\)." }
      ],
      finalAnswer: "\\( \\mathrm{E}(X) = 7 \\)",
      canonicalAnswer: "7",
    },
  },
  {
    id: "y2cu-014",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 14",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\sim U(2, 10) \\). Find \\( P(X > 7) \\).",
    questionMafs: `<Mafs viewBox={{ x: [0.56, 11.44], y: [-0.0225, 0.1688] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[7,0],[7,0.125],[10,0.125],[10,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[2,0],[2,0.125],[10,0.125],[10,0]]} color="var(--mafs-fg-accent)" />
  <Text x={2} y={-0.0124} attach="s">2</Text>
  <Text x={10} y={-0.0124} attach="s">10</Text>
  <Text x={1.352} y={0.125} attach="w">1/(10−2)</Text>
  <Text x={7} y={-0.0124} attach="s">7</Text>
  <Text x={10} y={-0.0124} attach="s">10</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "probability", "area"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Interpret \\( P(X>7) \\) as the area of the rectangle from \\( 7 \\) to \\( 10 \\), of height \\( \\dfrac{1}{b-a} \\).", workingLatex: "P(X>7) = (10-7)\\times \\frac{1}{10-2}", explanation: "The probability equals base \\( \\times \\) height of the shaded strip under the pdf." },
        { stepNumber: 2, description: "Evaluate the product.", workingLatex: "P(X>7) = 3 \\times \\frac{1}{8} = \\frac{3}{8}", explanation: "The width is \\( 10-7=3 \\) and the height is \\( \\frac{1}{8} \\), giving \\( \\frac{3}{8}=0.375 \\)." }
      ],
      finalAnswer: "\\( P(X>7) = \\dfrac{3}{8} = 0.375 \\)",
      canonicalAnswer: "3/8",
    },
  },
  {
    id: "y2cu-015",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 15",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\sim U(1, 9) \\). Find \\( P(X < 5) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.44, 10.44], y: [-0.0225, 0.1688] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[1,0],[1,0.125],[5,0.125],[5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[1,0],[1,0.125],[9,0.125],[9,0]]} color="var(--mafs-fg-accent)" />
  <Text x={1} y={-0.0124} attach="s">1</Text>
  <Text x={9} y={-0.0124} attach="s">9</Text>
  <Text x={0.352} y={0.125} attach="w">1/(9−1)</Text>
  <Text x={1} y={-0.0124} attach="s">1</Text>
  <Text x={5} y={-0.0124} attach="s">5</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "probability", "area"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Interpret \\( P(X<5) \\) as the area of the rectangle from \\( 1 \\) to \\( 5 \\), of height \\( \\dfrac{1}{b-a} \\).", workingLatex: "P(X<5) = (5-1)\\times \\frac{1}{9-1}", explanation: "The probability is the area under the pdf to the left of \\( 5 \\), i.e. base \\( \\times \\) height." },
        { stepNumber: 2, description: "Evaluate the product.", workingLatex: "P(X<5) = 4 \\times \\frac{1}{8} = \\frac{4}{8} = \\frac{1}{2}", explanation: "The width is \\( 5-1=4 \\) and the height is \\( \\frac{1}{8} \\), giving \\( \\frac{1}{2}=0.5 \\)." }
      ],
      finalAnswer: "\\( P(X<5) = \\dfrac{1}{2} = 0.5 \\)",
      canonicalAnswer: "1/2",
    },
  },
  {
    id: "y2cu-016",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 16",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\sim U(2, 12) \\). Find \\( P(4 < X < 7) \\).",
    questionMafs: `<Mafs viewBox={{ x: [0.2, 13.8], y: [-0.018, 0.135] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[4,0],[4,0.1],[7,0.1],[7,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[2,0],[2,0.1],[12,0.1],[12,0]]} color="var(--mafs-fg-accent)" />
  <Text x={2} y={-0.0099} attach="s">2</Text>
  <Text x={12} y={-0.0099} attach="s">12</Text>
  <Text x={1.19} y={0.1} attach="w">1/(12−2)</Text>
  <Text x={4} y={-0.0099} attach="s">4</Text>
  <Text x={7} y={-0.0099} attach="s">7</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "probability", "area"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Interpret \\( P(4<X<7) \\) as the area of the rectangle from \\( 4 \\) to \\( 7 \\), of height \\( \\dfrac{1}{b-a} \\).", workingLatex: "P(4<X<7) = (7-4)\\times \\frac{1}{12-2}", explanation: "The probability is the area of the strip between \\( 4 \\) and \\( 7 \\): base \\( \\times \\) height." },
        { stepNumber: 2, description: "Evaluate the product.", workingLatex: "P(4<X<7) = 3 \\times \\frac{1}{10} = \\frac{3}{10}", explanation: "The width is \\( 7-4=3 \\) and the height is \\( \\frac{1}{10} \\), giving \\( \\frac{3}{10}=0.3 \\)." }
      ],
      finalAnswer: "\\( P(4<X<7) = \\dfrac{3}{10} = 0.3 \\)",
      canonicalAnswer: "3/10",
    },
  },
  {
    id: "y2cu-017",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 17",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "A bus arrives at a stop at a time that is equally likely to be anywhere in the \\( 20 \\) minutes after a passenger arrives. The waiting time \\( X \\), in minutes, is modelled by \\( X \\sim U(0, 20) \\). Write down the height of the probability density function of \\( X \\).",
    questionMafs: `<Mafs viewBox={{ x: [-3.6, 23.6], y: [-0.009, 0.0675] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polyline points={[[0,0],[0,0.05],[20,0.05],[20,0]]} color="var(--mafs-fg-accent)" />
  <Text x={0} y={-0.005} attach="s">0</Text>
  <Text x={20} y={-0.005} attach="s">20</Text>
  <Text x={-1.62} y={0.05} attach="w">1/(20−0)</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "pdf height", "context", "waiting time"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Use the constant pdf height of a continuous uniform distribution on \\( [a,b] \\).", workingLatex: "f(x) = \\frac{1}{b-a}, \\quad a \\le x \\le b", explanation: "Because every waiting time in the interval is equally likely, the density is a constant \\( \\frac{1}{b-a} \\)." },
        { stepNumber: 2, description: "Substitute \\( a=0 \\) and \\( b=20 \\).", workingLatex: "f(x) = \\frac{1}{20-0} = \\frac{1}{20}", explanation: "The interval has width \\( 20 \\) minutes, so the height is \\( \\frac{1}{20}=0.05 \\)." }
      ],
      finalAnswer: "\\( f(x) = \\dfrac{1}{20} = 0.05 \\)",
      canonicalAnswer: "1/20",
    },
  },
  {
    id: "y2cu-018",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 18",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "A passenger's waiting time \\( X \\), in minutes, for a train is modelled by \\( X \\sim U(0, 15) \\). Find the probability that the passenger waits less than \\( 6 \\) minutes.",
    questionMafs: `<Mafs viewBox={{ x: [-2.7, 17.7], y: [-0.012, 0.09] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[0,0],[0,0.0667],[6,0.0667],[6,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[0,0],[0,0.0667],[15,0.0667],[15,0]]} color="var(--mafs-fg-accent)" />
  <Text x={0} y={-0.0066} attach="s">0</Text>
  <Text x={15} y={-0.0066} attach="s">15</Text>
  <Text x={-1.215} y={0.0667} attach="w">1/(15−0)</Text>
  <Text x={0} y={-0.0066} attach="s">0</Text>
  <Text x={6} y={-0.0066} attach="s">6</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "probability", "context", "waiting time"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the required probability as an area under the pdf from \\( 0 \\) to \\( 6 \\).", workingLatex: "P(X<6) = (6-0)\\times \\frac{1}{15-0}", explanation: "Waiting less than \\( 6 \\) minutes corresponds to the area of the rectangle from \\( 0 \\) to \\( 6 \\)." },
        { stepNumber: 2, description: "Evaluate the product.", workingLatex: "P(X<6) = 6 \\times \\frac{1}{15} = \\frac{6}{15} = \\frac{2}{5}", explanation: "The width is \\( 6 \\) and the height is \\( \\frac{1}{15} \\), giving \\( \\frac{2}{5}=0.4 \\)." }
      ],
      finalAnswer: "\\( P(X<6) = \\dfrac{2}{5} = 0.4 \\)",
      canonicalAnswer: "2/5",
    },
  },
  {
    id: "y2cu-019",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 19",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\sim U(2, 8) \\) has cumulative distribution function \\( F(x) = \\dfrac{x-a}{b-a} \\) for \\( a \\le x \\le b \\). Find \\( F(5) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "cdf"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the cdf of \\( X\\sim U(2,8) \\) with \\( a=2 \\) and \\( b=8 \\).", workingLatex: "F(x) = \\frac{x-2}{8-2} = \\frac{x-2}{6}", explanation: "The cdf accumulates probability linearly from \\( 0 \\) at \\( a \\) to \\( 1 \\) at \\( b \\)." },
        { stepNumber: 2, description: "Substitute \\( x=5 \\).", workingLatex: "F(5) = \\frac{5-2}{6} = \\frac{3}{6} = \\frac{1}{2}", explanation: "The numerator is \\( 5-2=3 \\); dividing by \\( 6 \\) gives \\( \\frac{1}{2}=0.5 \\)." }
      ],
      finalAnswer: "\\( F(5) = \\dfrac{1}{2} = 0.5 \\)",
      canonicalAnswer: "1/2",
    },
  },
  {
    id: "y2cu-020",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 20",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\sim U(5, 25) \\). Find \\( P(X > 12) \\).",
    questionMafs: `<Mafs viewBox={{ x: [1.4, 28.6], y: [-0.009, 0.0675] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[12,0],[12,0.05],[25,0.05],[25,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[5,0],[5,0.05],[25,0.05],[25,0]]} color="var(--mafs-fg-accent)" />
  <Text x={5} y={-0.005} attach="s">5</Text>
  <Text x={25} y={-0.005} attach="s">25</Text>
  <Text x={3.38} y={0.05} attach="w">1/(25−5)</Text>
  <Text x={12} y={-0.005} attach="s">12</Text>
  <Text x={25} y={-0.005} attach="s">25</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "probability", "area"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Interpret \\( P(X>12) \\) as the area of the rectangle from \\( 12 \\) to \\( 25 \\), of height \\( \\dfrac{1}{b-a} \\).", workingLatex: "P(X>12) = (25-12)\\times \\frac{1}{25-5}", explanation: "The probability is the area under the pdf to the right of \\( 12 \\): base \\( \\times \\) height." },
        { stepNumber: 2, description: "Evaluate the product.", workingLatex: "P(X>12) = 13 \\times \\frac{1}{20} = \\frac{13}{20}", explanation: "The width is \\( 25-12=13 \\) and the height is \\( \\frac{1}{20} \\), giving \\( \\frac{13}{20}=0.65 \\)." }
      ],
      finalAnswer: "\\( P(X>12) = \\dfrac{13}{20} = 0.65 \\)",
      canonicalAnswer: "13/20",
    },
  },
  {
    id: "y2cu-021",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 21",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\sim U(-4, 10) \\). Find \\( \\mathrm{E}(X) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "expectation", "mean"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the mean of a continuous uniform distribution on \\( [a,b] \\).", workingLatex: "\\mathrm{E}(X) = \\frac{a+b}{2}", explanation: "The expected value of \\( U(a,b) \\) is the midpoint of the interval, even when \\( a \\) is negative." },
        { stepNumber: 2, description: "Substitute \\( a=-4 \\) and \\( b=10 \\).", workingLatex: "\\mathrm{E}(X) = \\frac{-4+10}{2} = \\frac{6}{2} = 3", explanation: "Adding the endpoints gives \\( 6 \\); halving gives \\( 3 \\)." }
      ],
      finalAnswer: "\\( \\mathrm{E}(X) = 3 \\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "y2cu-022",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 22",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\sim U(6, 18) \\). Find \\( P(8 < X < 14) \\).",
    questionMafs: `<Mafs viewBox={{ x: [3.84, 20.16], y: [-0.015, 0.1125] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[8,0],[8,0.0833],[14,0.0833],[14,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[6,0],[6,0.0833],[18,0.0833],[18,0]]} color="var(--mafs-fg-accent)" />
  <Text x={6} y={-0.0082} attach="s">6</Text>
  <Text x={18} y={-0.0082} attach="s">18</Text>
  <Text x={5.028} y={0.0833} attach="w">1/(18−6)</Text>
  <Text x={8} y={-0.0082} attach="s">8</Text>
  <Text x={14} y={-0.0082} attach="s">14</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["continuous uniform", "probability", "area"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Interpret \\( P(8<X<14) \\) as the area of the rectangle from \\( 8 \\) to \\( 14 \\), of height \\( \\dfrac{1}{b-a} \\).", workingLatex: "P(8<X<14) = (14-8)\\times \\frac{1}{18-6}", explanation: "The probability is the area of the strip between \\( 8 \\) and \\( 14 \\): base \\( \\times \\) height." },
        { stepNumber: 2, description: "Evaluate the product.", workingLatex: "P(8<X<14) = 6 \\times \\frac{1}{12} = \\frac{6}{12} = \\frac{1}{2}", explanation: "The width is \\( 14-8=6 \\) and the height is \\( \\frac{1}{12} \\), giving \\( \\frac{1}{2}=0.5 \\)." }
      ],
      finalAnswer: "\\( P(8<X<14) = \\dfrac{1}{2} = 0.5 \\)",
      canonicalAnswer: "1/2",
    },
  },
  {
    id: "y2cu-023",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 23",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) is uniformly distributed over the interval \\( [2, 8] \\). Find the variance of \\( X \\) and its standard deviation, giving the standard deviation to 4 significant figures.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "variance", "standard deviation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the endpoints of the interval.", workingLatex: "a = 2, \\quad b = 8", explanation: "For \\( X \\sim U[a,b] \\) read \\( a \\) and \\( b \\) directly from the interval \\( [2,8] \\)." },
        { stepNumber: 2, description: "Apply the variance formula for a continuous uniform distribution.", workingLatex: "\\mathrm{Var}(X) = \\frac{(b-a)^2}{12} = \\frac{(8-2)^2}{12} = \\frac{36}{12} = 3", explanation: "Substitute \\( a=2 \\) and \\( b=8 \\) into \\( \\mathrm{Var}(X)=\\dfrac{(b-a)^2}{12} \\)." },
        { stepNumber: 3, description: "Take the square root to find the standard deviation.", workingLatex: "\\sigma = \\sqrt{3} = 1.732 \\,(4\\text{ s.f.})", explanation: "The standard deviation is the positive square root of the variance, \\( \\sqrt{3}=1.732 \\) to 4 significant figures." }
      ],
      finalAnswer: "\\( \\mathrm{Var}(X) = 3, \\quad \\sigma = 1.732 \\)",
      canonicalAnswer: "Var(X)=3, sd=1.732",
    },
  },
  {
    id: "y2cu-024",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 24",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Buses on a route arrive every \\( 30 \\) minutes. A passenger's waiting time \\( T \\) minutes is modelled by a continuous uniform distribution on \\( [20, 50] \\). Find the standard deviation of \\( T \\), giving your answer to 4 significant figures.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "variance", "standard deviation", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the endpoints of the interval.", workingLatex: "a = 20, \\quad b = 50", explanation: "The waiting time is modelled on \\( [20,50] \\), so \\( a=20 \\) and \\( b=50 \\)." },
        { stepNumber: 2, description: "Compute the variance using the uniform variance formula.", workingLatex: "\\mathrm{Var}(T) = \\frac{(b-a)^2}{12} = \\frac{(50-20)^2}{12} = \\frac{900}{12} = 75", explanation: "Substitute the endpoints into \\( \\dfrac{(b-a)^2}{12} \\)." },
        { stepNumber: 3, description: "Take the square root to obtain the standard deviation.", workingLatex: "\\sigma = \\sqrt{75} = 8.660 \\,\\mathrm{minutes}\\,(4\\text{ s.f.})", explanation: "The standard deviation is \\( \\sqrt{75}=8.660 \\) minutes to 4 significant figures." }
      ],
      finalAnswer: "\\( \\sigma = 8.660\\ \\mathrm{minutes} \\)",
      canonicalAnswer: "sd=8.660 minutes",
    },
  },
  {
    id: "y2cu-025",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 25",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\sim U[4, 16] \\). Write down the cumulative distribution function \\( F(x) \\) for \\( 4 \\le x \\le 16 \\), and hence find \\( F(10) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "cdf"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the endpoints.", workingLatex: "a = 4, \\quad b = 16", explanation: "From \\( X\\sim U[4,16] \\) the endpoints are \\( a=4 \\) and \\( b=16 \\)." },
        { stepNumber: 2, description: "State the cumulative distribution function on the interval.", workingLatex: "F(x) = \\frac{x-a}{b-a} = \\frac{x-4}{12}, \\quad 4 \\le x \\le 16", explanation: "For a continuous uniform distribution \\( F(x)=\\dfrac{x-a}{b-a} \\) between the endpoints." },
        { stepNumber: 3, description: "Substitute \\( x = 10 \\) into the cdf.", workingLatex: "F(10) = \\frac{10-4}{12} = \\frac{6}{12} = \\frac{1}{2}", explanation: "Evaluating the cdf at \\( x=10 \\) gives \\( \\tfrac{1}{2} \\)." }
      ],
      finalAnswer: "\\( F(x) = \\dfrac{x-4}{12}, \\quad F(10) = \\dfrac{1}{2} \\)",
      canonicalAnswer: "F(x)=(x-4)/12, F(10)=1/2",
    },
  },
  {
    id: "y2cu-026",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 26",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) is uniformly distributed over \\( [0, 25] \\). Using the cumulative distribution function, find \\( P(X < 7) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-4.5, 29.5], y: [-0.0072, 0.054] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polyline points={[[0,0],[0,0.04],[25,0.04],[25,0]]} color="var(--mafs-fg-accent)" />
  <Text x={0} y={-0.004} attach="s">0</Text>
  <Text x={25} y={-0.004} attach="s">25</Text>
  <Text x={-2.025} y={0.04} attach="w">1/(25−0)</Text>
  <Text x={7} y={-0.004} attach="s">7</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "cdf", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the endpoints.", workingLatex: "a = 0, \\quad b = 25", explanation: "From \\( X\\sim U[0,25] \\) the endpoints are \\( a=0 \\) and \\( b=25 \\)." },
        { stepNumber: 2, description: "Write the cumulative distribution function.", workingLatex: "F(x) = \\frac{x-a}{b-a} = \\frac{x-0}{25} = \\frac{x}{25}", explanation: "Use \\( F(x)=\\dfrac{x-a}{b-a} \\) with \\( a=0 \\) and \\( b=25 \\)." },
        { stepNumber: 3, description: "Evaluate the cdf at \\( x = 7 \\).", workingLatex: "P(X < 7) = F(7) = \\frac{7}{25} = 0.28", explanation: "Since \\( P(X<7)=F(7) \\), substitute \\( x=7 \\) to get \\( \\tfrac{7}{25}=0.28 \\)." }
      ],
      finalAnswer: "\\( P(X < 7) = \\dfrac{7}{25} = 0.28 \\)",
      canonicalAnswer: "P(X<7)=7/25=0.28",
    },
  },
  {
    id: "y2cu-027",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 27",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The time \\( X \\) minutes that a customer spends queueing at a counter is modelled by a continuous uniform distribution on \\( [3, 11] \\). Find the probability that a customer queues for between \\( 5 \\) and \\( 9 \\) minutes.",
    questionMafs: `<Mafs viewBox={{ x: [1.56, 12.44], y: [-0.0225, 0.1688] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[5,0],[5,0.125],[9,0.125],[9,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[3,0],[3,0.125],[11,0.125],[11,0]]} color="var(--mafs-fg-accent)" />
  <Text x={3} y={-0.0124} attach="s">3</Text>
  <Text x={11} y={-0.0124} attach="s">11</Text>
  <Text x={2.352} y={0.125} attach="w">1/(11−3)</Text>
  <Text x={5} y={-0.0124} attach="s">5</Text>
  <Text x={9} y={-0.0124} attach="s">9</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "probability", "context", "units"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the endpoints and the height of the pdf.", workingLatex: "a = 3, \\quad b = 11, \\quad f(x) = \\frac{1}{b-a} = \\frac{1}{8}", explanation: "The pdf of \\( X\\sim U[3,11] \\) has constant height \\( \\dfrac{1}{8} \\) on the interval." },
        { stepNumber: 2, description: "Express the required probability as an area.", workingLatex: "P(5 < X < 9) = (9-5)\\times \\frac{1}{8}", explanation: "The probability is the width of the sub-interval multiplied by the constant height." },
        { stepNumber: 3, description: "Evaluate the probability.", workingLatex: "P(5 < X < 9) = \\frac{4}{8} = \\frac{1}{2}", explanation: "This gives \\( \\tfrac{4}{8}=\\tfrac{1}{2} \\)." }
      ],
      finalAnswer: "\\( P(5 < X < 9) = \\dfrac{1}{2} \\)",
      canonicalAnswer: "P(5<X<9)=1/2",
    },
  },
  {
    id: "y2cu-028",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 28",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A machine dispenses a volume \\( V \\) millilitres of liquid, where \\( V \\) is modelled by a continuous uniform distribution on \\( [10, 30] \\). Find the probability that the volume dispensed is between \\( 18 \\) and \\( 27 \\) millilitres.",
    questionMafs: `<Mafs viewBox={{ x: [6.4, 33.6], y: [-0.009, 0.0675] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[18,0],[18,0.05],[27,0.05],[27,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[10,0],[10,0.05],[30,0.05],[30,0]]} color="var(--mafs-fg-accent)" />
  <Text x={10} y={-0.005} attach="s">10</Text>
  <Text x={30} y={-0.005} attach="s">30</Text>
  <Text x={8.38} y={0.05} attach="w">1/(30−10)</Text>
  <Text x={18} y={-0.005} attach="s">18</Text>
  <Text x={27} y={-0.005} attach="s">27</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "probability", "between", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the endpoints.", workingLatex: "a = 10, \\quad b = 30", explanation: "From \\( V\\sim U[10,30] \\), \\( a=10 \\) and \\( b=30 \\)." },
        { stepNumber: 2, description: "Use the uniform probability for a sub-interval.", workingLatex: "P(18 < V < 27) = \\frac{27-18}{b-a} = \\frac{9}{20}", explanation: "Probability over a sub-interval is \\( \\dfrac{d-c}{b-a} \\)." },
        { stepNumber: 3, description: "Write as a decimal.", workingLatex: "P(18 < V < 27) = \\frac{9}{20} = 0.45", explanation: "Converting \\( \\tfrac{9}{20} \\) to a decimal gives \\( 0.45 \\)." }
      ],
      finalAnswer: "\\( P(18 < V < 27) = \\dfrac{9}{20} = 0.45 \\)",
      canonicalAnswer: "P(18<V<27)=9/20=0.45",
    },
  },
  {
    id: "y2cu-029",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 29",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A delay \\( D \\) seconds in a signal is modelled by a continuous uniform distribution on \\( [0, 40] \\). Find the probability that the delay is at least \\( 25 \\) seconds.",
    questionMafs: `<Mafs viewBox={{ x: [-7.2, 47.2], y: [-0.0045, 0.0338] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polyline points={[[0,0],[0,0.025],[40,0.025],[40,0]]} color="var(--mafs-fg-accent)" />
  <Text x={0} y={-0.0025} attach="s">0</Text>
  <Text x={40} y={-0.0025} attach="s">40</Text>
  <Text x={-3.24} y={0.025} attach="w">1/(40−0)</Text>
  <Text x={25} y={-0.0025} attach="s">25</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "probability", "at least", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the endpoints.", workingLatex: "a = 0, \\quad b = 40", explanation: "From \\( D\\sim U[0,40] \\), \\( a=0 \\) and \\( b=40 \\)." },
        { stepNumber: 2, description: "Express 'at least 25' as a probability over the upper sub-interval.", workingLatex: "P(D \\ge 25) = \\frac{b-25}{b-a} = \\frac{40-25}{40}", explanation: "'At least 25' means the interval from \\( 25 \\) up to \\( b=40 \\)." },
        { stepNumber: 3, description: "Evaluate.", workingLatex: "P(D \\ge 25) = \\frac{15}{40} = \\frac{3}{8} = 0.375", explanation: "This simplifies to \\( \\tfrac{3}{8}=0.375 \\)." }
      ],
      finalAnswer: "\\( P(D \\ge 25) = \\dfrac{3}{8} = 0.375 \\)",
      canonicalAnswer: "P(D>=25)=3/8=0.375",
    },
  },
  {
    id: "y2cu-030",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 30",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) is uniformly distributed over \\( [5, b] \\). Given that \\( \\mathrm{E}(X) = 12 \\), find the value of \\( b \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "finding endpoint", "mean"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the mean of a continuous uniform distribution.", workingLatex: "\\mathrm{E}(X) = \\frac{a+b}{2} = \\frac{5+b}{2}", explanation: "The mean of \\( X\\sim U[a,b] \\) is \\( \\dfrac{a+b}{2} \\), with \\( a=5 \\)." },
        { stepNumber: 2, description: "Set the mean equal to 12.", workingLatex: "\\frac{5+b}{2} = 12", explanation: "Use the given expected value \\( \\mathrm{E}(X)=12 \\)." },
        { stepNumber: 3, description: "Solve for \\( b \\).", workingLatex: "5 + b = 24 \\implies b = 19", explanation: "Multiply both sides by 2 and subtract 5 to obtain \\( b=19 \\)." }
      ],
      finalAnswer: "\\( b = 19 \\)",
      canonicalAnswer: "b=19",
    },
  },
  {
    id: "y2cu-031",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 31",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) is uniformly distributed over \\( [a, 20] \\). Given that the mean of \\( X \\) is \\( 14 \\), find the value of \\( a \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "finding endpoint", "mean"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the mean of the distribution.", workingLatex: "\\mathrm{E}(X) = \\frac{a+b}{2} = \\frac{a+20}{2}", explanation: "With \\( b=20 \\), the mean is \\( \\dfrac{a+20}{2} \\)." },
        { stepNumber: 2, description: "Set the mean equal to 14.", workingLatex: "\\frac{a+20}{2} = 14", explanation: "Use the given mean \\( 14 \\)." },
        { stepNumber: 3, description: "Solve for \\( a \\).", workingLatex: "a + 20 = 28 \\implies a = 8", explanation: "Multiply by 2 and subtract 20 to find \\( a=8 \\)." }
      ],
      finalAnswer: "\\( a = 8 \\)",
      canonicalAnswer: "a=8",
    },
  },
  {
    id: "y2cu-032",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 32",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) is uniformly distributed over \\( [2, b] \\). Given that \\( P(X < 8) = 0.4 \\), find the value of \\( b \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "finding endpoint", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the cumulative distribution function.", workingLatex: "F(x) = \\frac{x-a}{b-a} = \\frac{x-2}{b-2}", explanation: "With \\( a=2 \\), the cdf is \\( \\dfrac{x-2}{b-2} \\)." },
        { stepNumber: 2, description: "Form an equation from the given probability.", workingLatex: "P(X < 8) = \\frac{8-2}{b-2} = \\frac{6}{b-2} = 0.4", explanation: "Set \\( F(8) \\) equal to the given probability \\( 0.4 \\)." },
        { stepNumber: 3, description: "Solve for \\( b \\).", workingLatex: "6 = 0.4(b-2) \\implies b-2 = 15 \\implies b = 17", explanation: "Rearranging gives \\( b-2=15 \\), so \\( b=17 \\)." }
      ],
      finalAnswer: "\\( b = 17 \\)",
      canonicalAnswer: "b=17",
    },
  },
  {
    id: "y2cu-033",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 33",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) is uniformly distributed over \\( [a, 40] \\). Given that \\( P(X > 28) = 0.4 \\), find the value of \\( a \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "finding endpoint", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Express the upper-tail probability using the interval width.", workingLatex: "P(X > 28) = \\frac{b-28}{b-a} = \\frac{40-28}{40-a} = \\frac{12}{40-a}", explanation: "With \\( b=40 \\), the probability above 28 is \\( \\dfrac{40-28}{40-a} \\)." },
        { stepNumber: 2, description: "Form an equation from the given probability.", workingLatex: "\\frac{12}{40-a} = 0.4", explanation: "Set the upper-tail probability equal to \\( 0.4 \\)." },
        { stepNumber: 3, description: "Solve for \\( a \\).", workingLatex: "12 = 0.4(40-a) \\implies 40-a = 30 \\implies a = 10", explanation: "Rearranging gives \\( 40-a=30 \\), so \\( a=10 \\)." }
      ],
      finalAnswer: "\\( a = 10 \\)",
      canonicalAnswer: "a=10",
    },
  },
  {
    id: "y2cu-034",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 34",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\sim U[12, 24] \\). Find \\( \\mathrm{Var}(X) \\) and the standard deviation of \\( X \\), giving the standard deviation to 4 significant figures.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "variance", "standard deviation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the endpoints.", workingLatex: "a = 12, \\quad b = 24", explanation: "From \\( X\\sim U[12,24] \\), \\( a=12 \\) and \\( b=24 \\)." },
        { stepNumber: 2, description: "Apply the variance formula.", workingLatex: "\\mathrm{Var}(X) = \\frac{(b-a)^2}{12} = \\frac{(24-12)^2}{12} = \\frac{144}{12} = 12", explanation: "Substitute into \\( \\dfrac{(b-a)^2}{12} \\)." },
        { stepNumber: 3, description: "Take the square root for the standard deviation.", workingLatex: "\\sigma = \\sqrt{12} = 3.464 \\,(4\\text{ s.f.})", explanation: "The standard deviation is \\( \\sqrt{12}=3.464 \\) to 4 significant figures." }
      ],
      finalAnswer: "\\( \\mathrm{Var}(X) = 12, \\quad \\sigma = 3.464 \\)",
      canonicalAnswer: "Var(X)=12, sd=3.464",
    },
  },
  {
    id: "y2cu-035",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 35",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The lifetime \\( X \\) hours of a certain component, measured from a reference point, is modelled by a continuous uniform distribution on \\( [0, 6] \\). Find \\( \\mathrm{E}(X) \\) and \\( \\mathrm{Var}(X) \\), and state what \\( \\mathrm{E}(X) \\) represents in this context.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "expected value", "variance", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the expected value.", workingLatex: "\\mathrm{E}(X) = \\frac{a+b}{2} = \\frac{0+6}{2} = 3", explanation: "The mean of \\( X\\sim U[0,6] \\) is \\( \\dfrac{0+6}{2}=3 \\) hours." },
        { stepNumber: 2, description: "Find the variance.", workingLatex: "\\mathrm{Var}(X) = \\frac{(b-a)^2}{12} = \\frac{6^2}{12} = 3", explanation: "Substitute into \\( \\dfrac{(b-a)^2}{12} \\) to get \\( 3 \\)." },
        { stepNumber: 3, description: "Interpret the expected value in context.", workingLatex: "\\mathrm{E}(X) = 3\\ \\mathrm{hours}", explanation: "\\( \\mathrm{E}(X)=3 \\) is the long-run mean (average) lifetime of the components, namely \\( 3 \\) hours." }
      ],
      finalAnswer: "\\( \\mathrm{E}(X) = 3\\ \\mathrm{hours}, \\quad \\mathrm{Var}(X) = 3 \\)",
      canonicalAnswer: "E(X)=3 hours, Var(X)=3",
    },
  },
  {
    id: "y2cu-036",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 36",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The mass \\( M \\) grams of sand dropped by a chute is modelled by a continuous uniform distribution on \\( [15, 45] \\). Find the probability that the mass dropped is at least \\( 30 \\) grams.",
    questionMafs: `<Mafs viewBox={{ x: [9.6, 50.4], y: [-0.006, 0.045] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polyline points={[[15,0],[15,0.0333],[45,0.0333],[45,0]]} color="var(--mafs-fg-accent)" />
  <Text x={15} y={-0.0033} attach="s">15</Text>
  <Text x={45} y={-0.0033} attach="s">45</Text>
  <Text x={12.57} y={0.0333} attach="w">1/(45−15)</Text>
  <Text x={30} y={-0.0033} attach="s">30</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "probability", "at least", "context", "units"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the endpoints.", workingLatex: "a = 15, \\quad b = 45", explanation: "From \\( M\\sim U[15,45] \\), \\( a=15 \\) and \\( b=45 \\)." },
        { stepNumber: 2, description: "Express 'at least 30' over the upper sub-interval.", workingLatex: "P(M \\ge 30) = \\frac{b-30}{b-a} = \\frac{45-30}{45-15}", explanation: "'At least 30' is the interval from \\( 30 \\) up to \\( b=45 \\)." },
        { stepNumber: 3, description: "Evaluate.", workingLatex: "P(M \\ge 30) = \\frac{15}{30} = \\frac{1}{2}", explanation: "Since 30 is the midpoint of \\( [15,45] \\), the probability is \\( \\tfrac{1}{2} \\)." }
      ],
      finalAnswer: "\\( P(M \\ge 30) = \\dfrac{1}{2} \\)",
      canonicalAnswer: "P(M>=30)=1/2",
    },
  },
  {
    id: "y2cu-037",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 37",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) is uniformly distributed over the interval \\( [2, 14] \\). Find \\( P(X > 11 \\mid X > 5) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.16, 16.16], y: [-0.015, 0.1125] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[5,0],[5,0.0833],[11,0.0833],[11,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[2,0],[2,0.0833],[14,0.0833],[14,0]]} color="var(--mafs-fg-accent)" />
  <Text x={2} y={-0.0082} attach="s">2</Text>
  <Text x={14} y={-0.0082} attach="s">14</Text>
  <Text x={1.028} y={0.0833} attach="w">1/(14−2)</Text>
  <Text x={5} y={-0.0082} attach="s">5</Text>
  <Text x={11} y={-0.0082} attach="s">11</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "conditional probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the conditional probability using its definition.", workingLatex: "P(X>11\\mid X>5)=\\dfrac{P(X>11\\ \\cap\\ X>5)}{P(X>5)}", explanation: "By the definition of conditional probability. Note that the event \\( X>11 \\) lies entirely inside \\( X>5 \\), so the intersection is just \\( X>11 \\)." },
        { stepNumber: 2, description: "Reduce the intersection and write each probability as a length over the total length \\( b-a=12 \\).", workingLatex: "=\\dfrac{P(X>11)}{P(X>5)}=\\dfrac{(14-11)/12}{(14-5)/12}", explanation: "For \\( X\\sim U(2,14) \\) a tail probability \\( P(X>k) \\) equals \\( \\dfrac{14-k}{12} \\). The factors of \\( 12 \\) cancel." },
        { stepNumber: 3, description: "Apply the standard result \\( P(X>d\\mid X>c)=\\dfrac{b-d}{b-c} \\) and simplify.", workingLatex: "=\\dfrac{14-11}{14-5}=\\dfrac{3}{9}=\\dfrac{1}{3}", explanation: "The cancellation leaves the ratio of the two upper tail lengths, giving \\( \\tfrac{1}{3} \\)." }
      ],
      finalAnswer: "\\( P(X>11\\mid X>5)=\\dfrac{1}{3} \\)",
      canonicalAnswer: "1/3",
    },
  },
  {
    id: "y2cu-038",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 38",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A continuous random variable \\( X \\) follows a continuous uniform distribution on \\( [0, 20] \\). Find \\( P(X > 15 \\mid X > 8) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-3.6, 23.6], y: [-0.009, 0.0675] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[8,0],[8,0.05],[15,0.05],[15,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[0,0],[0,0.05],[20,0.05],[20,0]]} color="var(--mafs-fg-accent)" />
  <Text x={0} y={-0.005} attach="s">0</Text>
  <Text x={20} y={-0.005} attach="s">20</Text>
  <Text x={-1.62} y={0.05} attach="w">1/(20−0)</Text>
  <Text x={8} y={-0.005} attach="s">8</Text>
  <Text x={15} y={-0.005} attach="s">15</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "conditional probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Use the definition of conditional probability, noting \\( \\{X>15\\}\\subset\\{X>8\\} \\).", workingLatex: "P(X>15\\mid X>8)=\\dfrac{P(X>15)}{P(X>8)}", explanation: "Because every value greater than \\( 15 \\) is also greater than \\( 8 \\), the intersection of the two events is simply \\( X>15 \\)." },
        { stepNumber: 2, description: "Express each tail probability over the total interval length \\( b-a=20 \\).", workingLatex: "=\\dfrac{(20-15)/20}{(20-8)/20}=\\dfrac{20-15}{20-8}", explanation: "For \\( X\\sim U(0,20) \\), \\( P(X>k)=\\dfrac{20-k}{20} \\); the common denominator \\( 20 \\) cancels, matching \\( \\dfrac{b-d}{b-c} \\)." },
        { stepNumber: 3, description: "Simplify the resulting fraction.", workingLatex: "=\\dfrac{5}{12}", explanation: "The ratio \\( \\dfrac{5}{12} \\) is already in lowest terms." }
      ],
      finalAnswer: "\\( P(X>15\\mid X>8)=\\dfrac{5}{12} \\)",
      canonicalAnswer: "5/12",
    },
  },
  {
    id: "y2cu-039",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 39",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A continuous uniform distribution on the interval \\( [a, b] \\) has mean \\( 10 \\) and variance \\( 12 \\). Given that \\( a < b \\), find the values of \\( a \\) and \\( b \\).",
    questionMafs: `<Mafs viewBox={{ x: [1.84, 18.16], y: [-0.015, 0.1125] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polyline points={[[4,0],[4,0.0833],[16,0.0833],[16,0]]} color="var(--mafs-fg-accent)" />
  <Text x={4} y={-0.0082} attach="s">4</Text>
  <Text x={16} y={-0.0082} attach="s">16</Text>
  <Text x={3.028} y={0.0833} attach="w">1/(16−4)</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "mean", "variance", "endpoints"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the mean condition.", workingLatex: "\\dfrac{a+b}{2}=10 \\implies a+b=20", explanation: "For \\( X\\sim U(a,b) \\) the mean is \\( \\dfrac{a+b}{2} \\); setting it equal to \\( 10 \\) gives \\( a+b=20 \\)." },
        { stepNumber: 2, description: "Write down the variance condition.", workingLatex: "\\dfrac{(b-a)^2}{12}=12 \\implies (b-a)^2=144", explanation: "The variance is \\( \\dfrac{(b-a)^2}{12} \\); setting it equal to \\( 12 \\) gives \\( (b-a)^2=144 \\)." },
        { stepNumber: 3, description: "Take the positive root since \\( a<b \\).", workingLatex: "b-a=\\sqrt{144}=12", explanation: "As \\( b>a \\), the width \\( b-a \\) is positive, so \\( b-a=12 \\)." },
        { stepNumber: 4, description: "Solve the simultaneous equations \\( a+b=20 \\) and \\( b-a=12 \\).", workingLatex: "2b=32 \\implies b=16,\\quad a=20-16=4", explanation: "Adding the equations gives \\( 2b=32 \\), so \\( b=16 \\) and then \\( a=4 \\)." }
      ],
      finalAnswer: "\\( a=4,\\ b=16 \\)",
      canonicalAnswer: "a=4, b=16",
    },
  },
  {
    id: "y2cu-040",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 40",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\sim U(a, b) \\) has mean \\( 7 \\) and variance \\( 3 \\), with \\( a < b \\). Determine the interval endpoints \\( a \\) and \\( b \\).",
    questionMafs: `<Mafs viewBox={{ x: [2.92, 11.08], y: [-0.03, 0.225] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polyline points={[[4,0],[4,0.1667],[10,0.1667],[10,0]]} color="var(--mafs-fg-accent)" />
  <Text x={4} y={-0.0165} attach="s">4</Text>
  <Text x={10} y={-0.0165} attach="s">10</Text>
  <Text x={3.514} y={0.1667} attach="w">1/(10−4)</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "mean", "variance", "endpoints"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Form the mean equation.", workingLatex: "\\dfrac{a+b}{2}=7 \\implies a+b=14", explanation: "The mean of a continuous uniform distribution is the midpoint \\( \\dfrac{a+b}{2} \\)." },
        { stepNumber: 2, description: "Form the variance equation.", workingLatex: "\\dfrac{(b-a)^2}{12}=3 \\implies (b-a)^2=36", explanation: "Multiplying both sides of \\( \\dfrac{(b-a)^2}{12}=3 \\) by \\( 12 \\) gives \\( (b-a)^2=36 \\)." },
        { stepNumber: 3, description: "Take the positive square root because \\( a<b \\).", workingLatex: "b-a=6", explanation: "The width must be positive, so \\( b-a=\\sqrt{36}=6 \\)." },
        { stepNumber: 4, description: "Solve \\( a+b=14 \\) with \\( b-a=6 \\) simultaneously.", workingLatex: "2b=20 \\implies b=10,\\quad a=14-10=4", explanation: "Adding gives \\( 2b=20 \\), so \\( b=10 \\) and \\( a=4 \\)." }
      ],
      finalAnswer: "\\( a=4,\\ b=10 \\)",
      canonicalAnswer: "a=4, b=10",
    },
  },
  {
    id: "y2cu-041",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 41",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A continuous uniform distribution over \\( [a, b] \\) has mean \\( 15 \\) and variance \\( 12 \\), where \\( a < b \\). Find \\( a \\) and \\( b \\), and hence write down \\( P(X < 12) \\).",
    questionMafs: `<Mafs viewBox={{ x: [6.84, 23.16], y: [-0.015, 0.1125] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[9,0],[9,0.0833],[12,0.0833],[12,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[9,0],[9,0.0833],[21,0.0833],[21,0]]} color="var(--mafs-fg-accent)" />
  <Text x={9} y={-0.0082} attach="s">9</Text>
  <Text x={21} y={-0.0082} attach="s">21</Text>
  <Text x={8.028} y={0.0833} attach="w">1/(21−9)</Text>
  <Text x={9} y={-0.0082} attach="s">9</Text>
  <Text x={12} y={-0.0082} attach="s">12</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "mean", "variance", "endpoints", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Use the mean to relate \\( a \\) and \\( b \\).", workingLatex: "\\dfrac{a+b}{2}=15 \\implies a+b=30", explanation: "The mean of \\( U(a,b) \\) is the midpoint, giving \\( a+b=30 \\)." },
        { stepNumber: 2, description: "Use the variance and take the positive root.", workingLatex: "\\dfrac{(b-a)^2}{12}=12 \\implies (b-a)^2=144 \\implies b-a=12", explanation: "Since \\( a<b \\) the width is the positive root \\( b-a=12 \\)." },
        { stepNumber: 3, description: "Solve simultaneously for \\( a \\) and \\( b \\).", workingLatex: "2b=42 \\implies b=21,\\quad a=30-21=9", explanation: "Adding \\( a+b=30 \\) and \\( b-a=12 \\) gives \\( b=21 \\), then \\( a=9 \\)." },
        { stepNumber: 4, description: "Compute \\( P(X<12) \\) as a length over the total width.", workingLatex: "P(X<12)=\\dfrac{12-9}{21-9}=\\dfrac{3}{12}=\\dfrac{1}{4}", explanation: "For \\( X\\sim U(9,21) \\), \\( P(X<12)=\\dfrac{12-a}{b-a}=\\dfrac{3}{12}=\\tfrac14 \\)." }
      ],
      finalAnswer: "\\( a=9,\\ b=21,\\ P(X<12)=\\dfrac{1}{4} \\)",
      canonicalAnswer: "a=9, b=21, P(X<12)=1/4",
    },
  },
  {
    id: "y2cu-042",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 42",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) is uniformly distributed on \\( [3, 11] \\). Write down the probability density function \\( f(x) \\), state the cumulative distribution function \\( F(x) \\) for \\( 3 \\le x \\le 11 \\), and hence find \\( F(7) \\).",
    questionMafs: `<Mafs viewBox={{ x: [1.56, 12.44], y: [-0.0225, 0.1688] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[3,0],[3,0.125],[7,0.125],[7,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[3,0],[3,0.125],[11,0.125],[11,0]]} color="var(--mafs-fg-accent)" />
  <Text x={3} y={-0.0124} attach="s">3</Text>
  <Text x={11} y={-0.0124} attach="s">11</Text>
  <Text x={2.352} y={0.125} attach="w">1/(11−3)</Text>
  <Text x={3} y={-0.0124} attach="s">3</Text>
  <Text x={7} y={-0.0124} attach="s">7</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "pdf", "cdf"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the pdf as the reciprocal of the interval width.", workingLatex: "f(x)=\\dfrac{1}{b-a}=\\dfrac{1}{11-3}=\\dfrac{1}{8},\\quad 3\\le x\\le 11", explanation: "A continuous uniform pdf is constant at \\( \\dfrac{1}{b-a} \\) over its interval and zero elsewhere." },
        { stepNumber: 2, description: "Integrate the pdf from \\( a \\) to obtain the cdf.", workingLatex: "F(x)=\\int_{3}^{x}\\dfrac{1}{8}\\,\\mathrm{d}t=\\dfrac{x-3}{8},\\quad 3\\le x\\le 11", explanation: "The cdf accumulates the constant density, giving the linear ramp \\( \\dfrac{x-a}{b-a} \\)." },
        { stepNumber: 3, description: "Substitute \\( x=7 \\) into the cdf.", workingLatex: "F(7)=\\dfrac{7-3}{8}=\\dfrac{4}{8}=\\dfrac{1}{2}", explanation: "Evaluating the ramp at \\( 7 \\) gives \\( \\tfrac12 \\), which makes sense as \\( 7 \\) is the midpoint of \\( [3,11] \\)." }
      ],
      finalAnswer: "\\( f(x)=\\dfrac{1}{8},\\ F(x)=\\dfrac{x-3}{8},\\ F(7)=\\dfrac{1}{2} \\)",
      canonicalAnswer: "f(x)=1/8, F(x)=(x-3)/8, F(7)=1/2",
    },
  },
  {
    id: "y2cu-043",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 43",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A continuous random variable \\( X \\) has the continuous uniform distribution on \\( [0, 5] \\). Using its cumulative distribution function, find the value \\( x_0 \\) for which \\( F(x_0) = 0.7 \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.9, 5.9], y: [-0.036, 0.27] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[0,0],[0,0.2],[3.5,0.2],[3.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[0,0],[0,0.2],[5,0.2],[5,0]]} color="var(--mafs-fg-accent)" />
  <Text x={0} y={-0.0198} attach="s">0</Text>
  <Text x={5} y={-0.0198} attach="s">5</Text>
  <Text x={-0.405} y={0.2} attach="w">1/(5−0)</Text>
  <Text x={0} y={-0.0198} attach="s">0</Text>
  <Text x={3.5} y={-0.0198} attach="s">3.5</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "cdf", "percentile"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the cdf of \\( X\\sim U(0,5) \\).", workingLatex: "F(x)=\\dfrac{x-0}{5-0}=\\dfrac{x}{5},\\quad 0\\le x\\le 5", explanation: "The cdf of a continuous uniform distribution is the linear ramp \\( \\dfrac{x-a}{b-a} \\), here \\( \\dfrac{x}{5} \\)." },
        { stepNumber: 2, description: "Set the cdf equal to \\( 0.7 \\).", workingLatex: "\\dfrac{x_0}{5}=0.7", explanation: "We want the value \\( x_0 \\) below which \\( 70\\% \\) of the probability lies." },
        { stepNumber: 3, description: "Solve for \\( x_0 \\).", workingLatex: "x_0=0.7\\times 5=3.5", explanation: "Multiplying both sides by \\( 5 \\) gives \\( x_0=3.5 \\)." }
      ],
      finalAnswer: "\\( x_0=3.5 \\)",
      canonicalAnswer: "3.5",
    },
  },
  {
    id: "y2cu-044",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 44",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A delay \\( X \\) (in minutes) is modelled by a continuous uniform distribution on \\( [2, 18] \\). Find the probability that the delay is more than three-quarters of the way along this interval.",
    questionMafs: `<Mafs viewBox={{ x: [-0.88, 20.88], y: [-0.0112, 0.0844] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[14,0],[14,0.0625],[18,0.0625],[18,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[2,0],[2,0.0625],[18,0.0625],[18,0]]} color="var(--mafs-fg-accent)" />
  <Text x={2} y={-0.0062} attach="s">2</Text>
  <Text x={18} y={-0.0062} attach="s">18</Text>
  <Text x={0.704} y={0.0625} attach="w">1/(18−2)</Text>
  <Text x={14} y={-0.0062} attach="s">14</Text>
  <Text x={18} y={-0.0062} attach="s">18</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "probability", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the value three-quarters of the way along \\( [2, 18] \\).", workingLatex: "x=a+\\tfrac{3}{4}(b-a)=2+\\tfrac{3}{4}(18-2)=2+12=14", explanation: "Three-quarters of the way along means \\( a \\) plus \\( \\tfrac34 \\) of the interval width \\( 16 \\), giving \\( 14 \\)." },
        { stepNumber: 2, description: "Write the required probability as an upper tail.", workingLatex: "P(X>14)=\\dfrac{b-14}{b-a}=\\dfrac{18-14}{18-2}", explanation: "For \\( X\\sim U(2,18) \\) the tail probability is the remaining length \\( 18-14 \\) over the total width \\( 16 \\)." },
        { stepNumber: 3, description: "Simplify.", workingLatex: "=\\dfrac{4}{16}=\\dfrac{1}{4}", explanation: "The delay exceeds \\( 14 \\) minutes with probability \\( \\tfrac14 \\), consistent with covering the final quarter of the interval." }
      ],
      finalAnswer: "\\( P(X>14)=\\dfrac{1}{4} \\)",
      canonicalAnswer: "1/4",
    },
  },
  {
    id: "y2cu-045",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 45",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A bus is equally likely to arrive at any time during a \\( 40 \\)-minute window, so the arrival time \\( X \\) (in minutes after the window opens) is modelled by \\( X \\sim U(0, 40) \\). Find the probability that the bus arrives more than half of the way through the window.",
    questionMafs: `<Mafs viewBox={{ x: [-7.2, 47.2], y: [-0.0045, 0.0338] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[20,0],[20,0.025],[40,0.025],[40,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[0,0],[0,0.025],[40,0.025],[40,0]]} color="var(--mafs-fg-accent)" />
  <Text x={0} y={-0.0025} attach="s">0</Text>
  <Text x={40} y={-0.0025} attach="s">40</Text>
  <Text x={-3.24} y={0.025} attach="w">1/(40−0)</Text>
  <Text x={20} y={-0.0025} attach="s">20</Text>
  <Text x={40} y={-0.0025} attach="s">40</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "probability", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the point half of the way through the window.", workingLatex: "x=a+\\tfrac{1}{2}(b-a)=0+\\tfrac{1}{2}(40)=20", explanation: "Half of the way through \\( [0,40] \\) is the midpoint, \\( 20 \\) minutes." },
        { stepNumber: 2, description: "Express the required probability as an upper tail.", workingLatex: "P(X>20)=\\dfrac{40-20}{40-0}", explanation: "Arriving more than half way means \\( X>20 \\); the tail probability is the remaining length \\( 40-20 \\) over the total width \\( 40 \\)." },
        { stepNumber: 3, description: "Simplify.", workingLatex: "=\\dfrac{20}{40}=\\dfrac{1}{2}", explanation: "By symmetry of the uniform distribution about its midpoint, this probability is exactly \\( \\tfrac12 \\)." }
      ],
      finalAnswer: "\\( P(X>20)=\\dfrac{1}{2} \\)",
      canonicalAnswer: "1/2",
    },
  },
  {
    id: "y2cu-046",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 46",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Two independent buses each have a waiting time, in minutes, modelled by a continuous uniform distribution on \\( [0, 10] \\). Find the probability that both waiting times exceed \\( 7 \\) minutes.",
    questionMafs: `<Mafs viewBox={{ x: [-1.8, 11.8], y: [-0.018, 0.135] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[7,0],[7,0.1],[10,0.1],[10,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[0,0],[0,0.1],[10,0.1],[10,0]]} color="var(--mafs-fg-accent)" />
  <Text x={0} y={-0.0099} attach="s">0</Text>
  <Text x={10} y={-0.0099} attach="s">10</Text>
  <Text x={-0.81} y={0.1} attach="w">1/(10−0)</Text>
  <Text x={7} y={-0.0099} attach="s">7</Text>
  <Text x={10} y={-0.0099} attach="s">10</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "independence", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the probability that a single waiting time exceeds \\( 7 \\) minutes.", workingLatex: "P(X>7)=\\dfrac{10-7}{10-0}=\\dfrac{3}{10}", explanation: "For one bus, \\( X\\sim U(0,10) \\), the upper tail \\( P(X>7) \\) is the remaining length \\( 3 \\) over the total width \\( 10 \\)." },
        { stepNumber: 2, description: "Use independence to multiply the two probabilities.", workingLatex: "P(\\text{both}>7)=\\dfrac{3}{10}\\times\\dfrac{3}{10}", explanation: "Because the two waiting times are independent, the probability that both events occur is the product of the individual probabilities." },
        { stepNumber: 3, description: "Evaluate the product.", workingLatex: "=\\dfrac{9}{100}=0.09", explanation: "Multiplying gives \\( \\dfrac{9}{100} \\), i.e. \\( 0.0900 \\) to 4 s.f." }
      ],
      finalAnswer: "\\( P(\\text{both}>7)=\\dfrac{9}{100} \\)",
      canonicalAnswer: "9/100",
    },
  },
  {
    id: "y2cu-047",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 47",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "On each of two independent days, the time \\( X \\) (in minutes) a printer takes to warm up is modelled by a continuous uniform distribution on \\( [0, 8] \\). Find the probability that the warm-up time is less than \\( 2 \\) minutes on both days.",
    questionMafs: `<Mafs viewBox={{ x: [-1.44, 9.44], y: [-0.0225, 0.1688] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[0,0],[0,0.125],[2,0.125],[2,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[0,0],[0,0.125],[8,0.125],[8,0]]} color="var(--mafs-fg-accent)" />
  <Text x={0} y={-0.0124} attach="s">0</Text>
  <Text x={8} y={-0.0124} attach="s">8</Text>
  <Text x={-0.648} y={0.125} attach="w">1/(8−0)</Text>
  <Text x={0} y={-0.0124} attach="s">0</Text>
  <Text x={2} y={-0.0124} attach="s">2</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "independence", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the probability that a single warm-up time is less than \\( 2 \\) minutes.", workingLatex: "P(X<2)=\\dfrac{2-0}{8-0}=\\dfrac{2}{8}=\\dfrac{1}{4}", explanation: "For \\( X\\sim U(0,8) \\), \\( P(X<2) \\) is the length \\( 2 \\) over the total width \\( 8 \\), giving \\( \\tfrac14 \\)." },
        { stepNumber: 2, description: "Multiply the probabilities for the two independent days.", workingLatex: "P(\\text{both days}<2)=\\dfrac{1}{4}\\times\\dfrac{1}{4}", explanation: "The two days are independent, so the joint probability is the product of the two single-day probabilities." },
        { stepNumber: 3, description: "Evaluate the product.", workingLatex: "=\\dfrac{1}{16}=0.0625", explanation: "This gives \\( \\dfrac{1}{16}=0.0625 \\)." }
      ],
      finalAnswer: "\\( P(\\text{both days}<2)=\\dfrac{1}{16} \\)",
      canonicalAnswer: "1/16",
    },
  },
  {
    id: "y2cu-048",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 48",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) is uniformly distributed on \\( [10, 30] \\). Find \\( P(X > 25 \\mid X > 18) \\).",
    questionMafs: `<Mafs viewBox={{ x: [6.4, 33.6], y: [-0.009, 0.0675] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[18,0],[18,0.05],[25,0.05],[25,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[10,0],[10,0.05],[30,0.05],[30,0]]} color="var(--mafs-fg-accent)" />
  <Text x={10} y={-0.005} attach="s">10</Text>
  <Text x={30} y={-0.005} attach="s">30</Text>
  <Text x={8.38} y={0.05} attach="w">1/(30−10)</Text>
  <Text x={18} y={-0.005} attach="s">18</Text>
  <Text x={25} y={-0.005} attach="s">25</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "conditional probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the definition of conditional probability with \\( \\{X>25\\}\\subset\\{X>18\\} \\).", workingLatex: "P(X>25\\mid X>18)=\\dfrac{P(X>25)}{P(X>18)}", explanation: "Every value above \\( 25 \\) is above \\( 18 \\), so the intersection is just \\( X>25 \\)." },
        { stepNumber: 2, description: "Write each tail as a length over the width \\( b-a=20 \\) and cancel.", workingLatex: "=\\dfrac{(30-25)/20}{(30-18)/20}=\\dfrac{30-25}{30-18}", explanation: "Using \\( P(X>d\\mid X>c)=\\dfrac{b-d}{b-c} \\) with \\( b=30 \\), \\( c=18 \\), \\( d=25 \\)." },
        { stepNumber: 3, description: "Simplify the fraction.", workingLatex: "=\\dfrac{5}{12}", explanation: "The result \\( \\dfrac{5}{12} \\) is in lowest terms." }
      ],
      finalAnswer: "\\( P(X>25\\mid X>18)=\\dfrac{5}{12} \\)",
      canonicalAnswer: "5/12",
    },
  },
  {
    id: "y2cu-049",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 49",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A train is scheduled to depart every \\( 15 \\) minutes. A passenger who knows nothing about the timetable arrives at the platform, and the time \\( X \\) (in minutes) they must wait for the next train is equally likely to be any value between \\( 0 \\) and \\( 15 \\). A student must choose a distribution to model \\( X \\). State, with reasons, why a continuous uniform distribution is appropriate here, and explain why the binomial, Poisson and Normal distributions are each unsuitable.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "distribution selection", "modelling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Justify the continuous uniform model.", workingLatex: "X\\sim U(0,15)", explanation: "The waiting time is a continuous quantity that can take any value across the fixed interval \\( [0,15] \\), and every value in that interval is equally likely. Constant probability density over a bounded continuous interval is exactly the continuous uniform distribution." },
        { stepNumber: 2, description: "Explain why the binomial distribution is unsuitable.", workingLatex: "B(n,p)\\ \\text{requires a fixed number of discrete trials}", explanation: "The binomial counts successes in a fixed number of independent trials and is discrete; here there are no trials and the outcome is a continuous time, so the binomial does not apply." },
        { stepNumber: 3, description: "Explain why the Poisson distribution is unsuitable.", workingLatex: "\\text{Poisson}(\\lambda)\\ \\text{models discrete counts of events}", explanation: "The Poisson distribution models the number of events occurring (a non-negative integer count), not a continuous waiting time on a bounded interval, so it is the wrong type of variable." },
        { stepNumber: 4, description: "Explain why the Normal distribution is unsuitable.", workingLatex: "N(\\mu,\\sigma^2)\\ \\text{is unbounded and peaked at the mean}", explanation: "Although continuous, the Normal distribution is symmetric and bell-shaped with most probability near the mean and tails extending to \\( \\pm\\infty \\). The waiting time is bounded to \\( [0,15] \\) with all values equally likely, so a flat uniform density, not a peaked Normal one, is required." }
      ],
      finalAnswer: "\\( X\\sim U(0,15)\\ \\text{is the appropriate model.} \\)",
    },
  },
  {
    id: "y2cu-050",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 50",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) has a continuous uniform distribution on the interval \\( [a, b] \\). Given that \\( E(X) = 15 \\), \\( \\mathrm{Var}(X) = 27 \\) and \\( a < b \\), find the values of \\( a \\) and \\( b \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "mean", "variance", "endpoints", "simultaneous equations"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the mean condition for a continuous uniform distribution.", workingLatex: "\\dfrac{a+b}{2}=15 \\implies a+b=30", explanation: "For \\( X\\sim U(a,b) \\) the mean is \\( \\dfrac{a+b}{2} \\). Setting this equal to \\( 15 \\) gives the first linear equation \\( a+b=30 \\)." },
        { stepNumber: 2, description: "Write down the variance condition.", workingLatex: "\\dfrac{(b-a)^2}{12}=27 \\implies (b-a)^2=324", explanation: "The variance of \\( U(a,b) \\) is \\( \\dfrac{(b-a)^2}{12} \\). Multiplying through by \\( 12 \\) gives \\( (b-a)^2=324 \\)." },
        { stepNumber: 3, description: "Take the positive square root, using \\( a<b \\).", workingLatex: "b-a=\\sqrt{324}=18", explanation: "Since \\( a<b \\) the difference \\( b-a \\) is positive, so we take the positive root \\( b-a=18 \\)." },
        { stepNumber: 4, description: "Solve the two linear equations simultaneously.", workingLatex: "a+b=30,\\quad b-a=18 \\implies 2b=48,\\ 2a=12", explanation: "Adding the equations gives \\( 2b=48 \\); subtracting gives \\( 2a=12 \\)." },
        { stepNumber: 5, description: "State the endpoints.", workingLatex: "a=6,\\qquad b=24", explanation: "Check: mean \\( \\dfrac{6+24}{2}=15 \\) and variance \\( \\dfrac{18^2}{12}=27 \\), as required." }
      ],
      finalAnswer: "\\( a=6,\\ b=24 \\)",
      canonicalAnswer: "a=6, b=24",
    },
  },
  {
    id: "y2cu-051",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 51",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) is uniformly distributed on the interval \\( [a, b] \\). Given that \\( P(X < 6) = \\dfrac{1}{5} \\) and \\( P(X < 14) = \\dfrac{3}{5} \\), find the values of \\( a \\) and \\( b \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "endpoints", "probability", "simultaneous equations"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Express each cumulative probability as a length over the total length.", workingLatex: "P(X<6)=\\dfrac{6-a}{b-a}=\\dfrac{1}{5},\\qquad P(X<14)=\\dfrac{14-a}{b-a}=\\dfrac{3}{5}", explanation: "For \\( X\\sim U(a,b) \\), \\( P(X<k)=\\dfrac{k-a}{b-a} \\) for \\( a\\le k\\le b \\). This gives two equations sharing the denominator \\( b-a \\)." },
        { stepNumber: 2, description: "Subtract the first probability from the second to eliminate \\( a \\) in the numerator.", workingLatex: "\\dfrac{(14-a)-(6-a)}{b-a}=\\dfrac{3}{5}-\\dfrac{1}{5}\\implies\\dfrac{8}{b-a}=\\dfrac{2}{5}", explanation: "The probability of \\( 6<X<14 \\) equals \\( \\dfrac{8}{b-a} \\), and also equals \\( \\dfrac{3}{5}-\\dfrac{1}{5}=\\dfrac{2}{5} \\)." },
        { stepNumber: 3, description: "Solve for the interval length.", workingLatex: "b-a=\\dfrac{8\\times 5}{2}=20", explanation: "Cross-multiplying \\( \\dfrac{8}{b-a}=\\dfrac{2}{5} \\) gives \\( 2(b-a)=40 \\), so \\( b-a=20 \\)." },
        { stepNumber: 4, description: "Substitute the length back into the first equation to find \\( a \\).", workingLatex: "\\dfrac{6-a}{20}=\\dfrac{1}{5}\\implies 6-a=4\\implies a=2", explanation: "Using \\( b-a=20 \\) in \\( P(X<6)=\\dfrac{1}{5} \\) gives \\( 6-a=4 \\), hence \\( a=2 \\)." },
        { stepNumber: 5, description: "Find \\( b \\) and state the result.", workingLatex: "b=a+20=22\\implies a=2,\\ b=22", explanation: "Check: \\( P(X<14)=\\dfrac{14-2}{20}=\\dfrac{12}{20}=\\dfrac{3}{5} \\), as required." }
      ],
      finalAnswer: "\\( a=2,\\ b=22 \\)",
      canonicalAnswer: "a=2, b=22",
    },
  },
  {
    id: "y2cu-052",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 52",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) is uniformly distributed over the interval \\( [3, 18] \\). Find \\( P(X > 13 \\mid X > 7) \\), giving your answer as an exact fraction.",
    questionMafs: `<Mafs viewBox={{ x: [0.3, 20.7], y: [-0.012, 0.09] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[7,0],[7,0.0667],[13,0.0667],[13,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[3,0],[3,0.0667],[18,0.0667],[18,0]]} color="var(--mafs-fg-accent)" />
  <Text x={3} y={-0.0066} attach="s">3</Text>
  <Text x={18} y={-0.0066} attach="s">18</Text>
  <Text x={1.785} y={0.0667} attach="w">1/(18−3)</Text>
  <Text x={7} y={-0.0066} attach="s">7</Text>
  <Text x={13} y={-0.0066} attach="s">13</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "conditional probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the definition of conditional probability, noting that \\( \\{X>13\\}\\subset\\{X>7\\} \\).", workingLatex: "P(X>13\\mid X>7)=\\dfrac{P(X>13\\ \\cap\\ X>7)}{P(X>7)}=\\dfrac{P(X>13)}{P(X>7)}", explanation: "Every value greater than \\( 13 \\) is also greater than \\( 7 \\), so the intersection of the two events is just \\( X>13 \\)." },
        { stepNumber: 2, description: "Write each upper tail probability as a length over the total length \\( b-a=15 \\).", workingLatex: "=\\dfrac{(18-13)/15}{(18-7)/15}=\\dfrac{18-13}{18-7}", explanation: "For \\( X\\sim U(3,18) \\), \\( P(X>k)=\\dfrac{18-k}{15} \\). The common denominator \\( 15 \\) cancels, matching the standard result \\( \\dfrac{b-d}{b-c} \\)." },
        { stepNumber: 3, description: "Simplify the resulting fraction.", workingLatex: "=\\dfrac{5}{11}", explanation: "The ratio \\( \\dfrac{5}{11} \\) is already in lowest terms." }
      ],
      finalAnswer: "\\( P(X>13\\mid X>7)=\\dfrac{5}{11} \\)",
      canonicalAnswer: "5/11",
    },
  },
  {
    id: "y2cu-053",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 53",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) follows a continuous uniform distribution on \\( [a, b] \\). Given that \\( P(X > 20) = \\dfrac{1}{4} \\) and \\( P(X > 8) = \\dfrac{5}{8} \\), find the values of \\( a \\) and \\( b \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "endpoints", "probability", "simultaneous equations"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Express each upper tail probability as a length over the total length.", workingLatex: "P(X>20)=\\dfrac{b-20}{b-a}=\\dfrac{1}{4},\\qquad P(X>8)=\\dfrac{b-8}{b-a}=\\dfrac{5}{8}", explanation: "For \\( X\\sim U(a,b) \\), \\( P(X>k)=\\dfrac{b-k}{b-a} \\). This produces two equations sharing the denominator \\( b-a \\)." },
        { stepNumber: 2, description: "Subtract to eliminate \\( b \\) from the numerators.", workingLatex: "\\dfrac{(b-8)-(b-20)}{b-a}=\\dfrac{5}{8}-\\dfrac{1}{4}\\implies\\dfrac{12}{b-a}=\\dfrac{3}{8}", explanation: "The probability \\( P(8<X<20)=\\dfrac{12}{b-a} \\) equals \\( \\dfrac{5}{8}-\\dfrac{2}{8}=\\dfrac{3}{8} \\)." },
        { stepNumber: 3, description: "Solve for the interval length.", workingLatex: "3(b-a)=96\\implies b-a=32", explanation: "Cross-multiplying \\( \\dfrac{12}{b-a}=\\dfrac{3}{8} \\) gives \\( 3(b-a)=96 \\), so \\( b-a=32 \\)." },
        { stepNumber: 4, description: "Substitute back to find \\( b \\).", workingLatex: "\\dfrac{b-20}{32}=\\dfrac{1}{4}\\implies b-20=8\\implies b=28", explanation: "Using \\( b-a=32 \\) in \\( P(X>20)=\\dfrac{1}{4} \\) gives \\( b-20=8 \\), hence \\( b=28 \\)." },
        { stepNumber: 5, description: "Find \\( a \\) and state the result.", workingLatex: "a=b-32=-4\\implies a=-4,\\ b=28", explanation: "Check: \\( P(X>8)=\\dfrac{28-8}{32}=\\dfrac{20}{32}=\\dfrac{5}{8} \\), as required." }
      ],
      finalAnswer: "\\( a=-4,\\ b=28 \\)",
      canonicalAnswer: "a=-4, b=28",
    },
  },
  {
    id: "y2cu-054",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 54",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) is uniformly distributed over the interval \\( [0, 10] \\). Two independent observations of \\( X \\) are taken. Find the probability that both observations exceed \\( 7 \\).",
    questionMafs: `<Mafs viewBox={{ x: [-1.8, 11.8], y: [-0.018, 0.135] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polyline points={[[0,0],[0,0.1],[10,0.1],[10,0]]} color="var(--mafs-fg-accent)" />
  <Text x={0} y={-0.0099} attach="s">0</Text>
  <Text x={10} y={-0.0099} attach="s">10</Text>
  <Text x={-0.81} y={0.1} attach="w">1/(10−0)</Text>
  <Text x={7} y={-0.0099} attach="s">7</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "independence", "combined events", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the probability that a single observation exceeds \\( 7 \\).", workingLatex: "P(X>7)=\\dfrac{10-7}{10-0}=\\dfrac{3}{10}", explanation: "For \\( X\\sim U(0,10) \\), the upper tail probability is the length \\( 10-7 \\) over the total length \\( 10 \\)." },
        { stepNumber: 2, description: "Use independence to combine the two observations by multiplying.", workingLatex: "P(\\text{both}>7)=P(X>7)\\times P(X>7)=\\left(\\dfrac{3}{10}\\right)^2", explanation: "Because the two observations are independent, the probability that both exceed \\( 7 \\) is the product of the individual probabilities." },
        { stepNumber: 3, description: "Evaluate the product.", workingLatex: "=\\dfrac{9}{100}", explanation: "Squaring \\( \\dfrac{3}{10} \\) gives \\( \\dfrac{9}{100}=0.09 \\)." }
      ],
      finalAnswer: "\\( P(\\text{both}>7)=\\dfrac{9}{100} \\)",
      canonicalAnswer: "9/100",
    },
  },
  {
    id: "y2cu-055",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 55",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "At a bus stop, the waiting time \\( W \\) (in minutes) for the next bus is modelled by a continuous uniform distribution on \\( [0, 15] \\). Independently of the waiting time, the traffic light at the next junction is green with probability \\( 0.4 \\). Find the probability that a passenger waits less than \\( 5 \\) minutes for the bus and the next traffic light is green.",
    questionMafs: `<Mafs viewBox={{ x: [-2.7, 17.7], y: [-0.012, 0.09] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polyline points={[[0,0],[0,0.0667],[15,0.0667],[15,0]]} color="var(--mafs-fg-accent)" />
  <Text x={0} y={-0.0066} attach="s">0</Text>
  <Text x={15} y={-0.0066} attach="s">15</Text>
  <Text x={-1.215} y={0.0667} attach="w">1/(15−0)</Text>
  <Text x={5} y={-0.0066} attach="s">5</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "independence", "combined events", "modelling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the probability that the waiting time is less than \\( 5 \\) minutes.", workingLatex: "P(W<5)=\\dfrac{5-0}{15-0}=\\dfrac{5}{15}=\\dfrac{1}{3}", explanation: "For \\( W\\sim U(0,15) \\), \\( P(W<5) \\) is the length \\( 5 \\) over the total length \\( 15 \\)." },
        { stepNumber: 2, description: "Write down the probability the light is green.", workingLatex: "P(\\text{green})=0.4=\\dfrac{2}{5}", explanation: "This probability is given and is independent of the waiting time." },
        { stepNumber: 3, description: "Multiply the two independent probabilities.", workingLatex: "P(W<5\\ \\cap\\ \\text{green})=\\dfrac{1}{3}\\times\\dfrac{2}{5}", explanation: "Independence allows the joint probability to be written as the product of the separate probabilities." },
        { stepNumber: 4, description: "Evaluate the product.", workingLatex: "=\\dfrac{2}{15}", explanation: "Multiplying gives \\( \\dfrac{2}{15}\\approx 0.133 \\)." }
      ],
      finalAnswer: "\\( P(W<5\\ \\cap\\ \\text{green})=\\dfrac{2}{15} \\)",
      canonicalAnswer: "2/15",
    },
  },
  {
    id: "y2cu-056",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 56",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "When a length is recorded to the nearest centimetre, the rounding error \\( E \\) (in cm) is modelled by a continuous uniform distribution on the interval \\( [-0.5, 0.5] \\), so \\( E\\sim U(-0.5, 0.5) \\). (a) State the mean and variance of \\( E \\). (b) Find \\( P(|E| > 0.3) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.68, 0.68], y: [-0.18, 1.35] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polyline points={[[-0.5,0],[-0.5,1],[0.5,1],[0.5,0]]} color="var(--mafs-fg-accent)" />
  <Text x={-0.5} y={-0.099} attach="s">-0.5</Text>
  <Text x={0.5} y={-0.099} attach="s">0.5</Text>
  <Text x={-0.581} y={1} attach="w">1/(0.5−-0.5)</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "modelling", "rounding error", "mean", "variance", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the mean using the symmetry of the interval.", workingLatex: "E(E)=\\dfrac{-0.5+0.5}{2}=0", explanation: "The interval \\( [-0.5,0.5] \\) is symmetric about \\( 0 \\), so the mean rounding error is \\( 0 \\)." },
        { stepNumber: 2, description: "State the variance using the standard formula.", workingLatex: "\\mathrm{Var}(E)=\\dfrac{(0.5-(-0.5))^2}{12}=\\dfrac{1^2}{12}=\\dfrac{1}{12}", explanation: "With \\( b-a=1 \\), the variance is \\( \\dfrac{(b-a)^2}{12}=\\dfrac{1}{12}\\approx 0.0833\\ \\mathrm{cm^2} \\)." },
        { stepNumber: 3, description: "Interpret \\( |E|>0.3 \\) as two symmetric tails.", workingLatex: "P(|E|>0.3)=P(E<-0.3)+P(E>0.3)", explanation: "The event \\( |E|>0.3 \\) means \\( E \\) is below \\( -0.3 \\) or above \\( 0.3 \\); by symmetry these two tails are equal." },
        { stepNumber: 4, description: "Compute each tail as a length over the total length \\( 1 \\).", workingLatex: "=2\\times\\dfrac{0.5-0.3}{1}=2\\times 0.2", explanation: "Each tail has length \\( 0.5-0.3=0.2 \\); the density height is \\( \\dfrac{1}{1}=1 \\)." },
        { stepNumber: 5, description: "Evaluate the total.", workingLatex: "=0.4=\\dfrac{2}{5}", explanation: "The probability that the rounding error exceeds \\( 0.3 \\) cm in magnitude is \\( \\dfrac{2}{5} \\)." }
      ],
      finalAnswer: "\\( E(E)=0,\\ \\mathrm{Var}(E)=\\dfrac{1}{12},\\ P(|E|>0.3)=\\dfrac{2}{5} \\)",
    },
  },
  {
    id: "y2cu-057",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 57",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) has a continuous uniform distribution on \\( [a, b] \\) with mean \\( \\mu=\\dfrac{a+b}{2} \\). Using \\( \\mathrm{Var}(X)=\\displaystyle\\int_a^b \\dfrac{(x-\\mu)^2}{b-a}\\,dx \\), show that \\( \\mathrm{Var}(X)=\\dfrac{(b-a)^2}{12} \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "variance", "integration", "proof", "show that"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the variance integral with the constant density factored out.", workingLatex: "\\mathrm{Var}(X)=\\int_a^b \\dfrac{(x-\\mu)^2}{b-a}\\,dx=\\dfrac{1}{b-a}\\int_a^b (x-\\mu)^2\\,dx", explanation: "The density \\( \\dfrac{1}{b-a} \\) is constant, so it can be taken outside the integral." },
        { stepNumber: 2, description: "Integrate \\( (x-\\mu)^2 \\) using the substitution implicit in the power rule.", workingLatex: "\\int_a^b (x-\\mu)^2\\,dx=\\left[\\dfrac{(x-\\mu)^3}{3}\\right]_a^b", explanation: "Since \\( \\mu \\) is constant, \\( \\dfrac{d}{dx}\\dfrac{(x-\\mu)^3}{3}=(x-\\mu)^2 \\)." },
        { stepNumber: 3, description: "Substitute \\( \\mu=\\dfrac{a+b}{2} \\) into the limits.", workingLatex: "b-\\mu=b-\\dfrac{a+b}{2}=\\dfrac{b-a}{2},\\qquad a-\\mu=a-\\dfrac{a+b}{2}=-\\dfrac{b-a}{2}", explanation: "The midpoint \\( \\mu \\) sits exactly halfway between \\( a \\) and \\( b \\), so each endpoint is a distance \\( \\dfrac{b-a}{2} \\) from it." },
        { stepNumber: 4, description: "Evaluate the bracket at the two limits.", workingLatex: "\\left[\\dfrac{(x-\\mu)^3}{3}\\right]_a^b=\\dfrac{1}{3}\\left[\\left(\\dfrac{b-a}{2}\\right)^3-\\left(-\\dfrac{b-a}{2}\\right)^3\\right]", explanation: "Substituting the upper and lower limits found above into the cubed expression." },
        { stepNumber: 5, description: "Simplify the difference of cubes.", workingLatex: "=\\dfrac{1}{3}\\cdot 2\\left(\\dfrac{b-a}{2}\\right)^3=\\dfrac{2}{3}\\cdot\\dfrac{(b-a)^3}{8}=\\dfrac{(b-a)^3}{12}", explanation: "Because the cube is an odd power, \\( -\\left(-\\dfrac{b-a}{2}\\right)^3=+\\left(\\dfrac{b-a}{2}\\right)^3 \\), so the two terms add." },
        { stepNumber: 6, description: "Divide by \\( b-a \\) to finish.", workingLatex: "\\mathrm{Var}(X)=\\dfrac{1}{b-a}\\cdot\\dfrac{(b-a)^3}{12}=\\dfrac{(b-a)^2}{12}", explanation: "Cancelling one factor of \\( b-a \\) gives the required result \\( \\dfrac{(b-a)^2}{12} \\)." }
      ],
      finalAnswer: "\\( \\mathrm{Var}(X)=\\dfrac{(b-a)^2}{12} \\)",
    },
  },
  {
    id: "y2cu-058",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 58",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) is uniformly distributed on \\( [2, 14] \\). A second random variable \\( Y \\) is Normally distributed with the same mean and the same variance as \\( X \\). (a) Find the common mean and variance. (b) Find \\( P(|X-\\mu|<\\sigma) \\) for the uniform variable, giving an exact value. (c) State the corresponding probability \\( P(|Y-\\mu|<\\sigma)\\approx 0.683 \\) for the Normal variable, and comment on how the two distributions compare.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "normal distribution", "comparison", "mean", "variance"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the common mean.", workingLatex: "\\mu=\\dfrac{2+14}{2}=8", explanation: "For \\( X\\sim U(2,14) \\) the mean is the midpoint of the interval, \\( \\mu=8 \\)." },
        { stepNumber: 2, description: "Find the common variance and standard deviation.", workingLatex: "\\mathrm{Var}(X)=\\dfrac{(14-2)^2}{12}=\\dfrac{144}{12}=12,\\qquad \\sigma=\\sqrt{12}=2\\sqrt{3}", explanation: "The variance is \\( \\dfrac{(b-a)^2}{12}=12 \\), so \\( \\sigma=2\\sqrt{3}\\approx 3.46 \\)." },
        { stepNumber: 3, description: "For the uniform variable, write \\( P(|X-\\mu|<\\sigma) \\) as a length over the total length.", workingLatex: "P(|X-8|<2\\sqrt{3})=P(8-2\\sqrt{3}<X<8+2\\sqrt{3})=\\dfrac{2\\sigma}{b-a}=\\dfrac{2\\cdot 2\\sqrt{3}}{12}", explanation: "The interval \\( (\\mu-\\sigma,\\mu+\\sigma) \\) has length \\( 2\\sigma \\) and lies inside \\( [2,14] \\); the density height is \\( \\dfrac{1}{12} \\)." },
        { stepNumber: 4, description: "Simplify the exact uniform probability.", workingLatex: "=\\dfrac{4\\sqrt{3}}{12}=\\dfrac{\\sqrt{3}}{3}\\approx 0.577", explanation: "So for the uniform distribution, the probability of lying within one standard deviation of the mean is \\( \\dfrac{\\sqrt{3}}{3} \\)." },
        { stepNumber: 5, description: "Compare with the Normal result and comment.", workingLatex: "P(|Y-\\mu|<\\sigma)\\approx 0.683 \\;>\\; \\dfrac{\\sqrt{3}}{3}\\approx 0.577", explanation: "Although both distributions share the same mean and variance, the Normal places about \\( 68.3\\% \\) of its probability within one standard deviation, more than the \\( 57.7\\% \\) of the uniform. The uniform is flat with finite range and no central peak, so its probability is spread more evenly and less concentrated near the mean than the bell-shaped Normal." }
      ],
      finalAnswer: "\\( \\mu=8,\\ \\sigma^2=12,\\ P(|X-\\mu|<\\sigma)=\\dfrac{\\sqrt{3}}{3}\\approx 0.577<0.683 \\)",
    },
  },
  {
    id: "y2cu-059",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 59",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) is uniformly distributed on the interval \\( [a, b] \\). Given that \\( E(X) = 12 \\) and \\( P(X < 9) = \\dfrac{1}{4} \\), find the values of \\( a \\) and \\( b \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "mean", "endpoints", "probability", "simultaneous equations"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Use the mean to relate \\( a \\) and \\( b \\).", workingLatex: "\\dfrac{a+b}{2}=12\\implies a+b=24", explanation: "For \\( X\\sim U(a,b) \\) the mean is \\( \\dfrac{a+b}{2} \\); equating to \\( 12 \\) gives \\( a+b=24 \\)." },
        { stepNumber: 2, description: "Write the cumulative probability condition.", workingLatex: "P(X<9)=\\dfrac{9-a}{b-a}=\\dfrac{1}{4}", explanation: "The probability \\( P(X<9) \\) is the length \\( 9-a \\) over the total length \\( b-a \\)." },
        { stepNumber: 3, description: "Substitute \\( b=24-a \\) so the length is in terms of \\( a \\) only.", workingLatex: "b-a=(24-a)-a=24-2a\\implies \\dfrac{9-a}{24-2a}=\\dfrac{1}{4}", explanation: "Replacing \\( b \\) using \\( a+b=24 \\) gives a single equation in \\( a \\)." },
        { stepNumber: 4, description: "Cross-multiply and solve for \\( a \\).", workingLatex: "4(9-a)=24-2a\\implies 36-4a=24-2a\\implies 12=2a\\implies a=6", explanation: "Expanding and collecting terms gives \\( 2a=12 \\), so \\( a=6 \\)." },
        { stepNumber: 5, description: "Find \\( b \\) and state the result.", workingLatex: "b=24-a=18\\implies a=6,\\ b=18", explanation: "Check: \\( P(X<9)=\\dfrac{9-6}{18-6}=\\dfrac{3}{12}=\\dfrac{1}{4} \\), as required." }
      ],
      finalAnswer: "\\( a=6,\\ b=18 \\)",
      canonicalAnswer: "a=6, b=18",
    },
  },
  {
    id: "y2cu-060",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 60",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) follows a continuous uniform distribution on \\( [a, b] \\). Given that \\( P(X > 10) = \\dfrac{3}{5} \\) and \\( P(X < 4) = \\dfrac{1}{5} \\), find the values of \\( a \\) and \\( b \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "endpoints", "probability", "simultaneous equations"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write each probability as a length over the total length.", workingLatex: "P(X>10)=\\dfrac{b-10}{b-a}=\\dfrac{3}{5},\\qquad P(X<4)=\\dfrac{4-a}{b-a}=\\dfrac{1}{5}", explanation: "For \\( X\\sim U(a,b) \\), \\( P(X>10)=\\dfrac{b-10}{b-a} \\) and \\( P(X<4)=\\dfrac{4-a}{b-a} \\)." },
        { stepNumber: 2, description: "Use the middle region to find the total length.", workingLatex: "P(4<X<10)=1-\\dfrac{3}{5}-\\dfrac{1}{5}=\\dfrac{1}{5},\\qquad P(4<X<10)=\\dfrac{10-4}{b-a}=\\dfrac{6}{b-a}", explanation: "The three regions \\( X<4 \\), \\( 4<X<10 \\) and \\( X>10 \\) have probabilities summing to \\( 1 \\), so the middle region has probability \\( \\dfrac{1}{5} \\)." },
        { stepNumber: 3, description: "Solve for the interval length.", workingLatex: "\\dfrac{6}{b-a}=\\dfrac{1}{5}\\implies b-a=30", explanation: "Cross-multiplying gives \\( b-a=30 \\)." },
        { stepNumber: 4, description: "Find \\( a \\) from the lower tail probability.", workingLatex: "\\dfrac{4-a}{30}=\\dfrac{1}{5}\\implies 4-a=6\\implies a=-2", explanation: "Using \\( b-a=30 \\) in \\( P(X<4)=\\dfrac{1}{5} \\) gives \\( 4-a=6 \\), hence \\( a=-2 \\)." },
        { stepNumber: 5, description: "Find \\( b \\) and state the result.", workingLatex: "b=a+30=28\\implies a=-2,\\ b=28", explanation: "Check: \\( P(X>10)=\\dfrac{28-10}{30}=\\dfrac{18}{30}=\\dfrac{3}{5} \\), as required." }
      ],
      finalAnswer: "\\( a=-2,\\ b=28 \\)",
      canonicalAnswer: "a=-2, b=28",
    },
  },
  {
    id: "y2cu-061",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 61",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A length is recorded by rounding the true measurement to the nearest centimetre. The rounding error \\( E \\) (recorded value minus true value) may be modelled by \\( E \\sim U(-0.5, 0.5) \\). (a) Write down \\( E(E) \\) and find \\( \\mathrm{Var}(E) \\). (b) Find \\( P(|E| > 0.3) \\). (c) State one reason why this continuous uniform model for the rounding error is reasonable.",
    questionMafs: `<Mafs viewBox={{ x: [-0.68, 0.68], y: [-0.18, 1.35] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[-0.3,0],[-0.3,1],[0.3,1],[0.3,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[-0.5,0],[-0.5,1],[0.5,1],[0.5,0]]} color="var(--mafs-fg-accent)" />
  <Text x={-0.5} y={-0.099} attach="s">-0.5</Text>
  <Text x={0.5} y={-0.099} attach="s">0.5</Text>
  <Text x={-0.581} y={1} attach="w">1/(0.5−-0.5)</Text>
  <Text x={-0.3} y={-0.099} attach="s">-0.3</Text>
  <Text x={0.3} y={-0.099} attach="s">0.3</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "rounding error", "expectation", "variance", "modelling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the expectation using the symmetry of the interval about \\( 0 \\).", workingLatex: "E(E) = \\frac{a+b}{2} = \\frac{-0.5 + 0.5}{2} = 0", explanation: "For \\( E\\sim U(a,b) \\) the mean is the midpoint \\( \\tfrac{a+b}{2} \\); here the interval is symmetric about \\( 0 \\), so \\( E(E)=0 \\)." },
        { stepNumber: 2, description: "Find the variance using \\( \\mathrm{Var}(E)=\\dfrac{(b-a)^2}{12} \\).", workingLatex: "\\mathrm{Var}(E) = \\frac{(0.5-(-0.5))^2}{12} = \\frac{1^2}{12} = \\frac{1}{12}", explanation: "The width of the interval is \\( b-a=1 \\), so the variance is \\( \\tfrac{1}{12}\\approx 0.0833 \\)." },
        { stepNumber: 3, description: "Write \\( P(|E|>0.3) \\) using the complement of the central region.", workingLatex: "P(|E| > 0.3) = 1 - P(-0.3 < E < 0.3)", explanation: "The event \\( |E|>0.3 \\) is everything outside the band \\( (-0.3,0.3) \\), so use the complement." },
        { stepNumber: 4, description: "Evaluate the central probability from the rectangle of height \\( \\tfrac{1}{b-a}=1 \\).", workingLatex: "P(-0.3 < E < 0.3) = \\frac{0.3-(-0.3)}{1} = 0.6", explanation: "On \\( U(-0.5,0.5) \\) the density is \\( 1 \\), so the probability of an interval is just its length: \\( 0.6 \\)." },
        { stepNumber: 5, description: "Combine to obtain \\( P(|E|>0.3) \\), then give a modelling reason.", workingLatex: "P(|E| > 0.3) = 1 - 0.6 = 0.4", explanation: "Hence \\( P(|E|>0.3)=0.4 \\). For (c): rounding to the nearest unit means the true value is equally likely to lie anywhere within half a unit of the recorded value, so a flat (uniform) density on \\( (-0.5,0.5) \\) is a natural model — no error magnitude in that range is favoured over another." }
      ],
      finalAnswer: "\\( E(E)=0,\\ \\mathrm{Var}(E)=\\dfrac{1}{12},\\ P(|E|>0.3)=0.4 \\)",
      canonicalAnswer: "E(E)=0, Var=1/12, P(|E|>0.3)=0.4",
    },
  },
  {
    id: "y2cu-062",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 62",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A commuter claims that a bus is equally likely to arrive at any time during the ten-minute window between 08:00 and 08:10, and so models the arrival time \\( T \\) (minutes after 08:00) by \\( T \\sim U(0, 10) \\). The buses are in fact timetabled to arrive at 08:05 but are occasionally a few minutes early or late. Critically assess whether the continuous uniform distribution is a reasonable model here, referring to at least two specific features of the situation.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "modelling", "critique", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall what a continuous uniform model assumes about the arrival time.", workingLatex: "T \\sim U(0,10) \\implies \\text{constant density on } (0,10)", explanation: "A \\( U(0,10) \\) model says every instant in the ten-minute window is equally likely to be the arrival time, with no clustering anywhere." },
        { stepNumber: 2, description: "Compare this with the stated behaviour around the timetable.", workingLatex: "\\text{timetabled at } 08{:}05,\\ \\text{usually close to } 08{:}05", explanation: "Because buses are scheduled for 08:05 and only occasionally a few minutes off, arrivals will cluster near the centre of the window rather than spread out evenly. The uniform model wrongly gives the same density at 08:00 and 08:09 as at 08:05." },
        { stepNumber: 3, description: "Consider the edges of the interval.", workingLatex: "P(T<0.5)=0.05 \\text{ under } U(0,10)", explanation: "The uniform model assigns appreciable probability to arrivals right at the very start (08:00) and very end (08:10) of the window. In reality an early or late bus would rarely be a full five minutes from the timetable, so the edge probabilities are overstated." },
        { stepNumber: 4, description: "Give a reasoned judgement and a better-suited alternative.", workingLatex: "\\text{symmetric, single-peaked spread} \\Rightarrow \\text{Normal-type model}", explanation: "Overall the uniform model is not reasonable: the data are clustered and single-peaked about 08:05, not flat. A distribution peaked at the timetable time, such as a Normal model centred on 08:05, would capture the clustering and the rarity of extreme earliness/lateness far better." }
      ],
      finalAnswer: "\\( \\text{Not reasonable: arrivals cluster about 08:05, so a single-peaked (e.g. Normal) model is more appropriate than } U(0,10). \\)",
    },
  },
  {
    id: "y2cu-063",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 63",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "For each of the following random variables, state which standard distribution — continuous uniform, binomial, Poisson, or Normal — would be the most appropriate model, and justify each choice. (i) \\( A \\): the exact position, measured along a 2 m shelf, at which a randomly dropped marble first comes to rest, assuming no part of the shelf is favoured. (ii) \\( B \\): the number of the next 20 emails received that are spam, where each email is independently spam with probability 0.3. (iii) \\( C \\): the number of customers entering a small shop in a fixed five-minute period, occurring singly and at a constant average rate. (iv) \\( D \\): the heights of adult males in a large population.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "distribution selection", "modelling", "critique"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Model \\( A \\): a position equally likely anywhere on a fixed interval.", workingLatex: "A \\sim U(0,2)", explanation: "\\( A \\) is a continuous quantity that can take any value on \\( [0,2] \\), and no point is favoured, so a continuous uniform distribution \\( U(0,2) \\) is appropriate." },
        { stepNumber: 2, description: "Model \\( B \\): a fixed number of independent success/failure trials.", workingLatex: "B \\sim B(20, 0.3)", explanation: "There is a fixed number of trials \\( n=20 \\), each independent with the same success probability \\( p=0.3 \\), and we count successes, so a binomial distribution is appropriate." },
        { stepNumber: 3, description: "Model \\( C \\): counts of events at a constant rate in a fixed interval.", workingLatex: "C \\sim \\mathrm{Po}(\\lambda)", explanation: "Customers arrive singly, independently and at a constant average rate over a fixed time interval with no fixed upper limit, which are exactly the conditions for a Poisson model." },
        { stepNumber: 4, description: "Model \\( D \\): a continuous measurement clustered symmetrically about a mean.", workingLatex: "D \\sim N(\\mu, \\sigma^2)", explanation: "Adult male heights form a continuous quantity that is symmetric and single-peaked about a mean value, with most heights near the mean and few at the extremes, which is well described by a Normal distribution." },
        { stepNumber: 5, description: "Summarise the four choices with their distinguishing features.", workingLatex: "A:U,\\quad B:\\text{Binomial},\\quad C:\\text{Poisson},\\quad D:\\text{Normal}", explanation: "The key discriminators are: continuous-and-flat \\( \\Rightarrow \\) uniform; fixed \\( n \\) independent trials \\( \\Rightarrow \\) binomial; events at a constant rate in time \\( \\Rightarrow \\) Poisson; continuous and bell-shaped \\( \\Rightarrow \\) Normal." }
      ],
      finalAnswer: "\\( A\\sim U(0,2),\\ B\\sim B(20,0.3),\\ C\\sim \\mathrm{Po}(\\lambda),\\ D\\sim N(\\mu,\\sigma^2) \\)",
    },
  },
  {
    id: "y2cu-064",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 64",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) is uniformly distributed over the interval \\( [3, 15] \\). (a) Find \\( E(X) \\) and \\( \\mathrm{Var}(X) \\). (b) Find \\( P(X > 10) \\). (c) Find the value of \\( k \\) for which \\( P(X > k) = \\tfrac{1}{4} \\). (d) Find \\( P\\big(E(X) - 2 < X < E(X) + 2\\big) \\).",
    questionMafs: `<Mafs viewBox={{ x: [0.84, 17.16], y: [-0.015, 0.1125] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[7,0],[7,0.0833],[11,0.0833],[11,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[3,0],[3,0.0833],[15,0.0833],[15,0]]} color="var(--mafs-fg-accent)" />
  <Text x={3} y={-0.0082} attach="s">3</Text>
  <Text x={15} y={-0.0082} attach="s">15</Text>
  <Text x={2.028} y={0.0833} attach="w">1/(15−3)</Text>
  <Text x={7} y={-0.0082} attach="s">7</Text>
  <Text x={11} y={-0.0082} attach="s">11</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "expectation", "variance", "probability", "multi-step"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the mean and variance from \\( a=3 \\), \\( b=15 \\).", workingLatex: "E(X) = \\frac{3+15}{2} = 9, \\qquad \\mathrm{Var}(X) = \\frac{(15-3)^2}{12} = \\frac{144}{12} = 12", explanation: "Use \\( E(X)=\\tfrac{a+b}{2} \\) and \\( \\mathrm{Var}(X)=\\tfrac{(b-a)^2}{12} \\); the interval width is \\( 12 \\)." },
        { stepNumber: 2, description: "Find \\( P(X>10) \\) from the rectangle of height \\( \\tfrac{1}{b-a}=\\tfrac{1}{12} \\).", workingLatex: "P(X > 10) = \\frac{15-10}{15-3} = \\frac{5}{12}", explanation: "The probability of an interval is its length divided by the total width \\( 12 \\)." },
        { stepNumber: 3, description: "Set up the equation for \\( k \\) using \\( P(X>k) \\).", workingLatex: "P(X > k) = \\frac{15-k}{12} = \\frac{1}{4}", explanation: "Equate the upper-tail probability to \\( \\tfrac14 \\)." },
        { stepNumber: 4, description: "Solve for \\( k \\).", workingLatex: "15 - k = \\frac{12}{4} = 3 \\implies k = 12", explanation: "Multiply up and rearrange: \\( k=12 \\), which lies inside \\( [3,15] \\) as required." },
        { stepNumber: 5, description: "Use \\( E(X)=9 \\) to set up the final interval probability.", workingLatex: "P(9-2 < X < 9+2) = P(7 < X < 11)", explanation: "Substitute \\( E(X)=9 \\) so the required interval is \\( (7,11) \\)." },
        { stepNumber: 6, description: "Evaluate the interval probability.", workingLatex: "P(7 < X < 11) = \\frac{11-7}{12} = \\frac{4}{12} = \\frac{1}{3}", explanation: "The interval has length \\( 4 \\), so the probability is \\( \\tfrac{4}{12}=\\tfrac13 \\)." }
      ],
      finalAnswer: "\\( E(X)=9,\\ \\mathrm{Var}(X)=12,\\ P(X>10)=\\dfrac{5}{12},\\ k=12,\\ P(7<X<11)=\\dfrac{1}{3} \\)",
      canonicalAnswer: "E(X)=9, Var(X)=12, P(X>10)=5/12, k=12, P(7<X<11)=1/3",
    },
  },
  {
    id: "y2cu-065",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 65",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The waiting time \\( X \\), in minutes, at a pedestrian crossing is modelled by \\( X \\sim U(0, 20) \\). (a) Find \\( P(X < 6 \\mid X < 14) \\). (b) Two people use the crossing on independent occasions, their waiting times each modelled by independent \\( U(0,20) \\) variables. Find the probability that both wait longer than 12 minutes.",
    questionMafs: `<Mafs viewBox={{ x: [-3.6, 23.6], y: [-0.009, 0.0675] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polyline points={[[0,0],[0,0.05],[20,0.05],[20,0]]} color="var(--mafs-fg-accent)" />
  <Text x={0} y={-0.005} attach="s">0</Text>
  <Text x={20} y={-0.005} attach="s">20</Text>
  <Text x={-1.62} y={0.05} attach="w">1/(20−0)</Text>
  <Text x={6} y={-0.005} attach="s">6</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "conditional probability", "combined", "multi-step"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the conditional probability using its definition.", workingLatex: "P(X<6 \\mid X<14) = \\frac{P(X<6 \\ \\cap\\ X<14)}{P(X<14)}", explanation: "By definition of conditional probability. Since \\( \\{X<6\\}\\subset\\{X<14\\} \\), the intersection is just \\( \\{X<6\\} \\)." },
        { stepNumber: 2, description: "Evaluate the two probabilities from the \\( U(0,20) \\) density.", workingLatex: "P(X<6) = \\frac{6}{20}, \\qquad P(X<14) = \\frac{14}{20}", explanation: "On \\( U(0,20) \\) each probability is the interval length divided by \\( 20 \\)." },
        { stepNumber: 3, description: "Combine to obtain the conditional probability.", workingLatex: "P(X<6 \\mid X<14) = \\frac{6/20}{14/20} = \\frac{6}{14} = \\frac{3}{7}", explanation: "The \\( \\tfrac{1}{20} \\) factors cancel, leaving \\( \\tfrac{6}{14}=\\tfrac37 \\)." },
        { stepNumber: 4, description: "Find the single-occasion probability of waiting more than 12 minutes.", workingLatex: "P(X > 12) = \\frac{20-12}{20} = \\frac{8}{20} = \\frac{2}{5}", explanation: "The upper interval \\( (12,20) \\) has length \\( 8 \\), so \\( P(X>12)=\\tfrac{8}{20}=\\tfrac25 \\)." },
        { stepNumber: 5, description: "Use independence for both people.", workingLatex: "P(\\text{both} > 12) = \\left(\\frac{2}{5}\\right)^2 = \\frac{4}{25} = 0.16", explanation: "Because the two waiting times are independent, multiply the probabilities: \\( \\tfrac{2}{5}\\times\\tfrac{2}{5}=\\tfrac{4}{25} \\)." }
      ],
      finalAnswer: "\\( P(X<6\\mid X<14)=\\dfrac{3}{7},\\quad P(\\text{both}>12)=\\dfrac{4}{25}=0.16 \\)",
      canonicalAnswer: "P(X<6|X<14)=3/7, both>12=4/25=0.16",
    },
  },
  {
    id: "y2cu-066",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 66",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Two quantities are each measured and recorded by rounding to the nearest whole unit. The two rounding errors \\( E_1 \\) and \\( E_2 \\) (recorded minus true) are modelled as independent, each with \\( E_i \\sim U(-0.5, 0.5) \\). The recorded total is \\( T = E_1 + E_2 \\) more than the true total. (a) Write down \\( E(T) \\) and find \\( \\mathrm{Var}(T) \\). (b) Find the probability that both individual errors have magnitude less than \\( 0.25 \\). (c) Explain why the assumption of independence is needed for your variance in part (a), and give one situation in which it might fail.",
    questionMafs: `<Mafs viewBox={{ x: [-0.68, 0.68], y: [-0.18, 1.35] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[-0.25,0],[-0.25,1],[0.25,1],[0.25,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[-0.5,0],[-0.5,1],[0.5,1],[0.5,0]]} color="var(--mafs-fg-accent)" />
  <Text x={-0.5} y={-0.099} attach="s">-0.5</Text>
  <Text x={0.5} y={-0.099} attach="s">0.5</Text>
  <Text x={-0.581} y={1} attach="w">1/(0.5−-0.5)</Text>
  <Text x={-0.25} y={-0.099} attach="s">-0.25</Text>
  <Text x={0.25} y={-0.099} attach="s">0.25</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "rounding error", "variance", "combined", "modelling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the mean of \\( T \\) using linearity.", workingLatex: "E(T) = E(E_1) + E(E_2) = 0 + 0 = 0", explanation: "Each error has mean \\( 0 \\) (symmetric interval), and expectation is additive, so \\( E(T)=0 \\)." },
        { stepNumber: 2, description: "Find the variance of each individual error.", workingLatex: "\\mathrm{Var}(E_i) = \\frac{(0.5-(-0.5))^2}{12} = \\frac{1}{12}", explanation: "Each error is \\( U(-0.5,0.5) \\) with interval width \\( 1 \\), giving variance \\( \\tfrac{1}{12} \\)." },
        { stepNumber: 3, description: "Combine variances using independence.", workingLatex: "\\mathrm{Var}(T) = \\mathrm{Var}(E_1) + \\mathrm{Var}(E_2) = \\frac{1}{12} + \\frac{1}{12} = \\frac{1}{6}", explanation: "For independent variables the variance of a sum is the sum of the variances, so \\( \\mathrm{Var}(T)=\\tfrac16\\approx 0.167 \\)." },
        { stepNumber: 4, description: "Find the probability one error has magnitude below \\( 0.25 \\).", workingLatex: "P(|E_i| < 0.25) = \\frac{0.25-(-0.25)}{1} = \\frac{1}{2}", explanation: "On \\( U(-0.5,0.5) \\) the density is \\( 1 \\), so \\( P(|E_i|<0.25) \\) equals the interval length \\( 0.5 \\)." },
        { stepNumber: 5, description: "Use independence for both errors.", workingLatex: "P(|E_1|<0.25 \\ \\cap\\ |E_2|<0.25) = \\frac{1}{2}\\times\\frac{1}{2} = \\frac{1}{4}", explanation: "By independence multiply the two probabilities to get \\( \\tfrac14 \\)." },
        { stepNumber: 6, description: "Explain the role of independence and when it could fail.", workingLatex: "\\mathrm{Var}(E_1+E_2) = \\mathrm{Var}(E_1)+\\mathrm{Var}(E_2) \\text{ only if independent}", explanation: "The formula adds the variances only when the errors are independent (no covariance term). Independence could fail if, for example, both measurements come from the same mis-calibrated instrument that always rounds the same way, so the two errors would be linked rather than independent." }
      ],
      finalAnswer: "\\( E(T)=0,\\ \\mathrm{Var}(T)=\\dfrac{1}{6},\\ P(|E_1|<0.25\\cap|E_2|<0.25)=\\dfrac{1}{4} \\)",
      canonicalAnswer: "E(T)=0, Var(T)=1/6, P(both |E|<0.25)=1/4",
    },
  },
  {
    id: "y2cu-067",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 67",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A researcher models the time \\( X \\), in minutes, that each of 200 visitors spends at an exhibit by \\( X \\sim U(0, 30) \\), and assumes the 200 times are independent. Discuss two reasons why the independence assumption, and one reason why the uniform shape, might be questionable for this situation.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "modelling", "critique", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify what independence requires here.", workingLatex: "X_i \\perp X_j \\text{ for all visitors } i \\neq j", explanation: "Independence means one visitor's time gives no information about another's; the assumption is that the 200 visits do not influence one another." },
        { stepNumber: 2, description: "Give a first reason independence may fail.", workingLatex: "\\text{crowding / queuing effects}", explanation: "If the exhibit becomes crowded, visitors may be hurried along, so when one person stays a long time others nearby are pushed to stay shorter times — the times are linked, not independent." },
        { stepNumber: 3, description: "Give a second reason independence may fail.", workingLatex: "\\text{groups arriving together}", explanation: "Visitors who arrive together (families, school parties) tend to enter and leave together, so their times are positively correlated rather than independent." },
        { stepNumber: 4, description: "Question the uniform shape and conclude.", workingLatex: "U(0,30): \\text{equal density at } 0 \\text{ and } 30 \\text{ minutes}", explanation: "A uniform model says a visit of nearly 0 minutes is just as likely as one of 15 minutes, but in practice times are likely to cluster at a typical viewing duration and very short or very long stays are rarer, so the flat shape is questionable. Overall, both independence and the uniform shape are doubtful, and the model should be used with caution." }
      ],
      finalAnswer: "\\( \\text{Independence is doubtful (crowding, group arrivals) and the flat shape is unrealistic, so the model is questionable.} \\)",
    },
  },
  {
    id: "y2cu-068",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 68",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A spinner has a continuous scale and, when spun, the pointer is equally likely to stop at any angle. The angle \\( \\Theta \\), measured in degrees clockwise from the top, is recorded. (a) Name the distribution that best models \\( \\Theta \\), giving its parameters, and justify your choice over a binomial, Poisson or Normal model. (b) Find \\( P(\\Theta > 300) \\). (c) Find \\( P(90 < \\Theta < 270 \\mid \\Theta > 90) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-64.8, 424.8], y: [-0.0005, 0.0038] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[300,0],[300,0.0028],[360,0.0028],[360,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[0,0],[0,0.0028],[360,0.0028],[360,0]]} color="var(--mafs-fg-accent)" />
  <Text x={0} y={-0.0003} attach="s">0</Text>
  <Text x={360} y={-0.0003} attach="s">360</Text>
  <Text x={-29.16} y={0.0028} attach="w">1/(360−0)</Text>
  <Text x={300} y={-0.0003} attach="s">300</Text>
  <Text x={360} y={-0.0003} attach="s">360</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "distribution selection", "probability", "modelling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Select the distribution and justify it.", workingLatex: "\\Theta \\sim U(0, 360)", explanation: "The angle is continuous and every value in \\( [0,360) \\) is equally likely, which is exactly a continuous uniform model. A binomial or Poisson model is inappropriate because they are for counts (discrete), and a Normal model is wrong because the density is flat, not bell-shaped and peaked at a mean." },
        { stepNumber: 2, description: "Find \\( P(\\Theta > 300) \\).", workingLatex: "P(\\Theta > 300) = \\frac{360-300}{360} = \\frac{60}{360} = \\frac{1}{6}", explanation: "The interval \\( (300,360) \\) has length \\( 60 \\) out of a total \\( 360 \\), so the probability is \\( \\tfrac16 \\)." },
        { stepNumber: 3, description: "Set up the conditional probability.", workingLatex: "P(90<\\Theta<270 \\mid \\Theta>90) = \\frac{P(90<\\Theta<270)}{P(\\Theta>90)}", explanation: "The event \\( \\{90<\\Theta<270\\} \\) lies inside \\( \\{\\Theta>90\\} \\), so the intersection is just \\( \\{90<\\Theta<270\\} \\)." },
        { stepNumber: 4, description: "Evaluate the two probabilities.", workingLatex: "P(90<\\Theta<270) = \\frac{180}{360} = \\frac{1}{2}, \\qquad P(\\Theta>90) = \\frac{270}{360} = \\frac{3}{4}", explanation: "Each is an interval length divided by \\( 360 \\)." },
        { stepNumber: 5, description: "Combine to obtain the conditional probability.", workingLatex: "P(90<\\Theta<270 \\mid \\Theta>90) = \\frac{1/2}{3/4} = \\frac{2}{3}", explanation: "Dividing the two probabilities gives \\( \\tfrac{1/2}{3/4}=\\tfrac23 \\)." }
      ],
      finalAnswer: "\\( \\Theta\\sim U(0,360),\\ P(\\Theta>300)=\\dfrac{1}{6},\\ P(90<\\Theta<270\\mid\\Theta>90)=\\dfrac{2}{3} \\)",
      canonicalAnswer: "Theta~U(0,360), P(Theta>300)=1/6, conditional=2/3",
    },
  },
  {
    id: "y2cu-069",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 69",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The continuous random variable \\( X \\) has a uniform distribution on \\( [a, b] \\), where \\( a < b \\). It is given that \\( E(X) = 10 \\) and \\( \\mathrm{Var}(X) = 3 \\). (a) Find the values of \\( a \\) and \\( b \\). (b) Find \\( P(X < 9) \\). (c) Find \\( P(X > 12 \\mid X > 9) \\).",
    questionMafs: `<Mafs viewBox={{ x: [5.92, 14.08], y: [-0.03, 0.225] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[9,0],[9,0.1667],[13,0.1667],[13,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[7,0],[7,0.1667],[13,0.1667],[13,0]]} color="var(--mafs-fg-accent)" />
  <Text x={7} y={-0.0165} attach="s">7</Text>
  <Text x={13} y={-0.0165} attach="s">13</Text>
  <Text x={6.514} y={0.1667} attach="w">1/(13−7)</Text>
  <Text x={9} y={-0.0165} attach="s">9</Text>
  <Text x={13} y={-0.0165} attach="s">13</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "find parameters", "conditional probability", "multi-step"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Use the variance to find the interval width.", workingLatex: "\\frac{(b-a)^2}{12} = 3 \\implies (b-a)^2 = 36 \\implies b-a = 6", explanation: "From \\( \\mathrm{Var}(X)=\\tfrac{(b-a)^2}{12} \\); taking the positive root since \\( b>a \\) gives width \\( 6 \\)." },
        { stepNumber: 2, description: "Use the mean to find the sum of the endpoints.", workingLatex: "\\frac{a+b}{2} = 10 \\implies a+b = 20", explanation: "From \\( E(X)=\\tfrac{a+b}{2} \\) the endpoints sum to \\( 20 \\)." },
        { stepNumber: 3, description: "Solve the simultaneous equations.", workingLatex: "b-a = 6,\\ a+b = 20 \\implies b = 13,\\ a = 7", explanation: "Adding the equations gives \\( 2b=26 \\), so \\( b=13 \\) and \\( a=7 \\). Hence \\( X\\sim U(7,13) \\)." },
        { stepNumber: 4, description: "Find \\( P(X<9) \\).", workingLatex: "P(X < 9) = \\frac{9-7}{13-7} = \\frac{2}{6} = \\frac{1}{3}", explanation: "The interval \\( (7,9) \\) has length \\( 2 \\) out of the total width \\( 6 \\)." },
        { stepNumber: 5, description: "Set up the conditional probability.", workingLatex: "P(X>12 \\mid X>9) = \\frac{P(X>12)}{P(X>9)}", explanation: "Since \\( \\{X>12\\}\\subset\\{X>9\\} \\), the intersection is just \\( \\{X>12\\} \\)." },
        { stepNumber: 6, description: "Evaluate and combine.", workingLatex: "P(X>12) = \\frac{1}{6},\\ P(X>9) = \\frac{4}{6} \\implies P(X>12\\mid X>9) = \\frac{1/6}{4/6} = \\frac{1}{4}", explanation: "The upper intervals have lengths \\( 1 \\) and \\( 4 \\); dividing gives the conditional probability \\( \\tfrac14 \\)." }
      ],
      finalAnswer: "\\( a=7,\\ b=13,\\ P(X<9)=\\dfrac{1}{3},\\ P(X>12\\mid X>9)=\\dfrac{1}{4} \\)",
      canonicalAnswer: "a=7, b=13, P(X<9)=1/3, P(X>12|X>9)=1/4",
    },
  },
  {
    id: "y2cu-070",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 70",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A train is scheduled every hour. The number of minutes \\( T \\) past the hour at which a passenger arrives on the platform is modelled by \\( T \\sim U(0, 30) \\). (a) Find \\( E(T) \\) and \\( \\mathrm{Var}(T) \\). (b) Given that the passenger arrives in the second half of the half-hour window (i.e. \\( T > 15 \\)), find the probability they arrive in the last five minutes (i.e. \\( T > 25 \\)). (c) Comment on whether modelling a real passenger's arrival time by \\( U(0,30) \\) is likely to be appropriate.",
    questionMafs: `<Mafs viewBox={{ x: [-5.4, 35.4], y: [-0.006, 0.045] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[25,0],[25,0.0333],[30,0.0333],[30,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[0,0],[0,0.0333],[30,0.0333],[30,0]]} color="var(--mafs-fg-accent)" />
  <Text x={0} y={-0.0033} attach="s">0</Text>
  <Text x={30} y={-0.0033} attach="s">30</Text>
  <Text x={-2.43} y={0.0333} attach="w">1/(30−0)</Text>
  <Text x={25} y={-0.0033} attach="s">25</Text>
  <Text x={30} y={-0.0033} attach="s">30</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "conditional probability", "expectation", "variance", "multi-step"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the mean and variance from \\( a=0 \\), \\( b=30 \\).", workingLatex: "E(T) = \\frac{0+30}{2} = 15, \\qquad \\mathrm{Var}(T) = \\frac{(30-0)^2}{12} = \\frac{900}{12} = 75", explanation: "Use the standard formulae; the interval width is \\( 30 \\), giving variance \\( 75 \\)." },
        { stepNumber: 2, description: "Set up the conditional probability.", workingLatex: "P(T>25 \\mid T>15) = \\frac{P(T>25)}{P(T>15)}", explanation: "Since \\( \\{T>25\\}\\subset\\{T>15\\} \\), the intersection is \\( \\{T>25\\} \\)." },
        { stepNumber: 3, description: "Evaluate the two upper-tail probabilities.", workingLatex: "P(T>25) = \\frac{30-25}{30} = \\frac{5}{30}, \\qquad P(T>15) = \\frac{30-15}{30} = \\frac{15}{30}", explanation: "Each is an interval length over the total width \\( 30 \\)." },
        { stepNumber: 4, description: "Combine to obtain the conditional probability.", workingLatex: "P(T>25 \\mid T>15) = \\frac{5/30}{15/30} = \\frac{5}{15} = \\frac{1}{3}", explanation: "Dividing gives \\( \\tfrac{5}{15}=\\tfrac13 \\)." },
        { stepNumber: 5, description: "Comment on the suitability of the model.", workingLatex: "U(0,30): \\text{equal density across the whole window}", explanation: "A uniform model is reasonable only if the passenger really is equally likely to arrive at any minute — plausible for someone arriving \"whenever they happen to\". But many passengers deliberately aim to arrive shortly before the train, so arrivals would cluster near the end of the window rather than spread out evenly; for such passengers \\( U(0,30) \\) would not be appropriate." }
      ],
      finalAnswer: "\\( E(T)=15,\\ \\mathrm{Var}(T)=75,\\ P(T>25\\mid T>15)=\\dfrac{1}{3} \\)",
      canonicalAnswer: "E(T)=15, Var(T)=75, P(T>25|T>15)=1/3",
    },
  },
  {
    id: "y2cu-071",
    topicRef: "y2cu",
    topicTitle: "Continuous Uniform Distribution 71",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A digital scale records each weight by rounding to the nearest kilogram, so the rounding error \\( E \\) (recorded minus true) is modelled by \\( E \\sim U(-0.5, 0.5) \\). (a) Find \\( P(E > 0.4) \\) and \\( P(|E| > 0.4) \\). (b) Ten different items are weighed, with errors modelled as independent. Let \\( Y \\) be the number of the ten whose error has magnitude greater than \\( 0.4 \\). Name the distribution of \\( Y \\), give its parameters, and find \\( E(Y) \\). (c) The recorded total weight of the ten items differs from the true total by \\( S = E_1 + E_2 + \\cdots + E_{10} \\). Find \\( \\mathrm{Var}(S) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.68, 0.68], y: [-0.18, 1.35] }} height={230}>
  <Coordinates.Cartesian xAxis={{ lines: false }} yAxis={{ lines: false }} />
  <Polygon points={[[0.4,0],[0.4,1],[0.5,1],[0.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.28} strokeOpacity={0} />
  <Polyline points={[[-0.5,0],[-0.5,1],[0.5,1],[0.5,0]]} color="var(--mafs-fg-accent)" />
  <Text x={-0.5} y={-0.099} attach="s">-0.5</Text>
  <Text x={0.5} y={-0.099} attach="s">0.5</Text>
  <Text x={-0.581} y={1} attach="w">1/(0.5−-0.5)</Text>
  <Text x={0.4} y={-0.099} attach="s">0.4</Text>
  <Text x={0.5} y={-0.099} attach="s">0.5</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["continuous uniform", "rounding error", "binomial", "distribution selection", "multi-step"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find \\( P(E>0.4) \\) from the \\( U(-0.5,0.5) \\) density.", workingLatex: "P(E > 0.4) = \\frac{0.5-0.4}{1} = 0.1", explanation: "The density on \\( U(-0.5,0.5) \\) is \\( 1 \\), so the probability of \\( (0.4,0.5) \\) equals its length \\( 0.1 \\)." },
        { stepNumber: 2, description: "Find \\( P(|E|>0.4) \\) using symmetry.", workingLatex: "P(|E| > 0.4) = P(E>0.4) + P(E<-0.4) = 0.1 + 0.1 = 0.2", explanation: "By symmetry the two tails are equal, so the total magnitude-tail probability is \\( 0.2 \\)." },
        { stepNumber: 3, description: "Identify the distribution of \\( Y \\).", workingLatex: "Y \\sim B(10, 0.2)", explanation: "There are \\( n=10 \\) independent items, each with the same probability \\( p=P(|E|>0.4)=0.2 \\) of a \"large\" error, and we count successes, so \\( Y \\) is binomial." },
        { stepNumber: 4, description: "Find the mean of \\( Y \\).", workingLatex: "E(Y) = np = 10 \\times 0.2 = 2", explanation: "For a binomial distribution \\( E(Y)=np=2 \\)." },
        { stepNumber: 5, description: "Find the variance of a single error for the sum.", workingLatex: "\\mathrm{Var}(E_i) = \\frac{(0.5-(-0.5))^2}{12} = \\frac{1}{12}", explanation: "Each error is \\( U(-0.5,0.5) \\) with width \\( 1 \\), so variance \\( \\tfrac{1}{12} \\)." },
        { stepNumber: 6, description: "Add the variances using independence.", workingLatex: "\\mathrm{Var}(S) = 10 \\times \\frac{1}{12} = \\frac{10}{12} = \\frac{5}{6}", explanation: "For independent errors the variance of the sum is the sum of the variances: \\( 10\\times\\tfrac{1}{12}=\\tfrac{5}{6}\\approx 0.833 \\)." }
      ],
      finalAnswer: "\\( P(E>0.4)=0.1,\\ P(|E|>0.4)=0.2,\\ Y\\sim B(10,0.2),\\ E(Y)=2,\\ \\mathrm{Var}(S)=\\dfrac{5}{6} \\)",
      canonicalAnswer: "P(E>0.4)=0.1, P(|E|>0.4)=0.2, Y~B(10,0.2), E(Y)=2, Var(S)=5/6",
    },
  },
];
