/**
 * Topic: Real-life and non-standard graphs
 * Ref: ga32  (DfE A14)
 * Strand: Algebra — GCSE Maths (Foundation and Higher tiers)
 *
 * Coverage: interpreting real-life graphs where the AXES carry units, so the
 *   GRADIENT and INTERCEPT both mean something physical. Key ideas used
 *   throughout:
 *     - distance–time graph: gradient = speed; horizontal segment = stationary;
 *       steeper = faster; a straight segment = constant speed.
 *     - speed–time (velocity–time) graph: gradient = acceleration; a horizontal
 *       segment = constant speed; the AREA under the graph = distance travelled.
 *     - conversion graph: a straight line through the origin; read across/up in
 *       EITHER direction, or use the gradient as the conversion rate.
 *     - cost graph: gradient = price per unit (£ per item / per minute / per
 *       kWh); the vertical intercept = a fixed standing charge.
 *     - container filling / depth–time: the SHAPE of the depth–time curve
 *       encodes how the cross-section width changes (narrow ⇒ fast rise ⇒ steep;
 *       wide ⇒ slow rise ⇒ shallow; constant width ⇒ straight line).
 *   Because no figure renders, every graph is described fully in words and
 *   coordinates in the stem, so each question is answerable from the text alone.
 *
 *   Clusters:
 *     (1) read values off a distance–time graph;
 *     (2) speed as the gradient of a distance–time graph (incl. unit changes);
 *     (3) conversion graphs read both ways + rate;
 *     (4) interpret speed/velocity–time segments (acceleration = gradient);
 *     (5) distance as the AREA under a speed–time graph;
 *     (6) cost graphs — £ per unit gradient and fixed-charge intercept;
 *     (7) container filling / depth–time shape matching;
 *     (8) multi-stage journeys / synoptic problems.
 *   Solutions stress WHY: what the gradient measures here, what an area
 *   measures here, and a units check on every rate.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga32-001 .. ga32-004  (4)   read off / one-step rate
 *   - Standard:   ga32-005 .. ga32-018  (14)
 *   - Challenge:  ga32-019 .. ga32-030  (12)
 * Id range: ga32-001 .. ga32-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem, with units written in words; workingLatex is
 *   RAW LaTeX (no \\(...\\) or $...$ wrappers) and uses \\frac (never \\tfrac)
 *   and \\cdot for multiplication, per hard project rules.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga32-001",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "A distance–time graph for a cyclist passes through \\((0,\\,0)\\) and rises in a straight line to \\((4,\\,40)\\), where time is in hours and distance is in kilometres. How far has the cyclist travelled after \\(4\\) hours?",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["real-life graphs", "distance-time graph", "read off value"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Decide which axis carries the distance.",
          workingLatex: "\\text{vertical axis} = \\text{distance (km)}, \\quad \\text{horizontal axis} = \\text{time (h)}",
          explanation:
            "On any distance–time graph the vertical axis is distance and the horizontal axis is time. So to answer a 'how far' question we read a vertical (distance) value, not a horizontal one.",
        },
        {
          stepNumber: 2,
          description: "Locate the point at time 4 hours.",
          workingLatex: "t = 4 \\;\\Rightarrow\\; \\text{point } (4,\\,40)",
          explanation:
            "We want the moment t = 4 h. The graph reaches the point (4, 40) there, so the distance coordinate (the second number) is 40.",
        },
        {
          stepNumber: 3,
          description: "Read the distance and attach the units.",
          workingLatex: "\\text{distance} = 40 \\text{ km}",
          mafs: `<Mafs viewBox={{ x: [-0.5, 5], y: [-5, 48] }} height={280}>
  <Coordinates.Cartesian />
  <Polyline points={[[0, 0], [4, 40]]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[4, 0]} point2={[4, 40]} color="var(--mafs-line-color)" opacity={0.4} />
  <Line.Segment point1={[0, 40]} point2={[4, 40]} color="var(--mafs-line-color)" opacity={0.4} />
  <Point x={4} y={40} color="var(--mafs-fg-blue)" />
  <Text x={4} y={43} attach="n" color="var(--mafs-fg-blue)">(4, 40)</Text>
  <Text x={3.6} y={5} attach="e">time (h)</Text>
  <Text x={0.3} y={44} attach="e">distance (km)</Text>
</Mafs>`,
          explanation:
            "The vertical axis is measured in kilometres, so after 4 hours the cyclist has travelled 40 km. Always copy the unit from the axis label rather than leaving the answer as a bare number.",
        },
      ],
      finalAnswer: "\\(40\\) km",
      canonicalAnswer: "40",
    },
  },
  {
    id: "ga32-002",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "A conversion graph between pounds (£) and euros (€) is a straight line through the origin passing through \\((10,\\,12)\\), where the horizontal axis is pounds and the vertical axis is euros. Use the graph to convert \\(£5\\) into euros.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["real-life graphs", "conversion graph", "read off value"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the point that fixes the exchange rate.",
          workingLatex: "(10,\\,12): \\quad £10 \\;\\rightarrow\\; €12",
          explanation:
            "The line passes through the origin and (10, 12), so £10 on the horizontal axis maps up to €12 on the vertical axis. That single point pins down the whole line.",
        },
        {
          stepNumber: 2,
          description: "Find how many euros 1 pound is worth (the gradient).",
          workingLatex: "\\frac{12 \\text{ euro}}{10 \\text{ pound}} = 1.2 \\text{ euro per pound}",
          explanation:
            "Dividing euros by pounds gives the rate: €1.2 for every £1. Because the line goes through the origin, this rate is exactly the gradient of the line, and it is the same at every point.",
        },
        {
          stepNumber: 3,
          description: "Convert £5 using the rate.",
          workingLatex: "5 \\cdot 1.2 = 6 \\text{ euro}",
          mafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [-1, 13] }} height={280}>
  <Coordinates.Cartesian />
  <Line.Segment point1={[0, 0]} point2={[10, 12]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[5, 0]} point2={[5, 6]} color="var(--mafs-line-color)" opacity={0.4} />
  <Line.Segment point1={[0, 6]} point2={[5, 6]} color="var(--mafs-line-color)" opacity={0.4} />
  <Point x={5} y={6} color="var(--mafs-fg-blue)" />
  <Text x={5} y={6.7} attach="n" color="var(--mafs-fg-blue)">(5, 6)</Text>
  <Text x={9} y={1.2} attach="e">pounds</Text>
  <Text x={0.3} y={12.3} attach="e">euros</Text>
</Mafs>`,
          explanation:
            "Multiply the number of pounds by 1.2 euros per pound: 5 × 1.2 = 6. This matches reading up from £5 on the graph to the line and then across to €6.",
        },
      ],
      finalAnswer: "\\(€6\\)",
      canonicalAnswer: "6",
    },
  },
  {
    id: "ga32-003",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "A speed–time graph for a car is horizontal at a height of \\(15\\) from time \\(0\\) to time \\(20\\), where time is in seconds and speed is in metres per second. What is the car's acceleration during this time?",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["real-life graphs", "speed-time graph", "acceleration", "constant speed"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret a horizontal speed–time segment.",
          workingLatex: "\\text{horizontal line} \\;\\Rightarrow\\; \\text{speed constant at } 15 \\text{ m/s}",
          explanation:
            "On a speed–time graph a flat (horizontal) line means the speed is not changing — the car holds a steady 15 m/s from t = 0 to t = 20.",
        },
        {
          stepNumber: 2,
          description: "Recall that acceleration is the gradient here.",
          workingLatex: "a = \\text{gradient} = \\frac{\\text{change in speed}}{\\text{change in time}}",
          explanation:
            "Acceleration measures how quickly speed changes, which on a speed–time graph is the gradient. So we need the rise (change in speed) over the run (change in time).",
        },
        {
          stepNumber: 3,
          description: "Compute the gradient of the flat line.",
          workingLatex: "a = \\frac{15 - 15}{20 - 0} = \\frac{0}{20} = 0",
          mafs: `<Mafs viewBox={{ x: [-1, 22], y: [-2, 20] }} height={280}>
  <Coordinates.Cartesian />
  <Line.Segment point1={[0, 15]} point2={[20, 15]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={15} color="var(--mafs-fg-blue)" />
  <Point x={20} y={15} color="var(--mafs-fg-blue)" />
  <Text x={10} y={16.2} attach="n" color="var(--mafs-fg-blue)">constant 15 m/s</Text>
  <Text x={16} y={2} attach="e">time (s)</Text>
  <Text x={0.5} y={19} attach="e">speed (m/s)</Text>
</Mafs>`,
          explanation:
            "The speed starts and ends at 15, so the rise is 15 − 15 = 0. A zero rise gives a zero gradient, so the acceleration is 0 m/s²: a constant speed means no acceleration.",
        },
      ],
      finalAnswer: "\\(0\\) m/s²",
      canonicalAnswer: "0",
    },
  },
  {
    id: "ga32-004",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "A taxi fare graph is a straight line. At \\(0\\) miles the fare is \\(£3\\) and at \\(4\\) miles the fare is \\(£11\\), where the horizontal axis is distance in miles and the vertical axis is fare in pounds. What is the fixed charge (the fare before any distance is travelled)?",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["real-life graphs", "cost graph", "intercept", "fixed charge"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Translate 'fixed charge' into a graph feature.",
          workingLatex: "\\text{fixed charge} = \\text{fare at } 0 \\text{ miles} = \\text{vertical intercept}",
          explanation:
            "The fixed charge is what you pay before travelling any distance, i.e. the fare when distance = 0. On the graph that is where the line meets the vertical axis — the vertical intercept.",
        },
        {
          stepNumber: 2,
          description: "Read the fare at 0 miles.",
          workingLatex: "\\text{at } 0 \\text{ miles}: \\quad \\text{fare} = £3",
          explanation:
            "The question tells us the fare at 0 miles is £3, so the line crosses the vertical axis at 3. The £11 at 4 miles is not needed here — that point only matters if we wanted the cost per mile.",
        },
        {
          stepNumber: 3,
          description: "State the fixed charge.",
          workingLatex: "\\text{fixed charge} = £3",
          mafs: `<Mafs viewBox={{ x: [-0.5, 5], y: [-1.5, 13] }} height={280}>
  <Coordinates.Cartesian />
  <Line.Segment point1={[0, 3]} point2={[4, 11]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={3} color="var(--mafs-fg-blue)" />
  <Text x={0.2} y={3} attach="e" color="var(--mafs-fg-blue)">(0, 3) fixed charge</Text>
  <Point x={4} y={11} color="var(--mafs-fg-accent)" />
  <Text x={3.6} y={1} attach="e">distance (miles)</Text>
  <Text x={0.3} y={12.3} attach="e">fare (£)</Text>
</Mafs>`,
          explanation:
            "The vertical intercept of a cost graph is the standing/fixed charge, so the answer is £3.",
        },
      ],
      finalAnswer: "\\(£3\\)",
      canonicalAnswer: "3",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga32-005",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A distance–time graph passes through \\((0,\\,0)\\) and rises in a straight line to \\((3,\\,150)\\), where time is in hours and distance is in kilometres. Find the speed of the journey in kilometres per hour.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "distance-time graph", "speed from gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall that speed is the gradient of a distance–time graph.",
          workingLatex: "\\text{speed} = \\text{gradient} = \\frac{\\text{change in distance}}{\\text{change in time}}",
          explanation:
            "Speed is distance divided by time. The gradient of a distance–time graph is exactly (change in distance) ÷ (change in time), so the gradient gives the speed directly.",
        },
        {
          stepNumber: 2,
          description: "Read the change in distance from the two points.",
          workingLatex: "\\Delta \\text{distance} = 150 - 0 = 150 \\text{ km}",
          explanation:
            "Subtract the start distance from the end distance: from 0 km up to 150 km is a rise of 150 km. This is the 'rise' of the gradient.",
        },
        {
          stepNumber: 3,
          description: "Read the change in time from the two points.",
          workingLatex: "\\Delta \\text{time} = 3 - 0 = 3 \\text{ h}",
          explanation:
            "Subtract the start time from the end time: from 0 h to 3 h is a run of 3 hours. This is the 'run' of the gradient.",
        },
        {
          stepNumber: 4,
          description: "Divide to find the speed, keeping units.",
          workingLatex: "\\text{speed} = \\frac{150 \\text{ km}}{3 \\text{ h}} = 50 \\text{ km/h}",
          mafs: `<Mafs viewBox={{ x: [-0.4, 3.6], y: [-15, 165] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Polyline points={[[0, 0], [3, 150]]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0, 0]} point2={[3, 0]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[3, 0]} point2={[3, 150]} color="var(--mafs-fg-green)" />
  <Text x={1.5} y={-8} attach="s" color="var(--mafs-fg-green)">run = 3 h</Text>
  <Text x={3} y={75} attach="e" color="var(--mafs-fg-green)">rise = 150 km</Text>
  <Point x={3} y={150} color="var(--mafs-fg-blue)" />
  <Text x={2.8} y={3} attach="e">time (h)</Text>
  <Text x={0.2} y={158} attach="e">distance (km)</Text>
</Mafs>`,
          explanation:
            "150 km ÷ 3 h = 50 km/h. The units confirm a speed: kilometres divided by hours gives km/h, exactly what the question asked for.",
        },
      ],
      finalAnswer: "\\(50\\) km/h",
      canonicalAnswer: "50",
    },
  },
  {
    id: "ga32-006",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A runner's distance–time graph rises in a straight line from \\((0,\\,0)\\) to \\((40,\\,300)\\), where time is in seconds and distance is in metres. Find the runner's speed in metres per second.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "distance-time graph", "speed from gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Speed is the gradient of the distance–time graph.",
          workingLatex: "\\text{speed} = \\frac{\\text{change in distance}}{\\text{change in time}}",
          explanation:
            "The slope of a distance–time graph measures how much distance is covered per unit of time, which is exactly the speed. A single straight line means a single constant speed.",
        },
        {
          stepNumber: 2,
          description: "Read the change in distance.",
          workingLatex: "\\Delta \\text{distance} = 300 - 0 = 300 \\text{ m}",
          explanation:
            "The distance coordinate climbs from 0 m to 300 m between the two given points, a rise of 300 m.",
        },
        {
          stepNumber: 3,
          description: "Read the change in time.",
          workingLatex: "\\Delta \\text{time} = 40 - 0 = 40 \\text{ s}",
          explanation:
            "The time coordinate advances from 0 s to 40 s, a run of 40 s.",
        },
        {
          stepNumber: 4,
          description: "Divide to find the speed.",
          workingLatex: "\\text{speed} = \\frac{300 \\text{ m}}{40 \\text{ s}} = 7.5 \\text{ m/s}",
          mafs: `<Mafs viewBox={{ x: [-4, 44], y: [-30, 330] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Polyline points={[[0, 0], [40, 300]]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0, 0]} point2={[40, 0]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[40, 0]} point2={[40, 300]} color="var(--mafs-fg-green)" />
  <Text x={20} y={-15} attach="s" color="var(--mafs-fg-green)">run = 40 s</Text>
  <Text x={40} y={150} attach="e" color="var(--mafs-fg-green)">rise = 300 m</Text>
  <Point x={40} y={300} color="var(--mafs-fg-blue)" />
  <Text x={36} y={6} attach="e">time (s)</Text>
  <Text x={2} y={316} attach="e">distance (m)</Text>
</Mafs>`,
          explanation:
            "300 ÷ 40 = 7.5, so the runner's speed is 7.5 m/s. The units metres ÷ seconds give m/s, as required.",
        },
      ],
      finalAnswer: "\\(7.5\\) m/s",
      canonicalAnswer: "7.5",
    },
  },
  {
    id: "ga32-007",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A car's distance–time graph rises in a straight line from \\((0,\\,0)\\) to \\((30,\\,600)\\), where time is in seconds and distance is in metres. Find the car's speed in kilometres per hour.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "distance-time graph", "speed from gradient", "unit conversion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the speed in m/s as the gradient first.",
          workingLatex: "\\text{speed} = \\frac{600 \\text{ m}}{30 \\text{ s}} = 20 \\text{ m/s}",
          mafs: `<Mafs viewBox={{ x: [-3, 33], y: [-60, 660] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Polyline points={[[0, 0], [30, 600]]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0, 0]} point2={[30, 0]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[30, 0]} point2={[30, 600]} color="var(--mafs-fg-green)" />
  <Text x={15} y={-30} attach="s" color="var(--mafs-fg-green)">run = 30 s</Text>
  <Text x={30} y={300} attach="e" color="var(--mafs-fg-green)">rise = 600 m</Text>
  <Point x={30} y={600} color="var(--mafs-fg-blue)" />
  <Text x={27} y={12} attach="e">time (s)</Text>
  <Text x={1.5} y={632} attach="e">distance (m)</Text>
</Mafs>`,
          explanation:
            "The gradient of the distance–time graph is (600 m) ÷ (30 s) = 20 m/s, so the car travels 20 metres each second. We work in the graph's own units first, then convert.",
        },
        {
          stepNumber: 2,
          description: "Convert seconds to hours (multiply by 3600).",
          workingLatex: "20 \\text{ m/s} = 20 \\cdot 3600 \\text{ m per hour} = 72000 \\text{ m/h}",
          explanation:
            "There are 3600 seconds in an hour, so in one hour the car covers 20 × 3600 = 72000 metres. We multiply because there are many more seconds in an hour, so more metres are covered.",
        },
        {
          stepNumber: 3,
          description: "Convert metres to kilometres (divide by 1000).",
          workingLatex: "72000 \\text{ m/h} = \\frac{72000}{1000} \\text{ km/h} = 72 \\text{ km/h}",
          explanation:
            "1000 m = 1 km, so divide by 1000: 72000 m/h = 72 km/h. As a shortcut you can multiply any m/s value by 3.6 to get km/h, and 20 × 3.6 = 72 confirms this.",
        },
      ],
      finalAnswer: "\\(72\\) km/h",
      canonicalAnswer: "72",
    },
  },
  {
    id: "ga32-008",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A conversion graph between miles and kilometres is a straight line through the origin passing through \\((5,\\,8)\\), where the horizontal axis is miles and the vertical axis is kilometres. Use it to convert \\(80\\) kilometres into miles.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "conversion graph", "read off value", "reverse conversion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the conversion rate (km per mile) from the given point.",
          workingLatex: "\\frac{8 \\text{ km}}{5 \\text{ mile}} = 1.6 \\text{ km per mile}",
          explanation:
            "The line passes through (5, 8), so 5 miles equals 8 km. Dividing km by miles gives 1.6 km for every 1 mile — this is the gradient of the line.",
        },
        {
          stepNumber: 2,
          description: "Notice we are converting backwards (km to miles).",
          workingLatex: "\\text{miles} \\xrightarrow{\\times 1.6} \\text{km} \\quad\\Rightarrow\\quad \\text{km} \\xrightarrow{\\div 1.6} \\text{miles}",
          explanation:
            "Multiplying miles by 1.6 gives km, so to undo that and go from km back to miles we must do the reverse: divide by 1.6. On the graph this is reading ACROSS from 80 km to the line, then DOWN to the miles axis.",
        },
        {
          stepNumber: 3,
          description: "Divide 80 by the rate.",
          workingLatex: "\\text{miles} = \\frac{80 \\text{ km}}{1.6 \\text{ km per mile}} = 50",
          mafs: `<Mafs viewBox={{ x: [-5, 55], y: [-8, 88] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Line.Segment point1={[0, 0]} point2={[50, 80]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0, 80]} point2={[50, 80]} color="var(--mafs-line-color)" opacity={0.4} />
  <Line.Segment point1={[50, 0]} point2={[50, 80]} color="var(--mafs-line-color)" opacity={0.4} />
  <Point x={50} y={80} color="var(--mafs-fg-blue)" />
  <Text x={50} y={80} attach="nw" color="var(--mafs-fg-blue)">(50, 80)</Text>
  <Text x={42} y={4} attach="e">miles</Text>
  <Text x={2} y={84} attach="e">km</Text>
</Mafs>`,
          explanation:
            "80 ÷ 1.6 = 50, so 80 km is 50 miles. Check by going forwards: 50 miles × 1.6 = 80 km. ✓",
        },
      ],
      finalAnswer: "\\(50\\) miles",
      canonicalAnswer: "50",
    },
  },
  {
    id: "ga32-009",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A speed–time graph for a train rises in a straight line from \\((0,\\,0)\\) to \\((10,\\,25)\\), where time is in seconds and speed is in metres per second. Find the acceleration of the train.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "speed-time graph", "acceleration from gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "On a speed–time graph the gradient is the acceleration.",
          workingLatex: "a = \\text{gradient} = \\frac{\\text{change in speed}}{\\text{change in time}}",
          explanation:
            "Acceleration is the rate at which speed changes, which is the gradient of the speed–time graph. A straight rising line means a single constant acceleration.",
        },
        {
          stepNumber: 2,
          description: "Read the change in speed.",
          workingLatex: "\\Delta \\text{speed} = 25 - 0 = 25 \\text{ m/s}",
          explanation:
            "The speed rises from 0 to 25 m/s between the two points, a change of 25 m/s — the 'rise' of the gradient.",
        },
        {
          stepNumber: 3,
          description: "Read the change in time.",
          workingLatex: "\\Delta \\text{time} = 10 - 0 = 10 \\text{ s}",
          explanation:
            "The time advances from 0 to 10 s, a run of 10 s — the 'run' of the gradient.",
        },
        {
          stepNumber: 4,
          description: "Divide to find the acceleration.",
          workingLatex: "a = \\frac{25 \\text{ m/s}}{10 \\text{ s}} = 2.5 \\text{ m/s}^2",
          mafs: `<Mafs viewBox={{ x: [-1, 11], y: [-2.5, 27.5] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Polyline points={[[0, 0], [10, 25]]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0, 0]} point2={[10, 0]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[10, 0]} point2={[10, 25]} color="var(--mafs-fg-green)" />
  <Text x={5} y={-1.2} attach="s" color="var(--mafs-fg-green)">run = 10 s</Text>
  <Text x={10} y={12.5} attach="e" color="var(--mafs-fg-green)">rise = 25</Text>
  <Point x={10} y={25} color="var(--mafs-fg-blue)" />
  <Text x={8.5} y={0.6} attach="e">time (s)</Text>
  <Text x={0.4} y={26.5} attach="e">speed (m/s)</Text>
</Mafs>`,
          explanation:
            "25 ÷ 10 = 2.5. The units (m/s) ÷ s give m/s², the correct units for acceleration, so the train accelerates at 2.5 m/s².",
        },
      ],
      finalAnswer: "\\(2.5\\) m/s²",
      canonicalAnswer: "2.5",
    },
  },
  {
    id: "ga32-010",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A speed–time graph is horizontal at a height of \\(18\\) from time \\(0\\) to time \\(12\\), where time is in seconds and speed is in metres per second. The area under this part of the graph gives the distance travelled. Find that distance.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "speed-time graph", "area under graph", "distance"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the shape under the graph as a rectangle.",
          workingLatex: "\\text{constant speed } 18 \\text{ for } 12 \\text{ s} \\;\\Rightarrow\\; \\text{rectangle}",
          explanation:
            "A horizontal speed–time segment means constant speed, so the region beneath it is a rectangle of height 18 (the speed) and width 12 (the time interval).",
        },
        {
          stepNumber: 2,
          description: "Connect the area to the distance.",
          workingLatex: "\\text{distance} = \\text{area} = \\text{speed} \\cdot \\text{time}",
          explanation:
            "Distance = speed × time, and for a rectangle area = height × width = speed × time. So the area under the graph IS the distance — that is why areas are used on speed–time graphs.",
        },
        {
          stepNumber: 3,
          description: "Substitute the height and width.",
          workingLatex: "\\text{distance} = 18 \\text{ m/s} \\cdot 12 \\text{ s} = 216 \\text{ m}",
          mafs: `<Mafs viewBox={{ x: [-1, 14], y: [-2, 22] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Polygon points={[[0, 0], [12, 0], [12, 18], [0, 18]]} color="var(--mafs-fg-green)" fillOpacity={0.18} />
  <Line.Segment point1={[0, 18]} point2={[12, 18]} color="var(--mafs-fg-accent)" />
  <Text x={6} y={9} attach="n" color="var(--mafs-fg-green)">area = 216 m</Text>
  <Point x={0} y={18} color="var(--mafs-fg-blue)" />
  <Point x={12} y={18} color="var(--mafs-fg-blue)" />
  <Text x={10} y={1} attach="e">time (s)</Text>
  <Text x={0.4} y={21} attach="e">speed (m/s)</Text>
</Mafs>`,
          explanation:
            "18 × 12 = 216. The units (m/s) × s = m confirm a distance, so the car travels 216 m.",
        },
      ],
      finalAnswer: "\\(216\\) m",
      canonicalAnswer: "216",
    },
  },
  {
    id: "ga32-011",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A speed–time graph rises in a straight line from \\((0,\\,0)\\) to \\((8,\\,12)\\), where time is in seconds and speed is in metres per second. The area under the graph gives the distance travelled. Find that distance.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "speed-time graph", "area under graph", "triangle"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the shape under the graph.",
          workingLatex: "\\text{line from } (0,0) \\text{ to } (8,12) \\;\\Rightarrow\\; \\text{right-angled triangle}",
          explanation:
            "The speed rises steadily from 0, so the region beneath the line is a right-angled triangle. Its base lies along the time axis (8 s) and its height is the final speed (12 m/s).",
        },
        {
          stepNumber: 2,
          description: "Use the triangle-area formula for the distance.",
          workingLatex: "\\text{distance} = \\text{area} = \\frac{1}{2} \\cdot \\text{base} \\cdot \\text{height}",
          explanation:
            "The distance travelled equals the area under the speed–time graph, and the area of a triangle is ½ × base × height.",
        },
        {
          stepNumber: 3,
          description: "Substitute the base and height.",
          workingLatex: "\\text{distance} = \\frac{1}{2} \\cdot 8 \\cdot 12 = 48 \\text{ m}",
          mafs: `<Mafs viewBox={{ x: [-1, 9.5], y: [-1.5, 15] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Polygon points={[[0, 0], [8, 0], [8, 12]]} color="var(--mafs-fg-green)" fillOpacity={0.18} />
  <Polyline points={[[0, 0], [8, 12]]} color="var(--mafs-fg-accent)" />
  <Text x={5} y={4} attach="n" color="var(--mafs-fg-green)">area = 48 m</Text>
  <Point x={8} y={12} color="var(--mafs-fg-blue)" />
  <Text x={8} y={12} attach="nw" color="var(--mafs-fg-blue)">(8, 12)</Text>
  <Text x={6.2} y={0.7} attach="e">time (s)</Text>
  <Text x={0.4} y={14.2} attach="e">speed (m/s)</Text>
</Mafs>`,
          explanation:
            "½ × 8 × 12 = 48. The car covers 48 m as it accelerates over the 8 seconds. (A handy check: average speed here is (0 + 12)/2 = 6 m/s over 8 s, and 6 × 8 = 48.)",
        },
      ],
      finalAnswer: "\\(48\\) m",
      canonicalAnswer: "48",
    },
  },
  {
    id: "ga32-012",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "An electricity bill graph is a straight line. The total cost is \\(£8\\) when \\(0\\) kWh are used and \\(£23\\) when \\(100\\) kWh are used, where the horizontal axis is energy in kWh and the vertical axis is cost in pounds. Find the cost per kWh (the gradient).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "cost graph", "gradient as rate", "price per unit"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The cost per kWh is the gradient of the cost graph.",
          workingLatex: "\\text{rate} = \\text{gradient} = \\frac{\\text{change in cost}}{\\text{change in energy}}",
          explanation:
            "The gradient tells you how much the cost rises for each extra kWh used — that is exactly the price per kWh. The fixed £8 (the intercept) is the standing charge and does NOT affect the rate.",
        },
        {
          stepNumber: 2,
          description: "Read the change in cost.",
          workingLatex: "\\Delta \\text{cost} = 23 - 8 = 15 \\text{ pounds}",
          explanation:
            "The cost rises from £8 to £23, a change of £15. Subtracting the £8 standing charge is essential — it strips away the part you pay regardless of usage, leaving only the usage cost.",
        },
        {
          stepNumber: 3,
          description: "Read the change in energy.",
          workingLatex: "\\Delta \\text{energy} = 100 - 0 = 100 \\text{ kWh}",
          explanation:
            "The energy used rises from 0 to 100 kWh, a change of 100 kWh.",
        },
        {
          stepNumber: 4,
          description: "Divide to find the rate.",
          workingLatex: "\\text{rate} = \\frac{15}{100} = 0.15 \\text{ pounds per kWh}",
          mafs: `<Mafs viewBox={{ x: [-10, 110], y: [-3, 26] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Line.Segment point1={[0, 8]} point2={[100, 23]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0, 8]} point2={[100, 8]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[100, 8]} point2={[100, 23]} color="var(--mafs-fg-green)" />
  <Text x={50} y={8} attach="s" color="var(--mafs-fg-green)">run = 100 kWh</Text>
  <Text x={100} y={15.5} attach="e" color="var(--mafs-fg-green)">rise = 15</Text>
  <Point x={0} y={8} color="var(--mafs-fg-blue)" />
  <Text x={0.5} y={8} attach="e" color="var(--mafs-fg-blue)">£8 standing</Text>
  <Point x={100} y={23} color="var(--mafs-fg-blue)" />
  <Text x={85} y={1.5} attach="e">energy (kWh)</Text>
  <Text x={2} y={25} attach="e">cost (£)</Text>
</Mafs>`,
          explanation:
            "£15 ÷ 100 kWh = £0.15 per kWh, i.e. 15p per unit of electricity.",
        },
      ],
      finalAnswer: "\\(£0.15\\) per kWh",
      canonicalAnswer: "0.15",
    },
  },
  {
    id: "ga32-013",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A mobile phone tariff graph is a straight line. The monthly cost is \\(£10\\) for \\(0\\) minutes of calls and \\(£22\\) for \\(240\\) minutes, where the horizontal axis is call minutes and the vertical axis is cost in pounds. What is the cost per minute, in pence?",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "cost graph", "gradient as rate", "price per unit"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The cost per minute is the gradient of the tariff line.",
          workingLatex: "\\text{rate} = \\frac{\\text{change in cost}}{\\text{change in minutes}}",
          explanation:
            "The £10 at 0 minutes is a fixed monthly charge (the intercept), which you pay even with no calls. The gradient gives the extra cost per call minute on top of that.",
        },
        {
          stepNumber: 2,
          description: "Read the change in cost.",
          workingLatex: "\\Delta \\text{cost} = 22 - 10 = 12 \\text{ pounds}",
          explanation:
            "Cost rises from £10 to £22, a change of £12. Subtracting the £10 fixed charge isolates the part that depends on call length.",
        },
        {
          stepNumber: 3,
          description: "Read the change in minutes.",
          workingLatex: "\\Delta \\text{minutes} = 240 - 0 = 240",
          explanation:
            "The call time rises from 0 to 240 minutes, a change of 240 minutes.",
        },
        {
          stepNumber: 4,
          description: "Divide, then convert pounds to pence.",
          workingLatex: "\\frac{12 \\text{ pounds}}{240} = 0.05 \\text{ pounds/min} = 5 \\text{ pence/min}",
          mafs: `<Mafs viewBox={{ x: [-24, 264], y: [-3, 25] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Line.Segment point1={[0, 10]} point2={[240, 22]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0, 10]} point2={[240, 10]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[240, 10]} point2={[240, 22]} color="var(--mafs-fg-green)" />
  <Text x={120} y={10} attach="s" color="var(--mafs-fg-green)">run = 240 min</Text>
  <Text x={240} y={16} attach="e" color="var(--mafs-fg-green)">rise = £12</Text>
  <Point x={0} y={10} color="var(--mafs-fg-blue)" />
  <Text x={4} y={10} attach="e" color="var(--mafs-fg-blue)">£10 fixed</Text>
  <Text x={200} y={1.5} attach="e">minutes</Text>
  <Text x={4} y={24} attach="e">cost (£)</Text>
</Mafs>`,
          explanation:
            "£12 ÷ 240 = £0.05 per minute. Multiplying by 100 (there are 100 pence in a pound) gives 5p per minute.",
        },
      ],
      finalAnswer: "\\(5\\) pence per minute",
      canonicalAnswer: "5",
    },
  },
  {
    id: "ga32-014",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A distance–time graph for a walker has three straight segments: from \\((0,\\,0)\\) to \\((2,\\,8)\\), then horizontal from \\((2,\\,8)\\) to \\((3,\\,8)\\), then from \\((3,\\,8)\\) to \\((5,\\,8)\\)… stop. Time is in hours and distance is in kilometres. For how long was the walker stationary?",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "distance-time graph", "stationary", "interpret segments"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "A horizontal distance–time segment means no movement.",
          workingLatex: "\\text{distance unchanged} \\;\\Rightarrow\\; \\text{stationary}",
          explanation:
            "When the distance stays the same while time passes, the walker is not moving. On a distance–time graph this is shown by a horizontal (flat) line, where the gradient (speed) is 0.",
        },
        {
          stepNumber: 2,
          description: "Find every flat part of the journey.",
          workingLatex: "\\text{flat: } (2,\\,8)\\to(3,\\,8) \\text{ and } (3,\\,8)\\to(5,\\,8)",
          explanation:
            "From time 2 h the distance holds at 8 km right through to time 5 h. Both the segment (2, 8)→(3, 8) and the segment (3, 8)→(5, 8) are horizontal, so together they form one continuous stationary stretch from (2, 8) to (5, 8).",
        },
        {
          stepNumber: 3,
          description: "Compute the duration of the stationary period.",
          workingLatex: "5 - 2 = 3 \\text{ hours}",
          mafs: `<Mafs viewBox={{ x: [-0.5, 5.5], y: [-1, 10] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Polyline points={[[0, 0], [2, 8], [5, 8]]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[2, 8]} point2={[5, 8]} color="var(--mafs-fg-green)" />
  <Point x={2} y={8} color="var(--mafs-fg-blue)" />
  <Point x={5} y={8} color="var(--mafs-fg-blue)" />
  <Text x={3.5} y={8.3} attach="n" color="var(--mafs-fg-green)">stationary 3 h</Text>
  <Text x={4.4} y={0.6} attach="e">time (h)</Text>
  <Text x={0.3} y={9.5} attach="e">distance (km)</Text>
</Mafs>`,
          explanation:
            "The flat section runs from time 2 h to time 5 h, a duration of 5 − 2 = 3 hours stationary. We use the time coordinates (horizontal axis), not the distance.",
        },
      ],
      finalAnswer: "\\(3\\) hours",
      canonicalAnswer: "3",
    },
  },
  {
    id: "ga32-015",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A tall vase has a narrow cylindrical neck at the bottom and a much wider cylindrical bowl above it. Water is poured in at a constant rate. Describe the shape of the depth–time graph (depth on the vertical axis, time on the horizontal axis) for the two stages, in terms of how steep each part is.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "depth-time graph", "container filling", "interpret shape"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Link steepness of the depth–time graph to the container's width.",
          workingLatex: "\\text{narrow} \\;\\Rightarrow\\; \\text{depth rises fast} \\;\\Rightarrow\\; \\text{steep}",
          explanation:
            "Water enters at a constant rate (the same volume each second). In a narrow part that volume only has a small cross-section to fill, so the depth shoots up quickly — a steep gradient. In a wide part the same volume spreads out, so the depth rises slowly — a shallow gradient.",
        },
        {
          stepNumber: 2,
          description: "Each cylinder has constant width, so each stage is straight.",
          workingLatex: "\\text{constant width} \\;\\Rightarrow\\; \\text{constant gradient} \\;\\Rightarrow\\; \\text{straight line}",
          explanation:
            "Within one cylinder the cross-section never changes, so the depth rises at a steady rate — a straight line, not a curve. There are two cylinders, so the graph has two straight segments.",
        },
        {
          stepNumber: 3,
          description: "Order the two stages: narrow neck fills first.",
          workingLatex: "\\text{neck (narrow) first, then bowl (wide)}",
          explanation:
            "Water fills from the bottom up, so the narrow neck fills before the wide bowl. The steep segment therefore comes first, then the shallow one.",
        },
        {
          stepNumber: 4,
          description: "Combine into the full description.",
          workingLatex: "\\text{steep straight line, then shallower straight line}",
          mafs: `<Mafs viewBox={{ x: [-0.5, 8], y: [-1, 10] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Polyline points={[[0, 0], [2, 6], [8, 9]]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={6} color="var(--mafs-fg-blue)" />
  <Text x={1} y={3.5} attach="w" color="var(--mafs-fg-accent)">steep (neck)</Text>
  <Text x={5} y={8} attach="n" color="var(--mafs-fg-accent)">shallow (bowl)</Text>
  <Text x={6.5} y={0.6} attach="e">time</Text>
  <Text x={0.3} y={9.5} attach="e">depth</Text>
</Mafs>`,
          explanation:
            "The narrow neck gives a steep straight line; then the wide bowl gives a less steep (shallower) straight line. The corner between them marks the moment the water reaches the top of the neck.",
        },
      ],
      finalAnswer:
        "\\(\\text{A steep straight line (narrow neck) followed by a shallower straight line (wide bowl).}\\)",
    },
  },
  {
    id: "ga32-016",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A car's speed–time graph rises in a straight line from \\((0,\\,4)\\) to \\((6,\\,16)\\), where time is in seconds and speed is in metres per second. Find the acceleration of the car.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "speed-time graph", "acceleration from gradient", "non-zero start"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Acceleration is the gradient, even off the origin.",
          workingLatex: "a = \\frac{\\text{change in speed}}{\\text{change in time}}",
          explanation:
            "The starting speed is 4 m/s, not 0, but that does not matter for the gradient — we only ever use the CHANGE in speed and the CHANGE in time, never the raw end value on its own.",
        },
        {
          stepNumber: 2,
          description: "Read the change in speed.",
          workingLatex: "\\Delta \\text{speed} = 16 - 4 = 12 \\text{ m/s}",
          explanation:
            "Speed rises from 4 to 16 m/s, a change of 12 m/s. You must subtract the starting speed of 4 — leaving it out is the most common slip in these questions.",
        },
        {
          stepNumber: 3,
          description: "Read the change in time.",
          workingLatex: "\\Delta \\text{time} = 6 - 0 = 6 \\text{ s}",
          explanation:
            "The time runs from 0 to 6 s, a change of 6 s.",
        },
        {
          stepNumber: 4,
          description: "Divide to find the acceleration.",
          workingLatex: "a = \\frac{12 \\text{ m/s}}{6 \\text{ s}} = 2 \\text{ m/s}^2",
          mafs: `<Mafs viewBox={{ x: [-0.7, 7], y: [-2, 18] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Polyline points={[[0, 4], [6, 16]]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0, 4]} point2={[6, 4]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[6, 4]} point2={[6, 16]} color="var(--mafs-fg-green)" />
  <Text x={3} y={3.6} attach="s" color="var(--mafs-fg-green)">run = 6 s</Text>
  <Text x={6} y={10} attach="e" color="var(--mafs-fg-green)">rise = 12</Text>
  <Point x={0} y={4} color="var(--mafs-fg-blue)" />
  <Point x={6} y={16} color="var(--mafs-fg-blue)" />
  <Text x={5} y={0.7} attach="e">time (s)</Text>
  <Text x={0.3} y={17.3} attach="e">speed (m/s)</Text>
</Mafs>`,
          explanation:
            "12 ÷ 6 = 2, so the acceleration is 2 m/s². (Using 16 ÷ 6 here would be the slip flagged above — always take the change, not the final speed.)",
        },
      ],
      finalAnswer: "\\(2\\) m/s²",
      canonicalAnswer: "2",
    },
  },
  {
    id: "ga32-017",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A distance–time graph for a journey has two straight segments: from \\((0,\\,0)\\) to \\((2,\\,30)\\), then from \\((2,\\,30)\\) to \\((5,\\,30)\\), where time is in hours and distance is in kilometres. Find the average speed for the WHOLE journey, in kilometres per hour.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "distance-time graph", "average speed", "multi-stage"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use total distance over total time, not one segment's gradient.",
          workingLatex: "\\text{average speed} = \\frac{\\text{total distance}}{\\text{total time}}",
          explanation:
            "Average speed treats the whole trip as if it were at one steady speed: total distance covered divided by the total time taken, INCLUDING any stops. It is not the gradient of just the moving part.",
        },
        {
          stepNumber: 2,
          description: "Read the total distance covered.",
          workingLatex: "\\text{total distance} = 30 \\text{ km}",
          explanation:
            "The journey ends at distance 30 km, and since distance only ever rose (it never came back down) the total distance covered is 30 km.",
        },
        {
          stepNumber: 3,
          description: "Read the total time taken.",
          workingLatex: "\\text{total time} = 5 \\text{ h}",
          explanation:
            "The graph ends at time 5 h. The flat second segment from t = 2 to t = 5 is a 3-hour stop — it adds time but no distance, and it must be counted in the total time.",
        },
        {
          stepNumber: 4,
          description: "Divide to find the average speed.",
          workingLatex: "\\text{average speed} = \\frac{30 \\text{ km}}{5 \\text{ h}} = 6 \\text{ km/h}",
          mafs: `<Mafs viewBox={{ x: [-0.5, 5.5], y: [-3, 36] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Polyline points={[[0, 0], [2, 30], [5, 30]]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0, 0]} point2={[5, 30]} color="var(--mafs-fg-green)" opacity={0.6} />
  <Point x={2} y={30} color="var(--mafs-fg-blue)" />
  <Point x={5} y={30} color="var(--mafs-fg-blue)" />
  <Text x={3.5} y={31} attach="n" color="var(--mafs-fg-accent)">stop</Text>
  <Text x={2.6} y={18} attach="e" color="var(--mafs-fg-green)">avg 6 km/h</Text>
  <Text x={4.4} y={1.5} attach="e">time (h)</Text>
  <Text x={0.3} y={34.5} attach="e">distance (km)</Text>
</Mafs>`,
          explanation:
            "30 ÷ 5 = 6 km/h. Note this is much less than the 15 km/h of the moving part, because the 3-hour stop is included in the total time — that is the whole point of an average.",
        },
      ],
      finalAnswer: "\\(6\\) km/h",
      canonicalAnswer: "6",
    },
  },
  {
    id: "ga32-018",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A taxi fare graph is a straight line passing through \\((0,\\,3)\\) and \\((6,\\,15)\\), where the horizontal axis is distance in miles and the vertical axis is fare in pounds. Use the graph to find the fare for a journey of \\(10\\) miles.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "cost graph", "gradient and intercept", "extrapolate"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the gradient (cost per mile).",
          workingLatex: "\\text{rate} = \\frac{15 - 3}{6 - 0} = \\frac{12}{6} = 2 \\text{ pounds per mile}",
          explanation:
            "The fare rises by £(15 − 3) = £12 over 6 miles, so it costs £2 per mile travelled. We subtract the starting fare of £3 so only the per-mile part is measured.",
        },
        {
          stepNumber: 2,
          description: "Identify the fixed charge (the intercept at 0 miles).",
          workingLatex: "\\text{fixed charge} = 3 \\text{ pounds}",
          explanation:
            "At 0 miles the fare is £3; this is the standing charge you pay before any distance — the vertical intercept of the line.",
        },
        {
          stepNumber: 3,
          description: "Build the fare rule: fixed charge plus rate times distance.",
          workingLatex: "\\text{fare} = 3 + 2 \\cdot \\text{distance}",
          explanation:
            "Total fare = standing charge + (cost per mile) × (miles). This is just the line written in y = mx + c form, with gradient m = 2 and intercept c = 3.",
        },
        {
          stepNumber: 4,
          description: "Substitute 10 miles.",
          workingLatex: "\\text{fare} = 3 + 2 \\cdot 10 = 3 + 20 = 23 \\text{ pounds}",
          mafs: `<Mafs viewBox={{ x: [-1, 12], y: [-3, 26] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Line.Segment point1={[0, 3]} point2={[6, 15]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[6, 15]} point2={[10, 23]} color="var(--mafs-fg-accent)" style="dashed" />
  <Line.Segment point1={[0, 23]} point2={[10, 23]} color="var(--mafs-line-color)" opacity={0.4} />
  <Line.Segment point1={[10, 0]} point2={[10, 23]} color="var(--mafs-line-color)" opacity={0.4} />
  <Point x={0} y={3} color="var(--mafs-fg-accent)" />
  <Point x={10} y={23} color="var(--mafs-fg-blue)" />
  <Text x={10} y={23} attach="w" color="var(--mafs-fg-blue)">(10, 23)</Text>
  <Text x={8} y={1.5} attach="e">distance (miles)</Text>
  <Text x={0.3} y={25} attach="e">fare (£)</Text>
</Mafs>`,
          explanation:
            "For 10 miles: £3 + £20 = £23. Notice 10 miles is beyond the plotted point at 6 miles, so we are extending (extrapolating) the line using its rule.",
        },
      ],
      finalAnswer: "\\(£23\\)",
      canonicalAnswer: "23",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga32-019",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A speed–time graph for a car has three straight segments: it rises from \\((0,\\,0)\\) to \\((4,\\,20)\\), stays horizontal from \\((4,\\,20)\\) to \\((10,\\,20)\\), then falls from \\((10,\\,20)\\) to \\((14,\\,0)\\), where time is in seconds and speed is in metres per second. Find the total distance travelled.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "speed-time graph", "area under graph", "trapezium", "multi-stage"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Total distance is the total area under the graph.",
          workingLatex: "\\text{distance} = \\text{area under the graph} = A_1 + A_2 + A_3",
          explanation:
            "The area beneath a speed–time graph gives the distance travelled. The graph has three distinct stages, so we split the region into three pieces, find each area, and add them.",
        },
        {
          stepNumber: 2,
          description: "Stage 1 (acceleration): a triangle.",
          workingLatex: "A_1 = \\frac{1}{2} \\cdot 4 \\cdot 20 = 40 \\text{ m}",
          explanation:
            "From (0, 0) to (4, 20) the line rises from rest, so the region is a triangle with base 4 s and height 20 m/s: ½ × 4 × 20 = 40 m.",
        },
        {
          stepNumber: 3,
          description: "Stage 2 (constant speed): a rectangle.",
          workingLatex: "A_2 = 20 \\cdot (10 - 4) = 20 \\cdot 6 = 120 \\text{ m}",
          explanation:
            "From t = 4 to t = 10 the speed is a constant 20 m/s, giving a rectangle of width (10 − 4) = 6 s and height 20 m/s: 20 × 6 = 120 m.",
        },
        {
          stepNumber: 4,
          description: "Stage 3 (deceleration): a triangle.",
          workingLatex: "A_3 = \\frac{1}{2} \\cdot (14 - 10) \\cdot 20 = \\frac{1}{2} \\cdot 4 \\cdot 20 = 40 \\text{ m}",
          explanation:
            "From (10, 20) down to (14, 0) the region is a triangle with base (14 − 10) = 4 s and height 20 m/s: ½ × 4 × 20 = 40 m. The car still covers ground while slowing down.",
        },
        {
          stepNumber: 5,
          description: "Add the three areas.",
          workingLatex: "\\text{distance} = 40 + 120 + 40 = 200 \\text{ m}",
          mafs: `<Mafs viewBox={{ x: [-1.5, 16], y: [-3, 24] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Polygon points={[[0, 0], [4, 20], [10, 20], [14, 0]]} color="var(--mafs-fg-green)" fillOpacity={0.15} />
  <Polyline points={[[0, 0], [4, 20], [10, 20], [14, 0]]} color="var(--mafs-fg-accent)" />
  <Point x={4} y={20} color="var(--mafs-fg-blue)" />
  <Point x={10} y={20} color="var(--mafs-fg-blue)" />
  <Text x={7} y={9} attach="n" color="var(--mafs-fg-green)">area = 200 m</Text>
  <Text x={12} y={1} attach="e">time (s)</Text>
  <Text x={0.3} y={23} attach="e">speed (m/s)</Text>
</Mafs>`,
          explanation:
            "Total distance = 40 + 120 + 40 = 200 m. As a check, the whole shape is a trapezium with parallel sides 14 (the full time at the bottom) and 6 (the flat top) and height 20: ½(14 + 6)(20) = 200 m. ✓",
        },
      ],
      finalAnswer: "\\(200\\) m",
      canonicalAnswer: "200",
    },
  },
  {
    id: "ga32-020",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A speed–time graph rises in a straight line from \\((0,\\,0)\\) to \\((5,\\,15)\\), then continues in a straight line up to \\((9,\\,15)\\) held constant, where time is in seconds and speed is in metres per second. Find the average speed over the whole \\(9\\) seconds.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "speed-time graph", "area under graph", "average speed"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Average speed = total distance ÷ total time.",
          workingLatex: "\\text{average speed} = \\frac{\\text{total distance}}{\\text{total time}}",
          explanation:
            "We need the total distance, which on a speed–time graph is the area underneath, and then we divide by the total time of 9 s. So the plan is: find the area, then divide.",
        },
        {
          stepNumber: 2,
          description: "Stage 1 (0 to 5 s): triangle area.",
          workingLatex: "A_1 = \\frac{1}{2} \\cdot 5 \\cdot 15 = 37.5 \\text{ m}",
          explanation:
            "Accelerating from 0 to 15 m/s over 5 s gives a triangle with base 5 s and height 15 m/s: ½ × 5 × 15 = 37.5 m.",
        },
        {
          stepNumber: 3,
          description: "Stage 2 (5 to 9 s): rectangle area.",
          workingLatex: "A_2 = 15 \\cdot (9 - 5) = 15 \\cdot 4 = 60 \\text{ m}",
          explanation:
            "Holding a constant 15 m/s for (9 − 5) = 4 s gives a rectangle: 15 × 4 = 60 m.",
        },
        {
          stepNumber: 4,
          description: "Add the two areas for the total distance.",
          workingLatex: "\\text{distance} = 37.5 + 60 = 97.5 \\text{ m}",
          mafs: `<Mafs viewBox={{ x: [-1, 10.5], y: [-2, 18] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Polygon points={[[0, 0], [5, 15], [9, 15], [9, 0]]} color="var(--mafs-fg-green)" fillOpacity={0.15} />
  <Polyline points={[[0, 0], [5, 15], [9, 15]]} color="var(--mafs-fg-accent)" />
  <Point x={5} y={15} color="var(--mafs-fg-blue)" />
  <Point x={9} y={15} color="var(--mafs-fg-blue)" />
  <Text x={4.5} y={6} attach="n" color="var(--mafs-fg-green)">area = 97.5 m</Text>
  <Text x={7.5} y={1} attach="e">time (s)</Text>
  <Text x={0.3} y={17} attach="e">speed (m/s)</Text>
</Mafs>`,
          explanation:
            "Add the triangle and rectangle: 37.5 + 60 = 97.5 m travelled in total over the 9 seconds.",
        },
        {
          stepNumber: 5,
          description: "Divide the distance by the total time.",
          workingLatex: "\\text{average speed} = \\frac{97.5}{9} = 10.8\\overline{3} \\approx 10.83 \\text{ m/s}",
          explanation:
            "97.5 ÷ 9 = 10.833… m/s, about 10.83 m/s (to 2 d.p.). This sits between 0 and 15 m/s, as any sensible average must.",
        },
      ],
      finalAnswer: "\\(10.83\\) m/s (to 2 d.p.)",
      canonicalAnswer: "10.833333",
    },
  },
  {
    id: "ga32-021",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Two friends start at the same point. Anna's distance–time graph is a straight line from \\((0,\\,0)\\) to \\((4,\\,48)\\). Ben's is a straight line from \\((0,\\,0)\\) to \\((6,\\,48)\\). Time is in minutes and distance is in metres. How much faster is Anna than Ben, in metres per minute?",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "distance-time graph", "speed from gradient", "compare speeds"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Each person's speed is the gradient of their line.",
          workingLatex: "\\text{speed} = \\frac{\\text{change in distance}}{\\text{change in time}}",
          explanation:
            "Both lines are straight (constant speed), so each speed is just the gradient of that line: distance covered ÷ time taken. We find each speed separately, then compare.",
        },
        {
          stepNumber: 2,
          description: "Find Anna's speed.",
          workingLatex: "v_A = \\frac{48}{4} = 12 \\text{ m/min}",
          explanation:
            "Anna covers 48 m in 4 minutes: 48 ÷ 4 = 12 m/min. She reaches the same distance in less time, so her line is steeper and she is the faster one.",
        },
        {
          stepNumber: 3,
          description: "Find Ben's speed.",
          workingLatex: "v_B = \\frac{48}{6} = 8 \\text{ m/min}",
          explanation:
            "Ben covers the same 48 m but in 6 minutes: 48 ÷ 6 = 8 m/min.",
        },
        {
          stepNumber: 4,
          description: "Subtract to find how much faster Anna is.",
          workingLatex: "v_A - v_B = 12 - 8 = 4 \\text{ m/min}",
          mafs: `<Mafs viewBox={{ x: [-0.6, 7], y: [-5, 54] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Polyline points={[[0, 0], [4, 48]]} color="var(--mafs-fg-accent)" />
  <Polyline points={[[0, 0], [6, 48]]} color="var(--mafs-fg-green)" />
  <Point x={4} y={48} color="var(--mafs-fg-blue)" />
  <Point x={6} y={48} color="var(--mafs-fg-blue)" />
  <Text x={4} y={48} attach="w" color="var(--mafs-fg-accent)">Anna (4, 48)</Text>
  <Text x={6} y={48} attach="e" color="var(--mafs-fg-green)">Ben (6, 48)</Text>
  <Text x={5} y={2} attach="e">time (min)</Text>
  <Text x={0.3} y={52} attach="e">distance (m)</Text>
</Mafs>`,
          explanation:
            "The question asks for the difference in speeds, so Anna − Ben = 12 − 8 = 4 m/min. Anna travels 4 metres more than Ben in each minute.",
        },
      ],
      finalAnswer: "\\(4\\) m/min",
      canonicalAnswer: "4",
    },
  },
  {
    id: "ga32-022",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A swimming pool is filled in two stages. From \\((0,\\,0)\\) to \\((30,\\,60)\\) the depth–time graph is a straight line, then from \\((30,\\,60)\\) to \\((90,\\,120)\\) it is a straight line. Time is in minutes and depth is in centimetres. In which stage is the water rising faster, and by how many centimetres per minute is it faster?",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "depth-time graph", "rate from gradient", "container filling", "compare rates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The rate the depth rises is the gradient of the depth–time graph.",
          workingLatex: "\\text{rate} = \\frac{\\text{change in depth}}{\\text{change in time}}",
          explanation:
            "A steeper depth–time line means the water level climbs faster. To compare the two stages we compute each one's gradient and see which is bigger.",
        },
        {
          stepNumber: 2,
          description: "Find the stage 1 rate.",
          workingLatex: "\\text{rate}_1 = \\frac{60 - 0}{30 - 0} = \\frac{60}{30} = 2 \\text{ cm/min}",
          explanation:
            "From (0, 0) to (30, 60) the depth rises 60 cm in 30 min: 60 ÷ 30 = 2 cm per minute.",
        },
        {
          stepNumber: 3,
          description: "Find the stage 2 rate.",
          workingLatex: "\\text{rate}_2 = \\frac{120 - 60}{90 - 30} = \\frac{60}{60} = 1 \\text{ cm/min}",
          explanation:
            "From (30, 60) to (90, 120) the depth rises the same 60 cm but over 60 min: 60 ÷ 60 = 1 cm per minute. Be careful to subtract both coordinates from the second point, not just read 120 and 90.",
        },
        {
          stepNumber: 4,
          description: "Compare the rates and find the difference.",
          workingLatex: "2 > 1, \\qquad 2 - 1 = 1 \\text{ cm/min}",
          mafs: `<Mafs viewBox={{ x: [-9, 99], y: [-12, 132] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Polyline points={[[0, 0], [30, 60], [90, 120]]} color="var(--mafs-fg-accent)" />
  <Point x={30} y={60} color="var(--mafs-fg-blue)" />
  <Text x={12} y={45} attach="e" color="var(--mafs-fg-accent)">stage 1: 2 cm/min</Text>
  <Text x={60} y={90} attach="s" color="var(--mafs-fg-accent)">stage 2: 1 cm/min</Text>
  <Text x={75} y={6} attach="e">time (min)</Text>
  <Text x={2} y={126} attach="e">depth (cm)</Text>
</Mafs>`,
          explanation:
            "Stage 1 has the larger gradient, so the water rises faster in stage 1, by 2 − 1 = 1 cm/min. Physically, the wider top of the pool in stage 2 spreads the same inflow over a larger area, so the level climbs more slowly.",
        },
      ],
      finalAnswer:
        "\\(\\text{Stage 1, faster by } 1 \\text{ cm/min}\\)",
      canonicalAnswer: "1",
    },
  },
  {
    id: "ga32-023",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A speed–time graph for a cyclist is a straight line from \\((0,\\,2)\\) to \\((20,\\,12)\\), where time is in seconds and speed is in metres per second. The area under the graph gives the distance travelled. Find that distance.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "speed-time graph", "area under graph", "trapezium"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the shape: a trapezium (it starts at speed 2, not 0).",
          workingLatex: "\\text{parallel sides } 2 \\text{ and } 12, \\quad \\text{width } 20",
          explanation:
            "Because the starting speed is 2 m/s and the final speed is 12 m/s, the region under the line is a trapezium. Its two vertical sides (heights 2 and 12) are the parallel sides, and the time interval (20 s) is the gap between them.",
        },
        {
          stepNumber: 2,
          description: "Write down the trapezium-area formula.",
          workingLatex: "\\text{distance} = \\frac{1}{2}(a + b) \\cdot h",
          explanation:
            "Distance equals the area, and the area of a trapezium is ½ × (sum of the two parallel sides) × (distance between them). Here a = 2, b = 12 and h = 20.",
        },
        {
          stepNumber: 3,
          description: "Substitute the values.",
          workingLatex: "\\text{distance} = \\frac{1}{2}(2 + 12) \\cdot 20 = \\frac{1}{2}(14)(20)",
          explanation:
            "Add the parallel sides first: 2 + 12 = 14. Then the area is ½ × 14 × 20.",
        },
        {
          stepNumber: 4,
          description: "Evaluate.",
          workingLatex: "\\text{distance} = \\frac{1}{2}(14)(20) = 7 \\cdot 20 = 140 \\text{ m}",
          mafs: `<Mafs viewBox={{ x: [-2, 23], y: [-2, 14] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Polygon points={[[0, 0], [20, 0], [20, 12], [0, 2]]} color="var(--mafs-fg-green)" fillOpacity={0.15} />
  <Polyline points={[[0, 2], [20, 12]]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={2} color="var(--mafs-fg-blue)" />
  <Point x={20} y={12} color="var(--mafs-fg-blue)" />
  <Text x={10} y={4} attach="n" color="var(--mafs-fg-green)">area = 140 m</Text>
  <Text x={16} y={1} attach="e">time (s)</Text>
  <Text x={0.4} y={13.3} attach="e">speed (m/s)</Text>
</Mafs>`,
          explanation:
            "½ × 14 × 20 = 140, so the cyclist travels 140 m. Check by splitting the trapezium into a rectangle (2 × 20 = 40) plus a triangle (½ × 20 × 10 = 100): 40 + 100 = 140 m. ✓",
        },
      ],
      finalAnswer: "\\(140\\) m",
      canonicalAnswer: "140",
    },
  },
  {
    id: "ga32-024",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A van's journey is shown on a distance–time graph in three straight segments: out from \\((0,\\,0)\\) to \\((1,\\,60)\\); a stop from \\((1,\\,60)\\) to \\((1.5,\\,60)\\); then the return home from \\((1.5,\\,60)\\) to \\((3,\\,0)\\). Time is in hours and distance from home is in kilometres. Find the speed of the van on the return journey, in kilometres per hour.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "distance-time graph", "speed from gradient", "return journey", "multi-stage"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the return segment (distance falls back to 0).",
          workingLatex: "\\text{return: } (1.5,\\,60) \\to (3,\\,0)",
          explanation:
            "Distance is measured FROM home, so coming home means the distance falls back to 0. The return is therefore the final segment, from (1.5, 60) down to (3, 0).",
        },
        {
          stepNumber: 2,
          description: "Find the change in distance and change in time.",
          workingLatex: "\\Delta \\text{distance} = 0 - 60 = -60 \\text{ km}, \\qquad \\Delta \\text{time} = 3 - 1.5 = 1.5 \\text{ h}",
          explanation:
            "The distance drops by 60 km while the time advances by 1.5 h. The negative change just signals that the van is heading home — for speed we will use its size (magnitude).",
        },
        {
          stepNumber: 3,
          description: "Take the magnitude of the gradient for the speed.",
          workingLatex: "\\text{speed} = \\frac{|\\,-60\\,|}{1.5} = \\frac{60}{1.5}",
          explanation:
            "Speed is always positive, so we use the magnitude 60 km over 1.5 h. (Velocity would keep the minus sign to show direction, but the question asks only for speed.)",
        },
        {
          stepNumber: 4,
          description: "Evaluate the speed.",
          workingLatex: "\\text{speed} = \\frac{60}{1.5} = 40 \\text{ km/h}",
          mafs: `<Mafs viewBox={{ x: [-0.3, 3.3], y: [-6, 66] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Polyline points={[[0, 0], [1, 60], [1.5, 60], [3, 0]]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[1.5, 60]} point2={[3, 0]} color="var(--mafs-fg-green)" />
  <Point x={1.5} y={60} color="var(--mafs-fg-blue)" />
  <Point x={3} y={0} color="var(--mafs-fg-blue)" />
  <Text x={2.3} y={36} attach="e" color="var(--mafs-fg-green)">return 40 km/h</Text>
  <Text x={2.5} y={4} attach="e">time (h)</Text>
  <Text x={0.2} y={63} attach="e">distance (km)</Text>
</Mafs>`,
          explanation:
            "60 ÷ 1.5 = 40, so the van returns at 40 km/h. (On the way out it did 60 ÷ 1 = 60 km/h, so the return leg is slower.)",
        },
      ],
      finalAnswer: "\\(40\\) km/h",
      canonicalAnswer: "40",
    },
  },
  {
    id: "ga32-025",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Two electricity tariffs are straight-line cost graphs (cost in pounds against energy in kWh). Tariff A passes through \\((0,\\,5)\\) and \\((200,\\,45)\\). Tariff B passes through \\((0,\\,15)\\) and \\((200,\\,35)\\). At how many kWh do the two tariffs cost the same?",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "cost graph", "gradient and intercept", "simultaneous", "point of intersection"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write Tariff A as cost = fixed + rate × energy.",
          workingLatex: "\\text{rate}_A = \\frac{45 - 5}{200} = \\frac{40}{200} = 0.2 \\;\\Rightarrow\\; C_A = 5 + 0.2x",
          explanation:
            "Tariff A's standing charge is £5 (the value at 0 kWh, the intercept) and its gradient is £(45 − 5)/200 = £0.20 per kWh. So C_A = 5 + 0.2x, where x is the kWh used.",
        },
        {
          stepNumber: 2,
          description: "Write Tariff B the same way.",
          workingLatex: "\\text{rate}_B = \\frac{35 - 15}{200} = \\frac{20}{200} = 0.1 \\;\\Rightarrow\\; C_B = 15 + 0.1x",
          explanation:
            "Tariff B's standing charge is £15 and its gradient is £(35 − 15)/200 = £0.10 per kWh, giving C_B = 15 + 0.1x. B starts dearer but charges less per unit.",
        },
        {
          stepNumber: 3,
          description: "Set the two costs equal.",
          workingLatex: "5 + 0.2x = 15 + 0.1x",
          explanation:
            "The tariffs cost the same exactly where the two lines cross, i.e. where C_A = C_B. Setting the expressions equal gives one equation to solve for x.",
        },
        {
          stepNumber: 4,
          description: "Collect the x-terms on one side.",
          workingLatex: "0.2x - 0.1x = 15 - 5",
          explanation:
            "Subtract 0.1x from both sides to gather the x-terms, and subtract 5 from both sides to gather the constants. Doing both at once keeps the working tidy.",
        },
        {
          stepNumber: 5,
          description: "Simplify both sides.",
          workingLatex: "0.1x = 10",
          explanation:
            "0.2x − 0.1x = 0.1x on the left, and 15 − 5 = 10 on the right, leaving 0.1x = 10.",
        },
        {
          stepNumber: 6,
          description: "Solve for x.",
          workingLatex: "x = \\frac{10}{0.1} = 100 \\text{ kWh}",
          mafs: `<Mafs viewBox={{ x: [-20, 220], y: [-5, 50] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Line.Segment point1={[0, 5]} point2={[200, 45]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0, 15]} point2={[200, 35]} color="var(--mafs-fg-green)" />
  <Text x={150} y={42} attach="s" color="var(--mafs-fg-accent)">Tariff A</Text>
  <Text x={150} y={35} attach="n" color="var(--mafs-fg-green)">Tariff B</Text>
  <Point x={100} y={25} color="var(--mafs-fg-blue)" />
  <Text x={100} y={25} attach="nw" color="var(--mafs-fg-blue)">(100, 25)</Text>
  <Text x={160} y={2} attach="e">energy (kWh)</Text>
  <Text x={4} y={48} attach="e">cost (£)</Text>
</Mafs>`,
          explanation:
            "Divide both sides by 0.1: x = 100 kWh. Check: C_A = 5 + 0.2(100) = 25 and C_B = 15 + 0.1(100) = 25 — both £25, so they match. ✓",
        },
      ],
      finalAnswer: "\\(100\\) kWh",
      canonicalAnswer: "100",
    },
  },
  {
    id: "ga32-026",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A speed–time graph for a car accelerating from rest is a straight line from \\((0,\\,0)\\) to \\((t,\\,18)\\), where time is in seconds and speed is in metres per second. The car covers \\(81\\) metres during this acceleration. Find the time \\(t\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "speed-time graph", "area under graph", "solve for time", "reverse problem"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the distance as the area of the triangle.",
          workingLatex: "\\text{distance} = \\frac{1}{2} \\cdot t \\cdot 18",
          explanation:
            "Accelerating from rest gives a triangle under the line, with base t (the unknown time) and height 18 m/s (the final speed). Its area equals the distance travelled. This is a 'reverse' area problem: we know the area and want the base.",
        },
        {
          stepNumber: 2,
          description: "Set the area equal to the given distance, 81 m.",
          workingLatex: "\\frac{1}{2} \\cdot t \\cdot 18 = 81",
          explanation:
            "We are told the distance is 81 m, so the triangle's area must equal 81. This turns the geometry into an equation in t.",
        },
        {
          stepNumber: 3,
          description: "Simplify the left-hand side.",
          workingLatex: "9t = 81",
          explanation:
            "½ × 18 = 9, so the left side becomes 9t. Combining the constants first makes the equation a simple one-step solve.",
        },
        {
          stepNumber: 4,
          description: "Solve for t.",
          workingLatex: "t = \\frac{81}{9} = 9 \\text{ s}",
          mafs: `<Mafs viewBox={{ x: [-1, 11], y: [-2, 21] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Polygon points={[[0, 0], [9, 0], [9, 18]]} color="var(--mafs-fg-green)" fillOpacity={0.18} />
  <Polyline points={[[0, 0], [9, 18]]} color="var(--mafs-fg-accent)" />
  <Text x={5.5} y={6} attach="n" color="var(--mafs-fg-green)">area = 81 m</Text>
  <Point x={9} y={18} color="var(--mafs-fg-blue)" />
  <Text x={9} y={18} attach="nw" color="var(--mafs-fg-blue)">(9, 18)</Text>
  <Text x={7} y={0.7} attach="e">time (s)</Text>
  <Text x={0.4} y={20} attach="e">speed (m/s)</Text>
</Mafs>`,
          explanation:
            "Divide both sides by 9: t = 9 seconds. Check by substituting back: ½ × 9 × 18 = 81 m. ✓",
        },
      ],
      finalAnswer: "\\(t = 9\\) s",
      canonicalAnswer: "9",
    },
  },
  {
    id: "ga32-027",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A container is made of a wide cylinder at the bottom and a narrow cylinder on top, both filled with water poured in at a constant rate. Sketch-describe the depth–time graph (depth vertical, time horizontal): say whether each stage is straight or curved, and whether the second stage is steeper or shallower than the first, with reasons.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "depth-time graph", "container filling", "interpret shape", "reasoning"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Relate constant inflow to the gradient of the depth–time graph.",
          workingLatex: "\\text{constant volume per second} \\;\\Rightarrow\\; \\text{gradient} \\propto \\frac{1}{\\text{cross-section area}}",
          explanation:
            "The same volume of water arrives each second. The depth it adds depends on how wide the container is there: a wide cross-section spreads it thin (slow rise, shallow gradient), a narrow one stacks it up (fast rise, steep gradient).",
        },
        {
          stepNumber: 2,
          description: "Stage 1 (wide cylinder): straight and shallow.",
          workingLatex: "\\text{wide, constant width} \\;\\Rightarrow\\; \\text{straight line, shallow}",
          explanation:
            "Within the wide cylinder the cross-section never changes, so the depth rises at a steady (constant) rate — a straight line, not a curve. Because it is wide, that rate is small, so the line is shallow.",
        },
        {
          stepNumber: 3,
          description: "Stage 2 (narrow cylinder): straight and steeper.",
          workingLatex: "\\text{narrow, constant width} \\;\\Rightarrow\\; \\text{straight line, steeper}",
          explanation:
            "The narrow cylinder also has constant width, so its part of the graph is straight too — but narrower means the same inflow raises the depth faster, so this segment is STEEPER than the first.",
        },
        {
          stepNumber: 4,
          description: "Combine into the full description.",
          workingLatex: "\\text{shallow straight line, then a steeper straight line}",
          mafs: `<Mafs viewBox={{ x: [-0.5, 8], y: [-1, 10] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Polyline points={[[0, 0], [6, 3], [8, 9]]} color="var(--mafs-fg-accent)" />
  <Point x={6} y={3} color="var(--mafs-fg-blue)" />
  <Text x={3} y={1.5} attach="s" color="var(--mafs-fg-accent)">shallow (wide base)</Text>
  <Text x={7} y={6} attach="w" color="var(--mafs-fg-accent)">steep (narrow top)</Text>
  <Text x={6.5} y={0.6} attach="e">time</Text>
  <Text x={0.3} y={9.5} attach="e">depth</Text>
</Mafs>`,
          explanation:
            "Water fills the wide base first, so the graph is two straight segments: a shallow one (wide base) followed by a steeper one (narrow top). The corner between them is where the water level reaches the top of the wide cylinder.",
        },
      ],
      finalAnswer:
        "\\(\\text{Two straight segments: a shallow line (wide base) then a steeper line (narrow top).}\\)",
    },
  },
  {
    id: "ga32-028",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "On a temperature conversion graph, degrees Celsius is on the horizontal axis and degrees Fahrenheit on the vertical axis. The straight line passes through \\((0,\\,32)\\) and \\((100,\\,212)\\). Use the gradient and intercept to find the Fahrenheit value of \\(25^\\circ\\)C.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "conversion graph", "gradient and intercept", "non-origin line"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the line does NOT pass through the origin.",
          workingLatex: "F = m \\cdot C + c",
          explanation:
            "Unlike a simple proportion, Celsius–Fahrenheit has an offset: at 0°C the Fahrenheit value is 32, not 0. So we cannot just multiply by a rate — we model it as F = mC + c, with both a gradient m and an intercept c.",
        },
        {
          stepNumber: 2,
          description: "Find the gradient (Fahrenheit per Celsius degree).",
          workingLatex: "m = \\frac{212 - 32}{100 - 0} = \\frac{180}{100} = 1.8",
          explanation:
            "Between the two points the F-value rises by 212 − 32 = 180 while C rises by 100, so each Celsius degree is worth 180 ÷ 100 = 1.8 Fahrenheit degrees.",
        },
        {
          stepNumber: 3,
          description: "Identify the intercept.",
          workingLatex: "c = 32 \\quad (\\text{the } F \\text{-value at } C = 0)",
          explanation:
            "The line meets the vertical axis at (0, 32), so c = 32. Putting the gradient and intercept together gives the conversion rule F = 1.8C + 32.",
        },
        {
          stepNumber: 4,
          description: "Substitute C = 25.",
          workingLatex: "F = 1.8 \\cdot 25 + 32",
          explanation:
            "Replace C with 25 in the rule F = 1.8C + 32. The next line evaluates it.",
        },
        {
          stepNumber: 5,
          description: "Evaluate (multiply before adding).",
          workingLatex: "F = 45 + 32 = 77",
          mafs: `<Mafs viewBox={{ x: [-10, 110], y: [-20, 220] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Line.Segment point1={[0, 32]} point2={[100, 212]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[25, 0]} point2={[25, 77]} color="var(--mafs-line-color)" opacity={0.4} />
  <Line.Segment point1={[0, 77]} point2={[25, 77]} color="var(--mafs-line-color)" opacity={0.4} />
  <Point x={0} y={32} color="var(--mafs-fg-accent)" />
  <Text x={2} y={32} attach="e" color="var(--mafs-fg-accent)">(0, 32)</Text>
  <Point x={25} y={77} color="var(--mafs-fg-blue)" />
  <Text x={25} y={77} attach="se" color="var(--mafs-fg-blue)">(25, 77)</Text>
  <Text x={75} y={10} attach="e">°C</Text>
  <Text x={3} y={208} attach="e">°F</Text>
</Mafs>`,
          explanation:
            "By order of operations, do 1.8 × 25 = 45 first, then add the 32 offset to get 77. So 25°C = 77°F. Forgetting to add the 32 is the classic slip here.",
        },
      ],
      finalAnswer: "\\(77^\\circ\\)F",
      canonicalAnswer: "77",
    },
  },
  {
    id: "ga32-029",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A speed–time graph for a car has two stages: from \\((0,\\,0)\\) it accelerates in a straight line to \\((6,\\,24)\\), then travels at constant speed until time \\(T\\), where time is in seconds and speed is in metres per second. The total distance travelled is \\(312\\) metres. Find the value of \\(T\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "speed-time graph", "area under graph", "solve for time", "multi-stage"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Total distance is the triangle plus the rectangle.",
          workingLatex: "\\text{distance} = A_{\\text{triangle}} + A_{\\text{rectangle}}",
          explanation:
            "The first stage is a triangle under the rising line; the second stage is a rectangle at the steady speed of 24 m/s. Their combined area is the total distance, 312 m.",
        },
        {
          stepNumber: 2,
          description: "Find the area of the acceleration triangle.",
          workingLatex: "A_{\\text{triangle}} = \\frac{1}{2} \\cdot 6 \\cdot 24 = 72 \\text{ m}",
          explanation:
            "Base 6 s, height 24 m/s: ½ × 6 × 24 = 72 m covered while accelerating. This part is fully known.",
        },
        {
          stepNumber: 3,
          description: "Express the rectangle's area using the unknown T.",
          workingLatex: "A_{\\text{rectangle}} = 24 \\cdot (T - 6)",
          explanation:
            "Constant speed begins at t = 6 and lasts until t = T, a duration of (T − 6) s, at 24 m/s. Its area (distance) is 24(T − 6). Using (T − 6), not T, is the key — the rectangle only starts after the triangle.",
        },
        {
          stepNumber: 4,
          description: "Set the total area equal to 312 m.",
          workingLatex: "72 + 24(T - 6) = 312",
          explanation:
            "Add the triangle and rectangle areas and set the sum equal to the given total distance of 312 m, giving an equation in T.",
        },
        {
          stepNumber: 5,
          description: "Isolate the rectangle term.",
          workingLatex: "24(T - 6) = 312 - 72 = 240",
          explanation:
            "Subtract the 72 m of the triangle from both sides, leaving 240 m to be covered at constant speed.",
        },
        {
          stepNumber: 6,
          description: "Solve for T.",
          workingLatex: "T - 6 = \\frac{240}{24} = 10 \\;\\Rightarrow\\; T = 16 \\text{ s}",
          mafs: `<Mafs viewBox={{ x: [-1.5, 18], y: [-3, 28] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Polygon points={[[0, 0], [6, 24], [16, 24], [16, 0]]} color="var(--mafs-fg-green)" fillOpacity={0.15} />
  <Polyline points={[[0, 0], [6, 24], [16, 24]]} color="var(--mafs-fg-accent)" />
  <Point x={6} y={24} color="var(--mafs-fg-blue)" />
  <Point x={16} y={24} color="var(--mafs-fg-blue)" />
  <Text x={6} y={24} attach="nw" color="var(--mafs-fg-blue)">(6, 24)</Text>
  <Text x={11} y={24} attach="n" color="var(--mafs-fg-blue)">T = 16</Text>
  <Text x={8} y={10} attach="n" color="var(--mafs-fg-green)">total 312 m</Text>
  <Text x={13} y={1.5} attach="e">time (s)</Text>
  <Text x={0.3} y={27} attach="e">speed (m/s)</Text>
</Mafs>`,
          explanation:
            "Divide both sides by 24 to get T − 6 = 10, then add 6 to get T = 16 s. Check: triangle 72 + rectangle 24 × 10 = 72 + 240 = 312 m. ✓",
        },
      ],
      finalAnswer: "\\(T = 16\\) s",
      canonicalAnswer: "16",
    },
  },
  {
    id: "ga32-030",
    topicRef: "ga32",
    topicTitle: "Real-life and non-standard graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Two runners race over \\(100\\) m. Aisha's distance–time graph is a straight line from \\((0,\\,0)\\) to \\((20,\\,100)\\). Bdale's graph is a straight line from \\((0,\\,0)\\) to \\((16,\\,80)\\), then a straight line from \\((16,\\,80)\\) to \\((24,\\,100)\\). Time is in seconds and distance is in metres. How many seconds after Aisha does Bdale finish the \\(100\\) m?",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["real-life graphs", "distance-time graph", "multi-stage", "compare", "finish time"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find when Aisha reaches 100 m.",
          workingLatex: "\\text{Aisha: } 100 \\text{ m at } t = 20 \\text{ s}",
          explanation:
            "Aisha's line ends at (20, 100), so she covers the full 100 m in 20 s. (Her steady speed is 100 ÷ 20 = 5 m/s, but here we only need the finish time.)",
        },
        {
          stepNumber: 2,
          description: "Find when Bdale reaches 100 m.",
          workingLatex: "\\text{Bdale: } 100 \\text{ m at } t = 24 \\text{ s}",
          explanation:
            "Bdale's graph first reaches distance 100 m at the end of his second segment, the point (24, 100), so he finishes at t = 24 s. His first 80 m at 80 ÷ 16 = 5 m/s was fast, then he slowed to 20 ÷ 8 = 2.5 m/s.",
        },
        {
          stepNumber: 3,
          description: "Subtract the two finishing times.",
          workingLatex: "24 - 20 = 4 \\text{ s}",
          mafs: `<Mafs viewBox={{ x: [-2, 27], y: [-10, 112] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Polyline points={[[0, 0], [20, 100]]} color="var(--mafs-fg-accent)" />
  <Polyline points={[[0, 0], [16, 80], [24, 100]]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[0, 100]} point2={[24, 100]} color="var(--mafs-line-color)" opacity={0.4} />
  <Point x={20} y={100} color="var(--mafs-fg-blue)" />
  <Point x={24} y={100} color="var(--mafs-fg-blue)" />
  <Text x={20} y={100} attach="nw" color="var(--mafs-fg-accent)">Aisha 20 s</Text>
  <Text x={24} y={100} attach="se" color="var(--mafs-fg-green)">Bdale 24 s</Text>
  <Text x={21} y={5} attach="e">time (s)</Text>
  <Text x={2} y={108} attach="e">distance (m)</Text>
</Mafs>`,
          explanation:
            "Bdale finishes at 24 s and Aisha at 20 s, so Bdale crosses the line 24 − 20 = 4 seconds after Aisha.",
        },
      ],
      finalAnswer: "\\(4\\) seconds",
      canonicalAnswer: "4",
    },
  },
];
