/**
 * Topic: Composite functions
 * Ref: ga21  (DfE A7)
 * Strand: Algebra — GCSE Maths (Higher tier)
 *
 * Coverage: composite functions using the convention that fg(x) means f(g(x)) —
 *   the INNER function g is applied FIRST, then the result is fed into the OUTER
 *   function f. Clusters:
 *   (1) evaluate a composite at a number, e.g. f(x)=2x+1, g(x)=x^2 → fg(3), gf(3);
 *   (2) find the composite as a simplified expression, e.g. fg(x), gf(x);
 *   (3) ff(x) — a function composed with itself;
 *   (4) demonstrate that order matters in general (fg ≠ gf);
 *   (5) solve composite equations, e.g. solve fg(x)=value, including items that
 *       mix in quadratics.
 *   Throughout, the solutions make the order explicit: which function is "inner"
 *   (done first) and which is "outer", and they stress keeping the inner
 *   expression inside BRACKETS when substituting it into the outer rule.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga21-001 .. ga21-004  (4)
 *   - Standard:   ga21-005 .. ga21-018  (14)
 *   - Challenge:  ga21-019 .. ga21-030  (12)
 * Id range: ga21-001 .. ga21-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) for fractions and \\cdot for
 *   multiplication, per hard project rules.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga21-001",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Given \\(f(x)=2x+1\\) and \\(g(x)=x^2\\), find \\(fg(3)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["composite functions", "evaluate composite", "order of operations"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Decide which function is applied first.",
          workingLatex: "fg(3) = f\\big(g(3)\\big)",
          explanation:
            "fg means f(g(x)), so the INNER function g acts first on the input 3, and its output is then fed into the OUTER function f. Work from the inside out.",
        },
        {
          stepNumber: 2,
          description: "Apply g to 3 first.",
          workingLatex: "g(3) = 3^2 = 9",
          explanation:
            "g(x)=x^2, so replacing x by 3 gives 3 squared, which is 9. This is the number we now hand to f.",
        },
        {
          stepNumber: 3,
          description: "Feed that result into f.",
          workingLatex: "f(9) = 2\\cdot 9 + 1 = 18 + 1 = 19",
          explanation:
            "f(x)=2x+1, so f(9)=2(9)+1. Always finish the inner function before starting the outer one.",
        },
      ],
      finalAnswer: "\\(19\\)",
      canonicalAnswer: "19",
    },
  },
  {
    id: "ga21-002",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Given \\(f(x)=2x+1\\) and \\(g(x)=x^2\\), find \\(gf(3)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["composite functions", "evaluate composite", "order matters"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function — this time it is f.",
          workingLatex: "gf(3) = g\\big(f(3)\\big)",
          explanation:
            "gf means g(f(x)). The letter next to the input is f, so f acts first; its output is then put into g. Note this is the reverse order to fg(3).",
        },
        {
          stepNumber: 2,
          description: "Apply f to 3 first.",
          workingLatex: "f(3) = 2\\cdot 3 + 1 = 6 + 1 = 7",
          explanation:
            "f(x)=2x+1, so f(3)=2(3)+1=7. This 7 is the input for g.",
        },
        {
          stepNumber: 3,
          description: "Feed that result into g.",
          workingLatex: "g(7) = 7^2 = 49",
          explanation:
            "g(x)=x^2, so g(7)=49. Compare with fg(3)=19 from the previous question: swapping the order changes the answer.",
        },
      ],
      finalAnswer: "\\(49\\)",
      canonicalAnswer: "49",
    },
  },
  {
    id: "ga21-003",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Given \\(f(x)=3x-2\\) and \\(g(x)=x+5\\), find \\(fg(4)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["composite functions", "evaluate composite", "linear functions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the composite inside-out.",
          workingLatex: "fg(4) = f\\big(g(4)\\big)",
          explanation:
            "fg(4)=f(g(4)): the inner function g is applied to 4 first, then f is applied to the result.",
        },
        {
          stepNumber: 2,
          description: "Apply g first.",
          workingLatex: "g(4) = 4 + 5 = 9",
          explanation: "g(x)=x+5, so g(4)=9. This is the input to f.",
        },
        {
          stepNumber: 3,
          description: "Apply f to that result.",
          workingLatex: "f(9) = 3\\cdot 9 - 2 = 27 - 2 = 25",
          explanation:
            "f(x)=3x-2, so f(9)=3(9)-2=25. Working from the inside out keeps the order correct.",
        },
      ],
      finalAnswer: "\\(25\\)",
      canonicalAnswer: "25",
    },
  },
  {
    id: "ga21-004",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Given \\(f(x)=x-3\\) and \\(g(x)=2x\\), find \\(ff(10)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["composite functions", "self-composition", "ff(x)"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Understand ff as f applied twice.",
          workingLatex: "ff(10) = f\\big(f(10)\\big)",
          explanation:
            "ff(x) means f(f(x)): apply f to the input, then apply f again to whatever comes out. (g is not used in this part.)",
        },
        {
          stepNumber: 2,
          description: "Apply f the first time.",
          workingLatex: "f(10) = 10 - 3 = 7",
          explanation: "f(x)=x-3, so f(10)=7. This output becomes the next input.",
        },
        {
          stepNumber: 3,
          description: "Apply f again to that result.",
          workingLatex: "f(7) = 7 - 3 = 4",
          explanation:
            "f(7)=7-3=4. Each application of f simply subtracts 3, so doing it twice subtracts 6 in total: 10-6=4, which checks.",
        },
      ],
      finalAnswer: "\\(4\\)",
      canonicalAnswer: "4",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga21-005",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Given \\(f(x)=2x+1\\) and \\(g(x)=x^2\\), find an expression for \\(fg(x)\\), simplifying your answer.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "composite expression", "fg(x)"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State which function goes inside.",
          workingLatex: "fg(x) = f\\big(g(x)\\big)",
          explanation:
            "fg(x)=f(g(x)). The inner function g is applied first, so g(x) becomes the new 'input' that we put into f.",
        },
        {
          stepNumber: 2,
          description: "Replace g(x) by its rule.",
          workingLatex: "g(x) = x^2",
          explanation:
            "g(x)=x^2, so the thing we are about to substitute into f is the expression x^2.",
        },
        {
          stepNumber: 3,
          description: "Substitute the WHOLE inner expression into f, in brackets.",
          workingLatex: "f\\big(x^2\\big) = 2\\big(x^2\\big) + 1",
          explanation:
            "f(x)=2x+1 means 'double the input, then add 1'. The input is now x^2. Putting x^2 in brackets prevents errors; here it just multiplies by 2.",
        },
        {
          stepNumber: 4,
          description: "Simplify.",
          workingLatex: "2x^2 + 1",
          explanation:
            "2(x^2)=2x^2, so fg(x)=2x^2+1. Check at x=3: 2(9)+1=19, matching fg(3) from question 1.",
        },
      ],
      finalAnswer: "\\(2x^2+1\\)",
      canonicalAnswer: "2x^2+1",
    },
  },
  {
    id: "ga21-006",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Given \\(f(x)=2x+1\\) and \\(g(x)=x^2\\), find an expression for \\(gf(x)\\), simplifying your answer.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "composite expression", "order matters"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function — now it is f.",
          workingLatex: "gf(x) = g\\big(f(x)\\big)",
          explanation:
            "gf(x)=g(f(x)). f is applied first, so f(x) is the input to g. This is the reverse composite to fg(x).",
        },
        {
          stepNumber: 2,
          description: "Write the inner expression.",
          workingLatex: "f(x) = 2x + 1",
          explanation:
            "f(x)=2x+1, so the whole expression 2x+1 is what we now feed into g.",
        },
        {
          stepNumber: 3,
          description: "Substitute (2x+1) into g, keeping it in brackets.",
          workingLatex: "g\\big(2x+1\\big) = \\big(2x+1\\big)^2",
          explanation:
            "g(x)=x^2 means 'square the input'. The input is 2x+1, so we square the whole bracket. Dropping the bracket here would be a serious error.",
        },
        {
          stepNumber: 4,
          description: "Expand the square.",
          workingLatex:
            "(2x+1)^2 = (2x)^2 + 2\\cdot(2x)\\cdot 1 + 1^2 = 4x^2 + 4x + 1",
          explanation:
            "Using (a+b)^2=a^2+2ab+b^2 with a=2x, b=1. So gf(x)=4x^2+4x+1. Check at x=3: 4(9)+4(3)+1=36+12+1=49, matching gf(3). Since 4x^2+4x+1 ≠ 2x^2+1, this confirms fg ≠ gf.",
        },
      ],
      finalAnswer: "\\(4x^2+4x+1\\)",
      canonicalAnswer: "4x^2+4x+1",
    },
  },
  {
    id: "ga21-007",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Given \\(f(x)=3x-2\\) and \\(g(x)=x+5\\), find an expression for \\(fg(x)\\), simplifying your answer.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "composite expression", "linear functions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the composite with g inside.",
          workingLatex: "fg(x) = f\\big(g(x)\\big) = f\\big(x+5\\big)",
          explanation:
            "fg(x)=f(g(x)); g acts first, so g(x)=x+5 is the input to f.",
        },
        {
          stepNumber: 2,
          description: "Substitute (x+5) into f, in brackets.",
          workingLatex: "f\\big(x+5\\big) = 3\\big(x+5\\big) - 2",
          explanation:
            "f(x)=3x-2: replace the input x by the whole expression x+5. The bracket ensures the 3 multiplies BOTH the x and the 5.",
        },
        {
          stepNumber: 3,
          description: "Expand and collect.",
          workingLatex: "3(x+5) - 2 = 3x + 15 - 2 = 3x + 13",
          explanation:
            "Distribute the 3, then combine the constants 15-2=13. Check at x=4: 3(4)+13=25, matching fg(4) from question 3.",
        },
      ],
      finalAnswer: "\\(3x+13\\)",
      canonicalAnswer: "3x+13",
    },
  },
  {
    id: "ga21-008",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Given \\(f(x)=3x-2\\) and \\(g(x)=x+5\\), find an expression for \\(gf(x)\\), simplifying your answer.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "composite expression", "order matters"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the composite with f inside.",
          workingLatex: "gf(x) = g\\big(f(x)\\big) = g\\big(3x-2\\big)",
          explanation:
            "gf(x)=g(f(x)); f acts first, so f(x)=3x-2 is the input to g.",
        },
        {
          stepNumber: 2,
          description: "Substitute (3x-2) into g.",
          workingLatex: "g\\big(3x-2\\big) = \\big(3x-2\\big) + 5",
          explanation:
            "g(x)=x+5 means 'add 5 to the input'. The input is 3x-2, so we add 5 to that whole expression.",
        },
        {
          stepNumber: 3,
          description: "Simplify the constants.",
          workingLatex: "3x - 2 + 5 = 3x + 3",
          explanation:
            "Combine -2+5=3, giving gf(x)=3x+3. Compare with fg(x)=3x+13: equal x-terms but different constants, so once again fg ≠ gf.",
        },
      ],
      finalAnswer: "\\(3x+3\\)",
      canonicalAnswer: "3x+3",
    },
  },
  {
    id: "ga21-009",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Given \\(f(x)=x^2-1\\) and \\(g(x)=4x+3\\), find \\(gf(2)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "evaluate composite", "quadratic inner"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the composite inside-out.",
          workingLatex: "gf(2) = g\\big(f(2)\\big)",
          explanation:
            "gf(2)=g(f(2)): the inner function f acts on 2 first, then g acts on the result.",
        },
        {
          stepNumber: 2,
          description: "Apply f first.",
          workingLatex: "f(2) = 2^2 - 1 = 4 - 1 = 3",
          explanation:
            "f(x)=x^2-1, so square 2 to get 4, then subtract 1 to get 3.",
        },
        {
          stepNumber: 3,
          description: "Apply g to that result.",
          workingLatex: "g(3) = 4\\cdot 3 + 3 = 12 + 3 = 15",
          explanation: "g(x)=4x+3, so g(3)=4(3)+3=15.",
        },
      ],
      finalAnswer: "\\(15\\)",
      canonicalAnswer: "15",
    },
  },
  {
    id: "ga21-010",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Given \\(f(x)=x^2-1\\) and \\(g(x)=4x+3\\), find \\(fg(2)\\). Compare your answer with \\(gf(2)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "evaluate composite", "order matters"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the composite inside-out.",
          workingLatex: "fg(2) = f\\big(g(2)\\big)",
          explanation:
            "fg(2)=f(g(2)): the inner function g acts on 2 first, then f acts on the result. Note g is inner here, the reverse of gf(2).",
        },
        {
          stepNumber: 2,
          description: "Apply g first.",
          workingLatex: "g(2) = 4\\cdot 2 + 3 = 8 + 3 = 11",
          explanation: "g(x)=4x+3, so g(2)=11.",
        },
        {
          stepNumber: 3,
          description: "Apply f to that result.",
          workingLatex: "f(11) = 11^2 - 1 = 121 - 1 = 120",
          explanation: "f(x)=x^2-1, so f(11)=121-1=120.",
        },
        {
          stepNumber: 4,
          description: "Compare.",
          workingLatex: "fg(2) = 120, \\quad gf(2) = 15",
          explanation:
            "fg(2)=120 but gf(2)=15, so fg(2) ≠ gf(2). The order in which functions are applied genuinely matters.",
        },
      ],
      finalAnswer: "\\(120\\)",
      canonicalAnswer: "120",
    },
  },
  {
    id: "ga21-011",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Given \\(f(x)=x+4\\), find an expression for \\(ff(x)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "self-composition", "ff(x)"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret ff(x).",
          workingLatex: "ff(x) = f\\big(f(x)\\big)",
          explanation:
            "ff(x) means apply f, then apply f again to the result.",
        },
        {
          stepNumber: 2,
          description: "Write the inner expression.",
          workingLatex: "f(x) = x + 4",
          explanation: "The first application gives x+4; this becomes the input to the second f.",
        },
        {
          stepNumber: 3,
          description: "Substitute (x+4) into f.",
          workingLatex: "f\\big(x+4\\big) = \\big(x+4\\big) + 4",
          explanation:
            "f adds 4 to its input. The input is now x+4, so we add another 4.",
        },
        {
          stepNumber: 4,
          description: "Simplify.",
          workingLatex: "x + 4 + 4 = x + 8",
          explanation:
            "ff(x)=x+8. This makes sense: applying 'add 4' twice adds 8 overall.",
        },
      ],
      finalAnswer: "\\(x+8\\)",
      canonicalAnswer: "x+8",
    },
  },
  {
    id: "ga21-012",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Given \\(f(x)=3x\\), find an expression for \\(ff(x)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "self-composition", "ff(x)"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret ff(x).",
          workingLatex: "ff(x) = f\\big(f(x)\\big)",
          explanation: "Apply f, then apply f again to the output.",
        },
        {
          stepNumber: 2,
          description: "Inner application.",
          workingLatex: "f(x) = 3x",
          explanation: "f multiplies its input by 3, giving 3x as the input to the outer f.",
        },
        {
          stepNumber: 3,
          description: "Substitute 3x into f.",
          workingLatex: "f\\big(3x\\big) = 3\\big(3x\\big)",
          explanation:
            "f triples its input; the input is 3x, so f(3x)=3·(3x).",
        },
        {
          stepNumber: 4,
          description: "Simplify.",
          workingLatex: "3\\cdot 3x = 9x",
          explanation:
            "ff(x)=9x. Tripling twice multiplies by 3·3=9 overall.",
        },
      ],
      finalAnswer: "\\(9x\\)",
      canonicalAnswer: "9x",
    },
  },
  {
    id: "ga21-013",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Given \\(f(x)=2x-5\\), find and simplify an expression for \\(ff(x)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "self-composition", "linear functions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret ff(x).",
          workingLatex: "ff(x) = f\\big(f(x)\\big) = f\\big(2x-5\\big)",
          explanation:
            "Apply f once to get 2x-5, then feed that whole expression back into f.",
        },
        {
          stepNumber: 2,
          description: "Substitute (2x-5) into f, in brackets.",
          workingLatex: "f\\big(2x-5\\big) = 2\\big(2x-5\\big) - 5",
          explanation:
            "f(x)=2x-5: double the input then subtract 5. The input is 2x-5, so the bracket ensures the 2 multiplies the whole thing.",
        },
        {
          stepNumber: 3,
          description: "Expand and collect.",
          workingLatex: "2(2x-5) - 5 = 4x - 10 - 5 = 4x - 15",
          explanation:
            "Distribute the 2 to get 4x-10, then subtract 5 to reach 4x-15. Check at x=10: f(10)=15, f(15)=25; and 4(10)-15=25. Agrees.",
        },
      ],
      finalAnswer: "\\(4x-15\\)",
      canonicalAnswer: "4x-15",
    },
  },
  {
    id: "ga21-014",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Given \\(f(x)=x^2\\) and \\(g(x)=x-3\\), find and simplify an expression for \\(fg(x)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "composite expression", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up with g inside.",
          workingLatex: "fg(x) = f\\big(g(x)\\big) = f\\big(x-3\\big)",
          explanation:
            "fg(x)=f(g(x)); g acts first, so g(x)=x-3 is the input to f.",
        },
        {
          stepNumber: 2,
          description: "Substitute (x-3) into f.",
          workingLatex: "f\\big(x-3\\big) = \\big(x-3\\big)^2",
          explanation:
            "f(x)=x^2 squares its input; the input is x-3, so we square the whole bracket.",
        },
        {
          stepNumber: 3,
          description: "Expand the square.",
          workingLatex:
            "(x-3)^2 = x^2 - 2\\cdot 3 \\cdot x + 3^2 = x^2 - 6x + 9",
          explanation:
            "Using (a-b)^2=a^2-2ab+b^2. A common slip is writing x^2-9; the middle term -6x must not be dropped. So fg(x)=x^2-6x+9.",
        },
      ],
      finalAnswer: "\\(x^2-6x+9\\)",
      canonicalAnswer: "x^2-6x+9",
    },
  },
  {
    id: "ga21-015",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Given \\(f(x)=x^2\\) and \\(g(x)=x-3\\), find and simplify an expression for \\(gf(x)\\), and state whether \\(fg(x)=gf(x)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "composite expression", "order matters"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up with f inside.",
          workingLatex: "gf(x) = g\\big(f(x)\\big) = g\\big(x^2\\big)",
          explanation:
            "gf(x)=g(f(x)); f acts first, so f(x)=x^2 is the input to g.",
        },
        {
          stepNumber: 2,
          description: "Substitute x^2 into g.",
          workingLatex: "g\\big(x^2\\big) = x^2 - 3",
          explanation:
            "g(x)=x-3 subtracts 3 from its input. The input is x^2, so gf(x)=x^2-3.",
        },
        {
          stepNumber: 3,
          description: "Compare with fg(x).",
          workingLatex: "fg(x) = x^2 - 6x + 9, \\quad gf(x) = x^2 - 3",
          explanation:
            "From the previous question fg(x)=x^2-6x+9. These differ (e.g. the -6x term), so fg(x) ≠ gf(x).",
        },
        {
          stepNumber: 4,
          description: "Confirm numerically.",
          workingLatex: "x=1:\\ fg(1)=1-6+9=4,\\quad gf(1)=1-3=-2",
          explanation:
            "At x=1 the two composites give 4 and -2 — different values — confirming order matters.",
        },
      ],
      finalAnswer: "\\(gf(x)=x^2-3\\) and \\(fg(x)\\neq gf(x)\\)",
      canonicalAnswer: "x^2-3",
    },
  },
  {
    id: "ga21-016",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Given \\(f(x)=\\dfrac{12}{x}\\) and \\(g(x)=x+1\\), find \\(fg(3)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "evaluate composite", "reciprocal function"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Inside-out.",
          workingLatex: "fg(3) = f\\big(g(3)\\big)",
          explanation:
            "fg(3)=f(g(3)): apply g to 3 first, then f to the result.",
        },
        {
          stepNumber: 2,
          description: "Apply g first.",
          workingLatex: "g(3) = 3 + 1 = 4",
          explanation: "g(x)=x+1, so g(3)=4. This is the input to f.",
        },
        {
          stepNumber: 3,
          description: "Apply f to that result.",
          workingLatex: "f(4) = \\frac{12}{4} = 3",
          explanation:
            "f(x)=12/x, so f(4)=12/4=3.",
        },
      ],
      finalAnswer: "\\(3\\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "ga21-017",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Given \\(f(x)=\\dfrac{12}{x}\\) and \\(g(x)=x+1\\), find an expression for \\(fg(x)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "composite expression", "reciprocal function"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up with g inside.",
          workingLatex: "fg(x) = f\\big(g(x)\\big) = f\\big(x+1\\big)",
          explanation:
            "g acts first, so g(x)=x+1 is the input to f.",
        },
        {
          stepNumber: 2,
          description: "Substitute (x+1) into f, in brackets.",
          workingLatex: "f\\big(x+1\\big) = \\frac{12}{x+1}",
          explanation:
            "f(x)=12/x replaces the denominator x by the whole input. The input is x+1, so the entire x+1 goes on the bottom (keep it bracketed as a single denominator).",
        },
        {
          stepNumber: 3,
          description: "State the result and check.",
          workingLatex: "fg(x) = \\frac{12}{x+1}",
          explanation:
            "fg(x)=12/(x+1). Check at x=3: 12/4=3, matching fg(3) from the previous question.",
        },
      ],
      finalAnswer: "\\(\\dfrac{12}{x+1}\\)",
      canonicalAnswer: "12/(x+1)",
    },
  },
  {
    id: "ga21-018",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Given \\(f(x)=4x+1\\) and \\(g(x)=2x-3\\), solve \\(fg(x)=29\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "solve composite", "linear equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Build the composite expression first.",
          workingLatex: "fg(x) = f\\big(g(x)\\big) = f\\big(2x-3\\big)",
          explanation:
            "fg(x)=f(g(x)); g acts first, so 2x-3 is the input to f.",
        },
        {
          stepNumber: 2,
          description: "Substitute (2x-3) into f.",
          workingLatex: "f\\big(2x-3\\big) = 4\\big(2x-3\\big) + 1",
          explanation:
            "f(x)=4x+1: the 4 multiplies the whole bracket 2x-3.",
        },
        {
          stepNumber: 3,
          description: "Expand and simplify.",
          workingLatex: "4(2x-3) + 1 = 8x - 12 + 1 = 8x - 11",
          explanation:
            "So fg(x)=8x-11.",
        },
        {
          stepNumber: 4,
          description: "Set equal to 29 and solve.",
          workingLatex: "8x - 11 = 29 \\;\\Rightarrow\\; 8x = 40 \\;\\Rightarrow\\; x = 5",
          explanation:
            "Add 11 to both sides (8x=40) then divide by 8 (x=5). Check: g(5)=7, f(7)=29. Correct.",
        },
      ],
      finalAnswer: "\\(x=5\\)",
      canonicalAnswer: "5",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga21-019",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Given \\(f(x)=2x+3\\) and \\(g(x)=x^2-x\\), find and simplify an expression for \\(gf(x)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "composite expression", "quadratic outer"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up with f inside.",
          workingLatex: "gf(x) = g\\big(f(x)\\big) = g\\big(2x+3\\big)",
          explanation:
            "gf(x)=g(f(x)); f acts first, so 2x+3 is the input to g.",
        },
        {
          stepNumber: 2,
          description: "Substitute (2x+3) into g everywhere x appears.",
          workingLatex: "g\\big(2x+3\\big) = \\big(2x+3\\big)^2 - \\big(2x+3\\big)",
          explanation:
            "g(x)=x^2-x has TWO occurrences of x. Replace BOTH by the bracketed input 2x+3 — a common error is forgetting the second one.",
        },
        {
          stepNumber: 3,
          description: "Expand the square term.",
          workingLatex:
            "(2x+3)^2 = 4x^2 + 12x + 9",
          explanation:
            "Using (a+b)^2 with a=2x, b=3: (2x)^2=4x^2, 2·(2x)·3=12x, 3^2=9.",
        },
        {
          stepNumber: 4,
          description: "Combine the two parts.",
          workingLatex:
            "(4x^2 + 12x + 9) - (2x + 3) = 4x^2 + 12x + 9 - 2x - 3",
          explanation:
            "Subtract the bracket 2x+3; the minus sign applies to both terms inside it.",
        },
        {
          stepNumber: 5,
          description: "Collect like terms.",
          workingLatex: "4x^2 + 10x + 6",
          explanation:
            "12x-2x=10x and 9-3=6, so gf(x)=4x^2+10x+6. Check at x=1: f(1)=5, g(5)=25-5=20; and 4+10+6=20. Agrees.",
        },
      ],
      finalAnswer: "\\(4x^2+10x+6\\)",
      canonicalAnswer: "4x^2+10x+6",
    },
  },
  {
    id: "ga21-020",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Given \\(f(x)=x^2+1\\), find and simplify an expression for \\(ff(x)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "self-composition", "quartic expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret ff(x).",
          workingLatex: "ff(x) = f\\big(f(x)\\big) = f\\big(x^2+1\\big)",
          explanation:
            "Apply f once to get x^2+1, then feed the whole expression back into f.",
        },
        {
          stepNumber: 2,
          description: "Substitute (x^2+1) into f.",
          workingLatex: "f\\big(x^2+1\\big) = \\big(x^2+1\\big)^2 + 1",
          explanation:
            "f squares its input then adds 1. The input is x^2+1, so square that bracket and add 1.",
        },
        {
          stepNumber: 3,
          description: "Expand the squared bracket.",
          workingLatex:
            "(x^2+1)^2 = (x^2)^2 + 2\\cdot x^2 \\cdot 1 + 1^2 = x^4 + 2x^2 + 1",
          explanation:
            "Treat x^2 as the 'a' in (a+b)^2; note (x^2)^2=x^4, not x^3.",
        },
        {
          stepNumber: 4,
          description: "Add the outer +1 and simplify.",
          workingLatex: "x^4 + 2x^2 + 1 + 1 = x^4 + 2x^2 + 2",
          explanation:
            "ff(x)=x^4+2x^2+2. Check at x=1: f(1)=2, f(2)=5; and 1+2+2=5. Agrees.",
        },
      ],
      finalAnswer: "\\(x^4+2x^2+2\\)",
      canonicalAnswer: "x^4+2x^2+2",
    },
  },
  {
    id: "ga21-021",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Given \\(f(x)=x^2\\) and \\(g(x)=x-2\\), solve \\(fg(x)=9\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "solve composite", "quadratic equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Form the composite.",
          workingLatex: "fg(x) = f\\big(g(x)\\big) = f\\big(x-2\\big) = (x-2)^2",
          explanation:
            "g acts first (g(x)=x-2), then f squares it, giving (x-2)^2.",
        },
        {
          stepNumber: 2,
          description: "Set the composite equal to 9.",
          workingLatex: "(x-2)^2 = 9",
          explanation:
            "We need the values of x for which the composite outputs 9.",
        },
        {
          stepNumber: 3,
          description: "Take square roots of BOTH signs.",
          workingLatex: "x - 2 = \\pm 3",
          explanation:
            "Squaring loses sign information, so x-2 could be +3 OR -3. A common error is keeping only the +3 root.",
        },
        {
          stepNumber: 4,
          description: "Solve each case.",
          workingLatex: "x = 2 + 3 = 5 \\quad \\text{or} \\quad x = 2 - 3 = -1",
          explanation:
            "Check: g(5)=3, f(3)=9; g(-1)=-3, f(-3)=9. Both work, so x=5 or x=-1.",
        },
      ],
      finalAnswer: "\\(x=5\\) or \\(x=-1\\)",
      canonicalAnswer: "{-1, 5}",
    },
  },
  {
    id: "ga21-022",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Given \\(f(x)=5x-4\\) and \\(g(x)=\\dfrac{x+4}{5}\\), find \\(fg(x)\\). What do you notice about the result?",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "inverse functions", "identity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Form the composite.",
          workingLatex: "fg(x) = f\\big(g(x)\\big) = f\\!\\left(\\frac{x+4}{5}\\right)",
          explanation:
            "g acts first; its output (x+4)/5 is the input to f.",
        },
        {
          stepNumber: 2,
          description: "Substitute (x+4)/5 into f.",
          workingLatex: "f\\!\\left(\\frac{x+4}{5}\\right) = 5\\cdot\\frac{x+4}{5} - 4",
          explanation:
            "f(x)=5x-4: multiply the input by 5, then subtract 4.",
        },
        {
          stepNumber: 3,
          description: "Cancel the 5.",
          workingLatex: "5\\cdot\\frac{x+4}{5} = x + 4",
          explanation:
            "The factor 5 cancels the denominator 5, leaving x+4.",
        },
        {
          stepNumber: 4,
          description: "Finish and interpret.",
          workingLatex: "(x+4) - 4 = x",
          explanation:
            "fg(x)=x, the identity. This happens because g is the inverse of f: applying one then the other returns the original input. So fg(2)=2.",
        },
      ],
      finalAnswer: "\\(fg(x)=x\\) (so e.g. \\(fg(2)=2\\))",
      canonicalAnswer: "x",
    },
  },
  {
    id: "ga21-023",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Given \\(f(x)=\\dfrac{1}{x-1}\\) and \\(g(x)=2x\\), find and simplify an expression for \\(fg(x)\\), and state the value of \\(x\\) that must be excluded.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "composite expression", "domain restriction"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Form the composite.",
          workingLatex: "fg(x) = f\\big(g(x)\\big) = f\\big(2x\\big)",
          explanation:
            "g acts first (g(x)=2x), so 2x is the input to f.",
        },
        {
          stepNumber: 2,
          description: "Substitute 2x into f.",
          workingLatex: "f\\big(2x\\big) = \\frac{1}{2x - 1}",
          explanation:
            "f(x)=1/(x-1) replaces x in the denominator by the input 2x, giving 1/(2x-1).",
        },
        {
          stepNumber: 3,
          description: "Find the excluded value.",
          workingLatex: "2x - 1 = 0 \\;\\Rightarrow\\; x = \\frac{1}{2}",
          explanation:
            "Division by zero is undefined, so the denominator 2x-1 must not be 0. This excludes x=1/2.",
        },
        {
          stepNumber: 4,
          description: "State the answer.",
          workingLatex: "fg(x) = \\frac{1}{2x-1}, \\quad x \\neq \\frac{1}{2}",
          explanation:
            "So fg(x)=1/(2x-1) with x ≠ 1/2. Check at x=1: g(1)=2, f(2)=1/(2-1)=1; and 1/(2-1)=1. Agrees.",
        },
      ],
      finalAnswer: "\\(fg(x)=\\dfrac{1}{2x-1}\\), excluding \\(x=\\dfrac{1}{2}\\)",
      canonicalAnswer: "1/(2x-1)",
    },
  },
  {
    id: "ga21-024",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Given \\(f(x)=2x+1\\) and \\(g(x)=x^2\\), solve \\(fg(x)=gf(x)\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "order matters", "solve composite"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write down both composites.",
          workingLatex: "fg(x) = 2x^2 + 1, \\quad gf(x) = (2x+1)^2",
          explanation:
            "fg(x)=f(g(x))=2(x^2)+1 and gf(x)=g(f(x))=(2x+1)^2. We now set them equal.",
        },
        {
          stepNumber: 2,
          description: "Expand gf(x).",
          workingLatex: "(2x+1)^2 = 4x^2 + 4x + 1",
          explanation:
            "Expanding the square gives 4x^2+4x+1.",
        },
        {
          stepNumber: 3,
          description: "Set the two composites equal.",
          workingLatex: "2x^2 + 1 = 4x^2 + 4x + 1",
          explanation:
            "We solve for the special inputs where the order does NOT change the output.",
        },
        {
          stepNumber: 4,
          description: "Bring everything to one side.",
          workingLatex: "0 = 4x^2 + 4x + 1 - 2x^2 - 1 = 2x^2 + 4x",
          explanation:
            "Subtract 2x^2+1 from both sides; the +1 constants cancel, leaving 2x^2+4x=0.",
        },
        {
          stepNumber: 5,
          description: "Factorise and solve.",
          workingLatex: "2x(x + 2) = 0 \\;\\Rightarrow\\; x = 0 \\ \\text{or}\\ x = -2",
          explanation:
            "Common factor 2x. Check x=-2: fg(-2)=2(4)+1=9, gf(-2)=(-4+1)^2=9. Equal, as required. So x=0 or x=-2.",
        },
      ],
      finalAnswer: "\\(x=0\\) or \\(x=-2\\)",
      canonicalAnswer: "{-2, 0}",
    },
  },
  {
    id: "ga21-025",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Given \\(f(x)=x+3\\) and \\(g(x)=x^2-2x\\), solve \\(gf(x)=0\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "solve composite", "quadratic equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Form gf(x).",
          workingLatex: "gf(x) = g\\big(f(x)\\big) = g\\big(x+3\\big)",
          explanation:
            "f acts first (f(x)=x+3), so x+3 is the input to g.",
        },
        {
          stepNumber: 2,
          description: "Substitute (x+3) into both occurrences of x in g.",
          workingLatex: "g\\big(x+3\\big) = (x+3)^2 - 2(x+3)",
          explanation:
            "g(x)=x^2-2x: replace x by x+3 in the square AND in the -2x term.",
        },
        {
          stepNumber: 3,
          description: "Expand.",
          workingLatex:
            "(x+3)^2 - 2(x+3) = x^2 + 6x + 9 - 2x - 6",
          explanation:
            "(x+3)^2=x^2+6x+9 and -2(x+3)=-2x-6.",
        },
        {
          stepNumber: 4,
          description: "Collect like terms.",
          workingLatex: "x^2 + 4x + 3",
          explanation:
            "6x-2x=4x and 9-6=3, so gf(x)=x^2+4x+3.",
        },
        {
          stepNumber: 5,
          description: "Solve gf(x)=0 by factorising.",
          workingLatex:
            "x^2 + 4x + 3 = 0 \\;\\Rightarrow\\; (x+1)(x+3) = 0 \\;\\Rightarrow\\; x = -1 \\ \\text{or}\\ x = -3",
          explanation:
            "Two numbers multiplying to 3 and adding to 4 are 1 and 3. Check x=-3: f(-3)=0, g(0)=0. Correct. So x=-1 or x=-3.",
        },
      ],
      finalAnswer: "\\(x=-1\\) or \\(x=-3\\)",
      canonicalAnswer: "{-3, -1}",
    },
  },
  {
    id: "ga21-026",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Given \\(f(x)=2x-1\\), \\(g(x)=x+4\\) and \\(h(x)=x^2\\), find and simplify an expression for \\(fgh(x)\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "triple composite", "composite expression"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the triple composite from the inside out.",
          workingLatex: "fgh(x) = f\\Big(g\\big(h(x)\\big)\\Big)",
          explanation:
            "fgh(x)=f(g(h(x))). The rightmost function h acts FIRST, then g, then f last. Work outwards one layer at a time.",
        },
        {
          stepNumber: 2,
          description: "Innermost: apply h.",
          workingLatex: "h(x) = x^2",
          explanation: "h squares the input, giving x^2 to pass to g.",
        },
        {
          stepNumber: 3,
          description: "Next: apply g to x^2.",
          workingLatex: "g\\big(x^2\\big) = x^2 + 4",
          explanation:
            "g(x)=x+4 adds 4 to its input x^2, giving x^2+4 to pass to f.",
        },
        {
          stepNumber: 4,
          description: "Outermost: apply f to (x^2+4).",
          workingLatex: "f\\big(x^2+4\\big) = 2\\big(x^2+4\\big) - 1",
          explanation:
            "f(x)=2x-1: double the bracket then subtract 1.",
        },
        {
          stepNumber: 5,
          description: "Expand and simplify.",
          workingLatex: "2(x^2+4) - 1 = 2x^2 + 8 - 1 = 2x^2 + 7",
          explanation:
            "fgh(x)=2x^2+7. Check at x=1: h(1)=1, g(1)=5, f(5)=9; and 2(1)+7=9. Agrees.",
        },
      ],
      finalAnswer: "\\(2x^2+7\\)",
      canonicalAnswer: "2x^2+7",
    },
  },
  {
    id: "ga21-027",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The functions \\(f\\) and \\(g\\) satisfy \\(g(x)=x-2\\) and \\(fg(x)=3x+1\\). Find \\(f(x)\\), then evaluate \\(f(5)\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "find unknown function", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Express the composite in terms of f.",
          workingLatex: "fg(x) = f\\big(g(x)\\big) = f\\big(x-2\\big) = 3x + 1",
          explanation:
            "Since g(x)=x-2, the composite f(g(x)) is f(x-2), and we are told this equals 3x+1.",
        },
        {
          stepNumber: 2,
          description: "Introduce a substitution to find the rule of f.",
          workingLatex: "\\text{Let } u = x - 2 \\;\\Rightarrow\\; x = u + 2",
          explanation:
            "We want f in terms of its own input. Calling the input u, we have u=x-2, so x=u+2. Now rewrite the right-hand side using u.",
        },
        {
          stepNumber: 3,
          description: "Rewrite 3x+1 in terms of u.",
          workingLatex: "f(u) = 3(u+2) + 1 = 3u + 6 + 1 = 3u + 7",
          explanation:
            "Replace x by u+2 in 3x+1. This gives the rule for f acting on input u.",
        },
        {
          stepNumber: 4,
          description: "State f(x).",
          workingLatex: "f(x) = 3x + 7",
          explanation:
            "Renaming the input letter back to x, f(x)=3x+7. Check: f(g(x))=f(x-2)=3(x-2)+7=3x+1. Correct.",
        },
        {
          stepNumber: 5,
          description: "Evaluate f(5).",
          workingLatex: "f(5) = 3\\cdot 5 + 7 = 15 + 7 = 22",
          explanation: "Substitute x=5 into f(x)=3x+7 to get 22.",
        },
      ],
      finalAnswer: "\\(f(x)=3x+7\\) and \\(f(5)=22\\)",
      canonicalAnswer: "22",
    },
  },
  {
    id: "ga21-028",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Given \\(f(x)=x^2-5\\) and \\(g(x)=x+1\\), solve \\(fg(x)=11\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "solve composite", "quadratic equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Form fg(x).",
          workingLatex: "fg(x) = f\\big(g(x)\\big) = f\\big(x+1\\big)",
          explanation: "g acts first (g(x)=x+1), so x+1 is the input to f.",
        },
        {
          stepNumber: 2,
          description: "Substitute (x+1) into f.",
          workingLatex: "f\\big(x+1\\big) = (x+1)^2 - 5",
          explanation:
            "f(x)=x^2-5 squares its input then subtracts 5; the input is x+1.",
        },
        {
          stepNumber: 3,
          description: "Expand.",
          workingLatex: "(x+1)^2 - 5 = x^2 + 2x + 1 - 5 = x^2 + 2x - 4",
          explanation:
            "(x+1)^2=x^2+2x+1, then subtract 5 to get fg(x)=x^2+2x-4.",
        },
        {
          stepNumber: 4,
          description: "Set equal to 11 and rearrange.",
          workingLatex:
            "x^2 + 2x - 4 = 11 \\;\\Rightarrow\\; x^2 + 2x - 15 = 0",
          explanation:
            "Subtract 11 from both sides to get a quadratic equal to zero: -4-11=-15.",
        },
        {
          stepNumber: 5,
          description: "Factorise and solve.",
          workingLatex:
            "(x+5)(x-3) = 0 \\;\\Rightarrow\\; x = -5 \\ \\text{or}\\ x = 3",
          explanation:
            "Numbers multiplying to -15, adding to 2 are 5 and -3. Check x=3: g(3)=4, f(4)=16-5=11. Correct. So x=-5 or x=3.",
        },
      ],
      finalAnswer: "\\(x=-5\\) or \\(x=3\\)",
      canonicalAnswer: "{-5, 3}",
    },
  },
  {
    id: "ga21-029",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Given \\(f(x)=\\dfrac{x}{x+1}\\), find and simplify an expression for \\(ff(x)\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "self-composition", "algebraic fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret ff(x).",
          workingLatex:
            "ff(x) = f\\big(f(x)\\big) = f\\!\\left(\\frac{x}{x+1}\\right)",
          explanation:
            "Apply f once to get x/(x+1), then feed that whole fraction back into f.",
        },
        {
          stepNumber: 2,
          description: "Substitute the fraction into f, replacing every x.",
          workingLatex:
            "f\\!\\left(\\frac{x}{x+1}\\right) = \\frac{\\frac{x}{x+1}}{\\frac{x}{x+1} + 1}",
          explanation:
            "f(x)=x/(x+1): the input goes on top, and 'input + 1' on the bottom. The input is the whole fraction x/(x+1).",
        },
        {
          stepNumber: 3,
          description: "Simplify the denominator into a single fraction.",
          workingLatex:
            "\\frac{x}{x+1} + 1 = \\frac{x}{x+1} + \\frac{x+1}{x+1} = \\frac{x + (x+1)}{x+1} = \\frac{2x+1}{x+1}",
          explanation:
            "Write 1 as (x+1)/(x+1) so both terms share the denominator x+1, then add the numerators.",
        },
        {
          stepNumber: 4,
          description: "Rewrite the compound fraction as a division.",
          workingLatex:
            "\\frac{\\frac{x}{x+1}}{\\frac{2x+1}{x+1}} = \\frac{x}{x+1} \\div \\frac{2x+1}{x+1}",
          explanation:
            "A fraction over a fraction means divide the top by the bottom.",
        },
        {
          stepNumber: 5,
          description: "Flip and multiply.",
          workingLatex:
            "\\frac{x}{x+1} \\cdot \\frac{x+1}{2x+1} = \\frac{x\\,(x+1)}{(x+1)(2x+1)}",
          explanation:
            "Dividing by a fraction is multiplying by its reciprocal.",
        },
        {
          stepNumber: 6,
          description: "Cancel the common (x+1) factor.",
          workingLatex: "\\frac{x}{2x+1}",
          explanation:
            "The factor (x+1) cancels top and bottom (valid when x ≠ -1), so ff(x)=x/(2x+1). Check at x=1: f(1)=1/2, f(1/2)=(1/2)/(3/2)=1/3; and 1/(2+1)=1/3. Agrees.",
        },
      ],
      finalAnswer: "\\(\\dfrac{x}{2x+1}\\)",
      canonicalAnswer: "x/(2x+1)",
    },
  },
  {
    id: "ga21-030",
    topicRef: "ga21",
    topicTitle: "Composite functions",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Given \\(f(x)=2x+5\\) and \\(g(x)=x^2-3\\), solve \\(gf(x)=fg(x)\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["composite functions", "order matters", "solve composite"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Build gf(x).",
          workingLatex:
            "gf(x) = g\\big(2x+5\\big) = (2x+5)^2 - 3",
          explanation:
            "f acts first; (2x+5) is the input to g(x)=x^2-3, so square it and subtract 3.",
        },
        {
          stepNumber: 2,
          description: "Expand gf(x).",
          workingLatex:
            "(2x+5)^2 - 3 = 4x^2 + 20x + 25 - 3 = 4x^2 + 20x + 22",
          explanation:
            "(2x+5)^2=4x^2+20x+25; subtract 3 to get 4x^2+20x+22.",
        },
        {
          stepNumber: 3,
          description: "Build fg(x).",
          workingLatex:
            "fg(x) = f\\big(x^2-3\\big) = 2(x^2-3) + 5",
          explanation:
            "g acts first; (x^2-3) is the input to f(x)=2x+5, so double it and add 5.",
        },
        {
          stepNumber: 4,
          description: "Expand fg(x).",
          workingLatex: "2(x^2-3) + 5 = 2x^2 - 6 + 5 = 2x^2 - 1",
          explanation: "So fg(x)=2x^2-1.",
        },
        {
          stepNumber: 5,
          description: "Set gf(x)=fg(x) and collect on one side.",
          workingLatex:
            "4x^2 + 20x + 22 = 2x^2 - 1 \\;\\Rightarrow\\; 2x^2 + 20x + 23 = 0",
          explanation:
            "Subtract 2x^2-1 from both sides: 4x^2-2x^2=2x^2, 22-(-1)=23. This quadratic does not factorise nicely, so use the formula.",
        },
        {
          stepNumber: 6,
          description: "Apply the quadratic formula.",
          workingLatex:
            "x = \\frac{-20 \\pm \\sqrt{20^2 - 4\\cdot 2\\cdot 23}}{2\\cdot 2} = \\frac{-20 \\pm \\sqrt{400 - 184}}{4} = \\frac{-20 \\pm \\sqrt{216}}{4}",
          explanation:
            "With a=2, b=20, c=23, the discriminant is 400-184=216 (positive, so two real roots).",
        },
        {
          stepNumber: 7,
          description: "Simplify the surd and the fraction.",
          workingLatex:
            "\\sqrt{216} = 6\\sqrt{6} \\;\\Rightarrow\\; x = \\frac{-20 \\pm 6\\sqrt{6}}{4} = \\frac{-10 \\pm 3\\sqrt{6}}{2}",
          explanation:
            "216=36·6 so √216=6√6. Divide every term by the common factor 2 to reach the simplest exact form. So x=(-10±3√6)/2.",
        },
      ],
      finalAnswer: "\\(x=\\dfrac{-10+3\\sqrt{6}}{2}\\) or \\(x=\\dfrac{-10-3\\sqrt{6}}{2}\\)",
      canonicalAnswer: "{(-10-3*sqrt(6))/2, (-10+3*sqrt(6))/2}",
    },
  },
];
