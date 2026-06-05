import { Question } from "@/lib/types";

/**
 * Year 2 — Statistics § Normal Approximation to the Binomial
 * Ref: y2na
 * 71 questions. No diagrams.
 */
export const questions: Question[] = [
  {
    id: "y2na-001",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 01",
    difficulty: "Foundation",
    questionText: "A binomial random variable \\( X \\) has \\( n = 50 \\) and \\( p = 0.5 \\). By checking the conditions \\( np > 5 \\) and \\( n(1-p) > 5 \\), determine whether a Normal approximation to \\( X \\) is valid.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-approximation", "binomial", "validity"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compute np", workingLatex: "np = 50 \\times 0.5 = 25", explanation: "The first condition requires \\( np > 5 \\)." },
        { stepNumber: 2, description: "Compute n(1-p)", workingLatex: "n(1-p) = 50 \\times 0.5 = 25", explanation: "The second condition requires \\( n(1-p) > 5 \\)." },
        { stepNumber: 3, description: "Compare with 5", workingLatex: "25 > 5 \\quad \\text{and} \\quad 25 > 5", explanation: "Both quantities exceed 5, and \\( p \\) is exactly 0.5, so the distribution is symmetric." },
        { stepNumber: 4, description: "Conclude", workingLatex: "\\text{Both conditions satisfied} \\Rightarrow \\text{approximation valid}", explanation: "With large \\( n \\) and \\( p \\) near 0.5, the Normal approximation is appropriate." }
      ],
      finalAnswer: "\\( \\text{Valid: } np = 25 > 5 \\text{ and } n(1-p) = 25 > 5 \\)",
      canonicalAnswer: "Valid",
    },
  },
  {
    id: "y2na-002",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 02",
    difficulty: "Foundation",
    questionText: "A binomial random variable \\( X \\) has \\( n = 12 \\) and \\( p = 0.3 \\). By checking the conditions \\( np > 5 \\) and \\( n(1-p) > 5 \\), determine whether a Normal approximation to \\( X \\) is valid.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-approximation", "binomial", "validity"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compute np", workingLatex: "np = 12 \\times 0.3 = 3.6", explanation: "Check whether \\( np > 5 \\)." },
        { stepNumber: 2, description: "Compute n(1-p)", workingLatex: "n(1-p) = 12 \\times 0.7 = 8.4", explanation: "Check whether \\( n(1-p) > 5 \\)." },
        { stepNumber: 3, description: "Compare with 5", workingLatex: "3.6 < 5", explanation: "The condition \\( np > 5 \\) fails because \\( np = 3.6 \\) is less than 5." },
        { stepNumber: 4, description: "Conclude", workingLatex: "\\text{Condition } np > 5 \\text{ fails} \\Rightarrow \\text{approximation not valid}", explanation: "Since \\( n \\) is small and \\( p \\) is not near 0.5, the Normal approximation should not be used." }
      ],
      finalAnswer: "\\( \\text{Not valid: } np = 3.6 < 5 \\)",
      canonicalAnswer: "Not valid",
    },
  },
  {
    id: "y2na-003",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 03",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim B(40, 0.45) \\). State the Normal distribution \\( N(\\mu, \\sigma^2) \\) that approximates \\( X \\), giving the mean \\( \\mu = np \\) and variance \\( \\sigma^2 = np(1-p) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-approximation", "binomial", "parameters"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compute the mean", workingLatex: "\\mu = np = 40 \\times 0.45 = 18", explanation: "The mean of the approximating Normal equals the binomial mean \\( np \\)." },
        { stepNumber: 2, description: "Compute the variance", workingLatex: "\\sigma^2 = np(1-p) = 40 \\times 0.45 \\times 0.55 = 9.9", explanation: "The variance equals the binomial variance \\( np(1-p) \\)." },
        { stepNumber: 3, description: "State the approximating Normal", workingLatex: "X \\approx N(18,\\, 9.9)", explanation: "We write \\( B(n,p) \\approx N(np,\\, np(1-p)) \\)." }
      ],
      finalAnswer: "\\( X \\approx N(18,\\, 9.9) \\)",
      canonicalAnswer: "N(18, 9.9)",
    },
  },
  {
    id: "y2na-004",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 04",
    difficulty: "Foundation",
    questionText: "When approximating the discrete \\( X \\sim B(n,p) \\) by a continuous Normal variable \\( Y \\), a continuity correction is applied. Write the corrected Normal probability for \\( P(X \\ge 20) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-approximation", "binomial", "continuity-correction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the inequality type", workingLatex: "P(X \\ge 20)", explanation: "This is a 'greater than or equal to' inequality, so 20 is included." },
        { stepNumber: 2, description: "Apply the continuity correction", workingLatex: "P(X \\ge 20) \\to P(Y > 20 - 0.5)", explanation: "For \\( P(X \\ge a) \\) we shift the boundary down by 0.5 to \\( a - 0.5 \\) so the whole bar for \\( X = 20 \\) is kept." },
        { stepNumber: 3, description: "State the corrected probability", workingLatex: "P(Y > 19.5)", explanation: "The continuous variable \\( Y \\) uses the boundary 19.5." }
      ],
      finalAnswer: "\\( P(Y > 19.5) \\)",
      canonicalAnswer: "P(Y > 19.5)",
    },
  },
  {
    id: "y2na-005",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 05",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim B(100, 0.5) \\). Using a Normal approximation with a continuity correction, find \\( P(X \\le 45) \\). Give your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [30, 70], y: [-0.0128, 0.0942] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 5 }} yAxis={{ lines: false }} />
  <Polygon points={[[30,0],[30.3229,0],[30.6458,0],[30.9688,0.0001],[31.2917,0.0001],[31.6146,0.0001],[31.9375,0.0001],[32.2604,0.0001],[32.5833,0.0002],[32.9063,0.0002],[33.2292,0.0003],[33.5521,0.0004],[33.875,0.0004],[34.1979,0.0005],[34.5208,0.0007],[34.8438,0.0008],[35.1667,0.001],[35.4896,0.0012],[35.8125,0.0014],[36.1354,0.0017],[36.4583,0.002],[36.7813,0.0024],[37.1042,0.0029],[37.4271,0.0034],[37.75,0.004],[38.0729,0.0046],[38.3958,0.0054],[38.7188,0.0063],[39.0417,0.0072],[39.3646,0.0083],[39.6875,0.0095],[40.0104,0.0108],[40.3333,0.0123],[40.6563,0.0139],[40.9792,0.0157],[41.3021,0.0176],[41.625,0.0196],[41.9479,0.0218],[42.2708,0.0242],[42.5938,0.0266],[42.9167,0.0293],[43.2396,0.032],[43.5625,0.0348],[43.8854,0.0378],[44.2083,0.0408],[44.5313,0.0439],[44.8542,0.047],[45.1771,0.0501],[45.5,0.0532],[45.5,0],[30,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-50)**2)/(2*5*5))/(5*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[50, 0]} point2={[50, 0.0798]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[45.5, 0]} point2={[45.5, 0.0532]} color="var(--mafs-fg-orange)" />
  <Text x={50} y={0.0876} attach="n">μ = 50</Text>
  <Text x={45.5} y={-0.0064} attach="s">45.5</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-approximation", "binomial", "continuity-correction", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the approximating Normal", workingLatex: "\\mu = np = 100 \\times 0.5 = 50, \\quad \\sigma^2 = np(1-p) = 25, \\quad X \\approx N(50, 25)", explanation: "Mean \\( np = 50 \\) and variance \\( np(1-p) = 25 \\), so \\( \\sigma = 5 \\)." },
        { stepNumber: 2, description: "Apply the continuity correction", workingLatex: "P(X \\le 45) \\to P(Y < 45.5)", explanation: "For \\( P(X \\le a) \\) the boundary moves up by 0.5 to \\( a + 0.5 \\)." },
        { stepNumber: 3, description: "Standardise", workingLatex: "z = \\frac{45.5 - 50}{5} = -0.9", explanation: "Convert to the standard Normal using \\( z = \\dfrac{y - \\mu}{\\sigma} \\)." },
        { stepNumber: 4, description: "Evaluate the probability", workingLatex: "P(Y < 45.5) = \\Phi(-0.9) = 0.1841", explanation: "Reading from the Normal distribution gives the lower-tail probability." }
      ],
      finalAnswer: "\\( P(X \\le 45) \\approx 0.1841 \\)",
      canonicalAnswer: "0.1841",
    },
  },
  {
    id: "y2na-006",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 06",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim B(80, 0.45) \\). Using a Normal approximation with a continuity correction, find \\( P(X \\ge 40) \\). Give your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [18.2012, 53.7988], y: [-0.0143, 0.1058] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 4.4497 }} yAxis={{ lines: false }} />
  <Polygon points={[[39.5,0.0658],[39.7979,0.0623],[40.0958,0.0587],[40.3937,0.0551],[40.6916,0.0514],[40.9895,0.0478],[41.2874,0.0443],[41.5852,0.0408],[41.8831,0.0374],[42.181,0.0342],[42.4789,0.0311],[42.7768,0.0281],[43.0747,0.0253],[43.3726,0.0227],[43.6705,0.0203],[43.9684,0.018],[44.2663,0.016],[44.5642,0.0141],[44.862,0.0123],[45.1599,0.0108],[45.4578,0.0094],[45.7557,0.0081],[46.0536,0.007],[46.3515,0.006],[46.6494,0.0051],[46.9473,0.0043],[47.2452,0.0037],[47.5431,0.0031],[47.841,0.0026],[48.1389,0.0022],[48.4368,0.0018],[48.7346,0.0015],[49.0325,0.0012],[49.3304,0.001],[49.6283,0.0008],[49.9262,0.0007],[50.2241,0.0005],[50.522,0.0004],[50.8199,0.0003],[51.1178,0.0003],[51.4157,0.0002],[51.7136,0.0002],[52.0115,0.0001],[52.3093,0.0001],[52.6072,0.0001],[52.9051,0.0001],[53.203,0.0001],[53.5009,0],[53.7988,0],[53.7988,0],[39.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-36)**2)/(2*4.4497*4.4497))/(4.4497*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[36, 0]} point2={[36, 0.0897]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[39.5, 0]} point2={[39.5, 0.0658]} color="var(--mafs-fg-orange)" />
  <Text x={36} y={0.0984} attach="n">μ = 36</Text>
  <Text x={39.5} y={-0.0072} attach="s">39.5</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-approximation", "binomial", "continuity-correction", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the approximating Normal", workingLatex: "\\mu = np = 80 \\times 0.45 = 36, \\quad \\sigma^2 = np(1-p) = 80 \\times 0.45 \\times 0.55 = 19.8, \\quad X \\approx N(36, 19.8)", explanation: "Mean \\( np = 36 \\) and variance \\( np(1-p) = 19.8 \\), so \\( \\sigma = \\sqrt{19.8} = 4.4497 \\)." },
        { stepNumber: 2, description: "Apply the continuity correction", workingLatex: "P(X \\ge 40) \\to P(Y > 39.5)", explanation: "For \\( P(X \\ge a) \\) the boundary moves down by 0.5 to \\( a - 0.5 \\)." },
        { stepNumber: 3, description: "Standardise", workingLatex: "z = \\frac{39.5 - 36}{4.4497} = 0.7866", explanation: "Convert to the standard Normal using \\( z = \\dfrac{y - \\mu}{\\sigma} \\)." },
        { stepNumber: 4, description: "Evaluate the probability", workingLatex: "P(Y > 39.5) = 1 - \\Phi(0.7866) = 0.2158", explanation: "Use the upper-tail probability for the Normal." }
      ],
      finalAnswer: "\\( P(X \\ge 40) \\approx 0.2158 \\)",
      canonicalAnswer: "0.2158",
    },
  },
  {
    id: "y2na-007",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 07",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim B(200, 0.4) \\). Using a Normal approximation with a continuity correction, find \\( P(X < 75) \\). Give your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [52.2872, 107.7128], y: [-0.0092, 0.0679] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 6.9282 }} yAxis={{ lines: false }} />
  <Polygon points={[[52.2872,0],[52.75,0],[53.2127,0],[53.6755,0],[54.1383,0.0001],[54.601,0.0001],[55.0638,0.0001],[55.5266,0.0001],[55.9893,0.0001],[56.4521,0.0002],[56.9149,0.0002],[57.3776,0.0003],[57.8404,0.0003],[58.3032,0.0004],[58.7659,0.0005],[59.2287,0.0006],[59.6915,0.0008],[60.1542,0.001],[60.617,0.0011],[61.0798,0.0014],[61.5425,0.0017],[62.0053,0.002],[62.4681,0.0023],[62.9308,0.0028],[63.3936,0.0033],[63.8564,0.0038],[64.3191,0.0044],[64.7819,0.0052],[65.2447,0.006],[65.7074,0.0069],[66.1702,0.0079],[66.633,0.009],[67.0957,0.0102],[67.5585,0.0115],[68.0213,0.0129],[68.484,0.0145],[68.9468,0.0161],[69.4096,0.0179],[69.8723,0.0198],[70.3351,0.0218],[70.7979,0.0238],[71.2606,0.026],[71.7234,0.0282],[72.1862,0.0305],[72.6489,0.0328],[73.1117,0.0351],[73.5745,0.0375],[74.0372,0.0398],[74.5,0.042],[74.5,0],[52.2872,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-80)**2)/(2*6.9282*6.9282))/(6.9282*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[80, 0]} point2={[80, 0.0576]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[74.5, 0]} point2={[74.5, 0.042]} color="var(--mafs-fg-orange)" />
  <Text x={80} y={0.0632} attach="n">μ = 80</Text>
  <Text x={74.5} y={-0.0046} attach="s">74.5</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-approximation", "binomial", "continuity-correction", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the approximating Normal", workingLatex: "\\mu = np = 200 \\times 0.4 = 80, \\quad \\sigma^2 = np(1-p) = 200 \\times 0.4 \\times 0.6 = 48, \\quad X \\approx N(80, 48)", explanation: "Mean \\( np = 80 \\) and variance \\( np(1-p) = 48 \\), so \\( \\sigma = \\sqrt{48} = 6.9282 \\)." },
        { stepNumber: 2, description: "Apply the continuity correction", workingLatex: "P(X < 75) \\to P(Y < 74.5)", explanation: "For \\( P(X < a) \\) the boundary moves down by 0.5 to \\( a - 0.5 \\), since 75 is excluded." },
        { stepNumber: 3, description: "Standardise", workingLatex: "z = \\frac{74.5 - 80}{6.9282} = -0.7939", explanation: "Convert to the standard Normal using \\( z = \\dfrac{y - \\mu}{\\sigma} \\)." },
        { stepNumber: 4, description: "Evaluate the probability", workingLatex: "P(Y < 74.5) = \\Phi(-0.7939) = 0.2136", explanation: "Read the lower-tail probability from the Normal." }
      ],
      finalAnswer: "\\( P(X < 75) \\approx 0.2136 \\)",
      canonicalAnswer: "0.2136",
    },
  },
  {
    id: "y2na-008",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 08",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim B(150, 0.6) \\). Using a Normal approximation with a continuity correction, find \\( P(X > 95) \\). Give your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [66, 114], y: [-0.0106, 0.0785] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 6 }} yAxis={{ lines: false }} />
  <Polygon points={[[95.5,0.0437],[95.8854,0.0411],[96.2708,0.0385],[96.6563,0.0359],[97.0417,0.0334],[97.4271,0.0309],[97.8125,0.0285],[98.1979,0.0261],[98.5833,0.0239],[98.9688,0.0218],[99.3542,0.0197],[99.7396,0.0178],[100.125,0.016],[100.5104,0.0143],[100.8958,0.0128],[101.2813,0.0114],[101.6667,0.01],[102.0521,0.0088],[102.4375,0.0078],[102.8229,0.0068],[103.2083,0.0059],[103.5938,0.0051],[103.9792,0.0044],[104.3646,0.0038],[104.75,0.0032],[105.1354,0.0028],[105.5208,0.0023],[105.9063,0.002],[106.2917,0.0017],[106.6771,0.0014],[107.0625,0.0012],[107.4479,0.001],[107.8333,0.0008],[108.2188,0.0007],[108.6042,0.0005],[108.9896,0.0004],[109.375,0.0004],[109.7604,0.0003],[110.1458,0.0002],[110.5313,0.0002],[110.9167,0.0002],[111.3021,0.0001],[111.6875,0.0001],[112.0729,0.0001],[112.4583,0.0001],[112.8438,0],[113.2292,0],[113.6146,0],[114,0],[114,0],[95.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-90)**2)/(2*6*6))/(6*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[90, 0]} point2={[90, 0.0665]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[95.5, 0]} point2={[95.5, 0.0437]} color="var(--mafs-fg-orange)" />
  <Text x={90} y={0.073} attach="n">μ = 90</Text>
  <Text x={95.5} y={-0.0053} attach="s">95.5</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-approximation", "binomial", "continuity-correction", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the approximating Normal", workingLatex: "\\mu = np = 150 \\times 0.6 = 90, \\quad \\sigma^2 = np(1-p) = 150 \\times 0.6 \\times 0.4 = 36, \\quad X \\approx N(90, 36)", explanation: "Mean \\( np = 90 \\) and variance \\( np(1-p) = 36 \\), so \\( \\sigma = 6 \\)." },
        { stepNumber: 2, description: "Apply the continuity correction", workingLatex: "P(X > 95) \\to P(Y > 95.5)", explanation: "For \\( P(X > a) \\) the boundary moves up by 0.5 to \\( a + 0.5 \\), since 95 is excluded." },
        { stepNumber: 3, description: "Standardise", workingLatex: "z = \\frac{95.5 - 90}{6} = 0.9167", explanation: "Convert to the standard Normal using \\( z = \\dfrac{y - \\mu}{\\sigma} \\)." },
        { stepNumber: 4, description: "Evaluate the probability", workingLatex: "P(Y > 95.5) = 1 - \\Phi(0.9167) = 0.1797", explanation: "Use the upper-tail probability for the Normal." }
      ],
      finalAnswer: "\\( P(X > 95) \\approx 0.1797 \\)",
      canonicalAnswer: "0.1797",
    },
  },
  {
    id: "y2na-009",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 09",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim B(120, 0.55) \\). Using a Normal approximation with a continuity correction, find \\( P(X = 70) \\). Give your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [44.2008, 87.7992], y: [-0.0117, 0.0864] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 5.4498 }} yAxis={{ lines: false }} />
  <Polygon points={[[69.5,0.0596],[69.5208,0.0594],[69.5417,0.0593],[69.5625,0.0591],[69.5833,0.059],[69.6042,0.0588],[69.625,0.0587],[69.6458,0.0585],[69.6667,0.0584],[69.6875,0.0582],[69.7083,0.0581],[69.7292,0.0579],[69.75,0.0578],[69.7708,0.0576],[69.7917,0.0575],[69.8125,0.0573],[69.8333,0.0572],[69.8542,0.057],[69.875,0.0569],[69.8958,0.0567],[69.9167,0.0565],[69.9375,0.0564],[69.9583,0.0562],[69.9792,0.0561],[70,0.0559],[70.0208,0.0558],[70.0417,0.0556],[70.0625,0.0554],[70.0833,0.0553],[70.1042,0.0551],[70.125,0.055],[70.1458,0.0548],[70.1667,0.0547],[70.1875,0.0545],[70.2083,0.0543],[70.2292,0.0542],[70.25,0.054],[70.2708,0.0538],[70.2917,0.0537],[70.3125,0.0535],[70.3333,0.0534],[70.3542,0.0532],[70.375,0.053],[70.3958,0.0529],[70.4167,0.0527],[70.4375,0.0525],[70.4583,0.0524],[70.4792,0.0522],[70.5,0.0521],[70.5,0],[69.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-66)**2)/(2*5.4498*5.4498))/(5.4498*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[66, 0]} point2={[66, 0.0732]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[69.5, 0]} point2={[69.5, 0.0596]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[70.5, 0]} point2={[70.5, 0.0521]} color="var(--mafs-fg-orange)" />
  <Text x={66} y={0.0803} attach="n">μ = 66</Text>
  <Text x={69.5} y={-0.0059} attach="s">69.5</Text>
  <Text x={70.5} y={-0.0059} attach="s">70.5</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-approximation", "binomial", "continuity-correction", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the approximating Normal", workingLatex: "\\mu = np = 120 \\times 0.55 = 66, \\quad \\sigma^2 = np(1-p) = 120 \\times 0.55 \\times 0.45 = 29.7, \\quad X \\approx N(66, 29.7)", explanation: "Mean \\( np = 66 \\) and variance \\( np(1-p) = 29.7 \\), so \\( \\sigma = \\sqrt{29.7} = 5.4498 \\)." },
        { stepNumber: 2, description: "Apply the continuity correction", workingLatex: "P(X = 70) \\to P(69.5 < Y < 70.5)", explanation: "For \\( P(X = a) \\) we use the interval \\( (a - 0.5,\\, a + 0.5) \\) spanning the single bar." },
        { stepNumber: 3, description: "Standardise both boundaries", workingLatex: "z_1 = \\frac{69.5 - 66}{5.4498} = 0.6422, \\quad z_2 = \\frac{70.5 - 66}{5.4498} = 0.8257", explanation: "Convert each boundary to the standard Normal." },
        { stepNumber: 4, description: "Evaluate the probability", workingLatex: "P(69.5 < Y < 70.5) = \\Phi(0.8257) - \\Phi(0.6422) = 0.0559", explanation: "Subtract the two cumulative probabilities." }
      ],
      finalAnswer: "\\( P(X = 70) \\approx 0.0559 \\)",
      canonicalAnswer: "0.0559",
    },
  },
  {
    id: "y2na-010",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 10",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim B(64, 0.5) \\). Using a Normal approximation with a continuity correction, find \\( P(X \\ge 36) \\). Give your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [16, 48], y: [-0.016, 0.1177] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 4 }} yAxis={{ lines: false }} />
  <Polygon points={[[35.5,0.068],[35.7604,0.0641],[36.0208,0.0602],[36.2813,0.0562],[36.5417,0.0523],[36.8021,0.0485],[37.0625,0.0448],[37.3229,0.0411],[37.5833,0.0377],[37.8438,0.0343],[38.1042,0.0311],[38.3646,0.0281],[38.625,0.0253],[38.8854,0.0227],[39.1458,0.0202],[39.4063,0.018],[39.6667,0.0159],[39.9271,0.014],[40.1875,0.0123],[40.4479,0.0107],[40.7083,0.0093],[40.9688,0.0081],[41.2292,0.007],[41.4896,0.006],[41.75,0.0051],[42.0104,0.0044],[42.2708,0.0037],[42.5313,0.0031],[42.7917,0.0026],[43.0521,0.0022],[43.3125,0.0018],[43.5729,0.0015],[43.8333,0.0013],[44.0938,0.001],[44.3542,0.0008],[44.6146,0.0007],[44.875,0.0006],[45.1354,0.0005],[45.3958,0.0004],[45.6563,0.0003],[45.9167,0.0002],[46.1771,0.0002],[46.4375,0.0001],[46.6979,0.0001],[46.9583,0.0001],[47.2188,0.0001],[47.4792,0.0001],[47.7396,0],[48,0],[48,0],[35.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-32)**2)/(2*4*4))/(4*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[32, 0]} point2={[32, 0.0997]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[35.5, 0]} point2={[35.5, 0.068]} color="var(--mafs-fg-orange)" />
  <Text x={32} y={0.1094} attach="n">μ = 32</Text>
  <Text x={35.5} y={-0.008} attach="s">35.5</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-approximation", "binomial", "continuity-correction", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the approximating Normal", workingLatex: "\\mu = np = 64 \\times 0.5 = 32, \\quad \\sigma^2 = np(1-p) = 64 \\times 0.5 \\times 0.5 = 16, \\quad X \\approx N(32, 16)", explanation: "Mean \\( np = 32 \\) and variance \\( np(1-p) = 16 \\), so \\( \\sigma = 4 \\)." },
        { stepNumber: 2, description: "Apply the continuity correction", workingLatex: "P(X \\ge 36) \\to P(Y > 35.5)", explanation: "For \\( P(X \\ge a) \\) the boundary moves down by 0.5 to \\( a - 0.5 \\)." },
        { stepNumber: 3, description: "Standardise", workingLatex: "z = \\frac{35.5 - 32}{4} = 0.875", explanation: "Convert to the standard Normal using \\( z = \\dfrac{y - \\mu}{\\sigma} \\)." },
        { stepNumber: 4, description: "Evaluate the probability", workingLatex: "P(Y > 35.5) = 1 - \\Phi(0.875) = 0.1908", explanation: "Use the upper-tail probability for the Normal." }
      ],
      finalAnswer: "\\( P(X \\ge 36) \\approx 0.1908 \\)",
      canonicalAnswer: "0.1908",
    },
  },
  {
    id: "y2na-011",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 11",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim B(90, 0.5) \\). First confirm a Normal approximation is valid using \\( np > 5 \\) and \\( n(1-p) > 5 \\), then with a continuity correction find \\( P(X \\le 40) \\). Give your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [26.0264, 63.9736], y: [-0.0135, 0.0992] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 4.7434 }} yAxis={{ lines: false }} />
  <Polygon points={[[26.0264,0],[26.3279,0],[26.6295,0],[26.931,0.0001],[27.2325,0.0001],[27.5341,0.0001],[27.8356,0.0001],[28.1371,0.0002],[28.4387,0.0002],[28.7402,0.0002],[29.0417,0.0003],[29.3433,0.0004],[29.6448,0.0004],[29.9463,0.0005],[30.2479,0.0007],[30.5494,0.0008],[30.8509,0.001],[31.1525,0.0012],[31.454,0.0014],[31.7555,0.0017],[32.0571,0.002],[32.3586,0.0024],[32.6601,0.0029],[32.9617,0.0034],[33.2632,0.0039],[33.5647,0.0046],[33.8663,0.0054],[34.1678,0.0062],[34.4693,0.0072],[34.7709,0.0082],[35.0724,0.0094],[35.3739,0.0107],[35.6755,0.0122],[35.977,0.0138],[36.2785,0.0155],[36.5801,0.0174],[36.8816,0.0194],[37.1831,0.0216],[37.4847,0.024],[37.7862,0.0265],[38.0877,0.0291],[38.3893,0.0318],[38.6908,0.0347],[38.9923,0.0377],[39.2939,0.0408],[39.5954,0.0439],[39.8969,0.0472],[40.1985,0.0504],[40.5,0.0536],[40.5,0],[26.0264,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-45)**2)/(2*4.7434*4.7434))/(4.7434*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[45, 0]} point2={[45, 0.0841]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[40.5, 0]} point2={[40.5, 0.0536]} color="var(--mafs-fg-orange)" />
  <Text x={45} y={0.0923} attach="n">μ = 45</Text>
  <Text x={40.5} y={-0.0067} attach="s">40.5</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal-approximation", "binomial", "validity", "continuity-correction", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Check validity", workingLatex: "np = 90 \\times 0.5 = 45 > 5, \\quad n(1-p) = 90 \\times 0.5 = 45 > 5", explanation: "Both conditions hold and \\( p = 0.5 \\), so the approximation is valid." },
        { stepNumber: 2, description: "State the approximating Normal", workingLatex: "\\mu = np = 45, \\quad \\sigma^2 = np(1-p) = 22.5, \\quad X \\approx N(45, 22.5)", explanation: "Variance \\( np(1-p) = 22.5 \\), so \\( \\sigma = \\sqrt{22.5} = 4.7434 \\)." },
        { stepNumber: 3, description: "Apply the continuity correction", workingLatex: "P(X \\le 40) \\to P(Y < 40.5)", explanation: "For \\( P(X \\le a) \\) the boundary moves up by 0.5 to \\( a + 0.5 \\)." },
        { stepNumber: 4, description: "Standardise", workingLatex: "z = \\frac{40.5 - 45}{4.7434} = -0.9487", explanation: "Convert to the standard Normal using \\( z = \\dfrac{y - \\mu}{\\sigma} \\)." },
        { stepNumber: 5, description: "Evaluate the probability", workingLatex: "P(Y < 40.5) = \\Phi(-0.9487) = 0.1714", explanation: "Read the lower-tail probability from the Normal." }
      ],
      finalAnswer: "\\( P(X \\le 40) \\approx 0.1714 \\)",
      canonicalAnswer: "0.1714",
    },
  },
  {
    id: "y2na-012",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 12",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim B(80, 0.25) \\) is to be approximated by a Normal distribution \\( Y \\). Write down the mean and variance of \\( Y \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "mean", "variance", "definition"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compute the mean of the approximating Normal using \\( \\mu = np \\).", workingLatex: "\\mu = np = 80 \\times 0.25 = 20", explanation: "The Normal approximation to the binomial uses the same mean as the binomial, namely \\( np \\)." },
        { stepNumber: 2, description: "Compute the variance using \\( \\sigma^2 = np(1-p) \\).", workingLatex: "\\sigma^2 = np(1-p) = 80 \\times 0.25 \\times 0.75 = 15", explanation: "The variance of the approximating Normal matches the binomial variance \\( np(1-p) \\). Hence \\( Y \\sim N(20, 15) \\)." }
      ],
      finalAnswer: "\\( Y \\sim N(20,\\ 15) \\)",
      canonicalAnswer: "mean=20, variance=15",
    },
  },
  {
    id: "y2na-013",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 13",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim B(150, 0.4) \\) is approximated by a Normal distribution \\( Y \\). Find the mean and standard deviation of \\( Y \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "mean", "standard deviation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compute the mean using \\( \\mu = np \\).", workingLatex: "\\mu = np = 150 \\times 0.4 = 60", explanation: "The approximating Normal has mean equal to the binomial mean \\( np \\)." },
        { stepNumber: 2, description: "Compute the standard deviation using \\( \\sigma = \\sqrt{np(1-p)} \\).", workingLatex: "\\sigma = \\sqrt{np(1-p)} = \\sqrt{150 \\times 0.4 \\times 0.6} = \\sqrt{36} = 6", explanation: "The variance is \\( np(1-p)=36 \\); taking the square root gives the standard deviation \\( \\sigma=6 \\)." }
      ],
      finalAnswer: "\\( \\mu = 60,\\ \\sigma = 6 \\)",
      canonicalAnswer: "mean=60, sd=6",
    },
  },
  {
    id: "y2na-014",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 14",
    difficulty: "Foundation",
    questionText: "A random variable follows \\( X \\sim B(50, 0.3) \\). By considering \\( np \\) and \\( n(1-p) \\), state whether a Normal approximation is appropriate, giving a reason.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "suitability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Evaluate \\( np \\) and \\( n(1-p) \\), which should both be reasonably large (a common rule is both \\( > 5 \\)).", workingLatex: "np = 50 \\times 0.3 = 15, \\quad n(1-p) = 50 \\times 0.7 = 35", explanation: "A Normal approximation works well when \\( p \\) is close to \\( 0.5 \\) and \\( n \\) is large, so that both \\( np \\) and \\( n(1-p) \\) are sizeable." },
        { stepNumber: 2, description: "Compare both values against the threshold and conclude.", workingLatex: "np = 15 > 5 \\quad \\text{and} \\quad n(1-p) = 35 > 5", explanation: "Both \\( np \\) and \\( n(1-p) \\) exceed \\( 5 \\), so the distribution is not too skewed and the Normal approximation is appropriate." }
      ],
      finalAnswer: "\\( \\text{Appropriate, since } np=15>5 \\text{ and } n(1-p)=35>5. \\)",
      canonicalAnswer: "appropriate",
    },
  },
  {
    id: "y2na-015",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 15",
    difficulty: "Foundation",
    questionText: "A random variable follows \\( X \\sim B(200, 0.01) \\). By considering \\( np \\) and \\( n(1-p) \\), state whether a Normal approximation is appropriate, giving a reason.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "suitability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Evaluate \\( np \\) and \\( n(1-p) \\).", workingLatex: "np = 200 \\times 0.01 = 2, \\quad n(1-p) = 200 \\times 0.99 = 198", explanation: "For a good Normal approximation both \\( np \\) and \\( n(1-p) \\) should be reasonably large (commonly both \\( > 5 \\))." },
        { stepNumber: 2, description: "Compare against the threshold and conclude.", workingLatex: "np = 2 < 5", explanation: "Here \\( np=2 \\) is below \\( 5 \\): \\( p \\) is very small, so the binomial is strongly skewed and the Normal approximation is not appropriate (a Poisson approximation would suit better)." }
      ],
      finalAnswer: "\\( \\text{Not appropriate, since } np=2<5. \\)",
      canonicalAnswer: "not appropriate",
    },
  },
  {
    id: "y2na-016",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 16",
    difficulty: "Foundation",
    questionText: "The binomial random variable \\( X \\) is approximated by a Normal variable \\( Y \\). Write down the continuity correction needed to approximate \\( P(X \\le 30) \\), and the resulting probability statement in terms of \\( Y \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall that \\( X \\) is discrete but \\( Y \\) is continuous, so each integer value of \\( X \\) is spread over an interval of width \\( 1 \\) centred on it.", workingLatex: "X = 30 \\ \\longleftrightarrow\\ 29.5 < Y < 30.5", explanation: "The continuity correction replaces the integer \\( 30 \\) by the interval from \\( 29.5 \\) to \\( 30.5 \\)." },
        { stepNumber: 2, description: "For \\( P(X \\le 30) \\), include all of the bar at \\( X=30 \\), so extend up to its upper edge \\( 30.5 \\).", workingLatex: "P(X \\le 30) \\approx P(Y < 30.5)", explanation: "Since \\( X=30 \\) is included, the right edge of its bar at \\( 30.5 \\) is used: \\( P(X\\le 30)\\to P(Y<30.5) \\)." }
      ],
      finalAnswer: "\\( P(X \\le 30) \\approx P(Y < 30.5) \\)",
      canonicalAnswer: "P(Y<30.5)",
    },
  },
  {
    id: "y2na-017",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 17",
    difficulty: "Foundation",
    questionText: "The binomial random variable \\( X \\) is approximated by a Normal variable \\( Y \\). Write down the continuity correction needed to approximate \\( P(X \\ge 18) \\), and the resulting probability statement in terms of \\( Y \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Spread the integer \\( 18 \\) over its bar of width \\( 1 \\) centred on \\( 18 \\).", workingLatex: "X = 18 \\ \\longleftrightarrow\\ 17.5 < Y < 18.5", explanation: "The bar for \\( X=18 \\) runs from \\( 17.5 \\) to \\( 18.5 \\)." },
        { stepNumber: 2, description: "For \\( P(X \\ge 18) \\), include all of the bar at \\( X=18 \\), so start from its lower edge \\( 17.5 \\).", workingLatex: "P(X \\ge 18) \\approx P(Y > 17.5)", explanation: "Since \\( X=18 \\) is included, use the left edge of its bar at \\( 17.5 \\): \\( P(X\\ge 18)\\to P(Y>17.5) \\)." }
      ],
      finalAnswer: "\\( P(X \\ge 18) \\approx P(Y > 17.5) \\)",
      canonicalAnswer: "P(Y>17.5)",
    },
  },
  {
    id: "y2na-018",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 18",
    difficulty: "Foundation",
    questionText: "The binomial random variable \\( X \\) is approximated by a Normal variable \\( Y \\). Write down the continuity correction needed to approximate \\( P(X = 22) \\), and the resulting probability statement in terms of \\( Y \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "A single value \\( X=22 \\) corresponds to the whole bar of width \\( 1 \\) centred on \\( 22 \\).", workingLatex: "X = 22 \\ \\longleftrightarrow\\ 21.5 < Y < 22.5", explanation: "The bar for \\( X=22 \\) stretches half a unit either side of \\( 22 \\)." },
        { stepNumber: 2, description: "Write the equality as the probability of \\( Y \\) lying inside that bar.", workingLatex: "P(X = 22) \\approx P(21.5 < Y < 22.5)", explanation: "Because a continuous variable has zero probability at a single point, the discrete value \\( X=22 \\) maps to the interval \\( 21.5<Y<22.5 \\)." }
      ],
      finalAnswer: "\\( P(X = 22) \\approx P(21.5 < Y < 22.5) \\)",
      canonicalAnswer: "P(21.5<Y<22.5)",
    },
  },
  {
    id: "y2na-019",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 19",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim B(100, 0.4) \\) is approximated by a Normal variable \\( Y \\). Using a continuity correction, find \\( P(X \\le 45) \\).",
    questionMafs: `<Mafs viewBox={{ x: [20.404, 59.596], y: [-0.013, 0.0961] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 4.899 }} yAxis={{ lines: false }} />
  <Polygon points={[[20.404,0],[20.9268,0],[21.4497,0.0001],[21.9725,0.0001],[22.4953,0.0001],[23.0182,0.0002],[23.541,0.0003],[24.0638,0.0004],[24.5867,0.0006],[25.1095,0.0008],[25.6323,0.0011],[26.1552,0.0015],[26.678,0.002],[27.2008,0.0027],[27.7237,0.0035],[28.2465,0.0046],[28.7693,0.0059],[29.2922,0.0075],[29.815,0.0094],[30.3378,0.0116],[30.8607,0.0143],[31.3835,0.0173],[31.9063,0.0208],[32.4292,0.0247],[32.952,0.0289],[33.4748,0.0335],[33.9977,0.0384],[34.5205,0.0436],[35.0433,0.0488],[35.5662,0.0541],[36.089,0.0592],[36.6118,0.0641],[37.1347,0.0686],[37.6575,0.0726],[38.1803,0.076],[38.7032,0.0786],[39.226,0.0804],[39.7488,0.0813],[40.2717,0.0813],[40.7945,0.0804],[41.3173,0.0785],[41.8402,0.0759],[42.363,0.0725],[42.8858,0.0685],[43.4087,0.0639],[43.9315,0.059],[44.4543,0.0539],[44.9772,0.0486],[45.5,0.0434],[45.5,0],[20.404,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-40)**2)/(2*4.899*4.899))/(4.899*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[40, 0]} point2={[40, 0.0814]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[45.5, 0]} point2={[45.5, 0.0434]} color="var(--mafs-fg-orange)" />
  <Text x={40} y={0.0894} attach="n">μ = 40</Text>
  <Text x={45.5} y={-0.0065} attach="s">45.5</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "standardising", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the approximating Normal: mean \\( np \\) and variance \\( np(1-p) \\).", workingLatex: "Y \\sim N(40,\\ 24), \\quad \\mu = 40,\\ \\sigma = \\sqrt{24} = 4.899", explanation: "Here \\( np=100\\times0.4=40 \\) and \\( np(1-p)=100\\times0.4\\times0.6=24 \\), so \\( \\sigma=4.899 \\) (4 d.p.)." },
        { stepNumber: 2, description: "Apply the continuity correction for \\( P(X \\le 45) \\).", workingLatex: "P(X \\le 45) \\approx P(Y < 45.5)", explanation: "Including \\( X=45 \\) means using the upper edge \\( 45.5 \\)." },
        { stepNumber: 3, description: "Standardise \\( 45.5 \\) using \\( Z = \\dfrac{(a+0.5)-np}{\\sqrt{np(1-p)}} \\).", workingLatex: "Z = \\frac{45.5 - 40}{4.899} = 1.1227", explanation: "Convert the boundary to a \\( z \\)-score using the mean and standard deviation of \\( Y \\)." },
        { stepNumber: 4, description: "Read the probability from the standard Normal.", workingLatex: "P(Y < 45.5) = \\Phi(1.1227) = 0.8692", explanation: "\\( P(X\\le45)\\approx\\Phi(1.1227)=0.8692 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(X \\le 45) \\approx 0.8692 \\)",
      canonicalAnswer: "0.8692",
    },
  },
  {
    id: "y2na-020",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 20",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim B(120, 0.45) \\) is approximated by a Normal variable \\( Y \\). Using a continuity correction, find \\( P(X \\ge 60) \\).",
    questionMafs: `<Mafs viewBox={{ x: [32.2008, 75.7992], y: [-0.0117, 0.0864] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 5.4498 }} yAxis={{ lines: false }} />
  <Polygon points={[[59.5,0.044],[59.8396,0.0412],[60.1791,0.0385],[60.5187,0.0358],[60.8583,0.0332],[61.1978,0.0306],[61.5374,0.0281],[61.877,0.0258],[62.2165,0.0235],[62.5561,0.0213],[62.8957,0.0193],[63.2352,0.0174],[63.5748,0.0156],[63.9144,0.014],[64.2539,0.0125],[64.5935,0.0111],[64.9331,0.0098],[65.2726,0.0086],[65.6122,0.0076],[65.9518,0.0066],[66.2913,0.0058],[66.6309,0.005],[66.9705,0.0043],[67.31,0.0037],[67.6496,0.0032],[67.9892,0.0027],[68.3287,0.0023],[68.6683,0.002],[69.0079,0.0017],[69.3474,0.0014],[69.687,0.0012],[70.0266,0.001],[70.3661,0.0008],[70.7057,0.0007],[71.0453,0.0005],[71.3848,0.0005],[71.7244,0.0004],[72.064,0.0003],[72.4035,0.0002],[72.7431,0.0002],[73.0827,0.0002],[73.4222,0.0001],[73.7618,0.0001],[74.1014,0.0001],[74.4409,0.0001],[74.7805,0.0001],[75.1201,0],[75.4596,0],[75.7992,0],[75.7992,0],[59.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-54)**2)/(2*5.4498*5.4498))/(5.4498*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[54, 0]} point2={[54, 0.0732]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[59.5, 0]} point2={[59.5, 0.044]} color="var(--mafs-fg-orange)" />
  <Text x={54} y={0.0803} attach="n">μ = 54</Text>
  <Text x={59.5} y={-0.0059} attach="s">59.5</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "standardising", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the approximating Normal: mean \\( np \\) and variance \\( np(1-p) \\).", workingLatex: "Y \\sim N(54,\\ 29.7), \\quad \\mu = 54,\\ \\sigma = \\sqrt{29.7} = 5.4498", explanation: "Here \\( np=120\\times0.45=54 \\) and \\( np(1-p)=120\\times0.45\\times0.55=29.7 \\), so \\( \\sigma=5.4498 \\) (4 d.p.)." },
        { stepNumber: 2, description: "Apply the continuity correction for \\( P(X \\ge 60) \\).", workingLatex: "P(X \\ge 60) \\approx P(Y > 59.5)", explanation: "Including \\( X=60 \\) means using the lower edge \\( 59.5 \\)." },
        { stepNumber: 3, description: "Standardise \\( 59.5 \\) using \\( Z = \\dfrac{(a-0.5)-np}{\\sqrt{np(1-p)}} \\).", workingLatex: "Z = \\frac{59.5 - 54}{5.4498} = 1.0092", explanation: "Convert the boundary to a \\( z \\)-score using the mean and standard deviation of \\( Y \\)." },
        { stepNumber: 4, description: "Use the upper tail of the standard Normal.", workingLatex: "P(Y > 59.5) = 1 - \\Phi(1.0092) = 1 - 0.8436 = 0.1564", explanation: "\\( P(X\\ge60)\\approx 1-\\Phi(1.0092)=0.1564 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(X \\ge 60) \\approx 0.1564 \\)",
      canonicalAnswer: "0.1564",
    },
  },
  {
    id: "y2na-021",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 21",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim B(90, 0.3) \\) is approximated by a Normal variable \\( Y \\). Using a continuity correction, find \\( P(X = 25) \\).",
    questionMafs: `<Mafs viewBox={{ x: [9.6104, 44.3896], y: [-0.0147, 0.1083] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 4.3474 }} yAxis={{ lines: false }} />
  <Polygon points={[[24.5,0.0778],[24.5208,0.078],[24.5417,0.0782],[24.5625,0.0784],[24.5833,0.0786],[24.6042,0.0788],[24.625,0.079],[24.6458,0.0793],[24.6667,0.0795],[24.6875,0.0797],[24.7083,0.0799],[24.7292,0.0801],[24.75,0.0803],[24.7708,0.0805],[24.7917,0.0807],[24.8125,0.0809],[24.8333,0.081],[24.8542,0.0812],[24.875,0.0814],[24.8958,0.0816],[24.9167,0.0818],[24.9375,0.082],[24.9583,0.0822],[24.9792,0.0824],[25,0.0826],[25.0208,0.0827],[25.0417,0.0829],[25.0625,0.0831],[25.0833,0.0833],[25.1042,0.0834],[25.125,0.0836],[25.1458,0.0838],[25.1667,0.084],[25.1875,0.0841],[25.2083,0.0843],[25.2292,0.0845],[25.25,0.0846],[25.2708,0.0848],[25.2917,0.0849],[25.3125,0.0851],[25.3333,0.0853],[25.3542,0.0854],[25.375,0.0856],[25.3958,0.0857],[25.4167,0.0859],[25.4375,0.086],[25.4583,0.0862],[25.4792,0.0863],[25.5,0.0865],[25.5,0],[24.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-27)**2)/(2*4.3474*4.3474))/(4.3474*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[27, 0]} point2={[27, 0.0918]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[24.5, 0]} point2={[24.5, 0.0778]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[25.5, 0]} point2={[25.5, 0.0865]} color="var(--mafs-fg-orange)" />
  <Text x={27} y={0.1007} attach="n">μ = 27</Text>
  <Text x={24.5} y={-0.0073} attach="s">24.5</Text>
  <Text x={25.5} y={-0.0073} attach="s">25.5</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "standardising", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the approximating Normal: mean \\( np \\) and variance \\( np(1-p) \\).", workingLatex: "Y \\sim N(27,\\ 18.9), \\quad \\mu = 27,\\ \\sigma = \\sqrt{18.9} = 4.3474", explanation: "Here \\( np=90\\times0.3=27 \\) and \\( np(1-p)=90\\times0.3\\times0.7=18.9 \\), so \\( \\sigma=4.3474 \\) (4 d.p.)." },
        { stepNumber: 2, description: "Apply the continuity correction for the single value \\( P(X = 25) \\).", workingLatex: "P(X = 25) \\approx P(24.5 < Y < 25.5)", explanation: "A single integer maps to the bar from \\( 24.5 \\) to \\( 25.5 \\)." },
        { stepNumber: 3, description: "Standardise both boundaries using \\( Z = \\dfrac{(a\\pm0.5)-np}{\\sqrt{np(1-p)}} \\).", workingLatex: "Z_1 = \\frac{24.5 - 27}{4.3474} = -0.5751, \\quad Z_2 = \\frac{25.5 - 27}{4.3474} = -0.3450", explanation: "Convert each edge of the bar to a \\( z \\)-score." },
        { stepNumber: 4, description: "Find the probability between the two standardised values.", workingLatex: "P(24.5 < Y < 25.5) = \\Phi(-0.3450) - \\Phi(-0.5751) = 0.3650 - 0.2826 = 0.0824", explanation: "\\( P(X=25)\\approx 0.0824 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(X = 25) \\approx 0.0824 \\)",
      canonicalAnswer: "0.0824",
    },
  },
  {
    id: "y2na-022",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 22",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim B(100, 0.45) \\) is approximated by a Normal variable \\( Y \\). Using a continuity correction, find \\( P(40 \\le X \\le 50) \\).",
    questionMafs: `<Mafs viewBox={{ x: [25.1004, 64.8996], y: [-0.0128, 0.0946] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 4.9749 }} yAxis={{ lines: false }} />
  <Polygon points={[[39.5,0.0435],[39.7292,0.0457],[39.9583,0.048],[40.1875,0.0502],[40.4167,0.0525],[40.6458,0.0547],[40.875,0.0569],[41.1042,0.059],[41.3333,0.0611],[41.5625,0.0632],[41.7917,0.0651],[42.0208,0.067],[42.25,0.0688],[42.4792,0.0705],[42.7083,0.0721],[42.9375,0.0736],[43.1667,0.0749],[43.3958,0.0761],[43.625,0.0772],[43.8542,0.0781],[44.0833,0.0788],[44.3125,0.0794],[44.5417,0.0799],[44.7708,0.0801],[45,0.0802],[45.2292,0.0801],[45.4583,0.0799],[45.6875,0.0794],[45.9167,0.0788],[46.1458,0.0781],[46.375,0.0772],[46.6042,0.0761],[46.8333,0.0749],[47.0625,0.0736],[47.2917,0.0721],[47.5208,0.0705],[47.75,0.0688],[47.9792,0.067],[48.2083,0.0651],[48.4375,0.0632],[48.6667,0.0611],[48.8958,0.059],[49.125,0.0569],[49.3542,0.0547],[49.5833,0.0525],[49.8125,0.0502],[50.0417,0.048],[50.2708,0.0457],[50.5,0.0435],[50.5,0],[39.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-45)**2)/(2*4.9749*4.9749))/(4.9749*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[45, 0]} point2={[45, 0.0802]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[39.5, 0]} point2={[39.5, 0.0435]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[50.5, 0]} point2={[50.5, 0.0435]} color="var(--mafs-fg-orange)" />
  <Text x={45} y={0.088} attach="n">μ = 45</Text>
  <Text x={39.5} y={-0.0064} attach="s">39.5</Text>
  <Text x={50.5} y={-0.0064} attach="s">50.5</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "standardising", "probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the approximating Normal: mean \\( np \\) and variance \\( np(1-p) \\).", workingLatex: "Y \\sim N(45,\\ 24.75), \\quad \\mu = 45,\\ \\sigma = \\sqrt{24.75} = 4.9749", explanation: "Here \\( np=100\\times0.45=45 \\) and \\( np(1-p)=100\\times0.45\\times0.55=24.75 \\), so \\( \\sigma=4.9749 \\) (4 d.p.)." },
        { stepNumber: 2, description: "Apply the continuity correction for \\( P(40 \\le X \\le 50) \\).", workingLatex: "P(40 \\le X \\le 50) \\approx P(39.5 < Y < 50.5)", explanation: "Both \\( 40 \\) and \\( 50 \\) are included, so widen to the outer edges \\( 39.5 \\) and \\( 50.5 \\)." },
        { stepNumber: 3, description: "Standardise both boundaries using \\( Z = \\dfrac{(a\\pm0.5)-np}{\\sqrt{np(1-p)}} \\).", workingLatex: "Z_1 = \\frac{39.5 - 45}{4.9749} = -1.1055, \\quad Z_2 = \\frac{50.5 - 45}{4.9749} = 1.1055", explanation: "Convert each boundary to a \\( z \\)-score." },
        { stepNumber: 4, description: "Find the probability between the two standardised values.", workingLatex: "P(39.5 < Y < 50.5) = \\Phi(1.1055) - \\Phi(-1.1055) = 0.8655 - 0.1345 = 0.7311", explanation: "\\( P(40\\le X\\le50)\\approx 0.7311 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(40 \\le X \\le 50) \\approx 0.7311 \\)",
      canonicalAnswer: "0.7311",
    },
  },
  {
    id: "y2na-023",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 23",
    difficulty: "Standard",
    questionText: "A machine produces components, each independently defective with probability \\( 0.12 \\). In a batch of \\( 200 \\) components, let \\( X \\) be the number that are defective. Using a suitable Normal approximation, find \\( P(X \\le 30) \\), giving your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [5.6172, 42.3828], y: [-0.0139, 0.1024] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 4.5957 }} yAxis={{ lines: false }} />
  <Polygon points={[[5.6172,0],[6.1356,0],[6.654,0.0001],[7.1724,0.0001],[7.6908,0.0002],[8.2092,0.0002],[8.7276,0.0003],[9.2459,0.0005],[9.7643,0.0007],[10.2827,0.001],[10.8011,0.0014],[11.3195,0.0019],[11.8379,0.0026],[12.3563,0.0035],[12.8747,0.0046],[13.3931,0.0061],[13.9115,0.0078],[14.4299,0.0099],[14.9483,0.0125],[15.4666,0.0155],[15.985,0.019],[16.5034,0.0229],[17.0218,0.0274],[17.5402,0.0323],[18.0586,0.0376],[18.577,0.0433],[19.0954,0.0491],[19.6138,0.055],[20.1322,0.0609],[20.6506,0.0666],[21.169,0.0718],[21.6873,0.0765],[22.2057,0.0804],[22.7241,0.0835],[23.2425,0.0856],[23.7609,0.0867],[24.2793,0.0866],[24.7977,0.0855],[25.3161,0.0833],[25.8345,0.0802],[26.3529,0.0761],[26.8713,0.0714],[27.3897,0.0661],[27.908,0.0605],[28.4264,0.0546],[28.9448,0.0487],[29.4632,0.0428],[29.9816,0.0372],[30.5,0.0319],[30.5,0],[5.6172,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-24)**2)/(2*4.5957*4.5957))/(4.5957*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[24, 0]} point2={[24, 0.0868]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[30.5, 0]} point2={[30.5, 0.0319]} color="var(--mafs-fg-orange)" />
  <Text x={24} y={0.0953} attach="n">μ = 24</Text>
  <Text x={30.5} y={-0.0069} attach="s">30.5</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "P(X<=a)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the Normal approximation. With \\( n=200 \\) and \\( p=0.12 \\), \\( np \\) and \\( n(1-p) \\) are both large, so use \\( N(np,\\,np(1-p)) \\).", workingLatex: "X \\approx N(24,\\,21.12), \\quad \\mu=np=24,\\ \\sigma=\\sqrt{200\\times0.12\\times0.88}=4.5957", explanation: "Here \\( np=24 \\) and \\( np(1-p)=21.12 \\), so the approximating distribution has mean \\( 24 \\) and standard deviation \\( 4.5957 \\)." },
        { stepNumber: 2, description: "Apply the continuity correction. \\( P(X\\le 30) \\) for the discrete \\( X \\) becomes \\( P(Y\\le 30.5) \\) for the continuous approximation \\( Y \\).", workingLatex: "P(X\\le 30) \\approx P(Y \\le 30.5)", explanation: "Including the whole bar at \\( 30 \\) means going up to \\( 30.5 \\)." },
        { stepNumber: 3, description: "Standardise using \\( Z=\\dfrac{Y-\\mu}{\\sigma} \\).", workingLatex: "Z=\\frac{30.5-24}{4.5957}=1.4144", explanation: "The corrected value \\( 30.5 \\) is \\( 1.4144 \\) standard deviations above the mean." },
        { stepNumber: 4, description: "Read off the probability.", workingLatex: "P(Z\\le 1.4144)=\\Phi(1.4144)=0.9214", explanation: "From the Normal distribution, \\( \\Phi(1.4144)=0.9214 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(X \\le 30) \\approx 0.9214 \\)",
      canonicalAnswer: "0.9214",
    },
  },
  {
    id: "y2na-024",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 24",
    difficulty: "Standard",
    questionText: "In an election, \\( 45\\% \\) of all voters support a particular candidate. A random sample of \\( 500 \\) voters is taken and \\( X \\) is the number in the sample who support the candidate. Using a suitable Normal approximation, find \\( P(X \\ge 240) \\), giving your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [180.5028, 269.4972], y: [-0.0057, 0.0423] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 11.1243 }} yAxis={{ lines: false }} />
  <Polygon points={[[239.5,0.0153],[240.1249,0.0142],[240.7499,0.0132],[241.3748,0.0121],[241.9998,0.0112],[242.6247,0.0102],[243.2497,0.0093],[243.8746,0.0085],[244.4995,0.0077],[245.1245,0.007],[245.7494,0.0063],[246.3744,0.0057],[246.9993,0.0051],[247.6242,0.0045],[248.2492,0.004],[248.8741,0.0036],[249.4991,0.0032],[250.124,0.0028],[250.749,0.0025],[251.3739,0.0022],[251.9988,0.0019],[252.6238,0.0016],[253.2487,0.0014],[253.8737,0.0012],[254.4986,0.0011],[255.1235,0.0009],[255.7485,0.0008],[256.3734,0.0007],[256.9984,0.0006],[257.6233,0.0005],[258.2483,0.0004],[258.8732,0.0003],[259.4981,0.0003],[260.1231,0.0002],[260.748,0.0002],[261.373,0.0002],[261.9979,0.0001],[262.6228,0.0001],[263.2478,0.0001],[263.8727,0.0001],[264.4977,0.0001],[265.1226,0.0001],[265.7476,0],[266.3725,0],[266.9974,0],[267.6224,0],[268.2473,0],[268.8723,0],[269.4972,0],[269.4972,0],[239.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-225)**2)/(2*11.1243*11.1243))/(11.1243*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[225, 0]} point2={[225, 0.0359]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[239.5, 0]} point2={[239.5, 0.0153]} color="var(--mafs-fg-orange)" />
  <Text x={225} y={0.0394} attach="n">μ = 225</Text>
  <Text x={239.5} y={-0.0029} attach="s">239.5</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "P(X>=a)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the Normal approximation. With \\( n=500 \\) and \\( p=0.45 \\), use \\( N(np,\\,np(1-p)) \\).", workingLatex: "X \\approx N(225,\\,123.75), \\quad \\mu=np=225,\\ \\sigma=\\sqrt{500\\times0.45\\times0.55}=11.1243", explanation: "Here \\( np=225 \\) and \\( np(1-p)=123.75 \\), giving mean \\( 225 \\) and standard deviation \\( 11.1243 \\)." },
        { stepNumber: 2, description: "Apply the continuity correction. \\( P(X\\ge 240) \\) becomes \\( P(Y\\ge 239.5) \\).", workingLatex: "P(X\\ge 240) \\approx P(Y \\ge 239.5)", explanation: "Including the whole bar at \\( 240 \\) means starting from \\( 239.5 \\)." },
        { stepNumber: 3, description: "Standardise using \\( Z=\\dfrac{Y-\\mu}{\\sigma} \\).", workingLatex: "Z=\\frac{239.5-225}{11.1243}=1.3035", explanation: "The corrected value \\( 239.5 \\) is \\( 1.3035 \\) standard deviations above the mean." },
        { stepNumber: 4, description: "Read off the probability using \\( P(Z\\ge z)=1-\\Phi(z) \\).", workingLatex: "P(Z\\ge 1.3035)=1-\\Phi(1.3035)=1-0.9038=0.0962", explanation: "From the Normal distribution, \\( 1-\\Phi(1.3035)=0.0962 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(X \\ge 240) \\approx 0.0962 \\)",
      canonicalAnswer: "0.0962",
    },
  },
  {
    id: "y2na-025",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 25",
    difficulty: "Standard",
    questionText: "A packet contains \\( 300 \\) seeds, each germinating independently with probability \\( 0.8 \\). Let \\( X \\) be the number of seeds that germinate. Using a suitable Normal approximation, find \\( P(230 \\le X \\le 250) \\), giving your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [212.2872, 267.7128], y: [-0.0092, 0.0679] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 6.9282 }} yAxis={{ lines: false }} />
  <Polygon points={[[229.5,0.0183],[229.9375,0.0201],[230.375,0.0219],[230.8125,0.0239],[231.25,0.0259],[231.6875,0.028],[232.125,0.0302],[232.5625,0.0324],[233,0.0346],[233.4375,0.0368],[233.875,0.039],[234.3125,0.0411],[234.75,0.0432],[235.1875,0.0452],[235.625,0.0472],[236.0625,0.049],[236.5,0.0507],[236.9375,0.0522],[237.375,0.0536],[237.8125,0.0548],[238.25,0.0558],[238.6875,0.0566],[239.125,0.0571],[239.5625,0.0575],[240,0.0576],[240.4375,0.0575],[240.875,0.0571],[241.3125,0.0566],[241.75,0.0558],[242.1875,0.0548],[242.625,0.0536],[243.0625,0.0522],[243.5,0.0507],[243.9375,0.049],[244.375,0.0472],[244.8125,0.0452],[245.25,0.0432],[245.6875,0.0411],[246.125,0.039],[246.5625,0.0368],[247,0.0346],[247.4375,0.0324],[247.875,0.0302],[248.3125,0.028],[248.75,0.0259],[249.1875,0.0239],[249.625,0.0219],[250.0625,0.0201],[250.5,0.0183],[250.5,0],[229.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-240)**2)/(2*6.9282*6.9282))/(6.9282*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[240, 0]} point2={[240, 0.0576]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[229.5, 0]} point2={[229.5, 0.0183]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[250.5, 0]} point2={[250.5, 0.0183]} color="var(--mafs-fg-orange)" />
  <Text x={240} y={0.0632} attach="n">μ = 240</Text>
  <Text x={229.5} y={-0.0046} attach="s">229.5</Text>
  <Text x={250.5} y={-0.0046} attach="s">250.5</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "P(a<=X<=b)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the Normal approximation. With \\( n=300 \\) and \\( p=0.8 \\), use \\( N(np,\\,np(1-p)) \\).", workingLatex: "X \\approx N(240,\\,48), \\quad \\mu=np=240,\\ \\sigma=\\sqrt{300\\times0.8\\times0.2}=6.9282", explanation: "Here \\( np=240 \\) and \\( np(1-p)=48 \\), giving mean \\( 240 \\) and standard deviation \\( 6.9282 \\)." },
        { stepNumber: 2, description: "Apply the continuity correction. \\( P(230\\le X\\le 250) \\) becomes \\( P(229.5\\le Y\\le 250.5) \\).", workingLatex: "P(230\\le X\\le 250) \\approx P(229.5 \\le Y \\le 250.5)", explanation: "Both endpoints are included, so widen the interval by \\( 0.5 \\) at each end." },
        { stepNumber: 3, description: "Standardise both endpoints using \\( Z=\\dfrac{Y-\\mu}{\\sigma} \\).", workingLatex: "Z_1=\\frac{229.5-240}{6.9282}=-1.5155, \\quad Z_2=\\frac{250.5-240}{6.9282}=1.5155", explanation: "The interval is symmetric about the mean, giving \\( z \\)-scores \\( \\pm 1.5155 \\)." },
        { stepNumber: 4, description: "Read off the probability using \\( \\Phi(z_2)-\\Phi(z_1) \\).", workingLatex: "\\Phi(1.5155)-\\Phi(-1.5155)=0.9352-0.0648=0.8704", explanation: "From the Normal distribution, the area between the corrected limits is \\( 0.8704 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(230 \\le X \\le 250) \\approx 0.8704 \\)",
      canonicalAnswer: "0.8704",
    },
  },
  {
    id: "y2na-026",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 26",
    difficulty: "Standard",
    questionText: "A fair coin is flipped \\( 400 \\) times and \\( X \\) is the number of heads obtained. Using a suitable Normal approximation, find \\( P(X = 210) \\), giving your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [160, 240], y: [-0.0064, 0.0471] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 10 }} yAxis={{ lines: false }} />
  <Polygon points={[[209.5,0.0254],[209.5208,0.0254],[209.5417,0.0253],[209.5625,0.0253],[209.5833,0.0252],[209.6042,0.0252],[209.625,0.0251],[209.6458,0.0251],[209.6667,0.025],[209.6875,0.025],[209.7083,0.0249],[209.7292,0.0249],[209.75,0.0248],[209.7708,0.0248],[209.7917,0.0247],[209.8125,0.0247],[209.8333,0.0246],[209.8542,0.0245],[209.875,0.0245],[209.8958,0.0244],[209.9167,0.0244],[209.9375,0.0243],[209.9583,0.0243],[209.9792,0.0242],[210,0.0242],[210.0208,0.0241],[210.0417,0.0241],[210.0625,0.024],[210.0833,0.024],[210.1042,0.0239],[210.125,0.0239],[210.1458,0.0238],[210.1667,0.0238],[210.1875,0.0237],[210.2083,0.0237],[210.2292,0.0236],[210.25,0.0236],[210.2708,0.0235],[210.2917,0.0235],[210.3125,0.0234],[210.3333,0.0234],[210.3542,0.0233],[210.375,0.0233],[210.3958,0.0232],[210.4167,0.0232],[210.4375,0.0231],[210.4583,0.0231],[210.4792,0.023],[210.5,0.023],[210.5,0],[209.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-200)**2)/(2*10*10))/(10*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[200, 0]} point2={[200, 0.0399]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[209.5, 0]} point2={[209.5, 0.0254]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[210.5, 0]} point2={[210.5, 0.023]} color="var(--mafs-fg-orange)" />
  <Text x={200} y={0.0438} attach="n">μ = 200</Text>
  <Text x={209.5} y={-0.0032} attach="s">209.5</Text>
  <Text x={210.5} y={-0.0032} attach="s">210.5</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "P(X=a)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the Normal approximation. With \\( n=400 \\) and \\( p=0.5 \\), use \\( N(np,\\,np(1-p)) \\).", workingLatex: "X \\approx N(200,\\,100), \\quad \\mu=np=200,\\ \\sigma=\\sqrt{400\\times0.5\\times0.5}=10", explanation: "Here \\( np=200 \\) and \\( np(1-p)=100 \\), giving mean \\( 200 \\) and standard deviation \\( 10 \\)." },
        { stepNumber: 2, description: "Apply the continuity correction. \\( P(X=210) \\) becomes \\( P(209.5\\le Y\\le 210.5) \\).", workingLatex: "P(X=210) \\approx P(209.5 \\le Y \\le 210.5)", explanation: "A single discrete value spreads across the bar from \\( 209.5 \\) to \\( 210.5 \\)." },
        { stepNumber: 3, description: "Standardise both endpoints using \\( Z=\\dfrac{Y-\\mu}{\\sigma} \\).", workingLatex: "Z_1=\\frac{209.5-200}{10}=0.95, \\quad Z_2=\\frac{210.5-200}{10}=1.05", explanation: "The two corrected boundaries give \\( z \\)-scores \\( 0.95 \\) and \\( 1.05 \\)." },
        { stepNumber: 4, description: "Read off the probability using \\( \\Phi(z_2)-\\Phi(z_1) \\).", workingLatex: "\\Phi(1.05)-\\Phi(0.95)=0.8531-0.8289=0.0242", explanation: "From the Normal distribution, the area of the bar is \\( 0.0242 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(X = 210) \\approx 0.0242 \\)",
      canonicalAnswer: "0.0242",
    },
  },
  {
    id: "y2na-027",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 27",
    difficulty: "Standard",
    questionText: "A large delivery of light bulbs has each bulb independently faulty with probability \\( 0.08 \\). A sample of \\( 250 \\) bulbs is tested and \\( X \\) is the number found to be faulty. Using a suitable Normal approximation, find \\( P(X \\le 25) \\), giving your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [2.842, 37.158], y: [-0.0149, 0.1097] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 4.2895 }} yAxis={{ lines: false }} />
  <Polygon points={[[2.842,0],[3.314,0],[3.7861,0.0001],[4.2581,0.0001],[4.7302,0.0002],[5.2022,0.0002],[5.6742,0.0004],[6.1463,0.0005],[6.6183,0.0007],[7.0904,0.001],[7.5624,0.0014],[8.0345,0.0019],[8.5065,0.0026],[8.9785,0.0034],[9.4506,0.0045],[9.9226,0.0059],[10.3947,0.0076],[10.8667,0.0096],[11.3387,0.0121],[11.8108,0.015],[12.2828,0.0184],[12.7549,0.0223],[13.2269,0.0267],[13.699,0.0316],[14.171,0.0369],[14.643,0.0426],[15.1151,0.0486],[15.5871,0.0548],[16.0592,0.061],[16.5312,0.0671],[17.0033,0.0729],[17.4753,0.0782],[17.9473,0.0829],[18.4194,0.0869],[18.8914,0.0899],[19.3635,0.092],[19.8355,0.0929],[20.3075,0.0928],[20.7796,0.0915],[21.2516,0.0891],[21.7237,0.0858],[22.1957,0.0816],[22.6678,0.0767],[23.1398,0.0711],[23.6118,0.0652],[24.0839,0.0591],[24.5559,0.0529],[25.028,0.0468],[25.5,0.0409],[25.5,0],[2.842,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-20)**2)/(2*4.2895*4.2895))/(4.2895*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[20, 0]} point2={[20, 0.093]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[25.5, 0]} point2={[25.5, 0.0409]} color="var(--mafs-fg-orange)" />
  <Text x={20} y={0.1021} attach="n">μ = 20</Text>
  <Text x={25.5} y={-0.0074} attach="s">25.5</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "P(X<=a)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the Normal approximation. With \\( n=250 \\) and \\( p=0.08 \\), use \\( N(np,\\,np(1-p)) \\).", workingLatex: "X \\approx N(20,\\,18.4), \\quad \\mu=np=20,\\ \\sigma=\\sqrt{250\\times0.08\\times0.92}=4.2895", explanation: "Here \\( np=20 \\) and \\( np(1-p)=18.4 \\), giving mean \\( 20 \\) and standard deviation \\( 4.2895 \\)." },
        { stepNumber: 2, description: "Apply the continuity correction. \\( P(X\\le 25) \\) becomes \\( P(Y\\le 25.5) \\).", workingLatex: "P(X\\le 25) \\approx P(Y \\le 25.5)", explanation: "Including the whole bar at \\( 25 \\) means going up to \\( 25.5 \\)." },
        { stepNumber: 3, description: "Standardise and read off the probability using \\( Z=\\dfrac{Y-\\mu}{\\sigma} \\).", workingLatex: "Z=\\frac{25.5-20}{4.2895}=1.2822, \\quad P(Z\\le 1.2822)=\\Phi(1.2822)=0.9001", explanation: "The corrected value is \\( 1.2822 \\) standard deviations above the mean, and \\( \\Phi(1.2822)=0.9001 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(X \\le 25) \\approx 0.9001 \\)",
      canonicalAnswer: "0.9001",
    },
  },
  {
    id: "y2na-028",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 28",
    difficulty: "Standard",
    questionText: "A tray holds \\( 400 \\) seeds, each germinating independently with probability \\( 0.85 \\). Let \\( X \\) be the number that germinate. Using a suitable Normal approximation, find \\( P(X \\ge 350) \\), giving your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [311.4344, 368.5656], y: [-0.0089, 0.0659] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 7.1414 }} yAxis={{ lines: false }} />
  <Polygon points={[[349.5,0.0231],[349.8972,0.0214],[350.2944,0.0198],[350.6916,0.0182],[351.0888,0.0167],[351.486,0.0153],[351.8832,0.014],[352.2804,0.0127],[352.6776,0.0116],[353.0748,0.0105],[353.472,0.0094],[353.8692,0.0085],[354.2664,0.0076],[354.6636,0.0068],[355.0608,0.006],[355.458,0.0054],[355.8552,0.0048],[356.2524,0.0042],[356.6496,0.0037],[357.0468,0.0032],[357.444,0.0028],[357.8412,0.0025],[358.2384,0.0021],[358.6356,0.0019],[359.0328,0.0016],[359.43,0.0014],[359.8272,0.0012],[360.2244,0.001],[360.6216,0.0009],[361.0188,0.0007],[361.416,0.0006],[361.8132,0.0005],[362.2104,0.0004],[362.6076,0.0004],[363.0048,0.0003],[363.402,0.0003],[363.7992,0.0002],[364.1964,0.0002],[364.5936,0.0001],[364.9908,0.0001],[365.388,0.0001],[365.7852,0.0001],[366.1824,0.0001],[366.5796,0.0001],[366.9768,0],[367.374,0],[367.7712,0],[368.1684,0],[368.5656,0],[368.5656,0],[349.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-340)**2)/(2*7.1414*7.1414))/(7.1414*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[340, 0]} point2={[340, 0.0559]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[349.5, 0]} point2={[349.5, 0.0231]} color="var(--mafs-fg-orange)" />
  <Text x={340} y={0.0613} attach="n">μ = 340</Text>
  <Text x={349.5} y={-0.0045} attach="s">349.5</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "P(X>=a)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the Normal approximation. With \\( n=400 \\) and \\( p=0.85 \\), use \\( N(np,\\,np(1-p)) \\).", workingLatex: "X \\approx N(340,\\,51), \\quad \\mu=np=340,\\ \\sigma=\\sqrt{400\\times0.85\\times0.15}=7.1414", explanation: "Here \\( np=340 \\) and \\( np(1-p)=51 \\), giving mean \\( 340 \\) and standard deviation \\( 7.1414 \\)." },
        { stepNumber: 2, description: "Apply the continuity correction. \\( P(X\\ge 350) \\) becomes \\( P(Y\\ge 349.5) \\).", workingLatex: "P(X\\ge 350) \\approx P(Y \\ge 349.5)", explanation: "Including the whole bar at \\( 350 \\) means starting from \\( 349.5 \\)." },
        { stepNumber: 3, description: "Standardise and read off the probability using \\( P(Z\\ge z)=1-\\Phi(z) \\).", workingLatex: "Z=\\frac{349.5-340}{7.1414}=1.3303, \\quad P(Z\\ge 1.3303)=1-\\Phi(1.3303)=0.0917", explanation: "The corrected value is \\( 1.3303 \\) standard deviations above the mean, and \\( 1-\\Phi(1.3303)=0.0917 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(X \\ge 350) \\approx 0.0917 \\)",
      canonicalAnswer: "0.0917",
    },
  },
  {
    id: "y2na-029",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 29",
    difficulty: "Standard",
    questionText: "A fair coin is flipped \\( 1000 \\) times and \\( X \\) is the number of heads obtained. Using a suitable Normal approximation, find \\( P(480 \\le X \\le 520) \\), giving your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [436.7544, 563.2456], y: [-0.004, 0.0298] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 15.8114 }} yAxis={{ lines: false }} />
  <Polygon points={[[479.5,0.0109],[480.3542,0.0117],[481.2083,0.0125],[482.0625,0.0133],[482.9167,0.0141],[483.7708,0.0149],[484.625,0.0157],[485.4792,0.0165],[486.3333,0.0174],[487.1875,0.0182],[488.0417,0.019],[488.8958,0.0197],[489.75,0.0204],[490.6042,0.0211],[491.4583,0.0218],[492.3125,0.0224],[493.1667,0.023],[494.0208,0.0235],[494.875,0.0239],[495.7292,0.0243],[496.5833,0.0246],[497.4375,0.0249],[498.2917,0.0251],[499.1458,0.0252],[500,0.0252],[500.8542,0.0252],[501.7083,0.0251],[502.5625,0.0249],[503.4167,0.0246],[504.2708,0.0243],[505.125,0.0239],[505.9792,0.0235],[506.8333,0.023],[507.6875,0.0224],[508.5417,0.0218],[509.3958,0.0211],[510.25,0.0204],[511.1042,0.0197],[511.9583,0.019],[512.8125,0.0182],[513.6667,0.0174],[514.5208,0.0165],[515.375,0.0157],[516.2292,0.0149],[517.0833,0.0141],[517.9375,0.0133],[518.7917,0.0125],[519.6458,0.0117],[520.5,0.0109],[520.5,0],[479.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-500)**2)/(2*15.8114*15.8114))/(15.8114*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[500, 0]} point2={[500, 0.0252]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[479.5, 0]} point2={[479.5, 0.0109]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[520.5, 0]} point2={[520.5, 0.0109]} color="var(--mafs-fg-orange)" />
  <Text x={500} y={0.0277} attach="n">μ = 500</Text>
  <Text x={479.5} y={-0.002} attach="s">479.5</Text>
  <Text x={520.5} y={-0.002} attach="s">520.5</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "P(a<=X<=b)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the Normal approximation. With \\( n=1000 \\) and \\( p=0.5 \\), use \\( N(np,\\,np(1-p)) \\).", workingLatex: "X \\approx N(500,\\,250), \\quad \\mu=np=500,\\ \\sigma=\\sqrt{1000\\times0.5\\times0.5}=15.8114", explanation: "Here \\( np=500 \\) and \\( np(1-p)=250 \\), giving mean \\( 500 \\) and standard deviation \\( 15.8114 \\)." },
        { stepNumber: 2, description: "Apply the continuity correction. \\( P(480\\le X\\le 520) \\) becomes \\( P(479.5\\le Y\\le 520.5) \\).", workingLatex: "P(480\\le X\\le 520) \\approx P(479.5 \\le Y \\le 520.5)", explanation: "Both endpoints are included, so widen the interval by \\( 0.5 \\) at each end." },
        { stepNumber: 3, description: "Standardise both endpoints using \\( Z=\\dfrac{Y-\\mu}{\\sigma} \\).", workingLatex: "Z_1=\\frac{479.5-500}{15.8114}=-1.2965, \\quad Z_2=\\frac{520.5-500}{15.8114}=1.2965", explanation: "The interval is symmetric about the mean, giving \\( z \\)-scores \\( \\pm 1.2965 \\)." },
        { stepNumber: 4, description: "Read off the probability using \\( \\Phi(z_2)-\\Phi(z_1) \\).", workingLatex: "\\Phi(1.2965)-\\Phi(-1.2965)=0.9026-0.0974=0.8052", explanation: "From the Normal distribution, the area between the corrected limits is \\( 0.8052 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(480 \\le X \\le 520) \\approx 0.8052 \\)",
      canonicalAnswer: "0.8052",
    },
  },
  {
    id: "y2na-030",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 30",
    difficulty: "Standard",
    questionText: "A production line makes microchips, each independently defective with probability \\( 0.10 \\). In a run of \\( 600 \\) chips, let \\( X \\) be the number that are defective. Using a suitable Normal approximation, find \\( P(X = 55) \\), giving your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [30.606, 89.394], y: [-0.0087, 0.0641] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 7.3485 }} yAxis={{ lines: false }} />
  <Polygon points={[[54.5,0.041],[54.5208,0.0411],[54.5417,0.0412],[54.5625,0.0413],[54.5833,0.0414],[54.6042,0.0415],[54.625,0.0415],[54.6458,0.0416],[54.6667,0.0417],[54.6875,0.0418],[54.7083,0.0419],[54.7292,0.042],[54.75,0.0421],[54.7708,0.0421],[54.7917,0.0422],[54.8125,0.0423],[54.8333,0.0424],[54.8542,0.0425],[54.875,0.0426],[54.8958,0.0427],[54.9167,0.0427],[54.9375,0.0428],[54.9583,0.0429],[54.9792,0.043],[55,0.0431],[55.0208,0.0432],[55.0417,0.0432],[55.0625,0.0433],[55.0833,0.0434],[55.1042,0.0435],[55.125,0.0436],[55.1458,0.0436],[55.1667,0.0437],[55.1875,0.0438],[55.2083,0.0439],[55.2292,0.044],[55.25,0.0441],[55.2708,0.0441],[55.2917,0.0442],[55.3125,0.0443],[55.3333,0.0444],[55.3542,0.0445],[55.375,0.0445],[55.3958,0.0446],[55.4167,0.0447],[55.4375,0.0448],[55.4583,0.0449],[55.4792,0.0449],[55.5,0.045],[55.5,0],[54.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-60)**2)/(2*7.3485*7.3485))/(7.3485*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[60, 0]} point2={[60, 0.0543]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[54.5, 0]} point2={[54.5, 0.041]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[55.5, 0]} point2={[55.5, 0.045]} color="var(--mafs-fg-orange)" />
  <Text x={60} y={0.0596} attach="n">μ = 60</Text>
  <Text x={54.5} y={-0.0043} attach="s">54.5</Text>
  <Text x={55.5} y={-0.0043} attach="s">55.5</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "P(X=a)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the Normal approximation. With \\( n=600 \\) and \\( p=0.10 \\), use \\( N(np,\\,np(1-p)) \\).", workingLatex: "X \\approx N(60,\\,54), \\quad \\mu=np=60,\\ \\sigma=\\sqrt{600\\times0.1\\times0.9}=7.3485", explanation: "Here \\( np=60 \\) and \\( np(1-p)=54 \\), giving mean \\( 60 \\) and standard deviation \\( 7.3485 \\)." },
        { stepNumber: 2, description: "Apply the continuity correction. \\( P(X=55) \\) becomes \\( P(54.5\\le Y\\le 55.5) \\).", workingLatex: "P(X=55) \\approx P(54.5 \\le Y \\le 55.5)", explanation: "A single discrete value spreads across the bar from \\( 54.5 \\) to \\( 55.5 \\)." },
        { stepNumber: 3, description: "Standardise both endpoints using \\( Z=\\dfrac{Y-\\mu}{\\sigma} \\).", workingLatex: "Z_1=\\frac{54.5-60}{7.3485}=-0.7485, \\quad Z_2=\\frac{55.5-60}{7.3485}=-0.6124", explanation: "Both corrected boundaries lie below the mean, giving negative \\( z \\)-scores." },
        { stepNumber: 4, description: "Read off the probability using \\( \\Phi(z_2)-\\Phi(z_1) \\).", workingLatex: "\\Phi(-0.6124)-\\Phi(-0.7485)=0.27009-0.22703=0.0431", explanation: "From the Normal distribution, the area of the bar is \\( 0.0431 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(X = 55) \\approx 0.0431 \\)",
      canonicalAnswer: "0.0431",
    },
  },
  {
    id: "y2na-031",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 31",
    difficulty: "Standard",
    questionText: "In a town, \\( 30\\% \\) of residents say they would vote yes in a referendum. A random sample of \\( 800 \\) residents is surveyed and \\( X \\) is the number who say yes. Using a suitable Normal approximation, find \\( P(X \\le 230) \\), giving your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [188.154, 291.846], y: [-0.0049, 0.0363] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 12.9615 }} yAxis={{ lines: false }} />
  <Polygon points={[[188.154,0],[189.0362,0],[189.9184,0],[190.8006,0],[191.6828,0],[192.565,0],[193.4473,0],[194.3295,0.0001],[195.2117,0.0001],[196.0939,0.0001],[196.9761,0.0001],[197.8583,0.0002],[198.7405,0.0002],[199.6227,0.0002],[200.5049,0.0003],[201.3871,0.0004],[202.2693,0.0004],[203.1515,0.0005],[204.0338,0.0007],[204.916,0.0008],[205.7982,0.0009],[206.6804,0.0011],[207.5626,0.0013],[208.4448,0.0016],[209.327,0.0019],[210.2092,0.0022],[211.0914,0.0026],[211.9736,0.003],[212.8558,0.0034],[213.738,0.004],[214.6203,0.0045],[215.5025,0.0052],[216.3847,0.0059],[217.2669,0.0066],[218.1491,0.0074],[219.0313,0.0083],[219.9135,0.0093],[220.7957,0.0103],[221.6779,0.0113],[222.5601,0.0124],[223.4423,0.0136],[224.3245,0.0148],[225.2068,0.016],[226.089,0.0173],[226.9712,0.0186],[227.8534,0.0198],[228.7356,0.0211],[229.6178,0.0223],[230.5,0.0235],[230.5,0],[188.154,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-240)**2)/(2*12.9615*12.9615))/(12.9615*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[240, 0]} point2={[240, 0.0308]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[230.5, 0]} point2={[230.5, 0.0235]} color="var(--mafs-fg-orange)" />
  <Text x={240} y={0.0338} attach="n">μ = 240</Text>
  <Text x={230.5} y={-0.0025} attach="s">230.5</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "P(X<=a)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the Normal approximation. With \\( n=800 \\) and \\( p=0.30 \\), use \\( N(np,\\,np(1-p)) \\).", workingLatex: "X \\approx N(240,\\,168), \\quad \\mu=np=240,\\ \\sigma=\\sqrt{800\\times0.3\\times0.7}=12.9615", explanation: "Here \\( np=240 \\) and \\( np(1-p)=168 \\), giving mean \\( 240 \\) and standard deviation \\( 12.9615 \\)." },
        { stepNumber: 2, description: "Apply the continuity correction. \\( P(X\\le 230) \\) becomes \\( P(Y\\le 230.5) \\).", workingLatex: "P(X\\le 230) \\approx P(Y \\le 230.5)", explanation: "Including the whole bar at \\( 230 \\) means going up to \\( 230.5 \\)." },
        { stepNumber: 3, description: "Standardise and read off the probability using \\( Z=\\dfrac{Y-\\mu}{\\sigma} \\).", workingLatex: "Z=\\frac{230.5-240}{12.9615}=-0.7329, \\quad P(Z\\le -0.7329)=\\Phi(-0.7329)=0.2318", explanation: "The corrected value is \\( 0.7329 \\) standard deviations below the mean, and \\( \\Phi(-0.7329)=0.2318 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(X \\le 230) \\approx 0.2318 \\)",
      canonicalAnswer: "0.2318",
    },
  },
  {
    id: "y2na-032",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 32",
    difficulty: "Standard",
    questionText: "A fair six-sided die is rolled \\( 720 \\) times and \\( X \\) is the number of times a six is obtained. Using a suitable Normal approximation, find \\( P(X \\ge 130) \\), giving your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [80, 160], y: [-0.0064, 0.0471] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 10 }} yAxis={{ lines: false }} />
  <Polygon points={[[129.5,0.0254],[130.1354,0.0239],[130.7708,0.0223],[131.4063,0.0208],[132.0417,0.0193],[132.6771,0.0179],[133.3125,0.0164],[133.9479,0.0151],[134.5833,0.0138],[135.2188,0.0125],[135.8542,0.0114],[136.4896,0.0102],[137.125,0.0092],[137.7604,0.0082],[138.3958,0.0073],[139.0313,0.0065],[139.6667,0.0058],[140.3021,0.0051],[140.9375,0.0045],[141.5729,0.0039],[142.2083,0.0034],[142.8438,0.0029],[143.4792,0.0025],[144.1146,0.0022],[144.75,0.0019],[145.3854,0.0016],[146.0208,0.0014],[146.6563,0.0011],[147.2917,0.001],[147.9271,0.0008],[148.5625,0.0007],[149.1979,0.0006],[149.8333,0.0005],[150.4688,0.0004],[151.1042,0.0003],[151.7396,0.0003],[152.375,0.0002],[153.0104,0.0002],[153.6458,0.0001],[154.2813,0.0001],[154.9167,0.0001],[155.5521,0.0001],[156.1875,0.0001],[156.8229,0],[157.4583,0],[158.0938,0],[158.7292,0],[159.3646,0],[160,0],[160,0],[129.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-120)**2)/(2*10*10))/(10*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[120, 0]} point2={[120, 0.0399]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[129.5, 0]} point2={[129.5, 0.0254]} color="var(--mafs-fg-orange)" />
  <Text x={120} y={0.0438} attach="n">μ = 120</Text>
  <Text x={129.5} y={-0.0032} attach="s">129.5</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "P(X>=a)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the Normal approximation. With \\( n=720 \\) and \\( p=\\tfrac{1}{6} \\), use \\( N(np,\\,np(1-p)) \\).", workingLatex: "X \\approx N(120,\\,100), \\quad \\mu=np=120,\\ \\sigma=\\sqrt{720\\times\\tfrac{1}{6}\\times\\tfrac{5}{6}}=10", explanation: "Here \\( np=120 \\) and \\( np(1-p)=100 \\), giving mean \\( 120 \\) and standard deviation \\( 10 \\)." },
        { stepNumber: 2, description: "Apply the continuity correction. \\( P(X\\ge 130) \\) becomes \\( P(Y\\ge 129.5) \\).", workingLatex: "P(X\\ge 130) \\approx P(Y \\ge 129.5)", explanation: "Including the whole bar at \\( 130 \\) means starting from \\( 129.5 \\)." },
        { stepNumber: 3, description: "Standardise and read off the probability using \\( P(Z\\ge z)=1-\\Phi(z) \\).", workingLatex: "Z=\\frac{129.5-120}{10}=0.95, \\quad P(Z\\ge 0.95)=1-\\Phi(0.95)=0.1711", explanation: "The corrected value is \\( 0.95 \\) standard deviations above the mean, and \\( 1-\\Phi(0.95)=0.1711 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(X \\ge 130) \\approx 0.1711 \\)",
      canonicalAnswer: "0.1711",
    },
  },
  {
    id: "y2na-033",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 33",
    difficulty: "Standard",
    questionText: "An airline finds that each passenger holding a reservation independently shows up for a flight with probability \\( 0.92 \\). On a day with \\( 450 \\) reservations, let \\( X \\) be the number who show up. Using a suitable Normal approximation, find \\( P(405 \\le X \\le 420) \\), giving your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [390.98, 437.02], y: [-0.0111, 0.0818] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 5.755 }} yAxis={{ lines: false }} />
  <Polygon points={[[404.5,0.0177],[404.8333,0.0195],[405.1667,0.0213],[405.5,0.0233],[405.8333,0.0253],[406.1667,0.0275],[406.5,0.0297],[406.8333,0.0319],[407.1667,0.0343],[407.5,0.0366],[407.8333,0.039],[408.1667,0.0415],[408.5,0.0439],[408.8333,0.0463],[409.1667,0.0487],[409.5,0.0511],[409.8333,0.0533],[410.1667,0.0555],[410.5,0.0576],[410.8333,0.0596],[411.1667,0.0614],[411.5,0.0631],[411.8333,0.0646],[412.1667,0.0659],[412.5,0.067],[412.8333,0.0679],[413.1667,0.0686],[413.5,0.0691],[413.8333,0.0693],[414.1667,0.0693],[414.5,0.0691],[414.8333,0.0686],[415.1667,0.0679],[415.5,0.067],[415.8333,0.0659],[416.1667,0.0646],[416.5,0.0631],[416.8333,0.0614],[417.1667,0.0596],[417.5,0.0576],[417.8333,0.0555],[418.1667,0.0533],[418.5,0.0511],[418.8333,0.0487],[419.1667,0.0463],[419.5,0.0439],[419.8333,0.0415],[420.1667,0.039],[420.5,0.0366],[420.5,0],[404.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-414)**2)/(2*5.755*5.755))/(5.755*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[414, 0]} point2={[414, 0.0693]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[404.5, 0]} point2={[404.5, 0.0177]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[420.5, 0]} point2={[420.5, 0.0366]} color="var(--mafs-fg-orange)" />
  <Text x={414} y={0.0761} attach="n">μ = 414</Text>
  <Text x={404.5} y={-0.0055} attach="s">404.5</Text>
  <Text x={420.5} y={-0.0055} attach="s">420.5</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "P(a<=X<=b)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the Normal approximation. With \\( n=450 \\) and \\( p=0.92 \\), use \\( N(np,\\,np(1-p)) \\).", workingLatex: "X \\approx N(414,\\,33.12), \\quad \\mu=np=414,\\ \\sigma=\\sqrt{450\\times0.92\\times0.08}=5.7550", explanation: "Here \\( np=414 \\) and \\( np(1-p)=33.12 \\), giving mean \\( 414 \\) and standard deviation \\( 5.7550 \\)." },
        { stepNumber: 2, description: "Apply the continuity correction. \\( P(405\\le X\\le 420) \\) becomes \\( P(404.5\\le Y\\le 420.5) \\).", workingLatex: "P(405\\le X\\le 420) \\approx P(404.5 \\le Y \\le 420.5)", explanation: "Both endpoints are included, so widen the interval by \\( 0.5 \\) at each end." },
        { stepNumber: 3, description: "Standardise both endpoints using \\( Z=\\dfrac{Y-\\mu}{\\sigma} \\).", workingLatex: "Z_1=\\frac{404.5-414}{5.7550}=-1.6507, \\quad Z_2=\\frac{420.5-414}{5.7550}=1.1295", explanation: "The corrected lower and upper limits give \\( z \\)-scores \\( -1.6507 \\) and \\( 1.1295 \\)." },
        { stepNumber: 4, description: "Read off the probability using \\( \\Phi(z_2)-\\Phi(z_1) \\).", workingLatex: "\\Phi(1.1295)-\\Phi(-1.6507)=0.8707-0.0494=0.8213", explanation: "From the Normal distribution, the area between the corrected limits is \\( 0.8213 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(405 \\le X \\le 420) \\approx 0.8213 \\)",
      canonicalAnswer: "0.8213",
    },
  },
  {
    id: "y2na-034",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 34",
    difficulty: "Standard",
    questionText: "In a large bag of sweets, each sweet is independently red with probability \\( 0.40 \\). A sample of \\( 350 \\) sweets is taken and \\( X \\) is the number that are red. Using a suitable Normal approximation, find \\( P(X = 145) \\), giving your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [103.3392, 176.6608], y: [-0.007, 0.0514] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 9.1652 }} yAxis={{ lines: false }} />
  <Polygon points={[[144.5,0.0386],[144.5208,0.0385],[144.5417,0.0385],[144.5625,0.0385],[144.5833,0.0384],[144.6042,0.0384],[144.625,0.0383],[144.6458,0.0383],[144.6667,0.0382],[144.6875,0.0382],[144.7083,0.0381],[144.7292,0.0381],[144.75,0.0381],[144.7708,0.038],[144.7917,0.038],[144.8125,0.0379],[144.8333,0.0379],[144.8542,0.0378],[144.875,0.0378],[144.8958,0.0377],[144.9167,0.0377],[144.9375,0.0376],[144.9583,0.0376],[144.9792,0.0376],[145,0.0375],[145.0208,0.0375],[145.0417,0.0374],[145.0625,0.0374],[145.0833,0.0373],[145.1042,0.0373],[145.125,0.0372],[145.1458,0.0372],[145.1667,0.0371],[145.1875,0.0371],[145.2083,0.037],[145.2292,0.037],[145.25,0.0369],[145.2708,0.0369],[145.2917,0.0368],[145.3125,0.0368],[145.3333,0.0367],[145.3542,0.0367],[145.375,0.0367],[145.3958,0.0366],[145.4167,0.0366],[145.4375,0.0365],[145.4583,0.0365],[145.4792,0.0364],[145.5,0.0364],[145.5,0],[144.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-140)**2)/(2*9.1652*9.1652))/(9.1652*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[140, 0]} point2={[140, 0.0435]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[144.5, 0]} point2={[144.5, 0.0386]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[145.5, 0]} point2={[145.5, 0.0364]} color="var(--mafs-fg-orange)" />
  <Text x={140} y={0.0478} attach="n">μ = 140</Text>
  <Text x={144.5} y={-0.0035} attach="s">144.5</Text>
  <Text x={145.5} y={-0.0035} attach="s">145.5</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "P(X=a)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the Normal approximation. With \\( n=350 \\) and \\( p=0.40 \\), use \\( N(np,\\,np(1-p)) \\).", workingLatex: "X \\approx N(140,\\,84), \\quad \\mu=np=140,\\ \\sigma=\\sqrt{350\\times0.4\\times0.6}=9.1652", explanation: "Here \\( np=140 \\) and \\( np(1-p)=84 \\), giving mean \\( 140 \\) and standard deviation \\( 9.1652 \\)." },
        { stepNumber: 2, description: "Apply the continuity correction. \\( P(X=145) \\) becomes \\( P(144.5\\le Y\\le 145.5) \\).", workingLatex: "P(X=145) \\approx P(144.5 \\le Y \\le 145.5)", explanation: "A single discrete value spreads across the bar from \\( 144.5 \\) to \\( 145.5 \\)." },
        { stepNumber: 3, description: "Standardise both endpoints using \\( Z=\\dfrac{Y-\\mu}{\\sigma} \\).", workingLatex: "Z_1=\\frac{144.5-140}{9.1652}=0.4910, \\quad Z_2=\\frac{145.5-140}{9.1652}=0.6001", explanation: "The two corrected boundaries give \\( z \\)-scores \\( 0.4910 \\) and \\( 0.6001 \\)." },
        { stepNumber: 4, description: "Read off the probability using \\( \\Phi(z_2)-\\Phi(z_1) \\).", workingLatex: "\\Phi(0.6001)-\\Phi(0.4910)=0.7258-0.6883=0.0375", explanation: "From the Normal distribution, the area of the bar is \\( 0.0375 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(X = 145) \\approx 0.0375 \\)",
      canonicalAnswer: "0.0375",
    },
  },
  {
    id: "y2na-035",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 35",
    difficulty: "Standard",
    questionText: "An email filter classifies incoming messages, and each message is independently spam with probability \\( 0.20 \\). On a day with \\( 1200 \\) messages, let \\( X \\) be the number that are spam. Using a suitable Normal approximation, find \\( P(X \\le 230) \\), giving your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [184.5744, 295.4256], y: [-0.0046, 0.034] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 13.8564 }} yAxis={{ lines: false }} />
  <Polygon points={[[184.5744,0],[185.5312,0],[186.488,0],[187.4448,0],[188.4015,0],[189.3583,0],[190.3151,0],[191.2719,0.0001],[192.2287,0.0001],[193.1855,0.0001],[194.1422,0.0001],[195.099,0.0002],[196.0558,0.0002],[197.0126,0.0002],[197.9694,0.0003],[198.9262,0.0004],[199.8829,0.0004],[200.8397,0.0005],[201.7965,0.0006],[202.7533,0.0008],[203.7101,0.0009],[204.6669,0.0011],[205.6236,0.0013],[206.5804,0.0016],[207.5372,0.0019],[208.494,0.0022],[209.4508,0.0025],[210.4076,0.0029],[211.3643,0.0034],[212.3211,0.0039],[213.2779,0.0045],[214.2347,0.0051],[215.1915,0.0058],[216.1483,0.0065],[217.105,0.0074],[218.0618,0.0082],[219.0186,0.0091],[219.9754,0.0101],[220.9322,0.0112],[221.889,0.0123],[222.8457,0.0134],[223.8025,0.0145],[224.7593,0.0157],[225.7161,0.0169],[226.6729,0.0181],[227.6297,0.0193],[228.5864,0.0205],[229.5432,0.0217],[230.5,0.0228],[230.5,0],[184.5744,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-240)**2)/(2*13.8564*13.8564))/(13.8564*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[240, 0]} point2={[240, 0.0288]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[230.5, 0]} point2={[230.5, 0.0228]} color="var(--mafs-fg-orange)" />
  <Text x={240} y={0.0316} attach="n">μ = 240</Text>
  <Text x={230.5} y={-0.0023} attach="s">230.5</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "P(X<=a)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the Normal approximation. With \\( n=1200 \\) and \\( p=0.20 \\), use \\( N(np,\\,np(1-p)) \\).", workingLatex: "X \\approx N(240,\\,192), \\quad \\mu=np=240,\\ \\sigma=\\sqrt{1200\\times0.2\\times0.8}=13.8564", explanation: "Here \\( np=240 \\) and \\( np(1-p)=192 \\), giving mean \\( 240 \\) and standard deviation \\( 13.8564 \\)." },
        { stepNumber: 2, description: "Apply the continuity correction. \\( P(X\\le 230) \\) becomes \\( P(Y\\le 230.5) \\).", workingLatex: "P(X\\le 230) \\approx P(Y \\le 230.5)", explanation: "Including the whole bar at \\( 230 \\) means going up to \\( 230.5 \\)." },
        { stepNumber: 3, description: "Standardise and read off the probability using \\( Z=\\dfrac{Y-\\mu}{\\sigma} \\).", workingLatex: "Z=\\frac{230.5-240}{13.8564}=-0.6856, \\quad P(Z\\le -0.6856)=\\Phi(-0.6856)=0.2465", explanation: "The corrected value is \\( 0.6856 \\) standard deviations below the mean, and \\( \\Phi(-0.6856)=0.2465 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(X \\le 230) \\approx 0.2465 \\)",
      canonicalAnswer: "0.2465",
    },
  },
  {
    id: "y2na-036",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 36",
    difficulty: "Standard",
    questionText: "In a population, each person is independently left-handed with probability \\( 0.10 \\). A random sample of \\( 900 \\) people is taken and \\( X \\) is the number who are left-handed. Using a suitable Normal approximation, find \\( P(X \\ge 100) \\), giving your answer to 4 decimal places.",
    questionMafs: `<Mafs viewBox={{ x: [54, 126], y: [-0.0071, 0.0523] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 9 }} yAxis={{ lines: false }} />
  <Polygon points={[[99.5,0.0254],[100.0521,0.0238],[100.6042,0.0221],[101.1563,0.0206],[101.7083,0.019],[102.2604,0.0175],[102.8125,0.0161],[103.3646,0.0147],[103.9167,0.0134],[104.4688,0.0122],[105.0208,0.011],[105.5729,0.0099],[106.125,0.0089],[106.6771,0.008],[107.2292,0.0071],[107.7813,0.0063],[108.3333,0.0056],[108.8854,0.0049],[109.4375,0.0043],[109.9896,0.0038],[110.5417,0.0033],[111.0938,0.0028],[111.6458,0.0025],[112.1979,0.0021],[112.75,0.0018],[113.3021,0.0016],[113.8542,0.0013],[114.4063,0.0011],[114.9583,0.0009],[115.5104,0.0008],[116.0625,0.0007],[116.6146,0.0006],[117.1667,0.0005],[117.7188,0.0004],[118.2708,0.0003],[118.8229,0.0003],[119.375,0.0002],[119.9271,0.0002],[120.4792,0.0001],[121.0313,0.0001],[121.5833,0.0001],[122.1354,0.0001],[122.6875,0.0001],[123.2396,0],[123.7917,0],[124.3438,0],[124.8958,0],[125.4479,0],[126,0],[126,0],[99.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-90)**2)/(2*9*9))/(9*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[90, 0]} point2={[90, 0.0443]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[99.5, 0]} point2={[99.5, 0.0254]} color="var(--mafs-fg-orange)" />
  <Text x={90} y={0.0486} attach="n">μ = 90</Text>
  <Text x={99.5} y={-0.0035} attach="s">99.5</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "P(X>=a)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the Normal approximation. With \\( n=900 \\) and \\( p=0.10 \\), use \\( N(np,\\,np(1-p)) \\).", workingLatex: "X \\approx N(90,\\,81), \\quad \\mu=np=90,\\ \\sigma=\\sqrt{900\\times0.1\\times0.9}=9", explanation: "Here \\( np=90 \\) and \\( np(1-p)=81 \\), giving mean \\( 90 \\) and standard deviation \\( 9 \\)." },
        { stepNumber: 2, description: "Apply the continuity correction. \\( P(X\\ge 100) \\) becomes \\( P(Y\\ge 99.5) \\).", workingLatex: "P(X\\ge 100) \\approx P(Y \\ge 99.5)", explanation: "Including the whole bar at \\( 100 \\) means starting from \\( 99.5 \\)." },
        { stepNumber: 3, description: "Standardise and read off the probability using \\( P(Z\\ge z)=1-\\Phi(z) \\).", workingLatex: "Z=\\frac{99.5-90}{9}=1.0556, \\quad P(Z\\ge 1.0556)=1-\\Phi(1.0556)=0.1456", explanation: "The corrected value is \\( 1.0556 \\) standard deviations above the mean, and \\( 1-\\Phi(1.0556)=0.1456 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(X \\ge 100) \\approx 0.1456 \\)",
      canonicalAnswer: "0.1456",
    },
  },
  {
    id: "y2na-037",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 37",
    difficulty: "Standard",
    questionText: "In a large town, \\( 55\\% \\) of households own a pet. A random sample of \\( 100 \\) households is taken and the number that own a pet, \\( X \\), is recorded, where \\( X \\sim B(100, 0.55) \\). Using a suitable Normal approximation, estimate the probability that more than \\( 60 \\) households own a pet.",
    questionMafs: `<Mafs viewBox={{ x: [35.1004, 74.8996], y: [-0.0128, 0.0946] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 4.9749 }} yAxis={{ lines: false }} />
  <Polygon points={[[60.5,0.0435],[60.8,0.0406],[61.1,0.0378],[61.4,0.0351],[61.7,0.0324],[62,0.0298],[62.3,0.0273],[62.5999,0.025],[62.8999,0.0227],[63.1999,0.0206],[63.4999,0.0186],[63.7999,0.0168],[64.0999,0.0151],[64.3999,0.0135],[64.6999,0.012],[64.9999,0.0106],[65.2999,0.0094],[65.5999,0.0083],[65.8999,0.0073],[66.1998,0.0064],[66.4998,0.0055],[66.7998,0.0048],[67.0998,0.0042],[67.3998,0.0036],[67.6998,0.0031],[67.9998,0.0026],[68.2998,0.0023],[68.5998,0.0019],[68.8998,0.0016],[69.1998,0.0014],[69.4998,0.0011],[69.7997,0.001],[70.0997,0.0008],[70.3997,0.0007],[70.6997,0.0006],[70.9997,0.0005],[71.2997,0.0004],[71.5997,0.0003],[71.8997,0.0003],[72.1997,0.0002],[72.4997,0.0002],[72.7997,0.0001],[73.0997,0.0001],[73.3996,0.0001],[73.6996,0.0001],[73.9996,0.0001],[74.2996,0],[74.5996,0],[74.8996,0],[74.8996,0],[60.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-55)**2)/(2*4.9749*4.9749))/(4.9749*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[55, 0]} point2={[55, 0.0802]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[60.5, 0]} point2={[60.5, 0.0435]} color="var(--mafs-fg-orange)" />
  <Text x={55} y={0.088} attach="n">μ = 55</Text>
  <Text x={60.5} y={-0.0064} attach="s">60.5</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "more than"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the parameters of the Normal approximation \\( W \\sim N(np,\\,np(1-p)) \\).", workingLatex: "np = 100 \\times 0.55 = 55, \\quad np(1-p) = 100 \\times 0.55 \\times 0.45 = 24.75", explanation: "For large \\( n \\) and \\( p \\) near \\( 0.5 \\), \\( B(n,p) \\) is approximated by \\( N(np,\\,np(1-p)) \\)." },
        { stepNumber: 2, description: "Write down the approximating distribution.", workingLatex: "W \\sim N(55,\\,24.75), \\quad \\sigma = \\sqrt{24.75} = 4.9749", explanation: "The standard deviation is \\( \\sqrt{24.75} = 4.9749 \\) to 4 d.p." },
        { stepNumber: 3, description: "Apply the continuity correction. \"More than \\( 60 \\)\" means \\( X \\ge 61 \\), so use \\( W > 60.5 \\).", workingLatex: "P(X > 60) = P(X \\ge 61) \\approx P(W > 60.5)", explanation: "The discrete event \\( X \\ge 61 \\) maps to the continuous region above \\( 60.5 \\)." },
        { stepNumber: 4, description: "Standardise and evaluate.", workingLatex: "P\\!\\left(Z > \\dfrac{60.5 - 55}{4.9749}\\right) = P(Z > 1.1056) = 0.1345", explanation: "So the probability that more than \\( 60 \\) households own a pet is \\( 0.1345 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(W > 60.5) = 0.1345 \\)",
      canonicalAnswer: "0.1345",
    },
  },
  {
    id: "y2na-038",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 38",
    difficulty: "Standard",
    questionText: "A biased coin shows heads with probability \\( 0.4 \\). The coin is tossed \\( 120 \\) times and the number of heads, \\( X \\), is recorded, where \\( X \\sim B(120, 0.4) \\). Using a suitable Normal approximation, estimate the probability of obtaining fewer than \\( 40 \\) heads.",
    questionMafs: `<Mafs viewBox={{ x: [26.5336, 69.4664], y: [-0.0119, 0.0877] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 5.3666 }} yAxis={{ lines: false }} />
  <Polygon points={[[26.5336,0],[26.8037,0],[27.0739,0],[27.344,0],[27.6141,0.0001],[27.8843,0.0001],[28.1544,0.0001],[28.4245,0.0001],[28.6947,0.0001],[28.9648,0.0001],[29.2349,0.0002],[29.5051,0.0002],[29.7752,0.0002],[30.0453,0.0003],[30.3155,0.0003],[30.5856,0.0004],[30.8557,0.0005],[31.1259,0.0005],[31.396,0.0006],[31.6661,0.0007],[31.9363,0.0008],[32.2064,0.001],[32.4765,0.0011],[32.7467,0.0013],[33.0168,0.0015],[33.2869,0.0017],[33.5571,0.002],[33.8272,0.0023],[34.0973,0.0026],[34.3675,0.003],[34.6376,0.0033],[34.9077,0.0038],[35.1779,0.0043],[35.448,0.0048],[35.7181,0.0054],[35.9883,0.0061],[36.2584,0.0068],[36.5285,0.0076],[36.7987,0.0084],[37.0688,0.0093],[37.3389,0.0103],[37.6091,0.0114],[37.8792,0.0126],[38.1493,0.0138],[38.4195,0.0151],[38.6896,0.0165],[38.9597,0.018],[39.2299,0.0196],[39.5,0.0212],[39.5,0],[26.5336,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-48)**2)/(2*5.3666*5.3666))/(5.3666*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[48, 0]} point2={[48, 0.0743]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[39.5, 0]} point2={[39.5, 0.0212]} color="var(--mafs-fg-orange)" />
  <Text x={48} y={0.0816} attach="n">μ = 48</Text>
  <Text x={39.5} y={-0.0059} attach="s">39.5</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "fewer than"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the parameters of the Normal approximation.", workingLatex: "np = 120 \\times 0.4 = 48, \\quad np(1-p) = 120 \\times 0.4 \\times 0.6 = 28.8", explanation: "\\( B(120,0.4) \\) is approximated by \\( N(48,\\,28.8) \\)." },
        { stepNumber: 2, description: "Write down the approximating distribution.", workingLatex: "W \\sim N(48,\\,28.8), \\quad \\sigma = \\sqrt{28.8} = 5.3666", explanation: "The standard deviation is \\( \\sqrt{28.8} = 5.3666 \\) to 4 d.p." },
        { stepNumber: 3, description: "Apply the continuity correction. \"Fewer than \\( 40 \\)\" means \\( X \\le 39 \\), so use \\( W < 39.5 \\).", workingLatex: "P(X < 40) = P(X \\le 39) \\approx P(W < 39.5)", explanation: "The discrete event \\( X \\le 39 \\) maps to the continuous region below \\( 39.5 \\)." },
        { stepNumber: 4, description: "Standardise and evaluate.", workingLatex: "P\\!\\left(Z < \\dfrac{39.5 - 48}{5.3666}\\right) = P(Z < -1.5839) = 0.0566", explanation: "So the probability of fewer than \\( 40 \\) heads is \\( 0.0566 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(W < 39.5) = 0.0566 \\)",
      canonicalAnswer: "0.0566",
    },
  },
  {
    id: "y2na-039",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 39",
    difficulty: "Standard",
    questionText: "In a manufacturing process, each item is independently classified as type A with probability \\( 0.5 \\). In a batch of \\( 200 \\) items the number of type A items, \\( X \\), follows \\( X \\sim B(200, 0.5) \\). Using a suitable Normal approximation, estimate the probability that the number of type A items is between \\( 95 \\) and \\( 110 \\) inclusive.",
    questionMafs: `<Mafs viewBox={{ x: [71.7156, 128.2844], y: [-0.009, 0.0666] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 7.0711 }} yAxis={{ lines: false }} />
  <Polygon points={[[94.5,0.0417],[94.8333,0.0432],[95.1667,0.0447],[95.5,0.0461],[95.8333,0.0474],[96.1667,0.0487],[96.5,0.0499],[96.8333,0.051],[97.1667,0.0521],[97.5,0.053],[97.8333,0.0538],[98.1667,0.0546],[98.5,0.0552],[98.8333,0.0557],[99.1667,0.056],[99.5,0.0563],[99.8333,0.0564],[100.1667,0.0564],[100.5,0.0563],[100.8333,0.056],[101.1667,0.0557],[101.5,0.0552],[101.8333,0.0546],[102.1667,0.0538],[102.5,0.053],[102.8333,0.0521],[103.1667,0.051],[103.5,0.0499],[103.8333,0.0487],[104.1667,0.0474],[104.5,0.0461],[104.8333,0.0447],[105.1667,0.0432],[105.5,0.0417],[105.8333,0.0401],[106.1667,0.0386],[106.5,0.037],[106.8333,0.0354],[107.1667,0.0338],[107.5,0.0321],[107.8333,0.0305],[108.1667,0.029],[108.5,0.0274],[108.8333,0.0259],[109.1667,0.0243],[109.5,0.0229],[109.8333,0.0215],[110.1667,0.0201],[110.5,0.0187],[110.5,0],[94.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-100)**2)/(2*7.0711*7.0711))/(7.0711*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[100, 0]} point2={[100, 0.0564]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[94.5, 0]} point2={[94.5, 0.0417]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[110.5, 0]} point2={[110.5, 0.0187]} color="var(--mafs-fg-orange)" />
  <Text x={100} y={0.0619} attach="n">μ = 100</Text>
  <Text x={94.5} y={-0.0045} attach="s">94.5</Text>
  <Text x={110.5} y={-0.0045} attach="s">110.5</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "between"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the parameters of the Normal approximation.", workingLatex: "np = 200 \\times 0.5 = 100, \\quad np(1-p) = 200 \\times 0.5 \\times 0.5 = 50", explanation: "\\( B(200,0.5) \\) is approximated by \\( N(100,\\,50) \\)." },
        { stepNumber: 2, description: "Write down the approximating distribution.", workingLatex: "W \\sim N(100,\\,50), \\quad \\sigma = \\sqrt{50} = 7.0711", explanation: "The standard deviation is \\( \\sqrt{50} = 7.0711 \\) to 4 d.p." },
        { stepNumber: 3, description: "Apply the continuity correction. \"Between \\( 95 \\) and \\( 110 \\) inclusive\" means \\( 95 \\le X \\le 110 \\), so use \\( 94.5 < W < 110.5 \\).", workingLatex: "P(95 \\le X \\le 110) \\approx P(94.5 < W < 110.5)", explanation: "Each integer endpoint is widened outward by \\( 0.5 \\) because both ends are included." },
        { stepNumber: 4, description: "Standardise and evaluate.", workingLatex: "P\\!\\left(\\dfrac{94.5-100}{7.0711} < Z < \\dfrac{110.5-100}{7.0711}\\right) = P(-0.7778 < Z < 1.4849) = 0.7129", explanation: "So the probability that between \\( 95 \\) and \\( 110 \\) items inclusive are type A is \\( 0.7129 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(94.5 < W < 110.5) = 0.7129 \\)",
      canonicalAnswer: "0.7129",
    },
  },
  {
    id: "y2na-040",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 40",
    difficulty: "Standard",
    questionText: "On a commuter route, each train is late with probability \\( 0.45 \\), independently of other trains. Over a period of \\( 80 \\) trains, let \\( X \\) be the number that are late, so \\( X \\sim B(80, 0.45) \\). Find the expected number of late trains, and then use a suitable Normal approximation to estimate the probability that at least \\( 40 \\) trains are late.",
    questionMafs: `<Mafs viewBox={{ x: [18.2012, 53.7988], y: [-0.0143, 0.1058] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 4.4497 }} yAxis={{ lines: false }} />
  <Polygon points={[[39.5,0.0658],[39.7979,0.0623],[40.0958,0.0587],[40.3937,0.0551],[40.6916,0.0514],[40.9895,0.0478],[41.2874,0.0443],[41.5852,0.0408],[41.8831,0.0374],[42.181,0.0342],[42.4789,0.0311],[42.7768,0.0281],[43.0747,0.0253],[43.3726,0.0227],[43.6705,0.0203],[43.9684,0.018],[44.2663,0.016],[44.5642,0.0141],[44.862,0.0123],[45.1599,0.0108],[45.4578,0.0094],[45.7557,0.0081],[46.0536,0.007],[46.3515,0.006],[46.6494,0.0051],[46.9473,0.0043],[47.2452,0.0037],[47.5431,0.0031],[47.841,0.0026],[48.1389,0.0022],[48.4368,0.0018],[48.7346,0.0015],[49.0325,0.0012],[49.3304,0.001],[49.6283,0.0008],[49.9262,0.0007],[50.2241,0.0005],[50.522,0.0004],[50.8199,0.0003],[51.1178,0.0003],[51.4157,0.0002],[51.7136,0.0002],[52.0115,0.0001],[52.3093,0.0001],[52.6072,0.0001],[52.9051,0.0001],[53.203,0.0001],[53.5009,0],[53.7988,0],[53.7988,0],[39.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-36)**2)/(2*4.4497*4.4497))/(4.4497*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[36, 0]} point2={[36, 0.0897]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[39.5, 0]} point2={[39.5, 0.0658]} color="var(--mafs-fg-orange)" />
  <Text x={36} y={0.0984} attach="n">μ = 36</Text>
  <Text x={39.5} y={-0.0072} attach="s">39.5</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "expected value", "continuity correction", "at least"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the expected number of late trains using \\( E(X) = np \\).", workingLatex: "E(X) = np = 80 \\times 0.45 = 36", explanation: "The expected number of late trains is \\( 36 \\)." },
        { stepNumber: 2, description: "State the Normal approximation parameters.", workingLatex: "W \\sim N(36,\\,80 \\times 0.45 \\times 0.55) = N(36,\\,19.8), \\quad \\sigma = \\sqrt{19.8} = 4.4497", explanation: "The variance is \\( np(1-p) = 19.8 \\), so \\( \\sigma = 4.4497 \\) to 4 d.p." },
        { stepNumber: 3, description: "Apply the continuity correction. \"At least \\( 40 \\)\" means \\( X \\ge 40 \\), so use \\( W > 39.5 \\).", workingLatex: "P(X \\ge 40) \\approx P(W > 39.5)", explanation: "The discrete event \\( X \\ge 40 \\) maps to the continuous region above \\( 39.5 \\)." },
        { stepNumber: 4, description: "Standardise and evaluate.", workingLatex: "P\\!\\left(Z > \\dfrac{39.5 - 36}{4.4497}\\right) = P(Z > 0.7866) = 0.2158", explanation: "So the expected number is \\( 36 \\) and the probability of at least \\( 40 \\) late trains is \\( 0.2158 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(W > 39.5) = 0.2158 \\)",
      canonicalAnswer: "0.2158",
    },
  },
  {
    id: "y2na-041",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 41",
    difficulty: "Standard",
    questionText: "A fair spinner lands on red with probability \\( 0.5 \\). It is spun \\( 50 \\) times and the number of reds, \\( X \\), follows \\( X \\sim B(50, 0.5) \\). First check that a Normal approximation is appropriate, then use it to estimate the probability that at most \\( 20 \\) reds are obtained.",
    questionMafs: `<Mafs viewBox={{ x: [10.858, 39.142], y: [-0.0181, 0.1332] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 3.5355 }} yAxis={{ lines: false }} />
  <Polygon points={[[10.858,0],[11.0589,0],[11.2598,0.0001],[11.4606,0.0001],[11.6615,0.0001],[11.8624,0.0001],[12.0633,0.0001],[12.2641,0.0002],[12.465,0.0002],[12.6659,0.0003],[12.8668,0.0003],[13.0676,0.0004],[13.2685,0.0005],[13.4694,0.0006],[13.6703,0.0007],[13.8711,0.0008],[14.072,0.001],[14.2729,0.0011],[14.4738,0.0013],[14.6746,0.0016],[14.8755,0.0019],[15.0764,0.0022],[15.2773,0.0026],[15.4781,0.003],[15.679,0.0035],[15.8799,0.0041],[16.0808,0.0047],[16.2816,0.0054],[16.4825,0.0062],[16.6834,0.0071],[16.8843,0.0081],[17.0851,0.0092],[17.286,0.0104],[17.4869,0.0118],[17.6878,0.0133],[17.8886,0.0149],[18.0895,0.0167],[18.2904,0.0186],[18.4913,0.0207],[18.6921,0.023],[18.893,0.0254],[19.0939,0.028],[19.2948,0.0307],[19.4956,0.0336],[19.6965,0.0366],[19.8974,0.0398],[20.0983,0.0432],[20.2991,0.0466],[20.5,0.0502],[20.5,0],[10.858,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-25)**2)/(2*3.5355*3.5355))/(3.5355*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[25, 0]} point2={[25, 0.1128]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[20.5, 0]} point2={[20.5, 0.0502]} color="var(--mafs-fg-orange)" />
  <Text x={25} y={0.1238} attach="n">μ = 25</Text>
  <Text x={20.5} y={-0.009} attach="s">20.5</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "validity condition", "continuity correction", "at most"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Check the validity condition: the approximation is reasonable when \\( np > 5 \\) and \\( n(1-p) > 5 \\).", workingLatex: "np = 50 \\times 0.5 = 25 > 5, \\quad n(1-p) = 50 \\times 0.5 = 25 > 5", explanation: "Both \\( np \\) and \\( n(1-p) \\) exceed \\( 5 \\) and \\( p = 0.5 \\) is symmetric, so a Normal approximation is appropriate." },
        { stepNumber: 2, description: "State the approximating distribution.", workingLatex: "W \\sim N(25,\\,12.5), \\quad \\sigma = \\sqrt{12.5} = 3.5355", explanation: "The variance is \\( np(1-p) = 12.5 \\), giving \\( \\sigma = 3.5355 \\) to 4 d.p." },
        { stepNumber: 3, description: "Apply the continuity correction. \"At most \\( 20 \\)\" means \\( X \\le 20 \\), so use \\( W < 20.5 \\).", workingLatex: "P(X \\le 20) \\approx P(W < 20.5)", explanation: "The discrete event \\( X \\le 20 \\) maps to the continuous region below \\( 20.5 \\)." },
        { stepNumber: 4, description: "Standardise and evaluate.", workingLatex: "P\\!\\left(Z < \\dfrac{20.5 - 25}{3.5355}\\right) = P(Z < -1.2728) = 0.1015", explanation: "So, the approximation being valid, the probability of at most \\( 20 \\) reds is \\( 0.1015 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(W < 20.5) = 0.1015 \\)",
      canonicalAnswer: "0.1015",
    },
  },
  {
    id: "y2na-042",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 42",
    difficulty: "Standard",
    questionText: "The random variable \\( X \\sim B(40, 0.5) \\). The exact value of \\( P(X \\le 15) \\) is \\( 0.0769 \\) to 4 decimal places. Use a Normal approximation with a continuity correction to estimate \\( P(X \\le 15) \\), and comment on how close your estimate is to the exact value.",
    questionMafs: `<Mafs viewBox={{ x: [7.3508, 32.6492], y: [-0.0202, 0.1489] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 3.1623 }} yAxis={{ lines: false }} />
  <Polygon points={[[7.3508,0],[7.5206,0.0001],[7.6904,0.0001],[7.8601,0.0001],[8.0299,0.0001],[8.1997,0.0001],[8.3695,0.0001],[8.5392,0.0002],[8.709,0.0002],[8.8788,0.0003],[9.0485,0.0003],[9.2183,0.0004],[9.3881,0.0005],[9.5579,0.0005],[9.7277,0.0006],[9.8974,0.0008],[10.0672,0.0009],[10.237,0.0011],[10.4068,0.0013],[10.5765,0.0015],[10.7463,0.0017],[10.9161,0.002],[11.0858,0.0024],[11.2556,0.0028],[11.4254,0.0032],[11.5952,0.0037],[11.7649,0.0042],[11.9347,0.0049],[12.1045,0.0056],[12.2743,0.0064],[12.4441,0.0073],[12.6138,0.0082],[12.7836,0.0093],[12.9534,0.0105],[13.1232,0.0119],[13.2929,0.0133],[13.4627,0.0149],[13.6325,0.0166],[13.8023,0.0185],[13.972,0.0205],[14.1418,0.0227],[14.3116,0.025],[14.4814,0.0275],[14.6511,0.0302],[14.8209,0.033],[14.9907,0.036],[15.1605,0.0391],[15.3302,0.0424],[15.5,0.0458],[15.5,0],[7.3508,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-20)**2)/(2*3.1623*3.1623))/(3.1623*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[20, 0]} point2={[20, 0.1262]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[15.5, 0]} point2={[15.5, 0.0458]} color="var(--mafs-fg-orange)" />
  <Text x={20} y={0.1384} attach="n">μ = 20</Text>
  <Text x={15.5} y={-0.0101} attach="s">15.5</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "comparison with exact"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the approximating distribution \\( W \\sim N(np,\\,np(1-p)) \\).", workingLatex: "W \\sim N(20,\\,10), \\quad \\sigma = \\sqrt{10} = 3.1623", explanation: "\\( np = 20 \\) and \\( np(1-p) = 10 \\), so \\( \\sigma = 3.1623 \\) to 4 d.p." },
        { stepNumber: 2, description: "Apply the continuity correction. \"\\( X \\le 15 \\)\" maps to \\( W < 15.5 \\).", workingLatex: "P(X \\le 15) \\approx P(W < 15.5)", explanation: "The discrete event \\( X \\le 15 \\) maps to the continuous region below \\( 15.5 \\)." },
        { stepNumber: 3, description: "Standardise and evaluate the approximation.", workingLatex: "P\\!\\left(Z < \\dfrac{15.5 - 20}{3.1623}\\right) = P(Z < -1.4230) = 0.0774", explanation: "The Normal estimate is \\( 0.0774 \\) to 4 d.p." },
        { stepNumber: 4, description: "Compare with the exact value.", workingLatex: "0.0774 - 0.0769 = 0.0005", explanation: "The approximation \\( 0.0774 \\) differs from the exact \\( 0.0769 \\) by only \\( 0.0005 \\), so it is a very good estimate." }
      ],
      finalAnswer: "\\( P(W < 15.5) = 0.0774 \\)",
      canonicalAnswer: "0.0774",
    },
  },
  {
    id: "y2na-043",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 43",
    difficulty: "Standard",
    questionText: "A researcher models the number of voters in a sample of \\( 150 \\) who support a particular policy as \\( X \\sim B(150, 0.48) \\), and approximates this distribution by \\( N(72, 37.44) \\). Explain why a Normal approximation to this binomial distribution is reasonable in this case.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "conditions", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall when the Normal approximation to the binomial works well.", workingLatex: "n \\text{ large}, \\quad p \\text{ close to } 0.5", explanation: "The approximation \\( B(n,p) \\approx N(np,\\,np(1-p)) \\) is good when \\( n \\) is large and \\( p \\) is near \\( 0.5 \\), so that the binomial is roughly symmetric." },
        { stepNumber: 2, description: "Check these conditions for the given values.", workingLatex: "n = 150 \\ (\\text{large}), \\quad p = 0.48 \\approx 0.5", explanation: "Here \\( n = 150 \\) is large and \\( p = 0.48 \\) is very close to \\( 0.5 \\)." },
        { stepNumber: 3, description: "Confirm the distribution is approximately symmetric.", workingLatex: "np = 72 > 5, \\quad n(1-p) = 78 > 5", explanation: "Both \\( np \\) and \\( n(1-p) \\) comfortably exceed \\( 5 \\), so the binomial is nearly symmetric and bell-shaped. Hence a Normal approximation is reasonable." }
      ],
      finalAnswer: "\\( n = 150 \\text{ is large and } p = 0.48 \\approx 0.5,\\ \\text{so } B(150,0.48) \\text{ is approximately symmetric and well modelled by a Normal distribution.} \\)",
    },
  },
  {
    id: "y2na-044",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 44",
    difficulty: "Standard",
    questionText: "An online retailer finds that \\( 52\\% \\) of customers opt in to marketing emails. In a random sample of \\( 300 \\) customers the number who opt in, \\( X \\), follows \\( X \\sim B(300, 0.52) \\). Using a suitable Normal approximation, estimate the probability that more than \\( 170 \\) customers opt in.",
    questionMafs: `<Mafs viewBox={{ x: [121.3868, 190.6132], y: [-0.0074, 0.0544] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 8.6533 }} yAxis={{ lines: false }} />
  <Polygon points={[[170.5,0.0113],[170.919,0.0104],[171.3381,0.0096],[171.7571,0.0088],[172.1761,0.008],[172.5951,0.0073],[173.0142,0.0067],[173.4332,0.0061],[173.8522,0.0055],[174.2712,0.005],[174.6903,0.0045],[175.1093,0.004],[175.5283,0.0036],[175.9473,0.0032],[176.3664,0.0029],[176.7854,0.0026],[177.2044,0.0023],[177.6234,0.002],[178.0425,0.0018],[178.4615,0.0016],[178.8805,0.0014],[179.2995,0.0012],[179.7186,0.0011],[180.1376,0.0009],[180.5566,0.0008],[180.9756,0.0007],[181.3947,0.0006],[181.8137,0.0005],[182.2327,0.0005],[182.6517,0.0004],[183.0708,0.0003],[183.4898,0.0003],[183.9088,0.0003],[184.3278,0.0002],[184.7469,0.0002],[185.1659,0.0002],[185.5849,0.0001],[186.0039,0.0001],[186.423,0.0001],[186.842,0.0001],[187.261,0.0001],[187.68,0.0001],[188.0991,0],[188.5181,0],[188.9371,0],[189.3561,0],[189.7752,0],[190.1942,0],[190.6132,0],[190.6132,0],[170.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-156)**2)/(2*8.6533*8.6533))/(8.6533*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[156, 0]} point2={[156, 0.0461]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[170.5, 0]} point2={[170.5, 0.0113]} color="var(--mafs-fg-orange)" />
  <Text x={156} y={0.0506} attach="n">μ = 156</Text>
  <Text x={170.5} y={-0.0037} attach="s">170.5</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "more than"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the parameters of the Normal approximation.", workingLatex: "np = 300 \\times 0.52 = 156, \\quad np(1-p) = 300 \\times 0.52 \\times 0.48 = 74.88", explanation: "\\( B(300,0.52) \\) is approximated by \\( N(156,\\,74.88) \\)." },
        { stepNumber: 2, description: "Write down the approximating distribution.", workingLatex: "W \\sim N(156,\\,74.88), \\quad \\sigma = \\sqrt{74.88} = 8.6533", explanation: "The standard deviation is \\( \\sqrt{74.88} = 8.6533 \\) to 4 d.p." },
        { stepNumber: 3, description: "Apply the continuity correction. \"More than \\( 170 \\)\" means \\( X \\ge 171 \\), so use \\( W > 170.5 \\).", workingLatex: "P(X > 170) = P(X \\ge 171) \\approx P(W > 170.5)", explanation: "The discrete event \\( X \\ge 171 \\) maps to the continuous region above \\( 170.5 \\)." },
        { stepNumber: 4, description: "Standardise and evaluate.", workingLatex: "P\\!\\left(Z > \\dfrac{170.5 - 156}{8.6533}\\right) = P(Z > 1.6757) = 0.0469", explanation: "So the probability that more than \\( 170 \\) customers opt in is \\( 0.0469 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(W > 170.5) = 0.0469 \\)",
      canonicalAnswer: "0.0469",
    },
  },
  {
    id: "y2na-045",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 45",
    difficulty: "Standard",
    questionText: "A seed supplier states that each seed germinates with probability \\( 0.6 \\), independently. A tray contains \\( 90 \\) seeds and the number that germinate, \\( X \\), follows \\( X \\sim B(90, 0.6) \\). Using a suitable Normal approximation, estimate the probability that fewer than \\( 50 \\) seeds germinate.",
    questionMafs: `<Mafs viewBox={{ x: [35.4096, 72.5904], y: [-0.0137, 0.1013] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 4.6476 }} yAxis={{ lines: false }} />
  <Polygon points={[[35.4096,0],[35.7032,0],[35.9967,0],[36.2903,0.0001],[36.5838,0.0001],[36.8774,0.0001],[37.1709,0.0001],[37.4645,0.0002],[37.758,0.0002],[38.0516,0.0002],[38.3451,0.0003],[38.6387,0.0004],[38.9322,0.0004],[39.2258,0.0005],[39.5193,0.0007],[39.8129,0.0008],[40.1064,0.001],[40.3999,0.0012],[40.6935,0.0014],[40.987,0.0017],[41.2806,0.002],[41.5741,0.0024],[41.8677,0.0028],[42.1612,0.0033],[42.4548,0.0039],[42.7484,0.0046],[43.0419,0.0053],[43.3355,0.0062],[43.629,0.0071],[43.9226,0.0082],[44.2161,0.0094],[44.5097,0.0107],[44.8032,0.0121],[45.0968,0.0137],[45.3903,0.0154],[45.6839,0.0173],[45.9774,0.0193],[46.271,0.0215],[46.5645,0.0239],[46.8581,0.0264],[47.1516,0.029],[47.4452,0.0317],[47.7387,0.0346],[48.0323,0.0376],[48.3258,0.0407],[48.6194,0.0439],[48.9129,0.0472],[49.2064,0.0504],[49.5,0.0537],[49.5,0],[35.4096,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-54)**2)/(2*4.6476*4.6476))/(4.6476*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[54, 0]} point2={[54, 0.0858]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[49.5, 0]} point2={[49.5, 0.0537]} color="var(--mafs-fg-orange)" />
  <Text x={54} y={0.0942} attach="n">μ = 54</Text>
  <Text x={49.5} y={-0.0069} attach="s">49.5</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "fewer than"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the parameters of the Normal approximation.", workingLatex: "np = 90 \\times 0.6 = 54, \\quad np(1-p) = 90 \\times 0.6 \\times 0.4 = 21.6", explanation: "\\( B(90,0.6) \\) is approximated by \\( N(54,\\,21.6) \\)." },
        { stepNumber: 2, description: "Write down the approximating distribution.", workingLatex: "W \\sim N(54,\\,21.6), \\quad \\sigma = \\sqrt{21.6} = 4.6476", explanation: "The standard deviation is \\( \\sqrt{21.6} = 4.6476 \\) to 4 d.p." },
        { stepNumber: 3, description: "Apply the continuity correction. \"Fewer than \\( 50 \\)\" means \\( X \\le 49 \\), so use \\( W < 49.5 \\).", workingLatex: "P(X < 50) = P(X \\le 49) \\approx P(W < 49.5)", explanation: "The discrete event \\( X \\le 49 \\) maps to the continuous region below \\( 49.5 \\)." },
        { stepNumber: 4, description: "Standardise and evaluate.", workingLatex: "P\\!\\left(Z < \\dfrac{49.5 - 54}{4.6476}\\right) = P(Z < -0.9682) = 0.1665", explanation: "So the probability that fewer than \\( 50 \\) seeds germinate is \\( 0.1665 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(W < 49.5) = 0.1665 \\)",
      canonicalAnswer: "0.1665",
    },
  },
  {
    id: "y2na-046",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 46",
    difficulty: "Standard",
    questionText: "In a survey, each respondent independently chooses option X with probability \\( 0.44 \\). For a sample of \\( 250 \\) respondents the number choosing option X, \\( X \\), follows \\( X \\sim B(250, 0.44) \\). Using a suitable Normal approximation, estimate the probability that strictly between \\( 100 \\) and \\( 120 \\) respondents choose option X.",
    questionMafs: `<Mafs viewBox={{ x: [78.6056, 141.3944], y: [-0.0081, 0.06] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 7.8486 }} yAxis={{ lines: false }} />
  <Polygon points={[[100.5,0.0244],[100.8958,0.0259],[101.2917,0.0275],[101.6875,0.029],[102.0833,0.0306],[102.4792,0.0321],[102.875,0.0337],[103.2708,0.0352],[103.6667,0.0367],[104.0625,0.0382],[104.4583,0.0396],[104.8542,0.041],[105.25,0.0423],[105.6458,0.0436],[106.0417,0.0448],[106.4375,0.0459],[106.8333,0.0469],[107.2292,0.0478],[107.625,0.0486],[108.0208,0.0492],[108.4167,0.0498],[108.8125,0.0503],[109.2083,0.0506],[109.6042,0.0508],[110,0.0508],[110.3958,0.0508],[110.7917,0.0506],[111.1875,0.0503],[111.5833,0.0498],[111.9792,0.0492],[112.375,0.0486],[112.7708,0.0478],[113.1667,0.0469],[113.5625,0.0459],[113.9583,0.0448],[114.3542,0.0436],[114.75,0.0423],[115.1458,0.041],[115.5417,0.0396],[115.9375,0.0382],[116.3333,0.0367],[116.7292,0.0352],[117.125,0.0337],[117.5208,0.0321],[117.9167,0.0306],[118.3125,0.029],[118.7083,0.0275],[119.1042,0.0259],[119.5,0.0244],[119.5,0],[100.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-110)**2)/(2*7.8486*7.8486))/(7.8486*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[110, 0]} point2={[110, 0.0508]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[100.5, 0]} point2={[100.5, 0.0244]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[119.5, 0]} point2={[119.5, 0.0244]} color="var(--mafs-fg-orange)" />
  <Text x={110} y={0.0558} attach="n">μ = 110</Text>
  <Text x={100.5} y={-0.0041} attach="s">100.5</Text>
  <Text x={119.5} y={-0.0041} attach="s">119.5</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "between"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the parameters of the Normal approximation.", workingLatex: "np = 250 \\times 0.44 = 110, \\quad np(1-p) = 250 \\times 0.44 \\times 0.56 = 61.6", explanation: "\\( B(250,0.44) \\) is approximated by \\( N(110,\\,61.6) \\)." },
        { stepNumber: 2, description: "Write down the approximating distribution.", workingLatex: "W \\sim N(110,\\,61.6), \\quad \\sigma = \\sqrt{61.6} = 7.8486", explanation: "The standard deviation is \\( \\sqrt{61.6} = 7.8486 \\) to 4 d.p." },
        { stepNumber: 3, description: "Apply the continuity correction. \"Strictly between \\( 100 \\) and \\( 120 \\)\" means \\( 101 \\le X \\le 119 \\), so use \\( 100.5 < W < 119.5 \\).", workingLatex: "P(100 < X < 120) = P(101 \\le X \\le 119) \\approx P(100.5 < W < 119.5)", explanation: "Because both \\( 100 \\) and \\( 120 \\) are excluded, the included integers are \\( 101 \\) to \\( 119 \\), giving the interval \\( (100.5, 119.5) \\)." },
        { stepNumber: 4, description: "Standardise and evaluate.", workingLatex: "P\\!\\left(\\dfrac{100.5-110}{7.8486} < Z < \\dfrac{119.5-110}{7.8486}\\right) = P(-1.2104 < Z < 1.2104) = 0.7739", explanation: "So the probability that strictly between \\( 100 \\) and \\( 120 \\) respondents choose option X is \\( 0.7739 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(100.5 < W < 119.5) = 0.7739 \\)",
      canonicalAnswer: "0.7739",
    },
  },
  {
    id: "y2na-047",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 47",
    difficulty: "Standard",
    questionText: "A call centre finds that \\( 35\\% \\) of calls result in a sale. On a busy day there are \\( 160 \\) independent calls, and the number resulting in a sale, \\( X \\), follows \\( X \\sim B(160, 0.35) \\). Find the expected number of sales, and then use a suitable Normal approximation to estimate the probability of at least \\( 70 \\) sales.",
    questionMafs: `<Mafs viewBox={{ x: [31.8672, 80.1328], y: [-0.0106, 0.078] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 6.0332 }} yAxis={{ lines: false }} />
  <Polygon points={[[69.5,0.0054],[69.7215,0.005],[69.943,0.0046],[70.1646,0.0042],[70.3861,0.0039],[70.6076,0.0035],[70.8291,0.0032],[71.0506,0.0029],[71.2721,0.0027],[71.4937,0.0024],[71.7152,0.0022],[71.9367,0.002],[72.1582,0.0018],[72.3797,0.0017],[72.6012,0.0015],[72.8228,0.0014],[73.0443,0.0012],[73.2658,0.0011],[73.4873,0.001],[73.7088,0.0009],[73.9303,0.0008],[74.1519,0.0007],[74.3734,0.0006],[74.5949,0.0006],[74.8164,0.0005],[75.0379,0.0005],[75.2594,0.0004],[75.481,0.0004],[75.7025,0.0003],[75.924,0.0003],[76.1455,0.0003],[76.367,0.0002],[76.5885,0.0002],[76.8101,0.0002],[77.0316,0.0002],[77.2531,0.0001],[77.4746,0.0001],[77.6961,0.0001],[77.9176,0.0001],[78.1392,0.0001],[78.3607,0.0001],[78.5822,0.0001],[78.8037,0.0001],[79.0252,0],[79.2467,0],[79.4683,0],[79.6898,0],[79.9113,0],[80.1328,0],[80.1328,0],[69.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-56)**2)/(2*6.0332*6.0332))/(6.0332*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[56, 0]} point2={[56, 0.0661]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[69.5, 0]} point2={[69.5, 0.0054]} color="var(--mafs-fg-orange)" />
  <Text x={56} y={0.0726} attach="n">μ = 56</Text>
  <Text x={69.5} y={-0.0053} attach="s">69.5</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "expected value", "continuity correction", "at least"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the expected number of sales using \\( E(X) = np \\).", workingLatex: "E(X) = np = 160 \\times 0.35 = 56", explanation: "The expected number of sales is \\( 56 \\)." },
        { stepNumber: 2, description: "State the Normal approximation parameters.", workingLatex: "W \\sim N(56,\\,160 \\times 0.35 \\times 0.65) = N(56,\\,36.4), \\quad \\sigma = \\sqrt{36.4} = 6.0332", explanation: "The variance is \\( np(1-p) = 36.4 \\), so \\( \\sigma = 6.0332 \\) to 4 d.p." },
        { stepNumber: 3, description: "Apply the continuity correction. \"At least \\( 70 \\)\" means \\( X \\ge 70 \\), so use \\( W > 69.5 \\).", workingLatex: "P(X \\ge 70) \\approx P(W > 69.5)", explanation: "The discrete event \\( X \\ge 70 \\) maps to the continuous region above \\( 69.5 \\)." },
        { stepNumber: 4, description: "Standardise and evaluate.", workingLatex: "P\\!\\left(Z > \\dfrac{69.5 - 56}{6.0332}\\right) = P(Z > 2.2376) = 0.0126", explanation: "So the expected number is \\( 56 \\) and the probability of at least \\( 70 \\) sales is \\( 0.0126 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(W > 69.5) = 0.0126 \\)",
      canonicalAnswer: "0.0126",
    },
  },
  {
    id: "y2na-048",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 48",
    difficulty: "Standard",
    questionText: "A test consists of \\( 400 \\) true/false questions and a candidate guesses every answer, so the number of correct answers \\( X \\) follows \\( X \\sim B(400, 0.5) \\). First check that a Normal approximation is appropriate, then use it to estimate the probability that the candidate gets at least \\( 210 \\) answers correct.",
    questionMafs: `<Mafs viewBox={{ x: [160, 240], y: [-0.0064, 0.0471] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 10 }} yAxis={{ lines: false }} />
  <Polygon points={[[209.5,0.0254],[210.1354,0.0239],[210.7708,0.0223],[211.4063,0.0208],[212.0417,0.0193],[212.6771,0.0179],[213.3125,0.0164],[213.9479,0.0151],[214.5833,0.0138],[215.2188,0.0125],[215.8542,0.0114],[216.4896,0.0102],[217.125,0.0092],[217.7604,0.0082],[218.3958,0.0073],[219.0313,0.0065],[219.6667,0.0058],[220.3021,0.0051],[220.9375,0.0045],[221.5729,0.0039],[222.2083,0.0034],[222.8438,0.0029],[223.4792,0.0025],[224.1146,0.0022],[224.75,0.0019],[225.3854,0.0016],[226.0208,0.0014],[226.6563,0.0011],[227.2917,0.001],[227.9271,0.0008],[228.5625,0.0007],[229.1979,0.0006],[229.8333,0.0005],[230.4688,0.0004],[231.1042,0.0003],[231.7396,0.0003],[232.375,0.0002],[233.0104,0.0002],[233.6458,0.0001],[234.2813,0.0001],[234.9167,0.0001],[235.5521,0.0001],[236.1875,0.0001],[236.8229,0],[237.4583,0],[238.0938,0],[238.7292,0],[239.3646,0],[240,0],[240,0],[209.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-200)**2)/(2*10*10))/(10*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[200, 0]} point2={[200, 0.0399]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[209.5, 0]} point2={[209.5, 0.0254]} color="var(--mafs-fg-orange)" />
  <Text x={200} y={0.0438} attach="n">μ = 200</Text>
  <Text x={209.5} y={-0.0032} attach="s">209.5</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "validity condition", "continuity correction", "at least"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Check the validity condition: \\( np > 5 \\) and \\( n(1-p) > 5 \\), with \\( p \\) near \\( 0.5 \\).", workingLatex: "np = 400 \\times 0.5 = 200 > 5, \\quad n(1-p) = 200 > 5", explanation: "Both \\( np \\) and \\( n(1-p) \\) are well above \\( 5 \\) and \\( p = 0.5 \\), so a Normal approximation is appropriate." },
        { stepNumber: 2, description: "State the approximating distribution.", workingLatex: "W \\sim N(200,\\,100), \\quad \\sigma = \\sqrt{100} = 10", explanation: "The variance is \\( np(1-p) = 100 \\), giving \\( \\sigma = 10 \\)." },
        { stepNumber: 3, description: "Apply the continuity correction. \"At least \\( 210 \\)\" means \\( X \\ge 210 \\), so use \\( W > 209.5 \\).", workingLatex: "P(X \\ge 210) \\approx P(W > 209.5)", explanation: "The discrete event \\( X \\ge 210 \\) maps to the continuous region above \\( 209.5 \\)." },
        { stepNumber: 4, description: "Standardise and evaluate.", workingLatex: "P\\!\\left(Z > \\dfrac{209.5 - 200}{10}\\right) = P(Z > 0.95) = 0.1711", explanation: "So, the approximation being valid, the probability of at least \\( 210 \\) correct answers is \\( 0.1711 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(W > 209.5) = 0.1711 \\)",
      canonicalAnswer: "0.1711",
    },
  },
  {
    id: "y2na-049",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 49",
    difficulty: "Standard",
    questionText: "The random variable \\( X \\sim B(60, 0.5) \\). The exact value of \\( P(X = 30) \\) is \\( 0.1026 \\) to 4 decimal places. Use a Normal approximation with a continuity correction to estimate \\( P(X = 30) \\), and comment on how close your estimate is to the exact value.",
    questionMafs: `<Mafs viewBox={{ x: [14.508, 45.492], y: [-0.0165, 0.1215] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 3.873 }} yAxis={{ lines: false }} />
  <Polygon points={[[29.5,0.1022],[29.5208,0.1022],[29.5417,0.1023],[29.5625,0.1024],[29.5833,0.1024],[29.6042,0.1025],[29.625,0.1025],[29.6458,0.1026],[29.6667,0.1026],[29.6875,0.1027],[29.7083,0.1027],[29.7292,0.1028],[29.75,0.1028],[29.7708,0.1028],[29.7917,0.1029],[29.8125,0.1029],[29.8333,0.1029],[29.8542,0.1029],[29.875,0.103],[29.8958,0.103],[29.9167,0.103],[29.9375,0.103],[29.9583,0.103],[29.9792,0.103],[30,0.103],[30.0208,0.103],[30.0417,0.103],[30.0625,0.103],[30.0833,0.103],[30.1042,0.103],[30.125,0.103],[30.1458,0.1029],[30.1667,0.1029],[30.1875,0.1029],[30.2083,0.1029],[30.2292,0.1028],[30.25,0.1028],[30.2708,0.1028],[30.2917,0.1027],[30.3125,0.1027],[30.3333,0.1026],[30.3542,0.1026],[30.375,0.1025],[30.3958,0.1025],[30.4167,0.1024],[30.4375,0.1024],[30.4583,0.1023],[30.4792,0.1022],[30.5,0.1022],[30.5,0],[29.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-30)**2)/(2*3.873*3.873))/(3.873*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[30, 0]} point2={[30, 0.103]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[29.5, 0]} point2={[29.5, 0.1022]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[30.5, 0]} point2={[30.5, 0.1022]} color="var(--mafs-fg-orange)" />
  <Text x={30} y={0.113} attach="n">μ = 30</Text>
  <Text x={29.5} y={-0.0082} attach="s">29.5</Text>
  <Text x={30.5} y={-0.0082} attach="s">30.5</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "exactly", "comparison with exact"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the approximating distribution \\( W \\sim N(np,\\,np(1-p)) \\).", workingLatex: "W \\sim N(30,\\,15), \\quad \\sigma = \\sqrt{15} = 3.8730", explanation: "\\( np = 30 \\) and \\( np(1-p) = 15 \\), so \\( \\sigma = 3.8730 \\) to 4 d.p." },
        { stepNumber: 2, description: "Apply the continuity correction. The single value \\( X = 30 \\) maps to the interval \\( 29.5 < W < 30.5 \\).", workingLatex: "P(X = 30) \\approx P(29.5 < W < 30.5)", explanation: "A single discrete value spreads over a unit-width interval centred on \\( 30 \\)." },
        { stepNumber: 3, description: "Standardise and evaluate the approximation.", workingLatex: "P\\!\\left(\\dfrac{29.5-30}{3.8730} < Z < \\dfrac{30.5-30}{3.8730}\\right) = P(-0.1291 < Z < 0.1291) = 0.1027", explanation: "The Normal estimate is \\( 0.1027 \\) to 4 d.p." },
        { stepNumber: 4, description: "Compare with the exact value.", workingLatex: "0.1027 - 0.1026 = 0.0001", explanation: "The approximation \\( 0.1027 \\) differs from the exact \\( 0.1026 \\) by only \\( 0.0001 \\), so it is an excellent estimate." }
      ],
      finalAnswer: "\\( P(29.5 < W < 30.5) = 0.1027 \\)",
      canonicalAnswer: "0.1027",
    },
  },
  {
    id: "y2na-050",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 50",
    difficulty: "Challenge",
    questionText: "A factory produces components and the number that pass inspection in a batch of \\( 200 \\) is modelled by \\( X \\sim \\mathrm{B}(200, 0.4) \\). Using a suitable Normal approximation with a continuity correction, find the smallest integer \\( k \\) such that \\( \\mathrm{P}(X \\ge k) \\le 0.05 \\).",
    questionMafs: `<Mafs viewBox={{ x: [52.2872, 107.7128], y: [-0.0092, 0.0679] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 6.9282 }} yAxis={{ lines: false }} />
  <Polygon points={[[91.5,0.0145],[91.8378,0.0134],[92.1755,0.0123],[92.5133,0.0113],[92.8511,0.0103],[93.1888,0.0094],[93.5266,0.0086],[93.8644,0.0078],[94.2021,0.007],[94.5399,0.0064],[94.8777,0.0057],[95.2154,0.0052],[95.5532,0.0046],[95.891,0.0041],[96.2287,0.0037],[96.5665,0.0033],[96.9043,0.0029],[97.242,0.0026],[97.5798,0.0023],[97.9176,0.002],[98.2553,0.0018],[98.5931,0.0016],[98.9309,0.0014],[99.2686,0.0012],[99.6064,0.0011],[99.9442,0.0009],[100.2819,0.0008],[100.6197,0.0007],[100.9575,0.0006],[101.2952,0.0005],[101.633,0.0004],[101.9708,0.0004],[102.3085,0.0003],[102.6463,0.0003],[102.9841,0.0002],[103.3218,0.0002],[103.6596,0.0002],[103.9974,0.0001],[104.3351,0.0001],[104.6729,0.0001],[105.0107,0.0001],[105.3484,0.0001],[105.6862,0.0001],[106.024,0],[106.3617,0],[106.6995,0],[107.0373,0],[107.375,0],[107.7128,0],[107.7128,0],[91.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-80)**2)/(2*6.9282*6.9282))/(6.9282*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[80, 0]} point2={[80, 0.0576]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[91.5, 0]} point2={[91.5, 0.0145]} color="var(--mafs-fg-orange)" />
  <Text x={80} y={0.0632} attach="n">μ = 80</Text>
  <Text x={91.5} y={-0.0046} attach="s">91.5</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "inverse normal", "continuity correction", "threshold"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the Normal approximation. For \\( X \\sim \\mathrm{B}(n,p) \\) with large \\( n \\), use \\( Y \\sim \\mathrm{N}(np,\\, np(1-p)) \\).", workingLatex: "\\mu = np = 200 \\times 0.4 = 80", explanation: "The approximation matches the binomial mean. With \\( n=200 \\) and \\( p=0.4 \\) close to \\( 0.5 \\), the Normal model is appropriate." },
        { stepNumber: 2, description: "Compute the variance and standard deviation of the approximating Normal.", workingLatex: "\\sigma^2 = np(1-p) = 200 \\times 0.4 \\times 0.6 = 48 \\\\ \\sigma = \\sqrt{48} = 6.9282", explanation: "The variance of the approximating Normal equals the binomial variance \\( np(1-p) \\). Its square root gives \\( \\sigma = 6.9282 \\) to 4 d.p." },
        { stepNumber: 3, description: "Apply the continuity correction to \\( \\mathrm{P}(X \\ge k) \\).", workingLatex: "\\mathrm{P}(X \\ge k) \\approx \\mathrm{P}(Y > k - 0.5)", explanation: "Since \\( X \\) is discrete and \\( Y \\) continuous, the event \\( X \\ge k \\) maps to \\( Y > k - 0.5 \\): the bar for \\( k \\) starts at \\( k - 0.5 \\)." },
        { stepNumber: 4, description: "Rewrite the requirement as a lower-tail condition.", workingLatex: "\\mathrm{P}(Y > k - 0.5) \\le 0.05 \\;\\Leftrightarrow\\; \\mathrm{P}(Y \\le k - 0.5) \\ge 0.95", explanation: "An upper-tail area of at most \\( 0.05 \\) is equivalent to a lower-tail area of at least \\( 0.95 \\), which is the form needed for the inverse-Normal." },
        { stepNumber: 5, description: "Find the critical \\( z \\)-value with the inverse Normal.", workingLatex: "z = \\Phi^{-1}(0.95) = 1.6449", explanation: "The standard Normal value cutting off an upper tail of \\( 0.05 \\) is \\( z = 1.6449 \\) to 4 d.p." },
        { stepNumber: 6, description: "Undo the standardisation and the continuity correction, then round up to the smallest integer.", workingLatex: "k - 0.5 \\ge \\mu + z\\sigma = 80 + 1.6449 \\times 6.9282 = 91.3959 \\\\ k \\ge 91.8959 \\;\\Rightarrow\\; k = 92", explanation: "Solving \\( k - 0.5 = \\mu + z\\sigma \\) gives \\( k \\ge 91.8959 \\). Taking the smallest integer satisfying the inequality gives \\( k = 92 \\); a check confirms \\( \\mathrm{P}(X \\ge 92) \\approx 0.0485 \\le 0.05 \\) whereas \\( \\mathrm{P}(X \\ge 91) \\approx 0.0648 > 0.05 \\)." }
      ],
      finalAnswer: "\\( k = 92 \\)",
      canonicalAnswer: "92",
    },
  },
  {
    id: "y2na-051",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 51",
    difficulty: "Challenge",
    questionText: "In a survey, each of \\( 150 \\) people independently answers 'yes' with probability \\( 0.5 \\). Let \\( X \\) be the number who answer 'yes', so \\( X \\sim \\mathrm{B}(150, 0.5) \\). Using a Normal approximation with a continuity correction, find the smallest integer \\( k \\) for which \\( \\mathrm{P}(X \\le k) \\ge 0.90 \\).",
    questionMafs: `<Mafs viewBox={{ x: [50.5052, 99.4948], y: [-0.0104, 0.0769] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 6.1237 }} yAxis={{ lines: false }} />
  <Polygon points={[[50.5052,0],[51.1926,0],[51.88,0.0001],[52.5674,0.0001],[53.2548,0.0001],[53.9422,0.0002],[54.6296,0.0003],[55.3169,0.0004],[56.0043,0.0005],[56.6917,0.0007],[57.3791,0.001],[58.0665,0.0014],[58.7539,0.0019],[59.4413,0.0026],[60.1287,0.0034],[60.8161,0.0045],[61.5035,0.0057],[62.1909,0.0073],[62.8783,0.0092],[63.5656,0.0114],[64.253,0.014],[64.9404,0.0169],[65.6278,0.0202],[66.3152,0.0238],[67.0026,0.0278],[67.69,0.0319],[68.3774,0.0363],[69.0648,0.0407],[69.7522,0.0451],[70.4396,0.0494],[71.1269,0.0533],[71.8143,0.0569],[72.5017,0.0599],[73.1891,0.0624],[73.8765,0.0641],[74.5639,0.065],[75.2513,0.0651],[75.9387,0.0644],[76.6261,0.0629],[77.3135,0.0607],[78.0009,0.0578],[78.6883,0.0543],[79.3756,0.0505],[80.063,0.0463],[80.7504,0.0419],[81.4378,0.0375],[82.1252,0.0331],[82.8126,0.0289],[83.5,0.0249],[83.5,0],[50.5052,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-75)**2)/(2*6.1237*6.1237))/(6.1237*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[75, 0]} point2={[75, 0.0651]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[83.5, 0]} point2={[83.5, 0.0249]} color="var(--mafs-fg-orange)" />
  <Text x={75} y={0.0715} attach="n">μ = 75</Text>
  <Text x={83.5} y={-0.0052} attach="s">83.5</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "inverse normal", "continuity correction", "threshold"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the mean of the approximating Normal.", workingLatex: "\\mu = np = 150 \\times 0.5 = 75", explanation: "With \\( p = 0.5 \\) the binomial is symmetric and the Normal approximation is well suited; its mean is \\( np = 75 \\)." },
        { stepNumber: 2, description: "Find the variance and standard deviation.", workingLatex: "\\sigma^2 = np(1-p) = 150 \\times 0.5 \\times 0.5 = 37.5 \\\\ \\sigma = \\sqrt{37.5} = 6.1237", explanation: "The variance \\( np(1-p) = 37.5 \\), giving \\( \\sigma = 6.1237 \\) to 4 d.p." },
        { stepNumber: 3, description: "Apply the continuity correction to \\( \\mathrm{P}(X \\le k) \\).", workingLatex: "\\mathrm{P}(X \\le k) \\approx \\mathrm{P}(Y < k + 0.5)", explanation: "For a discrete '\\( \\le k \\)' the bar for \\( k \\) extends to \\( k + 0.5 \\), so the upper boundary is \\( k + 0.5 \\)." },
        { stepNumber: 4, description: "State the inverse-Normal requirement.", workingLatex: "\\mathrm{P}(Y < k + 0.5) \\ge 0.90", explanation: "We need the lower-tail area up to \\( k + 0.5 \\) to be at least \\( 0.90 \\)." },
        { stepNumber: 5, description: "Find the critical \\( z \\)-value.", workingLatex: "z = \\Phi^{-1}(0.90) = 1.2816", explanation: "The standard Normal value with \\( 0.90 \\) of the area below it is \\( z = 1.2816 \\) to 4 d.p." },
        { stepNumber: 6, description: "Undo standardisation and the continuity correction, then take the smallest integer.", workingLatex: "k + 0.5 \\ge \\mu + z\\sigma = 75 + 1.2816 \\times 6.1237 = 82.8479 \\\\ k \\ge 82.3479 \\;\\Rightarrow\\; k = 83", explanation: "Solving for \\( k \\) gives \\( k \\ge 82.3479 \\), so the smallest integer is \\( k = 83 \\). A check gives \\( \\mathrm{P}(X \\le 83) \\approx 0.9174 \\ge 0.90 \\) while \\( \\mathrm{P}(X \\le 82) \\approx 0.8897 < 0.90 \\)." }
      ],
      finalAnswer: "\\( k = 83 \\)",
      canonicalAnswer: "83",
    },
  },
  {
    id: "y2na-052",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 52",
    difficulty: "Challenge",
    questionText: "A machine fills \\( 400 \\) jars per hour, and each jar is correctly filled independently with probability \\( 0.55 \\). Let \\( X \\) be the number of correctly filled jars in an hour, so \\( X \\sim \\mathrm{B}(400, 0.55) \\). Using a Normal approximation with a continuity correction, find the smallest integer \\( k \\) such that \\( \\mathrm{P}(X \\ge k) \\le 0.01 \\).",
    questionMafs: `<Mafs viewBox={{ x: [180.2004, 259.7996], y: [-0.0064, 0.0473] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 9.9499 }} yAxis={{ lines: false }} />
  <Polygon points={[[243.5,0.0025],[243.8396,0.0023],[244.1792,0.0021],[244.5187,0.0019],[244.8583,0.0018],[245.1979,0.0016],[245.5375,0.0015],[245.877,0.0014],[246.2166,0.0012],[246.5562,0.0011],[246.8958,0.001],[247.2353,0.0009],[247.5749,0.0009],[247.9145,0.0008],[248.2541,0.0007],[248.5936,0.0006],[248.9332,0.0006],[249.2728,0.0005],[249.6124,0.0005],[249.9519,0.0004],[250.2915,0.0004],[250.6311,0.0004],[250.9707,0.0003],[251.3102,0.0003],[251.6498,0.0003],[251.9894,0.0002],[252.329,0.0002],[252.6685,0.0002],[253.0081,0.0002],[253.3477,0.0001],[253.6873,0.0001],[254.0268,0.0001],[254.3664,0.0001],[254.706,0.0001],[255.0456,0.0001],[255.3851,0.0001],[255.7247,0.0001],[256.0643,0.0001],[256.4039,0],[256.7434,0],[257.083,0],[257.4226,0],[257.7622,0],[258.1017,0],[258.4413,0],[258.7809,0],[259.1205,0],[259.46,0],[259.7996,0],[259.7996,0],[243.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-220)**2)/(2*9.9499*9.9499))/(9.9499*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[220, 0]} point2={[220, 0.0401]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[243.5, 0]} point2={[243.5, 0.0025]} color="var(--mafs-fg-orange)" />
  <Text x={220} y={0.044} attach="n">μ = 220</Text>
  <Text x={243.5} y={-0.0032} attach="s">243.5</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "inverse normal", "continuity correction", "threshold"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the mean of the approximating Normal.", workingLatex: "\\mu = np = 400 \\times 0.55 = 220", explanation: "The Normal approximation \\( Y \\sim \\mathrm{N}(np, np(1-p)) \\) has mean \\( np = 220 \\)." },
        { stepNumber: 2, description: "Find the variance and standard deviation.", workingLatex: "\\sigma^2 = np(1-p) = 400 \\times 0.55 \\times 0.45 = 99 \\\\ \\sigma = \\sqrt{99} = 9.9499", explanation: "The variance is \\( 99 \\), so \\( \\sigma = 9.9499 \\) to 4 d.p." },
        { stepNumber: 3, description: "Apply the continuity correction.", workingLatex: "\\mathrm{P}(X \\ge k) \\approx \\mathrm{P}(Y > k - 0.5) \\le 0.01", explanation: "The event \\( X \\ge k \\) maps to \\( Y > k - 0.5 \\); we require this upper-tail area to be at most \\( 0.01 \\)." },
        { stepNumber: 4, description: "Convert to a lower-tail condition for the inverse Normal.", workingLatex: "\\mathrm{P}(Y \\le k - 0.5) \\ge 0.99", explanation: "An upper tail of at most \\( 0.01 \\) means a lower tail of at least \\( 0.99 \\)." },
        { stepNumber: 5, description: "Find the critical \\( z \\)-value.", workingLatex: "z = \\Phi^{-1}(0.99) = 2.3263", explanation: "The standard Normal value cutting off an upper tail of \\( 0.01 \\) is \\( z = 2.3263 \\) to 4 d.p." },
        { stepNumber: 6, description: "Undo the standardisation and continuity correction; take the smallest integer.", workingLatex: "k - 0.5 \\ge \\mu + z\\sigma = 220 + 2.3263 \\times 9.9499 = 243.1469 \\\\ k \\ge 243.6469 \\;\\Rightarrow\\; k = 244", explanation: "Solving gives \\( k \\ge 243.6469 \\), so \\( k = 244 \\). Checking, \\( \\mathrm{P}(X \\ge 244) \\approx 0.0091 \\le 0.01 \\) but \\( \\mathrm{P}(X \\ge 243) \\approx 0.0119 > 0.01 \\)." }
      ],
      finalAnswer: "\\( k = 244 \\)",
      canonicalAnswer: "244",
    },
  },
  {
    id: "y2na-053",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 53",
    difficulty: "Challenge",
    questionText: "On any given day, \\( 180 \\) trains run on a line and each arrives on time independently with probability \\( 0.5 \\). Let \\( X \\) be the number arriving on time, so \\( X \\sim \\mathrm{B}(180, 0.5) \\). (a) Using a Normal approximation with a continuity correction, estimate \\( \\mathrm{P}(X \\ge 100) \\). (b) Hence, assuming days are independent, estimate the probability that on at least \\( 2 \\) of the next \\( 3 \\) days at least \\( 100 \\) trains arrive on time.",
    questionMafs: `<Mafs viewBox={{ x: [63.1672, 116.8328], y: [-0.0095, 0.0702] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 6.7082 }} yAxis={{ lines: false }} />
  <Polygon points={[[99.5,0.0218],[99.8611,0.0202],[100.2222,0.0186],[100.5833,0.0171],[100.9444,0.0157],[101.3055,0.0144],[101.6666,0.0131],[102.0277,0.0119],[102.3888,0.0108],[102.7499,0.0098],[103.111,0.0088],[103.4721,0.0079],[103.8332,0.0071],[104.1943,0.0063],[104.5554,0.0056],[104.9165,0.005],[105.2776,0.0044],[105.6387,0.0039],[105.9998,0.0035],[106.3609,0.003],[106.722,0.0027],[107.0831,0.0023],[107.4442,0.002],[107.8053,0.0018],[108.1664,0.0015],[108.5275,0.0013],[108.8886,0.0011],[109.2497,0.001],[109.6108,0.0008],[109.9719,0.0007],[110.333,0.0006],[110.6941,0.0005],[111.0552,0.0004],[111.4163,0.0004],[111.7774,0.0003],[112.1385,0.0003],[112.4996,0.0002],[112.8607,0.0002],[113.2218,0.0001],[113.5829,0.0001],[113.944,0.0001],[114.3051,0.0001],[114.6662,0.0001],[115.0273,0.0001],[115.3884,0],[115.7495,0],[116.1106,0],[116.4717,0],[116.8328,0],[116.8328,0],[99.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-90)**2)/(2*6.7082*6.7082))/(6.7082*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[90, 0]} point2={[90, 0.0595]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[99.5, 0]} point2={[99.5, 0.0218]} color="var(--mafs-fg-orange)" />
  <Text x={90} y={0.0653} attach="n">μ = 90</Text>
  <Text x={99.5} y={-0.0048} attach="s">99.5</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "follow-on probability", "binomial trials"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the Normal approximation.", workingLatex: "\\mu = np = 180 \\times 0.5 = 90 \\\\ \\sigma^2 = np(1-p) = 180 \\times 0.5 \\times 0.5 = 45", explanation: "With \\( p = 0.5 \\) the approximation \\( Y \\sim \\mathrm{N}(90, 45) \\) is appropriate." },
        { stepNumber: 2, description: "Find the standard deviation.", workingLatex: "\\sigma = \\sqrt{45} = 6.7082", explanation: "The standard deviation is \\( \\sqrt{45} = 6.7082 \\) to 4 d.p." },
        { stepNumber: 3, description: "Apply the continuity correction for part (a).", workingLatex: "\\mathrm{P}(X \\ge 100) \\approx \\mathrm{P}(Y > 99.5)", explanation: "The discrete event \\( X \\ge 100 \\) maps to \\( Y > 99.5 \\)." },
        { stepNumber: 4, description: "Standardise and evaluate.", workingLatex: "z = \\dfrac{99.5 - 90}{6.7082} = 1.4162 \\\\ \\mathrm{P}(Y > 99.5) = 1 - \\Phi(1.4162) = 0.0784", explanation: "Standardising the boundary gives \\( z = 1.4162 \\); the upper-tail probability is \\( 0.0784 \\) to 4 d.p. Call this \\( q \\)." },
        { stepNumber: 5, description: "Model the number of qualifying days over 3 days as binomial.", workingLatex: "D \\sim \\mathrm{B}(3, q), \\quad q = 0.0784", explanation: "Each day independently has probability \\( q \\) of at least \\( 100 \\) on-time trains, so the count of qualifying days over \\( 3 \\) days is \\( \\mathrm{B}(3, q) \\)." },
        { stepNumber: 6, description: "Compute the probability of at least 2 qualifying days.", workingLatex: "\\mathrm{P}(D \\ge 2) = \\binom{3}{2} q^2 (1-q) + q^3 \\\\ = 3(0.0784)^2(0.9216) + (0.0784)^3 = 0.0175", explanation: "Summing the \\( D = 2 \\) and \\( D = 3 \\) terms gives \\( 0.0175 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( \\mathrm{P}(D \\ge 2) = 0.0175 \\)",
      canonicalAnswer: "0.0175",
    },
  },
  {
    id: "y2na-054",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 54",
    difficulty: "Challenge",
    questionText: "A call centre receives \\( 250 \\) calls in a shift, and each call independently is resolved on the first attempt with probability \\( 0.32 \\). Let \\( X \\) be the number resolved on the first attempt, so \\( X \\sim \\mathrm{B}(250, 0.32) \\). Using a Normal approximation with a continuity correction, estimate \\( \\mathrm{P}(70 \\le X \\le 90) \\).",
    questionMafs: `<Mafs viewBox={{ x: [50.4976, 109.5024], y: [-0.0087, 0.0638] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 7.3756 }} yAxis={{ lines: false }} />
  <Polygon points={[[69.5,0.0196],[69.9375,0.0213],[70.375,0.0231],[70.8125,0.0249],[71.25,0.0268],[71.6875,0.0287],[72.125,0.0306],[72.5625,0.0325],[73,0.0345],[73.4375,0.0364],[73.875,0.0383],[74.3125,0.0402],[74.75,0.042],[75.1875,0.0437],[75.625,0.0454],[76.0625,0.0469],[76.5,0.0483],[76.9375,0.0496],[77.375,0.0508],[77.8125,0.0518],[78.25,0.0526],[78.6875,0.0532],[79.125,0.0537],[79.5625,0.054],[80,0.0541],[80.4375,0.054],[80.875,0.0537],[81.3125,0.0532],[81.75,0.0526],[82.1875,0.0518],[82.625,0.0508],[83.0625,0.0496],[83.5,0.0483],[83.9375,0.0469],[84.375,0.0454],[84.8125,0.0437],[85.25,0.042],[85.6875,0.0402],[86.125,0.0383],[86.5625,0.0364],[87,0.0345],[87.4375,0.0325],[87.875,0.0306],[88.3125,0.0287],[88.75,0.0268],[89.1875,0.0249],[89.625,0.0231],[90.0625,0.0213],[90.5,0.0196],[90.5,0],[69.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-80)**2)/(2*7.3756*7.3756))/(7.3756*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[80, 0]} point2={[80, 0.0541]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[69.5, 0]} point2={[69.5, 0.0196]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[90.5, 0]} point2={[90.5, 0.0196]} color="var(--mafs-fg-orange)" />
  <Text x={80} y={0.0594} attach="n">μ = 80</Text>
  <Text x={69.5} y={-0.0043} attach="s">69.5</Text>
  <Text x={90.5} y={-0.0043} attach="s">90.5</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "interval probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the mean of the approximating Normal.", workingLatex: "\\mu = np = 250 \\times 0.32 = 80", explanation: "The approximating Normal has mean \\( np = 80 \\)." },
        { stepNumber: 2, description: "Find the variance and standard deviation.", workingLatex: "\\sigma^2 = np(1-p) = 250 \\times 0.32 \\times 0.68 = 54.4 \\\\ \\sigma = \\sqrt{54.4} = 7.3756", explanation: "The variance is \\( 54.4 \\), so \\( \\sigma = 7.3756 \\) to 4 d.p." },
        { stepNumber: 3, description: "Apply the continuity correction to the inclusive interval.", workingLatex: "\\mathrm{P}(70 \\le X \\le 90) \\approx \\mathrm{P}(69.5 < Y < 90.5)", explanation: "An inclusive interval widens by \\( 0.5 \\) at each end: the lower boundary drops to \\( 69.5 \\) and the upper rises to \\( 90.5 \\)." },
        { stepNumber: 4, description: "Standardise both boundaries.", workingLatex: "z_1 = \\dfrac{69.5 - 80}{7.3756} = -1.4236 \\\\ z_2 = \\dfrac{90.5 - 80}{7.3756} = 1.4236", explanation: "The interval is symmetric about the mean, so the two \\( z \\)-values are equal and opposite." },
        { stepNumber: 5, description: "Evaluate using \\( \\Phi \\).", workingLatex: "\\mathrm{P}(69.5 < Y < 90.5) = \\Phi(1.4236) - \\Phi(-1.4236) = 0.9227 - 0.0773 = 0.8454", explanation: "Subtracting the lower-tail area from the upper gives \\( 0.8454 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( \\mathrm{P}(70 \\le X \\le 90) \\approx 0.8454 \\)",
      canonicalAnswer: "0.8454",
    },
  },
  {
    id: "y2na-055",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 55",
    difficulty: "Challenge",
    questionText: "A fair coin is tossed \\( 50 \\) times and \\( X \\) is the number of heads, so \\( X \\sim \\mathrm{B}(50, 0.5) \\). (a) Find the exact value of \\( \\mathrm{P}(X \\ge 30) \\). (b) Use a Normal approximation with a continuity correction to estimate \\( \\mathrm{P}(X \\ge 30) \\), and comment on the size of the error.",
    questionMafs: `<Mafs viewBox={{ x: [10.858, 39.142], y: [-0.0181, 0.1332] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 3.5355 }} yAxis={{ lines: false }} />
  <Polygon points={[[29.5,0.0502],[29.7009,0.0466],[29.9018,0.0432],[30.1026,0.0398],[30.3035,0.0366],[30.5044,0.0336],[30.7053,0.0307],[30.9061,0.028],[31.107,0.0254],[31.3079,0.023],[31.5088,0.0207],[31.7096,0.0186],[31.9105,0.0167],[32.1114,0.0149],[32.3123,0.0133],[32.5131,0.0118],[32.714,0.0104],[32.9149,0.0092],[33.1158,0.0081],[33.3166,0.0071],[33.5175,0.0062],[33.7184,0.0054],[33.9193,0.0047],[34.1201,0.0041],[34.321,0.0035],[34.5219,0.003],[34.7228,0.0026],[34.9236,0.0022],[35.1245,0.0019],[35.3254,0.0016],[35.5263,0.0013],[35.7271,0.0011],[35.928,0.001],[36.1289,0.0008],[36.3298,0.0007],[36.5306,0.0006],[36.7315,0.0005],[36.9324,0.0004],[37.1332,0.0003],[37.3341,0.0003],[37.535,0.0002],[37.7359,0.0002],[37.9367,0.0001],[38.1376,0.0001],[38.3385,0.0001],[38.5394,0.0001],[38.7402,0.0001],[38.9411,0],[39.142,0],[39.142,0],[29.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-25)**2)/(2*3.5355*3.5355))/(3.5355*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[25, 0]} point2={[25, 0.1128]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[29.5, 0]} point2={[29.5, 0.0502]} color="var(--mafs-fg-orange)" />
  <Text x={25} y={0.1238} attach="n">μ = 25</Text>
  <Text x={29.5} y={-0.009} attach="s">29.5</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "exact vs approximation", "continuity correction", "error comment"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the exact binomial probability as a sum.", workingLatex: "\\mathrm{P}(X \\ge 30) = \\sum_{r=30}^{50} \\binom{50}{r} (0.5)^r (0.5)^{50-r}", explanation: "Summing the binomial mass over \\( r = 30 \\) to \\( 50 \\) gives the exact upper-tail probability." },
        { stepNumber: 2, description: "Evaluate the exact sum.", workingLatex: "\\mathrm{P}(X \\ge 30) = 0.1013", explanation: "Computing the sum gives \\( 0.1013 \\) to 4 d.p." },
        { stepNumber: 3, description: "Set up the Normal approximation.", workingLatex: "\\mu = np = 25, \\quad \\sigma^2 = np(1-p) = 12.5, \\quad \\sigma = \\sqrt{12.5} = 3.5355", explanation: "The approximating Normal is \\( Y \\sim \\mathrm{N}(25, 12.5) \\) with \\( \\sigma = 3.5355 \\) to 4 d.p." },
        { stepNumber: 4, description: "Apply the continuity correction and standardise.", workingLatex: "\\mathrm{P}(X \\ge 30) \\approx \\mathrm{P}(Y > 29.5) \\\\ z = \\dfrac{29.5 - 25}{3.5355} = 1.2728", explanation: "The event \\( X \\ge 30 \\) maps to \\( Y > 29.5 \\), giving \\( z = 1.2728 \\)." },
        { stepNumber: 5, description: "Evaluate the approximation.", workingLatex: "\\mathrm{P}(Y > 29.5) = 1 - \\Phi(1.2728) = 0.1015", explanation: "The upper-tail Normal probability is \\( 0.1015 \\) to 4 d.p." },
        { stepNumber: 6, description: "Compare and comment.", workingLatex: "|\\,0.1015 - 0.1013\\,| = 0.0002", explanation: "The absolute error is only \\( 0.0002 \\), about \\( 0.2\\% \\) of the exact value. The approximation is very accurate here because \\( p = 0.5 \\) makes the binomial symmetric and \\( n = 50 \\) is reasonably large, so the Normal approximation with continuity correction performs extremely well." }
      ],
      finalAnswer: "\\( |\\,0.1015 - 0.1013\\,| = 0.0002 \\), so the approximation is very accurate.",
    },
  },
  {
    id: "y2na-056",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 56",
    difficulty: "Challenge",
    questionText: "The random variable \\( X \\sim \\mathrm{B}(40, 0.45) \\). (a) Find the exact value of \\( \\mathrm{P}(X = 18) \\). (b) Use a Normal approximation with a continuity correction to estimate \\( \\mathrm{P}(X = 18) \\), and comment on the accuracy of the approximation.",
    questionMafs: `<Mafs viewBox={{ x: [5.4144, 30.5856], y: [-0.0203, 0.1496] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 3.1464 }} yAxis={{ lines: false }} />
  <Polygon points={[[17.5,0.1252],[17.5208,0.1253],[17.5417,0.1255],[17.5625,0.1256],[17.5833,0.1257],[17.6042,0.1258],[17.625,0.1259],[17.6458,0.126],[17.6667,0.1261],[17.6875,0.1262],[17.7083,0.1262],[17.7292,0.1263],[17.75,0.1264],[17.7708,0.1265],[17.7917,0.1265],[17.8125,0.1266],[17.8333,0.1266],[17.8542,0.1267],[17.875,0.1267],[17.8958,0.1267],[17.9167,0.1267],[17.9375,0.1268],[17.9583,0.1268],[17.9792,0.1268],[18,0.1268],[18.0208,0.1268],[18.0417,0.1268],[18.0625,0.1268],[18.0833,0.1267],[18.1042,0.1267],[18.125,0.1267],[18.1458,0.1267],[18.1667,0.1266],[18.1875,0.1266],[18.2083,0.1265],[18.2292,0.1265],[18.25,0.1264],[18.2708,0.1263],[18.2917,0.1262],[18.3125,0.1262],[18.3333,0.1261],[18.3542,0.126],[18.375,0.1259],[18.3958,0.1258],[18.4167,0.1257],[18.4375,0.1256],[18.4583,0.1255],[18.4792,0.1253],[18.5,0.1252],[18.5,0],[17.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-18)**2)/(2*3.1464*3.1464))/(3.1464*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[18, 0]} point2={[18, 0.1268]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[17.5, 0]} point2={[17.5, 0.1252]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[18.5, 0]} point2={[18.5, 0.1252]} color="var(--mafs-fg-orange)" />
  <Text x={18} y={0.1391} attach="n">μ = 18</Text>
  <Text x={17.5} y={-0.0101} attach="s">17.5</Text>
  <Text x={18.5} y={-0.0101} attach="s">18.5</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "exact vs approximation", "continuity correction", "single value", "error comment"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the exact binomial probability for a single value.", workingLatex: "\\mathrm{P}(X = 18) = \\binom{40}{18} (0.45)^{18} (0.55)^{22}", explanation: "The exact probability of exactly \\( 18 \\) successes is the binomial mass at \\( r = 18 \\)." },
        { stepNumber: 2, description: "Evaluate the exact value.", workingLatex: "\\mathrm{P}(X = 18) = 0.1260", explanation: "Computing the binomial term gives \\( 0.1260 \\) to 4 d.p." },
        { stepNumber: 3, description: "Set up the Normal approximation.", workingLatex: "\\mu = np = 40 \\times 0.45 = 18 \\\\ \\sigma^2 = np(1-p) = 40 \\times 0.45 \\times 0.55 = 9.9, \\quad \\sigma = \\sqrt{9.9} = 3.1464", explanation: "The approximating Normal is \\( Y \\sim \\mathrm{N}(18, 9.9) \\) with \\( \\sigma = 3.1464 \\) to 4 d.p." },
        { stepNumber: 4, description: "Apply the continuity correction for a single value.", workingLatex: "\\mathrm{P}(X = 18) \\approx \\mathrm{P}(17.5 < Y < 18.5)", explanation: "A single integer value \\( 18 \\) corresponds to the strip from \\( 17.5 \\) to \\( 18.5 \\) under the Normal curve." },
        { stepNumber: 5, description: "Standardise, evaluate and comment.", workingLatex: "z_1 = \\dfrac{17.5 - 18}{3.1464} = -0.1589, \\quad z_2 = \\dfrac{18.5 - 18}{3.1464} = 0.1589 \\\\ \\mathrm{P}(17.5 < Y < 18.5) = \\Phi(0.1589) - \\Phi(-0.1589) = 0.1263", explanation: "The approximation gives \\( 0.1263 \\), an absolute error of just \\( 0.0003 \\) from the exact \\( 0.1260 \\). The estimate is very accurate: with \\( p = 0.45 \\) close to \\( 0.5 \\) and a value near the mean, the continuity correction captures the binomial mass well." }
      ],
      finalAnswer: "\\( \\mathrm{P}(17.5 < Y < 18.5) = 0.1263 \\) (error \\( 0.0003 \\)), so the approximation is accurate.",
    },
  },
  {
    id: "y2na-057",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 57",
    difficulty: "Challenge",
    questionText: "The random variable \\( X \\sim \\mathrm{B}(100, 0.5) \\), with exact probability \\( \\mathrm{P}(X \\le 45) = 0.1841 \\) (to 4 d.p.). A student estimates \\( \\mathrm{P}(X \\le 45) \\) using a Normal approximation but forgets the continuity correction, computing \\( \\mathrm{P}(Y \\le 45) \\). Find the value the student obtains and the value obtained with the correct continuity correction, and comment on the effect of omitting the correction.",
    questionMafs: `<Mafs viewBox={{ x: [30, 70], y: [-0.0128, 0.0942] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 5 }} yAxis={{ lines: false }} />
  <Polygon points={[[30,0],[30.3229,0],[30.6458,0],[30.9688,0.0001],[31.2917,0.0001],[31.6146,0.0001],[31.9375,0.0001],[32.2604,0.0001],[32.5833,0.0002],[32.9063,0.0002],[33.2292,0.0003],[33.5521,0.0004],[33.875,0.0004],[34.1979,0.0005],[34.5208,0.0007],[34.8438,0.0008],[35.1667,0.001],[35.4896,0.0012],[35.8125,0.0014],[36.1354,0.0017],[36.4583,0.002],[36.7813,0.0024],[37.1042,0.0029],[37.4271,0.0034],[37.75,0.004],[38.0729,0.0046],[38.3958,0.0054],[38.7188,0.0063],[39.0417,0.0072],[39.3646,0.0083],[39.6875,0.0095],[40.0104,0.0108],[40.3333,0.0123],[40.6563,0.0139],[40.9792,0.0157],[41.3021,0.0176],[41.625,0.0196],[41.9479,0.0218],[42.2708,0.0242],[42.5938,0.0266],[42.9167,0.0293],[43.2396,0.032],[43.5625,0.0348],[43.8854,0.0378],[44.2083,0.0408],[44.5313,0.0439],[44.8542,0.047],[45.1771,0.0501],[45.5,0.0532],[45.5,0],[30,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-50)**2)/(2*5*5))/(5*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[50, 0]} point2={[50, 0.0798]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[45.5, 0]} point2={[45.5, 0.0532]} color="var(--mafs-fg-orange)" />
  <Text x={50} y={0.0876} attach="n">μ = 50</Text>
  <Text x={45.5} y={-0.0064} attach="s">45.5</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "exact vs approximation", "error comment"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the Normal approximation.", workingLatex: "\\mu = np = 100 \\times 0.5 = 50 \\\\ \\sigma^2 = np(1-p) = 100 \\times 0.5 \\times 0.5 = 25, \\quad \\sigma = \\sqrt{25} = 5", explanation: "The approximating Normal is \\( Y \\sim \\mathrm{N}(50, 25) \\) with \\( \\sigma = 5 \\)." },
        { stepNumber: 2, description: "Compute the student's value without the continuity correction.", workingLatex: "z = \\dfrac{45 - 50}{5} = -1 \\\\ \\mathrm{P}(Y \\le 45) = \\Phi(-1) = 0.1587", explanation: "Using the boundary \\( 45 \\) directly gives \\( z = -1 \\) and a probability of \\( 0.1587 \\) to 4 d.p." },
        { stepNumber: 3, description: "Apply the correct continuity correction.", workingLatex: "\\mathrm{P}(X \\le 45) \\approx \\mathrm{P}(Y < 45.5)", explanation: "The discrete event \\( X \\le 45 \\) maps to \\( Y < 45.5 \\), extending the boundary by \\( 0.5 \\)." },
        { stepNumber: 4, description: "Evaluate the corrected probability.", workingLatex: "z = \\dfrac{45.5 - 50}{5} = -0.9 \\\\ \\mathrm{P}(Y < 45.5) = \\Phi(-0.9) = 0.1841", explanation: "With the correction, \\( z = -0.9 \\) and the probability is \\( 0.1841 \\) to 4 d.p." },
        { stepNumber: 5, description: "Compare with the exact value and comment.", workingLatex: "|\\,0.1841 - 0.1841\\,| = 0.0000 \\quad\\text{vs}\\quad |\\,0.1587 - 0.1841\\,| = 0.0254", explanation: "With the continuity correction the approximation matches the exact value to 4 d.p., but omitting it gives an error of \\( 0.0254 \\) — over \\( 100 \\) times larger. The correction matters because the discrete probability includes the whole bar at \\( 45 \\); dropping it cuts off half that bar and noticeably underestimates the probability." }
      ],
      finalAnswer: "\\( \\text{Without c.c.: } 0.1587 \\text{ (error } 0.0254); \\text{ with c.c.: } 0.1841 \\text{ (error } 0.0000). \\)",
    },
  },
  {
    id: "y2na-058",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 58",
    difficulty: "Challenge",
    questionText: "A retailer sends out \\( 320 \\) marketing emails, and each is opened independently with probability \\( 0.35 \\). Let \\( X \\) be the number opened, so \\( X \\sim \\mathrm{B}(320, 0.35) \\). (a) Show that a suitable Normal approximation to the distribution of \\( X \\) is \\( \\mathrm{N}(112, 72.8) \\). (b) Hence use this approximation, with a continuity correction, to estimate \\( \\mathrm{P}(X \\le 100) \\).",
    questionMafs: `<Mafs viewBox={{ x: [77.8708, 146.1292], y: [-0.0075, 0.0552] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 8.5323 }} yAxis={{ lines: false }} />
  <Polygon points={[[77.8708,0],[78.3422,0],[78.8137,0],[79.2851,0],[79.7566,0],[80.228,0],[80.6995,0.0001],[81.1709,0.0001],[81.6423,0.0001],[82.1138,0.0001],[82.5852,0.0001],[83.0567,0.0001],[83.5281,0.0002],[83.9995,0.0002],[84.471,0.0003],[84.9424,0.0003],[85.4139,0.0004],[85.8853,0.0004],[86.3568,0.0005],[86.8282,0.0006],[87.2996,0.0007],[87.7711,0.0008],[88.2425,0.001],[88.714,0.0011],[89.1854,0.0013],[89.6568,0.0015],[90.1283,0.0017],[90.5997,0.002],[91.0712,0.0023],[91.5426,0.0026],[92.0141,0.003],[92.4855,0.0034],[92.9569,0.0039],[93.4284,0.0044],[93.8998,0.0049],[94.3713,0.0055],[94.8427,0.0062],[95.3141,0.0069],[95.7856,0.0077],[96.257,0.0085],[96.7285,0.0094],[97.1999,0.0104],[97.6714,0.0114],[98.1428,0.0125],[98.6142,0.0137],[99.0857,0.0149],[99.5571,0.0161],[100.0286,0.0175],[100.5,0.0189],[100.5,0],[77.8708,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-112)**2)/(2*8.5323*8.5323))/(8.5323*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[112, 0]} point2={[112, 0.0468]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[100.5, 0]} point2={[100.5, 0.0189]} color="var(--mafs-fg-orange)" />
  <Text x={112} y={0.0513} attach="n">μ = 112</Text>
  <Text x={100.5} y={-0.0037} attach="s">100.5</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "show that", "mean and variance", "continuity correction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Show that the mean of the approximating Normal is \\( 112 \\).", workingLatex: "\\mu = np = 320 \\times 0.35 = 112", explanation: "The Normal approximation matches the binomial mean \\( np \\), giving \\( \\mu = 112 \\) as required." },
        { stepNumber: 2, description: "Show that the variance is \\( 72.8 \\).", workingLatex: "\\sigma^2 = np(1-p) = 320 \\times 0.35 \\times 0.65 = 72.8", explanation: "The variance matches \\( np(1-p) = 72.8 \\). Hence the approximating distribution is \\( \\mathrm{N}(112, 72.8) \\), as claimed." },
        { stepNumber: 3, description: "Find the standard deviation for part (b).", workingLatex: "\\sigma = \\sqrt{72.8} = 8.5323", explanation: "The standard deviation is \\( \\sqrt{72.8} = 8.5323 \\) to 4 d.p." },
        { stepNumber: 4, description: "Apply the continuity correction.", workingLatex: "\\mathrm{P}(X \\le 100) \\approx \\mathrm{P}(Y < 100.5)", explanation: "The discrete event \\( X \\le 100 \\) maps to \\( Y < 100.5 \\)." },
        { stepNumber: 5, description: "Standardise and evaluate.", workingLatex: "z = \\dfrac{100.5 - 112}{8.5323} = -1.3478 \\\\ \\mathrm{P}(Y < 100.5) = \\Phi(-1.3478) = 0.0889", explanation: "Standardising the boundary gives \\( z = -1.3478 \\), and the lower-tail probability is \\( 0.0889 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( \\mathrm{P}(X \\le 100) \\approx 0.0889 \\)",
      canonicalAnswer: "0.0889",
    },
  },
  {
    id: "y2na-059",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 59",
    difficulty: "Challenge",
    questionText: "A large quiz platform has \\( 600 \\) users attempt a question, and each answers correctly independently with probability \\( 0.6 \\). Let \\( X \\) be the number of correct answers, so \\( X \\sim \\mathrm{B}(600, 0.6) \\). (a) Show that the approximating Normal distribution is \\( \\mathrm{N}(360, 144) \\), and hence write down its standard deviation. (b) Using this approximation with a continuity correction, find the smallest integer \\( k \\) such that \\( \\mathrm{P}(X \\le k) \\ge 0.975 \\).",
    questionMafs: `<Mafs viewBox={{ x: [312, 408], y: [-0.0053, 0.0392] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 12 }} yAxis={{ lines: false }} />
  <Polygon points={[[312,0],[313.5104,0],[315.0208,0],[316.5313,0],[318.0417,0.0001],[319.5521,0.0001],[321.0625,0.0002],[322.5729,0.0003],[324.0833,0.0004],[325.5938,0.0005],[327.1042,0.0008],[328.6146,0.0011],[330.125,0.0015],[331.6354,0.002],[333.1458,0.0027],[334.6563,0.0036],[336.1667,0.0046],[337.6771,0.0059],[339.1875,0.0074],[340.6979,0.0091],[342.2083,0.0111],[343.7188,0.0132],[345.2292,0.0156],[346.7396,0.0181],[348.25,0.0206],[349.7604,0.0231],[351.2708,0.0255],[352.7813,0.0277],[354.2917,0.0297],[355.8021,0.0313],[357.3125,0.0324],[358.8229,0.0331],[360.3333,0.0332],[361.8438,0.0329],[363.3542,0.032],[364.8646,0.0306],[366.375,0.0289],[367.8854,0.0268],[369.3958,0.0245],[370.9063,0.022],[372.4167,0.0195],[373.9271,0.017],[375.4375,0.0145],[376.9479,0.0123],[378.4583,0.0102],[379.9688,0.0083],[381.4792,0.0067],[382.9896,0.0053],[384.5,0.0041],[384.5,0],[312,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-360)**2)/(2*12*12))/(12*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[360, 0]} point2={[360, 0.0332]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[384.5, 0]} point2={[384.5, 0.0041]} color="var(--mafs-fg-orange)" />
  <Text x={360} y={0.0365} attach="n">μ = 360</Text>
  <Text x={384.5} y={-0.0027} attach="s">384.5</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "show that", "mean and variance", "inverse normal", "continuity correction", "threshold"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Show the mean of the approximating Normal.", workingLatex: "\\mu = np = 600 \\times 0.6 = 360", explanation: "The mean matches \\( np = 360 \\) as required." },
        { stepNumber: 2, description: "Show the variance and state the standard deviation.", workingLatex: "\\sigma^2 = np(1-p) = 600 \\times 0.6 \\times 0.4 = 144 \\\\ \\sigma = \\sqrt{144} = 12", explanation: "The variance matches \\( np(1-p) = 144 \\), so the approximating distribution is \\( \\mathrm{N}(360, 144) \\) with standard deviation \\( \\sigma = 12 \\)." },
        { stepNumber: 3, description: "Apply the continuity correction to \\( \\mathrm{P}(X \\le k) \\).", workingLatex: "\\mathrm{P}(X \\le k) \\approx \\mathrm{P}(Y < k + 0.5) \\ge 0.975", explanation: "The discrete event \\( X \\le k \\) maps to \\( Y < k + 0.5 \\); we require this lower-tail area to be at least \\( 0.975 \\)." },
        { stepNumber: 4, description: "Find the critical \\( z \\)-value.", workingLatex: "z = \\Phi^{-1}(0.975) = 1.96", explanation: "The standard Normal value with \\( 0.975 \\) of the area below it is \\( z = 1.96 \\) to 4 d.p." },
        { stepNumber: 5, description: "Undo standardisation and the continuity correction, then take the smallest integer.", workingLatex: "k + 0.5 \\ge \\mu + z\\sigma = 360 + 1.96 \\times 12 = 383.52 \\\\ k \\ge 383.02 \\;\\Rightarrow\\; k = 384", explanation: "Solving gives \\( k \\ge 383.02 \\), so the smallest integer is \\( k = 384 \\). A check gives \\( \\mathrm{P}(X \\le 384) \\approx 0.9794 \\ge 0.975 \\) while \\( \\mathrm{P}(X \\le 383) \\approx 0.9749 < 0.975 \\)." }
      ],
      finalAnswer: "\\( k = 384 \\)",
      canonicalAnswer: "384",
    },
  },
  {
    id: "y2na-060",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 60",
    difficulty: "Challenge",
    questionText: "A fair coin is tossed \\( 500 \\) times each day and \\( X \\) is the number of heads, so \\( X \\sim \\mathrm{B}(500, 0.5) \\). (a) Using a Normal approximation with a continuity correction, estimate \\( \\mathrm{P}(230 \\le X \\le 270) \\). (b) Hence, assuming days are independent, estimate the probability that \\( X \\) lies in the interval \\( [230, 270] \\) on each of \\( 4 \\) consecutive days.",
    questionMafs: `<Mafs viewBox={{ x: [205.2788, 294.7212], y: [-0.0057, 0.0421] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 11.1803 }} yAxis={{ lines: false }} />
  <Polygon points={[[229.5,0.0066],[230.3542,0.0076],[231.2083,0.0087],[232.0625,0.0099],[232.9167,0.0111],[233.7708,0.0124],[234.625,0.0139],[235.4792,0.0154],[236.3333,0.0169],[237.1875,0.0185],[238.0417,0.0201],[238.8958,0.0218],[239.75,0.0234],[240.6042,0.0251],[241.4583,0.0267],[242.3125,0.0282],[243.1667,0.0296],[244.0208,0.0309],[244.875,0.0321],[245.7292,0.0332],[246.5833,0.0341],[247.4375,0.0348],[248.2917,0.0353],[249.1458,0.0356],[250,0.0357],[250.8542,0.0356],[251.7083,0.0353],[252.5625,0.0348],[253.4167,0.0341],[254.2708,0.0332],[255.125,0.0321],[255.9792,0.0309],[256.8333,0.0296],[257.6875,0.0282],[258.5417,0.0267],[259.3958,0.0251],[260.25,0.0234],[261.1042,0.0218],[261.9583,0.0201],[262.8125,0.0185],[263.6667,0.0169],[264.5208,0.0154],[265.375,0.0139],[266.2292,0.0124],[267.0833,0.0111],[267.9375,0.0099],[268.7917,0.0087],[269.6458,0.0076],[270.5,0.0066],[270.5,0],[229.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-250)**2)/(2*11.1803*11.1803))/(11.1803*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[250, 0]} point2={[250, 0.0357]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[229.5, 0]} point2={[229.5, 0.0066]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[270.5, 0]} point2={[270.5, 0.0066]} color="var(--mafs-fg-orange)" />
  <Text x={250} y={0.0392} attach="n">μ = 250</Text>
  <Text x={229.5} y={-0.0029} attach="s">229.5</Text>
  <Text x={270.5} y={-0.0029} attach="s">270.5</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "interval probability", "follow-on probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the Normal approximation.", workingLatex: "\\mu = np = 500 \\times 0.5 = 250 \\\\ \\sigma^2 = np(1-p) = 500 \\times 0.5 \\times 0.5 = 125", explanation: "The approximating Normal is \\( Y \\sim \\mathrm{N}(250, 125) \\)." },
        { stepNumber: 2, description: "Find the standard deviation.", workingLatex: "\\sigma = \\sqrt{125} = 11.1803", explanation: "The standard deviation is \\( \\sqrt{125} = 11.1803 \\) to 4 d.p." },
        { stepNumber: 3, description: "Apply the continuity correction to the inclusive interval.", workingLatex: "\\mathrm{P}(230 \\le X \\le 270) \\approx \\mathrm{P}(229.5 < Y < 270.5)", explanation: "The inclusive interval widens by \\( 0.5 \\) at each end to \\( 229.5 \\) and \\( 270.5 \\)." },
        { stepNumber: 4, description: "Standardise both boundaries.", workingLatex: "z_1 = \\dfrac{229.5 - 250}{11.1803} = -1.8336 \\\\ z_2 = \\dfrac{270.5 - 250}{11.1803} = 1.8336", explanation: "The interval is symmetric about the mean, so the \\( z \\)-values are equal and opposite." },
        { stepNumber: 5, description: "Evaluate the interval probability.", workingLatex: "\\mathrm{P}(229.5 < Y < 270.5) = \\Phi(1.8336) - \\Phi(-1.8336) = 0.9667 - 0.0333 = 0.9333", explanation: "The interval probability is \\( 0.9333 \\) to 4 d.p. Call this \\( p_0 \\)." },
        { stepNumber: 6, description: "Use independence across 4 days for part (b).", workingLatex: "\\mathrm{P}(\\text{all 4 days}) = p_0^{\\,4} = (0.9333)^4 = 0.7587", explanation: "Since the days are independent, the probability that the interval holds on all \\( 4 \\) days is \\( p_0^4 = 0.7587 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( (0.9333)^4 = 0.7587 \\)",
      canonicalAnswer: "0.7587",
    },
  },
  {
    id: "y2na-061",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 61",
    difficulty: "Challenge",
    questionText: "A fair process produces successes with probability \\( 0.34 \\) on each of \\( 200 \\) independent trials, so \\( X\\sim B(200,0.34) \\). \\( X \\) is to be approximated by a Normal distribution. (a) State the approximating distribution. (b) Use it, with a continuity correction, to estimate \\( P(X\\le 60) \\). (c) The exact binomial value is \\( 0.1310 \\). By also computing the estimate without a continuity correction, comment on the size of the error introduced by omitting the correction.",
    questionMafs: `<Mafs viewBox={{ x: [41.2028, 94.7972], y: [-0.0095, 0.0703] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 6.6993 }} yAxis={{ lines: false }} />
  <Polygon points={[[41.2028,0],[41.6048,0],[42.0069,0],[42.4089,0],[42.8109,0.0001],[43.2129,0.0001],[43.6149,0.0001],[44.017,0.0001],[44.419,0.0001],[44.821,0.0001],[45.2231,0.0002],[45.6251,0.0002],[46.0271,0.0003],[46.4291,0.0003],[46.8311,0.0004],[47.2332,0.0005],[47.6352,0.0006],[48.0372,0.0007],[48.4393,0.0008],[48.8413,0.001],[49.2433,0.0012],[49.6453,0.0014],[50.0473,0.0016],[50.4494,0.0019],[50.8514,0.0022],[51.2534,0.0026],[51.6555,0.003],[52.0575,0.0035],[52.4595,0.004],[52.8615,0.0046],[53.2636,0.0053],[53.6656,0.006],[54.0676,0.0069],[54.4696,0.0077],[54.8717,0.0087],[55.2737,0.0098],[55.6757,0.011],[56.0777,0.0122],[56.4798,0.0136],[56.8818,0.015],[57.2838,0.0166],[57.6858,0.0182],[58.0879,0.0199],[58.4899,0.0217],[58.8919,0.0236],[59.2939,0.0256],[59.696,0.0276],[60.098,0.0297],[60.5,0.0318],[60.5,0],[41.2028,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-68)**2)/(2*6.6993*6.6993))/(6.6993*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[68, 0]} point2={[68, 0.0595]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[60.5, 0]} point2={[60.5, 0.0318]} color="var(--mafs-fg-orange)" />
  <Text x={68} y={0.0654} attach="n">μ = 68</Text>
  <Text x={60.5} y={-0.0048} attach="s">60.5</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "error"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the mean and variance of the binomial, which become the Normal parameters.", workingLatex: "\\mu = np = 200\\times 0.34 = 68,\\quad \\sigma^2 = np(1-p) = 200\\times 0.34\\times 0.66 = 44.88", explanation: "The approximating Normal inherits the binomial mean \\( np \\) and variance \\( np(1-p) \\)." },
        { stepNumber: 2, description: "State the approximating distribution and the standard deviation.", workingLatex: "Y\\sim N(68,\\ 44.88),\\quad \\sigma = \\sqrt{44.88} = 6.6993", explanation: "Since \\( np = 68 \\) and \\( n(1-p) = 132 \\) are both large, the Normal approximation is appropriate." },
        { stepNumber: 3, description: "Apply the continuity correction for \\( P(X\\le 60) \\).", workingLatex: "P(X\\le 60)\\approx P(Y < 60.5)", explanation: "The discrete event \\( X\\le 60 \\) spreads to \\( Y < 60.5 \\), since \\( X=60 \\) occupies the bar from \\( 59.5 \\) to \\( 60.5 \\)." },
        { stepNumber: 4, description: "Standardise and evaluate with the correction.", workingLatex: "z = \\frac{60.5 - 68}{6.6993} = -1.1195,\\quad P(Y<60.5) = 0.1315", explanation: "This gives the corrected estimate \\( 0.1315 \\) to 4 d.p." },
        { stepNumber: 5, description: "Evaluate without the correction for comparison.", workingLatex: "z = \\frac{60 - 68}{6.6993} = -1.1942,\\quad P(Y<60) = 0.1162", explanation: "Omitting the correction uses the boundary \\( 60 \\) directly." },
        { stepNumber: 6, description: "Compare both estimates with the exact value \\( 0.1310 \\).", workingLatex: "|0.1315 - 0.1310| = 0.0005,\\quad |0.1162 - 0.1310| = 0.0148", explanation: "With the correction the error is just \\( 0.0005 \\); without it the error is \\( 0.0148 \\), about \\( 30 \\) times larger. The correction matters because the half-unit shift is non-negligible relative to \\( \\sigma\\approx 6.7 \\)." }
      ],
      finalAnswer: "\\( P(X\\le 60)\\approx 0.1315 \\) (with correction, error \\( 0.0005 \\)); without it \\( 0.1162 \\) (error \\( 0.0148 \\)).",
      canonicalAnswer: "0.1315",
    },
  },
  {
    id: "y2na-062",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 62",
    difficulty: "Challenge",
    questionText: "The random variable \\( X\\sim B(80,0.45) \\) is approximated by a suitable Normal distribution. (a) Justify briefly why the Normal approximation is reasonable here. (b) Using a continuity correction, estimate \\( P(30\\le X\\le 40) \\).",
    questionMafs: `<Mafs viewBox={{ x: [18.2012, 53.7988], y: [-0.0143, 0.1058] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 4.4497 }} yAxis={{ lines: false }} />
  <Polygon points={[[29.5,0.0308],[29.7292,0.0332],[29.9583,0.0357],[30.1875,0.0382],[30.4167,0.0408],[30.6458,0.0435],[30.875,0.0462],[31.1042,0.0489],[31.3333,0.0517],[31.5625,0.0545],[31.7917,0.0573],[32.0208,0.0601],[32.25,0.0629],[32.4792,0.0656],[32.7083,0.0682],[32.9375,0.0707],[33.1667,0.0732],[33.3958,0.0755],[33.625,0.0778],[33.8542,0.0798],[34.0833,0.0817],[34.3125,0.0834],[34.5417,0.085],[34.7708,0.0863],[35,0.0874],[35.2292,0.0883],[35.4583,0.089],[35.6875,0.0894],[35.9167,0.0896],[36.1458,0.0896],[36.375,0.0893],[36.6042,0.0888],[36.8333,0.0881],[37.0625,0.0871],[37.2917,0.086],[37.5208,0.0846],[37.75,0.083],[37.9792,0.0812],[38.2083,0.0793],[38.4375,0.0772],[38.6667,0.0749],[38.8958,0.0725],[39.125,0.0701],[39.3542,0.0675],[39.5833,0.0648],[39.8125,0.0621],[40.0417,0.0594],[40.2708,0.0566],[40.5,0.0538],[40.5,0],[29.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-36)**2)/(2*4.4497*4.4497))/(4.4497*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[36, 0]} point2={[36, 0.0897]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[29.5, 0]} point2={[29.5, 0.0308]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[40.5, 0]} point2={[40.5, 0.0538]} color="var(--mafs-fg-orange)" />
  <Text x={36} y={0.0984} attach="n">μ = 36</Text>
  <Text x={29.5} y={-0.0072} attach="s">29.5</Text>
  <Text x={40.5} y={-0.0072} attach="s">40.5</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "interval"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Check the validity condition.", workingLatex: "np = 80\\times 0.45 = 36,\\quad n(1-p) = 80\\times 0.55 = 44", explanation: "With \\( p \\) close to \\( 0.5 \\) and both \\( np \\) and \\( n(1-p) \\) well above \\( 5 \\), the binomial is roughly symmetric and the Normal approximation is reasonable." },
        { stepNumber: 2, description: "State the approximating Normal parameters.", workingLatex: "\\sigma^2 = np(1-p) = 36\\times 0.55 = 19.8,\\quad Y\\sim N(36,\\ 19.8),\\quad \\sigma = 4.4497", explanation: "Mean \\( 36 \\), variance \\( 19.8 \\), standard deviation \\( \\sqrt{19.8}=4.4497 \\)." },
        { stepNumber: 3, description: "Apply the continuity correction to the inclusive interval.", workingLatex: "P(30\\le X\\le 40)\\approx P(29.5 < Y < 40.5)", explanation: "Both endpoints are included, so widen outward: lower \\( 30\\to 29.5 \\), upper \\( 40\\to 40.5 \\)." },
        { stepNumber: 4, description: "Standardise both boundaries.", workingLatex: "z_1 = \\frac{29.5 - 36}{4.4497} = -1.4608,\\quad z_2 = \\frac{40.5 - 36}{4.4497} = 1.0113", explanation: "Convert each corrected boundary to a \\( z \\)-score." },
        { stepNumber: 5, description: "Evaluate the probability.", workingLatex: "P(29.5<Y<40.5) = \\Phi(1.0113) - \\Phi(-1.4608) = 0.8441 - 0.0720 = 0.7720", explanation: "The estimate is \\( 0.7720 \\) to 4 d.p. (exact binomial \\( 0.7728 \\))." }
      ],
      finalAnswer: "\\( P(30\\le X\\le 40)\\approx 0.7720 \\)",
      canonicalAnswer: "0.7720",
    },
  },
  {
    id: "y2na-063",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 63",
    difficulty: "Challenge",
    questionText: "A student wants to estimate \\( P(X\\le 6) \\) for \\( X\\sim B(15,0.3) \\) by using a Normal approximation. Critically assess whether the Normal approximation is appropriate here. State clearly the condition you are checking, what it evaluates to, and what method should be used instead.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "validity", "critique"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the standard validity requirement for the Normal approximation.", workingLatex: "np > 5 \\text{ and } n(1-p) > 5", explanation: "The Normal approximation needs the binomial to be roughly symmetric and not bunched against \\( 0 \\); this is usually summarised by \\( np>5 \\) and \\( n(1-p)>5 \\)." },
        { stepNumber: 2, description: "Evaluate the condition for these values.", workingLatex: "np = 15\\times 0.3 = 4.5,\\quad n(1-p) = 15\\times 0.7 = 10.5", explanation: "Here \\( np = 4.5 \\), which fails the \\( np>5 \\) requirement." },
        { stepNumber: 3, description: "Comment on the consequence.", workingLatex: "np = 4.5 < 5 \\Rightarrow \\text{distribution skewed; Normal approximation unreliable}", explanation: "With \\( np<5 \\) the binomial is noticeably right-skewed and bunched near \\( 0 \\), so a symmetric Normal curve fits poorly, especially in the tail probability requested." },
        { stepNumber: 4, description: "State the appropriate method instead.", workingLatex: "n = 15 \\text{ small} \\Rightarrow \\text{use the exact binomial } P(X\\le 6) = \\sum_{k=0}^{6}\\binom{15}{k}0.3^{k}0.7^{15-k}", explanation: "Because \\( n \\) is small and \\( p \\) is not extreme, the exact binomial (e.g. from tables or a calculator) is both feasible and accurate, so no approximation is needed." }
      ],
      finalAnswer: "\\( np = 4.5 < 5 \\), so the Normal approximation is not appropriate; use the exact binomial instead.",
    },
  },
  {
    id: "y2na-064",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 64",
    difficulty: "Challenge",
    questionText: "On each of \\( 150 \\) independent days a machine has probability \\( 0.4 \\) of needing a reset, so \\( X\\sim B(150,0.4) \\) is the number of reset days in a period. Using a Normal approximation with a continuity correction, find the smallest integer \\( k \\) for which \\( P(X\\ge k)\\le 0.05 \\).",
    questionMafs: `<Mafs viewBox={{ x: [36, 84], y: [-0.0106, 0.0785] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 6 }} yAxis={{ lines: false }} />
  <Polygon points={[[70.5,0.0144],[70.7813,0.0132],[71.0625,0.0122],[71.3438,0.0111],[71.625,0.0102],[71.9063,0.0093],[72.1875,0.0084],[72.4688,0.0077],[72.75,0.007],[73.0313,0.0063],[73.3125,0.0057],[73.5938,0.0051],[73.875,0.0046],[74.1563,0.0041],[74.4375,0.0037],[74.7188,0.0033],[75,0.0029],[75.2813,0.0026],[75.5625,0.0023],[75.8438,0.002],[76.125,0.0018],[76.4063,0.0016],[76.6875,0.0014],[76.9688,0.0012],[77.25,0.0011],[77.5313,0.0009],[77.8125,0.0008],[78.0938,0.0007],[78.375,0.0006],[78.6563,0.0005],[78.9375,0.0005],[79.2188,0.0004],[79.5,0.0003],[79.7813,0.0003],[80.0625,0.0002],[80.3438,0.0002],[80.625,0.0002],[80.9063,0.0002],[81.1875,0.0001],[81.4688,0.0001],[81.75,0.0001],[82.0313,0.0001],[82.3125,0.0001],[82.5938,0.0001],[82.875,0],[83.1563,0],[83.4375,0],[83.7188,0],[84,0],[84,0],[70.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-60)**2)/(2*6*6))/(6*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[60, 0]} point2={[60, 0.0665]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[70.5, 0]} point2={[70.5, 0.0144]} color="var(--mafs-fg-orange)" />
  <Text x={60} y={0.073} attach="n">μ = 60</Text>
  <Text x={70.5} y={-0.0053} attach="s">70.5</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "inverse threshold", "continuity correction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the approximating Normal parameters.", workingLatex: "\\mu = np = 150\\times 0.4 = 60,\\quad \\sigma^2 = np(1-p) = 60\\times 0.6 = 36,\\quad \\sigma = 6", explanation: "Both \\( np=60 \\) and \\( n(1-p)=90 \\) are large, so \\( Y\\sim N(60,36) \\) is valid." },
        { stepNumber: 2, description: "Apply the continuity correction to \\( P(X\\ge k) \\).", workingLatex: "P(X\\ge k)\\approx P(Y > k - 0.5)\\le 0.05", explanation: "The discrete upper tail \\( X\\ge k \\) maps to \\( Y > k-0.5 \\)." },
        { stepNumber: 3, description: "Translate the tail condition into a \\( z \\)-value.", workingLatex: "P(Y > k-0.5)\\le 0.05 \\iff \\frac{(k-0.5) - 60}{6} \\ge z_{0.95} = 1.6449", explanation: "An upper tail of \\( 0.05 \\) corresponds to the \\( 95\\% \\) point \\( z = 1.6449 \\)." },
        { stepNumber: 4, description: "Solve for the corrected boundary.", workingLatex: "k - 0.5 \\ge 60 + 1.6449\\times 6 = 69.8691", explanation: "Rearranging gives the smallest corrected boundary that achieves the tail." },
        { stepNumber: 5, description: "Solve for \\( k \\) and round up to an integer.", workingLatex: "k \\ge 70.3691 \\Rightarrow k = 71", explanation: "Since \\( k \\) must be an integer and the inequality requires \\( k\\ge 70.37 \\), the smallest valid value is \\( k=71 \\)." },
        { stepNumber: 6, description: "Verify the chosen \\( k \\) meets the requirement.", workingLatex: "P(Y > 70.5) = P\\!\\left(Z > \\tfrac{70.5-60}{6}\\right) = P(Z>1.75) = 0.0401 \\le 0.05", explanation: "At \\( k=71 \\) the tail is \\( 0.0401\\le 0.05 \\); at \\( k=70 \\) it would exceed \\( 0.05 \\), confirming \\( k=71 \\) is smallest." }
      ],
      finalAnswer: "\\( k = 71 \\)",
      canonicalAnswer: "71",
    },
  },
  {
    id: "y2na-065",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 65",
    difficulty: "Challenge",
    questionText: "A batch contains \\( 500 \\) electronic components, each independently faulty with probability \\( 0.06 \\). Let \\( X \\) be the number of faulty components. (a) Using a Normal approximation with a continuity correction, estimate \\( P(X>40) \\). (b) The supplier claims that 'more than \\( 40 \\) faults in a batch is a typical occurrence'. Using your answer, comment on this claim.",
    questionMafs: `<Mafs viewBox={{ x: [8.7584, 51.2416], y: [-0.012, 0.0886] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 5.3104 }} yAxis={{ lines: false }} />
  <Polygon points={[[40.5,0.0106],[40.7238,0.0098],[40.9476,0.009],[41.1713,0.0082],[41.3951,0.0075],[41.6189,0.0069],[41.8427,0.0062],[42.0665,0.0057],[42.2903,0.0052],[42.5141,0.0047],[42.7378,0.0042],[42.9616,0.0038],[43.1854,0.0034],[43.4092,0.0031],[43.633,0.0028],[43.8568,0.0025],[44.0805,0.0022],[44.3043,0.002],[44.5281,0.0018],[44.7519,0.0016],[44.9757,0.0014],[45.1995,0.0012],[45.4232,0.0011],[45.647,0.001],[45.8708,0.0009],[46.0946,0.0008],[46.3184,0.0007],[46.5422,0.0006],[46.7659,0.0005],[46.9897,0.0004],[47.2135,0.0004],[47.4373,0.0003],[47.6611,0.0003],[47.8849,0.0003],[48.1086,0.0002],[48.3324,0.0002],[48.5562,0.0002],[48.78,0.0001],[49.0038,0.0001],[49.2276,0.0001],[49.4513,0.0001],[49.6751,0.0001],[49.8989,0.0001],[50.1227,0.0001],[50.3465,0],[50.5703,0],[50.794,0],[51.0178,0],[51.2416,0],[51.2416,0],[40.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-30)**2)/(2*5.3104*5.3104))/(5.3104*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[30, 0]} point2={[30, 0.0751]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[40.5, 0]} point2={[40.5, 0.0106]} color="var(--mafs-fg-orange)" />
  <Text x={30} y={0.0824} attach="n">μ = 30</Text>
  <Text x={40.5} y={-0.006} attach="s">40.5</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the approximating Normal parameters and confirm validity.", workingLatex: "\\mu = np = 500\\times 0.06 = 30,\\quad \\sigma^2 = np(1-p) = 30\\times 0.94 = 28.2", explanation: "Here \\( np = 30 \\) and \\( n(1-p) = 470 \\) are both large, so \\( Y\\sim N(30,28.2) \\) is appropriate even though \\( p \\) is fairly small." },
        { stepNumber: 2, description: "State the standard deviation.", workingLatex: "\\sigma = \\sqrt{28.2} = 5.3104", explanation: "The standard deviation of the approximation is \\( 5.3104 \\)." },
        { stepNumber: 3, description: "Apply the continuity correction to \\( P(X>40) \\).", workingLatex: "P(X>40) = P(X\\ge 41)\\approx P(Y > 40.5)", explanation: "Strictly more than \\( 40 \\) means \\( X\\ge 41 \\), which maps to \\( Y>40.5 \\)." },
        { stepNumber: 4, description: "Standardise and evaluate.", workingLatex: "z = \\frac{40.5 - 30}{5.3104} = 1.9773,\\quad P(Y>40.5) = 1 - \\Phi(1.9773) = 0.0240", explanation: "The estimated probability is \\( 0.0240 \\) to 4 d.p." },
        { stepNumber: 5, description: "Interpret the result against the supplier's claim.", workingLatex: "P(X>40)\\approx 0.0240 = 2.40\\%", explanation: "A probability of only about \\( 2.4\\% \\) means more than \\( 40 \\) faults happens in roughly \\( 1 \\) batch in \\( 40 \\); this is rare, not typical, so the supplier's claim is not supported by the model." }
      ],
      finalAnswer: "\\( P(X>40)\\approx 0.0240 \\), so more than \\( 40 \\) faults is rare (about \\( 2.4\\% \\)); the claim is not supported.",
    },
  },
  {
    id: "y2na-066",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 66",
    difficulty: "Challenge",
    questionText: "A web server handles \\( 2000 \\) independent requests, each failing with probability \\( 0.001 \\). Let \\( X \\) be the number of failures, so \\( X\\sim B(2000,0.001) \\). A colleague suggests approximating \\( X \\) by a Normal distribution to find \\( P(X\\le 3) \\). Critically evaluate this suggestion: state which approximation is appropriate and why, and carry out the more suitable approximation to estimate \\( P(X\\le 3) \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "poisson", "validity", "critique"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Evaluate the Normal validity condition.", workingLatex: "np = 2000\\times 0.001 = 2,\\quad n(1-p) = 1998", explanation: "Although \\( n \\) is large, \\( np = 2 < 5 \\): \\( p \\) is far below \\( 0.5 \\), so the distribution is strongly right-skewed and bunched near \\( 0 \\)." },
        { stepNumber: 2, description: "Reject the Normal approximation and identify the suitable one.", workingLatex: "n \\text{ large},\\ p \\text{ small},\\ np = 2 \\text{ moderate} \\Rightarrow \\text{Poisson}\\ \\text{Po}(\\lambda),\\ \\lambda = np = 2", explanation: "When \\( n \\) is large and \\( p \\) is small with \\( np \\) modest, the binomial is well approximated by a Poisson distribution with \\( \\lambda = np \\), not a Normal." },
        { stepNumber: 3, description: "Set up the Poisson calculation.", workingLatex: "P(X\\le 3) = e^{-2}\\left(\\frac{2^0}{0!} + \\frac{2^1}{1!} + \\frac{2^2}{2!} + \\frac{2^3}{3!}\\right)", explanation: "Sum the Poisson probabilities for \\( X = 0,1,2,3 \\) with \\( \\lambda = 2 \\)." },
        { stepNumber: 4, description: "Evaluate.", workingLatex: "P(X\\le 3) = e^{-2}\\,(1 + 2 + 2 + 1.3333) = e^{-2}\\times 6.3333 = 0.8571", explanation: "The Poisson estimate is \\( 0.8571 \\) to 4 d.p., matching the exact binomial \\( 0.8572 \\) almost perfectly; a Normal approximation (which would give about \\( 0.8557 \\)) is both unjustified and less reliable here." }
      ],
      finalAnswer: "\\( P(X\\le 3)\\approx 0.8571 \\) using \\( \\text{Po}(2) \\); the Normal approximation is inappropriate since \\( np = 2 < 5 \\).",
    },
  },
  {
    id: "y2na-067",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 67",
    difficulty: "Challenge",
    questionText: "A binomial random variable \\( X\\sim B(n,p) \\) is approximated by a Normal distribution with mean \\( 48 \\) and variance \\( 28.8 \\). (a) By relating the Normal parameters back to \\( np \\) and \\( np(1-p) \\), find the values of \\( n \\) and \\( p \\). (b) Hence use the approximation, with a continuity correction, to estimate \\( P(X\\le 45) \\).",
    questionMafs: `<Mafs viewBox={{ x: [26.5336, 69.4664], y: [-0.0119, 0.0877] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 5.3666 }} yAxis={{ lines: false }} />
  <Polygon points={[[26.5336,0],[26.9287,0],[27.3239,0],[27.719,0.0001],[28.1141,0.0001],[28.5093,0.0001],[28.9044,0.0001],[29.2995,0.0002],[29.6947,0.0002],[30.0898,0.0003],[30.4849,0.0004],[30.8801,0.0005],[31.2752,0.0006],[31.6703,0.0007],[32.0655,0.0009],[32.4606,0.0011],[32.8557,0.0014],[33.2509,0.0017],[33.646,0.0021],[34.0411,0.0025],[34.4363,0.003],[34.8314,0.0037],[35.2265,0.0044],[35.6217,0.0052],[36.0168,0.0061],[36.4119,0.0072],[36.8071,0.0084],[37.2022,0.0098],[37.5973,0.0114],[37.9925,0.0131],[38.3876,0.0149],[38.7827,0.017],[39.1779,0.0192],[39.573,0.0217],[39.9681,0.0243],[40.3633,0.027],[40.7584,0.0299],[41.1535,0.0329],[41.5487,0.0361],[41.9438,0.0393],[42.3389,0.0426],[42.7341,0.0459],[43.1292,0.0492],[43.5243,0.0525],[43.9195,0.0557],[44.3146,0.0587],[44.7097,0.0616],[45.1049,0.0643],[45.5,0.0667],[45.5,0],[26.5336,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-48)**2)/(2*5.3666*5.3666))/(5.3666*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[48, 0]} point2={[48, 0.0743]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[45.5, 0]} point2={[45.5, 0.0667]} color="var(--mafs-fg-orange)" />
  <Text x={48} y={0.0816} attach="n">μ = 48</Text>
  <Text x={45.5} y={-0.0059} attach="s">45.5</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "mean variance", "continuity correction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the Normal parameters in terms of the binomial mean and variance.", workingLatex: "np = 48,\\qquad np(1-p) = 28.8", explanation: "The approximating Normal has mean \\( np \\) and variance \\( np(1-p) \\)." },
        { stepNumber: 2, description: "Divide the variance equation by the mean equation to isolate \\( (1-p) \\).", workingLatex: "1 - p = \\frac{np(1-p)}{np} = \\frac{28.8}{48} = 0.6", explanation: "Dividing eliminates \\( n \\) and leaves \\( 1-p \\)." },
        { stepNumber: 3, description: "Solve for \\( p \\) and then \\( n \\).", workingLatex: "p = 0.4,\\qquad n = \\frac{48}{p} = \\frac{48}{0.4} = 120", explanation: "Hence \\( X\\sim B(120,0.4) \\)." },
        { stepNumber: 4, description: "State the standard deviation and apply the continuity correction.", workingLatex: "\\sigma = \\sqrt{28.8} = 5.3666,\\quad P(X\\le 45)\\approx P(Y < 45.5)", explanation: "The event \\( X\\le 45 \\) maps to \\( Y<45.5 \\)." },
        { stepNumber: 5, description: "Standardise and evaluate.", workingLatex: "z = \\frac{45.5 - 48}{5.3666} = -0.4659,\\quad P(Y<45.5) = 0.3207", explanation: "The estimate is \\( 0.3207 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( n = 120,\\ p = 0.4 \\); \\( P(X\\le 45)\\approx 0.3207 \\)",
      canonicalAnswer: "0.3207",
    },
  },
  {
    id: "y2na-068",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 68",
    difficulty: "Challenge",
    questionText: "A fair coin is tossed \\( 100 \\) times and \\( X\\sim B(100,0.5) \\) is the number of heads. (a) Use a Normal approximation with a continuity correction to estimate \\( P(X = 50) \\). (b) Explain why any attempt to estimate this single-value probability without a continuity correction must fail, and state the size of error that omitting the correction would produce here (the exact value is \\( 0.0796 \\)).",
    questionMafs: `<Mafs viewBox={{ x: [30, 70], y: [-0.0128, 0.0942] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 5 }} yAxis={{ lines: false }} />
  <Polygon points={[[49.5,0.0794],[49.5208,0.0794],[49.5417,0.0795],[49.5625,0.0795],[49.5833,0.0795],[49.6042,0.0795],[49.625,0.0796],[49.6458,0.0796],[49.6667,0.0796],[49.6875,0.0796],[49.7083,0.0797],[49.7292,0.0797],[49.75,0.0797],[49.7708,0.0797],[49.7917,0.0797],[49.8125,0.0797],[49.8333,0.0797],[49.8542,0.0798],[49.875,0.0798],[49.8958,0.0798],[49.9167,0.0798],[49.9375,0.0798],[49.9583,0.0798],[49.9792,0.0798],[50,0.0798],[50.0208,0.0798],[50.0417,0.0798],[50.0625,0.0798],[50.0833,0.0798],[50.1042,0.0798],[50.125,0.0798],[50.1458,0.0798],[50.1667,0.0797],[50.1875,0.0797],[50.2083,0.0797],[50.2292,0.0797],[50.25,0.0797],[50.2708,0.0797],[50.2917,0.0797],[50.3125,0.0796],[50.3333,0.0796],[50.3542,0.0796],[50.375,0.0796],[50.3958,0.0795],[50.4167,0.0795],[50.4375,0.0795],[50.4583,0.0795],[50.4792,0.0794],[50.5,0.0794],[50.5,0],[49.5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-50)**2)/(2*5*5))/(5*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[50, 0]} point2={[50, 0.0798]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[49.5, 0]} point2={[49.5, 0.0794]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[50.5, 0]} point2={[50.5, 0.0794]} color="var(--mafs-fg-orange)" />
  <Text x={50} y={0.0876} attach="n">μ = 50</Text>
  <Text x={49.5} y={-0.0064} attach="s">49.5</Text>
  <Text x={50.5} y={-0.0064} attach="s">50.5</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "single value", "error"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the approximating Normal distribution.", workingLatex: "\\mu = np = 100\\times 0.5 = 50,\\quad \\sigma^2 = np(1-p) = 25,\\quad Y\\sim N(50,25),\\ \\sigma = 5", explanation: "With \\( np = n(1-p) = 50 \\), the approximation is valid and symmetric." },
        { stepNumber: 2, description: "Apply the continuity correction to the single value \\( X = 50 \\).", workingLatex: "P(X = 50)\\approx P(49.5 < Y < 50.5)", explanation: "A single integer \\( X=50 \\) corresponds to the bar from \\( 49.5 \\) to \\( 50.5 \\) under the continuous curve." },
        { stepNumber: 3, description: "Standardise both boundaries.", workingLatex: "z_1 = \\frac{49.5 - 50}{5} = -0.1,\\quad z_2 = \\frac{50.5 - 50}{5} = 0.1", explanation: "The corrected interval is narrow and symmetric about the mean." },
        { stepNumber: 4, description: "Evaluate the probability.", workingLatex: "P(49.5<Y<50.5) = \\Phi(0.1) - \\Phi(-0.1) = 0.5398 - 0.4602 = 0.0797", explanation: "The corrected estimate \\( 0.0797 \\) closely matches the exact \\( 0.0796 \\)." },
        { stepNumber: 5, description: "Explain the failure of the uncorrected approach and quantify the error.", workingLatex: "P(Y = 50) = 0 \\Rightarrow \\text{error} = |0 - 0.0796| = 0.0796", explanation: "A continuous distribution assigns probability \\( 0 \\) to any exact value, so without the correction the estimate is \\( 0 \\), giving an error equal to the whole true probability, \\( 0.0796 \\). The correction is essential precisely because it converts the point into an interval of positive width." }
      ],
      finalAnswer: "\\( P(X=50)\\approx 0.0797 \\); omitting the correction gives \\( 0 \\), an error of \\( 0.0796 \\).",
      canonicalAnswer: "0.0797",
    },
  },
  {
    id: "y2na-069",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 69",
    difficulty: "Challenge",
    questionText: "A grower sows \\( 300 \\) seeds, each germinating independently with probability \\( 0.85 \\). Let \\( X \\) be the number that germinate. (a) Using a Normal approximation with a continuity correction, estimate \\( P(X < 250) \\). (b) The grower needs at least \\( 250 \\) seedlings to fill an order. Interpret your answer in this context, and state whether the order is likely to be met.",
    questionMafs: `<Mafs viewBox={{ x: [230.2612, 279.7388], y: [-0.0103, 0.0761] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 6.1847 }} yAxis={{ lines: false }} />
  <Polygon points={[[230.2612,0],[230.662,0],[231.0628,0],[231.4636,0],[231.8644,0.0001],[232.2652,0.0001],[232.6661,0.0001],[233.0669,0.0001],[233.4677,0.0002],[233.8685,0.0002],[234.2693,0.0002],[234.6701,0.0003],[235.0709,0.0004],[235.4717,0.0004],[235.8725,0.0005],[236.2733,0.0007],[236.6741,0.0008],[237.0749,0.001],[237.4758,0.0012],[237.8766,0.0014],[238.2774,0.0017],[238.6782,0.002],[239.079,0.0023],[239.4798,0.0028],[239.8806,0.0032],[240.2814,0.0038],[240.6822,0.0044],[241.083,0.0051],[241.4838,0.0059],[241.8846,0.0068],[242.2855,0.0078],[242.6863,0.0089],[243.0871,0.0101],[243.4879,0.0114],[243.8887,0.0128],[244.2895,0.0144],[244.6903,0.0161],[245.0911,0.0179],[245.4919,0.0198],[245.8927,0.0218],[246.2935,0.0239],[246.6943,0.0262],[247.0952,0.0285],[247.496,0.0309],[247.8968,0.0334],[248.2976,0.0359],[248.6984,0.0384],[249.0992,0.0409],[249.5,0.0434],[249.5,0],[230.2612,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-255)**2)/(2*6.1847*6.1847))/(6.1847*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[255, 0]} point2={[255, 0.0645]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[249.5, 0]} point2={[249.5, 0.0434]} color="var(--mafs-fg-orange)" />
  <Text x={255} y={0.0708} attach="n">μ = 255</Text>
  <Text x={249.5} y={-0.0052} attach="s">249.5</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the approximating Normal parameters and confirm validity.", workingLatex: "\\mu = np = 300\\times 0.85 = 255,\\quad \\sigma^2 = np(1-p) = 255\\times 0.15 = 38.25", explanation: "Here \\( np = 255 \\) and \\( n(1-p) = 45 \\) are both large, so \\( Y\\sim N(255,38.25) \\) is appropriate." },
        { stepNumber: 2, description: "State the standard deviation.", workingLatex: "\\sigma = \\sqrt{38.25} = 6.1847", explanation: "The approximation has standard deviation \\( 6.1847 \\)." },
        { stepNumber: 3, description: "Apply the continuity correction to \\( P(X<250) \\).", workingLatex: "P(X<250) = P(X\\le 249)\\approx P(Y < 249.5)", explanation: "Strictly less than \\( 250 \\) means \\( X\\le 249 \\), which maps to \\( Y<249.5 \\)." },
        { stepNumber: 4, description: "Standardise and evaluate.", workingLatex: "z = \\frac{249.5 - 255}{6.1847} = -0.8893,\\quad P(Y<249.5) = 0.1869", explanation: "The estimated probability of fewer than \\( 250 \\) germinating is \\( 0.1869 \\) to 4 d.p." },
        { stepNumber: 5, description: "Interpret in context.", workingLatex: "P(X\\ge 250) = 1 - 0.1869 = 0.8131", explanation: "The order is filled when \\( X\\ge 250 \\). This has probability about \\( 0.8131 \\), so the order is likely to be met (roughly an \\( 81\\% \\) chance), though there is still an \\( 18.7\\% \\) risk of falling short." }
      ],
      finalAnswer: "\\( P(X<250)\\approx 0.1869 \\), so \\( P(X\\ge 250)\\approx 0.8131 \\); the order is likely (about \\( 81\\% \\)) to be met.",
    },
  },
  {
    id: "y2na-070",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 70",
    difficulty: "Challenge",
    questionText: "In a quality survey, each of \\( 400 \\) independently selected items is non-conforming with probability \\( 0.2 \\), so \\( X\\sim B(400,0.2) \\). Using a Normal approximation, find values \\( a \\) and \\( b \\) (symmetric about the mean) such that the central region \\( P(a\\le X\\le b)\\approx 0.90 \\). Give \\( a \\) and \\( b \\) as integers, applying a continuity correction.",
    questionMafs: `<Mafs viewBox={{ x: [48, 112], y: [-0.008, 0.0588] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 8 }} yAxis={{ lines: false }} />
  <Polygon points={[[66.8412,0.0129],[67.3895,0.0144],[67.9378,0.016],[68.4861,0.0177],[69.0343,0.0195],[69.5826,0.0214],[70.1309,0.0233],[70.6792,0.0253],[71.2275,0.0273],[71.7758,0.0294],[72.324,0.0315],[72.8723,0.0335],[73.4206,0.0356],[73.9689,0.0375],[74.5172,0.0394],[75.0655,0.0412],[75.6137,0.0429],[76.162,0.0444],[76.7103,0.0458],[77.2586,0.047],[77.8069,0.048],[78.3552,0.0488],[78.9034,0.0494],[79.4517,0.0498],[80,0.0499],[80.5483,0.0498],[81.0966,0.0494],[81.6449,0.0488],[82.1931,0.048],[82.7414,0.047],[83.2897,0.0458],[83.838,0.0444],[84.3863,0.0429],[84.9346,0.0412],[85.4828,0.0394],[86.0311,0.0375],[86.5794,0.0356],[87.1277,0.0335],[87.676,0.0315],[88.2243,0.0294],[88.7725,0.0273],[89.3208,0.0253],[89.8691,0.0233],[90.4174,0.0214],[90.9657,0.0195],[91.5139,0.0177],[92.0622,0.016],[92.6105,0.0144],[93.1588,0.0129],[93.1588,0],[66.8412,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-80)**2)/(2*8*8))/(8*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[80, 0]} point2={[80, 0.0499]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[66.8412, 0]} point2={[66.8412, 0.0129]} color="var(--mafs-fg-orange)" />
  <Line.Segment point1={[93.1588, 0]} point2={[93.1588, 0.0129]} color="var(--mafs-fg-orange)" />
  <Text x={80} y={0.0547} attach="n">μ = 80</Text>
  <Text x={66.8412} y={-0.004} attach="s">66.8412</Text>
  <Text x={93.1588} y={-0.004} attach="s">93.1588</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "inverse", "central interval", "continuity correction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the approximating Normal parameters.", workingLatex: "\\mu = np = 400\\times 0.2 = 80,\\quad \\sigma^2 = np(1-p) = 80\\times 0.8 = 64,\\quad \\sigma = 8", explanation: "Both \\( np = 80 \\) and \\( n(1-p) = 320 \\) are large, so \\( Y\\sim N(80,64) \\) is valid." },
        { stepNumber: 2, description: "Identify the \\( z \\)-values for a central \\( 90\\% \\).", workingLatex: "P(-z < Z < z) = 0.90 \\Rightarrow z = z_{0.95} = 1.6449", explanation: "A central \\( 90\\% \\) leaves \\( 5\\% \\) in each tail, giving \\( z = 1.6449 \\)." },
        { stepNumber: 3, description: "Find the continuous boundaries of the central region.", workingLatex: "\\mu \\pm z\\sigma = 80 \\pm 1.6449\\times 8 = 80 \\pm 13.1588", explanation: "This gives lower boundary \\( 66.8412 \\) and upper boundary \\( 93.1588 \\) on the continuous scale." },
        { stepNumber: 4, description: "Reverse the continuity correction to obtain integer bounds.", workingLatex: "a - 0.5 \\le 66.8412 \\Rightarrow a \\le 67.3412;\\qquad b + 0.5 \\ge 93.1588 \\Rightarrow b \\ge 92.6588", explanation: "For the inclusive integer interval to capture at least the central \\( 90\\% \\), the corrected boundaries \\( a-0.5 \\) and \\( b+0.5 \\) must lie at or outside the continuous limits." },
        { stepNumber: 5, description: "Choose the integer values.", workingLatex: "a = 67,\\qquad b = 93", explanation: "Rounding inward to integers consistent with the inequalities gives \\( a = 67 \\) and \\( b = 93 \\), symmetric about the mean \\( 80 \\) (since \\( 80-67 = 13 = 93-80 \\))." },
        { stepNumber: 6, description: "Confirm the central probability.", workingLatex: "P(66.5 < Y < 93.5) = \\Phi(1.6875) - \\Phi(-1.6875) = 0.9085 \\approx 0.90", explanation: "With the continuity correction the integer interval \\( 67\\le X\\le 93 \\) carries probability about \\( 0.9085 \\), close to the required \\( 0.90 \\)." }
      ],
      finalAnswer: "\\( a = 67,\\ b = 93 \\)",
      canonicalAnswer: "a=67, b=93",
    },
  },
  {
    id: "y2na-071",
    topicRef: "y2na",
    topicTitle: "Normal Approximation to the Binomial 71",
    difficulty: "Challenge",
    questionText: "For \\( X\\sim B(1000,0.5) \\) the probability \\( P(X\\le 480) \\) is to be estimated by a Normal approximation. The exact binomial value is \\( 0.1087 \\). (a) Compute the Normal estimate both with and without a continuity correction. (b) Hence discuss whether the continuity correction is worth applying when \\( n \\) is this large, justifying your answer with the sizes of the two errors.",
    questionMafs: `<Mafs viewBox={{ x: [436.7544, 563.2456], y: [-0.004, 0.0298] }} height={250}>
  <Coordinates.Cartesian xAxis={{ lines: 15.8114 }} yAxis={{ lines: false }} />
  <Polygon points={[[436.7544,0],[437.6658,0],[438.5771,0],[439.4885,0],[440.3999,0],[441.3112,0],[442.2226,0],[443.134,0],[444.0453,0],[444.9567,0.0001],[445.8681,0.0001],[446.7794,0.0001],[447.6908,0.0001],[448.6022,0.0001],[449.5135,0.0002],[450.4249,0.0002],[451.3363,0.0002],[452.2476,0.0003],[453.159,0.0003],[454.0704,0.0004],[454.9817,0.0004],[455.8931,0.0005],[456.8045,0.0006],[457.7158,0.0007],[458.6272,0.0008],[459.5386,0.001],[460.4499,0.0011],[461.3613,0.0013],[462.2727,0.0015],[463.184,0.0017],[464.0954,0.0019],[465.0068,0.0022],[465.9181,0.0025],[466.8295,0.0028],[467.7409,0.0031],[468.6522,0.0035],[469.5636,0.004],[470.475,0.0044],[471.3863,0.0049],[472.2977,0.0054],[473.2091,0.006],[474.1204,0.0066],[475.0318,0.0073],[475.9432,0.0079],[476.8545,0.0086],[477.7659,0.0094],[478.6773,0.0102],[479.5886,0.011],[480.5,0.0118],[480.5,0],[436.7544,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} strokeOpacity={0} />
  <Plot.OfX y={(x) => Math.exp(-((x-500)**2)/(2*15.8114*15.8114))/(15.8114*Math.sqrt(2*Math.PI))} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[500, 0]} point2={[500, 0.0252]} color="var(--mafs-fg-accent)" opacity={0.35} />
  <Line.Segment point1={[480.5, 0]} point2={[480.5, 0.0118]} color="var(--mafs-fg-orange)" />
  <Text x={500} y={0.0277} attach="n">μ = 500</Text>
  <Text x={480.5} y={-0.002} attach="s">480.5</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal approximation", "binomial", "continuity correction", "error", "critique"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the approximating Normal parameters.", workingLatex: "\\mu = np = 500,\\quad \\sigma^2 = np(1-p) = 250,\\quad \\sigma = \\sqrt{250} = 15.8114", explanation: "With \\( np = n(1-p) = 500 \\), the Normal approximation \\( Y\\sim N(500,250) \\) is highly suitable." },
        { stepNumber: 2, description: "Estimate with the continuity correction.", workingLatex: "P(X\\le 480)\\approx P(Y<480.5),\\quad z = \\frac{480.5-500}{15.8114} = -1.2333,\\quad P = 0.1087", explanation: "The corrected estimate is \\( 0.1087 \\) to 4 d.p." },
        { stepNumber: 3, description: "Estimate without the continuity correction.", workingLatex: "P(Y<480),\\quad z = \\frac{480-500}{15.8114} = -1.2649,\\quad P = 0.1030", explanation: "The uncorrected estimate is \\( 0.1030 \\) to 4 d.p." },
        { stepNumber: 4, description: "Compare both errors against the exact value \\( 0.1087 \\).", workingLatex: "|0.1087 - 0.1087| = 0.0000,\\quad |0.1030 - 0.1087| = 0.0057", explanation: "The corrected estimate is essentially exact to 4 d.p.; the uncorrected one is out by \\( 0.0057 \\)." },
        { stepNumber: 5, description: "Discuss whether the correction is worthwhile.", workingLatex: "\\text{relative size of correction} = \\frac{0.5}{\\sigma} = \\frac{0.5}{15.8114} = 0.0316", explanation: "The half-unit shift is only \\( 0.0316 \\) of a standard deviation, so its effect shrinks as \\( n \\) grows. Even so, it still removes an error of \\( 0.0057 \\) here, which is non-trivial for a probability near \\( 0.1 \\), so the correction remains worth applying. The correction never hurts and costs nothing, so it should always be used." }
      ],
      finalAnswer: "\\( P(X\\le 480)\\approx 0.1087 \\) (with correction, error \\( 0.0000 \\)); without it \\( 0.1030 \\) (error \\( 0.0057 \\)) — the correction is still worthwhile.",
    },
  },
];
