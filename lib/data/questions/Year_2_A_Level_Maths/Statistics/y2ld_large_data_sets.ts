import { Question } from "@/lib/types";

/**
 * Year 2 — Statistics § Large Data Sets & Data in Context
 * Ref: y2ld
 * 71 questions. Diagrams: Mafs figures (questionMafs / step.mafs).
 */
export const questions: Question[] = [
  {
    id: "y2ld-001",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 01",
    difficulty: "Foundation",
    questionText: "A geographer records the eye colour of each student in a class (for example brown, blue, green). State the type of variable being recorded.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["classify", "variable-type", "categorical"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Look at how the data is recorded.", workingLatex: "\\text{recorded values} = \\text{brown},\\ \\text{blue},\\ \\text{green}", explanation: "First read off the kind of values the geographer writes down: each entry is a colour name, not a measurement." },
        { stepNumber: 2, description: "Decide: numbers or words?", workingLatex: "\\text{brown, blue, green} \\;\\Rightarrow\\; \\text{words, not numbers}", explanation: "Ask whether each value is a number you could add or average. These are words, so the data is descriptive (qualitative), not numerical." },
        { stepNumber: 3, description: "Name the matching variable type.", workingLatex: "\\text{descriptive named groups} \\;\\Rightarrow\\; \\text{categorical}", explanation: "Data that sorts items into named groups with no numerical value is called categorical (qualitative). A common slip is to call it discrete — but discrete/continuous only apply to numerical data." }
      ],
      finalAnswer: "Categorical (qualitative)",
    },
  },
  {
    id: "y2ld-002",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 02",
    difficulty: "Foundation",
    questionText: "The height (in cm) of each sunflower in a garden is measured. State whether this variable is discrete or continuous.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["classify", "discrete-continuous"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Note that the data is numerical.", workingLatex: "\\text{height in cm} \\;\\Rightarrow\\; \\text{a measurement}", explanation: "Height is a measured number, so the discrete/continuous question applies. Now decide which one." },
        { stepNumber: 2, description: "Think about the values it can take.", workingLatex: "142\\text{ cm},\\ 142.7\\text{ cm},\\ 142.71\\text{ cm},\\ \\ldots", explanation: "Between any two heights there is always another possible height. The only limit is how precisely you measure, not the quantity itself." },
        { stepNumber: 3, description: "Match this to discrete or continuous.", workingLatex: "\\text{any value in a range} \\;\\Rightarrow\\; \\text{continuous}", explanation: "A quantity that can take any value within an interval is continuous. A common slip is to call it discrete because we round to a few decimals — but rounding is about recording, not the true variable." }
      ],
      finalAnswer: "Continuous",
    },
  },
  {
    id: "y2ld-003",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 03",
    difficulty: "Foundation",
    questionText: "A shopkeeper records the number of customers entering her shop each hour. State whether this variable is discrete or continuous.",
    marks: 1,
    examStyle: true,
    yearCreated: 2026,
    tags: ["classify", "discrete"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Note that the data is numerical.", workingLatex: "\\text{number of customers} \\;\\Rightarrow\\; \\text{a count}", explanation: "We are counting people, so we have numerical data and must decide discrete vs continuous." },
        { stepNumber: 2, description: "List the possible values.", workingLatex: "0,\\ 1,\\ 2,\\ 3,\\ \\ldots", explanation: "You can have 0, 1, 2, ... customers, but never a value in between such as \\(3.5\\). Half a customer makes no sense." },
        { stepNumber: 3, description: "Match this to discrete or continuous.", workingLatex: "\\text{separate whole-number values} \\;\\Rightarrow\\; \\text{discrete}", explanation: "A variable that can take only separate, countable values is discrete. A common slip is to assume anything numerical with large values is continuous — counts are always discrete." }
      ],
      finalAnswer: "Discrete",
    },
  },
  {
    id: "y2ld-004",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 04",
    difficulty: "Foundation",
    questionText: "Find the mean of the data set \\( 7,\\ 12,\\ 9,\\ 4,\\ 8 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["mean", "small-data"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the mean formula.", workingLatex: "\\bar{x} = \\frac{\\sum x}{n}", explanation: "The mean is the total of the values divided by how many there are. Stating the formula first keeps the steps organised." },
        { stepNumber: 2, description: "List the values to be added.", workingLatex: "7,\\ 12,\\ 9,\\ 4,\\ 8", explanation: "Write the data out so none is missed when adding up." },
        { stepNumber: 3, description: "Form the sum of the values.", workingLatex: "\\sum x = 7+12+9+4+8 = 40", explanation: "Add carefully: \\(7+12=19\\), \\(+9=28\\), \\(+4=32\\), \\(+8=40\\). Adding left to right helps avoid arithmetic slips." },
        { stepNumber: 4, description: "Count how many values there are.", workingLatex: "n = 5", explanation: "There are five numbers in the list, so we will divide by 5." },
        { stepNumber: 5, description: "Divide the total by the count.", workingLatex: "\\bar{x} = \\frac{40}{5} = 8", explanation: "Substitute \\(\\sum x = 40\\) and \\(n = 5\\) into the formula. A common slip is dividing by 4 (one fewer than the count) instead of 5." }
      ],
      finalAnswer: "\\( \\bar{x} = 8 \\)",
      canonicalAnswer: "8",
    },
  },
  {
    id: "y2ld-005",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 05",
    difficulty: "Foundation",
    questionText: "Find the median of the data set \\( 14,\\ 6,\\ 11,\\ 3,\\ 9,\\ 20,\\ 8 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["median", "small-data", "ordering"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the values in ascending order.", workingLatex: "3,\\ 6,\\ 8,\\ 9,\\ 11,\\ 14,\\ 20", explanation: "The median must be read from the ordered list. Forgetting to sort first is the most common mistake here." },
        { stepNumber: 2, description: "Count how many values there are.", workingLatex: "n = 7", explanation: "There are seven values, an odd number, so there will be a single middle value." },
        { stepNumber: 3, description: "Use the position formula.", workingLatex: "\\text{position} = \\frac{n+1}{2} = \\frac{7+1}{2} = 4", explanation: "For \\(n\\) values the median sits at position \\(\\tfrac{n+1}{2}\\). Here that is the 4th value in the ordered list." },
        { stepNumber: 4, description: "Read off the 4th value.", workingLatex: "3,\\ 6,\\ 8,\\ \\underline{9},\\ 11,\\ 14,\\ 20 \\;\\Rightarrow\\; \\text{median} = 9", explanation: "Count along to position 4: that value is \\(9\\). A common slip is to count from the wrong end — but order is symmetric so the centre is the same either way." }
      ],
      finalAnswer: "Median \\( = 9 \\)",
      canonicalAnswer: "9",
    },
  },
  {
    id: "y2ld-006",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 06",
    difficulty: "Foundation",
    questionText: "Find the median of the data set \\( 22,\\ 15,\\ 30,\\ 18,\\ 27,\\ 19 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["median", "even", "small-data"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the values in ascending order.", workingLatex: "15,\\ 18,\\ 19,\\ 22,\\ 27,\\ 30", explanation: "Always order the data before locating the median." },
        { stepNumber: 2, description: "Count how many values there are.", workingLatex: "n = 6", explanation: "There are six values, an even number, so there is no single middle value — there are two." },
        { stepNumber: 3, description: "Find the positions of the two middle values.", workingLatex: "\\frac{n}{2} = 3 \\;\\text{and}\\; \\frac{n}{2}+1 = 4 \\;\\Rightarrow\\; \\text{3rd and 4th}", explanation: "For an even \\(n\\), the two central positions are \\(\\tfrac{n}{2}\\) and \\(\\tfrac{n}{2}+1\\), i.e. the 3rd and 4th values." },
        { stepNumber: 4, description: "Read off those two values.", workingLatex: "15,\\ 18,\\ \\underline{19},\\ \\underline{22},\\ 27,\\ 30 \\;\\Rightarrow\\; 19 \\text{ and } 22", explanation: "The 3rd value is \\(19\\) and the 4th is \\(22\\)." },
        { stepNumber: 5, description: "Average the two middle values.", workingLatex: "\\text{median} = \\frac{19+22}{2} = \\frac{41}{2} = 20.5", explanation: "The median is the mean of the two middle numbers. A common slip is to pick just one of them rather than averaging." }
      ],
      finalAnswer: "Median \\( = 20.5 \\)",
      canonicalAnswer: "20.5",
    },
  },
  {
    id: "y2ld-007",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 07",
    difficulty: "Foundation",
    questionText: "Find the mode of the data set \\( 5,\\ 8,\\ 8,\\ 3,\\ 5,\\ 8,\\ 2 \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["mode", "small-data"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall what the mode means.", workingLatex: "\\text{mode} = \\text{most frequently occurring value}", explanation: "The mode is the value that appears the most times, so we need a tally of each value." },
        { stepNumber: 2, description: "Tally how often each value appears.", workingLatex: "5{:}\\ 2,\\quad 8{:}\\ 3,\\quad 3{:}\\ 1,\\quad 2{:}\\ 1", explanation: "Go through the list and count each distinct value: \\(5\\) twice, \\(8\\) three times, \\(3\\) once, \\(2\\) once. The counts must add to 7." },
        { stepNumber: 3, description: "Pick the value with the highest tally.", workingLatex: "\\max(2,3,1,1) = 3 \\;\\leftrightarrow\\; \\text{value } 8", explanation: "The largest count is 3, which belongs to the value \\(8\\). A common slip is to write the frequency (3) as the answer instead of the value (8)." }
      ],
      finalAnswer: "Mode \\( = 8 \\)",
      canonicalAnswer: "8",
    },
  },
  {
    id: "y2ld-008",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 08",
    difficulty: "Foundation",
    questionText: "Find the range of the data set \\( 31,\\ 47,\\ 25,\\ 52,\\ 38 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["range", "small-data"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the range formula.", workingLatex: "\\text{range} = \\text{max} - \\text{min}", explanation: "The range measures spread: the largest value minus the smallest." },
        { stepNumber: 2, description: "Identify the largest value.", workingLatex: "\\text{max} = 52", explanation: "Scan the list for the biggest number; \\(52\\) is the largest." },
        { stepNumber: 3, description: "Identify the smallest value.", workingLatex: "\\text{min} = 25", explanation: "Scan again for the smallest number; \\(25\\) is the least." },
        { stepNumber: 4, description: "Subtract smallest from largest.", workingLatex: "\\text{range} = 52 - 25 = 27", explanation: "Substitute into the formula. A common slip is to subtract the wrong way round (giving a negative) — always do max minus min." }
      ],
      finalAnswer: "Range \\( = 27 \\)",
      canonicalAnswer: "27",
    },
  },
  {
    id: "y2ld-009",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 09",
    difficulty: "Foundation",
    questionText: "The masses (in kg) of seven parcels are recorded as \\( 4,\\ 5,\\ 6,\\ 5,\\ 48,\\ 7,\\ 6 \\). By inspection, write down the value that is an obvious outlier and briefly state why.",
    marks: 2,
    examStyle: true,
    yearCreated: 2026,
    tags: ["outlier", "inspection"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Order the values to see the pattern.", workingLatex: "4,\\ 5,\\ 5,\\ 6,\\ 6,\\ 7,\\ 48", explanation: "Sorting makes any odd value stand out clearly at one end." },
        { stepNumber: 2, description: "Describe where most values lie.", workingLatex: "\\text{six values lie in } [4,\\ 7]", explanation: "Six of the seven masses cluster tightly between 4 kg and 7 kg, so that is the 'normal' range for this data." },
        { stepNumber: 3, description: "Spot the value far from the cluster.", workingLatex: "48 \\gg 7", explanation: "\\(48\\) kg is many times larger than every other value and sits far outside the cluster, so it is the obvious outlier." },
        { stepNumber: 4, description: "State the outlier with a reason.", workingLatex: "\\text{outlier} = 48\\ \\text{kg}", explanation: "Always justify by inspection: it is much greater than all the others. Stating the value without a reason can lose the second mark." }
      ],
      finalAnswer: "The outlier is \\(48\\) kg, because it is much greater than all the other values which lie between \\(4\\) and \\(7\\) kg.",
    },
  },
  {
    id: "y2ld-010",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 10",
    difficulty: "Foundation",
    questionText: "The frequency table shows the number of goals scored by a team in \\(20\\) matches. \\[ \\begin{array}{c|c} \\text{Goals} & \\text{Frequency} \\\\ \\hline 0 & 3 \\\\ 1 & 7 \\\\ 2 & 6 \\\\ 3 & 4 \\end{array} \\] Write down the modal number of goals.",
    marks: 2,
    examStyle: true,
    yearCreated: 2026,
    tags: ["frequency-table", "reading", "mode"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the mode from a frequency table.", workingLatex: "\\text{mode} = \\text{value with the highest frequency}", explanation: "In a frequency table, the mode is the data value (goals) whose frequency is largest, not the frequency itself." },
        { stepNumber: 2, description: "List the frequencies.", workingLatex: "3,\\ 7,\\ 6,\\ 4", explanation: "Read down the Frequency column so you can compare them." },
        { stepNumber: 3, description: "Find the largest frequency.", workingLatex: "\\max(3,\\ 7,\\ 6,\\ 4) = 7", explanation: "The biggest frequency is \\(7\\), which happened most often." },
        { stepNumber: 4, description: "Read the goals value in that row.", workingLatex: "\\text{frequency } 7 \\;\\leftrightarrow\\; 1\\ \\text{goal}", explanation: "Trace frequency \\(7\\) back to its Goals entry, which is \\(1\\). A common slip is to answer \\(7\\) (the frequency) instead of \\(1\\) (the number of goals)." }
      ],
      finalAnswer: "Modal number of goals \\( = 1 \\)",
      canonicalAnswer: "1",
    },
  },
  {
    id: "y2ld-011",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 11",
    difficulty: "Foundation",
    questionText: "The frequency table shows the number of pets owned by \\(20\\) students. \\[ \\begin{array}{c|c} \\text{Pets} & \\text{Frequency} \\\\ \\hline 0 & 5 \\\\ 1 & 8 \\\\ 2 & 4 \\\\ 3 & 3 \\end{array} \\] Calculate the mean number of pets per student.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["frequency-table", "mean", "summary"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the frequency-table mean formula.", workingLatex: "\\bar{x} = \\frac{\\sum fx}{\\sum f}", explanation: "For data in a frequency table the mean is the total of (value times frequency) divided by the total frequency." },
        { stepNumber: 2, description: "Multiply each value by its frequency.", workingLatex: "0\\times5=0,\\ \\ 1\\times8=8,\\ \\ 2\\times4=8,\\ \\ 3\\times3=9", explanation: "Each \\(fx\\) is the total number of pets contributed by that row. A common slip is to add the columns instead of multiplying across each row first." },
        { stepNumber: 3, description: "Add the products for the total pets.", workingLatex: "\\sum fx = 0+8+8+9 = 25", explanation: "Summing the \\(fx\\) values gives the grand total of pets owned by all students." },
        { stepNumber: 4, description: "Add the frequencies for the total students.", workingLatex: "\\sum f = 5+8+4+3 = 20", explanation: "The frequencies sum to \\(20\\), matching the number of students stated in the question — a useful check." },
        { stepNumber: 5, description: "Divide total pets by total students.", workingLatex: "\\bar{x} = \\frac{\\sum fx}{\\sum f} = \\frac{25}{20} = 1.25", explanation: "Substitute \\(\\sum fx = 25\\) and \\(\\sum f = 20\\). A common slip is to divide by the number of rows (4) instead of \\(\\sum f = 20\\)." }
      ],
      finalAnswer: "Mean \\( = 1.25 \\) pets",
      canonicalAnswer: "1.25",
    },
  },
  {
    id: "y2ld-012",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 12",
    difficulty: "Foundation",
    questionText: "The box plot shows the marks scored by a class in a test. Write down the median mark. The box plot has minimum \\(12\\), lower quartile \\(25\\), median \\(34\\), upper quartile \\(41\\) and maximum \\(58\\).",
    questionMafs: `<Mafs viewBox={{ x: [7.4, 62.6], y: [0, 1] }} height={150}>
  <Line.Segment point1={[12, 0.55]} point2={[25, 0.55]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[41, 0.55]} point2={[58, 0.55]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[12, 0.43]} point2={[12, 0.67]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[58, 0.43]} point2={[58, 0.67]} color="var(--mafs-fg-accent)" />
  <Polygon points={[[25,0.35],[41,0.35],[41,0.75],[25,0.75]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} />
  <Line.Segment point1={[34, 0.35]} point2={[34, 0.75]} color="var(--mafs-fg-orange)" />
  <Text x={12} y={0.24} attach="s">12</Text>
  <Text x={25} y={0.12} attach="s">25</Text>
  <Text x={34} y={0.24} attach="s">34</Text>
  <Text x={41} y={0.12} attach="s">41</Text>
  <Text x={58} y={0.24} attach="s">58</Text>
</Mafs>`,
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["box plot", "median", "reading diagrams"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall what feature shows the median.", workingLatex: "\\text{median} \\to \\text{line inside the box}", explanation: "On a box plot the median is the vertical line that splits the box, not an edge of the box and not a whisker end. A common slip is to read a quartile (a box edge) instead." },
        { stepNumber: 2, description: "Find that line on the diagram.", workingLatex: "\\text{dividing line} \\to \\text{horizontal scale}", explanation: "Drop straight down from the dividing line to the number scale to read its value. Read carefully so you land on the correct gridline." },
        { stepNumber: 3, description: "State the value.", workingLatex: "\\text{median} = 34", explanation: "The dividing line sits at 34, so the median mark is 34. Make sure the unit (a mark) is understood." }
      ],
      finalAnswer: "The median mark is \\(34\\).",
      canonicalAnswer: "34",
    },
  },
  {
    id: "y2ld-013",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 13",
    difficulty: "Foundation",
    questionText: "A box plot of daily rainfall (in mm) has minimum \\(8\\), lower quartile \\(17\\), median \\(23\\), upper quartile \\(30\\) and maximum \\(46\\). Work out the range of the rainfall.",
    questionMafs: `<Mafs viewBox={{ x: [4.2, 49.8], y: [0, 1] }} height={150}>
  <Line.Segment point1={[8, 0.55]} point2={[17, 0.55]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[30, 0.55]} point2={[46, 0.55]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[8, 0.43]} point2={[8, 0.67]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[46, 0.43]} point2={[46, 0.67]} color="var(--mafs-fg-accent)" />
  <Polygon points={[[17,0.35],[30,0.35],[30,0.75],[17,0.75]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} />
  <Line.Segment point1={[23, 0.35]} point2={[23, 0.75]} color="var(--mafs-fg-orange)" />
  <Text x={8} y={0.24} attach="s">8</Text>
  <Text x={17} y={0.12} attach="s">17</Text>
  <Text x={23} y={0.24} attach="s">23</Text>
  <Text x={30} y={0.12} attach="s">30</Text>
  <Text x={46} y={0.24} attach="s">46</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["box plot", "range", "reading diagrams"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the formula for the range.", workingLatex: "\\text{range} = \\text{max} - \\text{min}", explanation: "The range measures the full spread: the largest value minus the smallest value. Do not confuse it with the IQR, which uses the quartiles instead of the extremes." },
        { stepNumber: 2, description: "Read the maximum from the plot.", workingLatex: "\\text{max} = 46", explanation: "The right-hand whisker end gives the maximum value. A slip is to read the upper quartile (the right edge of the box) instead of the whisker tip." },
        { stepNumber: 3, description: "Read the minimum from the plot.", workingLatex: "\\text{min} = 8", explanation: "The left-hand whisker end gives the minimum value, again the tip of the whisker not the edge of the box." },
        { stepNumber: 4, description: "Substitute into the formula.", workingLatex: "\\text{range} = 46 - 8", explanation: "Put the maximum and minimum into the range formula before evaluating." },
        { stepNumber: 5, description: "Evaluate the subtraction.", workingLatex: "46 - 8 = 38", explanation: "This gives the range as 38 mm. Remember to include the unit, mm." }
      ],
      finalAnswer: "The range is \\(38\\) mm.",
      canonicalAnswer: "38",
    },
  },
  {
    id: "y2ld-014",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 14",
    difficulty: "Foundation",
    questionText: "The box plot summarises the heights (in cm) of some plants. It has minimum \\(20\\), lower quartile \\(28\\), median \\(35\\), upper quartile \\(49\\) and maximum \\(64\\). Find the interquartile range (IQR).",
    questionMafs: `<Mafs viewBox={{ x: [15.6, 68.4], y: [0, 1] }} height={150}>
  <Line.Segment point1={[20, 0.55]} point2={[28, 0.55]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[49, 0.55]} point2={[64, 0.55]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[20, 0.43]} point2={[20, 0.67]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[64, 0.43]} point2={[64, 0.67]} color="var(--mafs-fg-accent)" />
  <Polygon points={[[28,0.35],[49,0.35],[49,0.75],[28,0.75]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} />
  <Line.Segment point1={[35, 0.35]} point2={[35, 0.75]} color="var(--mafs-fg-orange)" />
  <Text x={20} y={0.24} attach="s">20</Text>
  <Text x={28} y={0.12} attach="s">28</Text>
  <Text x={35} y={0.24} attach="s">35</Text>
  <Text x={49} y={0.12} attach="s">49</Text>
  <Text x={64} y={0.24} attach="s">64</Text>
</Mafs>`,
    marks: 2,
    examStyle: true,
    yearCreated: 2026,
    tags: ["box plot", "IQR", "quartiles"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the IQR formula.", workingLatex: "\\text{IQR} = Q_3 - Q_1", explanation: "The interquartile range is the upper quartile minus the lower quartile. It uses the box edges, not the whisker ends, so it is not the same as the range." },
        { stepNumber: 2, description: "Read the upper quartile.", workingLatex: "Q_3 = 49", explanation: "The right-hand edge of the box marks the upper quartile. A slip is to read the maximum (the whisker tip) instead." },
        { stepNumber: 3, description: "Read the lower quartile.", workingLatex: "Q_1 = 28", explanation: "The left-hand edge of the box marks the lower quartile, not the minimum at the left whisker tip." },
        { stepNumber: 4, description: "Substitute into the formula.", workingLatex: "\\text{IQR} = 49 - 28", explanation: "Place the two quartiles into the IQR formula before subtracting." },
        { stepNumber: 5, description: "Evaluate the subtraction.", workingLatex: "49 - 28 = 21", explanation: "This gives the IQR as 21 cm. Keep the unit, cm." }
      ],
      finalAnswer: "The IQR is \\(21\\) cm.",
      canonicalAnswer: "21",
    },
  },
  {
    id: "y2ld-015",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 15",
    difficulty: "Foundation",
    questionText: "A box plot of the times (in seconds) taken to solve a puzzle has minimum \\(15\\), lower quartile \\(31\\), median \\(40\\), upper quartile \\(52\\) and maximum \\(70\\). Write down the lower quartile.",
    questionMafs: `<Mafs viewBox={{ x: [9.5, 75.5], y: [0, 1] }} height={150}>
  <Line.Segment point1={[15, 0.55]} point2={[31, 0.55]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[52, 0.55]} point2={[70, 0.55]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[15, 0.43]} point2={[15, 0.67]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[70, 0.43]} point2={[70, 0.67]} color="var(--mafs-fg-accent)" />
  <Polygon points={[[31,0.35],[52,0.35],[52,0.75],[31,0.75]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} />
  <Line.Segment point1={[40, 0.35]} point2={[40, 0.75]} color="var(--mafs-fg-orange)" />
  <Text x={15} y={0.24} attach="s">15</Text>
  <Text x={31} y={0.12} attach="s">31</Text>
  <Text x={40} y={0.24} attach="s">40</Text>
  <Text x={52} y={0.12} attach="s">52</Text>
  <Text x={70} y={0.24} attach="s">70</Text>
</Mafs>`,
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["box plot", "lower quartile", "reading diagrams"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall which feature is the lower quartile.", workingLatex: "Q_1 \\to \\text{left edge of the box}", explanation: "The lower quartile is the left-hand edge of the box. A common slip is to read the minimum at the left whisker tip instead." },
        { stepNumber: 2, description: "Find that edge on the scale.", workingLatex: "\\text{left box edge} \\to \\text{scale}", explanation: "Drop down from the left edge of the box to the horizontal scale to read its value." },
        { stepNumber: 3, description: "State the value.", workingLatex: "Q_1 = 31", explanation: "The left edge sits at 31, so the lower quartile is 31 seconds." }
      ],
      finalAnswer: "The lower quartile is \\(31\\) seconds.",
      canonicalAnswer: "31",
    },
  },
  {
    id: "y2ld-016",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 16",
    difficulty: "Foundation",
    questionText: "The histogram shows the masses (in kg) of some parcels, with equal class widths so each bar height is a frequency. The bars are: \\(0\\)–\\(2\\) kg has frequency \\(5\\), \\(2\\)–\\(4\\) kg has frequency \\(12\\), \\(4\\)–\\(6\\) kg has frequency \\(9\\), \\(6\\)–\\(8\\) kg has frequency \\(3\\). How many parcels have a mass between \\(2\\) kg and \\(4\\) kg?",
    questionMafs: `<Mafs viewBox={{ x: [-0.32, 8.32], y: [-1.44, 14.16] }} height={240}>
  <Coordinates.Cartesian xAxis={{ lines: 1 }} yAxis={{ lines: 2 }} />
  <Polygon points={[[0,0],[0,5],[2,5],[2,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[2,0],[2,12],[4,12],[4,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[4,0],[4,9],[6,9],[6,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[6,0],[6,3],[8,3],[8,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["histogram", "frequency", "reading diagrams"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the class asked for.", workingLatex: "2 \\le \\text{mass} < 4", explanation: "The question wants masses from 2 kg up to 4 kg, so we need the bar covering that interval on the horizontal axis." },
        { stepNumber: 2, description: "Locate that bar on the histogram.", workingLatex: "\\text{bar over } [2,4]", explanation: "Find the bar sitting between 2 and 4 on the axis. Take care not to read the neighbouring \\(0\\)–\\(2\\) or \\(4\\)–\\(6\\) bar by mistake." },
        { stepNumber: 3, description: "Read the height of that bar.", workingLatex: "\\text{frequency} = 12", explanation: "Because the class widths are equal, the bar height is the frequency directly, with no area calculation needed. So the count is 12." }
      ],
      finalAnswer: "\\(12\\) parcels have a mass between \\(2\\) kg and \\(4\\) kg.",
      canonicalAnswer: "12",
    },
  },
  {
    id: "y2ld-017",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 17",
    difficulty: "Foundation",
    questionText: "A histogram has equal class widths so each bar height is a frequency. The bars are: \\(10\\)–\\(20\\) has frequency \\(6\\), \\(20\\)–\\(30\\) has frequency \\(14\\), \\(30\\)–\\(40\\) has frequency \\(18\\), \\(40\\)–\\(50\\) has frequency \\(7\\). Which class is the tallest (the modal class)?",
    questionMafs: `<Mafs viewBox={{ x: [8.4, 51.6], y: [-2.16, 21.24] }} height={240}>
  <Coordinates.Cartesian xAxis={{ lines: 10 }} yAxis={{ lines: 5 }} />
  <Polygon points={[[10,0],[10,6],[20,6],[20,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[20,0],[20,14],[30,14],[30,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[30,0],[30,18],[40,18],[40,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[40,0],[40,7],[50,7],[50,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
</Mafs>`,
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["histogram", "modal class", "reading diagrams"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "List the bar heights (frequencies).", workingLatex: "6,\\ 14,\\ 18,\\ 7", explanation: "Equal class widths mean each bar height is the frequency, so the modal class is just the tallest bar. Read the heights for all four classes." },
        { stepNumber: 2, description: "Pick out the greatest frequency.", workingLatex: "\\max(6,14,18,7) = 18", explanation: "Compare the four heights and select the largest, which is 18. A slip is to choose the widest-looking bar rather than the tallest." },
        { stepNumber: 3, description: "State the class of that bar.", workingLatex: "18 \\to 30\\text{–}40", explanation: "The bar of height 18 belongs to the \\(30\\)–\\(40\\) class, so that is the modal class." }
      ],
      finalAnswer: "The tallest class is \\(30\\)–\\(40\\).",
      canonicalAnswer: "30-40",
    },
  },
  {
    id: "y2ld-018",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 18",
    difficulty: "Foundation",
    questionText: "A head teacher collects the height of every single student in the school. State whether this is a census or a sample.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sampling", "population vs census", "vocabulary"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the definition of a census.", workingLatex: "\\text{census} = \\text{whole population}", explanation: "A census collects data from every member of the population. A sample, by contrast, only uses a selected part of the population." },
        { stepNumber: 2, description: "Identify the population here.", workingLatex: "\\text{population} = \\text{all students in the school}", explanation: "The group of interest is every student in the school, so that whole group is the population." },
        { stepNumber: 3, description: "Compare what was measured with the population.", workingLatex: "\\text{measured: every student} = \\text{population}", explanation: "Because the head teacher measured every single student, the entire population was used, not just a part of it." },
        { stepNumber: 4, description: "Conclude.", workingLatex: "\\Rightarrow \\text{census}", explanation: "Measuring the whole population means this is a census. A common slip is to call any data collection a sample." }
      ],
      finalAnswer: "This is a census.",
    },
  },
  {
    id: "y2ld-019",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 19",
    difficulty: "Foundation",
    questionText: "A factory tests every \\(20\\text{th}\\) item coming off a production line, starting from a randomly chosen item among the first \\(20\\). Name this sampling method.",
    marks: 1,
    examStyle: true,
    yearCreated: 2026,
    tags: ["sampling", "systematic sampling", "vocabulary"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Pick out the key feature in the description.", workingLatex: "\\text{every } 20\\text{th item}", explanation: "Items are chosen at a fixed, regular interval (one in every 20) from an ordered list. This regular-interval feature is the clue to the method." },
        { stepNumber: 2, description: "Note the random starting point.", workingLatex: "\\text{random start in first } 20", explanation: "A random start within the first interval is exactly how this method begins; it does not make the method 'random sampling'." },
        { stepNumber: 3, description: "Match the feature to the named method.", workingLatex: "\\text{fixed interval} \\Rightarrow \\text{systematic}", explanation: "Choosing every kth member from an ordered list is systematic sampling. A slip is to call it simple random sampling because of the random start." }
      ],
      finalAnswer: "This is systematic sampling.",
    },
  },
  {
    id: "y2ld-020",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 20",
    difficulty: "Foundation",
    questionText: "A school has \\(600\\) boys and \\(400\\) girls. A researcher chooses a sample so that the proportion of boys and girls in the sample matches the proportion in the school, selecting at random within each group. Name this sampling method.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sampling", "stratified sampling", "vocabulary"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Spot that the population is split into groups.", workingLatex: "\\text{groups: boys, girls}", explanation: "The population is divided into subgroups (strata) by gender. Recognising these strata is the first clue." },
        { stepNumber: 2, description: "Note that the groups are sampled in proportion.", workingLatex: "600:400 \\to \\text{same ratio in sample}", explanation: "The sample keeps the same proportion of boys to girls as the school, with random selection inside each group. Proportional sampling within strata is the defining feature." },
        { stepNumber: 3, description: "Match the features to the named method.", workingLatex: "\\text{proportional strata} \\Rightarrow \\text{stratified}", explanation: "Sampling each subgroup in proportion to its size is stratified sampling. A slip is to call it quota sampling, which need not be random within groups." }
      ],
      finalAnswer: "This is stratified sampling.",
    },
  },
  {
    id: "y2ld-021",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 21",
    difficulty: "Foundation",
    questionText: "A student surveys the first \\(15\\) people she meets at the school gate. (a) Name this sampling method. (b) State one disadvantage of this method.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sampling", "opportunity sampling", "advantage disadvantage"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the key feature of the selection.", workingLatex: "\\text{first } 15 \\text{ people available}", explanation: "She takes whoever happens to be there, with no list and no random mechanism. Choosing whoever is convenient is the clue." },
        { stepNumber: 2, description: "Name the method (part a).", workingLatex: "\\Rightarrow \\text{opportunity (convenience)}", explanation: "This is opportunity sampling, also called convenience sampling. A slip is to call it random sampling, but no randomness is used." },
        { stepNumber: 3, description: "Think about who might be missed.", workingLatex: "\\text{only people at the gate then}", explanation: "Only people present at that gate at that time can be chosen, so whole sections of the population have no chance of selection." },
        { stepNumber: 4, description: "State a disadvantage (part b).", workingLatex: "\\Rightarrow \\text{likely biased / unrepresentative}", explanation: "Because the choice is not random, the sample may be biased and not represent the whole population." }
      ],
      finalAnswer: "(a) Opportunity (convenience) sampling. (b) It is likely to be biased / unrepresentative of the population.",
    },
  },
  {
    id: "y2ld-022",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 22",
    difficulty: "Foundation",
    questionText: "The box plot shows the ages (in years) of members of a club. It has minimum \\(14\\), lower quartile \\(22\\), median \\(29\\), upper quartile \\(43\\) and maximum \\(60\\). (a) Write down the median age. (b) Work out the interquartile range.",
    questionMafs: `<Mafs viewBox={{ x: [9.4, 64.6], y: [0, 1] }} height={150}>
  <Line.Segment point1={[14, 0.55]} point2={[22, 0.55]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[43, 0.55]} point2={[60, 0.55]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[14, 0.43]} point2={[14, 0.67]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[60, 0.43]} point2={[60, 0.67]} color="var(--mafs-fg-accent)" />
  <Polygon points={[[22,0.35],[43,0.35],[43,0.75],[22,0.75]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} />
  <Line.Segment point1={[29, 0.35]} point2={[29, 0.75]} color="var(--mafs-fg-orange)" />
  <Text x={14} y={0.24} attach="s">14</Text>
  <Text x={22} y={0.12} attach="s">22</Text>
  <Text x={29} y={0.24} attach="s">29</Text>
  <Text x={43} y={0.12} attach="s">43</Text>
  <Text x={60} y={0.24} attach="s">60</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["box plot", "median", "IQR", "reading diagrams"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Read the median for part (a).", workingLatex: "\\text{median} = 29", explanation: "The line dividing the box gives the median, so the median age is 29. Do not read a box edge, which would be a quartile." },
        { stepNumber: 2, description: "Write down the IQR formula for part (b).", workingLatex: "\\text{IQR} = Q_3 - Q_1", explanation: "The interquartile range is the upper quartile minus the lower quartile, using the box edges (not the whisker tips)." },
        { stepNumber: 3, description: "Read the upper quartile.", workingLatex: "Q_3 = 43", explanation: "The right edge of the box marks the upper quartile, not the maximum at the whisker tip." },
        { stepNumber: 4, description: "Read the lower quartile.", workingLatex: "Q_1 = 22", explanation: "The left edge of the box marks the lower quartile, not the minimum at the whisker tip." },
        { stepNumber: 5, description: "Substitute into the formula.", workingLatex: "\\text{IQR} = 43 - 22", explanation: "Place the two quartiles into the IQR formula before subtracting." },
        { stepNumber: 6, description: "Evaluate the subtraction.", workingLatex: "43 - 22 = 21", explanation: "This gives the IQR as 21 years. Remember to keep the unit, years." }
      ],
      finalAnswer: "(a) The median age is \\(29\\) years. (b) The IQR is \\(21\\) years.",
    },
  },
  {
    id: "y2ld-023",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 23",
    difficulty: "Standard",
    questionText: "The table shows the times, \\( t \\) minutes, taken by 40 students to complete a puzzle. \\( 0\\le t<10 \\): frequency 6; \\( 10\\le t<20 \\): frequency 14; \\( 20\\le t<30 \\): frequency 12; \\( 30\\le t<40 \\): frequency 8. Estimate the mean time taken, giving your answer to 1 decimal place.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["grouped data", "estimated mean", "midpoints"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the estimated mean formula.", workingLatex: "\\bar{x}=\\frac{\\sum fx}{\\sum f}", explanation: "For grouped data we estimate the mean using the class midpoints \\( x \\); we cannot use individual values because they are unknown." },
        { stepNumber: 2, description: "Find the midpoint \\( x \\) of each class.", workingLatex: "x=\\frac{0+10}{2}=5,\\ \\frac{10+20}{2}=15,\\ \\frac{20+30}{2}=25,\\ \\frac{30+40}{2}=35", explanation: "Each midpoint is the average of the lower and upper boundaries; a common slip is to use a boundary (e.g. 0 or 10) instead of the midpoint." },
        { stepNumber: 3, description: "Build the \\( fx \\) column.", workingLatex: "6\\times5=30,\\quad 14\\times15=210,\\quad 12\\times25=300,\\quad 8\\times35=280", explanation: "Multiply each frequency by its midpoint to weight each class by how many values it contains." },
        { stepNumber: 4, description: "Sum the \\( fx \\) values.", workingLatex: "\\sum fx=30+210+300+280=820", explanation: "This total estimates the sum of all 40 times." },
        { stepNumber: 5, description: "Sum the frequencies.", workingLatex: "\\sum f=6+14+12+8=40", explanation: "This should match the stated number of students, 40 — a useful check." },
        { stepNumber: 6, description: "Divide and round to 1 d.p.", workingLatex: "\\bar{x}=\\frac{820}{40}=20.5", explanation: "Divide total \\( fx \\) by total frequency; the result is already exact to 1 decimal place." }
      ],
      finalAnswer: "Estimated mean \\( \\approx 20.5 \\) minutes.",
      canonicalAnswer: "20.5",
    },
  },
  {
    id: "y2ld-024",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 24",
    difficulty: "Standard",
    questionText: "The masses, \\( m \\) grams, of 50 apples are summarised: \\( 100\\le m<120 \\): frequency 8; \\( 120\\le m<140 \\): frequency 18; \\( 140\\le m<160 \\): frequency 16; \\( 160\\le m<180 \\): frequency 8. Estimate the mean and the standard deviation of the masses, to 1 decimal place.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["grouped data", "estimated mean", "standard deviation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the two formulas you will use.", workingLatex: "\\bar{x}=\\frac{\\sum fx}{\\sum f},\\qquad \\sigma=\\sqrt{\\frac{\\sum fx^2}{\\sum f}-\\bar{x}^2}", explanation: "Grouped data is summarised by midpoints, so both mean and spread are estimates; you need \\( \\sum fx \\) for the mean and additionally \\( \\sum fx^2 \\) for the standard deviation." },
        { stepNumber: 2, description: "Midpoint of the 1st class \\( 100\\le m<120 \\).", workingLatex: "x_1=\\frac{100+120}{2}=\\frac{220}{2}=110", explanation: "Average the two boundaries; using a boundary (100 or 120) instead of the midpoint is a frequent error." },
        { stepNumber: 3, description: "Midpoint of the 2nd class \\( 120\\le m<140 \\).", workingLatex: "x_2=\\frac{120+140}{2}=\\frac{260}{2}=130", explanation: "Same method; the midpoints rise in steps of 20 because the classes are equally wide." },
        { stepNumber: 4, description: "Midpoint of the 3rd class \\( 140\\le m<160 \\).", workingLatex: "x_3=\\frac{140+160}{2}=\\frac{300}{2}=150", explanation: "Continue averaging boundaries for each class." },
        { stepNumber: 5, description: "Midpoint of the 4th class \\( 160\\le m<180 \\).", workingLatex: "x_4=\\frac{160+180}{2}=\\frac{340}{2}=170", explanation: "The four midpoints are 110, 130, 150, 170." },
        { stepNumber: 6, description: "\\( fx \\) for the 1st class.", workingLatex: "f_1x_1=8\\times110=880", explanation: "Frequency times midpoint estimates the total mass contributed by this class." },
        { stepNumber: 7, description: "\\( fx \\) for the 2nd class.", workingLatex: "f_2x_2=18\\times130=2340", explanation: "Multiply carefully: \\( 18\\times130=18\\times13\\times10=234\\times10 \\)." },
        { stepNumber: 8, description: "\\( fx \\) for the 3rd class.", workingLatex: "f_3x_3=16\\times150=2400", explanation: "Frequency times midpoint." },
        { stepNumber: 9, description: "\\( fx \\) for the 4th class.", workingLatex: "f_4x_4=8\\times170=1360", explanation: "Frequency times midpoint." },
        { stepNumber: 10, description: "Sum the frequencies and the \\( fx \\) column.", workingLatex: "\\sum f=8+18+16+8=50,\\qquad \\sum fx=880+2340+2400+1360=6980", explanation: "\\( \\sum f=50 \\) matches the number of apples — a useful check; \\( \\sum fx \\) estimates the total mass." },
        { stepNumber: 11, description: "Estimate the mean.", workingLatex: "\\bar{x}=\\frac{\\sum fx}{\\sum f}=\\frac{6980}{50}=139.6", explanation: "Total \\( fx \\) over total frequency; this value is exact to 1 d.p., so keep \\( 139.6 \\) for the next stage." },
        { stepNumber: 12, description: "\\( fx^2 \\) for the 1st class.", workingLatex: "f_1x_1^2=8\\times110^2=8\\times12100=96800", explanation: "Square the midpoint first, then multiply by frequency; squaring \\( fx \\) instead of \\( x \\) is the classic mistake." },
        { stepNumber: 13, description: "\\( fx^2 \\) for the 2nd class.", workingLatex: "f_2x_2^2=18\\times130^2=18\\times16900=304200", explanation: "\\( 130^2=16900 \\); then \\( 18\\times16900=304200 \\)." },
        { stepNumber: 14, description: "\\( fx^2 \\) for the 3rd class.", workingLatex: "f_3x_3^2=16\\times150^2=16\\times22500=360000", explanation: "\\( 150^2=22500 \\); then \\( 16\\times22500=360000 \\)." },
        { stepNumber: 15, description: "\\( fx^2 \\) for the 4th class.", workingLatex: "f_4x_4^2=8\\times170^2=8\\times28900=231200", explanation: "\\( 170^2=28900 \\); then \\( 8\\times28900=231200 \\)." },
        { stepNumber: 16, description: "Sum the \\( fx^2 \\) column.", workingLatex: "\\sum fx^2=96800+304200+360000+231200=992200", explanation: "This estimates the sum of the squared masses; add carefully in stages: \\( 96800+304200=401000 \\), \\( +360000=761000 \\), \\( +231200=992200 \\)." },
        { stepNumber: 17, description: "Compute the mean of the squares \\( \\frac{\\sum fx^2}{\\sum f} \\).", workingLatex: "\\frac{\\sum fx^2}{\\sum f}=\\frac{992200}{50}=19844", explanation: "Dividing by 50 is the same as multiplying by 2 then dividing by 100: \\( 992200\\times2=1984400 \\), \\( \\div100=19844 \\)." },
        { stepNumber: 18, description: "Compute the square of the mean \\( \\bar{x}^2 \\).", workingLatex: "\\bar{x}^2=139.6^2=19488.16", explanation: "Use the unrounded mean inside the square; rounding \\( \\bar{x} \\) early would corrupt the spread." },
        { stepNumber: 19, description: "Subtract to get the variance.", workingLatex: "\\frac{\\sum fx^2}{\\sum f}-\\bar{x}^2=19844-19488.16=355.84", explanation: "Mean of the squares minus the square of the mean gives \\( \\sigma^2 \\); it must be positive — a negative value signals an arithmetic slip." },
        { stepNumber: 20, description: "Take the square root and round to 1 d.p.", workingLatex: "\\sigma=\\sqrt{355.84}=18.864\\ldots\\approx18.9", explanation: "Square-rooting the variance returns to the original units (grams); \\( 18.8^2=353.44 \\) and \\( 18.9^2=357.21 \\), so 18.9 is correct to 1 d.p." }
      ],
      finalAnswer: "Estimated mean \\( \\approx 139.6 \\) g, standard deviation \\( \\approx 18.9 \\) g.",
      canonicalAnswer: "18.9",
    },
  },
  {
    id: "y2ld-025",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 25",
    difficulty: "Standard",
    questionText: "The table shows the heights, \\( h \\) cm, of 60 plants. \\( 0\\le h<10 \\): frequency 7; \\( 10\\le h<20 \\): frequency 15; \\( 20\\le h<30 \\): frequency 21; \\( 30\\le h<40 \\): frequency 12; \\( 40\\le h<50 \\): frequency 5. Use linear interpolation to estimate the median height, giving your answer to 1 decimal place.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["grouped data", "median", "linear interpolation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the median position.", workingLatex: "\\frac{n}{2}=\\frac{60}{2}=30", explanation: "For grouped continuous data we use \\( \\frac{n}{2} \\) (not \\( \\frac{n+1}{2} \\)) to locate the median." },
        { stepNumber: 2, description: "Build the cumulative frequencies.", workingLatex: "7,\\ 7{+}15{=}22,\\ 22{+}21{=}43,\\ 43{+}12{=}55,\\ 55{+}5{=}60", explanation: "Running totals let us see where the 30th value lands." },
        { stepNumber: 3, description: "Identify the median class.", workingLatex: "22<30\\le 43\\ \\Rightarrow\\ 20\\le h<30", explanation: "Cumulative frequency reaches 22 before this class and 43 after, so the 30th value lies in \\( 20\\le h<30 \\)." },
        { stepNumber: 4, description: "Read off the interpolation quantities.", workingLatex: "L=20,\\ F=22,\\ f_m=21,\\ w=10", explanation: "Lower boundary \\( L \\), cumulative frequency before the class \\( F \\), class frequency \\( f_m \\) and width \\( w \\)." },
        { stepNumber: 5, description: "Write the interpolation formula and substitute.", workingLatex: "\\text{median}=L+\\frac{\\frac{n}{2}-F}{f_m}\\times w=20+\\frac{30-22}{21}\\times10", explanation: "Substitute each symbol with its value; a common slip is using the midpoint or wrong \\( F \\)." },
        { stepNumber: 6, description: "Evaluate and round to 1 d.p.", workingLatex: "20+\\frac{8}{21}\\times10=20+3.81=23.8", explanation: "The fraction \\( \\frac{8}{21} \\) of the way through a class of width 10 adds about 3.81 cm." }
      ],
      finalAnswer: "Estimated median \\( \\approx 23.8 \\) cm.",
      canonicalAnswer: "23.8",
    },
  },
  {
    id: "y2ld-026",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 26",
    difficulty: "Standard",
    questionText: "The waiting times, \\( t \\) minutes, of 80 callers are recorded. \\( 0\\le t<5 \\): frequency 12; \\( 5\\le t<10 \\): frequency 20; \\( 10\\le t<15 \\): frequency 28; \\( 15\\le t<20 \\): frequency 14; \\( 20\\le t<25 \\): frequency 6. Use linear interpolation to estimate the interquartile range, to 1 decimal place.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["grouped data", "quartiles", "interquartile range", "linear interpolation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the plan for the IQR.", workingLatex: "\\text{IQR}=Q_3-Q_1", explanation: "You must locate both quartiles by interpolation first, then subtract; for grouped data use positions \\( \\frac{n}{4} \\) and \\( \\frac{3n}{4} \\)." },
        { stepNumber: 2, description: "Build the cumulative frequencies, class by class.", workingLatex: "12,\\ 12{+}20{=}32,\\ 32{+}28{=}60,\\ 60{+}14{=}74,\\ 74{+}6{=}80", explanation: "Running totals are used to locate both quartiles; the final total 80 confirms \\( n=80 \\)." },
        { stepNumber: 3, description: "Find the lower-quartile position.", workingLatex: "\\frac{n}{4}=\\frac{80}{4}=20", explanation: "We want the value at the 20th position; do not use \\( \\frac{n+1}{4} \\) for grouped continuous data." },
        { stepNumber: 4, description: "Locate the \\( Q_1 \\) class.", workingLatex: "12<20\\le32\\ \\Rightarrow\\ 5\\le t<10", explanation: "Cumulative frequency is 12 before this class and 32 after, so the 20th value lies in \\( 5\\le t<10 \\)." },
        { stepNumber: 5, description: "Read off the \\( Q_1 \\) interpolation quantities.", workingLatex: "L=5,\\ F=12,\\ f=20,\\ w=10-5=5", explanation: "Lower boundary \\( L \\), cumulative frequency before the class \\( F \\), class frequency \\( f \\), and width \\( w \\)." },
        { stepNumber: 6, description: "Substitute into the interpolation formula for \\( Q_1 \\).", workingLatex: "Q_1=L+\\frac{\\frac{n}{4}-F}{f}\\times w=5+\\frac{20-12}{20}\\times5", explanation: "Replace each symbol with its value; the numerator \\( 20-12=8 \\) is how far into the class the 20th value lies." },
        { stepNumber: 7, description: "Evaluate \\( Q_1 \\).", workingLatex: "Q_1=5+\\frac{8}{20}\\times5=5+0.4\\times5=5+2=7", explanation: "The 20th value is \\( \\tfrac{8}{20}=0.4 \\) of the way through a width-5 class, adding 2 minutes." },
        { stepNumber: 8, description: "Find the upper-quartile position.", workingLatex: "\\frac{3n}{4}=\\frac{3\\times80}{4}=\\frac{240}{4}=60", explanation: "The upper quartile sits at the 60th position; a common slip is forgetting the factor of 3." },
        { stepNumber: 9, description: "Locate the \\( Q_3 \\) class.", workingLatex: "32<60\\le60\\ \\Rightarrow\\ 10\\le t<15", explanation: "Cumulative frequency reaches exactly 60 at the end of \\( 10\\le t<15 \\), so the 60th value lies in this class (at its top)." },
        { stepNumber: 10, description: "Read off the \\( Q_3 \\) interpolation quantities.", workingLatex: "L=10,\\ F=32,\\ f=28,\\ w=15-10=5", explanation: "Use the cumulative frequency before this class, \\( F=32 \\), not the value after it." },
        { stepNumber: 11, description: "Substitute into the interpolation formula for \\( Q_3 \\).", workingLatex: "Q_3=L+\\frac{\\frac{3n}{4}-F}{f}\\times w=10+\\frac{60-32}{28}\\times5", explanation: "Same structure as \\( Q_1 \\) but with the \\( \\frac{3n}{4} \\) position; numerator \\( 60-32=28 \\)." },
        { stepNumber: 12, description: "Evaluate \\( Q_3 \\).", workingLatex: "Q_3=10+\\frac{28}{28}\\times5=10+1\\times5=10+5=15", explanation: "The numerator equals the class frequency, so the fraction is 1 and \\( Q_3 \\) sits at the top boundary of the class." },
        { stepNumber: 13, description: "Compute the interquartile range.", workingLatex: "\\text{IQR}=Q_3-Q_1=15-7=8.0", explanation: "Subtract the lower quartile from the upper quartile; the result to 1 d.p. is 8.0 minutes." }
      ],
      finalAnswer: "\\( Q_1\\approx7 \\), \\( Q_3\\approx15 \\), so IQR \\( \\approx 8.0 \\) minutes.",
      canonicalAnswer: "8",
    },
  },
  {
    id: "y2ld-027",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 27",
    difficulty: "Standard",
    questionText: "A histogram is drawn for the lengths, \\( x \\) cm, of 100 leaves. The classes and frequencies are: \\( 0\\le x<5 \\): frequency 10; \\( 5\\le x<15 \\): frequency 40; \\( 15\\le x<20 \\): frequency 30; \\( 20\\le x<35 \\): frequency 20. Calculate the frequency density for each class, stating which bar is tallest.",
    questionMafs: `<Mafs viewBox={{ x: [-1.4, 36.4], y: [-0.72, 7.08] }} height={240}>
  <Coordinates.Cartesian xAxis={{ lines: 5 }} yAxis={{ lines: 1 }} />
  <Polygon points={[[0,0],[0,2],[5,2],[5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[5,0],[5,4],[15,4],[15,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[15,0],[15,6],[20,6],[20,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[20,0],[20,1.333],[35,1.333],[35,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
</Mafs>`,
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["histogram", "frequency density", "missing bar"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the frequency density formula.", workingLatex: "\\text{frequency density}=\\frac{\\text{frequency}}{\\text{class width}}", explanation: "On a histogram the bar heights are frequency densities, not the raw frequencies." },
        { stepNumber: 2, description: "Find each class width.", workingLatex: "5-0=5,\\ 15-5=10,\\ 20-15=5,\\ 35-20=15", explanation: "Upper boundary minus lower boundary; note the widths are unequal." },
        { stepNumber: 3, description: "Compute the first two frequency densities.", workingLatex: "\\frac{10}{5}=2,\\qquad \\frac{40}{10}=4", explanation: "Divide each frequency by its own width." },
        { stepNumber: 4, description: "Compute the last two frequency densities.", workingLatex: "\\frac{30}{5}=6,\\qquad \\frac{20}{15}=1.33", explanation: "The widest class \\( 20\\le x<35 \\) gives the smallest density despite a sizeable frequency." },
        { stepNumber: 5, description: "Compare the densities to find the tallest bar.", workingLatex: "2,\\ 4,\\ 6,\\ 1.33\\ \\Rightarrow\\ \\max=6", explanation: "The greatest density corresponds to the tallest bar — here the \\( 15\\le x<20 \\) class." }
      ],
      finalAnswer: "Densities: 2, 4, 6, 1.33; the \\( 15\\le x<20 \\) bar is tallest.",
      canonicalAnswer: "6",
    },
  },
  {
    id: "y2ld-028",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 28",
    difficulty: "Standard",
    questionText: "In a histogram showing the speeds, \\( v \\) mph, of vehicles, the bar for the class \\( 30\\le v<40 \\) has frequency density 2.4 and represents a frequency of 24. On the same histogram the bar for \\( 40\\le v<55 \\) has frequency density 3.2. Find the frequency represented by the \\( 40\\le v<55 \\) class.",
    questionMafs: `<Mafs viewBox={{ x: [29, 56], y: [-0.384, 3.776] }} height={240}>
  <Coordinates.Cartesian xAxis={{ lines: 5 }} yAxis={{ lines: 0.5 }} />
  <Polygon points={[[30,0],[30,2.4],[40,2.4],[40,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[40,0],[40,3.2],[55,3.2],[55,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["histogram", "frequency density", "frequency from bar"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the frequency density relationship.", workingLatex: "\\text{frequency density}=\\frac{\\text{frequency}}{\\text{class width}}", explanation: "We will use the known bar to confirm the scale, then invert the relationship for the unknown bar." },
        { stepNumber: 2, description: "Check the scale using \\( 30\\le v<40 \\).", workingLatex: "\\frac{24}{40-30}=\\frac{24}{10}=2.4\\ \\checkmark", explanation: "Width 10 and frequency 24 give density 2.4, matching the histogram, so frequency = density × width holds." },
        { stepNumber: 3, description: "Find the width of the target class.", workingLatex: "55-40=15", explanation: "Class width for \\( 40\\le v<55 \\); this class is wider than the first." },
        { stepNumber: 4, description: "Rearrange the formula for frequency.", workingLatex: "\\text{frequency}=\\text{frequency density}\\times\\text{width}=3.2\\times15", explanation: "Multiply density by width; a common slip is to forget that this class has width 15, not 10." },
        { stepNumber: 5, description: "Evaluate.", workingLatex: "3.2\\times15=48", explanation: "The class represents 48 vehicles." }
      ],
      finalAnswer: "The \\( 40\\le v<55 \\) class represents 48 vehicles.",
      canonicalAnswer: "48",
    },
  },
  {
    id: "y2ld-029",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 29",
    difficulty: "Standard",
    questionText: "The number of emails, \\( n \\), received per day over 30 days is grouped: \\( 0\\le n<10 \\): frequency 5; \\( 10\\le n<20 \\): frequency 9; \\( 20\\le n<30 \\): frequency 10; \\( 30\\le n<40 \\): frequency 6. Estimate the mean and the variance, giving the variance to 1 decimal place.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["grouped data", "estimated mean", "variance"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the midpoint \\( x \\) of each class.", workingLatex: "x=5,\\ 15,\\ 25,\\ 35", explanation: "Midpoints represent each class; use them for both mean and variance." },
        { stepNumber: 2, description: "Build the \\( fx \\) column and sum.", workingLatex: "5(5)=25,\\ 9(15)=135,\\ 10(25)=250,\\ 6(35)=210;\\ \\sum fx=620", explanation: "Frequency times midpoint, then total; \\( \\sum f=30 \\) matches the 30 days." },
        { stepNumber: 3, description: "Estimate the mean.", workingLatex: "\\bar{x}=\\frac{\\sum fx}{\\sum f}=\\frac{620}{30}=20.\\overline{6}\\approx20.667", explanation: "Keep extra decimals here so the variance is not distorted by early rounding." },
        { stepNumber: 4, description: "Build the \\( fx^2 \\) column and sum.", workingLatex: "5(25)=125,\\ 9(225)=2025,\\ 10(625)=6250,\\ 6(1225)=7350;\\ \\sum fx^2=15750", explanation: "Square each midpoint first, then multiply by frequency; do not square \\( fx \\)." },
        { stepNumber: 5, description: "Apply the variance formula and round.", workingLatex: "\\sigma^2=\\frac{\\sum fx^2}{\\sum f}-\\bar{x}^2=\\frac{15750}{30}-20.667^2=525-427.1\\approx97.9", explanation: "Mean of the squares minus the square of the mean; rounding the answer to 1 d.p. gives 97.9." }
      ],
      finalAnswer: "Estimated mean \\( \\approx 20.7 \\), variance \\( \\approx 97.9 \\).",
      canonicalAnswer: "97.9",
    },
  },
  {
    id: "y2ld-030",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 30",
    difficulty: "Standard",
    questionText: "A histogram represents the masses, \\( m \\) kg, of 120 parcels. The frequency densities are: \\( 0\\le m<2 \\): density 9; \\( 2\\le m<6 \\): density 12; \\( 6\\le m<8 \\): density 15; \\( 8\\le m<14 \\): density unknown. Given the total frequency is 120, find the missing frequency and its frequency density.",
    questionMafs: `<Mafs viewBox={{ x: [-0.56, 14.56], y: [-1.8, 17.7] }} height={240}>
  <Coordinates.Cartesian xAxis={{ lines: 2 }} yAxis={{ lines: 5 }} />
  <Polygon points={[[0,0],[0,9],[2,9],[2,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[2,0],[2,12],[6,12],[6,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[6,0],[6,15],[8,15],[8,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[8,0],[8,2],[14,2],[14,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["histogram", "frequency density", "missing frequency", "total"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State how to recover a frequency from a density.", workingLatex: "f=\\text{density}\\times\\text{width}", explanation: "Each bar's frequency is its area, i.e. its height (density) times its class width; this is the key idea on a histogram with unequal widths." },
        { stepNumber: 2, description: "Width of the 1st known class \\( 0\\le m<2 \\).", workingLatex: "2-0=2", explanation: "Upper minus lower boundary." },
        { stepNumber: 3, description: "Width of the 2nd known class \\( 2\\le m<6 \\).", workingLatex: "6-2=4", explanation: "This class is twice as wide as the first, so its frequency is boosted accordingly." },
        { stepNumber: 4, description: "Width of the 3rd known class \\( 6\\le m<8 \\).", workingLatex: "8-6=2", explanation: "Back to width 2 for this class." },
        { stepNumber: 5, description: "Frequency of the 1st class.", workingLatex: "f_1=9\\times2=18", explanation: "Density times width; height 9 over a width-2 class gives 18 parcels." },
        { stepNumber: 6, description: "Frequency of the 2nd class.", workingLatex: "f_2=12\\times4=48", explanation: "Density 12 over width 4 gives 48 — the wide class dominates the total." },
        { stepNumber: 7, description: "Frequency of the 3rd class.", workingLatex: "f_3=15\\times2=30", explanation: "Density 15 over width 2 gives 30 parcels." },
        { stepNumber: 8, description: "Add the three known frequencies.", workingLatex: "18+48+30=96", explanation: "This is the number of parcels accounted for before the unknown class." },
        { stepNumber: 9, description: "Find the missing frequency from the total.", workingLatex: "f_4=120-96=24", explanation: "The four frequencies must sum to the stated total of 120, so the last one is the remainder." },
        { stepNumber: 10, description: "Find the width of the final class \\( 8\\le m<14 \\).", workingLatex: "14-8=6", explanation: "This is the widest class; a large width spreads the frequency into a short bar." },
        { stepNumber: 11, description: "Compute its frequency density.", workingLatex: "\\text{density}=\\frac{f_4}{\\text{width}}=\\frac{24}{6}=4", explanation: "Frequency divided by class width gives the missing bar height; despite 24 parcels, the bar is only height 4 because the class is so wide." }
      ],
      finalAnswer: "Missing frequency 24, frequency density 4.",
      canonicalAnswer: "24",
    },
  },
  {
    id: "y2ld-031",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 31",
    difficulty: "Standard",
    questionText: "The ages, \\( a \\) years, of 45 members of a club are grouped: \\( 10\\le a<20 \\): frequency 6; \\( 20\\le a<30 \\): frequency 11; \\( 30\\le a<40 \\): frequency 13; \\( 40\\le a<50 \\): frequency 9; \\( 50\\le a<60 \\): frequency 6. Use linear interpolation to estimate the median age, to 1 decimal place.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["grouped data", "median", "linear interpolation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the median position.", workingLatex: "\\frac{n}{2}=\\frac{45}{2}=22.5", explanation: "Use \\( \\frac{n}{2} \\) for grouped continuous data, even when it is not a whole number." },
        { stepNumber: 2, description: "Build the cumulative frequencies.", workingLatex: "6,\\ 6{+}11{=}17,\\ 17{+}13{=}30,\\ 30{+}9{=}39,\\ 39{+}6{=}45", explanation: "Running totals to locate the median class." },
        { stepNumber: 3, description: "Identify the median class.", workingLatex: "17<22.5\\le30\\ \\Rightarrow\\ 30\\le a<40", explanation: "The 22.5th value lies where the cumulative frequency rises from 17 to 30." },
        { stepNumber: 4, description: "Read off the interpolation quantities.", workingLatex: "L=30,\\ F=17,\\ f_m=13,\\ w=10", explanation: "Lower boundary, prior cumulative frequency, class frequency and width." },
        { stepNumber: 5, description: "Write the formula and substitute.", workingLatex: "\\text{median}=L+\\frac{\\frac{n}{2}-F}{f_m}\\times w=30+\\frac{22.5-17}{13}\\times10", explanation: "Substitute each symbol; a common slip is to use \\( \\frac{n+1}{2} \\) instead of \\( \\frac{n}{2} \\)." },
        { stepNumber: 6, description: "Evaluate and round to 1 d.p.", workingLatex: "30+\\frac{5.5}{13}\\times10=30+4.23=34.2", explanation: "The median sits about 4.23 years into the \\( 30\\le a<40 \\) class." }
      ],
      finalAnswer: "Estimated median \\( \\approx 34.2 \\) years.",
      canonicalAnswer: "34.2",
    },
  },
  {
    id: "y2ld-032",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 32",
    difficulty: "Standard",
    questionText: "The distances, \\( d \\) km, travelled by 40 commuters are grouped with unequal widths: \\( 0\\le d<5 \\): frequency 8; \\( 5\\le d<10 \\): frequency 12; \\( 10\\le d<20 \\): frequency 14; \\( 20\\le d<40 \\): frequency 6. Estimate the mean and standard deviation, each to 1 decimal place.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["grouped data", "estimated mean", "standard deviation", "unequal widths"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the two formulas you will use.", workingLatex: "\\bar{x}=\\frac{\\sum fx}{\\sum f},\\qquad \\sigma=\\sqrt{\\frac{\\sum fx^2}{\\sum f}-\\bar{x}^2}", explanation: "Even with unequal class widths the midpoint method is unchanged; you only need midpoints, \\( \\sum fx \\) and \\( \\sum fx^2 \\)." },
        { stepNumber: 2, description: "Midpoint of the 1st class \\( 0\\le d<5 \\).", workingLatex: "x_1=\\frac{0+5}{2}=2.5", explanation: "Average the boundaries; with unequal widths you must not assume the midpoints are evenly spaced." },
        { stepNumber: 3, description: "Midpoint of the 2nd class \\( 5\\le d<10 \\).", workingLatex: "x_2=\\frac{5+10}{2}=7.5", explanation: "Average of 5 and 10." },
        { stepNumber: 4, description: "Midpoint of the 3rd class \\( 10\\le d<20 \\).", workingLatex: "x_3=\\frac{10+20}{2}=15", explanation: "This class has width 10, so its midpoint jumps by 7.5 from the previous one." },
        { stepNumber: 5, description: "Midpoint of the 4th class \\( 20\\le d<40 \\).", workingLatex: "x_4=\\frac{20+40}{2}=30", explanation: "The widest class (width 20) has midpoint 30; the midpoints are 2.5, 7.5, 15, 30." },
        { stepNumber: 6, description: "\\( fx \\) for the 1st class.", workingLatex: "f_1x_1=8\\times2.5=20", explanation: "Frequency times midpoint." },
        { stepNumber: 7, description: "\\( fx \\) for the 2nd class.", workingLatex: "f_2x_2=12\\times7.5=90", explanation: "Frequency times midpoint." },
        { stepNumber: 8, description: "\\( fx \\) for the 3rd class.", workingLatex: "f_3x_3=14\\times15=210", explanation: "Frequency times midpoint." },
        { stepNumber: 9, description: "\\( fx \\) for the 4th class.", workingLatex: "f_4x_4=6\\times30=180", explanation: "Frequency times midpoint." },
        { stepNumber: 10, description: "Sum the frequencies and the \\( fx \\) column.", workingLatex: "\\sum f=8+12+14+6=40,\\qquad \\sum fx=20+90+210+180=500", explanation: "\\( \\sum f=40 \\) matches the number of commuters; \\( \\sum fx \\) estimates the total distance." },
        { stepNumber: 11, description: "Estimate the mean.", workingLatex: "\\bar{x}=\\frac{\\sum fx}{\\sum f}=\\frac{500}{40}=12.5", explanation: "Total \\( fx \\) over total frequency; this is exact, so carry \\( 12.5 \\) into the spread calculation." },
        { stepNumber: 12, description: "\\( fx^2 \\) for the 1st class.", workingLatex: "f_1x_1^2=8\\times2.5^2=8\\times6.25=50", explanation: "Square the midpoint first: \\( 2.5^2=6.25 \\); squaring \\( fx \\) instead of \\( x \\) is the classic error." },
        { stepNumber: 13, description: "\\( fx^2 \\) for the 2nd class.", workingLatex: "f_2x_2^2=12\\times7.5^2=12\\times56.25=675", explanation: "\\( 7.5^2=56.25 \\); then \\( 12\\times56.25=675 \\)." },
        { stepNumber: 14, description: "\\( fx^2 \\) for the 3rd class.", workingLatex: "f_3x_3^2=14\\times15^2=14\\times225=3150", explanation: "\\( 15^2=225 \\); then \\( 14\\times225=3150 \\)." },
        { stepNumber: 15, description: "\\( fx^2 \\) for the 4th class.", workingLatex: "f_4x_4^2=6\\times30^2=6\\times900=5400", explanation: "\\( 30^2=900 \\); then \\( 6\\times900=5400 \\)." },
        { stepNumber: 16, description: "Sum the \\( fx^2 \\) column.", workingLatex: "\\sum fx^2=50+675+3150+5400=9275", explanation: "Add in stages: \\( 50+675=725 \\), \\( +3150=3875 \\), \\( +5400=9275 \\)." },
        { stepNumber: 17, description: "Compute the mean of the squares \\( \\frac{\\sum fx^2}{\\sum f} \\).", workingLatex: "\\frac{\\sum fx^2}{\\sum f}=\\frac{9275}{40}=231.875", explanation: "Divide the squared-data total by the frequency total." },
        { stepNumber: 18, description: "Compute the square of the mean \\( \\bar{x}^2 \\).", workingLatex: "\\bar{x}^2=12.5^2=156.25", explanation: "Use the exact mean inside the square." },
        { stepNumber: 19, description: "Subtract to get the variance.", workingLatex: "\\frac{\\sum fx^2}{\\sum f}-\\bar{x}^2=231.875-156.25=75.625", explanation: "Mean of the squares minus the square of the mean gives the variance \\( \\sigma^2 \\); it should be positive." },
        { stepNumber: 20, description: "Take the square root and round to 1 d.p.", workingLatex: "\\sigma=\\sqrt{75.625}=8.696\\ldots\\approx8.7", explanation: "Rooting the variance returns to km; \\( 8.7^2=75.69 \\), confirming 8.7 to 1 d.p." }
      ],
      finalAnswer: "Estimated mean \\( \\approx 12.5 \\) km, standard deviation \\( \\approx 8.7 \\) km.",
      canonicalAnswer: "8.7",
    },
  },
  {
    id: "y2ld-033",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 33",
    difficulty: "Standard",
    questionText: "On a histogram, a bar for the class \\( 0\\le x<4 \\) has height (frequency density) 5 and is known to represent 20 data values. Another bar covers \\( 4\\le x<14 \\) with height 3. Using the consistent scale, find the frequency for the class \\( 4\\le x<14 \\) and the total number of values in these two classes.",
    questionMafs: `<Mafs viewBox={{ x: [-0.56, 14.56], y: [-0.6, 5.9] }} height={240}>
  <Coordinates.Cartesian xAxis={{ lines: 2 }} yAxis={{ lines: 1 }} />
  <Polygon points={[[0,0],[0,5],[4,5],[4,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[4,0],[4,3],[14,3],[14,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
</Mafs>`,
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["histogram", "frequency density", "scale", "frequency from area"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the area = frequency principle.", workingLatex: "\\text{frequency}=\\text{frequency density}\\times\\text{width}", explanation: "On a histogram the area of a bar (height times width) represents its frequency." },
        { stepNumber: 2, description: "Confirm the scale with the known bar.", workingLatex: "5\\times(4-0)=5\\times4=20\\ \\checkmark", explanation: "Density 5 times width 4 gives 20, matching the stated frequency, so 1 unit of area = 1 value." },
        { stepNumber: 3, description: "Find the width of the second class.", workingLatex: "14-4=10", explanation: "Class width for \\( 4\\le x<14 \\); note it is wider than the first class." },
        { stepNumber: 4, description: "Find the frequency of the second class.", workingLatex: "3\\times10=30", explanation: "Frequency density times class width." },
        { stepNumber: 5, description: "Add the two frequencies for the total.", workingLatex: "20+30=50", explanation: "Total number of values across both classes." }
      ],
      finalAnswer: "Frequency of \\( 4\\le x<14 \\) is 30; total 50 values.",
      canonicalAnswer: "30",
    },
  },
  {
    id: "y2ld-034",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 34",
    difficulty: "Standard",
    questionText: "The marks, \\( x \\), of 200 candidates in an exam are grouped: \\( 0\\le x<20 \\): frequency 24; \\( 20\\le x<40 \\): frequency 50; \\( 40\\le x<60 \\): frequency 66; \\( 60\\le x<80 \\): frequency 42; \\( 80\\le x<100 \\): frequency 18. Use linear interpolation to estimate the 90th percentile, to 1 decimal place.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["grouped data", "percentile", "linear interpolation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the percentile position formula.", workingLatex: "P_{90}\\ \\text{position}=\\frac{90}{100}\\times n", explanation: "A percentile is found exactly like the median but with a different fraction of \\( n \\); for grouped data use \\( \\frac{90}{100}n \\), not \\( \\frac{90}{100}(n+1) \\)." },
        { stepNumber: 2, description: "Evaluate the position.", workingLatex: "\\frac{90}{100}\\times200=0.9\\times200=180", explanation: "We are looking for the value at the 180th position." },
        { stepNumber: 3, description: "Build the cumulative frequencies, class by class.", workingLatex: "24,\\ 24{+}50{=}74,\\ 74{+}66{=}140,\\ 140{+}42{=}182,\\ 182{+}18{=}200", explanation: "Running totals locate the 180th value; the final total 200 confirms \\( n=200 \\)." },
        { stepNumber: 4, description: "Identify the class containing the 180th value.", workingLatex: "140<180\\le182\\ \\Rightarrow\\ 60\\le x<80", explanation: "Cumulative frequency is 140 before this class and 182 after, so the 180th value lies in \\( 60\\le x<80 \\)." },
        { stepNumber: 5, description: "Read off the interpolation quantities.", workingLatex: "L=60,\\ F=140,\\ f=42,\\ w=80-60=20", explanation: "Lower boundary \\( L \\), cumulative frequency before the class \\( F \\), class frequency \\( f \\) and width \\( w \\)." },
        { stepNumber: 6, description: "Write the formula and substitute.", workingLatex: "P_{90}=L+\\frac{0.9n-F}{f}\\times w=60+\\frac{180-140}{42}\\times20", explanation: "Same interpolation structure as the median but with position \\( 0.9n=180 \\); numerator \\( 180-140=40 \\)." },
        { stepNumber: 7, description: "Simplify the fraction.", workingLatex: "\\frac{180-140}{42}=\\frac{40}{42}=0.95238\\ldots", explanation: "Keep the unrounded fraction; rounding it now would lose accuracy in the final mark." },
        { stepNumber: 8, description: "Multiply by the class width.", workingLatex: "\\frac{40}{42}\\times20=19.0476\\ldots", explanation: "This is how far, in marks, the 180th value lies into the width-20 class." },
        { stepNumber: 9, description: "Add to the lower boundary and round to 1 d.p.", workingLatex: "P_{90}=60+19.0476\\ldots=79.0476\\ldots\\approx79.0", explanation: "Adding to \\( L=60 \\) gives the percentile; to 1 d.p. this is 79.0 (the trailing zero should be written)." }
      ],
      finalAnswer: "Estimated 90th percentile \\( \\approx 79.0 \\) marks.",
      canonicalAnswer: "79.0",
    },
  },
  {
    id: "y2ld-035",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 35",
    difficulty: "Standard",
    questionText: "A histogram for the volumes, \\( V \\) ml, of 150 drinks has these classes and frequency densities: \\( 200\\le V<220 \\): density 1.5; \\( 220\\le V<240 \\): density 2.5; \\( 240\\le V<260 \\): density unknown; \\( 260\\le V<300 \\): density 0.75. Find the missing frequency for \\( 240\\le V<260 \\) and its frequency density.",
    questionMafs: `<Mafs viewBox={{ x: [196, 304], y: [-0.3, 2.95] }} height={240}>
  <Coordinates.Cartesian xAxis={{ lines: 20 }} yAxis={{ lines: 0.5 }} />
  <Polygon points={[[200,0],[200,1.5],[220,1.5],[220,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[220,0],[220,2.5],[240,2.5],[240,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[240,0],[240,2],[260,2],[260,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[260,0],[260,0.75],[300,0.75],[300,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
</Mafs>`,
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["histogram", "frequency density", "missing frequency", "proportion"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State how to convert a density to a frequency.", workingLatex: "f=\\text{density}\\times\\text{width}", explanation: "Each frequency equals the bar height (density) times its class width." },
        { stepNumber: 2, description: "Find the widths of the known classes.", workingLatex: "220-200=20,\\ 240-220=20,\\ 300-260=40", explanation: "Upper minus lower boundary; the final class is twice as wide." },
        { stepNumber: 3, description: "Compute the three known frequencies.", workingLatex: "1.5\\times20=30,\\ 2.5\\times20=50,\\ 0.75\\times40=30", explanation: "Density times width for each known bar." },
        { stepNumber: 4, description: "Find the missing frequency from the total.", workingLatex: "150-(30+50+30)=150-110=40", explanation: "The frequencies must total the stated 150 drinks." },
        { stepNumber: 5, description: "Find the width of the missing class.", workingLatex: "260-240=20", explanation: "Class width for \\( 240\\le V<260 \\)." },
        { stepNumber: 6, description: "Compute its frequency density.", workingLatex: "\\text{density}=\\frac{f}{\\text{width}}=\\frac{40}{20}=2.0", explanation: "Frequency divided by class width gives the missing bar height." }
      ],
      finalAnswer: "Missing frequency 40, frequency density 2.0.",
      canonicalAnswer: "40",
    },
  },
  {
    id: "y2ld-036",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 36",
    difficulty: "Standard",
    questionText: "The times, \\( t \\) seconds, for 50 athletes to run a sprint are grouped: \\( 12\\le t<13 \\): frequency 4; \\( 13\\le t<14 \\): frequency 13; \\( 14\\le t<15 \\): frequency 18; \\( 15\\le t<16 \\): frequency 10; \\( 16\\le t<17 \\): frequency 5. Estimate the mean and the median (median by linear interpolation, both to 2 dp), and comment on the skew.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["grouped data", "estimated mean", "median", "comparison", "skew"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the midpoint of each class.", workingLatex: "x=12.5,\\ 13.5,\\ 14.5,\\ 15.5,\\ 16.5", explanation: "Each midpoint is the average of its boundaries; with width-1 classes the midpoints sit at the half-second marks." },
        { stepNumber: 2, description: "\\( fx \\) for the 1st class.", workingLatex: "f_1x_1=4\\times12.5=50", explanation: "Frequency times midpoint." },
        { stepNumber: 3, description: "\\( fx \\) for the 2nd class.", workingLatex: "f_2x_2=13\\times13.5=175.5", explanation: "\\( 13\\times13.5=13\\times13+13\\times0.5=169+6.5=175.5 \\)." },
        { stepNumber: 4, description: "\\( fx \\) for the 3rd class.", workingLatex: "f_3x_3=18\\times14.5=261", explanation: "\\( 18\\times14.5=18\\times14+18\\times0.5=252+9=261 \\)." },
        { stepNumber: 5, description: "\\( fx \\) for the 4th class.", workingLatex: "f_4x_4=10\\times15.5=155", explanation: "Frequency times midpoint." },
        { stepNumber: 6, description: "\\( fx \\) for the 5th class.", workingLatex: "f_5x_5=5\\times16.5=82.5", explanation: "Frequency times midpoint." },
        { stepNumber: 7, description: "Sum the frequencies and the \\( fx \\) column.", workingLatex: "\\sum f=4+13+18+10+5=50,\\qquad \\sum fx=50+175.5+261+155+82.5=724", explanation: "\\( \\sum f=50 \\) matches the number of athletes; add \\( fx \\) in stages: \\( 50+175.5=225.5 \\), \\( +261=486.5 \\), \\( +155=641.5 \\), \\( +82.5=724 \\)." },
        { stepNumber: 8, description: "Estimate the mean.", workingLatex: "\\bar{x}=\\frac{\\sum fx}{\\sum f}=\\frac{724}{50}=14.48", explanation: "Total \\( fx \\) over total frequency 50 gives the mean to 2 d.p." },
        { stepNumber: 9, description: "Build the cumulative frequencies.", workingLatex: "4,\\ 4{+}13{=}17,\\ 17{+}18{=}35,\\ 35{+}10{=}45,\\ 45{+}5{=}50", explanation: "Running totals to locate the median class; the final total 50 confirms \\( n=50 \\)." },
        { stepNumber: 10, description: "Find the median position and class.", workingLatex: "\\frac{n}{2}=\\frac{50}{2}=25\\ \\Rightarrow\\ 17<25\\le35\\ \\Rightarrow\\ 14\\le t<15", explanation: "Use \\( \\frac{n}{2} \\) for grouped data; the 25th value lies where the cumulative frequency rises from 17 to 35." },
        { stepNumber: 11, description: "Read off the interpolation quantities.", workingLatex: "L=14,\\ F=17,\\ f_m=18,\\ w=15-14=1", explanation: "Lower boundary, prior cumulative frequency, class frequency and width; the width here is just 1 second." },
        { stepNumber: 12, description: "Substitute into the median interpolation formula.", workingLatex: "\\text{median}=L+\\frac{\\frac{n}{2}-F}{f_m}\\times w=14+\\frac{25-17}{18}\\times1", explanation: "Numerator \\( 25-17=8 \\) is how far into the class the median value falls." },
        { stepNumber: 13, description: "Evaluate the median to 2 d.p.", workingLatex: "14+\\frac{8}{18}\\times1=14+0.444\\ldots=14.44", explanation: "\\( \\frac{8}{18}=0.4\\overline{4} \\); the narrow width of 1 keeps the fractional part small, giving median 14.44 s." },
        { stepNumber: 14, description: "Compare the mean and median to comment on skew.", workingLatex: "\\bar{x}=14.48>\\text{median}=14.44", explanation: "The mean exceeds the median, indicating a slight positive (right) skew, since the longer upper tail pulls the mean upward." }
      ],
      finalAnswer: "Estimated mean \\( \\approx 14.48 \\) s, median \\( \\approx 14.44 \\) s; mean > median so the distribution has a slight positive skew.",
    },
  },
  {
    id: "y2ld-037",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 37",
    difficulty: "Standard",
    questionText: "A sample of daily maximum temperatures (\\( ^\\circ\\text{C} \\)) recorded at a weather station has lower quartile \\( Q_1 = 14 \\) and upper quartile \\( Q_3 = 22 \\). An outlier is defined as any value below \\( Q_1 - 1.5\\times\\text{IQR} \\) or above \\( Q_3 + 1.5\\times\\text{IQR} \\). Determine whether a recorded temperature of \\( 35\\,^\\circ\\text{C} \\) should be classified as an outlier.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["outliers", "IQR rule", "fences", "quartiles"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the two quartiles given in the question.", workingLatex: "Q_1 = 14\\,^\\circ\\text{C}, \\qquad Q_3 = 22\\,^\\circ\\text{C}", explanation: "List the given values first so each later substitution is easy to track. Both are temperatures in \\( ^\\circ\\text{C} \\). Common slip: confusing \\( Q_1 \\) (lower) with \\( Q_3 \\) (upper) when substituting." },
        { stepNumber: 2, description: "State the formula for the interquartile range.", workingLatex: "\\text{IQR} = Q_3 - Q_1", explanation: "The IQR measures the spread of the middle 50% of the data and is the difference between the upper and lower quartiles." },
        { stepNumber: 3, description: "Substitute the quartiles to evaluate the IQR.", workingLatex: "\\text{IQR} = 22 - 14 = 8\\,^\\circ\\text{C}", explanation: "Subtract the lower quartile from the upper quartile. Common slip: subtracting the wrong way round (\\( 14-22 \\)) and getting a negative IQR." },
        { stepNumber: 4, description: "Write the formula for the upper outlier fence.", workingLatex: "\\text{upper fence} = Q_3 + 1.5\\times\\text{IQR}", explanation: "The high-outlier boundary lies \\( 1.5 \\) IQRs above the upper quartile. Anything strictly above this counts as a high outlier." },
        { stepNumber: 5, description: "Compute the 1.5 IQR amount for the upper fence.", workingLatex: "1.5\\times\\text{IQR} = 1.5\\times 8 = 12", explanation: "Evaluate the \\( 1.5\\times\\text{IQR} \\) term on its own first to avoid arithmetic mistakes. Common slip: using \\( 1.5 \\) as a multiplier of \\( Q_3 \\) rather than of the IQR." },
        { stepNumber: 6, description: "Add to the upper quartile to obtain the upper fence.", workingLatex: "Q_3 + 1.5\\times\\text{IQR} = 22 + 12 = 34\\,^\\circ\\text{C}", explanation: "Any temperature above \\( 34\\,^\\circ\\text{C} \\) is a high outlier. The fence value itself is the cut-off." },
        { stepNumber: 7, description: "Write the formula for the lower outlier fence.", workingLatex: "\\text{lower fence} = Q_1 - 1.5\\times\\text{IQR}", explanation: "The low-outlier boundary lies \\( 1.5 \\) IQRs below the lower quartile. You should always compute both fences even if only one is relevant in the end." },
        { stepNumber: 8, description: "Compute the lower fence.", workingLatex: "Q_1 - 1.5\\times\\text{IQR} = 14 - 12 = 2\\,^\\circ\\text{C}", explanation: "Re-using \\( 1.5\\times\\text{IQR}=12 \\), subtract from \\( Q_1 \\). Any temperature below \\( 2\\,^\\circ\\text{C} \\) is a low outlier. Common slip: forgetting the lower fence entirely." },
        { stepNumber: 9, description: "Compare the value 35 °C against the lower fence.", workingLatex: "35 > 2 \\Rightarrow \\text{not a low outlier}", explanation: "\\( 35\\,^\\circ\\text{C} \\) lies well above the lower fence of \\( 2\\,^\\circ\\text{C} \\), so it cannot be a low outlier." },
        { stepNumber: 10, description: "Compare the value 35 °C against the upper fence.", workingLatex: "35 > 34 \\Rightarrow \\text{above the upper fence}", explanation: "\\( 35\\,^\\circ\\text{C} \\) exceeds the upper fence of \\( 34\\,^\\circ\\text{C} \\), so it breaches the high boundary." },
        { stepNumber: 11, description: "State the conclusion in context.", workingLatex: "35 > 34 \\Rightarrow 35\\,^\\circ\\text{C}\\ \\text{is an outlier}", explanation: "Since \\( 35\\,^\\circ\\text{C} \\) lies above the upper fence, the recorded temperature is classified as an outlier. Always interpret the result in context (a temperature) rather than just stating 'yes'." }
      ],
      finalAnswer: "Lower fence = 2 °C, upper fence = 34 °C. Since 35 °C > 34 °C, the temperature is an outlier.",
    },
  },
  {
    id: "y2ld-038",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 38",
    difficulty: "Standard",
    questionText: "The masses (kg) of a sample of newborn lambs have mean \\( \\bar{x} = 4.6 \\) and standard deviation \\( \\sigma = 0.5 \\). A lamb's mass is considered an outlier if it lies more than two standard deviations from the mean. A lamb has a recorded mass of \\( 5.8 \\) kg. Determine whether this mass is an outlier.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["outliers", "mean and standard deviation", "2sd rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the mean and standard deviation given.", workingLatex: "\\bar{x} = 4.6\\,\\text{kg}, \\qquad \\sigma = 0.5\\,\\text{kg}", explanation: "List the summary statistics first so the two limits can be built cleanly. Both are masses in kg." },
        { stepNumber: 2, description: "State the rule for the acceptable (non-outlier) region.", workingLatex: "\\bar{x} - 2\\sigma \\le \\text{mass} \\le \\bar{x} + 2\\sigma", explanation: "A value is an outlier if it lies more than two standard deviations from the mean, so the non-outlier band runs from \\( \\bar{x}-2\\sigma \\) to \\( \\bar{x}+2\\sigma \\)." },
        { stepNumber: 3, description: "Compute the two-standard-deviation distance.", workingLatex: "2\\sigma = 2\\times 0.5 = 1.0\\,\\text{kg}", explanation: "Work out \\( 2\\sigma \\) on its own first. Common slip: forgetting the factor of 2 and using just one \\( \\sigma \\)." },
        { stepNumber: 4, description: "Write the formula for the upper limit.", workingLatex: "\\text{upper limit} = \\bar{x} + 2\\sigma", explanation: "The top boundary of the acceptable region is two standard deviations above the mean." },
        { stepNumber: 5, description: "Evaluate the upper limit.", workingLatex: "\\bar{x} + 2\\sigma = 4.6 + 1.0 = 5.6\\,\\text{kg}", explanation: "Masses above \\( 5.6 \\) kg lie more than two standard deviations above the mean." },
        { stepNumber: 6, description: "Write the formula for the lower limit.", workingLatex: "\\text{lower limit} = \\bar{x} - 2\\sigma", explanation: "The bottom boundary of the acceptable region is two standard deviations below the mean." },
        { stepNumber: 7, description: "Evaluate the lower limit.", workingLatex: "\\bar{x} - 2\\sigma = 4.6 - 1.0 = 3.6\\,\\text{kg}", explanation: "Masses below \\( 3.6 \\) kg lie more than two standard deviations below the mean. Both limits should be stated even though only one is breached." },
        { stepNumber: 8, description: "Compare 5.8 kg against the lower limit.", workingLatex: "5.8 > 3.6 \\Rightarrow \\text{above the lower limit}", explanation: "\\( 5.8 \\) kg is comfortably above the lower limit, so it is not a low outlier." },
        { stepNumber: 9, description: "Compare 5.8 kg against the upper limit.", workingLatex: "5.8 > 5.6 \\Rightarrow \\text{above the upper limit}", explanation: "\\( 5.8 \\) kg exceeds the upper limit of \\( 5.6 \\) kg, breaching the top of the acceptable band." },
        { stepNumber: 10, description: "State the conclusion in context.", workingLatex: "5.8 > 5.6 \\Rightarrow \\text{outlier}", explanation: "Since the lamb's mass lies more than two standard deviations above the mean, it is an outlier. Answer in context, naming the variable (mass of the lamb)." }
      ],
      finalAnswer: "Acceptable range is 3.6 kg to 5.6 kg. Since 5.8 kg > 5.6 kg, the mass is an outlier.",
    },
  },
  {
    id: "y2ld-039",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 39",
    difficulty: "Standard",
    questionText: "The number of rainy days per month at a site over one year, in order, is given by \\( 4,\\ 6,\\ 7,\\ 9,\\ 10,\\ 11,\\ 12,\\ 13,\\ 14,\\ 16,\\ 18,\\ 25 \\). The quartiles are \\( Q_1 = 8 \\), \\( Q_2 = 11.5 \\) and \\( Q_3 = 15 \\). Using the rule that an outlier lies beyond \\( Q_1 - 1.5\\times\\text{IQR} \\) or \\( Q_3 + 1.5\\times\\text{IQR} \\), identify any outliers.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["outliers", "IQR rule", "identify outliers", "data set"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the quartiles.", workingLatex: "Q_1 = 8, \\qquad Q_3 = 15", explanation: "Only \\( Q_1 \\) and \\( Q_3 \\) are needed for the fences; the median is not used here." },
        { stepNumber: 2, description: "Find the IQR.", workingLatex: "\\text{IQR} = Q_3 - Q_1 = 15 - 8 = 7", explanation: "This is the spread of the middle 50% of the months." },
        { stepNumber: 3, description: "Write and evaluate the lower fence.", workingLatex: "Q_1 - 1.5\\times\\text{IQR} = 8 - 1.5\\times 7 = 8 - 10.5 = -2.5", explanation: "Compute \\( 1.5\\times 7 = 10.5 \\) then subtract. The number of rainy days cannot be negative, so no value can fall below this fence — there are no low outliers." },
        { stepNumber: 4, description: "Write and evaluate the upper fence.", workingLatex: "Q_3 + 1.5\\times\\text{IQR} = 15 + 1.5\\times 7 = 15 + 10.5 = 25.5", explanation: "Months with more than \\( 25.5 \\) rainy days would be high outliers." },
        { stepNumber: 5, description: "Check the smallest and largest data values against the fences.", workingLatex: "\\text{min} = 4 > -2.5, \\qquad \\text{max} = 25 < 25.5", explanation: "Only the extreme values can breach a fence, so checking \\( 4 \\) and \\( 25 \\) is enough. The largest value, \\( 25 \\) days, does not exceed the upper fence. Slip: assuming the biggest value must be an outlier without checking it against the fence." },
        { stepNumber: 6, description: "State the conclusion in context.", workingLatex: "-2.5 < \\text{all values} \\le 25 < 25.5", explanation: "Every monthly rainy-day count lies within the fences, so there are no outliers in this data set." }
      ],
      finalAnswer: "Fences are -2.5 and 25.5 days. All values lie within these, so there are no outliers.",
    },
  },
  {
    id: "y2ld-040",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 40",
    difficulty: "Standard",
    questionText: "The box plot shown summarises the daily mean wind speeds (knots) recorded at Site A. For Site B, the corresponding values are: minimum \\( 3 \\), lower quartile \\( 9 \\), median \\( 14 \\), upper quartile \\( 17 \\), maximum \\( 28 \\). Compare the distributions of daily mean wind speed at the two sites in terms of location and spread, and comment on the skewness of each.",
    questionMafs: `<Mafs viewBox={{ x: [0.2, 21.8], y: [0, 1] }} height={150}>
  <Line.Segment point1={[2, 0.55]} point2={[6, 0.55]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[13, 0.55]} point2={[20, 0.55]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[2, 0.43]} point2={[2, 0.67]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[20, 0.43]} point2={[20, 0.67]} color="var(--mafs-fg-accent)" />
  <Polygon points={[[6,0.35],[13,0.35],[13,0.75],[6,0.75]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} />
  <Line.Segment point1={[9, 0.35]} point2={[9, 0.75]} color="var(--mafs-fg-orange)" />
  <Text x={2} y={0.24} attach="s">2</Text>
  <Text x={6} y={0.12} attach="s">6</Text>
  <Text x={9} y={0.24} attach="s">9</Text>
  <Text x={13} y={0.12} attach="s">13</Text>
  <Text x={20} y={0.24} attach="s">20</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["box plot", "comparing distributions", "skewness", "in context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Read the five-number summary for Site A from the box plot.", workingLatex: "\\text{A: } \\min 2,\\ Q_1 6,\\ Q_2 9,\\ Q_3 13,\\ \\max 20", explanation: "Take each value off the box plot before comparing, so the later steps just use numbers." },
        { stepNumber: 2, description: "Write down the five-number summary for Site B from the question.", workingLatex: "\\text{B: } \\min 3,\\ Q_1 9,\\ Q_2 14,\\ Q_3 17,\\ \\max 28", explanation: "Listing Site B alongside Site A lets every later comparison be a direct number-to-number contrast." },
        { stepNumber: 3, description: "Compare the medians (location).", workingLatex: "\\text{A: } Q_2 = 9 \\quad \\text{vs} \\quad \\text{B: } Q_2 = 14", explanation: "Site B has the higher median wind speed (14 vs 9 knots), so on a typical day Site B is windier. A comparison must always name which site is greater and stay in context." },
        { stepNumber: 4, description: "Find the IQR for Site A.", workingLatex: "\\text{IQR}_A = Q_3 - Q_1 = 13 - 6 = 7", explanation: "The central 50% of Site A's daily wind speeds span 7 knots." },
        { stepNumber: 5, description: "Find the IQR for Site B.", workingLatex: "\\text{IQR}_B = Q_3 - Q_1 = 17 - 9 = 8", explanation: "The central 50% of Site B's daily wind speeds span 8 knots. Compute each IQR separately before comparing." },
        { stepNumber: 6, description: "Compare the IQRs in context.", workingLatex: "\\text{IQR}_B = 8 > 7 = \\text{IQR}_A", explanation: "Site B has a slightly larger IQR, so the central wind speeds are a little more spread out at Site B." },
        { stepNumber: 7, description: "Find the range for each site.", workingLatex: "\\text{Range}_A = 20 - 2 = 18, \\qquad \\text{Range}_B = 28 - 3 = 25", explanation: "Range = max − min for each site. Site B has the greater overall range, confirming more variability. Quoting both IQR and range gives a fuller spread comparison." },
        { stepNumber: 8, description: "Compute the box halves for Site A to assess skewness.", workingLatex: "Q_2 - Q_1 = 9 - 6 = 3, \\qquad Q_3 - Q_2 = 13 - 9 = 4", explanation: "Compare the lower box half with the upper box half. Working both differences out explicitly makes the skew direction unambiguous." },
        { stepNumber: 9, description: "State the skewness of Site A.", workingLatex: "Q_3 - Q_2 = 4 > 3 = Q_2 - Q_1 \\Rightarrow \\text{positive skew}", explanation: "The upper half of the box is longer than the lower half, so Site A's wind speeds are positively skewed." },
        { stepNumber: 10, description: "Compute the box halves for Site B to assess skewness.", workingLatex: "Q_2 - Q_1 = 14 - 9 = 5, \\qquad Q_3 - Q_2 = 17 - 14 = 3", explanation: "Repeat the comparison of box halves for Site B." },
        { stepNumber: 11, description: "State the skewness of Site B.", workingLatex: "Q_2 - Q_1 = 5 > 3 = Q_3 - Q_2 \\Rightarrow \\text{negative skew}", explanation: "The lower half of the box is longer than the upper half, so Site B's wind speeds are negatively skewed. Slip: reading the skew direction backwards by comparing the wrong halves." }
      ],
      finalAnswer: "Site B has a higher median (14 vs 9 knots) and greater spread (IQR 8 vs 7, range 25 vs 18 knots), so Site B is windier and more variable. Site A is positively skewed while Site B is negatively skewed.",
    },
  },
  {
    id: "y2ld-041",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 41",
    difficulty: "Standard",
    questionText: "Two classes sat the same test marked out of 60. The box plot shown gives the marks for Class P. For Class Q, the five-number summary is: minimum \\( 20 \\), lower quartile \\( 34 \\), median \\( 40 \\), upper quartile \\( 46 \\), maximum \\( 58 \\). Compare the marks of the two classes, referring to median and interquartile range in context.",
    questionMafs: `<Mafs viewBox={{ x: [10.5, 64.5], y: [0, 1] }} height={150}>
  <Line.Segment point1={[15, 0.55]} point2={[30, 0.55]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[50, 0.55]} point2={[60, 0.55]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[15, 0.43]} point2={[15, 0.67]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[60, 0.43]} point2={[60, 0.67]} color="var(--mafs-fg-accent)" />
  <Polygon points={[[30,0.35],[50,0.35],[50,0.75],[30,0.75]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} />
  <Line.Segment point1={[44, 0.35]} point2={[44, 0.75]} color="var(--mafs-fg-orange)" />
  <Text x={15} y={0.24} attach="s">15</Text>
  <Text x={30} y={0.12} attach="s">30</Text>
  <Text x={44} y={0.24} attach="s">44</Text>
  <Text x={50} y={0.12} attach="s">50</Text>
  <Text x={60} y={0.24} attach="s">60</Text>
</Mafs>`,
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["box plot", "comparing distributions", "median", "spread"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Read the five-number summary for Class P from the box plot.", workingLatex: "\\text{P: } \\min 15,\\ Q_1 30,\\ Q_2 44,\\ Q_3 50,\\ \\max 60", explanation: "Take the values off the box plot first; Class Q's are given in the question." },
        { stepNumber: 2, description: "Compare the medians.", workingLatex: "\\text{P: } 44 \\quad \\text{vs} \\quad \\text{Q: } 40", explanation: "Class P has a higher median mark, so the typical student in Class P scored higher than in Class Q." },
        { stepNumber: 3, description: "Find the IQR for Class P.", workingLatex: "\\text{IQR}_P = Q_3 - Q_1 = 50 - 30 = 20", explanation: "The middle 50% of Class P's marks span 20 marks." },
        { stepNumber: 4, description: "Find the IQR for Class Q.", workingLatex: "\\text{IQR}_Q = Q_3 - Q_1 = 46 - 34 = 12", explanation: "The middle 50% of Class Q's marks span 12 marks." },
        { stepNumber: 5, description: "Compare the spreads in context.", workingLatex: "\\text{IQR}_P = 20 > 12 = \\text{IQR}_Q", explanation: "Class P's marks are more spread out, so Class Q's marks are more consistent. Slip: stating which IQR is bigger without interpreting consistency in context." }
      ],
      finalAnswer: "Class P has the higher median mark (44 vs 40), so typically scored higher. Class Q has the smaller IQR (12 vs 20), so its marks are more consistent.",
    },
  },
  {
    id: "y2ld-042",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 42",
    difficulty: "Standard",
    questionText: "A cumulative frequency graph is drawn for the times (minutes) taken by \\( 80 \\) students to complete a puzzle. From the graph, the cumulative frequencies are: \\( 20\\,\\text{min} \\to 16 \\), \\( 25\\,\\text{min} \\to 40 \\), \\( 30\\,\\text{min} \\to 60 \\), \\( 35\\,\\text{min} \\to 72 \\), \\( 40\\,\\text{min} \\to 80 \\). Use this information to estimate the median and the interquartile range of the completion times.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cumulative frequency", "median", "quartiles", "graph reading"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the position of the median.", workingLatex: "\\tfrac{1}{2}\\times 80 = 40", explanation: "With \\( n = 80 \\), the median corresponds to a cumulative frequency of 40. For a CF graph we use \\( \\tfrac{n}{2} \\), not \\( \\tfrac{n+1}{2} \\)." },
        { stepNumber: 2, description: "Read the median from the data.", workingLatex: "\\text{CF} = 40 \\Rightarrow t = 25", explanation: "A cumulative frequency of exactly 40 occurs at 25 minutes, so the median is 25 minutes — no interpolation needed here." },
        { stepNumber: 3, description: "Identify the position of the lower quartile.", workingLatex: "\\tfrac{1}{4}\\times 80 = 20", explanation: "\\( Q_1 \\) lies at CF = 20, which falls between 20 min (CF 16) and 25 min (CF 40)." },
        { stepNumber: 4, description: "Estimate Q1 by interpolation.", workingLatex: "Q_1 = 20 + \\frac{20-16}{40-16}\\times 5 = 20 + \\tfrac{4}{24}\\times 5 \\approx 20.8", explanation: "Interpolate within the interval [20, 25] min, width 5: fraction \\( \\tfrac{4}{24} \\) of the way across. Slip: using the wrong interval endpoints or width." },
        { stepNumber: 5, description: "Identify and read the upper quartile.", workingLatex: "\\tfrac{3}{4}\\times 80 = 60 \\Rightarrow Q_3 = 30", explanation: "\\( Q_3 \\) sits at CF = 60, which is reached exactly at 30 min, so \\( Q_3 = 30 \\) min directly." },
        { stepNumber: 6, description: "Compute the interquartile range.", workingLatex: "\\text{IQR} = Q_3 - Q_1 = 30 - 20.8 = 9.2", explanation: "Subtract the quartiles to get the IQR of about 9.2 minutes." }
      ],
      finalAnswer: "Median ≈ 25 minutes; Q1 ≈ 20.8 min, Q3 = 30 min, so IQR ≈ 9.2 minutes.",
    },
  },
  {
    id: "y2ld-043",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 43",
    difficulty: "Standard",
    questionText: "The cumulative frequency table below shows the heights (cm) of \\( 200 \\) seedlings. \\( \\text{Height} \\le 5: 24 \\), \\( \\le 10: 70 \\), \\( \\le 15: 130 \\), \\( \\le 20: 176 \\), \\( \\le 25: 200 \\). Estimate the number of seedlings taller than \\( 18 \\) cm, and find the \\( 90\\text{th} \\) percentile of the heights.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["cumulative frequency", "percentile", "number above value"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the interval containing 18 cm.", workingLatex: "15 < 18 < 20, \\quad \\text{CF}(15) = 130,\\ \\text{CF}(20) = 176", explanation: "18 cm lies in the interval (15, 20], where the CF rises from 130 to 176." },
        { stepNumber: 2, description: "Interpolate the CF at 18 cm.", workingLatex: "\\text{CF}(18) = 130 + \\frac{18-15}{20-15}\\times(176-130) = 130 + \\tfrac{3}{5}\\times 46 = 130 + 27.6 = 157.6", explanation: "Travel a fraction \\( \\tfrac{3}{5} \\) across the interval of width 5, scaling the frequency gain of 46. About 157.6 seedlings are at most 18 cm tall." },
        { stepNumber: 3, description: "Find the number taller than 18 cm.", workingLatex: "200 - 157.6 = 42.4 \\approx 42", explanation: "Subtract from the total of 200 to get those above 18 cm, then round to a whole number of seedlings. Slip: forgetting to subtract from the total and quoting 157.6 instead." },
        { stepNumber: 4, description: "Locate the 90th percentile position.", workingLatex: "0.90\\times 200 = 180", explanation: "P90 lies at CF = 180, between 20 cm (CF 176) and 25 cm (CF 200)." },
        { stepNumber: 5, description: "Interpolate for the 90th percentile.", workingLatex: "P_{90} = 20 + \\frac{180-176}{200-176}\\times 5 = 20 + \\tfrac{4}{24}\\times 5 \\approx 20.8", explanation: "Interpolate within (20, 25], width 5, fraction \\( \\tfrac{4}{24} \\). The 90th percentile height is about 20.8 cm." }
      ],
      finalAnswer: "About 42 seedlings are taller than 18 cm; the 90th percentile is approximately 20.8 cm.",
    },
  },
  {
    id: "y2ld-044",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 44",
    difficulty: "Standard",
    questionText: "The cumulative frequency table for the daily rainfall totals (mm) on \\( 120 \\) days is: \\( \\le 2: 18 \\), \\( \\le 4: 48 \\), \\( \\le 6: 84 \\), \\( \\le 8: 108 \\), \\( \\le 10: 120 \\). Estimate \\( Q_1 \\), the median and \\( Q_3 \\) by interpolation, then use the IQR rule to find the upper outlier fence for these rainfall totals.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cumulative frequency", "median", "quartiles", "outliers"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Locate the position of the lower quartile.", workingLatex: "\\tfrac{1}{4}\\times 120 = 30", explanation: "With \\( n = 120 \\) on a CF table we use \\( \\tfrac{n}{4} \\), so \\( Q_1 \\) sits at CF = 30." },
        { stepNumber: 2, description: "Identify the interval containing Q1.", workingLatex: "\\text{CF}(2) = 18 < 30 < 48 = \\text{CF}(4)", explanation: "CF = 30 lies in the interval (2, 4], where the CF rises from 18 to 48 over a class width of 2." },
        { stepNumber: 3, description: "Interpolate to find Q1.", workingLatex: "Q_1 = 2 + \\frac{30-18}{48-18}\\times 2 = 2 + \\tfrac{12}{30}\\times 2 = 2.8", explanation: "Move a fraction \\( \\tfrac{12}{30} \\) across the interval of width 2. \\( Q_1 \\approx 2.8 \\) mm. Slip: using the wrong endpoints or class width." },
        { stepNumber: 4, description: "Locate the position of the median.", workingLatex: "\\tfrac{1}{2}\\times 120 = 60", explanation: "The median sits at CF = 60." },
        { stepNumber: 5, description: "Identify the interval containing the median.", workingLatex: "\\text{CF}(4) = 48 < 60 < 84 = \\text{CF}(6)", explanation: "CF = 60 lies in (4, 6], where the CF rises from 48 to 84 over width 2." },
        { stepNumber: 6, description: "Interpolate to find the median.", workingLatex: "Q_2 = 4 + \\frac{60-48}{84-48}\\times 2 = 4 + \\tfrac{12}{36}\\times 2 \\approx 4.67", explanation: "Move a fraction \\( \\tfrac{12}{36}=\\tfrac13 \\) across the interval of width 2. The median is about 4.67 mm." },
        { stepNumber: 7, description: "Locate the position of the upper quartile.", workingLatex: "\\tfrac{3}{4}\\times 120 = 90", explanation: "\\( Q_3 \\) sits at CF = 90. Care is needed to choose the correct interval here." },
        { stepNumber: 8, description: "Identify the interval containing Q3.", workingLatex: "\\text{CF}(6) = 84 < 90 < 108 = \\text{CF}(8)", explanation: "CF = 90 lies in (6, 8], where the CF rises from 84 to 108. Slip: mistakenly placing Q3 in (8, 10] — but CF(8) = 108 already exceeds 90, so Q3 must be below 8 mm." },
        { stepNumber: 9, description: "Interpolate to find Q3.", workingLatex: "Q_3 = 6 + \\frac{90-84}{108-84}\\times 2 = 6 + \\tfrac{6}{24}\\times 2 = 6.5", explanation: "Move a fraction \\( \\tfrac{6}{24}=\\tfrac14 \\) across the interval of width 2, giving \\( Q_3 = 6.5 \\) mm." },
        { stepNumber: 10, description: "Compute the interquartile range.", workingLatex: "\\text{IQR} = Q_3 - Q_1 = 6.5 - 2.8 = 3.7", explanation: "Subtract the quartiles. The IQR of the daily rainfall totals is 3.7 mm." },
        { stepNumber: 11, description: "Compute the 1.5 IQR amount for the upper fence.", workingLatex: "1.5\\times\\text{IQR} = 1.5\\times 3.7 = 5.55", explanation: "Evaluate the \\( 1.5\\times\\text{IQR} \\) term on its own first to keep the arithmetic clean." },
        { stepNumber: 12, description: "Evaluate the upper outlier fence.", workingLatex: "Q_3 + 1.5\\times\\text{IQR} = 6.5 + 5.55 = 12.05", explanation: "The upper fence is 12.05 mm, so daily totals above about 12.05 mm would be classified as outliers." }
      ],
      finalAnswer: "Q1 ≈ 2.8 mm, median ≈ 4.67 mm, Q3 ≈ 6.5 mm, IQR ≈ 3.7 mm; upper outlier fence ≈ 12.05 mm.",
    },
  },
  {
    id: "y2ld-045",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 45",
    difficulty: "Standard",
    questionText: "A set of pressures \\( x \\) (in hPa) is coded using \\( y = \\dfrac{x - 1000}{4} \\). The coded values have mean \\( \\bar{y} = 6.5 \\) and standard deviation \\( \\sigma_y = 2.5 \\). Find the mean and standard deviation of the original pressures \\( x \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coding", "linear transformation", "mean", "standard deviation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Relate the means using the coding.", workingLatex: "\\bar{y} = \\frac{\\bar{x} - 1000}{4}", explanation: "The mean is coded by exactly the same linear rule as the individual data values." },
        { stepNumber: 2, description: "Rearrange to make x-bar the subject.", workingLatex: "\\bar{x} = 4\\bar{y} + 1000", explanation: "Multiply both sides by 4 then add 1000 to invert the coding. Slip: forgetting to add 1000 back after multiplying." },
        { stepNumber: 3, description: "Substitute to find the mean of x.", workingLatex: "\\bar{x} = 4\\times 6.5 + 1000 = 26 + 1000 = 1026", explanation: "The mean pressure is 1026 hPa." },
        { stepNumber: 4, description: "Relate the standard deviations.", workingLatex: "\\sigma_y = \\frac{\\sigma_x}{4}", explanation: "Subtracting 1000 is a shift and does not affect spread; only the division by 4 scales the standard deviation." },
        { stepNumber: 5, description: "Rearrange and substitute for the standard deviation of x.", workingLatex: "\\sigma_x = 4\\sigma_y = 4\\times 2.5 = 10", explanation: "The standard deviation of the pressures is 10 hPa. Note there is no '+1000' here — adding a constant never changes the spread." }
      ],
      finalAnswer: "Mean pressure = 1026 hPa; standard deviation = 10 hPa.",
    },
  },
  {
    id: "y2ld-046",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 46",
    difficulty: "Standard",
    questionText: "The daily mean temperatures \\( x\\,(^\\circ\\text{C}) \\) at a station have mean \\( \\bar{x} = 17.2 \\) and standard deviation \\( \\sigma_x = 3.5 \\). The data are coded using \\( y = \\dfrac{x - 15}{2} \\). Find the mean and standard deviation of the coded values \\( y \\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["coding", "linear transformation", "mean", "standard deviation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the coding to the mean.", workingLatex: "\\bar{y} = \\frac{\\bar{x} - 15}{2}", explanation: "The mean is transformed by the same coding as the data values." },
        { stepNumber: 2, description: "Substitute to find the coded mean.", workingLatex: "\\bar{y} = \\frac{17.2 - 15}{2} = \\frac{2.2}{2} = 1.1", explanation: "Subtract 15 first, then divide by 2. The coded mean is 1.1." },
        { stepNumber: 3, description: "State the effect of subtracting 15 on spread.", workingLatex: "\\sigma \\text{ unaffected by the } -15", explanation: "A horizontal shift does not change the spread of the data, so only the division matters." },
        { stepNumber: 4, description: "State the effect of dividing by 2.", workingLatex: "\\sigma_y = \\frac{\\sigma_x}{2}", explanation: "Dividing each value by 2 halves the standard deviation. Slip: applying the '−15' to the standard deviation as well." },
        { stepNumber: 5, description: "Compute the coded standard deviation.", workingLatex: "\\sigma_y = \\frac{3.5}{2} = 1.75", explanation: "The coded standard deviation is 1.75." }
      ],
      finalAnswer: "Coded mean = 1.1; coded standard deviation = 1.75.",
    },
  },
  {
    id: "y2ld-047",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 47",
    difficulty: "Standard",
    questionText: "Rainfall totals \\( x \\) (mm) are coded using \\( y = \\dfrac{x - 5}{2} \\). The coded data have mean \\( \\bar{y} = 4 \\) and standard deviation \\( \\sigma_y = 1.5 \\). Using the rule that an outlier lies more than two standard deviations from the mean, find the range of rainfall totals \\( x \\) that would NOT be classified as outliers.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coding", "outliers", "back-transform", "in context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Relate the means using the coding.", workingLatex: "\\bar{y} = \\frac{\\bar{x} - 5}{2}", explanation: "The mean obeys the same coding rule \\( y=\\tfrac{x-5}{2} \\) as the individual data values." },
        { stepNumber: 2, description: "Rearrange the coding to make x-bar the subject.", workingLatex: "\\bar{x} = 2\\bar{y} + 5", explanation: "Multiply both sides by 2 then add 5 to invert the coding. Slip: forgetting to add the 5 back after multiplying." },
        { stepNumber: 3, description: "Substitute to back-transform the mean of x.", workingLatex: "\\bar{x} = 2\\times 4 + 5 = 8 + 5 = 13", explanation: "The mean rainfall total is 13 mm." },
        { stepNumber: 4, description: "Relate the standard deviations.", workingLatex: "\\sigma_y = \\frac{\\sigma_x}{2}", explanation: "The '−5' is a shift and does not affect spread; only the division by 2 scales the standard deviation." },
        { stepNumber: 5, description: "Back-transform the standard deviation of x.", workingLatex: "\\sigma_x = 2\\sigma_y = 2\\times 1.5 = 3", explanation: "Only the scale factor of 2 affects the spread, so \\( \\sigma_x = 3 \\) mm. Note there is no '+5' here — adding a constant never changes the spread." },
        { stepNumber: 6, description: "Compute the two-standard-deviation distance.", workingLatex: "2\\sigma_x = 2\\times 3 = 6", explanation: "The non-outlier band stretches \\( 2\\sigma_x = 6 \\) mm either side of the mean. Slip: using the coded \\( \\sigma_y \\) here instead of the back-transformed \\( \\sigma_x \\)." },
        { stepNumber: 7, description: "Evaluate the lower acceptable limit.", workingLatex: "\\bar{x} - 2\\sigma_x = 13 - 6 = 7", explanation: "Totals below 7 mm would lie more than two standard deviations below the mean and be outliers." },
        { stepNumber: 8, description: "Evaluate the upper acceptable limit.", workingLatex: "\\bar{x} + 2\\sigma_x = 13 + 6 = 19", explanation: "Totals above 19 mm would be outliers. Slip: using the coded \\( \\bar{y}, \\sigma_y \\) here instead of the back-transformed values." },
        { stepNumber: 9, description: "State the non-outlier range in context.", workingLatex: "7 \\le x \\le 19", explanation: "Rainfall totals between 7 mm and 19 mm are not classified as outliers. Answer in context, naming the variable (rainfall total in mm)." }
      ],
      finalAnswer: "Rainfall totals from 7 mm to 19 mm (inclusive) are not classified as outliers.",
    },
  },
  {
    id: "y2ld-048",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 48",
    difficulty: "Standard",
    questionText: "The box plot shown displays the daily mean visibilities (m) at a coastal site, where the whiskers extend to the most extreme values that are not outliers. The lower quartile is \\( 1500 \\) and the upper quartile is \\( 2700 \\). A day with visibility \\( 4800 \\) m was recorded. Using the IQR rule, determine whether \\( 4800 \\) m is an outlier and state how it would appear on the box plot.",
    questionMafs: `<Mafs viewBox={{ x: [220, 4780], y: [0, 1] }} height={150}>
  <Line.Segment point1={[600, 0.55]} point2={[1500, 0.55]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[2700, 0.55]} point2={[4400, 0.55]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[600, 0.43]} point2={[600, 0.67]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[4400, 0.43]} point2={[4400, 0.67]} color="var(--mafs-fg-accent)" />
  <Polygon points={[[1500,0.35],[2700,0.35],[2700,0.75],[1500,0.75]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} />
  <Line.Segment point1={[2100, 0.35]} point2={[2100, 0.75]} color="var(--mafs-fg-orange)" />
  <Text x={600} y={0.24} attach="s">600</Text>
  <Text x={1500} y={0.12} attach="s">1500</Text>
  <Text x={2100} y={0.24} attach="s">2100</Text>
  <Text x={2700} y={0.12} attach="s">2700</Text>
  <Text x={4400} y={0.24} attach="s">4400</Text>
</Mafs>`,
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["box plot", "outliers", "comparing distributions"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the quartiles.", workingLatex: "Q_1 = 1500, \\qquad Q_3 = 2700", explanation: "These are the only values needed to build the upper fence." },
        { stepNumber: 2, description: "Compute the IQR.", workingLatex: "\\text{IQR} = Q_3 - Q_1 = 2700 - 1500 = 1200", explanation: "The spread of the middle 50% of visibility readings is 1200 m." },
        { stepNumber: 3, description: "Write and evaluate the upper fence.", workingLatex: "Q_3 + 1.5\\times\\text{IQR} = 2700 + 1.5\\times 1200 = 2700 + 1800 = 4500", explanation: "Compute \\( 1.5\\times 1200 = 1800 \\), then add. Visibilities above 4500 m are outliers." },
        { stepNumber: 4, description: "Compare 4800 m with the fence.", workingLatex: "4800 > 4500", explanation: "The reading exceeds the upper fence, so it is flagged as an outlier." },
        { stepNumber: 5, description: "State the conclusion and how it appears on the plot.", workingLatex: "4800 > 4500 \\Rightarrow \\text{outlier}", explanation: "Since 4800 m exceeds the upper fence, it is an outlier and would be plotted as an individual point (cross) beyond the right-hand whisker, which ends at the largest non-outlier value of 4400 m. Slip: drawing the whisker out to the outlier instead of to the last value inside the fence." }
      ],
      finalAnswer: "Upper fence = 4500 m. Since 4800 m > 4500 m it is an outlier, plotted as a separate point beyond the whisker (which ends at 4400 m).",
    },
  },
  {
    id: "y2ld-049",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 49",
    difficulty: "Standard",
    questionText: "Cumulative frequency curves are drawn for the daily mean wind speeds (knots) at two airfields, each over \\( 100 \\) days. Reading from the graphs gives the following quartiles. Airfield X: \\( Q_1 = 7 \\), median \\( 11 \\), \\( Q_3 = 16 \\). Airfield Y: \\( Q_1 = 9 \\), median \\( 12 \\), \\( Q_3 = 15 \\). Also, at Airfield X, \\( 30 \\) days had wind speed above \\( 14 \\) knots. Compare the wind speeds at the two airfields and estimate the number of days at Airfield X with wind speed at most \\( 14 \\) knots.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cumulative frequency", "comparing distributions", "median", "in context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the quartiles for both airfields.", workingLatex: "\\text{X: } Q_1 7,\\ Q_2 11,\\ Q_3 16 \\qquad \\text{Y: } Q_1 9,\\ Q_2 12,\\ Q_3 15", explanation: "Listing both summaries side by side lets every comparison be a direct number-to-number contrast." },
        { stepNumber: 2, description: "Compare the medians (location).", workingLatex: "\\text{X: } 11 \\quad \\text{vs} \\quad \\text{Y: } 12", explanation: "Airfield Y has the higher median wind speed (12 vs 11 knots), so on a typical day Y is marginally windier. Name which airfield is greater and stay in context." },
        { stepNumber: 3, description: "Find the IQR for Airfield X.", workingLatex: "\\text{IQR}_X = Q_3 - Q_1 = 16 - 7 = 9", explanation: "The central 50% of Airfield X's daily wind speeds span 9 knots." },
        { stepNumber: 4, description: "Find the IQR for Airfield Y.", workingLatex: "\\text{IQR}_Y = Q_3 - Q_1 = 15 - 9 = 6", explanation: "The central 50% of Airfield Y's daily wind speeds span 6 knots. Compute each IQR separately before comparing." },
        { stepNumber: 5, description: "Compare the IQRs (spread) in context.", workingLatex: "\\text{IQR}_X = 9 > 6 = \\text{IQR}_Y", explanation: "Airfield X has the larger IQR, so although Y is typically a touch windier, X shows greater day-to-day variability in wind speed." },
        { stepNumber: 6, description: "Identify the count of days above 14 knots at Airfield X.", workingLatex: "\\text{days above } 14 = 30 \\text{ out of } 100", explanation: "The question states 30 of the 100 days at Airfield X had wind speed above 14 knots." },
        { stepNumber: 7, description: "Find the number of days at most 14 knots.", workingLatex: "100 - 30 = 70", explanation: "'At most 14' is the complement of 'above 14', so subtract from the 100-day total. Therefore 70 days had wind speed at most 14 knots at Airfield X. Slip: subtracting from the wrong total or confusing 'above' with 'at most'." }
      ],
      finalAnswer: "Airfield Y has the higher median (12 vs 11 knots) but Airfield X is more variable (IQR 9 vs 6 knots). At Airfield X, 70 days had wind speed at most 14 knots.",
    },
  },
  {
    id: "y2ld-050",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 50",
    difficulty: "Challenge",
    questionText: "A college has \\( 840 \\) students split across four faculties: Arts \\( (200) \\), Science \\( (260) \\), Engineering \\( (180) \\) and Business \\( (200) \\). A stratified sample of \\( 60 \\) students is to be taken. Calculate how many students should be selected from each faculty, showing the proportional calculation and rounding, and confirm the sample total is exactly \\( 60 \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["large-data-sets", "sampling", "stratified-sampling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Add the four faculty sizes.", workingLatex: "200+260+180+200 = 840", explanation: "Adding the strata gives \\\\( 840 \\\\). Do this first so you are summing genuine counts, not an assumed total — if the parts disagreed with the stated \\\\( 840 \\\\) one figure would be wrong." },
        { stepNumber: 2, description: "Confirm the total matches the stated population N.", workingLatex: "840 = N", explanation: "The parts equal the stated population \\\\( N=840 \\\\), so the proportions are valid. Skipping this sanity check is a common slip that lets a typo in a stratum go unnoticed." },
        { stepNumber: 3, description: "State the stratified sampling rule.", workingLatex: "n_h = \\\\frac{N_h}{N}\\\\times n", explanation: "Each stratum contributes in proportion to its share of the population: \\\\( N_h \\\\) is a faculty size, \\\\( N \\\\) the whole college, \\\\( n \\\\) the sample size. Using raw counts instead of proportions is the classic error." },
        { stepNumber: 4, description: "Insert the fixed values N and n.", workingLatex: "N=840,\\\\quad n=60", explanation: "Fixing \\\\( N=840 \\\\) and \\\\( n=60 \\\\) means only \\\\( N_h \\\\) changes between strata. The common sampling fraction is \\\\( \\\\tfrac{n}{N}=\\\\tfrac{60}{840}=\\\\tfrac{1}{14} \\\\), so each count is divided by \\\\( 14 \\\\)." },
        { stepNumber: 5, description: "Arts stratum: form the fraction times n.", workingLatex: "\\\\frac{200}{840}\\\\times 60 = \\\\frac{200}{14}", explanation: "Multiply the Arts size by the sampling fraction. Cancelling \\\\( \\\\tfrac{60}{840} \\\\) to \\\\( \\\\tfrac{1}{14} \\\\) leaves the simpler \\\\( \\\\tfrac{200}{14} \\\\)." },
        { stepNumber: 6, description: "Evaluate the Arts decimal.", workingLatex: "\\\\frac{200}{14} = 14.2857\\\\dots", explanation: "Keep the full decimal so the rounding direction is unambiguous; truncating early (e.g. to \\\\( 14.3 \\\\)) can obscure a borderline case." },
        { stepNumber: 7, description: "Round the Arts allocation.", workingLatex: "14.2857\\\\dots \\\\to 14", explanation: "The fractional part \\\\( 0.29 < 0.5 \\\\), so round down to \\\\( 14 \\\\) students. You cannot sample part of a person, so every stratum must be a whole number." },
        { stepNumber: 8, description: "Science stratum: form the fraction times n.", workingLatex: "\\\\frac{260}{840}\\\\times 60 = \\\\frac{260}{14}", explanation: "Same method with the Science size \\\\( 260 \\\\). Science is the largest faculty, so expect the largest allocation — a useful cross-check." },
        { stepNumber: 9, description: "Evaluate the Science decimal.", workingLatex: "\\\\frac{260}{14} = 18.5714\\\\dots", explanation: "Divide \\\\( 260 \\\\) by \\\\( 14 \\\\) and retain all the decimals for an honest rounding decision." },
        { stepNumber: 10, description: "Round the Science allocation.", workingLatex: "18.5714\\\\dots \\\\to 19", explanation: "The fractional part \\\\( 0.57 > 0.5 \\\\), so round up to \\\\( 19 \\\\). Forgetting this rounds up (and writing 18) is the usual error here." },
        { stepNumber: 11, description: "Engineering stratum: form the fraction times n.", workingLatex: "\\\\frac{180}{840}\\\\times 60 = \\\\frac{180}{14}", explanation: "Engineering is the smallest faculty, so expect the smallest allocation." },
        { stepNumber: 12, description: "Evaluate the Engineering decimal.", workingLatex: "\\\\frac{180}{14} = 12.8571\\\\dots", explanation: "Divide \\\\( 180 \\\\) by \\\\( 14 \\\\); the large fractional part signals a round-up is coming." },
        { stepNumber: 13, description: "Round the Engineering allocation.", workingLatex: "12.8571\\\\dots \\\\to 13", explanation: "The fractional part \\\\( 0.86 > 0.5 \\\\), so round up to \\\\( 13 \\\\)." },
        { stepNumber: 14, description: "Business stratum: form the fraction times n.", workingLatex: "\\\\frac{200}{840}\\\\times 60 = \\\\frac{200}{14} = 14.2857\\\\dots", explanation: "Business has the same size as Arts \\\\( (200) \\\\), so the calculation is identical. Equal strata must give equal decimals — a quick consistency check." },
        { stepNumber: 15, description: "Round the Business allocation.", workingLatex: "14.2857\\\\dots \\\\to 14", explanation: "Same fractional part \\\\( 0.29 < 0.5 \\\\) as Arts, so round down to \\\\( 14 \\\\). Equal strata must always receive equal allocations." },
        { stepNumber: 16, description: "Add the four rounded allocations.", workingLatex: "14+19+13+14 = 60", explanation: "Sum the rounded counts to compare against the required sample size." },
        { stepNumber: 17, description: "Confirm the total equals n.", workingLatex: "60 = n\\\\ \\\\checkmark", explanation: "The rounded allocations sum to exactly \\\\( 60 \\\\), so no adjustment is needed. Always finish a stratified problem this way: if rounding had given 59 or 61 you would adjust the stratum whose decimal was closest to \\\\( .5 \\\\) to restore the total." }
      ],
      finalAnswer: "Arts 14, Science 19, Engineering 13, Business 14 (total 60).",
    },
  },
  {
    id: "y2ld-051",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 51",
    difficulty: "Challenge",
    questionText: "In a daily-rainfall study, station A recorded \\( 18 \\) readings with mean \\( 64.5\\,\\text{mm} \\) and station B recorded \\( 32 \\) readings with mean \\( 71.0\\,\\text{mm} \\). Find the mean of all \\( 50 \\) readings combined, giving your answer to \\( 2 \\) decimal places.",
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ["large-data-sets", "combined-mean", "data-in-context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the combined-mean formula.", workingLatex: "\\\\bar{x}=\\\\frac{n_1\\\\bar{x}_1+n_2\\\\bar{x}_2}{n_1+n_2}", explanation: "The combined mean weights each group mean by its sample size. You cannot simply average \\\\( 64.5 \\\\) and \\\\( 71.0 \\\\) because the two stations have different numbers of readings." },
        { stepNumber: 2, description: "Recover the total of station A from its mean.", workingLatex: "n_1\\\\bar{x}_1 = 18\\\\times 64.5 = 1161", explanation: "A group's sum equals its count times its mean, since \\\\( \\\\bar{x}=\\\\tfrac{\\\\sum x}{n} \\\\). This undoes the averaging so the raw totals can be added." },
        { stepNumber: 3, description: "Recover the total of station B from its mean.", workingLatex: "n_2\\\\bar{x}_2 = 32\\\\times 71.0 = 2272", explanation: "Same reasoning for the second station. B has more readings (32) and a higher mean, so it carries more weight in the combined figure." },
        { stepNumber: 4, description: "Add the two totals to get the overall sum.", workingLatex: "\\\\sum x = 1161+2272 = 3433", explanation: "This is the grand total rainfall across all \\\\( 50 \\\\) readings. A common slip is to add the means instead of the totals." },
        { stepNumber: 5, description: "Confirm the combined count.", workingLatex: "n_1+n_2 = 18+32 = 50", explanation: "The denominator must be the total number of readings, \\\\( 50 \\\\), matching the figure stated in the question." },
        { stepNumber: 6, description: "Divide the grand total by the combined count.", workingLatex: "\\\\bar{x}=\\\\frac{3433}{50}=68.66", explanation: "Carrying out the division gives \\\\( 68.66 \\\\), already exact to 2 d.p. (\\\\( 3433/50=68.66 \\\\) terminates)." },
        { stepNumber: 7, description: "Sense-check the result.", workingLatex: "64.5 < 68.66 < 71.0", explanation: "The combined mean lies between the two station means and is closer to \\\\( 71.0 \\\\) because station B contributed more readings — confirming the weighting was applied correctly." }
      ],
      finalAnswer: "\\( \\bar{x}=68.66\\,\\text{mm} \\).",
      canonicalAnswer: "68.66",
    },
  },
  {
    id: "y2ld-052",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 52",
    difficulty: "Challenge",
    questionText: "The number of late arrivals per day over a period was recorded. The values \\( 0,1,2,3,4 \\) occurred with frequencies \\( 6,11,f,9,4 \\) respectively. The mean number of late arrivals was exactly \\( 1.9 \\). Find the missing frequency \\( f \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["large-data-sets", "reverse-problem", "mean", "frequency"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the mean of a frequency distribution as a fraction in terms of f.", workingLatex: "\\\\bar{x}=\\\\frac{\\\\sum xf}{\\\\sum f}=\\\\frac{0(6)+1(11)+2f+3(9)+4(4)}{6+11+f+9+4}", explanation: "Numerator is the weighted total \\\\( \\\\sum xf \\\\) of values; denominator is the total frequency \\\\( \\\\sum f \\\\). The unknown \\\\( f \\\\) appears in both, which is what makes this a reverse problem." },
        { stepNumber: 2, description: "Evaluate the known products in the numerator.", workingLatex: "0(6)=0,\\\\ 1(11)=11,\\\\ 3(9)=27,\\\\ 4(4)=16", explanation: "Work out each \\\\( x\\\\times f \\\\) term that does not involve \\\\( f \\\\). The \\\\( x=2 \\\\) term stays as \\\\( 2f \\\\) because its frequency is unknown." },
        { stepNumber: 3, description: "Total the known numerator contributions.", workingLatex: "11+27+16 = 54", explanation: "Combine the constant products (the \\\\( 0 \\\\) term adds nothing) so the numerator becomes \\\\( 54+2f \\\\)." },
        { stepNumber: 4, description: "Total the known frequencies in the denominator.", workingLatex: "6+11+9+4 = 30", explanation: "Sum the known frequencies; the denominator is then \\\\( 30+f \\\\), still carrying the unknown." },
        { stepNumber: 5, description: "Write the collected fraction.", workingLatex: "\\\\bar{x}=\\\\frac{54+2f}{30+f}", explanation: "This compact form keeps \\\\( f \\\\) in both numerator and denominator, ready to set equal to the given mean." },
        { stepNumber: 6, description: "Set the expression equal to the given mean.", workingLatex: "\\\\frac{54+2f}{30+f}=1.9", explanation: "The stated mean \\\\( 1.9 \\\\) lets us form an equation in the single unknown \\\\( f \\\\)." },
        { stepNumber: 7, description: "Multiply both sides by the denominator.", workingLatex: "54+2f = 1.9(30+f)", explanation: "Clearing the fraction removes \\\\( f \\\\) from the denominator. Forgetting to multiply the \\\\( f \\\\) term inside the bracket is the usual error." },
        { stepNumber: 8, description: "Expand the right-hand side.", workingLatex: "54+2f = 57+1.9f", explanation: "Distribute: \\\\( 1.9\\\\times 30 = 57 \\\\) and \\\\( 1.9\\\\times f = 1.9f \\\\)." },
        { stepNumber: 9, description: "Collect the f terms on one side and constants on the other.", workingLatex: "2f-1.9f = 57-54 \\\\implies 0.1f = 3", explanation: "Subtract \\\\( 1.9f \\\\) and \\\\( 54 \\\\) from both sides. Keeping the small coefficient \\\\( 0.1 \\\\) exact avoids a rounding error in the next step." },
        { stepNumber: 10, description: "Solve for f.", workingLatex: "f = \\\\frac{3}{0.1}=30", explanation: "Divide by \\\\( 0.1 \\\\). Since \\\\( f \\\\) is a frequency it must be a non-negative whole number, and \\\\( 30 \\\\) qualifies." },
        { stepNumber: 11, description: "Substitute back to verify.", workingLatex: "\\\\frac{54+2(30)}{30+30}=\\\\frac{114}{60}=1.9\\\\ \\\\checkmark", explanation: "Putting \\\\( f=30 \\\\) back into the original fraction reproduces the given mean exactly, confirming the solution." }
      ],
      finalAnswer: "\\( f = 30 \\).",
      canonicalAnswer: "30",
    },
  },
  {
    id: "y2ld-053",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 53",
    difficulty: "Challenge",
    questionText: "A delivery company has \\( 4500 \\) parcels listed in order on a database and wants a systematic sample of \\( 150 \\) parcels for an audit. (a) Find the sampling interval \\( k \\). (b) Explain how the random start is chosen and list the database positions of the first three sampled parcels if the random start is \\( 17 \\). (c) State one advantage of systematic over simple random sampling here.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["large-data-sets", "sampling", "systematic-sampling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "(a) State the sampling-interval rule.", workingLatex: "k=\\\\frac{N}{n}", explanation: "In systematic sampling the interval is the population size divided by the sample size; this fixes how far apart successive selections are." },
        { stepNumber: 2, description: "Evaluate the interval.", workingLatex: "k=\\\\frac{4500}{150}=30", explanation: "Here it divides exactly, so every \\\\( 30\\\\text{th} \\\\) parcel is selected. If \\\\( k \\\\) were not a whole number you would round it (and accept a slightly different sample size)." },
        { stepNumber: 3, description: "(b) Describe the random start.", workingLatex: "\\\\text{start } r \\\\in \\\\{1,2,\\\\dots,30\\\\}\\\\ \\\\text{chosen at random}", explanation: "The first member is picked at random from the first interval \\\\( 1 \\\\) to \\\\( k=30 \\\\) (e.g. using a random-number generator). Choosing within the first interval guarantees the whole list is covered and removes starting-point bias." },
        { stepNumber: 4, description: "Set up the selection pattern from the given start r = 17.", workingLatex: "r,\\\\ r+k,\\\\ r+2k = 17,\\\\ 17+30,\\\\ 17+60", explanation: "Successive selections are spaced exactly \\\\( k=30 \\\\) apart starting from \\\\( r=17 \\\\), not from \\\\( 30 \\\\)." },
        { stepNumber: 5, description: "Evaluate the first three positions.", workingLatex: "17,\\\\ 47,\\\\ 77", explanation: "These are the database positions of the first three audited parcels. A common slip is to start counting at \\\\( 30 \\\\) rather than at the random start \\\\( r \\\\)." },
        { stepNumber: 6, description: "Locate the last selection.", workingLatex: "r+(n-1)k = 17+30(149)=17+4470=4487", explanation: "The 150th selection uses \\\\( n-1=149 \\\\) full steps of \\\\( 30 \\\\) added to the start, landing on position \\\\( 4487 \\\\)." },
        { stepNumber: 7, description: "Confirm all 150 selections fit inside the list.", workingLatex: "4487 \\\\le 4500", explanation: "The last position is within the \\\\( 4500 \\\\) parcels, so the scheme yields exactly \\\\( 150 \\\\) valid selections with none running off the end of the list." },
        { stepNumber: 8, description: "(c) State an advantage.", workingLatex: "\\\\text{quick to run; even spread through the ordered list}", explanation: "Systematic sampling is quick to administer and spreads the sample evenly across the whole database, without needing \\\\( 150 \\\\) separate random numbers as simple random sampling would." }
      ],
      finalAnswer: "(a) k = 30. (b) Random start r from 1–30; with r = 17 the first three positions are 17, 47, 77. (c) It is quicker and spreads the sample evenly across the ordered list.",
    },
  },
  {
    id: "y2ld-054",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 54",
    difficulty: "Challenge",
    questionText: "A data set of \\( 12 \\) measurements was summarised as \\( \\sum x = 648 \\) and \\( \\sum x^2 = 38000 \\). On checking, one value recorded as \\( 38 \\) should have been \\( 83 \\). Recompute the corrected mean and the corrected standard deviation (to \\( 3 \\) significant figures).",
    marks: 7,
    examStyle: false,
    yearCreated: 2026,
    tags: ["large-data-sets", "mean", "standard-deviation", "data-correction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Adjust the sum of values.", workingLatex: "\\\\sum x_{\\\\text{new}}=648-38+83", explanation: "Remove the wrong value \\\\( 38 \\\\) and add the correct one \\\\( 83 \\\\). The count stays at \\\\( 12 \\\\) because we replace one reading, not add a new one." },
        { stepNumber: 2, description: "Evaluate the corrected sum.", workingLatex: "\\\\sum x_{\\\\text{new}}=693", explanation: "The net change is \\\\( +45 \\\\) (since \\\\( 83-38=45 \\\\)), giving a corrected total of \\\\( 693 \\\\)." },
        { stepNumber: 3, description: "Compute the corrected mean.", workingLatex: "\\\\bar{x}=\\\\frac{693}{12}=57.75", explanation: "Divide the corrected total by \\\\( n=12 \\\\). The correction raised the sum by \\\\( 45 \\\\), so the mean rose by \\\\( \\\\tfrac{45}{12}=3.75 \\\\) from the original \\\\( 54 \\\\)." },
        { stepNumber: 4, description: "Set up the corrected sum of squares.", workingLatex: "\\\\sum x^2_{\\\\text{new}}=38000-38^2+83^2", explanation: "The squared-terms total must be adjusted with the squares of the old and new values, not the values themselves. A frequent error is to subtract \\\\( 38 \\\\) and add \\\\( 83 \\\\) here instead of their squares." },
        { stepNumber: 5, description: "Evaluate the two squares.", workingLatex: "38^2=1444,\\\\quad 83^2=6889", explanation: "Square each value carefully before combining; a slip in either square feeds straight into the variance." },
        { stepNumber: 6, description: "Combine into the corrected sum of squares.", workingLatex: "38000-1444+6889 = 43445", explanation: "Remove the old square and add the new one. The net rise is \\\\( 6889-1444=5445 \\\\)." },
        { stepNumber: 7, description: "State the variance formula.", workingLatex: "\\\\sigma^2=\\\\frac{\\\\sum x^2}{n}-\\\\bar{x}^2", explanation: "Population variance from summary statistics: mean of the squares minus the square of the mean." },
        { stepNumber: 8, description: "Evaluate each term of the variance.", workingLatex: "\\\\frac{43445}{12}=3620.417,\\\\quad 57.75^2=3335.0625", explanation: "Compute the two pieces separately and keep full precision until the final rounding." },
        { stepNumber: 9, description: "Compute the variance.", workingLatex: "\\\\sigma^2=3620.417-3335.0625=285.354", explanation: "Subtract the square of the mean from the mean of the squares to get the population variance." },
        { stepNumber: 10, description: "Take the square root.", workingLatex: "\\\\sigma=\\\\sqrt{285.354}=16.892\\\\dots", explanation: "Take the positive square root for the standard deviation." },
        { stepNumber: 11, description: "Round to 3 significant figures.", workingLatex: "\\\\sigma \\\\approx 16.9", explanation: "Three significant figures as requested. The standard deviation is large because the corrected value \\\\( 83 \\\\) is far above the mean." }
      ],
      finalAnswer: "Corrected mean \\( = 57.75 \\); corrected standard deviation \\( \\approx 16.9 \\).",
    },
  },
  {
    id: "y2ld-055",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 55",
    difficulty: "Challenge",
    questionText: "Seven temperature readings (\\( ^\\circ\\text{C} \\)) are \\( 19,\\ 27,\\ x,\\ 31,\\ 15,\\ 22,\\ 24 \\). Their mean is \\( 23^\\circ\\text{C} \\). Find the missing value \\( x \\), and hence state the median of the seven readings.",
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ["large-data-sets", "reverse-problem", "mean"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Relate the mean to the required total.", workingLatex: "\\\\sum x = n\\\\bar{x}=7\\\\times 23 = 161", explanation: "Total equals count times mean, since \\\\( \\\\bar{x}=\\\\tfrac{\\\\sum x}{n} \\\\). All seven readings (including \\\\( x \\\\)) must add to \\\\( 161 \\\\)." },
        { stepNumber: 2, description: "Sum the six known values.", workingLatex: "19+27+31+15+22+24 = 138", explanation: "Add every reading except \\\\( x \\\\). Take care to include all six and not accidentally count \\\\( x \\\\)." },
        { stepNumber: 3, description: "Solve for x.", workingLatex: "x = 161-138 = 23", explanation: "The missing reading makes up the difference between the known sum and the required total of \\\\( 161 \\\\)." },
        { stepNumber: 4, description: "Order all seven values ascending.", workingLatex: "15,\\\\ 19,\\\\ 22,\\\\ 23,\\\\ 24,\\\\ 27,\\\\ 31", explanation: "Insert the found value \\\\( x=23 \\\\) and arrange in increasing order. The median requires ordered data, so this step cannot be skipped." },
        { stepNumber: 5, description: "Locate the median position.", workingLatex: "\\\\text{position } \\\\tfrac{n+1}{2}=\\\\tfrac{8}{2}=4", explanation: "With \\\\( n=7 \\\\) (odd) the median is the single middle value, at position \\\\( \\\\tfrac{n+1}{2}=4 \\\\)." },
        { stepNumber: 6, description: "Read off the median.", workingLatex: "\\\\text{4th value} = 23", explanation: "The 4th ordered value is \\\\( 23 \\\\). It coincidentally equals the mean here, but in general the two need not match." }
      ],
      finalAnswer: "\\( x = 23^\\circ\\text{C} \\); median \\( = 23^\\circ\\text{C} \\).",
      canonicalAnswer: "23",
    },
  },
  {
    id: "y2ld-056",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 56",
    difficulty: "Challenge",
    questionText: "A researcher wants to estimate the mean daily screen time of all \\( 1200 \\) students at a sixth-form college. She stands at the library entrance one Tuesday morning and asks the first \\( 50 \\) students who enter. Critique this method for bias, and recommend a better sampling method, justifying your choice with reference to the context.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["large-data-sets", "sampling", "bias", "critique"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the sampling-frame (coverage) issue.", workingLatex: "\\\\text{library entrance} \\\\ne \\\\text{whole college roll}", explanation: "Only students who visit the library can be reached, so a large part of the \\\\( 1200 \\\\) population has zero chance of selection — this is coverage bias. The effective frame is not the target population." },
        { stepNumber: 2, description: "Identify selection bias.", workingLatex: "\\\\text{library-goers} \\\\Rightarrow \\\\text{possibly atypical screen habits}", explanation: "Students who choose the library may study more and use entertainment screens less, so the estimate of mean screen time is likely biased downward and unrepresentative of all students." },
        { stepNumber: 3, description: "Identify the timing problem.", workingLatex: "\\\\text{one Tuesday morning only}", explanation: "A single morning misses students with afternoon-only timetables or different weekday routines, adding a further source of bias from when the sample is taken." },
        { stepNumber: 4, description: "Note the selection is not random.", workingLatex: "\\\\text{“first 50”} \\\\ne \\\\text{random selection}", explanation: "Taking the first arrivals is a convenience (opportunity) sample: not every student has a known, non-zero probability of being chosen, so standard inference about the mean is unjustified." },
        { stepNumber: 5, description: "Recommend a better method.", workingLatex: "\\\\text{stratified random sample from the full roll}", explanation: "Use the complete list of \\\\( 1200 \\\\) students as the sampling frame and stratify by a relevant variable (e.g. year group or subject) so each subgroup is fairly represented." },
        { stepNumber: 6, description: "Justify the recommendation in context.", workingLatex: "n_h=\\\\frac{N_h}{N}\\\\times n", explanation: "Allocating \\\\( \\\\tfrac{N_h}{N}\\\\times n \\\\) per stratum and selecting randomly within each removes location and timing bias, gives every student a chance of selection, and guarantees proportional representation — producing a far more reliable estimate of mean daily screen time." }
      ],
      finalAnswer: "The method gives a biased convenience sample (coverage, selection and timing bias, non-random). A stratified random sample drawn from the full college roll — allocating numbers per stratum by \\( \\frac{N_h}{N}\\times n \\) — would be representative and unbiased.",
    },
  },
  {
    id: "y2ld-057",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 57",
    difficulty: "Challenge",
    questionText: "A sample of \\( 20 \\) journey times (minutes) has mean \\( 15.4 \\) and standard deviation \\( 4.2 \\). One outlier of \\( 28 \\) minutes is removed. Recompute the mean and standard deviation of the remaining \\( 19 \\) times (to \\( 3 \\) significant figures).",
    marks: 7,
    examStyle: false,
    yearCreated: 2026,
    tags: ["large-data-sets", "mean", "standard-deviation", "remove-point"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recover the original sum of values.", workingLatex: "\\\\sum x = n\\\\bar{x}=20\\\\times 15.4 = 308", explanation: "Total of the \\\\( 20 \\\\) original times, found from sum = count × mean. This is the bookkeeping needed before removing a point." },
        { stepNumber: 2, description: "Rearrange the variance formula for the sum of squares.", workingLatex: "\\\\sigma^2=\\\\frac{\\\\sum x^2}{n}-\\\\bar{x}^2 \\\\implies \\\\sum x^2 = n(\\\\sigma^2+\\\\bar{x}^2)", explanation: "We are given \\\\( \\\\sigma \\\\) and \\\\( \\\\bar{x} \\\\) but need \\\\( \\\\sum x^2 \\\\); invert the population variance formula to recover it." },
        { stepNumber: 3, description: "Evaluate the squared statistics.", workingLatex: "4.2^2=17.64,\\\\quad 15.4^2=237.16", explanation: "Square the standard deviation and the mean. A common slip is to use \\\\( \\\\sigma \\\\) instead of \\\\( \\\\sigma^2 \\\\) here." },
        { stepNumber: 4, description: "Evaluate the original sum of squares.", workingLatex: "\\\\sum x^2 = 20(17.64+237.16)=20(254.8)=5096", explanation: "Add the two squares then multiply by \\\\( n=20 \\\\) to recover \\\\( \\\\sum x^2 \\\\)." },
        { stepNumber: 5, description: "Remove the outlier from the sum of values.", workingLatex: "\\\\sum x_{\\\\text{new}}=308-28=280", explanation: "Subtract the value \\\\( 28 \\\\) from the total. The count drops from \\\\( 20 \\\\) to \\\\( 19 \\\\)." },
        { stepNumber: 6, description: "Remove the outlier from the sum of squares.", workingLatex: "\\\\sum x^2_{\\\\text{new}}=5096-28^2=5096-784=4312", explanation: "Subtract the square \\\\( 28^2=784 \\\\), not \\\\( 28 \\\\) itself, from the sum of squares." },
        { stepNumber: 7, description: "Compute the new mean.", workingLatex: "\\\\bar{x}_{\\\\text{new}}=\\\\frac{280}{19}=14.7368\\\\dots", explanation: "Divide the new total by \\\\( 19 \\\\). The mean falls because the removed value \\\\( 28 \\\\) was above the old mean." },
        { stepNumber: 8, description: "Evaluate the new variance terms.", workingLatex: "\\\\frac{4312}{19}=226.947,\\\\quad 14.7368^2=217.174", explanation: "Compute the mean of the squares and the square of the new mean, using the unrounded new mean to avoid accumulating error." },
        { stepNumber: 9, description: "Compute the new variance.", workingLatex: "\\\\sigma^2=226.947-217.174=9.773", explanation: "Apply \\\\( \\\\sigma^2=\\\\tfrac{\\\\sum x^2}{n}-\\\\bar{x}^2 \\\\) with \\\\( n=19 \\\\)." },
        { stepNumber: 10, description: "Take the square root.", workingLatex: "\\\\sigma=\\\\sqrt{9.773}=3.1262\\\\dots", explanation: "The positive square root gives the new standard deviation." },
        { stepNumber: 11, description: "Round both answers to 3 significant figures.", workingLatex: "\\\\bar{x}\\\\approx 14.7,\\\\quad \\\\sigma\\\\approx 3.13", explanation: "Removing the high outlier lowered both the mean and the spread, as expected. Both answers are to 3 significant figures." }
      ],
      finalAnswer: "New mean \\( \\approx 14.7 \\) min; new standard deviation \\( \\approx 3.13 \\) min.",
    },
  },
  {
    id: "y2ld-058",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 58",
    difficulty: "Challenge",
    questionText: "A company of \\( 1000 \\) employees is grouped by length of service: \\( 0\\text{–}5 \\) yrs \\( (320) \\), \\( 5\\text{–}10 \\) yrs \\( (280) \\), \\( 10\\text{–}15 \\) yrs \\( (240) \\), \\( 15+ \\) yrs \\( (160) \\). A stratified sample of \\( 80 \\) is required for a wellbeing survey. Determine the number from each group, showing rounding, and verify the total.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["large-data-sets", "sampling", "stratified-sampling", "rounding"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Add the four group sizes.", workingLatex: "320+280+240+160 = 1000", explanation: "Sum the service-length groups before allocating, so the proportions are based on genuine counts." },
        { stepNumber: 2, description: "Confirm the total matches the workforce N.", workingLatex: "1000 = N", explanation: "The parts equal the stated workforce \\\\( N=1000 \\\\), so the proportions are valid." },
        { stepNumber: 3, description: "State the allocation rule.", workingLatex: "n_h=\\\\frac{N_h}{N}\\\\times n,\\\\quad N=1000,\\\\ n=80", explanation: "Proportional allocation across the four strata. The common sampling fraction is \\\\( \\\\tfrac{80}{1000}=0.08 \\\\), so each group size is simply multiplied by \\\\( 0.08 \\\\)." },
        { stepNumber: 4, description: "0–5 years: form the fraction times n.", workingLatex: "\\\\frac{320}{1000}\\\\times 80 = 25.6", explanation: "Multiply the largest group by \\\\( 0.08 \\\\); keep the exact decimal \\\\( 25.6 \\\\) before rounding." },
        { stepNumber: 5, description: "0–5 years: round.", workingLatex: "25.6 \\\\to 26", explanation: "Fractional part \\\\( 0.6 > 0.5 \\\\), so round up to \\\\( 26 \\\\). This is the largest group, so it receives the most places." },
        { stepNumber: 6, description: "5–10 years: form the fraction times n.", workingLatex: "\\\\frac{280}{1000}\\\\times 80 = 22.4", explanation: "Apply the same \\\\( 0.08 \\\\) fraction to the \\\\( 280 \\\\) group." },
        { stepNumber: 7, description: "5–10 years: round.", workingLatex: "22.4 \\\\to 22", explanation: "Fractional part \\\\( 0.4 < 0.5 \\\\), so round down to \\\\( 22 \\\\)." },
        { stepNumber: 8, description: "10–15 years: form the fraction times n.", workingLatex: "\\\\frac{240}{1000}\\\\times 80 = 19.2", explanation: "Multiply the \\\\( 240 \\\\) group by \\\\( 0.08 \\\\)." },
        { stepNumber: 9, description: "10–15 years: round.", workingLatex: "19.2 \\\\to 19", explanation: "Fractional part \\\\( 0.2 < 0.5 \\\\), so round down to \\\\( 19 \\\\)." },
        { stepNumber: 10, description: "15+ years: form the fraction times n.", workingLatex: "\\\\frac{160}{1000}\\\\times 80 = 12.8", explanation: "Multiply the smallest group by \\\\( 0.08 \\\\)." },
        { stepNumber: 11, description: "15+ years: round.", workingLatex: "12.8 \\\\to 13", explanation: "Fractional part \\\\( 0.8 > 0.5 \\\\), so round up to \\\\( 13 \\\\). This is the smallest group, so it receives the fewest places." },
        { stepNumber: 12, description: "Add the rounded allocations.", workingLatex: "26+22+19+13 = 80", explanation: "Sum the rounded counts to compare against the required sample size." },
        { stepNumber: 13, description: "Verify the total equals n.", workingLatex: "80 = n\\\\ \\\\checkmark", explanation: "The rounded allocations sum to exactly \\\\( 80 \\\\), so the sample is complete with no adjustment needed. Had rounding given \\\\( 79 \\\\) or \\\\( 81 \\\\), you would tweak the stratum whose decimal was nearest \\\\( .5 \\\\) to fix the total." }
      ],
      finalAnswer: "0–5 yrs: 26, 5–10 yrs: 22, 10–15 yrs: 19, 15+ yrs: 13 (total 80).",
    },
  },
  {
    id: "y2ld-059",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 59",
    difficulty: "Challenge",
    questionText: "In a fitness study, group 1 has \\( 40 \\) participants with mean resting heart rate \\( 58 \\) bpm. Group 2 has an unknown number \\( n_2 \\) of participants with mean \\( 67 \\) bpm. The combined mean of all participants is \\( 62 \\) bpm. Find \\( n_2 \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["large-data-sets", "combined-mean", "reverse-problem"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the combined-mean equation in terms of n₂.", workingLatex: "\\\\frac{40(58)+n_2(67)}{40+n_2}=62", explanation: "Set the size-weighted mean equal to the stated combined mean \\\\( 62 \\\\). The unknown \\\\( n_2 \\\\) appears in both numerator and denominator, making this a reverse problem." },
        { stepNumber: 2, description: "Evaluate the known product in the numerator.", workingLatex: "40\\\\times 58 = 2320", explanation: "Compute group 1's total \\\\( n_1\\\\bar{x}_1=2320 \\\\) bpm-participants; the group-2 contribution \\\\( 67n_2 \\\\) stays symbolic." },
        { stepNumber: 3, description: "Clear the denominator.", workingLatex: "2320+67n_2 = 62(40+n_2)", explanation: "Multiply both sides by \\\\( (40+n_2) \\\\). Forgetting to distribute the \\\\( 62 \\\\) across both terms is the usual slip." },
        { stepNumber: 4, description: "Expand the right-hand side.", workingLatex: "2320+67n_2 = 2480+62n_2", explanation: "Distribute: \\\\( 62\\\\times 40 = 2480 \\\\) and \\\\( 62\\\\times n_2 = 62n_2 \\\\)." },
        { stepNumber: 5, description: "Collect the n₂ terms.", workingLatex: "67n_2-62n_2 = 2480-2320 \\\\implies 5n_2 = 160", explanation: "Subtract \\\\( 62n_2 \\\\) and \\\\( 2320 \\\\) from both sides to gather the unknown on one side." },
        { stepNumber: 6, description: "Solve for n₂.", workingLatex: "n_2 = \\\\frac{160}{5}=32", explanation: "Divide by \\\\( 5 \\\\). Group 2 has \\\\( 32 \\\\) participants — a sensible whole number, and the combined mean \\\\( 62 \\\\) lies between \\\\( 58 \\\\) and \\\\( 67 \\\\) as it must." },
        { stepNumber: 7, description: "Substitute back to verify.", workingLatex: "\\\\frac{2320+32(67)}{40+32}=\\\\frac{2320+2144}{72}=\\\\frac{4464}{72}=62\\\\ \\\\checkmark", explanation: "Putting \\\\( n_2=32 \\\\) back into the combined-mean formula reproduces \\\\( 62 \\\\) bpm exactly, confirming the answer." }
      ],
      finalAnswer: "\\( n_2 = 32 \\) participants.",
      canonicalAnswer: "32",
    },
  },
  {
    id: "y2ld-060",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 60",
    difficulty: "Challenge",
    questionText: "Daily commute times (minutes) are grouped as: \\( [0,10):8 \\), \\( [10,20):14 \\), \\( [20,30):f \\), \\( [30,40):10 \\), \\( [40,50):6 \\). Using linear interpolation the median is exactly \\( 24 \\) minutes (which lies in the \\( [20,30) \\) class). Find the missing frequency \\( f \\).",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["large-data-sets", "reverse-problem", "median", "grouped-data"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the total frequency in terms of f.", workingLatex: "N = 8+14+f+10+6 = 38+f", explanation: "The grand total \\\\( N \\\\) depends on the unknown \\\\( f \\\\); it will appear via \\\\( N/2 \\\\) in the interpolation formula." },
        { stepNumber: 2, description: "Find the cumulative frequency before the median class.", workingLatex: "CF_{<20}=8+14=22", explanation: "Sum the frequencies of the two classes below \\\\( [20,30) \\\\). This is the running total reached just before entering the median class." },
        { stepNumber: 3, description: "State the linear-interpolation formula for the median.", workingLatex: "\\\\text{median}=L+\\\\left(\\\\frac{N/2 - CF}{f_m}\\\\right)w", explanation: "Here \\\\( L=20 \\\\) is the lower bound of the median class, class width \\\\( w=10 \\\\), and the median-class frequency is \\\\( f_m=f \\\\)." },
        { stepNumber: 4, description: "Substitute the known quantities.", workingLatex: "24 = 20 + \\\\left(\\\\frac{\\\\frac{38+f}{2}-22}{f}\\\\right)\\\\times 10", explanation: "Insert \\\\( L=20 \\\\), \\\\( CF=22 \\\\), \\\\( w=10 \\\\), \\\\( N/2=\\\\tfrac{38+f}{2} \\\\) and the stated median \\\\( 24 \\\\). The single unknown is \\\\( f \\\\)." },
        { stepNumber: 5, description: "Subtract L from both sides.", workingLatex: "4 = \\\\frac{10\\\\left(\\\\frac{38+f}{2}-22\\\\right)}{f}", explanation: "Move \\\\( 20 \\\\) to the left to get \\\\( 24-20=4 \\\\), isolating the interpolation fraction on the right." },
        { stepNumber: 6, description: "Simplify the numerator over a common denominator.", workingLatex: "\\\\frac{38+f}{2}-22 = \\\\frac{38+f-44}{2}=\\\\frac{f-6}{2}", explanation: "Write \\\\( 22=\\\\tfrac{44}{2} \\\\) and combine; the bracket reduces neatly to \\\\( \\\\tfrac{f-6}{2} \\\\)." },
        { stepNumber: 7, description: "Reduce to a single fraction in f.", workingLatex: "4 = \\\\frac{10\\\\cdot\\\\frac{f-6}{2}}{f}=\\\\frac{5(f-6)}{f}", explanation: "The factor \\\\( \\\\tfrac{10}{2}=5 \\\\) simplifies the expression to \\\\( \\\\tfrac{5(f-6)}{f} \\\\)." },
        { stepNumber: 8, description: "Cross-multiply.", workingLatex: "4f = 5(f-6)=5f-30", explanation: "Multiply both sides by \\\\( f \\\\) and expand the bracket on the right." },
        { stepNumber: 9, description: "Collect terms and solve for f.", workingLatex: "4f-5f=-30 \\\\implies -f=-30 \\\\implies f = 30", explanation: "Gather the \\\\( f \\\\) terms; as a frequency \\\\( f \\\\) must be a non-negative whole number, and \\\\( 30 \\\\) qualifies." },
        { stepNumber: 10, description: "Compute the total and N/2 for the check.", workingLatex: "N=38+30=68,\\\\quad \\\\tfrac{N}{2}=34", explanation: "With \\\\( f=30 \\\\) the grand total is \\\\( 68 \\\\), so the median position is \\\\( N/2=34 \\\\)." },
        { stepNumber: 11, description: "Substitute back to verify.", workingLatex: "20+\\\\frac{34-22}{30}\\\\times 10 = 20+\\\\frac{12}{30}\\\\times 10 = 20+4 = 24\\\\ \\\\checkmark", explanation: "The interpolation with \\\\( f=30 \\\\) gives exactly \\\\( 24 \\\\) minutes, confirming the solution." }
      ],
      finalAnswer: "\\( f = 30 \\).",
      canonicalAnswer: "30",
    },
  },
  {
    id: "y2ld-061",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 61",
    difficulty: "Challenge",
    questionText: "The daily rainfall, \\(r\\) mm, was recorded at a weather station on \\(60\\) days. The results are summarised below.\\[\\begin{array}{c|c}\\text{Rainfall } r\\text{ (mm)} & \\text{Frequency}\\\\\\hline 0\\le r<5 & 12\\\\ 5\\le r<10 & 18\\\\ 10\\le r<20 & 20\\\\ 20\\le r<30 & 8\\\\ 30\\le r<50 & 2\\end{array}\\]\\((a)\\) Use linear interpolation, or otherwise, and the mid-points of each class to estimate the mean daily rainfall. \\((b)\\) Estimate the standard deviation of the daily rainfall. \\((c)\\) Given that the mean is greater than the median, state, with a reason, what this suggests about the skewness of the distribution. \\((d)\\) Give one reason why your answers to parts (a) and (b) are only estimates.",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["grouped-data", "mean", "standard-deviation", "skewness", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify each class width before doing anything else.", workingLatex: "\\text{widths}=5-0,\\ 10-5,\\ 20-10,\\ 30-20,\\ 50-30=5,\\ 5,\\ 10,\\ 10,\\ 20", explanation: "Width is upper boundary minus lower boundary. The classes are unequal, so you must note the widths now; the last three classes are wider than the first two. A common slip is to assume every class has width 5." },
        { stepNumber: 2, description: "Find the mid-point of the first class.", workingLatex: "x_1=\\dfrac{0+5}{2}=2.5", explanation: "The mid-point is the average of the lower and upper boundaries. This represents every reading in \\(0\\le r<5\\)." },
        { stepNumber: 3, description: "Find the mid-point of the second class.", workingLatex: "x_2=\\dfrac{5+10}{2}=7.5", explanation: "Average the boundaries 5 and 10. This represents every reading in \\(5\\le r<10\\)." },
        { stepNumber: 4, description: "Find the mid-point of the third class.", workingLatex: "x_3=\\dfrac{10+20}{2}=15", explanation: "This class has width 10, so its centre is 15, not a step of 5 from the previous mid-point. Mis-spacing the mid-points here is a frequent error." },
        { stepNumber: 5, description: "Find the mid-points of the last two classes.", workingLatex: "x_4=\\dfrac{20+30}{2}=25,\\qquad x_5=\\dfrac{30+50}{2}=40", explanation: "The fourth class (width 10) centres at 25 and the wide fifth class (width 20) centres at 40. Always centre on the class's own interval." },
        { stepNumber: 6, description: "Build the \\(fx\\) column: multiply each mid-point by its frequency.", workingLatex: "fx = 12(2.5),\\ 18(7.5),\\ 20(15),\\ 8(25),\\ 2(40) = 30,\\ 135,\\ 300,\\ 200,\\ 80", explanation: "Each product is that class's contribution to the grand total of rainfall. Keep them listed so the sum can be checked term by term." },
        { stepNumber: 7, description: "Add the \\(fx\\) column to obtain \\(\\sum fx\\).", workingLatex: "\\sum fx = 30+135+300+200+80 = 745", explanation: "Summing the column gives the estimated grand total of all 60 rainfall readings. Re-add to be sure: \\(30+135=165\\), \\(+300=465\\), \\(+200=665\\), \\(+80=745\\)." },
        { stepNumber: 8, description: "Estimate the mean by dividing \\(\\sum fx\\) by the total frequency.", workingLatex: "\\bar{x}=\\dfrac{\\sum fx}{\\sum f}=\\dfrac{745}{60}=12.41\\overline{6}=12.4\\text{ mm (3 s.f.)}", explanation: "Divide by \\(n=60\\), the total frequency. A common slip is dividing by the number of classes (5) instead of the total frequency. Keep the unrounded value \\(12.41\\overline{6}\\) for part (b)." },
        { stepNumber: 9, description: "Build the \\(fx^2\\) column: square each mid-point, then multiply by frequency.", workingLatex: "fx^2 = 12(2.5^2),\\ 18(7.5^2),\\ 20(15^2),\\ 8(25^2),\\ 2(40^2)", explanation: "Square the mid-point first, then multiply by frequency. A frequent error is to square the product \\(fx\\) instead of the mid-point \\(x\\)." },
        { stepNumber: 10, description: "Evaluate each \\(fx^2\\) term.", workingLatex: "fx^2 = 75,\\ 1012.5,\\ 4500,\\ 5000,\\ 3200", explanation: "For example \\(12\\times2.5^2=12\\times6.25=75\\) and \\(18\\times7.5^2=18\\times56.25=1012.5\\). Carry the exact decimals rather than rounding." },
        { stepNumber: 11, description: "Add the \\(fx^2\\) column to obtain \\(\\sum fx^{2}\\).", workingLatex: "\\sum fx^{2}=75+1012.5+4500+5000+3200=13787.5", explanation: "This running total feeds the variance formula. Re-add: \\(75+1012.5=1087.5\\), \\(+4500=5587.5\\), \\(+5000=10587.5\\), \\(+3200=13787.5\\)." },
        { stepNumber: 12, description: "Substitute into the variance formula.", workingLatex: "\\sigma^2=\\dfrac{\\sum fx^2}{n}-\\bar{x}^2=\\dfrac{13787.5}{60}-\\left(12.41\\overline{6}\\right)^2", explanation: "Use the form \\(\\sigma^2=\\frac{\\sum fx^2}{n}-\\bar{x}^2\\). Use the unrounded mean here; rounding \\(\\bar{x}\\) to 12.4 too soon shifts the variance noticeably." },
        { stepNumber: 13, description: "Evaluate the variance.", workingLatex: "\\sigma^2=229.79\\ldots-154.17\\ldots=75.62", explanation: "\\(13787.5/60=229.79\\) and \\(12.41\\overline{6}^2=154.17\\); the difference is the variance, 75.62. The variance is in mm²." },
        { stepNumber: 14, description: "Take the square root for the standard deviation.", workingLatex: "\\sigma=\\sqrt{75.62}=8.70\\text{ mm (3 s.f.)}", explanation: "The standard deviation is the positive square root of the variance, returning to the original units (mm)." },
        { stepNumber: 15, description: "State the skewness suggested by mean > median (part c).", workingLatex: "\\bar{x}>\\text{median}\\ \\Rightarrow\\ \\text{positive (right) skew}", explanation: "When the mean exceeds the median the distribution has positive (right) skew. The reason: a longer tail of high-rainfall days pulls the mean above the median. A common slip is to state the skew direction without giving the 'tail' reason." },
        { stepNumber: 16, description: "Explain why the answers are only estimates (part d).", workingLatex: "\\text{grouped data}\\ \\Rightarrow\\ \\text{exact values unknown}", explanation: "The raw data are grouped, so the exact rainfall within each class is unknown. Using mid-points assumes every reading sits at the centre of its class, which is generally untrue, and this introduces error into both the mean and the standard deviation." }
      ],
      finalAnswer: "(a) mean \\(\\approx 12.4\\) mm; (b) sd \\(\\approx 8.70\\) mm; (c) positive skew, since mean > median indicates a longer upper tail; (d) the data are grouped so exact values are unknown and mid-points are only approximations.",
      canonicalAnswer: "8.70",
    },
  },
  {
    id: "y2ld-062",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 62",
    difficulty: "Challenge",
    questionText: "The box plot below summarises the times, \\(t\\) minutes, taken by \\(50\\) commuters to travel to work. An outlier is defined as a value more than \\(1.5\\times\\text{IQR}\\) above the upper quartile or below the lower quartile. \\((a)\\) Write down the median and the interquartile range. \\((b)\\) Show that any time greater than \\(52\\) minutes would be classed as an outlier. \\((c)\\) The longest time recorded was \\(58\\) minutes. State whether this value is an outlier, justifying your answer. \\((d)\\) Describe the skewness of the distribution, giving a reason. \\((e)\\) A commuter claims \"half of all commuters take between 22 and 34 minutes.\" State whether the diagram supports this claim.",
    questionMafs: `<Mafs viewBox={{ x: [-0.3, 63.3], y: [0, 1] }} height={150}>
  <Line.Segment point1={[5, 0.55]} point2={[22, 0.55]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[34, 0.55]} point2={[58, 0.55]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[5, 0.43]} point2={[5, 0.67]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[58, 0.43]} point2={[58, 0.67]} color="var(--mafs-fg-accent)" />
  <Polygon points={[[22,0.35],[34,0.35],[34,0.75],[22,0.75]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} />
  <Line.Segment point1={[27, 0.35]} point2={[27, 0.75]} color="var(--mafs-fg-orange)" />
  <Text x={5} y={0.24} attach="s">5</Text>
  <Text x={22} y={0.12} attach="s">22</Text>
  <Text x={27} y={0.24} attach="s">27</Text>
  <Text x={34} y={0.12} attach="s">34</Text>
  <Text x={58} y={0.24} attach="s">58</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["box-plot", "outliers", "interpretation", "skewness"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Read the lower quartile from the diagram.", workingLatex: "Q_1=22", explanation: "The left-hand edge of the box marks the lower quartile. Read carefully against the scale to avoid mis-reading the value." },
        { stepNumber: 2, description: "Read the median from the diagram.", workingLatex: "\\text{median}=27", explanation: "The vertical line inside the box marks the median. This answers the first part of (a)." },
        { stepNumber: 3, description: "Read the upper quartile from the diagram.", workingLatex: "Q_3=34", explanation: "The right-hand edge of the box marks the upper quartile." },
        { stepNumber: 4, description: "Compute the interquartile range (part a).", workingLatex: "\\text{IQR}=Q_3-Q_1=34-22=12", explanation: "The IQR is the width of the box. A common slip is to use the whole range (max − min) instead of the box width." },
        { stepNumber: 5, description: "Compute \\(1.5\\times\\text{IQR}\\) for the fence.", workingLatex: "1.5\\times\\text{IQR}=1.5\\times12=18", explanation: "This is the allowance added beyond the upper quartile before a value counts as an outlier." },
        { stepNumber: 6, description: "Find the upper outlier fence and show it is 52 (part b).", workingLatex: "Q_3+1.5\\times\\text{IQR}=34+18=52", explanation: "Any value above this fence is an outlier, so any \\(t>52\\) is an outlier, exactly as required to show." },
        { stepNumber: 7, description: "Compare the largest value 58 with the fence (part c).", workingLatex: "58>52", explanation: "Since 58 exceeds the upper fence of 52, the time of 58 minutes is an outlier. Justify by an explicit numerical comparison, not just by stating the conclusion." },
        { stepNumber: 8, description: "Measure the upper half of the box.", workingLatex: "Q_3-\\text{median}=34-27=7", explanation: "The distance from the median to the upper quartile is 7 minutes. This is half of the skewness comparison." },
        { stepNumber: 9, description: "Measure the lower half of the box.", workingLatex: "\\text{median}-Q_1=27-22=5", explanation: "The distance from the lower quartile to the median is 5 minutes. The upper half (7) is wider than the lower half (5)." },
        { stepNumber: 10, description: "State the skewness conclusion with reason (part d).", workingLatex: "Q_3-\\text{med}=7>\\text{med}-Q_1=5", explanation: "The upper box section is wider than the lower, and the upper whisker (58−34=24) is far longer than the lower (22−5=17), so the distribution is positively (right) skewed. Quote the inequality as the supporting reason." },
        { stepNumber: 11, description: "Evaluate the commuter's claim (part e).", workingLatex: "Q_1=22,\\ Q_3=34", explanation: "The middle 50% of commuters lie between \\(Q_1=22\\) and \\(Q_3=34\\) minutes by definition of the quartiles, so the diagram does support the claim that half of all commuters take between 22 and 34 minutes." }
      ],
      finalAnswer: "(a) median \\(=27\\) min, IQR \\(=12\\) min; (b) fence \\(=34+18=52\\); (c) \\(58>52\\) so it is an outlier; (d) positive skew (longer upper whisker, \\(Q_3-\\text{med}>\\text{med}-Q_1\\)); (e) yes, the interquartile range 22 to 34 contains the middle half.",
    },
  },
  {
    id: "y2ld-063",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 63",
    difficulty: "Challenge",
    questionText: "A histogram is drawn to represent the heights, \\(h\\) cm, of \\(60\\) plants. The classes and frequencies are:\\[\\begin{array}{c|c}\\text{Height } h\\text{ (cm)} & \\text{Frequency}\\\\\\hline 150\\le h<160 & 8\\\\ 160\\le h<165 & 15\\\\ 165\\le h<170 & 22\\\\ 170\\le h<180 & 10\\\\ 180\\le h<200 & 5\\end{array}\\]\\((a)\\) Calculate the frequency density for each class. \\((b)\\) Estimate the mean height using mid-points. \\((c)\\) Use linear interpolation to estimate the median height. \\((d)\\) A student says the modal class is \\(150\\le h<160\\) because its bar is reasonably tall. Explain why this is incorrect and state the correct modal class.",
    questionMafs: `<Mafs viewBox={{ x: [148, 202], y: [-0.528, 5.192] }} height={240}>
  <Coordinates.Cartesian xAxis={{ lines: 10 }} yAxis={{ lines: 1 }} />
  <Polygon points={[[150,0],[150,0.8],[160,0.8],[160,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[160,0],[160,3],[165,3],[165,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[165,0],[165,4.4],[170,4.4],[170,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[170,0],[170,1],[180,1],[180,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[180,0],[180,0.25],[200,0.25],[200,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
</Mafs>`,
    marks: 8,
    examStyle: true,
    yearCreated: 2026,
    tags: ["histogram", "frequency-density", "median", "mean", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find each class width.", workingLatex: "\\text{widths}=160-150,\\ 165-160,\\ 170-165,\\ 180-170,\\ 200-180=10,\\ 5,\\ 5,\\ 10,\\ 20", explanation: "Width is upper boundary minus lower boundary. The classes are unequal, so each width must be found separately before any density is computed." },
        { stepNumber: 2, description: "Compute the frequency density of each class (part a).", workingLatex: "\\text{fd}=\\dfrac{f}{\\text{width}}:\\ \\tfrac{8}{10}=0.8,\\ \\tfrac{15}{5}=3.0,\\ \\tfrac{22}{5}=4.4,\\ \\tfrac{10}{10}=1.0,\\ \\tfrac{5}{20}=0.25", explanation: "Dividing each frequency by its own width gives the bar height. A common slip is to use a common width and so distort the unequal bars." },
        { stepNumber: 3, description: "List the mid-points for the mean.", workingLatex: "x=155,\\ 162.5,\\ 167.5,\\ 175,\\ 190", explanation: "Mid-point of each class, e.g. \\(\\tfrac{160+165}{2}=162.5\\) and \\(\\tfrac{180+200}{2}=190\\). The unequal-width classes still take the centre of their own interval." },
        { stepNumber: 4, description: "Build the \\(fx\\) products.", workingLatex: "fx=8(155),\\ 15(162.5),\\ 22(167.5),\\ 10(175),\\ 5(190)=1240,\\ 2437.5,\\ 3685,\\ 1750,\\ 950", explanation: "Multiply each frequency by its mid-point. Listing the five products lets you check the total term by term." },
        { stepNumber: 5, description: "Sum the products to get \\(\\sum fx\\).", workingLatex: "\\sum fx=1240+2437.5+3685+1750+950=10062.5", explanation: "Re-add to check: \\(1240+2437.5=3677.5\\), \\(+3685=7362.5\\), \\(+1750=9112.5\\), \\(+950=10062.5\\)." },
        { stepNumber: 6, description: "Estimate the mean (part b).", workingLatex: "\\bar{h}=\\dfrac{\\sum fx}{n}=\\dfrac{10062.5}{60}=167.7\\text{ cm (1 d.p.)}", explanation: "Divide by \\(n=60\\), the total frequency. The result lies inside the heaviest class \\(165\\le h<170\\), as expected." },
        { stepNumber: 7, description: "Form the cumulative frequencies.", workingLatex: "\\text{cf}: 8,\\ 8+15=23,\\ 23+22=45,\\ 45+10=55,\\ 55+5=60", explanation: "Running totals up to the upper boundary of each class. The final cf must equal \\(n=60\\) as a check." },
        { stepNumber: 8, description: "Locate the median class.", workingLatex: "\\tfrac{n}{2}=\\tfrac{60}{2}=30", explanation: "The 30th value lies in \\(165\\le h<170\\), since the cumulative frequency is 23 at 165 and reaches 45 at 170, so 30 falls inside this class." },
        { stepNumber: 9, description: "Substitute into the interpolation formula for the median.", workingLatex: "\\text{median}=165+\\dfrac{30-23}{22}\\times5", explanation: "Add to the lower boundary 165 the fraction \\(\\frac{30-23}{22}\\) (position into the class over the class frequency) of the class width 5. A common slip is using the wrong cumulative frequency before the class, or the wrong class frequency." },
        { stepNumber: 10, description: "Evaluate the median (part c).", workingLatex: "\\text{median}=165+\\dfrac{7}{22}\\times5=165+1.59=166.6\\text{ cm (1 d.p.)}", explanation: "\\(\\frac{7}{22}\\times5=1.59\\), so the estimated median height is 166.6 cm." },
        { stepNumber: 11, description: "Compare frequency densities for the modal class.", workingLatex: "\\text{fd}_{[150,160)}=0.8\\quad\\text{vs}\\quad\\text{fd}_{[165,170)}=4.4", explanation: "On a histogram with unequal widths the mode is the class with the greatest frequency density (tallest bar), not the one with the largest frequency or one that merely looks tall to the student." },
        { stepNumber: 12, description: "State and explain the correct modal class (part d).", workingLatex: "\\max(\\text{fd})=4.4\\ \\Rightarrow\\ 165\\le h<170", explanation: "The greatest frequency density is 4.4, so the modal class is \\(165\\le h<170\\), not \\(150\\le h<160\\). The student's error is judging by apparent bar height/frequency rather than by frequency density on unequal-width classes." }
      ],
      finalAnswer: "(a) fd \\(=0.8,3.0,4.4,1.0,0.25\\); (b) mean \\(\\approx167.7\\) cm; (c) median \\(\\approx166.6\\) cm; (d) the mode is the class of greatest frequency density (4.4), so the modal class is \\(165\\le h<170\\), not \\(150\\le h<160\\).",
    },
  },
  {
    id: "y2ld-064",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 64",
    difficulty: "Challenge",
    questionText: "The times, \\(t\\) minutes, taken by \\(40\\) children to complete a puzzle are grouped as follows.\\[\\begin{array}{c|c}\\text{Time } t\\text{ (min)} & \\text{Frequency}\\\\\\hline 0\\le t<4 & 6\\\\ 4\\le t<8 & 14\\\\ 8\\le t<12 & 10\\\\ 12\\le t<16 & 8\\\\ 16\\le t<20 & 2\\end{array}\\]\\((a)\\) Show that an estimate of the mean time is \\(8.6\\) minutes. \\((b)\\) Show that an estimate of the standard deviation is approximately \\(4.43\\) minutes. \\((c)\\) The teacher states that a child whose time is more than two standard deviations above the mean took an \"unusually long\" time. Determine the smallest whole number of minutes that would be classed as unusually long.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["show-that", "mean", "standard-deviation", "grouped-data"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "List the mid-points.", workingLatex: "x=\\tfrac{0+4}{2},\\ \\tfrac{4+8}{2},\\ \\tfrac{8+12}{2},\\ \\tfrac{12+16}{2},\\ \\tfrac{16+20}{2}=2,\\ 6,\\ 10,\\ 14,\\ 18", explanation: "Mid-point of each 4-minute class. The widths are all equal, so the mid-points step up by 4 each time." },
        { stepNumber: 2, description: "Build the \\(fx\\) products.", workingLatex: "fx=6(2),\\ 14(6),\\ 10(10),\\ 8(14),\\ 2(18)=12,\\ 84,\\ 100,\\ 112,\\ 36", explanation: "Multiply each mid-point by its frequency. Listing the terms makes the total easy to verify." },
        { stepNumber: 3, description: "Sum to get \\(\\sum fx\\).", workingLatex: "\\sum fx=12+84+100+112+36=344", explanation: "Re-add: \\(12+84=96\\), \\(+100=196\\), \\(+112=308\\), \\(+36=344\\)." },
        { stepNumber: 4, description: "Show the mean equals 8.6 (part a).", workingLatex: "\\bar{t}=\\dfrac{\\sum fx}{n}=\\dfrac{344}{40}=8.6", explanation: "Dividing 344 by the total frequency 40 gives exactly 8.6 minutes, as required. For a 'show that' you must reach the stated value precisely, so quote it explicitly." },
        { stepNumber: 5, description: "Build the \\(fx^2\\) products: square each mid-point, then multiply by frequency.", workingLatex: "fx^2=6(2^2),\\ 14(6^2),\\ 10(10^2),\\ 8(14^2),\\ 2(18^2)=24,\\ 504,\\ 1000,\\ 1568,\\ 648", explanation: "Square the mid-point first (e.g. \\(14\\times6^2=14\\times36=504\\)). A common slip is squaring \\(fx\\) rather than \\(x\\)." },
        { stepNumber: 6, description: "Sum to get \\(\\sum fx^{2}\\).", workingLatex: "\\sum fx^{2}=24+504+1000+1568+648=3744", explanation: "Re-add: \\(24+504=528\\), \\(+1000=1528\\), \\(+1568=3096\\), \\(+648=3744\\)." },
        { stepNumber: 7, description: "Substitute into the variance formula.", workingLatex: "\\sigma^2=\\dfrac{\\sum fx^2}{n}-\\bar{t}^2=\\dfrac{3744}{40}-8.6^2", explanation: "Use \\(\\sigma^2=\\frac{\\sum fx^2}{n}-\\bar{t}^2\\). Subtract the square of the mean, not the mean of the squares minus the mean." },
        { stepNumber: 8, description: "Evaluate the variance.", workingLatex: "\\sigma^2=93.6-73.96=19.64", explanation: "\\(3744/40=93.6\\) and \\(8.6^2=73.96\\); the difference is the variance, 19.64 (in min²)." },
        { stepNumber: 9, description: "Take the square root to show the standard deviation (part b).", workingLatex: "\\sigma=\\sqrt{19.64}=4.43\\text{ min (3 s.f.)}", explanation: "The positive square root confirms the required \\(\\sigma\\approx4.43\\) minutes." },
        { stepNumber: 10, description: "Compute the 'unusually long' threshold.", workingLatex: "\\bar{t}+2\\sigma=8.6+2(4.43)=8.6+8.86=17.46", explanation: "Two standard deviations above the mean is about 17.46 minutes. Use the unrounded \\(\\sigma=\\sqrt{19.64}=4.4317\\) if available to avoid drift, but here 4.43 is sufficient." },
        { stepNumber: 11, description: "State the smallest whole-number time (part c).", workingLatex: "t>17.46\\ \\Rightarrow\\ t=18", explanation: "The smallest whole number of minutes that strictly exceeds 17.46 is 18 minutes. A common slip is rounding 17.46 down to 17, which does not satisfy the strict 'more than' condition." }
      ],
      finalAnswer: "(a) \\(\\sum fx=344\\Rightarrow\\bar{t}=344/40=8.6\\); (b) \\(\\sigma=\\sqrt{93.6-73.96}=\\sqrt{19.64}\\approx4.43\\); (c) \\(8.6+2(4.43)=17.46\\), so \\(18\\) minutes.",
    },
  },
  {
    id: "y2ld-065",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 65",
    difficulty: "Challenge",
    questionText: "The masses, \\(m\\) kg, of \\(120\\) parcels handled by a depot are summarised by:\\[\\text{min}=20,\\ Q_1=41,\\ \\text{median}=49,\\ Q_3=58,\\ \\text{max}=95,\\ \\bar{m}=52.3.\\]An outlier is a value more than \\(1.5\\times\\text{IQR}\\) beyond the nearer quartile. \\((a)\\) Calculate the lower and upper outlier boundaries. \\((b)\\) Determine which of the listed values, if any, are outliers. \\((c)\\) Using both the quartiles and the relationship between the mean and median, describe the skewness of the distribution, giving full reasons. \\((d)\\) The depot manager suggests removing all outliers before quoting an average mass to customers. Comment on whether this is appropriate.",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["outliers", "skewness", "summary-statistics", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compute the IQR.", workingLatex: "\\text{IQR}=Q_3-Q_1=58-41=17", explanation: "The spread of the central half of the data, needed for both fences." },
        { stepNumber: 2, description: "Compute \\(1.5\\times\\text{IQR}\\).", workingLatex: "1.5\\times\\text{IQR}=1.5\\times17=25.5", explanation: "This allowance is added beyond (or subtracted below) each quartile to form the fences." },
        { stepNumber: 3, description: "Find the lower outlier boundary (part a).", workingLatex: "Q_1-1.5\\times\\text{IQR}=41-25.5=15.5", explanation: "Subtract the allowance at the lower quartile. Any value below 15.5 kg would be a low outlier." },
        { stepNumber: 4, description: "Find the upper outlier boundary (part a).", workingLatex: "Q_3+1.5\\times\\text{IQR}=58+25.5=83.5", explanation: "Add the allowance at the upper quartile. Any value above 83.5 kg would be a high outlier. Mixing up adding/subtracting at the two quartiles is a common slip." },
        { stepNumber: 5, description: "Test the minimum value against the lower boundary (part b).", workingLatex: "20>15.5", explanation: "The minimum 20 kg lies above the lower fence 15.5 kg, so it is not an outlier." },
        { stepNumber: 6, description: "Test the maximum value against the upper boundary (part b).", workingLatex: "95>83.5", explanation: "The maximum 95 kg exceeds the upper fence 83.5 kg, so it is an outlier." },
        { stepNumber: 7, description: "Compare quartile distances for skewness.", workingLatex: "Q_3-\\text{med}=58-49=9,\\quad \\text{med}-Q_1=49-41=8", explanation: "The upper quartile is slightly further from the median than the lower quartile (9 vs 8), indicating mild positive skew." },
        { stepNumber: 8, description: "Compare the mean and median.", workingLatex: "\\bar{m}=52.3>\\text{median}=49", explanation: "The mean lies above the median, which independently indicates positive skew, with a tail towards heavier parcels." },
        { stepNumber: 9, description: "Combine the evidence on skewness (part c).", workingLatex: "Q_3-\\text{med}>\\text{med}-Q_1\\ \\text{and}\\ \\bar{m}>\\text{median}", explanation: "Both the quartile comparison and mean > median point to positive (right) skew, consistent with the high outlier at 95 kg stretching the upper tail. Give both reasons explicitly for full marks." },
        { stepNumber: 10, description: "Comment on removing outliers (part d).", workingLatex: "\\text{remove }95\\text{ kg?}", explanation: "Removing the 95 kg parcel would lower the quoted average and may misrepresent the parcels customers actually send. Outliers should only be deleted if they are genuine errors; a 95 kg parcel may well be a legitimate heavy parcel, so removing it could give a misleadingly low average. Quoting the median (49 kg), which is resistant to outliers, would be a more appropriate 'typical' figure." }
      ],
      finalAnswer: "(a) boundaries 15.5 kg and 83.5 kg; (b) only the maximum 95 kg is an outlier (20 kg is not); (c) positive skew, since \\(Q_3-\\text{med}=9>\\text{med}-Q_1=8\\) and mean (52.3) > median (49); (d) not necessarily appropriate—the 95 kg parcel may be genuine, so removing it could mislead; the median is a better resistant average.",
    },
  },
  {
    id: "y2ld-066",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 66",
    difficulty: "Challenge",
    questionText: "The lengths, \\(L\\) cm, of \\(70\\) leaves are grouped as follows.\\[\\begin{array}{c|c}\\text{Length } L\\text{ (cm)} & \\text{Frequency}\\\\\\hline 20\\le L<30 & 8\\\\ 30\\le L<40 & 17\\\\ 40\\le L<50 & 25\\\\ 50\\le L<60 & 15\\\\ 60\\le L<70 & 5\\end{array}\\]\\((a)\\) Use linear interpolation to show that the median length is \\(44\\) cm. \\((b)\\) Estimate the lower and upper quartiles by linear interpolation. \\((c)\\) Estimate the interquartile range. \\((d)\\) Explain why the interquartile range may be preferred to the range as a measure of spread for these data.",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear-interpolation", "median", "quartiles", "iqr", "grouped-data"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Form the cumulative frequencies.", workingLatex: "\\text{cf}: 8,\\ 8+17=25,\\ 25+25=50,\\ 50+15=65,\\ 65+5=70", explanation: "Running totals up to the upper boundary of each class. The final cf must equal \\(n=70\\) as a check." },
        { stepNumber: 2, description: "Locate the median position.", workingLatex: "\\tfrac{n}{2}=\\tfrac{70}{2}=35", explanation: "The 35th value lies in \\(40\\le L<50\\), since the cf is 25 at 40 and reaches 50 at 50, so 35 falls inside this class." },
        { stepNumber: 3, description: "Substitute into the interpolation formula for the median.", workingLatex: "\\text{median}=40+\\dfrac{35-25}{25}\\times10", explanation: "Add to the lower boundary 40 the fraction \\(\\frac{35-25}{25}\\) (position into the class over the class frequency 25) of the width 10." },
        { stepNumber: 4, description: "Evaluate and show the median is 44 (part a).", workingLatex: "\\text{median}=40+\\dfrac{10}{25}\\times10=40+4=44", explanation: "\\(\\frac{10}{25}\\times10=4\\), giving exactly 44 cm, as required to show." },
        { stepNumber: 5, description: "Locate the lower quartile position.", workingLatex: "\\tfrac{n}{4}=\\tfrac{70}{4}=17.5", explanation: "The 17.5th value falls in \\(30\\le L<40\\) (cf 8 at 30, 25 at 40), so \\(Q_1\\) lies in this class." },
        { stepNumber: 6, description: "Interpolate for \\(Q_1\\) (part b).", workingLatex: "Q_1=30+\\dfrac{17.5-8}{17}\\times10=30+\\dfrac{9.5}{17}\\times10=35.6\\text{ cm}", explanation: "Use the cf before the class (8) and the class frequency (17). \\(\\frac{9.5}{17}\\times10=5.59\\), so \\(Q_1\\approx35.6\\) cm." },
        { stepNumber: 7, description: "Locate the upper quartile position.", workingLatex: "\\tfrac{3n}{4}=\\tfrac{3\\times70}{4}=52.5", explanation: "The 52.5th value falls in \\(50\\le L<60\\) (cf 50 at 50, 65 at 60). A common slip is using \\(\\frac{n}{4}\\) instead of \\(\\frac{3n}{4}\\) for the upper quartile." },
        { stepNumber: 8, description: "Interpolate for \\(Q_3\\) (part b).", workingLatex: "Q_3=50+\\dfrac{52.5-50}{15}\\times10=50+\\dfrac{2.5}{15}\\times10=51.7\\text{ cm}", explanation: "Use the cf before the class (50) and the class frequency (15). \\(\\frac{2.5}{15}\\times10=1.67\\), so \\(Q_3\\approx51.7\\) cm." },
        { stepNumber: 9, description: "Compute the IQR (part c).", workingLatex: "\\text{IQR}=Q_3-Q_1=51.7-35.6=16.1\\text{ cm}", explanation: "Subtract the lower quartile from the upper quartile." },
        { stepNumber: 10, description: "Explain why IQR is preferred to the range (part d).", workingLatex: "\\text{range}=\\text{max}-\\text{min}\\ \\text{(2 extremes)}", explanation: "The range uses only the two extreme values and is heavily affected by any unusually short or long leaf (an outlier). The IQR uses the middle 50% of the data, so it is more resistant to extremes and gives a more reliable picture of the typical spread." }
      ],
      finalAnswer: "(a) median \\(=40+\\frac{10}{25}\\times10=44\\) cm; (b) \\(Q_1\\approx35.6\\) cm, \\(Q_3\\approx51.7\\) cm; (c) IQR \\(\\approx16.1\\) cm; (d) the IQR is resistant to extreme values/outliers whereas the range depends only on the two extremes.",
      canonicalAnswer: "16.1",
    },
  },
  {
    id: "y2ld-067",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 67",
    difficulty: "Challenge",
    questionText: "A large data set records the daily maximum temperature at three weather stations: Station A has \\(450\\) records, Station B has \\(300\\) records and Station C has \\(250\\) records, giving \\(1000\\) records in total. A student wishes to take a stratified sample of size \\(80\\) to estimate the overall mean daily maximum temperature. \\((a)\\) Calculate the number of records that should be sampled from each station. \\((b)\\) Describe how the student could select the required records from Station A using a systematic sample, giving the sampling interval. \\((c)\\) Explain one advantage of using a stratified sample rather than a simple random sample of \\(80\\) records from the whole data set. \\((d)\\) The student takes all \\(80\\) records from the month of July only. Explain why this sample is unlikely to be representative, and suggest one improvement.",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["sampling", "stratified", "large-data-set", "reasoning", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the overall sampling fraction.", workingLatex: "\\dfrac{\\text{sample}}{\\text{population}}=\\dfrac{80}{1000}=0.08", explanation: "Each stratum is sampled in proportion to its size, i.e. 8% of every station's records." },
        { stepNumber: 2, description: "Apply the fraction to Station A.", workingLatex: "A:\\ 0.08\\times450=36", explanation: "Multiply the stratum size 450 by 0.08. This gives a whole number, so no rounding is needed." },
        { stepNumber: 3, description: "Apply the fraction to Station B.", workingLatex: "B:\\ 0.08\\times300=24", explanation: "Multiply 300 by 0.08 to get 24 records from Station B." },
        { stepNumber: 4, description: "Apply the fraction to Station C (part a).", workingLatex: "C:\\ 0.08\\times250=20", explanation: "Multiply 250 by 0.08 to get 20 records from Station C." },
        { stepNumber: 5, description: "Check the strata totals match the sample size.", workingLatex: "36+24+20=80", explanation: "The three allocations must sum to 80; if rounding had been required you would adjust one stratum so the total is exactly 80." },
        { stepNumber: 6, description: "Find the systematic sampling interval for Station A.", workingLatex: "k=\\dfrac{\\text{stratum size}}{\\text{required}}=\\dfrac{450}{36}=12.5\\approx12\\ (\\text{or }13)", explanation: "Divide the stratum size by the number required from it to get the interval \\(k\\)." },
        { stepNumber: 7, description: "Describe the systematic selection procedure (part b).", workingLatex: "\\text{random start in }1..k,\\ \\text{then every }k\\text{th record}", explanation: "List the 450 Station A records in order, choose a random starting record between 1 and \\(k\\), then take every \\(k\\)th record thereafter until 36 are selected. State the interval (\\(\\approx12\\)) explicitly." },
        { stepNumber: 8, description: "State an advantage of stratification (part c).", workingLatex: "\\text{proportional representation of each station}", explanation: "A stratified sample guarantees each station is represented in proportion to its size. A simple random sample could, by chance, badly under- or over-represent a station, so stratification reduces sampling bias and usually gives a more accurate estimate of the overall mean." },
        { stepNumber: 9, description: "Explain why July-only is unrepresentative (part d).", workingLatex: "\\text{July}\\ \\Rightarrow\\ \\text{summer only}", explanation: "Daily maximum temperature varies strongly with season. Using only July records reflects summer conditions, not the whole year, so the sample mean would over-estimate the true overall mean daily maximum temperature." },
        { stepNumber: 10, description: "Suggest an improvement (part d).", workingLatex: "\\text{sample across all months/seasons}", explanation: "Spread the records across all months/seasons of the data set — for example stratify by month as well as by station, or sample throughout the year — so that seasonal variation is properly represented." }
      ],
      finalAnswer: "(a) A: 36, B: 24, C: 20; (b) order the 450 records, random start, take every \\(\\approx\\)12th record until 36 chosen; (c) stratification guarantees proportional representation of each station, reducing bias compared with a simple random sample; (d) July only reflects summer temperatures, over-estimating the annual mean—sample across all months/seasons instead.",
      canonicalAnswer: "36",
    },
  },
  {
    id: "y2ld-068",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 68",
    difficulty: "Challenge",
    questionText: "Two groups of students sat the same test. The box plots below summarise their marks (out of 60). \\((a)\\) Compare the medians and interquartile ranges of the two groups, interpreting your answers in context. \\((b)\\) Comment on the skewness of each distribution. \\((c)\\) A teacher claims Group B performed better overall. State, with reference to the diagram, whether the data support this. \\((d)\\) Give one limitation of using a box plot to compare these two groups.",
    questionMafs: `<Mafs viewBox={{ x: [5.5, 59.5], y: [0, 1] }} height={150}>
  <Line.Segment point1={[10, 0.55]} point2={[22, 0.55]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[38, 0.55]} point2={[55, 0.55]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[10, 0.43]} point2={[10, 0.67]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[55, 0.43]} point2={[55, 0.67]} color="var(--mafs-fg-accent)" />
  <Polygon points={[[22,0.35],[38,0.35],[38,0.75],[22,0.75]]} color="var(--mafs-fg-blue)" fillOpacity={0.25} />
  <Line.Segment point1={[30, 0.35]} point2={[30, 0.75]} color="var(--mafs-fg-orange)" />
  <Text x={10} y={0.24} attach="s">10</Text>
  <Text x={22} y={0.12} attach="s">22</Text>
  <Text x={30} y={0.24} attach="s">30</Text>
  <Text x={38} y={0.12} attach="s">38</Text>
  <Text x={55} y={0.24} attach="s">55</Text>
</Mafs>`,
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["box-plot", "comparison", "interpretation", "skewness", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Read the summary values for Group A.", workingLatex: "A:\\ \\text{min }8,\\ Q_1\\,15,\\ \\text{med }20,\\ Q_3\\,27,\\ \\text{max }40", explanation: "Group A is the lower diagram: read each of the five summary values carefully against the scale." },
        { stepNumber: 2, description: "Read the summary values for Group B.", workingLatex: "B:\\ \\text{min }10,\\ Q_1\\,22,\\ \\text{med }30,\\ Q_3\\,38,\\ \\text{max }55", explanation: "Group B is the box plot shown: min 10, \\(Q_1\\) 22, median 30, \\(Q_3\\) 38, max 55." },
        { stepNumber: 3, description: "Compare the medians in context (part a).", workingLatex: "\\text{med}_B=30>\\text{med}_A=20", explanation: "Group B's median mark is 10 marks higher, so a typical Group B student scored higher than a typical Group A student." },
        { stepNumber: 4, description: "Compute the interquartile range of each group.", workingLatex: "\\text{IQR}_A=27-15=12,\\quad \\text{IQR}_B=38-22=16", explanation: "IQR is the box width for each group. Compute both before comparing." },
        { stepNumber: 5, description: "Compare the IQRs in context (part a).", workingLatex: "\\text{IQR}_B=16>\\text{IQR}_A=12", explanation: "Group B has the larger IQR, so the middle 50% of Group B's marks are more spread out — Group B is less consistent than Group A." },
        { stepNumber: 6, description: "Comment on the skewness of Group A (part b).", workingLatex: "Q_3-\\text{med}=27-20=7>\\text{med}-Q_1=20-15=5", explanation: "The upper box section (7) and the upper whisker (40−27=13 vs 15−8=7) are longer, so Group A is positively skewed." },
        { stepNumber: 7, description: "Comment on the skewness of Group B (part b).", workingLatex: "Q_3-\\text{med}=8=\\text{med}-Q_1=8;\\ \\text{upper whisker }55-38=17>38\\text{ side }22-10=12", explanation: "Group B's box is symmetric (both halves 8), but the longer upper whisker (17 vs 12) gives overall mild positive skew." },
        { stepNumber: 8, description: "Compare like-for-like statistics for the teacher's claim.", workingLatex: "\\text{min}:10>8,\\ Q_1:22>15,\\ \\text{med}:30>20,\\ Q_3:38>27,\\ \\text{max}:55>40", explanation: "Compare each Group B summary value with the matching Group A value. Every one of B's five values exceeds A's corresponding value." },
        { stepNumber: 9, description: "Evaluate the teacher's claim (part c).", workingLatex: "\\{min,Q_1,med,Q_3,max\\}_B>\\{\\cdot\\}_A\\ \\text{throughout}", explanation: "Since every summary value for B exceeds the matching value for A, the diagram supports the claim that Group B performed better overall, though Group A's marks were more consistent (smaller IQR)." },
        { stepNumber: 10, description: "State a limitation of box plots (part d).", workingLatex: "\\text{no sample size / within-quartile shape}", explanation: "A box plot does not show the number of students in each group or the shape of the distribution within each quartile (clustering or gaps), so 'overall' comparisons may hide important detail such as differing group sizes." }
      ],
      finalAnswer: "(a) Group B's median (30) exceeds A's (20), so B scored higher; B's IQR (16) > A's IQR (12), so B's marks are less consistent. (b) A: positive skew; B: roughly symmetric box with mild positive skew from the long upper whisker. (c) Supported—B's median, quartiles and maximum all exceed A's. (d) Box plots hide the sample sizes and the distribution shape within quartiles.",
    },
  },
  {
    id: "y2ld-069",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 69",
    difficulty: "Challenge",
    questionText: "The histogram below represents the waiting times, \\(w\\) minutes, of \\(85\\) patients at a clinic. The classes and frequencies are:\\[\\begin{array}{c|c}\\text{Time } w\\text{ (min)} & \\text{Frequency}\\\\\\hline 0\\le w<5 & 10\\\\ 5\\le w<10 & 24\\\\ 10\\le w<15 & 30\\\\ 15\\le w<25 & 16\\\\ 25\\le w<40 & 5\\end{array}\\]\\((a)\\) Calculate the frequency density for each class. \\((b)\\) Estimate the number of patients who waited more than \\(20\\) minutes. \\((c)\\) The clinic advertises a \"typical wait of about 10 minutes.\" Using an estimate of the mean, comment on whether this advert is justified. \\((d)\\) Explain one reason why quoting a single 'typical' waiting time could be misleading for these data.",
    questionMafs: `<Mafs viewBox={{ x: [-1.6, 41.6], y: [-0.72, 7.08] }} height={240}>
  <Coordinates.Cartesian xAxis={{ lines: 10 }} yAxis={{ lines: 1 }} />
  <Polygon points={[[0,0],[0,2],[5,2],[5,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[5,0],[5,4.8],[10,4.8],[10,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[10,0],[10,6],[15,6],[15,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[15,0],[15,1.6],[25,1.6],[25,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
  <Polygon points={[[25,0],[25,0.33],[40,0.33],[40,0]]} color="var(--mafs-fg-blue)" fillOpacity={0.2} />
</Mafs>`,
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["histogram", "frequency-density", "estimation", "interpretation", "criticism"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find each class width.", workingLatex: "\\text{widths}=5,\\ 5,\\ 5,\\ 25-15=10,\\ 40-25=15", explanation: "Upper minus lower boundary for each class. The last two classes are wider, which matters for both the densities and the part (b) interpolation." },
        { stepNumber: 2, description: "Compute the frequency densities (part a).", workingLatex: "\\text{fd}=\\dfrac{f}{\\text{width}}:\\ \\tfrac{10}{5}=2.0,\\ \\tfrac{24}{5}=4.8,\\ \\tfrac{30}{5}=6.0,\\ \\tfrac{16}{10}=1.6,\\ \\tfrac{5}{15}=0.33", explanation: "Divide each frequency by its own class width to get the bar heights. A common slip is to forget the wider widths and over-state the last two bars." },
        { stepNumber: 3, description: "Estimate the portion of the 15–25 class above 20 minutes.", workingLatex: "\\dfrac{25-20}{25-15}\\times16=\\dfrac{5}{10}\\times16=8", explanation: "Assume an even spread within \\(15\\le w<25\\); the part above 20 is half the class, giving 8 patients." },
        { stepNumber: 4, description: "Add the patients in the final class (part b).", workingLatex: "8+5=13", explanation: "Every patient in \\(25\\le w<40\\) waited more than 20 minutes, so add all 5. About 13 patients waited more than 20 minutes." },
        { stepNumber: 5, description: "List the mid-points for the mean.", workingLatex: "x=2.5,\\ 7.5,\\ 12.5,\\ 20,\\ 32.5", explanation: "Mid-point of each class. The wider last classes take the centre of their own (wider) interval, e.g. \\(\\tfrac{15+25}{2}=20\\) and \\(\\tfrac{25+40}{2}=32.5\\)." },
        { stepNumber: 6, description: "Build and sum the \\(fx\\) products.", workingLatex: "\\sum fx=10(2.5)+24(7.5)+30(12.5)+16(20)+5(32.5)=25+180+375+320+162.5=1062.5", explanation: "Mid-point times frequency for each class, then summed. Listing the five products lets you check the total." },
        { stepNumber: 7, description: "Estimate the mean and compare with the advert (part c).", workingLatex: "\\bar{w}=\\dfrac{\\sum fx}{n}=\\dfrac{1062.5}{85}=12.5>10", explanation: "The estimated mean wait is about 12.5 minutes, noticeably more than the advertised 10 minutes, so 'a typical wait of about 10 minutes' understates the average and is not well justified." },
        { stepNumber: 8, description: "Explain why a single 'typical' value misleads (part d).", workingLatex: "\\text{range }0\\to40,\\ \\text{positive skew}", explanation: "Waiting times spread from under 5 to nearly 40 minutes and the distribution is positively skewed, so no single value captures everyone's experience — many patients wait far longer than 10 minutes. Quoting only one figure hides this variability." }
      ],
      finalAnswer: "(a) fd \\(=2.0,4.8,6.0,1.6,0.33\\); (b) about 13 patients; (c) estimated mean \\(\\approx12.5\\) min > advertised 10 min, so the advert understates the typical wait; (d) the times are widely spread and positively skewed, so one figure cannot represent everyone's wait.",
      canonicalAnswer: "13",
    },
  },
  {
    id: "y2ld-070",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 70",
    difficulty: "Challenge",
    questionText: "The monthly rainfall totals, \\(r\\) mm, recorded over \\(40\\) months are grouped below.\\[\\begin{array}{c|c}\\text{Rainfall } r\\text{ (mm)} & \\text{Frequency}\\\\\\hline 0\\le r<10 & 3\\\\ 10\\le r<20 & 7\\\\ 20\\le r<30 & 15\\\\ 30\\le r<40 & 10\\\\ 40\\le r<50 & 5\\end{array}\\]\\((a)\\) Show that an estimate of the mean is \\(26.75\\) mm. \\((b)\\) Show that an estimate of the standard deviation is approximately \\(10.9\\) mm. \\((c)\\) An outlier is defined as any value more than \\(2\\) standard deviations from the mean. A month recorded \\(49\\) mm of rainfall. Determine whether this could be classed as an outlier. \\((d)\\) State, with a reason, whether the mean and standard deviation are appropriate summary measures if the data contain one extremely wet month of \\(120\\) mm.",
    marks: 8,
    examStyle: true,
    yearCreated: 2026,
    tags: ["show-that", "mean", "standard-deviation", "grouped-data", "outliers", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "List the mid-points.", workingLatex: "x=\\tfrac{0+10}{2},\\ \\tfrac{10+20}{2},\\ \\tfrac{20+30}{2},\\ \\tfrac{30+40}{2},\\ \\tfrac{40+50}{2}=5,\\ 15,\\ 25,\\ 35,\\ 45", explanation: "Mid-point of each 10 mm class. Equal widths, so mid-points rise by 10 each time." },
        { stepNumber: 2, description: "Build and sum the \\(fx\\) products.", workingLatex: "\\sum fx=3(5)+7(15)+15(25)+10(35)+5(45)=15+105+375+350+225=1070", explanation: "Multiply each mid-point by its frequency and add. Re-add: \\(15+105=120\\), \\(+375=495\\), \\(+350=845\\), \\(+225=1070\\)." },
        { stepNumber: 3, description: "Show the mean equals 26.75 (part a).", workingLatex: "\\bar{r}=\\dfrac{\\sum fx}{n}=\\dfrac{1070}{40}=26.75", explanation: "Dividing 1070 by the total frequency 40 gives exactly 26.75 mm, as required for the 'show that'. Quote the value explicitly." },
        { stepNumber: 4, description: "Build the \\(fx^2\\) products: square each mid-point, then multiply by frequency.", workingLatex: "fx^2=3(25),\\ 7(225),\\ 15(625),\\ 10(1225),\\ 5(2025)=75,\\ 1575,\\ 9375,\\ 12250,\\ 10125", explanation: "Square each mid-point first (e.g. \\(15(225)=1575\\)). Squaring \\(fx\\) instead of \\(x\\) is a common slip." },
        { stepNumber: 5, description: "Sum to get \\(\\sum fx^{2}\\).", workingLatex: "\\sum fx^{2}=75+1575+9375+12250+10125=33400", explanation: "Re-add: \\(75+1575=1650\\), \\(+9375=11025\\), \\(+12250=23275\\), \\(+10125=33400\\)." },
        { stepNumber: 6, description: "Substitute into the variance formula.", workingLatex: "\\sigma^2=\\dfrac{\\sum fx^2}{n}-\\bar{r}^2=\\dfrac{33400}{40}-26.75^2", explanation: "Use \\(\\sigma^2=\\frac{\\sum fx^2}{n}-\\bar{r}^2\\) with the exact mean to avoid rounding error." },
        { stepNumber: 7, description: "Evaluate the variance.", workingLatex: "\\sigma^2=835-715.5625=119.4375", explanation: "\\(33400/40=835\\) and \\(26.75^2=715.5625\\); the difference is the variance, 119.4375 (in mm²)." },
        { stepNumber: 8, description: "Take the square root to show the standard deviation (part b).", workingLatex: "\\sigma=\\sqrt{119.4375}=10.93=10.9\\text{ mm (3 s.f.)}", explanation: "The positive square root confirms \\(\\sigma\\approx10.9\\) mm, as required." },
        { stepNumber: 9, description: "Compute the upper outlier boundary.", workingLatex: "\\bar{r}+2\\sigma=26.75+2(10.93)=26.75+21.86=48.6", explanation: "Two standard deviations above the mean is about 48.6 mm. Use the unrounded \\(\\sigma=10.93\\) so the boundary is accurate to one decimal place; rounding \\(\\sigma\\) to 10.9 would still give 48.55, but the unrounded value is safer near the boundary." },
        { stepNumber: 10, description: "Decide whether 49 mm is an outlier (part c).", workingLatex: "49>48.6", explanation: "Since 49 mm exceeds the upper boundary of 48.6 mm, the value would just be classed as an outlier. The margin is small, so working with an unrounded \\(\\sigma\\) is important here." },
        { stepNumber: 11, description: "Comment on suitability with a 120 mm month (part d).", workingLatex: "120\\ \\text{far above data}\\ \\Rightarrow\\ \\text{inflates }\\bar{r},\\sigma", explanation: "A single value of 120 mm is far above the rest of the data and would substantially inflate both the mean and (especially) the standard deviation, since both use every value and are not resistant to extremes. The median and interquartile range would give a more reliable summary of typical monthly rainfall in that case." }
      ],
      finalAnswer: "(a) \\(\\sum fx=1070\\Rightarrow\\bar{r}=1070/40=26.75\\); (b) \\(\\sigma=\\sqrt{835-715.5625}=\\sqrt{119.44}\\approx10.9\\); (c) \\(\\bar{r}+2\\sigma\\approx48.6\\) and \\(49>48.6\\), so yes, 49 mm is (just) an outlier; (d) no—a 120 mm month would distort the mean and sd, so median/IQR would be more appropriate.",
    },
  },
  {
    id: "y2ld-071",
    topicRef: "y2ld",
    topicTitle: "Large Data Sets & Data in Context 71",
    difficulty: "Challenge",
    questionText: "The journey times, \\(t\\) minutes, of commuters on two routes to a city were recorded. Route X (\\(50\\) commuters) and Route Y (\\(50\\) commuters) gave the grouped data:\\[\\begin{array}{c|c|c}\\text{Time } t\\text{ (min)} & \\text{Route X freq} & \\text{Route Y freq}\\\\\\hline 10\\le t<20 & 9 & 4\\\\ 20\\le t<30 & 18 & 14\\\\ 30\\le t<40 & 15 & 20\\\\ 40\\le t<50 & 6 & 9\\\\ 50\\le t<60 & 2 & 3\\end{array}\\]\\((a)\\) Estimate the mean journey time for each route. \\((b)\\) Estimate the standard deviation of the journey times for Route X. \\((c)\\) Compare the two routes in context, referring to your statistics. \\((d)\\) A commuter who values reliability asks which route to take. Using your results, advise the commuter and state one further piece of information that would help the decision.",
    marks: 8,
    examStyle: true,
    yearCreated: 2026,
    tags: ["comparison", "grouped-data", "mean", "standard-deviation", "interpretation", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "List the mid-points.", workingLatex: "x=15,\\ 25,\\ 35,\\ 45,\\ 55", explanation: "Mid-point of each 10-minute class, e.g. \\(\\tfrac{10+20}{2}=15\\). The same mid-points serve both routes." },
        { stepNumber: 2, description: "Build the Route X \\(fx\\) products and sum them.", workingLatex: "9(15)+18(25)+15(35)+6(45)+2(55)=135+450+525+270+110=1490", explanation: "Multiply each mid-point by Route X's frequency and add. Listing the five products lets you verify the total \\(\\sum fx=1490\\)." },
        { stepNumber: 3, description: "Estimate the Route X mean (part a).", workingLatex: "\\bar{x}_X=\\dfrac{1490}{50}=29.8\\text{ min}", explanation: "Divide \\(\\sum fx=1490\\) by 50 commuters." },
        { stepNumber: 4, description: "Build the Route Y \\(fx\\) products and sum them.", workingLatex: "4(15)+14(25)+20(35)+9(45)+3(55)=60+350+700+405+165=1680", explanation: "Use Route Y's own frequencies, not X's. The total is \\(\\sum fx=1680\\)." },
        { stepNumber: 5, description: "Estimate the Route Y mean (part a).", workingLatex: "\\bar{x}_Y=\\dfrac{1680}{50}=33.6\\text{ min}", explanation: "Divide \\(\\sum fx=1680\\) by 50 commuters." },
        { stepNumber: 6, description: "Build the Route X \\(fx^2\\) products: square each mid-point, then multiply by frequency.", workingLatex: "9(225)+18(625)+15(1225)+6(2025)+2(3025)=2025+11250+18375+12150+6050", explanation: "Square the mid-point (not \\(fx\\)), then multiply by Route X's frequency. This is the key point that trips students up." },
        { stepNumber: 7, description: "Sum to get \\(\\sum fx^2\\) for Route X.", workingLatex: "\\sum fx^2=2025+11250+18375+12150+6050=49850", explanation: "Re-add: \\(2025+11250=13275\\), \\(+18375=31650\\), \\(+12150=43800\\), \\(+6050=49850\\)." },
        { stepNumber: 8, description: "Compute the Route X variance.", workingLatex: "\\sigma_X^2=\\dfrac{\\sum fx^2}{n}-\\bar{x}_X^2=\\dfrac{49850}{50}-29.8^2=997-888.04=108.96", explanation: "Use \\(\\sigma^2=\\frac{\\sum fx^2}{n}-\\bar{x}^2\\). Subtract the square of the mean (\\(29.8^2=888.04\\))." },
        { stepNumber: 9, description: "Take the square root for the Route X standard deviation (part b).", workingLatex: "\\sigma_X=\\sqrt{108.96}=10.4\\text{ min (3 s.f.)}", explanation: "The positive square root gives the spread of Route X's times in minutes." },
        { stepNumber: 10, description: "Compare the routes in context (part c).", workingLatex: "\\bar{x}_X=29.8<\\bar{x}_Y=33.6", explanation: "Route X has the smaller mean journey time — about 4 minutes quicker on average — so on average Route X is faster. The most common (modal) class is \\(20\\le t<30\\) for X but \\(30\\le t<40\\) for Y, consistent with Y being slower." },
        { stepNumber: 11, description: "Advise the reliability-focused commuter (part d).", workingLatex: "\\text{reliability}\\ \\equiv\\ \\text{smaller spread}", explanation: "Reliability is about consistency, measured by spread (standard deviation or IQR), not just the average. Route X is faster on average, but to compare reliability the commuter needs the spread of both routes. The further information required is the standard deviation (or IQR) of Route Y, so the two spreads can be compared — a smaller spread means a more predictable journey time." }
      ],
      finalAnswer: "(a) \\(\\bar{x}_X=29.8\\) min, \\(\\bar{x}_Y=33.6\\) min; (b) \\(\\sigma_X=\\sqrt{997-888.04}\\approx10.4\\) min; (c) Route X is on average about 4 minutes faster, with its modal class lower than Y's; (d) advise Route X for speed, but for reliability compare spreads—the extra information needed is the standard deviation/IQR of Route Y.",
    },
  },
];
