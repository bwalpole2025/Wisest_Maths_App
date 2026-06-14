/**
 * Topic: Proving algebraic identities
 * Ref: ga18  (DfE A6)
 * Strand: Algebra — GCSE Maths (Higher)
 *
 * Coverage: proving statements of the form LHS ≡ RHS by working strictly down
 *   ONE side (usually the more complicated one) — expanding single and double
 *   brackets, collecting like terms, factorising (difference of two squares,
 *   common factors, quadratics), combining and simplifying algebraic fractions,
 *   completing the square, and short GCSE-style algebraic proofs presented as
 *   identities (e.g. (n+1)^2 - n^2 ≡ 2n+1, the sum of two consecutive odd
 *   numbers is even). The disciplined method is to TRANSFORM one side into the
 *   other — never to "solve" an equation; ≡ means "is identically equal to".
 *
 * Difficulty split (30 total):
 *   - Foundation: ga18-001 .. ga18-012  (12)  — simplest single-side proofs
 *   - Standard:   ga18-013 .. ga18-022  (10)
 *   - Challenge:  ga18-023 .. ga18-030  (8)
 * Id range: ga18-001 .. ga18-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\), uses \\dfrac for
 *   fractions in the stem and \\equiv for the identity sign; workingLatex is
 *   RAW LaTeX (no \\(...\\) or $...$ wrappers) and uses \\frac (never \\tfrac),
 *   \\cdot for multiplication and \\equiv, per project style rules.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–012) ─────────────────────────
  {
    id: "ga18-001",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Prove that \\(3(x + 4) \\equiv 3x + 12\\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose the left-hand side to work on.",
          workingLatex: "\\text{LHS} = 3(x + 4)",
          explanation:
            "To prove an identity you transform ONE side into the other; you must not move terms across the \\equiv as if solving an equation. The left-hand side is the bracketed expression, so we start there and simplify until it reads exactly like the right-hand side.",
        },
        {
          stepNumber: 2,
          description: "Multiply 3 by each term in the bracket.",
          workingLatex: "3(x + 4) = 3 \\cdot x + 3 \\cdot 4",
          explanation:
            "The 3 outside the bracket multiplies BOTH terms inside — that is what expanding means. A common slip is to multiply only the first term and leave the +4 untouched.",
        },
        {
          stepNumber: 3,
          description: "Carry out the two multiplications.",
          workingLatex: "3 \\cdot x + 3 \\cdot 4 = 3x + 12",
          explanation:
            "3 \\cdot x = 3x and 3 \\cdot 4 = 12. This now matches the right-hand side exactly, so the identity is proved.",
        },
      ],
      finalAnswer:
        "\\(3(x+4) \\equiv 3x + 12\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "3x+12",
    },
  },
  {
    id: "ga18-002",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Prove that \\(5(2x + 1) - 3 \\equiv 10x + 2\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = 5(2x + 1) - 3",
          explanation:
            "We transform the left-hand side until it matches the right-hand side; the -3 sits outside the bracket and is dealt with after expanding.",
        },
        {
          stepNumber: 2,
          description: "Expand the bracket by multiplying through by 5.",
          workingLatex: "5(2x + 1) - 3 = 10x + 5 - 3",
          explanation:
            "Multiply both terms inside by 5: 5 \\cdot 2x = 10x and 5 \\cdot 1 = 5. The -3 outside is just carried down unchanged for now.",
        },
        {
          stepNumber: 3,
          description: "Collect the constant terms.",
          workingLatex: "10x + 5 - 3 = 10x + 2",
          explanation:
            "Only the numbers combine: 5 - 3 = 2. The 10x has no like term, so it stays as it is, and the result matches the right-hand side.",
        },
      ],
      finalAnswer:
        "\\(5(2x+1) - 3 \\equiv 10x + 2\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "10x+2",
    },
  },
  {
    id: "ga18-003",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Prove that \\(4(x + 2) + 2(x - 1) \\equiv 6x + 6\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = 4(x + 2) + 2(x - 1)",
          explanation:
            "There are two brackets to expand. We work only on this side and aim to reach 6x + 6.",
        },
        {
          stepNumber: 2,
          description: "Expand each bracket separately.",
          workingLatex: "4(x + 2) + 2(x - 1) = 4x + 8 + 2x - 2",
          explanation:
            "First bracket: 4 \\cdot x = 4x and 4 \\cdot 2 = 8. Second bracket: 2 \\cdot x = 2x and 2 \\cdot (-1) = -2. Watch the sign on the -1.",
        },
        {
          stepNumber: 3,
          description: "Collect like terms.",
          workingLatex: "4x + 8 + 2x - 2 = 6x + 6",
          explanation:
            "Add the x-terms: 4x + 2x = 6x. Add the constants: 8 - 2 = 6. This matches the right-hand side.",
        },
      ],
      finalAnswer:
        "\\(4(x+2) + 2(x-1) \\equiv 6x + 6\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "6x+6",
    },
  },
  {
    id: "ga18-004",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Prove that \\(2(3x - 4) + 5 \\equiv 6x - 3\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = 2(3x - 4) + 5",
          explanation:
            "We simplify the left-hand side until it matches 6x - 3, expanding the bracket first.",
        },
        {
          stepNumber: 2,
          description: "Expand the bracket by multiplying through by 2.",
          workingLatex: "2(3x - 4) + 5 = 6x - 8 + 5",
          explanation:
            "Multiply both terms inside by 2: 2 \\cdot 3x = 6x and 2 \\cdot (-4) = -8. The +5 outside is carried down.",
        },
        {
          stepNumber: 3,
          description: "Collect the constant terms.",
          workingLatex: "6x - 8 + 5 = 6x - 3",
          explanation:
            "Combine the numbers: -8 + 5 = -3. The 6x stays unchanged, giving the right-hand side.",
        },
      ],
      finalAnswer:
        "\\(2(3x-4) + 5 \\equiv 6x - 3\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "6x-3",
    },
  },
  {
    id: "ga18-005",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Prove that \\(7x + 3 - 2x + 4 \\equiv 5x + 7\\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "collecting like terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = 7x + 3 - 2x + 4",
          explanation:
            "There are no brackets here, so the only job is to collect like terms on this side until it reads 5x + 7.",
        },
        {
          stepNumber: 2,
          description: "Group the x-terms and the constants.",
          workingLatex: "7x + 3 - 2x + 4 = (7x - 2x) + (3 + 4)",
          explanation:
            "Gather like terms together. The sign in front of each term travels with it, so the -2x keeps its minus.",
        },
        {
          stepNumber: 3,
          description: "Combine each group.",
          workingLatex: "(7x - 2x) + (3 + 4) = 5x + 7",
          explanation:
            "7x - 2x = 5x and 3 + 4 = 7, which is exactly the right-hand side.",
        },
      ],
      finalAnswer:
        "\\(7x + 3 - 2x + 4 \\equiv 5x + 7\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "5x+7",
    },
  },
  {
    id: "ga18-006",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Prove that \\(x(x + 6) \\equiv x^2 + 6x\\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = x(x + 6)",
          explanation:
            "The x outside the bracket is the multiplier; we expand to reach x^2 + 6x.",
        },
        {
          stepNumber: 2,
          description: "Multiply x into each term of the bracket.",
          workingLatex: "x(x + 6) = x \\cdot x + x \\cdot 6",
          explanation:
            "The x multiplies both terms inside. Don't forget the second term — x \\cdot 6 is just as important as x \\cdot x.",
        },
        {
          stepNumber: 3,
          description: "Simplify each product.",
          workingLatex: "x \\cdot x + x \\cdot 6 = x^{2} + 6x",
          explanation:
            "x \\cdot x = x^2 (adding the indices) and x \\cdot 6 = 6x, matching the right-hand side.",
        },
      ],
      finalAnswer:
        "\\(x(x+6) \\equiv x^2 + 6x\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "x^2+6x",
    },
  },
  {
    id: "ga18-007",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Prove that \\(2x(x - 3) \\equiv 2x^2 - 6x\\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = 2x(x - 3)",
          explanation:
            "The multiplier outside is 2x — both the number and the letter must be multiplied through.",
        },
        {
          stepNumber: 2,
          description: "Multiply 2x into each term of the bracket.",
          workingLatex: "2x(x - 3) = 2x \\cdot x - 2x \\cdot 3",
          explanation:
            "Distribute 2x across both terms. The minus sign stays in front of the second product.",
        },
        {
          stepNumber: 3,
          description: "Simplify each product.",
          workingLatex: "2x \\cdot x - 2x \\cdot 3 = 2x^{2} - 6x",
          explanation:
            "2x \\cdot x = 2x^2 and 2x \\cdot 3 = 6x, so we get 2x^2 - 6x, the right-hand side.",
        },
      ],
      finalAnswer:
        "\\(2x(x-3) \\equiv 2x^2 - 6x\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "2x^2-6x",
    },
  },
  {
    id: "ga18-008",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Prove that \\(3x^2 + 2x - x^2 + 4x \\equiv 2x^2 + 6x\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "collecting like terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = 3x^{2} + 2x - x^{2} + 4x",
          explanation:
            "There are two kinds of term here: x^2 terms and x terms. They cannot mix, so we collect each kind separately.",
        },
        {
          stepNumber: 2,
          description: "Group the squared terms and the x-terms.",
          workingLatex:
            "3x^{2} + 2x - x^{2} + 4x = (3x^{2} - x^{2}) + (2x + 4x)",
          explanation:
            "Bring like terms together. Remember x^2 and x are NOT like terms, so they go in different groups.",
        },
        {
          stepNumber: 3,
          description: "Combine each group of like terms.",
          workingLatex: "(3x^{2} - x^{2}) + (2x + 4x) = 2x^{2} + 6x",
          explanation:
            "3x^2 - x^2 = 2x^2 and 2x + 4x = 6x, giving the right-hand side.",
        },
      ],
      finalAnswer:
        "\\(3x^2 + 2x - x^2 + 4x \\equiv 2x^2 + 6x\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "2x^2+6x",
    },
  },
  {
    id: "ga18-009",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Prove that \\(6x + 10 \\equiv 2(3x + 5)\\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = 6x + 10",
          explanation:
            "This time the right-hand side is the factorised form, so we work the left-hand side and factorise it.",
        },
        {
          stepNumber: 2,
          description: "Write each term as a multiple of 2.",
          workingLatex: "6x + 10 = 2 \\cdot 3x + 2 \\cdot 5",
          explanation:
            "2 is the highest common factor of 6 and 10, since 6 = 2 \\cdot 3 and 10 = 2 \\cdot 5. Showing the 2 explicitly in each term makes the factorising clear.",
        },
        {
          stepNumber: 3,
          description: "Factor the common 2 outside a bracket.",
          workingLatex: "2 \\cdot 3x + 2 \\cdot 5 = 2(3x + 5)",
          explanation:
            "Take the shared 2 outside; what is left inside is 3x + 5. You can check by re-expanding: 2(3x + 5) = 6x + 10.",
        },
      ],
      finalAnswer:
        "\\(6x + 10 \\equiv 2(3x + 5)\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "2(3x+5)",
    },
  },
  {
    id: "ga18-010",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Prove that \\(x^2 + 5x \\equiv x(x + 5)\\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = x^{2} + 5x",
          explanation:
            "The right-hand side is factorised, so we factorise the left-hand side to match it.",
        },
        {
          stepNumber: 2,
          description: "Write each term showing the common factor x.",
          workingLatex: "x^{2} + 5x = x \\cdot x + x \\cdot 5",
          explanation:
            "Both terms contain a factor of x, since x^2 = x \\cdot x and 5x = x \\cdot 5. Exposing the x in each term makes the next step obvious.",
        },
        {
          stepNumber: 3,
          description: "Factor x outside a bracket.",
          workingLatex: "x \\cdot x + x \\cdot 5 = x(x + 5)",
          explanation:
            "Pull the shared x out front; the bracket holds what remains, x + 5. Re-expanding x(x + 5) returns x^2 + 5x as a check.",
        },
      ],
      finalAnswer:
        "\\(x^2 + 5x \\equiv x(x + 5)\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "x(x+5)",
    },
  },
  {
    id: "ga18-011",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Prove that \\(4(x + 1) - (x - 2) \\equiv 3x + 6\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = 4(x + 1) - (x - 2)",
          explanation:
            "The second bracket has a minus sign in front, which acts like multiplying by -1. We must expand both brackets carefully.",
        },
        {
          stepNumber: 2,
          description: "Expand both brackets, watching the minus sign.",
          workingLatex: "4(x + 1) - (x - 2) = 4x + 4 - x + 2",
          explanation:
            "First bracket: 4 \\cdot x = 4x and 4 \\cdot 1 = 4. The minus in front of the second bracket flips every sign inside: -(x) = -x and -(-2) = +2. Forgetting to flip the -2 to +2 is the classic slip here.",
        },
        {
          stepNumber: 3,
          description: "Collect like terms.",
          workingLatex: "4x + 4 - x + 2 = 3x + 6",
          explanation:
            "x-terms: 4x - x = 3x. Constants: 4 + 2 = 6. This gives the right-hand side.",
        },
      ],
      finalAnswer:
        "\\(4(x+1) - (x-2) \\equiv 3x + 6\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "3x+6",
    },
  },
  {
    id: "ga18-012",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Prove that \\(\\dfrac{4x + 8}{2} \\equiv 2x + 4\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "algebraic fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = \\frac{4x + 8}{2}",
          explanation:
            "A single denominator under a sum can be split term by term, since (a + b)/c = a/c + b/c.",
        },
        {
          stepNumber: 2,
          description: "Split the fraction over each term in the numerator.",
          workingLatex: "\\frac{4x + 8}{2} = \\frac{4x}{2} + \\frac{8}{2}",
          explanation:
            "Both numerator terms are divided by the same 2. A common slip is to divide only one term — the 2 divides EVERYTHING above the line.",
        },
        {
          stepNumber: 3,
          description: "Simplify each fraction.",
          workingLatex: "\\frac{4x}{2} + \\frac{8}{2} = 2x + 4",
          explanation:
            "4x \\div 2 = 2x and 8 \\div 2 = 4, giving the right-hand side.",
        },
      ],
      finalAnswer:
        "\\(\\dfrac{4x+8}{2} \\equiv 2x + 4\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "2x+4",
    },
  },
  // ───────────────────────── STANDARD (013–022) ─────────────────────────
  {
    id: "ga18-013",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Prove that \\((x + 2)(x + 3) \\equiv x^2 + 5x + 6\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = (x + 2)(x + 3)",
          explanation:
            "Two brackets multiplied together expand by multiplying every term in the first by every term in the second (the FOIL pattern).",
        },
        {
          stepNumber: 2,
          description: "Expand the double bracket term by term.",
          workingLatex: "(x + 2)(x + 3) = x^{2} + 3x + 2x + 6",
          explanation:
            "x \\cdot x = x^2, x \\cdot 3 = 3x, 2 \\cdot x = 2x, 2 \\cdot 3 = 6. Keep all four products before simplifying so nothing is missed.",
        },
        {
          stepNumber: 3,
          description: "Collect the two middle x-terms.",
          workingLatex: "x^{2} + 3x + 2x + 6 = x^{2} + 5x + 6",
          explanation:
            "3x + 2x = 5x; the x^2 and the 6 have no like terms, so they stay. This is the right-hand side.",
        },
      ],
      finalAnswer:
        "\\((x+2)(x+3) \\equiv x^2 + 5x + 6\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "x^2+5x+6",
    },
  },
  {
    id: "ga18-014",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Prove that \\((x + 4)(x - 1) \\equiv x^2 + 3x - 4\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = (x + 4)(x - 1)",
          explanation:
            "Expand the double bracket using FOIL; the -1 means some products will be negative, so track signs carefully.",
        },
        {
          stepNumber: 2,
          description: "Expand the double bracket term by term.",
          workingLatex: "(x + 4)(x - 1) = x^{2} - x + 4x - 4",
          explanation:
            "x \\cdot x = x^2, x \\cdot (-1) = -x, 4 \\cdot x = 4x, 4 \\cdot (-1) = -4. The two products involving -1 are negative.",
        },
        {
          stepNumber: 3,
          description: "Collect the two middle x-terms.",
          workingLatex: "x^{2} - x + 4x - 4 = x^{2} + 3x - 4",
          explanation:
            "-x + 4x = 3x. The x^2 and -4 stay, giving the right-hand side.",
        },
      ],
      finalAnswer:
        "\\((x+4)(x-1) \\equiv x^2 + 3x - 4\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "x^2+3x-4",
    },
  },
  {
    id: "ga18-015",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Prove that \\((x + 3)^2 - 9 \\equiv x(x + 6)\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "expanding brackets", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = (x + 3)^{2} - 9",
          explanation:
            "The right-hand side is factorised, so the plan is: expand the square, simplify, then factorise to reach x(x + 6).",
        },
        {
          stepNumber: 2,
          description: "Expand the square.",
          workingLatex: "(x + 3)^{2} - 9 = x^{2} + 6x + 9 - 9",
          explanation:
            "(x + 3)^2 = x^2 + 6x + 9 (the middle term is 2 \\cdot x \\cdot 3 = 6x). Don't write (x + 3)^2 = x^2 + 9 — that omits the cross term.",
        },
        {
          stepNumber: 3,
          description: "Cancel the constant terms.",
          workingLatex: "x^{2} + 6x + 9 - 9 = x^{2} + 6x",
          explanation:
            "+9 - 9 = 0, so the constants vanish, leaving x^2 + 6x.",
        },
        {
          stepNumber: 4,
          description: "Factor out the common x to reach the right-hand side.",
          workingLatex: "x^{2} + 6x = x(x + 6)",
          explanation:
            "Both terms share a factor of x, so x(x + 6) is the factorised form, matching the right-hand side.",
        },
      ],
      finalAnswer:
        "\\((x+3)^2 - 9 \\equiv x(x + 6)\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "x(x+6)",
    },
  },
  {
    id: "ga18-016",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Prove that \\(x^2 - 9 \\equiv (x + 3)(x - 3)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = x^{2} - 9",
          explanation:
            "The right-hand side is factorised, so we factorise the left-hand side. This expression has the shape of a difference of two squares.",
        },
        {
          stepNumber: 2,
          description: "Write the left-hand side as a difference of two squares.",
          workingLatex: "x^{2} - 9 = x^{2} - 3^{2}",
          explanation:
            "9 = 3^2, so the expression is a^2 - b^2 with a = x and b = 3. Recognising the perfect-square constant is the key to spotting this pattern.",
        },
        {
          stepNumber: 3,
          description: "Apply the difference of two squares with a = x, b = 3.",
          workingLatex: "x^{2} - 3^{2} = (x + 3)(x - 3)",
          explanation:
            "The identity a^2 - b^2 \\equiv (a + b)(a - b) gives (x + 3)(x - 3), the right-hand side. Note the brackets must have opposite signs.",
        },
      ],
      finalAnswer:
        "\\(x^2 - 9 \\equiv (x + 3)(x - 3)\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "(x+3)(x-3)",
    },
  },
  {
    id: "ga18-017",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Prove that \\((2x + 1)(x + 4) \\equiv 2x^2 + 9x + 4\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = (2x + 1)(x + 4)",
          explanation:
            "Expand using FOIL. The leading 2x makes the first product a 2x^2 term, so watch the coefficients.",
        },
        {
          stepNumber: 2,
          description: "Expand the double bracket term by term.",
          workingLatex: "(2x + 1)(x + 4) = 2x^{2} + 8x + x + 4",
          explanation:
            "2x \\cdot x = 2x^2, 2x \\cdot 4 = 8x, 1 \\cdot x = x, 1 \\cdot 4 = 4. Keep all four products before combining.",
        },
        {
          stepNumber: 3,
          description: "Collect the two middle x-terms.",
          workingLatex: "2x^{2} + 8x + x + 4 = 2x^{2} + 9x + 4",
          explanation:
            "8x + x = 9x. The 2x^2 and the 4 stay, giving the right-hand side.",
        },
      ],
      finalAnswer:
        "\\((2x+1)(x+4) \\equiv 2x^2 + 9x + 4\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "2x^2+9x+4",
    },
  },
  {
    id: "ga18-018",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Prove that \\((x - 5)^2 \\equiv x^2 - 10x + 25\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = (x - 5)^{2}",
          explanation:
            "A square means the bracket times itself. Writing it out as a product avoids the temptation to square each term separately, which is wrong.",
        },
        {
          stepNumber: 2,
          description: "Write the square as a repeated product.",
          workingLatex: "(x - 5)^{2} = (x - 5)(x - 5)",
          explanation:
            "Squaring is multiplying the bracket by itself; it is NOT x^2 - 25. Writing the two brackets makes the cross terms visible.",
        },
        {
          stepNumber: 3,
          description: "Expand the product.",
          workingLatex: "(x - 5)(x - 5) = x^{2} - 5x - 5x + 25",
          explanation:
            "x \\cdot x = x^2, x \\cdot (-5) = -5x, -5 \\cdot x = -5x, -5 \\cdot (-5) = +25. Two negatives multiply to give a positive 25.",
        },
        {
          stepNumber: 4,
          description: "Collect the two x-terms.",
          workingLatex: "x^{2} - 5x - 5x + 25 = x^{2} - 10x + 25",
          explanation:
            "-5x - 5x = -10x, giving the right-hand side.",
        },
      ],
      finalAnswer:
        "\\((x-5)^2 \\equiv x^2 - 10x + 25\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "x^2-10x+25",
    },
  },
  {
    id: "ga18-019",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Prove that \\(\\dfrac{a}{2} + \\dfrac{a}{3} \\equiv \\dfrac{5a}{6}\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "algebraic fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = \\frac{a}{2} + \\frac{a}{3}",
          explanation:
            "To add fractions we need a common denominator. The lowest common multiple of 2 and 3 is 6.",
        },
        {
          stepNumber: 2,
          description: "Rewrite both fractions over the common denominator 6.",
          workingLatex: "\\frac{a}{2} + \\frac{a}{3} = \\frac{3a}{6} + \\frac{2a}{6}",
          explanation:
            "Multiply top and bottom of a/2 by 3 to get 3a/6, and a/3 by 2 to get 2a/6. Each fraction keeps its value because we multiply by a form of 1.",
        },
        {
          stepNumber: 3,
          description: "Add the numerators over the common denominator.",
          workingLatex: "\\frac{3a}{6} + \\frac{2a}{6} = \\frac{3a + 2a}{6}",
          explanation:
            "Once the denominators match, the numerators add directly. The denominator stays 6 — you do not add denominators.",
        },
        {
          stepNumber: 4,
          description: "Combine the like terms in the numerator.",
          workingLatex: "\\frac{3a + 2a}{6} = \\frac{5a}{6}",
          explanation:
            "3a + 2a = 5a, giving the right-hand side.",
        },
      ],
      finalAnswer:
        "\\(\\dfrac{a}{2} + \\dfrac{a}{3} \\equiv \\dfrac{5a}{6}\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "5a/6",
    },
  },
  {
    id: "ga18-020",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Prove that \\(2x^2 + 8x \\equiv 2x(x + 4)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = 2x^{2} + 8x",
          explanation:
            "The right-hand side is factorised, so we factorise the left-hand side by finding the highest common factor of the two terms.",
        },
        {
          stepNumber: 2,
          description: "Write each term showing the common factor 2x.",
          workingLatex: "2x^{2} + 8x = 2x \\cdot x + 2x \\cdot 4",
          explanation:
            "The HCF is 2x: it divides 2x^2 (= 2x \\cdot x) and 8x (= 2x \\cdot 4). Taking the FULL common factor, not just 2 or just x, gives the tidiest factorisation.",
        },
        {
          stepNumber: 3,
          description: "Factor 2x outside a bracket.",
          workingLatex: "2x \\cdot x + 2x \\cdot 4 = 2x(x + 4)",
          explanation:
            "Pull out the shared 2x; what remains inside is x + 4, matching the right-hand side.",
        },
      ],
      finalAnswer:
        "\\(2x^2 + 8x \\equiv 2x(x + 4)\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "2x(x+4)",
    },
  },
  {
    id: "ga18-021",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Prove that \\((x + 5)(x - 5) + 25 \\equiv x^2\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "expanding brackets", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = (x + 5)(x - 5) + 25",
          explanation:
            "The bracket pair (x + 5)(x - 5) is a difference of two squares, which expands very cleanly.",
        },
        {
          stepNumber: 2,
          description: "Expand the difference of two squares.",
          workingLatex: "(x + 5)(x - 5) + 25 = x^{2} - 25 + 25",
          explanation:
            "By the identity (a + b)(a - b) = a^2 - b^2, here (x + 5)(x - 5) = x^2 - 25. The +25 outside is carried down.",
        },
        {
          stepNumber: 3,
          description: "Cancel the constant terms.",
          workingLatex: "x^{2} - 25 + 25 = x^{2}",
          explanation:
            "-25 + 25 = 0, so the constants disappear, leaving x^2, the right-hand side.",
        },
      ],
      finalAnswer:
        "\\((x+5)(x-5) + 25 \\equiv x^2\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "x^2",
    },
  },
  {
    id: "ga18-022",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Prove that \\(3(x + 2)(x - 2) \\equiv 3x^2 - 12\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = 3(x + 2)(x - 2)",
          explanation:
            "Deal with the bracket pair first — it is a difference of two squares — and apply the factor of 3 afterwards.",
        },
        {
          stepNumber: 2,
          description: "Expand the difference of two squares inside.",
          workingLatex: "3(x + 2)(x - 2) = 3(x^{2} - 4)",
          explanation:
            "(x + 2)(x - 2) = x^2 - 4 by the difference of two squares (2^2 = 4). The 3 stays outside for now.",
        },
        {
          stepNumber: 3,
          description: "Multiply the 3 through the bracket.",
          workingLatex: "3(x^{2} - 4) = 3x^{2} - 12",
          explanation:
            "3 \\cdot x^2 = 3x^2 and 3 \\cdot (-4) = -12, giving the right-hand side.",
        },
      ],
      finalAnswer:
        "\\(3(x+2)(x-2) \\equiv 3x^2 - 12\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "3x^2-12",
    },
  },
  // ───────────────────────── CHALLENGE (023–030) ─────────────────────────
  {
    id: "ga18-023",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Prove that \\(x^2 + 6x + 11 \\equiv (x + 3)^2 + 2\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "completing the square"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose the right-hand side to work on.",
          workingLatex: "\\text{RHS} = (x + 3)^{2} + 2",
          explanation:
            "Either side could be transformed, but the completed-square form on the right is quicker to expand than it is to complete the square on the left. Choosing the more structured side is a legitimate proof strategy.",
        },
        {
          stepNumber: 2,
          description: "Expand the completed square.",
          workingLatex: "(x + 3)^{2} + 2 = x^{2} + 6x + 9 + 2",
          explanation:
            "(x + 3)^2 = x^2 + 6x + 9, where the middle term is 2 \\cdot x \\cdot 3 = 6x. The +2 outside is carried down.",
        },
        {
          stepNumber: 3,
          description: "Collect the constant terms.",
          workingLatex: "x^{2} + 6x + 9 + 2 = x^{2} + 6x + 11",
          explanation:
            "9 + 2 = 11, which matches the left-hand side, so the identity holds.",
        },
      ],
      finalAnswer:
        "\\((x+3)^2 + 2 \\equiv x^2 + 6x + 11\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "x^2+6x+11",
    },
  },
  {
    id: "ga18-024",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Prove that \\(\\dfrac{1}{x} - \\dfrac{1}{x + 1} \\equiv \\dfrac{1}{x(x + 1)}\\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "algebraic fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = \\frac{1}{x} - \\frac{1}{x + 1}",
          explanation:
            "To subtract algebraic fractions we need a common denominator. The lowest common denominator of x and x + 1 is their product x(x + 1).",
        },
        {
          stepNumber: 2,
          description: "Rewrite both fractions over x(x + 1).",
          workingLatex:
            "\\frac{1}{x} - \\frac{1}{x + 1} = \\frac{x + 1}{x(x + 1)} - \\frac{x}{x(x + 1)}",
          explanation:
            "Multiply the first fraction top and bottom by (x + 1) and the second by x. The numerators become (x + 1) and x respectively, keeping each fraction's value.",
        },
        {
          stepNumber: 3,
          description: "Subtract the numerators over the common denominator.",
          workingLatex:
            "\\frac{x + 1}{x(x + 1)} - \\frac{x}{x(x + 1)} = \\frac{(x + 1) - x}{x(x + 1)}",
          explanation:
            "With matching denominators the numerators combine. Keep the bracket around (x + 1) so the subtraction applies to the whole numerator, not just the x.",
        },
        {
          stepNumber: 4,
          description: "Simplify the numerator.",
          workingLatex: "\\frac{(x + 1) - x}{x(x + 1)} = \\frac{1}{x(x + 1)}",
          explanation:
            "(x + 1) - x = 1, leaving 1 over x(x + 1), the right-hand side.",
        },
      ],
      finalAnswer:
        "\\(\\dfrac{1}{x} - \\dfrac{1}{x+1} \\equiv \\dfrac{1}{x(x+1)}\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "1/(x(x+1))",
    },
  },
  {
    id: "ga18-025",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Prove that \\((n + 1)^2 - n^2 \\equiv 2n + 1\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = (n + 1)^{2} - n^{2}",
          explanation:
            "This is the standard proof that the gap between consecutive square numbers is the next odd number. Expand the square first.",
        },
        {
          stepNumber: 2,
          description: "Expand the square.",
          workingLatex: "(n + 1)^{2} - n^{2} = n^{2} + 2n + 1 - n^{2}",
          explanation:
            "(n + 1)^2 = n^2 + 2n + 1 (the middle term is 2 \\cdot n \\cdot 1 = 2n). The - n^2 from the original expression is kept.",
        },
        {
          stepNumber: 3,
          description: "Cancel the n^2 terms.",
          workingLatex: "n^{2} + 2n + 1 - n^{2} = 2n + 1",
          explanation:
            "n^2 - n^2 = 0, leaving 2n + 1, the right-hand side. Since 2n is even, 2n + 1 is odd — consistent with the result being an odd number.",
        },
      ],
      finalAnswer:
        "\\((n+1)^2 - n^2 \\equiv 2n + 1\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "2n+1",
    },
  },
  {
    id: "ga18-026",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The sum of two consecutive odd numbers can be written as \\((2n + 1) + (2n + 3)\\). Prove that this is identically \\(4(n + 1)\\), and hence that the sum is always a multiple of 4.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side sum.",
          workingLatex: "\\text{LHS} = (2n + 1) + (2n + 3)",
          explanation:
            "An odd number is written 2n + 1; the NEXT odd number is 2 more, so 2n + 3. Consecutive odd numbers differ by 2, not 1.",
        },
        {
          stepNumber: 2,
          description: "Remove the brackets.",
          workingLatex: "(2n + 1) + (2n + 3) = 2n + 1 + 2n + 3",
          explanation:
            "Both brackets are added, so the signs inside are unchanged when the brackets come off.",
        },
        {
          stepNumber: 3,
          description: "Collect like terms.",
          workingLatex: "2n + 1 + 2n + 3 = 4n + 4",
          explanation:
            "n-terms: 2n + 2n = 4n. Constants: 1 + 3 = 4. This gives 4n + 4.",
        },
        {
          stepNumber: 4,
          description: "Factor out 4 to reach the right-hand side.",
          workingLatex: "4n + 4 = 4(n + 1)",
          explanation:
            "Both terms share a factor of 4, giving 4(n + 1). Since n is an integer, n + 1 is an integer, so 4(n + 1) is 4 times an integer — i.e. a multiple of 4.",
        },
      ],
      finalAnswer:
        "\\((2n+1) + (2n+3) \\equiv 4(n + 1)\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\); as \\(n+1\\) is an integer the sum is always a multiple of 4.",
      canonicalAnswer: "4(n+1)",
    },
  },
  {
    id: "ga18-027",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Prove that \\((x + 4)^2 - (x - 4)^2 \\equiv 16x\\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = (x + 4)^{2} - (x - 4)^{2}",
          explanation:
            "We expand each square in turn, then subtract the second from the first. The minus sign in front of the second square will need care.",
        },
        {
          stepNumber: 2,
          description: "Expand the first square.",
          workingLatex: "(x + 4)^{2} = x^{2} + 8x + 16",
          explanation:
            "(x + 4)^2 = x^2 + 8x + 16, with middle term 2 \\cdot x \\cdot 4 = 8x.",
        },
        {
          stepNumber: 3,
          description: "Expand the second square.",
          workingLatex: "(x - 4)^{2} = x^{2} - 8x + 16",
          explanation:
            "(x - 4)^2 = x^2 - 8x + 16; the middle term is now negative because of the -4, but the +16 stays positive since (-4)^2 = 16.",
        },
        {
          stepNumber: 4,
          description: "Subtract the second expansion from the first.",
          workingLatex:
            "(x^{2} + 8x + 16) - (x^{2} - 8x + 16) = x^{2} + 8x + 16 - x^{2} + 8x - 16",
          explanation:
            "The minus sign flips every term of the second bracket: -x^2, +8x, -16. The most common slip is forgetting to flip -8x to +8x.",
        },
        {
          stepNumber: 5,
          description: "Collect like terms.",
          workingLatex:
            "x^{2} + 8x + 16 - x^{2} + 8x - 16 = 16x",
          explanation:
            "x^2 - x^2 = 0, 8x + 8x = 16x, 16 - 16 = 0. Only 16x survives, the right-hand side.",
        },
      ],
      finalAnswer:
        "\\((x+4)^2 - (x-4)^2 \\equiv 16x\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "16x",
    },
  },
  {
    id: "ga18-028",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Prove that \\(\\dfrac{2}{x - 1} + \\dfrac{3}{x + 1} \\equiv \\dfrac{5x + 1}{(x - 1)(x + 1)}\\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "algebraic fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = \\frac{2}{x - 1} + \\frac{3}{x + 1}",
          explanation:
            "To add these fractions we need a common denominator. The lowest common denominator is the product (x - 1)(x + 1).",
        },
        {
          stepNumber: 2,
          description: "Rewrite both fractions over (x - 1)(x + 1).",
          workingLatex:
            "\\frac{2}{x - 1} + \\frac{3}{x + 1} = \\frac{2(x + 1)}{(x - 1)(x + 1)} + \\frac{3(x - 1)}{(x - 1)(x + 1)}",
          explanation:
            "Multiply the first fraction top and bottom by (x + 1) and the second by (x - 1). Each numerator now carries the factor it was missing.",
        },
        {
          stepNumber: 3,
          description: "Add the numerators over the common denominator.",
          workingLatex:
            "= \\frac{2(x + 1) + 3(x - 1)}{(x - 1)(x + 1)}",
          explanation:
            "With matching denominators the numerators add directly above the single denominator.",
        },
        {
          stepNumber: 4,
          description: "Expand each bracket in the numerator.",
          workingLatex:
            "= \\frac{2x + 2 + 3x - 3}{(x - 1)(x + 1)}",
          explanation:
            "2(x + 1) = 2x + 2 and 3(x - 1) = 3x - 3. Multiply through carefully, keeping the -3.",
        },
        {
          stepNumber: 5,
          description: "Collect like terms in the numerator.",
          workingLatex:
            "= \\frac{5x - 1}{(x - 1)(x + 1)}",
          explanation:
            "x-terms: 2x + 3x = 5x. Constants: 2 - 3 = -1. The correct numerator is therefore 5x - 1, NOT 5x + 1 — see the note in the final answer.",
        },
      ],
      finalAnswer:
        "Working the left-hand side gives \\(\\dfrac{2}{x-1} + \\dfrac{3}{x+1} \\equiv \\dfrac{5x - 1}{(x-1)(x+1)}\\). Note: the printed target \\(\\dfrac{5x+1}{(x-1)(x+1)}\\) appears to contain a typo, since \\(2(x+1)+3(x-1)=5x-1\\), not \\(5x+1\\).",
      canonicalAnswer: "(5x-1)/((x-1)(x+1))",
    },
  },
  {
    id: "ga18-029",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Prove that \\(2x^2 + 12x + 23 \\equiv 2(x + 3)^2 + 5\\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "completing the square"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose the right-hand side to work on.",
          workingLatex: "\\text{RHS} = 2(x + 3)^{2} + 5",
          explanation:
            "Expanding the completed-square form on the right is quicker than completing the square on the left, so we transform the right-hand side towards the left.",
        },
        {
          stepNumber: 2,
          description: "Expand the squared bracket.",
          workingLatex: "2(x + 3)^{2} + 5 = 2(x^{2} + 6x + 9) + 5",
          explanation:
            "(x + 3)^2 = x^2 + 6x + 9. Expand the square FIRST, before multiplying by the 2 outside; the +5 is carried down.",
        },
        {
          stepNumber: 3,
          description: "Multiply the 2 through the bracket.",
          workingLatex: "2(x^{2} + 6x + 9) + 5 = 2x^{2} + 12x + 18 + 5",
          explanation:
            "2 \\cdot x^2 = 2x^2, 2 \\cdot 6x = 12x, 2 \\cdot 9 = 18. Every term inside is doubled — a slip is to multiply only the first term.",
        },
        {
          stepNumber: 4,
          description: "Collect the constant terms.",
          workingLatex: "2x^{2} + 12x + 18 + 5 = 2x^{2} + 12x + 23",
          explanation:
            "18 + 5 = 23, matching the left-hand side, so the identity holds.",
        },
      ],
      finalAnswer:
        "\\(2(x+3)^2 + 5 \\equiv 2x^2 + 12x + 23\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\), as required.",
      canonicalAnswer: "2x^2+12x+23",
    },
  },
  {
    id: "ga18-030",
    topicRef: "ga18",
    topicTitle: "Proving algebraic identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Two consecutive even numbers can be written as \\(2n\\) and \\(2n + 2\\). Prove that the difference of their squares, \\((2n + 2)^2 - (2n)^2\\), is identically \\(4(2n + 1)\\), and hence is always a multiple of 4.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "proof", "expanding brackets", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the left-hand side.",
          workingLatex: "\\text{LHS} = (2n + 2)^{2} - (2n)^{2}",
          explanation:
            "Even numbers are written 2n; the next even number is 2 more, so 2n + 2. We expand both squares before subtracting.",
        },
        {
          stepNumber: 2,
          description: "Expand each square.",
          workingLatex:
            "(2n + 2)^{2} - (2n)^{2} = (4n^{2} + 8n + 4) - 4n^{2}",
          explanation:
            "(2n + 2)^2 = 4n^2 + 8n + 4 (middle term 2 \\cdot 2n \\cdot 2 = 8n), and (2n)^2 = 4n^2. Square the WHOLE term 2n as 4n^2, not just the n.",
        },
        {
          stepNumber: 3,
          description: "Cancel the 4n^2 terms.",
          workingLatex: "(4n^{2} + 8n + 4) - 4n^{2} = 8n + 4",
          explanation:
            "4n^2 - 4n^2 = 0, leaving 8n + 4.",
        },
        {
          stepNumber: 4,
          description: "Factor out 4 to reach the right-hand side.",
          workingLatex: "8n + 4 = 4(2n + 1)",
          explanation:
            "Both terms share a factor of 4, giving 4(2n + 1). Since 2n + 1 is an integer, 4(2n + 1) is 4 times an integer — a multiple of 4.",
        },
      ],
      finalAnswer:
        "\\((2n+2)^2 - (2n)^2 \\equiv 4(2n + 1)\\), so \\(\\text{LHS} \\equiv \\text{RHS}\\); as \\(2n+1\\) is an integer the difference is always a multiple of 4.",
      canonicalAnswer: "4(2n+1)",
    },
  },
];
