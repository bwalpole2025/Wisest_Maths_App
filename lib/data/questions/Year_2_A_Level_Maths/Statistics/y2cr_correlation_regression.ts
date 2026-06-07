import { Question } from "@/lib/types";

/**
 * Year 2 — Statistics § Correlation, Regression & Bivariate Data
 * Ref: y2cr
 * 71 questions. Diagrams: Mafs figures (questionMafs / step.mafs).
 */
export const questions: Question[] = [
  {
    id: "y2cr-001",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "A scientist measures the air temperature \\( t \\) (°C) and the number of ice creams \\( n \\) sold at a kiosk on 12 days. The product moment correlation coefficient is found to be \\( r = 0.91 \\). Describe the strength and direction of the correlation between temperature and ice cream sales.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["correlation", "pmcc", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the sign of \\( r \\).", workingLatex: "r = 0.91 > 0", explanation: "A positive value of \\( r \\) indicates positive correlation: as temperature increases, sales tend to increase." },
        { stepNumber: 2, description: "Judge the strength from the size of \\( r \\).", workingLatex: "0.91 \\approx 1", explanation: "A value very close to \\( +1 \\) means the points lie close to a straight line, so the correlation is strong." },
        { stepNumber: 3, description: "State the conclusion in context.", workingLatex: "", explanation: "There is strong positive correlation between air temperature and the number of ice creams sold." }
      ],
      finalAnswer: "Strong positive correlation: as the air temperature increases, the number of ice creams sold tends to increase.",
    },
  },
  {
    id: "y2cr-002",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "For a sample of 15 cars, the engine size \\( x \\) (litres) and the fuel economy \\( y \\) (miles per gallon) are recorded. The product moment correlation coefficient is \\( r = -0.84 \\). Interpret this value in context.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["correlation", "pmcc", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the sign of \\( r \\).", workingLatex: "r = -0.84 < 0", explanation: "A negative value of \\( r \\) indicates negative correlation: as engine size increases, fuel economy tends to decrease." },
        { stepNumber: 2, description: "Judge the strength from the size of \\( r \\).", workingLatex: "|-0.84| = 0.84 \\approx 1", explanation: "A value close to \\( -1 \\) means the points lie close to a straight line, so the correlation is strong." },
        { stepNumber: 3, description: "State the conclusion in context.", workingLatex: "", explanation: "There is strong negative correlation between engine size and fuel economy." }
      ],
      finalAnswer: "Strong negative correlation: as the engine size increases, the fuel economy (mpg) tends to decrease.",
    },
  },
  {
    id: "y2cr-003",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "A researcher records the daily hours of sunshine \\( h \\) and the daily rainfall \\( r_w \\) (mm) at a weather station over 20 days. The product moment correlation coefficient is \\( r = -0.12 \\). Describe the correlation between hours of sunshine and rainfall.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["correlation", "pmcc", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the sign of \\( r \\).", workingLatex: "r = -0.12 < 0", explanation: "The value is slightly negative, so any correlation present is negative in direction." },
        { stepNumber: 2, description: "Judge the strength from the size of \\( r \\).", workingLatex: "|-0.12| = 0.12 \\approx 0", explanation: "A value close to \\( 0 \\) means there is very little linear association between the variables." },
        { stepNumber: 3, description: "State the conclusion in context.", workingLatex: "", explanation: "There is little or no (very weak negative) linear correlation between hours of sunshine and daily rainfall." }
      ],
      finalAnswer: "Very weak (effectively no) negative correlation between hours of sunshine and daily rainfall.",
    },
  },
  {
    id: "y2cr-004",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The scatter diagram shows the height (cm) and shoe size of 10 students. Describe the correlation shown.",
    questionMafs: `<Mafs viewBox={{ x: [141.04, 183.92], y: [2.56, 10.6] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[148.08, 3.4]} point2={[183.92, 3.4]} color="var(--mafs-fg)" />
  <Line.Segment point1={[148.08, 3.4]} point2={[148.08, 10.6]} color="var(--mafs-fg)" />
  <Text x={150} y={3.4} attach="s">150</Text>
  <Text x={155} y={3.4} attach="s">155</Text>
  <Text x={160} y={3.4} attach="s">160</Text>
  <Text x={165} y={3.4} attach="s">165</Text>
  <Text x={170} y={3.4} attach="s">170</Text>
  <Text x={175} y={3.4} attach="s">175</Text>
  <Text x={180} y={3.4} attach="s">180</Text>
  <Text x={148.08} y={4} attach="w">4</Text>
  <Text x={148.08} y={5} attach="w">5</Text>
  <Text x={148.08} y={6} attach="w">6</Text>
  <Text x={148.08} y={7} attach="w">7</Text>
  <Text x={148.08} y={8} attach="w">8</Text>
  <Text x={148.08} y={9} attach="w">9</Text>
  <Text x={148.08} y={10} attach="w">10</Text>
  <Point x={150} y={4} color="var(--mafs-fg-blue)" />
  <Point x={155} y={5} color="var(--mafs-fg-blue)" />
  <Point x={158} y={5} color="var(--mafs-fg-blue)" />
  <Point x={162} y={6} color="var(--mafs-fg-blue)" />
  <Point x={165} y={6} color="var(--mafs-fg-blue)" />
  <Point x={168} y={7} color="var(--mafs-fg-blue)" />
  <Point x={172} y={8} color="var(--mafs-fg-blue)" />
  <Point x={175} y={8} color="var(--mafs-fg-blue)" />
  <Point x={178} y={9} color="var(--mafs-fg-blue)" />
  <Point x={182} y={10} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["scatter", "correlation", "describe"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Look at the overall trend of the points.", workingLatex: "", explanation: "As height increases, shoe size also increases, so the trend slopes upwards from left to right (positive)." },
        { stepNumber: 2, description: "Judge how closely the points follow a line.", workingLatex: "", explanation: "The points lie close to a straight line, so the correlation is strong." },
        { stepNumber: 3, description: "State the conclusion in context.", workingLatex: "", explanation: "There is strong positive correlation between height and shoe size." }
      ],
      finalAnswer: "Strong positive correlation between height and shoe size.",
    },
  },
  {
    id: "y2cr-005",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The scatter diagram shows the age (years) and the second-hand value (£1000s) of 10 used vans. Describe the correlation shown and interpret it in context.",
    questionMafs: `<Mafs viewBox={{ x: [-1.52, 10.54], y: [-0.6, 19.5] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[0.46, 1.5]} point2={[10.54, 1.5]} color="var(--mafs-fg)" />
  <Line.Segment point1={[0.46, 1.5]} point2={[0.46, 19.5]} color="var(--mafs-fg)" />
  <Text x={2} y={1.5} attach="s">2</Text>
  <Text x={4} y={1.5} attach="s">4</Text>
  <Text x={6} y={1.5} attach="s">6</Text>
  <Text x={8} y={1.5} attach="s">8</Text>
  <Text x={10} y={1.5} attach="s">10</Text>
  <Text x={0.46} y={5} attach="w">5</Text>
  <Text x={0.46} y={10} attach="w">10</Text>
  <Text x={0.46} y={15} attach="w">15</Text>
  <Point x={1} y={18} color="var(--mafs-fg-blue)" />
  <Point x={2} y={16} color="var(--mafs-fg-blue)" />
  <Point x={3} y={15} color="var(--mafs-fg-blue)" />
  <Point x={4} y={12} color="var(--mafs-fg-blue)" />
  <Point x={5} y={11} color="var(--mafs-fg-blue)" />
  <Point x={6} y={9} color="var(--mafs-fg-blue)" />
  <Point x={7} y={8} color="var(--mafs-fg-blue)" />
  <Point x={8} y={6} color="var(--mafs-fg-blue)" />
  <Point x={9} y={5} color="var(--mafs-fg-blue)" />
  <Point x={10} y={3} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 2,
    examStyle: true,
    yearCreated: 2026,
    tags: ["scatter", "correlation", "describe"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Look at the overall trend of the points.", workingLatex: "", explanation: "As the age of the van increases, its value decreases, so the trend slopes downwards (negative)." },
        { stepNumber: 2, description: "Judge how closely the points follow a line.", workingLatex: "", explanation: "The points lie close to a straight line, so the correlation is strong." },
        { stepNumber: 3, description: "Interpret in context.", workingLatex: "", explanation: "Older vans tend to be worth less, which is strong negative correlation." }
      ],
      finalAnswer: "Strong negative correlation: as a van gets older, its second-hand value tends to decrease.",
    },
  },
  {
    id: "y2cr-006",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The scatter diagram shows the shoe size and the exam mark (%) for 12 students. Describe the correlation shown.",
    questionMafs: `<Mafs viewBox={{ x: [2.6, 9.3], y: [29.92, 86.2] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[3.7, 35.8]} point2={[9.3, 35.8]} color="var(--mafs-fg)" />
  <Line.Segment point1={[3.7, 35.8]} point2={[3.7, 86.2]} color="var(--mafs-fg)" />
  <Text x={4} y={35.8} attach="s">4</Text>
  <Text x={5} y={35.8} attach="s">5</Text>
  <Text x={6} y={35.8} attach="s">6</Text>
  <Text x={7} y={35.8} attach="s">7</Text>
  <Text x={8} y={35.8} attach="s">8</Text>
  <Text x={9} y={35.8} attach="s">9</Text>
  <Text x={3.7} y={40} attach="w">40</Text>
  <Text x={3.7} y={50} attach="w">50</Text>
  <Text x={3.7} y={60} attach="w">60</Text>
  <Text x={3.7} y={70} attach="w">70</Text>
  <Text x={3.7} y={80} attach="w">80</Text>
  <Point x={4} y={62} color="var(--mafs-fg-blue)" />
  <Point x={4} y={48} color="var(--mafs-fg-blue)" />
  <Point x={5} y={75} color="var(--mafs-fg-blue)" />
  <Point x={5} y={40} color="var(--mafs-fg-blue)" />
  <Point x={6} y={55} color="var(--mafs-fg-blue)" />
  <Point x={6} y={82} color="var(--mafs-fg-blue)" />
  <Point x={7} y={50} color="var(--mafs-fg-blue)" />
  <Point x={7} y={68} color="var(--mafs-fg-blue)" />
  <Point x={8} y={45} color="var(--mafs-fg-blue)" />
  <Point x={8} y={78} color="var(--mafs-fg-blue)" />
  <Point x={9} y={60} color="var(--mafs-fg-blue)" />
  <Point x={9} y={52} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["scatter", "correlation", "describe"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Look at the overall pattern of the points.", workingLatex: "", explanation: "The points are scattered with no clear upward or downward trend." },
        { stepNumber: 2, description: "Judge the strength of any linear pattern.", workingLatex: "", explanation: "Because there is no clear line, there is essentially no linear correlation." },
        { stepNumber: 3, description: "State the conclusion in context.", workingLatex: "", explanation: "There is no correlation between shoe size and exam mark." }
      ],
      finalAnswer: "No correlation between shoe size and exam mark.",
    },
  },
  {
    id: "y2cr-007",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 07",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The scatter diagram shows the daily maximum temperature (°C) and the number of visitors (hundreds) at a museum on 11 days. Describe the strength and direction of the correlation shown.",
    questionMafs: `<Mafs viewBox={{ x: [3.24, 26.02], y: [1.56, 9.6] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[6.98, 2.4]} point2={[26.02, 2.4]} color="var(--mafs-fg)" />
  <Line.Segment point1={[6.98, 2.4]} point2={[6.98, 9.6]} color="var(--mafs-fg)" />
  <Text x={10} y={2.4} attach="s">10</Text>
  <Text x={15} y={2.4} attach="s">15</Text>
  <Text x={20} y={2.4} attach="s">20</Text>
  <Text x={25} y={2.4} attach="s">25</Text>
  <Text x={6.98} y={3} attach="w">3</Text>
  <Text x={6.98} y={4} attach="w">4</Text>
  <Text x={6.98} y={5} attach="w">5</Text>
  <Text x={6.98} y={6} attach="w">6</Text>
  <Text x={6.98} y={7} attach="w">7</Text>
  <Text x={6.98} y={8} attach="w">8</Text>
  <Text x={6.98} y={9} attach="w">9</Text>
  <Point x={8} y={9} color="var(--mafs-fg-blue)" />
  <Point x={10} y={7} color="var(--mafs-fg-blue)" />
  <Point x={12} y={8} color="var(--mafs-fg-blue)" />
  <Point x={14} y={6} color="var(--mafs-fg-blue)" />
  <Point x={15} y={8} color="var(--mafs-fg-blue)" />
  <Point x={17} y={5} color="var(--mafs-fg-blue)" />
  <Point x={18} y={6} color="var(--mafs-fg-blue)" />
  <Point x={20} y={4} color="var(--mafs-fg-blue)" />
  <Point x={21} y={6} color="var(--mafs-fg-blue)" />
  <Point x={23} y={3} color="var(--mafs-fg-blue)" />
  <Point x={25} y={4} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["scatter", "correlation", "describe", "weak"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Look at the overall trend of the points.", workingLatex: "", explanation: "As temperature increases, visitor numbers tend to fall, so the direction is negative." },
        { stepNumber: 2, description: "Judge how closely the points follow a line.", workingLatex: "", explanation: "The points are fairly spread out around the trend, so the correlation is weak rather than strong." },
        { stepNumber: 3, description: "State the conclusion in context.", workingLatex: "", explanation: "There is weak negative correlation between temperature and the number of museum visitors." }
      ],
      finalAnswer: "Weak negative correlation between daily maximum temperature and the number of museum visitors.",
    },
  },
  {
    id: "y2cr-008",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 08",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "A farmer studies how the amount of fertiliser \\( f \\) (kg per hectare) affects the crop yield \\( y \\) (tonnes per hectare). State which variable is the explanatory (independent) variable and which is the response (dependent) variable, giving a reason.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["explanatory", "response", "variables"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Decide which variable is controlled or set first.", workingLatex: "", explanation: "The farmer chooses how much fertiliser to apply, so fertiliser is the variable that is set or controlled." },
        { stepNumber: 2, description: "Decide which variable responds.", workingLatex: "", explanation: "The crop yield is expected to change as a result of the fertiliser, so yield responds to the fertiliser." },
        { stepNumber: 3, description: "State the conclusion.", workingLatex: "", explanation: "Fertiliser \\( f \\) is the explanatory variable; yield \\( y \\) is the response variable." }
      ],
      finalAnswer: "Fertiliser \\( f \\) is the explanatory (independent) variable and crop yield \\( y \\) is the response (dependent) variable, because the yield depends on how much fertiliser is applied.",
    },
  },
  {
    id: "y2cr-009",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 09",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "A coach records the number of hours \\( h \\) each athlete trains per week and their time \\( T \\) (seconds) for a 400 m run. Identify the explanatory variable and the response variable in this study, giving a reason.",
    marks: 2,
    examStyle: true,
    yearCreated: 2026,
    tags: ["explanatory", "response", "variables"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Decide which variable is set or chosen.", workingLatex: "", explanation: "The athlete decides how many hours to train, so training hours is the variable that is chosen." },
        { stepNumber: 2, description: "Decide which variable is the outcome.", workingLatex: "", explanation: "The 400 m time is expected to change as a result of training, so it is the outcome that responds." },
        { stepNumber: 3, description: "State the conclusion.", workingLatex: "", explanation: "Training hours \\( h \\) is explanatory; run time \\( T \\) is the response." }
      ],
      finalAnswer: "Training hours \\( h \\) is the explanatory (independent) variable and the 400 m time \\( T \\) is the response (dependent) variable, because the run time depends on the amount of training.",
    },
  },
  {
    id: "y2cr-010",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 10",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The scatter diagram shows the number of pages \\( x \\) of a document and the time \\( y \\) (minutes) taken to print it. The regression line of \\( y \\) on \\( x \\) is \\( y = 2 + 0.5x \\). Use the line to predict the printing time for a document of \\( 40 \\) pages.",
    questionMafs: `<Mafs viewBox={{ x: [-6.8, 73.6], y: [-0.2, 40] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[6.4, 4]} point2={[73.6, 4]} color="var(--mafs-fg)" />
  <Line.Segment point1={[6.4, 4]} point2={[6.4, 40]} color="var(--mafs-fg)" />
  <Text x={10} y={4} attach="s">10</Text>
  <Text x={20} y={4} attach="s">20</Text>
  <Text x={30} y={4} attach="s">30</Text>
  <Text x={40} y={4} attach="s">40</Text>
  <Text x={50} y={4} attach="s">50</Text>
  <Text x={60} y={4} attach="s">60</Text>
  <Text x={70} y={4} attach="s">70</Text>
  <Text x={6.4} y={10} attach="w">10</Text>
  <Text x={6.4} y={15} attach="w">15</Text>
  <Text x={6.4} y={20} attach="w">20</Text>
  <Text x={6.4} y={25} attach="w">25</Text>
  <Text x={6.4} y={30} attach="w">30</Text>
  <Text x={6.4} y={35} attach="w">35</Text>
  <Line.Segment point1={[10, 7]} point2={[70, 37]} color="var(--mafs-fg-orange)" />
  <Point x={10} y={7} color="var(--mafs-fg-blue)" />
  <Point x={20} y={12} color="var(--mafs-fg-blue)" />
  <Point x={30} y={17} color="var(--mafs-fg-blue)" />
  <Point x={35} y={20} color="var(--mafs-fg-blue)" />
  <Point x={45} y={25} color="var(--mafs-fg-blue)" />
  <Point x={50} y={26} color="var(--mafs-fg-blue)" />
  <Point x={60} y={33} color="var(--mafs-fg-blue)" />
  <Point x={70} y={36} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["regression", "prediction", "scatter"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the regression equation.", workingLatex: "y = 2 + 0.5x", explanation: "The line gives the predicted printing time \\( y \\) for a document of \\( x \\) pages." },
        { stepNumber: 2, description: "Substitute \\( x = 40 \\).", workingLatex: "y = 2 + 0.5 \\times 40", explanation: "We replace \\( x \\) with the number of pages we want to predict for." },
        { stepNumber: 3, description: "Evaluate.", workingLatex: "y = 2 + 20 = 22", explanation: "The predicted printing time is \\( 22 \\) minutes." }
      ],
      finalAnswer: "The predicted printing time for a 40-page document is \\( 22 \\) minutes.",
      canonicalAnswer: "22",
    },
  },
  {
    id: "y2cr-011",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 11",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The scatter diagram shows the daily mean temperature \\( x \\) (°C) and the number of cups of hot chocolate \\( y \\) sold at a café. The regression line of \\( y \\) on \\( x \\) is \\( y = 60 - 3x \\). Use the line to estimate the number of cups sold when the temperature is \\( 12 \\) °C.",
    questionMafs: `<Mafs viewBox={{ x: [-1.92, 16.84], y: [1.68, 59.3] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[1.16, 7.7]} point2={[16.84, 7.7]} color="var(--mafs-fg)" />
  <Line.Segment point1={[1.16, 7.7]} point2={[1.16, 59.3]} color="var(--mafs-fg)" />
  <Text x={2} y={7.7} attach="s">2</Text>
  <Text x={4} y={7.7} attach="s">4</Text>
  <Text x={6} y={7.7} attach="s">6</Text>
  <Text x={8} y={7.7} attach="s">8</Text>
  <Text x={10} y={7.7} attach="s">10</Text>
  <Text x={12} y={7.7} attach="s">12</Text>
  <Text x={14} y={7.7} attach="s">14</Text>
  <Text x={16} y={7.7} attach="s">16</Text>
  <Text x={1.16} y={20} attach="w">20</Text>
  <Text x={1.16} y={30} attach="w">30</Text>
  <Text x={1.16} y={40} attach="w">40</Text>
  <Text x={1.16} y={50} attach="w">50</Text>
  <Line.Segment point1={[2, 54]} point2={[16, 12]} color="var(--mafs-fg-orange)" />
  <Point x={2} y={55} color="var(--mafs-fg-blue)" />
  <Point x={4} y={49} color="var(--mafs-fg-blue)" />
  <Point x={6} y={41} color="var(--mafs-fg-blue)" />
  <Point x={8} y={37} color="var(--mafs-fg-blue)" />
  <Point x={10} y={29} color="var(--mafs-fg-blue)" />
  <Point x={12} y={25} color="var(--mafs-fg-blue)" />
  <Point x={14} y={17} color="var(--mafs-fg-blue)" />
  <Point x={16} y={13} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["regression", "prediction", "scatter"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the regression equation.", workingLatex: "y = 60 - 3x", explanation: "The line gives the predicted number of cups \\( y \\) at temperature \\( x \\) °C." },
        { stepNumber: 2, description: "Substitute \\( x = 12 \\).", workingLatex: "y = 60 - 3 \\times 12", explanation: "We replace \\( x \\) with the temperature we want a prediction for." },
        { stepNumber: 3, description: "Evaluate.", workingLatex: "y = 60 - 36 = 24", explanation: "The estimated number of cups sold is \\( 24 \\)." }
      ],
      finalAnswer: "At \\( 12 \\) °C the café is predicted to sell about \\( 24 \\) cups of hot chocolate.",
      canonicalAnswer: "24",
    },
  },
  {
    id: "y2cr-012",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 12",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The regression line of \\( y \\) on \\( x \\) for a set of data with \\( x \\) values ranging from \\( 5 \\) to \\( 40 \\) is \\( y = 3.2 + 1.5x \\). Use the line to predict the value of \\( y \\) when \\( x = 20 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["regression", "prediction", "substitution"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute \\( x = 20 \\) into the regression equation.", workingLatex: "y = 3.2 + 1.5 \\times 20", explanation: "Replace \\( x \\) with the given value." },
        { stepNumber: 2, description: "Evaluate the product.", workingLatex: "y = 3.2 + 30", explanation: "\\( 1.5 \\times 20 = 30 \\)." },
        { stepNumber: 3, description: "Add the terms.", workingLatex: "y = 33.2", explanation: "Sum the intercept and the product." }
      ],
      finalAnswer: "\\( y = 33.2 \\)",
      canonicalAnswer: "33.2",
    },
  },
  {
    id: "y2cr-013",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 13",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "A company models monthly sales \\( s \\) (in £1000s) against advertising spend \\( a \\) (in £1000s) using \\( s = 12 + 2.4a \\). The advertising spend in the data ranged from \\( 1 \\) to \\( 10 \\). Predict the sales when the advertising spend is \\( a = 6 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["regression", "prediction", "substitution"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute \\( a = 6 \\) into the model.", workingLatex: "s = 12 + 2.4 \\times 6", explanation: "Replace \\( a \\) with \\( 6 \\)." },
        { stepNumber: 2, description: "Evaluate the product.", workingLatex: "s = 12 + 14.4", explanation: "\\( 2.4 \\times 6 = 14.4 \\)." },
        { stepNumber: 3, description: "Add the terms.", workingLatex: "s = 26.4", explanation: "Sales predicted in £1000s." }
      ],
      finalAnswer: "\\( s = 26.4 \\) (i.e. £26 400)",
      canonicalAnswer: "26.4",
    },
  },
  {
    id: "y2cr-014",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 14",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The regression line \\( y = 3.2 + 1.5x \\) was fitted to data where \\( x \\) ranged from \\( 5 \\) to \\( 40 \\). A prediction is made at \\( x = 20 \\). State whether this is interpolation or extrapolation.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["interpolation", "extrapolation", "reliability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the prediction point with the data range.", workingLatex: "5 \\le 20 \\le 40", explanation: "The value \\( x = 20 \\) lies inside the range of the observed \\( x \\) data." },
        { stepNumber: 2, description: "Classify the prediction.", workingLatex: "", explanation: "A prediction within the data range is interpolation, which is generally reliable." }
      ],
      finalAnswer: "Interpolation, since \\( x = 20 \\) lies within the data range \\( 5 \\) to \\( 40 \\); the prediction is reliable.",
    },
  },
  {
    id: "y2cr-015",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 15",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The regression line \\( y = 3.2 + 1.5x \\) was fitted to data where \\( x \\) ranged from \\( 5 \\) to \\( 40 \\). A student uses it to predict \\( y \\) at \\( x = 60 \\). State whether this prediction is interpolation or extrapolation and comment on its reliability.",
    marks: 2,
    examStyle: true,
    yearCreated: 2026,
    tags: ["extrapolation", "reliability", "prediction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare \\( x = 60 \\) with the data range.", workingLatex: "60 > 40", explanation: "The value lies beyond the largest observed \\( x \\) value." },
        { stepNumber: 2, description: "Classify the prediction.", workingLatex: "", explanation: "Predicting outside the data range is extrapolation." },
        { stepNumber: 3, description: "Comment on reliability.", workingLatex: "", explanation: "Extrapolation is unreliable because the linear relationship is not known to hold beyond the observed data." }
      ],
      finalAnswer: "Extrapolation, since \\( x = 60 \\) is beyond the data range \\( 5 \\) to \\( 40 \\). It is unreliable because the model may not hold outside the range of the data.",
    },
  },
  {
    id: "y2cr-016",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 16",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "A regression line relating a plant's height \\( h \\) (cm) to the number of weeks \\( t \\) since planting is \\( h = 4 + 2.5t \\). Interpret the gradient \\( b = 2.5 \\) in the context of this model.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["gradient", "interpretation", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify what the gradient measures.", workingLatex: "b = \\dfrac{\\Delta h}{\\Delta t}", explanation: "The gradient is the change in \\( h \\) per unit increase in \\( t \\)." },
        { stepNumber: 2, description: "State the units.", workingLatex: "b = 2.5 \\text{ cm per week}", explanation: "Height is in cm and time in weeks." },
        { stepNumber: 3, description: "Interpret in context.", workingLatex: "", explanation: "Each extra week corresponds to an increase in predicted height." }
      ],
      finalAnswer: "The gradient means the plant's height increases by about \\( 2.5 \\) cm for each additional week since planting.",
    },
  },
  {
    id: "y2cr-017",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 17",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "A taxi fare \\( C \\) (£) is modelled against distance \\( d \\) (km) by \\( C = 2.8 + 1.2d \\). Interpret the intercept \\( a = 2.8 \\) in context.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["intercept", "interpretation", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify what the intercept represents.", workingLatex: "C = 2.8 \\text{ when } d = 0", explanation: "The intercept is the value of \\( C \\) when \\( d = 0 \\)." },
        { stepNumber: 2, description: "Interpret in context.", workingLatex: "", explanation: "A distance of zero corresponds to the starting charge before any travel." }
      ],
      finalAnswer: "The intercept means the fixed starting charge is £2.80, the fare before any distance is travelled.",
    },
  },
  {
    id: "y2cr-018",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 18",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The mass \\( m \\) (g) of a chemical produced is modelled against temperature \\( T \\) (°C) by \\( m = 15 + 0.8T \\), for \\( T \\) between \\( 10 \\) and \\( 50 \\). Interpret the gradient \\( b = 0.8 \\) in context.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["gradient", "interpretation", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify what the gradient measures.", workingLatex: "b = \\dfrac{\\Delta m}{\\Delta T}", explanation: "The gradient is the change in mass per 1°C rise in temperature." },
        { stepNumber: 2, description: "State the units.", workingLatex: "b = 0.8 \\text{ g per }^{\\circ}\\text{C}", explanation: "Mass is in g, temperature in °C." },
        { stepNumber: 3, description: "Interpret in context.", workingLatex: "", explanation: "Higher temperature is associated with more chemical produced." }
      ],
      finalAnswer: "The gradient means the mass produced increases by about \\( 0.8 \\) g for each 1°C rise in temperature.",
    },
  },
  {
    id: "y2cr-019",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 19",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Data show a strong positive correlation between the number of ice creams sold and the number of people who go swimming each day. A student claims that selling more ice creams causes more people to swim. Does the correlation prove this causal claim?",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["causation", "correlation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the key principle.", workingLatex: "", explanation: "Correlation does not imply causation." },
        { stepNumber: 2, description: "Identify a possible explanation.", workingLatex: "", explanation: "A third factor, such as hot weather, may drive both variables." }
      ],
      finalAnswer: "No. Correlation does not imply causation; a third factor such as hot weather likely increases both ice cream sales and swimming.",
    },
  },
  {
    id: "y2cr-020",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 20",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The table summarises the regression line of test score \\( y \\) on hours of revision \\( x \\) as \\( y = 38 + 4.5x \\), based on students who revised between \\( 2 \\) and \\( 12 \\) hours. (a) Predict the score for a student who revised \\( 8 \\) hours. (b) State whether this is interpolation or extrapolation.",
    questionMafs: `<Mafs viewBox={{ x: [-0.8, 12.6], y: [36.2, 96.5] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[1.4, 42.5]} point2={[12.6, 42.5]} color="var(--mafs-fg)" />
  <Line.Segment point1={[1.4, 42.5]} point2={[1.4, 96.5]} color="var(--mafs-fg)" />
  <Text x={2} y={42.5} attach="s">2</Text>
  <Text x={4} y={42.5} attach="s">4</Text>
  <Text x={6} y={42.5} attach="s">6</Text>
  <Text x={8} y={42.5} attach="s">8</Text>
  <Text x={10} y={42.5} attach="s">10</Text>
  <Text x={12} y={42.5} attach="s">12</Text>
  <Text x={1.4} y={50} attach="w">50</Text>
  <Text x={1.4} y={60} attach="w">60</Text>
  <Text x={1.4} y={70} attach="w">70</Text>
  <Text x={1.4} y={80} attach="w">80</Text>
  <Text x={1.4} y={90} attach="w">90</Text>
  <Line.Segment point1={[2, 47]} point2={[12, 92]} color="var(--mafs-fg-orange)" />
  <Point x={2} y={47} color="var(--mafs-fg-blue)" />
  <Point x={4} y={56} color="var(--mafs-fg-blue)" />
  <Point x={5} y={60} color="var(--mafs-fg-blue)" />
  <Point x={7} y={70} color="var(--mafs-fg-blue)" />
  <Point x={9} y={79} color="var(--mafs-fg-blue)" />
  <Point x={12} y={92} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["regression", "prediction", "interpolation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute \\( x = 8 \\) into the line.", workingLatex: "y = 38 + 4.5 \\times 8", explanation: "Replace \\( x \\) with \\( 8 \\) hours." },
        { stepNumber: 2, description: "Evaluate.", workingLatex: "y = 38 + 36 = 74", explanation: "\\( 4.5 \\times 8 = 36 \\)." },
        { stepNumber: 3, description: "Classify the prediction.", workingLatex: "2 \\le 8 \\le 12", explanation: "\\( x = 8 \\) lies within the data range, so this is interpolation." }
      ],
      finalAnswer: "(a) \\( y = 74 \\). (b) Interpolation, since \\( 8 \\) lies within the range \\( 2 \\) to \\( 12 \\) hours.",
      canonicalAnswer: "74",
    },
  },
  {
    id: "y2cr-021",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 21",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The number of units \\( y \\) sold is modelled against price \\( x \\) (£) by \\( y = 120 - 6x \\), based on prices from \\( 4 \\) to \\( 15 \\). (a) Predict the number of units sold at a price of £18. (b) State whether this is interpolation or extrapolation and comment on whether the prediction can be trusted.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["regression", "prediction", "extrapolation", "reliability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute \\( x = 18 \\) into the model.", workingLatex: "y = 120 - 6 \\times 18", explanation: "Replace \\( x \\) with \\( 18 \\)." },
        { stepNumber: 2, description: "Evaluate.", workingLatex: "y = 120 - 108 = 12", explanation: "\\( 6 \\times 18 = 108 \\)." },
        { stepNumber: 3, description: "Classify the prediction.", workingLatex: "18 > 15", explanation: "\\( x = 18 \\) is beyond the data range, so this is extrapolation." },
        { stepNumber: 4, description: "Comment on reliability.", workingLatex: "", explanation: "Extrapolation is unreliable as the model may not hold beyond the observed prices." }
      ],
      finalAnswer: "(a) \\( y = 12 \\) units. (b) Extrapolation, since £18 is beyond the data range \\( 4 \\) to \\( 15 \\); the prediction cannot be trusted.",
      canonicalAnswer: "12",
    },
  },
  {
    id: "y2cr-022",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 22",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "A study finds a positive correlation between the shoe size of primary school children and their reading ability. Explain why this does not mean that having larger feet causes better reading.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["causation", "correlation", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the principle.", workingLatex: "", explanation: "Correlation does not imply causation." },
        { stepNumber: 2, description: "Identify the lurking variable.", workingLatex: "", explanation: "Age affects both shoe size and reading ability: older children tend to have larger feet and read better." }
      ],
      finalAnswer: "Correlation does not imply causation. A lurking variable, the child's age, increases both shoe size and reading ability, creating the association without any direct cause.",
    },
  },
  {
    id: "y2cr-023",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 23",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A scatter diagram shows the time spent revising, \\( x \\) hours, and the test score, \\( y \\%\\), for 9 students. Most points lie close to an increasing straight line, but one student spent \\( 8 \\) hours yet scored only \\( 30\\% \\). The least squares regression line of \\( y \\) on \\( x \\) is \\( y = 35 + 6x \\) and the product moment correlation coefficient is \\( r = 0.82 \\).\n\n| Student | A | B | C | D | E | F | G | H | I |\n|---|---|---|---|---|---|---|---|---|---|\n| \\( x \\) (hours) | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 8 |\n| \\( y \\) (%) | 40 | 48 | 52 | 60 | 66 | 72 | 78 | 30 | 84 |\n\n(a) Identify the outlier. (b) State, with a reason, the effect of removing the outlier on the value of \\( r \\) and on the gradient of the regression line.",
    questionMafs: `<Mafs viewBox={{ x: [-0.96, 8.42], y: [17.04, 89.4] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[0.58, 24.6]} point2={[8.42, 24.6]} color="var(--mafs-fg)" />
  <Line.Segment point1={[0.58, 24.6]} point2={[0.58, 89.4]} color="var(--mafs-fg)" />
  <Text x={1} y={24.6} attach="s">1</Text>
  <Text x={2} y={24.6} attach="s">2</Text>
  <Text x={3} y={24.6} attach="s">3</Text>
  <Text x={4} y={24.6} attach="s">4</Text>
  <Text x={5} y={24.6} attach="s">5</Text>
  <Text x={6} y={24.6} attach="s">6</Text>
  <Text x={7} y={24.6} attach="s">7</Text>
  <Text x={8} y={24.6} attach="s">8</Text>
  <Text x={0.58} y={30} attach="w">30</Text>
  <Text x={0.58} y={40} attach="w">40</Text>
  <Text x={0.58} y={50} attach="w">50</Text>
  <Text x={0.58} y={60} attach="w">60</Text>
  <Text x={0.58} y={70} attach="w">70</Text>
  <Text x={0.58} y={80} attach="w">80</Text>
  <Line.Segment point1={[1, 41]} point2={[8, 83]} color="var(--mafs-fg-orange)" />
  <Point x={1} y={40} color="var(--mafs-fg-blue)" />
  <Point x={2} y={48} color="var(--mafs-fg-blue)" />
  <Point x={3} y={52} color="var(--mafs-fg-blue)" />
  <Point x={4} y={60} color="var(--mafs-fg-blue)" />
  <Point x={5} y={66} color="var(--mafs-fg-blue)" />
  <Point x={6} y={72} color="var(--mafs-fg-blue)" />
  <Point x={7} y={78} color="var(--mafs-fg-blue)" />
  <Point x={8} y={30} color="var(--mafs-fg-blue)" />
  <Point x={8} y={84} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["scatter", "outlier", "regression", "pmcc"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Locate the point that does not follow the overall trend.", workingLatex: "(8,\\,30)", explanation: "Student H sits well below the rising pattern; every other point increases steadily with x, so (8, 30) is the outlier." },
        { stepNumber: 2, description: "Consider the strength of correlation once the outlier is removed.", workingLatex: "r:\\ 0.82 \\to \\text{closer to } 1", explanation: "The remaining points lie very close to a straight line, so the correlation becomes stronger and r increases towards +1." },
        { stepNumber: 3, description: "Consider the effect on the gradient.", workingLatex: "(8,30)\\ \\text{pulls the line down on the right}", explanation: "The outlier has a large x and a low y, dragging the right end of the line downwards and reducing the gradient." },
        { stepNumber: 4, description: "State the conclusion.", workingLatex: "r\\uparrow,\\quad \\text{gradient}\\uparrow", explanation: "Removing (8, 30) lets the line steepen (gradient increases) and makes the correlation stronger." }
      ],
      finalAnswer: "The outlier is student H at \\( (8,\\,30) \\). Removing it strengthens the correlation (\\( r \\) increases towards \\( +1 \\)) and increases the gradient of the regression line, since the point lay below the trend at a large \\( x \\)-value.",
    },
  },
  {
    id: "y2cr-024",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 24",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The least squares regression line of monthly heating cost \\( \\pounds C \\) on mean outside temperature \\( t\\,^{\\circ}\\text{C} \\) for a house is \\( C = 180 - 9.5t \\). Use this model to predict the heating cost in a month when the mean outside temperature is \\( 6\\,^{\\circ}\\text{C} \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["prediction", "regression"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute the given temperature into the model.", workingLatex: "C = 180 - 9.5 \\times 6", explanation: "We want the predicted cost when t = 6, so substitute t = 6 into the regression equation." },
        { stepNumber: 2, description: "Evaluate the product.", workingLatex: "9.5 \\times 6 = 57", explanation: "Multiply the gradient by the temperature." },
        { stepNumber: 3, description: "Complete the subtraction.", workingLatex: "C = 180 - 57 = 123", explanation: "The predicted heating cost is £123." }
      ],
      finalAnswer: "The predicted heating cost is \\( \\pounds123 \\).",
      canonicalAnswer: "123",
    },
  },
  {
    id: "y2cr-025",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 25",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The regression line of fuel used \\( y \\) litres on distance driven \\( x \\) km is \\( y = 1.2 + 0.085x \\). On one journey of \\( 120 \\) km the actual fuel used was \\( 13.5 \\) litres. Calculate the residual for this journey.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["residual", "regression", "prediction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the predicted fuel use at x = 120.", workingLatex: "\\hat{y} = 1.2 + 0.085 \\times 120", explanation: "Substitute x = 120 into the regression line to get the value the model predicts." },
        { stepNumber: 2, description: "Evaluate the prediction.", workingLatex: "\\hat{y} = 1.2 + 10.2 = 11.4", explanation: "0.085 × 120 = 10.2, so the predicted fuel is 11.4 litres." },
        { stepNumber: 3, description: "Apply the residual definition (observed − predicted).", workingLatex: "\\text{residual} = 13.5 - 11.4", explanation: "The residual is the observed value minus the value predicted by the line." },
        { stepNumber: 4, description: "Evaluate.", workingLatex: "\\text{residual} = 2.1", explanation: "The actual fuel used was 2.1 litres more than predicted." }
      ],
      finalAnswer: "The residual is \\( 13.5 - 11.4 = 2.1 \\) litres.",
      canonicalAnswer: "2.1",
    },
  },
  {
    id: "y2cr-026",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 26",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A scatter diagram shows the mass \\( y \\) grams of a plant against the number of days \\( x \\) it has been growing. The least squares regression line is \\( y = 4 + 2.5x \\). For the plant measured on day \\( 10 \\) the recorded mass was \\( 24 \\) grams. Find the residual for this observation and state whether the point lies above or below the regression line.",
    questionMafs: `<Mafs viewBox={{ x: [-1.36, 14.72], y: [1.8, 42] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[1.28, 6]} point2={[14.72, 6]} color="var(--mafs-fg)" />
  <Line.Segment point1={[1.28, 6]} point2={[1.28, 42]} color="var(--mafs-fg)" />
  <Text x={2} y={6} attach="s">2</Text>
  <Text x={4} y={6} attach="s">4</Text>
  <Text x={6} y={6} attach="s">6</Text>
  <Text x={8} y={6} attach="s">8</Text>
  <Text x={10} y={6} attach="s">10</Text>
  <Text x={12} y={6} attach="s">12</Text>
  <Text x={14} y={6} attach="s">14</Text>
  <Text x={1.28} y={10} attach="w">10</Text>
  <Text x={1.28} y={15} attach="w">15</Text>
  <Text x={1.28} y={20} attach="w">20</Text>
  <Text x={1.28} y={25} attach="w">25</Text>
  <Text x={1.28} y={30} attach="w">30</Text>
  <Text x={1.28} y={35} attach="w">35</Text>
  <Line.Segment point1={[2, 9]} point2={[14, 39]} color="var(--mafs-fg-orange)" />
  <Point x={2} y={9} color="var(--mafs-fg-blue)" />
  <Point x={4} y={15} color="var(--mafs-fg-blue)" />
  <Point x={6} y={18} color="var(--mafs-fg-blue)" />
  <Point x={8} y={25} color="var(--mafs-fg-blue)" />
  <Point x={10} y={24} color="var(--mafs-fg-blue)" />
  <Point x={12} y={35} color="var(--mafs-fg-blue)" />
  <Point x={14} y={38} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["residual", "scatter", "regression"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Predict the mass on day 10.", workingLatex: "\\hat{y} = 4 + 2.5 \\times 10", explanation: "Substitute x = 10 into the regression equation." },
        { stepNumber: 2, description: "Evaluate the prediction.", workingLatex: "\\hat{y} = 4 + 25 = 29", explanation: "The model predicts a mass of 29 grams on day 10." },
        { stepNumber: 3, description: "Compute the residual.", workingLatex: "\\text{residual} = 24 - 29 = -5", explanation: "Observed minus predicted gives −5 grams." },
        { stepNumber: 4, description: "Interpret the sign.", workingLatex: "-5 < 0 \\Rightarrow \\text{below the line}", explanation: "A negative residual means the observed point lies below the regression line." }
      ],
      finalAnswer: "The residual is \\( 24 - 29 = -5 \\) grams; since it is negative the point lies below the regression line.",
      canonicalAnswer: "-5",
    },
  },
  {
    id: "y2cr-027",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 27",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Data on age \\( x \\) years (from \\( 18 \\) to \\( 35 \\)) and reaction time \\( y \\) milliseconds gives the regression line \\( y = 180 + 4.2x \\) with \\( r = 0.78 \\). (a) Predict the reaction time for a person aged \\( 25 \\). (b) Comment on the reliability of using this model to predict the reaction time of a person aged \\( 70 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["reliability", "prediction", "regression"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Predict the reaction time at x = 25.", workingLatex: "\\hat{y} = 180 + 4.2 \\times 25", explanation: "Age 25 lies inside the data range 18–35, so substitute x = 25." },
        { stepNumber: 2, description: "Evaluate.", workingLatex: "\\hat{y} = 180 + 105 = 285", explanation: "The predicted reaction time is 285 ms." },
        { stepNumber: 3, description: "Note the position of age 70 relative to the data.", workingLatex: "70 \\notin [18,\\,35]", explanation: "Age 70 is far outside the range of the original data." },
        { stepNumber: 4, description: "Discuss reliability.", workingLatex: "\\text{extrapolation}", explanation: "Predicting at age 70 is extrapolation: there is no evidence the linear relationship continues beyond the observed range, so the prediction is unreliable." },
        { stepNumber: 5, description: "Conclude.", workingLatex: "285\\ \\text{ms (reliable)},\\quad 70\\ \\text{(unreliable)}", explanation: "The age-25 prediction is interpolation and reasonably reliable given r = 0.78; the age-70 prediction is unreliable." }
      ],
      finalAnswer: "(a) \\( \\hat{y} = 180 + 4.2 \\times 25 = 285 \\) ms. (b) Age \\( 70 \\) lies far outside the data range \\( 18 \\)–\\( 35 \\), so predicting there is extrapolation; the linear model may not hold and the prediction is unreliable.",
      canonicalAnswer: "285",
    },
  },
  {
    id: "y2cr-028",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 28",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "For each of the following pairs of variables, state whether you would expect the product moment correlation coefficient \\( r \\) to be positive or negative, giving a brief reason.\n\n(a) The age of a used car and its resale value.\n(b) A person's height and their shoe size.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sign-of-r", "pmcc"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Consider (a).", workingLatex: "x\\uparrow \\Rightarrow y\\downarrow", explanation: "As a car gets older its resale value tends to fall, so the variables move in opposite directions." },
        { stepNumber: 2, description: "State the sign for (a).", workingLatex: "r < 0", explanation: "An inverse (decreasing) relationship gives a negative correlation coefficient." },
        { stepNumber: 3, description: "Consider (b) and state its sign.", workingLatex: "x\\uparrow \\Rightarrow y\\uparrow \\Rightarrow r > 0", explanation: "Taller people tend to have larger feet, so height and shoe size increase together giving positive correlation." }
      ],
      finalAnswer: "(a) \\( r \\) is negative: as age increases resale value decreases. (b) \\( r \\) is positive: taller people tend to have larger shoe sizes, so the variables increase together.",
    },
  },
  {
    id: "y2cr-029",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 29",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A set of bivariate data \\( (x, y) \\) has product moment correlation coefficient \\( r = 0.64 \\). The data are coded using \\( p = \\dfrac{x - 20}{5} \\) and \\( q = 3y + 7 \\). State the value of the product moment correlation coefficient between \\( p \\) and \\( q \\), justifying your answer.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["coding", "pmcc"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the form of the coding.", workingLatex: "p = \\tfrac{1}{5}x - 4,\\quad q = 3y + 7", explanation: "Both codings are linear of the form a + bx with positive multipliers (1/5 and 3)." },
        { stepNumber: 2, description: "Recall the invariance property.", workingLatex: "r_{pq} = r_{xy}", explanation: "The PMCC is unchanged by a linear coding a + bx with b > 0, because it only rescales and shifts the axes." },
        { stepNumber: 3, description: "State the value.", workingLatex: "r_{pq} = 0.64", explanation: "Since both multipliers are positive, the correlation coefficient is identical." }
      ],
      finalAnswer: "The product moment correlation coefficient between \\( p \\) and \\( q \\) is \\( 0.64 \\), because linear coding of the form \\( a + bx \\) with \\( b > 0 \\) leaves the PMCC unchanged.",
      canonicalAnswer: "0.64",
    },
  },
  {
    id: "y2cr-030",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 30",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The variables \\( x \\) and \\( y \\) are coded using \\( p = x - 100 \\) and \\( q = y - 50 \\). The regression line of \\( q \\) on \\( p \\) is found to be \\( q = 2 + 1.5p \\). Find the equation of the regression line of \\( y \\) on \\( x \\).",
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ["coding", "regression"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute the coding into the coded line.", workingLatex: "q = 2 + 1.5p", explanation: "Replace p and q with their definitions in terms of x and y." },
        { stepNumber: 2, description: "Express p and q in terms of x and y.", workingLatex: "y - 50 = 2 + 1.5(x - 100)", explanation: "Since q = y − 50 and p = x − 100." },
        { stepNumber: 3, description: "Expand the bracket.", workingLatex: "y - 50 = 2 + 1.5x - 150", explanation: "Multiply out 1.5 × (x − 100) = 1.5x − 150." },
        { stepNumber: 4, description: "Simplify the constants.", workingLatex: "y - 50 = 1.5x - 148", explanation: "Combine 2 − 150 = −148." },
        { stepNumber: 5, description: "Make y the subject.", workingLatex: "y = 1.5x - 98", explanation: "Add 50 to both sides: −148 + 50 = −98." }
      ],
      finalAnswer: "The regression line of \\( y \\) on \\( x \\) is \\( y = 1.5x - 98 \\).",
    },
  },
  {
    id: "y2cr-031",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 31",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The scatter diagram shows the daily ice-cream sales \\( y \\) (in hundreds) against the maximum daily temperature \\( x\\,^{\\circ}\\text{C} \\) for a kiosk over \\( 8 \\) days. One day, despite a high temperature of \\( 30\\,^{\\circ}\\text{C} \\), sales were very low because the kiosk closed early. The regression line shown is \\( y = -2 + 0.4x \\). Identify the outlier and explain its effect on the product moment correlation coefficient.",
    questionMafs: `<Mafs viewBox={{ x: [9.24, 32.02], y: [-0.016, 11.24] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[12.98, 1.16]} point2={[32.02, 1.16]} color="var(--mafs-fg)" />
  <Line.Segment point1={[12.98, 1.16]} point2={[12.98, 11.24]} color="var(--mafs-fg)" />
  <Text x={15} y={1.16} attach="s">15</Text>
  <Text x={20} y={1.16} attach="s">20</Text>
  <Text x={25} y={1.16} attach="s">25</Text>
  <Text x={30} y={1.16} attach="s">30</Text>
  <Text x={12.98} y={2} attach="w">2</Text>
  <Text x={12.98} y={4} attach="w">4</Text>
  <Text x={12.98} y={6} attach="w">6</Text>
  <Text x={12.98} y={8} attach="w">8</Text>
  <Text x={12.98} y={10} attach="w">10</Text>
  <Line.Segment point1={[14, 3.6]} point2={[31, 10.4]} color="var(--mafs-fg-orange)" />
  <Point x={14} y={3.4} color="var(--mafs-fg-blue)" />
  <Point x={17} y={4.6} color="var(--mafs-fg-blue)" />
  <Point x={20} y={6.1} color="var(--mafs-fg-blue)" />
  <Point x={22} y={6.9} color="var(--mafs-fg-blue)" />
  <Point x={25} y={8.2} color="var(--mafs-fg-blue)" />
  <Point x={28} y={9.1} color="var(--mafs-fg-blue)" />
  <Point x={30} y={2} color="var(--mafs-fg-blue)" />
  <Point x={31} y={10.4} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["outlier", "scatter", "pmcc"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the point that breaks the upward trend.", workingLatex: "(30,\\,2.0)", explanation: "Sales of 2.0 (hundred) at 30 °C are far below the rising pattern, so this is the outlier." },
        { stepNumber: 2, description: "Describe the trend of the other points.", workingLatex: "x\\uparrow \\Rightarrow y\\uparrow", explanation: "The remaining seven points show a strong positive linear relationship." },
        { stepNumber: 3, description: "Consider the effect of the outlier on r.", workingLatex: "r\\ \\text{reduced (towards 0)}", explanation: "A high-temperature, low-sales point opposes the positive trend, weakening the correlation." },
        { stepNumber: 4, description: "State the conclusion.", workingLatex: "\\text{remove outlier} \\Rightarrow r\\ \\text{closer to } +1", explanation: "Without (30, 2.0) the points lie much closer to a line, so r would increase towards +1." }
      ],
      finalAnswer: "The outlier is the point \\( (30,\\,2.0) \\). It works against the strong positive trend, so it reduces (weakens) the PMCC; removing it would bring \\( r \\) closer to \\( +1 \\).",
    },
  },
  {
    id: "y2cr-032",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 32",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "For a study on exam performance, the regression line of final mark \\( y \\) on attendance \\( x\\% \\) is \\( y = 12 + 0.7x \\). A student with \\( 80\\% \\) attendance achieved a final mark of \\( 75 \\). Find the predicted mark and hence the residual.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["residual", "regression", "prediction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Predict the mark at 80% attendance.", workingLatex: "\\hat{y} = 12 + 0.7 \\times 80", explanation: "Substitute x = 80 into the regression line." },
        { stepNumber: 2, description: "Evaluate the prediction.", workingLatex: "\\hat{y} = 12 + 56 = 68", explanation: "0.7 × 80 = 56, giving a predicted mark of 68." },
        { stepNumber: 3, description: "Compute the residual.", workingLatex: "\\text{residual} = 75 - 68", explanation: "Residual = observed − predicted." },
        { stepNumber: 4, description: "Evaluate.", workingLatex: "\\text{residual} = 7", explanation: "The student scored 7 marks above the model's prediction." }
      ],
      finalAnswer: "Predicted mark \\( = 68 \\); residual \\( = 75 - 68 = 7 \\).",
      canonicalAnswer: "7",
    },
  },
  {
    id: "y2cr-033",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 33",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The lengths \\( x \\) cm and masses \\( y \\) grams of \\( 12 \\) fish, with \\( x \\) ranging from \\( 10 \\) to \\( 24 \\) cm, give the regression line \\( y = -60 + 14x \\) and \\( r = 0.45 \\). A biologist wants to predict the mass of a fish of length \\( 18 \\) cm. (a) Find the prediction. (b) Comment on its reliability, referring to both the data range and the value of \\( r \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["reliability", "prediction", "pmcc", "regression"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Predict the mass at x = 18.", workingLatex: "\\hat{y} = -60 + 14 \\times 18", explanation: "Length 18 cm lies within the range 10–24 cm, so substitute x = 18." },
        { stepNumber: 2, description: "Evaluate.", workingLatex: "\\hat{y} = -60 + 252 = 192", explanation: "14 × 18 = 252, so the predicted mass is 192 g." },
        { stepNumber: 3, description: "Comment on the data range.", workingLatex: "18 \\in [10,\\,24]", explanation: "The prediction is interpolation, which is generally safer than extrapolation." },
        { stepNumber: 4, description: "Comment on the strength of correlation.", workingLatex: "r = 0.45\\ \\text{(weak/moderate)}", explanation: "A PMCC of only 0.45 indicates a weak-to-moderate linear relationship, so the data are quite scattered about the line." },
        { stepNumber: 5, description: "Conclude.", workingLatex: "\\text{interpolation but weak } r", explanation: "Although the prediction is within range, the low value of r means individual masses vary widely, so the prediction should be treated with caution." }
      ],
      finalAnswer: "(a) \\( \\hat{y} = -60 + 14 \\times 18 = 192 \\) g. (b) Length \\( 18 \\) cm is within the data range so this is interpolation; however \\( r = 0.45 \\) is only weak/moderate, so the points are quite scattered and the prediction is not very reliable.",
      canonicalAnswer: "192",
    },
  },
  {
    id: "y2cr-034",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 34",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Rainfall \\( x \\) mm and crop yield \\( y \\) tonnes are coded by \\( p = \\dfrac{x}{10} \\) and \\( q = y - 4 \\). The regression line of \\( q \\) on \\( p \\) is \\( q = 1.5 + 0.8p \\). (a) Find the regression line of \\( y \\) on \\( x \\). (b) Use it to estimate the yield when the rainfall is \\( 50 \\) mm.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["coding", "regression", "prediction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute the coding into the coded line.", workingLatex: "y - 4 = 1.5 + 0.8\\left(\\tfrac{x}{10}\\right)", explanation: "Replace q with y − 4 and p with x/10." },
        { stepNumber: 2, description: "Simplify the p term.", workingLatex: "y - 4 = 1.5 + 0.08x", explanation: "0.8 × (x/10) = 0.08x." },
        { stepNumber: 3, description: "Make y the subject.", workingLatex: "y = 5.5 + 0.08x", explanation: "Add 4 to both sides: 1.5 + 4 = 5.5." },
        { stepNumber: 4, description: "Substitute x = 50 for the estimate.", workingLatex: "y = 5.5 + 0.08 \\times 50 = 9.5", explanation: "0.08 × 50 = 4, so y = 5.5 + 4 = 9.5 tonnes." }
      ],
      finalAnswer: "(a) \\( y = 5.5 + 0.08x \\). (b) When \\( x = 50 \\), \\( y = 5.5 + 0.08 \\times 50 = 9.5 \\) tonnes.",
      canonicalAnswer: "9.5",
    },
  },
  {
    id: "y2cr-035",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 35",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The scatter diagram shows the number of hours of sunshine \\( x \\) and the number of visitors \\( y \\) (in hundreds) at a beach over \\( 8 \\) days. The regression line of \\( y \\) on \\( x \\) is \\( y = 1 + 1.5x \\).\n\n| Day | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |\n|---|---|---|---|---|---|---|---|---|\n| \\( x \\) (hours) | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |\n| \\( y \\) (hundreds) | 3.8 | 5.6 | 7.1 | 8.4 | 2.0 | 11.6 | 13.1 | 14.4 |\n\n(a) Calculate the residual for day \\( 6 \\). (b) Identify which day's reading is an outlier and explain its effect on the gradient of the regression line.",
    questionMafs: `<Mafs viewBox={{ x: [0.04, 9.42], y: [-1, 15.75] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[1.58, 0.75]} point2={[9.42, 0.75]} color="var(--mafs-fg)" />
  <Line.Segment point1={[1.58, 0.75]} point2={[1.58, 15.75]} color="var(--mafs-fg)" />
  <Text x={2} y={0.75} attach="s">2</Text>
  <Text x={3} y={0.75} attach="s">3</Text>
  <Text x={4} y={0.75} attach="s">4</Text>
  <Text x={5} y={0.75} attach="s">5</Text>
  <Text x={6} y={0.75} attach="s">6</Text>
  <Text x={7} y={0.75} attach="s">7</Text>
  <Text x={8} y={0.75} attach="s">8</Text>
  <Text x={9} y={0.75} attach="s">9</Text>
  <Text x={1.58} y={2} attach="w">2</Text>
  <Text x={1.58} y={4} attach="w">4</Text>
  <Text x={1.58} y={6} attach="w">6</Text>
  <Text x={1.58} y={8} attach="w">8</Text>
  <Text x={1.58} y={10} attach="w">10</Text>
  <Text x={1.58} y={12} attach="w">12</Text>
  <Text x={1.58} y={14} attach="w">14</Text>
  <Line.Segment point1={[2, 4]} point2={[9, 14.5]} color="var(--mafs-fg-orange)" />
  <Point x={2} y={3.8} color="var(--mafs-fg-blue)" />
  <Point x={3} y={5.6} color="var(--mafs-fg-blue)" />
  <Point x={4} y={7.1} color="var(--mafs-fg-blue)" />
  <Point x={5} y={8.4} color="var(--mafs-fg-blue)" />
  <Point x={6} y={2} color="var(--mafs-fg-blue)" />
  <Point x={7} y={11.6} color="var(--mafs-fg-blue)" />
  <Point x={8} y={13.1} color="var(--mafs-fg-blue)" />
  <Point x={9} y={14.4} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["outlier", "residual", "scatter", "regression"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Predict the day-6 value (x = 7).", workingLatex: "\\hat{y} = 1 + 1.5 \\times 7 = 11.5", explanation: "Day 6 has x = 7 hours, so the model predicts 11.5 hundred visitors." },
        { stepNumber: 2, description: "Compute the day-6 residual.", workingLatex: "\\text{residual} = 11.6 - 11.5 = 0.1", explanation: "Observed (11.6) minus predicted (11.5) gives a residual of 0.1." },
        { stepNumber: 3, description: "Find the outlier.", workingLatex: "\\text{Day 5: } (6,\\,2.0)", explanation: "On day 5 (x = 6) there were only 2.0 hundred visitors, far below the rising trend, so day 5 is the outlier." },
        { stepNumber: 4, description: "Predicted vs observed for the outlier.", workingLatex: "\\hat{y} = 1 + 1.5 \\times 6 = 10,\\ \\text{obs} = 2.0", explanation: "Its large negative residual (2.0 − 10 = −8) confirms it lies well below the line." },
        { stepNumber: 5, description: "Effect on the gradient.", workingLatex: "\\text{low } y \\text{ at mid } x \\Rightarrow \\text{pulls line down centrally}", explanation: "A low value near the middle of the x-range pulls the line down there; removing it would let the line rise more steeply, increasing the gradient." }
      ],
      finalAnswer: "(a) Residual for day 6 \\( = 11.6 - 11.5 = 0.1 \\) (hundred). (b) Day \\( 5 \\), the point \\( (6,\\,2.0) \\), is the outlier; it lies well below the trend, so removing it would steepen the line and increase the gradient.",
      canonicalAnswer: "0.1",
    },
  },
  {
    id: "y2cr-036",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 36",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A data set \\( (x, y) \\) has product moment correlation coefficient \\( r = -0.71 \\). The data are recoded as \\( u = 4x + 1 \\) and \\( v = \\dfrac{y - 30}{2} \\). (a) State the value of the PMCC between \\( u \\) and \\( v \\). (b) Explain why the sign of the correlation is unchanged. (c) State what would happen to the PMCC if instead \\( u = -4x + 1 \\) were used.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["coding", "pmcc", "sign-of-r"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the codings.", workingLatex: "u = 4x + 1,\\quad v = \\tfrac{1}{2}y - 15", explanation: "Both are linear with positive multipliers (4 and 1/2)." },
        { stepNumber: 2, description: "Apply invariance for (a).", workingLatex: "r_{uv} = r_{xy} = -0.71", explanation: "Linear coding a + bx with b > 0 leaves the PMCC unchanged in both value and sign." },
        { stepNumber: 3, description: "Explain (b).", workingLatex: "b > 0\\ \\text{for both}", explanation: "Positive multipliers preserve the order/direction of the data, so the negative association is retained." },
        { stepNumber: 4, description: "Consider (c) with a negative multiplier on x.", workingLatex: "u = -4x + 1 \\Rightarrow r_{uv} = +0.71", explanation: "A negative multiplier reflects the x-values, reversing the direction of the relationship, so the sign of r flips to +0.71 (magnitude unchanged)." }
      ],
      finalAnswer: "(a) \\( r_{uv} = -0.71 \\). (b) Both codings use positive multipliers (\\( b > 0 \\)), which only rescale/shift the axes and preserve the direction of the relationship. (c) With \\( u = -4x + 1 \\) the negative multiplier reverses the direction, so the PMCC becomes \\( +0.71 \\).",
    },
  },
  {
    id: "y2cr-037",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 37",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The variables \\( x \\) and \\( y \\) are believed to be related by a model of the form \\( y=ax^n \\). A plot of \\( \\log y \\) against \\( \\log x \\) gives the regression line \\( \\log y = 0.6 + 1.5\\log x \\). Find the value of \\( n \\) and the value of \\( a \\) (to 3 sf), and write down the model relating \\( y \\) and \\( x \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.56, 2.12], y: [-0.12, 3.9] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[-0.12, 0.3]} point2={[2.12, 0.3]} color="var(--mafs-fg)" />
  <Line.Segment point1={[-0.12, 0.3]} point2={[-0.12, 3.9]} color="var(--mafs-fg)" />
  <Text x={0} y={0.3} attach="s">0</Text>
  <Text x={0.5} y={0.3} attach="s">0.5</Text>
  <Text x={1} y={0.3} attach="s">1</Text>
  <Text x={1.5} y={0.3} attach="s">1.5</Text>
  <Text x={2} y={0.3} attach="s">2</Text>
  <Text x={-0.12} y={1} attach="w">1</Text>
  <Text x={-0.12} y={1.5} attach="w">1.5</Text>
  <Text x={-0.12} y={2} attach="w">2</Text>
  <Text x={-0.12} y={2.5} attach="w">2.5</Text>
  <Text x={-0.12} y={3} attach="w">3</Text>
  <Text x={-0.12} y={3.5} attach="w">3.5</Text>
  <Line.Segment point1={[0, 0.6]} point2={[2, 3.6]} color="var(--mafs-fg-orange)" />
  <Point x={0} y={0.6} color="var(--mafs-fg-blue)" />
  <Point x={0.5} y={1.35} color="var(--mafs-fg-blue)" />
  <Point x={1} y={2.1} color="var(--mafs-fg-blue)" />
  <Point x={1.5} y={2.85} color="var(--mafs-fg-blue)" />
  <Point x={2} y={3.6} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["correlation-regression", "linearising-logs", "power-model"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Take logs of the model and compare with the linear fit.", workingLatex: "y=ax^n \\Rightarrow \\log y = \\log a + n\\log x", explanation: "Taking base-10 logs of \\( y=ax^n \\) gives a straight line in \\( \\log x \\) and \\( \\log y \\)." },
        { stepNumber: 2, description: "Identify the gradient as n.", workingLatex: "n = \\text{gradient} = 1.5", explanation: "The coefficient of \\( \\log x \\) in the regression line is the power \\( n \\)." },
        { stepNumber: 3, description: "Identify the intercept as log a.", workingLatex: "\\log a = 0.6", explanation: "The intercept of the line equals \\( \\log a \\)." },
        { stepNumber: 4, description: "Solve for a.", workingLatex: "a = 10^{0.6} = 3.98", explanation: "Raise 10 to the power of the intercept; \\( 10^{0.6}=3.981\\ldots \\)" },
        { stepNumber: 5, description: "Write the model.", workingLatex: "y = 3.98\\,x^{1.5}", explanation: "Substitute \\( a \\) and \\( n \\) back into \\( y=ax^n \\)." }
      ],
      finalAnswer: "\\( n=1.5 \\), \\( a=10^{0.6}=3.98 \\) (3 sf), so \\( y=3.98\\,x^{1.5} \\).",
    },
  },
  {
    id: "y2cr-038",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 38",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A population \\( P \\) (thousands) after \\( t \\) years is modelled by \\( P=kb^{t} \\). A plot of \\( \\log P \\) against \\( t \\) gives the regression line \\( \\log P = 1.2 + 0.08t \\). Find the values of \\( k \\) and \\( b \\) (to 3 sf) and write down the model.",
    questionMafs: `<Mafs viewBox={{ x: [-5.6, 21.2], y: [0.816, 2.96] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[-1.2, 1.04]} point2={[21.2, 1.04]} color="var(--mafs-fg)" />
  <Line.Segment point1={[-1.2, 1.04]} point2={[-1.2, 2.96]} color="var(--mafs-fg)" />
  <Text x={0} y={1.04} attach="s">0</Text>
  <Text x={5} y={1.04} attach="s">5</Text>
  <Text x={10} y={1.04} attach="s">10</Text>
  <Text x={15} y={1.04} attach="s">15</Text>
  <Text x={20} y={1.04} attach="s">20</Text>
  <Text x={-1.2} y={1.5} attach="w">1.5</Text>
  <Text x={-1.2} y={2} attach="w">2</Text>
  <Text x={-1.2} y={2.5} attach="w">2.5</Text>
  <Line.Segment point1={[0, 1.2]} point2={[20, 2.8]} color="var(--mafs-fg-orange)" />
  <Point x={0} y={1.2} color="var(--mafs-fg-blue)" />
  <Point x={5} y={1.6} color="var(--mafs-fg-blue)" />
  <Point x={10} y={2} color="var(--mafs-fg-blue)" />
  <Point x={15} y={2.4} color="var(--mafs-fg-blue)" />
  <Point x={20} y={2.8} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["correlation-regression", "linearising-logs", "exponential-model", "population"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Take logs of the exponential model.", workingLatex: "P=kb^{t} \\Rightarrow \\log P = \\log k + t\\log b", explanation: "Logs linearise \\( P=kb^t \\): \\( \\log P \\) against \\( t \\) is a straight line." },
        { stepNumber: 2, description: "Match the intercept.", workingLatex: "\\log k = 1.2 \\Rightarrow k = 10^{1.2} = 15.8", explanation: "Intercept gives \\( \\log k \\); \\( 10^{1.2}=15.84\\ldots \\) thousand." },
        { stepNumber: 3, description: "Match the gradient.", workingLatex: "\\log b = 0.08 \\Rightarrow b = 10^{0.08} = 1.20", explanation: "Gradient gives \\( \\log b \\); \\( 10^{0.08}=1.2023\\ldots \\)" },
        { stepNumber: 4, description: "Write the model.", workingLatex: "P = 15.8\\,(1.20)^{t}", explanation: "Substitute the values back into \\( P=kb^t \\)." }
      ],
      finalAnswer: "\\( k=10^{1.2}=15.8 \\), \\( b=10^{0.08}=1.20 \\) (3 sf), so \\( P=15.8(1.20)^{t} \\) thousand.",
    },
  },
  {
    id: "y2cr-039",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 39",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The period \\( T \\) of a pendulum and its length \\( L \\) are modelled by \\( T=aL^{n} \\). A plot of \\( \\log T \\) against \\( \\log L \\) gives \\( \\log T = -0.30 + 0.50\\log L \\). Find \\( a \\) and \\( n \\) (to 3 sf), and predict \\( T \\) when \\( L=2.5 \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.224, 0.848], y: [-0.396, 0.14] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[-0.048, -0.34]} point2={[0.848, -0.34]} color="var(--mafs-fg)" />
  <Line.Segment point1={[-0.048, -0.34]} point2={[-0.048, 0.14]} color="var(--mafs-fg)" />
  <Text x={0} y={-0.34} attach="s">0</Text>
  <Text x={0.2} y={-0.34} attach="s">0.2</Text>
  <Text x={0.4} y={-0.34} attach="s">0.4</Text>
  <Text x={0.6} y={-0.34} attach="s">0.6</Text>
  <Text x={0.8} y={-0.34} attach="s">0.8</Text>
  <Text x={-0.048} y={-0.2} attach="w">-0.2</Text>
  <Text x={-0.048} y={-0.1} attach="w">-0.1</Text>
  <Text x={-0.048} y={0} attach="w">0</Text>
  <Text x={-0.048} y={0.1} attach="w">0.1</Text>
  <Line.Segment point1={[0, -0.3]} point2={[0.8, 0.1]} color="var(--mafs-fg-orange)" />
  <Point x={0} y={-0.3} color="var(--mafs-fg-blue)" />
  <Point x={0.2} y={-0.2} color="var(--mafs-fg-blue)" />
  <Point x={0.4} y={-0.1} color="var(--mafs-fg-blue)" />
  <Point x={0.6} y={0} color="var(--mafs-fg-blue)" />
  <Point x={0.8} y={0.1} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["correlation-regression", "linearising-logs", "power-model", "prediction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Linearise the model.", workingLatex: "\\log T = \\log a + n\\log L", explanation: "Compare with the given regression line." },
        { stepNumber: 2, description: "Read off n and log a.", workingLatex: "n = 0.50, \\quad \\log a = -0.30", explanation: "Gradient is \\( n \\); intercept is \\( \\log a \\)." },
        { stepNumber: 3, description: "Find a.", workingLatex: "a = 10^{-0.30} = 0.501", explanation: "\\( 10^{-0.3}=0.5012\\ldots \\)" },
        { stepNumber: 4, description: "Write the model and predict at L=2.5.", workingLatex: "T = 0.501\\,L^{0.5} = 0.501\\sqrt{2.5} = 0.792", explanation: "Substitute \\( L=2.5 \\): \\( \\sqrt{2.5}=1.581 \\), \\( 0.501\\times1.581=0.792 \\)." }
      ],
      finalAnswer: "\\( a=0.501 \\), \\( n=0.5 \\); at \\( L=2.5 \\), \\( T=0.501\\sqrt{2.5}\\approx0.792 \\).",
      canonicalAnswer: "0.792",
    },
  },
  {
    id: "y2cr-040",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 40",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A radioactive sample of mass \\( m \\) (grams) after \\( t \\) days follows \\( m=kb^{t} \\). The regression of \\( \\log m \\) on \\( t \\) is \\( \\log m = 1.70 - 0.05t \\). Find \\( k \\) and \\( b \\) (to 3 sf), and predict the mass after \\( t=20 \\) days.",
    questionMafs: `<Mafs viewBox={{ x: [-11.2, 42.4], y: [-0.78, 1.9] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[-2.4, -0.5]} point2={[42.4, -0.5]} color="var(--mafs-fg)" />
  <Line.Segment point1={[-2.4, -0.5]} point2={[-2.4, 1.9]} color="var(--mafs-fg)" />
  <Text x={0} y={-0.5} attach="s">0</Text>
  <Text x={10} y={-0.5} attach="s">10</Text>
  <Text x={20} y={-0.5} attach="s">20</Text>
  <Text x={30} y={-0.5} attach="s">30</Text>
  <Text x={40} y={-0.5} attach="s">40</Text>
  <Text x={-2.4} y={0} attach="w">0</Text>
  <Text x={-2.4} y={0.5} attach="w">0.5</Text>
  <Text x={-2.4} y={1} attach="w">1</Text>
  <Text x={-2.4} y={1.5} attach="w">1.5</Text>
  <Line.Segment point1={[0, 1.7]} point2={[40, -0.3]} color="var(--mafs-fg-orange)" />
  <Point x={0} y={1.7} color="var(--mafs-fg-blue)" />
  <Point x={10} y={1.2} color="var(--mafs-fg-blue)" />
  <Point x={20} y={0.7} color="var(--mafs-fg-blue)" />
  <Point x={30} y={0.2} color="var(--mafs-fg-blue)" />
  <Point x={40} y={-0.3} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["correlation-regression", "linearising-logs", "exponential-model", "radioactive-decay", "prediction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Linearise.", workingLatex: "\\log m = \\log k + t\\log b", explanation: "Compare with the regression line." },
        { stepNumber: 2, description: "Find k from the intercept.", workingLatex: "\\log k = 1.70 \\Rightarrow k = 10^{1.70} = 50.1", explanation: "\\( 10^{1.7}=50.12\\ldots \\) grams." },
        { stepNumber: 3, description: "Find b from the gradient.", workingLatex: "\\log b = -0.05 \\Rightarrow b = 10^{-0.05} = 0.891", explanation: "\\( 10^{-0.05}=0.8913\\ldots \\) (decay since \\( b<1 \\))." },
        { stepNumber: 4, description: "Predict at t=20.", workingLatex: "\\log m = 1.70 - 0.05(20) = 0.70 \\Rightarrow m = 10^{0.70} = 5.01", explanation: "Use the linear fit directly: \\( 10^{0.7}=5.012 \\) grams." }
      ],
      finalAnswer: "\\( k=50.1 \\), \\( b=0.891 \\); after 20 days \\( m=10^{0.7}\\approx5.01 \\) g.",
      canonicalAnswer: "5.01",
    },
  },
  {
    id: "y2cr-041",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 41",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "For a set of leaves, area \\( A \\) (cm\\(^2\\)) and length \\( \\ell \\) (cm) satisfy \\( A=a\\,\\ell^{\\,n} \\). A plot of \\( \\log A \\) against \\( \\log \\ell \\) gives \\( \\log A = 0.18 + 2.0\\log \\ell \\). Find \\( a \\) and \\( n \\) (to 3 sf) and state the model.",
    questionMafs: `<Mafs viewBox={{ x: [-0.336, 1.272], y: [-0.396, 2.82] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[-0.072, -0.06]} point2={[1.272, -0.06]} color="var(--mafs-fg)" />
  <Line.Segment point1={[-0.072, -0.06]} point2={[-0.072, 2.82]} color="var(--mafs-fg)" />
  <Text x={0} y={-0.06} attach="s">0</Text>
  <Text x={0.2} y={-0.06} attach="s">0.2</Text>
  <Text x={0.4} y={-0.06} attach="s">0.4</Text>
  <Text x={0.6} y={-0.06} attach="s">0.6</Text>
  <Text x={0.8} y={-0.06} attach="s">0.8</Text>
  <Text x={1} y={-0.06} attach="s">1</Text>
  <Text x={1.2} y={-0.06} attach="s">1.2</Text>
  <Text x={-0.072} y={0.5} attach="w">0.5</Text>
  <Text x={-0.072} y={1} attach="w">1</Text>
  <Text x={-0.072} y={1.5} attach="w">1.5</Text>
  <Text x={-0.072} y={2} attach="w">2</Text>
  <Text x={-0.072} y={2.5} attach="w">2.5</Text>
  <Line.Segment point1={[0, 0.18]} point2={[1.2, 2.58]} color="var(--mafs-fg-orange)" />
  <Point x={0} y={0.18} color="var(--mafs-fg-blue)" />
  <Point x={0.3} y={0.78} color="var(--mafs-fg-blue)" />
  <Point x={0.6} y={1.38} color="var(--mafs-fg-blue)" />
  <Point x={0.9} y={1.98} color="var(--mafs-fg-blue)" />
  <Point x={1.2} y={2.58} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["correlation-regression", "linearising-logs", "power-model", "area-length"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Linearise.", workingLatex: "\\log A = \\log a + n\\log \\ell", explanation: "Compare with the given line." },
        { stepNumber: 2, description: "Read off n.", workingLatex: "n = 2.0", explanation: "Gradient gives the power; area scaling roughly as length squared." },
        { stepNumber: 3, description: "Find a.", workingLatex: "\\log a = 0.18 \\Rightarrow a = 10^{0.18} = 1.51", explanation: "\\( 10^{0.18}=1.5136\\ldots \\)" },
        { stepNumber: 4, description: "State the model.", workingLatex: "A = 1.51\\,\\ell^{2.0}", explanation: "Substitute \\( a \\) and \\( n \\)." }
      ],
      finalAnswer: "\\( a=10^{0.18}=1.51 \\), \\( n=2.0 \\), so \\( A=1.51\\,\\ell^{2} \\).",
    },
  },
  {
    id: "y2cr-042",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 42",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Two data points lie on the regression of \\( \\log y \\) on \\( \\log x \\): \\( (\\log x,\\log y)=(0.40,\\,1.10) \\) and \\( (1.00,\\,2.30) \\). Assuming \\( y=ax^{n} \\), find the gradient and intercept of the line, then determine \\( n \\) and \\( a \\) (to 3 sf).",
    questionMafs: `<Mafs viewBox={{ x: [0.232, 1.036], y: [0.812, 2.42] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[0.364, 0.98]} point2={[1.036, 0.98]} color="var(--mafs-fg)" />
  <Line.Segment point1={[0.364, 0.98]} point2={[0.364, 2.42]} color="var(--mafs-fg)" />
  <Text x={0.4} y={0.98} attach="s">0.4</Text>
  <Text x={0.5} y={0.98} attach="s">0.5</Text>
  <Text x={0.6} y={0.98} attach="s">0.6</Text>
  <Text x={0.7} y={0.98} attach="s">0.7</Text>
  <Text x={0.8} y={0.98} attach="s">0.8</Text>
  <Text x={0.9} y={0.98} attach="s">0.9</Text>
  <Text x={1} y={0.98} attach="s">1</Text>
  <Text x={0.364} y={1.2} attach="w">1.2</Text>
  <Text x={0.364} y={1.4} attach="w">1.4</Text>
  <Text x={0.364} y={1.6} attach="w">1.6</Text>
  <Text x={0.364} y={1.8} attach="w">1.8</Text>
  <Text x={0.364} y={2} attach="w">2</Text>
  <Text x={0.364} y={2.2} attach="w">2.2</Text>
  <Line.Segment point1={[0.4, 1.1]} point2={[1, 2.3]} color="var(--mafs-fg-orange)" />
  <Point x={0.4} y={1.1} color="var(--mafs-fg-blue)" />
  <Point x={0.55} y={1.4} color="var(--mafs-fg-blue)" />
  <Point x={0.7} y={1.7} color="var(--mafs-fg-blue)" />
  <Point x={0.85} y={2} color="var(--mafs-fg-blue)" />
  <Point x={1} y={2.3} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["correlation-regression", "linearising-logs", "power-model", "find-line"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the gradient.", workingLatex: "n = \\frac{2.30-1.10}{1.00-0.40} = \\frac{1.20}{0.60} = 2.0", explanation: "Gradient of the linearised line is the power \\( n \\)." },
        { stepNumber: 2, description: "Find the intercept.", workingLatex: "\\log y - 2.0\\log x: \\; 1.10 - 2.0(0.40) = 0.30", explanation: "Use \\( \\log a = \\log y - n\\log x \\) at one point." },
        { stepNumber: 3, description: "State the line.", workingLatex: "\\log y = 0.30 + 2.0\\log x", explanation: "Intercept \\( 0.30 \\), gradient \\( 2.0 \\)." },
        { stepNumber: 4, description: "Find a.", workingLatex: "a = 10^{0.30} = 2.00", explanation: "\\( 10^{0.3}=1.995\\approx2.00 \\)." },
        { stepNumber: 5, description: "Write the model.", workingLatex: "y = 2.00\\,x^{2.0}", explanation: "Combine \\( a \\) and \\( n \\)." }
      ],
      finalAnswer: "Gradient \\( n=2.0 \\), intercept \\( \\log a=0.30 \\), \\( a=10^{0.30}=2.00 \\); \\( y=2.00\\,x^{2} \\).",
    },
  },
  {
    id: "y2cr-043",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 43",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The concentration \\( C \\) (mg/L) of a drug \\( t \\) hours after a dose is modelled by \\( C=kb^{t} \\). The regression of \\( \\log C \\) on \\( t \\) is \\( \\log C = 0.90 - 0.10t \\). Find \\( k \\) and \\( b \\) (to 3 sf), and predict \\( C \\) after 6 hours.",
    questionMafs: `<Mafs viewBox={{ x: [-2.24, 8.48], y: [-0.092, 0.98] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[-0.48, 0.02]} point2={[8.48, 0.02]} color="var(--mafs-fg)" />
  <Line.Segment point1={[-0.48, 0.02]} point2={[-0.48, 0.98]} color="var(--mafs-fg)" />
  <Text x={0} y={0.02} attach="s">0</Text>
  <Text x={2} y={0.02} attach="s">2</Text>
  <Text x={4} y={0.02} attach="s">4</Text>
  <Text x={6} y={0.02} attach="s">6</Text>
  <Text x={8} y={0.02} attach="s">8</Text>
  <Text x={-0.48} y={0.2} attach="w">0.2</Text>
  <Text x={-0.48} y={0.4} attach="w">0.4</Text>
  <Text x={-0.48} y={0.6} attach="w">0.6</Text>
  <Text x={-0.48} y={0.8} attach="w">0.8</Text>
  <Line.Segment point1={[0, 0.9]} point2={[8, 0.1]} color="var(--mafs-fg-orange)" />
  <Point x={0} y={0.9} color="var(--mafs-fg-blue)" />
  <Point x={2} y={0.7} color="var(--mafs-fg-blue)" />
  <Point x={4} y={0.5} color="var(--mafs-fg-blue)" />
  <Point x={6} y={0.3} color="var(--mafs-fg-blue)" />
  <Point x={8} y={0.1} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["correlation-regression", "linearising-logs", "exponential-model", "drug-concentration", "prediction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Linearise.", workingLatex: "\\log C = \\log k + t\\log b", explanation: "Compare with the regression line." },
        { stepNumber: 2, description: "Find k.", workingLatex: "\\log k = 0.90 \\Rightarrow k = 10^{0.90} = 7.94", explanation: "\\( 10^{0.9}=7.943\\ldots \\) mg/L initial concentration." },
        { stepNumber: 3, description: "Find b.", workingLatex: "\\log b = -0.10 \\Rightarrow b = 10^{-0.10} = 0.794", explanation: "\\( 10^{-0.1}=0.7943\\ldots \\)" },
        { stepNumber: 4, description: "Predict at t=6.", workingLatex: "\\log C = 0.90 - 0.10(6) = 0.30 \\Rightarrow C = 10^{0.30} = 2.00", explanation: "\\( 10^{0.3}=1.995\\approx2.00 \\) mg/L." }
      ],
      finalAnswer: "\\( k=7.94 \\), \\( b=0.794 \\); after 6 h, \\( C=10^{0.30}\\approx2.00 \\) mg/L.",
      canonicalAnswer: "2.00",
    },
  },
  {
    id: "y2cr-044",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 44",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Resistance \\( R \\) (ohms) of a wire and its diameter \\( d \\) (mm) satisfy \\( R=ad^{n} \\). A plot of \\( \\log R \\) against \\( \\log d \\) gives \\( \\log R = 1.40 - 2.00\\log d \\). Find \\( a \\) and \\( n \\) (to 3 sf), and predict \\( R \\) when \\( d=0.5 \\) mm.",
    questionMafs: `<Mafs viewBox={{ x: [-0.936, 0.672], y: [-0.376, 2.84] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[-0.672, -0.04]} point2={[0.672, -0.04]} color="var(--mafs-fg)" />
  <Line.Segment point1={[-0.672, -0.04]} point2={[-0.672, 2.84]} color="var(--mafs-fg)" />
  <Text x={-0.4} y={-0.04} attach="s">-0.4</Text>
  <Text x={-0.2} y={-0.04} attach="s">-0.2</Text>
  <Text x={0} y={-0.04} attach="s">0</Text>
  <Text x={0.2} y={-0.04} attach="s">0.2</Text>
  <Text x={0.4} y={-0.04} attach="s">0.4</Text>
  <Text x={0.6} y={-0.04} attach="s">0.6</Text>
  <Text x={-0.672} y={0.5} attach="w">0.5</Text>
  <Text x={-0.672} y={1} attach="w">1</Text>
  <Text x={-0.672} y={1.5} attach="w">1.5</Text>
  <Text x={-0.672} y={2} attach="w">2</Text>
  <Text x={-0.672} y={2.5} attach="w">2.5</Text>
  <Line.Segment point1={[-0.6, 2.6]} point2={[0.6, 0.2]} color="var(--mafs-fg-orange)" />
  <Point x={-0.6} y={2.6} color="var(--mafs-fg-blue)" />
  <Point x={-0.3} y={2} color="var(--mafs-fg-blue)" />
  <Point x={0} y={1.4} color="var(--mafs-fg-blue)" />
  <Point x={0.3} y={0.8} color="var(--mafs-fg-blue)" />
  <Point x={0.6} y={0.2} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["correlation-regression", "linearising-logs", "power-model", "prediction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Linearise.", workingLatex: "\\log R = \\log a + n\\log d", explanation: "Compare with the given line." },
        { stepNumber: 2, description: "Read off n and log a.", workingLatex: "n = -2.00, \\quad \\log a = 1.40", explanation: "Gradient is \\( n \\), intercept is \\( \\log a \\)." },
        { stepNumber: 3, description: "Find a.", workingLatex: "a = 10^{1.40} = 25.1", explanation: "\\( 10^{1.4}=25.12\\ldots \\)" },
        { stepNumber: 4, description: "Predict at d=0.5.", workingLatex: "\\log R = 1.40 - 2.00\\log 0.5 = 1.40 - 2.00(-0.30103) = 2.00", explanation: "\\( \\log 0.5=-0.301 \\); \\( R=10^{2.00}=100 \\) ohms." }
      ],
      finalAnswer: "\\( a=25.1 \\), \\( n=-2.00 \\); at \\( d=0.5 \\), \\( R=10^{2.0}\\approx100 \\) ohms.",
      canonicalAnswer: "100",
    },
  },
  {
    id: "y2cr-045",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 45",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A bacterial count \\( N \\) at time \\( t \\) hours fits \\( N=kb^{t} \\). Two points on the regression of \\( \\log N \\) on \\( t \\) are \\( (t,\\log N)=(0,\\,2.00) \\) and \\( (4,\\,3.20) \\). Find the line, then \\( k \\) and \\( b \\) (to 3 sf).",
    questionMafs: `<Mafs viewBox={{ x: [-1.12, 4.24], y: [1.712, 3.32] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[-0.24, 1.88]} point2={[4.24, 1.88]} color="var(--mafs-fg)" />
  <Line.Segment point1={[-0.24, 1.88]} point2={[-0.24, 3.32]} color="var(--mafs-fg)" />
  <Text x={0} y={1.88} attach="s">0</Text>
  <Text x={1} y={1.88} attach="s">1</Text>
  <Text x={2} y={1.88} attach="s">2</Text>
  <Text x={3} y={1.88} attach="s">3</Text>
  <Text x={4} y={1.88} attach="s">4</Text>
  <Text x={-0.24} y={2} attach="w">2</Text>
  <Text x={-0.24} y={2.2} attach="w">2.2</Text>
  <Text x={-0.24} y={2.4} attach="w">2.4</Text>
  <Text x={-0.24} y={2.6} attach="w">2.6</Text>
  <Text x={-0.24} y={2.8} attach="w">2.8</Text>
  <Text x={-0.24} y={3} attach="w">3</Text>
  <Text x={-0.24} y={3.2} attach="w">3.2</Text>
  <Line.Segment point1={[0, 2]} point2={[4, 3.2]} color="var(--mafs-fg-orange)" />
  <Point x={0} y={2} color="var(--mafs-fg-blue)" />
  <Point x={1} y={2.3} color="var(--mafs-fg-blue)" />
  <Point x={2} y={2.6} color="var(--mafs-fg-blue)" />
  <Point x={3} y={2.9} color="var(--mafs-fg-blue)" />
  <Point x={4} y={3.2} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ["correlation-regression", "linearising-logs", "exponential-model", "bacteria", "find-line"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the gradient.", workingLatex: "\\log b = \\frac{3.20-2.00}{4-0} = \\frac{1.20}{4} = 0.30", explanation: "Gradient of \\( \\log N \\) vs \\( t \\) equals \\( \\log b \\)." },
        { stepNumber: 2, description: "Intercept.", workingLatex: "\\log k = 2.00", explanation: "At \\( t=0 \\), \\( \\log N=\\log k \\)." },
        { stepNumber: 3, description: "State the line.", workingLatex: "\\log N = 2.00 + 0.30t", explanation: "Intercept \\( 2.00 \\), gradient \\( 0.30 \\)." },
        { stepNumber: 4, description: "Find k.", workingLatex: "k = 10^{2.00} = 100", explanation: "\\( 10^{2}=100 \\)." },
        { stepNumber: 5, description: "Find b.", workingLatex: "b = 10^{0.30} = 2.00", explanation: "\\( 10^{0.3}=1.995\\approx2.00 \\): the count roughly doubles each hour." }
      ],
      finalAnswer: "\\( \\log N=2.00+0.30t \\); \\( k=10^{2.0}=100 \\), \\( b=10^{0.30}=2.00 \\), so \\( N=100(2.00)^{t} \\).",
    },
  },
  {
    id: "y2cr-046",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 46",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Mass \\( M \\) (kg) and length \\( L \\) (m) of geometrically similar objects satisfy \\( M=aL^{n} \\). A plot of \\( \\log M \\) against \\( \\log L \\) gives \\( \\log M = 0.95 + 3.00\\log L \\). Find \\( a \\) and \\( n \\) (to 3 sf) and write the model.",
    questionMafs: `<Mafs viewBox={{ x: [-0.424, 0.648], y: [-0.226, 2.99] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[-0.248, 0.11]} point2={[0.648, 0.11]} color="var(--mafs-fg)" />
  <Line.Segment point1={[-0.248, 0.11]} point2={[-0.248, 2.99]} color="var(--mafs-fg)" />
  <Text x={-0.2} y={0.11} attach="s">-0.2</Text>
  <Text x={0} y={0.11} attach="s">0</Text>
  <Text x={0.2} y={0.11} attach="s">0.2</Text>
  <Text x={0.4} y={0.11} attach="s">0.4</Text>
  <Text x={0.6} y={0.11} attach="s">0.6</Text>
  <Text x={-0.248} y={0.5} attach="w">0.5</Text>
  <Text x={-0.248} y={1} attach="w">1</Text>
  <Text x={-0.248} y={1.5} attach="w">1.5</Text>
  <Text x={-0.248} y={2} attach="w">2</Text>
  <Text x={-0.248} y={2.5} attach="w">2.5</Text>
  <Line.Segment point1={[-0.2, 0.35]} point2={[0.6, 2.75]} color="var(--mafs-fg-orange)" />
  <Point x={-0.2} y={0.35} color="var(--mafs-fg-blue)" />
  <Point x={0} y={0.95} color="var(--mafs-fg-blue)" />
  <Point x={0.2} y={1.55} color="var(--mafs-fg-blue)" />
  <Point x={0.4} y={2.15} color="var(--mafs-fg-blue)" />
  <Point x={0.6} y={2.75} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["correlation-regression", "linearising-logs", "power-model"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Linearise.", workingLatex: "\\log M = \\log a + n\\log L", explanation: "Compare with the regression line." },
        { stepNumber: 2, description: "Read off n.", workingLatex: "n = 3.00", explanation: "Mass scales with volume, so as length cubed." },
        { stepNumber: 3, description: "Find a.", workingLatex: "\\log a = 0.95 \\Rightarrow a = 10^{0.95} = 8.91", explanation: "\\( 10^{0.95}=8.913\\ldots \\)" },
        { stepNumber: 4, description: "Write the model.", workingLatex: "M = 8.91\\,L^{3.00}", explanation: "Substitute \\( a \\) and \\( n \\)." }
      ],
      finalAnswer: "\\( a=10^{0.95}=8.91 \\), \\( n=3.0 \\), so \\( M=8.91\\,L^{3} \\).",
    },
  },
  {
    id: "y2cr-047",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 47",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The temperature excess \\( \\theta \\) (\\(^\\circ\\)C above room) of a cooling liquid after \\( t \\) minutes fits \\( \\theta=kb^{t} \\). The regression of \\( \\log \\theta \\) on \\( t \\) is \\( \\log \\theta = 1.85 - 0.04t \\). Find \\( k \\) and \\( b \\) (to 3 sf) and predict \\( \\theta \\) after 15 minutes.",
    questionMafs: `<Mafs viewBox={{ x: [-11.2, 42.4], y: [-0.134, 2.01] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[-2.4, 0.09]} point2={[42.4, 0.09]} color="var(--mafs-fg)" />
  <Line.Segment point1={[-2.4, 0.09]} point2={[-2.4, 2.01]} color="var(--mafs-fg)" />
  <Text x={0} y={0.09} attach="s">0</Text>
  <Text x={10} y={0.09} attach="s">10</Text>
  <Text x={20} y={0.09} attach="s">20</Text>
  <Text x={30} y={0.09} attach="s">30</Text>
  <Text x={40} y={0.09} attach="s">40</Text>
  <Text x={-2.4} y={0.5} attach="w">0.5</Text>
  <Text x={-2.4} y={1} attach="w">1</Text>
  <Text x={-2.4} y={1.5} attach="w">1.5</Text>
  <Line.Segment point1={[0, 1.85]} point2={[40, 0.25]} color="var(--mafs-fg-orange)" />
  <Point x={0} y={1.85} color="var(--mafs-fg-blue)" />
  <Point x={10} y={1.45} color="var(--mafs-fg-blue)" />
  <Point x={20} y={1.05} color="var(--mafs-fg-blue)" />
  <Point x={30} y={0.65} color="var(--mafs-fg-blue)" />
  <Point x={40} y={0.25} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["correlation-regression", "linearising-logs", "exponential-model", "cooling", "prediction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Linearise.", workingLatex: "\\log \\theta = \\log k + t\\log b", explanation: "Compare with the regression line." },
        { stepNumber: 2, description: "Find k.", workingLatex: "\\log k = 1.85 \\Rightarrow k = 10^{1.85} = 70.8", explanation: "\\( 10^{1.85}=70.79\\ldots \\) initial excess temperature." },
        { stepNumber: 3, description: "Find b.", workingLatex: "\\log b = -0.04 \\Rightarrow b = 10^{-0.04} = 0.912", explanation: "\\( 10^{-0.04}=0.9120\\ldots \\)" },
        { stepNumber: 4, description: "Predict at t=15.", workingLatex: "\\log \\theta = 1.85 - 0.04(15) = 1.25", explanation: "Substitute \\( t=15 \\) into the linear fit." },
        { stepNumber: 5, description: "Convert back.", workingLatex: "\\theta = 10^{1.25} = 17.8", explanation: "\\( 10^{1.25}=17.78\\ldots\\,^\\circ\\)C above room." }
      ],
      finalAnswer: "\\( k=70.8 \\), \\( b=0.912 \\); after 15 min \\( \\theta=10^{1.25}\\approx17.8\\,^\\circ \\)C.",
      canonicalAnswer: "17.8",
    },
  },
  {
    id: "y2cr-048",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 48",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Planetary orbital period \\( P \\) (years) and mean distance \\( D \\) (AU) satisfy \\( P=aD^{n} \\). A plot of \\( \\log P \\) against \\( \\log D \\) gives \\( \\log P = 0.00 + 1.50\\log D \\). Find \\( a \\) and \\( n \\), and predict \\( P \\) when \\( D=4 \\) AU (to 3 sf).",
    questionMafs: `<Mafs viewBox={{ x: [-0.336, 1.272], y: [-0.432, 1.98] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[-0.072, -0.18]} point2={[1.272, -0.18]} color="var(--mafs-fg)" />
  <Line.Segment point1={[-0.072, -0.18]} point2={[-0.072, 1.98]} color="var(--mafs-fg)" />
  <Text x={0} y={-0.18} attach="s">0</Text>
  <Text x={0.2} y={-0.18} attach="s">0.2</Text>
  <Text x={0.4} y={-0.18} attach="s">0.4</Text>
  <Text x={0.6} y={-0.18} attach="s">0.6</Text>
  <Text x={0.8} y={-0.18} attach="s">0.8</Text>
  <Text x={1} y={-0.18} attach="s">1</Text>
  <Text x={1.2} y={-0.18} attach="s">1.2</Text>
  <Text x={-0.072} y={0} attach="w">0</Text>
  <Text x={-0.072} y={0.5} attach="w">0.5</Text>
  <Text x={-0.072} y={1} attach="w">1</Text>
  <Text x={-0.072} y={1.5} attach="w">1.5</Text>
  <Line.Segment point1={[0, 0]} point2={[1.2, 1.8]} color="var(--mafs-fg-orange)" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <Point x={0.3} y={0.45} color="var(--mafs-fg-blue)" />
  <Point x={0.6} y={0.9} color="var(--mafs-fg-blue)" />
  <Point x={0.9} y={1.35} color="var(--mafs-fg-blue)" />
  <Point x={1.2} y={1.8} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["correlation-regression", "linearising-logs", "power-model", "prediction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Linearise.", workingLatex: "\\log P = \\log a + n\\log D", explanation: "Compare with the given line (Kepler's third law)." },
        { stepNumber: 2, description: "Read off values.", workingLatex: "n = 1.50, \\quad \\log a = 0.00 \\Rightarrow a = 10^{0} = 1", explanation: "Intercept zero gives \\( a=1 \\)." },
        { stepNumber: 3, description: "Write the model.", workingLatex: "P = D^{1.5}", explanation: "So \\( P^2=D^3 \\), Kepler's law." },
        { stepNumber: 4, description: "Predict at D=4.", workingLatex: "P = 4^{1.5} = 8.00", explanation: "\\( 4^{1.5}=(\\sqrt4)^3=2^3=8 \\) years." }
      ],
      finalAnswer: "\\( a=1 \\), \\( n=1.5 \\); at \\( D=4 \\), \\( P=4^{1.5}=8.00 \\) years.",
      canonicalAnswer: "8.00",
    },
  },
  {
    id: "y2cr-049",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 49",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "An investment value \\( V \\) (\\(\\pounds\\)) after \\( t \\) years fits \\( V=kb^{t} \\). Two points on the regression of \\( \\log V \\) on \\( t \\) are \\( (0,\\,3.00) \\) and \\( (10,\\,3.30) \\). Find \\( k \\) and \\( b \\) (to 3 sf), and predict \\( V \\) after 25 years.",
    questionMafs: `<Mafs viewBox={{ x: [-5.6, 21.2], y: [2.856, 3.66] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[-1.2, 2.94]} point2={[21.2, 2.94]} color="var(--mafs-fg)" />
  <Line.Segment point1={[-1.2, 2.94]} point2={[-1.2, 3.66]} color="var(--mafs-fg)" />
  <Text x={0} y={2.94} attach="s">0</Text>
  <Text x={5} y={2.94} attach="s">5</Text>
  <Text x={10} y={2.94} attach="s">10</Text>
  <Text x={15} y={2.94} attach="s">15</Text>
  <Text x={20} y={2.94} attach="s">20</Text>
  <Text x={-1.2} y={3} attach="w">3</Text>
  <Text x={-1.2} y={3.1} attach="w">3.1</Text>
  <Text x={-1.2} y={3.2} attach="w">3.2</Text>
  <Text x={-1.2} y={3.3} attach="w">3.3</Text>
  <Text x={-1.2} y={3.4} attach="w">3.4</Text>
  <Text x={-1.2} y={3.5} attach="w">3.5</Text>
  <Text x={-1.2} y={3.6} attach="w">3.6</Text>
  <Line.Segment point1={[0, 3]} point2={[20, 3.6]} color="var(--mafs-fg-orange)" />
  <Point x={0} y={3} color="var(--mafs-fg-blue)" />
  <Point x={5} y={3.15} color="var(--mafs-fg-blue)" />
  <Point x={10} y={3.3} color="var(--mafs-fg-blue)" />
  <Point x={15} y={3.45} color="var(--mafs-fg-blue)" />
  <Point x={20} y={3.6} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ["correlation-regression", "linearising-logs", "exponential-model", "investment", "prediction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the gradient.", workingLatex: "\\log b = \\frac{3.30-3.00}{10-0} = 0.03", explanation: "Gradient of \\( \\log V \\) vs \\( t \\) is \\( \\log b \\)." },
        { stepNumber: 2, description: "Intercept and k.", workingLatex: "\\log k = 3.00 \\Rightarrow k = 10^{3.00} = 1000", explanation: "At \\( t=0 \\), \\( V=k=\\pounds1000 \\)." },
        { stepNumber: 3, description: "Find b.", workingLatex: "b = 10^{0.03} = 1.07", explanation: "\\( 10^{0.03}=1.0715\\ldots \\), about 7.2% annual growth." },
        { stepNumber: 4, description: "Predict at t=25.", workingLatex: "\\log V = 3.00 + 0.03(25) = 3.75", explanation: "Substitute into the linear fit." },
        { stepNumber: 5, description: "Convert back.", workingLatex: "V = 10^{3.75} = 5620", explanation: "\\( 10^{3.75}=5623\\ldots\\approx\\pounds5620 \\)." }
      ],
      finalAnswer: "\\( k=1000 \\), \\( b=1.07 \\); after 25 years \\( V=10^{3.75}\\approx\\pounds5620 \\).",
      canonicalAnswer: "5620",
    },
  },
  {
    id: "y2cr-050",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 50",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The mass \\( m \\) grams of a growing crystal is modelled by \\( m = a t^{n} \\), where \\( t \\) is the time in days and \\( a,\\,n \\) are constants. When \\( \\log m \\) (base 10) is plotted against \\( \\log t \\), the points lie close to a straight line with gradient \\( 1.5 \\) and intercept \\( 0.301 \\) on the vertical axis. (a) Find the values of \\( a \\) and \\( n \\), and hence write down the model for \\( m \\) in terms of \\( t \\). (b) Use the model to predict the mass of the crystal after \\( 16 \\) days.",
    questionMafs: `<Mafs viewBox={{ x: [-0.196, 0.742], y: [0.0478, 1.4561] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[-0.042, 0.1949]} point2={[0.742, 0.1949]} color="var(--mafs-fg)" />
  <Line.Segment point1={[-0.042, 0.1949]} point2={[-0.042, 1.4561]} color="var(--mafs-fg)" />
  <Text x={0} y={0.1949} attach="s">0</Text>
  <Text x={0.1} y={0.1949} attach="s">0.1</Text>
  <Text x={0.2} y={0.1949} attach="s">0.2</Text>
  <Text x={0.3} y={0.1949} attach="s">0.3</Text>
  <Text x={0.4} y={0.1949} attach="s">0.4</Text>
  <Text x={0.5} y={0.1949} attach="s">0.5</Text>
  <Text x={0.6} y={0.1949} attach="s">0.6</Text>
  <Text x={0.7} y={0.1949} attach="s">0.7</Text>
  <Text x={-0.042} y={0.4} attach="w">0.4</Text>
  <Text x={-0.042} y={0.6} attach="w">0.6</Text>
  <Text x={-0.042} y={0.8} attach="w">0.8</Text>
  <Text x={-0.042} y={1} attach="w">1</Text>
  <Text x={-0.042} y={1.2} attach="w">1.2</Text>
  <Line.Segment point1={[0, 0.301]} point2={[0.7, 1.351]} color="var(--mafs-fg-orange)" />
  <Point x={0} y={0.3} color="var(--mafs-fg-blue)" />
  <Point x={0.3} y={0.75} color="var(--mafs-fg-blue)" />
  <Point x={0.48} y={1.02} color="var(--mafs-fg-blue)" />
  <Point x={0.6} y={1.2} color="var(--mafs-fg-blue)" />
  <Point x={0.7} y={1.35} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["regression", "linearising", "power model", "logarithms", "prediction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Linearise the power model by taking logs.", workingLatex: "\\log m = \\log a + n\\log t", explanation: "Taking \\( \\log \\) (base 10) of \\( m=at^{n} \\) turns it into a straight line in \\( \\log t \\) and \\( \\log m \\), so the gradient is \\( n \\) and the intercept is \\( \\log a \\)." },
        { stepNumber: 2, description: "Identify the gradient as the index.", workingLatex: "n = 1.5", explanation: "The gradient of the \\( \\log m \\) against \\( \\log t \\) line equals \\( n \\)." },
        { stepNumber: 3, description: "Use the intercept to find a.", workingLatex: "\\log a = 0.301 \\Rightarrow a = 10^{0.301} = 2.00", explanation: "The vertical intercept is \\( \\log a \\); raising \\( 10 \\) to that power recovers \\( a \\)." },
        { stepNumber: 4, description: "Write the model.", workingLatex: "m = 2.00\\,t^{1.5}", explanation: "Substituting \\( a=2 \\) and \\( n=1.5 \\) gives the power model for the mass." },
        { stepNumber: 5, description: "Substitute t = 16 to predict the mass.", workingLatex: "m = 2 \\times 16^{1.5} = 2 \\times 64 = 128", explanation: "Since \\( 16^{1.5} = (\\sqrt{16})^{3} = 4^{3} = 64 \\), the predicted mass is \\( 128 \\) g." }
      ],
      finalAnswer: "\\( a = 2.00,\\ n = 1.5,\\ m = 2.00\\,t^{1.5} \\); after 16 days \\( m = 128 \\) g.",
      canonicalAnswer: "128",
    },
  },
  {
    id: "y2cr-051",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 51",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The number \\( N \\) of bacteria (in thousands) in a culture after \\( t \\) hours is modelled by \\( N = k\\,b^{t} \\), where \\( k,\\,b \\) are constants. A plot of \\( \\log N \\) (base 10) against \\( t \\) gives a straight line with gradient \\( 0.10 \\) and vertical intercept \\( 0.477 \\). (a) Find \\( k \\) and \\( b \\) to 3 significant figures and state the model. (b) Predict \\( N \\) when \\( t = 10 \\) hours.",
    questionMafs: `<Mafs viewBox={{ x: [-2.24, 8.48], y: [0.2843, 1.3603] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[-0.48, 0.3967]} point2={[8.48, 0.3967]} color="var(--mafs-fg)" />
  <Line.Segment point1={[-0.48, 0.3967]} point2={[-0.48, 1.3603]} color="var(--mafs-fg)" />
  <Text x={0} y={0.3967} attach="s">0</Text>
  <Text x={2} y={0.3967} attach="s">2</Text>
  <Text x={4} y={0.3967} attach="s">4</Text>
  <Text x={6} y={0.3967} attach="s">6</Text>
  <Text x={8} y={0.3967} attach="s">8</Text>
  <Text x={-0.48} y={0.6} attach="w">0.6</Text>
  <Text x={-0.48} y={0.8} attach="w">0.8</Text>
  <Text x={-0.48} y={1} attach="w">1</Text>
  <Text x={-0.48} y={1.2} attach="w">1.2</Text>
  <Line.Segment point1={[0, 0.477]} point2={[8, 1.277]} color="var(--mafs-fg-orange)" />
  <Point x={0} y={0.48} color="var(--mafs-fg-blue)" />
  <Point x={2} y={0.68} color="var(--mafs-fg-blue)" />
  <Point x={4} y={0.88} color="var(--mafs-fg-blue)" />
  <Point x={6} y={1.08} color="var(--mafs-fg-blue)" />
  <Point x={8} y={1.28} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 6,
    examStyle: false,
    yearCreated: 2026,
    tags: ["regression", "linearising", "exponential model", "logarithms", "prediction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Linearise the exponential model.", workingLatex: "\\log N = \\log k + t\\log b", explanation: "Taking \\( \\log \\) of \\( N=kb^{t} \\) gives a line in \\( t \\) and \\( \\log N \\): gradient \\( \\log b \\), intercept \\( \\log k \\)." },
        { stepNumber: 2, description: "Find k from the intercept.", workingLatex: "\\log k = 0.477 \\Rightarrow k = 10^{0.477} = 3.00", explanation: "The intercept on the \\( \\log N \\) axis is \\( \\log k \\)." },
        { stepNumber: 3, description: "Find b from the gradient.", workingLatex: "\\log b = 0.10 \\Rightarrow b = 10^{0.10} = 1.26", explanation: "The gradient equals \\( \\log b \\), so \\( b = 10^{0.10} \\approx 1.259 \\)." },
        { stepNumber: 4, description: "State the model.", workingLatex: "N = 3.00 \\times 1.26^{\\,t}", explanation: "Substituting the constants gives the exponential growth model." },
        { stepNumber: 5, description: "Predict N at t = 10.", workingLatex: "\\log N = 0.477 + 0.10\\times 10 = 1.477", explanation: "Working through the linear form avoids rounding error in \\( b \\)." },
        { stepNumber: 6, description: "Back-transform to N.", workingLatex: "N = 10^{1.477} = 30.0", explanation: "So \\( N \\approx 30.0 \\) thousand bacteria after 10 hours." }
      ],
      finalAnswer: "\\( k = 3.00,\\ b = 1.26,\\ N = 3.00\\times 1.26^{\\,t} \\); at \\( t=10,\\ N \\approx 30.0 \\) thousand.",
      canonicalAnswer: "30.0",
    },
  },
  {
    id: "y2cr-052",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 52",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A teacher codes class-size data using \\( p = \\dfrac{x - 50}{10} \\), where \\( x \\) is the daily count of visitors. The least-squares regression line of \\( y \\) (revenue, \\(\\pounds\\)00s) on \\( p \\) is found to be \\( y = 4 + 3p \\). (a) Show that the regression line of \\( y \\) on \\( x \\) is \\( y = 0.3x - 11 \\). (b) Use it to estimate \\( y \\) when \\( x = 70 \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["regression", "coding", "back-transform", "least squares", "prediction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the given coded line.", workingLatex: "y = 4 + 3p", explanation: "This is the regression of \\( y \\) on the coded variable \\( p \\)." },
        { stepNumber: 2, description: "Substitute the coding for p.", workingLatex: "y = 4 + 3\\left(\\frac{x-50}{10}\\right)", explanation: "Replace \\( p \\) by its definition \\( \\frac{x-50}{10} \\) to express \\( y \\) in terms of \\( x \\)." },
        { stepNumber: 3, description: "Expand the bracket.", workingLatex: "y = 4 + \\frac{3x}{10} - \\frac{150}{10} = 4 + 0.3x - 15", explanation: "Distribute the \\( 3 \\) over the coded term." },
        { stepNumber: 4, description: "Collect constants.", workingLatex: "y = 0.3x - 11", explanation: "Combining \\( 4 - 15 = -11 \\) gives the regression of \\( y \\) on \\( x \\)." },
        { stepNumber: 5, description: "Substitute x = 70.", workingLatex: "y = 0.3\\times 70 - 11 = 21 - 11 = 10", explanation: "The estimated revenue is \\( 10 \\) (i.e. \\(\\pounds 1000\\)) when there are \\( 70 \\) visitors." }
      ],
      finalAnswer: "\\( y = 0.3x - 11 \\); at \\( x = 70,\\ y = 10 \\) (\\(\\pounds 1000\\)).",
      canonicalAnswer: "10",
    },
  },
  {
    id: "y2cr-053",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 53",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The braking distance \\( d \\) metres of a vehicle is thought to follow \\( d = a v^{n} \\), where \\( v \\) is the speed. A plot of \\( \\log d \\) (base 10) against \\( \\log v \\) is linear with gradient \\( 0.5 \\) and vertical intercept \\( 1.0 \\). Find \\( a \\) and \\( n \\), write down the model, and predict \\( d \\) when \\( v = 49 \\).",
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ["regression", "linearising", "power model", "logarithms", "prediction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Linearise the power law.", workingLatex: "\\log d = \\log a + n\\log v", explanation: "Taking logs of \\( d=av^{n} \\) gives gradient \\( n \\) and intercept \\( \\log a \\)." },
        { stepNumber: 2, description: "Read off the index.", workingLatex: "n = 0.5", explanation: "The gradient of the linearised plot is \\( n \\)." },
        { stepNumber: 3, description: "Find a from the intercept.", workingLatex: "\\log a = 1.0 \\Rightarrow a = 10^{1.0} = 10", explanation: "Raising \\( 10 \\) to the intercept gives \\( a \\)." },
        { stepNumber: 4, description: "State the model.", workingLatex: "d = 10\\,v^{0.5}", explanation: "Substitute \\( a=10,\\ n=0.5 \\)." },
        { stepNumber: 5, description: "Predict d at v = 49.", workingLatex: "d = 10\\times 49^{0.5} = 10\\times 7 = 70", explanation: "Since \\( \\sqrt{49}=7 \\), the predicted braking distance is \\( 70 \\) m." }
      ],
      finalAnswer: "\\( a = 10,\\ n = 0.5,\\ d = 10\\,v^{0.5} \\); at \\( v=49,\\ d = 70 \\) m.",
      canonicalAnswer: "70",
    },
  },
  {
    id: "y2cr-054",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 54",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The activity \\( A \\) of a radioactive sample (counts per minute) after \\( t \\) days is modelled by \\( A = k\\,b^{t} \\). A plot of \\( \\log A \\) (base 10) against \\( t \\) is a straight line with gradient \\( -0.05 \\) and intercept \\( 2 \\). (a) Find \\( k \\) and \\( b \\) to 3 significant figures and state whether the model represents growth or decay. (b) Predict \\( A \\) when \\( t = 20 \\) days.",
    questionMafs: `<Mafs viewBox={{ x: [-5.6, 21.2], y: [0.76, 2.1] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[-1.2, 0.9]} point2={[21.2, 0.9]} color="var(--mafs-fg)" />
  <Line.Segment point1={[-1.2, 0.9]} point2={[-1.2, 2.1]} color="var(--mafs-fg)" />
  <Text x={0} y={0.9} attach="s">0</Text>
  <Text x={5} y={0.9} attach="s">5</Text>
  <Text x={10} y={0.9} attach="s">10</Text>
  <Text x={15} y={0.9} attach="s">15</Text>
  <Text x={20} y={0.9} attach="s">20</Text>
  <Text x={-1.2} y={1} attach="w">1</Text>
  <Text x={-1.2} y={1.2} attach="w">1.2</Text>
  <Text x={-1.2} y={1.4} attach="w">1.4</Text>
  <Text x={-1.2} y={1.6} attach="w">1.6</Text>
  <Text x={-1.2} y={1.8} attach="w">1.8</Text>
  <Text x={-1.2} y={2} attach="w">2</Text>
  <Line.Segment point1={[0, 2]} point2={[20, 1]} color="var(--mafs-fg-orange)" />
  <Point x={0} y={2} color="var(--mafs-fg-blue)" />
  <Point x={5} y={1.75} color="var(--mafs-fg-blue)" />
  <Point x={10} y={1.5} color="var(--mafs-fg-blue)" />
  <Point x={15} y={1.25} color="var(--mafs-fg-blue)" />
  <Point x={20} y={1} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 6,
    examStyle: false,
    yearCreated: 2026,
    tags: ["regression", "linearising", "exponential decay", "logarithms", "prediction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Linearise the model.", workingLatex: "\\log A = \\log k + t\\log b", explanation: "Taking logs of \\( A=kb^{t} \\) gives intercept \\( \\log k \\) and gradient \\( \\log b \\)." },
        { stepNumber: 2, description: "Find k.", workingLatex: "\\log k = 2 \\Rightarrow k = 10^{2} = 100", explanation: "The intercept on the \\( \\log A \\) axis is \\( \\log k \\)." },
        { stepNumber: 3, description: "Find b.", workingLatex: "\\log b = -0.05 \\Rightarrow b = 10^{-0.05} = 0.891", explanation: "Because \\( 0 < b < 1 \\), the model represents exponential decay." },
        { stepNumber: 4, description: "State the model.", workingLatex: "A = 100 \\times 0.891^{\\,t}", explanation: "Substituting the constants; the negative gradient confirms decay." },
        { stepNumber: 5, description: "Predict A at t = 20 via the linear form.", workingLatex: "\\log A = 2 + (-0.05)(20) = 1", explanation: "Using the line directly avoids rounding error in \\( b \\)." },
        { stepNumber: 6, description: "Back-transform.", workingLatex: "A = 10^{1} = 10", explanation: "The predicted activity is \\( 10 \\) counts per minute after 20 days." }
      ],
      finalAnswer: "\\( k = 100,\\ b = 0.891 \\) (decay), \\( A = 100\\times 0.891^{\\,t} \\); at \\( t=20,\\ A = 10 \\).",
      canonicalAnswer: "10",
    },
  },
  {
    id: "y2cr-055",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 55",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "House-price data for years \\( x \\) is coded using \\( p = \\dfrac{x - 2000}{5} \\). The regression line of \\( y \\) (mean price, \\(\\pounds\\)0,000s) on \\( p \\) is \\( y = 12 - 2p \\). (a) Find the regression line of \\( y \\) on \\( x \\) in the form \\( y = \\alpha x + \\beta \\), giving \\( \\alpha \\) exactly and \\( \\beta \\) to 3 significant figures. (b) Estimate \\( y \\) for the year \\( x = 2015 \\). (c) Comment on the reliability of using this line to estimate \\( y \\) for the year \\( x = 2060 \\).",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["regression", "coding", "back-transform", "prediction", "reliability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute the coding.", workingLatex: "y = 12 - 2\\left(\\frac{x-2000}{5}\\right)", explanation: "Replace \\( p \\) by \\( \\frac{x-2000}{5} \\)." },
        { stepNumber: 2, description: "Expand.", workingLatex: "y = 12 - \\frac{2x}{5} + \\frac{4000}{5} = 12 - 0.4x + 800", explanation: "Distribute \\( -2 \\) over the coded term." },
        { stepNumber: 3, description: "Collect terms.", workingLatex: "y = -0.4x + 812", explanation: "Combining \\( 12 + 800 = 812 \\) gives \\( \\alpha = -0.4,\\ \\beta = 812 \\)." },
        { stepNumber: 4, description: "Estimate at x = 2015 (use coded form to check).", workingLatex: "p = \\frac{2015-2000}{5}=3,\\ \\ y = 12 - 2(3) = 6", explanation: "Equivalently \\( y = -0.4(2015)+812 = 6 \\), a mean price of \\(\\pounds 60{,}000\\)." },
        { stepNumber: 5, description: "Comment on reliability.", workingLatex: "x = 2060 \\Rightarrow p = 12", explanation: "The year 2060 lies well outside the range of the data used to fit the line, so this is extrapolation and the estimate is unreliable; the linear trend may not continue that far." }
      ],
      finalAnswer: "\\( y = -0.4x + 812 \\); at \\( x=2015,\\ y = 6 \\) (\\(\\pounds 60{,}000\\)). For 2060 this is extrapolation, so unreliable.",
    },
  },
  {
    id: "y2cr-056",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 56",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "For some bivariate data \\( (x,y) \\) a student computes two product–moment correlation coefficients: for \\( \\log y \\) against \\( \\log x \\) the value is \\( 1.000 \\), and for \\( \\log y \\) against \\( x \\) the value is \\( 0.973 \\). The fitted line of \\( \\log y \\) (base 10) on \\( \\log x \\) is \\( \\log y = 0.477 + 2\\log x \\). (a) State, with reasons, whether the data are better modelled by \\( y = a x^{n} \\) or \\( y = k b^{x} \\). (b) Determine the constants and write down the model. (c) Predict \\( y \\) when \\( x = 7 \\).",
    questionMafs: `<Mafs viewBox={{ x: [0.104, 1.042], y: [0.7403, 2.6203] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[0.258, 0.9367]} point2={[1.042, 0.9367]} color="var(--mafs-fg)" />
  <Line.Segment point1={[0.258, 0.9367]} point2={[0.258, 2.6203]} color="var(--mafs-fg)" />
  <Text x={0.3} y={0.9367} attach="s">0.3</Text>
  <Text x={0.4} y={0.9367} attach="s">0.4</Text>
  <Text x={0.5} y={0.9367} attach="s">0.5</Text>
  <Text x={0.6} y={0.9367} attach="s">0.6</Text>
  <Text x={0.7} y={0.9367} attach="s">0.7</Text>
  <Text x={0.8} y={0.9367} attach="s">0.8</Text>
  <Text x={0.9} y={0.9367} attach="s">0.9</Text>
  <Text x={1} y={0.9367} attach="s">1</Text>
  <Text x={0.258} y={1.2} attach="w">1.2</Text>
  <Text x={0.258} y={1.4} attach="w">1.4</Text>
  <Text x={0.258} y={1.6} attach="w">1.6</Text>
  <Text x={0.258} y={1.8} attach="w">1.8</Text>
  <Text x={0.258} y={2} attach="w">2</Text>
  <Text x={0.258} y={2.2} attach="w">2.2</Text>
  <Text x={0.258} y={2.4} attach="w">2.4</Text>
  <Line.Segment point1={[0.3, 1.077]} point2={[1, 2.477]} color="var(--mafs-fg-orange)" />
  <Point x={0.3} y={1.08} color="var(--mafs-fg-blue)" />
  <Point x={0.6} y={1.68} color="var(--mafs-fg-blue)" />
  <Point x={0.78} y={2.03} color="var(--mafs-fg-blue)" />
  <Point x={0.9} y={2.28} color="var(--mafs-fg-blue)" />
  <Point x={1} y={2.48} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["regression", "deciding model", "power model", "linearising", "logarithms"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Decide which transformation is linear.", workingLatex: "r(\\log y,\\log x) = 1.000 > r(\\log y, x) = 0.973", explanation: "The \\( \\log y \\) against \\( \\log x \\) plot is more nearly linear, which is the signature of a power model \\( y=ax^{n} \\) (an exponential model would linearise under \\( \\log y \\) against \\( x \\))." },
        { stepNumber: 2, description: "Linearise the chosen power model.", workingLatex: "\\log y = \\log a + n\\log x", explanation: "Compare with the given fitted line to read off the constants." },
        { stepNumber: 3, description: "Find n.", workingLatex: "n = 2", explanation: "The gradient of the \\( \\log y \\) vs \\( \\log x \\) line is \\( n \\)." },
        { stepNumber: 4, description: "Find a.", workingLatex: "\\log a = 0.477 \\Rightarrow a = 10^{0.477} = 3.00", explanation: "The intercept is \\( \\log a \\)." },
        { stepNumber: 5, description: "State the model.", workingLatex: "y = 3.00\\,x^{2}", explanation: "Substituting \\( a=3,\\ n=2 \\)." },
        { stepNumber: 6, description: "Predict y at x = 7.", workingLatex: "y = 3\\times 7^{2} = 3\\times 49 = 147", explanation: "The predicted value is \\( 147 \\)." }
      ],
      finalAnswer: "Power model (\\( \\log y \\) vs \\( \\log x \\) is linear): \\( y = 3.00\\,x^{2} \\); at \\( x=7,\\ y = 147 \\).",
      canonicalAnswer: "147",
    },
  },
  {
    id: "y2cr-057",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 57",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The period \\( T \\) seconds of a pendulum is modelled by \\( T = a L^{n} \\), where \\( L \\) is its length in metres. A plot of \\( \\log T \\) (base 10) against \\( \\log L \\) is linear with gradient \\( 2 \\) and intercept \\( 0.602 \\). (Although physics predicts \\( n=\\tfrac12 \\), use the experimental fit.) (a) Find \\( a \\) and \\( n \\) and write the model. (b) Predict \\( T \\) when \\( L = 2.5 \\) m. (c) The experiment only used lengths between \\( 0.5 \\) m and \\( 3 \\) m; comment on predicting \\( T \\) for \\( L = 20 \\) m.",
    marks: 6,
    examStyle: false,
    yearCreated: 2026,
    tags: ["regression", "linearising", "power model", "prediction", "extrapolation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Linearise.", workingLatex: "\\log T = \\log a + n\\log L", explanation: "Gradient \\( n \\), intercept \\( \\log a \\)." },
        { stepNumber: 2, description: "Find n.", workingLatex: "n = 2", explanation: "Read the gradient of the linearised plot." },
        { stepNumber: 3, description: "Find a.", workingLatex: "\\log a = 0.602 \\Rightarrow a = 10^{0.602} = 4.00", explanation: "Raise 10 to the intercept." },
        { stepNumber: 4, description: "State the model.", workingLatex: "T = 4.00\\,L^{2}", explanation: "Substitute the constants." },
        { stepNumber: 5, description: "Predict at L = 2.5.", workingLatex: "T = 4\\times 2.5^{2} = 4\\times 6.25 = 25.0", explanation: "The predicted period is \\( 25.0 \\) s." },
        { stepNumber: 6, description: "Comment on extrapolation.", workingLatex: "L = 20 \\notin [0.5,\\,3]", explanation: "\\( L=20 \\) m lies far outside the experimental range, so predicting there is extrapolation and unreliable; the fitted relationship may not hold for such lengths." }
      ],
      finalAnswer: "\\( a = 4.00,\\ n = 2,\\ T = 4.00\\,L^{2} \\); at \\( L=2.5,\\ T = 25.0 \\) s. Predicting at \\( L=20 \\) is unreliable extrapolation.",
      canonicalAnswer: "25.0",
    },
  },
  {
    id: "y2cr-058",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 58",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Two variables are coded as \\( p = \\dfrac{x - 10}{2} \\) and \\( q = \\dfrac{y - 100}{5} \\). The least-squares regression line of \\( q \\) on \\( p \\) is \\( q = 2 + 4p \\). (a) Find the regression line of \\( y \\) on \\( x \\). (b) Estimate \\( y \\) when \\( x = 12 \\).",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["regression", "coding", "double coding", "back-transform", "prediction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the coded line.", workingLatex: "q = 2 + 4p", explanation: "Both variables are coded, so substitute for each in turn." },
        { stepNumber: 2, description: "Substitute the codings.", workingLatex: "\\frac{y-100}{5} = 2 + 4\\left(\\frac{x-10}{2}\\right)", explanation: "Replace \\( q \\) and \\( p \\) by their definitions." },
        { stepNumber: 3, description: "Simplify the right-hand side.", workingLatex: "\\frac{y-100}{5} = 2 + 2(x-10) = 2x - 18", explanation: "Here \\( 4\\times\\frac{x-10}{2} = 2(x-10) \\), then \\( 2 + 2x - 20 = 2x-18 \\)." },
        { stepNumber: 4, description: "Clear the fraction.", workingLatex: "y - 100 = 5(2x - 18) = 10x - 90", explanation: "Multiply both sides by 5." },
        { stepNumber: 5, description: "Make y the subject.", workingLatex: "y = 10x + 10", explanation: "Adding 100 to both sides gives the regression of \\( y \\) on \\( x \\)." },
        { stepNumber: 6, description: "Estimate at x = 12.", workingLatex: "y = 10\\times 12 + 10 = 130", explanation: "The estimate is \\( y = 130 \\)." }
      ],
      finalAnswer: "\\( y = 10x + 10 \\); at \\( x = 12,\\ y = 130 \\).",
      canonicalAnswer: "130",
    },
  },
  {
    id: "y2cr-059",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 59",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A biologist suspects the count \\( y \\) over time \\( x \\) follows either \\( y = a x^{n} \\) or \\( y = k b^{x} \\). The correlation for \\( \\log y \\) against \\( \\log x \\) is \\( 0.973 \\), while for \\( \\log y \\) against \\( x \\) it is \\( 1.000 \\). The fitted line of \\( \\log y \\) (base 10) on \\( x \\) is \\( \\log y = 0.699 + 0.301x \\). (a) State which model fits better and justify. (b) Find \\( k \\) and \\( b \\) and write down the model. (c) Predict \\( y \\) when \\( x = 6 \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.12, 5.24], y: [0.711, 2.3244] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[0.76, 0.8796]} point2={[5.24, 0.8796]} color="var(--mafs-fg)" />
  <Line.Segment point1={[0.76, 0.8796]} point2={[0.76, 2.3244]} color="var(--mafs-fg)" />
  <Text x={1} y={0.8796} attach="s">1</Text>
  <Text x={2} y={0.8796} attach="s">2</Text>
  <Text x={3} y={0.8796} attach="s">3</Text>
  <Text x={4} y={0.8796} attach="s">4</Text>
  <Text x={5} y={0.8796} attach="s">5</Text>
  <Text x={0.76} y={1} attach="w">1</Text>
  <Text x={0.76} y={1.2} attach="w">1.2</Text>
  <Text x={0.76} y={1.4} attach="w">1.4</Text>
  <Text x={0.76} y={1.6} attach="w">1.6</Text>
  <Text x={0.76} y={1.8} attach="w">1.8</Text>
  <Text x={0.76} y={2} attach="w">2</Text>
  <Text x={0.76} y={2.2} attach="w">2.2</Text>
  <Line.Segment point1={[1, 1]} point2={[5, 2.204]} color="var(--mafs-fg-orange)" />
  <Point x={1} y={1} color="var(--mafs-fg-blue)" />
  <Point x={2} y={1.3} color="var(--mafs-fg-blue)" />
  <Point x={3} y={1.6} color="var(--mafs-fg-blue)" />
  <Point x={4} y={1.9} color="var(--mafs-fg-blue)" />
  <Point x={5} y={2.2} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 7,
    examStyle: false,
    yearCreated: 2026,
    tags: ["regression", "deciding model", "exponential model", "linearising", "logarithms"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the correlations.", workingLatex: "r(\\log y, x) = 1.000 > r(\\log y, \\log x) = 0.973", explanation: "The \\( \\log y \\) against \\( x \\) plot is the more linear one, which is the signature of an exponential model \\( y=kb^{x} \\)." },
        { stepNumber: 2, description: "Linearise the exponential model.", workingLatex: "\\log y = \\log k + x\\log b", explanation: "Compare with the fitted line: gradient \\( \\log b \\), intercept \\( \\log k \\)." },
        { stepNumber: 3, description: "Find k.", workingLatex: "\\log k = 0.699 \\Rightarrow k = 10^{0.699} = 5.00", explanation: "The intercept on the \\( \\log y \\) axis is \\( \\log k \\)." },
        { stepNumber: 4, description: "Find b.", workingLatex: "\\log b = 0.301 \\Rightarrow b = 10^{0.301} = 2.00", explanation: "The gradient is \\( \\log b \\)." },
        { stepNumber: 5, description: "State the model.", workingLatex: "y = 5.00 \\times 2.00^{\\,x}", explanation: "Substitute the constants." },
        { stepNumber: 6, description: "Predict at x = 6 via the linear form.", workingLatex: "\\log y = 0.699 + 0.301(6) = 2.505", explanation: "Using the line avoids rounding error." },
        { stepNumber: 7, description: "Back-transform.", workingLatex: "y = 10^{2.505} = 320", explanation: "So \\( y \\approx 320 \\) when \\( x = 6 \\)." }
      ],
      finalAnswer: "Exponential model (\\( \\log y \\) vs \\( x \\) is linear): \\( y = 5.00\\times 2.00^{\\,x} \\); at \\( x=6,\\ y \\approx 320 \\).",
      canonicalAnswer: "320",
    },
  },
  {
    id: "y2cr-060",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 60",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The fuel consumption \\( F \\) (litres per 100 km) of a fleet of lorries is modelled by \\( F = a w^{n} \\), where \\( w \\) is the load in tonnes. A plot of \\( \\log F \\) (base 10) against \\( \\log w \\) is linear with gradient \\( 0.5 \\) and intercept \\( 0.903 \\). (a) Find \\( a \\) and \\( n \\) and write the model. (b) Predict \\( F \\) for a load of \\( 100 \\) tonnes. (c) Comment on the reliability of this prediction given that the heaviest load in the data was \\( 30 \\) tonnes.",
    questionMafs: `<Mafs viewBox={{ x: [0.02, 1.36], y: [0.9293, 1.6033] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[0.24, 0.9997]} point2={[1.36, 0.9997]} color="var(--mafs-fg)" />
  <Line.Segment point1={[0.24, 0.9997]} point2={[0.24, 1.6033]} color="var(--mafs-fg)" />
  <Text x={0.4} y={0.9997} attach="s">0.4</Text>
  <Text x={0.6} y={0.9997} attach="s">0.6</Text>
  <Text x={0.8} y={0.9997} attach="s">0.8</Text>
  <Text x={1} y={0.9997} attach="s">1</Text>
  <Text x={1.2} y={0.9997} attach="s">1.2</Text>
  <Text x={0.24} y={1.1} attach="w">1.1</Text>
  <Text x={0.24} y={1.2} attach="w">1.2</Text>
  <Text x={0.24} y={1.3} attach="w">1.3</Text>
  <Text x={0.24} y={1.4} attach="w">1.4</Text>
  <Text x={0.24} y={1.5} attach="w">1.5</Text>
  <Line.Segment point1={[0.3, 1.053]} point2={[1.3, 1.553]} color="var(--mafs-fg-orange)" />
  <Point x={0.3} y={1.05} color="var(--mafs-fg-blue)" />
  <Point x={0.7} y={1.25} color="var(--mafs-fg-blue)" />
  <Point x={1} y={1.4} color="var(--mafs-fg-blue)" />
  <Point x={1.18} y={1.49} color="var(--mafs-fg-blue)" />
  <Point x={1.3} y={1.55} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["regression", "linearising", "power model", "prediction", "reliability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Linearise.", workingLatex: "\\log F = \\log a + n\\log w", explanation: "Gradient \\( n \\), intercept \\( \\log a \\)." },
        { stepNumber: 2, description: "Find n.", workingLatex: "n = 0.5", explanation: "Read the gradient." },
        { stepNumber: 3, description: "Find a.", workingLatex: "\\log a = 0.903 \\Rightarrow a = 10^{0.903} = 8.00", explanation: "Raise 10 to the intercept." },
        { stepNumber: 4, description: "State the model.", workingLatex: "F = 8.00\\,w^{0.5}", explanation: "Substitute the constants." },
        { stepNumber: 5, description: "Predict at w = 100.", workingLatex: "F = 8\\times 100^{0.5} = 8\\times 10 = 80.0", explanation: "The predicted consumption is \\( 80.0 \\) litres per 100 km." },
        { stepNumber: 6, description: "Comment on reliability.", workingLatex: "w = 100 \\gg 30", explanation: "A load of 100 tonnes is far beyond the maximum observed load of 30 tonnes, so this is extrapolation and the prediction is unreliable; the model may not hold for such heavy loads." }
      ],
      finalAnswer: "\\( a = 8.00,\\ n = 0.5,\\ F = 8.00\\,w^{0.5} \\); at \\( w=100,\\ F = 80.0 \\) (extrapolation, so unreliable).",
      canonicalAnswer: "80.0",
    },
  },
  {
    id: "y2cr-061",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 61",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A kiosk records the maximum daily temperature \\( t \\) (\\(^{\\circ}\\)C) and the number of ice creams sold \\( s \\) on 7 days:\n\n| \\( t \\) (\\(^{\\circ}\\)C) | 16 | 18 | 20 | 22 | 24 | 26 | 28 |\n|---|---|---|---|---|---|---|---|\n| \\( s \\) | 42 | 55 | 61 | 70 | 82 | 90 | 101 |\n\nThe product moment correlation coefficient is \\( r = 0.998 \\) and the regression line of \\( s \\) on \\( t \\) is \\( s = -33.7 + 4.79t \\).\n(a) Interpret the value of \\( r \\) in this context. (b) Use the line to estimate sales when \\( t = 25 \\) and when \\( t = 35 \\); for each, state whether it is interpolation or extrapolation and comment on the reliability. (c) A student claims the data shows that higher temperature *causes* higher sales. Comment, suggesting one possible confounding factor.",
    questionMafs: `<Mafs viewBox={{ x: [12.64, 28.72], y: [27.84, 106.9] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[15.28, 36.1]} point2={[28.72, 36.1]} color="var(--mafs-fg)" />
  <Line.Segment point1={[15.28, 36.1]} point2={[15.28, 106.9]} color="var(--mafs-fg)" />
  <Text x={16} y={36.1} attach="s">16</Text>
  <Text x={18} y={36.1} attach="s">18</Text>
  <Text x={20} y={36.1} attach="s">20</Text>
  <Text x={22} y={36.1} attach="s">22</Text>
  <Text x={24} y={36.1} attach="s">24</Text>
  <Text x={26} y={36.1} attach="s">26</Text>
  <Text x={28} y={36.1} attach="s">28</Text>
  <Text x={15.28} y={50} attach="w">50</Text>
  <Text x={15.28} y={60} attach="w">60</Text>
  <Text x={15.28} y={70} attach="w">70</Text>
  <Text x={15.28} y={80} attach="w">80</Text>
  <Text x={15.28} y={90} attach="w">90</Text>
  <Text x={15.28} y={100} attach="w">100</Text>
  <Line.Segment point1={[16, 42.94]} point2={[28, 100.42]} color="var(--mafs-fg-orange)" />
  <Point x={16} y={42} color="var(--mafs-fg-blue)" />
  <Point x={18} y={55} color="var(--mafs-fg-blue)" />
  <Point x={20} y={61} color="var(--mafs-fg-blue)" />
  <Point x={22} y={70} color="var(--mafs-fg-blue)" />
  <Point x={24} y={82} color="var(--mafs-fg-blue)" />
  <Point x={26} y={90} color="var(--mafs-fg-blue)" />
  <Point x={28} y={101} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 8,
    examStyle: true,
    yearCreated: 2026,
    tags: ["correlation", "regression", "PMCC", "interpolation", "extrapolation", "causation", "exam synthesis"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Interpret the PMCC.", workingLatex: "r = 0.998 \\approx 1", explanation: "A value very close to \\( +1 \\) indicates very strong positive correlation: as the maximum temperature rises, ice-cream sales tend to rise, and the points lie very close to a straight line." },
        { stepNumber: 2, description: "Predict sales at \\( t = 25 \\).", workingLatex: "s = -33.7 + 4.79(25) = 85.9", explanation: "Substituting \\( t = 25 \\) gives about 86 ice creams." },
        { stepNumber: 3, description: "Classify the \\( t = 25 \\) prediction.", workingLatex: "16 \\le 25 \\le 28", explanation: "Since \\( 25 \\) lies inside the range of the data (16 to 28), this is interpolation, so the estimate is reasonably reliable." },
        { stepNumber: 4, description: "Predict sales at \\( t = 35 \\).", workingLatex: "s = -33.7 + 4.79(35) = 134", explanation: "Substituting \\( t = 35 \\) gives about 134 ice creams." },
        { stepNumber: 5, description: "Classify the \\( t = 35 \\) prediction.", workingLatex: "35 > 28", explanation: "Since \\( 35 \\) lies outside the range of the data, this is extrapolation. The linear model may not hold there (e.g. saturation or stock limits), so the estimate is unreliable." },
        { stepNumber: 6, description: "Address the causation claim.", workingLatex: "\\text{correlation} \\not\\Rightarrow \\text{causation}", explanation: "Strong correlation alone does not prove temperature causes the sales increase. A confounding factor such as it being a sunny weekend or holiday period (more visitors) could drive both higher temperatures and higher footfall, inflating sales." }
      ],
      finalAnswer: "(a) Very strong positive correlation. (b) \\( t=25 \\): \\( s \\approx 86 \\) (interpolation, reliable); \\( t=35 \\): \\( s \\approx 134 \\) (extrapolation, unreliable). (c) Correlation does not imply causation; a confounding factor such as a sunny holiday/weekend could raise both temperature exposure and footfall.",
    },
  },
  {
    id: "y2cr-062",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 62",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "For a sample of 6 adults, height \\( h \\) (cm) and weight \\( w \\) (kg) are recorded:\n\n| \\( h \\) (cm) | 150 | 158 | 165 | 172 | 180 | 188 |\n|---|---|---|---|---|---|---|\n| \\( w \\) (kg) | 48 | 55 | 61 | 68 | 77 | 86 |\n\nIt is given that \\( S_{hh} = 988.8 \\), \\( S_{ww} = 994.8 \\) and \\( S_{hw} = 989.8 \\).\n(a) Show that the product moment correlation coefficient is \\( r = 0.998 \\) to 3 significant figures. (b) Find the equation of the regression line of \\( w \\) on \\( h \\), giving coefficients to 3 significant figures. (c) Show that the line predicts a weight of \\( 67.0 \\) kg for a height of 170 cm, and state whether this is a reliable estimate.",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["regression", "show that", "PMCC", "interpolation", "height weight"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compute the PMCC.", workingLatex: "r = \\dfrac{S_{hw}}{\\sqrt{S_{hh}\\,S_{ww}}} = \\dfrac{989.8}{\\sqrt{988.8 \\times 994.8}}", explanation: "Substitute the given summary statistics into the PMCC formula." },
        { stepNumber: 2, description: "Evaluate \\( r \\).", workingLatex: "r = \\dfrac{989.8}{991.79\\ldots} = 0.998", explanation: "This rounds to \\( 0.998 \\) (3 sf), as required — very strong positive correlation." },
        { stepNumber: 3, description: "Find the gradient.", workingLatex: "b = \\dfrac{S_{hw}}{S_{hh}} = \\dfrac{989.8}{988.8} = 1.00", explanation: "The gradient of the regression line of \\( w \\) on \\( h \\) is \\( 1.001\\ldots \\approx 1.00 \\)." },
        { stepNumber: 4, description: "Find the intercept using the means.", workingLatex: "a = \\bar{w} - b\\bar{h} = 65.83 - 1.001(168.83) = -103", explanation: "With \\( \\bar h = 168.83 \\) and \\( \\bar w = 65.83 \\), the intercept is \\( -103 \\) (3 sf)." },
        { stepNumber: 5, description: "State the regression line.", workingLatex: "w = -103 + 1.00h", explanation: "This is the line of \\( w \\) on \\( h \\) to 3 significant figures." },
        { stepNumber: 6, description: "Show the prediction at \\( h = 170 \\).", workingLatex: "w = -103.2 + 1.001(170) = 67.0", explanation: "Using the unrounded coefficients, \\( w = 67.0 \\) kg as required." },
        { stepNumber: 7, description: "Comment on reliability.", workingLatex: "150 \\le 170 \\le 188", explanation: "Since 170 cm lies within the data range, this is interpolation, so the estimate is reliable." }
      ],
      finalAnswer: "(a) \\( r = 0.998 \\). (b) \\( w = -103 + 1.00h \\). (c) At \\( h = 170 \\), \\( w = 67.0 \\) kg; interpolation, so reliable.",
    },
  },
  {
    id: "y2cr-063",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 63",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The value \\( V \\) (\\(\\pounds\\)) of a car is modelled by \\( V = A b^{t} \\), where \\( t \\) is its age in years. Data are recorded:\n\n| \\( t \\) | 0 | 1 | 2 | 3 | 4 | 5 |\n|---|---|---|---|---|---|---|\n| \\( V \\) | 18000 | 14040 | 10951 | 8542 | 6663 | 5197 |\n\nTaking logarithms (base 10), the regression line of \\( \\log_{10} V \\) on \\( t \\) is \\( \\log_{10} V = 4.26 - 0.108t \\).\n(a) Show that \\( V = A b^{t} \\) gives a linear relationship between \\( \\log_{10} V \\) and \\( t \\). (b) Use the line to find \\( A \\) and \\( b \\) to 3 significant figures, and interpret \\( b \\). (c) Show that the model predicts a value of about \\( \\pounds 4090 \\) when \\( t = 6 \\), and explain why a prediction at \\( t = 12 \\) would be unreliable.",
    marks: 8,
    examStyle: true,
    yearCreated: 2026,
    tags: ["log-linear", "regression", "exponential model", "depreciation", "show that", "extrapolation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Linearise the model.", workingLatex: "\\log_{10} V = \\log_{10} A + t\\log_{10} b", explanation: "Taking logs of \\( V = Ab^{t} \\) gives a straight line in \\( t \\) with intercept \\( \\log_{10}A \\) and gradient \\( \\log_{10}b \\)." },
        { stepNumber: 2, description: "Find \\( A \\) from the intercept.", workingLatex: "\\log_{10} A = 4.26 \\Rightarrow A = 10^{4.26} = 18200", explanation: "\\( A \\approx 18200 \\) (3 sf), the modelled value when new (close to the recorded \\( \\pounds 18000 \\))." },
        { stepNumber: 3, description: "Find \\( b \\) from the gradient.", workingLatex: "\\log_{10} b = -0.108 \\Rightarrow b = 10^{-0.108} = 0.780", explanation: "\\( b \\approx 0.780 \\) (3 sf)." },
        { stepNumber: 4, description: "Interpret \\( b \\).", workingLatex: "b = 0.780", explanation: "Each year the car retains about \\( 78.0\\% \\) of its value, i.e. it depreciates by roughly \\( 22\\% \\) per year." },
        { stepNumber: 5, description: "Predict at \\( t = 6 \\).", workingLatex: "\\log_{10} V = 4.26 - 0.108(6) = 3.612", explanation: "Substitute \\( t = 6 \\) into the regression line." },
        { stepNumber: 6, description: "Back-transform.", workingLatex: "V = 10^{3.612} = 4090", explanation: "Using the unrounded coefficients \\( (4.255 - 0.1079\\times 6 = 3.6078) \\) gives \\( V = 10^{3.6078} \\approx \\pounds 4050 \\) as required." },
        { stepNumber: 7, description: "Comment on \\( t = 12 \\).", workingLatex: "12 > 5", explanation: "This is far outside the data range (0 to 5 years), so it is extrapolation; the exponential model may break down (the car cannot keep losing the same fraction indefinitely), making the estimate unreliable." }
      ],
      finalAnswer: "(a) \\( \\log_{10} V = \\log_{10}A + (\\log_{10}b)t \\), linear in \\( t \\). (b) \\( A \\approx 18200 \\), \\( b \\approx 0.780 \\) (retains 78% per year). (c) \\( t=6 \\): \\( V \\approx \\pounds 4090 \\); \\( t=12 \\) is extrapolation, so unreliable.",
    },
  },
  {
    id: "y2cr-064",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 64",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A teacher records revision time \\( x \\) (hours) and test score \\( y \\) (out of 100) for 7 students:\n\n| \\( x \\) (h) | 2 | 4 | 5 | 7 | 8 | 10 | 12 |\n|---|---|---|---|---|---|---|---|\n| \\( y \\) | 31 | 40 | 46 | 55 | 58 | 70 | 79 |\n\nThe regression line of \\( y \\) on \\( x \\) is \\( y = 21.2 + 4.81x \\) with \\( r = 0.999 \\).\n(a) Interpret the gradient in context. (b) Predict the score for a student who revises for 20 hours, and explain why this prediction should be treated with caution. (c) A newspaper concludes 'revising more guarantees a higher mark.' Critique this claim, referring to causation and to one limitation of the data.",
    questionMafs: `<Mafs viewBox={{ x: [-0.8, 12.6], y: [19.2568, 83.818] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[1.4, 26.002]} point2={[12.6, 26.002]} color="var(--mafs-fg)" />
  <Line.Segment point1={[1.4, 26.002]} point2={[1.4, 83.818]} color="var(--mafs-fg)" />
  <Text x={2} y={26.002} attach="s">2</Text>
  <Text x={4} y={26.002} attach="s">4</Text>
  <Text x={6} y={26.002} attach="s">6</Text>
  <Text x={8} y={26.002} attach="s">8</Text>
  <Text x={10} y={26.002} attach="s">10</Text>
  <Text x={12} y={26.002} attach="s">12</Text>
  <Text x={1.4} y={40} attach="w">40</Text>
  <Text x={1.4} y={50} attach="w">50</Text>
  <Text x={1.4} y={60} attach="w">60</Text>
  <Text x={1.4} y={70} attach="w">70</Text>
  <Line.Segment point1={[2, 30.82]} point2={[12, 78.92]} color="var(--mafs-fg-orange)" />
  <Point x={2} y={31} color="var(--mafs-fg-blue)" />
  <Point x={4} y={40} color="var(--mafs-fg-blue)" />
  <Point x={5} y={46} color="var(--mafs-fg-blue)" />
  <Point x={7} y={55} color="var(--mafs-fg-blue)" />
  <Point x={8} y={58} color="var(--mafs-fg-blue)" />
  <Point x={10} y={70} color="var(--mafs-fg-blue)" />
  <Point x={12} y={79} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["regression", "PMCC", "extrapolation", "causation", "exam synthesis", "exam scores"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Interpret the gradient.", workingLatex: "b = 4.81", explanation: "Each extra hour of revision is associated with an increase of about 4.81 marks, on average, within the range of the data." },
        { stepNumber: 2, description: "Predict at \\( x = 20 \\).", workingLatex: "y = 21.2 + 4.81(20) = 117", explanation: "Substituting \\( x = 20 \\) gives \\( y \\approx 117 \\)." },
        { stepNumber: 3, description: "Note the prediction exceeds the maximum.", workingLatex: "117 > 100", explanation: "A score above 100 is impossible, which immediately flags the prediction as invalid." },
        { stepNumber: 4, description: "Explain the caution.", workingLatex: "20 > 12", explanation: "\\( x = 20 \\) lies outside the data range (2 to 12 hours), so this is extrapolation; the linear trend need not continue and may flatten near full marks." },
        { stepNumber: 5, description: "Address causation.", workingLatex: "\\text{correlation} \\not\\Rightarrow \\text{causation}", explanation: "Strong correlation does not prove that revision alone causes higher marks; more able or motivated students may both revise more and score higher (a confounding factor)." },
        { stepNumber: 6, description: "State a data limitation.", workingLatex: "n = 7", explanation: "The sample is small (7 students) and may not be representative, so the word 'guarantees' is unjustified — the relationship is a trend, not a certainty." }
      ],
      finalAnswer: "(a) Each extra hour of revision adds about 4.81 marks on average. (b) \\( y \\approx 117 \\), impossible (over 100) and an extrapolation, so unreliable. (c) Correlation is not causation; ability/motivation may confound, the sample is small, so 'guarantees' is unjustified.",
    },
  },
  {
    id: "y2cr-065",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 65",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Eight plots of land are studied; \\( x \\) is the amount of fertiliser (kg) and \\( y \\) is the yield (tonnes). Seven plots follow the data below, and an eighth plot recorded \\( (8, 2) \\):\n\n| \\( x \\) | 1 | 2 | 3 | 4 | 5 | 6 | 7 |\n|---|---|---|---|---|---|---|---|\n| \\( y \\) | 3 | 5 | 6 | 8 | 9 | 11 | 12 |\n\nFor the seven plotted points, \\( r = 0.998 \\) and the regression line of \\( y \\) on \\( x \\) is \\( y = 1.64 + 1.52x \\).\n(a) State, with a reason, whether the point \\( (8, 2) \\) is an outlier. (b) Describe the effect of including \\( (8, 2) \\) on the value of \\( r \\) and on the gradient of the regression line. (c) Recommend, with justification, whether the eighth plot should be included before reporting results.",
    questionMafs: `<Mafs viewBox={{ x: [-0.96, 8.42], y: [-0.832, 14.98] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[0.58, 0.82]} point2={[8.42, 0.82]} color="var(--mafs-fg)" />
  <Line.Segment point1={[0.58, 0.82]} point2={[0.58, 14.98]} color="var(--mafs-fg)" />
  <Text x={1} y={0.82} attach="s">1</Text>
  <Text x={2} y={0.82} attach="s">2</Text>
  <Text x={3} y={0.82} attach="s">3</Text>
  <Text x={4} y={0.82} attach="s">4</Text>
  <Text x={5} y={0.82} attach="s">5</Text>
  <Text x={6} y={0.82} attach="s">6</Text>
  <Text x={7} y={0.82} attach="s">7</Text>
  <Text x={8} y={0.82} attach="s">8</Text>
  <Text x={0.58} y={2} attach="w">2</Text>
  <Text x={0.58} y={4} attach="w">4</Text>
  <Text x={0.58} y={6} attach="w">6</Text>
  <Text x={0.58} y={8} attach="w">8</Text>
  <Text x={0.58} y={10} attach="w">10</Text>
  <Text x={0.58} y={12} attach="w">12</Text>
  <Line.Segment point1={[1, 3.16]} point2={[8, 13.8]} color="var(--mafs-fg-orange)" />
  <Point x={1} y={3} color="var(--mafs-fg-blue)" />
  <Point x={2} y={5} color="var(--mafs-fg-blue)" />
  <Point x={3} y={6} color="var(--mafs-fg-blue)" />
  <Point x={4} y={8} color="var(--mafs-fg-blue)" />
  <Point x={5} y={9} color="var(--mafs-fg-blue)" />
  <Point x={6} y={11} color="var(--mafs-fg-blue)" />
  <Point x={7} y={12} color="var(--mafs-fg-blue)" />
  <Point x={8} y={2} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["outlier", "PMCC", "regression", "effect on r", "exam synthesis"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Check the expected yield at \\( x = 8 \\).", workingLatex: "y = 1.64 + 1.52(8) = 13.8", explanation: "The trend predicts about 13.8 tonnes at \\( x = 8 \\), but the plot recorded only 2 tonnes." },
        { stepNumber: 2, description: "Identify the outlier.", workingLatex: "|2 - 13.8| = 11.8", explanation: "The observed value lies far from the pattern of the other points, so \\( (8,2) \\) is an outlier." },
        { stepNumber: 3, description: "Recompute correlation with the point.", workingLatex: "r_{\\text{new}} = \\dfrac{22}{\\sqrt{42 \\times 92}} = 0.354", explanation: "Including \\( (8,2) \\) collapses \\( r \\) from \\( 0.998 \\) to about \\( 0.354 \\): the strong positive correlation is largely destroyed." },
        { stepNumber: 4, description: "Recompute the gradient.", workingLatex: "b_{\\text{new}} = \\dfrac{22}{42} = 0.524", explanation: "The gradient falls from \\( 1.52 \\) to about \\( 0.524 \\): the outlier pulls the line down and flattens it markedly." },
        { stepNumber: 5, description: "State the overall effect.", workingLatex: "r:0.998 \\to 0.354,\\ b:1.52 \\to 0.524", explanation: "A single anomalous point has a large, distorting influence on both the correlation and the fitted line." },
        { stepNumber: 6, description: "Make a recommendation.", workingLatex: "\\text{investigate, then decide}", explanation: "The point should be investigated first: if it is a recording error or due to a different cause (e.g. flooding), it should be excluded; otherwise it must be reported and explained, not silently dropped." }
      ],
      finalAnswer: "(a) Yes — predicted 13.8 t but recorded 2 t, far from the trend. (b) \\( r \\) falls from 0.998 to 0.354; gradient falls from 1.52 to 0.524. (c) Investigate the point: exclude only if it is an error, otherwise report it with explanation.",
    },
  },
  {
    id: "y2cr-066",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 66",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The population \\( P \\) (thousands) of a town is modelled by \\( P = A b^{t} \\), where \\( t \\) is years after 2020:\n\n| \\( t \\) | 0 | 1 | 2 | 3 | 4 | 5 |\n|---|---|---|---|---|---|---|\n| \\( P \\) | 50.0 | 67.5 | 91.1 | 123 | 166 | 224 |\n\nTaking logs base 10, the regression line of \\( \\log_{10} P \\) on \\( t \\) is \\( \\log_{10} P = 1.70 + 0.130t \\), with \\( r = 1.00 \\).\n(a) Explain why the high value of \\( r \\) for the log-linear data supports an exponential model rather than a linear one. (b) Find \\( A \\) and \\( b \\) to 3 significant figures. (c) Show that the model predicts a population of about \\( 302 \\) thousand in 2026, and comment on the reliability of predicting the 2040 population.",
    marks: 8,
    examStyle: true,
    yearCreated: 2026,
    tags: ["log-linear", "exponential growth", "population", "show that", "regression", "model choice"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Justify the model choice.", workingLatex: "\\log_{10} P = \\log_{10} A + (\\log_{10} b)t", explanation: "If \\( P \\) were linear in \\( t \\), then \\( \\log_{10} P \\) would not be linear. The points \\( (t, \\log_{10}P) \\) lie almost perfectly on a line (\\( r = 1.00 \\)), which is the signature of an exponential model \\( P = Ab^{t} \\)." },
        { stepNumber: 2, description: "Find \\( A \\).", workingLatex: "\\log_{10} A = 1.70 \\Rightarrow A = 10^{1.70} = 50.1", explanation: "\\( A \\approx 50.1 \\) thousand (3 sf), matching the 2020 population." },
        { stepNumber: 3, description: "Find \\( b \\).", workingLatex: "\\log_{10} b = 0.130 \\Rightarrow b = 10^{0.130} = 1.35", explanation: "\\( b \\approx 1.35 \\): the population grows by about \\( 35\\% \\) per year." },
        { stepNumber: 4, description: "Predict at \\( t = 6 \\) (year 2026).", workingLatex: "\\log_{10} P = 1.70 + 0.130(6) = 2.480", explanation: "Substitute \\( t = 6 \\) into the regression line." },
        { stepNumber: 5, description: "Back-transform.", workingLatex: "P = 10^{2.480} = 302", explanation: "So \\( P \\approx 302 \\) thousand in 2026, as required (using unrounded coefficients gives \\( 303 \\), consistent to 3 sf)." },
        { stepNumber: 6, description: "Comment on the 2040 prediction.", workingLatex: "t = 20 \\gg 5", explanation: "2040 corresponds to \\( t = 20 \\), far beyond the data (0 to 5). Sustained 35% annual growth is unrealistic over 20 years (resource/space limits), so the extrapolation is unreliable." }
      ],
      finalAnswer: "(a) \\( \\log_{10}P \\) is linear in \\( t \\) with \\( r=1.00 \\), the signature of exponential growth. (b) \\( A \\approx 50.1 \\), \\( b \\approx 1.35 \\). (c) 2026: \\( P \\approx 302 \\) thousand; 2040 (\\( t=20 \\)) is far extrapolation, so unreliable.",
    },
  },
  {
    id: "y2cr-067",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 67",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A company records weekly advertising spend \\( x \\) (\\(\\pounds\\) thousand) and sales \\( y \\) (\\(\\pounds\\) thousand):\n\n| \\( x \\) | 1 | 2 | 3 | 4 | 5 | 6 |\n|---|---|---|---|---|---|---|\n| \\( y \\) | 12 | 17 | 21 | 26 | 30 | 35 |\n\nGiven \\( S_{xx} = 17.5 \\), \\( S_{xy} = 79.5 \\) and \\( S_{yy} = 361.5 \\):\n(a) Show that the regression line of \\( y \\) on \\( x \\) is \\( y = 7.60 + 4.54x \\). (b) Show that this line predicts sales of \\( \\pounds 28000 \\) when \\( \\pounds 4500 \\) is spent on advertising, and state whether this is interpolation or extrapolation. (c) Find \\( r \\) to 3 significant figures and interpret it.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["regression", "show that", "PMCC", "interpolation", "advertising sales"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the gradient.", workingLatex: "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{79.5}{17.5} = 4.54", explanation: "The gradient is \\( 4.5428\\ldots \\approx 4.54 \\) (3 sf)." },
        { stepNumber: 2, description: "Find the intercept.", workingLatex: "a = \\bar y - b\\bar x = 23.5 - 4.543(3.5) = 7.60", explanation: "With \\( \\bar x = 3.5 \\), \\( \\bar y = 23.5 \\), the intercept is \\( 7.60 \\) (3 sf), giving \\( y = 7.60 + 4.54x \\)." },
        { stepNumber: 3, description: "Predict at \\( x = 4.5 \\) (i.e. \\( \\pounds 4500 \\)).", workingLatex: "y = 7.60 + 4.543(4.5) = 28.0", explanation: "So predicted sales are \\( 28.0 \\) (\\(\\pounds\\) thousand) \\( = \\pounds 28000 \\), as required." },
        { stepNumber: 4, description: "Classify the prediction.", workingLatex: "1 \\le 4.5 \\le 6", explanation: "Since \\( 4.5 \\) lies within the data range, this is interpolation, so the estimate is reliable." },
        { stepNumber: 5, description: "Compute \\( r \\).", workingLatex: "r = \\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}} = \\dfrac{79.5}{\\sqrt{17.5 \\times 361.5}} = 0.9995", explanation: "So \\( r = 1.00 \\) to 3 sf." },
        { stepNumber: 6, description: "Interpret \\( r \\).", workingLatex: "r \\approx 1", explanation: "Almost perfect positive correlation: higher advertising spend is strongly associated with higher sales, and the model fits very well." }
      ],
      finalAnswer: "(a) \\( y = 7.60 + 4.54x \\). (b) At \\( x = 4.5 \\), \\( y = 28.0 \\) (\\( \\pounds 28000 \\)); interpolation, so reliable. (c) \\( r = 1.00 \\) (3 sf) — almost perfect positive correlation.",
    },
  },
  {
    id: "y2cr-068",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 68",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "For a simple pendulum the period \\( T \\) (s) is thought to depend on length \\( L \\) (m) via a power model \\( T = aL^{n} \\). Measurements give:\n\n| \\( L \\) (m) | 1 | 2 | 4 | 8 | 16 |\n|---|---|---|---|---|---|\n| \\( T \\) (s) | 2.00 | 2.83 | 4.00 | 5.66 | 8.00 |\n\n(a) Show that \\( T = aL^{n} \\) can be written as a linear relationship between \\( \\log_{10} T \\) and \\( \\log_{10} L \\). (b) The regression line of \\( \\log_{10} T \\) on \\( \\log_{10} L \\) is \\( \\log_{10} T = 0.301 + 0.500\\log_{10} L \\). Use it to find \\( a \\) and \\( n \\) to 3 significant figures. (c) Hence show the model gives \\( T \\approx 2.00\\sqrt{L} \\), and use it to show that \\( L = 9 \\) m gives \\( T = 6.00 \\) s. State whether this is interpolation or extrapolation.",
    marks: 8,
    examStyle: true,
    yearCreated: 2026,
    tags: ["log-log", "power model", "model choice", "regression", "show that", "linearising"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Linearise the power model.", workingLatex: "\\log_{10} T = \\log_{10} a + n\\log_{10} L", explanation: "Taking logs of \\( T = aL^{n} \\) gives a straight line: \\( \\log_{10}T \\) against \\( \\log_{10}L \\) with intercept \\( \\log_{10}a \\) and gradient \\( n \\)." },
        { stepNumber: 2, description: "Find \\( a \\) from the intercept.", workingLatex: "\\log_{10} a = 0.301 \\Rightarrow a = 10^{0.301} = 2.00", explanation: "\\( a \\approx 2.00 \\) (3 sf)." },
        { stepNumber: 3, description: "Find \\( n \\) from the gradient.", workingLatex: "n = 0.500", explanation: "The gradient is the power, \\( n = 0.500 \\), i.e. \\( T \\propto L^{1/2} \\)." },
        { stepNumber: 4, description: "Write the model.", workingLatex: "T = 2.00\\,L^{0.5} = 2.00\\sqrt{L}", explanation: "Since \\( L^{0.5} = \\sqrt{L} \\), the fitted model is \\( T \\approx 2.00\\sqrt{L} \\) — consistent with the theoretical \\( T = 2\\pi\\sqrt{L/g} \\)." },
        { stepNumber: 5, description: "Predict at \\( L = 9 \\).", workingLatex: "T = 2.00\\sqrt{9} = 2.00 \\times 3 = 6.00", explanation: "So \\( T = 6.00 \\) s, as required." },
        { stepNumber: 6, description: "Classify the prediction.", workingLatex: "1 \\le 9 \\le 16", explanation: "Since \\( L = 9 \\) lies within the measured range (1 to 16 m), this is interpolation, so the estimate is reliable." }
      ],
      finalAnswer: "(a) \\( \\log_{10}T = \\log_{10}a + n\\log_{10}L \\), linear. (b) \\( a \\approx 2.00 \\), \\( n = 0.500 \\). (c) \\( T \\approx 2.00\\sqrt{L} \\); at \\( L=9 \\), \\( T = 6.00 \\) s, an interpolation, so reliable.",
    },
  },
  {
    id: "y2cr-069",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 69",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Global mean temperature anomaly \\( y \\) (\\(^{\\circ}\\)C) is recorded against year, coded as \\( x \\):\n\n| year | 1960 | 1970 | 1980 | 1990 | 2000 | 2010 |\n|---|---|---|---|---|---|---|\n| \\( y \\) | 0.02 | 0.05 | 0.18 | 0.35 | 0.55 | 0.72 |\n\nThe regression line of \\( y \\) on (year) is \\( y = -29.0 + 0.0148(\\text{year}) \\) and \\( r = 0.982 \\).\n(a) Interpret \\( r \\) and the gradient in context. (b) Use the line to estimate the anomaly in 2020, stating whether it is interpolation or extrapolation, and comment on reliability. (c) A commentator says the model 'proves' that the passage of time causes warming. Explain why the regression cannot establish this, and suggest a more plausible underlying cause.",
    questionMafs: `<Mafs viewBox={{ x: [1946, 2013], y: [-0.1696, 0.822] }} height={260} preserveAspectRatio={false}>
  <Line.Segment point1={[1957, -0.066]} point2={[2013, -0.066]} color="var(--mafs-fg)" />
  <Line.Segment point1={[1957, -0.066]} point2={[1957, 0.822]} color="var(--mafs-fg)" />
  <Text x={1960} y={-0.066} attach="s">1960</Text>
  <Text x={1970} y={-0.066} attach="s">1970</Text>
  <Text x={1980} y={-0.066} attach="s">1980</Text>
  <Text x={1990} y={-0.066} attach="s">1990</Text>
  <Text x={2000} y={-0.066} attach="s">2000</Text>
  <Text x={2010} y={-0.066} attach="s">2010</Text>
  <Text x={1957} y={0.1} attach="w">0.1</Text>
  <Text x={1957} y={0.2} attach="w">0.2</Text>
  <Text x={1957} y={0.3} attach="w">0.3</Text>
  <Text x={1957} y={0.4} attach="w">0.4</Text>
  <Text x={1957} y={0.5} attach="w">0.5</Text>
  <Text x={1957} y={0.6} attach="w">0.6</Text>
  <Text x={1957} y={0.7} attach="w">0.7</Text>
  <Line.Segment point1={[1960, 0.008]} point2={[2010, 0.748]} color="var(--mafs-fg-orange)" />
  <Point x={1960} y={0.02} color="var(--mafs-fg-blue)" />
  <Point x={1970} y={0.05} color="var(--mafs-fg-blue)" />
  <Point x={1980} y={0.18} color="var(--mafs-fg-blue)" />
  <Point x={1990} y={0.35} color="var(--mafs-fg-blue)" />
  <Point x={2000} y={0.55} color="var(--mafs-fg-blue)" />
  <Point x={2010} y={0.72} color="var(--mafs-fg-blue)" />
</Mafs>`,
    marks: 8,
    examStyle: true,
    yearCreated: 2026,
    tags: ["correlation", "causation", "regression", "extrapolation", "confounding", "climate"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Interpret \\( r \\).", workingLatex: "r = 0.982", explanation: "A value close to \\( +1 \\) indicates strong positive correlation: the anomaly has risen steadily over the period, with points lying close to a line." },
        { stepNumber: 2, description: "Interpret the gradient.", workingLatex: "b = 0.0148", explanation: "On average the anomaly increases by about \\( 0.0148\\,^{\\circ}\\text{C} \\) per year (about \\( 0.148\\,^{\\circ}\\text{C} \\) per decade) over this period." },
        { stepNumber: 3, description: "Predict for 2020.", workingLatex: "y = -29.0 + 0.0148(2020) = 0.896 \\approx 0.90", explanation: "Using unrounded coefficients, the estimated anomaly in 2020 is about \\( 0.83\\,^{\\circ}\\text{C} \\)." },
        { stepNumber: 4, description: "Classify and assess reliability.", workingLatex: "2020 > 2010", explanation: "2020 lies just outside the data range, so this is extrapolation. As it is only a short step beyond the data and the trend is strong, it is moderately reliable, but not guaranteed." },
        { stepNumber: 5, description: "Address the causation claim.", workingLatex: "\\text{correlation} \\not\\Rightarrow \\text{causation}", explanation: "Year is only a label for time; time itself cannot cause warming. The regression shows association, not mechanism." },
        { stepNumber: 6, description: "Suggest a plausible cause.", workingLatex: "\\text{confounder: } \\mathrm{CO_2}", explanation: "A confounding variable that increases with year — such as atmospheric carbon-dioxide concentration from human activity — is a more plausible underlying cause of the warming." }
      ],
      finalAnswer: "(a) Strong positive correlation; about \\( 0.0148\\,^{\\circ}\\text{C} \\) rise per year. (b) 2020: \\( y \\approx 0.90\\,^{\\circ}\\text{C} \\), a short extrapolation, so only moderately reliable. (c) Regression shows association not causation; rising \\( \\mathrm{CO_2} \\) (which also increases with year) is a more plausible cause.",
    },
  },
  {
    id: "y2cr-070",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 70",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A culture of bacteria has count \\( N \\) at time \\( t \\) hours, modelled by \\( N = A b^{t} \\):\n\n| \\( t \\) | 0 | 1 | 2 | 3 | 4 | 5 | 6 |\n|---|---|---|---|---|---|---|---|\n| \\( N \\) | 200 | 300 | 450 | 675 | 1013 | 1519 | 2278 |\n\nThe regression line of \\( \\log_{10} N \\) on \\( t \\) is \\( \\log_{10} N = 2.30 + 0.176t \\), with \\( r = 1.00 \\).\n(a) Find the hourly growth factor \\( b \\) to 3 significant figures and interpret it. (b) Show that the model predicts a count of about \\( 5130 \\) at \\( t = 8 \\). (c) The dish can hold at most \\( 10^{5} \\) bacteria. Use the model to find the time when the count first reaches this, and explain why the prediction may be unreliable.",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["log-linear", "show that", "exponential", "regression", "growth", "extrapolation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find \\( b \\).", workingLatex: "\\log_{10} b = 0.176 \\Rightarrow b = 10^{0.176} = 1.50", explanation: "The hourly growth factor is \\( b \\approx 1.50 \\)." },
        { stepNumber: 2, description: "Interpret \\( b \\).", workingLatex: "b = 1.50", explanation: "The bacteria count multiplies by about \\( 1.50 \\) (grows by \\( 50\\% \\)) every hour." },
        { stepNumber: 3, description: "Predict at \\( t = 8 \\).", workingLatex: "\\log_{10} N = 2.301 + 0.1761(8) = 3.710", explanation: "Using unrounded coefficients \\( (2.3010 + 0.17610\\times 8) \\) gives \\( 3.7098 \\)." },
        { stepNumber: 4, description: "Back-transform.", workingLatex: "N = 10^{3.710} = 5130", explanation: "So \\( N \\approx 5130 \\) at \\( t = 8 \\), as required." },
        { stepNumber: 5, description: "Solve for the capacity time.", workingLatex: "\\log_{10}(10^{5}) = 2.301 + 0.1761t", explanation: "Set \\( \\log_{10} N = 5 \\): \\( 5 = 2.301 + 0.1761t \\)." },
        { stepNumber: 6, description: "Find \\( t \\).", workingLatex: "t = \\dfrac{5 - 2.301}{0.1761} = 15.3", explanation: "So the count first reaches \\( 10^{5} \\) at about \\( t = 15.3 \\) hours." },
        { stepNumber: 7, description: "Explain unreliability.", workingLatex: "15.3 \\gg 6", explanation: "This is far beyond the data range (0 to 6 hours), so it is extrapolation. Real growth slows as resources run out (logistic, not exponential), so the model is likely to overestimate and the prediction is unreliable." }
      ],
      finalAnswer: "(a) \\( b \\approx 1.50 \\): the count grows by about 50% per hour. (b) At \\( t=8 \\), \\( N \\approx 5130 \\). (c) Capacity reached at \\( t \\approx 15.3 \\) h; far extrapolation and growth will slow (resources), so unreliable.",
    },
  },
  {
    id: "y2cr-071",
    topicRef: "y2cr",
    topicTitle: "Correlation, Regression & Bivariate Data 71",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Six trials measure a chemical dose \\( x \\) (mg) and reaction yield \\( y \\) (%):\n\n| \\( x \\) | 10 | 20 | 30 | 40 | 50 | 60 |\n|---|---|---|---|---|---|---|\n| \\( y \\) | 3.2 | 4.1 | 5.3 | 6.0 | 7.1 | 8.0 |\n\nGiven \\( S_{xx} = 1750 \\), \\( S_{xy} = 168.5 \\), \\( S_{yy} = 16.27 \\):\n(a) Show that the regression line of \\( y \\) on \\( x \\) is \\( y = 2.25 + 0.0963x \\), and find \\( r \\) to 3 significant figures. (b) Show that the line gives a yield of \\( 5.62\\% \\) at a dose of 35 mg. (c) A seventh trial gives \\( (60, 1.0) \\). Without full recalculation, explain the qualitative effect of this point on \\( r \\) and on the gradient, and recommend how it should be handled.",
    marks: 8,
    examStyle: true,
    yearCreated: 2026,
    tags: ["outlier", "PMCC", "regression", "show that", "model choice", "exam synthesis"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the gradient.", workingLatex: "b = \\dfrac{S_{xy}}{S_{xx}} = \\dfrac{168.5}{1750} = 0.0963", explanation: "The gradient is \\( 0.09629\\ldots \\approx 0.0963 \\) (3 sf)." },
        { stepNumber: 2, description: "Find the intercept.", workingLatex: "a = \\bar y - b\\bar x = 5.617 - 0.09629(35) = 2.25", explanation: "With \\( \\bar x = 35 \\), \\( \\bar y = 5.617 \\), the intercept is \\( 2.25 \\) (3 sf), giving \\( y = 2.25 + 0.0963x \\)." },
        { stepNumber: 3, description: "Find \\( r \\).", workingLatex: "r = \\dfrac{168.5}{\\sqrt{1750 \\times 16.27}} = 0.999", explanation: "So \\( r = 0.999 \\) (3 sf): very strong positive correlation." },
        { stepNumber: 4, description: "Predict at \\( x = 35 \\).", workingLatex: "y = 2.247 + 0.09629(35) = 5.62", explanation: "Using unrounded coefficients, \\( y = 5.62\\% \\) at a 35 mg dose, as required." },
        { stepNumber: 5, description: "Effect of the new point on \\( r \\).", workingLatex: "(60, 1.0)\\ \\text{vs trend} \\approx 8.0", explanation: "The point \\( (60, 1.0) \\) lies far below the strong upward trend, so it is an outlier. Including it would sharply reduce \\( r \\) (away from 1), weakening the apparent correlation." },
        { stepNumber: 6, description: "Effect on the gradient.", workingLatex: "b \\downarrow", explanation: "Because the outlier is at a high \\( x \\) but a very low \\( y \\), it pulls the right-hand end of the line down, reducing (flattening) the gradient." },
        { stepNumber: 7, description: "Recommend handling.", workingLatex: "\\text{investigate first}", explanation: "Investigate the trial: if it is a measurement or recording error it should be excluded; otherwise it must be reported and explained, since dropping valid data is not justified." }
      ],
      finalAnswer: "(a) \\( y = 2.25 + 0.0963x \\), \\( r = 0.999 \\). (b) At \\( x = 35 \\), \\( y = 5.62\\% \\). (c) \\( (60,1.0) \\) is a low outlier: it reduces \\( r \\) and flattens the gradient; investigate it and exclude only if it is an error.",
    },
  },
];
