import { Question } from "@/lib/types";

/**
 * Year 2 — Statistics § Conditional Probability
 * Ref: y2cp
 * 71 questions. Diagrams: Mafs figures (questionMafs / step.mafs).
 */
export const questions: Question[] = [
  {
    id: "y2cp-001",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "For two events \\( A \\) and \\( B \\), \\( P(A\\cap B)=0.18 \\) and \\( P(B)=0.45 \\). Find \\( P(A\\mid B) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["conditional probability", "formula"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the conditional probability formula.", workingLatex: "P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}", explanation: "\\( P(A\\mid B) \\) means the probability of \\( A \\) given that \\( B \\) has happened. The bar \\( \\mid \\) tells us to divide by the probability of the event we are conditioning on, which is \\( B \\)." },
        { stepNumber: 2, description: "Identify the value of the numerator from the question.", workingLatex: "P(A\\cap B)=0.18", explanation: "The numerator is the probability of both events happening together. A common slip is to confuse \\( P(A\\cap B) \\) (both happen) with \\( P(A\\mid B) \\) (the answer we want) — here \\( 0.18 \\) is the intersection." },
        { stepNumber: 3, description: "Identify the value of the denominator from the question.", workingLatex: "P(B)=0.45", explanation: "We are conditioning on \\( B \\), so \\( P(B)=0.45 \\) goes on the bottom. Make sure you divide by \\( P(B) \\) and not \\( P(A) \\)." },
        { stepNumber: 4, description: "Substitute both values into the formula.", workingLatex: "P(A\\mid B)=\\frac{0.18}{0.45}", explanation: "Place the intersection on top and the conditioning event on the bottom. Putting them the wrong way round is the most common error here." },
        { stepNumber: 5, description: "Carry out the division.", workingLatex: "\\frac{0.18}{0.45}=\\frac{18}{45}=0.4", explanation: "Multiplying top and bottom by \\( 100 \\) turns the decimals into \\( \\tfrac{18}{45} \\), which divides exactly to give \\( 0.4 \\)." }
      ],
      finalAnswer: "\\( P(A\\mid B)=0.4 \\)",
      canonicalAnswer: "0.4",
    },
  },
  {
    id: "y2cp-002",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Events \\( C \\) and \\( D \\) satisfy \\( P(C\\cap D)=\\tfrac{3}{20} \\) and \\( P(D)=\\tfrac{1}{2} \\). Find \\( P(C\\mid D) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["conditional probability", "formula"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the conditional probability formula.", workingLatex: "P(C\\mid D)=\\frac{P(C\\cap D)}{P(D)}", explanation: "We want \\( C \\) given \\( D \\), so we divide the probability of both by the probability of \\( D \\), the event we are told has happened." },
        { stepNumber: 2, description: "Identify the numerator from the question.", workingLatex: "P(C\\cap D)=\\tfrac{3}{20}", explanation: "The intersection \\( \\tfrac{3}{20} \\) is the chance both \\( C \\) and \\( D \\) occur, and this goes on top." },
        { stepNumber: 3, description: "Identify the denominator from the question.", workingLatex: "P(D)=\\tfrac{1}{2}", explanation: "We condition on \\( D \\), so \\( \\tfrac{1}{2} \\) goes on the bottom. Do not divide by \\( P(C) \\), which we are not even given." },
        { stepNumber: 4, description: "Substitute the two fractions into the formula.", workingLatex: "P(C\\mid D)=\\frac{3/20}{1/2}", explanation: "This is a fraction divided by a fraction, so the next move is to divide them." },
        { stepNumber: 5, description: "Divide by multiplying by the reciprocal.", workingLatex: "\\frac{3}{20}\\div\\frac{1}{2}=\\frac{3}{20}\\times\\frac{2}{1}", explanation: "To divide by \\( \\tfrac{1}{2} \\) we flip it to \\( \\tfrac{2}{1} \\) and multiply. Forgetting to flip the second fraction is a frequent mistake." },
        { stepNumber: 6, description: "Multiply and simplify the fraction.", workingLatex: "\\frac{3\\times 2}{20\\times 1}=\\frac{6}{20}=\\frac{3}{10}", explanation: "Multiply the tops and the bottoms to get \\( \\tfrac{6}{20} \\), then cancel a factor of \\( 2 \\) to reach \\( \\tfrac{3}{10} \\)." }
      ],
      finalAnswer: "\\( P(C\\mid D)=\\tfrac{3}{10} \\)",
      canonicalAnswer: "3/10",
    },
  },
  {
    id: "y2cp-003",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Given that \\( P(A)=0.37 \\), write down the value of \\( P(A') \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["complement", "total probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the complement rule.", workingLatex: "P(A')=1-P(A)", explanation: "The notation \\( A' \\) means 'not \\( A \\)'. An event and its complement together cover every outcome, so their probabilities add to \\( 1 \\)." },
        { stepNumber: 2, description: "Substitute the given probability.", workingLatex: "P(A')=1-0.37", explanation: "Insert \\( P(A)=0.37 \\). Remember to subtract from \\( 1 \\), not from \\( 100 \\) or any other total." },
        { stepNumber: 3, description: "Carry out the subtraction.", workingLatex: "1-0.37=0.63", explanation: "Subtracting gives \\( 0.63 \\). As a quick check, \\( 0.37+0.63=1 \\), which it must for a complement." }
      ],
      finalAnswer: "\\( P(A')=0.63 \\)",
      canonicalAnswer: "0.63",
    },
  },
  {
    id: "y2cp-004",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Events \\( A \\) and \\( B \\) have \\( P(A)=0.5 \\), \\( P(B)=0.4 \\) and \\( P(A\\cap B)=0.15 \\). Find \\( P(A\\cup B) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["union", "addition rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the addition rule for the union.", workingLatex: "P(A\\cup B)=P(A)+P(B)-P(A\\cap B)", explanation: "Adding \\( P(A) \\) and \\( P(B) \\) counts the overlap twice, so we subtract \\( P(A\\cap B) \\) once to correct this." },
        { stepNumber: 2, description: "Identify each quantity from the question.", workingLatex: "P(A)=0.5,\\quad P(B)=0.4,\\quad P(A\\cap B)=0.15", explanation: "Listing the three values first helps avoid putting the overlap in the wrong place. The intersection is the one that gets subtracted." },
        { stepNumber: 3, description: "Substitute the values into the rule.", workingLatex: "P(A\\cup B)=0.5+0.4-0.15", explanation: "Place \\( P(A) \\) and \\( P(B) \\) as additions and the intersection as a subtraction. A common slip is to add the overlap instead of subtracting it." },
        { stepNumber: 4, description: "Add the first two terms.", workingLatex: "0.5+0.4=0.9", explanation: "Combine \\( P(A) \\) and \\( P(B) \\) first to keep the arithmetic simple." },
        { stepNumber: 5, description: "Subtract the overlap.", workingLatex: "0.9-0.15=0.75", explanation: "Removing the double-counted overlap gives the union probability \\( 0.75 \\)." }
      ],
      finalAnswer: "\\( P(A\\cup B)=0.75 \\)",
      canonicalAnswer: "0.75",
    },
  },
  {
    id: "y2cp-005",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "A class of \\( 42 \\) students study Maths \\( (M) \\) and Physics \\( (P) \\). The Venn diagram shows the numbers in each region. A student is chosen at random. Given that the student studies Maths, find the probability that they also study Physics.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>M</Text>
  <Text x={8.3} y={5.9}>P</Text>
  <Text x={2.7} y={3.4}>18</Text>
  <Text x={5} y={3.4}>7</Text>
  <Text x={7.3} y={3.4}>12</Text>
  <Text x={9.2} y={0.7}>5</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["venn diagram", "conditional probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Decide what 'given Maths' tells us.", workingLatex: "P(P\\mid M)=\\frac{n(M\\cap P)}{n(M)}", explanation: "The word 'given that the student studies Maths' restricts us to the Maths circle, so we divide by the number who study Maths, not by the whole class of \\( 42 \\)." },
        { stepNumber: 2, description: "Read the Maths-only and overlap counts from the diagram.", workingLatex: "\\text{Maths only}=18,\\quad \\text{both}=7", explanation: "The Maths circle is made of its own-only region and the overlap shared with Physics." },
        { stepNumber: 3, description: "Add these to find the number studying Maths.", workingLatex: "n(M)=18+7=25", explanation: "Every student in the Maths circle counts, so include the \\( 7 \\) who also do Physics. Using only the \\( 18 \\) Maths-only students is a common error." },
        { stepNumber: 4, description: "Identify the favourable count.", workingLatex: "n(M\\cap P)=7", explanation: "Of the Maths students, the ones who also study Physics are exactly those in the overlap, which is \\( 7 \\)." },
        { stepNumber: 5, description: "Substitute into the conditional probability formula.", workingLatex: "P(P\\mid M)=\\frac{7}{25}", explanation: "Divide the overlap \\( 7 \\) by the Maths total \\( 25 \\). Dividing by \\( 42 \\) instead would ignore the 'given Maths' condition." }
      ],
      finalAnswer: "\\( P(P\\mid M)=\\tfrac{7}{25} \\)",
      canonicalAnswer: "7/25",
    },
  },
  {
    id: "y2cp-006",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The Venn diagram shows the number of people in a survey of \\( 50 \\) who own a dog \\( (D) \\) or a cat \\( (C) \\). One person is chosen at random. Find \\( P(D\\cap C) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>D</Text>
  <Text x={8.3} y={5.9}>C</Text>
  <Text x={2.7} y={3.4}>16</Text>
  <Text x={5} y={3.4}>9</Text>
  <Text x={7.3} y={3.4}>14</Text>
  <Text x={9.2} y={0.7}>11</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["venn diagram", "intersection"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Interpret the notation \\( D\\cap C \\).", workingLatex: "D\\cap C=\\text{own both a dog and a cat}", explanation: "The symbol \\( \\cap \\) means 'and', so we want people in the overlap of the two circles." },
        { stepNumber: 2, description: "Read the overlap count from the diagram.", workingLatex: "n(D\\cap C)=9", explanation: "The central region where the circles cross shows \\( 9 \\) people. Do not add the dog-only or cat-only numbers — those people own only one pet." },
        { stepNumber: 3, description: "Identify the total number surveyed.", workingLatex: "\\text{total}=50", explanation: "The question states \\( 50 \\) people were surveyed, which is the denominator for any probability here." },
        { stepNumber: 4, description: "Form the probability as a fraction of the total.", workingLatex: "P(D\\cap C)=\\frac{9}{50}", explanation: "Divide the favourable count \\( 9 \\) by the total \\( 50 \\). This fraction does not simplify since \\( 9 \\) and \\( 50 \\) share no common factor." }
      ],
      finalAnswer: "\\( P(D\\cap C)=\\tfrac{9}{50} \\)",
      canonicalAnswer: "9/50",
    },
  },
  {
    id: "y2cp-007",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 07",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Using the Venn diagram for the survey of \\( 50 \\) people owning a dog \\( (D) \\) or a cat \\( (C) \\), find \\( P(D\\cap C') \\), the probability that a randomly chosen person owns a dog but not a cat.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>D</Text>
  <Text x={8.3} y={5.9}>C</Text>
  <Text x={2.7} y={3.4}>16</Text>
  <Text x={5} y={3.4}>9</Text>
  <Text x={7.3} y={3.4}>14</Text>
  <Text x={9.2} y={0.7}>11</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["venn diagram", "set notation", "only A"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Interpret the set notation \\( D\\cap C' \\).", workingLatex: "D\\cap C'=\\text{in } D \\text{ but not in } C", explanation: "\\( C' \\) means 'not a cat owner', so \\( D\\cap C' \\) is the part inside the dog circle that lies outside the cat circle — the dog-only region." },
        { stepNumber: 2, description: "Locate the dog-only region on the diagram.", workingLatex: "n(D\\cap C')=16", explanation: "This is the part of the dog circle that does not overlap the cat circle, which holds \\( 16 \\) people. A common slip is to include the \\( 9 \\) overlap people, but they do own a cat." },
        { stepNumber: 3, description: "Identify the total surveyed.", workingLatex: "\\text{total}=50", explanation: "All probabilities are out of the \\( 50 \\) people in the survey." },
        { stepNumber: 4, description: "Write the probability as a fraction.", workingLatex: "P(D\\cap C')=\\frac{16}{50}", explanation: "Put the dog-only count over the total. The next step is to simplify." },
        { stepNumber: 5, description: "Simplify the fraction.", workingLatex: "\\frac{16}{50}=\\frac{8}{25}", explanation: "Both \\( 16 \\) and \\( 50 \\) divide by \\( 2 \\), giving \\( \\tfrac{8}{25} \\)." }
      ],
      finalAnswer: "\\( P(D\\cap C')=\\tfrac{8}{25} \\)",
      canonicalAnswer: "8/25",
    },
  },
  {
    id: "y2cp-008",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 08",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The Venn diagram shows probabilities for two events \\( A \\) and \\( B \\). Find \\( P(A\\cup B) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>A</Text>
  <Text x={8.3} y={5.9}>B</Text>
  <Text x={2.7} y={3.4}>0.22</Text>
  <Text x={5} y={3.4}>0.13</Text>
  <Text x={7.3} y={3.4}>0.30</Text>
  <Text x={9.2} y={0.7}>0.35</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["venn diagram", "union", "probabilities"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Decide which regions belong to the union.", workingLatex: "A\\cup B=\\text{everything inside either circle}", explanation: "\\( A\\cup B \\) means 'in \\( A \\) or \\( B \\) or both', so it includes all three inner regions but excludes the outside region." },
        { stepNumber: 2, description: "List the three inner probabilities from the diagram.", workingLatex: "\\text{A only}=0.22,\\ \\text{both}=0.13,\\ \\text{B only}=0.30", explanation: "Read each region directly off the Venn diagram. The outside value \\( 0.35 \\) is deliberately left out of the union." },
        { stepNumber: 3, description: "Add the three inner regions.", workingLatex: "P(A\\cup B)=0.22+0.13+0.30", explanation: "Because the diagram already splits the overlap out as its own region \\( 0.13 \\), we simply add the parts and there is no double-counting to correct." },
        { stepNumber: 4, description: "Evaluate the sum.", workingLatex: "0.22+0.13+0.30=0.65", explanation: "Adding the three probabilities gives \\( 0.65 \\)." },
        { stepNumber: 5, description: "Check using the outside region.", workingLatex: "1-0.35=0.65", explanation: "The union is the complement of 'neither event'. Since the outside is \\( 0.35 \\), the union must be \\( 1-0.35=0.65 \\), confirming the answer." }
      ],
      finalAnswer: "\\( P(A\\cup B)=0.65 \\)",
      canonicalAnswer: "0.65",
    },
  },
  {
    id: "y2cp-009",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 09",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Using the Venn diagram of probabilities for events \\( A \\) and \\( B \\), find \\( P(A\\mid B) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>A</Text>
  <Text x={8.3} y={5.9}>B</Text>
  <Text x={2.7} y={3.4}>0.22</Text>
  <Text x={5} y={3.4}>0.13</Text>
  <Text x={7.3} y={3.4}>0.30</Text>
  <Text x={9.2} y={0.7}>0.35</Text>
</Mafs>`,
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["venn diagram", "conditional probability", "probabilities"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the conditional probability formula.", workingLatex: "P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}", explanation: "We want \\( A \\) given \\( B \\), so we divide the overlap probability by the total probability of \\( B \\)." },
        { stepNumber: 2, description: "Read the regions that make up \\( B \\).", workingLatex: "\\text{B only}=0.30,\\quad \\text{both}=0.13", explanation: "The whole \\( B \\) circle is its own-only part plus the overlap shared with \\( A \\)." },
        { stepNumber: 3, description: "Add these to find \\( P(B) \\).", workingLatex: "P(B)=0.13+0.30=0.43", explanation: "Include the overlap \\( 0.13 \\) — those outcomes are still inside \\( B \\). Using only \\( 0.30 \\) is a common error." },
        { stepNumber: 4, description: "Identify \\( P(A\\cap B) \\) from the diagram.", workingLatex: "P(A\\cap B)=0.13", explanation: "The intersection is the central overlap region, which is \\( 0.13 \\)." },
        { stepNumber: 5, description: "Substitute into the formula.", workingLatex: "P(A\\mid B)=\\frac{0.13}{0.43}", explanation: "Put the overlap on top and \\( P(B) \\) on the bottom. Dividing by \\( P(A) \\) instead would answer the wrong question." },
        { stepNumber: 6, description: "Simplify and evaluate.", workingLatex: "\\frac{0.13}{0.43}=\\frac{13}{43}\\approx 0.302", explanation: "Multiplying top and bottom by \\( 100 \\) gives the exact fraction \\( \\tfrac{13}{43} \\), which is about \\( 0.302 \\) as a decimal." }
      ],
      finalAnswer: "\\( P(A\\mid B)=\\tfrac{13}{43}\\approx 0.302 \\)",
      canonicalAnswer: "13/43",
    },
  },
  {
    id: "y2cp-010",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 10",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Events \\( S \\) and \\( T \\) satisfy \\( P(T)=0.6 \\) and \\( P(S\\mid T)=0.25 \\). Find \\( P(S\\cap T) \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["conditional probability", "formula", "rearrange"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the conditional probability formula.", workingLatex: "P(S\\mid T)=\\frac{P(S\\cap T)}{P(T)}", explanation: "Start from the definition. Here the unknown is the intersection \\( P(S\\cap T) \\), which sits in the numerator." },
        { stepNumber: 2, description: "Rearrange to make the intersection the subject.", workingLatex: "P(S\\cap T)=P(S\\mid T)\\times P(T)", explanation: "Multiply both sides by \\( P(T) \\) to free the intersection. This is the multiplication form of the rule." },
        { stepNumber: 3, description: "Identify the two values to substitute.", workingLatex: "P(S\\mid T)=0.25,\\quad P(T)=0.6", explanation: "Both quantities are given directly in the question, so no further reading is needed." },
        { stepNumber: 4, description: "Substitute the values.", workingLatex: "P(S\\cap T)=0.25\\times 0.6", explanation: "Because we rearranged the formula, we now multiply rather than divide. Dividing here would be a common mistake." },
        { stepNumber: 5, description: "Carry out the multiplication.", workingLatex: "0.25\\times 0.6=0.15", explanation: "Multiplying the two decimals gives \\( 0.15 \\)." }
      ],
      finalAnswer: "\\( P(S\\cap T)=0.15 \\)",
      canonicalAnswer: "0.15",
    },
  },
  {
    id: "y2cp-011",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 11",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "A group of \\( 30 \\) gym members were asked whether they attend yoga \\( (Y) \\) or spin \\( (S) \\) classes. The Venn diagram shows the numbers. A member is chosen at random. Find \\( P\\big((Y\\cup S)'\\big) \\), the probability that the member attends neither class.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>Y</Text>
  <Text x={8.3} y={5.9}>S</Text>
  <Text x={2.7} y={3.4}>8</Text>
  <Text x={5} y={3.4}>5</Text>
  <Text x={7.3} y={3.4}>11</Text>
  <Text x={9.2} y={0.7}>6</Text>
</Mafs>`,
    marks: 2,
    examStyle: true,
    yearCreated: 2026,
    tags: ["venn diagram", "set notation", "complement"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Interpret the notation \\( (Y\\cup S)' \\).", workingLatex: "(Y\\cup S)'=\\text{not in } Y \\text{ and not in } S", explanation: "\\( Y\\cup S \\) is everyone in at least one class, so its complement is everyone outside both circles — the members who attend neither class." },
        { stepNumber: 2, description: "Read the outside count from the diagram.", workingLatex: "n\\big((Y\\cup S)'\\big)=6", explanation: "The number sitting outside both circles is \\( 6 \\). Do not include the \\( 8 \\), \\( 5 \\) or \\( 11 \\) — those members attend at least one class." },
        { stepNumber: 3, description: "Identify the total number of members.", workingLatex: "\\text{total}=30", explanation: "There are \\( 30 \\) members in the group, so this is the denominator. As a check, \\( 8+5+11+6=30 \\)." },
        { stepNumber: 4, description: "Write the probability as a fraction.", workingLatex: "P\\big((Y\\cup S)'\\big)=\\frac{6}{30}", explanation: "Put the outside count over the total number of members." },
        { stepNumber: 5, description: "Simplify the fraction.", workingLatex: "\\frac{6}{30}=\\frac{1}{5}", explanation: "Both \\( 6 \\) and \\( 30 \\) divide by \\( 6 \\), giving \\( \\tfrac{1}{5} \\)." }
      ],
      finalAnswer: "\\( P\\big((Y\\cup S)'\\big)=\\tfrac{1}{5} \\)",
      canonicalAnswer: "1/5",
    },
  },
  {
    id: "y2cp-012",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 12",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The two-way table shows the favourite drink and year group of 50 students.\n\n| | Tea | Coffee | Total |\n| --- | --- | --- | --- |\n| Year 12 | 8 | 12 | 20 |\n| Year 13 | 18 | 12 | 30 |\n| Total | 26 | 24 | 50 |\n\nA student is chosen at random. Find \\( P(\\text{Year 12} \\cap \\text{Tea}) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["two-way table", "joint probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Interpret what the event \\( \\text{Year 12} \\cap \\text{Tea} \\) means.", workingLatex: "\\text{Year 12} \\cap \\text{Tea} = \\text{a Year 12 student whose favourite drink is tea}", explanation: "The symbol \\( \\cap \\) means 'and', so we need students who are BOTH in Year 12 AND chose tea. Common slip: treating this as 'or' and adding the row and column totals." },
        { stepNumber: 2, description: "Read the joint count from the single cell where the Year 12 row meets the Tea column.", workingLatex: "\\text{Year 12 and Tea} = 8", explanation: "Look across the Year 12 row until it lines up with the Tea column: the cell contains 8. Common slip: reading the Year 12 row total (20) or the Tea column total (26) instead of the inner cell." },
        { stepNumber: 3, description: "Identify the size of the whole sample space.", workingLatex: "\\text{Total students} = 50", explanation: "The student is chosen at random from everyone, so the denominator is the grand total in the bottom-right corner." },
        { stepNumber: 4, description: "Write the probability as a fraction (favourable over total).", workingLatex: "P(\\text{Year 12} \\cap \\text{Tea}) = \\dfrac{8}{50}", explanation: "Probability = (number of favourable outcomes) / (total outcomes) for equally likely choices." },
        { stepNumber: 5, description: "Simplify the fraction and give a decimal.", workingLatex: "\\dfrac{8}{50} = \\dfrac{4}{25} = 0.16", explanation: "Divide numerator and denominator by their common factor 2. Then \\( 4 \\div 25 = 0.16 \\)." }
      ],
      finalAnswer: "\\( P(\\text{Year 12} \\cap \\text{Tea}) = \\dfrac{4}{25} = 0.16 \\)",
      canonicalAnswer: "0.16",
    },
  },
  {
    id: "y2cp-013",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 13",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Using the same table of 50 students:\n\n| | Tea | Coffee | Total |\n| --- | --- | --- | --- |\n| Year 12 | 8 | 12 | 20 |\n| Year 13 | 18 | 12 | 30 |\n| Total | 26 | 24 | 50 |\n\nA student is chosen at random. Find \\( P(\\text{Coffee}) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["two-way table", "marginal probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify what is being asked: the probability of coffee regardless of year group.", workingLatex: "P(\\text{Coffee}) = \\dfrac{\\text{all coffee drinkers}}{\\text{all students}}", explanation: "There is no condition on year group, so we want every coffee drinker (this is a marginal probability)." },
        { stepNumber: 2, description: "Read the marginal (column) total for Coffee.", workingLatex: "\\text{Coffee total} = 24", explanation: "Use the number at the bottom of the Coffee column, which sums both year groups (12 + 12 = 24). Common slip: picking just one cell such as 12 and forgetting the other year group." },
        { stepNumber: 3, description: "Identify the size of the whole sample space.", workingLatex: "\\text{Total students} = 50", explanation: "The grand total in the bottom-right corner is the denominator." },
        { stepNumber: 4, description: "Write the probability as a fraction.", workingLatex: "P(\\text{Coffee}) = \\dfrac{24}{50}", explanation: "Favourable (coffee) over total students." },
        { stepNumber: 5, description: "Simplify the fraction and give a decimal.", workingLatex: "\\dfrac{24}{50} = \\dfrac{12}{25} = 0.48", explanation: "Divide top and bottom by 2; then \\( 12 \\div 25 = 0.48 \\)." }
      ],
      finalAnswer: "\\( P(\\text{Coffee}) = \\dfrac{12}{25} = 0.48 \\)",
      canonicalAnswer: "0.48",
    },
  },
  {
    id: "y2cp-014",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 14",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The two-way table shows whether 80 people own a pet and whether they live in a flat or a house.\n\n| | Pet | No pet | Total |\n| --- | --- | --- | --- |\n| Flat | 9 | 21 | 30 |\n| House | 35 | 15 | 50 |\n| Total | 44 | 36 | 80 |\n\nA person is chosen at random. Given that they live in a house, find the probability that they own a pet.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["two-way table", "conditional probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recognise this is a conditional probability and write it in symbols.", workingLatex: "P(\\text{Pet} \\mid \\text{House})", explanation: "The phrase 'given that they live in a house' is the condition, so it goes after the \\( \\mid \\) bar." },
        { stepNumber: 2, description: "Restrict the sample space to the conditioning event (people in a house).", workingLatex: "\\text{House total} = 50", explanation: "Conditional probability uses only the House row as the new total. Common slip: using the grand total 80 instead of the House total 50." },
        { stepNumber: 3, description: "Count those within the House row who also own a pet.", workingLatex: "\\text{House and Pet} = 35", explanation: "Read the cell where the House row meets the Pet column. Common slip: reading the Pet column total (44) instead of just the House cell." },
        { stepNumber: 4, description: "Form the conditional probability as (House and Pet) over (House total).", workingLatex: "P(\\text{Pet} \\mid \\text{House}) = \\dfrac{35}{50}", explanation: "Divide the joint count by the restricted total." },
        { stepNumber: 5, description: "Simplify the fraction and give a decimal.", workingLatex: "\\dfrac{35}{50} = \\dfrac{7}{10} = 0.7", explanation: "Divide top and bottom by 5; then \\( 7 \\div 10 = 0.7 \\)." }
      ],
      finalAnswer: "\\( P(\\text{Pet} \\mid \\text{House}) = \\dfrac{7}{10} = 0.7 \\)",
      canonicalAnswer: "0.7",
    },
  },
  {
    id: "y2cp-015",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 15",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Using the same pet/housing table:\n\n| | Pet | No pet | Total |\n| --- | --- | --- | --- |\n| Flat | 9 | 21 | 30 |\n| House | 35 | 15 | 50 |\n| Total | 44 | 36 | 80 |\n\nGiven that a randomly chosen person owns a pet, find the probability that they live in a flat.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["two-way table", "conditional probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recognise this is a conditional probability and write it in symbols.", workingLatex: "P(\\text{Flat} \\mid \\text{Pet})", explanation: "'Given that ... owns a pet' is the condition, so Pet goes after the \\( \\mid \\) bar. Common slip: swapping the events and computing \\( P(\\text{Pet} \\mid \\text{Flat}) \\)." },
        { stepNumber: 2, description: "Restrict the sample space to the conditioning event (pet owners).", workingLatex: "\\text{Pet total} = 44", explanation: "Use the Pet column total as the new denominator, not the grand total of 80." },
        { stepNumber: 3, description: "Count the pet owners who live in a flat.", workingLatex: "\\text{Flat and Pet} = 9", explanation: "Read the cell where the Flat row meets the Pet column." },
        { stepNumber: 4, description: "Form the conditional probability as (Flat and Pet) over (Pet total).", workingLatex: "P(\\text{Flat} \\mid \\text{Pet}) = \\dfrac{9}{44}", explanation: "Divide the joint count by the restricted total of pet owners." },
        { stepNumber: 5, description: "State the decimal value (fraction already in lowest terms).", workingLatex: "\\dfrac{9}{44} \\approx 0.205", explanation: "9 and 44 share no common factor (44 = 4 \\times 11, and 9 = 3^2), so \\( \\tfrac{9}{44} \\) cannot be simplified; \\( 9 \\div 44 \\approx 0.205 \\)." }
      ],
      finalAnswer: "\\( P(\\text{Flat} \\mid \\text{Pet}) = \\dfrac{9}{44} \\approx 0.205 \\)",
      canonicalAnswer: "9/44",
    },
  },
  {
    id: "y2cp-016",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 16",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "A single card is drawn from a standard pack of 52 cards. Let \\( A \\) be the event \"the card is a King\" and \\( B \\) be the event \"the card is a Queen\". State whether \\( A \\) and \\( B \\) are mutually exclusive, giving a reason.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["mutually exclusive", "recognition"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the definition of mutually exclusive events.", workingLatex: "A \\cap B = \\varnothing \\iff \\text{mutually exclusive}", explanation: "Two events are mutually exclusive when they share no outcomes, i.e. they cannot both happen on the same trial." },
        { stepNumber: 2, description: "Describe the outcomes that make up each event.", workingLatex: "A = \\{\\text{4 Kings}\\}, \\quad B = \\{\\text{4 Queens}\\}", explanation: "Event \\( A \\) is the four King cards; event \\( B \\) is the four Queen cards." },
        { stepNumber: 3, description: "Check whether any single card belongs to both events.", workingLatex: "A \\cap B = \\varnothing, \\quad P(A \\cap B) = 0", explanation: "A card has exactly one rank, so no card is simultaneously a King and a Queen. Common slip: confusing this with independence, which is a different idea." },
        { stepNumber: 4, description: "Conclude with a reason.", workingLatex: "A \\cap B = \\varnothing \\Rightarrow \\text{mutually exclusive}", explanation: "Because the events share no outcomes, drawing a King rules out drawing a Queen on the same draw." }
      ],
      finalAnswer: "Yes, they are mutually exclusive because a single card cannot be both a King and a Queen, so \\( P(A \\cap B) = 0 \\).",
    },
  },
  {
    id: "y2cp-017",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 17",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "A fair six-sided die is rolled once. Let \\( A \\) be the event \"the score is even\" and \\( B \\) be the event \"the score is greater than 4\". Determine whether \\( A \\) and \\( B \\) are mutually exclusive, giving a reason.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["mutually exclusive", "recognition"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the definition of mutually exclusive events.", workingLatex: "A \\cap B = \\varnothing \\iff \\text{mutually exclusive}", explanation: "Mutually exclusive means no outcome lies in both events. To test it, list each event and look for any shared outcome." },
        { stepNumber: 2, description: "List the outcomes in event \\( A \\) (even score).", workingLatex: "A = \\{2, 4, 6\\}", explanation: "The even numbers on a die are 2, 4 and 6." },
        { stepNumber: 3, description: "List the outcomes in event \\( B \\) (score greater than 4).", workingLatex: "B = \\{5, 6\\}", explanation: "Scores strictly greater than 4 are 5 and 6. Common slip: including 4 by misreading 'greater than' as 'greater than or equal to'." },
        { stepNumber: 4, description: "Find the intersection of the two lists.", workingLatex: "A \\cap B = \\{6\\}", explanation: "The score 6 appears in both lists, so it is even AND greater than 4." },
        { stepNumber: 5, description: "Conclude with a reason.", workingLatex: "A \\cap B = \\{6\\} \\neq \\varnothing \\Rightarrow \\text{not mutually exclusive}", explanation: "Since outcome 6 lies in both events, they can occur together, so they are not mutually exclusive." }
      ],
      finalAnswer: "No, they are not mutually exclusive because the score 6 is both even and greater than 4, so \\( A \\cap B = \\{6\\} \\neq \\varnothing \\).",
    },
  },
  {
    id: "y2cp-018",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 18",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Events \\( A \\) and \\( B \\) are mutually exclusive with \\( P(A) = 0.3 \\) and \\( P(B) = 0.45 \\). Find \\( P(A \\cup B) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["addition rule", "mutually exclusive"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the general addition rule.", workingLatex: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)", explanation: "This rule applies to any two events; the overlap is subtracted to avoid double-counting." },
        { stepNumber: 2, description: "Use the mutually exclusive condition to find the overlap.", workingLatex: "P(A \\cap B) = 0", explanation: "Mutually exclusive events cannot occur together, so their intersection has probability 0. Common slip: forgetting this and leaving an unknown overlap term." },
        { stepNumber: 3, description: "Simplify the addition rule for this case.", workingLatex: "P(A \\cup B) = P(A) + P(B)", explanation: "With the overlap equal to 0, the union is just the sum of the two probabilities." },
        { stepNumber: 4, description: "Substitute the given values and evaluate.", workingLatex: "P(A \\cup B) = 0.3 + 0.45 = 0.75", explanation: "Add the two probabilities. The result is at most 1, which is a useful sanity check." }
      ],
      finalAnswer: "\\( P(A \\cup B) = 0.75 \\)",
      canonicalAnswer: "0.75",
    },
  },
  {
    id: "y2cp-019",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 19",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "For events \\( A \\) and \\( B \\), \\( P(A) = 0.5 \\), \\( P(B) = 0.4 \\) and \\( P(A \\cap B) = 0.2 \\). Find \\( P(A \\cup B) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["addition rule", "union"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the addition rule for two events.", workingLatex: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)", explanation: "Here the events overlap (\\( P(A \\cap B) = 0.2 \\neq 0 \\)), so the intersection term must be subtracted. Common slip: adding \\( P(A) + P(B) \\) and forgetting to subtract the overlap, giving 0.9." },
        { stepNumber: 2, description: "Note the three quantities given in the question.", workingLatex: "P(A) = 0.5, \\quad P(B) = 0.4, \\quad P(A \\cap B) = 0.2", explanation: "All three pieces needed for the rule are provided directly." },
        { stepNumber: 3, description: "Substitute the given values into the rule.", workingLatex: "P(A \\cup B) = 0.5 + 0.4 - 0.2", explanation: "Insert each probability in its correct place." },
        { stepNumber: 4, description: "Carry out the arithmetic.", workingLatex: "P(A \\cup B) = 0.9 - 0.2 = 0.7", explanation: "Add the first two, then subtract the overlap to get the final probability." }
      ],
      finalAnswer: "\\( P(A \\cup B) = 0.7 \\)",
      canonicalAnswer: "0.7",
    },
  },
  {
    id: "y2cp-020",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 20",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "A bag contains red and blue counters. The probability of drawing a red counter is \\( 0.6 \\). A counter is drawn, its colour noted, and then replaced; a second counter is then drawn. Using the tree diagram, find the probability that both counters are red.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
  <Line.Segment point1={[0, 5]} point2={[4, 7.3333]} color="var(--mafs-fg)" />
  <Text x={2} y={6.5667}>0.6</Text>
  <Text x={4.3} y={7.3333} attach="e">R</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 8.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={8.4567}>0.6</Text>
  <Text x={9.3} y={8.5} attach="e">R</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 6.1667]} color="var(--mafs-fg)" />
  <Text x={7.1} y={7.01}>0.4</Text>
  <Text x={9.3} y={6.1667} attach="e">R'</Text>
  <Line.Segment point1={[0, 5]} point2={[4, 2.6667]} color="var(--mafs-fg)" />
  <Text x={2} y={4.2333}>0.4</Text>
  <Text x={4.3} y={2.6667} attach="e">R'</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 3.8333]} color="var(--mafs-fg)" />
  <Text x={7.1} y={3.79}>0.6</Text>
  <Text x={9.3} y={3.8333} attach="e">R</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 1.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={2.3433}>0.4</Text>
  <Text x={9.3} y={1.5} attach="e">R'</Text>
</Mafs>`,
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["tree diagram", "with replacement", "independent"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recognise that replacement makes the two draws independent.", workingLatex: "P(R) = 0.6 \\text{ on each draw}", explanation: "Because the first counter is put back, the bag is unchanged, so the probability of red stays 0.6 on the second draw too. Common slip: reducing the second probability as if there were no replacement." },
        { stepNumber: 2, description: "Identify the path on the tree for 'both red'.", workingLatex: "\\text{first } R \\to \\text{second } R", explanation: "Follow the top branch (R, 0.6) at stage 1 to the R branch (0.6) at stage 2." },
        { stepNumber: 3, description: "Multiply the branch probabilities along that path.", workingLatex: "P(R, R) = 0.6 \\times 0.6", explanation: "Along a single path through a tree, multiply the probabilities (the 'AND' rule for independent events)." },
        { stepNumber: 4, description: "Evaluate the product.", workingLatex: "0.6 \\times 0.6 = 0.36", explanation: "This gives the probability that both counters drawn are red." }
      ],
      finalAnswer: "\\( P(\\text{both red}) = 0.36 \\)",
      canonicalAnswer: "0.36",
    },
  },
  {
    id: "y2cp-021",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 21",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Each morning the probability that it rains is \\( 0.3 \\), independently of other days. Using the tree diagram for two consecutive mornings (R = rain, R' = no rain), find the probability that it rains on exactly one of the two mornings.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
  <Line.Segment point1={[0, 5]} point2={[4, 7.3333]} color="var(--mafs-fg)" />
  <Text x={2} y={6.5667}>0.3</Text>
  <Text x={4.3} y={7.3333} attach="e">R</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 8.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={8.4567}>0.3</Text>
  <Text x={9.3} y={8.5} attach="e">R</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 6.1667]} color="var(--mafs-fg)" />
  <Text x={7.1} y={7.01}>0.7</Text>
  <Text x={9.3} y={6.1667} attach="e">R'</Text>
  <Line.Segment point1={[0, 5]} point2={[4, 2.6667]} color="var(--mafs-fg)" />
  <Text x={2} y={4.2333}>0.7</Text>
  <Text x={4.3} y={2.6667} attach="e">R'</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 3.8333]} color="var(--mafs-fg)" />
  <Text x={7.1} y={3.79}>0.3</Text>
  <Text x={9.3} y={3.8333} attach="e">R</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 1.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={2.3433}>0.7</Text>
  <Text x={9.3} y={1.5} attach="e">R'</Text>
</Mafs>`,
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["tree diagram", "independent", "path probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Interpret 'exactly one rainy morning' as the two ways it can happen.", workingLatex: "(R, R') \\text{ or } (R', R)", explanation: "Exactly one rainy day means it rains on day 1 only, or on day 2 only. Common slip: including (R, R) which is two rainy days, not exactly one." },
        { stepNumber: 2, description: "Find the probability of the first path (rain then no rain).", workingLatex: "P(R, R') = 0.3 \\times 0.7 = 0.21", explanation: "The mornings are independent, so multiply 0.3 (rain) by 0.7 (no rain) along the path." },
        { stepNumber: 3, description: "Find the probability of the second path (no rain then rain).", workingLatex: "P(R', R) = 0.7 \\times 0.3 = 0.21", explanation: "Multiply 0.7 (no rain) by 0.3 (rain) along this path." },
        { stepNumber: 4, description: "Add the two mutually exclusive path probabilities.", workingLatex: "0.21 + 0.21 = 0.42", explanation: "Different complete paths of a tree cannot both occur, so add them (the 'OR' rule). Common slip: multiplying the two path probabilities instead of adding." }
      ],
      finalAnswer: "\\( P(\\text{exactly one rainy morning}) = 0.42 \\)",
      canonicalAnswer: "0.42",
    },
  },
  {
    id: "y2cp-022",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 22",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "A spinner lands on \"win\" with probability \\( 0.2 \\) on each spin, independently. The spinner is spun twice. Using the tree diagram (W = win, L = lose), find the probability of at least one win.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
  <Line.Segment point1={[0, 5]} point2={[4, 7.3333]} color="var(--mafs-fg)" />
  <Text x={2} y={6.5667}>0.2</Text>
  <Text x={4.3} y={7.3333} attach="e">W</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 8.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={8.4567}>0.2</Text>
  <Text x={9.3} y={8.5} attach="e">W</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 6.1667]} color="var(--mafs-fg)" />
  <Text x={7.1} y={7.01}>0.8</Text>
  <Text x={9.3} y={6.1667} attach="e">L</Text>
  <Line.Segment point1={[0, 5]} point2={[4, 2.6667]} color="var(--mafs-fg)" />
  <Text x={2} y={4.2333}>0.8</Text>
  <Text x={4.3} y={2.6667} attach="e">L</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 3.8333]} color="var(--mafs-fg)" />
  <Text x={7.1} y={3.79}>0.2</Text>
  <Text x={9.3} y={3.8333} attach="e">W</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 1.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={2.3433}>0.8</Text>
  <Text x={9.3} y={1.5} attach="e">L</Text>
</Mafs>`,
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["tree diagram", "independent", "at least one"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recognise 'at least one win' as the complement of 'no wins'.", workingLatex: "P(\\text{at least one W}) = 1 - P(\\text{no wins})", explanation: "The opposite of getting at least one win is getting zero wins, i.e. losing both spins. Using the complement avoids adding three separate paths." },
        { stepNumber: 2, description: "Identify 'no wins' as losing on both spins.", workingLatex: "P(\\text{no wins}) = P(L, L)", explanation: "With two spins, the only way to get no wins is L on the first and L on the second." },
        { stepNumber: 3, description: "Multiply along the Lose–Lose path.", workingLatex: "P(L, L) = 0.8 \\times 0.8 = 0.64", explanation: "The spins are independent, so multiply 0.8 by 0.8 along the path. Common slip: using 0.2 here instead of the lose probability 0.8." },
        { stepNumber: 4, description: "Subtract from 1 to get the required probability.", workingLatex: "P(\\text{at least one W}) = 1 - 0.64 = 0.36", explanation: "The complement of losing both spins gives the chance of at least one win." }
      ],
      finalAnswer: "\\( P(\\text{at least one win}) = 0.36 \\)",
      canonicalAnswer: "0.36",
    },
  },
  {
    id: "y2cp-023",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 23",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A bag contains \\( 5 \\) red counters and \\( 4 \\) blue counters. Two counters are drawn at random without replacement. Find the probability that \\( both \\) counters are red.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
  <Line.Segment point1={[0, 5]} point2={[4, 7.3333]} color="var(--mafs-fg)" />
  <Text x={2} y={6.5667}>5/9</Text>
  <Text x={4.3} y={7.3333} attach="e">R</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 8.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={8.4567}>4/8</Text>
  <Text x={9.3} y={8.5} attach="e">R</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 6.1667]} color="var(--mafs-fg)" />
  <Text x={7.1} y={7.01}>4/8</Text>
  <Text x={9.3} y={6.1667} attach="e">B</Text>
  <Line.Segment point1={[0, 5]} point2={[4, 2.6667]} color="var(--mafs-fg)" />
  <Text x={2} y={4.2333}>4/9</Text>
  <Text x={4.3} y={2.6667} attach="e">B</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 3.8333]} color="var(--mafs-fg)" />
  <Text x={7.1} y={3.79}>5/8</Text>
  <Text x={9.3} y={3.8333} attach="e">R</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 1.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={2.3433}>3/8</Text>
  <Text x={9.3} y={1.5} attach="e">B</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["tree", "without-replacement", "P(both)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Count the total number of counters at the first draw.", workingLatex: "5 + 4 = 9", explanation: "There are 5 red and 4 blue, giving 9 counters before any are drawn; this is the first-draw denominator." },
        { stepNumber: 2, description: "First draw: probability of red.", workingLatex: "P(R_1) = \\dfrac{5}{9}", explanation: "5 of the 9 counters are red. Slip to avoid: keep the total as 9 here, not 8." },
        { stepNumber: 3, description: "Update the bag after a red is removed (no replacement).", workingLatex: "\\text{remaining: } 4 \\text{ red}, \\; 4 \\text{ blue} = 8 \\text{ counters}", explanation: "Without replacement the first red is gone, so both the red count and the total drop by one." },
        { stepNumber: 4, description: "Second draw given the first was red.", workingLatex: "P(R_2 \\mid R_1) = \\dfrac{4}{8}", explanation: "4 reds remain out of 8 counters. Common slip: forgetting to reduce the denominator to 8." },
        { stepNumber: 5, description: "Multiply along the red–red path.", workingLatex: "P(R \\cap R) = P(R_1)\\times P(R_2 \\mid R_1) = \\dfrac{5}{9} \\times \\dfrac{4}{8}", explanation: "For 'both red' there is a single route through the tree, so multiply the branch probabilities." },
        { stepNumber: 6, description: "Evaluate the product.", workingLatex: "= \\dfrac{5 \\times 4}{9 \\times 8} = \\dfrac{20}{72}", explanation: "Multiply numerators and denominators separately before cancelling." },
        { stepNumber: 7, description: "Simplify to lowest terms.", workingLatex: "\\dfrac{20}{72} = \\dfrac{5}{18}", explanation: "Divide numerator and denominator by their common factor 4." }
      ],
      finalAnswer: "\\( P(\\text{both red}) = \\dfrac{5}{18} \\)",
      canonicalAnswer: "5/18",
    },
  },
  {
    id: "y2cp-024",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 24",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A box holds \\( 3 \\) faulty and \\( 7 \\) working fuses. Two fuses are selected at random without replacement. Find the probability that \\( at least one \\) is faulty.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
  <Line.Segment point1={[0, 5]} point2={[4, 7.3333]} color="var(--mafs-fg)" />
  <Text x={2} y={6.5667}>3/10</Text>
  <Text x={4.3} y={7.3333} attach="e">F</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 8.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={8.4567}>2/9</Text>
  <Text x={9.3} y={8.5} attach="e">F</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 6.1667]} color="var(--mafs-fg)" />
  <Text x={7.1} y={7.01}>7/9</Text>
  <Text x={9.3} y={6.1667} attach="e">W</Text>
  <Line.Segment point1={[0, 5]} point2={[4, 2.6667]} color="var(--mafs-fg)" />
  <Text x={2} y={4.2333}>7/10</Text>
  <Text x={4.3} y={2.6667} attach="e">W</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 3.8333]} color="var(--mafs-fg)" />
  <Text x={7.1} y={3.79}>3/9</Text>
  <Text x={9.3} y={3.8333} attach="e">F</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 1.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={2.3433}>6/9</Text>
  <Text x={9.3} y={1.5} attach="e">W</Text>
</Mafs>`,
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["tree", "without-replacement", "at-least-one"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the complement of 'at least one faulty'.", workingLatex: "\\text{not (at least one F)} = \\text{both working} = W \\cap W", explanation: "'At least one faulty' covers many cases; its complement is the single event 'both working', which is far quicker to compute." },
        { stepNumber: 2, description: "Write the complement rule.", workingLatex: "P(\\text{at least one F}) = 1 - P(W \\cap W)", explanation: "The probabilities of an event and its complement sum to 1." },
        { stepNumber: 3, description: "First draw: probability of working.", workingLatex: "P(W_1) = \\dfrac{7}{10}", explanation: "7 of the 10 fuses work; the total starts at 3 + 7 = 10." },
        { stepNumber: 4, description: "Second draw given the first was working.", workingLatex: "P(W_2 \\mid W_1) = \\dfrac{6}{9}", explanation: "One working fuse is removed, leaving 6 working out of 9. Slip: do not keep the denominator at 10." },
        { stepNumber: 5, description: "Multiply along the working–working path.", workingLatex: "P(W \\cap W) = \\dfrac{7}{10} \\times \\dfrac{6}{9} = \\dfrac{42}{90}", explanation: "Both-working is a single route, so multiply the two branch probabilities." },
        { stepNumber: 6, description: "Simplify the both-working probability.", workingLatex: "\\dfrac{42}{90} = \\dfrac{7}{15}", explanation: "Divide top and bottom by 6." },
        { stepNumber: 7, description: "Subtract from 1.", workingLatex: "P(\\text{at least one F}) = 1 - \\dfrac{7}{15} = \\dfrac{8}{15}", explanation: "This converts the both-working probability into the required at-least-one-faulty probability." }
      ],
      finalAnswer: "\\( P(\\text{at least one faulty}) = \\dfrac{8}{15} \\)",
      canonicalAnswer: "8/15",
    },
  },
  {
    id: "y2cp-025",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 25",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A drawer contains \\( 6 \\) black socks and \\( 4 \\) white socks. Two socks are taken at random without replacement. Find the probability that \\( exactly one \\) sock is white.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
  <Line.Segment point1={[0, 5]} point2={[4, 7.3333]} color="var(--mafs-fg)" />
  <Text x={2} y={6.5667}>4/10</Text>
  <Text x={4.3} y={7.3333} attach="e">W</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 8.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={8.4567}>3/9</Text>
  <Text x={9.3} y={8.5} attach="e">W</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 6.1667]} color="var(--mafs-fg)" />
  <Text x={7.1} y={7.01}>6/9</Text>
  <Text x={9.3} y={6.1667} attach="e">B</Text>
  <Line.Segment point1={[0, 5]} point2={[4, 2.6667]} color="var(--mafs-fg)" />
  <Text x={2} y={4.2333}>6/10</Text>
  <Text x={4.3} y={2.6667} attach="e">B</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 3.8333]} color="var(--mafs-fg)" />
  <Text x={7.1} y={3.79}>4/9</Text>
  <Text x={9.3} y={3.8333} attach="e">W</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 1.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={2.3433}>5/9</Text>
  <Text x={9.3} y={1.5} attach="e">B</Text>
</Mafs>`,
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ["tree", "without-replacement", "exactly-one"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the two routes that give exactly one white.", workingLatex: "\\text{exactly one W} = (W \\cap B) \\;\\text{or}\\; (B \\cap W)", explanation: "Exactly one white can occur as white-then-black or black-then-white; both must be counted." },
        { stepNumber: 2, description: "Write the sum of the two disjoint paths.", workingLatex: "P(\\text{exactly one W}) = P(W \\cap B) + P(B \\cap W)", explanation: "These two routes are mutually exclusive, so their probabilities add. Slip: forgetting the second order." },
        { stepNumber: 3, description: "Probability white then black.", workingLatex: "P(W \\cap B) = \\dfrac{4}{10} \\times \\dfrac{6}{9}", explanation: "4 white of 10 first, then 6 black of the 9 remaining." },
        { stepNumber: 4, description: "Evaluate that path.", workingLatex: "= \\dfrac{24}{90}", explanation: "Multiply numerators and denominators: 4×6 = 24 and 10×9 = 90." },
        { stepNumber: 5, description: "Probability black then white.", workingLatex: "P(B \\cap W) = \\dfrac{6}{10} \\times \\dfrac{4}{9}", explanation: "6 black of 10 first, then 4 white of the 9 remaining." },
        { stepNumber: 6, description: "Evaluate that path.", workingLatex: "= \\dfrac{24}{90}", explanation: "6×4 = 24 and 10×9 = 90; note both orders give the same value here." },
        { stepNumber: 7, description: "Add the two paths.", workingLatex: "\\dfrac{24}{90} + \\dfrac{24}{90} = \\dfrac{48}{90}", explanation: "Same denominator, so add the numerators." },
        { stepNumber: 8, description: "Simplify.", workingLatex: "\\dfrac{48}{90} = \\dfrac{8}{15}", explanation: "Divide numerator and denominator by 6." }
      ],
      finalAnswer: "\\( P(\\text{exactly one white}) = \\dfrac{8}{15} \\)",
      canonicalAnswer: "8/15",
    },
  },
  {
    id: "y2cp-026",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 26",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A bag contains \\( 7 \\) green and \\( 3 \\) yellow beads. Two beads are drawn at random without replacement. Given that the second bead drawn is yellow, find the probability that the first bead was also yellow.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
  <Line.Segment point1={[0, 5]} point2={[4, 7.3333]} color="var(--mafs-fg)" />
  <Text x={2} y={6.5667}>3/10</Text>
  <Text x={4.3} y={7.3333} attach="e">Y</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 8.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={8.4567}>2/9</Text>
  <Text x={9.3} y={8.5} attach="e">Y</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 6.1667]} color="var(--mafs-fg)" />
  <Text x={7.1} y={7.01}>7/9</Text>
  <Text x={9.3} y={6.1667} attach="e">G</Text>
  <Line.Segment point1={[0, 5]} point2={[4, 2.6667]} color="var(--mafs-fg)" />
  <Text x={2} y={4.2333}>7/10</Text>
  <Text x={4.3} y={2.6667} attach="e">G</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 3.8333]} color="var(--mafs-fg)" />
  <Text x={7.1} y={3.79}>3/9</Text>
  <Text x={9.3} y={3.8333} attach="e">Y</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 1.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={2.3433}>6/9</Text>
  <Text x={9.3} y={1.5} attach="e">G</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["tree", "without-replacement", "conditional"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the conditional-probability formula.", workingLatex: "P(Y_1 \\mid Y_2) = \\dfrac{P(Y_1 \\cap Y_2)}{P(Y_2)}", explanation: "We condition on the second bead being yellow, so divide by P(Y_2). Slip: do not divide by P(Y_1)." },
        { stepNumber: 2, description: "Probability of yellow then yellow.", workingLatex: "P(Y_1 \\cap Y_2) = \\dfrac{3}{10} \\times \\dfrac{2}{9}", explanation: "3 yellow of 10, then 2 yellow of the 9 remaining after one yellow is removed." },
        { stepNumber: 3, description: "Evaluate the numerator path.", workingLatex: "= \\dfrac{6}{90}", explanation: "3×2 = 6 and 10×9 = 90." },
        { stepNumber: 4, description: "Identify the two routes ending in a yellow second bead.", workingLatex: "Y_2 = (Y_1 \\cap Y_2) \\;\\text{or}\\; (G_1 \\cap Y_2)", explanation: "The second bead is yellow whether the first was yellow or green; both routes contribute to P(Y_2)." },
        { stepNumber: 5, description: "Probability of green then yellow.", workingLatex: "P(G_1 \\cap Y_2) = \\dfrac{7}{10} \\times \\dfrac{3}{9} = \\dfrac{21}{90}", explanation: "7 green of 10, then all 3 yellow still present among the 9 remaining." },
        { stepNumber: 6, description: "Add the routes to get P(Y_2).", workingLatex: "P(Y_2) = \\dfrac{6}{90} + \\dfrac{21}{90} = \\dfrac{27}{90}", explanation: "Sum the two mutually exclusive paths that leave a yellow second bead." },
        { stepNumber: 7, description: "Form the conditional ratio.", workingLatex: "P(Y_1 \\mid Y_2) = \\dfrac{6/90}{27/90} = \\dfrac{6}{27}", explanation: "The common /90 denominators cancel, leaving 6/27." },
        { stepNumber: 8, description: "Simplify.", workingLatex: "\\dfrac{6}{27} = \\dfrac{2}{9}", explanation: "Divide top and bottom by 3." }
      ],
      finalAnswer: "\\( P(Y_1 \\mid Y_2) = \\dfrac{2}{9} \\)",
      canonicalAnswer: "2/9",
    },
  },
  {
    id: "y2cp-027",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 27",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A class committee has \\( 8 \\) Year 12 and \\( 4 \\) Year 13 students. Two students are chosen at random without replacement to lead a project. Find the probability that both chosen students are in Year 13.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
  <Line.Segment point1={[0, 5]} point2={[4, 7.3333]} color="var(--mafs-fg)" />
  <Text x={2} y={6.5667}>4/12</Text>
  <Text x={4.3} y={7.3333} attach="e">Y13</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 8.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={8.4567}>3/11</Text>
  <Text x={9.3} y={8.5} attach="e">Y13</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 6.1667]} color="var(--mafs-fg)" />
  <Text x={7.1} y={7.01}>8/11</Text>
  <Text x={9.3} y={6.1667} attach="e">Y12</Text>
  <Line.Segment point1={[0, 5]} point2={[4, 2.6667]} color="var(--mafs-fg)" />
  <Text x={2} y={4.2333}>8/12</Text>
  <Text x={4.3} y={2.6667} attach="e">Y12</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 3.8333]} color="var(--mafs-fg)" />
  <Text x={7.1} y={3.79}>4/11</Text>
  <Text x={9.3} y={3.8333} attach="e">Y13</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 1.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={2.3433}>7/11</Text>
  <Text x={9.3} y={1.5} attach="e">Y12</Text>
</Mafs>`,
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["tree", "without-replacement", "P(both)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Count the total number of students.", workingLatex: "8 + 4 = 12", explanation: "8 Year 12 plus 4 Year 13 gives 12 students for the first choice." },
        { stepNumber: 2, description: "First choice: a Year 13 student.", workingLatex: "P(Y13_1) = \\dfrac{4}{12} = \\dfrac{1}{3}", explanation: "4 of the 12 students are in Year 13." },
        { stepNumber: 3, description: "Update after one Year 13 is chosen.", workingLatex: "\\text{remaining: } 3 \\text{ Y13}, \\; 8 \\text{ Y12} = 11 \\text{ students}", explanation: "Without replacement the Year 13 count and the total both fall by one." },
        { stepNumber: 4, description: "Second choice given the first was Year 13.", workingLatex: "P(Y13_2 \\mid Y13_1) = \\dfrac{3}{11}", explanation: "3 Year 13 students remain out of 11. Slip: keep the denominator as 11, not 12." },
        { stepNumber: 5, description: "Multiply along the Y13–Y13 path.", workingLatex: "P(\\text{both Y13}) = \\dfrac{4}{12} \\times \\dfrac{3}{11} = \\dfrac{12}{132}", explanation: "Both Year 13 is a single route through the tree." },
        { stepNumber: 6, description: "Simplify.", workingLatex: "\\dfrac{12}{132} = \\dfrac{1}{11}", explanation: "Divide numerator and denominator by 12." }
      ],
      finalAnswer: "\\( P(\\text{both Year 13}) = \\dfrac{1}{11} \\)",
      canonicalAnswer: "1/11",
    },
  },
  {
    id: "y2cp-028",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 28",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A jar contains \\( 5 \\) lemon and \\( 7 \\) mint sweets. Two sweets are eaten, chosen at random without replacement. Find the probability that \\( at least one \\) sweet is lemon.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
  <Line.Segment point1={[0, 5]} point2={[4, 7.3333]} color="var(--mafs-fg)" />
  <Text x={2} y={6.5667}>5/12</Text>
  <Text x={4.3} y={7.3333} attach="e">L</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 8.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={8.4567}>4/11</Text>
  <Text x={9.3} y={8.5} attach="e">L</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 6.1667]} color="var(--mafs-fg)" />
  <Text x={7.1} y={7.01}>7/11</Text>
  <Text x={9.3} y={6.1667} attach="e">M</Text>
  <Line.Segment point1={[0, 5]} point2={[4, 2.6667]} color="var(--mafs-fg)" />
  <Text x={2} y={4.2333}>7/12</Text>
  <Text x={4.3} y={2.6667} attach="e">M</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 3.8333]} color="var(--mafs-fg)" />
  <Text x={7.1} y={3.79}>5/11</Text>
  <Text x={9.3} y={3.8333} attach="e">L</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 1.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={2.3433}>6/11</Text>
  <Text x={9.3} y={1.5} attach="e">M</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["tree", "without-replacement", "at-least-one", "exactly-one"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the complement of 'at least one lemon'.", workingLatex: "\\text{not (at least one L)} = \\text{both mint} = M \\cap M", explanation: "The opposite of getting at least one lemon is getting no lemon, i.e. both sweets mint." },
        { stepNumber: 2, description: "Write the complement rule.", workingLatex: "P(\\text{at least one L}) = 1 - P(M \\cap M)", explanation: "An event and its complement sum to 1, so subtract the easy 'both mint' case." },
        { stepNumber: 3, description: "First draw: probability of mint.", workingLatex: "P(M_1) = \\dfrac{7}{12}", explanation: "7 of the 12 sweets are mint; the total is 5 + 7 = 12." },
        { stepNumber: 4, description: "Second draw given the first was mint.", workingLatex: "P(M_2 \\mid M_1) = \\dfrac{6}{11}", explanation: "One mint removed leaves 6 mint of 11. Slip: reduce both numerator and denominator." },
        { stepNumber: 5, description: "Multiply along the mint–mint path.", workingLatex: "P(M \\cap M) = \\dfrac{7}{12} \\times \\dfrac{6}{11} = \\dfrac{42}{132}", explanation: "Both mint is a single route, so multiply the branch probabilities." },
        { stepNumber: 6, description: "Simplify the both-mint probability.", workingLatex: "\\dfrac{42}{132} = \\dfrac{7}{22}", explanation: "Divide top and bottom by 6." },
        { stepNumber: 7, description: "Subtract from 1.", workingLatex: "P(\\text{at least one L}) = 1 - \\dfrac{7}{22} = \\dfrac{15}{22}", explanation: "This gives the probability of at least one lemon." }
      ],
      finalAnswer: "\\( P(\\text{at least one lemon}) = \\dfrac{15}{22} \\)",
      canonicalAnswer: "15/22",
    },
  },
  {
    id: "y2cp-029",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 29",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "An urn contains \\( 6 \\) white and \\( 4 \\) black balls. Two balls are drawn at random without replacement. Given that \\( at least one \\) ball is black, find the probability that \\( both \\) balls are black.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
  <Line.Segment point1={[0, 5]} point2={[4, 7.3333]} color="var(--mafs-fg)" />
  <Text x={2} y={6.5667}>4/10</Text>
  <Text x={4.3} y={7.3333} attach="e">B</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 8.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={8.4567}>3/9</Text>
  <Text x={9.3} y={8.5} attach="e">B</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 6.1667]} color="var(--mafs-fg)" />
  <Text x={7.1} y={7.01}>6/9</Text>
  <Text x={9.3} y={6.1667} attach="e">W</Text>
  <Line.Segment point1={[0, 5]} point2={[4, 2.6667]} color="var(--mafs-fg)" />
  <Text x={2} y={4.2333}>6/10</Text>
  <Text x={4.3} y={2.6667} attach="e">W</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 3.8333]} color="var(--mafs-fg)" />
  <Text x={7.1} y={3.79}>4/9</Text>
  <Text x={9.3} y={3.8333} attach="e">B</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 1.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={2.3433}>5/9</Text>
  <Text x={9.3} y={1.5} attach="e">W</Text>
</Mafs>`,
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ["tree", "without-replacement", "conditional"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the conditional probability.", workingLatex: "P(\\text{both B} \\mid \\text{at least one B}) = \\dfrac{P(\\text{both B} \\cap \\text{at least one B})}{P(\\text{at least one B})}", explanation: "Divide by the probability of the conditioning event, at least one black." },
        { stepNumber: 2, description: "Simplify the intersection.", workingLatex: "P(\\text{both B} \\cap \\text{at least one B}) = P(\\text{both B})", explanation: "If both balls are black then certainly at least one is black, so 'both B' is a subset of 'at least one B'." },
        { stepNumber: 3, description: "Probability both black.", workingLatex: "P(B \\cap B) = \\dfrac{4}{10} \\times \\dfrac{3}{9}", explanation: "4 black of 10, then 3 black of the 9 remaining." },
        { stepNumber: 4, description: "Evaluate and simplify the numerator.", workingLatex: "= \\dfrac{12}{90} = \\dfrac{2}{15}", explanation: "4×3 = 12 over 10×9 = 90, then divide by 6." },
        { stepNumber: 5, description: "Probability both white (for the complement).", workingLatex: "P(W \\cap W) = \\dfrac{6}{10} \\times \\dfrac{5}{9} = \\dfrac{30}{90}", explanation: "The only way to have no black is both white: 6 white of 10, then 5 of 9." },
        { stepNumber: 6, description: "Probability at least one black via the complement.", workingLatex: "P(\\text{at least one B}) = 1 - \\dfrac{30}{90} = \\dfrac{60}{90} = \\dfrac{2}{3}", explanation: "Subtract the both-white probability from 1, then simplify." },
        { stepNumber: 7, description: "Form the conditional ratio.", workingLatex: "\\dfrac{P(\\text{both B})}{P(\\text{at least one B})} = \\dfrac{2/15}{2/3} = \\dfrac{2}{15} \\times \\dfrac{3}{2}", explanation: "Dividing by a fraction means multiplying by its reciprocal." },
        { stepNumber: 8, description: "Simplify.", workingLatex: "= \\dfrac{6}{30} = \\dfrac{1}{5}", explanation: "Multiply out then cancel by 6." }
      ],
      finalAnswer: "\\( P(\\text{both black} \\mid \\text{at least one black}) = \\dfrac{1}{5} \\)",
      canonicalAnswer: "1/5",
    },
  },
  {
    id: "y2cp-030",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 30",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "For events \\( A \\) and \\( B \\), the Venn diagram gives \\( P(A \\cap B') = 0.25 \\), \\( P(A \\cap B) = 0.15 \\), \\( P(A' \\cap B) = 0.40 \\) and \\( P(A' \\cap B') = 0.20 \\). Find \\( P(A \\mid B) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>A</Text>
  <Text x={8.3} y={5.9}>B</Text>
  <Text x={2.7} y={3.4}>0.25</Text>
  <Text x={5} y={3.4}>0.15</Text>
  <Text x={7.3} y={3.4}>0.4</Text>
  <Text x={9.2} y={0.7}>0.2</Text>
</Mafs>`,
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["venn", "conditional", "P(A|B)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the conditional-probability formula.", workingLatex: "P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}", explanation: "Conditioning on B restricts attention to the part of the sample space inside B." },
        { stepNumber: 2, description: "Identify the two regions that make up B.", workingLatex: "P(B) = P(A \\cap B) + P(A' \\cap B)", explanation: "Circle B is split by A into the overlap and the B-only region." },
        { stepNumber: 3, description: "Add the values to find P(B).", workingLatex: "P(B) = 0.15 + 0.40 = 0.55", explanation: "Slip: do not use only the overlap 0.15 as P(B)." },
        { stepNumber: 4, description: "Substitute into the formula.", workingLatex: "P(A \\mid B) = \\dfrac{0.15}{0.55} = \\dfrac{15}{55}", explanation: "Place the joint probability over P(B) and clear the decimals by ×100." },
        { stepNumber: 5, description: "Simplify.", workingLatex: "\\dfrac{15}{55} = \\dfrac{3}{11}", explanation: "Divide numerator and denominator by 5." }
      ],
      finalAnswer: "\\( P(A \\mid B) = \\dfrac{3}{11} \\)",
      canonicalAnswer: "3/11",
    },
  },
  {
    id: "y2cp-031",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 31",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Events \\( S \\) and \\( T \\) satisfy \\( P(S \\cap T') = 0.30 \\), \\( P(S \\cap T) = 0.20 \\), \\( P(S' \\cap T) = 0.10 \\) and \\( P(S' \\cap T') = 0.40 \\). Find (a) \\( P(S \\cup T) \\) and (b) \\( P(S' \\mid T) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>S</Text>
  <Text x={8.3} y={5.9}>T</Text>
  <Text x={2.7} y={3.4}>0.3</Text>
  <Text x={5} y={3.4}>0.2</Text>
  <Text x={7.3} y={3.4}>0.1</Text>
  <Text x={9.2} y={0.7}>0.4</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["venn", "conditional", "P(A'|B)", "union"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Part (a): identify the regions of the union.", workingLatex: "P(S \\cup T) = P(S \\cap T') + P(S \\cap T) + P(S' \\cap T)", explanation: "The union is everything inside at least one circle: S-only, the overlap, and T-only." },
        { stepNumber: 2, description: "Add the three region values.", workingLatex: "= 0.30 + 0.20 + 0.10 = 0.60", explanation: "Check: 1 − P(S' ∩ T') = 1 − 0.40 = 0.60 agrees." },
        { stepNumber: 3, description: "Part (b): write the conditional formula.", workingLatex: "P(S' \\mid T) = \\dfrac{P(S' \\cap T)}{P(T)}", explanation: "Restrict to outcomes in T, then ask what fraction lie outside S." },
        { stepNumber: 4, description: "Find P(T) from its two regions.", workingLatex: "P(T) = P(S \\cap T) + P(S' \\cap T) = 0.20 + 0.10 = 0.30", explanation: "Circle T is the overlap plus the T-only region." },
        { stepNumber: 5, description: "Substitute and evaluate.", workingLatex: "P(S' \\mid T) = \\dfrac{0.10}{0.30} = \\dfrac{1}{3}", explanation: "0.10/0.30 = 1/3. Slip: the numerator is the T-only region, not the overlap." }
      ],
      finalAnswer: "\\( P(S \\cup T) = 0.6 \\) and \\( P(S' \\mid T) = \\dfrac{1}{3} \\)",
      canonicalAnswer: "1/3",
    },
  },
  {
    id: "y2cp-032",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 32",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "In a Venn diagram for events \\( C \\) and \\( D \\): \\( P(C \\cap D') = 0.18 \\), \\( P(C \\cap D) = 0.12 \\), \\( P(C' \\cap D) = 0.28 \\) and \\( P(C' \\cap D') = 0.42 \\). Find \\( P(D \\mid C) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>C</Text>
  <Text x={8.3} y={5.9}>D</Text>
  <Text x={2.7} y={3.4}>0.18</Text>
  <Text x={5} y={3.4}>0.12</Text>
  <Text x={7.3} y={3.4}>0.28</Text>
  <Text x={9.2} y={0.7}>0.42</Text>
</Mafs>`,
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["venn", "conditional", "P(A|B)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the conditional formula.", workingLatex: "P(D \\mid C) = \\dfrac{P(C \\cap D)}{P(C)}", explanation: "Here we condition on C, so the denominator is P(C). Slip: do not divide by P(D)." },
        { stepNumber: 2, description: "Identify the two regions that make up C.", workingLatex: "P(C) = P(C \\cap D') + P(C \\cap D)", explanation: "Circle C splits into the C-only region and the overlap with D." },
        { stepNumber: 3, description: "Add the values to find P(C).", workingLatex: "P(C) = 0.18 + 0.12 = 0.30", explanation: "Use the C-only and overlap regions, not the D-only region." },
        { stepNumber: 4, description: "Substitute and simplify.", workingLatex: "P(D \\mid C) = \\dfrac{0.12}{0.30} = \\dfrac{12}{30} = \\dfrac{2}{5}", explanation: "Clear decimals by ×100 then divide top and bottom by 6." }
      ],
      finalAnswer: "\\( P(D \\mid C) = \\dfrac{2}{5} \\)",
      canonicalAnswer: "2/5",
    },
  },
  {
    id: "y2cp-033",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 33",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Events \\( A \\) and \\( B \\) have \\( P(A) = 0.4 \\), \\( P(B) = 0.5 \\) and \\( P(A \\cap B) = 0.2 \\). Determine whether \\( A \\) and \\( B \\) are independent.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["independence", "test", "P(A∩B)=P(A)P(B)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the independence test.", workingLatex: "A, B \\text{ independent} \\iff P(A \\cap B) = P(A)\\,P(B)", explanation: "Independence is checked by comparing the joint probability with the product of the marginals." },
        { stepNumber: 2, description: "Compute the product P(A)P(B).", workingLatex: "P(A)\\,P(B) = 0.4 \\times 0.5 = 0.20", explanation: "This is the value the joint probability would take if the events were independent." },
        { stepNumber: 3, description: "Note the given joint probability.", workingLatex: "P(A \\cap B) = 0.20", explanation: "Read directly from the question." },
        { stepNumber: 4, description: "Compare the two values.", workingLatex: "P(A \\cap B) = 0.20 = P(A)\\,P(B)", explanation: "The joint probability matches the product of the marginals exactly." },
        { stepNumber: 5, description: "Conclude.", workingLatex: "\\therefore A \\text{ and } B \\text{ are independent.}", explanation: "Because the test equality holds, the events are independent. Slip: a conclusion in words is required for the final mark." }
      ],
      finalAnswer: "Yes — since \\( P(A \\cap B) = 0.2 = P(A)P(B) \\), events \\( A \\) and \\( B \\) are independent.",
    },
  },
  {
    id: "y2cp-034",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 34",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A Venn diagram for events \\( M \\) and \\( N \\) gives \\( P(M \\cap N') = 0.30 \\), \\( P(M \\cap N) = 0.20 \\), \\( P(M' \\cap N) = 0.10 \\) and \\( P(M' \\cap N') = 0.40 \\). Determine whether \\( M \\) and \\( N \\) are independent.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>M</Text>
  <Text x={8.3} y={5.9}>N</Text>
  <Text x={2.7} y={3.4}>0.3</Text>
  <Text x={5} y={3.4}>0.2</Text>
  <Text x={7.3} y={3.4}>0.1</Text>
  <Text x={9.2} y={0.7}>0.4</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["independence", "test", "venn"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the marginal P(M).", workingLatex: "P(M) = P(M \\cap N') + P(M \\cap N) = 0.30 + 0.20 = 0.50", explanation: "Add the M-only region and the overlap." },
        { stepNumber: 2, description: "Find the marginal P(N).", workingLatex: "P(N) = P(M \\cap N) + P(M' \\cap N) = 0.20 + 0.10 = 0.30", explanation: "Add the overlap and the N-only region." },
        { stepNumber: 3, description: "Compute the product of the marginals.", workingLatex: "P(M)\\,P(N) = 0.50 \\times 0.30 = 0.15", explanation: "This is the joint probability expected under independence." },
        { stepNumber: 4, description: "Read off the actual joint probability.", workingLatex: "P(M \\cap N) = 0.20", explanation: "This is the 'both' (overlap) region of the Venn diagram." },
        { stepNumber: 5, description: "Compare and conclude.", workingLatex: "0.20 \\ne 0.15 \\;\\Rightarrow\\; P(M \\cap N) \\ne P(M)\\,P(N)", explanation: "Since the values differ, the events are not independent. Slip: state the inequality and the conclusion in words." }
      ],
      finalAnswer: "No — \\( P(M \\cap N) = 0.2 \\) but \\( P(M)P(N) = 0.15 \\), so \\( M \\) and \\( N \\) are not independent.",
    },
  },
  {
    id: "y2cp-035",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 35",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "For events \\( G \\) and \\( H \\), \\( P(G) = 0.6 \\), \\( P(H) = 0.25 \\) and \\( P(G \\cap H) = 0.15 \\). By comparing \\( P(G \\mid H) \\) with \\( P(G) \\), determine whether \\( G \\) and \\( H \\) are independent.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["independence", "test", "P(A|B)=P(A)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the conditional formula.", workingLatex: "P(G \\mid H) = \\dfrac{P(G \\cap H)}{P(H)}", explanation: "The question asks us to compare P(G | H) with P(G), so first compute the conditional probability." },
        { stepNumber: 2, description: "Substitute the given values.", workingLatex: "P(G \\mid H) = \\dfrac{0.15}{0.25} = \\dfrac{15}{25}", explanation: "Divide the joint probability by P(H); clear decimals by ×100." },
        { stepNumber: 3, description: "Evaluate.", workingLatex: "\\dfrac{15}{25} = 0.6", explanation: "Simplify the fraction (divide by 5) to a decimal." },
        { stepNumber: 4, description: "Compare with P(G).", workingLatex: "P(G \\mid H) = 0.6 = P(G)", explanation: "Independence holds exactly when conditioning on H leaves P(G) unchanged." },
        { stepNumber: 5, description: "Conclude.", workingLatex: "\\therefore G \\text{ and } H \\text{ are independent.}", explanation: "Since P(G | H) equals P(G), the events are independent. Slip: a worded conclusion is needed." }
      ],
      finalAnswer: "Yes — \\( P(G \\mid H) = 0.6 = P(G) \\), so \\( G \\) and \\( H \\) are independent.",
    },
  },
  {
    id: "y2cp-036",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 36",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Events \\( P \\) and \\( Q \\) satisfy \\( P(P \\cap Q') = 0.24 \\), \\( P(P \\cap Q) = 0.16 \\), \\( P(P' \\cap Q) = 0.24 \\) and \\( P(P' \\cap Q') = 0.36 \\). (a) Find \\( P(P \\cup Q) \\). (b) Find \\( P(P \\mid Q) \\). (c) Determine whether \\( P \\) and \\( Q \\) are independent.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>P</Text>
  <Text x={8.3} y={5.9}>Q</Text>
  <Text x={2.7} y={3.4}>0.24</Text>
  <Text x={5} y={3.4}>0.16</Text>
  <Text x={7.3} y={3.4}>0.24</Text>
  <Text x={9.2} y={0.7}>0.36</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["venn", "conditional", "independence", "union"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Part (a): use the complement of the outside region.", workingLatex: "P(P \\cup Q) = 1 - P(P' \\cap Q')", explanation: "Everything except the region outside both circles forms the union." },
        { stepNumber: 2, description: "Evaluate the union.", workingLatex: "= 1 - 0.36 = 0.64", explanation: "Check: 0.24 + 0.16 + 0.24 = 0.64 from adding the three inside regions." },
        { stepNumber: 3, description: "Find the marginal P(Q).", workingLatex: "P(Q) = P(P \\cap Q) + P(P' \\cap Q) = 0.16 + 0.24 = 0.40", explanation: "Add the overlap and the Q-only region; needed for parts (b) and (c)." },
        { stepNumber: 4, description: "Part (b): apply the conditional formula.", workingLatex: "P(P \\mid Q) = \\dfrac{P(P \\cap Q)}{P(Q)} = \\dfrac{0.16}{0.40} = 0.4", explanation: "Divide the joint probability by P(Q)." },
        { stepNumber: 5, description: "Find the marginal P(P).", workingLatex: "P(P) = P(P \\cap Q') + P(P \\cap Q) = 0.24 + 0.16 = 0.40", explanation: "Add the P-only region and the overlap; needed for the independence test." },
        { stepNumber: 6, description: "Part (c): compute the product of the marginals.", workingLatex: "P(P)\\,P(Q) = 0.40 \\times 0.40 = 0.16", explanation: "This is the joint probability expected under independence." },
        { stepNumber: 7, description: "Compare with the joint probability and conclude.", workingLatex: "P(P \\cap Q) = 0.16 = P(P)\\,P(Q) \\;\\Rightarrow\\; \\text{independent}", explanation: "The test equality holds (equivalently P(P | Q) = 0.4 = P(P)), so P and Q are independent." }
      ],
      finalAnswer: "\\( P(P \\cup Q) = 0.64 \\), \\( P(P \\mid Q) = 0.4 \\), and since \\( P(P \\cap Q) = 0.16 = P(P)P(Q) \\), \\( P \\) and \\( Q \\) are independent.",
    },
  },
  {
    id: "y2cp-037",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 37",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Events \\( A \\) and \\( B \\) are such that \\( P(A)=0.4 \\) and \\( P(B\\mid A)=0.35 \\). Find \\( P(A\\cap B) \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["multiplication-rule", "conditional-probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the multiplication (chain) rule.", workingLatex: "P(A\\cap B)=P(A)\\,P(B\\mid A)", explanation: "The joint probability of both events equals the probability of the first event times the conditional probability of the second given the first. This rearranges the definition \\( P(B\\mid A)=\\tfrac{P(A\\cap B)}{P(A)} \\)." },
        { stepNumber: 2, description: "Substitute the given values.", workingLatex: "P(A\\cap B)=0.4\\times 0.35", explanation: "Insert \\( P(A)=0.4 \\) and \\( P(B\\mid A)=0.35 \\). Common slip: multiplying \\( P(A) \\) by \\( P(B) \\) instead of by the conditional \\( P(B\\mid A) \\) — but here \\( P(B) \\) is not even given, only the conditional." },
        { stepNumber: 3, description: "Evaluate the product.", workingLatex: "P(A\\cap B)=0.14", explanation: "Multiplying two probabilities below 1 gives a smaller value, as expected for an intersection." }
      ],
      finalAnswer: "\\( P(A\\cap B)=0.14 \\)",
      canonicalAnswer: "0.14",
    },
  },
  {
    id: "y2cp-038",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 38",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "For two events \\( A \\) and \\( B \\), \\( P(B)=0.6 \\) and \\( P(A\\cap B)=0.18 \\). Find \\( P(A\\mid B) \\), and hence state \\( P(A'\\mid B) \\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["multiplication-rule", "conditional-probability", "rearrange"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the conditional probability definition.", workingLatex: "P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}", explanation: "Conditional probability is the joint probability divided by the probability of the conditioning event. Common slip: writing \\( \\tfrac{P(A\\cap B)}{P(A)} \\) — but we condition on \\( B \\), so the denominator must be \\( P(B) \\)." },
        { stepNumber: 2, description: "Substitute the given values.", workingLatex: "P(A\\mid B)=\\frac{0.18}{0.6}", explanation: "Insert \\( P(A\\cap B)=0.18 \\) on top and \\( P(B)=0.6 \\) on the bottom." },
        { stepNumber: 3, description: "Evaluate the quotient.", workingLatex: "P(A\\mid B)=0.3", explanation: "Dividing \\( 0.18 \\) by \\( 0.6 \\) gives the conditional probability." },
        { stepNumber: 4, description: "Apply the complement within the conditioning event \\( B \\).", workingLatex: "P(A'\\mid B)=1-P(A\\mid B)", explanation: "Given \\( B \\), the events \\( A \\) and \\( A' \\) partition the sample space restricted to \\( B \\), so their conditional probabilities sum to 1. Common slip: \\( P(A'\\mid B)\\neq 1-P(A\\mid B') \\) — the conditioning event must stay fixed as \\( B \\)." },
        { stepNumber: 5, description: "Evaluate the complementary conditional.", workingLatex: "P(A'\\mid B)=1-0.3=0.7", explanation: "Subtract the value found from 1." }
      ],
      finalAnswer: "\\( P(A\\mid B)=0.3 \\) and \\( P(A'\\mid B)=0.7 \\)",
      canonicalAnswer: "0.3",
    },
  },
  {
    id: "y2cp-039",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 39",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A bag contains 5 red counters and 3 blue counters. Two counters are drawn at random without replacement. Find the probability that both counters are red.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
  <Line.Segment point1={[0, 5]} point2={[4, 7.3333]} color="var(--mafs-fg)" />
  <Text x={2} y={6.5667}>5/8</Text>
  <Text x={4.3} y={7.3333} attach="e">R</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 8.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={8.4567}>4/7</Text>
  <Text x={9.3} y={8.5} attach="e">R</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 6.1667]} color="var(--mafs-fg)" />
  <Text x={7.1} y={7.01}>3/7</Text>
  <Text x={9.3} y={6.1667} attach="e">B</Text>
  <Line.Segment point1={[0, 5]} point2={[4, 2.6667]} color="var(--mafs-fg)" />
  <Text x={2} y={4.2333}>3/8</Text>
  <Text x={4.3} y={2.6667} attach="e">B</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 3.8333]} color="var(--mafs-fg)" />
  <Text x={7.1} y={3.79}>5/7</Text>
  <Text x={9.3} y={3.8333} attach="e">R</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 1.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={2.3433}>2/7</Text>
  <Text x={9.3} y={1.5} attach="e">B</Text>
</Mafs>`,
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["multiplication-rule", "tree", "without-replacement"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Probability the first counter drawn is red.", workingLatex: "P(R_1)=\\frac{5}{8}", explanation: "There are 5 red counters out of 8 in total at the first draw." },
        { stepNumber: 2, description: "Probability the second is red given the first was red.", workingLatex: "P(R_2\\mid R_1)=\\frac{4}{7}", explanation: "Drawing without replacement: one red has been removed, leaving 4 reds out of 7 counters. Common slip: keeping \\( \\tfrac{5}{8} \\) again, which would assume replacement." },
        { stepNumber: 3, description: "Apply the multiplication rule along the red-red branch.", workingLatex: "P(R_1\\cap R_2)=P(R_1)\\,P(R_2\\mid R_1)=\\frac{5}{8}\\times\\frac{4}{7}", explanation: "Multiply the two probabilities along the top path of the tree." },
        { stepNumber: 4, description: "Carry out the multiplication.", workingLatex: "P(R_1\\cap R_2)=\\frac{20}{56}", explanation: "Multiply numerators and denominators: \\( 5\\times4=20 \\) over \\( 8\\times7=56 \\)." },
        { stepNumber: 5, description: "Simplify the fraction.", workingLatex: "P(R_1\\cap R_2)=\\frac{20}{56}=\\frac{5}{14}", explanation: "Cancel the common factor 4 from numerator and denominator." }
      ],
      finalAnswer: "\\( P(\\text{both red})=\\dfrac{5}{14} \\)",
      canonicalAnswer: "5/14",
    },
  },
  {
    id: "y2cp-040",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 40",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A factory uses two machines. Machine \\( M_1 \\) makes \\( 70\\% \\) of components and Machine \\( M_2 \\) makes the rest. \\( 4\\% \\) of \\( M_1 \\)'s components are faulty and \\( 9\\% \\) of \\( M_2 \\)'s components are faulty. A component is chosen at random. Find the probability that it is faulty.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
  <Line.Segment point1={[0, 5]} point2={[4, 7.3333]} color="var(--mafs-fg)" />
  <Text x={2} y={6.5667}>0.7</Text>
  <Text x={4.3} y={7.3333} attach="e">M_1</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 8.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={8.4567}>0.04</Text>
  <Text x={9.3} y={8.5} attach="e">F</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 6.1667]} color="var(--mafs-fg)" />
  <Text x={7.1} y={7.01}>0.96</Text>
  <Text x={9.3} y={6.1667} attach="e">F'</Text>
  <Line.Segment point1={[0, 5]} point2={[4, 2.6667]} color="var(--mafs-fg)" />
  <Text x={2} y={4.2333}>0.3</Text>
  <Text x={4.3} y={2.6667} attach="e">M_2</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 3.8333]} color="var(--mafs-fg)" />
  <Text x={7.1} y={3.79}>0.09</Text>
  <Text x={9.3} y={3.8333} attach="e">F</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 1.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={2.3433}>0.91</Text>
  <Text x={9.3} y={1.5} attach="e">F'</Text>
</Mafs>`,
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["total-probability", "tree"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Express 'faulty' as a union of mutually exclusive branches.", workingLatex: "F = (M_1\\cap F)\\cup(M_2\\cap F)", explanation: "A faulty component is produced either by Machine 1 or by Machine 2; these two routes cannot both happen, so they are mutually exclusive. Common slip: forgetting one machine and using only a single branch." },
        { stepNumber: 2, description: "State the total probability rule for this partition.", workingLatex: "P(F)=P(M_1)P(F\\mid M_1)+P(M_2)P(F\\mid M_2)", explanation: "Because \\( M_1 \\) and \\( M_2 \\) partition all components, sum the probability of each faulty path." },
        { stepNumber: 3, description: "Compute the Machine 1 faulty branch.", workingLatex: "P(M_1\\cap F)=0.7\\times0.04=0.028", explanation: "Multiply along the \\( M_1\\to F \\) path. Note \\( 4\\% \\) is the conditional \\( P(F\\mid M_1)=0.04 \\), not the joint probability." },
        { stepNumber: 4, description: "Compute the Machine 2 faulty branch.", workingLatex: "P(M_2\\cap F)=0.3\\times0.09=0.027", explanation: "Multiply along the \\( M_2\\to F \\) path, using \\( P(M_2)=1-0.7=0.3 \\)." },
        { stepNumber: 5, description: "Add the two branches.", workingLatex: "P(F)=0.028+0.027=0.055", explanation: "Sum the mutually exclusive faulty paths to get the overall probability of a faulty component." }
      ],
      finalAnswer: "\\( P(F)=0.055 \\)",
      canonicalAnswer: "0.055",
    },
  },
  {
    id: "y2cp-041",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 41",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Using the factory in the previous setup: Machine \\( M_1 \\) makes \\( 70\\% \\) of components (\\( 4\\% \\) faulty) and Machine \\( M_2 \\) makes \\( 30\\% \\) (\\( 9\\% \\) faulty). A randomly chosen component is found to be faulty. Find the probability it was made by Machine \\( M_2 \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
  <Line.Segment point1={[0, 5]} point2={[4, 7.3333]} color="var(--mafs-fg)" />
  <Text x={2} y={6.5667}>0.7</Text>
  <Text x={4.3} y={7.3333} attach="e">M_1</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 8.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={8.4567}>0.04</Text>
  <Text x={9.3} y={8.5} attach="e">F</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 6.1667]} color="var(--mafs-fg)" />
  <Text x={7.1} y={7.01}>0.96</Text>
  <Text x={9.3} y={6.1667} attach="e">F'</Text>
  <Line.Segment point1={[0, 5]} point2={[4, 2.6667]} color="var(--mafs-fg)" />
  <Text x={2} y={4.2333}>0.3</Text>
  <Text x={4.3} y={2.6667} attach="e">M_2</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 3.8333]} color="var(--mafs-fg)" />
  <Text x={7.1} y={3.79}>0.09</Text>
  <Text x={9.3} y={3.8333} attach="e">F</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 1.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={2.3433}>0.91</Text>
  <Text x={9.3} y={1.5} attach="e">F'</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["reverse-conditional", "bayes", "tree", "total-probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the reverse-conditional (Bayes) formula.", workingLatex: "P(M_2\\mid F)=\\frac{P(M_2)\\,P(F\\mid M_2)}{P(F)}", explanation: "We are given the outcome (faulty) and asked for the cause (Machine 2), so the conditioning is reversed. Common slip: confusing \\( P(M_2\\mid F) \\) with \\( P(F\\mid M_2)=0.09 \\) — the latter is just a branch probability, not the answer." },
        { stepNumber: 2, description: "Compute the numerator (the \\( M_2 \\) faulty branch).", workingLatex: "P(M_2)\\,P(F\\mid M_2)=0.3\\times0.09=0.027", explanation: "Multiply along the \\( M_2\\to F \\) path; this is the joint probability of the wanted route." },
        { stepNumber: 3, description: "Compute the first denominator term (Machine 1 faulty branch).", workingLatex: "P(M_1)\\,P(F\\mid M_1)=0.7\\times0.04=0.028", explanation: "The denominator is the total probability of being faulty, built term by term; this is the \\( M_1\\to F \\) path." },
        { stepNumber: 4, description: "Form the total probability denominator.", workingLatex: "P(F)=0.028+0.027=0.055", explanation: "Add both faulty branches. Common slip: putting only \\( 0.027 \\) in the denominator and forgetting the Machine 1 contribution." },
        { stepNumber: 5, description: "Form the quotient.", workingLatex: "P(M_2\\mid F)=\\frac{0.027}{0.055}", explanation: "Divide the wanted \\( M_2 \\) faulty branch by the total faulty probability." },
        { stepNumber: 6, description: "Simplify and evaluate.", workingLatex: "P(M_2\\mid F)=\\frac{27}{55}\\approx0.491", explanation: "Multiply top and bottom by 1000 to get \\( \\tfrac{27}{55} \\); this already has no common factor." }
      ],
      finalAnswer: "\\( P(M_2\\mid F)=\\dfrac{27}{55}\\approx0.491 \\)",
      canonicalAnswer: "27/55",
    },
  },
  {
    id: "y2cp-042",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 42",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A disease \\( D \\) affects \\( 2\\% \\) of a population. A test gives a positive result \\( + \\) in \\( 95\\% \\) of people who have the disease and in \\( 3\\% \\) of people who do not. A person tests positive. Find the probability that they actually have the disease.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
  <Line.Segment point1={[0, 5]} point2={[4, 7.3333]} color="var(--mafs-fg)" />
  <Text x={2} y={6.5667}>0.02</Text>
  <Text x={4.3} y={7.3333} attach="e">D</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 8.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={8.4567}>0.95</Text>
  <Text x={9.3} y={8.5} attach="e">+</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 6.1667]} color="var(--mafs-fg)" />
  <Text x={7.1} y={7.01}>0.05</Text>
  <Text x={9.3} y={6.1667} attach="e">−</Text>
  <Line.Segment point1={[0, 5]} point2={[4, 2.6667]} color="var(--mafs-fg)" />
  <Text x={2} y={4.2333}>0.98</Text>
  <Text x={4.3} y={2.6667} attach="e">D'</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 3.8333]} color="var(--mafs-fg)" />
  <Text x={7.1} y={3.79}>0.03</Text>
  <Text x={9.3} y={3.8333} attach="e">+</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 1.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={2.3433}>0.97</Text>
  <Text x={9.3} y={1.5} attach="e">−</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["reverse-conditional", "bayes", "tree", "medical-test"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the reverse-conditional (Bayes) formula.", workingLatex: "P(D\\mid +)=\\frac{P(D)\\,P(+\\mid D)}{P(+)}", explanation: "We know the test is positive and want the probability of disease, reversing the given \\( P(+\\mid D) \\). Common slip: answering \\( 0.95 \\), which is \\( P(+\\mid D) \\), not \\( P(D\\mid +) \\)." },
        { stepNumber: 2, description: "Compute the numerator (true-positive branch).", workingLatex: "P(D)\\,P(+\\mid D)=0.02\\times0.95=0.019", explanation: "Multiply along the \\( D\\to + \\) path." },
        { stepNumber: 3, description: "Compute the second denominator term (false-positive branch).", workingLatex: "P(D')\\,P(+\\mid D')=0.98\\times0.03=0.0294", explanation: "Use \\( P(D')=1-0.02=0.98 \\) and the \\( 3\\% \\) false-positive rate. Common slip: forgetting this branch entirely." },
        { stepNumber: 4, description: "Form the total probability of testing positive.", workingLatex: "P(+)=0.019+0.0294=0.0484", explanation: "Add the true-positive and false-positive branches across the whole tree." },
        { stepNumber: 5, description: "Form the quotient.", workingLatex: "P(D\\mid +)=\\frac{0.019}{0.0484}", explanation: "Divide the disease-positive branch by the total positive probability." },
        { stepNumber: 6, description: "Simplify and evaluate.", workingLatex: "P(D\\mid +)=\\frac{190}{484}=\\frac{95}{242}\\approx0.393", explanation: "Cancel the factor 2; a positive result still leaves under \\( 40\\% \\) chance of disease because the disease is rare, so false positives dominate." }
      ],
      finalAnswer: "\\( P(D\\mid +)=\\dfrac{95}{242}\\approx0.393 \\)",
      canonicalAnswer: "95/242",
    },
  },
  {
    id: "y2cp-043",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 43",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A student travels to college by bus or by bicycle. On any day they take the bus with probability \\( 0.6 \\) and cycle otherwise. If they take the bus they are late with probability \\( 0.1 \\); if they cycle they are late with probability \\( 0.25 \\). Given that the student was late on a particular day, find the probability that they cycled.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
  <Line.Segment point1={[0, 5]} point2={[4, 7.3333]} color="var(--mafs-fg)" />
  <Text x={2} y={6.5667}>0.6</Text>
  <Text x={4.3} y={7.3333} attach="e">Bus</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 8.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={8.4567}>0.1</Text>
  <Text x={9.3} y={8.5} attach="e">L</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 6.1667]} color="var(--mafs-fg)" />
  <Text x={7.1} y={7.01}>0.9</Text>
  <Text x={9.3} y={6.1667} attach="e">L'</Text>
  <Line.Segment point1={[0, 5]} point2={[4, 2.6667]} color="var(--mafs-fg)" />
  <Text x={2} y={4.2333}>0.4</Text>
  <Text x={4.3} y={2.6667} attach="e">Cycle</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 3.8333]} color="var(--mafs-fg)" />
  <Text x={7.1} y={3.79}>0.25</Text>
  <Text x={9.3} y={3.8333} attach="e">L</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 1.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={2.3433}>0.75</Text>
  <Text x={9.3} y={1.5} attach="e">L'</Text>
</Mafs>`,
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ["reverse-conditional", "bayes", "tree"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the reverse-conditional (Bayes) formula.", workingLatex: "P(\\text{Cycle}\\mid L)=\\frac{P(\\text{Cycle})\\,P(L\\mid \\text{Cycle})}{P(L)}", explanation: "We know the student was late and want the probability they cycled, reversing the given \\( P(L\\mid\\text{Cycle}) \\). Common slip: confusing this with \\( P(L\\mid\\text{Cycle})=0.25 \\)." },
        { stepNumber: 2, description: "Compute the numerator (cycle-late branch).", workingLatex: "P(\\text{Cycle})\\,P(L\\mid\\text{Cycle})=0.4\\times0.25=0.1", explanation: "Use \\( P(\\text{Cycle})=1-0.6=0.4 \\) and multiply along the cycle-late path." },
        { stepNumber: 3, description: "Compute the first denominator term (bus-late branch).", workingLatex: "P(\\text{Bus})\\,P(L\\mid\\text{Bus})=0.6\\times0.1=0.06", explanation: "Multiply along the bus-late path; this is the other way to end up late." },
        { stepNumber: 4, description: "Form the total probability of being late.", workingLatex: "P(L)=0.06+0.1=0.16", explanation: "Add the bus-late and cycle-late branches. Common slip: using only \\( 0.1 \\) and omitting the bus contribution." },
        { stepNumber: 5, description: "Form the quotient.", workingLatex: "P(\\text{Cycle}\\mid L)=\\frac{0.1}{0.16}", explanation: "Divide the cycle-late branch by the total late probability." },
        { stepNumber: 6, description: "Simplify and evaluate.", workingLatex: "P(\\text{Cycle}\\mid L)=\\frac{5}{8}=0.625", explanation: "Multiply top and bottom by 100 to get \\( \\tfrac{10}{16} \\), then cancel by 2." }
      ],
      finalAnswer: "\\( P(\\text{Cycle}\\mid L)=\\dfrac{5}{8}=0.625 \\)",
      canonicalAnswer: "0.625",
    },
  },
  {
    id: "y2cp-044",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 44",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The Venn diagram shows probabilities for two events \\( A \\) and \\( B \\): \\( P(\\text{only }A)=0.25 \\), \\( P(A\\cap B)=0.15 \\), \\( P(\\text{only }B)=0.35 \\) and \\( P((A\\cup B)')=0.25 \\). Find (a) \\( P(A\\cap B') \\), (b) \\( P(A'\\cup B) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>A</Text>
  <Text x={8.3} y={5.9}>B</Text>
  <Text x={2.7} y={3.4}>0.25</Text>
  <Text x={5} y={3.4}>0.15</Text>
  <Text x={7.3} y={3.4}>0.35</Text>
  <Text x={9.2} y={0.7}>0.25</Text>
</Mafs>`,
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["venn", "set-notation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the region \\( A\\cap B' \\) for part (a).", workingLatex: "A\\cap B'=\\text{the part of }A\\text{ lying outside }B=\\text{'only }A\\text{'}", explanation: "\\( A\\cap B' \\) means 'in \\( A \\) and not in \\( B \\)', which is exactly the 'only A' crescent. Common slip: reading it as the overlap \\( A\\cap B \\)." },
        { stepNumber: 2, description: "Read off part (a).", workingLatex: "P(A\\cap B')=P(\\text{only }A)=0.25", explanation: "The 'only A' region carries probability \\( 0.25 \\) on the diagram." },
        { stepNumber: 3, description: "Find the complementary region for part (b) using De Morgan.", workingLatex: "(A'\\cup B)'=(A')'\\cap B'=A\\cap B'", explanation: "By De Morgan's law the complement of a union is the intersection of complements; this is again the 'only A' region." },
        { stepNumber: 4, description: "Apply the complement rule.", workingLatex: "P(A'\\cup B)=1-P(A\\cap B')=1-0.25", explanation: "Subtract the probability of the complementary 'only A' region from 1." },
        { stepNumber: 5, description: "Evaluate part (b).", workingLatex: "P(A'\\cup B)=0.75", explanation: "This region covers everything except 'only A' — i.e. the overlap, only B, and the outside, \\( 0.15+0.35+0.25=0.75 \\) as a check." }
      ],
      finalAnswer: "(a) \\( P(A\\cap B')=0.25 \\); (b) \\( P(A'\\cup B)=0.75 \\)",
    },
  },
  {
    id: "y2cp-045",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 45",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "In a class of 30 students, 18 study Physics (\\( P \\)), 14 study Chemistry (\\( C \\)) and 9 study both. Draw / use a Venn diagram of counts to find (a) \\( P((P\\cup C)') \\), (b) \\( P(P\\cap C') \\), (c) \\( P(P\\mid C) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>P</Text>
  <Text x={8.3} y={5.9}>C</Text>
  <Text x={2.7} y={3.4}>9</Text>
  <Text x={5} y={3.4}>9</Text>
  <Text x={7.3} y={3.4}>5</Text>
  <Text x={9.2} y={0.7}>7</Text>
</Mafs>`,
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["venn", "set-notation", "conditional-probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the 'only Physics' region.", workingLatex: "\\text{only }P=18-9=9", explanation: "Subtract the 9 who study both from the 18 Physics students, since the overlap is counted inside the 18." },
        { stepNumber: 2, description: "Find the 'only Chemistry' region.", workingLatex: "\\text{only }C=14-9=5", explanation: "Subtract the overlap of 9 from the 14 Chemistry students." },
        { stepNumber: 3, description: "Find the number studying neither subject.", workingLatex: "(P\\cup C)'=30-(9+9+5)=30-23=7", explanation: "Those in the union number \\( 9+9+5=23 \\); the rest of the 30 are outside both circles. Common slip: doing \\( 30-18-14 \\) and double-subtracting the overlap." },
        { stepNumber: 4, description: "Compute part (a).", workingLatex: "P((P\\cup C)')=\\frac{7}{30}", explanation: "7 of the 30 students study neither subject." },
        { stepNumber: 5, description: "Compute part (b).", workingLatex: "P(P\\cap C')=\\frac{9}{30}=\\frac{3}{10}", explanation: "\\( P\\cap C' \\) is 'Physics and not Chemistry' = the 'only Physics' count of 9, over 30." },
        { stepNumber: 6, description: "Compute part (c) with the conditional formula.", workingLatex: "P(P\\mid C)=\\frac{P(P\\cap C)}{P(C)}=\\frac{9/30}{14/30}=\\frac{9}{14}", explanation: "Restrict the sample space to the 14 Chemistry students; 9 of them also study Physics. The \\( /30 \\) factors cancel. Common slip: dividing by 30 instead of by the 14 Chemistry students." }
      ],
      finalAnswer: "(a) \\( \\tfrac{7}{30} \\); (b) \\( \\tfrac{3}{10} \\); (c) \\( P(P\\mid C)=\\tfrac{9}{14} \\)",
    },
  },
  {
    id: "y2cp-046",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 46",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The two-way table shows the number of adults at a sports centre by activity and gender.\n\n| | Swim (\\(S\\)) | Gym (\\(G\\)) | Total |\n|---|---|---|---|\n| Male (\\(M\\)) | 24 | 36 | 60 |\n| Female (\\(F\\)) | 30 | 10 | 40 |\n| Total | 54 | 46 | 100 |\n\nA person is chosen at random. Find (a) \\( P(F\\mid G) \\) and (b) \\( P(S\\mid F) \\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["two-way-table", "conditional-probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the conditional formula for part (a).", workingLatex: "P(F\\mid G)=\\frac{P(F\\cap G)}{P(G)}", explanation: "Conditioning on \\( G \\) means we restrict to gym users; the denominator is \\( P(G) \\). Common slip: dividing by \\( P(F) \\) instead, which would give \\( P(G\\mid F) \\)." },
        { stepNumber: 2, description: "Read the counts from the table for part (a).", workingLatex: "P(F\\mid G)=\\frac{10/100}{46/100}=\\frac{10}{46}", explanation: "10 females do gym (row \\( F \\), column \\( G \\)) out of the 46 gym users in total. The \\( /100 \\) factors cancel." },
        { stepNumber: 3, description: "Simplify part (a).", workingLatex: "P(F\\mid G)=\\frac{10}{46}=\\frac{5}{23}", explanation: "Cancel the common factor 2." },
        { stepNumber: 4, description: "Set up the conditional formula for part (b).", workingLatex: "P(S\\mid F)=\\frac{P(S\\cap F)}{P(F)}", explanation: "Now we condition on \\( F \\), so the denominator is \\( P(F) \\), the 40 females." },
        { stepNumber: 5, description: "Read the counts and simplify part (b).", workingLatex: "P(S\\mid F)=\\frac{30/100}{40/100}=\\frac{30}{40}=\\frac{3}{4}", explanation: "30 of the 40 females swim; cancel by 10." }
      ],
      finalAnswer: "(a) \\( P(F\\mid G)=\\dfrac{5}{23} \\); (b) \\( P(S\\mid F)=\\dfrac{3}{4} \\)",
    },
  },
  {
    id: "y2cp-047",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 47",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The two-way table classifies 200 commuters by transport mode and whether they hold a season ticket.\n\n| | Season (\\(T\\)) | No season (\\(T'\\)) | Total |\n|---|---|---|---|\n| Train (\\(R\\)) | 48 | 32 | 80 |\n| Bus (\\(R'\\)) | 72 | 48 | 120 |\n| Total | 120 | 80 | 200 |\n\nDetermine, with calculation, whether the events 'travels by Train' (\\(R\\)) and 'holds a season ticket' (\\(T\\)) are independent.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["two-way-table", "independence", "conditional-probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compute the marginal probability of Train.", workingLatex: "P(R)=\\frac{80}{200}=0.4", explanation: "Read the Train row total (80) over the grand total (200)." },
        { stepNumber: 2, description: "Compute the marginal probability of Season ticket.", workingLatex: "P(T)=\\frac{120}{200}=0.6", explanation: "Read the Season column total (120) over the grand total (200)." },
        { stepNumber: 3, description: "Compute the joint probability.", workingLatex: "P(R\\cap T)=\\frac{48}{200}=0.24", explanation: "48 commuters are in both the Train row and the Season column." },
        { stepNumber: 4, description: "Compute the product of the marginals.", workingLatex: "P(R)\\,P(T)=0.4\\times0.6=0.24", explanation: "The independence test compares this product with the joint probability." },
        { stepNumber: 5, description: "Compare and conclude.", workingLatex: "P(R\\cap T)=0.24=P(R)\\,P(T)\\ \\Rightarrow\\ R\\text{ and }T\\text{ are independent}", explanation: "Independence holds exactly when the joint equals the product of marginals; here they match, so the events are independent. Common slip: stating a conclusion without computing both sides." }
      ],
      finalAnswer: "Independent, since \\( P(R\\cap T)=0.24=P(R)P(T) \\).",
    },
  },
  {
    id: "y2cp-048",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 48",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Events \\( A \\) and \\( B \\) are independent with \\( P(A)=0.5 \\) and \\( P(B)=0.3 \\). Find (a) \\( P(A\\cap B) \\), (b) \\( P(A\\cup B) \\), (c) \\( P((A\\cup B)') \\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["independence", "venn", "set-notation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Use independence for the intersection (part a).", workingLatex: "P(A\\cap B)=P(A)\\,P(B)=0.5\\times0.3=0.15", explanation: "For independent events the joint probability is the product of the marginals. This product rule is only valid because independence is stated." },
        { stepNumber: 2, description: "State the addition rule for part (b).", workingLatex: "P(A\\cup B)=P(A)+P(B)-P(A\\cap B)", explanation: "The union counts each region once; the overlap is subtracted to avoid double-counting. Common slip: omitting the \\( -P(A\\cap B) \\) term." },
        { stepNumber: 3, description: "Substitute and evaluate the union.", workingLatex: "P(A\\cup B)=0.5+0.3-0.15=0.65", explanation: "Insert the marginals and the intersection found in part (a)." },
        { stepNumber: 4, description: "Take the complement for part (c).", workingLatex: "P((A\\cup B)')=1-P(A\\cup B)=1-0.65=0.35", explanation: "The complement of the union is everything outside both events." }
      ],
      finalAnswer: "(a) \\( 0.15 \\); (b) \\( 0.65 \\); (c) \\( P((A\\cup B)')=0.35 \\)",
    },
  },
  {
    id: "y2cp-049",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 49",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A survey of 150 people records whether they exercise regularly (\\(E\\)) and whether they sleep at least 7 hours (\\(H\\)).\n\n| | \\(H\\) | \\(H'\\) | Total |\n|---|---|---|---|\n| \\(E\\) | 45 | 15 | 60 |\n| \\(E'\\) | 50 | 40 | 90 |\n| Total | 95 | 55 | 150 |\n\n(a) Find \\( P(H\\mid E) \\). (b) Determine whether \\( E \\) and \\( H \\) are independent.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["two-way-table", "independence", "conditional-probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the conditional probability for part (a).", workingLatex: "P(H\\mid E)=\\frac{P(H\\cap E)}{P(E)}=\\frac{45/150}{60/150}", explanation: "Condition on \\( E \\): restrict to the 60 who exercise. The \\( /150 \\) factors cancel." },
        { stepNumber: 2, description: "Evaluate part (a).", workingLatex: "P(H\\mid E)=\\frac{45}{60}=0.75", explanation: "45 of the 60 exercisers sleep at least 7 hours; cancel by 15." },
        { stepNumber: 3, description: "Compute the marginal \\( P(H) \\) for the independence test.", workingLatex: "P(H)=\\frac{95}{150}=\\frac{19}{30}\\approx0.633", explanation: "95 of all 150 people sleep at least 7 hours. This is the unconditional probability to compare against." },
        { stepNumber: 4, description: "State and apply the independence criterion.", workingLatex: "\\text{Independent}\\iff P(H\\mid E)=P(H)", explanation: "Events are independent precisely when conditioning on \\( E \\) leaves the probability of \\( H \\) unchanged." },
        { stepNumber: 5, description: "Compare and conclude.", workingLatex: "P(H\\mid E)=0.75\\neq0.633=P(H)\\ \\Rightarrow\\ E\\text{ and }H\\text{ are NOT independent}", explanation: "The conditional differs from the marginal, so the events are dependent. Common slip: declaring independence just because both probabilities are 'close'." }
      ],
      finalAnswer: "(a) \\( P(H\\mid E)=0.75 \\); (b) Not independent, since \\( P(H\\mid E)=0.75\\neq\\tfrac{19}{30}=P(H) \\).",
    },
  },
  {
    id: "y2cp-050",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 50",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "In a Venn diagram for events \\( A \\) and \\( B \\), the region probabilities are: only \\( A=0.3 \\), the intersection \\( A\\cap B=x \\), only \\( B=0.4-x \\), and outside both \\( =0.3 \\). Given that \\( P(A\\mid B)=0.6 \\), find the value of \\( x \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>A</Text>
  <Text x={8.3} y={5.9}>B</Text>
  <Text x={2.7} y={3.4}>0.3</Text>
  <Text x={5} y={3.4}>x</Text>
  <Text x={7.3} y={3.4}>0.4-x</Text>
  <Text x={9.2} y={0.7}>0.3</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["conditional-probability", "venn", "algebraic-unknown", "working-backwards"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the sum of the four disjoint regions.", workingLatex: "0.3+x+(0.4-x)+0.3", explanation: "The only-A, intersection, only-B and outside regions partition the sample space, so adding them should give 1. Listing them first makes sure no region is forgotten." },
        { stepNumber: 2, description: "Simplify the total and observe x cancels.", workingLatex: "0.3+x+0.4-x+0.3=1.0", explanation: "The +x and -x cancel, leaving 0.3+0.4+0.3=1 for every value of x. Slip to avoid: do not try to solve for x from the total here, because it is satisfied automatically — the conditional is what pins x down." },
        { stepNumber: 3, description: "Express P(B) from its two regions.", workingLatex: "P(B)=x+(0.4-x)", explanation: "P(B) is everything inside circle B: the intersection plus only-B. A common slip is to use only the intersection or only the only-B region." },
        { stepNumber: 4, description: "Simplify P(B).", workingLatex: "P(B)=0.4", explanation: "Again the x-terms cancel, so P(B)=0.4 is a fixed constant — convenient, because it makes the conditional equation linear in x." },
        { stepNumber: 5, description: "Write the conditional-probability definition.", workingLatex: "P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}", explanation: "By definition the conditional is the intersection probability divided by the conditioning event's probability. Slip to avoid: do not divide by P(A) — we are conditioning on B." },
        { stepNumber: 6, description: "Substitute the known pieces.", workingLatex: "\\frac{x}{0.4}=0.6", explanation: "P(A\\cap B)=x and P(B)=0.4, and the right-hand side is the given value 0.6. This is now a one-step equation for x." },
        { stepNumber: 7, description: "Multiply both sides by 0.4.", workingLatex: "x=0.6\\times 0.4", explanation: "Clearing the denominator isolates x. Keep the multiplication unevaluated for one line so the arithmetic is its own checkable step." },
        { stepNumber: 8, description: "Evaluate the product.", workingLatex: "x=0.24", explanation: "0.6\\times0.4=0.24. Decimal-point slip to avoid: this is 0.24, not 0.024." },
        { stepNumber: 9, description: "Back-substitute to check the conditional.", workingLatex: "\\frac{0.24}{0.4}=0.6\\ \\checkmark", explanation: "Putting x=0.24 back into x/P(B) reproduces the stated P(A\\mid B)=0.6, confirming the value." },
        { stepNumber: 10, description: "Check all regions are valid probabilities.", workingLatex: "0.4-0.24=0.16\\ge 0;\\quad 0.3,\\ 0.24,\\ 0.16,\\ 0.3\\in[0,1]", explanation: "only-B = 0.16 is non-negative and every region lies in [0,1], and they sum to 1, so x=0.24 is a genuinely valid solution." }
      ],
      finalAnswer: "\\( x=0.24 \\).",
      canonicalAnswer: "0.24",
    },
  },
  {
    id: "y2cp-051",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 51",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "For events \\( A \\) and \\( B \\), the Venn regions have probabilities: only \\( A=2x \\), \\( A\\cap B=x \\), only \\( B=0.25 \\), and neither \\( =0.15 \\). Use the fact that all probabilities sum to \\( 1 \\) to find \\( x \\), and hence find \\( P(A\\mid B) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>A</Text>
  <Text x={8.3} y={5.9}>B</Text>
  <Text x={2.7} y={3.4}>2x</Text>
  <Text x={5} y={3.4}>x</Text>
  <Text x={7.3} y={3.4}>0.25</Text>
  <Text x={9.2} y={0.7}>0.15</Text>
</Mafs>`,
    marks: 6,
    examStyle: false,
    yearCreated: 2026,
    tags: ["conditional-probability", "venn", "algebraic-unknown", "total-equals-one"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Add the four disjoint regions and set the total to 1.", workingLatex: "2x+x+0.25+0.15=1", explanation: "The four regions partition the sample space, so their probabilities must sum to 1. Here, unlike a self-cancelling diagram, the x-terms survive, so the total really does determine x." },
        { stepNumber: 2, description: "Combine the x-terms.", workingLatex: "3x+0.25+0.15=1", explanation: "2x+x=3x. Slip to avoid: do not write x+x=2x and lose the only-A coefficient — only-A is 2x, not x." },
        { stepNumber: 3, description: "Combine the constant terms.", workingLatex: "3x+0.40=1", explanation: "0.25+0.15=0.40. Collecting numbers separately keeps the equation tidy." },
        { stepNumber: 4, description: "Subtract 0.40 from both sides.", workingLatex: "3x=0.60", explanation: "Isolating the x-term is the first half of solving the linear equation." },
        { stepNumber: 5, description: "Divide both sides by 3.", workingLatex: "x=0.20", explanation: "0.60\\div3=0.20. This is the value of the intersection (and half of only-A)." },
        { stepNumber: 6, description: "Write P(B) from its regions.", workingLatex: "P(B)=x+0.25", explanation: "P(B) is the intersection plus only-B. Slip to avoid: do not add the only-A region 2x — that lies outside B." },
        { stepNumber: 7, description: "Substitute x to evaluate P(B).", workingLatex: "P(B)=0.20+0.25=0.45", explanation: "With x=0.20 the conditioning probability is 0.45." },
        { stepNumber: 8, description: "Identify P(A\\cap B).", workingLatex: "P(A\\cap B)=x=0.20", explanation: "The intersection region is exactly x, now known to be 0.20." },
        { stepNumber: 9, description: "Apply the conditional-probability definition.", workingLatex: "P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}=\\frac{0.20}{0.45}", explanation: "Divide the intersection by P(B). Conditioning is on B, so the denominator is P(B)." },
        { stepNumber: 10, description: "Simplify the fraction.", workingLatex: "\\frac{0.20}{0.45}=\\frac{20}{45}=\\frac{4}{9}", explanation: "Multiply top and bottom by 100, then cancel the common factor 5. As a decimal this is 0.4\\overline{4}." },
        { stepNumber: 11, description: "Back-substitute x=0.20 into the total to check.", workingLatex: "2(0.20)+0.20+0.25+0.15=0.40+0.20+0.40=1\\ \\checkmark", explanation: "The regions sum to exactly 1 and each lies in [0,1], so x=0.20 is valid." }
      ],
      finalAnswer: "\\( x=0.20 \\) and \\( P(A\\mid B)=\\dfrac{4}{9} \\).",
      canonicalAnswer: "0.2",
    },
  },
  {
    id: "y2cp-052",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 52",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Events \\( A \\) and \\( B \\) have \\( P(A)=0.4 \\) and \\( P(B)=0.5 \\). The probability of \\( A\\cap B \\) is the unknown \\( x \\). Given that \\( A \\) and \\( B \\) are independent, find \\( x \\), and hence find \\( P(A\\cup B) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>A</Text>
  <Text x={8.3} y={5.9}>B</Text>
  <Text x={2.7} y={3.4}>0.4-x</Text>
  <Text x={5} y={3.4}>x</Text>
  <Text x={7.3} y={3.4}>0.5-x</Text>
  <Text x={9.2} y={0.7}>0.1+x</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["conditional-probability", "independence", "working-backwards", "venn"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the independence condition.", workingLatex: "P(A\\cap B)=P(A)\\,P(B)", explanation: "Two events are independent exactly when the probability of their intersection equals the product of their individual probabilities. Slip to avoid: independence multiplies probabilities — it does not mean the events are mutually exclusive (which would give intersection 0)." },
        { stepNumber: 2, description: "Replace the intersection by x.", workingLatex: "x=P(A)\\,P(B)", explanation: "The unknown intersection is x, so the independence equation becomes an equation for x directly." },
        { stepNumber: 3, description: "Substitute the given marginals.", workingLatex: "x=0.4\\times 0.5", explanation: "P(A)=0.4 and P(B)=0.5 are given; keep the product unevaluated for one line so the arithmetic is its own step." },
        { stepNumber: 4, description: "Evaluate the product.", workingLatex: "x=0.20", explanation: "0.4\\times0.5=0.20. Decimal slip to avoid: this is 0.2, not 0.02." },
        { stepNumber: 5, description: "Back-substitute via a conditional to verify independence.", workingLatex: "P(A\\mid B)=\\frac{x}{P(B)}=\\frac{0.20}{0.5}=0.4=P(A)\\ \\checkmark", explanation: "Under independence the conditional P(A\\mid B) must equal the unconditional P(A); it does, confirming x=0.20." },
        { stepNumber: 6, description: "Write the addition rule for the union.", workingLatex: "P(A\\cup B)=P(A)+P(B)-P(A\\cap B)", explanation: "Inclusion–exclusion subtracts the intersection once because it was counted in both P(A) and P(B)." },
        { stepNumber: 7, description: "Substitute the values.", workingLatex: "P(A\\cup B)=0.4+0.5-0.20", explanation: "Use the given marginals and the x just found. Slip to avoid: subtract the intersection, do not add it." },
        { stepNumber: 8, description: "Evaluate the union.", workingLatex: "P(A\\cup B)=0.70", explanation: "0.4+0.5-0.2=0.7, a valid probability in [0,1] consistent with the Venn regions 0.2, 0.2, 0.3 inside the union." }
      ],
      finalAnswer: "\\( x=0.20 \\) and \\( P(A\\cup B)=0.70 \\).",
      canonicalAnswer: "0.2",
    },
  },
  {
    id: "y2cp-053",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 53",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "For events \\( A \\) and \\( B \\): only \\( A=0.5-x \\), \\( A\\cap B=x \\), only \\( B=0.3-x \\), and neither \\( =0.2+x \\). Given that \\( P(A\\mid B)=\\dfrac{1}{3} \\), find \\( x \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>A</Text>
  <Text x={8.3} y={5.9}>B</Text>
  <Text x={2.7} y={3.4}>0.5-x</Text>
  <Text x={5} y={3.4}>x</Text>
  <Text x={7.3} y={3.4}>0.3-x</Text>
  <Text x={9.2} y={0.7}>0.2+x</Text>
</Mafs>`,
    marks: 7,
    examStyle: false,
    yearCreated: 2026,
    tags: ["conditional-probability", "venn", "algebraic-unknown", "quadratic"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Add the four regions.", workingLatex: "(0.5-x)+x+(0.3-x)+(0.2+x)", explanation: "List every region first so none is dropped before checking the total." },
        { stepNumber: 2, description: "Simplify and confirm the total is 1 for any x.", workingLatex: "0.5+0.3+0.2 + (-x+x-x+x)=1.0", explanation: "The constants sum to 1 and the x-terms cancel, so the total holds automatically. Slip to avoid: you cannot get x from the total here; you must use the conditional." },
        { stepNumber: 3, description: "Express P(B) from its two regions.", workingLatex: "P(B)=x+(0.3-x)", explanation: "P(B) is the intersection plus only-B." },
        { stepNumber: 4, description: "Simplify P(B).", workingLatex: "P(B)=0.3", explanation: "The x-terms cancel, giving the constant P(B)=0.3 — this makes the conditional equation linear." },
        { stepNumber: 5, description: "Write the conditional definition with the given value.", workingLatex: "P(A\\mid B)=\\frac{x}{0.3}=\\frac{1}{3}", explanation: "Intersection over P(B) equals the given 1/3. Conditioning is on B, so divide by P(B)=0.3." },
        { stepNumber: 6, description: "Multiply both sides by 0.3.", workingLatex: "x=\\frac{1}{3}\\times 0.3", explanation: "Clear the denominator to isolate x." },
        { stepNumber: 7, description: "Evaluate x.", workingLatex: "x=0.1", explanation: "One third of 0.3 is 0.1." },
        { stepNumber: 8, description: "Evaluate all four regions at x=0.1.", workingLatex: "0.5-0.1=0.4,\\ \\ x=0.1,\\ \\ 0.3-0.1=0.2,\\ \\ 0.2+0.1=0.3", explanation: "The regions are 0.4, 0.1, 0.2, 0.3 — all non-negative and in [0,1], summing to 1, so x=0.1 is valid." },
        { stepNumber: 9, description: "Back-substitute into the conditional to check.", workingLatex: "\\frac{0.1}{0.3}=\\frac{1}{3}\\ \\checkmark", explanation: "Reproduces the stated P(A\\mid B)=1/3, confirming the solution." }
      ],
      finalAnswer: "\\( x=0.1 \\).",
      canonicalAnswer: "0.1",
    },
  },
  {
    id: "y2cp-054",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 54",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A factory has three machines. A component passes through machine 1, then machine 2, then machine 3. Each machine independently passes a good component with probability \\( 0.9 \\), \\( 0.8 \\) and \\( p \\) respectively. A component is accepted only if all three machines pass it. Given that the overall probability of acceptance is \\( 0.504 \\), find \\( p \\).",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["conditional-probability", "tree", "three-stage", "working-backwards"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Express acceptance as the intersection of three passes.", workingLatex: "P(\\text{accept})=P(\\text{pass}_1\\cap\\text{pass}_2\\cap\\text{pass}_3)", explanation: "A component is accepted only if it passes machine 1 AND machine 2 AND machine 3, so acceptance is the intersection of the three pass-events." },
        { stepNumber: 2, description: "Use independence to turn the intersection into a product.", workingLatex: "P(\\text{accept})=0.9\\times 0.8\\times p", explanation: "Because the machines act independently, the probability of the joint event is the product of the individual pass-probabilities. Slip to avoid: do not add the probabilities — independent successes multiply." },
        { stepNumber: 3, description: "Multiply the two known factors.", workingLatex: "0.9\\times 0.8=0.72", explanation: "Combine the first two machine probabilities into a single coefficient of p." },
        { stepNumber: 4, description: "Form the equation.", workingLatex: "0.72\\,p=0.504", explanation: "Set the product equal to the given overall acceptance probability 0.504." },
        { stepNumber: 5, description: "Divide both sides by 0.72.", workingLatex: "p=\\frac{0.504}{0.72}", explanation: "Isolate p by dividing by its coefficient." },
        { stepNumber: 6, description: "Evaluate the quotient.", workingLatex: "p=0.7", explanation: "0.504\\div0.72=0.7. Check the magnitude: dividing by 0.72 should increase the digits, giving 0.7 not 0.07." },
        { stepNumber: 7, description: "Back-substitute to check the overall acceptance.", workingLatex: "0.9\\times 0.8\\times 0.7=0.504\\ \\checkmark", explanation: "Reproduces the stated 0.504, and p=0.7 is a valid probability in [0,1]." }
      ],
      finalAnswer: "\\( p=0.7 \\).",
      canonicalAnswer: "0.7",
    },
  },
  {
    id: "y2cp-055",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 55",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Bag 1 contains 3 red and 2 blue counters; Bag 2 contains \\( r \\) red and \\( 6 \\) blue counters. A fair coin chooses the bag (each bag equally likely), then one counter is drawn. The overall probability of drawing red is \\( 0.5 \\). Find \\( r \\).",
    marks: 7,
    examStyle: false,
    yearCreated: 2026,
    tags: ["conditional-probability", "tree", "law-of-total-probability", "working-backwards"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the bag-selection probabilities.", workingLatex: "P(B_1)=P(B_2)=\\tfrac12", explanation: "A fair coin chooses the bag, so each bag is equally likely with probability 1/2. These are the first-stage branches of the tree." },
        { stepNumber: 2, description: "Find the probability of red from Bag 1.", workingLatex: "P(R\\mid B_1)=\\frac{3}{3+2}=\\frac{3}{5}", explanation: "Bag 1 has 3 red out of 5 counters in total." },
        { stepNumber: 3, description: "Find the probability of red from Bag 2 in terms of r.", workingLatex: "P(R\\mid B_2)=\\frac{r}{r+6}", explanation: "Bag 2 has r red out of r+6 counters. Slip to avoid: the denominator is the total r+6, not just 6." },
        { stepNumber: 4, description: "Apply the law of total probability.", workingLatex: "P(R)=\\tfrac12\\cdot\\tfrac{3}{5}+\\tfrac12\\cdot\\frac{r}{r+6}", explanation: "Sum over the two bag-branches: probability of each bag times the probability of red given that bag." },
        { stepNumber: 5, description: "Set the total probability equal to 0.5.", workingLatex: "\\tfrac12\\cdot\\tfrac{3}{5}+\\tfrac12\\cdot\\frac{r}{r+6}=0.5", explanation: "The overall probability of red is given as 0.5." },
        { stepNumber: 6, description: "Multiply through by 2.", workingLatex: "\\frac{3}{5}+\\frac{r}{r+6}=1", explanation: "Clearing the common factor 1/2 removes the fractions on the left and turns 0.5 into 1." },
        { stepNumber: 7, description: "Isolate the unknown fraction.", workingLatex: "\\frac{r}{r+6}=1-\\frac{3}{5}=\\frac{2}{5}", explanation: "Subtract 3/5 from both sides; 1-3/5=2/5." },
        { stepNumber: 8, description: "Cross-multiply.", workingLatex: "5r=2(r+6)", explanation: "Multiplying both sides by 5(r+6) clears both denominators." },
        { stepNumber: 9, description: "Expand the right-hand side.", workingLatex: "5r=2r+12", explanation: "Distribute the 2 over (r+6)." },
        { stepNumber: 10, description: "Collect and solve for r.", workingLatex: "3r=12\\implies r=4", explanation: "Subtract 2r, then divide by 3. A count of counters must be a non-negative integer, and r=4 qualifies." },
        { stepNumber: 11, description: "Back-substitute r=4 to check.", workingLatex: "\\tfrac12\\cdot\\tfrac{3}{5}+\\tfrac12\\cdot\\frac{4}{10}=0.3+0.2=0.5\\ \\checkmark", explanation: "With r=4, Bag 2 holds 4 red of 10, giving P(R)=0.5 as required." }
      ],
      finalAnswer: "\\( r=4 \\).",
      canonicalAnswer: "4",
    },
  },
  {
    id: "y2cp-056",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 56",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Events \\( A \\) and \\( B \\) satisfy \\( P(A)=0.6 \\) and \\( P(A\\cup B)=0.8 \\). The probability \\( P(B)=x \\) is unknown. Given that \\( A \\) and \\( B \\) are independent, find \\( x \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>A</Text>
  <Text x={8.3} y={5.9}>B</Text>
  <Text x={2.7} y={3.4}>0.6-0.6x</Text>
  <Text x={5} y={3.4}>0.6x</Text>
  <Text x={7.3} y={3.4}>0.4x</Text>
  <Text x={9.2} y={0.7}>0.2</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["conditional-probability", "independence", "venn", "working-backwards"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the addition rule.", workingLatex: "P(A\\cup B)=P(A)+P(B)-P(A\\cap B)", explanation: "Inclusion–exclusion relates the union to the two marginals and the intersection." },
        { stepNumber: 2, description: "Express the intersection using independence.", workingLatex: "P(A\\cap B)=P(A)\\,P(B)=0.6x", explanation: "Independence lets us replace the intersection by the product of marginals; with P(B)=x this is 0.6x. Slip to avoid: this product step is only valid because independence is given." },
        { stepNumber: 3, description: "Substitute all known quantities into the addition rule.", workingLatex: "0.8=0.6+x-0.6x", explanation: "Replace P(A\\cup B) by 0.8, P(A) by 0.6, P(B) by x and the intersection by 0.6x." },
        { stepNumber: 4, description: "Collect the x-terms.", workingLatex: "0.8=0.6+0.4x", explanation: "x-0.6x=0.4x. Slip to avoid: 1\\times x minus 0.6x is 0.4x, not 0.6x." },
        { stepNumber: 5, description: "Subtract 0.6 from both sides.", workingLatex: "0.2=0.4x", explanation: "Isolate the x-term." },
        { stepNumber: 6, description: "Divide both sides by 0.4.", workingLatex: "x=\\frac{0.2}{0.4}=0.5", explanation: "Solving the linear equation gives x=0.5, a valid probability in [0,1]." },
        { stepNumber: 7, description: "Back-substitute x=0.5 to check the union.", workingLatex: "0.6+0.5-0.6\\times 0.5=1.1-0.3=0.8\\ \\checkmark", explanation: "Reproduces P(A\\cup B)=0.8, confirming x=0.5." }
      ],
      finalAnswer: "\\( x=P(B)=0.5 \\).",
      canonicalAnswer: "0.5",
    },
  },
  {
    id: "y2cp-057",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 57",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "For events \\( A \\) and \\( B \\) in a Venn diagram: only \\( A=0.3 \\), \\( A\\cap B=x \\), only \\( B=0.4-x \\), and neither \\( =0.3 \\). Given that \\( A \\) and \\( B \\) are independent, set up and solve an equation to find \\( x \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>A</Text>
  <Text x={8.3} y={5.9}>B</Text>
  <Text x={2.7} y={3.4}>0.3</Text>
  <Text x={5} y={3.4}>x</Text>
  <Text x={7.3} y={3.4}>0.4-x</Text>
  <Text x={9.2} y={0.7}>0.3</Text>
</Mafs>`,
    marks: 8,
    examStyle: false,
    yearCreated: 2026,
    tags: ["conditional-probability", "venn", "independence", "quadratic", "working-backwards"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Add the four regions.", workingLatex: "0.3+x+(0.4-x)+0.3=1.0", explanation: "The regions partition the sample space; here the x-terms cancel so the total is automatically 1 for any x. Independence, not the total, must fix x." },
        { stepNumber: 2, description: "Express P(A) from only-A plus the intersection.", workingLatex: "P(A)=0.3+x", explanation: "P(A) is everything inside circle A: only-A (0.3) plus the intersection (x). This one keeps x, so P(A) genuinely depends on x." },
        { stepNumber: 3, description: "Express P(B) from the intersection plus only-B.", workingLatex: "P(B)=x+(0.4-x)=0.4", explanation: "Inside circle B the x-terms cancel, giving the constant P(B)=0.4." },
        { stepNumber: 4, description: "State the independence condition.", workingLatex: "P(A\\cap B)=P(A)\\,P(B)", explanation: "Independence means the intersection equals the product of the marginals." },
        { stepNumber: 5, description: "Substitute the expressions.", workingLatex: "x=(0.3+x)(0.4)", explanation: "P(A\\cap B)=x, P(A)=0.3+x and P(B)=0.4. This gives one equation in x." },
        { stepNumber: 6, description: "Expand the right-hand side.", workingLatex: "x=0.12+0.4x", explanation: "Distribute 0.4 across (0.3+x): 0.4\\times0.3=0.12 and 0.4\\times x=0.4x." },
        { stepNumber: 7, description: "Collect the x-terms.", workingLatex: "x-0.4x=0.12\\implies 0.6x=0.12", explanation: "Bring 0.4x to the left: x-0.4x=0.6x." },
        { stepNumber: 8, description: "Divide both sides by 0.6.", workingLatex: "x=\\frac{0.12}{0.6}=0.2", explanation: "Solving the linear equation gives x=0.2." },
        { stepNumber: 9, description: "Back-substitute to verify independence.", workingLatex: "P(A)P(B)=(0.3+0.2)(0.4)=0.5\\times 0.4=0.2=x\\ \\checkmark", explanation: "With x=0.2, P(A)=0.5 and the product 0.5\\times0.4=0.2 equals the intersection, confirming independence." },
        { stepNumber: 10, description: "Check region validity.", workingLatex: "0.4-0.2=0.2\\ge 0;\\quad 0.3,\\ 0.2,\\ 0.2,\\ 0.3\\in[0,1]", explanation: "All four regions are non-negative, lie in [0,1] and sum to 1, so x=0.2 is a valid solution." }
      ],
      finalAnswer: "\\( x=0.2 \\).",
      canonicalAnswer: "0.2",
    },
  },
  {
    id: "y2cp-058",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 58",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A test for a condition is applied. The prevalence of the condition is \\( p \\). If a person has the condition the test is positive with probability \\( 0.95 \\); if not, the test is positive with probability \\( 0.10 \\). Given that the overall probability of a positive test is \\( 0.185 \\), find the prevalence \\( p \\).",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["conditional-probability", "tree", "three-stage", "bayes", "working-backwards"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the two disjoint paths to a positive test.", workingLatex: "P(+)=P(\\text{has})P(+\\mid\\text{has})+P(\\text{not})P(+\\mid\\text{not})", explanation: "A positive result arises either from a true positive (has the condition, tests positive) or a false positive (does not have it, still tests positive). These paths are mutually exclusive." },
        { stepNumber: 2, description: "Substitute the prevalence and conditional rates.", workingLatex: "P(+)=p(0.95)+(1-p)(0.10)", explanation: "P(\\text{has})=p, P(\\text{not})=1-p, with positive-test rates 0.95 and 0.10 respectively. Slip to avoid: the no-condition branch has probability 1-p, not 1." },
        { stepNumber: 3, description: "Expand the second product.", workingLatex: "P(+)=0.95p+0.10-0.10p", explanation: "Distribute 0.10 over (1-p): 0.10\\times1=0.10 and 0.10\\times(-p)=-0.10p." },
        { stepNumber: 4, description: "Collect the p-terms.", workingLatex: "P(+)=0.85p+0.10", explanation: "0.95p-0.10p=0.85p. The constant 0.10 is the false-positive contribution when p=0." },
        { stepNumber: 5, description: "Set equal to the given overall probability.", workingLatex: "0.85p+0.10=0.185", explanation: "The overall positive-test probability is 0.185." },
        { stepNumber: 6, description: "Subtract 0.10 from both sides.", workingLatex: "0.85p=0.085", explanation: "Isolate the p-term." },
        { stepNumber: 7, description: "Divide both sides by 0.85.", workingLatex: "p=\\frac{0.085}{0.85}=0.1", explanation: "Solving gives p=0.1, a valid prevalence in [0,1]." },
        { stepNumber: 8, description: "Back-substitute p=0.1 to check.", workingLatex: "0.1(0.95)+0.9(0.10)=0.095+0.09=0.185\\ \\checkmark", explanation: "Reproduces P(+)=0.185, confirming the prevalence." }
      ],
      finalAnswer: "\\( p=0.1 \\).",
      canonicalAnswer: "0.1",
    },
  },
  {
    id: "y2cp-059",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 59",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "For events \\( A \\) and \\( B \\): only \\( A=0.35 \\), \\( A\\cap B=x \\), only \\( B=y \\), and neither \\( =0.15 \\). Given that the total is \\( 1 \\) and that \\( P(B\\mid A)=\\dfrac{x}{0.35+x}=0.2 \\), find \\( x \\) and \\( y \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>A</Text>
  <Text x={8.3} y={5.9}>B</Text>
  <Text x={2.7} y={3.4}>0.35</Text>
  <Text x={5} y={3.4}>x</Text>
  <Text x={7.3} y={3.4}>y</Text>
  <Text x={9.2} y={0.7}>0.15</Text>
</Mafs>`,
    marks: 7,
    examStyle: false,
    yearCreated: 2026,
    tags: ["conditional-probability", "venn", "algebraic-unknown", "two-conditions"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Express P(A) from its two regions.", workingLatex: "P(A)=0.35+x", explanation: "P(A) is only-A (0.35) plus the intersection (x). This is the denominator of the conditioning event for P(B\\mid A)." },
        { stepNumber: 2, description: "Write the conditional condition.", workingLatex: "P(B\\mid A)=\\frac{x}{0.35+x}=0.2", explanation: "P(B\\mid A) is the intersection over P(A). Conditioning is on A here, so divide by P(A), not P(B)." },
        { stepNumber: 3, description: "Multiply both sides by (0.35+x).", workingLatex: "x=0.2(0.35+x)", explanation: "Clear the denominator. Slip to avoid: 0.2 multiplies the whole bracket, including the x inside it." },
        { stepNumber: 4, description: "Expand the right-hand side.", workingLatex: "x=0.07+0.2x", explanation: "0.2\\times0.35=0.07 and 0.2\\times x=0.2x." },
        { stepNumber: 5, description: "Collect the x-terms.", workingLatex: "x-0.2x=0.07\\implies 0.8x=0.07", explanation: "x-0.2x=0.8x." },
        { stepNumber: 6, description: "Divide both sides by 0.8.", workingLatex: "x=\\frac{0.07}{0.8}=0.0875", explanation: "Solving gives the intersection x=0.0875." },
        { stepNumber: 7, description: "Write the total-equals-1 equation.", workingLatex: "0.35+x+y+0.15=1", explanation: "The four regions partition the sample space, so they sum to 1; this brings in the second unknown y." },
        { stepNumber: 8, description: "Substitute x and combine constants.", workingLatex: "0.35+0.0875+0.15+y=1\\implies 0.5875+y=1", explanation: "0.35+0.0875+0.15=0.5875." },
        { stepNumber: 9, description: "Solve for y.", workingLatex: "y=1-0.5875=0.4125", explanation: "Subtract the known regions from 1; y=0.4125 is a valid probability in [0,1]." },
        { stepNumber: 10, description: "Back-substitute into the conditional to check.", workingLatex: "\\frac{0.0875}{0.35+0.0875}=\\frac{0.0875}{0.4375}=0.2\\ \\checkmark", explanation: "Reproduces P(B\\mid A)=0.2, and all regions are non-negative and sum to 1, so the solution is valid." }
      ],
      finalAnswer: "\\( x=0.0875 \\) and \\( y=0.4125 \\).",
      canonicalAnswer: "0.0875",
    },
  },
  {
    id: "y2cp-060",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 60",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A box contains \\( n \\) red and \\( 3 \\) green discs. Two discs are drawn at random without replacement. Given that the probability both are red is \\( \\dfrac{5}{14} \\), find \\( n \\).",
    marks: 8,
    examStyle: true,
    yearCreated: 2026,
    tags: ["conditional-probability", "tree", "without-replacement", "working-backwards", "quadratic"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the probability the first disc is red.", workingLatex: "P(R_1)=\\frac{n}{n+3}", explanation: "There are n red discs out of n+3 in total at the first draw." },
        { stepNumber: 2, description: "Write the probability the second disc is red given the first was.", workingLatex: "P(R_2\\mid R_1)=\\frac{n-1}{n+2}", explanation: "Without replacement, after one red is removed there are n-1 red left out of n+2 total. Slip to avoid: both the red count and the total drop by 1." },
        { stepNumber: 3, description: "Multiply along the branch for both red.", workingLatex: "P(RR)=\\frac{n}{n+3}\\cdot\\frac{n-1}{n+2}=\\frac{n(n-1)}{(n+3)(n+2)}", explanation: "The probability of both reds is the product of the two stage-probabilities." },
        { stepNumber: 4, description: "Set equal to the given value.", workingLatex: "\\frac{n(n-1)}{(n+3)(n+2)}=\\frac{5}{14}", explanation: "Equate the product to the stated probability 5/14." },
        { stepNumber: 5, description: "Cross-multiply to clear fractions.", workingLatex: "14\\,n(n-1)=5(n+3)(n+2)", explanation: "Multiply both sides by 14 and by (n+3)(n+2)." },
        { stepNumber: 6, description: "Expand the left-hand side.", workingLatex: "14n^2-14n", explanation: "14\\times n(n-1)=14n^2-14n." },
        { stepNumber: 7, description: "Expand the right-hand side.", workingLatex: "5(n^2+5n+6)=5n^2+25n+30", explanation: "(n+3)(n+2)=n^2+5n+6, then multiply by 5." },
        { stepNumber: 8, description: "Bring all terms to one side.", workingLatex: "14n^2-14n-5n^2-25n-30=0\\implies 9n^2-39n-30=0", explanation: "Subtract the right side from the left and collect like terms." },
        { stepNumber: 9, description: "Divide through by the common factor 3.", workingLatex: "3n^2-13n-10=0", explanation: "9, 39 and 30 share factor 3, simplifying the quadratic before factorising." },
        { stepNumber: 10, description: "Factorise the quadratic.", workingLatex: "(3n+2)(n-5)=0", explanation: "Check by expanding: 3n^2-15n+2n-10=3n^2-13n-10. Slip to avoid: the constant -10 needs factors that combine to the middle term -13n." },
        { stepNumber: 11, description: "Take the valid root.", workingLatex: "n=5\\quad\\bigl(\\text{reject }n=-\\tfrac{2}{3}\\bigr)", explanation: "A count of discs must be a positive integer, so the negative fractional root is discarded and n=5." },
        { stepNumber: 12, description: "Back-substitute n=5 to check.", workingLatex: "\\frac{5}{8}\\cdot\\frac{4}{7}=\\frac{20}{56}=\\frac{5}{14}\\ \\checkmark", explanation: "With n=5 the box has 5 red and 3 green (8 total); the product gives exactly 5/14." }
      ],
      finalAnswer: "\\( n=5 \\).",
      canonicalAnswer: "5",
    },
  },
  {
    id: "y2cp-061",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 61",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A new blood test is trialled on \\( 1000 \\) volunteers. The results are shown below, where \\( D \\) is the event that a volunteer has the disease and \\( + \\) is the event that the test gives a positive result.\n\n| | Positive | Negative | Total |\n|---|---|---|---|\n| Has disease | 108 | 12 | 120 |\n| No disease | 44 | 836 | 880 |\n| Total | 152 | 848 | 1000 |\n\n(a) Find \\( P(D) \\), \\( P(+) \\) and \\( P(D \\cap +) \\). (b) By comparing \\( P(D \\cap +) \\) with \\( P(D)\\,P(+) \\), determine whether the events \\( D \\) and \\( + \\) are independent. (c) Find \\( P(D \\mid +) \\), the probability that a volunteer who tests positive actually has the disease.",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["conditional-probability", "two-way-table", "independence", "disease-testing"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find \\( P(D) \\) from the 'Has disease' row total.", workingLatex: "P(D)=\\dfrac{120}{1000}=0.12", explanation: "A marginal probability is the row (or column) total divided by the grand total of 1000. Common slip: dividing by a sub-total such as 152 instead of by the full 1000." },
        { stepNumber: 2, description: "Find \\( P(+) \\) from the 'Positive' column total.", workingLatex: "P(+)=\\dfrac{152}{1000}=0.152", explanation: "The positive column totals 152, so this is the unconditional chance of a positive result. Common slip: confusing the column total (152) with the joint cell (108)." },
        { stepNumber: 3, description: "Find the joint probability \\( P(D\\cap +) \\) from the corner cell.", workingLatex: "P(D\\cap +)=\\dfrac{108}{1000}=0.108", explanation: "The single cell where 'Has disease' meets 'Positive' holds 108 people, both events occurring together. Common slip: adding a margin instead of reading the intersection cell directly." },
        { stepNumber: 4, description: "For part (b), compute the product of the marginals \\( P(D)\\,P(+) \\).", workingLatex: "P(D)\\,P(+)=0.12\\times 0.152=0.01824", explanation: "Independence is defined by \\( P(D\\cap +)=P(D)\\,P(+) \\), so we first form this product to test against the joint probability. Common slip: multiplying counts (120 and 152) rather than probabilities." },
        { stepNumber: 5, description: "Compare \\( P(D\\cap +) \\) with the product.", workingLatex: "P(D\\cap +)=0.108,\\qquad P(D)\\,P(+)=0.01824", explanation: "Place the two numbers side by side before drawing any conclusion. Here 0.108 is roughly six times the product, a clear mismatch." },
        { stepNumber: 6, description: "State the independence conclusion for part (b).", workingLatex: "0.108\\neq 0.01824\\ \\Rightarrow\\ D\\text{ and }+\\text{ not independent}", explanation: "Since \\( P(D\\cap +)\\neq P(D)\\,P(+) \\), the events are not independent — a positive result is far more likely among those who actually have the disease, exactly as a useful test should behave. Common slip: concluding 'independent' just because both numbers are 'small'." },
        { stepNumber: 7, description: "For part (c), set up \\( P(D\\mid +) \\) with the conditional probability formula.", workingLatex: "P(D\\mid +)=\\dfrac{P(D\\cap +)}{P(+)}=\\dfrac{0.108}{0.152}", explanation: "Conditioning on \\(+\\) restricts the sample space to the 152 positive testers; we then ask what fraction truly have the disease. Common slip: dividing by \\( P(D) \\) instead of by the conditioning event \\( P(+) \\)." },
        { stepNumber: 8, description: "Evaluate \\( P(D\\mid +) \\).", workingLatex: "P(D\\mid +)=\\dfrac{108}{152}=\\dfrac{27}{38}\\approx 0.711", explanation: "Cancelling \\(108/152\\) by 4 gives \\(27/38\\); only about 71% of positives are true positives. Common slip: leaving the answer un-simplified or rounding before stating the exact fraction." }
      ],
      finalAnswer: "(a) \\( P(D)=0.12,\\ P(+)=0.152,\\ P(D\\cap +)=0.108 \\). (b) Not independent, since \\( 0.108\\neq 0.01824 \\). (c) \\( P(D\\mid +)=\\tfrac{27}{38}\\approx 0.711 \\).",
    },
  },
  {
    id: "y2cp-062",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 62",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A factory makes components on two machines. Machine \\( A \\) produces \\( 60\\% \\) of the output and Machine \\( B \\) produces the rest. Of the components from Machine \\( A \\), \\( 3\\% \\) are faulty; of those from Machine \\( B \\), \\( 5\\% \\) are faulty. A component is chosen at random. (a) Show that the probability the component is faulty is \\( 0.038 \\). (b) Given that the chosen component is faulty, find the probability it was made on Machine \\( A \\). (c) Comment on whether the events 'made on Machine \\( A \\)' and 'faulty' are independent.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
  <Line.Segment point1={[0, 5]} point2={[4, 7.3333]} color="var(--mafs-fg)" />
  <Text x={2} y={6.5667}>0.6</Text>
  <Text x={4.3} y={7.3333} attach="e">A</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 8.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={8.4567}>0.03</Text>
  <Text x={9.3} y={8.5} attach="e">Faulty</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 6.1667]} color="var(--mafs-fg)" />
  <Text x={7.1} y={7.01}>0.97</Text>
  <Text x={9.3} y={6.1667} attach="e">Not faulty</Text>
  <Line.Segment point1={[0, 5]} point2={[4, 2.6667]} color="var(--mafs-fg)" />
  <Text x={2} y={4.2333}>0.4</Text>
  <Text x={4.3} y={2.6667} attach="e">B</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 3.8333]} color="var(--mafs-fg)" />
  <Text x={7.1} y={3.79}>0.05</Text>
  <Text x={9.3} y={3.8333} attach="e">Faulty</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 1.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={2.3433}>0.95</Text>
  <Text x={9.3} y={1.5} attach="e">Not faulty</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["conditional-probability", "tree-diagram", "reverse-conditional", "faulty-items"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the probability of the 'Machine A and faulty' path.", workingLatex: "P(A\\cap F)=P(A)\\,P(F\\mid A)=0.6\\times 0.03=0.018", explanation: "Multiply along the A branch then its 'Faulty' sub-branch; tree probabilities multiply along a path. Common slip: adding 0.6 and 0.03 instead of multiplying." },
        { stepNumber: 2, description: "Find the probability of the 'Machine B and faulty' path.", workingLatex: "P(B\\cap F)=P(B)\\,P(F\\mid B)=0.4\\times 0.05=0.020", explanation: "Machine B makes the remaining 40%, faulty 5% of the time. Common slip: using 0.6 for \\( P(B) \\) instead of the complement 0.4." },
        { stepNumber: 3, description: "For part (a), add the two faulty paths (law of total probability).", workingLatex: "P(F)=P(A\\cap F)+P(B\\cap F)=0.018+0.020=0.038", explanation: "The two routes to a fault are mutually exclusive, so their probabilities add to the required \\(0.038\\) — shown. Common slip: forgetting the Machine B contribution." },
        { stepNumber: 4, description: "For part (b), set up the reverse conditional \\( P(A\\mid F) \\) (Bayes).", workingLatex: "P(A\\mid F)=\\dfrac{P(A\\cap F)}{P(F)}=\\dfrac{0.018}{0.038}", explanation: "We are given the outcome (faulty) and want the source (Machine A), so we reverse the conditioning using \\( P(A\\cap F)/P(F) \\). Common slip: writing \\( P(F\\mid A) \\) back as the answer." },
        { stepNumber: 5, description: "Evaluate \\( P(A\\mid F) \\).", workingLatex: "P(A\\mid F)=\\dfrac{18}{38}=\\dfrac{9}{19}\\approx 0.474", explanation: "Scaling 0.018/0.038 to 18/38 and cancelling by 2 gives 9/19; roughly 47% of faulty items come from Machine A. Common slip: rounding 0.018 or 0.038 too early." },
        { stepNumber: 6, description: "For part (c), compare \\( P(A\\mid F) \\) with the unconditional \\( P(A) \\).", workingLatex: "P(A\\mid F)=0.474,\\qquad P(A)=0.6", explanation: "Independence of 'made on A' and 'faulty' would require \\( P(A\\mid F)=P(A) \\); we therefore line the two up. Common slip: comparing against \\( P(F) \\) instead of \\( P(A) \\)." },
        { stepNumber: 7, description: "State the independence conclusion for part (c).", workingLatex: "P(A\\mid F)=0.474\\neq 0.6=P(A)\\ \\Rightarrow\\ \\text{not independent}", explanation: "Since the conditional differs from the unconditional, the events are not independent: a faulty item is less likely than average to have come from the more reliable Machine A. Common slip: claiming independence because both probabilities are 'close'." }
      ],
      finalAnswer: "(a) \\( P(F)=0.018+0.020=0.038 \\). (b) \\( P(A\\mid F)=\\tfrac{9}{19}\\approx 0.474 \\). (c) Not independent, since \\( P(A\\mid F)=0.474\\neq 0.6=P(A) \\).",
    },
  },
  {
    id: "y2cp-063",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 63",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "In a cohort of \\( 200 \\) students, each sat a Mathematics paper and a Physics paper. The two-way table shows the numbers passing each, where \\( M \\) is the event 'passed Mathematics' and \\( P \\) is the event 'passed Physics'.\n\n| | Passed Physics | Failed Physics | Total |\n|---|---|---|---|\n| Passed Maths | 84 | 36 | 120 |\n| Failed Maths | 56 | 24 | 80 |\n| Total | 140 | 60 | 200 |\n\n(a) Find \\( P(M) \\), \\( P(P) \\) and \\( P(M\\cap P) \\). (b) Show that the events \\( M \\) and \\( P \\) are independent. (c) A teacher claims that 'students who are good at Maths tend to be good at Physics, so passing one helps you pass the other.' With reference to your answer to (b), comment on this claim.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["conditional-probability", "two-way-table", "independence", "exam-results"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find \\( P(M) \\) from the 'Passed Maths' row total.", workingLatex: "P(M)=\\dfrac{120}{200}=0.6", explanation: "Marginal probability is the row total over the grand total of 200. Common slip: using 84 (the joint cell) instead of the row total 120." },
        { stepNumber: 2, description: "Find \\( P(P) \\) from the 'Passed Physics' column total.", workingLatex: "P(P)=\\dfrac{140}{200}=0.7", explanation: "The Passed-Physics column totals 140. Common slip: reading down the wrong column or using a failed total." },
        { stepNumber: 3, description: "Find the joint probability \\( P(M\\cap P) \\) from the corner cell.", workingLatex: "P(M\\cap P)=\\dfrac{84}{200}=0.42", explanation: "The single cell for 'Passed Maths and Passed Physics' holds 84 students. Common slip: adding a margin rather than reading the intersection cell." },
        { stepNumber: 4, description: "For part (b), form the product of the marginals.", workingLatex: "P(M)\\,P(P)=0.6\\times 0.7=0.42", explanation: "Independence is defined by \\( P(M\\cap P)=P(M)\\,P(P) \\); we compute the right-hand side to compare. Common slip: multiplying counts (120 and 140) instead of probabilities." },
        { stepNumber: 5, description: "Compare the joint probability with the product.", workingLatex: "P(M\\cap P)=0.42,\\qquad P(M)\\,P(P)=0.42", explanation: "Set the two values side by side. Here they are exactly equal." },
        { stepNumber: 6, description: "State the independence conclusion for part (b).", workingLatex: "0.42=0.42\\ \\Rightarrow\\ M\\text{ and }P\\text{ independent}", explanation: "Since \\( P(M\\cap P)=P(M)\\,P(P) \\), the events \\( M \\) and \\( P \\) are independent — shown. Common slip: stopping at 'the numbers look equal' without the explicit definitional statement." },
        { stepNumber: 7, description: "For part (c), check the claim via \\( P(P\\mid M) \\).", workingLatex: "P(P\\mid M)=\\dfrac{P(M\\cap P)}{P(M)}=\\dfrac{0.42}{0.6}=0.7=P(P)", explanation: "Because the events are independent, the chance of passing Physics is 0.7 whether or not a student passed Maths. The teacher's claim is not supported by these data: passing Maths gives no advantage in Physics here. (This independence is a feature of this particular dataset, not a law of nature.) Common slip: treating a strong overall pass rate as evidence of a Maths-Physics link." }
      ],
      finalAnswer: "(a) \\( P(M)=0.6,\\ P(P)=0.7,\\ P(M\\cap P)=0.42 \\). (b) Independent, since \\( 0.42=0.6\\times 0.7 \\). (c) The claim is unsupported here: \\( P(P\\mid M)=P(P)=0.7 \\), so passing Maths does not raise the chance of passing Physics in these data.",
    },
  },
  {
    id: "y2cp-064",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 64",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A simple weather model assumes the probability of rain today is \\( 0.3 \\). If it rains today, the probability it rains tomorrow is \\( 0.6 \\); if it does not rain today, the probability it rains tomorrow is \\( 0.2 \\). (a) Show that the probability it rains tomorrow is \\( 0.32 \\). (b) Given that it rains tomorrow, find the probability that it also rained today. (c) State one reason why modelling 'rain today' and 'rain tomorrow' as independent events would be unreasonable for this model.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
  <Line.Segment point1={[0, 5]} point2={[4, 7.3333]} color="var(--mafs-fg)" />
  <Text x={2} y={6.5667}>0.3</Text>
  <Text x={4.3} y={7.3333} attach="e">Rain today</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 8.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={8.4567}>0.6</Text>
  <Text x={9.3} y={8.5} attach="e">Rain tomorrow</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 6.1667]} color="var(--mafs-fg)" />
  <Text x={7.1} y={7.01}>0.4</Text>
  <Text x={9.3} y={6.1667} attach="e">No rain tomorrow</Text>
  <Line.Segment point1={[0, 5]} point2={[4, 2.6667]} color="var(--mafs-fg)" />
  <Text x={2} y={4.2333}>0.7</Text>
  <Text x={4.3} y={2.6667} attach="e">No rain today</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 3.8333]} color="var(--mafs-fg)" />
  <Text x={7.1} y={3.79}>0.2</Text>
  <Text x={9.3} y={3.8333} attach="e">Rain tomorrow</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 1.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={2.3433}>0.8</Text>
  <Text x={9.3} y={1.5} attach="e">No rain tomorrow</Text>
</Mafs>`,
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["conditional-probability", "tree-diagram", "reverse-conditional", "weather"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the 'rain today and rain tomorrow' path.", workingLatex: "P(R_1\\cap R_2)=0.3\\times 0.6=0.18", explanation: "Multiply along the wet-today branch and its wet-tomorrow sub-branch. Common slip: using 0.2 (the dry-today transition) on this path." },
        { stepNumber: 2, description: "Find the 'no rain today but rain tomorrow' path.", workingLatex: "P(R_1'\\cap R_2)=0.7\\times 0.2=0.14", explanation: "Dry today has probability 0.7, then rain follows with probability 0.2. Common slip: using 0.3 instead of its complement 0.7." },
        { stepNumber: 3, description: "For part (a), add the two wet-tomorrow paths.", workingLatex: "P(R_2)=0.18+0.14=0.32", explanation: "The two routes to a wet tomorrow are mutually exclusive, so total probability gives the required \\(0.32\\) — shown. Common slip: forgetting the dry-today route contributes." },
        { stepNumber: 4, description: "For part (b), set up the reverse conditional \\( P(R_1\\mid R_2) \\).", workingLatex: "P(R_1\\mid R_2)=\\dfrac{P(R_1\\cap R_2)}{P(R_2)}=\\dfrac{0.18}{0.32}", explanation: "We want today given tomorrow, reversing the direction the tree was built in. Common slip: quoting 0.6, which is \\( P(R_2\\mid R_1) \\), the wrong direction." },
        { stepNumber: 5, description: "Evaluate \\( P(R_1\\mid R_2) \\).", workingLatex: "P(R_1\\mid R_2)=\\dfrac{18}{32}=\\dfrac{9}{16}=0.5625", explanation: "Scaling and cancelling by 2 gives 9/16; given a wet tomorrow there is about a 56% chance today was wet. Common slip: rounding 0.18 or 0.32 before dividing." },
        { stepNumber: 6, description: "For part (c), show the transition probabilities differ.", workingLatex: "P(R_2\\mid R_1)=0.6\\neq 0.2=P(R_2\\mid R_1')", explanation: "Tomorrow's rain probability is 0.6 after a wet day but 0.2 after a dry day, so the model itself makes tomorrow depend on today; treating the days as independent would contradict the model and ignore the real-world correlation of consecutive days' weather. Common slip: confusing 'mutually exclusive' with 'independent'." }
      ],
      finalAnswer: "(a) \\( P(R_2)=0.18+0.14=0.32 \\). (b) \\( P(R_1\\mid R_2)=\\tfrac{9}{16}=0.5625 \\). (c) The two days are not independent: rain tomorrow has probability 0.6 after a wet day but 0.2 after a dry day, so they cannot be treated as independent.",
    },
  },
  {
    id: "y2cp-065",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 65",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "For two events \\( A \\) and \\( B \\), it is given that \\( P(A)=0.5 \\), \\( P(B)=0.4 \\) and that \\( A \\) and \\( B \\) are independent. (a) Find \\( P(A\\cap B) \\) and complete a Venn diagram showing the probabilities of the four regions. (b) Find \\( P(A\\cup B) \\). (c) Find \\( P(A\\mid B') \\), the probability of \\( A \\) given that \\( B \\) does not occur, and verify that it equals \\( P(A) \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>0.5</Text>
  <Text x={8.3} y={5.9}>0.4</Text>
  <Text x={2.7} y={3.4}>0.3</Text>
  <Text x={5} y={3.4}>0.2</Text>
  <Text x={7.3} y={3.4}>0.2</Text>
  <Text x={9.2} y={0.7}>0.3</Text>
</Mafs>`,
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["conditional-probability", "venn", "independence", "set-construction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "For part (a), use independence to find \\( P(A\\cap B) \\).", workingLatex: "P(A\\cap B)=P(A)\\,P(B)=0.5\\times 0.4=0.2", explanation: "For independent events the multiplication rule simplifies to the product of the marginals. Common slip: assuming the events are mutually exclusive and writing the intersection as 0." },
        { stepNumber: 2, description: "Find the 'only A' region for the Venn diagram.", workingLatex: "P(A\\cap B')=P(A)-P(A\\cap B)=0.5-0.2=0.3", explanation: "Remove the overlap from circle A to leave the part of A outside B. Common slip: forgetting to subtract the intersection." },
        { stepNumber: 3, description: "Find the 'only B' region.", workingLatex: "P(A'\\cap B)=P(B)-P(A\\cap B)=0.4-0.2=0.2", explanation: "Same idea applied to circle B. Common slip: subtracting from the wrong total." },
        { stepNumber: 4, description: "Find the outside region.", workingLatex: "P(A'\\cap B')=1-(0.3+0.2+0.2)=0.3", explanation: "All four disjoint regions must sum to 1, so the outside is the remainder. Common slip: using \\(1-P(A\\cap B)\\) instead of subtracting all three inner regions." },
        { stepNumber: 5, description: "For part (b), apply the addition rule for \\( P(A\\cup B) \\).", workingLatex: "P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=0.5+0.4-0.2=0.7", explanation: "Adding the circles double-counts the overlap, so we subtract it once. Common slip: forgetting to subtract \\( P(A\\cap B) \\)." },
        { stepNumber: 6, description: "For part (c), set up \\( P(A\\mid B') \\).", workingLatex: "P(A\\mid B')=\\dfrac{P(A\\cap B')}{P(B')}=\\dfrac{0.3}{1-0.4}=\\dfrac{0.3}{0.6}", explanation: "Condition on \\(B'\\), whose probability is \\(1-0.4=0.6\\); the numerator is the 'only A' region. Common slip: dividing by \\(P(B)=0.4\\) instead of \\(P(B')=0.6\\)." },
        { stepNumber: 7, description: "Evaluate and verify the independence consequence.", workingLatex: "P(A\\mid B')=\\dfrac{0.3}{0.6}=0.5=P(A)", explanation: "The conditional equals \\(P(A)\\); conditioning on whether B occurs leaves A's probability unchanged, the hallmark of independence (and a useful check on the earlier regions). Common slip: getting a value different from 0.5 because of an arithmetic error in the 'only A' region." }
      ],
      finalAnswer: "(a) \\( P(A\\cap B)=0.2 \\); regions: only A 0.3, both 0.2, only B 0.2, outside 0.3. (b) \\( P(A\\cup B)=0.7 \\). (c) \\( P(A\\mid B')=0.5=P(A) \\).",
    },
  },
  {
    id: "y2cp-066",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 66",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Each morning a commuter either cycles or takes the bus. The probability she cycles is \\( 0.45 \\). When she cycles, the probability she is late is \\( 0.1 \\); when she takes the bus, the probability she is late is \\( 0.2 \\). (a) Show that the probability she is late on a given morning is \\( 0.155 \\). (b) Given that she is late, find the probability that she cycled. (c) Determine whether the events 'cycled' and 'late' are independent, justifying your answer with a calculation.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
  <Line.Segment point1={[0, 5]} point2={[4, 7.3333]} color="var(--mafs-fg)" />
  <Text x={2} y={6.5667}>0.45</Text>
  <Text x={4.3} y={7.3333} attach="e">Cycle</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 8.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={8.4567}>0.1</Text>
  <Text x={9.3} y={8.5} attach="e">Late</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 6.1667]} color="var(--mafs-fg)" />
  <Text x={7.1} y={7.01}>0.9</Text>
  <Text x={9.3} y={6.1667} attach="e">On time</Text>
  <Line.Segment point1={[0, 5]} point2={[4, 2.6667]} color="var(--mafs-fg)" />
  <Text x={2} y={4.2333}>0.55</Text>
  <Text x={4.3} y={2.6667} attach="e">Bus</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 3.8333]} color="var(--mafs-fg)" />
  <Text x={7.1} y={3.79}>0.2</Text>
  <Text x={9.3} y={3.8333} attach="e">Late</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 1.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={2.3433}>0.8</Text>
  <Text x={9.3} y={1.5} attach="e">On time</Text>
</Mafs>`,
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["conditional-probability", "tree-diagram", "show-that", "reverse-conditional", "transport"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the 'cycle and late' path.", workingLatex: "P(C\\cap L)=P(C)\\,P(L\\mid C)=0.45\\times 0.1=0.045", explanation: "Multiply along the cycle branch and its 'Late' sub-branch. Common slip: adding the two probabilities rather than multiplying." },
        { stepNumber: 2, description: "Find the 'bus and late' path.", workingLatex: "P(B\\cap L)=P(B)\\,P(L\\mid B)=0.55\\times 0.2=0.110", explanation: "The bus is taken with probability \\(1-0.45=0.55\\), late 20% of the time. Common slip: using 0.45 for \\( P(B) \\) instead of its complement 0.55." },
        { stepNumber: 3, description: "For part (a), add the two late paths (total probability).", workingLatex: "P(L)=P(C\\cap L)+P(B\\cap L)=0.045+0.110=0.155", explanation: "The two ways to be late are mutually exclusive, so their probabilities add to the required \\(0.155\\) — shown. Common slip: dropping a trailing zero and writing 0.110 as 0.11 then mis-adding." },
        { stepNumber: 4, description: "For part (b), set up the reverse conditional \\( P(C\\mid L) \\).", workingLatex: "P(C\\mid L)=\\dfrac{P(C\\cap L)}{P(L)}=\\dfrac{0.045}{0.155}", explanation: "We are given the outcome (late) and want the cause (cycled), so we reverse the conditioning. Common slip: quoting \\( P(L\\mid C)=0.1 \\) as the answer." },
        { stepNumber: 5, description: "Evaluate \\( P(C\\mid L) \\).", workingLatex: "P(C\\mid L)=\\dfrac{45}{155}=\\dfrac{9}{31}\\approx 0.290", explanation: "Scaling to 45/155 and cancelling by 5 gives 9/31; about 29% of late mornings were cycling days. Common slip: cancelling incorrectly or rounding the inputs first." },
        { stepNumber: 6, description: "For part (c), compute the product \\( P(C)\\,P(L) \\) for the independence test.", workingLatex: "P(C)\\,P(L)=0.45\\times 0.155=0.06975", explanation: "Independence requires \\( P(C\\cap L)=P(C)\\,P(L) \\); we form the right-hand side to compare. Common slip: re-using 0.045 here, which is the joint probability, not the product." },
        { stepNumber: 7, description: "Compare and state the conclusion for part (c).", workingLatex: "P(C\\cap L)=0.045\\neq 0.06975=P(C)\\,P(L)\\ \\Rightarrow\\ \\text{not independent}", explanation: "Since the joint probability does not equal the product of the marginals, 'cycled' and 'late' are not independent — cycling lowers the chance of being late. Common slip: declaring independence because both numbers are small." }
      ],
      finalAnswer: "(a) \\( P(L)=0.045+0.110=0.155 \\). (b) \\( P(C\\mid L)=\\tfrac{9}{31}\\approx 0.290 \\). (c) Not independent, since \\( P(C\\cap L)=0.045\\neq 0.06975=P(C)\\,P(L) \\).",
    },
  },
  {
    id: "y2cp-067",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 67",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A screening programme tests for a condition present in \\( 2\\% \\) of the population. The test has sensitivity \\( P(+\\mid D)=0.95 \\) (it correctly flags 95% of those with the condition) and specificity \\( P(-\\mid D')=0.90 \\). (a) Write down \\( P(+\\mid D') \\). (b) Show that the probability a randomly tested person tests positive is \\( 0.117 \\). (c) Given that a person tests positive, find the probability they have the condition, giving your answer to 3 significant figures. (d) The programme's leaflet states 'a positive result means you almost certainly have the condition.' Critique this statement using your answer to (c).",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
  <Line.Segment point1={[0, 5]} point2={[4, 7.3333]} color="var(--mafs-fg)" />
  <Text x={2} y={6.5667}>0.02</Text>
  <Text x={4.3} y={7.3333} attach="e">Has condition</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 8.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={8.4567}>0.95</Text>
  <Text x={9.3} y={8.5} attach="e">Positive</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 6.1667]} color="var(--mafs-fg)" />
  <Text x={7.1} y={7.01}>0.05</Text>
  <Text x={9.3} y={6.1667} attach="e">Negative</Text>
  <Line.Segment point1={[0, 5]} point2={[4, 2.6667]} color="var(--mafs-fg)" />
  <Text x={2} y={4.2333}>0.98</Text>
  <Text x={4.3} y={2.6667} attach="e">No condition</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 3.8333]} color="var(--mafs-fg)" />
  <Text x={7.1} y={3.79}>0.1</Text>
  <Text x={9.3} y={3.8333} attach="e">Positive</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 1.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={2.3433}>0.9</Text>
  <Text x={9.3} y={1.5} attach="e">Negative</Text>
</Mafs>`,
    marks: 8,
    examStyle: true,
    yearCreated: 2026,
    tags: ["conditional-probability", "tree-diagram", "reverse-conditional", "show-that", "critique", "disease-testing"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "For part (a), find the false-positive rate \\( P(+\\mid D') \\).", workingLatex: "P(+\\mid D')=1-P(-\\mid D')=1-0.90=0.10", explanation: "Specificity is the true-negative rate among the healthy; its complement is the false-positive rate. Common slip: confusing this with the complement of sensitivity (0.05)." },
        { stepNumber: 2, description: "Find the 'has condition and positive' (true-positive) path.", workingLatex: "P(D\\cap +)=P(D)\\,P(+\\mid D)=0.02\\times 0.95=0.019", explanation: "Prevalence 0.02 times sensitivity 0.95. Common slip: using a rounded prevalence or omitting it entirely." },
        { stepNumber: 3, description: "Find the 'no condition and positive' (false-positive) path.", workingLatex: "P(D'\\cap +)=P(D')\\,P(+\\mid D')=0.98\\times 0.10=0.098", explanation: "The healthy 98% are wrongly flagged 10% of the time. Common slip: using 0.02 instead of 0.98 for \\( P(D') \\)." },
        { stepNumber: 4, description: "For part (b), add the two positive paths.", workingLatex: "P(+)=P(D\\cap +)+P(D'\\cap +)=0.019+0.098=0.117", explanation: "Total probability over the true- and false-positive routes gives the required \\(0.117\\) — shown. Common slip: omitting the false-positive term, the dominant one here." },
        { stepNumber: 5, description: "For part (c), set up the reverse conditional \\( P(D\\mid +) \\) (Bayes).", workingLatex: "P(D\\mid +)=\\dfrac{P(D\\cap +)}{P(+)}=\\dfrac{0.019}{0.117}", explanation: "Bayes' theorem converts the test characteristics into the probability of disease given a positive result. Common slip: returning the sensitivity 0.95 as the answer." },
        { stepNumber: 6, description: "Evaluate \\( P(D\\mid +) \\) to 3 significant figures.", workingLatex: "P(D\\mid +)=\\dfrac{19}{117}\\approx 0.162", explanation: "Scaling 0.019/0.117 to 19/117 gives 0.162 (3 s.f.); only about 16.2% of positive testers actually have the condition. Common slip: rounding to 2 s.f. or before the final division." },
        { stepNumber: 7, description: "Identify the dominant term to set up the critique.", workingLatex: "0.098\\ (\\text{false positives})\\gg 0.019\\ (\\text{true positives})", explanation: "Because the condition is rare, the false-positive count swamps the true-positive count among positives. Common slip: ignoring base rate and assuming high sensitivity alone makes positives trustworthy." },
        { stepNumber: 8, description: "For part (d), critique the leaflet.", workingLatex: "P(D\\mid +)\\approx 0.162\\ \\Rightarrow\\ \\text{'almost certain' is false}", explanation: "The leaflet is misleading: a positive result corresponds to only about a 16% chance of having the condition, not 'almost certainly'. The low 2% prevalence means most positives are false positives, so the statement badly overstates what a positive means. Common slip: trusting the 95% sensitivity figure as if it were \\( P(D\\mid +) \\)." }
      ],
      finalAnswer: "(a) \\( P(+\\mid D')=0.10 \\). (b) \\( P(+)=0.019+0.098=0.117 \\). (c) \\( P(D\\mid +)=\\tfrac{19}{117}\\approx 0.162 \\). (d) The leaflet is misleading: only ~16% of positives have the condition, so 'almost certainly' is false — rarity makes false positives dominate.",
    },
  },
  {
    id: "y2cp-068",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 68",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A survey of \\( 250 \\) commuters records their main mode of travel and their sex. Let \\( D \\) be the event 'drives' and \\( M \\) be the event 'male'.\n\n| | Male | Female | Total |\n|---|---|---|---|\n| Drives | 70 | 30 | 100 |\n| Public transport | 50 | 100 | 150 |\n| Total | 120 | 130 | 250 |\n\n(a) Find \\( P(D) \\), \\( P(M) \\) and \\( P(D\\cap M) \\). (b) Determine whether \\( D \\) and \\( M \\) are independent, justifying your answer. (c) Find \\( P(M\\mid D) \\) and interpret it. (d) The surveyor recruited participants by standing outside a city-centre car park. Comment on whether treating this sample as representative of all commuters is reasonable.",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["conditional-probability", "two-way-table", "independence", "critique", "transport"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find \\( P(D) \\) from the 'Drives' row total.", workingLatex: "P(D)=\\dfrac{100}{250}=0.4", explanation: "Row total over the grand total of 250. Common slip: using the joint cell 70 instead of the row total 100." },
        { stepNumber: 2, description: "Find \\( P(M) \\) from the 'Male' column total.", workingLatex: "P(M)=\\dfrac{120}{250}=0.48", explanation: "The Male column totals 120. Common slip: reading the Female total 130 by mistake." },
        { stepNumber: 3, description: "Find the joint probability \\( P(D\\cap M) \\) from the corner cell.", workingLatex: "P(D\\cap M)=\\dfrac{70}{250}=0.28", explanation: "70 commuters both drive and are male. Common slip: adding a margin rather than reading the single intersection cell." },
        { stepNumber: 4, description: "For part (b), form the product of the marginals.", workingLatex: "P(D)\\,P(M)=0.4\\times 0.48=0.192", explanation: "Independence requires \\( P(D\\cap M)=P(D)\\,P(M) \\), so we compute the right-hand side. Common slip: multiplying counts (100 and 120) instead of probabilities." },
        { stepNumber: 5, description: "Compare and conclude for part (b).", workingLatex: "P(D\\cap M)=0.28\\neq 0.192=P(D)\\,P(M)\\ \\Rightarrow\\ \\text{not independent}", explanation: "Since the values differ, \\( D \\) and \\( M \\) are not independent: men are more likely to drive in this sample. Common slip: claiming independence because both numbers are between 0 and 1 and 'close-ish'." },
        { stepNumber: 6, description: "For part (c), compute the conditional \\( P(M\\mid D) \\).", workingLatex: "P(M\\mid D)=\\dfrac{P(D\\cap M)}{P(D)}=\\dfrac{0.28}{0.4}=0.7", explanation: "Restrict to the 100 drivers and find the fraction who are male. Common slip: dividing by \\( P(M) \\) instead of by the conditioning event \\( P(D) \\)." },
        { stepNumber: 7, description: "Interpret \\( P(M\\mid D) \\) for part (c).", workingLatex: "P(M\\mid D)=0.7>0.48=P(M)", explanation: "Among drivers, 70% are male, against 48% male overall — knowing someone drives raises the chance they are male, confirming the dependence found in (b). Common slip: stating the number without comparing it to the baseline \\( P(M) \\)." },
        { stepNumber: 8, description: "For part (d), critique the sampling method.", workingLatex: "\\text{recruited at a car park}\\Rightarrow \\text{biased toward drivers}", explanation: "Standing outside a car park over-samples drivers and under-samples bus, train and cyclist commuters, so the sample is neither random nor representative of all commuters; figures such as \\( P(D)=0.4 \\) are likely far too high for the general commuting population. Common slip: assuming a large sample (250) is automatically representative regardless of how it was collected." }
      ],
      finalAnswer: "(a) \\( P(D)=0.4,\\ P(M)=0.48,\\ P(D\\cap M)=0.28 \\). (b) Not independent, since \\( 0.28\\neq 0.192 \\). (c) \\( P(M\\mid D)=0.7 \\): 70% of drivers are male vs 48% overall. (d) Not representative — recruiting at a car park biases the sample toward drivers, so it is not a random sample of commuters.",
    },
  },
  {
    id: "y2cp-069",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 69",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Two events \\( A \\) and \\( B \\) satisfy \\( P(A)=0.45 \\), \\( P(B)=0.35 \\) and \\( P(A\\cap B)=0.15 \\). (a) Draw a Venn diagram showing the probabilities of all four regions. (b) Find \\( P(A\\mid B) \\) and \\( P(B\\mid A) \\). (c) Show that \\( A \\) and \\( B \\) are not independent. (d) Find \\( P(A\\mid B') \\).",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>0.45</Text>
  <Text x={8.3} y={5.9}>0.35</Text>
  <Text x={2.7} y={3.4}>0.3</Text>
  <Text x={5} y={3.4}>0.15</Text>
  <Text x={7.3} y={3.4}>0.2</Text>
  <Text x={9.2} y={0.7}>0.35</Text>
</Mafs>`,
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["conditional-probability", "venn", "independence", "reverse-conditional"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "For part (a), find the 'only A' region.", workingLatex: "P(A\\cap B')=P(A)-P(A\\cap B)=0.45-0.15=0.30", explanation: "Remove the overlap from circle A. Common slip: writing 0.45 in the 'only A' region without subtracting the intersection." },
        { stepNumber: 2, description: "Find the 'only B' region.", workingLatex: "P(A'\\cap B)=P(B)-P(A\\cap B)=0.35-0.15=0.20", explanation: "Remove the overlap from circle B. Common slip: subtracting from \\(P(A)\\) instead of \\(P(B)\\)." },
        { stepNumber: 3, description: "Find the outside region.", workingLatex: "P(A'\\cap B')=1-(0.30+0.15+0.20)=0.35", explanation: "The four disjoint regions sum to 1. Common slip: using \\(1-P(A\\cap B)\\) instead of subtracting all three inner regions." },
        { stepNumber: 4, description: "For part (b), find \\( P(A\\mid B) \\).", workingLatex: "P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}=\\dfrac{0.15}{0.35}=\\dfrac{3}{7}\\approx 0.429", explanation: "Divide the intersection by the conditioning event \\( P(B) \\). Common slip: dividing by \\( P(A) \\) for this one." },
        { stepNumber: 5, description: "Find \\( P(B\\mid A) \\).", workingLatex: "P(B\\mid A)=\\dfrac{P(A\\cap B)}{P(A)}=\\dfrac{0.15}{0.45}=\\dfrac{1}{3}", explanation: "Now condition on A instead, dividing by \\( P(A) \\). Common slip: assuming \\( P(A\\mid B)=P(B\\mid A) \\)." },
        { stepNumber: 6, description: "For part (c), compute the product for the independence test.", workingLatex: "P(A)\\,P(B)=0.45\\times 0.35=0.1575", explanation: "Independence requires \\( P(A\\cap B)=P(A)\\,P(B) \\); we form the product to compare. Common slip: rounding 0.1575 prematurely so it appears equal to 0.15." },
        { stepNumber: 7, description: "Compare and conclude part (c); then for part (d) evaluate \\( P(A\\mid B') \\).", workingLatex: "P(A\\cap B)=0.15\\neq 0.1575=P(A)\\,P(B);\\qquad P(A\\mid B')=\\dfrac{P(A\\cap B')}{P(B')}=\\dfrac{0.30}{0.65}=\\dfrac{6}{13}\\approx 0.462", explanation: "Since \\(0.15\\neq 0.1575\\), \\(A\\) and \\(B\\) are not independent — shown. For (d), condition on \\(B'\\) (probability \\(1-0.35=0.65\\)) using the 'only A' region 0.30, giving 6/13. Common slip: dividing by \\(P(B)=0.35\\) instead of \\(P(B')=0.65\\)." }
      ],
      finalAnswer: "(a) only A 0.30, both 0.15, only B 0.20, outside 0.35. (b) \\( P(A\\mid B)=\\tfrac{3}{7}\\approx 0.429 \\), \\( P(B\\mid A)=\\tfrac{1}{3} \\). (c) Not independent, since \\( 0.15\\neq 0.1575 \\). (d) \\( P(A\\mid B')=\\tfrac{6}{13}\\approx 0.462 \\).",
    },
  },
  {
    id: "y2cp-070",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 70",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "In a multiple-choice exam, the probability that a student knows the answer to a particular question is \\( 0.7 \\). If she knows it, she answers correctly with certainty. If she does not know it, she guesses, and a guess is correct with probability \\( 0.25 \\) (there are four options). (a) Show that the probability she answers the question correctly is \\( 0.775 \\). (b) Given that she answered correctly, find the probability that she actually knew the answer, to 3 significant figures. (c) An examiner argues that 'because each question can be guessed, a correct answer tells us almost nothing about whether a student knew the material.' Using your answer to (b), critique this argument.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 11], y: [0, 10] }} height={260}>
  <Line.Segment point1={[0, 5]} point2={[4, 7.3333]} color="var(--mafs-fg)" />
  <Text x={2} y={6.5667}>0.7</Text>
  <Text x={4.3} y={7.3333} attach="e">Knows</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 8.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={8.4567}>1</Text>
  <Text x={9.3} y={8.5} attach="e">Correct</Text>
  <Line.Segment point1={[4, 7.3333]} point2={[9, 6.1667]} color="var(--mafs-fg)" />
  <Text x={7.1} y={7.01}>0</Text>
  <Text x={9.3} y={6.1667} attach="e">Wrong</Text>
  <Line.Segment point1={[0, 5]} point2={[4, 2.6667]} color="var(--mafs-fg)" />
  <Text x={2} y={4.2333}>0.3</Text>
  <Text x={4.3} y={2.6667} attach="e">Does not know</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 3.8333]} color="var(--mafs-fg)" />
  <Text x={7.1} y={3.79}>0.25</Text>
  <Text x={9.3} y={3.8333} attach="e">Correct</Text>
  <Line.Segment point1={[4, 2.6667]} point2={[9, 1.5]} color="var(--mafs-fg)" />
  <Text x={7.1} y={2.3433}>0.75</Text>
  <Text x={9.3} y={1.5} attach="e">Wrong</Text>
</Mafs>`,
    marks: 8,
    examStyle: true,
    yearCreated: 2026,
    tags: ["conditional-probability", "tree-diagram", "reverse-conditional", "show-that", "critique", "exam-results"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the 'knows and correct' path.", workingLatex: "P(K\\cap C)=P(K)\\,P(C\\mid K)=0.7\\times 1=0.7", explanation: "If she knows the answer she is certain to be correct, so the path probability is just 0.7. Common slip: applying the 0.25 guess probability on the 'knows' branch." },
        { stepNumber: 2, description: "Find the 'does not know but correct' (lucky guess) path.", workingLatex: "P(K'\\cap C)=P(K')\\,P(C\\mid K')=0.3\\times 0.25=0.075", explanation: "Not knowing has probability 0.3, and a guess at four options is right with probability 0.25. Common slip: using 0.7 instead of its complement 0.3." },
        { stepNumber: 3, description: "For part (a), add the two correct paths.", workingLatex: "P(C)=P(K\\cap C)+P(K'\\cap C)=0.7+0.075=0.775", explanation: "Total probability over the two routes to a correct answer gives the required \\(0.775\\) — shown. Common slip: forgetting the lucky-guess contribution." },
        { stepNumber: 4, description: "For part (b), set up the reverse conditional \\( P(K\\mid C) \\) (Bayes).", workingLatex: "P(K\\mid C)=\\dfrac{P(K\\cap C)}{P(C)}=\\dfrac{0.7}{0.775}", explanation: "We are given the outcome (correct) and want the cause (knew it), reversing the conditioning. Common slip: quoting \\( P(C\\mid K)=1 \\) as the answer." },
        { stepNumber: 5, description: "Evaluate \\( P(K\\mid C) \\) to 3 significant figures.", workingLatex: "P(K\\mid C)=\\dfrac{0.7}{0.775}=\\dfrac{28}{31}\\approx 0.903", explanation: "Scaling 0.7/0.775 to 28/31 gives 0.903 (3 s.f.); about 90.3% of correct answers came from genuine knowledge. Common slip: rounding the inputs before dividing." },
        { stepNumber: 6, description: "Compare with the prior probability for context.", workingLatex: "P(K\\mid C)\\approx 0.903>0.7=P(K)", explanation: "A correct answer raises the probability she knew the material from 0.70 to about 0.90. Common slip: forgetting to relate the posterior back to the prior when judging 'informativeness'." },
        { stepNumber: 7, description: "Quantify why guessing contributes little.", workingLatex: "0.075\\ (\\text{lucky guesses})\\ll 0.7\\ (\\text{genuine})", explanation: "Lucky guesses make up only a small share of correct answers, so they barely dilute the signal. Common slip: assuming the mere possibility of guessing makes a correct answer uninformative." },
        { stepNumber: 8, description: "For part (c), critique the examiner's argument.", workingLatex: "P(K\\mid C)\\approx 0.903\\ \\Rightarrow\\ \\text{a correct answer is informative}", explanation: "The argument is wrong: a correct answer lifts the probability the student knew the material from 0.70 to about 0.903, so it is quite informative. Guessing dilutes but does not erase the signal because lucky guesses (0.075) are far fewer than genuine correct answers (0.7). Common slip: treating 'guessing is possible' as 'guessing is likely to explain a correct answer'." }
      ],
      finalAnswer: "(a) \\( P(C)=0.7+0.075=0.775 \\). (b) \\( P(K\\mid C)=\\tfrac{28}{31}\\approx 0.903 \\). (c) The argument is wrong: a correct answer lifts the probability of knowledge from 0.70 to ~0.903, so it is informative, not uninformative.",
    },
  },
  {
    id: "y2cp-071",
    topicRef: "y2cp",
    topicTitle: "Conditional Probability 71",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A reliability engineer models two safety systems on a machine. System \\( A \\) operates correctly with probability \\( P(A)=0.6 \\) and System \\( B \\) with probability \\( P(B)=0.25 \\). She assumes the two systems behave independently. (a) Using the independence assumption, find \\( P(A\\cap B) \\). (b) Show that the probability that at least one system operates correctly is \\( 0.7 \\). (c) Find \\( P(A\\mid B) \\) and explain how its value reflects the independence assumption. (d) Both systems share a single power supply. Comment on whether the engineer's independence assumption is reasonable.",
    questionMafs: `<Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.5, 7.5] }} height={220}>
  <Polygon points={[[0,0],[10,0],[10,7],[0,7]]} color="var(--mafs-fg)" fillOpacity={0} strokeOpacity={0.4} />
  <Circle center={[4, 3.4]} radius={2.5} color="var(--mafs-fg-blue)" fillOpacity={0.1} />
  <Circle center={[6, 3.4]} radius={2.5} color="var(--mafs-fg-orange)" fillOpacity={0.1} />
  <Text x={1.7} y={5.9}>0.6</Text>
  <Text x={8.3} y={5.9}>0.25</Text>
  <Text x={2.7} y={3.4}>0.45</Text>
  <Text x={5} y={3.4}>0.15</Text>
  <Text x={7.3} y={3.4}>0.1</Text>
  <Text x={9.2} y={0.7}>0.3</Text>
</Mafs>`,
    marks: 8,
    examStyle: true,
    yearCreated: 2026,
    tags: ["conditional-probability", "venn", "independence", "show-that", "critique"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "For part (a), apply the independence assumption to find \\( P(A\\cap B) \\).", workingLatex: "P(A\\cap B)=P(A)\\,P(B)=0.6\\times 0.25=0.15", explanation: "Under the stated independence, the multiplication rule reduces to the product of the marginals. Common slip: treating the systems as mutually exclusive and writing 0." },
        { stepNumber: 2, description: "Find the 'only A' region for the Venn diagram.", workingLatex: "P(A\\cap B')=P(A)-P(A\\cap B)=0.6-0.15=0.45", explanation: "Remove the overlap from circle A. Common slip: forgetting to subtract the intersection." },
        { stepNumber: 3, description: "Find the 'only B' region.", workingLatex: "P(A'\\cap B)=P(B)-P(A\\cap B)=0.25-0.15=0.10", explanation: "Remove the overlap from circle B. Common slip: subtracting from \\(P(A)\\) instead of \\(P(B)\\)." },
        { stepNumber: 4, description: "For part (b), apply the addition rule for 'at least one operates'.", workingLatex: "P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=0.6+0.25-0.15=0.70", explanation: "'At least one operates' is the union; the addition rule subtracts the double-counted overlap, giving the required \\(0.70\\) — shown. Common slip: forgetting to subtract \\( P(A\\cap B) \\)." },
        { stepNumber: 5, description: "Check the outside region is consistent.", workingLatex: "P(A'\\cap B')=1-P(A\\cup B)=1-0.70=0.30", explanation: "The probability neither operates is the complement of the union; it also equals \\(1-(0.45+0.15+0.10)\\), confirming the regions. Common slip: computing the outside as \\(1-P(A\\cap B)\\)." },
        { stepNumber: 6, description: "For part (c), find the conditional \\( P(A\\mid B) \\).", workingLatex: "P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}=\\dfrac{0.15}{0.25}=0.6", explanation: "Restrict to outcomes where B operates and find the fraction in which A also operates. Common slip: dividing by \\( P(A) \\) instead of \\( P(B) \\)." },
        { stepNumber: 7, description: "Explain how \\( P(A\\mid B) \\) reflects independence.", workingLatex: "P(A\\mid B)=0.6=P(A)", explanation: "The conditional equals the unconditional probability, so knowing B's state tells us nothing about A — precisely what the independence assumption means. Common slip: expecting the conditional to differ from \\(P(A)\\) under independence." },
        { stepNumber: 8, description: "For part (d), critique the independence assumption.", workingLatex: "\\text{shared power supply}\\Rightarrow \\text{common-cause failure}", explanation: "A shared power supply is a common cause: if it fails, both systems fail together, so their failures are positively correlated rather than independent. The assumption is therefore not reasonable and overstates the pair's reliability, since it ignores the chance of simultaneous failure. Common slip: assuming two physical components are automatically independent without checking for shared resources." }
      ],
      finalAnswer: "(a) \\( P(A\\cap B)=0.15 \\). (b) \\( P(A\\cup B)=0.6+0.25-0.15=0.70 \\). (c) \\( P(A\\mid B)=0.6=P(A) \\), so B gives no information about A — the signature of independence. (d) Not reasonable: a shared power supply is a common cause of failure, making the systems dependent and the independence assumption optimistic.",
    },
  },
];
