/**
 * Topic: Sequences (Foundation tier) — generating, arithmetic nth term & special sequences
 * Refs: ga51 (Generating sequences from a rule, DfE A23)
 *       ga52 (Arithmetic sequences and the nth term, DfE A24/A25)
 *       ga53 (Special sequences: triangular, Fibonacci, geometric, DfE A24)
 * Strand: Algebra — GCSE Maths (Foundation + Higher)
 *
 * This single Foundation "Sequences" bank deliberately spans the three
 * Foundation-tier (tier: "Both") sequence subtopics so that each subtopic's
 * pool is populated. Questions carry the topicRef of the subtopic they belong
 * to (ga51 / ga52 / ga53); the aggregator in lib/data/questions/index.ts
 * groups by topicRef, so the three subtopics surface independently in the app.
 *
 * Coverage:
 *   ga51 — term-to-term rules, position-to-term (substituting into an nth-term
 *          rule), generating the first few terms.
 *   ga52 — finding the nth-term formula of a linear (arithmetic) sequence,
 *          evaluating a given term, deciding whether a number is in a sequence,
 *          and finding the first term past a boundary.
 *   ga53 — triangular numbers, Fibonacci-type sequences, square numbers, and a
 *          simple geometric sequence (constant multiplier).
 *
 * Quadratic sequences (ga54) and geometric nth-term work (ga55) are Higher
 * tier and intentionally NOT covered here.
 *
 * Counts (15 total): ga51 ×5, ga52 ×6, ga53 ×4.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or $...$
 *   wrappers) and uses \\frac (never \\tfrac) for fractions and \\cdot for
 *   multiplication, per project style rules. Multi-term list answers use
 *   answerType "expression" (the comma list is the human-facing answer).
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ═══════════════ ga51 — GENERATING SEQUENCES FROM A RULE (5) ═══════════════
  {
    id: "ga51-001",
    topicRef: "ga51",
    topicTitle: "Generating sequences from a rule",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "A sequence starts at \\(4\\). The rule is \"add \\(3\\) to the previous term\". Write down the first four terms of the sequence.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sequences", "term-to-term rule", "generating"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the first term.",
          workingLatex: "\\text{1st term} = 4",
          explanation:
            "The sequence \"starts at \\(4\\)\", so the first term is \\(4\\). A term-to-term rule needs a starting value to get going.",
        },
        {
          stepNumber: 2,
          description: "Apply \"add 3\" repeatedly.",
          workingLatex: "4 + 3 = 7,\\quad 7 + 3 = 10,\\quad 10 + 3 = 13",
          explanation:
            "Each new term is found by adding \\(3\\) to the term before it. Doing this three times gives the 2nd, 3rd and 4th terms.",
        },
        {
          stepNumber: 3,
          description: "List the first four terms.",
          workingLatex: "4,\\ 7,\\ 10,\\ 13",
          explanation:
            "Reading off the values in order gives \\(4, 7, 10, 13\\). The constant gap of \\(3\\) confirms it is an arithmetic sequence.",
        },
      ],
      finalAnswer: "\\(4,\\ 7,\\ 10,\\ 13\\).",
      commonMistakes: [
        "Starting the \"add \\(3\\)\" from \\(7\\) and only writing three terms.",
        "Multiplying by \\(3\\) instead of adding \\(3\\).",
      ],
    },
  },
  {
    id: "ga51-002",
    topicRef: "ga51",
    topicTitle: "Generating sequences from a rule",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "The first term of a sequence is \\(2\\). The rule is \"multiply the previous term by \\(3\\)\". Write down the first four terms.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sequences", "term-to-term rule", "geometric", "generating"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the first term.",
          workingLatex: "\\text{1st term} = 2",
          explanation: "We are given the first term as \\(2\\).",
        },
        {
          stepNumber: 2,
          description: "Multiply by 3 each time.",
          workingLatex: "2 \\cdot 3 = 6,\\quad 6 \\cdot 3 = 18,\\quad 18 \\cdot 3 = 54",
          explanation:
            "Here the rule multiplies rather than adds, so each term is \\(3\\) times the one before. The terms grow quickly.",
        },
        {
          stepNumber: 3,
          description: "List the terms.",
          workingLatex: "2,\\ 6,\\ 18,\\ 54",
          explanation:
            "The first four terms are \\(2, 6, 18, 54\\). A constant multiplier (here \\(3\\)) means the sequence is geometric.",
        },
      ],
      finalAnswer: "\\(2,\\ 6,\\ 18,\\ 54\\).",
      commonMistakes: [
        "Adding \\(3\\) (\\(2, 5, 8, 11\\)) instead of multiplying by \\(3\\).",
      ],
    },
  },
  {
    id: "ga51-003",
    topicRef: "ga51",
    topicTitle: "Generating sequences from a rule",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "The \\(n\\)th term of a sequence is \\(5n - 2\\). Work out the first three terms of the sequence.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sequences", "nth term", "position-to-term", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute n = 1.",
          workingLatex: "5(1) - 2 = 3",
          explanation:
            "The position-to-term rule \\(5n - 2\\) gives any term directly from its position \\(n\\). For the 1st term, put \\(n = 1\\).",
        },
        {
          stepNumber: 2,
          description: "Substitute n = 2 and n = 3.",
          workingLatex: "5(2) - 2 = 8,\\qquad 5(3) - 2 = 13",
          explanation:
            "Replacing \\(n\\) with \\(2\\) then \\(3\\) gives the 2nd and 3rd terms.",
        },
        {
          stepNumber: 3,
          description: "List the first three terms.",
          workingLatex: "3,\\ 8,\\ 13",
          explanation:
            "So the sequence begins \\(3, 8, 13\\). The terms go up by \\(5\\) each time — the coefficient of \\(n\\).",
        },
      ],
      finalAnswer: "\\(3,\\ 8,\\ 13\\).",
      commonMistakes: [
        "Starting at \\(n = 0\\) instead of \\(n = 1\\).",
        "Computing \\(5 \\cdot n\\) but forgetting to subtract \\(2\\).",
      ],
    },
  },
  {
    id: "ga51-004",
    topicRef: "ga51",
    topicTitle: "Generating sequences from a rule",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The \\(n\\)th term of a sequence is \\(n^2 + 1\\). Work out the \\(5\\)th term.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sequences", "nth term", "substitution", "squares"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute n = 5.",
          workingLatex: "5^2 + 1",
          explanation:
            "The 5th term comes from putting \\(n = 5\\) into the rule \\(n^2 + 1\\).",
        },
        {
          stepNumber: 2,
          description: "Evaluate, squaring first.",
          workingLatex: "25 + 1 = 26",
          explanation:
            "Order of operations: square \\(5\\) to get \\(25\\) before adding \\(1\\). The 5th term is \\(26\\).",
        },
      ],
      finalAnswer: "The 5th term is \\(26\\).",
      canonicalAnswer: "26",
      commonMistakes: [
        "Working out \\((5 + 1)^2 = 36\\) by squaring after adding.",
        "Reading \\(n^2\\) as \\(2n\\), giving \\(11\\).",
      ],
    },
  },
  {
    id: "ga51-005",
    topicRef: "ga51",
    topicTitle: "Generating sequences from a rule",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A sequence has first term \\(3\\). Each term after the first is found by the rule \"double the previous term and subtract \\(1\\)\". Work out the \\(4\\)th term.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sequences", "term-to-term rule", "two-step rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the 2nd term.",
          workingLatex: "2 \\cdot 3 - 1 = 5",
          explanation:
            "Apply \"double then subtract \\(1\\)\" to the first term \\(3\\): \\(2 \\times 3 = 6\\), then \\(6 - 1 = 5\\).",
        },
        {
          stepNumber: 2,
          description: "Find the 3rd term.",
          workingLatex: "2 \\cdot 5 - 1 = 9",
          explanation:
            "Apply the same rule to \\(5\\): \\(2 \\times 5 = 10\\), then \\(10 - 1 = 9\\).",
        },
        {
          stepNumber: 3,
          description: "Find the 4th term.",
          workingLatex: "2 \\cdot 9 - 1 = 17",
          explanation:
            "Apply the rule to \\(9\\): \\(2 \\times 9 = 18\\), then \\(18 - 1 = 17\\). The sequence is \\(3, 5, 9, 17, \\dots\\) and the 4th term is \\(17\\).",
        },
      ],
      finalAnswer: "The 4th term is \\(17\\).",
      canonicalAnswer: "17",
      commonMistakes: [
        "Subtracting \\(1\\) before doubling (wrong order).",
        "Stopping at the 3rd term \\(9\\).",
      ],
    },
  },

  // ═══════════ ga52 — ARITHMETIC SEQUENCES AND THE nTH TERM (6) ═══════════
  {
    id: "ga52-001",
    topicRef: "ga52",
    topicTitle: "Arithmetic sequences and the nth term",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Find an expression, in terms of \\(n\\), for the \\(n\\)th term of the sequence \\(3,\\ 7,\\ 11,\\ 15,\\ \\dots\\)",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["arithmetic sequence", "nth term", "linear"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the common difference.",
          workingLatex: "7 - 3 = 4,\\quad 11 - 7 = 4",
          explanation:
            "The terms go up by the same amount each time. This common difference, \\(4\\), becomes the coefficient of \\(n\\), so the rule starts \\(4n\\).",
        },
        {
          stepNumber: 2,
          description: "Compare 4n with the sequence.",
          workingLatex: "4n:\\ 4,\\ 8,\\ 12,\\ 16",
          explanation:
            "Listing \\(4n\\) for \\(n = 1, 2, 3, 4\\) gives \\(4, 8, 12, 16\\). Each of these is \\(1\\) more than the matching term of our sequence.",
        },
        {
          stepNumber: 3,
          description: "Adjust by the constant.",
          workingLatex: "4n - 1",
          explanation:
            "Since \\(4n\\) is \\(1\\) too big, subtract \\(1\\): the \\(n\\)th term is \\(4n - 1\\). Check \\(n = 1\\): \\(4(1) - 1 = 3\\). \\(\\checkmark\\)",
        },
      ],
      finalAnswer: "\\(4n - 1\\).",
      canonicalAnswer: "4n-1",
      commonMistakes: [
        "Giving \\(4n\\) and forgetting the \\(-1\\) adjustment.",
        "Using \\(n + 4\\) (adding the difference) instead of \\(4n\\) (multiplying).",
      ],
    },
  },
  {
    id: "ga52-002",
    topicRef: "ga52",
    topicTitle: "Arithmetic sequences and the nth term",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Find the \\(n\\)th term of the sequence \\(5,\\ 8,\\ 11,\\ 14,\\ \\dots\\)",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["arithmetic sequence", "nth term", "linear"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the common difference.",
          workingLatex: "8 - 5 = 3",
          explanation:
            "The sequence increases by \\(3\\) each step, so the rule starts with \\(3n\\).",
        },
        {
          stepNumber: 2,
          description: "Compare 3n with the sequence.",
          workingLatex: "3n:\\ 3,\\ 6,\\ 9,\\ 12",
          explanation:
            "The multiples of \\(3\\) are each \\(2\\) less than the matching terms \\(5, 8, 11, 14\\).",
        },
        {
          stepNumber: 3,
          description: "Add the constant.",
          workingLatex: "3n + 2",
          explanation:
            "Adding \\(2\\) to \\(3n\\) matches the sequence. Check \\(n = 4\\): \\(3(4) + 2 = 14\\). \\(\\checkmark\\)",
        },
      ],
      finalAnswer: "\\(3n + 2\\).",
      canonicalAnswer: "3n+2",
      commonMistakes: [
        "Subtracting instead of adding the constant, giving \\(3n - 2\\).",
      ],
    },
  },
  {
    id: "ga52-003",
    topicRef: "ga52",
    topicTitle: "Arithmetic sequences and the nth term",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "The \\(n\\)th term of a sequence is \\(6n + 1\\). Work out the \\(10\\)th term.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["arithmetic sequence", "nth term", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute n = 10.",
          workingLatex: "6(10) + 1",
          explanation:
            "To find the 10th term, replace \\(n\\) with \\(10\\) in the rule \\(6n + 1\\).",
        },
        {
          stepNumber: 2,
          description: "Evaluate.",
          workingLatex: "60 + 1 = 61",
          explanation:
            "Multiply before adding: \\(6 \\times 10 = 60\\), then \\(+1\\) gives \\(61\\).",
        },
      ],
      finalAnswer: "The 10th term is \\(61\\).",
      canonicalAnswer: "61",
      commonMistakes: [
        "Computing \\(6 \\cdot 10 \\cdot 1\\) or \\(61\\) by mis-reading the rule.",
      ],
    },
  },
  {
    id: "ga52-004",
    topicRef: "ga52",
    topicTitle: "Arithmetic sequences and the nth term",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the \\(n\\)th term of the decreasing sequence \\(20,\\ 17,\\ 14,\\ 11,\\ \\dots\\)",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["arithmetic sequence", "nth term", "negative difference"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the common difference.",
          workingLatex: "17 - 20 = -3",
          explanation:
            "The terms go DOWN by \\(3\\) each time, so the common difference is \\(-3\\) and the rule starts with \\(-3n\\).",
        },
        {
          stepNumber: 2,
          description: "Compare −3n with the sequence.",
          workingLatex: "-3n:\\ -3,\\ -6,\\ -9,\\ -12",
          explanation:
            "Each value of \\(-3n\\) is \\(23\\) less than the matching term (e.g. \\(20 - (-3) = 23\\)).",
        },
        {
          stepNumber: 3,
          description: "Add the constant.",
          workingLatex: "-3n + 23 = 23 - 3n",
          explanation:
            "Add \\(23\\) to \\(-3n\\). Check \\(n = 1\\): \\(23 - 3 = 20\\). \\(\\checkmark\\) The \\(n\\)th term is \\(23 - 3n\\).",
        },
      ],
      finalAnswer: "\\(23 - 3n\\).",
      canonicalAnswer: "23-3n",
      commonMistakes: [
        "Using \\(+3n\\) because the difference's sign was missed.",
        "Writing the constant as \\(20\\) (the first term) rather than \\(23\\).",
      ],
    },
  },
  {
    id: "ga52-005",
    topicRef: "ga52",
    topicTitle: "Arithmetic sequences and the nth term",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The \\(n\\)th term of a sequence is \\(4n + 2\\). The number \\(90\\) is a term in this sequence. Which term is it? (Give the position \\(n\\).)",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["arithmetic sequence", "nth term", "is it a term", "solving"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the rule equal to 90.",
          workingLatex: "4n + 2 = 90",
          explanation:
            "If \\(90\\) is a term, then for some position \\(n\\) the rule \\(4n + 2\\) equals \\(90\\). Form that equation.",
        },
        {
          stepNumber: 2,
          description: "Solve for n.",
          workingLatex: "4n = 88 \\ \\Rightarrow\\ n = 22",
          explanation:
            "Subtract \\(2\\): \\(90 - 2 = 88\\). Divide by \\(4\\): \\(88 \\div 4 = 22\\).",
        },
        {
          stepNumber: 3,
          description: "Check n is a whole number.",
          workingLatex: "n = 22 \\in \\{1, 2, 3, \\dots\\}",
          explanation:
            "\\(n = 22\\) is a positive whole number, so \\(90\\) really is in the sequence — it is the \\(22\\)nd term. (A non-integer \\(n\\) would have meant \\(90\\) was not a term.)",
        },
      ],
      finalAnswer: "\\(90\\) is the \\(22\\)nd term (\\(n = 22\\)).",
      canonicalAnswer: "22",
      commonMistakes: [
        "Dividing \\(90\\) by \\(4\\) without first subtracting \\(2\\).",
        "Giving the value \\(90\\) instead of the position \\(n = 22\\).",
      ],
    },
  },
  {
    id: "ga52-006",
    topicRef: "ga52",
    topicTitle: "Arithmetic sequences and the nth term",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A sequence is \\(7,\\ 12,\\ 17,\\ 22,\\ \\dots\\) Find the value of the first term in the sequence that is greater than \\(100\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["arithmetic sequence", "nth term", "inequality", "problem solving"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the nth term rule.",
          workingLatex: "\\text{difference} = 5 \\ \\Rightarrow\\ 5n + 2",
          explanation:
            "The common difference is \\(5\\), and \\(5n\\) is \\(2\\) less than each term (\\(7, 12, \\dots\\)), so the \\(n\\)th term is \\(5n + 2\\).",
        },
        {
          stepNumber: 2,
          description: "Set up an inequality.",
          workingLatex: "5n + 2 > 100",
          explanation:
            "We want the first term that exceeds \\(100\\), so we look for the smallest whole \\(n\\) with \\(5n + 2 > 100\\).",
        },
        {
          stepNumber: 3,
          description: "Solve the inequality.",
          workingLatex: "5n > 98 \\ \\Rightarrow\\ n > 19.6",
          explanation:
            "Subtract \\(2\\): \\(100 - 2 = 98\\). Divide by \\(5\\): \\(98 \\div 5 = 19.6\\). So \\(n\\) must be greater than \\(19.6\\); the smallest whole number is \\(n = 20\\).",
        },
        {
          stepNumber: 4,
          description: "Find that term's value.",
          workingLatex: "5(20) + 2 = 102",
          explanation:
            "The \\(20\\)th term is \\(102\\). (The \\(19\\)th term is \\(5(19) + 2 = 97\\), which is below \\(100\\), confirming \\(102\\) is the first to exceed it.)",
        },
      ],
      finalAnswer: "The first term greater than \\(100\\) is \\(102\\).",
      canonicalAnswer: "102",
      commonMistakes: [
        "Rounding \\(19.6\\) down to \\(19\\) and giving \\(97\\), which is below \\(100\\).",
        "Giving the position \\(20\\) instead of the term's value \\(102\\).",
      ],
    },
  },

  // ═══════════════ ga53 — SPECIAL SEQUENCES (4) ═══════════════
  {
    id: "ga53-001",
    topicRef: "ga53",
    topicTitle: "Special sequences (triangular, Fibonacci, geometric)",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Here are the first four triangular numbers: \\(1,\\ 3,\\ 6,\\ 10,\\ \\dots\\) Write down the next two triangular numbers.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["special sequences", "triangular numbers", "generating"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Spot how the gaps grow.",
          workingLatex: "3 - 1 = 2,\\ \\ 6 - 3 = 3,\\ \\ 10 - 6 = 4",
          explanation:
            "Triangular numbers are not arithmetic: the differences themselves increase by \\(1\\) each time (\\(+2, +3, +4, \\dots\\)). The next gaps will be \\(+5\\) then \\(+6\\).",
        },
        {
          stepNumber: 2,
          description: "Add the next two gaps.",
          workingLatex: "10 + 5 = 15,\\qquad 15 + 6 = 21",
          explanation:
            "Add \\(5\\) to \\(10\\) to get the 5th triangular number, then add \\(6\\) to get the 6th.",
        },
        {
          stepNumber: 3,
          description: "State the next two terms.",
          workingLatex: "15,\\ 21",
          explanation:
            "The next two triangular numbers are \\(15\\) and \\(21\\). (Each is also a running total: \\(1+2+3+4+5 = 15\\), \\(+6 = 21\\).)",
        },
      ],
      finalAnswer: "\\(15\\) and \\(21\\).",
      commonMistakes: [
        "Treating the sequence as arithmetic and adding a constant difference.",
      ],
    },
  },
  {
    id: "ga53-002",
    topicRef: "ga53",
    topicTitle: "Special sequences (triangular, Fibonacci, geometric)",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "A Fibonacci-type sequence begins \\(1,\\ 1,\\ 2,\\ 3,\\ 5,\\ 8,\\ \\dots\\) where each term is the sum of the two terms before it. Write down the next two terms.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["special sequences", "Fibonacci", "generating"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Add the last two known terms.",
          workingLatex: "5 + 8 = 13",
          explanation:
            "The rule is \"add the two previous terms\". The last two given are \\(5\\) and \\(8\\), so the next term is \\(13\\).",
        },
        {
          stepNumber: 2,
          description: "Add the new last two terms.",
          workingLatex: "8 + 13 = 21",
          explanation:
            "Now the last two terms are \\(8\\) and \\(13\\); their sum is \\(21\\).",
        },
        {
          stepNumber: 3,
          description: "State the next two terms.",
          workingLatex: "13,\\ 21",
          explanation:
            "The sequence continues \\(\\dots, 8, 13, 21, \\dots\\), so the next two terms are \\(13\\) and \\(21\\).",
        },
      ],
      finalAnswer: "\\(13\\) and \\(21\\).",
      commonMistakes: [
        "Adding a constant difference instead of the two previous terms.",
      ],
    },
  },
  {
    id: "ga53-003",
    topicRef: "ga53",
    topicTitle: "Special sequences (triangular, Fibonacci, geometric)",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The square numbers are \\(1,\\ 4,\\ 9,\\ 16,\\ \\dots\\) Work out the \\(8\\)th square number.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["special sequences", "square numbers", "nth term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the rule for square numbers.",
          workingLatex: "n\\text{th square number} = n^2",
          explanation:
            "The square numbers are \\(1^2, 2^2, 3^2, \\dots\\); the \\(n\\)th square number is simply \\(n^2\\).",
        },
        {
          stepNumber: 2,
          description: "Substitute n = 8.",
          workingLatex: "8^2 = 64",
          explanation:
            "The 8th square number is \\(8^2 = 8 \\times 8 = 64\\).",
        },
      ],
      finalAnswer: "The 8th square number is \\(64\\).",
      canonicalAnswer: "64",
      commonMistakes: [
        "Computing \\(8 \\times 2 = 16\\) instead of \\(8^2\\).",
        "Continuing the differences by hand and slipping by one term.",
      ],
    },
  },
  {
    id: "ga53-004",
    topicRef: "ga53",
    topicTitle: "Special sequences (triangular, Fibonacci, geometric)",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A geometric sequence is \\(2,\\ 6,\\ 18,\\ 54,\\ \\dots\\) Each term is multiplied by the same number to get the next. Work out the \\(6\\)th term.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["special sequences", "geometric", "common ratio"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the common ratio.",
          workingLatex: "6 \\div 2 = 3,\\qquad 18 \\div 6 = 3",
          explanation:
            "Dividing each term by the one before gives the same value \\(3\\), so the constant multiplier (common ratio) is \\(3\\).",
        },
        {
          stepNumber: 2,
          description: "Continue past the 4th term.",
          workingLatex: "54 \\cdot 3 = 162",
          explanation:
            "The 4th term is \\(54\\); multiplying by \\(3\\) gives the 5th term, \\(162\\).",
        },
        {
          stepNumber: 3,
          description: "Find the 6th term.",
          workingLatex: "162 \\cdot 3 = 486",
          explanation:
            "Multiply the 5th term by \\(3\\) once more: \\(162 \\times 3 = 486\\). So the 6th term is \\(486\\).",
        },
      ],
      finalAnswer: "The 6th term is \\(486\\).",
      canonicalAnswer: "486",
      commonMistakes: [
        "Adding a constant difference instead of multiplying by the ratio.",
        "Stopping at the 5th term \\(162\\).",
      ],
    },
  },
];
