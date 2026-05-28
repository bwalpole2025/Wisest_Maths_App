import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    id: "p2-001",
    topicRef: "p2",
    topicTitle: "Disproof by Counter-Example 01",
    difficulty: "Foundation",
    questionText:
      "Disprove the statement: \"The sum of two prime numbers is always even.\"",
    marks: 2,
    examStyle: true,
    yearCreated: 2026,
    tags: ["disproof", "counter-example", "prime numbers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find a counter-example.",
          workingLatex:
            "\\text{Consider } 2 + 3 = 5\\\\[0.5em] \\text{Both 2 and 3 are prime, but 5 is odd.}",
          explanation:
            "We only need one example where the statement fails. Since 2 is the only even prime, adding it to any odd prime gives an odd result.",
        },
      ],
      finalAnswer:
        "Counter-example: \\( 2 + 3 = 5 \\), which is odd. The statement is false.",
      commonMistakes: [
        "Trying to prove the statement is always false — we only need one counter-example.",
        "Not checking that both numbers are actually prime.",
      ],
    },
  },
  {
    id: "p2-002",
    topicRef: "p2",
    topicTitle: "Disproof by Counter-Example 02",
    difficulty: "Foundation",
    questionText:
      "Disprove the statement: \"If \\( n \\) is a positive integer, then \\( n^2 > n \\).\"",
    marks: 2,
    examStyle: true,
    yearCreated: 2026,
    tags: ["disproof", "counter-example", "inequality"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find a counter-example.",
          workingLatex:
            "\\text{Let } n = 1:\\\\[0.5em] n^2 = 1^2 = 1 \\quad \\text{and} \\quad n = 1\\\\[0.5em] 1 \\not> 1 \\quad \\text{(they are equal)}",
          explanation:
            "When \\( n = 1 \\), \\( n^2 = n \\), so \\( n^2 \\) is not strictly greater than \\( n \\).",
        },
      ],
      finalAnswer:
        "Counter-example: \\( n = 1 \\) gives \\( n^2 = 1 = n \\), so \\( n^2 > n \\) is false. The statement is disproved.",
    },
  },
  {
    id: "p2-003",
    topicRef: "p2",
    topicTitle: "Disproof by Counter-Example 03",
    difficulty: "Foundation",
    questionText:
      "Disprove the statement: \"\\( n^2 - n + 11 \\) is prime for all positive integers \\( n \\).\"",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["disproof", "counter-example", "prime", "quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Test \\( n = 11 \\).",
          workingLatex:
            "\\begin{aligned} n = 11: \\quad 11^2 - 11 + 11 &= 121 - 11 + 11 \\\\ &= 121 \\\\ &= 11 \\times 11 \\end{aligned}",
          explanation:
            "We try values of \\( n \\) until we find one that gives a non-prime result. At \\( n = 11 \\), the expression equals 121 which is \\( 11^2 \\).",
        },
        {
          stepNumber: 2,
          description: "Conclude.",
          workingLatex:
            "121 = 11^2 \\text{ is not prime.}",
          explanation:
            "Since 121 has factors other than 1 and itself, it is not prime. This disproves the statement.",
        },
      ],
      finalAnswer:
        "Counter-example: \\( n = 11 \\) gives \\( 11^2 - 11 + 11 = 121 = 11^2 \\), which is not prime.",
      commonMistakes: [
        "Testing only small values like \\( n = 1, 2, 3 \\) and concluding the statement is true.",
      ],
    },
  },
  {
    id: "p2-004",
    topicRef: "p2",
    topicTitle: "Disproof by Counter-Example 04",
    difficulty: "Standard",
    questionText:
      "Disprove the statement: \"If \\( a > b \\), then \\( a^2 > b^2 \\).\"",
    marks: 2,
    examStyle: true,
    yearCreated: 2026,
    tags: ["disproof", "counter-example", "inequality", "negative numbers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find a counter-example using negative numbers.",
          workingLatex:
            "\\text{Let } a = 1, \\; b = -3.\\\\[0.5em] a > b \\text{ since } 1 > -3. \\; \\checkmark\\\\[0.5em] a^2 = 1, \\quad b^2 = 9\\\\[0.5em] 1 \\not> 9 \\quad \\text{so } a^2 > b^2 \\text{ is false.}",
          explanation:
            "The statement fails when \\( b \\) is a negative number with large absolute value, since squaring removes the sign.",
        },
      ],
      finalAnswer:
        "Counter-example: \\( a = 1, b = -3 \\). Then \\( a > b \\) but \\( a^2 = 1 < 9 = b^2 \\). The statement is false.",
    },
  },
  {
    id: "p2-005",
    topicRef: "p2",
    topicTitle: "Disproof by Counter-Example 05",
    difficulty: "Standard",
    questionText:
      "Disprove the statement: \"For all real numbers \\( x \\), \\( \\sqrt{x^2} = x \\).\"",
    marks: 2,
    examStyle: true,
    yearCreated: 2026,
    tags: ["disproof", "counter-example", "square root", "absolute value"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find a counter-example.",
          workingLatex:
            "\\text{Let } x = -3.\\\\[0.5em] \\sqrt{x^2} = \\sqrt{(-3)^2} = \\sqrt{9} = 3\\\\[0.5em] \\text{But } x = -3 \\neq 3.",
          explanation:
            "The square root function always returns the non-negative value. So \\( \\sqrt{x^2} = |x| \\), not \\( x \\), when \\( x \\) is negative.",
        },
      ],
      finalAnswer:
        "Counter-example: \\( x = -3 \\). Then \\( \\sqrt{x^2} = 3 \\neq -3 = x \\). The correct identity is \\( \\sqrt{x^2} = |x| \\).",
    },
  },
  {
    id: "p2-006",
    topicRef: "p2",
    topicTitle: "Disproof by Counter-Example 06",
    difficulty: "Standard",
    questionText:
      "Disprove the statement: \"If \\( n \\) is a positive integer, then \\( 2^n + 1 \\) is prime.\"",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["disproof", "counter-example", "prime", "powers of 2"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Test values of \\( n \\) systematically.",
          workingLatex:
            "\\begin{aligned} n = 1: \\quad 2^1 + 1 &= 3 \\quad \\text{(prime)} \\\\ n = 2: \\quad 2^2 + 1 &= 5 \\quad \\text{(prime)} \\\\ n = 3: \\quad 2^3 + 1 &= 9 \\quad = 3 \\times 3 \\quad \\text{(not prime)} \\end{aligned}",
          explanation:
            "At \\( n = 3 \\), \\( 2^3 + 1 = 9 = 3^2 \\), which is not prime.",
        },
      ],
      finalAnswer:
        "Counter-example: \\( n = 3 \\) gives \\( 2^3 + 1 = 9 = 3 \\times 3 \\), which is not prime.",
    },
  },
  {
    id: "p2-007",
    topicRef: "p2",
    topicTitle: "Disproof by Counter-Example 07",
    difficulty: "Challenge",
    questionText:
      "A student claims: \"If \\( p \\) and \\( q \\) are irrational numbers, then \\( p + q \\) is irrational.\" Disprove this claim.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["disproof", "counter-example", "irrational numbers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose two irrational numbers whose sum is rational.",
          workingLatex:
            "\\text{Let } p = \\sqrt{2} \\text{ and } q = -\\sqrt{2}.\\\\[0.5em] \\text{Both are irrational.}\\\\[0.5em] p + q = \\sqrt{2} + (-\\sqrt{2}) = 0",
          explanation:
            "\\( 0 \\) is a rational number. So we have two irrational numbers whose sum is rational.",
        },
      ],
      finalAnswer:
        "Counter-example: \\( p = \\sqrt{2} \\) and \\( q = -\\sqrt{2} \\) are both irrational, but \\( p + q = 0 \\) is rational.",
      commonMistakes: [
        "Choosing two irrational numbers that still give an irrational sum, e.g. \\( \\sqrt{2} + \\sqrt{3} \\).",
      ],
    },
  },
  {
    id: "p2-008",
    topicRef: "p2",
    topicTitle: "Disproof by Counter-Example 08",
    difficulty: "Challenge",
    questionText:
      "Disprove the statement: \"For all integers \\( a \\) and \\( b \\), if \\( a \\mid b^2 \\) then \\( a \\mid b \\).\"\\newline (Here \\( a \\mid b \\) means \\( a \\) divides \\( b \\).)",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["disproof", "counter-example", "divisibility"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find a counter-example.",
          workingLatex:
            "\\text{Let } a = 4, \\; b = 6.\\\\[0.5em] b^2 = 36 = 4 \\times 9 \\quad \\Rightarrow \\quad 4 \\mid 36 \\; \\checkmark\\\\[0.5em] \\text{But } 6 \\div 4 = 1.5 \\quad \\Rightarrow \\quad 4 \\nmid 6.",
          explanation:
            "4 divides 36 (since \\( 36 = 4 \\times 9 \\)), but 4 does not divide 6. The statement is false.",
        },
      ],
      finalAnswer:
        "Counter-example: \\( a = 4, b = 6 \\). Then \\( 4 \\mid 36 \\) but \\( 4 \\nmid 6 \\). The statement is false.",
    },
  },
];
