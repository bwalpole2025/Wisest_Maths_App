/*
 * Topic: Factorising using common factors
 * Ref:   ga08   (DfE A4)
 * Strand: Algebra — GCSE Maths (Foundation + Higher)
 *
 * Coverage: factorise a single-bracket expression by taking out the HIGHEST
 *   common factor (the reverse of expanding one bracket). Clusters covered:
 *     (1) numerical common factor              e.g. 6x + 9   = 3(2x + 3)
 *     (2) single-variable common factor        e.g. x^2 + 5x = x(x + 5)
 *     (3) number AND letter                    e.g. 6x^2 - 4x = 2x(3x - 2)
 *     (4) several variables                    e.g. 8ab + 12a = 4a(2b + 3)
 *     (5) factor out a negative / full factor  e.g. -3x - 6 = -3(x + 2),
 *                                                   12x^3 - 18x^2 = 6x^2(2x - 3)
 *   The emphasis throughout is on extracting the HIGHEST common factor so that
 *   the bracket left behind has no remaining common factor. This bank does NOT
 *   factorise quadratics into two brackets (that is a separate bank).
 *
 * Difficulty split (30 total):
 *   Foundation :  4  (ga08-001 .. ga08-004)
 *   Standard   : 14  (ga08-005 .. ga08-018)
 *   Challenge  : 12  (ga08-019 .. ga08-030)
 *
 * Id range: ga08-001 .. ga08-030 (zero-padded).
 *
 * LaTeX note: questionText maths is wrapped in \( ... \) and uses \dfrac for
 *   display fractions; workingLatex is RAW (unwrapped) and uses \frac (hard
 *   project rule — never \tfrac). Multiplication is shown with \cdot (never
 *   \times or *) except where the prose is literally about the symbol.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ===================== FOUNDATION (001–004) =====================
  {
    id: "ga08-001",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Factorise fully \\(6x + 9\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "numerical-factor"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Break each number into its factors.",
          workingLatex: "6 = 2 \\cdot 3, \\qquad 9 = 3 \\cdot 3",
          explanation:
            "Factorising means reversing an expansion, so the first job is to find the largest thing that divides into BOTH terms. Start by writing each number as a product of its factors. The term \\(6x\\) has number part \\(6 = 2 \\cdot 3\\); the term \\(9\\) is \\(3 \\cdot 3\\). Lining the factors up like this makes the shared one easy to spot.",
        },
        {
          stepNumber: 2,
          description: "Pick out the highest common number factor.",
          workingLatex: "\\text{shared factor of } 6 \\text{ and } 9 = 3",
          explanation:
            "Compare the two factor lists: the only factor appearing in both \\(6 = 2 \\cdot 3\\) and \\(9 = 3 \\cdot 3\\) is the \\(3\\). So the highest common factor of the numbers is \\(3\\). Don't stop at \\(1\\) — \\(1\\) divides everything, but we always want the HIGHEST common factor, not just any common factor.",
        },
        {
          stepNumber: 3,
          description: "Check whether any letter is common too.",
          workingLatex: "6x \\;\\text{has } x, \\qquad 9 \\;\\text{has no letter} \\;\\Rightarrow\\; \\text{HCF} = 3",
          explanation:
            "A letter can only be taken outside the bracket if it appears in EVERY term. Here the first term has an \\(x\\) but the second term \\(9\\) has no letter at all, so there is no shared \\(x\\) to take out. The full HCF is therefore just the number \\(3\\).",
        },
        {
          stepNumber: 4,
          description: "Divide each term by the HCF.",
          workingLatex: "6x \\div 3 = 2x, \\qquad 9 \\div 3 = 3",
          explanation:
            "Write the HCF \\(3\\) outside a bracket, then divide each original term by \\(3\\) to see what belongs inside. \\(6x \\div 3 = 2x\\) and \\(9 \\div 3 = 3\\). These two results become the contents of the bracket, keeping the \\(+\\) sign between them.",
        },
        {
          stepNumber: 5,
          description: "Write the factorised form and check by expanding.",
          workingLatex: "6x + 9 = 3(2x + 3)",
          explanation:
            "So \\(6x + 9 = 3(2x + 3)\\). Always check by expanding back: \\(3 \\cdot 2x = 6x\\) and \\(3 \\cdot 3 = 9\\), giving \\(6x + 9\\) — the original expression. The bracket \\(2x + 3\\) has no further common factor, so this is fully factorised.",
        },
      ],
      finalAnswer: "6x + 9 = 3(2x + 3)",
      canonicalAnswer: "3(2x+3)",
    },
  },
  {
    id: "ga08-002",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Factorise \\(x^2 + 5x\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "single-variable"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Check the numbers for a common factor.",
          workingLatex: "x^2 \\;\\text{has number } 1, \\qquad 5x \\;\\text{has number } 5 \\;\\Rightarrow\\; \\text{number HCF} = 1",
          explanation:
            "Look at the number parts first. The hidden coefficient of \\(x^2\\) is \\(1\\) (we never write the \\(1\\)), and the coefficient of \\(5x\\) is \\(5\\). The only number dividing both \\(1\\) and \\(5\\) is \\(1\\), so there is no numerical factor worth taking out — the common factor must come entirely from the letters.",
        },
        {
          stepNumber: 2,
          description: "Write each term's letter part out.",
          workingLatex: "x^2 = x \\cdot x, \\qquad 5x = 5 \\cdot x",
          explanation:
            "Spell out the \\(x\\) factors so the shared ones are visible. The first term \\(x^2\\) is \\(x \\cdot x\\) (two \\(x\\)s), and the second term \\(5x\\) has just a single \\(x\\). Both terms clearly contain at least one \\(x\\).",
        },
        {
          stepNumber: 3,
          description: "Find the highest common power of \\(x\\).",
          workingLatex: "x^2, \\; x^1 \\;\\Rightarrow\\; \\text{common letter} = x",
          explanation:
            "The first term has \\(x^2\\) and the second has \\(x^1\\). The HIGHEST power of \\(x\\) that divides into both is the LOWEST power that is actually present, namely \\(x^1\\) — you can only pull out as many \\(x\\)s as the smallest term can spare. So the HCF of the whole expression is \\(x\\).",
        },
        {
          stepNumber: 4,
          description: "Divide each term by \\(x\\).",
          workingLatex: "x^2 \\div x = x, \\qquad 5x \\div x = 5",
          explanation:
            "Put \\(x\\) outside the bracket and divide each term by it. \\(x^2 \\div x = x\\) (subtract the powers: \\(x^{2-1} = x^1 = x\\)) and \\(5x \\div x = 5\\) (the \\(x\\)s cancel, leaving the number). These two results go inside the bracket.",
        },
        {
          stepNumber: 5,
          description: "Write the answer and verify.",
          workingLatex: "x^2 + 5x = x(x + 5)",
          explanation:
            "So \\(x^2 + 5x = x(x + 5)\\). Expand to check: \\(x \\cdot x = x^2\\) and \\(x \\cdot 5 = 5x\\), giving \\(x^2 + 5x\\). Correct. A common mistake is to forget the \\(x\\) on the first inside term and write \\(x(5)\\), or to drop the second term entirely — always divide BOTH terms by the HCF.",
        },
      ],
      finalAnswer: "x^2 + 5x = x(x + 5)",
      canonicalAnswer: "x(x+5)",
    },
  },
  {
    id: "ga08-003",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Factorise fully \\(10y - 15\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "numerical-factor"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Break each number into its factors.",
          workingLatex: "10 = 5 \\cdot 2, \\qquad 15 = 5 \\cdot 3",
          explanation:
            "The terms are \\(10y\\) and \\(15\\). Write each number as a product of factors so the shared one stands out: \\(10 = 5 \\cdot 2\\) and \\(15 = 5 \\cdot 3\\). Both lists contain a \\(5\\).",
        },
        {
          stepNumber: 2,
          description: "Pick out the highest common number factor.",
          workingLatex: "\\text{shared factor of } 10 \\text{ and } 15 = 5",
          explanation:
            "The factor \\(5\\) appears in both factor lists, and nothing larger divides both \\(10\\) and \\(15\\) (their other factors, \\(2\\) and \\(3\\), are different). So the highest common factor of the numbers is \\(5\\).",
        },
        {
          stepNumber: 3,
          description: "Check whether \\(y\\) is common too.",
          workingLatex: "10y \\;\\text{has } y, \\qquad 15 \\;\\text{has no letter} \\;\\Rightarrow\\; \\text{HCF} = 5",
          explanation:
            "The first term carries a \\(y\\), but the second term \\(15\\) has no letter at all. Since a letter must appear in EVERY term to come out, \\(y\\) is not common — we can only take out the number \\(5\\).",
        },
        {
          stepNumber: 4,
          description: "Divide each term by \\(5\\).",
          workingLatex: "10y \\div 5 = 2y, \\qquad 15 \\div 5 = 3",
          explanation:
            "Place \\(5\\) outside the bracket. Then \\(10y \\div 5 = 2y\\) and \\(15 \\div 5 = 3\\). Carry the minus sign straight through from the original: the bracket contents are \\(2y - 3\\).",
        },
        {
          stepNumber: 5,
          description: "State the answer and check.",
          workingLatex: "10y - 15 = 5(2y - 3)",
          explanation:
            "So \\(10y - 15 = 5(2y - 3)\\). Check: \\(5 \\cdot 2y = 10y\\) and \\(5 \\cdot (-3) = -15\\), giving \\(10y - 15\\). If you had taken out \\(5\\) but written \\(5(2y - 15)\\) you would have under-divided the second term — make sure EVERY term inside is the original divided by the HCF.",
        },
      ],
      finalAnswer: "10y - 15 = 5(2y - 3)",
      canonicalAnswer: "5(2y-3)",
    },
  },
  {
    id: "ga08-004",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Factorise \\(7a + 7b\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "numerical-factor"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Look at the number in each term.",
          workingLatex: "7a = 7 \\cdot a, \\qquad 7b = 7 \\cdot b",
          explanation:
            "Write each term as a product. Both \\(7a\\) and \\(7b\\) carry the number \\(7\\) as a factor, so \\(7\\) is the obvious candidate for the common factor — and since \\(7\\) is prime, nothing larger could divide both.",
        },
        {
          stepNumber: 2,
          description: "Check the letters before fixing the HCF.",
          workingLatex: "\\text{number } 7 \\text{ common}; \\;\\; a \\neq b \\;\\Rightarrow\\; \\text{HCF} = 7",
          explanation:
            "The number \\(7\\) is common to both terms. The letters differ, though — one term has \\(a\\), the other \\(b\\) — and a letter can only come out if it appears in EVERY term, so no letter is common here. The HCF is therefore just \\(7\\).",
        },
        {
          stepNumber: 3,
          description: "Divide each term by \\(7\\).",
          workingLatex: "7a \\div 7 = a, \\qquad 7b \\div 7 = b",
          explanation:
            "Take \\(7\\) outside the bracket. \\(7a \\div 7 = a\\) and \\(7b \\div 7 = b\\), so the two leftover pieces are \\(a\\) and \\(b\\). They form the bracket \\((a + b)\\), keeping the \\(+\\) sign from the original.",
        },
        {
          stepNumber: 4,
          description: "Write the answer and check.",
          workingLatex: "7a + 7b = 7(a + b)",
          explanation:
            "So \\(7a + 7b = 7(a + b)\\). Expanding back confirms it: \\(7 \\cdot a + 7 \\cdot b = 7a + 7b\\), the original expression. The bracket \\(a + b\\) has no common factor, so it is fully factorised.",
        },
      ],
      finalAnswer: "7a + 7b = 7(a + b)",
      canonicalAnswer: "7(a+b)",
    },
  },

  // ===================== STANDARD (005–018) =====================
  {
    id: "ga08-005",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise fully \\(6x^2 - 4x\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "number-and-letter"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the HCF of the numbers.",
          workingLatex: "6 = 2 \\cdot 3, \\qquad 4 = 2 \\cdot 2 \\;\\Rightarrow\\; \\text{number HCF} = 2",
          explanation:
            "Deal with the numbers and the letters separately, then combine them at the end. The numerical parts are \\(6\\) and \\(4\\). Their only shared factor above \\(1\\) is \\(2\\) (the \\(3\\) in \\(6\\) and the extra \\(2\\) in \\(4\\) are not shared), so the highest common factor of the numbers is \\(2\\).",
        },
        {
          stepNumber: 2,
          description: "Find the highest power of \\(x\\) common to both terms.",
          workingLatex: "6x^2 \\;\\text{has } x^2, \\qquad 4x \\;\\text{has } x^1 \\;\\Rightarrow\\; \\text{letter HCF} = x",
          explanation:
            "The first term has \\(x^2\\) and the second has \\(x^1\\). The common letter factor is the LOWEST power present, which is \\(x^1 = x\\) — that is the most \\(x\\) the smaller term can supply.",
        },
        {
          stepNumber: 3,
          description: "Combine into the overall HCF.",
          workingLatex: "\\text{HCF} = 2 \\cdot x = 2x",
          explanation:
            "Multiply the number HCF \\(2\\) by the letter HCF \\(x\\) to get the full common factor \\(2x\\). This is what goes outside the bracket. Taking out only the \\(2\\) (and leaving the \\(x\\) inside) would not be fully factorised.",
        },
        {
          stepNumber: 4,
          description: "Divide each term by \\(2x\\).",
          workingLatex: "6x^2 \\div 2x = 3x, \\qquad 4x \\div 2x = 2",
          explanation:
            "\\(6x^2 \\div 2x = 3x\\) (divide the numbers \\(6 \\div 2 = 3\\); divide the letters \\(x^2 \\div x = x\\)), and \\(4x \\div 2x = 2\\). A common error is to take out only \\(2\\) and write \\(2(3x^2 - 2x)\\) — that is NOT fully factorised, because the bracket still hides a common \\(x\\).",
        },
        {
          stepNumber: 5,
          description: "Write the answer and verify by expanding.",
          workingLatex: "6x^2 - 4x = 2x(3x - 2)",
          explanation:
            "So \\(6x^2 - 4x = 2x(3x - 2)\\). Check: \\(2x \\cdot 3x = 6x^2\\) and \\(2x \\cdot (-2) = -4x\\), giving \\(6x^2 - 4x\\). The bracket \\(3x - 2\\) has no common factor, so it is fully factorised.",
        },
      ],
      finalAnswer: "6x^2 - 4x = 2x(3x - 2)",
      canonicalAnswer: "2x(3x-2)",
    },
  },
  {
    id: "ga08-006",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise fully \\(8ab + 12a\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "several-variables"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the HCF of the numbers.",
          workingLatex: "8 = 4 \\cdot 2, \\qquad 12 = 4 \\cdot 3 \\;\\Rightarrow\\; \\text{number HCF} = 4",
          explanation:
            "The numerical parts are \\(8\\) and \\(12\\). The largest number dividing into both is \\(4\\) (since \\(8 = 4 \\cdot 2\\) and \\(12 = 4 \\cdot 3\\)), so the number HCF is \\(4\\).",
        },
        {
          stepNumber: 2,
          description: "Find the common letters.",
          workingLatex: "8ab \\;\\text{has } a, b, \\qquad 12a \\;\\text{has } a \\;\\Rightarrow\\; \\text{letter HCF} = a",
          explanation:
            "The first term has both \\(a\\) and \\(b\\); the second term has only \\(a\\). A letter can only be taken out if it appears in EVERY term, so \\(b\\) cannot come out — it is missing from \\(12a\\). Only \\(a\\) is common. Multiplying the number HCF by the letter HCF, the overall HCF is \\(4 \\cdot a = 4a\\).",
        },
        {
          stepNumber: 3,
          description: "Divide each term by \\(4a\\).",
          workingLatex: "8ab \\div 4a = 2b, \\qquad 12a \\div 4a = 3",
          explanation:
            "Take \\(4a\\) outside. For the first term: numbers \\(8 \\div 4 = 2\\) and letters \\(ab \\div a = b\\), giving \\(2b\\). For the second: \\(12a \\div 4a = 3\\) (the \\(a\\)s cancel). These two results form the bracket \\(2b + 3\\).",
        },
        {
          stepNumber: 4,
          description: "Write the answer and check.",
          workingLatex: "8ab + 12a = 4a(2b + 3)",
          explanation:
            "So \\(8ab + 12a = 4a(2b + 3)\\). Expand to verify: \\(4a \\cdot 2b = 8ab\\) and \\(4a \\cdot 3 = 12a\\), matching the original. The bracket \\(2b + 3\\) shares no further factor, so this is fully factorised.",
        },
      ],
      finalAnswer: "8ab + 12a = 4a(2b + 3)",
      canonicalAnswer: "4a(2b+3)",
    },
  },
  {
    id: "ga08-007",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise fully \\(9p^2 + 6p\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "number-and-letter"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the number HCF.",
          workingLatex: "9 = 3 \\cdot 3, \\qquad 6 = 3 \\cdot 2 \\;\\Rightarrow\\; \\text{number HCF} = 3",
          explanation:
            "The numbers are \\(9\\) and \\(6\\). Both divide by \\(3\\) and nothing larger divides both, so their highest common factor is \\(3\\).",
        },
        {
          stepNumber: 2,
          description: "Find the letter HCF.",
          workingLatex: "9p^2 \\;\\text{has } p^2, \\qquad 6p \\;\\text{has } p^1 \\;\\Rightarrow\\; \\text{letter HCF} = p",
          explanation:
            "Both terms contain \\(p\\); the powers are \\(2\\) and \\(1\\), and the lowest present is \\(p^1 = p\\). Combining the number HCF \\(3\\) with the letter HCF \\(p\\), the overall HCF is \\(3p\\).",
        },
        {
          stepNumber: 3,
          description: "Divide each term by \\(3p\\).",
          workingLatex: "9p^2 \\div 3p = 3p, \\qquad 6p \\div 3p = 2",
          explanation:
            "First term: numbers \\(9 \\div 3 = 3\\) and letters \\(p^2 \\div p = p\\), giving \\(3p\\). Second term: \\(6p \\div 3p = 2\\) (the \\(p\\)s cancel). These form the bracket \\(3p + 2\\).",
        },
        {
          stepNumber: 4,
          description: "Write the answer and check.",
          workingLatex: "9p^2 + 6p = 3p(3p + 2)",
          explanation:
            "So \\(9p^2 + 6p = 3p(3p + 2)\\). Check: \\(3p \\cdot 3p = 9p^2\\) and \\(3p \\cdot 2 = 6p\\). Correct. Note the inside still contains \\(3p\\) — that is fine; what matters is that \\(3p + 2\\) has no factor common to BOTH its terms.",
        },
      ],
      finalAnswer: "9p^2 + 6p = 3p(3p + 2)",
      canonicalAnswer: "3p(3p+2)",
    },
  },
  {
    id: "ga08-008",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise fully \\(15x^3 + 10x^2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "powers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the number HCF.",
          workingLatex: "15 = 5 \\cdot 3, \\qquad 10 = 5 \\cdot 2 \\;\\Rightarrow\\; \\text{number HCF} = 5",
          explanation:
            "The numbers \\(15\\) and \\(10\\) both divide by \\(5\\), and nothing larger divides both, so they share a highest common factor of \\(5\\).",
        },
        {
          stepNumber: 2,
          description: "Find the highest common power of \\(x\\).",
          workingLatex: "x^3 \\;\\text{and}\\; x^2 \\;\\Rightarrow\\; \\text{lowest power} = x^2",
          explanation:
            "The powers of \\(x\\) are \\(3\\) and \\(2\\). The common factor is the LOWEST power, \\(x^2\\), since that is the most \\(x\\) the smaller term can give. Combining with the number, the overall HCF is \\(5x^2\\). Taking out only \\(x\\) would leave a common \\(x\\) inside, so it would not be fully factorised.",
        },
        {
          stepNumber: 3,
          description: "Divide each term by \\(5x^2\\).",
          workingLatex: "15x^3 \\div 5x^2 = 3x, \\qquad 10x^2 \\div 5x^2 = 2",
          explanation:
            "First term: numbers \\(15 \\div 5 = 3\\) and letters \\(x^3 \\div x^2 = x\\), giving \\(3x\\). Second term: \\(10x^2 \\div 5x^2 = 2\\) (everything cancels except the number). The bracket is \\(3x + 2\\).",
        },
        {
          stepNumber: 4,
          description: "Write the answer and check.",
          workingLatex: "15x^3 + 10x^2 = 5x^2(3x + 2)",
          explanation:
            "So \\(15x^3 + 10x^2 = 5x^2(3x + 2)\\). Check: \\(5x^2 \\cdot 3x = 15x^3\\) and \\(5x^2 \\cdot 2 = 10x^2\\). Correct.",
        },
      ],
      finalAnswer: "15x^3 + 10x^2 = 5x^2(3x + 2)",
      canonicalAnswer: "5x^2(3x+2)",
    },
  },
  {
    id: "ga08-009",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise fully \\(14mn - 21n\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "several-variables"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the number HCF.",
          workingLatex: "14 = 7 \\cdot 2, \\qquad 21 = 7 \\cdot 3 \\;\\Rightarrow\\; \\text{number HCF} = 7",
          explanation:
            "The numbers \\(14\\) and \\(21\\) both divide by \\(7\\), and nothing larger divides both, so their highest common factor is \\(7\\).",
        },
        {
          stepNumber: 2,
          description: "Find the common letters.",
          workingLatex: "14mn \\;\\text{has } m, n, \\qquad 21n \\;\\text{has } n \\;\\Rightarrow\\; \\text{letter HCF} = n",
          explanation:
            "The first term has \\(m\\) and \\(n\\); the second has only \\(n\\). Since \\(m\\) is missing from the second term, it cannot be factored out. Only \\(n\\) is common to both, so the overall HCF is the number times the letter: \\(7 \\cdot n = 7n\\).",
        },
        {
          stepNumber: 3,
          description: "Divide each term by \\(7n\\).",
          workingLatex: "14mn \\div 7n = 2m, \\qquad 21n \\div 7n = 3",
          explanation:
            "First term: numbers \\(14 \\div 7 = 2\\) and letters \\(mn \\div n = m\\), giving \\(2m\\). Second term: \\(21n \\div 7n = 3\\) (the \\(n\\)s cancel). Keep the minus sign from the original: the bracket is \\(2m - 3\\).",
        },
        {
          stepNumber: 4,
          description: "State the answer and check.",
          workingLatex: "14mn - 21n = 7n(2m - 3)",
          explanation:
            "So \\(14mn - 21n = 7n(2m - 3)\\). Check: \\(7n \\cdot 2m = 14mn\\) and \\(7n \\cdot (-3) = -21n\\). Correct.",
        },
      ],
      finalAnswer: "14mn - 21n = 7n(2m - 3)",
      canonicalAnswer: "7n(2m-3)",
    },
  },
  {
    id: "ga08-010",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise fully \\(20a^2b + 15ab^2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "several-variables"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the number HCF.",
          workingLatex: "20 = 5 \\cdot 4, \\qquad 15 = 5 \\cdot 3 \\;\\Rightarrow\\; \\text{number HCF} = 5",
          explanation:
            "The numbers \\(20\\) and \\(15\\) both divide by \\(5\\), and nothing larger divides both, so their highest common factor is \\(5\\).",
        },
        {
          stepNumber: 2,
          description: "Find the common power of each letter.",
          workingLatex: "a^2, a^1 \\;\\Rightarrow\\; a; \\qquad b^1, b^2 \\;\\Rightarrow\\; b",
          explanation:
            "Treat each letter separately. For \\(a\\): the powers are \\(2\\) and \\(1\\), so the common factor is the lower, \\(a^1 = a\\). For \\(b\\): the powers are \\(1\\) and \\(2\\), so the common factor is \\(b^1 = b\\). Both letters appear in both terms, so both come out. Together with the number, the overall HCF is \\(5ab\\).",
        },
        {
          stepNumber: 3,
          description: "Divide each term by \\(5ab\\).",
          workingLatex: "20a^2b \\div 5ab = 4a, \\qquad 15ab^2 \\div 5ab = 3b",
          explanation:
            "First term: numbers \\(20 \\div 5 = 4\\) and letters \\(a^2b \\div ab = a\\), giving \\(4a\\). Second term: numbers \\(15 \\div 5 = 3\\) and letters \\(ab^2 \\div ab = b\\), giving \\(3b\\). The bracket is \\(4a + 3b\\), which shares no further factor.",
        },
        {
          stepNumber: 4,
          description: "Write the answer and verify.",
          workingLatex: "20a^2b + 15ab^2 = 5ab(4a + 3b)",
          explanation:
            "So \\(20a^2b + 15ab^2 = 5ab(4a + 3b)\\). Check: \\(5ab \\cdot 4a = 20a^2b\\) and \\(5ab \\cdot 3b = 15ab^2\\). Correct.",
        },
      ],
      finalAnswer: "20a^2b + 15ab^2 = 5ab(4a + 3b)",
      canonicalAnswer: "5ab(4a+3b)",
    },
  },
  {
    id: "ga08-011",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise fully \\(12x^3 - 18x^2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "powers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the number HCF.",
          workingLatex: "12 = 6 \\cdot 2, \\qquad 18 = 6 \\cdot 3 \\;\\Rightarrow\\; \\text{number HCF} = 6",
          explanation:
            "The numbers \\(12\\) and \\(18\\) both divide by \\(6\\) (\\(12 = 6 \\cdot 2\\), \\(18 = 6 \\cdot 3\\)), and nothing larger divides both, so their highest common factor is \\(6\\). Watch out: it is easy to stop at \\(2\\) or \\(3\\), but \\(6\\) is larger.",
        },
        {
          stepNumber: 2,
          description: "Find the common power of \\(x\\).",
          workingLatex: "x^3, x^2 \\;\\Rightarrow\\; \\text{lowest power} = x^2",
          explanation:
            "The powers of \\(x\\) are \\(3\\) and \\(2\\); the common factor is the lower one, \\(x^2\\). Combined with the number HCF \\(6\\), the overall HCF is \\(6x^2\\).",
        },
        {
          stepNumber: 3,
          description: "Divide each term by \\(6x^2\\).",
          workingLatex: "12x^3 \\div 6x^2 = 2x, \\qquad 18x^2 \\div 6x^2 = 3",
          explanation:
            "First term: numbers \\(12 \\div 6 = 2\\) and letters \\(x^3 \\div x^2 = x\\), giving \\(2x\\). Second term: \\(18x^2 \\div 6x^2 = 3\\) (the \\(x^2\\) cancels). Keeping the minus sign from the original, the bracket is \\(2x - 3\\).",
        },
        {
          stepNumber: 4,
          description: "Write the answer and check.",
          workingLatex: "12x^3 - 18x^2 = 6x^2(2x - 3)",
          explanation:
            "So \\(12x^3 - 18x^2 = 6x^2(2x - 3)\\). Check: \\(6x^2 \\cdot 2x = 12x^3\\) and \\(6x^2 \\cdot (-3) = -18x^2\\). Correct.",
        },
      ],
      finalAnswer: "12x^3 - 18x^2 = 6x^2(2x - 3)",
      canonicalAnswer: "6x^2(2x-3)",
    },
  },
  {
    id: "ga08-012",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise fully \\(4x + 8y - 12\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "three-terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the HCF of all three numbers.",
          workingLatex: "4 = 4 \\cdot 1, \\quad 8 = 4 \\cdot 2, \\quad 12 = 4 \\cdot 3 \\;\\Rightarrow\\; \\text{HCF} = 4",
          explanation:
            "With three terms, the HCF must divide ALL of them, not just two. The numbers are \\(4\\), \\(8\\) and \\(12\\); the largest number dividing all three is \\(4\\).",
        },
        {
          stepNumber: 2,
          description: "Check whether any letter is common to all three terms.",
          workingLatex: "4x \\;\\text{has } x, \\quad 8y \\;\\text{has } y, \\quad 12 \\;\\text{has no letter} \\;\\Rightarrow\\; \\text{no common letter}",
          explanation:
            "The letters \\(x\\) and \\(y\\) each appear in only one term, and the third term has no letter at all. Since no letter sits in every term, none can come out — only the number \\(4\\) is the common factor.",
        },
        {
          stepNumber: 3,
          description: "Divide each term by \\(4\\).",
          workingLatex: "4x \\div 4 = x, \\qquad 8y \\div 4 = 2y, \\qquad 12 \\div 4 = 3",
          explanation:
            "Divide all three terms by \\(4\\): \\(4x \\div 4 = x\\) (note the \\(1\\) coefficient is left implicit), \\(8y \\div 4 = 2y\\), and \\(12 \\div 4 = 3\\). The bracket now has three terms, with the \\(+\\) and \\(-\\) signs carried straight through from the original.",
        },
        {
          stepNumber: 4,
          description: "Write the answer and check.",
          workingLatex: "4x + 8y - 12 = 4(x + 2y - 3)",
          explanation:
            "So \\(4x + 8y - 12 = 4(x + 2y - 3)\\). Check by expanding all three: \\(4 \\cdot x = 4x\\), \\(4 \\cdot 2y = 8y\\), \\(4 \\cdot (-3) = -12\\). All match, and the bracket \\(x + 2y - 3\\) has no factor common to all three terms.",
        },
      ],
      finalAnswer: "4x + 8y - 12 = 4(x + 2y - 3)",
      canonicalAnswer: "4(x+2y-3)",
    },
  },
  {
    id: "ga08-013",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise fully \\(x^3 + x^2 + x\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "three-terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Check the numbers.",
          workingLatex: "1, \\; 1, \\; 1 \\;\\Rightarrow\\; \\text{number HCF} = 1",
          explanation:
            "Every term has an unwritten coefficient of \\(1\\), so there is no number to take out (the number HCF is \\(1\\)). The common factor must come entirely from the letters.",
        },
        {
          stepNumber: 2,
          description: "Find the lowest power of \\(x\\).",
          workingLatex: "x^3, \\; x^2, \\; x^1 \\;\\Rightarrow\\; \\text{lowest power} = x",
          explanation:
            "The powers are \\(3\\), \\(2\\) and \\(1\\). The common factor is the lowest power present in every term, \\(x^1 = x\\). Since the number HCF is \\(1\\), the HCF of all three terms is just \\(x\\).",
        },
        {
          stepNumber: 3,
          description: "Divide each term by \\(x\\).",
          workingLatex: "x^3 \\div x = x^2, \\quad x^2 \\div x = x, \\quad x \\div x = 1",
          explanation:
            "Subtract one from each power: \\(x^3 \\div x = x^2\\), \\(x^2 \\div x = x\\), and \\(x \\div x = 1\\). The last division gives \\(1\\), which must NOT be dropped — leaving the bracket as \\((x^2 + x)\\) loses a term and is a classic slip. The bracket is \\(x^2 + x + 1\\).",
        },
        {
          stepNumber: 4,
          description: "Write the answer and check.",
          workingLatex: "x^3 + x^2 + x = x(x^2 + x + 1)",
          explanation:
            "So \\(x^3 + x^2 + x = x(x^2 + x + 1)\\). Check: \\(x \\cdot x^2 = x^3\\), \\(x \\cdot x = x^2\\), \\(x \\cdot 1 = x\\). Correct.",
        },
      ],
      finalAnswer: "x^3 + x^2 + x = x(x^2 + x + 1)",
      canonicalAnswer: "x(x^2+x+1)",
    },
  },
  {
    id: "ga08-014",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise fully \\(24x^2y - 16xy^2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "several-variables"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the number HCF.",
          workingLatex: "24 = 8 \\cdot 3, \\qquad 16 = 8 \\cdot 2 \\;\\Rightarrow\\; \\text{number HCF} = 8",
          explanation:
            "The numbers \\(24\\) and \\(16\\) share factors \\(2\\), \\(4\\) and \\(8\\); the highest is \\(8\\). Be careful not to stop at \\(4\\) — always push for the largest factor that divides both.",
        },
        {
          stepNumber: 2,
          description: "Find the common power of each letter.",
          workingLatex: "x^2, x^1 \\Rightarrow x; \\qquad y^1, y^2 \\Rightarrow y",
          explanation:
            "Take each letter in turn. For \\(x\\): powers \\(2\\) and \\(1\\), so the lowest gives common factor \\(x\\). For \\(y\\): powers \\(1\\) and \\(2\\), so the lowest gives common factor \\(y\\). Both letters appear in both terms, so both come out. Together with the number, the overall HCF is \\(8xy\\).",
        },
        {
          stepNumber: 3,
          description: "Divide each term by \\(8xy\\).",
          workingLatex: "24x^2y \\div 8xy = 3x, \\qquad 16xy^2 \\div 8xy = 2y",
          explanation:
            "First term: numbers \\(24 \\div 8 = 3\\) and letters \\(x^2y \\div xy = x\\), giving \\(3x\\). Second term: numbers \\(16 \\div 8 = 2\\) and letters \\(xy^2 \\div xy = y\\), giving \\(2y\\). Keeping the minus sign, the bracket is \\(3x - 2y\\).",
        },
        {
          stepNumber: 4,
          description: "Write the answer and check.",
          workingLatex: "24x^2y - 16xy^2 = 8xy(3x - 2y)",
          explanation:
            "So \\(24x^2y - 16xy^2 = 8xy(3x - 2y)\\). Check: \\(8xy \\cdot 3x = 24x^2y\\) and \\(8xy \\cdot (-2y) = -16xy^2\\). Correct.",
        },
      ],
      finalAnswer: "24x^2y - 16xy^2 = 8xy(3x - 2y)",
      canonicalAnswer: "8xy(3x-2y)",
    },
  },
  {
    id: "ga08-015",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(\\pi r^2 + 2\\pi r\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "formula-context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write each term as a product of factors.",
          workingLatex: "\\pi r^2 = \\pi \\cdot r \\cdot r, \\qquad 2\\pi r = 2 \\cdot \\pi \\cdot r",
          explanation:
            "Treat \\(\\pi\\) like any other constant factor that can be taken out. Splitting each term into its factors makes the shared pieces visible: both terms contain a \\(\\pi\\) and at least one \\(r\\).",
        },
        {
          stepNumber: 2,
          description: "Identify the common factors, including \\(\\pi\\).",
          workingLatex: "\\pi \\;\\text{common}, \\;\\; r \\;\\text{common (lowest power)} \\;\\Rightarrow\\; \\text{HCF} = \\pi r",
          explanation:
            "The numbers are \\(1\\) and \\(2\\), with HCF \\(1\\), so there is nothing numerical to take out. The constant \\(\\pi\\) is in both terms, so it comes out. For the letter \\(r\\): the powers are \\(2\\) and \\(1\\), so \\(r\\) is common at its lowest power. Putting these together, the HCF is \\(\\pi r\\).",
        },
        {
          stepNumber: 3,
          description: "Divide each term by \\(\\pi r\\).",
          workingLatex: "\\pi r^2 \\div \\pi r = r, \\qquad 2\\pi r \\div \\pi r = 2",
          explanation:
            "First term: the \\(\\pi\\) cancels and \\(r^2 \\div r = r\\), leaving \\(r\\). Second term: \\(2\\pi r \\div \\pi r = 2\\) (the \\(\\pi\\) and \\(r\\) cancel, leaving the \\(2\\)). The bracket is \\((r + 2)\\).",
        },
        {
          stepNumber: 4,
          description: "Write the answer and check.",
          workingLatex: "\\pi r^2 + 2\\pi r = \\pi r(r + 2)",
          explanation:
            "So \\(\\pi r^2 + 2\\pi r = \\pi r(r + 2)\\). Check: \\(\\pi r \\cdot r = \\pi r^2\\) and \\(\\pi r \\cdot 2 = 2\\pi r\\). Correct — this is the kind of factorising used when simplifying surface-area formulae.",
        },
      ],
      finalAnswer: "\\pi r^2 + 2\\pi r = \\pi r(r + 2)",
      canonicalAnswer: "pi*r*(r+2)",
    },
  },
  {
    id: "ga08-016",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise fully \\(18cd + 30c\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "several-variables"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the number HCF.",
          workingLatex: "18 = 6 \\cdot 3, \\qquad 30 = 6 \\cdot 5 \\;\\Rightarrow\\; \\text{number HCF} = 6",
          explanation:
            "The numbers \\(18\\) and \\(30\\) share \\(2\\), \\(3\\) and \\(6\\); the highest is \\(6\\). Don't stop at \\(2\\) or \\(3\\) — keep going to the largest factor common to both.",
        },
        {
          stepNumber: 2,
          description: "Find the common letters.",
          workingLatex: "18cd \\;\\text{has } c, d, \\qquad 30c \\;\\text{has } c \\;\\Rightarrow\\; \\text{letter HCF} = c",
          explanation:
            "The first term has \\(c\\) and \\(d\\); the second has only \\(c\\). Since \\(d\\) is absent from the second term, it cannot come out — only \\(c\\) is common. Multiplying by the number HCF, the overall HCF is \\(6c\\).",
        },
        {
          stepNumber: 3,
          description: "Divide each term by \\(6c\\).",
          workingLatex: "18cd \\div 6c = 3d, \\qquad 30c \\div 6c = 5",
          explanation:
            "First term: numbers \\(18 \\div 6 = 3\\) and letters \\(cd \\div c = d\\), giving \\(3d\\). Second term: \\(30c \\div 6c = 5\\) (the \\(c\\)s cancel). The bracket is \\(3d + 5\\), which shares no further factor.",
        },
        {
          stepNumber: 4,
          description: "Write the answer and check.",
          workingLatex: "18cd + 30c = 6c(3d + 5)",
          explanation:
            "So \\(18cd + 30c = 6c(3d + 5)\\). Check: \\(6c \\cdot 3d = 18cd\\) and \\(6c \\cdot 5 = 30c\\). Correct.",
        },
      ],
      finalAnswer: "18cd + 30c = 6c(3d + 5)",
      canonicalAnswer: "6c(3d+5)",
    },
  },
  {
    id: "ga08-017",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise fully \\(2x^2 + 6x + 8\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "three-terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the HCF of all three numbers.",
          workingLatex: "2 = 2 \\cdot 1, \\quad 6 = 2 \\cdot 3, \\quad 8 = 2 \\cdot 4 \\;\\Rightarrow\\; \\text{HCF} = 2",
          explanation:
            "The numbers are \\(2\\), \\(6\\) and \\(8\\); the largest number dividing all three is \\(2\\). The HCF must divide every term, so check all three, not just the first two.",
        },
        {
          stepNumber: 2,
          description: "Check whether \\(x\\) is common to all three terms.",
          workingLatex: "2x^2 \\;\\text{has } x, \\quad 6x \\;\\text{has } x, \\quad 8 \\;\\text{has no } x \\;\\Rightarrow\\; \\text{no common } x",
          explanation:
            "The letter \\(x\\) appears in the first two terms but NOT in the constant term \\(8\\). Because it is missing from one term, \\(x\\) is not common to all three and cannot be taken out. The HCF is just the number \\(2\\).",
        },
        {
          stepNumber: 3,
          description: "Divide each term by \\(2\\).",
          workingLatex: "2x^2 \\div 2 = x^2, \\qquad 6x \\div 2 = 3x, \\qquad 8 \\div 2 = 4",
          explanation:
            "Divide all three terms by \\(2\\): \\(2x^2 \\div 2 = x^2\\) (only the number halves, the \\(x^2\\) is untouched), \\(6x \\div 2 = 3x\\), and \\(8 \\div 2 = 4\\). The bracket is \\(x^2 + 3x + 4\\).",
        },
        {
          stepNumber: 4,
          description: "Write the answer and check.",
          workingLatex: "2x^2 + 6x + 8 = 2(x^2 + 3x + 4)",
          explanation:
            "So \\(2x^2 + 6x + 8 = 2(x^2 + 3x + 4)\\). Check: \\(2 \\cdot x^2 = 2x^2\\), \\(2 \\cdot 3x = 6x\\), \\(2 \\cdot 4 = 8\\). Correct. (The bracket \\(x^2 + 3x + 4\\) does not factorise into two further brackets over the integers, so this is the complete common-factor answer.)",
        },
      ],
      finalAnswer: "2x^2 + 6x + 8 = 2(x^2 + 3x + 4)",
      canonicalAnswer: "2(x^2+3x+4)",
    },
  },
  {
    id: "ga08-018",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise fully \\(-3x - 6\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "negative-factor"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the size of the common factor.",
          workingLatex: "3 = 3 \\cdot 1, \\quad 6 = 3 \\cdot 2 \\;\\Rightarrow\\; \\text{number HCF} = 3; \\;\\; \\text{no common letter}",
          explanation:
            "Ignore the signs for a moment and look at the sizes \\(3\\) and \\(6\\); their highest common factor is \\(3\\). The second term has no letter, so there is no common letter. The magnitude of the common factor is \\(3\\).",
        },
        {
          stepNumber: 2,
          description: "Decide the sign of the factor.",
          workingLatex: "-3x - 6 \\;\\Rightarrow\\; \\text{both terms negative; take out } -3",
          explanation:
            "Because BOTH terms are negative, it is tidiest to take out \\(-3\\) so that the bracket becomes positive. You could take out \\(+3\\) instead, but then the bracket would be \\(-(x + 2)\\)-style; factoring the negative out is the standard neat form.",
        },
        {
          stepNumber: 3,
          description: "Divide each term by \\(-3\\), watching the signs.",
          workingLatex: "-3x \\div (-3) = x, \\qquad -6 \\div (-3) = 2",
          explanation:
            "Dividing a negative by a negative gives a positive. First term: \\(-3x \\div (-3) = +x\\). Second term: \\(-6 \\div (-3) = +2\\). This is exactly where students slip — a negative divided by a negative is positive, so both bracket terms turn positive even though the original terms were both negative.",
        },
        {
          stepNumber: 4,
          description: "Write the answer and check.",
          workingLatex: "-3x - 6 = -3(x + 2)",
          explanation:
            "So \\(-3x - 6 = -3(x + 2)\\). Check by expanding: \\(-3 \\cdot x = -3x\\) and \\(-3 \\cdot 2 = -6\\), giving \\(-3x - 6\\). Correct.",
        },
      ],
      finalAnswer: "-3x - 6 = -3(x + 2)",
      canonicalAnswer: "-3(x+2)",
    },
  },

  // ===================== CHALLENGE (019–030) =====================
  {
    id: "ga08-019",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise fully \\(36x^4y^2 - 24x^3y^3 + 60x^2y\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "powers", "several-variables"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the HCF of the three numbers.",
          workingLatex: "36 = 12 \\cdot 3, \\quad 24 = 12 \\cdot 2, \\quad 60 = 12 \\cdot 5 \\;\\Rightarrow\\; \\text{HCF} = 12",
          explanation:
            "List the numbers: \\(36\\), \\(24\\), \\(60\\). The factor must divide all three. \\(12\\) does: \\(36 = 12 \\cdot 3\\), \\(24 = 12 \\cdot 2\\), \\(60 = 12 \\cdot 5\\). Nothing larger divides all three, so the number HCF is \\(12\\).",
        },
        {
          stepNumber: 2,
          description: "Find the lowest power of \\(x\\).",
          workingLatex: "x^4, \\; x^3, \\; x^2 \\;\\Rightarrow\\; \\text{lowest} = x^2",
          explanation:
            "The powers of \\(x\\) are \\(4\\), \\(3\\) and \\(2\\). The common factor uses the LOWEST power, \\(x^2\\), since that is the most \\(x\\) every term can supply.",
        },
        {
          stepNumber: 3,
          description: "Find the lowest power of \\(y\\).",
          workingLatex: "y^2, \\; y^3, \\; y^1 \\;\\Rightarrow\\; \\text{lowest} = y",
          explanation:
            "The powers of \\(y\\) are \\(2\\), \\(3\\) and \\(1\\). The lowest is \\(y^1 = y\\). Combining the number and both letters, the overall HCF is \\(12x^2y\\).",
        },
        {
          stepNumber: 4,
          description: "Divide each term by \\(12x^2y\\).",
          workingLatex: "36x^4y^2 \\div 12x^2y = 3x^2y, \\quad 24x^3y^3 \\div 12x^2y = 2xy^2, \\quad 60x^2y \\div 12x^2y = 5",
          explanation:
            "Go term by term, dividing numbers and subtracting powers of each letter. First: \\(36 \\div 12 = 3\\), \\(x^4 \\div x^2 = x^2\\), \\(y^2 \\div y = y\\), giving \\(3x^2y\\). Second: \\(24 \\div 12 = 2\\), \\(x^3 \\div x^2 = x\\), \\(y^3 \\div y = y^2\\), giving \\(2xy^2\\). Third: \\(60 \\div 12 = 5\\) and all letters cancel, giving \\(5\\). The last term reducing to a plain \\(5\\) confirms \\(x^2y\\) really is the highest common letter part.",
        },
        {
          stepNumber: 5,
          description: "Write the answer and verify.",
          workingLatex: "36x^4y^2 - 24x^3y^3 + 60x^2y = 12x^2y(3x^2y - 2xy^2 + 5)",
          explanation:
            "So the fully factorised form is \\(12x^2y(3x^2y - 2xy^2 + 5)\\), carrying the signs \\(+, -, +\\) through. Check: \\(12x^2y \\cdot 3x^2y = 36x^4y^2\\), \\(12x^2y \\cdot (-2xy^2) = -24x^3y^3\\), \\(12x^2y \\cdot 5 = 60x^2y\\). All match.",
        },
      ],
      finalAnswer: "36x^4y^2 - 24x^3y^3 + 60x^2y = 12x^2y(3x^2y - 2xy^2 + 5)",
      canonicalAnswer: "12x^2y(3x^2y-2xy^2+5)",
    },
  },
  {
    id: "ga08-020",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise fully \\(-8x^2 + 12x\\), taking out a negative common factor.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "negative-factor"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the magnitude of the HCF.",
          workingLatex: "8 = 4 \\cdot 2, \\quad 12 = 4 \\cdot 3 \\;\\Rightarrow\\; \\text{number HCF} = 4; \\quad x^2, x \\Rightarrow x",
          explanation:
            "Ignore the signs for the moment and work out the size of the common factor first. The numbers \\(8\\) and \\(12\\) have HCF \\(4\\), and the powers of \\(x\\) are \\(2\\) and \\(1\\) so the lowest is \\(x\\). So the magnitude of the common factor is \\(4x\\); the sign comes next.",
        },
        {
          stepNumber: 2,
          description: "Choose the sign of the factor.",
          workingLatex: "\\text{leading term } -8x^2 < 0 \\;\\Rightarrow\\; \\text{take out } -4x",
          explanation:
            "Because the leading (first) term \\(-8x^2\\) is negative, the question asks us to take out a NEGATIVE factor, \\(-4x\\). This makes the leading term inside the bracket positive, which is the conventional tidy form.",
        },
        {
          stepNumber: 3,
          description: "Divide the first term by \\(-4x\\).",
          workingLatex: "-8x^2 \\div (-4x) = 2x",
          explanation:
            "\\(-8x^2 \\div (-4x)\\): a negative divided by a negative is positive, and \\(8 \\div 4 = 2\\), \\(x^2 \\div x = x\\), giving \\(+2x\\). This becomes the first term inside the bracket.",
        },
        {
          stepNumber: 4,
          description: "Divide the second term by \\(-4x\\), watching the sign flip.",
          workingLatex: "12x \\div (-4x) = -3",
          explanation:
            "\\(12x \\div (-4x)\\): a positive divided by a negative is negative, and \\(12 \\div 4 = 3\\), \\(x \\div x = 1\\), giving \\(-3\\). Notice the SIGN of this term flips because we divided by a negative — this is the step where slips happen.",
        },
        {
          stepNumber: 5,
          description: "Write the answer and check.",
          workingLatex: "-8x^2 + 12x = -4x(2x - 3)",
          explanation:
            "So \\(-8x^2 + 12x = -4x(2x - 3)\\). Check: \\(-4x \\cdot 2x = -8x^2\\) and \\(-4x \\cdot (-3) = +12x\\), giving \\(-8x^2 + 12x\\). Correct.",
        },
      ],
      finalAnswer: "-8x^2 + 12x = -4x(2x - 3)",
      canonicalAnswer: "-4x(2x-3)",
    },
  },
  {
    id: "ga08-021",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise fully \\(5x(x - 2) + 3(x - 2)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "common-bracket"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Spot the repeated bracket.",
          workingLatex: "5x\\,\\underline{(x - 2)} + 3\\,\\underline{(x - 2)}",
          explanation:
            "Here the common factor is not a number or a single letter — it is the whole bracket \\((x - 2)\\), which appears in both terms. A bracket can be a common factor just like a letter can, so treat \\((x - 2)\\) as a single block.",
        },
        {
          stepNumber: 2,
          description: "Take out \\((x - 2)\\) and see what is left in each term.",
          workingLatex: "5x(x-2) \\div (x-2) = 5x, \\qquad 3(x-2) \\div (x-2) = 3",
          explanation:
            "Divide each term by the common bracket \\((x - 2)\\), just as you would cancel a common letter. The first term \\(5x(x - 2)\\) leaves \\(5x\\); the second term \\(3(x - 2)\\) leaves \\(3\\). These two leftover pieces form the new bracket \\((5x + 3)\\), keeping the \\(+\\) sign between them.",
        },
        {
          stepNumber: 3,
          description: "Write the factorised form.",
          workingLatex: "5x(x - 2) + 3(x - 2) = (x - 2)(5x + 3)",
          explanation:
            "So the expression factorises as \\((x - 2)(5x + 3)\\). The first bracket is the common factor that was taken out; the second bracket holds what was left over from each term.",
        },
        {
          stepNumber: 4,
          description: "Verify by expanding.",
          workingLatex: "(x - 2)(5x + 3) = 5x(x - 2) + 3(x - 2)",
          explanation:
            "Check: \\((x - 2)(5x + 3) = 5x(x - 2) + 3(x - 2)\\), which is exactly the original expression. Correct. This 'factor by grouping' idea is the engine behind quadratic factorising later.",
        },
      ],
      finalAnswer: "5x(x - 2) + 3(x - 2) = (x - 2)(5x + 3)",
      canonicalAnswer: "(x-2)(5x+3)",
    },
  },
  {
    id: "ga08-022",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise fully \\(7(x + 1) - x(x + 1)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "common-bracket"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the common bracket.",
          workingLatex: "7\\,\\underline{(x + 1)} - x\\,\\underline{(x + 1)}",
          explanation:
            "Both terms contain the bracket \\((x + 1)\\), so \\((x + 1)\\) is the common factor. Pay close attention to the minus sign between the two terms — it belongs to the second term, \\(-x(x + 1)\\).",
        },
        {
          stepNumber: 2,
          description: "Take out \\((x + 1)\\) from each term.",
          workingLatex: "7(x+1) \\div (x+1) = 7, \\qquad -x(x+1) \\div (x+1) = -x",
          explanation:
            "Divide each term by the common bracket \\((x + 1)\\). The first term leaves \\(7\\). The second term is \\(-x(x + 1)\\), and dividing leaves \\(-x\\) — the minus sign stays attached to the \\(x\\). Dropping that minus is the easiest mistake to make here.",
        },
        {
          stepNumber: 3,
          description: "Assemble the two factors.",
          workingLatex: "(x + 1)(7 - x)",
          explanation:
            "The common bracket \\((x + 1)\\) is the first factor, and the leftover pieces \\(7\\) and \\(-x\\) form the second bracket \\((7 - x)\\). Order the leftovers as written: \\(7 - x\\).",
        },
        {
          stepNumber: 4,
          description: "Verify by expanding.",
          workingLatex: "7(x + 1) - x(x + 1) = (x + 1)(7 - x)",
          explanation:
            "Check: \\((x + 1) \\cdot 7 = 7(x + 1)\\) and \\((x + 1) \\cdot (-x) = -x(x + 1)\\). Together they give \\(7(x + 1) - x(x + 1)\\) — exactly the original expression. Correct.",
        },
      ],
      finalAnswer: "7(x + 1) - x(x + 1) = (x + 1)(7 - x)",
      canonicalAnswer: "(x+1)(7-x)",
    },
  },
  {
    id: "ga08-023",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise fully \\(6x^3y - 9x^2y^2 + 15x^2y\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "powers", "several-variables"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the number HCF.",
          workingLatex: "6 = 3 \\cdot 2, \\quad 9 = 3 \\cdot 3, \\quad 15 = 3 \\cdot 5 \\;\\Rightarrow\\; \\text{HCF} = 3",
          explanation:
            "The numbers \\(6\\), \\(9\\) and \\(15\\) all divide by \\(3\\), and nothing larger divides all three, so the number HCF is \\(3\\).",
        },
        {
          stepNumber: 2,
          description: "Find the lowest power of \\(x\\).",
          workingLatex: "x^3, \\; x^2, \\; x^2 \\;\\Rightarrow\\; \\text{lowest} = x^2",
          explanation:
            "The powers of \\(x\\) across the three terms are \\(3\\), \\(2\\) and \\(2\\). The common factor uses the lowest, \\(x^2\\).",
        },
        {
          stepNumber: 3,
          description: "Find the lowest power of \\(y\\).",
          workingLatex: "y^1, \\; y^2, \\; y^1 \\;\\Rightarrow\\; \\text{lowest} = y",
          explanation:
            "The powers of \\(y\\) are \\(1\\), \\(2\\) and \\(1\\); the lowest is \\(y^1 = y\\). Combining the number and both letters, the overall HCF is \\(3x^2y\\).",
        },
        {
          stepNumber: 4,
          description: "Divide each term by \\(3x^2y\\).",
          workingLatex: "6x^3y \\div 3x^2y = 2x, \\quad 9x^2y^2 \\div 3x^2y = 3y, \\quad 15x^2y \\div 3x^2y = 5",
          explanation:
            "Go term by term. First: \\(6 \\div 3 = 2\\), \\(x^3 \\div x^2 = x\\), \\(y \\div y = 1\\), giving \\(2x\\). Second: \\(9 \\div 3 = 3\\), \\(x^2 \\div x^2 = 1\\), \\(y^2 \\div y = y\\), giving \\(3y\\). Third: \\(15 \\div 3 = 5\\) and all letters cancel, giving \\(5\\). The signs \\(+, -, +\\) follow the original.",
        },
        {
          stepNumber: 5,
          description: "Write the answer and verify.",
          workingLatex: "6x^3y - 9x^2y^2 + 15x^2y = 3x^2y(2x - 3y + 5)",
          explanation:
            "So the answer is \\(3x^2y(2x - 3y + 5)\\). Check: \\(3x^2y \\cdot 2x = 6x^3y\\), \\(3x^2y \\cdot (-3y) = -9x^2y^2\\), \\(3x^2y \\cdot 5 = 15x^2y\\). All correct.",
        },
      ],
      finalAnswer: "6x^3y - 9x^2y^2 + 15x^2y = 3x^2y(2x - 3y + 5)",
      canonicalAnswer: "3x^2y(2x-3y+5)",
    },
  },
  {
    id: "ga08-024",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise fully \\(2\\pi r^2 + 2\\pi r h\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "formula-context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write each term as a product of factors.",
          workingLatex: "2\\pi r^2 = 2 \\cdot \\pi \\cdot r \\cdot r, \\qquad 2\\pi r h = 2 \\cdot \\pi \\cdot r \\cdot h",
          explanation:
            "This is the total surface area of a closed cylinder. Splitting each term into its factors makes the shared pieces visible: both terms carry a \\(2\\), a \\(\\pi\\) and at least one \\(r\\).",
        },
        {
          stepNumber: 2,
          description: "Pick out the common factors and form the HCF.",
          workingLatex: "2 \\;\\text{common}, \\; \\pi \\;\\text{common}, \\; r \\;\\text{common} \\;\\Rightarrow\\; \\text{HCF} = 2\\pi r",
          explanation:
            "The numerical part \\(2\\) is common to both terms; the constant \\(\\pi\\) is common; and the letter \\(r\\) is common (powers \\(2\\) and \\(1\\), lowest is \\(r\\)). The letter \\(h\\) appears only in the second term, so it does NOT come out. Putting the common pieces together gives an HCF of \\(2\\pi r\\).",
        },
        {
          stepNumber: 3,
          description: "Divide each term by \\(2\\pi r\\).",
          workingLatex: "2\\pi r^2 \\div 2\\pi r = r, \\qquad 2\\pi r h \\div 2\\pi r = h",
          explanation:
            "First term: the \\(2\\), the \\(\\pi\\) and one \\(r\\) all cancel, and \\(r^2 \\div r = r\\), leaving \\(r\\). Second term: \\(2\\pi r h \\div 2\\pi r = h\\) (everything cancels except the \\(h\\)). The bracket is \\((r + h)\\).",
        },
        {
          stepNumber: 4,
          description: "Write the answer and check.",
          workingLatex: "2\\pi r^2 + 2\\pi r h = 2\\pi r(r + h)",
          explanation:
            "So \\(2\\pi r^2 + 2\\pi r h = 2\\pi r(r + h)\\). Check: \\(2\\pi r \\cdot r = 2\\pi r^2\\) and \\(2\\pi r \\cdot h = 2\\pi r h\\). Correct — this is exactly the standard factorised form of the cylinder surface-area formula.",
        },
      ],
      finalAnswer: "2\\pi r^2 + 2\\pi r h = 2\\pi r(r + h)",
      canonicalAnswer: "2*pi*r*(r+h)",
    },
  },
  {
    id: "ga08-025",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise fully \\(-12a^3 - 18a^2 - 6a\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "negative-factor", "powers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the magnitude of the number HCF.",
          workingLatex: "12 = 6 \\cdot 2, \\quad 18 = 6 \\cdot 3, \\quad 6 = 6 \\cdot 1 \\;\\Rightarrow\\; \\text{HCF} = 6",
          explanation:
            "Ignoring signs, the numbers \\(12\\), \\(18\\) and \\(6\\) all divide by \\(6\\) (and \\(6\\) itself is one of them, so nothing larger works). The number HCF is \\(6\\).",
        },
        {
          stepNumber: 2,
          description: "Find the lowest power of \\(a\\).",
          workingLatex: "a^3, \\; a^2, \\; a^1 \\;\\Rightarrow\\; \\text{lowest} = a",
          explanation:
            "The powers of \\(a\\) are \\(3\\), \\(2\\) and \\(1\\); the lowest present in every term is \\(a^1 = a\\). Combining with the number HCF \\(6\\), the size of the common factor is \\(6a\\) — the sign is decided next.",
        },
        {
          stepNumber: 3,
          description: "Fix the sign of the factor.",
          workingLatex: "\\text{leading term} -12a^3 < 0 \\;\\Rightarrow\\; \\text{take out } -6a",
          explanation:
            "Every term is negative (the leading term \\(-12a^3 < 0\\)), so we take out \\(-6a\\) rather than \\(+6a\\). This flips all three terms inside the bracket to positive, giving the conventional tidy form.",
        },
        {
          stepNumber: 4,
          description: "Divide each term by \\(-6a\\), watching signs.",
          workingLatex: "-12a^3 \\div (-6a) = 2a^2, \\;\\; -18a^2 \\div (-6a) = 3a, \\;\\; -6a \\div (-6a) = 1",
          explanation:
            "Each term is negative and we divide by a negative, so every result is positive: \\(2a^2\\), \\(3a\\) and \\(1\\). Do not lose the final \\(+1\\): \\(-6a \\div (-6a) = 1\\), not \\(0\\). The bracket is \\(2a^2 + 3a + 1\\).",
        },
        {
          stepNumber: 5,
          description: "Write the answer and verify.",
          workingLatex: "-12a^3 - 18a^2 - 6a = -6a(2a^2 + 3a + 1)",
          explanation:
            "So \\(-12a^3 - 18a^2 - 6a = -6a(2a^2 + 3a + 1)\\). Check: \\(-6a \\cdot 2a^2 = -12a^3\\), \\(-6a \\cdot 3a = -18a^2\\), \\(-6a \\cdot 1 = -6a\\). All match.",
        },
      ],
      finalAnswer: "-12a^3 - 18a^2 - 6a = -6a(2a^2 + 3a + 1)",
      canonicalAnswer: "-6a(2a^2+3a+1)",
    },
  },
  {
    id: "ga08-026",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise fully \\(x(x + 4) + 5(x + 4) - 2x(x + 4)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "common-bracket", "three-terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the repeated bracket.",
          workingLatex: "x\\,\\underline{(x+4)} + 5\\,\\underline{(x+4)} - 2x\\,\\underline{(x+4)}",
          explanation:
            "All three terms share the bracket \\((x + 4)\\), so it is the common factor. The coefficients sitting in front of that bracket are \\(x\\), \\(+5\\) and \\(-2x\\) — keep track of their signs.",
        },
        {
          stepNumber: 2,
          description: "Take out \\((x + 4)\\) and collect the coefficients.",
          workingLatex: "(x + 4)\\big(x + 5 - 2x\\big)",
          explanation:
            "Dividing each term by \\((x + 4)\\) leaves just its coefficient: \\(x\\) from the first, \\(+5\\) from the second, \\(-2x\\) from the third. These go inside a single bracket as \\(x + 5 - 2x\\). Keep every sign exactly as it was in the original — the third term keeps its minus.",
        },
        {
          stepNumber: 3,
          description: "Simplify the inside bracket by collecting like terms.",
          workingLatex: "x - 2x + 5 = -x + 5 = 5 - x",
          explanation:
            "Inside, combine the \\(x\\)-terms: \\(x - 2x = -x\\), leaving \\(-x + 5\\), which is neater written as \\(5 - x\\). Always simplify the second bracket fully before stopping.",
        },
        {
          stepNumber: 4,
          description: "Write the answer and verify.",
          workingLatex: "x(x+4) + 5(x+4) - 2x(x+4) = (x + 4)(5 - x)",
          explanation:
            "So the fully simplified factorisation is \\((x + 4)(5 - x)\\). Check by expanding: \\((x + 4)(5 - x) = 5x - x^2 + 20 - 4x = -x^2 + x + 20\\); expanding the original also gives \\(-x^2 + x + 20\\). They match.",
        },
      ],
      finalAnswer: "x(x+4) + 5(x+4) - 2x(x+4) = (x + 4)(5 - x)",
      canonicalAnswer: "(x+4)(5-x)",
    },
  },
  {
    id: "ga08-027",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise fully \\(\\dfrac{1}{2}x^2 + \\dfrac{3}{2}x\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "fractional-coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Treat the common fraction as the numerical factor.",
          workingLatex: "\\frac{1}{2}x^2 = \\frac{1}{2} \\cdot x^2, \\qquad \\frac{3}{2}x = \\frac{1}{2} \\cdot 3x",
          explanation:
            "Both terms have the same denominator \\(2\\), so the cleanest common numerical factor is \\(\\frac{1}{2}\\). Writing each term as \\(\\frac{1}{2}\\) times something shows this: \\(\\frac{1}{2}x^2 = \\frac{1}{2} \\cdot x^2\\) and \\(\\frac{3}{2}x = \\frac{1}{2} \\cdot 3x\\).",
        },
        {
          stepNumber: 2,
          description: "Include the letter to complete the HCF.",
          workingLatex: "x^2, \\; x^1 \\;\\Rightarrow\\; x; \\qquad \\text{HCF} = \\frac{1}{2}x",
          explanation:
            "For the letter, the powers are \\(2\\) and \\(1\\), so the lowest power of \\(x\\) is \\(x\\). Combining the fraction and the letter, the HCF is \\(\\frac{1}{2}x\\).",
        },
        {
          stepNumber: 3,
          description: "Divide each term by \\(\\frac{1}{2}x\\) (multiply by its reciprocal).",
          workingLatex: "\\frac{1}{2}x^2 \\div \\frac{1}{2}x = x, \\qquad \\frac{3}{2}x \\div \\frac{1}{2}x = 3",
          explanation:
            "Dividing by \\(\\frac{1}{2}x\\) is the same as multiplying by its reciprocal \\(\\frac{2}{x}\\). First term: \\(\\frac{1}{2}x^2 \\cdot \\frac{2}{x} = \\frac{2x^2}{2x} = x\\). Second term: \\(\\frac{3}{2}x \\cdot \\frac{2}{x} = \\frac{6x}{2x} = 3\\). The bracket is \\((x + 3)\\).",
        },
        {
          stepNumber: 4,
          description: "Write the answer and check.",
          workingLatex: "\\frac{1}{2}x^2 + \\frac{3}{2}x = \\frac{1}{2}x(x + 3)",
          explanation:
            "So \\(\\frac{1}{2}x^2 + \\frac{3}{2}x = \\frac{1}{2}x(x + 3)\\). Check: \\(\\frac{1}{2}x \\cdot x = \\frac{1}{2}x^2\\) and \\(\\frac{1}{2}x \\cdot 3 = \\frac{3}{2}x\\). Correct.",
        },
      ],
      finalAnswer: "\\frac{1}{2}x^2 + \\frac{3}{2}x = \\frac{1}{2}x(x + 3)",
      canonicalAnswer: "(1/2)x(x+3)",
    },
  },
  {
    id: "ga08-028",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise fully \\(x(x - 3) - (x - 3)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "common-bracket"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "See the hidden coefficient on the second term.",
          workingLatex: "x(x - 3) - (x - 3) = x(x - 3) - 1\\cdot(x - 3)",
          explanation:
            "The second term \\(-(x - 3)\\) has an invisible coefficient of \\(-1\\); rewrite it as \\(-1 \\cdot (x - 3)\\) so the structure is clear. Both terms now visibly share the bracket \\((x - 3)\\), which is the common factor.",
        },
        {
          stepNumber: 2,
          description: "Take out \\((x - 3)\\) from each term.",
          workingLatex: "x(x-3) \\div (x-3) = x, \\qquad -1(x-3) \\div (x-3) = -1",
          explanation:
            "Dividing each term by the common bracket \\((x - 3)\\) leaves \\(x\\) from the first term and \\(-1\\) from the second. Those leftovers form the bracket \\((x - 1)\\). Forgetting the \\(-1\\) — writing just \\((x - 3)(x)\\), as if the second term vanished — is the classic slip here.",
        },
        {
          stepNumber: 3,
          description: "Write the answer and verify.",
          workingLatex: "x(x - 3) - (x - 3) = (x - 3)(x - 1)",
          explanation:
            "So the factorised form is \\((x - 3)(x - 1)\\). Check by expanding: \\((x - 3)(x - 1) = x^2 - x - 3x + 3 = x^2 - 4x + 3\\); expanding the original gives \\(x^2 - 3x - x + 3 = x^2 - 4x + 3\\). They match.",
        },
      ],
      finalAnswer: "x(x - 3) - (x - 3) = (x - 3)(x - 1)",
      canonicalAnswer: "(x-3)(x-1)",
    },
  },
  {
    id: "ga08-029",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise fully \\(10a^2b^3c - 25a^3b^2c^2 + 15a^2b^2c\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "powers", "several-variables"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the number HCF.",
          workingLatex: "10 = 5 \\cdot 2, \\quad 25 = 5 \\cdot 5, \\quad 15 = 5 \\cdot 3 \\;\\Rightarrow\\; \\text{HCF} = 5",
          explanation:
            "The numbers \\(10\\), \\(25\\) and \\(15\\) all divide by \\(5\\), and nothing larger divides all three, so the number HCF is \\(5\\).",
        },
        {
          stepNumber: 2,
          description: "Find the lowest power of \\(a\\).",
          workingLatex: "a^2, \\; a^3, \\; a^2 \\;\\Rightarrow\\; \\text{lowest} = a^2",
          explanation:
            "The powers of \\(a\\) are \\(2\\), \\(3\\) and \\(2\\); the lowest present in every term is \\(a^2\\).",
        },
        {
          stepNumber: 3,
          description: "Find the lowest powers of \\(b\\) and \\(c\\).",
          workingLatex: "b^3, b^2, b^2 \\Rightarrow b^2; \\qquad c^1, c^2, c^1 \\Rightarrow c",
          explanation:
            "For \\(b\\): powers \\(3\\), \\(2\\), \\(2\\), lowest is \\(b^2\\). For \\(c\\): powers \\(1\\), \\(2\\), \\(1\\), lowest is \\(c\\). Combining the number and all three letters, the HCF is \\(5a^2b^2c\\).",
        },
        {
          stepNumber: 4,
          description: "Divide each term by \\(5a^2b^2c\\).",
          workingLatex: "10a^2b^3c \\div 5a^2b^2c = 2b, \\;\\; 25a^3b^2c^2 \\div 5a^2b^2c = 5ac, \\;\\; 15a^2b^2c \\div 5a^2b^2c = 3",
          explanation:
            "Go term by term, subtracting powers of each letter. First: \\(10 \\div 5 = 2\\), the \\(a^2\\) cancels, \\(b^3 \\div b^2 = b\\), the \\(c\\) cancels, giving \\(2b\\). Second: \\(25 \\div 5 = 5\\), \\(a^3 \\div a^2 = a\\), the \\(b^2\\) cancels, \\(c^2 \\div c = c\\), giving \\(5ac\\). Third: \\(15 \\div 5 = 3\\) and every letter cancels, giving \\(3\\). The signs are \\(+, -, +\\).",
        },
        {
          stepNumber: 5,
          description: "Write the answer and verify.",
          workingLatex: "10a^2b^3c - 25a^3b^2c^2 + 15a^2b^2c = 5a^2b^2c(2b - 5ac + 3)",
          explanation:
            "So the answer is \\(5a^2b^2c(2b - 5ac + 3)\\). Check: \\(5a^2b^2c \\cdot 2b = 10a^2b^3c\\), \\(5a^2b^2c \\cdot (-5ac) = -25a^3b^2c^2\\), \\(5a^2b^2c \\cdot 3 = 15a^2b^2c\\). All match.",
        },
      ],
      finalAnswer: "10a^2b^3c - 25a^3b^2c^2 + 15a^2b^2c = 5a^2b^2c(2b - 5ac + 3)",
      canonicalAnswer: "5a^2b^2c(2b-5ac+3)",
    },
  },
  {
    id: "ga08-030",
    topicRef: "ga08",
    topicTitle: "Factorising using common factors",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A rectangle has area \\(6x^2 + 9x\\) and one side of length \\(3x\\). By factorising, find an expression for the other side.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising", "common-factor", "problem-solving", "area"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the relationship between area and sides.",
          workingLatex: "\\text{Area} = \\text{length} \\cdot \\text{width} \\;\\Rightarrow\\; 6x^2 + 9x = 3x \\cdot (\\text{other side})",
          explanation:
            "For a rectangle, area equals length times width. We know the area is \\(6x^2 + 9x\\) and one side is \\(3x\\), so the other side is the area divided by \\(3x\\). Factorising the area so that \\(3x\\) appears as a factor reveals the other side directly.",
        },
        {
          stepNumber: 2,
          description: "Find the HCF of the area expression.",
          workingLatex: "6 = 3 \\cdot 2, \\quad 9 = 3 \\cdot 3 \\Rightarrow \\text{number HCF} = 3; \\quad x^2, x \\Rightarrow x",
          explanation:
            "The numbers \\(6\\) and \\(9\\) have HCF \\(3\\); the lowest power of \\(x\\) is \\(x\\). So the HCF of \\(6x^2 + 9x\\) is \\(3x\\) — exactly the given side, which is a good sign that the problem will work out cleanly.",
        },
        {
          stepNumber: 3,
          description: "Factorise the area by taking out \\(3x\\).",
          workingLatex: "6x^2 \\div 3x = 2x, \\quad 9x \\div 3x = 3 \\;\\Rightarrow\\; 6x^2 + 9x = 3x(2x + 3)",
          explanation:
            "Divide each term of the area by \\(3x\\): \\(6x^2 \\div 3x = 2x\\) (numbers \\(6 \\div 3 = 2\\), letters \\(x^2 \\div x = x\\)) and \\(9x \\div 3x = 3\\). So \\(6x^2 + 9x = 3x(2x + 3)\\). Check: \\(3x \\cdot 2x = 6x^2\\) and \\(3x \\cdot 3 = 9x\\). Correct.",
        },
        {
          stepNumber: 4,
          description: "Read off the other side.",
          workingLatex: "3x \\cdot (\\text{other side}) = 3x(2x + 3) \\;\\Rightarrow\\; \\text{other side} = 2x + 3",
          explanation:
            "Comparing \\(3x \\cdot (\\text{other side}) = 3x(2x + 3)\\), the other side must be the bracket \\((2x + 3)\\). Dividing the area by \\(3x\\) gives the same result: \\(\\frac{6x^2 + 9x}{3x} = 2x + 3\\).",
        },
        {
          stepNumber: 5,
          description: "State and check the answer.",
          workingLatex: "\\text{other side} = 2x + 3, \\qquad 3x(2x + 3) = 6x^2 + 9x \\;\\checkmark",
          explanation:
            "The other side is \\(2x + 3\\). Verify: a rectangle with sides \\(3x\\) and \\(2x + 3\\) has area \\(3x(2x + 3) = 6x^2 + 9x\\), matching the given area. Correct.",
        },
      ],
      finalAnswer: "The other side is 2x + 3 (since 6x^2 + 9x = 3x(2x + 3)).",
      canonicalAnswer: "2x+3",
    },
  },
];
