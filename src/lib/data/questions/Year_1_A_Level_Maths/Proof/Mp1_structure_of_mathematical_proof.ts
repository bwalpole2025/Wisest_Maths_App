import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    id: "Mp1-001",
    topicRef: "Mp1",
    topicTitle: "Structure of Mathematical Proof 01",
    difficulty: "Foundation",
    questionText:
      "Prove that the sum of any two consecutive integers is always odd.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["proof", "deduction", "consecutive integers", "odd"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Let the two consecutive integers be \\( n \\) and \\( n+1 \\).",
          workingLatex:
            "\\text{Let } n \\text{ be any integer.}\\\\[0.5em] \\text{The next consecutive integer is } n + 1.",
          explanation:
            "We start by defining our variables. Using \\( n \\) lets us represent any integer.",
        },
        {
          stepNumber: 2,
          description: "Find their sum.",
          workingLatex:
            "n + (n + 1) = 2n + 1",
          explanation:
            "We add the two consecutive integers and simplify.",
        },
        {
          stepNumber: 3,
          description: "Show this is always odd.",
          workingLatex:
            "2n + 1 = 2k + 1 \\text{ where } k = n \\in \\mathbb{Z}\\\\[0.5em] \\text{This is in the form } 2k + 1 \\text{, which is odd.}",
          explanation:
            "Since \\( 2n \\) is always even (a multiple of 2), adding 1 gives an odd number. This works for all integers \\( n \\).",
        },
      ],
      finalAnswer:
        "The sum of two consecutive integers is \\( 2n + 1 \\), which is always odd. \\(\\square\\)",
      commonMistakes: [
        "Using specific examples (e.g. 3 + 4 = 7) instead of a general algebraic proof.",
        "Forgetting to state that 2n + 1 is odd because it is one more than a multiple of 2.",
      ],
    },
  },
  {
    id: "Mp1-002",
    topicRef: "Mp1",
    topicTitle: "Structure of Mathematical Proof 02",
    difficulty: "Foundation",
    questionText:
      "Prove that the product of any two even numbers is always a multiple of 4.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["proof", "deduction", "even numbers", "multiple"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Let the two even numbers be \\( 2m \\) and \\( 2n \\).",
          workingLatex:
            "\\text{Let } 2m \\text{ and } 2n \\text{ be any two even numbers, where } m, n \\in \\mathbb{Z}.",
          explanation:
            "Any even number can be written as \\( 2 \\times \\text{(an integer)} \\).",
        },
        {
          stepNumber: 2,
          description: "Find their product.",
          workingLatex:
            "2m \\times 2n = 4mn",
          explanation:
            "Multiply the two expressions together.",
        },
        {
          stepNumber: 3,
          description: "Show this is a multiple of 4.",
          workingLatex:
            "4mn = 4k \\text{ where } k = mn \\in \\mathbb{Z}\\\\[0.5em] \\text{Since } k \\text{ is an integer, } 4mn \\text{ is a multiple of 4.}",
          explanation:
            "The product \\( 4mn \\) is clearly divisible by 4, so it is always a multiple of 4.",
        },
      ],
      finalAnswer:
        "The product of two even numbers \\( 2m \\times 2n = 4mn \\), which is always a multiple of 4. \\(\\square\\)",
      commonMistakes: [
        "Using specific numbers rather than a general proof.",
        "Writing even numbers as \\( 2n \\) and \\( 2n \\) (the same variable), which would mean they are the same number.",
      ],
    },
  },
  {
    id: "Mp1-003",
    topicRef: "Mp1",
    topicTitle: "Structure of Mathematical Proof 03",
    difficulty: "Foundation",
    questionText:
      "Prove by exhaustion that \\( n^2 + n + 1 \\) is odd for all integers \\( n \\) where \\( 1 \\leq n \\leq 4 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["proof", "exhaustion", "odd"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Test each value of \\( n \\) from 1 to 4.",
          workingLatex:
            "\\begin{aligned} n = 1: \\quad &1^2 + 1 + 1 = 3 \\quad \\text{(odd)} \\\\ n = 2: \\quad &2^2 + 2 + 1 = 7 \\quad \\text{(odd)} \\\\ n = 3: \\quad &3^2 + 3 + 1 = 13 \\quad \\text{(odd)} \\\\ n = 4: \\quad &4^2 + 4 + 1 = 21 \\quad \\text{(odd)} \\end{aligned}",
          explanation:
            "In proof by exhaustion, we check every case in the given range. Since there are only 4 values, we test each one.",
        },
        {
          stepNumber: 2,
          description: "State the conclusion.",
          workingLatex:
            "\\text{In all cases, } n^2 + n + 1 \\text{ is odd.}",
          explanation:
            "Since we have checked every value of \\( n \\) in the range and each gives an odd result, the statement is proved by exhaustion.",
        },
      ],
      finalAnswer:
        "By testing all cases \\( n = 1, 2, 3, 4 \\), we get 3, 7, 13, 21 which are all odd. Proved by exhaustion. \\(\\square\\)",
      commonMistakes: [
        "Missing one of the cases.",
        "Not clearly stating that each result is odd.",
      ],
    },
  },
  {
    id: "Mp1-004",
    topicRef: "Mp1",
    topicTitle: "Structure of Mathematical Proof 04",
    difficulty: "Standard",
    questionText:
      "Prove that the sum of the squares of any two consecutive odd numbers is always even.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["proof", "deduction", "odd numbers", "squares"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Let the two consecutive odd numbers be \\( 2n - 1 \\) and \\( 2n + 1 \\).",
          workingLatex:
            "\\text{Let } n \\in \\mathbb{Z}. \\\\[0.5em] \\text{Two consecutive odd numbers: } 2n - 1 \\text{ and } 2n + 1.",
          explanation:
            "Consecutive odd numbers differ by 2. Writing them as \\( 2n - 1 \\) and \\( 2n + 1 \\) ensures both are odd.",
        },
        {
          stepNumber: 2,
          description: "Find the sum of their squares.",
          workingLatex:
            "\\begin{aligned} (2n-1)^2 + (2n+1)^2 &= (4n^2 - 4n + 1) + (4n^2 + 4n + 1) \\\\ &= 8n^2 + 2 \\\\ &= 2(4n^2 + 1) \\end{aligned}",
          explanation:
            "Expand each square, then add them together and simplify.",
        },
        {
          stepNumber: 3,
          description: "Show this is even.",
          workingLatex:
            "2(4n^2 + 1) = 2k \\text{ where } k = 4n^2 + 1 \\in \\mathbb{Z}\\\\[0.5em] \\text{This is a multiple of 2, so it is even.}",
          explanation:
            "The expression has a factor of 2, so it is always even regardless of the value of \\( n \\).",
        },
      ],
      finalAnswer:
        "The sum of the squares of two consecutive odd numbers is \\( 2(4n^2 + 1) \\), which is always even. \\(\\square\\)",
      commonMistakes: [
        "Using \\( 2n + 1 \\) and \\( 2n + 3 \\) instead — this is also valid but changes the algebra.",
        "Errors when expanding \\( (2n - 1)^2 \\), especially forgetting the middle term.",
      ],
    },
  },
  {
    id: "Mp1-005",
    topicRef: "Mp1",
    topicTitle: "Structure of Mathematical Proof 05",
    difficulty: "Standard",
    questionText:
      "Prove that for all positive integers \\( n \\), \\( n^3 - n \\) is divisible by 6.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["proof", "deduction", "factorising", "divisibility"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise \\( n^3 - n \\).",
          workingLatex:
            "n^3 - n = n(n^2 - 1) = n(n - 1)(n + 1)",
          explanation:
            "Take out the common factor \\( n \\), then factorise the difference of two squares.",
        },
        {
          stepNumber: 2,
          description: "Recognise this as a product of three consecutive integers.",
          workingLatex:
            "(n - 1) \\times n \\times (n + 1) \\text{ are three consecutive integers.}",
          explanation:
            "The factors are \\( n - 1 \\), \\( n \\) and \\( n + 1 \\), which are three consecutive integers.",
        },
        {
          stepNumber: 3,
          description: "Show divisibility by 2 and by 3.",
          workingLatex:
            "\\text{Among any 3 consecutive integers:}\\\\[0.5em] \\bullet \\text{ At least one is even } \\Rightarrow \\text{ product divisible by 2}\\\\[0.5em] \\bullet \\text{ Exactly one is a multiple of 3 } \\Rightarrow \\text{ product divisible by 3}\\\\[0.5em] \\text{Since } \\gcd(2, 3) = 1, \\text{ the product is divisible by } 2 \\times 3 = 6.",
          explanation:
            "In any set of three consecutive integers, one must be divisible by 3 and at least one must be even. Since 2 and 3 are coprime, the product is divisible by 6.",
        },
      ],
      finalAnswer:
        "\\( n^3 - n = (n-1)n(n+1) \\) is the product of three consecutive integers, which is always divisible by 6. \\(\\square\\)",
      commonMistakes: [
        "Not fully justifying why consecutive integers guarantee divisibility by both 2 and 3.",
        "Attempting proof by exhaustion which would require infinitely many cases.",
      ],
    },
  },
  {
    id: "Mp1-006",
    topicRef: "Mp1",
    topicTitle: "Structure of Mathematical Proof 06",
    difficulty: "Standard",
    questionText:
      "Prove by exhaustion that \\( 2^n > n^2 \\) for \\( n = 5, 6, 7 \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["proof", "exhaustion", "powers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Test each value of \\( n \\).",
          workingLatex:
            "\\begin{aligned} n = 5: \\quad 2^5 &= 32, \\quad 5^2 = 25, \\quad 32 > 25 \\; \\checkmark \\\\ n = 6: \\quad 2^6 &= 64, \\quad 6^2 = 36, \\quad 64 > 36 \\; \\checkmark \\\\ n = 7: \\quad 2^7 &= 128, \\quad 7^2 = 49, \\quad 128 > 49 \\; \\checkmark \\end{aligned}",
          explanation:
            "Calculate \\( 2^n \\) and \\( n^2 \\) for each value and compare.",
        },
      ],
      finalAnswer:
        "For \\( n = 5, 6, 7 \\), we have \\( 2^n > n^2 \\) in all cases. Proved by exhaustion. \\(\\square\\)",
    },
  },
  {
    id: "Mp1-007",
    topicRef: "Mp1",
    topicTitle: "Structure of Mathematical Proof 07",
    difficulty: "Challenge",
    questionText:
      "Prove that \\( (a + b)^2 \\leq 2(a^2 + b^2) \\) for all real numbers \\( a \\) and \\( b \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["proof", "deduction", "inequality", "algebraic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the known fact that \\( (a - b)^2 \\geq 0 \\).",
          workingLatex:
            "(a - b)^2 \\geq 0 \\quad \\text{for all real } a, b",
          explanation:
            "The square of any real number is non-negative.",
        },
        {
          stepNumber: 2,
          description: "Expand and rearrange.",
          workingLatex:
            "\\begin{aligned} a^2 - 2ab + b^2 &\\geq 0 \\\\ a^2 + b^2 &\\geq 2ab \\end{aligned}",
          explanation:
            "Expand the left side and rearrange to get \\( a^2 + b^2 \\geq 2ab \\).",
        },
        {
          stepNumber: 3,
          description: "Add \\( a^2 + b^2 \\) to both sides.",
          workingLatex:
            "\\begin{aligned} 2(a^2 + b^2) &\\geq a^2 + 2ab + b^2 \\\\ 2(a^2 + b^2) &\\geq (a + b)^2 \\end{aligned}",
          explanation:
            "Adding \\( a^2 + b^2 \\) to both sides of \\( a^2 + b^2 \\geq 2ab \\) gives the required result.",
        },
      ],
      finalAnswer:
        "Since \\( (a - b)^2 \\geq 0 \\), we have \\( 2(a^2 + b^2) \\geq (a + b)^2 \\). \\(\\square\\)",
      commonMistakes: [
        "Trying to expand both sides and compare — starting from the result is not a valid proof technique.",
        "Forgetting to justify that \\( (a - b)^2 \\geq 0 \\).",
      ],
    },
  },
  {
    id: "Mp1-008",
    topicRef: "Mp1",
    topicTitle: "Structure of Mathematical Proof 08",
    difficulty: "Challenge",
    questionText:
      "Prove that if \\( n \\) is an integer and \\( n^2 \\) is even, then \\( n \\) is even.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["proof", "deduction", "contrapositive", "even"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use proof by contrapositive: prove that if \\( n \\) is odd, then \\( n^2 \\) is odd.",
          workingLatex:
            "\\text{Contrapositive: if } n \\text{ is odd, then } n^2 \\text{ is odd.}",
          explanation:
            "The contrapositive of \"if \\( n^2 \\) is even then \\( n \\) is even\" is \"if \\( n \\) is odd then \\( n^2 \\) is odd\". These are logically equivalent.",
        },
        {
          stepNumber: 2,
          description: "Let \\( n \\) be odd, so \\( n = 2k + 1 \\) for some integer \\( k \\).",
          workingLatex:
            "\\begin{aligned} n &= 2k + 1 \\quad (k \\in \\mathbb{Z}) \\\\ n^2 &= (2k+1)^2 \\\\ &= 4k^2 + 4k + 1 \\\\ &= 2(2k^2 + 2k) + 1 \\end{aligned}",
          explanation:
            "Substitute \\( n = 2k + 1 \\) and expand the square.",
        },
        {
          stepNumber: 3,
          description: "Conclude that \\( n^2 \\) is odd.",
          workingLatex:
            "n^2 = 2m + 1 \\text{ where } m = 2k^2 + 2k \\in \\mathbb{Z}\\\\[0.5em] \\text{So } n^2 \\text{ is odd.}",
          explanation:
            "Since \\( n^2 \\) is of the form \\( 2m + 1 \\), it is odd. The contrapositive is proved, so the original statement is true.",
        },
      ],
      finalAnswer:
        "By contrapositive: if \\( n \\) is odd then \\( n^2 = 2(2k^2 + 2k) + 1 \\) is odd. Therefore if \\( n^2 \\) is even, \\( n \\) must be even. \\(\\square\\)",
      commonMistakes: [
        "Confusing the contrapositive with the converse.",
        "Attempting a direct proof which is harder to construct.",
      ],
    },
  },
  {
    id: "Mp1-009",
    topicRef: "Mp1",
    topicTitle: "Structure of Mathematical Proof 09",
    difficulty: "Foundation",
    questionText:
      "Prove that the sum of any three consecutive integers is always a multiple of 3.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["proof", "deduction", "consecutive integers", "divisibility"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Let the three consecutive integers be \\( n \\), \\( n+1 \\), and \\( n+2 \\).",
          workingLatex:
            "\\text{Let } n \\in \\mathbb{Z}. \\text{ The three consecutive integers are } n, \\; n+1, \\; n+2.",
          explanation:
            "We represent consecutive integers using \\( n \\).",
        },
        {
          stepNumber: 2,
          description: "Find their sum.",
          workingLatex:
            "n + (n+1) + (n+2) = 3n + 3 = 3(n + 1)",
          explanation:
            "Add the three integers and factorise.",
        },
        {
          stepNumber: 3,
          description: "Show this is a multiple of 3.",
          workingLatex:
            "3(n+1) = 3k \\text{ where } k = n + 1 \\in \\mathbb{Z}\\\\[0.5em] \\text{So the sum is a multiple of 3.}",
          explanation:
            "The sum has a factor of 3, so it is always divisible by 3.",
        },
      ],
      finalAnswer:
        "The sum of three consecutive integers is \\( 3(n+1) \\), a multiple of 3. \\(\\square\\)",
    },
  },
  {
    id: "Mp1-010",
    topicRef: "Mp1",
    topicTitle: "Structure of Mathematical Proof 10",
    difficulty: "Challenge",
    questionText:
      "Prove that if \\( n \\) is a positive integer, then \\( n^2 + 2n \\) is odd if and only if \\( n \\) is odd.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["proof", "deduction", "if and only if", "odd", "even"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise \\( n^2 + 2n \\).",
          workingLatex:
            "n^2 + 2n = n(n + 2)",
          explanation:
            "Take out the common factor of \\( n \\).",
        },
        {
          stepNumber: 2,
          description: "Prove (\\(\\Rightarrow\\)): if \\( n \\) is odd, then \\( n^2 + 2n \\) is odd.",
          workingLatex:
            "\\text{If } n \\text{ is odd, then } n + 2 \\text{ is also odd.}\\\\[0.5em] \\text{odd} \\times \\text{odd} = \\text{odd}\\\\[0.5em] \\text{So } n(n+2) \\text{ is odd.}",
          explanation:
            "If \\( n \\) is odd, adding 2 gives another odd number. The product of two odd numbers is odd.",
        },
        {
          stepNumber: 3,
          description: "Prove (\\(\\Leftarrow\\)): if \\( n \\) is even, then \\( n^2 + 2n \\) is even.",
          workingLatex:
            "\\text{If } n \\text{ is even, say } n = 2k:\\\\[0.5em] n(n+2) = 2k(2k + 2) = 2k \\cdot 2(k+1) = 4k(k+1)\\\\[0.5em] \\text{This is even (in fact a multiple of 4).}",
          explanation:
            "This is the contrapositive of the reverse direction: if \\( n^2 + 2n \\) is odd then \\( n \\) is odd. We show that when \\( n \\) is even, \\( n^2 + 2n \\) is even.",
        },
        {
          stepNumber: 4,
          description: "Conclude.",
          workingLatex:
            "\\text{Both directions are proved, so } n^2 + 2n \\text{ is odd} \\Leftrightarrow n \\text{ is odd.}",
          explanation:
            "An \"if and only if\" proof requires both directions to be proved.",
        },
      ],
      finalAnswer:
        "\\( n^2 + 2n = n(n+2) \\). If \\( n \\) is odd, both factors are odd so the product is odd. If \\( n \\) is even, \\( n(n+2) \\) is even. Hence \\( n^2 + 2n \\) is odd \\(\\Leftrightarrow\\) \\( n \\) is odd. \\(\\square\\)",
    },
  },
];
