import { Question } from "@/lib/types";

/**
 * Year 2 — Statistics § The Normal Distribution
 * Ref: y2nm
 * 71 questions: standardisation, P(X<a)/P(X>a)/P(a<X<b), inverse Normal,
 * finding unknown mu/sigma, simultaneous parameters from two probabilities,
 * conditional probability, Normal+binomial, modelling and suitability critique.
 * Diagrams: Mafs normal-curve figures (questionMafs / step.mafs).
 */
export const questions: Question[] = [
  {
    id: "y2nm-001",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 01",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\) has a Normal distribution with mean \\( 30 \\) and variance \\( 25 \\). Write down the value of \\( \\mu \\) and the value of \\( \\sigma \\) for \\( X \\).",
    questionMafs: `<Mafs viewBox={{ x: [10, 50], y: [-0.0128, 0.0942] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 5 }} yAxis={{ lines: false }} />
  <Polygon points={[[10,0],[10.8333,0.0001],[11.6667,0.0001],[12.5,0.0002],[13.3333,0.0003],[14.1667,0.0005],[15,0.0009],[15.8333,0.0014],[16.6667,0.0023],[17.5,0.0035],[18.3333,0.0052],[19.1667,0.0076],[20,0.0108],[20.8333,0.0149],[21.6667,0.0199],[22.5,0.0259],[23.3333,0.0328],[24.1667,0.0404],[25,0.0484],[25.8333,0.0564],[26.6667,0.0639],[27.5,0.0704],[28.3333,0.0755],[29.1667,0.0787],[30,0.0798],[30.8333,0.0787],[31.6667,0.0755],[32.5,0.0704],[33.3333,0.0639],[34.1667,0.0564],[35,0.0484],[35.8333,0.0404],[36.6667,0.0328],[37.5,0.0259],[38.3333,0.0199],[39.1667,0.0149],[40,0.0108],[40.8333,0.0076],[41.6667,0.0052],[42.5,0.0035],[43.3333,0.0023],[44.1667,0.0014],[45,0.0009],[45.8333,0.0005],[46.6667,0.0003],[47.5,0.0002],[48.3333,0.0001],[49.1667,0.0001],[50,0],[50,0],[10,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-30)**2)/(2*5*5))/(5*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[30, 0]} point2={[30, 0.0798]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Text x={30} y={0.0876} attach="n">μ = 30</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal distribution", "definition", "notation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the mean from the notation \\( X\\sim N(\\mu,\\sigma^2) \\).", workingLatex: "\\mu = 30", explanation: "In \\( N(\\mu,\\sigma^2) \\) the first parameter is the mean, so \\( \\mu=30 \\)." },
        { stepNumber: 2, description: "Identify the standard deviation. The second parameter is the variance \\( \\sigma^2 \\).", workingLatex: "\\sigma^2 = 25 \\implies \\sigma = \\sqrt{25} = 5", explanation: "The variance is \\( 25 \\), so the standard deviation is its square root, \\( \\sigma=5 \\)." }
      ],
      finalAnswer: "\\( \\mu = 30,\\ \\sigma = 5 \\)",
      canonicalAnswer: "mu=30, sigma=5",
    },
  },
  {
    id: "y2nm-002",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 02",
    difficulty: "Foundation",
    questionText: "A Normal distribution is symmetrical about its mean. Explain why this symmetry means that the mean and the median of a Normal distribution are equal.",
    questionMafs: `<Mafs viewBox={{ x: [-4, 4], y: [-0.0638, 0.4708] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 1 }} yAxis={{ lines: false }} />
  <Polygon points={[[-4,0.0001],[-3.9167,0.0002],[-3.8333,0.0003],[-3.75,0.0004],[-3.6667,0.0005],[-3.5833,0.0006],[-3.5,0.0009],[-3.4167,0.0012],[-3.3333,0.0015],[-3.25,0.002],[-3.1667,0.0027],[-3.0833,0.0034],[-3,0.0044],[-2.9167,0.0057],[-2.8333,0.0072],[-2.75,0.0091],[-2.6667,0.0114],[-2.5833,0.0142],[-2.5,0.0175],[-2.4167,0.0215],[-2.3333,0.0262],[-2.25,0.0317],[-2.1667,0.0382],[-2.0833,0.0455],[-2,0.054],[-1.9167,0.0636],[-1.8333,0.0743],[-1.75,0.0863],[-1.6667,0.0995],[-1.5833,0.1139],[-1.5,0.1295],[-1.4167,0.1463],[-1.3333,0.164],[-1.25,0.1826],[-1.1667,0.202],[-1.0833,0.2219],[-1,0.242],[-0.9167,0.2621],[-0.8333,0.2819],[-0.75,0.3011],[-0.6667,0.3194],[-0.5833,0.3365],[-0.5,0.3521],[-0.4167,0.3658],[-0.3333,0.3774],[-0.25,0.3867],[-0.1667,0.3934],[-0.0833,0.3976],[0,0.3989],[0,0],[-4,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-0)**2)/(2*1*1))/(1*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0, 0]} point2={[0, 0.3989]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[0, 0]} point2={[0, 0.3989]} color="var(--mafs-fg-orange)" />
  <Text x={0} y={0.4378} attach="n">μ = 0</Text>
  <Text x={0} y={-0.0319} attach="s">0</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal distribution", "symmetry", "median", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State what the median represents.", workingLatex: "P(X < \\text{median}) = 0.5", explanation: "The median is the value that splits the total probability of \\( 1 \\) into two halves of \\( 0.5 \\)." },
        { stepNumber: 2, description: "Use the symmetry of the Normal curve about \\( \\mu \\).", workingLatex: "P(X < \\mu) = 0.5", explanation: "Because the bell curve is symmetrical about \\( \\mu \\), exactly half the area lies below \\( \\mu \\). So \\( \\mu \\) is the value with \\( 0.5 \\) of the probability below it, which is precisely the median. Hence mean = median." }
      ],
      finalAnswer: "\\( \\text{Since } P(X<\\mu)=0.5,\\ \\mu \\text{ is the median, so mean} = \\text{median.} \\)",
    },
  },
  {
    id: "y2nm-003",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 03",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim N(40, 6^2) \\). Write down the value of \\( P(X < 40) \\) and explain your answer.",
    questionMafs: `<Mafs viewBox={{ x: [16, 64], y: [-0.0106, 0.0785] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 6 }} yAxis={{ lines: false }} />
  <Polygon points={[[16,0],[16.5,0],[17,0],[17.5,0.0001],[18,0.0001],[18.5,0.0001],[19,0.0001],[19.5,0.0002],[20,0.0003],[20.5,0.0003],[21,0.0004],[21.5,0.0006],[22,0.0007],[22.5,0.0009],[23,0.0012],[23.5,0.0015],[24,0.0019],[24.5,0.0024],[25,0.0029],[25.5,0.0036],[26,0.0044],[26.5,0.0053],[27,0.0064],[27.5,0.0076],[28,0.009],[28.5,0.0106],[29,0.0124],[29.5,0.0144],[30,0.0166],[30.5,0.019],[31,0.0216],[31.5,0.0244],[32,0.0273],[32.5,0.0304],[33,0.0337],[33.5,0.037],[34,0.0403],[34.5,0.0437],[35,0.047],[35.5,0.0502],[36,0.0532],[36.5,0.0561],[37,0.0587],[37.5,0.061],[38,0.0629],[38.5,0.0644],[39,0.0656],[39.5,0.0663],[40,0.0665],[40,0],[16,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-40)**2)/(2*6*6))/(6*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[40, 0]} point2={[40, 0.0665]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[40, 0]} point2={[40, 0.0665]} color="var(--mafs-fg-orange)" />
  <Text x={40} y={0.073} attach="n">μ = 40</Text>
  <Text x={40} y={-0.0053} attach="s">40</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal distribution", "symmetry", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the mean of \\( X \\).", workingLatex: "\\mu = 40", explanation: "From \\( X\\sim N(40,6^2) \\) the mean is \\( \\mu=40 \\)." },
        { stepNumber: 2, description: "Apply symmetry of the Normal curve about the mean.", workingLatex: "P(X < \\mu) = 0.5 \\implies P(X < 40) = 0.5", explanation: "The Normal curve is symmetrical about its mean, so exactly half the probability lies below the mean \\( 40 \\)." }
      ],
      finalAnswer: "\\( P(X < 40) = 0.5 \\)",
      canonicalAnswer: "0.5",
    },
  },
  {
    id: "y2nm-004",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 04",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim N(50, 16) \\). Find \\( P(X < 56) \\).",
    questionMafs: `<Mafs viewBox={{ x: [34, 66], y: [-0.016, 0.1177] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 4 }} yAxis={{ lines: false }} />
  <Polygon points={[[34,0],[34.4583,0.0001],[34.9167,0.0001],[35.375,0.0001],[35.8333,0.0002],[36.2917,0.0003],[36.75,0.0004],[37.2083,0.0006],[37.6667,0.0009],[38.125,0.0012],[38.5833,0.0017],[39.0417,0.0023],[39.5,0.0032],[39.9583,0.0043],[40.4167,0.0057],[40.875,0.0074],[41.3333,0.0095],[41.7917,0.0121],[42.25,0.0153],[42.7083,0.0189],[43.1667,0.0232],[43.625,0.028],[44.0833,0.0334],[44.5417,0.0393],[45,0.0457],[45.4583,0.0523],[45.9167,0.0592],[46.375,0.0661],[46.8333,0.0729],[47.2917,0.0793],[47.75,0.0851],[48.2083,0.0902],[48.6667,0.0943],[49.125,0.0974],[49.5833,0.0992],[50.0417,0.0997],[50.5,0.099],[50.9583,0.0969],[51.4167,0.0937],[51.875,0.0894],[52.3333,0.0841],[52.7917,0.0782],[53.25,0.0717],[53.7083,0.0649],[54.1667,0.058],[54.625,0.0511],[55.0833,0.0445],[55.5417,0.0382],[56,0.0324],[56,0],[34,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-50)**2)/(2*4*4))/(4*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[50, 0]} point2={[50, 0.0997]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[56, 0]} point2={[56, 0.0324]} color="var(--mafs-fg-orange)" />
  <Text x={50} y={0.1094} attach="n">μ = 50</Text>
  <Text x={56} y={-0.008} attach="s">56</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal distribution", "standardising", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise \\( X = 56 \\) using \\( Z = \\dfrac{X-\\mu}{\\sigma} \\), with \\( \\sigma = \\sqrt{16} = 4 \\).", workingLatex: "Z = \\dfrac{56 - 50}{4} = 1.5", explanation: "The variance is \\( 16 \\) so \\( \\sigma = 4 \\). Standardising converts the value to a \\( z \\)-score." },
        { stepNumber: 2, description: "Read off the probability using \\( \\Phi \\).", workingLatex: "P(X < 56) = P(Z < 1.5) = \\Phi(1.5) = 0.9332", explanation: "\\( P(X<56) \\) equals \\( \\Phi(1.5) \\), which is \\( 0.9332 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(X < 56) = 0.9332 \\)",
      canonicalAnswer: "0.9332",
    },
  },
  {
    id: "y2nm-005",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 05",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim N(20, 25) \\). Find \\( P(X > 27) \\).",
    questionMafs: `<Mafs viewBox={{ x: [0, 40], y: [-0.0128, 0.0942] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 5 }} yAxis={{ lines: false }} />
  <Polygon points={[[27,0.0299],[27.2708,0.0277],[27.5417,0.0256],[27.8125,0.0235],[28.0833,0.0216],[28.3542,0.0198],[28.625,0.018],[28.8958,0.0164],[29.1667,0.0149],[29.4375,0.0134],[29.7083,0.0121],[29.9792,0.0109],[30.25,0.0098],[30.5208,0.0087],[30.7917,0.0078],[31.0625,0.0069],[31.3333,0.0061],[31.6042,0.0054],[31.875,0.0048],[32.1458,0.0042],[32.4167,0.0037],[32.6875,0.0032],[32.9583,0.0028],[33.2292,0.0024],[33.5,0.0021],[33.7708,0.0018],[34.0417,0.0015],[34.3125,0.0013],[34.5833,0.0011],[34.8542,0.001],[35.125,0.0008],[35.3958,0.0007],[35.6667,0.0006],[35.9375,0.0005],[36.2083,0.0004],[36.4792,0.0003],[36.75,0.0003],[37.0208,0.0002],[37.2917,0.0002],[37.5625,0.0002],[37.8333,0.0001],[38.1042,0.0001],[38.375,0.0001],[38.6458,0.0001],[38.9167,0.0001],[39.1875,0.0001],[39.4583,0],[39.7292,0],[40,0],[40,0],[27,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-20)**2)/(2*5*5))/(5*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[20, 0]} point2={[20, 0.0798]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[27, 0]} point2={[27, 0.0299]} color="var(--mafs-fg-orange)" />
  <Text x={20} y={0.0876} attach="n">μ = 20</Text>
  <Text x={27} y={-0.0064} attach="s">27</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal distribution", "standardising", "probability", "upper tail"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise \\( X = 27 \\) using \\( Z = \\dfrac{X-\\mu}{\\sigma} \\), with \\( \\sigma = \\sqrt{25} = 5 \\).", workingLatex: "Z = \\dfrac{27 - 20}{5} = 1.4", explanation: "The variance is \\( 25 \\) so \\( \\sigma = 5 \\)." },
        { stepNumber: 2, description: "Convert the upper-tail probability using \\( P(Z>z) = 1 - \\Phi(z) \\).", workingLatex: "P(X > 27) = 1 - \\Phi(1.4) = 1 - 0.9192 = 0.0808", explanation: "The area to the right of \\( z=1.4 \\) is \\( 1-\\Phi(1.4)=0.0808 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(X > 27) = 0.0808 \\)",
      canonicalAnswer: "0.0808",
    },
  },
  {
    id: "y2nm-006",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 06",
    difficulty: "Foundation",
    questionText: "The heights, \\( H\\,\\mathrm{cm} \\), of a large group of plants are modelled by \\( H \\sim N(100, 225) \\). Find the probability that a randomly chosen plant is shorter than \\( 118\\,\\mathrm{cm} \\).",
    questionMafs: `<Mafs viewBox={{ x: [40, 160], y: [-0.0043, 0.0314] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 15 }} yAxis={{ lines: false }} />
  <Polygon points={[[40,0],[41.625,0],[43.25,0],[44.875,0],[46.5,0],[48.125,0.0001],[49.75,0.0001],[51.375,0.0001],[53,0.0002],[54.625,0.0003],[56.25,0.0004],[57.875,0.0005],[59.5,0.0007],[61.125,0.0009],[62.75,0.0012],[64.375,0.0016],[66,0.002],[67.625,0.0026],[69.25,0.0033],[70.875,0.004],[72.5,0.005],[74.125,0.006],[75.75,0.0072],[77.375,0.0085],[79,0.01],[80.625,0.0115],[82.25,0.0132],[83.875,0.0149],[85.5,0.0167],[87.125,0.0184],[88.75,0.0201],[90.375,0.0216],[92,0.0231],[93.625,0.0243],[95.25,0.0253],[96.875,0.026],[98.5,0.0265],[100.125,0.0266],[101.75,0.0264],[103.375,0.0259],[105,0.0252],[106.625,0.0241],[108.25,0.0229],[109.875,0.0214],[111.5,0.0198],[113.125,0.0181],[114.75,0.0164],[116.375,0.0147],[118,0.0129],[118,0],[40,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-100)**2)/(2*15*15))/(15*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[100, 0]} point2={[100, 0.0266]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[118, 0]} point2={[118, 0.0129]} color="var(--mafs-fg-orange)" />
  <Text x={100} y={0.0292} attach="n">μ = 100</Text>
  <Text x={118} y={-0.0021} attach="s">118</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal distribution", "standardising", "probability", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise \\( H = 118 \\) using \\( Z = \\dfrac{H-\\mu}{\\sigma} \\), with \\( \\sigma = \\sqrt{225} = 15 \\).", workingLatex: "Z = \\dfrac{118 - 100}{15} = 1.2", explanation: "The variance is \\( 225 \\) so \\( \\sigma = 15\\,\\mathrm{cm} \\)." },
        { stepNumber: 2, description: "Read off the lower-tail probability using \\( \\Phi \\).", workingLatex: "P(H < 118) = \\Phi(1.2) = 0.8849", explanation: "\\( P(H<118)=\\Phi(1.2)=0.8849 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(H < 118) = 0.8849 \\)",
      canonicalAnswer: "0.8849",
    },
  },
  {
    id: "y2nm-007",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 07",
    difficulty: "Foundation",
    questionText: "The times, \\( T \\) minutes, taken to complete a puzzle are modelled by \\( T \\sim N(8, 4) \\). Find the probability that a randomly chosen person takes more than \\( 11 \\) minutes.",
    questionMafs: `<Mafs viewBox={{ x: [0, 16], y: [-0.0319, 0.2354] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 2 }} yAxis={{ lines: false }} />
  <Polygon points={[[11,0.0648],[11.1042,0.0598],[11.2083,0.0551],[11.3125,0.0506],[11.4167,0.0464],[11.5208,0.0424],[11.625,0.0386],[11.7292,0.0351],[11.8333,0.0318],[11.9375,0.0287],[12.0417,0.0259],[12.1458,0.0233],[12.25,0.0209],[12.3542,0.0186],[12.4583,0.0166],[12.5625,0.0148],[12.6667,0.0131],[12.7708,0.0116],[12.875,0.0102],[12.9792,0.009],[13.0833,0.0079],[13.1875,0.0069],[13.2917,0.006],[13.3958,0.0052],[13.5,0.0045],[13.6042,0.0039],[13.7083,0.0034],[13.8125,0.0029],[13.9167,0.0025],[14.0208,0.0021],[14.125,0.0018],[14.2292,0.0016],[14.3333,0.0013],[14.4375,0.0011],[14.5417,0.0009],[14.6458,0.0008],[14.75,0.0007],[14.8542,0.0006],[14.9583,0.0005],[15.0625,0.0004],[15.1667,0.0003],[15.2708,0.0003],[15.375,0.0002],[15.4792,0.0002],[15.5833,0.0002],[15.6875,0.0001],[15.7917,0.0001],[15.8958,0.0001],[16,0.0001],[16,0],[11,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-8)**2)/(2*2*2))/(2*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[8, 0]} point2={[8, 0.1995]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[11, 0]} point2={[11, 0.0648]} color="var(--mafs-fg-orange)" />
  <Text x={8} y={0.2189} attach="n">μ = 8</Text>
  <Text x={11} y={-0.016} attach="s">11</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal distribution", "standardising", "probability", "upper tail", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise \\( T = 11 \\) using \\( Z = \\dfrac{T-\\mu}{\\sigma} \\), with \\( \\sigma = \\sqrt{4} = 2 \\).", workingLatex: "Z = \\dfrac{11 - 8}{2} = 1.5", explanation: "The variance is \\( 4 \\) so \\( \\sigma = 2 \\) minutes." },
        { stepNumber: 2, description: "Convert the upper-tail probability using \\( P(Z>z) = 1 - \\Phi(z) \\).", workingLatex: "P(T > 11) = 1 - \\Phi(1.5) = 1 - 0.9332 = 0.0668", explanation: "The area to the right of \\( z=1.5 \\) is \\( 1-\\Phi(1.5)=0.0668 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(T > 11) = 0.0668 \\)",
      canonicalAnswer: "0.0668",
    },
  },
  {
    id: "y2nm-008",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 08",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim N(70, 64) \\). Find the standardised value (the \\( z \\)-score) of \\( X = 82 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal distribution", "standardising", "z-score"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the standard deviation. The variance is \\( 64 \\).", workingLatex: "\\sigma = \\sqrt{64} = 8", explanation: "The standard deviation is the square root of the variance, so \\( \\sigma = 8 \\)." },
        { stepNumber: 2, description: "Standardise using \\( Z = \\dfrac{X-\\mu}{\\sigma} \\).", workingLatex: "Z = \\dfrac{82 - 70}{8} = \\dfrac{12}{8} = 1.5", explanation: "Subtracting the mean and dividing by \\( \\sigma \\) gives the \\( z \\)-score \\( 1.5 \\)." }
      ],
      finalAnswer: "\\( z = 1.5 \\)",
      canonicalAnswer: "1.5",
    },
  },
  {
    id: "y2nm-009",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 09",
    difficulty: "Foundation",
    questionText: "The masses, \\( M\\,\\mathrm{g} \\), of apples from an orchard are modelled by \\( M \\sim N(60, 100) \\). Find the probability that a randomly chosen apple has a mass less than \\( 75\\,\\mathrm{g} \\).",
    questionMafs: `<Mafs viewBox={{ x: [20, 100], y: [-0.0064, 0.0471] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 10 }} yAxis={{ lines: false }} />
  <Polygon points={[[20,0],[21.1458,0],[22.2917,0],[23.4375,0],[24.5833,0.0001],[25.7292,0.0001],[26.875,0.0002],[28.0208,0.0002],[29.1667,0.0003],[30.3125,0.0005],[31.4583,0.0007],[32.6042,0.0009],[33.75,0.0013],[34.8958,0.0017],[36.0417,0.0023],[37.1875,0.003],[38.3333,0.0038],[39.4792,0.0049],[40.625,0.0061],[41.7708,0.0076],[42.9167,0.0093],[44.0625,0.0112],[45.2083,0.0134],[46.3542,0.0157],[47.5,0.0183],[48.6458,0.0209],[49.7917,0.0237],[50.9375,0.0265],[52.0833,0.0292],[53.2292,0.0317],[54.375,0.0341],[55.5208,0.0361],[56.6667,0.0377],[57.8125,0.039],[58.9583,0.0397],[60.1042,0.0399],[61.25,0.0396],[62.3958,0.0388],[63.5417,0.0375],[64.6875,0.0357],[65.8333,0.0337],[66.9792,0.0313],[68.125,0.0287],[69.2708,0.026],[70.4167,0.0232],[71.5625,0.0204],[72.7083,0.0178],[73.8542,0.0153],[75,0.013],[75,0],[20,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-60)**2)/(2*10*10))/(10*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[60, 0]} point2={[60, 0.0399]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[75, 0]} point2={[75, 0.013]} color="var(--mafs-fg-orange)" />
  <Text x={60} y={0.0438} attach="n">μ = 60</Text>
  <Text x={75} y={-0.0032} attach="s">75</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal distribution", "standardising", "probability", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise \\( M = 75 \\) using \\( Z = \\dfrac{M-\\mu}{\\sigma} \\), with \\( \\sigma = \\sqrt{100} = 10 \\).", workingLatex: "Z = \\dfrac{75 - 60}{10} = 1.5", explanation: "The variance is \\( 100 \\) so \\( \\sigma = 10\\,\\mathrm{g} \\)." },
        { stepNumber: 2, description: "Read off the lower-tail probability using \\( \\Phi \\).", workingLatex: "P(M < 75) = \\Phi(1.5) = 0.9332", explanation: "\\( P(M<75)=\\Phi(1.5)=0.9332 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(M < 75) = 0.9332 \\)",
      canonicalAnswer: "0.9332",
    },
  },
  {
    id: "y2nm-010",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 10",
    difficulty: "Foundation",
    questionText: "A data set is well modelled by a Normal distribution. A student claims that for this model the mean, the median and the mode are all equal. State whether the student is correct, and give a reason involving the shape of the distribution.",
    questionMafs: `<Mafs viewBox={{ x: [-4, 4], y: [-0.0638, 0.4708] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 1 }} yAxis={{ lines: false }} />
  <Polygon points={[[-4,0.0001],[-3.8333,0.0003],[-3.6667,0.0005],[-3.5,0.0009],[-3.3333,0.0015],[-3.1667,0.0027],[-3,0.0044],[-2.8333,0.0072],[-2.6667,0.0114],[-2.5,0.0175],[-2.3333,0.0262],[-2.1667,0.0382],[-2,0.054],[-1.8333,0.0743],[-1.6667,0.0995],[-1.5,0.1295],[-1.3333,0.164],[-1.1667,0.202],[-1,0.242],[-0.8333,0.2819],[-0.6667,0.3194],[-0.5,0.3521],[-0.3333,0.3774],[-0.1667,0.3934],[0,0.3989],[0.1667,0.3934],[0.3333,0.3774],[0.5,0.3521],[0.6667,0.3194],[0.8333,0.2819],[1,0.242],[1.1667,0.202],[1.3333,0.164],[1.5,0.1295],[1.6667,0.0995],[1.8333,0.0743],[2,0.054],[2.1667,0.0382],[2.3333,0.0262],[2.5,0.0175],[2.6667,0.0114],[2.8333,0.0072],[3,0.0044],[3.1667,0.0027],[3.3333,0.0015],[3.5,0.0009],[3.6667,0.0005],[3.8333,0.0003],[4,0.0001],[4,0],[-4,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-0)**2)/(2*1*1))/(1*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0, 0]} point2={[0, 0.3989]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Text x={0} y={0.4378} attach="n">μ = 0</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal distribution", "mean median mode", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State whether the claim is correct.", workingLatex: "\\text{Mean} = \\text{Median} = \\text{Mode}", explanation: "The student is correct: for a Normal distribution these three averages all coincide." },
        { stepNumber: 2, description: "Give the reason from the shape.", workingLatex: "\\text{symmetrical bell curve, single peak at } \\mu", explanation: "The Normal curve is symmetrical about \\( \\mu \\), so the mean and median are both at \\( \\mu \\); the single highest point of the bell is also at \\( \\mu \\), giving the mode there too." }
      ],
      finalAnswer: "\\( \\text{Correct: the symmetrical bell peaks at } \\mu,\\ \\text{so mean} = \\text{median} = \\text{mode}. \\)",
    },
  },
  {
    id: "y2nm-011",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 11",
    difficulty: "Foundation",
    questionText: "The lifetimes, \\( L \\) hours, of a type of battery are modelled by \\( L \\sim N(500, 1600) \\). Find the probability that a randomly chosen battery lasts less than \\( 540 \\) hours.",
    questionMafs: `<Mafs viewBox={{ x: [340, 660], y: [-0.0016, 0.0118] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 40 }} yAxis={{ lines: false }} />
  <Polygon points={[[340,0],[344.1667,0],[348.3333,0],[352.5,0],[356.6667,0],[360.8333,0],[365,0],[369.1667,0],[373.3333,0.0001],[377.5,0.0001],[381.6667,0.0001],[385.8333,0.0002],[390,0.0002],[394.1667,0.0003],[398.3333,0.0004],[402.5,0.0005],[406.6667,0.0007],[410.8333,0.0008],[415,0.001],[419.1667,0.0013],[423.3333,0.0016],[427.5,0.0019],[431.6667,0.0023],[435.8333,0.0028],[440,0.0032],[444.1667,0.0038],[448.3333,0.0043],[452.5,0.0049],[456.6667,0.0055],[460.8333,0.0062],[465,0.0068],[469.1667,0.0074],[473.3333,0.008],[477.5,0.0085],[481.6667,0.009],[485.8333,0.0094],[490,0.0097],[494.1667,0.0099],[498.3333,0.01],[502.5,0.01],[506.6667,0.0098],[510.8333,0.0096],[515,0.0093],[519.1667,0.0089],[523.3333,0.0084],[527.5,0.0079],[531.6667,0.0073],[535.8333,0.0067],[540,0.006],[540,0],[340,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-500)**2)/(2*40*40))/(40*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[500, 0]} point2={[500, 0.01]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[540, 0]} point2={[540, 0.006]} color="var(--mafs-fg-orange)" />
  <Text x={500} y={0.0109} attach="n">μ = 500</Text>
  <Text x={540} y={-0.0008} attach="s">540</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal distribution", "standardising", "probability", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise \\( L = 540 \\) using \\( Z = \\dfrac{L-\\mu}{\\sigma} \\), with \\( \\sigma = \\sqrt{1600} = 40 \\).", workingLatex: "Z = \\dfrac{540 - 500}{40} = 1", explanation: "The variance is \\( 1600 \\) so \\( \\sigma = 40 \\) hours." },
        { stepNumber: 2, description: "Read off the lower-tail probability using \\( \\Phi \\).", workingLatex: "P(L < 540) = \\Phi(1) = 0.8413", explanation: "\\( P(L<540)=\\Phi(1)=0.8413 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(L < 540) = 0.8413 \\)",
      canonicalAnswer: "0.8413",
    },
  },
  {
    id: "y2nm-012",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 12",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim \\mathrm{N}(50,\\ 4^2) \\). Find \\( P(46 < X < 54) \\), giving your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [34, 66], y: [-0.016, 0.1177] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 4 }} yAxis={{ lines: false }} />
  <Polygon points={[[46,0.0605],[46.1667,0.063],[46.3333,0.0655],[46.5,0.068],[46.6667,0.0705],[46.8333,0.0729],[47,0.0753],[47.1667,0.0776],[47.3333,0.0799],[47.5,0.082],[47.6667,0.0841],[47.8333,0.0861],[48,0.088],[48.1667,0.0898],[48.3333,0.0914],[48.5,0.093],[48.6667,0.0943],[48.8333,0.0956],[49,0.0967],[49.1667,0.0976],[49.3333,0.0984],[49.5,0.099],[49.6667,0.0994],[49.8333,0.0996],[50,0.0997],[50.1667,0.0996],[50.3333,0.0994],[50.5,0.099],[50.6667,0.0984],[50.8333,0.0976],[51,0.0967],[51.1667,0.0956],[51.3333,0.0943],[51.5,0.093],[51.6667,0.0914],[51.8333,0.0898],[52,0.088],[52.1667,0.0861],[52.3333,0.0841],[52.5,0.082],[52.6667,0.0799],[52.8333,0.0776],[53,0.0753],[53.1667,0.0729],[53.3333,0.0705],[53.5,0.068],[53.6667,0.0655],[53.8333,0.063],[54,0.0605],[54,0],[46,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-50)**2)/(2*4*4))/(4*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[50, 0]} point2={[50, 0.0997]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[46, 0]} point2={[46, 0.0605]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[54, 0]} point2={[54, 0.0605]} color="var(--mafs-fg-orange)" />
  <Text x={50} y={0.1094} attach="n">μ = 50</Text>
  <Text x={46} y={-0.008} attach="s">46</Text>
  <Text x={54} y={-0.008} attach="s">54</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-distribution", "probability", "between", "standardising"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise the lower boundary.", workingLatex: "z_1 = \\dfrac{46 - 50}{4} = -1", explanation: "Subtract the mean \\( \\mu = 50 \\) and divide by \\( \\sigma = 4 \\)." },
        { stepNumber: 2, description: "Standardise the upper boundary.", workingLatex: "z_2 = \\dfrac{54 - 50}{4} = 1", explanation: "Apply the same standardisation to \\( x = 54 \\)." },
        { stepNumber: 3, description: "Write the probability in terms of \\( \\Phi \\).", workingLatex: "P(46 < X < 54) = \\Phi(1) - \\Phi(-1)", explanation: "A 'between' probability is the difference of the two cumulative values." },
        { stepNumber: 4, description: "Evaluate.", workingLatex: "= 0.8413 - 0.1587 = 0.6827", explanation: "Look up \\( \\Phi(1) \\) and \\( \\Phi(-1) \\) and subtract." }
      ],
      finalAnswer: "\\( P(46 < X < 54) = 0.6827 \\)",
      canonicalAnswer: "0.6827",
    },
  },
  {
    id: "y2nm-013",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 13",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim \\mathrm{N}(70,\\ 5^2) \\). Find \\( P(X < 78) \\), giving your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [50, 90], y: [-0.0128, 0.0942] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 5 }} yAxis={{ lines: false }} />
  <Polygon points={[[50,0],[50.5833,0],[51.1667,0.0001],[51.75,0.0001],[52.3333,0.0002],[52.9167,0.0002],[53.5,0.0003],[54.0833,0.0005],[54.6667,0.0007],[55.25,0.001],[55.8333,0.0014],[56.4167,0.002],[57,0.0027],[57.5833,0.0037],[58.1667,0.0048],[58.75,0.0063],[59.3333,0.0082],[59.9167,0.0104],[60.5,0.0131],[61.0833,0.0163],[61.6667,0.0199],[62.25,0.024],[62.8333,0.0286],[63.4167,0.0335],[64,0.0388],[64.5833,0.0444],[65.1667,0.05],[65.75,0.0556],[66.3333,0.061],[66.9167,0.066],[67.5,0.0704],[68.0833,0.0741],[68.6667,0.077],[69.25,0.0789],[69.8333,0.0797],[70.4167,0.0795],[71,0.0782],[71.5833,0.0759],[72.1667,0.0726],[72.75,0.0686],[73.3333,0.0639],[73.9167,0.0587],[74.5,0.0532],[75.0833,0.0476],[75.6667,0.042],[76.25,0.0365],[76.8333,0.0314],[77.4167,0.0266],[78,0.0222],[78,0],[50,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-70)**2)/(2*5*5))/(5*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[70, 0]} point2={[70, 0.0798]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[78, 0]} point2={[78, 0.0222]} color="var(--mafs-fg-orange)" />
  <Text x={70} y={0.0876} attach="n">μ = 70</Text>
  <Text x={78} y={-0.0064} attach="s">78</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-distribution", "probability", "less-than", "standardising"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise the boundary.", workingLatex: "z = \\dfrac{78 - 70}{5} = 1.6", explanation: "Subtract \\( \\mu = 70 \\) and divide by \\( \\sigma = 5 \\)." },
        { stepNumber: 2, description: "Write the probability in terms of \\( \\Phi \\).", workingLatex: "P(X < 78) = \\Phi(1.6)", explanation: "A 'less than' probability is read directly from the cumulative function." },
        { stepNumber: 3, description: "Evaluate.", workingLatex: "\\Phi(1.6) = 0.9452", explanation: "Read the value from the standard normal table or calculator." }
      ],
      finalAnswer: "\\( P(X < 78) = 0.9452 \\)",
      canonicalAnswer: "0.9452",
    },
  },
  {
    id: "y2nm-014",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 14",
    difficulty: "Foundation",
    questionText: "IQ scores are modelled by \\( X \\sim \\mathrm{N}(100,\\ 15^2) \\). Find the probability that a randomly chosen person has an IQ greater than \\( 120 \\). Give your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [40, 160], y: [-0.0043, 0.0314] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 15 }} yAxis={{ lines: false }} />
  <Polygon points={[[120,0.0109],[120.8333,0.0101],[121.6667,0.0094],[122.5,0.0086],[123.3333,0.0079],[124.1667,0.0073],[125,0.0066],[125.8333,0.006],[126.6667,0.0055],[127.5,0.005],[128.3333,0.0045],[129.1667,0.004],[130,0.0036],[130.8333,0.0032],[131.6667,0.0029],[132.5,0.0025],[133.3333,0.0023],[134.1667,0.002],[135,0.0017],[135.8333,0.0015],[136.6667,0.0013],[137.5,0.0012],[138.3333,0.001],[139.1667,0.0009],[140,0.0008],[140.8333,0.0007],[141.6667,0.0006],[142.5,0.0005],[143.3333,0.0004],[144.1667,0.0003],[145,0.0003],[145.8333,0.0002],[146.6667,0.0002],[147.5,0.0002],[148.3333,0.0001],[149.1667,0.0001],[150,0.0001],[150.8333,0.0001],[151.6667,0.0001],[152.5,0.0001],[153.3333,0],[154.1667,0],[155,0],[155.8333,0],[156.6667,0],[157.5,0],[158.3333,0],[159.1667,0],[160,0],[160,0],[120,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-100)**2)/(2*15*15))/(15*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[100, 0]} point2={[100, 0.0266]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[120, 0]} point2={[120, 0.0109]} color="var(--mafs-fg-orange)" />
  <Text x={100} y={0.0292} attach="n">μ = 100</Text>
  <Text x={120} y={-0.0021} attach="s">120</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-distribution", "probability", "greater-than", "standardising"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise the boundary.", workingLatex: "z = \\dfrac{120 - 100}{15} = 1.333", explanation: "Subtract \\( \\mu = 100 \\) and divide by \\( \\sigma = 15 \\)." },
        { stepNumber: 2, description: "Write the upper-tail probability in terms of \\( \\Phi \\).", workingLatex: "P(X > 120) = 1 - \\Phi(1.333)", explanation: "The total area is \\( 1 \\), so an upper tail is \\( 1 \\) minus the cumulative value." },
        { stepNumber: 3, description: "Evaluate.", workingLatex: "= 1 - 0.9088 = 0.0912", explanation: "Read \\( \\Phi(1.333) \\) and subtract from \\( 1 \\)." }
      ],
      finalAnswer: "\\( P(X > 120) = 0.0912 \\)",
      canonicalAnswer: "0.0912",
    },
  },
  {
    id: "y2nm-015",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 15",
    difficulty: "Foundation",
    questionText: "The heights of a species of plant (in cm) are modelled by \\( X \\sim \\mathrm{N}(160,\\ 8^2) \\). Using the empirical (68–95–99.7) rule, state the proportion of plants with heights between \\( 152\\ \\mathrm{cm} \\) and \\( 168\\ \\mathrm{cm} \\).",
    questionMafs: `<Mafs viewBox={{ x: [128, 192], y: [-0.008, 0.0588] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 8 }} yAxis={{ lines: false }} />
  <Polygon points={[[152,0.0302],[152.3333,0.0315],[152.6667,0.0328],[153,0.034],[153.3333,0.0352],[153.6667,0.0365],[154,0.0376],[154.3333,0.0388],[154.6667,0.0399],[155,0.041],[155.3333,0.0421],[155.6667,0.0431],[156,0.044],[156.3333,0.0449],[156.6667,0.0457],[157,0.0465],[157.3333,0.0472],[157.6667,0.0478],[158,0.0483],[158.3333,0.0488],[158.6667,0.0492],[159,0.0495],[159.3333,0.0497],[159.6667,0.0498],[160,0.0499],[160.3333,0.0498],[160.6667,0.0497],[161,0.0495],[161.3333,0.0492],[161.6667,0.0488],[162,0.0483],[162.3333,0.0478],[162.6667,0.0472],[163,0.0465],[163.3333,0.0457],[163.6667,0.0449],[164,0.044],[164.3333,0.0431],[164.6667,0.0421],[165,0.041],[165.3333,0.0399],[165.6667,0.0388],[166,0.0376],[166.3333,0.0365],[166.6667,0.0352],[167,0.034],[167.3333,0.0328],[167.6667,0.0315],[168,0.0302],[168,0],[152,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-160)**2)/(2*8*8))/(8*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[160, 0]} point2={[160, 0.0499]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[152, 0]} point2={[152, 0.0302]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[168, 0]} point2={[168, 0.0302]} color="var(--mafs-fg-orange)" />
  <Text x={160} y={0.0547} attach="n">μ = 160</Text>
  <Text x={152} y={-0.004} attach="s">152</Text>
  <Text x={168} y={-0.004} attach="s">168</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-distribution", "empirical-rule", "68-95-99.7"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Express the boundaries in terms of \\( \\mu \\) and \\( \\sigma \\).", workingLatex: "152 = \\mu - \\sigma, \\qquad 168 = \\mu + \\sigma", explanation: "Here \\( \\mu = 160 \\) and \\( \\sigma = 8 \\), so the interval is \\( \\mu \\pm \\sigma \\)." },
        { stepNumber: 2, description: "Apply the empirical rule for one standard deviation.", workingLatex: "P(\\mu - \\sigma < X < \\mu + \\sigma) \\approx 0.68", explanation: "About \\( 68\\% \\) of values lie within one standard deviation of the mean." }
      ],
      finalAnswer: "\\( \\text{Proportion} \\approx 0.68\\ (68\\%) \\)",
      canonicalAnswer: "0.68",
    },
  },
  {
    id: "y2nm-016",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 16",
    difficulty: "Foundation",
    questionText: "A machine fills bottles with a mean of \\( 200\\ \\mathrm{ml} \\) and standard deviation \\( 10\\ \\mathrm{ml} \\), modelled by \\( X \\sim \\mathrm{N}(200,\\ 10^2) \\). Using the empirical rule, find the proportion of bottles containing between \\( 180\\ \\mathrm{ml} \\) and \\( 220\\ \\mathrm{ml} \\).",
    questionMafs: `<Mafs viewBox={{ x: [160, 240], y: [-0.0064, 0.0471] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 10 }} yAxis={{ lines: false }} />
  <Polygon points={[[180,0.0054],[180.8333,0.0064],[181.6667,0.0074],[182.5,0.0086],[183.3333,0.0099],[184.1667,0.0114],[185,0.013],[185.8333,0.0146],[186.6667,0.0164],[187.5,0.0183],[188.3333,0.0202],[189.1667,0.0222],[190,0.0242],[190.8333,0.0262],[191.6667,0.0282],[192.5,0.0301],[193.3333,0.0319],[194.1667,0.0337],[195,0.0352],[195.8333,0.0366],[196.6667,0.0377],[197.5,0.0387],[198.3333,0.0393],[199.1667,0.0398],[200,0.0399],[200.8333,0.0398],[201.6667,0.0393],[202.5,0.0387],[203.3333,0.0377],[204.1667,0.0366],[205,0.0352],[205.8333,0.0337],[206.6667,0.0319],[207.5,0.0301],[208.3333,0.0282],[209.1667,0.0262],[210,0.0242],[210.8333,0.0222],[211.6667,0.0202],[212.5,0.0183],[213.3333,0.0164],[214.1667,0.0146],[215,0.013],[215.8333,0.0114],[216.6667,0.0099],[217.5,0.0086],[218.3333,0.0074],[219.1667,0.0064],[220,0.0054],[220,0],[180,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-200)**2)/(2*10*10))/(10*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[200, 0]} point2={[200, 0.0399]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[180, 0]} point2={[180, 0.0054]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[220, 0]} point2={[220, 0.0054]} color="var(--mafs-fg-orange)" />
  <Text x={200} y={0.0438} attach="n">μ = 200</Text>
  <Text x={180} y={-0.0032} attach="s">180</Text>
  <Text x={220} y={-0.0032} attach="s">220</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-distribution", "empirical-rule", "68-95-99.7"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Express the boundaries in terms of \\( \\mu \\) and \\( \\sigma \\).", workingLatex: "180 = \\mu - 2\\sigma, \\qquad 220 = \\mu + 2\\sigma", explanation: "With \\( \\mu = 200 \\) and \\( \\sigma = 10 \\), the interval is \\( \\mu \\pm 2\\sigma \\)." },
        { stepNumber: 2, description: "Apply the empirical rule for two standard deviations.", workingLatex: "P(\\mu - 2\\sigma < X < \\mu + 2\\sigma) \\approx 0.95", explanation: "About \\( 95\\% \\) of values lie within two standard deviations of the mean." }
      ],
      finalAnswer: "\\( \\text{Proportion} \\approx 0.95\\ (95\\%) \\)",
      canonicalAnswer: "0.95",
    },
  },
  {
    id: "y2nm-017",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 17",
    difficulty: "Foundation",
    questionText: "The lifetimes of a battery (in hours) are modelled by \\( X \\sim \\mathrm{N}(500,\\ 20^2) \\). Using the empirical rule, find the proportion of batteries with lifetimes between \\( 440 \\) hours and \\( 560 \\) hours.",
    questionMafs: `<Mafs viewBox={{ x: [420, 580], y: [-0.0032, 0.0235] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 20 }} yAxis={{ lines: false }} />
  <Polygon points={[[440,0.0002],[442.5,0.0003],[445,0.0005],[447.5,0.0006],[450,0.0009],[452.5,0.0012],[455,0.0016],[457.5,0.0021],[460,0.0027],[462.5,0.0034],[465,0.0043],[467.5,0.0053],[470,0.0065],[472.5,0.0078],[475,0.0091],[477.5,0.0106],[480,0.0121],[482.5,0.0136],[485,0.0151],[487.5,0.0164],[490,0.0176],[492.5,0.0186],[495,0.0193],[497.5,0.0198],[500,0.0199],[502.5,0.0198],[505,0.0193],[507.5,0.0186],[510,0.0176],[512.5,0.0164],[515,0.0151],[517.5,0.0136],[520,0.0121],[522.5,0.0106],[525,0.0091],[527.5,0.0078],[530,0.0065],[532.5,0.0053],[535,0.0043],[537.5,0.0034],[540,0.0027],[542.5,0.0021],[545,0.0016],[547.5,0.0012],[550,0.0009],[552.5,0.0006],[555,0.0005],[557.5,0.0003],[560,0.0002],[560,0],[440,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-500)**2)/(2*20*20))/(20*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[500, 0]} point2={[500, 0.0199]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[440, 0]} point2={[440, 0.0002]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[560, 0]} point2={[560, 0.0002]} color="var(--mafs-fg-orange)" />
  <Text x={500} y={0.0219} attach="n">μ = 500</Text>
  <Text x={440} y={-0.0016} attach="s">440</Text>
  <Text x={560} y={-0.0016} attach="s">560</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-distribution", "empirical-rule", "68-95-99.7"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Express the boundaries in terms of \\( \\mu \\) and \\( \\sigma \\).", workingLatex: "440 = \\mu - 3\\sigma, \\qquad 560 = \\mu + 3\\sigma", explanation: "With \\( \\mu = 500 \\) and \\( \\sigma = 20 \\), the interval is \\( \\mu \\pm 3\\sigma \\)." },
        { stepNumber: 2, description: "Apply the empirical rule for three standard deviations.", workingLatex: "P(\\mu - 3\\sigma < X < \\mu + 3\\sigma) \\approx 0.997", explanation: "About \\( 99.7\\% \\) of values lie within three standard deviations of the mean." }
      ],
      finalAnswer: "\\( \\text{Proportion} \\approx 0.997\\ (99.7\\%) \\)",
      canonicalAnswer: "0.997",
    },
  },
  {
    id: "y2nm-018",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 18",
    difficulty: "Foundation",
    questionText: "The bell-shaped curve of a normal distribution \\( X \\sim \\mathrm{N}(\\mu,\\ \\sigma^2) \\) has two points of inflection. State, in terms of \\( \\mu \\) and \\( \\sigma \\), where these points occur and explain what they represent about the distribution.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-distribution", "interpretation", "points-of-inflection"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the location of the points of inflection.", workingLatex: "x = \\mu - \\sigma \\quad \\text{and} \\quad x = \\mu + \\sigma", explanation: "For any normal curve the inflection points are exactly one standard deviation either side of the mean." },
        { stepNumber: 2, description: "Explain their meaning.", workingLatex: "x = \\mu \\pm \\sigma", explanation: "They mark where the curve changes from bending downwards (concave) to bending upwards (convex); their distance from \\( \\mu \\) shows the spread, so a larger \\( \\sigma \\) places them further apart." }
      ],
      finalAnswer: "\\( x = \\mu \\pm \\sigma \\)",
      canonicalAnswer: "x = mu ± sigma",
    },
  },
  {
    id: "y2nm-019",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 19",
    difficulty: "Foundation",
    questionText: "The masses of apples (in grams) are modelled by \\( X \\sim \\mathrm{N}(50,\\ 4^2) \\). In a crate of \\( 200 \\) apples, estimate the number of apples with a mass greater than \\( 58\\ \\mathrm{g} \\).",
    questionMafs: `<Mafs viewBox={{ x: [34, 66], y: [-0.016, 0.1177] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 4 }} yAxis={{ lines: false }} />
  <Polygon points={[[58,0.0135],[58.1667,0.0124],[58.3333,0.0114],[58.5,0.0104],[58.6667,0.0095],[58.8333,0.0087],[59,0.0079],[59.1667,0.0072],[59.3333,0.0066],[59.5,0.0059],[59.6667,0.0054],[59.8333,0.0049],[60,0.0044],[60.1667,0.0039],[60.3333,0.0035],[60.5,0.0032],[60.6667,0.0028],[60.8333,0.0025],[61,0.0023],[61.1667,0.002],[61.3333,0.0018],[61.5,0.0016],[61.6667,0.0014],[61.8333,0.0013],[62,0.0011],[62.1667,0.001],[62.3333,0.0009],[62.5,0.0008],[62.6667,0.0007],[62.8333,0.0006],[63,0.0005],[63.1667,0.0004],[63.3333,0.0004],[63.5,0.0003],[63.6667,0.0003],[63.8333,0.0003],[64,0.0002],[64.1667,0.0002],[64.3333,0.0002],[64.5,0.0001],[64.6667,0.0001],[64.8333,0.0001],[65,0.0001],[65.1667,0.0001],[65.3333,0.0001],[65.5,0.0001],[65.6667,0],[65.8333,0],[66,0],[66,0],[58,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-50)**2)/(2*4*4))/(4*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[50, 0]} point2={[50, 0.0997]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[58, 0]} point2={[58, 0.0135]} color="var(--mafs-fg-orange)" />
  <Text x={50} y={0.1094} attach="n">μ = 50</Text>
  <Text x={58} y={-0.008} attach="s">58</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-distribution", "expected-count", "greater-than"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise the boundary.", workingLatex: "z = \\dfrac{58 - 50}{4} = 2", explanation: "Subtract \\( \\mu = 50 \\) and divide by \\( \\sigma = 4 \\)." },
        { stepNumber: 2, description: "Find the probability.", workingLatex: "P(X > 58) = 1 - \\Phi(2) = 1 - 0.9772 = 0.0228", explanation: "An upper tail is \\( 1 \\) minus the cumulative value at \\( z = 2 \\)." },
        { stepNumber: 3, description: "Multiply by the number of apples.", workingLatex: "200 \\times 0.0228 = 4.56 \\approx 5", explanation: "The expected count is \\( n \\times P \\), rounded to a whole number of apples." }
      ],
      finalAnswer: "\\( \\text{About } 5 \\text{ apples} \\)",
      canonicalAnswer: "5",
    },
  },
  {
    id: "y2nm-020",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 20",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim \\mathrm{N}(60,\\ 5^2) \\). Find the value of \\( x \\) such that \\( P(X < x) = 0.90 \\), giving your answer to 2 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [40, 80], y: [-0.0128, 0.0942] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 5 }} yAxis={{ lines: false }} />
  <Polygon points={[[40,0],[40.5502,0],[41.1004,0.0001],[41.6506,0.0001],[42.2008,0.0001],[42.751,0.0002],[43.3012,0.0003],[43.8515,0.0004],[44.4017,0.0006],[44.9519,0.0009],[45.5021,0.0012],[46.0523,0.0016],[46.6025,0.0022],[47.1527,0.0029],[47.7029,0.0039],[48.2531,0.0051],[48.8033,0.0065],[49.3535,0.0083],[49.9038,0.0104],[50.454,0.0129],[51.0042,0.0158],[51.5544,0.0192],[52.1046,0.0229],[52.6548,0.0271],[53.205,0.0317],[53.7552,0.0366],[54.3054,0.0417],[54.8556,0.047],[55.4058,0.0523],[55.956,0.0575],[56.5063,0.0625],[57.0565,0.0671],[57.6067,0.0712],[58.1569,0.0745],[58.7071,0.0772],[59.2573,0.0789],[59.8075,0.0797],[60.3577,0.0796],[60.9079,0.0785],[61.4581,0.0765],[62.0083,0.0736],[62.5585,0.07],[63.1088,0.0658],[63.659,0.061],[64.2092,0.056],[64.7594,0.0507],[65.3096,0.0454],[65.8598,0.0402],[66.41,0.0351],[66.41,0],[40,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-60)**2)/(2*5*5))/(5*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[60, 0]} point2={[60, 0.0798]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[66.41, 0]} point2={[66.41, 0.0351]} color="var(--mafs-fg-orange)" />
  <Text x={60} y={0.0876} attach="n">μ = 60</Text>
  <Text x={66.41} y={-0.0064} attach="s">66.41</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-distribution", "inverse", "standardising-reverse"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the z-value for the given probability.", workingLatex: "\\Phi(z) = 0.90 \\ \\Rightarrow\\ z = 1.2816", explanation: "Use the inverse normal: the z-value with \\( 0.90 \\) of the area below it." },
        { stepNumber: 2, description: "Reverse the standardisation.", workingLatex: "x = \\mu + z\\sigma = 60 + 1.2816 \\times 5", explanation: "Rearranging \\( z = \\dfrac{x - \\mu}{\\sigma} \\) gives \\( x = \\mu + z\\sigma \\)." },
        { stepNumber: 3, description: "Evaluate.", workingLatex: "x = 60 + 6.408 = 66.41", explanation: "Compute the product and add to the mean." }
      ],
      finalAnswer: "\\( x = 66.41 \\)",
      canonicalAnswer: "66.41",
    },
  },
  {
    id: "y2nm-021",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 21",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim \\mathrm{N}(75,\\ 6^2) \\). Find the value of \\( x \\) such that \\( P(X > x) = 0.10 \\), giving your answer to 2 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [51, 99], y: [-0.0106, 0.0785] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 6 }} yAxis={{ lines: false }} />
  <Polygon points={[[82.69,0.0292],[83.0298,0.0272],[83.3696,0.0251],[83.7094,0.0232],[84.0492,0.0213],[84.389,0.0195],[84.7287,0.0179],[85.0685,0.0163],[85.4083,0.0148],[85.7481,0.0134],[86.0879,0.0121],[86.4277,0.0108],[86.7675,0.0097],[87.1073,0.0087],[87.4471,0.0077],[87.7869,0.0069],[88.1267,0.0061],[88.4665,0.0054],[88.8063,0.0047],[89.146,0.0041],[89.4858,0.0036],[89.8256,0.0031],[90.1654,0.0027],[90.5052,0.0024],[90.845,0.002],[91.1848,0.0017],[91.5246,0.0015],[91.8644,0.0013],[92.2042,0.0011],[92.544,0.0009],[92.8837,0.0008],[93.2235,0.0007],[93.5633,0.0006],[93.9031,0.0005],[94.2429,0.0004],[94.5827,0.0003],[94.9225,0.0003],[95.2623,0.0002],[95.6021,0.0002],[95.9419,0.0002],[96.2817,0.0001],[96.6215,0.0001],[96.9613,0.0001],[97.301,0.0001],[97.6408,0.0001],[97.9806,0],[98.3204,0],[98.6602,0],[99,0],[99,0],[82.69,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-75)**2)/(2*6*6))/(6*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[75, 0]} point2={[75, 0.0665]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[82.69, 0]} point2={[82.69, 0.0292]} color="var(--mafs-fg-orange)" />
  <Text x={75} y={0.073} attach="n">μ = 75</Text>
  <Text x={82.69} y={-0.0053} attach="s">82.69</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-distribution", "inverse", "standardising-reverse", "greater-than"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Convert the upper tail to a cumulative probability.", workingLatex: "P(X > x) = 0.10 \\ \\Rightarrow\\ P(X < x) = 0.90", explanation: "The total area is \\( 1 \\), so below \\( x \\) there is \\( 1 - 0.10 = 0.90 \\)." },
        { stepNumber: 2, description: "Find the z-value.", workingLatex: "\\Phi(z) = 0.90 \\ \\Rightarrow\\ z = 1.2816", explanation: "Use the inverse normal for a cumulative probability of \\( 0.90 \\)." },
        { stepNumber: 3, description: "Reverse the standardisation and evaluate.", workingLatex: "x = 75 + 1.2816 \\times 6 = 82.69", explanation: "Apply \\( x = \\mu + z\\sigma \\) with \\( \\mu = 75 \\) and \\( \\sigma = 6 \\)." }
      ],
      finalAnswer: "\\( x = 82.69 \\)",
      canonicalAnswer: "82.69",
    },
  },
  {
    id: "y2nm-022",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 22",
    difficulty: "Foundation",
    questionText: "The test scores of \\( 500 \\) students are modelled by \\( X \\sim \\mathrm{N}(75,\\ 4^2) \\). Estimate the number of students scoring between \\( 70 \\) and \\( 80 \\).",
    questionMafs: `<Mafs viewBox={{ x: [59, 91], y: [-0.016, 0.1177] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 4 }} yAxis={{ lines: false }} />
  <Polygon points={[[70,0.0457],[70.2083,0.0487],[70.4167,0.0517],[70.625,0.0548],[70.8333,0.058],[71.0417,0.0611],[71.25,0.0643],[71.4583,0.0674],[71.6667,0.0705],[71.875,0.0735],[72.0833,0.0765],[72.2917,0.0793],[72.5,0.082],[72.7083,0.0846],[72.9167,0.0871],[73.125,0.0894],[73.3333,0.0914],[73.5417,0.0933],[73.75,0.095],[73.9583,0.0964],[74.1667,0.0976],[74.375,0.0985],[74.5833,0.0992],[74.7917,0.0996],[75,0.0997],[75.2083,0.0996],[75.4167,0.0992],[75.625,0.0985],[75.8333,0.0976],[76.0417,0.0964],[76.25,0.095],[76.4583,0.0933],[76.6667,0.0914],[76.875,0.0894],[77.0833,0.0871],[77.2917,0.0846],[77.5,0.082],[77.7083,0.0793],[77.9167,0.0765],[78.125,0.0735],[78.3333,0.0705],[78.5417,0.0674],[78.75,0.0643],[78.9583,0.0611],[79.1667,0.058],[79.375,0.0548],[79.5833,0.0517],[79.7917,0.0487],[80,0.0457],[80,0],[70,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-75)**2)/(2*4*4))/(4*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[75, 0]} point2={[75, 0.0997]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[70, 0]} point2={[70, 0.0457]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[80, 0]} point2={[80, 0.0457]} color="var(--mafs-fg-orange)" />
  <Text x={75} y={0.1094} attach="n">μ = 75</Text>
  <Text x={70} y={-0.008} attach="s">70</Text>
  <Text x={80} y={-0.008} attach="s">80</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-distribution", "expected-count", "between"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise both boundaries.", workingLatex: "z_1 = \\dfrac{70 - 75}{4} = -1.25, \\qquad z_2 = \\dfrac{80 - 75}{4} = 1.25", explanation: "Subtract \\( \\mu = 75 \\) and divide by \\( \\sigma = 4 \\) for each boundary." },
        { stepNumber: 2, description: "Find the probability.", workingLatex: "P(70 < X < 80) = \\Phi(1.25) - \\Phi(-1.25) = 0.7887", explanation: "Subtract the two cumulative values to get the area between." },
        { stepNumber: 3, description: "Multiply by the number of students.", workingLatex: "500 \\times 0.7887 = 394.35 \\approx 394", explanation: "The expected count is \\( n \\times P \\), rounded to a whole number of students." }
      ],
      finalAnswer: "\\( \\text{About } 394 \\text{ students} \\)",
      canonicalAnswer: "394",
    },
  },
  {
    id: "y2nm-023",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 23",
    difficulty: "Standard",
    questionText: "The heights of adult men in a population are modelled by a Normal distribution \\( X \\sim \\mathrm{N}(175,\\,8^2) \\), where \\( X \\) is the height in \\( \\mathrm{cm} \\). Find, to the nearest \\( \\mathrm{cm} \\), the height \\( a \\) exceeded by only the tallest \\( 10\\% \\) of men, i.e. the value \\( a \\) for which \\( P(X<a)=0.90 \\).",
    questionMafs: `<Mafs viewBox={{ x: [143, 207], y: [-0.008, 0.0588] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 8 }} yAxis={{ lines: false }} />
  <Polygon points={[[143,0],[143.875,0],[144.75,0],[145.625,0.0001],[146.5,0.0001],[147.375,0.0001],[148.25,0.0002],[149.125,0.0003],[150,0.0004],[150.875,0.0005],[151.75,0.0007],[152.625,0.001],[153.5,0.0013],[154.375,0.0018],[155.25,0.0024],[156.125,0.0031],[157,0.004],[157.875,0.005],[158.75,0.0063],[159.625,0.0079],[160.5,0.0096],[161.375,0.0117],[162.25,0.014],[163.125,0.0166],[164,0.0194],[164.875,0.0224],[165.75,0.0256],[166.625,0.0288],[167.5,0.0321],[168.375,0.0354],[169.25,0.0385],[170.125,0.0414],[171,0.044],[171.875,0.0462],[172.75,0.0479],[173.625,0.0491],[174.5,0.0498],[175.375,0.0498],[176.25,0.0493],[177.125,0.0481],[178,0.0465],[178.875,0.0443],[179.75,0.0418],[180.625,0.0389],[181.5,0.0358],[182.375,0.0326],[183.25,0.0293],[184.125,0.026],[185,0.0228],[185,0],[143,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-175)**2)/(2*8*8))/(8*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[175, 0]} point2={[175, 0.0499]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[185, 0]} point2={[185, 0.0228]} color="var(--mafs-fg-orange)" />
  <Text x={175} y={0.0547} attach="n">μ = 175</Text>
  <Text x={185} y={-0.004} attach="s">185</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "inverse-normal", "percentile", "context-heights"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the required z-value for the 90th percentile.", workingLatex: "z=\\Phi^{-1}(0.90)=1.2816", explanation: "Since \\(P(X<a)=0.90\\), the standardised boundary is the value of \\(z\\) with \\(P(Z<z)=0.90\\)." },
        { stepNumber: 2, description: "Write the unstandardising equation \\(a=\\mu+z\\sigma\\).", workingLatex: "a=175+1.2816\\times 8", explanation: "Convert the z-value back to the original scale using the mean \\(\\mu=175\\) and standard deviation \\(\\sigma=8\\)." },
        { stepNumber: 3, description: "Evaluate and round to the nearest \\(\\mathrm{cm}\\).", workingLatex: "a=185.25\\approx 185\\ \\mathrm{cm}", explanation: "About \\(10\\%\\) of men are taller than \\(185\\ \\mathrm{cm}\\)." }
      ],
      finalAnswer: "\\( a\\approx 185\\,\\mathrm{cm} \\)",
    },
  },
  {
    id: "y2nm-024",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 24",
    difficulty: "Standard",
    questionText: "The mass of flour, in grams, dispensed by a machine into bags is modelled by \\( X \\sim \\mathrm{N}(500,\\,12^2) \\). Find, to \\( 1 \\) decimal place, the value \\( a \\) such that \\( P(X>a)=0.05 \\).",
    questionMafs: `<Mafs viewBox={{ x: [452, 548], y: [-0.0053, 0.0392] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 12 }} yAxis={{ lines: false }} />
  <Polygon points={[[519.7,0.0086],[520.2896,0.008],[520.8792,0.0073],[521.4688,0.0067],[522.0583,0.0061],[522.6479,0.0056],[523.2375,0.0051],[523.8271,0.0046],[524.4167,0.0042],[525.0063,0.0038],[525.5958,0.0034],[526.1854,0.0031],[526.775,0.0028],[527.3646,0.0025],[527.9542,0.0022],[528.5438,0.002],[529.1333,0.0017],[529.7229,0.0015],[530.3125,0.0014],[530.9021,0.0012],[531.4917,0.0011],[532.0813,0.0009],[532.6708,0.0008],[533.2604,0.0007],[533.85,0.0006],[534.4396,0.0005],[535.0292,0.0005],[535.6188,0.0004],[536.2083,0.0004],[536.7979,0.0003],[537.3875,0.0003],[537.9771,0.0002],[538.5667,0.0002],[539.1563,0.0002],[539.7458,0.0001],[540.3354,0.0001],[540.925,0.0001],[541.5146,0.0001],[542.1042,0.0001],[542.6938,0.0001],[543.2833,0],[543.8729,0],[544.4625,0],[545.0521,0],[545.6417,0],[546.2313,0],[546.8208,0],[547.4104,0],[548,0],[548,0],[519.7,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-500)**2)/(2*12*12))/(12*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[500, 0]} point2={[500, 0.0332]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[519.7, 0]} point2={[519.7, 0.0086]} color="var(--mafs-fg-orange)" />
  <Text x={500} y={0.0365} attach="n">μ = 500</Text>
  <Text x={519.7} y={-0.0027} attach="s">519.7</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "inverse-normal", "threshold", "context-mass"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Convert the upper-tail probability to a less-than probability.", workingLatex: "P(X>a)=0.05\\ \\Rightarrow\\ P(X<a)=0.95", explanation: "The total probability is \\(1\\), so the area below \\(a\\) is \\(1-0.05=0.95\\)." },
        { stepNumber: 2, description: "Find the z-value for the 95th percentile, then unstandardise.", workingLatex: "z=\\Phi^{-1}(0.95)=1.6449,\\quad a=500+1.6449\\times 12", explanation: "Use \\(a=\\mu+z\\sigma\\) with \\(\\mu=500\\) and \\(\\sigma=12\\)." },
        { stepNumber: 3, description: "Evaluate and round to \\(1\\) d.p.", workingLatex: "a=519.74\\approx 519.7\\ \\mathrm{g}", explanation: "Only \\(5\\%\\) of bags exceed \\(519.7\\ \\mathrm{g}\\)." }
      ],
      finalAnswer: "\\( a\\approx 519.7\\,\\mathrm{g} \\)",
    },
  },
  {
    id: "y2nm-025",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 25",
    difficulty: "Standard",
    questionText: "The time, in minutes, taken by athletes to complete a training circuit is modelled by \\( X \\sim \\mathrm{N}(42,\\,6^2) \\). Find the lower quartile of these times, giving your answer to \\( 1 \\) decimal place.",
    questionMafs: `<Mafs viewBox={{ x: [18, 66], y: [-0.0106, 0.0785] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 6 }} yAxis={{ lines: false }} />
  <Polygon points={[[18,0],[18.4167,0],[18.8333,0],[19.25,0.0001],[19.6667,0.0001],[20.0833,0.0001],[20.5,0.0001],[20.9167,0.0001],[21.3333,0.0002],[21.75,0.0002],[22.1667,0.0003],[22.5833,0.0004],[23,0.0004],[23.4167,0.0005],[23.8333,0.0007],[24.25,0.0008],[24.6667,0.001],[25.0833,0.0012],[25.5,0.0015],[25.9167,0.0018],[26.3333,0.0022],[26.75,0.0026],[27.1667,0.0031],[27.5833,0.0037],[28,0.0044],[28.4167,0.0051],[28.8333,0.006],[29.25,0.007],[29.6667,0.008],[30.0833,0.0093],[30.5,0.0106],[30.9167,0.0121],[31.3333,0.0137],[31.75,0.0155],[32.1667,0.0174],[32.5833,0.0194],[33,0.0216],[33.4167,0.0239],[33.8333,0.0263],[34.25,0.0289],[34.6667,0.0315],[35.0833,0.0342],[35.5,0.037],[35.9167,0.0398],[36.3333,0.0426],[36.75,0.0453],[37.1667,0.0481],[37.5833,0.0507],[38,0.0532],[38,0],[18,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-42)**2)/(2*6*6))/(6*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[42, 0]} point2={[42, 0.0665]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[38, 0]} point2={[38, 0.0532]} color="var(--mafs-fg-orange)" />
  <Text x={42} y={0.073} attach="n">μ = 42</Text>
  <Text x={38} y={-0.0053} attach="s">38</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "inverse-normal", "lower-quartile", "context-time"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the probability defining the lower quartile.", workingLatex: "P(X<a)=0.25", explanation: "The lower quartile \\(Q_1\\) is the value with a quarter of the distribution below it." },
        { stepNumber: 2, description: "Find the z-value, then unstandardise.", workingLatex: "z=\\Phi^{-1}(0.25)=-0.6745,\\quad a=42+(-0.6745)\\times 6", explanation: "The negative z reflects that \\(Q_1\\) lies below the mean; apply \\(a=\\mu+z\\sigma\\)." },
        { stepNumber: 3, description: "Evaluate and round to \\(1\\) d.p.", workingLatex: "a=37.95\\approx 38.0\\ \\mathrm{minutes}", explanation: "A quarter of athletes finish within about \\(38.0\\ \\mathrm{minutes}\\)." }
      ],
      finalAnswer: "\\( Q_1\\approx 38.0\\,\\mathrm{minutes} \\)",
    },
  },
  {
    id: "y2nm-026",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 26",
    difficulty: "Standard",
    questionText: "The marks scored by candidates in an examination are modelled by \\( X \\sim \\mathrm{N}(58,\\,14^2) \\). A distinction is awarded to the top \\( 10\\% \\) of candidates. Find, to the nearest mark, the lowest mark that earns a distinction.",
    questionMafs: `<Mafs viewBox={{ x: [2, 114], y: [-0.0046, 0.0336] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 14 }} yAxis={{ lines: false }} />
  <Polygon points={[[76,0.0125],[76.7917,0.0116],[77.5833,0.0107],[78.375,0.0099],[79.1667,0.0091],[79.9583,0.0083],[80.75,0.0076],[81.5417,0.0069],[82.3333,0.0063],[83.125,0.0057],[83.9167,0.0051],[84.7083,0.0046],[85.5,0.0041],[86.2917,0.0037],[87.0833,0.0033],[87.875,0.0029],[88.6667,0.0026],[89.4583,0.0023],[90.25,0.002],[91.0417,0.0018],[91.8333,0.0015],[92.625,0.0013],[93.4167,0.0012],[94.2083,0.001],[95,0.0009],[95.7917,0.0007],[96.5833,0.0006],[97.375,0.0005],[98.1667,0.0005],[98.9583,0.0004],[99.75,0.0003],[100.5417,0.0003],[101.3333,0.0002],[102.125,0.0002],[102.9167,0.0002],[103.7083,0.0001],[104.5,0.0001],[105.2917,0.0001],[106.0833,0.0001],[106.875,0.0001],[107.6667,0.0001],[108.4583,0],[109.25,0],[110.0417,0],[110.8333,0],[111.625,0],[112.4167,0],[113.2083,0],[114,0],[114,0],[76,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-58)**2)/(2*14*14))/(14*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[58, 0]} point2={[58, 0.0285]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[76, 0]} point2={[76, 0.0125]} color="var(--mafs-fg-orange)" />
  <Text x={58} y={0.0313} attach="n">μ = 58</Text>
  <Text x={76} y={-0.0023} attach="s">76</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "inverse-normal", "top-percentage", "context-exam-marks"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Express the distinction boundary as a probability.", workingLatex: "P(X>a)=0.10\\ \\Rightarrow\\ P(X<a)=0.90", explanation: "The top \\(10\\%\\) lie above \\(a\\), so \\(90\\%\\) lie below it." },
        { stepNumber: 2, description: "Find the z-value for the 90th percentile and unstandardise.", workingLatex: "z=\\Phi^{-1}(0.90)=1.2816,\\quad a=58+1.2816\\times 14", explanation: "Use \\(a=\\mu+z\\sigma\\) with \\(\\mu=58\\) and \\(\\sigma=14\\)." },
        { stepNumber: 3, description: "Evaluate and round to the nearest mark.", workingLatex: "a=75.94\\approx 76\\ \\mathrm{marks}", explanation: "A candidate needs at least \\(76\\) marks for a distinction." }
      ],
      finalAnswer: "\\( a\\approx 76\\,\\mathrm{marks} \\)",
    },
  },
  {
    id: "y2nm-027",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 27",
    difficulty: "Standard",
    questionText: "The lengths, in centimetres, of metal rods produced by a factory are modelled by \\( X \\sim \\mathrm{N}(20,\\,2.5^2) \\). The shortest \\( 15\\% \\) of rods are rejected. Find, to \\( 2 \\) decimal places, the greatest length of a rejected rod.",
    questionMafs: `<Mafs viewBox={{ x: [10, 30], y: [-0.0255, 0.1883] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 2.5 }} yAxis={{ lines: false }} />
  <Polygon points={[[10,0.0001],[10.1544,0.0001],[10.3088,0.0001],[10.4631,0.0001],[10.6175,0.0001],[10.7719,0.0002],[10.9263,0.0002],[11.0806,0.0003],[11.235,0.0003],[11.3894,0.0004],[11.5438,0.0005],[11.6981,0.0006],[11.8525,0.0008],[12.0069,0.001],[12.1613,0.0012],[12.3156,0.0014],[12.47,0.0017],[12.6244,0.0021],[12.7788,0.0025],[12.9331,0.0029],[13.0875,0.0035],[13.2419,0.0041],[13.3963,0.0049],[13.5506,0.0057],[13.705,0.0067],[13.8594,0.0078],[14.0138,0.0091],[14.1681,0.0105],[14.3225,0.0121],[14.4769,0.0139],[14.6313,0.0159],[14.7856,0.0181],[14.94,0.0206],[15.0944,0.0233],[15.2488,0.0262],[15.4031,0.0294],[15.5575,0.0329],[15.7119,0.0367],[15.8663,0.0407],[16.0206,0.045],[16.175,0.0495],[16.3294,0.0543],[16.4838,0.0593],[16.6381,0.0646],[16.7925,0.0701],[16.9469,0.0757],[17.1013,0.0815],[17.2556,0.0874],[17.41,0.0933],[17.41,0],[10,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-20)**2)/(2*2.5*2.5))/(2.5*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[20, 0]} point2={[20, 0.1596]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[17.41, 0]} point2={[17.41, 0.0933]} color="var(--mafs-fg-orange)" />
  <Text x={20} y={0.1751} attach="n">μ = 20</Text>
  <Text x={17.41} y={-0.0128} attach="s">17.41</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "inverse-normal", "bottom-percentage", "context-length"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the probability for the rejection boundary.", workingLatex: "P(X<a)=0.15", explanation: "The shortest \\(15\\%\\) lie below the cut-off length \\(a\\)." },
        { stepNumber: 2, description: "Find the z-value and unstandardise.", workingLatex: "z=\\Phi^{-1}(0.15)=-1.0364,\\quad a=20+(-1.0364)\\times 2.5", explanation: "The boundary is below the mean, so \\(z\\) is negative; apply \\(a=\\mu+z\\sigma\\)." },
        { stepNumber: 3, description: "Evaluate and round to \\(2\\) d.p.", workingLatex: "a=17.409\\approx 17.41\\ \\mathrm{cm}", explanation: "Rods of length up to \\(17.41\\ \\mathrm{cm}\\) are rejected." }
      ],
      finalAnswer: "\\( a\\approx 17.41\\,\\mathrm{cm} \\)",
    },
  },
  {
    id: "y2nm-028",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 28",
    difficulty: "Standard",
    questionText: "The time, in seconds, taken for a chemical reaction to complete is modelled by \\( X \\sim \\mathrm{N}(68,\\,3^2) \\). Find \\( P(65<X<70) \\), giving your answer to \\( 4 \\) decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [56, 80], y: [-0.0213, 0.1569] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 3 }} yAxis={{ lines: false }} />
  <Polygon points={[[65,0.0807],[65.1042,0.0835],[65.2083,0.0862],[65.3125,0.089],[65.4167,0.0918],[65.5208,0.0945],[65.625,0.0972],[65.7292,0.0999],[65.8333,0.1025],[65.9375,0.105],[66.0417,0.1075],[66.1458,0.1099],[66.25,0.1122],[66.3542,0.1144],[66.4583,0.1165],[66.5625,0.1186],[66.6667,0.1205],[66.7708,0.1223],[66.875,0.124],[66.9792,0.1255],[67.0833,0.1269],[67.1875,0.1282],[67.2917,0.1293],[67.3958,0.1303],[67.5,0.1311],[67.6042,0.1318],[67.7083,0.1324],[67.8125,0.1327],[67.9167,0.1329],[68.0208,0.133],[68.125,0.1329],[68.2292,0.1326],[68.3333,0.1322],[68.4375,0.1316],[68.5417,0.1308],[68.6458,0.1299],[68.75,0.1289],[68.8542,0.1277],[68.9583,0.1264],[69.0625,0.1249],[69.1667,0.1233],[69.2708,0.1216],[69.375,0.1197],[69.4792,0.1178],[69.5833,0.1157],[69.6875,0.1135],[69.7917,0.1113],[69.8958,0.1089],[70,0.1065],[70,0],[65,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-68)**2)/(2*3*3))/(3*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[68, 0]} point2={[68, 0.133]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[65, 0]} point2={[65, 0.0807]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[70, 0]} point2={[70, 0.1065]} color="var(--mafs-fg-orange)" />
  <Text x={68} y={0.1459} attach="n">μ = 68</Text>
  <Text x={65} y={-0.0106} attach="s">65</Text>
  <Text x={70} y={-0.0106} attach="s">70</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "probability-between", "context-time"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise both boundaries.", workingLatex: "z_1=\\frac{65-68}{3}=-1,\\quad z_2=\\frac{70-68}{3}=0.6667", explanation: "Use \\(Z=\\dfrac{X-\\mu}{\\sigma}\\) to convert each \\(x\\)-value to a z-value." },
        { stepNumber: 2, description: "Write the probability as a difference of cumulative probabilities.", workingLatex: "P(65<X<70)=\\Phi(0.6667)-\\Phi(-1)", explanation: "The area between two values is the larger cumulative area minus the smaller." },
        { stepNumber: 3, description: "Evaluate.", workingLatex: "=0.7475-0.1587=0.5889", explanation: "About \\(58.89\\%\\) of reactions finish between \\(65\\) and \\(70\\ \\mathrm{seconds}\\)." }
      ],
      finalAnswer: "\\( P(65<X<70)=0.5889 \\)",
    },
  },
  {
    id: "y2nm-029",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 29",
    difficulty: "Standard",
    questionText: "The volume of juice, in millilitres, dispensed into cartons is modelled by \\( X \\sim \\mathrm{N}(350,\\,20^2) \\). A carton is underfilled if it contains less than \\( 340\\ \\mathrm{ml} \\). In a batch of \\( 200 \\) cartons, find the expected number that are underfilled.",
    questionMafs: `<Mafs viewBox={{ x: [270, 430], y: [-0.0032, 0.0235] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 20 }} yAxis={{ lines: false }} />
  <Polygon points={[[270,0],[271.4583,0],[272.9167,0],[274.375,0],[275.8333,0],[277.2917,0],[278.75,0],[280.2083,0],[281.6667,0.0001],[283.125,0.0001],[284.5833,0.0001],[286.0417,0.0001],[287.5,0.0002],[288.9583,0.0002],[290.4167,0.0002],[291.875,0.0003],[293.3333,0.0004],[294.7917,0.0004],[296.25,0.0005],[297.7083,0.0007],[299.1667,0.0008],[300.625,0.0009],[302.0833,0.0011],[303.5417,0.0013],[305,0.0016],[306.4583,0.0019],[307.9167,0.0022],[309.375,0.0025],[310.8333,0.0029],[312.2917,0.0034],[313.75,0.0039],[315.2083,0.0044],[316.6667,0.005],[318.125,0.0056],[319.5833,0.0063],[321.0417,0.007],[322.5,0.0078],[323.9583,0.0085],[325.4167,0.0094],[326.875,0.0102],[328.3333,0.0111],[329.7917,0.012],[331.25,0.0129],[332.7083,0.0137],[334.1667,0.0146],[335.625,0.0154],[337.0833,0.0162],[338.5417,0.0169],[340,0.0176],[340,0],[270,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-350)**2)/(2*20*20))/(20*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[350, 0]} point2={[350, 0.0199]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[340, 0]} point2={[340, 0.0176]} color="var(--mafs-fg-orange)" />
  <Text x={350} y={0.0219} attach="n">μ = 350</Text>
  <Text x={340} y={-0.0016} attach="s">340</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "expected-number", "context-volume"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise the threshold and find the probability.", workingLatex: "z=\\frac{340-350}{20}=-0.5,\\quad P(X<340)=\\Phi(-0.5)=0.3085", explanation: "Convert \\(340\\) to a z-value, then read the cumulative probability." },
        { stepNumber: 2, description: "Multiply the probability by the number of cartons.", workingLatex: "200\\times 0.3085=61.71", explanation: "Expected number \\(=n\\times P\\) for a sample of \\(n=200\\)." },
        { stepNumber: 3, description: "State the expected number.", workingLatex: "\\approx 62\\ \\mathrm{cartons}", explanation: "About \\(62\\) cartons in the batch are expected to be underfilled." }
      ],
      finalAnswer: "\\( \\approx 62\\text{ cartons} \\)",
    },
  },
  {
    id: "y2nm-030",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 30",
    difficulty: "Standard",
    questionText: "The mass, in kilograms, of newborn lambs on a farm is modelled by \\( X \\sim \\mathrm{N}(12.4,\\,1.8^2) \\). Find the upper quartile of these masses, giving your answer to \\( 2 \\) decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [5.2, 19.6], y: [-0.0355, 0.2615] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 1.8 }} yAxis={{ lines: false }} />
  <Polygon points={[[5.2,0.0001],[5.3752,0.0001],[5.5504,0.0002],[5.7256,0.0002],[5.9008,0.0003],[6.076,0.0005],[6.2513,0.0006],[6.4265,0.0009],[6.6017,0.0012],[6.7769,0.0017],[6.9521,0.0023],[7.1273,0.003],[7.3025,0.004],[7.4777,0.0053],[7.6529,0.0068],[7.8281,0.0088],[8.0033,0.0112],[8.1785,0.0142],[8.3538,0.0177],[8.529,0.0219],[8.7042,0.0269],[8.8794,0.0327],[9.0546,0.0394],[9.2298,0.047],[9.405,0.0555],[9.5802,0.065],[9.7554,0.0753],[9.9306,0.0865],[10.1058,0.0984],[10.281,0.1108],[10.4563,0.1237],[10.6315,0.1368],[10.8067,0.1498],[10.9819,0.1625],[11.1571,0.1746],[11.3323,0.1859],[11.5075,0.196],[11.6827,0.2047],[11.8579,0.2118],[12.0331,0.2171],[12.2083,0.2204],[12.3835,0.2216],[12.5588,0.2208],[12.734,0.2179],[12.9092,0.2129],[13.0844,0.2062],[13.2596,0.1978],[13.4348,0.1879],[13.61,0.1768],[13.61,0],[5.2,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-12.4)**2)/(2*1.8*1.8))/(1.8*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[12.4, 0]} point2={[12.4, 0.2216]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[13.61, 0]} point2={[13.61, 0.1768]} color="var(--mafs-fg-orange)" />
  <Text x={12.4} y={0.2432} attach="n">μ = 12.4</Text>
  <Text x={13.61} y={-0.0177} attach="s">13.61</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "inverse-normal", "upper-quartile", "context-mass"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the probability defining the upper quartile.", workingLatex: "P(X<a)=0.75", explanation: "The upper quartile \\(Q_3\\) has three-quarters of the distribution below it." },
        { stepNumber: 2, description: "Find the z-value and unstandardise.", workingLatex: "z=\\Phi^{-1}(0.75)=0.6745,\\quad a=12.4+0.6745\\times 1.8", explanation: "Apply \\(a=\\mu+z\\sigma\\) with \\(\\mu=12.4\\) and \\(\\sigma=1.8\\)." },
        { stepNumber: 3, description: "Evaluate and round to \\(2\\) d.p.", workingLatex: "a=13.614\\approx 13.61\\ \\mathrm{kg}", explanation: "A quarter of lambs weigh more than \\(13.61\\ \\mathrm{kg}\\)." }
      ],
      finalAnswer: "\\( Q_3\\approx 13.61\\,\\mathrm{kg} \\)",
    },
  },
  {
    id: "y2nm-031",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 31",
    difficulty: "Standard",
    questionText: "The mass, in kilograms, of bags of compost is modelled by \\( X \\sim \\mathrm{N}(2.5,\\,0.4^2) \\). Find the 80th percentile of the masses, giving your answer to \\( 2 \\) decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [0.9, 4.1], y: [-0.1596, 1.1769] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 0.4 }} yAxis={{ lines: false }} />
  <Polygon points={[[0.9,0.0003],[0.9404,0.0005],[0.9808,0.0007],[1.0213,0.0011],[1.0617,0.0016],[1.1021,0.0022],[1.1425,0.0031],[1.1829,0.0044],[1.2233,0.0061],[1.2638,0.0084],[1.3042,0.0114],[1.3446,0.0154],[1.385,0.0205],[1.4254,0.027],[1.4658,0.0353],[1.5062,0.0456],[1.5467,0.0583],[1.5871,0.0737],[1.6275,0.0924],[1.6679,0.1146],[1.7083,0.1407],[1.7487,0.171],[1.7892,0.2056],[1.8296,0.2448],[1.87,0.2885],[1.9104,0.3366],[1.9508,0.3886],[1.9912,0.4442],[2.0317,0.5025],[2.0721,0.5628],[2.1125,0.6238],[2.1529,0.6845],[2.1933,0.7434],[2.2337,0.7992],[2.2742,0.8504],[2.3146,0.8958],[2.355,0.9339],[2.3954,0.9638],[2.4358,0.9846],[2.4763,0.9956],[2.5167,0.9965],[2.5571,0.9873],[2.5975,0.9682],[2.6379,0.9398],[2.6783,0.903],[2.7188,0.8588],[2.7592,0.8085],[2.7996,0.7534],[2.84,0.695],[2.84,0],[0.9,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-2.5)**2)/(2*0.4*0.4))/(0.4*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[2.5, 0]} point2={[2.5, 0.9974]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[2.84, 0]} point2={[2.84, 0.695]} color="var(--mafs-fg-orange)" />
  <Text x={2.5} y={1.0945} attach="n">μ = 2.5</Text>
  <Text x={2.84} y={-0.0798} attach="s">2.84</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "inverse-normal", "percentile", "context-mass"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the probability for the 80th percentile.", workingLatex: "P(X<a)=0.80", explanation: "The 80th percentile is the value with \\(80\\%\\) of the distribution below it." },
        { stepNumber: 2, description: "Find the z-value and unstandardise.", workingLatex: "z=\\Phi^{-1}(0.80)=0.8416,\\quad a=2.5+0.8416\\times 0.4", explanation: "Use \\(a=\\mu+z\\sigma\\) with \\(\\mu=2.5\\) and \\(\\sigma=0.4\\)." },
        { stepNumber: 3, description: "Evaluate and round to \\(2\\) d.p.", workingLatex: "a=2.837\\approx 2.84\\ \\mathrm{kg}", explanation: "\\(80\\%\\) of bags have a mass below \\(2.84\\ \\mathrm{kg}\\)." }
      ],
      finalAnswer: "\\( a\\approx 2.84\\,\\mathrm{kg} \\)",
    },
  },
  {
    id: "y2nm-032",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 32",
    difficulty: "Standard",
    questionText: "Scores on a standardised aptitude test are modelled by \\( X \\sim \\mathrm{N}(100,\\,15^2) \\). Find \\( P(112<X<130) \\), giving your answer to \\( 4 \\) decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [40, 160], y: [-0.0043, 0.0314] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 15 }} yAxis={{ lines: false }} />
  <Polygon points={[[112,0.0193],[112.375,0.0189],[112.75,0.0185],[113.125,0.0181],[113.5,0.0177],[113.875,0.0173],[114.25,0.0169],[114.625,0.0165],[115,0.0161],[115.375,0.0157],[115.75,0.0153],[116.125,0.0149],[116.5,0.0145],[116.875,0.0141],[117.25,0.0137],[117.625,0.0133],[118,0.0129],[118.375,0.0126],[118.75,0.0122],[119.125,0.0118],[119.5,0.0114],[119.875,0.0111],[120.25,0.0107],[120.625,0.0103],[121,0.01],[121.375,0.0096],[121.75,0.0093],[122.125,0.009],[122.5,0.0086],[122.875,0.0083],[123.25,0.008],[123.625,0.0077],[124,0.0074],[124.375,0.0071],[124.75,0.0068],[125.125,0.0065],[125.5,0.0063],[125.875,0.006],[126.25,0.0058],[126.625,0.0055],[127,0.0053],[127.375,0.005],[127.75,0.0048],[128.125,0.0046],[128.5,0.0044],[128.875,0.0042],[129.25,0.004],[129.625,0.0038],[130,0.0036],[130,0],[112,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-100)**2)/(2*15*15))/(15*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[100, 0]} point2={[100, 0.0266]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[112, 0]} point2={[112, 0.0193]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[130, 0]} point2={[130, 0.0036]} color="var(--mafs-fg-orange)" />
  <Text x={100} y={0.0292} attach="n">μ = 100</Text>
  <Text x={112} y={-0.0021} attach="s">112</Text>
  <Text x={130} y={-0.0021} attach="s">130</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "probability-between", "context-iq"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise both boundaries.", workingLatex: "z_1=\\frac{112-100}{15}=0.8,\\quad z_2=\\frac{130-100}{15}=2", explanation: "Convert each score to a z-value using \\(Z=\\dfrac{X-\\mu}{\\sigma}\\)." },
        { stepNumber: 2, description: "Write as a difference of cumulative probabilities.", workingLatex: "P(112<X<130)=\\Phi(2)-\\Phi(0.8)", explanation: "Subtract the smaller cumulative area from the larger one." },
        { stepNumber: 3, description: "Evaluate.", workingLatex: "=0.9772-0.7881=0.1891", explanation: "About \\(18.91\\%\\) of candidates score between \\(112\\) and \\(130\\)." }
      ],
      finalAnswer: "\\( P(112<X<130)=0.1891 \\)",
    },
  },
  {
    id: "y2nm-033",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 33",
    difficulty: "Standard",
    questionText: "The marks scored by \\( 2000 \\) candidates in a national test are modelled by \\( X \\sim \\mathrm{N}(512,\\,85^2) \\). A scholarship is offered to anyone scoring more than \\( 650 \\) marks. Estimate the number of candidates offered a scholarship.",
    questionMafs: `<Mafs viewBox={{ x: [172, 852], y: [-0.0008, 0.0055] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 85 }} yAxis={{ lines: false }} />
  <Polygon points={[[650,0.0013],[654.2083,0.0012],[658.4167,0.0011],[662.625,0.001],[666.8333,0.0009],[671.0417,0.0008],[675.25,0.0007],[679.4583,0.0007],[683.6667,0.0006],[687.875,0.0006],[692.0833,0.0005],[696.2917,0.0004],[700.5,0.0004],[704.7083,0.0004],[708.9167,0.0003],[713.125,0.0003],[717.3333,0.0003],[721.5417,0.0002],[725.75,0.0002],[729.9583,0.0002],[734.1667,0.0002],[738.375,0.0001],[742.5833,0.0001],[746.7917,0.0001],[751,0.0001],[755.2083,0.0001],[759.4167,0.0001],[763.625,0.0001],[767.8333,0.0001],[772.0417,0],[776.25,0],[780.4583,0],[784.6667,0],[788.875,0],[793.0833,0],[797.2917,0],[801.5,0],[805.7083,0],[809.9167,0],[814.125,0],[818.3333,0],[822.5417,0],[826.75,0],[830.9583,0],[835.1667,0],[839.375,0],[843.5833,0],[847.7917,0],[852,0],[852,0],[650,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-512)**2)/(2*85*85))/(85*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[512, 0]} point2={[512, 0.0047]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[650, 0]} point2={[650, 0.0013]} color="var(--mafs-fg-orange)" />
  <Text x={512} y={0.0052} attach="n">μ = 512</Text>
  <Text x={650} y={-0.0004} attach="s">650</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "expected-number", "upper-tail", "context-exam-marks"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise the threshold.", workingLatex: "z=\\frac{650-512}{85}=1.6235", explanation: "Convert \\(650\\) marks to a z-value using \\(Z=\\dfrac{X-\\mu}{\\sigma}\\)." },
        { stepNumber: 2, description: "Find the upper-tail probability.", workingLatex: "P(X>650)=1-\\Phi(1.6235)=0.0522", explanation: "The probability above the threshold is \\(1\\) minus the cumulative area below it." },
        { stepNumber: 3, description: "Multiply by the number of candidates.", workingLatex: "2000\\times 0.0522=104.5\\approx 104", explanation: "Expected number \\(=n\\times P\\); about \\(104\\) candidates qualify." }
      ],
      finalAnswer: "\\( \\approx 104\\text{ candidates} \\)",
    },
  },
  {
    id: "y2nm-034",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 34",
    difficulty: "Standard",
    questionText: "The daily maximum temperature, in \\( {}^{\\circ}\\mathrm{C} \\), at a resort in summer is modelled by \\( X \\sim \\mathrm{N}(24,\\,3^2) \\). On the hottest \\( 5\\% \\) of days the temperature exceeds \\( a\\ {}^{\\circ}\\mathrm{C} \\). Find \\( a \\) to \\( 1 \\) decimal place.",
    questionMafs: `<Mafs viewBox={{ x: [12, 36], y: [-0.0213, 0.1569] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 3 }} yAxis={{ lines: false }} />
  <Polygon points={[[28.9,0.035],[29.0479,0.0323],[29.1958,0.0297],[29.3438,0.0272],[29.4917,0.0249],[29.6396,0.0227],[29.7875,0.0207],[29.9354,0.0188],[30.0833,0.017],[30.2313,0.0154],[30.3792,0.0139],[30.5271,0.0125],[30.675,0.0112],[30.8229,0.01],[30.9708,0.0089],[31.1188,0.008],[31.2667,0.0071],[31.4146,0.0063],[31.5625,0.0055],[31.7104,0.0049],[31.8583,0.0043],[32.0063,0.0038],[32.1542,0.0033],[32.3021,0.0029],[32.45,0.0025],[32.5979,0.0022],[32.7458,0.0019],[32.8938,0.0016],[33.0417,0.0014],[33.1896,0.0012],[33.3375,0.001],[33.4854,0.0009],[33.6333,0.0008],[33.7813,0.0007],[33.9292,0.0006],[34.0771,0.0005],[34.225,0.0004],[34.3729,0.0003],[34.5208,0.0003],[34.6688,0.0002],[34.8167,0.0002],[34.9646,0.0002],[35.1125,0.0001],[35.2604,0.0001],[35.4083,0.0001],[35.5563,0.0001],[35.7042,0.0001],[35.8521,0.0001],[36,0],[36,0],[28.9,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-24)**2)/(2*3*3))/(3*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[24, 0]} point2={[24, 0.133]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[28.9, 0]} point2={[28.9, 0.035]} color="var(--mafs-fg-orange)" />
  <Text x={24} y={0.1459} attach="n">μ = 24</Text>
  <Text x={28.9} y={-0.0106} attach="s">28.9</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "inverse-normal", "threshold", "context-temperature"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Convert the upper-tail probability to a less-than probability.", workingLatex: "P(X>a)=0.05\\ \\Rightarrow\\ P(X<a)=0.95", explanation: "The hottest \\(5\\%\\) lie above \\(a\\), so \\(95\\%\\) lie below it." },
        { stepNumber: 2, description: "Find the z-value and unstandardise.", workingLatex: "z=\\Phi^{-1}(0.95)=1.6449,\\quad a=24+1.6449\\times 3", explanation: "Apply \\(a=\\mu+z\\sigma\\) with \\(\\mu=24\\) and \\(\\sigma=3\\)." },
        { stepNumber: 3, description: "Evaluate and round to \\(1\\) d.p.", workingLatex: "a=28.93\\approx 28.9\\ {}^{\\circ}\\mathrm{C}", explanation: "On the hottest \\(5\\%\\) of days the temperature exceeds \\(28.9\\ {}^{\\circ}\\mathrm{C}\\)." }
      ],
      finalAnswer: "\\( a\\approx 28.9\\,{}^{\\circ}\\mathrm{C} \\)",
    },
  },
  {
    id: "y2nm-035",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 35",
    difficulty: "Standard",
    questionText: "The time, in minutes, that customers spend waiting in a queue is modelled by \\( X \\sim \\mathrm{N}(15.2,\\,2.4^2) \\). Find the value \\( a \\), to \\( 1 \\) decimal place, for which \\( P(X>a)=0.30 \\).",
    questionMafs: `<Mafs viewBox={{ x: [5.6, 24.8], y: [-0.0266, 0.1961] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 2.4 }} yAxis={{ lines: false }} />
  <Polygon points={[[16.5,0.1435],[16.6729,0.1377],[16.8458,0.1314],[17.0188,0.1247],[17.1917,0.1178],[17.3646,0.1107],[17.5375,0.1034],[17.7104,0.0962],[17.8833,0.089],[18.0563,0.0819],[18.2292,0.075],[18.4021,0.0683],[18.575,0.0618],[18.7479,0.0557],[18.9208,0.05],[19.0938,0.0446],[19.2667,0.0396],[19.4396,0.0349],[19.6125,0.0307],[19.7854,0.0268],[19.9583,0.0233],[20.1312,0.0201],[20.3042,0.0173],[20.4771,0.0148],[20.65,0.0126],[20.8229,0.0107],[20.9958,0.009],[21.1688,0.0075],[21.3417,0.0063],[21.5146,0.0052],[21.6875,0.0043],[21.8604,0.0035],[22.0333,0.0029],[22.2062,0.0023],[22.3792,0.0019],[22.5521,0.0015],[22.725,0.0012],[22.8979,0.001],[23.0708,0.0008],[23.2438,0.0006],[23.4167,0.0005],[23.5896,0.0004],[23.7625,0.0003],[23.9354,0.0002],[24.1083,0.0002],[24.2812,0.0001],[24.4542,0.0001],[24.6271,0.0001],[24.8,0.0001],[24.8,0],[16.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-15.2)**2)/(2*2.4*2.4))/(2.4*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[15.2, 0]} point2={[15.2, 0.1662]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[16.5, 0]} point2={[16.5, 0.1435]} color="var(--mafs-fg-orange)" />
  <Text x={15.2} y={0.1824} attach="n">μ = 15.2</Text>
  <Text x={16.5} y={-0.0133} attach="s">16.5</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "inverse-normal", "upper-tail", "context-time"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Convert the upper-tail probability to a less-than probability.", workingLatex: "P(X>a)=0.30\\ \\Rightarrow\\ P(X<a)=0.70", explanation: "The area above \\(a\\) is \\(0.30\\), so the area below is \\(1-0.30=0.70\\)." },
        { stepNumber: 2, description: "Find the z-value and unstandardise.", workingLatex: "z=\\Phi^{-1}(0.70)=0.5244,\\quad a=15.2+0.5244\\times 2.4", explanation: "Apply \\(a=\\mu+z\\sigma\\) with \\(\\mu=15.2\\) and \\(\\sigma=2.4\\)." },
        { stepNumber: 3, description: "Evaluate and round to \\(1\\) d.p.", workingLatex: "a=16.459\\approx 16.5\\ \\mathrm{minutes}", explanation: "\\(30\\%\\) of customers wait longer than \\(16.5\\ \\mathrm{minutes}\\)." }
      ],
      finalAnswer: "\\( a\\approx 16.5\\,\\mathrm{minutes} \\)",
    },
  },
  {
    id: "y2nm-036",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 36",
    difficulty: "Standard",
    questionText: "The heights, in centimetres, of sunflowers grown in a trial are modelled by \\( X \\sim \\mathrm{N}(180,\\,10^2) \\). In a field of \\( 500 \\) sunflowers, estimate the number whose height is between \\( 170\\ \\mathrm{cm} \\) and \\( 195\\ \\mathrm{cm} \\).",
    questionMafs: `<Mafs viewBox={{ x: [140, 220], y: [-0.0064, 0.0471] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 10 }} yAxis={{ lines: false }} />
  <Polygon points={[[170,0.0242],[170.5208,0.0255],[171.0417,0.0267],[171.5625,0.0279],[172.0833,0.0292],[172.6042,0.0303],[173.125,0.0315],[173.6458,0.0326],[174.1667,0.0337],[174.6875,0.0346],[175.2083,0.0356],[175.7292,0.0364],[176.25,0.0372],[176.7708,0.0379],[177.2917,0.0385],[177.8125,0.039],[178.3333,0.0393],[178.8542,0.0396],[179.375,0.0398],[179.8958,0.0399],[180.4167,0.0399],[180.9375,0.0397],[181.4583,0.0395],[181.9792,0.0391],[182.5,0.0387],[183.0208,0.0381],[183.5417,0.0375],[184.0625,0.0367],[184.5833,0.0359],[185.1042,0.035],[185.625,0.0341],[186.1458,0.033],[186.6667,0.0319],[187.1875,0.0308],[187.7083,0.0296],[188.2292,0.0284],[188.75,0.0272],[189.2708,0.026],[189.7917,0.0247],[190.3125,0.0234],[190.8333,0.0222],[191.3542,0.0209],[191.875,0.0197],[192.3958,0.0185],[192.9167,0.0173],[193.4375,0.0162],[193.9583,0.0151],[194.4792,0.014],[195,0.013],[195,0],[170,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-180)**2)/(2*10*10))/(10*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[180, 0]} point2={[180, 0.0399]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[170, 0]} point2={[170, 0.0242]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[195, 0]} point2={[195, 0.013]} color="var(--mafs-fg-orange)" />
  <Text x={180} y={0.0438} attach="n">μ = 180</Text>
  <Text x={170} y={-0.0032} attach="s">170</Text>
  <Text x={195} y={-0.0032} attach="s">195</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "probability-between", "expected-number", "context-height"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise both boundaries.", workingLatex: "z_1=\\frac{170-180}{10}=-1,\\quad z_2=\\frac{195-180}{10}=1.5", explanation: "Convert each height to a z-value using \\(Z=\\dfrac{X-\\mu}{\\sigma}\\)." },
        { stepNumber: 2, description: "Find the probability between the boundaries.", workingLatex: "P(170<X<195)=\\Phi(1.5)-\\Phi(-1)=0.9332-0.1587=0.7745", explanation: "Subtract the smaller cumulative area from the larger." },
        { stepNumber: 3, description: "Multiply by the number of sunflowers.", workingLatex: "500\\times 0.7745=387.3\\approx 387", explanation: "Expected number \\(=n\\times P\\); about \\(387\\) sunflowers fall in this range." }
      ],
      finalAnswer: "\\( \\approx 387\\text{ sunflowers} \\)",
    },
  },
  {
    id: "y2nm-037",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 37",
    difficulty: "Standard",
    questionText: "The lifetime, in hours, of a brand of LED bulb is modelled by a normal distribution with standard deviation \\( 120\\,\\mathrm{hours} \\). It is found that \\( 30\\% \\) of bulbs last longer than \\( 1000\\,\\mathrm{hours} \\). Find the mean lifetime \\( \\mu \\), giving your answer to the nearest hour.",
    questionMafs: `<Mafs viewBox={{ x: [457, 1417], y: [-0.0005, 0.0039] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 120 }} yAxis={{ lines: false }} />
  <Polygon points={[[1000,0.0029],[1008.6875,0.0028],[1017.375,0.0027],[1026.0625,0.0025],[1034.75,0.0024],[1043.4375,0.0022],[1052.125,0.0021],[1060.8125,0.002],[1069.5,0.0018],[1078.1875,0.0017],[1086.875,0.0015],[1095.5625,0.0014],[1104.25,0.0013],[1112.9375,0.0011],[1121.625,0.001],[1130.3125,0.0009],[1139,0.0008],[1147.6875,0.0007],[1156.375,0.0006],[1165.0625,0.0005],[1173.75,0.0005],[1182.4375,0.0004],[1191.125,0.0004],[1199.8125,0.0003],[1208.5,0.0003],[1217.1875,0.0002],[1225.875,0.0002],[1234.5625,0.0002],[1243.25,0.0001],[1251.9375,0.0001],[1260.625,0.0001],[1269.3125,0.0001],[1278,0.0001],[1286.6875,0],[1295.375,0],[1304.0625,0],[1312.75,0],[1321.4375,0],[1330.125,0],[1338.8125,0],[1347.5,0],[1356.1875,0],[1364.875,0],[1373.5625,0],[1382.25,0],[1390.9375,0],[1399.625,0],[1408.3125,0],[1417,0],[1417,0],[1000,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-937)**2)/(2*120*120))/(120*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[937, 0]} point2={[937, 0.0033]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[1000, 0]} point2={[1000, 0.0029]} color="var(--mafs-fg-orange)" />
  <Text x={937} y={0.0036} attach="n">μ = 937</Text>
  <Text x={1000} y={-0.0003} attach="s">1000</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "unknown mean", "inverse normal"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Translate the probability into a left-tail probability and a z-value.", workingLatex: "P(X>1000)=0.30 \\;\\Rightarrow\\; P(X<1000)=0.70", explanation: "The inverse-normal function works from a cumulative (left-tail) probability, so convert the \"greater than\" statement to a \"less than\" one by subtracting from 1." },
        { stepNumber: 2, description: "Find the standardised value z for the 0.70 percentile.", workingLatex: "z=\\Phi^{-1}(0.70)=0.5244", explanation: "Using the inverse normal: the z-value below which 70% of a standard normal distribution lies is 0.5244 (4 d.p.). This z corresponds to the boundary 1000 hours." },
        { stepNumber: 3, description: "Set up and solve the standardisation equation for \\( \\mu \\).", workingLatex: "z=\\frac{1000-\\mu}{120}\\;\\Rightarrow\\; \\mu=1000-0.5244\\times 120=937.07", explanation: "Rearranging \\(z=\\frac{a-\\mu}{\\sigma}\\) gives \\(\\mu=a-z\\sigma\\). Substituting \\(a=1000\\), \\(z=0.5244\\), \\(\\sigma=120\\)." },
        { stepNumber: 4, description: "State the mean to the nearest hour.", workingLatex: "\\mu \\approx 937\\;\\mathrm{hours}", explanation: "Rounding 937.07 to the nearest hour gives the required mean lifetime." }
      ],
      finalAnswer: "\\( \\mu \\approx 937\\,\\mathrm{hours} \\)",
      canonicalAnswer: "937",
    },
  },
  {
    id: "y2nm-038",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 38",
    difficulty: "Standard",
    questionText: "A machine fills bags with sugar. The mass of sugar, in grams, is normally distributed with standard deviation \\( 8\\,\\mathrm{g} \\). Only \\( 10\\% \\) of bags contain less than \\( 500\\,\\mathrm{g} \\). Find the mean mass \\( \\mu \\) of a bag, to 1 decimal place.",
    questionMafs: `<Mafs viewBox={{ x: [478.3, 542.3], y: [-0.008, 0.0588] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 8 }} yAxis={{ lines: false }} />
  <Polygon points={[[478.3,0],[478.7521,0],[479.2042,0],[479.6563,0],[480.1083,0],[480.5604,0],[481.0125,0.0001],[481.4646,0.0001],[481.9167,0.0001],[482.3688,0.0001],[482.8208,0.0001],[483.2729,0.0002],[483.725,0.0002],[484.1771,0.0002],[484.6292,0.0003],[485.0813,0.0003],[485.5333,0.0004],[485.9854,0.0005],[486.4375,0.0006],[486.8896,0.0007],[487.3417,0.0008],[487.7938,0.001],[488.2458,0.0011],[488.6979,0.0013],[489.15,0.0015],[489.6021,0.0018],[490.0542,0.002],[490.5063,0.0023],[490.9583,0.0027],[491.4104,0.0031],[491.8625,0.0035],[492.3146,0.004],[492.7667,0.0045],[493.2188,0.0051],[493.6708,0.0057],[494.1229,0.0065],[494.575,0.0072],[495.0271,0.0081],[495.4792,0.009],[495.9313,0.0099],[496.3833,0.011],[496.8354,0.0121],[497.2875,0.0133],[497.7396,0.0145],[498.1917,0.0159],[498.6438,0.0173],[499.0958,0.0187],[499.5479,0.0202],[500,0.0218],[500,0],[478.3,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-510.3)**2)/(2*8*8))/(8*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[510.3, 0]} point2={[510.3, 0.0499]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[500, 0]} point2={[500, 0.0218]} color="var(--mafs-fg-orange)" />
  <Text x={510.3} y={0.0547} attach="n">μ = 510.3</Text>
  <Text x={500} y={-0.004} attach="s">500</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "unknown mean", "inverse normal"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the cumulative probability and find z.", workingLatex: "P(X<500)=0.10 \\;\\Rightarrow\\; z=\\Phi^{-1}(0.10)=-1.2816", explanation: "Because 500 g lies in the lower tail, the standardised value is negative: the z below which 10% of the standard normal lies is \\(-1.2816\\)." },
        { stepNumber: 2, description: "Form the standardisation equation.", workingLatex: "-1.2816=\\frac{500-\\mu}{8}", explanation: "Substitute the boundary \\(a=500\\), \\(\\sigma=8\\) and the z-value into \\(z=\\frac{a-\\mu}{\\sigma}\\)." },
        { stepNumber: 3, description: "Solve for \\( \\mu \\).", workingLatex: "\\mu=500-(-1.2816)\\times 8=500+10.25=510.25", explanation: "Rearrange to \\(\\mu=a-z\\sigma\\). Subtracting a negative quantity increases the mean above 500 g, which makes sense since most bags exceed 500 g." },
        { stepNumber: 4, description: "State the mean to 1 decimal place.", workingLatex: "\\mu \\approx 510.3\\;\\mathrm{g}", explanation: "Rounding 510.25 to one decimal place gives the mean mass." }
      ],
      finalAnswer: "\\( \\mu \\approx 510.3\\,\\mathrm{g} \\)",
      canonicalAnswer: "510.3",
    },
  },
  {
    id: "y2nm-039",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 39",
    difficulty: "Standard",
    questionText: "A component is manufactured to a target length with mean \\( 50\\,\\mathrm{mm} \\). The length is normally distributed and \\( 2.5\\% \\) of components are longer than \\( 53\\,\\mathrm{mm} \\). Find the standard deviation \\( \\sigma \\), to 2 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [43.88, 56.12], y: [-0.0417, 0.3077] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 1.53 }} yAxis={{ lines: false }} />
  <Polygon points={[[53,0.0381],[53.065,0.0351],[53.13,0.0322],[53.195,0.0295],[53.26,0.0269],[53.325,0.0246],[53.39,0.0224],[53.455,0.0204],[53.52,0.0185],[53.585,0.0168],[53.65,0.0151],[53.715,0.0137],[53.78,0.0123],[53.845,0.0111],[53.91,0.01],[53.975,0.0089],[54.04,0.008],[54.105,0.0071],[54.17,0.0064],[54.235,0.0057],[54.3,0.005],[54.365,0.0045],[54.43,0.0039],[54.495,0.0035],[54.56,0.0031],[54.625,0.0027],[54.69,0.0024],[54.755,0.0021],[54.82,0.0018],[54.885,0.0016],[54.95,0.0014],[55.015,0.0012],[55.08,0.0011],[55.145,0.0009],[55.21,0.0008],[55.275,0.0007],[55.34,0.0006],[55.405,0.0005],[55.47,0.0004],[55.535,0.0004],[55.6,0.0003],[55.665,0.0003],[55.73,0.0002],[55.795,0.0002],[55.86,0.0002],[55.925,0.0001],[55.99,0.0001],[56.055,0.0001],[56.12,0.0001],[56.12,0],[53,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-50)**2)/(2*1.53*1.53))/(1.53*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[50, 0]} point2={[50, 0.2607]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[53, 0]} point2={[53, 0.0381]} color="var(--mafs-fg-orange)" />
  <Text x={50} y={0.2861} attach="n">μ = 50</Text>
  <Text x={53} y={-0.0209} attach="s">53</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "unknown standard deviation", "inverse normal"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Convert the upper-tail probability to a z-value.", workingLatex: "P(X>53)=0.025 \\;\\Rightarrow\\; P(X<53)=0.975 \\;\\Rightarrow\\; z=\\Phi^{-1}(0.975)=1.96", explanation: "The right-tail probability 0.025 corresponds to the well-known z-value 1.96 (the 97.5th percentile of the standard normal)." },
        { stepNumber: 2, description: "Write the standardisation equation with \\( \\sigma \\) unknown.", workingLatex: "1.96=\\frac{53-50}{\\sigma}=\\frac{3}{\\sigma}", explanation: "Here the mean is known and \\(\\sigma\\) is the unknown, so substitute \\(a=53\\), \\(\\mu=50\\) into \\(z=\\frac{a-\\mu}{\\sigma}\\)." },
        { stepNumber: 3, description: "Solve for \\( \\sigma \\).", workingLatex: "\\sigma=\\frac{3}{1.96}=1.5306", explanation: "Multiply both sides by \\(\\sigma\\) and divide by 1.96 to isolate the standard deviation." },
        { stepNumber: 4, description: "State \\( \\sigma \\) to 2 decimal places.", workingLatex: "\\sigma \\approx 1.53\\;\\mathrm{mm}", explanation: "Rounding 1.5306 to two decimal places gives the required standard deviation." }
      ],
      finalAnswer: "\\( \\sigma \\approx 1.53\\,\\mathrm{mm} \\)",
      canonicalAnswer: "1.53",
    },
  },
  {
    id: "y2nm-040",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 40",
    difficulty: "Standard",
    questionText: "The reaction time of a driver, in seconds, is normally distributed with mean \\( 0.30\\,\\mathrm{s} \\). It is known that \\( 20\\% \\) of drivers react in less than \\( 0.25\\,\\mathrm{s} \\). Find the standard deviation \\( \\sigma \\), to 3 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [0.064, 0.536], y: [-1.0819, 7.9788] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 0.059 }} yAxis={{ lines: false }} />
  <Polygon points={[[0.064,0.0023],[0.0679,0.0029],[0.0718,0.0038],[0.0756,0.0049],[0.0795,0.0063],[0.0834,0.008],[0.0873,0.0102],[0.0911,0.0128],[0.095,0.0162],[0.0989,0.0203],[0.1028,0.0253],[0.1066,0.0314],[0.1105,0.0389],[0.1144,0.0479],[0.1183,0.0588],[0.1221,0.0718],[0.126,0.0874],[0.1299,0.1058],[0.1337,0.1276],[0.1376,0.1532],[0.1415,0.1832],[0.1454,0.2181],[0.1493,0.2585],[0.1531,0.305],[0.157,0.3585],[0.1609,0.4194],[0.1648,0.4886],[0.1686,0.5668],[0.1725,0.6546],[0.1764,0.7528],[0.1803,0.862],[0.1841,0.9828],[0.188,1.1157],[0.1919,1.2611],[0.1958,1.4194],[0.1996,1.5906],[0.2035,1.7748],[0.2074,1.9718],[0.2113,2.1813],[0.2151,2.4026],[0.219,2.635],[0.2229,2.8774],[0.2268,3.1286],[0.2306,3.3871],[0.2345,3.6511],[0.2384,3.9188],[0.2423,4.1881],[0.2461,4.4565],[0.25,4.7218],[0.25,0],[0.064,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-0.3)**2)/(2*0.059*0.059))/(0.059*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0.3, 0]} point2={[0.3, 6.7617]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[0.25, 0]} point2={[0.25, 4.7218]} color="var(--mafs-fg-orange)" />
  <Text x={0.3} y={7.4203} attach="n">μ = 0.3</Text>
  <Text x={0.25} y={-0.5409} attach="s">0.25</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "unknown standard deviation", "inverse normal"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the z-value for the lower-tail probability.", workingLatex: "P(X<0.25)=0.20 \\;\\Rightarrow\\; z=\\Phi^{-1}(0.20)=-0.8416", explanation: "Since 0.25 s lies below the mean, the standardised value is negative: \\(z=-0.8416\\) is the 20th percentile of the standard normal." },
        { stepNumber: 2, description: "Set up the standardisation equation.", workingLatex: "-0.8416=\\frac{0.25-0.30}{\\sigma}=\\frac{-0.05}{\\sigma}", explanation: "Substitute \\(a=0.25\\), \\(\\mu=0.30\\) into \\(z=\\frac{a-\\mu}{\\sigma}\\); both the z-value and the numerator are negative." },
        { stepNumber: 3, description: "Solve for \\( \\sigma \\).", workingLatex: "\\sigma=\\frac{-0.05}{-0.8416}=0.0594", explanation: "Dividing two negative numbers gives a positive standard deviation, as required." },
        { stepNumber: 4, description: "State \\( \\sigma \\) to 3 decimal places.", workingLatex: "\\sigma \\approx 0.059\\;\\mathrm{s}", explanation: "Rounding 0.0594 to three decimal places gives the standard deviation of reaction time." }
      ],
      finalAnswer: "\\( \\sigma \\approx 0.059\\,\\mathrm{s} \\)",
      canonicalAnswer: "0.059",
    },
  },
  {
    id: "y2nm-041",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 41",
    difficulty: "Standard",
    questionText: "A factory produces bolts whose diameter is normally distributed with mean \\( 10.00\\,\\mathrm{mm} \\) and standard deviation \\( 0.04\\,\\mathrm{mm} \\). A bolt is accepted only if its diameter lies between \\( 9.95\\,\\mathrm{mm} \\) and \\( 10.05\\,\\mathrm{mm} \\). Find the proportion of bolts that are rejected.",
    questionMafs: `<Mafs viewBox={{ x: [9.84, 10.16], y: [-1.5958, 11.7688] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 0.04 }} yAxis={{ lines: false }} />
  <Polygon points={[[9.95,4.5662],[9.9521,4.8668],[9.9542,5.1731],[9.9562,5.4838],[9.9583,5.7974],[9.9604,6.1123],[9.9625,6.4268],[9.9646,6.7393],[9.9667,7.0478],[9.9688,7.3504],[9.9708,7.6453],[9.9729,7.9305],[9.975,8.204],[9.9771,8.464],[9.9792,8.7085],[9.9813,8.9359],[9.9833,9.1443],[9.9854,9.3323],[9.9875,9.4983],[9.9896,9.641],[9.9917,9.7594],[9.9938,9.8525],[9.9958,9.9196],[9.9979,9.96],[10,9.9736],[10.0021,9.96],[10.0042,9.9196],[10.0063,9.8525],[10.0083,9.7594],[10.0104,9.641],[10.0125,9.4983],[10.0146,9.3323],[10.0167,9.1443],[10.0188,8.9359],[10.0208,8.7085],[10.0229,8.464],[10.025,8.204],[10.0271,7.9305],[10.0292,7.6453],[10.0313,7.3504],[10.0333,7.0478],[10.0354,6.7393],[10.0375,6.4268],[10.0396,6.1123],[10.0417,5.7974],[10.0438,5.4838],[10.0458,5.1731],[10.0479,4.8668],[10.05,4.5662],[10.05,0],[9.95,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-10)**2)/(2*0.04*0.04))/(0.04*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[10, 0]} point2={[10, 9.9736]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[9.95, 0]} point2={[9.95, 4.5662]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[10.05, 0]} point2={[10.05, 4.5662]} color="var(--mafs-fg-orange)" />
  <Text x={10} y={10.945} attach="n">μ = 10</Text>
  <Text x={9.95} y={-0.7979} attach="s">9.95</Text>
  <Text x={10.05} y={-0.7979} attach="s">10.05</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "quality control", "tolerance", "between"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise the two tolerance limits.", workingLatex: "z_1=\\frac{9.95-10.00}{0.04}=-1.25, \\qquad z_2=\\frac{10.05-10.00}{0.04}=1.25", explanation: "Convert each limit to a z-score using \\(z=\\frac{x-\\mu}{\\sigma}\\); the tolerance band is symmetric about the mean." },
        { stepNumber: 2, description: "Find the probability a bolt is accepted.", workingLatex: "P(9.95<X<10.05)=\\Phi(1.25)-\\Phi(-1.25)=0.8944-0.1056=0.7887", explanation: "The accepted proportion is the area between the two limits, found by subtracting the lower cumulative probability from the upper one." },
        { stepNumber: 3, description: "Find the proportion rejected.", workingLatex: "P(\\text{reject})=1-0.7887=0.2113", explanation: "A bolt is rejected if it falls outside the tolerance band, which is the complement of the accepted region." },
        { stepNumber: 4, description: "State the proportion rejected.", workingLatex: "P(\\text{reject})\\approx 0.2113", explanation: "About 21.1% of bolts are outside tolerance and are rejected." }
      ],
      finalAnswer: "\\( P(\\text{reject})\\approx 0.2113 \\)",
      canonicalAnswer: "0.2113",
    },
  },
  {
    id: "y2nm-042",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 42",
    difficulty: "Standard",
    questionText: "A bottling machine dispenses a drink with mean volume \\( 250\\,\\mathrm{ml} \\), normally distributed. The manufacturer requires \\( 99\\% \\) of bottles to contain between \\( 245\\,\\mathrm{ml} \\) and \\( 255\\,\\mathrm{ml} \\). Assuming this band is symmetric about the mean, find the largest permitted standard deviation \\( \\sigma \\), to 3 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [242.236, 257.764], y: [-0.0329, 0.2425] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 1.941 }} yAxis={{ lines: false }} />
  <Polygon points={[[245,0.0074],[245.2083,0.0098],[245.4167,0.0127],[245.625,0.0162],[245.8333,0.0205],[246.0417,0.0257],[246.25,0.0318],[246.4583,0.0389],[246.6667,0.047],[246.875,0.0562],[247.0833,0.0665],[247.2917,0.0776],[247.5,0.0897],[247.7083,0.1024],[247.9167,0.1155],[248.125,0.1289],[248.3333,0.1422],[248.5417,0.155],[248.75,0.167],[248.9583,0.178],[249.1667,0.1874],[249.375,0.1952],[249.5833,0.2009],[249.7917,0.2044],[250,0.2055],[250.2083,0.2044],[250.4167,0.2009],[250.625,0.1952],[250.8333,0.1874],[251.0417,0.178],[251.25,0.167],[251.4583,0.155],[251.6667,0.1422],[251.875,0.1289],[252.0833,0.1155],[252.2917,0.1024],[252.5,0.0897],[252.7083,0.0776],[252.9167,0.0665],[253.125,0.0562],[253.3333,0.047],[253.5417,0.0389],[253.75,0.0318],[253.9583,0.0257],[254.1667,0.0205],[254.375,0.0162],[254.5833,0.0127],[254.7917,0.0098],[255,0.0074],[255,0],[245,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-250)**2)/(2*1.941*1.941))/(1.941*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[250, 0]} point2={[250, 0.2055]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[245, 0]} point2={[245, 0.0074]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[255, 0]} point2={[255, 0.0074]} color="var(--mafs-fg-orange)" />
  <Text x={250} y={0.2256} attach="n">μ = 250</Text>
  <Text x={245} y={-0.0164} attach="s">245</Text>
  <Text x={255} y={-0.0164} attach="s">255</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "quality control", "unknown standard deviation", "inverse normal"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Split the central 99% into tails.", workingLatex: "P(245<X<255)=0.99 \\;\\Rightarrow\\; P(X<255)=0.995", explanation: "By symmetry the remaining 1% is shared equally between the two tails (0.5% each), so the upper limit 255 ml is the 99.5th percentile." },
        { stepNumber: 2, description: "Find the corresponding z-value.", workingLatex: "z=\\Phi^{-1}(0.995)=2.5758", explanation: "The 99.5th percentile of the standard normal distribution is 2.5758 (4 d.p.)." },
        { stepNumber: 3, description: "Standardise the upper limit and solve for \\( \\sigma \\).", workingLatex: "2.5758=\\frac{255-250}{\\sigma}=\\frac{5}{\\sigma} \\;\\Rightarrow\\; \\sigma=\\frac{5}{2.5758}=1.9411", explanation: "The half-width of the tolerance band is 5 ml; dividing by the z-value gives the standard deviation that just meets the requirement." },
        { stepNumber: 4, description: "State the largest permitted \\( \\sigma \\).", workingLatex: "\\sigma \\approx 1.941\\;\\mathrm{ml}", explanation: "Any standard deviation up to 1.941 ml keeps at least 99% of bottles within tolerance." }
      ],
      finalAnswer: "\\( \\sigma \\approx 1.941\\,\\mathrm{ml} \\)",
      canonicalAnswer: "1.941",
    },
  },
  {
    id: "y2nm-043",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 43",
    difficulty: "Standard",
    questionText: "The mass of an adult male of a certain species, in kilograms, is normally distributed with mean \\( 70\\,\\mathrm{kg} \\) and standard deviation \\( 10\\,\\mathrm{kg} \\). (a) Find the probability that a randomly chosen male has mass greater than \\( 85\\,\\mathrm{kg} \\). (b) The heaviest \\( 5\\% \\) are classed as \"large\". Find the minimum mass for a male to be classed as large.",
    questionMafs: `<Mafs viewBox={{ x: [30, 110], y: [-0.0064, 0.0471] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 10 }} yAxis={{ lines: false }} />
  <Polygon points={[[85,0.013],[85.5208,0.012],[86.0417,0.011],[86.5625,0.0101],[87.0833,0.0093],[87.6042,0.0085],[88.125,0.0077],[88.6458,0.007],[89.1667,0.0064],[89.6875,0.0057],[90.2083,0.0052],[90.7292,0.0047],[91.25,0.0042],[91.7708,0.0037],[92.2917,0.0033],[92.8125,0.003],[93.3333,0.0026],[93.8542,0.0023],[94.375,0.002],[94.8958,0.0018],[95.4167,0.0016],[95.9375,0.0014],[96.4583,0.0012],[96.9792,0.001],[97.5,0.0009],[98.0208,0.0008],[98.5417,0.0007],[99.0625,0.0006],[99.5833,0.0005],[100.1042,0.0004],[100.625,0.0004],[101.1458,0.0003],[101.6667,0.0003],[102.1875,0.0002],[102.7083,0.0002],[103.2292,0.0002],[103.75,0.0001],[104.2708,0.0001],[104.7917,0.0001],[105.3125,0.0001],[105.8333,0.0001],[106.3542,0.0001],[106.875,0],[107.3958,0],[107.9167,0],[108.4375,0],[108.9583,0],[109.4792,0],[110,0],[110,0],[85,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-70)**2)/(2*10*10))/(10*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[70, 0]} point2={[70, 0.0399]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[85, 0]} point2={[85, 0.013]} color="var(--mafs-fg-orange)" />
  <Text x={70} y={0.0438} attach="n">μ = 70</Text>
  <Text x={85} y={-0.0032} attach="s">85</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "standardise", "inverse normal", "two-part"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Part (a): standardise the value 85 kg.", workingLatex: "z=\\frac{85-70}{10}=1.5", explanation: "Convert the mass to a z-score with \\(z=\\frac{x-\\mu}{\\sigma}\\)." },
        { stepNumber: 2, description: "Part (a): find the upper-tail probability.", workingLatex: "P(X>85)=1-\\Phi(1.5)=1-0.9332=0.0668", explanation: "The probability of exceeding 85 kg is the upper tail beyond z = 1.5." },
        { stepNumber: 3, description: "Part (b): identify the percentile and its z-value.", workingLatex: "\\text{Heaviest }5\\% \\Rightarrow P(X<m)=0.95 \\;\\Rightarrow\\; z=\\Phi^{-1}(0.95)=1.6449", explanation: "Being in the top 5% means lying above the 95th percentile, so first find the z-value with 95% below it." },
        { stepNumber: 4, description: "Part (b): un-standardise to find the threshold mass.", workingLatex: "m=70+1.6449\\times 10=86.45", explanation: "Use \\(x=\\mu+z\\sigma\\) to convert the z-value back to a mass in kilograms." }
      ],
      finalAnswer: "\\( P(X>85)\\approx 0.0668; \\quad m \\approx 86.45\\,\\mathrm{kg} \\)",
      canonicalAnswer: "0.0668; 86.45",
    },
  },
  {
    id: "y2nm-044",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 44",
    difficulty: "Standard",
    questionText: "Marks in an examination are normally distributed with mean \\( 55 \\) and standard deviation \\( 12 \\). (a) Find the probability that a randomly chosen candidate scores between \\( 40 \\) and \\( 70 \\) marks. (b) A distinction is awarded to the top \\( 10\\% \\). Find the minimum mark needed for a distinction.",
    questionMafs: `<Mafs viewBox={{ x: [7, 103], y: [-0.0053, 0.0392] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 12 }} yAxis={{ lines: false }} />
  <Polygon points={[[40,0.0152],[40.625,0.0162],[41.25,0.0172],[41.875,0.0183],[42.5,0.0193],[43.125,0.0204],[43.75,0.0214],[44.375,0.0225],[45,0.0235],[45.625,0.0245],[46.25,0.0255],[46.875,0.0264],[47.5,0.0273],[48.125,0.0282],[48.75,0.029],[49.375,0.0298],[50,0.0305],[50.625,0.0311],[51.25,0.0317],[51.875,0.0321],[52.5,0.0325],[53.125,0.0328],[53.75,0.0331],[54.375,0.0332],[55,0.0332],[55.625,0.0332],[56.25,0.0331],[56.875,0.0328],[57.5,0.0325],[58.125,0.0321],[58.75,0.0317],[59.375,0.0311],[60,0.0305],[60.625,0.0298],[61.25,0.029],[61.875,0.0282],[62.5,0.0273],[63.125,0.0264],[63.75,0.0255],[64.375,0.0245],[65,0.0235],[65.625,0.0225],[66.25,0.0214],[66.875,0.0204],[67.5,0.0193],[68.125,0.0183],[68.75,0.0172],[69.375,0.0162],[70,0.0152],[70,0],[40,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-55)**2)/(2*12*12))/(12*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[55, 0]} point2={[55, 0.0332]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[40, 0]} point2={[40, 0.0152]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[70, 0]} point2={[70, 0.0152]} color="var(--mafs-fg-orange)" />
  <Text x={55} y={0.0365} attach="n">μ = 55</Text>
  <Text x={40} y={-0.0027} attach="s">40</Text>
  <Text x={70} y={-0.0027} attach="s">70</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "standardise", "inverse normal", "between", "two-part"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Part (a): standardise both boundaries.", workingLatex: "z_1=\\frac{40-55}{12}=-1.25, \\qquad z_2=\\frac{70-55}{12}=1.25", explanation: "Convert each mark to a z-score; the interval happens to be symmetric about the mean." },
        { stepNumber: 2, description: "Part (a): compute the central probability.", workingLatex: "P(40<X<70)=\\Phi(1.25)-\\Phi(-1.25)=0.8944-0.1056=0.7887", explanation: "Subtract the lower cumulative probability from the upper to get the area between the two marks." },
        { stepNumber: 3, description: "Part (b): find the z-value for the top 10%.", workingLatex: "P(X<d)=0.90 \\;\\Rightarrow\\; z=\\Phi^{-1}(0.90)=1.2816", explanation: "The top 10% lie above the 90th percentile, whose z-value is 1.2816." },
        { stepNumber: 4, description: "Part (b): convert back to a mark.", workingLatex: "d=55+1.2816\\times 12=70.38", explanation: "Apply \\(x=\\mu+z\\sigma\\). As marks are whole numbers, a candidate needs at least 71 to be in the top 10%." }
      ],
      finalAnswer: "\\( P(40<X<70)\\approx 0.7887; \\quad d \\approx 70.38 \\text{ (so } 71 \\text{ marks)} \\)",
      canonicalAnswer: "0.7887; 70.38",
    },
  },
  {
    id: "y2nm-045",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 45",
    difficulty: "Standard",
    questionText: "The daily rainfall at a weather station in winter, in millimetres, is modelled by a normal distribution with mean \\( 2.4\\,\\mathrm{mm} \\) and standard deviation \\( 0.8\\,\\mathrm{mm} \\). Find the probability that on a randomly chosen winter day the rainfall exceeds \\( 3.5\\,\\mathrm{mm} \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.8, 5.6], y: [-0.0798, 0.5884] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 0.8 }} yAxis={{ lines: false }} />
  <Polygon points={[[3.5,0.1938],[3.5438,0.1795],[3.5875,0.1657],[3.6313,0.1526],[3.675,0.14],[3.7188,0.1282],[3.7625,0.1169],[3.8063,0.1064],[3.85,0.0965],[3.8938,0.0872],[3.9375,0.0787],[3.9813,0.0707],[4.025,0.0634],[4.0688,0.0566],[4.1125,0.0504],[4.1563,0.0448],[4.2,0.0397],[4.2438,0.035],[4.2875,0.0308],[4.3313,0.0271],[4.375,0.0237],[4.4188,0.0207],[4.4625,0.018],[4.5063,0.0156],[4.55,0.0135],[4.5938,0.0116],[4.6375,0.01],[4.6812,0.0086],[4.725,0.0073],[4.7688,0.0062],[4.8125,0.0053],[4.8563,0.0045],[4.9,0.0038],[4.9438,0.0032],[4.9875,0.0027],[5.0313,0.0022],[5.075,0.0019],[5.1187,0.0015],[5.1625,0.0013],[5.2063,0.0011],[5.25,0.0009],[5.2937,0.0007],[5.3375,0.0006],[5.3813,0.0005],[5.425,0.0004],[5.4688,0.0003],[5.5125,0.0003],[5.5563,0.0002],[5.6,0.0002],[5.6,0],[3.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-2.4)**2)/(2*0.8*0.8))/(0.8*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[2.4, 0]} point2={[2.4, 0.4987]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[3.5, 0]} point2={[3.5, 0.1938]} color="var(--mafs-fg-orange)" />
  <Text x={2.4} y={0.5472} attach="n">μ = 2.4</Text>
  <Text x={3.5} y={-0.0399} attach="s">3.5</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "greater than", "context", "units"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the variable and standardise.", workingLatex: "X\\sim N(2.4,\\,0.8^2), \\qquad z=\\frac{3.5-2.4}{0.8}=1.375", explanation: "Let \\(X\\) be the daily rainfall in mm. Convert the threshold 3.5 mm to a z-score using \\(z=\\frac{x-\\mu}{\\sigma}\\)." },
        { stepNumber: 2, description: "Express the required probability as an upper tail.", workingLatex: "P(X>3.5)=P(Z>1.375)=1-\\Phi(1.375)", explanation: "\"Exceeds\" means the right-hand tail beyond the standardised value." },
        { stepNumber: 3, description: "Evaluate the probability.", workingLatex: "P(X>3.5)=1-0.9154=0.0846", explanation: "Using the cumulative normal, \\(\\Phi(1.375)=0.9154\\), giving the upper-tail probability." },
        { stepNumber: 4, description: "State the answer in context.", workingLatex: "P(X>3.5\\,\\mathrm{mm})\\approx 0.0846", explanation: "There is about an 8.5% chance that winter rainfall on a given day exceeds 3.5 mm." }
      ],
      finalAnswer: "\\( P(X>3.5\\,\\mathrm{mm})\\approx 0.0846 \\)",
      canonicalAnswer: "0.0846",
    },
  },
  {
    id: "y2nm-046",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 46",
    difficulty: "Standard",
    questionText: "A factory cuts steel pipes whose length is normally distributed with mean \\( 2.50\\,\\mathrm{m} \\) and standard deviation \\( 0.02\\,\\mathrm{m} \\). Find the probability that a randomly chosen pipe has length between \\( 2.46\\,\\mathrm{m} \\) and \\( 2.53\\,\\mathrm{m} \\).",
    questionMafs: `<Mafs viewBox={{ x: [2.42, 2.58], y: [-3.1915, 23.5376] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 0.02 }} yAxis={{ lines: false }} />
  <Polygon points={[[2.46,2.6995],[2.4615,3.1151],[2.4629,3.5755],[2.4644,4.0823],[2.4658,4.6361],[2.4673,5.2372],[2.4688,5.8849],[2.4702,6.5775],[2.4717,7.3127],[2.4731,8.087],[2.4746,8.8958],[2.476,9.7336],[2.4775,10.5938],[2.479,11.469],[2.4804,12.3506],[2.4819,13.2294],[2.4833,14.0956],[2.4848,14.9389],[2.4863,15.7487],[2.4877,16.5143],[2.4892,17.2254],[2.4906,17.8717],[2.4921,18.4441],[2.4935,18.9338],[2.495,19.3334],[2.4965,19.6368],[2.4979,19.8392],[2.4994,19.9374],[2.5008,19.9298],[2.5023,19.8166],[2.5037,19.5995],[2.5052,19.2821],[2.5067,18.8692],[2.5081,18.3672],[2.5096,17.7837],[2.511,17.1275],[2.5125,16.408],[2.514,15.6354],[2.5154,14.8202],[2.5169,13.973],[2.5183,13.1044],[2.5198,12.2246],[2.5212,11.3433],[2.5227,10.4698],[2.5242,9.6124],[2.5256,8.7783],[2.5271,7.9741],[2.5285,7.2052],[2.53,6.4759],[2.53,0],[2.46,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-2.5)**2)/(2*0.02*0.02))/(0.02*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[2.5, 0]} point2={[2.5, 19.9471]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[2.46, 0]} point2={[2.46, 2.6995]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[2.53, 0]} point2={[2.53, 6.4759]} color="var(--mafs-fg-orange)" />
  <Text x={2.5} y={21.89} attach="n">μ = 2.5</Text>
  <Text x={2.46} y={-1.5958} attach="s">2.46</Text>
  <Text x={2.53} y={-1.5958} attach="s">2.53</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "between", "context", "units"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise the lower boundary.", workingLatex: "z_1=\\frac{2.46-2.50}{0.02}=-2.0", explanation: "Convert 2.46 m to a z-score with \\(z=\\frac{x-\\mu}{\\sigma}\\); it lies two standard deviations below the mean." },
        { stepNumber: 2, description: "Standardise the upper boundary.", workingLatex: "z_2=\\frac{2.53-2.50}{0.02}=1.5", explanation: "Convert 2.53 m to a z-score; it lies 1.5 standard deviations above the mean." },
        { stepNumber: 3, description: "Compute the probability between the limits.", workingLatex: "P(2.46<X<2.53)=\\Phi(1.5)-\\Phi(-2.0)=0.9332-0.0228=0.9104", explanation: "Subtract the lower cumulative probability from the upper to obtain the area between the two lengths." },
        { stepNumber: 4, description: "State the answer in context.", workingLatex: "P(2.46\\,\\mathrm{m}<X<2.53\\,\\mathrm{m})\\approx 0.9104", explanation: "About 91.0% of pipes have a length within this range." }
      ],
      finalAnswer: "\\( P(2.46\\,\\mathrm{m}<X<2.53\\,\\mathrm{m})\\approx 0.9104 \\)",
      canonicalAnswer: "0.9104",
    },
  },
  {
    id: "y2nm-047",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 47",
    difficulty: "Standard",
    questionText: "A coffee machine dispenses coffee with a volume that is normally distributed with standard deviation \\( 5\\,\\mathrm{ml} \\). The machine is set so that only \\( 2\\% \\) of cups contain less than \\( 200\\,\\mathrm{ml} \\). (a) Find the mean volume \\( \\mu \\) dispensed, to 2 decimal places. (b) Using this mean, find the probability that a cup contains more than \\( 215\\,\\mathrm{ml} \\).",
    questionMafs: `<Mafs viewBox={{ x: [190.27, 230.27], y: [-0.0128, 0.0942] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 5 }} yAxis={{ lines: false }} />
  <Polygon points={[[190.27,0],[190.4727,0],[190.6754,0],[190.8781,0],[191.0808,0.0001],[191.2835,0.0001],[191.4863,0.0001],[191.689,0.0001],[191.8917,0.0001],[192.0944,0.0001],[192.2971,0.0001],[192.4998,0.0001],[192.7025,0.0002],[192.9052,0.0002],[193.1079,0.0002],[193.3106,0.0003],[193.5133,0.0003],[193.716,0.0003],[193.9188,0.0004],[194.1215,0.0004],[194.3242,0.0005],[194.5269,0.0006],[194.7296,0.0006],[194.9323,0.0007],[195.135,0.0008],[195.3377,0.0009],[195.5404,0.001],[195.7431,0.0012],[195.9458,0.0013],[196.1485,0.0015],[196.3513,0.0017],[196.554,0.0019],[196.7567,0.0021],[196.9594,0.0023],[197.1621,0.0026],[197.3648,0.0029],[197.5675,0.0032],[197.7702,0.0035],[197.9729,0.0039],[198.1756,0.0043],[198.3783,0.0047],[198.581,0.0052],[198.7838,0.0057],[198.9865,0.0063],[199.1892,0.0068],[199.3919,0.0075],[199.5946,0.0082],[199.7973,0.0089],[200,0.0097],[200,0],[190.27,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-210.27)**2)/(2*5*5))/(5*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[210.27, 0]} point2={[210.27, 0.0798]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[200, 0]} point2={[200, 0.0097]} color="var(--mafs-fg-orange)" />
  <Text x={210.27} y={0.0876} attach="n">μ = 210.27</Text>
  <Text x={200} y={-0.0064} attach="s">200</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "unknown mean", "inverse normal", "two-part", "quality control"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Part (a): find the z-value for the lower 2%.", workingLatex: "P(X<200)=0.02 \\;\\Rightarrow\\; z=\\Phi^{-1}(0.02)=-2.0537", explanation: "200 ml is the 2nd percentile, which lies in the lower tail, so the z-value is negative." },
        { stepNumber: 2, description: "Part (a): solve for the mean.", workingLatex: "-2.0537=\\frac{200-\\mu}{5} \\;\\Rightarrow\\; \\mu=200-(-2.0537)\\times 5=210.27", explanation: "Rearrange \\(z=\\frac{a-\\mu}{\\sigma}\\) to \\(\\mu=a-z\\sigma\\); the mean must sit comfortably above 200 ml." },
        { stepNumber: 3, description: "Part (b): standardise 215 ml with the new mean.", workingLatex: "z=\\frac{215-210.27}{5}=0.946", explanation: "Using \\(\\mu=210.27\\), convert the value 215 ml to a z-score." },
        { stepNumber: 4, description: "Part (b): find the upper-tail probability.", workingLatex: "P(X>215)=1-\\Phi(0.946)=1-0.828=0.172", explanation: "The probability of exceeding 215 ml is the right tail beyond the standardised value." }
      ],
      finalAnswer: "\\( \\mu \\approx 210.27\\,\\mathrm{ml}; \\quad P(X>215)\\approx 0.172 \\)",
      canonicalAnswer: "210.27; 0.172",
    },
  },
  {
    id: "y2nm-048",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 48",
    difficulty: "Standard",
    questionText: "The heights of adult women in a large population have mean \\( 163\\,\\mathrm{cm} \\) and standard deviation \\( 7\\,\\mathrm{cm} \\). A statistician proposes modelling height with a normal distribution. State, with two reasons, whether a normal model is suitable here.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "suitability", "modelling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the features a normal model assumes.", workingLatex: "", explanation: "A normal model is appropriate for a continuous quantity whose distribution is roughly symmetric and bell-shaped about the mean, with most values clustered near \\(\\mu\\) and tails that thin out smoothly in both directions." },
        { stepNumber: 2, description: "Check that height is continuous and reasonably symmetric.", workingLatex: "", explanation: "Adult height is a continuous measurement, and within a single population (adult women) heights are empirically known to cluster symmetrically around the mean, with similar numbers of women above and below 163 cm. This matches the bell shape of the normal curve." },
        { stepNumber: 3, description: "Check the \"cannot be negative\" concern is not a problem.", workingLatex: "\\frac{\\mu}{\\sigma}=\\frac{163}{7}\\approx 23.3", explanation: "Although height cannot be negative, the mean lies about 23 standard deviations above 0, so the normal model assigns negligible probability to impossible (negative or near-zero) heights. This boundary issue is therefore irrelevant in practice." },
        { stepNumber: 4, description: "Make the reasoned judgement.", workingLatex: "", explanation: "A normal distribution is suitable: the data are continuous and approximately symmetric about the mean, and the mean is so many standard deviations above 0 that the impossibility of negative heights causes no difficulty. (A caveat: if the sample mixed very different sub-populations the distribution could become skewed or bimodal, but for a single adult-female population the model is appropriate.)" }
      ],
      finalAnswer: "\\( \\text{A normal model is suitable: height is continuous and roughly symmetric about the mean, and } \\mu \\approx 23\\sigma \\text{ above } 0 \\text{ so negative values are negligible.} \\)",
    },
  },
  {
    id: "y2nm-049",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 49",
    difficulty: "Standard",
    questionText: "At a clinic, the waiting time for patients has mean \\( 4\\,\\mathrm{minutes} \\) and standard deviation \\( 3\\,\\mathrm{minutes} \\). A student suggests modelling waiting time with a normal distribution. Discuss whether this is appropriate, justifying your answer.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "suitability", "modelling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Note the key constraint on the quantity.", workingLatex: "", explanation: "Waiting time cannot be negative — the smallest possible value is 0 minutes. A normal distribution, however, extends over all real numbers, including negative values, so it can only be a good model if it assigns negligible probability below 0." },
        { stepNumber: 2, description: "Measure how many standard deviations the mean is above zero.", workingLatex: "\\frac{\\mu}{\\sigma}=\\frac{4}{3}\\approx 1.33", explanation: "The mean is only about 1.3 standard deviations above 0, so the value 0 is well within the body of the proposed distribution, not far out in the tail." },
        { stepNumber: 3, description: "Quantify the impossible probability under the normal model.", workingLatex: "P(X<0)=\\Phi\\!\\left(\\frac{0-4}{3}\\right)=\\Phi(-1.333)=0.0912", explanation: "A normal model would predict about a 9% chance of a negative waiting time, which is impossible. Such a large impossible probability shows the model misrepresents the data. Waiting times are also typically right-skewed (a few very long waits), conflicting with the symmetry of the normal curve." },
        { stepNumber: 4, description: "Make the reasoned judgement.", workingLatex: "", explanation: "A normal model is not suitable here: the mean is only about 1.3 standard deviations above 0, so the model assigns roughly 9% probability to impossible negative times, and waiting-time data are usually positively skewed rather than symmetric. A skewed model (e.g. an exponential-type distribution) would be more appropriate." }
      ],
      finalAnswer: "\\( \\text{A normal model is not suitable: } \\mu \\text{ is only } \\approx 1.3\\sigma \\text{ above } 0, \\text{ giving } P(X<0)\\approx 0.091 \\text{ (impossible), and waiting times are typically right-skewed, not symmetric.} \\)",
    },
  },
  {
    id: "y2nm-050",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 50",
    difficulty: "Challenge",
    questionText: "The random variable \\( X \\sim \\mathrm{N}(\\mu, \\sigma^2) \\). It is given that \\( \\mathrm{P}(X < 20) = 0.1056 \\) and \\( \\mathrm{P}(X > 40) = 0.1056 \\). Find the value of \\( \\mu \\) and the value of \\( \\sigma \\).",
    questionMafs: `<Mafs viewBox={{ x: [-2, 62], y: [-0.008, 0.0588] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 8 }} yAxis={{ lines: false }} />
  <Polygon points={[[20,0.0228],[20.4167,0.0243],[20.8333,0.0259],[21.25,0.0274],[21.6667,0.029],[22.0833,0.0306],[22.5,0.0321],[22.9167,0.0337],[23.3333,0.0352],[23.75,0.0368],[24.1667,0.0382],[24.5833,0.0397],[25,0.041],[25.4167,0.0423],[25.8333,0.0435],[26.25,0.0447],[26.6667,0.0457],[27.0833,0.0467],[27.5,0.0475],[27.9167,0.0482],[28.3333,0.0488],[28.75,0.0493],[29.1667,0.0496],[29.5833,0.0498],[30,0.0499],[30.4167,0.0498],[30.8333,0.0496],[31.25,0.0493],[31.6667,0.0488],[32.0833,0.0482],[32.5,0.0475],[32.9167,0.0467],[33.3333,0.0457],[33.75,0.0447],[34.1667,0.0435],[34.5833,0.0423],[35,0.041],[35.4167,0.0397],[35.8333,0.0382],[36.25,0.0368],[36.6667,0.0352],[37.0833,0.0337],[37.5,0.0321],[37.9167,0.0306],[38.3333,0.029],[38.75,0.0274],[39.1667,0.0259],[39.5833,0.0243],[40,0.0228],[40,0],[20,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-30)**2)/(2*8*8))/(8*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[30, 0]} point2={[30, 0.0499]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[20, 0]} point2={[20, 0.0228]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[40, 0]} point2={[40, 0.0228]} color="var(--mafs-fg-orange)" />
  <Text x={30} y={0.0547} attach="n">μ = 30</Text>
  <Text x={20} y={-0.004} attach="s">20</Text>
  <Text x={40} y={-0.004} attach="s">40</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "simultaneous parameters", "inverse normal", "standardising"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Convert the first probability to a z-value.", workingLatex: "\\mathrm{P}(X < 20) = 0.1056 \\;\\Rightarrow\\; \\mathrm{P}(Z < z_1) = 0.1056", explanation: "Standardising with \\( Z = \\dfrac{X - \\mu}{\\sigma} \\) turns the statement about \\( X \\) into one about the standard normal variable \\( Z \\). Because the probability is below \\( 0.5 \\), the boundary lies in the left tail and \\( z_1 \\) is negative." },
        { stepNumber: 2, description: "Read off the inverse-normal value for the lower boundary.", workingLatex: "z_1 = \\Phi^{-1}(0.1056) = -1.25", explanation: "From the inverse-normal table, \\( \\Phi^{-1}(0.8944) = 1.25 \\), so by symmetry \\( \\Phi^{-1}(0.1056) = -1.25 \\). This gives the first linear equation \\( 20 = \\mu + (-1.25)\\sigma \\)." },
        { stepNumber: 3, description: "Convert the second probability to a z-value.", workingLatex: "\\mathrm{P}(X > 40) = 0.1056 \\;\\Rightarrow\\; \\mathrm{P}(X < 40) = 0.8944 \\;\\Rightarrow\\; z_2 = \\Phi^{-1}(0.8944) = 1.25", explanation: "Tables give the area to the left, so convert the upper-tail probability to a lower-tail one first. The boundary at \\( 40 \\) sits above the mean, so \\( z_2 = +1.25 \\)." },
        { stepNumber: 4, description: "Write the two standardised equations.", workingLatex: "20 = \\mu - 1.25\\sigma \\qquad (1) \\\\ 40 = \\mu + 1.25\\sigma \\qquad (2)", explanation: "Each equation comes from rearranging \\( z = \\dfrac{a - \\mu}{\\sigma} \\) into \\( a = \\mu + z\\sigma \\). We now have two linear equations in the two unknowns \\( \\mu \\) and \\( \\sigma \\)." },
        { stepNumber: 5, description: "Eliminate \\( \\mu \\) by subtracting (1) from (2).", workingLatex: "(40) - (20) = (\\mu + 1.25\\sigma) - (\\mu - 1.25\\sigma) \\\\ 20 = 2.5\\sigma \\;\\Rightarrow\\; \\sigma = 8", explanation: "Subtracting cancels \\( \\mu \\) and isolates \\( \\sigma \\). Dividing \\( 20 \\) by \\( 2.5 \\) gives \\( \\sigma = 8 \\, \\mathrm{units} \\)." },
        { stepNumber: 6, description: "Back-substitute to find \\( \\mu \\) and check.", workingLatex: "\\mu = 20 + 1.25\\sigma = 20 + 1.25(8) = 30 \\\\ \\mathrm{P}(X<20)=\\mathrm{P}\\!\\left(Z<\\tfrac{20-30}{8}\\right)=\\mathrm{P}(Z<-1.25)=0.1056\\ \\checkmark", explanation: "Substituting \\( \\sigma = 8 \\) into equation (1) gives \\( \\mu = 30 \\). Re-standardising both boundaries reproduces the given probabilities, confirming the solution." }
      ],
      finalAnswer: "\\( \\mu = 30, \\quad \\sigma = 8 \\)",
      canonicalAnswer: "mu=30, sigma=8",
    },
  },
  {
    id: "y2nm-051",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 51",
    difficulty: "Challenge",
    questionText: "The masses, in grams, of a population of birds are modelled by \\( X \\sim \\mathrm{N}(\\mu, \\sigma^2) \\). It is found that \\( \\mathrm{P}(X < 460) = 0.0228 \\) and \\( \\mathrm{P}(X > 530) = 0.0668 \\). Find the value of \\( \\mu \\) and the value of \\( \\sigma \\).",
    questionMafs: `<Mafs viewBox={{ x: [420, 580], y: [-0.0032, 0.0235] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 20 }} yAxis={{ lines: false }} />
  <Polygon points={[[460,0.0027],[461.4583,0.0031],[462.9167,0.0036],[464.375,0.0041],[465.8333,0.0046],[467.2917,0.0052],[468.75,0.0059],[470.2083,0.0066],[471.6667,0.0073],[473.125,0.0081],[474.5833,0.0089],[476.0417,0.0097],[477.5,0.0106],[478.9583,0.0115],[480.4167,0.0124],[481.875,0.0132],[483.3333,0.0141],[484.7917,0.0149],[486.25,0.0157],[487.7083,0.0165],[489.1667,0.0172],[490.625,0.0179],[492.0833,0.0184],[493.5417,0.0189],[495,0.0193],[496.4583,0.0196],[497.9167,0.0198],[499.375,0.0199],[500.8333,0.0199],[502.2917,0.0198],[503.75,0.0196],[505.2083,0.0193],[506.6667,0.0189],[508.125,0.0184],[509.5833,0.0178],[511.0417,0.0171],[512.5,0.0164],[513.9583,0.0156],[515.4167,0.0148],[516.875,0.014],[518.3333,0.0131],[519.7917,0.0122],[521.25,0.0113],[522.7083,0.0105],[524.1667,0.0096],[525.625,0.0088],[527.0833,0.008],[528.5417,0.0072],[530,0.0065],[530,0],[460,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-500)**2)/(2*20*20))/(20*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[500, 0]} point2={[500, 0.0199]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[460, 0]} point2={[460, 0.0027]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[530, 0]} point2={[530, 0.0065]} color="var(--mafs-fg-orange)" />
  <Text x={500} y={0.0219} attach="n">μ = 500</Text>
  <Text x={460} y={-0.0016} attach="s">460</Text>
  <Text x={530} y={-0.0016} attach="s">530</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "simultaneous parameters", "inverse normal", "standardising"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise the lower-tail probability.", workingLatex: "\\mathrm{P}(X < 460) = 0.0228 \\;\\Rightarrow\\; \\mathrm{P}(Z < z_1) = 0.0228", explanation: "Writing \\( Z = \\dfrac{X - \\mu}{\\sigma} \\) converts the probability about masses into one about \\( Z \\). The small left-tail area means \\( z_1 \\) is a sizeable negative number." },
        { stepNumber: 2, description: "Find \\( z_1 \\) from the inverse-normal table.", workingLatex: "z_1 = \\Phi^{-1}(0.0228) = -2.00", explanation: "Since \\( \\Phi^{-1}(0.9772) = 2.00 \\), symmetry gives \\( \\Phi^{-1}(0.0228) = -2.00 \\). This yields the equation \\( 460 = \\mu - 2\\sigma \\)." },
        { stepNumber: 3, description: "Convert the upper-tail probability to a left-tail area and find \\( z_2 \\).", workingLatex: "\\mathrm{P}(X > 530) = 0.0668 \\;\\Rightarrow\\; \\mathrm{P}(X < 530) = 0.9332 \\\\ z_2 = \\Phi^{-1}(0.9332) = 1.50", explanation: "Tables give left-tail areas, so subtract from \\( 1 \\) first. The boundary at \\( 530 \\) lies above the mean, hence \\( z_2 = +1.50 \\)." },
        { stepNumber: 4, description: "Form the two simultaneous equations.", workingLatex: "460 = \\mu - 2\\sigma \\qquad (1) \\\\ 530 = \\mu + 1.5\\sigma \\qquad (2)", explanation: "Each uses \\( a = \\mu + z\\sigma \\). Two equations, two unknowns \\( \\mu, \\sigma \\)." },
        { stepNumber: 5, description: "Subtract (1) from (2) to eliminate \\( \\mu \\).", workingLatex: "530 - 460 = (1.5\\sigma) - (-2\\sigma) \\\\ 70 = 3.5\\sigma \\;\\Rightarrow\\; \\sigma = 20", explanation: "The \\( \\mu \\) terms cancel, leaving \\( 70 = 3.5\\sigma \\). Dividing gives \\( \\sigma = 20 \\, \\mathrm{g} \\)." },
        { stepNumber: 6, description: "Back-substitute for \\( \\mu \\).", workingLatex: "\\mu = 460 + 2\\sigma = 460 + 2(20) = 500", explanation: "Using equation (1) with \\( \\sigma = 20 \\) gives \\( \\mu = 500 \\, \\mathrm{g} \\)." },
        { stepNumber: 7, description: "Verify both probabilities.", workingLatex: "\\mathrm{P}\\!\\left(Z<\\tfrac{460-500}{20}\\right)=\\mathrm{P}(Z<-2)=0.0228\\ \\checkmark \\\\ \\mathrm{P}\\!\\left(Z>\\tfrac{530-500}{20}\\right)=\\mathrm{P}(Z>1.5)=0.0668\\ \\checkmark", explanation: "Re-standardising both boundaries with \\( \\mu = 500, \\sigma = 20 \\) reproduces the given probabilities exactly, confirming the answer." }
      ],
      finalAnswer: "\\( \\mu = 500\\,\\mathrm{g}, \\quad \\sigma = 20\\,\\mathrm{g} \\)",
      canonicalAnswer: "mu=500, sigma=20",
    },
  },
  {
    id: "y2nm-052",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 52",
    difficulty: "Challenge",
    questionText: "The diameters, in millimetres, of ball bearings produced by a machine follow \\( X \\sim \\mathrm{N}(160, 12^2) \\). A bearing is selected at random. Given that its diameter exceeds \\( 145\\,\\mathrm{mm} \\), find the probability that its diameter also exceeds \\( 175\\,\\mathrm{mm} \\).",
    questionMafs: `<Mafs viewBox={{ x: [112, 208], y: [-0.0053, 0.0392] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 12 }} yAxis={{ lines: false }} />
  <Polygon points={[[175,0.0152],[175.6875,0.0141],[176.375,0.0131],[177.0625,0.0121],[177.75,0.0111],[178.4375,0.0102],[179.125,0.0093],[179.8125,0.0085],[180.5,0.0077],[181.1875,0.007],[181.875,0.0063],[182.5625,0.0057],[183.25,0.0051],[183.9375,0.0045],[184.625,0.004],[185.3125,0.0036],[186,0.0032],[186.6875,0.0028],[187.375,0.0025],[188.0625,0.0022],[188.75,0.0019],[189.4375,0.0016],[190.125,0.0014],[190.8125,0.0012],[191.5,0.0011],[192.1875,0.0009],[192.875,0.0008],[193.5625,0.0007],[194.25,0.0006],[194.9375,0.0005],[195.625,0.0004],[196.3125,0.0003],[197,0.0003],[197.6875,0.0002],[198.375,0.0002],[199.0625,0.0002],[199.75,0.0001],[200.4375,0.0001],[201.125,0.0001],[201.8125,0.0001],[202.5,0.0001],[203.1875,0.0001],[203.875,0],[204.5625,0],[205.25,0],[205.9375,0],[206.625,0],[207.3125,0],[208,0],[208,0],[175,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-160)**2)/(2*12*12))/(12*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[160, 0]} point2={[160, 0.0332]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[175, 0]} point2={[175, 0.0152]} color="var(--mafs-fg-orange)" />
  <Text x={160} y={0.0365} attach="n">μ = 160</Text>
  <Text x={175} y={-0.0027} attach="s">175</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "conditional probability", "standardising"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the conditional probability formula.", workingLatex: "\\mathrm{P}(X > 175 \\mid X > 145) = \\frac{\\mathrm{P}(X > 175 \\;\\cap\\; X > 145)}{\\mathrm{P}(X > 145)}", explanation: "Conditional probability is \\( \\mathrm{P}(A\\mid B)=\\dfrac{\\mathrm{P}(A\\cap B)}{\\mathrm{P}(B)} \\). Here \\( A \\) is \\( X>175 \\) and \\( B \\) is \\( X>145 \\)." },
        { stepNumber: 2, description: "Simplify the intersection.", workingLatex: "\\{X > 175\\} \\subseteq \\{X > 145\\} \\;\\Rightarrow\\; \\mathrm{P}(X > 175 \\cap X > 145) = \\mathrm{P}(X > 175)", explanation: "If \\( X \\) exceeds \\( 175 \\) it automatically exceeds \\( 145 \\), so the event \\( X>175 \\) is contained in \\( X>145 \\) and the intersection is just \\( X>175 \\)." },
        { stepNumber: 3, description: "Standardise the numerator boundary.", workingLatex: "\\mathrm{P}(X > 175) = \\mathrm{P}\\!\\left(Z > \\tfrac{175 - 160}{12}\\right) = \\mathrm{P}(Z > 1.25) = 0.1056", explanation: "Standardise with \\( Z = \\dfrac{X-\\mu}{\\sigma} \\): \\( \\dfrac{175-160}{12}=1.25 \\). The upper-tail probability \\( \\mathrm{P}(Z>1.25)=1-0.8944=0.1056 \\)." },
        { stepNumber: 4, description: "Standardise the denominator boundary.", workingLatex: "\\mathrm{P}(X > 145) = \\mathrm{P}\\!\\left(Z > \\tfrac{145 - 160}{12}\\right) = \\mathrm{P}(Z > -1.25) = 0.8944", explanation: "Here \\( \\dfrac{145-160}{12}=-1.25 \\), and \\( \\mathrm{P}(Z>-1.25)=\\Phi(1.25)=0.8944 \\) by symmetry." },
        { stepNumber: 5, description: "Divide to obtain the conditional probability.", workingLatex: "\\mathrm{P}(X > 175 \\mid X > 145) = \\frac{0.1056}{0.8944} = 0.1181", explanation: "Dividing the numerator by the denominator gives \\( 0.1181 \\) (4 d.p.). The conditioning on \\( X>145 \\) raises the probability above the unconditional \\( 0.1056 \\), as expected." }
      ],
      finalAnswer: "\\( \\mathrm{P}(X > 175 \\mid X > 145) = 0.1181 \\)",
      canonicalAnswer: "0.1181",
    },
  },
  {
    id: "y2nm-053",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 53",
    difficulty: "Challenge",
    questionText: "A machine dispenses coffee into cups. The volume dispensed, \\( V\\,\\mathrm{ml} \\), is modelled by \\( V \\sim \\mathrm{N}(\\mu, \\sigma^2) \\). The machine is known to underfill (dispense less than \\( 500\\,\\mathrm{ml} \\)) on \\( 2\\% \\) of cups, and to overfill (dispense more than \\( 520\\,\\mathrm{ml} \\)) on \\( 10\\% \\) of cups. Find \\( \\mu \\) and \\( \\sigma \\), giving your answers to 3 significant figures.",
    questionMafs: `<Mafs viewBox={{ x: [488, 536], y: [-0.0106, 0.0785] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 6 }} yAxis={{ lines: false }} />
  <Polygon points={[[500,0.009],[500.4167,0.0103],[500.8333,0.0118],[501.25,0.0134],[501.6667,0.0151],[502.0833,0.017],[502.5,0.019],[502.9167,0.0211],[503.3333,0.0234],[503.75,0.0258],[504.1667,0.0284],[504.5833,0.031],[505,0.0337],[505.4167,0.0364],[505.8333,0.0392],[506.25,0.042],[506.6667,0.0448],[507.0833,0.0475],[507.5,0.0502],[507.9167,0.0527],[508.3333,0.0552],[508.75,0.0574],[509.1667,0.0595],[509.5833,0.0613],[510,0.0629],[510.4167,0.0642],[510.8333,0.0652],[511.25,0.066],[511.6667,0.0664],[512.0833,0.0665],[512.5,0.0663],[512.9167,0.0657],[513.3333,0.0649],[513.75,0.0637],[514.1667,0.0623],[514.5833,0.0606],[515,0.0587],[515.4167,0.0565],[515.8333,0.0542],[516.25,0.0517],[516.6667,0.0491],[517.0833,0.0464],[517.5,0.0437],[517.9167,0.0409],[518.3333,0.0381],[518.75,0.0353],[519.1667,0.0326],[519.5833,0.0299],[520,0.0273],[520,0],[500,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-512)**2)/(2*6*6))/(6*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[512, 0]} point2={[512, 0.0665]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[500, 0]} point2={[500, 0.009]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[520, 0]} point2={[520, 0.0273]} color="var(--mafs-fg-orange)" />
  <Text x={512} y={0.073} attach="n">μ = 512</Text>
  <Text x={500} y={-0.0053} attach="s">500</Text>
  <Text x={520} y={-0.0053} attach="s">520</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "simultaneous parameters", "inverse normal", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Translate the percentages into probabilities.", workingLatex: "\\mathrm{P}(V < 500) = 0.02, \\qquad \\mathrm{P}(V > 520) = 0.10", explanation: "\"Underfill on 2% of cups\" means a lower-tail probability of \\( 0.02 \\); \"overfill on 10%\" means an upper-tail probability of \\( 0.10 \\)." },
        { stepNumber: 2, description: "Find the z-value for the lower boundary.", workingLatex: "z_1 = \\Phi^{-1}(0.02) = -2.0537", explanation: "From the inverse-normal table, \\( \\Phi^{-1}(0.98)=2.0537 \\), so \\( \\Phi^{-1}(0.02)=-2.0537 \\). Hence \\( 500 = \\mu - 2.0537\\sigma \\)." },
        { stepNumber: 3, description: "Find the z-value for the upper boundary.", workingLatex: "\\mathrm{P}(V > 520) = 0.10 \\;\\Rightarrow\\; \\mathrm{P}(V < 520) = 0.90 \\\\ z_2 = \\Phi^{-1}(0.90) = 1.2816", explanation: "Convert the upper tail to a left-tail area of \\( 0.90 \\). The inverse-normal value is \\( 1.2816 \\), so \\( 520 = \\mu + 1.2816\\sigma \\)." },
        { stepNumber: 4, description: "Write the simultaneous equations.", workingLatex: "500 = \\mu - 2.0537\\sigma \\qquad (1) \\\\ 520 = \\mu + 1.2816\\sigma \\qquad (2)", explanation: "Both come from \\( a = \\mu + z\\sigma \\). Solve for the two unknowns." },
        { stepNumber: 5, description: "Subtract (1) from (2) to find \\( \\sigma \\).", workingLatex: "520 - 500 = (1.2816 + 2.0537)\\sigma \\\\ 20 = 3.3353\\sigma \\;\\Rightarrow\\; \\sigma = 5.9965 \\approx 6.00", explanation: "Eliminating \\( \\mu \\) gives \\( 20 = 3.3353\\sigma \\); dividing gives \\( \\sigma = 6.00\\,\\mathrm{ml} \\) (3 s.f.)." },
        { stepNumber: 6, description: "Back-substitute to find \\( \\mu \\).", workingLatex: "\\mu = 520 - 1.2816\\sigma = 520 - 1.2816(5.9965) = 512.32 \\approx 512", explanation: "Using equation (2) with the unrounded \\( \\sigma \\) gives \\( \\mu = 512\\,\\mathrm{ml} \\) (3 s.f.)." },
        { stepNumber: 7, description: "Check both tail probabilities.", workingLatex: "\\mathrm{P}\\!\\left(Z<\\tfrac{500-512.32}{5.9965}\\right)=\\mathrm{P}(Z<-2.054)=0.0200\\ \\checkmark \\\\ \\mathrm{P}\\!\\left(Z>\\tfrac{520-512.32}{5.9965}\\right)=\\mathrm{P}(Z>1.282)=0.1000\\ \\checkmark", explanation: "Re-standardising both boundaries reproduces \\( 0.02 \\) and \\( 0.10 \\), confirming the solution." }
      ],
      finalAnswer: "\\( \\mu = 512\\,\\mathrm{ml}, \\quad \\sigma = 6.00\\,\\mathrm{ml} \\)",
      canonicalAnswer: "mu=512, sigma=6.00",
    },
  },
  {
    id: "y2nm-054",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 54",
    difficulty: "Challenge",
    questionText: "The scores in a test are modelled by \\( X \\sim \\mathrm{N}(72, 15^2) \\). A distinction is awarded to the top \\( 10\\% \\) of candidates. (a) Find the minimum whole-number score needed for a distinction. (b) A cohort contains \\( 250 \\) candidates. Find the expected number who achieve a distinction.",
    questionMafs: `<Mafs viewBox={{ x: [12, 132], y: [-0.0043, 0.0314] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 15 }} yAxis={{ lines: false }} />
  <Polygon points={[[91,0.0119],[91.8542,0.0111],[92.7083,0.0103],[93.5625,0.0095],[94.4167,0.0087],[95.2708,0.008],[96.125,0.0073],[96.9792,0.0066],[97.8333,0.006],[98.6875,0.0055],[99.5417,0.0049],[100.3958,0.0044],[101.25,0.004],[102.1042,0.0035],[102.9583,0.0032],[103.8125,0.0028],[104.6667,0.0025],[105.5208,0.0022],[106.375,0.0019],[107.2292,0.0017],[108.0833,0.0015],[108.9375,0.0013],[109.7917,0.0011],[110.6458,0.001],[111.5,0.0008],[112.3542,0.0007],[113.2083,0.0006],[114.0625,0.0005],[114.9167,0.0004],[115.7708,0.0004],[116.625,0.0003],[117.4792,0.0003],[118.3333,0.0002],[119.1875,0.0002],[120.0417,0.0002],[120.8958,0.0001],[121.75,0.0001],[122.6042,0.0001],[123.4583,0.0001],[124.3125,0.0001],[125.1667,0],[126.0208,0],[126.875,0],[127.7292,0],[128.5833,0],[129.4375,0],[130.2917,0],[131.1458,0],[132,0],[132,0],[91,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-72)**2)/(2*15*15))/(15*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[72, 0]} point2={[72, 0.0266]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[91, 0]} point2={[91, 0.0119]} color="var(--mafs-fg-orange)" />
  <Text x={72} y={0.0292} attach="n">μ = 72</Text>
  <Text x={91} y={-0.0021} attach="s">91</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "inverse normal", "expected count", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the inverse-normal condition for part (a).", workingLatex: "\\mathrm{P}(X > x) = 0.10 \\;\\Rightarrow\\; \\mathrm{P}(X < x) = 0.90", explanation: "The top \\( 10\\% \\) lies in the upper tail, so the cumulative probability up to the distinction boundary \\( x \\) is \\( 0.90 \\). Tables work with left-tail areas, so we use \\( 0.90 \\)." },
        { stepNumber: 2, description: "Find the corresponding z-value.", workingLatex: "z = \\Phi^{-1}(0.90) = 1.2816", explanation: "The inverse-normal value with \\( 0.90 \\) of the area to its left is \\( 1.2816 \\). The boundary sits this many standard deviations above the mean." },
        { stepNumber: 3, description: "Convert the z-value back to a score.", workingLatex: "x = \\mu + z\\sigma = 72 + 1.2816(15) = 91.22", explanation: "Rearranging \\( z = \\dfrac{x-\\mu}{\\sigma} \\) gives \\( x = \\mu + z\\sigma \\). Substituting \\( \\mu=72, \\sigma=15 \\) gives \\( 91.22 \\)." },
        { stepNumber: 4, description: "Round up to the next whole mark.", workingLatex: "x = \\lceil 91.22 \\rceil = 92 \\text{ marks}", explanation: "A score must exceed the cut-off \\(91.22\\) to fall in the top \\(10\\%\\), so we round up: a candidate scoring \\(91\\) is below the cut-off, while \\(92\\) clears it. The minimum whole-number distinction score is therefore \\(92\\)." },
        { stepNumber: 5, description: "Compute the expected count for part (b).", workingLatex: "E(\\text{distinctions}) = n \\times p = 250 \\times 0.10 = 25", explanation: "The expected number is the cohort size multiplied by the probability of a distinction. With \\( n=250 \\) and \\( p=0.10 \\), the expected number is \\( 25 \\) candidates." }
      ],
      finalAnswer: "\\( x = 92 \\text{ marks}; \\quad \\text{expected number} = 25 \\)",
      canonicalAnswer: "x=92 marks; 25 candidates",
    },
  },
  {
    id: "y2nm-055",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 55",
    difficulty: "Challenge",
    questionText: "The times, in minutes, taken by customers to complete a survey are modelled by \\( T \\sim \\mathrm{N}(50, 8^2) \\). (a) Find the probability that a randomly chosen customer takes between \\( 45 \\) and \\( 60 \\) minutes. (b) On a day when \\( 400 \\) customers complete the survey, find the expected number who take between \\( 45 \\) and \\( 60 \\) minutes.",
    questionMafs: `<Mafs viewBox={{ x: [18, 82], y: [-0.008, 0.0588] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 8 }} yAxis={{ lines: false }} />
  <Polygon points={[[45,0.041],[45.3125,0.042],[45.625,0.0429],[45.9375,0.0438],[46.25,0.0447],[46.5625,0.0455],[46.875,0.0462],[47.1875,0.0469],[47.5,0.0475],[47.8125,0.048],[48.125,0.0485],[48.4375,0.0489],[48.75,0.0493],[49.0625,0.0495],[49.375,0.0497],[49.6875,0.0498],[50,0.0499],[50.3125,0.0498],[50.625,0.0497],[50.9375,0.0495],[51.25,0.0493],[51.5625,0.0489],[51.875,0.0485],[52.1875,0.048],[52.5,0.0475],[52.8125,0.0469],[53.125,0.0462],[53.4375,0.0455],[53.75,0.0447],[54.0625,0.0438],[54.375,0.0429],[54.6875,0.042],[55,0.041],[55.3125,0.04],[55.625,0.0389],[55.9375,0.0379],[56.25,0.0368],[56.5625,0.0356],[56.875,0.0345],[57.1875,0.0333],[57.5,0.0321],[57.8125,0.031],[58.125,0.0298],[58.4375,0.0286],[58.75,0.0274],[59.0625,0.0263],[59.375,0.0251],[59.6875,0.024],[60,0.0228],[60,0],[45,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-50)**2)/(2*8*8))/(8*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[50, 0]} point2={[50, 0.0499]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[45, 0]} point2={[45, 0.041]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[60, 0]} point2={[60, 0.0228]} color="var(--mafs-fg-orange)" />
  <Text x={50} y={0.0547} attach="n">μ = 50</Text>
  <Text x={45} y={-0.004} attach="s">45</Text>
  <Text x={60} y={-0.004} attach="s">60</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "standardising", "expected count", "between"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise the lower boundary.", workingLatex: "z_{\\text{lo}} = \\frac{45 - 50}{8} = -0.625", explanation: "Standardising with \\( Z = \\dfrac{T-\\mu}{\\sigma} \\) maps \\( T=45 \\) to \\( z=-0.625 \\). This boundary lies just below the mean." },
        { stepNumber: 2, description: "Standardise the upper boundary.", workingLatex: "z_{\\text{hi}} = \\frac{60 - 50}{8} = 1.25", explanation: "Mapping \\( T=60 \\) gives \\( z=1.25 \\), which lies above the mean." },
        { stepNumber: 3, description: "Write the probability as a difference of cumulative areas.", workingLatex: "\\mathrm{P}(45 < T < 60) = \\Phi(1.25) - \\Phi(-0.625)", explanation: "The probability between two values equals the cumulative area up to the upper boundary minus that up to the lower boundary." },
        { stepNumber: 4, description: "Evaluate the cumulative probabilities.", workingLatex: "\\Phi(1.25) = 0.8944, \\qquad \\Phi(-0.625) = 0.2660 \\\\ \\mathrm{P}(45 < T < 60) = 0.8944 - 0.2660 = 0.6284", explanation: "From the normal tables, \\( \\Phi(1.25)=0.8944 \\) and \\( \\Phi(-0.625)=1-\\Phi(0.625)=1-0.7340=0.2660 \\). Subtracting gives \\( 0.6284 \\) (4 d.p.)." },
        { stepNumber: 5, description: "Compute the expected number for part (b).", workingLatex: "E = n \\times p = 400 \\times 0.6284 = 251.36 \\approx 251", explanation: "Multiply the number of customers by the probability. \\( 400 \\times 0.6284 = 251.36 \\); since a count must be a whole number, the expected number is about \\( 251 \\) customers." }
      ],
      finalAnswer: "\\( \\mathrm{P}(45 < T < 60) = 0.6284; \\quad \\text{expected number} \\approx 251 \\)",
      canonicalAnswer: "0.6284; 251 customers",
    },
  },
  {
    id: "y2nm-056",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 56",
    difficulty: "Challenge",
    questionText: "The number of minutes by which a daily train is late is modelled by \\( X \\sim \\mathrm{N}(8.5, 2^2) \\). On a given day the train is known to be more than \\( 10 \\) minutes late. Find the probability that it is in fact more than \\( 12 \\) minutes late.",
    questionMafs: `<Mafs viewBox={{ x: [0.5, 16.5], y: [-0.0319, 0.2354] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 2 }} yAxis={{ lines: false }} />
  <Polygon points={[[12,0.0431],[12.0938,0.0397],[12.1875,0.0365],[12.2813,0.0334],[12.375,0.0305],[12.4688,0.0278],[12.5625,0.0253],[12.6563,0.023],[12.75,0.0209],[12.8438,0.0189],[12.9375,0.017],[13.0313,0.0153],[13.125,0.0138],[13.2188,0.0123],[13.3125,0.011],[13.4063,0.0098],[13.5,0.0088],[13.5938,0.0078],[13.6875,0.0069],[13.7813,0.0061],[13.875,0.0054],[13.9688,0.0047],[14.0625,0.0042],[14.1563,0.0037],[14.25,0.0032],[14.3438,0.0028],[14.4375,0.0024],[14.5313,0.0021],[14.625,0.0018],[14.7188,0.0016],[14.8125,0.0014],[14.9063,0.0012],[15,0.001],[15.0938,0.0009],[15.1875,0.0007],[15.2813,0.0006],[15.375,0.0005],[15.4688,0.0005],[15.5625,0.0004],[15.6563,0.0003],[15.75,0.0003],[15.8438,0.0002],[15.9375,0.0002],[16.0313,0.0002],[16.125,0.0001],[16.2188,0.0001],[16.3125,0.0001],[16.4063,0.0001],[16.5,0.0001],[16.5,0],[12,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-8.5)**2)/(2*2*2))/(2*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[8.5, 0]} point2={[8.5, 0.1995]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[12, 0]} point2={[12, 0.0431]} color="var(--mafs-fg-orange)" />
  <Text x={8.5} y={0.2189} attach="n">μ = 8.5</Text>
  <Text x={12} y={-0.016} attach="s">12</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "conditional probability", "standardising", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the conditional probability statement.", workingLatex: "\\mathrm{P}(X > 12 \\mid X > 10) = \\frac{\\mathrm{P}(X > 12 \\cap X > 10)}{\\mathrm{P}(X > 10)}", explanation: "We want the probability of the event \\( X>12 \\) given the information \\( X>10 \\); apply \\( \\mathrm{P}(A\\mid B)=\\dfrac{\\mathrm{P}(A\\cap B)}{\\mathrm{P}(B)} \\)." },
        { stepNumber: 2, description: "Simplify the intersection.", workingLatex: "\\{X > 12\\} \\subseteq \\{X > 10\\} \\;\\Rightarrow\\; \\mathrm{P}(X > 12 \\cap X > 10) = \\mathrm{P}(X > 12)", explanation: "Being more than \\( 12 \\) minutes late automatically means being more than \\( 10 \\) minutes late, so the joint event reduces to \\( X>12 \\)." },
        { stepNumber: 3, description: "Standardise and evaluate the numerator.", workingLatex: "\\mathrm{P}(X > 12) = \\mathrm{P}\\!\\left(Z > \\tfrac{12 - 8.5}{2}\\right) = \\mathrm{P}(Z > 1.75) = 0.0401", explanation: "Standardising: \\( \\dfrac{12-8.5}{2}=1.75 \\). The upper tail \\( \\mathrm{P}(Z>1.75)=1-0.9599=0.0401 \\)." },
        { stepNumber: 4, description: "Standardise and evaluate the denominator.", workingLatex: "\\mathrm{P}(X > 10) = \\mathrm{P}\\!\\left(Z > \\tfrac{10 - 8.5}{2}\\right) = \\mathrm{P}(Z > 0.75) = 0.2266", explanation: "Here \\( \\dfrac{10-8.5}{2}=0.75 \\), giving \\( \\mathrm{P}(Z>0.75)=1-0.7734=0.2266 \\)." },
        { stepNumber: 5, description: "Divide to obtain the conditional probability.", workingLatex: "\\mathrm{P}(X > 12 \\mid X > 10) = \\frac{0.0401}{0.2266} = 0.1768", explanation: "Dividing gives \\( 0.1768 \\) (4 d.p.). Knowing the train is already over \\( 10 \\) minutes late raises the chance of exceeding \\( 12 \\) minutes well above the unconditional \\( 0.0401 \\)." }
      ],
      finalAnswer: "\\( \\mathrm{P}(X > 12 \\mid X > 10) = 0.1768 \\)",
      canonicalAnswer: "0.1768",
    },
  },
  {
    id: "y2nm-057",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 57",
    difficulty: "Challenge",
    questionText: "The operating lifetimes, in hours, of a brand of light bulb are modelled by \\( X \\sim \\mathrm{N}(1200, 150^2) \\). The manufacturer offers a warranty and wishes only \\( 2.5\\% \\) of bulbs to fail before the warranty period ends. (a) Find the warranty period, to the nearest hour. (b) In a batch of \\( 5000 \\) bulbs, find the expected number that fail before this warranty period.",
    questionMafs: `<Mafs viewBox={{ x: [600, 1800], y: [-0.0004, 0.0031] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 150 }} yAxis={{ lines: false }} />
  <Polygon points={[[600,0],[606.375,0],[612.75,0],[619.125,0],[625.5,0],[631.875,0],[638.25,0],[644.625,0],[651,0],[657.375,0],[663.75,0],[670.125,0],[676.5,0],[682.875,0],[689.25,0],[695.625,0],[702,0],[708.375,0],[714.75,0],[721.125,0],[727.5,0],[733.875,0],[740.25,0],[746.625,0],[753,0],[759.375,0],[765.75,0],[772.125,0],[778.5,0.0001],[784.875,0.0001],[791.25,0.0001],[797.625,0.0001],[804,0.0001],[810.375,0.0001],[816.75,0.0001],[823.125,0.0001],[829.5,0.0001],[835.875,0.0001],[842.25,0.0002],[848.625,0.0002],[855,0.0002],[861.375,0.0002],[867.75,0.0002],[874.125,0.0003],[880.5,0.0003],[886.875,0.0003],[893.25,0.0003],[899.625,0.0004],[906,0.0004],[906,0],[600,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-1200)**2)/(2*150*150))/(150*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[1200, 0]} point2={[1200, 0.0027]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[906, 0]} point2={[906, 0.0004]} color="var(--mafs-fg-orange)" />
  <Text x={1200} y={0.0029} attach="n">μ = 1200</Text>
  <Text x={906} y={-0.0002} attach="s">906</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "inverse normal", "expected count", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Translate the warranty condition for part (a).", workingLatex: "\\mathrm{P}(X < w) = 0.025", explanation: "Only \\( 2.5\\% \\) of bulbs should fail before the warranty length \\( w \\), so the cumulative probability up to \\( w \\) is \\( 0.025 \\). This is a left-tail boundary." },
        { stepNumber: 2, description: "Find the z-value.", workingLatex: "z = \\Phi^{-1}(0.025) = -1.96", explanation: "The inverse-normal value with \\( 0.025 \\) of the area to its left is \\( -1.96 \\) (a standard result). The boundary lies \\( 1.96 \\) standard deviations below the mean." },
        { stepNumber: 3, description: "Convert the z-value to a lifetime.", workingLatex: "w = \\mu + z\\sigma = 1200 + (-1.96)(150) = 1200 - 294 = 906", explanation: "Using \\( w = \\mu + z\\sigma \\) with \\( \\mu=1200, \\sigma=150 \\) gives \\( w = 906\\,\\mathrm{hours} \\), already a whole number." },
        { stepNumber: 4, description: "State the warranty period.", workingLatex: "w = 906 \\text{ hours}", explanation: "The warranty should be set at \\( 906 \\) hours so that only \\( 2.5\\% \\) of bulbs fail before it expires." },
        { stepNumber: 5, description: "Identify the probability for part (b).", workingLatex: "\\mathrm{P}(X < 906) = 0.025", explanation: "By construction, the probability a single bulb fails before the warranty period is \\( 0.025 \\)." },
        { stepNumber: 6, description: "Compute the expected number of early failures.", workingLatex: "E = n \\times p = 5000 \\times 0.025 = 125", explanation: "Multiply batch size by the failure probability: \\( 5000 \\times 0.025 = 125 \\) bulbs expected to fail before the warranty ends." }
      ],
      finalAnswer: "\\( w = 906 \\text{ hours}; \\quad \\text{expected failures} = 125 \\)",
      canonicalAnswer: "w=906 hours; 125 bulbs",
    },
  },
  {
    id: "y2nm-058",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 58",
    difficulty: "Challenge",
    questionText: "The amount of rainfall, \\( X\\,\\mathrm{mm} \\), recorded at a weather station on a rainy day is modelled by \\( X \\sim \\mathrm{N}(\\mu, \\sigma^2) \\). Records show that \\( 20\\% \\) of rainy days have more than \\( 30\\,\\mathrm{mm} \\) of rain, and \\( 10\\% \\) have less than \\( 20\\,\\mathrm{mm} \\). Find \\( \\mu \\) and \\( \\sigma \\), giving your answers to 3 significant figures.",
    questionMafs: `<Mafs viewBox={{ x: [7.16, 44.84], y: [-0.0136, 0.0999] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 4.71 }} yAxis={{ lines: false }} />
  <Polygon points={[[20,0.0376],[20.2083,0.0398],[20.4167,0.042],[20.625,0.0442],[20.8333,0.0464],[21.0417,0.0487],[21.25,0.0509],[21.4583,0.0532],[21.6667,0.0555],[21.875,0.0577],[22.0833,0.0599],[22.2917,0.0621],[22.5,0.0643],[22.7083,0.0663],[22.9167,0.0684],[23.125,0.0703],[23.3333,0.0722],[23.5417,0.0739],[23.75,0.0756],[23.9583,0.0771],[24.1667,0.0785],[24.375,0.0798],[24.5833,0.081],[24.7917,0.082],[25,0.0828],[25.2083,0.0835],[25.4167,0.0841],[25.625,0.0844],[25.8333,0.0846],[26.0417,0.0847],[26.25,0.0846],[26.4583,0.0843],[26.6667,0.0839],[26.875,0.0833],[27.0833,0.0825],[27.2917,0.0816],[27.5,0.0805],[27.7083,0.0793],[27.9167,0.078],[28.125,0.0765],[28.3333,0.0749],[28.5417,0.0732],[28.75,0.0714],[28.9583,0.0695],[29.1667,0.0676],[29.375,0.0655],[29.5833,0.0634],[29.7917,0.0613],[30,0.0591],[30,0],[20,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-26)**2)/(2*4.71*4.71))/(4.71*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[26, 0]} point2={[26, 0.0847]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[20, 0]} point2={[20, 0.0376]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[30, 0]} point2={[30, 0.0591]} color="var(--mafs-fg-orange)" />
  <Text x={26} y={0.093} attach="n">μ = 26</Text>
  <Text x={20} y={-0.0068} attach="s">20</Text>
  <Text x={30} y={-0.0068} attach="s">30</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "simultaneous parameters", "inverse normal", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Translate the percentages into probabilities.", workingLatex: "\\mathrm{P}(X > 30) = 0.20, \\qquad \\mathrm{P}(X < 20) = 0.10", explanation: "\"20% have more than 30 mm\" is an upper-tail probability; \"10% have less than 20 mm\" is a lower-tail probability." },
        { stepNumber: 2, description: "Find the z-value for the upper boundary.", workingLatex: "\\mathrm{P}(X > 30) = 0.20 \\;\\Rightarrow\\; \\mathrm{P}(X < 30) = 0.80 \\\\ z_1 = \\Phi^{-1}(0.80) = 0.8416", explanation: "Convert the upper tail to a left-tail area of \\( 0.80 \\); its inverse-normal value is \\( 0.8416 \\). Thus \\( 30 = \\mu + 0.8416\\sigma \\)." },
        { stepNumber: 3, description: "Find the z-value for the lower boundary.", workingLatex: "z_2 = \\Phi^{-1}(0.10) = -1.2816", explanation: "The boundary at \\( 20 \\) has \\( 0.10 \\) of the area to its left, so \\( z_2 = -1.2816 \\). Thus \\( 20 = \\mu - 1.2816\\sigma \\)." },
        { stepNumber: 4, description: "Form the simultaneous equations.", workingLatex: "30 = \\mu + 0.8416\\sigma \\qquad (1) \\\\ 20 = \\mu - 1.2816\\sigma \\qquad (2)", explanation: "Both equations use \\( a = \\mu + z\\sigma \\). Solve for \\( \\mu \\) and \\( \\sigma \\)." },
        { stepNumber: 5, description: "Subtract (2) from (1) to eliminate \\( \\mu \\).", workingLatex: "30 - 20 = (0.8416 + 1.2816)\\sigma \\\\ 10 = 2.1232\\sigma \\;\\Rightarrow\\; \\sigma = 4.7099 \\approx 4.71", explanation: "The \\( \\mu \\) terms cancel, leaving \\( 10 = 2.1232\\sigma \\); dividing gives \\( \\sigma = 4.71\\,\\mathrm{mm} \\) (3 s.f.)." },
        { stepNumber: 6, description: "Back-substitute for \\( \\mu \\).", workingLatex: "\\mu = 20 + 1.2816\\sigma = 20 + 1.2816(4.7099) = 26.04 \\approx 26.0", explanation: "Using equation (2) with the unrounded \\( \\sigma \\) gives \\( \\mu = 26.0\\,\\mathrm{mm} \\) (3 s.f.)." },
        { stepNumber: 7, description: "Verify both probabilities.", workingLatex: "\\mathrm{P}\\!\\left(Z>\\tfrac{30-26.04}{4.7099}\\right)=\\mathrm{P}(Z>0.842)=0.2000\\ \\checkmark \\\\ \\mathrm{P}\\!\\left(Z<\\tfrac{20-26.04}{4.7099}\\right)=\\mathrm{P}(Z<-1.282)=0.1000\\ \\checkmark", explanation: "Re-standardising both boundaries reproduces \\( 0.20 \\) and \\( 0.10 \\), confirming the solution." }
      ],
      finalAnswer: "\\( \\mu = 26.0\\,\\mathrm{mm}, \\quad \\sigma = 4.71\\,\\mathrm{mm} \\)",
      canonicalAnswer: "mu=26.0, sigma=4.71",
    },
  },
  {
    id: "y2nm-059",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 59",
    difficulty: "Challenge",
    questionText: "The heights, in centimetres, of adult males in a population are modelled by \\( X \\sim \\mathrm{N}(178, 7^2) \\). A man is chosen at random from those taller than \\( 183\\,\\mathrm{cm} \\). Find the probability that he is taller than \\( 190\\,\\mathrm{cm} \\).",
    questionMafs: `<Mafs viewBox={{ x: [150, 206], y: [-0.0091, 0.0673] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 7 }} yAxis={{ lines: false }} />
  <Polygon points={[[190,0.0131],[190.3333,0.0121],[190.6667,0.0111],[191,0.0102],[191.3333,0.0093],[191.6667,0.0085],[192,0.0077],[192.3333,0.007],[192.6667,0.0063],[193,0.0057],[193.3333,0.0052],[193.6667,0.0047],[194,0.0042],[194.3333,0.0037],[194.6667,0.0033],[195,0.003],[195.3333,0.0027],[195.6667,0.0024],[196,0.0021],[196.3333,0.0018],[196.6667,0.0016],[197,0.0014],[197.3333,0.0013],[197.6667,0.0011],[198,0.001],[198.3333,0.0008],[198.6667,0.0007],[199,0.0006],[199.3333,0.0005],[199.6667,0.0005],[200,0.0004],[200.3333,0.0004],[200.6667,0.0003],[201,0.0003],[201.3333,0.0002],[201.6667,0.0002],[202,0.0002],[202.3333,0.0001],[202.6667,0.0001],[203,0.0001],[203.3333,0.0001],[203.6667,0.0001],[204,0.0001],[204.3333,0],[204.6667,0],[205,0],[205.3333,0],[205.6667,0],[206,0],[206,0],[190,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-178)**2)/(2*7*7))/(7*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[178, 0]} point2={[178, 0.057]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[190, 0]} point2={[190, 0.0131]} color="var(--mafs-fg-orange)" />
  <Text x={178} y={0.0625} attach="n">μ = 178</Text>
  <Text x={190} y={-0.0046} attach="s">190</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "conditional probability", "standardising", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the conditional probability formula.", workingLatex: "\\mathrm{P}(X > 190 \\mid X > 183) = \\frac{\\mathrm{P}(X > 190 \\cap X > 183)}{\\mathrm{P}(X > 183)}", explanation: "We condition on \\( X>183 \\) (the man is chosen from this group) and want \\( X>190 \\). Apply \\( \\mathrm{P}(A\\mid B)=\\dfrac{\\mathrm{P}(A\\cap B)}{\\mathrm{P}(B)} \\)." },
        { stepNumber: 2, description: "Simplify the intersection.", workingLatex: "\\{X > 190\\} \\subseteq \\{X > 183\\} \\;\\Rightarrow\\; \\mathrm{P}(X > 190 \\cap X > 183) = \\mathrm{P}(X > 190)", explanation: "Being taller than \\( 190 \\) implies being taller than \\( 183 \\), so the intersection is just \\( X>190 \\)." },
        { stepNumber: 3, description: "Standardise and evaluate the numerator.", workingLatex: "\\mathrm{P}(X > 190) = \\mathrm{P}\\!\\left(Z > \\tfrac{190 - 178}{7}\\right) = \\mathrm{P}(Z > 1.7143) = 0.0432", explanation: "Standardising: \\( \\dfrac{190-178}{7}=1.7143 \\). The upper-tail area \\( \\mathrm{P}(Z>1.7143)=0.0432 \\)." },
        { stepNumber: 4, description: "Standardise and evaluate the denominator.", workingLatex: "\\mathrm{P}(X > 183) = \\mathrm{P}\\!\\left(Z > \\tfrac{183 - 178}{7}\\right) = \\mathrm{P}(Z > 0.7143) = 0.2375", explanation: "Here \\( \\dfrac{183-178}{7}=0.7143 \\), giving \\( \\mathrm{P}(Z>0.7143)=0.2375 \\)." },
        { stepNumber: 5, description: "Divide to obtain the conditional probability.", workingLatex: "\\mathrm{P}(X > 190 \\mid X > 183) = \\frac{0.0432}{0.2375} = 0.1820", explanation: "Dividing gives \\( 0.1820 \\) (4 d.p.). Restricting to men over \\( 183\\,\\mathrm{cm} \\) raises the probability of exceeding \\( 190\\,\\mathrm{cm} \\) well above the unconditional \\( 0.0432 \\)." }
      ],
      finalAnswer: "\\( \\mathrm{P}(X > 190 \\mid X > 183) = 0.1820 \\)",
      canonicalAnswer: "0.1820",
    },
  },
  {
    id: "y2nm-060",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 60",
    difficulty: "Challenge",
    questionText: "The annual rainfall, \\( X\\,\\mathrm{mm} \\), at a location is modelled by \\( X \\sim \\mathrm{N}(850, 120^2) \\). The middle \\( 80\\% \\) of years (those between the \\( 10\\text{th} \\) and \\( 90\\text{th} \\) percentiles) are classed as typical. (a) Find the two rainfall values that bound a typical year, to the nearest \\( \\mathrm{mm} \\). (b) Over a \\( 50 \\)-year period, find the expected number of years that are not typical.",
    questionMafs: `<Mafs viewBox={{ x: [370, 1330], y: [-0.0005, 0.0039] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 120 }} yAxis={{ lines: false }} />
  <Polygon points={[[696,0.0015],[702.4167,0.0016],[708.8333,0.0017],[715.25,0.0018],[721.6667,0.0019],[728.0833,0.002],[734.5,0.0021],[740.9167,0.0022],[747.3333,0.0023],[753.75,0.0024],[760.1667,0.0025],[766.5833,0.0026],[773,0.0027],[779.4167,0.0028],[785.8333,0.0029],[792.25,0.003],[798.6667,0.003],[805.0833,0.0031],[811.5,0.0032],[817.9167,0.0032],[824.3333,0.0032],[830.75,0.0033],[837.1667,0.0033],[843.5833,0.0033],[850,0.0033],[856.4167,0.0033],[862.8333,0.0033],[869.25,0.0033],[875.6667,0.0032],[882.0833,0.0032],[888.5,0.0032],[894.9167,0.0031],[901.3333,0.003],[907.75,0.003],[914.1667,0.0029],[920.5833,0.0028],[927,0.0027],[933.4167,0.0026],[939.8333,0.0025],[946.25,0.0024],[952.6667,0.0023],[959.0833,0.0022],[965.5,0.0021],[971.9167,0.002],[978.3333,0.0019],[984.75,0.0018],[991.1667,0.0017],[997.5833,0.0016],[1004,0.0015],[1004,0],[696,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-850)**2)/(2*120*120))/(120*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[850, 0]} point2={[850, 0.0033]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[696, 0]} point2={[696, 0.0015]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[1004, 0]} point2={[1004, 0.0015]} color="var(--mafs-fg-orange)" />
  <Text x={850} y={0.0036} attach="n">μ = 850</Text>
  <Text x={696} y={-0.0003} attach="s">696</Text>
  <Text x={1004} y={-0.0003} attach="s">1004</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution", "inverse normal", "expected count", "between", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the two percentile conditions for part (a).", workingLatex: "\\mathrm{P}(X < a) = 0.10, \\qquad \\mathrm{P}(X < b) = 0.90", explanation: "The middle \\( 80\\% \\) is bounded below by the \\( 10\\text{th} \\) percentile \\( a \\) and above by the \\( 90\\text{th} \\) percentile \\( b \\), leaving \\( 10\\% \\) in each tail." },
        { stepNumber: 2, description: "Find the two z-values.", workingLatex: "z_a = \\Phi^{-1}(0.10) = -1.2816, \\qquad z_b = \\Phi^{-1}(0.90) = 1.2816", explanation: "By symmetry the percentiles are equidistant from the mean, with \\( z = \\mp 1.2816 \\)." },
        { stepNumber: 3, description: "Convert the lower z-value to a rainfall value.", workingLatex: "a = \\mu + z_a\\sigma = 850 + (-1.2816)(120) = 850 - 153.8 = 696.2 \\approx 696", explanation: "Using \\( a = \\mu + z\\sigma \\) with \\( \\mu=850, \\sigma=120 \\) gives \\( a \\approx 696\\,\\mathrm{mm} \\)." },
        { stepNumber: 4, description: "Convert the upper z-value to a rainfall value.", workingLatex: "b = \\mu + z_b\\sigma = 850 + (1.2816)(120) = 850 + 153.8 = 1003.8 \\approx 1004", explanation: "Similarly \\( b \\approx 1004\\,\\mathrm{mm} \\). A typical year lies between \\( 696 \\) and \\( 1004\\,\\mathrm{mm} \\)." },
        { stepNumber: 5, description: "Find the probability a year is not typical for part (b).", workingLatex: "\\mathrm{P}(\\text{not typical}) = 1 - 0.80 = 0.20", explanation: "The middle \\( 80\\% \\) are typical, so the remaining \\( 20\\% \\) (split between the two tails) are not typical." },
        { stepNumber: 6, description: "Compute the expected number of atypical years.", workingLatex: "E = n \\times p = 50 \\times 0.20 = 10", explanation: "Multiply the number of years by the probability of an atypical year: \\( 50 \\times 0.20 = 10 \\) years expected to be not typical." }
      ],
      finalAnswer: "\\( a = 696\\,\\mathrm{mm}, \\; b = 1004\\,\\mathrm{mm}; \\quad \\text{expected atypical years} = 10 \\)",
      canonicalAnswer: "696 mm to 1004 mm; 10 years",
    },
  },
  {
    id: "y2nm-061",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 61",
    difficulty: "Challenge",
    questionText: "The lifetime, in hours, of a certain brand of battery is modelled by a Normal distribution with mean \\( \\mu \\) and standard deviation \\( \\sigma \\). It is known that \\( 2.5\\% \\) of batteries last less than \\( 10\\,\\mathrm{hours} \\) and \\( 10\\% \\) last more than \\( 20\\,\\mathrm{hours} \\). Find the values of \\( \\mu \\) and \\( \\sigma \\), giving your answers to \\( 3 \\) significant figures.",
    questionMafs: `<Mafs viewBox={{ x: [3.706, 28.386], y: [-0.0207, 0.1526] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 3.085 }} yAxis={{ lines: false }} />
  <Polygon points={[[3.706,0],[3.8371,0.0001],[3.9682,0.0001],[4.0994,0.0001],[4.2305,0.0001],[4.3616,0.0001],[4.4927,0.0001],[4.6239,0.0001],[4.755,0.0002],[4.8861,0.0002],[5.0173,0.0002],[5.1484,0.0003],[5.2795,0.0003],[5.4106,0.0003],[5.5417,0.0004],[5.6729,0.0005],[5.804,0.0005],[5.9351,0.0006],[6.0663,0.0007],[6.1974,0.0008],[6.3285,0.0009],[6.4596,0.001],[6.5908,0.0012],[6.7219,0.0013],[6.853,0.0015],[6.9841,0.0017],[7.1153,0.002],[7.2464,0.0022],[7.3775,0.0025],[7.5086,0.0028],[7.6398,0.0032],[7.7709,0.0035],[7.902,0.004],[8.0331,0.0044],[8.1642,0.0049],[8.2954,0.0055],[8.4265,0.0061],[8.5576,0.0068],[8.6887,0.0075],[8.8199,0.0083],[8.951,0.0092],[9.0821,0.0101],[9.2132,0.0111],[9.3444,0.0122],[9.4755,0.0134],[9.6066,0.0146],[9.7377,0.016],[9.8689,0.0174],[10,0.019],[10,0],[3.706,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-16.046)**2)/(2*3.085*3.085))/(3.085*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[16.046, 0]} point2={[16.046, 0.1293]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[10, 0]} point2={[10, 0.019]} color="var(--mafs-fg-orange)" />
  <Text x={16.046} y={0.1419} attach="n">μ = 16.046</Text>
  <Text x={10} y={-0.0103} attach="s">10</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "inverse-normal", "simultaneous-equations", "standardising"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise the lower-tail condition.", workingLatex: "P(X<10)=0.025 \\implies \\frac{10-\\mu}{\\sigma}=\\Phi^{-1}(0.025)=-1.9600", explanation: "Since 2.5% of the area lies below 10, the standardised value of 10 is the 0.025 percentile of the standard Normal, which is -1.9600." },
        { stepNumber: 2, description: "Standardise the upper-tail condition.", workingLatex: "P(X>20)=0.10 \\implies P(X<20)=0.90 \\implies \\frac{20-\\mu}{\\sigma}=\\Phi^{-1}(0.90)=1.2816", explanation: "P(X>20)=0.10 is equivalent to P(X<20)=0.90, so the standardised value of 20 is the 0.90 percentile, which is 1.2816." },
        { stepNumber: 3, description: "Write the two simultaneous equations.", workingLatex: "10=\\mu-1.9600\\sigma \\qquad 20=\\mu+1.2816\\sigma", explanation: "Rearranging each standardised equation to the form value = mu + z*sigma gives a pair of linear equations in mu and sigma." },
        { stepNumber: 4, description: "Subtract to eliminate the mean and solve for sigma.", workingLatex: "20-10=(1.2816-(-1.9600))\\sigma \\implies 10=3.2416\\,\\sigma \\implies \\sigma=3.0850", explanation: "Subtracting the first equation from the second removes mu, leaving 10 = 3.2416*sigma, so sigma = 3.085 (3 s.f.)." },
        { stepNumber: 5, description: "Back-substitute to find the mean.", workingLatex: "\\mu=10+1.9600\\times 3.0850=16.046", explanation: "Using 10 = mu - 1.9600*sigma with sigma = 3.0850 gives mu = 16.046 (3 s.f.)." },
        { stepNumber: 6, description: "State the solution.", workingLatex: "\\mu=16.0\\ \\mathrm{hours},\\qquad \\sigma=3.09\\ \\mathrm{hours}", explanation: "Rounding to 3 significant figures gives the modelled mean and standard deviation of the battery lifetime." }
      ],
      finalAnswer: "\\( \\mu = 16.0\\ \\mathrm{hours},\\ \\sigma = 3.09\\ \\mathrm{hours} \\)",
      canonicalAnswer: "mu = 16.0 hours, sigma = 3.09 hours",
    },
  },
  {
    id: "y2nm-062",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 62",
    difficulty: "Challenge",
    questionText: "The diameter, in \\( \\mathrm{mm} \\), of a machined component is modelled as \\( X\\sim N(\\mu,\\sigma^{2}) \\). The manufacturer finds that \\( P(X>105)=0.20 \\) and \\( P(X<90)=0.10 \\). Find \\( \\mu \\) and \\( \\sigma \\), giving your answers to \\( 3 \\) significant figures.",
    questionMafs: `<Mafs viewBox={{ x: [70.794, 127.314], y: [-0.009, 0.0666] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 7.065 }} yAxis={{ lines: false }} />
  <Polygon points={[[105,0.0396],[105.4649,0.0374],[105.9298,0.0352],[106.3946,0.0329],[106.8595,0.0307],[107.3244,0.0285],[107.7893,0.0263],[108.2541,0.0242],[108.719,0.0222],[109.1839,0.0202],[109.6488,0.0183],[110.1136,0.0166],[110.5785,0.0149],[111.0434,0.0134],[111.5083,0.0119],[111.9731,0.0106],[112.438,0.0094],[112.9029,0.0083],[113.3678,0.0073],[113.8326,0.0063],[114.2975,0.0055],[114.7624,0.0048],[115.2273,0.0041],[115.6921,0.0035],[116.157,0.003],[116.6219,0.0026],[117.0868,0.0022],[117.5516,0.0018],[118.0165,0.0015],[118.4814,0.0013],[118.9463,0.0011],[119.4111,0.0009],[119.876,0.0007],[120.3409,0.0006],[120.8058,0.0005],[121.2706,0.0004],[121.7355,0.0003],[122.2004,0.0003],[122.6653,0.0002],[123.1301,0.0002],[123.595,0.0001],[124.0599,0.0001],[124.5248,0.0001],[124.9896,0.0001],[125.4545,0.0001],[125.9194,0],[126.3843,0],[126.8491,0],[127.314,0],[127.314,0],[105,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-99.054)**2)/(2*7.065*7.065))/(7.065*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[99.054, 0]} point2={[99.054, 0.0565]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[105, 0]} point2={[105, 0.0396]} color="var(--mafs-fg-orange)" />
  <Text x={99.054} y={0.062} attach="n">μ = 99.054</Text>
  <Text x={105} y={-0.0045} attach="s">105</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "inverse-normal", "simultaneous-equations", "standardising"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise the upper-tail condition.", workingLatex: "P(X>105)=0.20 \\implies P(X<105)=0.80 \\implies \\frac{105-\\mu}{\\sigma}=\\Phi^{-1}(0.80)=0.8416", explanation: "P(X>105)=0.20 means P(X<105)=0.80, so 105 standardises to the 0.80 percentile, which is 0.8416." },
        { stepNumber: 2, description: "Standardise the lower-tail condition.", workingLatex: "P(X<90)=0.10 \\implies \\frac{90-\\mu}{\\sigma}=\\Phi^{-1}(0.10)=-1.2816", explanation: "Since 10% of the area lies below 90, the standardised value of 90 is the 0.10 percentile, which is -1.2816." },
        { stepNumber: 3, description: "Form the simultaneous equations.", workingLatex: "105=\\mu+0.8416\\sigma \\qquad 90=\\mu-1.2816\\sigma", explanation: "Each standardised condition rearranges to value = mu + z*sigma, giving two linear equations." },
        { stepNumber: 4, description: "Subtract to eliminate the mean.", workingLatex: "105-90=(0.8416-(-1.2816))\\sigma \\implies 15=2.1232\\,\\sigma \\implies \\sigma=7.0649", explanation: "Subtracting removes mu, leaving 15 = 2.1232*sigma, so sigma = 7.06 (3 s.f.)." },
        { stepNumber: 5, description: "Back-substitute for the mean.", workingLatex: "\\mu=90+1.2816\\times 7.0649=99.054", explanation: "Using 90 = mu - 1.2816*sigma gives mu = 99.054 (3 s.f.)." },
        { stepNumber: 6, description: "State the solution.", workingLatex: "\\mu=99.1\\ \\mathrm{mm},\\qquad \\sigma=7.06\\ \\mathrm{mm}", explanation: "Rounding to 3 significant figures gives the fitted parameters of the diameter distribution." }
      ],
      finalAnswer: "\\( \\mu = 99.1\\ \\mathrm{mm},\\ \\sigma = 7.06\\ \\mathrm{mm} \\)",
      canonicalAnswer: "mu = 99.1 mm, sigma = 7.06 mm",
    },
  },
  {
    id: "y2nm-063",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 63",
    difficulty: "Challenge",
    questionText: "A greengrocer models the mass, \\( W\\,\\mathrm{kg} \\), of fruit in a randomly chosen bag by \\( W\\sim N(5,\\,3^{2}) \\). (a) Calculate \\( P(W<0) \\). (b) Hence comment on the suitability of the Normal distribution as a model for \\( W \\), and state one further assumption required for the Normal model to be reasonable here.",
    questionMafs: `<Mafs viewBox={{ x: [-7, 17], y: [-0.0213, 0.1569] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 3 }} yAxis={{ lines: false }} />
  <Polygon points={[[-7,0],[-6.8542,0.0001],[-6.7083,0.0001],[-6.5625,0.0001],[-6.4167,0.0001],[-6.2708,0.0001],[-6.125,0.0001],[-5.9792,0.0002],[-5.8333,0.0002],[-5.6875,0.0002],[-5.5417,0.0003],[-5.3958,0.0003],[-5.25,0.0004],[-5.1042,0.0005],[-4.9583,0.0005],[-4.8125,0.0006],[-4.6667,0.0007],[-4.5208,0.0009],[-4.375,0.001],[-4.2292,0.0012],[-4.0833,0.0014],[-3.9375,0.0016],[-3.7917,0.0018],[-3.6458,0.0021],[-3.5,0.0024],[-3.3542,0.0028],[-3.2083,0.0031],[-3.0625,0.0036],[-2.9167,0.0041],[-2.7708,0.0046],[-2.625,0.0053],[-2.4792,0.0059],[-2.3333,0.0067],[-2.1875,0.0075],[-2.0417,0.0085],[-1.8958,0.0095],[-1.75,0.0106],[-1.6042,0.0118],[-1.4583,0.0131],[-1.3125,0.0145],[-1.1667,0.0161],[-1.0208,0.0177],[-0.875,0.0195],[-0.7292,0.0215],[-0.5833,0.0235],[-0.4375,0.0257],[-0.2917,0.0281],[-0.1458,0.0305],[0,0.0332],[0,0],[-7,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-5)**2)/(2*3*3))/(3*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[5, 0]} point2={[5, 0.133]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[0, 0]} point2={[0, 0.0332]} color="var(--mafs-fg-orange)" />
  <Text x={5} y={0.1459} attach="n">μ = 5</Text>
  <Text x={0} y={-0.0106} attach="s">0</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "modelling", "critique", "assumptions"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise the boundary 0.", workingLatex: "Z=\\frac{0-5}{3}=-1.6667", explanation: "To find P(W<0) we standardise 0 using Z = (W - mu)/sigma with mu = 5 and sigma = 3." },
        { stepNumber: 2, description: "Read off the probability.", workingLatex: "P(W<0)=P(Z<-1.6667)=0.0478", explanation: "From the standard Normal distribution, the probability below -1.6667 is 0.0478 (4 d.p.)." },
        { stepNumber: 3, description: "Interpret the probability in context.", workingLatex: "P(W<0)=0.0478\\approx 4.8\\%", explanation: "The model assigns a probability of about 4.8% to a negative mass. A mass of fruit can never be negative, so the model predicts impossible outcomes with non-negligible probability." },
        { stepNumber: 4, description: "Comment on suitability.", workingLatex: "\\text{Normal support is }(-\\infty,\\infty)\\text{; real mass}\\ge 0", explanation: "Because the Normal distribution has infinite range in both directions, it allows negative values, whereas the true quantity is bounded below by 0. With sigma fairly large relative to mu the predicted probability of an impossible value is appreciable, so the Normal model is not fully appropriate." },
        { stepNumber: 5, description: "State a further required assumption.", workingLatex: "\\text{distribution of }W\\text{ is symmetric / unimodal about }5", explanation: "For the Normal to be reasonable we also need the masses to be (approximately) symmetric and unimodal about the mean 5 kg, with no strong skew and individual bags filled independently." }
      ],
      finalAnswer: "\\( P(W<0)=0.0478 \\); the Normal model allows negative masses (impossible for fruit) with probability about 4.8%, so it is not fully appropriate, and it further requires the masses to be approximately symmetric and unimodal about \\( 5\\,\\mathrm{kg} \\).",
    },
  },
  {
    id: "y2nm-064",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 64",
    difficulty: "Challenge",
    questionText: "An economist proposes modelling the annual salary, \\( S \\) (in pounds), of employees at a large firm by \\( S\\sim N(30000,\\,12000^{2}) \\). (a) Find \\( P(S<0) \\). (b) Salary data are typically positively skewed with a long upper tail. With reference to your answer to (a) and to skewness, critique the appropriateness of this Normal model.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "modelling", "critique", "skewness"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise the boundary 0.", workingLatex: "Z=\\frac{0-30000}{12000}=-2.5", explanation: "Standardise S = 0 using Z = (S - mu)/sigma with mu = 30000 and sigma = 12000." },
        { stepNumber: 2, description: "Evaluate the lower-tail probability.", workingLatex: "P(S<0)=P(Z<-2.5)=0.0062", explanation: "From the standard Normal distribution P(Z<-2.5)=0.0062 (4 d.p.), so the model gives a small but non-zero probability of a negative salary." },
        { stepNumber: 3, description: "Comment on the negative-value issue.", workingLatex: "S\\ge 0\\text{ in reality, but model gives }P(S<0)=0.0062>0", explanation: "A salary cannot be negative, yet the Normal model assigns probability 0.0062 to S < 0. Although small, this shows the Normal allows impossible values because its support is unbounded below." },
        { stepNumber: 4, description: "Comment on symmetry versus skewness.", workingLatex: "\\text{Normal is symmetric; salaries are positively skewed}", explanation: "The Normal distribution is symmetric about its mean, so it cannot capture the long upper tail of high earners. Real salary data are positively (right) skewed, meaning the Normal will understate the chance of very large salaries and misplace the bulk of the distribution." },
        { stepNumber: 5, description: "Overall judgement.", workingLatex: "\\text{Normal model is poor for }S", explanation: "Because the data are skewed and bounded below by 0, a symmetric unbounded Normal model is unsuitable; a positively skewed model (e.g. log-Normal) would be more realistic." }
      ],
      finalAnswer: "\\( P(S<0)=0.0062 \\); the Normal allows impossible negative salaries and, being symmetric, cannot represent the positive skew of real salary data, so it is an unsuitable model.",
    },
  },
  {
    id: "y2nm-065",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 65",
    difficulty: "Challenge",
    questionText: "The probability density function of \\( X\\sim N(\\mu,\\sigma^{2}) \\) has points of inflection at \\( x=42 \\) and \\( x=58 \\). (a) Write down \\( \\mu \\) and \\( \\sigma \\). (b) Hence find \\( P(X>62) \\), giving your answer to \\( 4 \\) decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [18, 82], y: [-0.008, 0.0588] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 8 }} yAxis={{ lines: false }} />
  <Polygon points={[[62,0.0162],[62.4167,0.015],[62.8333,0.0138],[63.25,0.0127],[63.6667,0.0116],[64.0833,0.0106],[64.5,0.0096],[64.9167,0.0088],[65.3333,0.0079],[65.75,0.0072],[66.1667,0.0065],[66.5833,0.0058],[67,0.0052],[67.4167,0.0047],[67.8333,0.0042],[68.25,0.0037],[68.6667,0.0033],[69.0833,0.0029],[69.5,0.0026],[69.9167,0.0022],[70.3333,0.002],[70.75,0.0017],[71.1667,0.0015],[71.5833,0.0013],[72,0.0011],[72.4167,0.001],[72.8333,0.0008],[73.25,0.0007],[73.6667,0.0006],[74.0833,0.0005],[74.5,0.0005],[74.9167,0.0004],[75.3333,0.0003],[75.75,0.0003],[76.1667,0.0002],[76.5833,0.0002],[77,0.0002],[77.4167,0.0001],[77.8333,0.0001],[78.25,0.0001],[78.6667,0.0001],[79.0833,0.0001],[79.5,0.0001],[79.9167,0],[80.3333,0],[80.75,0],[81.1667,0],[81.5833,0],[82,0],[82,0],[62,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-50)**2)/(2*8*8))/(8*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[50, 0]} point2={[50, 0.0499]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[62, 0]} point2={[62, 0.0162]} color="var(--mafs-fg-orange)" />
  <Text x={50} y={0.0547} attach="n">μ = 50</Text>
  <Text x={62} y={-0.004} attach="s">62</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "inflection-points", "standardising"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall where the points of inflection occur.", workingLatex: "\\text{inflection at } x=\\mu-\\sigma \\text{ and } x=\\mu+\\sigma", explanation: "For a Normal density the two points of inflection lie exactly one standard deviation either side of the mean, at mu - sigma and mu + sigma." },
        { stepNumber: 2, description: "Find the mean from symmetry.", workingLatex: "\\mu=\\frac{42+58}{2}=50", explanation: "The inflection points are symmetric about the mean, so mu is their average, 50." },
        { stepNumber: 3, description: "Find the standard deviation.", workingLatex: "\\sigma=\\frac{58-42}{2}=8", explanation: "The distance from the mean to each inflection point equals sigma, so sigma = (58 - 42)/2 = 8." },
        { stepNumber: 4, description: "Standardise the value 62.", workingLatex: "Z=\\frac{62-50}{8}=1.5", explanation: "Standardise X = 62 using the parameters just found: Z = (62 - 50)/8 = 1.5." },
        { stepNumber: 5, description: "Evaluate the upper-tail probability.", workingLatex: "P(X>62)=P(Z>1.5)=1-0.9332=0.0668", explanation: "From the standard Normal, P(Z<1.5)=0.9332, so P(X>62)=1-0.9332=0.0668 (4 d.p.)." }
      ],
      finalAnswer: "\\( \\mu=50,\\ \\sigma=8,\\ P(X>62)=0.0668 \\)",
      canonicalAnswer: "mu = 50, sigma = 8, P(X>62) = 0.0668",
    },
  },
  {
    id: "y2nm-066",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 66",
    difficulty: "Challenge",
    questionText: "The mass, \\( M\\,\\mathrm{g} \\), of an apple is modelled by \\( M\\sim N(60,\\sigma^{2}) \\). Given that \\( P(M<70)=0.8413 \\), show that \\( \\sigma=10 \\).",
    questionMafs: `<Mafs viewBox={{ x: [20, 100], y: [-0.0064, 0.0471] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 10 }} yAxis={{ lines: false }} />
  <Polygon points={[[20,0],[21.0417,0],[22.0833,0],[23.125,0],[24.1667,0.0001],[25.2083,0.0001],[26.25,0.0001],[27.2917,0.0002],[28.3333,0.0003],[29.375,0.0004],[30.4167,0.0005],[31.4583,0.0007],[32.5,0.0009],[33.5417,0.0012],[34.5833,0.0016],[35.625,0.002],[36.6667,0.0026],[37.7083,0.0033],[38.75,0.0042],[39.7917,0.0052],[40.8333,0.0064],[41.875,0.0077],[42.9167,0.0093],[43.9583,0.011],[45,0.013],[46.0417,0.0151],[47.0833,0.0173],[48.125,0.0197],[49.1667,0.0222],[50.2083,0.0247],[51.25,0.0272],[52.2917,0.0296],[53.3333,0.0319],[54.375,0.0341],[55.4167,0.0359],[56.4583,0.0375],[57.5,0.0387],[58.5417,0.0395],[59.5833,0.0399],[60.625,0.0398],[61.6667,0.0393],[62.7083,0.0385],[63.75,0.0372],[64.7917,0.0356],[65.8333,0.0337],[66.875,0.0315],[67.9167,0.0292],[68.9583,0.0267],[70,0.0242],[70,0],[20,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-60)**2)/(2*10*10))/(10*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[60, 0]} point2={[60, 0.0399]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[70, 0]} point2={[70, 0.0242]} color="var(--mafs-fg-orange)" />
  <Text x={60} y={0.0438} attach="n">μ = 60</Text>
  <Text x={70} y={-0.0032} attach="s">70</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "show-that", "inverse-normal", "standardising"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise the given probability statement.", workingLatex: "P(M<70)=P\\!\\left(Z<\\frac{70-60}{\\sigma}\\right)=0.8413", explanation: "Standardise M = 70 with mu = 60; the probability below this standardised value must equal 0.8413." },
        { stepNumber: 2, description: "Find the required z-value.", workingLatex: "\\Phi^{-1}(0.8413)=1 \\implies \\frac{70-60}{\\sigma}=1", explanation: "The standard Normal value with cumulative probability 0.8413 is z = 1 (since P(Z<1)=0.8413), so the standardised value of 70 equals 1." },
        { stepNumber: 3, description: "Solve for sigma.", workingLatex: "\\frac{10}{\\sigma}=1 \\implies \\sigma=10", explanation: "Rearranging 10/sigma = 1 gives sigma = 10 g, as required." },
        { stepNumber: 4, description: "Conclude.", workingLatex: "\\sigma=10\\ \\mathrm{g}\\ \\text{(shown)}", explanation: "This confirms the required result that the standard deviation is 10 g." }
      ],
      finalAnswer: "\\( \\sigma=10\\ \\mathrm{g} \\)",
      canonicalAnswer: "sigma = 10 g",
    },
  },
  {
    id: "y2nm-067",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 67",
    difficulty: "Challenge",
    questionText: "The length, \\( X\\,\\mathrm{cm} \\), of a manufactured rod is modelled by \\( X\\sim N(50,\\,2^{2}) \\). A rod is accepted if its length lies between \\( 47\\,\\mathrm{cm} \\) and \\( 53\\,\\mathrm{cm} \\), and is rejected otherwise. (a) Find the probability \\( p \\) that a randomly chosen rod is rejected. (b) A batch of \\( 8 \\) rods is selected at random. Using a suitable binomial model, find the probability that at least one rod in the batch is rejected. Give answers to \\( 4 \\) decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [42, 58], y: [-0.0319, 0.2354] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 2 }} yAxis={{ lines: false }} />
  <Polygon points={[[47,0.0648],[47.125,0.071],[47.25,0.0775],[47.375,0.0843],[47.5,0.0913],[47.625,0.0986],[47.75,0.1059],[47.875,0.1134],[48,0.121],[48.125,0.1285],[48.25,0.136],[48.375,0.1434],[48.5,0.1506],[48.625,0.1575],[48.75,0.1641],[48.875,0.1703],[49,0.176],[49.125,0.1813],[49.25,0.1859],[49.375,0.19],[49.5,0.1933],[49.625,0.196],[49.75,0.1979],[49.875,0.1991],[50,0.1995],[50.125,0.1991],[50.25,0.1979],[50.375,0.196],[50.5,0.1933],[50.625,0.19],[50.75,0.1859],[50.875,0.1813],[51,0.176],[51.125,0.1703],[51.25,0.1641],[51.375,0.1575],[51.5,0.1506],[51.625,0.1434],[51.75,0.136],[51.875,0.1285],[52,0.121],[52.125,0.1134],[52.25,0.1059],[52.375,0.0986],[52.5,0.0913],[52.625,0.0843],[52.75,0.0775],[52.875,0.071],[53,0.0648],[53,0],[47,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-50)**2)/(2*2*2))/(2*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[50, 0]} point2={[50, 0.1995]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[47, 0]} point2={[47, 0.0648]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[53, 0]} point2={[53, 0.0648]} color="var(--mafs-fg-orange)" />
  <Text x={50} y={0.2189} attach="n">μ = 50</Text>
  <Text x={47} y={-0.016} attach="s">47</Text>
  <Text x={53} y={-0.016} attach="s">53</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "binomial", "proportion", "standardising"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise the acceptance limits.", workingLatex: "\\frac{47-50}{2}=-1.5,\\qquad \\frac{53-50}{2}=1.5", explanation: "Standardise both boundaries with mu = 50, sigma = 2; the acceptance region corresponds to -1.5 < Z < 1.5." },
        { stepNumber: 2, description: "Find the acceptance probability.", workingLatex: "P(47<X<53)=P(-1.5<Z<1.5)=0.9332-0.0668=0.8664", explanation: "P(Z<1.5)=0.9332 and P(Z<-1.5)=0.0668, so the probability of acceptance is 0.9332 - 0.0668 = 0.8664." },
        { stepNumber: 3, description: "Find the rejection probability p.", workingLatex: "p=1-0.8664=0.1336", explanation: "Rejection is the complement of acceptance, so p = 1 - 0.8664 = 0.1336 (4 d.p.)." },
        { stepNumber: 4, description: "Set up the binomial model.", workingLatex: "R\\sim B(8,\\,0.1336),\\quad R=\\text{number rejected}", explanation: "With 8 independent rods each rejected with probability p = 0.1336, the number rejected follows B(8, 0.1336)." },
        { stepNumber: 5, description: "Use the complement for 'at least one'.", workingLatex: "P(R\\ge 1)=1-P(R=0)=1-(1-0.1336)^{8}", explanation: "The complement of 'at least one rejected' is 'none rejected', so P(R>=1) = 1 - (0.8664)^8." },
        { stepNumber: 6, description: "Evaluate.", workingLatex: "P(R\\ge 1)=1-(0.8664)^{8}=1-0.3175=0.6825", explanation: "Computing (0.8664)^8 = 0.3175 gives P(R>=1) = 0.6825 (4 d.p.)." }
      ],
      finalAnswer: "\\( p=0.1336,\\quad P(\\text{at least one rejected})=0.6825 \\)",
      canonicalAnswer: "p = 0.1336, P(at least one rejected) = 0.6825",
    },
  },
  {
    id: "y2nm-068",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 68",
    difficulty: "Challenge",
    questionText: "Scores on a standardised test are modelled by \\( X\\sim N(500,\\,100^{2}) \\). A score above \\( 650 \\) is classed as 'distinction'. (a) Find the probability \\( p \\) that a randomly chosen candidate gains a distinction. (b) In a randomly selected group of \\( 12 \\) candidates, find the probability that exactly \\( 2 \\) gain a distinction. Give answers to \\( 4 \\) decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [100, 900], y: [-0.0006, 0.0047] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 100 }} yAxis={{ lines: false }} />
  <Polygon points={[[650,0.0013],[655.2083,0.0012],[660.4167,0.0011],[665.625,0.001],[670.8333,0.0009],[676.0417,0.0008],[681.25,0.0008],[686.4583,0.0007],[691.6667,0.0006],[696.875,0.0006],[702.0833,0.0005],[707.2917,0.0005],[712.5,0.0004],[717.7083,0.0004],[722.9167,0.0003],[728.125,0.0003],[733.3333,0.0003],[738.5417,0.0002],[743.75,0.0002],[748.9583,0.0002],[754.1667,0.0002],[759.375,0.0001],[764.5833,0.0001],[769.7917,0.0001],[775,0.0001],[780.2083,0.0001],[785.4167,0.0001],[790.625,0.0001],[795.8333,0.0001],[801.0417,0],[806.25,0],[811.4583,0],[816.6667,0],[821.875,0],[827.0833,0],[832.2917,0],[837.5,0],[842.7083,0],[847.9167,0],[853.125,0],[858.3333,0],[863.5417,0],[868.75,0],[873.9583,0],[879.1667,0],[884.375,0],[889.5833,0],[894.7917,0],[900,0],[900,0],[650,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-500)**2)/(2*100*100))/(100*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[500, 0]} point2={[500, 0.004]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[650, 0]} point2={[650, 0.0013]} color="var(--mafs-fg-orange)" />
  <Text x={500} y={0.0044} attach="n">μ = 500</Text>
  <Text x={650} y={-0.0003} attach="s">650</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "binomial", "proportion", "standardising"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise the distinction boundary.", workingLatex: "Z=\\frac{650-500}{100}=1.5", explanation: "Standardise X = 650 using mu = 500 and sigma = 100 to get Z = 1.5." },
        { stepNumber: 2, description: "Find the distinction probability p.", workingLatex: "p=P(X>650)=P(Z>1.5)=1-0.9332=0.0668", explanation: "P(Z<1.5)=0.9332, so p = P(Z>1.5) = 1 - 0.9332 = 0.0668 (4 d.p.)." },
        { stepNumber: 3, description: "Set up the binomial model.", workingLatex: "D\\sim B(12,\\,0.0668),\\quad D=\\text{number of distinctions}", explanation: "With 12 independent candidates each gaining a distinction with probability p = 0.0668, the count follows B(12, 0.0668)." },
        { stepNumber: 4, description: "Write the probability of exactly 2.", workingLatex: "P(D=2)=\\binom{12}{2}(0.0668)^{2}(0.9332)^{10}", explanation: "Use the binomial probability formula with n = 12, r = 2, p = 0.0668." },
        { stepNumber: 5, description: "Evaluate the components.", workingLatex: "\\binom{12}{2}=66,\\quad (0.0668)^{2}=0.004462,\\quad (0.9332)^{10}=0.5009", explanation: "Compute the binomial coefficient 66 and the two power terms before multiplying." },
        { stepNumber: 6, description: "Combine.", workingLatex: "P(D=2)=66\\times 0.004462\\times 0.5009=0.1475", explanation: "Multiplying the three factors gives P(D=2)=0.1475 (4 d.p.)." }
      ],
      finalAnswer: "\\( p=0.0668,\\quad P(D=2)=0.1475 \\)",
      canonicalAnswer: "p = 0.0668, P(exactly 2 distinctions) = 0.1475",
    },
  },
  {
    id: "y2nm-069",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 69",
    difficulty: "Challenge",
    questionText: "A psychologist models the reaction time, \\( T \\) seconds, of participants by \\( T\\sim N(0.30,\\,0.10^{2}) \\). (a) Find \\( P(T<0.25) \\). (b) Find \\( P(T<0) \\) and explain why this reveals a weakness of the Normal model here. (c) Reaction-time data are usually positively skewed. State, with a reason, whether this makes the Normal model more or less appropriate. Give probabilities to \\( 4 \\) decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [-0.1, 0.7], y: [-0.6383, 4.7075] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 0.1 }} yAxis={{ lines: false }} />
  <Polygon points={[[-0.1,0.0013],[-0.0927,0.0018],[-0.0854,0.0024],[-0.0781,0.0031],[-0.0708,0.0041],[-0.0635,0.0054],[-0.0563,0.007],[-0.049,0.0091],[-0.0417,0.0116],[-0.0344,0.0149],[-0.0271,0.019],[-0.0198,0.024],[-0.0125,0.0302],[-0.0052,0.0379],[0.0021,0.0472],[0.0094,0.0585],[0.0167,0.0721],[0.024,0.0884],[0.0312,0.1078],[0.0385,0.1308],[0.0458,0.1578],[0.0531,0.1894],[0.0604,0.2262],[0.0677,0.2687],[0.075,0.3174],[0.0823,0.373],[0.0896,0.436],[0.0969,0.507],[0.1042,0.5863],[0.1115,0.6745],[0.1188,0.7719],[0.126,0.8786],[0.1333,0.9948],[0.1406,1.1203],[0.1479,1.2551],[0.1552,1.3985],[0.1625,1.5501],[0.1698,1.709],[0.1771,1.8743],[0.1844,2.0446],[0.1917,2.2185],[0.199,2.3945],[0.2063,2.5707],[0.2135,2.7453],[0.2208,2.9162],[0.2281,3.0813],[0.2354,3.2385],[0.2427,3.3856],[0.25,3.5207],[0.25,0],[-0.1,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-0.3)**2)/(2*0.1*0.1))/(0.1*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0.3, 0]} point2={[0.3, 3.9894]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[0.25, 0]} point2={[0.25, 3.5207]} color="var(--mafs-fg-orange)" />
  <Text x={0.3} y={4.378} attach="n">μ = 0.3</Text>
  <Text x={0.25} y={-0.3192} attach="s">0.25</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "modelling", "critique", "standardising"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise the value 0.25 for part (a).", workingLatex: "Z=\\frac{0.25-0.30}{0.10}=-0.5", explanation: "Standardise T = 0.25 using mu = 0.30 and sigma = 0.10 to get Z = -0.5." },
        { stepNumber: 2, description: "Evaluate P(T<0.25).", workingLatex: "P(T<0.25)=P(Z<-0.5)=0.3085", explanation: "From the standard Normal, P(Z<-0.5)=0.3085 (4 d.p.)." },
        { stepNumber: 3, description: "Standardise 0 for part (b).", workingLatex: "Z=\\frac{0-0.30}{0.10}=-3 \\implies P(T<0)=P(Z<-3)=0.0013", explanation: "Standardising T = 0 gives Z = -3, so P(T<0)=0.0013 (4 d.p.)." },
        { stepNumber: 4, description: "Explain the weakness shown by P(T<0).", workingLatex: "P(T<0)=0.0013>0,\\ \\text{but }T\\ge 0", explanation: "A reaction time cannot be negative, yet the Normal model gives a non-zero probability (0.0013) of T < 0, because the Normal has unbounded support below. This is a weakness of using a Normal here." },
        { stepNumber: 5, description: "Address the skewness in part (c).", workingLatex: "\\text{Normal symmetric vs. positively skewed data}", explanation: "The Normal distribution is symmetric, but reaction times are positively skewed with a long tail of slow responses. The model therefore cannot represent the shape of the data well." },
        { stepNumber: 6, description: "Conclude on appropriateness.", workingLatex: "\\text{less appropriate}", explanation: "Because the real data are skewed (and bounded below by 0) while the Normal is symmetric and unbounded, the skewness makes the Normal model less appropriate." }
      ],
      finalAnswer: "\\( P(T<0.25)=0.3085,\\ P(T<0)=0.0013 \\); the non-zero probability of an impossible negative time and the positive skew of real reaction times make the Normal model less appropriate.",
    },
  },
  {
    id: "y2nm-070",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 70",
    difficulty: "Challenge",
    questionText: "The volume, \\( X\\,\\mathrm{ml} \\), dispensed by a drinks machine is modelled by \\( X\\sim N(\\mu,\\,15^{2}) \\). Find the value of \\( a \\) such that the central interval \\( (\\mu-a,\\ \\mu+a) \\) contains exactly \\( 99\\% \\) of dispensed volumes. Give \\( a \\) to \\( 3 \\) significant figures.",
    questionMafs: `<Mafs viewBox={{ x: [-60, 60], y: [-0.0043, 0.0314] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 15 }} yAxis={{ lines: false }} />
  <Polygon points={[[-38.637,0.001],[-37.0271,0.0013],[-35.4172,0.0016],[-33.8074,0.0021],[-32.1975,0.0027],[-30.5876,0.0033],[-28.9777,0.0041],[-27.3679,0.005],[-25.758,0.0061],[-24.1481,0.0073],[-22.5382,0.0086],[-20.9284,0.01],[-19.3185,0.0116],[-17.7086,0.0132],[-16.0987,0.015],[-14.4889,0.0167],[-12.879,0.0184],[-11.2691,0.0201],[-9.6592,0.0216],[-8.0494,0.023],[-6.4395,0.0243],[-4.8296,0.0253],[-3.2197,0.026],[-1.6099,0.0264],[0,0.0266],[1.6099,0.0264],[3.2197,0.026],[4.8296,0.0253],[6.4395,0.0243],[8.0494,0.023],[9.6593,0.0216],[11.2691,0.0201],[12.879,0.0184],[14.4889,0.0167],[16.0987,0.015],[17.7086,0.0132],[19.3185,0.0116],[20.9284,0.01],[22.5383,0.0086],[24.1481,0.0073],[25.758,0.0061],[27.3679,0.005],[28.9778,0.0041],[30.5876,0.0033],[32.1975,0.0027],[33.8074,0.0021],[35.4173,0.0016],[37.0271,0.0013],[38.637,0.001],[38.637,0],[-38.637,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-0)**2)/(2*15*15))/(15*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0, 0]} point2={[0, 0.0266]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[-38.637, 0]} point2={[-38.637, 0.001]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[38.637, 0]} point2={[38.637, 0.001]} color="var(--mafs-fg-orange)" />
  <Text x={0} y={0.0292} attach="n">μ = 0</Text>
  <Text x={-38.637} y={-0.0021} attach="s">-38.637</Text>
  <Text x={38.637} y={-0.0021} attach="s">38.637</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "inverse-normal", "symmetry", "standardising"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Express the central probability in standardised form.", workingLatex: "P(\\mu-a<X<\\mu+a)=P\\!\\left(-\\frac{a}{15}<Z<\\frac{a}{15}\\right)=0.99", explanation: "By symmetry about mu, the interval (mu - a, mu + a) standardises to (-a/15, a/15); this must capture 0.99 of the area." },
        { stepNumber: 2, description: "Split the central 99% into tails.", workingLatex: "P\\!\\left(Z<\\frac{a}{15}\\right)=0.99+\\frac{0.01}{2}=0.995", explanation: "A central probability of 0.99 leaves 0.005 in each tail, so the upper boundary a/15 is the 0.995 percentile of the standard Normal." },
        { stepNumber: 3, description: "Find the critical z-value.", workingLatex: "\\frac{a}{15}=\\Phi^{-1}(0.995)=2.5758", explanation: "The standard Normal value with cumulative probability 0.995 is z = 2.5758." },
        { stepNumber: 4, description: "Solve for a.", workingLatex: "a=2.5758\\times 15=38.637", explanation: "Multiplying the critical z by sigma = 15 gives a = 38.637." },
        { stepNumber: 5, description: "State the answer.", workingLatex: "a=38.6\\ \\mathrm{ml}", explanation: "Rounding to 3 significant figures, the central 99% interval is mu plus or minus 38.6 ml." }
      ],
      finalAnswer: "\\( a=38.6\\ \\mathrm{ml} \\)",
      canonicalAnswer: "a = 38.6 ml",
    },
  },
  {
    id: "y2nm-071",
    topicRef: "y2nm",
    topicTitle: "The Normal Distribution 71",
    difficulty: "Challenge",
    questionText: "The mass, \\( X\\,\\mathrm{g} \\), of a packet of seeds is modelled by \\( X\\sim N(250,\\,20^{2}) \\). A packet is labelled 'non-standard' if its mass is below \\( 220\\,\\mathrm{g} \\) or above \\( 280\\,\\mathrm{g} \\). (a) Find the probability \\( p \\) that a packet is non-standard. (b) A random sample of \\( 6 \\) packets is taken. Using a binomial model, find the probability that at most one packet is non-standard. Give answers to \\( 4 \\) decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [170, 330], y: [-0.0032, 0.0235] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 20 }} yAxis={{ lines: false }} />
  <Polygon points={[[220,0.0065],[221.25,0.0071],[222.5,0.0078],[223.75,0.0084],[225,0.0091],[226.25,0.0099],[227.5,0.0106],[228.75,0.0113],[230,0.0121],[231.25,0.0129],[232.5,0.0136],[233.75,0.0143],[235,0.0151],[236.25,0.0157],[237.5,0.0164],[238.75,0.017],[240,0.0176],[241.25,0.0181],[242.5,0.0186],[243.75,0.019],[245,0.0193],[246.25,0.0196],[247.5,0.0198],[248.75,0.0199],[250,0.0199],[251.25,0.0199],[252.5,0.0198],[253.75,0.0196],[255,0.0193],[256.25,0.019],[257.5,0.0186],[258.75,0.0181],[260,0.0176],[261.25,0.017],[262.5,0.0164],[263.75,0.0157],[265,0.0151],[266.25,0.0143],[267.5,0.0136],[268.75,0.0129],[270,0.0121],[271.25,0.0113],[272.5,0.0106],[273.75,0.0099],[275,0.0091],[276.25,0.0084],[277.5,0.0078],[278.75,0.0071],[280,0.0065],[280,0],[220,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-250)**2)/(2*20*20))/(20*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[250, 0]} point2={[250, 0.0199]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[220, 0]} point2={[220, 0.0065]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[280, 0]} point2={[280, 0.0065]} color="var(--mafs-fg-orange)" />
  <Text x={250} y={0.0219} attach="n">μ = 250</Text>
  <Text x={220} y={-0.0016} attach="s">220</Text>
  <Text x={280} y={-0.0016} attach="s">280</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal-distribution", "binomial", "inverse-normal", "two-sided", "standardising"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise both boundaries.", workingLatex: "\\frac{220-250}{20}=-1.5,\\qquad \\frac{280-250}{20}=1.5", explanation: "Standardise 220 and 280 using mu = 250, sigma = 20; the standard region is -1.5 < Z < 1.5." },
        { stepNumber: 2, description: "Find the probability a packet is within limits.", workingLatex: "P(220<X<280)=P(-1.5<Z<1.5)=0.9332-0.0668=0.8664", explanation: "P(Z<1.5)=0.9332 and P(Z<-1.5)=0.0668, so the standard mass probability is 0.8664." },
        { stepNumber: 3, description: "Find the non-standard probability p.", workingLatex: "p=1-0.8664=0.1336", explanation: "Non-standard is the complement of the central interval, so p = 1 - 0.8664 = 0.1336 (4 d.p.)." },
        { stepNumber: 4, description: "Set up the binomial model.", workingLatex: "Y\\sim B(6,\\,0.1336),\\quad Y=\\text{number non-standard}", explanation: "With 6 independent packets each non-standard with probability p = 0.1336, Y follows B(6, 0.1336)." },
        { stepNumber: 5, description: "Write 'at most one' as two terms.", workingLatex: "P(Y\\le 1)=P(Y=0)+P(Y=1)=(0.8664)^{6}+\\binom{6}{1}(0.1336)(0.8664)^{5}", explanation: "At most one means zero or one non-standard packet; sum the two binomial probabilities." },
        { stepNumber: 6, description: "Evaluate.", workingLatex: "P(Y\\le 1)=0.4230+6\\times 0.1336\\times 0.4882=0.4230+0.3913=0.8143", explanation: "Computing (0.8664)^6 = 0.4230 and 6*0.1336*(0.8664)^5 = 0.3913 gives P(Y<=1) = 0.8143 (4 d.p.)." }
      ],
      finalAnswer: "\\( p=0.1336,\\quad P(Y\\le 1)=0.8143 \\)",
      canonicalAnswer: "p = 0.1336, P(at most one non-standard) = 0.8143",
    },
  },
];
